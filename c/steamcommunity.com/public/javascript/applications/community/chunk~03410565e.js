(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [657],
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = [
            "mousemove",
            "keypress",
            "scroll",
            "wheel",
            "focusin",
            "touchstart",
            "touchmove",
          ],
          _ = 2e3,
          _ = class _ {
            constructor() {
              _(this, "m_callbackList", new _._()),
                _(this, "m_timer", null),
                _(this, "m_bAreEventListenersRegistered", !1);
            }
            static Get() {
              return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
            }
            ResetFidgetTimer(_) {
              this.m_timer && window.clearTimeout(this.m_timer);
              const _ = () => {
                (this.m_timer = null), this.m_callbackList.Dispatch();
              };
              this.m_timer = window.setTimeout(_, _);
            }
            BIsUserFidgeting() {
              return !!this.m_timer;
            }
            GetCallbackList() {
              return this.m_callbackList;
            }
            BRegisterEventListeners() {
              if (this.m_bAreEventListenersRegistered) return !1;
              const _ = window;
              for (const _ of _) _.addEventListener(_, this.ResetFidgetTimer);
              return (this.m_bAreEventListenersRegistered = !0), !0;
            }
            BUnregisterEventListeners() {
              if (!this.m_bAreEventListenersRegistered) return !1;
              const _ = window;
              for (const _ of _)
                _.removeEventListener(_, this.ResetFidgetTimer);
              return (this.m_bAreEventListenersRegistered = !1), !1;
            }
          };
        _(_, "s_Singleton"), _([_._], _.prototype, "ResetFidgetTimer", 1);
        let _ = _;
        function _() {
          _.useEffect(() => {
            const _ = _.Get().BRegisterEventListeners();
            return () => {
              _ && _.Get().BUnregisterEventListeners();
            };
          }, []);
        }
        function _(_) {
          const _ = _.useRef(null),
            _ = _.useCallback(() => {
              _.current && (_.current(), (_.current = null));
            }, []);
          return (
            (0, _._)(_.Get().GetCallbackList(), _),
            _.useEffect(() => () => {
              _.current = null;
            }),
            _.useCallback(
              (..._) => {
                _.Get().BIsUserFidgeting()
                  ? (_.current = () => _(..._))
                  : ((_.current = null), _(..._));
              },
              [_],
            )
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = class _ {
            constructor() {
              _(this, "m_mapQAndASessions", new Map()),
                _(this, "m_mapQAndAChangeCallbackList", new Map()),
                _(this, "m_dashboardCallbackList", new _._()),
                _(this, "m_mapQuestions", new Map()),
                _(this, "m_mapQuestionCallbackList", new Map()),
                _(this, "m_rgPendingQuestionGIDs", []);
            }
            static Get() {
              return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
            }
            GetQAndACallbackList(_) {
              return (
                this.m_mapQAndAChangeCallbackList.has(_) ||
                  this.m_mapQAndAChangeCallbackList.set(_, new _._()),
                this.m_mapQAndAChangeCallbackList.get(_)
              );
            }
            GetQuestionCallbackList(_) {
              return (
                this.m_mapQuestionCallbackList.has(_) ||
                  this.m_mapQuestionCallbackList.set(_, new _._()),
                this.m_mapQuestionCallbackList.get(_)
              );
            }
            GetDashboardCallbackList() {
              return this.m_dashboardCallbackList;
            }
            GetSession(_) {
              return this.m_mapQAndASessions.get(_);
            }
            GetAllSessions() {
              return Array.from(this.m_mapQAndASessions.values());
            }
            GetQuestion(_) {
              return this.m_mapQuestions.get(_);
            }
            async LoadAllSessions(_) {
              var _, _, _, _;
              if (!_._.logged_in || !(0, _._)()) return _._;
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxgetqandasforgroup",
                _ = {};
              let _ = null;
              try {
                const _ = await _().get(_, {
                  params: _,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (console.log(_),
                  (_ == null ? void 0 : _.status) == 200 &&
                    ((_ = _.data) == null ? void 0 : _.success) == _._ &&
                    _.data.qandas)
                ) {
                  for (const _ of _.data.qandas)
                    this.m_mapQAndASessions.set(_.gidSession, _);
                  return (
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    _._
                  );
                }
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error(
                  "Could not load question and answer sessions for group",
                  _.strErrorMsg,
                  _,
                ),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            async CreateNewSession(_, _) {
              var _, _, _, _;
              if (!_._.logged_in || !(0, _._)()) return _._;
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxcreateqanda",
                _ = new FormData();
              _.append("sessionid", (0, _._)()), _.append("name", _);
              let _ = null;
              try {
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._ &&
                  _.data.qanda
                )
                  return (
                    this.m_mapQAndASessions.set(
                      _.data.qanda.gidSession,
                      _.data.qanda,
                    ),
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    _._
                  );
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error("Could not create Q&A", _, _.strErrorMsg, _),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            async RenameSession(_, _, _) {
              var _, _, _, _;
              if (!_._.logged_in || !(0, _._)()) return _._;
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxrenameqanda/" +
                  _,
                _ = new FormData();
              _.append("sessionid", (0, _._)()), _.append("name", _);
              let _ = null;
              try {
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._
                )
                  return (
                    (this.m_mapQAndASessions.get(_).strName = _),
                    this.GetQAndACallbackList(_).Dispatch(
                      this.m_mapQAndASessions.get(_),
                    ),
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    _._
                  );
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error("Could not rename Q&A", _, _, _.strErrorMsg, _),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            async DeleteSession(_, _) {
              var _, _, _, _;
              if (!_._.logged_in || !(0, _._)()) return _._;
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxdeleteqanda/" +
                  _,
                _ = new FormData();
              _.append("sessionid", (0, _._)());
              let _ = null;
              try {
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._
                )
                  return (
                    this.m_mapQAndASessions.delete(_),
                    this.m_dashboardCallbackList.Dispatch(
                      this.GetAllSessions(),
                    ),
                    _._
                  );
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error("Could not delete Q&A", _, _.strErrorMsg, _),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            async LoadSession(_, _, _) {
              var _, _, _, _, _, _, _, _, _, _;
              const _ =
                  _._.logged_in &&
                  (!this.m_mapQAndASessions.has(_) ||
                    this.m_mapQAndASessions.get(_).bUserCanModerate ||
                    this.m_rgPendingQuestionGIDs.length > 0 ||
                    _)
                    ? "/ajaxgetqandasessionforuser/"
                    : "/ajaxgetqandasession/",
                _ =
                  _._.COMMUNITY_BASE_URL + "questions/" + _._.VANITY_ID + _ + _,
                _ = {};
              let _ = null;
              try {
                const _ = await _().get(_, {
                  params: _,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._ &&
                  _.data.qanda &&
                  _.data.questions
                ) {
                  for (const _ of _.data.questions) {
                    const _ = _.gidQuestion,
                      _ =
                        (_ =
                          (_ = this.m_mapQuestions.get(_)) == null
                            ? void 0
                            : _.bUserUpVoted) != null
                          ? _
                          : _.bUserUpVoted,
                      _ = {
                        ..._,
                        bUserUpVoted: _,
                      };
                    this.m_mapQuestions.set(_, _),
                      this.GetQuestionCallbackList(_).Dispatch(_);
                  }
                  const _ =
                      (_ =
                        (_ = this.m_mapQAndASessions.get(_)) == null
                          ? void 0
                          : _.bUserCanModerate) != null
                        ? _
                        : _.data.qanda.bUserCanModerate,
                    _ =
                      (_ =
                        (_ = this.m_mapQAndASessions.get(_)) == null
                          ? void 0
                          : _.bUserCanAskQuestions) != null
                        ? _
                        : _.data.qanda.bUserCanAskQuestions,
                    _ = {
                      ..._.data.qanda,
                      bUserCanModerate: _,
                      bUserCanAskQuestions: _,
                    };
                  return (
                    this.m_mapQAndASessions.set(_, _),
                    this.GetQAndACallbackList(_).Dispatch(_),
                    this.UpdatePendingQuestionList(_.data.qanda.rgQuestionGIDs),
                    _._
                  );
                }
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error("Could not load Q&A", _, _.strErrorMsg, _),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            UpdatePendingQuestionList(_) {
              var _;
              const _ = new Set();
              for (const _ of _) {
                const _ = this.m_mapQuestions.get(_);
                _.posterAccountID == _._.accountid &&
                  _.eState == _ &&
                  _.add(_.gidQuestion);
              }
              if (this.m_rgPendingQuestionGIDs.length > 0) {
                const _ = new Set(_);
                for (const _ of this.m_rgPendingQuestionGIDs)
                  _.has(_) &&
                    ((_ = this.m_mapQuestions.get(_)) == null
                      ? void 0
                      : _.eState) == _ &&
                    _.add(_);
              }
              this.m_rgPendingQuestionGIDs = Array.from(_);
            }
            async AskNewQuestion(_, _, _) {
              var _, _, _, _, _;
              if (
                !_._.logged_in ||
                !(0, _._)() ||
                !(
                  (_ = this.m_mapQAndASessions.get(_)) != null &&
                  _.bUserCanAskQuestions
                )
              )
                return _._;
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxaskquestion/" +
                  _,
                _ = new FormData();
              _.append("sessionid", (0, _._)()), _.append("question", _);
              let _ = null;
              try {
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._
                )
                  return (
                    this.m_rgPendingQuestionGIDs.push(_.data.gidQuestion),
                    this.LoadSession(_, !0, _),
                    _._
                  );
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error(
                  "Could not upload question",
                  _,
                  _,
                  _.strErrorMsg,
                  _,
                ),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            async ModerateQuestion(_, _, _, _) {
              var _, _, _, _, _;
              if (
                !_._.logged_in ||
                !(0, _._)() ||
                !(
                  (_ = this.m_mapQAndASessions.get(_)) != null &&
                  _.bUserCanModerate
                )
              )
                return _._;
              if (_ != _ && _ != _) return _._;
              if (this.m_mapQuestions.get(_).eState == _) return _._;
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxmoderatequestion/" +
                  _,
                _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gidquestion", _),
                _.append("action", _ == _ ? "show" : "hide");
              let _ = null;
              try {
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._
                )
                  return this.LoadSession(_, !0, _), _._;
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error(
                  "Could not moderate question",
                  _,
                  _,
                  _,
                  _.strErrorMsg,
                  _,
                ),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            async AnswerQuestion(_, _, _, _) {
              var _, _, _, _, _;
              if (
                !_._.logged_in ||
                !(0, _._)() ||
                !(
                  (_ = this.m_mapQAndASessions.get(_)) != null &&
                  _.bUserCanAskQuestions
                )
              )
                return _._;
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxanswerquestion/" +
                  _,
                _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gidquestion", _),
                _.append("answer", _);
              let _ = null;
              try {
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._
                )
                  return this.LoadSession(_, !0, _), _._;
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              const _ = (0, _._)(_);
              return (
                console.error(
                  "Could not upload answer",
                  _,
                  _,
                  _,
                  _.strErrorMsg,
                  _,
                ),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
            async VoteOnQuestion(_, _, _, _) {
              var _, _, _, _, _;
              if (
                !_._.logged_in ||
                !(0, _._)() ||
                !(
                  (_ = this.m_mapQAndASessions.get(_)) != null &&
                  _.bUserCanAskQuestions
                )
              )
                return _._;
              if (_ === this.m_mapQuestions.get(_).bUserUpVoted) return _._;
              let _ = this.m_mapQuestions.get(_);
              const _ = _.nVoteCount,
                _ = _ + (_ ? 1 : -1);
              (_ = {
                ..._,
                nVoteCount: _,
                bUserUpVoted: _,
              }),
                this.m_mapQuestions.set(_, _),
                this.GetQuestionCallbackList(_).Dispatch(_);
              const _ =
                  _._.COMMUNITY_BASE_URL +
                  "questions/" +
                  _._.VANITY_ID +
                  "/ajaxvoteforquestion/" +
                  _,
                _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gidquestion", _),
                _.append("up", _ ? "1" : "0");
              let _ = null;
              try {
                const _ = await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _ == null ? void 0 : _.token,
                });
                if (
                  (_ == null ? void 0 : _.status) == 200 &&
                  ((_ = _.data) == null ? void 0 : _.success) == _._
                )
                  return _._;
                _ = {
                  response: _,
                };
              } catch (_) {
                _ = _;
              }
              (_ = {
                ..._,
                nVoteCount: _,
                bUserUpVoted: !_,
              }),
                this.m_mapQuestions.set(_, _),
                this.GetQuestionCallbackList(_).Dispatch(_);
              const _ = (0, _._)(_);
              return (
                console.error(
                  "Could not upload vote",
                  _,
                  _,
                  _,
                  _.strErrorMsg,
                  _,
                ),
                (_ =
                  (_ =
                    (_ = _ == null ? void 0 : _.response) == null
                      ? void 0
                      : _.data) == null
                    ? void 0
                    : _.success) != null
                  ? _
                  : _._
              );
            }
          };
        _(_, "s_Singleton");
        let _ = _;
        function _(_) {
          const _ = (0, _._)("useQAndASession"),
            _ = _.useCallback(
              async (_) => {
                var _;
                return (
                  ((_ = _.Get().GetSession(_)) == null
                    ? void 0
                    : _.bUserCanAskQuestions) &&
                  (await _.Get().AskNewQuestion(_, _, _))
                );
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_, _) => {
                var _;
                return (
                  ((_ = _.Get().GetSession(_)) == null
                    ? void 0
                    : _.bUserCanAskQuestions) &&
                  _.Get().VoteOnQuestion(_, _, _, _)
                );
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_) => {
                var _;
                const _ = !!_,
                  _ = _ == null ? void 0 : _.strName,
                  _ = _ == null ? void 0 : _.bUserCanModerate,
                  _ = _ == null ? void 0 : _.bUserCanAskQuestions,
                  _ = [],
                  _ = [],
                  _ = [],
                  _ = [];
                for (const _ of (_ = _ == null ? void 0 : _.rgQuestionGIDs) !=
                null
                  ? _
                  : []) {
                  const _ = _.Get().GetQuestion(_);
                  switch (_ == null ? void 0 : _.eState) {
                    case _:
                      _.push(_);
                      break;
                    case _:
                      _.push(_);
                      break;
                    case _:
                      _.push(_);
                      break;
                    case _:
                      _.push(_);
                      break;
                  }
                }
                return (
                  _.sort(
                    (_, _) =>
                      _.Get().GetQuestion(_).nVoteCount -
                      _.Get().GetQuestion(_).nVoteCount,
                  ),
                  _.sort(
                    (_, _) =>
                      _.Get().GetQuestion(_).rtAnswerTime -
                      _.Get().GetQuestion(_).rtAnswerTime,
                  ),
                  _.sort(
                    (_, _) =>
                      _.Get().GetQuestion(_).rtPostTime -
                      _.Get().GetQuestion(_).rtPostTime,
                  ),
                  _.sort(
                    (_, _) =>
                      _.Get().GetQuestion(_).rtPostTime -
                      _.Get().GetQuestion(_).rtPostTime,
                  ),
                  {
                    bIsLoaded: _,
                    strName: _,
                    bUserCanModerate: _,
                    bUserCanAskQuestions: _,
                    fnAskQuestion: _,
                    fnVoteOnQuestion: _,
                    rgModeratedQuestionGIDs: _,
                    rgAnsweredQuestionGIDs: _,
                    rgNewQuestionGIDs: _,
                    rgHiddenQuestionGIDs: _,
                  }
                );
              },
              [_, _],
            ),
            [_, _] = _.useState(() => _(_.Get().GetSession(_))),
            _ = _.useCallback((_) => _(_(_)), [_]);
          return (
            (0, _._)(_.Get().GetQAndACallbackList(_), _),
            _.useEffect(() => {
              _.bIsLoaded || _.Get().LoadSession(_);
            }, [_.bIsLoaded, _]),
            _
          );
        }
        let _ = null;
        function _(_) {
          const _ = (0, _._)("useReloadFunction"),
            [_, _] = _.useState(!1),
            _ = _.useCallback(() => {
              _(!0);
              const _ = _.Get().LoadSession(_, !1, _);
              return _.then(() => _(!1)), _;
            }, [_, _]),
            _ = _(_);
          return (
            _.useEffect(
              () =>
                _
                  ? () => {}
                  : ((_ = window.setInterval(_, 1e4)),
                    () => window.clearInterval(_)),
              [_],
            ),
            _.useMemo(
              () => ({
                fnReload: _,
                bIsReloading: _,
              }),
              [_, _],
            )
          );
        }
        function _(_) {
          const [_, _] = _.useState(_.Get().GetQuestion(_));
          (0, _._)(_.Get().GetQuestionCallbackList(_), _);
          const [_, _] = _.useState(!!_);
          return [_, !!_ || _];
        }
        function _(_) {
          const _ = (0, _._)("useQuestionModeratorActions"),
            _ = _.useCallback(
              (_, _) => {
                var _;
                return (
                  ((_ = _.Get().GetSession(_)) == null
                    ? void 0
                    : _.bUserCanModerate) && _.Get().AnswerQuestion(_, _, _, _)
                );
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_, _) => {
                var _;
                return (
                  ((_ = _.Get().GetSession(_)) == null
                    ? void 0
                    : _.bUserCanModerate) &&
                  _.Get().ModerateQuestion(_, _, _, _)
                );
              },
              [_, _],
            );
          return _.useMemo(
            () => ({
              fnAnswerQuestion: _,
              fnModerateQuestion: _,
            }),
            [_, _],
          );
        }
        function _() {
          const [_, _] = _.useState(_.Get().GetAllSessions());
          return (
            (0, _._)(_.Get().GetDashboardCallbackList(), _),
            _.useEffect(() => {
              _.length == 0 && _.Get().LoadAllSessions();
            }, [_.length]),
            _
          );
        }
        function _() {
          const _ = (0, _._)("useCreateQAndAFn");
          return _.useCallback((_) => _.Get().CreateNewSession(_, _), [_]);
        }
        function _() {
          const _ = (0, _._)("useRenameQAndAFn");
          return _.useCallback((_, _) => _.Get().RenameSession(_, _, _), [_]);
        }
        function _() {
          const _ = (0, _._)("useDeleteQAndAFn");
          return _.useCallback((_) => _.Get().DeleteSession(_, _), [_]);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _();
          return (0, _.jsxs)("div", {
            className: _().QADashboardCtn,
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().DashboardRow,
                  _().DashboardColumnHeaders,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: _().QAndAName,
                    children: (0, _._)("#QAndA_Column_Name"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().GIDSession,
                    children: (0, _._)("#QAndA_Column_GID"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().QuestionCount,
                    children: (0, _._)("#QAndA_Column_QuestionCount"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().QAndADeleteColumn,
                    children: (0, _._)("#QAndA_Column_DeleteButtons"),
                  }),
                ],
              }),
              _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    qanda: _,
                  },
                  _.gidSession,
                ),
              ),
            ],
          });
        }
        function _(_) {
          const _ = _.useCallback(
            () =>
              (0, _._)((0, _.jsx)(_, {}), window, {
                strTitle: (0, _._)("#QAndA_CreateQAndA_Title"),
              }),
            [],
          );
          return (0, _.jsxs)("div", {
            className: _().DashboardHeader,
            children: [
              (0, _.jsx)("div", {
                className: _().DashboardHeaderTitle,
                children: (0, _._)("#QAndA_Dashboard"),
              }),
              (0, _.jsx)("div", {
                className: _().DashboardHeaderButtonCtn,
                children: (0, _.jsx)(_._, {
                  onClick: _,
                  children: (0, _._)("#QAndA_CreateQAndA_Button"),
                }),
              }),
            ],
          });
        }
        const _ = 120;
        function _(_) {
          const _ = _(),
            [_, _] = _.useState("");
          return (0, _.jsx)(_._, {
            strTitle: (0, _._)("#QAndA_CreateQAndA_Title"),
            strDescription: (0, _._)("#QAndA_CreateQAndA_Instructions"),
            strOKButtonText: (0, _._)("#Button_Create"),
            onOK: () => _(_),
            bOKDisabled: _.length == 0,
            closeModal: _.closeModal,
            className: _().CreateQAndADialog,
            children: (0, _.jsx)(_._, {
              type: "text",
              className: _().NameInput,
              value: _,
              placeholder: (0, _._)("#QAndA_EnterNamePrompt"),
              onFocus: (_) => _.target.select(),
              onChange: (_) => _(_.currentTarget.value),
              maxLength: _,
            }),
          });
        }
        function _(_) {
          const { qanda: _ } = _,
            _ =
              _._.COMMUNITY_BASE_URL +
              "questions/" +
              _._.VANITY_ID +
              "/view/" +
              _.gidSession,
            _ = _.useCallback(
              (_) => {
                _.stopPropagation(),
                  _.preventDefault(),
                  (0, _._)(
                    (0, _.jsx)(_, {
                      qanda: _,
                    }),
                    window,
                    {
                      strTitle: (0, _._)("#QAndA_CreateQAndA_Title"),
                    },
                  );
              },
              [_],
            );
          return (0, _.jsxs)("a", {
            className: _().DashboardRow,
            href: _,
            children: [
              (0, _.jsx)(_, {
                qanda: _,
              }),
              (0, _.jsx)("div", {
                className: _().GIDSession,
                children: _.gidSession,
              }),
              (0, _.jsx)("div", {
                className: _().QuestionCount,
                children: _.rgQuestionGIDs.length,
              }),
              (0, _.jsx)("div", {
                className: _().QAndADeleteColumn,
                children: (0, _.jsx)("div", {
                  className: _().DeleteButton,
                  onClick: _,
                  children: (0, _.jsx)(_.lMJ, {}),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { qanda: _ } = _,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(_.strName),
            _ = _(),
            _ = (_) => {
              _.stopPropagation(), _.preventDefault(), _ || _(!0);
            },
            _ = (_) => {
              _.stopPropagation(),
                _.preventDefault(),
                (0, _._)(_, _.strName) != 0
                  ? _(_.gidSession, _).then(() => _(!1))
                  : _(!1);
            },
            _ =
              _.strName.length > 0
                ? _.strName
                : (0, _.jsx)("span", {
                    className: _().Prompt,
                    children: (0, _._)("#QAndA_EnterNamePrompt"),
                  }),
            _ = (0, _.jsxs)("div", {
              className: _().NameInput,
              children: [
                (0, _.jsx)(_._, {
                  type: "text",
                  className: _().NameInput,
                  value: _,
                  placeholder: (0, _._)("#QAndA_EnterNamePrompt"),
                  onFocus: (_) => _.target.select(),
                  onChange: (_) => _(_.currentTarget.value),
                  maxLength: _,
                }),
                (0, _.jsx)(_._, {
                  onClick: _,
                  className: _().InputButton,
                  children: (0, _._)("#Button_Save"),
                }),
              ],
            });
          return (0, _.jsx)("div", {
            className: (0, _._)(_().QAndAName, _ && _().Editing),
            onClick: _,
            children: _ ? _ : _,
          });
        }
        function _(_) {
          const { qanda: _ } = _,
            _ = _();
          return (0, _.jsxs)(_._, {
            strTitle: (0, _._)("#QAndA_Column_DeleteButtons"),
            strDescription: (0, _._)("#QAndA_DeleteQAndA_Instructions"),
            onOK: () => _(_.gidSession),
            closeModal: _.closeModal,
            className: _().DeleteQAndADialog,
            children: [
              (0, _.jsx)("div", {
                className: _().DeleteInfo,
                children: (0, _._)("#QAndA_Column_Name") + ": " + _.strName,
              }),
              (0, _.jsx)("div", {
                className: _().DeleteInfo,
                children:
                  (0, _._)("#QAndA_Column_QuestionCount") +
                  ": " +
                  _.rgQuestionGIDs.length,
              }),
            ],
          });
        }
        function _(_) {
          const {
              gidSession: _,
              gidQuestion: _,
              bUserCanModerate: _,
              bUserCanVote: _,
              fnVoteOnQuestion: _,
              rtNow: _,
            } = _,
            [_, _] = _(_);
          if (!_) return null;
          const _ = _ - _.rtPostTime,
            _ = _ < _._.PerDay ? (0, _._)(_) : (0, _._)(_.rtPostTime),
            _ = _ ? () => _(_, !_.bUserUpVoted) : null,
            _ = _
              ? _.bUserUpVoted
                ? _().Vote_Positive
                : _().Vote_Ready
              : _().Vote_CannotVote,
            _ = (0, _._)(
              _().Question,
              _.eState == _ && _().Hidden,
              _.eState == _ && _().Moderated,
              _.eState == _ && _().Unmoderated,
              _.eState == _ && _().Answered,
            );
          return (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().QuestionCtn, "questionCtn"),
                children: [
                  (0, _.jsx)(_, {
                    accountID: _.posterAccountID,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().QuestionText,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().QuestionAndVotes,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().QuestionTitle,
                            children: _.strQuestionText,
                          }),
                          (0, _.jsx)(_._, {
                            toolTipContent:
                              _ &&
                              (_.bUserUpVoted
                                ? (0, _._)("#QAndA_VoteRemoveTooltip")
                                : (0, _._)("#QAndA_VoteTooltip")),
                            children: (0, _.jsxs)("div", {
                              className: (0, _._)(_, _().Votes),
                              onClick: _,
                              children: [
                                (0, _.jsx)(_.bfp, {
                                  className: _().RateIcon,
                                }),
                                (0, _.jsx)("div", {
                                  className: _().VoteCount,
                                  children: (0, _._)(Number(_.nVoteCount)),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().QuestionStats,
                        children: (0, _.jsx)("div", {
                          className: _().PostTime,
                          children: (0, _.jsx)(_._, {
                            rtFullDate: _.rtPostTime,
                            className: _().PostTime,
                            stylesmodule: _(),
                            children: _,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              _.rtAnswerTime &&
                (0, _.jsx)(_, {
                  question: _,
                  rtNow: _,
                }),
              _ &&
                (0, _.jsx)(_, {
                  gidSession: _,
                  gidQuestion: _,
                  eState: _ == null ? void 0 : _.eState,
                }),
            ],
          });
        }
        function _(_) {
          const { question: _, rtNow: _ } = _,
            _ = _.rtAnswerTime && _ - _.rtAnswerTime,
            _ =
              _.rtAnswerTime &&
              (_ < _._.PerDay ? (0, _._)(_) : (0, _._)(_.rtAnswerTime));
          return _.strAnswerText
            ? (0, _.jsxs)("div", {
                className: _().Answer,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().AnswerTitle,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().AnswerCheck,
                        children: (0, _.jsx)(_.X4B, {
                          color: "#67c1f5",
                        }),
                      }),
                      (0, _._)("#QAndA_ModeratorAnswerTitle"),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _().AnswerText,
                    children: [" ", _.strAnswerText, " "],
                  }),
                  (0, _.jsx)("div", {
                    className: _().QuestionStats,
                    children: (0, _.jsx)(_._, {
                      rtFullDate: _.rtAnswerTime,
                      className: _().PostTime,
                      stylesmodule: _(),
                      children: _,
                    }),
                  }),
                ],
              })
            : (0, _.jsxs)("div", {
                className: _().AnswerTitle,
                children: [
                  (0, _.jsx)("div", {
                    className: _().AnswerCheck,
                    children: (0, _.jsx)(_.X4B, {
                      color: "#67c1f5",
                    }),
                  }),
                  (0, _._)("#QAndA_AlreadyAnsweredTitle"),
                ],
              });
        }
        function _(_) {
          const _ = CSteamID.InitFromAccountID(_.accountID),
            { data: _ } = usePlayerSummary(_.accountID);
          return jsx("div", {
            className: styles.UserAvatar,
            children:
              !!_ &&
              jsx("img", {
                src: _.avatar_url,
                "data-miniprofile": "s" + _.ConvertTo64BitString(),
              }),
          });
        }
        function _(_) {
          var _;
          const _ = _._.InitFromAccountID(_.accountID).ConvertTo64BitString(),
            { isLoading: _, data: _ } = (0, _._)(_.accountID);
          return _
            ? null
            : (0, _.jsx)("a", {
                href: _.GetCommunityProfileURL(),
                className: _().PersonaName,
                "data-miniprofile": "s" + _,
                children:
                  (_ = _ == null ? void 0 : _.m_strPlayerName) != null ? _ : _,
              });
        }
        function _(_) {
          const { gidSession: _, gidQuestion: _, eState: _ } = _,
            { fnAnswerQuestion: _, fnModerateQuestion: _ } = _(_),
            _ = () => _(_, _),
            _ = () => _(_, _),
            _ = () => _(_, ""),
            _ = _ == _ || _ == _,
            _ = _ != _,
            _ = _ == _;
          return (0, _.jsxs)("div", {
            className: _().ModeratorSection,
            children: [
              (0, _._)("#QAndA_ModeratorLabel"),
              (0, _.jsx)("div", {
                className: _().ToolRow,
                children: (0, _.jsx)(_, {
                  strPrompt: (0, _._)("#QAndA_AnswerPrompt"),
                  fnSubmit: (_) => _(_, _),
                }),
              }),
              (0, _.jsxs)("div", {
                className: _().ToolRow,
                children: [
                  (0, _._)("#QAndA_ModeratorOtherOptionsLabel"),
                  (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)(
                      "#QAndA_ModerateApproveButton_ttip",
                    ),
                    children: (0, _.jsx)(_._, {
                      onClick: _,
                      className: _().InputButton,
                      disabled: !_,
                      children: (0, _._)("#QAndA_ModerateApproveButton"),
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)("#QAndA_ModerateHideButton_ttip"),
                    children: (0, _.jsx)(_._, {
                      onClick: _,
                      className: _().InputButton,
                      disabled: !_,
                      children: (0, _._)("#QAndA_ModerateHideButton"),
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)("#QAndA_QuickAnswerButton_ttip"),
                    children: (0, _.jsx)(_._, {
                      onClick: _,
                      className: _().InputButton,
                      disabled: !_,
                      children: (0, _._)("#QAndA_QuickAnswerButton"),
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { gidSession: _ } = _;
          _();
          const { strName: _, bUserCanModerate: _ } = _(_);
          return (0, _.jsxs)("div", {
            className: _().QAFullPageView,
            children: [
              (0, _.jsx)("div", {
                className: _().QAName,
                children:
                  (0, _._)("#QAndA_Header") +
                  ((_ == null ? void 0 : _.length) > 0 ? ": " + _ : ""),
              }),
              (0, _.jsxs)("div", {
                className: _().QAColumns,
                children: [
                  (0, _.jsx)(_, {
                    gidSession: _,
                    bHalfOfFullPage: _,
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      gidSession: _,
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { gidSession: _ } = _,
            {
              bUserCanModerate: _,
              rgNewQuestionGIDs: _,
              rgHiddenQuestionGIDs: _,
            } = _(_),
            _ = (0, _._)(10);
          return _
            ? (0, _.jsxs)("div", {
                className: (0, _._)(_().QAModeratorColumn, _().QASplitColumns),
                children: [
                  (0, _.jsx)(_._, {
                    title: (0, _._)("#QAndA_ModeratorViewHeader"),
                    className: _().ModeratorInstructions,
                    children: (0, _.jsx)("div", {
                      className: _().QuestionList,
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            gidSession: _,
                            gidQuestion: _,
                            bUserCanModerate: _,
                            bUserCanVote: !1,
                            rtNow: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    title: (0, _._)("#QAndA_HiddenQuestionsHeader"),
                    className: _().AnsweredSectionHeader,
                    bStartMinimized: !0,
                    children: (0, _.jsx)("div", {
                      className: _().QuestionList,
                      children: _.map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            gidSession: _,
                            gidQuestion: _,
                            bUserCanModerate: _,
                            bUserCanVote: !1,
                            rtNow: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { gidSession: _, bHalfOfFullPage: _ } = _;
          _();
          const {
              bIsLoaded: _,
              bUserCanAskQuestions: _,
              bUserCanModerate: _,
              fnAskQuestion: _,
              fnVoteOnQuestion: _,
              rgModeratedQuestionGIDs: _,
              rgAnsweredQuestionGIDs: _,
              rgNewQuestionGIDs: _,
            } = _(_),
            { fnReload: _, bIsReloading: _ } = _(_),
            _ = (0, _._)(10),
            _ = _ && _,
            { fnModerateQuestion: _ } = _(_),
            _ = async () => {
              for (const _ of [_, _, _]) for (const _ of _) await _(_, _);
            };
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().QAMainCtn, _ && _().QASplitColumns),
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().QAHeader, _ && _().ModerationHeader),
                children: [
                  (0, _.jsx)(_._, {
                    onClick: _,
                    disabled: !_,
                    className: (0, _._)(
                      _().InputButton,
                      _().Reload,
                      _ && _().Reloading,
                    ),
                    children: (0, _.jsx)("div", {
                      className: _().ReloadIcon,
                      children: (0, _.jsx)(_.MvQ, {}),
                    }),
                  }),
                  _
                    ? (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _._)("#QAndA_ModeratorLabelHeader"),
                          (0, _.jsx)(_._, {
                            toolTipContent: (0, _._)(
                              "#QAndA_ModerateHideAllButton_ttip",
                            ),
                            children: (0, _.jsx)(_._, {
                              onClick: _,
                              className: _().InputButton,
                              children: (0, _._)(
                                "#QAndA_ModerateHideAllButton",
                              ),
                            }),
                          }),
                        ],
                      })
                    : _
                      ? (0, _.jsx)(_, {
                          fnAskQuestion: _,
                        })
                      : _ && (0, _.jsx)(_, {}),
                ],
              }),
              _.length + _.length == 0
                ? (0, _.jsx)("div", {
                    className: _().NoQuestions,
                    children: (0, _._)("#QAndA_NoQuestionsYet"),
                  })
                : (0, _.jsxs)("div", {
                    className: _().QuestionsCtn,
                    children: [
                      (0, _.jsx)("div", {
                        className: _().InsetShadowTopCtn,
                        children: (0, _.jsx)("div", {
                          className: _().InsetShadowTop,
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: _().QuestionList,
                        children: _
                          ? _.map((_) =>
                              (0, _.jsx)(
                                _,
                                {
                                  gidSession: _,
                                  gidQuestion: _,
                                  bUserCanModerate: _,
                                  bUserCanVote: _,
                                  fnVoteOnQuestion: _,
                                  rtNow: _,
                                },
                                _,
                              ),
                            )
                          : (0, _.jsx)(_._, {
                              position: "center",
                            }),
                      }),
                      _.length > 0 &&
                        (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("div", {
                              className: _().AnsweredSectionHeader,
                              children: (0, _._)(
                                "#QAndA_AnsweredQuestionsHeader",
                              ),
                            }),
                            (0, _.jsx)("div", {
                              className: _().QuestionList,
                              children: _.map((_) =>
                                (0, _.jsx)(
                                  _,
                                  {
                                    gidSession: _,
                                    gidQuestion: _,
                                    bUserCanModerate: _,
                                    bUserCanVote: _,
                                    fnVoteOnQuestion: _,
                                    rtNow: _,
                                  },
                                  _,
                                ),
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
            ],
          });
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = (0, _._)("QuestionBox"),
            _ = async (_) => {
              const _ = await _.fnAskQuestion(_);
              return (
                _ == _._ &&
                  !_.token.reason &&
                  (_(!0),
                  window.setTimeout(() => {
                    _.token.reason || _(!1);
                  }, 1e3)),
                _
              );
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: _().Description,
                children: (0, _._)("#QAndA_HeaderDescription"),
              }),
              (0, _.jsx)(_, {
                strPrompt: (0, _._)("#QAndA_QuestionPrompt"),
                fnSubmit: _,
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().QuestionACK, _ && _().Visible),
                children: (0, _._)("#QAndA_QuestionWasPosted"),
              }),
            ],
          });
        }
        function _(_) {
          const { strPrompt: _, fnSubmit: _ } = _,
            [_, _] = _.useState(""),
            [_, _] = _.useState(!1),
            _ = async () => {
              _(!0), (await _(_)) == _._ && _(""), _(!1);
            };
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsxs)("div", {
              className: _().InputCtn,
              children: [
                (0, _.jsx)(_._, {
                  type: "text",
                  placeholder: _,
                  maxLength: 512,
                  value: _,
                  onChange: (_) => _(_.target.value),
                }),
                (0, _.jsxs)("div", {
                  className: _().ButtonCtn,
                  children: [
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().SaveSpinner,
                        children: (0, _.jsx)(_._, {
                          size: "small",
                          position: "center",
                        }),
                      }),
                    (0, _.jsx)(_._, {
                      onClick: _,
                      disabled: _ || !_,
                      className: _().InputButton,
                      children: (0, _._)("#QAndA_SubmitCommentButton"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _().Description,
            children: [
              (0, _.jsx)("div", {
                className: _().LogInPrompt,
                children: (0, _._)("#QAndA_LogInPrompt"),
              }),
              !_._.logged_in &&
                (0, _.jsx)(_._, {
                  onClick: _._,
                  className: (0, _._)(_().SignInButton, _().InputButton),
                  children: (0, _._)("#Login_SignIn"),
                }),
            ],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          QAFullPageView: "_3tZpFqpGKrksArepdxSE5j",
          QAName: "_2mOBpH-Q1B2CGYjpyVcZvL",
          QAColumns: "pBgAbPu5S77EkhwULNJMQ",
          QAMainCtn: "hHqRc8tmJX5DmOC_J9OSu",
          QAModeratorColumn: "nfftCsjuFUxqo7oht5ZvS",
          QASplitColumns: "_1CRIgUwMI8-DV8bby3TWQb",
          ModeratorInstructions: "RqtnW1y7dqFHzNYQgEXMn",
          AnsweredSectionHeader: "_3cWpkis2Mqzl8A8xF-a9em",
          InputButton: "_1z1rtA-m0g-2LV2Vt1oofr",
          Reload: "_3LIo4Gupf-bEyoN38m0xLy",
          Reloading: "_1hooLg2kfnpqXDhLgPG6gH",
          SignInButton: "GRHnXc4HVJuz6yC7Gkr5k",
          QAHeader: "_3skHmzAqxcsZBq_tkNXLzN",
          QuestionACK: "_16zhk22TxzqPMUoz7I3WEB",
          Visible: "_2jHMeCl9ijq2--JlPwQ6Fz",
          QATitleRow: "_2qdcmBnuOzyLEABfqaT8qv",
          QATitle: "_1c7nCnSMqU4Ukz3wdWSqXF",
          Description: "_3eGNNYyxMkZO39myQDE1XE",
          InputCtn: "oF1kTvqJ3SFh3lHuR5ZHs",
          LogInPrompt: "_3Gbueor3CAgrLqcm5BgjPx",
          ButtonCtn: "_3kFHrlDJDcAvIcJq4lX8lD",
          SaveSpinner: "_20svvC9NhGF5A1hTD-y9kJ",
          QuestionsCtn: "_1W6uJMpV-79gv8A662-iKM",
          InsetShadowTopCtn: "ak9JV2IB-GQLWSc_4GpKB",
          InsetShadowTop: "_1C2e4GaJWY9UCfxJeu3Ifp",
          QuestionsHeader: "jUQG923rSCGTIp6iR40rb",
          QuestionsTitle: "_2CYLB3xFHbAEJS6Z-bSlKz",
          QuestionList: "_28dwOiBG4CQlQcXClFrN9K",
          NoQuestions: "_1R9HBMmOpYYYhZwQh1m5U1",
          Question: "_3BIOouufQgR-V7ivTXLZAm",
          Hidden: "_3XPCkzLM8mFswGMcSCywUA",
          QuestionCtn: "_31sLydaeDe38gXM5axlD9O",
          UserAvatar: "_2ojKekaqQWNpGw8G3x8l_r",
          PersonaName: "_3CaA53te3MV1l4rP0TmdB9",
          QuestionText: "_2NuCE315-vCtCSzxcT1qEm",
          QuestionAndVotes: "ChywOlxnWN_3W_lql2DeN",
          QuestionTitle: "_2AXcHkyp6G5iqdDfTZiwAg",
          QuestionStats: "_1DzgV6zsHS23fEBSvckX88",
          PostTime: "_2hfBugBzm8yU7a82qW2cHx",
          Votes: "_2IyuQJGwbrnTb3a7m8KsZ9",
          Vote_Ready: "_3_8_aVxn-PwduHvKlx36tI",
          Vote_Positive: "eWDCyQ-vvgH6BcvF4_o_e",
          RateIcon: "_2j0GwqqS7RK_-mNPfvuX0f",
          Vote_CannotVote: "_2Pq4zAswQX0s4q5BmDOcoK",
          DateAndTime: "_4VjnZ9DL9exM7YcbLbSh",
          Answer: "wNABP6_Qx7yRFrLkXK41M",
          AnswerTitle: "_1c4moP5DV4s2TT8XzHbSDw",
          AnswerCheck: "u8uV8ZaFofO6c9D42VGY2",
          AnswerText: "_3ar8cNQn3f1-OIjiWPPitA",
          ModerationHeader: "_37OKcYRfuIkylm4nu1umCb",
          ModeratorSection: "_3tP54OFg61u8qq9vrI1GA2",
          ToolRow: "_2c2voljR8QU6ly18xBe9Zx",
          ToolLabel: "_3prTNENecqxmB7UBSWgUyl",
          QADashboardCtn: "_32zJGAGkfjaRrwwUDmbx_Y",
          DashboardHeader: "_1R1EmLdoSBJK82hy_FSG9G",
          DashboardHeaderTitle: "_1cRHaKXhGTjxUnsyLMS0IW",
          DashboardHeaderButtonCtn: "uoLDQx7BVP24M7CtMdUVy",
          DashboardRow: "gpraRkr_GCHPzeFW5wUm7",
          GIDSession: "_3d_6fxEUu5QKFk1X6BmmdU",
          QuestionCount: "_3kZ9Sdx0fxIPNbawZ-iPRU",
          QAndADeleteColumn: "_363MyYnsIHR3suqCkDJb1a",
          QAndAName: "_2-5V8wZPsLM9riXorBMJ1F",
          Prompt: "_2ZFvNUfdh3b32ljUOOm1NB",
          Editing: "_1wUKv_abvHzqvyJg-4E_04",
          NameInput: "_3avr0gEWefqtJlQehAE4CH",
          DeleteButton: "o8aBaeNMu_AdleoGeHA_Z",
          DashboardColumnHeaders: "_2WOM0O_ir8k-lcFjHONR4_",
          CreateQAndADialog: "_1wBzuya0z43LtB3hBPU90I",
          DeleteQAndADialog: "_3valPN89TuPANLrExHyKuc",
          DeleteInfo: "_3EhGHfB3z9uPkO3ZTnwUVm",
        };
      },
    },
  ]);
})();
