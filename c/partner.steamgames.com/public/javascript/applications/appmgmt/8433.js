"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8433],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          apply: () => _,
          isSupported: () => _,
        });
      var _ = class extends Event {
          oldState;
          newState;
          constructor(
            _,
            { oldState: _ = "", newState: __webpack_require__ = "", ..._ } = {},
          ) {
            super(_, _),
              (this.oldState = String(_ || "")),
              (this.newState = String(__webpack_require__ || ""));
          }
        },
        _ = new WeakMap();
      function _(_, _, _) {
        _.set(
          _,
          setTimeout(() => {
            _.has(_) &&
              _.dispatchEvent(
                new _("toggle", {
                  cancelable: !1,
                  oldState: _,
                  newState: _,
                }),
              );
          }, 0),
        );
      }
      var _ = globalThis.ShadowRoot || function () {},
        _ = globalThis.HTMLDialogElement || function () {},
        _ = new WeakMap(),
        _ = new WeakMap(),
        _ = new WeakMap();
      function _(_) {
        return _.get(_) || "hidden";
      }
      var _ = new WeakMap();
      function _(_, _) {
        return (
          ("auto" === _.popover || "manual" === _.popover) &&
          !!_.isConnected &&
            (!_ || "showing" === _(_)) &&
              !(!_ && "hidden" !== _(_)) &&
                !(_ instanceof _ && _.hasAttribute("open")) &&
          document.fullscreenElement !== _
        );
      }
      function _(_) {
        return _ ? Array.from(_.get(_.ownerDocument) || []).indexOf(_) + 1 : 0;
      }
      function _(_) {
        const _ = _(_),
          _ = (function (_) {
            for (; _; ) {
              const _ = _.popoverTargetElement;
              if (_ instanceof HTMLElement) return _;
              if (
                ((_ = _.parentElement || _(_)) instanceof _ && (_ = _.host),
                _ instanceof Document)
              )
                return;
            }
          })(_);
        return _(_) > _(_) ? _ : _;
      }
      function _(_) {
        const _ = _.get(_);
        for (const _ of _ || []) {
          if (_.isConnected) return _;
          _.delete(_);
        }
        return null;
      }
      function _(_) {
        return "function" == typeof _.getRootNode
          ? _.getRootNode()
          : _.parentNode
            ? _(_.parentNode)
            : _;
      }
      function _(_) {
        for (; _; ) {
          if (
            _ instanceof HTMLElement &&
            "auto" === _.popover &&
            "showing" === _.get(_)
          )
            return _;
          if (
            ((_ = _.parentElement || _(_)) instanceof _ && (_ = _.host),
            _ instanceof Document)
          )
            return;
        }
      }
      function _(_) {
        return (
          !(_.hidden || _ instanceof _) &&
          (!(
            _ instanceof HTMLButtonElement ||
            _ instanceof HTMLInputElement ||
            _ instanceof HTMLSelectElement ||
            _ instanceof HTMLTextAreaElement ||
            _ instanceof HTMLOptGroupElement ||
            _ instanceof HTMLOptionElement ||
            _ instanceof HTMLFieldSetElement
          ) ||
            !_.disabled) &&
            !(_ instanceof HTMLInputElement && "hidden" === _.type) &&
              !(_ instanceof HTMLAnchorElement && "" === _.href) &&
                "number" == typeof _.tabIndex &&
          -1 !== _.tabIndex
        );
      }
      function _(_) {
        (function (_) {
          if (_.shadowRoot && !0 !== _.shadowRoot.delegatesFocus) return null;
          let _ = _;
          _.shadowRoot && (_ = _.shadowRoot);
          let _ = _.querySelector("[autofocus]");
          if (_) return _;
          {
            const _ = _.querySelectorAll("slot");
            for (const _ of _) {
              const _ = _.assignedElements({
                flatten: !0,
              });
              for (const _ of _) {
                if (_.hasAttribute("autofocus")) return _;
                if (((_ = _.querySelector("[autofocus]")), _)) return _;
              }
            }
          }
          const _ = _.ownerDocument.createTreeWalker(
            _,
            NodeFilter.SHOW_ELEMENT,
          );
          let _ = _.currentNode;
          for (; _; ) {
            if (_(_)) return _;
            _ = _.nextNode();
          }
        })(_)?.focus();
      }
      var _ = new WeakMap();
      function _(_) {
        if (!_(_, !1)) return;
        const _ = _.ownerDocument;
        if (
          !_.dispatchEvent(
            new _("beforetoggle", {
              cancelable: !0,
              oldState: "closed",
              newState: "open",
            }),
          )
        )
          return;
        if (!_(_, !1)) return;
        let _ = !1;
        if ("auto" === _.popover) {
          const _ = _.getAttribute("popover");
          if (
            (_(
              (function (_) {
                const _ = new Map();
                let _ = 0;
                const _ = _.ownerDocument;
                for (const _ of _.get(_) || []) _.set(_, _), (_ += 1);
                _.set(_, _), (_ += 1);
                let _ = null;
                return (
                  (function (_) {
                    const _ = _(_);
                    if (null === _) return null;
                    const _ = _.get(_);
                    (null === _ || _.get(_) < _) && (_ = _);
                  })(_?.parentElement),
                  _
                );
              })(_) || _,
              !1,
              !0,
            ),
            _ !== _.getAttribute("popover") || !_(_, !1))
          )
            return;
        }
        _(_) || (_ = !0), _.delete(_);
        const _ = _.activeElement;
        _.classList.add(":popover-open"),
          _.set(_, "showing"),
          _.has(_) || _.set(_, new Set()),
          _.get(_).add(_),
          _(_),
          "auto" === _.popover &&
            (_.has(_) || _.set(_, new Set()), _.get(_).add(_), _(_.get(_), !0)),
          _ && _ && "auto" === _.popover && _.set(_, _),
          _(_, "closed", "open");
      }
      function _(_, _ = !1, __webpack_require__ = !1) {
        if (!_(_, !0)) return;
        const _ = _.ownerDocument;
        if ("auto" === _.popover && (_(_, _, __webpack_require__), !_(_, !0)))
          return;
        if (
          (_(_.get(_), !1),
          _.delete(_),
          __webpack_require__ &&
            (_.dispatchEvent(
              new _("beforetoggle", {
                oldState: "open",
                newState: "closed",
              }),
            ),
            !_(_, !0)))
        )
          return;
        _.get(_)?.delete(_),
          _.get(_)?.delete(_),
          _.classList.remove(":popover-open"),
          _.set(_, "hidden"),
          __webpack_require__ && _(_, "open", "closed");
        const _ = _.get(_);
        _ && (_.delete(_), _ && _.focus());
      }
      function _(_, _ = !1, __webpack_require__ = !1) {
        let _ = _(_);
        for (; _; ) _(_, _, __webpack_require__), (_ = _(_));
      }
      function _(_, _, _) {
        const _ = _.ownerDocument || _;
        if (_ instanceof Document) return _(_, _, _);
        let _ = null,
          _ = !1;
        for (const _ of _.get(_) || [])
          if (_ === _) _ = !0;
          else if (_) {
            _ = _;
            break;
          }
        if (!_) return _(_, _, _);
        for (; _ && "showing" === _(_) && _.get(_)?.size; ) _(_, _, _);
      }
      var _ = new WeakMap();
      function _(_) {
        if (!_.isTrusted) return;
        const _ = _.composedPath()[0];
        if (!_) return;
        const _ = _.ownerDocument;
        if (!_(_)) return;
        const _ = _(_);
        if (_ && "pointerdown" === _.type) _.set(_, _);
        else if ("pointerup" === _.type) {
          const _ = _.get(_) === _;
          _.delete(_), _ && _(_ || _, !1, !0);
        }
      }
      var _ = new WeakMap();
      function _(_, _ = !1) {
        if (!_) return;
        _.has(_) || _.set(_, _.getAttribute("aria-expanded"));
        const _ = _.popoverTargetElement;
        if (_ instanceof HTMLElement && "auto" === _.popover)
          _.setAttribute("aria-expanded", String(_));
        else {
          const _ = _.get(_);
          _
            ? _.setAttribute("aria-expanded", _)
            : _.removeAttribute("aria-expanded");
        }
      }
      var _ = globalThis.ShadowRoot || function () {};
      function _() {
        return (
          "undefined" != typeof HTMLElement &&
          "object" == typeof HTMLElement.prototype &&
          "popover" in HTMLElement.prototype
        );
      }
      function _(_, _, _) {
        const _ = _[_];
        Object.defineProperty(_, _, {
          value(_) {
            return _.call(this, __webpack_require__(_));
          },
        });
      }
      var _ = /(^|[^\\]):popover-open\b/g,
        _ =
          "\n  :where([popover]) {\n    position: fixed;\n    z-index: 2147483647;\n    inset: 0;\n    padding: 0.25em;\n    width: fit-content;\n    height: fit-content;\n    border-width: initial;\n    border-color: initial;\n    border-image: initial;\n    border-style: solid;\n    background-color: canvas;\n    color: canvastext;\n    overflow: auto;\n    margin: auto;\n  }\n\n  :where(dialog[popover][open]) {\n    display: revert;\n  }\n\n  :where([anchor].\\:popover-open) {\n    inset: auto;\n  }\n\n  :where([anchor]:popover-open) {\n    inset: auto;\n  }\n\n  @supports not (background-color: canvas) {\n    :where([popover]) {\n      background-color: white;\n      color: black;\n    }\n  }\n\n  @supports (width: -moz-fit-content) {\n    :where([popover]) {\n      width: -moz-fit-content;\n      height: -moz-fit-content;\n    }\n  }\n\n  @supports not (inset: 0) {\n    :where([popover]) {\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  }\n\n  :where([popover]:not(.\\:popover-open)) {\n    display: none;\n  }\n",
        _ = null;
      function _(_) {
        if (null === _)
          try {
            (_ = new CSSStyleSheet()).replaceSync(_);
          } catch {
            _ = !1;
          }
        if (!1 === _) {
          const _ = document.createElement("style");
          (_.textContent = _),
            _ instanceof Document ? _.head.prepend(_) : _.prepend(_);
        } else _.adoptedStyleSheets = [_, ..._.adoptedStyleSheets];
      }
      function _() {
        function _(_) {
          return (
            _?.includes(":popover-open") &&
              (_ = _.replace(_, "$1.\\:popover-open")),
            _
          );
        }
        (window.ToggleEvent = window.ToggleEvent || _),
          _(Document.prototype, "querySelector", _),
          _(Document.prototype, "querySelectorAll", _),
          _(Element.prototype, "querySelector", _),
          _(Element.prototype, "querySelectorAll", _),
          _(Element.prototype, "matches", _),
          _(Element.prototype, "closest", _),
          _(DocumentFragment.prototype, "querySelectorAll", _),
          _(DocumentFragment.prototype, "querySelectorAll", _),
          Object.defineProperties(HTMLElement.prototype, {
            popover: {
              enumerable: !0,
              configurable: !0,
              get() {
                if (!this.hasAttribute("popover")) return null;
                const _ = (this.getAttribute("popover") || "").toLowerCase();
                return "" === _ || "auto" == _ ? "auto" : "manual";
              },
              set(_) {
                this.setAttribute("popover", _);
              },
            },
            showPopover: {
              enumerable: !0,
              configurable: !0,
              value() {
                _(this);
              },
            },
            hidePopover: {
              enumerable: !0,
              configurable: !0,
              value() {
                _(this, !0, !0);
              },
            },
            togglePopover: {
              enumerable: !0,
              configurable: !0,
              value(_) {
                ("showing" === _.get(this) && void 0 === _) || !1 === _
                  ? _(this, !0, !0)
                  : (void 0 !== _ && !0 !== _) || _(this);
              },
            },
          });
        const _ = Element.prototype.attachShadow;
        _ &&
          Object.defineProperties(Element.prototype, {
            attachShadow: {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value(_) {
                const _ = _.call(this, _);
                return _(_), _;
              },
            },
          });
        const _ = HTMLElement.prototype.attachInternals;
        _ &&
          Object.defineProperties(HTMLElement.prototype, {
            attachInternals: {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value() {
                const _ = __webpack_require__.call(this);
                return _.shadowRoot && _(_.shadowRoot), _;
              },
            },
          });
        const _ = new WeakMap();
        function _(_) {
          Object.defineProperties(_.prototype, {
            popoverTargetElement: {
              enumerable: !0,
              configurable: !0,
              set(_) {
                if (null === _)
                  this.removeAttribute("popovertarget"), _.delete(this);
                else {
                  if (!(_ instanceof Element))
                    throw new TypeError(
                      "popoverTargetElement must be an element or null",
                    );
                  this.setAttribute("popovertarget", ""), _.set(this, _);
                }
              },
              get() {
                if ("button" !== this.localName && "input" !== this.localName)
                  return null;
                if (
                  "input" === this.localName &&
                  "reset" !== this.type &&
                  "image" !== this.type &&
                  "button" !== this.type
                )
                  return null;
                if (this.disabled) return null;
                if (this.form && "submit" === this.type) return null;
                const _ = _.get(this);
                if (_ && _.isConnected) return _;
                if (_ && !_.isConnected) return _.delete(this), null;
                const _ = _(this),
                  _ = this.getAttribute("popovertarget");
                return (
                  ((_ instanceof Document || _ instanceof _) &&
                    _ &&
                    _.getElementById(_)) ||
                  null
                );
              },
            },
            popoverTargetAction: {
              enumerable: !0,
              configurable: !0,
              get() {
                const _ = (
                  this.getAttribute("popovertargetaction") || ""
                ).toLowerCase();
                return "show" === _ || "hide" === _ ? _ : "toggle";
              },
              set(_) {
                this.setAttribute("popovertargetaction", _);
              },
            },
          });
        }
        _(HTMLButtonElement), _(HTMLInputElement);
        const _ = (_) => {
            const _ = _.composedPath()[0];
            if (!(_ instanceof Element) || _?.shadowRoot) return;
            const _ = _(_);
            if (!(_ instanceof _ || _ instanceof Document)) return;
            const _ = _.closest("[popovertargetaction],[popovertarget]");
            return _
              ? ((function (_) {
                  const _ = _.popoverTargetElement;
                  if (!(_ instanceof HTMLElement)) return;
                  const _ = _(_);
                  ("show" === _.popoverTargetAction && "showing" === _) ||
                    ("hide" === _.popoverTargetAction && "hidden" === _) ||
                    ("showing" === _
                      ? _(_, !0, !0)
                      : _(_, !1) && (_.set(_, _), _(_)));
                })(_),
                void _.preventDefault())
              : void 0;
          },
          _ = (_) => {
            const _ = _.key,
              _ = _.target;
            _.defaultPrevented ||
              !_ ||
              ("Escape" !== _ && "Esc" !== _) ||
              _(_.ownerDocument, !0, !0);
          };
        var _;
        (_ = document).addEventListener("click", _),
          _.addEventListener("keydown", _),
          _.addEventListener("pointerdown", _),
          _.addEventListener("pointerup", _),
          _(document);
      }
    },
  },
]);
