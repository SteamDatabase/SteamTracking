import {
  b as wi,
  d as po,
  e as Ii,
  f as yi,
  g as Bt,
  h as Pt,
  i as Fi,
  j as ki,
  k as mo,
  l as Bi,
  m as Wi,
  n as Vi,
  o as fo,
  p as Wt,
  q as Vt,
  r as go,
  u as Hi,
  v as Gi,
  w as Ui,
  x as Yi,
} from "./chunk-3M5KPFHS.js";
import { b as se } from "./chunk-LUHKJQF5.js";
import { a as La } from "./chunk-TLZYMTJU.js";
import { a as qi } from "./chunk-VYHOYJSC.js";
import {
  e as Ti,
  g as St,
  j as Ei,
  k as Li,
  l as Oi,
  q as Ni,
} from "./chunk-VPTROGLK.js";
import { a as g } from "./chunk-WLOEENGY.js";
import {
  a as Ae,
  d as Di,
  i as ye,
  u as M,
  v as xi,
  x as Mi,
} from "./chunk-QI2ZO2NP.js";
import { a as vt } from "./chunk-QEWMQERG.js";
import {
  c as Sn,
  d as xt,
  e as Mt,
  f as zi,
  h as Xi,
} from "./chunk-FO6E325R.js";
import { a as Ai } from "./chunk-2UKCN5VI.js";
import { a as O } from "./chunk-RTOCT7NB.js";
import {
  C as vi,
  G as Ie,
  H as Dn,
  J as Rt,
  K as _i,
  a as _e,
  b as gi,
  e as hi,
  f as bi,
  g as Ci,
  l as De,
} from "./chunk-ZFSCJEEG.js";
import {
  B as uo,
  C as mi,
  D as fi,
  a as nt,
  b as ve,
  c as Cn,
  d as si,
  e as so,
  f as li,
  g as _t,
  h as lo,
  i as vn,
  j as co,
  k as Dt,
  m as ci,
  q as _n,
  s as di,
  t as ui,
  v as pi,
} from "./chunk-ZAV64SLM.js";
import { a as Ri, c as Rn, e as Si, f as Pi } from "./chunk-4EOPHITS.js";
import { h as Y, j as kt, o as ae, s as h } from "./chunk-OEXNR4NM.js";
import {
  b as Ct,
  c as bn,
  d as ai,
  j as Ne,
  p as b,
} from "./chunk-ZZOBHWVT.js";
import { a as D } from "./chunk-3GMFNQR5.js";
import { e as u, g as f, h as ri } from "./chunk-VTJ2AC5Q.js";
var V = u(D());
function Qi(o) {
  return o == 1 || o == 2 || o == 13;
}
var bo = u(D());
var Pn = u(b());
var ho = class {
  m_Promise;
  m_Value = void 0;
  constructor(e) {
    ye(this), (this.promise = e);
  }
  set promise(e) {
    (this.m_Promise = e),
      (this.m_Value = void 0),
      e?.then((t) => {
        this.m_Promise === e && (this.m_Value = t);
      });
  }
  get promise() {
    return this.m_Promise;
  }
  get value() {
    return this.m_Value;
  }
};
f([Ae], ho.prototype, "m_Value", 2);
function Re(o, e, t) {
  return bo.forwardRef(function (i, r) {
    return (0, Pn.jsx)("div", {
      ...t,
      role: e,
      ...i,
      className: g(o, i.className),
      ref: r,
    });
  });
}
function ji(o) {
  if (typeof o != "string") return NaN;
  let t = !o.includes("ms") && o.includes("s"),
    n = Number.parseFloat(o);
  return t && (n *= 1e3), n;
}
var q = u(D()),
  Ki = u(vt());
var Zi = u(D());
var ot = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var Co = u(b()),
  ze = class extends Zi.Component {
    m_elHover;
    m_bNoSpace = !1;
    state = { x: void 0, y: void 0, hoverPositionReady: !1 };
    bindHover(e) {
      (this.m_elHover = e || void 0), this.positionHover();
    }
    componentDidUpdate() {
      this.positionHover();
    }
    render() {
      let {
          target: e,
          visibilityObserver: t,
          className: n,
          style: i,
          bEnablePointerEvents: r,
          direction: a,
          nBodyAlignment: s,
          nBodyDistance: c,
          nAllowOffscreenPx: l,
          nMaxLateralMoveOnScreen: d,
          children: p,
          onNoSpace: m,
          bTopmost: C,
          ...v
        } = this.props,
        _ = Object.assign({ left: this.state.x, top: this.state.y }, i),
        P = !t || t.visible;
      return (0, Co.jsx)("div", {
        className: g(ot.HoverPositionOuter, C && ot.HoverAboveModal),
        children: (0, Co.jsx)("div", {
          ...v,
          className: g(
            ot.HoverPosition,
            P && this.state.hoverPositionReady && ot.Ready,
            this.m_bNoSpace && ot.NoSpace,
            r && ot.EnablePointerEvents,
            n,
          ),
          style: _,
          ref: this.bindHover,
          children: p,
        }),
      });
    }
    positionHover() {
      let e = this.m_elHover,
        t = this.props.target;
      if (
        !e ||
        !t ||
        (this.state.hoverPositionReady &&
          this.props.visibilityObserver &&
          !this.props.visibilityObserver.visible)
      )
        return;
      let n = t.ownerDocument.defaultView;
      if (!n || n.closed) return;
      let i = e.querySelector(".hover_arrow.left"),
        r = e.querySelector(".hover_arrow.right"),
        a = e.querySelector(".hover_arrow.top"),
        s = e.querySelector(".hover_arrow.bottom"),
        c = t.getBoundingClientRect(),
        l = e.getBoundingClientRect(),
        d =
          this.props.direction == "overlay" ||
          this.props.direction == "overlay-center";
      i && i.setAttribute("style", "display: none;"),
        r && r.setAttribute("style", "display: none;"),
        a && a.setAttribute("style", "display: none;"),
        s && s.setAttribute("style", "display: none;");
      let {
          nBodyDistance: p = 8,
          direction: m = "right",
          nBodyAlignment: C = 0.5,
        } = this.props,
        {
          nLeft: v,
          nTop: _,
          nOverflow: P,
          nLateralOverflow: I,
        } = Ji(m, C, p, c, l, n.innerWidth, n.innerHeight);
      if (P > (this.props.nAllowOffscreenPx ?? 10) && !d) {
        let k = Oa(this.props.direction ?? "right"),
          {
            nLeft: U,
            nTop: B,
            nOverflow: G,
            nLateralOverflow: ne,
          } = Ji(k, C, p, c, l, n.innerWidth, n.innerHeight);
        if (
          (G < P && ((m = k), (v = U), (_ = B), (P = G), (I = ne)),
          P > (this.props.nAllowOffscreenPx ?? 10))
        ) {
          console.log(
            "Not showing hover because it didn't fit in the main or alt direction",
          ),
            e.setAttribute("style", "display: none;"),
            (this.m_bNoSpace = !0),
            this.props.onNoSpace && this.props.onNoSpace();
          return;
        }
      }
      this.props.nMaxLateralMoveOnScreen !== 0 &&
        !d &&
        ([_, v] = Na(
          this.props.nMaxLateralMoveOnScreen,
          I,
          m ?? "right",
          _,
          v,
        ));
      let A = null;
      switch (m) {
        case "left":
          A = r;
          break;
        case "right":
          A = i;
          break;
        case "top":
          A = s;
          break;
        case "bottom":
          A = a;
          break;
      }
      A && A.setAttribute("style", ""),
        v != this.state.x && this.setState({ x: v }),
        _ != this.state.y && this.setState({ y: _ }),
        this.state.hoverPositionReady ||
          this.setState({ hoverPositionReady: !0 });
    }
  };
ri(ze, "defaultProps", {
  direction: "right",
  nBodyAlignment: 0.5,
  nAllowOffscreenPx: 10,
  nBodyDistance: 8,
  nMaxLateralMoveOnScreen: void 0,
}),
  f([h], ze.prototype, "bindHover", 1),
  (ze = f([wi], ze));
function Oa(o) {
  switch (o) {
    case "right":
      return "left";
    case "left":
      return "right";
    case "bottom":
      return "top";
    case "top":
      return "bottom";
    case "overlay":
      return "overlay";
    case "overlay-center":
      return "overlay-center";
  }
}
function Ji(o, e, t, n, i, r, a) {
  let s = r,
    c = a,
    l = 0,
    d = 0,
    p,
    m,
    C,
    v;
  switch (o) {
    case "right":
      (p = n.right + t),
        (m = xn(n.top, n.height, i.height, e)),
        (C = Math.max(0, p + i.width - s)),
        (v = [Math.max(0, l - m), Math.max(0, m + i.height - c)]);
      break;
    case "left":
      (p = n.left - t - i.width),
        (m = xn(n.top, n.height, i.height, e)),
        (C = Math.max(0, d - p)),
        (v = [Math.max(0, l - m), Math.max(0, m + i.height - c)]);
      break;
    case "bottom":
      (p = xn(n.left, n.width, i.width, e)),
        (m = n.bottom + t),
        (C = Math.max(0, m + i.height - c)),
        (v = [Math.max(0, d - p), Math.max(0, p + i.width - s)]);
      break;
    case "top":
      (p = xn(n.left, n.width, i.width, e)),
        (m = n.top - t - i.height),
        (C = Math.max(0, l - m)),
        (v = [Math.max(0, d - p), Math.max(0, p + i.width - s)]);
      break;
    case "overlay":
      (p = n.left), (m = n.top), (C = 0), (v = [0, 0]);
      break;
    case "overlay-center":
      (p = n.left + 0.5 * n.width - 0.5 * i.width),
        (m = n.top + 0.5 * n.height - 0.5 * i.height),
        (C = 0),
        (v = [0, 0]);
      break;
  }
  return { nLeft: p, nTop: m, nOverflow: C, nLateralOverflow: v };
}
function xn(o, e, t, n) {
  return Math.max(0, Math.min(1, n)) * (e - t) + o;
}
function Na(o, e, t, n, i) {
  let r = Math.max(e[0], e[1]);
  o !== void 0 && (r = Math.min(o, r)), (r = Math.max(0, r));
  let a = e[0] > e[1] ? r : -r;
  return t === "left" || t === "right" ? (n += a) : (i += a), [n, i];
}
var $i = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var J = u(b()),
  er = q.createContext({}),
  Ia = () => q.useContext(er);
function tr(o) {
  let [e, t] = q.useState(null),
    n = q.useMemo(() => ({ targetElement: e }), [e]);
  return (0, J.jsxs)(er.Provider, {
    value: n,
    children: [(0, J.jsx)("div", { ref: t }), o.children],
  });
}
function Mn(o) {
  let { divProps: e, tooltipProps: t } = vo({
    ...o,
    toolTipContent: o.toolTipContent
      ? (0, J.jsx)(ir, { children: or(o.toolTipContent) })
      : null,
  });
  return (0, J.jsxs)(Ie, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: o.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, J.jsx)(_o, { ...t }), o.children],
  });
}
function nr(o) {
  let { divProps: e, tooltipProps: t } = vo(o);
  return (0, J.jsxs)(Ie, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: o.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, J.jsx)(_o, { ...t }), o.children],
  });
}
function Ul(o) {
  let { children: e } = o,
    { divProps: t, tooltipProps: n } = vo({
      ...o,
      toolTipContent: o.toolTipContent
        ? (0, J.jsx)(ir, { children: or(o.toolTipContent) })
        : null,
    });
  return (0, J.jsxs)(J.Fragment, {
    children: [
      q.cloneElement(e, { ...t, ...e.props }),
      (0, J.jsx)(_o, { ...n }),
    ],
  });
}
function vo(o) {
  let {
      toolTipContent: e,
      nDelayShowMS: t = 300,
      bDisabled: n,
      direction: i,
      nBodyAlignment: r,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: c,
      strTooltipClassname: l,
      bNavStop: d,
      bTopmost: p,
      usePointerEvents: m,
      children: C,
      onMouseLeave: v,
      ..._
    } = o,
    P = {
      direction: i,
      nBodyAlignment: r,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: c,
      className: l,
      bTopmost: p,
    },
    [I, A] = q.useState(!1),
    [k, U] = q.useState(),
    B = q.useCallback(
      (W) => {
        (m && "pointerType" in W && W.pointerType != "mouse") ||
          (A(!0), U(W.currentTarget));
      },
      [m],
    ),
    G = q.useCallback(() => {
      A(!1);
    }, []),
    ne = {
      active: I && !n,
      target: k,
      nDelayShowMS: t,
      hoverPositionProps: P,
      children: e,
    },
    j = { ..._ };
  return (
    m
      ? ((j.onPointerEnter = B), (j.onPointerLeave = G))
      : ((j.onMouseEnter = B), (j.onMouseLeave = G)),
    {
      divProps: j,
      stateHandlers: { setTarget: U, setHovered: A },
      tooltipProps: ne,
    }
  );
}
function or(o) {
  return typeof o == "string" ? M(o) : o;
}
function ir(o) {
  return (0, J.jsx)("div", { ...o, className: g($i.TextToolTip, o.className) });
}
function _o(o) {
  let {
      active: e,
      target: t,
      nDelayShowMS: n = 300,
      hoverPositionProps: i,
      children: r,
    } = o,
    [a, s] = q.useState(e),
    c = Ia();
  if (
    (q.useEffect(() => {
      if (e)
        if (n) {
          let d = window.setTimeout(() => s(!0), n);
          return () => window.clearTimeout(d);
        } else {
          s(!0);
          return;
        }
      else {
        s(!1);
        return;
      }
    }, [e]),
    !a || !r || !t)
  )
    return null;
  let { targetElement: l } = c;
  return Ki.createPortal(
    (0, J.jsx)(ze, { target: t, ...i, children: r }),
    l ?? t.ownerDocument.body,
  );
}
var rr = "me1BHzZX9A0-";
var wn = u(b());
function Fe(o) {
  let e = o.customTooltip ? nr : Mn;
  return (0, wn.jsxs)(e, {
    toolTipContent: o.tooltip,
    className: g(rr, "HelperTooltip", o.className),
    children: [" ", (0, wn.jsx)(Ni, {})],
  });
}
var Do = u(D()),
  Tn = Do.default.createContext({}),
  Ro = () => Do.default.useContext(Tn);
function fe(o, e) {
  return Ro()[o] ?? e;
}
var Se = {
  Toggle: "iht2aUDj9M8-",
  Disabled: "YTEsHaVTRhQ-",
  ToggleRail: "smW0sc5P0Ac-",
  Highlight: "itL3LCJ2LME-",
  On: "cu29JgKd7Ng-",
  Off: "Rre7XjErr1w-",
  ToggleSwitch: "Py0EVswynbg-",
  ToggleRow: "LCqK-Jsy46k-",
  Label: "K-4Bc-GCthE-",
};
var it = u(b());
function ar(o) {
  let e = fe("ToggleControl", ya);
  return (0, it.jsx)(e, { ...o });
}
function ya(o) {
  let { value: e, onChange: t, disabled: n } = o;
  return (0, it.jsxs)("div", {
    className: g(Se.Toggle, n && Se.Disabled),
    onClick: () => !n && t && t(!e),
    children: [
      (0, it.jsx)("div", { className: Se.ToggleRail }),
      (0, it.jsx)("div", {
        className: g(Se.ToggleRail, Se.Highlight, e ? Se.On : Se.Off),
      }),
      (0, it.jsx)("div", { className: g(Se.ToggleSwitch, e ? Se.On : Se.Off) }),
    ],
  });
}
var S = u(b());
function Ln(o) {
  return V.forwardRef(function (t, n) {
    return (0, S.jsx)(O, { ...t, className: g(o, t.className), ref: n });
  });
}
var Fa = V.createContext(null),
  On = V.forwardRef(function (e, t) {
    let { id: n, className: i, ...r } = e,
      s = V.useContext(Fa)?.setHeaderId,
      c = V.useId(),
      l = n || c;
    return (
      V.useEffect(() => {
        s && s(l);
      }, [s, l]),
      (0, S.jsx)("div", {
        id: l,
        role: "heading",
        "aria-level": 2,
        ...r,
        className: g("DialogHeader", i),
        ref: t,
      })
    );
  }),
  mc = Re("DialogSubHeader", "heading", { "aria-level": 3 }),
  fc = Re("SettingsDialogSubHeader", "heading", { "aria-level": 3 }),
  lr = Re("DialogFooter"),
  ka = Re("DialogLabel _DialogLayout"),
  cr = Re("DialogBodyText"),
  gc = Re("DialogBody"),
  dr = Ln("DialogBody"),
  hc = Re("DialogInnerBody"),
  bc = Re("DialogControlsSection"),
  Cc = Re("DialogControlsSectionHeader", "heading", { "aria-level": 3 });
var Ba = Ln("DialogTwoColLayout _DialogColLayout"),
  Wa = Ln("DialogThreeColLayout _DialogColLayout"),
  vc = Ln("DialogTwoThirdColLayout _DialogColLayout"),
  _c = Re("DialogColumn _DialogLayout");
