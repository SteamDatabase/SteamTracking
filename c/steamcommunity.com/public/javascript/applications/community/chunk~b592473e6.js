(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [69773],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        function _(_, _, _, _) {
          let _ = [],
            _;
          for (; (_ = _.match(_._)); ) {
            _.index > 0 && _.push(_.text(_.substring(0, _.index)));
            const _ = (0, _._)(_[0]),
              _ = _ && _(_);
            !_ || _ === "default"
              ? _.push(
                  _.text(_[0], [
                    _.create({
                      href: _,
                    }),
                  ]),
                )
              : _ !== "remove" && _.push(_),
              (_ = _.substring(_.index + _[0].length));
          }
          if (_.length != 0) return _.length && _.push(_.text(_)), _;
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
          _ = __webpack_require__("chunkid");
        const _ = new _._({
            props: {
              handlePaste(_, _, _) {
                const _ = _.clipboardData
                  ?.getData("text/plain")
                  .replace(/\n/g, " ");
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
          return new _._({
            filterTransaction(_, _) {
              return _.doc.textContent.length <= _;
            },
          });
        }
        function _(_) {
          const { nMaxChars: _ } = _;
          return (
            (0, _._)((0, _.useMemo)(() => _(_), [_])),
            (0, _.jsx)(_.Fragment, {})
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
          m_ProseMirrorSchema;
          m_mapBBCodeDictionary = new Map();
          m_PMToBBCodeConfig = {
            mapNodes: new Map(),
            mapMarks: new Map(),
          };
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
            return _ && _.AttrsToBBArgs ? _.AttrsToBBArgs(_, _).args || {} : {};
          }
          constructor(_, _) {
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
                  toDOM() {
                    return ["br"];
                  },
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
              (!_ || _.has(_.tag)) && ((_[_] = _), _.set(_, _));
            }
            (this.m_ProseMirrorSchema = new _._({
              nodes: _,
              marks: _,
            })),
              _.forEach((_, _) => {
                const _ = this.m_ProseMirrorSchema.nodes[_],
                  _ = _.nodes[_],
                  _ = Array.isArray(_) ? _ : [_];
                let _;
                _.content == "list_item+"
                  ? (_ = this.m_ProseMirrorSchema.nodes.list_item)
                  : _.content?.indexOf("paragraph") != -1 &&
                    (_ = this.m_ProseMirrorSchema.nodes.paragraph),
                  _.forEach(
                    ({
                      tag: _,
                      BBArgsToAttrs: _,
                      AttrsToBBArgs: _,
                      convertContentToAttr: _,
                      bVerbatimArgs: _,
                      bVerbatimContent: _,
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
                const {
                  tag: _,
                  AttrsToBBArgs: _,
                  bVerbatimArgs: _,
                  bVerbatimContent: _,
                } = _[0];
                this.m_PMToBBCodeConfig.mapNodes.set(_, {
                  tag: _,
                  AttrsToBBArgs: _,
                  bVerbatimArgs: _,
                  bVerbatimContent: _,
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
          if (_)
            if (Array.isArray(_)) {
              const _ = _.filter((_) => _.has(_.tag));
              return _.length > 0 ? _ : void 0;
            } else return _.has(_.tag) ? _ : void 0;
          else return _;
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
          const { msAutosaveTimeout: _ = 1e3, msMaxInterval: _ = _ * 10 } =
              _ || {},
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
                  _ || _ >= _ || _ - _ >= _
                    ? (console.log("Committing changes"),
                      _.CommitChanges(),
                      _(!1))
                    : (_ = window.setTimeout(_, _ - _));
                };
              let _ = window.setTimeout(_, _);
              return () => {
                _ && (window.clearTimeout(_), _(!0));
              };
            }, [_, _, _, _]),
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.memo(function (_) {
          const { specs: _ } = _,
            [_, _] = _.useState([]),
            _ = _.useRef(0),
            _ = _.useCallback(
              (_) => (
                _((_) => [
                  ..._,
                  {
                    _: _.current++,
                    nodeView: _,
                  },
                ]),
                () => _((_) => _.filter((_) => _.nodeView != _))
              ),
              [],
            ),
            _ = _.useMemo(() => {
              const _ = {};
              return (
                _.filter(Boolean).forEach(
                  (_) => (_[_.type.name] = (_, _, _) => new _(_, _, _, _, _)),
                ),
                new _._({
                  props: {
                    nodeViews: _,
                  },
                })
              );
            }, [_, _]);
          return (
            (0, _._)(_),
            _.map(({ _: _, nodeView: _ }) =>
              (0, _.jsx)(
                _,
                {
                  nodeView: _,
                },
                _,
              ),
            )
          );
        });
        function _(_) {
          const {
              element: _,
              spec: _,
              getProps: _,
              onPropsChanged: _,
              actions: _,
              isSelected: _,
            } = _.nodeView,
            [_, _] = _.useReducer((_) => _ + 1, 0);
          return (
            _.useEffect(() => _.Register(_).Unregister, [_, _]),
            _.createPortal(
              _.createElement(_.component, {
                ..._(),
                selected: _(),
                ..._,
              }),
              _,
            )
          );
        }
        class _ {
          dom;
          contentDOM;
          onPropsChanged;
          node;
          selected;
          reactHost;
          destroy;
          constructor(_, _, _, _, _) {
            this.node = _;
            const _ = _.dom.ownerDocument,
              _ = _.createElement(_.type.isInline ? "span" : "div");
            this.dom = _;
            let _ = _;
            _.bEditableContent &&
              ((_ = this.reactHost =
                _.createElement(_.type.isInline ? "span" : "div")),
              (_.contentEditable = "false"),
              _.appendChild(_),
              (this.contentDOM = _.createElement(
                _.type.inlineContent ? "span" : "div",
              )),
              _.appendChild(this.contentDOM));
            const { selection: _ } = _.state;
            this.selected = _() >= _.from && _() + _.nodeSize <= _._;
            const _ = (_) => {
                const _ = _(_.state._, _, _());
                _ && _.dispatch(_);
              },
              _ = {
                update: _,
                setAttrs: (_, _) => _((_, _, _) => _.setNodeMarkup(_, _, _)),
                removeNode: () => _((_, _, _) => _.delete(_, _ + _.nodeSize)),
                focusView: () => {
                  window.setTimeout(() => _.focus(), 1);
                },
              },
              _ = new _._();
            (this.destroy = _({
              element: _,
              spec: _,
              getProps: () => _.readProps(this.node),
              isSelected: () => this.selected,
              onPropsChanged: _,
              actions: _,
            })),
              (this.onPropsChanged = _.Dispatch.bind(_));
          }
          update(_, _, _) {
            return _.type != this.node.type
              ? !1
              : ((this.node = _), this.onPropsChanged(), !0);
          }
          ignoreMutation(_) {
            return this.contentDOM && this.contentDOM.contains(_.target)
              ? !1
              : this.reactHost
                ? !0
                : _.type != "selection";
          }
          stopEvent(_) {
            return !!this.reactHost && this.reactHost.contains(_.target);
          }
          selectNode() {
            (this.selected = !0), this.onPropsChanged();
          }
          deselectNode() {
            (this.selected = !1), this.onPropsChanged();
          }
        }
        function _(_) {
          return (_, _, _) => _.replaceWith(_, _ + _.nodeSize, _);
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { nodes: _, marks: _ } = _,
            _ = (0, _._)(
              _._,
              (_, _) => (
                _ &&
                  _(
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
              "Mod-b": (0, _._)(_.strong),
              "Mod-i": (0, _._)(_.italic),
              "Mod-u": (0, _._)(_.underline),
              "Mod-Shift-x": (0, _._)(_.strike),
              "Ctrl-Shift-s": (0, _._)(_.strike),
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
            _.code && (_["Ctrl-Shift-c"] = (0, _._)(_.code)),
            _.code_block && (_["Alt-Ctrl-Shift-c"] = (0, _._)(_.code_block)),
            _.horizontal_rule &&
              (_["Mod-_"] = (_, _) => (
                _ &&
                  _(
                    _._.replaceSelectionWith(
                      _.horizontal_rule.create(),
                    ).scrollIntoView(),
                  ),
                !0
              )),
            (0, _._)(_)
          );
        }
        function _(_, _) {
          return new _._(_, (_, _, _, _) => _._.replaceWith(_, _, _.create()));
        }
        function _(_) {
          const { nodes: _, marks: _ } = _;
          return (0, _._)({
            rules: [
              (0, _._)(
                /^(\d+)\.\s$/,
                _.ordered_list,
                (_) => ({
                  order: parseInt(_[1]),
                }),
                (_, _) => _.childCount + _.attrs.order == parseInt(_[1]),
              ),
              (0, _._)(/^\s*([-+*])\s$/, _.bullet_list),
              (0, _._)(/(?<!\w)\*([^*]+)\*/, _.strong),
              (0, _._)(/(?<!\w)_([^_]+)_/, _.italic),
              (0, _._)(/(?<!\w)~([^~]+)~/, _.strike),
              (0, _._)(/(?<!\w)`([^`]+)`/, _.code),
              (0, _._)(/^```$/, _.code_block),
              (0, _._)(/^(#{1,5})\s$/, _.heading, (_) => ({
                level: _[1].length,
              })),
              _.horizontal_rule && _(/^(\*\*\*|---|___)$/, _.horizontal_rule),
            ].filter(Boolean),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext(void 0);
        function _(_) {
          const { view: _, pmState: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                view: _,
                pmState: _,
              }),
              [_, _],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        const _ = _.memo(function (_) {
          const { schema: _, refOnUpdate: _, bSingleLine: _ } = _;
          return (
            _(
              _.useMemo(
                () =>
                  _ &&
                  new _._({
                    view: (_) => ({
                      update: (..._) => _.current && _.current(..._),
                    }),
                  }),
                [_],
              ),
            ),
            _(_.useMemo(() => (0, _._)(_ ? _._ : {}), [_])),
            _(_ ? _._ : void 0),
            _(_.useMemo(() => (0, _._)(), [])),
            _(_.useMemo(() => _(_), [_])),
            _(_.useMemo(() => (0, _._)(_._), [])),
            _(_.useMemo(() => _(_), [_])),
            null
          );
        });
        function _(_) {
          const { pmState: _ } = _.useContext(_);
          _.useEffect(() => {
            if (!(!_ || !_)) return _.InstallPlugin(_);
          }, [_, _]);
        }
        function _() {
          return _.useContext(_)?.view;
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
          _ = __webpack_require__._(_);
        function _(_, _, _ = 0) {
          return () => [
            _,
            {
              class: _,
            },
            _,
          ];
        }
        function _(_, _, _ = 0) {
          return [
            _,
            {
              class: _,
            },
            _,
          ];
        }
        function _(_, _) {
          return () => [
            _,
            {
              class: bbstyles.PreservedUnsupportedTag,
            },
            [
              "span",
              {
                class: bbstyles.Tag,
              },
              `[${_}]`,
            ],
            ["span", 0],
            [
              "span",
              {
                class: bbstyles.Tag,
              },
              `[/${_}]`,
            ],
          ];
        }
        function _(_) {
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
                  _.align != "left" &&
                  _.args &&
                  (_.args.align = _.align),
                _
              );
            },
          };
        }
        function _(_) {
          return {
            tag: `h${_}`,
            getAttrs(_) {
              return {
                level: _,
                align: _.style.textAlign || "left",
              };
            },
          };
        }
        const _ = {
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
                  getAttrs(_) {
                    return {
                      align: _.style.textAlign || "left",
                    };
                  },
                },
              ],
              toDOM(_) {
                const _ = {
                  class: (0, _._)("pm_paragraph", _().Paragraph),
                };
                return (
                  _.attrs.align &&
                    _.attrs.align != "left" &&
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
                    _.align && _.align != "left" && (_.args.align = _.align), _
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
              parseDOM: [1, 2, 3, 4, 5].map(_),
              toDOM(_) {
                const _ = {
                  class:
                    `BB_Header${_.attrs.level} ` +
                    _()[`Header${_.attrs.level}`],
                };
                return (
                  _.attrs.align &&
                    _.attrs.align != "left" &&
                    (_.style = `text-align: ${_.attrs.align}`),
                  ["h" + _.attrs.level, _, 0]
                );
              },
              bbCode: [1, 2, 3, 4, 5].map(_),
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
                style: {
                  default: void 0,
                },
              },
              group: "inline",
              draggable: !0,
              parseDOM: [
                {
                  tag: "img[src]",
                  getAttrs(_) {
                    return {
                      src: _.getAttribute("src"),
                      title: _.getAttribute("title"),
                      alt: _.getAttribute("alt"),
                      style: _.getAttribute("style"),
                    };
                  },
                },
              ],
              toDOM(_) {
                const { src: _, alt: _, title: _, style: _ } = _.attrs;
                return [
                  "img",
                  {
                    src: (0, _._)(_),
                    alt: _,
                    title: _,
                    class: (0, _._)(_().Image, {
                      [_().Image_Inline]: _ === "inline",
                    }),
                  },
                ];
              },
              bbCode: {
                tag: "img",
                BBArgsToAttrs: (_) => ({
                  src: _.src,
                  style: _.style ?? void 0,
                }),
                AttrsToBBArgs: (_) => ({
                  args: {
                    src: _.src,
                    ...(_.style
                      ? {
                          style: _.style,
                        }
                      : {}),
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
                    if (_.tagName !== "video") return;
                    const _ = _;
                    let _ = "",
                      _ = "";
                    for (const _ of _.querySelectorAll("source"))
                      _.type == "video/mp4"
                        ? (_ = _.src)
                        : _.type == "video/webm" && (_ = _.src);
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
                    mp4: _,
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
                        src: (0, _._)(_),
                        type: "video/webm",
                      },
                    ]),
                  _ &&
                    _.push([
                      "source",
                      {
                        src: (0, _._)(_),
                        type: "video/mp4",
                      },
                    ]),
                  [
                    "video",
                    {
                      poster: (0, _._)(_),
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
                  autoplay: _.autoplay == "true",
                  controls: _.controls == "true",
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
              toDOM() {
                return [
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
                ];
              },
              bbCode: {
                tag: "code",
              },
            },
          },
          _ = {
            strong: {
              parseDOM: [
                {
                  tag: "strong",
                },
                {
                  tag: "b",
                  getAttrs: (_) => _.style.fontWeight != "normal" && null,
                },
                {
                  style: "font-weight=400",
                  clearMark: (_) => _.type.name == "strong",
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
                  clearMark: (_) => _.type.name == "em",
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
                  getAttrs(_) {
                    return {
                      href: (0, _._)(_.getAttribute("href") ?? ""),
                      title: _.getAttribute("title"),
                    };
                  },
                },
              ],
              toDOM(_) {
                const { href: _, title: _ } = _.attrs;
                return [
                  "a",
                  {
                    href: (0, _._)(_),
                    title: _,
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
          _ = {
            nodes: _,
            marks: _,
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
                toDOM(_) {
                  return [
                    "span",
                    {
                      style: `color: ${_.attrs.color}`,
                      class: (0, _._)("BB_Color", _().Color),
                    },
                    0,
                  ];
                },
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
                toDOM(_) {
                  return [
                    "span",
                    {
                      style: `background-color: ${_.attrs.color}`,
                      class: (0, _._)("BB_BGColor", _().BGColor),
                    },
                    0,
                  ];
                },
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
          m_nodes = [];
          m_schema;
          m_bConvertNewlinesToBR;
          m_fnProcessText;
          constructor(_, _, _) {
            (this.m_schema = _),
              (this.m_bConvertNewlinesToBR = _?.bConvertNewlinesToBR ?? !1);
            const _ = _ && "mark" in _;
            this.m_fnProcessText = _ ? void 0 : _?.fnProcessText;
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
            for (
              let _ = _.indexOf(
                `
`,
                _,
              );
              _ !== -1;
              _ = _.indexOf(
                `
`,
                _,
              )
            )
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
        function _(_) {
          return _.filter((_) => _.isText)
            .map((_) => _.text)
            .join();
        }
        function _(_) {
          let _ = "";
          return (
            _.descendants((_) => {
              _.isText && (_ += _.text);
            }),
            _
          );
        }
        class _ extends _._ {
          m_schemaConfig;
          m_mapPMBBNodes = new Map();
          m_bUseBackslashEscapes;
          constructor(_, _) {
            super(_.bbcode_dictionary, (_) => {
              const _ = _?.tag && _.bbcode_dictionary.get(_.tag);
              return new _(
                _.pm_schema,
                _,
                _ && "Constructor" in _ ? _.Constructor : void 0,
              );
            }),
              (this.m_schemaConfig = _),
              (this.m_bUseBackslashEscapes = _?.bUseBackslashEscapes ?? !0),
              this.m_schemaConfig.bbcode_dictionary.forEach((_) => {
                "node" in _.Constructor &&
                  this.m_mapPMBBNodes.set(
                    _.Constructor.node.name,
                    _.Constructor,
                  );
              });
          }
          get schema() {
            return this.m_schemaConfig.pm_schema;
          }
          ParseBBCode(_) {
            const _ = this.Parse(
              _,
              this.BBNodeToPMNode.bind(this),
              this.m_bUseBackslashEscapes,
            );
            return this.m_schemaConfig.pm_schema.topNodeType.createChecked(
              {},
              this.ConvertLineBreaksToParagraphs(_._.fromArray(_)),
            );
          }
          TryCreateNode(_, _, _) {
            let _ = _._.from(_),
              _;
            if (
              !_.node.validContent(_) &&
              (_.node.isInline ||
                (_ = _._.from(
                  _.filter((_) =>
                    _.isText && _.text.match(/^\s*$/)
                      ? !1
                      : !(
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
                !_ && (_ || _?.validContent(_))
                  ? (_ || (_ = !0), _.push(_))
                  : ((_ = !0), _.push(_));
              }
              if ((console.assert(!_ || !!_), _ && _)) {
                _.isBlock &&
                  _.length > 1 &&
                  _[_.length - 1].type == this.schema.nodes.hard_break &&
                  (_ = _.slice(0, -1));
                const _ = this.m_mapPMBBNodes.get(_.name);
                (0, _._)(
                  _,
                  `Indicated acceptNode type ${_.name} for ${_.node.name} missing`,
                );
                let _;
                try {
                  _
                    ? (_ = this.TryCreateNode(_, _, void 0))
                    : (_ = _.createChecked(void 0, _));
                } catch (_) {
                  console.error(_), (_ = []), (_ = [..._, ..._]);
                }
                _ = _._.from(_);
              } else _ = _._.from(_);
            }
            try {
              const _ =
                _.node.createAndFill(_, _) || _.node.createChecked(_, _);
              return _ ? [_, ..._] : _;
            } catch {
              return (
                (0, _._)(
                  !1,
                  `Invalid content for node type ${_.node.name}, removing and promoting children.`,
                ),
                _
              );
            }
          }
          BBNodeToPMNode(_, _, ..._) {
            let _ = _.BBArgsToAttrs ? _.BBArgsToAttrs(_.args || {}) : void 0;
            try {
              if (
                ("convertContentToAttr" in _ &&
                  _.convertContentToAttr &&
                  ((!_ || !_[_.convertContentToAttr]) &&
                    (_ = {
                      ...(_ || {}),
                      [_.convertContentToAttr]: _(_),
                    }),
                  "node" in _ && (_ = [])),
                "node" in _)
              )
                return this.TryCreateNode(_, _, _);
              {
                const _ = _.mark.create(_);
                return _.map((_) => this.RecursivelyApplyMark(_, _));
              }
            } catch (_) {
              return (
                console.error(`Error parsing [${_.tagname}] tag: ${_}`, _), []
              );
            }
          }
          RecursivelyApplyMark(_, _) {
            if (_.isText || _.type.allowsMarkType(_.type))
              return _.mark([..._.marks, _]);
            {
              const _ = [];
              return (
                _.descendants(
                  (_) => (_.push(this.RecursivelyApplyMark(_, _)), !1),
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
                    (_.nodes.paragraph.validContent(_)
                      ? (_ = _.nodes.paragraph)
                      : (_ = _.get(_.type.name)),
                    _)
                  )
                    _.accumulate(_, _);
                  else {
                    (0, _._)(
                      !1,
                      `Couldn't accept ${_.type.name} at root of document, converting to paragraph`,
                    );
                    const _ = _(_);
                    _ && _.accumulate(_.nodes.paragraph, _.text(_));
                  }
                }
              }),
              (_.nodes.length || !_.length) && _.emit(!0),
              _._.from(_)
            );
          }
        }
        function _(_, _, _) {
          const _ = {
            schema: _.pm_schema,
            config: _.pm_to_bbcode_config,
            bUseBackslashEscapes: _?.bUseBackslashEscapes ?? !0,
          };
          return _(_, _, [], !1);
        }
        function _(_, _, _, _) {
          const { schema: _, config: _ } = _;
          let _ = _.marks,
            _ = "";
          const _ = _.mapNodes.get(_.type),
            { tag: _, args: _ } = _(_, _);
          _ == "emoticon"
            ? (_ += ":")
            : _ && (_ += (0, _._)(_, _, _?.bVerbatimArgs));
          const _ = _ || !!_?.bVerbatimContent;
          let _ = !1;
          return (
            _.content.forEach((_) => {
              if (
                (([_, _] = _(_, _, _.marks, _)),
                ([_, _] = _(_, _, _.marks, _)),
                _.type.isText)
              ) {
                const _ = _.text || "";
                _ += _ || !_.bUseBackslashEscapes ? _ : (0, _._)(_);
              } else if (_.type == _.nodes.hard_break)
                _ += `
`;
              else {
                const _ = _(_, _);
                _ &&
                  _ &&
                  (_ += `
`),
                  (_ += _(_, _, _, _)),
                  (_ = _);
                return;
              }
              _ = !1;
            }),
            ([_] = _(_, _, _, _)),
            _ == "emoticon" ? (_ += ":") : _ && (_ += (0, _._)(_)),
            _
          );
        }
        function _(_, _) {
          return _.type.isBlock && !_(_.mapNodes.get(_.type), _).tag;
        }
        function _(_, _, _, _) {
          const _ = [];
          for (const _ of _) _.indexOf(_) === -1 && _.push(_);
          if (!_.length) return [_, _];
          const _ = _.slice();
          for (
            ;
            _.length &&
            ((0, _._)(_.length, "no marks left to close"), !!_.length);
          ) {
            const _ = _.pop(),
              _ = _.mapMarks.get(_.type),
              { tag: _ } = _(_, _);
            _ += (0, _._)(_);
            const _ = _.indexOf(_);
            _ != -1 && _.splice(_, 1);
          }
          return [_, _];
        }
        function _(_, _, _, _) {
          let _;
          for (const _ of _)
            if (_.indexOf(_) === -1) {
              _ || (_ = _.slice());
              const _ = _.mapMarks.get(_.type);
              if (((0, _._)(_, "mark missing bbtag"), _)) {
                _.push(_);
                const { args: _, tag: _ } = _(_, _);
                _ += (0, _._)(_, _);
              }
            }
          return [_, _ ?? _];
        }
        function _(_, _) {
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
            tag: _?.tag,
            args: {},
          };
        }
        function _(_, _) {
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
            tag: _?.tag,
            args: {},
          };
        }
        const _ = new _._("CProseMirrorState - OnChange");
        class _ {
          m_bbcode;
          m_currentDoc;
          m_bHasUncomittedChanges = !1;
          m_schemaConfig;
          m_bbcodeParser;
          m_bUseBackslashEscapes;
          m_onStateChangedCallbacks = new _._();
          m_fnCommitChanges;
          m_view;
          m_state;
          constructor(_, _, _, _) {
            const { parser: _, bUseBackslashEscapes: _ = !0 } = _ ?? {};
            (this.m_schemaConfig = _),
              (this.m_bUseBackslashEscapes = _),
              (this.m_bbcodeParser = new _(_, {
                ..._,
                bUseBackslashEscapes: _,
              })),
              (this.m_bbcode = _),
              (this.m_fnCommitChanges = _),
              (this.m_state = this.ConstructState());
          }
          CommitChanges() {
            this.m_currentDoc &&
              this.m_bHasUncomittedChanges &&
              ((this.m_bbcode = _(this.m_currentDoc, this.m_schemaConfig, {
                bUseBackslashEscapes: this.m_bUseBackslashEscapes,
              })),
              this.m_fnCommitChanges(this.m_bbcode, this.m_currentDoc),
              (this.m_bHasUncomittedChanges = !1));
          }
          BHasUncomittedChanges() {
            return this.m_bHasUncomittedChanges;
          }
          UpdateState(_) {
            const _ = _(this.m_view?.state._ || this.m_state._);
            !_ ||
              !_.docChanged ||
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
            const _ = this.m_view ? this.m_view.state : this.m_state;
            return (
              _.plugins.includes(_) ||
                ((this.m_state = _.reconfigure({
                  plugins: [..._.plugins, _],
                })),
                this.m_view?.updateState(this.m_state)),
              () => {
                const _ = this.m_view ? this.m_view.state : this.m_state;
                (this.m_state = _.reconfigure({
                  plugins: _.plugins.filter((_) => _ != _),
                })),
                  this.m_view?.updateState(this.m_state);
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
                return (
                  (_ = this.m_state._.replaceWith(
                    0,
                    this.m_state.doc.content.size,
                    _,
                  ).scrollIntoView()),
                  _
                );
              });
          }
        }
        function _(_, _) {
          (0, _._)(_?.OnStateChangedCallbacks, _);
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
          const _ = _.state;
          if (!_.state.plugins.includes(_)) {
            const _ = [..._.state.plugins, _];
            _.updateState(
              _.reconfigure({
                plugins: _,
              }),
            );
          }
        }
        function _(_, _) {
          if (!_.isDestroyed) {
            const _ = _.state,
              _ = _.plugins.filter((_) => _ !== _);
            _.updateState(
              _.reconfigure({
                plugins: _,
              }),
            );
          }
        }
        function _(_, _) {
          const { from: _, $from: _, _: _, empty: _ } = _.selection;
          return _
            ? !!_.isInSet(_.storedMarks || _.marks())
            : _.doc.rangeHasMark(_, _, _);
        }
        function _(_, _, _) {
          const { parent: _ } = _,
            _ = _.childAfter(_.parentOffset),
            _ = _.node?.marks.find((_) => _.type == _);
          if (!_) return;
          let _ = _.index() - 1,
            _ = _.start() + _.offset;
          for (; _ >= 0 && _.isInSet(_.child(_).marks); )
            (_ -= _.child(_).nodeSize), (_ -= 1);
          let _ = _.index() + 1,
            _ = _.start() + _.offset + _.node.nodeSize;
          for (; _ < _.childCount && _.isInSet(_.child(_).marks); )
            (_ += _.child(_).nodeSize), (_ += 1);
          const _ = _.doc.slice(_, _);
          return {
            from: _,
            _: _,
            slice: _,
            mark: _,
          };
        }
        function _(_, _, _) {
          if (_.type !== _) return !1;
          if (_ === void 0) return !0;
          for (const _ in _) if (_[_] !== _.attrs[_]) return !1;
          return !0;
        }
        function _(_, _, _) {
          let { $from: _, _: _ } = _.selection;
          for (let _ = _.depth; _ > 0; _--) {
            if (_ > _.end(_)) return !1;
            const _ = _.node(_);
            if (_(_, _, _)) return !0;
          }
          return !1;
        }
        function _(_, _, _) {
          for (let _ of _) if (_(_, _, _)) return _;
          return null;
        }
        function _(_, _, _) {
          const { $from: _, _: _ } = _.selection;
          for (let _ = _.sharedDepth(_); _ > 0; _--) {
            const _ = _.node(_);
            if (_.type === _) return !!_.attrs[_];
          }
          return !1;
        }
        function _(_, _, _) {
          const { $from: _, _: _ } = _.selection;
          for (let _ = _.sharedDepth(_); _ > 0; _--) {
            const _ = _.node(_);
            if (_ === void 0 ? _.type === _ : _.hasMarkup(_, _))
              return _.before(_);
          }
        }
        function _(_, _) {
          return (_, _) => {
            const _ = _(_, _);
            if (_ === void 0) return !1;
            if (_) {
              const _ = _.doc.nodeAt(_);
              if ((console.assert(!!_), !_)) return !1;
              _(
                _._.setNodeMarkup(_, _, {
                  ..._.attrs,
                  [_]: !_.attrs[_],
                }),
              );
            }
            return !0;
          };
        }
        function _(_, _) {
          return (_, _) => {
            const { $from: _ } = _.selection;
            let _ = null,
              _ = 0;
            for (let _ = _.depth; _ > 0; _--) {
              const _ = _.node(_);
              if (_.includes(_.type)) {
                (_ = _), (_ = _.before(_));
                break;
              }
            }
            return _
              ? (_ &&
                  _(
                    _._.setNodeMarkup(_, _.type, {
                      ..._.attrs,
                      ..._,
                    }),
                  ),
                !0)
              : !1;
          };
        }
        function _(_, _, _ = {}) {
          return new _._(_, (_, _, _, _) => {
            const _ = _ instanceof Function ? _(_) : _,
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
          if (_?.pos) {
            const _ = _.state.doc.resolve(_.pos);
            _.dispatch(_.state._.setSelection(_._.near(_)));
          }
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
          _ = __webpack_require__._(_);
        function _(_) {
          return `rgba(${_.rgb._}, ${_.rgb._}, ${_.rgb._}, ${_.rgb._})`;
        }
        function _(_) {
          const _ = parseInt(_.slice(1), 16),
            _ = (_ >> 16) & 255,
            _ = (_ >> 8) & 255,
            _ = _ & 255;
          return `rgba(${_}, ${_}, ${_}, 1)`;
        }
        function _(_) {
          const { color: _, onChange: _, strTitle: _, disableAlpha: _ } = _,
            [_, _] = (0, _.useState)(() => _ || "rgba(255, 255, 255, 1)"),
            _ = (0, _.useCallback)(async () => {
              if (!("EyeDropper" in window)) {
                alert(_._.Localize("#Sale_EyeDropperError"));
                return;
              }
              try {
                const _ = (await new window.EyeDropper().open()).sRGBHex,
                  _ = _(_);
                _(_), _(_);
              } catch (_) {
                console.warn(_._.Localize("#Sale_EyeDropperFailed"), _);
              }
            }, [_]);
          return (0, _.jsxs)("div", {
            className: _().ColorPickerDialog,
            children: [
              !!_ &&
                (0, _.jsx)(_._, {
                  children: _,
                }),
              (0, _.jsx)(_._, {
                onChange: (_) => {
                  const _ = _(_);
                  _(_), _(_);
                },
                color: _,
                disableAlpha: _,
                className: _().ColorPickerCtn,
              }),
              (0, _.jsx)("div", {
                className: _().EyeDropperCtn,
                children: (0, _.jsx)(_._, {
                  toolTipContent: _._.Localize("#Sale_BackgroundColorPicker"),
                  children: (0, _.jsx)(_._, {
                    className: _().EyeDropperBtn,
                    onClick: _,
                    children: (0, _.jsx)(_.O7b, {}),
                  }),
                }),
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
                _.colspan &&
                  _.colspan != 1 &&
                  (_.colspan = _.colspan.toString()),
                _.rowspan &&
                  _.rowspan != 1 &&
                  (_.rowspan = _.rowspan.toString()),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              closeModal: _,
              strTitle: _,
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
            _ = _ ? () => {} : _;
          return (0, _.jsx)(_._, {
            onEscKeypress: _,
            children: (0, _.jsxs)(_._, {
              onSubmit: _,
              classNameContent: _,
              children: [
                (0, _.jsx)(_._, {
                  children: _,
                }),
                _,
                (0, _.jsx)(_._, {
                  children: (0, _.jsx)(_._, {
                    strOKText: _,
                    bOKDisabled: _,
                    onCancel: _,
                    strCancelText: _,
                    bCancelDisabled: _,
                  }),
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            strTitle: _,
            strDescription: _,
            className: _,
            children: _,
            navID: _,
            ..._
          } = _;
          return jsxs(ModalDialog, {
            className: classNames(_, styles.ModalConfirmDialog),
            onClose: _.onClose,
            navID: _,
            children: [
              _ &&
                jsxs(Panel, {
                  className: styles.Header,
                  children: [
                    jsx("h2", {
                      children: _,
                    }),
                    jsx("button", {
                      onClick: _.onClose,
                      children: jsx(SVG.X_Line_Better, {}),
                    }),
                  ],
                }),
              _ &&
                jsx(Panel, {
                  className: styles.Description,
                  children: jsx("div", {
                    children: _,
                  }),
                }),
              _,
              jsx(_, {
                ..._,
              }),
            ],
          });
        }
        function _(_) {
          const { strOKLabel: _, strCancelLabel: _, onOK: _, onClose: _ } = _;
          return (0, _.jsxs)(_._, {
            className: _().Buttons,
            children: [
              !!_ &&
                (0, _.jsx)(_._, {
                  onClick: _ ?? _,
                  children: _,
                }),
              !!_ &&
                (0, _.jsx)(_._, {
                  onClick: _,
                  children: _,
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _) {
          const [_, _] = _.useState(void 0),
            _ = _.useRef(null),
            _ = _.useCallback(
              (_) => {
                _.current = _;
                const { state: _ } = _,
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
                  viewRef: _,
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
            _ = _.useCallback(() => {
              const _ = _.current;
              window.setTimeout(() => {
                _ && !_.isDestroyed && _.focus();
              }, 1),
                _(void 0);
            }, []),
            _ =
              _ &&
              (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)(_, {
                  schema: _,
                  bColor: _,
                  closeModal: _,
                  ..._,
                }),
              });
          return [_, _];
        }
        function _(_) {
          if (_.startsWith("rgb")) {
            const _ = _.match(/\d+/g);
            if (!_ || _.length < 3) return "#000000";
            const [_, _, _] = _.map(Number);
            return (
              "#" +
              [_, _, _]
                .map((_) => {
                  const _ = _.toString(16);
                  return _.length === 1 ? "0" + _ : _;
                })
                .join("")
            );
          }
          return _;
        }
        function _(_) {
          const _ = _.match(
            /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/i,
          );
          if (_) {
            let [, _, _, _, _] = _;
            const _ = parseInt(_, 10),
              _ = parseInt(_, 10),
              _ = parseInt(_, 10);
            return `#${((1 << 24) + (_ << 16) + (_ << 8) + _).toString(16).slice(1)}`;
          }
          return "#7e3232";
        }
        const _ = _.memo(function (_) {
          const {
              schema: _,
              strColor: _,
              bIsUpdate: _,
              strTargetText: _,
              bColor: _,
              addtlAttrs: _,
              addtlAttrsValues: _,
              closeModal: _,
              viewRef: _,
              from: _,
              _: _,
            } = _,
            [_, _] = _.useState(_),
            _ = _.useRef(null),
            [_, _] = _.useState(_),
            _ = _.useCallback(() => {
              try {
                const _ = _.current;
                if (!_ || _.isDestroyed) {
                  console.warn(
                    "Editor view is destroyed; skipping color insert",
                  );
                  return;
                }
                const { state: _, dispatch: _ } = _,
                  _ = _ ? _.marks.color : _.marks.bgcolor;
                if (!_) {
                  console.log("debug: no markType");
                  return;
                }
                if (!_ || !/^#[0-9a-fA-F]{6}$/.test(_)) {
                  console.log("debug: invalid color text: " + _);
                  return;
                }
                const _ = Math.max(0, Math.min(_, _.doc.content.size)),
                  _ = Math.max(0, Math.min(_, _.doc.content.size));
                if (_ > _) {
                  console.error("Invalid selection range:", _, _);
                  return;
                }
                const _ = _.create({
                  color: _,
                  ..._,
                });
                let _ = _._;
                _ === _
                  ? (_ = _.addStoredMark(_))
                  : ((_ = _.removeMark(_, _, _)),
                    (_ = _.addMark(_, _, _)),
                    (_ = _.setSelection(_._.create(_.doc, _)))),
                  _(_.scrollIntoView());
              } catch (_) {
                console.error(_);
              } finally {
                requestAnimationFrame(() => _());
              }
            }, [_, _, _, _, _, _.marks.bgcolor, _.marks.color, _, _]);
          _.useLayoutEffect(() => {
            _.current?.value?.length ? _.current.focus() : _.current?.focus();
          }, []);
          const _ = (0, _._)(
              _ ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
            ),
            _ = _
              ? (0, _._)("#Button_Save")
              : (0, _._)(
                  _ ? "#FormattingToolbar_Color" : "#FormattingToolbar_BgColor",
                );
          return (0, _.jsxs)(_._, {
            onClose: _,
            strTitle: _,
            children: [
              (0, _.jsx)(_._, {
                color: _,
                disableAlpha: !0,
                onChange: (_) => _(_(_)),
              }),
              (0, _.jsx)(_, {
                strOKLabel: _,
                strCancelLabel: (0, _._)("#Button_Cancel"),
                onOK: () => {
                  _ && _.length > 0 && _();
                },
                onClose: _,
              }),
            ],
          });
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
          const [_, _] = _.useState(void 0),
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
                      _ = _ ? _.fnReadValue(_.mark) : _.defaultValue;
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
            _ = _?.view,
            _ = _.useCallback(() => {
              window.setTimeout(() => _.focus(), 1), _(void 0);
            }, [_]),
            _ =
              _ &&
              (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)(_, {
                  schema: _,
                  closeModal: _,
                  ..._,
                }),
              });
          return [_, _];
        }
        const _ = _.memo(function (_) {
          const {
              schema: _,
              strLinkText: _,
              strLinkHref: _,
              bIsUpdate: _,
              addtlAttrs: _,
              addtlAttrsValues: _,
              closeModal: _,
              view: _,
              from: _,
              _: _,
            } = _,
            [_, _] = _.useState(_),
            [_, _] = _.useState(_),
            _ = _.useRef(null),
            _ = _.useRef(null),
            [_, _] = _.useState(_),
            _ = () => {
              let _ = _.state._;
              const _ = {
                href: _,
              };
              for (const _ in _) _[_] = _[_];
              const _ = _.marks.link?.create(_),
                _ = _.text(_ || _, [_]);
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
            };
          _.useLayoutEffect(() => {
            _.current?.value?.length
              ? _.current?.value?.length
                ? (_.current.Focus(), _.current.element.select())
                : _.current.Focus()
              : _.current?.Focus();
          }, []);
          const _ = _
              ? (0, _._)("#FormattingToolbar_EditLink")
              : (0, _._)("#FormattingToolbar_InsertLink"),
            _ = _
              ? (0, _._)("#Button_Save")
              : (0, _._)("#FormattingToolbar_InsertLink");
          return (0, _.jsxs)(_._, {
            onOK: _,
            closeModal: _,
            strTitle: _,
            strOKText: _,
            bOKDisabled: _.length == 0,
            children: [
              (0, _.jsx)(_._, {
                ref: _,
                value: _,
                onChange: (_) => _(_.currentTarget.value),
                label: (0, _._)("#FormattingToolbar_LinkText"),
              }),
              (0, _.jsx)(_._, {
                ref: _,
                value: _,
                placeholder: "https://",
                onChange: (_) => _(_.currentTarget.value),
                label: (0, _._)("#FormattingToolbar_LinkAddress"),
                mustBeURL: !0,
              }),
              _ &&
                (0, _.jsx)(_, {
                  addtlAttrs: _,
                  values: _,
                  setValues: _,
                }),
            ],
          });
        });
        function _(_) {
          const { addtlAttrs: _, values: _, setValues: _ } = _;
          return (0, _.jsx)(_.Fragment, {
            children: Object.keys(_).map((_) =>
              (0, _.jsx)(
                _,
                {
                  attrName: _,
                  fnRender: _[_].fnRenderEditor,
                  value: _[_],
                  setValues: _,
                },
                _,
              ),
            ),
          });
        }
        const _ = _.memo(function (_) {
          const { attrName: _, fnRender: _, value: _, setValues: _ } = _,
            _ = _.useCallback(
              (_) =>
                _((_) => ({
                  ..._,
                  [_]: _,
                })),
              [_, _],
            );
          return _(_, _);
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = "PlaceholderPlugin") {
          const [_, _] = _.useState([]),
            [_] = _.useState(
              () =>
                new _._({
                  key: new _._(_),
                  state: {
                    init() {
                      return _._.empty;
                    },
                    apply(_, _) {
                      _ = _.map(_.mapping, _.doc);
                      const _ = _.getMeta(this) || [];
                      for (const _ of _)
                        if (_?.add) {
                          const { _: _, data: _ } = _.add,
                            _ = (_, _) => {
                              const _ = document.createElement(_);
                              return (
                                _((_) => [
                                  ..._,
                                  {
                                    _: _,
                                    element: _,
                                    data: _,
                                  },
                                ]),
                                _
                              );
                            },
                            _ = (_) => {
                              _((_) => _.filter((_) => _.element != _));
                            },
                            _ = _._.widget(_.add.pos, _, {
                              _: _,
                              destroy: _,
                            });
                          _ = _.add(_.doc, [_]);
                        } else
                          _?.remove &&
                            (_ = _.remove(
                              _.find(void 0, void 0, (_) => _._ == _.remove._),
                            ));
                      return _;
                    },
                  },
                  props: {
                    decorations(_) {
                      return this.getState(_);
                    },
                  },
                }),
            );
          (0, _._)(_);
          const _ = (0, _._)(),
            _ = _.useRef(0),
            _ = _.useCallback(
              (_, _, _) => {
                const _ = `${_}_${_.current++}`;
                let _ = _ || _.state._;
                _ === void 0 &&
                  (_.selection.empty || _.deleteSelection(),
                  (_ = _.selection.from));
                const _ = _?.getMeta(_) || [];
                return (
                  _.setMeta(_, [
                    ..._,
                    {
                      add: {
                        _: _,
                        pos: _,
                        data: _,
                      },
                    },
                  ]),
                  _ || _.dispatch(_),
                  _
                );
              },
              [_, _, _],
            ),
            _ = _.useCallback(
              (_) => {
                const _ = _.getState(_.state)?.find(
                  void 0,
                  void 0,
                  (_) => _._ == _,
                );
                return _?.length ? _[0].from : void 0;
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_, _) => {
                const _ = _(_);
                return _
                  ? (_
                      ? _.dispatch(
                          _.state._.replaceWith(_, _, _).setMeta(_, [
                            {
                              remove: {
                                _: _,
                              },
                            },
                          ]),
                        )
                      : _.dispatch(
                          _.state._.setMeta(_, [
                            {
                              remove: {
                                _: _,
                              },
                            },
                          ]),
                        ),
                    !0)
                  : !1;
              },
              [_, _, _],
            );
          return {
            placeholderElements: _,
            createPlaceholder: _,
            findPlaceholder: _,
            replacePlaceholder: _,
          };
        }
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
          const {
              children: _,
              ProcessFileUpload: _,
              FetchImageURL: _,
              bAllowImageHotLinking: _ = !1,
            } = _,
            [_] = _.useState(() => ({
              manager: new _(_, _, _),
            })),
            { manager: _ } = _;
          return (
            _.SetProps(_, _, _),
            (0, _.jsxs)(_.Provider, {
              value: _,
              children: [
                (0, _.jsx)(_, {
                  manager: _,
                }),
                (0, _.jsx)(_, {
                  manager: _,
                  children: _,
                }),
              ],
            })
          );
        }
        const _ = _.memo(function (_) {
          const { nodeType: _ } = _,
            _ = _(),
            {
              placeholderElements: _,
              createPlaceholder: _,
              replacePlaceholder: _,
            } = _("span", "FileUploadPlaceholder");
          _(_, _);
          const _ = (0, _._)();
          return (
            _.useEffect(() => _.RegisterEditor(_, _, _), [_, _, _, _]),
            (0, _.jsx)(_.Fragment, {
              children: _.map(({ _: _, element: _, data: _ }) =>
                (0, _.jsx)(
                  _,
                  {
                    element: _,
                    data: _,
                  },
                  _,
                ),
              ),
            })
          );
        });
        function _(_, _) {
          const _ = _(),
            _ = React.useCallback(
              (_) => {
                for (const _ of _) _.UploadFile(_);
                _ && _();
              },
              [_, _],
            );
          return useBrowseForFilesDialog(_, {
            multiple: !0,
            accept: _,
          });
        }
        class _ extends Error {
          constructor(_) {
            super(_);
          }
        }
        function _(_) {
          const { element: _, data: _ } = _,
            _ = "file" in _ ? _.file : void 0,
            _ = _.useMemo(() => _ && URL.createObjectURL(_), [_]),
            _ = "url" in _ ? _.url : _,
            _ = _?.type.startsWith("video/");
          return _.createPortal(
            (0, _.jsxs)("span", {
              className: _.FileUploadPlaceholder,
              children: [
                (0, _.jsx)("div", {
                  className: _.ThrobberCtn,
                  children: (0, _.jsxs)("div", {
                    className: _.ThrobberRow,
                    children: [
                      (0, _.jsx)("div", {
                        className: _.Throbber,
                        children: (0, _.jsx)(_._, {
                          size: "medium",
                          position: "center",
                        }),
                      }),
                      (0, _._)("#Prosemirror_FileUpload_Uploading"),
                    ],
                  }),
                }),
                !_ &&
                  (0, _.jsx)("img", {
                    src: _,
                    className: _.PendingImage,
                  }),
                _ &&
                  (0, _.jsx)("video", {
                    src: _,
                    className: _.PendingImage,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    autoPlay: !0,
                  }),
              ],
            }),
            _,
          );
        }
        class _ {
          m_fnProcessFileUpload;
          m_fnFetchImageURL;
          m_bAllowImageHotLinking;
          m_errors = (0, _._)([]);
          m_view;
          m_fnCreatePlaceholder;
          m_fnReplacePlaceholder;
          constructor(_, _, _) {
            (this.m_fnProcessFileUpload = _),
              (this.m_fnFetchImageURL = _),
              (this.m_bAllowImageHotLinking = _);
          }
          SetProps(_, _, _) {
            (this.m_fnProcessFileUpload = _),
              (this.m_fnFetchImageURL = _),
              (this.m_bAllowImageHotLinking = _),
              (0, _._)(
                !this.m_fnFetchImageURL || !this.m_bAllowImageHotLinking,
                "Not expected to have a URL fetch function and allow hotlinking.  URL fetch function will not be called.",
              );
          }
          RegisterEditor(_, _, _) {
            return (
              (0, _._)(!this.m_view, "Duplicate registration"),
              (this.m_view = _),
              (this.m_fnCreatePlaceholder = _),
              (this.m_fnReplacePlaceholder = _),
              () => {
                this.m_view == _ &&
                  this.m_fnCreatePlaceholder == _ &&
                  this.m_fnReplacePlaceholder == _ &&
                  ((this.m_view = void 0),
                  (this.m_fnCreatePlaceholder = void 0),
                  (this.m_fnReplacePlaceholder = void 0));
              }
            );
          }
          AddError(_) {
            this.m_errors.Set([...this.m_errors.Value, _]);
          }
          GetErrors() {
            return this.m_errors;
          }
          ClearErrors() {
            this.m_errors.Set([]);
          }
          GetViewPosition(_, _) {
            return this.m_view?.posAtCoords({
              left: _,
              top: _,
            })?.pos;
          }
          async UploadFile(_, _) {
            (!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
              this.AddError(
                "Upload File: No editor registered to handle file upload",
              );
            const _ = this.m_fnCreatePlaceholder(
              {
                file: _,
              },
              _,
            );
            return this.ProcessFile(_, _);
          }
          BAllowImageHotLinking() {
            return this.m_bAllowImageHotLinking;
          }
          QueueUploadFileByURL(_, _, _) {
            if (
              ((!this.m_fnCreatePlaceholder || !this.m_fnReplacePlaceholder) &&
                this.AddError(
                  "QueueUploadFile: No editor registered to handle file upload",
                ),
              console.log(`QueueUploadFileByURL: ${_} at pos ${_}`),
              _.startsWith("data:"))
            ) {
              const _ = this.m_fnCreatePlaceholder(
                {
                  url: _,
                },
                _,
                _,
              );
              return this.ProcessDataURL(_, _), !0;
            } else if (this.m_fnFetchImageURL) {
              const _ = this.m_fnCreatePlaceholder(
                {
                  url: _,
                },
                _,
                _,
              );
              return this.FetchURLAndProcess(_, _), !0;
            } else
              return (
                (0, _._)(
                  this.m_bAllowImageHotLinking,
                  "A URL was posted but we don't have a fnFetchImageURL to process it",
                ),
                !1
              );
          }
          async ProcessDataURL(_, _) {
            const [_, _] = _.split(","),
              _ = _.match(/^data:(?<mimetype>[^;]*);(?<encoding>.*)$/);
            if (!_ || _.groups.encoding != "base64") {
              this.AddError(`Unable to data URL, unexpected format: ${_}`);
              return;
            }
            const _ = _?.groups.mimetype,
              _ = _(_);
            if (!_) {
              this.AddError(`Unsupported MIME type for image: ${_}`);
              return;
            }
            const _ = atob(_),
              _ = new Uint8Array(_.length);
            for (let _ = 0; _ < _.length; _++) _[_] = _.charCodeAt(_);
            const _ = await _._(_.buffer),
              _ = new File([_], `upload_${_}.${_}`, {
                type: _,
              });
            await this.ProcessFile(_, _);
          }
          async FetchURLAndProcess(_, _) {
            try {
              const _ = new URL(_),
                _ = await this.m_fnFetchImageURL(_),
                _ = new File(
                  [_],
                  decodeURIComponent(
                    _.pathname?.replace(/^.*\//, "") || "image",
                  ),
                  {
                    type: _.type,
                  },
                );
              await this.ProcessFile(_, _);
            } catch {
              this.AddError(`Unable to process URL: ${_}`),
                this.m_fnReplacePlaceholder(_);
            }
          }
          async ProcessFile(_, _) {
            let _;
            try {
              console.log(`Processing file upload: "${_.name}"`),
                (_ = await this.m_fnProcessFileUpload(_));
            } catch (_) {
              _ instanceof _
                ? this.AddError(_.message)
                : this.AddError(`Error proccessing file upload: ${_}`);
            }
            _
              ? this.m_fnReplacePlaceholder(_, _)
              : this.m_fnReplacePlaceholder(_);
          }
        }
        function _(_) {
          switch (_) {
            case "image/jpeg":
              return "jpg";
            case "image/png":
              return "png";
            case "image/gif":
              return "gif";
            case "image/webp":
              return "webp";
            case "video/mp4":
              return "mp4";
            case "video/webm":
              return "webm";
            default:
              return;
          }
        }
        const _ = _.createContext(void 0);
        function _() {
          return _.useContext(_).manager;
        }
        const _ = _.memo(function (_) {
          const { manager: _ } = _,
            _ = (0, _._)(_.GetErrors());
          return _.length
            ? (0, _.jsx)(_._, {
                active: !0,
                children: (0, _.jsx)(_._, {
                  bAlertDialog: !0,
                  strTitle: (0, _._)("#Error_Generic"),
                  strDescription: _.map((_, _) =>
                    (0, _.jsx)(
                      "div",
                      {
                        children: _,
                      },
                      _,
                    ),
                  ),
                  strOKButtonText: (0, _._)("#Button_OK"),
                  onOK: () => _.ClearErrors(),
                  onCancel: () => _.ClearErrors(),
                }),
              })
            : null;
        });
        function _(_) {
          const { manager: _, children: _ } = _,
            _ = _.useCallback(
              (_, _) => {
                for (const _ of _)
                  _.UploadFile(_, _.GetViewPosition(_.clientX, _.clientY));
              },
              [_],
            ),
            [_, _] = (0, _._)(_);
          return _.cloneElement(_, {
            ..._,
            ..._.props,
          });
        }
        function _(_, _) {
          (0, _._)(
            _.useMemo(
              () =>
                new _._({
                  props: {
                    handlePaste(_, _, _) {
                      const _ = [];
                      if (
                        (_.content.descendants((_, _) => {
                          if (_.type == _) {
                            const _ = _.attrs.src;
                            (_.startsWith("data:") ||
                              !_.BAllowImageHotLinking()) &&
                              _.push({
                                url: _,
                                pos: _,
                              });
                          }
                        }),
                        _.length)
                      ) {
                        let _ = _.state._;
                        _.selection.empty || _.deleteSelection();
                        let _ = _.selection.from,
                          _ = 0;
                        for (const _ of _) {
                          const _ = _.content.cut(_, _.pos - 1);
                          _.insert(_, _),
                            (_ += _.size),
                            _.QueueUploadFileByURL(_.url, _, _),
                            (_ = _.pos + 1);
                        }
                        return (
                          _.insert(_, _.content.cut(_)),
                          _.scrollIntoView(),
                          _.dispatch(_),
                          !0
                        );
                      }
                      return !1;
                    },
                    handleDOMEvents: {
                      paste(_, _) {
                        if (_.clipboardData?.files?.length > 0) {
                          _.preventDefault();
                          for (const _ of _.clipboardData.files)
                            _.UploadFile(_);
                          return !0;
                        }
                      },
                    },
                  },
                }),
              [_, _],
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
            _ = !!("table" in _.nodes && _.nodes.table.spec.tableRole);
          return (
            (0, _._)(
              _.useMemo(
                () =>
                  _
                    ? _._({
                        View: _,
                      })
                    : void 0,
                [_],
              ),
            ),
            (0, _._)(_.useMemo(() => (_ ? _._() : void 0), [_])),
            null
          );
        });
        class _ extends _._ {
          constructor(_, _) {
            super(_, _), this.SetTableClass(_);
          }
          update(_) {
            return super.update(_) ? (this.SetTableClass(_), !0) : !1;
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
              className: _,
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
            !_ ||
              !_ ||
              _(
                new _._(_, {
                  state: _.state,
                }),
              );
          }, [_, _]),
            _.useEffect(() => () => _?.destroy(), [_]),
            (0, _._)(_, _);
          const { refDiv: _, onActivate: _, onGamepadDirection: _ } = _(_),
            _ = (0, _._)(_, _);
          if (!_) return null;
          const { schemaConfig: _, bbcodeParser: _ } = _;
          return (0, _.jsxs)(_._, {
            view: _,
            pmState: _,
            children: [
              (0, _.jsx)(
                _._,
                {
                  className: (0, _._)({
                    ["" + _]: !!_,
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
                },
                `editordiv_${_}`,
              ),
              (0, _.jsx)(_._, {
                refOnUpdate: _,
                schema: _.pm_schema,
                bSingleLine: _,
              }),
              (0, _.jsx)(_, {
                parser: _,
                schema: _.pm_schema,
              }),
              (0, _.jsx)(_, {
                schema: _.pm_schema,
              }),
              _,
            ],
          });
        });
        function _(_) {
          const _ = _.useRef(null),
            _ = (0, _._)(),
            _ = _.useCallback(() => {
              if ((_.ShowVirtualKeyboard(), !_)) return;
              if (!_.hasFocus()) {
                _.focus();
                let _ = _.dom.childNodes,
                  _ = _.current?.scrollTop ?? 0;
                for (let _ = 0; _ < _.length; ++_) {
                  let _ = _[_],
                    _ = _.offsetTop;
                  if (_ !== void 0 && _ >= _) {
                    let _ = _.getBoundingClientRect();
                    (0, _._)(_, _.left, _.top);
                    break;
                  }
                }
              }
            }, [_, _]),
            _ = _.useCallback((_) => _.currentTarget == _.target, []),
            _ = (0, _._)(_, void 0, void 0, _);
          return {
            refDiv: _,
            onActivate: _,
            onGamepadDirection: _,
          };
        }
        const _ = _.memo(function (_) {
          const { parser: _, schema: _ } = _;
          return (
            (0, _._)(
              _.useMemo(
                () =>
                  new _._({
                    props: {
                      transformPasted: (_, _) => _(_, _.nodes.hard_break, _),
                    },
                  }),
                [_, _],
              ),
            ),
            null
          );
        });
        function _(_, _, _) {
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
          const { schema: _, addtlAttrs: _, children: _ } = _,
            { callbacks: _, view: _ } = (0, _._)(),
            [_, _] = _.useState(() => (0, _._)(_.state, _.marks.link)),
            _ = _.useCallback((_) => _((0, _._)(_.state, _.marks.link)), [_]);
          (0, _._)(_, _);
          const [_, _] = (0, _._)(_, _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              (0, _.jsx)(_._, {
                onClick: () => _(_),
                toggled: _,
                tooltip: (0, _._)("#FormattingToolbar_InsertLink"),
                keyboardShortcut: "Mod-k",
                children: _,
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { schema: _, bColor: _, addtlAttrs: _, children: _ } = _,
            { callbacks: _, view: _ } = (0, _._)(),
            [_, _] = _.useState(() =>
              (0, _._)(_.state, _ ? _.marks.color : _.marks.bgcolor),
            ),
            _ = _.useCallback(
              (_) => _((0, _._)(_.state, _ ? _.marks.color : _.marks.bgcolor)),
              [_, _],
            );
          (0, _._)(_, _);
          const [_, _] = (0, _._)(_, _, _);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _,
              (0, _.jsx)(_._, {
                onClick: () => _(_),
                toggled: _,
                tooltip: _
                  ? (0, _._)("#FormattingToolbar_Color")
                  : (0, _._)("#FormattingToolbar_BgColor"),
                children: _,
              }),
            ],
          });
        }
        function _() {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Undo"),
                keyboardShortcut: "Mod-z",
                command: _._,
                children: (0, _.jsx)(_.VnB, {}),
              }),
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Redo"),
                keyboardShortcut:
                  _._.PLATFORM == "macos" ? "Mod-Shift-z" : "Mod-y",
                command: _._,
                children: (0, _.jsx)(_.Bal, {}),
              }),
            ],
          });
        }
        function _(_) {
          const { schema: _ } = _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Bold"),
                keyboardShortcut: "Mod-b",
                mark: _.marks.strong,
                children: (0, _.jsx)(_.l4n, {}),
              }),
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Italic"),
                keyboardShortcut: "Mod-i",
                mark: _.marks.italic,
                children: (0, _.jsx)(_.UKJ, {}),
              }),
              (0, _.jsx)(_._, {
                tooltip: (0, _._)("#FormattingToolbar_Underline"),
                keyboardShortcut: "Mod-u",
                mark: _.marks.underline,
                children: (0, _.jsx)(_.Gj3, {}),
              }),
              "strike" in _.marks &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_Strike"),
                  keyboardShortcut: "Mod-Shift-x",
                  mark: _.marks.strike,
                  children: (0, _.jsx)(_.tI4, {}),
                }),
              "code" in _.marks &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_InlineCode"),
                  keyboardShortcut: "Ctrl-Shift-c",
                  mark: _.marks.code,
                  children: (0, _.jsx)(_.bmT, {}),
                }),
              "color" in _.marks &&
                (0, _.jsx)(_, {
                  schema: _,
                  bColor: !0,
                  children: (0, _.jsx)(_.r7n, {}),
                }),
              "bgcolor" in _.marks &&
                (0, _.jsx)(_, {
                  schema: _,
                  bColor: !1,
                  children: (0, _.jsx)(_.FId, {}),
                }),
            ],
          });
        }
        function _(_) {
          const { schema: _ } = _;
          return (0, _.jsx)(_._, {
            tooltip: (0, _._)("#FormattingToolbar_Paragraph"),
            keyboardShortcut: "Ctrl-Shift-0",
            nodeType: _.nodes.paragraph,
            children: (0, _.jsx)(_.iYj, {}),
          });
        }
        function _(_) {
          const { nodeTypes: _, attrs: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = useToolbarContext(),
            [_, _] = React.useState(() => IsAnyBlockActive(_.state, _, _)),
            _ = React.useCallback(
              (_) => _(IsAnyBlockActive(_.state, _, _)),
              [_, _],
            );
          useCallbackList(_, _);
          const _ = React.useMemo(
              () => SetNodeAttributeCommand(_, _ ?? {}),
              [_, _],
            ),
            _ = !!_;
          return jsx(CommandButton, {
            ..._,
            command: _,
            toggled: _,
            children: _,
          });
        }
        function _(_) {
          const { schema: _ } = _;
          let _ = _.nodes.paragraph,
            _ = _.nodes.heading;
          const _ = React.useMemo(() => [_, _], [_, _]);
          return jsxs(Fragment, {
            children: [
              jsx(_, {
                tooltip: Localize("#FormattingToolbar_AlignLeft"),
                keyboardShortcut: "Ctrl-Shift-L",
                nodeTypes: _,
                attrs: {
                  align: "left",
                },
                children: jsx(GamepadUISVG.TextLeftAlign, {}),
              }),
              jsx(_, {
                tooltip: Localize("#FormattingToolbar_AlignCenter"),
                keyboardShortcut: "Ctrl-Shift-E",
                nodeTypes: _,
                attrs: {
                  align: "center",
                },
                children: jsx(GamepadUISVG.TextCenterAlign, {}),
              }),
              jsx(_, {
                tooltip: Localize("#FormattingToolbar_AlignRight"),
                keyboardShortcut: "Ctrl-Shift-R",
                nodeTypes: _,
                attrs: {
                  align: "right",
                },
                children: jsx(GamepadUISVG.TextRightAlign, {}),
              }),
            ],
          });
        }
        function _(_) {
          const { schema: _, maxLevel: _ = 1, levels: _ } = _,
            _ = _ + _ - 1;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ <= 1 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel1"),
                  keyboardShortcut: "Ctrl-Shift-1",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 1,
                  },
                  children: (0, _.jsx)(_.jRw, {}),
                }),
              _ <= 2 &&
                _ >= 2 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel2"),
                  keyboardShortcut: "Ctrl-Shift-2",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 2,
                  },
                  children: (0, _.jsx)(_.qOW, {}),
                }),
              _ <= 3 &&
                _ >= 3 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel3"),
                  keyboardShortcut: "Ctrl-Shift-3",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 3,
                  },
                  children: (0, _.jsx)(_.x7X, {}),
                }),
              _ <= 4 &&
                _ >= 4 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel4"),
                  keyboardShortcut: "Ctrl-Shift-4",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 4,
                  },
                  children: (0, _.jsx)(_.qzO, {}),
                }),
              _ <= 5 &&
                _ >= 5 &&
                (0, _.jsx)(_._, {
                  tooltip: (0, _._)("#FormattingToolbar_HeadingLevel5"),
                  keyboardShortcut: "Ctrl-Shift-5",
                  nodeType: _.nodes.heading,
                  attrs: {
                    level: 5,
                  },
                  children: (0, _.jsx)(_.jXA, {}),
                }),
            ],
          });
        }
        function _(_) {
          const { schema: _, showIndentButtonsAsNeeded: _ = !1 } = _,
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
            (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)(_, {
                  tooltip: (0, _._)("#FormattingToolbar_BulletedList"),
                  keyboardShortcut: "Ctrl-Shift-8",
                  list_type: _,
                  list_item: _,
                  children: (0, _.jsx)(_.JPq, {}),
                }),
                _ &&
                  (0, _.jsx)(_, {
                    tooltip: (0, _._)("#FormattingToolbar_OrderedList"),
                    keyboardShortcut: "Ctrl-Shift-7",
                    list_type: _,
                    list_item: _,
                    children: (0, _.jsx)(_.jE0, {}),
                  }),
                (!_ || _) &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)(_._, {
                        tooltip: (0, _._)("#FormattingToolbar_OutdentList"),
                        keyboardShortcut: "Mod-[",
                        command: _,
                        children: (0, _.jsx)(_.LSz, {}),
                      }),
                      (0, _.jsx)(_._, {
                        tooltip: (0, _._)("#FormattingToolbar_IndentList"),
                        keyboardShortcut: "Mod-[",
                        command: _,
                        children: (0, _.jsx)(_.ycU, {}),
                      }),
                    ],
                  }),
              ],
            })
          );
        }
        function _(_) {
          const { list_type: _, list_item: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = (0, _._)(),
            _ = _.useCallback((_) => (0, _._)(_.state, _) !== void 0, [_]),
            [_, _] = _.useState(() => _(_)),
            _ = _.useMemo(() => _._(_), [_]),
            _ = _.useMemo(() => _._(_), [_]);
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
            (0, _.jsx)(_._, {
              ..._,
              toggled: _,
              command: _ ? _ : _,
              children: _,
            })
          );
        }
        function _(_) {
          const { schema: _, addtlAttrs: _ } = _;
          return (0, _.jsx)(_, {
            schema: _,
            addtlAttrs: _,
            children: (0, _.jsx)(_.YqK, {}),
          });
        }
        function _(_) {
          const { bSpellcheckEnabled: _, setSpellcheckEnabled: _ } = _;
          return (0, _.jsx)(_._, {
            tooltip: _
              ? (0, _._)("#FormattingToolbar_DisableSpellcheck")
              : (0, _._)("#FormattingToolbar_EnableSpellcheck"),
            toggled: _,
            onClick: () => _(!_),
            children: (0, _.jsx)(_.DEV, {}),
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
          _ = __webpack_require__._(_);
        const _ = () => _.useContext(_);
        function _(_) {
          const { view: _, refUpdateToolbar: _, children: _ } = _,
            _ = _.useRef(void 0);
          _.current || (_.current = new _._());
          const _ = _.current;
          _.useEffect(
            () => ((0, _._)(_, () => _.Dispatch(_)), () => (0, _._)(_, void 0)),
            [_, _, _],
          );
          const _ = _.useMemo(
            () => ({
              callbacks: _,
              view: _,
            }),
            [_, _],
          );
          return _
            ? (0, _.jsx)(_.Provider, {
                value: _,
                children: _,
              })
            : null;
        }
        const _ = _.createContext(void 0);
        function _() {
          return (0, _.jsx)("div", {
            className: _.Gap,
          });
        }
        function _() {
          return (0, _.jsx)("div", {
            className: _.Spacer,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: (0, _._)(_.className, _.ToolbarRowOverflowContainer),
            children: (0, _.jsx)(_._, {
              className: _.ToolbarRow,
              "flow-children": "row",
              children: _.children,
            }),
          });
        }
        function _(_) {
          const { nodeType: _, attrs: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = _(),
            [_, _] = _.useState(() => (0, _._)(_.state, _, _)),
            _ = _.useCallback((_) => _((0, _._)(_.state, _, _)), [_, _]);
          (0, _._)(_, _);
          const _ = _.useMemo(() => _._(_, _), [_, _]);
          return (0, _.jsx)(_, {
            ..._,
            command: _,
            toggled: _,
            children: _,
          });
        }
        function _(_) {
          const { mark: _, children: _, ..._ } = _,
            { callbacks: _, view: _ } = _(),
            [_, _] = _.useState(() => (0, _._)(_.state, _)),
            _ = _.useCallback((_) => _((0, _._)(_.state, _)), [_]);
          (0, _._)(_, _);
          const _ = _.useMemo(() => _._(_), [_]);
          return (0, _.jsx)(_, {
            ..._,
            command: _,
            toggled: _,
            children: _,
          });
        }
        function _(_) {
          const { command: _, toggled: _, children: _, ..._ } = _,
            { view: _, callbacks: _ } = _(),
            [_, _] = _.useState(() => _(_.state));
          (0, _._)(
            _,
            _.useCallback((_) => _(_(_.state)), [_]),
          ),
            _.useEffect(() => _(_(_.state)), [_, _]);
          const _ = !_ && !_;
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: (0, _._)(_.CommandButton, _ && _.Toggled),
              onMouseDown: (_) => {
                _.preventDefault(), _(_.state, _.dispatch, _);
              },
              disabled: _,
              focusable: !_,
              children: _,
            }),
          });
        }
        function _(_) {
          const {
            onClick: _,
            toggled: _,
            disabled: _,
            children: _,
            className: _,
            ..._
          } = _;
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: (0, _._)(_.CommandButton, _ && _.Toggled, _),
              onMouseDown: (_) => {
                _.button === 0 && (_.preventDefault(), _(_));
              },
              disabled: _ === !0,
              children: _,
            }),
          });
        }
        function _(_) {
          const { tooltip: _, keyboardShortcut: _, children: _ } = _;
          if (!_) return _;
          const _ = _
            ? (0, _.jsx)(_, {
                tooltip: _,
                keyboardShortcut: _,
              })
            : _;
          return (0, _.jsx)(_._, {
            toolTipContent: _,
            direction: "bottom",
            children: _,
          });
        }
        function _(_) {
          const { tooltip: _, keyboardShortcut: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.TooltipWithShortcut,
            children: [
              (0, _.jsx)("div", {
                children: _,
              }),
              (0, _.jsx)("div", {
                children: (0, _.jsx)(_, {
                  keyboardShortcut: _,
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { keyboardShortcut: _ } = _,
            _ = _.split("-"),
            _ = _.pop() ?? "";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _.map((_, _) =>
                (0, _.jsxs)(
                  _.Fragment,
                  {
                    children: [
                      (0, _.jsx)(_, {
                        children: (0, _.jsx)(_, {
                          modifier: _,
                        }),
                      }),
                      " + ",
                    ],
                  },
                  _,
                ),
              ),
              (0, _.jsx)(_, {
                children: _.toUpperCase(),
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.KeyCap,
            children: _.children,
          });
        }
        function _(_) {
          const { modifier: _ } = _;
          switch (_) {
            case "Mod":
              return _._.PLATFORM == "macos" ? "\u2318" : "Ctrl";
            case "Shift":
              return _._.PLATFORM == "macos", "Shift";
            case "Ctrl":
              return _._.PLATFORM == "macos" ? "Control" : "Ctrl";
            case "Alt":
              return _._.PLATFORM == "macos" ? "Option" : "Alt";
          }
          return null;
        }
      },
      chunkid: (module) => {
        module.exports = {
          EyeDropperCtn: "_5jKe2NV9CM3JA3hcMALLw",
          EyeDropperBtn: "_3afPQT_fEWmhHhFHS-WIk7",
          ColorPickerCtn: "Nn2-w0eqLuugAR-Udm--3",
          ColorPickerDialog: "_32PwNSgquR6tGAPIBcWgVq",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ModalConfirmDialog: "_1MwR7dU-J2CeRWYt9WfUJw",
          Header: "Y9lJcGdHP6m4TRcgHnzj2",
          Buttons: "_1Wq4E7gdTa-fjWrhWFQG7b",
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
    },
  ]);
})();
