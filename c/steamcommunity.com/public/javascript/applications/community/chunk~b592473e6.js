(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9773],
  {
    chunkid: (module) => {
      module.exports = {
        EyeDropperCtn: "_2cT7wst-UhvDbRqPOUFLHl",
        EyeDropperBtn: "_1SFKrl2Gt5OR-Nop7cqHIP",
        ColorPickerCtn: "_3qTvksxeNcdLlXlVi5T__3",
      };
    },
    chunkid: (module) => {
      module.exports = {
        "duration-app-launch": "800ms",
        narrowWidth: "500px",
        Container: "_30v-6zb_axOypIUr5VRHE1",
        SingleLine: "_2i9qH2AM6Wg5660Tkf_fTt",
        ToolbarRowOverflowContainer: "nXEH21nf47u2OH7BjQKei",
        ToolbarRow: "LCeIT0gmFTY8fdfaVgk4j",
        Gap: "_19z0fjj7o0n9vAjVjvYZNU",
        Spacer: "_2m1BBIp5Ewr1TI-BkqFGLM",
        CommandButton: "_1dEi5qzSDdPOzoOQXYbNLN",
        Toggled: "_1Iw5xoXQXfmRjgjWTKbm_G",
        FileUploadPlaceholder: "_2P-FBc3tZWGeeBFplDSb9g",
        ThrobberCtn: "_3QpIkO3kkVZmnulwmiZRHH",
        ThrobberRow: "VIY8ZV4g4NpEMnF-_pHOh",
        Throbber: "_12t6JmDCFT6MqtNVrSi5NJ",
        PendingImage: "_2HezQYTfmFfdRmuB8l9QPI",
        FileUploadDragDrop: "_1WRaNQqBKcUp67ntgoyEeQ",
        FileUploadDropFilesMessage: "I2CE9X_I0GBNYbJf7VYBg",
        TooltipWithShortcut: "zT2msZmm-jBeLe4Dt7smo",
        KeyCap: "_3mZEV9CXrIn4FITvJk3Xy-",
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new _._({
          props: {
            handlePaste(_, _, _) {
              var _;
              const _ =
                null === (_ = _.clipboardData) || void 0 === _
                  ? void 0
                  : _.getData("text/plain").replace(/\n/g, " ");
              if (_) {
                const _ = _.state._.insertText(_);
                _.dispatch(_);
              }
              return !0;
            },
          },
        }),
        _ = {
          Enter: () => !0,
          "Shift-Enter": () => !0,
          "Mod-Enter": () => !0,
        };
      function _(_) {
        const { nMaxChars: _ } = _;
        return (
          (0, _._)(
            (0, _.useMemo)(() => {
              return (
                (_ = _),
                new _._({
                  filterTransaction: (_, _) => _.doc.textContent.length <= _,
                })
              );
              var _;
            }, [_]),
          ),
          _.createElement(_.Fragment, null)
        );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      class _ {
        get pm_schema() {
          return this.m_ProseMirrorSchema;
        }
        get bbcode_dictionary() {
          return this.m_mapBBCodeDictionary;
        }
        get pm_to_bbcode_config() {
          return this.m_PMToBBCodeConfig;
        }
        ConvertAttrToBBCodeArgs(_, _) {
          const _ = this.m_PMToBBCodeConfig.mapNodes.get(_.type);
          return (
            (_ &&
              _.AttrsToBBArgs &&
              __webpack_require__.AttrsToBBArgs(_, _).args) ||
            {}
          );
        }
        constructor(_, _) {
          (this.m_mapBBCodeDictionary = new Map()),
            (this.m_PMToBBCodeConfig = {
              mapNodes: new Map(),
              mapMarks: new Map(),
            });
          const _ = {
              doc: {
                content: "block+",
              },
              text: {
                group: "inline",
              },
              hard_break: {
                inline: !0,
                group: "inline",
                selectable: !1,
                linebreakReplacement: !0,
                parseDOM: [
                  {
                    tag: "br",
                  },
                ],
                toDOM: () => ["br"],
              },
            },
            _ = new Map(),
            _ = new Map(),
            _ = _ ? new Set(_) : void 0;
          for (const _ in _.nodes) {
            const { bbCode: _, ..._ } = _.nodes[_],
              _ = _(_, _);
            _ && ((_[_] = _), _.set(_, _));
          }
          const _ = {};
          for (const _ in _.marks) {
            const { bbCode: _, ..._ } = _.marks[_];
            (_ && !_.has(_.tag)) || ((_[_] = _), _.set(_, _));
          }
          (this.m_ProseMirrorSchema = new _._({
            nodes: _,
            marks: _,
          })),
            _.forEach((_, _) => {
              var _;
              const _ = this.m_ProseMirrorSchema.nodes[_],
                _ = _.nodes[_],
                _ = Array.isArray(_) ? _ : [_];
              let _;
              "list_item+" == _.content
                ? (_ = this.m_ProseMirrorSchema.nodes.list_item)
                : -1 !=
                    (null === (_ = _.content) || void 0 === _
                      ? void 0
                      : _.indexOf("paragraph")) &&
                  (_ = this.m_ProseMirrorSchema.nodes.paragraph),
                _.forEach(
                  ({
                    tag: _,
                    BBArgsToAttrs: _,
                    AttrsToBBArgs: _,
                    convertContentToAttr: _,
                    ..._
                  }) => {
                    this.m_mapBBCodeDictionary.set(_, {
                      Constructor: {
                        node: _,
                        BBArgsToAttrs: _,
                        convertContentToAttr: _,
                        acceptNode: _,
                      },
                      skipFollowingNewline: !0,
                      ..._,
                    });
                  },
                );
              const { tag: _, AttrsToBBArgs: _ } = _[0];
              this.m_PMToBBCodeConfig.mapNodes.set(_, {
                tag: _,
                AttrsToBBArgs: _,
              });
            }),
            _.forEach((_, _) => {
              const _ = this.m_ProseMirrorSchema.marks[_],
                { tag: _, BBArgsToAttrs: _, AttrsToBBArgs: _, ..._ } = _;
              this.m_mapBBCodeDictionary.set(_, {
                Constructor: {
                  mark: _,
                  BBArgsToAttrs: _,
                },
                ..._,
              }),
                this.m_PMToBBCodeConfig.mapMarks.set(_, {
                  tag: _,
                  AttrsToBBArgs: _,
                });
            });
        }
      }
      function _(_, _) {
        if (_) {
          if (Array.isArray(_)) {
            const _ = _.filter((_) => _.has(_.tag));
            return _.length > 0 ? _ : void 0;
          }
          return _.has(_.tag) ? _ : void 0;
        }
        return _;
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const {
            msAutosaveTimeout: __webpack_require__ = 1e3,
            msMaxInterval: _ = 10 * __webpack_require__,
          } = _ || {},
          [_, _] = _.useState(!1),
          _ = _.useRef(0);
        return (
          (0, _._)(
            _,
            _.useCallback(() => {
              (_.current = performance.now()), _(!0);
            }, []),
          ),
          _.useEffect(() => {
            if (!_ || !_) return;
            const _ = performance.now(),
              _ = (_ = !1) => {
                _ = void 0;
                const _ = performance.now(),
                  _ = _ - _.current;
                _ || _ >= __webpack_require__ || _ - _ >= _
                  ? (console.log("Committing changes"),
                    _.CommitChanges(),
                    _(!1))
                  : (_ = window.setTimeout(_, __webpack_require__ - _));
              };
            let _ = window.setTimeout(_, __webpack_require__);
            return () => {
              _ && (window.clearTimeout(_), _(!0));
            };
          }, [_, _, __webpack_require__, _]),
          {
            bDirty: _,
          }
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
      __webpack_require__("chunkid"), __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      const _ = _.createContext(void 0);
      function _(_) {
        const { view: _, pmState: __webpack_require__, children: _ } = _,
          _ = _.useMemo(
            () => ({
              view: _,
              pmState: __webpack_require__,
            }),
            [_, __webpack_require__],
          );
        return _.createElement(
          _.Provider,
          {
            value: _,
          },
          _,
        );
      }
      const _ = _.memo(function (_) {
        const {
          schema: _,
          refOnUpdate: __webpack_require__,
          bSingleLine: _,
        } = _;
        return (
          _(
            _.useMemo(
              () =>
                __webpack_require__ &&
                new _._({
                  view: (_) => ({
                    update: (..._) =>
                      __webpack_require__.current &&
                      __webpack_require__.current(..._),
                  }),
                }),
              [__webpack_require__],
            ),
          ),
          _(_.useMemo(() => (0, _._)(_ ? _._ : {}), [_])),
          _(_ ? _._ : void 0),
          _(_.useMemo(() => (0, _._)(), [])),
          _(
            _.useMemo(
              () =>
                (function (_) {
                  const { nodes: _, marks: __webpack_require__ } = _,
                    _ = (0, _._)(
                      _._,
                      (_, _) => (
                        _ &&
                          __webpack_require__(
                            _._.replaceSelectionWith(
                              _.hard_break.createChecked(),
                            ).scrollIntoView(),
                          ),
                        !0
                      ),
                    ),
                    _ = {
                      "Mod-z": _._,
                      "Mod-y": _._,
                      "Shift-Mod-z": _._,
                      Backspace: _._,
                      Escape: _._,
                      "Mod-Enter": _,
                      "Shift-Enter": _,
                      "Mod-b": (0, _._)(__webpack_require__.strong),
                      "Mod-i": (0, _._)(__webpack_require__.italic),
                      "Mod-u": (0, _._)(__webpack_require__.underline),
                      "Mod-Shift-x": (0, _._)(__webpack_require__.strike),
                      "Ctrl-Shift-s": (0, _._)(__webpack_require__.strike),
                      Enter: (0, _._)(_.list_item),
                      "Mod-[": (0, _._)(_.list_item),
                      "Mod-]": (0, _._)(_.list_item),
                      "Ctrl-Shift-1": (0, _._)(_.heading, {
                        level: 1,
                      }),
                      "Ctrl-Shift-2": (0, _._)(_.heading, {
                        level: 2,
                      }),
                      "Ctrl-Shift-3": (0, _._)(_.heading, {
                        level: 3,
                      }),
                      "Ctrl-Shift-4": (0, _._)(_.heading, {
                        level: 4,
                      }),
                      "Ctrl-Shift-5": (0, _._)(_.heading, {
                        level: 5,
                      }),
                      "Ctrl-Shift-7": (0, _._)(_.ordered_list),
                      "Ctrl-Shift-8": (0, _._)(_.bullet_list),
                      "Ctrl-Shift-0": (0, _._)(_.paragraph),
                    };
                  return (
                    __webpack_require__.code &&
                      (_["Ctrl-Shift-c"] = (0, _._)(__webpack_require__.code)),
                    _.code_block &&
                      (_["Alt-Ctrl-Shift-c"] = (0, _._)(_.code_block)),
                    _.horizontal_rule &&
                      (_["Mod-_"] = (_, _) => (
                        _ &&
                          __webpack_require__(
                            _._.replaceSelectionWith(
                              _.horizontal_rule.create(),
                            ).scrollIntoView(),
                          ),
                        !0
                      )),
                    (0, _._)(_)
                  );
                })(_),
              [_],
            ),
          ),
          _(_.useMemo(() => (0, _._)(_._), [])),
          _(
            _.useMemo(
              () =>
                (function (_) {
                  const { nodes: _, marks: __webpack_require__ } = _;
                  return (0, _._)({
                    rules: [
                      (0, _._)(
                        /^(\d+)\.\s$/,
                        _.ordered_list,
                        (_) => ({
                          order: parseInt(_[1]),
                        }),
                        (_, _) =>
                          _.childCount + _.attrs.order == parseInt(_[1]),
                      ),
                      (0, _._)(/^\s*([-+*])\s$/, _.bullet_list),
                      (0, _._)(
                        /(?<!\w)\*([^*]+)\*/,
                        __webpack_require__.strong,
                      ),
                      (0, _._)(/(?<!\w)_([^_]+)_/, __webpack_require__.italic),
                      (0, _._)(/(?<!\w)~([^~]+)~/, __webpack_require__.strike),
                      (0, _._)(/(?<!\w)`([^`]+)`/, __webpack_require__.code),
                      (0, _._)(/^```$/, _.code_block),
                      (0, _._)(/^(#{1,5})\s$/, _.heading, (_) => ({
                        level: _[1].length,
                      })),
                      _.horizontal_rule &&
                        ((_ = /^(\*\*\*|---|___)$/),
                        (_ = _.horizontal_rule),
                        new _._(_, (_, _, _, _) =>
                          _._.replaceWith(_, _, _.create()),
                        )),
                    ].filter(Boolean),
                  });
                  var _, _;
                })(_),
              [_],
            ),
          ),
          null
        );
      });
      function _(_) {
        const { pmState: _ } = _.useContext(_);
        _.useEffect(() => {
          if (_ && _) return _.InstallPlugin(_);
        }, [_, _]);
      }
      function _() {
        var _;
        return null === (_ = _.useContext(_)) || void 0 === _ ? void 0 : _.view;
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
        _ = __webpack_require__("chunkid");
      function _(_, _, __webpack_require__ = 0) {
        return () => [
          _,
          {
            class: _,
          },
          __webpack_require__,
        ];
      }
      function _(_, _, __webpack_require__ = 0) {
        return [
          _,
          {
            class: _,
          },
          __webpack_require__,
        ];
      }
      const _ = {
          nodes: {
            paragraph: {
              attrs: {
                align: {
                  default: "left",
                },
              },
              content: "inline*",
              group: "block",
              parseDOM: [
                {
                  tag: "p",
                  getAttrs: (_) => ({
                    align: _.style.textAlign || "left",
                  }),
                },
              ],
              toDOM(_) {
                const _ = {
                  class: (0, _._)("pm_paragraph", _().Paragraph),
                };
                return (
                  _.attrs.align &&
                    "left" != _.attrs.align &&
                    (_.style = `text-align: ${_.attrs.align}`),
                  ["p", _, 0]
                );
              },
              bbCode: {
                tag: "p",
                autocloses: !0,
                BBArgsToAttrs: (_) => ({
                  align: _.align,
                }),
                AttrsToBBArgs: (_) => {
                  let _ = {
                    args: {},
                  };
                  return (
                    _.align && "left" != _.align && (_.args.align = _.align), _
                  );
                },
              },
            },
            heading: {
              attrs: {
                level: {
                  default: 1,
                },
                align: {
                  default: "left",
                },
              },
              content: "inline*",
              group: "block",
              defining: !0,
              parseDOM: [1, 2, 3, 4, 5].map(function (_) {
                return {
                  tag: `h${_}`,
                  getAttrs: (_) => ({
                    level: _,
                    align: _.style.textAlign || "left",
                  }),
                };
              }),
              toDOM(_) {
                const _ = {
                  class:
                    `BB_Header${_.attrs.level} ` +
                    _()[`Header${_.attrs.level}`],
                };
                return (
                  _.attrs.align &&
                    "left" != _.attrs.align &&
                    (_.style = `text-align: ${_.attrs.align}`),
                  ["h" + _.attrs.level, _, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(function (_) {
                return {
                  tag: `h${_}`,
                  BBArgsToAttrs: (_) => ({
                    level: _,
                    align: _.align || "left",
                  }),
                  AttrsToBBArgs: (_) => {
                    let _ = {
                      tag: `h${_.level}`,
                      args: {},
                    };
                    return (
                      _.align &&
                        "left" != _.align &&
                        _.args &&
                        (_.args.align = _.align),
                      _
                    );
                  },
                };
              }),
            },
            image: {
              inline: !0,
              attrs: {
                src: {},
                alt: {
                  default: null,
                },
                title: {
                  default: null,
                },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs: (_) => ({
                    src: _.getAttribute("src"),
                    title: _.getAttribute("title"),
                    alt: _.getAttribute("alt"),
                  }),
                },
              ],
              toDOM(_) {
                const { src: _, alt: __webpack_require__, title: _ } = _.attrs;
                return [
                  "img",
                  {
                    src: _,
                    alt: __webpack_require__,
                    title: _,
                    class: _().Image,
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (_) => ({
                  src: _.src,
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    src: _.src,
                  },
                }),
                convertContentToAttr: "src",
              },
            },
            video: {
              inline: !0,
              attrs: {
                webm: {
                  default: "",
                },
                mp4: {
                  default: "",
                },
                poster: {
                  default: "",
                },
                autoplay: {
                  default: !0,
                },
                controls: {
                  default: !1,
                },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "video",
                  getAttrs(_) {
                    if ("video" !== _.tagName) return;
                    const _ = _;
                    let _ = "",
                      _ = "";
                    for (const _ of _.querySelectorAll("source"))
                      "video/mp4" == _.type
                        ? (_ = _.src)
                        : "video/webm" == _.type && (_ = _.src);
                    return {
                      mp4: _,
                      webm: _,
                      poster: _.poster || "",
                      autoplay: !!_.autoplay,
                      controls: !!_.controls,
                    };
                  },
                },
              ],
              toDOM(_) {
                const {
                    webm: _,
                    mp4: __webpack_require__,
                    poster: _,
                    autoplay: _,
                    controls: _,
                  } = _.attrs,
                  _ = [];
                return (
                  _ &&
                    _.push([
                      "source",
                      {
                        src: _,
                        type: "video/webm",
                      },
                    ]),
                  __webpack_require__ &&
                    _.push([
                      "source",
                      {
                        src: __webpack_require__,
                        type: "video/mp4",
                      },
                    ]),
                  [
                    "video",
                    {
                      poster: _,
                      autoPlay: !!_,
                      controls: !!_,
                      loop: !_ && !!_,
                    },
                    ..._,
                  ]
                );
              },
              bbCode: {
                tag: "video",
                BBArgsToAttrs: (_) => ({
                  webm: _.webm,
                  mp4: _.mp4,
                  poster: _.poster,
                  autoplay: "true" == _.autoplay,
                  controls: "true" == _.controls,
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    webm: _.webm || "",
                    mp4: _.mp4 || "",
                    poster: _.poster || "",
                    autoplay: _.autoplay ? "true" : "false",
                    controls: _.controls ? "true" : "false",
                  },
                }),
              },
            },
            bullet_list: {
              ..._._,
              content: "list_item+",
              group: "block",
              toDOM: _("ul", _().List),
              bbCode: {
                tag: "list",
              },
            },
            ordered_list: {
              ..._._,
              content: "list_item+",
              group: "block",
              toDOM: _("ol", _().OrderedList),
              bbCode: {
                tag: "olist",
              },
            },
            list_item: {
              ..._._,
              content: "paragraph block*",
              toDOM: _("li", _().ListItem),
              bbCode: {
                tag: "*",
                autocloses: !0,
              },
            },
            code_block: {
              content: "inline*",
              marks: "",
              group: "block",
              code: !0,
              defining: !0,
              parseDOM: [
                {
                  tag: "pre",
                  preserveWhitespace: "full",
                },
              ],
              toDOM: () => [
                "pre",
                {
                  class: _().CodeBlock,
                },
                [
                  "code",
                  {
                    class: _().Code,
                  },
                  0,
                ],
              ],
              bbCode: {
                tag: "code",
              },
            },
          },
          marks: {
            strong: {
              parseDOM: [
                {
                  tag: "strong",
                },
                {
                  tag: "b",
                  getAttrs: (_) => "normal" != _.style.fontWeight && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (_) => "strong" == _.type.name,
                },
                {
                  style: "font-weight",
                  getAttrs: (_) => /^(bold(er)?|[5-9]\d{2,})$/.test(_) && null,
                },
              ],
              toDOM: _("b", (0, _._)("BB_Bold", _().Bold)),
              bbCode: {
                tag: "b",
              },
            },
            italic: {
              parseDOM: [
                {
                  tag: "i",
                },
                {
                  tag: "em",
                },
                {
                  style: "font-style=italic",
                },
                {
                  style: "font-style=normal",
                  clearMark: (_) => "em" == _.type.name,
                },
              ],
              toDOM: _("i", (0, _._)("BB_Italic", _().Italic)),
              bbCode: {
                tag: "i",
              },
            },
            underline: {
              parseDOM: [
                {
                  tag: "u",
                },
                {
                  style: "text-decoration=underline",
                },
              ],
              toDOM: _("u", (0, _._)("BB_Underline", _().Underline)),
              bbCode: {
                tag: "u",
              },
            },
            strike: {
              parseDOM: [
                {
                  style: "text-decoration=line-through",
                },
              ],
              toDOM: _("span", (0, _._)("BB_Strike", _().Strike)),
              bbCode: {
                tag: "strike",
              },
            },
            code: {
              parseDOM: [
                {
                  tag: "code",
                },
              ],
              toDOM: _("code", (0, _._)("BB_Code", _().Code)),
              bbCode: {
                tag: "c",
              },
            },
            link: {
              attrs: {
                href: {},
                title: {
                  default: null,
                },
              },
              inclusive: !1,
              parseDOM: [
                {
                  tag: "a[href]",
                  getAttrs: (_) => ({
                    href: _.getAttribute("href"),
                    title: _.getAttribute("title"),
                  }),
                },
              ],
              toDOM(_) {
                const { href: _, title: __webpack_require__ } = _.attrs;
                return [
                  "a",
                  {
                    href: _,
                    title: __webpack_require__,
                    class: "BB_Link",
                  },
                  0,
                ];
              },
              bbCode: {
                tag: "url",
                BBArgsToAttrs: (_) => ({
                  href: _[""],
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    "": _.href,
                  },
                }),
                convertContentToAttr: "href",
              },
            },
          },
        },
        _ = {
          node: {},
          marks: {
            color: {
              attrs: {
                color: {},
              },
              parseDOM: [
                {
                  style: "color",
                  getAttrs: (_) => ({
                    color: _,
                  }),
                },
              ],
              toDOM: (_) => [
                "span",
                {
                  style: `color: ${_.attrs.color}`,
                  class: (0, _._)("BB_Color", _().Color),
                },
                0,
              ],
              bbCode: {
                tag: "color",
                BBArgsToAttrs: (_) => ({
                  color: _[""],
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    "": _.color,
                  },
                }),
              },
              inclusive: !0,
              excludes: "",
            },
            bgcolor: {
              attrs: {
                color: {},
              },
              parseDOM: [
                {
                  style: "bgcolor",
                  getAttrs: (_) => ({
                    color: _,
                  }),
                },
              ],
              toDOM: (_) => [
                "span",
                {
                  style: `background-color: ${_.attrs.color}`,
                  class: (0, _._)("BB_BGColor", _().BGColor),
                },
                0,
              ],
              bbCode: {
                tag: "bgcolor",
                BBArgsToAttrs: (_) => ({
                  color: _[""],
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    "": _.color,
                  },
                }),
              },
              inclusive: !0,
              excludes: "",
            },
          },
        };
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor(_, _, _) {
          var _;
          (this.m_nodes = []),
            (this.m_schema = _),
            (this.m_bConvertNewlinesToBR =
              null !== (_ = null == _ ? void 0 : _.bConvertNewlinesToBR) &&
              void 0 !== _ &&
              _);
          const _ = _ && "mark" in _;
          this.m_fnProcessText = _ || null == _ ? void 0 : _.fnProcessText;
        }
        AppendText(_, _) {
          _.length &&
            (this.m_bConvertNewlinesToBR
              ? this.m_nodes.push(...this.GenerateBreaksForNewlines(_))
              : this.m_nodes.push(...this.TextNode(_)));
        }
        AppendNode(_) {
          this.m_nodes.push(_);
        }
        GetElements() {
          return this.m_nodes;
        }
        GenerateBreaksForNewlines(_) {
          const _ = [];
          let _ = 0;
          for (let _ = _.indexOf("\n", _); -1 !== _; _ = _.indexOf("\n", _))
            _ != _ && _.push(...this.TextNode(_.substring(_, _))),
              _.push(this.m_schema.nodes.hard_break.createChecked()),
              (_ = _ + 1);
          return _ < _.length && _.push(...this.TextNode(_.substring(_))), _;
        }
        TextNode(_) {
          const _ = this.m_fnProcessText && this.m_fnProcessText(_);
          return _ || [this.m_schema.text(_)];
        }
      }
      class _ extends _._ {
        constructor(_, _) {
          super(_.bbcode_dictionary, (_) => {
            const _ =
              (null == _ ? void 0 : _.tag) && _.bbcode_dictionary.get(_.tag);
            return new _(
              _.pm_schema,
              _,
              _ && "Constructor" in _ ? _.Constructor : void 0,
            );
          }),
            (this.m_mapPMBBNodes = new Map()),
            (this.m_schemaConfig = _),
            this.m_schemaConfig.bbcode_dictionary.forEach((_) => {
              "node" in _.Constructor &&
                this.m_mapPMBBNodes.set(_.Constructor.node.name, _.Constructor);
            });
        }
        get schema() {
          return this.m_schemaConfig.pm_schema;
        }
        ParseBBCode(_) {
          const _ = this.Parse(_, this.BBNodeToPMNode.bind(this), !0);
          return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
            {},
            this.ConvertLineBreaksToParagraphs(_._.fromArray(_)),
          );
        }
        TryCreateNode(_, _, _) {
          let _,
            _ = _._.from(_);
          if (
            !_.node.validContent(_) &&
            (_.node.isInline ||
              (_ = _._.from(
                _.filter(
                  (_) =>
                    (!_.isText || !_.text.match(/^\s*$/)) &&
                    !(
                      _.type == this.schema.nodes.hard_break &&
                      !_.node.validContent(_._.from(_))
                    ),
                ),
              )),
            !_.node.validContent(_))
          ) {
            const _ = _.acceptNode;
            _ = [];
            let _ = [],
              _ = !1,
              _ = !1;
            for (let _ = 0; _ < _.childCount; _++) {
              const _ = _.child(_),
                _ = _._.from(_),
                _ = _.node.validContent(_);
              _ || (!_ && !(null == _ ? void 0 : _.validContent(_)))
                ? ((_ = !0), _.push(_))
                : (_ || (_ = !0), __webpack_require__.push(_));
            }
            if ((console.assert(!_ || _), _ && _)) {
              _.isBlock &&
                _.length > 1 &&
                _[_.length - 1].type == this.schema.nodes.hard_break &&
                (_ = __webpack_require__.slice(0, -1));
              const _ = this.m_mapPMBBNodes.get(_.name);
              let _;
              (0, _._)(
                _,
                `Indicated acceptNode type ${_.name} for ${_.node.name} missing`,
              );
              try {
                _ = _
                  ? this.TryCreateNode(_, _, void 0)
                  : _.createChecked(void 0, _);
              } catch (_) {
                console.error(_), (_ = []), (_ = [..._, ..._]);
              }
              _ = _._.from(_);
            } else _ = _._.from(_);
          }
          try {
            const _ = _.node.createAndFill(_, _) || _.node.createChecked(_, _);
            return _ ? [_, ..._] : _;
          } catch (_) {
            return (
              (0, _._)(
                !1,
                `Invalid content for node type ${_.node.name}, removing and promoting children.`,
              ),
              _
            );
          }
        }
        BBNodeToPMNode(_, _, ...__webpack_require__) {
          let _ = _.BBArgsToAttrs ? _.BBArgsToAttrs(_.args || {}) : void 0;
          try {
            if (
              ("convertContentToAttr" in _ &&
                _.convertContentToAttr &&
                ((_ && _[_.convertContentToAttr]) ||
                  (_ = {
                    ...(_ || {}),
                    [_.convertContentToAttr]:
                      ((_ = __webpack_require__),
                      _.filter((_) => _.isText)
                        .map((_) => _.text)
                        .join()),
                  }),
                "node" in _ && (__webpack_require__ = [])),
              "node" in _)
            )
              return this.TryCreateNode(_, __webpack_require__, _);
            {
              const _ = _.mark.create(_);
              return __webpack_require__.map((_) =>
                this.RecursivelyApplyMark(_, _),
              );
            }
          } catch (_) {
            return (
              console.error(`Error parsing [${_.tagname}] tag: ${_}`, _), []
            );
          }
          var _;
        }
        RecursivelyApplyMark(_, _) {
          if (_.isText || _.type.allowsMarkType(_.type))
            return _.mark([..._.marks, _]);
          {
            const _ = [];
            return (
              _.descendants(
                (_) => (
                  __webpack_require__.push(this.RecursivelyApplyMark(_, _)), !1
                ),
              ),
              _.type.create(_.attrs, _, _.marks)
            );
          }
        }
        ConvertLineBreaksToParagraphs(_) {
          const _ = new Map(),
            _ = this.m_schemaConfig.pm_schema;
          this.m_mapPMBBNodes.forEach((_) => {
            _.acceptNode && _.set(_.acceptNode.name, _.node);
          });
          const _ = [],
            _ = {
              nodes: [],
              nodeType: void 0,
              reset() {
                (this.nodes = []), (this.nodeType = void 0);
              },
              accumulate(_, _) {
                return (
                  this.nodeType && _ != this.nodeType && this.emit(),
                  (this.nodeType = _),
                  this.nodes.push(_),
                  !0
                );
              },
              emit(_ = !1) {
                const _ = this.nodeType || (_ ? _.nodes.paragraph : void 0);
                _ && (_.push(_.createChecked({}, this.nodes)), this.reset());
              },
            };
          return (
            _.forEach((_) => {
              const _ = _.type == _.nodes.hard_break,
                _ = _._.from(_);
              if (_ || _.topNodeType.validContent(_)) {
                const _ = _ && _.nodes.length > 0;
                _.emit(),
                  _
                    ? _ || _.push(_.nodes.paragraph.createChecked())
                    : _.push(_);
              } else {
                let _;
                if (
                  ((_ = _.nodes.paragraph.validContent(_)
                    ? _.nodes.paragraph
                    : _.get(_.type.name)),
                  _)
                )
                  _.accumulate(_, _);
                else {
                  (0, _._)(
                    !1,
                    `Couldn't accept ${_.type.name} at root of document, converting to paragraph`,
                  );
                  const _ = (function (_) {
                    let _ = "";
                    return (
                      _.descendants((_) => {
                        _.isText && (_ += _.text);
                      }),
                      _
                    );
                  })(_);
                  _ &&
                    _.accumulate(
                      _.nodes.paragraph,
                      __webpack_require__.text(_),
                    );
                }
              }
            }),
            (!_.nodes.length && _.length) || _.emit(!0),
            _._.from(_)
          );
        }
      }
      function _(_, _) {
        return _(_.pm_schema, _.pm_to_bbcode_config, _, []);
      }
      function _(_, _, _, _) {
        let _ = _.marks,
          _ = "";
        const _ = _.mapNodes.get(_.type),
          { tag: _, args: _ } = (function (_, _) {
            if (_ && _.AttrsToBBArgs) {
              const { tag: _ = _.tag, args: _ = {} } = _.AttrsToBBArgs(
                _.attrs,
                _,
              );
              return {
                tag: _,
                args: _,
              };
            }
            return {
              tag: null == _ ? void 0 : _.tag,
              args: {},
            };
          })(_, _);
        return (
          "emoticon" == _ ? (_ += ":") : _ && (_ += (0, _._)(_, _)),
          _.content.forEach((_) => {
            ([_, _] = _(_, _, _.marks, _)),
              ([_, _] = (function (_, _, _, _) {
                let _;
                for (const _ of _)
                  if (-1 === _.indexOf(_)) {
                    _ || (_ = _.slice());
                    const _ = _.mapMarks.get(_.type);
                    if (((0, _._)(_, "mark missing bbtag"), _)) {
                      _.push(_);
                      const { args: _, tag: _ } = _(_, _);
                      _ += (0, _._)(_, _);
                    }
                  }
                return [_, null != _ ? _ : _];
              })(_, _, _.marks, _)),
              _.type.isText
                ? (_ += (0, _._)(_.text || ""))
                : _.type == _.nodes.hard_break
                  ? (_ += "\n")
                  : (_ += _(_, _, _, _));
          }),
          ([_] = _(_, _, _, _)),
          "emoticon" == _ ? (_ += ":") : _ && (_ += (0, _._)(_)),
          _
        );
      }
      function _(_, _, _, _) {
        const _ = [];
        for (const _ of _) -1 === __webpack_require__.indexOf(_) && _.push(_);
        if (!_.length) return [_, _];
        const _ = _.slice();
        for (
          ;
          _.length && ((0, _._)(_.length, "no marks left to close"), _.length);
        ) {
          const _ = _.pop(),
            _ = _.mapMarks.get(_.type),
            { tag: _ } = _(_, _);
          _ += (0, _._)(_);
          const _ = _.indexOf(_);
          -1 != _ && _.splice(_, 1);
        }
        return [_, _];
      }
      function _(_, _) {
        if (_ && _.AttrsToBBArgs) {
          const { tag: __webpack_require__ = _.tag, args: _ = {} } =
            _.AttrsToBBArgs(_.attrs, _);
          return {
            tag: __webpack_require__,
            args: _,
          };
        }
        return {
          tag: null == _ ? void 0 : _.tag,
          args: {},
        };
      }
      const _ = new _._("CProseMirrorState - OnChange");
      class _ {
        constructor(_, _, _, _) {
          (this.m_bHasUncomittedChanges = !1),
            (this.m_onStateChangedCallbacks = new _._());
          const { parser: _ } = null != _ ? _ : {};
          (this.m_schemaConfig = _),
            (this.m_bbcodeParser = new _(_, null != _ ? _ : {})),
            (this.m_bbcode = _),
            (this.m_fnCommitChanges = _),
            (this.m_state = this.ConstructState());
        }
        CommitChanges() {
          this.m_currentDoc &&
            this.m_bHasUncomittedChanges &&
            ((this.m_bbcode = _(this.m_currentDoc, this.m_schemaConfig)),
            this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
            (this.m_bHasUncomittedChanges = !1));
        }
        BHasUncomittedChanges() {
          return this.m_bHasUncomittedChanges;
        }
        UpdateState(_) {
          var _;
          const _ = _(
            (null === (_ = this.m_view) || void 0 === _ ? void 0 : _.state._) ||
              this.m_state._,
          );
          _ &&
            _.docChanged &&
            (this.m_view
              ? this.m_view.dispatch(_)
              : (this.m_state = this.m_state.apply(_)));
        }
        get state() {
          return this.m_state;
        }
        get schemaConfig() {
          return this.m_schemaConfig;
        }
        get bbcodeParser() {
          return this.m_bbcodeParser;
        }
        get OnStateChangedCallbacks() {
          return this.m_onStateChangedCallbacks;
        }
        ConstructState() {
          const _ = new _._({
              key: _,
              view: (_) => (
                console.assert(!this.m_view),
                (this.m_view = _),
                {
                  update: (_, _) => this.OnStateChange(_, _.state),
                  destroy: () => (this.m_view = void 0),
                }
              ),
            }),
            _ = [(0, _._)(), _];
          return _._.create({
            schema: this.m_schemaConfig.pm_schema,
            doc: this.m_bbcodeParser.ParseBBCode(this.m_bbcode),
            plugins: _,
          });
        }
        InstallPlugin(_) {
          var _;
          const _ = this.m_view ? this.m_view.state : this.m_state;
          return (
            _.plugins.includes(_) ||
              ((this.m_state = __webpack_require__.reconfigure({
                plugins: [..._.plugins, _],
              })),
              null === (_ = this.m_view) ||
                void 0 === _ ||
                _.updateState(this.m_state)),
            () => {
              var _;
              const _ = this.m_view ? this.m_view.state : this.m_state;
              (this.m_state = __webpack_require__.reconfigure({
                plugins: _.plugins.filter((_) => _ != _),
              })),
                null === (_ = this.m_view) ||
                  void 0 === _ ||
                  _.updateState(this.m_state);
            }
          );
        }
        OnStateChange(_, _) {
          (this.m_state = _),
            _.doc &&
              _.doc != _.doc &&
              ((this.m_currentDoc = _.doc),
              (this.m_bHasUncomittedChanges = !0),
              this.m_onStateChangedCallbacks.Dispatch(
                this.m_currentDoc,
                _.doc,
              ));
        }
        ReplaceDocument(_) {
          this.m_bbcode != _ &&
            this.UpdateState((_) => {
              this.m_bbcode = _;
              const _ = this.m_bbcodeParser.ParseBBCode(_);
              return this.m_state._.replaceWith(
                0,
                this.m_state.doc.content.size,
                _,
              ).scrollIntoView();
            });
        }
      }
      function _(_, _) {
        (0, _._)(null == _ ? void 0 : _.OnStateChangedCallbacks, _);
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const {
          from: __webpack_require__,
          $from: _,
          _: _,
          empty: _,
        } = _.selection;
        return _
          ? !!_.isInSet(_.storedMarks || _.marks())
          : _.doc.rangeHasMark(__webpack_require__, _, _);
      }
      function _(_, _, _) {
        var _;
        const { parent: _ } = _,
          _ = _.childAfter(_.parentOffset),
          _ =
            null === (_ = _.node) || void 0 === _
              ? void 0
              : _.marks.find((_) => _.type == _);
        if (!_) return;
        let _ = __webpack_require__.index() - 1,
          _ = __webpack_require__.start() + _.offset;
        for (; _ >= 0 && _.isInSet(_.child(_).marks); )
          (_ -= _.child(_).nodeSize), (_ -= 1);
        let _ = __webpack_require__.index() + 1,
          _ = __webpack_require__.start() + _.offset + _.node.nodeSize;
        for (; _ < _.childCount && _.isInSet(_.child(_).marks); )
          (_ += _.child(_).nodeSize), (_ += 1);
        return {
          from: _,
          _: _,
          slice: _.doc.slice(_, _),
          mark: _,
        };
      }
      function _(_, _, _) {
        if (_.type !== _) return !1;
        if (void 0 === _) return !0;
        for (const _ in _) if (_[_] !== _.attrs[_]) return !1;
        return !0;
      }
      function _(_, _, _) {
        let { $from: _, _: _ } = _.selection;
        for (let _ = _.depth; _ > 0; _--) {
          if (_ > _.end(_)) return !1;
          if (_(_.node(_), _, _)) return !0;
        }
        return !1;
      }
      function _(_, _, _) {
        const { $from: _, _: _ } = _.selection;
        for (let _ = _.sharedDepth(_); _ > 0; _--) {
          const _ = _.node(_);
          if (void 0 === _ ? _.type === _ : _.hasMarkup(_, _))
            return _.before(_);
        }
      }
      function _(_, _, __webpack_require__ = {}) {
        return new _._(_, (_, _, _, _) => {
          const _ =
              __webpack_require__ instanceof Function
                ? __webpack_require__(_)
                : __webpack_require__,
            _ = _._;
          if (_[1]) {
            const _ = _ + _[0].indexOf(_[1]),
              _ = _ + _[1].length;
            _ < _ && _.delete(_, _),
              _ > _ && _.delete(_, _),
              (_ = _ + _[1].length);
          }
          return _.addMark(_, _, _.create(_)), _.removeStoredMark(_), _;
        });
      }
      function _(_, _, _) {
        const _ = {
            left: _,
            top: _,
          },
          _ = _.posAtCoords(_);
        if (null == _ ? void 0 : _.pos) {
          const _ = _.state.doc.resolve(_.pos);
          _.dispatch(_.state._.setSelection(_._.near(_)));
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
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
          NoBorder: "noborder",
          EqualCells: "equalcells",
        },
        _ = _._({
          tableGroup: "block",
          cellContent: "paragraph block*",
          cellAttributes: {
            class: {
              default: _().TableCell,
              setDOMAttr: (_, _) => {
                _.class = _;
              },
            },
          },
        }),
        _ = {
          BBArgsToAttrs: (_) => {
            const _ = {};
            return (
              _.colspan && (_.colspan = parseInt(_.colspan)),
              _.rowspan && (_.rowspan = parseInt(_.rowspan)),
              _.colwidth &&
                (_.colwidth = _.colwidth.split(",").map((_) => parseInt(_))),
              _
            );
          },
          AttrsToBBArgs: (_) => {
            const _ = {};
            return (
              _.colspan && 1 != _.colspan && (_.colspan = _.colspan.toString()),
              _.rowspan && 1 != _.rowspan && (_.rowspan = _.rowspan.toString()),
              _.colwidth && (_.colwidth = _.colwidth.join(",")),
              {
                args: _,
              }
            );
          },
        },
        _ = {
          table: {
            ..._.table,
            toDOM: (_) =>
              (0, _._)(
                "table",
                (0, _._)(
                  _().Table,
                  _.attrs.noborder && _().NoBorder,
                  _.attrs.equalcells && _().EqualCells,
                ),
                ["tbody", 0],
              ),
            attrs: {
              [_.NoBorder]: {
                default: !1,
              },
              [_.EqualCells]: {
                default: !0,
              },
            },
            bbCode: {
              tag: "table",
              BBArgsToAttrs: (_) => ({
                noborder: !!_.noborder,
                equalcells: !!_.equalcells,
              }),
              AttrsToBBArgs: (_, _) => {
                const _ = {};
                _.noborder && (_.noborder = "1"),
                  _.equalcells && (_.equalcells = "1");
                const _ = _.child(0);
                if (_) {
                  let _ = [];
                  for (let _ = 0; _ < _.childCount; _++) {
                    const _ = _.child(_).attrs;
                    _.colwidth ? _.push(..._.colwidth) : _.push(void 0);
                  }
                  _.colwidth = _.join(",");
                }
                return {
                  args: _,
                };
              },
            },
          },
          table_row: {
            ..._.table_row,
            toDOM: (0, _._)("tr", _().TableRow),
            bbCode: {
              tag: "tr",
            },
          },
          table_cell: {
            ..._.table_cell,
            bbCode: {
              ..._,
              tag: "td",
            },
          },
          table_header: {
            ..._.table_header,
            bbCode: {
              ..._,
              tag: "th",
            },
          },
        };
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
      function _(_) {
        const {
            color: _,
            onChange: __webpack_require__,
            strTitle: _,
            disableAlpha: _,
          } = _,
          [_, _] = (0, _.useState)(() => _ || "rgba(255, 255, 255, 1)"),
          _ = (0, _.useCallback)(async () => {
            if ("EyeDropper" in window)
              try {
                const _ = new window.EyeDropper(),
                  _ = await _.open(),
                  _ = (function (_) {
                    const _ = parseInt(_.slice(1), 16);
                    return `rgba(${(_ >> 16) & 255}, ${(_ >> 8) & 255}, ${255 & _}, 1)`;
                  })(_.sRGBHex);
                _(_), __webpack_require__(_);
              } catch (_) {
                console.warn((0, _._)("#Sale_EyeDropperFailed"), _);
              }
            else alert((0, _._)("#Sale_EyeDropperError"));
          }, [__webpack_require__]);
        return _.createElement(
          "div",
          null,
          Boolean(_) && _.createElement(_._, null, _),
          _.createElement(_._, {
            onChange: (_) => {
              const _ = (function (_) {
                return `rgba(${_.rgb._}, ${_.rgb._}, ${_.rgb._}, ${_.rgb._})`;
              })(_);
              _(_), __webpack_require__(_);
            },
            color: _,
            disableAlpha: _,
            className: _().ColorPickerCtn,
          }),
          _.createElement(
            "div",
            {
              className: _().EyeDropperCtn,
            },
            _.createElement(
              _._,
              {
                toolTipContent: (0, _._)("#Sale_BackgroundColorPicker"),
              },
              _.createElement(
                _._,
                {
                  className: _().EyeDropperBtn,
                  onClick: _,
                },
                _.createElement(_.O7b, null),
              ),
            ),
          ),
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            closeModal: _,
            strTitle: __webpack_require__,
            onOK: _,
            strOKText: _,
            onCancel: _,
            strCancelText: _,
            bOKDisabled: _,
            bCancelDisabled: _,
            strClassNameContent: _ = "GenericFormDialog",
            children: _,
          } = _,
          _ = _.useCallback(() => {
            _ && _(), _();
          }, [_, _]),
          _ = _ ? void 0 : _;
        return _.createElement(
          _._,
          {
            onEscKeypress: _,
          },
          _.createElement(
            _._,
            {
              onSubmit: _,
              classNameContent: _,
            },
            _.createElement(_._, null, __webpack_require__),
            _,
            _.createElement(
              _._,
              null,
              _.createElement(_._, {
                strOKText: _,
                bOKDisabled: _,
                onCancel: _,
                strCancelText: _,
                bCancelDisabled: _,
              }),
            ),
          ),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _, _) {
        const [_, _] = _.useState(void 0),
          _ = _.useCallback(
            (_) => {
              const { state: _, dispatch: _ } = _,
                _ = _.selection;
              let { from: _, _: _, empty: _ } = _;
              const _ = _ ? _.marks.color : _.marks.bgcolor;
              let _ = "",
                _ = "";
              const _ = _ ? _.$from : _.doc.resolve(_),
                _ = (0, _._)(_, _, _),
                _ = !!_;
              _
                ? ((_ = _.mark.attrs.color),
                  _
                    ? ((_ = _.slice.content.textBetween(
                        0,
                        _.slice.content.size,
                      )),
                      (_ = _.from),
                      (_ = _._))
                    : ((_ = Math.max(_.from, _)),
                      (_ = Math.min(_._, _)),
                      (_ = _.slice.content.textBetween(
                        _ - _.from,
                        _ - _.from,
                      ))))
                : _ || (_ = _.doc.cut(_, _).textContent);
              let _ = {};
              if (_)
                for (const _ in _) {
                  const _ = _[_],
                    _ = _ ? _.fnReadValue(_.mark) : _.defaultValue;
                  _[_] = _;
                }
              _({
                view: _,
                strColor: _,
                strTargetText: _,
                bIsUpdate: _,
                addtlAttrs: _,
                addtlAttrsValues: _,
                from: _,
                _: _,
              });
            },
            [_, _, _.marks.bgcolor, _.marks.color],
          ),
          _ = null == _ ? void 0 : _.view,
          _ = _.useCallback(() => {
            window.setTimeout(() => _.focus(), 1), _(void 0);
          }, [_]);
        return [
          _,
          _ &&
            _.createElement(
              _._,
              {
                active: !0,
              },
              _.createElement(_, {
                schema: _,
                bColor: _,
                closeModal: _,
                ..._,
              }),
            ),
        ];
      }
      const _ = _.memo(function (_) {
        const {
            schema: _,
            strColor: __webpack_require__,
            bIsUpdate: _,
            strTargetText: _,
            bColor: _,
            addtlAttrs: _,
            addtlAttrsValues: _,
            closeModal: _,
            view: _,
            from: _,
            _: _,
          } = _,
          [_, _] = _.useState(__webpack_require__),
          _ = _.useRef(null),
          [_, _] = _.useState(_),
          _ = _.useCallback(() => {
            const { state: _, dispatch: __webpack_require__ } = _,
              _ = _ ? _.marks.color : _.marks.bgcolor;
            if (!_) return void console.log("debug: no markType");
            if (!_ || !_.startsWith("#") || 7 !== _.length)
              return void console.log("debug: invalid color text: " + _);
            if (_ < 0 || _ > _.doc.content.size || _ > _)
              return void console.error("Invalid selection range:", _, _);
            let _;
            try {
              if (
                ((_ = _.create({
                  color: _,
                  ..._,
                })),
                !_)
              )
                return void console.error(
                  "Failed to create mark — mark is null",
                );
            } catch (_) {
              return void console.error("Failed to create color mark:", _);
            }
            let _ = _._;
            _ === _
              ? (_ = _.addStoredMark(_))
              : ((_ = _.removeMark(_, _, _)),
                (_ = _.addMark(_, _, _)),
                (_ = _.setSelection(_._.create(_.doc, _)))),
              "dev" == _._.WEB_UNIVERSE &&
                console.log(
                  "Dispatching transaction:",
                  _.steps.map((_) => _.toJSON()),
                  _,
                  _,
                );
            try {
              (_.docChanged || _.steps.length > 0) && __webpack_require__(_);
            } catch (_) {
              console.error(_);
            } finally {
              requestAnimationFrame(() => _());
            }
          }, [_, _, _, _, _, _.marks.bgcolor, _.marks.color, _, _]);
        _.useLayoutEffect(() => {
          var _, _, _;
          (
            null ===
              (_ =
                null === (_ = _.current) || void 0 === _ ? void 0 : _.value) ||
            void 0 === _
              ? void 0
              : _.length
          )
            ? _.current.focus()
            : null === (_ = _.current) ||
              void 0 === _ ||
              __webpack_require__.focus();
        }, []);
        const _ = (0, _._)(
            _ ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
          ),
          _ = _
            ? (0, _._)("#Button_Save")
            : (0, _._)(
                _ ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
              );
        return _.createElement(
          _._,
          {
            onOK: _,
            closeModal: _,
            strTitle: _,
            strOKText: _,
            bOKDisabled: !_ || 0 == _.length,
          },
          _.createElement(_._, {
            color: _,
            strTitle: _,
            disableAlpha: !0,
            onChange: (_) =>
              _(
                (function (_) {
                  const _ = _.match(
                    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
                  );
                  if (_) {
                    let [, _, __webpack_require__, _, _] = _;
                    return `#${((1 << 24) + (parseInt(_, 10) << 16) + (parseInt(__webpack_require__, 10) << 8) + parseInt(_, 10)).toString(16).slice(1)}`;
                  }
                  return "#7e3232";
                })(_),
              ),
          }),
        );
      });
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
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const [__webpack_require__, _] = _.useState(void 0),
          _ = _.useCallback(
            (_) => {
              const _ = _.state.selection;
              let _ = "",
                _ = "",
                { from: _, _: _ } = _;
              const _ = (0, _._)(_.state, _.marks.link, _.$from),
                _ = !!_;
              _
                ? ((_ = _.mark.attrs.href),
                  _.empty
                    ? ((_ = _.slice.content.textBetween(
                        0,
                        _.slice.content.size,
                      )),
                      (_ = _.from),
                      (_ = _._))
                    : ((_ = Math.max(_.from, _.from)),
                      (_ = Math.min(_._, _._)),
                      (_ = _.slice.content.textBetween(
                        _ - _.from,
                        _ - _.from,
                      ))))
                : _.state.selection.empty ||
                  ((_ = _.state.doc.cut(
                    _.state.selection.from,
                    _.state.selection._,
                  ).textContent),
                  _.match(/^https?:\/\//) && (_ = _));
              let _ = {};
              if (_)
                for (const _ in _) {
                  const _ = _[_],
                    _ = _
                      ? __webpack_require__.fnReadValue(_.mark)
                      : _.defaultValue;
                  _[_] = _;
                }
              _({
                view: _,
                strLinkText: _,
                strLinkHref: _,
                bIsUpdate: _,
                addtlAttrs: _,
                addtlAttrsValues: _,
                from: _,
                _: _,
              });
            },
            [_.marks.link, _],
          ),
          _ = null == __webpack_require__ ? void 0 : __webpack_require__.view,
          _ = _.useCallback(() => {
            window.setTimeout(() => _.focus(), 1), _(void 0);
          }, [_]);
        return [
          _,
          __webpack_require__ &&
            _.createElement(
              _._,
              {
                active: !0,
              },
              _.createElement(_, {
                schema: _,
                closeModal: _,
                ...__webpack_require__,
              }),
            ),
        ];
      }
      const _ = _.memo(function (_) {
        const {
            schema: _,
            strLinkText: __webpack_require__,
            strLinkHref: _,
            bIsUpdate: _,
            addtlAttrs: _,
            addtlAttrsValues: _,
            closeModal: _,
            view: _,
            from: _,
            _: _,
          } = _,
          [_, _] = _.useState(__webpack_require__),
          [_, _] = _.useState(_),
          _ = _.useRef(null),
          _ = _.useRef(null),
          [_, _] = _.useState(_);
        _.useLayoutEffect(() => {
          var _, _, _, _, _;
          (
            null ===
              (_ =
                null === (_ = _.current) || void 0 === _ ? void 0 : _.value) ||
            void 0 === _
              ? void 0
              : _.length
          )
            ? (
                null ===
                  (_ =
                    null === (_ = _.current) || void 0 === _
                      ? void 0
                      : _.value) || void 0 === _
                  ? void 0
                  : _.length
              )
              ? (_.current.Focus(), _.current.element.select())
              : _.current.Focus()
            : null === (_ = _.current) || void 0 === _ || _.Focus();
        }, []);
        const _ = _
            ? (0, _._)("#FormattingToolbar_EditLink")
            : (0, _._)("#FormattingToolbar_InsertLink"),
          _ = _
            ? (0, _._)("#Button_Save")
            : (0, _._)("#FormattingToolbar_InsertLink");
        return _.createElement(
          _._,
          {
            onOK: () => {
              var _, _, _, _, _;
              let _ = _.state._;
              if (
                !(
                  "dev" != _._.WEB_UNIVERSE ||
                  (_ &&
                    null != _ &&
                    null != _ &&
                    (null === (_ = null == _ ? void 0 : _.marks) || void 0 === _
                      ? void 0
                      : _.link))
                )
              )
                return void console.warn(
                  "Missing required data in insertLink",
                  {
                    view: _,
                    from: _,
                    _: _,
                    schema: _,
                  },
                );
              const _ = {
                href: _,
              };
              for (const _ in _) _[_] = _[_];
              const _ =
                null === (_ = _.marks.link) || void 0 === _
                  ? void 0
                  : __webpack_require__.create(_);
              if ("dev" == _._.WEB_UNIVERSE && !_)
                return void console.error(
                  "Failed to create link mark with attrs",
                  _,
                );
              const _ = _.text(_ || _, [_]);
              "dev" == _._.WEB_UNIVERSE &&
                (console.log(
                  "Replacement node:",
                  (null === (_ = _.toJSON) || void 0 === _
                    ? void 0
                    : _.call(_)) || _,
                ),
                console.log("Transaction range from-to:", {
                  from: _,
                  _: _,
                }),
                console.log(
                  "Document slice at range:",
                  (null ===
                    (_ =
                      null === (_ = _.state.doc.slice(_, _).content) ||
                      void 0 === _
                        ? void 0
                        : _.toJSON) || void 0 === _
                    ? void 0
                    : _.call(_)) || _.state.doc.slice(_, _),
                ));
              try {
                (_ = _.replaceRangeWith(_, _, _)),
                  (_ = _.setSelection(
                    _._.create(_.doc, _ + _.nodeSize, _ + _.nodeSize),
                  )),
                  _.dispatch(_);
              } catch (_) {
                console.error("Error during link insertion", _);
              }
              _();
            },
            closeModal: _,
            strTitle: _,
            strOKText: _,
            bOKDisabled: 0 == _.length,
          },
          _.createElement(_._, {
            ref: _,
            value: _,
            onChange: (_) => _(_.currentTarget.value),
            label: (0, _._)("#FormattingToolbar_LinkText"),
          }),
          _.createElement(_._, {
            ref: _,
            value: _,
            placeholder: "https://",
            onChange: (_) => _(_.currentTarget.value),
            label: (0, _._)("#FormattingToolbar_LinkAddress"),
            mustBeURL: !0,
          }),
          _ &&
            _.createElement(_, {
              addtlAttrs: _,
              values: _,
              setValues: _,
            }),
        );
      });
      function _(_) {
        const { addtlAttrs: _, values: __webpack_require__, setValues: _ } = _;
        return _.createElement(
          _.Fragment,
          null,
          Object.keys(_).map((_) =>
            _.createElement(_, {
              key: _,
              attrName: _,
              fnRender: _[_].fnRenderEditor,
              value: __webpack_require__[_],
              setValues: _,
            }),
          ),
        );
      }
      const _ = _.memo(function (_) {
        const {
          attrName: _,
          fnRender: __webpack_require__,
          value: _,
          setValues: _,
        } = _;
        return __webpack_require__(
          _,
          _.useCallback(
            (_) =>
              _((_) => ({
                ..._,
                [_]: _,
              })),
            [_, _],
          ),
        );
      });
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
        _ = __webpack_require__("chunkid");
      const _ = _.memo(function (_) {
        const { schema: _ } = _,
          _ = !(!("table" in _.nodes) || !_.nodes.table.spec.tableRole);
        return (
          (0, _._)(
            _.useMemo(
              () =>
                _ &&
                _._({
                  View: _,
                }),
              [_],
            ),
          ),
          (0, _._)(_.useMemo(() => _ && _._(), [_])),
          null
        );
      });
      class _ extends _._ {
        constructor(_, _) {
          super(_, _), this.SetTableClass(_);
        }
        update(_) {
          return !!super.update(_) && (this.SetTableClass(_), !0);
        }
        SetTableClass(_) {
          this.table.className = (0, _._)(
            _().Table,
            _.attrs[_._.NoBorder] && _().NoBorder,
            _.attrs[_._.EqualCells] && _().EqualCells,
          );
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)(function (_) {
        const {
            pmState: _,
            className: __webpack_require__,
            refOnUpdate: _,
            refView: _,
            bSpellcheckEnabled: _ = !0,
            bSingleLine: _,
            panelProps: _,
            children: _,
          } = _,
          [_, _] = _.useState(),
          [_, _] = _.useState();
        _.useEffect(() => {
          _ &&
            _ &&
            _(
              new _._(_, {
                state: _.state,
              }),
            );
        }, [_, _]),
          _.useEffect(() => () => (null == _ ? void 0 : _.destroy()), [_]),
          (0, _._)(_, _);
        const {
            refDiv: _,
            onActivate: _,
            onGamepadDirection: _,
          } = (function (_) {
            const _ = _.useRef(void 0),
              _ = (0, _._)(),
              _ = _.useCallback(() => {
                if (
                  (__webpack_require__.ShowVirtualKeyboard(),
                  !(null == _ ? void 0 : _.hasFocus()))
                ) {
                  _.focus();
                  let _ = _.dom.childNodes;
                  for (let _ = 0; _ < _.length; ++_) {
                    let _ = _[_],
                      _ = _.offsetTop;
                    if (void 0 !== _ && _ >= _.current.scrollTop) {
                      let _ = _.getBoundingClientRect();
                      (0, _._)(_, _.left, _.top);
                      break;
                    }
                  }
                }
              }, [_, _]),
              _ = _.useCallback((_) => _.currentTarget == _.target, []),
              _ = (0, _._)(_, null, null, _);
            return {
              refDiv: _,
              onActivate: _,
              onGamepadDirection: _,
            };
          })(_),
          _ = (0, _._)(_, _);
        if (!_) return null;
        const { schemaConfig: _, bbcodeParser: _ } = _;
        return _.createElement(
          _._,
          {
            view: _,
            pmState: _,
          },
          _.createElement(_._, {
            key: `editordiv_${_}`,
            className: (0, _._)({
              ["" + __webpack_require__]: !!__webpack_require__,
              [_.Container]: !0,
              [_.SingleLine]: !!_,
            }),
            ref: _,
            spellCheck: _,
            focusable: !0,
            onActivate: _,
            onOKActionDescription: (0, _._)("#UserGameNotes_Edit"),
            onGamepadDirection: _,
            ..._,
          }),
          _.createElement(_._, {
            refOnUpdate: _,
            schema: _.pm_schema,
            bSingleLine: _,
          }),
          _.createElement(_, {
            parser: _,
            schema: _.pm_schema,
          }),
          _.createElement(_, {
            schema: _.pm_schema,
          }),
          _,
        );
      });
      const _ = _.memo(function (_) {
        const { parser: _, schema: __webpack_require__ } = _;
        return (
          (0, _._)(
            _.useMemo(
              () =>
                new _._({
                  props: {
                    transformPasted: (_, _) =>
                      (function (_, _, _) {
                        let _ = !1;
                        if (
                          (_.content.forEach((_) => {
                            _.type == _ && (_ = !0);
                          }),
                          !_)
                        )
                          return _;
                        const _ = _.ConvertLineBreaksToParagraphs(_.content);
                        return _._.maxOpen(_);
                      })(_, __webpack_require__.nodes.hard_break, _),
                  },
                }),
              [_, __webpack_require__],
            ),
          ),
          null
        );
      });
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { schema: _, addtlAttrs: __webpack_require__, children: _ } = _,
          { callbacks: _, view: _ } = (0, _._)(),
          [_, _] = _.useState(() => (0, _._)(_.state, _.marks.link)),
          _ = _.useCallback((_) => _((0, _._)(_.state, _.marks.link)), [_]);
        (0, _._)(_, _);
        const [_, _] = (0, _._)(_, __webpack_require__);
        return _.createElement(
          _.Fragment,
          null,
          _,
          _.createElement(
            _._,
            {
              onClick: () => _(_),
              toggled: _,
              tooltip: "#FormattingToolbar_InsertLink",
              keyboardShortcut: "Mod-k",
            },
            _,
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            schema: _,
            bColor: __webpack_require__,
            addtlAttrs: _,
            children: _,
          } = _,
          { callbacks: _, view: _ } = (0, _._)(),
          [_, _] = _.useState(() =>
            (0, _._)(
              _.state,
              __webpack_require__ ? _.marks.color : _.marks.bgcolor,
            ),
          ),
          _ = _.useCallback(
            (_) =>
              _(
                (0, _._)(
                  _.state,
                  __webpack_require__ ? _.marks.color : _.marks.bgcolor,
                ),
              ),
            [__webpack_require__, _],
          );
        (0, _._)(_, _);
        const [_, _] = (0, _._)(_, __webpack_require__, _);
        return _.createElement(
          _.Fragment,
          null,
          _,
          _.createElement(
            _._,
            {
              onClick: () => _(_),
              toggled: _,
              tooltip: __webpack_require__
                ? "#FormattingToolbar_Color"
                : "#FormattingToolbar_BgColor",
            },
            _,
          ),
        );
      }
      function _() {
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _._,
            {
              tooltip: "#FormattingToolbar_Undo",
              keyboardShortcut: "Mod-z",
              command: _._,
            },
            _.createElement(_.VnB, null),
          ),
          _.createElement(
            _._,
            {
              tooltip: "#FormattingToolbar_Redo",
              keyboardShortcut:
                "macos" == _._.PLATFORM ? "Mod-Shift-z" : "Mod-y",
              command: _._,
            },
            _.createElement(_.Bal, null),
          ),
        );
      }
      function _(_) {
        const { schema: _ } = _;
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _._,
            {
              tooltip: "#FormattingToolbar_Bold",
              keyboardShortcut: "Mod-b",
              mark: _.marks.strong,
            },
            _.createElement(_.l4n, null),
          ),
          _.createElement(
            _._,
            {
              tooltip: "#FormattingToolbar_Italic",
              keyboardShortcut: "Mod-i",
              mark: _.marks.italic,
            },
            _.createElement(_.UKJ, null),
          ),
          _.createElement(
            _._,
            {
              tooltip: "#FormattingToolbar_Underline",
              keyboardShortcut: "Mod-u",
              mark: _.marks.underline,
            },
            _.createElement(_.Gj3, null),
          ),
          "strike" in _.marks &&
            _.createElement(
              _._,
              {
                tooltip: "#FormattingToolbar_Strike",
                keyboardShortcut: "Mod-Shift-x",
                mark: _.marks.strike,
              },
              _.createElement(_.tI4, null),
            ),
          "code" in _.marks &&
            _.createElement(
              _._,
              {
                tooltip: "#FormattingToolbar_InlineCode",
                keyboardShortcut: "Ctrl-Shift-c",
                mark: _.marks.code,
              },
              _.createElement(_.bmT, null),
            ),
          "color" in _.marks &&
            _.createElement(
              _,
              {
                schema: _,
                bColor: !0,
              },
              _.createElement(_.r7n, null),
            ),
          "bgcolor" in _.marks &&
            _.createElement(
              _,
              {
                schema: _,
                bColor: !1,
              },
              _.createElement(_.FId, null),
            ),
        );
      }
      function _(_) {
        const { schema: _ } = _;
        return _.createElement(
          _._,
          {
            tooltip: "#FormattingToolbar_Paragraph",
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: _.nodes.paragraph,
          },
          _.createElement(_.iYj, null),
        );
      }
      function _(_) {
        const { schema: _, maxLevel: __webpack_require__ = 1, levels: _ } = _,
          _ = __webpack_require__ + _ - 1;
        return _.createElement(
          _.Fragment,
          null,
          __webpack_require__ <= 1 &&
            _.createElement(
              _._,
              {
                tooltip: "#FormattingToolbar_HeadingLevel1",
                keyboardShortcut: "Ctrl-Shift-1",
                nodeType: _.nodes.heading,
                attrs: {
                  level: 1,
                },
              },
              _.createElement(_.jRw, null),
            ),
          __webpack_require__ <= 2 &&
            _ >= 2 &&
            _.createElement(
              _._,
              {
                tooltip: "#FormattingToolbar_HeadingLevel2",
                keyboardShortcut: "Ctrl-Shift-2",
                nodeType: _.nodes.heading,
                attrs: {
                  level: 2,
                },
              },
              _.createElement(_.qOW, null),
            ),
          __webpack_require__ <= 3 &&
            _ >= 3 &&
            _.createElement(
              _._,
              {
                tooltip: "#FormattingToolbar_HeadingLevel3",
                keyboardShortcut: "Ctrl-Shift-3",
                nodeType: _.nodes.heading,
                attrs: {
                  level: 3,
                },
              },
              _.createElement(_.x7X, null),
            ),
          __webpack_require__ <= 4 &&
            _ >= 4 &&
            _.createElement(
              _._,
              {
                tooltip: "#FormattingToolbar_HeadingLevel4",
                keyboardShortcut: "Ctrl-Shift-4",
                nodeType: _.nodes.heading,
                attrs: {
                  level: 4,
                },
              },
              _.createElement(_.qzO, null),
            ),
          __webpack_require__ <= 5 &&
            _ >= 5 &&
            _.createElement(
              _._,
              {
                tooltip: "#FormattingToolbar_HeadingLevel5",
                keyboardShortcut: "Ctrl-Shift-5",
                nodeType: _.nodes.heading,
                attrs: {
                  level: 5,
                },
              },
              _.createElement(_.jXA, null),
            ),
        );
      }
      function _(_) {
        const {
            schema: _,
            showIndentButtonsAsNeeded: __webpack_require__ = !1,
          } = _,
          { callbacks: _, view: _ } = (0, _._)(),
          { bullet_list: _, ordered_list: _, list_item: _ } = _.nodes,
          _ = _.useMemo(() => _._(_), [_]),
          _ = _.useMemo(() => _._(_), [_]),
          [_, _] = _.useState(() => _(_.state) || _(_.state));
        return (
          (0, _._)(
            _,
            _.useCallback(
              (_) => {
                _(_(_.state) || _(_.state));
              },
              [_, _],
            ),
          ),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              _,
              {
                tooltip: "#FormattingToolbar_BulletedList",
                keyboardShortcut: "Ctrl-Shift-8",
                list_type: _,
                list_item: _,
              },
              _.createElement(_.JPq, null),
            ),
            _ &&
              _.createElement(
                _,
                {
                  tooltip: "#FormattingToolbar_OrderedList",
                  keyboardShortcut: "Ctrl-Shift-7",
                  list_type: _,
                  list_item: _,
                },
                _.createElement(_.jE0, null),
              ),
            (!__webpack_require__ || _) &&
              _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  _._,
                  {
                    tooltip: "#FormattingToolbar_OutdentList",
                    keyboardShortcut: "Mod-[",
                    command: _,
                  },
                  _.createElement(_.LSz, null),
                ),
                _.createElement(
                  _._,
                  {
                    tooltip: "#FormattingToolbar_IndentList",
                    keyboardShortcut: "Mod-[",
                    command: _,
                  },
                  _.createElement(_.ycU, null),
                ),
              ),
          )
        );
      }
      function _(_) {
        const {
            list_type: _,
            list_item: __webpack_require__,
            children: _,
            ..._
          } = _,
          { callbacks: _, view: _ } = (0, _._)(),
          _ = _.useCallback((_) => void 0 !== (0, _._)(_.state, _), [_]),
          [_, _] = _.useState(() => _(_)),
          _ = _.useMemo(() => _._(_), [_]),
          _ = _.useMemo(() => _._(__webpack_require__), [__webpack_require__]);
        return (
          (0, _._)(
            _,
            _.useCallback(
              (_) => {
                _(_(_));
              },
              [_],
            ),
          ),
          _.createElement(
            _._,
            {
              ..._,
              toggled: _,
              command: _ ? _ : _,
            },
            _,
          )
        );
      }
      function _(_) {
        const { schema: _, addtlAttrs: __webpack_require__ } = _;
        return _.createElement(
          _,
          {
            schema: _,
            addtlAttrs: __webpack_require__,
          },
          _.createElement(_.YqK, null),
        );
      }
      function _(_) {
        const {
          bSpellcheckEnabled: _,
          setSpellcheckEnabled: __webpack_require__,
        } = _;
        return _.createElement(
          _._,
          {
            tooltip: _
              ? "#FormattingToolbar_DisableSpellcheck"
              : "#FormattingToolbar_EnableSpellcheck",
            toggled: _,
            onClick: () => __webpack_require__(!_),
          },
          _.createElement(_.DEV, null),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = () => _.useContext(_);
      function _(_) {
        const {
            view: _,
            refUpdateToolbar: __webpack_require__,
            children: _,
          } = _,
          _ = _.useRef(void 0);
        _.current || (_.current = new _._()),
          _.useEffect(
            () => (
              (0, _._)(__webpack_require__, () => _.current.Dispatch(_)),
              () => (0, _._)(__webpack_require__, void 0)
            ),
            [_, __webpack_require__],
          );
        const _ = _.useMemo(
          () => ({
            callbacks: _.current,
            view: _,
          }),
          [_],
        );
        return _
          ? _.createElement(
              _.Provider,
              {
                value: _,
              },
              _,
            )
          : null;
      }
      const _ = _.createContext(void 0);
      function _() {
        return _.createElement("div", {
          className: _.Gap,
        });
      }
      function _() {
        return _.createElement("div", {
          className: _.Spacer,
        });
      }
      function _(_) {
        return _.createElement(
          "div",
          {
            className: (0, _._)(_.className, _.ToolbarRowOverflowContainer),
          },
          _.createElement(
            _._,
            {
              className: _.ToolbarRow,
              "flow-children": "row",
            },
            _.children,
          ),
        );
      }
      function _(_) {
        const {
            nodeType: _,
            attrs: __webpack_require__,
            children: _,
            ..._
          } = _,
          { callbacks: _, view: _ } = _(),
          [_, _] = _.useState(() => (0, _._)(_.state, _, __webpack_require__)),
          _ = _.useCallback(
            (_) => _((0, _._)(_.state, _, __webpack_require__)),
            [_, __webpack_require__],
          );
        (0, _._)(_, _);
        const _ = _.useMemo(
          () => _._(_, __webpack_require__),
          [__webpack_require__, _],
        );
        return _.createElement(_, {
          ..._,
          command: _,
          toggled: _,
          children: _,
        });
      }
      function _(_) {
        const { mark: _, children: __webpack_require__, ..._ } = _,
          { callbacks: _, view: _ } = _(),
          [_, _] = _.useState(() => (0, _._)(_.state, _)),
          _ = _.useCallback((_) => _((0, _._)(_.state, _)), [_]);
        (0, _._)(_, _);
        const _ = _.useMemo(() => _._(_), [_]);
        return _.createElement(_, {
          ..._,
          command: _,
          toggled: _,
          children: __webpack_require__,
        });
      }
      function _(_) {
        const {
            command: _,
            toggled: __webpack_require__,
            children: _,
            ..._
          } = _,
          { view: _, callbacks: _ } = _(),
          [_, _] = _.useState(() => _(_.state));
        (0, _._)(
          _,
          _.useCallback((_) => _(_(_.state)), [_]),
        ),
          _.useEffect(() => _(_(_.state)), [_, _]);
        const _ = !_ && !__webpack_require__;
        return _.createElement(
          _,
          {
            ..._,
          },
          _.createElement(
            _._,
            {
              className: (0, _._)(
                _.CommandButton,
                __webpack_require__ && _.Toggled,
              ),
              onMouseDown: (_) => {
                _.preventDefault(), _(_.state, _.dispatch, _);
              },
              disabled: _,
              focusable: !_,
            },
            _,
          ),
        );
      }
      function _(_) {
        const {
          onClick: _,
          toggled: __webpack_require__,
          disabled: _,
          children: _,
          className: _,
          ..._
        } = _;
        return _.createElement(
          _,
          {
            ..._,
          },
          _.createElement(
            _._,
            {
              className: (0, _._)(
                _.CommandButton,
                __webpack_require__ && _.Toggled,
                _,
              ),
              onMouseDown: (_) => {
                0 === _.button && (_.preventDefault(), _(_));
              },
              disabled: !0 === _,
            },
            _,
          ),
        );
      }
      function _(_) {
        const {
          tooltip: _,
          keyboardShortcut: __webpack_require__,
          children: _,
        } = _;
        if (!_) return _;
        const _ = __webpack_require__
          ? _.createElement(_, {
              tooltip: _,
              keyboardShortcut: __webpack_require__,
            })
          : _;
        return _.createElement(
          _._,
          {
            toolTipContent: _,
            direction: "bottom",
          },
          _,
        );
      }
      function _(_) {
        const { tooltip: _, keyboardShortcut: __webpack_require__ } = _;
        return _.createElement(
          "div",
          {
            className: _.TooltipWithShortcut,
          },
          _.createElement("div", null, "string" == typeof _ ? (0, _._)(_) : _),
          _.createElement(
            "div",
            null,
            _.createElement(_, {
              keyboardShortcut: __webpack_require__,
            }),
          ),
        );
      }
      function _(_) {
        const { keyboardShortcut: _ } = _,
          _ = _.split("-"),
          _ = __webpack_require__.pop();
        return _.createElement(
          _.Fragment,
          null,
          __webpack_require__.map((_, _) =>
            _.createElement(
              _.Fragment,
              {
                key: _,
              },
              _.createElement(
                _,
                null,
                _.createElement(_, {
                  modifier: _,
                }),
              ),
              " + ",
            ),
          ),
          _.createElement(_, null, _.toUpperCase()),
        );
      }
      function _(_) {
        return _.createElement(
          "span",
          {
            className: _.KeyCap,
          },
          _.children,
        );
      }
      function _(_) {
        const { modifier: _ } = _;
        switch (_) {
          case "Mod":
            return "macos" == _._.PLATFORM ? "⌘" : "Ctrl";
          case "Shift":
            return _._.PLATFORM, "Shift";
          case "Ctrl":
            return "macos" == _._.PLATFORM ? "Control" : "Ctrl";
          case "Alt":
            return "macos" == _._.PLATFORM ? "Option" : "Alt";
        }
        return null;
      }
    },
  },
]);