function So(o) {
  let e = fe("Content", Va);
  return (0, S.jsx)(e, { ...o });
}
function Va(o) {
  let { children: e, bCenterVertically: t, refElem: n, ...i } = o,
    r = "DialogContent _DialogLayout" + (o.className ? " " + o.className : "");
  return (
    t && (r += " _DialogCenterVertically"),
    (0, S.jsx)("div", {
      ...i,
      ref: n,
      className: r,
      children: (0, S.jsx)("div", {
        className: "DialogContent_InnerWidth",
        children: e,
      }),
    })
  );
}
var En = class extends V.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, S.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
f([h], En.prototype, "OnSubmit", 1);
function ur(o) {
  let { classNameContent: e, bCenterVertically: t, ...n } = o;
  return (0, S.jsx)(So, {
    className: e,
    bCenterVertically: t,
    children: (0, S.jsx)(En, { ...n }),
  });
}
function pr(o) {
  let { label: e, tooltip: t, className: n, children: i } = o;
  return (0, S.jsxs)("label", {
    className: g("DialogInputLabelGroup", "_DialogLayout", n),
    children: [
      e &&
        (0, S.jsxs)(ka, {
          children: [e, " ", t && (0, S.jsx)(Fe, { tooltip: t }), " "],
        }),
      i,
    ],
  });
}
var Yt = V.forwardRef(function (e, t) {
    let n = Ro(),
      { svgicon: i, ...r } = e,
      a = g(
        e.className,
        i !== void 0 && "hasSVGIcon",
        r.disabled && "Disabled",
        n.strButtonClassName,
      ),
      s = (c) => {
        if (!(r.disabled || !c))
          return (l) => {
            l.stopPropagation(), c(l);
          };
      };
    return (0, S.jsxs)(Dn, {
      ref: t,
      onOKActionDescription: r.disabled ? null : void 0,
      noFocusRing: !!n.strButtonClassName,
      ...r,
      className: a,
      disabled: !1,
      onClick: s(r.onClick),
      onPointerDown: s(r.onPointerDown),
      onPointerUp: s(r.onPointerUp),
      onPointerCancel: s(r.onPointerCancel),
      onMouseDown: s(r.onMouseDown),
      onMouseUp: s(r.onMouseUp),
      onTouchStart: s(r.onTouchStart),
      onTouchEnd: s(r.onTouchEnd),
      onTouchCancel: s(r.onTouchCancel),
      onSubmit: s(r.onSubmit),
      children: [i && i(), e.children],
    });
  }),
  Ut = V.forwardRef(function (e, t) {
    return (0, S.jsx)(Yt, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  ge = V.forwardRef(function (e, t) {
    return (0, S.jsx)(Yt, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  Dc = V.forwardRef(function (e, t) {
    return (0, S.jsx)(Yt, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  Rc = V.forwardRef(function (e, t) {
    return (0, S.jsx)(Yt, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  Sc = V.forwardRef(function (e, t) {
    return (0, S.jsx)(Yt, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "TextButton"),
    });
  });
function mr(o) {
  return (0, S.jsxs)(Ba, {
    className: o.className,
    children: [
      (0, S.jsxs)(Ut, {
        onClick: o.onOK,
        disabled: o.bOKDisabled,
        autoFocus: o.focusButton == "primary",
        children: [o.strOKText || M("#Button_Confirm"), " "],
      }),
      (0, S.jsx)(ge, {
        onClick: o.onCancel,
        disabled: o.bCancelDisabled,
        autoFocus: o.focusButton == "secondary",
        children: o.strCancelText || M("#Button_Cancel"),
      }),
    ],
  });
}
function fr(o) {
  let e = o.bOKDisabled ? ge : Ut,
    t = o.bOKDisabled ? Ut : ge;
  return (0, S.jsxs)(Wa, {
    children: [
      (0, S.jsxs)(e, {
        onClick: o.onOK,
        disabled: o.bOKDisabled,
        children: [o.strOKText || M("#Button_Confirm"), " "],
      }),
      (0, S.jsxs)(t, {
        onClick: o.onUpdate,
        disabled: o.bUpdateDisabled,
        children: [o.strUpdateText || M("#Button_Update"), " "],
      }),
      (0, S.jsx)(ge, {
        onClick: o.onCancel,
        disabled: o.bCancelDisabled,
        children: o.strCancelText || M("#Button_Cancel"),
      }),
    ],
  });
}
var Xe = class extends V.Component {
  constructor(e) {
    super(e), (this.state = { checked: e.checked, disabled: e.disabled });
  }
  componentDidUpdate(e) {
    this.props.controlled ||
      (e.checked != this.props.checked &&
        this.props.checked != this.state.checked &&
        this.setState({ checked: this.props.checked })),
      e.disabled != this.props.disabled &&
        this.props.disabled != this.state.disabled &&
        this.setState({ disabled: this.props.disabled });
  }
  shouldComponentUpdate(e, t) {
    return !(
      e.label == this.props.label &&
      e.description == this.props.description &&
      e.onChange == this.props.onChange &&
      e.controlled == this.props.controlled &&
      e.disabled == this.props.disabled &&
      t.disabled == this.state.disabled &&
      e.checked == this.checked &&
      t.checked == this.state.checked
    );
  }
  get checked() {
    return this.props.controlled ? this.props.checked : this.state.checked;
  }
  GetPanelElementProps() {
    let {
      onChange: e,
      checked: t,
      label: n,
      description: i,
      tabIndex: r,
      disabled: a,
      className: s,
      tooltip: c,
      color: l,
      highlightColor: d,
      bottomSeparator: p,
      controlled: m,
      ...C
    } = this.props;
    return {
      ...C,
      tabIndex: r || 0,
      onActivate: this.Toggle,
      onKeyDown: this.KeyDown,
    };
  }
  Toggle() {
    if (this.props.disabled) return;
    let e = !this.checked;
    this.props.controlled || this.setState({ checked: e }),
      this.props.onChange && this.props.onChange(e);
  }
  KeyDown(e) {
    e.keyCode == 32 && (this.Toggle(), e.preventDefault(), e.stopPropagation());
  }
  SetChecked(e, t) {
    this.setState({ checked: e }),
      t && this.props.onChange && this.props.onChange(e);
  }
};
f([h], Xe.prototype, "Toggle", 1),
  f([h], Xe.prototype, "KeyDown", 1),
  f([h], Xe.prototype, "SetChecked", 1);
var Pc = V.forwardRef(function (e, t) {
    let n = fe("ToggleField", Gt);
    return (0, S.jsx)(n, { ref: t, ...e });
  }),
  Gt = class extends Xe {
    OnOffKeyDown(e) {
      (e.keyCode == 37 && this.checked) || (e.keyCode == 39 && !this.checked)
        ? (this.Toggle(), e.preventDefault(), e.stopPropagation())
        : this.KeyDown(e);
    }
    OnNewUIToggle(e) {
      e !== this.checked && this.Toggle();
    }
    render() {
      let e =
        "DialogToggleField _DialogInputContainer _DialogLayout " +
        (this.props.className ? this.props.className : "");
      return (
        this.props.disabled && (e += " Disabled"),
        (0, S.jsxs)("div", {
          className: e,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, S.jsxs)("div", {
              className: "displayColumn alignSelfCenter",
              children: [
                (0, S.jsxs)("div", {
                  className: "DialogToggle_Label",
                  children: [
                    (0, S.jsx)("span", { children: this.props.label }),
                    this.props.tooltip &&
                      (0, S.jsx)(Fe, { tooltip: this.props.tooltip }),
                  ],
                }),
                this.props.description &&
                  (0, S.jsx)("div", {
                    className: "DialogToggle_Description",
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, S.jsx)("div", {
                  className: "DialogToggleField_NewUIContainer",
                  children: (0, S.jsx)(ar, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, S.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, S.jsxs)(O, {
                    className: "DialogToggleField_OptionPanel",
                    onOKButton: this.Toggle,
                    children: [
                      (0, S.jsx)("div", {
                        className:
                          "DialogToggleField_Option Off" +
                          (this.checked ? "" : " Active"),
                        children: M("#Dialog_Off"),
                      }),
                      (0, S.jsx)("div", {
                        className:
                          "DialogToggleField_Option On" +
                          (this.checked ? " Active" : ""),
                        children: M("#Dialog_On"),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
f([h], Gt.prototype, "OnOffKeyDown", 1),
  f([h], Gt.prototype, "OnNewUIToggle", 1);
var R = {
  "duration-app-launch": "800ms",
  narrowWidth: "500px",
  GamepadDialogContent: "hphqAIPfg2M-",
  GamepadDialogContent_InnerWidth: "LnWFhQhlcNM-",
  Field: "u6UxwRzex6Y-",
  Button: "n2lNcrU1FOA-",
  NoMinWidth: "FWT-g2SKMM0-",
  ActiveAndUnfocused: "sLya3q2VeV4-",
  StandaloneFieldSeparator: "N0nsIkWClzg-",
  StandardPadding: "Z0am8Dm2jfA-",
  CompactPadding: "XguX0XZI9XA-",
  WithDescription: "hiDXWuue9Ng-",
  WithBottomSeparatorStandard: "AXmVytBQVxA-",
  WithBottomSeparatorThick: "kW0log3-ANI-",
  HighlightOnFocus: "hYZwQTmms04-",
  Clickable: "_046KFlpPhi4-",
  Disabled: "N7wH4pXSFNg-",
  WithBottomSeparator: "_0AzPckEBOD4-",
  "ItemFocusAnim-darkerGrey": "arvRRZ9-C9Y-",
  "ItemFocusAnim-darkGrey": "_9jyy72RowfQ-",
  FieldChildrenWithIcon: "saFoLyssBQo-",
  FieldChildrenInner: "y-N79TWWLB0-",
  FieldClickTarget: "NeJGNNDdkHM-",
  FieldIcon: "_6lnixjah-90-",
  Front: "zh7sbd-UiyU-",
  BeforeChildren: "I9bIyopp1uc-",
  FieldLabelRow: "L9bBFKETjDc-",
  VerticalAlignCenter: "R74QljenKiQ-",
  InlineWrapShiftsChildrenBelow: "GKP4TEGtYjE-",
  ExtraPaddingOnChildrenBelow: "DsyywImFP3g-",
  ChildrenWidthFixed: "aiMxPe7cnx8-",
  ChildrenWidthGrow: "XE9DTUy61Jk-",
  WithFirstRow: "ApU36qw6S8o-",
  WithChildrenBelow: "IbvehGFvqy0-",
  FieldLabel: "HzfVYZAQM1I-",
  FieldLabelValue: "HOM-11Jf2cw-",
  FieldDescription: "_5BLJdCp0mew-",
  ModalPosition: "eGUcXf9qmGo-",
  VR: "jLL34-DFetc-",
  WithStandardPadding: "_0pzkMgnBDek-",
  NoHeaderPadding: "thcCErzFlaA-",
  ModalClickToDismiss: "BO2jqunP5fQ-",
  slideInAnimation: "UM0fZCgqJds-",
  ScrollWithin: "A-yiOzX2zo8-",
  BasicTextInput: "IkgK3r9TyY4-",
  Toggle: "QaOnAvj7KDc-",
  ToggleRail: "gqoU6kzzga0-",
  On: "WszZCY9cJuU-",
  ToggleSwitch: "m-ViVI3jM2c-",
  LabelFieldValue: "xx9P2lluZR4-",
  DropDownControlButtonContents: "_4wpsx4CUbWY-",
  DropDownRow: "AtvTnUalXdo-",
  IconContainer: "-TYBSdzS9vM-",
  Label: "_2mNIgxcZZ6U-",
  ControlsListOuterPanel: "-D54syxDRFE-",
  StandardSpacing: "m-e4YJsJZjs-",
  ExtraSpacing: "Z6JwpLpx6PI-",
  ItemMaxSizeDesktop: "RzL4-TdmlAA-",
  AlignRight: "pmJ7XNli6U4-",
  AlignLeft: "gjnbAGxS0yc-",
  AlignCenter: "PDaSRT8ViFo-",
  FullWidth: "GSk7FKAGFT4-",
  ControlsListChild: "h4Ytu5NGGqM-",
  "QuickAccess-Menu": "dpQ3XFHsodk-",
  BottomButtons: "RdkTX3BYU54-",
  TextareaWrapper: "X25Qp11Ngnw-",
  Textarea: "dd4R06-lKvI-",
  BackgroundAnimation: "HN-1eGY9Nmo-",
  "ItemFocusAnim-darkerGrey-nocolor": "_4ZiGgSYhigE-",
  "ItemFocusAnim-grey": "_0vm28U-NXYE-",
  "ItemFocusAnim-translucent-white-10": "Omlo74OCNh4-",
  "ItemFocusAnim-translucent-white-20": "_4y-sz5WDrKM-",
  "ItemFocusAnimBorder-darkGrey": "yVxuhcF-Jqo-",
  "ItemFocusAnim-green": "DGu9xeM67Ec-",
  focusAnimation: "AUSFtgMHqZk-",
  hoverAnimation: "_---TIKL-l4M-",
};
var Me = u(D());
var Nn = class extends zi {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, t, n) {
    super(pi(e.ref.current), n),
      (this.m_component = e),
      (this.m_propTargets = t),
      (this.m_setStateOnComplete = n.setStateOnComplete);
  }
  Start() {
    this.m_props = {};
    for (let e in this.m_propTargets) {
      let t = parseFloat(this.m_component.state[e]) || 0,
        n = this.m_propTargets[e];
      t != n && (this.m_props[e] = { start: t, end: n });
    }
    super.Start();
  }
  Update(e) {
    let t = {};
    for (let n in this.m_props) {
      let i = this.m_props[n],
        r = i.start + (i.end - i.start) * e;
      t[n] = r;
    }
    this.m_component.setState(t);
  }
  FireOnComplete() {
    super.FireOnComplete(),
      this.m_setStateOnComplete &&
        this.m_component.setState(this.m_setStateOnComplete);
  }
};
var T = u(b()),
  Ha = Me.forwardRef(function (e, t) {
    let n = fe("InputElement", Rt);
    return (0, T.jsx)(n, { ...e, ref: t });
  }),
  qe = class qe extends Me.PureComponent {
    m_CopiedAnimation;
    ref = Me.createRef();
    constructor(e) {
      super(e),
        this.CheckProps(e),
        (this.state = {
          m_CopiedYPos: 0,
          m_bPlayingCopiedAnimation: !1,
          m_bCompletedCopiedAnimation: !1,
          m_bNumberBelowMinRange: !1,
          m_bNumberAboveMaxRange: !1,
          m_bIsNotNumeric: !1,
          m_bIsInvalidURL: !1,
          m_strInvalidURLMessage: null,
          m_bIsInvalidEmail: !1,
          m_bAboveMaxChars: !1,
        });
    }
    componentDidUpdate(e) {
      this.CheckProps(this.props);
    }
    m_elInput;
    OnInputRef(e) {
      (this.m_elInput = e),
        this.m_elInput && this.props.focusOnMount && this.m_elInput.focus();
    }
    get element() {
      return this.m_elInput;
    }
    get value() {
      return this.m_elInput && this.m_elInput.value;
    }
    Focus() {
      this.m_elInput?.focus();
    }
    static validateUrl(e) {
      return (
        e != null &&
        (/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
          e,
        ) ||
          /^steam:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}/i.test(e))
      );
    }
    static validateEmail(e) {
      return (
        e != null &&
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e.toLowerCase(),
        )
      );
    }
    Validate() {
      this.setState({
        m_bNumberBelowMinRange:
          this.props.rangeMin !== null &&
          this.props.rangeMin !== void 0 &&
          Number(this.m_elInput?.value) < this.props.rangeMin,
        m_bNumberAboveMaxRange:
          this.props.rangeMax !== null &&
          this.props.rangeMax !== void 0 &&
          Number(this.m_elInput?.value) > this.props.rangeMax,
        m_bIsNotNumeric:
          this.props.mustBeNumeric == !0 &&
          isNaN(Number(this.m_elInput?.value)),
        m_bIsInvalidURL:
          this.props.mustBeURL == !0 && !qe.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !qe.validateEmail(this.m_elInput?.value),
        m_bAboveMaxChars:
          this.props.maxChars != null &&
          this.m_elInput != null &&
          this.m_elInput.value.length > this.props.maxChars,
      });
    }
    OnChanged(e) {
      this.props.onChange && this.props.onChange(e), this.Validate();
    }
    OnCopyClick(e) {
      if (!this.m_elInput) return;
      this.m_elInput.select();
      let t = this.m_elInput.ownerDocument;
      if (t.queryCommandEnabled("copy")) {
        t.execCommand("copy"),
          e.currentTarget.focus(),
          this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
        let n = -4,
          i = -24;
        this.setState({ m_bCompletedCopiedAnimation: !1 }),
          this.setState({ m_CopiedYPos: n }, () => {
            (this.m_CopiedAnimation = new Nn(
              this,
              { m_CopiedYPos: i },
              {
                msDuration: 300,
                timing: "sine",
                setStateOnComplete: { m_bCompletedCopiedAnimation: !0 },
              },
            )),
              this.m_CopiedAnimation.Start();
          });
      }
    }
    OnClearClick(e) {
      this.m_elInput &&
        this.m_elInput.value &&
        (Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value",
        ).set.call(this.m_elInput, ""),
        this.m_elInput.dispatchEvent(new Event("input", { bubbles: !0 })));
    }
    CheckProps(e) {
      Y(
        !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
        "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.",
      );
    }
    render() {
      let {
          label: e,
          description: t,
          requiredLabel: n,
          bShowCopyAction: i,
          bShowClearAction: r,
          bAlwaysShowClearAction: a,
          rangeMin: s,
          rangeMax: c,
          mustBeNumeric: l,
          mustBeURL: d,
          fnStrValidateURL: p,
          mustBeEmail: m,
          focusOnMount: C,
          tooltip: v,
          inlineControls: _,
          maxChars: P,
          ...I
        } = this.props,
        A =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (I.className ? " " + I.className : ""),
        k = "copiedAnimation",
        U = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (k = "copiedAnimation animationPlaying"),
        U && (k = "copiedAnimation animationComplete");
      let B = {};
      this.state.m_CopiedYPos !== void 0 &&
        (B.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let G = (0, T.jsxs)(Me.Fragment, {
        children: [
          (0, T.jsxs)(O, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, T.jsx)(Ha, {
                type: "text",
                ...I,
                className: A,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              i &&
                (0, T.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, T.jsx)(ge, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: M("#Button_Copy"),
                    }),
                    (0, T.jsx)("div", {
                      style: B,
                      className: k,
                      children: M("#Button_Copied"),
                    }),
                  ],
                }),
              (a || (r && I.value)) &&
                (0, T.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, T.jsx)(St, {}),
                }),
              _,
            ],
          }),
          t &&
            (0, T.jsx)("div", {
              className: "DialogLabelExplainer",
              children: t,
            }),
        ],
      });
      return e
        ? (0, T.jsx)("div", {
            className:
              "DialogInputLabelGroup _DialogLayout DialogRequirementLabel",
            children: (0, T.jsxs)("label", {
              children: [
                (0, T.jsxs)("div", {
                  className: "DialogLabel",
                  children: [
                    e,
                    " ",
                    this.props.tooltip &&
                      (0, T.jsx)(Fe, { tooltip: this.props.tooltip }),
                    (0, T.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                G,
                this.state.m_bNumberBelowMinRange
                  ? (0, T.jsxs)("div", {
                      children: [" ", M("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, T.jsxs)("div", {
                      children: [" ", M("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, T.jsxs)("div", {
                      children: [" ", M("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, T.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, T.jsxs)("div", {
                      children: [" ", M("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, T.jsxs)("div", {
                      children: [" ", M("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, T.jsxs)("div", {
                      children: [
                        " ",
                        xi("#Input_Error_TooManyCharacters", P),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : G;
    }
  };
f([h], qe.prototype, "OnInputRef", 1),
  f([h], qe.prototype, "OnChanged", 1),
  f([h], qe.prototype, "OnCopyClick", 1),
  f([h], qe.prototype, "OnClearClick", 1);
var rt = qe,
  zt = class extends rt {
    m_bFocused = !1;
    OnBackgroundClick() {
      this.m_elInput && this.m_elInput.focus();
    }
    OnInputFocus(e) {
      this.m_bFocused || ((this.m_bFocused = !0), this.forceUpdate()),
        this.props.onFocus && this.props.onFocus(e);
    }
    OnInputBlur(e) {
      this.m_bFocused && ((this.m_bFocused = !1), this.forceUpdate()),
        this.props.onBlur && this.props.onBlur(e);
    }
    render() {
      let {
        label: e,
        description: t,
        requiredLabel: n,
        bShowCopyAction: i,
        bShowClearAction: r,
        bAlwaysShowClearAction: a,
        rangeMin: s,
        rangeMax: c,
        maxChars: l,
        mustBeNumeric: d,
        mustBeURL: p,
        fnStrValidateURL: m,
        mustBeEmail: C,
        focusOnMount: v,
        tooltip: _,
        inlineControls: P,
        className: I,
        children: A,
        ...k
      } = this.props;
      return (0, T.jsx)("div", {
        className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
        children: (0, T.jsxs)("label", {
          children: [
            e && (0, T.jsx)("div", { className: "DialogLabel", children: e }),
            (0, T.jsx)("div", {
              className: g(
                "_DialogInputContainer",
                "DialogTextInputBase",
                this.m_bFocused && "Active",
              ),
              onClick: this.OnBackgroundClick,
              children: (0, T.jsxs)(O, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  Me.Children.map(A, (U, B) =>
                    (0, T.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: U,
                      },
                      B,
                    ),
                  ),
                  (0, T.jsx)(Rt, {
                    type: "text",
                    ...k,
                    className:
                      "DialogListBuilderInput_Input DialogInputPlaceholder",
                    ref: this.OnInputRef,
                    onFocus: this.OnInputFocus,
                    onBlur: this.OnInputBlur,
                    size: 4,
                  }),
                ],
              }),
            }),
            t &&
              (0, T.jsx)("div", {
                className: "DialogLabelExplainer",
                children: t,
              }),
          ],
        }),
      });
    }
  };
f([h], zt.prototype, "OnBackgroundClick", 1),
  f([h], zt.prototype, "OnInputFocus", 1),
  f([h], zt.prototype, "OnInputBlur", 1);
var gr = u(D());
var we = u(b()),
  Po = (o, e) =>
    "" + (o != null ? Number.parseFloat(o.toFixed(3)) : null) + (e ?? "");
var ke = class extends gr.Component {
  m_flLastSetValue = null;
  constructor(e) {
    super(e);
  }
  ClampValue(e) {
    return e === void 0 || isNaN(e) || e < this.props.min
      ? this.props.min
      : e > this.props.max
        ? this.props.max
        : e;
  }
  BPropsValid() {
    return this.props.max > this.props.min;
  }
  m_elSlider;
  m_rectSlider;
  OnMouseDown(e) {
    (this.m_elSlider = e.currentTarget),
      (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
      this.props.onChangeStart && this.props.onChangeStart(1),
      this.AdjustSliderForClientX(e.clientX, 1),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "mousemove",
        this.OnMouseMove,
      ),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "mouseup",
        this.OnMouseUp,
      );
  }
  OnMouseMove(e) {
    this.AdjustSliderForClientX(e.clientX, 1);
  }
  OnMouseUp(e) {
    this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
      "mousemove",
      this.OnMouseMove,
    ),
      this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        "mouseup",
        this.OnMouseUp,
      ),
      this.CompleteChange(1);
  }
  OnTouchStart(e) {
    (this.m_elSlider = e.currentTarget),
      (this.m_rectSlider = this.m_elSlider.getBoundingClientRect()),
      this.props.onChangeStart && this.props.onChangeStart(0),
      this.AdjustSliderForClientX(e.touches[0].clientX, 0),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "touchmove",
        this.OnTouchMove,
      ),
      this.m_elSlider.ownerDocument.defaultView?.addEventListener(
        "touchend",
        this.OnTouchEnd,
      );
  }
  OnTouchMove(e) {
    this.AdjustSliderForClientX(e.touches[0].clientX, 0);
  }
  OnTouchEnd(e) {
    this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
      "touchmove",
      this.OnTouchMove,
    ),
      this.m_elSlider?.ownerDocument.defaultView?.removeEventListener(
        "touchend",
        this.OnTouchEnd,
      ),
      this.CompleteChange(0);
  }
  OnKeyDown(e) {
    let t = 1;
    e.ctrlKey &&
      (t = Math.max(
        1,
        Math.floor((this.props.max - this.props.min) * 0.1 + 0.5),
      )),
      e.keyCode == 37
        ? (this.IncrementValue(-1 * t), e.preventDefault())
        : e.keyCode == 39 && (this.IncrementValue(1 * t), e.preventDefault()),
      this.CompleteChange(2);
  }
  AdjustSliderForClientX(e, t) {
    let n =
      ((e - this.m_rectSlider.left) /
        (this.m_rectSlider.right - this.m_rectSlider.left)) *
        (this.props.max - this.props.min) +
      this.props.min;
    n = Math.floor(n + 0.5);
    let i = this.ClampValue(n);
    i != this.props.value &&
      (this.props.onChange && this.props.onChange(i, t),
      (this.m_flLastSetValue = i));
  }
  CompleteChange(e) {
    this.m_flLastSetValue != null &&
      (this.props.onChangeComplete &&
        this.props.onChangeComplete(this.m_flLastSetValue, e),
      (this.m_flLastSetValue = null));
  }
  IncrementValue(e) {
    let t = this.ClampValue(this.props.value + e);
    t != this.props.value &&
      (this.props.onChange && this.props.onChange(t, 2),
      (this.m_flLastSetValue = t));
  }
  render() {
    let e = {},
      t = {};
    if (this.BPropsValid()) {
      let c =
        (100 * (this.props.value - this.props.min)) /
          (this.props.max - this.props.min) +
        "%";
      (e.width = c), (t.left = c);
    }
    let { label: n, description: i, tooltip: r, ...a } = this.props,
      s = this.props.renderValue ?? Po;
    return (0, we.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        n &&
          (0, we.jsxs)("div", {
            className: "DialogLabel",
            children: [n, !!r && (0, we.jsx)(Fe, { tooltip: r })],
          }),
        (0, we.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, we.jsx)("div", { className: "DialogSlider_Value", style: e }),
            (0, we.jsx)("div", { className: "DialogSlider_Grabber", style: t }),
          ],
        }),
        this.props.showValue &&
          (0, we.jsx)("div", {
            className: "DialogLabelExplainer",
            children: s(this.props.value, this.props.valueSuffix),
          }),
        i &&
          (0, we.jsx)("div", {
            className: "DialogLabelExplainer",
            children: i,
          }),
      ],
    });
  }
};
f([h], ke.prototype, "OnMouseDown", 1),
  f([h], ke.prototype, "OnMouseMove", 1),
  f([h], ke.prototype, "OnMouseUp", 1),
  f([h], ke.prototype, "OnTouchStart", 1),
  f([h], ke.prototype, "OnTouchMove", 1),
  f([h], ke.prototype, "OnTouchEnd", 1),
  f([h], ke.prototype, "OnKeyDown", 1);
var hr = u(D());
var Ua = u(b()),
  Ga = { setValue: () => {} },
  td = hr.default.createContext(Ga);
var ee = u(D());
var Xt = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var y = u(b());
function Be(o) {
  return typeof o == "object" && "data" in o;
}
function at(o) {
  return typeof o == "object" && "bIsSeparator" in o;
}
function Ee(o) {
  return typeof o == "object" && "options" in o;
}
function Mo(o, e) {
  if (o === e) return !0;
  if (!Array.isArray(o) || !Array.isArray(e) || o.length != e.length) return !1;
  for (let t = 0; t < o.length; t++) if (!wo(o[t], e[t])) return !1;
  return !0;
}
function wo(o, e) {
  return o == null || e == null
    ? o == e
    : at(o) && at(e)
      ? !0
      : !(
          at(o) ||
          at(e) ||
          o.label !== e.label ||
          o.tooltip !== e.tooltip ||
          Ee(o) != Ee(e) ||
          (Ee(o) && Ee(e) && !Mo(o.options, e.options)) ||
          (Be(o) && Be(e) && o.data !== e.data)
        );
}
function In(o, e) {
  if (o != null)
    for (let t = 0; t < o.length; t++) {
      let n = o[t];
      if (Be(n) && n.data === e) return n;
      if (Ee(n)) {
        let i = In(n.options, e);
        if (i != null) return i;
      }
    }
}
function Ya(o) {
  let e = fe("DropDownField", za);
  return (0, y.jsx)(e, { ...o });
}
function za(o) {
  let {
    label: e,
    tooltip: t,
    strClassName: n,
    dropDownControlRef: i,
    ...r
  } = o;
  return (0, y.jsx)(pr, {
    label: e,
    tooltip: t,
    className: n,
    children: (0, y.jsx)(Te, { menuLabel: e, ...r, ref: i }),
  });
}
var Xa = ee.forwardRef(function (e, t) {
    return (0, y.jsxs)(Dn, {
      id: e.id,
      focusable: e.focusable,
      className: g(e.className, "DialogDropDown", "_DialogInputContainer", {
        Active: e.opened,
        Disabled: e.disabled,
      }),
      tabIndex: e.tabIndex,
      onClick: e.onClick,
      onKeyDown: e.onKeyDown,
      disabled: e.disabled,
      type: "button",
      ref: t,
      noFocusRing: e.noFocusRing,
      role: e.role ?? "combobox",
      "aria-controls": e["aria-controls"],
      "aria-expanded": e.opened,
      "aria-label": e["aria-label"],
      "aria-labelledby": e["aria-labelledby"],
      "aria-describedby": e["aria-describedby"],
      children: [
        (0, y.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: e.children,
        }),
        !e.disabled &&
          (0, y.jsx)("div", {
            className: g(e.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, y.jsx)(Ti, { role: "presentation" }),
          }),
      ],
    });
  }),
  Te = class extends ee.Component {
    static contextType = Tn;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: In(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let t = In(this.props.rgOptions, e);
      wo(t, this.value) || this.setState({ value: t });
    }
    get value() {
      return this.props.controlled
        ? In(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, t, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        t.bOpened !== this.state.bOpened ||
        !Mo(this.props.rgOptions, e.rgOptions) ||
        !wo(t.value, this.value)
      )
        return !0;
      let i = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let r of i) if (e[r] !== this.props[r]) return !0;
      return !1;
    }
    componentDidUpdate(e, t) {
      Y(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let n = !Mo(e.rgOptions, this.props.rgOptions),
        i = e.selectedOption !== this.props.selectedOption,
        r = this.value !== t.value;
      !this.props.controlled &&
        (n || r || i) &&
        (i || this.value == null
          ? this.SetSelectedOption(this.props.selectedOption)
          : this.SetSelectedOption(this.value.data)),
        (n || r) &&
          (this.state.bOpened
            ? (this.m_iMenuInstance?.SetOnHideCallback(void 0),
              this.m_iMenuInstance?.Hide(),
              (this.m_iMenuInstance = void 0),
              this.BuildMenu())
            : this.m_iMenuInstance &&
              (this.m_iMenuInstance.SetOnHideCallback(void 0),
              (this.m_iMenuInstance = void 0)));
    }
    OnInputRef(e) {
      e && (this.m_elInput = e);
    }
    get element() {
      return this.m_elInput;
    }
    ToggleMenu() {
      if (this.state.bOpened) this.HideMenu();
      else {
        if (
          this.props.onMenuWillOpen &&
          this.props.onMenuWillOpen(this.ShowMenu) == !1
        )
          return;
        this.ShowMenu();
      }
    }
    OnValueSelected(e, t) {
      this.HideMenu(),
        this.setState({ value: t }),
        this.props.onChange && this.props.onChange(t, this, e);
    }
    BuildMenu() {
      let e = "DialogMenuPosition";
      this.props.strDropDownClassName &&
        (e += " " + this.props.strDropDownClassName);
      let t = {
          bOverlapHorizontal: !0,
          bMatchWidth: this.props.bMatchWidth ?? !0,
          bFitToWindow: !0,
          strClassName: e,
          bDisableMouseOverlay: this.props.bDisableMouseOverlay,
          ...this.props.contextMenuPositionOptions,
        },
        n = this.props.contextMenuPositionOptions?.onCancel;
      (this.m_iMenuInstance = Wt(
        (0, y.jsx)(qa, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: n,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
          id: `dropdownmenu_${this.m_iMenuInstance?.key}`,
        }),
        this.m_elInput,
        t,
      )),
        this.m_iMenuInstance.SetLabel(
          this.props.menuLabel ??
            (typeof this.props.strDefaultLabel == "string" &&
              this.props.strDefaultLabel),
        ),
        this.m_iMenuInstance.SetOnHideCallback(this.HideMenu);
    }
    ShowMenu() {
      this.m_iMenuInstance ? this.m_iMenuInstance.Show() : this.BuildMenu(),
        this.props.onMenuOpened && this.props.onMenuOpened(),
        this.setState({ bOpened: !0 });
    }
    HideMenu() {
      this.m_iMenuInstance && this.m_iMenuInstance.Hide(),
        this.setState({ bOpened: !1 }, () => this.m_elInput.focus());
    }
    OnKeyDown(e) {
      Cr(e, this.props.rgOptions.filter(Be), this.value?.data, (t) =>
        this.OnValueSelected(void 0, t),
      );
    }
    render() {
      let e = this.value?.label ?? this.props.strDefaultLabel;
      this.props.renderButtonValue != null &&
        (e = this.props.renderButtonValue(e));
      let t = this.props.focusable ?? !0,
        n = this.props.renderButton || this.context.DropDownControlButton || Xa;
      return (0, y.jsx)(n, {
        focusable: t,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (t ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        role: "combobox",
        "aria-controls": this.m_iMenuInstance
          ? `dropdownmenu_${this.m_iMenuInstance.key}`
          : void 0,
        "aria-expanded": this.state.bOpened,
        "aria-label": this.props["aria-label"],
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-describedby": this.props["aria-describedby"],
        children: e,
      });
    }
  };
f([h], Te.prototype, "OnInputRef", 1),
  f([h], Te.prototype, "ToggleMenu", 1),
  f([h], Te.prototype, "OnValueSelected", 1),
  f([h], Te.prototype, "ShowMenu", 1),
  f([h], Te.prototype, "HideMenu", 1),
  f([h], Te.prototype, "OnKeyDown", 1);
var br = ee.createContext(null);
function qa(o) {
  let e = fe("DropDownMenu", Qa);
  return (0, y.jsx)(br.Provider, {
    value: {},
    children: (0, y.jsx)(e, { ...o }),
  });
}
function Cr(o, e, t, n) {
  let i;
  if (o.key === "ArrowDown")
    i = (e.findIndex((a) => a.data === t) + 1) % e.length;
  else if (o.key === "ArrowUp") {
    let r = e.findIndex((a) => a.data === t);
    i = r <= 0 ? e.length - 1 : r - 1;
  }
  i !== void 0 && (n(e[i]), o.preventDefault());
}
function Qa(o) {
  let {
      rgOptions: e,
      strDropDownItemClassName: t,
      onValueSelected: n,
      selectedValue: i,
    } = o,
    [r, a] = ee.useState(i),
    s = ee.useMemo(() => e.filter(Be), [e]),
    c = ee.useCallback(
      (l) => {
        Cr(l, s, r, (d) => a(d.data));
      },
      [r, s],
    );
  return (0, y.jsx)("div", {
    className: g(
      Xt.DialogDropDownMenu,
      "_DialogInputContainer",
      o.strDropDownMenuCtnClass,
    ),
    onKeyDown: c,
    children: (0, y.jsx)(vr, {
      rgOptions: e,
      strDropDownItemClassName: t,
      onValueSelected: n,
      activeValue: r,
      setActiveValue: a,
    }),
  });
}
function vr(o) {
  let { rgOptions: e, ...t } = o;
  return e.map((n, i) =>
    at(n)
      ? (0, y.jsx)(
          "hr",
          {
            className: g(
              Xt.DialogDropDownMenu_Item,
              Xt.DialogDropDownMenu_Separator,
            ),
          },
          i,
        )
      : Ee(n)
        ? (0, y.jsx)(vr, { ...t, rgOptions: n.options }, i)
        : (0, y.jsx)(ja, { ...t, option: n }, i),
  );
}
function ja(o) {
  let {
      option: e,
      strDropDownItemClassName: t,
      onValueSelected: n,
      activeValue: i,
      setActiveValue: r,
    } = o,
    a = ee.useCallback((l) => l && l.focus(), []),
    s = ee.useCallback(() => {
      r(e.data);
    }, [r, e]),
    c = e.data === i;
  return (0, y.jsx)("button", {
    type: "button",
    className: g(
      Xt.DialogDropDownMenu_Item,
      t,
      e.strOptionClass,
      c && "ContextMenuAutoFocus",
    ),
    onClick: (l) => n(l, e),
    ref: c ? a : void 0,
    onMouseEnter: s,
    role: "option",
    "aria-selected": c,
    children: e.tooltip
      ? (0, y.jsx)(Mn, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, y.jsx)("div", { children: e.label }),
  });
}
var xo = class extends ee.Component {
  state = { rgOptions: void 0 };
  async OnMenuOpened() {
    if (!this.state.rgOptions) {
      let e = await this.props.fnLoadOptions();
      this.setState({ rgOptions: e });
    }
  }
  render() {
    let {
        fnLoadOptions: e,
        strInitialDisplay: t,
        initialValue: n,
        ...i
      } = this.props,
      { rgOptions: r } = this.state;
    return (
      r === void 0 &&
        (t || n
          ? ((r = [{ label: t, data: n }]), (i.selectedOption = n))
          : (r = [])),
      (0, y.jsx)(Ya, { ...i, rgOptions: r, onMenuOpened: this.OnMenuOpened })
    );
  }
};
f([h], xo.prototype, "OnMenuOpened", 1);
var Za = u(D());
var _r = u(b());
var le = u(D());
var Dr = u(La());
var To = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new Eo(e, !1);
  }
};
var Eo = class {
    m_parent;
    m_window;
    m_container = null;
    iIntervalShow;
    m_bRemoveOnHide;
    m_reactRoot;
    constructor(e, t = !0) {
      (this.m_parent = e),
        (this.m_window = e.ownerDocument.defaultView),
        (this.m_bRemoveOnHide = t);
    }
    Show(e, t) {
      return (
        this.CancelShowInterval(),
        t
          ? new Promise((n, i) => {
              this.iIntervalShow = this.m_window.setTimeout(() => {
                let r = this.m_parent.ownerDocument;
                r.defaultView &&
                  !r.defaultView.closed &&
                  (this.InternalShow(e), n());
              }, t);
            })
          : (this.InternalShow(e), Promise.resolve())
      );
    }
    InternalShow(e) {
      this.m_container ||
        ((this.m_container = this.m_parent.ownerDocument.createElement("div")),
        this.m_parent.appendChild(this.m_container)),
        this.m_reactRoot ||
          (this.m_reactRoot = Dr.createRoot(this.m_container)),
        this.m_reactRoot.render(e);
    }
    Hide(e) {
      this.CancelShowInterval(),
        e
          ? (this.iIntervalShow = this.m_window.setTimeout(() => {
              this.InternalHide();
            }, e))
          : this.InternalHide();
    }
    InternalHide() {
      this.m_reactRoot &&
        (this.m_reactRoot.unmount(), (this.m_reactRoot = void 0)),
        this.m_container &&
          this.m_bRemoveOnHide &&
          (this.m_parent.removeChild(this.m_container),
          (this.m_container = null));
    }
    CancelShowInterval() {
      this.iIntervalShow !== void 0 &&
        (this.m_window.clearInterval(this.iIntervalShow),
        (this.iIntervalShow = void 0));
    }
    BIsChildElement(e) {
      return this.m_container && _n(this.m_container, e);
    }
  },
  An = class {
    m_strUniqueID;
    m_mapEmbeddedHovers = new WeakMap();
    constructor(e) {
      this.m_strUniqueID = e;
    }
    ShowElementDelayed(e, t, n, i) {
      let r = this.GetEmbeddedElement(e);
      return (r.activeObject = i), r.instance.Show(n, t);
    }
    ShowElement(e, t, n) {
      let i = this.GetEmbeddedElement(e);
      (i.activeObject = n), i.instance.Show(t);
    }
    HideElement(e, t, n) {
      let i = this.GetEmbeddedElement(e);
      i.activeObject == t && ((i.activeObject = void 0), i.instance.Hide(n));
    }
    GetEmbeddedElement(e) {
      let t = this.m_mapEmbeddedHovers.get(e);
      return t || ((t = new To(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t;
    }
  };
var oe = u(b()),
  qt = new gi("DragDrop").Debug;
var Lo = class extends le.Component {
  m_coordinator = new yn();
  OnDrop(e, t) {
    t > e && t--, t != e && this.props.onReorder(e, t);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, oe.jsx)(
          Bn,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (n) => n.props.data != 0,
            fnOnDrop: (n) => this.OnDrop(n.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      le.Children.forEach(this.props.children, (n, i) => {
        let r = n.props.id || "__list_" + i,
          a = i + 1;
        e.push(
          (0, oe.jsx)(
            he,
            { coordinator: this.m_coordinator, data: i, children: n },
            r,
          ),
        ),
          e.push(
            (0, oe.jsx)(
              Bn,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (s) => s.props.data != a,
                fnOnDrop: (s) => this.OnDrop(s.props.data, a),
              },
              "dropregion_" + r,
            ),
          );
      }),
      (0, oe.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
f([h], Lo.prototype, "OnDrop", 1);
function $a(o) {
  if ("touches" in o) {
    let e = o;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [o.clientX, o.clientY];
}
function Oo(o, e, t, n) {
  return n
    ? t && o > t.left && o < t.right && e > t.top && e < t.bottom
    : t && o >= t.left && o <= t.right && e >= t.top && e <= t.bottom;
}
var yn = class {
  m_embeddedElement = new An("DragGhosts");
  m_rgDropRegions = [];
  m_activeDraggable;
  m_rgActiveDropRegions = [];
  m_activeDropRegion;
  m_dropGhost;
  m_dragGhost;
  m_dragOffWindowTimer;
  RegisterDropRegion(e) {
    this.m_rgDropRegions.push(e),
      this.m_activeDraggable &&
        e.BAcceptDraggable(this.m_activeDraggable) &&
        (e.OnDragStarted(this.m_activeDraggable),
        this.m_rgActiveDropRegions.push(e));
  }
  UnregisterDropRegion(e) {
    kt(this.m_rgDropRegions, e),
      kt(this.m_rgActiveDropRegions, e),
      this.m_activeDropRegion == e &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost());
  }
  OnDragGhostRef(e) {
    this.m_dragGhost = e;
  }
  ShowDragGhost() {
    let e = this.m_activeDraggable.renderDragGhost(),
      t = g(
        e.props.className,
        !!this.m_activeDropRegion && "DraggedOverActiveDrop",
      ),
      n = le.cloneElement(e, { ref: this.OnDragGhostRef, className: t });
    this.m_embeddedElement.ShowElement(
      this.m_activeDraggable.GetDragDocument(),
      n,
      this.m_activeDraggable,
    );
  }
  HideDragGhost() {
    this.m_embeddedElement.HideElement(
      this.m_activeDraggable.GetDragDocument(),
      this.m_activeDraggable,
    );
  }
  m_elCloneContainer;
  m_elCloneOriginal;
  m_nodeCloneCopy;
  MakeDragClone(e) {
    Y(
      !this.m_nodeCloneCopy && !this.m_elCloneOriginal,
      "Drag already in progress",
    ),
      (this.m_elCloneOriginal = e.m_divRef.current),
      (this.m_nodeCloneCopy = this.m_elCloneOriginal.cloneNode(!0)),
      e.m_divRef.current.replaceWith(this.m_nodeCloneCopy),
      this.m_elCloneContainer ||
        ((this.m_elCloneContainer = e
          .GetDragDocument()
          .body.ownerDocument.createElement("div")),
        e.GetDragDocument().body.appendChild(this.m_elCloneContainer)),
      this.m_elCloneContainer.appendChild(this.m_elCloneOriginal);
  }
  ReverseDragClone() {
    this.m_nodeCloneCopy.parentNode?.replaceChild(
      this.m_elCloneOriginal,
      this.m_nodeCloneCopy,
    ),
      (this.m_nodeCloneCopy = void 0),
      (this.m_elCloneOriginal = void 0);
  }
  OnDragStart(e) {
    (this.m_activeDraggable = e), (this.m_rgActiveDropRegions = []);
    for (let t of this.m_rgDropRegions)
      t.BAcceptDraggable(e) &&
        (t.OnDragStarted(e), this.m_rgActiveDropRegions.push(t));
    this.MakeDragClone(e), this.ShowDragGhost();
  }
  EndDrag() {
    if (this.m_activeDraggable) {
      this.ReverseDragClone(),
        this.HideDragGhost(),
        this.m_activeDropRegion &&
          this.m_activeDropRegion.OnDrop(this.m_activeDraggable);
      for (let e of this.m_rgActiveDropRegions)
        e.OnDragEnded(this.m_activeDraggable);
      (this.m_activeDraggable = void 0),
        (this.m_dropGhost = void 0),
        (this.m_rgActiveDropRegions = []);
    }
  }
  FindBestActiveDropRegionForPoint(e, t) {
    let n = this.m_activeDraggable.GetDragDocument(),
      i;
    if (("elementsFromPoint" in n && (i = n.elementsFromPoint(e, t)), i)) {
      let r = new Map();
      this.m_rgActiveDropRegions.forEach((a) => r.set(a.GetElement(), a));
      for (let a of i) {
        let s = r.get(a);
        if (s) return s;
      }
    } else {
      if (
        this.m_activeDropRegion &&
        this.m_activeDropRegion.BDraggableInRegion(e, t, this.m_activeDraggable)
      )
        return this.m_activeDropRegion;
      for (let r = this.m_rgActiveDropRegions.length - 1; r >= 0; r--) {
        let a = this.m_rgActiveDropRegions[r];
        if (a.BDraggableInRegion(e, t, this.m_activeDraggable)) return a;
      }
    }
  }
  m_prevClientX = 0;
  m_prevClientY = 0;
  OnDrag(e, t, n) {
    let i = this.m_prevClientX || t,
      r = this.m_prevClientY || n;
    if (
      (e.props.bEnableHTMLDrag &&
        this.m_dragOffWindowTimer &&
        window.clearTimeout(this.m_dragOffWindowTimer),
      this.m_dragGhost)
    ) {
      let s = i === void 0 ? 0 : i - (this.m_dragGhost.state.clientX ?? 0),
        c = r === void 0 ? 0 : r - (this.m_dragGhost.state.clientY ?? 0);
      if (
        (this.m_dragGhost.setState({
          clientX: i,
          clientY: r,
          clientXDelta: s,
          clientYDelta: c,
          bVisible: !0,
        }),
        e.props.bEnableHTMLDrag && (s || c))
      ) {
        let l = i + s,
          d = r + c,
          p = e.GetDragDocument().body.getBoundingClientRect();
        if (Oo(i, r, p) && !Oo(l, d, p, !0)) {
          let m = bn(l, p.left, p.right, p.left - 200, p.right + 200),
            C = bn(d, p.top, p.bottom, p.top - 100, p.bottom + 100),
            v = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, m, C);
          }, v);
        }
      }
    }
    let a = this.FindBestActiveDropRegionForPoint(i, r);
    (this.m_prevClientX = t),
      (this.m_prevClientY = n),
      !!this.m_activeDropRegion != !!a &&
        (this.ShowDragGhost(),
        this.m_dropGhost ||
          (this.m_dropGhost = this.m_activeDraggable.renderDropGhost())),
      this.m_activeDropRegion &&
        this.m_activeDropRegion != a &&
        this.m_activeDropRegion.OnDragLeave(this.m_activeDraggable),
      a &&
        this.m_activeDropRegion != a &&
        a.OnDragEnter(this.m_activeDraggable, this.m_dropGhost),
      (this.m_activeDropRegion = a),
      this.m_activeDropRegion &&
        this.m_activeDropRegion.OnDragMove(i, r, this.m_activeDraggable);
  }
};
f([h], yn.prototype, "OnDragGhostRef", 1);
var Rr = 5,
  he = class extends le.Component {
    constructor(e) {
      super(e), ye(this);
    }
    m_DragInfo = {
      bStarted: !1,
      startClientX: void 0,
      startClientY: void 0,
      startOffsetX: void 0,
      startOffsetY: void 0,
      startWidth: void 0,
      startHeight: void 0,
      ownerWin: void 0,
    };
    m_divRef = le.createRef();
    GetDragDocument() {
      return this.m_DragInfo.ownerWin?.document;
    }
    RecordDragStart(e, t, n) {
      (this.m_DragInfo.startClientX = t), (this.m_DragInfo.startClientY = n);
      let i = e.getBoundingClientRect();
      (this.m_DragInfo.startOffsetX = t - i.left),
        (this.m_DragInfo.startOffsetY = n - i.top),
        (this.m_DragInfo.startWidth = i.width),
        (this.m_DragInfo.startHeight = i.height),
        (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
    }
    ProcessDragMove(e) {
      qt("ProcessDragMove", e, this.props.data);
      let [t, n] = $a(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(t - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(n - (this.m_DragInfo.startClientY ?? 0), 2) >=
          Rr * Rr &&
          ((this.m_DragInfo.bStarted = !0),
          this.forceUpdate(),
          this.props.fnOnDragStart && this.props.fnOnDragStart(),
          this.props.coordinator.OnDragStart(this),
          this.props.coordinator.OnDrag(this, t, n));
      else {
        if (this.props.bEnableHTMLDrag && t == 0 && n == 0) return;
        this.props.coordinator.OnDrag(this, t, n);
      }
    }
    OnMouseDown(e) {
      !this.m_DragInfo.bStarted &&
        e.button == 0 &&
        (this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
        this.m_DragInfo.ownerWin?.addEventListener(
          "mousemove",
          this.ProcessDragMove,
        ),
        this.m_DragInfo.ownerWin?.addEventListener("mouseup", this.OnMouseUp));
    }
    OnMouseUp(e) {
      this.m_DragInfo.ownerWin?.removeEventListener(
        "mousemove",
        this.ProcessDragMove,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "mouseup",
          this.OnMouseUp,
        ),
        this.ResetDragState();
    }
    OnTouchStart(e) {
      this.m_DragInfo.bStarted ||
        (this.RecordDragStart(
          e.currentTarget,
          e.touches[0].clientX,
          e.touches[0].clientY,
        ),
        this.m_DragInfo.ownerWin?.addEventListener(
          "touchmove",
          this.ProcessDragMove,
        ),
        this.m_DragInfo.ownerWin?.addEventListener(
          "touchend",
          this.OnTouchEnd,
        ));
    }
    OnTouchEnd(e) {
      this.m_DragInfo.ownerWin?.removeEventListener(
        "touchmove",
        this.ProcessDragMove,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "touchend",
          this.OnTouchEnd,
        ),
        this.ResetDragState();
    }
    ResetDragState() {
      qt("ResetDragState", this.props.data),
        this.m_DragInfo.bStarted &&
          (this.props.coordinator.EndDrag(),
          this.props.fnOnDragEnd && this.props.fnOnDragEnd()),
        (this.m_DragInfo.bStarted = !1),
        (this.m_DragInfo.startClientX = void 0),
        (this.m_DragInfo.startClientY = void 0),
        (this.m_DragInfo.startOffsetX = void 0),
        (this.m_DragInfo.startOffsetY = void 0),
        (this.m_DragInfo.ownerWin = void 0),
        this.forceUpdate();
    }
    OnHTMLDragStart(e) {
      qt("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
        (e.dataTransfer.effectAllowed = "copyMove"),
        this.props.strHTMLDragData &&
          this.props.strHTMLDragData.forEach((n, i) =>
            e.dataTransfer.setData(i, n),
          ),
        e.dataTransfer.getData("text/plain") ||
          e.dataTransfer.setData("text/plain", this.props.data.toString());
      let t = new Image();
      e.dataTransfer.setDragImage(t, 0, 0),
        this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
        this.m_DragInfo.ownerWin?.addEventListener("drag", this.OnHTMLDrag),
        this.m_DragInfo.ownerWin?.addEventListener(
          "dragend",
          this.OnHTMLDragEnd,
        );
    }
    OnHTMLDrag(e) {
      qt("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      qt(
        "HTMLDragEnd",
        e,
        e.dataTransfer?.getData("text/plain") || "NOTHING",
        this.props.data,
      ),
        this.m_DragInfo.ownerWin?.removeEventListener("drag", this.OnHTMLDrag),
        this.m_DragInfo.ownerWin?.removeEventListener(
          "dragend",
          this.OnHTMLDragEnd,
        ),
        this.ResetDragState();
    }
    render() {
      let {
          coordinator: e,
          data: t,
          bEnableHTMLDrag: n,
          strHTMLDragData: i,
          fnOnDragStart: r,
          fnOnDragEnd: a,
          fnRenderDragGhost: s,
          fnRenderDropGhost: c,
          className: l,
          strActiveClassName: d,
          children: p,
          ...m
        } = this.props,
        C = {},
        v = l || "DialogDraggable";
      return (
        this.m_DragInfo.bStarted
          ? ((v = g(v, d || "DraggedOut")),
            n && (C = { onDragEnd: this.OnHTMLDragEnd }))
          : n
            ? (C = { onDragStart: this.OnHTMLDragStart })
            : (C = {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
        (0, oe.jsx)("div", {
          ref: this.m_divRef,
          className: v,
          ...C,
          ...m,
          draggable: n,
          children: p,
        })
      );
    }
    renderDropGhost() {
      return this.props.fnRenderDropGhost
        ? this.props.fnRenderDropGhost()
        : (0, oe.jsx)(Fn, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, oe.jsx)(kn, {
            elContent: this.GetClone(),
            offsetX: this.m_DragInfo.startOffsetX,
            offsetY: this.m_DragInfo.startOffsetY,
            width: this.m_DragInfo.startWidth,
            height: this.m_DragInfo.startHeight,
          });
    }
    GetClone() {
      let e = this.m_divRef.current,
        t;
      if (e && e.childElementCount)
        if (e.childElementCount == 1) t = e.firstElementChild.cloneNode(!0);
        else {
          t = document.createElement("div");
          for (let n = e.firstChild; n; n = n.nextSibling)
            t.appendChild(n.cloneNode(!0));
        }
      return t;
    }
  };
f([h], he.prototype, "ProcessDragMove", 1),
  f([h], he.prototype, "OnMouseDown", 1),
  f([h], he.prototype, "OnMouseUp", 1),
  f([h], he.prototype, "OnTouchStart", 1),
  f([h], he.prototype, "OnTouchEnd", 1),
  f([Di], he.prototype, "ResetDragState", 1),
  f([h], he.prototype, "OnHTMLDragStart", 1),
  f([h], he.prototype, "OnHTMLDrag", 1),
  f([h], he.prototype, "OnHTMLDragEnd", 1);
var Fn = class extends le.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, oe.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
f([h], Fn.prototype, "OnRef", 1);
var kn = class extends le.Component {
  state = {
    clientX: void 0,
    clientY: void 0,
    bVisible: !0,
    clientXDelta: void 0,
    clientYDelta: void 0,
  };
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  CalculateRotationDegrees(e) {
    return !e || Math.abs(e) < 4
      ? 0
      : (e > 0 ? 7.5 : -7.5) * Math.sqrt(Math.abs(e));
  }
  render() {
    if (
      !this.state.bVisible ||
      this.state.clientX === void 0 ||
      this.state.clientY === void 0
    )
      return (0, oe.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      t = bn(
        this.CalculateRotationDegrees(this.state.clientYDelta),
        -90,
        90,
        2,
        0,
      ),
      n = {
        transform: `rotateX(${this.CalculateRotationDegrees(-1 * (this.state.clientYDelta ?? 0))}deg) rotateY( ${this.CalculateRotationDegrees(this.state.clientXDelta)}deg)`,
        transition: "transform .16s ease-out, filter .16s ease-out",
        filter: "brightness(" + t + ")",
      },
      i = this.props.className || "DialogDraggable_DragGhost";
    return (0, oe.jsx)("div", {
      className: i,
      style: e,
      children: (0, oe.jsx)("div", { ref: this.OnRef, style: n }),
    });
  }
};
f([h], kn.prototype, "OnRef", 1);
var No = class extends le.Component {
    m_divRef = le.createRef();
    constructor(e) {
      super(e), (this.state = {});
    }
    componentDidMount() {
      this.props.coordinator.RegisterDropRegion(this);
    }
    componentWillUnmount() {
      this.props.coordinator.UnregisterDropRegion(this);
    }
    OnDragStarted(e) {
      this.setState({ bDraggableActive: !0 });
    }
    OnDragEnded(e) {
      this.setState({ bDraggableActive: !1 });
    }
    OnDragEnter(e, t) {
      this.setState({ dropGhost: t }),
        this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
    }
    OnDragLeave(e) {
      this.setState({ dropGhost: void 0 }),
        this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
    }
    OnDragMove(e, t, n) {}
    OnDrop(e) {
      this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
    }
    BAcceptDraggable(e) {
      return !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(e);
    }
    BDraggableInRegion(e, t, n) {
      return Oo(e, t, this.GetClientRect());
    }
    GetElement() {
      return this.m_divRef.current;
    }
    GetClientRect() {
      return (
        this.m_divRef.current && this.m_divRef.current.getBoundingClientRect()
      );
    }
    render() {
      let {
          coordinator: e,
          fnBAcceptDraggable: t,
          fnOnDrop: n,
          fnOnDragEnter: i,
          fnOnDragLeave: r,
          className: a,
          strActiveClassName: s,
          children: c,
          focusable: l,
          containerRef: d,
          ...p
        } = this.props,
        m = g(
          a || "DialogDropRegion",
          this.state.bDraggableActive && (s || "Active"),
        );
      return (0, oe.jsxs)(Ie, {
        ref: Cn(d, this.m_divRef),
        className: m,
        ...p,
        focusable: l === void 0 ? !!p.onClick : l,
        children: [this.state.dropGhost, c],
      });
    }
  },
  Bn = class extends No {
    BDraggableInRegion(e, t, n) {
      let i = this.GetClientRect();
      return i
        ? e >= i.left && e <= i.right && t >= i.top - 20 && t <= i.bottom + 20
        : !1;
    }
  };
var w = u(D());
var Le = {
  narrowWidth: "500px",
  "duration-app-launch": "800ms",
  PagedSettingsDialog: "fb--znpA9iY-",
  PagedSettingDialog_ContentColumn: "j1MmI35qVcc-",
  PagedSettingsDialog_PageListColumn: "ByZLSOXEJi8-",
  ResponsivePageList: "se2JFXkqcLA-",
  ResponsiveActivePage: "_5XW9bozMUTA-",
  PagedSettingsDialog_PageContent: "Qe9z1N90-mU-",
  NoPadding: "_25gxUTuvrIE-",
  Hidden: "PeXPE70M0-U-",
  NewNoteButton: "qrmLtG95jB0-",
  PagedSettingsDialog_Title: "vcucl2oj9Fk-",
  PagedSettingsDialog_PageList: "Tw4UqPnHT-Y-",
  PagedSettingsDialog_PageList_DisableScrolling: "_6ojc--MD434-",
  PagedSettingsDialog_PageListItem: "r3lLnZCioSI-",
  PageListItem_Icon: "fyzIFdjZ-zo-",
  PageListItem_Title: "YHbhPD53VXA-",
  DisabledItem: "_79-MLEJ4qwk-",
  Active: "kFlFNnkL7qo-",
  PageListSpacer: "msIgvzU-CxQ-",
  PageListSeparator: "Y5n0jzYJBSg-",
  Transparent: "K-hjH6eEVZs-",
  HidePageListButton: "Q4sUKE2nwwg-",
  ReturnToPageListButton: "Vr19V2RKWC8-",
};
var E = u(b()),
  Ka = "separator",
  es = "spacer",
  Qt = class {
    constructor() {
      ye(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
f([Ae], Qt.prototype, "m_flPageListScrollTop", 2),
  f([Ae], Qt.prototype, "m_flPageScrollTop", 2);
var st = class st {
  static s_Instance;
  static Get() {
    return st.s_Instance || (st.s_Instance = new st()), st.s_Instance;
  }
  constructor() {
    ye(this);
  }
  m_setPagedSettingsInstances = new Set();
};
f([Ae], st.prototype, "m_setPagedSettingsInstances", 2);
var Wn = st;
function ts(o) {
  let {
      stylesheet: e,
      pages: t,
      iActivePage: n,
      onPageSelected: i,
      PageListItemComponent: r = ns,
      PageListSeparatorComponent: a = os,
    } = o,
    s = w.useContext(Vn);
  return t.map((c, l) => {
    let d = l === n;
    if (c === Ka) {
      let p = l === n + 1 || l === n - 1;
      return (0, E.jsx)(a, { role: "separator", bTransparent: p }, l);
    } else {
      if (c === es)
        return (0, E.jsx)("div", { className: Le.PageListSpacer }, l);
      {
        if (c.visible === !1) return null;
        let p = c.identifier || c.title || l.toString(),
          m = () => i(l, c);
        return (0, E.jsx)(
          r,
          {
            className: g(e.PagedSettingsDialog_PageListItem, { [e.Active]: d }),
            onClick: m,
            title: c.title,
            icon: c.icon,
            active: d,
            id: s + c.identifier,
            role: "tab",
            "aria-selected": d,
            "aria-controls": s + c.identifier + "_Content",
          },
          p,
        );
      }
    }
  });
}
function ns(o) {
  let { title: e, icon: t, active: n, className: i, onClick: r, ...a } = o;
  return (0, E.jsxs)("div", {
    className: i,
    onClick: r,
    ...a,
    children: [
      t
        ? (0, E.jsx)("div", { className: Le.PageListItem_Icon, children: t })
        : null,
      (0, E.jsx)("div", {
        className: Le.PageListItem_Title,
        ...a,
        children: e,
      }),
    ],
  });
}
var Pr = w.forwardRef(function (e, t) {
  let { activePage: n, style: i, stylesheet: r } = e,
    a = w.useContext(Vn),
    s = n?.padding ?? "standard";
  return (0, E.jsxs)(So, {
    style: i,
    className: g(
      r?.PagedSettingsDialog_PageContent,
      n?.pageClassName,
      s == "none" && r?.NoPadding,
    ),
    refElem: t,
    role: "tabpanel",
    "aria-labelledby": a + n?.identifier,
    id: a + n?.identifier + "_Content",
    children: [
      n?.header,
      !n?.hideTitle && (0, E.jsx)(On, { children: n?.title }),
      (0, E.jsx)(se, { children: n?.content }),
    ],
  });
});
function os(o) {
  let { bTransparent: e, className: t, ...n } = o;
  return (0, E.jsx)("div", {
    className: g(t, Le.PageListSeparator, { [Le.Transparent]: e }),
    ...n,
  });
}
var Vn = w.createContext(void 0),
  Mr = w.forwardRef(function (e, t) {
    let { stylesheet: n = Le, pages: i, onPageRequested: r } = e,
      a = w.useId(),
      s = e.page == null,
      [c, l] = w.useState(() =>
        e.startingPage === void 0
          ? -1
          : i.findIndex(
              (W) => typeof W == "object" && W.identifier === e.startingPage,
            ),
      ),
      d = c;
    s ||
      (d = i.findIndex((W) => typeof W == "object" && W.identifier === e.page)),
      (d < 0 || d >= i.length) && (d = 0);
    let p = null;
    typeof i[d] == "object" && (p = i[d]);
    let m = w.useRef(null),
      C = w.useCallback(() => m.current?.TakeFocus() || !1, [m]),
      [v, _] = w.useState(!1),
      P = v ? C : void 0,
      I = w.useCallback((W) => {
        W && _(!0);
      }, []),
      A = w.useCallback(
        (W, Ke) => {
          _(!0),
            _e.PlayNavSound(15),
            r && r(Ke.identifier),
            Ke.click ? Ke.click() : s && l(W);
        },
        [s, r],
      ),
      k = w.useRef(null),
      U = (W) => {
        W.detail.button == 1 && k.current?.TakeFocus(W.detail.button);
      },
      B = e.showTitle ?? !0,
      G = g("DialogContentTransition", n.PagedSettingDialog_ContentColumn);
    w.useEffect(() => {
      e.bAutoFocusPageContent && k.current?.TakeFocus();
    }, []);
    let { refForPageList: ne, refForPage: j } = as();
    return (0, E.jsx)(Vn.Provider, {
      value: a,
      children: (0, E.jsxs)(O, {
        className: g(n.PagedSettingsDialog, e.className),
        ref: t,
        children: [
          (0, E.jsxs)(O, {
            className: g(
              n.PagedSettingsDialog_PageListColumn,
              e.hideList && Le.Hidden,
              "PageListColumn",
            ),
            navRef: m,
            onButtonDown: U,
            onFocusWithin: I,
            children: [
              B &&
                (0, E.jsx)("div", {
                  className: n.PagedSettingsDialog_Title,
                  children: e.title,
                }),
              e.topControls && (0, E.jsx)("div", { children: e.topControls }),
              (0, E.jsx)(O, {
                className: g(
                  n.PagedSettingsDialog_PageList,
                  e.disablePageListScrolling &&
                    n.PagedSettingsDialog_PageList_DisableScrolling,
                  B && n.PagedSettingsDialog_PageList_ShowTitle,
                  e.bNoHeaderPadding &&
                    n.PageSettingsDialog_PageList_NoHeaderPadding,
                ),
                role: "tablist",
                "aria-orientation": "vertical",
                navEntryPreferPosition: 4,
                ref: ne,
                children: (0, E.jsx)(ts, {
                  stylesheet: n,
                  pages: i,
                  iActivePage: d,
                  onPageSelected: A,
                  PageListItemComponent: e.PageListItemComponent,
                  PageListSeparatorComponent: e.PageListSeparatorComponent,
                }),
              }),
              e.bottomControls &&
                (0, E.jsx)("div", { children: e.bottomControls }),
            ],
          }),
          (0, E.jsxs)(O, {
            className: G,
            onCancelButton: P,
            navRef: k,
            children: [
              e.toggleHideList &&
                (0, E.jsx)(rs, {
                  hideList: e.hideList,
                  toggleHideList: e.toggleHideList,
                }),
              e.renderPageContent
                ? e.renderPageContent(p, j, Pr)
                : (0, E.jsx)(Pr, { ref: j, activePage: p, stylesheet: n }),
            ],
          }),
        ],
      }),
    });
  });
var is = w.createContext(!1);
var $d = w.memo(function (e) {
  let {
      isActive: t,
      refForPage: n,
      page: i,
      PageComponent: r,
      stylesheet: a,
    } = e,
    s = w.useContext(Vn),
    c = w.useRef(!1);
  if (!t && !c.current) return null;
  c.current = !0;
  let l = t ? void 0 : { display: "none" };
  return (0, E.jsx)(is.Provider, {
    value: t,
    children: (0, E.jsx)(r, {
      ref: n,
      style: l,
      activePage: i,
      stylesheet: a,
      role: "tabpanel",
      "aria-labelledby": s + i.identifier,
      id: s + i.identifier + "_Content",
    }),
  });
});
function rs(o) {
  let { hideList: e, toggleHideList: t } = o;
  return (0, E.jsx)("div", {
    className: g(Le.HidePageListButton, e && Le.ListHidden),
    onClick: t,
    children: e
      ? (0, E.jsx)(go, { direction: "right" })
      : (0, E.jsx)(go, { direction: "left" }),
  });
}
function as() {
  let o = w.useMemo(() => new Qt(), []);
  w.useEffect(
    () => (
      Wn.Get().m_setPagedSettingsInstances.add(o),
      () => {
        Wn.Get().m_setPagedSettingsInstances.delete(o);
      }
    ),
    [o],
  );
  let e = w.useCallback(
      (l) => (o.m_flPageListScrollTop = l.currentTarget.scrollTop),
      [o],
    ),
    t = w.useCallback(
      (l) => (o.m_flPageScrollTop = l.currentTarget.scrollTop),
      [o],
    ),
    n = lo("scroll", e),
    i = lo("scroll", t),
    r = w.useCallback(
      (l) => (o.m_flPageListScrollTop = l?.scrollTop ?? 0),
      [o],
    ),
    a = w.useCallback((l) => (o.m_flPageScrollTop = l?.scrollTop ?? 0), [o]),
    s = ve(n, r),
    c = ve(i, a);
  return { refForPageList: s, refForPage: c };
}
var Hn = u(D());
var wr = u(b()),
  Qe = class extends Hn.Component {
    m_refTextArea = Hn.createRef();
    m_nTextAreaPadding;
    m_cEntryLength = Number.MAX_VALUE;
    get textarea() {
      return this.m_refTextArea.current;
    }
    get value() {
      return this.m_refTextArea.current?.value;
    }
    focus() {
      this.m_refTextArea.current?.focus();
    }
    InternalOnInput() {
      let e = this.m_refTextArea.current,
        t = this.GetMinHeight(),
        n = this.GetMaxHeight(),
        i,
        r = e.value.length;
      if (
        (this.m_nTextAreaPadding === void 0 && this.CalculatePadding(),
        r < this.m_cEntryLength &&
          ((i = window.scrollY), (e.style.height = t + "px")),
        e.scrollHeight > n)
      )
        (e.style.height = n + "px"), (e.style.overflow = "auto");
      else if (e.scrollHeight != e.clientHeight) {
        let a = Math.max(e.scrollHeight, t);
        (e.style.height = a - this.m_nTextAreaPadding + "px"),
          e.style.overflow == "auto" && (e.style.overflow = "hidden");
      }
      i !== void 0 && window.scrollTo(window.scrollX, i),
        (this.m_cEntryLength = r);
    }
    CalculatePadding() {
      let e = getComputedStyle(this.m_refTextArea.current);
      this.m_nTextAreaPadding =
        e.boxSizing == "border-box"
          ? 0
          : parseFloat(e.paddingTop) + parseFloat(e.paddingBottom);
    }
    GetMinHeight() {
      return this.props.nMinHeight || 20;
    }
    GetMaxHeight() {
      return this.props.nMaxHeight || 500;
    }
    DeferredInternalOnInput() {
      window.setTimeout(this.InternalOnInput, 1);
    }
    OnKeyUp(e) {
      this.InternalOnInput(), this.props.onKeyUp && this.props.onKeyUp(e);
    }
    OnBlur(e) {
      this.DeferredInternalOnInput(), this.props.onBlur && this.props.onBlur(e);
    }
    OnClick(e) {
      this.InternalOnInput(), this.props.onClick && this.props.onClick(e);
    }
    OnPaste(e) {
      this.DeferredInternalOnInput(),
        this.props.onPaste && this.props.onPaste(e);
    }
    OnCut(e) {
      this.InternalOnInput(), this.props.onCut && this.props.onCut(e);
    }
    componentDidMount() {
      (this.m_refTextArea.current.style.overflow = "hidden"),
        (this.m_refTextArea.current.style.resize = "none"),
        this.InternalOnInput();
    }
    componentDidUpdate(e) {
      (e.nMinHeight != this.props.nMinHeight ||
        e.nMaxHeight != this.props.nMaxHeight) &&
        (this.m_cEntryLength = Number.MAX_VALUE),
        this.m_refTextArea.current?.value.length != this.m_cEntryLength &&
          this.InternalOnInput();
    }
    render() {
      let { nMinHeight: e, nMaxHeight: t, ...n } = this.props;
      return (0, wr.jsx)(_i, {
        ...n,
        ref: this.m_refTextArea,
        onKeyUp: this.OnKeyUp,
        onBlur: this.OnBlur,
        onClick: this.OnClick,
        onPaste: this.OnPaste,
        onCut: this.OnCut,
      });
    }
  };
f([h], Qe.prototype, "InternalOnInput", 1),
  f([h], Qe.prototype, "OnKeyUp", 1),
  f([h], Qe.prototype, "OnBlur", 1),
  f([h], Qe.prototype, "OnClick", 1),
  f([h], Qe.prototype, "OnPaste", 1),
  f([h], Qe.prototype, "OnCut", 1);
var te = u(D());
var Oe = u(D());
var Tr = { m_unPID: 0, m_nBrowserID: -1 };
var jt = class {
  m_fnRender;
  m_rgLoadingLinks = [];
  constructor(e, t, n) {
    if (((this.m_rgLoadingLinks = []), n))
      for (let i = 0; i < n.length; i++) this.AddLink(n[i], !0);
    else if (e) {
      let i = e.getElementsByTagName("link");
      for (let r = 0; r < i.length; r++) {
        let a = i[r];
        this.AddLink(a, !1);
      }
    }
  }
  AddLink(e, t) {
    if (t) {
      let n = !1;
      try {
        (!e.sheet || !e.sheet.cssRules || e.sheet.cssRules.length == 0) &&
          (n = !0);
      } catch {}
      n &&
        (e.addEventListener("load", this.OnLinkLoad),
        this.m_rgLoadingLinks.push(e));
    } else
      e.addEventListener("load", this.OnLinkLoad),
        this.m_rgLoadingLinks.push(e);
  }
  SetTarget(e) {
    (this.m_fnRender = e),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender(), (this.m_fnRender = void 0));
  }
  OnLinkLoad(e) {
    e.currentTarget.removeEventListener("load", this.OnLinkLoad),
      kt(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
f([h], jt.prototype, "OnLinkLoad", 1);
var ss = u(D());
function Ao() {
  return Si() ? 256 : 0;
}
function Zt(o) {
  let e = 0;
  switch (o) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= Zt(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= Zt(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= Ao()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= Ao()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= Ao()),
        e
      );
  }
}
function Er() {
  let { ownerWindow: o } = re();
  return Pe.GetPopupForWindow(o)?.browser_info || Tr;
}
var Lr = Oe.createContext({ ownerWindow: window }),
  re = () => Oe.useContext(Lr);
function Or(o) {
  let { ownerWindow: e, children: t } = o,
    n = Oe.useMemo(() => ({ ownerWindow: e }), [e]);
  return Oe.createElement(Lr.Provider, { value: n }, t);
}
var ie = class {
  m_strName;
  m_strTitle;
  m_rgParams;
  m_popup;
  m_element;
  m_renderWhenReady;
  m_bCreateHidden;
  m_bCreated = !1;
  m_onCreateRender = null;
  m_bFocused = !1;
  constructor(e, t) {
    ye(this),
      Y(
        e,
        "Name is required.  This is an internal name, different from title.",
      ),
      (this.m_strName = e);
    let { title: n, eCreationFlags: i, ...r } = t;
    (this.m_rgParams = { ...r, eCreationFlags: i ?? 0 }),
      this.m_rgParams.target_browser &&
        (this.m_strName += "_uid" + this.m_rgParams.target_browser.m_unPID),
      (this.m_bCreateHidden = !!(this.m_rgParams.eCreationFlags & 2)),
      (this.m_strTitle = n);
  }
  UpdateParamsBeforeShow(e) {
    return e;
  }
  OnDrop(e) {
    console.log("Ignoring drop onto toplevel window", e),
      e.preventDefault(),
      e.stopPropagation();
  }
  OnDragOver(e) {
    e.preventDefault(),
      (e.dataTransfer.dropEffect = "none"),
      e.stopPropagation();
  }
  OnMessage(e) {
    e.data == "window_resized" && this.OnResize(),
      e.data == "popup-created" && this.OnCreateInternal();
  }
  Show(e = 1) {
    let t;
    typeof e == "boolean" ? (t = e ? 1 : 0) : (t = e),
      window.SteamClient && (this.m_rgParams.eCreationFlags |= 2),
      this.m_rgParams.eCreationFlags & 512 && (t = 0),
      this.BIsValid() &&
        (this.BIsClosed()
          ? ((this.m_popup = void 0), (this.m_element = void 0))
          : t != 0 && this.Focus(t));
    let n = Pe.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let i, r, a;
    n
      ? ((r = n.m_element),
        (i = n.m_popup),
        (a = n.m_renderWhenReady),
        Pe.RemoveTrackedPopup(n),
        n.ReleasePopup(),
        i?.removeEventListener("beforeunload", n.OnBeforeUnloadEvent),
        i?.removeEventListener("unload", n.OnUnload),
        i?.removeEventListener("resize", n.OnResizeEvent),
        i?.removeEventListener("focus", this.OnFocusInternal),
        i?.removeEventListener("blur", this.OnBlurInternal),
        i?.removeEventListener("drop", n.OnDrop),
        i?.removeEventListener("dragover", n.OnDragOver),
        i?.removeEventListener("message", this.OnMessage))
      : (({ popup: i, element: r } = Jt.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new jt(i?.document, r))),
      i &&
        r &&
        ((i.document.title = this.m_strTitle),
        i.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
        i.addEventListener("unload", this.OnUnload),
        i.addEventListener("resize", this.OnResizeEvent),
        i.addEventListener("focus", this.OnFocusInternal),
        i.addEventListener("blur", this.OnBlurInternal),
        i.addEventListener("drop", this.OnDrop),
        i.addEventListener("dragover", this.OnDragOver),
        i.addEventListener("message", this.OnMessage),
        Ne.LANGUAGE &&
          i.document.documentElement.setAttribute("lang", Mi() ?? ""),
        (this.m_popup = i),
        (this.m_element = r),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, t);
        })),
      Pe.AddTrackedPopup(this),
      n && (this.OnCreateInternal(), t != 0 && this.Focus(t));
  }
  RemoveEventListeners() {
    this.window?.removeEventListener("beforeunload", this.OnBeforeUnloadEvent),
      this.window?.removeEventListener("unload", this.OnUnload),
      this.window?.removeEventListener("resize", this.OnResizeEvent),
      this.window?.removeEventListener("focus", this.OnFocusInternal),
      this.window?.removeEventListener("blur", this.OnBlurInternal),
      this.window?.removeEventListener("drop", this.OnDrop),
      this.window?.removeEventListener("dragover", this.OnDragOver),
      this.window?.removeEventListener("message", this.OnMessage);
  }
  RenderInternal(e, t, n) {
    if (!this.m_bCreated) {
      this.m_onCreateRender = () => this.RenderInternal(e, t, n);
      return;
    }
    this.browser_info &&
      Qi(this.browser_info.m_eBrowserType) &&
      (t.ownerDocument.body.className += " VR"),
      this.Render(e, t),
      this.OnLoad(),
      e?.SteamClient &&
        !this.m_bCreateHidden &&
        (n != 0
          ? e.SteamClient.Window.BringToFront(n)
          : e.SteamClient.Window.ShowWindow());
  }
  OnCreateInternal() {
    this.m_bCreated ||
      ((this.m_bCreated = !0),
      this.OnCreate(),
      this.m_onCreateRender &&
        (this.m_onCreateRender(), (this.m_onCreateRender = null)));
  }
  OnCreate() {}
  OnResizeEvent() {
    this.OnResize();
  }
  OnBeforeUnloadEvent() {
    this.OnBeforeUnload();
  }
  OnUnload(e) {
    this.RemoveEventListeners(),
      Pe.RemoveTrackedPopup(this),
      this.OnClose(),
      (this.m_popup = void 0);
  }
  get browser_info() {
    return this.m_rgParams.target_browser;
  }
  get window() {
    return this.m_popup;
  }
  get root_element() {
    return this.m_element;
  }
  get title() {
    return this.m_strTitle;
  }
  set title(e) {
    (this.m_strTitle = e),
      this.m_popup && (this.m_popup.document.title = this.m_strTitle);
  }
  get params() {
    return this.m_rgParams;
  }
  Focus(e = 1) {
    e != 0 &&
      (this.m_popup &&
      typeof this.m_popup.SteamClient < "u" &&
      typeof this.m_popup.SteamClient.Window < "u"
        ? this.m_popup.SteamClient.Window.BringToFront(e)
        : this.m_popup && this.m_popup.focus());
  }
  Close() {
    this.m_popup &&
      (De(this.m_popup.window, "Window.Close")
        ? this.m_popup.window.SteamClient.Window.Close()
        : this.m_popup.window.close());
  }
  GetName() {
    return this.m_strName;
  }
  BIsValid() {
    return !!this.m_popup;
  }
  BIsClosed() {
    return !this.m_popup || this.m_popup.closed;
  }
  BIsVisible() {
    return !!(
      this.m_popup &&
      !this.m_popup.closed &&
      this.m_popup.document.visibilityState == "visible"
    );
  }
  BIsFocused() {
    return this.BIsVisible() && !!this.m_popup?.document.hasFocus();
  }
  OnFocusInternal() {
    this.m_popup && this.m_popup.document.body.classList.add("WindowFocus"),
      (this.m_bFocused = !0),
      this.OnFocus();
  }
  OnBlurInternal() {
    this.m_popup && this.m_popup.document.body.classList.remove("WindowFocus"),
      (this.m_bFocused = !1),
      this.OnBlur();
  }
  get focused() {
    return this.m_bFocused;
  }
  GetWindowRestoreDetails() {
    return De(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return De(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return De(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMaximized()
      : Promise.resolve(!1);
  }
  ReleasePopup() {
    this.OnClose(), (this.m_popup = null);
  }
  OnResize() {
    this.IsMaximized().then((e) => {
      e
        ? this.m_popup?.document.body.classList.add("Maximized")
        : this.m_popup?.document.body.classList.remove("Maximized");
    });
  }
  OnBeforeUnload() {}
  OnFocus() {}
  OnBlur() {}
};
f([Ae], ie.prototype, "m_bFocused", 2),
  f([h], ie.prototype, "OnMessage", 1),
  f([h], ie.prototype, "RenderInternal", 1),
  f([h], ie.prototype, "OnCreateInternal", 1),
  f([h], ie.prototype, "OnResizeEvent", 1),
  f([h], ie.prototype, "OnBeforeUnloadEvent", 1),
  f([h], ie.prototype, "OnUnload", 1),
  f([h], ie.prototype, "OnFocusInternal", 1),
  f([h], ie.prototype, "OnBlurInternal", 1);
var yo = class extends ie {
  m_strSavedDimensionsKey;
  m_strInitialSavedDimensionsKey;
  m_strInitialRestoreDetails;
  m_bExpires;
  constructor(e, t, n, i) {
    super(e, n), this.SetSavedDimensionsKey(t), (this.m_bExpires = i);
  }
  BIsInOverlay() {
    return (
      this.browser_info &&
      this.browser_info.m_unPID != 0 &&
      this.browser_info.m_nBrowserID != -1
    );
  }
  SetSavedDimensionsKey(e) {
    this.m_strSavedDimensionsKey = e;
  }
  UpdateParamsBeforeShow(e) {
    return (
      this.m_strSavedDimensionsKey &&
      !e.bIgnoreSavedDimensions &&
      !e.strRestoreDetails
        ? ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          (e.strRestoreDetails = Pe.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          Pe.SetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
            e.strRestoreDetails,
            this.m_bExpires,
          )),
      e
    );
  }
  OnLoad() {
    this.GetWindowRestoreDetails().then((e) => {
      (this.m_strInitialRestoreDetails = e), this.OnResizeComplete(e);
    });
  }
  OnResize() {
    super.OnResize(), this.QueryAndStoreWindowPosition();
  }
  OnResizeComplete(e) {}
  QueryAndStoreWindowPosition() {
    if (this.m_strInitialRestoreDetails) {
      let e = this.GetSavedDimensionsKey();
      this.m_popup?.setTimeout(() => {
        this.GetWindowRestoreDetails().then((t) => {
          let n =
            this.m_rgParams.strRestoreDetails == t &&
            e == this.m_strInitialSavedDimensionsKey;
          this.m_popup &&
            this.m_strSavedDimensionsKey &&
            t &&
            !n &&
            (Pe.SetRestoreDetails(e, t, this.m_bExpires),
            (this.m_rgParams.strRestoreDetails = t),
            (this.m_strInitialSavedDimensionsKey = e),
            this.OnResizeComplete(t));
        });
      }, 30);
    }
  }
  OnBeforeUnload() {
    this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
  }
  OnClose() {}
  SaveWindowPosition(e) {
    Pe.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
f([h], yo.prototype, "QueryAndStoreWindowPosition", 1);
var Jt = class {
  m_bShuttingDown = !1;
  m_mapPopups = Ae.map([], { deep: !1 });
  m_rgShutdownCallbacks = [];
  m_rgPopupCreatedCallbacks = new ae();
  m_rgPopupDestroyedCallbacks = new ae();
  m_unCurrentAccountID = 0;
  m_mapRestoreDetails = new Map();
  m_bSaveRequired = !1;
  m_DynamicCSSObserver;
  constructor() {
    if ("addEventListener" in window) {
      window.addEventListener("beforeunload", (t) => {
        this.m_bShuttingDown = !0;
        for (let i of this.m_rgShutdownCallbacks) i();
        let n = [];
        this.m_mapPopups.forEach((i) => {
          i.BIsValid() && !i.BIsClosed() && n.push(i);
        });
        for (let i of n)
          i.window?.SteamClient.Browser?.SetShouldExitSteamOnBrowserClosed &&
            i.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(!1),
            i.window?.SteamClient.Window.SetHideOnClose &&
              i.window?.SteamClient.Window.SetHideOnClose(!1),
            i.Close();
        this.m_bSaveRequired && this.SaveSavedDimensionStore(),
          this.m_mapPopups.clear();
      });
      let e = document.querySelector("head");
      Y(e, "Couldn't find head element"),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let t = uo();
            this.m_mapPopups.forEach((n) => {
              fi(n.window.document, t, !1);
            });
          })),
          this.m_DynamicCSSObserver.observe(e, { childList: !0 }));
    }
  }
  BAnyPopupHasFocus() {
    for (let e of this.m_mapPopups.values()) if (e.focused) return !0;
    return !1;
  }
  BAnyMenuHasFocus() {
    for (let e of this.m_mapPopups.values())
      if (e.focused && (e.params.eCreationFlags ?? 0) & 8) return !0;
    return !1;
  }
  SetCurrentLoggedInAccountID(e) {
    this.m_unCurrentAccountID != e &&
      ((this.m_unCurrentAccountID = e),
      e ? this.LoadSavedDimensionStore() : this.ClearSavedDimensionStore());
  }
  AddShutdownCallback(e) {
    this.m_rgShutdownCallbacks.push(e);
  }
  AddPopupCreatedCallback(e) {
    return this.m_rgPopupCreatedCallbacks.Register(e);
  }
  AddPopupDestroyedCallback(e) {
    return this.m_rgPopupDestroyedCallbacks.Register(e);
  }
  AddTrackedPopup(e) {
    this.m_mapPopups.set(e.GetName(), e),
      e.BIsValid() && this.m_rgPopupCreatedCallbacks.Dispatch(e);
  }
  RemoveTrackedPopup(e) {
    this.m_rgPopupDestroyedCallbacks.Dispatch(e),
      this.m_mapPopups.delete(e.GetName());
  }
  GetExistingPopup(e) {
    return this.m_mapPopups.get(e);
  }
  GetPopups() {
    return this.m_mapPopups.values();
  }
  GetPopupForWindow(e) {
    for (let t of this.m_mapPopups.values()) if (t.window === e) return t;
  }
  ClosePopupsOwnedByBrowser(e) {
    this.m_mapPopups.forEach((t) => {
      t.browser_info &&
        t.browser_info.m_nBrowserID == e.m_nBrowserID &&
        t.browser_info.m_unPID == e.m_unPID &&
        t.Close();
    });
  }
  static CreatePopup(e, t) {
    let n = t.dimensions || {},
      i = n.width || 300,
      r = n.height || 300,
      a = t.title,
      s = "width=" + i + ",height=" + r;
    typeof n.left < "u" && (s += ",left=" + n.left),
      typeof n.top < "u" && (s += ",top=" + n.top),
      (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
    let c = "about:blank",
      l = [];
    l.push("createflags=" + t.eCreationFlags),
      t.minWidth && l.push("minwidth=" + t.minWidth),
      t.minHeight && l.push("minheight=" + t.minHeight),
      t.maxWidth && t.maxWidth != 1 / 0 && l.push("maxwidth=" + t.maxWidth),
      t.maxHeight && t.maxHeight != 1 / 0 && l.push("maxheight=" + t.maxHeight),
      t.target_browser
        ? (l.push("pid=" + t.target_browser.m_unPID),
          l.push("browser=" + t.target_browser.m_nBrowserID),
          t.target_browser.m_eBrowserType
            ? l.push("browserType=" + t.target_browser.m_eBrowserType)
            : t.browserType && l.push("browserType=" + t.browserType),
          t.availscreenwidth &&
            t.availscreenheight &&
            (l.push("screenavailwidth=" + t.availscreenwidth),
            l.push("screenavailheight=" + t.availscreenheight)))
        : t.browserType && l.push("browserType=" + t.browserType),
      t.strVROverlayKey && l.push("vrOverlayKey=" + t.strVROverlayKey),
      t.strRestoreDetails && l.push("restoredetails=" + t.strRestoreDetails),
      t.window_opener_id && l.push("openerid=" + t.window_opener_id),
      t.parent_container_popup_id &&
        l.push("parentcontainerpopupid=" + t.parent_container_popup_id),
      t.center_on_window &&
        typeof n.left > "u" &&
        typeof n.top > "u" &&
        l.push(
          "centerOnBrowserID=" +
            t.center_on_window.SteamClient.Browser.GetBrowserID(),
        ),
      t.strUserAgent && l.push("useragent=" + t.strUserAgent),
      t.hwndParent && l.push("hwndParent=" + t.hwndParent),
      t.bPinned && l.push("pinned=true"),
      t.bModal && l.push("modal=true"),
      l && (c += "?" + l.join("&"));
    let p = (t.owner_window || window).open(c, e, s);
    if (!p)
      return (
        console.error(
          `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
        ),
        {}
      );
    let m = "";
    t.html_class && (m = `class="${t.html_class}"`);
    let C = "";
    t.body_class && (C = `class="${t.body_class}"`);
    let v = "";
    t.body_role && (v = `role="${t.body_role}"`);
    let _ = "";
    t.popup_class && (_ = `class="${t.popup_class}"`);
    let P = `<!DOCTYPE html><html ${m}><head><title></title></head><body ${C} ${v}><div id="popup_target" ${_}></div></body></html>`;
    return (
      p.document.write(P),
      (p.document.title = a),
      p.document.close(),
      mi(p, uo()),
      { popup: p, element: p.document.getElementById("popup_target") }
    );
  }
  BShuttingDown() {
    return this.m_bShuttingDown;
  }
  GetLocalStorageKey() {
    return "PopupSavedDimensions_" + this.m_unCurrentAccountID;
  }
  LoadSavedDimensionStore() {
    if (!this.m_unCurrentAccountID) return;
    let e = this.GetLocalStorageKey();
    this.m_mapRestoreDetails.clear();
    let t = window.localStorage.getItem(e);
    if (t)
      try {
        let n = JSON.parse(t);
        this.m_mapRestoreDetails = new Map(n);
      } catch {}
  }
  SaveSavedDimensionStore() {
    if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
    let e = this.GetLocalStorageKey(),
      t = JSON.stringify(Array.from(this.m_mapRestoreDetails));
    try {
      window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
    } catch (n) {
      if ("name" in n && n.name == "QuotaExceededError") {
        console.log("Quota exceeded");
        for (let i of Object.keys(window.localStorage))
          i.startsWith("PopupSavedDimensions_") &&
            i != e &&
            window.localStorage.removeItem(i);
        window.localStorage.setItem(e, t), (this.m_bSaveRequired = !1);
      }
    }
  }
  DebouncedSaveSavedDimensionStore() {
    this.SaveSavedDimensionStore();
  }
  ClearSavedDimensionStore() {
    this.m_mapRestoreDetails?.clear(), (this.m_bSaveRequired = !1);
  }
  GetRestoreDetails(e) {
    if (!this.m_mapRestoreDetails?.has(e)) return "";
    let t = this.m_mapRestoreDetails.get(e);
    return (
      (t.last_used = Date.now()),
      (this.m_bSaveRequired = !0),
      t.strRestoreDetails
    );
  }
  SetRestoreDetails(e, t, n) {
    if (e) {
      if (t) {
        if (this.m_mapRestoreDetails.size > 50) {
          let r = null,
            a = Date.now();
          for (let s of Array.from(this.m_mapRestoreDetails.keys())) {
            let c = this.m_mapRestoreDetails.get(s);
            c.last_used < a && c.bExpires && ((a = c.last_used), (r = s));
          }
          r && this.m_mapRestoreDetails.delete(r);
        }
        let i = { strRestoreDetails: t, last_used: Date.now(), bExpires: n };
        this.m_mapRestoreDetails.set(e, i);
      } else this.m_mapRestoreDetails.delete(e);
      (this.m_bSaveRequired = !0),
        this.m_bShuttingDown
          ? this.SaveSavedDimensionStore()
          : this.DebouncedSaveSavedDimensionStore();
    }
  }
};
f([h, Ii(100)], Jt.prototype, "DebouncedSaveSavedDimensionStore", 1);
var Pe = new Jt();
window.g_PopupManager = Pe;
var Uo = u(D());
var Go = u(D());
var ea = u(D());
var Gn = class o {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${o.sm_lastKey++}`;
    }
  },
  ct = class extends Gn {
    element;
    ModalUpdatedCallback = new ae();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  lt = class extends Gn {
    m_OnElementReadyCallbacks = new ae();
    m_OnActiveModalCallbacks = new ae();
    constructor() {
      super();
    }
    get OnElementReadyCallbacks() {
      return this.m_OnElementReadyCallbacks;
    }
    get OnModalActiveCallbacks() {
      return this.m_OnActiveModalCallbacks;
    }
    RefModalElement(e) {
      e && this.m_OnElementReadyCallbacks.Dispatch(e);
    }
    SetActive(e) {
      this.m_OnActiveModalCallbacks.Dispatch(e);
    }
  };
f([h], lt.prototype, "RefModalElement", 1);
var Un = class extends ct {
  m_strName;
  m_modalProps;
  m_options;
  constructor(e, t, n, i) {
    super(t),
      (this.m_strName = e),
      (this.m_modalProps = n),
      (this.m_options = i);
  }
  get name() {
    return this.m_strName;
  }
  get modalProps() {
    return this.m_modalProps;
  }
  get options() {
    return this.m_options;
  }
};
var de = u(D()),
  Kr = u(vt());
var Tt = u(D());
var yr = u(b()),
  Nr = Tt.default.createContext(null);
function Ir(o) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: t = !0,
      children: n,
    } = o,
    r = re()?.ownerWindow || window,
    a = Tt.default.useRef();
  return (
    a.current || (a.current = new Vi()),
    Tt.default.useLayoutEffect(() => {
      if (t)
        return (
          fo.SetMenuManager(r, a.current), () => fo.SetMenuManager(r, void 0)
        );
    }, [r, t]),
    Tt.default.useLayoutEffect(
      () => (nt(e, a.current), () => nt(e, void 0)),
      [e],
    ),
    (0, yr.jsx)(Nr.Provider, { value: a.current, children: n })
  );
}
function Ar() {
  return Tt.default.useContext(Nr);
}
var Je = u(D()),
  kr = u(vt());
var je = u(D());
var $t = u(D());
var cs = u(b()),
  ls = $t.createContext({ body_class: "" });
function Fr() {
  return $t.useContext(ls);
}
function Yn(o, e, t) {
  let n = je.useRef(void 0),
    [i, r] = je.useState(void 0),
    a = Fr();
  return (
    n.current || (n.current = new Fo(o, ds(e, a), r)),
    (n.current.m_callbacks = t),
    je.useEffect(() => {
      if (!n.current?.params.bNoInitialShow) {
        let s = n.current?.params.bNoFocusOnShow ? 2 : 1;
        n.current?.Show(s);
      }
      return () => {
        (n.current.m_callbacks = void 0),
          n.current.window?.SteamClient.Window.SetHideOnClose &&
            n.current.window?.SteamClient.Window.SetHideOnClose(!1),
          n.current.Close();
      };
    }, []),
    je.useEffect(() => {
      n.current.window?.SteamClient.Window.SetHideOnClose &&
        n.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: n.current.window, element: i, popupObj: n.current }
  );
}
function ds(o, e) {
  return { ...o, body_class: g(o.body_class, e.body_class) };
}
var Fo = class extends ie {
  m_callbacks;
  m_fnReadyToRender;
  constructor(e, t, n) {
    super(e, t), (this.m_fnReadyToRender = n);
  }
  DoCallback(e) {
    this.m_callbacks?.[e]?.(this.m_popup, this.m_element);
  }
  UpdateParamsBeforeShow(e) {
    return this.m_callbacks?.updateParamsBeforeShow
      ? this.m_callbacks.updateParamsBeforeShow(e)
      : e;
  }
  OnCreate() {
    this.m_callbacks?.onCreate &&
      this.m_callbacks.onCreate(this.m_popup, this.m_element);
  }
  OnBlur() {
    this.DoCallback("onBlur");
  }
  OnFocus() {
    this.DoCallback("onFocus");
  }
  OnLoad() {
    this.DoCallback("onLoad");
  }
  OnResize() {
    this.DoCallback("onResize");
  }
  OnClose() {
    this.DoCallback("onClose");
  }
  Render(e, t) {
    this.m_fnReadyToRender(t);
  }
};
var ce = u(b());
function Br(o) {
  let { managerOverride: e, bSuppressMouseOverlay: t } = o,
    n = _t(),
    i = Er(),
    r = Ar(),
    a = e ?? r;
  Dt(a.OnMenusChanged, n);
  let s = !t && a.BShouldRenderMouseOverlay(),
    c = a.GetAllMenus();
  return (0, ce.jsxs)(ce.Fragment, {
    children: [
      s && (0, ce.jsx)(Bi, {}),
      c.map((l) =>
        (0, ce.jsx)(
          se,
          { children: (0, ce.jsx)(us, { instance: l, browserInfo: i }) },
          l.key,
        ),
      ),
    ],
  });
}
function us(o) {
  let { instance: e, browserInfo: t, children: n } = o,
    i = !1,
    r = zn(),
    a = re().ownerWindow,
    s = Je.default.useRef(void 0);
  s.current === void 0 &&
    (s.current =
      (i || e.options.bForcePopup || a.innerWidth < 400 || r?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let c = Je.default.useMemo(
      () => ({ instance: e, styles: po, presentation: 0 }),
      [e],
    ),
    l = n || e.ReactElement;
  return (0, ce.jsx)(yi.Provider, {
    value: c,
    children: s.current
      ? (0, ce.jsx)(ms, { instance: e, browserInfo: t, children: l })
      : (0, ce.jsx)(ps, { instance: e, children: l }),
  });
}
function ps(o) {
  let { instance: e, children: t } = o;
  return (0, ce.jsx)(mo, { ...e.position, children: t });
}
function ms(o) {
  let { instance: e, browserInfo: t, children: n } = o,
    i = Je.default.useRef(null),
    a = re().ownerWindow,
    s = a.SteamClient.Browser.GetBrowserID(),
    c = Je.default.useCallback(
      (m) => {
        let { options: C, position: v } = e,
          _ = v.element;
        if (C.bScreenCoordinates)
          m.dimensions = {
            left: v.clientX,
            top: v.clientY,
            width: 2,
            height: 1,
          };
        else {
          let P = di(a, _.getBoundingClientRect());
          (m.dimensions = { left: P.right, top: P.top, width: 2, height: 1 }),
            (m.availscreenwidth = a.screen.availWidth),
            (m.availscreenheight = a.screen.availHeight);
        }
        return m;
      },
      [a, e],
    ),
    l = e.options.bStandalone ? Zt(4) : Zt(3);
  e.options.bCreateHidden && (l |= 2), e.options.bAlwaysOnTop && (l |= 8192);
  let { popupObj: d, element: p } = Yn(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: po.ContextMenuPopup + " client_chat_frame",
      body_class: "ContextMenuPopupBody",
      replace_existing_popup: !1,
      target_browser: t,
      window_opener_id: s,
      bHideOnClose: !0,
      eCreationFlags: l,
    },
    { updateParamsBeforeShow: c },
  );
  return (
    (0, Je.useEffect)(() => {
      if (d)
        if (e.visible) {
          i.current && i.current.PositionMenu(),
            i.current && i.current.PositionPopupWindow();
          let m = e.options.bNoFocusWhenShown ? 2 : 1;
          e.TakeFocus(m);
        } else
          e.options.bRetainOnHide &&
            window.setTimeout(() => {
              d.window?.SteamClient.Window.HideWindow();
            }, 30);
    }, [d, e, e.visible]),
    Wr(d.window),
    Je.default.useEffect(() => {
      e.SetPopup(d);
    }, [e, d]),
    p
      ? kr.default.createPortal(
          (0, ce.jsx)(mo, {
            ref: i,
            ...e.position,
            parentWin: a,
            popup: d,
            children: n,
          }),
          p,
        )
      : null
  );
}
var Et = u(D());
function Vr(o) {
  let [e, t] = (0, Et.useState)(!1);
  return (
    (0, Et.useEffect)(() => {
      (0, Et.startTransition)(() => {
        t(!0);
      });
    }, []),
    e ? o.children : (o.fallback ?? null)
  );
}
var be = u(D());
var Yr = u(D()),
  zr = u(vt());
var Kt = u(D());
var Ze = u(D());
function Hr(o) {
  let [e, t] = Ze.default.useState(!1),
    n = Ze.default.useCallback(() => {
      De(o, "Window.IsWindowMaximized")
        ? o.SteamClient.Window.IsWindowMaximized().then((i) => {
            t(i);
          })
        : o?.screen &&
          t(
            o.screen.availWidth == o.innerWidth &&
              o.screen.availHeight == o.innerHeight,
          );
    }, [o]);
  return (
    Ze.default.useEffect(n, [n, o]),
    vn(o, "resize", n),
    co(o, ["window_resized"], n),
    e
  );
}
function Gr(o, e = 100) {
  let [t, n] = Ze.default.useState(!1),
    i = Ze.default.useCallback(() => n(!0), [n]),
    r = Ze.default.useCallback(() => n(!1), [n]);
  return (
    Ze.default.useEffect(() => {
      if (o)
        return (
          o.addEventListener("focus", i),
          o.addEventListener("blur", r),
          () => {
            o.removeEventListener("focus", i), o.removeEventListener("blur", r);
          }
        );
    }, [o, i, r]),
    ci(t, e)
  );
}
var F = u(b());
function fs(o) {
  let { popup: e, onMaximize: t, bOSX: n } = o,
    i = Hr(e),
    r = Kt.useCallback(() => {
      t
        ? t()
        : De(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, t]);
  return (0, F.jsx)(ko, {
    className: g(i ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: r,
    children: !n && (i ? (0, F.jsx)(Oi, {}) : (0, F.jsx)(Ei, {})),
  });
}
function gs(o) {
  let { popup: e, onMinimize: t, bOSX: n } = o,
    i = Kt.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, F.jsx)(ko, {
    className: "minimizeButton windowControlButton",
    onClick: t ?? i,
    children: !n && (0, F.jsx)(Li, {}),
  });
}
function hs(o) {
  let { popup: e, onClose: t, bOSX: n } = o,
    i = Kt.useCallback(() => {
      e && (De(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, F.jsx)(ko, {
    className: "closeButton windowControlButton",
    onClick: t ?? i,
    children: !n && (0, F.jsx)(St, {}),
  });
}
function ko(o) {
  let { className: e, onClick: t, children: n } = o,
    i = Kt.useCallback(
      (r) => {
        t && (r.stopPropagation(), t(r));
      },
      [t],
    );
  return (0, F.jsx)("div", {
    className: g("title-area-icon", e),
    onClick: i,
    children: (0, F.jsx)("div", {
      className: "title-area-icon-inner",
      children: n,
    }),
  });
}
function Ur(o) {
  let {
      className: e,
      style: t,
      hideActions: n,
      hideClose: i,
      hideMin: r,
      hideMax: a,
      bOSX: s = Pi(),
      bForceWindowFocused: c,
      onMinimize: l,
      onMaximize: d,
      onClose: p,
      extraActions: m,
      popup: C,
      children: v,
    } = o,
    _ = Gr(C);
  return (0, F.jsxs)("div", {
    className: g(
      "TitleBar",
      "title-area",
      s && "OSX",
      (_ || c) && "WindowFocus",
      e,
    ),
    style: t,
    children: [
      (0, F.jsx)("div", { className: "title-area-highlight" }),
      (0, F.jsx)("div", { className: "title-area-children", children: v }),
      !n &&
        (0, F.jsxs)(F.Fragment, {
          children: [
            m &&
              (0, F.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: m,
              }),
            (0, F.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !i && (0, F.jsx)(hs, { popup: C, onClose: p, bOSX: s }),
                !a && (0, F.jsx)(fs, { popup: C, onMaximize: d, bOSX: s }),
                !r && (0, F.jsx)(gs, { popup: C, onMinimize: l, bOSX: s }),
              ],
            }),
          ],
        }),
    ],
  });
}
var Lt = u(b());
function Xr(o) {
  let { Modal: e } = o,
    { name: t, modalProps: n, options: i } = e,
    r = re().ownerWindow,
    { popup: a, element: s } = Yn(
      t,
      {
        title: n.strTitle,
        html_class:
          "client_chat_frame fullheight ModalDialogPopup LegacyPopup " +
          (n.className || ""),
        body_class: "fullheight ModalDialogBody",
        popup_class: "fullheight popup_chat_frame",
        owner_window: void 0,
        replace_existing_popup: !0,
        target_browser: n.browserContext,
        availscreenwidth: r.screen.availWidth,
        availscreenheight: r.screen.availHeight,
        bModal: n.bHideMainWindowForPopouts,
      },
      {
        updateParamsBeforeShow: (p) => bs(p, n, i, r),
        onClose: () => n.fnOnClose && n.fnOnClose(),
      },
    ),
    c = Yr.useCallback(() => {
      n.bHideMainWindowForPopouts && a?.SteamClient.Window.BringToFront();
    }, [n.bHideMainWindowForPopouts, a]);
  vn(r, "click", c);
  let l = i?.bHideActions,
    d =
      typeof i?.nDragAreaHeight == "number"
        ? { height: i.nDragAreaHeight }
        : void 0;
  return s
    ? zr.createPortal(
        (0, Lt.jsx)(Or, {
          ownerWindow: a,
          children: (0, Lt.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: Wi,
            children: [
              (0, Lt.jsx)(Ur, {
                hideMin: !0,
                hideMax: !0,
                popup: a,
                hideActions: l,
                style: d,
              }),
              (0, Lt.jsx)(qr, {
                browserInfo: n.browserContext,
                bCenterPopupsOnWindow: i.bCenterOnWindow,
                children: e.element,
              }),
            ],
          }),
        }),
        s,
      )
    : null;
}
function bs(o, e, t, n) {
  let i,
    r,
    a = e.popupWidth || 500,
    s = e.popupHeight || 400,
    c;
  if (Ne.IN_CLIENT && n?.SteamClient?.Browser?.GetBrowserID)
    c = n.SteamClient.Browser.GetBrowserID();
  else {
    let l = n.screen;
    (i = (l.availWidth - a) / 2), (r = (l.availHeight - s) / 2);
    let d = l;
    typeof d.availLeft < "u" &&
      typeof d.availTop < "u" &&
      ((i += d.availLeft), (r += d.availTop));
  }
  return {
    ...o,
    dimensions: { width: a, height: s, left: i, top: r },
    center_on_window: t.bCenterOnWindow ? n : void 0,
    window_opener_id: c,
  };
}
var z = u(D()),
  Qr = u(vt());
var Xn = u(b());
function jr(o) {
  let { ModalManager: e } = o,
    [t, n] = z.useState(void 0),
    [i, r] = z.useState(!0),
    a = z.useRef(0),
    s = z.useCallback(() => {
      z.startTransition(() => {
        r(!0);
      });
    }, []);
  z.useEffect(() => e.RegisterMeasureModalCallback(s).Unregister, [e, s]),
    z.useLayoutEffect(() => {
      t ||
        z.startTransition(() => {
          n(e.TakeMeasureModalRequest()), r(!1);
        });
    }, [e, t, i]);
  let c = z.useCallback((l) => {
    a.current++,
      z.startTransition(() => {
        n((d) => (d === l ? void 0 : d));
      });
  }, []);
  return t
    ? (0, Xn.jsx)(Cs, { onMeasureComplete: c, request: t }, a.current)
    : null;
}
function Cs(o) {
  let [e, t] = z.useState(),
    n = re().ownerWindow;
  return (
    z.useLayoutEffect(() => {
      let i = n.document.body,
        r = n.document.createElement("div");
      return (
        (r.style.position = "absolute"),
        (r.style.visibility = "hidden"),
        i.appendChild(r),
        t(r),
        () => {
          i.removeChild(r);
        }
      );
    }, [n]),
    e ? Qr.createPortal((0, Xn.jsx)(vs, { ...o, elContainer: e }), e) : null
  );
}
function vs(o) {
  let { elContainer: e, onMeasureComplete: t, request: n } = o;
  return (
    z.useEffect(() => {
      let i = !1,
        r = (a) => {
          i || (n.fnResults(a), t(n), (i = !0));
        };
      return _s(e, n.promiseContentReady).then(r), () => r(void 0);
    }, [e, t, n]),
    (0, Xn.jsx)(se, { children: n.rctToMeasure })
  );
}
async function _s(o, e) {
  e && (await e);
  let t = document;
  Ne.IN_STEAMUI && t.fonts && (await t.fonts.ready);
  let n = o.getBoundingClientRect(),
    i = Math.ceil(n.height),
    r = Math.ceil(n.width);
  return { height: i, width: r };
}
var Bo = "kNiAxGG9vCI-";
var Jr = "_3G8oCr9ck-g-";
var N = u(b());
function Rs(o) {
  be.useEffect(() => {
    if (o)
      return (
        document.body.classList.add(Bo),
        () => document.body.classList.remove(Bo)
      );
  }, [o]);
}
function Ss(o) {
  let e = re().ownerWindow,
    t = _t(),
    n = be.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  be.useEffect(() => o.RegisterOverlay(t), [o, t]),
    be.useEffect(() => o.RegisterOnModalShownCallback(n).Unregister, [o, n]);
}
function Ps(o, e) {
  return si(
    (t) => {
      if (!t || !e) return;
      let n = t.ownerDocument.defaultView;
      return en.RegisterModalManager(o, n);
    },
    [o],
  );
}
function Zr(o) {
  let {
      ModalManager: e,
      bRegisterModalManager: t = !0,
      DialogWrapper: n,
      rctActiveContextMenus: i,
      bUseDialogElement: r = !0,
      style: a,
      ...s
    } = o,
    c = e.modals,
    l = c && !!c.length,
    d = e.active_modal;
  Rs(l), Ss(e);
  let p = Ps(e, t),
    m = null,
    C = !r;
  return (
    c && c.length
      ? (m = c.map((v) => {
          let _ = v == d,
            P = {
              key: v.key,
              active: _,
              rctActiveContextMenus: _ && r ? i : void 0,
            };
          return v instanceof ct
            ? (0, N.jsx)(Ms, { ...P, modal: v, Component: n ?? ws })
            : v instanceof lt
              ? (0, N.jsx)(xs, { ...P, modal: v, bUseDialogElement: r })
              : void 0;
        }))
      : ((C = !0), (a = { ...a, display: "none" })),
    (0, N.jsxs)(N.Fragment, {
      children: [
        (0, N.jsxs)(Vr, {
          children: [
            (0, N.jsxs)("div", {
              ...s,
              style: a,
              ref: p,
              className: g(s.className, "FullModalOverlay"),
              children: [
                (0, N.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                m,
              ],
            }),
            C && i,
          ],
        }),
        (0, N.jsx)(jr, { ModalManager: e }),
        (0, N.jsx)(Ts, { ModalManager: e }),
      ],
    })
  );
}
function xs(o) {
  let {
    modal: e,
    rctActiveContextMenus: t,
    active: n,
    bUseDialogElement: i,
  } = o;
  be.useEffect(() => {
    if (n)
      return (
        e.SetActive(n),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, n]);
  let r = (0, N.jsxs)(se, {
    children: [
      (0, N.jsx)("div", {
        className: g("ModalOverlayContent", n ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      t,
    ],
  });
  return i ? (0, N.jsx)($r, { active: n, children: r }) : r;
}
function Ms(o) {
  let { modal: e, active: t, rctActiveContextMenus: n, Component: i } = o,
    r = _t();
  return (
    Dt(e.ModalUpdatedCallback, r),
    (0, N.jsx)(se, {
      children: (0, N.jsxs)(i, {
        className: g("ModalOverlayContent", t ? "active" : "inactive"),
        active: t,
        modalKey: e.key,
        children: [n, e.element],
      }),
    })
  );
}
function ws(o) {
  let { className: e, active: t, children: n } = o;
  return (0, N.jsx)($r, {
    active: t,
    children: (0, N.jsx)(tr, {
      children: (0, N.jsx)("div", { className: e, tabIndex: -1, children: n }),
    }),
  });
}
function $r(o) {
  let { active: e, children: t } = o,
    n = be.useRef(null),
    [i, r] = be.useState(!1);
  return (
    be.useEffect(() => {
      let a = n.current;
      a && (e && !i ? (a.showModal(), r(!0)) : !e && i && a.close());
    }, [e, i]),
    (0, N.jsx)("dialog", {
      ref: n,
      className: Jr,
      onClose: () => r(!1),
      onCancel: (a) => a.preventDefault(),
      children: o.children,
    })
  );
}
function Ts(o) {
  let { ModalManager: e } = o,
    t = _t();
  return (
    Dt(e.LegacyPopupModalCountChangedCallbacks, t),
    (0, N.jsx)(N.Fragment, {
      children: e.legacy_popup_modals.map((n) =>
        (0, N.jsx)(Xr, { Modal: n }, n.key),
      ),
    })
  );
}
var dt = u(b()),
  Wo = de.createContext({}),
  qr = de.memo(function (e) {
    let {
        children: t,
        bRenderOverlayAtRoot: n,
        refModalManager: i,
        DialogWrapper: r,
        bUseDialogElement: a = !0,
        ContextMenuComponent: s = Br,
        refContextMenuManager: c,
        browserInfo: l,
        bUsePopups: d,
        bOnlyPopups: p,
        bCenterPopupsOnWindow: m,
        bRegisterManagersWithWindow: C = !0,
        ...v
      } = e,
      _ = de.useRef();
    _.current || (_.current = new tn());
    let P = (0, dt.jsx)(Zr, {
      ...v,
      DialogWrapper: r,
      ModalManager: _.current,
      bUseDialogElement: a,
      bRegisterModalManager: C,
      rctActiveContextMenus: (0, dt.jsx)(s, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (P = Kr.createPortal(P, document.body)),
      li(i, _.current),
      d !== void 0 && _.current?.SetUsePopups(d),
      m !== void 0 && _.current?.SetCenterPopupsOnWindow(m),
      p !== void 0 && _.current?.SetOnlyPopups(p),
      _.current.SetBrowserInfo(l);
    let I = de.useMemo(
      () => ({ ModalManager: _.current, DialogWrapper: r }),
      [r],
    );
    return (0, dt.jsx)(Wo.Provider, {
      value: I,
      children: (0, dt.jsxs)(Ir, {
        refContextMenuManager: c,
        bRegisterMenuManager: C,
        children: [(0, dt.jsx)(se, { children: P }), e.children],
      }),
    });
  });
function zn() {
  return de.useContext(Wo).ModalManager;
}
function Zp() {
  return de.useContext(Wo).DialogWrapper;
}
function Wr(o) {
  let e = zn();
  de.useEffect(() => {
    if (o) return en.RegisterModalManager(e, o);
  }, [o, e]);
}
var tn = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new ae();
    m_OnModalShownCallbacks = new ae();
    m_OnModalHiddenCallbacks = new ae();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new ae();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new ae();
    m_browserInfo;
    get ModalCountChangedCallbacks() {
      return this.m_OnModalCountChangedCallbacks;
    }
    get LegacyPopupModalCountChangedCallbacks() {
      return this.m_OnLegacyPopupModalCountChanged;
    }
    RegisterOnModalShownCallback(e) {
      return this.m_OnModalShownCallbacks.Register(e);
    }
    RegisterOnModalHiddenCallback(e) {
      return this.m_OnModalHiddenCallbacks.Register(e);
    }
    RegisterMeasureModalCallback(e) {
      return this.m_OnMeasureModal.Register(e);
    }
    TakeMeasureModalRequest() {
      if (this.m_rgMeasureModalRequests.length)
        return this.m_rgMeasureModalRequests.shift();
    }
    RegisterOverlay(e) {
      Y(
        this.m_cMountedOverlays == 0,
        "Duplicate modal DialogOverlay; modals will appear in both",
      ),
        this.m_cMountedOverlays++;
      let t = this.m_OnModalCountChangedCallbacks.Register(e);
      return () => {
        this.m_cMountedOverlays--, t.Unregister();
      };
    }
    OnModalCountChanged(e) {
      e == "show" &&
        this.m_cMountedOverlays == 0 &&
        window.setTimeout(() => {
          Y(
            this.m_cMountedOverlays > 0,
            "Modal was shown but ModalManager has no associated DialogOverlay",
          );
        }, 50),
        this.m_OnModalCountChangedCallbacks.Dispatch(this.m_rgModals.length),
        e == "show"
          ? this.m_OnModalShownCallbacks.Dispatch(this.m_rgModals.length)
          : e == "hide" &&
            this.m_OnModalHiddenCallbacks.Dispatch(this.m_rgModals.length);
    }
    get modals() {
      return this.m_rgModals;
    }
    get active_modal() {
      if (this.m_rgModals.length)
        return this.m_rgModals[this.m_rgModals.length - 1];
    }
    ShowModal(e) {
      return this.ShowModalInternal(e);
    }
    RemoveModal(e) {
      let t = this.m_rgModals.indexOf(e);
      t != -1 && this.m_rgModals.splice(t, 1), this.OnModalCountChanged("hide");
    }
    ShowModalInternal(e) {
      Y(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let t = new ct(e);
      this.m_rgModals.push(t);
      let n = {
        Close: () => {
          this.RemoveModal(t);
        },
        Update: (i) => {
          t.UpdateModal(i);
        },
      };
      return this.OnModalCountChanged("show"), n;
    }
    ShowPortalModal() {
      Y(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let e = new lt();
      return (
        this.m_rgModals.push(e),
        this.OnModalCountChanged("show"),
        {
          key: e.key,
          Close: () => {
            this.RemoveModal(e);
          },
          OnElementReadyCallbacks: e.OnElementReadyCallbacks,
          OnModalActiveCallbacks: e.OnModalActiveCallbacks,
        }
      );
    }
    SetUsePopups(e) {
      this.m_bUsePopups = e;
    }
    BUsePopups() {
      return this.m_bUsePopups || this.m_bOnlyPopups;
    }
    SetOnlyPopups(e) {
      this.m_bOnlyPopups = e;
    }
    BOnlyPopups() {
      return this.m_bOnlyPopups;
    }
    SetBrowserInfo(e) {
      this.m_browserInfo = e;
    }
    GetBrowserInfo() {
      return this.m_browserInfo;
    }
    SetCenterPopupsOnWindow(e) {
      this.m_bCenterPopupsOnWindow = e;
    }
    BCenterPopupsOnWindow() {
      return this.m_bCenterPopupsOnWindow;
    }
    RequestModalMeasure(e, t, n) {
      this.m_rgMeasureModalRequests.push({
        rctToMeasure: e,
        fnResults: t,
        promiseContentReady: n,
      }),
        this.m_OnMeasureModal.Dispatch();
    }
    get legacy_popup_modals() {
      return this.m_rgLegacyPopupModals;
    }
    ShowLegacyPopupModal(e, t, n, i) {
      let r = () => {
          let s = this.m_rgLegacyPopupModals.indexOf(a);
          s != -1 && this.m_rgLegacyPopupModals.splice(s, 1),
            this.m_OnLegacyPopupModalCountChanged.Dispatch(
              this.m_rgLegacyPopupModals.length,
            ),
            n.fnOnClose && n.fnOnClose();
        },
        a = new Un(
          e,
          t,
          { ...n, fnOnClose: r },
          { bCenterOnWindow: this.m_bCenterPopupsOnWindow, ...i },
        );
      return (
        this.m_rgLegacyPopupModals.push(a),
        this.m_OnLegacyPopupModalCountChanged.Dispatch(
          this.m_rgLegacyPopupModals.length,
        ),
        {
          Close: r,
          Update: (s) => {
            a.UpdateModal(s);
          },
        }
      );
    }
  },
  Vo = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let t = this.m_mapModalManager.get(e);
      return (
        t ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (t = new tn()),
          this.m_mapModalManager.set(e, t)),
        t
      );
    }
    RegisterModalManager(e, t) {
      Y(
        !this.m_mapModalManager.has(t) || t == window,
        `Stomping CModalManager for ${t.document.title}!`,
      );
      let n = this.m_mapModalManager.get(t);
      return (
        this.m_mapModalManager.set(t, e),
        () => {
          n
            ? this.m_mapModalManager.set(t, n)
            : this.m_mapModalManager.delete(t);
        }
      );
    }
    UnregisterModalManager(e) {
      this.m_mapModalManager.delete(e);
    }
  },
  en = new Vo();
function qn(o) {
  return en.GetModalManager(o);
}
var Qn = u(D());
var ue = u(b()),
  Es = Qn.createContext({}),
  Ls = () => Qn.useContext(Es);
function nn(o) {
  let t = Ls().ModalPosition ?? Os;
  return (0, ue.jsx)(t, { ...o });
}
function Os(o) {
  let e = {},
    t;
  o.onEscKeypress &&
    ((e.tabIndex = 0),
    (e.onKeyDown = (a) => {
      a.keyCode == 27 && o.onEscKeypress();
    }),
    (e.onMouseDown = (a) => {
      a.currentTarget === a.target &&
        !o.bDisableBackgroundDismiss &&
        o.onEscKeypress();
    }),
    (t = (a) => {
      a && (_n(a, a.ownerDocument.activeElement) || a.focus());
    }));
  let n = ["ModalPosition"];
  o.className && n.push(o.className),
    o.bDestructiveWarning && n.push("Destructive");
  let i = o.renderContent || ((a) => (0, ue.jsx)("div", { ...a })),
    r = (0, ue.jsxs)(ue.Fragment, {
      children: [
        !o.hideTopBar &&
          (0, ue.jsx)("div", { className: "ModalPosition_TopBar" }),
        o.onEscKeypress &&
          !o.bHideCloseIcon &&
          (0, ue.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, ue.jsx)("div", {
              className: "closeButton",
              onClick: (a) => {
                a.stopPropagation(), o.onEscKeypress();
              },
              children: (0, ue.jsx)(St, {}),
            }),
          }),
        (0, ue.jsx)(se, { children: o.children }),
      ],
    });
  return (0, ue.jsx)("div", {
    className: n.join(" "),
    ...e,
    ref: t,
    children: i({ className: "ModalPosition_Content", children: r }),
  });
}
var Ho = u(b());
async function Ns(o, e, t) {
  let n = qn(e),
    i = t?.bForcePopOut || na(n);
  Y(
    !(i && t?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let r = !i && t?.bNeverPopOut === !0,
    a = na(n) || (!r && ia(n, e)),
    s = i && t?.popupWidth && t?.popupHeight,
    c;
  if (a && !s) {
    let d = Go.cloneElement(o, { closeModal: () => {} });
    c = await Is(n, d, t?.promiseRenderComplete);
  }
  let l = c && c.height / e.innerHeight < 0.9 && c.width / e.innerWidth < 0.8;
  if (r || (!i && l)) return ta(o, e, void 0, { fnOnClose: t?.fnOnClose });
  {
    let d = {
        strTitle: t?.strTitle || M("#Dialog_DefaultWindowTitle"),
        fnOnClose: t?.fnOnClose,
        popupWidth: t?.popupWidth || c?.width,
        popupHeight: t?.popupHeight || c?.height,
        bHideMainWindowForPopouts: t?.bHideMainWindowForPopouts,
        className: t?.className,
      },
      p = { bHideActions: t?.bHideActionIcons },
      m = t?.browserContext || e.browserInfo;
    return ta(o, e, d.strTitle, d, m, p, n);
  }
}
async function oa(o, e, t) {
  return Ns(o, e, { bHideMainWindowForPopouts: !0, ...t });
}
function ta(o, e, t, n, i, r, a) {
  let s,
    c,
    l = o.props.closeModal,
    d = () => {
      c && c.Close(), l && l(), n?.fnOnClose && n.fnOnClose();
    },
    p = () => {
      s && s.Close(), d();
    },
    m = Go.cloneElement(o, { closeModal: p });
  if (((a = a || qn(e)), ia(a, e) && n && t)) {
    if (n.bHideMainWindowForPopouts) {
      let v = (0, Ho.jsx)(nn, {
        className: "Hidden",
        onEscKeypress: m.props.bDisableBackgroundDismiss ? void 0 : p,
        children: (0, Ho.jsx)("div", {}),
      });
      c = a.ShowModal(v);
    }
    let C = { ...n, fnOnClose: d, browserContext: i };
    s = a.ShowLegacyPopupModal(t, m, C, r);
  } else s = a.ShowModal(m);
  return s;
}
function ia(o, e) {
  return (o = o || qn(e || window)), Ne.USE_POPUPS && o.BUsePopups();
}
function na(o) {
  return o.BOnlyPopups && o.BOnlyPopups();
}
async function Is(o, e, t) {
  return new Promise((n, i) => {
    o.RequestModalMeasure(e, n, t);
  });
}
var on = u(D());
var Ot = u(b());
function As(o) {
  let {
      className: e,
      modalClassName: t,
      onCancel: n,
      closeModal: i,
      bOKDisabled: r,
      onOK: a,
      bAllowFullSize: s,
      bDestructiveWarning: c,
      bDisableBackgroundDismiss: l,
      bHideCloseIcon: d,
      children: p,
      "aria-labelledby": m,
      ...C
    } = o,
    v = Rn();
  Y(
    i || n,
    `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${e} ${t}`,
  );
  let _ = on.useCallback(() => {
      (n && n()) || (i && i());
    }, [n, i]),
    P = on.useCallback(async () => {
      r || (a && (await a()), i && i());
    }, [r, a, i]);
  return (0, Ot.jsx)(nn, {
    onEscKeypress: _,
    className: t,
    bDestructiveWarning: c,
    bDisableBackgroundDismiss: l,
    bHideCloseIcon: d,
    children: (0, Ot.jsx)(ur, {
      role: "dialog",
      "aria-labelledby": m || void 0,
      ...C,
      classNameContent: g(
        "GenericDialogBase",
        "GenericConfirmDialog",
        s && "DialogContentFullSize",
        e,
      ),
      onSubmit: P,
      bCenterVertically: !v,
      children: p,
    }),
  });
}
function ra(o) {
  let { title: e, children: t, ...n } = o,
    i = on.useId();
  return (0, Ot.jsxs)(As, {
    "aria-labelledby": e ? i : "",
    ...n,
    children: [e && (0, Ot.jsx)(On, { id: i, children: e }), t],
  });
}
var Z = u(b());
function ys(o) {
  function e(_) {
    return () => {
      _ && _(), o.closeModal && o.closeModal();
    };
  }
  let {
      strTitle: t,
      strDescription: n,
      strOKButtonText: i,
      strCancelButtonText: r,
      onGamepadCancel: a,
      strMiddleButtonText: s,
      onMiddleButton: c,
      bAlertDialog: l,
      children: d,
      ...p
    } = o,
    m = i || M("#Button_Close"),
    C = (0, Z.jsx)(mr, {
      bOKDisabled: o.bOKDisabled,
      bCancelDisabled: o.bCancelDisabled,
      strOKText: i,
      onCancel: e(o.onCancel),
      strCancelText: r,
    });
  l
    ? (C = (0, Z.jsx)(Ut, { children: m }))
    : c &&
      (C = (0, Z.jsx)(fr, {
        bOKDisabled: o.bOKDisabled,
        bCancelDisabled: o.bCancelDisabled,
        strOKText: i,
        onCancel: e(o.onCancel),
        strCancelText: r,
        onUpdate: () => {
          c(), o.closeModal && o.closeModal();
        },
        strUpdateText: s,
        bUpdateDisabled: o.bMiddleDisabled,
      }));
  let v = Uo.useId();
  return (0, Z.jsx)(ra, {
    ...p,
    title: t || (0, Z.jsx)(Z.Fragment, { children: " " }),
    "aria-describedby": v,
    children: (0, Z.jsxs)(dr, {
      onCancelButton: e(a || o.onCancel),
      children: [
        (0, Z.jsxs)(cr, {
          children: [
            (0, Z.jsx)("div", {
              id: v,
              style: { display: "contents" },
              children: n,
            }),
            d,
          ],
        }),
        (0, Z.jsx)(lr, { children: C }),
      ],
    }),
  });
}
function Fs(o) {
  let e = {
    onOK: () => {},
    onCancel: () => {},
    strDescription: (0, Z.jsxs)("span", {
      style: { whiteSpace: "pre-line" },
      children: [" ", o.strDescription, " "],
    }),
    bAlertDialog: !0,
    ...o,
  };
  return (0, Z.jsx)(ys, { ...e });
}
function aa(o, e, t) {
  oa((0, Z.jsx)(Fs, { strTitle: o, strDescription: e }), t);
}
var X = u(b());
function sa(o) {
  return o ? o + "_Label" : void 0;
}
function la(o) {
  return o ? o + "_Description" : void 0;
}
function Ve(o, e) {
  let { label: t, description: n } = e;
  return {
    "aria-labelledby": t ? sa(o) : void 0,
    "aria-describedby": n ? la(o) : void 0,
  };
}
var He = te.forwardRef(function (e, t) {
  let {
      accessibilityId: n,
      label: i,
      description: r,
      icon: a,
      children: s,
      childrenLayout: c,
      inlineWrap: l,
      childrenContainerWidth: d,
      spacingBetweenLabelAndChild: p,
      padding: m,
      disabled: C,
      bottomSeparator: v,
      className: _,
      highlightOnFocus: P,
      indentLevel: I,
      verticalAlignment: A,
      iconLocation: k,
      tooltip: U,
      explainer: B,
      explainerTitle: G,
      ...ne
    } = e,
    j = Rn(),
    W = c ?? "inline",
    Ke = k ?? "front",
    Kn = Ke == "front" && !!a,
    eo = Ke == "before-children" && !!a,
    dn = W == "inline" && !!s,
    un = W == "below" && !!s,
    to = l ?? (j ? "shift-children-below" : "keep-inline"),
    Ft = !!(ne.onClick || ne.onActivate || ne.focusable),
    ft = (a != null && Kn) || i != null || (dn && s != null),
    gt = d ?? "min",
    pn = p ?? "standard",
    mn = m ?? "standard",
    fn = v ?? "standard",
    no = P ?? !0,
    gn = I ?? 0,
    hn = A ?? "center",
    et = ks(G ?? i, B),
    tt = te.useRef(),
    ht = ve(tt, e.navRef),
    oo = te.useCallback(
      (bt) => {
        tt.current && (tt.current?.TakeFocus(), bt.preventDefault());
      },
      [tt],
    );
  return (0, X.jsxs)(O, {
    focusable: Ft,
    noFocusRing: !0,
    scrollIntoViewWhenChildFocused: !0,
    onActivate: ne.onClick ? (bt) => ne.onClick?.(bt) : void 0,
    ref: t,
    onMouseDown: Ft ? void 0 : oo,
    ...ne,
    ...et,
    navRef: ht,
    className: g(
      _,
      R.Field,
      C && R.Disabled,
      ft && R.WithFirstRow,
      dn && R.WithChildrenInline,
      un && R.WithChildrenBelow,
      hn == "center" && R.VerticalAlignCenter,
      to == "shift-children-below" && R.InlineWrapShiftsChildrenBelow,
      !!r && R.WithDescription,
      fn == "standard" && R.WithBottomSeparatorStandard,
      fn == "thick" && R.WithBottomSeparatorThick,
      gt == "fixed" && R.ChildrenWidthFixed,
      gt == "max" && R.ChildrenWidthGrow,
      pn == "standard" && R.ExtraPaddingOnChildrenBelow,
      mn == "standard" && R.StandardPadding,
      mn == "compact" && R.CompactPadding,
      Ft && R.Clickable,
      no && R.HighlightOnFocus,
    ),
    style: { "--indent-level": gn },
    children: [
      ft &&
        (0, X.jsxs)("div", {
          className: R.FieldLabelRow,
          children: [
            (0, X.jsxs)("div", {
              className: R.FieldLabel,
              id: sa(n),
              children: [
                Kn &&
                  (0, X.jsx)("div", {
                    className: g(R.FieldIcon, R.Front),
                    children: a,
                  }),
                i,
                U && (0, X.jsx)(Fe, { tooltip: U }),
              ],
            }),
            dn &&
              (0, X.jsxs)("div", {
                className: R.FieldChildrenWithIcon,
                children: [
                  eo &&
                    (0, X.jsx)("div", {
                      className: g(R.FieldIcon, R.BeforeChildren),
                      children: a,
                    }),
                  (0, X.jsx)("div", {
                    className: R.FieldChildrenInner,
                    children: s,
                  }),
                ],
              }),
          ],
        }),
      un &&
        (0, X.jsxs)("div", {
          className: R.FieldChildrenWithIcon,
          children: [
            eo &&
              (0, X.jsx)("div", {
                className: g(R.FieldIcon, R.BeforeChildren),
                children: a,
              }),
            (0, X.jsx)("div", { className: R.FieldChildrenInner, children: s }),
          ],
        }),
      r &&
        (0, X.jsx)("div", {
          className: R.FieldDescription,
          id: la(n),
          children: r,
        }),
    ],
  });
});
function ks(o, e) {
  let t = re(),
    n = te.useCallback(() => {
      aa(o, e, t.ownerWindow ?? window);
    }, [t, o, e]);
  if (e == null) return {};
  let i = M("#Field_MoreInfo_Action");
  return { onOptionsButton: n, onOptionsActionDescription: i };
}
function Bs(o, e, t = ["label", "button"]) {
  let n = te.useId(),
    i = Ve(o, e),
    r = { id: n, "aria-labelledby": "" };
  return (
    (r["aria-labelledby"] = t
      .map((a) => (a == "button" ? n : i["aria-labelledby"]))
      .join(" ")),
    (r["aria-describedby"] = i["aria-describedby"]),
    r
  );
}
var Vm = te.forwardRef(function (e, t) {
    let {
        label: n,
        description: i,
        explainer: r,
        icon: a,
        layout: s,
        disabled: c,
        onActivate: l,
        indentLevel: d,
        bottomSeparator: p,
        highlightOnFocus: m,
        childrenContainerWidth: C,
        padding: v,
        inlineWrap: _,
        fieldClassName: P,
        fieldChildren: I,
        accessibilityNameOrder: A,
        ...k
      } = e,
      { refWithValue: U, refForElement: B } = so(t),
      G = te.useId();
    return (0, X.jsxs)(He, {
      accessibilityId: G,
      label: n,
      indentLevel: d,
      description: i,
      icon: a,
      bottomSeparator: p,
      highlightOnFocus: m,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: C ?? "min",
      onMouseDown: (j) => {
        U.current?.focus(), j.preventDefault();
      },
      padding: v,
      inlineWrap: _,
      explainer: r,
      className: P,
      disabled: c,
      onActivate: c ? l : void 0,
      children: [(0, X.jsx)(Ws, { accessibilityId: G, ...e, ref: B }), I],
    });
  }),
  Ws = te.forwardRef(function (e, t) {
    let {
        accessibilityId: n,
        label: i,
        description: r,
        explainer: a,
        icon: s,
        layout: c,
        disabled: l,
        onActivate: d,
        indentLevel: p,
        bottomSeparator: m,
        highlightOnFocus: C,
        childrenContainerWidth: v,
        padding: _,
        inlineWrap: P,
        fieldClassName: I,
        fieldChildren: A,
        accessibilityNameOrder: k,
        ...U
      } = e,
      B = Bs(n, e, k);
    return (0, X.jsx)(ge, { ...U, ...B, disabled: l, ref: t });
  }),
  ca = te.forwardRef(function (e, t) {
    let {
        label: n,
        description: i,
        icon: r,
        layout: a,
        bottomSeparator: s,
        highlightOnFocus: c,
        ...l
      } = e,
      { refWithValue: d, refForElement: p } = so(t),
      m = te.useId();
    return (0, X.jsx)(He, {
      accessibilityId: m,
      label: n,
      description: i,
      icon: r,
      bottomSeparator: s,
      highlightOnFocus: c,
      childrenLayout: a ?? "inline",
      childrenContainerWidth: "fixed",
      onMouseDown: (v) => {
        d.current?.element?.focus(), v.preventDefault();
      },
      children: (0, X.jsx)(rt, { ...Ve(m, e), ...l, ref: p }),
    });
  });
var _a = u(D());
var H = u(D());
var pe = u(D());
var Yo = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function zo(o, e) {
  return o.classList
    ? !!e && o.classList.contains(e)
    : (" " + (o.className.baseVal || o.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function Xo(o, e) {
  o.classList
    ? o.classList.add(e)
    : zo(o, e) ||
      (typeof o.className == "string"
        ? (o.className = o.className + " " + e)
        : o.setAttribute(
            "class",
            ((o.className && o.className.baseVal) || "") + " " + e,
          ));
}
function da(o, e) {
  return o
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function qo(o, e) {
  o.classList
    ? o.classList.remove(e)
    : typeof o.className == "string"
      ? (o.className = da(o.className, e))
      : o.setAttribute(
          "class",
          da((o.className && o.className.baseVal) || "", e),
        );
}
var Zo = u(D());
var rn = u(D()),
  an = u(vt());
var Qo = { disabled: !1 };
var ua = u(D()),
  Nt = ua.default.createContext(null);
var jn = function (e) {
  return e.scrollTop;
};
var sn = "unmounted",
  ut = "exited",
  pt = "entering",
  At = "entered",
  jo = "exiting",
  Ge = (function (o) {
    Mt(e, o);
    function e(n, i) {
      var r;
      r = o.call(this, n, i) || this;
      var a = i,
        s = a && !a.isMounting ? n.enter : n.appear,
        c;
      return (
        (r.appearStatus = null),
        n.in
          ? s
            ? ((c = ut), (r.appearStatus = pt))
            : (c = At)
          : n.unmountOnExit || n.mountOnEnter
            ? (c = sn)
            : (c = ut),
        (r.state = { status: c }),
        (r.nextCallback = null),
        r
      );
    }
    e.getDerivedStateFromProps = function (i, r) {
      var a = i.in;
      return a && r.status === sn ? { status: ut } : null;
    };
    var t = e.prototype;
    return (
      (t.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (t.componentDidUpdate = function (i) {
        var r = null;
        if (i !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== pt && a !== At && (r = pt)
            : (a === pt || a === At) && (r = jo);
        }
        this.updateStatus(!1, r);
      }),
      (t.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (t.getTimeouts = function () {
        var i = this.props.timeout,
          r,
          a,
          s;
        return (
          (r = a = s = i),
          i != null &&
            typeof i != "number" &&
            ((r = i.exit),
            (a = i.enter),
            (s = i.appear !== void 0 ? i.appear : a)),
          { exit: r, enter: a, appear: s }
        );
      }),
      (t.updateStatus = function (i, r) {
        if ((i === void 0 && (i = !1), r !== null))
          if ((this.cancelNextCallback(), r === pt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : an.default.findDOMNode(this);
              a && jn(a);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === ut &&
            this.setState({ status: sn });
      }),
      (t.performEnter = function (i) {
        var r = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : i,
          c = this.props.nodeRef ? [s] : [an.default.findDOMNode(this), s],
          l = c[0],
          d = c[1],
          p = this.getTimeouts(),
          m = s ? p.appear : p.enter;
        if ((!i && !a) || Qo.disabled) {
          this.safeSetState({ status: At }, function () {
            r.props.onEntered(l);
          });
          return;
        }
        this.props.onEnter(l, d),
          this.safeSetState({ status: pt }, function () {
            r.props.onEntering(l, d),
              r.onTransitionEnd(m, function () {
                r.safeSetState({ status: At }, function () {
                  r.props.onEntered(l, d);
                });
              });
          });
      }),
      (t.performExit = function () {
        var i = this,
          r = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : an.default.findDOMNode(this);
        if (!r || Qo.disabled) {
          this.safeSetState({ status: ut }, function () {
            i.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: jo }, function () {
            i.props.onExiting(s),
              i.onTransitionEnd(a.exit, function () {
                i.safeSetState({ status: ut }, function () {
                  i.props.onExited(s);
                });
              });
          });
      }),
      (t.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (t.safeSetState = function (i, r) {
        (r = this.setNextCallback(r)), this.setState(i, r);
      }),
      (t.setNextCallback = function (i) {
        var r = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (r.nextCallback = null), i(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (t.onTransitionEnd = function (i, r) {
        this.setNextCallback(r);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : an.default.findDOMNode(this),
          s = i == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var c = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            l = c[0],
            d = c[1];
          this.props.addEndListener(l, d);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (t.render = function () {
        var i = this.state.status;
        if (i === sn) return null;
        var r = this.props,
          a = r.children,
          s = r.in,
          c = r.mountOnEnter,
          l = r.unmountOnExit,
          d = r.appear,
          p = r.enter,
          m = r.exit,
          C = r.timeout,
          v = r.addEndListener,
          _ = r.onEnter,
          P = r.onEntering,
          I = r.onEntered,
          A = r.onExit,
          k = r.onExiting,
          U = r.onExited,
          B = r.nodeRef,
          G = xt(r, [
            "children",
            "in",
            "mountOnEnter",
            "unmountOnExit",
            "appear",
            "enter",
            "exit",
            "timeout",
            "addEndListener",
            "onEnter",
            "onEntering",
            "onEntered",
            "onExit",
            "onExiting",
            "onExited",
            "nodeRef",
          ]);
        return rn.default.createElement(
          Nt.Provider,
          { value: null },
          typeof a == "function"
            ? a(i, G)
            : rn.default.cloneElement(rn.default.Children.only(a), G),
        );
      }),
      e
    );
  })(rn.default.Component);
Ge.contextType = Nt;
Ge.propTypes = {};
function It() {}
Ge.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: It,
  onEntering: It,
  onEntered: It,
  onExit: It,
  onExiting: It,
  onExited: It,
};
Ge.UNMOUNTED = sn;
Ge.EXITED = ut;
Ge.ENTERING = pt;
Ge.ENTERED = At;
Ge.EXITING = jo;
var pa = Ge;
var Vs = function (e, t) {
    return (
      e &&
      t &&
      t.split(" ").forEach(function (n) {
        return Xo(e, n);
      })
    );
  },
  Jo = function (e, t) {
    return (
      e &&
      t &&
      t.split(" ").forEach(function (n) {
        return qo(e, n);
      })
    );
  },
  $o = (function (o) {
    Mt(e, o);
    function e() {
      for (var n, i = arguments.length, r = new Array(i), a = 0; a < i; a++)
        r[a] = arguments[a];
      return (
        (n = o.call.apply(o, [this].concat(r)) || this),
        (n.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (n.onEnter = function (s, c) {
          var l = n.resolveArguments(s, c),
            d = l[0],
            p = l[1];
          n.removeClasses(d, "exit"),
            n.addClass(d, p ? "appear" : "enter", "base"),
            n.props.onEnter && n.props.onEnter(s, c);
        }),
        (n.onEntering = function (s, c) {
          var l = n.resolveArguments(s, c),
            d = l[0],
            p = l[1],
            m = p ? "appear" : "enter";
          n.addClass(d, m, "active"),
            n.props.onEntering && n.props.onEntering(s, c);
        }),
        (n.onEntered = function (s, c) {
          var l = n.resolveArguments(s, c),
            d = l[0],
            p = l[1],
            m = p ? "appear" : "enter";
          n.removeClasses(d, m),
            n.addClass(d, m, "done"),
            n.props.onEntered && n.props.onEntered(s, c);
        }),
        (n.onExit = function (s) {
          var c = n.resolveArguments(s),
            l = c[0];
          n.removeClasses(l, "appear"),
            n.removeClasses(l, "enter"),
            n.addClass(l, "exit", "base"),
            n.props.onExit && n.props.onExit(s);
        }),
        (n.onExiting = function (s) {
          var c = n.resolveArguments(s),
            l = c[0];
          n.addClass(l, "exit", "active"),
            n.props.onExiting && n.props.onExiting(s);
        }),
        (n.onExited = function (s) {
          var c = n.resolveArguments(s),
            l = c[0];
          n.removeClasses(l, "exit"),
            n.addClass(l, "exit", "done"),
            n.props.onExited && n.props.onExited(s);
        }),
        (n.resolveArguments = function (s, c) {
          return n.props.nodeRef ? [n.props.nodeRef.current, s] : [s, c];
        }),
        (n.getClassNames = function (s) {
          var c = n.props.classNames,
            l = typeof c == "string",
            d = l && c ? c + "-" : "",
            p = l ? "" + d + s : c[s],
            m = l ? p + "-active" : c[s + "Active"],
            C = l ? p + "-done" : c[s + "Done"];
          return { baseClassName: p, activeClassName: m, doneClassName: C };
        }),
        n
      );
    }
    var t = e.prototype;
    return (
      (t.addClass = function (i, r, a) {
        var s = this.getClassNames(r)[a + "ClassName"],
          c = this.getClassNames("enter"),
          l = c.doneClassName;
        r === "appear" && a === "done" && l && (s += " " + l),
          a === "active" && i && jn(i),
          s && ((this.appliedClasses[r][a] = s), Vs(i, s));
      }),
      (t.removeClasses = function (i, r) {
        var a = this.appliedClasses[r],
          s = a.base,
          c = a.active,
          l = a.done;
        (this.appliedClasses[r] = {}),
          s && Jo(i, s),
          c && Jo(i, c),
          l && Jo(i, l);
      }),
      (t.render = function () {
        var i = this.props,
          r = i.classNames,
          a = xt(i, ["classNames"]);
        return Zo.default.createElement(
          pa,
          Sn({}, a, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      e
    );
  })(Zo.default.Component);
$o.defaultProps = { classNames: "" };
$o.propTypes = {};
var Ko = $o;
function ma(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return o;
}
var ln = u(D());
var Ce = u(D());
function Jn(o, e) {
  var t = function (r) {
      return e && (0, Ce.isValidElement)(r) ? e(r) : r;
    },
    n = Object.create(null);
  return (
    o &&
      Ce.Children.map(o, function (i) {
        return i;
      }).forEach(function (i) {
        n[i.key] = t(i);
      }),
    n
  );
}
function Hs(o, e) {
  (o = o || {}), (e = e || {});
  function t(d) {
    return d in e ? e[d] : o[d];
  }
  var n = Object.create(null),
    i = [];
  for (var r in o) r in e ? i.length && ((n[r] = i), (i = [])) : i.push(r);
  var a,
    s = {};
  for (var c in e) {
    if (n[c])
      for (a = 0; a < n[c].length; a++) {
        var l = n[c][a];
        s[n[c][a]] = t(l);
      }
    s[c] = t(c);
  }
  for (a = 0; a < i.length; a++) s[i[a]] = t(i[a]);
  return s;
}
function mt(o, e, t) {
  return t[e] != null ? t[e] : o.props[e];
}
function fa(o, e) {
  return Jn(o.children, function (t) {
    return (0, Ce.cloneElement)(t, {
      onExited: e.bind(null, t),
      in: !0,
      appear: mt(t, "appear", o),
      enter: mt(t, "enter", o),
      exit: mt(t, "exit", o),
    });
  });
}
function ga(o, e, t) {
  var n = Jn(o.children),
    i = Hs(e, n);
  return (
    Object.keys(i).forEach(function (r) {
      var a = i[r];
      if ((0, Ce.isValidElement)(a)) {
        var s = r in e,
          c = r in n,
          l = e[r],
          d = (0, Ce.isValidElement)(l) && !l.props.in;
        c && (!s || d)
          ? (i[r] = (0, Ce.cloneElement)(a, {
              onExited: t.bind(null, a),
              in: !0,
              exit: mt(a, "exit", o),
              enter: mt(a, "enter", o),
            }))
          : !c && s && !d
            ? (i[r] = (0, Ce.cloneElement)(a, { in: !1 }))
            : c &&
              s &&
              (0, Ce.isValidElement)(l) &&
              (i[r] = (0, Ce.cloneElement)(a, {
                onExited: t.bind(null, a),
                in: l.props.in,
                exit: mt(a, "exit", o),
                enter: mt(a, "enter", o),
              }));
      }
    }),
    i
  );
}
var Gs =
    Object.values ||
    function (o) {
      return Object.keys(o).map(function (e) {
        return o[e];
      });
    },
  Us = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  ei = (function (o) {
    Mt(e, o);
    function e(n, i) {
      var r;
      r = o.call(this, n, i) || this;
      var a = r.handleExited.bind(ma(r));
      return (
        (r.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        r
      );
    }
    var t = e.prototype;
    return (
      (t.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (t.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (e.getDerivedStateFromProps = function (i, r) {
        var a = r.children,
          s = r.handleExited,
          c = r.firstRender;
        return { children: c ? fa(i, s) : ga(i, a, s), firstRender: !1 };
      }),
      (t.handleExited = function (i, r) {
        var a = Jn(this.props.children);
        i.key in a ||
          (i.props.onExited && i.props.onExited(r),
          this.mounted &&
            this.setState(function (s) {
              var c = Sn({}, s.children);
              return delete c[i.key], { children: c };
            }));
      }),
      (t.render = function () {
        var i = this.props,
          r = i.component,
          a = i.childFactory,
          s = xt(i, ["component", "childFactory"]),
          c = this.state.contextValue,
          l = Gs(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          r === null
            ? ln.default.createElement(Nt.Provider, { value: c }, l)
            : ln.default.createElement(
                Nt.Provider,
                { value: c },
                ln.default.createElement(r, s, l),
              )
        );
      }),
      e
    );
  })(ln.default.Component);
ei.propTypes = {};
ei.defaultProps = Us;
var ti = ei;
var yt = u(b());
function ha(o) {
  let {
      childrenKey: e,
      childrenClasses: t,
      children: n,
      directionClass: i,
      animate: r = !0,
    } = o,
    a = g(Yo.TransitionGroup, i);
  return (0, yt.jsx)(ti, {
    className: a,
    appear: !1,
    enter: r,
    exit: r,
    children: (0, yt.jsx)(Ys, { childrenClasses: t, children: n }, e),
  });
}
function Ys(o) {
  let { sizeClass: e, children: t, childrenClasses: n, navKey: i, ...r } = o,
    [a, s, c, l] = zs(),
    d = pe.useRef(!0),
    p = pe.useCallback(() => d.current, [d]),
    m = pe.useCallback(() => {
      (d.current = !0), c();
    }, [c]),
    C = pe.useCallback(() => {
      (d.current = !1), l();
    }, [l]),
    v = 1e4,
    _ = o.childrenClasses,
    P = {
      enter: _.enterStart,
      enterActive: _.enterEnd,
      exit: _.exitStart,
      exitActive: _.exitEnd,
    };
  return a.current && !a.current.ownerDocument.defaultView
    ? null
    : (0, yt.jsx)(Ko, {
        nodeRef: a,
        classNames: P,
        in: !0,
        timeout: v,
        addEndListener: s,
        onEntering: m,
        onExiting: C,
        ...r,
        children: (0, yt.jsx)("div", {
          ref: a,
          className: g(Yo.ContentWrapper, e, _.base),
          children: (0, yt.jsx)(O, {
            className: e,
            fnCanTakeFocus: p,
            navKey: i,
            children: o.children,
          }),
        }),
      });
}
function zs() {
  let o = pe.useRef(null),
    e = pe.useRef();
  pe.useLayoutEffect(() => {
    let r = o.current;
    if (!r || e.current) return;
    e.current = {
      element: r,
      activeProps: new Set(),
      bExiting: !1,
      fnDone: null,
    };
    let a = e.current,
      s = (l) => {
        l.target == r && a.activeProps.add(l.propertyName);
      };
    r.addEventListener("transitionrun", s, !1);
    let c = (l) => {
      l.target == r &&
        (a.activeProps.delete(l.propertyName),
        a.fnDone && a.activeProps.size == 0 && a.bExiting && a.fnDone());
    };
    r.addEventListener("transitionend", c, !1),
      r.addEventListener("transitioncancel", c, !1);
  }, []);
  let t = pe.useCallback(
      (r) => {
        if (!e.current) {
          r();
          return;
        }
        e.current.fnDone = r;
      },
      [e],
    ),
    n = pe.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    i = pe.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [o, t, n, i];
}
function ba(o, e) {
  return {
    base: e,
    enterStart: o.Enter,
    enterEnd: o.EnterActive,
    exitStart: o.Exit,
    exitEnd: o.ExitActive,
  };
}
function Ca(o, e) {
  return e == 1
    ? o.Left
    : e == 2
      ? o.Right
      : e == 3
        ? o.Up
        : e == 4
          ? o.Down
          : "";
}
var Ue = {
  narrowWidth: "500px",
  "duration-app-launch": "800ms",
  PagedSettingsDialog: "Syc5CEejpCs-",
  PagedSettingsDialog_PageContent: "spl7ARNTMuI-",
  NoPadding: "JE-edA2AHZU-",
  PagedSettingsDialog_PageListColumn: "_7w8xPpmaJYI-",
  PagedSettingsDialog_Title: "IkEy5ScXPLA-",
  PagedSettingsDialog_PageList: "_05n8dH6yzlk-",
  PagedSettingsDialog_PageList_DisableScrolling: "kCFp7ufol-Q-",
  PagedSettingsDialog_PageList_ShowTitle: "_6MMl04DZdyk-",
  PageSettingsDialog_PageList_NoHeaderPadding: "B77h1ty4tmw-",
  PagedSettingsDialog_PageListItem: "meSl50NBW8s-",
  DisabledItem: "CIL35Lmv31Y-",
  Active: "_7HVRI1bmcvY-",
  "ItemFocusAnim-darkerGrey": "vn2pzERIjAA-",
  "ItemFocusAnim-darkGrey": "_3-IWLVbzoio-",
  PageListItem_Icon: "yzO7X4cm1OE-",
  PageListItem_Title: "TVggJx59aXM-",
  Separator: "ALQx3i1U-SY-",
  PagedSettingDialog_ContentColumn: "dC8z7R4w4eU-",
  Up: "pO-epRkhPx8-",
  ContentTransition: "UWiPLueCfHo-",
  Enter: "KB1G8hQC1Z0-",
  EnterActive: "_8NY5W7Wocgo-",
  Exit: "lwgKtPYHcKg-",
  ExitActive: "RI6Chi7gF-s-",
  Down: "U7gwOwC0auU-",
  BackgroundAnimation: "ELqxp2DLKF8-",
  "ItemFocusAnim-darkerGrey-nocolor": "o0VXPmdxuUc-",
  "ItemFocusAnim-grey": "_7kx878X5F4U-",
  "ItemFocusAnim-translucent-white-10": "_47U-YjIajBc-",
  "ItemFocusAnim-translucent-white-20": "T7MuEoxoS4g-",
  "ItemFocusAnimBorder-darkGrey": "rEWG7AndCQc-",
  "ItemFocusAnim-green": "FMEBbK-Sl-8-",
  focusAnimation: "_08jd-D3p5XU-",
  hoverAnimation: "P1X-i3YFXCU-",
};
var xe = u(b()),
  va = H.createContext(null);
function Xs(o) {
  let e = H.useContext(va),
    n = Ri().IN_VR,
    { title: i, icon: r, active: a, ...s } = o;
  return (0, xe.jsxs)(O, {
    preferredFocus: a,
    navRef: a && e ? e : void 0,
    noFocusRing: !0,
    onActivate: n ? void 0 : s.onClick,
    onFocus: n ? void 0 : s.onClick,
    ...s,
    children: [
      r && (0, xe.jsx)("div", { className: Ue.PageListItem_Icon, children: r }),
      (0, xe.jsx)("div", { className: Ue.PageListItem_Title, children: i }),
    ],
  });
}
function qs(o) {
  let { bTransparent: e, className: t, ...n } = o;
  return (0, xe.jsx)("div", { className: g(t, Ue.Separator), ...n });
}
var Qs = H.forwardRef(function (e, t) {
  let { page: n, bAutoFocusPageContent: i, showTitle: r = !1 } = e,
    a = H.useRef(null),
    s = H.useRef(!0);
  H.useEffect(() => {
    (!s.current || !i) && a.current?.TakeFocus(), (s.current = !1);
  }, [n, i]);
  let c = (l, d, p) =>
    (0, xe.jsx)(js, {
      pages: e.pages,
      activePage: l,
      refForPage: d,
      PageComponent: p,
    });
  return (0, xe.jsx)(va.Provider, {
    value: a,
    children: (0, xe.jsx)(Mr, {
      ...e,
      stylesheet: Ue,
      showTitle: r,
      PageListItemComponent: Xs,
      PageListSeparatorComponent: qs,
      renderPageContent: e.renderPageContent || c,
    }),
  });
});
function js(o) {
  let { pages: e, activePage: t, refForPage: n, PageComponent: i } = o,
    r = H.useMemo(() => e.findIndex((l) => l == t), [e, t]),
    a = Js(r),
    s = Zs(t?.identifier, n),
    c = Ca(Ue, a);
  return (0, xe.jsx)(ha, {
    childrenKey: t?.identifier,
    childrenClasses: ba(Ue, Ue.ContentTransition),
    directionClass: c,
    animate: a != 0,
    children:
      t &&
      (0, xe.jsx)(
        i,
        { ref: s(t.identifier), stylesheet: Ue, activePage: t },
        t.identifier,
      ),
  });
}
function Js(o) {
  let e = H.useRef(o),
    t = H.useRef(0),
    n = e.current;
  if (n == o) return t.current;
  let i = 0;
  return (
    n < o ? (i = 4) : n > o && (i = 3), (e.current = o), (t.current = i), i
  );
}
function Zs(o, e) {
  let t = H.useMemo(() => new Map(), []),
    n = H.useRef();
  n.current = o;
  let i = H.useRef();
  i.current = e;
  let r = H.useCallback(
    (a) => (s) => {
      t.set(a, s), a === n.current && nt(i.current, s);
    },
    [t],
  );
  return (
    H.useEffect(() => (nt(e, o && t.get(o)), () => nt(e, void 0)), [t, o, e]), r
  );
}
var Da = u(b()),
  Yf = _a.forwardRef(function (e, t) {
    return (0, Da.jsx)(Rt, {
      noFocusRing: !0,
      ...e,
      ref: t,
      className: g(R.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var cn = u(D());
var Sa = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var $ = u(b());
function Pa(o, e) {
  for (let t of o.options)
    if ((Be(t) && t.data === e) || (Ee(t) && Pa(t, e))) return !0;
  return !1;
}
function $s(o) {
  let e = (t) =>
    t?.map((n, i) =>
      at(n)
        ? (0, $.jsx)(Fi, {}, i)
        : Be(n)
          ? (0, $.jsx)(
              Pt,
              {
                role: "option",
                onSelected: (r) => o.onValueSelected && o.onValueSelected(r, n),
                selected: o.selectedValue === n.data,
                children: (0, $.jsx)($.Fragment, { children: n.label }),
              },
              i,
            )
          : Ee(n)
            ? (0, $.jsx)(
                ki,
                {
                  label: n.label,
                  selectedWithin: Pa(n, o.selectedValue),
                  children: e(n.options),
                },
                i,
              )
            : null,
    );
  return (0, $.jsx)(Bt, {
    onCancel: o.onCancel,
    role: "listbox",
    children: e(o.rgOptions),
  });
}
var Ks = cn.forwardRef(function (e, t) {
  let {
      className: n,
      opened: i,
      arrowClassName: r,
      "aria-label": a,
      "aria-labelledby": s = "",
      ...c
    } = e,
    l = cn.useId(),
    d = cn.useId();
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(ge, {
        id: l,
        className: g(Sa.DropDownControlButton, n),
        "aria-labelledby": s || d,
        ...c,
        ref: t,
        children: (0, $.jsxs)("div", {
          className: R.DropDownControlButtonContents,
          children: [
            (0, $.jsx)("div", {
              className: "DialogDropDown_CurrentDisplay",
              children: e.children,
            }),
            (0, $.jsx)(Vt, { direction: "down" }),
          ],
        }),
      }),
      a &&
        (0, $.jsx)("div", { id: d, style: { display: "none" }, children: a }),
    ],
  });
});
var me = u(D());
var xa = "TW2ZQnLvgIc-";
var Ye = u(b()),
  Ma = me.forwardRef(function (e, t) {
    let { className: n, ...i } = e,
      r = me.useRef(),
      a = ve(t, r),
      [s, c] = me.useState(!1),
      l = me.useCallback(() => {
        c((d) => !d), window.setTimeout(() => r.current?.Focus(), 1);
      }, []);
    return (0, Ye.jsx)(O, {
      className: n,
      onOptionsButton: l,
      onOptionsActionDescription: M(
        s ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, Ye.jsx)(rt, {
        autoComplete: "off",
        ref: a,
        inlineControls: (0, Ye.jsx)(ge, {
          "aria-label": M(s ? "#Login_HidePassword" : "#Login_ShowPassword"),
          className: xa,
          onPointerDown: l,
          onOKButton: l,
          children: s ? (0, Ye.jsx)(Hi, {}) : (0, Ye.jsx)(Gi, {}),
        }),
        ...i,
        type: s ? "text" : "password",
      }),
    });
  }),
  sg = me.forwardRef(function (e, t) {
    let {
        label: n,
        className: i,
        description: r,
        icon: a,
        bottomSeparator: s,
        highlightOnFocus: c,
        ...l
      } = e,
      d = me.useId();
    return (0, Ye.jsx)(He, {
      accessibilityId: d,
      className: i,
      label: n,
      description: r,
      icon: a,
      bottomSeparator: s,
      highlightOnFocus: c,
      childrenContainerWidth: "fixed",
      children: (0, Ye.jsx)(Ma, { ...Ve(d, e), ...l, ref: t }),
    });
  });
function ol(o) {
  let e = o.split(".");
  if (e.length > 4) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n == "") {
      if (t == e.length - 1) continue;
      return !1;
    }
    if (!/^[0-9]*$/.test(n)) return !1;
    let i = parseInt(n);
    if (!(i >= 0 && i <= 255)) return !1;
  }
  return !0;
}
var lg = me.forwardRef(function (e, t) {
  let { className: n, value: i, ...r } = e,
    a = i ?? "";
  return (0, Ye.jsx)(ca, {
    autoComplete: "off",
    value: a,
    ref: t,
    placeholder: "   .   .   .   ",
    ...r,
    onChange: (c) => {
      let l = c.target.value;
      if (ol(l)) r.onChange && r.onChange(c);
      else {
        c.target.value = a;
        return;
      }
    },
  });
});
var K = u(D());
var x = {
  "duration-app-launch": "800ms",
  "error-shake-duration": "500ms",
  SliderControlPanelGroup: "S4m6S4lbgWU-",
  SliderControlAndNotches: "TSGeP5nQ2eE-",
  WithDefaultValue: "bMn8P19ST3I-",
  SliderControl: "-sSi0mqDQEc-",
  Disabled: "gX0ZSjUXBoI-",
  SliderTrack: "JcZPqsmZCrs-",
  SliderHasNotches: "_99yc6l0bUM8-",
  DefaultValueIsColorRange: "R2grr9aqjqU-",
  DefaultValueColorLeft: "_-6vA11qHT8w-",
  DefaultValueColorRight: "m8UQ6Eo-HTQ-",
  ForegroundInvisible: "roOa1TV2NUU-",
  SliderTrackDark: "OfeMaDvhS4M-",
  SliderHandleContainer: "gEzroWiQ10A-",
  VerticalLineSliderHandleContainer: "_3ppdnVE1H3A-",
  ParenSliderHandleContainer: "_1Iz6XvWonug-",
  SliderHandle: "aTE6aUB0R0c-",
  SliderHandleFocusPop: "SknjTtzI4lo-",
  VerticalLineSliderHandle: "Bo42-AtikgY-",
  ParenSliderHandle: "_9YeVS-YAFPA-",
  Left: "FXMelMR3PWk-",
  Icon: "cqcpHpjo8zI-",
  SliderNotchContainer: "PUlK4jhI1LI-",
  SliderNotch: "egqaF5PBrnM-",
  AlignToEnds: "M9-w5yPyef8-",
  SliderNotchLabel: "VxQ-bQawiuo-",
  AlignToLeft: "_3gVMVUrVouE-",
  AlignToRight: "V-7czEj9CP8-",
  SliderNotchTick: "e84hOS74IEE-",
  TickActive: "Q-OxmMuerTg-",
  LabelText: "G7nK2YgP-s0-",
  DescriptionValue: "_9DahJpVzGWQ-",
  EditableValue: "hDOGbd8g268-",
  FakeEditableValue: "CDypuWjk2cI-",
  RedBorder: "CXJDXvghByw-",
  ErrorShake: "u7OFkUkvl4Q-",
  "error-shake": "pDBWpRO7L-A-",
  CompoundSlider: "pkpACrKtYxg-",
  CompoundSliderSubSlider: "bVo2ux2WBZg-",
  Right: "eAR6MDPFR6A-",
  CompoundSliderSubSliderLabelContainer: "-Kf-ENxw6Fc-",
  CompoundSliderSubSliderLabelPositioner: "SHWtMAO6Ovs-",
  CompoundSliderSubSliderLabel: "_7d0MjH6VujQ-",
  CompoundSliderSubSliderLabelInternal: "p5Dnr3ULfG8-",
  DefaultValueTickContainer: "_-6ZxRWNF2co-",
  DefaultValueTick: "OGdq5YYrCEk-",
  BackgroundAnimation: "rZZpaXvr8xw-",
  "ItemFocusAnim-darkerGrey-nocolor": "F1Gvr3xtsjQ-",
  "ItemFocusAnim-darkerGrey": "aiPJtdOz5TQ-",
  "ItemFocusAnim-darkGrey": "tDpKQmHutBk-",
  "ItemFocusAnim-grey": "ADELUD39uD4-",
  "ItemFocusAnim-translucent-white-10": "_0Mx6icQvg2A-",
  "ItemFocusAnim-translucent-white-20": "jax3iKWCNi4-",
  "ItemFocusAnimBorder-darkGrey": "kIPtFrURqQk-",
  "ItemFocusAnim-green": "nHBdcYV-iW0-",
};
var L = u(b()),
  il = 10,
  rl = 1,
  al = 0.01,
  sl = 0.05,
  Ig = ji(x["error-shake-duration"]);
function wa(o, e) {
  return e < 0 ? 0 : e > 1 ? 1 : o == 0 ? e : Math.round(e / o) * o;
}
function Ta(o, e, t) {
  let n = o + t * (e - o);
  return Number.parseFloat(n.toFixed(10));
}
function ni(o, e, t) {
  return (t - o) / (e - o);
}
var Q = class extends K.Component {
  m_refSlider = K.createRef();
  m_refHandle = K.createRef();
  m_navRefSlider = K.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = hi();
  m_fStartValue;
  m_fLatestUserValue;
  m_fLatestOnChangeValue;
  m_bInnerSliderHasFocus = !1;
  m_nRepeatCount = 0;
  m_fInitalRepeatTime = void 0;
  get showHandle() {
    return this.props.showHandle ?? !0;
  }
  get isKeyNavTarget() {
    return this.props.isKeyNavTarget ?? !0;
  }
  get validRange() {
    return this.props.min < this.props.max;
  }
  get range() {
    return this.validRange ? this.props.max - this.props.min : 0;
  }
  get step() {
    return Math.abs(this.props.step ?? rl);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      t = e > 0 ? e / this.range : al;
    return Math.max(t, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : Ct(this.props.value, this.props.min, this.props.max);
    return ni(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return ni(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = Ct(0, this.props.min, this.props.max);
    return ni(this.props.min, this.props.max, e);
  }
  get CanResetToDefault() {
    return (
      this.props.resetValue != null && this.props.value != this.props.resetValue
    );
  }
  get SliderChangeSource() {
    switch (this.m_eDragMode) {
      case 1:
        return 1;
      case 3:
      case 2:
        return 0;
      case 0:
        return;
    }
  }
  constructor(e) {
    super(e),
      (this.m_fStartValue = this.props.value),
      (this.m_fLatestUserValue = this.props.value),
      (this.m_fLatestOnChangeValue = this.props.value);
  }
  RecomputeSliderBounds() {
    (this.m_sliderBounds = this.m_refSlider.current?.getBoundingClientRect()),
      (this.m_handleBounds = this.m_refHandle.current?.getBoundingClientRect());
  }
  SetDragMode(e) {
    if (e != this.m_eDragMode) {
      switch (
        ((this.m_eDragMode = e),
        this.props.onChangeStart &&
          this.props.onChangeStart(this.SliderChangeSource),
        e)
      ) {
        case 1:
        case 3:
        case 2:
          this.RecomputeSliderBounds(),
            (this.m_fStartValue = this.props.value),
            (this.m_fLatestUserValue = this.props.value);
          break;
        case 0:
          break;
      }
      switch (e) {
        case 1:
          this.m_refSlider.current?.ownerDocument?.addEventListener(
            "mousemove",
            this.OnWindowMouseMove,
            { passive: !1 },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              "mouseup",
              this.OnWindowMouseUp,
              { passive: !1 },
            );
          break;
        case 2:
        case 3:
          this.m_refSlider.current?.ownerDocument?.addEventListener(
            "touchmove",
            this.OnWindowTouchMove,
            { passive: !1 },
          ),
            this.m_refSlider.current?.ownerDocument?.addEventListener(
              "touchend",
              this.OnWindowTouchEnd,
              { passive: !1 },
            );
          break;
        case 0:
          this.RemoveDocumentEventListeners();
          break;
      }
    }
  }
  OnGamepadDirection(e) {
    if (this.props.disabled) return !1;
    let t = 0;
    if (e.detail.button == 11) t = -1;
    else if (e.detail.button == 12) t = 1;
    else return !1;
    e.detail.is_repeat
      ? (this.m_nRepeatCount == 0 &&
          (this.m_fInitalRepeatTime = performance.now()),
        this.m_nRepeatCount++)
      : ((this.m_nRepeatCount = 0),
        (this.m_fInitalRepeatTime = performance.now()));
    let n = performance.now() - this.m_fInitalRepeatTime,
      i = ai(n, 0, 2e3, 500, 250),
      r = Math.pow(2, Math.floor(n / i)),
      a = this.normalizedDpadStep * r,
      s = Ct(a, this.normalizedDpadStep, sl) * t,
      c = wa(this.normalizedStep, this.normalizedClampedValue + s),
      l = Ta(this.props.min, this.props.max, c);
    if (
      ((l = Ct(
        l,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      l != this.props.value)
    ) {
      let d = l > this.m_fLatestUserValue;
      _e.PlayNavSound(d ? 18 : 19),
        (this.m_fLatestUserValue = l),
        this.FireOnChange(l, 2);
    } else _e.PlayNavSound(25);
    return !0;
  }
  FireOnChange(e, t) {
    this.m_fLatestOnChangeValue != e &&
      ((this.m_fLatestOnChangeValue = e),
      this.props.onChange && this.props.onChange(e, t));
  }
  ComputeNormalizedValueForMousePosition(e) {
    if (this.m_sliderBounds == null) return 0;
    let t = e / this.m_fZoom,
      n = this.m_sliderBounds.right - this.m_sliderBounds.left,
      i =
        this.m_handleBounds == null
          ? 0
          : this.m_handleBounds.right - this.m_handleBounds.left,
      r = n - i;
    return (t - this.m_sliderBounds.left - i / 2) / r;
  }
  BShouldTriggerHapticOnSnap() {
    let e = this.normalizedStep;
    return e > 0 && e >= 1 / 40;
  }
  PlayHaptic(e) {
    this.m_refSlider.current?.ownerDocument.defaultView?.SteamClient?.OpenVR?.TriggerOverlayHapticEffect?.(
      e,
      0,
    );
  }
  UpdateSliderValueForPosition(e) {
    if (this.props.disabled || !this.m_refSlider.current) return;
    let t = this.ComputeNormalizedValueForMousePosition(e),
      n = wa(this.normalizedStep, t),
      i = Ta(this.props.min, this.props.max, n),
      r = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((i = Ct(i, r, a)), i != this.props.value)) {
      let s = i > this.props.value,
        c = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !c) && _e.PlayNavSound(s ? 18 : 19),
        this.m_eDragMode == 1 || this.m_eDragMode == 3)
      ) {
        let d = !1;
        if (
          (i == r || i == a) &&
          this.m_fLatestUserValue > r &&
          this.m_fLatestUserValue < a &&
          !d
        )
          this.PlayHaptic(5), (d = !0);
        else if (
          !this.BShouldTriggerHapticOnSnap() &&
          this.m_fLatestUserValue >= r &&
          this.m_fLatestUserValue <= a
        ) {
          let m = Math.floor(((this.m_fLatestUserValue - r) / (a - r)) * 40),
            C = Math.floor(((i - r) / (a - r)) * 40);
          m != C && !d && (this.PlayHaptic(4), (d = !0));
        }
        !c && !d && (this.PlayHaptic(3), (d = !0));
      }
      (this.m_fLatestUserValue = i),
        this.FireOnChange(i, this.SliderChangeSource);
    }
  }
  OnWindowMouseMove(e) {
    this.UpdateSliderValueForPosition(e.clientX);
  }
  OnWindowMouseUp(e) {
    this.m_eDragMode != 0 && this.Complete();
  }
  OnMouseDown(e) {
    e.button == 0 &&
      (this.props.disabled ||
        (e.preventDefault(),
        this.SetDragMode(1),
        this.UpdateSliderValueForPosition(e.clientX)));
  }
  OnTouchStart(e) {
    if (this.props.disabled || e.touches.length != 1) return;
    e.preventDefault();
    let t = this.ComputeNormalizedValueForMousePosition(e.touches[0].clientX);
    t < 0 ||
      t > 1 ||
      (this.SetDragMode(2),
      (this.m_vTouchStartPosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      }));
  }
  OnWindowTouchMove(e) {
    if (e.touches.length == 1) {
      switch (this.m_eDragMode) {
        case 2:
          let t = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          if (Ci(this.m_vTouchStartPosition, t) >= il) {
            let i = bi(this.m_vTouchStartPosition, t);
            Math.abs(i.x) > Math.abs(i.y)
              ? (this.SetDragMode(3), this.m_refSlider.current?.focus())
              : this.SetDragMode(0);
          }
          break;
        case 3:
          this.UpdateSliderValueForPosition(e.touches[0].clientX);
          break;
      }
      e.preventDefault();
    }
  }
  OnWindowTouchEnd(e) {
    this.m_eDragMode != 0 && this.Complete();
  }
  Complete() {
    let e = this.m_eDragMode != 0;
    this.FireOnChange(this.m_fLatestUserValue, this.SliderChangeSource),
      this.props.onChangeComplete &&
        this.props.onChangeComplete(
          this.m_fLatestUserValue,
          this.SliderChangeSource,
        ),
      this.SetDragMode(0);
    let t = this.step == 0;
    if (this.m_fLatestUserValue != this.m_fStartValue && t && e) {
      let i = this.m_fLatestUserValue > this.m_fStartValue;
      _e.PlayNavSound(i ? 18 : 19);
    }
  }
  RemoveDocumentEventListeners() {
    this.m_refSlider.current?.ownerDocument?.removeEventListener(
      "mousemove",
      this.OnWindowMouseMove,
    ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "touchmove",
        this.OnWindowTouchMove,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "mouseup",
        this.OnWindowMouseUp,
      ),
      this.m_refSlider.current?.ownerDocument?.removeEventListener(
        "touchend",
        this.OnWindowTouchEnd,
      );
  }
  componentDidMount() {
    this.m_fZoom = ui(this.m_refSlider.current);
  }
  componentWillUnmount() {
    this.RemoveDocumentEventListeners();
  }
  BlurInnerSlider() {
    this.m_navRefSlider.current?.ParentTakeFocus();
  }
  OnInnerSliderFocus() {
    (this.m_bInnerSliderHasFocus = !0), (this.m_fStartValue = this.props.value);
  }
  OnInnerSliderBlur() {
    (this.m_bInnerSliderHasFocus = !1),
      this.m_fStartValue != this.m_fLatestUserValue && this.Complete();
  }
  ResetToDefault() {
    if (!this.CanResetToDefault || this.m_eDragMode != 0) return;
    let e;
    (this.m_fLatestUserValue = this.props.resetValue),
      this.FireOnChange(this.props.resetValue, 4),
      this.m_bInnerSliderHasFocus
        ? (e = this.props.resetValue > this.m_fLatestUserValue)
        : ((e = this.props.resetValue > this.props.value),
          this.props.onChangeComplete &&
            this.props.onChangeComplete(this.props.resetValue, 4)),
      _e.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let t = (0, L.jsx)(Bt, {
        children: (0, L.jsx)(Pt, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: M("#ResetToDefault"),
        }),
      });
      Wt(t, e);
    }
  }
  render() {
    let {
        min: e,
        max: t,
        value: n,
        clampMax: i,
        clampMin: r,
        className: a,
        disabled: s,
        dpadStep: c,
        extraNotchPadding: l,
        focusable: d,
        handleType: p,
        innerRef: m,
        isKeyNavTarget: C,
        navRef: v,
        notchCount: _,
        notchLabels: P,
        notchTicksVisible: I,
        onChange: A,
        onChangeComplete: k,
        onChangeStart: U,
        renderNotch: B,
        renderValue: G,
        resetValue: ne,
        resetValueAppearance: j = "top-caret",
        showBookendLabels: W,
        showHandle: Ke,
        step: Kn,
        strValueSuffix: eo,
        trackStyleOverride: dn,
        trackStyleBackground: un,
        trackForegroundVisible: to = !0,
        trackTone: Ft,
        ...ft
      } = this.props,
      gt = W ?? !1,
      pn = I ?? !gt,
      mn = gt ? 2 : _,
      fn = [
        { notchIndex: 0, label: `${e}` },
        { notchIndex: 1, label: `${t}` },
      ],
      no = gt ? fn : P,
      gn = d ?? !0,
      hn = this.normalizedDefaultValue,
      ii = this.normalizedSliderOrigin,
      et = hn != null,
      tt = j == "top-caret",
      ht = !tt,
      oo = G || Po,
      bt = {};
    this.CanResetToDefault && (bt[3] = M("#ResetToDefault"));
    let io = `${x.SliderHandle} SliderHandle`,
      ro = `${x.SliderHandleContainer} SliderHandleContainer `;
    p == "verticalline"
      ? ((io = `${x.VerticalLineSliderHandle} SliderHandle`),
        (ro = `${x.VerticalLineSliderHandleContainer} SliderHandleContainer `))
      : (p == "leftparen" || p == "rightparen") &&
        ((io = g(
          x.ParenSliderHandle,
          p == "leftparen" ? x.Left : x.Right,
          "SliderHandle",
        )),
        (ro = g(
          x.ParenSliderHandleContainer,
          p == "leftparen" ? x.Left : x.Right,
          "SliderHandleContainer",
        )));
    let Ea = oo(n);
    return (0, L.jsx)(qi, {
      noFocusRing: !0,
      className: g(x.SliderControlPanelGroup, "SliderControlPanelGroup", a),
      navRef: v,
      onMouseDown: (ao) => this.OnMouseDown(ao.nativeEvent),
      onTouchStart: (ao) => this.OnTouchStart(ao.nativeEvent),
      onOKActionDescription: s ? null : M("#Slider_AdjustSlider"),
      focusable: gn,
      childFocusDisabled: s || !gn,
      onContextMenu: this.OnContextMenu,
      onOKButton: s ? () => _e.PlayNavSound(25) : void 0,
      onSecondaryButton: this.CanResetToDefault ? this.ResetToDefault : void 0,
      onSecondaryActionDescription: this.CanResetToDefault
        ? M("#ResetToDefault")
        : void 0,
      actionDescriptionMap: bt,
      "aria-roledescription": M("#Slider_Button"),
      "aria-labelledby": ft["aria-labelledby"],
      "aria-label": ft["aria-label"],
      children: (0, L.jsxs)(Ie, {
        role: "slider",
        "aria-valuenow": n,
        "aria-valuetext": Ea,
        ...ft,
        className: g(
          x.SliderControlAndNotches,
          s && x.Disabled,
          et && x.WithDefaultValue,
          et && ht && x.DefaultValueIsColorRange,
          et && ht && j.side == "left" && x.DefaultValueColorLeft,
          et && ht && j.side != "left" && x.DefaultValueColorRight,
          !to && x.ForegroundInvisible,
        ),
        focusable: this.isKeyNavTarget,
        noFocusRing: !0,
        onFocus: this.OnInnerSliderFocus,
        onBlur: this.OnInnerSliderBlur,
        style: {
          "--normalized-slider-value": this.normalizedClampedValue,
          "--normalized-slider-default-value": hn,
          "--normalized-slider-origin": ii,
          "--default-value-track-color": ht ? j.trackForegroundColor : void 0,
          "--slider-extra-notch-padding": l ?? "0px",
        },
        ref: Cn(this.m_refSlider, m),
        navRef: this.m_navRefSlider,
        onGamepadDirection: this.OnGamepadDirection,
        onOKButton: this.BlurInnerSlider,
        onOKActionDescription: null,
        onCancelButton: this.BlurInnerSlider,
        onCancelActionDescription: M("#ActionButtonLabelDone"),
        children: [
          (0, L.jsxs)("div", {
            className: g(x.SliderControl, "SliderControl"),
            children: [
              (0, L.jsx)("div", {
                className: g(
                  x.SliderTrack,
                  _ != null && pn && x.SliderHasNotches,
                  { [x.SliderTrackDark]: Ft === "dark" },
                  un,
                  "SliderTrack",
                ),
                style: this.props.trackStyleOverride,
              }),
              et &&
                tt &&
                (0, L.jsx)("div", {
                  className: x.DefaultValueTickContainer,
                  children: (0, L.jsx)("div", {
                    className: x.DefaultValueTick,
                    children: (0, L.jsx)(Vt, { direction: "down" }),
                  }),
                }),
              this.validRange &&
                n != null &&
                !isNaN(n) &&
                this.showHandle &&
                (0, L.jsx)("div", {
                  className: ro,
                  children: (0, L.jsxs)("div", {
                    className: io,
                    ref: this.m_refHandle,
                    children: [
                      p == "leftparen" && (0, L.jsx)(Ui, {}),
                      p == "rightparen" && (0, L.jsx)(Yi, {}),
                    ],
                  }),
                }),
            ],
          }),
          (0, L.jsx)(ll, {
            notchCount: mn,
            notchLabels: no,
            sliderValue: this.normalizedClampedValue,
            notchTicksVisible: pn,
            renderNotch: B,
          }),
        ],
      }),
    });
  }
};
f([h], Q.prototype, "RecomputeSliderBounds", 1),
  f([h], Q.prototype, "SetDragMode", 1),
  f([h], Q.prototype, "OnGamepadDirection", 1),
  f([h], Q.prototype, "UpdateSliderValueForPosition", 1),
  f([h], Q.prototype, "OnWindowMouseMove", 1),
  f([h], Q.prototype, "OnWindowMouseUp", 1),
  f([h], Q.prototype, "OnMouseDown", 1),
  f([h], Q.prototype, "OnTouchStart", 1),
  f([h], Q.prototype, "OnWindowTouchMove", 1),
  f([h], Q.prototype, "OnWindowTouchEnd", 1),
  f([h], Q.prototype, "Complete", 1),
  f([h], Q.prototype, "BlurInnerSlider", 1),
  f([h], Q.prototype, "OnInnerSliderFocus", 1),
  f([h], Q.prototype, "OnInnerSliderBlur", 1),
  f([h], Q.prototype, "ResetToDefault", 1),
  f([h], Q.prototype, "OnContextMenu", 1);
function ll(o) {
  let {
      sliderValue: e,
      notchCount: t,
      notchLabels: n,
      notchTicksVisible: i,
      renderNotch: r,
    } = o,
    a = n ?? [];
  if (!t) return null;
  let s = !1,
    c = [];
  for (let l = 0; l < t; ++l) {
    let d = a.find((p) => p.notchIndex == l);
    d && (s = !0),
      c.push(
        (0, L.jsx)(
          cl,
          {
            notchIndex: l,
            sliderValue: e,
            notchLabel: d,
            notchCount: t,
            notchTicksVisible: i,
            renderNotch: r,
          },
          l,
        ),
      );
  }
  return (0, L.jsx)(O, { className: g(x.SliderNotchContainer), children: c });
}
function cl(o) {
  let e = o.notchIndex <= (o.notchCount - 1) * o.sliderValue,
    t = o.notchCount <= 3 && !o.notchTicksVisible,
    n = t && o.notchIndex == 0,
    i = t && o.notchIndex == o.notchCount - 1,
    r = { ...o, alignLeftEnd: n, alignRightEnd: i, active: e };
  return (0, L.jsx)("div", {
    className: g(x.SliderNotch, t && x.AlignToEnds),
    children: o.renderNotch ? o.renderNotch(r) : (0, L.jsx)(dl, { ...r }),
  });
}
function dl(o) {
  let { alignLeftEnd: e, alignRightEnd: t, active: n } = o;
  return (0, L.jsxs)(L.Fragment, {
    children: [
      o.notchTicksVisible &&
        (0, L.jsx)("div", {
          className: g(x.SliderNotchTick, n && x.TickActive),
        }),
      o.notchLabel &&
        (0, L.jsx)("div", {
          className: g(
            x.SliderNotchLabel,
            e && x.AlignToLeft,
            t && x.AlignToRight,
          ),
          children: o.notchLabel?.label,
        }),
    ],
  });
}
var Ag = K.forwardRef(function (e, t) {
  let {
    label: n,
    labelIndex: i,
    xOffset: r,
    onResize: a,
    OnMouseDown: s,
    OnTouchStart: c,
  } = e;
  K.useEffect(() => {
    a(i);
  }, [a, i]);
  let l = K.useCallback(
      (m) => {
        a(i);
      },
      [a, i],
    ),
    d = Ai(l),
    p = ve(d, t);
  return (0, L.jsx)("div", {
    className: x.CompoundSliderSubSliderLabel,
    ref: p,
    onMouseDown: s,
    onTouchStart: c,
    style: { transform: `translateX(${r}px)` },
    children: (0, L.jsx)("div", {
      className: x.CompoundSliderSubSliderLabelInternal,
      children: n,
    }),
  });
});
var $n = u(D());
var $e = u(b()),
  Ra = $n.forwardRef(function (e, t) {
    let {
        value: n,
        onChange: i,
        disabled: r,
        className: a,
        focusable: s,
        children: c,
        navRef: l,
        ...d
      } = e,
      p = () => {
        if (!r && i) {
          let m = !n;
          i(m), _e.PlayNavSound(m ? 16 : 17);
        }
      };
    return (0, $e.jsxs)(Ie, {
      ...d,
      noFocusRing: !0,
      className: g(a, R.Toggle, { [R.Disabled]: !!r, [R.On]: !!n }),
      onClick: p,
      ref: t,
      navRef: l,
      focusable: s,
      role: "checkbox",
      "aria-checked": !!n,
      children: [
        (0, $e.jsx)("div", { className: R.ToggleRail }),
        (0, $e.jsx)("div", { className: R.ToggleSwitch }),
        c,
      ],
    });
  });
function ul(o) {
  let e = !!o.disabled,
    { actionDescriptions: t, gamepadEvents: n } = vi(o),
    i = $n.useId(),
    { "aria-expanded": r, "aria-controls": a } = o;
  return (0, $e.jsx)(He, {
    accessibilityId: i,
    className: o.className,
    disabled: e,
    label: o.label,
    icon: o.icon,
    description: o.description,
    explainer: o.explainer,
    explainerTitle: o.explainerTitle,
    padding: o.padding,
    bottomSeparator: o.bottomSeparator,
    highlightOnFocus: o.highlightOnFocus,
    inlineWrap: "keep-inline",
    onContextMenu: o.onContextMenu,
    actionDescriptionMap: t,
    onClick: o.onClick,
    indentLevel: o.indentLevel,
    ...n,
    children: (0, $e.jsx)(Ra, {
      "aria-expanded": r,
      "aria-controls": a,
      ...Ve(i, o),
      onChange: o.OnToggleChange,
      value: o.checked,
      disabled: e,
      navRef: o.navRef,
    }),
  });
}
var Zn = class extends Xe {
  OnToggleChange(e) {
    !this.props.disabled && e !== this.checked && this.Toggle();
  }
  render() {
    return (0, $e.jsx)(ul, {
      ...this.props,
      OnToggleChange: this.OnToggleChange,
      checked: this.checked,
    });
  }
};
f([h], Zn.prototype, "OnToggleChange", 1);
var oi = u(b());
function tl(o) {
  let { children: e, bCenterVertically: t, refElem: n, ...i } = o,
    r = g(
      R.GamepadDialogContent,
      "DialogContent _DialogLayout",
      o.className,
      t && " _DialogCenterVertically",
    ),
    { ref: a, navRef: s } = Xi(),
    c = ve(n, a);
  return (0, oi.jsx)(O, {
    ...i,
    className: r,
    ref: c,
    navRef: s,
    children: (0, oi.jsx)(O, {
      className: g(
        R.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
export {
  Vr as a,
  tr as b,
  Ul as c,
  ha as d,
  ba as e,
  Ar as f,
  qn as g,
  qr as h,
  zn as i,
  Zp as j,
  Es as k,
  nn as l,
  Tn as m,
  Ut as n,
  R as o,
  $s as p,
  tl as q,
};
