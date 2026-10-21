(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [12935],
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
        const _ = (0, _.createContext)(null);
        function _(_) {
          const { children: _, ..._ } = _,
            _ = _(_);
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = _.Children.only(_),
            _ = (0, _.useContext)(_);
          return _
            ? _
              ? (0, _.cloneElement)(_, {
                  ..._.getReferenceProps(_.props),
                  ref: (0, _._)(_.props.ref, _.floating.refs.setReference),
                })
              : (console.error(
                  "<PopoverAnchor> must be a child of <PopoverRoot>.",
                ),
                null)
            : null;
        }
        function _(_) {
          const { children: _, className: _, ref: _, label: _ } = _,
            _ = (0, _.useContext)(_),
            _ = (0, _._)([_, _?.floating.refs.setFloating]);
          if (!_)
            return (
              console.error(
                "<Popover.Positioner> must be a child of <Popover.Root>.",
              ),
              null
            );
          if (!_.open) return null;
          let _ = _.Children.only(_),
            _ = _.Fragment;
          return (
            _.type == _.FocusManager &&
              ((_ = _.Children.only(_.props.children)), (_ = _)),
            (0, _.jsx)(_, {
              children: (0, _.jsx)(_._, {
                presentation: _.presentation,
                sizing: _.sizing,
                floatingRef: _,
                floatingProps: _.getFloatingProps(),
                floatingStyles: _.floating.floatingStyles,
                referenceElement: _.floating.elements.domReference,
                className: _()((0, _._)(), _),
                label: _,
                children: _,
              }),
            })
          );
        }
        function _(_) {
          return (0, _._)()
            ? (0, _.jsx)(_, {
                ..._,
              })
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _.useContext)(_);
          (0, _._)(
            !!_,
            "<Popover.Positioner> must be a child of <Popover.Root>.",
          );
          const _ = () => _.floating.context.onOpenChange(!1),
            _ = _.useRef(void 0);
          return (
            (0, _._)(_, !0, !0),
            (0, _.jsx)(_._, {
              navID: "Popover",
              onCancelButton: _,
              modal: !0,
              navTreeRef: _,
              children: (0, _.jsx)("div", {
                style: {
                  display: "contents",
                },
                children: (0, _.jsx)(_._, {
                  children: _,
                }),
              }),
            })
          );
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _.useContext)(_);
          return (
            (0, _._)(
              !!_,
              "<Popover.Positioner> must be a child of <Popover.Root>.",
            ),
            (0, _.jsx)(_._, {
              context: _.floating.context,
              initialFocus: -1,
              returnFocus: !1,
              children: _,
            })
          );
        }
        function _(_) {
          const {
            open: _,
            interactions: _ = {},
            width: _,
            maxHeight: _,
            gutter: _,
            scroll: _,
          } = _;
          let _ = _;
          const _ = (0, _._)(_.presentation),
            _ = _(_, _, _),
            _ = {
              enabled: !!_.click,
            },
            _ = typeof _.click == "function" ? _.click(_) : _,
            _ = (0, _._)(_.context, _),
            _ = {
              enabled: !!_.focus,
            },
            _ = typeof _.focus == "function" ? _.focus(_) : _,
            _ = (0, _._)(_.context, _),
            _ = {
              handleClose: (0, _._)(),
            },
            _ = typeof _.hover == "function" ? _.hover(_) : _,
            _ = (0, _._)(_.context, {
              enabled: !!_.hover,
              ..._,
            }),
            _ = (0, _._)(_.context),
            { getFloatingProps: _, getReferenceProps: _ } = (0, _._)([
              _,
              _,
              _,
              _,
            ]);
          return {
            floating: _,
            getFloatingProps: _,
            getReferenceProps: _,
            open: _,
            presentation: _,
            sizing: {
              width: _,
              maxHeight: _,
              gutter: _,
              scroll: _,
            },
          };
        }
        function _(_, _, _) {
          const { onOpenChange: _, placement: _ } = _,
            _ = _ === "anchor";
          return (0, _._)({
            open: _,
            onOpenChange: _,
            middleware: _ ? _(_) : [],
            whileElementsMounted: _ ? _._ : void 0,
            placement: _ && typeof _ == "object" ? _.initial : _,
            strategy: "fixed",
            platform: {
              ..._._,
              getOffsetParent: (_) => _?.ownerDocument?.defaultView ?? window,
            },
          });
        }
        function _(_) {
          const { gutter: _ = 0, placement: _ } = _,
            _ = [],
            _ = _ && typeof _ == "object";
          return (
            _ && _.offset
              ? _.push((0, _._)(_.offset))
              : (!_ || _.offset === void 0) && _.push((0, _._)(2)),
            _ && _.flip
              ? _.push((0, _._)(_.flip))
              : (!_ || _.flip === void 0) && _.push((0, _._)()),
            _ && _.shift
              ? _.push((0, _._)(_.shift))
              : (!_ || _.shift === void 0) && _.push((0, _._)()),
            _.push(
              (0, _._)({
                apply: (_) => {
                  const { rects: _, elements: _, availableHeight: _ } = _,
                    _ = {
                      boxSizing: "border-box",
                      zIndex: "1",
                      "-webkit-app-region": "no-drag",
                    };
                  switch ((_.scroll && (_.overflowY = "auto"), _.width)) {
                    case "target": {
                      _.width = `${_.reference.width}px`;
                      break;
                    }
                    case "content": {
                      _.width = `${_.floating.width}px`;
                      break;
                    }
                    case "dropdown": {
                      let _ = _.reference.width;
                      _.floating.width > _ && _ < 200 && (_ = _.floating.width),
                        (_.width = `${_}px`);
                    }
                  }
                  typeof _.width == "function" &&
                    (_.width = _.width({
                      unContentWidth: _.floating.width,
                      unTargetWidth: _.reference.width,
                    }));
                  const _ =
                    typeof _ == "number" ? `${_}px` : `var(--spacing-${_})`;
                  typeof _.maxHeight == "function"
                    ? (_.maxHeight = _.maxHeight({
                        unAvailableHeight: _,
                        gutter: _,
                      }))
                    : typeof _.maxHeight == "number"
                      ? (_.maxHeight = `min( calc( ${_}px - ${_} ), ${_.maxHeight}px )`)
                      : typeof _ == "number"
                        ? (_.maxHeight = `${_ - _}px`)
                        : (_.maxHeight = `calc( ${_}px - var(--spacing-${_}) )`),
                    Object.assign(_.floating.style, _),
                    _.floating.style.setProperty(
                      "--popover-max-height",
                      _.maxHeight,
                    );
                },
              }),
            ),
            _
          );
        }
        const _ = {
          Root: _,
          Anchor: _,
          Positioner: _,
          FocusManager: _,
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = {
          _: "rotate( 180, 10, 10 )",
          left: "rotate( 90, 10, 10 )",
          right: "rotate( 270, 10, 10 )",
        };
        function _(_) {
          const { direction: _ = "down" } = _,
            _ = _[_];
          return (0, _.jsx)(_._, {
            ..._,
            viewBox: 20,
            children: (0, _.jsx)("path", {
              transform: _,
              _: "M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z",
              fill: "currentColor",
            }),
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
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = ((_) => (
            (_.k_ECutArrowStyle = "single"),
            (_.k_EDoubleArrowStyle = "double"),
            (_.k_EThickChevron = "chevron"),
            (_.k_EFilledArrow = "filled"),
            (_.k_EPointyArrow = "pointy"),
            _
          ))(_ || {}),
          _ = ((_) => (
            (_.k_EPillCrumb = "pill"),
            (_.k_ECircularCrumb = "circle"),
            (_.k_ESquareCrumb = "square"),
            _
          ))(_ || {});
        function _(_) {
          const { arrowFill: _, arrowStyle: _, direction: _ } = _;
          switch (_) {
            default:
            case _.k_ECutArrowStyle: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.uMb, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EDoubleArrowStyle: {
              const _ = _ == "right" ? 180 : 0;
              return (0, _.jsx)(_.F2T, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EThickChevron: {
              const _ = _ == "right" ? 0 : 180;
              return (0, _.jsx)(_.l8x, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EFilledArrow: {
              const _ = _ == "right" ? 90 : 270;
              return (0, _.jsx)(_.V5W, {
                fill: _ || "white",
                role: "presentation",
                angle: _,
              });
            }
            case _.k_EPointyArrow:
              return (0, _.jsx)(_.L0X, {
                fill: _ || "white",
                role: "presentation",
                direction: _ || "left",
              });
          }
        }
        function _(_) {
          const {
              bIsActive: _,
              breadcrumbActiveColor: _,
              breadcrumbColor: _,
              breadcrumbStyle: _,
            } = _,
            _ = _ ? _ || "#FFFFFF" : _ || "#606974";
          switch (_) {
            default:
            case _.k_EPillCrumb:
              return (0, _.jsx)(_.IGf, {
                fill: _,
                role: "presentation",
              });
            case _.k_ECircularCrumb:
              return (0, _.jsx)(_.az8, {
                fill: _,
                role: "presentation",
              });
            case _.k_ESquareCrumb:
              return (0, _.jsx)(_.koA, {
                fill: _,
                role: "presentation",
              });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        let _ = class extends _.Component {
          static get hoverClass() {
            return _().hoverParent;
          }
          render() {
            const {
              persona: _,
              animating: _,
              className: _,
              size: _,
              dim: _,
              ..._
            } = this.props;
            let _ = "";
            return (
              _ == "medium"
                ? (_ = _().Medium)
                : _ == "large" && (_ = _().Large),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().SnoozeContainer,
                  _.online_state,
                  _,
                  _ && _().animating,
                  _,
                  _ && _().Dim,
                ),
                ..._,
                children: [
                  (0, _.jsx)("div", {
                    "data-text": "Z",
                    className: (0, _._)(_().SnoozeZ, _()._),
                    children: "Z",
                  }),
                  (0, _.jsx)("div", {
                    "data-text": "Z",
                    className: (0, _._)(_().SnoozeZ, _()._),
                    children: "Z",
                  }),
                  (0, _.jsx)("div", {
                    "data-text": "Z",
                    className: (0, _._)(_().SnoozeZ, _()._),
                    children: "Z",
                  }),
                ],
              })
            );
          }
        };
        _ = _([_._], _);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const { persona: _, className: _, ..._ } = _;
          if (!_ || !_.is_online) return null;
          const _ = _.HasStateFlag(_._),
            _ = _.HasStateFlag(_._),
            _ = _.m_eGamingDeviceType == _.LS$,
            _ = _.m_eGamingDeviceType == _.ppM,
            _ = !_ && !_ && !_ && _.HasStateFlag(_._);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().MobilePhoneIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_Mobile"),
                  ..._,
                  children: (0, _.jsx)(_._, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().VRIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_VR"),
                  ..._,
                  children: (0, _.jsx)(_.MUh, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().BigPictureIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_BigPicture"),
                  ..._,
                  children: (0, _.jsx)(_.bPr, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().SteamDeckIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_SteamDeck"),
                  ..._,
                  children: (0, _.jsx)(_.DQe, {}),
                }),
              _ &&
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _,
                    _().PersonaStatusIcon,
                    _().SteamDeckIcon,
                    (0, _._)(_),
                  ),
                  title: (0, _._)("#Platform_Hint_LegionGoS"),
                  ..._,
                  children: (0, _.jsx)(_.DQe, {}),
                }),
            ],
          });
        });
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
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("span", {
                className: _().partyBeaconJoin,
                children: (0, _._)("#User_WantsToPlay"),
              }),
              "\xA0\u2013\xA0",
              _.persona.GetCurrentGameName(),
            ],
          });
        }
        let _ = class extends _.Component {
          render() {
            const {
              className: _,
              onContextMenu: _,
              persona: _,
              eFriendRelationship: _,
              bIsSelf: _,
              bParenthesizeNicknames: _,
              strNickname: _,
              bCompactView: _,
              bHideGameName: _,
              bHideEnhancedRichPresenceLabel: _,
              bHideSnooze: _,
              bHideStatus: _,
              renderStatus: _,
              renderRichPresence: _,
              bHidePersona: _,
              bDNDSet: _,
              bHasPartyBeacon: _,
              bHasGamePrivacy: _,
              bNoMask: _,
              bEllipsisName: _,
              bDropPadding: _,
              ..._
            } = this.props;
            let _ = null,
              _ = null,
              _ = null,
              _ = [
                _,
                _().personaNameAndStatusLabel,
                (0, _._)(_),
                _ ? _().compactView : void 0,
                _ ? _().NoMask : void 0,
              ];
            _ || _.has_public_party_beacon
              ? (_ = (0, _.jsx)(_, {
                  persona: _,
                }))
              : (0, _.aPS)(_)
                ? ((_ = (0, _._)("#PersonaStateBlocked")), _.push(_().blocked))
                : _.is_ingame
                  ? (!_.is_in_nonsteam_game || _ || (0, _.S$u)(_)
                      ? (_ = _.GetCurrentGameName())
                      : (_ = (0, _._)("#PersonaStateInNonSteamGame")),
                    !_ && !_
                      ? (_ = _.GetCurrentGameRichPresence())
                      : _ &&
                        _.is_awayOrSnooze &&
                        (_ = (0, _._)("#PersonaStateAway")))
                  : _.m_broadcastAccountId &&
                    (_ = (0, _._)("#PersonaStateWatchingBroadcast")),
              _ || (_ = _.GetLocalizedOnlineStatus()),
              _ && (_ = _());
            let _ = !_ && !_;
            _ === !1 && (_ = !0),
              _.is_awayOrSnooze &&
                _ &&
                (_ = (0, _.jsx)(_, {
                  persona: _,
                }));
            let _ = (0, _.jsx)(_.Fragment, {});
            _
              ? (_ = (0, _.jsx)("div", {
                  className: "ContextMenuButton",
                  onClick: _,
                  children: (0, _.jsx)(_.GB9, {}),
                }))
              : _.push(_().noContextMenu),
              _ && _.push(_().hidePersona),
              _ && (_ = _()),
              (_ || !_) && _.push(_().twoLine);
            const _ = !_.is_ingame && !_,
              _ = !_ && _,
              _ = _ && (!_ || !_),
              _ = (0, _.IDH)(_._.LAUNCHER_TYPE);
            let _ = _ && !_,
              _ = _ ? _ : _.m_strPlayerName,
              _ = !_ && (_ || _) && _;
            return (0, _.jsxs)("div", {
              ..._,
              className: (0, _._)(..._),
              onContextMenu: _,
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _().statusAndName,
                    _ ? _().threeLines : void 0,
                  ),
                  children: [
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().playerName,
                        _ ? _().EllipsisName : void 0,
                      ),
                      children: [
                        _ || "\xA0",
                        _ &&
                          _ &&
                          (0, _.jsxs)("span", {
                            className: _().playerNickname,
                            children: ["(", _, ")"],
                          }),
                      ],
                    }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().DNDContainer,
                        title: (0, _._)("#User_ToggleDoNotDisturb"),
                        children: (0, _.jsx)(_.Aj0, {}),
                      }),
                    _ &&
                      (0, _.jsx)("span", {
                        className: _().playerNicknameBracket,
                        title: (0, _._)("#isNickname"),
                        children: " *",
                      }),
                    (0, _.jsx)(_, {
                      persona: _,
                    }),
                    _,
                    (_.m_bPlayerNamePending || _.m_bAvatarPending) &&
                      _ &&
                      (0, _.jsx)("div", {
                        className: _().PendingPersona,
                        title: (0, _._)("#SteamChina_PendingPersonaName"),
                        children: (0, _.jsx)(_.zD7, {}),
                      }),
                    _,
                  ],
                }),
                !_ &&
                  (0, _.jsxs)("div", {
                    className: _().richPresenceContainer,
                    children: [
                      (_ || _) &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().gameName,
                            _ ? _().threeLines : void 0,
                            _().richPresenceLabel,
                            _ && _().dropPadding,
                            "no-drag",
                          ),
                          children: [
                            _ &&
                              (0, _.jsx)("div", {
                                className: _().gameIsPrivateIcon,
                                title: (0, _._)("#User_GameInfoHidden"),
                                children: (0, _.jsx)(_.jZl, {}),
                              }),
                            _,
                          ],
                        }),
                      _ &&
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().richPresenceLabel,
                            _ && _().dropPadding,
                            "no-drag",
                          ),
                          children: [_, " "],
                        }),
                    ],
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const {
            persona: _,
            bParenthesizeNicknames: _,
            strNickname: _,
            bIgnorePersonaStatus: _,
            bDisableColoring: _,
            className: _,
            ..._
          } = _;
          let _ = _ && !_ ? _ : _.m_strPlayerName;
          return (0, _.jsx)("span", {
            ..._,
            className: (0, _._)(_, _ && _().DisableColoring, !_ && (0, _._)(_)),
            children: (0, _.jsxs)("span", {
              className: _().playerName,
              children: [
                _ || "\xA0",
                _ &&
                  _ &&
                  (0, _.jsxs)("span", {
                    className: _().playerNickname,
                    children: ["(", _, ")"],
                  }),
              ],
            }),
          });
        });
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_._, {
            onEscKeypress: _.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _.redirectURL,
              guestOption: _.guestOption,
            }),
          });
        }
        function _(_) {
          const { redirectURL: _ = window.location.href } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _,
            }),
          });
        }
        function _() {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_, _) {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: _,
              guestOption: _,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_) {
          const { redirectURL: _, guestOption: _ } = _,
            [_] = (0, _.useState)(
              new _._(
                new _._(_._.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _ == _._.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
            };
          return (0, _.jsx)("div", {
            children: _
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  transport: _,
                  platform: _._._,
                  onComplete: _,
                  redirectUrl: _,
                  theme: "modal",
                  children:
                    _ &&
                    (0, _.jsx)(_._, {
                      redirectURL: _,
                    }),
                }),
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
          _ = __webpack_require__("chunkid");
        function _() {
          return useInGamepadUI()
            ? jsx(GamepadSVG.Settings, {})
            : jsx(SVG.Settings, {});
        }
        function _(_) {
          const _ = _.filled ?? !0;
          return useInGamepadUI()
            ? _
              ? jsx(GamepadSVG.Star, {})
              : jsx(GamepadSVG.EmptyStar, {})
            : jsx(SVG.Star, {});
        }
        function _(_) {
          const _ = _.filled ?? !0;
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
          return (0, _._)()
            ? (0, _.jsx)(_.MGO, {
                ..._,
              })
            : (0, _.jsx)(_.Jlk, {
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
        __webpack_require__._(module_exports, {
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
          _ = __webpack_require__("chunkid");
        function _() {
          return (0, _._)("cart_config", "application_config");
        }
        function _() {
          return ["shopping_cart", "sale_drop_progress"];
        }
        function _() {
          return (0, _._)({
            queryKey: _(),
            queryFn: async () => {
              const _ = await (
                await fetch(`${_._.STORE_BASE_URL}cart/ajaxsaledropprogress`)
              ).json();
              return (
                _.eresult !== _._ &&
                  console.error("Failed to load sale drop progress"),
                _
              );
            },
            enabled: _._.logged_in,
          });
        }
        function _(_) {
          return (0, _._)(_) || (0, _._)(_);
        }
        var _ = ((_) => (
          (_[(_.k_ECanRequest = 0)] = "k_ECanRequest"),
          (_[(_.k_EIsNotChild = 1)] = "k_EIsNotChild"),
          (_[(_.k_EInvalidCartType = 2)] = "k_EInvalidCartType"),
          (_[(_.k_ENonGiftableItemPresent = 3)] = "k_ENonGiftableItemPresent"),
          _
        ))(_ || {});
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _.isSuccess && _.data.role() == _._._,
            _ = _.data?.cart_items.some((_) => !_.can_purchase_as_gift);
          let _ = 0;
          return _ ? (_(_) ? _ && (_ = 3) : (_ = 2)) : (_ = 1), [_ === 0, _];
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)();
          return _.isSuccess && _.data.role() == _._._ && (0, _._)(_);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            BaseCartPage: () => _,
            default: () => _,
            useInitCartLocalization: () => _,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)("div", {
            className: (0, _._)(_.CartCard, _.className),
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { cart: _ } = _,
            _ = _(_);
          if (
            !_ ||
            !_._.logged_in ||
            !_ ||
            (0, _._)(_._.EREALM) ||
            !_.strSaleName
          )
            return null;
          const {
              cEarned: _,
              pctProgress: _,
              rgPrepurchaseApps: _,
              strFormattedSpendPerDrop: _,
              strSaleName: _,
            } = _,
            _ = _ > 0,
            _ = (0, _.jsx)("div", {
              className: _.Explanation,
              children: (0, _._)("#Cart_SaleCardDrops_Explanation", _),
            });
          return (0, _.jsxs)(_, {
            className: _.TradingCardContainer,
            children: [
              _ &&
                (0, _.jsx)("div", {
                  className: _.EarnedMessage,
                  children: (0, _._)("#Cart_SaleCardDrops_EarnedMessage", _, _),
                }),
              !_ && _,
              (0, _.jsxs)("div", {
                className: _.ProgressSection,
                children: [
                  (0, _.jsx)("div", {
                    children: (0, _._)("#Cart_SaleCardDrops_ProgressLabel"),
                  }),
                  (0, _.jsx)(_, {
                    value: _,
                  }),
                  (0, _.jsxs)("div", {
                    className: _.Right,
                    children: [
                      "(",
                      (0, _._)("#Cart_SaleCardDrops_CardCost", _),
                      ")",
                    ],
                  }),
                ],
              }),
              _ && _,
              _.length > 0 &&
                (0, _.jsxs)("div", {
                  className: _.IneligbleList,
                  children: [
                    (0, _.jsx)("p", {
                      children: (0, _._)(
                        "#Cart_SaleCardDrops_PrepurchaseIneligible",
                        _,
                      ),
                    }),
                    (0, _.jsx)("ul", {
                      children: _.map((_) =>
                        (0, _.jsx)(
                          "li",
                          {
                            children: _,
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)();
          if (!_ || !_.isSuccess || !_.data?.sale_name) return null;
          const _ = new Set();
          let _ = 0;
          for (const _ of _.cart_items)
            _.subtotal && (_ += parseInt(_.subtotal.amount_in_cents));
          const {
              sale_name: _,
              spend_earned_for_next_drop: _,
              spend_needed_for_next_drop: _,
              formatted_spend_per_drop: _,
            } = _.data,
            _ = _ + _,
            _ = Math.floor(_ / _),
            _ = Math.floor((100 * (_ % _)) / _);
          return {
            cEarned: _,
            pctProgress: _,
            strFormattedSpendPerDrop: _,
            rgPrepurchaseApps: Array.from(_),
            strSaleName: _,
          };
        }
        function _(_) {
          const { value: _ } = _,
            _ = Math.min(100, Math.max(0, _));
          return (0, _.jsx)("div", {
            className: _.ProgressRail,
            children: (0, _.jsx)("div", {
              className: _.Progress,
              style: {
                width: `${_}%`,
              },
            }),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _ = !0) {
          return (0, _._)(
            {
              bIncludeDailyDeals: !0,
              nIncludeTopNSpecials: 8,
              spotlightLocation: {
                location: "cart",
              },
              rgAdditionalRecommendationIDs: _,
            },
            {
              include_assets: !0,
              include_release: !0,
            },
            _,
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)();
          return (
            _.useEffect(
              () => (
                window.addEventListener("resize", _),
                () => window.removeEventListener("resize", _)
              ),
              [_],
            ),
            window.innerWidth < parseInt(_.strMaxCartPartResponsiveWidth)
          );
        }
        function _(_) {
          const { bMinimalDisplay: _ } = _,
            _ = _();
          return (_ && _) || (!_ && !_)
            ? null
            : (0, _.jsx)(_, {
                ..._,
              });
        }
        function _(_) {
          const { cart: _, bMinimalDisplay: _ } = _,
            _ = _(_),
            _ = (0, _.useMemo)(() => {
              const _ = new Set(
                [
                  ...(_?.developers || []),
                  ...(_?.publishers || []),
                  ...(_?.franchises || []),
                ]
                  .filter((_) => !!_ && !!_.creator_clan_account_id)
                  .map((_) => _.creator_clan_account_id),
              );
              return Array.from(_);
            }, [_]);
          return _.length == 0
            ? null
            : (0, _.jsxs)("div", {
                className: _().CartCreatorCtn,
                children: [
                  (0, _.jsx)("div", {
                    className: _().Title,
                    children: (0, _._)("#Cart_FollowCreator_title"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().Description,
                    children: (0, _._)("#Cart_FollowCreator_desc"),
                  }),
                  (0, _.jsx)("br", {}),
                  _.map((_) =>
                    (0, _.jsx)(
                      _._,
                      {
                        creatorID: {
                          name: "",
                          clan_account_id: _,
                          type: "developer",
                        },
                        bHideCreatorType: !0,
                        bSmallFormat: !0,
                        bMinimalDisplay: _,
                        bCompact: !0,
                      },
                      "creat" + _,
                    ),
                  ),
                ],
              });
        }
        function _(_) {
          const [_, _] = (0, _.useState)(null),
            _ = (0, _.useMemo)(
              () =>
                _?.line_items?.length == 1 && _.line_items[0].packageid
                  ? {
                      packageid: _.line_items[0].packageid,
                    }
                  : void 0,
              [_],
            ),
            { data: _ } = (0, _._)(_);
          (0, _.useEffect)(() => {
            const _ = _?.type;
            _ == _._._
              ? _(_._)
              : (_ == _._._ || _ == _._._) && _(_.related_items?.parent_appid);
          }, [_?._, _?.related_items?.parent_appid, _?.type]);
          const _ = (0, _.useMemo)(
              () =>
                _
                  ? {
                      appid: _,
                    }
                  : void 0,
              [_],
            ),
            { data: _ } = (0, _._)(_);
          return _;
        }
        function _(_, _ = []) {
          return _.filter(({ item_id: _, item: _ }) =>
            _
              ? _[_.appid]
                ? !1
                : _?.appid
                  ? !_[_?.appid]
                  : _?.included_appids
                    ? _.included_appids.every((_) => !_[_])
                    : !0
              : !0,
          );
        }
        function _(_) {
          const { cart: _, validatedCart: _ } = _,
            [_, _] = _.useState(void 0),
            _ = (_?.cart_items || []).reduce(
              (_, _) => _.concat(_.store_item.included_appids),
              [],
            );
          _.useEffect(() => {
            _ === void 0 &&
              _ &&
              _(
                _?.line_items.map((_) =>
                  _.packageid
                    ? {
                        packageid: _.packageid,
                      }
                    : {
                        bundleid: _.bundleid,
                      },
                ),
              );
          }, [_, _]);
          const _ = _(_, _ !== void 0);
          if (_.isError) return null;
          const _ = _.reduce((_, _) => ((_[_] = !0), _), {}),
            _ = _(_, _.data?.purchase_recommendations),
            _ = _(_, _.data?.specials),
            _ = _(_, _.data?.daily_deals),
            _ = _(_, _.data?.spotlights);
          return (0, _.jsxs)("div", {
            className: _.CartUpsellArea,
            children: [
              (0, _.jsx)("div", {
                className: _.CartUpsellTitle,
                children: (0, _._)("#Recommendations_Header"),
              }),
              _?.length > 3
                ? (0, _.jsx)(_, {
                    type: "recommended",
                    data: _,
                    isLoaded: !_.isLoading,
                  })
                : (0, _.jsx)(_, {
                    type: "specials",
                    data: _,
                    isLoaded: !_.isLoading,
                  }),
              (0, _.jsx)(_, {
                cart: _,
                bMinimalDisplay: !1,
              }),
            ],
          });
        }
        function _(_) {
          const { data: _, isLoaded: _, type: _ } = _;
          return !_ && _
            ? null
            : (0, _.jsx)(_._, {
                feature: `upsell-${_}`,
                children: (0, _.jsx)(_, {
                  className: (0, _._)(_.Specials),
                  children: _?.slice(0, 3).map(({ item_id: _, item: _ }) =>
                    (0, _.jsx)(
                      _,
                      {
                        item_id: _,
                        item: _,
                      },
                      (0, _._)(_),
                    ),
                  ),
                }),
              });
        }
        function _(_) {
          const { item: _ } = _;
          return (0, _.jsx)(_._, {
            capsule: {
              _: _._,
              type: (0, _._)(_.item_type, _.type),
            },
            imageType: "header",
            onlyOneDiscountPct: !0,
            bPreferAssetWithoutOverride: !1,
          });
        }
        function _(_) {
          const { data: _, isLoaded: _ } = _;
          return !_ && _
            ? null
            : jsx(_, {
                className: classnames(styles.DailyDeals, !_ && styles.Loading),
                children: _?.slice(0, 2).map((_) =>
                  jsx(
                    FeaturedItemDailyDeal,
                    {
                      dailyDeal: _,
                    },
                    StoreItemIDToString(_.item_id),
                  ),
                ),
              });
        }
        function _(_) {
          const { data: _, isLoaded: _ } = _,
            _ = React.useMemo(
              () =>
                _?.filter(
                  (_) => _.spotlight_template != "weeklong_deals",
                ).slice(0, 2),
              [_],
            );
          return !_ && _
            ? null
            : jsx(_, {
                className: classnames(styles.Spotlights, !_ && styles.Loading),
                children: _.map((_) =>
                  jsx(
                    FeaturedItemSpotlight,
                    {
                      spotlight: _,
                    },
                    _.item_id
                      ? StoreItemIDToString(_.item_id)
                      : _.spotlight_title,
                  ),
                ),
              });
        }
        function _(_) {
          const { className: _, children: _ } = _;
          return (0, _.jsx)(_._, {
            "flow-children": "row",
            navEntryPreferPosition: _._.MAINTAIN_X,
            className: (0, _._)(_.UpsellRow, _),
            children: _,
          });
        }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _(_),
            _ = (0, _._)({
              loadFavorites: !0,
              loadNicknames: !0,
            }),
            _ = _?.data?.ownership_info[0]?.friend_ownership,
            _ = _.useMemo(
              () => new Map(_ && _.map((_) => [_.accountid, _])),
              [_],
            ),
            _ = _.useMemo(() => new Set(_), [_]);
          if (_.isLoading || _.isLoading)
            return {
              isLoading: !0,
            };
          if (_.isError || _.isError)
            return {
              isError: !0,
            };
          const _ = _.data.map((_, _) => {
            const _ = _.get(_.accountid) || {
              already_owns: !1,
              wishes_for: !1,
            };
            return {
              ..._,
              ownership: _,
            };
          });
          return (
            _.sort((_, _) => {
              const _ = _.has(_.accountid),
                _ = _.has(_.accountid);
              if (_ != _) return _ ? -1 : 1;
              if (_.is_favorite != _.is_favorite) return _.is_favorite ? -1 : 1;
              if (_.ownership.wishes_for) {
                if (!_.ownership.wishes_for) return -1;
              } else if (_.ownership.wishes_for) return 1;
              const _ = _.ownership.partial_wishes_for?.length ?? 0,
                _ = _.ownership.partial_wishes_for?.length ?? 0;
              if (_ != _) return _ - _;
              if (_.ownership.already_owns) {
                if (!_.ownership.already_owns) return 1;
              } else if (_.ownership.already_owns) return -1;
              const _ = _.ownership.partial_owns_appids?.length ?? 0,
                _ = _.ownership.partial_owns_appids?.length ?? 0;
              if (_ != _) return _ - _;
              if (_ > 0) {
                const _ = _.ownership.partial_wishes_for.reduce(
                    (_, _) => _ ^ _,
                    0,
                  ),
                  _ = _.ownership.partial_wishes_for.reduce((_, _) => _ ^ _, 0);
                if (_ != _) return _ - _;
              }
              if (_ > 0) {
                const _ = _.ownership.partial_owns_appids.reduce(
                    (_, _) => _ ^ _,
                    0,
                  ),
                  _ = _.ownership.partial_owns_appids.reduce(
                    (_, _) => _ ^ _,
                    0,
                  );
                if (_ != _) return _ - _;
              }
              return _.persona.m_strPlayerName.localeCompare(
                _.persona.m_strPlayerName,
              );
            }),
            {
              rgFriendsForGifting: _,
            }
          );
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_._, _.item_type);
          return (0, _._)({
            queryKey: ["FriendOwnershipForGifting", _],
            queryFn: async () => {
              const _ = _._.Init(_._);
              _.Body().set_item_ids([_._.fromObject(_)]);
              const _ = await _._.GetFriendOwnershipForGifting(_, _);
              if (!_.BSuccess()) throw _.GetEResult();
              return _.Body().toObject();
            },
          });
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(_.gift_info?.accountid_giftee),
            _ = _.useMemo(
              () =>
                (0, _._)("giftee_player_summaries", "application_config") ?? [],
              [],
            );
          if (!_.gift_info?.accountid_giftee || _.isLoading) return null;
          if (_.data?.m_bInitialized || _) return _.data;
          const _ = _.find((_) => _.accountid === _.gift_info.accountid_giftee);
          if (!_) return null;
          let _ = new _._(_._.InitFromAccountID(_.accountid));
          return (
            (_.m_strAvatarHash = _.avatarHash),
            (_.m_strPlayerName = _.playerName),
            (_.m_bInitialized = !0),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = "hh:mm a",
          _ = "HH:mm";
        function _(_) {
          const {
            nLatestTime: _,
            nEarliestTime: _,
            fnGetTimeToUpdate: _,
            onError: _,
            strAlsoShowTimeZone: _,
            disabled: _,
            bNoDefaultDate: _,
            className: _,
            strDescToolTip: _,
            strDescription: _,
            bShowTimeZone: _,
            strInvalidDateTimeLocalizedMsg: _,
            fnIsValidDateTime: _,
            bWeekdaysOnly: _,
            fnSetTimeToUpdate: _,
            bForce24HourFormat: _,
            bAllowClear: _,
          } = _;
          let _ = _() || _ ? _ : _;
          const _ = _(),
            [_, _] = _.useState(_ > 0 ? _()(_ * 1e3) : null),
            [_, _] = _.useState(0),
            [_, _] = _.useState(),
            [_, _] = _.useState(),
            _ = _(_, _, _, _, _),
            _ = !_ && _;
          let _;
          if (_ && _ && _ == _ && _ > _._.GetTimeNowWithOverride()) {
            const _ = _().unix(_);
            (_ = {
              hours: {
                max: _.hour(),
                min: _.hour(),
                step: 0,
              },
              minutes: {
                max: _.minute(),
                min: _.minute(),
                step: 0,
              },
              seconds: {
                max: _.seconds(),
                min: _.seconds(),
                step: 0,
              },
              milliseconds: {
                max: 0,
                min: 0,
                step: 0,
              },
            }),
              (_ = _);
          }
          let _;
          !_ && _ && !_ && (_ = _().unix(_));
          const _ = _()._.guess(),
            _ = _().unix(_)._(_),
            _ = !!_ && _ != _ && _().unix(_)._(_),
            _ = (_) => {
              if (_) return;
              _(null);
              const _ = _(),
                _ = _().unix(_ || _._.GetTimeNowWithOverride());
              (_ = _.clone()),
                _.hour(_.hour()),
                _.minute(_.minute()),
                _.second(0),
                _(_.unix()),
                _(_);
            },
            { fnOnInput: _, fnOnInputBlur: _, fnOnChange: _ } = _(_, _, _),
            _ = (_) => {
              if (_) return;
              _(null);
              let _ = _(),
                _ = 0;
              if (!_)
                _ =
                  _().unix(_).hour(0).second(0).minutes(0).unix() +
                  3600 * _.hour() +
                  60 * _.minutes();
              else {
                const _ = _().unix(_);
                (_ = _.clone()),
                  _.year(_.year()),
                  _.month(_.month()),
                  _.date(_.date()),
                  (_ = _.unix());
              }
              _(_), _(_().unix(_));
            },
            { fnOnInput: _, fnOnInputBlur: _, fnOnChange: _ } = _(_, _, _),
            _ = () => {
              _ || (_(0), _(null), _(null), _(null), _((_) => _ + 1));
            },
            _ = _ && !_ && _ > 0;
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().EventTimeSection, _),
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().EventTimeTitle, "DialogLabel"),
                children: [
                  (0, _.jsx)(_._, {
                    toolTipContent: _,
                    direction: "top",
                    children:
                      !!_ &&
                      (0, _.jsx)("span", {
                        children: _,
                      }),
                  }),
                  _ &&
                    (0, _.jsxs)("span", {
                      className: _().DateErrorCtn,
                      children: [
                        (0, _.jsx)("img", {
                          src: _._,
                        }),
                        _,
                      ],
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _().FlexRowContainer,
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().InputBorder, _().TimeBlock),
                    children: [
                      (0, _.jsx)(
                        _(),
                        {
                          onChange: _,
                          timeFormat: !1,
                          value: _ ?? _,
                          isValidDate: (_) => !_ && _(_, _, _, _),
                          initialValue: _,
                          inputProps: {
                            placeholder: (0, _._)("#DateTimePicker_Enter_Date"),
                            className: (0, _._)(
                              _().DateWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: _,
                            onChange: (_) => _(_.currentTarget.value),
                            onBlur: (_) => _(_.currentTarget.value),
                          },
                        },
                        "date" + _,
                      ),
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().PacificTimeHint,
                          children: _.format("L"),
                        }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    className: (0, _._)(_().InputBorder, _().TimeBlock),
                    children: [
                      (0, _.jsx)(
                        _(),
                        {
                          onChange: _,
                          dateFormat: !1,
                          timeFormat: _,
                          timeConstraints: _,
                          value: _ ?? _,
                          inputProps: {
                            placeholder: (0, _._)("#DateTimePicker_Enter_Time"),
                            className: (0, _._)(
                              _().TimeWidth,
                              "DialogInput",
                              "DialogTextInputBase",
                            ),
                            disabled: _,
                            onChange: (_) => _(_.currentTarget.value),
                            onBlur: (_) => _(_.currentTarget.value),
                          },
                        },
                        "time" + _,
                      ),
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().PacificTimeHint,
                          children: _.format("LT"),
                        }),
                    ],
                  }),
                  _ &&
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsx)("div", {
                          className: _().TimeZone,
                          children: _.zoneAbbr(),
                        }),
                        !!_ &&
                          (0, _.jsx)("div", {
                            className: _().TimeZone,
                            children: _.zoneAbbr(),
                          }),
                      ],
                    }),
                  _ &&
                    (0, _.jsx)("button", {
                      type: "button",
                      className: _().ClearButton,
                      onClick: _,
                      children: (0, _._)("#Button_Clear"),
                    }),
                ],
              }),
              !!_ &&
                (0, _.jsx)("div", {
                  children: (0, _._)("#DateTimePicker_DateTime_Fixed"),
                }),
            ],
          });
        }
        function _(_, _, _) {
          const [_, _] = _.useState(!1);
          return {
            fnOnInput: (_) => {
              _(_), _(!0);
            },
            fnOnInputBlur: (_) => {
              if (_) {
                const _ = _(_);
                _.isValid() && _(_);
              }
              _(!1);
            },
            fnOnChange: (_) => {
              if (!_)
                if (typeof _ == "string") {
                  const _ = _(_);
                  _.isValid() && _(_);
                } else _(_);
            },
          };
        }
        function _() {
          const _ = _()("2025-01-14").format("L").split(/[-/.]/),
            _ = _.indexOf("14");
          return _.indexOf("01") < _;
        }
        function _() {
          return _()("2025-01-14T13:00:00")
            .format("LT")
            .toLowerCase()
            .includes("13");
        }
        function _(_) {
          return _()(_, _() ? "M/D/YYYY" : "D/M/YYYY", !1);
        }
        function _(_) {
          return _()(_, [_, _], !1);
        }
        function _(_, _, _, _) {
          const _ = _().unix(_).hour(0).seconds(0).minute(0);
          let _ = _.unix() >= _.unix();
          if (_ && _ && _ >= _) {
            const _ = _().unix(_).hour(23).minute(59).seconds(59);
            _ = _.unix() <= _.unix();
          }
          return (
            _ && _ && (_.weekday() == 0 || _.weekday() == 6) && (_ = !1), _
          );
        }
        function _(_, _, _, _, _) {
          const _ = _ && _(),
            _ = _ && !_(_).isValid(),
            _ = _ && !_(_).isValid(),
            _ = _ || _ || typeof _ == "string" || _ === !1;
          let _ = null;
          return (
            _ &&
              ((_ = (0, _._)(_ || "#DateTimePicker_Fallback_Invalid_DateTime")),
              _
                ? (_ = (0, _._)("#DateTimePicker_Time_CannotParse"))
                : _
                  ? (_ = (0, _._)("#DateTimePicker_Date_CannotParse"))
                  : typeof _ == "string" && (_ = _)),
            _.useEffect(() => {
              _ && _(_);
            }, [_, _]),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = _.memo(function (_) {
          const { scheduledTime: _, onScheduledTimeChange: _ } = _,
            [_, _] = _.useState(null),
            _ = _ > 0,
            _ = () => {
              _(0);
            },
            _ = () => {
              _ || _(Date.now() / 1e3);
            };
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                children: (0, _._)("#Cart_GiftDelivery_Label"),
              }),
              (0, _.jsx)(_, {
                children: (0, _.jsx)(_._, {
                  controlled: !0,
                  checked: !_,
                  onChange: (_) => _ && _(),
                  label: (0, _._)("#Cart_GiftDelivery_Now"),
                }),
              }),
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_._, {
                    controlled: !0,
                    checked: _,
                    onChange: (_) => _ && _(),
                    label: (0, _._)("#Cart_GiftDelivery_ScheduleDelivery"),
                  }),
                  (0, _.jsx)("div", {
                    style: {
                      clear: "both",
                    },
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _().ScheduleError,
                      children: _,
                    }),
                  _ &&
                    (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_, {
                        scheduledTime: _,
                        onScheduledTimeChange: _,
                        setScheduledError: _,
                      }),
                    }),
                ],
              }),
            ],
          });
        });
        function _(_) {
          const {
            scheduledTime: _,
            onScheduledTimeChange: _,
            setScheduledError: _,
          } = _;
          if ((0, _._)())
            return (0, _.jsx)(_, {
              scheduledTime: _,
              onScheduledTimeChange: _,
              setScheduledError: _,
            });
          {
            const _ = () => _(_);
            return (0, _.jsx)(_, {
              bShowTimeZone: !0,
              className: _().GiftDatePicker,
              nEarliestTime: Date.now() / 1e3,
              fnGetTimeToUpdate: () => _,
              fnSetTimeToUpdate: _,
              fnIsValidDateTime: _,
              onError: _,
            });
          }
        }
        function _(_) {
          const _ = Date.now() / 1e3 + _._.PerYear,
            _ = new Date(null, null, null, 0, 0, 0, 0).getTime() / 1e3;
          return _ > _
            ? (0, _._)("#Cart_GiftScheduleError_TooFar")
            : _ < _
              ? (0, _._)("#Cart_GiftScheduleError_InvalidDate")
              : !0;
        }
        function _(_, _) {
          let _ = _.getHours(),
            _ = _.getMinutes();
          return (
            _ && (_ > 12 ? (_ -= 12) : _ == 0 && (_ = 12)),
            `${_}:${_ < 10 ? "0" : ""}${_}`
          );
        }
        function _(_) {
          const {
              scheduledTime: _,
              onScheduledTimeChange: _,
              setScheduledError: _,
            } = _,
            _ = _.useMemo(() => {
              const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                hour: "numeric",
              });
              return (
                _.resolvedOptions().hour12 ||
                _.resolvedOptions().hourCycle == "h12"
              );
            }, []),
            _ = new Date(_ * 1e3),
            [_, _] = (0, _.useState)(_.getMonth()),
            [_, _] = (0, _.useState)(_.getDate()),
            [_, _] = (0, _.useState)(_.getFullYear()),
            [_, _] = (0, _.useState)(() => _(_, _)),
            [_, _] = (0, _.useState)(_.getHours() >= 12 ? "PM" : "AM");
          _.useEffect(() => {
            let _ = _.match(/^\s*([012]?[0-9]):([0-9]{2})\s*/);
            if (!_) return;
            let _ = parseInt(_[1]);
            const _ = parseInt(_[2]);
            _ &&
              (_ == "PM" && _ < 12
                ? (_ += 12)
                : _ == "AM" && _ == 12 && (_ = 0));
            const _ = new Date(_, _, _, _, _, 0, 0).getTime() / 1e3,
              _ = _(_);
            _ === !0 ? (_(null), _(_)) : _(_);
          }, [_, _, _, _, _, _, _, _]);
          const _ = _._.COUNTRY == "US" && _._.LANGUAGE == "english";
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_._, {
                className: _().GamepadTimePickerRow,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      month: _,
                      setMonth: _,
                    }),
                  (0, _.jsx)(_, {
                    year: _,
                    month: _,
                    day: _,
                    setDay: _,
                  }),
                  !_ &&
                    (0, _.jsx)(_, {
                      month: _,
                      setMonth: _,
                    }),
                  (0, _.jsx)(_, {
                    year: _,
                    setYear: _,
                  }),
                ],
              }),
              (0, _.jsxs)(_._, {
                className: _().GamepadTimePickerRow,
                children: [
                  (0, _.jsx)(_._, {
                    value: _,
                    onChange: (_) => _(_.currentTarget.value),
                  }),
                  _ &&
                    (0, _.jsx)(_, {
                      strAMPM: _,
                      setAMPM: _,
                    }),
                  (0, _.jsx)(_._, {
                    className: _().TimezoneDisplay,
                    children: (0, _.jsx)(_._, {
                      children: (0, _.jsx)(_, {}),
                    }),
                  }),
                  !_ &&
                    (0, _.jsx)(_._, {
                      children: "\xA0",
                    }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { year: _, setYear: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Date(),
                _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                  year: "numeric",
                });
              return [_.getFullYear(), _.getFullYear() + 1].map((_) => ({
                label: _.format(new Date(_, 0, 1)),
                data: _,
              }));
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _(_) {
          const { month: _, setMonth: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                month: "short",
              });
              return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_) => ({
                label: _.format(new Date(null, _)),
                data: _,
              }));
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _(_) {
          const { year: _, month: _, day: _, setDay: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Date(_, _ + 1, 0).getDate(),
                _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                  day: "numeric",
                });
              let _ = [];
              for (let _ = 1; _ <= _; _++)
                _.push({
                  label: _.format(new Date(null, null, _)),
                  data: _,
                });
              return _;
            }, [_, _]);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _(_) {
          const { strAMPM: _, setAMPM: _ } = _,
            _ = _.useMemo(() => {
              const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
                  hour: "numeric",
                  hour12: !0,
                }),
                _ =
                  _.formatToParts(new Date(null, null, null, 5)).find(
                    (_) => _.type == "dayPeriod",
                  )?.value || "AM",
                _ =
                  _.formatToParts(new Date(null, null, null, 17)).find(
                    (_) => _.type == "dayPeriod",
                  )?.value || "PM";
              return [
                {
                  label: _,
                  data: "AM",
                },
                {
                  label: _,
                  data: "PM",
                },
              ];
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: (_) => _(_.data),
            rgOptions: _,
          });
        }
        function _() {
          const _ = new Intl.DateTimeFormat(_._.GetPreferredLocales(), {
            timeZoneName: "short",
          })
            .formatToParts()
            .find((_) => _.type == "timeZoneName");
          return (0, _.jsx)(_.Fragment, {
            children: _ ? _.value : "",
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { lineItem: _ } = _,
            { data: _ } = (0, _._)(),
            _ = _.useMemo(() => {
              let _ = [];
              for (const _ of _?.line_items ?? [])
                _.line_item_id === _.line_item_id ||
                  !_.flags?.is_gift ||
                  !_.gift_info ||
                  _.push(_);
              return _;
            }, [_?.line_items, _.line_item_id]),
            { mutate: _ } = (0, _._)(),
            _ = (_) => {
              _({
                lineItemID: _.line_item_id,
                lineItemFlags: _.flags,
                giftInfo: {
                  ...(_.gift_info ?? {}),
                },
              });
            },
            _ = (0, _._)({
              rgOptions: _,
              selectedValue: null,
              onSelectionChange: _,
            });
          return _.length < 1
            ? null
            : (0, _.jsx)(_._, {
                flexGrow: "0",
                children: (0, _.jsxs)(_._.Root, {
                  state: _,
                  children: [
                    (0, _.jsx)(_._.Trigger, {
                      children: (0, _.jsx)(_._, {
                        children: (0, _._)("#Cart_Gifting_CopyGiftOptionsFrom"),
                      }),
                    }),
                    (0, _.jsx)(_._.Options, {
                      children: _.map((_, _) =>
                        (0, _.jsx)(
                          _._.Option,
                          {
                            value: _,
                            children: (0, _.jsx)(_, {
                              lineItem: _,
                            }),
                          },
                          _,
                        ),
                      ),
                    }),
                  ],
                }),
              });
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _.bundleid ? _._._ : _._._,
            [_] = (0, _._)(_.bundleid ? _.bundleid : _.packageid, _, {
              include_basic_info: !0,
            }),
            _ = _(_),
            _ = _?.m_strPlayerName ?? _.gift_info?.email_giftee;
          if (!_ || !_) return null;
          const _ = _
            ? (0, _.jsx)(_._, {
                size: "X-Small",
                statusPosition: "none",
                persona: _,
              })
            : (0, _.jsx)(_.Fragment, {});
          return (0, _.jsxs)(_._, {
            minWidth: "0",
            align: "center",
            justify: "between",
            gap: "4",
            maxWidth: "600px",
            children: [
              (0, _.jsx)("div", {
                children: _.GetName(),
              }),
              (0, _.jsxs)(_._, {
                gap: "1",
                align: "center",
                children: [_, _],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
            storeItem: _,
            lineItem: _,
            bShowGiftRecipientModal: _,
            fnOnDismiss: _,
            highlightedAccountIDs: _,
          } = _;
          return (0, _.jsx)(_._, {
            className: _().GiftRecipientPickerModal,
            active: _,
            onDismiss: _,
            children: (0, _.jsx)(_, {
              onDismiss: _,
              lineItem: _,
              storeItem: _,
              highlightedAccountIDs: _ ?? [],
            }),
          });
        }
        const _ = _.memo(function (_) {
          const { storeItem: _, highlightedAccountIDs: _, ..._ } = _,
            { rgFriendsForGifting: _, isLoading: _, isError: _ } = _(_, _),
            _ = (0, _._)(_),
            _ = _.useMemo(() => {
              const _ = new Map(
                _.filter((_) => !!_.data).map((_) => [
                  _.data.GetAccountID(),
                  _.data,
                ]),
              );
              for (const _ of _ ?? []) _.delete(_.accountid);
              let _ = [];
              for (const _ of _.values())
                _.push({
                  accountid: _.GetAccountID(),
                  persona: _,
                  ownership: {
                    already_owns: !1,
                    wishes_for: !1,
                  },
                });
              return _ && _.push(..._), _;
            }, [_, _]);
          return (0, _.jsx)(_, {
            ..._,
            rgAccountsForGifting: _,
            isLoading: _,
            isError: _,
          });
        });
        function _(_) {
          const {
              lineItem: _,
              onDismiss: _,
              rgAccountsForGifting: _,
              isLoading: _,
              isError: _,
            } = _,
            _ = (0, _._)(),
            [_, _] = _.useState(""),
            _ = _.useMemo(() => {
              if (!_) return [];
              const _ = _.toLocaleLowerCase();
              return _.length < 1
                ? _
                : _.filter(
                    (_) =>
                      !!(
                        _.persona.m_strPlayerName
                          .toLocaleLowerCase()
                          .indexOf(_) > -1 ||
                        (_.nickname &&
                          _.nickname.toLocaleLowerCase().indexOf(_) > -1)
                      ),
                  );
            }, [_, _]),
            _ = _.gift_info?.accountid_giftee,
            _ = (_) => {
              if (_) {
                const _ = new _._(_);
                _.BIsValid() &&
                  _.mutate({
                    lineItemID: _.line_item_id,
                    lineItemFlags: _.flags,
                    giftInfo: {
                      ...(_.gift_info ?? {}),
                      accountid_giftee: _ && _.GetAccountID(),
                    },
                  });
              }
              _();
            };
          return _
            ? (0, _.jsx)(_, {
                children: (0, _.jsx)("div", {
                  className: _().LoadingError,
                  children: (0, _._)("#Cart_GiftRecipientModal_IssueLoading"),
                }),
              })
            : (0, _.jsxs)(_, {
                loading: _,
                children: [
                  (0, _.jsx)(_, {
                    value: _,
                    onChange: _,
                  }),
                  (0, _.jsx)(_, {
                    children: _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          selected: _.accountid === _,
                          onSelect: _,
                          ownership: _.ownership,
                          persona: _.persona,
                          nickname: _.nickname,
                        },
                        _.accountid,
                      ),
                    ),
                  }),
                ],
              });
        }
        function _(_) {
          const { loading: _, children: _ } = _;
          return (0, _.jsxs)(_._, {
            className: _().GiftRecipientPickerFormCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().FormTitle,
                children: (0, _._)("#Cart_GiftRecipientModal_Title"),
              }),
              _ &&
                (0, _.jsx)(_._, {
                  position: "center",
                  size: "large",
                }),
              !_ && _,
            ],
          });
        }
        function _(_) {
          const { value: _, onChange: _ } = _;
          return (0, _.jsx)(_._, {
            autoFocus: !0,
            bShowClearAction: !0,
            className: _().GiftFriendsInput,
            placeholder: (0, _._)("#Cart_GiftRecipientModal_Placeholder"),
            value: _,
            onChange: (_) => _(_.currentTarget.value),
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            className: _().GiftFriendsListCtn,
            ..._,
          });
        }
        function _(_) {
          const {
              selected: _,
              onSelect: _,
              nickname: _,
              persona: _,
              ownership: _,
            } = _,
            _ = _.already_owns,
            _ = _.useCallback(() => {
              _ || _(_.m_steamid.ConvertTo64BitString());
            }, [_, _, _]);
          return (0, _.jsxs)(_._, {
            className: (0, _._)(
              _().GiftPickerFriendBlock,
              _ && _().Selected,
              _ && _().Disabled,
            ),
            focusClassName: _().Focused,
            noFocusRing: !0,
            onActivate: _,
            children: [
              (0, _.jsx)(_._, {
                className: _().FriendAvatar,
                statusPosition: "right",
                persona: _,
              }),
              (0, _.jsx)(_._, {
                bParenthesizeNicknames: !0,
                strNickname: _,
                persona: _,
                className: _().PersonaName,
              }),
              (0, _.jsxs)("div", {
                className: _().FriendsGiftLabel,
                children: [
                  (0, _.jsx)(_, {
                    ownership: _,
                  }),
                  (0, _.jsx)(_, {
                    ownership: _,
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { ownership: _ } = _,
            { already_owns: _, partial_owns_appids: _ } = _;
          return _
            ? (0, _.jsx)("div", {
                className: (0, _._)(_().OwnsGame),
                children: (0, _._)("#Cart_GiftRecipientModal_OwnsGameLabel"),
              })
            : _ && _.length > 0
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_().OwnsGame),
                  children: (0, _._)(
                    "#Cart_GiftRecipientModal_PartialOwnsLabel",
                    (0, _.jsx)(_, {
                      rgAppList: _,
                    }),
                  ),
                })
              : null;
        }
        function _(_) {
          const { ownership: _ } = _,
            { already_owns: _, wishes_for: _, partial_wishes_for: _ } = _;
          return _
            ? null
            : _
              ? (0, _.jsx)("div", {
                  className: (0, _._)(_().OnWishlist),
                  children: (0, _._)("#Cart_GiftRecipientModal_OnWishlist"),
                })
              : _ && _.length > 0
                ? (0, _.jsx)("div", {
                    className: (0, _._)(_().OnWishlist),
                    children: (0, _._)(
                      "#Cart_GiftRecipientModal_PartialWishlistLabel",
                      (0, _.jsx)(_, {
                        rgAppList: _,
                      }),
                    ),
                  })
                : null;
        }
        function _(_) {
          const { rgAppList: _ } = _,
            _ = (0, _._)(),
            _ = _.useMemo(
              () =>
                Array.from(new Set(_))
                  .slice(0, 6)
                  .map((_) =>
                    (0, _._)(_, {
                      appid: _,
                    }),
                  ),
              [_, _],
            ),
            _ = (0, _._)({
              queries: _,
            }),
            _ = [];
          for (const _ of _)
            if (!(!_.data || !_.data.name)) {
              if (_.length >= 3) break;
              _.push(
                (0, _.jsxs)(_.Fragment, {
                  children: [_.length ? ", " : "", _.data.name],
                }),
              );
            }
          return _;
        }
        function _(_) {
          const { giftInfo: _, onChange: _ } = _,
            _ = (0, _._)(_.accountid_giftee);
          return _.data
            ? (0, _.jsxs)(_, {
                children: [
                  (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        children: (0, _._)("#Cart_PurchaseFor_Label"),
                      }),
                      (0, _.jsx)("a", {
                        href: _.data.GetCommunityProfileURL(),
                        target: "_blank",
                        children: (0, _.jsx)(_._, {
                          className: _().FriendAvatar,
                          statusPosition: "right",
                          persona: _.data,
                        }),
                      }),
                      _.data.m_strPlayerName,
                    ],
                  }),
                  (0, _.jsx)(_, {
                    giftInfo: _,
                    onChange: _,
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const { lineItem: _ } = _;
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                lineItem: _,
              }),
              (0, _.jsx)(_, {
                gifteeAccountID: _.gift_info?.accountid_giftee,
              }),
            ],
          });
        }
        function _(_) {
          return _._.logged_in
            ? null
            : (0, _.jsx)("div", {
                className: _().SignInLink,
                children: (0, _.jsx)(_._, {
                  onClick: () => (0, _._)(),
                  children: (0, _._)("#Cart_Gifting_SignInForFriends"),
                }),
              });
        }
        function _(_) {
          const { lineItem: _, storeItem: _ } = _,
            [_, _] = _.useState(!1),
            { data: _ } = (0, _._)(),
            _ = _.useMemo(() => {
              if (!_?.line_items) return [];
              let _ = new Set();
              for (const _ of _.line_items)
                _.line_item_id !== _.line_item_id &&
                  _.gift_info?.accountid_giftee &&
                  _.add(_.gift_info.accountid_giftee);
              return [..._];
            }, [_?.line_items, _.line_item_id]);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              _._.logged_in &&
                (0, _.jsx)(_._, {
                  onClick: () => _(!0),
                  children: (0, _._)("#Cart_SelectRecipient"),
                }),
              _ &&
                (0, _.jsx)(_, {
                  bShowGiftRecipientModal: _,
                  fnOnDismiss: () => _(!1),
                  lineItem: _,
                  storeItem: _,
                  highlightedAccountIDs: _,
                }),
            ],
          });
        }
        function _(_) {
          const { lineItem: _, onClick: _ } = _,
            { mutate: _ } = (0, _._)(),
            _ = _.useCallback(() => {
              _({
                lineItemID: _.line_item_id,
                lineItemFlags: _.flags,
                giftInfo: {
                  ..._.gift_info,
                  email_giftee: "",
                },
              }),
                _();
            }, [_, _, _]);
          return (0, _.jsx)(_._, {
            color: "dull",
            onClick: _,
            children: (0, _._)("#Cart_EnterRecipientEmail"),
          });
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _(_);
          return _
            ? (0, _.jsxs)(_._, {
                align: "center",
                children: [
                  (0, _.jsx)("a", {
                    href: _.GetCommunityProfileURL(),
                    target: "_blank",
                    children: (0, _.jsx)(_._, {
                      className: _().FriendAvatar,
                      statusPosition: "right",
                      persona: _,
                    }),
                  }),
                  _.m_strPlayerName,
                ],
              })
            : null;
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _.gift_info?.email_giftee,
            { mutate: _ } = (0, _._)(),
            [_, _, _] = (0, _._)(_, 1e3);
          return (
            (0, _.useEffect)(() => {
              if (!_ || _ == _.gift_info?.email_giftee) return;
              let _ = _.gift_info
                ? {
                    ..._.gift_info,
                  }
                : {};
              (_.email_giftee = _),
                (_.time_scheduled_send = 0),
                _({
                  lineItemID: _.line_item_id,
                  lineItemFlags: _.flags,
                  giftInfo: _,
                });
            }, [_, _, _]),
            (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("div", {
                  className: _().GiftEmailInput,
                  children: (0, _.jsx)(_._, {
                    label: " ",
                    mustBeEmail: !0,
                    value: _,
                    onChange: (_) => _(_.target.value),
                    maxChars: _,
                  }),
                }),
                (0, _.jsxs)("ul", {
                  className: _().GiftEmailWarnings,
                  children: [
                    (0, _.jsx)("li", {
                      children: (0, _._)("#Cart_GiftDeliveryEmail_Warning1"),
                    }),
                    (0, _.jsx)("li", {
                      children: (0, _._)(
                        "#Cart_GiftDeliveryEmail_Warning2",
                        _._.country_code,
                      ),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var _ = ((_) => (
          (_[(_.NoRecipientSelected = 0)] = "NoRecipientSelected"),
          (_[(_.AccountSelected = 1)] = "AccountSelected"),
          (_[(_.EmailSelected = 2)] = "EmailSelected"),
          _
        ))(_ || {});
        function _(_) {
          const { lineItem: _ } = _,
            [_, _] = _.useState(!1),
            _ = _.useMemo(
              () =>
                _.gift_info?.accountid_giftee
                  ? 1
                  : _ || _.gift_info?.email_giftee
                    ? 2
                    : 0,
              [_, _],
            ),
            { mutate: _ } = (0, _._)(),
            _ = _.useCallback(() => {
              let _ = _.gift_info
                ? {
                    ..._.gift_info,
                  }
                : {};
              (_.accountid_giftee = null),
                (_.email_giftee = null),
                _(!1),
                _({
                  lineItemID: _.line_item_id,
                  lineItemFlags: _.flags,
                  giftInfo: _,
                });
            }, [_, _]);
          return (0, _.jsxs)(_, {
            children: [
              (0, _.jsx)("div", {
                className: _().GiftFormDivider,
              }),
              (0, _.jsxs)(_._, {
                justify: "between",
                gap: "3",
                direction: {
                  initial: "column-reverse",
                  _: "row",
                },
                marginBottom: "2",
                children: [
                  (0, _.jsxs)(_, {
                    children: [
                      (0, _.jsx)(_, {
                        fullWidth: _ === 2,
                        children:
                          _ == 2
                            ? (0, _._)("#Cart_GiftRecipientEmail_Label")
                            : (0, _._)("#Cart_GiftRecipient_Label"),
                      }),
                      _ == 1 &&
                        (0, _.jsx)(_, {
                          lineItem: _,
                        }),
                      _ == 0 &&
                        (0, _.jsx)(_, {
                          onEmailRecipient: () => _(!0),
                          ..._,
                        }),
                      _ != 0 &&
                        (0, _.jsxs)(_, {
                          onClick: _,
                          children: [
                            "(",
                            _ == 2
                              ? (0, _._)("#Cart_EditGiftDelivery")
                              : (0, _._)("#Cart_Edit"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                  (0, _.jsx)(_, {
                    lineItem: _,
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                children:
                  _ == 2 &&
                  (0, _.jsx)(_, {
                    ..._,
                  }),
              }),
              _ == 1 &&
                (0, _.jsx)(_, {
                  lineItem: _,
                }),
            ],
          });
        }
        function _(_) {
          const { onEmailRecipient: _, ..._ } = _;
          return (0, _.jsxs)(_._, {
            align: "center",
            gap: "2",
            marginStart: "2",
            wrap: "wrap",
            children: [
              (0, _.jsx)(_, {
                ..._,
              }),
              (0, _.jsx)(_, {
                onClick: _,
                ..._,
              }),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _(_) {
          const { lineItem: _ } = _,
            _ = _(_),
            { data: _ } = (0, _._)(),
            _ = _.useMemo(
              () => !_ || _.includes(_?.GetSteamIDAsString()),
              [_, _],
            );
          return !_ || _
            ? null
            : (0, _.jsx)(_._, {
                marginTop: "3",
                className: _().GiftNonFriendWarning,
                children: (0, _.jsxs)(_._, {
                  size: "3",
                  color: "amber-9",
                  children: [
                    _._.logged_in &&
                      (0, _._)(
                        "#Cart_Warning_GiftToNonFriend_Named",
                        (0, _.jsx)(_._, {
                          target: "_blank",
                          href: _.GetCommunityProfileURL(),
                          children: _.m_strPlayerName,
                        }),
                      ),
                    !_._.logged_in &&
                      (0, _._)(
                        "#Cart_Warning_GiftToAccount_LoggedOut_Actionable",
                        (0, _.jsx)(_._, {
                          color: "text-light",
                          contrast: "title",
                          onClick: () => (0, _._)(),
                        }),
                      ),
                  ],
                }),
              });
        }
        function _(_) {
          const { lineItem: _ } = _,
            [_, _] = _.useState(_.gift_info?.gift_message?.message || ""),
            _ = _.useRef(_),
            [_, _] = _.useState(_.gift_info?.gift_message?.signature || ""),
            _ = _.useRef(_),
            [_, _] = _.useState(_.gift_info?.time_scheduled_send),
            _ = _.useRef(_),
            _ = _.useCallback((_) => {
              (_.current = !0), _(Math.floor(_));
            }, []),
            _ = _.useRef(!1);
          _.useEffect(() => {
            _.current ||
              ((_.current = _.gift_info?.time_scheduled_send),
              (_.current = _.gift_info?.gift_message?.message || ""),
              (_.current = _.gift_info?.gift_message?.signature || ""),
              _(_.current),
              _(_.current),
              _(_.current));
          }, [_.gift_info]);
          const _ = (0, _._)(3e3),
            { mutate: _ } = (0, _._)(),
            _ = _.useCallback(
              (_) => {
                _(() => {
                  _.current &&
                    (_({
                      lineItemID: _.line_item_id,
                      lineItemFlags: _.flags,
                      giftInfo: _,
                    }),
                    (_.current = !1));
                });
              },
              [_, _.line_item_id, _.flags, _],
            );
          return (
            (0, _.useEffect)(() => {
              (_.current != _ || _.current != _ || _.current != _) &&
                (_({
                  accountid_giftee: _.gift_info?.accountid_giftee,
                  email_giftee: _.gift_info?.email_giftee,
                  gift_message: {
                    message: _,
                    signature: _,
                  },
                  time_scheduled_send: _,
                }),
                (_.current = _),
                (_.current = _),
                (_.current = _));
            }, [_, _, _, _, _.gift_info]),
            (0, _.jsx)(_, {
              _: _.line_item_id,
              message: _,
              onMessageChange: (_) => {
                (_.current = !0), _(_);
              },
              signature: _,
              onSignatureChange: (_) => {
                (_.current = !0), _(_);
              },
              scheduledTime: _,
              onScheduledTimeChange: _,
              bShowScheduledTime:
                !_.gift_info?.email_giftee || _.gift_info?.email_giftee == "",
            })
          );
        }
        function _(_) {
          const { giftInfo: _, onChange: _ } = _;
          return (0, _.jsx)(_, {
            _: "cart",
            message: _.gift_message?.message || "",
            onMessageChange: (_) =>
              _({
                ..._,
                gift_message: {
                  ..._.gift_message,
                  message: _,
                },
              }),
            signature: _.gift_message?.signature || "",
            onSignatureChange: (_) =>
              _({
                ..._,
                gift_message: {
                  ..._.gift_message,
                  signature: _,
                },
              }),
            scheduledTime: _.time_scheduled_send,
            onScheduledTimeChange: (_) =>
              _({
                ..._,
                time_scheduled_send: _,
              }),
            bShowScheduledTime: !_?.email_giftee || _?.email_giftee == "",
          });
        }
        const _ = 160,
          _ = 330;
        function _(_) {
          const {
              _: _,
              message: _,
              onMessageChange: _,
              signature: _,
              onSignatureChange: _,
              bShowScheduledTime: _,
              scheduledTime: _,
              onScheduledTimeChange: _,
              onBlur: _,
            } = _,
            _ = (0, _._)(),
            _ = _ - _.length,
            [_, _] = _.useState(!1),
            _ = _ || _?.length > 0 || !_,
            { data: _ } = (0, _._)(_._.accountid);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    fullWidth: !0,
                    children: (0, _._)(
                      "#Cart_GiftDelivery_Body",
                      (0, _.jsx)("span", {
                        className: _ <= 0 ? _().RedText : null,
                        children: _,
                      }),
                    ),
                  }),
                  (0, _.jsx)(_._, {
                    nMinHeight: 50,
                    className: _().GiftNoteInput,
                    value: _,
                    onBlur: _,
                    onChange: (_) => _(_.target.value),
                  }),
                ],
              }),
              !!_ &&
                (0, _.jsx)(_, {
                  children: (0, _.jsxs)("div", {
                    className: _().GiftFormRecipient,
                    children: [
                      (0, _.jsx)(_, {
                        children: (0, _._)("#Cart_GiftDelivery_From"),
                      }),
                      (0, _.jsx)(_._, {
                        className: _().FriendAvatar,
                        statusPosition: "right",
                        persona: _,
                      }),
                      " ",
                      _?.m_strPlayerName || "",
                      !_ &&
                        (0, _.jsxs)(_, {
                          onClick: () => _(!0),
                          children: [
                            "(",
                            (0, _._)("#Cart_GiftDelivery_AddSignature"),
                            ")",
                          ],
                        }),
                    ],
                  }),
                }),
              _ &&
                (0, _.jsxs)(_, {
                  children: [
                    (0, _.jsx)(_, {
                      fullWidth: !0,
                      children: (0, _._)("#Cart_GiftDelivery_Signature"),
                    }),
                    (0, _.jsx)(_._, {
                      value: _,
                      className: _().GiftSignatureInput,
                      onChange: (_) => _(_.target.value),
                      onBlur: _,
                      maxChars: _,
                    }),
                  ],
                }),
              _ &&
                (0, _.jsx)(_, {
                  scheduledTime: _,
                  onScheduledTimeChange: _,
                }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftFormCtn,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftFormSection,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftFormRecipient,
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().GiftRadioRow,
            children: _.children,
          });
        }
        function _(_) {
          const { fullWidth: _ } = _;
          return (0, _.jsx)("div", {
            className: _()(_().FormTextLabel, _ && _().FullWidth),
            children: _.children,
          });
        }
        function _(_) {
          return (0, _.jsx)(_._, {
            onActivate: _.onClick,
            children: _.children,
            className: _().LinkButton,
          });
        }
        function _(_) {
          const { gifteeAccountID: _ } = _,
            { isLoading: _, data: _ } = (0, _._)(!0);
          if (_ || _.is_not_member_of_any_group() || _.role() === _._._)
            return null;
          const _ = _._.InitFromAccountID(
            _,
            _._.EUNIVERSE,
          ).ConvertTo64BitString();
          return _.family_group()
            .members()
            .some((_) => _.steamid() === _ && _.role() === _._._)
            ? (0, _.jsxs)("div", {
                className: _().FamilyGiftNotice,
                children: [" ", (0, _._)("#Cart_FamilyGift_Notice")],
              })
            : null;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _() {
          const _ = (0, _._)(),
            [_] = (0, _._)(),
            _ = `${_._.STORE_CHECKOUT_BASE_URL}checkout/`;
          if ((0, _._)(_)) return `${_}?accountcart=1`;
          if ((0, _._)(_)) return `${_}?gidreplay=${_.gid}`;
          {
            const _ = new URLSearchParams();
            return (
              _.append("cart", _.gid ?? ""),
              _?.accountid_giftee &&
                (_.append("purchasetype", "gift"),
                _.append("bIsGift", "1"),
                _.append("giftInfo", encodeURIComponent(JSON.stringify(_)))),
              `${_}?${_.toString()}`
            );
          }
        }
        var _ = __webpack_require__("chunkid");
        function _() {
          return ["shopping_cart", "relevant_coupons"];
        }
        async function _(_) {
          const _ = _._.Init(_._);
          _.Body().set_language((0, _.sfN)(_._.LANGUAGE));
          const _ = await _._.GetRelevantCoupons(_, _);
          return _.BIsValid()
            ? _.Body().toObject()
            : (console.error("Failed to load relevant coupons"), {});
        }
        function _() {
          const _ = (0, _._)();
          return (0, _._)(_(_));
        }
        function _(_) {
          return {
            queryKey: _(),
            queryFn: async () =>
              ((await _(_)).line_items ?? []).reduce(
                (_, _) => (
                  _.line_item_id && (_[_.line_item_id] = _.coupons ?? []), _
                ),
                {},
              ),
            enabled: _._.logged_in,
            placeholderData: () => ({}),
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const {
              lineItem: _,
              storeItem: _,
              couponApplied: _,
              availableCoupons: _,
            } = _,
            [{ bDialogActive: _, strDialogTitle: _ }, _] = _.useState({
              bDialogActive: !1,
            }),
            _ = () =>
              _({
                bDialogActive: !0,
                strDialogTitle: (0, _._)(
                  _ ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
                ),
              }),
            _ = (0, _._)(),
            _ = (_) => {
              _.mutate({
                lineItemID: _.line_item_id,
                giftInfo: _.gift_info,
                lineItemFlags: {
                  ..._.flags,
                },
                gidCoupon: _,
              });
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_, {
                couponApplied: _,
                numAvailable: _.length,
                onModifyClick: _,
              }),
              (0, _.jsx)(_, {
                active: _,
                title: _ || (0, _._)("#Cart_CouponModify_Add"),
                packageName: _.name,
                onRequestClose: () =>
                  _({
                    bDialogActive: !1,
                  }),
                couponApplied: _,
                availableCoupons: _,
                onCouponChange: _,
              }),
            ],
          });
        }
        function _(_) {
          const { couponApplied: _, numAvailable: _, onModifyClick: _ } = _,
            _ = (0, _._)(
              _ ? "#Cart_CouponModify_Change" : "#Cart_CouponModify_Add",
            );
          return (0, _.jsx)("div", {
            className: _.CouponPickerRowGlow,
            children: (0, _.jsxs)("div", {
              className: _.CouponPickerRow,
              children: [
                _
                  ? (0, _.jsx)(_, {
                      ..._,
                    })
                  : null,
                (0, _.jsx)(_, {
                  children: (0, _._)("#Cart_CouponAvailability", _),
                }),
                (0, _.jsx)("div", {
                  className: _.ModifyLink,
                  children: (0, _.jsx)(_, {
                    onClick: _,
                    children: _,
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { large_icon_url: _, title: _ } = _;
          return (0, _.jsx)("img", {
            className: _.CouponRepresentation,
            src: _,
            title: _,
          });
        }
        function _(_) {
          const {
              active: _,
              onRequestClose: _,
              packageName: _,
              title: _,
              couponApplied: _,
              availableCoupons: _,
              onCouponChange: _,
            } = _,
            [_, _] = _.useState(_?.gidcoupon || ""),
            _ = () => {
              _(), _(_ || _.kFb);
            };
          return (0, _.jsxs)(_._, {
            active: _,
            onDismiss: _,
            children: [
              (0, _.jsx)(_._, {
                children: _,
              }),
              (0, _.jsx)(_._, {
                children: (0, _._)(
                  "#Cart_SelectCouponToApply",
                  (0, _.jsx)("span", {
                    className: _.PackageName,
                    children: _,
                  }),
                ),
              }),
              (0, _.jsx)(_, {
                availableCoupons: _,
                couponApplied: _?.gidcoupon,
                couponSelected: _,
                onSelectedChange: _,
              }),
              (0, _.jsx)(_._, {
                onCancel: _,
                onOK: _,
                strOKText: (0, _._)("#Button_Done"),
              }),
            ],
          });
        }
        function _(_) {
          const {
              availableCoupons: _,
              couponApplied: _,
              couponSelected: _,
              onSelectedChange: _,
            } = _,
            { data: _ } = (0, _._)(),
            _ = (_?.cart_items || []).map((_) => _.coupon_applied?.gidcoupon);
          return (0, _.jsx)("div", {
            className: _.CouponListContainer,
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  ..._,
                  applied: _ === _.gidcoupon,
                  selected: _ === _.gidcoupon,
                  inUse: _.includes(_.gidcoupon),
                  onSelected: (_) => _(_ ? _.gidcoupon : ""),
                },
                _.gidcoupon,
              ),
            ),
          });
        }
        function _(_) {
          const {
              applied: _,
              inUse: _,
              selected: _,
              large_icon_url: _,
              title: _,
              discount_pct: _,
              onSelected: _,
            } = _,
            _ = !_ && _,
            _ = _ ? void 0 : () => _(!_);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_.CouponListItem, _ && _.Disabled),
            onClick: _,
            children: [
              (0, _.jsx)(_, {
                checked: _,
                hidden: _,
              }),
              (0, _.jsx)("img", {
                src: _,
                title: _,
                className: _.Image,
              }),
              (0, _.jsxs)("div", {
                className: _.Info,
                children: [
                  _ &&
                    (0, _.jsx)(_, {
                      children: (0, _._)("#Cart_Coupons_Applied"),
                    }),
                  _ &&
                    (0, _.jsx)(_, {
                      children: (0, _._)("#Cart_Coupons_InUse"),
                    }),
                ],
              }),
              (0, _.jsxs)("div", {
                className: _.Discount,
                children: ["-", _, "%"],
              }),
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.CouponInfoText,
            children: _.children,
          });
        }
        function _(_) {
          const { checked: _, hidden: _ } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(_.Checkbox, _ && _.Hidden),
            children: _ && (0, _.jsx)(_._, {}),
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _() {
          const [_, _] = _.useState(null);
          return (
            _.useEffect(() => {
              _((0, _._)()?.rgUserCountryOptions);
            }, []),
            _
              ? (0, _.jsxs)("div", {
                  className: (0, _._)(
                    _().EstimatedTotalFlex,
                    _().UserCountrySelector,
                  ),
                  children: [
                    (0, _.jsx)("div", {
                      className: _().CartLabelText,
                      children: (0, _._)("#Cart_UserCountrySelector"),
                    }),
                    (0, _.jsx)("div", {
                      className: _().CartValueText,
                      children: (0, _.jsx)(_, {
                        rgCountryOptions: _,
                      }),
                    }),
                  ],
                })
              : null
          );
        }
        function _(_) {
          const { rgCountryOptions: _ } = _,
            [_, _] = _.useState(_._.COUNTRY),
            _ = _.useMemo(
              () =>
                Object.keys(_).map((_) => ({
                  label: _[_],
                  data: _,
                })),
              [_],
            ),
            _ = _.useCallback((_) => {
              _.data != _._.COUNTRY &&
                PresentCountryCurrencyChangeDialog(_.data == "help"),
                _(_.data);
            }, []);
          return (0, _.jsx)(_._, {
            selectedOption: _,
            onChange: _,
            rgOptions: _,
            contextMenuPositionOptions: {
              bMatchWidth: !1,
            },
          });
        }
        function _(_) {
          const { children: _ } = _;
          return (0, _.jsx)(_, {
            children: _,
          });
        }
        function _(_) {
          const { children: _ } = _,
            _ = (0, _._)(),
            { data: _ } = _(),
            _ = _.isLoading || !_.data,
            _ = (0, _._)(),
            [_, _] = (0, _._)(),
            { sortedLineItems: _, bCartIncludesGifts: _ } = _.useMemo(() => {
              const _ = _?.data?.line_items || [],
                _ = _.some((_) => _.flags?.is_gift);
              return {
                sortedLineItems: _.sort((_, _) => {
                  const _ = _.bundleid ?? _.packageid,
                    _ = _.bundleid ?? _.packageid;
                  return _.time_added == _.time_added
                    ? _ < _
                      ? 1
                      : -1
                    : _.time_added < _.time_added
                      ? 1
                      : -1;
                }),
                bCartIncludesGifts: _,
              };
            }, [_?.data?.line_items]),
            _ = (_) =>
              (0, _.jsx)(_, {
                ..._,
                availableCoupons: (_ && _[_.lineItem.line_item_id]) || [],
              }),
            { data: _ } = (0, _._)();
          return (0, _.jsxs)(_._, {
            validateCart: _,
            eDisplayType: _._.k_ECartDisplayType_FullPage,
            children: [
              (0, _.jsx)(_._, {}),
              (0, _.jsxs)(_._, {
                className: _().ShoppingCartCtn,
                children: [
                  (0, _.jsxs)(_._, {
                    className: _().ShoppingCartLeftCol,
                    children: [
                      _ && (0, _.jsx)(_._, {}),
                      !!_ &&
                        !!_ &&
                        (0, _.jsx)(_._, {
                          children: (0, _.jsx)(_, {
                            children: (0, _.jsx)(_, {
                              giftInfo: _,
                              onChange: _,
                            }),
                          }),
                        }),
                      (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_._, {
                          lineItems: _,
                          cartValidation: _,
                          renderLineItem: _,
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        validateCart: _,
                      }),
                      !_ &&
                        (0, _.jsxs)("div", {
                          className: _().ResponsiveShoppingCartSummary,
                          children: [
                            (0, _.jsx)(_, {
                              bCartIncludesGifts: _,
                              strEstimatedTotal:
                                _?.estimated_totals?.subtotal.formatted_amount,
                            }),
                            (0, _.jsx)(_, {}),
                          ],
                        }),
                      _ &&
                        _({
                          cart: _.data,
                          validatedCart: _,
                          bCartIncludesGifts: _,
                        }),
                    ],
                  }),
                  (0, _.jsx)(_._, {
                    className: (0, _._)(
                      _().ShoppingCartRightCol,
                      _?.length <= 2 && _().SmallCart,
                    ),
                    children: (0, _.jsxs)("div", {
                      className: _().CartRightColStickyCtn,
                      children: [
                        (0, _.jsx)(_, {
                          bCartIncludesGifts: _,
                          strEstimatedTotal:
                            _?.estimated_totals?.subtotal.formatted_amount,
                        }),
                        (0, _.jsx)(_, {}),
                        (0, _.jsx)(_, {
                          cart: _.data,
                          bMinimalDisplay: !0,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const {
              lineItem: _,
              storeItem: _,
              validatedItem: _,
              availableCoupons: _,
              children: _,
            } = _,
            [_] = (0, _._)(),
            _ = _ === "gifts" && !!_.flags.is_gift,
            _ = !!_.length;
          return (0, _.jsxs)(_._, {
            children: [
              (0, _.jsxs)(_._, {
                children: [
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      storeItem: _,
                      lineItem: _,
                    }),
                ],
              }),
              _ &&
                (0, _.jsx)(_, {
                  storeItem: _,
                  lineItem: _,
                  couponApplied: _?.coupon_applied,
                  availableCoupons: _,
                }),
            ],
          });
        }
        const _ = (0, _._)(function (_) {
          const { strEstimatedTotal: _, bCartIncludesGifts: _ } = _,
            { bButtonDisabled: _, nextStep: _, bGuestAvailable: _ } = _(_);
          return (0, _.jsxs)("div", {
            className: _().CartSummaryCtn,
            children: [
              (0, _.jsx)(_._, {
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().EstimatedTotalFlex,
                  _().SummaryMarginBottom,
                ),
                children: [
                  (0, _.jsx)("div", {
                    className: _().CartLabelText,
                    children: (0, _._)("#Cart_EstimatedTotal"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().CartValueText,
                    children: _,
                  }),
                ],
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().CartNoteText, _().SummaryMarginBottom),
                children: (0, _._)("#Cart_Note_SalesTax"),
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_, {
                    bDisabled: _,
                    nextStep: _,
                    bGuestOption: _,
                  }),
                  (0, _.jsx)(_, {
                    disabled: _ || _,
                  }),
                  (0, _.jsx)(_, {
                    bDisabled: _,
                  }),
                ],
              }),
            ],
          });
        });
        function _(_) {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _.isSuccess && _.data.cart_items.every((_) => !_.errors),
            [_, _] = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_.data),
            _ = (0, _._)(_.data) || _,
            _ =
              _.isSuccess &&
              _.data.line_items.some(
                (_) =>
                  _.flags?.is_gift &&
                  !_.gift_info?.accountid_giftee &&
                  (!_.gift_info?.email_giftee ||
                    !_._.validateEmail(_.gift_info?.email_giftee)),
              );
          let _ =
            _._.logged_in &&
            ((_ === "initial" && !_ && !_) ||
              (_.isSuccess && _.data.line_items.length == 0));
          _ = _ || (_ === "gifts" && (!_ || _));
          let _;
          return (
            _ && _ == "initial" && !_
              ? (_ = "gifts")
              : _._.logged_in
                ? (_ = "checkout")
                : (_ = "login"),
            {
              bButtonDisabled: _,
              nextStep: _,
              bGuestAvailable: _,
            }
          );
        }
        function _(_) {
          const {
            bButtonDisabled: _,
            nextStep: _,
            bGuestAvailable: _,
          } = _(_.bCartIncludesGifts);
          return (0, _.jsx)(_, {
            bDisabled: _,
            nextStep: _,
            bGuestOption: _,
          });
        }
        function _(_) {
          const { bDisabled: _, nextStep: _, bGuestOption: _ } = _,
            _ = _(),
            _ = (0, _._)(),
            [_, _] = (0, _._)(),
            _ = (0, _._)();
          let _ = _.kFb;
          (0, _._)(_) && (_ = _.gid);
          const _ = () => {
              switch (_) {
                case "login":
                  if (_ != _.kFb && _) {
                    const _ =
                      _._.STORE_CHECKOUT_BASE_URL +
                      "checkout?purchasetype=self&cart=" +
                      _;
                    (0, _._)(_, _);
                  } else (0, _._)();
                  break;
                case "gifts":
                  _("gifts"), _.push(_._.ShoppingCartGifts());
                  break;
                case "checkout":
                  location.href = _;
                  break;
                default:
                  (0, _._)(_, "unhandled step");
              }
            },
            _ = _(_),
            _ = (0, _._)(
              _().CartSummaryBtn,
              _().SummaryMarginBottom,
              _().Button,
            );
          return (0, _.jsx)(_._, {
            disabled: _,
            className: _,
            onClick: _,
            children: _,
          });
        }
        function _() {
          const _ = `${_._.STORE_BASE_URL}subscriber_agreement/`;
          return (0, _.jsxs)(_._, {
            className: _().LicenseContextCtn,
            children: [
              (0, _.jsx)("img", {
                src: `${_._.IMG_URL}/checkout/computer.png`,
                alt: "",
              }),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("div", {
                    className: _().LicenseTitle,
                    children: (0, _._)("#Cart_LicenseContextTitle"),
                  }),
                  (0, _.jsx)("div", {
                    className: _().LicenseLink,
                    children: (0, _._)(
                      "#Cart_LicenseContextLink",
                      (0, _.jsx)("a", {
                        href: _,
                        children: (0, _._)("#Cart_LicenseContextSSA"),
                      }),
                    ),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { bDisabled: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(_.data?.family_groupid(), _, _._._),
            _ = () => {
              _.mutate(void 0, {
                onSuccess: () => {
                  location.href = `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`;
                },
              });
            };
          return _
            ? (0, _.jsx)(_._, {
                disabled: _,
                className: (0, _._)(
                  _().CartSummaryBtn,
                  _().SummaryMarginBottom,
                ),
                onClick: _,
                children: (0, _._)("#Cart_DeclinePurchaseRequest"),
              })
            : null;
        }
        function _(_) {
          return _ == "login"
            ? (0, _._)("#Cart_ContinueButton_Payment")
            : _ == "gifts"
              ? (0, _._)("#Cart_ContinueButton_Gifts")
              : _ == "checkout"
                ? (0, _._)("#Cart_ContinueButton_Payment")
                : ((0, _._)(_, "unhandled step"), "");
        }
        function _(_) {
          const { disabled: _ } = _,
            _ = (0, _._)().data?.family_groupid(),
            _ = (0, _._)(_, _._.country_code),
            [_, _] = (0, _._)(),
            [_, _] = _.useState(!1),
            _ = () => {
              !_ &&
                !_ &&
                (_(!0),
                _.mutate(void 0, {
                  onSuccess: () => {
                    window.location.assign((0, _._)(_));
                  },
                }));
            };
          return !_ && _ != _._.k_ENonGiftableItemPresent
            ? null
            : (0, _.jsxs)("div", {
                className: (0, _._)(
                  _().RequestPurchaseCtn,
                  _().SummaryMarginBottom,
                ),
                children: [
                  (0, _.jsx)(_._, {
                    disabled: _ || _ || !_,
                    className: (0, _._)(_().CartSummaryBtn),
                    onClick: _,
                    children: (0, _._)("#Cart_RequestPurchase"),
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      children: (0, _._)("#Cart_RequestPurchaseExplanation"),
                    }),
                  _ === _._.k_ENonGiftableItemPresent &&
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#Cart_RequestPurchaseNonGiftableItems",
                      ),
                    }),
                ],
              });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _(),
            _ = _();
          (0, _._)();
          let _ = null;
          return (
            _
              ? _.type == "replay"
                ? (_ = (0, _.jsx)(_, {
                    cartID: _,
                  }))
                : (_ = (0, _.jsx)(_, {
                    cartID: _,
                    ..._,
                  }))
              : (_ = (0, _.jsx)("div", {
                  className: _()(_().ShoppingCartPage, _().CartPagePlaceholder),
                  children: (0, _.jsx)(_._, {
                    position: "center",
                    msDelayAppear: 250,
                  }),
                })),
            (0, _.jsxs)(_.Fragment, {
              children: [(0, _.jsx)(_, {}), _],
            })
          );
        }
        function _() {
          return (0, _._)(), (0, _._)(), null;
        }
        function _(_) {
          const { cartID: _, initialStep: _ = "initial" } = _,
            [_, _] = _.useState(_),
            _ = (0, _._)()?.data?.line_items.length || 0,
            _ = _(_, _);
          return (0, _.jsx)(_, {
            cartID: _,
            title: _,
            step: _,
            onStepChange: _,
            children: ({ cart: _, validatedCart: _, bCartIncludesGifts: _ }) =>
              (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      isCartEmpty: !_ || _.line_items.length === 0,
                      cart: _,
                      bCartIncludesGifts: _,
                    }),
                  }),
                  (0, _.jsx)(_._, {
                    children: (0, _.jsx)(_, {
                      cart: _,
                      validatedCart: _,
                    }),
                  }),
                ],
              }),
          });
        }
        function _(_) {
          const { cartID: _ } = _;
          return _._.logged_in
            ? (0, _.jsx)(_, {
                cartID: _,
                title: (0, _._)("#Cart_Replay_SavedCart"),
                step: "initial",
                onStepChange: () => {},
                children: () =>
                  (0, _.jsx)(_, {
                    children: (0, _._)("#Cart_Replay_Instructions", 72),
                  }),
              })
            : (0, _.jsx)(_._, {});
        }
        function _(_) {
          const {
              children: _,
              cartID: _,
              title: _,
              step: _,
              onStepChange: _,
              ..._
            } = _,
            _ = _.useRef(null);
          return (
            _.useEffect(() => {
              _.current && _.current.NavTree()?.Activate(!0);
            }, []),
            (0, _.jsx)(_._, {
              controller: "cart",
              method: "display",
              submethod: _,
              children: (0, _.jsxs)(_._, {
                cartID: _,
                step: _,
                setStep: _,
                ..._,
                children: [
                  (0, _.jsx)(_, {}),
                  (0, _.jsxs)(_._, {
                    className: _().ShoppingCartPage,
                    navRef: _,
                    children: [
                      (0, _.jsx)(_, {
                        step: _,
                        title: _,
                      }),
                      (0, _.jsx)("div", {
                        className: _().ShoppingCartHeader,
                        children: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { step: _, title: _ } = _,
            _ = _(_);
          return (0, _._)()
            ? null
            : (0, _.jsxs)("div", {
                className: _().ShoppingCartBreadcrumbs,
                children: [
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL,
                    children: (0, _._)("#Cart_Bradcrumb_Home"),
                  }),
                  " ",
                  _,
                  " ",
                  (0, _.jsxs)("span", {
                    className: _().CurrentBreadcrumb,
                    children: ["> ", _],
                  }),
                ],
              });
        }
        function _() {
          const [_, _] = _.useState(!1);
          return (
            _.useEffect(() => {
              _ || (0, _._)().then(() => _(!0));
            }, [_]),
            _
          );
        }
        function _(_, _) {
          return _ === "gifts"
            ? (0, _._)("#Cart_GiftOptions")
            : _ > 0
              ? (0, _._)("#Cart_YourShoppingCartLineItems", _)
              : (0, _._)("#Cart_YourShoppingCart");
        }
        function _(_) {
          return _ === "gifts"
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  "> ",
                  (0, _.jsx)("a", {
                    href: _._.STORE_BASE_URL + "cart",
                    children: (0, _._)("#Cart_YourShoppingCart"),
                  }),
                ],
              })
            : null;
        }
        function _(_) {
          const _ = _();
          return (0, _.jsx)("div", {
            className: _().BackgroundImage,
            style: _
              ? {
                  backgroundImage: `url("${_}")`,
                }
              : null,
          });
        }
        function _() {
          const _ = _.useRef(""),
            _ = (0, _._)(),
            { data: _ } = (0, _._)(),
            _ = !_.current;
          let _ = _._,
            _ = _._._;
          if (_ && _ !== void 0) {
            const _ = _.data?.line_items || [],
              _ = _.length
                ? _.reduce((_, _) => (_.time_added > _.time_added ? _ : _))
                : null;
            (_ = _?.bundleid || _?.packageid || _._),
              (_ = _ === _?.bundleid ? _._._ : _._._);
          }
          const [_] = (0, _._)(_, _, _._);
          if (_ && _) {
            const _ = _._.Get(),
              _ = _.GetIncludedAppIDs();
            for (const _ of _) {
              const _ = _.GetApp(_);
              if (!_) continue;
              const _ = _.GetAssets().GetPageBackgroundURL();
              if (_) {
                _.current = _;
                break;
              }
            }
          }
          return _.current;
        }
        function _() {
          const _ = (0, _._)();
          return (0, _.useMemo)(
            () =>
              (0, _._)(
                new URLSearchParams(_.search).get("gidreplay") ?? void 0,
              ),
            [_.search],
          );
        }
        function _(_) {
          const { isCartEmpty: _, cart: _, bCartIncludesGifts: _ } = _,
            _ = () => (window.location.href = _._.STORE_BASE_URL);
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !_ &&
                (0, _.jsx)(_, {
                  cart: _,
                }),
              (0, _.jsxs)(_._, {
                "flow-children": "row",
                className: _().CartFooter,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().NavButtons,
                    children: [
                      (0, _.jsx)(_._, {
                        onClick: _,
                        className: _().Button,
                        children: (0, _._)("#Cart_ContinueShopping"),
                      }),
                      (0, _.jsx)(_, {
                        bCartIncludesGifts: _,
                      }),
                    ],
                  }),
                  !_ && (0, _.jsx)(_, {}),
                ],
              }),
            ],
          });
        }
        function _() {
          const _ = (0, _._)(),
            _ = () => _.mutate();
          return (0, _.jsx)(_, {
            onClick: _,
            children: (0, _._)("#Cart_RemoveAll"),
          });
        }
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "tVR7nCVynuzImpvF9viMI",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          SnoozeContainer: "_1DsumfIa3MlkzUV9EXY5W9",
          SnoozeZ: "_2n0EiKMGRP-r_BI5tDtttu",
          none: "T3Fb5KTXwIHM2B-ThTvEs",
          Medium: "_1iYPlsChibPe7Ga9B3c5Wm",
          Large: "_3BESV4eFnr4EnaSaJSdk6T",
          Dim: "rpZ9bKyFXYvNQvgtKn5GV",
          _: "_2hnF3M_l4xdIdQ4CkN7LYB",
          _: "VmQTOrz5MPOWte5C9K7YS",
          _: "_29mtadjX8N6pRn5TX1nA0o",
          hoverParent: "_3-8cByP2koYzHwgZqjvFA",
          animating: "_2rXc7hLg6bohWZ-JpRcYEB",
          Snoring: "_38wIVgo1WjvGqL5ZsmpmiX",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          statusAndName: "_4ZTzGZ5TTgFyfw1DcXLXS",
          threeLines: "_1oYSXGjBe7QctQ1ikLpCMm",
          blocked: "VTxPkslK1CSpKNFMgKg7d",
          richPresenceLabel: "_2Ri005Wg_uXDTa71kdRbcN",
          playerName: "nOdcT-MoOaXGePXLyPe0H",
          playerNickname: "_2saJTAocZ9TnYXTGvnqUMC",
          EllipsisName: "_1valFgvEGxquAi_2IrAKqO",
          DisableColoring: "_3oDmKGyTBBm7i4DULjwYcC",
          playerNicknameBracket: "_3XEmWmfQy7gbYJ4KJ1N9tp",
          richPresenceContainer: "_3sxE7F1LV2IcSX68YsH9dI",
          gameName: "_1cB0qtF0paHWWyj1XNcnbG",
          dropPadding: "_3tEPYJ6xjX0d6akU-hhrs4",
          NoMask: "_2dAj6KfWRAxoYPr6tgXd6t",
          twoLine: "_1BbOegz8bYL7iPzgYpOgQI",
          DNDContainer: "_3IswZMeeD6ORStUjgv6Xh8",
          partyBeaconJoin: "_3BnDsXrefFJrt_8frF2wvB",
          hidePersona: "_3ZJkOzmqed_i-p74uF3hus",
          compactView: "_3bbRZyUiK-bfc5Qov6xukI",
          noContextMenu: "_1JE5G7_FNm2SRDEEnOWMVv",
          gameIsPrivateIcon: "_2gBKQXiTBLjeVVaqvc5QVh",
          PendingPersona: "_2sxXnGfkPxNgR6Lk1-SmfQ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PersonaStatusIcon: "KxAI_M9gWx3OnKSshHOs6",
          MobilePhoneIcon: "_1iRFj5lJrMqMnRb3GZYPSw",
          SteamDeckIcon: "_2oLqcfqHHKKAK0WfzjXMg_",
          VRIcon: "_368tz9TSOLGiG2mNMLScMz",
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
          EventTimeSection: "_3HyTVTASSmLacvaM964sgu",
          EventTimeTitle: "_2lG5hFYhu9PGPn6RoFeQOL",
          EventVisibilityItem: "_1she-lvNiCP3ASjTnl4q7x",
          EventEditorInputPaneContainer: "_1fCy4cz5Hyj9wDivcVseuc",
          TimeWidth: "_3JGsBe8Ou5QGqfihv0OPed",
          EventPublishTimeCtn: "_2QIVvn2p9gUwsAlifi-nkM",
          DateWidth: "_2P2kw0vHZogg7Ny7cAjQBo",
          PacificTimeHint: "_18FxDrpsfO5Tt8EFui49hV",
          TimeZone: "-x3Rw6W2fJfWRMs7vKr1I",
          ClearButton: "TzhaDn0jN2ILks403xqXQ",
          InputBorder: "_1_H1sN2GVTzxSaz55gv03s",
          TimeBlock: "_2xLBsAMYVDoygyWbl2YIzI",
          TimeRowContainer: "BWmgg29ZeDbO6oj7Z1U7T",
          TimeRowDropDown: "_3ECiyuGLUqPzuS1hKCdfDm",
          EndDateAmountCtn: "_1BIlZEGSO_4tw5Lmc1Kkbf",
          EndRound: "jwuNowbLB28M6nkqFkF_C",
          VisibilityItemList: "_3B0QM3cOEqER2AD2Y85NFy",
          VisibilityItems: "_1WleIEEiF-9nJ57tLWkRmS",
          EventEditorVisibilityCtn: "_4gWwydbAbp2t1NCeW9LLV",
          DateErrorCtn: "_1Ao_g72kBAdoOo0lGUG7Mr",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CartCreatorCtn: "_2HG7VOroS8aHSg-W3fPyTt",
          Title: "_307GrwtjhKkXh5dUC5KjUv",
          Description: "_3YGQuryhG_j0UPSIaC_7ul",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_3s8SimT1ZQwPeXXdDFPQLK",
          TradingCardContainer: "_2haWAmlu7TDqdL95bf4G8g",
          EarnedMessage: "_2p5xYmfnLWerjNkmBDfZXp",
          Right: "_18eO4-XadW5jmTpgdATkSz",
          ProgressSection: "_2M_5i3fmNkCv4pCoMmk1Os",
          Progress: "lf5WnbH_ohSVbUnvd3Nf2",
          ProgressRail: "_3TjWhPYAqbU3Hrzm6Iq6il",
          IneligbleList: "_1r6njhPeny9XyTQKt2-__7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "qp08vFwlN2mRCsja6T_-g",
          CartUpsellArea: "_2rkDlHZ2yi-tFtDk4-CC4U",
          CartUpsellTitle: "_2dxsG5kVzdAeX8R0mGOiV8",
          UpsellRow: "_24yiwSg4qoT0NRBSlWoUXw",
          Specials: "_2-sCaPlOkBP6wsNVrDNHvZ",
          Loading: "pUmkjugwizSD0CopYMP1P",
          DailyDeals: "rpifv8i-Dj8KDO5qKGvWG",
          Spotlights: "udcFpqnwSDcMv_byU2oQc",
        };
      },
      chunkid: (module) => {
        module.exports = {
          CouponPickerRowGlow: "_2ETXQ6ojtTNSbACqQ2o0Yv",
          CouponPickerRow: "_3wfeHGptWCHP2ctMNwtAr8",
          ModifyLink: "_3JmdOP-Eoam3irQDjytJ9V",
          CouponRepresentation: "_1_LYYN59DADLVYtqwZYjSm",
          PackageName: "_3L1DF5dTgbrn6BlQIgv8c-",
          CouponListContainer: "ir0tpMmQQazulD77PH8DZ",
          CouponListItem: "_3pw4q_MAfhjbHBkGJVrYyz",
          Disabled: "_1GFD8zuMK_JuYQUQhOo4zz",
          Image: "_2gY_V_NV2khWDAjW5A9Nmd",
          Info: "_1Je1cc8-t1TZpSr6VwGwbN",
          Discount: "_3KPbt6pUHnz1M3cEORSHvV",
          CouponInfoText: "FicMnlG4nr7BEujcPpbGp",
          Checkbox: "_265qJZDbyz2JxqvT15KpRr",
          Hidden: "_21w270Ne6__P31083H0FFV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GiftFormDivider: "_1mAU7zkVivAPGFPI3maedz",
          GiftFormSection: "_1tguxhk732P4gi865oLjSE",
          SignInLink: "_3PPF6YhUS0OHDhePQ8H8GV",
          FormTextLabel: "_1TulC_KnETCU3Ks4Y1hQ70",
          FullWidth: "_1NKGWg4uzU98wSFcgJ4tz1",
          FormTitle: "NYKHMrCLjXgs0HgP8G8ei",
          RedText: "_1Ja8Ra-vrBec1_MVpbvrL",
          GiftNoteInput: "_3wPcWGmcqJzbUXHRTPYsXa",
          GiftRecipientPickerModal: "_3R_gixvbcQCJxxRTmCvpJw",
          GiftFriendsListCtn: "_321Woxp4ONn3k90_NLayE0",
          GiftRecipientPickerFormCtn: "_2SDa5ofHp4X7qHQE540cIS",
          GiftFriendsInput: "_1OuNJQWR-7lSdtgyJf69uF",
          GiftRecipientSaveBtn: "_18bhpboMEhi47IMCRQt-2s",
          GiftPickerFriendBlock: "_3qPIR-iXdtj8oUzr8cH1Ey",
          FriendAvatar: "_1AeyMd0eAcDoRyiR0KkOwC",
          Focused: "_11n414df5ioq8YLpNJuHpM",
          Disabled: "_3jwhGaqW0tVwkzg9eXjJWZ",
          Selected: "_1Wx7OLK94f5EXTrnc8MqUs",
          PersonaName: "_1ki9msaNQoGECm27Yz5YGX",
          FriendsGiftLabel: "_3FPeG6FVHnapQP5UKhrMvC",
          OwnsGame: "YK5pj3LG0Q81ZMKdO9Mcc",
          OnWishlist: "_28yZdTwE0gz4jOV6olyg7F",
          GiftFormRecipient: "_2bnjZDtqxcOZI3eITR0MuL",
          LinkButton: "_12zYFuKO2U-1QfeVxlGfwF",
          GiftDatePicker: "VZsqgN_QGXQcRsD6OgscT",
          ScheduleGiftBtn: "_3gADDjjeuuq4YHM8O1IeiQ",
          GiftScheduleIcon: "_742UkQg_TM_Sdf4w5Ye2a",
          GiftRadioLabel: "_3IlfjNwkM2GwzkZyD0llva",
          GiftRadioRow: "RMDo0KSLaIgeffA12m9Ln",
          GiftSignatureInput: "_3tP7DCVH8b-Vyu5ig2fTAk",
          ScheduleError: "_3y4BqvBTwDLWUl1TCNqWp9",
          LoadingError: "_35a12Zg31sBh2Lj4ClSTRz",
          GamepadTimePickerRow: "_2EZzsNeqqWMVcuzawVZc56",
          TimezoneDisplay: "_1zgxnwJ3wM_SzElTI5DOyw",
          FamilyGiftNotice: "_1B5Eew-T7ehFeKRYrle_-l",
          GiftNonFriendWarning: "_2RHycas9bwPdkNJ4QSaMnr",
          GiftEmailInput: "vsYKgPb-InpQZyJ4AoP2m",
          GiftEmailWarnings: "_37q9WvJ0H38LXVjg2BQI1w",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strMaxCartPartResponsiveWidth: "840px",
          CartCard: "_2w0ZEap3hR1c0K0_DxJDdN",
          ShoppingCartPage: "_22xtsolKcQit92o-LBeRWD",
          CartCheckboxNoMargin: "_1S9a0tZYJv0d4x3-DrxbuS",
          CartPagePlaceholder: "_3Hr6r9HTC7jT51-4vf_X8B",
          ShoppingCartHeader: "bCGAC51za6R_thjPd7_vw",
          ShoppingCartCtn: "_1jqUY_WcPgZnIOE-d9x7wc",
          ShoppingCartLeftCol: "_17GFdSD2pc0BquZk5cejg8",
          ShoppingCartRightCol: "_3HIve50RR17shqpJqmrUps",
          LoadingThrobber: "eDdFpOTz0O9U7xBshZJUx",
          CartRightColStickyCtn: "_1bCdGv5zX6cYDovFfcBfdg",
          CartSummaryCtn: "_2bIzQo07mxubFvscA8RIA8",
          EstimatedTotalFlex: "_2DjadWLFH3keW9rGWZKxSk",
          SummaryMarginBottom: "qV80oahDZsbXiS6lIDLND",
          LicenseContextCtn: "jY9l4aHTdQLHeTWfPonTr",
          LicenseTitle: "p8XFGmprI4snkQjm11Pf2",
          LicenseLink: "_2Wg3oyIvxKKM_o6q7rXdc5",
          ResponsiveShoppingCartSummary: "dpVdC9qAMjdzrN7VWFria",
          RequestPurchaseCtn: "_2jup-7OkSAzTBG-K9r9OCX",
          CartNoteText: "_31DQWsrdb_9oV-vMOaaPqI",
          CartLabelText: "_3ayrhzEm-T_IRhWeQ4HFxr",
          CartValueText: "_2WLaY5TxjBGVyuWe_6KS3N",
          ShoppingCartBreadcrumbs: "_2FKdJT3nRLNX_ue4Zj-qdK",
          CurrentBreadcrumb: "_3TtUDn-J9j6rkwHqjT-i4Y",
          CartFooter: "_1Sdz1qnoKoD9eEPpC340Yj",
          NavButtons: "pp99Du2IR2EJ9UsjKcrRQ",
          Button: "_1rk1xUIAHMcMMDm4jz3MOM",
          CartSummaryBtn: "_1OKOHubCISYxpyNw0_nSgh",
          BetaNotice: "_1DTyDw3G0f4gmhjAvr_MGb",
          Text: "I4Bz94kh1lGOH1KrPzxzk",
          BackgroundImage: "FaiD8bJRAZ-HoNo0VvLOO",
        };
      },
      chunkid: (module) => {
        module.exports = {
          UserCountrySelector: "_1G8JdfmCwhonn-pZk-tfwP",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJJREFUeNqkUz1PAkEQfStggjESejU0GozlGqn8SGywkYIYY0IsaLCwIBTQUN5fMLGm8S8QSWwslVAYjAlUBEJDhCgWwp3nzN6eHqIVl8zN7rx5b+dm9oRt25jlmcOMj59f10JAkPcBcXIGWdECyqYn6TfGdZ9S9d4K4gQYx4WCtJzE+G/sKJudwpQABUGnGSf5vKzX60jmctL8SYzz+iCdls1mEzuplMIsLSC4iSUh1ClUlpHIZGStVkM0GsVNqVRlIJZIyG63i1AohMdKpUrZRQqXz4j7LWA7VSiR/WRSNhsNRRgOh+i02wgGg3hrtRSZelLmI6cExs7nKJGVtTX50uupMn0+H157PUWmZpYDXLoWUFPo6MC87jivx4MBFtxOWZYS11VipNdT98DWDVsPh2XQNLFIMdc4xpg9OZ3JMdIpRowSXVKt36+yuXvGxn+N0XS+3zj0kG+JSPEi261H5FCLmN9lUyNWyZ+Qag54eA6Hbfa8j1A88g+2qrlqCkKIZdovbAG7m8D5E3B5D9xR7IPsk/u7DextABd14OrBwd6J23YFligQ0IPwXE7lbedXUAPya5yHMiLuq5j1d/4SYAAj3NATBGE4PgAAAABJRU5ErkJggg==";
      },
    },
  ]);
})();
