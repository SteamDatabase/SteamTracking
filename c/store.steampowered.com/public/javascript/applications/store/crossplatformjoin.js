(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [15068],
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
              new _._(
                new _._(_._.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _ == _._.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
            };
          return (0, _.jsx)("div", {
            children: _
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  transport: _,
                  platform: _._._,
                  onComplete: _,
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
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { labelledBy: _ } = _ || {},
            [_, _] = _.useState(void 0),
            _ = _.useMemo(
              () => ({
                setHeaderId: _,
              }),
              [],
            );
          return {
            headerId: _ || _,
            context: _,
          };
        }
        function _(_) {
          const {
              active: _,
              onDismiss: _,
              className: _,
              modalClassName: _,
              bGamepadUIScrollWithin: _,
              children: _,
              ..._
            } = _,
            { headerId: _, context: _ } = _({
              labelledBy: _["aria-labelledby"],
            });
          return (0, _.jsx)(_._.Provider, {
            value: _,
            children: (0, _.jsx)(_._, {
              active: _,
              children: (0, _.jsx)(_._, {
                onEscKeypress: _,
                className: _,
                bGamepadUIScrollWithin: _,
                children: (0, _.jsx)(_._, {
                  role: "dialog",
                  "aria-labelledby": _,
                  className: _,
                  ..._,
                  children: _,
                }),
              }),
            }),
          });
        }
        function _(_) {
          const {
              onDismiss: _,
              className: _,
              modalClassName: _,
              bGamepadUIScrollWithin: _,
              children: _,
              ..._
            } = _,
            { headerId: _, context: _ } = _();
          return jsx(Dialog.DialogStructureContext.Provider, {
            value: _,
            children: jsx(PopupWindow, {
              ..._,
              onDismiss: _,
              children: jsx(ModalPosition, {
                onEscKeypress: _,
                className: _,
                bGamepadUIScrollWithin: _,
                children: jsx(Dialog.Content, {
                  role: "dialog",
                  "aria-labelledby": _,
                  "aria-label": _.strTitle,
                  className: _,
                  children: _,
                }),
              }),
            }),
          });
        }
        const _ = (_) =>
          _({
            modal: !0,
            ..._,
          });
        function _(_) {
          const { className: _, children: _ } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)("div", {
              className: _,
              children: _,
            }),
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = React.useMemo(() => _(), []);
          return jsx(DialogOverlay, {
            ..._,
            DialogWrapper: _,
          });
        }
        function _() {
          return function (_) {
            const { className: _, active: _, children: _, modalKey: _ } = _,
              _ = React.useRef(void 0);
            return (
              useActivateNavTree(_, _, !0),
              jsx(FocusNavigationRoot, {
                className: _,
                navTreeRef: _,
                modal: !0,
                enabled: _,
                navID: `ModalDialogOverlay_${_}`,
                children: _,
              })
            );
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { popup: _, className: _, ..._ } = _,
            _ = (0, _._)(_),
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              const _ = _.current;
              if (_ && (0, _._)(_, "Window.SetResizeGrip")) {
                let _ = 0,
                  _ = 0;
                const _ = _.getBoundingClientRect(),
                  _ = _.ownerDocument.defaultView;
                _ &&
                  _ &&
                  !_ &&
                  ((_ = Math.ceil(_.innerWidth - _.left)),
                  (_ = Math.ceil(_.innerHeight - _.top))),
                  _.SteamClient.Window.SetResizeGrip(_, _);
              }
              return () => {
                (0, _._)(_, "Window.SetResizeGrip") &&
                  _.SteamClient.Window.SetResizeGrip(0, 0);
              };
            }, [_, _]),
            _
              ? null
              : (0, _.jsx)("div", {
                  className: (0, _._)("window_resize_grip", _),
                  ref: _,
                  ..._,
                })
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (_) =>
          _({
            modal: !0,
            ..._,
          });
        function _(_) {
          const _ = (0, _._)().ownerWindow,
            _ = (0, _._)(),
            [_, _] = _.useState(() =>
              _ ||
              (_.onlyPopoutIfNeeded === !0 &&
                _.popupHeight < _.innerHeight * 0.9 &&
                _.popupWidth < _.innerWidth * 0.9 &&
                _.document.visibilityState == "visible")
                ? "inline"
                : "popout",
            );
          return _ === "inline"
            ? (0, _.jsx)(_._, {
                active: !0,
                children: _.children,
              })
            : _ === "popout"
              ? (0, _.jsx)(_, {
                  ..._,
                })
              : null;
        }
        function _(_) {
          const {
              popup: _,
              children: _,
              bFitToContent: _,
              className: _,
              ..._
            } = _,
            _ = _.useCallback(
              (_) => {
                const _ = Math.ceil(_.borderBoxSize[0].inlineSize),
                  _ = Math.ceil(_.borderBoxSize[0].blockSize);
                _?.SteamClient.Window.ResizeTo(_, _, !0);
              },
              [_],
            ),
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: (0, _._)("PopupFullWindow", _ && "FitToContent", _),
            ref: _ ? _ : void 0,
            ..._,
            children: _,
          });
        }
        function _(_) {
          const {
              strName: _,
              strTitle: _,
              popupWidth: _,
              popupHeight: _,
              browserType: _,
              onDismiss: _,
              bFitToContent: _,
              refPopup: _,
              children: _,
              titleBarClassName: _,
              saveDimensionsKey: _,
            } = _,
            _ = (0, _._)()?.ownerWindow,
            _ = (0, _._)(),
            _ = {
              ...(0, _._)(_),
              onClose: _,
            };
          let _ = 0;
          _.resizable && (_ |= _._.Resizable),
            (_.minWidth || _.minHeight) &&
              (_ |= _._.ApplyBrowserScaleToDimensions),
            _.fullscreen && (_ |= _._.FullScreen);
          const _ = "PopupWindow_" + (_ ? `${_}_` : "") + _.useId(),
            { popup: _, element: _ } = (0, _._)(
              _,
              {
                title: _,
                dimensions: {
                  width: _,
                  height: _,
                },
                html_class: "client_chat_frame fullheight ModalDialogPopup",
                body_class: "fullheight ModalDialogBody",
                popup_class: "fullheight",
                browserType: _,
                minWidth: _.minWidth,
                minHeight: _.minHeight,
                replace_existing_popup: !0,
                center_on_window: _?.BCenterPopupsOnWindow() ? _ : void 0,
                eCreationFlags: _,
                target_browser: _?.GetBrowserInfo(),
              },
              _,
            );
          if (
            (_.useEffect(
              () => ((0, _._)(_, _), () => (0, _._)(_, void 0)),
              [_, _],
            ),
            _.useEffect(() => {
              _ && (_.document.title = _ ?? _);
            }, [_, _, _]),
            !_)
          )
            return null;
          const _ = _.modal ?? _.onlyPopoutIfNeeded,
            _ = !_.resizable;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)(_, {
                  popup: _,
                }),
              _.createPortal(
                (0, _.jsx)(_._, {
                  ownerWindow: _,
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsxs)(_, {
                        popup: _,
                        bFitToContent: _,
                        onContextMenu: _._,
                        children: [
                          (0, _.jsx)(_._, {
                            className: _,
                            hideMin: _,
                            hideMax: _,
                            popup: _,
                            hideActions: !_,
                          }),
                          (0, _.jsx)(_._, {
                            bCenterPopupsOnWindow: _?.BCenterPopupsOnWindow(),
                            browserInfo: _?.GetBrowserInfo(),
                            children: _,
                          }),
                        ],
                      }),
                      _.resizable &&
                        !_ &&
                        (0, _.jsx)(_, {
                          popup: _,
                        }),
                    ],
                  }),
                }),
                _,
              ),
            ],
          });
        }
        function _(_) {
          const { popup: _ } = _,
            _ = _.useCallback(() => {
              _?.SteamClient.Window.BringToFront();
            }, [_]);
          return (
            _.useEffect(_, [_]),
            (0, _.jsx)(_._, {
              active: !0,
              children: (0, _.jsx)("div", {
                style: {
                  position: "fixed",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                },
                onClick: _,
              }),
            })
          );
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
        const _ = 1440 * 60 * 1e3;
        function _(_) {
          return `appinfo_${_}_${_._.LANGUAGE}`;
        }
        function _(_) {
          return !!(_ && Date.now() - _.timeCached < _);
        }
        function _(_, _) {
          return (
            _ ||
              (_ = new (_())(
                async (_) => {
                  const _ = new Map();
                  (await Promise.all(_.map((_) => _.GetObject(_(_)))))
                    .filter(_)
                    .forEach(({ value: _ }) => _.set(_.appid, _));
                  const _ = _.slice().filter((_) => !_.has(_));
                  if (_.length) {
                    const _ = _._.Init(_._);
                    _.Body().set_language((0, _.sfN)(_._.LANGUAGE)),
                      _.Body().set_appids(_);
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
                  return _.map((_) => _.get(_));
                },
                {
                  cache: !1,
                },
              )),
            _
          );
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            queryKey: ["appinfo", _],
            queryFn: async () => _(_, _).load(_),
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
                                      children:
                                        "Login to join on another device",
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
            typeof _ == "string" && (_ = parseInt(_)),
            (0, _.jsxs)("div", {
              className: _().JoinApp,
              children: [
                !_ || !_ || !_
                  ? (0, _.jsx)("div", {
                      children: "Invalid session link",
                    })
                  : (0, _.jsx)(_, {
                      steamAppId: _,
                      sessionLiveDataUrl: _,
                      sessionID: _,
                    }),
                " ",
              ],
            })
          );
        }
      },
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
    },
  ]);
})();
