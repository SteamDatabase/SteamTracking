(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [6200],
  {
    chunkid: (module) => {
      module.exports = {
        Hover: "_1lo3nIamSX1TzzE4TlhFXA",
        Link: "_1ds3uh7ntoekPm635F2Ziv",
        LinkHelp: "_3Vn5X8bzPjWx5p545nkB6k",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_, _, _, _) {
        let _,
          _ = [];
        for (; (_ = _.match(_._)); ) {
          _.index > 0 && _.push(_.text(_.substring(0, _.index)));
          const _ = (0, _._)(_[0]),
            _ = _ && _(_);
          _ && "default" !== _
            ? "remove" !== _ && _.push(_)
            : _.push(
                _.text(_[0], [
                  __webpack_require__.create({
                    href: _,
                  }),
                ]),
              ),
            (_ = _.substring(_.index + _[0].length));
        }
        if (0 != _.length) return _.length && _.push(_.text(_)), _;
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
      const _ = _.memo(function (_) {
        const {
            linkMarkType: _,
            onURLPasted: __webpack_require__,
            schema: _,
            onClickURL: _ = _,
          } = _,
          _ = _.useRef(_);
        _.current = _;
        const [_, _] = _.useState(),
          [_, _] = _.useState(),
          [_, _] = _.useState(),
          [_, _] = (0, _._)(_),
          _ = _.useMemo(
            () =>
              new _._({
                props: {
                  handleClickOn(_, _, _, _, _, _) {
                    if (_ && (_.ctrlKey || 1 == _.button)) {
                      const _ = _.resolve(_ - _)
                        .marks()
                        .find((_) => _.type == _);
                      if (_)
                        return (
                          _.current(_.attrs.href, _.view),
                          _.preventDefault(),
                          !0
                        );
                    }
                    return !1;
                  },
                  handleKeyDown: (_, _) =>
                    !(
                      "k" != _.key ||
                      (!_.metaKey && !_.ctrlKey) ||
                      _.shiftKey ||
                      _.altKey
                    ) && (_(_), !0),
                  clipboardTextParser(_, _, _, _) {
                    const _ = (0, _._)(_, _, _, __webpack_require__);
                    return _ && new _._(_._.from(_), _.start(), _.end());
                  },
                  handlePaste(_, _, _) {
                    let _ = [];
                    if (
                      (_.content.descendants((_, _) => {
                        if (_.isText) {
                          const _ = (0, _._)(_, _.text, _, __webpack_require__);
                          _ &&
                            _.push({
                              node: _,
                              pos: _,
                              rgNodes: _,
                            });
                        }
                      }),
                      !_.length)
                    )
                      return !1;
                    let _ = _.state._;
                    _.selection.empty || _.deleteSelection();
                    let _ = _.selection.from,
                      _ = 0;
                    for (const _ of _) {
                      const {
                          node: _,
                          pos: __webpack_require__,
                          rgNodes: _,
                        } = _,
                        _ = _.content
                          .cut(_, __webpack_require__)
                          .append(_._.from(_));
                      _.insert(_, _),
                        (_ += _.size + 2),
                        (_ = __webpack_require__ + _.nodeSize);
                    }
                    return (
                      _.insert(_, _.content.cut(_)),
                      _.scrollIntoView(),
                      _.dispatch(_),
                      !0
                    );
                  },
                  handleDOMEvents: {
                    mouseover: (_, _) => {
                      for (
                        let _ = _.target;
                        _ && _ != _.currentTarget;
                        _ = _.parentElement
                      )
                        if ("A" == _.nodeName && "getBoundingClientRect" in _) {
                          const _ = _.getBoundingClientRect();
                          return (
                            _(_.left + _.width / 2), _(_.bottom + 2), void _(_)
                          );
                        }
                      _(void 0);
                    },
                    mouseleave: (_, _) => (_(void 0), !1),
                  },
                },
              }),
            [_, _, __webpack_require__, _],
          );
        (0, _._)(_);
        let _ = null;
        return (
          _ &&
            _ &&
            _ &&
            (_ = _.createElement(_, {
              top: _,
              left: _,
              href: _.getAttribute("href"),
            })),
          _.createElement(_.Fragment, null, _, _)
        );
      });
      function _(_) {
        const { top: _, left: __webpack_require__, href: _ } = _,
          [_, _] = _.useState(0),
          _ = _.useRef(null);
        _.useLayoutEffect(() => {
          _(_.current.getBoundingClientRect().width);
        }, [_, __webpack_require__, _]);
        const _ = {
          top: `${_}px`,
          left: `${Math.max(__webpack_require__ - _ / 2, 12)}px`,
        };
        return _.createElement(
          "div",
          {
            className: _.Hover,
            style: _,
            ref: _,
          },
          _.createElement(
            "div",
            {
              className: _.Link,
            },
            _,
          ),
          _.createElement(
            "div",
            {
              className: _.LinkHelp,
            },
            (0, _._)("#UserGameNotes_ClickToOpenLink"),
          ),
        );
      }
      function _(_, _) {
        _.open(_);
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
      const _ = _.memo(function (_) {
        const { specs: _ } = _,
          [__webpack_require__, _] = _.useState([]),
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
          __webpack_require__.map(({ _: _, nodeView: _ }) =>
            _.createElement(_, {
              key: _,
              nodeView: _,
            }),
          )
        );
      });
      function _(_) {
        const {
            element: _,
            spec: __webpack_require__,
            getProps: _,
            onPropsChanged: _,
            actions: _,
            isSelected: _,
          } = _.nodeView,
          [_, _] = _.useReducer((_) => _ + 1, 0);
        return (
          _.useEffect(() => _.Register(_).Unregister, [_, _]),
          _.createPortal(
            _.createElement(__webpack_require__.component, {
              ..._(),
              selected: _(),
              ..._,
            }),
            _,
          )
        );
      }
      class _ {
        constructor(_, _, _, _, _) {
          this.node = _;
          const _ = _.dom.ownerDocument.createElement(
            _.type.isInline ? "span" : "div",
          );
          this.dom = _;
          const { selection: _ } = _.state;
          this.selected = _() >= _.from && _() + _.nodeSize <= _._;
          const _ = (_) => {
              const _ = _(_.state._, _, _());
              _ && __webpack_require__.dispatch(_);
            },
            _ = {
              update: _,
              setAttrs: (_, _) =>
                _((_, _, _) => __webpack_require__.setNodeMarkup(_, _, _)),
              removeNode: () => _((_, _, _) => _.delete(_, _ + _.nodeSize)),
              focusView: () => {
                window.setTimeout(() => __webpack_require__.focus(), 1);
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
          return (
            _.type == this.node.type &&
            ((this.node = _), this.onPropsChanged(), !0)
          );
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
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            _: _,
            role: __webpack_require__,
            visible: _ = !0,
            className: _,
            keepMounted: _ = !1,
            expandDirection: _ = "height",
            msAnimationDuration: _ = 250,
            children: _,
          } = _,
          {
            style: _,
            active: _,
            refDiv: _,
          } = (function (_, _ = "height", __webpack_require__ = 250) {
            const _ = _.useRef(null),
              _ = _.useRef(!0),
              [_, _] = _.useState("idle"),
              [_, _] = _.useState(
                _
                  ? {}
                  : {
                      [_]: "0px",
                      overflow: "hidden",
                    },
              ),
              [_, _] = _.useState(_);
            _.useLayoutEffect(() => {
              _.current || _("start"), _ && _(_);
            }, [_]),
              _.useLayoutEffect(
                () => (
                  (_.current = !1),
                  () => {
                    _.current = !0;
                  }
                ),
                [],
              ),
              _.useLayoutEffect(() => {
                const _ = _.current,
                  _ = "height" == _ ? "scrollHeight" : "scrollWidth",
                  _ = () => {
                    _.unstable_batchedUpdates(() => {
                      _(
                        _
                          ? {}
                          : {
                              [_]: "0px",
                              overflow: "hidden",
                            },
                      ),
                        _("idle"),
                        _(_);
                    });
                  };
                if ("start" == _) {
                  const _ = _[_];
                  0 == _
                    ? _()
                    : (_((_) => ({
                        [_]: _ ? "0px" : `${_}px`,
                        ..._,
                        overflow: "hidden",
                      })),
                      _("active"));
                } else if ("active" == _) {
                  _.scrollTop;
                  const _ = _[_];
                  return (
                    _({
                      overflow: "hidden",
                      [_]: _ ? `${_}px` : "0px",
                    }),
                    __webpack_require__.addEventListener("transitionend", _),
                    () => {
                      __webpack_require__.removeEventListener(
                        "transitionend",
                        _,
                      );
                    }
                  );
                }
              }, [_, _]);
            const _ = {
              ..._,
              transition: `${_} ${__webpack_require__}ms`,
            };
            return {
              style: _,
              active: _,
              refDiv: _,
            };
          })(_, _, _);
        return _ || _ || _
          ? _.createElement(
              "div",
              {
                _: _,
                role: __webpack_require__,
                className: _,
                ref: _,
                style: _,
              },
              _,
            )
          : null;
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
            ProcessFileUpload: __webpack_require__,
            FetchImageURL: _,
            bAllowImageHotLinking: _ = !1,
          } = _,
          [_] = _.useState(() => ({
            manager: new _(__webpack_require__, _, _),
          })),
          { manager: _ } = _;
        return (
          _.SetProps(__webpack_require__, _, _),
          _.createElement(
            _.Provider,
            {
              value: _,
            },
            _.createElement(_, {
              manager: _,
            }),
            _.createElement(
              _,
              {
                manager: _,
              },
              _,
            ),
          )
        );
      }
      const _ = _.memo(function (_) {
        const { nodeType: _ } = _,
          _ = _(),
          {
            placeholderElements: _,
            createPlaceholder: _,
            replacePlaceholder: _,
          } = (function (_, _ = "PlaceholderPlugin") {
            const [_, _] = _.useState([]),
              [_] = _.useState(
                () =>
                  new _._({
                    key: new _._(_),
                    state: {
                      init: () => _._.empty,
                      apply(_, _) {
                        _ = __webpack_require__.map(_.mapping, _.doc);
                        const _ = _.getMeta(this) || [];
                        for (const _ of _)
                          if (null == _ ? void 0 : _.add) {
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
                            _ = __webpack_require__.add(_.doc, [_]);
                          } else
                            (null == _ ? void 0 : _.remove) &&
                              (_ = __webpack_require__.remove(
                                __webpack_require__.find(
                                  void 0,
                                  void 0,
                                  (_) => _._ == _.remove._,
                                ),
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
                  void 0 === _ &&
                    (_.selection.empty || _.deleteSelection(),
                    (_ = _.selection.from));
                  const _ = (null == _ ? void 0 : _.getMeta(_)) || [];
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
                  const _ = _.getState(_.state),
                    _ =
                      null == _
                        ? void 0
                        : _.find(void 0, void 0, (_) => _._ == _);
                  return (null == _ ? void 0 : _.length) ? _[0].from : void 0;
                },
                [_, _],
              ),
              _ = _.useCallback(
                (_, _) => {
                  const _ = _(_);
                  return (
                    !!_ &&
                    (_
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
                  );
                },
                [_, _, _],
              );
            return {
              placeholderElements: _,
              createPlaceholder: _,
              findPlaceholder: _,
              replacePlaceholder: _,
            };
          })("span", "FileUploadPlaceholder");
        !(function (_, _) {
          (0, _._)(
            _.useMemo(
              () =>
                new _._({
                  props: {
                    handlePaste(_, _, _) {
                      if (_.BAllowImageHotLinking()) return !1;
                      const _ = [];
                      if (
                        (_.content.descendants((_, _) => {
                          _.type == _ &&
                            _.push({
                              url: _.attrs.src,
                              pos: _,
                            });
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
                          __webpack_require__.dispatch(_),
                          !0
                        );
                      }
                    },
                    handleDOMEvents: {
                      paste(_, _) {
                        var _, _;
                        if (
                          (null ===
                            (_ =
                              null === (_ = _.clipboardData) || void 0 === _
                                ? void 0
                                : _.files) || void 0 === _
                            ? void 0
                            : _.length) > 0
                        ) {
                          __webpack_require__.preventDefault();
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
        })(_, _);
        const _ = (0, _._)();
        return (
          _.useEffect(
            () => __webpack_require__.RegisterEditor(_, _, _),
            [_, _, _, _],
          ),
          _.createElement(
            _.Fragment,
            null,
            _.map(({ _: _, element: _, data: _ }) =>
              _.createElement(_, {
                key: _,
                element: _,
                data: _,
              }),
            ),
          )
        );
      });
      class _ extends Error {
        constructor(_) {
          super(_);
        }
      }
      function _(_) {
        const { element: _, data: __webpack_require__ } = _,
          _ = "file" in __webpack_require__ ? __webpack_require__.file : void 0,
          _ = _.useMemo(() => _ && URL.createObjectURL(_), [_]),
          _ = "url" in __webpack_require__ ? __webpack_require__.url : _,
          _ = _.type.startsWith("video/");
        return _.createPortal(
          _.createElement(
            "span",
            {
              className: _.FileUploadPlaceholder,
            },
            _.createElement(
              "div",
              {
                className: _.ThrobberCtn,
              },
              _.createElement(
                "div",
                {
                  className: _.ThrobberRow,
                },
                _.createElement(
                  "div",
                  {
                    className: _.Throbber,
                  },
                  _.createElement(_._, {
                    size: "medium",
                    position: "center",
                  }),
                ),
                (0, _._)("#Prosemirror_FileUpload_Uploading"),
              ),
            ),
            !_ &&
              _.createElement("img", {
                src: _,
                className: _.PendingImage,
              }),
            _ &&
              _.createElement("video", {
                src: _,
                className: _.PendingImage,
                muted: !0,
                loop: !0,
                playsInline: !0,
                autoPlay: !0,
              }),
          ),
          _,
        );
      }
      class _ {
        constructor(_, _, _) {
          (this.m_errors = (0, _._)([])),
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
          var _;
          const _ =
            null === (_ = this.m_view) || void 0 === _
              ? void 0
              : __webpack_require__.posAtCoords({
                  left: _,
                  top: _,
                });
          return null == _ ? void 0 : _.pos;
        }
        async UploadFile(_, _) {
          (this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
            this.AddError("No editor registered to handle file upload");
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
            ((this.m_fnCreatePlaceholder && this.m_fnReplacePlaceholder) ||
              this.AddError("No editor registered to handle file upload"),
            !this.m_fnFetchImageURL)
          )
            return void console.warn(
              "The file upload manager does not have a way to fetch image URLs, so we cannot accept pasted <img> tags.",
            );
          console.log(`QueueUploadFileByURL: ${_} at pos ${_}`);
          const _ = this.m_fnCreatePlaceholder(
            {
              url: _,
            },
            _,
            _,
          );
          this.FetchURLAndProcess(_, _);
        }
        async FetchURLAndProcess(_, _) {
          var _;
          try {
            const _ = new URL(_),
              _ = await this.m_fnFetchImageURL(_),
              _ = new File(
                [_],
                decodeURIComponent(
                  (null === (_ = _.pathname) || void 0 === _
                    ? void 0
                    : __webpack_require__.replace(/^.*\//, "")) || "image",
                ),
                {
                  type: _.type,
                },
              );
            await this.ProcessFile(_, _);
          } catch (_) {
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
      const _ = _.createContext(void 0);
      function _() {
        return _.useContext(_).manager;
      }
      const _ = _.memo(function (_) {
        const { manager: _ } = _,
          _ = (0, _._)(_.GetErrors());
        return _.length
          ? _.createElement(
              _._,
              {
                active: !0,
              },
              _.createElement(_._, {
                bAlertDialog: !0,
                strTitle: (0, _._)("#Error_Generic"),
                strDescription: __webpack_require__.map((_, _) =>
                  _.createElement(
                    "div",
                    {
                      key: _,
                    },
                    _,
                  ),
                ),
                strOKButtonText: (0, _._)("#Button_OK"),
                onOK: () => _.ClearErrors(),
                onCancel: () => _.ClearErrors(),
              }),
            )
          : null;
      });
      function _(_) {
        const { manager: _, children: __webpack_require__ } = _,
          _ = _.useCallback(
            (_, _) => {
              for (const _ of _)
                _.UploadFile(_, _.GetViewPosition(_.clientX, _.clientY));
            },
            [_],
          ),
          [_, _] = (0, _._)(_);
        return _.cloneElement(__webpack_require__, {
          ..._,
          ...__webpack_require__.props,
        });
      }
    },
  },
]);
