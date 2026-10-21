(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [9438],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_.k_ECutArrowStyle = "single"),
            (_.k_EDoubleArrowStyle = "double"),
            (_.k_EThickChevron = "chevron"),
            (_.k_EFilledArrow = "filled"),
            (_.k_EPointyArrow = "pointy"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_.k_EPillCrumb = "pill"),
            (_.k_ECircularCrumb = "circle"),
            (_.k_ESquareCrumb = "square"),
            _
          ))(_ || {});
        function _(_) {
          const { arrowFill: _, arrowStyle: _, direction: _ } = _;
          switch (_) {
            default:
            case _.k_ECutArrowStyle: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.uMb, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EDoubleArrowStyle: {
              const _ = _ == "right" ? 180 : 0;
              return (0, _.jsx)(_.F2T, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EThickChevron: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.l8x, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EFilledArrow: {
              const _ = _ == "right" ? 90 : 270;
              return (0, _.jsx)(_.V5W, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EPointyArrow:
              return (0, _.jsx)(_.L0X, {
                fill: _ || "white",
                role: "presentation",
                direction: _ || "left",
              });
          }
        }
        function _(_) {
          const {
              bIsActive: _,
              breadcrumbActiveColor: _,
              breadcrumbColor: _,
              breadcrumbStyle: _,
            } = _,
            _ = _ ? _ || "#FFFFFF" : _ || "#606974";
          switch (_) {
            default:
            case _.k_EPillCrumb:
              return (0, _.jsx)(_.IGf, {
                fill: _,
                role: "presentation",
              });
            case _.k_ECircularCrumb:
              return (0, _.jsx)(_.az8, {
                fill: _,
                role: "presentation",
              });
            case _.k_ESquareCrumb:
              return (0, _.jsx)(_.koA, {
                fill: _,
                role: "presentation",
              });
          }
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
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          enabled: !0,
        });
        function _(_) {
          const { enabled: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                enabled: _,
              }),
              [_],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              holdGamepadFocus: _ = !1,
              onRender: _,
              style: _,
              mode: _ = "JustLoad",
              children: _,
              ..._
            } = _,
            _ = _.useContext(_),
            [_, _] = _.useState(() => ({
              bRenderChildren: !_.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            _ = _.useRef(null),
            _ = _ === "LoadAndUnload" && _.enabled,
            _ = _.useCallback(
              (_) => {
                _((_) => {
                  if (_.bRenderChildren === _ || (_.bRenderChildren && !_))
                    return _;
                  let _ = 0,
                    _ = 0;
                  if (_.current) {
                    const _ = _.current.getBoundingClientRect();
                    _ && ((_ = _.width), (_ = _.height));
                  }
                  return (
                    _ && _ && _(),
                    {
                      bRenderChildren: _,
                      nPrevRenderWidth: _,
                      nPrevRenderHeight: _,
                    }
                  );
                });
              },
              [_, _],
            );
          _.useEffect(() => {
            _.enabled || _(!0);
          }, [_.enabled, _]);
          let _ = _;
          if (!_.bRenderChildren) {
            const _ = _.nPrevRenderWidth || _,
              _ = _.nPrevRenderHeight || _;
            (_ !== void 0 || _ !== void 0) &&
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = _ ? "repeated" : "once";
          let _ = (0, _.jsx)(_._, {
            containerRef: _,
            style: _,
            ..._,
            onVisibilityChange: _,
            trigger: _,
            children: _.bRenderChildren && _,
          });
          return (
            _ &&
              (_ = (0, _.jsx)(_._, {
                focusableIfEmpty: !0,
                style: {
                  height: "100%",
                },
                children: _,
              })),
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
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "bTrailerCarouselAutoAdvance",
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 1e4;
        function _(_) {
          const {
              className: _,
              currentItemKey: _,
              autoAdvanceMsec: _,
              fnAdvance: _,
              enabled: _,
              pauseReason: _,
              countdownToken: _ = "#SaleTrailerCarousel_NextGameInSeconds",
            } = _,
            _ = _.useMemo(() => {
              const _ = (0, _._)(_);
              return !_ || _?.toLowerCase() === "true";
            }, []),
            [_, _] = _.useState(_),
            _ = _ !== void 0 ? _ : _,
            [_, _] = _.useState(_),
            _ = _ !== void 0,
            _ = _(_),
            _ = _ && _ && !_ && _ > 0 && _ > 0,
            _ = 30;
          (0, _._)(
            () => {
              const _ = _ - _;
              _ <= 0 ? (_(), _(_)) : _(Math.max(_, 0));
            },
            _,
            [_],
            _,
          );
          const _ = _.useCallback(
            (_) => {
              (0, _._)(_, String(_), 365 * 10), _(_), _(_);
            },
            [_],
          );
          return (
            _.useEffect(() => {
              _(_);
            }, [_, _]),
            (0, _.jsxs)("div", {
              className: _,
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _().AutoAdvanceContent,
                    (!_ || !_) && _().Disabled,
                    _ && _().Paused,
                  ),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().AutoAdvanceLabel,
                      children: !_ || !_ ? (0, _._)(_, Math.ceil(_ / 1e3)) : _,
                    }),
                    (0, _.jsx)("div", {
                      className: _().AutoAdvanceBar,
                      style: {
                        "--auto-advance-ratio": `${100 - (_ / _) * 100}%`,
                      },
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(_().AutoAdvanceCheckboxCtn),
                  children: (0, _.jsx)(_._, {
                    className: _().AutoAdvanceCheckbox,
                    controlled: !0,
                    checked: _,
                    label: (0, _._)("#SaleTrailerCarousel_AutoAdvanceEnabled"),
                    onChange: _,
                  }),
                }),
              ],
            })
          );
        }
        function _(_) {
          switch (_) {
            case _:
              return (0, _._)("#SaleTrailerCarousel_AutoAdvanceVideoPaused");
            case _:
            case _:
              return (0, _._)("#SaleTrailerCarousel_AutoAdvanceHover");
          }
        }
        function _() {
          const [_, _] = _.useState(!1),
            [_, _] = _.useState(!1);
          _.useEffect(() => {
            const _ = () => _(document.hidden);
            return (
              document.addEventListener("visibilitychange", _),
              () => document.removeEventListener("visibilitychange", _)
            );
          }, []);
          const _ = _.useCallback((_) => _(!_.isIntersecting), []),
            _ = _.useMemo(
              () => ({
                threshold: 0.5,
              }),
              [],
            ),
            _ = (0, _._)(_, _);
          return {
            bTabHidden: _,
            bOffscreen: _,
            refIntersection: _,
          };
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            nSlideIndex: _,
            nStartingSlideIndex: _,
            ref: _,
            children: _,
          } = _;
          return _ === void 0
            ? _
            : (0, _.jsx)("div", {
                ref: _ === _ ? _ : void 0,
                children: _,
              });
        }
        function _(_) {
          const {
              padded: _,
              gap: _,
              children: _,
              bLazyRenderChildren: _,
              lazyRenderPlaceholderWidth: _,
              lazyRenderPlaceholderHeight: _,
              startingSlide: _,
            } = _,
            _ = _.useRef(null),
            _ = _.useRef(null),
            _ = (0, _._)();
          _.useLayoutEffect(() => {
            !_.current ||
              !_.current ||
              (_.current.scrollLeft +=
                _.current.getBoundingClientRect().left -
                _.current.getBoundingClientRect().left);
          }, [_]);
          const _ = _.Children.map(_, (_, _) =>
              _
                ? (0, _.jsx)(_._, {
                    rootMargin: "0px 50% 0px 50%",
                    horizontal: !0,
                    placeholderWidth: _ ?? 1,
                    placeholderHeight: 1,
                    holdGamepadFocus: _,
                    children: (0, _.jsx)(_, {
                      nSlideIndex: _,
                      nStartingSlideIndex: _,
                      ref: _,
                      children: _,
                    }),
                  })
                : (0, _.jsx)(_, {
                    nSlideIndex: _,
                    nStartingSlideIndex: _,
                    ref: _,
                    children: _,
                  }),
            ),
            _ = (0, _.jsx)(_._, {
              "flow-children": "row",
              style: {
                gap: _ ? _ + "px" : void 0,
              },
              className: (0, _._)(
                {
                  SaleSectionCarouselPadding: _,
                },
                "ScrollSnapCarousel",
                "SaleSectionCarousel",
                _.ScrollSnapCarousel,
                _.className,
              ),
              ref: _,
              children: _,
            });
          return _
            ? (0, _.jsx)(_._, {
                rootMargin: "50% 0px 50% 0px",
                horizontal: !1,
                placeholderWidth: 1,
                placeholderHeight: _ ?? 1,
                children: _,
              })
            : _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        class _ extends _.Component {
          render() {
            const { showArrows: _, arrowFill: _, arrowStyle: _ } = this.props,
              _ = this.props.visibleSlides,
              _ = this.props.totalSlides,
              _ = this.props.currentSlide;
            if (_ >= _) return null;
            const _ = (100 * _) / _,
              _ = 100 * (1 - Math.min(_ + _, _) / _),
              _ = (50 * _) / _,
              _ = _ + _,
              _ = 100 - _;
            return (0, _.jsxs)("div", {
              className: _.pipScrollerContainer,
              children: [
                _ &&
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _.pipScrollButton,
                      _.left,
                      _.carouselNavButton,
                    ),
                    children: (0, _.jsx)(_._, {
                      arrowFill: _,
                      arrowStyle: _,
                      direction: "left",
                    }),
                  }),
                (0, _.jsxs)("div", {
                  className: _.pipScroller,
                  children: [
                    (0, _.jsx)("div", {
                      className: _.scrollBackground,
                    }),
                    (0, _.jsx)("div", {
                      className: _.scrollForeground,
                      style: {
                        left: _ + "%",
                        right: _ + "%",
                      },
                    }),
                    (0, _.jsx)("div", {
                      className: _.scrollNavDiv,
                      style: {
                        left: "0%",
                        width: _ + "%",
                      },
                      children: (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _.carouselNavButton,
                          _.scrollNavButton,
                        ),
                        style: {
                          color: "red",
                        },
                        children: (0, _.jsx)("div", {}),
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _.scrollNavDiv,
                      style: {
                        right: "0%",
                        width: _ + "%",
                      },
                      children: (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _.carouselNavButton,
                          _.scrollNavButton,
                        ),
                        children: (0, _.jsx)("div", {}),
                      }),
                    }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _.pipScrollButton,
                      _.right,
                      _.carouselNavButton,
                    ),
                    children: (0, _.jsx)(_._, {
                      arrowFill: _,
                      arrowStyle: _,
                      direction: "right",
                    }),
                  }),
              ],
            });
          }
        }
        const _ = (0, _._)(_, (_) => ({
          currentSlide: _.currentSlide,
          totalSlides: _.totalSlides,
          visibleSlides: _.visibleSlides,
        }));
        function _(_) {
          const { bForceSimpleCarousel: _, screenIsWide: _, children: _ } = _,
            _ = (0, _._)();
          return (_ || _) && !_
            ? (0, _.jsx)(_, {
                ..._,
                children: _,
              })
            : (0, _.jsx)(_, {
                ..._,
                children: _,
              });
        }
        function _(_) {
          const _ = (0, _._)(),
            [_, _] = _.useState(!1),
            { bTabHidden: _, bOffscreen: _, refIntersection: _ } = (0, _._)(),
            _ = () => _.Children.count(_.children),
            _ = () => Math.min(_(), _.visibleElements),
            _ = () =>
              _.Children.map(_.children, (_, _) => {
                const _ = _.bLazyRenderChildren
                  ? (0, _.jsx)(_._, {
                      rootMargin: "0px 100% 0px 100%",
                      horizontal: !0,
                      placeholderWidth: _.lazyRenderPlaceholderWidth ?? 1,
                      placeholderHeight: _.lazyRenderPlaceholderHeight ?? 1,
                      holdGamepadFocus: _,
                      children: _,
                    })
                  : _;
                return (0, _.jsx)(
                  _._,
                  {
                    className: _.innerSlide,
                    index: _,
                    role: "listitem",
                    "aria-label": void 0,
                    children: _,
                  },
                  "slide_" + _,
                );
              }),
            _ = _(),
            _ = _();
          if (!_ || !_) return null;
          const _ = _ < _,
            _ = _.hideArrows || !_,
            _ = !_ || _.hidePips,
            _ = !!_.bAutoAdvance && _ && !_;
          let _;
          _ && !(0, _._)() ? (_ = _._) : _ ? (_ = _._) : _ && (_ = _._);
          let _ = 4 / 3,
            _ = !0;
          _.slideAspectRatio && ((_ = _.slideAspectRatio), (_ = !1));
          const _ = `items_in_row_${_.visibleElements}`;
          return (0, _.jsx)(_._, {
            "flow-children": "row",
            className: (0, _._)(_.carouselBody, _.className, _),
            navKey: _.navKey,
            ref: _,
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: (0, _.jsxs)(_._, {
              visibleSlides: _.visibleElements,
              totalSlides: _(),
              naturalSlideWidth: 100 * _,
              naturalSlideHeight: 100,
              step: _.visibleElements,
              infinite: !_.disableEdgeWrap,
              isIntrinsicHeight: _,
              dragEnabled: !1,
              touchEnabled: !1,
              lockOnWindowScroll: !0,
              orientation: "horizontal",
              disableKeyboard: !0,
              currentSlide: _.startingSlide,
              children: [
                (0, _.jsx)(_, {
                  bHideArrows: _,
                  onSlide: _.onSlide,
                  arrowFill: _.arrowFill,
                  arrowStyle: _.arrowStyle,
                  children: _(),
                }),
                !_ &&
                  (_.useTestScrollbar
                    ? (0, _.jsx)(_, {
                        showArrows: _,
                        carouselStore: null,
                      })
                    : (0, _.jsx)("div", {
                        className: _()({
                          [_.breadcrumbContainer]: !0,
                          [_.breadcrumbContainerTemplate]:
                            _.className?.includes("template-carousel"),
                        }),
                        children: (0, _.jsx)(_, {
                          ..._,
                          nPageSize: _,
                          children: _.children,
                        }),
                      })),
                _ &&
                  (0, _.jsx)(_, {
                    pauseReason: _,
                  }),
              ],
            }),
          });
        }
        function _(_) {
          const { nPageSize: _ } = _,
            _ = _.useContext(_._),
            [_, _] = _.useState(_.state.currentSlide);
          return (
            _.useEffect(
              () =>
                _.subscribe(() => {
                  _(_.state.currentSlide);
                }),
              [_],
            ),
            (0, _.jsx)(_.Fragment, {
              children: _.Children.map(_.children, (_, _) => {
                if (_ % _ !== 0) return null;
                const _ = _ >= _ && _ < _ + _;
                return (0, _.jsx)(
                  _._,
                  {
                    slide: _,
                    className: _.pip,
                    children: (0, _.jsx)(_._, {
                      ..._,
                      bIsActive: _,
                    }),
                  },
                  _,
                );
              }),
            })
          );
        }
        function _(_) {
          _.current && (window.clearTimeout(_.current), (_.current = null));
        }
        function _(_) {
          const { pauseReason: _ } = _,
            _ = _.useContext(_._),
            [_, _] = _.useState(_.state.currentSlide),
            [_, _] = _.useState(!0),
            _ = _.useRef(null),
            _ = _.useRef(_.state.currentSlide);
          _.useEffect(() => {
            const _ = () => {
              const _ = _.state.currentSlide;
              _ !== _.current &&
                ((_.current = _),
                _(_),
                _.current === _
                  ? (_.current = null)
                  : _.current === null && _(!1));
            };
            return _.subscribe(_), () => _.unsubscribe(_);
          }, [_]);
          const _ = _.useCallback(() => {
            const {
              currentSlide: _,
              visibleSlides: _,
              totalSlides: _,
            } = _.state;
            let _ = 0;
            _ + _ < _ && (_ = Math.min(_ + _, _ - _)),
              _ !== _ &&
                ((_.current = _),
                _.setStoreState({
                  currentSlide: _,
                }));
          }, [_]);
          return (0, _.jsx)(_._, {
            className: _.autoAdvanceRow,
            enabled: _,
            currentItemKey: _,
            autoAdvanceMsec: _._,
            fnAdvance: _,
            pauseReason: _,
            countdownToken: "#Carousel_AutoAdvanceNextInSeconds",
          });
        }
        function _(_) {
          const {
              bHideArrows: _,
              children: _,
              onSlide: _,
              arrowFill: _,
              arrowStyle: _,
            } = _,
            _ = _.useContext(_._),
            _ = _.useRef(_.state.currentSlide),
            [_, _] = _.useState(null),
            _ = _.useRef(null);
          _.useEffect(() => {
            const _ = () => {
              const _ = _.current,
                _ = _.state.currentSlide;
              _ && _(_), _(_ > _ ? "Right" : _ < _ ? "Left" : null), _(_);
              const _ = 1e3;
              (_.current = window.setTimeout(() => {
                _.current && (_(null), _(_));
              }, _)),
                (_.current = _);
            };
            return (
              _.subscribe(_),
              () => {
                _.unsubscribe(_), _(_);
              }
            );
          }, [_]);
          const _ = !!_ && "CarouselSliding" + _;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.sliderBody, "SliderBody", _),
            children: [
              !_ &&
                (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _.carouselBtnCtn,
                    _.left,
                    _.carouselNavButton,
                    "CarouselBtnLeft",
                  ),
                  "aria-label": (0, _._)("#Carousel_Prev"),
                  children: (0, _.jsx)(_._, {
                    arrowFill: _,
                    arrowStyle: _,
                    direction: "left",
                  }),
                }),
              (0, _.jsx)(_._, {
                className: _._.GetScrollableClassname(),
                classNameTray: _.slideTrayCustomize,
                classNameAnimation: _.DisableSliderMotion,
                role: "list",
                children: (0, _.jsx)(_._, {
                  children: _,
                }),
              }),
              !_ &&
                (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _.carouselBtnCtn,
                    _.right,
                    _.carouselNavButton,
                    "CarouselBtnRight",
                  ),
                  "aria-label": (0, _._)("#Carousel_Next"),
                  children: (0, _.jsx)(_._, {
                    arrowFill: _,
                    arrowStyle: _,
                    direction: "right",
                  }),
                }),
            ],
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          AutoAdvanceContent: "_1ot7iONiZzKf4TAHgPi3qY",
          Paused: "XXYx3DB0gLYbEuuCX_8Q7",
          Disabled: "_13IEBrvx5g_lHE4QFLKYgW",
          AutoAdvanceLabel: "_2jjPGobp_uYqLu7LCVWXx8",
          AutoAdvanceBar: "_3ew7tsjPX6rYyFcWm_Ohz8",
          AutoAdvanceCheckbox: "_1YFnAY801Coag4pbippyH6",
          AutoAdvanceCheckboxCtn: "Fy_-Cbz1CV38fntOKZ5Qo",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          carouselNavButton: "_13rGo4vexAbY9-CP7FsLOg",
          carouselBtnCtn: "_3zfZ9tkIrSDZdSTv8mvZ3-",
          left: "S8IHdovT5T2iEVg_97xve",
          right: "Cq59o5WQ49zTvvFY56QYS",
          carouselBody: "_3a31O8XB_8lD-yov8FB9-9",
          sliderBody: "_2M3SnYGvMvplWUC8yGhowo",
          slideTrayCustomize: "_2VUpHDtxN8lR1LDahY_cI2",
          breadcrumbContainer: "_3HjnEmKg66o82ah74EIvmq",
          autoAdvanceRow: "_3M0zxbf96I8oQlbNsHboy4",
          breadcrumbContainerTemplate: "_3dMffY_iRZXHjZmXN9aLej",
          pip: "_3Byg6Wc4TX36gkUptUIk72",
          pipList: "LY1m24ODS7AFRuzclt0Sl",
          pipScrollerContainer: "_3SyN-YtXsML6ado0q-Gdve",
          pipScrollButton: "qE43Jfzl0qJX_a6XrMgSr",
          scrollNavDiv: "_95I5gwXXMBghRg-4uNQLr",
          scrollNavButton: "_1cpdoEGU0uiIWbGIU_qMbZ",
          pipScroller: "EMd4F6A8qdMk-l6os415A",
          scrollBackground: "WUHeTNYGQDQQg_jQe-78W",
          scrollForeground: "PQzkJfi8IxzjcFEDG-yv-",
          pipContainer: "_3TKX37FakYHikXh3Wtg2BU",
          pipNumber: "_1u4YJiW1cdufpC_wssM8Us",
          innerSlide: "_3Cc2bMRML2lEkSyi2IAZ9G",
          DisableSliderMotion: "_3J8-bW87K3pb8EpRNYq0JG",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ScrollSnapCarousel: "_1nUtBXgWizhgU1jv-8wVC7",
        };
      },
    },
  ]);
})();
