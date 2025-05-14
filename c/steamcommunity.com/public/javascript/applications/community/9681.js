(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [9681],
  {
    chunkid: (module) => {
      module.exports = {
        ClanImageContainer: "_1TEbObXeFqUF-IRZKx0Qg5",
        ImageControls: "_1O2yIhwy4xQA69icI2lXEH",
        Hovered: "_3wRq55uuel7mw7DG3Vys63",
        ImageControlButton: "_3jc5-Cx8QTL4J84VCZNo8a",
        ClanImageModalContent: "SsgHukHcE1jf7p3W6Ta8g",
        ClanImageModalMode: "_1RAzAQViGO8A_wCFzSUStH",
        Active: "_1qsUls0lc9uJ_RarLA3dcG",
      };
    },
    chunkid: (module) => {
      module.exports = {
        Column: "_3l7NrcIIw_fedlHdVwJMVE",
        controls: "_3PGiW8qQcZDfnK9rOz7sjY",
        EditorCtn: "_2tY4qnv8tygCT7s94cB4vX",
        AddNew: "JBYdBhACB7UzXP4l_tpF2",
        DialogCtn: "Hd3q3Z7if0Z5H7rKMfqGN",
        ParticipantRow: "_3wHfIq4f1KlUL4-fKL0jLv",
        EventDescriptionField: "_3WxO3z6DufUbRu-axJjjqp",
      };
    },
    chunkid: (module) => {
      module.exports = {
        PreviewYoutubeEditor: "f2X3toOiE6SBBj8gkgwsN",
        Selected: "_1s7z9aW7wZunEhIaxF8Q_y",
        SelectionOverlay: "ZBNgQGP99gSH15SNAtiFt",
        PreviewYoutubeEditorModal: "_2898lC8lJ2Jih-o_aYzoaG",
        Error: "_1U35sXRoYsDiZXSTPbY1mk",
      };
    },
    chunkid: (module) => {
      module.exports = {
        EditableComponentToolbarContainer: "o3hf9xdErkO0g06PW47cS",
        EditableComponentToolbar: "_2Lz0NGsqaU7fnOxrrftZMG",
        EditableComponentInlineContainer: "_32qkMjC0nQ9LGh6fNXlNkM",
        InlineHoverContainer: "_1TX0Q6DERjhYWEDcU-0QLC",
        Hidden: "_3rZ3G-s7kNdbfzeAOTIYOr",
        WidthConstrained: "_1eKpwF-reh8vmJh6uM9dho",
        FloatingToolbarButton: "KsGqILWyUj2YuFJK_Zy7D",
        StrongShadows: "_3_c8HvckcvJ0FHwgeS1GtO",
      };
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        const {
            nodeAttrs: _,
            editModel: __webpack_require__,
            args: _,
            imageNodeType: _,
            videoNodeType: _,
            clanSteamID: _,
            setAttrs: _,
            focusView: _,
            removeNode: _,
          } = _,
          [_, _, _] = (0, _._)(),
          [_, _] = (0, _._)();
        let _;
        const { type: _, attrs: _ } = _;
        "image" == _
          ? (_ = _.createElement(_._, {
              strTag: "img",
              args: _,
              event: __webpack_require__.GetEventModel(),
              showErrorInfo: !0,
            }))
          : "video" == _
            ? (_ = _.createElement(_._, {
                key: `${_.mp4}_${_.webm}`,
                strTag: "video",
                args: _,
                event: __webpack_require__.GetEventModel(),
                showErrorInfo: !0,
              }))
            : (0, _._)(_, "unhandled type: " + _);
        const _ = _.useCallback(() => {
          _(), _();
        }, [_, _]);
        return _.createElement(
          _.Fragment,
          null,
          _ &&
            _.createElement(_, {
              bIsEdit: !0,
              nodeAttrs: _,
              hideModal: _,
              imageNodeType: _,
              videoNodeType: _,
              clanSteamID: _,
              setAttrs: _,
            }),
          _.createElement(
            "span",
            {
              className: _()(_.ClanImageContainer, _ && _.Hovered),
              ..._,
            },
            _,
            _.createElement(
              "span",
              {
                className: _.ImageControls,
              },
              _.createElement(
                _._,
                {
                  className: _.ImageControlButton,
                  onClick: _,
                  tooltip: (0, _._)("#EventEditor_ReplaceImage_Title"),
                },
                _.createElement(_.ffu, null),
              ),
              _.createElement(
                _._,
                {
                  className: _.ImageControlButton,
                  onClick: _,
                  tooltip: (0, _._)("#StoreAdmin_GameDescription_RemoveImage"),
                },
                _.createElement(_.sED, null),
              ),
            ),
          ),
        );
      }
      function _(_) {
        const {
            bIsEdit: _ = !1,
            nodeAttrs: __webpack_require__,
            hideModal: _,
            clanSteamID: _,
            setAttrs: _,
            imageNodeType: _,
            videoNodeType: _,
          } = _,
          { type: _, attrs: _ } = __webpack_require__,
          _ = _.useMemo(() => {
            let _;
            if (
              ("image" == _
                ? (_ = _.src)
                : "video" == _ && (_ = _.mp4 || _.webm),
              _)
            ) {
              const [_] = (0, _._)(_);
              return _ && _._.GetClanImageByImageHash(_, _);
            }
          }, [_, _, _]),
          [_, _] = _.useState(_ ? "uploaded" : "hotlink"),
          _ = _.useCallback(
            (_) => {
              _(
                {
                  src: _,
                },
                _,
              ),
                _();
            },
            [_, _, _],
          ),
          _ = _.useCallback(
            (_) => {
              _(
                {
                  ..._,
                  ..._,
                },
                _,
              ),
                _();
            },
            [_, _, _, _],
          );
        let _,
          _ = null;
        if ("image" == _)
          (_ = _.createElement(_, {
            active: "hotlink" == _,
            bIsEdit: _,
            hideModal: _,
            onImageSelected: _,
            src: _.src,
          })),
            (_ = _
              ? (0, _._)("#EventEditor_ReplaceImage_Title")
              : (0, _._)("#EventEditor_InsertImage_Title"));
        else {
          if ("video" != _) return (0, _._)(_, "Unhandled type"), null;
          (_ = _.createElement(_, {
            active: "hotlink" == _,
            bIsEdit: _,
            hideModal: _,
            attrs: _,
            setAttrs: _,
          })),
            (_ = (0, _._)("#EventEditor_EditVideo_Title"));
        }
        return _.createElement(
          _._,
          {
            active: !0,
            onDismiss: _,
            className: _.ClanImageModalContent,
          },
          _.createElement(_._, null, _),
          _.createElement(
            _._,
            {
              value: _,
              onChange: (_) => _(_),
            },
            _.createElement(
              _._,
              {
                value: "uploaded",
              },
              "Uploaded",
            ),
            _.createElement(
              _._,
              {
                value: "hotlink",
              },
              "Enter URL",
            ),
          ),
          _.createElement(
            "div",
            {
              className: _()(_.ClanImageModalMode, "uploaded" == _ && _.Active),
            },
            _.createElement(_, {
              bIsEdit: _,
              hideModal: _,
              onImageSelected: _,
              onVideoSelected: _ && _,
              clanSteamID: _,
              selectedImage: _,
            }),
          ),
          _.createElement(
            "div",
            {
              className: _()(_.ClanImageModalMode, "hotlink" == _ && _.Active),
            },
            _,
          ),
        );
      }
      function _(_) {
        const {
            active: _,
            bIsEdit: __webpack_require__,
            hideModal: _,
            onImageSelected: _,
            src: _,
          } = _,
          [_, _] = _.useState(_),
          _ = _.useCallback((_) => _(_.currentTarget.value), []),
          _ = __webpack_require__
            ? (0, _._)("#EventEditor_ReplaceImage_Title")
            : (0, _._)("#EventEditor_InsertImage_Title"),
          _ = _.useRef();
        return (
          _.useEffect(() => {
            _ && _.current.Focus();
          }, [_]),
          _.createElement(
            _._,
            {
              onSubmit: () => _(_),
            },
            _.createElement(
              _._,
              null,
              _.createElement(_._, {
                ref: _,
                value: _,
                onChange: _,
                label: (0, _._)("#EventEditor_InsertImage_URL"),
              }),
            ),
            _.createElement(_._, {
              onCancel: _,
              strOKText: _,
              bOKDisabled: !_ || _ == _,
            }),
          )
        );
      }
      function _(_) {
        const {
            active: _,
            bIsEdit: __webpack_require__,
            hideModal: _,
            attrs: _,
            setAttrs: _,
          } = _,
          [_, _] = _.useState(_.mp4),
          [_, _] = _.useState(_.webm),
          [_, _] = _.useState(_.poster),
          [_, _] = _.useState(!!_.autoplay),
          [_, _] = _.useState(!!_.controls),
          _ = _.useRef();
        _.useEffect(() => {
          _ && _.current.Focus();
        }, [_]);
        return _.createElement(
          _._,
          {
            onSubmit: (_) => {
              _({
                ..._,
                mp4: _ || void 0,
                webm: _ || void 0,
                poster: _ || void 0,
                autoplay: _,
                controls: _,
              }),
                _();
            },
          },
          _.createElement(
            _._,
            null,
            _.createElement(_._, {
              ref: _,
              value: _,
              onChange: (_) => _(_.currentTarget.value),
              label: (0, _._)("#EventEditor_InsertVideo_InputMP4"),
            }),
            _.createElement(_._, {
              value: _,
              onChange: (_) => _(_.currentTarget.value),
              label: (0, _._)("#EventEditor_InsertVideo_InputWebM"),
            }),
            _.createElement(_._, {
              value: _,
              onChange: (_) => _(_.currentTarget.value),
              label: (0, _._)("#EventEditor_InsertVideo_InputPoster"),
            }),
            _.createElement(_._, {
              checked: _,
              onChange: _,
              label: (0, _._)("#EventEditor_InsertVideo_InputAutoplay"),
            }),
            _.createElement(_._, {
              checked: _,
              onChange: _,
              label: (0, _._)("#EventEditor_InsertVideo_InputShowControls"),
            }),
          ),
          _.createElement(_._, {
            onCancel: _,
            strOKText: (0, _._)("#EventEditor_EditVideo_Title"),
            bOKDisabled: !_ && !_,
          }),
        );
      }
      function _(_) {
        const {
            bIsEdit: _,
            hideModal: __webpack_require__,
            onImageSelected: _,
            onVideoSelected: _,
            clanSteamID: _,
          } = _,
          [_, _] = _.useState(null),
          [_, _] = _.useState(_.selectedImage),
          _ = _
            ? (0, _._)("#EventEditor_ReplaceImage_Title")
            : (0, _._)("#EventEditor_InsertImage_Title"),
          _ = _.useCallback(
            (_) => {
              switch (_.file_type) {
                case 4:
                  _ &&
                    _({
                      mp4: (0, _._)(_),
                    });
                  break;
                case 5:
                  _ &&
                    _({
                      webm: (0, _._)(_),
                    });
                  break;
                default:
                  _((0, _._)(_));
              }
            },
            [_, _],
          ),
          _ = _.useCallback(
            (_, _) => {
              _(_), _ && _(_);
            },
            [_],
          );
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            _._,
            {
              onSubmit: () => _ && _(_),
            },
            _.createElement(_._, {
              fnSetImageSearch: _,
            }),
            _.createElement(_._, {
              clanAccountID: _.GetAccountID(),
              fileNameSearch: _,
              onImageSelected: _,
              selectedItem: _,
            }),
            _.createElement(_._, {
              onCancel: __webpack_require__,
              strOKText: _,
              bOKDisabled: !_ || _ == _.selectedImage,
            }),
          ),
        );
      }
      function _(_) {
        const {
            editModel: _,
            imageNode: __webpack_require__,
            videoNode: _,
            children: _,
          } = _,
          _ = _.useCallback(
            async (_) => {
              const _ = _.GetClanSteamID(),
                _ = new _._(_);
              if (!(await _.AddImage(_, _.GetCurEditLanguage(), null)))
                throw "Error processing image upload";
              const _ = await _.UploadAllImages(
                _.GetIncludedRealmList(),
                _.GetCurEditLanguage(),
              );
              if (!_ || 1 != Object.values(_).length)
                throw "Error uploading image";
              const _ = Object.values(_)[0];
              if (_.success && 1 != _.success) throw _.message;
              const _ = _(
                _._.GetClanImageByImageHash(_, _.image_hash),
                __webpack_require__,
                _,
              );
              return (
                _.type == __webpack_require__ &&
                  (await (0, _._)((0, _._)(_.attrs.src))),
                _
              );
            },
            [_, __webpack_require__, _],
          );
        return __webpack_require__
          ? _.createElement(
              _._,
              {
                ProcessFileUpload: _,
                bAllowImageHotLinking: !0,
              },
              _,
            )
          : _;
      }
      function _(_, _, _) {
        const _ = (0, _._)(_);
        switch (_.file_type) {
          case 4:
            if (!_) throw "Video unsupported";
            return __webpack_require__.create({
              mp4: _,
            });
          case 5:
            if (!_) throw "Video unsupported";
            return __webpack_require__.create({
              webm: _,
            });
          default:
            return _.create({
              src: _,
            });
        }
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = {
          ..._._.nodes,
          horizontal_rule: {
            group: "block",
            parseDOM: [
              {
                tag: "hr",
              },
            ],
            toDOM: (0, _._)("hr", _()._),
            bbCode: {
              tag: "hr",
            },
          },
          quote: {
            parseDOM: [
              {
                tag: "blockquote",
              },
            ],
            content: "paragraph block*",
            group: "block",
            defining: !0,
            toDOM: (0, _._)("blockquote", _().BlockQuote),
            bbCode: {
              tag: "quote",
            },
          },
          pullquote: {
            content: "block+",
            group: "block",
            toDOM: (0, _._)("div", _().PullQuote),
            bbCode: {
              tag: "pullquote",
            },
          },
          smalltext: {
            content: "inline*",
            group: "block",
            toDOM: (0, _._)("div", (0, _._)(_().SmallText, "BB_SmallText")),
            bbCode: {
              tag: "smalltext",
            },
          },
          emoticon: {
            content: "inline*",
            group: "inline",
            inline: !0,
            toDOM: (0, _._)("span", "BB_Emoticon"),
            bbCode: {
              tag: "emoticon",
            },
          },
          ..._._,
        },
        _ = {
          ..._._.marks,
          spoiler: {
            toDOM: (0, _._)(
              "span",
              (0, _._)(_().Spoiler, _().Revealed),
              (0, _._)("span", (0, _._)(_().SpoilerText)),
            ),
            bbCode: {
              tag: "spoiler",
            },
          },
        };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      const _ = {
        nodes: {
          ..._,
          heading: {
            ..._._.nodes.heading,
            parseDOM: [1, 2, 3].map((_) => ({
              tag: `h${_}`,
              attrs: {
                level: _,
              },
            })),
            toDOM: (_) => [
              "h" + _.attrs.level,
              {
                class: (0, _._)(
                  `BB_Header${_.attrs.level}`,
                  _()[`Header${_.attrs.level}`],
                  _()[`Header${_.attrs.level}`],
                ),
              },
              0,
            ],
            bbCode: [1, 2, 3].map((_) => ({
              tag: `h${_}`,
              BBArgsToAttrs: (_) => ({
                ..._(_),
                level: _,
              }),
              AttrsToBBArgs: (_) => ({
                ..._(_),
                tag: `h${_.level}`,
              }),
            })),
          },
          quote: {
            ..._.quote,
            toDOM: () => [
              "blockquote",
              {
                class: (0, _._)(_().BlockQuote, _().BlockQuote),
              },
              0,
            ],
          },
          previewyoutube: {
            attrs: {
              videoID: {
                default: "",
              },
              align: {
                default: "",
              },
            },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => [
              "div",
              {
                class: _().EditorYoutubeLoading,
              },
            ],
            bbCode: {
              tag: "previewyoutube",
              BBArgsToAttrs: (_) => {
                const [_, __webpack_require__] = (_[""] || "").split(";");
                return {
                  videoID: _,
                  align: __webpack_require__,
                };
              },
              AttrsToBBArgs: (_) => ({
                args: {
                  "": `${_.videoID};${_.align}`,
                },
              }),
            },
          },
          dynamiclink: {
            attrs: {
              href: {
                default: "",
              },
            },
            group: "inline",
            atom: !0,
            inline: !0,
            draggable: !0,
            toDOM: (_) => [
              "a",
              {
                href: _.attrs.href,
              },
            ],
            bbCode: {
              tag: "dynamiclink",
              BBArgsToAttrs: (_) => ({
                href: _.href,
              }),
              AttrsToBBArgs: (_) => ({
                args: {
                  href: _.href,
                },
              }),
            },
          },
          meetsteamsessiongroup: {
            attrs: {
              group_id: {
                default: "0",
              },
            },
            group: "block",
            atom: !0,
            draggable: !0,
            toDOM: () => [
              "div",
              {
                class: _().EditorYoutubeLoading,
              },
            ],
            bbCode: {
              tag: "meetsteamsessiongroup",
              BBArgsToAttrs: (_) => ({
                group_id: Number(_.group_id),
              }),
              AttrsToBBArgs: (_) => ({
                args: {
                  group_id: "" + _.group_id,
                },
              }),
            },
          },
        },
        marks: {
          ..._,
          link: {
            ..._.link,
            attrs: {
              href: {},
              title: {
                default: null,
              },
              style: {
                default: null,
              },
            },
            toDOM(_) {
              const { href: _, title: __webpack_require__, style: _ } = _.attrs;
              return [
                "a",
                {
                  href: _,
                  title: __webpack_require__,
                  class: (0, _._)(_),
                },
                0,
              ];
            },
            bbCode: {
              tag: "url",
              BBArgsToAttrs: (_) => ({
                href: _[""],
                style: _.style,
              }),
              AttrsToBBArgs: (_) => {
                let _ = {
                  "": _.href,
                };
                return (
                  _.style && (_.style = _.style),
                  {
                    args: _,
                  }
                );
              },
              convertContentToAttr: "href",
            },
          },
        },
      };
      function _(_) {
        return _._
          ? {
              _: _._.replace(/^#/, ""),
            }
          : {};
      }
      function _(_) {
        return _._
          ? {
              args: {
                _: _._,
              },
            }
          : {};
      }
      var _ = __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { className: _, ...__webpack_require__ } = _;
        return _.createElement("div", {
          className: _()(_, _.EditableComponentToolbarContainer),
          ...__webpack_require__,
        });
      }
      function _(_) {
        const {
            toolbar: _,
            top: __webpack_require__,
            left: _,
            width: _,
            height: _,
            visible: _,
          } = _,
          _ = {
            left: `${_}px`,
            top: `${__webpack_require__}px`,
            width: `${_}px`,
            position: "absolute",
          },
          _ = _ < 120;
        return (
          (_ < 80 || _) &&
            ((_.top = __webpack_require__ - 32 - 16 + "px"),
            (_.height = "48px")),
          _.createElement(
            "div",
            {
              style: _,
              className: _()(
                _.InlineHoverContainer,
                _ && _.WidthConstrained,
                !_ && _.Hidden,
              ),
            },
            _,
          )
        );
      }
      function _(_) {
        const { className: _, toolbar: __webpack_require__, children: _ } = _,
          [_, _] = (0, _._)(),
          [_, _] = _.useState({
            top: 0,
            left: 0,
            width: 0,
            height: 0,
          }),
          _ = (0, _.useRef)();
        return (
          (0, _.useLayoutEffect)(() => {
            if (_) {
              const _ = _.current;
              _({
                top: _.offsetTop,
                left: _.offsetLeft,
                width: _.offsetWidth,
                height: _.offsetHeight,
              });
            }
          }, [_]),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(
              "span",
              {
                ref: _,
                className: _()(_, _.EditableComponentInlineContainer),
                ..._,
              },
              _.createElement(_, {
                ..._,
                toolbar: __webpack_require__,
                visible: _ && _.width > 0,
              }),
              _,
            ),
          )
        );
      }
      function _(_) {
        const {
          onEditClick: _,
          strEditDescription: __webpack_require__ = (0, _._)("#Button_Edit"),
          onDeleteClick: _,
          strDeleteDescription: _ = (0, _._)("#Button_Remove"),
          bStrongShadows: _ = !1,
          children: _,
        } = _;
        return _.createElement(
          _,
          {
            bStrongShadows: _,
          },
          _ &&
            _.createElement(
              _,
              {
                onClick: _,
                description: __webpack_require__,
              },
              _.createElement(_.ffu, null),
            ),
          _ &&
            _.createElement(
              _,
              {
                onClick: _,
                description: _,
              },
              _.createElement(_.sED, null),
            ),
          _,
        );
      }
      function _(_) {
        const { bStrongShadows: _, children: __webpack_require__ } = _;
        return _.createElement(
          "span",
          {
            className: _()(_.EditableComponentToolbar, _ && _.StrongShadows),
          },
          __webpack_require__,
        );
      }
      function _(_) {
        const { onClick: _, description: __webpack_require__, children: _ } = _;
        return _.createElement(
          _._,
          {
            onClick: _,
            tooltip: __webpack_require__,
            className: _.FloatingToolbarButton,
          },
          _,
        );
      }
      function _(_) {
        const {
            videoID: _,
            align: __webpack_require__,
            editModel: _,
            selected: _,
            setAttrs: _,
            focusView: _,
          } = _,
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            _(), _();
          }, [_, _]),
          _ = _.useCallback(
            (_, _) => {
              _({
                videoID: _,
                align: _,
              }),
                _();
            },
            [_, _],
          );
        return _.createElement(
          _.Fragment,
          null,
          _ &&
            _.createElement(_, {
              videoID: _,
              align: __webpack_require__,
              bEditing: !0,
              hideModal: _,
              onSave: _,
            }),
          _.createElement(
            _,
            {
              className: (0, _._)(_.PreviewYoutubeEditor, _ && _.Selected),
            },
            _.createElement(_, {
              onEditClick: _,
              onDeleteClick: _.removeNode,
              bStrongShadows: !0,
            }),
            _ &&
              _.createElement("div", {
                className: _.SelectionOverlay,
              }),
            _.createElement(_._, {
              event: _.GetEventModel(),
              strTag: "previewyoutube",
              args: {
                "": `${_};${__webpack_require__}`,
              },
              showErrorInfo: !0,
            }),
          ),
        );
      }
      function _(_) {
        const {
            videoID: _ = "",
            align: __webpack_require__ = "",
            bEditing: _ = !1,
            hideModal: _,
            onSave: _,
          } = _,
          [_, _] = _.useState(__webpack_require__ || _._.full),
          [_, _] = _.useState(_ ? `https://www.youtube.com/watch?v=${_}` : ""),
          [_, _] = _.useState(void 0),
          _ = _.useCallback(() => {
            const { strVideoID: _ } = (0, _._)(_);
            return (
              _ ? _(_, _) : _((0, _._)("#EventEditor_InsertYouTube_NoURL")), !1
            );
          }, [_, _, _]),
          _ = _.useCallback((_) => {
            _ && (_.element.focus(), _.element.select());
          }, []);
        return _.createElement(
          _._,
          {
            active: !0,
          },
          _.createElement(
            _._,
            {
              strTitle: (0, _._)("#EventEditor_InsertYouTube"),
              closeModal: _,
              strOKText: _
                ? (0, _._)("#Button_Save")
                : (0, _._)("#EventEditor_InsertYouTube"),
              onOK: _,
            },
            _ &&
              _.createElement(
                "div",
                {
                  className: _.Error,
                },
                _,
              ),
            _.createElement(_._, {
              label: (0, _._)("#EventEditor_InsertYouTube_URL"),
              placeholder: (0, _._)("#EventEditor_InsertYouTube_Placholder"),
              value: _,
              ref: _,
              onChange: (_) => _(_.currentTarget.value),
            }),
            _.createElement(
              _._,
              {
                label: (0, _._)("#EventEditor_InsertYouTube_Position"),
              },
              _.createElement(_._, {
                checked: _ == _._.left,
                onChange: (_) => _ && _(_._.left),
                label: (0, _._)("#EventEditor_InsertYouTube_Left"),
              }),
              _.createElement(_._, {
                checked: _ == _._.right,
                onChange: (_) => _ && _(_._.right),
                label: (0, _._)("#EventEditor_InsertYouTube_Right"),
              }),
              _.createElement(_._, {
                checked: _ == _._.full,
                onChange: (_) => _ && _(_._.full),
                label: (0, _._)("#EventEditor_InsertYouTube_Full"),
              }),
            ),
          ),
        );
      }
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_);
      function _(_) {
        const { hideModal: _, fnUpdateSession: __webpack_require__ } = _,
          [_, _] = (0, _.useState)(() => _(!0, null)),
          [_, _] = (0, _.useState)(() => _(!0, null)),
          [_] = (0, _._)(() => [_.location_type]);
        return _.createElement(
          _._,
          {
            active: !0,
          },
          _.createElement(
            _._,
            {
              strTitle: (0, _._)("#MeetSteam_create_title"),
              onOK: () => __webpack_require__(_, _),
              closeModal: () => {
                _(_(!0, null)), _(_(!0, null)), _();
              },
              bOKDisabled: null == !_,
            },
            _.createElement(
              "div",
              {
                className: _().DialogCtn,
              },
              _.createElement(_, {
                group: _,
                fnSetGroup: _,
              }),
              _.createElement(_, {
                session: _,
                fnSetSession: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
            hideModal: _,
            groupInput: __webpack_require__,
            fnUpdateGroupSession: _,
          } = _,
          [_, _] = (0, _.useState)(() => _(!1, __webpack_require__));
        return _.createElement(
          _._,
          {
            active: !0,
          },
          _.createElement(
            _._,
            {
              strTitle: (0, _._)("#MeetSteam_edit_title"),
              onOK: () => {
                _(_), _();
              },
              onCancel: () => {
                _(_(!1, __webpack_require__)), _();
              },
            },
            _.createElement(
              "div",
              {
                className: _().DialogCtn,
              },
              _.createElement(_, {
                group: _,
                fnSetGroup: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const {
            bCreate: _,
            hideModal: __webpack_require__,
            sessionInput: _,
            fnUpdateSession: _,
          } = _,
          [_, _] = (0, _.useState)(() => _(_, _)),
          [_] = (0, _._)(() => [_.location_type]);
        return _.createElement(
          _._,
          {
            active: !0,
          },
          _.createElement(
            _._,
            {
              strTitle: (0, _._)(
                _ ? "#MeetSteam_create_title" : "#MeetSteam_edit_title",
              ),
              onOK: () => {
                _(_), __webpack_require__();
              },
              onCancel: () => {
                _(_(_, _)), __webpack_require__();
              },
              bOKDisabled: !_,
            },
            _.createElement(
              "div",
              {
                className: _().DialogCtn,
              },
              _.createElement(_, {
                session: _,
                fnSetSession: _,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { group: _, fnSetGroup: __webpack_require__ } = _,
          _ = (0, _._)();
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(_._, {
            type: "text",
            label: (0, _._)("#MeetSteam_edit_session_name"),
            value: _._.Get(_.localized_session_title, _),
            onChange: (_) => {
              const _ = {
                ..._,
              };
              (_.localized_session_title = _._.Set(
                _.localized_session_title,
                _,
                _.currentTarget.value,
              )),
                __webpack_require__(_);
            },
          }),
          _.createElement(_._, null, (0, _._)("#MeetSteam_edit_session_desc")),
          _.createElement("textarea", {
            className: (0, _._)(
              "DialogTextInputBase",
              _().EventDescriptionField,
            ),
            value: _._.Get(_.localized_session_description, _),
            rows: 5,
            onChange: (_) => {
              const _ = {
                ..._,
              };
              (_.localized_session_description = _._.Set(
                _.localized_session_description,
                _,
                _.currentTarget.value,
              )),
                __webpack_require__(_);
            },
          }),
        );
      }
      function _(_) {
        const { session: _, fnSetSession: __webpack_require__ } = _,
          [_, _, _, _, _, _] = (0, _._)(() => [
            _.rtime_start,
            _.rtime_end,
            _.max_capacity,
            _.max_per_team,
            _.location_type,
            _.in_person_time_zone,
          ]),
          _ = [];
        for (let _ = 0; _ < 4; ++_)
          _.push({
            data: _,
            label: _,
          });
        const _ = Math.max(0, Math.floor((_ - _) / 60)),
          _ = "America/Los_Angeles",
          _ = Intl.DateTimeFormat().resolvedOptions().timeZone,
          _ = "in_person" === _ ? (null != _ ? _ : _) : _,
          _ = _.unix(_.rtime_start)._(_),
          _ = _.unix(_.rtime_start)._(_),
          _ = _.utcOffset() - _.utcOffset(),
          _ = _.unix(_.rtime_end)._(_),
          _ = _.unix(_.rtime_end)._(_),
          _ = _.utcOffset() - _.utcOffset(),
          _ = (function () {
            const _ = (0, _._)({
              queryKey: ["timezone"],
              queryFn: async () => {
                const _ = `${_._.COMMUNITY_BASE_URL}/eventadmin/ajaxgettimezones`,
                  _ = {},
                  _ = await _().get(_, {
                    params: _,
                  });
                return null == _ ? void 0 : _.data.timezones;
              },
            });
            return _.isSuccess ? _.data : [];
          })(),
          _ = _.useMemo(
            () => _.reduce((_, _) => _.set(_.name, _.friendly_name), new Map()),
            [_],
          ),
          _ = (_) => {
            var _;
            return null !== (_ = _.get(_)) && void 0 !== _ ? _ : _;
          };
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: _.EventEditorTextTitle,
            },
            (0, _._)("#MeetSteam_edit_date_display_title"),
          ),
          _.createElement(
            "div",
            {
              className: _.EventEditorTextSubTitle,
            },
            (0, _._)("#MeetSteam_edit_date_display_desc"),
          ),
          _.createElement(
            _._,
            {
              value: _,
              onChange: (_) => {
                __webpack_require__({
                  ..._,
                  location_type: _,
                });
              },
            },
            _.createElement(
              _._,
              {
                value: "in_person",
              },
              (0, _._)("#MeetSteam_edit_date_display_in_person"),
            ),
            _.createElement(
              _._,
              {
                value: "virtual",
              },
              (0, _._)("#MeetSteam_edit_date_display_virtual"),
            ),
          ),
          "in_person" === _ &&
            _.createElement(_._, {
              styles: {
                option: (_) => ({
                  ..._,
                  color: "#444444",
                }),
              },
              isSearchable: !0,
              isMulti: !1,
              options: _.map((_) => ({
                label: _.friendly_name,
                value: _.name,
              })),
              defaultMenuIsOpen: !1,
              value: _
                ? {
                    label: _(_),
                    value: _,
                  }
                : {
                    label: _(_),
                    value: _,
                  },
              onChange: (_) =>
                __webpack_require__({
                  ..._,
                  in_person_time_zone: _.value,
                }),
            }),
          _.createElement("br", null),
          _.createElement(_._, {
            strDescription: (0, _._)("#MeetSteam_edit_start"),
            nEarliestTime: 0,
            fnGetTimeToUpdate: () => _,
            fnSetTimeToUpdate: (_) =>
              __webpack_require__({
                ..._,
                rtime_start: _,
                rtime_end: _ + _._.PerMinute * _,
              }),
            fnIsValidDateTime: () => !0,
            bShowTimeZone: !0,
          }),
          _.createElement("br", null),
          _.createElement(_._, {
            type: "number",
            min: 0,
            label: (0, _._)("#MeetSteam_edit_duration"),
            onChange: (_) => {
              const _ = Number.parseInt(_.currentTarget.value);
              __webpack_require__({
                ..._,
                rtime_end: _.rtime_start + _._.PerMinute * _,
              });
            },
            value: _,
          }),
          _.createElement(
            "div",
            null,
            (0, _._)("#MeetSteam_edit_displayed_start"),
            ": ",
            (0, _._)(_.unix() + 60 * _, !1, _.format("z")),
            " ",
          ),
          _.createElement(
            "div",
            null,
            (0, _._)("#MeetSteam_edit_displayed_end"),
            ": ",
            (0, _._)(_.unix() + 60 * _, !1, _.format("z")),
            " ",
          ),
          _.createElement("br", null),
          _.createElement("br", null),
          _.createElement(
            "div",
            {
              className: _().ParticipantRow,
            },
            _.createElement(_._, {
              type: "number",
              value: _,
              label: (0, _._)("#MeetSteam_edit_max_capacity"),
              min: 1,
              onChange: (_) =>
                __webpack_require__({
                  ..._,
                  max_capacity: Number.parseInt(_.currentTarget.value),
                }),
            }),
            _.createElement(_._, {
              controlled: !0,
              label: (0, _._)("#MeetSteam_edit_guest_count"),
              tooltip: (0, _._)("#MeetSteam_edit_guest_count_ttip"),
              rgOptions: _,
              selectedOption: _,
              onChange: (_) =>
                __webpack_require__({
                  ..._,
                  max_per_team: _.data,
                }),
            }),
          ),
        );
      }
      function _(_, _) {
        if (_) {
          const _ =
            _._.GetEditModel().GetEventModel().jsondata.meet_steam_groups;
          let _ = 0;
          do {
            _ = Math.floor(1e4 + 9e4 * Math.random());
          } while (_ && _.findIndex((_) => _.group_id == _) >= 0);
          return {
            group_id: _,
            localized_session_title: (0, _._)([], 31, null),
            localized_session_description: (0, _._)([], 31, null),
            sessions: [],
          };
        }
        return _
          ? {
              ..._,
              localized_session_description: [
                ..._.localized_session_description,
              ],
              localized_session_title: [..._.localized_session_title],
            }
          : ((0, _._)(
              !1,
              "HelperCreateOrCloneGroupSessionModel Expect Create or previous model",
            ),
            null);
      }
      function _(_, _) {
        if (_) {
          const _ = _._.GetTimeNowWithOverride(),
            _ = _._.GetEditModel().GetEventModel().jsondata.meet_steam_groups,
            _ =
              null == _ ? void 0 : _.reduce((_, _) => _.concat(_.sessions), []);
          let _ = 0;
          do {
            _ = Math.floor(1e4 + 9e4 * Math.random());
          } while (_ && __webpack_require__.findIndex((_) => _._ == _) >= 0);
          const _ = 3600 * Math.ceil(_ / 3600);
          return {
            _: _,
            rtime_start: _ + _._.PerDay,
            rtime_end: _ + _._.PerDay + _._.PerHour,
            max_capacity: 100,
            max_per_team: 3,
          };
        }
        return _
          ? {
              ..._,
            }
          : ((0, _._)(
              !1,
              "HelperCreateOrCloneSessionInstanceModel Expect Create or previous model",
            ),
            null);
      }
      function _(_) {
        const _ = _._.GetEditModel();
        for (
          let _ = 0;
          _ < _.GetEventModel().jsondata.meet_steam_groups.length;
          ++_
        ) {
          const _ = _.GetEventModel().jsondata.meet_steam_groups[_];
          for (let _ = 0; _ < _.sessions.length; ++_)
            if (_.sessions[_]._ == _)
              return {
                groupIndex: _,
                sessionIndex: _,
              };
        }
        return null;
      }
      function _(_) {
        const _ = _._.GetEditModel();
        for (
          let _ = 0;
          _ < _.GetEventModel().jsondata.meet_steam_groups.length;
          ++_
        ) {
          const _ = _.GetEventModel().jsondata.meet_steam_groups[_];
          if (_.group_id == _)
            return {
              group: _,
              groupIndex: _,
            };
        }
        return null;
      }
      function _(_) {
        const {
            focusView: _,
            removeNode: __webpack_require__,
            group_id: _,
          } = _,
          _ = _._.GetEditModel(),
          _ = (0, _._)(() => {
            var _;
            return null ===
              (_ = _.GetEventModel().jsondata.meet_steam_groups) || void 0 === _
              ? void 0
              : _.find((_) => _.group_id == _);
          }),
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            _(), _();
          }, [_, _]),
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            _(), _();
          }, [_, _]);
        return _ && _.GetClanAccountID() == (0, _._)()
          ? _.createElement(
              "div",
              {
                className: _().EditorCtn,
              },
              _.createElement(_, {
                groupData: _,
                focusView: _,
              }),
              _.createElement(
                "div",
                {
                  className: _().controls,
                },
                _.createElement(
                  _._,
                  {
                    onClick: _,
                    tooltip: (0, _._)("#Button_Edit"),
                  },
                  _.createElement(_.ffu, null),
                ),
                _.createElement(
                  _._,
                  {
                    onClick: _,
                    tooltip: (0, _._)("#Button_Delete"),
                  },
                  _.createElement(_.sED, null),
                ),
              ),
              _ &&
                _.createElement(_, {
                  hideModal: _,
                  groupInput: _,
                  fnUpdateGroupSession: (_) => {
                    const { groupIndex: _ } = _(_.group_id),
                      _ = _._.GetEditModel();
                    (__webpack_require__.GetEventModel().jsondata.meet_steam_groups[
                      _
                    ] = _),
                      __webpack_require__.SetDirty(_._.description);
                  },
                }),
              _ &&
                _.createElement(
                  _._,
                  {
                    active: !0,
                  },
                  _.createElement(_._, {
                    strTitle: (0, _._)("#Button_Delete"),
                    strDescription: (0, _._)("#Dialog_AreYouSure"),
                    onOK: () => {
                      const { groupIndex: _ } = _(_.group_id),
                        _ = _._.GetEditModel(),
                        _ = [..._.GetEventModel().jsondata.meet_steam_groups];
                      _.splice(_, 1),
                        (_.GetEventModel().jsondata.meet_steam_groups = _),
                        _.SetDirty(_._.description),
                        __webpack_require__();
                    },
                    closeModal: _,
                  }),
                ),
            )
          : _.createElement(
              "div",
              null,
              "Error: Cannot edit meet steam session group",
            );
      }
      function _(_) {
        const { groupData: _, focusView: __webpack_require__ } = _,
          _ = (0, _._)(() => _.sessions || []),
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            __webpack_require__(), _();
          }, [__webpack_require__, _]);
        return _
          ? _.createElement(
              _._,
              {
                groupData: _,
              },
              _.map((_, _) =>
                _.createElement(_, {
                  key: "timecol_" + _.group_id + "_" + _._,
                  focusView: __webpack_require__,
                  sessionID: _._,
                  bShowOR: _ + 1 < _.length,
                }),
              ),
              _.createElement(
                _._,
                {
                  className: _().AddNew,
                  onClick: _,
                  tooltip: (0, _._)("#MeetSteam_add"),
                },
                _.createElement(_.OMN, null),
              ),
              _ &&
                _.createElement(_, {
                  bCreate: !0,
                  hideModal: _,
                  fnUpdateSession: (_) => {
                    const _ = _._.GetEditModel(),
                      _ = [..._.sessions, _];
                    _.sort((_, _) => _.rtime_start - _.rtime_start),
                      (_.sessions = _),
                      __webpack_require__.SetDirty(_._.description);
                  },
                }),
            )
          : null;
      }
      function _(_) {
        const { sessionID: _, bShowOR: __webpack_require__, focusView: _ } = _,
          [_, _] = (0, _._)(),
          _ = (0, _._)(() => {
            const { groupIndex: _, sessionIndex: __webpack_require__ } = _(_);
            return _._.GetEditModel().GetEventModel().jsondata
              .meet_steam_groups[_].sessions[__webpack_require__];
          }),
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            _(), _();
          }, [_, _]),
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            _(), _();
          }, [_, _]);
        return _.createElement(
          _.Fragment,
          null,
          _.createElement(
            "div",
            {
              className: _().Column,
              ..._,
            },
            _.createElement(_._, {
              sessionData: _,
            }),
            Boolean(_) &&
              _.createElement(
                "div",
                {
                  className: _().controls,
                },
                _.createElement(
                  _._,
                  {
                    onClick: _,
                    tooltip: (0, _._)("#Button_Edit"),
                  },
                  _.createElement(_.ffu, null),
                ),
                _.createElement(
                  _._,
                  {
                    onClick: _,
                    tooltip: (0, _._)("#Button_Delete"),
                  },
                  _.createElement(_.sED, null),
                ),
              ),
            _ &&
              _.createElement(_, {
                bCreate: !1,
                hideModal: _,
                sessionInput: _,
                fnUpdateSession: (_) => {
                  const _ = _._.GetEditModel(),
                    { groupIndex: _, sessionIndex: _ } = _(_),
                    _ = [
                      ...__webpack_require__.GetEventModel().jsondata
                        .meet_steam_groups[_].sessions,
                    ];
                  (_[_] = _),
                    _.sort((_, _) => _.rtime_start - _.rtime_start),
                    (__webpack_require__.GetEventModel().jsondata.meet_steam_groups[
                      _
                    ].sessions = _),
                    __webpack_require__.SetDirty(_._.description);
                },
              }),
            _ &&
              _.createElement(
                _._,
                {
                  active: !0,
                },
                _.createElement(_._, {
                  strTitle: (0, _._)("#Button_Delete"),
                  strDescription: (0, _._)("#Dialog_AreYouSure"),
                  onOK: () => {
                    const _ = _._.GetEditModel(),
                      { groupIndex: __webpack_require__, sessionIndex: _ } =
                        _(_),
                      _ = [
                        ..._.GetEventModel().jsondata.meet_steam_groups[
                          __webpack_require__
                        ].sessions,
                      ];
                    _.splice(_, 1),
                      _.sort((_, _) => _.rtime_start - _.rtime_start),
                      (_.GetEventModel().jsondata.meet_steam_groups[
                        __webpack_require__
                      ].sessions = _),
                      _.SetDirty(_._.description);
                  },
                  closeModal: _,
                }),
              ),
          ),
          __webpack_require__ && _.createElement(_._, null),
        );
      }
      var _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      const _ = _.memo(function (_) {
        const {
          view: _,
          schema: __webpack_require__,
          refUpdateToolbar: _,
          className: _,
          clanSteamID: _,
          bSpellcheckEnabled: _,
          setSpellcheckEnabled: _,
        } = _;
        return _.createElement(
          _._,
          {
            refUpdateToolbar: _,
            view: _,
          },
          _.createElement(
            "div",
            {
              className: _.className,
            },
            _.createElement(
              _._,
              {
                className: _.className,
              },
              _.createElement(_._, null),
              _.createElement(_._, null),
              _.createElement(_._, {
                schema: __webpack_require__,
              }),
              _.createElement(_._, null),
              __webpack_require__.marks.link &&
                _.createElement(_, {
                  schema: __webpack_require__,
                }),
              _.createElement(_._, null),
              _.createElement(_._, {
                schema: __webpack_require__,
              }),
              _.createElement(_._, {
                schema: __webpack_require__,
                levels: 3,
              }),
              _.createElement(_._, null),
              _.createElement(_, {
                schema: __webpack_require__,
                clanSteamID: _,
              }),
              !1,
              _.createElement(_._, {
                schema: __webpack_require__,
                showIndentButtonsAsNeeded: !0,
              }),
              _.createElement(_._, null),
              _ &&
                _.createElement(_._, {
                  bSpellcheckEnabled: _,
                  setSpellcheckEnabled: _,
                }),
              __webpack_require__.nodes.meetsteamsessiongroup &&
                _.createElement(_, {
                  schema: __webpack_require__,
                }),
            ),
            !1,
          ),
        );
      });
      function _(_) {
        const _ = (0, _._)();
        return _.createElement(_._, {
          schema: _.schema,
          addtlAttrs: _,
        });
      }
      function _(_) {
        const { schema: _, clanSteamID: __webpack_require__ } = _,
          { callbacks: _, view: _ } = (0, _._)(),
          { image: _, video: _, previewyoutube: _ } = _.nodes,
          [_, _] = _.useState(),
          _ = _.useCallback(() => {
            _(void 0), _.focus();
          }, [_]),
          _ = _.useCallback(() => {
            _({
              type: "image",
              attrs: {
                src: "",
              },
            });
          }, []),
          _ = _.useCallback(() => {
            _({
              type: "video",
              attrs: {
                mp4: "",
                webm: "",
                poster: "",
                autoplay: !0,
                controls: !1,
              },
            });
          }, []),
          _ = _.useCallback(
            (_, _) => {
              _.dispatch(_.state._.insert(_.state.selection._, _.create(_)));
            },
            [_],
          );
        return _.createElement(
          _.Fragment,
          null,
          _ &&
            _.createElement(_, {
              nodeAttrs: _,
              hideModal: _,
              setAttrs: _,
              imageNodeType: _,
              videoNodeType: _,
              clanSteamID: __webpack_require__,
            }),
          _ &&
            _.createElement(
              _._,
              {
                tooltip: "#EventEditor_InsertImage_Title",
                onClick: _,
                toggled: "image" == (null == _ ? void 0 : _.type),
              },
              _.createElement(_._V3, null),
            ),
          _ &&
            _.createElement(
              _._,
              {
                tooltip: "#EventEditor_EditVideo_Title",
                onClick: _,
                toggled: "video" == (null == _ ? void 0 : _.type),
              },
              _.createElement(_.CeX, null),
            ),
          _ &&
            _.createElement(_, {
              schema: _,
            }),
          (_ || _ || _) && _.createElement(_._, null),
        );
      }
      function _(_) {
        const { schema: _ } = _,
          { callbacks: __webpack_require__, view: _ } = (0, _._)(),
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            _(), _.focus();
          }, [_, _]),
          _ = _.useCallback(
            (_, _) => {
              !(function (_, _, _, _ = _._.left) {
                _.dispatch(
                  _.state._.insert(
                    _.state.selection._,
                    _.create({
                      videoID: _,
                      align: _,
                    }),
                  ),
                );
              })(_, _.nodes.previewyoutube, _, _),
                _();
            },
            [_, _, _],
          );
        return _.createElement(
          _.Fragment,
          null,
          _ &&
            _.createElement(_, {
              hideModal: _,
              onSave: _,
            }),
          _.createElement(
            _._,
            {
              tooltip: "#EventEditor_InsertYouTube",
              onClick: _,
              toggled: _,
            },
            _.createElement("img", {
              src: _._,
            }),
          ),
        );
      }
      function _(_) {
        const { schema: _ } = _,
          { callbacks: __webpack_require__, view: _ } = (0, _._)(),
          _ = _._.GetEditModel(),
          [_, _, _] = (0, _._)(),
          _ = _.useCallback(() => {
            _(), _.focus();
          }, [_, _]),
          _ = _.useCallback(
            (_, _) => {
              _.GetEventModel().jsondata.meet_steam_groups ||
                (_.GetEventModel().jsondata.meet_steam_groups = []),
                _.GetEventModel().jsondata.meet_steam_groups.push({
                  ..._,
                  sessions: [_],
                }),
                (function (_, _, _) {
                  _.dispatch(
                    _.state._.insert(
                      _.state.selection._,
                      _.create({
                        group_id: _,
                      }),
                    ),
                  );
                })(_, _.nodes.meetsteamsessiongroup, _.group_id),
                _();
            },
            [_, _, _, _],
          );
        if ((null == _ ? void 0 : _.GetClanAccountID()) == (0, _._)())
          return _.createElement(
            _.Fragment,
            null,
            _ &&
              _.createElement(_, {
                hideModal: _,
                fnUpdateSession: _,
              }),
            _.createElement(
              _._,
              {
                tooltip: "#MeetSteam_add_group_ttip",
                onClick: _,
                toggled: _,
              },
              _.createElement("img", {
                src: _._,
              }),
            ),
          );
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { schema: _, emoticonStore: __webpack_require__ } = _,
          _ = _.nodes.emoticon;
        (0, _._)(__webpack_require__),
          (0, _._)(
            _.useMemo(
              () =>
                (0, _._)({
                  rules: [_(/:([a-zA-Z0-9_]+):$/, _, __webpack_require__)],
                }),
              [_, __webpack_require__],
            ),
          );
        const _ = _.useMemo(
          () => [
            {
              type: _,
              component: _,
              readProps: (_) => ({
                emoticonStore: __webpack_require__,
                emoticon: _.textContent,
              }),
            },
          ],
          [_, __webpack_require__],
        );
        return _.createElement(_._, {
          specs: _,
        });
      }
      function _(_) {
        const {
          selected: _,
          emoticonStore: __webpack_require__,
          emoticon: _,
        } = _;
        (0, _._)(__webpack_require__);
        if (__webpack_require__.BHasEmoticon(_)) {
          const _ = _
            ? {
                background: "#54a5d4",
                filter: "brightness(1.2)",
              }
            : void 0;
          return _.createElement(
            "span",
            {
              style: _,
            },
            _.createElement(_._, {
              emoticon: _,
            }),
          );
        }
        return `:${_}:`;
      }
      function _(_, _, _) {
        return new _._(_, (_, _, _, _) => {
          const _ = _[1];
          if (!__webpack_require__.BHasEmoticon(_)) return null;
          const _ = _.create(null, _.schema.text(_));
          return _._.replaceWith(_, _, _);
        });
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { editModel: _, href: __webpack_require__, setAttrs: _ } = _,
          _ = (0, _._)(__webpack_require__);
        if (_) {
          const _ = _.fnBBComponent(__webpack_require__, {
            partnerEventStore: _._,
            event: _.GetEventModel(),
          });
          return _.createElement(
            _,
            {
              toolbar: _.createElement(_, {
                removeNode: _.removeNode,
                href: __webpack_require__,
              }),
            },
            _,
          );
        }
        return _.createElement(
          "a",
          {
            href: __webpack_require__,
          },
          __webpack_require__,
        );
      }
      function _(_) {
        const { href: _, removeNode: __webpack_require__ } = _;
        return _.createElement(
          _,
          {
            onDeleteClick: __webpack_require__,
          },
          _.createElement(
            _,
            {
              onClick: () => window.open(_),
              description: (0, _._)("#ContextMenu_OpenLinkInNewWindow"),
            },
            _.createElement(_.YNO, null),
          ),
        );
      }
      const _ = (0, _._)(function (_) {
        const { editModel: _ } = _,
          _ = _.GetEventModel().loadedAllLanguages,
          _ = _.GetCurEditLanguage();
        return _
          ? _.createElement(_, {
              ..._,
              eCurrentEditLanguage: _,
            })
          : null;
      });
      const _ = _.memo(function (_) {
          const {
              editModel: _,
              refOnInsertImage: __webpack_require__,
              limitBBCode: _,
              eCurrentEditLanguage: _,
            } = _,
            [_, _] = _.useState(),
            _ = _.useMemo(() => {
              return (_ = _), new _._(_, _);
              var _;
            }, [_]),
            [_, _] = _.useState();
          _.useEffect(() => {
            _(
              (function (_, _, _) {
                let _ = _.GetDescription(_);
                return (
                  (_ =
                    null == _
                      ? void 0
                      : _.replace(
                          _._.GetUnvalidatedEmoticonReplaceRegex(),
                          "[emoticon]$1[/emoticon]",
                        )),
                  new _._(_, _, (_) => _.SetDescription(_, _))
                );
              })(_, _, _),
            );
          }, [_, _, _]);
          const _ = _.useRef(void 0);
          (0, _._)(_, {
            msAutosaveTimeout: 1e3,
          });
          const { nodes: _, marks: _ } = _.pm_schema;
          return (
            (function (_, _, _, _, _) {
              _.useEffect(() => {
                if (!_ || !_) return;
                const _ = (_, _) => {
                  let _;
                  switch (_) {
                    case _._.k_eInsertFullImage:
                      _ = _.create({
                        src: (0, _._)(_),
                      });
                      break;
                    case _._.k_eInsertThumbnail:
                      _ = _.create(
                        {
                          src: (0, _._)(_, !0),
                        },
                        null,
                        [
                          _.create({
                            href: (0, _._)(_),
                          }),
                        ],
                      );
                      break;
                    case _._.k_eInsertVideo:
                      let _;
                      4 == _.file_type
                        ? (_ = {
                            mp4: (0, _._)(_),
                          })
                        : 5 == _.file_type &&
                          (_ = {
                            webm: (0, _._)(_),
                          }),
                        _ && _ && (_ = __webpack_require__.create(_));
                      break;
                    case _._.k_eShowImageGroup:
                      break;
                    default:
                      (0, _._)(_, `Unhandled insert type ${_}`);
                  }
                  if (_) {
                    const _ = _.state._;
                    _.selection.replaceWith(_, _), _.dispatch(_);
                  }
                };
                return (
                  (_.current = _),
                  () => {
                    _.current == _ && (_.current = void 0);
                  }
                );
              }, [_, _, _, _, _]);
            })(__webpack_require__, _.image, _.video, _.link, _),
            _.createElement(
              _,
              {
                editModel: _,
                imageNode: _.image,
                videoNode: _.video,
              },
              _.createElement(
                "div",
                {
                  className: _().EventDescriptionContainer,
                },
                _.createElement(_, {
                  view: _,
                  schema: _.pm_schema,
                  refUpdateToolbar: _,
                  className: _().ToolBar,
                  clanSteamID: _.GetClanSteamID(),
                }),
                _.createElement(
                  "div",
                  {
                    className: _().EventDescriptionArea,
                  },
                  _.createElement(
                    _._,
                    {
                      pmState: _,
                      className: (0, _._)(
                        _().EventDescriptionRichField,
                        _().EventDetailsBody,
                      ),
                      refOnUpdate: _,
                      refView: _,
                      panelProps: {
                        onBlur: () => _.CommitChanges(),
                      },
                    },
                    _.createElement(_, {
                      eventSchemaConfig: _,
                      editModel: _,
                    }),
                  ),
                ),
              ),
            )
          );
        }),
        _ = _.memo(function (_) {
          const { eventSchemaConfig: _, editModel: __webpack_require__ } = _,
            { marks: _, nodes: _ } = _.pm_schema,
            _ = (function (_, _, _) {
              const _ = _.useCallback(
                (_) => {
                  const _ = `^https?://${_._.CLAN_CDN_ASSET_URL.replace(/^http[^\/]*\/\//, "")}images/(?<clanid>[0-9]+)/(?<filename>.*)(?<extension>\\.[^\\.]*)$`,
                    _ = _.match(_);
                  if (_ && _.groups.clanid == _.GetClanAccountID().toString()) {
                    const _ = _._.GetClanImageByImageHash(
                      _.GetClanSteamID(),
                      _.groups.filename,
                    );
                    let _ = _ && _(_, _, _);
                    if (_) return _;
                  }
                  return "default";
                },
                [_, _, _],
              );
              return _ ? _ : void 0;
            })(__webpack_require__, _.image, _.video),
            _ = (function (_, _) {
              const _ = _.useCallback(
                (_) =>
                  (0, _._)(_)
                    ? _.create({
                        href: _,
                      })
                    : "default",
                [_],
              );
              return _ ? _ : void 0;
            })(0, _.dynamiclink),
            _ = _.useCallback(
              (..._) => {
                let _ = "default";
                return (
                  _ && (_ = _(..._)), "default" == _ && _ && (_ = _(..._)), _
                );
              },
              [_, _],
            );
          return _.createElement(
            _.Fragment,
            null,
            _.createElement(_._, {
              linkMarkType: _.link,
              onURLPasted: _,
              schema: _.pm_schema,
            }),
            _.image &&
              _.createElement(_._, {
                nodeType: _.image,
              }),
            _.createElement(_, {
              schemaConfig: _,
              editModel: __webpack_require__,
              clanSteamID: __webpack_require__.GetClanSteamID(),
            }),
            _.createElement(_, {
              emoticonStore: _._,
              schema: _.pm_schema,
            }),
          );
        });
      function _(_) {
        const {
            schemaConfig: _,
            editModel: __webpack_require__,
            clanSteamID: _,
          } = _,
          _ = _.pm_schema,
          _ = _.useMemo(
            () =>
              (function (_) {
                return _._({
                  rules: [_._(/^>$/, _.nodes.quote)],
                });
              })(_),
            [_],
          );
        (0, _._)(_);
        const _ = _.nodes,
          _ = _.useCallback(
            (_, _) => ({
              nodeAttrs: {
                type: _,
                attrs: _.attrs,
              },
              args: _.ConvertAttrToBBCodeArgs(_, _.attrs),
              imageNodeType: _.image,
              videoNodeType: _.video,
              editModel: __webpack_require__,
              clanSteamID: _,
            }),
            [_, _.image, _.video, __webpack_require__, _],
          ),
          _ = _.useMemo(
            () => [
              _.previewyoutube && {
                type: _.previewyoutube,
                component: _,
                readProps: (_) => ({
                  videoID: _.attrs.videoID,
                  align: _.attrs.align,
                  editModel: __webpack_require__,
                }),
              },
              _.image && {
                type: _.image,
                component: _,
                readProps: (_) => _("image", _),
              },
              _.video && {
                type: _.video,
                component: _,
                readProps: (_) => _("video", _),
              },
              _.meetsteamsessiongroup && {
                type: _.meetsteamsessiongroup,
                component: _,
                readProps: (_) => ({
                  group_id: _.attrs.group_id,
                }),
              },
              _.dynamiclink && {
                type: _.dynamiclink,
                component: _,
                readProps: (_) => ({
                  editModel: __webpack_require__,
                  href: _.attrs.href,
                }),
              },
            ],
            [_, __webpack_require__, _],
          );
        return _.createElement(_._, {
          specs: _,
        });
      }
    },
  },
]);
