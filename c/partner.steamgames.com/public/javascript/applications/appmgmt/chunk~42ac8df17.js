(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [42012],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _?.jsondata?.read_more_link;
          if (!_) return;
          const _ = (0, _._)(_).toLocaleLowerCase();
          return _ ? [_] : void 0;
        }
        function _(_, _) {
          return (0, _._)(_, _(_));
        }
        function _(_, _) {
          if (!_) return "";
          if (!(0, _._)(_)) return (0, _._)(_);
          const _ = _(_, _) ? (0, _._)(_) : _;
          return (_._.IN_CLIENT ? "steam://openurl_external/" : "") + _;
        }
        function _(_, _, _) {
          const _ = _.toLowerCase().startsWith("http") ? _ : "http://" + _;
          return (0, _.jsx)(_, {
            url: _,
            event: _,
            children: _ || _,
          });
        }
        const _ = (_) => {
          const { url: _, event: _, className: _, style: _ } = _;
          let _ = (0, _._)(_);
          _ = _(_, _);
          const _ = (0, _._)(_) ? "noopener nofollow" : void 0,
            _ =
              typeof _.children == "string" &&
              _.children.length > 0 &&
              _ &&
              !_.startsWith("steam://")
                ? (0, _._)(_)
                : void 0;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            direction: "top",
            children: (0, _.jsx)(_._, {
              className: _,
              href: _,
              rel: _,
              _: _._,
              style: _,
              children: _.children,
            }),
          });
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = _._.InitFromClanID(_),
            _ = `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = await fetch(_, {
            method: "GET",
          });
          if (_.status == 404) return null;
          if (!_._) throw new Error(`Server returned ${_.status}`);
          const _ = await _.json();
          return _.success != _._ ? null : _;
        }
        function _(_) {
          return ["clantoclaninfo", _];
        }
        function _(_) {
          return ["apptoclanid", _];
        }
        function _(_, _ = "group") {
          return ["vanitytoclanid", _, _?.toLocaleLowerCase()];
        }
        function _(_) {
          const _ = _?.[0];
          return (
            _ == "clantoclaninfo" || _ == "apptoclanid" || _ == "vanitytoclanid"
          );
        }
        const _ = new WeakSet();
        function _(_) {
          if (!_.has(_)) {
            _.add(_);
            for (const _ of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              _.setQueryDefaults(_, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const _ = new WeakMap();
        function _(_) {
          if (!_) return null;
          let _ = _.get(_);
          return (
            _ ||
              ((_ = {
                ..._,
                clanSteamID: _.clanSteamIDString
                  ? new _._(_.clanSteamIDString)
                  : _._.InitFromClanID(_.clanAccountID),
              }),
              _.set(_, _)),
            _
          );
        }
        function _(_) {
          const { msg: _, success: _, ..._ } = _;
          return {
            ..._,
            rss_language: _.rss_language ? _.rss_language : _.Bhc,
          };
        }
        function _(_, _) {
          if (!_) return null;
          _(_);
          const _ = _(_);
          return (
            _.setQueryData(_(_.clanAccountID), _),
            _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
            _.vanity_url &&
              _.setQueryData(_(_.vanity_url, "group"), _.clanAccountID),
            _
          );
        }
        function _(_, _) {
          for (const _ of _) _(_, _);
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return (
            _(_),
            {
              queryKey: _(_ ?? null),
              queryFn: async () => (_ ? _(_, await _(_)) : null),
              enabled: _ !== void 0,
              select: _,
            }
          );
        }
        function _(_, _) {
          return (
            _(_),
            {
              queryKey: _(_),
              queryFn: async () => _(_, await _(_))?.clanAccountID ?? null,
              enabled: !!_,
            }
          );
        }
        function _(_, _, _ = "group") {
          return (
            _(_),
            {
              queryKey: _(_, _),
              queryFn: async () => {
                if (_ == "store") {
                  const _ = _.getQueryData(_(_, "group"));
                  if (_) return _;
                }
                const _ = _ == "store" ? await _(_) : await _(_);
                return _(_, _)?.clanAccountID ?? null;
              },
              enabled: !!_,
            }
          );
        }
        function _(_) {
          return _.isPending ? void 0 : (_.data ?? null);
        }
        function _(_) {
          return _(_.BIsClanAccount() ? _.GetAccountID() : void 0);
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_(_, _));
          return _(_ ? _(_) : void 0);
        }
        function _(_, _ = "group") {
          const _ = (0, _._)(),
            _ = (0, _._)(_(_, _, _));
          return _(_ ? _(_) : void 0);
        }
        function _(_, _) {
          if (_) return _(_.getQueryData(_(_))) ?? void 0;
        }
        function _(_, _) {
          if (_) return _(_.getQueryData(_(_)), _);
        }
        function _(_, _, _) {
          if (!_) return;
          const _ = _ ? [_] : ["store", "group"];
          for (const _ of _) {
            const _ = _(_.getQueryData(_(_, _)), _);
            if (_) return _;
          }
        }
        async function _(_, _) {
          return _ ? _(await _.fetchQuery(_(_, _))) : null;
        }
        async function _(_, _) {
          return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
        }
        async function _(_, _, _ = "group") {
          return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_) {
          let _ = {
            get_appids: !0,
            _: _._.LANGUAGE,
          };
          const _ = new URLSearchParams(_).toString(),
            _ = `${_._.STORE_BASE_URL}curator/${_}/ajaxgetcreatorhomeinfo/?${_}`,
            _ = await fetch(_, {
              method: "GET",
            });
          if (!_._) throw new Error(`Server returned ${_.status}`);
          const _ = await _.json();
          return _.success != _._ ? null : _;
        }
        function _(_) {
          return (0, _._)(_(_));
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = await _(_);
              if (_) {
                const {
                  success: _,
                  err_msg: _,
                  warning: _,
                  warning_msg: _,
                  ..._
                } = _;
                return _;
              }
              return null;
            },
            enabled: !!_,
          };
        }
        function _(_) {
          return ["creatorhomebyaccount", _];
        }
        function _(_, _) {
          if (_.vanity) {
            switch (_) {
              case "publisher":
                return `${_._.STORE_BASE_URL}publisher/${_.vanity}/`;
              case "franchise":
                return `${_._.STORE_BASE_URL}franchise/${_.vanity}/`;
            }
            return `${_._.STORE_BASE_URL}developer/${_.vanity}/`;
          }
          return `${_._.STORE_BASE_URL}curator/${_.creator_clan_id}/`;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_) {
          if (_.preferenceControls.isTechnicallyNecessary) return !0;
          const _ = GetCurrentCookiePreferences();
          if (!_) return !1;
          switch (_.preference_state) {
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_AllowAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultAllowAll:
              return !0;
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_RejectAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultRejectAll:
              return !1;
          }
          return (
            "IsAllowed" in _.preferenceControls &&
            _.preferenceControls.IsAllowed(_)
          );
        }
        const _ = {
            name: "cookieSettings",
            options: {
              secure: !0,
              httpOnly: !1,
              path: "/",
              sameSite: "none",
              maxAge: 1e3 * 3600 * 24 * 365,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "steamLoginSecure",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "steamDidLoginRefresh",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "none",
              maxAge: 5 * 1e3,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "sessionid",
            options: {
              secure: !0,
              path: "/",
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "strResponsiveViewPrefs",
            options: {
              maxAge: 365 * 24 * 60 * 60 * 1e3,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "mobileClient",
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "presentation_mode",
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "Steam_Language",
            options: {
              secure: !0,
              path: "/",
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "shoppingCartGID",
            options: {
              path: "/",
              secure: !0,
              maxAge: 1e3 * 3600 * 24 * 7,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "app_impressions",
            options: {
              path: "/",
              secure: !0,
            },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed: (_) =>
                !!_.valve_analytics?.product_impressions_tracking,
            },
          },
          _ = {
            name: "steamLoginSpoofSteamID",
            options: {
              path: "/",
              secure: !0,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "steamCountry",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "steamCountryUseIPCountry",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "browserid",
            options: {
              path: "/",
              secure: !0,
              maxAge: 3600 * 24 * 7 * 365,
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed(_) {
                return _.valve_analytics?.product_impressions_tracking ?? !1;
              },
            },
          },
          _ = {
            name: "clientHints",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !1,
              maxAge: 3600 * 24 * 7 * 365,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "webTradeEligibility",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !0,
              maxAge: 3600 * 24 * 1,
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "steamparental",
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "clientsessionid",
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          },
          _ = {
            name: "steambrowserredirect",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "lax",
            },
            preferenceControls: {
              isTechnicallyNecessary: !0,
            },
          };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
            } = _ ?? {},
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
                return PkgLocalization.Localize("#Time_Today");
              if ((_.setDate(_.getDate() + 1), _ < _))
                return PkgLocalization.Localize("#Time_Tomorrow");
            } else if ((_.setDate(_.getDate() - 1), _ >= _))
              return PkgLocalization.Localize("#Time_Yesterday");
          }
          const _ = {
            month: _ ? "long" : "short",
            day: "numeric",
          };
          return (
            _ && (_.weekday = "long"),
            _.toLocaleDateString(GetPreferredLocales(), _)
          );
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
              ...(_?.bForce24HourClock || _(_[0]) ? _ : _),
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
          return _.toLocaleDateString(GetPreferredLocales(), _);
        }
        function _(_) {
          return _.toLocaleDateString(GetPreferredLocales(), {
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
          return _.toLocaleDateString(GetPreferredLocales(), {
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
              return PkgLocalization.Localize(
                _
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                _.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return PkgLocalization.Localize(
                _
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                _.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return PkgLocalization.Localize(
                _
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                _.getUTCFullYear(),
              );
            default:
              return PkgLocalization.Localize(
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
            _ = _ ?? !0;
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
            _ = _ ?? !0;
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
        "use strict";
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
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = (0, _._)(_._.STORE_BASE_URL, _, _._.country_code);
          return (await (await fetch(_)).json()).rgFollowedApps || [];
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (!_) return new Set();
              const _ = await _(_, _);
              return new Set(_);
            },
            staleTime: 600 * 1e3,
          };
        }
        function _(_) {
          const { data: _ } = _();
          return _ === void 0 || _ == null ? void 0 : _.has(_);
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (_, _) => {
            _.setQueryData(_(_), (_) => {
              if (!_) return;
              const _ = new Set(_);
              if (_) for (const _ of _) _.delete(_);
              if (_) for (const _ of _) _.add(_);
              return _;
            });
          };
        }
        function _(_) {
          return ["AccountFollowApps", _ ?? 0];
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = _(),
            _ = _._.accountid;
          return (0, _._)({
            mutationKey: ["useUpdateAppFollow", _, _, _],
            mutationFn: async () => {
              if (_ == null) return;
              const _ = _._.STORE_BASE_URL + "explore/followgame",
                _ = new FormData();
              _.append("appid", "" + _),
                _.append("sessionid", (0, _._)()),
                _ || _.append("unfollow", "1"),
                _ && _.append("snr", _);
              const _ = await fetch(_, {
                method: "POST",
                body: _,
                credentials: "include",
              });
              if (!_._)
                throw new Error(
                  `Follow App ${_ ? "add" : "remove"} of appid ${_} failed (${_.status})`,
                );
            },
            onMutate: () => {
              _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
            },
            onError: () => {
              _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
            },
            onSuccess: () => {
              (0, _._)();
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = (0, _._)(_._.STORE_BASE_URL, _, _._.country_code),
            _ = await (await fetch(_)).json(),
            _ = new Set();
          _.rgCreatorsIgnored?.forEach((_) => _.add(_)),
            _.rgCreatorsFollowed?.forEach((_) => _.add(_));
          const _ = new Set();
          return (
            _.rgCreatorsIgnored?.forEach((_) => _.add(_)),
            [
              ...(_.rgCuratorsIgnored ?? []),
              ...(_.rgCurators
                ? Object.values(_.rgCurators ?? {}).map((_) => _.clanid)
                : []),
            ].map((_) => {
              const _ = _.has(_);
              return {
                clanid: _,
                ignored: _,
                followed: !_,
                is_creator: _.has(_),
              };
            })
          );
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              const _ = new Map();
              if (_)
                try {
                  (await _(_, _)).forEach((_) => _.set(_.clanid, _));
                } catch (_) {
                  console.error("GetCuratorAffinityQuery", _);
                }
              return _;
            },
            enabled: !!_,
          };
        }
        function _(_) {
          const { data: _ } = _();
          return _ === void 0 || _ == null ? void 0 : !!_.get(_)?.followed;
        }
        function _(_) {
          const { data: _ } = _();
          return _ === void 0 || _ == null ? void 0 : !!_.get(_)?.ignored;
        }
        function _(_) {
          const { data: _ } = _();
          if (_ === void 0 || _ == null || !_.has(_)) return;
          const _ = _.get(_);
          return !!(_.followed && _.is_creator);
        }
        function _(_) {
          const { data: _ } = _();
          if (_ === void 0 || _ == null || !_.has(_)) return;
          const _ = _.get(_);
          return !!(_.ignored && _.is_creator);
        }
        function _() {
          return _._.EREALM != _._.k_ESteamRealmChina;
        }
        function _() {
          return Config.EREALM != ESteamRealm.k_ESteamRealmChina;
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (_, _, _, _) => {
            _.setQueryData(_(_), (_) => {
              if (!_) return;
              const _ = new Map(_);
              return (
                _?.forEach((_) => {
                  _.has(_.clanAccountID)
                    ? (_.get(_.clanAccountID).followed = !0)
                    : _.set(_.clanAccountID, {
                        clanid: _.clanAccountID,
                        followed: !0,
                        ignored: !1,
                        is_creator: !1,
                      });
                }),
                _?.forEach((_) => {
                  _.has(_.clanAccountID)
                    ? (_.get(_.clanAccountID).ignored = !0)
                    : _.set(_.clanAccountID, {
                        clanid: _.clanAccountID,
                        followed: !1,
                        ignored: !0,
                        is_creator: !1,
                      });
                }),
                _?.forEach((_) => _.delete(_.clanAccountID)),
                _?.forEach((_) => {
                  let _ = _.get(_.clanAccountID);
                  _ && (_.is_creator = !0);
                }),
                _
              );
            });
          };
        }
        function _(_) {
          return ["CuratorAffinityQueryKey", _ ?? 0];
        }
        var _ = ((_) => (
          (_[(_.k_ECuratorFollow = 1)] = "k_ECuratorFollow"),
          (_[(_.k_ECuratorUnfollow = 2)] = "k_ECuratorUnfollow"),
          (_[(_.k_ECuratorIgnore = 3)] = "k_ECuratorIgnore"),
          (_[(_.k_ECuratorUnignore = 4)] = "k_ECuratorUnignore"),
          _
        ))(_ || {});
        function _(_, _) {
          const _ = _(),
            _ = _._.accountid;
          return (0, _._)({
            mutationKey: ["useUpdateCuratorAffinity", _, _, _],
            mutationFn: async () => {
              if (_ == null) return !1;
              const _ = _ == _.k_ECuratorFollow || _ == _.k_ECuratorUnfollow,
                _ = _ == _.k_ECuratorFollow || _ == _.k_ECuratorIgnore,
                _ = `${_._.STORE_BASE_URL}curators/${_ ? "ajaxfollow/" : "ajaxignore/"}`,
                _ = new FormData();
              _.append("clanid", "" + _),
                _.append("sessionid", (0, _._)()),
                _.append(_ ? "follow" : "ignore", _ ? "1" : "0");
              const _ = await fetch(_, {
                  method: "POST",
                  body: _,
                  credentials: "include",
                }),
                _ = await _.json();
              if (!_._)
                throw new Error(
                  `Curator Affinity: ${_ ? "Follow" : "Ignore"} Currator ${_ ? "add" : "remove"} failed (${_.status} / ${_.msg})`,
                );
              return _.is_creator;
            },
            onMutate: () => {
              if (_ != null) {
                const _ =
                  _ == _.k_ECuratorUnfollow || _ == _.k_ECuratorUnignore;
                _(
                  _ == _.k_ECuratorFollow
                    ? [
                        {
                          clanAccountID: _,
                        },
                      ]
                    : void 0,
                  _ == _.k_ECuratorIgnore
                    ? [
                        {
                          clanAccountID: _,
                        },
                      ]
                    : void 0,
                  _
                    ? [
                        {
                          clanAccountID: _,
                        },
                      ]
                    : void 0,
                );
              }
            },
            onError: (_) => {
              if (_ != null) {
                const _ = _ == _.k_ECuratorFollow || _ == _.k_ECuratorIgnore;
                _(
                  _ == _.k_ECuratorUnfollow
                    ? [
                        {
                          clanAccountID: _,
                        },
                      ]
                    : void 0,
                  _ == _.k_ECuratorUnignore
                    ? [
                        {
                          clanAccountID: _,
                        },
                      ]
                    : void 0,
                  _
                    ? [
                        {
                          clanAccountID: _,
                        },
                      ]
                    : void 0,
                  _
                    ? [
                        {
                          clanAccountID: _,
                          is_creator: !0,
                        },
                      ]
                    : void 0,
                );
              }
            },
            onSuccess: (_) => {
              _ &&
                _ &&
                _(void 0, void 0, void 0, [
                  {
                    clanAccountID: _,
                    is_creator: !0,
                  },
                ]),
                (0, _._)();
            },
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = (_) => {
          const {
              className: _,
              bIgnored: _,
              bApplyingFollowing: _,
              bFollowing: _,
              onFollowClick: _,
              followType: _,
            } = _,
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
          if (!_()) return null;
          let _ = null;
          switch (_) {
            case "app":
              _ = (0, _._)("#text_store_follow_desc");
              break;
            case "creatorhome":
              _ = (0, _._)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              _ = (0, _._)("#steam_curator_follow_ttip");
              break;
            case "group":
              _ = (0, _._)("#steam_group_follow_ttip");
          }
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    toolTipContent: !_ && !_ ? _ : void 0,
                    children: (0, _.jsxs)(_._, {
                      className: (0, _._)(
                        _().Button,
                        _().FollowButton,
                        "FollowButton",
                        _,
                        _ ? "Followed" : "",
                      ),
                      onClick: () => {
                        _._.logged_in ? _() : _();
                      },
                      children: [
                        _ &&
                          (0, _.jsx)(_._, {
                            size: 15,
                          }),
                        !_ && (_ || _) && (0, _.jsx)(_.Jlk, {}),
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _().FollowBtnText,
                            "FollowBtnText",
                          ),
                          children:
                            !_ &&
                            (_
                              ? (0, _._)("#Button_Followed")
                              : _
                                ? (0, _._)("#Button_Ignored")
                                : (0, _._)("#Button_Follow")),
                        }),
                      ],
                    }),
                  }),
                  _,
                ],
              })
            : (console.error("CommonFollowButton unexpected type", _), null);
        };
        function _(_) {
          const {
              followType: _,
              fnSuccessCallback: _,
              clanAccountID: _,
              className: _,
            } = _,
            [_, _] = _.useState(!1),
            { data: _ } = (0, _._)(_ ? void 0 : _),
            _ = _(_),
            _ = _(_),
            { mutateAsync: _ } = _(
              _,
              _ ? _.k_ECuratorUnfollow : _.k_ECuratorFollow,
            ),
            [_, _, _] = (0, _._)(),
            _ = _.useCallback(async () => {
              _ != null && (_(!0), await _(), _(!1), _?.(_));
            }, [_, _, _]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                className: _,
                bIgnored: !!_,
                bFollowing: !!_,
                bApplyingFollowing: _,
                onFollowClick: () => {
                  _._.is_limited ? _() : _();
                },
                followType:
                  _ ?? (_?.is_creator_home ? "creatorhome" : "steamcurator"),
              }),
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_._, {
                  closeModal: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { appid: _, className: _ } = _,
            [_, _] = _.useState(!1),
            _ = _(_),
            _ = (0, _._)(_),
            _ = (0, _._)(),
            _ = _._.GetSNRLinkParam(_),
            { mutateAsync: _ } = _(_, !_, _),
            _ = _.useCallback(async () => {
              _(!0), await _(), _(!1);
            }, [_]);
          return (0, _.jsx)(_, {
            className: _,
            bIgnored: !!_,
            bFollowing: !!_,
            bApplyingFollowing: _,
            onFollowClick: _,
            followType: "app",
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (_) => {
          let _ = _._.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
          return (0, _.jsx)(_._, {
            strTitle: (0, _._)("#Informational_Message"),
            onCancel: _.closeModal,
            onOK: _.closeModal,
            bAlertDialog: !0,
            children: (0, _.jsx)("div", {
              children: (0, _._)(
                _.strTokenOverride || "#User_LimitedAccount",
                (0, _.jsx)("a", {
                  href: _,
                  target: _._.IN_CLIENT ? void 0 : "_blank",
                  rel: "noopener noreferrer",
                  children: (0, _._)("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          $YD: () => _,
          BGM: () => _,
          BWK: () => _,
          Buq: () => _,
          CSO: () => _,
          CYA: () => _,
          DHU: () => _,
          EEh: () => _,
          Ftl: () => _,
          FzB: () => _,
          G1H: () => _,
          Gkz: () => _,
          Gxx: () => _,
          HuG: () => _,
          IEJ: () => _,
          IbE: () => _,
          Izv: () => _,
          J1r: () => _,
          JEe: () => _,
          Jtk: () => _,
          Jzd: () => _,
          KCN: () => _,
          KoH: () => _,
          LGs: () => _,
          LqT: () => _,
          MNG: () => _,
          Mhp: () => _,
          MnB: () => _,
          PYD: () => _,
          PoK: () => _,
          QA9: () => _,
          QBr: () => _,
          R$d: () => _,
          R1B: () => _,
          RW$: () => _,
          RsL: () => _,
          Sv2: () => _,
          UEV: () => _,
          UfY: () => _,
          Vg1: () => _,
          VmN: () => _,
          Vov: () => _,
          W5v: () => _,
          Wo$: () => _,
          Wq7: () => _,
          X$z: () => _,
          Xkc: () => _,
          Ywc: () => _,
          ZBT: () => _,
          ZUO: () => _,
          a5M: () => _,
          aNN: () => _,
          aWw: () => _,
          bPv: () => _,
          btm: () => _,
          cNr: () => _,
          cTj: () => _,
          ceg: () => _,
          dBS: () => _,
          dWZ: () => _,
          dm2: () => _,
          dpF: () => _,
          dxW: () => _,
          eQ$: () => _,
          equ: () => _,
          f_e: () => _,
          gEw: () => _,
          gGw: () => _,
          hSB: () => _,
          hwI: () => _,
          iZ9: () => _,
          jXd: () => _,
          jx3: () => _,
          jzL: () => _,
          kpV: () => _,
          lXI: () => _,
          mG_: () => _,
          mYY: () => _,
          mvf: () => _,
          nL9: () => _,
          nNq: () => _,
          nPW: () => _,
          ng1: () => _,
          nuP: () => _,
          qhO: () => _,
          rAU: () => _,
          rNe: () => _,
          t_B: () => _,
          u7l: () => _,
          uZq: () => _,
          ubQ: () => _,
          vk_: () => _,
          vx7: () => _,
          wz4: () => _,
          yUQ: () => _,
          z3Q: () => _,
          zah: () => _,
          zwR: () => _,
        });
        const _ = 492,
          _ = 19,
          _ = 21,
          _ = 597,
          _ = 9,
          _ = 599,
          _ = 122,
          _ = 493,
          _ = 113,
          _ = 4182,
          _ = 4667,
          _ = 701,
          _ = 128,
          _ = 4345,
          _ = 699,
          _ = 1756,
          _ = 6650,
          _ = 4166,
          _ = 3871,
          _ = 12095,
          _ = 1664,
          _ = 3859,
          _ = 1742,
          _ = 4026,
          _ = 4085,
          _ = 1684,
          _ = 21978,
          _ = 1667,
          _ = 4136,
          _ = 3942,
          _ = 3964,
          _ = 1774,
          _ = 1695,
          _ = 7208,
          _ = 3839,
          _ = 1625,
          _ = 87,
          _ = 1685,
          _ = 5350,
          _ = 4004,
          _ = 1662,
          _ = 84,
          _ = 1663,
          _ = 1677,
          _ = 1773,
          _ = 1719,
          _ = 3810,
          _ = 3834,
          _ = 3843,
          _ = 4726,
          _ = 3799,
          _ = 4711,
          _ = 1693,
          _ = 1654,
          _ = 1698,
          _ = 7481,
          _ = 1721,
          _ = 1723,
          _ = 1697,
          _ = 4305,
          _ = 1755,
          _ = 1734,
          _ = 1036,
          _ = 1659,
          _ = 872,
          _ = 10397,
          _ = 7368,
          _ = 1708,
          _ = 4342,
          _ = 1027,
          _ = 3968,
          _ = 5716,
          _ = 4175,
          _ = 4234,
          _ = 8013,
          _ = 1643,
          _ = 3978,
          _ = 4255,
          _ = 12472,
          _ = 10695,
          _ = 3841,
          _ = 4106,
          _ = 4231,
          _ = 3798,
          _ = 6426,
          _ = 1716,
          _ = 1678,
          _ = 1702,
          _ = 5900,
          _ = 784,
          _ = 1741,
          _ = 3987,
          _ = 4791,
          _ = 1676,
          _ = 1621,
          _ = 3878,
          _ = 3959,
          _ = 4885,
          _ = 1775,
          _ = 4747,
          _ = 1738,
          _ = 1687,
          _ = 1646,
          _ = 4094,
          _ = 4604,
          _ = 4434,
          _ = 1743,
          _ = 9551,
          _ = 3835,
          _ = 5125,
          _ = 3916,
          _ = 3814,
          _ = 1645,
          _ = 1720,
          _ = 4190,
          _ = 5411,
          _ = 6971,
          _ = 4947,
          _ = 4295,
          _ = 4840,
          _ = 1669,
          _ = 4172,
          _ = 4252,
          _ = 4195,
          _ = 7332,
          _ = 4325,
          _ = 1710,
          _ = 8945,
          _ = 4057,
          _ = 4637,
          _ = 5851,
          _ = 1666,
          _ = 5923,
          _ = 4242,
          _ = 4168,
          _ = 4150,
          _ = 4115,
          _ = 1445,
          _ = 1754,
          _ = 5752,
          _ = 5711,
          _ = 1644,
          _ = 4695,
          _ = 4158,
          _ = 13782,
          _ = 1628,
          _ = 14139,
          _ = 3965,
          _ = 4064,
          _ = 6815,
          _ = 4486,
          _ = 5395,
          _ = 1759,
          _ = 4328,
          _ = 7948,
          _ = 13906,
          _ = 11014,
          _ = 1673,
          _ = 4758,
          _ = 1770,
          _ = 5613,
          _ = 31275,
          _ = 4191,
          _ = 4036,
          _ = 6378,
          _ = 5363,
          _ = 15045,
          _ = 4562,
          _ = 4236,
          _ = 6691,
          _ = 11123,
          _ = 44868,
          _ = 5547,
          _ = 8122,
          _ = 5186,
          _ = 4161,
          _ = 4400,
          _ = 6730,
          _ = 4975,
          _ = 4364,
          _ = 7743,
          _ = 5030,
          _ = 6129,
          _ = 9541,
          _ = 4598,
          _ = 1718,
          _ = 1777,
          _ = 7432,
          _ = 809,
          _ = 7107,
          _ = 19995,
          _ = 1665,
          _ = 10816,
          _ = 560542,
          _ = 4736,
          _ = 5154,
          _ = 16598,
          _ = 7250,
          _ = 1752,
          _ = 1616,
          _ = 17305,
          _ = 21725,
          _ = 3813,
          _ = 5794,
          _ = 4684,
          _ = 25085,
          _ = 1670,
          _ = 5348,
          _ = 5708,
          _ = 1714,
          _ = 4821,
          _ = 176981,
          _ = 3854,
          _ = 13276,
          _ = 5055,
          _ = 4046,
          _ = 1681,
          _ = 1688,
          _ = 1732,
          _ = 4508,
          _ = 12057,
          _ = 5160,
          _ = 29482,
          _ = 8666,
          _ = 16689,
          _ = 4608,
          _ = 31579,
          _ = 5179,
          _ = 4474,
          _ = 1671,
          _ = 1751,
          _ = 5502,
          _ = 3955,
          _ = 9271,
          _ = 10808,
          _ = 5608,
          _ = 1717,
          _ = 6052,
          _ = 5300,
          _ = 1647,
          _ = 5765,
          _ = 8075,
          _ = 97070,
          _ = 4878,
          _ = 15954,
          _ = 1651,
          _ = 4145,
          _ = 6910,
          _ = 22602,
          _ = 6869,
          _ = 5673,
          _ = 7569,
          _ = 6276,
          _ = 150626,
          _ = 9564,
          _ = 11333,
          _ = 3952,
          _ = 30358,
          _ = 16094,
          _ = 8093,
          _ = 5796,
          _ = 10679,
          _ = 5390,
          _ = 1254552,
          _ = 15277,
          _ = 17894,
          _ = 1680,
          _ = 1637,
          _ = 507423,
          _ = 4559,
          _ = 4155,
          _ = 9157,
          _ = 4202,
          _ = 6915,
          _ = 12686,
          _ = 1254546,
          _ = 5382,
          _ = 15564,
          _ = 18594,
          _ = 4777,
          _ = 3796,
          _ = 6625,
          _ = 5372,
          _ = 8369,
          _ = 5432,
          _ = 7423,
          _ = 24003,
          _ = 5981,
          _ = 4845,
          _ = 5230,
          _ = 198631,
          _ = 776177,
          _ = 180368,
          _ = 7926,
          _ = 7622,
          _ = 8253,
          _ = 9592,
          _ = 17770,
          _ = 6621,
          _ = 6041,
          _ = 4835,
          _ = 13577,
          _ = 4184,
          _ = 6310,
          _ = 6702,
          _ = 16250,
          _ = 42152,
          _ = 1674,
          _ = 56690,
          _ = 9204,
          _ = 6948,
          _ = 17015,
          _ = 21006,
          _ = 1730,
          _ = 7038,
          _ = 5407,
          _ = 1746,
          _ = 14906,
          _ = 4137,
          _ = 603297,
          _ = 13070,
          _ = 123332,
          _ = 198913,
          _ = 22955,
          _ = 19780,
          _ = 47827,
          _ = 5727,
          _ = 255534,
          _ = 7328,
          _ = 5914,
          _ = 19568,
          _ = 4852,
          _ = 9803,
          _ = 324176,
          _ = 17337,
          _ = 27758,
          _ = 1753,
          _ = 15868,
          _ = 71389,
          _ = 10383,
          _ = 96359,
          _ = 252854,
          _ = 856791,
          _ = 28444,
          _ = 745697,
          _ = 7309,
          _ = 129761,
          _ = 620519,
          _ = 353880,
          _ = 1084988,
          _ = 791774,
          _ = 1100689,
          _ = 5652,
          _ = 615955,
          _ = 4102,
          _ = 10437,
          _ = 3877,
          _ = 5537,
          _ = 6506,
          _ = 5379,
          _ = 10235,
          _ = 3920,
          _ = 220585,
          _ = 1100686,
          _ = 87918,
          _ = 1100687,
          _ = 26921,
          _ = 1100688,
          _ = 12190,
          _ = 13382,
          _ = 3993,
          _ = 11104,
          _ = 4994,
          _ = 32322,
          _ = 17389,
          _ = 42804,
          _ = 454187,
          _ = 9130,
          _ = 916648,
          _ = 1023537,
          _ = 33572,
          _ = 158638,
          _ = 6054,
          _ = 4535,
          _ = 91114,
          _ = 7178,
          _ = 11634,
          _ = 723991,
          _ = 1320952,
          _ = 1239876,
          _ = 23491,
          _ = 889937,
          _ = 25959,
          _ = 760247,
          _ = 37376,
          _ = 1776,
          _ = 10617,
          _ = 46348,
          _ = 20486,
          _ = 1352486,
          _ = 9626,
          _ = 52406,
          _ = 6835,
          _ = 21635,
          _ = 97376,
          _ = 552282,
          _ = 3934,
          _ = 3954,
          _ = 4162,
          _ = 4291,
          _ = 4520,
          _ = 5941,
          _ = 6214,
          _ = 7108,
          _ = 7556,
          _ = 7702,
          _ = 11095,
          _ = 14720,
          _ = 35079,
          _ = 37799,
          _ = 40500,
          _ = 42089,
          _ = 42329,
          _ = 49213,
          _ = 61357,
          _ = 117648,
          _ = 189941,
          _ = 323922,
          _ = 337964,
          _ = 769306,
          _ = 847164,
          _ = 1091588,
          _ = 1199779,
          _ = 1220528;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 0,
          _ = 1,
          _ = 1;
        function _(_) {
          return "unknown EPrivacyCookiePreferenceState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EPrivacyCookiePreferencesVersion ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.version || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    version: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    preference_state: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    content_customization: {
                      _: 3,
                      _,
                    },
                    valve_analytics: {
                      _: 4,
                      _: _,
                    },
                    third_party_analytics: {
                      _: 5,
                      _: _,
                    },
                    third_party_content: {
                      _: 6,
                      _: _,
                    },
                    utm_enabled: {
                      _: 7,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recentapps || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recentapps: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ContentCustomization";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.product_impressions_tracking || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    product_impressions_tracking: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ValveAnalytics";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.google_analytics || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    google_analytics: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.youtube || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    youtube: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    vimeo: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    sketchfab: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    twitter: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferences || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    preferences: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "AccountPrivacy.GetCookiePreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetCookiePreferences = _;
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.context || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    context: {
                      _: 2,
                      _: _._,
                    },
                    data_request: {
                      _: 3,
                      _: _._,
                    },
                    gift_info: {
                      _: 4,
                      _: _._,
                    },
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidreplayoftransid: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    for_init_purchase: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cart_items || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cart_items: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    estimated_totals: {
                      _: 5,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_item_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_item_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    item_id: {
                      _: 2,
                      _: _._,
                    },
                    store_item: {
                      _: 3,
                      _: _._,
                    },
                    gift_info: {
                      _: 4,
                      _: _._,
                    },
                    errors: {
                      _: 5,
                      _: _,
                    },
                    warnings: {
                      _: 6,
                      _: _,
                    },
                    subtotal: {
                      _: 7,
                      _: _._,
                    },
                    price_when_added: {
                      _: 8,
                      _: _._,
                    },
                    original_price: {
                      _: 9,
                      _: _._,
                    },
                    coupon_applied: {
                      _: 10,
                      _: _._,
                    },
                    coupon_discount: {
                      _: 11,
                      _: _._,
                    },
                    can_purchase_as_gift: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    restrict_add_additional_to_cart: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    quantity: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    included_packageids: {
                      _: 15,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.owned_appids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    owned_appids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    duplicate_appids_in_cart: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    unavailable_in_country: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    invalid_coupon: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    invalid_coupon_for_item: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    coupon_exclusive_promo: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    cannot_purchase_as_gift: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    invalid_item: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    too_many_in_cart: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    has_existing_billing_agreement: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    missing_must_own_appids: {
                      _: 11,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    adult_content_restricted: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    commercial_license_restricted: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gift_not_valid_for_recipient_region: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Errors";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.owned_appids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    owned_appids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    owned_appids_extra_copy: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readInt32,
                      pbr: _._.readPackedInt32,
                      _: _._.writeRepeatedInt32,
                    },
                    appids_in_mastersub: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    price_has_changed: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    non_refundable: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gift_recipient_higher_price: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cart_appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cart_appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    mastersub_appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subtotal || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    subtotal: {
                      _: 1,
                      _: _._,
                    },
                    wallet_balance: {
                      _: 2,
                      _: _._,
                    },
                    exceeding_wallet_balance: {
                      _: 3,
                      _: _._,
                    },
                    remaining_wallet_balance: {
                      _: 4,
                      _: _._,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_EstimatedTotals";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.item_ids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    item_ids: {
                      _: 1,
                      _: _._,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.ownership_info || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ownership_info: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    accountid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    already_owns: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    wishes_for: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    partial_owns_appids: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    partial_wishes_for: {
                      _: 5,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.item_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    item_id: {
                      _: 1,
                      _: _._,
                    },
                    friend_ownership: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.item_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    item_id: {
                      _: 1,
                      _: _._,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.packageids_added || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    packageids_added: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    appids_added: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    purchase_result_detail: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg("Checkout.ValidateCart#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.ValidateCart = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Checkout.GetFriendOwnershipForGifting#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetFriendOwnershipForGifting = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Checkout.AddFreeLicense#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.AddFreeLicense = _;
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown ELineItemPurchaseNotice ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountid_giftee || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    accountid_giftee: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    gift_message: {
                      _: 2,
                      _: _,
                    },
                    time_scheduled_send: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    email_giftee: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gifteename || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gifteename: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    message: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sentiment: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    signature: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.amount_in_cents || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    amount_in_cents: {
                      _: 1,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    currency_code: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    formatted_amount: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.couponid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    couponid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupon: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    coupon_description: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    large_icon_url: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    discount_pct: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4;
        function _(_) {
          return "unknown ERecommendationIgnoreReason ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.ignore_list || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    ignore_list: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    packageid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    reason: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response_IgnoreListEntry";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "StorePreferences.GetIgnoreList#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetIgnoreList = _;
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function _() {
          return _.useContext(_);
        }
        function _(_) {
          return jsx(_.Provider, {
            value: _.ImpressionTracker,
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appID: _, feature: _, depth: _, children: _ } = _,
            _ = (0, _._)(_, _),
            _ = _(),
            [_, _] = _.useState(void 0),
            _ = _.useCallback(
              (_) => {
                _.isIntersecting &&
                  _((_) =>
                    _?.appID == _ && _?.snr == _
                      ? _
                      : {
                          appID: _,
                          snr: _,
                        },
                  );
              },
              [_, _],
            );
          (0, _.useEffect)(() => {
            _ && _.appID != null && _.AddImpression(_.appID, _.snr);
          }, [_, _]);
          const _ = (0, _._)(_),
            _ = _ && (!_ || (_.appID != _ && _.snr != _)),
            _ = (0, _._)(_.props.ref, _ ? _ : void 0);
          return _.cloneElement(_, {
            ref: _,
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return _ == "bundle"
            ? "bundle"
            : _ == "sub"
              ? "sub"
              : (BIsSaleItemType(_), "app");
        }
        function _(_) {
          return _ == _._._
            ? "bundle"
            : _ == _._._
              ? "sub"
              : (_ == _._._, "app");
        }
        function _(_, _) {
          const _ = _ || (_ ? _._ : _._);
          return [!!_, _];
        }
        const _ = (_) => {
          const { appid: _ } = _,
            _ = (0, _.jsx)("div", {
              className: "ImpressionTrackedElement",
              children: _.children,
            });
          return _
            ? (0, _.jsx)(_, {
                appID: _,
                children: _,
              })
            : _;
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { closeModal: _, strDescOverride: _ } = _;
          return (0, _.jsx)(_._, {
            strTitle: _._.Localize("#LoginRedirect_Dialog_Title"),
            strDescription:
              _ || _._.Localize("#LoginRedirect_Dialog_Description"),
            onCancel: _,
            strOKButtonText: _._.Localize("#Button_OK"),
            onOK: () => {
              (0, _._)(), _();
            },
          });
        }
        function _(_) {
          const [_, _, _] = (0, _._)();
          return {
            elDialogElement: (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsx)(_, {
                closeModal: _,
                strDescOverride: _,
              }),
            }),
            fnShowLogonDialog: _,
          };
        }
        function _(_) {
          const { label: _, strDialogDesc: _ } = _,
            { elDialogElement: _, fnShowLogonDialog: _ } = _(_);
          return jsxs(Fragment, {
            children: [
              jsx(Button, {
                onClick: _,
                children: _ || SharedLocalization.Localize("#Login_SignIn"),
              }),
              _,
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              nCreatorAccountID: _,
              classOverride: _,
              styleOverride: _,
              followType: _,
            } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_ || !_) return null;
          const _ =
            _.avatar_medium_url ||
            _.avatar_full_url ||
            (0, _._)(void 0, "medium");
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().GameHoverCreatorFollowButtonCtn, _),
            style: _,
            children: [
              (0, _.jsx)("a", {
                href: (0, _._)(_, "developer"),
                children: (0, _.jsx)("img", {
                  src: _,
                  alt: _.group_name,
                }),
              }),
              (0, _.jsx)(_._, {
                clanAccountID: _,
                followType: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _, _ = _._._) {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)({
            mutationKey: ["useUpdateAppIgnore", _, _, _],
            mutationFn: async () => {
              if (_ == null) return;
              const _ = _._.STORE_BASE_URL + "recommended/ignorerecommendation",
                _ = new FormData();
              _.append("appid", "" + _),
                _.append("sessionid", (0, _._)()),
                _.append("remove", _ ? "0" : "1"),
                _ && _.append("snr", _),
                _.append("ignore_reason", "" + _);
              const _ = await fetch(_, {
                method: "POST",
                body: _,
                credentials: "include",
              });
              if (!_._)
                throw new Error(
                  `Ignore App ${_ ? "add" : "remove"} of appid ${_} failed (${_.status})`,
                );
            },
            onMutate: () => {
              _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
            },
            onError: () => {
              _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
            },
            onSuccess: () => {
              (0, _._)();
            },
          });
        }
        function _(_) {
          const { _: _, snr: _, classOverride: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)("GameHoverIgnoreButton"),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            _ = _ && "appid" in _ ? _.appid : void 0,
            _ = (0, _._)(_),
            { mutateAsync: _ } = _(_, !_, _),
            _ = _ && "appid" in _ && _._.Get().BIsGameIgnored(_.appid),
            _ = async (_) => {
              _.preventDefault(),
                _.stopPropagation(),
                _._.logged_in
                  ? _ &&
                    "appid" in _ &&
                    (_(!0), await _(), _.token.reason || _(!1))
                  : _();
            };
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().IgnoreButton, _),
            onClick: _,
            children: [
              (0, _.jsx)(_.NtH, {}),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().IgnoreButtonText,
                  _ && _().IgnoreLoadingText,
                ),
                children: (0, _._)(
                  _ ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore",
                ),
              }),
              _,
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
          __webpack_require__._ +
          "images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 5500,
          _ = 2e3,
          _ = 10;
        function _(_, _) {
          return _ && _ && _.main_capsule
            ? {
                stringifyID: `maincap_${_._}_${_.item_type}`,
                rctImage: (0, _.jsx)(
                  "img",
                  {
                    className: _().FullDivImage,
                    loading: "lazy",
                    src: (0, _._)(_, "main_capsule"),
                    alt: _.name,
                  },
                  "fallback",
                ),
                nDurationMs: _,
              }
            : null;
        }
        function _(_, _) {
          return {
            stringifyID: `vid_${(0, _._)(_)}`,
            rctImage: (0, _.jsx)(_._, {
              _: _,
              active: !0,
            }),
            nDurationMs: _,
          };
        }
        function _(_, _, _, _) {
          return _.slice(0, _).map((_, _) => {
            const _ = (0, _._)(_, "1920x1080");
            return {
              stringifyID: `screen${_}_${(0, _._)(_)}`,
              rctImage: (0, _.jsx)(
                "img",
                {
                  className: _().FullDivImage,
                  loading: "lazy",
                  src: _,
                  alt: `${_}'s screenshot ${_ + 1}`,
                },
                _,
              ),
              nDurationMs: _,
            };
          });
        }
        function _(_, _, _, _, _) {
          const _ = [];
          if (
            (_ && _.push(_(_, _)),
            _ && _.length > 0 && _.push(..._(_, _.name, _, _)),
            _.length == 0 && _ && _.main_capsule)
          ) {
            const _ = _(_, _);
            _ && _.push(_);
          }
          return _ && _.length == 0, _;
        }
        function _(_, _, _, _, _, _) {
          const _ = [];
          _ && _.push(_(_, _)),
            _ && _.length > 0 && _.push(..._(_, _.name, _, _));
          const _ = _ - (_?.length || 0);
          return (
            _ > 0 && _ && _.length > 0 && _.push(..._(_, _.name, _, _)),
            _ && _.length == 0,
            _
          );
        }
        function _(_) {
          return (0, _.jsx)("img", {
            className: _().FullDivImage,
            loading: "lazy",
            src: (0, _._)(_),
            alt: "default",
          });
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          if (!_ || _.unvailable_for_country_restriction || !_.visible)
            return (0, _.jsx)("div", {
              className: _().TrailerCtn,
              children: (0, _.jsx)(_, {}, "default"),
            });
          const _ = _.item_type,
            _ = _.type;
          return _ == _._._ || _ == _._._
            ? (0, _.jsx)(_, {
                includeAppIDs: _.included_appids,
              })
            : (_ == _._._ || _ == _._._) &&
                _.related_items &&
                _.related_items.parent_appid
              ? (0, _.jsx)(_, {
                  demoItemDefaultInfo: _,
                  parentAppID: _.related_items.parent_appid,
                })
              : (0, _.jsx)(_, {
                  storeItemDefaultData: _,
                });
        }
        function _(_) {
          const { storeItemDefaultData: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _.useMemo)(() => _(_, _, _, _, _), [_, _, _, _, _]);
          return (0, _.jsx)(_, {
            rgTrailerAndImages: _,
          });
        }
        function _(_) {
          const { demoItemDefaultInfo: _, parentAppID: _ } = _,
            _ = (0, _._)(_);
          return (0, _._)(_)
            ? (0, _.jsx)(_, {
                storeItemDefaultData: _,
              })
            : (0, _.jsx)(_, {
                demoID: _,
                demoItemDefaultInfo: _,
                parentAppID: _,
              });
        }
        function _(_) {
          const { parentAppID: _, demoID: _, demoItemDefaultInfo: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _.useMemo)(() => _(_, _, _, _, _, _), [_, _, _, _, _, _]);
          return (0, _.jsx)(_, {
            rgTrailerAndImages: _,
          });
        }
        function _(_) {
          const { includeAppIDs: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)({
              queries: _.map((_) =>
                (0, _._)(_, {
                  appid: _,
                }),
              ),
            }),
            _ = (0, _._)({
              queries: _.map((_) =>
                (0, _._)(_, {
                  appid: _,
                }),
              ),
            }),
            _ = (0, _.useMemo)(
              () =>
                _.map((_, _) => {
                  const _ = _[_].data,
                    _ = _.data;
                  return _(_, _);
                }).filter((_) => !!_),
              [_, _],
            );
          return (0, _.jsx)(_, {
            rgTrailerAndImages: _,
          });
        }
        function _(_) {
          const { rgTrailerAndImages: _ } = _,
            _ = (0, _.useRef)(0),
            _ = (0, _._)(),
            [_] = _.useState(new _._()),
            _ = (0, _.useCallback)(
              (_ = !1) => {
                if ((_ && (_.current = 0), _?.length > 0)) {
                  const _ = _[_.current].nDurationMs;
                  _.Schedule(_, () => {
                    const _ = _.current;
                    (_.current = (_.current + 1) % _.length),
                      _ != _.current && (_(), _());
                  });
                }
              },
              [_, _, _],
            );
          return (
            (0, _.useEffect)(
              () => (_.length > 0 && _(), () => _.Cancel()),
              [_, _, _],
            ),
            (0, _.jsx)("div", {
              className: _().TrailerCtn,
              children: _?.map((_, _) =>
                (0, _.jsx)(
                  "div",
                  {
                    className: (0, _._)({
                      [_().FullDivImage]: !0,
                      [_().Transparent]: _ != _.current,
                    }),
                    children: _.rctImage,
                  },
                  "e-" + _ + "-" + _.stringifyID,
                ),
              ),
            })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          return _
            ? (0, _.jsx)("div", {
                className: _().TagRow,
                children: (0, _.jsx)("div", {
                  className: _().Tags,
                  children: _.slice(0, 10)
                    .filter((_) => _.tagid)
                    .map((_) =>
                      (0, _.jsx)(
                        _._,
                        {
                          tagid: _.tagid,
                          className: _().Tag,
                        },
                        "tag_" + _.tagid,
                      ),
                    ),
                }),
              })
            : null;
        }
        function _(_) {
          const {
              _: _,
              displayID: _,
              name: _,
              strStoreUrl: _,
              elElementToAppend: _,
              bShowDemoButton: _,
              bHideBottomHalf: _,
              bHidePrice: _,
              bShowDeckCompatibilityDialog: _,
              eHardwareCompatibilityDisplay: _,
              onShowDeckCompatibilityDialog: _,
              bUseSubscriptionLayout: _,
              nCreatorAccountID: _,
              bPreventNavigation: _,
              bShowDescription: _,
            } = _,
            _ = (0, _._)(),
            _ =
              _ &&
              (() => {
                _?.(), _();
              }),
            [_, _] = (0, _.useState)(!1),
            _ = "",
            [_, _] = (0, _.useState)(_),
            _ = (_) => _(`translateY( -${_?.clientHeight || 0}px )`),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = !_ && !_ && !_,
            _ = _ && _.item_type == _._._,
            [_, _] = (0, _._)(_, _);
          return (0, _.jsxs)("div", {
            className: _().BottomShelf,
            style: {
              transform: _ && _ ? _ : _,
            },
            onMouseEnter: () => _(!0),
            onFocus: () => _(!0),
            onMouseLeave: () => _(!1),
            onBlur: () => _(!1),
            children: [
              (0, _.jsxs)("a", {
                href: _,
                className: _().Midline,
                onClick: (_) => {
                  _ && _.preventDefault();
                },
                "aria-disabled": _,
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().CapsuleImageAnchorPoint,
                      children: (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().CapsuleImageCtn,
                          _().WithCornerShine,
                        ),
                        children: (0, _.jsx)("img", {
                          loading: "lazy",
                          src: (0, _._)(_, "header"),
                          alt: _?.name,
                        }),
                      }),
                    }),
                  !_ &&
                    !_ &&
                    (0, _.jsx)("div", {
                      className: _().Price,
                      children: (0, _.jsx)(_._, {
                        _: _,
                        onlyOneDiscountPct: !0,
                      }),
                    }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _().BottomShelfOffScreen,
                ref: _,
                children: (0, _.jsxs)("div", {
                  className: _().TextContent,
                  children: [
                    (0, _.jsx)("a", {
                      href: _,
                      onClick: (_) => {
                        _ && _.preventDefault();
                      },
                      "aria-disabled": _,
                      children: (0, _.jsx)("div", {
                        className: _().GameTitle,
                        children: _?.name || _,
                      }),
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        _: _,
                      }),
                    (0, _.jsx)(_, {
                      _: _,
                    }),
                    !_ &&
                      (0, _.jsx)(_._, {
                        _: _,
                      }),
                    !!(!_ && _) &&
                      (0, _.jsxs)("div", {
                        className: _().ReviewsAndRelease,
                        children: [
                          (0, _.jsx)(_._, {
                            _: _,
                            strClassName: _().PlatformDisplay,
                          }),
                          (0, _.jsx)(_, {
                            _: _,
                          }),
                        ],
                      }),
                    _ &&
                      (0, _.jsx)(_._, {
                        _: _,
                        className: _().DemoButton,
                      }),
                    !!(_ && _) &&
                      (0, _.jsx)(_._, {
                        _: _,
                        compatibility: _,
                        onShowDialog: _,
                      }),
                    !!_ && _,
                    _ &&
                      _ &&
                      _ &&
                      "appid" in _ &&
                      _.appid &&
                      (0, _.jsx)(_._, {
                        appid: _.appid,
                        bIsMuted: !1,
                      }),
                    _ &&
                      (0, _.jsx)(_, {
                        nCreatorAccountID: _,
                      }),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: _().ReleaseDate,
            children: _,
          });
        }
        function _(_) {
          const { _: _ } = _,
            { data: _ } = (0, _._)(_);
          return _
            ? (0, _.jsx)("div", {
                className: _().ShortDescription,
                children: _?.short_description,
              })
            : null;
        }
        function _(_) {
          const {
              _: _,
              displayID: _,
              strStoreUrl: _,
              bHideBottomHalf: _,
              bShowDeckCompatibilityDialog: _,
              eHardwareCompatibilityDisplay: _,
              bShowWishlistButton: _ = !0,
              bShowIgnoreButton: _ = !1,
            } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _ === void 0 && _ === void 0,
            [_] = (0, _._)(!!_, _);
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _().GameHoverCapsuleCtn,
              _ && _().Loading,
              _().InGameHover,
              _ && _().UseHidingBottomHalf,
            ),
            children: [
              (0, _.jsxs)("a", {
                href: _,
                className: _().TrailerAnchorStoreLink,
                children: [
                  !!(_ && !_) &&
                    (0, _.jsx)(_._, {
                      _: _,
                      snr: _.strSNR,
                    }),
                  !!(_ && !_) &&
                    (0, _.jsx)(_, {
                      _: _,
                      snr: _.strSNR,
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      _: _,
                    }),
                ],
              }),
              (0, _.jsx)(_, {
                ..._,
              }),
            ],
          });
        }
        function _(_) {
          const {
              _: _,
              name: _,
              bPreventNavigation: _,
              elElementToAppend: _,
              bShowDemoButton: _,
              bPreferDemoStorePage: _,
              bHidePrice: _,
              bUseSubscriptionLayout: _,
              strExtraParams: _,
              children: _,
              nCreatorAccountID: _,
              nWidthMultiplier: _,
              bShowDeckCompatibilityDialog: _,
              eHardwareCompatibilityDisplay: _,
              bShowWishlistButton: _ = !0,
              bShowIgnoreButton: _ = !1,
              bShowDescription: _ = !1,
              ..._
            } = _,
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(),
            [_, _, _] = (0, _._)(),
            { strStoreURL: _, snr: _ } = (0, _._)(_, _);
          if ((!_ && !_) || _)
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          let _ = _;
          _ &&
            _.item_type == _._._ &&
            _.included_appids?.length == 1 &&
            (_ = {
              appid: _.included_appids[0],
            });
          const _ = (0, _._)() == "hiding",
            _ = _ || !_ ? void 0 : _,
            [, _] = (0, _._)(_, _);
          let _;
          _ != _._ && _?.appid && _?.item_type == _._._ && (_ = _.appid);
          const _ = {
              _: _,
              displayID: _,
              name: _,
              bPreventNavigation: _,
              strStoreUrl: _,
              elElementToAppend: _,
              bShowDemoButton: _,
              bShowDeckCompatibilityDialog: _,
              eHardwareCompatibilityDisplay: _,
              bHideBottomHalf: _,
              bHidePrice: _,
              bUseSubscriptionLayout: _,
              strSNR: _,
              nCreatorAccountID: _,
              bShowWishlistButton: _,
              bShowIgnoreButton: _,
              bShowDescription: _,
              onShowDeckCompatibilityDialog: _ ? _ : void 0,
            },
            _ = (0, _.jsx)(_, {
              ..._,
            }),
            _ = _
              ? (0, _.jsx)("a", {
                  href: _,
                  children: _,
                })
              : _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                hoverContent: _,
                nWidthMultiplier: _,
                ..._,
                children: _,
              }),
              _ &&
                (0, _.jsx)(_._, {
                  nAppID: _,
                  appName: _?.name || _,
                  startingTab: _,
                  active: _,
                  closeModal: _,
                }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, bTruncateTotalReviews: _, bShowTooltip: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)();
          if (!_ || !_ || (_.type == _._._ && !(0, _._)(_))) return null;
          let _ = _.summary_unfiltered || _.summary_filtered,
            _ = "#ReviewScore_UserReviewScoreAria",
            _ = !1;
          const _ = _._.Localize("#Language_" + _._.LANGUAGE);
          if (
            (_(_?.preferences?.review_score_preference) &&
              (_.summary_language_specific
                ? ((_ = !0),
                  (_ = "#ReviewScore_UserReviewScoreAria_LanguageSpecific"),
                  (_ = _.summary_language_specific))
                : (_ = _.summary_filtered)),
            !_ || !_.review_score)
          )
            return null;
          let _ = _().ReviewScoreNone;
          _.review_score > 0 && _.review_score < _._._
            ? (_ = _().ReviewScoreLow)
            : _.review_score == _._._
              ? (_ = _().ReviewScoreMixed)
              : (_ = _().ReviewScoreHigh);
          const _ = `${_._.STORE_BASE_URL}app/${_.appid}/#app_reviews_hash`,
            _ = (0, _.jsxs)("div", {
              className: (0, _._)(_().ReviewScoreValue, _),
              children: [
                (0, _.jsx)("div", {
                  className: _().ReviewScoreLabel,
                  "aria-label": _._.Localize(_, _.review_score_label, _),
                  children: _.review_score_label,
                }),
                (0, _.jsxs)("div", {
                  className: _().ReviewScoreCount,
                  "aria-label": _._.Localize(
                    "#GameHover_UserReviewCount",
                    _.review_count.toLocaleString((0, _._)()),
                  ),
                  children: [
                    "(",
                    _
                      ? "(" + _.review_count.toLocaleString((0, _._)()) + ")"
                      : _
                        ? _._.Localize(
                            "#GameHover_UserReviewCount_Lang",
                            _.review_count.toLocaleString((0, _._)()),
                            _,
                          )
                        : _._.Localize(
                            "#GameHover_UserReviewCount",
                            _.review_count.toLocaleString((0, _._)()),
                          ),
                    ")",
                  ],
                }),
                !_ &&
                  (0, _.jsxs)("div", {
                    className: _().ReviewScoreHeader,
                    children: [
                      " ",
                      _._.Localize("#GameHover_UserReviewsHeader"),
                    ],
                  }),
              ],
            });
          let _ = "#ReviewScore_PercentPositive";
          if (_.item_type === _._._) _ = "#ReviewScore_PercentPositive_bundle";
          else if (_.item_type === _._._)
            switch (_.type) {
              case _._._:
                _ = "#ReviewScore_PercentPositive_software";
                break;
              case _._._:
                _ = "#ReviewScore_PercentPositive_video";
                break;
              case _._._:
                _ = "#ReviewScore_PercentPositive_hardware";
                break;
              case _._._:
                _ = "#ReviewScore_PercentPositive_series";
                break;
            }
          return (0, _.jsx)(_._, {
            url: _,
            className: (0, _._)(_().ReviewScore, "ReviewScore"),
            children:
              _ && _.percent_positive != null && _.review_count != null && _
                ? (0, _.jsx)(_._, {
                    bTopmost: !0,
                    toolTipContent: _._.Localize(
                      _,
                      _.percent_positive,
                      _.review_count,
                    ),
                    children: _,
                  })
                : _,
          });
        }
        function _(_) {
          return _ === void 0 || _ === _._._ || _ === _._._;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              _: _,
              snr: _,
              classOverride: _,
              styleOverride: _,
              bShowInGamepadUI: _,
            } = _,
            { data: _ } = (0, _._)(_),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            [_, _] = (0, _.useState)(() => {
              if (
                _ &&
                (_.type == _._._ || _.type == _._._) &&
                _.related_items?.parent_appid
              )
                return _.related_items?.parent_appid;
              if (_ && "appid" in _) return _.appid;
            }),
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            { bIsOwned: _ } = (0, _._)(_),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)("GameHoverWishlistButton"),
            { mutateAsync: _ } = (0, _._)(_, !_, _);
          (0, _.useEffect)(() => {
            _ &&
              "appid" in _ &&
              (_?.type == _._._ || _?.type == _._._) &&
              _(_.related_items?.parent_appid || _.appid);
          }, [_, _]);
          const _ = (0, _.useCallback)(
            async (_) => {
              _._.logged_in
                ? (_.preventDefault(),
                  _.stopPropagation(),
                  _(!0),
                  await _(),
                  _.token.reason || _(!1))
                : _();
            },
            [_.token.reason, _, _],
          );
          return _ && _?.type != _._._
            ? null
            : (0, _.jsxs)(_._, {
                className: (0, _._)(
                  _().WishlistButton,
                  _ && _().ShowInGamepadUI,
                  _,
                ),
                onActivate: _,
                style: _,
                children: [
                  _ ? (0, _.jsx)(_.qnF, {}) : (0, _.jsx)(_.T4m, {}),
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().WishlistButtonText,
                      _ && _().WishlistLoadingText,
                      "WishlistButtonText",
                    ),
                    children: _._.Localize(
                      _ ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                    ),
                  }),
                  _,
                ],
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 150,
          _ = _.createContext(void 0);
        function _() {
          return _.useContext(_);
        }
        function _(_) {
          const {
              hoverContent: _,
              hoverProps: _,
              nDelayShowMs: _,
              nWidthMultiplier: _,
              children: _,
              className: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = !_ && !_,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(void 0),
            _ = (_) => {
              _(!0), _(_.currentTarget);
            },
            _ = () => _(!1),
            _ = _.useCallback(() => _(!1), []),
            _ = (_) => {
              _.keyCode == _._ &&
                (_(!1), _.preventDefault(), _.stopPropagation());
            },
            _ = () => _(!1);
          return (0, _.jsxs)("div", {
            "data-key": "hover div",
            role: "button",
            tabIndex: 0,
            className: (0, _._)(_().ItemHoverSource, _),
            onMouseEnter: _,
            onMouseLeave: _,
            onTouchStart: _,
            onKeyDown: _,
            children: [
              _ &&
                _ &&
                (0, _.jsx)(_.Provider, {
                  value: _,
                  children: (0, _.jsx)(_, {
                    visible: _,
                    target: _,
                    nDelayShowMs: _,
                    nWidthMultiplier: _,
                    hoverProps: _,
                    children: _,
                  }),
                }),
              (0, _.jsx)(_._, {
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const {
              hoverProps: _,
              nDelayShowMs: _ = _,
              nWidthMultiplier: _ = 1.15,
              target: _,
              visible: _,
              children: _,
            } = _,
            [_, _] = _.useState(_);
          if (
            (_.useEffect(() => {
              if (_)
                if (_) {
                  const _ = window.setTimeout(() => _(!0), _);
                  return () => window.clearTimeout(_);
                } else {
                  _(!0);
                  return;
                }
              else {
                if ((0, _._)()) return;
                _(!1);
                return;
              }
            }, [_]),
            _.useEffect(() => {
              if (!_) return;
              const _ = 50,
                _ = _.ownerDocument.defaultView;
              if (_) {
                const _ = _.scrollY,
                  _ = () => {
                    Math.abs(_.scrollY - _) > _ && _(!1);
                  };
                return (
                  window.addEventListener("scroll", _),
                  () => window.removeEventListener("scroll", _)
                );
              }
              return () => {};
            }, [_, _?.ownerDocument.defaultView]),
            !_ || !_ || !_)
          )
            return null;
          const _ = _.clientWidth < 200 ? "8px" : "10px",
            _ = {
              direction: "overlay-center",
              bEnablePointerEvents: !0,
              ...(_ || {}),
              style: {
                zIndex: 98,
                width: _.clientWidth * _,
                fontSize: _,
                minHeight: _() == "hiding" ? void 0 : 300,
                height:
                  _() == "hiding" ? _.clientWidth * 1.15 * (125 / 184) : void 0,
                ..._?.style,
              },
              target: _,
            };
          return (0, _.jsx)(_, {
            hoverProps: _,
            children: (0, _.jsx)(_._, {
              children: _,
            }),
          });
        }
        function _(_) {
          const { hoverProps: _, children: _ } = _,
            _ = _.useCallback((_) => _?.focus(), []);
          return (0, _.jsx)(_._, {
            ..._,
            children: (0, _.jsx)(_._, {
              timeout: 500,
              _: !0,
              appear: !0,
              classNames: {
                appearActive: (0, _._)(_().Opening, _().Opening),
                enterDone: (0, _._)(_().Open, _().Open),
              },
              children: (_) =>
                (0, _.jsx)("div", {
                  ref: (0, _._)(_, _),
                  className: _().HoverContentTransition,
                  tabIndex: -1,
                  children: _,
                }),
            }),
          });
        }
        function _() {
          return window.sessionStorage?.getItem(_) || "default";
        }
        const _ = "DEBUG_UseNewGameHover";
        function _(_) {
          window.sessionStorage.setItem(_, _);
        }
        window.SetHoverPresentation = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 22940, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 59990, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 38573, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 40975, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 38721, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 354, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 49768, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 12931, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 6064, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 62942, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 13924, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 99441, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 42584, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 97688, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 5407, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 65815, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 44287, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 58160, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 33648, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 22649, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 23629, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 81555, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 11809, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 98347, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 79004, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 97760, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 86881, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 28183, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 10950, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 22568, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17038, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 62327, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_);
        async function _() {
          return Promise.all([_.Ready()]);
        }
        function _() {
          return useLocalizationReady(_);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return !!_;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _.type === "account";
        }
        function _(_) {
          return _.type === "anonymous";
        }
        function _(_) {
          return _.type === "request";
        }
        function _(_) {
          return _.type === "replay";
        }
        function _() {
          const _ = useShoppingCartID();
          return !_(_) && !_(_);
        }
        function _() {
          const _ = useShoppingCartID();
          return _(_);
        }
        function _() {
          const _ = useShoppingCartID();
          return _(_) ? _.requestID : void 0;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clanid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clanid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    listid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_CuratorData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.domain || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    domain: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    controller: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    method: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    submethod: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    feature: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    depth: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    countrycode: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    webkey: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    is_client: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    curator_data: {
                      _: 10,
                      _: _,
                    },
                    is_likely_bot: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_utm: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_NavData";
          }
        }
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        function _(_) {
          return "unknown EAccountCartLineItemType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EAccountCartValidationFailure ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.validation_failure || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    validation_failure: {
                      _: 1,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartValidationDetails";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_gift || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_gift: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_private: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItemFlags";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_item_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_item_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    packageid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    bundleid: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_valid: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    validation_details: {
                      _: 9,
                      _: _,
                    },
                    time_added: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    price_when_added: {
                      _: 11,
                      _: _._,
                    },
                    gift_info: {
                      _: 12,
                      _: _._,
                    },
                    flags: {
                      _: 13,
                      _: _,
                    },
                    gidcoupon_applied: {
                      _: 14,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_items || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_items: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    subtotal: {
                      _: 2,
                      _: _._,
                    },
                    is_valid: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    validation_details: {
                      _: 4,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartContents";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.user_country || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    user_country: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cart: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.user_country || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    user_country: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    items: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    navdata: {
                      _: 3,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.packageid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    packageid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    bundleid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gift_info: {
                      _: 10,
                      _: _._,
                    },
                    flags: {
                      _: 11,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request_ItemToAdd";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_item_ids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_item_ids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
                    },
                    cart: {
                      _: 2,
                      _: _,
                    },
                    replaced_packages: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    existing_billing_agreementid: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    new_billing_agreement_recurring_packageid: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_item_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_item_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    user_country: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    gift_info: {
                      _: 10,
                      _: _._,
                    },
                    flags: {
                      _: 11,
                      _: _,
                    },
                    apply_gidcoupon: {
                      _: 12,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cart: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_item_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_item_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    user_country: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cart: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    user_country: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    cart: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.language || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    language: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_items || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_items: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.line_item_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    line_item_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    coupons: {
                      _: 2,
                      _: _._,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response_LineItemCoupons";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg("AccountCart.GetCart#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }
          _.GetCart = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountCart.AddItemsToCart#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.AddItemsToCart = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountCart.ModifyLineItem#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ModifyLineItem = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountCart.RemoveItemFromCart#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RemoveItemFromCart = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountCart.MergeShoppingCartContents#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.MergeShoppingCartContents = _;
          function _(_, _, _) {
            return _.SendMsg("AccountCart.DeleteCart#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.DeleteCart = _;
          function _(_, _, _) {
            return _.SendMsg(
              "AccountCart.GetRelevantCoupons#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetRelevantCoupons = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid_requester || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    steamid_requester: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    purchase_request_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.amount || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    amount: {
                      _: 1,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    currencycode: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.packageid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    packageid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    costwhenadded: {
                      _: 2,
                      _: _,
                    },
                    is_gift: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gidbundle: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    quantity: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gift_info: {
                      _: 6,
                      _: _._,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.walletcredit || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    walletcredit: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.couponid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    couponid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupontarget: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    packageid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupon: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.microtxnappid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    microtxnappid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    microtxnassetclassid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bundleid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    bundleid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    quantity: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_gift: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gift_info: {
                      _: 4,
                      _: _._,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reward_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    reward_id: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidparent || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidparent: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    children: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.couponid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    couponid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupon: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitem: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidlineitem || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidlineitem: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    package_item: {
                      _: 2,
                      _: _,
                    },
                    wallet_credit_item: {
                      _: 3,
                      _: _,
                    },
                    coupon_item: {
                      _: 4,
                      _: _,
                    },
                    micro_item: {
                      _: 5,
                      _: _,
                    },
                    bundle_item: {
                      _: 7,
                      _: _,
                    },
                    loyalty_item: {
                      _: 8,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.coupons || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    coupons: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.lineitems || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    lineitems: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    treeview: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    potentials: {
                      _: 3,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    contents: {
                      _: 2,
                      _: _,
                    },
                    time_created: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    merged_into_account_cart: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid_requester: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    purchase_request_id: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    browserid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    cart_items: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    store_country_code: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    beta_mode: {
                      _: 6,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    contents: {
                      _: 2,
                      _: _,
                    },
                    result_details: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitem: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    quantity: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    contents: {
                      _: 2,
                      _: _,
                    },
                    result_details: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    bundleid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    browserid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    store_country: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    quantity: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    beta_mode: {
                      _: 7,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gift_info: {
                      _: 8,
                      _: _._,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.contents || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    contents: {
                      _: 1,
                      _: _,
                    },
                    result_details: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitem: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gift_info: {
                      _: 3,
                      _: _._,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.contents || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    contents: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitems: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
                    },
                    browserid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.contents || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    contents: {
                      _: 1,
                      _: _,
                    },
                    result_details: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.CreateNewShoppingCart = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetShoppingCartContents = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.AddPackages = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.UpdatePackageQuantity = _;
          function _(_, _, _) {
            return _.SendMsg("ShoppingCart.AddBundle#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.AddBundle = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.ModifyLineItem = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RemoveLineItems = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          return {
            queryKey: GetShoppingCartKey(_),
            queryFn: () => _(_, _),
            staleTime: 1800 * 1e3,
            ..._,
          };
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useShoppingCartID();
          return useQuery(_(_, _, _));
        }
        function _(_, _, _) {
          if (_ !== void 0)
            return _
              ? _.line_items.some(
                  (_) =>
                    _.type ==
                      EAccountCartLineItemType.k_EAccountCartLineItem_Package &&
                    _.packageid === _,
                )
              : _
                ? _.line_items.some(
                    (_) =>
                      _.type ==
                        EAccountCartLineItemType.k_EAccountCartLineItem_Bundle &&
                      _.bundleid === _,
                  )
                : void 0;
        }
        function _(_) {
          return _({
            select: (_) => _.line_items?.length ?? 0,
            ..._,
          });
        }
        function _(_, _, _, _, _, _) {
          const { navData: _, nAccountIDGiftee: _, bIsGift: _ = !1 } = _ ?? {};
          if (BIsAccountCart(_)) {
            const _ = (_ || []).map((_) => ({
              packageid: _,
              bIsGift: _,
              nAccountIDGiftee: _,
            }));
            return (
              _ &&
                _.push({
                  bundleid: _,
                  bIsGift: _,
                  nAccountIDGiftee: _,
                }),
              _(_, UserConfig.country_code, _, _).then(
                ([_, _]) => (
                  InvalidateDynamicStoreVersion(),
                  _ == k_EResultOK
                    ? (ReplaceShoppingCart(_, _, _.cart),
                      {
                        success: !0,
                        items: _.line_item_ids,
                        replaced_packageids: _.replaced_packages,
                      })
                    : _ === k_EResultAlreadyOwned
                      ? {
                          success: !1,
                          result: _,
                          existing_billing_agreementid:
                            _.existing_billing_agreementid,
                          new_billing_agreement_recurring_packageid:
                            _.new_billing_agreement_recurring_packageid,
                        }
                      : {
                          success: !1,
                          result: _,
                        }
                ),
              )
            );
          } else
            return _(_, _, _, _, _).then(([_, _]) => {
              if ((InvalidateDynamicStoreVersion(), _)) {
                ReplaceShoppingCart(_, _, _(_));
                const _ = (_ || []).map((_) =>
                  _?.lineitems?.find((_) => _.package_item?.packageid === _),
                );
                return (
                  _ &&
                    _.push(
                      _?.lineitems?.find((_) => _.bundle_item?.bundleid === _),
                    ),
                  {
                    success: !0,
                    items: _.filter(isTruthy).map((_) => _.gidlineitem),
                  }
                );
              }
              return {
                success: !1,
              };
            });
        }
        async function _(_, _, _, _, _) {
          const _ = new FormData();
          _ &&
            (_.length === 1
              ? _.set("subid", _[0].toString())
              : _.forEach((_) => _.append("subid[]", _.toString()))),
            _ && _.set("bundleid", _.toString()),
            (_ || _) &&
              (_.set("isgift", "1"),
              _ && _.set("gifteeaccountid", _.toString())),
            _.set("action", "add_to_cart");
          const _ = await fetch(`${_._.STORE_BASE_URL}cart/addtocart`, {
            method: "post",
            body: _,
          });
          if (!_._) throw new Error("Failed to fetch /cart/addtocart");
          const _ = await _.json();
          return [_?.success ? _._ : _._, _?.contents];
        }
        async function _(_, _, _, _) {
          return _(_, _, [_], _);
        }
        async function _(_, _, _, _) {
          const _ = _._.Init(_);
          if (!_ || _.length === 0)
            return (
              console.error(
                "No valid Package or Bundle provided to add to cart",
              ),
              [_._, null]
            );
          _.forEach((_) => {
            const _ = _.Body().add_items();
            _.packageid
              ? _.set_packageid(_.packageid)
              : _.bundleid
                ? _.set_bundleid(_.bundleid)
                : console.error(
                    "Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart",
                  ),
              _.bIsGift &&
                (_.flags(!0).set_is_gift(!0),
                _.nAccountIDGiftee &&
                  _.gift_info(!0).set_accountid_giftee(_.nAccountIDGiftee));
          }),
            _ && _.Body().set_navdata(_.fromObject((0, _._)(_))),
            _.Body().set_user_country(_);
          const _ = await _.AddItemsToCart(_, _);
          return (
            _.BSuccess() ||
              console.warn(
                `Failed to add item to account cart: ${_.GetEResult()}`,
              ),
            [_.GetEResult(), _.Body().toObject()]
          );
        }
        async function _(_, _) {
          if (BIsAccountCart(_)) {
            const _ = CProtoBufMsg.Init(CAccountCart_GetCart_Request);
            _.Body().set_user_country(UserConfig.country_code);
            const _ = await AccountCartService.GetCart(_, _);
            if (!_.BSuccess())
              throw `Error loading AccountCart: ${_.GetErrorMessage()}`;
            return _.Body().toObject()?.cart;
          } else if (BIsReplayCart(_)) {
            const _ = CProtoBufMsg.Init(CCheckout_ValidateCart_Request);
            SetStoreBrowseContext(
              {
                country: UserConfig.country_code,
                language: Config.LANGUAGE,
              },
              _,
            ),
              _.Body().set_gidreplayoftransid(_.gid);
            const _ = await CheckoutService.ValidateCart(_, _);
            if (!_.BSuccess())
              throw `Error loading ReplayCart: ${_.GetErrorMessage()}`;
            return _(_.Body().toObject());
          } else {
            if (!_.gid) return _(void 0);
            const _ = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
            _.Body().set_gidshoppingcart(_.gid);
            const _ = await ShoppingCartService.GetShoppingCartContents(_, _);
            if (!_.BSuccess())
              throw `Error loading Legacy Cart: ${_.GetErrorMessage()}`;
            return _(_.Body().toObject().contents);
          }
        }
        function _(_) {
          const _ = {
            line_items: [],
          };
          return (
            _?.lineitems?.length &&
              (_.line_items = _.lineitems
                .map((_) => (_.package_item?.gidbundle ? null : _(_)))
                .filter(_)),
            _
          );
        }
        function _(_) {
          const _ = {
            price_when_added: {},
            flags: {},
          };
          return (
            (_.line_item_id = _.gidlineitem),
            _.bundle_item?.bundleid
              ? ((_.bundleid = _.bundle_item.bundleid),
                (_.type = _),
                _.bundle_item.is_gift &&
                  ((_.flags.is_gift = _.bundle_item.is_gift),
                  (_.gift_info = _.bundle_item.gift_info)))
              : _.package_item &&
                ((_.packageid = _.package_item.packageid),
                (_.price_when_added.amount_in_cents =
                  _.package_item.costwhenadded?.amount ?? ""),
                (_.price_when_added.currency_code =
                  _.package_item.costwhenadded?.currencycode ?? 0),
                (_.type = _),
                _.package_item.is_gift &&
                  ((_.flags.is_gift = _.package_item.is_gift),
                  (_.gift_info = _.package_item.gift_info))),
            _
          );
        }
        function _(_) {
          const _ = {
            subtotal: _.estimated_totals.subtotal,
            line_items: [],
          };
          return (
            (_.line_items = _.cart_items
              ?.map((_) => {
                let _;
                if (_.item_id?.packageid)
                  _ = EAccountCartLineItemType.k_EAccountCartLineItem_Package;
                else if (_.item_id?.bundleid)
                  _ = EAccountCartLineItemType.k_EAccountCartLineItem_Bundle;
                else return;
                return {
                  line_item_id: _.line_item_id,
                  type: _,
                  packageid: _.item_id.packageid,
                  bundleid: _.item_id.bundleid,
                  is_valid: !0,
                  price_when_added: _.price_when_added,
                  gift_info: _.gift_info,
                  flags: {
                    is_gift: !!_.gift_info?.accountid_giftee,
                  },
                  gidcoupon_applied: _.coupon_applied?.gidcoupon,
                };
              })
              .filter(isTruthy)),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _
            ? {
                type: "replay",
                gid: _,
              }
            : _._.logged_in
              ? {
                  type: "account",
                }
              : {
                  type: "anonymous",
                  gid: (0, _._)(_._),
                };
        }
        const _ = _.createContext({
          cartID: void 0,
        });
        function _() {
          return _.useContext(_).cartID || _();
        }
        function _(_) {
          const { cartID: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                cartID: _,
              }),
              [_],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          return _(_) ? _.type : _.gid;
        }
        function _(_) {
          return ["shopping_cart", _(_), _._.accountid];
        }
        function _(_, _) {
          return BIsAccountCart(_)
            ? ["validate_checkout", _(_), UserConfig.accountid]
            : ["validate_checkout", _(_), _?.accountid_giftee];
        }
        function _(_, _) {
          _.invalidateQueries({
            queryKey: ["validate_checkout"],
            exact: !1,
          });
        }
        function _(_, _) {
          _.invalidateQueries({
            queryKey: _(_),
          }),
            _(_, _);
        }
        function _(_, _, _) {
          _.setQueryData(_(_), _), _(_, _);
        }
        function _(_, _, _, _, _) {
          return _(
            [
              {
                packageid: _,
                bundleid: _,
                bIsGift: _,
                nAccountIDGiftee: _,
              },
            ],
            _,
          );
        }
        function _(_, _) {
          const _ = _(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            { storeBrowseContext: _, dataLoader: _ } = (0, _._)(),
            { country: _ } = _,
            _ = (0, _._)(_);
          return (0, _._)({
            mutationFn: async () => {
              if (_.length == 0 || !_.every((_) => _.packageid || _.bundleid))
                throw "Every item must have a valid package or bundle id";
              let _;
              if (_(_)) {
                const [_, _] = await _(_, _, _, _);
                if (_ == _._) (_ = _.line_item_ids), _(_, _, _.cart);
                else throw `AddItemsToAccountCart failed with ${_}`;
              } else if (_(_)) {
                const _ = _.map((_) => _.packageid).filter(_),
                  _ = _.map((_) => _.bundleid).filter(_);
                if (_.length > 1)
                  throw "The anonymous cart can only take one bundle per call";
                const [_, _] = await _(
                  _,
                  _.length > 0 ? _ : void 0,
                  _[0],
                  _.some((_) => _.bIsGift),
                  _.find((_) => _.nAccountIDGiftee)?.nAccountIDGiftee,
                );
                if (_ == _._ && _) {
                  const _ = new Set(_),
                    _ = new Set(_);
                  (_ =
                    _.lineitems
                      ?.filter(
                        (_) =>
                          (_.package_item &&
                            !_.package_item.gidbundle &&
                            _.has(_.package_item.packageid)) ||
                          (_.bundle_item && _.has(_.bundle_item.bundleid)),
                      )
                      ?.map((_) => _.gidlineitem) || []),
                    _(_, _, _(_));
                } else throw `AddItemsToAnonymousCart failed with ${_}`;
              } else throw "Invalid cart type";
              return _;
            },
            onMutate: () => {
              (async () => {
                const _ = _.map((_) =>
                  _.packageid
                    ? {
                        packageid: _.packageid,
                      }
                    : {
                        bundleid: _.bundleid,
                      },
                );
                (
                  await Promise.all(_.map((_) => _.fetchQuery((0, _._)(_, _))))
                ).forEach((_, _) => {
                  const _ =
                    _?.included_appids?.length == 1
                      ? {
                          appid: _.included_appids[0],
                        }
                      : _[_];
                  _.prefetchQuery((0, _._)(_, _)),
                    _.prefetchQuery((0, _._)(_, _));
                });
              })();
            },
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              storeItem: _,
              feature: _,
              depth: _,
              children: _,
              noImpressionTracking: _,
              ..._
            } = _,
            _ = _?.appid,
            _ = _(_);
          if (!_) return _;
          const _ = jsx(FocusableAnchor, {
            ..._,
            href: _,
            children: _,
          });
          return _ && !_
            ? jsx(ImpressionTrackedElement, {
                appID: _,
                feature: _,
                depth: _,
                children: _,
              })
            : _;
        }
        function _(_, _, _) {
          return (0, _._)(
            _ ? `${_._.STORE_BASE_URL}${_.store_url_path}` : void 0,
            _,
            _,
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.packageid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    packageid: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    country_code: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.inventory_available || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    inventory_available: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    high_pending_orders: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "PhysicalGoods.CheckInventoryAvailableByPackage#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.CheckInventoryAvailableByPackage = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          high_pending_orders: !1,
          inventory_available: !0,
        };
        function _(_) {
          const _ = (0, _._)(),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)({
              queryKey: [
                _?._ || _._,
                _?.type || "invalid",
                _?.item_type || "invalid",
              ],
              queryFn: () => _(_, _),
              enabled: !!(_ && _.type === _._._),
            });
          return _.isLoading ? null : _.data;
        }
        async function _(_, _) {
          if (!_ || _.item_type !== _._._ || _.type !== _._._) return _;
          const _ = _._.Init(_);
          _.Body().set_packageid(_._ || 0),
            _.Body().set_country_code(_._.country_code);
          const _ = await _.CheckInventoryAvailableByPackage(_, _);
          if (_.GetEResult() !== _._)
            throw (
              (console.error(
                "Received error from FetchPhysicalGoodsStock",
                _.GetEResult(),
              ),
              new Error(
                `Error from FetchPhysicalGoodsStock: ${_.GetEResult()}`,
              ))
            );
          return _.Body().toObject();
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, className: _ } = _,
            _ = (0, _._)(),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _(_),
            { bIsOwned: _ } = (0, _._)(_),
            _ = _(_),
            _ = (0, _.useCallback)(() => {
              if (_) {
                let _ = _.appid;
                _.related_items?.parent_appid &&
                  _.type != _._._ &&
                  (_ = _.related_items.parent_appid),
                  (0, _._)(window, `steam://run/${_}`);
              }
            }, [_]);
          if (!_ || !_ || !_ || _.type == _._._) return null;
          const _ =
            _.is_free ||
            (_.final_price_in_cents != null && _.final_price_in_cents == "0") ||
            (_.discount_pct && _.discount_pct >= 100);
          if (_.item_type == _._._) {
            if (_.type == _._._)
              if (_) {
                if (!_.inventory_available)
                  return (0, _.jsx)("div", {
                    className: (0, _._)(_().ActionOutOfStock, _),
                    children: (0, _.jsxs)("span", {
                      children: [" ", _._.Localize("#Sale_ReserveExhausted")],
                    }),
                  });
              } else
                return (0, _.jsx)(_._, {
                  size: "small",
                  position: "center",
                });
            else if (_ && _.included_appids && _.included_appids.length > 1)
              return null;
          }
          if (_.item_type == _._._) {
            if ((_.is_coming_soon && !_.packageid) || (_ && _.type === _._._))
              return null;
            if (!_ && _.is_free_to_keep)
              if (_._.IN_CLIENT || (0, _._)() != "store") {
                const _ = `${_._.IN_CLIENT ? "steam://openurl/" : ""}${_}`;
                return (0, _.jsx)("div", {
                  onClick: (_) => (0, _._)(_, _),
                  className: (0, _._)(_().Action, _),
                  children: (0, _.jsx)("span", {
                    children: _._.Localize(
                      "#EventDisplay_CallToAction_VisitStore",
                    ),
                  }),
                });
              } else {
                const _ = (0, _._)(
                  `${_._.STORE_BASE_URL}freelicense/addfreelicense`,
                  _,
                );
                return (0, _.jsxs)("form", {
                  action: _,
                  method: "POST",
                  children: [
                    (0, _.jsx)("input", {
                      type: "hidden",
                      name: "subid",
                      value: _.packageid,
                    }),
                    (0, _.jsx)("input", {
                      type: "hidden",
                      name: "sessionid",
                      value: (0, _._)(),
                    }),
                    (0, _.jsx)("button", {
                      className: (0, _._)(_().Action, _),
                      type: "submit",
                      children: _._.Localize(
                        "#EventDisplay_CallToAction_AddToAccount",
                      ),
                    }),
                  ],
                });
              }
            if ((_ || _) && !_.is_coming_soon) {
              let _ = _._.Localize("#EventDisplay_CallToAction_PlayNowForFree");
              return (
                _
                  ? (_ = _._.Localize("#EventDisplay_CallToAction_PlayNow"))
                  : _.is_free_temporarily &&
                    (_ = _._.Localize(
                      "#EventDisplay_CallToAction_AddToAccount",
                    )),
                (0, _.jsx)("div", {
                  className: (0, _._)(_().Action, _),
                  onClick: _,
                  children: (0, _.jsx)("span", {
                    children: _,
                  }),
                })
              );
            }
            if (_.formatted_final_price == "")
              return (0, _.jsx)("a", {
                href: _,
                className: (0, _._)(_().Action, _),
                children: _._.Localize("#EventDisplay_CallToAction_VisitStore"),
              });
          }
          return (0, _.jsx)(_, {
            className: _,
            storeItemBestPurchaseOption: _,
            storeItemDefaultData: _,
          });
        }
        function _(_) {
          const {
              className: _,
              storeItemBestPurchaseOption: _,
              storeItemDefaultData: _,
            } = _,
            _ = (0, _._)(),
            { mutate: _ } = _(_?.packageid, _?.bundleid, !1, void 0, _.feature);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().Action, _),
            onClick: () => _(),
            children: (0, _.jsx)("span", {
              children: _._.Localize("#Store_AddToCart"),
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = null,
          _ = -700,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = null,
          _ = -600,
          _ = -599,
          _ = -598,
          _ = -597,
          _ = -596,
          _ = -595,
          _ = -594,
          _ = -593,
          _ = -592,
          _ = -591,
          _ = -590,
          _ = -589,
          _ = -588,
          _ = -587,
          _ = -586,
          _ = -585,
          _ = -584,
          _ = -583,
          _ = -582,
          _ = -581,
          _ = -580,
          _ = -579,
          _ = -578,
          _ = -577,
          _ = -576,
          _ = -575,
          _ = -574,
          _ = -573,
          _ = -572,
          _ = -571,
          _ = null,
          _ = -500,
          _ = -499,
          _ = -498,
          _ = -497,
          _ = -496,
          _ = null,
          _ = null,
          _ = -300,
          _ = -203,
          _ = -202,
          _ = -201,
          _ = -200,
          _ = -199,
          _ = -198,
          _ = -197,
          _ = -196,
          _ = -195,
          _ = -194,
          _ = -193,
          _ = -192,
          _ = -191,
          _ = -190,
          _ = -189,
          _ = -188,
          _ = -187,
          _ = -186,
          _ = -185,
          _ = -184,
          _ = -183,
          _ = -182,
          _ = null,
          _ = -102,
          _ = -101,
          _ = -100,
          _ = -99,
          _ = null,
          _ = null,
          _ = null,
          _ = -95,
          _ = -94,
          _ = -93,
          _ = -92,
          _ = null,
          _ = -90,
          _ = -89,
          _ = -88,
          _ = -87,
          _ = -86,
          _ = -85,
          _ = -84,
          _ = -83,
          _ = -82,
          _ = -81,
          _ = -80,
          _ = -79,
          _ = -75,
          _ = -74,
          _ = -70,
          _ = -69,
          _ = -68,
          _ = -67,
          _ = null,
          _ = -1,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = 32;
        function _(_) {
          switch (_) {
            case _:
              return "Windows";
            case _:
              return "Windows 3.11";
            case _:
              return "Windows 95";
            case _:
              return "Windows 98";
            case _:
              return "Windows ME";
            case _:
              return "Windows NT";
            case _:
              return "Windows 2000";
            case _:
              return "Windows XP";
            case _:
              return "Windows 2003";
            case _:
              return "Windows Vista";
            case _:
              return "Windows 7";
            case _:
              return "Windows 2008";
            case _:
              return "Windows 2012";
            case _:
              return "Windows 2012 R2";
            case _:
              return "Windows 8";
            case _:
              return "Windows 8.1";
            case _:
              return "Windows 10";
            case _:
              return "Windows 2016";
            case _:
              return "Windows 2019";
            case _:
              return "Windows 2022";
            case _:
              return "Windows 11";
            case _:
              return "Mac OS";
            case _:
              return "MacOS 10.4";
            case _:
              return "MacOS 10.5";
            case _:
              return "MacOS 10.5.8";
            case _:
              return "MacOS 10.6";
            case _:
              return "MacOS 10.6.3";
            case _:
              return "MacOS 10.6.4 with Apple's Snow Leopard Graphics Update";
            case _:
              return "MacOS 10.6.7";
            case _:
              return "MacOS 10.7";
            case _:
              return "MacOS 10.8";
            case _:
              return "MacOS 10.9";
            case _:
              return "MacOS 10.10";
            case _:
              return "MacOS 10.11";
            case _:
              return "MacOS 10.12";
            case _:
              return "MacOS 10.13";
            case _:
              return "MacOS 10.14";
            case _:
              return "MacOS 10.15";
            case _:
              return "MacOS 11 (as 10.16)";
            case _:
              return "MacOS 12 (as 10.17)";
            case _:
              return "MacOS 13 (as 10.18)";
            case _:
              return "MacOS 11";
            case _:
              return "MacOS 11.1";
            case _:
              return "MacOS 12";
            case _:
              return "MacOS 13";
            case _:
              return "MacOS 14";
            case _:
              return "MacOS 15";
            case _:
              return "Linux";
            case _:
              return "Linux 2.2";
            case _:
              return "Linux 2.4";
            case _:
              return "Linux 2.6";
            case _:
              return "Linux 3.2";
            case _:
              return "Linux 3.5";
            case _:
              return "Linux 3.6";
            case _:
              return "Linux 3.10";
            case _:
              return "Linux 3.16";
            case _:
              return "Linux 3.18";
            case _:
              return "Linux 3.x";
            case _:
              return "Linux 4.1";
            case _:
              return "Linux 4.4";
            case _:
              return "Linux 4.9";
            case _:
              return "Linux 4.14";
            case _:
              return "Linux 4.19";
            case _:
              return "Linux 4.x";
            case _:
              return "Linux 5.x";
            case _:
              return "Linux 5.4";
            case _:
              return "Linux 6.x";
            case _:
              return "Linux 7.x";
            case _:
              return "Linux 5.10";
            case _:
              return "PS3";
            case _:
              return "Web Client";
            case _:
              return "Android";
            case _:
              return "Android 6.x";
            case _:
              return "Android 7.x";
            case _:
              return "Android 8.x";
            case _:
              return "Android 9.x";
            case _:
              return "iOS";
            case _:
              return "iOS 1";
            case _:
              return "iOS 2";
            case _:
              return "iOS 3";
            case _:
              return "iOS 4";
            case _:
              return "iOS 5";
            case _:
              return "iOS 6";
            case _:
              return "iOS 6.1";
            case _:
              return "iOS 7";
            case _:
              return "iOS 7.1";
            case _:
              return "iOS 8";
            case _:
              return "iOS 8.1";
            case _:
              return "iOS 8.2";
            case _:
              return "iOS 8.3";
            case _:
              return "iOS 8.4";
            case _:
              return "iOS 9";
            case _:
              return "iOS 9.1";
            case _:
              return "iOS 9.2";
            case _:
              return "iOS 9_.3";
            case _:
              return "iOS 10";
            case _:
              return "iOS 10.1";
            case _:
              return "iOS 10.2";
            case _:
              return "iOS 10.3";
            case _:
              return "iOS 11";
            case _:
              return "iOS 11.1";
            case _:
              return "iOS 11.2";
            case _:
              return "iOS 11.3";
            case _:
              return "iOS 11.4";
            case _:
              return "iOS 12";
            case _:
              return "iOS 12.1";
            default:
            case _:
              return "Unknown";
          }
        }
        var _ = ((_) => (
            (_[(_.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
            (_[(_.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
            (_[(_.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
            (_[(_.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
            (_[(_.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
            (_[(_.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
            (_[(_.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
            (_[(_.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
            (_[(_.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
            (_[(_.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
            (_[(_.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
            (_[(_.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
            (_[(_.k_EPlatformTypeEmbeddedClient = 12)] =
              "k_EPlatformTypeEmbeddedClient"),
            (_[(_.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
            (_[(_.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax"),
            _
          ))(_ || {}),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_instanceid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_instanceid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.protocol_version || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    protocol_version: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    _: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    machine_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sessions || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    sessions: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    refetch_interval_sec: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_instanceid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_instanceid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    protocol_version: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    os_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    machine_name: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    os_type: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    device_type: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    realm: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response_Session";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_instanceid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_instanceid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.package_version || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [7, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    package_version: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    _: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    machine_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    ip_public: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    ip_private: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    bytes_available: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    running_games: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    protocol_version: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    clientcomm_version: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    local_users: {
                      _: 10,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    extra_info: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    time_running_sec: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData_RunningGames";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_info || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_info: {
                      _: 1,
                      _: _,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.fields || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    fields: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    filters: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    client_instanceid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    include_client_info: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    filter_appids: {
                      _: 6,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bytes_available || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    bytes_available: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    apps: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    client_info: {
                      _: 3,
                      _: _,
                    },
                    refetch_interval_sec_full: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    refetch_interval_sec_changing: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    refetch_interval_sec_updating: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [17], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    app: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    category: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    app_type: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    num_downloading: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    bytes_download_rate: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    bytes_downloaded: {
                      _: 12,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    bytes_to_download: {
                      _: 13,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dlcs: {
                      _: 17,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    favorite: {
                      _: 18,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    auto_update: {
                      _: 19,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    installed: {
                      _: 20,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    download_paused: {
                      _: 21,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    changing: {
                      _: 22,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    available_on_platform: {
                      _: 23,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    bytes_staged: {
                      _: 24,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    bytes_to_stage: {
                      _: 25,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    bytes_required: {
                      _: 26,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    source_buildid: {
                      _: 27,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    target_buildid: {
                      _: 28,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    estimated_seconds_remaining: {
                      _: 29,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    queue_position: {
                      _: 30,
                      _: -1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    uninstalling: {
                      _: 31,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    rt_time_scheduled: {
                      _: 32,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    running: {
                      _: 33,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    update_percentage: {
                      _: 34,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    app: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    installed: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData_DLCData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: !0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_instanceid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: !0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_instanceid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: !0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    action: {
                      _: 2,
                      _: !0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_instanceid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_instanceid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_instanceid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    appid: {
                      _: 2,
                      _: !0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    query_params: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.client_instanceid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    client_instanceid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    enable: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.GetClientLogonInfo#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetClientLogonInfo = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetAllClientLogonInfo = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.GetClientInfo#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetClientInfo = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetClientAppList = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.InstallClientApp = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UninstallClientApp = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.LaunchClientApp = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetClientAppUpdateState = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.EnableOrDisableDownloads = _;
        })(_ || (_ = {}));
        const _ = "RemoteDownload_OnlineClient",
          _ = "RemoteDownload_ClientAppList",
          _ = "RemoteDownload_ClientAppData",
          _ = "RemoteDownload_PatchNotes";
        class _ extends Error {
          constructor(_, _) {
            super(_), (this.result = _);
          }
          result;
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: [_, _],
            queryFn: async () => {
              const _ = _._.Init(_),
                _ = await _.GetAllClientLogonInfo(_, _);
              if (_.GetEResult() !== _._)
                throw (
                  (console.error(
                    "Received error from GetAllClientLogonInfo",
                    _.GetEResult(),
                    _.Hdr().transport_error(),
                  ),
                  new Error(
                    `Error from GetAllClientLogonInfo: ${_.GetEResult()}`,
                  ))
                );
              const _ = [];
              for (const _ of _.Body().sessions())
                _.device_type() !== _.eSB && _.push(_.toObject());
              return {
                sessions: _,
                refetchInterval: _.Body().refetch_interval_sec() || 300,
              };
            },
            staleTime: 300 * 1e3,
            refetchInterval: (_) =>
              (_.state.data?.refetchInterval || 300) * 1e3,
          });
        }
        class _ {
          constructor(_) {
            Object.assign(this, _.toObject()),
              (this.bytes_to_download = parseInt(_.bytes_to_download() ?? "0")),
              (this.bytes_downloaded = parseInt(_.bytes_downloaded() ?? "0")),
              (this.bytes_staged = parseInt(_.bytes_staged() ?? "0")),
              (this.bytes_to_stage = parseInt(_.bytes_to_stage() ?? "0")),
              (this.bytes_required = parseInt(_.bytes_required() ?? "0"));
          }
          appid;
          app;
          category;
          app_type;
          num_downloading;
          bytes_download_rate;
          bytes_downloaded;
          bytes_to_download;
          favorite;
          auto_update;
          installed;
          download_paused;
          changing;
          available_on_platform;
          bytes_staged;
          bytes_to_stage;
          bytes_required;
          source_buildid;
          target_buildid;
          estimated_seconds_remaining;
          queue_position;
          uninstalling;
          rt_time_scheduled;
          update_percentage;
          BIsDownloading() {
            return this.num_downloading !== void 0 && this.num_downloading > 0;
          }
          SetDownloading() {
            (this.num_downloading = 1), (this.download_paused = !1);
          }
          SetPaused(_) {
            (this.download_paused = _), (this.num_downloading = _ ? 0 : 1);
          }
          BIsAtTopOfQueue() {
            return this.queue_position === 0;
          }
          BIsPaused() {
            return (
              !!this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage ||
                this.queue_position != -1)
            );
          }
          BHasPendingUpdate() {
            return (
              !this.BIsDownloading() &&
              !this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage)
            );
          }
          GetPercentComplete() {
            return this.update_percentage
              ? this.update_percentage
              : this.bytes_to_download
                ? Math.floor(
                    (this.bytes_downloaded * 100) / this.bytes_to_download,
                  )
                : 0;
          }
        }
        async function _(_, _, _) {
          const _ = _.client_instanceid,
            _ = _._.Init(_);
          _.Body().set_fields("games"),
            _.Body().set_filters(_),
            _.Body().set_client_instanceid(_),
            _.Body().set_include_client_info(!0);
          const _ = await _.GetClientAppList(_, _);
          if (_.GetEResult() !== _._)
            throw (
              (console.error(
                "Received error from GetClientAppList",
                _.GetEResult(),
                _.Hdr().transport_error(),
              ),
              new _(
                `Error from GetClientAppList: ${_.GetEResult()}`,
                _.GetEResult(),
              ))
            );
          const _ = new Map();
          for (const _ of _.Body().apps()) {
            const _ = new _(_);
            _.set(_.appid(), _);
          }
          return {
            session: _,
            mapApps: _,
            clientInfo: _.Body().client_info()?.toObject(),
            refetchIntervals: {
              full: _.Body().refetch_interval_sec_full() || 3600,
              changing: _.Body().refetch_interval_sec_changing() || 60,
              updating: _.Body().refetch_interval_sec_updating() || 10,
            },
          };
        }
        async function _(_, _, _, _) {
          if (!_) return;
          const _ = await _(_, _, _);
          for (const [_, _] of _.mapApps) _.mapApps.set(_, _);
          return {
            ..._,
            mapApps: _.mapApps,
          };
        }
        function _(_, _, _) {
          return [_, _, _, _];
        }
        function _(_, _ = !0) {
          const _ = _(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (_) => {
              _ && (_.result == _._ || _.result == _._) && _.refetch();
            },
            _ = (0, _._)({
              queries: (_.data?.sessions || []).map((_) => ({
                queryKey: _(_, _.client_instanceid, "none"),
                queryFn: async () => _(_, _, "none"),
                staletime: 3600 * 1e3,
                refetchInterval: (_) =>
                  (_.state.data?.refetchIntervals.full || 3600) * 1e3,
                enabled: _.isSuccess && !_.isFetching,
                onError: _,
                retry: _,
              })),
            }),
            _ = (0, _.useCallback)(
              (_) => {
                if (!_) return _;
                const _ = new Map(
                  Array.from(_?.mapApps.entries() ?? []).filter(_),
                );
                return {
                  ..._,
                  mapApps: _,
                };
              },
              [_],
            ),
            _ = (0, _._)(),
            _ = (0, _._)({
              queries: (_.data?.sessions || []).map((_, _) => ({
                queryKey: _(_, _.client_instanceid, "changing"),
                queryFn: async () => _(_, _, "changing", _[_].data),
                enabled: _[_].isSuccess && !_[_].isFetching,
                staletime: 10 * 1e3,
                select: _,
                refetchInterval: (_) => {
                  const _ = _.state.data;
                  if (!_) return 60 * 1e3;
                  let _ = !1;
                  for (const _ of _.mapApps.values())
                    if (_.BIsDownloading() || _.uninstalling) {
                      _ = !0;
                      break;
                    }
                  const _ = _.refetchIntervals;
                  return (_ ? _.updating : _.changing) * 1e3;
                },
                onError: _,
                retry: _,
              })),
            }),
            _ = () => {
              for (const _ of _.data?.sessions || []) {
                const _ = _(_, _.client_instanceid, "changing");
                _.removeQueries({
                  queryKey: _,
                });
              }
              for (const _ of _) _.refetch();
            };
          return {
            rgQueries: _.map((_, _) =>
              _[_].isError && !_[_].isFetching ? _[_] : _,
            ),
            refetch: _,
          };
        }
        function _(_, _) {
          return [_, _, _];
        }
        function _(_, _ = !0) {
          const _ = (0, _._)(),
            { rgQueries: _ } = _(void 0, _);
          return (0, _._)({
            queryKey: _(_, _),
            queryFn: () => {
              const _ = new Map();
              for (const _ of _)
                if (_.isSuccess) {
                  const _ = _.data?.session?.client_instanceid,
                    _ = _.data?.mapApps?.get(_);
                  _ &&
                    _.set(_, {
                      session: _.data.session,
                      app: _,
                      clientInfo: _.data.clientInfo,
                    });
                }
              return _;
            },
            enabled: _.reduce((_, _) => _ && _.isSuccess && !_.isFetching, !0),
            staleTime: 0,
            gcTime: 0,
          });
        }
        function _(_, _, _) {
          const _ = useActiveAccount(),
            _ = useActiveServiceTransport();
          return useQuery({
            queryKey: [_, _, _, _, _],
            queryFn: async () => {
              if (!_ || !_ || _ == _) return {};
              const _ = CProtoBufMsg.Init(
                  CClan_GetPartnerEventsByBuildIDRange_Request,
                ),
                _ = _.Body().add_requests();
              _.set_appid(_),
                _.set_start_build_id(_ + 1),
                _.Body().set_count(100);
              const _ = await ClanService.GetPartnerEventsByBuildIDRange(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from GetPartnerEventsByBuildIDRange",
                    _.GetEResult(),
                  ),
                  new Error(
                    `Error from GetPartnerEventsByBuildIDRange: ${_.GetEResult()}`,
                  ))
                );
              return {
                appid: _,
                source_buildid: _,
                target_buildid: _,
                patch_notes: _.Body()
                  .toObject()
                  .matches?.sort((_, _) => _.build_id - _.build_id),
              };
            },
          });
        }
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = _(_),
            _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async () => {
              const _ = _._.Init(_);
              _.Body().set_appid(_), _.Body().set_client_instanceid(_);
              const _ = await _.InstallClientApp(_, _);
              if (_.GetEResult() != _._)
                throw (
                  (console.error(
                    "Received error from InstallClientApp",
                    _.GetEResult(),
                  ),
                  new Error(`Error from InstallClientApp: ${_.GetEResult()}`))
                );
              const _ = _?.data;
              _ && _.get(_) && _.get(_).app.SetDownloading(),
                _.setQueryData(_(_, _), _),
                _.refetch();
            },
            onSuccess: _,
          });
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = _(_),
            _ = useActiveAccount(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                CClientComm_UninstallClientApp_Request,
              );
              _.Body().set_appid(_), _.Body().set_client_instanceid(_);
              const _ = await ClientCommService.UninstallClientApp(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from UninstallClientApp",
                    _.GetEResult(),
                  ),
                  new Error(`Error from UninstallClientApp: ${_.GetEResult()}`))
                );
              const _ = _?.data;
              _ && _.get(_) && (_.get(_).app.uninstalling = !0),
                _.setQueryData(_(_, _), _),
                _.refetch();
            },
            onSuccess: _,
          });
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = _(_),
            _ = useActiveAccount(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = _?.data,
                _ = _ && _.get(_),
                _ = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
              _.Body().set_appid(_),
                _.Body().set_client_instanceid(_),
                _.Body().set_action(1);
              const _ = await ClientCommService.SetClientAppUpdateState(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from SetClientAppUpdateState",
                    _.GetEResult(),
                  ),
                  new Error(
                    `Error from SetClientAppUpdateState: ${_.GetEResult()}`,
                  ))
                );
              _ && _.get(_).app.SetDownloading(),
                _.setQueryData(_(_, _), _),
                _.refetch();
            },
            onSuccess: _,
          });
        }
        function _(_, _, _, _) {
          const _ = useActiveServiceTransport(),
            _ = _(_),
            _ = useActiveAccount(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = _?.data,
                _ = _ && _.get(_);
              if (
                _?.clientInfo?.clientcomm_version &&
                _.clientInfo.clientcomm_version >= 1
              ) {
                const _ = CProtoBufMsg.Init(
                  CClientComm_EnableOrDisableDownloads_Request,
                );
                _.Body().set_client_instanceid(_), _.Body().set_enable(!_);
                const _ = await ClientCommService.EnableOrDisableDownloads(
                  _,
                  _,
                );
                if (_.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from EnableOrDisableDownloads",
                      _.GetEResult(),
                    ),
                    new Error(
                      `Error from EnableOrDisableDownloads: ${_.GetEResult()}`,
                    ))
                  );
              } else {
                const _ = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
                _.Body().set_appid(_),
                  _.Body().set_client_instanceid(_),
                  _.Body().set_action(_ ? 0 : 1);
                const _ = await ClientCommService.SetClientAppUpdateState(_, _);
                if (_.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from SetClientAppUpdateState",
                      _.GetEResult(),
                    ),
                    new Error(
                      `Error from SetClientAppUpdateState: ${_.GetEResult()}`,
                    ))
                  );
              }
              _ && _.get(_)?.app.SetPaused(_),
                _.setQueryData(_(_, _), _),
                _.refetch();
            },
            onSuccess: _,
          });
        }
        async function _(_, _, _, _) {
          const _ = CProtoBufMsg.Init(CClientComm_LaunchClientApp_Request);
          _.Body().set_appid(_),
            _.Body().set_client_instanceid(_),
            _.Body().set_query_params(_);
          const _ = await ClientCommService.LaunchClientApp(_, _);
          if (_.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from LaunchClientApp",
                _.GetEResult(),
                _.Hdr().transport_error(),
              ),
              new Error(`Error from LaunchClientApp: ${_.GetEResult()}`))
            );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = {
          bFitToWindow: !0,
          bOverlapHorizontal: !0,
          bMatchWidth: !1,
          bShiftToFitWindow: !0,
          bDisablePopTop: !0,
        };
        function _(_) {
          const { setRemoteClientID: _, rgSessions: _ } = _,
            _ = (0, _.useCallback)(
              (_) => {
                _?.length &&
                  (0, _._)(
                    (0, _.jsx)(_, {
                      sessions: _,
                      setRemoteDownloadClientId: _,
                    }),
                    _,
                    _,
                  );
              },
              [_, _],
            );
          return _?.length
            ? (0, _.jsx)("button", {
                onClick: _,
                className: _().ClientSelectDropdown,
                children: (0, _.jsx)(_, {}),
              })
            : null;
        }
        function _({ sessions: _, setRemoteDownloadClientId: _ }) {
          return (0, _.jsx)("ul", {
            className: _().ClientListDropdownMenu,
            children: _.map((_) =>
              (0, _.jsx)(
                _._,
                {
                  onSelected: () => {
                    _(_.client_instanceid);
                  },
                  children: (0, _._)(
                    "#GamesList_Client_Indicator",
                    _(_.device_type) ?? "",
                    _.machine_name,
                  ),
                },
                _.client_instanceid,
              ),
            ),
          });
        }
        function _(_) {
          switch (_) {
            case _.g0U:
              return (0, _._)("#Library_DeviceType_PC");
            case _.LS$:
              return (0, _._)("#Library_DeviceType_SteamDeck");
            case _.bOm:
              return (0, _._)("#Library_DeviceType_SteamMachine");
            case _.jYC:
              return (0, _._)("#Library_DeviceType_SteamFrame");
            default:
              return;
          }
        }
        function _(_) {
          return (0, _.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13 8",
            fill: "none",
            ..._,
            children: (0, _.jsx)("path", {
              fill: "currentColor",
              _: "M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z",
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            [_, _, _] = (0, _._)(!1),
            { mutateAsync: _ } = (0, _._)({
              appid: _,
            }),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)(_);
          return !_ || _
            ? null
            : (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsxs)(_._, {
                    onClick: async () => {
                      try {
                        _(!0), await _(), (0, _._)(), _(!1), _();
                      } catch (_) {
                        _(!1),
                          console.error(
                            "Error AddToLibraryActionWithRemoteInstall",
                            _,
                          );
                      }
                    },
                    children: [
                      _ &&
                        (0, _.jsx)(_._, {
                          size: "small",
                        }),
                      (0, _._)("#Sale_AddToLibrary_NoPlus"),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_._, {
                      active: _,
                      children: (0, _.jsx)(_._, {
                        strTitle: (0, _._)("#Sale_AddedToLibrary"),
                        strDescription: (0, _._)(
                          "#Sale_AddToLibrary_DialogDesc",
                          (0, _.jsx)("span", {
                            className: _().GameName,
                            children: _.name || "",
                          }),
                        ),
                        closeModal: _,
                        bAlertDialog: !0,
                        children: (0, _.jsx)(_, {
                          _: _,
                        }),
                      }),
                    }),
                  }),
                ],
              });
        }
        function _(_) {
          const { _: _ } = _,
            _ = _(),
            [_, _] = (0, _.useState)(0),
            [_, _] = (0, _.useState)(!1),
            { data: _ } = (0, _._)(_);
          if (!_ || !("appid" in _) || _._.IN_CLIENT || !_) return null;
          const _ = _.data?.sessions?.filter((_) => {
            switch (_.device_type) {
              default:
              case _.g0U:
                {
                  if (!_.os_type) return !1;
                  const _ = _(_.os_type);
                  if (_.windows && _.includes("Windows")) return !0;
                  if (_.mac && _.includes("Mac")) return !0;
                  if (_.steamos_linux && _.includes("Linux")) return !0;
                }
                break;
              case _.LS$:
                return _.windows || _.steamos_linux;
            }
            return !1;
          });
          if (_ && _?.length > 0) {
            const _ = _[_];
            return (0, _.jsx)("div", {
              className: _().RemoteOptions,
              children: _
                ? (0, _.jsx)(_, {
                    session: _,
                  })
                : (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_, {
                        rgAcceptableSession: _,
                        session: _,
                        setSessionIndex: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _().ActionRow,
                        children: (0, _.jsx)(_, {
                          appid: _.appid,
                          session: _,
                          setRemoteDownloadRequested: _,
                        }),
                      }),
                    ],
                  }),
            });
          }
          return null;
        }
        function _(_) {
          const { rgAcceptableSession: _, session: _, setSessionIndex: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                children: (0, _._)("#Sale_AddToLibrary_RemoteDownload"),
              }),
              (0, _.jsxs)("div", {
                className: _().ClientSelector,
                children: [
                  (0, _.jsx)("span", {
                    className: _().ClientName,
                    children: _.machine_name,
                  }),
                  (0, _.jsx)(_, {
                    rgSessions: _,
                    setRemoteClientID: (_) => {
                      const _ = _.findIndex((_) => _.client_instanceid === _);
                      _ >= 0 && _(_);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { session: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().DownloadStartedCtn,
            children: [
              (0, _._)("#Sale_AddToLibrary_DownloadStarted"),
              (0, _.jsx)("br", {}),
              (0, _.jsx)("a", {
                href: `${_._.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${_.client_instanceid}`,
                children: (0, _._)("#Sale_AddToLibrary_SeeDownloadProgress"),
              }),
            ],
          });
        }
        function _(_) {
          const { appid: _, session: _, setRemoteDownloadRequested: _ } = _,
            _ = _(_, _.client_instanceid);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                onClick: () => {
                  _.mutateAsync(), _(!0);
                },
                children: [
                  (0, _.jsx)(_.f5X, {}),
                  (0, _._)("#Button_StartDownload"),
                ],
              }),
              (0, _.jsx)("div", {
                className: _().LearnMoreCtn,
                children: (0, _.jsx)("a", {
                  href: "https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409",
                  className: _().InlineLink,
                  children: (0, _._)("#Button_Learn"),
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, className: _ } = _,
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ =
              _.related_items?.demo_appid && _.related_items.demo_appid
                ? _.related_items.demo_appid
                : [],
            _ = _.length > 0,
            _ = _ || _.type === _._._,
            _ = _
              ? _._.Localize("#Sale_InstallDemo_ttip", _.name || "")
              : _
                ? _._.Localize("#Sale_CannotInstallDemo_ttip", _.name || "")
                : _._.Localize("#Loading");
          if (_._.IN_MOBILE_WEBVIEW) {
            if (_ && _) {
              const _ = _.type === _._._ ? _.appid : _[0];
              return (0, _.jsx)("div", {
                className: _,
                children: (0, _.jsx)(_, {
                  appid: _,
                }),
              });
            }
            return null;
          }
          return !_ && _ && _.is_free
            ? (0, _.jsx)(_._, {
                _: _,
                className: _,
              })
            : (0, _.jsx)(_._, {
                toolTipContent: _,
                onClick: (_) => {
                  _.preventDefault(),
                    _.stopPropagation(),
                    _ && (0, _._)(_.type === _._._ ? _.appid : _[0], _.name);
                },
                className: (0, _._)(
                  _,
                  _().DemoButton,
                  !_ && _().DisabledButton,
                ),
                children: _
                  ? _._.Localize("#Sale_InstallDemo")
                  : _._.Localize("#Sale_DemoNotFound"),
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              _: _,
              strClassName: _,
              bMinimizePlatforms: _,
              bHideWindows: _,
            } = _,
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          if (_) {
            let _ = _
              ? null
              : _?.windows &&
                (0, _.jsx)("span", {
                  title: _._.Localize("#Platform_Windows"),
                  children: (0, _.jsx)(_.Xz0, {
                    "aria-label": _._.Localize("#Platform_Windows"),
                  }),
                });
            return (
              _._.PLATFORM === "linux" && _?.steamos_linux
                ? (_ = (0, _.jsx)("span", {
                    title: _._.Localize("#Platform_Linux"),
                    children: (0, _.jsx)(_.Qte, {
                      "aria-label": _._.Localize("#Platform_Linux"),
                    }),
                  }))
                : _._.PLATFORM === "macos" && _?.mac
                  ? (_ = (0, _.jsx)("span", {
                      title: _._.Localize("#Platform_Mac"),
                      children: (0, _.jsx)(_.kPc, {
                        "aria-label": _._.Localize("#Platform_Mac"),
                      }),
                    }))
                  : _.vr_support?.vrhmd &&
                    (_ = (0, _.jsx)("span", {
                      title: _._.Localize("#Platform_VR"),
                      children: (0, _.jsx)(_._, {
                        "aria-label": _._.Localize("#Platform_VR"),
                      }),
                    })),
              _
                ? (0, _.jsx)("span", {
                    className: (0, _._)(_().CapsulePlatform, _),
                    children: _,
                  })
                : null
            );
          }
          return (0, _.jsxs)("span", {
            className: (0, _._)(_().CapsulePlatform, _),
            children: [
              !_ &&
                _.windows &&
                (0, _.jsx)("span", {
                  title: _._.Localize("#Platform_Windows"),
                  children: (0, _.jsx)(_.Xz0, {
                    "aria-label": _._.Localize("#Platform_Windows"),
                  }),
                }),
              _.mac &&
                (0, _.jsx)("span", {
                  title: _._.Localize("#Platform_Mac"),
                  children: (0, _.jsx)(_.kPc, {
                    "aria-label": _._.Localize("#Platform_Mac"),
                  }),
                }),
              _.steamos_linux &&
                (0, _.jsx)("span", {
                  title: _._.Localize("#Platform_Linux"),
                  children: (0, _.jsx)(_.Qte, {
                    "aria-label": _._.Localize("#Platform_Linux"),
                  }),
                }),
              _.vr_support?.vrhmd &&
                (0, _.jsx)("span", {
                  title: _._.Localize("#Platform_VR"),
                  children: (0, _.jsx)(_._, {
                    "aria-label": _._.Localize("#Platform_VR"),
                  }),
                }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, bSelfPurchaseOption: _ } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = _ && _.item_type == _._._ ? _.self_purchase_option : _;
          return (0, _.jsx)(_, {
            purchaseOption: _,
            ..._,
          });
        }
        function _(_) {
          const {
              bSingleLineMode: _,
              onlyOneDiscountPct: _,
              _: _,
              purchaseOption: _,
              bHidePrePurchase: _,
              bHideReleaseDate: _,
              bHideIfDemo: _,
              bPurchaseOptionDisplay: _,
              strContainerClassName: _,
              strDiscountAndPriceClassName: _,
              strPriceFormattedClassName: _,
              bPreferWholeNumbers: _,
              bSelfPurchaseOption: _,
              bHideNewTag: _,
              bPrePurchaseBesidePrice: _,
            } = _,
            _ = _._.NOW,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          const _ = _,
            _ = !_ && (0, _._)(_, _),
            _ = (0, _._)({
              [_().StoreSalePriceWidgetContainer]: !0,
              [_().SingleLineMode]: _,
              StoreSalePriceWidgetContainer: !0,
              [_().NewItem]: _,
              [_().PurchaseOption]: _,
              [_ ?? ""]: !!_,
            });
          if (_.bShowInLibrary)
            return (0, _.jsx)("div", {
              className: _,
              children: (0, _.jsx)("div", {
                className: _().StoreSalePriceBox,
                children: _._.Localize("#EventDisplay_CallToAction_InLibrary"),
              }),
            });
          if (_ && _.is_coming_soon && (!_ || (!_.packageid && !_.bundleid))) {
            if (_) return null;
            const _ =
              _.coming_soon_display &&
              ["text_comingsoon", "text_tba"].includes(_.coming_soon_display)
                ? (0, _._)(_)
                : _._.Localize(
                    "#EventDisplay_CallToAction_ComingSoon_Date",
                    (0, _._)(_),
                  );
            return (0, _.jsx)("div", {
              className: _,
              children: (0, _.jsx)("div", {
                className: _().StoreSalePriceBox,
                children: _,
              }),
            });
          }
          if (_.is_free)
            if (_.is_free_temporarily) {
              if (_ && _.is_free_to_keep && !_.formatted_original_price)
                return (0, _.jsx)("div", {
                  className: _,
                  children: (0, _.jsx)("div", {
                    className: _().StoreSalePriceBox,
                    children: _._.Localize("#EventDisplay_CallToAction_Free"),
                  }),
                });
            } else
              return _.item_type == _._._ && _.type == _._._
                ? _
                  ? null
                  : (0, _.jsxs)("div", {
                      className: _,
                      children: [
                        _ &&
                          (0, _.jsx)("div", {
                            className: _().StoreSaleNewItem,
                            children: _._.Localize("#Flag_New"),
                          }),
                        (0, _.jsx)("div", {
                          className: _().StoreSalePriceBox,
                          children: _._.Localize(
                            "#EventDisplay_CallToAction_FreeDemo",
                          ),
                        }),
                      ],
                    })
                : (0, _.jsxs)("div", {
                    className: _,
                    children: [
                      _ &&
                        (0, _.jsx)("div", {
                          className: _().StoreSaleNewItem,
                          children: _._.Localize("#Flag_New"),
                        }),
                      (0, _.jsx)("div", {
                        className: _().StoreSalePriceBox,
                        children: _._.Localize(
                          "#EventDisplay_CallToAction_FreeToPlay",
                        ),
                      }),
                    ],
                  });
          if (!_ || !_.formatted_final_price) return null;
          let _ = _.discount_pct || 0,
            _ = (!_ && _.item_type == _._._ && _.bundle_discount_pct) || 0,
            _ = _.formatted_final_price;
          if (_) {
            const _ = (0, _._)(_._.country_code.toUpperCase()),
              _ = {
                ...(0, _._)(_),
                bWholeUnitsOnly: !0,
              };
            _ = (0, _._)(Number.parseInt(_.final_price_in_cents || "0"), _);
          }
          const _ = (0, _._)(_, _);
          return (0, _.jsx)(_, {
            bSingleLineMode: !!_,
            nBaseDiscountPercentage: _,
            nDiscountPercentage: _,
            bIsPrePurchase: _,
            strBestPurchaseOriginalPriceFormatted:
              _.formatted_original_price || "",
            strBestPurchasePriceFormatted: _,
            bHideDiscountPercentForCompliance:
              !!_.hide_discount_pct_for_compliance,
            bShowNewFlag: _,
            bHidePrePurchase: !!_,
            bPrePurchaseBesidePrice: _,
            strDiscountAndPriceClassName: _,
            strPriceFormattedClassName: _,
            bPurchaseOptionDisplay: _,
          });
        }
        function _(_) {
          const {
              bSingleLineMode: _,
              nDiscountPercentage: _,
              bIsPrePurchase: _,
              nBaseDiscountPercentage: _,
              strBestPurchaseOriginalPriceFormatted: _,
              strBestPurchasePriceFormatted: _,
              bHideDiscountPercentForCompliance: _,
              bShowNewFlag: _,
              bHidePrePurchase: _,
              bPrePurchaseBesidePrice: _,
              strDiscountAndPriceClassName: _,
              strPriceFormattedClassName: _,
              bPurchaseOptionDisplay: _,
            } = _,
            _ = _;
          let _;
          _ &&
            (_
              ? (_ = _._.Localize("#Discount_ARIA_Label_SpecialPrice", _))
              : (_ = _._.Localize("#Discount_ARIA_Label", _, _, _)));
          const _ = !!((_ || _) && !_),
            _ = _ && !!_,
            _ = _ && !_ && _;
          return (0, _.jsxs)("div", {
            className: (0, _._)({
              [_().StoreSalePriceWidgetContainer]: !0,
              [_().SingleLineMode]: _,
              StoreSalePriceWidgetContainer: !0,
              [_().Discounted]: !!_,
              Discounted: !!_,
              [_().PrePurchase]: !!_,
              [_().PrePurchaseBesidePrice]: !!_,
              [_().NewItem]: !!_,
              [_().PurchaseOption]: _,
              [_ ?? ""]: !!_,
            }),
            "aria-label": _,
            children: [
              !!(_ && !_) &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().StoreSalePrepurchaseLabel,
                    "StoreSalePrepurchaseLabel",
                  ),
                  children: (0, _.jsxs)("span", {
                    children: [
                      (0, _.jsx)(_.zD7, {}),
                      _._.Localize(
                        "#EventDisplay_CallToAction_Prepurchase_Short",
                      ),
                    ],
                  }),
                }),
              !!(!_ && _) &&
                (0, _.jsx)("div", {
                  className: _().StoreSaleNewItem,
                  children: _._.Localize("#Flag_New"),
                }),
              !!(_ && !_) &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)(_._, {
                      toolTipContent: _._.Localize(
                        "#Sale_Bundle_Discount_ttip",
                      ),
                      children: (0, _.jsx)("span", {
                        className: (0, _._)(_().BaseDiscount),
                        children: `-${_}%`,
                      }),
                    }),
                    !!_ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)("span", {
                            children: "\xA0",
                          }),
                          (0, _.jsx)(_._, {
                            toolTipContent: _._.Localize(
                              "#Sale_Bundle_Discount_Limited_ttip",
                            ),
                            children: (0, _.jsx)("span", {
                              className: (0, _._)(_().StoreSaleDiscountBox),
                              children: `-${_}%`,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              !!(!_ && _ && !_) &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().StoreSaleDiscountBox,
                    "StoreSaleDiscountBox",
                  ),
                  children: `-${_}%`,
                }),
              !!(_ && _) &&
                (0, _.jsx)("div", {
                  className: _().DiscountIconCtn,
                  children: (0, _.jsx)(_.XH_, {}),
                }),
              _ || _
                ? (0, _.jsxs)("div", {
                    className: (0, _._)(_().StoreSaleDiscountedPriceCtn),
                    children: [
                      _
                        ? (0, _.jsx)("div", {
                            className: (0, _._)({
                              [_().SingleLineOriginalPrice]: _,
                              [_().StoreOriginalPrice]: !_,
                            }),
                            children: _,
                          })
                        : (0, _.jsx)("div", {
                            className: _().YourPriceLabel,
                            children: _._.Localize("#PriceDisplay_YourPrice"),
                          }),
                      (0, _.jsx)("div", {
                        className: (0, _._)({
                          [_().StoreSalePriceBox]: !0,
                          [_().SingleLineMode]: _,
                          [_ ?? ""]: !!_,
                        }),
                        children: _,
                      }),
                    ],
                  })
                : (0, _.jsx)("div", {
                    className: (0, _._)({
                      [_().StoreSalePriceBox]: !0,
                      [_ ?? ""]: !!_,
                    }),
                    children: _,
                  }),
            ],
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            rgTagIDs: _,
            bShowEvenIfNoTags: _,
            bHideTitle: _,
            bLargeText: _,
            bNoStoreLinks: _,
          } = _;
          return _?.length > 0 || _
            ? (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().SaleTagBlockCtn,
                  _ ? _().LargeText : "",
                  "SaleTagBlockCtn",
                ),
                children: [
                  !_ &&
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().TagTitle, "WidgetTagTitle"),
                      children: _._.Localize("#GameHover_Tags"),
                    }),
                  _?.length > 0
                    ? (0, _.jsx)("div", {
                        className: (0, _._)(_().TagBox, "TagBox"),
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              tagid: _,
                              bNoStoreLinks: _,
                            },
                            _,
                          ),
                        ),
                      })
                    : (0, _.jsx)("div", {
                        children: _._.Localize("#Broadcast_None"),
                      }),
                ],
              })
            : null;
        }
        function _(_) {
          const { tagid: _, className: _ } = _,
            _ = (0, _._)(_, _._.LANGUAGE);
          if (!_) return null;
          const _ = (0, _.wwZ)((0, _.sfN)(_._.LANGUAGE)),
            _ = `${_._.STORE_BASE_URL}tags/${_}/${_}`;
          return (0, _.jsx)(_._, {
            url: _,
            className: (0, _._)(_().Tag, "WidgetTag", _),
            children: _,
          });
        }
        function _(_) {
          const { tagid: _, className: _, bNoStoreLinks: _ } = _,
            _ = (0, _.wwZ)((0, _.sfN)(_._.LANGUAGE)),
            _ = (0, _._)(_, _._.LANGUAGE),
            _ = `${_._.STORE_BASE_URL}tags/${_}/${_}`;
          return _
            ? _
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_().Tag, "WidgetTag", _),
                  children: _,
                })
              : (0, _.jsx)(_._, {
                  url: _,
                  className: (0, _._)(_().Tag, "WidgetTag", _),
                  children: _,
                })
            : null;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, bIsMuted: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { mutate: _ } = (0, _._)(_),
            _ = (_) => {
              _.preventDefault(), _ ? (0, _._)(_, _?.name) : _();
            },
            _ = (0, _._)(
              _().CapsuleBottomBar,
              _ && _().Muted,
              _ ? _().PlayNowButton : _().AddToLibraryButton,
            );
          return (0, _.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: _,
            className: _,
            onKeyDown: (_) => {
              (_.key === "Enter" || _.key === " ") &&
                (_.preventDefault(), _(_));
            },
            children: (0, _._)(_ ? "#Sale_PlayNow" : "#Sale_AddToLibrary"),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)((0, _._)(_, _));
          return {
            snr: (0, _._)(_),
            strStoreURL: (0, _._)(_, _, _),
          };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              className: _,
              url: _,
              style: _,
              children: _,
              bSkipForcingStoreLink: _,
              bOpenInline: _,
              bFocusable: _ = !0,
            } = _,
            _ = _ ? _ : _ ? _(_, _._.STORE_BASE_URL) : void 0,
            _ = (0, _._)(_);
          return _
            ? (0, _.jsx)(_._, {
                href: _,
                target: _._.IN_CLIENT || _ ? void 0 : "_blank",
                className: _,
                style: _,
                rel: "noopener noreferrer",
                focusable: _,
                children: _,
              })
            : (0, _.jsx)("span", {
                style: _,
                className: _,
                children: _,
              });
        }
        function _(_, _) {
          try {
            const _ = new URL(_),
              _ = new URL(_);
            return _.href.replace(/\/$/, "") + _.pathname + _.search + _.hash;
          } catch {
            return "";
          }
        }
        function _(_) {
          const { section: _ } = _;
          return _.label_link && !_.label_link_style
            ? jsx("div", {
                className: styles.SaleViewAll,
                children: jsx(_, {
                  url: _.label_link,
                  children: SharedLocalization.Localize(
                    "#btn_live_streams_all",
                  ),
                }),
              })
            : null;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)(void 0),
          _ = _.Provider;
        function _(_) {
          const { steamid: _, children: _ } = _,
            _ = useMemo(
              () => ({
                useActiveAccount: () => (!_ || _ == "0" ? "" : _),
              }),
              [_],
            );
          return createElement(
            _,
            {
              value: _,
            },
            _,
          );
        }
        function _() {
          const _ = (0, _.useContext)(_);
          if (!_)
            throw new Error(
              "called useActiveAccount outside of ActiveAccountProvider",
            );
          return _.useActiveAccount();
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { children: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            className: _.GreenButton,
            type: "button",
            ..._,
            children: (0, _.jsx)("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            className: _.BlueButton,
            type: "button",
            ..._,
            children: (0, _.jsx)("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            className: _.GreyButton,
            type: "button",
            ..._,
            children: (0, _.jsx)("span", {
              children: _,
            }),
          });
        }
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ..._,
            children: jsx("span", {
              children: _,
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          if (_[_]) {
            if (_ == "community_icon") {
              const _ = _.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${_[_]}.jpg`)
                .replace(/\?.*$/, "");
              return `${_._.MEDIA_CDN_COMMUNITY_URL}${_}`;
            } else if (typeof _[_] == "string") {
              const _ = _.asset_url_format.replace("${FILENAME}", _[_]);
              return `${_._.STORE_ITEM_BASE_URL}${_}`;
            }
          }
        }
        function _(_, _ = "full") {
          let _ = "";
          switch (_) {
            case "thumb":
              _ = ".116x65";
              break;
            case "600x338":
              _ = ".600x338";
              break;
            case "1920x1080":
              _ = ".1920x1080";
              break;
            case "full":
              _ = "";
              break;
            default:
              (0, _._)(_, `Invalid size: ${_}`);
              break;
          }
          return (
            _._.STORE_ITEM_BASE_URL +
            _.filename.replace(/\.([^.]+)(\?.*)?$/, `${_}.$1$2`)
          );
        }
        function _(_) {
          const { data: _ } = (0, _._)(_),
            _ = (0, _._)();
          if (_)
            return [
              ...(_.all_ages_screenshots || []),
              ...(!_ && _.mature_content_screenshots
                ? _.mature_content_screenshots
                : []),
            ].sort((_, _) => _.ordinal - _.ordinal);
        }
        function _(_, _ = !1) {
          const { data: _ } = useStoreItemAssets({
            appid: _,
          });
          if (_ !== void 0)
            return _ === null
              ? null
              : _ && _.library_capsule_2x
                ? _(_, "library_capsule_2x")
                : _.library_capsule
                  ? _(_, "library_capsule")
                  : `${Config.STORE_ITEM_BASE_URL}steam/apps/${_}/portrait.png`;
        }
        function _(_, ..._) {
          const { data: _ } = useStoreItemAssets(_);
          return _(_, ..._);
        }
        function _(_, ..._) {
          if (!_?.asset_url_format) return;
          const _ = _.find((_) => {
            const _ = _[_];
            return typeof _ == "string" && _.trim() !== "";
          });
          return _ && _(_, _);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_[(_.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (_[(_.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (_[(_.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            _
          ))(_ || {});
        function _(_) {
          const { _: _, active: _, bIsHoverMode: _, eGrowOnActivate: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = _.useRef(0),
            _ = _.useRef(null);
          _.useLayoutEffect(() => {
            _ && _.current && (_.current.currentTime = _.current);
          }, [_]);
          const _ = (_) => {
              _.current = _.currentTarget.currentTime;
            },
            _ = (0, _._)(_ ? _ : void 0);
          if ((_ && _._.IN_MOBILE) || !_ || !_ || !_.visible || !_) return null;
          const _ = _.filter(
            (_) => _.microtrailer && _.microtrailer.length > 0,
          );
          if (_.length === 0)
            return _ &&
              _.related_items?.parent_appid &&
              (_.type == _._._ || _.type == _._._)
              ? (0, _.jsx)(_, {
                  ..._,
                  _: {
                    appid: _.related_items.parent_appid,
                  },
                })
              : null;
          let _;
          switch (_) {
            case 1:
              _ = _().GrowOnHoverImplicit;
              break;
            case 2:
              _ = _().GrowOnHoverMedium;
              break;
          }
          const _ = _[0];
          return (0, _.jsx)("video", {
            className: _()(_().CapsuleMicroTrailer, _),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: _,
            playsInline: !0,
            onTimeUpdate: _,
            children: (0, _.jsx)(_, {
              trailer: _,
            }),
          });
        }
        function _(_) {
          const { trailer: _ } = _;
          return !_ || !_.microtrailer
            ? null
            : (0, _.jsx)(_.Fragment, {
                children: _.microtrailer?.map((_) =>
                  _._.IN_CLIENT && _.type == "video/mp4"
                    ? null
                    : (0, _.jsx)(
                        "source",
                        {
                          src: (0, _._)(_, _.filename || ""),
                          type: _.type,
                        },
                        _.filename,
                      ),
                ),
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        function _(_) {
          return _
            ? !!(
                _.related_items &&
                _.related_items.standalone_demo_appid &&
                _.related_items.standalone_demo_appid.length > 0 &&
                _.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function _(_) {
          return !_ || !_.related_items?.standalone_demo_appid
            ? []
            : _.related_items?.standalone_demo_appid;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _?.is_coming_soon
            ? _(
                _.coming_soon_display,
                _.steam_release_date,
                _.custom_release_date_message,
              )
            : _?.steam_release_date
              ? LocalizeRtime32ToShortDate(_.steam_release_date)
              : "";
        }
        function _(_) {
          return _(_.releaseInfo);
        }
        function _(_, _, _) {
          switch (_) {
            case "date_full":
              return LocalizeRtime32ToShortDate(_);
            case "date_month":
              return LocalizeCalendarMonthAndYear(new Date(_ * 1e3));
            case "date_quarter":
              return LocalizeCalendarQuarter(new Date(_ * 1e3));
            case "date_year":
              return LocalizeCalendarYear(new Date(_ * 1e3));
            case "text_comingsoon":
              return (
                _ || SharedLocalization.Localize("#Store_ComingSoon_ComingSoon")
              );
            case "text_tba":
              return _ || SharedLocalization.Localize("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
        function _(_) {
          if (!_) return "";
          if (_ && _.is_coming_soon) {
            if (_.coming_soon_display) return (0, _._)(_);
            if (_.custom_release_date_message)
              return _.custom_release_date_message;
            const _ = _.steam_release_date;
            return _
              ? _.is_abridged_release_date
                ? (0, _._)(new Date(_ * 1e3))
                : (0, _._)(_)
              : "";
          }
          let _ = _.steam_release_date;
          return _ || (_ = _.original_release_date), _ ? (0, _._)(_) : "";
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _ = !1) {
          if (_.is_coming_soon && !_) return 0;
          let _ = _.steam_release_date;
          return _ || (_ = _.original_release_date), _;
        }
        function _(_) {
          let _ = _.original_steam_release_date;
          return _ || (_ = _(_)), _;
        }
        const _ = 7;
        function _(_, _) {
          if (!_) return !1;
          const _ = _(_);
          return _ ? !_.is_coming_soon && _ + _ * _._.PerDay > _ : !1;
        }
        function _(_, _) {
          return !!(_ && _.is_coming_soon && _ && _.packageid);
        }
        function _(_, _) {
          return !!(_ && _ && _.packageid);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = !1) {
          if (_)
            return _ && (0, _._)(_)
              ? `${_._.STORE_BASE_URL}app/${((0, _._))(_)[0]}`
              : `${_._.STORE_BASE_URL}${_.store_url_path}`;
        }
        function _() {
          window.location.href = `${_._.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)(_(_.GetAnonymousServiceTransport(), _, _));
        }
        function _(_, _, _) {
          return {
            queryKey: ["LocalizedTagNames", _],
            queryFn: async () => {
              const _ = `LocalizedTagNames2_${_}`,
                _ = await _.GetObject(_),
                _ = _._.Init(_._);
              _.Body().set_language(_),
                _?.version_hash &&
                  _.Body().set_have_version_hash(_.version_hash);
              const _ = await _._.GetTagList(_, _);
              let _;
              if (_.GetEResult() == _._)
                (_ = _.Body().toObject()), _ && _.StoreObject(_, _);
              else if (_.GetEResult() == _._) _ = _ || void 0;
              else if (_)
                console.warn(
                  "Couldn't load updated tag localization, will continue with what we have from storage.",
                ),
                  (_ = _);
              else throw _.GetErrorMessage();
              const _ = {};
              return (
                (_?.tags || []).forEach(({ tagid: _, name: _ }) => (_[_] = _)),
                _
              );
            },
            staleTime: 3600 * 1e3,
          };
        }
        async function _(_, _, _) {
          return ReactQueryClient.fetchQuery(
            _(_.GetAnonymousServiceTransport(), _, _),
          );
        }
        function _(_, _) {
          const { data: _ } = _(_);
          return _ && _[_];
        }
        function _(_) {
          const { data: _ } = _(_);
          return !!_;
        }
        const _ = [_.RW$, _.ZBT, _.gGw];
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { data: _ } = (0, _._)(_);
          return (0, _.useMemo)(
            () =>
              _
                ? _.item_type == _._._
                  ? [_.appid]
                  : _.included_appids || []
                : [],
            [_],
          );
        }
        function _(_) {
          if (!_?.length) return [];
          const _ = _.map((_) => _.creator_clan_account_id).filter((_) => !!_);
          return Array.from(new Set(_));
        }
        function _(_) {
          const { data: _ } = useStoreItemDefaultInfo({
            appid: _,
          });
          return _?.appid || _;
        }
        function _(_) {
          const { data: _ } = (0, _._)(_);
          return (0, _.useMemo)(() => {
            if (_ && _.related_items && _.related_items.parent_appid)
              return {
                appid: _.related_items.parent_appid,
              };
          }, [_]);
        }
        function _(_) {
          return (0, _.useMemo)(
            () =>
              _
                ? {
                    appid: _,
                  }
                : void 0,
            [_],
          );
        }
        function _(_) {
          return (0, _.useMemo)(
            () =>
              _
                ? {
                    packageid: _,
                  }
                : void 0,
            [_],
          );
        }
        function _(_) {
          return useMemo(
            () =>
              _
                ? {
                    bundleid: _,
                  }
                : void 0,
            [_],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = (0, _._)(_._.STORE_BASE_URL, _, _._.country_code),
            _ = await (await fetch(_)).json();
          return Object.keys(_.rgIgnoredApps).map(Number) || [];
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (!_) return new Set();
              const _ = await _(_, _);
              return new Set(_);
            },
            staleTime: 600 * 1e3,
          };
        }
        function _(_) {
          const { data: _ } = _();
          return _ === void 0 || _ == null ? void 0 : _.has(_);
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (_, _) => {
            _.setQueryData(_(_), (_) => {
              if (!_) return;
              const _ = new Set(_);
              if (_) for (const _ of _) _.delete(_);
              if (_) for (const _ of _) _.add(_);
              return _;
            });
          };
        }
        function _(_) {
          return ["AccountIgnoreApps", _ ?? 0];
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: () => _(_, _),
            onSuccess(_) {
              const [
                _,
                {
                  packageids_added: _,
                  appids_added: _,
                  purchase_result_detail: _,
                },
              ] = _;
              _ && _(_);
            },
          });
        }
        async function _(_, _) {
          const _ = _._.Init(_._);
          _.Body().set_item_id(_._.fromObject(_));
          const _ = await _._.AddFreeLicense(_, _);
          return [_.GetEResult(), _.Body().toObject()];
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = (0, _._)(_._.STORE_BASE_URL, _, _._.country_code);
          return (await (await fetch(_)).json()).rgOwnedApps || [];
        }
        async function _(_, _, _) {
          return (await _(_, _)).includes(_);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (!_) return new Set();
              const _ = await _(_, _);
              return new Set(_);
            },
            staleTime: 600 * 1e3,
          };
        }
        function _(_, _, _) {
          return {
            queryKey: ["AccountOwnsApp", _, _],
            queryFn: async () => (_ ? await _(_, _, _) : !1),
            staleTime: 600 * 1e3,
          };
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _._.accountid,
            { data: _ } = (0, _._)(_(_, _, _));
          return _ === void 0 ? void 0 : _;
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return _.useCallback(
            (_) => {
              _.setQueryData(_(_), (_) =>
                _ ? new Set([..._.values(), ..._]) : _ ? new Set(_) : void 0,
              );
            },
            [_, _, _],
          );
        }
        function _(_) {
          return ["AccountOwnedApps", _ ?? 0];
        }
        function _(_) {
          const { data: _ } = (0, _._)(_ && "appid" in _ ? void 0 : _),
            { data: _ } = _();
          let _;
          return (
            _ && "appid" in _ ? (_ = [_.appid]) : _ && (_ = _.included_appids),
            _ === void 0 || _ === void 0 || _.length == 0
              ? {
                  bIsOwned: void 0,
                  unAppID: void 0,
                }
              : {
                  bIsOwned: !_.some((_) => !_.has(_)),
                  unAppID: _[0],
                }
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        const _ = "unUserdataVersion";
        function _() {
          return Number.parseInt(window.localStorage.getItem(_) || "0");
        }
        function _(_, _, _) {
          const _ = _();
          let _ = `${_}dynamicstore/userdata/?id=${_}&cc=${_}&origin=${self.origin}`;
          return _ && (_ += `&v=${_}`), _;
        }
        function _() {
          window.localStorage.setItem(
            _,
            (
              Number.parseInt(window.localStorage.getItem(_) || "0") + 1
            ).toString(),
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid,
            _ = _._.country_code;
          return (0, _._)(_(_, _, _));
        }
        function _(_, _, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (!_) return _();
              const _ = _._.Init(_._);
              _.Body().set_country_code(_);
              const _ = await _._.GetStorePreferences(_, _);
              if (!_.BSuccess())
                throw `Error loading store preferences: ${_.GetErrorMessage()}`;
              return _.Body().toObject();
            },
            staleTime: 3600 * 1e3,
          };
        }
        function _(_) {
          const _ = _?.preferences?.primary_language;
          return _ === void 0 || _ <= k_ELanguage_None || _ >= k_ELanguage_MAX
            ? PchLanguageToELanguage(Config.LANGUAGE)
            : _;
        }
        function _() {
          const _ = useActiveServiceTransport(),
            _ = UserConfig.accountid;
          return useQuery(_(_, _));
        }
        function _() {
          const _ = useActiveServiceTransport(),
            _ = UserConfig.accountid,
            _ = UserConfig.country_code;
          return useQuery({
            ..._(_, _, _),
            select: (_) => _(_, PchLanguageToELanguage(Config.LANGUAGE)),
          });
        }
        const _ = [_._, _._];
        function _(_, _) {
          const _ = UserConfig.country_code;
          return {
            ..._(_, _, _),
            select: _,
          };
        }
        function _(_, _) {
          const _ = [_];
          if (
            _ &&
            _.preferences &&
            _.preferences.primary_language !== void 0 &&
            _.preferences.primary_language !== k_ELanguage_None
          ) {
            const { primary_language: _, secondary_languages: _ } =
              _.preferences;
            if ((_ !== _ && _.push(_), _)) {
              const _ = BigInt(_);
              for (let _ = k_ELanguage_English; _ < k_ELanguage_MAX; _++)
                (_ >> BigInt(_)) & BigInt(1) && _ != _ && _ != _ && _.push(_);
            }
          }
          return _;
        }
        function _(_) {
          return _?.content_descriptor_preferences
            ?.content_descriptors_to_exclude
            ? _.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
                (_) => _.content_descriptorid,
              ) || []
            : _;
        }
        function _() {
          return {
            preferences: {
              primary_language: (0, _.sfN)(_._.LANGUAGE),
            },
            content_descriptor_preferences: {
              content_descriptors_to_exclude: _.map((_) => ({
                content_descriptorid: _,
              })),
            },
          };
        }
        function _(_) {
          return ["StorePreferencesQueryKey", _ ?? 0];
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)({
            mutationKey: ["useUpdateWishlist", _, _, _],
            mutationFn: async () => {
              if (_ == null) return;
              const _ =
                  _._.STORE_BASE_URL +
                  "api/" +
                  (_ ? "addtowishlist" : "removefromwishlist"),
                _ = new FormData();
              _.append("appid", "" + _),
                _.append("sessionid", (0, _._)()),
                _ && _.append("snr", _);
              const _ = await fetch(_, {
                method: "POST",
                body: _,
                credentials: "include",
              });
              if (!_._)
                throw new Error(
                  `Wishlist ${_ ? "add" : "remove"} of appid ${_} failed (${_.status})`,
                );
            },
            onMutate: () => {
              _ != null && _(_ ? [_] : void 0, _ ? void 0 : [_]);
            },
            onError: () => {
              _ != null && _(_ ? void 0 : [_], _ ? [_] : void 0);
            },
            onSuccess: () => {
              (0, _._)();
            },
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = (0, _._)(_._.STORE_BASE_URL, _, _._.country_code);
          return (await (await fetch(_)).json()).rgWishlist || [];
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              if (!_) return new Set();
              const _ = await _(_, _);
              return new Set(_);
            },
            staleTime: 600 * 1e3,
          };
        }
        function _(_) {
          const { data: _ } = _();
          return _ === void 0 || _ == null ? void 0 : _.has(_);
        }
        function _() {
          const _ = (0, _._)(),
            _ = _._.accountid;
          return (_, _) => {
            _.setQueryData(_(_), (_) => {
              if (!_) return;
              const _ = new Set(_);
              if (_) for (const _ of _) _.delete(_);
              if (_) for (const _ of _) _.add(_);
              return _;
            });
          };
        }
        function _(_) {
          return ["AccountWishlistApps", _ ?? 0];
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        async function _(_, _) {
          const _ = "steam://run/" + _;
          _._.IN_CLIENT
            ? (console.log(`Running game ${_} locally.`),
              (window.location.href = _))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${_}.`,
              ),
              _(_, _, _));
        }
        async function _(_, _) {
          const _ = "steam://install/" + _;
          Config.IN_CLIENT ? (window.location.href = _) : _(_, _, _);
        }
        async function _(_, _, _) {
          console.log("prompting for", _);
          const _ = _._.STORE_BASE_URL + "about/";
          (0, _._)(
            (0, _.jsx)(_, {
              appid: _,
              strGameName: _ || "",
              strOnOKUrl: _,
              strDownloadSteamUrl: _,
            }),
            window,
          );
        }
        const _ = (_) => {
          const _ = () => _.closeModal && _.closeModal();
          return (0, _.jsx)(_._, {
            onEscKeypress: _,
            className: _().GotSteamDialog,
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsxs)(_._, {
                  children: [" ", (0, _._)("#GotSteam_Title"), " "],
                }),
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)(
                        "#GotSteam_PromptWithDownloadLink",
                        (0, _.jsx)("a", {
                          href: _.strDownloadSteamUrl,
                          className: _().DownloadSteamUrl,
                          children: (0, _._)("#GotSteam_DownloadLinkText"),
                        }),
                        (0, _.jsx)("span", {
                          className: _().GameName,
                          children: _.strGameName,
                        }),
                      ),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().Buttons,
                      children: [
                        (0, _.jsxs)("a", {
                          href: _.strOnOKUrl,
                          onClick: _,
                          className: (0, _._)(_().Button, _().LeftButton),
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().AnswerText,
                              children: [" ", (0, _._)("#GotSteam_Yes"), " "],
                            }),
                            (0, _.jsxs)("div", {
                              className: _().ActionText,
                              children: [
                                " ",
                                (0, _._)("#GotSteam_Yes_Play"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, _.jsxs)("a", {
                          href: _.strDownloadSteamUrl,
                          onClick: _,
                          className: _().Button,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().AnswerText,
                              children: [" ", (0, _._)("#GotSteam_No"), " "],
                            }),
                            (0, _.jsxs)("div", {
                              className: _().ActionText,
                              children: [
                                " ",
                                (0, _._)("#GotSteam_No_Download"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().Footer,
                      children: [
                        (0, _.jsx)(_.Qte, {
                          className: _().Logo,
                        }),
                        (0, _._)("#GotSteam_Blurb"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = "", _ = null) {
          return _.InstrumentLink(_, _, _);
        }
        function _(_, _, _) {
          const _ = (0, _._)();
          return _.useMemo(() => {
            const _ = (0, _._)(_).toLowerCase(),
              _ = (0, _._)(_._.COMMUNITY_BASE_URL).toLowerCase(),
              _ = (0, _._)(_._.STORE_BASE_URL).toLowerCase();
            return _ === _ || _ === _ ? (0, _._)(_, _, _, _) : _;
          }, [_, _, _, _]);
        }
        function _(_, _, _ = null) {
          const _ = _(_, _),
            _ = _ ? _._.GetCuratorClanIDParam(_) : null;
          return _._.AddNavParamToURL(_, _, _);
        }
        function _(_, _, _, _ = null) {
          const _ = _(_, _, _);
          if (_ && Object.keys(_).length > 0)
            try {
              const _ = new URL((0, _._)(_)),
                _ = new URLSearchParams(_.search);
              return (
                Object.entries(_).forEach(([_, _]) => {
                  _.set(_, encodeURIComponent(_ ?? ""));
                }),
                _.origin + _.pathname + "?" + _.toString() + _.hash
              );
            } catch {}
          return _;
        }
        function _(_, _ = null) {
          return _?.domain ? _.GetLinkParam(_, _) : _._.SNR;
        }
        function _(_, _ = "", _ = null) {
          const _ = `${Config.STORE_BASE_URL}app/${_}`;
          return _(_, _, _);
        }
        function _(_, _ = "") {
          const _ = `${Config.STORE_BASE_URL}dlc/${_}`;
          return _(_, _);
        }
        class _ {
          static sm_strDomain;
          static sm_strController;
          static sm_strMethod;
          static sm_strSubmethod;
          static sm_strComputedLinkPrefix;
          static SetNavEventParams(_, _, _ = null, _ = null) {
            (_.sm_strDomain = _),
              (_.sm_strController = _),
              (_.sm_strMethod = _),
              (_.sm_strSubmethod = _),
              (_.sm_strComputedLinkPrefix = null);
          }
          static GetDefaultParams() {
            let _ = {
              domain: _.sm_strDomain,
              controller: _.sm_strController,
            };
            return (
              _.sm_strMethod && (_.method = _.sm_strMethod),
              _.sm_strSubmethod && (_.submethod = _.sm_strSubmethod),
              _
            );
          }
          static InstrumentLink(_, _, _ = null) {
            const _ = _.GetLinkParam(_, _),
              _ = typeof _ != "string" ? _._.GetCuratorClanIDParam(_) : null;
            return _._.AddNavParamToURL(_, _, _);
          }
          static GetLinkParam(_, _ = null) {
            let _;
            if (typeof _ != "string") {
              if (_.domain) return _._.GetSNRLinkParam(_, _);
              _ = _.feature || "";
            }
            let _;
            if (!_.sm_strComputedLinkPrefix && !_.ComputeStaticLinkPrefix())
              return null;
            _ = _.sm_strComputedLinkPrefix;
            let _ = _._.EncodeEventComponent(_);
            return _ && ((_ += "_" + _), _ && (_ += "_" + _)), _;
          }
          static ComputeStaticLinkPrefix() {
            return _.sm_strDomain
              ? ((_.sm_strComputedLinkPrefix = _._.ComputeLinkPrefix(
                  _.sm_strDomain,
                  _.sm_strController,
                  _.sm_strMethod,
                  _.sm_strSubmethod,
                )),
                !0)
              : ((0, _._)(
                  !1,
                  "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
                ),
                !1);
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_[(_.AnyController = 0)] = "AnyController"),
            (_[(_.XboxController = 1)] = "XboxController"),
            (_[(_.Ps3Controller = 2)] = "Ps3Controller"),
            (_[(_.Ps4Controller = 3)] = "Ps4Controller"),
            (_[(_.Ps5Controller = 4)] = "Ps5Controller"),
            (_[(_.SwitchController = 5)] = "SwitchController"),
            (_[(_.SteamController = 6)] = "SteamController"),
            (_[(_.SteamDeckNeptune = 7)] = "SteamDeckNeptune"),
            (_[(_.SteamDeckGalileo = 8)] = "SteamDeckGalileo"),
            (_[(_.Switch2Controller = 9)] = "Switch2Controller"),
            (_[(_.SteamControllerTriton = 10)] = "SteamControllerTriton"),
            _
          ))(_ || {});
        const _ = {
          any_controller: 0,
          xbox_controller: 1,
          ps3_controller: 2,
          ps4_controller: 3,
          ps5_controller: 4,
          switch_controller: 5,
          steam_controller: 6,
          steam_deck_neptune: 7,
          steam_deck_galileo: 8,
          switch2_controller: 9,
          steam_controller_triton: 10,
        };
        function _() {
          const _ = [..._._.excluded_content_descriptors];
          return {
            bLoaded: !1,
            setWishlist: new Set(),
            rgWishlistInOrder: [],
            setOwnedApps: new Set(),
            setOwnedPackages: new Set(),
            setExcludedTagIDs: new Set(),
            rgExcludedTagIDsSorted: [],
            setExcludedContentDescriptors: new Set(_),
            rgExcludedContentDescriptors: _,
            setRecommendedApps: new Set(),
            rgRecommendedAppsInOrder: [],
            mapIgnoredApps: new Map(),
            mapIgnoredPackages: new Map(),
            setCuratorsFollowed: new Set(),
            rgCuratorsFollowed: [],
            setCuratorsIgnored: new Set(),
            mapRecommendingCuratorsForApp: new Map(),
            setPreferredPlatforms: new Set(),
            setHardwareUsed: new Set(),
            rgRecommendedTags: [],
            ePrimaryLanguage: _.xPp,
            setSecondaryLanguages: new Set(),
            bShowFilteredUserReviewScores: !0,
            bAllowAppImpressions: !1,
          };
        }
        let _;
        function _() {
          return (_ ??= _());
        }
        function _() {
          return !!(0, _._)("wants_mature_content");
        }
        function _(_) {
          const _ = _();
          if (
            ((_.bLoaded = !0),
            _.rgCurators &&
              ((_.rgCuratorsFollowed = Object.keys(_.rgCurators).map(Number)),
              (_.setCuratorsFollowed = new Set(_.rgCuratorsFollowed))),
            _.rgCuratorsIgnored &&
              (_.setCuratorsIgnored = new Set(_.rgCuratorsIgnored.map(Number))),
            _.rgWishlist &&
              ((_.rgWishlistInOrder = _.rgWishlist.map(Number)),
              (_.setWishlist = new Set(_.rgWishlistInOrder))),
            _.rgOwnedApps &&
              (_.setOwnedApps = new Set(_.rgOwnedApps.map(Number))),
            _.rgOwnedPackages &&
              (_.setOwnedPackages = new Set(_.rgOwnedPackages.map(Number))),
            _.rgIgnoredApps && (_.mapIgnoredApps = _(_.rgIgnoredApps)),
            _.rgIgnoredPackages &&
              (_.mapIgnoredPackages = _(_.rgIgnoredPackages)),
            _.rgExcludedTags &&
              ((_.setExcludedTagIDs = new Set(
                _.rgExcludedTags.map((_) => Number(_.tagid)),
              )),
              (_.rgExcludedTagIDsSorted = Array.from(
                _.setExcludedTagIDs,
              ).sort())),
            _()
              ? ((_.setExcludedContentDescriptors = new Set()),
                (_.rgExcludedContentDescriptors = []))
              : _.rgExcludedContentDescriptorIDs &&
                ((_.rgExcludedContentDescriptors =
                  _.rgExcludedContentDescriptorIDs.map((_) => Number(_))),
                (_.setExcludedContentDescriptors = new Set(
                  _.rgExcludedContentDescriptors,
                ))),
            _.rgRecommendedApps &&
              ((_.rgRecommendedAppsInOrder = _.rgRecommendedApps.map(Number)),
              (_.setRecommendedApps = new Set(_.rgRecommendedAppsInOrder))),
            _.rgPreferredPlatforms &&
              (_.setPreferredPlatforms = new Set(_.rgPreferredPlatforms)),
            _.bAllowAppImpressions &&
              (_.bAllowAppImpressions = _.bAllowAppImpressions),
            (_.bShowFilteredUserReviewScores =
              !!_.bShowFilteredUserReviewScores),
            _.rgPrimaryLanguage !== void 0 &&
              (_.ePrimaryLanguage = _.rgPrimaryLanguage),
            _.rgSecondaryLanguages &&
              (_.setSecondaryLanguages = new Set(_.rgSecondaryLanguages)),
            _.rgRecommendedTags &&
              (_.rgRecommendedTags = _.rgRecommendedTags.map((_) => _.tagid)),
            _.rgCurations)
          )
            for (const _ of Object.keys(_.rgCurations)) {
              const _ = [];
              for (const _ of Object.keys(_.rgCurations[_]))
                _.rgCurations[_][_] === _._._ && _.push(Number(_));
              _.mapRecommendingCuratorsForApp.set(Number(_), _);
            }
          if (_.rgHardwareUsed)
            for (const _ of _.rgHardwareUsed) {
              const _ = _[_];
              _ !== void 0 && _.setHardwareUsed.add(_);
            }
          return _;
        }
        function _(_) {
          const _ = new Map();
          for (const [_, _] of Object.entries(_)) {
            const _ = Number(_);
            _ && _.set(_, Number(_));
          }
          return _;
        }
        const _ = "dynamicuserdata";
        function _(_) {
          return [_, _];
        }
        function _(_) {
          return _?.[0] == _;
        }
        async function _(_) {
          try {
            const _ = await fetch(
              (0, _._)(_._.STORE_BASE_URL, _, _._.country_code),
              {
                credentials: "include",
              },
            );
            if (!_._) throw new Error(`Server returned ${_.status}`);
            return _(await _.json());
          } catch (_) {
            return (
              console.warn("LoadDynamicUserData", _),
              (0, _._)().ReportError(new Error(`LoadDynamicUserData ${_}`), {
                bIncludeMessageInIdentifier: !0,
              }),
              _()
            );
          }
        }
        function _() {
          const _ = _._.accountid;
          return {
            queryKey: _(_),
            queryFn: () => _(_),
            staleTime: 1 / 0,
            gcTime: 1 / 0,
            retry: !1,
            enabled: !0,
          };
        }
        function _() {
          return (0, _._)(_());
        }
        function _(_) {
          return _.getQueryData(_(_._.accountid)) ?? _();
        }
        async function _(_) {
          return _.fetchQuery(_());
        }
        function _(_, _) {
          _.setQueryData(_(_._.accountid), (_) => {
            if (!_) return;
            const _ = _(_);
            return _
              ? {
                  ..._,
                  ..._,
                }
              : _;
          });
        }
        class _ {
          m_queryClient = _._;
          m_boxCacheVersion = _._.box(0);
          m_bInitialized = !1;
          m_boxAjaxInFlight = _._.box(!1);
          LazyInit() {
            this.m_bInitialized ||
              ((this.m_bInitialized = !0),
              this.m_queryClient.getQueryCache().subscribe((_) => {
                (_?.type != "added" &&
                  _?.type != "updated" &&
                  _?.type != "removed") ||
                  (_(_.query?.queryKey) &&
                    (0, _._)(() =>
                      this.m_boxCacheVersion.set(
                        this.m_boxCacheVersion.get() + 1,
                      ),
                    ));
              }));
          }
          ReadData() {
            return (
              this.LazyInit(),
              this.m_boxCacheVersion.get(),
              _(this.m_queryClient)
            );
          }
          BIsLoaded() {
            return this.ReadData().bLoaded;
          }
          GetWishlistGamesInUserOrder() {
            return this.ReadData().rgWishlistInOrder;
          }
          GetRecommendedGamesInIRPriorityOrder() {
            return this.ReadData().rgRecommendedAppsInOrder;
          }
          GetFollowedCuratorCount() {
            return this.ReadData().setCuratorsFollowed.size;
          }
          GetFollowedCuratorsAccountID() {
            return this.ReadData().rgCuratorsFollowed;
          }
          BIsFollowingCurator(_) {
            return this.ReadData().setCuratorsFollowed.has(_(_));
          }
          BIsIgnoringCurator(_) {
            return this.ReadData().setCuratorsIgnored.has(_(_));
          }
          get ExcludedContentDescriptor() {
            return this.ReadData().rgExcludedContentDescriptors;
          }
          BExcludeTagIDs(_) {
            const _ = this.ReadData().setExcludedTagIDs;
            return _.some((_) => _.has(_));
          }
          GetExcludedTagsSortedByID() {
            return this.ReadData().rgExcludedTagIDsSorted;
          }
          BExcludesContentDescriptor(_) {
            const _ = this.ReadData().setExcludedContentDescriptors;
            return _.some((_) => _.has(_));
          }
          BIncludesContentDescriptor(_) {
            return !this.ReadData().setExcludedContentDescriptors.has(_);
          }
          BIsGameWishlisted(_) {
            return this.ReadData().setWishlist.has(Number(_));
          }
          BIsGameRecommended(_) {
            return this.ReadData().setRecommendedApps.has(Number(_));
          }
          BIsGameIgnored(_) {
            return !!_ && this.ReadData().mapIgnoredApps.has(Number(_));
          }
          BIsPackageIgnored(_) {
            return !!_ && this.ReadData().mapIgnoredPackages.has(Number(_));
          }
          BIsGameOwned(_) {
            return !!_ && this.ReadData().setOwnedApps.has(Number(_));
          }
          BIsStoreItemOwned(_) {
            switch (_.GetStoreItemType()) {
              case _._._:
                if (this.BIsGameOwned(_.GetAppID())) return !0;
                break;
              case _._._:
              case _._._:
                if (_.GetIncludedAppIDs().every((_) => this.BIsGameOwned(_)))
                  return !0;
                break;
            }
            return !1;
          }
          BOwnsApp(_) {
            return !!_ && this.ReadData().setOwnedApps.has(Number(_));
          }
          BOwnsPackage(_) {
            return this.ReadData().setOwnedPackages.has(Number(_));
          }
          BHasUsedHardware(_) {
            return this.ReadData().setHardwareUsed.has(_);
          }
          BShowFilteredUserReviewScores() {
            return this.ReadData().bShowFilteredUserReviewScores;
          }
          BAppImpressionsAllowed() {
            return this.ReadData().bAllowAppImpressions;
          }
          GetPrimaryLanguage() {
            return this.ReadData().ePrimaryLanguage;
          }
          GetSecondaryLanguages() {
            return this.ReadData().setSecondaryLanguages;
          }
          BIsAnyLanguageEnabled(_) {
            const { ePrimaryLanguage: _, setSecondaryLanguages: _ } =
              this.ReadData();
            return _ == null || _ <= _.xPp || _.bP9 <= _
              ? !0
              : _.some((_) => _ === _ || _.has(_));
          }
          GetRecommendedTags() {
            return this.ReadData().rgRecommendedTags;
          }
          BIsAjaxInFlight() {
            return this.m_boxAjaxInFlight.get();
          }
          BIsAppRecommendedBySomeCurator(_) {
            return this.ReadData().mapRecommendingCuratorsForApp.has(Number(_));
          }
          GetRecommendingCuratorsForApp(_) {
            return this.ReadData().mapRecommendingCuratorsForApp.get(Number(_));
          }
          BHasPlatformPreferenceSet() {
            const _ = this.ReadData().setPreferredPlatforms.size;
            return _ > 0 && _ < 3;
          }
          BIsPreferredPlatform(_) {
            return this.ReadData().setPreferredPlatforms.has(_);
          }
          async HintLoad() {
            return this.LazyInit(), await _(this.m_queryClient), this;
          }
          async UpdateFollowOrIgnoreCurator(_, _, _) {
            this.LazyInit();
            let _ =
              _._.STORE_BASE_URL +
              "curators/" +
              (_ ? "ajaxfollow/" : "ajaxignore/");
            const _ = _.GetAccountID(),
              _ = new FormData();
            _.append("clanid", "" + _),
              _.append("sessionid", (0, _._)()),
              _.append(_ ? "follow" : "ignore", _ ? "1" : "0");
            let _ = await _().post(_, _, {
              withCredentials: !0,
            });
            return (
              _ &&
                _.status == 200 &&
                (this.InvalidateCache(),
                _(this.m_queryClient, (_) => {
                  const _ = new Set(
                    _ ? _.setCuratorsFollowed : _.setCuratorsIgnored,
                  );
                  return (
                    _ ? _.add(_) : _.delete(_),
                    _
                      ? {
                          setCuratorsFollowed: _,
                          rgCuratorsFollowed: Array.from(_),
                        }
                      : {
                          setCuratorsIgnored: _,
                        }
                  );
                })),
              _.data
            );
          }
          async UpdateAppIgnore(_, _, _, _ = _._._) {
            this.LazyInit();
            let _ = _._.STORE_BASE_URL + "recommended/ignorerecommendation";
            const _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("appid", "" + _),
              _.append("remove", _ ? "0" : "1"),
              _.append("snr", _),
              _.append("ignore_reason", "" + _);
            try {
              (0, _._)(() => this.m_boxAjaxInFlight.set(!0));
              let _ = await _().post(_, _, {
                withCredentials: !0,
              });
              return (
                _ &&
                  _.status == 200 &&
                  (this.InvalidateCache(),
                  _(this.m_queryClient, (_) => {
                    const _ = new Map(_.mapIgnoredApps);
                    return (
                      _ ? _.set(Number(_), _) : _.delete(Number(_)),
                      {
                        mapIgnoredApps: _,
                      }
                    );
                  })),
                _.data
              );
            } catch (_) {
              let _ = (0, _._)(_);
              console.error("UpdateAppIgnore", _.strErrorMsg, _);
            } finally {
              (0, _._)(() => this.m_boxAjaxInFlight.set(!1));
            }
            return {
              success: _._,
            };
          }
          async AddToCart(_, _, _, _, _, _, _) {
            if (
              typeof window.g_bUseNewCartAPI < "u" &&
              window.g_bUseNewCartAPI &&
              typeof window.AddItemToCart == "function"
            ) {
              let _;
              return (
                _ && (_ = _._.ParseSNR(_)), window.AddItemToCart(_, _, _), !0
              );
            }
            const _ = new FormData();
            _.append("action", "add_to_cart"),
              _
                ? _.append("bundleid", _.toString())
                : _.append("subid", "" + _),
              _ && _.append("snr", _),
              _.append("sessionid", (0, _._)()),
              _.append("quantity", "1");
            const _ = (0, _._)(_);
            _.preventDefault();
            try {
              await _().post(_, _, {
                withCredentials: !0,
              }),
                this.InvalidateCache(),
                _?.fnSetURL ? _.fnSetURL(_) : (_.location.href = _);
            } catch (_) {
              return console.log("HandleOnAddToCart", _), !1;
            }
            return !0;
          }
          InvalidateCache() {
            (0, _._)();
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              _.s_globalSingletonStore || (_.s_globalSingletonStore = new _()),
              _.s_globalSingletonStore
            );
          }
          static BConfirmedAdultContentAgeGate() {
            return _();
          }
          constructor() {}
        }
        function _(_) {
          return typeof _ == "object" && "GetAccountID" in _
            ? _.GetAccountID()
            : Number(_);
        }
        function _() {
          const { isPending: _ } = _();
          return [_, _.Get()];
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { children: _, ..._ } = _,
            _ = _.useRef(null);
          return (0, _.jsx)(_._, {
            nodeRef: _,
            ..._,
            children: _.children(_),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { size: _, color: _, trackColor: _ } = _,
            _ = {
              borderColor: _,
              borderLeftColor: _,
            };
          if (typeof _ == "number") {
            const _ = `${_}px`;
            (_.width = _),
              (_.height = _),
              (_.minHeight = _),
              (_.minWidth = _),
              (_.borderWidth = `${_ / 10}px`);
          }
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _.Loading,
              _ == "small" && _.Small,
              (_ == "medium" || !_) && _.Medium,
              _ == "large" && _.Large,
            ),
            style: _,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({});
        function _(_) {
          const { children: _, ..._ } = _;
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          return _.useContext(_);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _() {
          return window.innerWidth < parseInt(_().strMaxMobileWidth);
        }
        function _() {
          const _ = (0, _._)();
          return (
            _.useEffect(
              () => (
                window.addEventListener("resize", _),
                () => window.removeEventListener("resize", _)
              ),
              [_],
            ),
            window.innerWidth < parseInt(_().strMaxMobileWidth)
          );
        }
        function _() {
          const _ = useForceUpdate();
          return (
            React.useEffect(
              () => (
                window.addEventListener("resize", _),
                () => window.removeEventListener("resize", _)
              ),
              [_],
            ),
            window.innerWidth < parseInt(styles.strMaxResponsiveWidth)
          );
        }
      },
      chunkid: (module) => {
        module.exports = {
          DevSummaryCtn: "_34fexyvsk4ZCS1pkTxhzel",
          LargeFormat: "_1Gpg0Ssqz-6tv_-RNy2RNp",
          CreatorDescCtn: "_1RKG_vMqjYBgcXZH6CoS3U",
          SmallFormat: "_2uzyd3CZPlDXNcII3Zl5MV",
          MinimalDisplay: "_266wPb9e0vcATAZmthTQaq",
          DevSummaryWidgetCtn: "_3-CiOktJBVfuAsdgT4OW_f",
          DevSummaryContent: "_2jbedard-PdnyO3XpMLNPg",
          DevSummaryBackground: "_3F7LyeepqJvGpcXjroux4j",
          AvatarLink: "Y9lYkfS_6GRwnSuFBgyQz",
          Avatar: "_3x-VF5_m6i66QQrJJ-WgoN",
          CreatorTitleCtn: "_141X0qDDTpudXQuTa1cYJG",
          CreatorNameName: "_3F6BGfg9HSsjiOFeHmiuOZ",
          CreatorTagline: "_3RKG3sfzCT1ven1_L1lBW1",
          Title: "AW22-NNnUJaOiqzrVG1AX",
          Followers: "_3NzMkIJWeFg7rV--RVOM_g",
          FollowerCount: "B_sn9jeeUYTEEio2U3kqO",
          SocialFollowersCtn: "_1e-4cFtf9LKQ3rhJWKcr2h",
          FollowBtnCtn: "_1C9_c4mNpE6FRz-3PWv9sd",
          FollowButton: "nDye27oueac7bocDYPZ0V",
          FollowBtnText: "EZqO5MdZoyMOQJ38Sj0iH",
          SocialContainer: "_258mBlkhbYBiZXTs4qrAP1",
          SocialImg: "_1sKMwuRIbbgs9Z7qLAlsib",
          SocialLink: "_3FZ-m-aObV2XxGykp5A1pt",
          CuratorHoverCtn: "_3GV3_URzwPB-8VZj0tMins",
          MembersListLink: "YN9wF_mOsT6piqNqvyyNz",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          headerCapsuleImgWidth: "460",
          headerCapsuleImgHeight: "215",
          mainCapsuleImgWidth: "616",
          mainCapsuleImgHeight: "353",
          libraryAssetImgWidth: "300",
          libraryAssetImgHeight: "450",
          heroCapsuleImgWidth: "374",
          heroCapsuleImgHeight: "448",
          StoreSaleWidgetContainer: "t75Je5tr-0U-BmJ9zl5ia",
          LibraryAssetExpandedDisplay: "_39Jz5Qi6nhOd7XvaNnbSoR",
          SaleItemDefaultCapsuleDisplay: "_2kFm1akTi_PvgXVMGuiGXo",
          BundleContentPreview: "_4fgFjJosEpAnm3TuEhO4q",
          PreviewCtn: "_3y21gqoSEnLQ-LQl97kRb8",
          MarketingMessage: "_3IdTKNXhXzkVoep4-5yZuN",
          StoreSaleWidgetRight: "_3aTPAkD_nC4hFYjSSUGdIx",
          StoreSaleWidgetHalfLeft: "_2OmLxbQ8PCPJL9p8YRyEKP",
          StoreSaleWidgetTitle: "w75CJy5_YgzbJm91xnOQK",
          StoreSaleWidgetLibraryAssetExtendedTop: "_3R3jAV3aZuBYZUeAW1nD7h",
          StoreSaleWidgetLeft: "_1ERk_jpTDmAx8rJn5bJNLR",
          StoreSaleDiscountBox: "_1kSDZm0Cg9anUkTfWFtwdN",
          PurchaseOption: "z_iiAWZceRwDjLt3ZisRU",
          StoreSaleWidgetImage: "x_kq8V9RpcQ0NN1peDKg7",
          CapsuleMicroTrailer: "_1ZsPp8DWmkC4OPKARDotIS",
          CapsulePlatform: "_3vk4H4zJk_wDD6oaJrsjuj",
          StoreSaleWidgetContents: "_1nfJPebnVfFpujoINIrTwx",
          StoreMetaDataCtn: "_28XzNZpa2zm6dfU_Hl1aoF",
          StoreSaleItemRelease: "dY0SjUwvxyZTq7knLEKEc",
          StoreSaleItemDev: "_3B7TyRytxk7VNgUkEksk_g",
          StoreSaleItemReview: "_2ZlC6bcWXRrbEH_H3ikW_v",
          TitleCtn: "_2hY5KQtdBm61wdeNXehgrm",
          StoreSaleWidgetCrossCenterRight: "_3oOCqm5QnRABrDXfNWZCiV",
          CapsuleBottomBar: "_1_ehE8jTqsTDnx5E7Sqjy7",
          PlayNowButton: "_14BfXA3_1WV39l7v3kD_s_",
          AddToLibraryButton: "_1ByCcqMjsaSpyZw0HZlDyi",
          StoreActionWidgetContainer: "_1KKmxZOJSplMIyYiT9qVp9",
          StoreSalePriceWidgetContainer: "_1so1AGD_m_uIBFDEc1ImOu",
          StoreSaleWidgetBgTint: "_1RmkMAMYEGZOaFv3k49gfc",
          LibraryFallbackAssetImageContainer: "_2qZSepj4cX-WLkospQs0Ep",
          FallbackBackground: "-V2UzXJLqza_XoSPI7wz6",
          SaleTagBlockCtn: "_1hS3ayvVLxIJlkxUDEBACP",
          StoreSaleWidgetCenter: "_1kHYilvb5rc5aw0OmhmfNw",
          StoreSaleLibraryAssetWidgetRight: "_101xD6rIYm8X_jp483Kshs",
          StoreSaleWidgetReleaseAndTags: "_1N4IfOUIwuiYhgqyiJ_ilZ",
          Bundle: "_292AerR2EXt-7RVrZp7E8K",
          WidgetReleaseDateAndPlatformCtn: "_1OUpla9y9ki3n--MdoUpSs",
          SaleItemBrowserRow: "_3_-EEQpFNke34pzfmip5yh",
          StoreSaleWidgetRelease: "_3MahqhNDkJzVX6vf3ysCbc",
          StoreSaleWidgetTags: "_38RGrHCxetbJdFlekFhXMJ",
          AppTag: "_38998HcikvEZtZcJXwppxS",
          StoreSaleWidgetShortDesc: "_2VdeXQqeuqu2i4yjprISF-",
          LargeText: "x5UGgerCCNFPP0IR7S-PC",
          TagTitle: "_1Tifv9nWMUHpqL-5PdjhNO",
          TagBox: "_3vCIFKfpJCOL-zsUEUiAtt",
          Tag: "_22IRYeqPYSxG2vqNmALNsh",
          Categories: "UUvYZ6JvzIAlcFDV4wF7j",
          SaleItemFullCapsuleDisplay: "_1b7dbi80Ody0jI0vYb_7bG",
          Category: "_23oBdrL9Cnh9x11yw8hmaN",
          CategoryIcon: "_2guay37SfoNrroBIe0UbYH",
          ReviewScores: "_3uIw-iqrc6AKEcMLki94nj",
          StoreSaleBroadcastWidgetRight: "_1xIPeza3-7471L4fvQRWBQ",
          StoreSalePriceActionWidgetContainer: "_20HgIIui8JHLBf62qfz5Gr",
          Action: "_3-6Yf-FWOYdz69902FtDwy",
          Discounted: "w775QgXXCtmtG8yzEp-2u",
          WishList: "_2mKhatcQBAj0oKWP1V_tFV",
          StoreSalePriceBox: "kauOU9QnW8Fs0QpxzTBph",
          SingleLineMode: "_1Ph5iLt6Bh7woGXf5RnIPB",
          StoreSaleDiscountedPriceCtn: "_2KBGD_hHRCfMXm-DDYRbQX",
          StoreSaleNewItem: "kT9bBl6aBZQ-0xiRlMWzc",
          StoreOriginalPrice: "_1odBXcjq8-Q8SFXViJa7c6",
          PrePurchase: "_1QuRa-ebvBejdSjmUkqX5v",
          NewItem: "_1ScAL4Y0dGHeXycrpJYkAC",
          PurchaseOptionDetails: "t7tIxWgiQRt2p2A979EUU",
          InGameHover: "_yRMvMttBTHiO3_SMH6Or",
          StoreSalePrepurchaseLabel: "_2mG_q95stW67uyZmLXcO8y",
          SingleLineOriginalPrice: "_1jRZOgPPLTjiXtsrX_iB1O",
          PrePurchaseBesidePrice: "_1jh1dcHkieLMN3eGCeHg_E",
          YourPriceLabel: "_1RGKRbbcPP2ImptkZ3LP6P",
          BaseDiscount: "_3BJdajInVqrAsGwPFUAshC",
          StoreSalePriceButton: "_PS7WNXgzr2qOl4HOjEIp",
          OuterCapsuleContainer: "_1omVjlZWALGX34pum8v7SF",
          BottomBarPriceInfo: "_2ogs95OHz8bo5FTfppAZiJ",
          TrailerActive: "_13__6f3T57ykYT09Z7etmf",
          CapsuleContainer: "_1kCTkXxE8CbUnnhSjsL-Kb",
          Linked: "_2uiBcpls1KbtGPBEPSQyrA",
          EventRow: "_3Ld-x7gljlKqiGE3WBsENh",
          BottomCreatorRow: "_3HMU8TsxAklmNPNyGoeAZU",
          CreatorLogo: "V0GgcGqSWSpKmV8RTzFU0",
          CreatorName: "dxHZGdYWTxGXbxaQiceKZ",
          AddToCartButton: "_1LJo1FYFdLFJE1u-PJcyxN",
          AddToWishlistButton: "_1kZYzTTdH8XUXsYP9lgb-h",
          HeaderCapsuleImageContainer: "_1W35jfl6uiYKf7Iwt3NNEz",
          MainCapsuleImageContainer: "_3ghuGooDVCn0gUuocEnV8B",
          HeroCapsuleImageContainer: "S9g2oScKWNbE4BrExvI19",
          DiscoveryQueueCtn: "_1PaQQXx0817RqTxahOzbZT",
          NoShadow: "_3xAYvMZ9m_TYNbwjyDr3d4",
          VerticalCapsule: "IR8muj8HL9MD7GoRBp7LZ",
          ForceLibrarySizing: "_1hSAcJwcSL1bbi-w5C5fjv",
          CapsuleImage: "_2xiNqpMzhZh4tVcBPD6z1W",
          LinkCapsuleImage: "_1AFjCLdN5rlqKicNNN4qJR",
          CapsuleParentInfo: "ZsrUviKbsm6zNlc92WYd9",
          ParentType: "-oMlD-aBQ0XixJxkc0cy5",
          Banner: "_2qnY9VZwgA2qx1ydmUlsUm",
          Blue: "_1f8WQvpQv-I5pqCmscp6iV",
          EarlyAccessGradient: "_1Y1oAEI6qR7aE22ePmy-8S",
          LinesImg: "_10MiXmZw9nyJIMVqHTS3FH",
          CapsuleDecorators: "_1Ss9w5OINDsfSBbOR7VWp9",
          BundleContentsCtnTransition: "_1O1d5Wj6hmDvM1KQDSEWBh",
          Expanding: "_2B71vqrTAumZWP2eCwqPfY",
          Expanded: "_1UxAPCy6v0_Fm-iAXFJMog",
          Collapsing: "_2TTiL0BkOdhiWpE6m0k6j9",
          BundleContentsCtn: "_2Fqilki7o63IJqfaEIIBpa",
          BundleContentsTitle: "_3TirrWSdMt2tPeAOOY3D_-",
          BundleShowButton: "_2W1zHZrECwIsSOb8OillGT",
          ShowContentsButton: "_3h99aa2siCkcjDn4G8vKQY",
          ShowContentsSection: "_4wRhe4a4sFJolBfzgS3Oi",
          BundleContentItem: "OhPohJ5GY4yteVD6yWZA-",
          StoreSaleWidgetOuterContainer: "_1YNtl1bfteFkaCFYHhtUMf",
          ContentsCount: "PQWG8XlLSUl9LC-7e3cPB",
          PreviewItem: "_3vQHsd2T2R-6xZB6sWSPRc",
          DeckCompatIcon: "_2nXaXW4Ps268qjxYMblw3e",
          BundleTag: "-D5ypo5W6aLJPMR1_L0y_",
          PreviewImg: "_3Z8MJxQ_Ji953C5R6oQdgY",
          DemoLayoutPopup: "tDBuR3ivkJbl0t9E_ssXD",
          FreeWeekendBar: "_3zm9xR6YDSxfquPOjhHoRc",
          FreeWeekendLabel: "_2Mqx0PhPACBhZxd70rTNo_",
          RecommendationReason: "_19AVGu5eqFoeoiqvydT0Tv",
          LocalizationSpan: "_8ZbRxdp7AJCWfdcbMmcye",
          CapsuleName: "_16nzXvpmoPX2AHcWtWHQsU",
          DiscountIconCtn: "_12oL_Na-4ZnfDriQ80BEBc",
          MaxActionButtonWidth: "_1AiAr0lqTfJuoAry1CmxyW",
          BackgroundAnimation: "_1CIMWCeT1o82vKuoVFS0Or",
          "ItemFocusAnim-darkerGrey-nocolor": "QmvtbjNkXhoFsHYRkJ8pk",
          "ItemFocusAnim-darkerGrey": "_2muPTTrVake-UfXJizQg6g",
          "ItemFocusAnim-darkGreySettings": "_15cm3kzIBv3fn2fxYuqTJR",
          "ItemFocusAnim-darkGrey": "_3WidOXfqJtMrQ7t9WsTNx",
          "ItemFocusAnim-grey": "_3TjvvuiDzTihqHMxswC7z_",
          "ItemFocusAnim-translucent-white-10": "_3u6erDX_vfSreCNiukX2S",
          "ItemFocusAnim-translucent-white-20": "_1pBe5-hUwVCsRu0ZWAS7NK",
          "ItemFocusAnimBorder-darkGrey": "_11_f57sto7UJFfYAgmuQ8_",
          "ItemFocusAnim-green": "_1pwlLApsSR1PWl1ys4T9Ka",
          focusAnimation: "XOkNr-sTpt-rrz1iaVQv4",
          hoverAnimation: "_2A0UXZtbRj2Hc7vKFjV9xl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          GameHoverCapsuleCtn: "_1isLDN8xbFyCDG5jtMO7J3",
          Loading: "_6exjsiWCk6IgWiQenqfQH",
          UseHidingBottomHalf: "_3707obuB-7wD8GDUYRaLH4",
          TrailerAnchorStoreLink: "_1VNyOcfe2cBKY52VedXjyc",
          TrailerCtn: "_3ANIAZhTtXLvORlbv-Du-N",
          FullDivImage: "JIMdRVl5GQwMrWUt3A6RH",
          Transparent: "_2pVFEfWO0oGPOwTylls-tE",
          Midline: "_3qz5n49jfXUrhCnqkmibgt",
          Price: "_3mEkhLPOOR45uhGnhsHkao",
          CapsuleImageAnchorPoint: "Ea3rwozDuOg8FLc8b7n2c",
          CapsuleImageCtn: "_3EW-HHeEwhOW7IbL8k5VnZ",
          WithCornerShine: "_30TPn4BD1o-X0WcWYvJ-gF",
          Opening: "LiQedMzPoDBtg4XmNlHSU",
          Open: "_2HPVMueZXbMmvgW8C6iOw7",
          DemoButton: "_2Mu1VwOBzB0kLcDCRbJD6w",
          WishlistButton: "_3FAid_cwwxW8-9Sp6pSPqS",
          ShowInGamepadUI: "_2f6Nut1kQFb4WnCmz4uXDG",
          WishlistButtonText: "_2GqXfP0dBAJl9ozuBV3Jqh",
          WishlistLoadingText: "_2k23LU1oBxEHe-_Qff-1k3",
          WishlistButtonNotTop: "_3W_yknADVFtPgqx9Wh2ayW",
          FollowGameButtonNotTop: "iNS5yHAxKgg4H1nukkyxN",
          BottomShelf: "_3QqbGLgtSpReBWRaPB5GnI",
          BottomShelfOffScreen: "_3ncpfgFYDbcm9Iv5ca27Y0",
          ShortDescription: "APpfln1FqbXnR9klsbeM_",
          TextContent: "_3WlfumeMCR40WR-uBdg3Gx",
          GameTitle: "_38GHf0V2kn6MNNjQF7QajG",
          TagRow: "_1keH60e_I90mkEgfpsw88B",
          Tags: "_1GfeALEEHA6uNXnvOXvTSW",
          Tag: "_2bi1NxjYgiXf0VZFoYAKWE",
          PlatformDisplay: "_1Y5yJHywrdBJlgg1JbWnM5",
          ReviewsAndRelease: "_39DFdWNzMu5Bpkg0MYRE__",
          ReleaseDate: "_3b8-ojNFf-CIMu9sOMJhM6",
          ReleasePrefix: "_1mRD6kBN_rXYh69QwQx9CJ",
          ReviewScore: "_6ctF1zf2MKZRofZdWQXqG",
          ReviewScoreHeader: "_3RQ_AUZpM18Y9IO5ufZ5X6",
          ReviewScoreCount: "yYag_VAd2NXLTrOBd-6mu",
          ReviewScoreLanguage: "_3-FV36ByKDMBDoEKOpnY9s",
          ReviewScoreValue: "XwgGstGDpIVOjAfg3pK1e",
          ReviewScoreDivider: "EbDXdng1ktTe_DvwN32Tv",
          ReviewScoreNone: "_j-FE6iveSoKTCgGAx_NK",
          ReviewScoreLow: "eb3U2C9mNpcsxnVO-QAvh",
          ReviewScoreMixed: "_33l5fpEoTZORkBTRCg4adM",
          ReviewScoreHigh: "_2Mc-wW0wAsgehC46aTwBVa",
          ReviewScorePercentage: "_2jmj3hWBpHbR2XUcZaAXFp",
          ReviewScoreLabel: "uEsfJ0VAuX37ItihZkK2J",
          GameHoverCreatorFollowButtonCtn: "_1RMWITT8PsJOgR4SoIR3Sw",
          BackgroundAnimation: "_2-NF7UzSGK3WLmqugAW3EM",
          "ItemFocusAnim-darkerGrey-nocolor": "bfQTK-Cop8MYUAa9j7rQb",
          "ItemFocusAnim-darkerGrey": "_1_wN_hVuLwcfYlTDIE-HTs",
          "ItemFocusAnim-darkGreySettings": "YO_BEpx_0vuXWdgMFEjkL",
          "ItemFocusAnim-darkGrey": "_32cDe-nAMlG7JYrA6niEGN",
          "ItemFocusAnim-grey": "_2LnPTi1cPqqxqvII8cqnlh",
          "ItemFocusAnim-translucent-white-10": "-jNJst4AtmAMI-o6ETEiC",
          "ItemFocusAnim-translucent-white-20": "_1dwebsW8iZHHqsEF46LGhs",
          "ItemFocusAnimBorder-darkGrey": "wiEMwKtkhMy1kSbxfOR43",
          "ItemFocusAnim-green": "PJqmv3PnTw0P2SQBGF3nn",
          focusAnimation: "_2mMG8YO1MWnzaegzgcISk2",
          hoverAnimation: "_2aCSOFWsYITdHt3aWn3-vu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          IgnoreButton: "_2TD7UsjzdR3Zr5ZOZ09n1J",
          IgnoreButtonText: "_2L6vwdfaFPRJ1zesEu6_Bf",
          IgnoreLoadingText: "uh8VGMa5zc623SZkB_hEQ",
          BackgroundAnimation: "_10sTNSs7WhNZPw6GdPTOJX",
          "ItemFocusAnim-darkerGrey-nocolor": "_1MdU34KFhJRKlGMaHngbls",
          "ItemFocusAnim-darkerGrey": "G_fmZBeNGKwyXP6EjOOZ_",
          "ItemFocusAnim-darkGreySettings": "_3n4qtxFhgpKOJlGlGVcI1H",
          "ItemFocusAnim-darkGrey": "_20-FW4mkUJEpsgtwPjoMD6",
          "ItemFocusAnim-grey": "_1QVohJAkrDR6QXMK3fZLMu",
          "ItemFocusAnim-translucent-white-10": "_2vttABcjIJHbd-xXLvTfgb",
          "ItemFocusAnim-translucent-white-20": "_2uyItrki6ohcX2MO3FPcKx",
          "ItemFocusAnimBorder-darkGrey": "_8sJgPArY-c3-X6w3X3la9",
          "ItemFocusAnim-green": "_3ZGmJEBxcg9Rgo7ObB8qJ0",
          focusAnimation: "_23SWPBJXy3Zmgp6Guu_3nw",
          hoverAnimation: "_3BrzCFDf-VVWJEnHMnE5xt",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ItemHoverSource: "_31qyh2htA-NLfzSAvjjJcl",
          Selectable: "b_zOCi3Z3BKdeweHShKDf",
          HoverContentTransition: "_14fzjUJx__1_iVvRQOFvNZ",
          Opening: "_1-VyPy3KZSzyBfUxYeZGHQ",
          Open: "_2lBsXkkcijYbtJ_ml1-6nE",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AddToCartAnchorCtn: "_2qDFksxM_Q3AG6L1u8NwZU",
          Action: "ttu4ikNa3-0XD2V-s6GcO",
          ActionOutOfStock: "_1PlPor5x810Tggmt8VYmNm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DemoButton: "_28CiBI8NLjLb6f6rlg_Ymg",
          DisabledButton: "_2vOGUa8HwoudpQtMOK5Nqw",
        };
      },
      chunkid: (module) => {
        module.exports = {
          RemoteOptions: "_1n4VsDtc0Av8cBgMJsgkDD",
          InlineLink: "_2nR4GT4DVg9Yl-bTs7Af6_",
          GameName: "_3uXW4QW6my5P4roTw70MxY",
          DownloadStartedCtn: "_1Vx6FpWjxhV9SI5Ld9_nsI",
          LearnMoreCtn: "_3oCB1RA8pibBfr_I0D7Jzr",
          ActionRow: "_1awvs90V6ciEDjEPbnZJ8J",
          ClientSelector: "_3aMZqhwSarToWISh50lejs",
          ClientName: "pR2rsYluolxfGVABLBUAc",
          Icon: "J_P3D4Qf7oCaZDIB-9dzG",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GotSteamDialog: "_2Qusm1gosCAtAqLKo5hioQ",
          DownloadSteamUrl: "_10lP7BWsYbhm_AclLUpjRi",
          GameName: "_1_uzwF-1oILlCEkcaApC-n",
          Buttons: "_2_Obm3_emYUZKMgT1bdKgG",
          Button: "_2nVaF4foORFEq78yZ3A7yA",
          LeftButton: "_3WYyumzIcbu_0Zysgbr4_h",
          AnswerText: "hCqVo4reICITJSgSg8g6t",
          ActionText: "_2s5NsgqEDdI6nKvz-9YFa4",
          Footer: "_3OKQsxzgQZkt2GtKz9679g",
          Logo: "_2AEA_k1tEcjAtTL7-Bnitk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SaleSection: "_1cOoCFwafBlSkwllIMf3XM",
          CarouselDisplay: "mntHD0WiARnsfz_kMYssq",
          SaleSectionCtn: "i2PTzRNXOK1OXvXb9-wzd",
          NoTopPadding: "_28qZDRJ1HAArkoQZjlLJ09",
          SaleHeaderContainer: "W4mvnnQ0uYKKoCfVm8QgX",
          DisabledBackground: "OPH8r3-pnCjCM7T8GrpWo",
          SaleSectionTabs: "_1FPIVJTLsw1nvAN24BGGKg",
          SaleViewAll: "_1bsBzvGKJui5_QaWVRBFDo",
          SaleSectionLoginPrompt: "_2-dSBTJ6PQzCGvK48gjCCf",
          LoginButton: "_3h6sHYHa8EFm2_xoGiVAnh",
          SaleSectionLivePreview: "_2dBAh0VOfhvgWv2ck8hp7n",
          Hover: "_15FfaTmQGzroKql83EUpaR",
          JumpedTo: "d-8MOKpyXkBvtl8y9qw8C",
          JumpToSection: "tlI9rzg19pPTqlI5UfDP",
          JumpToButton: "eOemW7abP9ncGnYuKqjCO",
          SaleOverlayCtn: "_3GTIcdmGdFdIHRLd5vgEDq",
          SaleOverlay: "_1sZo8rydBtEGprct3pN_1a",
          CarouselCapsuleBordered: "_31OAy5ksRg6RGhCGnDqRr3",
          CarouselCapsuleAnimated: "_3V1O5NH39Eec7m68CKLMDQ",
          AppSummaryWidgetCtn: "_2H8BmYvTdIYKMgG-XiCkc-",
          CarouselSalePageCapsule: "_3r4Ny9tQdQZc50XDM5B2q2",
          SaleBroadcastCtn: "_1SFMhugeWIHJIHrHl6ZQvD",
          SaleOuterTopMargin: "_2-wCQql61VqgdUYz9XDAE6",
          SaleOuterContainer: "_150kddWk8JgylTvh_eC20b",
          CustomStyle_together: "_1lAygDKkL4NolLsYyh0b_x",
          SaleNewSizing: "_1v-BVc2xZoBmJV2CPwNpq0",
          SalePageLogoSet: "JxIGHUxdTjFyWl1KO_tkn",
          SaleBackground: "_2N8SepiLeBUusG1vbHCgiY",
          SaleSectionTitleCtn: "bE2EA4JB9SDa1PZ7HSFL-",
          SaleSectionSubtext: "_17Fnl-wNZIrLjca5rOwwlT",
          SaleSectionContainer: "W9_WAYXgEe-t-7aqqC4Jp",
          vr_supported: "_1BDSJfdkuBN1tCLPLLopYW",
          vr_required: "_1P__hyqsgd049GH0Bn007_",
          preview_placeholder_section: "_3QLsjvek1OeH0pVbeOTBJj",
          LinkCapsule: "_2zVSaxkr0mGLlJ4ivF37dx",
          fullscreen_bg: "j2ykTCJIixZLTJZbDR4Tp",
          fullscreen_bg_video: "_3BU-yduiJJKNkd7_HrsZOY",
          SalePageBroadcastContextHover: "hbVdlTqhylKeYY8mtvLqP",
          AlbumCoverImage: "_2JfUA1GR2GBllJws5Gspq-",
          AlbumTitle: "keaMw-O2oHvRxLDK6gqEG",
          SaleSectionTabListContainer: "_2VZtqrDRVSIicZZHPUY9SY",
          MobileTabSelector: "_2fm5TVukvQanOpOSUahWeX",
          Visible: "_2Jmo5M2wPydPpQXUh8BQt3",
          MobileTabSelectorButton: "_1t4-3uyyq_jmSjRl6tRVef",
          MobileTabSelectorShortcut: "_1P5tcXycY4v5y9lSKeW2bG",
          DesktopTabs: "_2utXvAVvZJb3Wlt5jGxCs",
          MobileTabSelectorDropDown: "_3KO7Yj0s2ECNBrnZ3x6jIy",
          MobileTabSelectorOption: "GiTJlPmmuQyCr-OSCN08c",
          TabContentsContainer: "_2xJbuKOjgnmynp-q7384DI",
          HorizontalScrollInDragForceCursor: "nemO6I3-P1dWDt4lymNBD",
          SaleBroadcastSection: "_1u0IZcPxb5nhSDdfCHHBY9",
          CarouselPage: "HlkukqE4fB5si76sBJzKX",
          TabButtonsCtn: "_21-6tYOa1oCDYC9YCj1Vur",
          TabButton: "_1Gz4sRWceGeI3Si8NI3ZNk",
          SaleTabLabel: "_2mYMQE06Py3h0CfEokpNiM",
          DefaultCreatorCtn: "_3KzJ1sfvwr94TVth1tZA9",
          EventSectionViewAllCtn: "_1B6gV2QA_GwFQvK3wA5qWs",
          SaleSectionBackgroundImageGroupEdit: "_2a4meRP6BAw2re4BFrrwtA",
          BackgroundAnimation: "_1iEXo2C5dYh1sLdEds2zo_",
          "ItemFocusAnim-darkerGrey-nocolor": "_6ALY2cB6oP10XwjHy38XP",
          "ItemFocusAnim-darkerGrey": "_15R1kTQu4fktTozfpKwx_x",
          "ItemFocusAnim-darkGreySettings": "_25-J06c8AyBhzEbrxt0OlL",
          "ItemFocusAnim-darkGrey": "_3yxHI8TA-jq3Ka361SNOoS",
          "ItemFocusAnim-grey": "HdE5j3QJ5wzLUrUd8A9S6",
          "ItemFocusAnim-translucent-white-10": "_3Pg_mdzZKHlcgBMGWoeuM-",
          "ItemFocusAnim-translucent-white-20": "OZ_TTGcJc45o9tMuXjaVs",
          "ItemFocusAnimBorder-darkGrey": "_36t4Gu0DFfDO9-hIb82st6",
          "ItemFocusAnim-green": "_30VQHyiQ7SgMZgv2Q9RwMo",
          focusAnimation: "_1bLCgV4sZsGIHim8xs3go9",
          hoverAnimation: "_3--MfPAMg27VUuOckksz2m",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ClientSelectDropdown: "_36ai7Zh_5P9n3Lpg52IdgV",
          ClientListDropdownMenu: "bEY2j4LBFVv4rCwEfxS64",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxMobileWidth: "700px",
          strMaxResponsiveWidth: "910px",
          strMaxTabletWidth: "1080px",
        };
      },
    },
  ]);
})();
