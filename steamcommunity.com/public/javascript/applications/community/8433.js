/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
"use strict";
(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [8433],
    {
      8433: (_, I, R) => {
        R.r(I), R.d(I, { apply: () => Z, isSupported: () => X });
        var m = class extends Event {
            oldState;
            newState;
            constructor(e, { oldState: t = "", newState: o = "", ...r } = {}) {
              super(e, r),
                (this.oldState = String(t || "")),
                (this.newState = String(o || ""));
            }
          },
          x = new WeakMap();
        function F(e, t, o) {
          x.set(
            e,
            setTimeout(() => {
              x.has(e) &&
                e.dispatchEvent(
                  new m("toggle", { cancelable: !1, oldState: t, newState: o }),
                );
            }, 0),
          );
        }
        var L = globalThis.ShadowRoot || function () {},
          V = globalThis.HTMLDialogElement || function () {},
          y = new WeakMap(),
          p = new WeakMap(),
          v = new WeakMap();
        function E(e) {
          return v.get(e) || "hidden";
        }
        var S = new WeakMap();
        function B(e) {
          const t = e.popoverTargetElement;
          if (!(t instanceof HTMLElement)) return;
          const o = E(t);
          (e.popoverTargetAction === "show" && o === "showing") ||
            (e.popoverTargetAction === "hide" && o === "hidden") ||
            (o === "showing" ? w(t, !0, !0) : f(t, !1) && (S.set(t, e), T(t)));
        }
        function f(e, t) {
          return !(
            (e.popover !== "auto" && e.popover !== "manual") ||
            !e.isConnected ||
            (t && E(e) !== "showing") ||
            (!t && E(e) !== "hidden") ||
            (e instanceof V && e.hasAttribute("open")) ||
            document.fullscreenElement === e
          );
        }
        function N(e) {
          return e
            ? Array.from(p.get(e.ownerDocument) || []).indexOf(e) + 1
            : 0;
        }
        function G(e) {
          const t = O(e),
            o = K(e);
          return N(t) > N(o) ? t : o;
        }
        function A(e) {
          const t = p.get(e);
          for (const o of t || [])
            if (!o.isConnected) t.delete(o);
            else return o;
          return null;
        }
        function g(e) {
          return typeof e.getRootNode == "function"
            ? e.getRootNode()
            : e.parentNode
              ? g(e.parentNode)
              : e;
        }
        function O(e) {
          for (; e; ) {
            if (
              e instanceof HTMLElement &&
              e.popover === "auto" &&
              v.get(e) === "showing"
            )
              return e;
            if (
              ((e = e.parentElement || g(e)),
              e instanceof L && (e = e.host),
              e instanceof Document)
            )
              return;
          }
        }
        function K(e) {
          for (; e; ) {
            const t = e.popoverTargetElement;
            if (t instanceof HTMLElement) return t;
            if (
              ((e = e.parentElement || g(e)),
              e instanceof L && (e = e.host),
              e instanceof Document)
            )
              return;
          }
        }
        function Q(e) {
          const t = new Map();
          let o = 0;
          const r = e.ownerDocument;
          for (const u of p.get(r) || []) t.set(u, o), (o += 1);
          t.set(e, o), (o += 1);
          let i = null;
          function a(u) {
            const h = O(u);
            if (h === null) return null;
            const n = t.get(h);
            (i === null || t.get(i) < n) && (i = h);
          }
          return a(e?.parentElement), i;
        }
        function U(e) {
          return e.hidden ||
            e instanceof L ||
            ((e instanceof HTMLButtonElement ||
              e instanceof HTMLInputElement ||
              e instanceof HTMLSelectElement ||
              e instanceof HTMLTextAreaElement ||
              e instanceof HTMLOptGroupElement ||
              e instanceof HTMLOptionElement ||
              e instanceof HTMLFieldSetElement) &&
              e.disabled) ||
            (e instanceof HTMLInputElement && e.type === "hidden") ||
            (e instanceof HTMLAnchorElement && e.href === "")
            ? !1
            : typeof e.tabIndex == "number" && e.tabIndex !== -1;
        }
        function $(e) {
          if (e.shadowRoot && e.shadowRoot.delegatesFocus !== !0) return null;
          let t = e;
          t.shadowRoot && (t = t.shadowRoot);
          let o = t.querySelector("[autofocus]");
          if (o) return o;
          {
            const a = t.querySelectorAll("slot");
            for (const u of a) {
              const h = u.assignedElements({ flatten: !0 });
              for (const n of h) {
                if (n.hasAttribute("autofocus")) return n;
                if (((o = n.querySelector("[autofocus]")), o)) return o;
              }
            }
          }
          const r = e.ownerDocument.createTreeWalker(
            t,
            NodeFilter.SHOW_ELEMENT,
          );
          let i = r.currentNode;
          for (; i; ) {
            if (U(i)) return i;
            i = r.nextNode();
          }
        }
        function J(e) {
          $(e)?.focus();
        }
        var M = new WeakMap();
        function T(e) {
          if (!f(e, !1)) return;
          const t = e.ownerDocument;
          if (
            !e.dispatchEvent(
              new m("beforetoggle", {
                cancelable: !0,
                oldState: "closed",
                newState: "open",
              }),
            ) ||
            !f(e, !1)
          )
            return;
          let o = !1;
          if (e.popover === "auto") {
            const i = e.getAttribute("popover"),
              a = Q(e) || t;
            if ((k(a, !1, !0), i !== e.getAttribute("popover") || !f(e, !1)))
              return;
          }
          A(t) || (o = !0), M.delete(e);
          const r = t.activeElement;
          e.classList.add(":popover-open"),
            v.set(e, "showing"),
            y.has(t) || y.set(t, new Set()),
            y.get(t).add(e),
            J(e),
            e.popover === "auto" &&
              (p.has(t) || p.set(t, new Set()),
              p.get(t).add(e),
              q(S.get(e), !0)),
            o && r && e.popover === "auto" && M.set(e, r),
            F(e, "closed", "open");
        }
        function w(e, t = !1, o = !1) {
          if (!f(e, !0)) return;
          const r = e.ownerDocument;
          if (
            (e.popover === "auto" && (k(e, t, o), !f(e, !0))) ||
            (q(S.get(e), !1),
            S.delete(e),
            o &&
              (e.dispatchEvent(
                new m("beforetoggle", { oldState: "open", newState: "closed" }),
              ),
              !f(e, !0)))
          )
            return;
          y.get(r)?.delete(e),
            p.get(r)?.delete(e),
            e.classList.remove(":popover-open"),
            v.set(e, "hidden"),
            o && F(e, "open", "closed");
          const i = M.get(e);
          i && (M.delete(e), t && i.focus());
        }
        function C(e, t = !1, o = !1) {
          let r = A(e);
          for (; r; ) w(r, t, o), (r = A(e));
        }
        function k(e, t, o) {
          const r = e.ownerDocument || e;
          if (e instanceof Document) return C(r, t, o);
          let i = null,
            a = !1;
          for (const u of p.get(r) || [])
            if (u === e) a = !0;
            else if (a) {
              i = u;
              break;
            }
          if (!a) return C(r, t, o);
          for (; i && E(i) === "showing" && p.get(r)?.size; ) w(i, t, o);
        }
        var P = new WeakMap();
        function W(e) {
          if (!e.isTrusted) return;
          const t = e.composedPath()[0];
          if (!t) return;
          const o = t.ownerDocument;
          if (!A(o)) return;
          const i = G(t);
          if (i && e.type === "pointerdown") P.set(o, i);
          else if (e.type === "pointerup") {
            const a = P.get(o) === i;
            P.delete(o), a && k(i || o, !1, !0);
          }
        }
        var D = new WeakMap();
        function q(e, t = !1) {
          if (!e) return;
          D.has(e) || D.set(e, e.getAttribute("aria-expanded"));
          const o = e.popoverTargetElement;
          if (o instanceof HTMLElement && o.popover === "auto")
            e.setAttribute("aria-expanded", String(t));
          else {
            const r = D.get(e);
            r
              ? e.setAttribute("aria-expanded", r)
              : e.removeAttribute("aria-expanded");
          }
        }
        var j = globalThis.ShadowRoot || function () {};
        function X() {
          return (
            typeof HTMLElement < "u" &&
            typeof HTMLElement.prototype == "object" &&
            "popover" in HTMLElement.prototype
          );
        }
        function c(e, t, o) {
          const r = e[t];
          Object.defineProperty(e, t, {
            value(i) {
              return r.call(this, o(i));
            },
          });
        }
        var Y = /(^|[^\\]):popover-open\b/g,
          z = `
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
          d = null;
        function H(e) {
          if (d === null)
            try {
              (d = new CSSStyleSheet()), d.replaceSync(z);
            } catch {
              d = !1;
            }
          if (d === !1) {
            const t = document.createElement("style");
            (t.textContent = z),
              e instanceof Document ? e.head.prepend(t) : e.prepend(t);
          } else e.adoptedStyleSheets = [d, ...e.adoptedStyleSheets];
        }
        function Z() {
          window.ToggleEvent = window.ToggleEvent || m;
          function e(n) {
            return (
              n?.includes(":popover-open") &&
                (n = n.replace(Y, "$1.\\:popover-open")),
              n
            );
          }
          c(Document.prototype, "querySelector", e),
            c(Document.prototype, "querySelectorAll", e),
            c(Element.prototype, "querySelector", e),
            c(Element.prototype, "querySelectorAll", e),
            c(Element.prototype, "matches", e),
            c(Element.prototype, "closest", e),
            c(DocumentFragment.prototype, "querySelectorAll", e),
            c(DocumentFragment.prototype, "querySelectorAll", e),
            Object.defineProperties(HTMLElement.prototype, {
              popover: {
                enumerable: !0,
                configurable: !0,
                get() {
                  if (!this.hasAttribute("popover")) return null;
                  const n = (this.getAttribute("popover") || "").toLowerCase();
                  return n === "" || n == "auto" ? "auto" : "manual";
                },
                set(n) {
                  this.setAttribute("popover", n);
                },
              },
              showPopover: {
                enumerable: !0,
                configurable: !0,
                value() {
                  T(this);
                },
              },
              hidePopover: {
                enumerable: !0,
                configurable: !0,
                value() {
                  w(this, !0, !0);
                },
              },
              togglePopover: {
                enumerable: !0,
                configurable: !0,
                value(n) {
                  (v.get(this) === "showing" && n === void 0) || n === !1
                    ? w(this, !0, !0)
                    : (n === void 0 || n === !0) && T(this);
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
                value(n) {
                  const s = t.call(this, n);
                  return H(s), s;
                },
              },
            });
          const o = HTMLElement.prototype.attachInternals;
          o &&
            Object.defineProperties(HTMLElement.prototype, {
              attachInternals: {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value() {
                  const n = o.call(this);
                  return n.shadowRoot && H(n.shadowRoot), n;
                },
              },
            });
          const r = new WeakMap();
          function i(n) {
            Object.defineProperties(n.prototype, {
              popoverTargetElement: {
                enumerable: !0,
                configurable: !0,
                set(s) {
                  if (s === null)
                    this.removeAttribute("popovertarget"), r.delete(this);
                  else if (s instanceof Element)
                    this.setAttribute("popovertarget", ""), r.set(this, s);
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
                  const s = r.get(this);
                  if (s && s.isConnected) return s;
                  if (s && !s.isConnected) return r.delete(this), null;
                  const l = g(this),
                    b = this.getAttribute("popovertarget");
                  return (
                    ((l instanceof Document || l instanceof j) &&
                      b &&
                      l.getElementById(b)) ||
                    null
                  );
                },
              },
              popoverTargetAction: {
                enumerable: !0,
                configurable: !0,
                get() {
                  const s = (
                    this.getAttribute("popovertargetaction") || ""
                  ).toLowerCase();
                  return s === "show" || s === "hide" ? s : "toggle";
                },
                set(s) {
                  this.setAttribute("popovertargetaction", s);
                },
              },
            });
          }
          i(HTMLButtonElement), i(HTMLInputElement);
          const a = (n) => {
              const s = n.composedPath()[0];
              if (!(s instanceof Element) || s?.shadowRoot) return;
              const l = g(s);
              if (!(l instanceof j || l instanceof Document)) return;
              const b = s.closest("[popovertargetaction],[popovertarget]");
              if (b) {
                B(b), n.preventDefault();
                return;
              }
            },
            u = (n) => {
              const s = n.key,
                l = n.target;
              !n.defaultPrevented &&
                l &&
                (s === "Escape" || s === "Esc") &&
                k(l.ownerDocument, !0, !0);
            };
          ((n) => {
            n.addEventListener("click", a),
              n.addEventListener("keydown", u),
              n.addEventListener("pointerdown", W),
              n.addEventListener("pointerup", W);
          })(document),
            H(document);
        }
      },
    },
  ]);
})();
