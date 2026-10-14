(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [74268],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
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
          _ = __webpack_require__("chunkid");
        class _ extends _._ {
          async DeleteOldAnnouncement(_, _) {
            let _ = new URLSearchParams();
            _.append("sessionid", (0, _._)());
            let _ =
                _._.COMMUNITY_BASE_URL +
                "/gid/" +
                _.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                _,
              _ = await _().post(_, _);
            if (_.data.success != _._) throw _.data;
            return this.RemoveGIDFromList(_, _._ + _), _.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              _.sm_Instance ||
                ((_.sm_Instance = new _()), _.sm_Instance.Init()),
              _.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              _.sm_SummaryInstance ||
                ((_.sm_SummaryInstance = new _(!0)),
                _.sm_SummaryInstance.Init()),
              _.sm_SummaryInstance
            );
          }
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
          _ = __webpack_require__._(_);
        function _(_) {
          const {
              event: _,
              className: _,
              nOverrideStartTime: _,
              nOverrideEndTime: _,
            } = _,
            _ = _.stylesmodule
              ? {
                  ...styles,
                  ..._.stylesmodule,
                }
              : styles,
            [_, _, _] = useObserver(() => [
              _ ||
                (_.bOldAnnouncement
                  ? _.postTime
                  : _.GetStartTimeAndDateUnixSeconds()),
              _ || _.GetEndTimeAndDateUnixSeconds(),
              _.type,
            ]),
            _ = !BClanEventTypeNeedEndTime(_);
          return jsx("div", {
            className: classnames(_.EventDetailTimeInfo, _),
            children: jsx(DisplayLocalDateAndTimeRange, {
              startDateAndTime: _,
              endDateAndTime: _,
              bHideEndTime: _,
              stylesmodule: _,
            }),
          });
        }
        function _(_) {
          const {
              _: _,
              event: _,
              className: _,
              dateRangeLayout: _ = "horizontal",
            } = _,
            [_, _, _] = (0, _._)(() => [
              _.GetStartTimeAndDateUnixSeconds(),
              _.GetEndTimeAndDateUnixSeconds(),
              _.type,
            ]),
            _ = {};
          return (
            _ == "vertical" &&
              (_.ShortDateRange = _().VerticalLocalDateAndTime),
            (0, _.jsx)("div", {
              _: _,
              className: (0, _._)(_().EventDetailTimeInfo, _),
              children: (0, _.jsx)(_._, {
                startDateAndTime: _,
                endDateAndTime: _,
                bHideEndTime: !(0, _._)(_),
                stylesmodule: _,
              }),
            })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapClanReposted = new Set();
          m_mapSourceEventGIDToPostedClans = new Map();
          static s_EventRepost;
          static Get() {
            return (
              _.s_EventRepost ||
                ((_.s_EventRepost = new _()), _.s_EventRepost.Initialize()),
              _.s_EventRepost
            );
          }
          static ValidateRepostData(_) {
            const _ = _;
            return _ &&
              _.repost_clan_account_ids &&
              Array.isArray(_.repost_clan_account_ids) &&
              _.repost_clan_account_ids.length > 0
              ? typeof _.repost_clan_account_ids[0] == "number"
              : !1;
          }
          Initialize() {
            if (document.getElementById("application_config")) {
              let _ = (0, _._)("repostcontrols", "application_config");
              _.ValidateRepostData(_) &&
                _.repost_clan_account_ids.forEach((_) =>
                  this.m_mapClanReposted.add(_),
                );
            }
          }
          BCanRepostPartnerEvent() {
            return this.m_mapClanReposted.size > 0;
          }
          GetRepostClanAccountID() {
            return Array.from(this.m_mapClanReposted);
          }
          async LoadClansAlreadyRepostedTo(_, _, _) {
            if (this.m_mapSourceEventGIDToPostedClans.has(_))
              return this.m_mapSourceEventGIDToPostedClans.get(_);
            const _ = _._.STORE_BASE_URL + "events/ajaxgetrepostedevent",
              _ = {
                sessionid: (0, _._)(),
                source_clan_accountid: _.GetAccountID(),
                source_event_gid: _,
              };
            try {
              const _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _?.token,
              });
              if (_?.data?.success == _._)
                return (
                  this.m_mapSourceEventGIDToPostedClans.set(
                    _,
                    _.data.repost_clan_accountid || [],
                  ),
                  _.data.repost_clan_accountid
                );
              console.error(
                "GetRepostClanAccountID: failed " +
                  _?.data?.success +
                  " and msg: " +
                  _?.data?.msg,
              );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "GetRepostClanAccountID: fail repost with " + _.strErrorMsg,
                _,
              );
            }
            return new Array();
          }
          async RepostEvent(_, _, _, _, _) {
            const _ = _._.STORE_BASE_URL + "events/ajaxrepostevent",
              _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("source_clan_accountid", "" + _.GetAccountID()),
              _.append("source_event_gid", "" + _),
              _.append("repost_clan_accountid", "" + _.GetAccountID()),
              _.append("add", "" + _);
            try {
              let _ = await _().post(_, _, {
                withCredentials: !0,
                cancelToken: _?.token,
              });
              if (_?.data?.success == _._ && _.data.repost_gid) {
                this.m_mapSourceEventGIDToPostedClans.has(_) ||
                  this.m_mapSourceEventGIDToPostedClans.set(_, []);
                const _ = this.m_mapSourceEventGIDToPostedClans
                  .get(_)
                  .findIndex((_) => _.GetAccountID() == _);
                return (
                  _ && _ == -1
                    ? this.m_mapSourceEventGIDToPostedClans
                        .get(_)
                        .push(_.GetAccountID())
                    : !_ &&
                      _ !== -1 &&
                      this.m_mapSourceEventGIDToPostedClans.get(_).splice(_, 1),
                  _.data.repost_gid
                );
              } else
                console.error(
                  "RepostEvent: failed " +
                    _?.data?.success +
                    " and msg: " +
                    _?.data?.msg,
                );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "RepostEvent: fail repost with " + _.strErrorMsg,
                _,
              );
            }
            return null;
          }
        };
        _([_._], _.prototype, "m_mapClanReposted", 2);
        let _ = _;
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.lazy(() =>
          __webpack_require__
            ._("chunkid")
            .then(__webpack_require__.bind(__webpack_require__, "chunkid"))
            .then((_) => ({
              default: _.ShareEventDialogBody,
            })),
        );
        function _(_) {
          const { bActive: _, ..._ } = _;
          return (0, _.jsx)(_._, {
            active: _,
            children: (0, _.jsx)(_.Suspense, {
              fallback: null,
              children: (0, _.jsx)(_, {
                ..._,
              }),
            }),
          });
        }
        function _(_) {
          const { eventModel: _, emoticonStore: _ } = _,
            [_, _, _] = (0, _._)(),
            _ = (0, _._)(_);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                focusable: !0,
                className: (0, _._)(_().Button, _().Icon, _().DiscussionButton),
                onActivate: _,
                children: [
                  (0, _.jsx)(_.SYj, {
                    className: _().ShareIcon,
                  }),
                  (0, _.jsx)("span", {
                    className: _().DiscussionButtonText,
                    children: (0, _._)("#Button_Share"),
                  }),
                ],
              }),
              (0, _.jsx)(_, {
                eventModel: _,
                strEventLink: _ ?? "",
                bActive: _,
                closeModal: _,
                emoticonStore: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          return ["GetClanAnnouncementVoteForUser", _, _];
        }
        function _(_) {
          return _ == "up" ? 1 : _ == "down" ? -1 : 0;
        }
        function _(_, _, _, _) {
          const _ = (0, _._)(),
            _ = _(_, _._.accountid),
            { data: _ } = (0, _._)({
              queryKey: _,
              queryFn: async () => await _.GetMyEventVote(_),
              initialData: _?.initialVote,
              enabled: !!_ && !!_._.accountid && (_?.bAsk ?? !0),
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            }),
            { mutate: _ } = (0, _._)({
              mutationFn: async (_) => {
                const _ = await _.RateEvent(_, _, _);
                if (_ != _._)
                  throw new Error(`RateClanAnnouncement failed with ${_}`);
              },
              onMutate: (_) => _.setQueryData(_, _),
              onError: () =>
                _.invalidateQueries({
                  queryKey: _,
                }),
            });
          return {
            myVote: _,
            Vote: (_) => {
              !_ || _ == _ || _(_);
            },
          };
        }
        function _(_, _) {
          if (_.length == 0) return;
          const _ = _ ?? GetEventStateQueryClient("SetMyEventVotes");
          _ &&
            _.forEach((_) =>
              _.setQueryData(
                _(_.gidAnnouncement, UserConfig.accountid),
                _.vote,
              ),
            );
        }
        const _ = "partnereventaction/myvote",
          _ = "partnereventaction/rateevent";
        async function _(_) {
          const _ = _._.STORE_BASE_URL + _ + "?gid=" + encodeURIComponent(_),
            _ = await fetch(_, {
              credentials: "include",
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          return (await _.json()).vote ?? null;
        }
        async function _(_, _, _) {
          const _ = _._.STORE_BASE_URL + _,
            _ = {
              gid: _,
              clanaccountid: String(_),
              voteup: _ == "up" ? "1" : "0",
            },
            _ = await fetch(_, {
              method: "POST",
              credentials: "include",
              body: new URLSearchParams(_),
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          return (await _.json()).success ?? _._;
        }
        const _ = {
          GetMyEventVote: _,
          RateEvent: _,
        };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _;
        function _(_, _) {
          const _ = _?.AnnouncementGID,
            _ = _?.clanSteamID.GetAccountID() ?? 0,
            _ = _(),
            { myVote: _, Vote: _ } = _(_, _, _, {
              initialVote: _(_),
              ..._,
            });
          return {
            myVote: _,
            Vote: (_) => {
              !_ ||
                !_ ||
                _ == _ ||
                (_ && _.UpdateVoteCount(_, -1), _.UpdateVoteCount(_, 1), _(_));
            },
          };
        }
        function _() {
          const { useActiveCMInterface: _ } = (0, _._)(),
            _ = (0, _._)(),
            _ = !!_;
          return _.useMemo(
            () =>
              _
                ? {
                    GetMyEventVote: async (_) => await _(_, _),
                    RateEvent: async (_, _, _) => await _(_, _, _, _),
                  }
                : _,
            [_, _],
          );
        }
        async function _(_, _) {
          if (!_) return null;
          const _ = await _._.GetClanAnnouncementVoteForUser(_, {
            announcementid: _,
          });
          return _.BSuccess()
            ? _.Body().voted_up()
              ? "up"
              : _.Body().voted_down()
                ? "down"
                : null
            : null;
        }
        async function _(_, _, _, _) {
          return _
            ? (
                await _._.RateClanAnnouncement(_, {
                  announcementid: _,
                  vote_up: _ == "up",
                  clan_accountid: _,
                })
              ).GetEResult()
            : _._;
        }
        function _(_) {
          if (typeof window > "u") {
            (0, _._)(!1, "GetVoteFromPageConfig is browser only");
            return;
          }
          return (
            _ ||
              ((_ = new Map()),
              (0, _._)("uservotes", "application_config")?.forEach((_) => {
                _.clanAnnouncementGID &&
                  _.set(
                    _.clanAnnouncementGID,
                    _.voted_up ? "up" : _.voted_down ? "down" : null,
                  );
              })),
            _ ? _.get(_) : void 0
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const { eventModel: _ } = _,
            [_, _] = (0, _.useState)(!0),
            [_, _] = (0, _.useState)(new Set()),
            [_, _] = (0, _.useState)(new Set()),
            [_, _] = (0, _.useState)(new Set()),
            [_, _] = (0, _.useState)(null),
            [_, _] = (0, _.useState)(null),
            _ = (0, _.useRef)(null);
          (0, _.useEffect)(
            () => (
              _ &&
                (async () => {
                  const _ = _().CancelToken.source();
                  _.current = _.cancel;
                  const _ = _.Get().LoadClansAlreadyRepostedTo(
                    _.clanSteamID,
                    _.GID,
                    _,
                  );
                  _.then((_) => {
                    const _ = new Set();
                    _.forEach((_) => _.add(_)), _(_);
                  });
                  let _ = new Array();
                  _.push(_),
                    _.Get()
                      .GetRepostClanAccountID()
                      .forEach((_) => {
                        const _ = _._.InitFromClanID(_);
                        _.push(_._.LoadClanInfoForClanSteamID(_));
                      }),
                    await Promise.all(_),
                    _(!1);
                })(),
              () => _.current && _.current()
            ),
            [_, _.GID, _.clanSteamID],
          );
          const _ = new Array();
          return (
            _.Get()
              .GetRepostClanAccountID()
              .forEach((_) => {
                const _ = _._.GetClanInfoByClanAccountID(_);
                if (_ && _ != _.clanSteamID.GetAccountID()) {
                  const _ = _.has(_),
                    _ = _.has(_) || (_ && !_.has(_));
                  _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        label: _
                          ? (0, _._)(
                              "#EventRepost_Dialog_Existing",
                              _.group_name,
                            )
                          : _.group_name,
                        checked: _,
                        disabled: _ !== null,
                        onChange: (_) => {
                          _.has(_)
                            ? (_ ? _.delete(_) : _.add(_), _(new Set(_)))
                            : (_ ? _.add(_) : _.delete(_), _(new Set(_)));
                        },
                      },
                      "checkbox" + _,
                    ),
                  );
                }
              }),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                onEscKeypress: () => _.closeModal && _.closeModal(),
                children: (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#EventRepost_Dialog_Title"),
                    }),
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsx)(_._, {
                          children: (0, _._)("#EventRepost_Dialog_Desc"),
                        }),
                        _
                          ? (0, _.jsx)(_._, {
                              string: (0, _._)("#Loading"),
                            })
                          : (0, _.jsx)("div", {
                              children: _,
                            }),
                        !!(_.size || _.size) &&
                          (0, _.jsxs)("div", {
                            children: [
                              (0, _.jsx)("span", {
                                children: (0, _._)(
                                  "#EventRepost_Dialog_Action_Desc",
                                ),
                              }),
                              (0, _.jsxs)("ul", {
                                children: [
                                  !!_.size &&
                                    (0, _.jsx)("li", {
                                      children: (0, _._)(
                                        "#EventRepost_Dialog_Action_Add",
                                        _.size,
                                      ),
                                    }),
                                  !!_.size &&
                                    (0, _.jsx)("li", {
                                      children: (0, _._)(
                                        "#EventRepost_Dialog_Action_Remove",
                                        _.size,
                                      ),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        onCancel: () => _.closeModal && _.closeModal(),
                        strOKText: (0, _._)("#EventRepost_Dialog_OK"),
                        bOKDisabled:
                          (_.size == 0 && _.size == 0) ||
                          _ !== null ||
                          _ !== null,
                        onOK: async () => {
                          _.current && _.current();
                          const _ = _().CancelToken.source();
                          _.current = _.cancel;
                          const _ = _.size + _.size;
                          let _ = 1;
                          _((0, _._)("#EventRepost_Dialog_Progress", _, _));
                          for (const _ of Array.from(_)) {
                            const _ = _._.InitFromClanID(_);
                            if (
                              await _.Get().RepostEvent(
                                _.clanSteamID,
                                _.GID,
                                _,
                                !0,
                                _,
                              )
                            )
                              _(
                                (0, _._)(
                                  "#EventRepost_Dialog_Progress",
                                  ++_,
                                  _,
                                ),
                              );
                            else {
                              _((0, _._)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          for (const _ of Array.from(_)) {
                            const _ = _._.InitFromClanID(_);
                            if (
                              await _.Get().RepostEvent(
                                _.clanSteamID,
                                _.GID,
                                _,
                                !1,
                                _,
                              )
                            )
                              _(
                                (0, _._)(
                                  "#EventRepost_Dialog_Progress",
                                  ++_,
                                  _,
                                ),
                              );
                            else {
                              _((0, _._)("#EventRepost_Dialog_ResultFail"));
                              return;
                            }
                          }
                          _((0, _._)("#EventRepost_Dialog_ResultSuccess"));
                        },
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            nVoteCount: _,
            nCommentCount: _,
            myVote: _,
            onVote: _,
            strDiscussionURL: _,
            onDiscussionUnavailable: _,
            bShowDiscussion: _,
            repost: _,
            share: _,
          } = _;
          return (0, _.jsxs)(_._, {
            className: _().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, _.jsxs)("div", {
                className: _().InnerContainer,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().VoteContainer,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().VoteCount,
                        children: [
                          (0, _.jsx)(_.bfp, {
                            className: _().VoteUpStaticIcon,
                          }),
                          (0, _._)(_),
                        ],
                      }),
                      (0, _.jsxs)(_._, {
                        focusable: !0,
                        className: (0, _._)(
                          _().Button,
                          _().Icon,
                          _().DiscussionButton,
                          _ == "up" ? _().VoteButtonSelected : "",
                        ),
                        onActivate: () => _("up"),
                        children: [
                          (0, _.jsx)(_.bfp, {
                            className:
                              _ == "up"
                                ? _().VoteUpSelectedIcon
                                : _().VoteUpIcon,
                          }),
                          (0, _.jsx)("span", {
                            className: _().DiscussionButtonText,
                            children: (0, _._)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        focusable: !0,
                        className: (0, _._)(
                          _().Button,
                          _().Icon,
                          _().DiscussionButton,
                          _ == "down" ? _().VoteButtonSelected : "",
                        ),
                        onActivate: () => _("down"),
                        "aria-label": (0, _._)("#Button_RateDown"),
                        children: (0, _.jsx)(_.bfp, {
                          className:
                            _ == "down"
                              ? _().VoteDownSelectedIcon
                              : _().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      commentCount: _,
                      discussionURL: _,
                      gotoDiscussion: _,
                    }),
                  _,
                ],
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().ShareContainer,
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const { commentCount: _, discussionURL: _, gotoDiscussion: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().DiscussContainer,
            children: [
              (0, _.jsxs)("div", {
                className: _().DiscussionCount,
                children: [(0, _.jsx)(_.ROZ, {}), (0, _._)(_)],
              }),
              _ &&
                (0, _.jsx)(_._, {
                  href: (0, _._)(_),
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _().Button,
                      _().Icon,
                      _().DiscussionButton,
                    ),
                    children: [
                      (0, _.jsx)(_.ROZ, {}),
                      (0, _.jsx)("span", {
                        className: _().DiscussionButtonText,
                        children: (0, _._)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !_ &&
                (0, _.jsxs)(_._, {
                  focusable: !0,
                  onActivate: _,
                  className: (0, _._)(
                    _().Button,
                    _().Icon,
                    _().DiscussionButton,
                  ),
                  children: [
                    (0, _.jsx)(_.ROZ, {}),
                    (0, _.jsx)("span", {
                      className: _().DiscussionButtonText,
                      children: (0, _._)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        function _() {
          return _._.logged_in
            ? _._.is_limited
              ? ((0, _._)((0, _.jsx)(_._, {}), window), !1)
              : !0
            : (_._.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, _._)(
                    (0, _.jsx)(_._, {
                      strTitle: (0, _._)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, _._)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                      onOK: () => (0, _._)(),
                    }),
                    window,
                  ),
              !1);
        }
        function _(_) {
          const { eventModel: _, emoticonStore: _ } = _,
            _ = (0, _._)(),
            { myVote: _, Vote: _ } = _(_),
            _ = (_) => {
              _() && _ !== void 0 && _(_);
            },
            [, _] = (0, _._)(_.clanSteamID.GetAccountID()),
            _ = (_) => {
              (0, _._)(
                (0, _.jsx)(_._, {
                  strDescription: (0, _._)(
                    "#EventDisplay_Share_CommentMigrationInProcess",
                  ),
                }),
                (0, _._)(_),
              );
            },
            _ = (_) => {
              (0, _._)(
                (0, _.jsx)(_, {
                  eventModel: _,
                }),
                (0, _._)(_),
              );
            },
            [_, _, _, _] = (0, _._)(() => [
              (0, _._)(_.nVotesUp - _.nVotesDown, 0, Number.MAX_SAFE_INTEGER),
              (0, _._)(_.GetDiscussionURL(_?.vanity_url)),
              _.BIsUnlistedEvent(),
              _.nCommentCount,
            ]),
            _ = (0, _._)(),
            _ = _._.logged_in && _.Get().BCanRepostPartnerEvent();
          return (0, _.jsx)(_, {
            nVoteCount: _,
            nCommentCount: _,
            myVote: _ ?? void 0,
            onVote: _,
            strDiscussionURL: _,
            onDiscussionUnavailable: _,
            bShowDiscussion: !_ && !_,
            repost:
              _ &&
              (0, _.jsx)("div", {
                className: _().VoteContainer,
                children: (0, _.jsx)(_._, {
                  focusable: !0,
                  className: (0, _._)(
                    _().Button,
                    _().Icon,
                    _().DiscussionButton,
                    _ == "down" ? _().VoteButtonSelected : "",
                  ),
                  onActivate: _,
                  children: (0, _._)("#EventRepost_Dialog_Title"),
                }),
              }),
            share:
              !_ &&
              (0, _.jsx)(_, {
                eventModel: _,
                emoticonStore: _,
              }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = _()("2026-11-23T09:30:00-08:00").unix(),
          _ = _()("2026-11-30T10:00:00-08:00").unix(),
          _ = "store/promo/steamawards2025/";
        function _() {
          return 2025;
        }
        function _(_) {
          return `${Config.MEDIA_CDN_URL}store/promo/${_}`;
        }
        const _ = "#173471",
          _ = "#ee6c5d",
          _ = "#FFFFFF",
          _ = _()("2026-12-17T09:30:00-08:00").unix(),
          _ = _()("2027-01-02T10:00:00-08:00").unix(),
          _ = {
            2023: 2640290,
            2024: 3334340,
            2025: 4147080,
            2026: 5350740,
          },
          _ = 4147080,
          _ = 2215130;
        function _(_) {
          switch (_) {
            case 2023:
            case 2024:
            case 2025:
              return !0;
            case 2026:
              return !1;
          }
          return !1;
        }
        function _(_) {
          return _ >= _ && _ < _;
        }
        function _(_) {
          return _ >= _;
        }
        function _(_, _, _, _) {
          const _ = _(_),
            _ = _(_, _),
            _ = _(_, _);
          if (!(!_.length && !_.length))
            return {
              nomination: _.length
                ? {
                    rgCategories: _,
                    bNominationsLive: _,
                  }
                : void 0,
              vote: _.length
                ? {
                    rgCategories: _,
                    bNominationsLive: _,
                  }
                : void 0,
            };
        }
        function _(_) {
          return _ >= _ && _ < _;
        }
        function _(_) {
          return _ >= _;
        }
        function _(_) {
          return _ > 0;
        }
        function _(_, _) {
          const _ = [];
          for (const _ of _.filter(_)) {
            const _ = _.find((_) => _.voteid == _);
            _?.localization?.title &&
              _.push({
                eCategoryID: _,
                strTitle: _.localization.title,
                strDescription: _.localization.award_description ?? "",
                bLaborOfLove: _.flag == _._._,
              });
          }
          return _;
        }
        function _(_) {
          return ["SteamAwards.GetUserNominations", _];
        }
        function _(_) {
          return ["StoreSales.GetUserVotes", _, _];
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _(_._.accountid),
            { data: _, isPending: _ } = (0, _._)({
              queryKey: _,
              queryFn: async () => await _.GetMySteamAwardNominations(),
              enabled: !!_._.accountid,
            }),
            { mutate: _ } = (0, _._)({
              mutationFn: async (_) => {
                const _ = await _.NominateForSteamAward(_, _);
                if (_ != _._)
                  throw new Error(`SteamAwards.Nominate failed with ${_}`);
              },
              onMutate: (_) =>
                _.setQueryData(_, (_) => [
                  ...(_ ?? []).filter((_) => _.category_id != _),
                  {
                    category_id: _,
                    appid: _,
                  },
                ]),
              onError: () =>
                _.invalidateQueries({
                  queryKey: _,
                }),
            });
          return {
            unNominatedAppID: _?.find((_) => _.category_id == _)?.appid,
            bAnswered: _ != null || !_._.accountid || !_,
            Nominate: _,
          };
        }
        function _(_, _) {
          const _ = (0, _._)(),
            _ = _(_._.accountid),
            { data: _, isPending: _ } = (0, _._)({
              queryKey: _,
              queryFn: async () => await _.GetMySteamAwardVotes(),
              enabled: !!_._.accountid,
            }),
            { mutate: _ } = (0, _._)({
              mutationFn: async (_) => {
                const _ = await _.SetSteamAwardVote(_, _);
                if (_ != _._)
                  throw new Error(`StoreSales.SetVote failed with ${_}`);
              },
              onMutate: (_) =>
                _.setQueryData(_, (_) => [
                  ...(_ ?? []).filter((_) => _.voteid != _),
                  {
                    voteid: _,
                    appid: _,
                  },
                ]),
              onError: () =>
                _.invalidateQueries({
                  queryKey: _,
                }),
            });
          return {
            unVotedAppID: _?.find((_) => _.voteid == _)?.appid,
            bAnswered: _ != null || !_._.accountid || !_,
            Vote: _,
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return `${_._.MEDIA_CDN_URL}${_}${_}`;
        }
        function _(_) {
          const {
              strMainTitle: _,
              subtitle: _,
              headerText: _,
              headerContent: _,
              children: _,
              footer: _,
            } = _,
            _ = {
              backgroundColor: _,
              backgroundImage: `url( ${_("header_notrophy.webp")} )`,
              color: _,
            };
          return (0, _.jsxs)("div", {
            style: _,
            className: (0, _._)(_().SteamAwardContainer, _().PartnerEventFont),
            children: [
              (0, _.jsxs)("div", {
                className: _().SteamAwardHeader,
                children: [
                  (0, _.jsx)("img", {
                    className: _().SteamAwardHeaderImage,
                    src: _("trophy_220.png?v=1"),
                    alt: "",
                  }),
                  (0, _.jsxs)("div", {
                    className: _().SteamAwardMainCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().SteamAwardMainTitle,
                        children: _,
                      }),
                      _,
                      (0, _.jsx)("div", {
                        className: _().SteamAwardHeaderText,
                        children: _,
                      }),
                      _,
                    ],
                  }),
                ],
              }),
              _,
              !!_ &&
                (0, _.jsx)("div", {
                  className: _().SteamAwardLinkToNominationPage,
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          return `${_._.STORE_BASE_URL}steamawards/${_ ? "nominations/" : ""}`;
        }
        function _() {
          return (0, _.jsx)(_._, {
            className: _().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: _._.Localize("#Loading"),
          });
        }
        function _(_) {
          const { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            [_, _, _] = (0, _._)();
          return {
            elDialogElement: (0, _.jsxs)(_.Fragment, {
              children: [
                _,
                (0, _.jsx)(_._, {
                  active: _,
                  children: (0, _.jsx)(_, {
                    bVote: _,
                    closeModal: _,
                  }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              _._.logged_in ? (_._.is_limited ? (_(), !1) : !0) : (_(), !1),
          };
        }
        function _(_) {
          const { bVote: _, closeModal: _ } = _;
          return (0, _.jsx)(_._, {
            strTitle: _._.Localize("#Informational_Message"),
            onCancel: _,
            onOK: _,
            bAlertDialog: !0,
            children: (0, _.jsx)("div", {
              children: _._.LocalizeReact(
                _
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, _.jsx)("a", {
                  href: `${_._.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: _._.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: _._.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function _(_) {
          const {
              strLocTokenInfix: _,
              unCurrentAppID: _,
              unNewAppID: _,
              fnOnConfirm: _,
              closeModal: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = _ ? (0, _._)(_, "small_capsule") : void 0,
            _ = _ ? (0, _._)(_, "small_capsule") : void 0;
          return (0, _.jsx)(_._, {
            modalClassName: _().SteamAwardConflictModal,
            strTitle: _._.Localize(
              _ == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: _,
            onOK: _,
            onCancel: _,
            children: (0, _.jsxs)("div", {
              className: _().ConflictBody,
              children: [
                _._.LocalizeReact(
                  _ == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, _.jsx)("span", {
                    className: _().SteamAwardModalGameTitle,
                    children: _?.name,
                  }),
                  (0, _.jsx)("span", {
                    className: _().SteamAwardModalGameTitle,
                    children: _?.name,
                  }),
                ),
                _ && _
                  ? (0, _.jsxs)("div", {
                      className: _().NominationSwitchCtn,
                      children: [
                        (0, _.jsx)("img", {
                          src: _,
                          alt: "",
                        }),
                        "\u2192",
                        (0, _.jsx)("img", {
                          src: _,
                          alt: "",
                        }),
                      ],
                    })
                  : (0, _.jsx)(_._, {
                      size: "small",
                      position: "center",
                      string: _._.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        function _(_) {
          const { unAppID: _, widget: _, actions: _, bNominationsOpen: _ } = _,
            _ = _.rgCategories[0],
            { data: _ } = (0, _._)({
              appid: _,
            }),
            {
              unNominatedAppID: _,
              bAnswered: _,
              Nominate: _,
            } = _(_.eCategoryID, _),
            { elDialogElement: _, BCanTakeAction: _ } = _(!1),
            [_, _, _] = (0, _._)();
          if (!_.bNominationsLive) return null;
          if (!_) return (0, _.jsx)(_, {});
          const _ = (0, _._)(_(!0)),
            _ = _ == _,
            _ = _.rgCategories.length == 1,
            _ = _ && !_.bLaborOfLove,
            _ = (_) => {
              if (!(!_ || !_())) {
                if (_ && _ != _) {
                  _();
                  return;
                }
                _(_);
              }
            };
          return (0, _.jsxs)(_, {
            strMainTitle: _._.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, _.jsxs)("div", {
              className: _().SteamAwardSubTitle,
              children: [
                _
                  ? _._.Localize("#SteamAwards_EventCallToAction")
                  : _._.Localize("#SteamAwards_EventVotingDateTeaser", _()),
                _ &&
                  (0, _.jsxs)("a", {
                    href: _,
                    className: _().SteamAwardLearnMore,
                    children: [
                      "(",
                      _._.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: _
              ? _
                ? _._.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    _?.name ?? "",
                  )
                : (0, _.jsx)("a", {
                    className: _().LinkText,
                    href: _,
                    children: _._.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      _?.name ?? "",
                    ),
                  })
              : _._.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              _ &&
              (0, _.jsx)("a", {
                href: _,
                children: _._.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(_ && (_ || _)) &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().SteamAwardNominationWidget,
                    _().SteamAwardVoteWidget,
                  ),
                  children: (0, _.jsxs)("div", {
                    className: _().NominateCtn,
                    children: [
                      (0, _.jsx)("div", {
                        style: {
                          background: _,
                        },
                        className: (0, _._)(
                          _().SteamAwardNominateButton,
                          _ && _().Nominated,
                        ),
                        children: (0, _.jsx)(_._, {
                          controlled: !0,
                          className: (0, _._)(
                            _().SteamAwardVoteCheckBox,
                            _ && _().Nominated,
                          ),
                          checked: _,
                          onChange: _,
                          disabled: _,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, _.jsx)("div", {
                            className: _().SteamAwardCategoryTitle,
                            children: _._.Localize(
                              _
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              _.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: _().SteamAwardCategoryDesc,
                        children: _.strDescription,
                      }),
                    ],
                  }),
                }),
              _,
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: _,
                  unNewAppID: _,
                  fnOnConfirm: () => _(_),
                  closeModal: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
              unAppID: _,
              widget: _,
              actions: _,
              bVotesOpen: _,
              bHideCategoryDescriptions: _,
            } = _,
            { data: _ } = (0, _._)({
              appid: _,
            }),
            _ = (0, _._)(_(!1));
          return (0, _.jsx)(_, {
            strMainTitle: _._.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: _
              ? _._.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  _?.name ?? "",
                )
              : (0, _.jsx)("a", {
                  href: _,
                  className: _().LinkText,
                  children: _._.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, _.jsx)("div", {
              className: _().AwardCategoriesCtn,
              children: _.rgCategories.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    unAppID: _,
                    category: _,
                    actions: _,
                    bVotesOpen: _,
                    bHideDescription: _,
                  },
                  _.eCategoryID,
                ),
              ),
            }),
            footer: (0, _.jsx)("a", {
              href: _,
              children: _._.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function _(_) {
          const {
              unAppID: _,
              category: _,
              actions: _,
              bVotesOpen: _,
              bHideDescription: _,
            } = _,
            { unVotedAppID: _, bAnswered: _, Vote: _ } = _(_.eCategoryID, _),
            { elDialogElement: _, BCanTakeAction: _ } = _(!0),
            [_, _, _] = (0, _._)(),
            _ = _ == _;
          if (!_ && !_) return null;
          const _ = () => {
            if (!(!_ || !_())) {
              if (_ && _ != _) {
                _();
                return;
              }
              _(_);
            }
          };
          return (0, _.jsxs)("div", {
            style: {
              backgroundColor: _,
            },
            className: _().SteamAwardVoteWidget,
            children: [
              (0, _.jsxs)("div", {
                className: _().SteamAwardVoteButtonArea,
                children: [
                  (0, _.jsx)("div", {
                    className: (0, _._)(
                      _().SteamAwardCategoryTitle,
                      _().VotingTitle,
                    ),
                    children: _.strTitle,
                  }),
                  !_ &&
                    (0, _.jsx)("div", {
                      className: _().SteamAwardCategoryDesc,
                      children: _.strDescription,
                    }),
                  _
                    ? (0, _.jsx)("button", {
                        className: _().SteamAwardVoteButtonSubmitted,
                        children: (0, _.jsx)("span", {
                          className: _().SteamAwardVoteButtonText,
                          children: _._.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, _.jsx)("button", {
                        className: _().SteamAwardVoteButton,
                        onClick: _,
                        children: (0, _.jsx)("span", {
                          className: _().SteamAwardVoteButtonText,
                          children: _._.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              _,
              (0, _.jsx)(_._, {
                active: _,
                children: (0, _.jsx)(_, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: _,
                  unNewAppID: _,
                  fnOnConfirm: () => _(_),
                  closeModal: _,
                }),
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 2640290,
          _ = 3334340,
          _ = null,
          _ = 2215130;
        let _;
        function _() {
          return (
            _ || (_ = (0, _._)("steam_awards_config", "application_config")), _
          );
        }
        const _ = _.createContext(null);
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [`SteamAwardDefs_${_}`],
            queryFn: async () => {
              const _ = _._.Init(_._);
              return (
                _.Body().set_sale_appid(_),
                _.Body().set_language(_._.LANGUAGE),
                (await _._.GetVoteDefinitions(_, _)).Body().toObject()
              );
            },
            initialData: () => _()?.definitions,
            enabled: _ > 0,
          });
        }
        async function _(_) {
          const _ = _._.Init(_._);
          return (
            (await _._.GetUserNominations(_, _)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function _() {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardNominations_${UserConfig.accountid}`],
            queryFn: () => _(_),
            initialData: () => _()?.user_nominations?.nominations,
            enabled: UserConfig.logged_in,
          });
        }
        function _(_) {
          const _ = _();
          return _.isLoading
            ? {
                bLoadingNominationForCategory: !0,
              }
            : {
                currentNomination: _.data?.find((_) => _.category_id == _),
                bLoadingNominationForCategory: !1,
              };
        }
        function _() {
          return [`SteamAwardBadgeProgress_${UserConfig.accountid}`];
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                CPlayer_GetCommunityBadgeProgress_Request,
              );
              return (
                _.Body().set_badgeid(_),
                _.Body().set_steamid(UserConfig.steamid),
                (await PlayerService.GetCommunityBadgeProgress(_, _))
                  .Body()
                  .toObject()
              );
            },
            initialData: () => _()?.badge_progress,
            enabled: UserConfig.logged_in,
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardSuggestions_${_}`],
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                CSteamAwards_GetNominationRecommendations_Request,
              );
              return (
                _.Body().set_category_id(_),
                (await SteamAwardsService.GetNominationRecommendations(_, _))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function _(_, _) {
          _.setQueryData([`SteamAwardNominations_${UserConfig.accountid}`], _);
        }
        async function _(_, _, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_category_id(_),
            _.Body().set_source(_),
            _.Body().set_nominated_id(_);
          const _ = await _._.Nominate(_, _);
          return (
            _.BSuccess() ||
              console.warn(`Failed to nominate app: ${_.GetEResult()}`),
            [_.GetEResult(), _.Body().toObject()]
          );
        }
        function _(_, _, _, _, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: () => _(_, _, _, _),
            onSuccess: ([_, _]) => {
              _ == k_EResultOK
                ? (_(_, _.nominations),
                  window.setTimeout(
                    () =>
                      _.invalidateQueries({
                        queryKey: _(),
                      }),
                    1e3,
                  ),
                  _ && _())
                : _ && _(_);
            },
            onError: () => {
              _ && _();
            },
          });
        }
        async function _(_, _, _) {
          let _ = {
            _: Config.COUNTRY,
            _: Config.LANGUAGE,
            realm: ESteamRealm.k_ESteamRealmGlobal,
            origin: self.origin,
            _: "jsonfull",
            term: _.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: CDynamicUserStore.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors:
              CDynamicUserStore.Get().ExcludedContentDescriptor,
            excluded_apps: _,
          };
          _.release_date_max &&
            (_.release_date_max = new Date(
              _.release_date_max * 1e3,
            ).toISOString()),
            _.release_date_min &&
              (_.release_date_min = new Date(
                _.release_date_min * 1e3,
              ).toISOString()),
            _.flag == EVoteDefinitionFlag.k_EVoteDefinitionFlag_OnlyVR &&
              (_.vrsupport = 1),
            _.flag == EVoteDefinitionFlag.k_EVoteDefinitionFlag_SteamDeck &&
              (_.steam_deck_compat_categories = [
                ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Unknown,
                ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Playable,
                ESteamDeckCompatibilityCategory.k_ESteamDeckCompatibilityCategory_Verified,
              ]);
          const _ = `${Config.STORE_BASE_URL}search/suggest`;
          return (
            (
              await axios.get(_, {
                params: _,
                withCredentials: !0,
              })
            ).data ?? []
          );
        }
        function _(_, _, _) {
          return useQuery({
            queryKey: [_, _.voteid, _],
            queryFn: () => _(_, _, _),
            staleTime: 1 / 0,
          });
        }
        function _() {
          const _ = _();
          return _.data ? _.data.map((_) => _.appid) : [];
        }
        async function _(_, _) {
          const _ = CProtoBufMsg.Init(
            CSteamAwards_GetNominationShareLink_Request,
          );
          _.Body().set_generate_new(_);
          const _ = await SteamAwardsService.GetNominationShareLink(_, _);
          return (
            _.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${_.GetEResult()}`,
              ),
            [_.GetEResult(), _.Body().toObject()]
          );
        }
        function _() {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: [`GetNominationShareLink_${UserConfig.accountid}`],
            queryFn: async () => _(_, !1),
            initialData: () => [k_EResultOK, _()?.share_link],
            staleTime: 1 / 0,
            enabled: UserConfig.logged_in,
          });
        }
        function _() {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: () => _(_, !0),
            onSuccess: ([_, _]) => {
              _ == k_EResultOK &&
                _.setQueryData(
                  [`GetNominationShareLink_${UserConfig.accountid}`],
                  [_, _],
                );
            },
          });
        }
        async function _(_, _, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_voteid(_),
            _.Body().set_appid(_),
            _.Body().set_sale_appid(_);
          const _ = await _._.SetVote(_, _);
          return (
            _.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${_}): ${_.GetEResult()}`,
              ),
            [_.GetEResult(), _.Body().toObject()]
          );
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: () => _(_, _, _, _),
            onSuccess: ([_, _]) => {
              _ == k_EResultOK &&
                _.setQueryData(
                  [`SteamAwardUserVotes_${UserConfig.accountid}`],
                  _.user_votes,
                );
            },
          });
        }
        async function _(_, _) {
          const _ = _._.Init(_._);
          _.Body().set_sale_appid(_);
          const _ = await _._.GetUserVotes(_, _);
          return (
            _.BSuccess() ||
              console.warn(`Failed to get votes for user: ${_.GetEResult()}`),
            _.Body().toObject()?.user_votes
          );
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardUserVotes_${UserConfig.accountid}`],
            queryFn: () => _(_, _),
            initialData: () => _()?.user_votes,
            enabled: UserConfig.logged_in,
          });
        }
        function _(_, _) {
          const _ = _(_);
          return useMemo(
            () => _.data?.find((_) => _.voteid == _)?.appid,
            [_, _.data],
          );
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: [`SteamAwardItemDefs_${_}`],
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                CQuest_GetCommunityItemDefinitions_Request,
              );
              return (
                _.Body().set_appid(_),
                _.Body().set_language(Config.LANGUAGE),
                (await QuestService.GetCommunityItemDefinitions(_, _))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => _()?.item_definitions,
          });
        }
        function _(_, _) {
          const _ = _(_),
            _ = _(_);
          if (!_.data || !_.data) return null;
          const _ = _.data.votes.find((_) => _.voteid == _);
          return _.data.item_definitions?.find(
            (_) => _.item_type == _.item_type,
          );
        }
        function _() {
          return React.useContext(_).yearStyles;
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return UserConfig.logged_in
            ? UserConfig.is_limited
              ? (ShowModalDialog(
                  jsx(LimitAccountFeatureNotSupportedDialog, {
                    strTokenOverride: _
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : (ShowModalDialog(
                jsx(GenericConfirmDialog, {
                  strTitle: Localize("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: Localize(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: Localize("#MobileLogin_SignIn"),
                  onOK: StoreRedirectLogin,
                }),
                window,
              ),
              !1);
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => _(_),
              NominateForSteamAward: async (_, _) => {
                if (_) return _._;
                const [_] = await _(_, _, _, _._._);
                return _;
              },
              GetMySteamAwardVotes: () => _(_, _),
              SetSteamAwardVote: async (_, _) => {
                if (_) return _._;
                const [_] = await _(_, _, _, _);
                return _;
              },
            }),
            [_, _],
          );
        }
        const _ = [];
        function _(_, _, _) {
          const _ = _.some(_) || _.some(_),
            _ = _(_ ? _ : void 0);
          return _
            ? _.data
              ? {
                  widgets: _(_.data.votes ?? [], _, _, _),
                  bLoading: !1,
                }
              : {
                  bLoading: _.isPending,
                }
            : {
                bLoading: !1,
              };
        }
        function _(_, _) {
          return _
            ? {
                ..._,
                bNominationsLive: !0,
              }
            : _;
        }
        function _(_) {
          return !!_ && _._.EUNIVERSE == _.wLO;
        }
        function _(_) {
          const { event: _, previewMode: _ } = _,
            [_, _] = (0, _._)(() => [_.GetSteamAwardCategory(), _.appid]),
            _ = (0, _._)(),
            { widgets: _, bLoading: _ } = _([_], _, _),
            _ = _(_(_));
          if (_) return (0, _.jsx)(_, {});
          if (!_?.nomination) return null;
          const _ =
            _.BIsEventActionEnabled(_) ||
            _ < _.GetStartTimeAndDateUnixSeconds();
          return (0, _.jsx)(_, {
            unAppID: _,
            actions: _,
            widget: _(_.nomination, !!_),
            bNominationsOpen: _,
          });
        }
        function _(_) {
          const {
              appID: _,
              voteCategories: _,
              bIsEventActionEnabled: _,
              previewMode: _,
              bRenderFromStorePage: _,
            } = _,
            _ = (0, _._)(),
            { widgets: _, bLoading: _ } = _(_, _ ?? _, _),
            _ = _(_(_));
          return _
            ? (0, _.jsx)(_, {})
            : _?.vote
              ? (0, _.jsx)(_, {
                  unAppID: _,
                  widget: _.vote,
                  actions: _,
                  bVotesOpen: _ || !!_,
                  bHideCategoryDescriptions: _,
                })
              : null;
        }
        function _(_) {
          const _ = GetConfigJSON(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return _
            ? jsx(_, {
                appID: _.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: _,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${_.appID}`,
              ),
              null);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              appId: _,
              clanId: _,
              strCapsuleUrl: _,
              strGroupTitle: _,
              strExtraBannerGroupStyle: _,
              actions: _,
            } = _,
            _ = _ !== _._,
            _ = _.useMemo(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : {
                      creatorid: _,
                    },
              [_, _],
            ),
            _ = (0, _.jsx)("img", {
              className: _().AppBannerLogo,
              src: _,
            });
          return (0, _._)()
            ? null
            : (0, _.jsxs)("div", {
                className: _().AppBannerCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().AppBannerBackground,
                    style: {
                      backgroundImage: `url(${_})`,
                    },
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().AppBannerGroup, _),
                    children: [
                      _
                        ? _
                          ? (0, _.jsx)(_._, {
                              _: _,
                              className: _().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: {
                                  minWidth: "320px",
                                },
                              },
                              children: _,
                            })
                          : (0, _.jsx)(_._, {
                              _: _,
                              hoverClassName: _().AppBannerLogoCtn,
                              children: _,
                            })
                        : (0, _.jsxs)("div", {
                            className: _().AppBannerLogoCtn,
                            children: [_, " "],
                          }),
                      (0, _.jsxs)("div", {
                        className: _().AppBannerTitle,
                        children: [
                          _,
                          (0, _.jsx)("div", {
                            className: _().NewsHubSubTitle,
                            children: (0, _._)("#EventDisplay_NewsHubSubtitle"),
                          }),
                        ],
                      }),
                      _ &&
                        (0, _.jsx)("div", {
                          className: _().AppBannerLinks,
                          children: _,
                        }),
                    ],
                  }),
                ],
              });
        }
        function _(_) {
          const { appid: _, clanAccountID: _ } = _,
            _ = React.useMemo(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : void 0,
              [_],
            ),
            { data: _ } = useStoreItemDefaultInfo(_),
            { data: _ } = useStoreItemAssets(_),
            { data: _ } = useClanInfoByAccountID(_ ? void 0 : _),
            { bIsOwned: _ } = useIsStoreItemOwned(_),
            _ = _
              ? _
                ? StoreAssetURL(_, "header")
                : void 0
              : _?.avatar_full_url,
            _ = _ ? _?.name : _?.group_name;
          return jsx(_, {
            appId: _ ?? 0,
            clanId: _,
            strCapsuleUrl: _,
            strGroupTitle: _,
            strExtraBannerGroupStyle: _ ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(_ && !_) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: _,
                      bIsFree: !!_?.is_free,
                      bIsComingSoon: !!_?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: _
                    ? jsx(AppFollowButton, {
                        appid: _,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: _,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const [_, _] = (0, _.useState)({}),
            _ = (0, _._)("useEventHeaderData");
          return (
            (0, _.useEffect)(() => {
              if (_)
                _._.Get()
                  .QueueAppRequest(_, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const _ = _._.Get().GetApp(_);
                    _ &&
                      !_?.token?.reason &&
                      _({
                        strCapsuleUrl: _.GetAssets().GetHeaderURL(),
                        strGroupTitle: _.GetName(),
                        strStoreURL:
                          (_._.IN_CLIENT ? "steam://openurl/" : "") +
                          _.GetStorePageURL(),
                        strCommunityURL:
                          (_._.IN_CLIENT ? "steam://openurl/" : "") +
                          _.GetCommunityPageURL(),
                        strForumURL:
                          (_._.IN_CLIENT ? "steam://openurl/" : "") +
                          _.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (_) {
                const _ = _._.InitFromClanID(_);
                _._.LoadClanInfoForClanSteamID(_).then((_) => {
                  _?.token?.reason ||
                    _({
                      strCapsuleUrl: _.avatar_full_url,
                      strGroupTitle: _.group_name,
                      strStoreURL:
                        (_._.IN_CLIENT ? "steam://openurl/" : "") +
                        _._.STORE_BASE_URL +
                        "curator/" +
                        _ +
                        "/",
                      strCommunityURL:
                        (_._.IN_CLIENT ? "steam://openurl/" : "") +
                        _._.COMMUNITY_BASE_URL +
                        "gid/" +
                        _.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: _().ClanBanner,
                    });
                });
              }
            }, [_, _?.token?.reason, _]),
            _
          );
        }
        const _ = {};
        function _(_) {
          const { appId: _, clanId: _, bShowRSSFeed: _ } = _,
            { strStoreURL: _, strCommunityURL: _, strForumURL: _ } = _(_, _),
            _ = (0, _._)(),
            _ =
              _._.STORE_BASE_URL +
              "feeds/" +
              (0, _._)() +
              (_ ? "/app/" + _ : "/group/" + _) +
              "/?cc=" +
              _._.COUNTRY +
              "&l=" +
              _._.LANGUAGE,
            { data: _ } = (0, _._)(_),
            _ = !!(_?.can_edit || _?.support_user),
            _ = _._.Get().BOwnsApp(_),
            _ = (0, _.useMemo)(() => {
              const _ = [];
              return (
                _._.IN_CLIENT &&
                  _ &&
                  _.push({
                    label: (0, _._)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + _,
                  }),
                _.push({
                  label: (0, _._)("#EventDisplay_ViewStorePage_ExtraShort"),
                  data: (0, _._)(_),
                }),
                _ ||
                  (_.push({
                    label: (0, _._)(
                      "#EventDisplay_ViewCommunityPage_ExtraShort",
                    ),
                    data: (0, _._)(_),
                  }),
                  _ &&
                    _.push({
                      label: (0, _._)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, _._)(_),
                    }),
                  _ &&
                    _.push({
                      label: (0, _.jsxs)("div", {
                        className: _().RssRow,
                        children: [
                          (0, _.jsx)(_.ZPc, {}),
                          (0, _._)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: _,
                    })),
                _ &&
                  _.push({
                    label: (0, _._)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, _._)(_, _._.InitFromClanID(_), "admin"),
                  }),
                _
              );
            }, [_, _, _, _, _, _, _, _, _, _]);
          return (0, _.jsx)(_._, {
            strDefaultLabel: (0, _._)("#EventDisplay_LinksDropDown_ExtraShort"),
            strClassName: _().AppBannerLinkDD,
            strDropDownButtonClassName: _().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: _().AppBannerLinkDDContainer,
            contextMenuPositionOptions: {
              bMatchWidth: !1,
            },
            arrowClassName: _().DDButtonArrow,
            rgOptions: _,
            onChange: (_, _, _) => (0, _._)(_, _.data),
          });
        }
        const _ = (0, _._)((_) => {
          const { appId: _, clanId: _ } = _,
            {
              strCapsuleUrl: _,
              strGroupTitle: _,
              strExtraBannerGroupStyle: _,
            } = _(_, _),
            _ = (0, _.useMemo)(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : {
                      creatorid: _,
                    },
              [_, _],
            ),
            { data: _ } = (0, _._)(_),
            _ = _._.Get().BOwnsApp(_);
          return (0, _.jsx)(_, {
            appId: _,
            clanId: _,
            strCapsuleUrl: _,
            strGroupTitle: _,
            strExtraBannerGroupStyle: _,
            actions: (0, _.jsxs)(_.Fragment, {
              children: [
                !!(!_ && _) &&
                  (0, _.jsx)("div", {
                    className: _().HeaderWishlistButton,
                    children: (0, _.jsx)(_._, {
                      appid: _,
                      bIsFree: !!_?.is_free,
                      bIsComingSoon: !!_?.is_coming_soon,
                      className: (0, _._)(
                        _().ActionButton,
                        _().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, _.jsx)("div", {
                  className: _().HeaderFollowButton,
                  children: _
                    ? (0, _.jsx)(_._, {
                        appid: _,
                        className: _().HeaderButtonDark,
                      })
                    : (0, _.jsx)(_._, {
                        clanAccountID: _,
                        className: _().HeaderButtonDark,
                      }),
                }),
                (0, _.jsx)(_, {
                  ..._,
                }),
              ],
            }),
          });
        });
        function _(_) {
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, _.jsx)(_, {
              ..._,
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
          const { event: _ } = _,
            _ = (0, _._)(() => _.jsondata?.referenced_appids || []),
            _ = (0, _._)(),
            _ = (0, _._)({
              queries: _.map((_) =>
                (0, _._)(_, {
                  appid: _,
                }),
              ),
              combine: (_) => ({
                bLoaded: _.every((_) => !_.isPending),
                data: _.map((_) => _.data),
              }),
            });
          if (!_.length || !_.bLoaded) return null;
          const _ = _.data
              .flatMap((_) =>
                _?.store_url_path && _?.name
                  ? [`[url="${(0, _._)(_)}"]${_.name}[/url]`]
                  : [],
              )
              .join((0, _._)("#EventDisplay_ReferencedApps_Joiner")),
            _ = (0, _._)("#EventDisplay_ReferencedApps", _.length, _);
          return (0, _.jsx)("div", {
            className: _().ReferencedApps,
            children: (0, _.jsx)(_._, {
              text: _,
              event: _,
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { bOn: _ } = _;
          return jsx("div", {
            className: _ ? sharedstyles.OnIndicator : sharedstyles.OffIndicator,
            children: Localize(_ ? "#Dialog_On" : "#Dialog_Off"),
          });
        }
        function _(_) {
          return CommunityConfig.IS_CREATOR_HOME
            ? jsx(_, {
                identifier: _.identifier,
              })
            : CommunityConfig.IS_CURATOR
              ? jsx(_, {
                  identifier: _.identifier,
                })
              : jsx(_, {
                  identifier: _.identifier,
                });
        }
        function _(_) {
          const _ = new CSteamID(CommunityConfig.CLANSTEAMID),
            { creatorHome: _ } = useCreatorHome(_.GetAccountID());
          return !_ || !_.BIsLoaded()
            ? null
            : jsx(_, {
                strURL: NavLink(_.GetCreatorHomeURL("developer")),
                strImgUrl: _.GetAvatarURLFullSize(),
                strName: _.GetName(),
              });
        }
        function _(_) {
          const _ = useClanInfoByVanity(CommunityConfig.VANITY_ID);
          return _
            ? jsx(_, {
                strURL: NavLink(
                  Config.COMMUNITY_BASE_URL +
                    "groups/" +
                    CommunityConfig.VANITY_ID,
                ),
                strImgUrl: _.avatar_full_url,
                strName: _.group_name,
              })
            : null;
        }
        function _(_) {
          const [_] = useStoreItemCacheApp(CommunityConfig.APPID, {
            include_assets: !0,
            include_release: !0,
          });
          return _
            ? jsx(_, {
                strURL: NavLink(_.GetStorePageURL()),
                strImgUrl: _.GetAssets().GetSmallCapsuleURL(),
                strName: _.GetName(),
              })
            : null;
        }
        function _(_) {
          const { strURL: _, strImgUrl: _, strName: _ } = _;
          return jsx("div", {
            className: sharedstyles.EventDashboardAppCtn,
            children: jsx("div", {
              className: sharedstyles.AppTitle,
              children: jsxs("a", {
                href: _,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: [
                  jsx("img", {
                    src: _,
                  }),
                  _,
                ],
              }),
            }),
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _._)() && !_._.IN_STEAMUI
            ? (0, _.jsx)(_._, {
                className: _.GamepadOnlyScrollPanel,
                children: _,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _,
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { appid: _ } = _;
          return (0, _.jsx)("div", {
            className: _().AppSocialLinksCtn,
            children: (0, _.jsx)(_, {
              appid: _,
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _,
            { data: _ } = (0, _._)({
              appid: _,
            });
          return !_ || _.length == 0
            ? null
            : (0, _.jsx)(_, {
                strTitle: (0, _._)("#EventDisplay_SocialTitle"),
                _: "" + _,
                rgSocialMedia: _,
              });
        }
        function _(_) {
          return useMemo(
            () =>
              _
                ? _.map((_) => {
                    const _ = ConvertSocialMediaTextToEStoreLinkType(_.type);
                    return _ == EStoreLinkType.k_EStoreLinkType_QQ ||
                      _ == EStoreLinkType.k_EStoreLinkType_WeChat
                      ? {
                          link_type: _,
                          text: _.link,
                        }
                      : {
                          link_type: _,
                          url: _.link,
                        };
                  })
                : [],
            [_],
          );
        }
        function _(_) {
          const { gidClanEvent: _, rgSocial: _, bIsCreatorHomeEvent: _ } = _,
            _ = _(_);
          if (_.length == 0) return null;
          const _ = _
            ? Localize("#EventDisplay_Sale_SocialTitle_Dev")
            : Localize("#EventDisplay_Sale_SocialTitle");
          return jsx(_, {
            strTitle: _,
            _: _,
            rgSocialMedia: _,
          });
        }
        function _(_) {
          const { strTitle: _, _: _, rgSocialMedia: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: _,
              }),
              (0, _.jsx)(_, {
                _: _,
                rgSocialMedia: _,
              }),
            ],
          });
        }
        const _ = [_._._, _._._, _._._, _._._, _._._, _._._, _._._];
        function _(_) {
          const { _: _, rgSocialMedia: _, className: _ } = _,
            _ = _._.EREALM === _._.k_ESteamRealmChina;
          return (0, _.jsx)("div", {
            className: (0, _._)(_().AppSocialLinks, _),
            children: _.filter(
              (_) => !_ || _.includes(_.link_type || _._._),
            ).map((_) =>
              _.url
                ? (0, _.jsx)(
                    _,
                    {
                      social: _,
                    },
                    "app_social_link_" + _ + "_" + _.link_type,
                  )
                : (0, _.jsx)(
                    _,
                    {
                      social: _,
                    },
                    "app_social_text_" + _ + "_" + _.link_type + "_" + _.text,
                  ),
            ),
          });
        }
        function _(_) {
          const { social: _ } = _;
          return _.url
            ? (0, _.jsx)("a", {
                href: (0, _._)(_.url, !0),
                target: _._.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, _.jsx)(_._, {
                  toolTipContent: _.url,
                  children: (0, _.jsx)(_, {
                    social: _,
                  }),
                }),
              })
            : null;
        }
        function _(_) {
          const { social: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().AppSocialLinkWithText,
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: _.text,
                children: (0, _.jsx)(_, {
                  social: _,
                }),
              }),
              (0, _.jsx)("div", {
                className: _().AppSocialText,
                children: _.text,
              }),
            ],
          });
        }
        function _(_) {
          const { social: _ } = _;
          return (0, _.jsx)(_, {
            linkType: _.link_type || _._._,
            className: _().AppSocialLinkIcon,
          });
        }
        const _ = {
          [_._._]: _.agV,
          [_._._]: _.ZnA,
          [_._._]: _._,
          [_._._]: _.ofN,
          [_._._]: _.Bki,
          [_._._]: _.$vK,
          [_._._]: _.$vK,
          [_._._]: _.$vK,
          [_._._]: _.OSJ,
          [_._._]: _.nm_,
          [_._._]: _.tIO,
          [_._._]: _.Vt2,
          [_._._]: _.Vgk,
          [_._._]: _.VSd,
          [_._._]: _.ccb,
          [_._._]: _.rNt,
          [_._._]: _.g$j,
          [_._._]: _.BQz,
          [_._._]: _.jdP,
          [_._._]: _.bKN,
          [_._._]: _.sDU,
          [_._._]: _.MbF,
          [_._._]: _.emH,
          [_._._]: _.Yoo,
        };
        function _(_) {
          const { linkType: _, ..._ } = _,
            _ = _[_];
          return _
            ? (0, _.jsx)(_, {
                ..._,
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = 56,
          _ = 136,
          _ = _.lazy(() =>
            __webpack_require__
              ._("chunkid")
              .then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          );
        function _(_) {
          const [_, _] = (0, _._)(_.appid, {
              include_assets: !0,
            }),
            [_, _] = (0, _._)(_.clanID);
          let _ = "";
          return (
            _.appid
              ? (_ = _?.GetAssets()?.GetCommunityIconURL() || "")
              : _.clanID && (_ = _ ? _.avatar_full_url : ""),
            (0, _.jsx)("div", {
              className: (0, _._)(_().ScrollButton, _().GameArt, _().AnimIn),
              onClick: _.onAppIconClick,
              children:
                !!_ &&
                (0, _.jsx)("img", {
                  src: _,
                }),
            })
          );
        }
        let _ = class extends _.Component {
          m_loader = null;
          m_refPage = _.createRef();
          m_refContent = _.createRef();
          m_refScroll = _.createRef();
          m_refScrollAnchor = _.createRef();
          m_scrollAnimation = null;
          m_nTouchStartClientY;
          m_nPreviousRenderCount = 0;
          m_nCurrentRenderCount = 0;
          constructor(_) {
            super(_),
              !this.props.bShowOnlyInitialEvent &&
                this.props.initialEvent &&
                ((this.m_loader = new _(this.props.partnerEventStore)),
                this.m_loader.InitAroundEvent(
                  this.props.initialEvent,
                  this.props.additionalParams,
                ));
          }
          FindCurrentlyViewedEventIndex() {
            if (!this.m_refContent.current || !this.m_refScroll.current)
              return -1;
            let _ = this.m_refContent.current.children,
              _ = this.GetScrollTopForComparison();
            for (let _ = 0; _ < _.length; _++) {
              let _ = _[_],
                _ = _.offsetTop,
                _ = _ + _.clientHeight;
              if (_ <= _ && _ > _) return _;
            }
            return -1;
          }
          GetPaddingTop() {
            return this.props.showAppHeader ? _ : _;
          }
          GetScrollTopForComparison() {
            return Math.ceil(
              this.m_refScroll.current.scrollTop + this.GetPaddingTop() + 24,
            );
          }
          ScrollToEvent(_) {
            let _ = this.m_refContent.current;
            if (!_ || _ < 0 || _ >= _.children.length || this.m_scrollAnimation)
              return;
            let _ = _.children[_].offsetTop - this.GetPaddingTop();
            this.ScrollToOffset(_);
          }
          ScrollToOffset(_) {
            let _ = this.m_refScroll.current;
            if (!_) return;
            let _ = {
              msDuration: 500,
              timing: "cubic-in-out",
              onComplete: this.OnScrollComplete,
            };
            (this.m_scrollAnimation = new _._(
              _,
              {
                scrollTop: _,
              },
              _,
            )),
              this.m_scrollAnimation.Start();
          }
          ScrollToBottom() {
            this.m_refScroll.current &&
              this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
          }
          ScrollToNextEvent() {
            let _ = this.m_loader.GetEvents(),
              _ = this.FindCurrentlyViewedEventIndex() + 1;
            if (_ >= _.length) {
              this.ScrollToBottom();
              return;
            }
            this.ScrollToEvent(_),
              _ == _.length - 1 && this.m_loader.LoadMoreAtEnd();
          }
          ScrollToPrevEvent() {
            let _ = this.FindCurrentlyViewedEventIndex(),
              _ = _ - 1;
            if (_ < 0) {
              this.ScrollToOffset(0);
              return;
            }
            let _ = this.m_refContent.current;
            if (_) {
              let _ = _.children[_],
                _ = _.offsetTop,
                _ = _ + _.clientHeight,
                _ = this.GetScrollTopForComparison();
              (_ = _ - (_ - _) * 0.3), _ <= _ && (_ = _);
            }
            this.ScrollToEvent(_);
          }
          OnScrollComplete() {
            this.m_scrollAnimation = null;
          }
          Close() {
            if (this.props.closeModal) {
              this.props.closeModal();
              return;
            }
          }
          OnBackgroundClick(_) {
            _.currentTarget == _.target && this.Close();
          }
          OnKeyDown(_) {
            _.keyCode == _._ && this.Close();
          }
          OnScroll(_) {
            if (this.props.bShowOnlyInitialEvent) return;
            let _ = this.m_refScroll.current;
            if (!_) return;
            let _ = _.clientHeight;
            _.scrollHeight - (_.scrollTop + _) <= _ &&
              this.m_loader.LoadMoreAtEnd(),
              _.scrollTop <= _ && this.m_loader.LoadMoreAtBeginning();
          }
          getSnapshotBeforeUpdate(_) {
            let _ = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
            if (
              ((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !_)
            )
              return null;
            let _ = this.m_refScroll.current;
            if (!_ || !this.m_refScrollAnchor.current) return null;
            let _ = this.m_refScrollAnchor.current.GetDOM();
            return _ ? _.offsetTop - _.scrollTop : null;
          }
          OnTouchStart(_) {
            _.touches.length == 1 &&
              (this.m_nTouchStartClientY = _.touches[0].clientY);
          }
          OnTouchMove(_) {
            if (!this.m_refScroll.current || _.touches.length == 0) return;
            const _ = this.m_nTouchStartClientY - _.touches[0].clientY;
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(_, _);
          }
          OnWheel(_) {
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(_, _.deltaY);
          }
          SuppressUnwantedScrollEventsBecauseSafariIsDumb(_, _) {
            const _ = _._(_.target) && _._(this.m_refScroll.current, _.target),
              _ = _ < 0 && this.m_refScroll.current.scrollTop < 1,
              _ =
                this.m_refScroll.current.scrollHeight -
                  this.m_refScroll.current.scrollTop <=
                this.m_refScroll.current.clientHeight,
              _ = _ > 0 && _;
            (!_ || _ || _) && _.cancelable && _.preventDefault();
          }
          SetGlobalHeaderHidden(_) {
            const _ = document.getElementsByClassName("responsive_header");
            (0, _._)(_.length <= 1, "Must have at most one responsive_header"),
              _.length >= 1 && (_[0].style.display = _ ? "none" : null);
          }
          SetFooterPinnedToBottom(_) {
            const _ = document.getElementById("footer");
            _ && (_.style.position = _ ? "absolute" : null);
          }
          componentDidMount() {
            const _ = this.m_refScroll.current;
            _ && !_._(_, _.ownerDocument.activeElement) && _.focus();
            const _ = this.m_refPage.current;
            _ &&
              (_.addEventListener("touchstart", this.OnTouchStart),
              _.addEventListener("touchmove", this.OnTouchMove, {
                passive: !1,
              }),
              _.addEventListener("wheel", this.OnWheel, {
                passive: !1,
              })),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
              this.SetFooterPinnedToBottom(!0);
          }
          componentDidUpdate(_, _, _) {
            if (_ !== null) {
              let _ = this.m_refScroll.current;
              _ && !_._(_, _.ownerDocument.activeElement) && _.focus();
              let _ = this.m_refScrollAnchor.current
                ? this.m_refScrollAnchor.current.GetDOM()
                : null;
              _ && (_.scrollTop = _.offsetTop - _);
            }
          }
          componentWillUnmount() {
            const _ = this.m_refPage.current;
            _ &&
              (_.removeEventListener("touchstart", this.OnTouchStart),
              _.removeEventListener("touchmove", this.OnTouchMove),
              _.removeEventListener("wheel", this.OnWheel)),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
              this.SetFooterPinnedToBottom(!1);
          }
          render() {
            const { initialEvent: _, bShowOnlyInitialEvent: _ } = this.props,
              _ = !_,
              _ = _ ? [] : _ ? [_] : this.m_loader.GetEvents(),
              _ = [];
            let _ = this.props.appid,
              _ = this.props.clanSteamID?.GetAccountID();
            for (const _ of _) {
              const _ = _.GID == this.props.initialEvent.GID,
                _ = _;
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    ref: _ ? this.m_refScrollAnchor : null,
                    event: _,
                    emoticonStore: this.props.emoticonStore,
                    partnerEventStore: this.props.partnerEventStore,
                    disableReadTracking: _,
                    fnFilterImageURLsForKnownFailures:
                      this.props.fnFilterImageURLsForKnownFailures,
                    fnImageFailureCallback: this.props.fnImageFailureCallback,
                    bDisableBroadcastPlayer: !_,
                    className: this.props.eventClassName,
                  },
                  _.GID,
                ),
              ),
                _ == null && (_ = _.appid),
                _ == null && (_ = _.clanSteamID.GetAccountID());
            }
            return (
              (this.m_nCurrentRenderCount = _.length),
              (0, _.jsxs)(_._, {
                onCancelButton: this.props.closeModal,
                className: _().AppPartnerEventsPage,
                ref: this.m_refPage,
                children: [
                  this.props.showAppHeader &&
                    (0, _.jsx)(_, {
                      appId: _,
                      clanId: _,
                    }),
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _().AppPartnerEventsBody,
                      _().EndlessScroll,
                    ),
                    ref: this.m_refScroll,
                    onScroll: this.OnScroll,
                    onClick: this.OnBackgroundClick,
                    tabIndex: -1,
                    onKeyDown: this.OnKeyDown,
                    scrollIntoViewType: _._.NoTransformSparseContent,
                    children: _
                      ? (0, _.jsx)("div", {
                          className: _().NoEvents,
                          children: (0, _._)("#EventDisplay_NoEventsToSee"),
                        })
                      : (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("div", {
                              className: (0, _._)(
                                _().ControlSection,
                                !this.props.onAppIconClick && _().NoGameLink,
                                _ && _().NoScrollArrows,
                              ),
                              children: (0, _.jsx)("div", {
                                className: _().ControlSectionWidth,
                                children: (0, _.jsxs)("div", {
                                  className: _().ControlSectionRightSide,
                                  children: [
                                    !!this.props.closeModal &&
                                      (0, _.jsx)("div", {
                                        className: (0, _._)(
                                          _().CloseButton,
                                          _().AnimIn,
                                        ),
                                        onClick: this.Close,
                                        children: (0, _.jsx)(_.sED, {}),
                                      }),
                                    !_ &&
                                      (0, _.jsx)("div", {
                                        className: (0, _._)(
                                          _().ScrollButton,
                                          _()._,
                                          _().AnimIn,
                                        ),
                                        onClick: this.ScrollToPrevEvent,
                                        children: (0, _.jsx)(_.V5W, {
                                          angle: 0,
                                        }),
                                      }),
                                    !_ &&
                                      (0, _.jsx)("div", {
                                        className: (0, _._)(
                                          _().ScrollButton,
                                          _().Down,
                                          _().AnimIn,
                                        ),
                                        onClick: this.ScrollToNextEvent,
                                        children: (0, _.jsx)(_.V5W, {
                                          angle: 180,
                                        }),
                                      }),
                                    this.props.onAppIconClick &&
                                      (0, _.jsx)(_, {
                                        appid: _,
                                        clanID: _,
                                        onAppIconClick:
                                          this.props.onAppIconClick,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            !_ &&
                              (0, _.jsx)(_, {
                                loader: this.m_loader,
                                location: "top",
                              }),
                            (0, _.jsx)("div", {
                              ref: this.m_refContent,
                              className: (0, _._)(
                                _().AppPartnerEventsContainer,
                                !this.props.onAppIconClick && _().NoGameLink,
                              ),
                              children: _,
                            }),
                            !_ &&
                              (0, _.jsx)(_, {
                                loader: this.m_loader,
                                location: "bottom",
                              }),
                          ],
                        }),
                  }),
                ],
              })
            );
          }
        };
        _([_._], _.prototype, "ScrollToNextEvent", 1),
          _([_._], _.prototype, "ScrollToPrevEvent", 1),
          _([_._], _.prototype, "OnScrollComplete", 1),
          _([_._], _.prototype, "Close", 1),
          _([_._], _.prototype, "OnBackgroundClick", 1),
          _([_._], _.prototype, "OnKeyDown", 1),
          _([_._], _.prototype, "OnScroll", 1),
          _([_._], _.prototype, "OnTouchStart", 1),
          _([_._], _.prototype, "OnTouchMove", 1),
          _([_._], _.prototype, "OnWheel", 1),
          (_ = _([_._], _));
        const _ = (0, _._)((_) => {
            let _ = _.loader.GetNewerState(),
              _ = _.loader.GetOlderState();
            return _ == 2 && _ == 2
              ? null
              : (_.location == "top" ? _ : _) == 2
                ? (0, _.jsx)("div", {
                    className: _().DirectionState,
                    children: (0, _.jsx)(_._, {
                      position: "center",
                      string: (0, _._)("#Loading"),
                    }),
                  })
                : null;
          }),
          _ = _.forwardRef(function (_, _) {
            const _ = (0, _._)(),
              [_, _] = (0, _._)(_.event.appid, {
                include_assets: !0,
              }),
              _ = (0, _._)(_.event.appid),
              _ = (0, _._)();
            return (0, _.jsx)(_, {
              ref: _,
              ..._,
              bInGamepadUI: _,
              bShouldMaskImages: _,
              storeItem: _,
              tracker: _,
            });
          });
        let _ = class extends _.Component {
          m_refContent = _.createRef();
          m_sendReadInfo = new _._();
          m_bSentRead = !1;
          OnEnterVisible() {
            if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) return;
            const _ = 750,
              _ = () => {
                this.props.tracker.RecordEventRead(this.props.event, _._._),
                  (this.m_bSentRead = !0);
              };
            this.m_sendReadInfo.Schedule(_, _);
          }
          OnLeaveVisible() {
            this.m_sendReadInfo.Cancel();
          }
          GetDOM() {
            return this.m_refContent.current;
          }
          render() {
            const {
                event: _,
                langOverride: _,
                partnerEventStore: _,
                emoticonStore: _,
                className: _,
                additionalTypeAndDateElement: _,
                headerClassnames: _,
                isPreview: _,
                bShouldMaskImages: _,
                storeItem: _,
              } = this.props,
              _ = _ || (0, _.sfN)(_._.LANGUAGE),
              _ = _.GetDescriptionWithFallback(_) || "",
              _ = _,
              _ = "300px",
              _ = _.GetCategoryAsString(),
              _ = _.type;
            let _ = "";
            if (_.appid) _ = _?.GetName() || "";
            else if (_.clanSteamID) {
              const _ = _._.GetClanInfoByClanAccountID(
                _.clanSteamID.GetAccountID(),
              );
              _ = _ ? _.group_name : "";
            }
            const _ = _._.GetTimeNowWithOverride(),
              _ = _ !== _.uYK && _ < _.GetStartTimeAndDateUnixSeconds() && !_;
            return (0, _.jsx)(_, {
              children: (0, _.jsxs)("div", {
                ref: this.m_refContent,
                className: (0, _._)(
                  _,
                  _().PartnerEvent,
                  _().InLibraryView,
                  _ == "editor" ? _().InEditor : "",
                ),
                children: [
                  (0, _.jsx)(_, {
                    ...this.props,
                    eLanguage: _,
                  }),
                  (0, _.jsx)("div", {
                    className: _().LibraryEventTitleContainer,
                    children: (0, _.jsxs)("div", {
                      className: _().EventDetailTitleContainer,
                      children: [
                        this.props.headerElement,
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().EventTypeAndTimeRow,
                            _ && _().WithReminder,
                          ),
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().TimeandPostedBy,
                              children: [
                                (0, _.jsx)("span", {
                                  className: _().EventType,
                                  children: _,
                                }),
                                (0, _.jsxs)("span", {
                                  className: _().PostedBy,
                                  children: [
                                    " ",
                                    (0, _._)("#EventDisplay_PostedBy"),
                                    _,
                                    " ",
                                  ],
                                }),
                                (0, _.jsx)(_, {
                                  event: _,
                                  className: _().EventDetailTimeInfo,
                                }),
                              ],
                            }),
                            _ &&
                              !_ &&
                              (0, _.jsx)("div", {
                                className: _().ReminderContainer,
                                children: (0, _.jsx)(_._, {
                                  eventModel: _,
                                  lang: _,
                                  bExpandLeft: !0,
                                }),
                              }),
                            !_ && _,
                          ],
                        }),
                        !this.props.disableReadTracking &&
                          !_ &&
                          (0, _.jsx)(_._, {
                            onEnter: this.OnEnterVisible,
                            onLeave: this.OnLeaveVisible,
                            options: {
                              rootMargin: `0px 0px -${_} 0px`,
                            },
                          }),
                        this.props.bInGamepadUI
                          ? (0, _.jsx)("div", {
                              className: _().EventDetailTitle,
                              children: _.GetNameWithFallback(_),
                            })
                          : (0, _.jsx)(_._, {
                              eventModel: _,
                              route: _._.k_eView,
                              className: _().EventDetailTitle,
                              children: _.GetNameWithFallback(_),
                            }),
                        _.BHasSubTitle(_) &&
                          (0, _.jsx)("div", {
                            className: (0, _._)(
                              _().EventDetailsSubTitle,
                              _().LibraryViewSubtitle,
                            ),
                            children: _.GetSubTitle(_),
                          }),
                        (0, _.jsx)("div", {
                          className: _().EventDetailUserType,
                        }),
                      ],
                    }),
                  }),
                  !!(
                    _.BEventCanShowBroadcastWidget() &&
                    !this.props.bDisableBroadcastPlayer
                  ) &&
                    (0, _.jsx)("div", {
                      className: _().EventBroadcastCtn,
                      children: (0, _.jsx)(_.Suspense, {
                        fallback: null,
                        children: (0, _.jsx)(_, {
                          event: this.props.event,
                        }),
                      }),
                    }),
                  _.BHasTag("steam_award_nomination_request") &&
                    (0, _.jsx)(_, {
                      event: _,
                      lang: _,
                    }),
                  _.BHasTag("steam_award_vote_request") &&
                    (0, _.jsx)(_, {
                      appID: _.appid,
                      bIsEventActionEnabled: _.BIsEventActionEnabled(),
                      voteCategories: _.GetSteamAwardNomineeCategories(),
                    }),
                  (0, _.jsxs)("div", {
                    className: _().LibraryEventBodyContainer,
                    children: [
                      (0, _.jsxs)("div", {
                        className: (0, _._)(
                          _().EventDetailsBody,
                          _().EventDetailsBody,
                          _ && _().MaskImages,
                        ),
                        onContextMenu: _._.IN_CLIENT ? _._ : void 0,
                        children: [
                          (0, _.jsx)(_._, {
                            text: _,
                            event: _,
                          }),
                          (0, _.jsx)("span", {
                            className: _().Clear,
                          }),
                        ],
                      }),
                      (0, _.jsx)(_, {
                        event: this.props.event,
                      }),
                      !!_.jsondata.read_more_link &&
                        (0, _.jsx)("div", {
                          className: (0, _._)(_().ReadMoreCnt),
                          children: (0, _.jsx)(_._, {
                            className: (0, _._)(_().Button),
                            href: _.jsondata.read_more_link,
                            children: (0, _._)(
                              "#EventEmail_Button_ClickForMoreDetails",
                            ),
                          }),
                        }),
                      !!(
                        _.jsondata.bSaleEnabled && _.jsondata.sale_vanity_id
                      ) &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)(_().ReadMoreCnt),
                          children: [
                            (0, _.jsx)(_._, {
                              gidEvent: _.GID,
                            }),
                            (0, _.jsx)("a", {
                              className: (0, _._)(_().Button, "LinkButton"),
                              href: (0, _._)((0, _._)(_)),
                              children: (0, _._)("#Event_Button_VisitSalePage"),
                            }),
                          ],
                        }),
                      (0, _.jsx)(_, {
                        appid: _.appid,
                      }),
                    ],
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      eventModel: _,
                      emoticonStore: _,
                    }),
                ],
              }),
            });
          }
        };
        _([_._], _.prototype, "OnEnterVisible", 1),
          _([_._], _.prototype, "OnLeaveVisible", 1),
          (_ = _([_._], _));
        function _(_) {
          const {
              event: _,
              fnFilterImageURLsForKnownFailures: _,
              fnImageFailureCallback: _,
              eLanguage: _,
              bShouldMaskImages: _,
            } = _,
            _ = _.BImageNeedScreenshotFallback("background", _),
            _ = _.type;
          let _ = (0, _._)(_, "background", _, _._.background_main, !_);
          return (
            _ && _ && (_ = _(_)),
            (0, _.jsxs)(_.Fragment, {
              children: [
                _ != _.Fwr &&
                  !_ &&
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _().EventCoverImageBackground,
                      _ && _().MaskImages,
                    ),
                    rgSources: _,
                    onIncrementalError: (_, _, _) => _ && _(_),
                  }),
                _ &&
                  _.length > 0 &&
                  (0, _.jsx)(_._, {
                    className: _().EventBackgroundBlur,
                    rgSources: _,
                    onIncrementalError: (_, _, _) => _ && _(_),
                  }),
              ],
            })
          );
        }
        var _ = ((_) => (
          (_[(_.Idle = 1)] = "Idle"),
          (_[(_.Loading = 2)] = "Loading"),
          (_[(_.EndOfContent = 3)] = "EndOfContent"),
          _
        ))(_ || {});
        class _ {
          k_nMaxPerDirection = 3;
          m_nAppID = 0;
          m_clanSteamID;
          m_partnerEventStore;
          m_additionalParams;
          m_rgEvents = [];
          m_eOlderDirection = 1;
          m_eNewerDirection = 1;
          constructor(_) {
            (0, _._)(this), (this.m_partnerEventStore = _);
          }
          GetEvents() {
            return this.m_rgEvents;
          }
          GetAppID() {
            return this.m_nAppID;
          }
          GetOlderState() {
            return this.m_eOlderDirection;
          }
          GetNewerState() {
            return this.m_eNewerDirection;
          }
          async InitAroundEvent(_, _) {
            const _ = this.m_partnerEventStore;
            (this.m_nAppID = _.appid),
              (this.m_clanSteamID = _.clanSteamID),
              (this.m_rgEvents = []),
              (this.m_eOlderDirection = 2),
              (this.m_eNewerDirection = 2),
              (this.m_additionalParams = _),
              this.m_rgEvents.push(_);
            let _ = null;
            try {
              _ = await _.LoadAdjacentPartnerEventsByEvent(
                _,
                this.m_clanSteamID,
                this.m_nAppID,
                this.k_nMaxPerDirection,
                this.k_nMaxPerDirection,
                this.m_additionalParams,
              );
            } catch {}
            (0, _._)(() => {
              if (!_ || _.length == 0) {
                (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
                return;
              }
              let _ = _.findIndex((_) => _.GID == _.GID),
                _ = _,
                _ = _ >= 0 ? _.length - _ - 1 : 0;
              (this.m_eNewerDirection = _ >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_eOlderDirection = _ >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_rgEvents = _);
            });
          }
          async LoadMoreAtEnd() {
            if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let _ = this.m_rgEvents[this.m_rgEvents.length - 1];
            this.m_eOlderDirection = 2;
            let _ = null;
            try {
              _ =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  _,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  0,
                  this.k_nMaxPerDirection,
                  this.m_additionalParams,
                );
            } catch {}
            (0, _._)(() => {
              if (!_) {
                this.m_eOlderDirection = 1;
                return;
              }
              const _ = new Set(this.m_rgEvents.map((_) => _.GID));
              for (let _ of _)
                _.has(_.GID) || (this.m_rgEvents.push(_), _.add(_.GID));
              this.m_eOlderDirection =
                _.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
          async LoadMoreAtBeginning() {
            if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let _ = this.m_rgEvents[0];
            this.m_eNewerDirection = 2;
            let _ = null;
            try {
              _ =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  _,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  this.k_nMaxPerDirection,
                  0,
                );
            } catch {}
            (0, _._)(() => {
              if (!_) {
                this.m_eNewerDirection = 1;
                return;
              }
              const _ = new Set(this.m_rgEvents.map((_) => _.GID));
              for (let _ of _.reverse())
                _.has(_.GID) || (this.m_rgEvents.unshift(_), _.add(_.GID));
              this.m_eNewerDirection =
                _.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
        }
        _([_._.shallow], _.prototype, "m_rgEvents", 2),
          _([_._], _.prototype, "m_eOlderDirection", 2),
          _([_._], _.prototype, "m_eNewerDirection", 2);
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          const { event: _, closeModal: _ } = _,
            _ = useEmoticonStore();
          return jsx(AppPartnerEventsPage, {
            initialEvent: _,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: g_PartnerEventStore,
            emoticonStore: _,
            showAppHeader: !0,
            closeModal: _,
          });
        }
        function _(_, _) {
          ShowModalDialog(
            jsx(_, {
              event: _,
            }),
            _,
          );
        }
        let _ = class extends _.Component {
          m_refFocus = _.createRef();
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(_) {
            const { fnClose: _ } = this.props;
            _.keyCode === 27 && _ && _();
          }
          OnBackgroundClick(_) {
            _.currentTarget == _.target && this.props.fnClose();
          }
          render() {
            const { event: _, langOverride: _, isPreview: _ } = this.props;
            return (0, _.jsx)("div", {
              ref: this.m_refFocus,
              className: _.Main,
              onClick: this.OnBackgroundClick,
              children: (0, _.jsx)(_._, {
                children: (_) =>
                  (0, _.jsx)(
                    _,
                    {
                      event: _,
                      emoticonStore: _,
                      partnerEventStore: _.Get(),
                      langOverride: _,
                      isPreview: _,
                      bDisableBroadcastPlayer: !1,
                    },
                    _.GID,
                  ),
              }),
            });
          }
        };
        _([_._], _.prototype, "escFunction", 1),
          _([_._], _.prototype, "OnBackgroundClick", 1),
          (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const _ = _ && _.length > _ ? [..._] : (0, _._)(_ || [], _ + 1, "");
          return (_[_] = _), _;
        }
        function _(_, _) {
          return (_ && _.length > _ && _[_]) || "";
        }
        function _(_, _) {
          let _ = !1,
            _ = !1;
          for (let _ = _.Bhc; _ < _.bP9; _++) {
            const _ = _(_, _).trim(),
              _ = _(_, _).trim();
            if (!_ && !_) continue;
            const _ = (0, _._)("#Language_" + (0, _.LgB)(_));
            if (((_ = !0), !_))
              return (0, _._)("#BuildNotes_Error_MissingTitle", _);
            if (!_) return (0, _._)("#BuildNotes_Error_MissingDescription", _);
            if (_.length > _._)
              return (0, _._)("#BuildNotes_Error_TitleTooLong", _);
            if (_.length > 32768)
              return (0, _._)("#BuildNotes_Error_DescriptionTooLong", _);
            _ === _.Bhc && (_ = !0);
          }
          return _
            ? _
              ? null
              : (0, _._)("#BuildNotes_Error_NoEnglishProvided")
            : (0, _._)("#BuildNotes_Error_NoLanguagesProvided");
        }
        async function _(_, _, _) {
          if (_(_, _)) return null;
          const _ = null;
          if (_) return _;
          const _ = !!_(_, _.ZLm).trim(),
            _ = new FormData();
          _.append("sessionid", (0, _._)()),
            _.append("appid", "" + _),
            _.append("post_steam_china", "" + _),
            _.append("titles", JSON.stringify(_)),
            _.append("descriptions", JSON.stringify(_)),
            _.append("build_id", "" + _.Get().GetPostedBuildVersion()),
            _.append("build_branch", _.Get().GetBuildBranch());
          const _ =
            _._.PARTNER_BASE_URL + "partnerevents/ajaxpublishpatchnotes";
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
            });
            if (_?.data?.success == _._) return _.data;
            console.error(
              "buildpatchnotes: OnSubmitCreateEvent error code  " +
                _?.data?.success +
                " msg: " +
                _?.data?.msg,
            );
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "buildpatchnotes: OnSubmitCreateEvent " + _.strErrorMsg,
              _,
            );
          }
          return null;
        }
        function _(_, _) {
          let _ = new _._();
          (_.GID = "PreviewPartnerEventRow_0"),
            (_.clanSteamID = new _._(_._.steamid)),
            (_.postTime = Date.now() / 1e3),
            (_.startTime = Date.now() / 1e3),
            (_.createTime = Date.now() / 1e3),
            (_.type = _.Fwr);
          for (let _ = _.Bhc; _ < _.bP9; _++)
            _.name.set(_, _(_, _)), _.description.set(_, _(_, _));
          return _;
        }
        function _() {
          const _ = new URLSearchParams(window.location.search);
          _.delete("submittedbuild"), _.delete("buildbranch");
          const _ = _.toString(),
            _ =
              window.location.origin +
              window.location.pathname +
              (_ ? "?" + _ : "") +
              window.location.hash;
          window.history.replaceState({}, "", _);
        }
        class _ {
          m_nBuildVersion;
          m_bSteamChina;
          m_strBuildBranch;
          static s_Singleton;
          static Get() {
            return (
              this.s_Singleton ||
                ((this.s_Singleton = new _()), this.s_Singleton.Init()),
              this.s_Singleton
            );
          }
          Init() {
            const _ = (0, _._)("build_notes", "application_config");
            (this.m_nBuildVersion = _?.build_version || 0),
              (this.m_bSteamChina = _?.steam_china || !1),
              (this.m_strBuildBranch = _?.build_branch || ""),
              (this.m_strBuildBranch = this.m_strBuildBranch
                .trim()
                .toLocaleLowerCase()),
              this.m_strBuildBranch === "default" &&
                (this.m_strBuildBranch = "");
          }
          GetPostedBuildVersion() {
            return this.m_nBuildVersion;
          }
          BShouldShowPatchNotesEditor() {
            return this.GetPostedBuildVersion() > 0;
          }
          BCanSubmitSteamChinaPatchNotes() {
            return this.m_bSteamChina;
          }
          GetBuildBranch() {
            return this.m_strBuildBranch;
          }
        }
        function _(_) {
          const [_, _] = _.useState(_.Bhc),
            [_, _] = _.useState(null),
            [_, _] = _.useState(null),
            [_, _] = _.useState(null),
            [_, _] = _.useState("editing"),
            [_, _] = _.useState(null);
          if (!_.Get().BShouldShowPatchNotesEditor()) return null;
          const _ = (_) => _(_),
            _ = () => _(_(_, _)),
            _ = (_) => !!(_(_, _) || _(_, _)),
            _ = () => _(null),
            _ = async () => {
              _(null), _("submitting");
              const _ = await _(_.appId, _, _);
              _ ? (_(_.clan_event_gid), _(), _("submitted")) : _("failed");
            },
            _ = (_, _) => {
              const _ = new Array();
              let _ = _,
                _ = _;
              for (const _ of _) {
                const _ = _.GetLocalization("Title", _) || "",
                  _ = _.GetLocalization("Description", _) || "";
                (_ || _) && _.push(_),
                  _ && (_ = _(_, _, _)),
                  _ && (_ = _(_, _, _));
              }
              return _(_), _(_), _;
            },
            _ = _.Get().BCanSubmitSteamChinaPatchNotes()
              ? [_._.k_ESteamRealmChina, _._.k_ESteamRealmGlobal]
              : [_._.k_ESteamRealmGlobal],
            _ = _(_, _),
            _ =
              _._.COMMUNITY_BASE_URL +
              "ogg/" +
              _.appId +
              "/partnerevents/create/";
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsxs)("div", {
                className: _.BuildNoteCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _.BuildTitle,
                    children: (0, _._)(
                      "#BuildNotes_Title",
                      _.Get().GetPostedBuildVersion(),
                      _.Get().GetBuildBranch() || "default",
                    ),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.SplitPanel,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.DescriptionPanel,
                        children: [
                          (0, _.jsx)("div", {
                            className: _.BuildSubTitle,
                            children: (0, _._)("#BuildNotes_SubTitle"),
                          }),
                          (0, _.jsx)("div", {
                            className: _.InfoText,
                            children: (0, _._)("#BuildNotes_Desc1"),
                          }),
                          (0, _.jsx)("div", {
                            className: _.InfoText,
                            children: (0, _._)("#BuildNotes_Desc2"),
                          }),
                          (0, _.jsx)("a", {
                            href: _,
                            children: (0, _.jsx)(_._, {
                              children: (0, _._)("#BuildNotes_OpenFullEditor"),
                            }),
                          }),
                        ],
                      }),
                      _ === "editing" &&
                        (0, _.jsx)(_, {
                          sError: _,
                          eLanguage: _,
                          realms: _,
                          fnHasLanguage: _,
                          fnSetLanguage: _,
                          fnGetTitle: (_) => _(_, _),
                          fnSetTitle: (_, _) => _(_(_, _, _)),
                          fnGetDescription: (_) => _(_, _),
                          fnSetDescription: (_, _) => _(_(_, _, _)),
                          fnOnPreviewEvent: _,
                          fnApplyLoc: _,
                        }),
                      _ === "submitting" && (0, _.jsx)(_, {}),
                      _ === "failed" &&
                        (0, _.jsx)(_, {
                          fnOnReturnToEditor: () => _("editing"),
                        }),
                      _ === "submitted" &&
                        (0, _.jsx)(_, {
                          appId: _.appId,
                          eventGid: _,
                        }),
                    ],
                  }),
                ],
              }),
              !!(_ && _ === "editing") &&
                (0, _.jsx)(_, {
                  event: _,
                  eLanguage: _,
                  realms: _,
                  fnOnClose: _,
                  fnOnSubmitEvent: _,
                  fnHasLanguage: _,
                  fnSetLanguage: _,
                }),
            ],
          });
        }
        const _ = (_) => {
            const {
                sError: _,
                eLanguage: _,
                realms: _,
                fnHasLanguage: _,
                fnSetLanguage: _,
                fnGetTitle: _,
                fnSetTitle: _,
                fnGetDescription: _,
                fnSetDescription: _,
                fnOnPreviewEvent: _,
                fnApplyLoc: _,
              } = _,
              _ = (0, _._)();
            let _ = "";
            if (_.includes(_._.k_ESteamRealmChina)) {
              const _ = _(_.ZLm).trim() !== "";
              _ = (0, _._)(
                _
                  ? "#BuildNotes_SteamChina_Provided"
                  : "#BuildNotes_SteamChina_NotProvided",
              );
            }
            const _ = () => {
              const _ = new _._(),
                _ = (0, _._)("#BuildNotes_SampleTitle"),
                _ = (0, _._)("#BuildNotes_SampleDescription");
              for (let _ = _.Bhc; _ < _.bP9; _++)
                _.SetLocalization("Title", _, _),
                  _.SetLocalization("Description", _, _);
              (0, _._)(
                (0, _.jsx)(_._, {
                  sampleLocData: _,
                  sampleFilename: "patchnote_loc_sample",
                  fnOnImportLocData: _,
                }),
                window,
              );
            };
            return (0, _.jsxs)("div", {
              className: _.RightPanel,
              children: [
                (0, _.jsxs)("div", {
                  className: _.EditTopBar,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.EditTitle,
                      children: (0, _._)("#BuildNotes_PatchnotesTitle"),
                    }),
                    (0, _.jsxs)("div", {
                      className: _.LangPicker,
                      children: [
                        (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)("#BuildNotes_ImportLocalization"),
                        }),
                        (0, _.jsx)(_._, {
                          selectedLang: _,
                          fnOnLanguageChanged: _,
                          fnLangHasData: _,
                          realms: _,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  value: _(_),
                  placeholder: (0, _._)("#BuildNotes_TitlePlaceholder"),
                  onChange: (_) => _(_, _.currentTarget.value),
                  maxLength: _._,
                }),
                (0, _.jsx)("div", {
                  className: _.EditTitle,
                  children: (0, _._)("#BuildNotes_PatchnotesDesc"),
                }),
                (0, _.jsx)(_._, {
                  fnGetCurText: () => _(_),
                  fnOnTextChange: (_) => _(_, _.currentTarget.value),
                  fnSetText: (_) => _(_, _),
                  strPlaceholder: (0, _._)("#BuildNotes_DescPlaceholder"),
                  emoticonStore: _,
                  bSupportHTMLImport: !0,
                  showFormatHelp: "PartnerEvents",
                  classNameForTextArea: _.BBCodeEditor,
                }),
                (0, _.jsxs)("div", {
                  className: _.SubmitButtonCtn,
                  children: [
                    !_ &&
                      (0, _.jsx)(_._, {
                        onClick: _,
                        children: (0, _._)("#BuildNotes_Preview"),
                      }),
                    !!_ &&
                      (0, _.jsx)("div", {
                        className: _.ErrorMsg,
                        children: _,
                      }),
                    !!(!_ && _) &&
                      (0, _.jsx)("div", {
                        className: _.SteamChinaMsg,
                        children: _,
                      }),
                  ],
                }),
              ],
            });
          },
          _ = (_) => {
            const {
              event: _,
              eLanguage: _,
              realms: _,
              fnOnClose: _,
              fnOnSubmitEvent: _,
              fnHasLanguage: _,
              fnSetLanguage: _,
            } = _;
            return (0, _.jsxs)(_._, {
              children: [
                (0, _.jsxs)("div", {
                  className: _.PreviewHeader,
                  children: [
                    (0, _.jsx)(_._, {
                      selectedLang: _,
                      fnOnLanguageChanged: _,
                      fnFilterLanguage: _,
                      realms: _,
                    }),
                    (0, _.jsxs)("div", {
                      className: _.SubmitButtonCtn,
                      children: [
                        (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)("#BuildNotes_Close"),
                        }),
                        (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)("#BuildNotes_PostNotes"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  children: (0, _.jsx)(_, {
                    event: _,
                    fnClose: _,
                    langOverride: _,
                    isPreview: !0,
                  }),
                }),
              ],
            });
          },
          _ = (_) =>
            (0, _.jsxs)("div", {
              className: (0, _._)(_.RightPanel, _.SubmitPanel),
              children: [
                (0, _.jsx)(_._, {
                  className: _.SubmitThrobber,
                }),
                (0, _.jsx)("div", {
                  className: _.SubmitText,
                  children: (0, _._)("#BuildNotes_Submitting"),
                }),
              ],
            }),
          _ = (_) =>
            (0, _.jsxs)("div", {
              className: (0, _._)(_.RightPanel, _.FailedPanel),
              children: [
                (0, _.jsx)("div", {
                  className: _.FailedText,
                  children: (0, _._)("#BuildNotes_FailedDescription"),
                }),
                (0, _.jsx)("div", {
                  className: _.FailedButton,
                  children: (0, _.jsx)(_._, {
                    onClick: _.fnOnReturnToEditor,
                    children: (0, _._)("#BuildNotes_ReturnToEditor"),
                  }),
                }),
              ],
            }),
          _ = (_) => {
            const { appId: _, eventGid: _ } = _,
              _ = `${_._.STORE_BASE_URL}news/app/${_}/view/${_}`;
            return (0, _.jsxs)("div", {
              className: (0, _._)(_.RightPanel, _.SuccessPanel),
              children: [
                (0, _.jsx)("div", {
                  className: _.SuccessText,
                  children: (0, _._)("#BuildNotes_Success"),
                }),
                (0, _.jsx)("a", {
                  href: _,
                  className: _.ViewEventButton,
                  children: (0, _.jsx)(_._, {
                    children: (0, _._)("#BuildNotes_ViewPublished"),
                  }),
                }),
              ],
            });
          };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            SaleRoutes: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          static s_PageStore;
          m_mapSalePage = new Map();
          m_rgUnmigratedSalesPage = new Array();
          GetUnmigratedSalesPages() {
            return this.m_rgUnmigratedSalesPage;
          }
          GetAllSalePages() {
            return Array.from(this.m_mapSalePage.values());
          }
          GetPageByID(_) {
            return this.m_mapSalePage.get(_);
          }
          static Get() {
            return (
              _.s_PageStore ||
                ((_.s_PageStore = new _()), _.s_PageStore.Init()),
              _.s_PageStore
            );
          }
          Init() {
            let _ = (0, _._)("old_sale_pages", "application_config");
            this.ValidateStoreDefault(_) &&
              _.forEach((_) => {
                this.m_mapSalePage.set(_.pageid, _),
                  _.migrated_clan_account_id ||
                    this.m_rgUnmigratedSalesPage.push(_);
              });
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].pageid == "string"
              : !1;
          }
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("h2", {
                children: "Unmigrated Sales Pages",
              }),
              (0, _.jsx)("hr", {}),
              _.Get()
                .GetUnmigratedSalesPages()
                .map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      pageid: _.pageid,
                    },
                    _.pageid,
                  ),
                ),
            ],
          });
        }
        function _(_) {
          let _ = _.Get().GetPageByID(_.pageid);
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("div", {
                children: _.pageid,
              }),
              (0, _.jsx)(_._, {
                _: _.SaleMigrationPageDebug(_.pageid),
                children: "Debug Data",
              }),
            ],
          });
        }
        function _(_) {
          const { pageid: _ } = _,
            _ = _.Get().GetPageByID(_),
            _ = (0, _._)(_.accountid);
          return _
            ? (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(_._, {
                    _: _.SaleMigrationTool(),
                    children: "< Return to Migration Toolset",
                  }),
                  (0, _.jsxs)("h2", {
                    children: ["Debug: ", _.pageid],
                  }),
                  (0, _.jsx)("hr", {}),
                  (0, _.jsxs)("div", {
                    children: ["Name: ", _.display_name],
                  }),
                  (0, _.jsxs)("div", {
                    children: ["Creator: ", _.accountid, " - ", _.persona],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      "Last Modified: ",
                      _.last_modified,
                      _.last_modified != 0 &&
                        (0, _.jsx)(_._, {
                          dateAndTime: _.last_modified,
                          bSingleLine: !0,
                        }),
                    ],
                  }),
                  (0, _.jsx)("h1", {
                    children: "Sale Page Body Raw",
                  }),
                  (0, _.jsx)(_._, {
                    data: _,
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                string: "Loading User Info",
              });
        }
        var _ = __webpack_require__("chunkid");
        const _ = {
          SaleDashboardView: () => "/(dashboard)?/",
          SaleMigrationTool: () => "/migration/",
          SaleMigrationPageDebug: (_) => `/migration/debug/${_}/`,
        };
        function _(_) {
          return (0, _.jsx)(_._, {
            basename: (0, _._)() + "sales/",
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  exact: !0,
                  path: _._.DiagData(),
                  render: (_) =>
                    (0, _.jsx)(_._, {
                      ..._,
                      strConfigID: "application_config",
                    }),
                }),
                (0, _.jsx)(_._, {
                  exact: !0,
                  path: _.SaleDashboardView(),
                  component: _._,
                }),
                (0, _.jsx)(_._, {
                  exact: !0,
                  path: _.SaleMigrationTool(),
                  component: _,
                }),
                (0, _.jsx)(_._, {
                  exact: !0,
                  path: _.SaleMigrationPageDebug(":pageid"),
                  render: (_) =>
                    (0, _.jsx)(_, {
                      pageid: _.match.params.pageid,
                    }),
                }),
                (0, _.jsx)(_._, {
                  component: _._,
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
          const { gidEvent: _ } = _,
            _ = usePartnerEventByEventGID(_);
          return _
            ? jsx(_, {
                event: _,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(_) ?? ""),
              })
            : null;
        }
        function _(_) {
          const { event: _, lang: _, href: _ } = _,
            [_, _] = (0, _.useMemo)(() => {
              const _ = _.jsondata.localized_sale_product_banner,
                _ = _.jsondata.localized_sale_product_mobile_banner;
              if (_?.length && _?.length) {
                const _ = _._.GetWithFallback(_, _),
                  _ = _._.GetWithFallback(_, _);
                if (_?.length && _?.length)
                  return [
                    _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                    _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                  ];
              }
              return [void 0, void 0];
            }, [_, _]);
          return !_?.length || !_?.length
            ? null
            : (0, _.jsxs)("a", {
                href: _,
                className: _.Link,
                children: [
                  (0, _.jsx)("img", {
                    src: _,
                    className: (0, _._)(_.Banner, _.Big),
                    alt: _.GetNameWithFallback(_),
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                    className: (0, _._)(_.Banner, _.Mobile),
                    alt: _.GetNameWithFallback(_),
                  }),
                ],
              });
        }
        function _(_) {
          const { gidEvent: _ } = _,
            _ = (0, _._)(_);
          return _
            ? (0, _.jsx)(_, {
                event: _,
                lang: (0, _.sfN)(_._.LANGUAGE),
                href: (0, _._)((0, _._)(_) ?? ""),
              })
            : null;
        }
      },
      chunkid: (module) => {
        module.exports = {
          BuildNoteCtn: "cZP-58cHflQCLG6CHvwKG",
          SplitPanel: "_2TINcVLR2kmBWAVOOtG0cF",
          DescriptionPanel: "_2N1THxFjyQb75AY6b7SpZX",
          RightPanel: "EN_YgGmWh95hbxn-2pmD5",
          BuildTitle: "_-2I9CETSXyA66SWcV5iEv",
          BuildSubTitle: "_2lG_bxKnQtJIUYWD19KGoy",
          InfoText: "_3-WB4tkYQI0EftRXikEI4t",
          EditTopBar: "bJHHP4182a1PZlP-rurGN",
          LangPicker: "_1P7AcuhlijPijxLhFPngFp",
          EditTitle: "_2o-fIjMrt8xP5BFnQuwu_p",
          SubmitButtonCtn: "Vj8rXBuNz4JT-2Y8QgK36",
          BBCodeEditor: "_2gIbttbPBWi6pXxhPzfmD5",
          ErrorMsg: "_2yUUHPTbyDbnoX2gCflGh-",
          SteamChinaMsg: "_3EFpCoez_gInT6uBoW-MLR",
          PreviewHeader: "_3GODeMU9hr5NrqreP7TL3E",
          SubmitPanel: "_2WB1wNg29mL3fTTeWX9HJU",
          SubmitThrobber: "_2rWSmSZSQLbv7D2bBBc6PO",
          SuccessPanel: "_3jQwVKtYzS0V9pBPwJTUW6",
          ViewEventButton: "_3zUBg8T8MJnKb-eS1s3sK6",
          FailedPanel: "_1H8COg73O0FBzdyTrSg2pu",
          FailedText: "pu4VYcHm6vt6RCeDA73L0",
          FailedButton: "soZLp0uToUv-yRJFwckG9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          EventDetailTimeInfo: "xBUZ1jJ4rafFpeTqBLFXy",
          StartDate: "_3fnIGWmHQRS3H57PR7Qm0V",
          EndDate: "_27ujtr5AsAF4_qa1HEifF4",
          MultiDateAndTime: "_130Qkcrkkg7Ygi1ksNJVM",
          RightSideTitles: "_34vtF4hGMg7lb2WZUbe8ie",
          DateAndTime: "zLuUcDh0YJONQX3MssuAu",
          VerticalLocalDateAndTime: "MT8Ri2dV3bsGLkpXTvoVG",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ReferencedApps: "_1aDVPEAcrxRDEyIXlfcBMG",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          AppPartnerEventsPage: "_3CJsgSK-y815Zeoe6bz6dh",
          AppPartnerEventsBanner: "_1HRiMtg_SGUiOa-NXDzZl7",
          AppBannerLinks: "D1bMmHTycpEqG4Sp3VVvH",
          ControlSection: "_2pA5CW91XQQDfo6yZEdPd-",
          NoGameLink: "_2GfPecEDgnR6mwX3ysETT_",
          AppPartnerEventsBody: "_1XLRr8eh1ip-E17C8Jzrmc",
          AppBannerGroup: "qexk-JocS7jjDM31IcGZn",
          NoEvents: "_2xyx9hjeMa2Faf2k3WjG3C",
          AppBannerCtn: "wavRtSPqcvhar0kUHlKoJ",
          AppBannerBackground: "_3RHFoIvdUHn0fp8G8M258k",
          ClanBanner: "_161DWg8AuVjniVd_UE888G",
          TallBanner: "KBixgrFRi1J3OB43f1p8X",
          WideBanner: "_1hl09rgUVOJUMhgC33L7eo",
          AppBannerTitle: "_1iqjH40fN4Diar-d-rLbR5",
          NewsHubSubTitle: "_3tf3bdmBO0Ji0rv8PH-ZXz",
          AppBannerLogoCtn: "_2EV_WNLGjRLNX824mfis9O",
          AppBannerLogo: "dGGTg8iH8Z_d_p6nPFFlM",
          HeaderButtonDark: "_1sDn2dLVB1pIeh5UP4EOVT",
          HeaderFollowButton: "_1tnk5F-ooFjGdvCzXLwtmf",
          HeaderWishlistButton: "_371yXVkVSnacHxz1fMmGpT",
          AppBannerLink: "_3YomsTzhdiLRcSZkF8JtB8",
          AppBannerRSSLink: "_1HeKH4JMsCDXmXP3XD7C6t",
          AppBannerLinkDD: "_1afFDl3n1RB22K4gFglar",
          AppBannerLinkDDButton: "S9cqDrgEIhtUE6pU3-2iQ",
          DDButtonArrow: "_3URBCM-OKlL3sg0hORPS01",
          AppBannerLinkDDContainer: "_2cjCliV2mnVX6dlRRce-fD",
          WishlistBtnShort: "_3WcW8PJCSEWwVA6qJ-RUOF",
          RssRow: "_2pyH3D6qw0sOXhrtoYqCVL",
          AppPartnerEventsContainer: "_3GCEyyVil-cCS-8hoI2Zo1",
          PartnerEvent: "_1KsYSVzmvIfRivBTcx-_GE",
          LibraryViewSubtitle: "_1rbgKYHeRvzrIyqHCzaLIr",
          EventDetailsBody: "_3NW5vEM9HgfQrgR4W-Xy_s",
          NoScrollArrows: "_39hJ8cxSdqeE3ZR01bJLab",
          ControlSectionWidth: "_3yfs7fc5WEv6F9tPG4yq4g",
          ControlSectionRightSide: "_2tSyrRxMCRWK6K09JErgI_",
          GameArt: "_2a5oSdTIcFV3c3ymUNsu6l",
          ScrollButton: "_1t_97P9KMsEBaPq9y-6OUl",
          _: "_3vBD2B7lrr6iXm8dGe71lI",
          Down: "_3VePRhMGWFsbGaZjSNXJjV",
          CloseButton: "_1_vCR1dPfyJ7_yukwDqblf",
          AnimIn: "_240i58XQ0w78YFrd_p-9UY",
          transitionIn: "_2jG5NuuER4JaHKuO9nA4KF",
          ClickableBG: "_308EDBzQTS8OgAxwxfq2UB",
          DirectionState: "Bv96jkkYqxrnA7xfPskjD",
          EventTypeAndTimeRow: "_3bWTO29arCCJ6PBGRZ7fRy",
          WithReminder: "_1C5DvpeSKLvf8M8uAdi50W",
          TimeandPostedBy: "_2WwG2r8yZuu2EMJgFTQZp8",
          EventType: "Udzrpqr8534T5DvVZveNP",
          PostedBy: "_2VqeQaZVaUkkEWaiLkmqmT",
          ReminderContainer: "_3Vf2MkZ_LWIoNVv36RwJtO",
          ReadMoreCnt: "_1YmaiDiNhC33cL5DKj05KQ",
          BackgroundAnimation: "_2-llXPi4w88rsWfJFYSLHB",
          "ItemFocusAnim-darkerGrey-nocolor": "_2eejrtSFYCSnzH8C6-WC3a",
          "ItemFocusAnim-darkerGrey": "oMlqiiSY2Eqr2ln_FmAg4",
          "ItemFocusAnim-darkGreySettings": "AcW48fP-EnfyD8bO6anBj",
          "ItemFocusAnim-darkGrey": "_3lAc02j3vPGIoXryYyGTZR",
          "ItemFocusAnim-grey": "_388VkzVpUFRuQ1HZEymCy",
          "ItemFocusAnim-translucent-white-10": "tK-6xcUa6TrN9X1V5zj25",
          "ItemFocusAnim-translucent-white-20": "_1UaaS_yXA7SqNdxVDXCD9W",
          "ItemFocusAnimBorder-darkGrey": "_1V7Z378RTDEmk3dXXGXsQa",
          "ItemFocusAnim-green": "_2ldXxMP_HINQZvEbjgDdbf",
          focusAnimation: "_3zr66n761wV-ZHFKw_Yvbn",
          hoverAnimation: "_1MvZ2haWg8XTcl8VHKnoS0",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Main: "_1Zn_5pvuMbqr57ws1eJKe",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
          InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
          SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
          SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
          SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
          SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
          SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
          SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
          SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
          BottomRight: "zr64QF0O74AQ9RMG-dGnw",
          SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
          LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
          SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
          SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
          SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
          VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
          SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
          SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
          SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
          SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
          SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
          NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
          SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
          Nominated: "_1No9r92B3LLgMOaSMSC9vE",
          SteamAwardNominationWidget: "_38gTf-DsRc7bVnxxQXxT3B",
          SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
          SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
          SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
          ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
          AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
          SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
          ConflictBody: "_3WKl_XpHUMGcIm4cNhlc_W",
          NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          EventDetailsPageContainer: "_2Ptras-ZC31rwdT6pD-t0a",
          StickyPageBarColumn: "_2aUTuHeHvSh1O3J73MAMmQ",
          EventNotPublicBar: "_214UHKV-VeP2IhhsZ2LVcn",
          UnpublishedDataBar: "j-JOpd1RiQoelltUAkGGx",
          EventNotPublicBarTitle: "acDtTp9VueGVdAapPDLxy",
          UnpublishedDataBarTitle: "l7Y1p6I1nHpnwDPjA-a3t",
          EventNotPublicBarDetail: "_1fbHYCMO42X_XiaPzyCcQk",
          UnpublishedDataBarDetail: "_3130s6Y2hpKUIZucKqpnwE",
          EventBackgroundBlurCtn: "_32nPM5nI8cmMdkvRnsUcq",
          EventBackgroundBlur: "stsss-bTNuazY8FYtvTOX",
          DetailArtworkAgeAppropriate: "_1p_lsRZvAYiGSonqGbCnrp",
          DetailArtworkAgeNotAppropriate: "_3x5pK4kfX6SQEKh9iSj3H-",
          EventCoverImageBlr: "_3xNobHnL6L5HNoDQf8AHUo",
          EventBodyCtn: "_3o4SVY-lALGHvkOPxiClcu",
          EventBodyPosition: "_3lIxPlLiNjLik6YIM8DKpk",
          EventBody: "_3aht--c1L66YvvpY-Il67f",
          EventBroadcastCtn: "_1Ph1iFKAgY5MbG0BLSObbI",
          EventColumns: "_1PEIfuF8koQapWSDE4ixM8",
          EventCoverImageCtn: "FZiaqIAvLKRo2ye9j3cq0",
          NoTitleArtwork: "_3Y40JAThJ65ZCkZaMsdrGm",
          ScreenshotInsteadOfCover: "_2r6un4LwM4IZjQFRprhIL3",
          EventCoverImage: "_17G2yhjdc_ZmGlMv-L-S05",
          EventCoverImageBackground: "_2-IygC3-t05_RYwPl6Fkgt",
          InLibraryView: "_3_SEiDNs-lzwV7cTF6gcgt",
          InEditor: "_2YuATTfMo6qZqsst8azM2p",
          MaskImages: "_2DmRfvoCf1m6HLz3w6uKPl",
          EventCoverImageFuzz: "_2EWL0Txuk_th1gh-UxYPPx",
          LibraryEventTitleContainer: "ZHAfj0MPg1zDLXRnCzSsx",
          CoverImageGradient: "_1_x4oDqLbWfiaDp5HQ2yA8",
          EventDetailTitleImg: "_1RA5eG1kXW89QB1SG3mq04",
          EventDetailTitleDesc: "_3Ej2uoApLQ756OReRtcQ2f",
          EventDetailsSticky: "_3IxVZE9uydjh3cA9kmtnk7",
          EventDetailUserType: "_3phfIcOe_STA7hSoFfIxlE",
          EventDetailGameCallToAction: "JOkXFrkqayZ-Pg2Fr46Ho",
          EventDetailTimeInfo: "_2KsEbGy9kiSDeQpcqEc9DG",
          EventDetailsDescription: "_2orfVuUro8BNFNNhRfGk4n",
          EventDetailsBody: "A_A2B6fTn_MPLlGCmsLtd",
          EventDetailsGame: "_1JqXpZvEA66lA79AoE1A4i",
          EventDetailsAvatar: "_2U_20VMsLlLdv66vI22zJg",
          GameActions: "bGROTLQdP5BDMIzo0cL9T",
          ActionButton: "_26-KZHJ9fTyRZHH2c2H6Y2",
          Ownership: "_2VkXpaIdUFw9YfZ7NOSuZO",
          EventDetailsType: "_2u9c-A3-fBObro9MTIQ1os",
          EventDetailTitle: "TqEPC9bhvVpZ1rb3Z8Mbd",
          EventDetailTitleContainer: "_3z2NYCkFizMu4fMvWTIBUG",
          EventDetailsSubTitle: "_20f2sKS2M7PlPSnPCinT26",
          EventDescriptionRichField: "_1dV0eemBulIeNuwlrxbJA_",
          ToolBar: "zMpwi4v_VKAJy80GriVLg",
          EventDescriptionContainer: "_2-t9DuSXZ-g32FrXvXuRfC",
          EventDescriptionArea: "_3UMJE2bBtqZcj2w_S-n8o4",
          LibraryEventBodyContainer: "_32mHvRSmD7AVK9OIOPlaFu",
          "lang_zh-cn": "_2oAxPvOHyVkOcOFbH-ROOn",
          lang_ko: "_36n2d0WrYP7qNfJaBDPBzE",
          lang_ja: "-TO1bNNGYVahD_n4sJP5r",
          "lang_zh-tw": "_3lwKp3Y9WtjxoKIhneSXGJ",
          RightSideTitles: "efy3k8RozzxfFidgbdfZZ",
          DisplayAdminPanel_Title: "_1lmj3YadvgLSNGiTrVsnnT",
          AppSummaryCtn: "Wk21cv1qcYBOF2PSAOfb-",
          AppSummaryWidgetTitleCtn: "jJFfoBi2WDn1ym8KCLfLr",
          Title: "_2gsoDhNzhAXpECJk2aM94W",
          AppSummaryWidgetCtn: "_2jRJR7Vuvy9GStGxMc06AQ",
          DisplayAdminPanel: "XshNh8OHVlOoxz_Yj0fkc",
          Sticky: "_3mQwJy8e1PrRXgZq-rfYHL",
          DisplayAdminPanelMarker: "_3oBRxSIrR4NU_SUyHm24oc",
          DisplayAdminPanelClose: "_1D7XHqTP4JUViNgnjIQ9qx",
          Locked: "_1uXh_NDjzcbWYSUJnopy8Z",
          DisplayAdminPanel_ctn: "_1SQm1cGP42xfEdQhin6L40",
          DisplayAdminPanel_TopSpacer: "_3yTv-i_5aQ3b13xZpESEk-",
          DisplayAdminPanel_Spacer: "_6pX37H30C0s-x4mIFjxUX",
          AdminButton: "_1J0n9Gp8bS7Mha2SNQSwXP",
          EditorStatsCtn: "e2BAgiTc6P_7haFD_YWzs",
          VisibilityNote: "_1G3X_jfMgGX1nzeOAvPZNG",
          EditorStatsRow: "_2SecokIlleKz0K30ieApg5",
          SteamBlog: "_1rafn02Kz4HF1-3xfmuaR0",
          _: "_1-pFh2QlJBUeqmXrWcbTQQ",
          LunarNewYearOpenEnvelopeVideoDialog: "_1-SzihnWiO-8bBYWJ-TS-4",
          Container: "_1dcfd1Jxk-yCCdG0k1eyG-",
          Column: "_3o_dPHiTf_pT5uP0TuTE2V",
          VideoBox: "KAf3yvFJr1ynRXT8aqd3s",
          CoinText: "_14dU2UGt1PmbFzm_3MFVsw",
          Visible: "_2bKyVv-GvmJOHaKOyny5tE",
          LunarNewYearOpenEnvelopeVideo: "_2JgvPxvGXJvSckj2hqob0v",
          StoryHeader: "uJBQiPn1x-EafTRgDg6M4",
          StorySubHeader: "hl9GlxJvvzMyW_nSZzClV",
          StoryText: "_1vUbVy_chcUkci3kdPrSUf",
          StoryPicture: "_1ovBW-Uq5McD_BCBZTM_9a",
          CheckBackText: "_3FFfw7Avb_USRJcepkNLAO",
          DancingRat: "_3gJiVpOab5ooTJ9VkQZVJL",
          Links: "_2U9E5YNMewy5F336yikcMG",
          MarketLink: "_19WRlHb-r_EpFcgEtFL8iV",
          MarketLinkhover: "Q7KDk8kBk01MxhM_KZoqt",
          ReadMoreCnt: "_1L8MouFdSBwf8mcqLtAIPu",
        };
      },
    },
  ]);
})();
