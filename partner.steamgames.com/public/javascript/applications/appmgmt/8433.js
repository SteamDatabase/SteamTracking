/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(self.webpackChunkappmgmt_storeadmin =
  self.webpackChunkappmgmt_storeadmin || []).push([
  [8433],
  {
    8433: (e, t, n) => {
      n.r(t), n.d(t, { apply: () => O, isSupported: () => N });
      var o = class extends Event {
          oldState;
          newState;
          constructor(e, { oldState: t = "", newState: n = "", ...o } = {}) {
            super(e, o),
              (this.oldState = String(t || "")),
              (this.newState = String(n || ""));
          }
        },
        r = new WeakMap();
      function i(e, t, n) {
        r.set(
          e,
          setTimeout(() => {
            r.has(e) &&
              e.dispatchEvent(
                new o("toggle", { cancelable: !1, oldState: t, newState: n }),
              );
          }, 0),
        );
      }
      var a = globalThis.ShadowRoot || function () {},
        s = globalThis.HTMLDialogElement || function () {},
        c = new WeakMap(),
        l = new WeakMap(),
        u = new WeakMap();
      function p(e) {
        return u.get(e) || "hidden";
      }
      var f = new WeakMap();
      function d(e, t) {
        return (
          ("auto" === e.popover || "manual" === e.popover) &&
          !!e.isConnected &&
            (!t || "showing" === p(e)) &&
              !(!t && "hidden" !== p(e)) &&
                !(e instanceof s && e.hasAttribute("open")) &&
          document.fullscreenElement !== e
        );
      }
      function h(e) {
        return e ? Array.from(l.get(e.ownerDocument) || []).indexOf(e) + 1 : 0;
      }
      function m(e) {
        const t = w(e),
          n = (function (e) {
            for (; e; ) {
              const t = e.popoverTargetElement;
              if (t instanceof HTMLElement) return t;
              if (
                ((e = e.parentElement || v(e)) instanceof a && (e = e.host),
                e instanceof Document)
              )
                return;
            }
          })(e);
        return h(t) > h(n) ? t : n;
      }
      function g(e) {
        const t = l.get(e);
        for (const e of t || []) {
          if (e.isConnected) return e;
          t.delete(e);
        }
        return null;
      }
      function v(e) {
        return "function" == typeof e.getRootNode
          ? e.getRootNode()
          : e.parentNode
            ? v(e.parentNode)
            : e;
      }
      function w(e) {
        for (; e; ) {
          if (
            e instanceof HTMLElement &&
            "auto" === e.popover &&
            "showing" === u.get(e)
          )
            return e;
          if (
            ((e = e.parentElement || v(e)) instanceof a && (e = e.host),
            e instanceof Document)
          )
            return;
        }
      }
      function b(e) {
        return (
          !(e.hidden || e instanceof a) &&
          (!(
            e instanceof HTMLButtonElement ||
            e instanceof HTMLInputElement ||
            e instanceof HTMLSelectElement ||
            e instanceof HTMLTextAreaElement ||
            e instanceof HTMLOptGroupElement ||
            e instanceof HTMLOptionElement ||
            e instanceof HTMLFieldSetElement
          ) ||
            !e.disabled) &&
            !(e instanceof HTMLInputElement && "hidden" === e.type) &&
              !(e instanceof HTMLAnchorElement && "" === e.href) &&
                "number" == typeof e.tabIndex &&
          -1 !== e.tabIndex
        );
      }
      function E(e) {
        (function (e) {
          if (e.shadowRoot && !0 !== e.shadowRoot.delegatesFocus) return null;
          let t = e;
          t.shadowRoot && (t = t.shadowRoot);
          let n = t.querySelector("[autofocus]");
          if (n) return n;
          {
            const e = t.querySelectorAll("slot");
            for (const t of e) {
              const e = t.assignedElements({ flatten: !0 });
              for (const t of e) {
                if (t.hasAttribute("autofocus")) return t;
                if (((n = t.querySelector("[autofocus]")), n)) return n;
              }
            }
          }
          const o = e.ownerDocument.createTreeWalker(
            t,
            NodeFilter.SHOW_ELEMENT,
          );
          let r = o.currentNode;
          for (; r; ) {
            if (b(r)) return r;
            r = o.nextNode();
          }
        })(e)?.focus();
      }
      var y = new WeakMap();
      function S(e) {
        if (!d(e, !1)) return;
        const t = e.ownerDocument;
        if (
          !e.dispatchEvent(
            new o("beforetoggle", {
              cancelable: !0,
              oldState: "closed",
              newState: "open",
            }),
          )
        )
          return;
        if (!d(e, !1)) return;
        let n = !1;
        if ("auto" === e.popover) {
          const n = e.getAttribute("popover");
          if (
            (L(
              (function (e) {
                const t = new Map();
                let n = 0;
                const o = e.ownerDocument;
                for (const e of l.get(o) || []) t.set(e, n), (n += 1);
                t.set(e, n), (n += 1);
                let r = null;
                return (
                  (function (e) {
                    const n = w(e);
                    if (null === n) return null;
                    const o = t.get(n);
                    (null === r || t.get(r) < o) && (r = n);
                  })(e?.parentElement),
                  r
                );
              })(e) || t,
              !1,
              !0,
            ),
            n !== e.getAttribute("popover") || !d(e, !1))
          )
            return;
        }
        g(t) || (n = !0), y.delete(e);
        const r = t.activeElement;
        e.classList.add(":popover-open"),
          u.set(e, "showing"),
          c.has(t) || c.set(t, new Set()),
          c.get(t).add(e),
          E(e),
          "auto" === e.popover &&
            (l.has(t) || l.set(t, new Set()), l.get(t).add(e), D(f.get(e), !0)),
          n && r && "auto" === e.popover && y.set(e, r),
          i(e, "closed", "open");
      }
      function T(e, t = !1, n = !1) {
        if (!d(e, !0)) return;
        const r = e.ownerDocument;
        if ("auto" === e.popover && (L(e, t, n), !d(e, !0))) return;
        if (
          (D(f.get(e), !1),
          f.delete(e),
          n &&
            (e.dispatchEvent(
              new o("beforetoggle", { oldState: "open", newState: "closed" }),
            ),
            !d(e, !0)))
        )
          return;
        c.get(r)?.delete(e),
          l.get(r)?.delete(e),
          e.classList.remove(":popover-open"),
          u.set(e, "hidden"),
          n && i(e, "open", "closed");
        const a = y.get(e);
        a && (y.delete(e), t && a.focus());
      }
      function M(e, t = !1, n = !1) {
        let o = g(e);
        for (; o; ) T(o, t, n), (o = g(e));
      }
      function L(e, t, n) {
        const o = e.ownerDocument || e;
        if (e instanceof Document) return M(o, t, n);
        let r = null,
          i = !1;
        for (const t of l.get(o) || [])
          if (t === e) i = !0;
          else if (i) {
            r = t;
            break;
          }
        if (!i) return M(o, t, n);
        for (; r && "showing" === p(r) && l.get(o)?.size; ) T(r, t, n);
      }
      var A = new WeakMap();
      function H(e) {
        if (!e.isTrusted) return;
        const t = e.composedPath()[0];
        if (!t) return;
        const n = t.ownerDocument;
        if (!g(n)) return;
        const o = m(t);
        if (o && "pointerdown" === e.type) A.set(n, o);
        else if ("pointerup" === e.type) {
          const e = A.get(n) === o;
          A.delete(n), e && L(o || n, !1, !0);
        }
      }
      var k = new WeakMap();
      function D(e, t = !1) {
        if (!e) return;
        k.has(e) || k.set(e, e.getAttribute("aria-expanded"));
        const n = e.popoverTargetElement;
        if (n instanceof HTMLElement && "auto" === n.popover)
          e.setAttribute("aria-expanded", String(t));
        else {
          const t = k.get(e);
          t
            ? e.setAttribute("aria-expanded", t)
            : e.removeAttribute("aria-expanded");
        }
      }
      var x = globalThis.ShadowRoot || function () {};
      function N() {
        return (
          "undefined" != typeof HTMLElement &&
          "object" == typeof HTMLElement.prototype &&
          "popover" in HTMLElement.prototype
        );
      }
      function P(e, t, n) {
        const o = e[t];
        Object.defineProperty(e, t, {
          value(e) {
            return o.call(this, n(e));
          },
        });
      }
      var R = /(^|[^\\]):popover-open\b/g,
        W =
          "\n  :where([popover]) {\n    position: fixed;\n    z-index: 2147483647;\n    inset: 0;\n    padding: 0.25em;\n    width: fit-content;\n    height: fit-content;\n    border-width: initial;\n    border-color: initial;\n    border-image: initial;\n    border-style: solid;\n    background-color: canvas;\n    color: canvastext;\n    overflow: auto;\n    margin: auto;\n  }\n\n  :where(dialog[popover][open]) {\n    display: revert;\n  }\n\n  :where([anchor].\\:popover-open) {\n    inset: auto;\n  }\n\n  :where([anchor]:popover-open) {\n    inset: auto;\n  }\n\n  @supports not (background-color: canvas) {\n    :where([popover]) {\n      background-color: white;\n      color: black;\n    }\n  }\n\n  @supports (width: -moz-fit-content) {\n    :where([popover]) {\n      width: -moz-fit-content;\n      height: -moz-fit-content;\n    }\n  }\n\n  @supports not (inset: 0) {\n    :where([popover]) {\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n    }\n  }\n\n  :where([popover]:not(.\\:popover-open)) {\n    display: none;\n  }\n",
        C = null;
      function q(e) {
        if (null === C)
          try {
            (C = new CSSStyleSheet()).replaceSync(W);
          } catch {
            C = !1;
          }
        if (!1 === C) {
          const t = document.createElement("style");
          (t.textContent = W),
            e instanceof Document ? e.head.prepend(t) : e.prepend(t);
        } else e.adoptedStyleSheets = [C, ...e.adoptedStyleSheets];
      }
      function O() {
        function e(e) {
          return (
            e?.includes(":popover-open") &&
              (e = e.replace(R, "$1.\\:popover-open")),
            e
          );
        }
        (window.ToggleEvent = window.ToggleEvent || o),
          P(Document.prototype, "querySelector", e),
          P(Document.prototype, "querySelectorAll", e),
          P(Element.prototype, "querySelector", e),
          P(Element.prototype, "querySelectorAll", e),
          P(Element.prototype, "matches", e),
          P(Element.prototype, "closest", e),
          P(DocumentFragment.prototype, "querySelectorAll", e),
          P(DocumentFragment.prototype, "querySelectorAll", e),
          Object.defineProperties(HTMLElement.prototype, {
            popover: {
              enumerable: !0,
              configurable: !0,
              get() {
                if (!this.hasAttribute("popover")) return null;
                const e = (this.getAttribute("popover") || "").toLowerCase();
                return "" === e || "auto" == e ? "auto" : "manual";
              },
              set(e) {
                this.setAttribute("popover", e);
              },
            },
            showPopover: {
              enumerable: !0,
              configurable: !0,
              value() {
                S(this);
              },
            },
            hidePopover: {
              enumerable: !0,
              configurable: !0,
              value() {
                T(this, !0, !0);
              },
            },
            togglePopover: {
              enumerable: !0,
              configurable: !0,
              value(e) {
                ("showing" === u.get(this) && void 0 === e) || !1 === e
                  ? T(this, !0, !0)
                  : (void 0 !== e && !0 !== e) || S(this);
              },
            },
          });
        const t = Element.prototype.attachShadow;
        t &&
          Object.defineProperties(Element.prototype, {
            attachShadow: {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value(e) {
                const n = t.call(this, e);
                return q(n), n;
              },
            },
          });
        const n = HTMLElement.prototype.attachInternals;
        n &&
          Object.defineProperties(HTMLElement.prototype, {
            attachInternals: {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value() {
                const e = n.call(this);
                return e.shadowRoot && q(e.shadowRoot), e;
              },
            },
          });
        const r = new WeakMap();
        function i(e) {
          Object.defineProperties(e.prototype, {
            popoverTargetElement: {
              enumerable: !0,
              configurable: !0,
              set(e) {
                if (null === e)
                  this.removeAttribute("popovertarget"), r.delete(this);
                else {
                  if (!(e instanceof Element))
                    throw new TypeError(
                      "popoverTargetElement must be an element or null",
                    );
                  this.setAttribute("popovertarget", ""), r.set(this, e);
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
                const e = r.get(this);
                if (e && e.isConnected) return e;
                if (e && !e.isConnected) return r.delete(this), null;
                const t = v(this),
                  n = this.getAttribute("popovertarget");
                return (
                  ((t instanceof Document || t instanceof x) &&
                    n &&
                    t.getElementById(n)) ||
                  null
                );
              },
            },
            popoverTargetAction: {
              enumerable: !0,
              configurable: !0,
              get() {
                const e = (
                  this.getAttribute("popovertargetaction") || ""
                ).toLowerCase();
                return "show" === e || "hide" === e ? e : "toggle";
              },
              set(e) {
                this.setAttribute("popovertargetaction", e);
              },
            },
          });
        }
        i(HTMLButtonElement), i(HTMLInputElement);
        const a = (e) => {
            const t = e.composedPath()[0];
            if (!(t instanceof Element) || t?.shadowRoot) return;
            const n = v(t);
            if (!(n instanceof x || n instanceof Document)) return;
            const o = t.closest("[popovertargetaction],[popovertarget]");
            return o
              ? ((function (e) {
                  const t = e.popoverTargetElement;
                  if (!(t instanceof HTMLElement)) return;
                  const n = p(t);
                  ("show" === e.popoverTargetAction && "showing" === n) ||
                    ("hide" === e.popoverTargetAction && "hidden" === n) ||
                    ("showing" === n
                      ? T(t, !0, !0)
                      : d(t, !1) && (f.set(t, e), S(t)));
                })(o),
                void e.preventDefault())
              : void 0;
          },
          s = (e) => {
            const t = e.key,
              n = e.target;
            e.defaultPrevented ||
              !n ||
              ("Escape" !== t && "Esc" !== t) ||
              L(n.ownerDocument, !0, !0);
          };
        var c;
        (c = document).addEventListener("click", a),
          c.addEventListener("keydown", s),
          c.addEventListener("pointerdown", H),
          c.addEventListener("pointerup", H),
          q(document);
      }
    },
  },
]);
