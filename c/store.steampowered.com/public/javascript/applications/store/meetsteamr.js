(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [8620],
  {
    chunkid: (module) => {
      module.exports = {
        SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl",
      };
    },
    chunkid: (module) => {
      module.exports = {
        SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
        SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
        required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        Row: "yueujW6bRizgc-buB29Dw",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
        Expanded: "mJXTRr0gd2yNafeFp9NOr",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      function _(_) {
        switch (_) {
          case 0:
            return "game";
          case 6:
            return "software";
          case 1:
            return "demo";
          case 4:
            return "dlc";
          case 7:
          case 3:
            return "video";
          case 11:
            return "music";
          case 12:
            return "beta";
          case 2:
            return "mod";
        }
        return "invalid";
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
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
        _ = __webpack_require__("chunkid");
      const _ = "nicknames";
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = new Map();
              if (_._.logged_in) {
                const _ = _._.Init(_._),
                  _ = (await _._.GetNicknameList(_, _)).Body().toObject();
                _?.nicknames &&
                  _.nicknames.length > 0 &&
                  _.nicknames.forEach((_) => {
                    _.set(_.accountid, _.nickname);
                  });
              }
              return _;
            },
          });
        return __webpack_require__ ? __webpack_require__.get(_) : null;
      }
      const _ = new (_())(
          (_) =>
            (async function (_) {
              if (!_ || 0 == _.length) return [];
              const _ =
                "community" == (0, _._)()
                  ? _._.COMMUNITY_BASE_URL
                  : _._.STORE_BASE_URL;
              if (1 == _.length) {
                const _ = {
                    accountid: _[0],
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
                  !_.data?.userinfo
                )
                  throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
                return [_.data.userinfo];
              }
              {
                const _ = {
                    accountids: _.join(","),
                    origin: self.origin,
                  },
                  _ = await _().get(`${_}actions/ajaxgetmultiavatarpersona`, {
                    params: _,
                  });
                if (
                  !_ ||
                  200 != _.status ||
                  1 != _.data?.success ||
                  !_.data?.userinfos
                )
                  throw `Load single avatar/persona failed ${((0, _._))(_).strErrorMsg}`;
                const _ = new Map();
                return (
                  _.data.userinfos.forEach((_) =>
                    _.set(new _._(_.steamid).GetAccountID(), _),
                  ),
                  _.map((_) => _.get(_))
                );
              }
            })(_),
          {
            cache: !1,
          },
        ),
        _ = "avatarandpersonas";
      function _(_) {
        const { data: _, isLoading: __webpack_require__ } = (0, _._)({
          queryKey: [_, _],
          queryFn: () => _.load(_),
        });
        return [_, __webpack_require__];
      }
      function _(_) {
        const _ = (0, _._)(),
          { data: __webpack_require__, isLoading: _ } = (0, _._)({
            queryKey: [_, _],
            queryFn: async () => {
              const _ = await _.loadMany(_);
              return (
                __webpack_require__.forEach((_) => {
                  const _ = [_, new _._(_.steamid).GetAccountID()];
                  _.setQueryData(_, _);
                }),
                _
              );
            },
            enabled: _?.length > 0,
          }),
          _ = (0, _.useMemo)(() => {
            const _ = new Array();
            return (
              __webpack_require__?.forEach((_) => {
                _ instanceof Error || _.push(_);
              }),
              _
            );
          }, [__webpack_require__]);
        return _ ? null : _;
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
      function _(_) {
        const {
            accountID: _,
            bHideWhenNotAvailable: __webpack_require__,
            bHideName: _,
          } = _,
          [_] = (0, _._)(_),
          _ = (0, _._)(_),
          _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
          _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`;
        return _.createElement(
          _.Fragment,
          null,
          Boolean(!_)
            ? _.createElement(
                _.Fragment,
                null,
                Boolean(!__webpack_require__) &&
                  _.createElement("span", null, _),
              )
            : _.createElement(
                "a",
                {
                  href: _,
                },
                _.createElement("img", {
                  className: _.SmallAvatar,
                  src: _.avatar_url,
                  "data-miniprofile": "s" + _.ConvertTo64BitString(),
                }),
                Boolean(!_) &&
                  _.createElement(
                    "span",
                    null,
                    _ ? `${_} (${_.persona_name})` : _.persona_name,
                  ),
              ),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            title: _,
            tooltip: __webpack_require__,
            getMinimized: _,
            toggleMinimized: _,
            className: _,
            children: _,
            elAdditionalButtons: _,
          } = _,
          _ = (0, _._)(() => _());
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: (0, _._)(
                _,
                _.SectionTitleHeader,
                _.required_title,
                "SectionTitleHeader",
              ),
            },
            _.createElement(
              "div",
              {
                className: (0, _._)(
                  _.CollapsableSectionTitle,
                  "EventEditorTextTitle",
                ),
              },
              _,
              Boolean(__webpack_require__) &&
                _.createElement(_._, {
                  tooltip: __webpack_require__,
                }),
            ),
            _.createElement(
              "div",
              {
                className: _.SectionTitleButtons,
              },
              _,
              _.createElement(_, {
                bIsMinimized: _,
                fnToggleMinimize: _,
              }),
            ),
          ),
          !_ && _.createElement(_._, null, _),
        );
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(Boolean(_.bStartMinimized));
        return _.createElement(
          _,
          {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => __webpack_require__(!_),
          },
          _.children,
        );
      }
      function _(_) {
        const { bIsMinimized: _, fnToggleMinimize: __webpack_require__ } = _,
          _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return _.createElement(
          _._,
          {
            "data-tooltip-text": (0, _._)(_),
            onClick: __webpack_require__,
          },
          _.bIsMinimized
            ? _.createElement(_.hz4, null)
            : _.createElement(_.Xjb, null),
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          MeetSteamRoutes: () => _,
          default: () => _,
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { gid: _ } = (0, _._)(),
          [__webpack_require__, _] = (0, _.useState)(!0);
        if (
          (_.useEffect(() => {
            __webpack_require__ &&
              (_._.Init(), Promise.all([_._.InitGlobal()]).then(() => _(!1)));
          }, [__webpack_require__]),
          __webpack_require__)
        )
          return _.createElement(_._, {
            string: (0, _._)("#Loading"),
            position: "center",
          });
        const _ = _._.GetClanEventModel(_);
        return _
          ? _.createElement(
              _._,
              null,
              !_.BIsUnlistedEvent() &&
                _.createElement(
                  "div",
                  null,
                  "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                ),
              _.createElement(_._, {
                lang: (0, _._)(_._.LANGUAGE),
                event: _,
                adminPanel:
                  _._.EREALM === _._.k_ESteamRealmChina
                    ? _.createElement(_._, {
                        eventModel: _,
                      })
                    : _.createElement(_._, {
                        eventModel: _,
                        bSupportsSticky: !0,
                      }),
              }),
            )
          : null;
      }
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const [_] = (0, _._)("gid"),
          _ = (0, _._)(_),
          _ = (0, _._)(_._.LANGUAGE);
        return _
          ? _.createElement(
              "div",
              {
                className: _().Ctn,
              },
              _.createElement(
                "div",
                {
                  className: _().Row,
                },
                _.createElement(
                  "h2",
                  null,
                  __webpack_require__.GetNameWithFallback(_),
                ),
                _.createElement(
                  "a",
                  {
                    href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                    target: "_blank",
                  },
                  "See Event Details",
                ),
              ),
              _.createElement(_, {
                eventModel: _,
              }),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { eventModel: _ } = _,
          _ = (function (_) {
            const _ = (0, _._)(),
              [_] = (0, _.useState)(() =>
                (0, _._)("registrations", "application_config")
                  .sort((_, _) => {
                    const _ = _(
                        _.jsondata.meet_steam_groups,
                        _.group_id,
                        _.session_id,
                      ),
                      _ = _(
                        _.jsondata.meet_steam_groups,
                        _.group_id,
                        _.session_id,
                      );
                    return (
                      (_?.session?.rtime_start || 0) -
                      (_?.session?.rtime_start || 0)
                    );
                  })
                  .map((_) => {
                    const _ = _(
                      _.jsondata.meet_steam_groups,
                      _.group_id,
                      _.session_id,
                    );
                    return (
                      (_.relativeToToday = (function (_, _) {
                        const _ = new Date(1e3 * _),
                          _ = void 0 !== _ ? new Date(1e3 * _) : new Date(),
                          _ = new Date(
                            _.getFullYear(),
                            _.getMonth(),
                            _.getDate(),
                          ),
                          _ = new Date(
                            _.getFullYear(),
                            _.getMonth(),
                            _.getDate() + 1,
                          );
                        return _ >= _ && _ < _
                          ? "today"
                          : _ < _
                            ? "past"
                            : "future";
                      })(_?.session?.rtime_start || 0, _)),
                      _
                    );
                  }),
              );
            return (0, _.useMemo)(
              () =>
                __webpack_require__.reduce(
                  (_, _) => (
                    _[_.relativeToToday] || (_[_.relativeToToday] = []),
                    _[_.relativeToToday].push(_),
                    _
                  ),
                  {
                    today: [],
                    past: [],
                    future: [],
                  },
                ),
              [_],
            );
          })(_),
          [_] = (0, _._)("accountid"),
          _ = (0, _._)();
        return _.createElement(
          "div",
          null,
          _.createElement(_._, {
            accountID: _,
          }),
          _.createElement("br", null),
          _.createElement("br", null),
          _.createElement("br", null),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.today,
            strTitle: "Today " + (0, _._)(_),
          }),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.future,
            bHideIfEmpty: !0,
            strTitle: "Future",
          }),
          _.createElement(_, {
            eventModel: _,
            rgUserRegs: _.past,
            bHideIfEmpty: !0,
            strTitle: "Past",
          }),
        );
      }
      function _(_) {
        const {
          eventModel: _,
          rgUserRegs: __webpack_require__,
          bHideIfEmpty: _,
          strTitle: _,
        } = _;
        return 0 == __webpack_require__.length && _
          ? null
          : _.createElement(
              _._,
              {
                title: `${_} (${__webpack_require__.length})`,
                bStartMinimized: _,
              },
              Boolean(!__webpack_require__ || 0 == __webpack_require__.length)
                ? _.createElement("div", null, _ ? "" : "No registrations")
                : _.createElement(
                    "div",
                    null,
                    __webpack_require__.map((_) =>
                      _.createElement(_, {
                        key: `${_.group_id}_${_.session_id}`,
                        eventModel: _,
                        reg: _,
                      }),
                    ),
                  ),
            );
      }
      function _(_) {
        const { desc: _ } = _,
          [__webpack_require__, _] = (0, _.useState)(!1),
          _ = (0, _.useCallback)(() => _((_) => !_), []);
        return _.createElement(
          "div",
          {
            className: (0, _._)({
              [_().DescriptionWrapper]: !0,
              [_().Expanded]: __webpack_require__,
            }),
            onClick: _,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
          },
          _,
        );
      }
      function _(_) {
        const { reg: _, eventModel: __webpack_require__ } = _,
          [_] = (0, _._)("accountid"),
          [_] = (0, _._)(_),
          [_, _] = (0, _.useState)([]),
          [_, _] = (0, _.useState)(!1),
          _ = (0, _.useMemo)(() => JSON.parse(_.jsondata), [_]),
          { group: _, session: _ } = _(
            __webpack_require__.jsondata.meet_steam_groups,
            _.group_id,
            _.session_id,
          ),
          [_, _, _] = (0, _._)(),
          _ =
            ((_ = __webpack_require__.GID),
            (_ = _),
            (_ = _.group_id),
            (_ = _.session_id),
            (0, _._)({
              mutationFn: async ({ rgGuests: _ }) => {
                const _ = new FormData();
                _.append("sessionid", _._.SESSIONID),
                  _.append("gid", _),
                  _.append("accountid", "" + _),
                  _.append("meetsteam_group_id", "" + _),
                  _.append("meetsteam_session_id", "" + _),
                  _?.length && _.append("guests", _.join("|"));
                const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  _ = await _().post(_, _, {
                    withCredentials: !0,
                  });
                return 1 == _?.data?.success;
              },
            }));
        var _, _, _, _;
        return _.createElement(
          "div",
          null,
          _.createElement(_, {
            group: _,
            session: _,
          }),
          Boolean(_)
            ? _.createElement(
                "div",
                null,
                _.createElement("br", null),
                _.createElement("b", null, "Successful Attendance Registered"),
              )
            : _.createElement(
                _.Fragment,
                null,
                _.createElement(_._, {
                  label: "Attendee: " + _.name || 0,
                  checked: !0,
                  onChange: (_) => {},
                }),
                Boolean(_.guest_names?.length > 0) &&
                  _.createElement(
                    _.Fragment,
                    null,
                    _.guest_names.map((_) =>
                      _.createElement(_._, {
                        key: _.group_id + "_" + _.session_id + "_" + _,
                        label: "Guest Name: " + _,
                        checked: _.includes(_),
                        onChange: (_) => {
                          _((_) =>
                            _
                              ? __webpack_require__.includes(_)
                                ? _
                                : [..._, _]
                              : __webpack_require__.filter((_) => _ !== _),
                          );
                        },
                      }),
                    ),
                  ),
                _.createElement(
                  _._,
                  {
                    onClick: _,
                  },
                  (0, _._)("#Button_Submit"),
                ),
              ),
          _.createElement(
            _._,
            {
              active: _,
            },
            _.createElement(
              _._,
              null,
              _.createElement(_, {
                closeModal: _,
                rgGuestsAttending: _,
                fnMarkAttendance: _,
                fnOnSuccess: () => _(!0),
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
            closeModal: _,
            rgGuestsAttending: __webpack_require__,
            fnMarkAttendance: _,
            fnOnSuccess: _,
          } = _,
          _ = (0, _._)();
        return _.bLoading
          ? _.createElement(_._, {
              state: _,
              strDialogTitle: (0, _._)("#Saving"),
              closeModal: _,
            })
          : _.createElement(
              _._,
              {
                onCancel: _,
                strTitle: (0, _._)("#Button_Submit"),
                bAllowFullSize: !0,
                onOK: async () => {
                  _.fnSetLoading(!0),
                    _.mutateAsync({
                      rgGuests: __webpack_require__,
                    })
                      .then((_) => {
                        _
                          ? (_(),
                            _.fnSetStrSuccess("Success! Attendance Marked."))
                          : _.fnSetStrError(
                              (0, _._)("#Login_Error_Network_Description"),
                            );
                      })
                      .catch(() =>
                        _.fnSetStrError(
                          (0, _._)("#Login_Error_Network_Description"),
                        ),
                      );
                },
              },
              "Mark Attendance?",
            );
      }
      function _(_) {
        const { session: _, group: __webpack_require__ } = _;
        return _ && __webpack_require__
          ? _.createElement(
              "div",
              null,
              _.createElement("hr", null),
              _.createElement(
                "div",
                null,
                "Title: ",
                __webpack_require__.localized_session_title[0],
              ),
              _.createElement(
                "div",
                null,
                _.createElement(_, {
                  desc: `Description: ${__webpack_require__.localized_session_description[0] || ""}`,
                }),
              ),
              _.createElement(
                "div",
                null,
                "Time:",
                (0, _._)(_.rtime_start, !1, !0),
                " @",
                _.createElement(
                  "b",
                  null,
                  (0, _._)(_.rtime_start, _.rtime_end, !0),
                ),
              ),
              "dev" == _._.WEB_UNIVERSE &&
                _.createElement(
                  "div",
                  null,
                  "Rtime Start (Dev only): ",
                  _.rtime_start,
                ),
            )
          : _.createElement("div", null, "Session Infomrmation Missing");
      }
      function _(_, _, _) {
        for (const _ of _)
          if (_.group_id === _) {
            const _ = _.sessions.find((_) => _._ === _);
            if (_)
              return {
                group: _,
                session: _,
              };
          }
        return {
          group: null,
          session: null,
        };
      }
      var _ = __webpack_require__("chunkid");
      const _ = {
        MeetSteamAttendance: () => `${_._.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${_._.MeetSteamRoute()}:gid(\\d+)`,
      };
      function _(_) {
        return _.createElement(
          _._,
          null,
          _.createElement(_._, {
            path: _.MeetSteamAttendance(),
            render: (_) =>
              _.createElement(_, {
                ..._,
              }),
          }),
          _.createElement(_._, {
            path: _.MeetSteamEvent(),
            render: (_) =>
              _.createElement(_, {
                ..._,
              }),
          }),
          _.createElement(_._, null, _.createElement(_._, null)),
        );
      }
    },
  },
]);
