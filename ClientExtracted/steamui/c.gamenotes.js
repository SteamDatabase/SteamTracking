(self.webpackChunksteamui = self.webpackChunksteamui || []).push([
  [1220],
  {
    chunkid: (module) => {
      module.exports = {
        GameNotesPopup: "_3hIt9g_59KauEV2uSNK6Ct",
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { popup: _ } = _,
          [__webpack_require__, _] = _.useState();
        return (
          _.useEffect(() => {
            if (__webpack_require__)
              return _._.RegisterPopup(_, () =>
                __webpack_require__.SteamClient.Window.BringToFront(),
              );
          }, [_, __webpack_require__]),
          void 0 === _.noteid
            ? _.createElement(_, {
                popup: _,
                refPopup: _,
              })
            : _.createElement(_, {
                popup: _,
                refPopup: _,
              })
        );
      }
      function _(_) {
        const { popup: _, refPopup: __webpack_require__ } = _,
          _ = (0, _._)("#GameNotes_NoteForGame", _.display_name);
        return _.createElement(
          _._,
          {
            body_class: _.GameNotesPopup,
          },
          _.createElement(
            _._,
            {
              strName: _._,
              strTitle: _,
              onDismiss: () => _.close(),
              popupWidth: 500,
              popupHeight: 500,
              resizable: !0,
              refPopup: __webpack_require__,
              className: "TODO",
            },
            _.createElement(_._, null, _),
            _.createElement(
              _._,
              {
                mode: "single",
                closePopup: () => _.close(),
              },
              _.createElement(_, {
                noteParent: _.noteParent,
                noteid: _.noteid,
              }),
            ),
          ),
        );
      }
      function _(_) {
        const { noteParent: _, noteid: __webpack_require__ } = _,
          { data: _ } = (0, _._)(_, __webpack_require__);
        return _
          ? _.createElement(_._, {
              note: _,
            })
          : null;
      }
      function _(_) {
        const { popup: _, refPopup: __webpack_require__ } = _,
          _ = _.noteParent,
          _ = _.useMemo(() => [(0, _._)(_)], [_]);
        return _.createElement(
          _._,
          {
            strName: _._,
            strTitle: _.display_name,
            onDismiss: () => _.close(),
            popupWidth: 900,
            popupHeight: 830,
            resizable: !0,
            refPopup: __webpack_require__,
            className: "TODO",
          },
          _.createElement(
            _._,
            {
              initialEntries: _,
            },
            _.createElement(
              _._,
              {
                mode: "page",
                closePopup: () => _.close(),
              },
              _.createElement(_.default, {
                noteParent: _,
              }),
            ),
          ),
        );
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
        _ = __webpack_require__("chunkid");
      function _() {
        const { data: _, isLoading: _ } = (0, _._)(),
          _ = _.useMemo(
            () => _?.slice().sort((_, _) => _.last_modified - _.last_modified),
            [_],
          );
        return _
          ? _.createElement(_._, {
              msDelayAppear: 300,
            })
          : _.createElement(
              "div",
              null,
              _.createElement("h1", null, (0, _._)("#UserGameNotes_NotesList")),
              _.createElement(
                "ul",
                null,
                __webpack_require__.map((_) =>
                  _.createElement(_, {
                    key: _.appid || _.shortcut_name,
                    game: _,
                  }),
                ),
              ),
            );
      }
      function _(_) {
        const { game: _ } = _;
        return _.createElement(
          "li",
          null,
          _.createElement(
            _._,
            {
              _: (0, _._)(
                _.appid
                  ? {
                      appid: _.appid,
                    }
                  : {
                      shortcut: _.shortcut_name,
                    },
              ),
            },
            _.appid
              ? _.createElement(_, {
                  appid: _.appid,
                })
              : _.shortcut_name,
          ),
        );
      }
      function _(_) {
        const { appid: _ } = _,
          _ = (0, _._)(_);
        return _?.name;
      }
      function _(_) {
        return _.createElement(
          _._,
          null,
          _.createElement(
            _._,
            {
              path: _._.List(),
            },
            _.createElement(_, null),
          ),
          _.createElement(
            _._,
            {
              path: _._.AppNotes(":appid", ":noteid?"),
            },
            _.createElement(_._, null),
          ),
          _.createElement(
            _._,
            {
              path: _._.ShortcutNotes(":shortcut_name", ":noteid?"),
            },
            _.createElement(_._, null),
          ),
          _.createElement(
            _._,
            null,
            _.createElement(_._, {
              _: `${(0, _._)(_.noteParent)}`,
            }),
          ),
        );
      }
    },
  },
]);
