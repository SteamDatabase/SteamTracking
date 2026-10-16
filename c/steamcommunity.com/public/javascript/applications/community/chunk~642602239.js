(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [79118],
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
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ {
          constructor() {
            _(this, "reactNodes", []);
          }
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
          constructor(_) {
            _(this, "m_decoratedAccumulator"),
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
          constructor(_) {
            super(_);
          }
          AppendText(_) {
            let _ = _;
            const _ = [];
            for (
              let _ = _.indexOf(`
`);
              _ !== -1;
              _ = _.indexOf(`
`)
            )
              _.push(_.substr(0, _)),
                _.push(_.createElement("br")),
                (_ = _.substr(_ + 1));
            _.length && _.push(_),
              _.forEach((_) => {
                super.AppendNode(_);
              });
          }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          var _;
          const _ =
            (_ = _ == null ? void 0 : _.jsondata) == null
              ? void 0
              : _.read_more_link;
          if (!_) return;
          const _ = (0, _._)(_).toLocaleLowerCase();
          return _ ? [_] : void 0;
        }
        function _(_, _) {
          return (0, _._)(_, _(_));
        }
        function _(_, _) {
          if (!_) return "";
          if (!(0, _._)(_)) return (0, _._)(_);
          const _ = _(_, _) ? (0, _._)(_) : _;
          return (_._.IN_CLIENT ? "steam://openurl_external/" : "") + _;
        }
        function _(_, _, _) {
          const _ = _.toLowerCase().startsWith("http") ? _ : "http://" + _;
          return (0, _.jsx)(_, {
            url: _,
            event: _,
            children: _ || _,
          });
        }
        const _ = (_) => {
          const { url: _, event: _, className: _, style: _ } = _;
          let _ = (0, _._)(_);
          _ = _(_, _);
          const _ = (0, _._)(_) ? "noopener nofollow" : void 0,
            _ =
              typeof _.children == "string" &&
              _.children.length > 0 &&
              _ &&
              !_.startsWith("steam://")
                ? (0, _._)(_)
                : void 0;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            direction: "top",
            children: (0, _.jsx)(_._, {
              className: _,
              href: _,
              rel: _,
              _: _._,
              style: _,
              children: _.children,
            }),
          });
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        var _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ {
          constructor(_, _) {
            _(this, "m_fnAccumulatorFactory"),
              _(this, "m_dictComponents"),
              _ instanceof Map
                ? (this.m_dictComponents = _)
                : (this.m_dictComponents = new Map(Object.entries(_))),
              (this.m_fnAccumulatorFactory = _);
          }
          Parse(_, _, _ = !0) {
            const _ = _(_ || "", _);
            return this.Parse_BuildElements(_, _);
          }
          Parse_BuildElements(_, _) {
            let _ = this.m_fnAccumulatorFactory(void 0);
            const _ = [],
              _ = () => (_.length < 1 ? void 0 : _[_.length - 1]),
              _ = this.m_dictComponents,
              _ = (_) => {
                var _;
                return !!(_.tag && (_ = _.get(_.tag)) != null && _.autocloses);
              };
            let _ = !1,
              _ = !0;
            const _ = (_, _) => {
              let _ = _.text.toLowerCase();
              if (_ && _.node.tag === _ && _.get(_.node.tag)) {
                const _ = _.get(_.node.tag),
                  _ = {
                    tagname: _.node.tag,
                    args: _.node.args,
                    rawargs: _.node.rawargs,
                  },
                  _ = _(_.Constructor, _, ..._.GetElements());
                (_ = _.accumulator),
                  Array.isArray(_)
                    ? _.forEach((_) => _.AppendNode(_))
                    : _.AppendNode(_),
                  (_ = !!_.skipFollowingNewline),
                  (_ = _.bWrapTextForCopying);
              } else if (_) {
                const _ = _.accumulator;
                _.AppendText("[" + _.node.text + "]", !1),
                  _.GetElements().forEach((_) => _.AppendNode(_)),
                  _.AppendText("[/" + _.text + "]", !1),
                  (_ = _),
                  (_ = _.bWrapTextForCopying);
              }
            };
            for (
              _.forEach((_, _) => {
                var _, _;
                if (_.type == _) {
                  const _ = _ ? _.text.replace(/^[\t\r ]*\n/g, "") : _.text;
                  _.AppendText(_, _), (_ = !1);
                } else if (_.type == _) {
                  const _ = _.get(_.tag);
                  if (!_) _.AppendText("[" + _.text + "]", _.length == 0);
                  else {
                    const _ = _();
                    if (_ !== void 0) {
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
                      (_ = (_ = _.allowWrapTextForCopying) != null ? _ : !1);
                  }
                } else if (_.type == _) {
                  let _ = _.text.toLowerCase();
                  for (; _() && _().node.tag !== _ && _(_().node); ) {
                    const _ = _.pop();
                    _(_, _.node);
                  }
                  if (((_ = _()) == null ? void 0 : _.node.tag) == _) {
                    const _ = _.pop();
                    _(_, _);
                  } else _.AppendText("[/" + _.text + "]", _.length == 0);
                }
              });
              _.length > 0;
            ) {
              const _ = _.pop();
              _(_, _.node);
            }
            return _.GetElements();
          }
        }
        function _(_, _, _ = !1) {
          let _ = "[" + _;
          _ != null && _[""] && (_ += `=${_ ? "" + _[""] : _("" + _[""])}`);
          for (const _ in _) _ !== "" && (_ += ` ${_(_)}=${_("" + _[_])}`);
          return (_ += "]"), _;
        }
        function _(_) {
          return `"${_.replace(/(\\|"|\])/g, "\\$1")}"`;
        }
        function _(_) {
          return _.replace(/(\\| |\])/g, "\\$1");
        }
        function _(_) {
          return `[/${_}]`;
        }
        function _(_) {
          return _.replace(/(\\|\[)/g, "\\$1");
        }
        function _(_, _, _ = _) {
          const { type: _, text: _ = "" } = _;
          if (_ == _) {
            let _ = _.indexOf("=");
            const _ = _.indexOf(" ");
            _ != -1 && (_ == -1 || _ < _) && (_ = _);
            let _,
              _,
              _ = "";
            _ > 0
              ? ((_ = _.substr(0, _).toLocaleLowerCase()),
                (_ = _.substr(_)),
                (_ = _(_)))
              : ((_ = {}), (_ = _.toLocaleLowerCase())),
              _.push({
                type: _,
                text: _,
                tag: _,
                args: _,
                rawargs: _,
              });
          } else
            _ != _ &&
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
          var _;
          let _ = "";
          return (
            _.type == _ ? (_ = "[/") : _.type == _ && (_ = "["),
            {
              type: _,
              text: _ + ((_ = _.text) != null ? _ : ""),
            }
          );
        }
        function _(_, _) {
          var _, _, _;
          const _ = [];
          let _ = {
              type: _,
              text: "",
            },
            _ = !1,
            _ = !1,
            _ = !1;
          for (let _ = 0; _ < _.length; _++) {
            const _ = _[_];
            switch (_.type) {
              case _:
                _ == "["
                  ? ((_.type = _), (_ = !0))
                  : ((_.type = _), _ == "\\" && _ ? (_ = !_) : (_.text += _));
                break;
              case _:
              case _:
                if (_ == "/" && _) (_.type = _), (_.text = ""), (_ = !1);
                else if (_ == "[" && !_) (_ = _(_, _(_), _)), (_ = !0);
                else if (_ == "]" && !_) {
                  const _ =
                      _.type == _ &&
                      ((_ = _.text) == null ? void 0 : _.toLocaleLowerCase()) ==
                        "noparse",
                    _ =
                      _.type == _ &&
                      ((_ = _.text) == null ? void 0 : _.toLocaleLowerCase()) ==
                        "noparse";
                  _ || (_ && !_)
                    ? ((_ = _(_)), (_.text += _))
                    : _
                      ? (_ = !0)
                      : _ && (_ = !1),
                    (_ = _(_, _)),
                    (_ = !1);
                } else
                  _ == "\\" && _
                    ? ((_.text += _), (_ = !_), (_ = !1))
                    : ((_.text += _), (_ = !1), (_ = !1));
                break;
              case _:
                _ == "[" && !_
                  ? ((_ = _(_, _, _)), (_ = !0))
                  : _ == "\\" && _
                    ? (_ && (_.text += _), (_ = !_))
                    : ((_.text += _), (_ = !1));
                break;
            }
          }
          return (
            _.type != _ &&
              (_.type == _ || _.type == _
                ? _.push(_(_))
                : _.push({
                    type: _.type,
                    text: (_ = _.text) != null ? _ : "",
                  })),
            _
          );
        }
        function _(_) {
          if (!_ || _.length < 1) return {};
          const _ = {};
          let _ = "",
            _ = "",
            _;
          ((_) => {
            (_[(_.PRE_NAME = 0)] = "PRE_NAME"),
              (_[(_.IN_NAME = 1)] = "IN_NAME"),
              (_[(_.POST_NAME = 2)] = "POST_NAME"),
              (_[(_.IN_VALUE = 3)] = "IN_VALUE"),
              (_[(_.IN_QUOTED_VALUE = 4)] = "IN_QUOTED_VALUE");
          })(_ || (_ = {}));
          let _ = 0,
            _ = 0;
          _[0] == "=" && (_ = 2);
          let _ = !1;
          for (_++; _ < _.length; _++) {
            const _ = _[_];
            let _ = !0,
              _ = !1;
            switch (_) {
              case 0:
                if (_ == "=") return {};
                if (_ == " ") continue;
                _ = 1;
                break;
              case 1:
                (_ == "=" || _ == " ") &&
                  !_ &&
                  (_ == " " ? ((_ = 0), (_ = !0)) : (_ = 2), (_ = !1));
                break;
              case 2:
                _ == " "
                  ? ((_ = 0), (_ = !1), (_ = !0))
                  : _ == '"'
                    ? ((_ = 4), (_ = !1))
                    : (_ = 3);
                break;
              case 3:
              case 4:
                ((_ == " " && _ != 4 && !_) || (_ == '"' && _ == 4 && !_)) &&
                  ((_ = 0), (_ = !1), (_ = !0));
                break;
            }
            if (_)
              if (_ == "\\" && !_) _ = !0;
              else if (((_ = !1), _ == 1)) _ += _;
              else if (_ == 3 || _ == 4) _ += _;
              else
                throw new Error(
                  "Not expecting to accumulate buffer in state " + _,
                );
            _ && ((_[_] = _), (_ = ""), (_ = ""));
          }
          return _ != 0 && (_[_] = _), _;
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
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ extends _._ {
          constructor(_, _, _) {
            super(_, _ != null ? _ : () => new _._()),
              _(this, "m_renderingLanguage"),
              (this.m_renderingLanguage =
                typeof _ == "string" ? (0, _.sfN)(_) : _);
          }
          UpdateOverrideLanguage(_) {
            this.m_renderingLanguage = _;
          }
          ParseBBCode(_, _, _ = !0) {
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
                    key: `bbnode_${_++}`,
                  },
                  ..._,
                ),
              _,
            );
            return _.length > 1
              ? _.createElement(_.Fragment, null, ..._)
              : _.length == 1
                ? _[0]
                : null;
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        function _(_) {
          if (!_) return _;
          const _ = _.trim(),
            _ = _.replace(/^[\u0000-\u0020]+/, "")
              .replace(/[\t\n\r]/g, "")
              .toLowerCase();
          return _.startsWith("javascript:") ||
            _.startsWith("data:") ||
            _.startsWith("vbscript:")
            ? ""
            : _;
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = {
          Box: _.DynamicLinkBox,
          Preview: _.DynamicLink_Preview,
          Type: _.DynamicLink_Type,
        };
        function _(_) {
          var _;
          return (0, _.jsx)("img", {
            className: _.DynamicLink_Preview,
            src: _.strURL || void 0,
            alt: (_ = _.strAlt) != null ? _ : "",
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Content,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Name,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Author,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.DynamicLink_AuthorName,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_Description,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.DynamicLink_Date,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.DynamicLink_YoutubeViews,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Dynamiclink_Content,
            children: _.children,
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        function _(_) {
          return _.replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&");
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "events/ajaxgetdynamiceventmetadata";
        async function _(_) {
          const _ =
              _._.STORE_BASE_URL + _ + "?" + new URLSearchParams(_).toString(),
            _ = await fetch(_, {
              credentials: "include",
            });
          if (!_._) throw new Error(`${_} answered ${_.status}`);
          return await _.json();
        }
        function _(_) {
          return ["DynamicEventMetadata", "youtube", _];
        }
        function _(_, _ = !0) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              var _, _, _;
              const _ = await _({
                  youtubevideoids: _,
                }),
                _ =
                  (_ =
                    (_ = _.youtube) == null
                      ? void 0
                      : _.find((_) => _.videoid == _)) != null
                    ? _
                    : (_ = _.youtube) == null
                      ? void 0
                      : _[0];
              if (!_) throw new Error(`no metadata for youtube video ${_}`);
              return {
                ..._,
                title: _(_.title),
                description: _(_.description),
              };
            },
            enabled: _ && !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function _(_, _ = !0) {
          return (0, _._)(_(_, _));
        }
        function _(_) {
          return ["DynamicEventMetadata", "sharedfile", _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: async () => {
              var _, _, _;
              const _ = await _({
                  sharedfileids: _,
                }),
                _ =
                  (_ =
                    (_ = _.sharedfiles) == null
                      ? void 0
                      : _.find((_) => _.sharedfileid == _)) != null
                    ? _
                    : (_ = _.sharedfiles) == null
                      ? void 0
                      : _[0];
              if (!_) throw new Error(`no metadata for shared file ${_}`);
              return {
                ..._,
                title: _(_.title),
                description: _(_.description),
                type: _(_.type),
              };
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function _(_) {
          return (0, _._)(_(_));
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = ((_) => (
            (_.left = "leftthumb"),
            (_.right = "rightthumb"),
            (_.full = "full"),
            (_.summary = "summary"),
            _
          ))(_ || {});
        function _(_) {
          return _ == "full"
            ? _().sizeFull
            : (0, _._)(
                _().sizeThumb,
                _ == "leftthumb" ? _().floatLeft : _().floatRight,
              );
        }
        function _(_) {
          var _, _, _;
          const {
              videoID: _,
              bShowVideoImmediately: _,
              bAutoPlay: _,
              nStartSeconds: _,
              align: _ = "full",
            } = _,
            [_, _] = (0, _.useState)(!_),
            { data: _, isSuccess: _ } = (0, _._)(_, _);
          if (_) {
            const _ =
                (_ = _ == null ? void 0 : _.title) != null
                  ? _
                  : (0, _._)("#Loading"),
              _ = (_ = _ == null ? void 0 : _.views) != null ? _ : "0",
              _ = (_ = _ == null ? void 0 : _.description) != null ? _ : "",
              _ = () => _(!1),
              _ = (_) => {
                (_.key == "Enter" || _.key == " ") && (_.preventDefault(), _());
              };
            return (0, _.jsxs)("div", {
              className: _._.Box,
              role: "button",
              tabIndex: 0,
              onClick: _,
              onKeyDown: _,
              children: [
                (0, _.jsx)(_._, {
                  strURL: "https://img.youtube.com/vi/" + _ + "/0.jpg",
                }),
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      children: (0, _._)("#EventEditor_YouTubeVideoTitle", _),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _._)(
                        "#EventEditor_YouTubeVideoViews",
                        (0, _._)(Number(_)),
                      ),
                    }),
                    (0, _.jsxs)(_._, {
                      children: [
                        _ && _,
                        !_ &&
                          (0, _.jsx)(_._, {
                            size: "medium",
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          } else
            return (0, _.jsx)(_._, {
              video: _,
              children: (0, _.jsxs)("div", {
                className: (0, _._)(_().PreviewYouTubeVideo, _(_)),
                _: _,
                children: [
                  (0, _.jsx)("img", {
                    className: _().PlaceholderImg,
                    alt: "",
                    src:
                      _._.COMMUNITY_CDN_URL +
                      "public/shared/images/responsive/youtube_16x9_placeholder.gif",
                  }),
                  (0, _.jsx)(_._, {
                    video: _,
                    autoplay: _ != null ? _ : !1,
                    startSeconds: _,
                    controls: !0,
                    playsInline: !0,
                    autopause: !0,
                    showFullscreenBtn: !0,
                  }),
                ],
              }),
            });
        }
        function _(_, _) {
          if (_._.EREALM === _._.k_ESteamRealmChina) return null;
          const _ = (0, _._)(_);
          return (_ == null ? void 0 : _.strVideoID) !== void 0
            ? (0, _.jsx)(_, {
                videoID: _.strVideoID,
                nStartSeconds: _.nStartSeconds,
                bShowVideoImmediately: !1,
              })
            : (0, _._)(_, _ == null ? void 0 : _.event);
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
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
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
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = 22,
          _ = 23,
          _ = 24,
          _ = 25,
          _ = 26,
          _ = 27,
          _ = 28,
          _ = 29,
          _ = 30,
          _ = 31,
          _ = 32,
          _ = 33,
          _ = 34,
          _ = 35,
          _ = 36,
          _ = 37,
          _ = 38,
          _ = 39,
          _ = 40,
          _ = 41,
          _ = 42,
          _ = 43,
          _ = 44,
          _ = 45,
          _ = 46,
          _ = 47,
          _ = 48,
          _ = 49,
          _ = 50,
          _ = 51,
          _ = 52,
          _ = 53,
          _ = 54,
          _ = 55,
          _ = 56,
          _ = 57,
          _ = 58,
          _ = 59,
          _ = 60,
          _ = 61,
          _ = 62,
          _ = 63,
          _ = 64,
          _ = 65,
          _ = 66,
          _ = 67,
          _ = 68,
          _ = 69,
          _ = 70,
          _ = 71,
          _ = 72,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4;
        var _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          return "unknown EVirtualItemRewardEvent ( " + _ + " )";
        }
        function _(_) {
          return "unknown EVirtualItemRewardRarity ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGameCardDropMethod ( " + _ + " )";
        }
        function _(_) {
          return "unknown ECommunityItemSalienType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ECommunityItemDropRate ( " + _ + " )";
        }
        function _(_) {
          return "unknown ECommunityItemAttribute ( " + _ + " )";
        }
        function _(_) {
          return "unknown ECommunityItemApprovalState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETradabilityPreference ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESummerSale2017TaskType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EWinterSale2015ARGBadge ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESummerSale2021Genre ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESummerSale2021StoryChoice ( " + _ + " )";
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.communityitemid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    communityitemid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    item_type: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    owner: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    attributes: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    used: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    owner_origin: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    amount: {
                      _: 8,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.attributeid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    attributeid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    value: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_CommunityItem_Attribute";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.filter_appids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    filter_appids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.items || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    items: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityInventory_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    item_type: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_channel_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    keyvalues_as_json: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.item_definitions || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    item_definitions: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.item_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    item_type: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    item_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_title: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_description: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_image_small: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_image_large: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_key_values: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_series: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    item_class: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    editor_accountid: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    active: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    item_image_composed: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_image_composed_foil: {
                      _: 14,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    deleted: {
                      _: 15,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    item_last_changed: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    broadcast_channel_id: {
                      _: 17,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    item_movie_webm: {
                      _: 18,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_movie_mp4: {
                      _: 19,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_movie_webm_small: {
                      _: 20,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_movie_mp4_small: {
                      _: 21,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    item_internal_name: {
                      _: 22,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    communityitemid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    activate: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_ActivateProfileModifierItem_Response";
          }
        }
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timestamp_start || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timestamp_start: {
                      _: 1,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    timestamp_end: {
                      _: 2,
                      _: 4294967295,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.num_trading_cards || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    num_trading_cards: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_GetNumTradingCardsEarned_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.eventid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    eventid: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    include_inactive: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.eventid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    eventid: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    item_bucket: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    active: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    rarity: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    package_to_grant: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_item_id: {
                      _: 7,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    community_item_class: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    community_item_type: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    loyalty_point_type: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    amount: {
                      _: 11,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    rtime_time_active: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    loyalty_reward_defid: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    user_badge_to_grant: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    user_badge_level: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    virtual_item_def_id: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVirtualItemRewardDefinition";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rewards || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rewards: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_VirtualItemRewardDefinition_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        const _ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.eventid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    eventid: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    itemsdefs: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    action: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let _ = _;
        function _(_) {
          return (
            "unknown CQuest_SetVirtualItemRewardDefinition_Request_EActionType ( " +
            _ +
            " )"
          );
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(), _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _
              ? {
                  $jspbMessageInstance: _,
                }
              : {};
          }
          static fromObject(_) {
            return new _();
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _;
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {}
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CQuest_SetVirtualItemRewardDefinition_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Quest.GetCommunityInventory#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetCommunityInventory = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Quest.GetCommunityItemDefinitions#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 4,
              },
            );
          }
          _.GetCommunityItemDefinitions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Quest.ActivateProfileModifierItem#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ActivateProfileModifierItem = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Quest.GetNumTradingCardsEarned#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetNumTradingCardsEarned = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Quest.GetVirtualItemRewardDefinition#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 4,
              },
            );
          }
          _.GetVirtualItemRewardDefinition = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Quest.SetVirtualItemRewardDefinition#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 4,
              },
            );
          }
          _.SetVirtualItemRewardDefinition = _;
        })(_ || (_ = {}));
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
        function _(_) {
          const _ = (0, _._)(_, _.options);
          return (0, _.jsx)("span", {
            ref: _,
            style: {
              fontSize: 0,
            },
          });
        }
        const _ = _.forwardRef(function (_, _) {
          const { onLeave: _, onEnter: _, options: _, ..._ } = _,
            _ = (0, _._)(_, _.options),
            _ = (0, _._)(_, _);
          return (0, _.jsx)("div", {
            ref: _,
            ..._,
          });
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = JSON.parse(
          `{"h":{"countries":{"AF":"Afghanistan","AX":"Aland Islands","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cabo Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","XC":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote d'Ivoire","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GG":"Guernsey","GY":"Guyana","HT":"Haiti","HM":"Heard and Mc Donald Islands","VA":"Holy See(Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IQ":"Iraq","IE":"Ireland","IM":"Isle of Man","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JE":"Jersey","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KR":"Korea, Republic of","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People's Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","LY":"Libya","MO":"Macau","MK":"North Macedonia, Republic of","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","ME":"Montenegro","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","AN":"Netherlands Antilles","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","RS":"Serbia","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SY":"Syria","SZ":"Eswatini","SE":"Sweden","CH":"Switzerland","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe"},"eucountries":{"AT":"Austria","BE":"Belgium","BG":"Bulgaria","HR":"Croatia","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","EE":"Estonia","FI":"Finland","FR":"France","DE":"Germany","GR":"Greece","HU":"Hungary","IE":"Ireland","IT":"Italy","LV":"Latvia","LT":"Lithuania","LU":"Luxembourg","MT":"Malta","NL":"Netherlands","PL":"Poland","PT":"Portugal","RO":"Romania","SK":"Slovakia","SI":"Slovenia","ES":"Spain","SE":"Sweden","GB":"United Kingdom"},"eeacountries":{"NO":"Norway","IS":"Iceland","LI":"Liechtenstein"},"usstates":{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FM":"Federated States of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"U.S. Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming","AA":"Armed Forces Americas","AE":"Armed Forces","AP":"Armed Forces Pacific"}}}`,
        )._;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          var _, _, _;
          switch (_.preference_state) {
            case _._._:
            case _._._:
              return !0;
            case _._._:
              return !1;
            case _._._:
            default:
              switch (_) {
                case "youtube":
                  return (_ = _.third_party_content) == null
                    ? void 0
                    : _.youtube;
                case "vimeo":
                  return (_ = _.third_party_content) == null ? void 0 : _.vimeo;
                case "sketchfab":
                  return (_ = _.third_party_content) == null
                    ? void 0
                    : _.sketchfab;
                case "generic":
                  return !1;
              }
          }
        }
        function _(_) {
          switch (_.preference_state) {
            case _._._:
            case _._._:
              return !1;
            default:
              return !0;
          }
        }
        function _(_, _, _, _) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => _(_, _, _, _),
          };
        }
        async function _(_, _, _, _) {
          if ((0, _._)(_))
            return {
              version: _._._,
              preference_state: _._._,
            };
          if (_) {
            const _ = (await _._.GetCookiePreferences(_, {}))
              .Body()
              .toObject().preferences;
            if (_ && _.version !== void 0 && _.version != _._._) return _;
          }
          try {
            const _ = (0, _._)(_._);
            if (_) {
              const _ = JSON.parse(_);
              if (_ && _.version !== void 0 && _.version != _._._) return _;
            }
          } catch {}
          return _ in _.eucountries || _ in _.eeacountries || _ === "CH"
            ? {
                version: _._._,
                preference_state: _._._,
              }
            : {
                version: _._._,
                preference_state: _._._,
              };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return {
            queryKey: ["CookiePreferences"],
            queryFn: () => _(_, _._.logged_in, _._.COUNTRY, _._.EREALM),
          };
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)(_(_));
        }
        function _(_) {
          const { data: _ } = _();
          return _ ? _(_, _) : void 0;
        }
        function _() {
          const { data: _ } = _();
          return _ ? !_(_) : void 0;
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
          _ = Object.defineProperty,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          return !(
            (!(0, _._)(_.sPoster) && !(0, _._)(_.sPoster)) ||
            (_.rgVideoSources &&
              _.rgVideoSources.some((_) => !(0, _._)(_.sURL))) ||
            (_.rgVideoTracks && _.rgVideoTracks.some((_) => !(0, _._)(_.sURL)))
          );
        }
        const _ = class _ {
          constructor() {
            _(this, "m_bUserHasVolumePreference", !1),
              _(this, "m_flVolumePreference", 0);
          }
          BUserHasVolumePreference() {
            return this.m_bUserHasVolumePreference;
          }
          SetVolumePreference(_) {
            (this.m_flVolumePreference = _),
              (this.m_bUserHasVolumePreference = !0);
          }
          GetVolumePreference() {
            return this.m_flVolumePreference;
          }
          BVolumePreferenceMuted() {
            return this.m_flVolumePreference < 0.001;
          }
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
        };
        _(_, "s_Singleton");
        let _ = _;
        const _ = (0, _.forwardRef)(function (_, _) {
          const {
              video: _,
              bAutoPlay: _,
              bControls: _,
              bLoop: _,
              bMuted: _,
              className: _,
              mediaScale: _,
              flAspectRatio: _,
              onClick: _,
              altText: _,
            } = _,
            _ = (0, _.useMemo)(() => {
              var _;
              return !!(
                (_ = _.rgVideoTracks) != null &&
                _.some((_) => _.sKind == "subtitles" || _.sKind == "captions")
              );
            }, [_.rgVideoTracks]),
            [_, _] = _.useState(!1),
            _ = _();
          if (!_.rgVideoSources || !_.rgVideoSources.length) return null;
          const _ = _(_);
          let _;
          (!_ || (_ && _._.EUNIVERSE == _.wLO)) && (_ = "anonymous");
          const _ = _ || (_ && _.Get().BVolumePreferenceMuted()),
            _ = _.sPoster ? _(_.sPoster, _) : "",
            _ = (_) => {
              const _ = _.target,
                _ = _.muted ? 0 : _.volume;
              _ && _.Get().SetVolumePreference(_);
            },
            _ = (_) => {
              const _ = _.target,
                _ = _.currentTime == 0,
                _ = _.Get().BUserHasVolumePreference();
              if ((_(!0), !!_))
                if (!_ && !_) {
                  const _ = _.muted ? 0 : _.volume;
                  _.Get().SetVolumePreference(_);
                } else
                  _ &&
                    ((_.volume = _.Get().GetVolumePreference()),
                    (_.muted = _.Get().BVolumePreferenceMuted()));
            };
          return (0, _.jsxs)("video", {
            width: "100%",
            height: "auto",
            autoPlay: _,
            muted: _,
            playsInline: !0,
            controls: _,
            poster: _,
            loop: _,
            crossOrigin: _,
            onVolumeChange: _,
            onPlay: _,
            ref: _,
            className: _,
            onClick: _,
            "aria-label": _,
            style: {
              width: _ && _ >= 1 && _ < 100 ? `${_}%` : void 0,
              aspectRatio: _ || void 0,
            },
            children: [
              (0, _.jsx)(_, {
                rgVideoSources: _.rgVideoSources,
                strCacheBreakOrigin: _,
              }),
              (0, _.jsx)(_, {
                rgVideoTracks: _.rgVideoTracks,
                strCacheBreakOrigin: _,
              }),
            ],
          });
        });
        function _() {
          const _ = window.location.href,
            _ = [
              _._.STORE_BASE_URL,
              _._.COMMUNITY_BASE_URL,
              _._.PARTNER_BASE_URL,
              _._.HELP_BASE_URL,
              _._.STATS_BASE_URL,
              _._.STORE_CHECKOUT_BASE_URL,
            ].find((_) => _ && _.startsWith(_));
          if (_) return _;
          try {
            return new URL(_).origin + "/";
          } catch {
            return "unknown";
          }
        }
        function _(_, _) {
          if (_) {
            if ((0, _._)(_)) return _;
            try {
              const _ = new URL(_);
              return (
                (_.search = (_.search ? _.search + "&" : "?") + "origin=" + _),
                _.toString()
              );
            } catch {
              return _;
            }
          }
        }
        function _(_) {
          const { rgVideoSources: _, strCacheBreakOrigin: _ } = _;
          return _.filter((_) => !!_.sURL).map((_) =>
            (0, _.jsx)(
              "source",
              {
                src: _(_.sURL, _),
                type: _.sFormat,
              },
              _.sURL,
            ),
          );
        }
        function _(_) {
          const { rgVideoTracks: _, strCacheBreakOrigin: _ } = _;
          return _
            ? _.map((_, _) =>
                (0, _.jsx)(
                  _,
                  {
                    track: _,
                    rgVideoTracks: _,
                    strCacheBreakOrigin: _,
                  },
                  _,
                ),
              )
            : null;
        }
        function _(_) {
          const { track: _, rgVideoTracks: _, strCacheBreakOrigin: _ } = _;
          let _ = _.eLanguage;
          if (_._.EREALM == _._.k_ESteamRealmChina)
            if (_._.IsELanguageValidInRealm(_, _._.k_ESteamRealmChina))
              _ = _._.GetELanguageFallback(_);
            else if (_ === _.NFp) {
              if (_.find((_) => _._.GetELanguageFallback(_.eLanguage) === _))
                return null;
            } else return null;
          else if (!_._.IsELanguageValidInRealm(_, _._.k_ESteamRealmGlobal))
            return null;
          return (0, _.jsx)("track", {
            src: _(_.sURL, _),
            kind: _.sKind,
            default: _.bDefault,
            srcLang: (0, _.wwZ)(_),
            label: (0, _._)(_),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = new Map([
            [
              "b",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "i",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "h1",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h2",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h3",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h4",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "h5",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "center",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "smalltext",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
            [
              "u",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "strike",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "spoiler",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "hr",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "noparse",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "url",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "quote",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "pullquote",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "code",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "c",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "list",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
              },
            ],
            [
              "olist",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
              },
            ],
            [
              "*",
              {
                Constructor: _,
                autocloses: !0,
                skipInternalNewline: !0,
              },
            ],
            [
              "table",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
              },
            ],
            [
              "tr",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "th",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "td",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                skipFollowingNewline: !0,
              },
            ],
            [
              "expand",
              {
                Constructor: _,
                autocloses: !1,
                skipInternalNewline: !0,
                allowWrapTextForCopying: !0,
              },
            ],
            [
              "calendarevent",
              {
                Constructor: _,
                autocloses: !0,
              },
            ],
            [
              "doclink",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "color",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "bgcolor",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "p",
              {
                Constructor: _,
                autocloses: !1,
                skipFollowingNewline: !0,
              },
            ],
          ]),
          _ = new Map([
            [
              "looping_media",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
            [
              "video",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
            [
              "youtubeorvideo",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
            [
              "previewyoutube",
              {
                Constructor: _._,
                autocloses: !1,
              },
            ],
          ]);
        function _(_, _) {
          return _ === void 0 ? _[""] : _[_];
        }
        function _(_, _) {
          return (_) =>
            _({
              ..._,
              className: _,
            });
        }
        function _(_) {
          return (0, _.jsx)("b", {
            className: _().Bold,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("i", {
            className: (0, _._)(_().Italic, "BB_Italic"),
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("u", {
            className: _().Underline,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("s", {
            className: _().Strike,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsxs)("p", {
            className: _().Paragraph,
            children: [_.children, (0, _.jsx)("wbr", {})],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _().Paragraph,
            role: "paragraph",
            children: [_.children, (0, _.jsx)("wbr", {})],
          });
        }
        function _(_, _, _) {
          let _ = _(_.args, "id");
          return (
            _ || (_ = _(_.args)),
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, _.jsx)(_, {
              _: _ || void 0,
              className: (0, _._)(_, _.className),
              children: _.children,
            })
          );
        }
        function _(_) {
          return _("h1", _, (0, _._)(_().Header1, "BB_Header1"));
        }
        function _(_) {
          return _("h2", _, (0, _._)(_().Header2, "BB_Header2"));
        }
        function _(_) {
          return _("h3", _, (0, _._)(_().Header3, "BB_Header3"));
        }
        function _(_) {
          return _("h4", _, (0, _._)(_().Header4, "BB_Header4"));
        }
        function _(_) {
          return _("h5", _, (0, _._)(_().Header5, "BB_Header5"));
        }
        function _(_) {
          let _ = _(_.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, _.jsx)("span", {
              _: _ || void 0,
              className: (0, _._)(_().CenterSpan, "BB_Center"),
              children: _.children,
            })
          );
        }
        function _(_) {
          return _("div", _, (0, _._)(_().SmallText, "BB_SmallText"));
        }
        function _(_) {
          let [_, _] = _.useState(!1),
            _ = _.useCallback(() => {
              _(!_);
            }, [_]);
          return (0, _.jsx)(_._, {
            className: (0, _._)(_().Spoiler, _ && _().Revealed),
            focusable: !0,
            onActivate: _,
            onOKActionDescription: (0, _._)(
              _ ? "#Bbcode_Spoiler_Hide" : "#Bbcode_Spoiler_Show",
            ),
            children: (0, _.jsx)("span", {
              className: _().SpoilerText,
              children: _.children,
            }),
          });
        }
        function _(_) {
          return (0, _.jsx)("hr", {
            className: _()._,
          });
        }
        function _(_) {
          const _ = _(_.args);
          return (0, _.jsx)("span", {
            style: {
              color: _,
            },
            children: _.children,
          });
        }
        function _(_) {
          const _ = _(_.args);
          return (0, _.jsx)("span", {
            style: {
              backgroundColor: _,
            },
            children: _.children,
          });
        }
        function _(_) {
          let _ = (0, _._)(_(_.args));
          if (!_) {
            const _ = _.children;
            typeof _ == "string" && (0, _._)(_) && (_ = (0, _._)(_));
          }
          const _ = _(_.args, "style") == "button" ? _().LinkButton : void 0,
            _ = _ && _(_.args, "buttoncolor");
          let _ = _(_.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            _ === void 0 && !_
              ? _.children || ""
              : _ === void 0 ||
                  (typeof _ == "string" && _.length > 0 && _[0] == "#")
                ? (0, _.jsx)("a", {
                    href: _ != null ? _ : null,
                    _: _,
                    children: _.children,
                  })
                : (0, _.jsx)(_, {
                    className: _,
                    href: _,
                    _: _,
                    style: {
                      backgroundColor: _,
                    },
                    children: _.children,
                  })
          );
        }
        function _(_) {
          const _ = _(_.args),
            _ = _(_.args, "style") == "button" ? _().LinkButton : void 0,
            _ = _ && _(_.args, "buttoncolor");
          return (0, _.jsx)(_, {
            className: _,
            style: {
              backgroundColor: _,
            },
            href: `${_._.PARTNER_BASE_URL}doc/${_}`,
            children: _.children,
          });
        }
        const _ = (_) => {
          const { href: _, ..._ } = _;
          let _ = (0, _._)(_ != null ? _ : ""),
            _;
          (0, _._)(_)
            ? ((_ =
                (_._.IN_CLIENT ? "steam://openurl_external/" : "") +
                (0, _._)(_)),
              (_ = "noopener nofollow"))
            : (_ = (0, _._)(_));
          const _ =
            typeof _.children == "string" &&
            _.children.length > 0 &&
            _ &&
            !_.startsWith("steam://")
              ? (0, _._)(_)
              : void 0;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            direction: "top",
            children: (0, _.jsx)(_._, {
              ..._,
              href: _,
              rel: _,
              children: _.children,
            }),
          });
        };
        function _(_) {
          return jsx("a", {
            className: styles.DisabledMouseEvents,
            href: _(_.args),
            children: _.children,
          });
        }
        function _(_) {
          const _ = _(_.args, "author");
          return (0, _.jsxs)("blockquote", {
            className: (0, _._)(_().BlockQuote, _.className),
            children: [
              !!_ &&
                (0, _.jsxs)("div", {
                  className: _().QuoteAuthor,
                  children: [
                    (0, _._)("#Bbcode_Originally_Posted_By") + " ",
                    " ",
                    (0, _.jsx)("b", {
                      children: _ + ":",
                    }),
                  ],
                }),
              _.children,
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().PullQuote,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("code", {
            className: _().CodeBlock,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("code", {
            className: _().Code,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("ul", {
            className: (0, _._)(_().List, "bullets"),
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("ol", {
            className: _().OrderedList,
            children: _.children,
          });
        }
        function _(_) {
          let _ = _(_.args, "id");
          return (
            _ &&
              typeof _ == "string" &&
              _.length > 0 &&
              _[0] === "#" &&
              (_ = _.substring(1)),
            (0, _.jsx)("li", {
              className: _().ListItem,
              _: _ || void 0,
              children: _.children,
            })
          );
        }
        function _(_) {
          return _.children;
        }
        function _(_) {
          const _ = _(_.args, "noborder"),
            _ = _(_.args, "equalcells"),
            _ = _(_.args, "colwidth");
          return (0, _.jsxs)("table", {
            className: (0, _._)(
              _().Table,
              "BB_Table",
              _ && _().NoBorder,
              _ && _().EqualCells,
            ),
            children: [
              _ &&
                (0, _.jsx)("colgroup", {
                  children: _.split(",").map((_, _) =>
                    (0, _.jsx)(
                      _,
                      {
                        width: _,
                      },
                      _,
                    ),
                  ),
                }),
              (0, _.jsx)("tbody", {
                children: _.children,
              }),
            ],
          });
        }
        function _(_) {
          const { width: _ } = _;
          let _;
          return (
            _ &&
              parseInt(_) > 0 &&
              (_ = {
                width: `${_}px`,
              }),
            (0, _.jsx)("col", {
              style: _,
            })
          );
        }
        function _(_) {
          return (0, _.jsx)("tr", {
            className: (0, _._)(_().TableRow, "BB_TableRow"),
            children: _.children,
          });
        }
        function _(_, _) {
          const _ = _(_.args, "width"),
            _ = _(_.args, "colspan"),
            _ = _(_.args, "rowspan"),
            _ = {};
          return (
            _ && parseInt(_) > 1 && (_.colSpan = parseInt(_)),
            _ && parseInt(_) > 1 && (_.rowSpan = parseInt(_)),
            (0, _.jsx)(_, {
              className: (0, _._)(_().TableCell, _ == "td" && "BB_TableData"),
              ..._,
              style: _
                ? {
                    width: _,
                  }
                : void 0,
              children: _.children,
            })
          );
        }
        function _(_) {
          return _("th", _);
        }
        function _(_) {
          return _("td", _);
        }
        function _(_, _, _, _) {
          switch (_) {
            case "details":
              return {
                collapsed: "#Bbcode_Expand_Details_Collapsed",
                expanded: "#Bbcode_Expand_Details_Expanded",
                style: _().ExpandSection_Details,
              };
            case "spoiler":
              return {
                collapsed: "#Bbcode_Expand_Spoiler_Collapsed",
                expanded: "#Bbcode_Expand_Spoiler_Expanded",
                style: _().ExpandSection_Spoiler,
              };
            case "title":
              return {
                collapsed: _ || _ || "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: _ || _ || "#Bbcode_Expand_ShowMore_Expanded",
                style: _().ExpandSection_WithTitle,
              };
            default:
            case "showmore":
              return {
                collapsed: "#Bbcode_Expand_ShowMore_Collapsed",
                expanded: "#Bbcode_Expand_ShowMore_Expanded",
                style: _().ExpandSection_ShowMore,
              };
          }
        }
        function _(_) {
          var _;
          const _ = !!_(_.args, "expanded"),
            [_, _] = _.useState(_),
            _ = _(_.args, "title"),
            _ = _(_.args, "collapsed_str"),
            _ = _(_.args, "expanded_str"),
            _ = _(_(_.args, "type"), _, _, _);
          return (0, _.jsxs)("div", {
            className: (0, _._)({
              [_().ExpandSectionBlock]: !0,
              [(_ = _.style) != null ? _ : ""]: _.style != null,
              [_().ExpandSectionExpanded]: _,
              [_().ExpandSectionCollapsed]: !_,
              BBCodeExpanded: _,
              BBCodeCollapsed: !_,
            }),
            children: [
              (0, _.jsxs)("div", {
                className: _().ExpandSectionHeader,
                onClick: () => _(!_),
                children: [
                  (0, _._)(_ ? _.expanded : _.collapsed),
                  (0, _.jsx)("div", {
                    className: _().EmbedArrow,
                    children: (0, _.jsx)(_.DK4, {
                      angle: _ ? 180 : 0,
                    }),
                  }),
                ],
              }),
              _ &&
                (0, _.jsx)("div", {
                  className: _().ExpandSectionBody,
                  children: _.children,
                }),
            ],
          });
        }
        function _(_) {
          var _, _, _, _, _;
          const _ = _(_.args, "title"),
            _ = (_ = _(_.args, "start")) != null ? _ : _(_.args, "datetime"),
            _ = (_ = _(_.args, "end")) != null ? _ : _(_.args, "datetime"),
            _ = (_ = _(_.args, "body")) != null ? _ : null,
            _ = (_ = _(_.args, "location")) != null ? _ : null,
            _ = (_ = _(_.args, "id")) != null ? _ : "",
            _ = new Date(_),
            _ = _.getUTCFullYear(),
            _ = ("0" + (_.getUTCMonth() + 1)).slice(-2),
            _ = ("0" + _.getUTCDate()).slice(-2),
            _ = ("0" + _.getUTCHours()).slice(-2),
            _ = ("0" + _.getUTCMinutes()).slice(-2),
            _ = `${_}${_}${_}T${_}${_}00Z`,
            _ = new Date(_),
            _ = _.getUTCFullYear(),
            _ = ("0" + (_.getUTCMonth() + 1)).slice(-2),
            _ = ("0" + _.getUTCDate()).slice(-2),
            _ = ("0" + _.getUTCHours()).slice(-2),
            _ = ("0" + _.getUTCMinutes()).slice(-2),
            _ = `${_}${_}${_}T${_}${_}00Z`;
          let _;
          try {
            let _ = `BEGIN:VCALENDAR\r
`;
            (_ += `VERSION:2.0\r
`),
              (_ += `BEGIN:VEVENT\r
`),
              (_ += `DTSTART:${_}\r
`),
              (_ += `DTEND:${_}\r
`),
              (_ += `SUMMARY:${_.replace(
                `
`,
                "\\n",
              )}\r
`),
              _ &&
                (_ += `DESCRIPTION:${_.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              _ &&
                (_ += `LOCATION:${_.replace(
                  `
`,
                  "\\n",
                )}\r
`),
              (_ += `END:VEVENT\r
`),
              (_ += `END:VCALENDAR\r
`),
              (_ = `data:text/calendar;charset=utf-8;base64,${_.fromByteArray(new TextEncoder().encode(_))}`);
          } catch (_) {
            console.error(_);
          }
          let _ = "https://calendar.google.com/calendar/render?action=TEMPLATE";
          (_ += `&text=${encodeURI(_)}`),
            (_ += `&details=${encodeURI(_)}`),
            (_ += `&dates=${encodeURI(_ + "/" + _)}`);
          const _ = (_) => {
            if ("ReactNativeWebView" in window) {
              const _ = window.ReactNativeWebView,
                _ = {
                  event_name: "addcalendarevent",
                  tsStart: _.getTime(),
                  tsEnd: _.getTime(),
                  strTitle: _,
                  strNotes: _,
                  strLocation: _,
                };
              _.postMessage(JSON.stringify(_)), _.preventDefault();
            }
          };
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              "SaleSectionCalendarEventContainer",
              _().CalendarEventContainer,
            ),
            _: _,
            children: [
              _ &&
                (0, _.jsx)("a", {
                  className: (0, _._)(
                    "SaleSectionCalendarEventLink",
                    _().CalendarEventLink,
                  ),
                  href: _,
                  onClick: _,
                  download: "calendar.ics",
                  children: "Apple",
                }),
              (0, _.jsx)("a", {
                className: (0, _._)(
                  "SaleSectionCalendarEventLink",
                  _().CalendarEventLink,
                ),
                href: _,
                children: "Google",
              }),
              _ &&
                (0, _.jsx)("a", {
                  className: (0, _._)(
                    "SaleSectionCalendarEventLink",
                    _().CalendarEventLink,
                  ),
                  href: _,
                  onClick: _,
                  download: "calendar.ics",
                  children: "Outlook",
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          let _ = (0, _._)(_, "poster");
          _ && (_ = (0, _._)(_));
          const _ = new Array();
          {
            const _ = (0, _._)(_, "mp4");
            _ &&
              _.push({
                sURL: (0, _._)(_),
                sFormat: "video/mp4",
              });
            const _ = (0, _._)(_, "webm");
            _ &&
              _.push({
                sURL: (0, _._)(_),
                sFormat: "video/webm",
              });
          }
          const _ = (0, _.sfN)(_._.LANGUAGE),
            _ = _ != _.Bhc,
            _ = new Array();
          for (let _ = _.Bhc; _ < _.bP9; _++) {
            const _ = (0, _._)(_, "sub_" + (0, _.wwZ)(_));
            _ &&
              _.push({
                sURL: (0, _._)(_),
                eLanguage: _,
                sKind: "subtitles",
                bDefault: _ && _ == _,
              });
            const _ = (0, _._)(_, "cap_" + (0, _.wwZ)(_));
            _ &&
              _.push({
                sURL: (0, _._)(_),
                eLanguage: _,
                sKind: "captions",
                bDefault: _ && _ == _,
              });
          }
          return {
            sPoster: _,
            rgVideoSources: _,
            rgVideoTracks: _,
          };
        }
        function _(_) {
          const _ = _(_.args);
          return (0, _.jsx)(_._, {
            video: _,
            bAutoPlay: !0,
            bControls: !1,
            bLoop: !0,
          });
        }
        function _(_) {
          const _ = _(_.args),
            _ = _.children ? _.children.toString() : void 0;
          _ &&
            _.startsWith("http") &&
            _.rgVideoSources.push({
              sURL: (0, _._)(_),
              sFormat: "video/webm",
            });
          const _ = (0, _._)(_.args, "autoplay"),
            _ = _ !== "0" && _ !== "off" && _ !== "false",
            _ = (0, _._)(_.args, "controls"),
            _ = _ !== "0" && _ !== "off" && _ !== "false",
            _ = (0, _._)(_.args, "loop"),
            _ = _ !== "0" && _ !== "off" && _ !== "false";
          return (0, _.jsx)(_._, {
            video: _,
            bAutoPlay: _,
            bControls: _,
            bLoop: _ ? _ : _,
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
        const _ = 20,
          _ = /^.*youtube[^v]+v=(.{11}).*/,
          _ = /^.*youtu\.be\/(.{11}).*/,
          _ = /^.*youtube.*\/embed\/(.{11}).*/,
          _ = /^.*[?&]t=([^&]+)(?:&|$)/,
          _ = /^(?:(?:([\d]+)h)?(?:([\d]+)m)?(?:([\d]+)s)?|([\d]+))$/;
        function _(_) {
          return !!_(_);
        }
        function _(_) {
          const _ =
            (_ == null ? void 0 : _.length) < _
              ? void 0
              : _.exec(_) || _.exec(_) || _.exec(_);
          return _ == null ? void 0 : _[1];
        }
        function _(_) {
          const _ = _.exec(_);
          return _ == null ? void 0 : _[1];
        }
        function _(_) {
          const _ = _.exec(_);
          if (
            !(
              (_ != null && _[1]) ||
              (_ != null && _[2]) ||
              (_ != null && _[3]) ||
              (_ != null && _[4])
            )
          )
            return;
          if (_ != null && _[4]) return parseInt(_ == null ? void 0 : _[4]);
          let _ = 0;
          return (
            _ != null && _[1] && (_ += 3600 * parseInt(_[1])),
            _ != null && _[2] && (_ += 60 * parseInt(_[2])),
            _ != null && _[3] && (_ += parseInt(_[3])),
            _
          );
        }
        function _(_) {
          const _ = _(_);
          if (!_) return;
          const _ = _(_),
            _ = _ ? _(_) : void 0;
          return {
            strVideoID: _,
            nStartSeconds: _,
          };
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
            (_ == null ? void 0 : _.GetAppType()) ===
              EStoreAppType.k_EStoreAppType_Demo && _(_.GetParentAppID());
          }, [_]);
          let _ =
            _ != null && _.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ =
              _ != null && _.GetShortDescription()
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
                      !(_ != null && _.token.reason) &&
                        _.current === _ &&
                        _(_ == _._),
                        _();
                    })),
                () =>
                  _ == null ? void 0 : _.cancel("useStoreItemCache: unmounting")
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
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          var _;
          const [_, _] = _(_, _, _);
          let _;
          (_ == null ? void 0 : _.GetStoreItemType()) == _._._ &&
            !((_ = _.GetAssets()) != null && _.GetHeaderURL()) &&
            (_ == null ? void 0 : _.GetIncludedAppIDs().length) == 1 &&
            (_ = _.GetIncludedAppIDs()[0]);
          const [_, _] = _(_, _);
          return _ && _ != null && _.BIsVisible() ? [_, _] : [_, _];
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
          React.useEffect(
            () => (
              CStoreItemCache.Get().SetReturnUnavailableItems(!0),
              () => CStoreItemCache.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
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
        function _(_) {
          return new _._(new _._());
        }
        function _() {
          return new Map([...Array.from(_._.entries())]);
        }
        function _(_) {
          const { text: _, languageOverride: _ } = _,
            [_] = (0, _.useState)(
              new _._(_(), _, _ != null ? _ : _._.LANGUAGE),
            );
          return (0, _.jsx)(_.Fragment, {
            children: _.ParseBBCode(_, {}),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _._,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          return _._.EREALM === _._.k_ESteamRealmChina;
        }
        function _(_) {
          if (_()) return null;
          let _ = (0, _._)(_.args);
          if (_) {
            let _ = _.split(";");
            if (_.length == 2) {
              let _ = _[0],
                _ = _[1].toLocaleLowerCase();
              return (0, _.jsx)(_._, {
                videoID: _,
                align: _,
                bShowVideoImmediately: !0,
              });
            }
          }
          return (0, _.jsx)(_.Fragment, {});
        }
        function _(_) {
          if (_() || _._.COUNTRY.toLocaleUpperCase() == "CN")
            return (0, _._)(_);
          const _ = (0, _._)(_.args, "youtubeid"),
            _ = (0, _._)(_.args, "size"),
            _ = (0, _._)(_.args, "seconds");
          return (0, _.jsx)(_._, {
            videoID: _,
            nStartSeconds: _ ? Number.parseInt(_) : void 0,
            align: _,
            bShowVideoImmediately: !0,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
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
        const _ = 1576780700;
        let _ = class extends _.Component {
          OnEmoticonClick(_) {
            var _;
            const {
                emoticonStore: _,
                strFlairGroupID: _,
                SetUIDisplayPref: _,
                contextOptions: _,
                bShowChatAddons: _,
              } = this.props,
              {
                roomEffectSettings: _,
                onRoomEffectSelected: _,
                onStickerSelected: _,
              } = this.props;
            let _ = null;
            if (
              (_ && _ && _ && _
                ? (_ = (0, _.jsx)(_._, {
                    emoticonStore: this.props.emoticonStore,
                    strFlairGroupID: this.props.strFlairGroupID,
                    onEmoticonSelected: (_) =>
                      this.props.OnEmoticonSelected(_, !1),
                    roomEffectSettings: _,
                    onRoomEffectSelected: _,
                    onStickerSelected: _,
                  }))
                : _ &&
                    _.flair_list &&
                    ((_ = _.GetFlairListByGroupID(_)) == null
                      ? void 0
                      : _.length) > 0
                  ? (_ = (0, _.jsx)(_._, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    }))
                  : (_ = (0, _.jsx)(_._, {
                      emoticonStore: this.props.emoticonStore,
                      strFlairGroupID: this.props.strFlairGroupID,
                      OnSelected: this.props.OnEmoticonSelected,
                    })),
              (0, _._)(
                _,
                _,
                _ || {
                  bOverlapHorizontal: !0,
                  bPreferPopLeft: !0,
                  bPreferPopTop: !0,
                },
              ),
              this.BHaveUnseenEmoticons() && _)
            ) {
              let _ = this.GetNewestIndicatorTime();
              (!_ || _ < _) && (_ = _), _("rtLastAckedNewEmoticons", _);
            }
          }
          GetNewestIndicatorTime() {
            let _ = this.props.emoticonStore,
              _ = Number.MIN_SAFE_INTEGER,
              _ = _.GetTimeReceivedNewestEmoticon();
            _ && (_ = _);
            let _ = _.GetTimeReceivedForStickerOrEffect();
            return (
              (_ = Math.max(_, _)), _ > Number.MIN_SAFE_INTEGER ? _ : void 0
            );
          }
          BHaveUnseenEmoticons() {
            const { rtLastAckedNewEmoticons: _ } = this.props;
            let _ = this.GetNewestIndicatorTime();
            return !_ || _ < _ ? !0 : _ && (!_ || _ < _);
          }
          render() {
            const {
              disabled: _,
              className: _,
              ttip: _,
              useImg: _,
            } = this.props;
            let _ = [_],
              _ = !1;
            return (
              _ ? _.push("disabled") : this.BHaveUnseenEmoticons() && (_ = !0),
              _ && _.push("ttip"),
              _
                ? (0, _.jsx)(_._, {
                    onClick: this.OnEmoticonClick,
                    onOKActionDescription: (0, _._)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    focusable: !0,
                    children: (0, _.jsx)(_._, {
                      toolTipContent: _,
                      children: (0, _.jsx)("img", {
                        src: this.props.useImg,
                        className: (0, _._)(..._),
                        title:
                          this.props.title ||
                          (0, _._)("#ChatEntryButton_Emoticon"),
                      }),
                    }),
                  })
                : (_.push(_().chatSubmitButton, _().EmoticonPickerButton),
                  (0, _.jsx)(_._, {
                    className: (0, _._)(..._),
                    onOKActionDescription: (0, _._)(
                      "#ChatEntryButton_Emoticon",
                    ),
                    type: "button",
                    onClick: this.OnEmoticonClick,
                    title:
                      this.props.title || (0, _._)("#ChatEntryButton_Emoticon"),
                    disabled: _,
                    children: (0, _.jsxs)(_._, {
                      toolTipContent: _,
                      children: [
                        this.props.buttonIcon || (0, _.jsx)(_._, {}),
                        _ && (0, _.jsx)(_._, {}),
                      ],
                    }),
                  }))
            );
          }
        };
        _([_._], _.prototype, "OnEmoticonClick", 1), (_ = _([_._], _));
        const _ = _;
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
        function _(_, _, _ = !1) {
          return `${_}economy/sticker${_ ? "static" : ""}/${encodeURIComponent(_)}`;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                activeIndex: _.initialActiveIndex || 0,
              });
          }
          render() {
            const { config: _ } = this.props,
              { activeIndex: _ } = this.state,
              _ = _[_],
              _ = _ ? _.renderContent() : null,
              _ = _.length > 1,
              _ = _
                ? ({ detail: { button: _ } }) => {
                    _ === _._.BUMPER_LEFT
                      ? this.setState({
                          activeIndex: Math.max(0, this.state.activeIndex - 1),
                        })
                      : _ === _._.BUMPER_RIGHT &&
                        this.setState({
                          activeIndex: Math.min(
                            _.length - 1,
                            this.state.activeIndex + 1,
                          ),
                        });
                  }
                : void 0;
            return (0, _.jsxs)(_._, {
              className: _.Picker,
              onButtonDown: _,
              children: [
                _ &&
                  (0, _.jsx)(_, {
                    children: this.RenderTabs(),
                  }),
                _,
              ],
            });
          }
          RenderTabs() {
            return this.props.config.map(({ renderTab: _ }, _) => {
              const _ = this.state.activeIndex === _;
              return (0, _.jsx)(
                _,
                {
                  active: _,
                  onClick: () =>
                    this.setState({
                      activeIndex: _,
                    }),
                  children: _(_),
                },
                _,
              );
            });
          }
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            className: _.Tabs,
            "flow-children": "row",
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Content,
            children: _.children,
          });
        }
        function _(_) {
          const { active: _, children: _, onClick: _ } = _;
          return (0, _.jsx)(_._, {
            className: (0, _._)(_.Tab, _ && _.Active),
            focusClassName: _.Focus,
            onActivate: _,
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.TabContent, _ && _.Active),
              children: _,
            }),
          });
        }
        function _(_) {
          const {
            items: _,
            renderItem: _,
            onItemSelect: _,
            keyExtractor: _,
            renderEmpty: _,
          } = _;
          let _ = _.map((_, _) =>
            (0, _.jsx)(
              _._,
              {
                className: _.Item,
                onActivate: () => _(_[_]),
                autoFocus: _ === 0,
                focusClassName: _.Focus,
                children: _(_[_]),
              },
              _(_),
            ),
          );
          return (
            _.length === 0 && _ && (_ = _()),
            (0, _.jsx)(_._, {
              "flow-children": "grid",
              className: _.ItemList,
              children: _,
            })
          );
        }
        function _(_) {
          const {
            title: _,
            onFilterChange: _,
            filter: _,
            onSubmit: _,
            ..._
          } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_, {
                  title: _,
                  children: (0, _.jsx)(_, {
                    ..._,
                  }),
                }),
              }),
              (0, _.jsx)(_, {
                value: _,
                onChange: _,
                onSubmit: _,
              }),
            ],
          });
        }
        function _(_) {
          const { onFilterChange: _, filter: _, sections: _, title: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_, {
                children: [
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.SectionedPageTitle,
                      children: _,
                    }),
                  _.map(({ title: _, ..._ }) =>
                    (0, _.jsx)(
                      _,
                      {
                        title: _,
                        children: (0, _.jsx)(_, {
                          ..._,
                        }),
                      },
                      _,
                    ),
                  ),
                ],
              }),
              (0, _.jsx)(_, {
                value: _,
                onChange: _,
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _.Section,
            children: [
              (0, _.jsx)("div", {
                className: _.SectionTitle,
                children: _.title,
              }),
              (0, _.jsx)("div", {
                className: _.SectionContent,
                children: _.children,
              }),
            ],
          });
        }
        function _(_) {
          const { value: _, onChange: _, onSubmit: _ } = _;
          return (0, _.jsx)("div", {
            className: _.FilterInputContainer,
            children: (0, _.jsx)(_._, {
              type: "text",
              placeholder: (0, _._)("#AddonPicker_Search"),
              className: _.FilterInput,
              value: _,
              onChange: (_) => _(_.target.value),
              onSubmit: _,
            }),
          });
        }
        function _(_) {
          const { className: _, ..._ } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(_, _.AddonPickerMessage),
            ..._,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const _ = 1e3;
        function _(_) {
          return _.recent_emoticons;
        }
        function _(_) {
          return _.recent_stickers;
        }
        function _(_) {
          return _(_).length + _(_).length > 0;
        }
        function _(_) {
          const [_, _] = (0, _.useState)(_.is_initialized);
          return (
            (0, _.useEffect)(() => {
              if (!_.is_initialized) {
                _.UpdateEmoticonList();
                const _ = (0, _._)(
                  () => _.is_initialized,
                  () => _(_.is_initialized),
                );
                return () => _();
              }
              return () => {};
            }, [_]),
            _
          );
        }
        const _ = (0, _._)((_) => {
          const {
            emoticonStore: _,
            roomEffectSettings: _,
            strFlairGroupID: _,
            onEmoticonSelected: _,
            onRoomEffectSelected: _,
            onStickerSelected: _,
          } = _;
          _(_);
          const _ = [];
          return (
            _(_) &&
              _.push({
                renderTab: (_) =>
                  (0, _.jsx)("span", {
                    title: (0, _._)("#AddonPicker_RecentlyUsed"),
                    className: (0, _._)(
                      _().PickerTab,
                      _().Clock,
                      _ && _().ActiveTab,
                    ),
                    children: (0, _.jsx)(_, {}),
                  }),
                renderContent: () =>
                  (0, _.jsx)(_, {
                    store: _,
                    onEmoticonSelect: (_) => _(_.name),
                    onStickerSelect: (_) => _(_.name),
                    flairGroupID: _,
                  }),
              }),
            (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                config: [
                  ..._,
                  {
                    renderTab: (_) =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: _,
                        onItemSelect: (_) => _(_.name),
                        flairGroupID: _,
                      }),
                  },
                  {
                    renderTab: (_) =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Stickers"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: _,
                        onItemSelect: (_) => _(_.name),
                      }),
                  },
                  {
                    renderTab: (_) =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_RoomEffects"),
                        className: (0, _._)(_().PickerTab, _ && _().ActiveTab),
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: _,
                        effectSettings: _,
                        onItemSelect: (_) => _(_.name),
                      }),
                  },
                ],
              }),
            })
          );
        });
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_disposeEmoticonStore"),
              (this.state = {
                strSearchText: "",
              });
            let _ = this.props.emoticonStore;
            _.is_initialized ||
              (_.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, _._)(
                () => _.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            const {
                emoticonStore: _,
                onEmoticonSelected: _,
                onStickerSelected: _,
                strFlairGroupID: _,
              } = this.props,
              _ = [];
            return (
              _(_) &&
                _.push({
                  renderTab: (_) =>
                    (0, _.jsx)("span", {
                      title: (0, _._)("#AddonPicker_RecentlyUsed"),
                      className: (0, _._)(
                        _().PickerTab,
                        _().Clock,
                        _ && _().ActiveTab,
                      ),
                      children: (0, _.jsx)(_, {}),
                    }),
                  renderContent: () =>
                    (0, _.jsx)(_, {
                      store: _,
                      onEmoticonSelect: (_) => _(_.name),
                      onStickerSelect: (_) => _(_.name),
                      flairGroupID: _,
                    }),
                }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {
                  config: [
                    ..._,
                    {
                      renderTab: (_) =>
                        (0, _.jsx)("span", {
                          title: (0, _._)("#AddonPicker_Emoticons"),
                          className: (0, _._)(
                            _().PickerTab,
                            _ && _().ActiveTab,
                          ),
                          children: (0, _.jsx)(_, {}),
                        }),
                      renderContent: () =>
                        (0, _.jsx)(_, {
                          store: _,
                          onItemSelect: (_) => _(_.name),
                          flairGroupID: _,
                        }),
                    },
                    {
                      renderTab: (_) =>
                        (0, _.jsx)("span", {
                          title: (0, _._)("#AddonPicker_Stickers"),
                          className: (0, _._)(
                            _().PickerTab,
                            _ && _().ActiveTab,
                          ),
                          children: (0, _.jsx)(_, {}),
                        }),
                      renderContent: () =>
                        (0, _.jsx)(_, {
                          store: _,
                          onItemSelect: (_) => _(_.name),
                        }),
                    },
                  ],
                }),
              })
            );
          }
        };
        _ = _([_._], _);
        class _ extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_disposeEmoticonStore"),
              (this.state = {
                strSearchText: "",
              });
            let _ = this.props.emoticonStore;
            _.is_initialized ||
              (_.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, _._)(
                () => _.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                config: [
                  {
                    renderTab: () =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: _().PickerTab,
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: this.props.emoticonStore,
                        onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class _ extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_disposeEmoticonStore"),
              (this.state = {
                strSearchText: "",
              });
            let _ = this.props.emoticonStore;
            _.is_initialized ||
              (_.UpdateEmoticonList(),
              (this.m_disposeEmoticonStore = (0, _._)(
                () => _.is_initialized,
                () => this.forceUpdate(),
              )));
          }
          componentWillUnmount() {
            this.m_disposeEmoticonStore && this.m_disposeEmoticonStore();
          }
          render() {
            return (0, _.jsx)(_._, {
              children: (0, _.jsx)(_, {
                config: [
                  {
                    renderTab: () =>
                      (0, _.jsx)("span", {
                        title: (0, _._)("#AddonPicker_Emoticons"),
                        className: _().PickerTab,
                        children: (0, _.jsx)(_, {}),
                      }),
                    renderContent: () =>
                      (0, _.jsx)(_, {
                        store: this.props.emoticonStore,
                        onItemSelect: (_) => this.props.OnSelected(_.name, !1),
                        flairGroupID: this.props.strFlairGroupID,
                      }),
                  },
                ],
              }),
            });
          }
        }
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                filter: "",
              });
          }
          render() {
            const {
                store: _,
                onEmoticonSelect: _,
                onStickerSelect: _,
              } = this.props,
              { filter: _ } = this.state,
              _ = [];
            return (
              _(_) &&
                _.push({
                  title: (0, _._)("#AddonPicker_RecentEmoticons"),
                  items: _._.FilterEmoticons(_(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      emoticon: _,
                    }),
                  keyExtractor: (_) => _.name,
                  renderEmpty: () =>
                    (0, _.jsx)(_, {
                      children: _
                        ? (0, _._)("#AddonPicker_NoResults")
                        : (0, _._)(
                            "#AddonPicker_NoRecent",
                            (0, _._)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              _(_).length &&
                _.push({
                  title: (0, _._)("#AddonPicker_RecentStickers"),
                  items: _._.FilterStickers(_(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      sticker: _,
                    }),
                  keyExtractor: ({ name: _ }) => _,
                  renderEmpty: () =>
                    (0, _.jsx)(_, {
                      children: _
                        ? (0, _._)("#AddonPicker_NoResults")
                        : (0, _._)(
                            "#AddonPicker_NoRecent",
                            (0, _._)("#AddonPicker_Stickers"),
                          ),
                    }),
                }),
              (0, _.jsx)(_, {
                onFilterChange: (_) =>
                  this.setState({
                    filter: _,
                  }),
                filter: _,
                sections: _,
              })
            );
          }
        }
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                filter: "",
              });
          }
          render() {
            const { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
              { filter: _ } = this.state,
              _ = !_ && _ ? _.GetFlairListByGroupID(_) : _.emoticon_list,
              _ = _._.FilterEmoticons(_, _).slice(0, _);
            return (0, _.jsx)(_, {
              title: (0, _._)("#AddonPicker_Emoticons"),
              items: _,
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  emoticon: _,
                }),
              keyExtractor: (_) => _.name,
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              onSubmit: () => _(_[0]),
              renderEmpty: () =>
                _
                  ? (0, _.jsx)(_, {
                      children: (0, _._)("#AddonPicker_NoResults"),
                    })
                  : (0, _.jsx)(_, {}),
            });
          }
        }
        function _() {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _._)(
                  "#AddonPicker_NoneOwned",
                  (0, _._)("#AddonPicker_Emoticons"),
                ),
              }),
              (0, _.jsx)(_, {
                children: (0, _._)(
                  "#AddonPicker_AcquireAtPointsShopOrMarket",
                  (0, _.jsx)(_._, {
                    href: `${_._.STORE_BASE_URL}points/shop/c/emoticons`,
                    children: (0, _._)("#AddonPicker_AcquireAtPointsShop_Link"),
                  }),
                  (0, _.jsx)(_._, {
                    href: `${_._.COMMUNITY_BASE_URL}market`,
                    children: (0, _._)(
                      "#AddonPicker_AcquireAtPointsShopOrMarket_Link",
                    ),
                  }),
                ),
              }),
            ],
          });
        }
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                filter: "",
              });
          }
          render() {
            const { store: _, onItemSelect: _ } = this.props,
              { filter: _ } = this.state,
              _ = _._.FilterStickers(_.GetStickerList(), _),
              _ = () =>
                _
                  ? (0, _.jsx)(_, {
                      children: (0, _._)("#AddonPicker_NoResults"),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_NoneOwned",
                            (0, _._)("#AddonPicker_Stickers"),
                          ),
                        }),
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, _.jsx)(_._, {
                              href: `${_._.STORE_BASE_URL}points/shop/c/stickers`,
                              children: (0, _._)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, _.jsx)(_, {
              title: (0, _._)("#EmoticonPicker_StickerHeading"),
              items: _,
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  sticker: _,
                }),
              keyExtractor: ({ name: _ }) => _,
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              onSubmit: () => _(_[0]),
              renderEmpty: _,
            });
          }
        }
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                filter: "",
              });
          }
          render() {
            const { store: _, effectSettings: _, onItemSelect: _ } = this.props,
              { filter: _ } = this.state,
              _ = _.GetEffectList().filter(({ name: _ }) => _.indexOf(_) > -1),
              _ = () =>
                _
                  ? (0, _.jsx)(_, {
                      children: (0, _._)("#AddonPicker_NoResults"),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_NoneOwned",
                            (0, _._)("#AddonPicker_RoomEffects"),
                          ),
                        }),
                        (0, _.jsx)(_, {
                          children: (0, _._)(
                            "#AddonPicker_AcquireAtPointsShop",
                            (0, _.jsx)(_._, {
                              href: `${_._.STORE_BASE_URL}points/shop/c/chateffects`,
                              children: (0, _._)(
                                "#AddonPicker_AcquireAtPointsShop_Link",
                              ),
                            }),
                          ),
                        }),
                      ],
                    });
            return (0, _.jsx)(_, {
              title: (0, _._)("#EmoticonPicker_EffectHeading"),
              items: _,
              onItemSelect: _,
              renderItem: (_) =>
                (0, _.jsx)(_, {
                  effect: _,
                  roomEffectSettings: _,
                }),
              keyExtractor: ({ name: _ }) => _,
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              onSubmit: () => _(_[0]),
              renderEmpty: _,
            });
          }
        }
        let _ = class extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                filter: "",
              });
          }
          render() {
            const { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
              { filter: _ } = this.state,
              _ = [];
            return (
              _(_).length &&
                _.push({
                  title: (0, _._)("#AddonPicker_RecentEmoticons"),
                  items: _._.FilterEmoticons(_(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      emoticon: _,
                    }),
                  keyExtractor: (_) => _.name,
                  renderEmpty: () =>
                    (0, _.jsx)(_, {
                      children: _
                        ? (0, _._)("#AddonPicker_NoResults")
                        : (0, _._)(
                            "#AddonPicker_NoRecent",
                            (0, _._)("#AddonPicker_Emoticons"),
                          ),
                    }),
                }),
              (0, _.jsx)(_, {
                onFilterChange: (_) =>
                  this.setState({
                    filter: _,
                  }),
                filter: _,
                sections: [
                  ..._,
                  {
                    title: (0, _._)("#AddonPicker_AllEmoticons"),
                    items: _._.FilterStickers(_.emoticon_list, _).slice(0, _),
                    onItemSelect: _,
                    renderItem: (_) =>
                      (0, _.jsx)(_, {
                        emoticon: _,
                      }),
                    keyExtractor: (_) => _.name,
                    renderEmpty: () =>
                      _
                        ? (0, _.jsx)(_, {
                            children: (0, _._)("#AddonPicker_NoResults"),
                          })
                        : (0, _.jsx)(_, {}),
                  },
                ],
              })
            );
          }
        };
        _ = _([_._], _);
        let _ = class extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                filter: "",
              });
          }
          render() {
            const { store: _, onItemSelect: _, flairGroupID: _ } = this.props,
              { filter: _ } = this.state;
            return (0, _.jsx)(_, {
              onFilterChange: (_) =>
                this.setState({
                  filter: _,
                }),
              filter: _,
              sections: [
                {
                  title: (0, _._)("#ChatEntryButton_Flair"),
                  items: _._.FilterStickers(_.GetFlairListByGroupID(_), _),
                  onItemSelect: _,
                  renderItem: (_) =>
                    (0, _.jsx)(_, {
                      emoticon: _,
                    }),
                  keyExtractor: (_) => _.name,
                  renderEmpty: () =>
                    _
                      ? (0, _.jsx)(_, {
                          children: (0, _._)("#AddonPicker_NoResults"),
                        })
                      : (0, _.jsx)(_, {}),
                },
              ],
            });
          }
        };
        _ = _([_._], _);
        const _ = (_) => {
          const { emoticon: _, large: _ } = _,
            _ = !_.last_used && _.time_received;
          return (0, _.jsxs)("div", {
            className: _().EmoticonItem,
            children: [
              (0, _.jsx)(_._, {
                emoticon: _.name,
                large: _,
              }),
              _ && (0, _.jsx)(_, {}),
            ],
          });
        };
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                showHover: !1,
              }),
              _(this, "m_ref", _.createRef());
          }
          render() {
            const { sticker: _, className: _, ..._ } = this.props,
              _ = _(_._.COMMUNITY_CDN_URL, _.name);
            return (0, _.jsxs)("div", {
              ref: this.m_ref,
              className: (0, _._)(_, _().StickerButton),
              onMouseOver: () =>
                this.setState({
                  showHover: !0,
                }),
              onFocus: () =>
                this.setState({
                  showHover: !0,
                }),
              onMouseLeave: () =>
                this.setState({
                  showHover: !1,
                }),
              onBlur: () =>
                this.setState({
                  showHover: !1,
                }),
              ..._,
              children: [
                (0, _.jsx)("img", {
                  style: {
                    width: "100%",
                  },
                  src: _,
                }),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, _.jsx)(_, {
                    target: this.m_ref.current,
                    sticker: _,
                  }),
              ],
            });
          }
        }
        const _ = (0, _._)((_) => {
          const {
              target: _,
              sticker: { name: _, appid: _ },
            } = _,
            [_] = (0, _._)(_, {});
          return (0, _.jsx)(_._, {
            target: _,
            title: _,
            subtitle: _ == null ? void 0 : _.GetName(),
            children: (0, _.jsx)("img", {
              src: _(_._.COMMUNITY_CDN_URL, _),
              className: _().StickerHoverSticker,
            }),
          });
        });
        class _ extends _.Component {
          constructor() {
            super(...arguments),
              _(this, "state", {
                showHover: !1,
              }),
              _(this, "m_ref", _.createRef());
          }
          render() {
            const {
                effect: _,
                roomEffectSettings: _,
                className: _,
                ..._
              } = this.props,
              _ = _[_.name];
            return (0, _.jsxs)("div", {
              ref: this.m_ref,
              onMouseOver: () =>
                this.setState({
                  showHover: !0,
                }),
              onFocus: () =>
                this.setState({
                  showHover: !0,
                }),
              onMouseLeave: () =>
                this.setState({
                  showHover: !1,
                }),
              onBlur: () =>
                this.setState({
                  showHover: !1,
                }),
              className: (0, _._)(_, _().EffectButton),
              ..._,
              children: [
                _.renderEffectIcon(),
                this.state.showHover &&
                  this.m_ref.current &&
                  (0, _.jsx)(_, {
                    target: this.m_ref.current,
                    effect: _,
                    roomEffectSettings: _,
                  }),
              ],
            });
          }
        }
        const _ = (0, _._)((_) => {
          const {
              target: _,
              effect: { name: _, appid: _ },
              roomEffectSettings: _,
            } = _,
            _ = _[_],
            [_] = (0, _._)(_, {});
          return (0, _.jsx)(_._, {
            target: _,
            title: _,
            subtitle: _ == null ? void 0 : _.GetName(),
            children: (0, _.jsx)("div", {
              className: _().EffectHoverEffect,
              children: _.renderEffectIcon(),
            }),
          });
        });
        function _() {
          return (0, _.jsx)("div", {
            className: _().NewEmoticonIndicator,
            children: (0, _.jsx)("div", {
              className: _().NewEmoticonCircle,
            }),
          });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ..._,
                children: [
                  jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    _: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M21 29H22.1875V31H19L21 29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3981 31 25 31H24.0625V29Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M29 22.1875V21L31 19V22.1875H29Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 59 59",
                width: "32",
                ..._,
                children: jsx("switch", {
                  children: jsx("g", {
                    children: jsx("path", {
                      _: "M58 30.2v-.1L23.4 58.5l-.2-.3-.1.1C9.9 55.4 0 43.6 0 29.5 0 13.2 13.2 0 29.5 0S59 13.2 59 29.4l-1 .8zm0-1.5c-5-2.2-16.1-4-26 4.6-9.8 8.4-10.3 18.8-9.2 23.9C10.3 54.2 1 42.9 1 29.5 1 13.8 13.8 1 29.5 1 45 1 57.6 13.3 58 28.7zm-.8.8L23.7 56.9c-1-4.8-.5-14.8 8.9-22.9 9.4-8 19.7-6.6 24.6-4.5z",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#fff",
                    }),
                  }),
                }),
              });
        }
        function _(_) {
          return (0, _.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
            children: [
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M8 4C5.79086 4 4 5.79086 4 8V27C4 29.2091 5.79086 31 8 31H13V20C13 16.134 16.134 13 20 13H31V8C31 5.79086 29.2091 4 27 4H8Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M16 20C16 17.7909 17.7909 16 20 16H31L16 31V20Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M29 24.0625V25C29 25.2671 28.9738 25.5282 28.9239 25.7806L30.8858 26.1688C30.9609 25.7892 31 25.3982 31 25V24.0625H29Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M28.3263 27.2225C28.0342 27.6587 27.6587 28.0342 27.2225 28.3263L28.3351 29.9882C28.9885 29.5507 29.5507 28.9885 29.9882 28.3351L28.3263 27.2225Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M21 29H22.1875V31H19L21 29Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M24.0625 29H25C25.2671 29 25.5282 28.9738 25.7806 28.9239L26.1688 30.8858C25.7892 30.9609 25.3982 31 25 31H24.0625V29Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M29 22.1875V21L31 19V22.1875H29Z",
              }),
            ],
          });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx("svg", {
                width: "36",
                height: "36",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ..._,
                children: jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  _: "M33 18C33 26.2843 26.2843 33 18 33C15.031 33 12.2636 32.1374 9.93446 30.6492L4.35707 32.4107C3.95174 32.5387 3.58168 32.1347 3.74474 31.7421L5.81718 26.7529C4.04426 24.2896 3 21.2667 3 18C3 9.71573 9.71573 3 18 3C26.2843 3 33 9.71573 33 18ZM18 9.66667C16.3518 9.66667 14.7407 10.1554 13.3703 11.0711C11.9998 11.9868 10.9317 13.2883 10.301 14.811C9.67028 16.3337 9.50525 18.0092 9.82679 19.6258C10.1483 21.2423 10.942 22.7271 12.1074 23.8926C13.2729 25.058 14.7577 25.8517 16.3743 26.1732C17.9908 26.4948 19.6663 26.3297 21.189 25.699C22.7118 25.0683 24.0132 24.0002 24.9289 22.6298C25.8446 21.2593 26.3333 19.6482 26.3333 18C26.3333 16.9057 26.1178 15.822 25.699 14.811C25.2802 13.7999 24.6664 12.8813 23.8926 12.1074C23.1187 11.3336 22.2001 10.7198 21.189 10.301C20.178 9.88222 19.0944 9.66667 18 9.66667ZM13 16.3333C13 16.0037 13.0978 15.6815 13.2809 15.4074C13.464 15.1333 13.7243 14.9197 14.0289 14.7935C14.3334 14.6674 14.6685 14.6344 14.9918 14.6987C15.3151 14.763 15.6121 14.9217 15.8452 15.1548C16.0783 15.3879 16.237 15.6849 16.3013 16.0082C16.3656 16.3315 16.3326 16.6666 16.2065 16.9711C16.0803 17.2757 15.8667 17.536 15.5926 17.7191C15.3185 17.9023 14.9963 18 14.6667 18C14.2246 18 13.8007 17.8244 13.4882 17.5118C13.1756 17.1993 13 16.7754 13 16.3333ZM21.3333 18C21.0037 18 20.6815 17.9023 20.4074 17.7191C20.1333 17.536 19.9197 17.2757 19.7935 16.9711C19.6674 16.6666 19.6344 16.3315 19.6987 16.0082C19.763 15.6849 19.9217 15.3879 20.1548 15.1548C20.3879 14.9217 20.6849 14.763 21.0082 14.6987C21.3315 14.6344 21.6666 14.6674 21.9711 14.7935C22.2757 14.9197 22.536 15.1333 22.7191 15.4074C22.9023 15.6815 23 16.0037 23 16.3333C23 16.7754 22.8244 17.1993 22.5119 17.5118C22.1993 17.8244 21.7754 18 21.3333 18ZM19.9642 22.1864C20.4851 21.6655 20.7778 20.9589 20.7778 20.2222H15.2222C15.2222 20.9589 15.5149 21.6655 16.0358 22.1864C16.5568 22.7073 17.2633 23 18 23C18.7367 23 19.4433 22.7073 19.9642 22.1864Z",
                  fill: "currentColor",
                }),
              })
            : jsx("svg", {
                viewBox: "0 -8 60 60",
                width: "32",
                ..._,
                children: jsx("path", {
                  _: "M.5 5.5C.5 2.5 3 0 6 0h48c3 0 5.5 2.5 5.5 5.5V35c0 3-2.5 5.5-5.5 5.5h-1.5c-.8 0-1.5.7-1.5 1.5v8.1c0 1.3-1.6 2-2.6 1.1L37.8 40.5H6C3 40.5.5 38 .5 35V5.5zM6 1C3.5 1 1.5 3 1.5 5.5V35c0 2.5 2 4.5 4.5 4.5h32.2l.1.1 10.8 10.8c.3.3.9.1.9-.4v-8c0-1.4 1.1-2.5 2.5-2.5H54c2.5 0 4.5-2 4.5-4.5V5.5C58.5 3 56.5 1 54 1H6zm24 31c6.6 0 12-5.4 12-12S36.6 8 30 8s-12 5.4-12 12 5.4 12 12 12zm0 1c7.2 0 13-5.8 13-13S37.2 7 30 7s-13 5.8-13 13 5.8 13 13 13zm-3.5-15c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm8.5-1.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM24.5 22c0 2.5 2 4.5 4.5 4.5h2c2.5 0 4.5-2 4.5-4.5h-1c0 1.9-1.6 3.5-3.5 3.5h-2c-1.9 0-3.5-1.6-3.5-3.5h-1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function _(_) {
          return (0, _.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
            children: (0, _.jsx)("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              _: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM9.00001 15C9.00001 14.4067 9.17595 13.8266 9.5056 13.3333C9.83524 12.8399 10.3038 12.4554 10.852 12.2284C11.4001 12.0013 12.0033 11.9419 12.5853 12.0576C13.1672 12.1734 13.7018 12.4591 14.1213 12.8787C14.5409 13.2982 14.8266 13.8328 14.9424 14.4147C15.0581 14.9967 14.9987 15.5999 14.7716 16.1481C14.5446 16.6962 14.1601 17.1648 13.6667 17.4944C13.1734 17.8241 12.5934 18 12 18C11.2044 18 10.4413 17.6839 9.87869 17.1213C9.31608 16.5587 9.00001 15.7956 9.00001 15ZM24 18C23.4067 18 22.8266 17.8241 22.3333 17.4944C21.8399 17.1648 21.4554 16.6962 21.2284 16.1481C21.0013 15.5999 20.9419 14.9967 21.0576 14.4147C21.1734 13.8328 21.4591 13.2982 21.8787 12.8787C22.2982 12.4591 22.8328 12.1734 23.4147 12.0576C23.9967 11.9419 24.5999 12.0013 25.1481 12.2284C25.6962 12.4554 26.1648 12.8399 26.4944 13.3333C26.8241 13.8266 27 14.4067 27 15C27 15.7956 26.6839 16.5587 26.1213 17.1213C25.5587 17.6839 24.7957 18 24 18ZM26.3149 23.6788C26.7672 22.8295 27 21.9193 27 21H18H9C9 21.9193 9.23279 22.8295 9.68508 23.6788C10.1374 24.5281 10.8003 25.2997 11.636 25.9497C12.4718 26.5998 13.4639 27.1154 14.5558 27.4672C15.6478 27.8189 16.8181 28 18 28C19.1819 28 20.3522 27.8189 21.4442 27.4672C22.5361 27.1154 23.5282 26.5998 24.364 25.9497C25.1997 25.2997 25.8626 24.5281 26.3149 23.6788Z",
            }),
          });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsxs("svg", {
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ..._,
                children: [
                  jsx("path", {
                    _: "M14.5 7L17.2 15.37C17.5375 16.5175 18.4825 17.395 19.63 17.8L28 20.5L19.63 23.2C18.4825 23.5375 17.605 24.4825 17.2 25.63L14.5 34L11.8 25.63C11.4625 24.4825 10.5175 23.605 9.37 23.2L1 20.5L9.37 17.8C10.5175 17.4625 11.395 16.5175 11.8 15.37L14.5 7Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M24.9231 2L26.3077 6.33599C26.4923 6.94209 26.9538 7.40833 27.5538 7.59482L31.8462 8.99353L27.5538 10.3922C26.9538 10.5787 26.4923 11.045 26.3077 11.6511L24.9231 15.9871L23.5385 11.6511C23.3538 11.045 22.8923 10.5787 22.2923 10.3922L18 8.99353L22.2923 7.59482C22.8923 7.40833 23.3538 6.94209 23.5385 6.33599L24.9231 2Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M7.46154 3L8.15385 5.1913C8.24615 5.47105 8.47692 5.70416 8.75384 5.79741L10.9231 6.49676L8.75384 7.19611C8.47692 7.28936 8.24615 7.52248 8.15385 7.80222L7.46154 9.99352L6.76923 7.80222C6.67692 7.52248 6.44615 7.28936 6.16923 7.19611L4 6.49676L6.16923 5.79741C6.44615 5.70416 6.67692 5.47105 6.76923 5.1913L7.46154 3Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M31.4615 12L32.1538 14.1913C32.2462 14.471 32.4769 14.7042 32.7538 14.7974L34.9231 15.4968L32.7538 16.1961C32.4769 16.2894 32.2462 16.5225 32.1538 16.8022L31.4615 18.9935L30.7692 16.8022C30.6769 16.5225 30.4462 16.2894 30.1692 16.1961L28 15.4968L30.1692 14.7974C30.4462 14.7042 30.6769 14.471 30.7692 14.1913L31.4615 12Z",
                    fill: "currentColor",
                  }),
                  jsx("path", {
                    _: "M26.4615 25L27.1538 27.1913C27.2462 27.471 27.4769 27.7042 27.7538 27.7974L29.9231 28.4968L27.7538 29.1961C27.4769 29.2894 27.2462 29.5225 27.1538 29.8022L26.4615 31.9935L25.7692 29.8022C25.6769 29.5225 25.4462 29.2894 25.1692 29.1961L23 28.4968L25.1692 27.7974C25.4462 27.7042 25.6769 27.471 25.7692 27.1913L26.4615 25Z",
                    fill: "currentColor",
                  }),
                ],
              })
            : jsx("svg", {
                viewBox: "0 0 60 38",
                width: "32",
                ..._,
                children: jsx("path", {
                  _: "M16 8.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L16 25.1 14.1 20c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L17 25.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L7.5 18c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1zm17.8 15.4l-1.9-5-1.9 5.1c-.2.5-.6 1-1.2 1.2l-5 1.8 5.1 1.9c.5.2 1 .6 1.2 1.2l1.9 5.1 1.9-5.1c.2-.5.6-1 1.2-1.2l5.1-1.9-5.1-1.9c-.7-.2-1.1-.6-1.3-1.2zm-1-5.4c-.3-.9-1.6-.9-1.9 0l-1.9 5.1c-.1.3-.3.5-.6.6l-5.1 1.9c-.9.3-.9 1.6 0 1.9l5.1 1.9c.3.1.5.3.6.6l1.9 5.1c.3.9 1.6.9 1.9 0l1.9-5.1c.1-.3.3-.5.6-.6l5.1-1.9c.9-.3.9-1.6 0-1.9l-5.1-1.9c-.3-.1-.5-.3-.6-.6l-1.9-5.1zM43 4.9l1.9 5.1c.2.5.6 1 1.2 1.2l5.1 1.9-5.1 1.9c-.5.2-1 .6-1.2 1.2L43 21.1 41.1 16c-.2-.5-.6-1-1.2-1.2l-5-1.8 5.1-1.9c.5-.2 1-.6 1.2-1.2l1.8-5zm-.9-.4c.3-.9 1.6-.9 1.9 0l1.9 5.1c.1.3.3.5.6.6l5.1 1.9c.9.3.9 1.6 0 1.9l-5.1 1.9c-.3.1-.5.3-.6.6L44 21.6c-.3.9-1.6.9-1.9 0l-1.9-5.1c-.1-.3-.3-.5-.6-.6L34.5 14c-.9-.3-.9-1.6 0-1.9l5.1-1.9c.3-.1.5-.3.6-.6l1.9-5.1z",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "#fff",
                }),
              });
        }
        function _(_) {
          return (0, _.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 36 36",
            fill: "none",
            ..._,
            children: [
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M14.7163 7.6875L17.2476 15.5344C17.564 16.6102 18.4499 17.4328 19.5257 17.8125L27.3726 20.3438L19.5257 22.875C18.4499 23.1914 17.6273 24.0773 17.2476 25.1531L14.7163 33L12.1851 25.1531C11.8687 24.0773 10.9827 23.2547 9.90696 22.875L2.06009 20.3438L9.90696 17.8125C10.9827 17.4961 11.8054 16.6102 12.1851 15.5344L14.7163 7.6875Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M24.488 3L25.7861 7.06499C25.9591 7.63321 26.3918 8.07031 26.9543 8.24514L30.9784 9.55643L26.9543 10.8677C26.3918 11.0426 25.9591 11.4796 25.7861 12.0479L24.488 16.1129L23.1899 12.0479C23.0168 11.4796 22.5841 11.0426 22.0216 10.8677L17.9976 9.55643L22.0216 8.24514C22.5841 8.07031 23.0168 7.63321 23.1899 7.06499L24.488 3Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M8.11778 3.9375L8.76682 5.99185C8.85336 6.25411 9.0697 6.47265 9.32932 6.56007L11.363 7.21571L9.32932 7.87136C9.0697 7.95878 8.85336 8.17732 8.76682 8.43958L8.11778 10.4939L7.46874 8.43958C7.3822 8.17732 7.16586 7.95878 6.90624 7.87136L4.87259 7.21571L6.90624 6.56007C7.16586 6.47265 7.3822 6.25411 7.46874 5.99185L8.11778 3.9375Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M30.6178 12.375L31.2668 14.4293C31.3534 14.6916 31.5697 14.9102 31.8293 14.9976L33.863 15.6532L31.8293 16.3089C31.5697 16.3963 31.3534 16.6148 31.2668 16.8771L30.6178 18.9314L29.9687 16.8771C29.8822 16.6148 29.6659 16.3963 29.4062 16.3089L27.3726 15.6532L29.4062 14.9976C29.6659 14.9102 29.8822 14.6916 29.9687 14.4293L30.6178 12.375Z",
              }),
              (0, _.jsx)("path", {
                fill: "currentColor",
                _: "M25.9303 24.5625L26.5793 26.6168C26.6659 26.8791 26.8822 27.0977 27.1418 27.1851L29.1755 27.8407L27.1418 28.4964C26.8822 28.5838 26.6659 28.8023 26.5793 29.0646L25.9303 31.1189L25.2812 29.0646C25.1947 28.8023 24.9784 28.5838 24.7187 28.4964L22.6851 27.8407L24.7187 27.1851C24.9784 27.0977 25.1947 26.8791 25.2812 26.6168L25.9303 24.5625Z",
              }),
            ],
          });
        }
        function _(_) {
          const { className: _, ..._ } = _;
          return (0, _.jsx)("svg", {
            className: (0, _._)("SVGIcon_Button SVGIcon_Clock", _),
            version: "1.1",
            _: "0px",
            _: "0px",
            width: "20px",
            height: "20px",
            viewBox: "0 0 24 24",
            ..._,
            children: (0, _.jsx)("path", {
              _: "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { text: _ = "", style: _, children: _ } = _;
          if (_ == null)
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          let _;
          if (
            (_ instanceof Array
              ? (_ = _.map((_) => (_ ? _.toString() : ""))
                  .filter((_) => _.length > 0)
                  .join(`
`))
              : (_ = _.toString()),
            _.Children.count(_) == 1)
          ) {
            let _ = _.Children.only(_);
            return _.cloneElement(_, {
              "data-copystyle": _,
              "data-copytext": _,
            });
          } else
            return (
              console.log(`Error: CopyableText must be the parent of exactly one child:
	copystyle=${_} copytext=${_}`),
              (0, _.jsx)(_.Fragment, {
                children: _,
              })
            );
        }
        function _(_) {
          var _;
          let _ = _.cloneContents(),
            _ = "",
            _ = "",
            _ = !1,
            _ = (
              _.querySelector("[data-activechat=true]") || _
            ).querySelectorAll("[data-copytext]"),
            _ = Array.from(_).map(
              (_) => _.getAttribute("data-copystyle") || "msg",
            );
          for (let _ = 0; _ < _.length; ++_) {
            let _ = _[_],
              _ = _[_];
            if (_ + 1 < _.length && DOMUtils.BIsParent(_, _[_ + 1])) continue;
            let _ = _.tagName.toLowerCase(),
              _ = _.includes("block"),
              _ = _.includes("timestamp"),
              _ = _.includes("server"),
              _ = _.includes("invite"),
              _ = _.includes("emote"),
              _ = _.includes("no-prefix"),
              _ = _.includes("no-suffix"),
              _ = _.includes("allow-embedded-newlines"),
              _ = _.includes("block-continue"),
              _ = _.includes("merge-adjacent"),
              _ = _.includes("force-display"),
              _ = _.includes("prepend-innertext"),
              _ = _.includes("append-innertext"),
              _ = _.includes("prepend-newline"),
              _ = _.includes("append-newline"),
              _ = _.includes("speaker");
            if (!_) {
              let _ = _.match(/img|iframe/) != null,
                _ = _.querySelector("img,iframe") != null;
              if (!_.innerText && !_ && !_) continue;
            }
            _ &&
              (_ > 0 && _[_ - 1].includes("merge-adjacent") && (_ = !0),
              _ + 1 < _.length &&
                _[_ + 1].includes("merge-adjacent") &&
                (_ = !0)),
              _ && (_ = !0);
            let _ = "",
              _ = `
`;
            !_ && !_ && !_ && !_ && !_
              ? (_ && (_ += "	"),
                _.includes("msg") && _ && (_ = !0),
                _.includes("block") && !_ && (_ = !0))
              : (_.length != 0 &&
                  (_ += `
`),
                (_ || _) && (_ += "		"));
            let _ = (_ = _.getAttribute("data-copytext")) != null ? _ : "";
            _.length == 0
              ? (_ = _.innerText)
              : _ && _.innerText.length > 0
                ? (_ = `${_.innerText}${
                    _.includes("-with-newline")
                      ? `
`
                      : " "
                  }${_}`)
                : _ &&
                  _.innerText.length > 0 &&
                  (_ += `${
                    _.includes("-with-newline")
                      ? `
`
                      : " "
                  }${_.innerText}`),
              _.length != 0 &&
                (_ &&
                  (_ += `
`),
                _ || (_ += _),
                (_ += _ ? _ : _.replace(/\n/g, _ + _)),
                _ || (_ += _),
                _ &&
                  (_ += `
`)),
              (_ = _);
          }
          if (_.length != 0) return _;
        }
        function _(_) {
          const _ = _(_);
          _ != null && DOMUtils.CopyTextToClipboard(_);
        }
        function _(_) {
          const _ = document.createRange();
          _.selectNode(_), _(_);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { emoticon: _, large: _ } = _,
            [_, _] = (0, _._)(),
            [_, _] = _.useState(null),
            _ = `:${_}:`,
            _ = (0, _._)(_, _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                text: _,
                style: "merge-adjacent",
                children: (0, _.jsx)("img", {
                  ..._,
                  src: _,
                  className: (0, _._)(_().emoticon, _ ? _().large : void 0),
                  "data-emoticon": _,
                  alt: _,
                  ref: _,
                }),
              }),
              _ &&
                _ &&
                (0, _.jsx)(_, {
                  target: _,
                  emoticon: _,
                }),
            ],
          });
        }
        function _(_) {
          const { target: _, emoticon: _ } = _,
            { data: _ } = _(_);
          return (0, _.jsx)(_, {
            target: _,
            title: `:${_}:`,
            subtitle: _ && _.app_name ? _.app_name : void 0,
            children: (0, _.jsx)(_, {
              emoticon: _,
              large: !0,
            }),
          });
        }
        function _(_) {
          return (0, _._)({
            queryKey: ["EmoticonHover", _],
            queryFn: async () => {
              const _ = `${_._.COMMUNITY_CDN_URL}economy/emoticonhoverjson/${encodeURIComponent(_)}?l=${encodeURIComponent(_._.LANGUAGE)}&origin=${self.origin}`,
                _ = await fetch(_);
              if (_.status != 200)
                throw `Error fetching emoticon: ${_.status} ${_.statusText}`;
              return await _.json();
            },
          });
        }
        const _ = ({ target: _, title: _, subtitle: _, children: _ }) =>
          (0, _.jsxs)(_._, {
            target: _,
            style: {
              zIndex: 1700,
            },
            className: _().EmoticonHover,
            children: [
              _,
              (0, _.jsxs)("div", {
                className: _().Info,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Name,
                    children:
                      _ ||
                      (0, _.jsx)("span", {
                        children: "\xA0",
                      }),
                  }),
                  (0, _.jsx)("div", {
                    className: _().AppName,
                    children:
                      _ ||
                      (0, _.jsx)("span", {
                        children: "\xA0",
                      }),
                  }),
                ],
              }),
            ],
          });
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
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function _(_) {
          var _;
          const _ = (_ = _.filled) != null ? _ : !0;
          return useInGamepadUI()
            ? _
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function _(_) {
          var _;
          const _ = (_ = _.filled) != null ? _ : !0;
          return useInGamepadUI()
            ? _
              ? jsx(GamepadSVG.Heart, {})
              : jsx(GamepadSVG.HeartEmpty, {})
            : jsx(SVG.Heart, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ControllerStatus, {})
            : jsx(SVG.BigPicture, {});
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Checkmark, {
                ..._,
              })
            : jsx(SVG.Check, {
                ..._,
              });
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Carat, {
                direction: "down",
              })
            : jsx(SVG.FlatArrow, {
                angle: 180,
              });
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Information, {})
            : jsx(SVG.Information, {});
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Lock, {})
            : jsx(SVG.Lock, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Download, {})
            : jsx(SVG.Download, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Play, {})
            : jsx(SVG.Play, {});
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Achievement, {})
            : jsx(SVG.AwardIcon, {});
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsUp, {})
            : jsx(SVG.ThumbsUpUserNews, {
                className: _.className,
              });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.ThumbsDown, {})
            : jsx(SVG.ThumbsUpUserNews, {
                className: _.className,
              });
        }
        function _(_) {
          return useInGamepadUI()
            ? jsx(GamepadSVG.CommentThread, {
                className: _.className,
              })
            : jsx(SVG.CommentThread, {
                className: _.className,
              });
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Pause, {})
            : jsx(SVG.Pause, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Reload, {})
            : jsx(SVG.Reload, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Update, {})
            : jsx(SVG.Update, {});
        }
        function _() {
          return jsx(GamepadSVG.Globe, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Close, {})
            : jsx(SVG.X_Line, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Trash, {})
            : jsx(SVG.Trash, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Dynamic, {})
            : jsx(SVG.DynamicCollection, {});
        }
        function _() {
          return jsx(GamepadSVG.Add, {});
        }
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Edit, {})
            : jsx(SVG.Edit, {});
        }
        function _() {
          return (0, _.jsx)(_.rfv, {});
        }
        function _() {
          return (0, _._)() ? (0, _.jsx)(_._, {}) : (0, _.jsx)(_.jZW, {});
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
                _ == null || _(_, _[_], _);
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
              _ != null && _.complete && _.naturalWidth == 0 && (_.src = _.src);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          _ = (_, _, _) => _(_, typeof _ != "symbol" ? _ + "" : _, _),
          _ = ((_) => (
            (_[(_.NotLoaded = 0)] = "NotLoaded"),
            (_[(_.Loading = 1)] = "Loading"),
            (_[(_.Loaded = 2)] = "Loaded"),
            _
          ))(_ || {});
        let _ = 0,
          _ = [];
        function _(_) {
          var _;
          if (_ == 2) {
            _ && _();
            return;
          }
          if (_ == 0) {
            let _ = document.createElement("script");
            _.src = "https://www.youtube.com/iframe_api";
            let _ = document.getElementsByTagName("script")[0];
            (_ = _.parentNode) == null || _.insertBefore(_, _),
              (window.onYouTubeIframeAPIReady = _);
          }
          _ && (_.includes(_) || _.push(_));
        }
        function _(_ = !0) {
          const _ = (0, _._)("youtube");
          (0, _.useEffect)(() => {
            _ && _ && _();
          }, [_, _]);
        }
        function _(_) {
          _._(_, _);
        }
        function _() {
          _ = 2;
          for (let _ of _) _();
          _ = [];
        }
        const _ = class _ extends _.Component {
          constructor(_) {
            super(_),
              _(this, "m_strPlayerID", ""),
              _(this, "m_player", null),
              _(this, "m_playerContainer", null),
              _(this, "m_bPlayerReady", !1),
              (this.m_strPlayerID = "YoutubePlayer_" + _.s_nPlayerIndex++),
              (this.state = {
                bYoutubeLoaded: !1,
              });
          }
          componentWillUnmount() {
            this.DestroyPlayer(), _(this.OnYoutubeScriptsReady);
          }
          shouldComponentUpdate(_, _) {
            if (!this.m_player) return !1;
            const _ = this.props;
            return _.autoplay != _.autoplay ||
              _.controls != _.controls ||
              _.showInfo != _.showInfo ||
              _.video != _.video
              ? (this.CreatePlayer(_), !1)
              : ((_.width != _.width || _.height != _.height) &&
                  this.m_bPlayerReady &&
                  _.width &&
                  _.height &&
                  this.m_player.setSize(_.width, _.height),
                _.forcePause != _.forcePause);
          }
          componentDidUpdate(_) {
            _.forcePause != this.props.forcePause && this.ApplyForcePause();
          }
          ApplyForcePause() {
            !this.m_player ||
              !this.m_bPlayerReady ||
              (this.props.forcePause
                ? typeof this.m_player.pauseVideo == "function" &&
                  this.m_player.pauseVideo()
                : typeof this.m_player.playVideo == "function" &&
                  this.m_player.playVideo());
          }
          DestroyPlayer() {
            if (this.m_player)
              try {
                this.m_player.stopVideo && this.m_player.stopVideo(),
                  this.m_player.destroy && this.m_player.destroy();
              } catch {
              } finally {
                this.m_player = null;
              }
          }
          BindPlayerContainer(_) {
            !_ ||
              this.m_playerContainer == _ ||
              ((this.m_playerContainer = _),
              this.DestroyPlayer(),
              _(this.OnYoutubeScriptsReady));
          }
          OnYoutubeScriptsReady() {
            this.CreatePlayer(this.props);
          }
          CreatePlayer(_) {
            if ((this.DestroyPlayer(), !this.m_playerContainer)) return;
            const _ = _.autoplay === !1 ? 0 : 1,
              _ = _.showInfo === !0 ? 1 : 0,
              _ = _.controls === !0 ? 1 : 0,
              _ = _.showFullscreenBtn === !0 ? 1 : 0,
              _ = _.playsInline === !0 ? 1 : 0;
            let _ = {
                width: _.width !== void 0 ? String(_.width) : void 0,
                height: _.height !== void 0 ? String(_.height) : void 0,
                videoId: _.video,
                host: "https://www.youtube-nocookie.com",
                playerVars: {
                  autoplay: _,
                  showinfo: _,
                  autohide: 1,
                  _: _,
                  modestbranding: 1,
                  rel: 0,
                  playsinline: _,
                  iv_load_policy: 3,
                  controls: _,
                  start: _.startSeconds,
                },
                events: {
                  onReady: this.OnPlayerReady,
                  onStateChange: this.OnPlayerStateChange,
                  onError: this.OnError,
                },
              },
              _ = this.m_playerContainer.firstElementChild;
            (this.m_bPlayerReady = !1), (this.m_player = new _.Player(_, _));
          }
          OnPlayerReady(_) {
            var _, _;
            if (
              ((this.m_bPlayerReady = !0),
              this.props.onVideoInfoChanged && this.m_player)
            ) {
              let _ = this.m_player.getVideoData(),
                _ = {
                  strAuthor: "",
                  strTitle: "",
                  strVideoID: "",
                };
              _.author && (_.strAuthor = _.author),
                _.title && (_.strTitle = _.title),
                _.video_id && (_.strVideoID = _.video_id),
                this.props.onVideoInfoChanged(_);
            }
            this.props.width &&
              this.props.height &&
              ((_ = this.m_player) == null ||
                _.setSize(this.props.width, this.props.height)),
              this.props.forcePause
                ? this.ApplyForcePause()
                : this.props.autoplay &&
                  ((_ = this.m_player) == null || _.playVideo()),
              this.props.onPlayerReady && this.props.onPlayerReady();
          }
          OnPlayerStateChange(_) {
            switch (_.data) {
              case _.PlayerState.UNSTARTED:
                break;
              case _.PlayerState.BUFFERING:
                this.props.onBuffering && this.props.onBuffering();
                break;
              case _.PlayerState.PLAYING:
                this.props.onPlaying && this.props.onPlaying();
                break;
              case _.PlayerState.PAUSED:
                this.props.onPaused && this.props.onPaused();
                break;
              case _.PlayerState.ENDED:
                this.props.onMovieEnd && this.props.onMovieEnd();
                break;
            }
          }
          OnError(_) {
            console.log("Youtube: Playback failed", _),
              this.props.onError && this.props.onError(_);
          }
          OnPlayerLeftView() {
            this.props.autopause &&
              this.m_player &&
              this.m_bPlayerReady &&
              this.m_player.pauseVideo();
          }
          PlayVideo(_) {
            this.m_player &&
              this.m_bPlayerReady &&
              (_ && this.m_player.seekTo(0, !0), this.m_player.playVideo());
          }
          render() {
            return (0, _.jsx)(_, {
              video: this.props.video,
              children: (0, _.jsx)(
                _._,
                {
                  onLeave: this.props.autopause
                    ? this.OnPlayerLeftView
                    : void 0,
                  ref: this.BindPlayerContainer,
                  className: (0, _._)("YoutubePlayer", this.props.classnames),
                  children: (0, _.jsx)(_._, {
                    className: "YoutubePlayerThrobber",
                  }),
                },
                this.m_strPlayerID,
              ),
            });
          }
        };
        _(_, "s_nPlayerIndex", 0),
          _([_._], _.prototype, "BindPlayerContainer", 1),
          _([_._], _.prototype, "OnYoutubeScriptsReady", 1),
          _([_._], _.prototype, "CreatePlayer", 1),
          _([_._], _.prototype, "OnPlayerReady", 1),
          _([_._], _.prototype, "OnPlayerStateChange", 1),
          _([_._], _.prototype, "OnError", 1),
          _([_._], _.prototype, "OnPlayerLeftView", 1),
          _([_._], _.prototype, "PlayVideo", 1);
        let _ = _;
        function _(_) {
          const { video: _, children: _ } = _;
          return (0, _._)("youtube")
            ? _
            : (0, _.jsx)("a", {
                href: `https://www.youtube.com/watch?v=${_}`,
                children: (0, _._)("#EventCalendar_WatchYouTubeVideo"),
              });
        }
        function _(_) {
          const _ = new URLSearchParams({
            autoplay: _.autoplay ? "1" : "0",
            controls: _.controls ? "1" : "0",
            _: _.showFullscreenBtn ? "1" : "0",
            playsinline: _.playsInline ? "1" : "0",
            rel: "0",
            iv_load_policy: "3",
            modestbranding: "1",
            enablejsapi: "1",
          });
          return (
            _.startSeconds && _.set("start", String(_.startSeconds)),
            `https://www.youtube-nocookie.com/embed/${encodeURIComponent(_.video)}?${_.toString()}`
          );
        }
        function _(_) {
          const { video: _, autopause: _, className: _ } = _,
            _ = _.useRef(null),
            _ = _.useRef(null),
            _ = _.useCallback(() => {
              var _;
              return (_ = _.current) == null ? void 0 : _.pauseVideo();
            }, []),
            _ = (0, _._)({
              onLeave: _ ? _ : void 0,
            }),
            _ = (0, _._)(_, _);
          return (
            _.useEffect(() => {
              const _ = () => {
                _.current && (_.current = new _.Player(_.current, {}));
              };
              return (
                _ && _(_),
                () => {
                  _(_), (_.current = null);
                }
              );
            }, [_]),
            (0, _.jsx)("iframe", {
              ref: _,
              className: _,
              src: _(_),
              title: _,
              allow: "autoplay; encrypted-media; picture-in-picture; web-share",
              allowFullScreen: !0,
              frameBorder: 0,
            })
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
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _.bUseBinary1K ? 1024 : 1e3,
            _ = _ * _,
            _ = _ * _,
            _ = _ * _;
          return _ > _
            ? {
                nNum: _ / _,
                strPrefix: "Tera",
              }
            : _ > _
              ? {
                  nNum: _ / _,
                  strPrefix: "Giga",
                }
              : _ > _
                ? {
                    nNum: _ / _,
                    strPrefix: "Mega",
                  }
                : _ > _
                  ? {
                      nNum: _ / _,
                      strPrefix: "Kilo",
                    }
                  : {
                      nNum: _,
                      strPrefix: "",
                    };
        }
        function _(_, _, _, _) {
          let _ = _;
          typeof _ == "number"
            ? (_ = {
                nDigitsAfterDecimal: _,
                bUseBinary1K: _ || _ === void 0,
                bValueIsInBytes: !_,
                bValueIsRate: _,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (_ = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ..._,
              });
          const { nNum: _, strPrefix: _ } = _(_, _),
            _ = `#${_}${_.bValueIsInBytes ? "bytes" : "bits"}${_.bValueIsRate ? "_PerSecond" : ""}`;
          return _._.Localize(
            _,
            _.toLocaleString((0, _._)(), {
              minimumFractionDigits: _.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: _.nDigitsAfterDecimal,
            }),
          );
        }
        function _(_, _ = 0) {
          let _;
          return (
            _ &&
              (_ = {
                maximumFractionDigits: _,
              }),
            _ ? _.toLocaleString((0, _._)(), _) : "" + _
          );
        }
        function _(_) {
          return _ > 1e9
            ? Math.trunc(_ / 1e9).toString() + "B"
            : _ > 1e6
              ? Math.trunc(_ / 1e6).toString() + "M"
              : _ > 1e3
                ? Math.trunc(_ / 1e3).toString() + "K"
                : _.toString();
        }
      },
      chunkid: (module) => {
        module.exports = {
          Bold: "_3cln317VYhwhE1fSeMCG48",
          Italic: "_3TPGDj4kc0QGKvO8FJmGz8",
          Paragraph: "_3lnqGBzYap-Z2T81XBiBUU",
          TemplateMediaTitle: "_DE_6XhnSqABczbJ55rNJ",
          Question: "_2Hj1tfDjpLvBVTHTqAVcYB",
          Answer: "syKgzmlrcUIJHIBfWsn4h",
          Header1: "_2LYsFAwy8wdRJQTNJOUcsT",
          Header2: "_6-VR2WCBCDupCcUN5INQM",
          Header3: "_1sGnlGwCeaGUp63h4Lx-pU",
          Header4: "_3VHY5vmO07MFpoOgTB9eOi",
          Header5: "_1Vk-9-C_y-lBA5ucPl6t8X",
          CenterSpan: "zCnp-VELUMybbfxOD-ze9",
          SmallText: "WBzrd438Bd8Z3J-j_iglW",
          Underline: "GrhFWtBdrSZP611s1UqqT",
          Strike: "_3pK7sh9FYdigMXxcUVI4DY",
          Spoiler: "_3kRr4bh8twnlt_7wcEFZr3",
          Revealed: "_3g1-8c9NBcNDwW4-6x1pM6",
          SpoilerText: "_3r66KOH_Vckmfps3XUOVrY",
          DisabledMouseEvents: "_1O62-3Y03GsnA0709QyJ_O",
          BlockQuote: "_3MQ0Cuf_h-nZ81xIubg8rh",
          QuoteAuthor: "_1MzmaZcQPMRfrTHs3k0fIZ",
          PullQuote: "_2kA0eAmv8ifh0zphoq4ntM",
          Code: "_2ODaX8lO7DKLKke76c2Wya",
          CodeBlock: "_1I3OP84ayrCIMuBrCrkosi",
          List: "_3Y-LRoi5aeZ9-3ujWjXuG3",
          OrderedList: "DojPxwyYpx3hwuPIaJPCq",
          ListItem: "_1iXxYKOlzzXiVr02E7n2Fe",
          _: "-xPK0REpludHjRG8xQfih",
          Table: "_2CAsiFd9UHbUOqzd0e7ioe",
          NoBorder: "_1rO4D9vLxJRWz9sW4-ahSY",
          TableRow: "_3FJk0y6E6I8nSYfCIqGP8",
          TableCell: "_3rLIt0O8F7iG6B2RmC3cYa",
          EqualCells: "_1CtoyG6UPAlYp7PCGLXx8L",
          ExpandSectionBlock: "_2cmZMzZlRrszDBF97Di0cD",
          ExpandSectionHeader: "uAvfe31kBh5TZrse069d1",
          EmbedArrow: "_3tVf4GSoWxEOZrxL_PQ4iA",
          ExpandSectionBody: "_33CTl_a7XYxFIng-fm4A5K",
          ExpandSection_WithTitle: "_1dfVJUq9KmDOuhyOZ7lcXv",
          LinkButton: "_3TN0uESBGJ-kUDPWWX2YWz",
          Image: "_3K0NuxYUYncdQ-cNK7udMn",
          Image_Inline: "XEMe7ReBSARw5XHcLR6kF",
          PreservedUnsupportedTag: "_3YMzBRWJTOo7eai1uFGV7i",
          Tag: "_3SEDw4GZynd3ZmTQWlyOcS",
          CalendarEventContainer: "S-ElBHomDkV0L3K4XChxt",
          CalendarEventLink: "_106tp5gLWBvoekGEC8HXQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          DynamicLinkBox: "_3OFDUxRty2ooEGGBg8vLNM",
          DynamicLink_Preview: "_4x92ciMecfHsd6LXEp3zX",
          DynamicLink_Author: "_2CrHQnyBFUGqFf-6TbIsUA",
          DynamicLink_Description: "_1iv64lWG6UxhSX400UsU1S",
          DynamicLink_YouTubeEmbed: "_3Jd9PKMuBGuSbDBCsV03Oo",
          DynamicLink_StoreWidget: "uvn7ESAm1Jwm-SOwZmBWO",
          DynamicLink_Content: "_29vvBvtM17Ec_19L9VJZdk",
          DynamicLink_Name: "_25KAQjQwrv2EL8tnlLeTB7",
          DynamicLink_YoutubeViews: "_3ZgvwxMMqbe_8wVfRiQ9kq",
          Dynamiclink_Content: "_3UUlLNsS9oZt2zNHM5T76z",
          DynamicLink_URL: "_9135FDWNKXjIolFAo7Gub",
          DynamicLink_AuthorName: "_6R7Q24Jlkhs_t0fYUHxQx",
          DynamicLink_Date: "_15wEuEj-SyCZ4J4hJqtmgD",
        };
      },
      chunkid: (module) => {
        module.exports = {
          PreviewYouTubeVideo: "uT9FPw-RIxscziWGUKvsY",
          sizeThumb: "_34JfgvTZH0JwSWKnwpT5tf",
          sizeFull: "_2i-wrmaduZQDwFtlSpRG5b",
          PlaceholderImg: "wJ2r7A6UK2WbDVoNBgd36",
          floatLeft: "_3uqwDPu50ujydI4AiMemeN",
          floatRight: "_29hzTH-jljX8p2qXboZbXW",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Picker: "tid_OE5NJWCCVJQP1PfRc",
          Tabs: "_1yVkTX9Mo_7qb2sxWhM0Cr",
          Tab: "_2CJ0LpiSgVs2JuTlwbzBM",
          Focus: "_1xH5si_KorJpS4ST2Geksh",
          TabContent: "_1mROo5bpUJSg8D8ILx7qpw",
          Active: "_1ddEQAfz6GuVRSEqk-d0r",
          Content: "dUQIH8Qg80N6kjB8UQO0P",
          ItemList: "_2OWGRbhpXNcuR3oih9IGrX",
          Item: "_1SFqyFzFrpPOEAKCrq2kKZ",
          SectionedPageTitle: "ZmsElITvVzU-7a2HXKBZI",
          SectionTitle: "_3WuFl419BivPeLqeVIC939",
          FilterInputContainer: "EuFePPYFGrcf99uLXmBYN",
          FilterInput: "_2l4z-U60lABvd9XWArGjAf",
          AddonPickerMessage: "_2wUk7QR9TZiiKB4bX_9EgD",
          BackgroundAnimation: "NB2T8xbO5KSdw1jQWC0aq",
          "ItemFocusAnim-darkerGrey-nocolor": "_1tzknOYTl338bweAg8VM66",
          "ItemFocusAnim-darkerGrey": "_321Bw1yIABWsLJup9W__Gb",
          "ItemFocusAnim-darkGreySettings": "BSoZ5uHW-lcSEjyeNZol4",
          "ItemFocusAnim-darkGrey": "_3Xhw1BWpHpkagZqxZOv8kb",
          "ItemFocusAnim-grey": "_2OnCF3hKjr89wU_tfFaWX2",
          "ItemFocusAnim-translucent-white-10": "_2uQtLVYFAkVIQ8Mzm6C5K3",
          "ItemFocusAnim-translucent-white-20": "_2vYgLWggR0AEuxE9DPEEk2",
          "ItemFocusAnimBorder-darkGrey": "PgPnyLUdsSEfTVdlxX2a9",
          "ItemFocusAnim-green": "_26b32AeDG8ENv_LcSS6SPE",
          focusAnimation: "NrCY5qgGbXyh_LeVWegvW",
          hoverAnimation: "ECWcgkTWpWeZLs6-rszlL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          chatEntryControls: "_3Ule3rolhZJiBN4yNNtk1s",
          chatTextarea: "_113iuw_HlE_qSgt9cGWCSv",
          chatEntryActionsGroup: "_2WfNoLBdfKwyutA6ho4aSH",
          chatEntryActionsContainer: "W0OhkJtz8zMUW8Mhu0BMO",
          minHeightZero: "_2zeehYTQ2oNY7TvjqGC_gL",
          chatSubmitButton: "RVIs84dAE6wHcjH9tkinc",
          EmbedButton: "_3zOBeq5W4cNK3lRz_7aroW",
          EmoticonPickerButton: "Aupswi7-c-w3XwNO5cp2i",
          disabled: "jaQN2IyN4P8LZXJ6P11qy",
          Inactive: "_3G-I9qj7vqOe6SOFG27ohD",
          AudioLines: "IWabakUFeIH_d5rhBZ6dG",
          Active: "_37tPtXtV-sv9XgDHjS2cnj",
        };
      },
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
    },
  ]);
})();
