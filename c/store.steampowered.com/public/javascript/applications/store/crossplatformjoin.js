(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [15068],
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
        return (0, _.jsx)(_._, {
          onEscKeypress: _.closeModal,
          bDisableBackgroundDismiss: !0,
          children: (0, _.jsx)(_, {
            redirectURL: _.redirectURL,
            guestOption: _.guestOption,
          }),
        });
      }
      function _(_) {
        const { redirectURL: _ = window.location.href } = _;
        return (0, _.jsx)(_._, {
          active: !0,
          children: (0, _.jsx)(_, {
            redirectURL: _,
          }),
        });
      }
      function _() {
        (0, _._)(
          (0, _.jsx)(_, {
            ownerWin: window,
            redirectURL: window.location.href,
          }),
          window,
          {
            strTitle: (0, _._)("#Login_SignInTitle"),
          },
        );
      }
      function _(_, _) {
        (0, _._)(
          (0, _.jsx)(_, {
            ownerWin: window,
            redirectURL: _,
            guestOption: _,
          }),
          window,
          {
            strTitle: (0, _._)("#Login_SignInTitle"),
          },
        );
      }
      function _(_) {
        const { redirectURL: _, guestOption: _ } = _,
          [_] = (0, _.useState)(
            new _._(_._.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [_, _] = (0, _.useState)(!1);
        return (0, _.jsx)("div", {
          children: _
            ? (0, _.jsx)(_._, {})
            : (0, _.jsx)(_._, {
                autoFocus: !0,
                transport: _,
                platform: _._._,
                onComplete: (_) => {
                  _ == _._.k_PrimaryDomainFail
                    ? _(!0)
                    : window.location.assign(_);
                },
                redirectUrl: _,
                theme: "modal",
                children:
                  _ &&
                  (0, _.jsx)(_._, {
                    redirectURL: _,
                  }),
              }),
        });
      }
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
                          .set_language((0, _.sfN)(_._.LANGUAGE)),
                          __webpack_require__.Body().set_appids(_);
                        const _ = await _._.GetApps(_, _);
                        if (_.GetEResult() != _._) throw _.GetErrorMessage();
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
        return (0, _.jsx)(_._, {
          className: _().JoinSessionButton,
          onClick: () =>
            (window.location.href =
              `steam://launch/${_.steamAppId}` + _(_.sessionID)),
          children: _.children,
        });
      }
      function _(_) {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return _.isSuccess
          ? _.data?.sessions?.length > 0
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    className: _().AvailableSessionsText,
                    children: "Available Steam Sessions:",
                  }),
                  (0, _.jsx)("div", {
                    className: _().SessionList,
                    children: _.data?.sessions.map((_) =>
                      (0, _.jsxs)(
                        "div",
                        {
                          className: _().Session,
                          children: [
                            (0, _.jsx)("div", {
                              className: _().MachineName,
                              children: _.machine_name,
                            }),
                            (0, _.jsx)("div", {
                              className: _().OsName,
                              children: _.os_name,
                            }),
                            (0, _.jsx)(_._, {
                              className: _().JoinSessionButton,
                              onClick: () =>
                                (0, _._)(
                                  _,
                                  _.client_instanceid,
                                  _.steamAppId,
                                  _(_.sessionID),
                                ),
                              children: "Launch Game",
                            }),
                          ],
                        },
                        _.client_instanceid,
                      ),
                    ),
                  }),
                ],
              })
            : (0, _.jsx)("div", {
                className: _().Error,
                children: "No logged in sessions",
              })
          : _.isFetching || _.isRefetching
            ? (0, _.jsx)(_._, {})
            : (0, _.jsxs)("div", {
                className: _().Error,
                children: ["Error ", _.error.message],
              });
      }
      function _(_) {
        const _ = _(_.steamAppId);
        return _
          ? (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: _().Header,
                  children: "Join Game Session",
                }),
                (0, _.jsxs)("div", {
                  className: _().Explanation,
                  children: [
                    "You've been invited to join a game! Click below to launch ",
                    _.friendly_name || _.name,
                    " on Steam and start playing.",
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().SessionInfoCtr,
                  children: (0, _.jsx)("iframe", {
                    src: _.sessionLiveDataUrl,
                  }),
                }),
                _._.IN_CLIENT
                  ? (0, _.jsx)("div", {
                      className: _().SectionCtr,
                      children: (0, _.jsx)(_, {
                        ..._,
                        children: "Launch Game",
                      }),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)("div", {
                          className: _().SectionCtr,
                          children: _._.logged_in
                            ? (0, _.jsx)(_, {
                                ..._,
                              })
                            : (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)(_._, {
                                    children: "Login to join on another device",
                                  }),
                                  (0, _.jsx)(_._, {
                                    onClick: _._,
                                    children: (0, _._)("#Login_SignIn"),
                                  }),
                                ],
                              }),
                        }),
                        !_._.IN_MOBILE_WEBVIEW &&
                          (0, _.jsxs)("div", {
                            className: _().SectionCtr,
                            children: [
                              (0, _.jsx)(_._, {
                                children: "Or launch on this PC",
                              }),
                              (0, _.jsx)(_, {
                                ..._,
                                children: "Launch Game Here",
                              }),
                            ],
                          }),
                      ],
                    }),
              ],
            })
          : (0, _.jsx)(_._, {});
      }
      function _() {
        const _ = (0, _._)("multiplayersession_join", "application_config"),
          _ = new URLSearchParams((0, _._)().search).get("jws"),
          { header: _, body: _ } = (0, _._)(_) || {
            header: {},
            body: {},
          };
        let { steamAppId: _ } = _;
        const _ = _[_.jws_sessionid_key],
          _ = _[_.jws_livedata_url_key];
        return (
          "string" == typeof _ && (_ = parseInt(_)),
          (0, _.jsxs)("div", {
            className: _().JoinApp,
            children: [
              _ && _ && _
                ? (0, _.jsx)(_, {
                    steamAppId: _,
                    sessionLiveDataUrl: _,
                    sessionID: _,
                  })
                : (0, _.jsx)("div", {
                    children: "Invalid session link",
                  }),
              " ",
            ],
          })
        );
      }
    },
  },
]);
