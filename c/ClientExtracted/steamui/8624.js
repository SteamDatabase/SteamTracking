(() => {
  (self.webpackChunksteamui = self.webpackChunksteamui || []).push([
    [8624],
    {
      chunkid: (module) => {
        module.exports = {
          PinnedSection: "_19Vm5Rp9my8iJURrNMCKUo",
          OverlayPinned: "_2VeFXNqMTBkLnytILUwxhS",
          PinnedAchievementsList: "_2GPPm0eEkGp3FduoQQNudM",
          PinnedSlot: "_1MhihHiVesUDdXIXdMLM1H",
          PinnedRow: "PvkY7hiM54lbxeMpdHkhr",
          IsDragging: "_3uWAjibsDAHb6c7aCgjRWS",
          OutsideDropArea: "_2FEGacABHSl1K-7wogXXf3",
          RowContent: "_3eaokkqWXK9f7ixEuHEYeI",
          DragHandle: "_1XjJ-Blbt_FHc8LaQAkVNm",
          OverlayHidden: "_1q5kVKMMVxawjhdK2UkKei",
          CloneRoot: "_241cCP7iNXYFnVbuS4HqJ0",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            PinnedAchievementsList: () => _,
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 8;
        function _(_) {
          const { appid: _ } = (0, _._)(),
            { isPinned: _ } = (0, _._)(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(_),
            _ = (0, _.useMemo)(() => {
              const _ = new Map();
              for (const _ of _?.groups ?? [])
                for (const _ of _.achievements) _.set(_.api_name, _);
              return _;
            }, [_]),
            [_, _] = (0, _.useState)();
          _ && _.basis !== _?.pinnedAchievements && _(void 0);
          const _ = _?.names ?? _?.pinnedAchievements,
            _ = _?.setPinnedAchievements,
            _ = _?.pinnedAchievements,
            _ = (0, _.useMemo)(
              () =>
                _ &&
                _ &&
                ((_) => {
                  _({
                    basis: _,
                    names: _,
                  }),
                    _(_);
                }),
              [_, _],
            ),
            _ = (0, _.useMemo)(
              () => (_ ?? []).map((_) => _.get(_)).filter((_) => _ !== void 0),
              [_, _],
            );
          return !_ || !_
            ? null
            : (0, _.jsxs)(_._, {
                direction: "column",
                gap: "2",
                padding: {
                  initial: "2",
                  _: "4",
                },
                className: (0, _._)(_.PinnedSection, _ && _.OverlayPinned),
                navProps: {
                  focusableIfEmpty: !0,
                },
                children: [
                  (0, _.jsx)(_._, {
                    contrast: "description",
                    weight: "heavy",
                    style: {
                      lineHeight: "20px",
                    },
                    className: _ ? _.OverlayHidden : void 0,
                    children: _._.Localize(
                      "#Achievements_Table_PinnedTitle",
                      (0, _._)(_.length),
                    ),
                  }),
                  _.length > 0
                    ? (0, _.jsx)(_, {
                        ..._,
                        pinned: _,
                        pinnedNames: _,
                        setPinnedNames: _,
                      })
                    : (0, _.jsx)(_._, {
                        contrast: "description",
                        children: _._.Localize("#Achievements_Pin_Empty"),
                      }),
                ],
              });
        }
        function _(_) {
          let _ = null;
          for (
            let _ = _.closest("[data-accent-color]");
            _;
            _ = _.parentElement?.closest("[data-accent-color]") ?? null
          )
            _ = _;
          return {
            className: (0, _._)(_.CloneRoot, "noOpinionatedGlobalStyles"),
            "data-accent-color": _?.getAttribute("data-accent-color") ?? void 0,
            "data-dull-color": _?.getAttribute("data-dull-color") ?? void 0,
            "data-body-text-color":
              _?.getAttribute("data-body-text-color") ?? void 0,
            style: {
              "--icon-size": window
                .getComputedStyle(_)
                .getPropertyValue("--icon-size"),
            },
          };
        }
        function _(_) {
          const {
              provided: _,
              snapshot: _,
              index: _,
              achievement: _,
              cloneRootProps: _,
              compareTo: _,
              compareProgress: _,
              globalPercentages: _,
              moveTo: _,
            } = _,
            { appid: _, targetsteamid: _ } = (0, _._)(),
            { data: _ } = (0, _._)(_, _ ?? ""),
            _ = _?.achievements[_.internal_key],
            _ = (0, _._)(),
            { isPinned: _ } = (0, _._)(),
            _ = (_) => {
              (0, _._)(
                (0, _.jsxs)(_._, {
                  children: [
                    (0, _.jsx)(_._, {
                      onSelected: () => _(_.api_name, "top"),
                      children: _._.Localize("#Achievements_Pin_MoveToTop"),
                    }),
                    (0, _.jsx)(_._, {
                      onSelected: () => _(_.api_name, "bottom"),
                      children: _._.Localize("#Achievements_Pin_MoveToBottom"),
                    }),
                  ],
                }),
                _,
              );
            },
            _ = _.isDropAnimating,
            _ = _.draggableProps.onTransitionEnd;
          (0, _.useLayoutEffect)(() => {
            _ &&
              _?.({
                propertyName: "transform",
              });
          }, [_, _]);
          const _ = {
              ...(0, _._)(_.draggableProps.style ?? {}),
              marginBottom: _,
            },
            _ = (0, _.jsxs)("div", {
              className: (0, _._)(
                _.PinnedRow,
                _.isDragging && _.IsDragging,
                _.isDragging && !_.draggingOver && _.OutsideDropArea,
              ),
              ref: _.innerRef,
              ..._.draggableProps,
              ..._.dragHandleProps,
              style: _,
              onContextMenu: _,
              children: [
                (0, _.jsx)("div", {
                  className: _.RowContent,
                  children: (0, _.jsx)(_._, {
                    appid: _,
                    achievement: _,
                    progress: _,
                    unlockedForSelf: _?.unlocked ?? !1,
                    globalUnlockPercentage:
                      _?.percentages[_.internal_key] ?? void 0,
                    showProgress: !0,
                    compareTo: _,
                    compareProgress: _,
                    tableindex: _,
                    alwaysPinnable: !0,
                    hideGlobalRate: !0,
                  }),
                }),
                !_ &&
                  (0, _.jsx)(_.Rows, {
                    className: (0, _._)(_.DragHandle, _ && _.OverlayHidden),
                  }),
              ],
            });
          return _
            ? (0, _.jsx)("div", {
                ..._,
                children: _,
              })
            : _;
        }
        function _(_) {
          const {
              pinned: _,
              pinnedNames: _,
              setPinnedNames: _,
              compareTo: _,
            } = _,
            { isPanel: _, appid: _ } = (0, _._)(),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(_),
            _ = (0, _._)(_, _ ?? []),
            _ = (0, _._)(),
            _ = (0, _.useRef)(null),
            [_, _] = (0, _.useState)(56);
          (0, _.useEffect)(() => {
            if (!_.current) return;
            const _ = parseInt(
              window
                .getComputedStyle(_.current)
                .getPropertyValue("--icon-size"),
            );
            isNaN(_) || _(_ + (_ ? _._ : _._));
          }, [_]);
          const _ = (0, _.useRef)(0),
            _ = (0, _.useCallback)((_) => {
              const _ = _.current?.querySelector(
                `[data-rbd-draggable-id="${CSS.escape(_.draggableId)}"]`,
              );
              _.current = _?.getBoundingClientRect().height ?? 0;
            }, []),
            _ = (0, _.useCallback)(
              (_) => {
                !_.destination ||
                  _.destination.index == _.source.index ||
                  _((0, _._)(_, _.source.index, _.destination.index));
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_, _) => {
                const _ = _.filter((_) => _ !== _);
                _(_ == "top" ? [_, ..._] : [..._, _]);
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_, _, _) =>
                (0, _.jsx)(_, {
                  provided: _,
                  snapshot: _,
                  index: _.source.index,
                  achievement: _[_.source.index],
                  cloneRootProps: _.current ? _(_.current) : void 0,
                  compareTo: _,
                  compareProgress: _,
                  globalPercentages: _,
                  moveTo: _,
                }),
              [_, _, _, _, _],
            ),
            _ = (0, _.useCallback)(
              () => _?.ownerWindow?.document.body ?? window.document.body,
              [_],
            ),
            _ = (0, _.useCallback)(
              (_, _) => {
                const _ = _[_];
                return (0, _.jsxs)("div", {
                  className: _.PinnedSlot,
                  children: [
                    (0, _.jsx)(
                      _._,
                      {
                        draggableId: _.api_name,
                        index: _,
                        children: (_, _) =>
                          (0, _.jsx)(_, {
                            provided: _,
                            snapshot: _,
                            index: _,
                            achievement: _,
                            compareTo: _,
                            compareProgress: _,
                            globalPercentages: _,
                            moveTo: _,
                          }),
                      },
                      _.api_name,
                    ),
                    _ == _.api_name &&
                      (0, _.jsx)("div", {
                        style: {
                          height: _.current + _,
                        },
                      }),
                  ],
                });
              },
              [_, _, _, _, _],
            );
          return (0, _.jsx)(_._, {
            onBeforeCapture: _,
            onDragEnd: _,
            stylesInsertionPoint: _?.ownerWindow?.document?.head,
            children: (0, _.jsx)(_._, {
              droppableId: "pinned-achievements",
              mode: "virtual",
              direction: "vertical",
              isCombineEnabled: !1,
              renderClone: _,
              getContainerForClone: _,
              children: (_, _) =>
                (0, _.jsx)("div", {
                  className: _.PinnedAchievementsList,
                  style: {
                    marginBottom: -_,
                  },
                  ref: (_) => {
                    _.innerRef(_), (_.current = _);
                  },
                  ..._.droppableProps,
                  children: (0, _.jsx)(_._, {
                    navKey: "PinnedAchievementsList",
                    hintVirtualizeType: _ ? "element" : "window",
                    bNativeScrollIntoView: !0,
                    bBrowserScrollAnchoring: !0,
                    nRows: _.length,
                    nItemHeight: _ + _,
                    nRowGap: 0,
                    overscan: 5,
                    bDynamic: !0,
                    renderItem: (_) => _(_, _.draggingFromThisWith ?? null),
                  }),
                }),
            }),
          });
        }
      },
    },
  ]);
})();
