(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [98620],
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "nicknames";
      function _(_) {
        const _ = (0, _._)(),
          { data: _, isLoading: _ } = (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = new Map();
              if (_._.logged_in) {
                const _ = _._.Init(_.w_T),
                  _ = (await _.xtC.GetNicknameList(_, _)).Body().toObject();
                _?.nicknames &&
                  _.nicknames.length > 0 &&
                  _.nicknames.forEach((_) => {
                    _.set(_.accountid, _.nickname);
                  });
              }
              return _;
            },
          });
        return _ ? __webpack_require__.get(_) : null;
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
                  _.data?.success != _._ ||
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
                  _.data?.success != _._ ||
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
        const { data: _, isLoading: _ } = (0, _._)({
          queryKey: [_, _],
          queryFn: () => _.load(_),
        });
        return [_, _];
      }
      function _(_) {
        const _ = (0, _._)(),
          { data: _, isLoading: _ } = (0, _._)({
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
          }, [_]);
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            accountID: _,
            bHideWhenNotAvailable: _,
            bHideName: _,
            bLink: _ = !0,
          } = _,
          [_] = (0, _._)(_),
          _ = (0, _._)(_),
          _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
          _ = `${_._.COMMUNITY_BASE_URL}profiles/${_.ConvertTo64BitString()}`,
          _ = _ ? "a" : "span";
        return (0, _.jsx)(_.Fragment, {
          children: Boolean(!_)
            ? (0, _.jsx)(_.Fragment, {
                children:
                  Boolean(!_) &&
                  (0, _.jsx)("span", {
                    children: _,
                  }),
              })
            : (0, _.jsxs)(_, {
                href: _ ? _ : void 0,
                children: [
                  (0, _.jsx)("img", {
                    className: _.SmallAvatar,
                    src: _.avatar_url,
                    "data-miniprofile": "s" + _.ConvertTo64BitString(),
                  }),
                  Boolean(!_) &&
                    (0, _.jsx)("span", {
                      children: _ ? `${_} (${_.persona_name})` : _.persona_name,
                    }),
                ],
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            title: _,
            tooltip: _,
            getMinimized: _,
            toggleMinimized: _,
            className: _,
            children: _,
            elAdditionalButtons: _,
          } = _,
          _ = (0, _._)(() => _());
        return (0, _.jsxs)(_.Fragment, {
          children: [
            (0, _.jsxs)("div", {
              className: (0, _._)(
                _,
                _.SectionTitleHeader,
                _.required_title,
                "SectionTitleHeader",
              ),
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _.CollapsableSectionTitle,
                    "EventEditorTextTitle",
                  ),
                  children: [
                    _,
                    Boolean(_) &&
                      (0, _.jsx)(_._, {
                        tooltip: _,
                      }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.SectionTitleButtons,
                  children: [
                    _,
                    (0, _.jsx)(_, {
                      bIsMinimized: _,
                      fnToggleMinimize: _,
                    }),
                  ],
                }),
              ],
            }),
            !_ &&
              (0, _.jsx)(_._, {
                children: _,
              }),
          ],
        });
      }
      function _(_) {
        const [_, _] = _.useState(Boolean(_.bStartMinimized));
        return (0, _.jsx)(_, {
          ..._,
          getMinimized: () => _,
          toggleMinimized: () => __webpack_require__(!_),
          children: _.children,
        });
      }
      function _(_) {
        const { bIsMinimized: _, fnToggleMinimize: _ } = _,
          _ = _ ? "#Section_Maximize_Tooltip" : "#Section_Minimize_Tooltip";
        return (0, _.jsx)(_._, {
          "data-tooltip-text": (0, _._)(_),
          onClick: _,
          children: _.bIsMinimized
            ? (0, _.jsx)(_.hz4, {})
            : (0, _.jsx)(_.Xjb, {}),
        });
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
          [_, _] = (0, _.useState)(!0);
        if (
          (_.useEffect(() => {
            _ && (_._.Init(), _(!1));
          }, [_]),
          _)
        )
          return (0, _.jsx)(_._, {
            string: (0, _._)("#Loading"),
            position: "center",
          });
        const _ = _._.GetClanEventModel(_);
        return _
          ? (0, _.jsxs)(_._, {
              children: [
                !_.BIsUnlistedEvent() &&
                  (0, _.jsx)("div", {
                    children:
                      "NOTE: Event needs to be published in unlisted mode for Steam partners to see it. Admin account bypass this check",
                  }),
                (0, _.jsx)(_._, {
                  lang: (0, _.sfN)(_._.LANGUAGE),
                  event: _,
                  adminPanel:
                    _._.EREALM === _._.k_ESteamRealmChina
                      ? (0, _.jsx)(_._, {
                          eventModel: _,
                        })
                      : (0, _.jsx)(_._, {
                          eventModel: _,
                          bSupportsSticky: !0,
                        }),
                }),
              ],
            })
          : null;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
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
                  (_.rtSesssionTime = _?.session?.rtime_start ?? 0),
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
          _ = (0, _.sfN)(_._.LANGUAGE);
        return _
          ? (0, _.jsxs)("div", {
              className: _().Ctn,
              children: [
                (0, _.jsxs)("div", {
                  className: _().EventName,
                  children: [
                    (0, _.jsx)("h2", {
                      children: __webpack_require__.GetNameWithFallback(_),
                    }),
                    (0, _.jsx)("a", {
                      href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  eventModel: _,
                }),
              ],
            })
          : (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { eventModel: _ } = _,
          _ = _(_(_)),
          [_] = (0, _._)("accountid"),
          _ = (0, _._)();
        return (0, _.jsxs)("div", {
          children: [
            (0, _.jsx)("div", {
              className: _().User,
              children: (0, _.jsx)(_._, {
                accountID: _,
              }),
            }),
            (0, _.jsx)(_, {
              eventModel: _,
              rgUserRegs: _.today,
              strTitle: "Today " + (0, _._)(_),
            }),
            (0, _.jsx)(_, {
              eventModel: _,
              rgUserRegs: _.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, _.jsx)(_, {
              eventModel: _,
              rgUserRegs: _.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
      }
      function _(_) {
        const {
          eventModel: _,
          rgUserRegs: _,
          bHideIfEmpty: _,
          strTitle: _,
        } = _;
        return 0 == _.length && _
          ? null
          : (0, _.jsx)(_._, {
              title: `${_} (${_.length})`,
              bStartMinimized: _,
              children: Boolean(!_ || 0 == _.length)
                ? (0, _.jsx)("div", {
                    children: _ ? "" : "No registrations",
                  })
                : (0, _.jsx)("div", {
                    children: __webpack_require__
                      .sort((_, _) => _.rtSesssionTime - _.rtSesssionTime)
                      .map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            eventModel: _,
                            reg: _,
                          },
                          `${_.group_id}_${_.session_id}`,
                        ),
                      ),
                  }),
            });
      }
      function _(_) {
        const { desc: _ } = _,
          [_, _] = (0, _.useState)(!1),
          _ = (0, _.useCallback)(() => _((_) => !_), []);
        return (0, _.jsx)("div", {
          className: (0, _._)({
            [_().DescriptionWrapper]: !0,
            [_().Expanded]: _,
          }),
          onClick: _,
          onMouseEnter: () => _(!0),
          onMouseLeave: () => _(!1),
          children: _,
        });
      }
      function _(_) {
        const { reg: _, eventModel: _ } = _,
          _ = new _._(_.steamid).GetAccountID(),
          [_] = (0, _._)(_.userReg.accountid),
          [_, _] = (0, _.useState)(!0),
          [_, _] = (0, _.useState)([]),
          [_, _] = (0, _.useState)(!1),
          _ = _.userReg,
          { group: _, session: _ } = _(
            _.jsondata.meet_steam_groups,
            _.group_id,
            _.session_id,
          ),
          [_, _, _] = (0, _._)(),
          _ =
            ((_ = _.GID),
            (_ = _),
            (_ = _.group_id),
            (_ = _.session_id),
            (0, _._)({
              mutationFn: async ({ bIncludeSelf: _, rgGuests: _ }) => {
                const _ = new FormData();
                __webpack_require__.append("sessionid", (0, _._)()),
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
                return _?.data?.success == _._;
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
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)("span", {
                  className: _().GuestTitle,
                  children: [_, ":", " "],
                }),
                _,
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      " ",
                      (0, _.jsxs)("span", {
                        className: _().GuestEmail,
                        children: ["(", _, ")"],
                      }),
                    ],
                  }),
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    " ",
                    "-",
                    (0, _.jsx)("span", {
                      children: _ ? "✅ checked in" : "☐ not checked in",
                    }),
                  ],
                }),
              ],
            });
        return (0, _.jsxs)("div", {
          children: [
            (0, _.jsx)(_, {
              group: _,
              session: _,
            }),
            Boolean(_)
              ? (0, _.jsx)("div", {
                  className: _().CheckedIn,
                  children: "Attendee has been checked in",
                })
              : (0, _.jsxs)("div", {
                  className: _().RegisteredUsers,
                  children: [
                    (0, _.jsx)(_._, {
                      label: (0, _.jsx)(_.Fragment, {
                        children: _(
                          "Attendee",
                          _.name || _.persona_name,
                          _.email_override,
                          _,
                        ),
                      }),
                      checked: _,
                      onChange: _,
                    }),
                    Boolean(_.guest_names?.length > 0) &&
                      (0, _.jsx)(_.Fragment, {
                        children: _.guest_names.map((_) =>
                          (0, _.jsx)(
                            _._,
                            {
                              label: (0, _.jsx)(_.Fragment, {
                                children: _("Guest", _, void 0, _.has(_)),
                              }),
                              checked: _.includes(_),
                              onChange: (_) => {
                                _((_) =>
                                  _
                                    ? __webpack_require__.includes(_)
                                      ? _
                                      : [..._, _]
                                    : __webpack_require__.filter(
                                        (_) => _ !== _,
                                      ),
                                );
                              },
                            },
                            _.group_id + "_" + _.session_id + "_" + _,
                          ),
                        ),
                      }),
                    (0, _.jsx)(_._, {
                      onClick: _,
                      children: "Check in selected people",
                    }),
                  ],
                }),
            (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  closeModal: _,
                  bIncludeSelf: _,
                  rgGuestsAttending: _,
                  fnMarkAttendance: _,
                  fnOnSuccess: () => _(!0),
                }),
              }),
            }),
          ],
        });
      }
      function _(_) {
        const {
            closeModal: _,
            bIncludeSelf: _,
            rgGuestsAttending: _,
            fnMarkAttendance: _,
            fnOnSuccess: _,
          } = _,
          _ = (0, _._)();
        return _.bLoading
          ? (0, _.jsx)(_._, {
              state: _,
              strDialogTitle: (0, _._)("#Saving"),
              closeModal: _,
            })
          : (0, _.jsx)(_._, {
              onCancel: _,
              strTitle: (0, _._)("#Button_Submit"),
              bAllowFullSize: !0,
              onOK: async () => {
                _.fnSetLoading(!0),
                  _.mutateAsync({
                    bIncludeSelf: _,
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
              children: "Mark as checked in?",
            });
      }
      function _(_) {
        const { session: _, group: _ } = _,
          {
            sDisplayTimeZone: _,
            rtime_start: _,
            rtime_end: _,
          } = (0, _._)(_.session),
          _ = (0, _._)(_, _),
          _ = (0, _._)(_, _, _);
        return _ && _
          ? (0, _.jsxs)("div", {
              className: _().SessionInfo,
              children: [
                (0, _.jsx)("div", {
                  className: _().SessionName,
                  children: _.localized_session_title[_.Bhc],
                }),
                (0, _.jsxs)("div", {
                  className: _().SessionTime,
                  children: [
                    _,
                    " @ ",
                    (0, _.jsx)("b", {
                      children: _,
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  children: (0, _.jsx)(_, {
                    desc: `Description: ${_.localized_session_description[_.Bhc] || ""}`,
                  }),
                }),
                !1,
              ],
            })
          : (0, _.jsx)("div", {
              children: "Session Infomrmation Missing",
            });
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
          _ = (0, _.sfN)(_._.LANGUAGE),
          [_, _] = (0, _.useState)("");
        return _
          ? (0, _.jsxs)("div", {
              className: _().Ctn,
              children: [
                (0, _.jsxs)("div", {
                  className: _().EventName,
                  children: [
                    (0, _.jsx)("h1", {
                      children: __webpack_require__.GetNameWithFallback(_),
                    }),
                    (0, _.jsx)("a", {
                      href: `${_._.STORE_BASE_URL}meetsteam/${_}`,
                      target: "_blank",
                      children: "See Event Details",
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  eventModel: _,
                }),
                (0, _.jsx)("div", {
                  className: _().AtendeeSearchRow,
                  children: (0, _.jsx)(_._, {
                    type: "text",
                    label: "Search for an attendee",
                    value: _,
                    bShowClearAction: !0,
                    onChange: (_) => _(_.currentTarget.value || ""),
                    placeholder: "Type name or partner or email address",
                  }),
                }),
                (0, _.jsx)(_, {
                  eventModel: _,
                  strSearch: _.toLowerCase(),
                }),
              ],
            })
          : (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
            });
      }
      function _(_) {
        const { eventModel: _, strSearch: _ } = _,
          _ = _(_, _),
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
          }, [_]),
          (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("h3", {
                children: "Attendees",
              }),
              Boolean(_)
                ? (0, _.jsx)(_, {
                    eventModel: _,
                    rgSelected: _,
                    strSearch: _,
                    onCleanSelection: () => _(null),
                  })
                : (0, _.jsx)(_.Fragment, {
                    children: _.filter((_) => !_ || _.includes(_)).map((_) =>
                      (0, _.jsx)(
                        "div",
                        {
                          className: _().AttendeeRow,
                          children: (0, _.jsx)(_._, {
                            onClick: () => _(_.get(_.toLowerCase())),
                            children: _,
                          }),
                        },
                        _,
                      ),
                    ),
                  }),
            ],
          })
        );
      }
      function _(_) {
        const {
            eventModel: _,
            rgSelected: _,
            strSearch: _,
            onCleanSelection: _,
          } = _,
          _ = (0, _._)(),
          _ = _(_, _);
        return (0, _.jsxs)("div", {
          children: [
            (0, _.jsx)("div", {
              className: _().AtendeeListButtonRow,
              children: (0, _.jsxs)(_._, {
                onClick: _,
                children: [
                  (0, _.jsx)(_.uMb, {
                    className: _().BackToListIcon,
                  }),
                  "Back to full list",
                ],
              }),
            }),
            (0, _.jsx)(_, {
              eventModel: _,
              rgUserRegs: _.today,
              strTitle: "Today " + (0, _._)(_),
            }),
            (0, _.jsx)(_, {
              eventModel: _,
              rgUserRegs: _.future,
              bHideIfEmpty: !0,
              strTitle: "Future",
            }),
            (0, _.jsx)(_, {
              eventModel: _,
              rgUserRegs: _.past,
              bHideIfEmpty: !0,
              strTitle: "Past",
            }),
          ],
        });
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
        return (0, _.jsxs)("div", {
          className: _().DisplayAllDaysCtn,
          children: [
            _ &&
              (0, _.jsx)(_._, {
                label: "Show past events",
                checked: _,
                onChange: _,
              }),
            (0, _.jsx)("div", {
              className: _().DisplayDaysCtn,
              children: Array.from(_.keys()).map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    eventModel: _,
                    date: new Date(1e3 * _),
                    sessionsAndGroups: _.get(_),
                    rgRegistrationInfo: _,
                    isToday: (0, _._)(
                      _ ? _ : new Date(1e3 * _),
                      new Date(1e3 * _),
                    ),
                  },
                  _,
                ),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const {
          eventModel: _,
          date: _,
          sessionsAndGroups: _,
          rgRegistrationInfo: _,
          isToday: _,
        } = _;
        return (0, _.jsxs)("div", {
          className: (0, _._)(_().DisplayDaySessions, !_ && _().NotToday),
          children: [
            (0, _.jsx)("div", {
              className: _().DateName,
              children: (0, _._)(_),
            }),
            (0, _.jsx)("div", {
              className: _().DisplayDaySessionsRow,
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    eventModel: _,
                    date: _,
                    registrations:
                      _.get(`${_.group.group_id}_${_.session._}`) ?? [],
                    group: _.group,
                    session: _.session,
                  },
                  `${_.group.group_id}_${_.session._}`,
                ),
              ),
            }),
          ],
        });
      }
      function _(_) {
        const {
            eventModel: _,
            date: _,
            group: _,
            session: _,
            registrations: _,
          } = _,
          _ = (0, _.sfN)(_._.LANGUAGE),
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
                _.append("sessionid", (0, _._)()),
                  _.append("gid", _),
                  _.append("meetsteam_group_id", "" + _),
                  _.append("meetsteam_session_id", "" + _),
                  _.append("capacity", "" + _);
                const _ = `${_._.STORE_BASE_URL}meetsteam/ajaxupdatecapacity`,
                  _ = await _().post(_, _, {
                    withCredentials: !0,
                  });
                return _?.data?.success == _._;
              },
            }));
        var _, _, _;
        return (0, _.jsxs)("div", {
          className: _().DisplaySession,
          children: [
            (0, _.jsxs)("div", {
              className: _().Header,
              children: [
                (0, _.jsx)("div", {
                  className: _().SessionName,
                  children:
                    _.localized_session_title[_] ??
                    _.localized_session_title[_.Bhc],
                }),
                (0, _.jsx)("div", {
                  className: _().SessionTime,
                  children: _,
                }),
              ],
            }),
            (0, _.jsx)(_, {
              title: "Registered:",
              nCount: _,
              nCapacity: _.max_capacity,
            }),
            (0, _.jsx)(_, {
              title: "Checked in:",
              nCount: _,
              nCapacity: _.max_capacity,
            }),
            _(_) >= _(_) &&
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    className: (0, _._)(_().SetCapacityButton),
                    onClick: _,
                    children: "Update capacity...",
                  }),
                  (0, _.jsx)(_._, {
                    active: _,
                    children: (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_, {
                        closeModal: _,
                        nCapacity: _.max_capacity ?? 0,
                        fnUpdateCapacity: _,
                        fnOnSuccess: () => window.location.reload(),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      function _(_) {
        const {
            closeModal: _,
            nCapacity: _,
            fnUpdateCapacity: _,
            fnOnSuccess: _,
          } = _,
          [_, _] = _.useState(__webpack_require__.toString()),
          _ = (0, _._)();
        return _.bLoading
          ? (0, _.jsx)(_._, {
              state: _,
              strDialogTitle: (0, _._)("#Saving"),
              closeModal: _,
            })
          : (0, _.jsx)(_._, {
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
              children: (0, _.jsx)(_._, {
                className: _().SetCapacityInput,
                label: "New capacity",
                type: "text",
                autoComplete: "off",
                value: _,
                onChange: (_) => _(_.currentTarget.value),
              }),
            });
      }
      function _(_) {
        const { title: _, nCount: _, nCapacity: _ } = _,
          _ = _ >= _,
          _ = Math.min((_ / _) * 100, 100),
          _ = _ > 0 ? `${_}%` : "0%";
        return (0, _.jsxs)("div", {
          className: _().CapacityCtn,
          children: [
            (0, _.jsxs)("span", {
              children: [_, " ", _, " / ", _],
            }),
            (0, _.jsx)("div", {
              className: _().CapacityBarMax,
              children: (0, _.jsx)("div", {
                className: (0, _._)(_().CapacityBarCurrent, _ ? _().Full : ""),
                style: {
                  width: _,
                },
              }),
            }),
          ],
        });
      }
      const _ = {
        MeetSteamAttendance: () => `${_._.MeetSteamRoute()}attendance`,
        MeetSteamEvent: () => `${_._.MeetSteamRoute()}:gid(\\d+)`,
        MeetSteamAttendeeList: () => `${_._.MeetSteamRoute()}attendeelist`,
      };
      function _(_) {
        return (0, _.jsxs)(_._, {
          children: [
            (0, _.jsx)(_._, {
              path: _.MeetSteamAttendance(),
              render: (_) =>
                (0, _.jsx)(_, {
                  ..._,
                }),
            }),
            (0, _.jsx)(_._, {
              path: _.MeetSteamAttendeeList(),
              render: (_) =>
                (0, _.jsx)(_, {
                  ..._,
                }),
            }),
            (0, _.jsx)(_._, {
              path: _.MeetSteamEvent(),
              render: (_) =>
                (0, _.jsx)(_, {
                  ..._,
                }),
            }),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {}),
            }),
          ],
        });
      }
    },
  },
]);
