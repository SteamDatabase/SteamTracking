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
        Ctn: "_35KiKa7cq-3mn4lChNW67c",
        EventName: "e-36dCsEtoK52wg6Qx1iq",
        AtendeeSearchRow: "_1KbfPGq52sl-NB4ku90gN3",
        AtendeeListButtonRow: "_2JLogmiR30ClrphBajhwYK",
        BackToListIcon: "_3bl-GtsF8LkmzsRFkqjeCz",
        AttendeeRow: "_35gHo_M6tBBUOL8PWGEmA9",
        DisplayAllDaysCtn: "_3bvF759mojZQZv_TGXaM5Q",
        DisplayDaysCtn: "_1b8sKAzr4LILvJyl7fkRrL",
        DateName: "_32Ut51xzdWXCL6OOaz4vY2",
        DisplayDaySessions: "_32v8UGu0FfxnCHtltxqiEV",
        NotToday: "_1PB1JESsJ8abJrTzTqOVBk",
        DisplayDaySessionsRow: "_3DhIykQH8p8dQb2VOZg4-L",
        DisplaySession: "_27ybiS1mMlsYotyoQGVmI_",
        Header: "_1jOgBHcEXg1l6kSowBxwn6",
        SessionName: "vl9qom9droT0L3xZs2JhG",
        SessionTime: "PG1xFNh9UdoEjEvvw22V5",
        CapacityCtn: "_2jxcROaKoRgZCIKUHALVRH",
        CapacityBarMax: "_2Kd3cw8fPPyzDXTWBxltj7",
        CapacityBarCurrent: "_3jKSoLI8ytiyq9ELWTJNVY",
        Full: "_27_ZZ6xz-L8KC1u6uQmDz",
        SetCapacityButton: "_1BPqndgvTdc3n4fPDlcvAQ",
        SetCapacityInput: "QnMJIDEn4Rz26VtL1RdUu",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Ctn: "_3cmUbcgdPxM7o5hl986RgB",
        User: "_3E6Usl36asxUFK3vPKa7Us",
        EventName: "_2GHTaky49GZrPLyiOgKWB7",
        SessionInfo: "Kk38rrvnYm3-E2jJMahSH",
        SessionName: "_2uJvCA4FncHONmSI37VVyw",
        SessionTime: "_2vYmHfXJIHj2eCv8NsiqZv",
        RegisteredUsers: "HLiipgmnfEQ2O-9WritfU",
        CheckedIn: "_17S0ayInAou4_ptPoMguR0",
        GuestTitle: "_2fMFlfbH8xUEtW28kSLf5-",
        GuestEmail: "Tm-tj9XNHRPGqdqqNiTEp",
        DescriptionWrapper: "_17o_wRtaDyujn3Bx4gGiu5",
      };
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
            bLink: _ = !0,
          } = _,
          [_] = (0, _._)(_),
          _ = (0, _._)(_),
          _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
          _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`,
          _ = _ ? "a" : "span";
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
                _,
                {
                  href: _ ? _ : void 0,
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
        _ = __webpack_require__("chunkid");
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
      function _(_, _) {
        const _ = (0, _._)(),
          [_] = (0, _.useState)(() =>
            (0, _._)("registrations", "application_config")
              .map((_) => ((_.userReg = JSON.parse(_.jsondata)), _))
              .sort((_, _) => {
                const _ = _(
                    _.jsondata.meet_steam_groups,
                    _.group_id,
                    _.session_id,
                  ),
                  _ = _(_.jsondata.meet_steam_groups, _.group_id, _.session_id);
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
                    if (!_) return "past";
                    const _ = (0, _._)(_),
                      _ = (0, _._)(_.rtime_start, _),
                      _ = void 0 !== _ ? new Date(1e3 * _) : new Date(),
                      _ = new Date(_.getFullYear(), _.getMonth(), _.getDate()),
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
                  })(_?.session, _)),
                  (_.rtSesssionTime = _.session.rtime_start),
                  _
                );
              }),
          ),
          _ = _?.trim().toLowerCase() || "";
        return (0, _.useMemo)(
          () =>
            _.filter(
              (_) =>
                !_.length ||
                _.userReg.name?.toLowerCase().includes(_) ||
                _.userReg.company?.toLowerCase().includes(_) ||
                _.userReg.guest_names?.find((_) =>
                  _.toLowerCase().includes(_),
                ) ||
                _.userReg.email_override?.toLowerCase().includes(_),
            ),
          [_, _],
        );
      }
      function _(_, _) {
        return (0, _.useMemo)(
          () =>
            _.reduce(
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
          [_, _],
        );
      }
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
                  className: _().EventName,
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
          _ = _(_(_)),
          [_] = (0, _._)("accountid"),
          _ = (0, _._)();
        return _.createElement(
          "div",
          null,
          _.createElement(
            "div",
            {
              className: _().User,
            },
            _.createElement(_._, {
              accountID: _,
            }),
          ),
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
                    __webpack_require__
                      .sort((_, _) => _.rtSesssionTime - _.rtSesssionTime)
                      .map((_) =>
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
          _ = new _._(_.steamid).GetAccountID(),
          [_] = (0, _._)(_.userReg.accountid),
          [_, _] = (0, _.useState)(!0),
          [_, _] = (0, _.useState)([]),
          [_, _] = (0, _.useState)(!1),
          _ = _.userReg,
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
              mutationFn: async ({ bIncludeSelf: _, rgGuests: _ }) => {
                const _ = new FormData();
                __webpack_require__.append("sessionid", _._.SESSIONID),
                  __webpack_require__.append("gid", _),
                  __webpack_require__.append("accountid", "" + _),
                  __webpack_require__.append("meetsteam_group_id", "" + _),
                  __webpack_require__.append("meetsteam_session_id", "" + _),
                  __webpack_require__.append("include_self", "" + (_ ? 1 : 0)),
                  _?.length &&
                    __webpack_require__.append("guests", _.join("|"));
                const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdateattendance`,
                  _ = await _().post(_, _, {
                    withCredentials: !0,
                  });
                return 1 == _?.data?.success;
              },
            }));
        var _, _, _, _;
        const _ = new Set(
            _.guests_attendance?.length > 0
              ? _.guests_attendance.split("|")
              : [],
          ),
          _ = _.attendance_count > _.size,
          _ = (_, _, _, _) =>
            _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "span",
                {
                  className: _().GuestTitle,
                },
                _,
                ":",
                " ",
              ),
              _,
              _ &&
                _.createElement(
                  _.Fragment,
                  null,
                  " ",
                  _.createElement(
                    "span",
                    {
                      className: _().GuestEmail,
                    },
                    "(",
                    _,
                    ")",
                  ),
                ),
              _.createElement(
                _.Fragment,
                null,
                " ",
                "-",
                _.createElement(
                  "span",
                  null,
                  _ ? "✅ checked in" : "☐ not checked in",
                ),
              ),
            );
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
                {
                  className: _().CheckedIn,
                },
                "Attendee has been checked in",
              )
            : _.createElement(
                "div",
                {
                  className: _().RegisteredUsers,
                },
                _.createElement(_._, {
                  label: _.createElement(
                    _.Fragment,
                    null,
                    _(
                      "Attendee",
                      _.name || _.persona_name,
                      _.email_override,
                      _,
                    ),
                  ),
                  checked: _,
                  onChange: _,
                }),
                Boolean(_.guest_names?.length > 0) &&
                  _.createElement(
                    _.Fragment,
                    null,
                    _.guest_names.map((_) =>
                      _.createElement(_._, {
                        key: _.group_id + "_" + _.session_id + "_" + _,
                        label: _.createElement(
                          _.Fragment,
                          null,
                          _("Guest", _, void 0, _.has(_)),
                        ),
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
                  "Check in selected people",
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
                bIncludeSelf: _,
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
            bIncludeSelf: __webpack_require__,
            rgGuestsAttending: _,
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
                      bIncludeSelf: __webpack_require__,
                      rgGuests: _,
                    })
                      .then((_) => {
                        _
                          ? (_(),
                            _.fnSetStrSuccess(
                              "Success! This person has been checked in.",
                            ))
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
              "Mark as checked in?",
            );
      }
      function _(_) {
        const { session: _, group: __webpack_require__ } = _,
          {
            sDisplayTimeZone: _,
            rtime_start: _,
            rtime_end: _,
          } = (0, _._)(_.session),
          _ = (0, _._)(_, _),
          _ = (0, _._)(_, _, _);
        return _ && __webpack_require__
          ? _.createElement(
              "div",
              {
                className: _().SessionInfo,
              },
              _.createElement(
                "div",
                {
                  className: _().SessionName,
                },
                __webpack_require__.localized_session_title[0],
              ),
              _.createElement(
                "div",
                {
                  className: _().SessionTime,
                },
                _,
                " @ ",
                _.createElement("b", null, _),
              ),
              _.createElement(
                "div",
                null,
                _.createElement(_, {
                  desc: `Description: ${__webpack_require__.localized_session_description[0] || ""}`,
                }),
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const _ = new Date(_.getTime());
        return _.setHours(0, 0, 0, 0), _;
      }
      function _(_) {
        const [_] = (0, _._)("gid"),
          _ = (0, _._)(_),
          _ = (0, _._)(_._.LANGUAGE),
          [_, _] = (0, _.useState)("");
        return _
          ? _.createElement(
              "div",
              {
                className: _().Ctn,
              },
              _.createElement(
                "div",
                {
                  className: _().EventName,
                },
                _.createElement(
                  "h1",
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
              _.createElement(
                "div",
                {
                  className: _().AtendeeSearchRow,
                },
                _.createElement(_._, {
                  type: "text",
                  label: "Search for an attendee",
                  value: _,
                  bShowClearAction: !0,
                  onChange: (_) => _(_.currentTarget.value || ""),
                  placeholder: "Type name or partner or email address",
                }),
              ),
              _.createElement(_, {
                eventModel: _,
                strSearch: _.toLowerCase(),
              }),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { eventModel: _, strSearch: __webpack_require__ } = _,
          _ = _(_, __webpack_require__),
          [_, _] = (0, _.useState)(null),
          [_, _] = (0, _.useMemo)(() => {
            const _ = new Map();
            return (
              _.forEach((_) => {
                [_.userReg.name, ...(_.userReg.guest_names || [])].forEach(
                  (_) => {
                    const _ = __webpack_require__.toLowerCase();
                    _.has(_) ? _.get(_).push(_) : _.set(_, [_]);
                  },
                );
              }),
              [_, Array.from(_.keys()).sort()]
            );
          }, [_]);
        return (
          _.useEffect(() => {
            _(null);
          }, [__webpack_require__]),
          _.createElement(
            "div",
            null,
            _.createElement("h3", null, "Attendees"),
            Boolean(_)
              ? _.createElement(_, {
                  eventModel: _,
                  rgSelected: _,
                  strSearch: __webpack_require__,
                  onCleanSelection: () => _(null),
                })
              : _.createElement(
                  _.Fragment,
                  null,
                  _.filter(
                    (_) =>
                      !__webpack_require__ || _.includes(__webpack_require__),
                  ).map((_) =>
                    _.createElement(
                      "div",
                      {
                        key: _,
                        className: _().AttendeeRow,
                      },
                      _.createElement(
                        _._,
                        {
                          onClick: () => _(_.get(_.toLowerCase())),
                        },
                        _,
                      ),
                    ),
                  ),
                ),
          )
        );
      }
      function _(_) {
        const {
            eventModel: _,
            rgSelected: __webpack_require__,
            strSearch: _,
            onCleanSelection: _,
          } = _,
          _ = (0, _._)(),
          _ = _(__webpack_require__, _);
        return _.createElement(
          "div",
          null,
          _.createElement(
            "div",
            {
              className: _().AtendeeListButtonRow,
            },
            _.createElement(
              _._,
              {
                onClick: _,
              },
              _.createElement(_.uMb, {
                className: _().BackToListIcon,
              }),
              "Back to full list",
            ),
          ),
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
        const { eventModel: _ } = _,
          _ = (0, _._)(),
          [_, _] = _.useState(!1),
          { rgGroupedSessions: _, bMoreSessions: _ } = _.useMemo(() => {
            const _ = _?.jsondata?.meet_steam_groups?.flatMap((_) =>
                _.sessions.map((_) => {
                  const _ = (0, _._)(_),
                    _ = (0, _._)(_.rtime_start, _);
                  return {
                    group: _,
                    session: _,
                    displayDate: _,
                  };
                }),
              ),
              _ = _?.filter((_) => _ || _(_.displayDate) >= _(_)),
              _ = _ || (_ && _.length > _.length);
            var _;
            return {
              rgGroupedSessions:
                ((_ = (_) => _(_.displayDate)),
                (_ ?? []).reduce((_, _) => {
                  const _ = _(_),
                    _ = Math.floor(__webpack_require__.getTime() / 1e3),
                    _ = _.get(_) || [];
                  return _.set(_, [..._, _]), _;
                }, new Map())),
              bMoreSessions: _,
            };
          }, [_?.jsondata?.meet_steam_groups, _, _]),
          _ = _.useMemo(() => {
            const _ = (0, _._)("registrations", "application_config");
            if (_ && "object" == typeof _)
              return _.reduce((_, _) => {
                const _ = `${_.group_id}_${_.session_id}`,
                  _ = _.get(_) ?? [];
                return _.push(_), _.set(_, _), _;
              }, new Map());
          }, []);
        if (!_ || (0 == _.size && !_)) return;
        const _ =
            Array.from(_.keys()).reduce(
              (_, _) =>
                null == _ || (1e3 * _ > __webpack_require__.getTime() && _ < _)
                  ? _
                  : _,
              void 0,
            ) ?? 0,
          _ = Array.from(_.keys()).some((_) => (0, _._)(_, new Date(1e3 * _)));
        return _.createElement(
          "div",
          {
            className: _().DisplayAllDaysCtn,
          },
          _ &&
            _.createElement(_._, {
              label: "Show past events",
              checked: _,
              onChange: _,
            }),
          _.createElement(
            "div",
            {
              className: _().DisplayDaysCtn,
            },
            Array.from(_.keys()).map((_) =>
              _.createElement(_, {
                key: _,
                eventModel: _,
                date: new Date(1e3 * _),
                sessionsAndGroups: _.get(_),
                rgRegistrationInfo: _,
                isToday: (0, _._)(_ ? _ : new Date(1e3 * _), new Date(1e3 * _)),
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
          eventModel: _,
          date: __webpack_require__,
          sessionsAndGroups: _,
          rgRegistrationInfo: _,
          isToday: _,
        } = _;
        return _.createElement(
          "div",
          {
            className: (0, _._)(_().DisplayDaySessions, !_ && _().NotToday),
          },
          _.createElement(
            "div",
            {
              className: _().DateName,
            },
            (0, _._)(__webpack_require__),
          ),
          _.createElement(
            "div",
            {
              className: _().DisplayDaySessionsRow,
            },
            _.map((_) =>
              _.createElement(_, {
                key: `${_.group.group_id}_${_.session._}`,
                eventModel: _,
                date: __webpack_require__,
                registrations:
                  _.get(`${_.group.group_id}_${_.session._}`) ?? [],
                group: _.group,
                session: _.session,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
            eventModel: _,
            date: __webpack_require__,
            group: _,
            session: _,
            registrations: _,
          } = _,
          _ = (0, _._)(_._.LANGUAGE),
          _ = (0, _._)(),
          { sDisplayTimeZone: _, rtime_start: _ } = (0, _._)(_),
          _ = (0, _._)(_, _),
          _ = _.reduce((_, _) => _ + (_.guests_registered ?? 0), 0),
          _ = _.reduce(
            (_, _) =>
              _ +
              (_.rt_attendance_marked > 0 && _.guests_registered
                ? _.guests_registered
                : 0),
            0,
          ),
          [_, _, _] = (0, _._)(),
          _ =
            ((_ = _.GID),
            (_ = _.group_id),
            (_ = _._),
            (0, _._)({
              mutationFn: async ({ nCapacity: _ }) => {
                const _ = new FormData();
                _.append("sessionid", _._.SESSIONID),
                  _.append("gid", _),
                  _.append("meetsteam_group_id", "" + _),
                  _.append("meetsteam_session_id", "" + _),
                  _.append("capacity", "" + _);
                const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`,
                  _ = await _().post(_, _, {
                    withCredentials: !0,
                  });
                return 1 == _?.data?.success;
              },
            }));
        var _, _, _;
        return _.createElement(
          "div",
          {
            className: _().DisplaySession,
          },
          _.createElement(
            "div",
            {
              className: _().Header,
            },
            _.createElement(
              "div",
              {
                className: _().SessionName,
              },
              _.localized_session_title[_] ?? _.localized_session_title[0],
            ),
            _.createElement(
              "div",
              {
                className: _().SessionTime,
              },
              _,
            ),
          ),
          _.createElement(_, {
            title: "Registered:",
            nCount: _,
            nCapacity: _.max_capacity,
          }),
          _.createElement(_, {
            title: "Checked in:",
            nCount: _,
            nCapacity: _.max_capacity,
          }),
          _(__webpack_require__) >= _(_) &&
            _.createElement(
              _.Fragment,
              null,
              _.createElement(
                _._,
                {
                  className: (0, _._)(_().SetCapacityButton),
                  onClick: _,
                },
                "Update capacity...",
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
                    nCapacity: _.max_capacity ?? 0,
                    fnUpdateCapacity: _,
                    fnOnSuccess: () => window.location.reload(),
                  }),
                ),
              ),
            ),
        );
      }
      function _(_) {
        const {
            closeModal: _,
            nCapacity: __webpack_require__,
            fnUpdateCapacity: _,
            fnOnSuccess: _,
          } = _,
          [_, _] = _.useState(__webpack_require__.toString()),
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
                strTitle: (0, _._)("Update Capacity"),
                bAllowFullSize: !0,
                onOK: async () => {
                  _.fnSetLoading(!0);
                  const _ = Number.isNaN(Number.parseInt(_))
                    ? void 0
                    : Number.parseInt(_);
                  _.mutateAsync({
                    nCapacity: _,
                  })
                    .then((_) => {
                      _
                        ? (_(), _.fnSetStrSuccess("Max capacity updated."))
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
              _.createElement(_._, {
                className: _().SetCapacityInput,
                label: "New capacity",
                type: "text",
                autoComplete: "off",
                value: _,
                onChange: (_) => _(_.currentTarget.value),
              }),
            );
      }
      function _(_) {
        const { title: _, nCount: __webpack_require__, nCapacity: _ } = _,
          _ = __webpack_require__ >= _,
          _ = Math.min((__webpack_require__ / _) * 100, 100),
          _ = __webpack_require__ > 0 ? `${_}%` : "0%";
        return _.createElement(
          "div",
          {
            className: _().CapacityCtn,
          },
          _.createElement("span", null, _, " ", __webpack_require__, " / ", _),
          _.createElement(
            "div",
            {
              className: _().CapacityBarMax,
            },
            _.createElement("div", {
              className: (0, _._)(_().CapacityBarCurrent, _ ? _().Full : ""),
              style: {
                width: _,
              },
            }),
          ),
        );
      }
      const _ = {
        MeetSteamAttendance: () => `${_._.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${_._.MeetSteamRoute()}:gid(\\d+)`,
        MeetSteamAttendeeList: () => `${_._.MeetSteamRoute()}attendeelist`,
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
            path: _.MeetSteamAttendeeList(),
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
