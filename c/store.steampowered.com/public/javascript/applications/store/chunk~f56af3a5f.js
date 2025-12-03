(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [9139],
  {
    chunkid: (module) => {
      module.exports = {
        NewEmoticonIndicator: "_5BtHMjT9usALaSWHGugdV",
        NewEmoticonCircle: "u5Kx6dkUppvb-1qV4IIuy",
        EmoticonSelector: "_21dGPKyxoQJmk8T757A5tl",
        emoticon: "_1ZQW1wV5cNj3sDpibfbUqs",
        large: "_20l1z3ShpHQ9njRDYgy1I5",
        EmoticonSelector_Emoticons: "_1zMG_TAAO7uJ9DZvsPLfay",
        EmoticonSelector_Separator: "_2ETbIGwtl6SLfkb48DDgvG",
        EmoticonSelector_SeparatorBackground: "_3vIdbqkcpvxxyyRioKoQkz",
        EmoticonSelector_Controls: "_2ncH4xow85UXkBM0hcrY8l",
        EmoticonSelector_Item: "iSEjD9v1iZNJNbGHtDLZx",
        EmoticonSelector_Item_New: "_1C2S6Gne45ErVlr3yX0YuG",
        EffectHeading: "_1G4cTIWNmmp8hn-0UODGqo",
        StickerHeading: "_2o2L-YGgH5cNuwJW9nU9dm",
        GetFestive: "EOLiaNBZK-eUBTeiD-P4c",
        TopDivider: "xf7hAWPD4WwXxsyXYxFFo",
        BottomDivider: "_1gjpUnY8RyS8HpizGQvyFI",
        StickerButton: "_2fYj8pHe3bHHxWj4FucFvj",
        EffectButton: "_22MJpsSm-Ur5FU5WpYQKzn",
        EmoticonHover: "W_hPU2JmhTx3oUqDN9ADo",
        Info: "_29D_0UxbftoceIAKZktndo",
        Name: "_3zUR2KWg7TNWOQx2nDFyoh",
        AppName: "_2JWWOJGZuX70xQcA2QaBg",
        StickerHoverSticker: "_1HdRqbOgpBfEQzQ2py5nq5",
        EffectHoverEffect: "_1GZ-ESK0dV6oJBDhsU3RiH",
        PickerTab: "VrrpBsQE4GFseDy3cTw1Q",
        Clock: "_16xcLj__xBHmc9xDYmADhW",
        EmoticonItem: "P1aWuK_DhstDh-M08okCK",
      };
    },
    chunkid: (module) => {
      module.exports = {
        SpeakerOuter: "_3rRqPJdGrYx9YMtQMciIFY",
        Speaker: "_3F7-FkJu8-JstT7SouP8XJ",
        SpeakerPopup: "_3y7kVhhGmtbSgbZdte0EuV",
        SpeakerInfoOuter: "_1NC9nn23Pdd7FtZW6zM7he",
        SpeakerInfoInner: "_1bMpEcCbkVkKo1Oc02WFoJ",
        SpeakerTitle: "_2Vo0lUG19xIopljkxhtSod",
        SpeakerBio: "_2yP7s2N28D9PFHs9yUr3jD",
        SpeakerHover: "_16UyHpAXG98qQsfN8mBk3x",
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
        _ = __webpack_require__("chunkid");
      class _ {
        reactNodes = [];
        AppendText(_, _ = !1) {
          _.length &&
            (_
              ? this.reactNodes.push(
                  _.createElement(
                    "span",
                    {
                      "data-copytext": "",
                      "data-copystyle": "merge-adjacent",
                      "bbcode-text": _,
                    },
                    _,
                  ),
                )
              : this.reactNodes.push(_));
        }
        AppendNode(_) {
          this.reactNodes.push(_);
        }
        GetElements() {
          return this.reactNodes;
        }
      }
      class _ {
        m_decoratedAccumulator;
        constructor(_) {
          (0, _._)(_, "decorated accumulator cannot be null"),
            (this.m_decoratedAccumulator = _);
        }
        AppendText(_, _ = !1) {
          this.m_decoratedAccumulator.AppendText(_, _);
        }
        AppendNode(_) {
          this.m_decoratedAccumulator.AppendNode(_);
        }
        GetElements() {
          return this.m_decoratedAccumulator.GetElements();
        }
      }
      class _ extends _ {
        m_nStartCursor = 1;
        constructor(_, _, _) {
          super(_), (this.m_nStartCursor = void 0 !== _ ? _ : 1);
        }
        AppendText(_) {
          let _ = _;
          const _ = [];
          for (
            let _ = _.indexOf("\n", this.m_nStartCursor);
            -1 !== _;
            _ = _.indexOf("\n")
          )
            __webpack_require__.push(_.substr(0, _)),
              __webpack_require__.push(_.createElement("br")),
              (_ = _.substr(_ + 1));
          _.length && __webpack_require__.push(_),
            __webpack_require__.forEach((_) => {
              super.AppendNode(_);
            });
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.UNKNOWN = 0)] = "UNKNOWN"),
          (_[(_.TEXT = 1)] = "TEXT"),
          (_[(_.OPENTAG = 2)] = "OPENTAG"),
          (_[(_.CLOSETAG = 3)] = "CLOSETAG");
      })(_ || (_ = {}));
      class _ {
        m_fnAccumulatorFactory;
        m_dictComponents;
        constructor(_, _) {
          _ instanceof Map
            ? (this.m_dictComponents = _)
            : (this.m_dictComponents = new Map(Object.entries(_))),
            (this.m_fnAccumulatorFactory = _);
        }
        Parse(_, _, __webpack_require__ = !0) {
          const _ = (function (_, _) {
            const _ = [];
            let _ = {
                type: _.UNKNOWN,
                text: "",
              },
              _ = !1,
              _ = !1,
              _ = !1;
            for (let _ = 0; _ < _.length; _++) {
              const _ = _[_];
              switch (_.type) {
                case _.UNKNOWN:
                  "[" == _
                    ? ((_.type = _.OPENTAG), (_ = !0))
                    : ((_.type = _.TEXT),
                      "\\" == _ && _ ? (_ = !_) : (_.text += _));
                  break;
                case _.OPENTAG:
                case _.CLOSETAG:
                  if ("/" == _ && _)
                    (_.type = _.CLOSETAG), (_.text = ""), (_ = !1);
                  else if ("[" != _ || _)
                    if ("]" != _ || _)
                      "\\" == _ && _
                        ? ((_.text += _), (_ = !_), (_ = !1))
                        : ((_.text += _), (_ = !1), (_ = !1));
                    else {
                      const _ =
                          _.type == _.OPENTAG &&
                          "noparse" == _.text?.toLocaleLowerCase(),
                        _ =
                          _.type == _.CLOSETAG &&
                          "noparse" == _.text?.toLocaleLowerCase();
                      _ || (_ && !_)
                        ? ((_ = _(_)), (_.text += _))
                        : _
                          ? (_ = !0)
                          : _ && (_ = !1),
                        (_ = _(_, _)),
                        (_ = !1);
                    }
                  else (_ = _(_, _(_), _.OPENTAG)), (_ = !0);
                  break;
                case _.TEXT:
                  "[" != _ || _
                    ? "\\" == _ && _
                      ? (_ && (_.text += _), (_ = !_))
                      : ((_.text += _), (_ = !1))
                    : ((_ = _(_, _, _.OPENTAG)), (_ = !0));
              }
            }
            _.type != _.UNKNOWN &&
              (_.type == _.OPENTAG || _.type == _.CLOSETAG
                ? __webpack_require__.push(_(_))
                : __webpack_require__.push({
                    type: _.type,
                    text: _.text ?? "",
                  }));
            return _;
          })(_ || "", __webpack_require__);
          return this.Parse_BuildElements(_, _);
        }
        Parse_BuildElements(_, _) {
          let _ = this.m_fnAccumulatorFactory(void 0);
          const _ = [],
            _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
            _ = this.m_dictComponents,
            _ = (_) => !(!_.tag || !_.get(_.tag)?.autocloses);
          let _ = !1,
            _ = !0;
          const _ = (_, _) => {
            if (_ && _.node.tag === _.text && _.get(_.node.tag)) {
              const _ = _.get(_.node.tag),
                _ = {
                  tagname: _.node.tag,
                  args: _.node.args,
                  rawargs: _.node.rawargs,
                },
                _ = _(_.Constructor, _, ...__webpack_require__.GetElements());
              (_ = _.accumulator),
                Array.isArray(_)
                  ? _.forEach((_) => __webpack_require__.AppendNode(_))
                  : __webpack_require__.AppendNode(_),
                (_ = !!_.skipFollowingNewline),
                (_ = _.bWrapTextForCopying);
            } else if (_) {
              const _ = _.accumulator;
              _.AppendText("[" + _.node.text + "]", !1),
                __webpack_require__
                  .GetElements()
                  .forEach((_) => _.AppendNode(_)),
                _.AppendText("[/" + _.text + "]", !1),
                (_ = _),
                (_ = _.bWrapTextForCopying);
            }
          };
          for (
            _.forEach((_, _) => {
              if (_.type == _.TEXT) {
                const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                __webpack_require__.AppendText(_, _), (_ = !1);
              } else if (_.type == _.OPENTAG) {
                const _ = _.get(_.tag);
                if (_) {
                  const _ = _();
                  if (void 0 !== _) {
                    const _ = _.get(_.node.tag);
                    _ &&
                      _.autocloses &&
                      _.tag === _.node.tag &&
                      _(_.pop(), _.node);
                  }
                  _.push({
                    accumulator: _,
                    node: _,
                    bWrapTextForCopying: _,
                  }),
                    (_ = this.m_fnAccumulatorFactory(_)),
                    (_ = !!_.skipInternalNewline),
                    (_ = _.allowWrapTextForCopying ?? !1);
                } else
                  __webpack_require__.AppendText(
                    "[" + _.text + "]",
                    0 == _.length,
                  );
              } else if (_.type == _.CLOSETAG) {
                for (; _() && _().node.tag !== _.text && _(_().node); ) {
                  const _ = _.pop();
                  _(_, _.node);
                }
                if (_()?.node.tag == _.text) {
                  const _ = _.pop();
                  _(_, _);
                } else
                  __webpack_require__.AppendText(
                    "[/" + _.text + "]",
                    0 == _.length,
                  );
              }
            });
            _.length > 0;
          ) {
            const _ = _.pop();
            _(_, _.node);
          }
          return __webpack_require__.GetElements();
        }
      }
      function _(_, _, __webpack_require__ = _.UNKNOWN) {
        const { type: _, text: _ = "" } = _;
        if (_ == _.OPENTAG) {
          let _ = _.indexOf("=");
          const _ = _.indexOf(" ");
          let _, _;
          -1 != _ && (-1 == _ || _ < _) && (_ = _);
          let _ = "";
          _ > 0
            ? ((_ = _.substr(0, _).toLocaleLowerCase()),
              (_ = _.substr(_)),
              (_ = (function (_) {
                if (!_ || _.length < 1) return {};
                const _ = {};
                let _,
                  _ = "",
                  _ = "";
                !(function (_) {
                  (_[(_.PRE_NAME = 0)] = "PRE_NAME"),
                    (_[(_.IN_NAME = 1)] = "IN_NAME"),
                    (_[(_.POST_NAME = 2)] = "POST_NAME"),
                    (_[(_.IN_VALUE = 3)] = "IN_VALUE"),
                    (_[(_.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
                })(_ || (_ = {}));
                let _ = _.PRE_NAME,
                  _ = 0;
                "=" == _[0] && (_ = _.POST_NAME);
                let _ = !1;
                for (_++; _ < _.length; _++) {
                  const _ = _[_];
                  let _ = !0,
                    _ = !1;
                  switch (_) {
                    case _.PRE_NAME:
                      if ("=" == _) return {};
                      if (" " == _) continue;
                      _ = _.IN_NAME;
                      break;
                    case _.IN_NAME:
                      ("=" != _ && " " != _) ||
                        _ ||
                        (" " == _
                          ? ((_ = _.PRE_NAME), (_ = !0))
                          : (_ = _.POST_NAME),
                        (_ = !1));
                      break;
                    case _.POST_NAME:
                      " " == _
                        ? ((_ = _.PRE_NAME), (_ = !1), (_ = !0))
                        : '"' == _
                          ? ((_ = _.IN_QUOTED_VALUE), (_ = !1))
                          : (_ = _.IN_VALUE);
                      break;
                    case _.IN_VALUE:
                    case _.IN_QUOTED_VALUE:
                      ((" " == _ && _ != _.IN_QUOTED_VALUE && !_) ||
                        ('"' == _ && _ == _.IN_QUOTED_VALUE && !_)) &&
                        ((_ = _.PRE_NAME), (_ = !1), (_ = !0));
                  }
                  if (_)
                    if ("\\" != _ || _)
                      if (((_ = !1), _ == _.IN_NAME)) _ += _;
                      else {
                        if (_ != _.IN_VALUE && _ != _.IN_QUOTED_VALUE)
                          throw new Error(
                            "Not expecting to accumulate buffer in state " + _,
                          );
                        _ += _;
                      }
                    else _ = !0;
                  _ && ((_[_] = _), (_ = ""), (_ = ""));
                }
                _ != _.PRE_NAME && (_[_] = _);
                return _;
              })(_)))
            : ((_ = {}), (_ = _.toLocaleLowerCase())),
            _.push({
              type: _,
              text: _,
              tag: _,
              args: _,
              rawargs: _,
            });
        } else
          _ != _.UNKNOWN &&
            _.push({
              type: _,
              text: _,
            });
        return {
          type: _,
          text: "",
        };
      }
      function _(_) {
        let _ = "";
        return (
          _.type == _.CLOSETAG ? (_ = "[/") : _.type == _.OPENTAG && (_ = "["),
          {
            type: _.TEXT,
            text: _ + (_.text ?? ""),
          }
        );
      }
      class _ extends _ {
        m_renderingLanguage;
        constructor(_, _, _) {
          super(_, _ ?? (() => new _._())),
            (this.m_renderingLanguage = "string" == typeof _ ? (0, _._)(_) : _);
        }
        UpdateOverrideLanguage(_) {
          this.m_renderingLanguage = _;
        }
        ParseBBCode(_, _, __webpack_require__ = !0) {
          let _ = 0;
          const _ = this.Parse(
            _,
            (_, _, ..._) =>
              _.createElement(
                _,
                {
                  ..._,
                  context: _,
                  language: this.m_renderingLanguage,
                  key: "bbnode_" + _++,
                },
                ..._,
              ),
            __webpack_require__,
          );
          return _.length > 1
            ? _.createElement(_.Fragment, null, ..._)
            : 1 == _.length
              ? _[0]
              : null;
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        m_mapRegistrations = new Map();
        m_mapLoadPromises = new Map();
        m_mapCreatePromises = new Map();
        m_listChangeCallback = new Map();
        GetRegistration(_) {
          return this.m_mapRegistrations.get(_);
        }
        GetRegistrationChangeCallback(_) {
          return (
            this.m_listChangeCallback.has(_) ||
              this.m_listChangeCallback.set(_, new _._()),
            this.m_listChangeCallback.get(_)
          );
        }
        async LoadRegistration(_) {
          return (
            this.m_mapLoadPromises.has(_) ||
              this.m_mapLoadPromises.set(_, this.InternalLoadRegistration(_)),
            this.m_mapLoadPromises.get(_)
          );
        }
        async InternalLoadRegistration(_) {
          let _ = null;
          try {
            const _ =
                _._.STORE_BASE_URL +
                "saleaction/ajaxgetusergiveawayregistration",
              _ = {
                giveaway_name: _,
                sessionid: _._.SESSIONID,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (
              200 == _?.status &&
              _?.data?.success == _._.k_EResultOK &&
              _?.data?.registration
            )
              return (
                this.m_mapRegistrations.set(_, _?.data?.registration),
                this.GetRegistrationChangeCallback(_).Dispatch(
                  _?.data?.registration,
                ),
                _?.data?.registration
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CGiveawayRegistrationStore.InternalLoadRegistration failed: on giveawayName " +
                _ +
                " error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              registered: !1,
            }
          );
        }
        CreateRegistration(_) {
          return (
            this.m_mapCreatePromises.has(_) ||
              this.m_mapCreatePromises.set(
                _,
                this.InternalCreateRegistration(_),
              ),
            this.m_mapCreatePromises.get(_)
          );
        }
        async InternalCreateRegistration(_) {
          let _ = null;
          try {
            const _ =
                _._.STORE_BASE_URL +
                "saleaction/ajaxupdateusergiveawayregistration",
              _ = {
                giveaway_name: _,
                sessionid: _._.SESSIONID,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
              });
            if (
              200 == _?.status &&
              _?.data?.success == _._.k_EResultOK &&
              _?.data?.registration
            )
              return (
                this.m_mapRegistrations.set(_, _?.data?.registration),
                this.GetRegistrationChangeCallback(_).Dispatch(
                  _?.data?.registration,
                ),
                _?.data?.registration
              );
            _ = (0, _._)(_);
          } catch (_) {
            _ = (0, _._)(_);
          }
          return (
            console.error(
              "CGiveawayRegistrationStore.InternalCreateRegistration failed: on giveawayName " +
                _ +
                " error: " +
                _?.strErrorMsg,
              _,
            ),
            {
              registered: !1,
            }
          );
        }
        static s_Singleton;
        static Get() {
          return (
            _.s_Singleton ||
              ((_.s_Singleton = new _()),
              _.s_Singleton.Init(),
              "dev" == _._.WEB_UNIVERSE &&
                (window.g_SaleMiniGameItemDefStore = _.s_Singleton)),
            _.s_Singleton
          );
        }
        constructor() {}
        Init() {}
      }
      function _(_) {
        const [_, __webpack_require__] = (0, _.useState)(
          _.Get().GetRegistration(_),
        );
        return (
          (0, _.useEffect)(() => {
            void 0 === _ &&
              _.Get().LoadRegistration(_).then(__webpack_require__);
          }, [_, _]),
          (0, _._)(
            _.Get().GetRegistrationChangeCallback(_),
            __webpack_require__,
          ),
          _
        );
      }
      function _() {
        return {
          fnCreateRegistration: _.Get().CreateRegistration,
        };
      }
      (0, _._)([_._], _.prototype, "CreateRegistration", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return new _._(new _._(), 0);
      }
      function _(_) {
        const { text: _, languageOverride: __webpack_require__ } = _,
          [_] = (0, _.useState)(
            new _._(
              new Map([...Array.from(_._.entries())]),
              _,
              __webpack_require__,
            ),
          );
        return _.createElement(_.Fragment, null, _.ParseBBCode(_, {}));
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { text: _ = "", style: __webpack_require__, children: _ } = _;
        if (null == _) return _.createElement(_.Fragment, null, _);
        let _;
        if (
          ((_ =
            _ instanceof Array
              ? _.map((_) => (_ ? _.toString() : ""))
                  .filter((_) => _.length > 0)
                  .join("\n")
              : _.toString()),
          1 == _.Children.count(_))
        ) {
          let _ = _.Children.only(_);
          return _.cloneElement(_, {
            "data-copystyle": __webpack_require__,
            "data-copytext": _,
          });
        }
        return (
          console.log(
            `Error: CopyableText must be the parent of exactly one child:\n\tcopystyle=${__webpack_require__} copytext=${_}`,
          ),
          _.createElement(_.Fragment, null, _)
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { emoticon: _, large: __webpack_require__ } = _,
          [_, _] = (0, _._)(),
          [_, _] = _.useState(),
          _ = `:${_}:`,
          _ = _._.GetEmoticonURL(_, __webpack_require__);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _,
            {
              text: _,
              style: "merge-adjacent",
            },
            _.createElement("img", {
              ..._,
              src: _,
              className: (0, _._)(
                _().emoticon,
                __webpack_require__ ? _().large : void 0,
              ),
              "data-emoticon": _,
              alt: _,
              ref: _,
            }),
          ),
          _ &&
            _.createElement(_, {
              target: _,
              emoticon: _,
            }),
        );
      }
      function _(_) {
        const { target: _, emoticon: __webpack_require__ } = _,
          { data: _ } = (function (_) {
            return (0, _._)({
              queryKey: ["EmoticonHover", _],
              queryFn: async () => {
                const _ = `${_._.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(_)}?l=${encodeURIComponent(_._.LANGUAGE)}&origin=${self.origin}`,
                  _ = await fetch(_);
                if (200 != _.status)
                  throw `Error fetching emoticon: ${_.status} ${_.statusText}`;
                return await __webpack_require__.json();
              },
            });
          })(__webpack_require__);
        return _.createElement(
          _,
          {
            target: _,
            title: `:${__webpack_require__}:`,
            subtitle: _ && _.app_name ? _.app_name : void 0,
          },
          _.createElement(_, {
            emoticon: __webpack_require__,
            large: !0,
          }),
        );
      }
      const _ = ({
        target: _,
        title: _,
        subtitle: __webpack_require__,
        children: _,
      }) =>
        _.createElement(
          _._,
          {
            target: _,
            style: {
              zIndex: 1700,
            },
            className: _().EmoticonHover,
          },
          _,
          _.createElement(
            "div",
            {
              className: _().Info,
            },
            _.createElement(
              "div",
              {
                className: _().Name,
              },
              _ || _.createElement("span", null, " "),
            ),
            _.createElement(
              "div",
              {
                className: _().AppName,
              },
              __webpack_require__ || _.createElement("span", null, " "),
            ),
          ),
        );
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
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      const _ = (0, _._)((_) => {
        const _ = (0, _._)(_.photo, (0, _._)(_._.LANGUAGE)),
          _ = _ ? ("string" == typeof _ ? _ : _[1]) : null,
          _ = Boolean(_.title),
          _ = Boolean(_.company);
        return _.createElement(
          "div",
          {
            className: _().SpeakerPopup,
            onMouseLeave: _.fnClose,
          },
          _.createElement(
            "div",
            {
              className: _().SpeakerInfoOuter,
            },
            _.photo &&
              _.createElement("img", {
                src: _,
              }),
            _.createElement(
              "div",
              {
                className: _().SpeakerInfoInner,
              },
              _.createElement("div", null, _.name),
              (_ || _) &&
                _.createElement(
                  "div",
                  null,
                  _ &&
                    _.createElement(
                      "span",
                      {
                        className: _().SpeakerTitle,
                      },
                      _.title,
                    ),
                  _ && _ && _.createElement("span", null, ", "),
                  _ && _.createElement("span", null, _.company),
                ),
            ),
          ),
          _.bio &&
            _.createElement(
              "div",
              {
                className: _().SpeakerBio,
              },
              _.bio,
              _.bioString &&
                _.createElement(_._, {
                  text: _.bioString,
                }),
            ),
        );
      });
      class _ extends _.Component {
        static sm_embeddedElements = new _._("presenter-hover-source-elements");
        m_refAnchor = _.createRef();
        m_fnHidePopup;
        m_nScrollPosAtHoverStart;
        ClosePopup() {
          this.m_fnHidePopup &&
            (this.m_fnHidePopup(),
            (this.m_fnHidePopup = null),
            window.removeEventListener("scroll", this.OnScroll));
        }
        componentWillUnmount() {
          this.ClosePopup();
        }
        OnScroll() {
          Math.abs(window.scrollY - this.m_nScrollPosAtHoverStart) > 50 &&
            this.ClosePopup();
        }
        OnHover(_) {
          const _ = this.m_refAnchor.current;
          if (!_) return;
          const _ = {
              direction: "right",
              bEnablePointerEvents: !0,
              style: {
                maxWidth: 640,
                minHeight: _.clientHeight,
              },
              target: _,
            },
            _ = "presenter-hover-" + Math.floor(1e8 * Math.random());
          (this.m_fnHidePopup = () =>
            _.sm_embeddedElements.HideElement(_.ownerDocument, _)),
            window.addEventListener("scroll", this.OnScroll),
            (this.m_nScrollPosAtHoverStart = window.scrollY);
          _.sm_embeddedElements.ShowElementDelayed(
            _.ownerDocument,
            150,
            _.createElement(
              _._,
              {
                ..._,
              },
              _.createElement(_, {
                ...this.props,
                fnClose: this.OnLeave,
              }),
            ),
            _,
          );
        }
        OnLeave(_) {
          this.ClosePopup();
        }
        render() {
          return _.createElement(
            "div",
            {
              className: _().SpeakerHover,
              ref: this.m_refAnchor,
              onMouseEnter: this.OnHover,
              onFocus: this.OnHover,
              onMouseLeave: this.OnLeave,
              onBlur: this.OnLeave,
            },
            this.props.children,
          );
        }
      }
      function _(_) {
        const {
            photo: _,
            name: __webpack_require__,
            title: _,
            company: _,
            hidePhotoInCompactView: _,
          } = _,
          _ = (0, _._)(_, (0, _._)(_._.LANGUAGE)),
          _ = _ && !_ ? ("string" == typeof _ ? _ : _[1]) : null,
          _ = Boolean(_),
          _ = Boolean(_);
        return _.createElement(
          "div",
          {
            className: _().SpeakerOuter,
          },
          _.createElement(
            _,
            {
              ..._,
            },
            _.createElement(
              "div",
              {
                className: _().Speaker,
              },
              _.createElement(
                "div",
                {
                  className: _().SpeakerInfoOuter,
                },
                !!_ &&
                  _.createElement("img", {
                    src: _,
                  }),
                _.createElement(
                  "div",
                  {
                    className: _().SpeakerInfoInner,
                  },
                  _.createElement("div", null, __webpack_require__),
                  (_ || _) &&
                    _.createElement(
                      "div",
                      null,
                      _ &&
                        _.createElement(
                          "span",
                          {
                            className: _().SpeakerTitle,
                          },
                          _,
                        ),
                      _ && _ && _.createElement("span", null, ", "),
                      _ && _.createElement("span", null, _),
                    ),
                ),
              ),
            ),
          ),
        );
      }
      (0, _._)([_._], _.prototype, "ClosePopup", null),
        (0, _._)([_._], _.prototype, "OnScroll", null),
        (0, _._)([_._], _.prototype, "OnHover", null),
        (0, _._)([_._], _.prototype, "OnLeave", null);
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
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        state = {
          bRenderChildren: !1,
          nPrevRenderWidth: 0,
          nPrevRenderHeight: 0,
        };
        m_refContainer = _.createRef();
        BLoadAndUnload() {
          return "LoadAndUnload" == (this.props.mode || "JustLoad");
        }
        OnVisibilityChange(_) {
          let _ = this.state.bRenderChildren;
          if (_ == _) return;
          if (_ && !this.BLoadAndUnload()) return;
          let _ = 0,
            _ = 0;
          if (this.m_refContainer.current) {
            const _ = this.m_refContainer.current.GetBoundingClientRect();
            _ && ((_ = _.width), (_ = _.height));
          }
          this.setState({
            bRenderChildren: _,
            nPrevRenderWidth: _,
            nPrevRenderHeight: _,
          }),
            _ && this.props.onRender && this.props.onRender();
        }
        render() {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              holdGampadFocus: __webpack_require__,
              onRender: _,
              style: _,
              mode: _,
              ..._
            } = this.props,
            _ = this.state.bRenderChildren;
          let _ = _;
          if (!_) {
            const _ = this.state.nPrevRenderWidth || _,
              _ = this.state.nPrevRenderHeight || _;
            (void 0 === _ && void 0 === _) ||
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = this.BLoadAndUnload() ? "repeated" : "once";
          let _ = _.createElement(
            _._,
            {
              ref: this.m_refContainer,
              style: _,
              ..._,
              onVisibilityChange: this.OnVisibilityChange,
              trigger: _,
            },
            _ && this.props.children,
          );
          return (
            _ &&
              (_ = _.createElement(
                _._,
                {
                  focusableIfEmpty: !0,
                },
                _,
              )),
            _
          );
        }
      }
      (0, _._)([_._], _.prototype, "OnVisibilityChange", null);
    },
  },
]);
