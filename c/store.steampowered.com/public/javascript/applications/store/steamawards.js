(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [23027],
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { _: _ = "span", ref: _, className: _, ..._ } = _,
            _ = _;
          return (0, _.jsx)(_, {
            ref: _,
            ...(0, _._)(
              {
                ..._,
                className: _()(_.Text, _),
              },
              _,
            ),
          });
        }
        const _ = [
            {
              prop: "weight",
              responsive: !0,
              className: _.TextWeight,
              cssProperty: (_) => ["--text-weight", `var(--font-weight-${_})`],
            },
            {
              prop: "align",
              responsive: !0,
              className: _.TextAlign,
              cssProperty: "--text-align",
            },
            {
              prop: "color",
              responsive: !0,
              cssProperty: (_, _, _) => [
                "--text-color",
                (0, _._)(_, (0, _._)(_.contrast, _) ?? "body"),
              ],
            },
            {
              prop: "contrast",
              responsive: !0,
              cssProperty: (_, _, _) => [
                "--text-color",
                (0, _._)((0, _._)(_.color, _) ?? "text-body", _),
              ],
            },
            {
              prop: "truncate",
              className: _.Truncate,
            },
            {
              prop: "lineClamp",
              responsive: !0,
              className: _.LineClamp,
              cssProperty: "--line-clamp",
            },
            {
              prop: "whiteSpace",
              className: _.WhiteSpace,
              cssProperty: "--white-space",
            },
          ],
          _ = [
            ..._,
            ..._._,
            {
              prop: "size",
              responsive: !0,
              className: (_) => _[`TextSize-${_}`],
            },
          ];
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { underline: _ = "auto", ..._ } = _,
            _ = (0, _._)(
              {
                ..._,
                underline: _,
                className: _.TextLink,
              },
              _,
            );
          return (0, _.jsx)(_._, {
            ..._,
          });
        }
        const _ = [
          ..._._,
          {
            prop: "underline",
            className: (_) => _[`Underline-${_}`],
          },
        ];
        function _(_) {
          const { underline: _ = "auto", focusable: _, navProps: _, ..._ } = _,
            _ = (0, _._)(),
            _ = _ ?? _?.focusable ?? !!_.onClick,
            _ = (0, _.jsx)("span", {
              role: "button",
              ...(0, _._)(
                {
                  ..._,
                  underline: _,
                  className: _.TextLinkButton,
                },
                _,
              ),
            });
          return _ && (_ || _)
            ? (0, _.jsx)(_._, {
                ...(_ || {}),
                focusable: _,
                children: _,
              })
            : _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_, _) {
          return new (_())(
            async (_) => {
              const _ = [..._],
                _ = await _.xtC.GetPlayerLinkDetails(_, {
                  steamids: _,
                }),
                _ = new Map();
              return (
                _.Body()
                  .accounts()
                  .forEach((_) => {
                    const _ = _.toObject();
                    _.set(_.public_data.steamid, _);
                  }),
                _.map((_) => _.get(_) ?? null)
              );
            },
            {
              maxBatchSize: 100,
              cache: !1,
              ..._,
            },
          );
        }
        function _(_) {
          return (0, _._)("PlayerLinkDetails", () => _(_));
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 30;
        function _(_) {
          const {
              event: _,
              imageURLOverride: _,
              bShowAssociatedApp: _,
              langOverride: _,
              onClick: _,
              eEventRount: _,
              bHidePrices: _,
              nSummaryMaxLength: _,
            } = _,
            _ = (0, _._)(_.appid),
            _ = (0, _._)(),
            _ = _ || (0, _.sfN)(_._.LANGUAGE),
            _ =
              (0, _._)(
                _ !== void 0 ? void 0 : _,
                "capsule",
                _,
                _._.capsule_main,
              ) ?? _,
            _ =
              (0, _._)(_ !== void 0 ? void 0 : _, "capsule", _, _._.full) ?? _,
            [_, _, _, _] = (0, _._)(() => [
              _.GetNameWithFallback(_) || "",
              _.GetCategoryAsString(),
              _.GetSummaryWithFallback(_, _),
              _.GetSubTitleWithLanguageFallback(_) || "",
            ]),
            _ = (0, _._)(_.appid),
            { data: _ } = (0, _._)(_),
            _ = [];
          if ((_ && _.push(_), _ && _ !== _ && _.push(_), _)) {
            const _ = (0, _._)(_, "main_capsule");
            _ && _.push(_);
          }
          const [_, _] = (0, _.useState)(_),
            _ = (_, _, _) => {
              _ >= _.length && _(void 0), _(_[_ + 1]);
            };
          if (!_)
            return (0, _.jsx)("div", {
              className: _().OtherEvents_EventCtn,
            });
          const _ = _ ? _.GetStartTimeAndDateUnixSeconds() : 0;
          let _ = _;
          return (
            _ && (_.length > _ || _.length > _) && (_ = void 0),
            (0, _.jsxs)("div", {
              className: _().EventSizer,
              children: [
                (0, _.jsxs)(_._, {
                  className: (0, _._)(
                    _().OtherEvents_EventCtn,
                    "OtherEvents_EventCtn",
                    _().HoversEnabled,
                  ),
                  eventModel: _,
                  route: _ || _._.k_eView,
                  onClick: _,
                  preferredFocus: !0,
                  children: [
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().EventSummaryContainer,
                        _().HideInWideMode,
                      ),
                      children: [
                        (0, _.jsx)("div", {
                          className: _().EventSummaryType,
                          children: _,
                        }),
                        (0, _.jsx)("div", {
                          className: _().EventSummaryText,
                          children: _,
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _().OtherEvents_BGImage,
                      style: {
                        backgroundColor: "#ffffff",
                        backgroundImage: _ ? `url(${(0, _._)(_)})` : "none",
                      },
                    }),
                    (0, _.jsxs)("div", {
                      className: _().OtherEvents_ContentCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)(
                            _().OtherEvents_MainImageCtn,
                            _ && _().MaskImages,
                          ),
                          children: (0, _.jsx)(_._, {
                            rgSources: _,
                            onIncrementalError: _,
                            className: _().OtherEvents_MainImage,
                            alt: "",
                          }),
                        }),
                        (0, _.jsxs)("div", {
                          className: _().OtherEvents_TextCtn,
                          children: [
                            (0, _.jsx)("div", {
                              className: _().OtherEvents_TextTitle,
                              children: _,
                            }),
                            !!_ &&
                              (0, _.jsx)("div", {
                                className: _().OtherEvents_SubTitle,
                                children: _,
                              }),
                            (0, _.jsxs)(_._, {
                              direction: "row",
                              gap: "3",
                              align: "center",
                              children: [
                                (0, _.jsx)("div", {
                                  className: (0, _._)(
                                    _().EventType,
                                    _().ShowInWideMode,
                                  ),
                                  children: _,
                                }),
                                _ > _
                                  ? (0, _.jsx)("div", {
                                      className: (0, _._)(
                                        _().UpcomingCtn,
                                        "UpcomingCtn",
                                      ),
                                      children: (0, _.jsx)(_._, {
                                        bSingleLine: !0,
                                        dateAndTime:
                                          _.GetStartTimeAndDateUnixSeconds(),
                                      }),
                                    })
                                  : (0, _.jsx)(_._, {
                                      bSingleLine: !0,
                                      bOnlyDate: !0,
                                      dateAndTime:
                                        _.GetStartTimeAndDateUnixSeconds(),
                                    }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: (0, _._)(
                                _().EventSummaryText,
                                _().ShowInWideMode,
                              ),
                              children: _,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !!(_ && _.appid) &&
                  (0, _.jsx)(_, {
                    appid: _.appid,
                    bHidePrice: _,
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { appid: _, bHidePrice: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(),
            _ = (0, _._)();
          if (!_ || !_) return null;
          const _ = _ && _.hide_discount_pct_for_compliance;
          return (0, _.jsx)(_._, {
            appID: _,
            children: (0, _.jsxs)(_._, {
              className: (0, _._)(_().AppCapsuleCtn, "AppCapsuleCtn"),
              ...(0, _._)(_, _, _, !1),
              children: [
                (0, _.jsx)(_._, {
                  _: _,
                  hoverProps: {
                    direction: "overlay",
                    style: {
                      minWidth: "320px",
                    },
                  },
                  children: (0, _.jsx)("img", {
                    className: (0, _._)(_().AppCapsuleImage, _().CapsuleShadow),
                    src: (0, _._)(_, "small_capsule"),
                    alt: _.name,
                  }),
                }),
                !_ &&
                  !_.is_free &&
                  (0, _.jsxs)("span", {
                    className: (0, _._)(
                      _().AppCapsulePrice,
                      _?.discount_pct ? _().Discounted : "",
                    ),
                    children: [
                      !!(_?.discount_pct && _) &&
                        (0, _.jsx)("div", {
                          className: _().DiscountIconCtn,
                          children: (0, _.jsx)(_.XH_, {}),
                        }),
                      !!(_?.discount_pct && !_) &&
                        (0, _.jsx)("span", {
                          className: _().StoreSaleDiscountBox,
                          children: `-${_?.discount_pct}%`,
                        }),
                      _ &&
                        _.final_price_in_cents &&
                        (0, _.jsx)("span", {
                          className: _().StoreSalePriceBox,
                          children: _.formatted_final_price,
                        }),
                    ],
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
          if (_) {
            if ("appid" in _) return "app";
            if ("bundleid" in _) return "bundle";
            if ("packageid" in _) return "sub";
          }
        }
        function _(_) {
          const {
              _: _,
              hoverClassName: _,
              fnGetIDOverride: _,
              fnHoverState: _,
              disableScreenshots: _,
              children: _,
            } = _,
            _ = _.useRef(null),
            _ = _.useCallback(
              (_) => {
                const _ = _(_);
                _ &&
                  (_ && _(!0),
                  window.GameHover &&
                    (_.current &&
                      _ &&
                      (_.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(_ ? _() : _.current, _, "global_hover", {
                      type: _,
                      _: (0, _._)(_)._,
                      _: 1,
                    })));
              },
              [_, _, _, _],
            ),
            _ = _.useCallback(
              (_) => {
                _(_) &&
                  (_ && _.relatedTarget && _(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      _ ? _() : _.current,
                      _,
                      "global_hover",
                    ));
              },
              [_, _, _],
            );
          return (0, _.jsx)("div", {
            ref: _,
            className: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            children: _,
          });
        }
        function _(_) {
          const {
              _: _,
              strExtraParams: _,
              fnOnClickOverride: _,
              strOverrideURL: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(
              _ ||
                (_ && "creatorid" in _
                  ? (0, _._)(
                      `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )
                  : (0, _._)(
                      `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )),
            );
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: _.className,
              href: _ ? void 0 : _,
              target: _._.IN_CLIENT || _ ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: _,
              children: _.children,
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
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
          const { appid: _, className: _, bTextMode: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return (0, _.jsx)(_, {
            appid: _,
            bIsFree: !!_?.is_free,
            bIsComingSoon: !!_?.is_coming_soon,
            bTextMode: _,
            className: _,
          });
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = (0, _._)(),
            {
              appid: _,
              bIsFree: _,
              bIsComingSoon: _,
              className: _,
              bTextMode: _,
            } = _,
            _ = (0, _._)(_),
            { bIsOwned: _ } = (0, _._)(_),
            _ = (0, _._)(_),
            { mutateAsync: _ } = (0, _._)(_, !_, (0, _._)(_)),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            _ = async () => {
              if (!_._.logged_in) {
                _();
                return;
              }
              _ || (_(!0), await _(), _(!1));
            };
          if (_ || (!_ && _))
            return _
              ? (0, _.jsx)(_, {
                  possibleDemoAppID: _,
                })
              : null;
          let _ = null;
          return (
            _ && !_
              ? (_ = (0, _.jsx)(_._, {
                  size: 18,
                }))
              : _
                ? _ && (_ = _ ? (0, _._)("#OnWishlist") : (0, _.jsx)(_.qnF, {}))
                : (_ = _
                    ? (0, _._)("#wishlist_add_to_wishlist")
                    : (0, _.jsx)(_.T4m, {})),
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)("#AddToWishlist_ttip"),
                  children: (0, _.jsx)("div", {
                    className: (0, _._)(_().WishList, _),
                    onClick: _,
                    children: _,
                  }),
                }),
                _,
              ],
            })
          );
        }
        function _(_) {
          const { possibleDemoAppID: _, className: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return _ &&
            (_.type == _._._ || _.type == _._._) &&
            _.related_items?.parent_appid
            ? (0, _.jsx)(_, {
                parentAppID: _.related_items?.parent_appid,
                className: _,
              })
            : null;
        }
        function _(_) {
          const { parentAppID: _, className: _ } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return !_ || !_
            ? null
            : (0, _.jsx)(_, {
                appid: _,
                bIsComingSoon: !!_.is_coming_soon,
                bIsFree: !!_.is_free,
                className: _,
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          return Object.prototype.toString.call(_) === "[object Object]";
        }
        function _(_) {
          if (!_(_)) return !1;
          const _ = _.constructor;
          if (typeof _ > "u") return !0;
          const _ = _.prototype;
          return !(
            !_(_) || !Object.prototype.hasOwnProperty.call(_, "isPrototypeOf")
          );
        }
        function _(..._) {
          return JSON.stringify(_, (_, _) => {
            if (_(_)) {
              const _ = {};
              return (
                Object.keys(_)
                  .sort()
                  .forEach((_) => {
                    _[_] = _[_];
                  }),
                _
              );
            }
            return _;
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _.createContext)({
          instances: {},
          factories: {},
        });
        function _(_) {
          const { name: _, fnFactory: _, children: _ } = _,
            _ = React.useContext(_),
            [_] = useState({}),
            _ = useMemo(
              () => ({
                instances: _,
                factories: {
                  ..._.factories,
                  [_]: _,
                },
                parent: _,
              }),
              [_, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_, _) {
          const _ = (0, _.useContext)(_),
            _ = typeof _ == "string" ? _ : _(..._);
          let _ = _;
          for (; _; ) {
            if (_ in _.instances) return _.instances[_];
            if (_ in _.factories) break;
            _ = _.parent;
          }
          const _ = (_?.factories[_] ?? _)();
          return ((_ ?? _).instances[_] = _), _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = {};
        (_.arabic = () =>
          __webpack_require__._("chunkid").then(_._.bind(_, 98135, 19))),
          (_.brazilian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 32427, 19))),
          (_.bulgarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 56708, 19))),
          (_.czech = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 18914, 19))),
          (_.danish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 15670, 19))),
          (_.dutch = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 93067, 19))),
          (_.english = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 52777, 19))),
          (_.finnish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 73934, 19))),
          (_.french = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 31055, 19))),
          (_.german = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 1509, 19))),
          (_.greek = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 11934, 19))),
          (_.hungarian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 92760, 19))),
          (_.indonesian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 41411, 19))),
          (_.italian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 3905, 19))),
          (_.japanese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 15816, 19))),
          (_.koreana = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 40202, 19))),
          (_.latam = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 61090, 19))),
          (_.malay = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 94841, 19))),
          (_.norwegian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 71693, 19))),
          (_.polish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 57258, 19))),
          (_.portuguese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 49994, 19))),
          (_.romanian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 61540, 19))),
          (_.russian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 13956, 19))),
          (_.sc_schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 58430, 19))),
          (_.schinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 56983, 19))),
          (_.spanish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 80657, 19))),
          (_.swedish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 91712, 19))),
          (_.tchinese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 27228, 19))),
          (_.thai = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 57001, 19))),
          (_.turkish = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 17681, 19))),
          (_.ukrainian = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 93275, 19))),
          (_.vietnamese = () =>
            __webpack_require__._("chunkid").then(_._.bind(_, 23352, 19)));
        async function _(_) {
          if (_[_]) return _[_]();
        }
        const _ = (0, _._)(_);
        function _(_, _, _, _, ..._) {
          const _ = `${_}${_ ? "_second" : "_third"}`;
          if (_.HasKey(_))
            return _ ? _.LocalizeReact(_, ..._) : _.LocalizeReact(_, _, ..._);
          if (_.HasKey(_)) return _.LocalizeReact(_, ..._);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, _._)();
          }
          set nOverrideDateNow(_) {
            (0, _._)(_);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, _._)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, _._)();
          }
          BHasTimeOverride() {
            return !!(0, _._)();
          }
          ParseDevOverrides(_) {
            if (!_ || _.length == 0) return;
            new URLSearchParams(_[0] == "?" ? _.substring(1) : _).has("t");
          }
        }
        const _ = new _();
        (0, _._)("g_EventCalendarDevFeatures", _);
        function _(_ = 1) {
          const [_, _] = React.useState(() => _()),
            _ = useCancelTokenSource("useTimeNowWithOverride"),
            _ = React.useCallback(() => {
              _.token.reason || _(_());
            }, []);
          return (
            React.useEffect(() => {
              const _ = 1e3 * _,
                _ = Date.now() % _,
                _ = _ - _,
                _ = window.setTimeout(_, _);
              return () => {
                window.clearTimeout(_);
              };
            }, [_, _, _]),
            _
          );
        }
        const _ = Math.floor(new Date().getTime() / 1e3);
        function _() {
          const _ = Math.floor(Date.now() / 1e3);
          return _.nOverrideDateNow ? _.nOverrideDateNow + (_ - _) : _;
        }
        function _() {
          return _.nOverrideDateNow ?? _;
        }
        function _() {
          return _.useMemo(() => _(), []);
        }
        function _() {
          return _.useMemo(() => _.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)(_(_, _, _));
        }
        function _(_) {
          const _ = React.useRef(void 0),
            _ = _(_);
          return _.data
            ? _
            : (_.current ||
                (_.current = new CPersonaStateImpl(
                  typeof _ == "string"
                    ? new CSteamID(_)
                    : CSteamID.InitFromAccountID(_),
                )),
              {
                ..._,
                data: _.current,
              });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)({
            queries: _.map((_) => _(_, _, _)),
          });
        }
        function _(_) {
          return ReactQueryClient.getQueryData(["PlayerSummary", _]);
        }
        function _(_) {
          const { loadPersonaState: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadPersonaState: _,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _.createContext({
          loadPersonaState: async (_, _) => {
            if (_ == null) return null;
            const _ = await _(_).load(
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            );
            return _(_._.InitFromAccountID(_), _);
          },
        });
        function _() {
          return _.useContext(_);
        }
        function _(_, _, _) {
          const _ = typeof _ == "string" ? new _._(_).GetAccountID() : _;
          return {
            queryKey: ["PlayerSummary", _],
            queryFn: () => _.loadPersonaState(_, _),
            enabled: !!_,
          };
        }
        let _;
        function _(_) {
          return (_ ??= (0, _._)(_));
        }
        function _(_, _) {
          let _ = new _._(_);
          const _ = _?.public_data,
            _ = _?.private_data;
          return (
            (_.m_bInitialized = !!_),
            (_.m_ePersonaState = _?.persona_state ?? _.cU3),
            (_.m_strAvatarHash = _?.sha_digest_avatar
              ? (0, _._)(_.sha_digest_avatar)
              : _._),
            (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
            (_.m_strAccountName = _?.account_name),
            _?.persona_state_flags &&
              (_.m_unPersonaStateFlags = _?.persona_state_flags),
            _?.game_id && (_.m_gameid = _?.game_id),
            _?.game_server_ip_address &&
              (_.m_unGameServerIP = _?.game_server_ip_address),
            _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id),
            _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info),
            _?.profile_url && (_.m_strProfileURL = _.profile_url),
            _
          );
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
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        const _ = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
        };
        function _(_) {
          const {
              category: _,
              fnShowPicker: _,
              rgPrevLaborOfLoveWinners: _,
            } = _,
            [_, _] = _.useState("");
          if (!(0, _._)(_.voteid).data)
            return (0, _.jsx)(_._, {
              size: "medium",
              position: "center",
              msDelayAppear: 200,
            });
          let _ = (0, _._)("#Steamawards_Nominate_ThisYear");
          return (
            _.flag == _._._ && (_ = (0, _._)("#Steamawards_Nominate_PastYear")),
            (0, _.jsxs)("div", {
              className: _().NominationPickerCtn,
              children: [
                (0, _.jsxs)("div", {
                  className: _().TopRow,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().TopBarText,
                      children: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().SearchBarCtn,
                      children: (0, _.jsx)(_._, {
                        focusOnMount: !0,
                        onChange: (_) =>
                          _(_.currentTarget.value.toLocaleLowerCase()),
                        value: _,
                        className: _().SearchBar,
                        placeholder: (0, _._)("#Steamawards_Nominate_Search"),
                        bShowClearAction: !0,
                      }),
                    }),
                    (0, _.jsx)(_._, {
                      className: _().CloseButton,
                      onClick: () => _(!1),
                      children: (0, _._)("#Button_Close"),
                    }),
                  ],
                }),
                _.trim().length > 0
                  ? (0, _.jsx)(_, {
                      strSearch: _,
                      category: _,
                      rgPrevLaborOfLoveWinners: _,
                    })
                  : (0, _.jsx)(_, {
                      category: _,
                      fnShowPicker: _,
                    }),
                (0, _.jsx)("div", {
                  className: _().BottomRow,
                  children: (0, _.jsx)(_, {
                    unAppID: _._,
                    eSteamAwardCategoryID: _.voteid,
                    eNominatonSource: _._._,
                    fnShowPicker: _,
                  }),
                }),
              ],
            })
          );
        }
        function _(_) {
          const { category: _, fnShowPicker: _ } = _,
            _ = (0, _._)(_.voteid),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _.useMemo(() => {
              let _ = [];
              return _.data.played_app
                .map((_) => ({
                  appID: _.appid,
                  nPlaytime: _.playtime,
                }))
                .filter((_) =>
                  _.data?.some(
                    (_) => _.appid == _.appID && _.category_id != _.voteid,
                  )
                    ? (_.push(_), !1)
                    : !0,
                )
                .concat(_);
            }, [_.voteid, _.data, _.data.played_app]);
          return (0, _.jsxs)("div", {
            className: _().CarouselView,
            children: [
              _.data?.played_app?.length
                ? (0, _.jsxs)("div", {
                    className: (0, _._)(_().RecommendationRow, _().Games),
                    children: [
                      (0, _.jsx)("div", {
                        className: _().RecommendationRowTitle,
                        children: (0, _._)(
                          "#Steamawards_Nominate_GamesYouPlayed",
                        ),
                      }),
                      (0, _.jsx)(_, {
                        eSteamAwardCategoryID: _.voteid,
                        eNominatonSource: _._._,
                        rgGameCarouselItems: _,
                      }),
                    ],
                  })
                : (0, _.jsx)(_, {
                    eSteamAwardCategoryID: _.voteid,
                    fnShowPicker: _,
                  }),
              !_ &&
                _.data?.suggested_events?.length > 0 &&
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().RecommendationRow, _().Events),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().RecommendationRowTitle,
                      children: (0, _._)("#Steamawards_Nominate_Events"),
                    }),
                    (0, _.jsx)(_, {
                      rgEvents: _.data.suggested_events,
                    }),
                  ],
                }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().RecommendationRow, _().Games),
                children: [
                  (0, _.jsx)("div", {
                    className: _().RecommendationRowTitle,
                    children: (0, _._)("#Steamawards_Nominate_Recommended"),
                  }),
                  _.data?.suggested_apps &&
                    (0, _.jsx)(_, {
                      eSteamAwardCategoryID: _.voteid,
                      eNominatonSource: _._._,
                      rgGameCarouselItems: _.data.suggested_apps.map((_) => ({
                        appID: _.appid,
                      })),
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { eSteamAwardCategoryID: _, fnShowPicker: _ } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().RecommendationRow, _().NoEligibleGamesCtn),
            children: [
              (0, _.jsx)("div", {
                className: _().RecommendationRowTitle,
                children: (0, _._)("#Steamawards_Nominate_NoEligibleGames"),
              }),
              (0, _.jsx)("div", {
                className: _().RecommendationRowSubtitle,
                children: (0, _._)(
                  "#Steamawards_Nominate_NoEligibleGames_cont",
                ),
              }),
              (0, _.jsx)(_, {
                unAppID: _._,
                eSteamAwardCategoryID: _,
                eNominatonSource: _._._,
                fnShowPicker: _,
              }),
            ],
          });
        }
        function _(_) {
          const { strSearch: _, category: _, rgPrevLaborOfLoveWinners: _ } = _,
            _ = (0, _._)(_, _, _),
            _ = _.useRef(void 0),
            _ = (0, _._)();
          return (
            _.useEffect(() => {
              _?.current && _ && _.current.scrollIntoView();
            }, [_, _]),
            (0, _.jsx)("div", {
              className: _().SearchContainer,
              ref: _,
              children: _.isLoading
                ? (0, _.jsx)(_._, {
                    className: _().SearchThrobber,
                    size: "large",
                    position: "center",
                    msDelayAppear: 200,
                  })
                : (0, _.jsx)(_.Fragment, {
                    children:
                      _.data?.length > 0
                        ? (0, _.jsx)(_._, {
                            className: _().SearchResultsContainer,
                            children: _.data.map((_) =>
                              (0, _.jsx)(
                                _,
                                {
                                  eSteamAwardCategoryID: _.voteid,
                                  eNominatonSource: _._._,
                                  appSuggestion: _,
                                },
                                _._,
                              ),
                            ),
                          })
                        : (0, _.jsx)("div", {
                            className: _().NoResultsCtn,
                            children: (0, _._)("#Steamawards_Search_NoResults"),
                          }),
                  }),
            })
          );
        }
        function _(_) {
          const {
              appSuggestion: _,
              eSteamAwardCategoryID: _,
              eNominatonSource: _,
            } = _,
            _ = parseInt(_._),
            _ = (0, _._)(_);
          return (0, _.jsxs)(_._, {
            className: _().SearchResultApp,
            children: [
              (0, _.jsx)(_._, {
                _: _,
                children: (0, _.jsx)("img", {
                  src: _.small_cap,
                }),
              }),
              (0, _.jsx)(_, {
                eSteamAwardCategoryID: _,
                eNominatonSource: _,
                unAppID: _,
              }),
            ],
          });
        }
        function _(_) {
          let _ = 1;
          return (
            _.innerWidth >= 1080
              ? (_ = 4)
              : _.innerWidth >= 800
                ? (_ = 3)
                : _.innerWidth >= 600 && (_ = 2),
            _
          );
        }
        function _(_) {
          const {
              rgGameCarouselItems: _,
              eSteamAwardCategoryID: _,
              eNominatonSource: _,
            } = _,
            _ = (0, _._)(
              _?.map((_) => _.appID),
              _,
            ),
            _ = (0, _._)()?.ownerWindow || window,
            [_, _] = _.useState(() => _(_)),
            _ = (0, _._)(),
            _ = _.useCallback(
              (_) => {
                _(_(_));
              },
              [_],
            ),
            _ = (0, _._)(_);
          if (_ == _._) return null;
          const _ = _.filter((_) => _._.Get().BHasApp(_.appID));
          return (0, _.jsx)("div", {
            ref: _,
            className: _().SuggestionCarousel,
            children: (0, _.jsx)(_._, {
              feature: "steamawards_nominate",
              children: (0, _.jsx)(_._, {
                gap: 12,
                hideArrows: !(0, _._)(),
                visibleElements: _,
                useTestScrollbar: !0,
                bLazyRenderChildren: !0,
                hidePips: _,
                screenIsWide: (0, _._)(),
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      eNominatonSource: _,
                      eSteamAwardCategoryID: _,
                      appID: _.appID,
                      nPlaytime: _.nPlaytime,
                    },
                    _.appID,
                  ),
                ),
              }),
            }),
          });
        }
        function _(_) {
          const {
              appID: _,
              eSteamAwardCategoryID: _,
              eNominatonSource: _,
              nPlaytime: _,
            } = _,
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!_) return null;
          let _ = null;
          return (
            _ && (_ = (_ / 60).toFixed(1)),
            (0, _.jsxs)("div", {
              className: _().GameCarouselItemCtn,
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className: _().PlaytimeIndicator,
                    children: (0, _._)("#Steamawards_Playtime_Hours", _),
                  }),
                (0, _.jsx)(_._, {
                  _: _,
                  children: (0, _.jsx)("img", {
                    className: _.AppCapsuleImage,
                    src: (0, _._)(_, "small_capsule"),
                    alt: _.name || "",
                  }),
                }),
                (0, _.jsx)(_, {
                  unAppID: _,
                  eNominatonSource: _,
                  eSteamAwardCategoryID: _,
                }),
              ],
            })
          );
        }
        function _(_) {
          const {
              unAppID: _,
              eSteamAwardCategoryID: _,
              eNominatonSource: _,
              fnShowPicker: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)()?.ownerWindow || window,
            _ = _ === _._,
            _ = _.useMemo(
              () => _.data?.find((_) => _.category_id == _)?.appid === _,
              [_, _.data, _],
            ),
            _ = _.useCallback(
              (_) => {
                let _ = (0, _._)(
                  "#Steamawards_Nominate_Error_Generic",
                  _,
                  _ ?? "Unknown",
                );
                _ == _._ &&
                  (_ = (0, _._)("#Steamawards_Nominate_Error_NoMatch", _)),
                  (0, _._)(_, _);
              },
              [_, _],
            ),
            _ = _.useCallback(() => {
              _ === _._ && _ && _(!1);
            }, [_, _]),
            _ = (0, _._)(_, _, _, _, _);
          let _ = (0, _._)("#Steamawards_Nominate"),
            _ = null,
            _ = (_) => {
              if (_) {
                _.preventDefault();
                return;
              }
              if ((0, _.UserEligibleToNominateOrVote)(!1)) _.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            };
          return (
            _
              ? ((_ = (0, _._)("#Steamawards_Skip_Btn")),
                (_ = (0, _.jsx)(_.MOk, {})))
              : _ && (_ = (0, _._)("#Steamawards_Nominated")),
            (0, _.jsxs)(_._, {
              onClick: _,
              className: (0, _._)(_().NominateGameButton, _ && _().Nominated),
              children: [_, _],
            })
          );
        }
        function _(_) {
          const { rgEvents: _ } = _,
            [_, _] = _.useState(!1),
            _ = (0, _._)()?.ownerWindow || window,
            [_, _] = _.useState(4),
            _ = _.useCallback(
              (_) => {
                let _ = 1;
                _.innerWidth >= 1080
                  ? (_ = 4)
                  : _.innerWidth >= 920
                    ? (_ = 3)
                    : _.innerWidth >= 600 && (_ = 2),
                  _(_);
              },
              [_],
            ),
            _ = (0, _._)(_);
          return (
            _.useEffect(() => {
              if (_) return;
              (async () => {
                _.forEach((_) => {
                  _._.QueueLoadPartnerEvent(_.clanid, _.event_gid, !1);
                });
                const _ = _.map((_) =>
                  _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    _._.InitFromClanID(_.clanid),
                    _.event_gid,
                    0,
                    !1,
                  ),
                );
                await Promise.all(_), _(!0);
              })();
            }, [_, _]),
            _.length
              ? _
                ? (0, _.jsx)("div", {
                    ref: _,
                    className: _().EventCarousel,
                    children: (0, _.jsx)(_._, {
                      feature: "steamawards_event",
                      children: (0, _.jsx)(_._, {
                        gap: 12,
                        hideArrows: !(0, _._)(),
                        visibleElements: _,
                        useTestScrollbar: !0,
                        bLazyRenderChildren: !0,
                        className: _().GameCarousel,
                        screenIsWide: (0, _._)(),
                        children: _.map((_) =>
                          (0, _.jsx)(
                            _,
                            {
                              gidEvent: _.event_gid,
                            },
                            _.event_gid,
                          ),
                        ),
                      }),
                    }),
                  })
                : (0, _.jsx)(_._, {
                    className: _().EventCarousel,
                    size: "xlarge",
                    position: "center",
                  })
              : null
          );
        }
        function _(_) {
          const { gidEvent: _ } = _,
            _ = _._.GetClanEventModel(_),
            _ = (0, _._)();
          if (!_) return null;
          const _ = (_) => {
            _.RecordEventRead(_, _._._),
              (0, _._)(_, _._(_)),
              _.stopPropagation(),
              _.preventDefault();
          };
          return (0, _.jsx)(_._, {
            event: _,
            bShowAssociatedApp: !0,
            bHidePrices: !0,
            onClick: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { steamID: _, nYear: _ } = _,
            [_] = (0, _._)("k", null),
            _ = !!((_ && _ != _._.steamid) || _),
            _ = _()("2025-12-01T10:00:00-08:00").unix(),
            _ = _._.GetTimeNowWithOverride(),
            _ = !_ && _ <= _;
          return (
            _.useEffect(() => {
              _._.Init();
            }, []),
            (0, _.jsx)(_._, {
              method: "nominations",
              children: (0, _.jsxs)(_._, {
                className: _().NominationsPageContent,
                children: [
                  _
                    ? (0, _.jsx)(_, {
                        bEnableNominating: _,
                        steamid: _,
                      })
                    : (0, _.jsx)(_, {
                        year: _,
                      }),
                  !_ &&
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().SectionContent,
                        _().ProgressAndShareCtn,
                      ),
                      children: [
                        (0, _.jsx)(_, {}),
                        (0, _.jsx)(_, {
                          nYear: _,
                        }),
                      ],
                    }),
                  (0, _.jsx)(_, {
                    bEnableNominating: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().BackgroundDark,
                    children: [!_ && (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().NominationsHeaderCtn,
            children: (0, _.jsx)("div", {
              className: _().FAQHeaderArea,
              children: (0, _.jsxs)("div", {
                className: _().FAQHeaderCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().FAQSaletitle,
                    children: (0, _._)(
                      "#Steamawards_Title",
                      (0, _.jsx)("br", {}),
                      (0, _.jsx)("br", {}),
                    ),
                  }),
                  (0, _.jsx)("div", {
                    className: _().FAQComingsoon,
                    children: (0, _._)("#Steamawards_NominateNow"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().FAQComingsoon,
                    children: (0, _._)("#Steamawards_LevelUpNow", _.year),
                  }),
                  (0, _.jsx)("div", {
                    className: _().FAQComingsoon,
                    children: (0, _._)("#Steamawards_VoteWinter"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().FAQComingsoon,
                    children: (0, _._)("#Steamawards_WinnersAnnounced"),
                  }),
                ],
              }),
            }),
          });
        }
        function _(_) {
          const { steamid: _, bEnableNominating: _ } = _,
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: _().NominationsHeaderCtn,
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().FAQHeaderArea, _().FriendsHeader),
              children: [
                (0, _.jsxs)("div", {
                  className: _().FriendsHeaderCtn,
                  children: [
                    (0, _.jsx)("img", {
                      src: _.data?.avatar_url_full,
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FriendsTitleCtn,
                      children: [
                        (0, _.jsx)("div", {
                          className: (0, _._)(_().FriendsTitle, _().Gold),
                          children: (0, _._)("#Steamawards_TheSteamAwards"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FriendsTitle,
                          children: (0, _._)(
                            "#Steamawards_FriendsNominations",
                            _.data?.m_strPlayerName,
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _().HeaderButtonCtn,
                    children: (0, _.jsx)("a", {
                      href: `${_._.STORE_BASE_URL}steamawards/nominations`,
                      className: (0, _._)(_().NominateGameButton, _().White),
                      children: (0, _._)(
                        "#Steamawards_MakeYourOwnNominations_Btn",
                      ),
                    }),
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_._);
          if (!_.data?.votes) return null;
          const _ = !_.data || _.data.length == 0 ? "0" : "" + _.data.length;
          return (0, _.jsx)(_._, {
            className: (0, _._)(_().NominationProgressCtn),
            children: (0, _.jsx)("div", {
              className: _().ProgressTitle,
              children: (0, _._)(
                "#Steamawards_TotalNominations",
                _,
                _.data?.votes?.length,
              ),
            }),
          });
        }
        function _(_) {
          const { bEnableNominating: _ } = _,
            _ = (0, _._)(_._);
          if (!_.data) return null;
          const _ = _.data.votes.map((_) =>
            (0, _.jsx)(
              _,
              {
                bEnableNominating: _,
                category: _,
                rgPrevLaborOfLoveWinners: _.data.labor_of_love_winners,
              },
              _.voteid,
            ),
          );
          return (0, _.jsx)(_._, {
            className: (0, _._)(_().SectionContent, _().SteamAwardCategories),
            children: _,
          });
        }
        function _(_) {
          const {
              category: _,
              bEnableNominating: _,
              rgPrevLaborOfLoveWinners: _,
            } = _,
            { currentNomination: _ } = (0, _._)(_.voteid),
            [_, _] = _.useState(!1),
            _ = _.internal_name,
            _ =
              _._.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              _ +
              ".jpg?v=3";
          return (0, _.jsxs)(_._, {
            className: (0, _._)(
              _().SteamAwardCategory,
              _ && _().Nominated,
              _ && _().PickerOpen,
            ),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().SteamAwardCategoryBackground),
                style: {
                  backgroundImage: `url( ${_} )`,
                },
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().SteamAwardCategoryBlurryBackground),
                style: {
                  backgroundImage: `url( ${_} )`,
                },
              }),
              (0, _.jsxs)("div", {
                className: _().CategoryRow,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().LeftColumn,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _().CategoryTitleRow,
                        children: [
                          _ &&
                            (0, _.jsx)("div", {
                              className: _().Checkbox,
                              children:
                                _ &&
                                (0, _.jsx)(_.X4B, {
                                  color: "#ffffff",
                                  highlightColor: "#ffffff",
                                }),
                            }),
                          (0, _.jsx)("div", {
                            className: _().CategoryTitle,
                            children: _.localization.title_award,
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: _().CategoryDescription,
                        children: _.localization.award_description,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().RightColumn, _ && _().PickerOpen),
                    children: [
                      (0, _.jsx)("div", {
                        className: _().CapsuleBlurryContainer,
                        children: _
                          ? (0, _.jsx)(_, {
                              nomination: _,
                              bBlurry: !0,
                            })
                          : (0, _.jsx)(_, {}),
                      }),
                      (0, _.jsx)("div", {
                        className: _().CapsuleContainer,
                        children: _
                          ? (0, _.jsx)(_, {
                              nomination: _,
                              bBlurry: !1,
                            })
                          : (0, _.jsx)(_, {}),
                      }),
                      _ &&
                        (0, _.jsx)(_, {
                          fnShowPicker: _,
                          has_nomination: !!_,
                        }),
                    ],
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  fnShowPicker: _,
                  category: _,
                  rgPrevLaborOfLoveWinners: _,
                }),
            ],
          });
        }
        function _(_) {
          const { nomination: _, bBlurry: _ } = _,
            _ = (0, _._)(_.appid),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return _
            ? _
              ? (0, _.jsx)("img", {
                  src: (0, _._)(_, "header"),
                  alt: _.name,
                })
              : (0, _.jsx)(_._, {
                  className: _().NominatedGameCapsule,
                  _: _,
                  children: (0, _.jsx)("img", {
                    src: (0, _._)(_, "header"),
                    alt: _.name,
                  }),
                })
            : null;
        }
        function _() {
          return (0, _.jsx)("div", {
            className: _().NominatedGameCapsule,
          });
        }
        function _(_) {
          const { has_nomination: _, fnShowPicker: _ } = _;
          let _ = (0, _._)("#Steamawards_Nominate_Btn"),
            _ = _().ActionNominate,
            _ = () => _(!0);
          return (
            _._.logged_in
              ? _ &&
                ((_ = (0, _._)("#Steamawards_Edit_Btn")), (_ = _().ActionEdit))
              : ((_ = (0, _._)("#Steamawards_Login_Btn")),
                (_ = _().ActionLogin),
                (_ = () => (0, _._)())),
            (0, _.jsx)("div", {
              className: (0, _._)(_().NominateBtnCtn, _),
              children: (0, _.jsx)(_._, {
                onClick: _,
                className: (0, _._)(_().NominateButton),
                children: _,
              }),
            })
          );
        }
        function _() {
          const _ = (0, _._)(_.GPz._);
          let _ = 0;
          const _ = _.data?.quests?.map(
            (_) => (
              _.completed && _++,
              (0, _.jsx)(
                _,
                {
                  eStoreQuestID: _.questid,
                  completed: _.completed,
                },
                _.questid,
              )
            ),
          );
          let _ = [];
          for (let _ = 1; _ < 5; _++)
            _.push(
              (0, _.jsx)(
                _,
                {
                  nBadgeLevel: _,
                  bCompleted: _ >= _,
                },
                _,
              ),
            );
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().BadgeSectionCtn, _().SectionContent),
            children: [
              _._.logged_in &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: _().BadgeSectionTitle,
                      children: (0, _._)("#Steamawards_Badge_SectionTitle"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().BadgeTasksCtn,
                      children: _,
                    }),
                  ],
                }),
              (0, _.jsxs)("div", {
                className: _().BadgeStatusCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().BadgeStatusTitle,
                    children: (0, _._)("#Steamawards_Badge_BadgeTitle"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().BadgeStatusDesc,
                    children: (0, _._)("#Steamawards_Badge_BadgeDesc"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().BadgeImageRow,
                    children: _,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { nBadgeLevel: _, bCompleted: _ } = _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().BadgeItem, _ && _().Active),
            children: [
              (0, _.jsx)("div", {
                className: _().BadgeImage,
                children: (0, _.jsx)("img", {
                  src:
                    _._.BASE_URL_STORE_CDN_ASSETS +
                    `promo/steamawards2025/level_0${_}.webp`,
                }),
              }),
              (0, _.jsx)("div", {
                className: _().BadgeDesc,
                children: (0, _._)(`#Steamawards_Badge_BadgeTask${_}`),
              }),
            ],
          });
        }
        function _(_) {
          switch (_) {
            case 610:
              return (0, _._)("#Steamawards_Task1");
            case 611:
              return (0, _._)("#Steamawards_Task2");
            case 612:
              return (0, _._)("#Steamawards_Task3");
            case 613:
              return (0, _._)("#Steamawards_Task4");
            default:
              return "Unknown Task";
          }
        }
        function _(_) {
          const { eStoreQuestID: _, completed: _ } = _;
          return (0, _.jsxs)("div", {
            className: _().BadgeTask,
            children: [
              (0, _.jsx)("div", {
                className: _().Checkbox,
                children: _ ? (0, _.jsx)(_.Jlk, {}) : null,
              }),
              (0, _.jsx)("div", {
                className: _().TaskTitle,
                children: _(_),
              }),
            ],
          });
        }
        function _() {
          const _ = _._.COMMUNITY_BASE_URL + "my/badges/";
          return (0, _.jsx)("div", {
            className: (0, _._)(_().NominationsFAQ, _().SectionContent),
            children: (0, _.jsxs)("div", {
              className: _().NominationsFAQCtn,
              children: [
                (0, _.jsxs)("div", {
                  className: _().LeftCol,
                  children: [
                    (0, _.jsx)("h3", {
                      className: _().FaqSectionTitle,
                      children: (0, _._)("#Steamawards_FAQ_Title_Badges"),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)("#Steamawards_FAQ_XP_Q"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)("#Steamawards_FAQ_XP_A"),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)("#Steamawards_FAQ_BadgesAll_Q"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_BadgesAll_A_wLink",
                            (0, _.jsx)("a", {
                              href: _,
                              children: (0, _._)(
                                "#Steamawards_FAQ_BadgesAll_A_YourBadges",
                              ),
                            }),
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)("#Steamawards_FAQ_ReviewsPrev_Q"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)("#Steamawards_FAQ_ReviewsPrev_A"),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_BadgeSkipping_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_BadgeSkipping_A1",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_BadgeSkipping_A2",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _().RightCol,
                  children: [
                    (0, _.jsx)("h3", {
                      className: _().FaqSectionTitle,
                      children: (0, _._)("#Steamawards_FAQ_Title_Nominations"),
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_WhoCanNominate_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_WhoCanNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_HowToNominate_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_HowToNominate_A",
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)("#Steamawards_FAQ_WhichGames_Q"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)("#Steamawards_FAQ_WhichGames_A1"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)("#Steamawards_FAQ_WhichGames_A2"),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)("#Steamawards_FAQ_WhichGames_A3"),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_NominateMultiple_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_NominateMultiple_A",
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_EditNominations_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_EditNominations_A",
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_HowShareFriends_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_HowShareFriends_A",
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_WinnersSelected_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_WinnersSelected_A",
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsxs)("div", {
                      className: _().FaqEntry,
                      children: [
                        (0, _.jsx)("div", {
                          className: _().FAQ_Q,
                          children: (0, _._)(
                            "#Steamawards_FAQ_WhyParticipate_Q",
                          ),
                        }),
                        (0, _.jsx)("div", {
                          className: _().FAQ_A,
                          children: (0, _._)(
                            "#Steamawards_FAQ_WhyParticipate_A",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function _(_, _) {
          (0, _._)(
            (0, _.jsx)(_, {
              nYear: _,
            }),
            _,
          );
        }
        function _(_) {
          const { closeModal: _, nYear: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            [_, _] = (0, _.useState)(!1);
          if (!_.data) return null;
          const [_, _] = _.data;
          let _ = "";
          _.code &&
            (_ =
              _._.STORE_BASE_URL +
              `steamawards/nominations/${_}/` +
              _._.steamid +
              "?k=" +
              _.code);
          const _ = () => {
            navigator.clipboard.writeText(_), _(!0);
          };
          return (0, _.jsx)(_._, {
            closeModal: _,
            bAlertDialog: !0,
            strCancelButtonText: (0, _._)("#Steamawards_Close_Btn"),
            strTitle: (0, _._)("#Steamawards_ShareLink_Title"),
            children: (0, _.jsxs)(_._, {
              className: _().ShareModalBody,
              "flow-children": "column",
              children: [
                (0, _.jsx)("p", {
                  className: (0, _._)(_().ShareModalText, _().IntroText),
                  children: (0, _._)("#Steamawards_ShareModal_Description"),
                }),
                _ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_._, {
                        children: _._.Localize("#YIR_ShareModal_YourLink"),
                      }),
                      (0, _.jsxs)("div", {
                        className: _().UrlContainer,
                        children: [
                          (0, _.jsx)("div", {
                            className: _().Url,
                            children: _,
                          }),
                          (0, _.jsx)(_._, {
                            className: _().Button,
                            onClick: _,
                            children: _._.Localize(
                              _
                                ? "#YIR_ShareModal_CopyLink_Success"
                                : "#YIR_ShareModal_CopyLink",
                            ),
                          }),
                        ],
                      }),
                      (0, _.jsx)("p", {
                        className: _().ShareModalText,
                        children: (0, _._)(
                          "#Steamawards_ShareModal_Description2",
                        ),
                      }),
                    ],
                  }),
                (0, _.jsx)(_._, {
                  className: _().GenerateShareLinkBtn,
                  onClick: () => _.mutate(),
                  children: (0, _._)(
                    _
                      ? "#Steamawards_GenerateLink_Btn_Renew"
                      : "#Steamawards_GenerateLink_Btn",
                  ),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { nYear: _ } = _,
            _ = (0, _._)();
          return !_._.logged_in || !_.data || _.data.length == 0
            ? (0, _.jsx)("div", {
                className: _().ShareLinkCtn,
                children: (0, _.jsx)("div", {
                  className: _().ProgressTitle,
                  children: (0, _._)("#Steamawards_GenerateLink_Fallback"),
                }),
              })
            : (0, _.jsx)("div", {
                className: _().ShareLinkCtn,
                children: (0, _.jsxs)(_._, {
                  className: _().ShareBtn,
                  onClick: (_) => {
                    _.preventDefault(), _.stopPropagation(), _(_, (0, _._)(_));
                  },
                  children: [
                    (0, _.jsx)(_.SYj, {}),
                    (0, _.jsx)("span", {
                      children: (0, _._)("#Steamawards_ShareLink_Btn"),
                    }),
                  ],
                }),
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          include_basic_info: !0,
          include_assets_without_overrides: !0,
          include_trailers: !0,
        };
        function _() {
          const _ = _.useContext(_._);
          return _
            ? (0, _.jsxs)(_._, {
                className: _().VotingPageContent,
                children: [
                  (0, _.jsx)(_, {
                    bIsVotingOpen: _.bVotingOpen,
                    bIsVotingPast: _.bVotingPast,
                  }),
                  (0, _.jsxs)("div", {
                    className: _().VotingArea,
                    children: [
                      _.bHasStickerRewards &&
                        (0, _.jsx)(_, {
                          unSaleAppID: _.config.appid,
                          bIsVotingOpen: _.bVotingOpen,
                          bIsVotingPast: _.bVotingPast,
                        }),
                      (0, _.jsx)(_, {
                        bIsVotingOpen: _.bVotingOpen,
                        bIsVotingPast: _.bVotingPast,
                        unSaleAppID: _.config.appid,
                      }),
                    ],
                  }),
                  (0, _.jsx)(_, {}),
                ],
              })
            : null;
        }
        function _(_) {
          const { bIsVotingOpen: _, bIsVotingPast: _ } = _,
            _ = _.useContext(_._),
            _ = (0, _._)();
          let _;
          return (
            _
              ? (_ = (0, _._)("#Steamawards_Voting_Header_VoteNow"))
              : _
                ? (_ = (0, _._)("#Steamawards_Voting_Header_WinnersUp"))
                : (_ = (0, _._)(
                    "#Steamawards_Voting_Header_VoteSoon_New",
                    _(_.rtVoteStart),
                  )),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)("div", {
                className: (0, _._)(_().HeaderCtn, _.HeaderCtn),
                children: (0, _.jsx)("div", {
                  className: _().HeaderContent,
                  children: (0, _.jsxs)("div", {
                    className: _().TextColumn,
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(_().EventTitle, _.EventTitle),
                        children: (0, _._)(
                          "#Steamawards_Title_WithYear",
                          _.nYear,
                          (0, _.jsx)("br", {}),
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().InfoText,
                          _().Large,
                          _.InfoText,
                          _.Large,
                        ),
                        children: _,
                      }),
                      _
                        ? (0, _.jsx)(_.Fragment, {
                            children: (0, _.jsx)("div", {
                              className: (0, _._)(_().InfoText, _.InfoText),
                              children: (0, _._)(
                                "#Steamawards_Voting_Header_Winners",
                                _.nYear,
                              ),
                            }),
                          })
                        : (0, _.jsxs)(_.Fragment, {
                            children: [
                              (0, _.jsx)("div", {
                                className: (0, _._)(_().InfoText, _.InfoText),
                                children: (0, _._)(
                                  "#Steamawards_Voting_Header_Finalists",
                                ),
                              }),
                              (0, _.jsx)("div", {
                                className: (0, _._)(_().InfoText, _.InfoText),
                                children: (0, _._)(
                                  "#Steamawards_Voting_Header_HowTo",
                                  _(_.rtVoteEnd),
                                ),
                              }),
                              (0, _.jsx)("div", {
                                className: (0, _._)(_().InfoText, _.InfoText),
                                children: (0, _._)(
                                  "#Steamawards_Voting_Header_Dates_New",
                                  _(_.rtVoteEnd),
                                ),
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
              }),
            })
          );
        }
        function _(_) {
          const { unSaleAppID: _, bIsVotingOpen: _, bIsVotingPast: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(_),
            _ = (0, _._)();
          if (!_.data) return null;
          const _ = _.data.votes.map((_) =>
            (0, _.jsx)(
              _,
              {
                unSaleAppID: _,
                definition: _,
              },
              _.voteid,
            ),
          );
          let _ = null;
          return (
            _
              ? (_ = (0, _._)(
                  "#Steamawards_Progress_Title_Past",
                  _.data?.length ?? 0,
                  _.data.votes.length,
                ))
              : _
                ? _._.logged_in
                  ? _.data?.length > 0
                    ? (_ = (0, _._)(
                        "#Steamawards_Progress_Title",
                        _.data?.length,
                        _.data.votes.length,
                      ))
                    : (_ = (0, _._)(
                        "#Steamawards_Progress_Title_None",
                        _.data.votes.length,
                      ))
                  : (_ = (0, _._)("#Steamawards_Progress_Title_LoggedOut"))
                : (_ = (0, _._)(
                    "#Steamawards_Progress_Title_Soon",
                    _.data.votes.length,
                  )),
            (0, _.jsxs)(_._, {
              className: (0, _._)(
                _().ProgressCtn,
                _().SectionContent,
                _.ProgressCtn,
              ),
              children: [
                (0, _.jsx)("div", {
                  className: _().Title,
                  children: _,
                }),
                (0, _.jsx)("div", {
                  className: _().StickerRow,
                  children: _,
                }),
              ],
            })
          );
        }
        function _(_) {
          const { definition: _, unSaleAppID: _ } = _,
            _ = (0, _._)(_, _.voteid),
            _ = () =>
              (window.location.href =
                "#" + _.localization.title.replace(/\s/g, "")),
            _ = (0, _._)(_, _.voteid),
            _ = (0, _._)(),
            _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_ ? _?.item_image_small : _?.item_image_large}`,
            _ = `${_._.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${_?.item_image_small}`;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().CategoryStickerCtn, _.CategoryStickerCtn),
            children: [
              (0, _.jsx)("img", {
                className: (0, _._)(
                  _().CategoryStickerHover,
                  _.CategoryStickerHover,
                ),
                src: _,
              }),
              (0, _.jsx)(_._, {
                className: (0, _._)(_().CategorySticker, !_ && _().Inactive),
                onActivate: _,
                style: {
                  backgroundImage: `url( '${_}' )`,
                },
              }),
            ],
          });
        }
        function _(_) {
          const { unSaleAppID: _, bIsVotingOpen: _, bIsVotingPast: _ } = _,
            _ = (0, _._)(_).data.votes.map((_) =>
              (0, _.jsx)(
                _,
                {
                  bIsVotingOpen: _,
                  bIsVotingPast: _,
                  unSaleAppID: _,
                  definition: _,
                },
                _.voteid,
              ),
            );
          return (0, _.jsx)(_._, {
            _: "Categories",
            className: (0, _._)(_().CategoryList, _().SectionContent),
            children: _,
          });
        }
        function _(_) {
          const {
              definition: _,
              unSaleAppID: _,
              bIsVotingOpen: _,
              bIsVotingPast: _,
            } = _,
            _ = (0, _._)(
              _.app_discounts.map((_) => _.appid),
              _,
            ),
            _ = (0, _._)(_, _.voteid),
            _ = _.useRef(0),
            _ = (0, _._)(),
            _ = _.useContext(_._),
            [_, _] = _.useState([]),
            [_, _] = _.useState(0),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(0),
            [_, _] = _.useState(!_ && !_),
            [_, _] = _.useState(),
            [_, _] = _.useState(669),
            _ =
              _._.BASE_URL_STORE_CDN_ASSETS +
              "promo/steamawards2024/backgrounds/" +
              _.internal_name +
              ".jpg?v=1",
            _ = _._.IMG_URL + "promo/steamawards2023/placeholder_main.png",
            _ = _?.ownerWindow || window,
            _ = _.useCallback((_) => {
              _(_.contentRect.height);
            }, []),
            _ = (0, _._)(_),
            _ = _.useCallback(() => {
              let _ = "-20% 0px -50% 0px";
              if (_.innerHeight <= _) _ = "0px 0px 0px 0px";
              else {
                const _ = _.innerHeight / _,
                  _ = Math.min(_ * 40 + _ * _ - (_ + 40), _.innerHeight * 0.65);
                _ = `-${Math.min(_ * 0.4, _.innerHeight * 0.1)}px 0px -${_}px 0px`;
              }
              _(_);
            }, [_.innerHeight, _]);
          _.useEffect(
            () => (
              window.addEventListener("resize", _),
              () => window.removeEventListener("resize", _)
            ),
          ),
            _.useEffect(() => {
              const _ = async () => {
                let _ = [];
                if (_._.logged_in) {
                  const _ = await Promise.all(
                    _.app_discounts?.map(async (_) => {
                      const _ = [_.appid, _._.accountid].toString(),
                        _ = await (0, _._)(_);
                      return {
                        appid: _.appid,
                        hash: _,
                      };
                    }),
                  );
                  _.sort((_, _) => (_.hash > _.hash ? 1 : -1)),
                    (_ = _.map((_) => _.appid));
                } else _ = _.app_discounts.map((_) => _.appid);
                _(_), _(_[_.current]), _();
              };
              _.length || _();
            }, [_.app_discounts, _, _]);
          const _ = _.useCallback(() => {
              if (!_) {
                let _ = _.current + 1;
                _ >= _.length && (_ = 0), (_.current = _), _(_[_.current]);
              }
            }, [_, _]),
            _ = _.useCallback((_) => {
              _(_);
            }, []),
            _ = _.useCallback((_) => {
              _(_), _(_);
            }, []),
            _ = _.useCallback(() => {
              _(0), _(_[_.current]);
            }, [_]);
          if (_ == _._)
            return (0, _.jsx)(_._, {
              position: "center",
              size: "large",
              msDelayAppear: 300,
            });
          const _ = _?.map((_) =>
              (0, _.jsx)(
                _,
                {
                  eCategory: _.voteid,
                  unSaleAppID: _,
                  bCurrentlyActive: _ === _,
                  unAppID: _,
                  bIsVotingOpen: _,
                  bIsCurrentVoteApp: _ == _,
                  fnOnMouseLeaveApp: _,
                  fnOnMouseEnterApp: _,
                },
                _,
              ),
            ),
            _ = _?.map((_) =>
              (0, _.jsx)(
                _,
                {
                  bHoveringApp: _ == _,
                  unAppID: _,
                  bPlayMicrotrailers: _,
                  bCurrentlyActive: _ === _,
                  fnOnVideoEnd: _,
                },
                _,
              ),
            ),
            _ = 500;
          let _ = (0, _.jsx)(_.Fragment, {
            children: _,
          });
          return (
            _.winner_appid && _
              ? (_ = (0, _.jsx)(_, {
                  unAppID: _.winner_appid,
                }))
              : _ &&
                (_ = (0, _.jsx)(_, {
                  unAppID: _,
                })),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)(_._, {
                thresholds: [0.4],
                rootMargin: _,
                trigger: "repeated",
                onVisibilityChange: _,
                children: (0, _.jsxs)(_._, {
                  ref: _,
                  className: (0, _._)(
                    _().SteamAwardCategory,
                    _ && _().CategoryVoted,
                    _ && _().Active,
                  ),
                  children: [
                    (0, _.jsx)("a", {
                      _: _.localization.title.replace(/\s/g, ""),
                      className: _().Anchor,
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().SteamAwardCategoryBackground),
                      style: {
                        backgroundImage: `url( ${_} )`,
                      },
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _().SteamAwardCategoryBlurryBackground,
                      ),
                      style: {
                        backgroundImage: `url( ${_} )`,
                      },
                    }),
                    (0, _.jsxs)("div", {
                      className: _().CategoryRow,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().LeftColumn,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().CategoryTitleRow,
                              children: [
                                (0, _.jsx)("div", {
                                  className: _().CategoryYear,
                                  children: (0, _._)(
                                    "#Steamawards_Title_WithYear_NoBreaks",
                                    _.nYear,
                                  ),
                                }),
                                (0, _.jsx)("div", {
                                  className: _().CategoryTitle,
                                  children: _.localization.title_award,
                                }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: _().CategoryDescription,
                              children: _.localization.award_description,
                            }),
                            (_ || _) &&
                              (0, _.jsx)(_._, {
                                className: _().HideShowBtn,
                                onClick: () => _(!_),
                                children: _
                                  ? (0, _._)("#Steamawards_HideFinalists_Btn")
                                  : (0, _._)("#Steamawards_ShowFinalists_Btn"),
                              }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          className: (0, _._)(_().RightColumn),
                          children: (0, _.jsxs)("div", {
                            className: _().CapsuleContainer,
                            children: [
                              _,
                              (0, _.jsx)("img", {
                                src: _,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_._, {
                      timeout: _,
                      unmountOnExit: !0,
                      mountOnEnter: !0,
                      _: _,
                      classNames: {
                        enter: _().Enter,
                        enterActive: _().EnterActive,
                        exit: _().Exit,
                        exitActive: _().ExitActive,
                      },
                      children: (_) =>
                        (0, _.jsxs)("div", {
                          ref: _,
                          className: _().FinalistsCtn,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _().FinalistsIntro,
                              children: [
                                (0, _.jsx)("div", {
                                  children: _
                                    ? (0, _._)(
                                        "#Steamawards_Voting_Finalists_Past",
                                      )
                                    : (0, _._)("#Steamawards_Voting_Finalists"),
                                }),
                                (0, _.jsx)("div", {
                                  className: _().FinalistsLine,
                                }),
                              ],
                            }),
                            (0, _.jsx)("div", {
                              className: _().FinalistsRow,
                              children: _,
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function _(_) {
          const { unAppID: _ } = _,
            [_] = (0, _._)(_, _),
            _ = (0, _._)(_?.GetStorePageURL(), "nominee_capsule");
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: _().CurrentVoteBanner,
                    children: (0, _._)("#Steamawards_Voting_YourVote"),
                  }),
                  (0, _.jsx)("a", {
                    href: _,
                    children: (0, _.jsx)("img", {
                      src: _.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { unAppID: _ } = _,
            [_] = (0, _._)(_, _),
            _ = (0, _._)(_?.GetStorePageURL(), "winner_capsule");
          return _
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)("div", {
                    className: _().CurrentVoteBanner,
                    children: (0, _._)("#Steamawards_Voting_Winner"),
                  }),
                  (0, _.jsx)("a", {
                    className: _().WinnerCapsule,
                    href: _,
                    children: (0, _.jsx)("img", {
                      src: _.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                    }),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const {
              unAppID: _,
              bCurrentlyActive: _,
              fnOnVideoEnd: _,
              bPlayMicrotrailers: _,
              bHoveringApp: _,
            } = _,
            [_] = (0, _._)(_, _),
            _ = _.useRef(void 0),
            _ = (0, _._)();
          _.useEffect(() => {
            _.current && (_ && _ ? _.current.play() : _.current.pause());
          }, [_, _]);
          const _ = _?.GetMicroTrailer(_);
          return !_ || !_?.strWebMURL
            ? null
            : (0, _.jsxs)("video", {
                className: (0, _._)(_().MicrotrailerVideo, _ && _().Active),
                poster: _.GetAssetsWithoutOverrides().GetMainCapsuleURL(),
                onEnded: _,
                ref: _,
                preload: "auto",
                loop: _,
                playsInline: !0,
                muted: !0,
                children: [
                  (0, _.jsx)("source", {
                    src: _.strWebMURL,
                    type: "video/webm",
                  }),
                  !_._.IN_CLIENT &&
                    (0, _.jsx)("source", {
                      src: _.strMP4URL,
                      type: "video/mp4",
                    }),
                ],
              });
        }
        function _(_) {
          const {
              unAppID: _,
              unSaleAppID: _,
              eCategory: _,
              bCurrentlyActive: _,
              fnOnMouseEnterApp: _,
              fnOnMouseLeaveApp: _,
              bIsVotingOpen: _,
              bIsCurrentVoteApp: _,
            } = _,
            [_] = (0, _._)(_, _),
            _ = (0, _._)(_, _, _),
            _ = (0, _._)(_?.GetStorePageURL(), "nominee_capsule"),
            _ = (0, _._)(_),
            _ = _ && _.currentNomination?.appid === _,
            _ = _.useCallback(() => {
              if ((0, _.UserEligibleToNominateOrVote)(!0)) _ || _.mutate();
              else {
                console.log(
                  "EventDisplaySteamAwardNomination: UserEligibleToNominateOrVote failed",
                );
                return;
              }
            }, [_, _]);
          if (!_) return null;
          const _ = _
            ? (0, _._)("#Steamawards_Voting_Action_Voted")
            : (0, _._)("#Steamawards_Voting_Action_Vote");
          return (0, _.jsxs)(_._, {
            className: (0, _._)(
              _().FinalistGameCtn,
              _ ? _().CurrentlyFeatured : "",
              _ ? _().MyVote : "",
            ),
            onMouseEnter: () => _(_),
            onBlur: _,
            onFocus: () => _(_),
            onMouseLeave: _,
            children: [
              (0, _.jsxs)("a", {
                href: _,
                className: _().CapsuleLink,
                children: [
                  (0, _.jsx)("img", {
                    src: _.GetAssetsWithoutOverrides().GetHeroCapsuleURL(),
                    className: _().Capsule,
                  }),
                  (0, _.jsx)("div", {
                    className: _().Highlight,
                    children: "\xA0",
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)(_._, {
                  onClick: _,
                  className: _().ActionButton,
                  children: _,
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().YourNomination,
                  children: (0, _._)("#Steamawards_Voting_Action_YourNominee"),
                }),
            ],
          });
        }
        function _() {
          const _ = _.useContext(_._),
            _ = (0, _._)(),
            _ = _._.HELP_BASE_URL + "faqs/view/71D3-35C2-AD96-AA3A",
            _ =
              "#Steamawards_Voting_FAQ_6_Q" + (_.nYear >= 2024 ? "_2024" : ""),
            _ =
              "#Steamawards_Voting_FAQ_6_A" + (_.nYear >= 2024 ? "_2024" : "");
          let _ = [
            (0, _.jsx)(
              _,
              {
                strQuestion: (0, _._)("#Steamawards_Voting_FAQ_1_Q"),
                strAnswer: (0, _._)(
                  "#Steamawards_Voting_FAQ_1_A",
                  (0, _.jsx)("a", {
                    href: _,
                    children: ", ",
                  }),
                ),
              },
              "FAQ_1",
            ),
          ];
          return (
            _.bHasStickerRewards &&
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    strQuestion: (0, _._)("#Steamawards_Voting_FAQ_2_Q"),
                    strAnswer: (0, _._)("#Steamawards_Voting_FAQ_2_A"),
                  },
                  "FAQ_2",
                ),
              ),
            (_ = [
              ..._,
              (0, _.jsx)(
                _,
                {
                  strQuestion: (0, _._)("#Steamawards_Voting_FAQ_3_Q"),
                  strAnswer: (0, _._)(
                    "#Steamawards_Voting_FAQ_3_A_New",
                    _(_.rtVoteStart),
                    _(_.rtVoteEnd),
                  ),
                },
                "FAQ_3",
              ),
              (0, _.jsx)(
                _,
                {
                  strQuestion: (0, _._)("#Steamawards_Voting_FAQ_7_Q"),
                  strAnswer: (0, _._)("#Steamawards_Voting_FAQ_7_A"),
                },
                "FAQ_4",
              ),
              (0, _.jsx)(
                _,
                {
                  strQuestion: (0, _._)("#Steamawards_Voting_FAQ_8_Q"),
                  strAnswer: (0, _._)("#Steamawards_Voting_FAQ_8_A"),
                },
                "FAQ_5",
              ),
              (0, _.jsx)(
                _,
                {
                  strQuestion: (0, _._)("#Steamawards_Voting_FAQ_4_Q"),
                  strAnswer: (0, _._)(
                    "#Steamawards_Voting_FAQ_4_A_New",
                    _(_.rtVoteEnd),
                  ),
                },
                "FAQ_6",
              ),
              (0, _.jsx)(
                _,
                {
                  strQuestion: (0, _._)("#Steamawards_Voting_FAQ_5_Q"),
                  strAnswer: (0, _._)("#Steamawards_Voting_FAQ_5_A"),
                },
                "FAQ_7",
              ),
              (0, _.jsx)(
                _,
                {
                  strQuestion: (0, _._)(_),
                  strAnswer: (0, _._)(_),
                },
                "FAQ_8",
              ),
            ]),
            (0, _.jsxs)("div", {
              className: (0, _._)(_().FAQWrapper, _().SectionContent),
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(_().FaqSectionTitle, _.FaqSectionTitle),
                  children: (0, _._)("#Steamawards_Voting_FAQ_Title"),
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(_().FAQCtn, _.FAQCtn),
                  children: _,
                }),
              ],
            })
          );
        }
        function _(_) {
          const { strQuestion: _, strAnswer: _ } = _,
            _ = (0, _._)();
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().FaqEntry, _.FaqEntry),
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_().FAQ_Q, _.FAQ_Q),
                children: _,
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().FAQ_A, _.FAQ_A),
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          return new Date(_ * 1e3).toLocaleString(_._.GetPreferredLocales(), {
            day: "numeric",
            month: "short",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { nYear: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _(_),
            _ = _.useMemo(() => {
              if (!_ || !_.definitions?.votes?.length) return null;
              const _ = _.definitions.votes[0].start_time,
                _ = _.definitions.votes[0].end_time,
                _ = _ >= _ && _ < _,
                _ = _ >= _,
                _ = _.definitions.votes.some((_) => !!_.item_type);
              return {
                config: _,
                bVotingOpen: _,
                bVotingPast: _,
                yearStyles: _,
                nYear: _,
                rtVoteStart: _,
                rtVoteEnd: _,
                bHasStickerRewards: _,
              };
            }, [_, _, _, _]);
          return _
            ? (0, _.jsx)(_._, {
                method: "steamawards",
                children: (0, _.jsx)(_._.Provider, {
                  value: _,
                  children: (0, _.jsx)(_, {}),
                }),
              })
            : null;
        }
        const _ = {
            2023: _(),
            2024: _(),
            2025: _(),
          },
          _ = Object.values(_).reduce(
            (_, _) => ({
              ..._,
              ..._,
            }),
            {},
          ),
          _ = 2023;
        function _(_) {
          const [_, _] = _.useState({});
          return (
            _.useEffect(() => {
              let _ = _[_];
              _ || (_ = _[_]),
                _({
                  ..._,
                  ..._,
                });
            }, [_]),
            _
          );
        }
        const _ = () =>
          (0, _.jsx)(_._, {
            controller: "steamawards",
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  path: _._.SteamAwardNominations(),
                  render: (_) =>
                    (0, _.jsx)(_, {
                      nYear: parseInt(_.match.params.year),
                      steamID: _.match.params.steamid,
                      ..._,
                    }),
                }),
                (0, _.jsx)(_._, {
                  path: _._.SteamAwards(),
                  render: (_) =>
                    (0, _.jsx)(_, {
                      nYear: parseInt(_.match.params.year),
                    }),
                }),
              ],
            }),
          });
      },
      chunkid: (module) => {
        module.exports = {
          Text: "f6hU22EA7Z8peFWZVBJU",
          Truncate: "_2tXpWMxzSX3lf_9_EFUzmJ",
          "TextSize-1": "NUSSU36hkPXb7VdM8HFef",
          "TextSize-2": "_1HTEiDPVrmM0RUnp3DzkXW",
          "TextSize-3": "_1maNP9UvDekHzld1kwwQnw",
          "TextSize-4": "mGlMCg85s0ULA8kYCZzMB",
          "TextSize-5": "_2MGI1O3WXMHKcWkSFCf6Bz",
          "TextSize-6": "_3kpvs1OYmjREjAE9RONmZm",
          "TextSize-7": "_3RzzHMo4NUK3RIl__o-aYU",
          "TextSize-8": "_3KRhxZU1kR1ArBuZyY_ib3",
          "TextSize-9": "_3O17p9mMWHcy_sU-_IPM6R",
          TextWeight: "_3KfHV-wUo5sKXQAsJZO5Uw",
          TextAlign: "_310d_LkZp2K-i9ZY8r2B_c",
          LineClamp: "_3z4FSJhGOOHIOqRI6ZqJ_H",
          WhiteSpace: "FYJ4NYxpWeIha0N1-jUcm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TextLink: "_1DLGHwAfYnbFVIwbZjO2cn",
          TextLinkButton: "_30P9kUCljAZzX5fl1DHGJe",
          Truncate: "_1FVRWG5uD8VhzoEiOZWrEo",
          "Underline-always": "_3ASRyX4FTT_eMM5S5yrkwK",
          "Underline-never": "_1gsOIvG4APXjSra-_55rdz",
          "Underline-auto": "_2OgYmw12nDHXtyT9za9yzL",
          "Underline-hover": "_3RITvcDUZq-hpnXRpiayfs",
        };
      },
      chunkid: (module) => {
        module.exports = {
          OtherEventsCtn: "_9H6b5yfaxlmcnHvkqtwDK",
          OtherEvents_MainImageCtn: "_2qyLPxO8_nkczRvFiaju8N",
          OtherEvents: "_16DzRvjcqFcYr0NYcWmTrg",
          EventSizer: "_2JC5DEuXUeE50kjpb7Eeau",
          OtherEvents_EventCtn: "_1MwNf8slOG9lOvAeOshmuu",
          EventSummaryText: "ENbI1gFgvIca6HSKAbfiJ",
          ShowInWideMode: "RLbLb742gN095uDUITtIB",
          EventSummaryContainer: "_2GYp44BuZLfKRQdeILTDC3",
          HideInWideMode: "_3itHivPkrgI7TWENi1yxjI",
          OtherEvents_ContentCtn: "_22jEpNTfml-w_aRJV-fKDm",
          HoversEnabled: "_3o6M87A6T172WsUE6MNvdW",
          OtherEvents_TextTitle: "_2jc1DpJ_WzFtigRh5qDWce",
          OtherEvents_MainImage: "_3_wKbXvT7_y5YkrtadL0I6",
          PartnerEventRowCapsule_MainImage: "bC2Zkx7FlANno4SW8FwB-",
          EventSummaryType: "_11JXznGoylLSEmZXZbgcsq",
          OtherEvents_BGImage: "_2pPj9UWoWM6h318uBN0-8X",
          MaskImages: "_1kFdtNfhXozP4yI_qOv2H-",
          OtherEvents_TextCtn: "_3-EtNa1Nr_737K0kglkT9C",
          UpcomingCtn: "_2CXrGPtlQh-j3aSa6XsQDI",
          OtherEvents_SubTitle: "_1Swox5XYdeesack-J7fNLH",
          EventType: "_2BWwVF5N-3fDuJRblB6gHb",
          AppCapsuleImage: "_3OzV3h4jW1bkLmB6TqbYmo",
          CapsuleShadow: "_2rjkJQtvus70aLmbfGoneD",
          AppCapsuleCtn: "_16au-uWHggl6G731aw_eHt",
          AppCapsuleImageHover: "IeC3X0McKdGC79BsC3VvM",
          AppCapsulePrice: "_2-l2M5GPuxKFwV8h1tc_fH",
        };
      },
      chunkid: () => {},
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          NominationsPageContent: "w8AKcU3i8ClK1UzQzqzI",
          SectionContent: "_20IkdxpCDwL8VLda92dq2Y",
          SteamAwardCategories: "_192O0SfNHIDsbHXq5iRgCM",
          NominationCategory: "_2G4S0SFOCuBF1c4Bx-dELf",
          BackgroundDark: "_1tIgRv45QmeUOQXrV9mdMq",
          NominationsHeaderCtn: "_1TnKc86XFqFWZThfWLgaRw",
          FAQHeaderArea: "_2Mwx1ICH6jNzJoeIPhhFDv",
          FAQHeaderCtn: "_3Jx_3njrOqCGvmBb5b53I6",
          FriendsHeader: "_27LlNtlWucjFwSNWY-Sbyb",
          FAQSaletitle: "_3s_6VHcgaXEyyUZ16zweVp",
          FAQComingsoon: "_1cG2WETjKlQ8Z5EC0lw0i9",
          NominationsFAQCtn: "_296AV5WTzSw4KsXXNtA2_x",
          FaqSectionTitle: "_1XIaoVZxTy-yIN4iv4QqL1",
          LeftCol: "Swdwp186ooghtuQCkEqml",
          RightCol: "_2RbOCvYEtWD-qpyXmp3Ye7",
          FaqEntry: "_3QrF1mai6HX6dr7jJijnTT",
          FAQ_Q: "_3Mou7FjFlqrR-kKuTt9N8g",
          FAQ_A: "-K9ED0JWohLoxFufaRmWt",
          SteamAwardCategory: "_3i1u-y7pjl-qc98gufdZUu",
          PickerOpen: "_1rSWia4DrhNXjIAW9m_H7R",
          SteamAwardCategoryBackground: "_35LJC3vUDhyY8YWBfRTzRB",
          Nominated: "_4GIBs4zFQvYzih0mbwMoB",
          SteamAwardCategoryBlurryBackground: "_3obFcpxM1lY5DMX8dIuroo",
          CategoryRow: "_1n-khJ_oWP9-ADtdauxmaP",
          LeftColumn: "_3Od-8EtYzDWL-rqzXdco_3",
          CategoryTitleRow: "_21wHFSOia958bDDSKRAnuz",
          Checkbox: "_33AlTMfX070fpO5wsAbYCj",
          CategoryTitle: "_3nVYk2PImiZU57xx8MxH-X",
          CategoryDescription: "_3mFT207sfDAaxfn-HB15sj",
          RightColumn: "_1g7X8N5RaLG09kZx1u2fbV",
          NominateBtnCtn: "_1HYrGX2M4CebVc7ClAyqi5",
          NominateButton: "_3yYqk-nDDM0DcyB3Id8NjD",
          PickerShown: "_2O-paI1bSbPTq6FALASFAe",
          ActionLogin: "_3s5xsmskAdOpXRyYWej0pj",
          ActionEdit: "_2p6oT45t7Kjk11DKng_WDR",
          CapsuleContainer: "_1fSqpH3qLOnMPsLvsocjDD",
          CapsuleBlurryContainer: "_1NTFi-9ML6rmzzrsR1dDt4",
          SectionTitle: "_2pyDiHU7ljm9ZRO_MWsJwr",
          BadgeSectionCtn: "_2lMcC-ffwNaKEZXfHcIZ2R",
          BadgeTasksCtn: "lVHOaGMQxyd0Pv3gC9QUj",
          BadgeTask: "_3nxfLmk626DE9RgzkJKLsD",
          TaskTitle: "uZMkLwiiLuPCt8EGWV29h",
          BadgeStatusCtn: "_2y8n9AG3gE8R7p0vnCu11y",
          BadgeStatusTitle: "_2sMYOvGVozOqLO6WXFCAMk",
          BadgeStatusDesc: "_3L4e0hBb8fmEtnQ8yFIoZe",
          BadgeImageRow: "_2MLgogShQSsdXcjJVnCrs_",
          BadgeItem: "PJRtCS56eG2Y0_F_VSsx7",
          BadgeImage: "_2sB2cTqit-_ethQFZRSqSN",
          Active: "_20Ol8bIY8KcNPBctmmB8zn",
          NominationPickerCtn: "_3I1Ga7kMZPDXXbOfgfBTDj",
          CarouselView: "_3mKDmumAiG1vMlU0jWpTe0",
          BottomRow: "a3_pmPQJhnwuVtzHgSyu8",
          TopRow: "_1ARPXpnwKMwds0ED6n65hh",
          CloseButton: "_2kep5HQu4ssXfj5IcG2_Zk",
          TopBarText: "_1CNpmoVrp_326dsK0CmqNS",
          SearchBarCtn: "_2sWS-29Gf-VMMR6kq1I0bN",
          RecommendationRow: "_3Xwn8eFK1QXh1ckrOXov07",
          RecommendationRowTitle: "_2Q0KQMyl8fMBpSMgOn0jsf",
          RecommendationRowSubtitle: "xKXQL9kh2IaXx62pUvaM8",
          Events: "kigvxizh8JmTyh5cyzSEA",
          Games: "IpzhVl6SWsWj5Vcmktozv",
          NoEligibleGamesCtn: "_2AqJTwluya2l8sHRS0Nrne",
          SearchContainer: "KBqkfDknFrTcr7ETAE2OW",
          SearchThrobber: "i4KlSZuYm2iFdxbjUegqJ",
          SearchResultsContainer: "_3M2mdkv-ZvUKBkLPH46U8S",
          SearchResultApp: "_3cbS4zsH_qv-1ZcwaA-4Tt",
          NominateGameButton: "CEmahjyiRmgWZlXL6XEpv",
          GameCarouselItemCtn: "_1Em3_QE0y0zfLhSA7n0NDm",
          PlaytimeIndicator: "_3t0T2BFkpBYduyOOwxnBI2",
          BadgeSectionTitle: "_3G1iNhfSRJ9NLuaxjN8MRA",
          White: "_17enANXtRLMRK09o9OKDdF",
          NoResultsCtn: "_2IlW9sfsAiruuo0GxHGgwl",
          ShareLinkCtn: "_15-jFxRvrZDrlMsnc5flU3",
          FriendsHeaderCtn: "_1T9FWlr19WP72HpE5wYup8",
          FriendsTitleCtn: "_3we3-2_E8Qgoj9vpaFu9JG",
          FriendsTitle: "oaA8CcFGe_Kz-3D-qR28Z",
          ProgressAndShareCtn: "_3FdxnzdLCLEUpdpoJJThYZ",
          ProgressTitle: "_3x6HhTNw3LbAwygEgTzwDr",
          ShareBtn: "_1t4jW207kK9lq0dm7UwBIq",
          HeaderButtonCtn: "WSKzFdd9sj_fIAKnqmiOT",
          Gold: "_3f-rIyt2OF08sZWkdxcuzG",
          EventCarousel: "_1ggzska8h4zQPvkSiT3642",
          ShareModalBody: "_3gj5bE9dm_7GXn87PPWJ7q",
          ShareModalText: "_1xonFOaYYv3jpu4vluDcs6",
          IntroText: "_3_Vb7QOOCe07PD_0t4UL0",
          Button: "_2Ynf3ZGFeViNrevWHYC6a-",
          UrlContainer: "_3CXjxVNiKxUH_xCflrU0fv",
          Url: "_3YxsXALKJ70zL3MTTWqibh",
          GenerateShareLinkBtn: "_23i3vxhJO5yZFZ8UkYUHfq",
          BackgroundAnimation: "_2LOnSlelExzMt5V4a0dNMM",
          "ItemFocusAnim-darkerGrey-nocolor": "_1HvhiBok8gSNZxjvKJodk_",
          "ItemFocusAnim-darkerGrey": "_27N4Tx9ZkLoouSi6u2L0Rj",
          "ItemFocusAnim-darkGreySettings": "_3BuduqT5jtwJUrO_Rlx9pN",
          "ItemFocusAnim-darkGrey": "_1t5LnzcxRDUwMaXczWLvT9",
          "ItemFocusAnim-grey": "UvYtyIHWLaxtSAiaOZoaD",
          "ItemFocusAnim-translucent-white-10": "_2Ze0Xg_Rmw0Fw4dtnjqu06",
          "ItemFocusAnim-translucent-white-20": "_6KKdX8p_ia-DW2BgO6XxL",
          "ItemFocusAnimBorder-darkGrey": "_2VHjMLLOWNhhfZTRb8KGKl",
          "ItemFocusAnim-green": "_3qPaUa-qxMzbOWeav6OXLP",
          focusAnimation: "_2YJq7kaNhJ2mQ-Kc9fGZdd",
          hoverAnimation: "_1Ic0fzk_zPsp6jbxsdCaeZ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          HeaderCtn: "_1oXTW_jpUID161hkqtu59M",
          EventTitle: "_3xLoBdLse_J3sDGG1p-yXS",
          InfoText: "_2ajjx_6sFyPgZhqB5H3ZnC",
          Large: "TDUFDP_Bl5TP_b5lgQUzr",
          FAQCtn: "_21i-Qc2WCMVQJPd0uWk5t4",
          FAQ_Q: "dwrawv-PnUTEQ1WVRwb1A",
          FAQ_A: "_2EmOv2BukDb5pXZiDipwMd",
          ProgressCtn: "_10nGaDuKJPA3cGdfbd7NPA",
          CategoryStickerCtn: "bI10T2_lqnfiIng7NCXzs",
          CategoryStickerHover: "_10SrgdoAjwiz9kvKG9lBKZ",
          FaqSectionTitle: "_3iDsXG7lNe9DQrxH1NNhwu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          HeaderCtn: "_1GMPkxVZv0yXnOWg0EPh6C",
          EventTitle: "_2tLWKoQISyrtT5cRa7Bthz",
          InfoText: "_3FtbGRpd5Nc_3f0NWPSmPD",
          Large: "_3lWFGFpuyI0hO8I3yb_rNn",
          FAQCtn: "_3VrYL1Qsqq2VRPBJkD_HaR",
          FAQ_Q: "_3RNM6O7oImIghEzoU__8Xv",
          FAQ_A: "Eq7UcjWcQdQ6tRTSkwOAX",
          ProgressCtn: "_33gp2xeb7nySC065zyyBA4",
          CategoryStickerCtn: "BLVGwcLwZotI2A0JYeAmO",
          CategoryStickerHover: "_3gQFhFaB86zoAkrwBD3DlC",
          FaqSectionTitle: "_1M-Tp2eIsHzDqKVdeyNwEE",
        };
      },
      chunkid: (module) => {
        module.exports = {
          HeaderCtn: "_1LNVToRGS4KgtDmwChCdO-",
          EventTitle: "SHcWFaCZK_WUravI9p1Lm",
          InfoText: "_3Rnea2kVxFT3chmOmqisne",
          Large: "_2jbNvt46h0RqPVOeAwcb8o",
          FAQCtn: "_3UcPLvxpWKhkpPp5vuNZ4T",
          FaqEntry: "_8B-oP4jghkxueOwLkY5FR",
          FAQ_Q: "_3PJmH1yq33fNNGz3U9m-G0",
          FAQ_A: "_2CZcny1e2NwmV-B3klLJiN",
          ProgressCtn: "_3NRXvKouZmkfv0SJaRwm3z",
          CategoryStickerCtn: "_3aAMtCHlbBv9NIEZdV0q4E",
          CategoryStickerHover: "MofbE6cz8noD7aLG-RuYg",
          FaqSectionTitle: "_1KImUETUAUTMVe-r0tBhbv",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          "duration-app-launch": "800ms",
          VotingPageContent: "_1HBQ3phQnNEooQ3rlXJWEU",
          SectionContent: "zKwKtEP3BYYZy9vgcUrYt",
          HeaderCtn: "_13RFBrxHyoARje0nMxX8tH",
          HeaderContent: "_1o6dhi3wA_BGCQuKqQs9Ms",
          TextColumn: "PsKAPvFalwTAqd-O5tpBs",
          FriendsHeader: "_2pdEK8BhZO9Fsk7gBzJcYG",
          EventTitle: "_2mq56csinWHiVtUbhcbIOM",
          InfoText: "_1fILAMegJPwehj7zLNiCnz",
          Large: "_2mg9K9HjkOCk8oaDZr8nkp",
          FaqSectionTitle: "_1EC9jX-4aGWknZdkL2jXz_",
          FAQWrapper: "_3k0Nep9QQO6OOkrJKij0rN",
          FAQCtn: "_2771UKLz1V9nHv-LmzpMxN",
          FaqEntry: "_2ajVjokAhuY_AzHO1fxS-N",
          FAQ_Q: "_1HaJqKTqlf4p0CRH0hJkFP",
          FAQ_A: "_3471NyjBfuVEY6GEgzQvTL",
          CategoryList: "_1XPN-o00qToVhhqCl0uCTs",
          SteamAwardCategory: "_1XBoC_51pQmCRN5avridVk",
          Anchor: "VcuHpIeUsOyyyT_KdUjAm",
          Active: "_1O8sHGuQHPL5zH5Sb46LPO",
          SteamAwardCategoryBackground: "_1ZcFSopSc0cwMRbi5HSVry",
          SteamAwardCategoryBlurryBackground: "L4OcSCmIVcuUl12bXB0TX",
          CategoryVoted: "_1t5sSouAYZGCwMwKgvAnnK",
          FinalistGameCtn: "_1BgO7N4S-tDGDCVnQbvKkq",
          MyVote: "_280DKBVL06EUXmV8oW_Stf",
          FinalistsRow: "gyb_bFa1822peSfG3BTXg",
          CurrentlyFeatured: "_26AMuDHs36difPA2OiqXtX",
          CapsuleLink: "_2jKUwrwbrF2t4kX3B82jyy",
          Highlight: "_2U0iDjf7-xhJmnwL85CgAL",
          CategoryRow: "_2coYuktGYgHFSf2bVXdpq_",
          LeftColumn: "_3Jr5t3bKaU_ex0uuo649cF",
          CategoryTitleRow: "xuEPVrSwJC-vQEtreQvnm",
          CategoryYear: "mRgEVFiqQRKYg192KYX8p",
          CategoryTitle: "_3Ly3DC2P8CDiJ7Xasn2ebQ",
          CategoryDescription: "JP2ZzubSDTJPbrIuVD2dj",
          RightColumn: "p_hWPrN8iGC3gBczTo-6t",
          HideShowBtn: "_15hKKH8LRiReglaS1WuEv3",
          CapsuleContainer: "_1hsDa2rFPpjzMu9rjU82U2",
          MicrotrailerVideo: "_3vYc4xomNAmkqKxT6BWe7-",
          CurrentVoteBanner: "_1jM-nBkKTkN_b8SE_j6ZlE",
          FinalistsCtn: "e6QP7VDRKVVFuD2RnEOjR",
          Enter: "_2bR4vh-7XndeYuAbZ9m3mi",
          EnterActive: "HzogqjfTp-YZfCxAYW1fk",
          "open-finalists": "_28Ukz2J5tkhC8hlAaMrh4a",
          Exit: "_1ihgKIWB0hGadYHxkDnfkc",
          ExitActive: "_2PHm0gzC_ah6_cbZ3Oy37F",
          "close-finalists": "_16yj_nglGTyrUl6zzC-jbj",
          FinalistsIntro: "_1tf4a4qNCkQo4ge5yBdOKV",
          FinalistsLine: "_1Se69bGQiI6RkGrQPuVBAa",
          Capsule: "bfZUvnddL__eLX2GmRP-F",
          ActionButton: "_38mJcOp4-kSzGLzkPdUCp",
          YourNomination: "_2KubnqoAbzyD4ZXRpsMPHy",
          WinnerInfoCtn: "_33Gx5kCJIh6ENRNdv04f9b",
          WinnerText: "joZ0rl06vZjm-lcXLbuSO",
          WinnerName: "_3ycfW5X-9UvOmi_kWZgnNU",
          WinnerCapsule: "_3ELJccHCME0WPJAkoGrxJt",
          VotingArea: "n6ZgKyivXpFdb4SqlA64M",
          ProgressCtn: "_2vUweIYz36Cfi6nm57qY0E",
          Title: "_3BVrSWCKUqUJI-Y9JHyPzu",
          StickerRow: "_1zyzM5BB2snSZ78ORI-3no",
          CategoryStickerCtn: "_1-Z8yTrwnOFgH8CFXjAh50",
          CategorySticker: "_1draD7X6gu1HpgfRr0k3bO",
          Inactive: "_1N55FNJtt9fgD3oEKh1ulo",
          CategoryStickerHover: "_16qkH83hzNBjI3OfNA2yPZ",
          BackgroundAnimation: "_1seXoMt6Gw5ShAn1fMGCk1",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Pfbc5UJLub15f3GMuUOpu",
          "ItemFocusAnim-darkerGrey": "_1zD-uKidolXqoKdiqmbZmN",
          "ItemFocusAnim-darkGreySettings": "_1CaH5L10wLn4wyijOgOTH6",
          "ItemFocusAnim-darkGrey": "_3Hclo3bSXjWjLg7ak63JZU",
          "ItemFocusAnim-grey": "_276KuR-DDgs7rfFECDuv2Q",
          "ItemFocusAnim-translucent-white-10": "_1yYdEMizQD0Hu99aKPdShy",
          "ItemFocusAnim-translucent-white-20": "_8CBvtVkjTgCz2X_r9V8wT",
          "ItemFocusAnimBorder-darkGrey": "_3Buhs9OTFb_CFYf4_t6djI",
          "ItemFocusAnim-green": "_436DEQij8XRuUbarXlQ7H",
          focusAnimation: "_2oswwg33QBrwNVBaVy2Cz0",
          hoverAnimation: "ux33-vIaysS2_ZFy8EmtK",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function _(_) {
          var _ = _(_);
          return __webpack_require__(_);
        }
        function _(_) {
          if (!__webpack_require__._(_, _)) {
            var _ = new Error("Cannot find module '" + _ + "'");
            throw ((_.code = "MODULE_NOT_FOUND"), _);
          }
          return _[_];
        }
        (_.keys = function () {
          return Object.keys(_);
        }),
          (_.resolve = _),
          (module.exports = _),
          (_._ = 61738);
      },
    },
  ]);
})();
