"use strict";
(self.webpackChunklegacy_web = self.webpackChunklegacy_web || []).push([
  [616],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        InitializeGamepadNavigation: () => _,
      });
      var _ = __webpack_require__("chunkid"),
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
        _ = __webpack_require__._(_);
      function _(_) {
        let _ = 0;
        _.children().each(function () {
          const _ = _()(this),
            _ = _.css("zIndex");
          "auto" === _
            ? _.css("zIndex", 0)
            : isNaN(parseInt(_)) || (_ = Math.max(_, parseInt(_)));
        });
        const _ = _()("<div/>", {
          style: `position: absolute; pointer-events: none; top: 0; left: 0; z-index: ${(_ || 100) + 1}; width: 0; height: 0; padding: 0; margin: 0; background: none; overflow: visible; display: block;`,
        });
        let _,
          _,
          _ = 0,
          _ = 0,
          _ = 0,
          _ = 0;
        _.prepend(_);
        const _ = (_) => {
            const _ = _.GetBoundingRect(),
              _ = _[0].getBoundingClientRect();
            return {
              left: _._ - _._ - 0,
              top: _._ - _._ - 0,
              height: _.height,
              width: _.width,
            };
          },
          _ = (_, _) => {
            (_ = _.left),
              (_ = _.top),
              (_ = _.height),
              (_ = _.width),
              _.css({
                left: _,
                top: _,
                height: _,
                width: _,
              });
          },
          _ = (_) => {
            if ((_ && (_(), (_ = void 0)), _ && _.BWantsFocusRing())) {
              let _ = _()("<div/>", {
                  "data-focusring": !0,
                  style: "position: absolute; pointer-events: none; ",
                  class: _().FocusRing,
                }),
                _ = _(_);
              _(_, _),
                __webpack_require__.append(_),
                (_ = () =>
                  ((_, _) => {
                    if (_ && _.BWantsFocusRing()) {
                      let _ = _(_);
                      (_.left == _ &&
                        _.top == _ &&
                        _.height == _ &&
                        _.width == _) ||
                        _(_, _);
                    }
                  })(_, _));
              let _ = window.setInterval(_, 200),
                _ = _.Tree.OnActiveStateChangedCallbacks.Register((_) => {
                  _ ? _.show() : _.hide();
                });
              _ = () => {
                window.clearInterval(_),
                  _.remove(),
                  (_ = void 0),
                  _.Unregister();
              };
            }
          };
        return {
          OnBlur: () => _(null),
          OnFocus: (_, _) => _(_),
          OnFocusChange: (_, _, _) => _(_),
          OnForceMeasureFocusRing: () => _ && _(),
        };
      }
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _ ? Function("event", _) : null;
      }
      function _() {
        return !0;
      }
      function _(_) {
        return "BlockMovement" == _
          ? _
          : "RepeatNavigationBoundary" == _
            ? _._
            : _
              ? Function("detail", _)
              : null;
      }
      function _(_) {
        this.click(), _.stopPropagation();
      }
      function _(_) {
        _()(this).find('a, input[type="checkbox"]')[0].click();
      }
      function _(_, _) {
        _ ? _()(_).addClass("gpfocus") : _()(_).removeClass("gpfocus");
      }
      function _(_) {
        const _ = _.currentTarget;
        if (_.defaultPrevented || !_._(_)) return !1;
        const _ = _.detail.is_repeat ? 4.5 : 3.33,
          _ = "smooth",
          _ = _.ownerDocument,
          _ = _.defaultView;
        switch (_.detail.button) {
          case _._.DIR_UP:
            if (_.scrollY > 3)
              return (
                (0, _._)(_, {
                  top: -_.innerHeight / _,
                  behavior: _,
                }),
                !0
              );
            break;
          case _._.DIR_RIGHT:
            if (_.scrollX + _.innerWidth < _.body.clientWidth - 3)
              return (
                (0, _._)(_, {
                  left: _.innerWidth / _,
                  behavior: _,
                }),
                !0
              );
            break;
          case _._.DIR_DOWN:
            if (_.scrollY + _.innerHeight < _.body.clientHeight - 3)
              return (
                (0, _._)(_, {
                  top: _.innerHeight / _,
                  behavior: _,
                }),
                !0
              );
            break;
          case _._.DIR_LEFT:
            if (_.scrollX > 3)
              return (
                (0, _._)(_, {
                  left: _.innerWidth / _,
                  behavior: _,
                }),
                !0
              );
        }
        return !1;
      }
      var _ = __webpack_require__("chunkid");
      const _ = !1;
      function _(_) {
        const { name: _, root: __webpack_require__, navState: _ } = _;
        _
          ? (_ && console.log(`Restore ${_} history snapshot ${(0, _._)(_)}`),
            (0, _._)(__webpack_require__, _),
            __webpack_require__.Tree.DeferredFocus.Reset())
          : (_ && console.log(`No focus state in history for ${_}`),
            __webpack_require__.Tree.DeferredFocus.ExecuteQueuedFocus());
      }
      function _(_, _) {
        const _ = window.history.state;
        return {
          name: _,
          root: _,
          navState: _?.[_],
        };
      }
      const _ = new (__webpack_require__("chunkid")._)("FocusNavigation").Debug;
      var _;
      !(function (_) {
        (_[(_.Unknown = 0)] = "Unknown"),
          (_[(_.NotNeeded = 1)] = "NotNeeded"),
          (_[(_.InReactTree = 2)] = "InReactTree");
      })(_ || (_ = {}));
      const _ = new _._();
      let _,
        _ = !1,
        _ = null;
      function _(_) {
        _ ||
          ((_ = new _._()),
          (_ = new _._(_)),
          _.RegisterForFocusChanged(_.GetDefaultContext()),
          _.Init(window),
          _.BIsGamepadInputExternallyControlled() || _.RegisterInputSource(_),
          (_.BIsGamepadInputExternallyControlled() ||
            navigator.userAgent.includes("Valve Steam Gamepad")) &&
            _.RegisterInputSource(new _._(window)),
          (function (_) {
            _()("html").addClass("gpnav_active");
            const _ = _()("body"),
              _ = _.GetDefaultContext(),
              _ = _.NewGamepadNavigationTree(_, "legacy", void 0);
            _()(window)._("touchstart mousedown focus", () =>
              __webpack_require__.OnActivate(window),
            ),
              _()(window)._("blur", () =>
                __webpack_require__.OnDeactivate(window),
              );
            const _ = _(_);
            (_.Root.m_FocusRing = _),
              _.Root.SetProperties({
                scrollIntoViewType: _._.NoTransformSparseContent,
              }),
              _.SetIsEnabled(!0),
              _.OnActiveStateChangedCallbacks.Register((_) => {
                const _ = _.GetLastFocusedNode();
                _?.Element && _(_.Element, _);
              }),
              Object.assign(window, {
                legacyWebFocusNavController: _,
                __nav_tree_root: _,
                __virtual_keyboard_client: _,
              }),
              _.set(document.body, _.Root),
              _(document.body, _.Root),
              _(void 0, !0),
              _.RegisterGamepadNavigationTree(_, window),
              __webpack_require__.OnMount(window),
              window.document.hasFocus() &&
                __webpack_require__.OnActivate(window);
            _()(document.body)._("vgp_onbuttondown", function (_) {
              _.OnRootButtonDown(_.originalEvent);
            }),
              (0, _._)(document.body, _);
            new MutationObserver(_).observe(document.body, {
              childList: !0,
              subtree: !0,
            }),
              (0, _._)(!0),
              (function (_, _) {
                if (
                  (_.Tree.DeferredFocus.SuppressFocus(),
                  window.addEventListener("popstate", () => _(_(_, _))),
                  window.history.state?.notify_focus_restore_ready)
                ) {
                  _ &&
                    console.log(
                      "waiting to restore focus until focus_restore_ready is sent",
                    );
                  var _ = _(_, _);
                  window.addEventListener("focus_restore_ready", function (_) {
                    _ && console.log("focus_restore_ready received"),
                      window.setTimeout(function () {
                        _(_);
                      }, 100);
                  });
                } else
                  _ && console.log("immediately restoring focus from history"),
                    _(_(_, _));
                !(function (_, _) {
                  _.Tree.WindowContext.FocusChangedCallbacks.Register(() => {
                    _ &&
                      console.log(
                        `Recording nav state for ${_}: ${(0, _._)((0, _._)(_))}`,
                      ),
                      window.history.replaceState(
                        {
                          ...window.history.state,
                          [_]: (0, _._)(_),
                        },
                        null,
                      );
                  });
                })(_, _);
              })("legacy_web_root", _.Root),
              Object.assign(window, _),
              window.dispatchEvent(new CustomEvent("vgp_gamepadnavready"));
          })(_)),
          (_ = !0);
      }
      function _(_) {
        for (const _ of _) {
          const _ = [],
            _ = [];
          (0, _._)(
            _,
            (_) => _.push(_),
            (_) => __webpack_require__.push(_),
          ),
            _.length && _(_()(_)),
            _.length && _(_()(_));
        }
      }
      const _ = new WeakMap(),
        _ = new WeakMap();
      let _ = [];
      function _(_, _) {
        if (_ instanceof _._) {
          const _ = _.GetDepth();
          _[_] || (_[_] = []), _[_].push([_, _]);
        }
        _.set(_, _);
      }
      function _(_, _) {
        const _ = _.has(_) ? _.get(_) : [];
        __webpack_require__.push(_), _.set(_, _);
      }
      function _(_) {
        return "jquery" in _ ? _.get(_[0]) || _.Unknown : _.get(_) || _.Unknown;
      }
      function _(_) {
        return "jquery" in _ ? _.has(_[0]) : _.has(_);
      }
      function _(_) {
        _.find("*")
          .addBack()
          .each(function () {
            _.get(this)?.forEach((_) => _()),
              _.delete(this),
              _.delete(this),
              _()(this).attr("data-nav-modal") && _(this);
          });
      }
      function _(_, _ = !1) {
        performance.now();
        const _ =
          "a,button,textarea,input:not(input[type=hidden]),label:not([for]),[data-panel],[data-react-nav-root],[data-nav-modal]";
        _()(_, _)
          .addBack(_)
          .each(function () {
            var _;
            _((_ = this)) || _(_);
          }),
          (function () {
            for (let _ = _.length - 1; _ >= 0; _--)
              if (_[_])
                for (let [_, _] of _[_]) {
                  _(_, _.Tree.RegisterNavigationItem(_, _));
                  const _ = _()(_).data("navTreeModal");
                  _ &&
                    (_()(_).data(
                      "unregisterNavTree",
                      _.RegisterGamepadNavigationTree(_, window),
                    ),
                    _.Activate(!0));
                }
            _ = [];
          })();
      }
      function _(_) {
        const _ = _()(_.Element);
        return (
          !_.data("gpFocusDisabled") &&
          !(!_._(":visible") || "hidden" == _.css("visibility")) &&
          (0 != _.outerWidth() ||
            0 != _.outerHeight() ||
            "hidden" !== _.css("overflow"))
        );
      }
      function _(_) {
        const _ = _()(_),
          _ = _(_);
        if (_ instanceof _._ || _ == _.InReactTree)
          return _(_, _.InReactTree), _.InReactTree;
        const _ = _.Tree;
        let _,
          _ = _.data("panel") || {},
          _ = _;
        if (
          (_.attr("data-nav-modal")
            ? (_ = (function (_, _) {
                const _ = _.NewGamepadNavigationTree(
                    _.GetDefaultContext(),
                    "modal_dialog",
                    _,
                  ),
                  _ = _(_()(_));
                return (
                  (_.Root.m_FocusRing = _),
                  _.Root.SetProperties({
                    focusableIfEmpty: !0,
                  }),
                  __webpack_require__.SetModal(!0),
                  _()(_).data("navTreeModal", _),
                  _(_, _.Root),
                  _.Root
                );
              })(_, _))
            : _.data("reactNavRoot")
              ? ((_ = new _._(_.data("reactNavRoot"), _)), (_ = void 0))
              : (_ = _.CreateNode(_, _.m_FocusRing)),
          "A" == _.tagName || "BUTTON" == _.tagName || "LABEL" == _.tagName)
        )
          (_.focusable = _.focusable ?? !0),
            (_.clickOnActivate = _.clickOnActivate ?? !0);
        else if ("INPUT" == _.tagName)
          switch (((_.focusable = _.focusable ?? !0), _.getAttribute("type"))) {
            case "radio":
            case "checkbox":
              _.clickOnActivate = _.clickOnActivate ?? !0;
              break;
            case "text":
            case "password":
              _.enableVirtualKeyboard = _.enableVirtualKeyboard ?? !0;
          }
        else
          "TEXTAREA" == _.tagName &&
            ((_.focusable = _.focusable ?? !0),
            (_.enableVirtualKeyboard = _.enableVirtualKeyboard ?? !0));
        const _ = _["flow-children"];
        delete _["flow-children"];
        let {
            clickOnActivate: _,
            maintainX: _,
            maintainY: _,
            enableVirtualKeyboard: _,
            preferredChild: _,
            onOKActionDescription: _,
            onCancelActionDescription: _,
            onSecondaryActionDescription: _,
            onOptionsActionDescription: _,
            onMenuActionDescription: _,
            actionDescriptionMap: _,
            onOKButton: _,
            onCancelButton: _,
            onSecondaryButton: _,
            onOptionsButton: _,
            onMenuButton: _,
            onMoveUp: _,
            onMoveRight: _,
            onMoveDown: _,
            onMoveLeft: _,
            onGamepadDirection: _,
            bFocusRingRoot: _,
            type: _,
            ..._
          } = _,
          _ = _(_),
          _ = _(_),
          _ = _(_),
          _ = _(_),
          _ = _(_),
          _ = _(_);
        _ || (_ = "Panel"),
          "PanelGroup" == _ &&
            ({ onOKButtonHandler: _, onCancelButtonHandler: _ } = (function (
              _,
              _,
            ) {
              const {
                onOKButtonHandler: _,
                onCancelButtonHandler: _,
                navNode: _,
              } = _;
              return (
                (_.focusable = !1 !== _.focusable),
                {
                  onOKButtonHandler: (_) =>
                    !(
                      !_.BHasFocus() ||
                      !_.BChildTakeFocus(_._.GAMEPAD, _.detail.button)
                    ) ||
                    (!!_ && __webpack_require__(_)),
                  onCancelButtonHandler: (_) =>
                    !(
                      !_.BFocusWithin() ||
                      _.BHasFocus() ||
                      !_.BTakeFocus(_._.GAMEPAD, _.detail.button)
                    ) ||
                    (!!_ && _(_)),
                }
              );
            })(
              {
                onOKButtonHandler: _,
                onCancelButtonHandler: _,
                navNode: _,
              },
              _,
            )),
          _ && _(_[0], (0, _._)(_[0], _)),
          _ && _(_[0], (0, _._)(_[0], _)),
          _ && _ && _(_[0], (0, _._)(_[0], _)),
          _ && _ && _(_[0], (0, _._)(_[0], _)),
          _ && _ && _(_[0], (0, _._)(_[0], _)),
          _ && _(_[0], (0, _._)(_[0], _));
        const _ = (function (_, _, _, _) {
            const _ = {};
            return (
              _ && (_.onMoveUp = _(_)),
              _ && (_.onMoveRight = _(_)),
              _ && (_.onMoveDown = _(_)),
              _ && (_.onMoveLeft = _(_)),
              _
            );
          })(_, _, _, _),
          _ = _ ? (0, _._)(_) : _._.NONE;
        _ != _._.NONE && (_.layout = _),
          _
            ? (_.navEntryPreferPosition = _._.MAINTAIN_X)
            : _
              ? (_.navEntryPreferPosition = _._.MAINTAIN_Y)
              : _ && (_.navEntryPreferPosition = _._.PREFERRED_CHILD),
          _ &&
            (!1 !== _.focusable && (_.focusable = !0),
            _._("vgp_onok", "firstChild" === _ ? _ : _),
            _.attr("role") ||
              ("A" !== _.prop("tagName") && _.attr("role", "button")),
            _(_, () => {
              _.off("vgp_onok");
            })),
          _ &&
            (_._("vgp_onok.vkbindings", () => _.ShowVirtualKeyboard()),
            _._("click.vkbindings", () => _.ShowVirtualKeyboard()),
            _._("blur.vkbindings", () => {
              document.hasFocus() &&
                document.activeElement != _ &&
                _.HideVirtualKeyboard();
            }),
            _(_, () => {
              _.off(".vkbindings");
            })),
          _.focusable && void 0 === _.attr("tabIndex") && _.attr("tabIndex", 0),
          _.focusable && _.SubscribableHasFocus.Subscribe((_) => _(_, _)),
          _ &&
            ((_.m_FocusRing = _(_)),
            "static" == _.css("position") && _.css("position", "relative"));
        const _ = {
          fnCanTakeFocus: _,
          actionDescriptionMap: (0, _._)({
            onOKActionDescription: _,
            onCancelActionDescription: _,
            onSecondaryActionDescription: _,
            onOptionsActionDescription: _,
            onMenuActionDescription: _,
            actionDescriptionMap: _,
          }),
          ..._,
          ..._,
        };
        return _.SetProperties(_), _(_, _), _;
      }
      function _(_) {
        const _ = _.parentElement;
        if (!_) return console.error("no parent"), null;
        let _ = _(_);
        if (_ == _.Unknown)
          _ = (function (_) {
            let _ = !1;
            switch (_.tagName) {
              case "A":
              case "INPUT":
              case "TEXTAREA":
                _ = !0;
                break;
              case "DIV":
                if ((0, _._)(_) != _._.COLUMN) _ = !0;
                else {
                  const _ = (0, _._)(_.parentElement);
                  (_ != _._.ROW && _ != _._.ROW_REVERSE) || (_ = !0);
                }
            }
            let _ = _.NotNeeded;
            return _ ? (_ = _(_)) : _(_, _), _;
          })(_);
        else if (_ == _.InReactTree) return _;
        return _ instanceof _._ ? _ : _(_);
      }
      function _(_) {
        const _ = _()(_).data("unregisterNavTree");
        console.assert(_, "missing unregister binding"),
          _(),
          _()(_).removeAttr("data-nav-modal"),
          _()(_).removeData("unregisterNavTree"),
          _()(_).removeClass("navTreeModal");
      }
      const _ = {
        InstrumentFocusElements: _,
        ForceUpdateFocusElements: function (_) {
          _(_()(_)), _(_()(_));
        },
        GPNavFocusChild: function (_) {
          let _ = _(_[0]);
          return (
            _ instanceof _._ || (_ = _(_[0])),
            _ instanceof _._ && _.BTakeFocus(_._.APPLICATION),
            !1
          );
        },
        GPOnShowingModalWindow: function (_) {
          _("Showing element as modal", _);
          const _ = _()(_),
            _ = _(_);
          return (
            _ &&
              (_(
                "Element already in DOM tree, forcibly re-instrumenting elements so they are parented to modal",
              ),
              _(_)),
            _.attr("data-nav-modal", "true"),
            _ && _(_),
            () => _(_)
          );
        },
        GPShowVirtualKeyboard: function (_ = !0) {
          _ ? _.ShowVirtualKeyboard() : _.HideVirtualKeyboard();
        },
        GPNavUpdateActionDescriptions: function (_, _) {
          const _ = _(_);
          _ instanceof _._ &&
            __webpack_require__.SetProperties({
              ..._.m_Properties,
              actionDescriptionMap: (0, _._)(_),
            });
        },
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        PostMessage(_) {}
        RegisterForMessage(_) {}
      }
      class _ {
        m_fnCallback = void 0;
        constructor() {
          SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
        }
        RegisterForMessage(_) {
          this.m_fnCallback = _;
        }
        PostMessage(_) {
          let _ = JSON.stringify(_);
          SteamClient.BrowserView.PostMessageToParent(_._, _);
        }
        OnMessage(_, _) {
          if (_ == _._) {
            const _ = JSON.parse(_);
            this.m_fnCallback(_);
          } else if ("Checkout" == _) {
            let _ = JSON.parse(_);
            if ("paypal_success" == _.action)
              try {
                window.OnPayPalSuccess(_.transid);
              } catch (_) {}
            else if ("paypal_cancel" == _.action)
              try {
                window.OnPayPalCancel(_.transid);
              } catch (_) {}
          } else if ("PinnedView" == _) {
            let _ = JSON.parse(_);
            try {
              window.HandleOverlayWindowPinnedView(
                1 == _.bPinned,
                1 == _.bShowPinnedView,
              );
            } catch (_) {}
          }
        }
      }
      (0, _._)([_._], _.prototype, "OnMessage", null);
      class _ {
        m_postWindow;
        m_fnCallback = void 0;
        constructor(_) {
          (this.m_postWindow = _),
            window.addEventListener("message", this.OnMessage);
        }
        RegisterForMessage(_) {
          this.m_fnCallback = _;
        }
        PostMessage(_) {
          let _ = JSON.stringify(_);
          this.m_postWindow.postMessage(
            {
              gamepadMessage: _._,
              args: _,
            },
            "*",
          );
        }
        OnMessage(_) {
          let _ = _?.data;
          if (_ && _.gamepadMessage == _._ && _.args) {
            const _ = JSON.parse(_.args);
            this.m_fnCallback(_);
          }
        }
      }
      (0, _._)([_._], _.prototype, "OnMessage", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ = {
        _: "y",
        _: "x",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        SyncStore(_) {
          return this.Subscribe(_).Unsubscribe;
        }
        GetValue() {
          return this.Value;
        }
      }
      (0, _._)([_._], _.prototype, "SyncStore", null),
        (0, _._)([_._], _.prototype, "GetValue", null);
      class _ extends _ {}
      class _ extends _ {
        m_callbacks;
        m_currentValue;
        m_fnEquals;
        constructor(_, _) {
          super(),
            (this.m_callbacks = new _._()),
            (this.m_currentValue = _),
            (this.m_fnEquals = _);
        }
        Set(_) {
          if (this.m_fnEquals) {
            if (this.m_fnEquals(this.m_currentValue, _)) return !1;
          } else if (this.m_currentValue === _) return !1;
          return (this.m_currentValue = _), this.m_callbacks.Dispatch(_), !0;
        }
        get Value() {
          return this.m_currentValue;
        }
        Subscribe(_) {
          return {
            Unsubscribe: this.m_callbacks.Register(_).Unregister,
          };
        }
        get SubscriberCount() {
          return this.m_callbacks.CountRegistered();
        }
      }
      function _(_, _) {
        return new _(_, _);
      }
      class _ extends _ {
        m_fnMap;
        m_originalSubscribableValue;
        m_mappedSubscribableValue;
        m_bMappedValueStale = !1;
        constructor(_, _, _) {
          super(),
            (this.m_originalSubscribableValue = _),
            (this.m_mappedSubscribableValue = new _(_(_.Value), _)),
            (this.m_fnMap = _),
            this.m_originalSubscribableValue.Subscribe(() => {
              this.m_mappedSubscribableValue.SubscriberCount > 0
                ? this.UpdateMappedValue()
                : (this.m_bMappedValueStale = !0);
            });
        }
        get Value() {
          return (
            this.m_bMappedValueStale && this.UpdateMappedValue(),
            this.m_mappedSubscribableValue.Value
          );
        }
        Subscribe(_) {
          return this.m_mappedSubscribableValue.Subscribe(_);
        }
        UpdateMappedValue() {
          this.m_mappedSubscribableValue.Set(
            this.m_fnMap(this.m_originalSubscribableValue.Value),
          ),
            (this.m_bMappedValueStale = !1);
        }
      }
      function _(_, _, _) {
        return new _(_, _, _);
      }
      class _ {
        m_schTimer;
        m_fnCallback;
        m_fnOnCancel;
        Schedule(_, _) {
          this.IsScheduled() && this.Cancel(),
            (this.m_fnCallback = _),
            (this.m_schTimer = window.setTimeout(this.ScheduledInternal, _));
        }
        AsyncSchedule(_, _) {
          return new Promise((_, _) => {
            this.Schedule(_, () => {
              _(), __webpack_require__();
            }),
              (this.m_fnOnCancel = _);
          });
        }
        IsScheduled() {
          return void 0 !== this.m_schTimer;
        }
        Cancel() {
          if (this.m_schTimer) {
            const _ = this.m_fnOnCancel;
            clearTimeout(this.m_schTimer), this.Reset(), _ && _();
          }
        }
        Reset() {
          (this.m_schTimer = void 0),
            (this.m_fnCallback = void 0),
            (this.m_fnOnCancel = void 0);
        }
        ScheduledInternal() {
          const _ = this.m_fnCallback;
          this.Reset(), _?.();
        }
      }
      (0, _._)([_._], _.prototype, "ScheduledInternal", null);
      class _ {
        m_vecCallbacks = [];
        Push(_) {
          this.m_vecCallbacks.push(_);
        }
        PushArrayRemove(_, _) {
          this.m_vecCallbacks.push(() => _._(_, _));
        }
        Unregister() {
          for (const _ of this.m_vecCallbacks) _();
          this.m_vecCallbacks = [];
        }
        GetUnregisterFunc() {
          return this.Unregister;
        }
      }
      (0, _._)([_._], _.prototype, "Unregister", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_) {
        return null != _ && void 0 !== _.focus;
      }
      function _(_, _) {
        let _ = 0,
          _ = 0;
        return (
          _.right < _.left
            ? (_ = _.left - _.right)
            : _.left > _.right && (_ = _.left - _.right),
          _.bottom < _.top
            ? (_ = _.top - _.bottom)
            : _.top > _.bottom && (_ = _.top - _.bottom),
          Math.sqrt(_ * _ + _ * _)
        );
      }
      function _(_) {
        return "INPUT" === _.nodeName;
      }
      function _(_, _) {
        switch (_) {
          case "TEXTAREA":
            return !0;
          case "INPUT":
            switch (_) {
              case "date":
              case "datetime-local":
              case "datetime":
              case "email":
              case "month":
              case "number":
              case "password":
              case "search":
              case "tel":
              case "text":
              case "time":
              case "url":
              case "week":
                return !0;
              default:
                return !1;
            }
          default:
            return !1;
        }
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      function _(_, _, _) {
        if ("childList" === _.type) {
          for (let _ = 0; _ < _.addedNodes.length; _++) {
            const _ = _.addedNodes[_];
            if (_.nodeType === Node.ELEMENT_NODE) {
              const _ = _;
              _.parentElement && _(_);
            }
          }
          for (let _ = 0; _ < _.removedNodes.length; _++) {
            const _ = _.removedNodes[_];
            _.nodeType === Node.ELEMENT_NODE && __webpack_require__?.(_);
          }
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        async GetObject(_, _) {
          try {
            const _ = await this.GetString(_);
            return _ ? JSON.parse(_, _) : null;
          } catch {
            return null;
          }
        }
        async StoreObject(_, _) {
          return this.StoreString(_, JSON.stringify(_));
        }
      }
      class _ extends _ {
        GetString(_) {
          return Promise.resolve(localStorage.getItem(_));
        }
        StoreString(_, _) {
          return localStorage.setItem(_, _), Promise.resolve();
        }
        RemoveObject(_) {
          return localStorage.removeItem(_), Promise.resolve();
        }
      }
      var _,
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.Debug = 0)] = "Debug"),
          (_[(_.Info = 1)] = "Info"),
          (_[(_.Warning = 2)] = "Warning"),
          (_[(_.Error = 3)] = "Error");
      })(_ || (_ = {}));
      class _ {
        m_sName;
        m_fnIdGenerator = void 0;
        constructor(_, _) {
          (this.m_sName = _),
            (this.m_fnIdGenerator = _),
            _.Get().RegisterLogName(_);
        }
        Debug(..._) {
          this.Log(_.Debug, ..._);
        }
        Info(..._) {
          this.Log(_.Info, ..._);
        }
        Warning(..._) {
          this.Log(_.Warning, ..._);
        }
        Error(..._) {
          this.Log(_.Error, ..._);
        }
        Assert(_, ..._) {
          _ || this.Log(_.Error, "Assertion failed:", ..._);
        }
        IsDebugEnabled() {
          return _.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(_, ..._) {
          const _ = _.Get().IsDebugLogEnabled(this.m_sName);
          if (_ == _.Debug && !_) return;
          let _ = this.m_sName;
          const _ = this.m_fnIdGenerator?.() ?? null;
          null != _ && (_ += " (" + _ + ")");
          _(_, _, _.Get().IncludeBacktraceInLog, _, this.m_sName, ..._);
        }
      }
      (0, _._)([_._], _.prototype, "Debug", null),
        (0, _._)([_._], _.prototype, "Info", null),
        (0, _._)([_._], _.prototype, "Warning", null),
        (0, _._)([_._], _.prototype, "Error", null),
        (0, _._)([_._], _.prototype, "Assert", null);
      class _ {
        static k_EnabledLogNames_StorageKey = "EnabledWebLogs";
        static k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog";
        static s_Singleton = null;
        m_Storage = null;
        m_setKnownDebugLogs = new Set();
        m_setEnabledDebugLogs = new Set();
        m_bIncludeBacktraceInLog = !1;
        m_SettingsChangedCallback = new _._();
        m_bLoading = !1;
        constructor() {
          (this.m_Storage = new _()), this.LoadSettings();
        }
        LogAsLogManager(..._) {
          _(
            _.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ..._,
          );
        }
        async LoadSettings() {
          (this.m_bLoading = !0),
            (this.m_bIncludeBacktraceInLog = !!(await this.m_Storage?.GetObject(
              _.k_IncludeBacktraceInLog_StorageKey,
            )));
          const _ = await this.m_Storage?.GetObject(
            _.k_EnabledLogNames_StorageKey,
          );
          if (Array.isArray(_)) {
            this.m_setEnabledDebugLogs = new Set(_);
            for (const _ of _) this.m_setKnownDebugLogs.add(_);
            this.LogAsLogManager(
              "Loaded debug enabled log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
          } else 0;
          (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
        }
        async SaveSettings() {
          await this.m_Storage?.StoreObject(
            _.k_EnabledLogNames_StorageKey,
            Array.from(this.m_setEnabledDebugLogs),
          ),
            await this.m_Storage?.StoreObject(
              _.k_IncludeBacktraceInLog_StorageKey,
              this.m_bIncludeBacktraceInLog,
            ),
            this.LogAsLogManager(
              "Saved enabled debug log names. Will print log messages for:",
              Array.from(this.m_setEnabledDebugLogs),
            );
        }
        PrintEnabledLogs() {
          this.LogAsLogManager(
            "Will print log messages for:",
            Array.from(this.m_setEnabledDebugLogs),
          );
        }
        static Get() {
          return (
            null == _.s_Singleton && (_.s_Singleton = new _()), _.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_setKnownDebugLogs.values();
        }
        RegisterLogName(_) {
          this.m_setKnownDebugLogs.add(_);
        }
        IsLogName(_) {
          return this.m_setKnownDebugLogs.has(_);
        }
        IsDebugLogEnabled(_) {
          return this.m_setEnabledDebugLogs.has(_);
        }
        async ToggleDebugLogEnabled(_) {
          this.SetDebugLogEnabled(_, !this.IsDebugLogEnabled(_));
        }
        async SetDebugLogEnabled(_, _) {
          _
            ? this.m_setEnabledDebugLogs.add(_)
            : this.m_setEnabledDebugLogs.delete(_),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        async SetAllDebugLogsEnabled(_) {
          (this.m_setEnabledDebugLogs = _
            ? new Set(this.m_setKnownDebugLogs)
            : new Set()),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
        RegisterForSettingsChanges(_) {
          return this.m_SettingsChangedCallback.Register(_);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        async SetIncludeBacktraceInLog(_) {
          (this.m_bIncludeBacktraceInLog = _),
            this.m_SettingsChangedCallback.Dispatch(),
            await this.SaveSettings();
        }
      }
      function _(_, _, _, _, _, ..._) {
        const _ = (function (_) {
            let _ = 0;
            for (let _ = 0; _ < _.length; _++)
              _ = _.charCodeAt(_) + ((_ << 5) - _);
            return [(_ >> 0) & 255, (_ >> 8) & 255, (_ >> 16) & 255];
          })(_).map((_, _) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (_ / 255 - 0.5) + 0.15))),
            ),
          ),
          _ = (299 * (_ = _)[0] + 587 * _[1] + 114 * _[2]) / 1e3 >= 128;
        var _;
        let _ = _;
        _ &&
          (_ =
            (function (_) {
              switch (_) {
                case _.Debug:
                  return String.fromCodePoint(128027);
                case _.Info:
                  return String.fromCodePoint(8505);
                case _.Warning:
                  return String.fromCodePoint(9888);
                case _.Error:
                  return String.fromCodePoint(128165);
              }
            })(_) +
            " " +
            _);
        const _ =
            _.length >= 1 && "string" == typeof _[0] && _[0].includes("%c"),
          _ = _ && _.shift();
        let _;
        if (
          ((_ = _
            ? [
                `%c${_}%c:${_ ? " %c" + _ : ""}`,
                `color: ${_ ? "black" : "white"}; background: rgb(${_.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(_ ? [""] : []),
                ..._,
              ]
            : _),
          _)
        )
          console.groupCollapsed(..._),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (_) {
            case _.Debug:
            case _.Info:
              console.log(..._);
              break;
            case _.Warning:
              console.warn(..._);
              break;
            case _.Error:
              console.clogerror
                ? console.clogerror(3, ..._)
                : console.error(..._);
          }
      }
      const _ = () => [..._.Get().LogNames].sort(),
        _ = (_, _) => {
          _.Get().IsLogName(_)
            ? _.Get().SetDebugLogEnabled(_, _)
            : console.warn(`No log named "${_}", available logs:`, _());
        };
      (window.DebugLogEnable = (..._) => _.forEach((_) => _(_, !0))),
        (window.DebugLogDisable = (..._) => _.forEach((_) => _(_, !1))),
        (window.DebugLogEnableAll = () => _.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => _.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          _.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          _.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = _),
        (window.DebugLogEnabled = (..._) => {
          _.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${_.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            _.Get().PrintEnabledLogs();
        }),
        (window.EnableSteamConsole = (_ = !0) =>
          _.Get().SetDebugLogEnabled("SteamClient", _));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_, _) {
        return null == _ || null == _
          ? _ === _
          : "object" == typeof _ &&
              "object" == typeof _ &&
              Object.keys(_).length === Object.keys(_).length &&
              Object.keys(_).every((_) => _.hasOwnProperty(_) && _[_] === _[_]);
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _() {
        return !!window.document;
      }
      let _;
      function _() {
        if (!_()) return _ || (_ = _()), _;
        let _ = (function (_) {
          if (!_() || !window.document.cookie) return null;
          const _ = document.cookie.match("(^|; )" + _ + "=([^;]*)");
          return _ && _[2] ? decodeURIComponent(_[2]) : null;
        })("sessionid");
        return _ || (_ = _()), _;
      }
      function _() {
        const _ = (function () {
          let _ = "";
          for (let _ = 0; _ < 24; _++) _ += (0, _._)(0, 35).toString(36);
          return _;
        })();
        return (
          (function (_, _, _, _) {
            if (!_()) return;
            _ || (_ = "/");
            let _ = "";
            if (void 0 !== _ && _) {
              const _ = new Date();
              _.setTime(_.getTime() + 864e5 * _),
                (_ = "; expires=" + _.toUTCString());
            }
            document.cookie =
              encodeURIComponent(_) +
              "=" +
              encodeURIComponent(_) +
              _ +
              ";path=" +
              _;
          })("sessionid", _, 0),
          _
        );
      }
      new Set();
      const _ = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        AVATAR_BASE_URL: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        CLAN_CDN_ASSET_URL: "",
        COMMUNITY_ASSETS_BASE_URL: "",
        VIDEO_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        BASE_URL_SHARED_CDN: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        STORE_CHECKOUT_BASE_URL: "",
        LOGIN_BASE_URL: "",
        SUPPORT_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        STORE_ITEM_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_MOBILE_WEBVIEW: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        TESLA: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        FROM_WEB: !1,
        WEBSITE_ID: "Unknown",
        get SESSIONID() {
          return _();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_STEAMUI: !1,
        IN_GAMEPADUI: !1,
        IN_STEAMUI_SHARED_CONTEXT: !1,
        FORCED_DISPLAY_MODE: void 0,
        ON_DECK: !1,
        ON_FRAME: !1,
        ON_STEAMOS: !1,
        IN_GAMESCOPE: !1,
        IN_LOGIN: !1,
        IN_LOGIN_REFRESH: !1,
        USE_LONGEST_LOC_STRING: !1,
        SILENT_STARTUP: !1,
        CLIENT_SESSION: 0,
      };
    },
  },
]);
