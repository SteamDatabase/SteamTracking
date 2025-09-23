(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5068],
  {
    chunkid: (module) => {
      module.exports = {
        narrowWidth: "500px",
        JoinApp: "_27LPt-4kZ0Y0j9DNG19rsN",
        SessionInfoCtr: "z4yEIu1D7pKZ9BNib5lIq",
        SectionCtr: "_3pJz3d4_3A43Jh7D44SUlm",
        JoinSessionButton: "oFMSJB00CTFnfT-758yts",
        SessionList: "_25Du_Z4_ooVhqUEkiYSqxt",
        Session: "zNbRzxK68u4bzfA0OyV0I",
        MachineName: "EOLg7Cdie5CHJUEGL6-CB",
        OsName: "S5bNzjo6KMcWWn6Ms9QuY",
        AvailableSessionsText: "_1NtbtSr3XzLpXPC3ugtzr9",
        Header: "_239fSrbkMDKdFJQsaOV8MW",
        Explanation: "_1isyHy9nKabM8wUFKUu-lm",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _._,
        _: () => _,
        _: () => _._,
        _: () => _._,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ =
          (__webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"),
          __webpack_require__("chunkid"));
      __webpack_require__("chunkid");
      function _(_) {
        const { labelledBy: _ } = _ || {},
          [__webpack_require__, _] = _.useState(void 0);
        return {
          headerId: _ || __webpack_require__,
          context: _.useMemo(
            () => ({
              setHeaderId: _,
            }),
            [],
          ),
        };
      }
      function _(_) {
        const {
            active: _,
            onDismiss: __webpack_require__,
            className: _,
            modalClassName: _,
            children: _,
            ..._
          } = _,
          { headerId: _, context: _ } = _({
            labelledBy: _["aria-labelledby"],
          });
        return _.createElement(
          _._.Provider,
          {
            value: _,
          },
          _.createElement(
            _._,
            {
              active: _,
            },
            _.createElement(
              _._,
              {
                onEscKeypress: __webpack_require__,
                className: _,
              },
              _.createElement(
                _._,
                {
                  role: "dialog",
                  "aria-labelledby": _,
                  className: _,
                  ..._,
                },
                _,
              ),
            ),
          ),
        );
      }
      function _(_) {
        const { className: _, children: __webpack_require__ } = _;
        return _.createElement(
          _._,
          {
            active: !0,
          },
          _.createElement(
            "div",
            {
              className: _,
            },
            __webpack_require__,
          ),
        );
      }
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { children: _, navID: __webpack_require__, closeModal: _ } = _,
          _ = _.createRef(),
          _ = (_) => (_.stopPropagation(), _.preventDefault(), !0);
        return (0, _._)() && !_._.IN_STEAMUI
          ? _.createElement(
              _._,
              {
                navID: __webpack_require__,
                navTreeRef: _,
                onCancelButton: _,
                className: _.GamepadOnlyModalWrapper,
              },
              _.createElement(
                _._,
                null,
                _.createElement(
                  _._,
                  {
                    className: _.GamepadOnlyPanelWrapper,
                    onGamepadDirection: _,
                    focusableIfEmpty: !0,
                  },
                  _,
                ),
              ),
            )
          : _.createElement(_.Fragment, null, _);
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
    },
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      let _;
      const _ = 864e5;
      function _(_) {
        return `appinfo_${_}_${_._.LANGUAGE}`;
      }
      function _(_) {
        return Boolean(_ && Date.now() - _.timeCached < _);
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          queryKey: ["appinfo", _],
          queryFn: async () =>
            (function (_, _) {
              return (
                _ ||
                  (_ = new (_())(
                    async (_) => {
                      const _ = new Map();
                      (
                        await Promise.all(
                          __webpack_require__.map((_) => _.GetObject(_(_))),
                        )
                      )
                        .filter(_)
                        .forEach(({ value: _ }) => _.set(_.appid, _));
                      const _ = __webpack_require__
                        .slice()
                        .filter((_) => !_.has(_));
                      if (_.length) {
                        const _ = _._.Init(_._);
                        __webpack_require__
                          .Body()
                          .set_language((0, _._)(_._.LANGUAGE)),
                          __webpack_require__.Body().set_appids(_);
                        const _ = await _._.GetApps(_, _);
                        if (1 != _.GetEResult()) throw _.GetErrorMessage();
                        _.Body()
                          .toObject()
                          .apps.forEach((_) => {
                            _.StoreObject(_(_.appid), {
                              timeCached: Date.now(),
                              value: _,
                            }),
                              _.set(_.appid, _);
                          });
                      }
                      return __webpack_require__.map((_) => _.get(_));
                    },
                    {
                      cache: !1,
                    },
                  )),
                _
              );
            })(_, _).load(_),
          staleTime: _,
          enabled: !!_,
        }).data;
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return `?joinsessionid=${_}`;
      }
      function _(_) {
        return _.createElement(
          _._,
          {
            className: _().JoinSessionButton,
            onClick: () =>
              (window.location.href =
                `steam://launch/${_.steamAppId}` + _(_.sessionID)),
          },
          _.children,
        );
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return _.isSuccess
          ? _.data?.sessions?.length > 0
            ? _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  _._,
                  {
                    className: _().AvailableSessionsText,
                  },
                  "Available Steam Sessions:",
                ),
                _.createElement(
                  "div",
                  {
                    className: _().SessionList,
                  },
                  _.data?.sessions.map((_) =>
                    _.createElement(
                      "div",
                      {
                        className: _().Session,
                        key: _.client_instanceid,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _().MachineName,
                        },
                        _.machine_name,
                      ),
                      _.createElement(
                        "div",
                        {
                          className: _().OsName,
                        },
                        _.os_name,
                      ),
                      _.createElement(
                        _._,
                        {
                          className: _().JoinSessionButton,
                          onClick: () =>
                            (0, _._)(
                              _,
                              _.client_instanceid,
                              _.steamAppId,
                              _(_.sessionID),
                            ),
                        },
                        "Launch Game",
                      ),
                    ),
                  ),
                ),
              )
            : _.createElement(
                "div",
                {
                  className: _().Error,
                },
                "No logged in sessions",
              )
          : _.isFetching || _.isRefetching
            ? _.createElement(_._, null)
            : _.createElement(
                "div",
                {
                  className: _().Error,
                },
                "Error ",
                _.error.message,
              );
      }
      function _(_) {
        const _ = _(_.steamAppId);
        return _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: _().Header,
                },
                "Join Game Session",
              ),
              _.createElement(
                "div",
                {
                  className: _().Explanation,
                },
                "You've been invited to join a game! Click below to launch ",
                _.friendly_name || _.name,
                " on Steam and start playing.",
              ),
              _.createElement(
                "div",
                {
                  className: _().SessionInfoCtr,
                },
                _.createElement("iframe", {
                  src: _.sessionLiveDataUrl,
                }),
              ),
              _._.IN_CLIENT
                ? _.createElement(
                    "div",
                    {
                      className: _().SectionCtr,
                    },
                    _.createElement(
                      _,
                      {
                        ..._,
                      },
                      "Launch Game",
                    ),
                  )
                : _.createElement(
                    _.Fragment,
                    null,
                    _.createElement(
                      "div",
                      {
                        className: _().SectionCtr,
                      },
                      _._.logged_in
                        ? _.createElement(_, {
                            ..._,
                          })
                        : _.createElement(
                            _.Fragment,
                            null,
                            _.createElement(
                              _._,
                              null,
                              "Login to join on another device",
                            ),
                            _.createElement(
                              _._,
                              {
                                onClick: _._,
                              },
                              (0, _._)("#Login_SignIn"),
                            ),
                          ),
                    ),
                    !_._.IN_MOBILE_WEBVIEW &&
                      _.createElement(
                        "div",
                        {
                          className: _().SectionCtr,
                        },
                        _.createElement(_._, null, "Or launch on this PC"),
                        _.createElement(
                          _,
                          {
                            ..._,
                          },
                          "Launch Game Here",
                        ),
                      ),
                  ),
            )
          : _.createElement(_._, null);
      }
      function _() {
        const _ = (0, _._)("multiplayersession_join", "application_config"),
          _ = new URLSearchParams((0, _._)().search).get("jws"),
          { header: __webpack_require__, body: _ } = (0, _._)(_) || {
            header: {},
            body: {},
          };
        let { steamAppId: _ } = _;
        const _ = _[_.jws_sessionid_key],
          _ = _[_.jws_livedata_url_key];
        return (
          "string" == typeof _ && (_ = parseInt(_)),
          _.createElement(
            "div",
            {
              className: _().JoinApp,
            },
            _ && _ && _
              ? _.createElement(_, {
                  steamAppId: _,
                  sessionLiveDataUrl: _,
                  sessionID: _,
                })
              : _.createElement("div", null, "Invalid session link"),
            " ",
          )
        );
      }
    },
  },
]);
