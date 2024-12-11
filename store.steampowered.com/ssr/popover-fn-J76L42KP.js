const CLSTAMP = 9404702;

import "./chunk-GK2ITS7J.js";
var M = class extends Event {
    oldState;
    newState;
    constructor(e, { oldState: t = "", newState: o = "", ...r } = {}) {
      super(e, r),
        (this.oldState = String(t || "")),
        (this.newState = String(o || ""));
    }
  },
  x = new WeakMap();
function W(e, t, o) {
  x.set(
    e,
    setTimeout(() => {
      x.has(e) &&
        e.dispatchEvent(
          new M("toggle", { cancelable: !1, oldState: t, newState: o }),
        );
    }, 0),
  );
}
var H = globalThis.ShadowRoot || function () {},
  j = globalThis.HTMLDialogElement || function () {},
  y = new WeakMap(),
  l = new WeakMap(),
  b = new WeakMap();
function E(e) {
  return b.get(e) || "hidden";
}
var m = new WeakMap();
function z(e) {
  let t = e.popoverTargetElement;
  if (!(t instanceof HTMLElement)) return;
  let o = E(t);
  (e.popoverTargetAction === "show" && o === "showing") ||
    (e.popoverTargetAction === "hide" && o === "hidden") ||
    (o === "showing" ? w(t, !0, !0) : f(t, !1) && (m.set(t, e), D(t)));
}
function f(e, t) {
  return !(
    (e.popover !== "auto" && e.popover !== "manual") ||
    !e.isConnected ||
    (t && E(e) !== "showing") ||
    (!t && E(e) !== "hidden") ||
    (e instanceof j && e.hasAttribute("open")) ||
    document.fullscreenElement === e
  );
}
function I(e) {
  return e ? Array.from(l.get(e.ownerDocument) || []).indexOf(e) + 1 : 0;
}
function V(e) {
  let t = q(e),
    o = B(e);
  return I(t) > I(o) ? t : o;
}
function S(e) {
  let t = l.get(e);
  for (let o of t || [])
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
function q(e) {
  for (; e; ) {
    if (
      e instanceof HTMLElement &&
      e.popover === "auto" &&
      b.get(e) === "showing"
    )
      return e;
    if (
      ((e = e.parentElement || g(e)),
      e instanceof H && (e = e.host),
      e instanceof Document)
    )
      return;
  }
}
function B(e) {
  for (; e; ) {
    let t = e.popoverTargetElement;
    if (t instanceof HTMLElement) return t;
    if (
      ((e = e.parentElement || g(e)),
      e instanceof H && (e = e.host),
      e instanceof Document)
    )
      return;
  }
}
function G(e) {
  let t = new Map(),
    o = 0,
    r = e.ownerDocument;
  for (let u of l.get(r) || []) t.set(u, o), (o += 1);
  t.set(e, o), (o += 1);
  let i = null;
  function s(u) {
    let d = q(u);
    if (d === null) return null;
    let n = t.get(d);
    (i === null || t.get(i) < n) && (i = d);
  }
  return s(e?.parentElement), i;
}
function K(e) {
  return e.hidden ||
    e instanceof H ||
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
function Q(e) {
  if (e.shadowRoot && e.shadowRoot.delegatesFocus !== !0) return null;
  let t = e;
  t.shadowRoot && (t = t.shadowRoot);
  let o = t.querySelector("[autofocus]");
  if (o) return o;
  {
    let s = t.querySelectorAll("slot");
    for (let u of s) {
      let d = u.assignedElements({ flatten: !0 });
      for (let n of d) {
        if (n.hasAttribute("autofocus")) return n;
        if (((o = n.querySelector("[autofocus]")), o)) return o;
      }
    }
  }
  let r = e.ownerDocument.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
    i = r.currentNode;
  for (; i; ) {
    if (K(i)) return i;
    i = r.nextNode();
  }
}
function U(e) {
  Q(e)?.focus();
}
var A = new WeakMap();
function D(e) {
  if (!f(e, !1)) return;
  let t = e.ownerDocument;
  if (
    !e.dispatchEvent(
      new M("beforetoggle", {
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
    let i = e.getAttribute("popover"),
      s = G(e) || t;
    if ((L(s, !1, !0), i !== e.getAttribute("popover") || !f(e, !1))) return;
  }
  S(t) || (o = !0), A.delete(e);
  let r = t.activeElement;
  e.classList.add(":popover-open"),
    b.set(e, "showing"),
    y.has(t) || y.set(t, new Set()),
    y.get(t).add(e),
    U(e),
    e.popover === "auto" &&
      (l.has(t) || l.set(t, new Set()), l.get(t).add(e), C(m.get(e), !0)),
    o && r && e.popover === "auto" && A.set(e, r),
    W(e, "closed", "open");
}
function w(e, t = !1, o = !1) {
  if (!f(e, !0)) return;
  let r = e.ownerDocument;
  if (
    (e.popover === "auto" && (L(e, t, o), !f(e, !0))) ||
    (C(m.get(e), !1),
    m.delete(e),
    o &&
      (e.dispatchEvent(
        new M("beforetoggle", { oldState: "open", newState: "closed" }),
      ),
      !f(e, !0)))
  )
    return;
  y.get(r)?.delete(e),
    l.get(r)?.delete(e),
    e.classList.remove(":popover-open"),
    b.set(e, "hidden"),
    o && W(e, "open", "closed");
  let i = A.get(e);
  i && (A.delete(e), t && i.focus());
}
function R(e, t = !1, o = !1) {
  let r = S(e);
  for (; r; ) w(r, t, o), (r = S(e));
}
function L(e, t, o) {
  let r = e.ownerDocument || e;
  if (e instanceof Document) return R(r, t, o);
  let i = null,
    s = !1;
  for (let u of l.get(r) || [])
    if (u === e) s = !0;
    else if (s) {
      i = u;
      break;
    }
  if (!s) return R(r, t, o);
  for (; i && E(i) === "showing" && l.get(r)?.size; ) w(i, t, o);
}
var T = new WeakMap();
function F(e) {
  if (!e.isTrusted) return;
  let t = e.composedPath()[0];
  if (!t) return;
  let o = t.ownerDocument;
  if (!S(o)) return;
  let i = V(t);
  if (i && e.type === "pointerdown") T.set(o, i);
  else if (e.type === "pointerup") {
    let s = T.get(o) === i;
    T.delete(o), s && L(i || o, !1, !0);
  }
}
var k = new WeakMap();
function C(e, t = !1) {
  if (!e) return;
  k.has(e) || k.set(e, e.getAttribute("aria-expanded"));
  let o = e.popoverTargetElement;
  if (o instanceof HTMLElement && o.popover === "auto")
    e.setAttribute("aria-expanded", String(t));
  else {
    let r = k.get(e);
    r ? e.setAttribute("aria-expanded", r) : e.removeAttribute("aria-expanded");
  }
}
var N = globalThis.ShadowRoot || function () {};
function $() {
  return (
    typeof HTMLElement < "u" &&
    typeof HTMLElement.prototype == "object" &&
    "popover" in HTMLElement.prototype
  );
}
function c(e, t, o) {
  let r = e[t];
  Object.defineProperty(e, t, {
    value(i) {
      return r.call(this, o(i));
    },
  });
}
var _ = /(^|[^\\]):popover-open\b/g,
  O = `
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
  h = null;
function P(e) {
  if (h === null)
    try {
      (h = new CSSStyleSheet()), h.replaceSync(O);
    } catch {
      h = !1;
    }
  if (h === !1) {
    let t = document.createElement("style");
    (t.textContent = O),
      e instanceof Document ? e.head.prepend(t) : e.prepend(t);
  } else e.adoptedStyleSheets = [h, ...e.adoptedStyleSheets];
}
function J() {
  window.ToggleEvent = window.ToggleEvent || M;
  function e(n) {
    return (
      n?.includes(":popover-open") && (n = n.replace(_, "$1.\\:popover-open")),
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
          let n = (this.getAttribute("popover") || "").toLowerCase();
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
          D(this);
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
          (b.get(this) === "showing" && n === void 0) || n === !1
            ? w(this, !0, !0)
            : (n === void 0 || n === !0) && D(this);
        },
      },
    });
  let t = Element.prototype.attachShadow;
  t &&
    Object.defineProperties(Element.prototype, {
      attachShadow: {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value(n) {
          let a = t.call(this, n);
          return P(a), a;
        },
      },
    });
  let o = HTMLElement.prototype.attachInternals;
  o &&
    Object.defineProperties(HTMLElement.prototype, {
      attachInternals: {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value() {
          let n = o.call(this);
          return n.shadowRoot && P(n.shadowRoot), n;
        },
      },
    });
  let r = new WeakMap();
  function i(n) {
    Object.defineProperties(n.prototype, {
      popoverTargetElement: {
        enumerable: !0,
        configurable: !0,
        set(a) {
          if (a === null) this.removeAttribute("popovertarget"), r.delete(this);
          else if (a instanceof Element)
            this.setAttribute("popovertarget", ""), r.set(this, a);
          else
            throw new TypeError(
              "popoverTargetElement must be an element or null",
            );
        },
        get() {
          if (
            (this.localName !== "button" && this.localName !== "input") ||
            (this.localName === "input" &&
              this.type !== "reset" &&
              this.type !== "image" &&
              this.type !== "button") ||
            this.disabled ||
            (this.form && this.type === "submit")
          )
            return null;
          let a = r.get(this);
          if (a && a.isConnected) return a;
          if (a && !a.isConnected) return r.delete(this), null;
          let p = g(this),
            v = this.getAttribute("popovertarget");
          return (
            ((p instanceof Document || p instanceof N) &&
              v &&
              p.getElementById(v)) ||
            null
          );
        },
      },
      popoverTargetAction: {
        enumerable: !0,
        configurable: !0,
        get() {
          let a = (
            this.getAttribute("popovertargetaction") || ""
          ).toLowerCase();
          return a === "show" || a === "hide" ? a : "toggle";
        },
        set(a) {
          this.setAttribute("popovertargetaction", a);
        },
      },
    });
  }
  i(HTMLButtonElement), i(HTMLInputElement);
  let s = (n) => {
      let a = n.composedPath()[0];
      if (!(a instanceof Element) || a?.shadowRoot) return;
      let p = g(a);
      if (!(p instanceof N || p instanceof Document)) return;
      let v = a.closest("[popovertargetaction],[popovertarget]");
      if (v) {
        z(v), n.preventDefault();
        return;
      }
    },
    u = (n) => {
      let a = n.key,
        p = n.target;
      !n.defaultPrevented &&
        p &&
        (a === "Escape" || a === "Esc") &&
        L(p.ownerDocument, !0, !0);
    };
  ((n) => {
    n.addEventListener("click", s),
      n.addEventListener("keydown", u),
      n.addEventListener("pointerdown", F),
      n.addEventListener("pointerup", F);
  })(document),
    P(document);
}
export { J as apply, $ as isSupported };
