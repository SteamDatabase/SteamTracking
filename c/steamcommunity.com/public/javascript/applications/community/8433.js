"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8433],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__.module(module_exports),
          __webpack_require__.module(module_exports, {
            apply: () => _,
            isSupported: () => _,
          });
        var module = class extends Event {
            oldState;
            newState;
            constructor(_, { oldState: _ = "", newState: _ = "", ..._ } = {}) {
              super(_, _),
                (this.oldState = String(_ || "")),
                (this.newState = String(_ || ""));
            }
          },
          module = new WeakMap();
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
        var module = globalThis.ShadowRoot || function () {},
          module = globalThis.HTMLDialogElement || function () {},
          module = new WeakMap(),
          module = new WeakMap(),
          module = new WeakMap();
        function _(_) {
          return _.get(_) || "hidden";
        }
        var module = new WeakMap();
        function _(_) {
          const _ = _.popoverTargetElement;
          if (!(_ instanceof HTMLElement)) return;
          const _ = _(_);
          (_.popoverTargetAction === "show" && _ === "showing") ||
            (_.popoverTargetAction === "hide" && _ === "hidden") ||
            (_ === "showing" ? _(_, !0, !0) : _(_, !1) && (_.set(_, _), _(_)));
        }
        function _(_, _) {
          return !(
            (_.popover !== "auto" && _.popover !== "manual") ||
            !_.isConnected ||
            (_ && _(_) !== "showing") ||
            (!_ && _(_) !== "hidden") ||
            (_ instanceof _ && _.hasAttribute("open")) ||
            document.fullscreenElement === _
          );
        }
        function _(_) {
          return _
            ? Array.from(_.get(_.ownerDocument) || []).indexOf(_) + 1
            : 0;
        }
        function _(_) {
          const _ = _(_),
            _ = _(_);
          return _(_) > _(_) ? _ : _;
        }
        function _(_) {
          const _ = _.get(_);
          for (const _ of _ || [])
            if (!_.isConnected) _.delete(_);
            else return _;
          return null;
        }
        function _(_) {
          return typeof _.getRootNode == "function"
            ? _.getRootNode()
            : _.parentNode
              ? _(_.parentNode)
              : _;
        }
        function _(_) {
          for (; _; ) {
            if (
              _ instanceof HTMLElement &&
              _.popover === "auto" &&
              _.get(_) === "showing"
            )
              return _;
            if (
              ((_ = _.parentElement || _(_)),
              _ instanceof _ && (_ = _.host),
              _ instanceof Document)
            )
              return;
          }
        }
        function _(_) {
          for (; _; ) {
            const _ = _.popoverTargetElement;
            if (_ instanceof HTMLElement) return _;
            if (
              ((_ = _.parentElement || _(_)),
              _ instanceof _ && (_ = _.host),
              _ instanceof Document)
            )
              return;
          }
        }
        function _(_) {
          const _ = new Map();
          let _ = 0;
          const _ = _.ownerDocument;
          for (const _ of _.get(_) || []) _.set(_, _), (_ += 1);
          _.set(_, _), (_ += 1);
          let _ = null;
          function _(_) {
            const _ = _(_);
            if (_ === null) return null;
            const _ = _.get(_);
            (_ === null || _.get(_) < _) && (_ = _);
          }
          return _(_?.parentElement), _;
        }
        function _(_) {
          return _.hidden ||
            _ instanceof _ ||
            ((_ instanceof HTMLButtonElement ||
              _ instanceof HTMLInputElement ||
              _ instanceof HTMLSelectElement ||
              _ instanceof HTMLTextAreaElement ||
              _ instanceof HTMLOptGroupElement ||
              _ instanceof HTMLOptionElement ||
              _ instanceof HTMLFieldSetElement) &&
              _.disabled) ||
            (_ instanceof HTMLInputElement && _.type === "hidden") ||
            (_ instanceof HTMLAnchorElement && _.href === "")
            ? !1
            : typeof _.tabIndex == "number" && _.tabIndex !== -1;
        }
        function _(_) {
          if (_.shadowRoot && _.shadowRoot.delegatesFocus !== !0) return null;
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
        }
        function _(_) {
          _(_)?.focus();
        }
        var module = new WeakMap();
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
            ) ||
            !_(_, !1)
          )
            return;
          let _ = !1;
          if (_.popover === "auto") {
            const _ = _.getAttribute("popover"),
              _ = _(_) || _;
            if ((_(_, !1, !0), _ !== _.getAttribute("popover") || !_(_, !1)))
              return;
          }
          _(_) || (_ = !0), _.delete(_);
          const _ = _.activeElement;
          _.classList.add(":popover-open"),
            _.set(_, "showing"),
            _.has(_) || _.set(_, new Set()),
            _.get(_).add(_),
            _(_),
            _.popover === "auto" &&
              (_.has(_) || _.set(_, new Set()),
              _.get(_).add(_),
              _(_.get(_), !0)),
            _ && _ && _.popover === "auto" && _.set(_, _),
            _(_, "closed", "open");
        }
        function _(_, _ = !1, _ = !1) {
          if (!_(_, !0)) return;
          const _ = _.ownerDocument;
          if (
            (_.popover === "auto" && (_(_, _, _), !_(_, !0))) ||
            (_(_.get(_), !1),
            _.delete(_),
            _ &&
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
            _ && _(_, "open", "closed");
          const _ = _.get(_);
          _ && (_.delete(_), _ && _.focus());
        }
        function _(_, _ = !1, _ = !1) {
          let _ = _(_);
          for (; _; ) _(_, _, _), (_ = _(_));
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
          for (; _ && _(_) === "showing" && _.get(_)?.size; ) _(_, _, _);
        }
        var module = new WeakMap();
        function _(_) {
          if (!_.isTrusted) return;
          const _ = _.composedPath()[0];
          if (!_) return;
          const _ = _.ownerDocument;
          if (!_(_)) return;
          const _ = _(_);
          if (_ && _.type === "pointerdown") _.set(_, _);
          else if (_.type === "pointerup") {
            const _ = _.get(_) === _;
            _.delete(_), _ && _(_ || _, !1, !0);
          }
        }
        var module = new WeakMap();
        function _(_, _ = !1) {
          if (!_) return;
          _.has(_) || _.set(_, _.getAttribute("aria-expanded"));
          const _ = _.popoverTargetElement;
          if (_ instanceof HTMLElement && _.popover === "auto")
            _.setAttribute("aria-expanded", String(_));
          else {
            const _ = _.get(_);
            _
              ? _.setAttribute("aria-expanded", _)
              : _.removeAttribute("aria-expanded");
          }
        }
        var module = globalThis.ShadowRoot || function () {};
        function _() {
          return (
            typeof HTMLElement < "u" &&
            typeof HTMLElement.prototype == "object" &&
            "popover" in HTMLElement.prototype
          );
        }
        function _(_, _, _) {
          const _ = _[_];
          Object.defineProperty(_, _, {
            value(_) {
              return _.call(this, _(_));
            },
          });
        }
        var module = /(^|[^\\]):popover-open\b/g,
          module = `
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }
`,
          module = null;
        function _(_) {
          if (_ === null)
            try {
              (_ = new CSSStyleSheet()), _.replaceSync(_);
            } catch {
              _ = !1;
            }
          if (_ === !1) {
            const _ = document.createElement("style");
            (_.textContent = _),
              _ instanceof Document ? _.head.prepend(_) : _.prepend(_);
          } else _.adoptedStyleSheets = [_, ..._.adoptedStyleSheets];
        }
        function _() {
          window.ToggleEvent = window.ToggleEvent || _;
          function _(_) {
            return (
              _?.includes(":popover-open") &&
                (_ = _.replace(_, "$1.\\:popover-open")),
              _
            );
          }
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
                  return _ === "" || _ == "auto" ? "auto" : "manual";
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
                  (_.get(this) === "showing" && _ === void 0) || _ === !1
                    ? _(this, !0, !0)
                    : (_ === void 0 || _ === !0) && _(this);
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
                  const _ = _.call(this);
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
                  if (_ === null)
                    this.removeAttribute("popovertarget"), _.delete(this);
                  else if (_ instanceof Element)
                    this.setAttribute("popovertarget", ""), _.set(this, _);
                  else
                    throw new TypeError(
                      "popoverTargetElement must be an element or null",
                    );
                },
                get() {
                  if (
                    (this.localName !== "button" &&
                      this.localName !== "input") ||
                    (this.localName === "input" &&
                      this.type !== "reset" &&
                      this.type !== "image" &&
                      this.type !== "button") ||
                    this.disabled ||
                    (this.form && this.type === "submit")
                  )
                    return null;
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
                  return _ === "show" || _ === "hide" ? _ : "toggle";
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
              if (_) {
                _(_), _.preventDefault();
                return;
              }
            },
            _ = (_) => {
              const _ = _.key,
                _ = _.target;
              !_.defaultPrevented &&
                _ &&
                (_ === "Escape" || _ === "Esc") &&
                _(_.ownerDocument, !0, !0);
            };
          ((_) => {
            _.addEventListener("click", _),
              _.addEventListener("keydown", _),
              _.addEventListener("pointerdown", _),
              _.addEventListener("pointerup", _);
          })(document),
            _(document);
        }
      },
    },
  ]);
})();
