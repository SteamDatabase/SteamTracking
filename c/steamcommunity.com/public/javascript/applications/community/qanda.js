(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [5836],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            QAndARoutes: () => _,
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          Dashboard: (_) => `/questions/${_}/dashboard`,
          FullPageView: (_, _) => `/questions/${_}/view/${_}`,
        };
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                path: _.Dashboard(":vanity_str"),
                render: (_) =>
                  (0, _.jsx)(_._, {
                    config: {
                      "qanda-root": () => {
                        const { vanity_str: _ } = _.match.params;
                        return (0, _.jsx)(_._, {
                          vanity_str: _,
                        });
                      },
                    },
                  }),
              }),
              (0, _.jsx)(_._, {
                path: _.FullPageView(":vanity_str", ":session_gid"),
                render: (_) =>
                  (0, _.jsx)(_._, {
                    config: {
                      "qanda-root": () => {
                        const { vanity_str: _, session_gid: _ } =
                          _.match.params;
                        return (0, _.jsx)(_._, {
                          gidSession: _,
                        });
                      },
                    },
                  }),
              }),
              (0, _.jsx)(_._, {
                component: _._,
              }),
            ],
          });
        }
        const _ = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return _.toLocaleString((0, _._)());
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
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
          return jsx(SimpleModal, {
            active: !0,
            children: jsx(_, {
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
          ShowModalDialog(
            jsx(_, {
              ownerWin: window,
              redirectURL: _,
              guestOption: _,
            }),
            window,
            {
              strTitle: Localize("#Login_SignInTitle"),
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
          _ = __webpack_require__._(_),
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
                      !!_ &&
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
          const [_, _] = _.useState(!!_.bStartMinimized);
          return (0, _.jsx)(_, {
            ..._,
            getMinimized: () => _,
            toggleMinimized: () => _(!_),
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
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _.useRef(_().CancelToken.source());
          return (
            _.useEffect(() => {
              const _ = _.current;
              return () => _.cancel(_ ? `${_}: unmounting` : "unmounting");
            }, [_]),
            _.current
          );
        }
      },
      chunkid: (module) => {
        module.exports = {
          SectionTitleHeader: "_2g5oNomwd2lv8wL2qlsLVA",
          SectionTitleButtons: "RGHKm1_KeaBjdzuvisfYN",
          required_title: "_3yDPZjnsoLc2FkrAH2UOEd",
        };
      },
    },
  ]);
})();
