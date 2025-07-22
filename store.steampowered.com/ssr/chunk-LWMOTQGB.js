import {
  c as At,
  d as Oi,
  e as Ii,
  f as Kt,
  g as Ft,
  h as Ai,
  i as yi,
  j as fo,
  k as Fi,
  l as ki,
  m as Bi,
  n as go,
  o as en,
  p as tn,
  q as ho,
  t as Wi,
  u as Vi,
  v as Hi,
  w as Gi,
} from "./chunk-63QV3N2N.js";
import { b as le } from "./chunk-YWEXPQAT.js";
import { a as Ta } from "./chunk-NDYXW4SE.js";
import { a as zi } from "./chunk-P4UXTE5D.js";
import {
  e as Mi,
  g as yt,
  j as wi,
  k as Ti,
  l as Ei,
  q as Li,
} from "./chunk-W7GN5EV7.js";
import { a as g } from "./chunk-AYOJQSU6.js";
import {
  a as Xe,
  d as _i,
  i as qe,
  u as x,
  v as Pi,
  x as xi,
} from "./chunk-EGRUGE2G.js";
import { a as Lt } from "./chunk-GNUG7ANZ.js";
import {
  c as On,
  d as kt,
  e as Bt,
  f as Ui,
  h as Yi,
} from "./chunk-MXP4ZJGH.js";
import { a as Ni } from "./chunk-LL3X7A5N.js";
import { a as I } from "./chunk-OSSZHGNC.js";
import {
  C as Ci,
  G as ze,
  H as En,
  J as It,
  K as vi,
  a as Re,
  b as fi,
  e as gi,
  f as hi,
  g as bi,
  l as Se,
} from "./chunk-Y37SQC3A.js";
import {
  B as mo,
  C as pi,
  D as mi,
  a as bt,
  b as De,
  c as Mn,
  d as ai,
  e as co,
  f as si,
  g as Ot,
  h as uo,
  i as wn,
  j as po,
  k as Nt,
  m as li,
  q as Tn,
  s as ci,
  t as di,
  v as ui,
} from "./chunk-52WBXZPR.js";
import { a as Di, c as Ln, e as Ri, f as Si } from "./chunk-3TBPIIE3.js";
import { h as z, j as $t, o as se, s as h } from "./chunk-ID2H2UTY.js";
import {
  b as Et,
  c as xn,
  d as ri,
  j as Ye,
  p as b,
} from "./chunk-3UC64NIE.js";
import { a as D } from "./chunk-EWNBABYZ.js";
import { e as u, g as f } from "./chunk-5WT7BLXL.js";
var V = u(D());
function Xi(o) {
  return o == 1 || o == 2 || o == 13;
}
var Co = u(D());
var Nn = u(b());
var bo = class {
  m_Promise;
  m_Value = void 0;
  constructor(e) {
    qe(this), (this.promise = e);
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
f([Xe], bo.prototype, "m_Value", 2);
function Pe(o, e, t) {
  return Co.forwardRef(function (i, r) {
    return (0, Nn.jsx)("div", {
      ...t,
      role: e,
      ...i,
      className: g(o, i.className),
      ref: r,
    });
  });
}
function qi(o) {
  if (typeof o != "string") return NaN;
  let t = !o.includes("ms") && o.includes("s"),
    n = Number.parseFloat(o);
  return t && (n *= 1e3), n;
}
var Q = u(D()),
  Zi = u(Lt());
var Oe = u(D());
var Ct = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var vo = u(b());
function ji(o) {
  let {
      target: e,
      visibilityObserver: t,
      className: n,
      style: i,
      bEnablePointerEvents: r,
      direction: a = "right",
      nBodyAlignment: s = 0.5,
      nBodyDistance: c = 8,
      nAllowOffscreenPx: l = 10,
      nMaxLateralMoveOnScreen: d = void 0,
      onNoSpace: p,
      bTopmost: m,
      children: C,
      ...v
    } = o,
    [_, w] = Oe.useState(void 0),
    [O, J] = Oe.useState(void 0),
    [y, G] = Oe.useState(!1),
    [B, U] = Oe.useState(!1),
    [W, Y] = Oe.useState(null),
    N = Oe.useCallback(() => {
      let mt = e;
      if (!W || !mt || (y && t && !t.visible)) return;
      let _e = mt.ownerDocument.defaultView;
      if (!_e || _e.closed) return;
      let ot = W.querySelector(".hover_arrow.left"),
        ft = W.querySelector(".hover_arrow.right"),
        We = W.querySelector(".hover_arrow.top"),
        Te = W.querySelector(".hover_arrow.bottom"),
        Ve = mt.getBoundingClientRect(),
        gt = W.getBoundingClientRect(),
        ht = a == "overlay" || a == "overlay-center";
      ot && ot.setAttribute("style", "display: none;"),
        ft && ft.setAttribute("style", "display: none;"),
        We && We.setAttribute("style", "display: none;"),
        Te && Te.setAttribute("style", "display: none;");
      let it = a,
        {
          nLeft: He,
          nTop: Ee,
          nOverflow: Ge,
          nLateralOverflow: jt,
        } = Qi(a, s, c, Ve, gt, _e.innerWidth, _e.innerHeight);
      if (Ge > (l ?? 10) && !ht) {
        let Le = Ea(a ?? "right"),
          {
            nLeft: rt,
            nTop: Jt,
            nOverflow: Ue,
            nLateralOverflow: Zt,
          } = Qi(Le, s, c, Ve, gt, _e.innerWidth, _e.innerHeight);
        if (
          (Ue < Ge && ((it = Le), (He = rt), (Ee = Jt), (Ge = Ue), (jt = Zt)),
          Ge > (l ?? 10))
        ) {
          console.log(
            "Not showing hover because it didn't fit in the main or alt direction",
          ),
            W.setAttribute("style", "display: none;"),
            U(!0),
            p?.();
          return;
        }
      }
      d !== 0 && !ht && ([Ee, He] = La(d, jt, it ?? "right", Ee, He));
      let oe = null;
      switch (it) {
        case "left":
          oe = ft;
          break;
        case "right":
          oe = ot;
          break;
        case "top":
          oe = Te;
          break;
        case "bottom":
          oe = We;
          break;
      }
      oe && oe.setAttribute("style", ""),
        He != _ && w(He),
        Ee != O && J(Ee),
        y || G(!0);
    }, [e, W, y, t, a, s, c, l, d, _, O, p]);
  Oe.useEffect(() => N(), [N]);
  let Be = Object.assign({ left: _, top: O }, i),
    Qt = !t || t.visible;
  return (0, vo.jsx)("div", {
    className: g(Ct.HoverPositionOuter, m && Ct.HoverAboveModal),
    children: (0, vo.jsx)("div", {
      ...v,
      className: g(
        Ct.HoverPosition,
        Qt && y && Ct.Ready,
        B && Ct.NoSpace,
        r && Ct.EnablePointerEvents,
        n,
      ),
      style: Be,
      ref: Y,
      children: C,
    }),
  });
}
function Ea(o) {
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
function Qi(o, e, t, n, i, r, a) {
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
        (m = In(n.top, n.height, i.height, e)),
        (C = Math.max(0, p + i.width - s)),
        (v = [Math.max(0, l - m), Math.max(0, m + i.height - c)]);
      break;
    case "left":
      (p = n.left - t - i.width),
        (m = In(n.top, n.height, i.height, e)),
        (C = Math.max(0, d - p)),
        (v = [Math.max(0, l - m), Math.max(0, m + i.height - c)]);
      break;
    case "bottom":
      (p = In(n.left, n.width, i.width, e)),
        (m = n.bottom + t),
        (C = Math.max(0, m + i.height - c)),
        (v = [Math.max(0, d - p), Math.max(0, p + i.width - s)]);
      break;
    case "top":
      (p = In(n.left, n.width, i.width, e)),
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
function In(o, e, t, n) {
  return Math.max(0, Math.min(1, n)) * (e - t) + o;
}
function La(o, e, t, n, i) {
  let r = Math.max(e[0], e[1]);
  o !== void 0 && (r = Math.min(o, r)), (r = Math.max(0, r));
  let a = e[0] > e[1] ? r : -r;
  return t === "left" || t === "right" ? (n += a) : (i += a), [n, i];
}
var Ji = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var Z = u(b()),
  $i = Q.createContext({}),
  Oa = () => Q.useContext($i);
function Ki(o) {
  let [e, t] = Q.useState(null),
    n = Q.useMemo(() => ({ targetElement: e }), [e]);
  return (0, Z.jsxs)($i.Provider, {
    value: n,
    children: [(0, Z.jsx)("div", { ref: t }), o.children],
  });
}
function An(o) {
  let { divProps: e, tooltipProps: t } = _o({
    ...o,
    toolTipContent: o.toolTipContent
      ? (0, Z.jsx)(nr, { children: tr(o.toolTipContent) })
      : null,
  });
  return (0, Z.jsxs)(ze, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: o.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, Z.jsx)(Do, { ...t }), o.children],
  });
}
function er(o) {
  let { divProps: e, tooltipProps: t } = _o(o);
  return (0, Z.jsxs)(ze, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: o.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, Z.jsx)(Do, { ...t }), o.children],
  });
}
function Bl(o) {
  let { children: e } = o,
    { divProps: t, tooltipProps: n } = _o({
      ...o,
      toolTipContent: o.toolTipContent
        ? (0, Z.jsx)(nr, { children: tr(o.toolTipContent) })
        : null,
    });
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      Q.cloneElement(e, { ...t, ...e.props }),
      (0, Z.jsx)(Do, { ...n }),
    ],
  });
}
function _o(o) {
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
    w = {
      direction: i,
      nBodyAlignment: r,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: c,
      className: l,
      bTopmost: p,
    },
    [O, J] = Q.useState(!1),
    [y, G] = Q.useState(),
    B = Q.useCallback(
      (N) => {
        (m && "pointerType" in N && N.pointerType != "mouse") ||
          (J(!0), G(N.currentTarget));
      },
      [m],
    ),
    U = Q.useCallback(() => {
      J(!1);
    }, []),
    W = {
      active: O && !n,
      target: y,
      nDelayShowMS: t,
      hoverPositionProps: w,
      children: e,
    },
    Y = { ..._ };
  return (
    m
      ? ((Y.onPointerEnter = B), (Y.onPointerLeave = U))
      : ((Y.onMouseEnter = B), (Y.onMouseLeave = U)),
    {
      divProps: Y,
      stateHandlers: { setTarget: G, setHovered: J },
      tooltipProps: W,
    }
  );
}
function tr(o) {
  return typeof o == "string" ? x(o) : o;
}
function nr(o) {
  return (0, Z.jsx)("div", { ...o, className: g(Ji.TextToolTip, o.className) });
}
function Do(o) {
  let {
      active: e,
      target: t,
      nDelayShowMS: n = 300,
      hoverPositionProps: i,
      children: r,
    } = o,
    [a, s] = Q.useState(e),
    c = Oa();
  if (
    (Q.useEffect(() => {
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
  return Zi.createPortal(
    (0, Z.jsx)(ji, { target: t, ...i, children: r }),
    l ?? t.ownerDocument.body,
  );
}
var or = "me1BHzZX9A0-";
var yn = u(b());
function Qe(o) {
  let e = o.customTooltip ? er : An;
  return (0, yn.jsxs)(e, {
    toolTipContent: o.tooltip,
    className: g(or, "HelperTooltip", o.className),
    children: [" ", (0, yn.jsx)(Li, {})],
  });
}
var Ro = u(D()),
  Fn = Ro.default.createContext({}),
  So = () => Ro.default.useContext(Fn);
function ge(o, e) {
  return So()[o] ?? e;
}
var xe = {
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
var vt = u(b());
function ir(o) {
  let e = ge("ToggleControl", Ia);
  return (0, vt.jsx)(e, { ...o });
}
function Ia(o) {
  let { value: e, onChange: t, disabled: n } = o;
  return (0, vt.jsxs)("div", {
    className: g(xe.Toggle, n && xe.Disabled),
    onClick: () => !n && t && t(!e),
    children: [
      (0, vt.jsx)("div", { className: xe.ToggleRail }),
      (0, vt.jsx)("div", {
        className: g(xe.ToggleRail, xe.Highlight, e ? xe.On : xe.Off),
      }),
      (0, vt.jsx)("div", { className: g(xe.ToggleSwitch, e ? xe.On : xe.Off) }),
    ],
  });
}
var S = u(b());
function Bn(o) {
  return V.forwardRef(function (t, n) {
    return (0, S.jsx)(I, { ...t, className: g(o, t.className), ref: n });
  });
}
var Aa = V.createContext(null),
  Wn = V.forwardRef(function (e, t) {
    let { id: n, className: i, ...r } = e,
      s = V.useContext(Aa)?.setHeaderId,
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
  lc = Pe("DialogSubHeader", "heading", { "aria-level": 3 }),
  cc = Pe("SettingsDialogSubHeader", "heading", { "aria-level": 3 }),
  ar = Pe("DialogFooter"),
  ya = Pe("DialogLabel _DialogLayout"),
  sr = Pe("DialogBodyText"),
  dc = Pe("DialogBody"),
  lr = Bn("DialogBody"),
  uc = Pe("DialogInnerBody"),
  pc = Pe("DialogControlsSection"),
  mc = Pe("DialogControlsSectionHeader", "heading", { "aria-level": 3 });
var Fa = Bn("DialogTwoColLayout _DialogColLayout"),
  ka = Bn("DialogThreeColLayout _DialogColLayout"),
  fc = Bn("DialogTwoThirdColLayout _DialogColLayout"),
  gc = Pe("DialogColumn _DialogLayout");
function Po(o) {
  let e = ge("Content", Ba);
  return (0, S.jsx)(e, { ...o });
}
function Ba(o) {
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
var kn = class extends V.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, S.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
f([h], kn.prototype, "OnSubmit", 1);
function cr(o) {
  let { classNameContent: e, bCenterVertically: t, ...n } = o;
  return (0, S.jsx)(Po, {
    className: e,
    bCenterVertically: t,
    children: (0, S.jsx)(kn, { ...n }),
  });
}
function dr(o) {
  let { label: e, tooltip: t, className: n, children: i } = o;
  return (0, S.jsxs)("label", {
    className: g("DialogInputLabelGroup", "_DialogLayout", n),
    children: [
      e &&
        (0, S.jsxs)(ya, {
          children: [e, " ", t && (0, S.jsx)(Qe, { tooltip: t }), " "],
        }),
      i,
    ],
  });
}
var an = V.forwardRef(function (e, t) {
    let n = So(),
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
    return (0, S.jsxs)(En, {
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
  rn = V.forwardRef(function (e, t) {
    return (0, S.jsx)(an, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  he = V.forwardRef(function (e, t) {
    return (0, S.jsx)(an, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  hc = V.forwardRef(function (e, t) {
    return (0, S.jsx)(an, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  bc = V.forwardRef(function (e, t) {
    return (0, S.jsx)(an, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  Cc = V.forwardRef(function (e, t) {
    return (0, S.jsx)(an, {
      type: "button",
      ...e,
      ref: t,
      className: g(e.className, "TextButton"),
    });
  });
function ur(o) {
  return (0, S.jsxs)(Fa, {
    className: o.className,
    children: [
      (0, S.jsxs)(rn, {
        onClick: o.onOK,
        disabled: o.bOKDisabled,
        autoFocus: o.focusButton == "primary",
        children: [o.strOKText || x("#Button_Confirm"), " "],
      }),
      (0, S.jsx)(he, {
        onClick: o.onCancel,
        disabled: o.bCancelDisabled,
        autoFocus: o.focusButton == "secondary",
        children: o.strCancelText || x("#Button_Cancel"),
      }),
    ],
  });
}
function pr(o) {
  let e = o.bOKDisabled ? he : rn,
    t = o.bOKDisabled ? rn : he;
  return (0, S.jsxs)(ka, {
    children: [
      (0, S.jsxs)(e, {
        onClick: o.onOK,
        disabled: o.bOKDisabled,
        children: [o.strOKText || x("#Button_Confirm"), " "],
      }),
      (0, S.jsxs)(t, {
        onClick: o.onUpdate,
        disabled: o.bUpdateDisabled,
        children: [o.strUpdateText || x("#Button_Update"), " "],
      }),
      (0, S.jsx)(he, {
        onClick: o.onCancel,
        disabled: o.bCancelDisabled,
        children: o.strCancelText || x("#Button_Cancel"),
      }),
    ],
  });
}
var at = class extends V.Component {
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
f([h], at.prototype, "Toggle", 1),
  f([h], at.prototype, "KeyDown", 1),
  f([h], at.prototype, "SetChecked", 1);
var vc = V.forwardRef(function (e, t) {
    let n = ge("ToggleField", on);
    return (0, S.jsx)(n, { ref: t, ...e });
  }),
  on = class extends at {
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
                      (0, S.jsx)(Qe, { tooltip: this.props.tooltip }),
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
                  children: (0, S.jsx)(ir, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, S.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, S.jsxs)(I, {
                    className: "DialogToggleField_OptionPanel",
                    onOKButton: this.Toggle,
                    children: [
                      (0, S.jsx)("div", {
                        className:
                          "DialogToggleField_Option Off" +
                          (this.checked ? "" : " Active"),
                        children: x("#Dialog_Off"),
                      }),
                      (0, S.jsx)("div", {
                        className:
                          "DialogToggleField_Option On" +
                          (this.checked ? " Active" : ""),
                        children: x("#Dialog_On"),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
f([h], on.prototype, "OnOffKeyDown", 1),
  f([h], on.prototype, "OnNewUIToggle", 1);
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
var Ne = u(D());
var Vn = class extends Ui {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, t, n) {
    super(ui(e.ref.current), n),
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
  Wa = Ne.forwardRef(function (e, t) {
    let n = ge("InputElement", It);
    return (0, T.jsx)(n, { ...e, ref: t });
  }),
  st = class st extends Ne.PureComponent {
    m_CopiedAnimation;
    ref = Ne.createRef();
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
          this.props.mustBeURL == !0 && !st.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !st.validateEmail(this.m_elInput?.value),
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
            (this.m_CopiedAnimation = new Vn(
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
      z(
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
          maxChars: w,
          ...O
        } = this.props,
        J =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (O.className ? " " + O.className : ""),
        y = "copiedAnimation",
        G = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (y = "copiedAnimation animationPlaying"),
        G && (y = "copiedAnimation animationComplete");
      let B = {};
      this.state.m_CopiedYPos !== void 0 &&
        (B.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let U = (0, T.jsxs)(Ne.Fragment, {
        children: [
          (0, T.jsxs)(I, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, T.jsx)(Wa, {
                type: "text",
                ...O,
                className: J,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              i &&
                (0, T.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, T.jsx)(he, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: x("#Button_Copy"),
                    }),
                    (0, T.jsx)("div", {
                      style: B,
                      className: y,
                      children: x("#Button_Copied"),
                    }),
                  ],
                }),
              (a || (r && O.value)) &&
                (0, T.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, T.jsx)(yt, {}),
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
                      (0, T.jsx)(Qe, { tooltip: this.props.tooltip }),
                    (0, T.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                U,
                this.state.m_bNumberBelowMinRange
                  ? (0, T.jsxs)("div", {
                      children: [" ", x("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, T.jsxs)("div", {
                      children: [" ", x("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, T.jsxs)("div", {
                      children: [" ", x("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, T.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, T.jsxs)("div", {
                      children: [" ", x("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, T.jsxs)("div", {
                      children: [" ", x("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, T.jsxs)("div", {
                      children: [
                        " ",
                        Pi("#Input_Error_TooManyCharacters", w),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : U;
    }
  };
f([h], st.prototype, "OnInputRef", 1),
  f([h], st.prototype, "OnChanged", 1),
  f([h], st.prototype, "OnCopyClick", 1),
  f([h], st.prototype, "OnClearClick", 1);
var _t = st,
  sn = class extends _t {
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
        inlineControls: w,
        className: O,
        children: J,
        ...y
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
              children: (0, T.jsxs)(I, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  Ne.Children.map(J, (G, B) =>
                    (0, T.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: G,
                      },
                      B,
                    ),
                  ),
                  (0, T.jsx)(It, {
                    type: "text",
                    ...y,
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
f([h], sn.prototype, "OnBackgroundClick", 1),
  f([h], sn.prototype, "OnInputFocus", 1),
  f([h], sn.prototype, "OnInputBlur", 1);
var mr = u(D());
var Ie = u(b()),
  xo = (o, e) =>
    "" + (o != null ? Number.parseFloat(o.toFixed(3)) : null) + (e ?? "");
var je = class extends mr.Component {
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
      s = this.props.renderValue ?? xo;
    return (0, Ie.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        n &&
          (0, Ie.jsxs)("div", {
            className: "DialogLabel",
            children: [n, !!r && (0, Ie.jsx)(Qe, { tooltip: r })],
          }),
        (0, Ie.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, Ie.jsx)("div", { className: "DialogSlider_Value", style: e }),
            (0, Ie.jsx)("div", { className: "DialogSlider_Grabber", style: t }),
          ],
        }),
        this.props.showValue &&
          (0, Ie.jsx)("div", {
            className: "DialogLabelExplainer",
            children: s(this.props.value, this.props.valueSuffix),
          }),
        i &&
          (0, Ie.jsx)("div", {
            className: "DialogLabelExplainer",
            children: i,
          }),
      ],
    });
  }
};
f([h], je.prototype, "OnMouseDown", 1),
  f([h], je.prototype, "OnMouseMove", 1),
  f([h], je.prototype, "OnMouseUp", 1),
  f([h], je.prototype, "OnTouchStart", 1),
  f([h], je.prototype, "OnTouchMove", 1),
  f([h], je.prototype, "OnTouchEnd", 1),
  f([h], je.prototype, "OnKeyDown", 1);
var fr = u(D());
var Ha = u(b()),
  Va = { setValue: () => {} },
  Jc = fr.default.createContext(Va);
var te = u(D());
var ln = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var F = u(b());
function Je(o) {
  return typeof o == "object" && "data" in o;
}
function Dt(o) {
  return typeof o == "object" && "bIsSeparator" in o;
}
function ye(o) {
  return typeof o == "object" && "options" in o;
}
function wo(o, e) {
  if (o === e) return !0;
  if (!Array.isArray(o) || !Array.isArray(e) || o.length != e.length) return !1;
  for (let t = 0; t < o.length; t++) if (!To(o[t], e[t])) return !1;
  return !0;
}
function To(o, e) {
  return o == null || e == null
    ? o == e
    : Dt(o) && Dt(e)
      ? !0
      : !(
          Dt(o) ||
          Dt(e) ||
          o.label !== e.label ||
          o.tooltip !== e.tooltip ||
          ye(o) != ye(e) ||
          (ye(o) && ye(e) && !wo(o.options, e.options)) ||
          (Je(o) && Je(e) && o.data !== e.data)
        );
}
function Hn(o, e) {
  if (o != null)
    for (let t = 0; t < o.length; t++) {
      let n = o[t];
      if (Je(n) && n.data === e) return n;
      if (ye(n)) {
        let i = Hn(n.options, e);
        if (i != null) return i;
      }
    }
}
function Ga(o) {
  let e = ge("DropDownField", Ua);
  return (0, F.jsx)(e, { ...o });
}
function Ua(o) {
  let {
    label: e,
    tooltip: t,
    strClassName: n,
    dropDownControlRef: i,
    ...r
  } = o;
  return (0, F.jsx)(dr, {
    label: e,
    tooltip: t,
    className: n,
    children: (0, F.jsx)(Ae, { menuLabel: e, ...r, ref: i }),
  });
}
var Ya = te.forwardRef(function (e, t) {
    return (0, F.jsxs)(En, {
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
        (0, F.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: e.children,
        }),
        !e.disabled &&
          (0, F.jsx)("div", {
            className: g(e.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, F.jsx)(Mi, { role: "presentation" }),
          }),
      ],
    });
  }),
  Ae = class extends te.Component {
    static contextType = Fn;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: Hn(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let t = Hn(this.props.rgOptions, e);
      To(t, this.value) || this.setState({ value: t });
    }
    get value() {
      return this.props.controlled
        ? Hn(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, t, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        t.bOpened !== this.state.bOpened ||
        !wo(this.props.rgOptions, e.rgOptions) ||
        !To(t.value, this.value)
      )
        return !0;
      let i = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let r of i) if (e[r] !== this.props[r]) return !0;
      return !1;
    }
    componentDidUpdate(e, t) {
      z(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let n = !wo(e.rgOptions, this.props.rgOptions),
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
      (this.m_iMenuInstance = en(
        (0, F.jsx)(za, {
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
      hr(e, this.props.rgOptions.filter(Je), this.value?.data, (t) =>
        this.OnValueSelected(void 0, t),
      );
    }
    render() {
      let e = this.value?.label ?? this.props.strDefaultLabel;
      this.props.renderButtonValue != null &&
        (e = this.props.renderButtonValue(e));
      let t = this.props.focusable ?? !0,
        n = this.props.renderButton || this.context.DropDownControlButton || Ya;
      return (0, F.jsx)(n, {
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
f([h], Ae.prototype, "OnInputRef", 1),
  f([h], Ae.prototype, "ToggleMenu", 1),
  f([h], Ae.prototype, "OnValueSelected", 1),
  f([h], Ae.prototype, "ShowMenu", 1),
  f([h], Ae.prototype, "HideMenu", 1),
  f([h], Ae.prototype, "OnKeyDown", 1);
var gr = te.createContext(null);
function za(o) {
  let e = ge("DropDownMenu", Xa);
  return (0, F.jsx)(gr.Provider, {
    value: {},
    children: (0, F.jsx)(e, { ...o }),
  });
}
function hr(o, e, t, n) {
  let i;
  if (o.key === "ArrowDown")
    i = (e.findIndex((a) => a.data === t) + 1) % e.length;
  else if (o.key === "ArrowUp") {
    let r = e.findIndex((a) => a.data === t);
    i = r <= 0 ? e.length - 1 : r - 1;
  }
  i !== void 0 && (n(e[i]), o.preventDefault());
}
function Xa(o) {
  let {
      rgOptions: e,
      strDropDownItemClassName: t,
      onValueSelected: n,
      selectedValue: i,
    } = o,
    [r, a] = te.useState(i),
    s = te.useMemo(() => e.filter(Je), [e]),
    c = te.useCallback(
      (l) => {
        hr(l, s, r, (d) => a(d.data));
      },
      [r, s],
    );
  return (0, F.jsx)("div", {
    className: g(
      ln.DialogDropDownMenu,
      "_DialogInputContainer",
      o.strDropDownMenuCtnClass,
    ),
    onKeyDown: c,
    children: (0, F.jsx)(br, {
      rgOptions: e,
      strDropDownItemClassName: t,
      onValueSelected: n,
      activeValue: r,
      setActiveValue: a,
    }),
  });
}
function br(o) {
  let { rgOptions: e, ...t } = o;
  return e.map((n, i) =>
    Dt(n)
      ? (0, F.jsx)(
          "hr",
          {
            className: g(
              ln.DialogDropDownMenu_Item,
              ln.DialogDropDownMenu_Separator,
            ),
          },
          i,
        )
      : ye(n)
        ? (0, F.jsx)(br, { ...t, rgOptions: n.options }, i)
        : (0, F.jsx)(qa, { ...t, option: n }, i),
  );
}
function qa(o) {
  let {
      option: e,
      strDropDownItemClassName: t,
      onValueSelected: n,
      activeValue: i,
      setActiveValue: r,
    } = o,
    a = te.useCallback((l) => l && l.focus(), []),
    s = te.useCallback(() => {
      r(e.data);
    }, [r, e]),
    c = e.data === i;
  return (0, F.jsx)("button", {
    type: "button",
    className: g(
      ln.DialogDropDownMenu_Item,
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
      ? (0, F.jsx)(An, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, F.jsx)("div", { children: e.label }),
  });
}
var Mo = class extends te.Component {
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
      (0, F.jsx)(Ga, { ...i, rgOptions: r, onMenuOpened: this.OnMenuOpened })
    );
  }
};
f([h], Mo.prototype, "OnMenuOpened", 1);
var ja = u(D());
var Cr = u(b());
var ce = u(D());
var vr = u(Ta());
var Eo = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new Lo(e, !1);
  }
};
var Lo = class {
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
          (this.m_reactRoot = vr.createRoot(this.m_container)),
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
      return this.m_container && Tn(this.m_container, e);
    }
  },
  Gn = class {
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
      return t || ((t = new Eo(e.body)), this.m_mapEmbeddedHovers.set(e, t)), t;
    }
  };
var ie = u(b()),
  cn = new fi("DragDrop").Debug;
var Oo = class extends ce.Component {
  m_coordinator = new Un();
  OnDrop(e, t) {
    t > e && t--, t != e && this.props.onReorder(e, t);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, ie.jsx)(
          Xn,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (n) => n.props.data != 0,
            fnOnDrop: (n) => this.OnDrop(n.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      ce.Children.forEach(this.props.children, (n, i) => {
        let r = n.props.id || "__list_" + i,
          a = i + 1;
        e.push(
          (0, ie.jsx)(
            be,
            { coordinator: this.m_coordinator, data: i, children: n },
            r,
          ),
        ),
          e.push(
            (0, ie.jsx)(
              Xn,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (s) => s.props.data != a,
                fnOnDrop: (s) => this.OnDrop(s.props.data, a),
              },
              "dropregion_" + r,
            ),
          );
      }),
      (0, ie.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
f([h], Oo.prototype, "OnDrop", 1);
function Ja(o) {
  if ("touches" in o) {
    let e = o;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [o.clientX, o.clientY];
}
function No(o, e, t, n) {
  return n
    ? t && o > t.left && o < t.right && e > t.top && e < t.bottom
    : t && o >= t.left && o <= t.right && e >= t.top && e <= t.bottom;
}
var Un = class {
  m_embeddedElement = new Gn("DragGhosts");
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
    $t(this.m_rgDropRegions, e),
      $t(this.m_rgActiveDropRegions, e),
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
      n = ce.cloneElement(e, { ref: this.OnDragGhostRef, className: t });
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
    z(
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
        if (No(i, r, p) && !No(l, d, p, !0)) {
          let m = xn(l, p.left, p.right, p.left - 200, p.right + 200),
            C = xn(d, p.top, p.bottom, p.top - 100, p.bottom + 100),
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
f([h], Un.prototype, "OnDragGhostRef", 1);
var _r = 5,
  be = class extends ce.Component {
    constructor(e) {
      super(e), qe(this);
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
    m_divRef = ce.createRef();
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
      cn("ProcessDragMove", e, this.props.data);
      let [t, n] = Ja(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(t - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(n - (this.m_DragInfo.startClientY ?? 0), 2) >=
          _r * _r &&
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
      cn("ResetDragState", this.props.data),
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
      cn("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
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
      cn("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      cn(
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
        (0, ie.jsx)("div", {
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
        : (0, ie.jsx)(Yn, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, ie.jsx)(zn, {
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
f([h], be.prototype, "ProcessDragMove", 1),
  f([h], be.prototype, "OnMouseDown", 1),
  f([h], be.prototype, "OnMouseUp", 1),
  f([h], be.prototype, "OnTouchStart", 1),
  f([h], be.prototype, "OnTouchEnd", 1),
  f([_i], be.prototype, "ResetDragState", 1),
  f([h], be.prototype, "OnHTMLDragStart", 1),
  f([h], be.prototype, "OnHTMLDrag", 1),
  f([h], be.prototype, "OnHTMLDragEnd", 1);
var Yn = class extends ce.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, ie.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
f([h], Yn.prototype, "OnRef", 1);
var zn = class extends ce.Component {
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
      return (0, ie.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      t = xn(
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
    return (0, ie.jsx)("div", {
      className: i,
      style: e,
      children: (0, ie.jsx)("div", { ref: this.OnRef, style: n }),
    });
  }
};
f([h], zn.prototype, "OnRef", 1);
var Io = class extends ce.Component {
    m_divRef = ce.createRef();
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
      return No(e, t, this.GetClientRect());
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
      return (0, ie.jsxs)(ze, {
        ref: Mn(d, this.m_divRef),
        className: m,
        ...p,
        focusable: l === void 0 ? !!p.onClick : l,
        children: [this.state.dropGhost, c],
      });
    }
  },
  Xn = class extends Io {
    BDraggableInRegion(e, t, n) {
      let i = this.GetClientRect();
      return i
        ? e >= i.left && e <= i.right && t >= i.top - 20 && t <= i.bottom + 20
        : !1;
    }
  };
var M = u(D());
var Fe = {
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
  Za = "separator",
  $a = "spacer",
  dn = class {
    constructor() {
      qe(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
f([Xe], dn.prototype, "m_flPageListScrollTop", 2),
  f([Xe], dn.prototype, "m_flPageScrollTop", 2);
var Rt = class Rt {
  static s_Instance;
  static Get() {
    return Rt.s_Instance || (Rt.s_Instance = new Rt()), Rt.s_Instance;
  }
  constructor() {
    qe(this);
  }
  m_setPagedSettingsInstances = new Set();
};
f([Xe], Rt.prototype, "m_setPagedSettingsInstances", 2);
var qn = Rt;
function Ka(o) {
  let {
      stylesheet: e,
      pages: t,
      iActivePage: n,
      onPageSelected: i,
      PageListItemComponent: r = es,
      PageListSeparatorComponent: a = ts,
    } = o,
    s = M.useContext(Qn);
  return t.map((c, l) => {
    let d = l === n;
    if (c === Za) {
      let p = l === n + 1 || l === n - 1;
      return (0, E.jsx)(a, { role: "separator", bTransparent: p }, l);
    } else {
      if (c === $a)
        return (0, E.jsx)("div", { className: Fe.PageListSpacer }, l);
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
function es(o) {
  let { title: e, icon: t, active: n, className: i, onClick: r, ...a } = o;
  return (0, E.jsxs)("div", {
    className: i,
    onClick: r,
    ...a,
    children: [
      t
        ? (0, E.jsx)("div", { className: Fe.PageListItem_Icon, children: t })
        : null,
      (0, E.jsx)("div", {
        className: Fe.PageListItem_Title,
        ...a,
        children: e,
      }),
    ],
  });
}
var Rr = M.forwardRef(function (e, t) {
  let { activePage: n, style: i, stylesheet: r } = e,
    a = M.useContext(Qn),
    s = n?.padding ?? "standard";
  return (0, E.jsxs)(Po, {
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
      !n?.hideTitle && (0, E.jsx)(Wn, { children: n?.title }),
      (0, E.jsx)(le, { children: n?.content }),
    ],
  });
});
function ts(o) {
  let { bTransparent: e, className: t, ...n } = o;
  return (0, E.jsx)("div", {
    className: g(t, Fe.PageListSeparator, { [Fe.Transparent]: e }),
    ...n,
  });
}
var Qn = M.createContext(void 0),
  Pr = M.forwardRef(function (e, t) {
    let { stylesheet: n = Fe, pages: i, onPageRequested: r } = e,
      a = M.useId(),
      s = e.page == null,
      [c, l] = M.useState(() =>
        e.startingPage === void 0
          ? -1
          : i.findIndex(
              (N) => typeof N == "object" && N.identifier === e.startingPage,
            ),
      ),
      d = c;
    s ||
      (d = i.findIndex((N) => typeof N == "object" && N.identifier === e.page)),
      (d < 0 || d >= i.length) && (d = 0);
    let p = null;
    typeof i[d] == "object" && (p = i[d]);
    let m = M.useRef(null),
      C = M.useCallback(() => m.current?.TakeFocus() || !1, [m]),
      [v, _] = M.useState(!1),
      w = v ? C : void 0,
      O = M.useCallback((N) => {
        N && _(!0);
      }, []),
      J = M.useCallback(
        (N, Be) => {
          _(!0),
            Re.PlayNavSound(15),
            r && r(Be.identifier),
            Be.click ? Be.click() : s && l(N);
        },
        [s, r],
      ),
      y = M.useRef(null),
      G = (N) => {
        N.detail.button == 1 && y.current?.TakeFocus(N.detail.button);
      },
      B = e.showTitle ?? !0,
      U = g("DialogContentTransition", n.PagedSettingDialog_ContentColumn);
    M.useEffect(() => {
      e.bAutoFocusPageContent && y.current?.TakeFocus();
    }, []);
    let { refForPageList: W, refForPage: Y } = is();
    return (0, E.jsx)(Qn.Provider, {
      value: a,
      children: (0, E.jsxs)(I, {
        className: g(n.PagedSettingsDialog, e.className),
        ref: t,
        children: [
          (0, E.jsxs)(I, {
            className: g(
              n.PagedSettingsDialog_PageListColumn,
              e.hideList && Fe.Hidden,
              "PageListColumn",
            ),
            navRef: m,
            onButtonDown: G,
            onFocusWithin: O,
            children: [
              B &&
                (0, E.jsx)("div", {
                  className: n.PagedSettingsDialog_Title,
                  children: e.title,
                }),
              e.topControls && (0, E.jsx)("div", { children: e.topControls }),
              (0, E.jsx)(I, {
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
                ref: W,
                children: (0, E.jsx)(Ka, {
                  stylesheet: n,
                  pages: i,
                  iActivePage: d,
                  onPageSelected: J,
                  PageListItemComponent: e.PageListItemComponent,
                  PageListSeparatorComponent: e.PageListSeparatorComponent,
                }),
              }),
              e.bottomControls &&
                (0, E.jsx)("div", { children: e.bottomControls }),
            ],
          }),
          (0, E.jsxs)(I, {
            className: U,
            onCancelButton: w,
            navRef: y,
            children: [
              e.toggleHideList &&
                (0, E.jsx)(os, {
                  hideList: e.hideList,
                  toggleHideList: e.toggleHideList,
                }),
              e.renderPageContent
                ? e.renderPageContent(p, Y, Rr)
                : (0, E.jsx)(Rr, { ref: Y, activePage: p, stylesheet: n }),
            ],
          }),
        ],
      }),
    });
  });
var ns = M.createContext(!1);
var qd = M.memo(function (e) {
  let {
      isActive: t,
      refForPage: n,
      page: i,
      PageComponent: r,
      stylesheet: a,
    } = e,
    s = M.useContext(Qn),
    c = M.useRef(!1);
  if (!t && !c.current) return null;
  c.current = !0;
  let l = t ? void 0 : { display: "none" };
  return (0, E.jsx)(ns.Provider, {
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
function os(o) {
  let { hideList: e, toggleHideList: t } = o;
  return (0, E.jsx)("div", {
    className: g(Fe.HidePageListButton, e && Fe.ListHidden),
    onClick: t,
    children: e
      ? (0, E.jsx)(ho, { direction: "right" })
      : (0, E.jsx)(ho, { direction: "left" }),
  });
}
function is() {
  let o = M.useMemo(() => new dn(), []);
  M.useEffect(
    () => (
      qn.Get().m_setPagedSettingsInstances.add(o),
      () => {
        qn.Get().m_setPagedSettingsInstances.delete(o);
      }
    ),
    [o],
  );
  let e = M.useCallback(
      (l) => (o.m_flPageListScrollTop = l.currentTarget.scrollTop),
      [o],
    ),
    t = M.useCallback(
      (l) => (o.m_flPageScrollTop = l.currentTarget.scrollTop),
      [o],
    ),
    n = uo("scroll", e),
    i = uo("scroll", t),
    r = M.useCallback(
      (l) => (o.m_flPageListScrollTop = l?.scrollTop ?? 0),
      [o],
    ),
    a = M.useCallback((l) => (o.m_flPageScrollTop = l?.scrollTop ?? 0), [o]),
    s = De(n, r),
    c = De(i, a);
  return { refForPageList: s, refForPage: c };
}
var jn = u(D());
var xr = u(b()),
  lt = class extends jn.Component {
    m_refTextArea = jn.createRef();
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
      return (0, xr.jsx)(vi, {
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
f([h], lt.prototype, "InternalOnInput", 1),
  f([h], lt.prototype, "OnKeyUp", 1),
  f([h], lt.prototype, "OnBlur", 1),
  f([h], lt.prototype, "OnClick", 1),
  f([h], lt.prototype, "OnPaste", 1),
  f([h], lt.prototype, "OnCut", 1);
var ne = u(D());
var ke = u(D());
var Mr = { m_unPID: 0, m_nBrowserID: -1 };
var un = class {
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
      $t(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
f([h], un.prototype, "OnLinkLoad", 1);
var rs = u(D());
function yo() {
  return Ri() ? 256 : 0;
}
function mn(o) {
  let e = 0;
  switch (o) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= mn(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= mn(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= yo()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= yo()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= yo()),
        e
      );
  }
}
function wr() {
  let { ownerWindow: o } = ae();
  return Me.GetPopupForWindow(o)?.browser_info || Mr;
}
var Tr = ke.createContext({ ownerWindow: window }),
  ae = () => ke.useContext(Tr);
function Er(o) {
  let { ownerWindow: e, children: t } = o,
    n = ke.useMemo(() => ({ ownerWindow: e }), [e]);
  return ke.createElement(Tr.Provider, { value: n }, t);
}
var re = class {
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
    qe(this),
      z(
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
    let n = Me.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let i, r, a;
    n
      ? ((r = n.m_element),
        (i = n.m_popup),
        (a = n.m_renderWhenReady),
        Me.RemoveTrackedPopup(n),
        n.ReleasePopup(),
        i?.removeEventListener("beforeunload", n.OnBeforeUnloadEvent),
        i?.removeEventListener("unload", n.OnUnload),
        i?.removeEventListener("resize", n.OnResizeEvent),
        i?.removeEventListener("focus", this.OnFocusInternal),
        i?.removeEventListener("blur", this.OnBlurInternal),
        i?.removeEventListener("drop", n.OnDrop),
        i?.removeEventListener("dragover", n.OnDragOver),
        i?.removeEventListener("message", this.OnMessage))
      : (({ popup: i, element: r } = pn.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new un(i?.document, r))),
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
        Ye.LANGUAGE &&
          i.document.documentElement.setAttribute("lang", xi() ?? ""),
        (this.m_popup = i),
        (this.m_element = r),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, t);
        })),
      Me.AddTrackedPopup(this),
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
      Xi(this.browser_info.m_eBrowserType) &&
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
      Me.RemoveTrackedPopup(this),
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
      (Se(this.m_popup.window, "Window.Close")
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
    return Se(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return Se(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return Se(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
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
f([Xe], re.prototype, "m_bFocused", 2),
  f([h], re.prototype, "OnMessage", 1),
  f([h], re.prototype, "RenderInternal", 1),
  f([h], re.prototype, "OnCreateInternal", 1),
  f([h], re.prototype, "OnResizeEvent", 1),
  f([h], re.prototype, "OnBeforeUnloadEvent", 1),
  f([h], re.prototype, "OnUnload", 1),
  f([h], re.prototype, "OnFocusInternal", 1),
  f([h], re.prototype, "OnBlurInternal", 1);
var Fo = class extends re {
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
          (e.strRestoreDetails = Me.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          Me.SetRestoreDetails(
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
            (Me.SetRestoreDetails(e, t, this.m_bExpires),
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
    Me.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
f([h], Fo.prototype, "QueryAndStoreWindowPosition", 1);
var pn = class {
  m_bShuttingDown = !1;
  m_mapPopups = Xe.map([], { deep: !1 });
  m_rgShutdownCallbacks = [];
  m_rgPopupCreatedCallbacks = new se();
  m_rgPopupDestroyedCallbacks = new se();
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
      z(e, "Couldn't find head element"),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let t = mo();
            this.m_mapPopups.forEach((n) => {
              mi(n.window.document, t, !1);
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
    let w = `<!DOCTYPE html><html ${m}><head><title></title></head><body ${C} ${v}><div id="popup_target" ${_}></div></body></html>`;
    return (
      p.document.write(w),
      (p.document.title = a),
      p.document.close(),
      pi(p, mo()),
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
f([h, Oi(100)], pn.prototype, "DebouncedSaveSavedDimensionStore", 1);
var Me = new pn();
window.g_PopupManager = Me;
var Yo = u(D());
var Uo = u(D());
var $r = u(D());
var Jn = class o {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${o.sm_lastKey++}`;
    }
  },
  Pt = class extends Jn {
    element;
    ModalUpdatedCallback = new se();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  St = class extends Jn {
    m_OnElementReadyCallbacks = new se();
    m_OnActiveModalCallbacks = new se();
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
f([h], St.prototype, "RefModalElement", 1);
var Zn = class extends Pt {
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
var ue = u(D()),
  Zr = u(Lt());
var Vt = u(D());
var Ir = u(b()),
  Lr = Vt.default.createContext(null);
function Or(o) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: t = !0,
      children: n,
    } = o,
    r = ae()?.ownerWindow || window,
    a = Vt.default.useRef();
  return (
    a.current || (a.current = new Bi()),
    Vt.default.useLayoutEffect(() => {
      if (t)
        return (
          go.SetMenuManager(r, a.current), () => go.SetMenuManager(r, void 0)
        );
    }, [r, t]),
    Vt.default.useLayoutEffect(
      () => (bt(e, a.current), () => bt(e, void 0)),
      [e],
    ),
    (0, Ir.jsx)(Lr.Provider, { value: a.current, children: n })
  );
}
function Nr() {
  return Vt.default.useContext(Lr);
}
var dt = u(D()),
  yr = u(Lt());
var ct = u(D());
var fn = u(D());
var ss = u(b()),
  as = fn.createContext({ body_class: "" });
function Ar() {
  return fn.useContext(as);
}
function $n(o, e, t) {
  let n = ct.useRef(void 0),
    [i, r] = ct.useState(void 0),
    a = Ar();
  return (
    n.current || (n.current = new ko(o, ls(e, a), r)),
    (n.current.m_callbacks = t),
    ct.useEffect(() => {
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
    ct.useEffect(() => {
      n.current.window?.SteamClient.Window.SetHideOnClose &&
        n.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: n.current.window, element: i, popupObj: n.current }
  );
}
function ls(o, e) {
  return { ...o, body_class: g(o.body_class, e.body_class) };
}
var ko = class extends re {
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
var de = u(b());
function Fr(o) {
  let { managerOverride: e, bSuppressMouseOverlay: t } = o,
    n = Ot(),
    i = wr(),
    r = Nr(),
    a = e ?? r;
  Nt(a.OnMenusChanged, n);
  let s = !t && a.BShouldRenderMouseOverlay(),
    c = a.GetAllMenus();
  return (0, de.jsxs)(de.Fragment, {
    children: [
      s && (0, de.jsx)(Fi, {}),
      c.map((l) =>
        (0, de.jsx)(
          le,
          { children: (0, de.jsx)(cs, { instance: l, browserInfo: i }) },
          l.key,
        ),
      ),
    ],
  });
}
function cs(o) {
  let { instance: e, browserInfo: t, children: n } = o,
    i = !1,
    r = Kn(),
    a = ae().ownerWindow,
    s = dt.default.useRef(void 0);
  s.current === void 0 &&
    (s.current =
      (i || e.options.bForcePopup || a.innerWidth < 400 || r?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let c = dt.default.useMemo(
      () => ({ instance: e, styles: At, presentation: 0 }),
      [e],
    ),
    l = n || e.ReactElement;
  return (0, de.jsx)(Ii.Provider, {
    value: c,
    children: s.current
      ? (0, de.jsx)(us, { instance: e, browserInfo: t, children: l })
      : (0, de.jsx)(ds, { instance: e, children: l }),
  });
}
function ds(o) {
  let { instance: e, children: t } = o;
  return (0, de.jsx)(fo, { ...e.position, children: t });
}
function us(o) {
  let { instance: e, browserInfo: t, children: n } = o,
    i = dt.default.useRef(null),
    a = ae().ownerWindow,
    s = a.SteamClient.Browser.GetBrowserID(),
    c = dt.default.useCallback(
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
          let w = ci(a, _.getBoundingClientRect());
          (m.dimensions = { left: w.right, top: w.top, width: 2, height: 1 }),
            (m.availscreenwidth = a.screen.availWidth),
            (m.availscreenheight = a.screen.availHeight);
        }
        return m;
      },
      [a, e],
    ),
    l = e.options.bStandalone ? mn(4) : mn(3);
  e.options.bCreateHidden && (l |= 2), e.options.bAlwaysOnTop && (l |= 8192);
  let { popupObj: d, element: p } = $n(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: g(
        At.ContextMenuPopup,
        "client_chat_frame",
        e.options.bStandalone && At.Standalone,
      ),
      popup_class: At.PopupTarget,
      body_class: g(At.ContextMenuPopupBody, "ContextMenuPopupBody"),
      replace_existing_popup: !1,
      target_browser: t,
      window_opener_id: s,
      bHideOnClose: !0,
      eCreationFlags: l,
    },
    { updateParamsBeforeShow: c },
  );
  return (
    (0, dt.useEffect)(() => {
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
    kr(d.window),
    dt.default.useEffect(() => {
      e.SetPopup(d);
    }, [e, d]),
    p
      ? yr.default.createPortal(
          (0, de.jsx)(fo, {
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
var Ht = u(D());
function Br(o) {
  let [e, t] = (0, Ht.useState)(!1);
  return (
    (0, Ht.useEffect)(() => {
      (0, Ht.startTransition)(() => {
        t(!0);
      });
    }, []),
    e ? o.children : (o.fallback ?? null)
  );
}
var Ce = u(D());
var Gr = u(D()),
  Ur = u(Lt());
var gn = u(D());
var ut = u(D());
function Wr(o) {
  let [e, t] = ut.default.useState(!1),
    n = ut.default.useCallback(() => {
      Se(o, "Window.IsWindowMaximized")
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
    ut.default.useEffect(n, [n, o]),
    wn(o, "resize", n),
    po(o, ["window_resized"], n),
    e
  );
}
function Vr(o, e = 100) {
  let [t, n] = ut.default.useState(!1),
    i = ut.default.useCallback(() => n(!0), [n]),
    r = ut.default.useCallback(() => n(!1), [n]);
  return (
    ut.default.useEffect(() => {
      if (o)
        return (
          o.addEventListener("focus", i),
          o.addEventListener("blur", r),
          () => {
            o.removeEventListener("focus", i), o.removeEventListener("blur", r);
          }
        );
    }, [o, i, r]),
    li(t, e)
  );
}
var k = u(b());
function ps(o) {
  let { popup: e, onMaximize: t, bOSX: n } = o,
    i = Wr(e),
    r = gn.useCallback(() => {
      t
        ? t()
        : Se(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, t]);
  return (0, k.jsx)(Bo, {
    className: g(i ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: r,
    children: !n && (i ? (0, k.jsx)(Ei, {}) : (0, k.jsx)(wi, {})),
  });
}
function ms(o) {
  let { popup: e, onMinimize: t, bOSX: n } = o,
    i = gn.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, k.jsx)(Bo, {
    className: "minimizeButton windowControlButton",
    onClick: t ?? i,
    children: !n && (0, k.jsx)(Ti, {}),
  });
}
function fs(o) {
  let { popup: e, onClose: t, bOSX: n } = o,
    i = gn.useCallback(() => {
      e && (Se(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, k.jsx)(Bo, {
    className: "closeButton windowControlButton",
    onClick: t ?? i,
    children: !n && (0, k.jsx)(yt, {}),
  });
}
function Bo(o) {
  let { className: e, onClick: t, children: n } = o,
    i = gn.useCallback(
      (r) => {
        t && (r.stopPropagation(), t(r));
      },
      [t],
    );
  return (0, k.jsx)("div", {
    className: g("title-area-icon", e),
    onClick: i,
    children: (0, k.jsx)("div", {
      className: "title-area-icon-inner",
      children: n,
    }),
  });
}
function Hr(o) {
  let {
      className: e,
      style: t,
      hideActions: n,
      hideClose: i,
      hideMin: r,
      hideMax: a,
      bOSX: s = Si(),
      bForceWindowFocused: c,
      onMinimize: l,
      onMaximize: d,
      onClose: p,
      extraActions: m,
      popup: C,
      children: v,
    } = o,
    _ = Vr(C);
  return (0, k.jsxs)("div", {
    className: g(
      "TitleBar",
      "title-area",
      s && "OSX",
      (_ || c) && "WindowFocus",
      e,
    ),
    style: t,
    children: [
      (0, k.jsx)("div", { className: "title-area-highlight" }),
      (0, k.jsx)("div", { className: "title-area-children", children: v }),
      !n &&
        (0, k.jsxs)(k.Fragment, {
          children: [
            m &&
              (0, k.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: m,
              }),
            (0, k.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !i && (0, k.jsx)(fs, { popup: C, onClose: p, bOSX: s }),
                !a && (0, k.jsx)(ps, { popup: C, onMaximize: d, bOSX: s }),
                !r && (0, k.jsx)(ms, { popup: C, onMinimize: l, bOSX: s }),
              ],
            }),
          ],
        }),
    ],
  });
}
var Gt = u(b());
function Yr(o) {
  let { Modal: e } = o,
    { name: t, modalProps: n, options: i } = e,
    r = ae().ownerWindow,
    { popup: a, element: s } = $n(
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
        updateParamsBeforeShow: (p) => gs(p, n, i, r),
        onClose: () => n.fnOnClose && n.fnOnClose(),
      },
    ),
    c = Gr.useCallback(() => {
      n.bHideMainWindowForPopouts && a?.SteamClient.Window.BringToFront();
    }, [n.bHideMainWindowForPopouts, a]);
  wn(r, "click", c);
  let l = i?.bHideActions,
    d =
      typeof i?.nDragAreaHeight == "number"
        ? { height: i.nDragAreaHeight }
        : void 0;
  return s
    ? Ur.createPortal(
        (0, Gt.jsx)(Er, {
          ownerWindow: a,
          children: (0, Gt.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: ki,
            children: [
              (0, Gt.jsx)(Hr, {
                hideMin: !0,
                hideMax: !0,
                popup: a,
                hideActions: l,
                style: d,
              }),
              (0, Gt.jsx)(zr, {
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
function gs(o, e, t, n) {
  let i,
    r,
    a = e.popupWidth || 500,
    s = e.popupHeight || 400,
    c;
  if (Ye.IN_CLIENT && n?.SteamClient?.Browser?.GetBrowserID)
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
var X = u(D()),
  Xr = u(Lt());
var eo = u(b());
function qr(o) {
  let { ModalManager: e } = o,
    [t, n] = X.useState(void 0),
    [i, r] = X.useState(!0),
    a = X.useRef(0),
    s = X.useCallback(() => {
      X.startTransition(() => {
        r(!0);
      });
    }, []);
  X.useEffect(() => e.RegisterMeasureModalCallback(s).Unregister, [e, s]),
    X.useLayoutEffect(() => {
      t ||
        X.startTransition(() => {
          n(e.TakeMeasureModalRequest()), r(!1);
        });
    }, [e, t, i]);
  let c = X.useCallback((l) => {
    a.current++,
      X.startTransition(() => {
        n((d) => (d === l ? void 0 : d));
      });
  }, []);
  return t
    ? (0, eo.jsx)(hs, { onMeasureComplete: c, request: t }, a.current)
    : null;
}
function hs(o) {
  let [e, t] = X.useState(),
    n = ae().ownerWindow;
  return (
    X.useLayoutEffect(() => {
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
    e ? Xr.createPortal((0, eo.jsx)(bs, { ...o, elContainer: e }), e) : null
  );
}
function bs(o) {
  let { elContainer: e, onMeasureComplete: t, request: n } = o;
  return (
    X.useEffect(() => {
      let i = !1,
        r = (a) => {
          i || (n.fnResults(a), t(n), (i = !0));
        };
      return Cs(e, n.promiseContentReady).then(r), () => r(void 0);
    }, [e, t, n]),
    (0, eo.jsx)(le, { children: n.rctToMeasure })
  );
}
async function Cs(o, e) {
  e && (await e);
  let t = document;
  Ye.IN_STEAMUI && t.fonts && (await t.fonts.ready);
  let n = o.getBoundingClientRect(),
    i = Math.ceil(n.height),
    r = Math.ceil(n.width);
  return { height: i, width: r };
}
var Wo = "kNiAxGG9vCI-";
var Qr = "_3G8oCr9ck-g-";
var A = u(b());
function _s(o) {
  Ce.useEffect(() => {
    if (o)
      return (
        document.body.classList.add(Wo),
        () => document.body.classList.remove(Wo)
      );
  }, [o]);
}
function Ds(o) {
  let e = ae().ownerWindow,
    t = Ot(),
    n = Ce.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  Ce.useEffect(() => o.RegisterOverlay(t), [o, t]),
    Ce.useEffect(() => o.RegisterOnModalShownCallback(n).Unregister, [o, n]);
}
function Rs(o, e) {
  return ai(
    (t) => {
      if (!t || !e) return;
      let n = t.ownerDocument.defaultView;
      return hn.RegisterModalManager(o, n);
    },
    [o],
  );
}
function jr(o) {
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
  _s(l), Ds(e);
  let p = Rs(e, t),
    m = null,
    C = !r;
  return (
    c && c.length
      ? (m = c.map((v) => {
          let _ = v == d,
            w = {
              key: v.key,
              active: _,
              rctActiveContextMenus: _ && r ? i : void 0,
            };
          return v instanceof Pt
            ? (0, A.jsx)(Ps, { ...w, modal: v, Component: n ?? xs })
            : v instanceof St
              ? (0, A.jsx)(Ss, { ...w, modal: v, bUseDialogElement: r })
              : void 0;
        }))
      : ((C = !0), (a = { ...a, display: "none" })),
    (0, A.jsxs)(A.Fragment, {
      children: [
        (0, A.jsxs)(Br, {
          children: [
            (0, A.jsxs)("div", {
              ...s,
              style: a,
              ref: p,
              className: g(s.className, "FullModalOverlay"),
              children: [
                (0, A.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                m,
              ],
            }),
            C && i,
          ],
        }),
        (0, A.jsx)(qr, { ModalManager: e }),
        (0, A.jsx)(Ms, { ModalManager: e }),
      ],
    })
  );
}
function Ss(o) {
  let {
    modal: e,
    rctActiveContextMenus: t,
    active: n,
    bUseDialogElement: i,
  } = o;
  Ce.useEffect(() => {
    if (n)
      return (
        e.SetActive(n),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, n]);
  let r = (0, A.jsxs)(le, {
    children: [
      (0, A.jsx)("div", {
        className: g("ModalOverlayContent", n ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      t,
    ],
  });
  return i ? (0, A.jsx)(Jr, { active: n, children: r }) : r;
}
function Ps(o) {
  let { modal: e, active: t, rctActiveContextMenus: n, Component: i } = o,
    r = Ot();
  return (
    Nt(e.ModalUpdatedCallback, r),
    (0, A.jsx)(le, {
      children: (0, A.jsxs)(i, {
        className: g("ModalOverlayContent", t ? "active" : "inactive"),
        active: t,
        modalKey: e.key,
        children: [n, e.element],
      }),
    })
  );
}
function xs(o) {
  let { className: e, active: t, children: n } = o;
  return (0, A.jsx)(Jr, {
    active: t,
    children: (0, A.jsx)(Ki, {
      children: (0, A.jsx)("div", { className: e, tabIndex: -1, children: n }),
    }),
  });
}
function Jr(o) {
  let { active: e, children: t } = o,
    n = Ce.useRef(null),
    [i, r] = Ce.useState(!1);
  return (
    Ce.useEffect(() => {
      let a = n.current;
      a && (e && !i ? (a.showModal(), r(!0)) : !e && i && a.close());
    }, [e, i]),
    (0, A.jsx)("dialog", {
      ref: n,
      className: Qr,
      onClose: () => r(!1),
      onCancel: (a) => a.preventDefault(),
      children: o.children,
    })
  );
}
function Ms(o) {
  let { ModalManager: e } = o,
    t = Ot();
  return (
    Nt(e.LegacyPopupModalCountChangedCallbacks, t),
    (0, A.jsx)(A.Fragment, {
      children: e.legacy_popup_modals.map((n) =>
        (0, A.jsx)(Yr, { Modal: n }, n.key),
      ),
    })
  );
}
var xt = u(b()),
  Vo = ue.createContext({}),
  zr = ue.memo(function (e) {
    let {
        children: t,
        bRenderOverlayAtRoot: n,
        refModalManager: i,
        DialogWrapper: r,
        bUseDialogElement: a = !0,
        ContextMenuComponent: s = Fr,
        refContextMenuManager: c,
        browserInfo: l,
        bUsePopups: d,
        bOnlyPopups: p,
        bCenterPopupsOnWindow: m,
        bRegisterManagersWithWindow: C = !0,
        ...v
      } = e,
      _ = ue.useRef();
    _.current || (_.current = new bn());
    let w = (0, xt.jsx)(jr, {
      ...v,
      DialogWrapper: r,
      ModalManager: _.current,
      bUseDialogElement: a,
      bRegisterModalManager: C,
      rctActiveContextMenus: (0, xt.jsx)(s, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (w = Zr.createPortal(w, document.body)),
      si(i, _.current),
      d !== void 0 && _.current?.SetUsePopups(d),
      m !== void 0 && _.current?.SetCenterPopupsOnWindow(m),
      p !== void 0 && _.current?.SetOnlyPopups(p),
      _.current.SetBrowserInfo(l);
    let O = ue.useMemo(
      () => ({ ModalManager: _.current, DialogWrapper: r }),
      [r],
    );
    return (0, xt.jsx)(Vo.Provider, {
      value: O,
      children: (0, xt.jsxs)(Or, {
        refContextMenuManager: c,
        bRegisterMenuManager: C,
        children: [(0, xt.jsx)(le, { children: w }), e.children],
      }),
    });
  });
function Kn() {
  return ue.useContext(Vo).ModalManager;
}
function qp() {
  return ue.useContext(Vo).DialogWrapper;
}
function kr(o) {
  let e = Kn();
  ue.useEffect(() => {
    if (o) return hn.RegisterModalManager(e, o);
  }, [o, e]);
}
var bn = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new se();
    m_OnModalShownCallbacks = new se();
    m_OnModalHiddenCallbacks = new se();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new se();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new se();
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
      z(
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
          z(
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
      z(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let t = new Pt(e);
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
      z(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let e = new St();
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
        a = new Zn(
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
  Ho = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let t = this.m_mapModalManager.get(e);
      return (
        t ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (t = new bn()),
          this.m_mapModalManager.set(e, t)),
        t
      );
    }
    RegisterModalManager(e, t) {
      z(
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
  hn = new Ho();
function to(o) {
  return hn.GetModalManager(o);
}
var no = u(D());
var pe = u(b()),
  ws = no.createContext({}),
  Ts = () => no.useContext(ws);
function Cn(o) {
  let t = Ts().ModalPosition ?? Es;
  return (0, pe.jsx)(t, { ...o });
}
function Es(o) {
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
      a && (Tn(a, a.ownerDocument.activeElement) || a.focus());
    }));
  let n = ["ModalPosition"];
  o.className && n.push(o.className),
    o.bDestructiveWarning && n.push("Destructive");
  let i = o.renderContent || ((a) => (0, pe.jsx)("div", { ...a })),
    r = (0, pe.jsxs)(pe.Fragment, {
      children: [
        !o.hideTopBar &&
          (0, pe.jsx)("div", { className: "ModalPosition_TopBar" }),
        o.onEscKeypress &&
          !o.bHideCloseIcon &&
          (0, pe.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, pe.jsx)("div", {
              className: "closeButton",
              onClick: (a) => {
                a.stopPropagation(), o.onEscKeypress();
              },
              children: (0, pe.jsx)(yt, {}),
            }),
          }),
        (0, pe.jsx)(le, { children: o.children }),
      ],
    });
  return (0, pe.jsx)("div", {
    className: n.join(" "),
    ...e,
    ref: t,
    children: i({ className: "ModalPosition_Content", children: r }),
  });
}
var Go = u(b());
async function Ls(o, e, t) {
  let n = to(e),
    i = t?.bForcePopOut || ea(n);
  z(
    !(i && t?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let r = !i && t?.bNeverPopOut === !0,
    a = ea(n) || (!r && na(n, e)),
    s = i && t?.popupWidth && t?.popupHeight,
    c;
  if (a && !s) {
    let d = Uo.cloneElement(o, { closeModal: () => {} });
    c = await Os(n, d, t?.promiseRenderComplete);
  }
  let l = c && c.height / e.innerHeight < 0.9 && c.width / e.innerWidth < 0.8;
  if (r || (!i && l)) return Kr(o, e, void 0, { fnOnClose: t?.fnOnClose });
  {
    let d = {
        strTitle: t?.strTitle || x("#Dialog_DefaultWindowTitle"),
        fnOnClose: t?.fnOnClose,
        popupWidth: t?.popupWidth || c?.width,
        popupHeight: t?.popupHeight || c?.height,
        bHideMainWindowForPopouts: t?.bHideMainWindowForPopouts,
        className: t?.className,
      },
      p = { bHideActions: t?.bHideActionIcons },
      m = t?.browserContext || e.browserInfo;
    return Kr(o, e, d.strTitle, d, m, p, n);
  }
}
async function ta(o, e, t) {
  return Ls(o, e, { bHideMainWindowForPopouts: !0, ...t });
}
function Kr(o, e, t, n, i, r, a) {
  let s,
    c,
    l = o.props.closeModal,
    d = () => {
      c && c.Close(), l && l(), n?.fnOnClose && n.fnOnClose();
    },
    p = () => {
      s && s.Close(), d();
    },
    m = Uo.cloneElement(o, { closeModal: p });
  if (((a = a || to(e)), na(a, e) && n && t)) {
    if (n.bHideMainWindowForPopouts) {
      let v = (0, Go.jsx)(Cn, {
        className: "Hidden",
        onEscKeypress: m.props.bDisableBackgroundDismiss ? void 0 : p,
        children: (0, Go.jsx)("div", {}),
      });
      c = a.ShowModal(v);
    }
    let C = { ...n, fnOnClose: d, browserContext: i };
    s = a.ShowLegacyPopupModal(t, m, C, r);
  } else s = a.ShowModal(m);
  return s;
}
function na(o, e) {
  return (o = o || to(e || window)), Ye.USE_POPUPS && o.BUsePopups();
}
function ea(o) {
  return o.BOnlyPopups && o.BOnlyPopups();
}
async function Os(o, e, t) {
  return new Promise((n, i) => {
    o.RequestModalMeasure(e, n, t);
  });
}
var vn = u(D());
var Ut = u(b());
function Ns(o) {
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
    v = Ln();
  z(
    i || n,
    `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${e} ${t}`,
  );
  let _ = vn.useCallback(() => {
      (n && n()) || (i && i());
    }, [n, i]),
    w = vn.useCallback(async () => {
      r || (a && (await a()), i && i());
    }, [r, a, i]);
  return (0, Ut.jsx)(Cn, {
    onEscKeypress: _,
    className: t,
    bDestructiveWarning: c,
    bDisableBackgroundDismiss: l,
    bHideCloseIcon: d,
    children: (0, Ut.jsx)(cr, {
      role: "dialog",
      "aria-labelledby": m || void 0,
      ...C,
      classNameContent: g(
        "GenericDialogBase",
        "GenericConfirmDialog",
        s && "DialogContentFullSize",
        e,
      ),
      onSubmit: w,
      bCenterVertically: !v,
      children: p,
    }),
  });
}
function oa(o) {
  let { title: e, children: t, ...n } = o,
    i = vn.useId();
  return (0, Ut.jsxs)(Ns, {
    "aria-labelledby": e ? i : "",
    ...n,
    children: [e && (0, Ut.jsx)(Wn, { id: i, children: e }), t],
  });
}
var $ = u(b());
function Is(o) {
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
    m = i || x("#Button_Close"),
    C = (0, $.jsx)(ur, {
      bOKDisabled: o.bOKDisabled,
      bCancelDisabled: o.bCancelDisabled,
      strOKText: i,
      onCancel: e(o.onCancel),
      strCancelText: r,
    });
  l
    ? (C = (0, $.jsx)(rn, { children: m }))
    : c &&
      (C = (0, $.jsx)(pr, {
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
  let v = Yo.useId();
  return (0, $.jsx)(oa, {
    ...p,
    title: t || (0, $.jsx)($.Fragment, { children: " " }),
    "aria-describedby": v,
    children: (0, $.jsxs)(lr, {
      onCancelButton: e(a || o.onCancel),
      children: [
        (0, $.jsxs)(sr, {
          children: [
            (0, $.jsx)("div", {
              id: v,
              style: { display: "contents" },
              children: n,
            }),
            d,
          ],
        }),
        (0, $.jsx)(ar, { children: C }),
      ],
    }),
  });
}
function As(o) {
  let e = {
    onOK: () => {},
    onCancel: () => {},
    strDescription: (0, $.jsxs)("span", {
      style: { whiteSpace: "pre-line" },
      children: [" ", o.strDescription, " "],
    }),
    bAlertDialog: !0,
    ...o,
  };
  return (0, $.jsx)(Is, { ...e });
}
function ia(o, e, t) {
  ta((0, $.jsx)(As, { strTitle: o, strDescription: e }), t);
}
var q = u(b());
function ra(o) {
  return o ? o + "_Label" : void 0;
}
function aa(o) {
  return o ? o + "_Description" : void 0;
}
function $e(o, e) {
  let { label: t, description: n } = e;
  return {
    "aria-labelledby": t ? ra(o) : void 0,
    "aria-describedby": n ? aa(o) : void 0,
  };
}
var Ke = ne.forwardRef(function (e, t) {
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
      highlightOnFocus: w,
      indentLevel: O,
      verticalAlignment: J,
      iconLocation: y,
      tooltip: G,
      explainer: B,
      explainerTitle: U,
      ...W
    } = e,
    Y = Ln(),
    N = c ?? "inline",
    Be = y ?? "front",
    Qt = Be == "front" && !!a,
    mt = Be == "before-children" && !!a,
    _e = N == "inline" && !!s,
    ot = N == "below" && !!s,
    ft = l ?? (Y ? "shift-children-below" : "keep-inline"),
    We = !!(W.onClick || W.onActivate || W.focusable),
    Te = (a != null && Qt) || i != null || (_e && s != null),
    Ve = d ?? "min",
    gt = p ?? "standard",
    ht = m ?? "standard",
    it = v ?? "standard",
    He = w ?? !0,
    Ee = O ?? 0,
    Ge = J ?? "center",
    oe = ys(U ?? i, B),
    Le = ne.useRef(),
    rt = De(Le, e.navRef),
    Jt = ne.useCallback(
      (Ue) => {
        Le.current && (Le.current?.TakeFocus(), Ue.preventDefault());
      },
      [Le],
    );
  return (0, q.jsxs)(I, {
    focusable: We,
    noFocusRing: !0,
    scrollIntoViewWhenChildFocused: !0,
    onActivate: W.onClick ? (Ue) => W.onClick?.(Ue) : void 0,
    ref: t,
    onMouseDown: We ? void 0 : Jt,
    ...W,
    ...oe,
    navRef: rt,
    className: g(
      _,
      R.Field,
      C && R.Disabled,
      Te && R.WithFirstRow,
      _e && R.WithChildrenInline,
      ot && R.WithChildrenBelow,
      Ge == "center" && R.VerticalAlignCenter,
      ft == "shift-children-below" && R.InlineWrapShiftsChildrenBelow,
      !!r && R.WithDescription,
      it == "standard" && R.WithBottomSeparatorStandard,
      it == "thick" && R.WithBottomSeparatorThick,
      Ve == "fixed" && R.ChildrenWidthFixed,
      Ve == "max" && R.ChildrenWidthGrow,
      gt == "standard" && R.ExtraPaddingOnChildrenBelow,
      ht == "standard" && R.StandardPadding,
      ht == "compact" && R.CompactPadding,
      We && R.Clickable,
      He && R.HighlightOnFocus,
    ),
    style: { "--indent-level": Ee },
    children: [
      Te &&
        (0, q.jsxs)("div", {
          className: R.FieldLabelRow,
          children: [
            (0, q.jsxs)("div", {
              className: R.FieldLabel,
              id: ra(n),
              children: [
                Qt &&
                  (0, q.jsx)("div", {
                    className: g(R.FieldIcon, R.Front),
                    children: a,
                  }),
                i,
                G && (0, q.jsx)(Qe, { tooltip: G }),
              ],
            }),
            _e &&
              (0, q.jsxs)("div", {
                className: R.FieldChildrenWithIcon,
                children: [
                  mt &&
                    (0, q.jsx)("div", {
                      className: g(R.FieldIcon, R.BeforeChildren),
                      children: a,
                    }),
                  (0, q.jsx)("div", {
                    className: R.FieldChildrenInner,
                    children: s,
                  }),
                ],
              }),
          ],
        }),
      ot &&
        (0, q.jsxs)("div", {
          className: R.FieldChildrenWithIcon,
          children: [
            mt &&
              (0, q.jsx)("div", {
                className: g(R.FieldIcon, R.BeforeChildren),
                children: a,
              }),
            (0, q.jsx)("div", { className: R.FieldChildrenInner, children: s }),
          ],
        }),
      r &&
        (0, q.jsx)("div", {
          className: R.FieldDescription,
          id: aa(n),
          children: r,
        }),
    ],
  });
});
function ys(o, e) {
  let t = ae(),
    n = ne.useCallback(() => {
      ia(o, e, t.ownerWindow ?? window);
    }, [t, o, e]);
  if (e == null) return {};
  let i = x("#Field_MoreInfo_Action");
  return { onOptionsButton: n, onOptionsActionDescription: i };
}
function Fs(o, e, t = ["label", "button"]) {
  let n = ne.useId(),
    i = $e(o, e),
    r = { id: n, "aria-labelledby": "" };
  return (
    (r["aria-labelledby"] = t
      .map((a) => (a == "button" ? n : i["aria-labelledby"]))
      .join(" ")),
    (r["aria-describedby"] = i["aria-describedby"]),
    r
  );
}
var Fm = ne.forwardRef(function (e, t) {
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
        fieldClassName: w,
        fieldChildren: O,
        accessibilityNameOrder: J,
        ...y
      } = e,
      { refWithValue: G, refForElement: B } = co(t),
      U = ne.useId();
    return (0, q.jsxs)(Ke, {
      accessibilityId: U,
      label: n,
      indentLevel: d,
      description: i,
      icon: a,
      bottomSeparator: p,
      highlightOnFocus: m,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: C ?? "min",
      onMouseDown: (Y) => {
        G.current?.focus(), Y.preventDefault();
      },
      padding: v,
      inlineWrap: _,
      explainer: r,
      className: w,
      disabled: c,
      onActivate: c ? l : void 0,
      children: [(0, q.jsx)(ks, { accessibilityId: U, ...e, ref: B }), O],
    });
  }),
  ks = ne.forwardRef(function (e, t) {
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
        inlineWrap: w,
        fieldClassName: O,
        fieldChildren: J,
        accessibilityNameOrder: y,
        ...G
      } = e,
      B = Fs(n, e, y);
    return (0, q.jsx)(he, { ...G, ...B, disabled: l, ref: t });
  }),
  sa = ne.forwardRef(function (e, t) {
    let {
        label: n,
        description: i,
        icon: r,
        layout: a,
        bottomSeparator: s,
        highlightOnFocus: c,
        ...l
      } = e,
      { refWithValue: d, refForElement: p } = co(t),
      m = ne.useId();
    return (0, q.jsx)(Ke, {
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
      children: (0, q.jsx)(_t, { ...$e(m, e), ...l, ref: p }),
    });
  });
var Ca = u(D());
var H = u(D());
var me = u(D());
var zo = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function Xo(o, e) {
  return o.classList
    ? !!e && o.classList.contains(e)
    : (" " + (o.className.baseVal || o.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function qo(o, e) {
  o.classList
    ? o.classList.add(e)
    : Xo(o, e) ||
      (typeof o.className == "string"
        ? (o.className = o.className + " " + e)
        : o.setAttribute(
            "class",
            ((o.className && o.className.baseVal) || "") + " " + e,
          ));
}
function la(o, e) {
  return o
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Qo(o, e) {
  o.classList
    ? o.classList.remove(e)
    : typeof o.className == "string"
      ? (o.className = la(o.className, e))
      : o.setAttribute(
          "class",
          la((o.className && o.className.baseVal) || "", e),
        );
}
var $o = u(D());
var _n = u(D()),
  Dn = u(Lt());
var jo = { disabled: !1 };
var ca = u(D()),
  Yt = ca.default.createContext(null);
var oo = function (e) {
  return e.scrollTop;
};
var Rn = "unmounted",
  Mt = "exited",
  wt = "entering",
  Xt = "entered",
  Jo = "exiting",
  et = (function (o) {
    Bt(e, o);
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
            ? ((c = Mt), (r.appearStatus = wt))
            : (c = Xt)
          : n.unmountOnExit || n.mountOnEnter
            ? (c = Rn)
            : (c = Mt),
        (r.state = { status: c }),
        (r.nextCallback = null),
        r
      );
    }
    e.getDerivedStateFromProps = function (i, r) {
      var a = i.in;
      return a && r.status === Rn ? { status: Mt } : null;
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
            ? a !== wt && a !== Xt && (r = wt)
            : (a === wt || a === Xt) && (r = Jo);
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
          if ((this.cancelNextCallback(), r === wt)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Dn.default.findDOMNode(this);
              a && oo(a);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === Mt &&
            this.setState({ status: Rn });
      }),
      (t.performEnter = function (i) {
        var r = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : i,
          c = this.props.nodeRef ? [s] : [Dn.default.findDOMNode(this), s],
          l = c[0],
          d = c[1],
          p = this.getTimeouts(),
          m = s ? p.appear : p.enter;
        if ((!i && !a) || jo.disabled) {
          this.safeSetState({ status: Xt }, function () {
            r.props.onEntered(l);
          });
          return;
        }
        this.props.onEnter(l, d),
          this.safeSetState({ status: wt }, function () {
            r.props.onEntering(l, d),
              r.onTransitionEnd(m, function () {
                r.safeSetState({ status: Xt }, function () {
                  r.props.onEntered(l, d);
                });
              });
          });
      }),
      (t.performExit = function () {
        var i = this,
          r = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Dn.default.findDOMNode(this);
        if (!r || jo.disabled) {
          this.safeSetState({ status: Mt }, function () {
            i.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Jo }, function () {
            i.props.onExiting(s),
              i.onTransitionEnd(a.exit, function () {
                i.safeSetState({ status: Mt }, function () {
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
            : Dn.default.findDOMNode(this),
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
        if (i === Rn) return null;
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
          w = r.onEntering,
          O = r.onEntered,
          J = r.onExit,
          y = r.onExiting,
          G = r.onExited,
          B = r.nodeRef,
          U = kt(r, [
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
        return _n.default.createElement(
          Yt.Provider,
          { value: null },
          typeof a == "function"
            ? a(i, U)
            : _n.default.cloneElement(_n.default.Children.only(a), U),
        );
      }),
      e
    );
  })(_n.default.Component);
et.contextType = Yt;
et.propTypes = {};
function zt() {}
et.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: zt,
  onEntering: zt,
  onEntered: zt,
  onExit: zt,
  onExiting: zt,
  onExited: zt,
};
et.UNMOUNTED = Rn;
et.EXITED = Mt;
et.ENTERING = wt;
et.ENTERED = Xt;
et.EXITING = Jo;
var da = et;
var Bs = function (e, t) {
    return (
      e &&
      t &&
      t.split(" ").forEach(function (n) {
        return qo(e, n);
      })
    );
  },
  Zo = function (e, t) {
    return (
      e &&
      t &&
      t.split(" ").forEach(function (n) {
        return Qo(e, n);
      })
    );
  },
  Ko = (function (o) {
    Bt(e, o);
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
          a === "active" && i && oo(i),
          s && ((this.appliedClasses[r][a] = s), Bs(i, s));
      }),
      (t.removeClasses = function (i, r) {
        var a = this.appliedClasses[r],
          s = a.base,
          c = a.active,
          l = a.done;
        (this.appliedClasses[r] = {}),
          s && Zo(i, s),
          c && Zo(i, c),
          l && Zo(i, l);
      }),
      (t.render = function () {
        var i = this.props,
          r = i.classNames,
          a = kt(i, ["classNames"]);
        return $o.default.createElement(
          da,
          On({}, a, {
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
  })($o.default.Component);
Ko.defaultProps = { classNames: "" };
Ko.propTypes = {};
var ei = Ko;
function ua(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return o;
}
var Sn = u(D());
var ve = u(D());
function io(o, e) {
  var t = function (r) {
      return e && (0, ve.isValidElement)(r) ? e(r) : r;
    },
    n = Object.create(null);
  return (
    o &&
      ve.Children.map(o, function (i) {
        return i;
      }).forEach(function (i) {
        n[i.key] = t(i);
      }),
    n
  );
}
function Ws(o, e) {
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
function Tt(o, e, t) {
  return t[e] != null ? t[e] : o.props[e];
}
function pa(o, e) {
  return io(o.children, function (t) {
    return (0, ve.cloneElement)(t, {
      onExited: e.bind(null, t),
      in: !0,
      appear: Tt(t, "appear", o),
      enter: Tt(t, "enter", o),
      exit: Tt(t, "exit", o),
    });
  });
}
function ma(o, e, t) {
  var n = io(o.children),
    i = Ws(e, n);
  return (
    Object.keys(i).forEach(function (r) {
      var a = i[r];
      if ((0, ve.isValidElement)(a)) {
        var s = r in e,
          c = r in n,
          l = e[r],
          d = (0, ve.isValidElement)(l) && !l.props.in;
        c && (!s || d)
          ? (i[r] = (0, ve.cloneElement)(a, {
              onExited: t.bind(null, a),
              in: !0,
              exit: Tt(a, "exit", o),
              enter: Tt(a, "enter", o),
            }))
          : !c && s && !d
            ? (i[r] = (0, ve.cloneElement)(a, { in: !1 }))
            : c &&
              s &&
              (0, ve.isValidElement)(l) &&
              (i[r] = (0, ve.cloneElement)(a, {
                onExited: t.bind(null, a),
                in: l.props.in,
                exit: Tt(a, "exit", o),
                enter: Tt(a, "enter", o),
              }));
      }
    }),
    i
  );
}
var Vs =
    Object.values ||
    function (o) {
      return Object.keys(o).map(function (e) {
        return o[e];
      });
    },
  Hs = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  ti = (function (o) {
    Bt(e, o);
    function e(n, i) {
      var r;
      r = o.call(this, n, i) || this;
      var a = r.handleExited.bind(ua(r));
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
        return { children: c ? pa(i, s) : ma(i, a, s), firstRender: !1 };
      }),
      (t.handleExited = function (i, r) {
        var a = io(this.props.children);
        i.key in a ||
          (i.props.onExited && i.props.onExited(r),
          this.mounted &&
            this.setState(function (s) {
              var c = On({}, s.children);
              return delete c[i.key], { children: c };
            }));
      }),
      (t.render = function () {
        var i = this.props,
          r = i.component,
          a = i.childFactory,
          s = kt(i, ["component", "childFactory"]),
          c = this.state.contextValue,
          l = Vs(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          r === null
            ? Sn.default.createElement(Yt.Provider, { value: c }, l)
            : Sn.default.createElement(
                Yt.Provider,
                { value: c },
                Sn.default.createElement(r, s, l),
              )
        );
      }),
      e
    );
  })(Sn.default.Component);
ti.propTypes = {};
ti.defaultProps = Hs;
var ni = ti;
var qt = u(b());
function fa(o) {
  let {
      childrenKey: e,
      childrenClasses: t,
      children: n,
      directionClass: i,
      animate: r = !0,
    } = o,
    a = g(zo.TransitionGroup, i);
  return (0, qt.jsx)(ni, {
    className: a,
    appear: !1,
    enter: r,
    exit: r,
    children: (0, qt.jsx)(Gs, { childrenClasses: t, children: n }, e),
  });
}
function Gs(o) {
  let { sizeClass: e, children: t, childrenClasses: n, navKey: i, ...r } = o,
    [a, s, c, l] = Us(),
    d = me.useRef(!0),
    p = me.useCallback(() => d.current, [d]),
    m = me.useCallback(() => {
      (d.current = !0), c();
    }, [c]),
    C = me.useCallback(() => {
      (d.current = !1), l();
    }, [l]),
    v = 1e4,
    _ = o.childrenClasses,
    w = {
      enter: _.enterStart,
      enterActive: _.enterEnd,
      exit: _.exitStart,
      exitActive: _.exitEnd,
    };
  return a.current && !a.current.ownerDocument.defaultView
    ? null
    : (0, qt.jsx)(ei, {
        nodeRef: a,
        classNames: w,
        in: !0,
        timeout: v,
        addEndListener: s,
        onEntering: m,
        onExiting: C,
        ...r,
        children: (0, qt.jsx)("div", {
          ref: a,
          className: g(zo.ContentWrapper, e, _.base),
          children: (0, qt.jsx)(I, {
            className: e,
            fnCanTakeFocus: p,
            navKey: i,
            children: o.children,
          }),
        }),
      });
}
function Us() {
  let o = me.useRef(null),
    e = me.useRef();
  me.useLayoutEffect(() => {
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
  let t = me.useCallback(
      (r) => {
        if (!e.current) {
          r();
          return;
        }
        e.current.fnDone = r;
      },
      [e],
    ),
    n = me.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    i = me.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [o, t, n, i];
}
function ga(o, e) {
  return {
    base: e,
    enterStart: o.Enter,
    enterEnd: o.EnterActive,
    exitStart: o.Exit,
    exitEnd: o.ExitActive,
  };
}
function ha(o, e) {
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
var tt = {
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
var we = u(b()),
  ba = H.createContext(null);
function Ys(o) {
  let e = H.useContext(ba),
    n = Di().IN_VR,
    { title: i, icon: r, active: a, ...s } = o;
  return (0, we.jsxs)(I, {
    preferredFocus: a,
    navRef: a && e ? e : void 0,
    noFocusRing: !0,
    onActivate: n ? void 0 : s.onClick,
    onFocus: n ? void 0 : s.onClick,
    ...s,
    children: [
      r && (0, we.jsx)("div", { className: tt.PageListItem_Icon, children: r }),
      (0, we.jsx)("div", { className: tt.PageListItem_Title, children: i }),
    ],
  });
}
function zs(o) {
  let { bTransparent: e, className: t, ...n } = o;
  return (0, we.jsx)("div", { className: g(t, tt.Separator), ...n });
}
var Xs = H.forwardRef(function (e, t) {
  let { page: n, bAutoFocusPageContent: i, showTitle: r = !1 } = e,
    a = H.useRef(null),
    s = H.useRef(!0);
  H.useEffect(() => {
    (!s.current || !i) && a.current?.TakeFocus(), (s.current = !1);
  }, [n, i]);
  let c = (l, d, p) =>
    (0, we.jsx)(qs, {
      pages: e.pages,
      activePage: l,
      refForPage: d,
      PageComponent: p,
    });
  return (0, we.jsx)(ba.Provider, {
    value: a,
    children: (0, we.jsx)(Pr, {
      ...e,
      stylesheet: tt,
      showTitle: r,
      PageListItemComponent: Ys,
      PageListSeparatorComponent: zs,
      renderPageContent: e.renderPageContent || c,
    }),
  });
});
function qs(o) {
  let { pages: e, activePage: t, refForPage: n, PageComponent: i } = o,
    r = H.useMemo(() => e.findIndex((l) => l == t), [e, t]),
    a = Qs(r),
    s = js(t?.identifier, n),
    c = ha(tt, a);
  return (0, we.jsx)(fa, {
    childrenKey: t?.identifier,
    childrenClasses: ga(tt, tt.ContentTransition),
    directionClass: c,
    animate: a != 0,
    children:
      t &&
      (0, we.jsx)(
        i,
        { ref: s(t.identifier), stylesheet: tt, activePage: t },
        t.identifier,
      ),
  });
}
function Qs(o) {
  let e = H.useRef(o),
    t = H.useRef(0),
    n = e.current;
  if (n == o) return t.current;
  let i = 0;
  return (
    n < o ? (i = 4) : n > o && (i = 3), (e.current = o), (t.current = i), i
  );
}
function js(o, e) {
  let t = H.useMemo(() => new Map(), []),
    n = H.useRef();
  n.current = o;
  let i = H.useRef();
  i.current = e;
  let r = H.useCallback(
    (a) => (s) => {
      t.set(a, s), a === n.current && bt(i.current, s);
    },
    [t],
  );
  return (
    H.useEffect(() => (bt(e, o && t.get(o)), () => bt(e, void 0)), [t, o, e]), r
  );
}
var va = u(b()),
  Vf = Ca.forwardRef(function (e, t) {
    return (0, va.jsx)(It, {
      noFocusRing: !0,
      ...e,
      ref: t,
      className: g(R.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var Pn = u(D());
var Da = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var K = u(b());
function Ra(o, e) {
  for (let t of o.options)
    if ((Je(t) && t.data === e) || (ye(t) && Ra(t, e))) return !0;
  return !1;
}
function Js(o) {
  let e = (t) =>
    t?.map((n, i) =>
      Dt(n)
        ? (0, K.jsx)(Ai, {}, i)
        : Je(n)
          ? (0, K.jsx)(
              Ft,
              {
                role: "option",
                onSelected: (r) => o.onValueSelected && o.onValueSelected(r, n),
                selected: o.selectedValue === n.data,
                children: (0, K.jsx)(K.Fragment, { children: n.label }),
              },
              i,
            )
          : ye(n)
            ? (0, K.jsx)(
                yi,
                {
                  label: n.label,
                  selectedWithin: Ra(n, o.selectedValue),
                  children: e(n.options),
                },
                i,
              )
            : null,
    );
  return (0, K.jsx)(Kt, {
    onCancel: o.onCancel,
    role: "listbox",
    children: e(o.rgOptions),
  });
}
var Zs = Pn.forwardRef(function (e, t) {
  let {
      className: n,
      opened: i,
      arrowClassName: r,
      "aria-label": a,
      "aria-labelledby": s = "",
      ...c
    } = e,
    l = Pn.useId(),
    d = Pn.useId();
  return (0, K.jsxs)(K.Fragment, {
    children: [
      (0, K.jsx)(he, {
        id: l,
        className: g(Da.DropDownControlButton, n),
        "aria-labelledby": s || d,
        ...c,
        ref: t,
        children: (0, K.jsxs)("div", {
          className: R.DropDownControlButtonContents,
          children: [
            (0, K.jsx)("div", {
              className: "DialogDropDown_CurrentDisplay",
              children: e.children,
            }),
            (0, K.jsx)(tn, { direction: "down" }),
          ],
        }),
      }),
      a &&
        (0, K.jsx)("div", { id: d, style: { display: "none" }, children: a }),
    ],
  });
});
var fe = u(D());
var Sa = "TW2ZQnLvgIc-";
var nt = u(b()),
  Pa = fe.forwardRef(function (e, t) {
    let { className: n, ...i } = e,
      r = fe.useRef(),
      a = De(t, r),
      [s, c] = fe.useState(!1),
      l = fe.useCallback(() => {
        c((d) => !d), window.setTimeout(() => r.current?.Focus(), 1);
      }, []);
    return (0, nt.jsx)(I, {
      className: n,
      onOptionsButton: l,
      onOptionsActionDescription: x(
        s ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, nt.jsx)(_t, {
        autoComplete: "off",
        ref: a,
        inlineControls: (0, nt.jsx)(he, {
          "aria-label": x(s ? "#Login_HidePassword" : "#Login_ShowPassword"),
          className: Sa,
          onPointerDown: l,
          onOKButton: l,
          children: s ? (0, nt.jsx)(Wi, {}) : (0, nt.jsx)(Vi, {}),
        }),
        ...i,
        type: s ? "text" : "password",
      }),
    });
  }),
  og = fe.forwardRef(function (e, t) {
    let {
        label: n,
        className: i,
        description: r,
        icon: a,
        bottomSeparator: s,
        highlightOnFocus: c,
        ...l
      } = e,
      d = fe.useId();
    return (0, nt.jsx)(Ke, {
      accessibilityId: d,
      className: i,
      label: n,
      description: r,
      icon: a,
      bottomSeparator: s,
      highlightOnFocus: c,
      childrenContainerWidth: "fixed",
      children: (0, nt.jsx)(Pa, { ...$e(d, e), ...l, ref: t }),
    });
  });
function tl(o) {
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
var ig = fe.forwardRef(function (e, t) {
  let { className: n, value: i, ...r } = e,
    a = i ?? "";
  return (0, nt.jsx)(sa, {
    autoComplete: "off",
    value: a,
    ref: t,
    placeholder: "   .   .   .   ",
    ...r,
    onChange: (c) => {
      let l = c.target.value;
      if (tl(l)) r.onChange && r.onChange(c);
      else {
        c.target.value = a;
        return;
      }
    },
  });
});
var ee = u(D());
var P = {
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
  nl = 10,
  ol = 1,
  il = 0.01,
  rl = 0.05,
  Eg = qi(P["error-shake-duration"]);
function xa(o, e) {
  return e < 0 ? 0 : e > 1 ? 1 : o == 0 ? e : Math.round(e / o) * o;
}
function Ma(o, e, t) {
  let n = o + t * (e - o);
  return Number.parseFloat(n.toFixed(10));
}
function oi(o, e, t) {
  return (t - o) / (e - o);
}
var j = class extends ee.Component {
  m_refSlider = ee.createRef();
  m_refHandle = ee.createRef();
  m_navRefSlider = ee.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = gi();
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
    return Math.abs(this.props.step ?? ol);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      t = e > 0 ? e / this.range : il;
    return Math.max(t, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : Et(this.props.value, this.props.min, this.props.max);
    return oi(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return oi(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = Et(0, this.props.min, this.props.max);
    return oi(this.props.min, this.props.max, e);
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
      i = ri(n, 0, 2e3, 500, 250),
      r = Math.pow(2, Math.floor(n / i)),
      a = this.normalizedDpadStep * r,
      s = Et(a, this.normalizedDpadStep, rl) * t,
      c = xa(this.normalizedStep, this.normalizedClampedValue + s),
      l = Ma(this.props.min, this.props.max, c);
    if (
      ((l = Et(
        l,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      l != this.props.value)
    ) {
      let d = l > this.m_fLatestUserValue;
      Re.PlayNavSound(d ? 18 : 19),
        (this.m_fLatestUserValue = l),
        this.FireOnChange(l, 2);
    } else Re.PlayNavSound(25);
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
      n = xa(this.normalizedStep, t),
      i = Ma(this.props.min, this.props.max, n),
      r = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((i = Et(i, r, a)), i != this.props.value)) {
      let s = i > this.props.value,
        c = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !c) && Re.PlayNavSound(s ? 18 : 19),
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
          if (bi(this.m_vTouchStartPosition, t) >= nl) {
            let i = hi(this.m_vTouchStartPosition, t);
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
      Re.PlayNavSound(i ? 18 : 19);
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
    this.m_fZoom = di(this.m_refSlider.current);
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
      Re.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let t = (0, L.jsx)(Kt, {
        children: (0, L.jsx)(Ft, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: x("#ResetToDefault"),
        }),
      });
      en(t, e);
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
        notchLabels: w,
        notchTicksVisible: O,
        onChange: J,
        onChangeComplete: y,
        onChangeStart: G,
        renderNotch: B,
        renderValue: U,
        resetValue: W,
        resetValueAppearance: Y = "top-caret",
        showBookendLabels: N,
        showHandle: Be,
        step: Qt,
        strValueSuffix: mt,
        trackStyleOverride: _e,
        trackStyleBackground: ot,
        trackForegroundVisible: ft = !0,
        trackTone: We,
        ...Te
      } = this.props,
      Ve = N ?? !1,
      gt = O ?? !Ve,
      ht = Ve ? 2 : _,
      it = [
        { notchIndex: 0, label: `${e}` },
        { notchIndex: 1, label: `${t}` },
      ],
      He = Ve ? it : w,
      Ee = d ?? !0,
      Ge = this.normalizedDefaultValue,
      jt = this.normalizedSliderOrigin,
      oe = Ge != null,
      Le = Y == "top-caret",
      rt = !Le,
      Jt = U || xo,
      Ue = {};
    this.CanResetToDefault && (Ue[3] = x("#ResetToDefault"));
    let Zt = `${P.SliderHandle} SliderHandle`,
      so = `${P.SliderHandleContainer} SliderHandleContainer `;
    p == "verticalline"
      ? ((Zt = `${P.VerticalLineSliderHandle} SliderHandle`),
        (so = `${P.VerticalLineSliderHandleContainer} SliderHandleContainer `))
      : (p == "leftparen" || p == "rightparen") &&
        ((Zt = g(
          P.ParenSliderHandle,
          p == "leftparen" ? P.Left : P.Right,
          "SliderHandle",
        )),
        (so = g(
          P.ParenSliderHandleContainer,
          p == "leftparen" ? P.Left : P.Right,
          "SliderHandleContainer",
        )));
    let wa = Jt(n);
    return (0, L.jsx)(zi, {
      noFocusRing: !0,
      className: g(P.SliderControlPanelGroup, "SliderControlPanelGroup", a),
      navRef: v,
      onMouseDown: (lo) => this.OnMouseDown(lo.nativeEvent),
      onTouchStart: (lo) => this.OnTouchStart(lo.nativeEvent),
      onOKActionDescription: s ? null : x("#Slider_AdjustSlider"),
      focusable: Ee,
      childFocusDisabled: s || !Ee,
      onContextMenu: this.OnContextMenu,
      onOKButton: s ? () => Re.PlayNavSound(25) : void 0,
      onSecondaryButton: this.CanResetToDefault ? this.ResetToDefault : void 0,
      onSecondaryActionDescription: this.CanResetToDefault
        ? x("#ResetToDefault")
        : void 0,
      actionDescriptionMap: Ue,
      "aria-roledescription": x("#Slider_Button"),
      "aria-labelledby": Te["aria-labelledby"],
      "aria-label": Te["aria-label"],
      children: (0, L.jsxs)(ze, {
        role: "slider",
        "aria-valuenow": n,
        "aria-valuetext": wa,
        ...Te,
        className: g(
          P.SliderControlAndNotches,
          s && P.Disabled,
          oe && P.WithDefaultValue,
          oe && rt && P.DefaultValueIsColorRange,
          oe && rt && Y.side == "left" && P.DefaultValueColorLeft,
          oe && rt && Y.side != "left" && P.DefaultValueColorRight,
          !ft && P.ForegroundInvisible,
        ),
        focusable: this.isKeyNavTarget,
        noFocusRing: !0,
        onFocus: this.OnInnerSliderFocus,
        onBlur: this.OnInnerSliderBlur,
        style: {
          "--normalized-slider-value": this.normalizedClampedValue,
          "--normalized-slider-default-value": Ge,
          "--normalized-slider-origin": jt,
          "--default-value-track-color": rt ? Y.trackForegroundColor : void 0,
          "--slider-extra-notch-padding": l ?? "0px",
        },
        ref: Mn(this.m_refSlider, m),
        navRef: this.m_navRefSlider,
        onGamepadDirection: this.OnGamepadDirection,
        onOKButton: this.BlurInnerSlider,
        onOKActionDescription: null,
        onCancelButton: this.BlurInnerSlider,
        onCancelActionDescription: x("#ActionButtonLabelDone"),
        children: [
          (0, L.jsxs)("div", {
            className: g(P.SliderControl, "SliderControl"),
            children: [
              (0, L.jsx)("div", {
                className: g(
                  P.SliderTrack,
                  _ != null && gt && P.SliderHasNotches,
                  { [P.SliderTrackDark]: We === "dark" },
                  ot,
                  "SliderTrack",
                ),
                style: this.props.trackStyleOverride,
              }),
              oe &&
                Le &&
                (0, L.jsx)("div", {
                  className: P.DefaultValueTickContainer,
                  children: (0, L.jsx)("div", {
                    className: P.DefaultValueTick,
                    children: (0, L.jsx)(tn, { direction: "down" }),
                  }),
                }),
              this.validRange &&
                n != null &&
                !isNaN(n) &&
                this.showHandle &&
                (0, L.jsx)("div", {
                  className: so,
                  children: (0, L.jsxs)("div", {
                    className: Zt,
                    ref: this.m_refHandle,
                    children: [
                      p == "leftparen" && (0, L.jsx)(Hi, {}),
                      p == "rightparen" && (0, L.jsx)(Gi, {}),
                    ],
                  }),
                }),
            ],
          }),
          (0, L.jsx)(al, {
            notchCount: ht,
            notchLabels: He,
            sliderValue: this.normalizedClampedValue,
            notchTicksVisible: gt,
            renderNotch: B,
          }),
        ],
      }),
    });
  }
};
f([h], j.prototype, "RecomputeSliderBounds", 1),
  f([h], j.prototype, "SetDragMode", 1),
  f([h], j.prototype, "OnGamepadDirection", 1),
  f([h], j.prototype, "UpdateSliderValueForPosition", 1),
  f([h], j.prototype, "OnWindowMouseMove", 1),
  f([h], j.prototype, "OnWindowMouseUp", 1),
  f([h], j.prototype, "OnMouseDown", 1),
  f([h], j.prototype, "OnTouchStart", 1),
  f([h], j.prototype, "OnWindowTouchMove", 1),
  f([h], j.prototype, "OnWindowTouchEnd", 1),
  f([h], j.prototype, "Complete", 1),
  f([h], j.prototype, "BlurInnerSlider", 1),
  f([h], j.prototype, "OnInnerSliderFocus", 1),
  f([h], j.prototype, "OnInnerSliderBlur", 1),
  f([h], j.prototype, "ResetToDefault", 1),
  f([h], j.prototype, "OnContextMenu", 1);
function al(o) {
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
          sl,
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
  return (0, L.jsx)(I, { className: g(P.SliderNotchContainer), children: c });
}
function sl(o) {
  let e = o.notchIndex <= (o.notchCount - 1) * o.sliderValue,
    t = o.notchCount <= 3 && !o.notchTicksVisible,
    n = t && o.notchIndex == 0,
    i = t && o.notchIndex == o.notchCount - 1,
    r = { ...o, alignLeftEnd: n, alignRightEnd: i, active: e };
  return (0, L.jsx)("div", {
    className: g(P.SliderNotch, t && P.AlignToEnds),
    children: o.renderNotch ? o.renderNotch(r) : (0, L.jsx)(ll, { ...r }),
  });
}
function ll(o) {
  let { alignLeftEnd: e, alignRightEnd: t, active: n } = o;
  return (0, L.jsxs)(L.Fragment, {
    children: [
      o.notchTicksVisible &&
        (0, L.jsx)("div", {
          className: g(P.SliderNotchTick, n && P.TickActive),
        }),
      o.notchLabel &&
        (0, L.jsx)("div", {
          className: g(
            P.SliderNotchLabel,
            e && P.AlignToLeft,
            t && P.AlignToRight,
          ),
          children: o.notchLabel?.label,
        }),
    ],
  });
}
var Lg = ee.forwardRef(function (e, t) {
  let {
    label: n,
    labelIndex: i,
    xOffset: r,
    onResize: a,
    OnMouseDown: s,
    OnTouchStart: c,
  } = e;
  ee.useEffect(() => {
    a(i);
  }, [a, i]);
  let l = ee.useCallback(
      (m) => {
        a(i);
      },
      [a, i],
    ),
    d = Ni(l),
    p = De(d, t);
  return (0, L.jsx)("div", {
    className: P.CompoundSliderSubSliderLabel,
    ref: p,
    onMouseDown: s,
    onTouchStart: c,
    style: { transform: `translateX(${r}px)` },
    children: (0, L.jsx)("div", {
      className: P.CompoundSliderSubSliderLabelInternal,
      children: n,
    }),
  });
});
var ao = u(D());
var pt = u(b()),
  _a = ao.forwardRef(function (e, t) {
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
          i(m), Re.PlayNavSound(m ? 16 : 17);
        }
      };
    return (0, pt.jsxs)(ze, {
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
        (0, pt.jsx)("div", { className: R.ToggleRail }),
        (0, pt.jsx)("div", { className: R.ToggleSwitch }),
        c,
      ],
    });
  });
function cl(o) {
  let e = !!o.disabled,
    { actionDescriptions: t, gamepadEvents: n } = Ci(o),
    i = ao.useId(),
    { "aria-expanded": r, "aria-controls": a } = o;
  return (0, pt.jsx)(Ke, {
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
    children: (0, pt.jsx)(_a, {
      "aria-expanded": r,
      "aria-controls": a,
      ...$e(i, o),
      onChange: o.OnToggleChange,
      value: o.checked,
      disabled: e,
      navRef: o.navRef,
    }),
  });
}
var ro = class extends at {
  OnToggleChange(e) {
    !this.props.disabled && e !== this.checked && this.Toggle();
  }
  render() {
    return (0, pt.jsx)(cl, {
      ...this.props,
      OnToggleChange: this.OnToggleChange,
      checked: this.checked,
    });
  }
};
f([h], ro.prototype, "OnToggleChange", 1);
var ii = u(b());
function Ks(o) {
  let { children: e, bCenterVertically: t, refElem: n, ...i } = o,
    r = g(
      R.GamepadDialogContent,
      "DialogContent _DialogLayout",
      o.className,
      t && " _DialogCenterVertically",
    ),
    { ref: a, navRef: s } = Yi(),
    c = De(n, a);
  return (0, ii.jsx)(I, {
    ...i,
    className: r,
    ref: c,
    navRef: s,
    children: (0, ii.jsx)(I, {
      className: g(
        R.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
export {
  Br as a,
  Ki as b,
  Bl as c,
  fa as d,
  ga as e,
  Nr as f,
  to as g,
  zr as h,
  Kn as i,
  qp as j,
  ws as k,
  Cn as l,
  Fn as m,
  rn as n,
  R as o,
  Js as p,
  Ks as q,
};
