(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [44419],
    {
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
            BuildDiscountsAndEventsPages: () => _,
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
          _ = __webpack_require__("chunkid");
        const _ = 2e4,
          _ = 300 * 1e3;
        function _(_, _, _, _ = {}) {
          return (0, _._)(_(_, _, _, _));
        }
        function _(_, _, _, _ = {}) {
          let _ = `${_._.STORE_BASE_URL}default/discounts_and_events_data/`;
          return (
            _ && (_ += `?t=${encodeURIComponent(_)}`),
            {
              queryKey: ["discountsandevents", _ ?? null],
              initialData: _,
              initialDataUpdatedAt: _,
              queryFn: async () => {
                const _ = await fetch(_, {
                  credentials: "include",
                  signal: AbortSignal.timeout(_),
                });
                if (!_._)
                  throw new Error(
                    `discounts_and_events_data failed: ${_.status}`,
                  );
                const _ = await _.json();
                return {
                  items: Array.isArray(_.items) ? _.items : [],
                };
              },
              staleTime: _,
              ..._,
            }
          );
        }
        const _ = parseInt(_.strColumnsPerPage),
          _ = 4,
          _ = 2,
          _ = 2,
          _ = parseInt(_.strWideScreenMinWidth),
          _ = parseInt(_.strPlaceholderHeight),
          _ = parseInt(_.strScrollColumnGap),
          _ = "DiscountsAndEventsReady";
        function _(_) {
          return _.appid ? `app_${_.appid}` : `url_${_.url ?? ""}`;
        }
        function _(_, _, _, _, _) {
          const _ = _.filter((_) => _.style === "full"),
            _ = _.filter(
              (_) => _.style !== "full" && _.banner === "daily_deal",
            ),
            _ = _.filter(
              (_) => _.style !== "full" && _.banner !== "daily_deal",
            ),
            _ = [];
          let _ = 0,
            _ = 0,
            _ = 0;
          for (
            ;
            _.length < _ && (_ < _.length || _ < _.length || _ < _.length);
          ) {
            const _ = [],
              _ = _ < _.length || _ < _.length,
              _ = Math.min(_ ? _ : _, _.length - _);
            for (let _ = 0; _ < _; _++) {
              const _ = _[_++];
              _.push({
                key: `full_${_(_)}`,
                items: [_],
              });
            }
            const _ = (_ - _.length) * 2,
              _ = Math.min(_, _, _.length - _),
              _ = _.slice(_, _ + _);
            _ += _;
            const _ = Math.min(_ - _, _.length - _);
            _.push(..._.slice(_, _ + _)), (_ += _);
            for (let _ = 0; _ < _.length; _ += 2) {
              const _ = _.slice(_, _ + 2);
              _.push({
                key: `half_${_(_[0])}`,
                items: _,
              });
            }
            _.push(_);
          }
          return _;
        }
        function _(_) {
          switch (_.banner) {
            case "weekend_deal":
              return _._.Localize("#DiscountsAndEvents_Banner_WeekendDeal");
            case "midweek_deal":
              return _._.Localize("#DiscountsAndEvents_Banner_MidweekDeal");
            case "daily_deal":
              return _._.Localize("#DiscountsAndEvents_Banner_DailyDeal");
            case "largest_discount":
              return _._.Localize("#DiscountsAndEvents_Banner_LargestDiscount");
            case "custom":
              return _.title || void 0;
            default:
              return;
          }
        }
        function _(_) {
          return _.style === "full"
            ? "spotlight"
            : _.banner === "daily_deal"
              ? "daily-deal"
              : "spotlight-specials";
        }
        function _(_) {
          const { initialData: _, initialDataUpdatedAt: _, previewTime: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(),
            _ = _ && !_,
            _ = _(_, _, _),
            _ = (0, _._)(`${_._.STORE_BASE_URL}specials`),
            _ = _._.Localize("#DiscountsAndEvents_SeeMore"),
            { bShowSeeMoreHint: _, panelProps: _ } = (0, _._)(_),
            [_, _] = (0, _._)(),
            { rgPages: _, rgColumns: _ } = _.useMemo(() => {
              let _ = _.data?.items ?? [];
              _ ||
                (_ = _.filter(
                  (_) =>
                    !_.appid ||
                    _.sale_page ||
                    (!_.BIsGameOwned(_.appid) && !_.BIsGameIgnored(_.appid)),
                ));
              const _ = _(_, _, _, _, _);
              return {
                rgPages: _,
                rgColumns: _.flat(),
              };
            }, [_.data, _, _]);
          return !_.data && _.isError
            ? (0, _.jsx)(_, {})
            : _.data
              ? _.length
                ? (0, _.jsxs)(_._, {
                    className: (0, _._)(_.DiscountsAndEvents, _),
                    navEntryPreferPosition: _._.PREFERRED_CHILD,
                    ..._,
                    onOptionsActionDescription: _,
                    children: [
                      (0, _.jsxs)(_, {
                        children: [
                          !_ &&
                            (0, _.jsx)(_, {
                              url: _,
                              location: "desktop",
                            }),
                          _ &&
                            (0, _.jsx)(_._, {
                              label: _,
                              shown: _,
                            }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        visibleElements: 1,
                        disableEdgeWrap: !1,
                        hideArrows: !1,
                        hidePips: _,
                        screenIsWide: _,
                        bForceSimpleCarousel: _,
                        gap: _,
                        className: (0, _._)(_.Carousel, !_ && _.Scrolling),
                        children: _
                          ? _.map((_, _) =>
                              (0, _.jsx)(
                                _._,
                                {
                                  className: _.Page,
                                  "flow-children": "row",
                                  role: "list",
                                  "aria-labelledby":
                                    "discounts_and_events_title",
                                  children: _.map((_) =>
                                    (0, _.jsx)(
                                      _,
                                      {
                                        column: _,
                                        depth: _ + 1,
                                      },
                                      _.key,
                                    ),
                                  ),
                                },
                                _[0].key,
                              ),
                            )
                          : _.map((_, _) =>
                              (0, _.jsx)(
                                _,
                                {
                                  column: _,
                                  depth: Math.floor(_ / _) + 1,
                                },
                                _.key,
                              ),
                            ),
                      }),
                      !_ &&
                        (0, _.jsx)(_, {
                          url: _,
                          location: "mobile",
                        }),
                    ],
                  })
                : null
              : (0, _.jsx)("div", {
                  className: (0, _._)(_.DiscountsAndEvents, _.Placeholder, _),
                });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.DiscountsAndEvents, _),
            children: [
              (0, _.jsx)(_, {}),
              (0, _.jsx)("div", {
                className: _.LoadError,
                children: _._.Localize("#DiscountsAndEvents_LoadError"),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _.Header,
            children: [
              (0, _.jsx)("div", {
                className: _.Title,
                _: "discounts_and_events_title",
                role: "heading",
                "aria-level": 2,
                children: _._.Localize("#DiscountsAndEvents_Title"),
              }),
              _.children,
            ],
          });
        }
        function _(_) {
          const { url: _, location: _ } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _.SeeMore,
              _ == "mobile" ? _.Mobile : _.Desktop,
            ),
            children: (0, _.jsx)("a", {
              href: _,
              className: _.SeeMoreButton,
              children: _._.Localize("#DiscountsAndEvents_SeeMore"),
            }),
          });
        }
        function _(_) {
          const { column: _, depth: _ } = _,
            _ = _.items[0]?.style === "full";
          return (0, _.jsx)(_._, {
            className: (0, _._)(_.Column, _ && _.FullColumn),
            "flow-children": "column",
            navEntryPreferPosition: _._.MAINTAIN_Y,
            children: _.items.map((_) =>
              (0, _.jsx)(
                _,
                {
                  item: _,
                  depth: _,
                },
                _(_),
              ),
            ),
          });
        }
        function _(_) {
          const { item: _, depth: _ } = _,
            _ = _.style === "full",
            _ = _.useMemo(
              () =>
                _.appid
                  ? {
                      appid: _.appid,
                    }
                  : void 0,
              [_.appid],
            ),
            _ = !!_.url,
            _ = _.alt !== void 0,
            _ = !!_.image,
            _ = !!_.price || !!_.is_free || !!_.discount_text,
            _ = !_ || !_ || !_,
            _ = !_,
            _ = !_,
            { data: _ } = (0, _._)(_ ? _ : void 0),
            { data: _ } = (0, _._)(_ ? _ : void 0),
            { data: _ } = (0, _._)(_ ? _ : void 0),
            { data: _ } = (0, _._)(),
            _ = _?.preferences?.disable_microtrailers,
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            _ = !!_ && !_ && !_.sale_page && !_,
            _ = _ && (_ || _),
            _ = _(_),
            _ = (0, _._)(_.url, _, _),
            _ = _ ?? void 0;
          let _ = _.image;
          _ ||
            (_ = _
              ? ((0, _._)(_, "hero_capsule") ?? (0, _._)(_, "header"))
              : (0, _._)(_, "header"));
          const _ = _(_),
            _ = _.alt ?? _?.name ?? "";
          if (_ && ((!_ && _ === null) || (!_ && _ === null))) return null;
          const _ = (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)("div", {
                className: _.ImageCtn,
                children: [
                  _ &&
                    (0, _.jsx)("img", {
                      className: _.Image,
                      src: _,
                      alt: _,
                    }),
                  _ &&
                    (0, _.jsx)(_._, {
                      _: _,
                      active: _,
                      bIsHoverMode: !0,
                    }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.Banner,
                      children: _,
                    }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.PriceRow,
                children: (0, _.jsx)(_, {
                  item: _,
                  storeItem: _,
                  purchaseOption: _,
                }),
              }),
            ],
          });
          let _;
          if (_) {
            const _ = (0, _.jsx)(_._, {
              href: _,
              className: _.Link,
              children: _,
            });
            _ = _
              ? (0, _.jsx)(_._, {
                  appID: _.appid,
                  feature: _,
                  depth: _,
                  children: _,
                })
              : _;
          } else
            _ = (0, _.jsx)(_._, {
              storeItem: _,
              feature: _,
              depth: _,
              className: _.Link,
              children: _,
            });
          const _ = (0, _.jsx)(_._, {
            className: (0, _._)(
              _.Capsule,
              _ ? _.Full : _.Half,
              _.banner === "daily_deal" && _.DailyDeal,
              _ && _.Hovered,
            ),
            onGamepadFocus: () => _(!0),
            onGamepadBlur: () => _(!1),
            children: _
              ? (0, _.jsx)(_._, {
                  _: _,
                  hoverClassName: _.HoverSource,
                  fnHoverState: _,
                  disableScreenshots: !0,
                  children: _,
                })
              : (0, _.jsx)("div", {
                  className: _.HoverSource,
                  children: _,
                }),
          });
          return _
            ? (0, _.jsx)(_._, {
                itemid: _,
                children: _,
              })
            : _;
        }
        function _(_) {
          const { item: _, storeItem: _, purchaseOption: _ } = _;
          if (_.discount_text)
            return (0, _.jsx)("div", {
              className: _.DiscountText,
              children: _.discount_text,
            });
          const _ = _.price ?? _;
          return _
            ? (0, _.jsx)(_._, {
                purchaseOption: _,
                size: "inline",
                legacyStyle: !0,
              })
            : _.is_free || _?.is_free
              ? (0, _.jsx)("div", {
                  className: _.FreePrice,
                  children: _._.Localize("#Price_Free"),
                })
              : null;
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            placeholderHeight: _,
            rootMargin: "100% 0px 100% 0px",
            children: (0, _.jsx)(_, {
              ..._,
            }),
          });
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
          strColumnsPerPage: "3",
          strWideScreenMinWidth: "911px",
          strPlaceholderHeight: "700px",
          strScrollColumnGap: "12px",
          DiscountsAndEvents: "lFDjxBzZuxTU3aIPVDTK5",
          Placeholder: "_1bvBq34Qcinx24SzYe-cEH",
          Header: "_3iF8zfmD6ZVhOc4gCHV7eD",
          Title: "PMgHw7SIUZWM8LLZTz-9k",
          SeeMore: "_2X_maIcXL1e31--7CCCsRO",
          Desktop: "_2lv_iQqi0RKAjaIjB0AWtT",
          Mobile: "hVyZPMMVUPDYy7m3l_xqD",
          SeeMoreButton: "_2f_EIAuOVG5ZIzYb1sXJlw",
          LoadError: "_3G4EMTjmvFRdxddZE0RnU_",
          Carousel: "h3XQjMcbeK9lnR6q53EsI",
          Scrolling: "WY4yR7C4Ba-5pFJSNEdUk",
          Column: "_14LO-skSyf__YkJybhT_cx",
          Page: "_3gVAXLzTzt5xCjFA1_c9rn",
          FullColumn: "G3-gajXyBqVPe_dLxcra1",
          Capsule: "_1gsW0WuP7ZclL1_ScZlsvo",
          Full: "_1rLVMySkVo7KY7BspVQpxm",
          ImageCtn: "euMu4YQ01S0SrXGZD3sSh",
          PriceRow: "_1-29ksrfQaORRCqN2AVf06",
          Half: "_2Krn_hSFPsQV65KD-NO15-",
          DailyDeal: "_2j75F6fqx57q6RLx94e7KU",
          Banner: "znNVIhFP6KdJlUS2p2B7q",
          Hovered: "_32cspHTgNb5rYPZCHPVTXR",
          Image: "_25rFony2doWngaEeNrbITF",
          HoverSource: "_229f53fK_tl7R6wqc-g2bq",
          Link: "_2V8zu-797jsZm1qtHNFXhS",
          DiscountText: "_2wlqkq-0fkggDE-Kll8Rwd",
          FreePrice: "_3KFNh7n6I49ARX6I0oXdel",
        };
      },
    },
  ]);
})();
