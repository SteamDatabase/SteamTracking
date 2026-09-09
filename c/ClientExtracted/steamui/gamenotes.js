(() => {
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = "10978408";
        function _(_) {
          const { popup: _ } = _,
            [_, _] = _.useState();
          return (
            _.useEffect(() => {
              if (_)
                return _._.RegisterPopup(_, () =>
                  _.SteamClient.Window.BringToFront(),
                );
            }, [_, _]),
            _.noteid === void 0
              ? (0, _.jsx)(_, {
                  popup: _,
                  refPopup: _,
                })
              : (0, _.jsx)(_, {
                  popup: _,
                  refPopup: _,
                })
          );
        }
        function _(_) {
          const { popup: _, refPopup: _ } = _,
            _ = (0, _._)("#GameNotes_NoteForGame", _.display_name);
          return (0, _.jsx)(_._, {
            body_class: _.GameNotesPopup,
            children: (0, _.jsxs)(_._, {
              strName: _._,
              strTitle: _,
              onDismiss: () => _.close(),
              popupWidth: 500,
              popupHeight: 500,
              resizable: !0,
              refPopup: _,
              className: "TODO",
              children: [
                (0, _.jsx)(_._, {
                  children: _,
                }),
                (0, _.jsx)(_._, {
                  mode: "single",
                  closePopup: () => _.close(),
                  children: (0, _.jsx)(_, {
                    noteParent: _.noteParent,
                    noteid: _.noteid,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { noteParent: _, noteid: _ } = _,
            { data: _ } = (0, _._)(_, _);
          return _
            ? (0, _.jsx)(_._, {
                note: _,
              })
            : null;
        }
        function _(_) {
          const { popup: _, refPopup: _ } = _,
            _ = _.noteParent,
            _ = _.useMemo(() => [(0, _._)(_)], [_]);
          return (0, _.jsx)(_._, {
            strName: _._,
            strTitle: _.display_name,
            onDismiss: () => _.close(),
            popupWidth: 900,
            popupHeight: 830,
            resizable: !0,
            refPopup: _,
            className: "TODO",
            children: (0, _.jsx)(_._, {
              initialEntries: _,
              children: (0, _.jsx)(_._, {
                mode: "page",
                closePopup: () => _.close(),
                children: (0, _.jsx)(_.default, {
                  noteParent: _,
                }),
              }),
            }),
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
          _ = "10978408";
        function _() {
          const { data: _, isLoading: _ } = (0, _._)(),
            _ = _.useMemo(
              () =>
                _?.slice().sort((_, _) => _.last_modified - _.last_modified),
              [_],
            );
          return _
            ? (0, _.jsx)(_._, {
                msDelayAppear: 300,
              })
            : (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("h1", {
                    children: (0, _._)("#UserGameNotes_NotesList"),
                  }),
                  (0, _.jsx)("ul", {
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          game: _,
                        },
                        _.appid || _.shortcut_name,
                      ),
                    ),
                  }),
                ],
              });
        }
        function _(_) {
          const { game: _ } = _;
          return (0, _.jsx)("li", {
            children: (0, _.jsx)(_._, {
              _: (0, _._)(
                _.appid
                  ? {
                      appid: _.appid,
                    }
                  : {
                      shortcut: _.shortcut_name,
                    },
              ),
              children: _.appid
                ? (0, _.jsx)(_, {
                    appid: _.appid,
                  })
                : _.shortcut_name,
            }),
          });
        }
        function _(_) {
          const { appid: _ } = _;
          return (0, _._)(_)?.name;
        }
        var _ = "10978408";
        function _(_) {
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsx)(_._, {
                path: _._.List(),
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_._, {
                path: _._.AppNotes(":appid", ":noteid?"),
                children: (0, _.jsx)(_._, {}),
              }),
              (0, _.jsx)(_._, {
                path: _._.ShortcutNotes(":shortcut_name", ":noteid?"),
                children: (0, _.jsx)(_._, {}),
              }),
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_._, {
                  _: `${(0, _._)(_.noteParent)}`,
                }),
              }),
            ],
          });
        }
      },
    },
  ]);
})();
