(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [27701],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, ..._) {
          const _ = [],
            _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs");
          let _ = 0,
            _;
          for (; (_ = _.exec(_)); ) {
            (_ += _[0].length), _.push(_[1]);
            const _ = parseInt(_[2]),
              _ = _[3] || "",
              _ = _(_, ..._),
              _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
                ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
                : _;
            _.push(_);
          }
          return _.push(_.substr(_)), _.createElement(_.Fragment, null, ..._);
        }
        function _(_, _ = ["b", "i", "br"]) {
          const _ = _.join("|"),
            _ = [],
            _ = new RegExp(
              `(?<before>.*?)<(?<tagname>${_})>(?<contents>.*?)(?<endtag><\\/\\2>|$)`,
              "gs",
            );
          let _ = 0,
            _;
          for (; (_ = _.exec(_)); ) {
            if (!_.groups) continue;
            if (!_.groups?.endtag) {
              const _ = _.groups.before.length + _.groups.tagname.length + 2;
              (_ += _), (_.lastIndex = _.index + _), _.push(_.groups.before);
              const _ = _[2],
                _ = _.createElement(_);
              _.push(_);
              continue;
            }
            (_ += _[0].length), _.push(_.groups.before);
            const _ = _.groups.tagname,
              _ = _.groups.contents || "";
            let _ = null;
            _ && (_ = _(_, _));
            const _ = _.createElement(_, {}, _);
            _.push(_);
          }
          return _.push(_.slice(_)), _.createElement(_.Fragment, null, ..._);
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = _.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(_) {
            this.UpdateObserver(_);
          }
          UpdateObserver(_) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              _ &&
              (_.rootMargin != this.m_observer.rootMargin ||
                _.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let _ = this.m_refElement.current;
            if (
              (this.m_observer &&
                _ != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && _)
            ) {
              let _ = {
                root: this.FindScrollableAncestor(_),
              };
              this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
                this.props.thresholds && (_.threshold = this.props.thresholds),
                (this.m_observer = (0, _._)(_, this.OnIntersection, _));
            }
            this.m_observer &&
              _ &&
              _ != this.m_elTracked &&
              (this.m_observer.observe(_), (this.m_elTracked = _));
          }
          FindScrollableAncestor(_) {
            return (0, _._)(_, (_) => {
              const _ = this.props.horizontal
                ? window.getComputedStyle(_).overflowX
                : window.getComputedStyle(_).overflowY;
              return !!(
                _ == "scroll" ||
                _ == "auto" ||
                _.classList.contains(_.GetScrollableClassname())
              );
            });
          }
          HandleRef = (_) => {
            (0, _._)(this.m_refElement, _),
              this.props.containerRef && (0, _._)(this.props.containerRef, _);
          };
          OnIntersection = (_) => {
            let _ = !1;
            for (const _ of _)
              if (_.isIntersecting) {
                _ = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != _ &&
              ((this.m_bPreviouslyIntersecting = _),
              this.props.onVisibilityChange && this.props.onVisibilityChange(_),
              _ && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: _,
              rootMargin: _,
              trigger: _,
              horizontal: _,
              containerRef: _,
              ..._
            } = this.props;
            return (0, _.jsx)(_._, {
              ref: this.HandleRef,
              ..._,
              children: this.props.children,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const [_, _] = _.useState(!1),
            _ = _.useCallback((_) => _(_ && !!_), [_]),
            _ = _.useCallback(() => {
              !_ || _.length === 0 || (window.location.href = _);
            }, [_]);
          return {
            bShowSeeMoreHint: _,
            panelProps: {
              onFocusWithin: _,
              onOptionsButton: _,
            },
          };
        }
        function _(_) {
          const { label: _, shown: _ } = _;
          return (0, _.jsxs)("div", {
            className: _()(_.SeeMoreButtonGamepad, _ && _.Focused),
            children: [
              (0, _.jsx)("img", {
                src: `${_._.IMG_URL}ico_gamepad/shared_button_y.svg`,
                alt: "Y",
              }),
              (0, _.jsx)("div", {
                children: _,
              }),
            ],
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_[(_.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (_[(_.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (_[(_.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            _
          ))(_ || {});
        function _(_) {
          const { _: _, active: _, bIsHoverMode: _, eGrowOnActivate: _ } = _,
            { data: _ } = (0, _._)(_),
            _ = _.useRef(0),
            _ = _.useRef(null);
          _.useLayoutEffect(() => {
            _ && _.current && (_.current.currentTime = _.current);
          }, [_]);
          const _ = (_) => {
              _.current = _.currentTarget.currentTime;
            },
            _ = (0, _._)(_ ? _ : void 0);
          if ((_ && _._.IN_MOBILE) || !_ || !_ || !_.visible || !_) return null;
          const _ = _.filter(
            (_) => _.microtrailer && _.microtrailer.length > 0,
          );
          if (_.length === 0)
            return _ &&
              _.related_items?.parent_appid &&
              (_.type == _._._ || _.type == _._._)
              ? (0, _.jsx)(_, {
                  ..._,
                  _: {
                    appid: _.related_items.parent_appid,
                  },
                })
              : null;
          let _;
          switch (_) {
            case 1:
              _ = _().GrowOnHoverImplicit;
              break;
            case 2:
              _ = _().GrowOnHoverMedium;
              break;
          }
          const _ = _[0];
          return (0, _.jsx)("video", {
            className: _()(_().CapsuleMicroTrailer, _),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: _,
            playsInline: !0,
            onTimeUpdate: _,
            children: (0, _.jsx)(_, {
              trailer: _,
            }),
          });
        }
        function _(_) {
          const { trailer: _ } = _;
          return !_ || !_.microtrailer
            ? null
            : (0, _.jsx)(_.Fragment, {
                children: _.microtrailer?.map((_) =>
                  _._.IN_CLIENT && _.type == "video/mp4"
                    ? null
                    : (0, _.jsx)(
                        "source",
                        {
                          src: (0, _._)(_, _.filename || ""),
                          type: _.type,
                        },
                        _.filename,
                      ),
                ),
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = {
          name: "personalcalendarPrefs",
          options: {
            path: "/personalcalendar",
            secure: !0,
            maxAge: 365 * 24 * 60 * 60 * 1e3,
          },
          preferenceControls: {
            isTechnicallyNecessary: !0,
          },
        };
        var _ = ((_) => (
          (_[(_.Show = 0)] = "Show"),
          (_[(_.Only = 1)] = "Only"),
          (_[(_.Hide = 2)] = "Hide"),
          _
        ))(_ || {});
        function _(_) {
          const {
              bShowNewBadge: _,
              bHasFooterActionLegend: _,
              onSeeMore: _,
            } = _,
            _ = (0, _._)(_),
            _ = _ ? JSON.parse(_) : void 0,
            _ = (0, _._)(940),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = new Date().getDay(),
            _ = 10,
            _ = 13 + _,
            _ = 22 - _,
            _ = (0, _._)(0, _, _),
            _ = (0, _._)(_, _, !0, !0).flat(),
            _ = (0, _._)(`${_._.STORE_BASE_URL}personalcalendar`, _, _),
            { bShowSeeMoreHint: _, panelProps: _ } = (0, _._)(_),
            _ = _._.Localize("#PersonalCalendar_Explore"),
            _ = _.useCallback(() => _?.(_), [_, _]);
          if (!_.data)
            return (0, _.jsx)(_._, {
              className: _.PersonalCalendarWidget,
            });
          let _ = _.data.arrAppInfos;
          return (
            _ &&
              ((_ = _.filter((_) => !_.bHideOwned || !_.bIsOwned)),
              (_ = _.filter((_) => !_.bHideEarlyAccess || !_.bIsEarlyAccess)),
              (_ = _.filter((_) => {
                switch (_.eWishlistDisplay) {
                  case 0:
                    return !0;
                  case 1:
                    return _.bIsWishlisted;
                  case 2:
                    return !_.bIsWishlisted;
                  default:
                    return !0;
                }
              }))),
            (0, _.jsxs)(_._, {
              className: _.PersonalCalendarWidget,
              navEntryPreferPosition: _._.PREFERRED_CHILD,
              ..._,
              onOptionsButton: _ ? _ : _.onOptionsButton,
              onOptionsActionDescription: _,
              children: [
                (0, _.jsxs)("div", {
                  className: _.TitleSection,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _.TitleSectionLeft,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _.Title,
                          children: [
                            _ &&
                              (0, _.jsx)("span", {
                                className: _.NewBadge,
                                children: _._.Localize("#NewBadge"),
                              }),
                            _._.Localize("#PersonalCalendar_Title"),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          className: _.Subtitle,
                          children: _._.Localize("#PersonalCalendar_Subtitle"),
                        }),
                      ],
                    }),
                    !_ &&
                      (0, _.jsx)(_, {
                        calendarURL: _,
                        location: "desktop",
                      }),
                    _ &&
                      !_ &&
                      (0, _.jsx)(_._, {
                        label: _,
                        shown: _,
                      }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  visibleElements: 5,
                  hideArrows: !1,
                  disableEdgeWrap: !0,
                  hidePips: _,
                  screenIsWide: _,
                  startingSlide: _,
                  className: _ ? void 0 : "fiveElementEightGap",
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        bInitialFocus: _ === _,
                        nTimestamp: _,
                        nNextTimestamp:
                          _ < _.length - 1 ? _[_ + 1] : _ + 1440 * 60,
                        arrAppInfos: _,
                        nRankThreshold: _?.nResultsToShow ?? 100,
                      },
                      _,
                    ),
                  ),
                }),
                !_ &&
                  (0, _.jsx)(_, {
                    calendarURL: _,
                    location: "mobile",
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { calendarURL: _, location: _ } = _,
            _ = _ == "mobile" ? "see_more_mobile" : "see_more_desktop";
          return (0, _.jsx)("div", {
            className: `see_more_link ${_} home_section_button`,
            children: (0, _.jsx)("a", {
              href: _,
              className: "btn_small btn_medium btnv6_white_transparent",
              children: (0, _.jsx)("span", {
                children: _._.Localize("#PersonalCalendar_Explore"),
              }),
            }),
          });
        }
        function _(_) {
          const {
              nTimestamp: _,
              nNextTimestamp: _,
              bInitialFocus: _,
              arrAppInfos: _,
              nRankThreshold: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(`${_._.STORE_BASE_URL}personalcalendar`, _, _),
            _ = {
              weekday: "short",
            },
            _ = {
              day: "numeric",
              month: "numeric",
            },
            _ = new Date(_ * 1e3),
            _ = new Date(),
            _ =
              _.getDate() === _.getDate() &&
              _.getMonth() === _.getMonth() &&
              _.getFullYear() === _.getFullYear(),
            _ = _ > _,
            _ = _.toLocaleDateString((0, _._)(), _),
            _ = _.toLocaleString((0, _._)(), _),
            _ = _.filter((_) => _.nReleaseDate > _ && _.nReleaseDate < _).sort(
              (_, _) =>
                _.bIsWishlisted && !_.bIsWishlisted
                  ? -1
                  : _.bIsWishlisted && !_.bIsWishlisted
                    ? 1
                    : _.nRank - _.nRank,
            ),
            _ = _ ?? 100,
            _ = _.filter((_) => _.nRank <= _).length - 2,
            _ = _.length == 0,
            [_, _] = _.useState(!1),
            _ = (0, _._)(),
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              if (_ && _ && _.current) {
                const _ = _.current.closest(".carousel__slide"),
                  _ = _.current.closest(".carousel__slider-tray-wrapper");
                _ && _ && (_.scrollLeft = _.offsetLeft);
              }
            }, [_, _]),
            (0, _.jsxs)(_._, {
              className: (0, _._)(
                _.PersonalCalendarWidgetDay,
                _ && _.TodayCtn,
                _ && _.FutureCtn,
                _ && _.EmptyDayCtn,
              ),
              "flow-children": "column",
              children: [
                (0, _.jsxs)("div", {
                  className: _.DayTitle,
                  children: [
                    !_ &&
                      (0, _.jsx)("div", {
                        className: _.DayOfWeek,
                        children: _,
                      }),
                    !_ &&
                      (0, _.jsx)("div", {
                        className: _.Date,
                        children: _,
                      }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _.Today,
                        children: _._.Localize("#Time_Today"),
                      }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  className: _.DayAppContainer,
                  "flow-children": "column",
                  navEntryPreferPosition: _._.MAINTAIN_Y,
                  preferredFocus: _ && !_,
                  ref: _,
                  onFocusWithin: () => _(!0),
                  children: (0, _.jsxs)(_.Fragment, {
                    children: [
                      _.slice(0, 2).map((_) =>
                        (0, _.jsx)(
                          _,
                          {
                            nAppID: _.nAppID,
                          },
                          _.nAppID,
                        ),
                      ),
                      _ &&
                        (0, _.jsx)("div", {
                          className: _.EmptyDay,
                          children: (0, _._)(
                            _._.Localize("#PersonalCalendar_EmptyDay"),
                            (0, _.jsx)("a", {
                              href: _,
                            }),
                          ),
                        }),
                    ],
                  }),
                }),
                !_ &&
                  _ > 0 &&
                  (0, _.jsx)(_._, {
                    href: _,
                    className: _.MoreGames,
                    children: _._.Localize("#PersonalCalendar_More", _),
                  }),
              ],
            })
          );
        }
        function _(_) {
          const _ = (0, _._)({
              appid: _.nAppID,
            }),
            _ = (0, _._)(940),
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            _ = _.useRef(null),
            _ = _.data === null ? void 0 : _.data,
            _ = _ || _,
            _ = (0, _._)(_, _ ? "main_capsule" : "hero_capsule"),
            { data: _ } = (0, _._)(),
            _ = _?.preferences?.disable_microtrailers,
            _ = _ || _;
          return (
            _.useEffect(() => {
              if (
                (_.current &&
                  _.current.setAttribute(
                    "data-ds-appid",
                    _.nAppID.toString() ?? "",
                  ),
                window.GDynamicStore && window._)
              ) {
                const _ = window._(_.current);
                window.GDynamicStore.DecorateDynamicItems(_);
              }
            }, [_.nAppID, _]),
            (0, _.jsx)(_._, {
              feature: "personalcalendar-homepage",
              children: (0, _.jsx)(_._, {
                onGamepadFocus: () => _(!0),
                onGamepadBlur: () => _(!1),
                children: (0, _.jsx)(_._, {
                  _: {
                    appid: _.nAppID,
                  },
                  hoverClassName: _.StoreAppHover,
                  disableScreenshots: !0,
                  children: (0, _.jsx)(_._, {
                    appID: _.nAppID,
                    children: (0, _.jsxs)(_._, {
                      ref: _,
                      className: (0, _._)(_.StoreAppCapsule, _ && _.Hovered),
                      onMouseOver: () => _(!0),
                      onMouseOut: () => _(!1),
                      children: [
                        (0, _.jsx)("img", {
                          className: _.Image,
                          src: _,
                          alt: "",
                        }),
                        _ &&
                          _ &&
                          (0, _.jsx)(_, {
                            _: {
                              appid: _.nAppID,
                            },
                            nIntervalMS: 1e3,
                          }),
                        !_ &&
                          (0, _.jsx)(_._, {
                            _: {
                              appid: _.nAppID,
                            },
                            active: _,
                            bIsHoverMode: !0,
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }
        function _(_) {
          const _ = (0, _._)(_._) ?? [],
            [_, _] = _.useState(0);
          return (
            (0, _._)(() => {
              _.length > 0 && _((_ + 1) % _.length);
            }, _.nIntervalMS),
            !_?.length || _ == -1
              ? null
              : (0, _.jsx)("div", {
                  className: _.ScreenshotCycler,
                  children: _.map((_, _) =>
                    (0, _.jsx)(
                      "img",
                      {
                        className: (0, _._)(_.Screenshot, _ == _ && _.Active),
                        src:
                          _._.BASE_URL_SHARED_CDN +
                          "/store_item_assets/" +
                          _.filename,
                        alt: "",
                      },
                      _.filename,
                    ),
                  ),
                })
          );
        }
        function _(_) {
          return _._.logged_in
            ? (0, _.jsx)(_._, {
                placeholderHeight: 390,
                rootMargin: "100% 0px 100% 0px",
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              })
            : null;
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          static s_PersonalCalendarStore;
          static Get() {
            return (
              _.s_PersonalCalendarStore ||
                ((_.s_PersonalCalendarStore = new _()),
                _.s_PersonalCalendarStore.Init(),
                (window.g_SubscriptionStore = _.s_PersonalCalendarStore)),
              _.s_PersonalCalendarStore
            );
          }
          async GetCalendarRecommendations(_, _, _) {
            const _ = new Date();
            _.setDate(_.getDate() + _), _.setHours(0, 0, 0, 0);
            const _ = new Date();
            _.setDate(_.getDate() - _), _.setHours(0, 0, 0, 0);
            const _ = await _._.fetchQuery(_(_, _, _));
            return (
              (_.arrAppInfos = _.arrAppInfos.filter(
                (_) =>
                  _.nReleaseDate >= _.getTime() / 1e3 &&
                  _.nReleaseDate < _.getTime() / 1e3,
              )),
              _
            );
          }
          Init() {}
        }
        function _(_, _, _) {
          return (0, _._)(_(_, _, _));
        }
        function _(_, _, _) {
          return {
            queryKey: ["personalcalendar", _, _, _],
            queryFn: async () => {
              const _ = {
                  tag: _,
                  days_backward: _,
                  days_forward: _,
                },
                _ = await _().get(`${_._.STORE_BASE_URL}personalcalendardata`, {
                  params: _,
                  timeout: 2e4,
                  withCredentials: !0,
                });
              return {
                arrAppInfos: _.data.arrAppInfos,
                strResultMessage: _.data.strResultMessage,
                bUsesWishlistedGames: _.data.bUsesWishlistedGames,
              };
            },
            placeholderData: (_) => _,
          };
        }
        function _(_, _, _, _) {
          const _ = new Date();
          if ((_.setDate(_.getDate() - _), _)) {
            const _ = _.getDay() % 7;
            _.setDate(_.getDate() - _), _.setHours(0, 0, 0, 0);
          } else _.setHours(0, 0, 0, 0);
          const _ = [],
            _ = new Date(_),
            _ = Math.ceil((_ + _) / 7);
          for (let _ = 0; _ < _; _++) {
            _.push([]);
            for (let _ = 0; _ < 7; _++)
              (!_ || (_.getDay() != 0 && _.getDay() != 6)) &&
                _[_].push(Math.floor(_.getTime() / 1e3)),
                _.setDate(_.getDate() + 1),
                _.setHours(0, 0, 0, 0);
          }
          return _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          if (!(!_?.asset_url_format || typeof _[_] != "string"))
            return (
              _._.BASE_URL_SHARED_CDN +
              "/store_item_assets/" +
              _.asset_url_format.replace("${FILENAME}", _[_])
            );
        }
      },
      chunkid: (module) => {
        module.exports = {
          SeeMoreButtonGamepad: "_3LB60XV--dXt2yYQ6dF5aT",
          Focused: "_3NISN-t8MP65UYQ4p5bNgh",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          PersonalCalendarWidget: "_326_uhqq2I-hJwNRSqIZK4",
          TitleSection: "_2su8lGbBoTlZdVmMWOxDR3",
          TitleSectionLeft: "_10kzxYP01BOeSD8R135uWX",
          Title: "_3RqS6vEZhqX3_4AIeJFajW",
          Subtitle: "_1qbTrTsvR9qbMi-Navsk-D",
          PersonalCalendarWidgetDay: "tqaXEuWN2wV5_8lmSkMng",
          TodayCtn: "_8UPO4fZBxxerbhcRBpAcc",
          FutureCtn: "_1beaDtCHZ3Kn9oAHWEKXMe",
          DayTitle: "VSMflzbqITft0dYgbLNq1",
          DayOfWeek: "_3cnfRW-1ajM2MW96f4sTXj",
          Date: "_1pMe55FBPBDyaWssCZrawa",
          Today: "_1iXgQQI5ZT9D1DgDCwVW_T",
          DayAppContainer: "_2nBfmktG8nbBOFnhjq6OS5",
          EmptyDay: "_1Vtz51wGyJHD9wpoDFNZ8M",
          MoreGames: "_1wt5Ne6MrJfPVdFz5fGlop",
          StoreAppHover: "_3JFqZ4-_gZl_CQKdNJFdg2",
          StoreAppCapsule: "_2A83UfRXWSLbHFYfDcch9W",
          Hovered: "_2z7ihwH3mo730-p6kXROXX",
          Image: "_3GS5DCQb2y5KKnOB8rHEw5",
          "microtrailer-fade-in": "_3qUTo-Eq8k8fA3-Ajqh5Dy",
          NewBadge: "lX3GvxrkYaEqKJRpIhPsk",
          ScreenshotCycler: "_1lFAPltm4lZIZGtvNVBvpt",
          Screenshot: "_1MSXc0v0S-mTDz8I9uJTni",
          Active: "_3t54Nkge_M_VTM00eQZGbG",
        };
      },
    },
  ]);
})();
