(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [30],
  {
    chunkid: (module) => {
      module.exports = {
        SocialMediaRow: "ulorWm3sqhSeSaQPSH7O6",
        SocialMediaType: "ZKHt9TgsGIf59MoROuJuj",
        SocialMediaLink: "_4yVvgRIj7im7egSdbtW_w",
        SocialMediaTooltip: "_2btfW5GjJOR2sOB-k94zp6",
        ValidationError: "_1vWmrCnLJP6y1vJRoWO6Qj",
        AddLinkDropDown: "naYpWkI1nnET_gXJrYEAw",
      };
    },
    chunkid: (module) => {
      module.exports = {
        WhitelistCtn: "_1UhmxrINvvaNnHzhCPoill",
        WhitelistRow: "_28TC1EYm0jlWPjyk89xXCL",
        WhitelistNumber: "IY3dF3eWXX1OmE8oYcQKp",
        Disabled: "_2VzE-3UQEHXyAext8t7gLW",
        Grabbing: "_1vSZ5gJndAOamRhVGni8HG",
        DragActive: "_31uDZXKZQlYMd8FK9xdaJb",
        Dropped: "_3bfDVSvzMDkk4s1j0Vw8jI",
        JumpToSection: "oABTo2lkoYYI5YMYaeq_Q",
        BeingDragged: "_3y7I4DL9Hua5OhZ4HgcBB5",
        DragGhost: "_61nYWo98IhSjR8PWtQX9O",
        Grabbable: "riuelIz655g_IBddWfLQ-",
        DisabledGrab: "_2K0C_m1AZvB6yeNaEXXjDD",
        WhitelistAvatar: "_3DGjmH9KW9BAXsEYwH1WpE",
        ButtonCtn: "_1hSqlvDTyj9P6eWTHXutUt",
        DragHighlightContainer: "_2jRMC5JVSK6dsktYus9Gjf",
        DragHighlight: "Y9ryg1Npznt3dpkr7BGp1",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAeCAYAAAAo5+5WAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gEEFRg0nBijuQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAw0lEQVRIx+2WMQqDMBSG/xedEnCp3kFzh56gN+iN7SrFLsEDmElwDHGyFNEYlQyF/FPgvXx5fMsL3R9P+CRJEgsAxhjy6We+UClLSFl+H7gMnqGcC3AuvOHMFzrHF86OQI/A062CMYaa5o2zYQiUNMsyGwRcVWWQicOpaNsPooqoIqqIKvYmrusX/dXE4VS4lqkQwnl5HMfND4xzmRbFzeZ5sVrXuscwDHRKhVIdad2vQpXq6JLjJdwH6lSxhAOwP+fdTHcfVDuVWnTzAAAAAElFTkSuQmCC";
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            items: _,
            render: __webpack_require__,
            onDelete: _,
            onEdit: _,
            onReorder: _,
            onMove: _,
            bDisabled: _,
            rowClassName: _,
          } = _,
          [_, _] = _.useState(!1),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(-1),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(0),
          [_, _] = _.useState(0),
          [_, _] = _.useState(void 0),
          [_, _] = _.useState(""),
          _ = _.useRef(void 0),
          _ = _.useRef([]),
          _ = _.useRef([]),
          _ = _.useMemo(() => _().CancelToken.source(), []),
          _ = () => {
            _.current?.firstElementChild &&
              (_(_.current.firstElementChild.getBoundingClientRect().height),
              _(_.current.firstElementChild.getBoundingClientRect().width));
          };
        _.useEffect(() => {
          _();
        }, []),
          _.useEffect(() => () => _.cancel("ReorderableList unmounting"), [_]);
        const _ = _.useCallback(
            (_) => {
              const _ = _.current[_]?.current;
              _
                ? ((_.style.left = _.clientX - _ + "px"),
                  (_.style.top = _.clientY - _ + "px"))
                : console.error("update grab element missing element");
            },
            [_, _, _],
          ),
          _ = _.useCallback(() => {
            const _ = _.current[_]?.current;
            _
              ? ((_.style.position = ""), (_.style.zIndex = ""))
              : console.error("end element drag missing element"),
              _(!1),
              _(-1),
              _(void 0),
              _(void 0);
          }, [_]),
          _ = (_, _) => {
            _.token.reason ||
              (_.current.firstElementChild?.getBoundingClientRect().height >
                0 &&
                _ !=
                  _.current.firstElementChild.getBoundingClientRect().height &&
                _(),
              ((_, _) => {
                const _ = _.current[_]?.current;
                if (!_)
                  return void console.error(
                    "start element grab missing element at index " + _,
                  );
                _(!0), _(_), _(void 0), _(_);
                const _ =
                  _.clientX - __webpack_require__.getBoundingClientRect().left;
                _(_);
                const _ =
                  _.clientY - __webpack_require__.getBoundingClientRect().top;
                _(_),
                  (_.style.position = "fixed"),
                  (_.style.left = _.clientX - _ + "px"),
                  (_.style.top = _.clientY - _ + "px"),
                  (_.style.zIndex = "1");
              })(_, _),
              _.preventDefault());
          },
          _ = (_, _) => {
            const _ = _._(_ > _ ? _ - 1 : _, 0, _.length - 1);
            _ != _ && (_ ? _(_, _) : (0, _._)(_, _, _), _(_), _ && _(_));
          },
          _ = _.useCallback(
            (_) => {
              if (!_ || _.token.reason) return;
              const _ = _.clientY;
              let _;
              for (let _ = 0; _ < _.current.length; _++) {
                if (
                  _ <
                  (_.current[_].current.getBoundingClientRect().top +
                    2 * _.current[_].current.getBoundingClientRect().bottom) /
                    3
                ) {
                  _ = _;
                  break;
                }
              }
              _(_ ?? _.current.length), _(_);
            },
            [_, _, _],
          );
        (0, _._)(window, "mousemove", _ ? _ : void 0),
          (0, _._)(
            window,
            "mouseup",
            _
              ? (_) => {
                  _ && !_.token.reason && (_(), _(_, _));
                }
              : void 0,
          ),
          _.useEffect(() => {
            for (let _ = _.current.length; _ < _.length; _++)
              _.current.push(_.createRef()), _.current.push(_.createRef());
          }, [_.length]);
        const _ = (_) => {
            _(void 0);
            const _ = _?.trim(),
              _ = Number.parseInt(_);
            if (0 == _.length || isNaN(_)) return;
            const _ = _ - 1;
            _ != _ && _(_, _);
          },
          [_, _] = _.useState(void 0);
        return _.createElement(
          "div",
          {
            className: _().WhitelistCtn,
            ref: _,
          },
          _.map((_, _) =>
            _.createElement(
              "div",
              {
                key: _,
                ref: _.current[_],
              },
              _ == _ &&
                _.createElement(_, {
                  width: _,
                }),
              _.createElement(
                "div",
                {
                  ref: _.current[_],
                  className: _().DragGhost,
                },
                _ == _ &&
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_().WhitelistRow, _),
                    },
                    _.createElement("img", {
                      className: (0, _._)(_().WhitelistAvatar, _().Grabbing),
                      src: _,
                    }),
                    _.createElement("input", {
                      className: (0, _._)(
                        _().WhitelistNumber,
                        _().Disabled,
                        _().Grabbing,
                      ),
                      type: "text",
                      value: (_ > _ ? _ - 1 : _) + 1,
                      disabled: !0,
                    }),
                    __webpack_require__(_, _),
                  ),
              ),
              _.createElement(
                "div",
                {
                  className: (0, _._)(
                    _().WhitelistRow,
                    _,
                    _ && _().DragActive,
                    _ == _ && _().BeingDragged,
                    _ == _ && _().Dropped,
                  ),
                  onAnimationEnd: () => _(void 0),
                },
                _.createElement("img", {
                  className: (0, _._)(
                    _().WhitelistAvatar,
                    _().Grabbable,
                    _ && _().DisabledGrab,
                  ),
                  src: _,
                  onMouseDown: Boolean(_) ? void 0 : (_) => _(_, _),
                }),
                _.createElement("input", {
                  className: (0, _._)(_().WhitelistNumber, _ && _().Disabled),
                  type: "text",
                  value: _ == _ ? _ : _ + 1,
                  disabled: _ || _ == _,
                  onChange: (_) => _(_.target.value),
                  onKeyDown: (_) =>
                    ((_, _) => {
                      "Enter" === _.key && (_(_), _.currentTarget.blur());
                    })(_, _),
                  onFocus: (_) => {
                    _(_), _(_.target.value);
                  },
                  onBlur: () => _(_),
                }),
                __webpack_require__(_, _),
                Boolean(_ != _) &&
                  Boolean(_ || _) &&
                  _.createElement(
                    "div",
                    {
                      className: _().ButtonCtn,
                    },
                    Boolean(_) &&
                      _.createElement(
                        "div",
                        {
                          className: _().RemoveIcon,
                          onClick: (_) => _(_, _),
                        },
                        _.createElement(_.ffu, null),
                      ),
                    Boolean(_) &&
                      _.createElement("img", {
                        className: _().RemoveIcon,
                        src: _._,
                        onClick: (_) => _(_, _),
                      }),
                  ),
              ),
              _ == _.length &&
                _ == _.length - 1 &&
                _.createElement(_, {
                  width: _,
                }),
            ),
          ),
        );
      }
      function _(_) {
        const { width: _ } = _;
        return _.createElement(
          "div",
          {
            className: _().DragHighlightContainer,
          },
          _.createElement("div", {
            className: _().DragHighlight,
            style: {
              width: _,
            },
          }),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            rgSocialMediaItems: _,
            fnSetItems: __webpack_require__,
            rgSupportedSocialMediaTypes: _,
            rgValidationData: _,
          } = _,
          _ = _.useMemo(
            () =>
              _.filter(
                (_) =>
                  -1 === _.findIndex((_) => _.type === _.type) ||
                  "qq" === _.type ||
                  "qqlink" === _.type,
              )
                .map((_) => ({
                  label: (0, _._)(`#StoreAdmin_SocialMedia_Type_${_.type}`),
                  data: _.type,
                }))
                .sort((_, _) => (_.label < _.label ? -1 : 1)),
            [_, _],
          );
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(_, {
            options: _,
            onAddLink: (_) => {
              let _ = _.slice();
              _.push({
                type: _,
                link: "",
              }),
                __webpack_require__(_);
            },
          }),
          _.createElement(_, {
            items: _,
            onDelete: (_) => {
              let _ = _.slice();
              _.splice(_, 1), __webpack_require__(_);
            },
            onMove: (_, _) => {
              let _ = _.slice();
              (0, _._)(_, _, _), __webpack_require__(_);
            },
            render: (_, _) =>
              _.createElement(_, {
                key: _.type,
                item: _,
                onUpdateLink: (_) =>
                  ((_, _) => {
                    const _ = _.map((_, _) =>
                      _ === _
                        ? {
                            ..._,
                            link: _,
                          }
                        : _,
                    );
                    __webpack_require__(_);
                  })(_, _),
                validationData: _[_.type],
              }),
          }),
        );
      }
      function _(_) {
        const { options: _, onAddLink: __webpack_require__ } = _;
        return _.createElement(
          "div",
          {
            className: _.AddLinkDropDown,
          },
          _.createElement(_._, {
            strDefaultLabel: (0, _._)("#StoreAdmin_SocialMedia_Add"),
            controlled: !0,
            rgOptions: _,
            onChange: (_) => {
              const _ = _.data;
              _ && __webpack_require__(_);
            },
            selectedOption: null,
          }),
        );
      }
      function _(_, _) {
        let _ = !0,
          _ = "";
        return (
          _.prefix
            ? ((_ =
                "mastodon" === _.type
                  ? (0, _._)(
                      "#StoreAdmin_SocialMedia_ValidationMastodon",
                      _.prefix.join(", "),
                    )
                  : (0, _._)(
                      "#StoreAdmin_SocialMedia_ValidationPrefix",
                      _.prefix.join(", "),
                    )),
              _.link &&
                ((_ = !1),
                _.prefix.forEach((_) => {
                  _.link.startsWith(_) && (_ = !0);
                })))
            : _.number
              ? ((_ = (0, _._)("#StoreAdmin_SocialMedia_ValidationNumber")),
                _.link && (_ = /^\d+$/.test(_.link)))
              : _.text
                ? (_ = (0, _._)("#StoreAdmin_SocialMedia_ValidationText"))
                : _.regex &&
                  "tumblr" === _.type &&
                  (_ = (0, _._)("#StoreAdmin_SocialMedia_ValidationTumblr")),
          {
            bValid: _,
            strTooltip: _,
          }
        );
      }
      function _(_) {
        const {
          item: _,
          onUpdateLink: __webpack_require__,
          validationData: _,
        } = _;
        let _;
        _ = _.number
          ? (0, _._)("#StoreAdmin_SocialMedia_EnterNumber")
          : _.text
            ? (0, _._)("#StoreAdmin_SocialMedia_EnterName")
            : (0, _._)("#StoreAdmin_SocialMedia_EnterLink");
        const { bValid: _, strTooltip: _ } = _(_, _);
        return _.createElement(
          "div",
          {
            className: _.SocialMediaRow,
          },
          _.createElement(
            "div",
            {
              className: _.SocialMediaType,
            },
            (0, _._)(`#StoreAdmin_SocialMedia_Type_${_.type}`),
          ),
          _.createElement(_._, {
            className: _.SocialMediaLink,
            type: "text",
            value: _.link,
            placeholder: _,
            onChange: (_) => __webpack_require__(_.target.value),
          }),
          _ &&
            _.createElement(
              _._,
              {
                className: _.SocialMediaTooltip,
                toolTipContent: _,
              },
              "(?)",
            ),
          !_ &&
            _.createElement(
              "div",
              {
                className: _.ValidationError,
              },
              _,
            ),
        );
      }
      var _ = __webpack_require__("chunkid");
      function _(_) {
        const { clanAccountID: _, page_config: __webpack_require__ } = _,
          _ = (function () {
            const _ = (0, _._)({
              queryKey: ["useSocialMediaSupports"],
              queryFn: async () => {
                const _ = `${_._.COMMUNITY_BASE_URL}sale/ajaxgetsocialmediaeditsettings`,
                  _ = {
                    origin: self.origin,
                  },
                  _ = await _().get(_, {
                    params: _,
                  });
                return 200 == _?.status && 1 == _.data?.success
                  ? _.data
                  : (console.error("useSocialMediaSupports:", _?.status),
                    {
                      success: 2,
                    });
              },
            });
            return _.isLoading ? null : _.data;
          })(),
          [_, _] = (0, _.useState)(
            () => __webpack_require__?.social_media ?? [],
          ),
          [_, _] = (0, _.useState)(
            () => __webpack_require__?.social_media ?? [],
          );
        return _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement("br", null),
              _.createElement(
                "h4",
                null,
                (0, _._)("#CreatorHome_SocialMedia_Title"),
              ),
              _.createElement(
                "p",
                null,
                (0, _._)("#CreatorHome_SocialMedia_Desc"),
              ),
              _.createElement(
                "blockquote",
                null,
                _.createElement(_, {
                  rgValidationData: _.rgValidationData,
                  rgSupportedSocialMediaTypes: _.rgSupportedSocialMediaTypes,
                  rgSocialMediaItems: _,
                  fnSetItems: (_) => {
                    _(_);
                    const _ = _.rgValidationData,
                      _ = _.filter((_) => Boolean(_.link)).filter(
                        (_) => _(_, _[_.type]).bValid,
                      );
                    _(_);
                  },
                }),
                _?.length > 0 &&
                  _.createElement("input", {
                    type: "hidden",
                    name: "social_media",
                    value: JSON.stringify(_),
                  }),
                _.createElement(
                  "a",
                  {
                    className: "btnv6_blue_hoverfade btn_medium",
                    href: "#",
                    onClick: (_) => {
                      _.preventDefault(),
                        window.g_StoreLocHelper?.SaveFields(["tagline"]),
                        window.UpdateCuratorFromForm?.(
                          document.getElementById("listform"),
                        );
                    },
                  },
                  _.createElement("span", null, (0, _._)("#Button_Save")),
                ),
              ),
            )
          : _.createElement(_._, {
              string: (0, _._)("#Loading"),
              position: "center",
            });
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
    },
  },
]);
