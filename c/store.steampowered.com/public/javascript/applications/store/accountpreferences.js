(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [22634],
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
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = _._.box(void 0);
        function _() {
          return _.get();
        }
        function _(_) {
          (0, _._)(() => _.set(_));
        }
        function _() {
          const _ = _.get();
          return _ || Math.floor(Date.now() / 1e3);
        }
        function _() {
          const _ = _.get();
          return _ ? new Date(_ * 1e3) : new Date();
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _() {
          const [_, _] = _.useState(void 0),
            _ = _.useCallback(() => _(void 0), []),
            _ = (0, _.jsx)(_._, {
              active: _ !== void 0,
              children: (0, _.jsx)(_, {
                closeModal: _,
                rgImageURL: _,
              }),
            });
          return [_, _];
        }
        function _(_) {
          const { closeModal: _, rgImageURL: _ } = _,
            [_, _] = _.useState(0),
            _ = _?.length ?? 0,
            _ = _.useCallback(() => {
              _ == 0 ? _(_ - 1) : _(_ - 1);
            }, [_, _]),
            _ = _.useCallback(() => {
              _ && _ + 1 >= _ ? _(0) : _(_ + 1);
            }, [_, _, _]);
          return (0, _.jsxs)(_._, {
            title: (0, _._)("#SaleTech_Screenshot_Viewer"),
            bAllowFullSize: !0,
            bOKDisabled: !0,
            closeModal: _,
            bHideCloseIcon: !0,
            modalClassName: _().PopupScreenshotModal,
            children: [
              (0, _.jsx)(_, {
                index: _,
                numElements: _?.length || 0,
                fnForward: _,
                fnBackwards: _,
                fnClose: _,
                bCircular: !0,
              }),
              (0, _.jsx)("div", {
                className: _().PopupScreenshotContainer,
                children: (0, _.jsx)("img", {
                  className: _().PopupScreenshot,
                  src: _?.[_],
                  alt: "",
                }),
              }),
            ],
          });
        }
        function _(_) {
          const {
            index: _,
            numElements: _,
            fnForward: _,
            fnBackwards: _,
            fnClose: _,
            bCircular: _,
          } = _;
          (0, _._)("ArrowLeft", () => _?.(), !0, !0),
            (0, _._)("Left", () => _?.(), !0, !0),
            (0, _._)("ArrowRight", () => _?.(), !0, !0),
            (0, _._)("Right", () => _?.(), !0, !0),
            (0, _._)("Escape", () => _ && _(), !0, !0),
            (0, _._)("Esc", () => _ && _(), !0, !0);
          let _ = _ > 1;
          return (0, _.jsxs)("div", {
            className: _().ButtonCtn,
            children: [
              _ &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("button", {
                      type: "button",
                      className: (0, _._)(
                        _().ButtonIcon,
                        _ === 0 && !_ ? _().Disabled : null,
                      ),
                      onClick: _,
                      "aria-label": (0, _._)("#Carousel_Prev"),
                      children: (0, _.jsx)(_.V5W, {
                        angle: 270,
                      }),
                    }),
                    (0, _.jsx)("button", {
                      type: "button",
                      className: (0, _._)(
                        _().ButtonIcon,
                        _ === _ - 1 && !_ ? _().Disabled : null,
                      ),
                      onClick: _,
                      "aria-label": (0, _._)("#Carousel_Next"),
                      children: (0, _.jsx)(_.V5W, {
                        angle: 90,
                      }),
                    }),
                  ],
                }),
              (0, _.jsx)("button", {
                type: "button",
                className: _().ButtonIcon,
                onClick: _,
                "aria-label": (0, _._)("#Button_Close"),
                children: (0, _.jsx)(_._, {}),
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          _ =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          _ =
            __webpack_require__._ +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          switch (_) {
            case "X-Small":
            case "Small":
              return _;
            case "Medium":
            case "MediumLarge":
              return _;
            case "Large":
            case "X-Large":
            case "FillArea":
              return _;
            default:
              return (0, _._)(_, `Unhandled size ${_}`), _;
          }
        }
        const _ = _.memo(function (_) {
            const {
                strAvatarURL: _,
                size: _ = "Medium",
                className: _,
                statusStyle: _,
                statusPosition: _,
                children: _,
                ..._
              } = _,
              _ = _.useMemo(() => {
                const _ = [];
                return _ && _.push(_), _.push(_(_)), _;
              }, [_, _]);
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _().avatarHolder,
                "avatarHolder",
                "no-drag",
                _,
                _,
              ),
              ..._,
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(_().avatarStatus, "avatarStatus", _),
                  style: _,
                }),
                (0, _.jsx)(_._, {
                  className: (0, _._)(_().avatar, "avatar"),
                  rgSources: _,
                  draggable: !1,
                }),
                _,
              ],
            });
          }),
          _ = _.memo(function (_) {
            const {
              strAvatarURL: _,
              size: _ = "Medium",
              className: _,
              statusStyle: _,
              statusPosition: _,
              children: _,
              ..._
            } = _;
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _().avatarHolder,
                "avatarHolder",
                "no-drag",
                _,
                _,
              ),
              ..._,
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(_().avatarStatus, "avatarStatus", _),
                  style: _,
                }),
                (0, _.jsx)("img", {
                  className: (0, _._)(_().avatar, "avatar"),
                  src: _,
                  draggable: !1,
                }),
                _,
              ],
            });
          });
        let _ = class extends _.Component {
          render() {
            const {
              persona: _,
              size: _ = "Medium",
              animatedAvatar: _,
              className: _,
              strBackupAvatarURL: _,
              ..._
            } = this.props;
            let _ = "";
            return (
              _ && _.image_small && _.image_small.length != 0
                ? (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _.image_small)
                : _
                  ? ((_ = _.avatar_url_medium),
                    _ == "Small" || _ == "X-Small"
                      ? (_ = _.avatar_url)
                      : (_ == "Large" || _ == "X-Large" || _ == "FillArea") &&
                        (_ = _.avatar_url_full))
                  : _ && (_ = _),
              (0, _.jsx)(_, {
                strAvatarURL: _,
                size: _,
                className: (0, _._)((0, _._)(_), _),
                ..._,
              })
            );
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const {
            profileItem: _,
            className: _,
            bDisableAnimation: _,
            ..._
          } = _;
          if (!_ || !_.image_small || _.image_small.length == 0) return null;
          let _ = _ ? _.image_large : _.image_small;
          return (
            _ || (_ = _.image_small),
            _.startsWith("https://") ||
              (_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/" + _),
            (0, _.jsx)("div", {
              className: (0, _._)(_().avatarFrame, _, "avatarFrame"),
              ..._,
              children: (0, _.jsx)("img", {
                className: _().avatarFrameImg,
                src: _,
              }),
            })
          );
        });
        let _ = class extends _.Component {
          m_timer;
          constructor(_) {
            super(_),
              (this.state = {
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let _ = 0;
            switch (this.props.loopDuration) {
              case "Short":
                _ = 2500;
                break;
              case "Medium":
                _ = 5e3;
                break;
              case "Long":
                _ = 1e4;
                break;
            }
            _ != 0 &&
              (this.setState({
                bAnimate: this.props.loopDuration != "None",
              }),
              (this.m_timer = window.setTimeout(
                () =>
                  this.setState({
                    bAnimate: !1,
                  }),
                _,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(_) {
            this.props.loopDuration != _.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({
                    bAnimate: !1,
                  }),
                  this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : (this.setState({
                      bAnimate: !0,
                    }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != _.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({
                      bAnimate: !0,
                    }),
                    this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: _,
              animatedAvatar: _,
              avatarFrame: _,
              children: _,
              style: _,
              bLimitProfileFrameAnimationTime: _,
              bParentHovered: _,
              ..._
            } = this.props;
            _.onClick &&
              (_ = {
                ..._,
                cursor: "pointer",
              });
            const _ = this.state.bAnimate ? (_ ?? void 0) : void 0;
            return (0, _.jsx)("div", {
              onMouseEnter: () =>
                this.setState({
                  bAnimate: this.props.loopDuration != "None",
                }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, _.jsxs)(_, {
                animatedAvatar: _,
                ..._,
                children: [
                  _,
                  (0, _.jsx)(_, {
                    profileItem: _ ?? null,
                    bDisableAnimation: _ && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        _ = _([_._], _);
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
        const _ = "PlaytestInvites";
        function _() {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: [_],
            queryFn: async () => {
              const _ = _._.Init(_._),
                _ = await _._.GetInvites(_, _);
              if (_.GetEResult() != _._)
                throw new Error(
                  `Error from usePlaytestInvite: ${_.GetEResult()} ${_.GetErrorMessage()}`,
                );
              return _.Body()?.toObject().invites ?? [];
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return (0, _._)({
            mutationFn: async (_) => {
              const _ = _._.Init(_._);
              _.Body().add_invite_ids(_),
                _.Body().set_status(_.bAccept ? _._._ : _._._);
              const _ = await _._.UpdateInvites(_, _);
              if (_.GetEResult() != _._)
                throw {
                  result: _.GetEResult(),
                  message: `Error from UpdatePlaytestInvite: ${_.GetErrorMessage()} ( ${_.GetEResult()} )`,
                };
            },
            onSuccess: (_, _) => {
              _.setQueryData([_], (_) =>
                _.map((_) =>
                  _.invite_id === _
                    ? {
                        ..._,
                        status: _.bAccept ? _._._ : _._._,
                      }
                    : _,
                ),
              );
            },
            onError: () => {
              _.invalidateQueries({
                queryKey: [_],
              });
            },
          });
        }
        function _(_) {
          return ["PlaytestUserStatus", _];
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: _(_),
            queryFn: async () => {
              if (_._.logged_in) {
                const _ = _._.Init(_._);
                _ && _.Body().set_appid(_);
                const _ = await _._.GetUserStatus(_, _);
                if (_.GetEResult() != _._)
                  throw new Error(
                    `Error from usePlaytestUserStatus: ${_.GetEResult()} ${_.GetErrorMessage()}`,
                  );
                return _.Body()?.toObject().results ?? [];
              } else return [];
            },
            staleTime: 600 * 1e3,
          });
        }
        function _() {
          const _ = (0, _._)();
          return _.useCallback(
            (_, _) => {
              _.setQueryData(_(_), _);
            },
            [_],
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !0) {
          const _ = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = _ || CStoreItemCache.Get().BHasStoreItem(_, _, _) ? _ : null,
            [_, _] = _(_, _, _),
            [_, _] = useState(null),
            [_, _] = _(_, _, _);
          useEffect(() => {
            _?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(_.GetParentAppID());
          }, [_]);
          let _ = _?.GetShortDescription()
            ? StripBBCodeTags(_.GetShortDescription())
            : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ = _?.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "");
          const _ = _ == _ && (!_ || _ == _);
          return [_, _];
        }
        const _ = 1,
          _ = 2,
          _ = 3;
        function _(_, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)();
          _.current = _;
          const [_, _] = (0, _.useState)(void 0),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          if (
            ((0, _.useEffect)(() => {
              const _ = {
                include_assets: _,
                include_release: _,
                include_platforms: _,
                include_all_purchase_options: _,
                include_screenshots: _,
                include_trailers: _,
                include_ratings: _,
                include_tag_count: _,
                include_reviews: _,
                include_basic_info: _,
                include_supported_languages: _,
                include_full_description: _,
                include_included_items: _,
                include_assets_without_overrides: _,
                apply_user_filters: _,
                include_links: _,
                include_extra_details: _,
                include_optin_registration_tags: _,
              };
              let _ = null;
              return (
                !_ ||
                  _ < 0 ||
                  _._.Get().BHasStoreItem(_, _, _) ||
                  (_ !== void 0 && _ && _ == _.current) ||
                  (_ !== _.current && (_(void 0), (_.current = _)),
                  (_ = _().CancelToken.source()),
                  _._.Get()
                    .QueueStoreItemRequest(_, _, _)
                    .then((_) => {
                      !_?.token.reason && _.current === _ && _(_ == _._), _();
                    })),
                () => _?.cancel("useStoreItemCache: unmounting")
              );
            }, [
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            !_)
          )
            return [null, _];
          if (_ === !1) return [void 0, _];
          if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, _];
          if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, _];
          const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
          return _ ? [_, _] : [null, _];
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          const [_, _] = _(_, _, _);
          let _;
          _?.GetStoreItemType() == _._._ &&
            !_.GetAssets()?.GetHeaderURL() &&
            _?.GetIncludedAppIDs().length == 1 &&
            (_ = _.GetIncludedAppIDs()[0]);
          const [_, _] = _(_, _);
          return _ && _?.BIsVisible() ? [_, _] : [_, _];
        }
        function _(_, _, _, _) {
          const _ = (0, _._)(),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const _ = {
                  include_assets: _,
                  include_release: _,
                  include_platforms: _,
                  include_all_purchase_options: _,
                  include_screenshots: _,
                  include_trailers: _,
                  include_ratings: _,
                  include_tag_count: _,
                  include_reviews: _,
                  include_basic_info: _,
                  include_supported_languages: _,
                  include_full_description: _,
                  include_included_items: _,
                  include_assets_without_overrides: _,
                  apply_user_filters: _,
                  include_links: _,
                  include_extra_details: _,
                  include_optin_registration_tags: _,
                },
                _ = _.filter(
                  (_) =>
                    !(
                      _._.Get().BHasStoreItem(_, _, _) ||
                      _._.Get().BIsStoreItemMissing(_, _)
                    ),
                );
              if (_.length == 0) return;
              const _ = _().CancelToken.source(),
                _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
              return (
                Promise.all(_).then(() => {
                  _.token.reason || _();
                }),
                () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            ]),
            _
              ? _.every(
                  (_) =>
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _),
                )
                ? _.every((_) =>
                    _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
                  )
                  ? _
                  : _
                : _
              : _
          );
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Package, _, _);
        }
        function _() {
          _.useEffect(
            () => (
              _._.Get().SetReturnUnavailableItems(!0),
              () => _._.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              className: _,
              srcs: _,
              lazyLoad: _,
              width: _,
              height: _,
              alt: _,
              crossOrigin: _,
            } = _,
            [_, _] = _.useState(_.length),
            [_, _] = _.useState(0);
          _.useEffect(() => {
            _ != _.length && (_(_.length), _(0));
          }, [_, _.length]);
          const _ = _.useCallback(() => {
            _.onImageError && _.onImageError(_.srcs[_]),
              _ + 1 < _.srcs.length && _(_ + 1);
          }, [_, _]);
          return _.length == 0
            ? null
            : (0, _.jsx)("img", {
                className: _,
                src: _[_],
                crossOrigin: _,
                onError: _,
                loading: _ ? "lazy" : void 0,
                width: _,
                height: _,
                alt: _,
              });
        }
        function _(_) {
          const [_, _] = _.useState(!1),
            {
              className: _,
              src: _,
              lazyLoad: _,
              width: _,
              height: _,
              alt: _,
              crossOrigin: _,
            } = _;
          return _
            ? (0, _.jsxs)("div", {
                className: _.ErrorDiv,
                children: [
                  (0, _.jsx)("p", {
                    children: (0, _._)("#Image_ErrorTitle", _),
                  }),
                  (0, _.jsx)("ul", {
                    children: (0, _.jsx)("li", {
                      children: (0, _._)("#Image_Error_msg1"),
                    }),
                  }),
                  (0, _.jsx)("p", {
                    children: (0, _._)("#Image_Error_suggestion"),
                  }),
                ],
              })
            : (0, _.jsx)(_._, {
                className: _,
                src: _,
                onError: () => _(!0),
                crossOrigin: _,
                loading: _ ? "lazy" : void 0,
                width: _,
                height: _,
                alt: _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 1.3,
          _ = 3,
          _ = 256;
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)({
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: 0,
              displayHeight: 0,
            }),
            _ = (0, _.useRef)(null),
            [_, _] = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              _.naturalWidth > _.displayWidth * _ &&
                _.naturalHeight > _.displayHeight * _ &&
                _.naturalWidth > _ &&
                _.naturalWidth / _.naturalHeight < _ &&
                _(!0);
            }, [_]),
            _
              ? (0, _.jsxs)("span", {
                  className: _.PreviewCtn,
                  children: [
                    _,
                    (0, _.jsx)("span", {
                      className: _.SVG,
                      children: (0, _.jsx)(_.YNO, {}),
                    }),
                    (0, _.jsx)("img", {
                      ..._,
                      className: (0, _._)({
                        ...(_.className && {
                          [_.className]: !0,
                        }),
                      }),
                      onClick: (_) => {
                        _.src && _([_.src]);
                      },
                    }),
                  ],
                })
              : (0, _.jsx)("img", {
                  ..._,
                  ref: _,
                  onLoad: (_) => {
                    if (!_.currentTarget.closest("a") && !(0, _._)()) {
                      const {
                        naturalWidth: _,
                        naturalHeight: _,
                        width: _,
                        height: _,
                      } = _.currentTarget;
                      _({
                        naturalWidth: _,
                        naturalHeight: _,
                        displayWidth: _,
                        displayHeight: _,
                      });
                    }
                  },
                })
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              rgSources: _,
              onIncrementalError: _,
              onError: _,
              strAltText: _,
              ref: _,
              ..._
            } = _,
            [_, _] = _.useState(0),
            _ = _.useMemo(() => JSON.stringify(_), [_]),
            [_, _] = _.useState(_);
          _ != _ && (_(_), _(0));
          const _ = _.useMemo(() => {
              let _ = "";
              return (
                _ && _.length > _ && (_ = _[_]),
                _ ||
                  (console.warn(
                    "MultiSourceImage created with no image src",
                    _,
                    _,
                  ),
                  (_ =
                    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=")),
                _
              );
            }, [_, _, _]),
            _ = _.useCallback(
              (_) => {
                _?.(_, _[_], _);
                const _ = _ + 1;
                _ >= _.length && _ && _(_), _ < _.length && _(_);
              },
              [_, _, _, _],
            ),
            _ = _.useRef(null);
          return (
            _.useImperativeHandle(
              _,
              () => ({
                imgRef: _,
                nSourceIndex: _,
                nSourceLength: _.length,
              }),
              [_, _, _],
            ),
            _.useEffect(() => {
              const _ = _.current;
              _?.complete && _.naturalWidth == 0 && (_.src = _.src);
            }, []),
            (0, _.jsx)(
              "img",
              {
                ref: _,
                ..._,
                src: _,
                onError: _,
                alt: _,
              },
              _,
            )
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            AccountPreferencesRoutes: () => _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          m_Preferences = void 0;
          constructor(_) {
            (0, _._)(this),
              (this.m_Preferences = _),
              (!this.m_Preferences.content_customization ||
                Array.isArray(this.m_Preferences.content_customization)) &&
                (this.m_Preferences.content_customization = {}),
              (!this.m_Preferences.third_party_analytics ||
                Array.isArray(this.m_Preferences.third_party_analytics)) &&
                (this.m_Preferences.third_party_analytics = {}),
              (!this.m_Preferences.third_party_content ||
                Array.isArray(this.m_Preferences.third_party_content)) &&
                (this.m_Preferences.third_party_content = {}),
              (!this.m_Preferences.valve_analytics ||
                Array.isArray(this.m_Preferences.valve_analytics)) &&
                (this.m_Preferences.valve_analytics = {}),
              (this.m_Preferences.utm_enabled === void 0 ||
                this.m_Preferences.utm_enabled === null) &&
                (this.m_Preferences.utm_enabled = !0),
              (this.m_Preferences.preference_state == _._._ ||
                this.m_Preferences.preference_state == _._._) &&
                ((this.m_Preferences.valve_analytics.product_impressions_tracking =
                  !0),
                (this.m_Preferences.content_customization.recentapps = !0),
                (this.m_Preferences.third_party_analytics.google_analytics =
                  !0),
                (this.m_Preferences.third_party_content.sketchfab = !0),
                (this.m_Preferences.third_party_content.twitter = !0),
                (this.m_Preferences.third_party_content.vimeo = !0),
                (this.m_Preferences.third_party_content.youtube = !0)),
              this.m_Preferences.version == _._._ &&
                (this.m_Preferences.version = _._._);
          }
          GetVersion() {
            return this.m_Preferences.version;
          }
          GetPreferenceState() {
            return this.m_Preferences.preference_state;
          }
          BIsAllowAll() {
            return (
              this.m_Preferences.preference_state == _._._ ||
              this.m_Preferences.preference_state == _._._
            );
          }
          BIsRejectAll() {
            return this.m_Preferences.preference_state == _._._;
          }
          SetPreferenceState(_) {
            if (this.m_Preferences.preference_state != _) {
              if (
                ((this.m_Preferences.preference_state = _),
                _ == _._._ || _ == _._._)
              ) {
                let _ = _ == _._._;
                (this.m_Preferences.content_customization.recentapps = _),
                  (this.m_Preferences.third_party_analytics.google_analytics =
                    _),
                  (this.m_Preferences.third_party_content.sketchfab = _),
                  (this.m_Preferences.third_party_content.twitter = _),
                  (this.m_Preferences.third_party_content.vimeo = _),
                  (this.m_Preferences.third_party_content.youtube = _),
                  (this.m_Preferences.valve_analytics.product_impressions_tracking =
                    _);
              }
              this.PostCookieSettings();
            }
          }
          GetRecentApps() {
            return this.m_Preferences.content_customization.recentapps;
          }
          ToggleRecentApps() {
            (this.m_Preferences.content_customization.recentapps =
              !this.m_Preferences.content_customization.recentapps),
              this.ProcessToggle();
          }
          GetImpressions() {
            return this.m_Preferences.valve_analytics
              .product_impressions_tracking;
          }
          ToggleImpressions() {
            (this.m_Preferences.valve_analytics.product_impressions_tracking =
              !this.m_Preferences.valve_analytics.product_impressions_tracking),
              this.ProcessToggle();
          }
          GetSketchfab() {
            return this.m_Preferences.third_party_content.sketchfab;
          }
          ToggleSketchfab() {
            (this.m_Preferences.third_party_content.sketchfab =
              !this.m_Preferences.third_party_content.sketchfab),
              this.ProcessToggle();
          }
          GetVimeo() {
            return this.m_Preferences.third_party_content.vimeo;
          }
          ToggleVimeo() {
            (this.m_Preferences.third_party_content.vimeo =
              !this.m_Preferences.third_party_content.vimeo),
              this.ProcessToggle();
          }
          GetYouTube() {
            return this.m_Preferences.third_party_content.youtube;
          }
          ToggleYouTube() {
            (this.m_Preferences.third_party_content.youtube =
              !this.m_Preferences.third_party_content.youtube),
              this.ProcessToggle();
          }
          GetUTMEnabled() {
            return this.m_Preferences.utm_enabled;
          }
          ToggleUTMEnabled() {
            (this.m_Preferences.utm_enabled = !this.m_Preferences.utm_enabled),
              this.PostCookieSettings();
          }
          ProcessToggle() {
            (this.m_Preferences.preference_state = _._._),
              this.PostCookieSettings();
          }
          async PostCookieSettings() {
            const _ = _._.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
              _ = new FormData();
            _.set("sessionid", (0, _._)()),
              _.append("cookiepreferences", JSON.stringify(this.m_Preferences));
            try {
              let _ = await _().post(_, _, {
                withCredentials: !0,
              });
              if (_.status != 200 || _?.data?.success != _._)
                window.ShowAlertDialog(
                  (0, _._)("#CookiePref_Error"),
                  (0, _._)("#CookiePref_ErrorNotSaved"),
                );
              else if (_?.data?.success == _._) {
                const { transfer_urls: _, transfer_params: _ } = _.data;
                _ && _ && this.TransferCookiePreferencesToSites(_, _);
              }
            } catch {
              window.ShowAlertDialog(
                (0, _._)("#CookiePref_Error"),
                (0, _._)("#CookiePref_ErrorNotSaved"),
              );
            }
          }
          TransferCookiePreferencesToSites(_, _) {
            const _ = new FormData();
            _.set("transfer_params", _);
            for (const _ of _) _().post(_, _);
          }
        }
        _([_._], _.prototype, "m_Preferences", 2);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          m_Preferences = void 0;
          constructor(_) {
            (0, _._)(this), (this.m_Preferences = _);
          }
          SetDeckFeedback(_) {
            (this.m_Preferences.provide_deck_feedback = _),
              this.PostStorePreferences();
          }
          SetGameFrameRateReporting(_) {
            (this.m_Preferences.game_frame_rate_reporting = _),
              this.PostStorePreferences();
          }
          GetProvideDeckFeedbackEnabled() {
            return this.m_Preferences.provide_deck_feedback == _;
          }
          GetGameFrameRateReportingEnabled() {
            return this.m_Preferences.game_frame_rate_reporting == _;
          }
          ToggleProvideDeckFeeback() {
            (this.m_Preferences.provide_deck_feedback =
              this.m_Preferences.provide_deck_feedback == _ ? _ : _),
              this.PostStorePreferences();
          }
          ToggleGameFrameRateReporting() {
            (this.m_Preferences.game_frame_rate_reporting =
              this.m_Preferences.game_frame_rate_reporting == _ ? _ : _),
              this.PostStorePreferences();
          }
          async PostStorePreferences() {
            const _ = _._.STORE_BASE_URL + "account/savepreferences",
              _ = new FormData();
            _.set("sessionid", (0, _._)()),
              _.set(
                "provide_deck_feedback",
                this.m_Preferences.provide_deck_feedback.toString(),
              ),
              _.set(
                "game_frame_rate_reporting",
                this.m_Preferences.game_frame_rate_reporting.toString(),
              );
            try {
              let _ = await _().post(_, _, {
                withCredentials: !0,
              });
              _.status != 200 || _?.data?.success != _._
                ? window.ShowAlertDialog(
                    (0, _._)("#DataCollectionPref_Error"),
                    (0, _._)("#DataCollectionPref_ErrorNotSaved"),
                  )
                : _?.data?.success == _._;
            } catch {
              window.ShowAlertDialog(
                (0, _._)("#DataCollectionPref_Error"),
                (0, _._)("#DataCollectionPref_ErrorNotSaved"),
              );
            }
          }
        }
        _([_._], _.prototype, "m_Preferences", 2);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
          m_rgSavedHardware = [];
          static s_AccountSavedHardwareStore;
          constructor() {
            (0, _._)(this);
          }
          static Get() {
            return (
              _.s_AccountSavedHardwareStore ||
                ((_.s_AccountSavedHardwareStore = new _()),
                _.s_AccountSavedHardwareStore.Init()),
              _.s_AccountSavedHardwareStore
            );
          }
          Init() {
            this.m_rgSavedHardware = (0, _._)(
              "saved_hardware",
              "application_config",
            );
          }
          GetSavedHardware() {
            return this.m_rgSavedHardware;
          }
          async PostRequest(_, _) {
            try {
              let _ = await _().post(_, _, {
                withCredentials: !0,
              });
              return _.status != 200 || _?.data?.success != _._
                ? (window.ShowAlertDialog(
                    (0, _._)("#SavedHardware_Error_Title"),
                    (0, _._)("#SavedHardware_Error_Desc"),
                  ),
                  !1)
                : !0;
            } catch {
              return (
                window.ShowAlertDialog(
                  (0, _._)("#SavedHardware_Error_Title"),
                  (0, _._)("#SavedHardware_Error_Desc"),
                ),
                !1
              );
            }
          }
          async RenameHardware(_, _) {
            const _ = _._.STORE_BASE_URL + "account/ajaxhardwarerename",
              _ = new FormData();
            if (
              (_.set("sessionid", (0, _._)()),
              _.set("savedHardwareID", _),
              _.set("strFriendlyName", _),
              await this.PostRequest(_, _))
            )
              for (let _ = 0; _ < this.m_rgSavedHardware.length; ++_)
                this.m_rgSavedHardware[_].hardware_id == _ &&
                  (this.m_rgSavedHardware[_].friendly_name = _);
          }
          async DeleteHardware(_) {
            const _ = _._.STORE_BASE_URL + "account/ajaxhardwaredelete",
              _ = new FormData();
            if (
              (_.set("sessionid", (0, _._)()),
              _.set("savedHardwareID", _),
              await this.PostRequest(_, _))
            ) {
              for (let _ = 0; _ < this.m_rgSavedHardware.length; ++_)
                if (this.m_rgSavedHardware[_].hardware_id == _) {
                  this.m_rgSavedHardware.splice(_, 1);
                  return;
                }
            }
          }
        };
        _([_._], _.prototype, "m_rgSavedHardware", 2);
        let _ = _;
        function _() {
          return _.Get().GetSavedHardware();
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { _: _, closeModal: _ } = _,
            _ = _.useCallback(() => {
              _.Get().DeleteHardware(_.hardware_id), _();
            }, [_, _.hardware_id]);
          return (0, _.jsx)(_._, {
            bDisableBackgroundDismiss: !0,
            strTitle: (0, _._)("#SavedHardware_Delete_Confirm_Title"),
            onCancel: _,
            onOK: _,
            strOKButtonText: (0, _._)("#SavedHardware_Delete"),
            children: (0, _._)(
              "#SavedHardware_Delete_Confirm_Desc",
              _.friendly_name,
            ),
          });
        }
        function _(_) {
          const { _: _, closeModal: _ } = _,
            [_, _] = _.useState(_.friendly_name),
            _ = _.useCallback(() => {
              _.Get().RenameHardware(_.hardware_id, _.trim()), _();
            }, [_, _, _.hardware_id]);
          return (0, _.jsx)(_._, {
            bDisableBackgroundDismiss: !0,
            strTitle: (0, _._)("#SavedHardware_Rename_Confirm_Title"),
            onCancel: _,
            onOK: _,
            bOKDisabled: _.trim().length == 0,
            strOKButtonText: (0, _._)("#SavedHardware_Rename"),
            children: (0, _.jsx)(_._, {
              label: (0, _._)("#SavedHardware_Rename_Confirm_Label"),
              value: _,
              onChange: (_) => {
                _(_.target.value);
              },
              maxLength: 100,
            }),
          });
        }
        const _ = (0, _._)((_) => {
            const { _: _ } = _;
            let _;
            switch (_.system_info.gaming_device_type) {
              case _.LS$:
                _ = (0, _._)("#HardwareVariant_SteamDeck");
                break;
              case _.ppM:
                _ = (0, _._)("#HardwareVariant_LegionGoS");
                break;
              case _.bOm:
                _ = (0, _._)("#HardwareVariant_SteamMachine");
                break;
            }
            return (0, _.jsxs)("div", {
              className: _.SavedHardware,
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsxs)("div", {
                      className: _.FriendlyName,
                      children: [_.friendly_name, " "],
                    }),
                    (0, _.jsxs)("div", {
                      className: _.Details,
                      children: [
                        _ &&
                          (0, _.jsx)("div", {
                            children: _,
                          }),
                        (0, _.jsx)("div", {
                          children: _.system_info._,
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            _.system_info.cpu_name,
                            " - ",
                            (0, _._)(
                              parseInt(_.system_info.system_ram) * 1024 * 1024,
                              0,
                            ),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            _.system_info.adapter_description,
                            " - ",
                            (0, _._)(_.system_info.vram_size * 1024 * 1024, 0),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      className: _.Timestamp,
                      children: (0, _._)(
                        "#SavedHardware_Timestamp",
                        (0, _._)(_.timestamp_created),
                      ),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.SavedHardwareControls,
                  children: [
                    (0, _.jsx)(_._, {
                      className: _.RenameButton,
                      onClick: (_) =>
                        (0, _._)(
                          (0, _.jsx)(_, {
                            _: _,
                          }),
                          (0, _._)(_),
                        ),
                      children: (0, _._)("#SavedHardware_Rename"),
                    }),
                    (0, _.jsx)(_._, {
                      className: _.DeleteButton,
                      onClick: (_) =>
                        (0, _._)(
                          (0, _.jsx)(_, {
                            _: _,
                          }),
                          (0, _._)(_),
                        ),
                      children: (0, _._)("#SavedHardware_Delete"),
                    }),
                  ],
                }),
              ],
            });
          }),
          _ = (0, _._)(() => {
            const _ = _(),
              _ = typeof SteamClient < "u",
              _ = _.useCallback(() => {
                window.location.reload();
              }, []),
              _ = _.useCallback(() => {
                window.SteamClient.BrowserView.RegisterForMessageFromParent(_),
                  SteamClient.BrowserView.PostMessageToParent(
                    "ShowSavedHardwareDialog",
                    "",
                  );
              }, [_]);
            return (0, _.jsxs)("div", {
              className: _.CookieGroup,
              children: [
                (0, _.jsxs)("div", {
                  className: _.CookieSection,
                  children: [
                    (0, _.jsx)("h2", {
                      children: (0, _._)("#SavedHardware_Title"),
                    }),
                    (0, _.jsx)("p", {
                      className: _.SectionDescription,
                      children: (0, _._)("#SavedHardware_Desc"),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _.SavedHardwareList,
                  children: _.map((_) =>
                    (0, _.jsx)(
                      _,
                      {
                        _: _,
                      },
                      _.hardware_id,
                    ),
                  ),
                }),
                (0, _.jsx)("div", {
                  className: _.SavedHardwareControls,
                  children:
                    _ &&
                    (0, _.jsxs)(_._, {
                      className: _.SavedHardwareAddPCButton,
                      onClick: _,
                      children: [(0, _._)("#SavedHardware_AddNew"), " "],
                    }),
                }),
              ],
            });
          });
        let _ = null,
          _ = null;
        function _() {
          if (!_) {
            let _ = (0, _._)("cookiepreferences", "application_config");
            _ = new _(_);
          }
          if (!_) {
            let _ = (0, _._)("storedatapreferences", "application_config");
            _ = new _(_);
          }
          return [_, _];
        }
        const _ = (0, _._)(() => {
            const [_, _] = _(),
              _ = (0, _.useCallback)(() => {
                _.SetPreferenceState(_._._);
              }, [_]),
              _ = (0, _.useCallback)(() => {
                _.SetPreferenceState(_._._);
              }, [_]),
              _ = (0, _._)();
            return (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, _.jsx)("div", {
                    children: (0, _._)("#CookiePref_OptionalCookies_Title"),
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: "account_settings_container",
                  children: [
                    (0, _.jsxs)(_._, {
                      "flow-children": "row",
                      className: _.ButtonGroup,
                      children: [
                        (0, _.jsx)(_._, {
                          className: (0, _._)(
                            _.AllButton,
                            _.BIsRejectAll() ? _.ButtonHighlight : "",
                          ),
                          onClick: _,
                          children: (0, _._)("#CookiePref_RejectAll"),
                        }),
                        (0, _.jsx)(_._, {
                          className: (0, _._)(
                            _.AllButton,
                            _.BIsAllowAll() ? _.ButtonHighlight : "",
                          ),
                          onClick: _,
                          children: (0, _._)("#CookiePref_AcceptAll"),
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      settings: _,
                    }),
                    (0, _.jsx)(_, {
                      settings: _,
                    }),
                    (0, _.jsx)(_, {
                      settings: _,
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, _.jsx)("div", {
                    children: (0, _._)(
                      "#CookiePref_TechnicallyNeccesary_Title",
                    ),
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: "account_settings_container",
                  children: [
                    (0, _.jsx)("p", {
                      children: (0, _._)(
                        "#CookiePref_TechnicallyNeccesary_Desc",
                      ),
                    }),
                    (0, _.jsxs)("div", {
                      className: _.CookieGroup,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)("#CookiePref_SessionID_Title"),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)("#CookiePref_SessionID_Desc"),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)(
                                "#CookiePref_ShoppingCart_Title",
                              ),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)(
                                "#CookiePref_ShoppingCart_Desc",
                              ),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)(
                                "#CookiePref_SteamCountry_Title",
                              ),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)(
                                "#CookiePref_SteamCountry_Desc",
                              ),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)("#CookiePref_Timezone_Title"),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)("#CookiePref_Timezone_Desc"),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)("#CookiePref_BirthTime_Title"),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)("#CookiePref_BirthTime_Desc"),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)("#CookiePref_Login_Title"),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)("#CookiePref_Login_Desc"),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)("#CookiePref_Language_Title"),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)("#CookiePref_Language_Desc"),
                            }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.NecessaryGroup,
                          children: [
                            (0, _.jsx)("span", {
                              className: _.NecessaryTitle,
                              children: (0, _._)(
                                "#CookiePref_CookieSettings_Title",
                              ),
                            }),
                            (0, _.jsx)("span", {
                              className: _.NecessaryDesc,
                              children: (0, _._)(
                                "#CookiePref_CookieSettings_Desc",
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _.CookieSettingsHeader,
                    "account_header_line noicon",
                  ),
                  children: (0, _.jsx)("div", {
                    children: (0, _._)("#PrivacySettings_Marketing_Header"),
                  }),
                }),
                (0, _.jsx)("div", {
                  className: "account_settings_container",
                  children: (0, _.jsx)(_, {
                    settings: _,
                  }),
                }),
                !!_ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _.DataCollectionSettingsHeader,
                          "account_header_line noicon",
                        ),
                        children: (0, _.jsx)("div", {
                          children: (0, _._)("#DataPreferences_Header"),
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: "account_settings_container",
                        children: (0, _.jsx)(_, {
                          settings: _,
                        }),
                      }),
                    ],
                  }),
                null,
              ],
            });
          }),
          _ = (0, _._)((_) => {
            const { settings: _ } = _,
              _ = (0, _.useCallback)(() => {
                _.ToggleRecentApps();
              }, [_]);
            return (0, _.jsx)("div", {
              className: _.CookieGroup,
              children: (0, _.jsxs)("div", {
                className: _.CookieSection,
                children: [
                  (0, _.jsx)("h2", {
                    children: (0, _._)("#CookiePref_Content_Title"),
                  }),
                  (0, _.jsx)("p", {
                    className: _.SectionDescription,
                    children: (0, _._)("#CookiePref_Content_Desc"),
                  }),
                  (0, _.jsx)(_._, {
                    onChange: _,
                    label: (0, _._)("#CookiePref_Content_ToggleTitle"),
                    checked: _.GetRecentApps(),
                    description: (0, _._)("#CookiePref_Content_ToggleDesc"),
                  }),
                ],
              }),
            });
          }),
          _ = (0, _._)((_) => {
            const { settings: _ } = _,
              _ = (0, _.useCallback)(() => {
                _.ToggleImpressions();
              }, [_]);
            return (0, _.jsx)("div", {
              className: _.CookieGroup,
              children: (0, _.jsxs)("div", {
                className: _.CookieSection,
                children: [
                  (0, _.jsx)("h2", {
                    children: (0, _._)("#CookiePref_ValveAnalytics_Title"),
                  }),
                  (0, _.jsx)("p", {
                    className: _.SectionDescription,
                    children: (0, _._)("#CookiePref_ValveAnalytics_Desc"),
                  }),
                  (0, _.jsx)(_._, {
                    onChange: _,
                    label: (0, _._)("#CookiePref_ValveAnalytics_ToggleTitle"),
                    checked: _.GetImpressions(),
                    description: (0, _._)(
                      "#CookiePref_ValveAnalytics_ToggleDesc",
                    ),
                  }),
                ],
              }),
            });
          }),
          _ = (0, _._)((_) => {
            const { settings: _ } = _,
              _ = (0, _.useCallback)(() => {
                _.ToggleYouTube();
              }, [_]),
              _ = (0, _.useCallback)(() => {
                _.ToggleVimeo();
              }, [_]),
              _ = (0, _.useCallback)(() => {
                _.ToggleSketchfab();
              }, [_]);
            return (0, _.jsx)("div", {
              className: _.CookieGroup,
              children: (0, _.jsxs)("div", {
                className: _.CookieSection,
                children: [
                  (0, _.jsx)("h2", {
                    children: (0, _._)("#CookiePref_ThirdParty_Title"),
                  }),
                  (0, _.jsx)("p", {
                    className: _.SectionDescription,
                    children: (0, _._)("#CookiePref_ThirdParty_Desc"),
                  }),
                  (0, _.jsx)(_._, {
                    onChange: _,
                    label: (0, _._)("#CookiePref_YouTube_Title"),
                    checked: _.GetYouTube(),
                    description: (0, _._)(
                      "#CookiePref_YouTube_Desc",
                      (0, _.jsx)("a", {
                        href: "https://policies.google.com/privacy",
                        target: "_blank",
                        children: (0, _._)(
                          "#CookiePref_YouTube_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    onChange: _,
                    label: (0, _._)("#CookiePref_Vimeo_Title"),
                    checked: _.GetVimeo(),
                    description: (0, _._)(
                      "#CookiePref_Vimeo_Desc",
                      (0, _.jsx)("a", {
                        href: "https://vimeo.com/privacy",
                        target: "_blank",
                        children: (0, _._)(
                          "#CookiePref_Vimeo_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    onChange: _,
                    label: (0, _._)("#CookiePref_Sketchfab_Title"),
                    checked: _.GetSketchfab(),
                    description: (0, _._)(
                      "#CookiePref_Sketchfab_Desc",
                      (0, _.jsx)("a", {
                        href: "https://sketchfab.com/privacy",
                        target: "_blank",
                        children: (0, _._)(
                          "#CookiePref_Sketchfab_TogglePolicyName",
                        ),
                      }),
                    ),
                  }),
                ],
              }),
            });
          }),
          _ = (0, _._)((_) => {
            const { settings: _ } = _,
              _ = (0, _.useCallback)(() => {
                _.ToggleUTMEnabled();
              }, [_]);
            return (0, _.jsx)("div", {
              className: _.CookieGroup,
              children: (0, _.jsxs)("div", {
                className: _.CookieSection,
                children: [
                  (0, _.jsx)("h2", {
                    children: (0, _._)("#PrivacySettings_Marketing_Title"),
                  }),
                  (0, _.jsx)("p", {
                    className: _.SectionDescription,
                    children: (0, _._)("#PrivacySettings_Marketing_Desc"),
                  }),
                  (0, _.jsx)(_._, {
                    onChange: _,
                    label: (0, _._)("#PrivacySettings_UTM_ToggleLabel"),
                    checked: _.GetUTMEnabled(),
                    description: (0, _._)("#PrivacySettings_UTM_ToggleDesc"),
                  }),
                ],
              }),
            });
          }),
          _ = (0, _._)((_) => {
            const { settings: _ } = _,
              _ = (0, _.useCallback)(() => {
                _.ToggleProvideDeckFeeback();
              }, [_]),
              _ = (0, _.useCallback)(() => {
                _.ToggleGameFrameRateReporting();
              }, [_]);
            return (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: _.CookieGroup,
                  children: (0, _.jsxs)("div", {
                    className: _.CookieSection,
                    children: [
                      (0, _.jsx)("h2", {
                        children: (0, _._)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Title",
                        ),
                      }),
                      (0, _.jsx)("p", {
                        className: _.SectionDescription,
                        children: (0, _._)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Desc",
                        ),
                      }),
                      (0, _.jsx)(_._, {
                        onChange: _,
                        checked: _.GetProvideDeckFeedbackEnabled(),
                        description: (0, _._)(
                          "#DataPreferences_Provide_SteamOS_Feedback_Label",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)("div", {
                  className: _.CookieGroup,
                  children: (0, _.jsxs)("div", {
                    className: _.CookieSection,
                    children: [
                      (0, _.jsx)("h2", {
                        _: "FrameRateReporting",
                        children: (0, _._)(
                          "#DataPreferences_FrameRateReporting_Title",
                        ),
                      }),
                      (0, _.jsx)("p", {
                        className: _.SectionDescription,
                        children: (0, _._)(
                          "#DataPreferences_FrameRateReporting_Description",
                        ),
                      }),
                      (0, _.jsx)(_._, {
                        onChange: _,
                        checked: _.GetGameFrameRateReportingEnabled(),
                        description: (0, _._)(
                          "#DataPreferences_FrameRateReporting_Label",
                        ),
                      }),
                    ],
                  }),
                }),
                (0, _.jsx)(_, {}),
              ],
            });
          });
        var _ = __webpack_require__("chunkid"),
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
          _ = __webpack_require__("chunkid");
        const _ = 1422450;
        function _(_) {
          const { bShowPlaytestOverview: _ } = _,
            _ = (0, _._)();
          let _ = [];
          return (
            _.isSuccess &&
              (_ = _.data
                .filter((_) => _.status === _._._ || _.status === _._._)
                .map((_) => {
                  switch (_.status) {
                    case _._._:
                      return (0, _.jsx)(
                        _,
                        {
                          invite: _,
                        },
                        _.invite_id,
                      );
                    case _._._:
                    default:
                      return (0, _.jsx)(
                        _,
                        {
                          invite: _,
                        },
                        _.invite_id,
                      );
                  }
                })),
            (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("div", {
                  className: "account_header_line noicon",
                  children: (0, _._)("#PlaytestInvites_Title"),
                }),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().PlaytestInvites,
                    "account_settings_container",
                  ),
                  children:
                    _.isLoading || _.length > 0
                      ? _
                      : (0, _._)("#PlaytestInvites_NoInvites"),
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className: "account_settings_container",
                    children: [
                      (0, _.jsx)("h2", {
                        children: (0, _._)("#PlaytestInvites_Desc_Title"),
                      }),
                      (0, _.jsx)("p", {
                        className: _().Description,
                        children: (0, _._)("#PlaytestInvites_Desc1"),
                      }),
                      (0, _.jsx)("p", {
                        className: _().Description,
                        children: (0, _._)("#PlaytestInvites_Desc2"),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { invite: _ } = _,
            _ = _.appid;
          let _ = _(_.appid)?.GetName() ?? _.app_name;
          const _ = _.useCallback(
            (_) => {
              (0, _._)((0, _._)(_), `steam://open/games/details/${_}`);
            },
            [_],
          );
          return (0, _.jsxs)("div", {
            className: _().PlaytestInvite,
            children: [
              (0, _.jsx)("div", {
                className: _().InviteInfo,
                children: (0, _.jsx)("span", {
                  children: (0, _._)("#PlaytestInvites_Welcome", _),
                }),
              }),
              !_._.IN_MOBILE_WEBVIEW &&
                (0, _.jsx)("div", {
                  className: _().StatusCtn,
                  children: (0, _.jsx)(_._, {
                    className: _().Buttons,
                    children: (0, _.jsx)(_._, {
                      className: _().WideButton,
                      noFocusRing: !1,
                      onClick: _,
                      children: (0, _._)("#PlaytestInvites_ViewLibrary"),
                    }),
                  }),
                }),
            ],
          });
        }
        function _(_) {
          const { invite: _ } = _,
            _ = (0, _._)(),
            _ = _(_.appid);
          let _ = _?.GetName() ?? _.app_name;
          const _ = (0, _._)(_.invite_id),
            _ = _.useCallback(
              (_) => {
                _.mutate({
                  bAccept: _,
                });
              },
              [_],
            ),
            _ = new _._(_.steamid_inviter);
          return (0, _.jsx)(_._, {
            children: (0, _.jsxs)(_._, {
              className: _().PlaytestInvite,
              navEntryPreferPosition: _._.MAINTAIN_X,
              children: [
                (0, _.jsxs)("div", {
                  className: _().InviteInfo,
                  children: [
                    (0, _.jsx)(_, {
                      steamIDInviter: _,
                    }),
                    (0, _.jsx)(_, {
                      appStoreItem: _,
                      strAppName: _,
                      nAppID: _.appid,
                    }),
                    (0, _.jsx)("div", {
                      className: _().TimeInvited,
                      children: (0, _._)(_.time_created ?? _),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: _().StatusCtn,
                  children: _.isPending
                    ? (0, _.jsx)(_._, {
                        size: "medium",
                        position: "center",
                        msDelayAppear: 250,
                      })
                    : (0, _.jsxs)("div", {
                        className: _().Buttons,
                        children: [
                          (0, _.jsx)(_._, {
                            noFocusRing: !1,
                            onClick: () => _(!0),
                            children: (0, _._)("#PlaytestInvites_Accept"),
                          }),
                          (0, _.jsx)(_._, {
                            noFocusRing: !1,
                            onClick: () => _(!1),
                            children: (0, _._)("#PlaytestInvites_Reject"),
                          }),
                        ],
                      }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { appStoreItem: _, strAppName: _, nAppID: _ } = _;
          let _ = _?.GetDeveloperNames()?.length
              ? _.GetDeveloperNames()[0]
              : null,
            _ = _?.GetStorePageURL(),
            _ = (0, _.jsx)("img", {
              className: _().SmallCap,
              src: _?.GetAssets().GetSmallCapsuleURL() ?? _._,
            });
          return (
            _ == _ && (_ = "Valve"),
            (0, _.jsxs)("div", {
              className: _().AppInfoCtn,
              children: [
                _
                  ? (0, _.jsxs)(_._, {
                      href: _,
                      children: [" ", _, " "],
                    })
                  : _,
                (0, _.jsxs)("div", {
                  className: _().AppDescription,
                  children: [
                    (0, _.jsx)("div", {
                      className: _().AppName,
                      children: _,
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().AppDetail,
                        children: (0, _._)("#PlaytestInvites_AppDeveloper", _),
                      }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const { steamIDInviter: _ } = _;
          return _.BIsValid()
            ? (0, _.jsx)(_, {
                steamIDInviter: _,
              })
            : (0, _.jsx)(_, {});
        }
        function _(_) {
          const { steamIDInviter: _ } = _,
            _ = (0, _._)(_.ConvertTo64BitString()),
            _ = _?.data;
          return _.isSuccess
            ? (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().AvatarAndPersona,
                  _().InviteDescription,
                ),
                children: [
                  (0, _.jsx)(_._, {
                    persona: _,
                    size: "Small",
                    statusPosition: "right",
                  }),
                  (0, _.jsx)("div", {
                    children: (0, _._)(
                      "#PlaytestInvites_InviteDescription_FromUser2",
                      (0, _.jsx)(_._, {
                        href: _.GetCommunityProfileURL(),
                        children: _?.m_strPlayerName,
                      }),
                    ),
                  }),
                ],
              })
            : (0, _.jsx)(_, {});
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().InviteDescription,
            children: (0, _._)("#PlaytestInvites_InviteDescription_FromApp2"),
          });
        }
        function _(_) {
          const [_, _] = (0, _._)(_, {
            include_basic_info: !0,
            include_assets: !0,
          });
          return _ && _ == _._ ? _ : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)(_, {
                bShowPlaytestOverview: !1,
              }),
              (0, _.jsx)("div", {
                className: "account_header_line noicon",
                children: (0, _._)("#PlaytestStatus_Title"),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().PlaytestStatusCtn,
                  "account_settings_container",
                ),
                children: (0, _._)("#PlaytestStatus_None"),
              }),
              (0, _.jsxs)("div", {
                className: "account_settings_container",
                children: [
                  (0, _.jsx)("h2", {
                    children: (0, _._)("#PlaytestInvites_Desc_Title"),
                  }),
                  (0, _.jsx)("p", {
                    className: _().Description,
                    children: (0, _._)("#PlaytestInvites_Desc1"),
                  }),
                  (0, _.jsx)("p", {
                    className: _().Description,
                    children: (0, _._)("#PlaytestInvites_Desc2"),
                  }),
                ],
              }),
            ],
          });
        }
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
          m_rgActiveDevices = [];
          m_rgRevokedDevices = [];
          m_strAccountName;
          m_strPhoneHint;
          m_strEmail;
          m_msgTwoFactorStatus;
          m_strLatestAndroidAppVersion;
          static s_AuthorizedDevicesStore;
          constructor() {
            (0, _._)(this);
          }
          static Get() {
            return (
              _.s_AuthorizedDevicesStore ||
                ((_.s_AuthorizedDevicesStore = new _()),
                _.s_AuthorizedDevicesStore.Init()),
              _.s_AuthorizedDevicesStore
            );
          }
          Init() {
            (this.m_rgActiveDevices = (0, _._)(
              "active_devices",
              "application_config",
            )),
              (this.m_rgRevokedDevices = (0, _._)(
                "revoked_devices",
                "application_config",
              )),
              (this.m_strAccountName = (0, _._)(
                "accountName",
                "application_config",
              )),
              (this.m_strPhoneHint = (0, _._)(
                "phone_hint",
                "application_config",
              )),
              (this.m_strEmail = (0, _._)("email", "application_config")),
              (this.m_msgTwoFactorStatus = (0, _._)(
                "two_factor_status",
                "application_config",
              )),
              (this.m_strLatestAndroidAppVersion = (0, _._)(
                "latest_android_app_version",
                "application_config",
              ));
          }
          GetActiveDevices() {
            return this.m_rgActiveDevices;
          }
          GetRevokedDevices() {
            return this.m_rgRevokedDevices;
          }
          GetAccountName() {
            return this.m_strAccountName;
          }
          GetPhoneHint() {
            return this.m_strPhoneHint;
          }
          GetEmailAddress() {
            return this.m_strEmail;
          }
          GetTwoFactorStatus() {
            return this.m_msgTwoFactorStatus;
          }
          GetLatestAndroidAppVersion() {
            return this.m_strLatestAndroidAppVersion;
          }
        };
        _([_._], _.prototype, "m_rgActiveDevices", 2),
          _([_._], _.prototype, "m_rgRevokedDevices", 2);
        let _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ =
            __webpack_require__._ +
            "images/applications/store/sg_shield_off.png?v=valveisgoodatcaching",
          _ =
            __webpack_require__._ +
            "images/applications/store/sg_shield_on.png?v=valveisgoodatcaching",
          _ =
            __webpack_require__._ +
            "images/applications/store/steam_mobile_qr_code.png?v=valveisgoodatcaching";
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
          _ = ((_) => (
            (_[(_.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
              "k_ETwoFactorTokenSteamguardScheme_None"),
            (_[(_.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
              "k_ETwoFactorTokenSteamguardScheme_Email"),
            (_[(_.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
              "k_ETwoFactorTokenSteamguardScheme_TwoFactor"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.k_EMobileConfirmationAction_None = 0)] =
              "k_EMobileConfirmationAction_None"),
            (_[(_.k_EMobileConfirmationAction_Allow = 1)] =
              "k_EMobileConfirmationAction_Allow"),
            (_[(_.k_EMobileConfirmationAction_Cancel = 2)] =
              "k_EMobileConfirmationAction_Cancel"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_[(_.k_EMobileConfirmationType_Invalid = 0)] =
              "k_EMobileConfirmationType_Invalid"),
            (_[(_.k_EMobileConfirmationType_Test = 1)] =
              "k_EMobileConfirmationType_Test"),
            (_[(_.k_EMobileConfirmationType_Trade = 2)] =
              "k_EMobileConfirmationType_Trade"),
            (_[(_.k_EMobileConfirmationType_MarketListing = 3)] =
              "k_EMobileConfirmationType_MarketListing"),
            (_[(_.k_EMobileConfirmationType_FeatureOptOut = 4)] =
              "k_EMobileConfirmationType_FeatureOptOut"),
            (_[(_.k_EMobileConfirmationType_PhoneNumberChange = 5)] =
              "k_EMobileConfirmationType_PhoneNumberChange"),
            (_[(_.k_EMobileConfirmationType_AccountRecovery = 6)] =
              "k_EMobileConfirmationType_AccountRecovery"),
            (_[(_.k_EMobileConfirmationType_BuildChangeRequest = 7)] =
              "k_EMobileConfirmationType_BuildChangeRequest"),
            (_[(_.k_EMobileConfirmationType_AddUser = 8)] =
              "k_EMobileConfirmationType_AddUser"),
            (_[(_.k_EMobileConfirmationType_RegisterApiKey = 9)] =
              "k_EMobileConfirmationType_RegisterApiKey"),
            (_[(_.k_EMobileConfirmationType_InviteToFamilyGroup = 10)] =
              "k_EMobileConfirmationType_InviteToFamilyGroup"),
            (_[(_.k_EMobileConfirmationType_JoinFamilyGroup = 11)] =
              "k_EMobileConfirmationType_JoinFamilyGroup"),
            (_[(_.k_EMobileConfirmationType_MarketPurchase = 12)] =
              "k_EMobileConfirmationType_MarketPurchase"),
            (_[(_.k_EMobileConfirmationType_RequestRefund = 13)] =
              "k_EMobileConfirmationType_RequestRefund"),
            _
          ))(_ || {});
        const _ = (0, _._)(() => {
          let _ = _.Get();
          const _ = _(),
            _ = (_) => {
              (0, _._)((0, _.jsx)(_, {}), (0, _._)(_));
            },
            _ = Date.now() / 1e3,
            _ = _(_),
            _ = _.GetTwoFactorStatus();
          let _ = null;
          switch (_.steamguard_scheme) {
            default:
            case 0:
              _ = "#accountpreferences_revoked_devices_revoked_description";
              break;
            case 1:
              _ =
                "#accountpreferences_revoked_devices_revoked_description_email";
              break;
            case 2:
              _ =
                "#accountpreferences_revoked_devices_revoked_description_auth";
              break;
          }
          let _ = [],
            _ = [];
          for (const _ of _.GetActiveDevices()) {
            const _ = _.logged_in && _.last_seen?.time > _ - 900,
              _ = _.effective_token_state == _._._ ? _.RememberedDevice : null,
              _ = (0, _.jsx)(
                _,
                {
                  className: _,
                  device: _,
                  bActiveNow: _,
                  bCurrentDevice: _ == _.token_id,
                  strActiveCountry: _,
                  msgTwoFactorStatus: _,
                },
                _.token_id,
              );
            _ ? _.push(_) : _.push(_);
          }
          const _ = _.GetRevokedDevices().map((_) =>
            (0, _.jsx)(
              _,
              {
                className: _.RevokedDevice,
                device: _,
                strActiveCountry: _,
                msgTwoFactorStatus: _,
              },
              _.token_id,
            ),
          );
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _.AuthorizedDeviceHeader,
                  "account_header_line noicon",
                ),
                children: (0, _.jsx)("div", {
                  children: (0, _._)(
                    "#accountpreferences_authorized_devices_header",
                  ),
                }),
              }),
              (0, _.jsxs)("div", {
                className: "account_settings_container",
                children: [
                  (0, _.jsx)("div", {
                    className: _.SectionDescription,
                    children: (0, _._)(
                      "#accountpreferences_authorized_devices_description",
                      (0, _.jsx)("p", {}),
                    ),
                  }),
                  (0, _.jsxs)("div", {
                    className: _.AuthorizedDeviceGroup,
                    children: [
                      (0, _.jsx)(_, {
                        elHeader: (0, _.jsxs)("div", {
                          className: _.ActiveNow,
                          children: [
                            (0, _.jsx)(_.jlt, {
                              className: _.ActiveNowDot,
                            }),
                            (0, _._)(
                              "#accountpreferences_authorized_device_active_now",
                            ),
                          ],
                        }),
                        rgDevices: _,
                      }),
                      (0, _.jsx)(_, {
                        elHeader: (0, _._)(
                          "#accountpreferences_authorized_devices_recentseen_heading",
                        ),
                        rgDevices: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _.DeviceGroup,
                        children: (0, _.jsx)("div", {
                          className: _.RemoveDevicesRow,
                          children: (0, _.jsx)(_._, {
                            className: _.RemoveDevicesButton,
                            onClick: _,
                            children: (0, _._)(
                              "#accountpreferences_authorized_devices_remove_button",
                            ),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              _?.length > 0 &&
                (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(
                        _.AuthorizedDeviceHeader,
                        "account_header_line noicon",
                      ),
                      children: (0, _.jsx)("div", {
                        children: (0, _._)(
                          "#accountpreferences_revoked_devices_revoked_header",
                        ),
                      }),
                    }),
                    (0, _.jsxs)("div", {
                      className: "account_settings_container",
                      children: [
                        (0, _.jsx)("div", {
                          className: _.SectionDescription,
                          children: (0, _._)(_, (0, _.jsx)("p", {})),
                        }),
                        (0, _.jsx)("div", {
                          className: _.AuthorizedDeviceGroup,
                          children: (0, _.jsx)(_, {
                            rgDevices: _,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        });
        function _(_) {
          const { rgDevices: _, elHeader: _ } = _;
          return _.length == 0
            ? null
            : (0, _.jsxs)("div", {
                className: _.DeviceGroup,
                children: [_ && _, _],
              });
        }
        function _(_) {
          const _ = Date.now() / 1e3;
          return _(
            _.GetActiveDevices().find(
              (_) => _.logged_in && _.last_seen?.time > _ - 900,
            ) ?? _.GetActiveDevices()[0],
          ).country;
        }
        function _() {
          const [_] = _.useState(() =>
            (0, _._)("requesting_token_id", "application_config"),
          );
          return _;
        }
        function _(_, _) {
          return (
            _?.state > 0 &&
            _.token_id &&
            _.token_id == _?.last_seen_auth_token_id
          );
        }
        function _(_) {
          const {
              device: _,
              bActiveNow: _,
              bCurrentDevice: _,
              strActiveCountry: _,
              className: _,
              msgTwoFactorStatus: _,
              bShowAuthenticatorActivity: _,
            } = _,
            [_, _] = (0, _.useState)(!1),
            _ = _.useRef(void 0);
          _.useEffect(() => {
            _.current?.BHasFocus() && _.current?.Node().ForceMeasureFocusRing();
          }, [_]);
          let _ = _(_);
          _.length &&
            (_ = ` ${(0, _._)("#accountpreferences_authorized_devices_name_separator")} "${_}"`);
          const _ = _(_);
          let _ = null;
          !_.country || !_ || _ == _.country
            ? (_ = (0, _.jsx)("div", {
                className: _.LocationNotSuspicious,
                children: _.location,
              }))
            : (_ = (0, _.jsx)(_._, {
                className: _.Tooltip,
                toolTipContent: (0, _._)(
                  "#accountpreferences_authorized_devices_suspicous_tooltip",
                ),
                direction: "top",
                children: (0, _.jsxs)("div", {
                  className: _.LocationSuspicious,
                  children: [_.location, (0, _.jsx)(_.$$j, {})],
                }),
              }));
          const _ = _(_, _);
          return (0, _.jsxs)(
            _._,
            {
              className: (0, _._)(_.DeviceContainer, _ && _.ActiveDevice, _),
              navRef: _,
              onActivate: () => _(!_),
              children: [
                (0, _.jsx)(_, {
                  device: _,
                  bHasAuthenticator: _,
                }),
                (0, _.jsxs)("div", {
                  className: _.DeviceContent,
                  children: [
                    (0, _.jsxs)("div", {
                      className: _.DeviceHeaderRow,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _.DeviceNameContainer,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _.DeviceName,
                              children: [
                                (0, _.jsx)(_, {
                                  device: _,
                                }),
                                _,
                              ],
                            }),
                            _ &&
                              (0, _.jsx)("div", {
                                className: _.ThisDevice,
                                children: (0, _._)(
                                  "#accountpreferences_authorized_devices_this_device",
                                ),
                              }),
                          ],
                        }),
                        (0, _.jsxs)("div", {
                          className: _.DetailsToggleContainer,
                          children: [
                            _,
                            (0, _.jsx)("div", {
                              className: _.DetailsToggle,
                              children: (0, _.jsx)(_._, {
                                className: (0, _._)({
                                  [_.DetailsToggle]: !0,
                                  [_.Selected]: _,
                                }),
                                children: (0, _.jsx)(_.b8_, {
                                  direction: "down",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      device: _,
                      bActiveNow: _,
                      msgTwoFactorStatus: _ && _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        device: _,
                      }),
                  ],
                }),
              ],
            },
            "id_" + _.token_id,
          );
        }
        function _(_) {
          const { device: _, bActiveNow: _, msgTwoFactorStatus: _ } = _;
          return _?.state > 0
            ? (0, _.jsx)(_, {
                msgTwoFactorUsage: _.usages?.length > 0 ? _.usages[0] : null,
              })
            : _
              ? null
              : (0, _.jsx)(_, {
                  device: _,
                });
        }
        function _(_) {
          const { msgTwoFactorUsage: _ } = _;
          if (!_ || !_.time) return null;
          const _ = (0, _._)(_.time);
          let _ = null;
          if (_.usage_type == _._._)
            _ = (0, _._)("#authorized_devices_lasttwofactor_login", _);
          else if (_.usage_type == _._._) {
            const _ = _.confirmation_action == 1 ? "_allow" : "_cancel";
            switch (_.confirmation_type) {
              case 2:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_trade${_}`,
                  _,
                );
                break;
              case 3:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_marketlisting${_}`,
                  _,
                );
                break;
              case 5:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_phonechange${_}`,
                  _,
                );
                break;
              case 6:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_accountrecovery${_}`,
                  _,
                );
                break;
              case 7:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_buildchange${_}`,
                  _,
                );
                break;
              case 8:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_adduser${_}`,
                  _,
                );
                break;
              case 9:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_registerapikey${_}`,
                  _,
                );
                break;
              case 10:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_familygroupinvite${_}`,
                  _,
                );
                break;
              case 11:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_joinfamilygroup${_}`,
                  _,
                );
                break;
              case 12:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_marketpurchase${_}`,
                  _,
                );
                break;
              case 13:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_refund${_}`,
                  _,
                );
                break;
              default:
                _ = (0, _._)(
                  `#authorized_devices_lasttwofactor_confirmation_unknown${_}`,
                  _,
                );
            }
          }
          return _
            ? (0, _.jsx)("div", {
                className: _.LastSeenRow,
                children: (0, _.jsx)("div", {
                  children: _,
                }),
              })
            : null;
        }
        function _(_) {
          const { device: _ } = _,
            _ =
              _.first_seen?.time &&
              _.first_seen.time + _._.PerWeek * 2 > Date.now() / 1e3,
            _ = _.effective_token_state == _._._;
          let _ = (0, _._)(
            "#accountpreferences_authorized_devices_last_seen_max",
          );
          return (
            _.last_seen?.time
              ? (_ = (0, _._)(_.last_seen.time))
              : _.time_updated &&
                _.time_updated >
                  Math.floor(Date.now() / 1e3 - 2160 * 60 * 60) &&
                (_ = (0, _._)(_.time_updated)),
            (0, _.jsxs)("div", {
              className: _.LastSeenRow,
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsx)("span", {
                      className: _.LastActive,
                      children: (0, _._)(
                        "#accountpreferences_authorized_devices_last_seen_title",
                      ),
                    }),
                    _,
                    _ &&
                      (0, _.jsxs)("span", {
                        className: _.LastActive,
                        children: [
                          " - ",
                          (0, _._)(
                            "#accountpreferences_authorized_devices_state_signedout",
                          ),
                        ],
                      }),
                  ],
                }),
                _ &&
                  (0, _.jsx)("div", {
                    className: _.NewDevice,
                    children: (0, _._)(
                      "#accountpreferences_authorized_devices_new_device",
                      (0, _.jsx)("a", {
                        href:
                          _._.HELP_BASE_URL + "wizard/HelpWithAccountStolen",
                        onClick: (_) => {
                          _.stopPropagation();
                        },
                      }),
                    ),
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { device: _ } = _;
          return (0, _.jsx)("div", {
            className: _.AuthorizedDeviceDetails,
            children: (0, _._)(
              _(_),
              (0, _._)(_.first_seen.time) + " @ " + (0, _._)(_.first_seen.time),
            ),
          });
        }
        function _(_) {
          const _ = _.authentication_type,
            _ = _.auth_type;
          if (_ == _._._) return "#authorized_devices_default_qr";
          if (_.effective_token_state == _._._)
            return "#authorized_devices_remembered_machine";
          switch (_) {
            case _._._:
              return "#authorized_devices_emailcode_password";
            case _._._:
              return "#authorized_devices_devicecode_password";
            case _._._:
            case _._._:
              return "#authorized_devices_mobileconf_password";
            case _._._:
              return "#authorized_devices_machinetoken_password";
            case _._._:
            case _._._:
            case _._._:
            default:
              return "#authorized_devices_default_password";
          }
        }
        function _(_) {
          const { device: _, bHasAuthenticator: _ } = _,
            _ = _.effective_token_state == _._._;
          let _ = null;
          if (_.platform_type == _._._)
            _ = _
              ? (0, _.jsx)(_.SQF, {
                  className: (0, _._)(_.DeviceLogo, _.RememberedDevice),
                })
              : (0, _.jsx)(_.FH7, {
                  className: _.DeviceLogo,
                });
          else if (
            _.platform_type == _._._ &&
            (_.gaming_device_type === _.LS$ ||
              _.gaming_device_type == _.ppM ||
              _.gaming_device_type == _.Ner)
          )
            _ = _
              ? (0, _.jsx)(_.VRo, {
                  className: (0, _._)(_.DeviceLogo, _.RememberedDevice),
                })
              : (0, _.jsx)(_.oEi, {
                  className: _.DeviceLogo,
                });
          else
            switch (_.os_platform) {
              case _._.k_EPlatformTypeWin32:
              case _._.k_EPlatformTypeWin64:
              case _._.k_EPlatformTypeOSX:
                _ = _
                  ? (0, _.jsx)(_.ulH, {
                      className: (0, _._)(_.DeviceLogo, _.RememberedDevice),
                    })
                  : (0, _.jsx)(_.nl8, {
                      className: _.DeviceLogo,
                    });
                break;
              case _._.k_EPlatformTypeAndroid32:
              case _._.k_EPlatformTypeAndroid64:
              case _._.k_EPlatformTypeLinux32:
              case _._.k_EPlatformTypeLinux64:
                _ = (0, _.jsx)(_.rfv, {
                  className: _.DeviceLogo,
                });
                break;
              case _._.k_EPlatformTypeIOS32:
              case _._.k_EPlatformTypeIOS64:
                _ = (0, _.jsx)(_.rfv, {
                  className: _.DeviceLogo,
                });
                break;
            }
          return _
            ? (0, _.jsxs)("div", {
                className: _.DeviceLogoBoundingBox,
                children: [
                  _,
                  (0, _.jsx)("img", {
                    src: _,
                    className: _.DeviceSteamGuardLogo,
                  }),
                ],
              })
            : _;
        }
        function _(_) {
          if (_.platform_type == _._._) {
            let _ = new _.UAParser(_.token_description).getResult();
            return _.browser.name && _._.name
              ? _.browser.name == "WebKit"
                ? _._.name
                : (0, _._)(
                    "#accountpreferences_authorized_devices_browser_on_os",
                    _.browser.name,
                    _._.name,
                  )
              : (0, _._)(
                  "#accountpreferences_authorized_devices_browser_unmatched",
                );
          } else return _.token_description;
        }
        function _(_) {
          const _ = _.last_seen ?? _.first_seen;
          if (_)
            if ((0, _._)(_._.EREALM)) {
              if (_.city)
                return {
                  location: _.city,
                  country: _.country,
                };
            } else
              return {
                location: `${_.city ? _.city + ", " : ""}${_.country}`,
                country: _.country,
              };
          return {
            location: (0, _._)(
              "#accountpreferences_authorized_devices_loc_unknown",
            ),
            country: "",
          };
        }
        function _(_) {
          const { device: _ } = _;
          switch (_.platform_type) {
            case _._._:
              return (0, _._)(
                "#accountpreferences_authorized_devices_type_mobile",
              );
            case _._._:
              return _.gaming_device_type === _.LS$
                ? (0, _._)(
                    "#accountpreferences_authorized_devices_type_steamdeck",
                  )
                : _.gaming_device_type == _.ppM
                  ? (0, _._)(
                      "#accountpreferences_authorized_devices_type_legiongos",
                    )
                  : _.gaming_device_type == _.Ner
                    ? (0, _._)(
                        "#accountpreferences_authorized_devices_type_steamos",
                      )
                    : (0, _._)(
                        "#accountpreferences_authorized_devices_type_desktop",
                      );
            case _._._:
              return (0, _._)(
                "#accountpreferences_authorized_devices_type_browser",
              );
            case _._._:
            default:
              return (0, _._)(
                "#accountpreferences_authorized_devices_type_unknown",
              );
          }
        }
        function _(_) {
          const { closeModal: _ } = _,
            _ = async () => {
              const _ = new FormData();
              _.set("action", "deauthorize"),
                _.set("sessionid", (0, _._)()),
                await _().post(
                  _._.STORE_BASE_URL + "twofactor/manage_action",
                  _,
                );
              const _ = document.createElement("form");
              (_.method = "POST"), (_.action = _._.STORE_BASE_URL + "logout");
              const _ = document.createElement("input");
              (_.type = "hidden"),
                (_.name = "sessionid"),
                (_.value = (0, _._)()),
                _.appendChild(_),
                document.body.appendChild(_),
                _.submit();
            };
          return (0, _.jsx)(_._, {
            onEscKeypress: _,
            children: (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  children: (0, _._)("#authorized_devices_deauthorize_title"),
                }),
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#authorized_devices_deauthorize_msg"),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_._, {
                        strOKText: (0, _._)(
                          "#authorized_devices_deauthorize_proceed",
                        ),
                        onOK: _,
                        onCancel: _,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_[(_.k_ETwoFactorTokenSteamguardScheme_None = 0)] =
              "k_ETwoFactorTokenSteamguardScheme_None"),
            (_[(_.k_ETwoFactorTokenSteamguardScheme_Email = 1)] =
              "k_ETwoFactorTokenSteamguardScheme_Email"),
            (_[(_.k_ETwoFactorTokenSteamguardScheme_TwoFactor = 2)] =
              "k_ETwoFactorTokenSteamguardScheme_TwoFactor"),
            _
          ))(_ || {});
        function _(_) {
          return (0, _.jsxs)("div", {
            children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
          });
        }
        function _(_) {
          const _ = _._.HELP_BASE_URL + "faqs/view/7EFD-3CAE-64D3-1C31",
            _ = _.Get(),
            _ = _.GetTwoFactorStatus()?.steamguard_scheme == 2;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: "account_header_line",
                children: (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsx)(_.iSZ, {
                      className: _.HeaderIcon,
                    }),
                    (0, _._)("#youraccount_account_security"),
                  ],
                }),
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _.AccountSecurityCtn,
                  "account_settings_container",
                ),
                children: [
                  (0, _.jsx)("div", {
                    children: (0, _._)(
                      "#accountpreferences_account_security_description",
                      (0, _.jsx)(_._, {
                        target: "_blank",
                        href: _,
                      }),
                    ),
                  }),
                  _
                    ? (0, _.jsx)(_, {
                        msgTwoFactorStatus: _.GetTwoFactorStatus(),
                        strFaqUrl: _,
                      })
                    : (0, _.jsx)(_, {
                        strFaqUrl: _,
                      }),
                  (0, _.jsxs)("div", {
                    className: _.AccountDetailsCtn,
                    children: [
                      (0, _.jsx)(_, {}),
                      (0, _.jsx)("div", {
                        className: _.Divider,
                      }),
                      (0, _.jsx)(_, {}),
                      (0, _.jsx)(_, {
                        msgTwoFactorStatus: _.GetTwoFactorStatus(),
                      }),
                      _ && (0, _.jsx)(_, {}),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { msgTwoFactorStatus: _, strFaqUrl: _ } = _,
            _ = _.Get(),
            _ = _(_),
            _ = _(),
            _ = [
              ...(_.GetActiveDevices() ?? []),
              ...(_.GetActiveDevices() ?? []),
            ];
          let _ = null,
            _ = !1;
          return (
            _?.last_seen_auth_token_id &&
              ((_ = _.find((_) => _.token_id === _.last_seen_auth_token_id)),
              (_ = _?.length > 0 && _ == _?.token_id)),
            (0, _.jsxs)("div", {
              children: [
                (0, _.jsxs)("div", {
                  className: _.SteamGuardStatusHeader,
                  children: [
                    (0, _.jsx)("img", {
                      className: _.SteamGuardLogo,
                      src: _,
                    }),
                    (0, _.jsx)("div", {
                      className: _.HeaderText,
                      children: (0, _._)(
                        "#accountpreferences_account_security_steamguard",
                      ),
                    }),
                    (0, _.jsx)("div", {
                      className: _.RemoveText,
                      children: (0, _.jsx)(_._, {
                        href:
                          _._.STORE_BASE_URL +
                          "twofactor/remove?step=promptdevice",
                        children: (0, _._)(
                          "#accountpreferences_account_security_steamguard_remove",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.SteamGuardStatusBody,
                  children: [
                    !!_ &&
                      (0, _.jsxs)(_.Fragment, {
                        children: [
                          (0, _.jsx)(_, {
                            className: _.AuthorizedDevice,
                            device: _,
                            strActiveCountry: _,
                            msgTwoFactorStatus: _,
                            bShowAuthenticatorActivity: !0,
                          }),
                          (0, _.jsx)("div", {
                            className: _.Divider,
                          }),
                        ],
                      }),
                    (0, _.jsxs)("div", {
                      className: _.SteamGuardActionsCtn,
                      children: [
                        (0, _.jsx)(_, {
                          strLabel: (0, _._)(
                            "#accountpreferences_account_security_move",
                          ),
                          href:
                            _._.HELP_BASE_URL + "faqs/view/29A9-9EEE-09F0-75F9",
                        }),
                        (0, _.jsx)(_, {
                          strLabel: (0, _._)(
                            "#accountpreferences_account_security_help_lost",
                          ),
                          href:
                            _._.STORE_BASE_URL +
                            "twofactor/remove?step=promptdevice",
                        }),
                        (0, _.jsx)("div", {
                          className: _.RightAligned,
                          children: (0, _.jsx)(_._, {
                            href: _,
                            target: "_blank",
                            children: (0, _._)(
                              "#accountpreferences_account_security_view_faq",
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        }
        function _(_) {
          const { strFaqUrl: _ } = _,
            _ = _.Get().GetLatestAndroidAppVersion();
          return (0, _.jsxs)("div", {
            className: _.NoSteamGuardCtn,
            children: [
              (0, _.jsxs)("div", {
                className: _.SteamGuardStatusHeader,
                children: [
                  (0, _.jsx)("img", {
                    className: _.SteamGuardLogo,
                    src: _,
                  }),
                  (0, _.jsx)("div", {
                    className: _.HeaderText,
                    children: (0, _._)(
                      "#accountpreferences_account_security_no_steamguard",
                    ),
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.Divider,
              }),
              (0, _.jsxs)("div", {
                className: _.NoSteamGuardBody,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.QROuterCtn,
                    children: [
                      (0, _.jsxs)("div", {
                        className: _.GetMobileAppCtn,
                        children: [
                          (0, _.jsx)("div", {
                            className: _.GetMobileAppText,
                            children: (0, _._)(
                              "#accountpreferences_account_security_get_app",
                              (0, _.jsx)(_._, {
                                href:
                                  _._.STORE_BASE_URL + "mobile#mobile_section",
                              }),
                            ),
                          }),
                          (0, _.jsx)("div", {
                            children: (0, _._)(
                              "#accountpreferences_account_security_scan_qr",
                            ),
                          }),
                        ],
                      }),
                      (0, _.jsx)("img", {
                        src: _,
                        className: _.QRCode,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: _.MobileAppLinksCtn,
                    children: [
                      (0, _.jsx)("div", {
                        children: (0, _._)(
                          "#accountpreferences_account_security_mobile_os_reqs",
                        ),
                      }),
                      (0, _.jsxs)("div", {
                        className: _.MobileAppDownloadImages,
                        children: [
                          (0, _.jsx)(_._, {
                            href: "https://itunes.apple.com/us/app/steam-mobile/id495369748",
                            rel: "noopener",
                            target: "_blank",
                            children: (0, _.jsx)(_._, {
                              srcs: _(
                                _._.IMG_URL +
                                  "mobile/localizedimages/appleappstore/apple_store_",
                                ".png",
                              ),
                              className: _.AppleAppStoreImg,
                            }),
                          }),
                          (0, _.jsx)(_._, {
                            href: "https://play.google.com/store/apps/details?id=com.valvesoftware.android.steam.community",
                            rel: "noopener",
                            target: "_blank",
                            children: (0, _.jsx)(_._, {
                              srcs: _(
                                _._.IMG_URL +
                                  "mobile/localizedimages/googleplaystore/google_play_store_",
                                ".png",
                              ),
                              className: _.GooglePlayStoreImg,
                            }),
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        children: (0, _._)(
                          "#accountpreferences_account_security_apk_download",
                          (0, _.jsx)("a", {
                            href: `https://media.steampowered.com/apps/steam-android/steam-${_}.apk`,
                          }),
                        ),
                      }),
                      (0, _.jsx)("div", {
                        children: (0, _.jsx)("a", {
                          href: _,
                          target: "_blank",
                          children: (0, _._)(
                            "#accountpreferences_account_security_mobile_faq",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function _(_, _) {
          const _ = _._.GetLanguageFallback(_._.LANGUAGE);
          let _ = [_ + _._.LANGUAGE + _];
          return _._.LANGUAGE != _ && _.push(_ + _ + _), _;
        }
        function _(_) {
          const _ = _.Get(),
            _ = _._.IN_MOBILE_WEBVIEW;
          return (0, _.jsxs)("div", {
            className: _.AccountDetailsSubBlock,
            children: [
              (0, _.jsx)(_, {
                strLabel: (0, _._)(
                  "#accountpreferences_account_security_account_name",
                ),
                strText: _.GetAccountName(),
              }),
              (0, _.jsx)(_, {
                strLabel: (0, _._)(
                  "#accountpreferences_account_security_change_pass",
                ),
                href:
                  _._.HELP_BASE_URL +
                  "wizard/HelpChangePassword?redir=store/account/",
                target: _ ? "_blank" : void 0,
              }),
            ],
          });
        }
        function _(_) {
          const { msgTwoFactorStatus: _ } = _,
            _ = _.Get(),
            _ = _.email_validated,
            _ = _.steamguard_scheme == 1,
            _ = _._.IN_MOBILE_WEBVIEW;
          return (0, _.jsxs)("div", {
            className: _.AccountDetailsSubBlock,
            children: [
              (0, _.jsx)(_, {
                strLabel: (0, _._)(
                  "#accountpreferences_account_security_email",
                ),
                strText: _.GetEmailAddress(),
              }),
              (0, _.jsx)(_, {
                strLabel: (0, _._)(
                  "#accountpreferences_account_security_email_status",
                ),
                strText: _
                  ? (0, _._)("#youraccount_email_verified")
                  : (0, _._)("#youraccount_email_unverified"),
              }),
              _ &&
                (0, _.jsx)(_, {
                  strLabel: (0, _._)(
                    "#accountpreferences_account_security_verification",
                  ),
                  strText: (0, _._)(
                    "#accountpreferences_account_security_via_email",
                  ),
                }),
              (0, _.jsxs)("div", {
                className: _.EmailActions,
                children: [
                  (0, _.jsx)(_, {
                    strLabel: (0, _._)(
                      "#accountpreferences_account_security_change_email",
                    ),
                    href:
                      _._.HELP_BASE_URL +
                      "wizard/HelpChangeEmail?redir=store/account/",
                    target: _ ? "_blank" : void 0,
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      strLabel: (0, _._)(
                        "#accountpreferences_account_security_remove_email_guard",
                      ),
                      href: _._.STORE_BASE_URL + "twofactor/manage",
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const _ = _.Get();
          let _ = (0, _._)("#accountpreferences_account_security_phone_none");
          return (
            _.GetPhoneHint() &&
              (_ = (0, _._)(
                "#accountpreferences_account_security_phone_hint",
                _.GetPhoneHint(),
              )),
            (0, _.jsxs)("div", {
              className: _.AccountDetailsSubBlock,
              children: [
                (0, _.jsx)(_, {
                  strLabel: (0, _._)(
                    "#accountpreferences_account_security_phone",
                  ),
                  strText: _,
                }),
                (0, _.jsx)(_, {
                  strLabel: (0, _._)(
                    "#accountpreferences_account_security_manage_phone",
                  ),
                  href: _._.STORE_BASE_URL + "phone/manage",
                }),
              ],
            })
          );
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _.AccountDetailsSubBlock,
            children: [
              (0, _.jsx)(_, {
                strLabel: (0, _._)(
                  "#accountpreferences_account_security_backup_codes",
                ),
              }),
              (0, _.jsx)(_, {
                strLabel: (0, _._)(
                  "#accountpreferences_account_security_get_backup_codes",
                ),
                href: _._.STORE_BASE_URL + "twofactor/emergency_codes",
              }),
            ],
          });
        }
        function _(_) {
          const { strLabel: _, strText: _ } = _;
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsx)("span", {
                className: _.AccountDetailLabel,
                children: _,
              }),
              !!_ &&
                (0, _.jsx)("span", {
                  children: _,
                }),
            ],
          });
        }
        function _(_) {
          const { strLabel: _, href: _, target: _ } = _;
          return (0, _.jsx)("div", {
            children: (0, _.jsx)(_._, {
              className: _.AccountActionButton,
              href: _,
              target: _,
              children: _,
            }),
          });
        }
        const _ = _.lazy(() =>
            Promise.all([
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
              __webpack_require__._("chunkid"),
            ]).then(__webpack_require__.bind(__webpack_require__, "chunkid")),
          ),
          _ = {
            CookieSettings: () => "/cookiepreferences",
            FamilyManagement: () => "/familymanagement",
            SecurityDevices: () => "/authorizeddevices",
            PlaytestInvites: () => "/playtestinvites",
            Playtests: () => "/playtests",
          },
          _ = (_) => {
            const _ = _.match.url,
              _ = _;
            return (0, _.jsxs)(_._, {
              children: [
                (0, _.jsx)(_._, {
                  path: `${_}${_.CookieSettings()}`,
                  render: () =>
                    (0, _.jsx)(_._, {
                      config: {
                        "cookie-preferences": () => (0, _.jsx)(_, {}),
                      },
                    }),
                }),
                (0, _.jsx)(_._, {
                  path: `${_}${_.FamilyManagement()}`,
                  render: () =>
                    (0, _.jsx)(_._, {
                      config: {
                        "family-management": () => (0, _.jsx)(_, {}),
                      },
                    }),
                }),
                (0, _.jsx)(_._, {
                  path: `${_}${_.SecurityDevices()}`,
                  render: () =>
                    (0, _.jsx)(_._, {
                      config: {
                        "security-devices": () => (0, _.jsx)(_, {}),
                      },
                    }),
                }),
                (0, _.jsx)(_._, {
                  path: `${_}${_.PlaytestInvites()}`,
                  render: () =>
                    (0, _.jsx)(_._, {
                      config: {
                        "playtest-invites": () =>
                          (0, _.jsx)(_, {
                            bShowPlaytestOverview: !0,
                          }),
                      },
                    }),
                }),
                (0, _.jsx)(_._, {
                  path: `${_}${_.Playtests()}`,
                  render: () =>
                    (0, _.jsx)(_._, {
                      config: {
                        playtests: (_) =>
                          (0, _.jsx)(_, {
                            ..._,
                          }),
                      },
                    }),
                }),
              ],
            });
          };
      },
      chunkid: (module) => {
        module.exports = {
          PopupScreenshotModal: "_39-iZ5ATgVu0Ji6MD3vGTs",
          PopupScreenshotContainer: "_1yPgn1HBK5eQLrfrG38h1X",
          PopupScreenshot: "_173h7V5UqdDhN-J2O-AKVt",
          ButtonCtn: "_3-4JG-Z1QyDXZaEByxvMvS",
          ButtonIcon: "_15gRxd1hdAQxSunAfg1PZ8",
          Disabled: "_3Mh6I7hT8HViCO91Q5Iech",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ErrorDiv: "_2FXMECiK-1oag3HieTiKJW",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PreviewCtn: "_16SknI_KfMn45zQAvi-Xrs",
          SVG: "_3Mns5ZEBThi10kv9zwdCRr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AuthorizedDeviceHeader: "_2OcGChel9mKKDiT5UYgL8I",
          SectionDescription: "_2INQL8oKYSG91_gqx2zvnV",
          AuthorizedDeviceGroup: "_20iEFcT5JyJPhTjbaJ0ajE",
          DeviceGroup: "_2mir-ym1kKS06jV0W7mtUx",
          AuthorizedDevicesRecentHeader: "_35lIIoiD4gnKLmNL3H9zAo",
          RememberedDevice: "_2gQ1ywJDhv3qFFjvjtt39w",
          DeviceLogo: "_3u6D3tBNr6Pd8scEAu0WHh",
          RevokedDevice: "_22EU1rJVczbjFuV39qprXh",
          DeviceContainer: "_173r5KvavKBUk01FwZftvC",
          ActiveDevice: "_2eItHkwsCAtMw7E-EF_YG_",
          ThisDevice: "_3o3paJd8GOTYKXh7Rd3Br8",
          DeviceContent: "_3fcDKsMFeSrukc_lptL5k6",
          DeviceHeaderRow: "_366kraIS4n5agiJpxnOSL2",
          DeviceNameContainer: "_2thyM-IiBuBfn44nW5anSY",
          DeviceName: "e-cYNmgoRYobtL32PBDvh",
          LocationSuspicious: "_2wFj-skWKPalSQ4MHk27Wr",
          LastSeenRow: "_2Q1XRSo_YDuNplXJSPKtsq",
          LastActive: "CKNbt1mIaNAep7MwHG6eX",
          NewDevice: "_10WUgZtyhPN8XWybruXSY9",
          AuthorizedDeviceDetails: "Zq-YGng4xfhI7CCwSN6UF",
          DetailsToggleContainer: "_2h6gzZPnXmr8pFVxduqp_k",
          DetailsToggle: "_2-E69gxiszxb3lmuoV7yYi",
          Selected: "JQwtQncjBu_1UajTl86pS",
          ActiveNow: "aR0IvXuy6BAh7MauaSs5j",
          ActiveNowDot: "_2sNYH7uxn-CGdZCk4lGMAg",
          DeviceLogoBoundingBox: "_25S2w41EbEIy3v97Dc0nl8",
          DeviceSteamGuardLogo: "_3BA92JhNM9ztpJY4hnWagy",
          RemoveDevicesRow: "_3EYcq6Ow2WM7bGuzWyQRMN",
          RemoveDevicesButton: "_37dMp7l0gWnMweQxR4Qj7Z",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AllButton: "_24Y_0sMrz5EywcAsFUstI1",
          ButtonHighlight: "_3OVHZhM_IefZqAOIsPxatj",
          CookieSettingsHeader: "_3R3iiUuAhP-0M-rdtCANeY",
          DataCollectionSettingsHeader: "-N7TxEZXL1e7VIKEfBOds",
          ButtonGroup: "YPn6VOod44mu0w34xdzDC",
          CookieGroup: "_25H3qBQ1Lfsfq8nwc3M0Fk",
          CookieSection: "_3IKt4dLdwzyZtMqAwvawdG",
          SectionDescription: "GA-wFr-pPreiaNq3wRump",
          NecessaryGroup: "_24o8cEsvGK0bE4hHyUGhfh",
          NecessaryTitle: "_3if8ZNUUN7eSTxlCJbdgav",
          NecessaryDesc: "_9NmWi9VzZyFLjcu_GW_70",
          SavedHardwareList: "_3cKa2WCkwVF9l83qdejZnW",
          SavedHardware: "rH2OfMey8m_-tFha6mSo3",
          FriendlyName: "_33i2P3K0jts8t9ZvEucxHX",
          Details: "_1rRiE6QmvGsMc-qivc5Xp1",
          SavedHardwareControls: "_24azLL9qdi04Bq8Q6NT3pc",
          DeleteButton: "kwiQ_gtacj8i38Yf6HMLh",
          RenameButton: "_1uhme8b0f9MEqNEEMZTVIt",
          SavedHardwareAddPCButton: "_1h6y7HfPp9ZETEt3vGYcIa",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          PlaytestInvites: "_3XPWJM0EKr-dJ0B0NJtmjq",
          PlaytestInvite: "_22d1cAhcNjyVeCgm3buXvn",
          InviteInfo: "_9XX6R8HJVzwJ9jnfbIL-I",
          InviteDescription: "_3o2bwehhb6IiaAgm2UqSWZ",
          TimeInvited: "_1QDTpUha3gVN27iIGSQYu3",
          StatusCtn: "_1ItLCAR90cxfIMjbiraDqU",
          Buttons: "_1Fh12RGmObsvcXIRY7vQYf",
          WideButton: "wA5p2wik9ul235sZq1VJO",
          AppInfoCtn: "_2ToVcjoGTH4m6cNznWft6s",
          AppName: "_3rcHvM3XilLmqUey9RCWcR",
          AppDetail: "_1y2mfNER5Q5t4vb_ImMa3M",
          AppDescription: "_3O4Y1ujrXP2H7shfwIyVyr",
          SmallCap: "_1dsys_7Sn0ty3ZFNvF8VtC",
          AvatarAndPersona: "_3uUPNFsdEI9Fba-fyvnslj",
          Description: "_2fAxlp5l2ZkuTUe5oYvdRB",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PlaytestStatusCtn: "_2eYiuTSkBQNywb-x-gquMD",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          HeaderIcon: "_1DTV9TockJu_p7oiuZdWi6",
          AccountSecurityCtn: "_20DWPovgBZty81RwR7w9KW",
          AccountDetailsCtn: "FPQ9JppMamYmV0bS3zfDK",
          Divider: "_2DEfsEp7B2EWcj-wsoNnhc",
          AccountDetailsSubBlock: "aSLHKQsd5_tpAOdPgV5W1",
          EmailActions: "_2beoIY1coKEr8VYWkMFz1e",
          AccountDetailLabel: "W8esOSj_nvqyHTDxmGb2D",
          AccountActionButton: "_9fMwjaiixbDViVPurFAa4",
          SteamGuardStatusHeader: "BblQleWhhGVHu1TTaGdBI",
          HeaderText: "f3AwNeCF2PApiJ1yy2SII",
          SteamGuardLogo: "_373XxWi-VMyuhak5AkKWJR",
          RemoveText: "_2kFtGHlyLy724EB-HfKU6P",
          SteamGuardStatusBody: "-haW8HUYitKrzvsXQj_y6",
          AuthorizedDevice: "_1AvzOfTQ0sRKrk6NjJCe1M",
          SteamGuardActionsCtn: "_2JiIyKqLJrcGM5ABcQJ12s",
          RightAligned: "_3tH8spjqRz_Z6mmB4uWK-m",
          NoSteamGuardCtn: "o7VeKaSFD1CCBeZaAx-fb",
          NoSteamGuardBody: "_1UZaReJ5vqaDDNrR92LUfB",
          GetMobileAppCtn: "_3l4-i07loydWsCfabu0uv4",
          GetMobileAppText: "_34Ckpic2BxcwJoDsL0LQ7O",
          QROuterCtn: "XuL3KGluGJQa0C1sMnVC1",
          QRPointingArrow: "_1h-ifgHMnM357x2V6pKErV",
          QRCode: "owjpvFLO7gx4wTw_RofLx",
          MobileAppLinksCtn: "_2_7_jSeZidSftWskkhJV84",
          MobileAppDownloadImages: "_1aj-IQUPvF3Cq-lE1msSiJ",
          AppleAppStoreImg: "_3h50gHmzosl6KqYJtKto9O",
          GooglePlayStoreImg: "_273YCymOUtX4V13BJ6p2uZ",
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
