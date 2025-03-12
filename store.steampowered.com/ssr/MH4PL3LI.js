const CLSTAMP = 9598355;

import {
  A as nl,
  B as rl,
  C as ti,
  D as il,
  E as al,
  F as sl,
  G as oi,
  H as nn,
  I as x_,
  J as rn,
  K as ni,
  N as ll,
  O as cl,
  P as ul,
  Q as pl,
  a as Xs,
  b as Wt,
  c as ei,
  h as Js,
  i as Do,
  l as $s,
  m as Zs,
  n as Ks,
  s as el,
  w as tl,
  x as Jn,
  y as on,
  z as yo,
} from "./chunk-6E4XYOFC.js";
import "./chunk-5R7GBR3Y.js";
import { a as b, c as ge } from "./chunk-XKWAPY6I.js";
import { a as tn } from "./chunk-2JLE7ZFC.js";
import "./chunk-D7XEWZ6X.js";
import {
  a as Ct,
  d as Ns,
  i as Rt,
  u as B,
  v as Hs,
  x as Gs,
} from "./chunk-AERRJ3CD.js";
import { a as k_ } from "./chunk-KW7TT3AF.js";
import { b as Mo, d as ml, e as bl } from "./chunk-A2PRZ7X2.js";
import "./chunk-MSQ5TJT7.js";
import {
  A as dl,
  a as Vs,
  b as zs,
  c as en,
  d as zn,
  e as jn,
  f as Pt,
  g as qn,
  h as Yn,
  i as js,
} from "./chunk-VDFBB5QF.js";
import "./chunk-XIZPEQIU.js";
import { a as nt, b as x, c as Qn, e as hl } from "./chunk-SOS72HVP.js";
import { h as Qs } from "./chunk-2EXHVSCL.js";
import "./chunk-Q6BLM6LR.js";
import { A as St, B as G, j as _l } from "./chunk-LUDE7UI3.js";
import "./chunk-CLJLRWDQ.js";
import {
  F as qs,
  G as Ys,
  a as A_,
  b as P,
  c as S,
  d as K,
  e as ee,
  f as te,
  g as oe,
  h as ne,
  i as re,
  o as ls,
  r as Yr,
  t as Xr,
  u as Ae,
} from "./chunk-RG74SZKD.js";
import "./chunk-L3CD5JXR.js";
import { a as bt } from "./chunk-FKBHXF3F.js";
import { a as ss } from "./chunk-AVTVEOGQ.js";
import {
  a as Xn,
  c as gl,
  d as $n,
  e as To,
  f as ko,
  h as fl,
  k as Re,
} from "./chunk-N66JXOTC.js";
import {
  A as wo,
  B as Ls,
  G as Bs,
  H as O,
  a as Ee,
  b as Cs,
  c as Ot,
  d as Rs,
  e as Ps,
  f as Ss,
  h as Qe,
  i as Ko,
  j as ws,
  k as Ms,
  l as Ds,
  n as Kr,
  o as ys,
  p as Ts,
  r as ks,
  s as As,
  v as xs,
  x as vt,
  y as Ut,
  z as Es,
} from "./chunk-XCCLP6QA.js";
import { a as rt } from "./chunk-667HSWGZ.js";
import { a as ol } from "./chunk-TRM4CV6N.js";
import {
  A as Zr,
  B as bs,
  C as vs,
  a as Jt,
  b as xe,
  c as Gn,
  d as cs,
  e as Qr,
  f as us,
  g as Nt,
  h as Jr,
  i as ps,
  j as $r,
  k as Ft,
  m as ds,
  n as ms,
  p as _s,
  q as Vn,
  s as gs,
  t as fs,
  v as hs,
} from "./chunk-GW7ACP5Y.js";
import {
  a as Fs,
  b as Os,
  c as it,
  e as Us,
  f as Ws,
} from "./chunk-NKKAQ2TM.js";
import "./chunk-6QXOH4QT.js";
import "./chunk-VNJLWCEK.js";
import { a as _e } from "./chunk-LI3EY6TN.js";
import { a as Is } from "./chunk-ZZKST2S4.js";
import {
  a as Wn,
  c as $o,
  g as So,
  s as is,
  t as as,
} from "./chunk-VYVGNWSX.js";
import "./chunk-LTCM4FBG.js";
import { c as Un } from "./chunk-NCBAOU5T.js";
import {
  d as ns,
  g as Hn,
  h as rs,
  i as Zo,
  n as ot,
  r as f,
} from "./chunk-A7W4HGSY.js";
import {
  a as Po,
  b as On,
  c as os,
  g as J,
  i as ht,
  j as R,
  k as Jo,
  m as _,
} from "./chunk-DNKCKFVA.js";
import { a as M } from "./chunk-OZ6CSMNN.js";
import { d as u, e as m, f as ts } from "./chunk-XL5OQFLS.js";
function Zn() {
  return location.href;
}
function vl(t) {
  return t == 1 || t == 2 || t == 13;
}
var Kn = u(M(), 1);
var ri = u(_(), 1),
  E_ = Kn.default.lazy(() => import("./metrics-4CV6ZDD4.js"));
function Cl(t) {
  let e = is();
  return e.metrics
    ? (0, ri.jsx)(Kn.Suspense, {
        children: (0, ri.jsx)(E_, { metrics: e.metrics, ...t }),
      })
    : null;
}
var Rl = u(rt(), 1);
var an = {
  HeaderContainer: "NS66-vzC3B4-",
  PillTabs: "HfUir0ARlEg-",
  PillTabItem: "_6YKIMRZJgjI-",
  Active: "cVEuwqCXKqk-",
};
var er = u(_(), 1);
function Pl(t) {
  let { gamepadUiTabs: e } = t;
  if (e.length === 0) return null;
  let o = Zn(),
    n = [...e]
      .sort((r, i) => i.href.length - r.href.length)
      .find((r) => o.startsWith(r.href));
  return (0, er.jsx)("div", {
    className: an.HeaderContainer,
    children: (0, er.jsx)("div", {
      className: an.PillTabs,
      children: e.map((r) =>
        (0, er.jsx)(
          x,
          {
            gamepadFocusable: !0,
            noFocusRing: !0,
            className: (0, Rl.default)(
              an.PillTabItem,
              r === n && an.Active,
              r.className,
            ),
            snr: !0,
            to: r.href,
            children: r.label,
          },
          r.href,
        ),
      ),
    }),
  });
}
var tr = u(M());
var Sl = "D6LHFgi1JYw-";
var wl = "-ygkyFbonHM-";
var Ml = "-ocPE8koGWA-";
var Dl = "wScBjl6G2E8-";
var ii = "J8QB0JMqyaM-";
var yl = "-mBLWqp7JFk-";
var Tl = "./cookies_brazilian-K4WP2HCA.json";
var kl = "./cookies_bulgarian-3F25L7AA.json";
var Al = "./cookies_czech-WZ2UGHAA.json";
var xl = "./cookies_danish-UON7TKDA.json";
var El = "./cookies_dutch-GCBILAAA.json";
var Ll = "./cookies_english-FDTNVUAA.json";
var Bl = "./cookies_finnish-ZUSYHYAA.json";
var Il = "./cookies_french-NATP6HBA.json";
var Nl = "./cookies_german-5QBUI7CA.json";
var Fl = "./cookies_greek-AWKYX4DA.json";
var Ol = "./cookies_hungarian-7N6TKDDA.json";
var Ul = "./cookies_indonesian-TTEY42CA.json";
var Wl = "./cookies_italian-YNFQT3DA.json";
var Hl = "./cookies_japanese-XFKOMEAA.json";
var Gl = "./cookies_koreana-Z2MV63BA.json";
var Vl = "./cookies_latam-KMOOIBBA.json";
var zl = "./cookies_norwegian-NQ26SHAA.json";
var jl = "./cookies_polish-535OIIBA.json";
var ql = "./cookies_portuguese-UMJSLPBA.json";
var Yl = "./cookies_romanian-JBZRLJBA.json";
var Xl = "./cookies_russian-KMFNLJDA.json";
var Ql = "./cookies_schinese-4CG5QJAA.json";
var Jl = "./cookies_spanish-ATUIC6DA.json";
var $l = "./cookies_swedish-4LF6D6AA.json";
var Zl = "./cookies_tchinese-4CGDFUBA.json";
var Kl = "./cookies_thai-UBSW2GCA.json";
var ec = "./cookies_turkish-DHSZCYAA.json";
var tc = "./cookies_ukrainian-WH35XMDA.json";
var oc = "./cookies_vietnamese-VG3ISECA.json";
var U = {};
U.brazilian = Tl;
U.bulgarian = kl;
U.czech = Al;
U.danish = xl;
U.dutch = El;
U.english = Ll;
U.finnish = Bl;
U.french = Il;
U.german = Nl;
U.greek = Fl;
U.hungarian = Ol;
U.indonesian = Ul;
U.italian = Wl;
U.japanese = Hl;
U.koreana = Gl;
U.latam = Vl;
U.norwegian = zl;
U.polish = jl;
U.portuguese = ql;
U.romanian = Yl;
U.russian = Xl;
U.schinese = Ql;
U.spanish = Jl;
U.swedish = $l;
U.tchinese = Zl;
U.thai = Kl;
U.turkish = ec;
U.ukrainian = tc;
U.vietnamese = oc;
async function ai(t) {
  if (U[t]) return (await fetch(new URL(U[t], import.meta.url))).json();
}
var sn = Un(ai);
var Ue = u(_());
async function nc(t) {
  let e = R.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
    o = new FormData();
  o.set("bAllow", t.toString()), o.set("sessionId", Pt(zs));
  let n = await fetch(e, { method: "POST", credentials: "include", body: o });
  if (n.ok) {
    let r = await n.json();
    r.transfer_urls &&
      r.transfer_params &&
      r.transfer_urls.forEach(async (i) => {
        let a = new FormData();
        a.set("transfer_params", r.transfer_params),
          fetch(i, { method: "POST", credentials: "include", body: a });
      });
  }
}
function cg() {
  let t = (0, tr.useRef)(null);
  return (
    (0, tr.useEffect)(() => {
      let e = setTimeout(() => {
        t.current?.show();
      }, 4e3);
      return () => {
        clearTimeout(e);
      };
    }, []),
    (0, Ue.jsxs)("dialog", {
      className: Sl,
      ref: t,
      children: [
        (0, Ue.jsxs)("div", {
          className: wl,
          children: [
            (0, Ue.jsx)("div", {
              className: ii,
              children: sn.Localize("#CookiePrefPopup_Title"),
            }),
            (0, Ue.jsx)("div", {
              className: ii,
              children: Wn(
                sn.Localize("#CookiePrefPopup_Desc"),
                (0, Ue.jsx)("a", {
                  href: R.STORE_BASE_URL + "account/cookiepreferences",
                }),
                (0, Ue.jsx)("a", {
                  href: R.STORE_BASE_URL + "privacy_agreement",
                }),
              ),
            }),
          ],
        }),
        (0, Ue.jsxs)("div", {
          className: yl,
          children: [
            (0, Ue.jsx)("button", {
              className: Ml,
              onClick: async () => {
                await nc(1), t.current?.close();
              },
              children: sn.Localize("#CookiePrefPopup_AcceptAll"),
            }),
            (0, Ue.jsx)("button", {
              className: Dl,
              onClick: async () => {
                await nc(0), t.current?.close();
              },
              children: sn.Localize("#CookiePrefPopup_RejectAll"),
            }),
          ],
        }),
      ],
    })
  );
}
function rc() {
  let t = js();
  return t && t.preference_state != 4 ? null : (0, Ue.jsx)(cg, {});
}
var We = u(M());
var ln = "GamepadInput";
var ug = "Checkout",
  pg = "PinnedView",
  or = class {
    PostMessage(e) {}
    RegisterForMessage(e) {}
  },
  cn = class {
    m_fnCallback = void 0;
    constructor() {
      SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
    }
    RegisterForMessage(e) {
      this.m_fnCallback = e;
    }
    PostMessage(e) {
      let o = JSON.stringify(e);
      SteamClient.BrowserView.PostMessageToParent(ln, o);
    }
    OnMessage(e, o) {
      if (e == ln) {
        let n = JSON.parse(o);
        this.m_fnCallback(n);
      } else if (e == ug) {
        let n = JSON.parse(o);
        if (n.action == "paypal_success")
          try {
            window.OnPayPalSuccess(n.transid);
          } catch {}
        else if (n.action == "paypal_cancel")
          try {
            window.OnPayPalCancel(n.transid);
          } catch {}
      } else if (e == pg) {
        let n = JSON.parse(o);
        try {
          window.HandleOverlayWindowPinnedView(
            n.bPinned == !0,
            n.bShowPinnedView == !0,
          );
        } catch {}
      }
    }
  };
m([f], cn.prototype, "OnMessage", 1);
var un = class {
  m_postWindow;
  m_fnCallback = void 0;
  constructor(e) {
    (this.m_postWindow = e), window.addEventListener("message", this.OnMessage);
  }
  RegisterForMessage(e) {
    this.m_fnCallback = e;
  }
  PostMessage(e) {
    let o = JSON.stringify(e);
    this.m_postWindow.postMessage({ gamepadMessage: ln, args: o }, "*");
  }
  OnMessage(e) {
    let o = e?.data;
    if (o && o.gamepadMessage == ln && o.args) {
      let n = JSON.parse(o.args);
      this.m_fnCallback(n);
    }
  }
};
m([f], un.prototype, "OnMessage", 1);
var $t = class {
  m_NavigationController;
  m_postMessage;
  m_bIsGamepadInputExternallyControlled = !1;
  constructor(e) {
    if (((this.m_NavigationController = e), dg()))
      (this.m_bIsGamepadInputExternallyControlled = !0),
        (this.m_postMessage = new cn()),
        this.m_NavigationController.UpdateDefaultSourceToGamepad();
    else {
      let o = window.top;
      o && o != window.self
        ? ((this.m_bIsGamepadInputExternallyControlled = !0),
          (this.m_postMessage = new un(o)))
        : ((this.m_bIsGamepadInputExternallyControlled = !1),
          (this.m_postMessage = new or()));
    }
    this.m_postMessage.RegisterForMessage(this.OnMessage),
      window.addEventListener("unload", this.PostPageUnloading),
      this.m_NavigationController.RegisterForUnhandledButtonDownEvents((o) =>
        this.PostButtonPressToSteam(o.detail.button),
      ),
      this.UpdateActionDescriptions({}),
      this.SendGameInputState("CGamepadWebBridgeClient constructor");
  }
  RegisterForFocusChanged(e) {
    return e.FocusChangedCallbacks.Register(this.OnFocusChanged).Unregister;
  }
  BIsGamepadInputExternallyControlled() {
    return this.m_bIsGamepadInputExternallyControlled;
  }
  BFromActiveNavTree(e, o) {
    let n = o?.Tree;
    return n || (n = e?.Tree), n && n.Controller.IsActiveFocusNavTree(n);
  }
  OnFocusChanged(e, o, n) {
    let r = n ? n.GetActiveActionDescriptions() : {};
    this.BFromActiveNavTree(o, n) && this.UpdateActionDescriptions(r);
  }
  UpdateActionDescriptions(e) {
    this.m_postMessage.PostMessage({
      type: "UpdateActionDescriptions",
      data: { descriptions: e },
    });
  }
  OnMessage(e) {
    switch (e.type) {
      case "TakeFocus":
        this.m_NavigationController.TakeFocusChangingIFrame();
        break;
      case "ForwardedGameEventDetail":
        this.m_NavigationController.DispatchVirtualGamepad(
          e.data.event,
          e.data.details,
        );
        break;
    }
  }
  SendGameInputState(e) {
    let o = 3;
    window.bSupportsGamepadUI && (o = 4),
      this.m_postMessage.PostMessage({
        type: "GameInputState",
        data: { source: e, support: o },
      });
  }
  PostButtonPressToSteam(e) {
    this.m_postMessage.PostMessage({
      type: "ButtonPressed",
      data: { button: e },
    });
  }
  PostPageUnloading() {
    this.m_postMessage.PostMessage({
      type: "PageUnloading",
      data: { location: window.location.href },
    });
  }
};
m([f], $t.prototype, "OnFocusChanged", 1),
  m([f], $t.prototype, "OnMessage", 1),
  m([f], $t.prototype, "PostPageUnloading", 1);
function dg() {
  return (
    Ko("BrowserView.RegisterForMessageFromParent") &&
    Ko("BrowserView.PostMessageToParent")
  );
}
var ic = [
    { index: 0, type: 1, category: "action" },
    { index: 1, type: 2, category: "action" },
    { index: 2, type: 3, category: "action" },
    { index: 3, type: 4, category: "action" },
    { index: 4, type: 5, category: "action" },
    { index: 5, type: 6, category: "action" },
    { index: 6, type: 7, category: "action" },
    { index: 7, type: 8, category: "action" },
    { index: 8, type: 13, category: "action" },
    { index: 9, type: 14, category: "action" },
    { index: 10, type: 15, category: "action" },
    { index: 11, type: 16, category: "action" },
    { index: 12, type: 9, category: "navigation" },
    { index: 13, type: 10, category: "navigation" },
    { index: 14, type: 11, category: "navigation" },
    { index: 15, type: 12, category: "navigation" },
    { index: 16, type: 27, category: "action" },
    { index: 17, type: 13, category: "action" },
  ],
  pn = class extends Ot {
    m_rgGamepadStatus = [];
    constructor() {
      super(),
        this.SetSourceType(1),
        window.addEventListener("gamepadconnected", (e) => {
          this.m_bGamepadDetected ||
            (this.OnGamepadDetected(), this.PollGamepads());
        });
    }
    PollGamepads() {
      let e = navigator.getGamepads(),
        o = !1;
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (!r) continue;
        this.m_rgGamepadStatus[n] ||
          (this.m_rgGamepadStatus[n] = { buttons: [] });
        let i = this.m_rgGamepadStatus[n];
        for (let a = 0; a < ic.length; a++) {
          let s = ic[a],
            l = s.index;
          r.buttons[l] &&
            (r.buttons[l].pressed
              ? ((o = !0),
                i.buttons[l] ||
                  ((i.buttons[l] = !0), this.OnButtonDown(s.type)))
              : i.buttons[l] && (this.OnButtonUp(s.type), (i.buttons[l] = !1)));
        }
      }
      requestAnimationFrame(this.PollGamepads);
    }
  };
m([f], pn.prototype, "PollGamepads", 1);
var Zt = class extends Ot {
  m_lastButtonDown = 0;
  constructor(e) {
    super(),
      this.SetSourceType(2),
      e.addEventListener("keydown", this.OnKeyDown),
      e.addEventListener("keyup", this.OnKeyUp),
      e.addEventListener("blur", this.Reset);
  }
  OnKeyDown(e) {
    let o = this.TranslateKey(e);
    o != 0 &&
      (e.preventDefault(),
      o != this.m_lastButtonDown &&
        (this.Reset(), this.OnButtonDown(o), (this.m_lastButtonDown = o)));
  }
  OnKeyUp(e) {
    let o = this.TranslateKey(e);
    o != 0 &&
      (this.OnButtonUp(o), (this.m_lastButtonDown = 0), e.preventDefault());
  }
  Reset() {
    this.m_lastButtonDown != 0 &&
      (this.OnButtonUp(this.m_lastButtonDown), (this.m_lastButtonDown = 0));
  }
  GetKeycodeFromEvent(e) {
    return J.PLATFORM === "linux" && e.key.length > 1
      ? e.key || e.code
      : e.code || e.key;
  }
  BShouldSwallowEventForTextInputWorkaround(e) {
    if (
      !(
        _s(e.target) &&
        (e.target.nodeName === "INPUT" ||
          e.target.nodeName === "TEXTAREA" ||
          e.target.hasAttribute("contenteditable"))
      )
    )
      return !1;
    if (e.target.hasAttribute("contenteditable")) return !0;
    let n = this.GetKeycodeFromEvent(e),
      r = e.target,
      a = Array.from(r.ownerDocument.getElementsByClassName("gpfocus")).some(
        (s) =>
          Array.from(s.classList).some((l) => l.includes("virtualkeyboard")),
      );
    switch (n) {
      case "ArrowUp": {
        if (a) return !0;
        let s = r?.value.indexOf(`
`);
        return (
          e.target.nodeName === "TEXTAREA" &&
          s >= 0 &&
          s < (r?.selectionStart ?? 0)
        );
      }
      case "ArrowDown": {
        if (a) return !0;
        let s = r?.value.lastIndexOf(`
`);
        return (
          e.target.nodeName === "TEXTAREA" &&
          s >= 0 &&
          s >= (r?.selectionStart ?? 0) &&
          (r?.selectionEnd ?? 0) < r?.value.length
        );
      }
      case "ArrowLeft":
        return a
          ? !0
          : (r?.selectionStart ?? 0) > 0 && (r?.selectionEnd ?? 0) > 0;
      case "ArrowRight":
        return a
          ? !0
          : (r?.selectionStart ?? 0) < r?.value.length &&
              (r?.selectionEnd ?? 0) < r?.value.length;
      case "Enter":
        return !0;
      case "Backspace":
        return !0;
      default:
        return !1;
    }
  }
  TranslateKey(e) {
    let o = this.GetKeycodeFromEvent(e),
      n = e.ctrlKey,
      r = e.shiftKey;
    if (this.BShouldSwallowEventForTextInputWorkaround(e)) return 0;
    if (n && r)
      switch (o) {
        case "Digit4":
          return 7;
        case "Digit5":
          return 8;
        default:
          return 0;
      }
    if (n)
      switch (o) {
        case "Digit1":
          return 27;
        case "Digit2":
          return 28;
        case "Digit3":
          return 13;
        case "Digit4":
          return 5;
        case "Digit5":
          return 6;
        case "Digit6":
          return 15;
        case "Digit7":
          return 16;
        case "Digit8":
          return 4;
        case "Digit9":
          return 13;
        case "Digit0":
          return 14;
      }
    switch (o) {
      case "Escape":
        return 2;
      case "Enter":
        return 1;
      case "Backspace":
        return 3;
      case "ArrowUp":
        return 9;
      case "ArrowDown":
        return 10;
      case "ArrowLeft":
        return 11;
      case "ArrowRight":
        return 12;
    }
    return 0;
  }
};
m([f], Zt.prototype, "OnKeyDown", 1),
  m([f], Zt.prototype, "OnKeyUp", 1),
  m([f], Zt.prototype, "Reset", 1);
var wt = class extends Ot {
  m_nAccumulatedMouseMovement = 0;
  m_bFirstMouseUpdate = !0;
  m_nLastScreenX;
  m_nLastScreenY;
  m_lastButtonDown = 0;
  constructor(e) {
    super(),
      this.SetSourceType(3),
      e.addEventListener("mousedown", this.OnMouseDown),
      e.addEventListener("mouseup", this.OnMouseUp),
      e.addEventListener("mousemove", this.OnMouseMove),
      e.addEventListener("blur", this.Reset);
  }
  TranslateKey(e) {
    switch (e.button) {
      case 3:
        return 2;
      default:
        return 0;
    }
  }
  OnMouseDown(e) {
    if (e.defaultPrevented) return;
    let o = this.TranslateKey(e);
    o != 0 &&
      (e.preventDefault(),
      o != this.m_lastButtonDown &&
        (this.Reset(), this.OnButtonDown(o), (this.m_lastButtonDown = o)),
      this.OnNavigationTypeChanged(3));
  }
  OnMouseUp(e) {
    let o = this.TranslateKey(e);
    o != 0 &&
      (this.OnButtonUp(o), (this.m_lastButtonDown = 0), e.preventDefault());
  }
  OnMouseMove(e) {
    if (!e.defaultPrevented) {
      if (this.m_bFirstMouseUpdate) {
        (this.m_nLastScreenX = e.screenX),
          (this.m_nLastScreenY = e.screenY),
          (this.m_bFirstMouseUpdate = !1);
        return;
      }
      (this.m_nAccumulatedMouseMovement +=
        Math.abs(e.screenX - this.m_nLastScreenX) +
        Math.abs(e.screenY - this.m_nLastScreenY)),
        this.m_nAccumulatedMouseMovement > 500 &&
          (this.Reset(), this.OnNavigationTypeChanged(3));
    }
  }
  Reset() {
    (this.m_nAccumulatedMouseMovement = 0),
      (this.m_bFirstMouseUpdate = !0),
      this.m_lastButtonDown != 0 &&
        (this.OnButtonUp(this.m_lastButtonDown), (this.m_lastButtonDown = 0));
  }
};
m([f], wt.prototype, "TranslateKey", 1),
  m([f], wt.prototype, "OnMouseDown", 1),
  m([f], wt.prototype, "OnMouseUp", 1),
  m([f], wt.prototype, "OnMouseMove", 1),
  m([f], wt.prototype, "Reset", 1);
var Ao = class extends Ot {
  constructor(e) {
    super(),
      this.SetSourceType(4),
      e.addEventListener("touchstart", this.OnTouchStart),
      e.addEventListener("touchend", this.OnTouchEnd);
  }
  OnTouchStart(e) {
    e.defaultPrevented || this.OnNavigationTypeChanged(4);
  }
  OnTouchEnd(e) {
    e.defaultPrevented || this.OnNavigationTypeChanged(4);
  }
};
m([f], Ao.prototype, "OnTouchStart", 1), m([f], Ao.prototype, "OnTouchEnd", 1);
var ci = "VirtualKeyboardMessage";
function sc(t) {
  return t && t.type === ci;
}
var Mt = class {
  m_ownerWindow;
  constructor() {}
  Init(e) {
    return (
      (this.m_ownerWindow = e),
      this.m_ownerWindow.addEventListener("message", this.OnMessage),
      () => {
        this.m_ownerWindow.removeEventListener("message", this.OnMessage),
          (this.m_ownerWindow = void 0);
      }
    );
  }
  CreateVirtualKeyboardRef() {
    return {
      ShowVirtualKeyboard: this.ShowVirtualKeyboard,
      ShowModalKeyboard: this.ShowModalKeyboard,
      SetAsCurrentVirtualKeyboardTarget: () => {},
      HideVirtualKeyboard: this.HideVirtualKeyboard,
      DelayHideVirtualKeyboard: this.HideVirtualKeyboard,
      BIsActive: () => !0,
      BIsElementValidForInput: () => !0,
    };
  }
  ShowVirtualKeyboard() {
    this.SendMessage({ message: "ShowVirtualKeyboard" });
  }
  ShowModalKeyboard() {
    this.SendMessage({ message: "ShowModalKeyboard" });
  }
  HideVirtualKeyboard(e) {
    this.SendMessage({ message: "HideVirtualKeyboard", msDelay: e });
  }
  OnBrowserViewMessage(e, o) {
    e == ci && this.InternalDispatchMessage(JSON.parse(o));
  }
  OnMessage(e) {
    this.InternalDispatchMessage(e.data);
  }
  InternalDispatchMessage(e) {
    if (sc(e))
      switch (e.message) {
        case "OnEnterKeyPress":
          break;
      }
  }
  SendMessage(e) {
    let o = { type: "VirtualKeyboardMessage", ...e };
    Ko("BrowserView.PostMessageToParent")
      ? SteamClient.BrowserView.PostMessageToParent(o.type, JSON.stringify(o))
      : this.m_ownerWindow &&
        (Hn(
          this.m_ownerWindow.parent &&
            this.m_ownerWindow.parent != this.m_ownerWindow,
          "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
        ),
        this.m_ownerWindow.parent.postMessage(o, "*"));
  }
};
m([f], Mt.prototype, "ShowVirtualKeyboard", 1),
  m([f], Mt.prototype, "ShowModalKeyboard", 1),
  m([f], Mt.prototype, "HideVirtualKeyboard", 1),
  m([f], Mt.prototype, "OnBrowserViewMessage", 1),
  m([f], Mt.prototype, "OnMessage", 1);
var li = class {
  m_showKeyboard;
  m_showModalKeyboard;
  m_hideKeyboard;
  constructor(e, o, n, r) {
    (this.m_showKeyboard = o),
      (this.m_showModalKeyboard = n),
      (this.m_hideKeyboard = r),
      e.on("message", this.OnMessage);
  }
  OnMessage(e, o, n) {
    if (e == ci) {
      let r = JSON.parse(o);
      if (sc(r))
        switch (r.message) {
          case "ShowVirtualKeyboard":
            this.m_showKeyboard();
            break;
          case "ShowModalKeyboard":
            this.m_showModalKeyboard();
            break;
          case "HideVirtualKeyboard":
            this.m_hideKeyboard();
            break;
        }
    }
  }
};
m([f], li.prototype, "OnMessage", 1);
var Dt = u(_());
function lc(t) {
  let [e] = We.useState(() => new ws()),
    [o, n] = We.useState(),
    [r] = We.useState(() => new Mt()),
    [i, a] = We.useState(void 0),
    s = it();
  return (
    We.useEffect(() => {
      if (s && !o) {
        let p = new $t(e);
        n(p), a(p.BIsGamepadInputExternallyControlled());
      }
    }, [s, o, e]),
    We.useEffect(() => {
      if (s) return r.Init(window);
    }, [s, r]),
    (0, Dt.jsxs)(Ds, {
      controller: e,
      children: [
        i === !1 && s === !0 && (0, Dt.jsx)(_g, {}),
        (i === !0 || s === !0) && (0, Dt.jsx)(gg, {}),
        s && (0, Dt.jsx)(fg, {}),
        (0, Dt.jsxs)(ys, {
          ownerWindow: window,
          children: [
            o && (0, Dt.jsx)(mg, { bridge: o }),
            (0, Dt.jsx)(Ms, { factory: r, children: t.children }),
          ],
        }),
      ],
    })
  );
}
function mg(t) {
  let { bridge: e } = t,
    o = Ts();
  return (
    We.useEffect(() => {
      if (!(!o || !e)) return e.RegisterForFocusChanged(o);
    }, [o, e]),
    null
  );
}
function _g() {
  let [t] = We.useState(() => new pn());
  return Kr(t), null;
}
function ui(t) {
  let [e, o] = We.useState(void 0);
  We.useEffect(() => o(new t(window)), [t]), Kr(e);
}
function gg() {
  return ui(Zt), null;
}
function fg() {
  return ui(wt), ui(Ao), null;
}
var Qi = u(rt(), 1),
  cp = u(M(), 1);
var ir = u(M()),
  cc = u(M());
var xo = u(M());
function nr(t) {
  let [e, o] = (0, xo.useState)(!1);
  return (
    (0, xo.useEffect)(() => {
      (0, xo.startTransition)(() => {
        o(!0);
      });
    }, []),
    e ? t.children : (t.fallback ?? null)
  );
}
var rr = u(_());
function ar(t) {
  let { dynamicImport: e, fallback: o, ...n } = t,
    [r] = (0, ir.useState)(() =>
      cc.default.lazy(async () => ({ default: await e() })),
    );
  return (0, rr.jsx)(nr, {
    fallback: o,
    children: (0, rr.jsx)(ir.Suspense, {
      fallback: o,
      children: (0, rr.jsx)(r, { ...n }),
    }),
  });
}
var ou = u(rt(), 1),
  Ht = u(M(), 1);
var Eo = u(M(), 1);
var uc = "FbRIoYoNi9g-";
var pc = "vnGo6vvKWMk-";
var dc = "kCO5XYi3veo-";
var mc = "Ca4SW9HC3ME-";
var _c = "P0JO-Sl0erw-";
var at = u(_(), 1);
async function pi(t, e) {
  let o = new FormData();
  o.set("language", t);
  let n = await fetch(e, {
    method: "POST",
    credentials: "same-origin",
    body: o,
  });
  if (!n.ok) throw n;
}
function gc(t) {
  let {
      open: e,
      menuAction: o,
      changeLanguagePath: n,
      bLoggedIn: r,
      onDismiss: i,
    } = t,
    [a, s] = (0, Eo.useState)(!1),
    l = (0, Eo.useRef)(null);
  (0, Eo.useEffect)(() => {
    e ? l.current?.showModal() : l.current?.close();
  }, [e]);
  async function c(p) {
    s(!0);
    try {
      await pi(p, n);
    } catch (d) {
      console.error(d), s(!1);
      return;
    }
    r
      ? (location.href = R.STORE_BASE_URL + "account/languagepreferences/")
      : o.href
        ? (location.href = o.href)
        : location.reload();
  }
  return (0, at.jsx)("dialog", {
    ref: l,
    className: uc,
    onMouseDown: (p) => p.target === l.current && i(),
    children: (0, at.jsxs)("div", {
      children: [
        (0, at.jsx)("hr", { className: dc }),
        (0, at.jsxs)("form", {
          method: "dialog",
          className: pc,
          onSubmit: (p) => c(p.target.elements.namedItem("language")?.value),
          children: [
            (0, at.jsx)("select", {
              disabled: a,
              name: "language",
              onChange: (p) => c(p.target.value),
              defaultValue: So().strLanguage,
              children: t.menuAction.children?.map((p) =>
                (0, at.jsx)(
                  "option",
                  { value: p.action_parameters?.language, children: p.label },
                  p.label,
                ),
              ),
            }),
            (0, at.jsx)("div", {
              className: mc,
              children: (0, at.jsx)("input", {
                type: "submit",
                value: "OK",
                className: _c,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var di = "h3Jy-1Il1os-";
var fc = "HOrB6lehQpg-";
var hc = "_7iCcob-JJ4g-";
var bc = "QYT54GHN-rI-";
var vc = "_79DIT7RUQ5g-";
var mi = "Hxi-pnf9Xlw-";
var _i = "TwsehSqoph8-";
var Cc = "cQPGTl-Lp-0-";
var Rc = "rzUmQa-ty1I-";
var gi = "_2CYMhC951F4-";
var Pc = "h8dQ-Uyh4L0-";
var Sc = "NzGUCXVXDcA-";
var wc = "L09rGTMfR9c-";
var Mc = "./global_header_brazilian-QF2T6MCA.json";
var Dc = "./global_header_bulgarian-FRYAWQDA.json";
var yc = "./global_header_czech-ZHIWGADA.json";
var Tc = "./global_header_danish-GTGIGYBA.json";
var kc = "./global_header_dutch-HDK4MSCA.json";
var Ac = "./global_header_english-QERWLJCA.json";
var xc = "./global_header_finnish-JMO5FZDA.json";
var Ec = "./global_header_french-CJNSG7BA.json";
var Lc = "./global_header_german-3CHRXIAA.json";
var Bc = "./global_header_greek-U2VV4XCA.json";
var Ic = "./global_header_hungarian-726J65DA.json";
var Nc = "./global_header_indonesian-B4TLVUBA.json";
var Fc = "./global_header_italian-ED6Y5KDA.json";
var Oc = "./global_header_japanese-QRY6W7DA.json";
var Uc = "./global_header_koreana-HNT7DNDA.json";
var Wc = "./global_header_latam-JTAMHMCA.json";
var Hc = "./global_header_norwegian-PONCKJAA.json";
var Gc = "./global_header_polish-YSLROOBA.json";
var Vc = "./global_header_portuguese-T2BVTTDA.json";
var zc = "./global_header_romanian-SL2I5MDA.json";
var jc = "./global_header_russian-5SGMOOAA.json";
var qc = "./global_header_sc_schinese-QVBLUWAA.json";
var Yc = "./global_header_schinese-WAEK2BBA.json";
var Xc = "./global_header_spanish-J5UIHOBA.json";
var Qc = "./global_header_swedish-MTG4WSBA.json";
var Jc = "./global_header_tchinese-LOVT6ADA.json";
var $c = "./global_header_thai-Y6GA43AA.json";
var Zc = "./global_header_turkish-S3H7YCBA.json";
var Kc = "./global_header_ukrainian-OEDO4ADA.json";
var eu = "./global_header_vietnamese-W33LN2DA.json";
var N = {};
N.brazilian = Mc;
N.bulgarian = Dc;
N.czech = yc;
N.danish = Tc;
N.dutch = kc;
N.english = Ac;
N.finnish = xc;
N.french = Ec;
N.german = Lc;
N.greek = Bc;
N.hungarian = Ic;
N.indonesian = Nc;
N.italian = Fc;
N.japanese = Oc;
N.koreana = Uc;
N.latam = Wc;
N.norwegian = Hc;
N.polish = Gc;
N.portuguese = Vc;
N.romanian = zc;
N.russian = jc;
N.sc_schinese = qc;
N.schinese = Yc;
N.spanish = Xc;
N.swedish = Qc;
N.tchinese = Jc;
N.thai = $c;
N.turkish = Zc;
N.ukrainian = Kc;
N.vietnamese = eu;
async function fi(t) {
  if (N[t]) return (await fetch(new URL(N[t], import.meta.url))).json();
}
var W = Un(fi);
function sr() {
  let t = document.createElement("form");
  (t.action = "/logout/"),
    (t.method = "POST"),
    document.body.appendChild(t),
    t.submit();
}
var C = u(A_());
var D = C.Message;
var hi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              country_code: { n: 1, br: P.readString, bw: S.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
    }
  },
  bi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotions || re(t.M()),
        D.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { promotions: { n: 1, c: vi, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
    }
  },
  vi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotionid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              promotionid: { n: 1, br: P.readUint32, bw: S.writeUint32 },
              promotion_description: {
                n: 2,
                br: P.readString,
                bw: S.writeString,
              },
              minimum_cart_amount: {
                n: 3,
                br: P.readInt64String,
                bw: S.writeInt64String,
              },
              minimum_cart_amount_for_display: {
                n: 4,
                br: P.readInt64String,
                bw: S.writeInt64String,
              },
              discount_amount: {
                n: 5,
                br: P.readInt64String,
                bw: S.writeInt64String,
              },
              currency_code: { n: 6, br: P.readInt32, bw: S.writeInt32 },
              available_use_count: { n: 7, br: P.readInt32, bw: S.writeInt32 },
              promotional_discount_type: {
                n: 8,
                br: P.readInt32,
                bw: S.writeInt32,
              },
              loyalty_reward_id: { n: 9, br: P.readInt32, bw: S.writeInt32 },
              localized_name_token: {
                n: 10,
                br: P.readString,
                bw: S.writeString,
              },
              max_use_count: { n: 11, br: P.readInt32, bw: S.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
    }
  },
  Ci = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.has_wallet || re(t.M()),
        D.initialize(this, e, 0, -1, [13], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              has_wallet: { n: 1, br: P.readBool, bw: S.writeBool },
              user_country_code: { n: 2, br: P.readString, bw: S.writeString },
              wallet_country_code: {
                n: 3,
                br: P.readString,
                bw: S.writeString,
              },
              wallet_state: { n: 4, br: P.readString, bw: S.writeString },
              balance: { n: 5, br: P.readInt64String, bw: S.writeInt64String },
              delayed_balance: {
                n: 6,
                br: P.readInt64String,
                bw: S.writeInt64String,
              },
              currency_code: { n: 7, br: P.readInt32, bw: S.writeInt32 },
              time_most_recent_txn: {
                n: 8,
                br: P.readUint32,
                bw: S.writeUint32,
              },
              most_recent_txnid: {
                n: 9,
                br: P.readUint64String,
                bw: S.writeUint64String,
              },
              balance_in_usd: {
                n: 10,
                br: P.readInt64String,
                bw: S.writeInt64String,
              },
              delayed_balance_in_usd: {
                n: 11,
                br: P.readInt64String,
                bw: S.writeInt64String,
              },
              has_wallet_in_other_regions: {
                n: 12,
                br: P.readBool,
                bw: S.writeBool,
              },
              other_regions: {
                n: 13,
                r: !0,
                q: !0,
                br: P.readInt32,
                pbr: P.readPackedInt32,
                bw: S.writeRepeatedInt32,
              },
              formatted_balance: { n: 14, br: P.readString, bw: S.writeString },
              formatted_delayed_balance: {
                n: 15,
                br: P.readString,
                bw: S.writeString,
              },
              delayed_balance_available_min_time: {
                n: 16,
                br: P.readInt32,
                bw: S.writeInt32,
              },
              delayed_balance_available_max_time: {
                n: 17,
                br: P.readInt32,
                bw: S.writeInt32,
              },
              delayed_balance_newest_source: {
                n: 18,
                br: P.readInt32,
                bw: S.writeInt32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetWalletDetails_Response";
    }
  },
  Ri = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_balance_in_usd || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              include_balance_in_usd: { n: 1, br: P.readBool, bw: S.writeBool },
              wallet_region: { n: 2, d: 1, br: P.readInt32, bw: S.writeInt32 },
              include_formatted_balance: {
                n: 3,
                br: P.readBool,
                bw: S.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetClientWalletDetails_Request";
    }
  },
  Pi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), D.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return e ? { $jspbMessageInstance: o } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Request";
    }
  },
  Si = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.pwid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              pwid: { n: 1, br: P.readUint32, bw: S.writeUint32 },
              identity_verification: {
                n: 2,
                br: P.readUint32,
                bw: S.writeUint32,
              },
              performed_age_verification: {
                n: 3,
                br: P.readBool,
                bw: S.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Response";
    }
  },
  wi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { appid: { n: 1, br: P.readUint32, bw: S.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Request";
    }
  },
  Mi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), D.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return e ? { $jspbMessageInstance: o } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Response";
    }
  },
  Di = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: P.readFixed64String,
                bw: S.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Request";
    }
  },
  yi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { country: { n: 1, br: P.readString, bw: S.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Response";
    }
  },
  Ti = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_limit || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_limit: { n: 1, br: P.readUint32, bw: S.writeUint32 },
              invite_duration: { n: 2, br: P.readUint32, bw: S.writeUint32 },
              invite_note: { n: 3, br: P.readString, bw: S.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Request";
    }
  },
  lr = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_token: { n: 1, br: P.readString, bw: S.writeString },
              invite_limit: {
                n: 2,
                br: P.readUint64String,
                bw: S.writeUint64String,
              },
              invite_duration: {
                n: 3,
                br: P.readUint64String,
                bw: S.writeUint64String,
              },
              time_created: { n: 4, br: P.readFixed32, bw: S.writeFixed32 },
              valid: { n: 5, br: P.readBool, bw: S.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Response";
    }
  },
  ki = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), D.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return e ? { $jspbMessageInstance: o } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Request";
    }
  },
  Ai = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tokens || re(t.M()),
        D.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tokens: { n: 1, c: lr, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Response";
    }
  },
  xi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: P.readFixed64String,
                bw: S.writeFixed64String,
              },
              invite_token: { n: 2, br: P.readString, bw: S.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Request";
    }
  },
  Ei = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.valid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              valid: { n: 1, br: P.readBool, bw: S.writeBool },
              steamid: {
                n: 2,
                br: P.readUint64String,
                bw: S.writeUint64String,
              },
              invite_duration: {
                n: 3,
                br: P.readUint64String,
                bw: S.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Response";
    }
  },
  Li = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: P.readFixed64String,
                bw: S.writeFixed64String,
              },
              invite_token: { n: 2, br: P.readString, bw: S.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Request";
    }
  },
  Bi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), D.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return e ? { $jspbMessageInstance: o } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Response";
    }
  },
  Ii = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              invite_token: { n: 1, br: P.readString, bw: S.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Request";
    }
  },
  Ni = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), D.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return e ? { $jspbMessageInstance: o } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Response";
    }
  },
  Fi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.compat_tool || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              compat_tool: { n: 1, br: P.readUint32, bw: S.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Request";
    }
  },
  Oi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), D.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return e ? { $jspbMessageInstance: o } : {};
    }
    static fromObject(e) {
      return new t();
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Response";
    }
  },
  Ui = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: P.readFixed64String,
                bw: S.writeFixed64String,
              },
              client_token: { n: 2, br: P.readBytes, bw: S.writeBytes },
              expiry: { n: 3, br: P.readUint32, bw: S.writeUint32 },
              deviceid: { n: 4, br: P.readUint32, bw: S.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_Token";
    }
  },
  Wi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.result || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              result: { n: 1, br: P.readUint32, bw: S.writeUint32 },
              token: { n: 2, c: Ui },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeDevice_Response";
    }
  },
  Hi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        D.initialize(this, e, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: {
              steamid: {
                n: 1,
                br: P.readFixed64String,
                bw: S.writeFixed64String,
              },
              appid: { n: 2, br: P.readUint32, bw: S.writeUint32 },
              device_info: { n: 3, br: P.readString, bw: S.writeString },
              deviceid: { n: 4, br: P.readUint32, bw: S.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = K(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return te(t.M(), e, o);
    }
    static fromObject(e) {
      return ee(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
    }
  },
  Gi;
((d) => {
  function t(g, h) {
    return g.SendMsg(
      "UserAccount.GetAvailableValveDiscountPromotions#1",
      Ae(hi, h),
      bi,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  d.GetAvailableValveDiscountPromotions = t;
  function e(g, h) {
    return g.SendMsg("UserAccount.GetClientWalletDetails#1", Ae(Ri, h), Ci, {
      ePrivilege: 1,
    });
  }
  d.GetClientWalletDetails = e;
  function o(g, h) {
    return g.SendMsg("UserAccount.GetAccountLinkStatus#1", Ae(Pi, h), Si, {
      ePrivilege: 1,
    });
  }
  d.GetAccountLinkStatus = o;
  function n(g, h) {
    return g.SendMsg("UserAccount.CancelLicenseForApp#1", Ae(wi, h), Mi, {
      ePrivilege: 1,
    });
  }
  d.CancelLicenseForApp = n;
  function r(g, h) {
    return g.SendMsg("UserAccount.GetUserCountry#1", Ae(Di, h), yi, {
      ePrivilege: 1,
    });
  }
  d.GetUserCountry = r;
  function i(g, h) {
    return g.SendMsg("UserAccount.CreateFriendInviteToken#1", Ae(Ti, h), lr, {
      ePrivilege: 3,
    });
  }
  d.CreateFriendInviteToken = i;
  function a(g, h) {
    return g.SendMsg("UserAccount.GetFriendInviteTokens#1", Ae(ki, h), Ai, {
      ePrivilege: 1,
    });
  }
  d.GetFriendInviteTokens = a;
  function s(g, h) {
    return g.SendMsg("UserAccount.ViewFriendInviteToken#1", Ae(xi, h), Ei, {
      ePrivilege: 1,
    });
  }
  d.ViewFriendInviteToken = s;
  function l(g, h) {
    return g.SendMsg("UserAccount.RedeemFriendInviteToken#1", Ae(Li, h), Bi, {
      ePrivilege: 1,
    });
  }
  d.RedeemFriendInviteToken = l;
  function c(g, h) {
    return g.SendMsg("UserAccount.RevokeFriendInviteToken#1", Ae(Ii, h), Ni, {
      ePrivilege: 1,
    });
  }
  d.RevokeFriendInviteToken = c;
  function p(g, h) {
    return g.SendMsg("UserAccount.RegisterCompatTool#1", Ae(Fi, h), Oi, {
      ePrivilege: 1,
    });
  }
  d.RegisterCompatTool = p;
})((Gi ||= {}));
var Qg;
((e) => {
  function t(o, n) {
    return o.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", Ae(Hi, n), Wi, {
      ePrivilege: 1,
    });
  }
  e.AuthorizeCurrentDevice = t;
})((Qg ||= {}));
function Jg() {
  return ["CurrentUserWalletDetails", Jo.accountid];
}
function $g(t) {
  return {
    queryKey: Jg(),
    queryFn: async () => {
      if (!Jo.accountid) return;
      let e = R.EREALM === 2;
      return (
        await Gi.GetClientWalletDetails(t, {
          wallet_region: e ? 2 : 1,
          include_formatted_balance: !0,
        })
      )
        .Body()
        .toObject();
    },
    staleTime: 10 * 60 * 1e3,
  };
}
function cr() {
  let t = Ys();
  return ns($g(t));
}
var q = u(_(), 1);
function nu(t) {
  let { action: e } = t,
    o = (0, Ht.useContext)(ru),
    n = "span",
    r = {};
  return (
    e.href &&
      ((n = x),
      (r.to = e.href),
      (r.external = !e.ssr),
      e.href.startsWith(R.STORE_BASE_URL) &&
        (r.snr = { feature: "globalheader" })),
    e.action &&
      (e.href || (n = "button"),
      (r.onClick = async function (a) {
        switch ((a.preventDefault(), e.action)) {
          case 1: {
            sr();
            return;
          }
          case 2: {
            if (e.action_parameters?.language === void 0)
              throw "Missing language";
            try {
              await pi(e.action_parameters.language, o.changeLanguagePath);
            } catch (s) {
              console.error(s);
              return;
            }
            o.userDetails
              ? (location.href =
                  R.STORE_BASE_URL + "account/languagepreferences/")
              : e.href
                ? (location.href = e.href)
                : location.reload();
            return;
          }
        }
      })),
    (0, q.jsx)(Mo, {
      menuTarget: (0, q.jsx)(n, {
        ...r,
        tabIndex: 0,
        className: _i,
        children: Wn(e.label, (0, q.jsx)("span", { className: fc })),
      }),
      direction: "left",
      className: Rc,
      children: e.children?.map((i, a) => (0, q.jsx)(nu, { action: i }, a)),
    })
  );
}
var ru = (0, Ht.createContext)({});
function tu(t) {
  return (0, q.jsx)(ru.Provider, {
    value: t,
    children: t.globalActions.map((e, o) =>
      (0, q.jsx)(
        Mo,
        {
          direction: "down-left",
          menuTarget: (0, q.jsx)("button", {
            className: bc,
            children: e.label,
          }),
          className: Cc,
          interactionMode: 1,
          children: e.children?.map((n, r) => (0, q.jsx)(nu, { action: n }, r)),
        },
        o,
      ),
    ),
  });
}
function Zg() {
  let { data: t } = cr();
  return (0, q.jsx)("div", { className: vc, children: t?.formatted_balance });
}
function iu(t) {
  let { userDetails: e } = t,
    [o, n] = (0, Ht.useState)(void 0),
    r = `/login/${o ? `?redir=${encodeURIComponent(o)}` : ""}`;
  return (
    (0, Ht.useEffect)(() => {
      n(location.href);
    }, []),
    e
      ? (0, q.jsxs)("div", {
          className: di,
          children: [
            (0, q.jsx)("a", {
              className: gi,
              href: R.STORE_BASE_URL + "about/",
              children: W.Localize("#global_menu_install_steam"),
            }),
            t.notifications &&
              (0, q.jsx)("div", {
                className: Sc,
                children: (0, q.jsx)(ar, {
                  dynamicImport: async () =>
                    (await import("./greenenvelope-DCLNSSDH.js")).GreenEnvelope,
                  fallback: (0, q.jsx)("div", { className: wc }),
                  bResponsiveHeader: !1,
                  notifications: t.notifications,
                }),
              }),
            (0, q.jsxs)("div", {
              className: mi,
              children: [
                (0, q.jsx)(tu, {
                  userDetails: e,
                  globalActions: t.globalActions,
                  changeLanguagePath: t.changeLanguagePath,
                }),
                (0, q.jsx)(Zg, {}),
              ],
            }),
            (0, q.jsx)("a", {
              className: hc,
              href: tn(e),
              children: (0, q.jsx)(Qn, {
                playerLinkDetails: e,
                statusPosition: "border",
                alt: "",
                role: "presentation",
                size: "Small",
              }),
            }),
          ],
        })
      : (0, q.jsx)("div", {
          className: di,
          children: (0, q.jsxs)("div", {
            className: mi,
            children: [
              (0, q.jsx)("a", {
                className: (0, ou.default)(gi, Pc),
                href: R.STORE_BASE_URL + "about/",
                children: W.Localize("#global_menu_install_steam"),
              }),
              " ",
              (0, q.jsx)("a", {
                href: r,
                className: _i,
                children: W.Localize("#global_menu_login"),
              }),
              "  |  ",
              (0, q.jsx)(tu, {
                userDetails: e,
                globalActions: t.globalActions,
                changeLanguagePath: t.changeLanguagePath,
              }),
            ],
          }),
        })
  );
}
var au = "eGsI8rO3zfU-";
var su = "Ca2l5LKN6as-";
var lu = "ewJx-kmPr-8-";
var cu = "SmaLDT4y0RE-";
var uu = "LyTAF1R-NHw-";
var Vi = "_2GKjdN512t4-";
var pu = "FhcQPauG0Bc-";
var du = "_40MmWrTStR0-";
var mu = "_5N8HUkyU1sA-";
var zi = u(rt(), 1),
  Pu = u(M(), 1);
var _u = "MMrgod6KQlc-";
var gu = "k0AAbwuFzJQ-";
var fu = "ofgQne2Wvqg-";
var hu = "FTufO00UqAw-";
var bu = "iHkamGVWNgw-";
var vu = "_9-ylsFqlD1Y-";
var Cu = "_99jWUQL7ajk-";
var Ru = "maI6DbOJuy4-";
var Pe = u(_(), 1),
  yt = (0, Pu.forwardRef)(function (e, o) {
    let { item: n, responsive: r, className: i, ...a } = e,
      s = Zn().startsWith(n.href),
      l = n.label;
    return (
      r && (l = n.label_responsive ?? n.label),
      (0, Pe.jsx)(Pe.Fragment, {
        children: (0, Pe.jsxs)(x, {
          className: (0, zi.default)(i, n.valveOnly && Cu),
          to: n.href,
          "aria-current": s ? "page" : void 0,
          external: !n.ssr,
          snr: n.href.startsWith(R.STORE_BASE_URL) && {
            feature: "globalheader",
          },
          ref: o,
          ...a,
          children: [
            l,
            n.new &&
              (0, Pe.jsx)("span", {
                className: Ru,
                children: W.Localize("#m_ext_new"),
              }),
          ],
        }),
      })
    );
  });
function Su(t) {
  let { navContent: e } = t;
  return (0, Pe.jsx)(Mo, {
    menuTarget: (0, Pe.jsx)(yt, { item: e, className: vu }),
    direction: "right",
    children: e.children?.map((o, n) => (0, Pe.jsx)(Su, { navContent: o }, n)),
  });
}
function wu(t) {
  return (0, Pe.jsx)("nav", {
    className: _u,
    children: (0, Pe.jsx)("ul", {
      className: gu,
      children: t.navContent.map((e, o) =>
        (0, Pe.jsx)(
          Mo,
          {
            menuTarget: (0, Pe.jsx)(yt, {
              item: e,
              className: (0, zi.default)(fu, e.userContent && hu),
            }),
            direction: "down",
            className: bu,
            children: e.children?.map((n, r) =>
              (0, Pe.jsx)(Su, { navContent: n }, r),
            ),
          },
          o,
        ),
      ),
    }),
  });
}
var Mu = "/X3MIBOBA.png";
var Du = "/TYQTXQDA.svg";
var ji = "/5EH3SHCA.svg";
var yu = "/KSEIVHDA.png";
function Lo() {
  return Pt(en) === "desktop";
}
function af() {
  return Pt(en) === "touch";
}
function Tu() {
  let t = [];
  return (
    Lo() && t.push("force_desktop"),
    af() && t.push("responsive touch"),
    t.join(" ")
  );
}
function ku() {
  qn(en, "desktop"), "location" in window && location.reload();
}
function Au() {
  Lo() && Yn(en), "location" in window && location.reload();
}
var Je = u(rt(), 1),
  $e = u(M(), 1);
var xu = "UJ-b28jREN4-";
var Eu = "-ackiz2p900-";
var Lu = "dsfHY-n2vRo-";
var Bu = "_7QSpS4Fcxis-";
var Iu = "SMuDlFUQZ7c-";
var Nu = "fbumr489F1M-";
var Fu = "_4Irj26b6cAc-";
var Ou = "J0hwuL-5qaI-";
var qi = "vaiPH0LUuOg-";
var Yi = "lHc2D8LzCAM-";
var Uu = "qMsE88Z2WWg-";
var Wu = "SI1K4dzVIa4-";
var Hu = "wQ0CyaaCCZw-";
var Gu = "QB99AacwCmk-";
var Vu = "_8pHkaq8PPAw-";
var st = "Ud1IMOOMuOI-";
var zu = "_58A1pqE2uSo-";
var eo = "myYtt3d51V4-";
var ju = "cmJ4ozhx9RE-";
var qu = "_2wGlOytoBKw-";
var Yu = "_049Kz8GkLto-";
var Xu = "qNNahG-7Lqc-";
var Qu = "Yp-VG7Zk9AY-";
var Ju = "CX4Bz9fkpP4-";
var $u = "mL8bNWbmixg-";
var Zu = "fPuSnTPv8Sw-";
var Ku = "pHDUu-G3uyI-";
var ep = "do714Zjyklo-";
var tp = "eemuAILDlkQ-";
var op = "Q-TiFOlMJ8s-";
var Xi = "V29-mSaJz7Q-";
var np = "lFK0b3Au9I8-";
var rp = "eaAkMgON-CQ-";
var ip = "gLRm-ue6Z7Q-";
var ap = "RRZn8XwJQEk-";
var v = u(_(), 1);
function lf(t) {
  return t.private_data?.persona_state === 0
    ? Fu
    : t.private_data?.game_id !== void 0
      ? Nu
      : Iu;
}
function cf() {
  let { data: t } = dl();
  return t
    ? (0, v.jsx)("div", {
        className: qi,
        children: (0, v.jsx)(x, {
          snr: !0,
          external: !0,
          to: R.STORE_BASE_URL + "cart",
          className: qi,
          children: W.LocalizeReact(
            "#Cart_CountWidget",
            (0, v.jsx)("b", { children: $o(t) }),
          ),
        }),
      })
    : null;
}
function uf() {
  let { data: t } = cr();
  return t?.formatted_balance
    ? (0, v.jsx)("div", {
        className: Yi,
        children: (0, v.jsx)(x, {
          snr: !0,
          external: !0,
          to: R.STORE_BASE_URL + "account",
          className: Yi,
          children: W.LocalizeReact(
            "#responsive_menu_wallet_balance",
            (0, v.jsx)("b", { children: t.formatted_balance }),
          ),
        }),
      })
    : null;
}
function sp(t) {
  let { navContent: e, children: o, labelAddition: n } = t,
    r = (0, $e.useRef)(null),
    i = (0, $e.useRef)(null),
    a = (0, $e.useRef)(null),
    s = (0, $e.useRef)();
  if (!o && (!e.children || e.children.length === 0))
    return (0, v.jsx)(yt, { item: e, className: st, responsive: !0 });
  function l() {
    r.current &&
      (s.current && s.current.cancel(),
      (s.current = r.current.animate(
        {
          height: [
            `${a.current.offsetHeight}px`,
            `${i.current.offsetHeight + a.current.offsetHeight}px`,
          ],
        },
        { duration: 250, fill: "forwards" },
      )));
  }
  function c() {
    r.current &&
      (s.current && s.current.cancel(),
      (s.current = r.current.animate(
        {
          height: [
            `${i.current.offsetHeight + a.current.offsetHeight}px`,
            `${a.current.offsetHeight}px`,
          ],
        },
        { duration: 250, fill: "forwards" },
      )),
      s.current.addEventListener("finish", () => {
        r.current && (r.current.open = !1);
      }));
  }
  function p() {
    r.current?.open ? l() : r.current && c();
  }
  return (0, v.jsxs)("details", {
    name: "responsive-menu",
    className: Gu,
    ref: r,
    onToggle: p,
    children: [
      (0, v.jsxs)("summary", {
        className: st,
        ref: a,
        children: [
          e.label_responsive ?? e.label,
          " ",
          n,
          " ",
          (0, v.jsx)("div", { className: zu }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: Vu,
        ref: i,
        children: [
          e.children?.map((d, g) =>
            (0, v.jsx)(yt, { item: d, className: ju, responsive: !0 }, g),
          ),
          o,
        ],
      }),
    ],
  });
}
function pf() {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)("div", {
        className: $u,
        children: [
          (0, v.jsx)(x, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "about",
            children: "关于蒸汽平台",
          }),
          "  |  ",
          (0, v.jsx)(x, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "steam_refunds",
            children: "退款政策",
          }),
          "  |  ",
          (0, v.jsx)(x, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "subscriber_agreement",
            children: "软件许可服务协议",
          }),
          "  |  ",
          (0, v.jsx)("br", {}),
          (0, v.jsx)(x, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "privacy_agreement",
            children: "个人信息保护政策",
          }),
          "  |  ",
          (0, v.jsx)(x, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "data_outbound",
            children: "个人信息出境告知书",
          }),
          "  |  ",
          (0, v.jsx)("br", {}),
          (0, v.jsx)(x, {
            to: "https://about.steamchina.com/content_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "不良内容举报投诉",
          }),
          "  |  ",
          (0, v.jsx)(x, {
            to: "https://about.steamchina.com/infringement_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "侵权投诉",
          }),
          "  |  ",
          (0, v.jsx)(x, {
            to: "https://about.steamchina.com/parentguardianship_agreement.html",
            target: "_blank",
            rel: "noreferrer",
            children: "家长监护",
          }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: Zu,
        children: [
          (0, v.jsxs)(x, {
            external: !0,
            className: Xi,
            to: "http://qr.weibo.cn/g/7kla92",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微博",
                className: rp,
                src: `${R.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微博" }),
            ],
          }),
          (0, v.jsxs)(x, {
            external: !0,
            className: Xi,
            to: "http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微信",
                className: np,
                src: `${R.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微信" }),
            ],
          }),
        ],
      }),
      (0, v.jsx)("hr", { className: tp }),
      (0, v.jsxs)("div", {
        className: op,
        children: [
          (0, v.jsx)(x, {
            external: !0,
            to: "https://www.wanmei.com/",
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              className: ip,
              src: `${R.STORE_CDN_URL}/public/shared/images/footer/pw_logo.svg?v=1`,
              alt: "",
            }),
          }),
          (0, v.jsx)(x, {
            external: !0,
            to: "https://www.valvesoftware.com",
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              className: ap,
              src: `${R.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: "",
            }),
          }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: Ku,
        children: [
          (0, v.jsxs)("div", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Valve Corporation 版权所有，完美世界已获授权。",
              (0, v.jsx)("br", {}),
              "所有商标均属于其在美国或其他国家的拥有者。",
            ],
          }),
          (0, v.jsxs)("div", {
            className: ep,
            children: [
              "© 完美世界征奇(上海)多媒体科技有限公司 版权所有。",
              (0, v.jsx)("br", {}),
              "增值电信业务经营许可证沪B2-20180406",
            ],
          }),
        ],
      }),
    ],
  });
}
function df() {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsx)("div", {
        children: (0, v.jsx)("img", {
          src: `${R.STORE_CDN_URL}/public/shared/images/responsive/logo_valve_footer.png`,
          alt: "",
        }),
      }),
      W.Localize("#responsive_footer_copyright"),
      "  ",
      (0, v.jsxs)("span", {
        children: [
          (0, v.jsx)(x, {
            to: R.STORE_BASE_URL + "privacy_agreement/",
            target: "_blank",
            children: W.Localize("#Common_Footer_PrivacyPolicy"),
          }),
          " |  ",
          (0, v.jsx)(x, {
            to: "http://www.valvesoftware.com/legal.htm",
            target: "_blank",
            children: W.Localize("#Common_Footer_Legal"),
          }),
          " |  ",
          (0, v.jsx)(x, {
            to: R.STORE_BASE_URL + "subscriber_agreement/",
            target: "_blank",
            children: W.Localize("#Common_Footer_SSA"),
          }),
          " |  ",
          (0, v.jsx)(x, {
            to: R.STORE_BASE_URL + "steam_refunds/",
            target: "_blank",
            children: W.Localize("#Common_Footer_Refunds"),
          }),
        ],
      }),
    ],
  });
}
function lp(t) {
  let {
      userDetails: e,
      navContent: o,
      globalActions: n,
      changeLanguagePath: r,
      open: i,
      onDismiss: a,
      cartInResponsiveMenu: s,
    } = t,
    [l, c] = (0, $e.useState)(!1),
    p = (0, $e.useRef)(null),
    d = (0, $e.useRef)();
  (0, $e.useEffect)(() => {
    p.current &&
      (i
        ? (p.current?.showModal(),
          d.current?.cancel(),
          (d.current = p.current.animate(
            { transform: ["translateX(-280px)", "translateX(0)"] },
            { duration: 250, fill: "forwards", easing: "ease-in-out" },
          )))
        : d.current &&
          (d.current?.cancel(),
          (d.current = p.current.animate(
            { transform: ["translateX(0)", "translateX(-280px)"] },
            { duration: 250, fill: "forwards", easing: "ease-in-out" },
          )),
          d.current.addEventListener("finish", () => p.current?.close())));
  }, [i]);
  let g =
    n.find((h) => h.id === "language") ??
    n[0]?.children?.find((h) => h.id === "language");
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)("dialog", {
        className: (0, Je.default)(xu, nt(R.EREALM) && Eu),
        ref: p,
        onMouseDown: (h) => h.target === p.current && a(),
        children: [
          (0, v.jsxs)("div", {
            className: Lu,
            children: [
              !e &&
                (0, v.jsx)(yt, {
                  className: (0, Je.default)(st),
                  item: {
                    href: "/login/",
                    label: W.Localize("#global_menu_login_caps"),
                  },
                }),
              e &&
                (0, v.jsxs)("div", {
                  className: (0, Je.default)(Bu, lf(e)),
                  children: [
                    (0, v.jsxs)("div", {
                      className: Ou,
                      children: [
                        (0, v.jsx)("a", {
                          className: Hu,
                          href: tn(e),
                          children: (0, v.jsx)(Qn, {
                            playerLinkDetails: e,
                            statusPosition: "border",
                            alt: "",
                            role: "presentation",
                            size: "Small",
                            className: Wu,
                          }),
                        }),
                        " ",
                        (0, v.jsx)("a", {
                          className: Uu,
                          href: tn(e),
                          children: e.public_data?.persona_name,
                        }),
                      ],
                    }),
                    s && (0, v.jsx)(cf, {}),
                    (0, v.jsx)(uf, {}),
                  ],
                }),
              t.notifications &&
                (0, v.jsx)(sp, {
                  navContent: { label: "Notifications", href: "" },
                  labelAddition: (0, v.jsxs)("div", {
                    className: (0, Je.default)(
                      qu,
                      t.notifications?.unread_count && Xu,
                    ),
                    children: [
                      t.notifications.unread_count > 0 &&
                        (0, v.jsx)("span", { className: Yu }),
                      (0, v.jsx)("span", {
                        className: Qu,
                        children: $o(t.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, v.jsx)(ar, {
                    dynamicImport: async () =>
                      (await import("./greenenvelope-DCLNSSDH.js"))
                        .GreenEnvelope,
                    fallback: (0, v.jsx)("div", {}),
                    bResponsiveHeader: !0,
                    notifications: t.notifications,
                  }),
                }),
              o.map((h, w) => (0, v.jsx)(sp, { navContent: h }, w)),
              (0, v.jsxs)("div", {
                className: "minor_menu_items",
                children: [
                  e &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)(yt, {
                          className: (0, Je.default)(st, eo),
                          item: {
                            href: R.STORE_BASE_URL + "account",
                            label: W.Localize("#global_menu_account_details"),
                          },
                        }),
                        (0, v.jsx)(yt, {
                          className: (0, Je.default)(st, eo),
                          item: {
                            href: R.STORE_BASE_URL + "account/preferences",
                            label: W.Localize(
                              "#global_menu_account_preferences",
                            ),
                          },
                        }),
                      ],
                    }),
                  !nt(R.EREALM) &&
                    (0, v.jsx)(v.Fragment, {
                      children: (0, v.jsx)("button", {
                        className: (0, Je.default)(st, eo),
                        onClick: () => c(!0),
                        children: W.Localize("#global_menu_change_language"),
                      }),
                    }),
                  e &&
                    (0, v.jsx)("button", {
                      className: (0, Je.default)(st, eo),
                      onClick: sr,
                      children: W.Localize("#global_menu_change_user"),
                    }),
                  !nt(R.EREALM) &&
                    (0, v.jsx)(yt, {
                      className: (0, Je.default)(st, eo),
                      item: {
                        href: R.STORE_BASE_URL + "mobile",
                        label: W.Localize("#global_menu_getmobileapp"),
                      },
                    }),
                  !Lo() &&
                    (0, v.jsx)("button", {
                      className: (0, Je.default)(st, eo),
                      onClick: ku,
                      children: W.Localize("#global_menu_view_desktop_website"),
                    }),
                ],
              }),
            ],
          }),
          (0, v.jsx)("footer", {
            className: Ju,
            children: nt(R.EREALM) ? (0, v.jsx)(pf, {}) : (0, v.jsx)(df, {}),
          }),
        ],
      }),
      g &&
        (0, v.jsx)(gc, {
          open: l,
          onDismiss: () => c(!1),
          menuAction: g,
          changeLanguagePath: r,
          bLoggedIn: e != null,
        }),
    ],
  });
}
var se = u(_(), 1);
function up(t) {
  let [e, o] = (0, cp.useState)(!1);
  return (0, se.jsxs)(se.Fragment, {
    children: [
      (0, se.jsxs)("header", {
        className: (0, Qi.default)(au, t.className),
        children: [
          (0, se.jsxs)("div", {
            className: su,
            children: [
              (0, se.jsx)("a", {
                href: R.STORE_BASE_URL,
                "aria-label": W.Localize("#Aria_Steam_Home_Link"),
                className: Vi,
                children: (0, se.jsx)("img", {
                  src: ht(nt(R.EREALM) ? ji : Du),
                  alt: W.Localize("#Aria_Steam_Home_Link"),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, se.jsx)(wu, { navContent: t.navContent }),
              (0, se.jsx)(iu, {
                globalActions: t.globalActions,
                userDetails: t.userDetails,
                notifications: t.notifications,
                changeLanguagePath: t.changeLanguagePath,
              }),
              t.children,
            ],
          }),
          (0, se.jsxs)("div", {
            className: lu,
            children: [
              (0, se.jsxs)("button", {
                className: cu,
                onClick: () => o(!0),
                children: [
                  (0, se.jsx)("img", { src: ht(Mu), alt: "", className: uu }),
                  t.notifications?.unread_count &&
                    (0, se.jsx)("div", {
                      className: pu,
                      children: (0, se.jsx)("div", {
                        className: (0, Qi.default)(du),
                        children: (0, se.jsx)("span", {
                          className: mu,
                          children: $o(t.notifications.unread_count ?? 0),
                        }),
                      }),
                    }),
                ],
              }),
              (0, se.jsx)("a", {
                href: R.STORE_BASE_URL,
                "aria-label": W.Localize("#Aria_Steam_Home_Link"),
                className: Vi,
                children: (0, se.jsx)("img", {
                  src: ht(nt(R.EREALM) ? ji : yu),
                  alt: W.Localize("#Aria_Steam_Home_Link"),
                  height: 36,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, se.jsx)(lp, { ...t, open: e, onDismiss: () => o(!1) }),
    ],
  });
}
var pp = "y0fX1sHXgbg-";
var dp = "dkzTutiFwB8-";
var mp = "SMtSKQQ7dWs-";
var dn = u(_(), 1);
function _p(t) {
  return (0, dn.jsxs)("span", {
    className: pp,
    children: [
      (0, dn.jsx)("span", {
        className: dp,
        children: "You are spoofing another user!",
      }),
      " ",
      (0, dn.jsx)("span", {
        className: mp,
        onClick: () => {
          Yn(jn), window.location.reload();
        },
        children: "end spoofing",
      }),
    ],
  });
}
var Bo = u(M());
var bp = u(x_(), 1);
function Ji(t) {
  try {
    if (!t || typeof t != "string") return null;
    let e = t.split(".");
    if (e.length !== 3) return null;
    let [o, n] = e,
      r = fp(o),
      i = fp(n);
    return !r || !i ? null : { header: JSON.parse(r), body: JSON.parse(i) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function gp(t) {
  return t ? t.body.exp : 0;
}
function _f(t) {
  return t ? t.body.nbf || t.body.iat : 0;
}
function hp(t) {
  let e = gp(t),
    o = _f(t),
    n = 900,
    r = e - o;
  return r < 900 * 1.5 && (n = r <= 60 ? 0 : 60), gp(t) - n < Date.now() / 1e3;
}
function fp(t) {
  return atob(t.replace(/-/g, "+").replace(/_/g, "/"));
}
var ur = class {
  m_ServiceTransport;
  m_AnonymousServiceTransport;
  m_strWebAPIBaseURL;
  m_webApiAccessToken = "";
  m_bJsonMode = !1;
  m_bJWTToken = !1;
  m_fnRequestNewAccessToken;
  m_refreshAccessTokenPromise;
  m_dtLastExpireCheck = 0;
  m_strSpoofedSteamID = "";
  constructor(e, o = "", n = !1, r) {
    (this.m_strWebAPIBaseURL = e),
      (this.m_webApiAccessToken = o),
      (this.m_bJsonMode = n),
      (this.m_fnRequestNewAccessToken = r),
      (this.m_bJWTToken = Ji(o) != null),
      (this.m_ServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !0 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !0 }),
        MakeReady: this.MakeReady.bind(this),
      }),
      (this.m_AnonymousServiceTransport = {
        SendMsg: this.SendMsgAndAwaitResponse.bind(this, { bSendAuth: !1 }),
        SendNotification: this.SendNotification.bind(this, { bSendAuth: !1 }),
        MakeReady: this.MakeReady.bind(this),
      });
    let i = Pt(jn);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new Yr();
  }
  RTime32ToDate(e) {
    return new Date(e * 1e3);
  }
  MakeReady() {
    return Promise.resolve({ result: 1, message: "ready" });
  }
  GetServiceTransport() {
    return this.m_ServiceTransport;
  }
  GetWebAPIAccessToken() {
    return this.m_webApiAccessToken;
  }
  GetAnonymousServiceTransport() {
    return this.m_AnonymousServiceTransport;
  }
  async SendMsgAndAwaitResponse(e, o, n, r, i) {
    let a;
    try {
      if (this.m_bJWTToken && e.bSendAuth) {
        let l = Date.now() / 1e3;
        this.m_refreshAccessTokenPromise
          ? await this.m_refreshAccessTokenPromise
          : this.m_fnRequestNewAccessToken &&
            l - this.m_dtLastExpireCheck > 60 &&
            ((this.m_dtLastExpireCheck = l),
            hp(Ji(this.m_webApiAccessToken)) &&
              ((this.m_refreshAccessTokenPromise =
                this.m_fnRequestNewAccessToken(this.m_webApiAccessToken)),
              (this.m_webApiAccessToken =
                await this.m_refreshAccessTokenPromise),
              (this.m_refreshAccessTokenPromise = void 0)));
      }
      let s = await this.Send(e, o, n, i);
      if (s.status != 200) throw new Error("Request Error");
      if (
        ((a = Xr.Init(r, 147)),
        s.headers &&
          (s.headers.get("x-eresult") &&
            a.Hdr().set_eresult(parseInt(s.headers.get("x-eresult"))),
          s.headers.get("x-error_message") &&
            a.Hdr().set_error_message(s.headers.get("x-error_message"))),
        this.m_bJsonMode)
      )
        a.SetBodyJSON(await s.json());
      else {
        let l = new ls(await s.arrayBuffer());
        a.ReadBodyFromBuffer(r, l);
      }
    } catch (s) {
      let l = s?.response?.status === 401,
        c = l ? "Unauthorized" : void 0;
      (a = this.CreateFailedMsgProtobuf(r, 3, c)),
        l &&
          !this.m_refreshAccessTokenPromise &&
          this.m_bJWTToken &&
          e.bSendAuth &&
          this.m_fnRequestNewAccessToken &&
          ((this.m_refreshAccessTokenPromise = this.m_fnRequestNewAccessToken(
            this.m_webApiAccessToken,
          )),
          (this.m_webApiAccessToken = await this.m_refreshAccessTokenPromise),
          (this.m_refreshAccessTokenPromise = void 0));
    }
    return a;
  }
  SendNotification(e, o, n, r) {
    return this.Send(e, o, n, r), !0;
  }
  Send(e, o, n, r) {
    let i = this.CreateWebAPIURL(o),
      a = n.SerializeBody(),
      s = bp.fromByteArray(a),
      l = r.eWebAPIKeyRequirement,
      c = r.ePrivilege == 0 && l == 1,
      p = {},
      d = new URLSearchParams();
    if (
      (!e.bSendAuth &&
        l != 1 &&
        console.error(
          `Attempting to invoke service ${o} without auth, but auth is required.`,
        ),
      this.m_webApiAccessToken &&
        e.bSendAuth &&
        !c &&
        (d.append("access_token", this.m_webApiAccessToken),
        this.m_strSpoofedSteamID &&
          d.append("spoof_steamid", this.m_strSpoofedSteamID)),
      r.bConstMethod)
    )
      return (
        d.append("origin", self.origin),
        this.m_bJsonMode
          ? d.append("input_json", JSON.stringify(n.Body().toObject()))
          : d.append("input_protobuf_encoded", s),
        fetch(`${i}?${d.toString()}`, p)
      );
    {
      let h = new FormData();
      return (
        this.m_bJsonMode
          ? h.append("input_json", JSON.stringify(n.Body().toObject()))
          : h.append("input_protobuf_encoded", s),
        fetch(`${i}?${d.toString()}`, { ...p, method: "POST", body: h })
      );
    }
  }
  CreateWebAPIURL(e) {
    let o = /([^\.]+)\.(.+)#(\d+)/,
      n = e.match(o);
    if (!n || n.length != 4) throw `Invalid service name: ${e}`;
    return `${this.m_strWebAPIBaseURL}I${n[1]}Service/${n[2]}/v${n[3]}`;
  }
  CreateFailedMsgProtobuf(e, o, n) {
    let r = Xr.Init(e);
    return (
      r.Hdr().set_eresult(2),
      r.Hdr().set_transport_error(o),
      n && r.Hdr().set_error_message(n),
      r
    );
  }
};
var pr = class {
  async GetObject(e) {
    try {
      let o = await this.GetString(e);
      return o ? JSON.parse(o) : null;
    } catch {
      return null;
    }
  }
  async StoreObject(e, o) {
    return this.StoreString(e, JSON.stringify(o));
  }
};
var mn = class extends pr {
  GetString(e) {
    return Promise.resolve(localStorage.getItem(e));
  }
  StoreString(e, o) {
    return localStorage.setItem(e, o), Promise.resolve();
  }
  RemoveObject(e) {
    return localStorage.removeItem(e), Promise.resolve();
  }
};
var $i = u(_());
function vp(t) {
  let { strWebAPIToken: e, steamid: o, children: n } = t,
    r = Bo.useRef(),
    i = Bo.useRef(),
    a = Bo.useCallback(
      () => (
        r.current || (r.current = new ur(R.WEBAPI_BASE_URL, e, !1, gf)),
        r.current
      ),
      [e],
    ),
    s = Bo.useCallback(
      () => (i.current || (i.current = new mn()), i.current),
      [],
    );
  return (0, $i.jsx)(qs, {
    useActiveSteamInterface: a,
    useStorage: s,
    children: (0, $i.jsx)(Qs, { steamid: o, children: n }),
  });
}
async function gf(t) {
  let o = await (
    await fetch(`${R.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
      method: "POST",
      body: new URLSearchParams({ redir: window.location.href }),
      credentials: "include",
      mode: "cors",
    })
  ).json();
  if (o.success) {
    let r = await (
      await fetch(o.login_url, {
        method: "POST",
        body: new URLSearchParams({ ...o, prior: t }),
      })
    ).json();
    if (r.result === 1) return r.token;
  }
  return "";
}
var Cp = u(M());
var dr = class {
  m_mapAppToSNRs = new Map();
  m_rgImpressionsToAdd = [];
  BIsValid() {
    return !0;
  }
  AddImpression(e, o) {
    if (!Vs(zn)) return;
    let n = !1;
    this.m_mapAppToSNRs.has(e)
      ? this.m_mapAppToSNRs.get(e).indexOf(o) == -1 &&
        (this.m_mapAppToSNRs.get(e).push(o), (n = !0))
      : (this.m_mapAppToSNRs.set(e, [o]), (n = !0)),
      n &&
        (this.m_rgImpressionsToAdd.push(`${e}@${o}`), this.QueueCookieUpdate());
  }
  m_iUpdateInterval;
  QueueCookieUpdate() {
    this.m_iUpdateInterval ||
      (this.m_iUpdateInterval = window.setTimeout(() => {
        this.UpdateCookie(), (this.m_iUpdateInterval = void 0);
      }, 1e3));
  }
  UpdateCookie() {
    let o = [Pt(zn) || "", ...this.m_rgImpressionsToAdd].join("|");
    this.m_rgImpressionsToAdd = [];
    let n = encodeURIComponent(o).length,
      r = 3200;
    n <= r
      ? qn(zn, o)
      : console.warn(
          `Cookie max length exceeded ( ${n} > ${r} ), discarding impressions`,
        );
  }
};
var Pp = u(_());
function Rp(t) {
  let [e] = Cp.useState(() => new dr());
  return (0, Pp.jsx)(ml, { ImpressionTracker: e, children: t.children });
}
var Gr = u(rt(), 1);
var Be = u(M()),
  ed = u(bt());
var Io = u(M());
var lt = u(M());
var Sp = { m_unPID: 0, m_nBrowserID: -1 };
var _n = class {
  m_fnRender;
  m_rgLoadingLinks = [];
  constructor(e, o, n) {
    if (((this.m_rgLoadingLinks = []), n))
      for (let r = 0; r < n.length; r++) this.AddLink(n[r], !0);
    else if (e) {
      let r = e.getElementsByTagName("link");
      for (let i = 0; i < r.length; i++) {
        let a = r[i];
        this.AddLink(a, !1);
      }
    }
  }
  AddLink(e, o) {
    if (o) {
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
      Zo(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
m([f], _n.prototype, "OnLinkLoad", 1);
function Zi() {
  return Us() ? 256 : 0;
}
function fn(t) {
  let e = 0;
  switch (t) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= fn(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= fn(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= Zi()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= Zi()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= Zi()),
        e
      );
  }
}
function Mp() {
  let { ownerWindow: t } = ye();
  return Ze.GetPopupForWindow(t)?.browser_info || Sp;
}
var Dp = lt.createContext({ ownerWindow: window }),
  ye = () => lt.useContext(Dp);
function yp(t) {
  let { ownerWindow: e, children: o } = t,
    n = lt.useMemo(() => ({ ownerWindow: e }), [e]);
  return lt.createElement(Dp.Provider, { value: n }, o);
}
var De = class {
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
  constructor(e, o) {
    Rt(this),
      _e(
        e,
        "Name is required.  This is an internal name, different from title.",
      ),
      (this.m_strName = e);
    let { title: n, eCreationFlags: r, ...i } = o;
    (this.m_rgParams = { ...i, eCreationFlags: r ?? 0 }),
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
    e.data == "window_moved" && this.OnResize(),
      e.data == "popup-created" && this.OnCreateInternal();
  }
  Show(e = 1) {
    let o;
    typeof e == "boolean" ? (o = e ? 1 : 0) : (o = e),
      window.SteamClient && (this.m_rgParams.eCreationFlags |= 2),
      this.m_rgParams.eCreationFlags & 512 && (o = 0),
      this.BIsValid() &&
        (this.BIsClosed()
          ? ((this.m_popup = void 0), (this.m_element = void 0))
          : o != 0 && this.Focus(o));
    let n = Ze.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let r, i, a;
    n
      ? ((i = n.m_element),
        (r = n.m_popup),
        n.ReleasePopup(),
        (a = n.m_renderWhenReady),
        Ze.RemoveTrackedPopup(n),
        r?.removeEventListener("beforeunload", n.OnBeforeUnloadEvent),
        r?.removeEventListener("unload", n.OnUnload),
        r?.removeEventListener("resize", n.OnResizeEvent),
        r?.removeEventListener("focus", this.OnFocusInternal),
        r?.removeEventListener("blur", this.OnBlurInternal),
        r?.removeEventListener("drop", n.OnDrop),
        r?.removeEventListener("dragover", n.OnDragOver),
        r?.removeEventListener("message", this.OnMessage))
      : (({ popup: r, element: i } = gn.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new _n(r?.document, i))),
      r &&
        i &&
        ((r.document.title = this.m_strTitle),
        r.addEventListener("beforeunload", this.OnBeforeUnloadEvent),
        r.addEventListener("unload", this.OnUnload),
        r.addEventListener("resize", this.OnResizeEvent),
        r.addEventListener("focus", this.OnFocusInternal),
        r.addEventListener("blur", this.OnBlurInternal),
        r.addEventListener("drop", this.OnDrop),
        r.addEventListener("dragover", this.OnDragOver),
        r.addEventListener("message", this.OnMessage),
        J.LANGUAGE &&
          r.document.documentElement.setAttribute("lang", Gs() ?? ""),
        (this.m_popup = r),
        (this.m_element = i),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, o);
        })),
      Ze.AddTrackedPopup(this),
      n && (this.OnCreateInternal(), o != 0 && this.Focus(o));
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
  RenderInternal(e, o, n) {
    if (!this.m_bCreated) {
      this.m_onCreateRender = () => this.RenderInternal(e, o, n);
      return;
    }
    this.browser_info &&
      vl(this.browser_info.m_eBrowserType) &&
      (o.ownerDocument.body.className += " VR"),
      this.Render(e, o),
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
      Ze.RemoveTrackedPopup(this),
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
      (Qe(this.m_popup.window, "Window.Close")
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
    return Qe(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return Qe(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return Qe(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
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
m([Ct], De.prototype, "m_bFocused", 2),
  m([f], De.prototype, "OnMessage", 1),
  m([f], De.prototype, "RenderInternal", 1),
  m([f], De.prototype, "OnCreateInternal", 1),
  m([f], De.prototype, "OnResizeEvent", 1),
  m([f], De.prototype, "OnBeforeUnloadEvent", 1),
  m([f], De.prototype, "OnUnload", 1),
  m([f], De.prototype, "OnFocusInternal", 1),
  m([f], De.prototype, "OnBlurInternal", 1);
var Ki = class extends De {
  m_strSavedDimensionsKey;
  m_strInitialSavedDimensionsKey;
  m_strInitialRestoreDetails;
  m_bExpires;
  constructor(e, o, n, r) {
    super(e, n), this.SetSavedDimensionsKey(o), (this.m_bExpires = r);
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
          (e.strRestoreDetails = Ze.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          Ze.SetRestoreDetails(
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
        this.GetWindowRestoreDetails().then((o) => {
          let n =
            this.m_rgParams.strRestoreDetails == o &&
            e == this.m_strInitialSavedDimensionsKey;
          this.m_popup &&
            this.m_strSavedDimensionsKey &&
            o &&
            !n &&
            (Ze.SetRestoreDetails(e, o, this.m_bExpires),
            (this.m_rgParams.strRestoreDetails = o),
            (this.m_strInitialSavedDimensionsKey = e),
            this.OnResizeComplete(o));
        });
      }, 30);
    }
  }
  OnBeforeUnload() {
    this.QueryAndStoreWindowPosition(), super.OnBeforeUnload();
  }
  OnClose() {}
  SaveWindowPosition(e) {
    Ze.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
m([f], Ki.prototype, "QueryAndStoreWindowPosition", 1);
var gn = class {
  m_bShuttingDown = !1;
  m_mapPopups = Ct.map([], { deep: !1 });
  m_rgShutdownCallbacks = [];
  m_rgPopupCreatedCallbacks = [];
  m_unCurrentAccountID = 0;
  m_mapRestoreDetails = new Map();
  m_bSaveRequired = !1;
  m_DynamicCSSObserver;
  constructor() {
    if ("addEventListener" in window) {
      window.addEventListener("beforeunload", (o) => {
        this.m_bShuttingDown = !0;
        for (let r of this.m_rgShutdownCallbacks) r();
        let n = [];
        this.m_mapPopups.forEach((r) => {
          r.BIsValid() && !r.BIsClosed() && n.push(r);
        });
        for (let r of n)
          r.window?.SteamClient.Browser?.SetShouldExitSteamOnBrowserClosed &&
            r.window.SteamClient.Browser.SetShouldExitSteamOnBrowserClosed(!1),
            r.window?.SteamClient.Window.SetHideOnClose &&
              r.window?.SteamClient.Window.SetHideOnClose(!1),
            r.Close();
        this.m_bSaveRequired && this.SaveSavedDimensionStore(),
          this.m_mapPopups.clear();
      });
      let e = document.querySelector("head");
      _e(e, "Couldn't find head element"),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let o = Zr();
            this.m_mapPopups.forEach((n) => {
              vs(n.window.document, o, !1);
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
    this.m_rgPopupCreatedCallbacks.push(e);
  }
  AddTrackedPopup(e) {
    if ((this.m_mapPopups.set(e.GetName(), e), e.BIsValid()))
      for (let o of this.m_rgPopupCreatedCallbacks) o(e);
  }
  RemoveTrackedPopup(e) {
    this.m_mapPopups.delete(e.GetName());
  }
  GetExistingPopup(e) {
    return this.m_mapPopups.get(e);
  }
  GetPopups() {
    return this.m_mapPopups.values();
  }
  GetPopupForWindow(e) {
    for (let o of this.m_mapPopups.values()) if (o.window === e) return o;
  }
  ClosePopupsOwnedByBrowser(e) {
    this.m_mapPopups.forEach((o) => {
      o.browser_info &&
        o.browser_info.m_nBrowserID == e.m_nBrowserID &&
        o.browser_info.m_unPID == e.m_unPID &&
        o.Close();
    });
  }
  static CreatePopup(e, o) {
    let n = o.dimensions || {},
      r = n.width || 300,
      i = n.height || 300,
      a = o.title,
      s = "width=" + r + ",height=" + i;
    typeof n.left < "u" && (s += ",left=" + n.left),
      typeof n.top < "u" && (s += ",top=" + n.top),
      (s += ",resizeable,status=0,toolbar=0,menubar=0,location=0");
    let l = "about:blank",
      c = [];
    c.push("createflags=" + o.eCreationFlags),
      o.minWidth && c.push("minwidth=" + o.minWidth),
      o.minHeight && c.push("minheight=" + o.minHeight),
      o.maxWidth && o.maxWidth != 1 / 0 && c.push("maxwidth=" + o.maxWidth),
      o.maxHeight && o.maxHeight != 1 / 0 && c.push("maxheight=" + o.maxHeight),
      o.target_browser
        ? (c.push("pid=" + o.target_browser.m_unPID),
          c.push("browser=" + o.target_browser.m_nBrowserID),
          o.target_browser.m_eBrowserType
            ? c.push("browserType=" + o.target_browser.m_eBrowserType)
            : o.browserType && c.push("browserType=" + o.browserType),
          o.availscreenwidth &&
            o.availscreenheight &&
            (c.push("screenavailwidth=" + o.availscreenwidth),
            c.push("screenavailheight=" + o.availscreenheight)))
        : o.browserType && c.push("browserType=" + o.browserType),
      o.strVROverlayKey && c.push("vrOverlayKey=" + o.strVROverlayKey),
      o.strRestoreDetails && c.push("restoredetails=" + o.strRestoreDetails),
      o.window_opener_id && c.push("openerid=" + o.window_opener_id),
      o.parent_container_popup_id &&
        c.push("parentcontainerpopupid=" + o.parent_container_popup_id),
      o.center_on_window &&
        typeof n.left > "u" &&
        typeof n.top > "u" &&
        c.push(
          "centerOnBrowserID=" +
            o.center_on_window.SteamClient.Browser.GetBrowserID(),
        ),
      o.strUserAgent && c.push("useragent=" + o.strUserAgent),
      o.hwndParent && c.push("hwndParent=" + o.hwndParent),
      o.bPinned && c.push("pinned=true"),
      o.bModal && c.push("modal=true"),
      c && (l += "?" + c.join("&"));
    let d = (o.owner_window || window).open(l, e, s);
    if (!d)
      return (
        console.error(
          `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
        ),
        {}
      );
    let g = "";
    o.html_class && (g = `class="${o.html_class}"`);
    let h = "";
    o.body_class && (h = `class="${o.body_class}"`);
    let w = "";
    o.popup_class && (w = `class="${o.popup_class}"`);
    let k = `<!DOCTYPE html><html ${g}><head><title></title></head><body ${h}><div id="popup_target" ${w}></div></body></html>`;
    return (
      d.document.write(k),
      (d.document.title = a),
      bs(d, Zr()),
      { popup: d, element: d.document.getElementById("popup_target") }
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
    let o = window.localStorage.getItem(e);
    if (o)
      try {
        let n = JSON.parse(o);
        this.m_mapRestoreDetails = new Map(n);
      } catch {}
  }
  SaveSavedDimensionStore() {
    if (!this.m_unCurrentAccountID || !this.m_bSaveRequired) return;
    let e = this.GetLocalStorageKey(),
      o = JSON.stringify(Array.from(this.m_mapRestoreDetails));
    try {
      window.localStorage.setItem(e, o), (this.m_bSaveRequired = !1);
    } catch (n) {
      if ("name" in n && n.name == "QuotaExceededError") {
        console.log("Quota exceeded");
        for (let r of Object.keys(window.localStorage))
          r.startsWith("PopupSavedDimensions_") &&
            r != e &&
            window.localStorage.removeItem(r);
        window.localStorage.setItem(e, o), (this.m_bSaveRequired = !1);
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
    let o = this.m_mapRestoreDetails.get(e);
    return (
      (o.last_used = Date.now()),
      (this.m_bSaveRequired = !0),
      o.strRestoreDetails
    );
  }
  SetRestoreDetails(e, o, n) {
    if (e) {
      if (o) {
        if (this.m_mapRestoreDetails.size > 50) {
          let i = null,
            a = Date.now();
          for (let s of Array.from(this.m_mapRestoreDetails.keys())) {
            let l = this.m_mapRestoreDetails.get(s);
            l.last_used < a && l.bExpires && ((a = l.last_used), (i = s));
          }
          i && this.m_mapRestoreDetails.delete(i);
        }
        let r = { strRestoreDetails: o, last_used: Date.now(), bExpires: n };
        this.m_mapRestoreDetails.set(e, r);
      } else this.m_mapRestoreDetails.delete(e);
      (this.m_bSaveRequired = !0),
        this.m_bShuttingDown
          ? this.SaveSavedDimensionStore()
          : this.DebouncedSaveSavedDimensionStore();
    }
  }
};
m([f, tl(100)], gn.prototype, "DebouncedSaveSavedDimensionStore", 1);
var Ze = new gn();
window.g_PopupManager = Ze;
var Ap = u(_()),
  Tp = Io.default.createContext(null);
function kp(t) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: o = !0,
      children: n,
    } = t,
    i = ye()?.ownerWindow || window,
    a = Io.default.useRef();
  return (
    a.current || (a.current = new sl()),
    Io.default.useLayoutEffect(() => {
      if (o)
        return (
          oi.SetMenuManager(i, a.current), () => oi.SetMenuManager(i, void 0)
        );
    }, [i, o]),
    Io.default.useLayoutEffect(
      () => (Jt(e, a.current), () => Jt(e, void 0)),
      [e],
    ),
    (0, Ap.jsx)(Tp.Provider, { value: a.current, children: n })
  );
}
function mr() {
  return Io.default.useContext(Tp);
}
var Vt = u(M()),
  Ep = u(bt());
var Gt = u(M());
var hn = u(M());
var hf = u(_()),
  ff = hn.createContext({ body_class: "" });
function xp() {
  return hn.useContext(ff);
}
function _r(t, e, o) {
  let n = Gt.useRef(void 0),
    [r, i] = Gt.useState(void 0),
    a = xp();
  return (
    n.current || (n.current = new ea(t, bf(e, a), i)),
    (n.current.m_callbacks = o),
    Gt.useEffect(() => {
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
    Gt.useEffect(() => {
      n.current.window?.SteamClient.Window.SetHideOnClose &&
        n.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: n.current.window, element: r, popupObj: n.current }
  );
}
function bf(t, e) {
  return { ...t, body_class: b(t.body_class, e.body_class) };
}
var ea = class extends De {
  m_callbacks;
  m_fnReadyToRender;
  constructor(e, o, n) {
    super(e, o), (this.m_fnReadyToRender = n);
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
  Render(e, o) {
    this.m_fnReadyToRender(o);
  }
};
var Le = u(_());
function Lp(t) {
  let { managerOverride: e, bSuppressMouseOverlay: o } = t,
    n = Nt(),
    r = Mp(),
    i = mr(),
    a = e ?? i;
  Ft(a.OnMenusChanged, n);
  let s = !o && a.BShouldRenderMouseOverlay(),
    l = a.GetAllMenus();
  return (0, Le.jsxs)(Le.Fragment, {
    children: [
      s && (0, Le.jsx)(il, {}),
      l.map((c) =>
        (0, Le.jsx)(
          ge,
          { children: (0, Le.jsx)(Cf, { instance: c, browserInfo: r }) },
          c.key,
        ),
      ),
    ],
  });
}
function Cf(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = !1,
    i = No(),
    a = ye().ownerWindow,
    s = Vt.default.useRef(void 0);
  s.current === void 0 &&
    (s.current =
      (r || e.options.bForcePopup || a.innerWidth < 400 || i?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let l = Vt.default.useMemo(
      () => ({ instance: e, styles: ei, presentation: 0 }),
      [e],
    ),
    c = n || e.ReactElement;
  return (0, Le.jsx)(Jn.Provider, {
    value: l,
    children: s.current
      ? (0, Le.jsx)(Pf, { instance: e, browserInfo: o, children: c })
      : (0, Le.jsx)(Rf, { instance: e, children: c }),
  });
}
function Rf(t) {
  let { instance: e, children: o } = t;
  return (0, Le.jsx)(ti, { ...e.position, children: o });
}
function Pf(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = Vt.default.useRef(null),
    a = ye().ownerWindow,
    s = a.SteamClient.Browser.GetBrowserID(),
    l = Vt.default.useCallback(
      (g) => {
        let { options: h, position: w } = e,
          k = w.element;
        if (h.bScreenCoordinates)
          g.dimensions = {
            left: w.clientX,
            top: w.clientY,
            width: 2,
            height: 1,
          };
        else {
          let L = gs(a, k.getBoundingClientRect());
          (g.dimensions = { left: L.right, top: L.top, width: 2, height: 1 }),
            (g.availscreenwidth = a.screen.availWidth),
            (g.availscreenheight = a.screen.availHeight);
        }
        return g;
      },
      [a, e],
    ),
    c = e.options.bStandalone ? fn(4) : fn(3);
  e.options.bCreateHidden && (c |= 2), e.options.bAlwaysOnTop && (c |= 8192);
  let { popupObj: p, element: d } = _r(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: ei.ContextMenuPopup + " client_chat_frame",
      body_class: "ContextMenuPopupBody",
      replace_existing_popup: !1,
      target_browser: o,
      window_opener_id: s,
      bHideOnClose: !0,
      eCreationFlags: c,
    },
    { updateParamsBeforeShow: l },
  );
  return (
    (0, Vt.useEffect)(() => {
      if (p)
        if (e.visible) {
          r.current && r.current.PositionMenu(),
            r.current && r.current.PositionPopupWindow();
          let g = e.options.bNoFocusWhenShown ? 2 : 1;
          e.TakeFocus(g);
        } else
          e.options.bRetainOnHide &&
            window.setTimeout(() => {
              p.window?.SteamClient.Window.HideWindow();
            }, 30);
    }, [p, e, e.visible]),
    Bp(p.window),
    Vt.default.useEffect(() => {
      e.SetPopup(p);
    }, [e, p]),
    d
      ? Ep.default.createPortal(
          (0, Le.jsx)(ti, {
            ref: r,
            ...e.position,
            parentWin: a,
            popup: p,
            children: n,
          }),
          d,
        )
      : null
  );
}
var ct = u(M());
var Op = u(bt());
var vn = u(M());
var zt = u(M());
function Ip(t) {
  let [e, o] = zt.default.useState(!1),
    n = zt.default.useCallback(() => {
      Qe(t, "Window.IsWindowMaximized")
        ? t.SteamClient.Window.IsWindowMaximized().then((r) => {
            o(r);
          })
        : t?.screen &&
          o(
            t.screen.availWidth == t.innerWidth &&
              t.screen.availHeight == t.innerHeight,
          );
    }, [t]);
  return (
    zt.default.useEffect(n, [n, t]),
    ps(t, "resize", n),
    $r(t, ["window_moved"], n),
    e
  );
}
function Np(t, e = 100) {
  let [o, n] = zt.default.useState(!1),
    r = zt.default.useCallback(() => n(!0), [n]),
    i = zt.default.useCallback(() => n(!1), [n]);
  return (
    zt.default.useEffect(() => {
      if (t)
        return (
          t.addEventListener("focus", r),
          t.addEventListener("blur", i),
          () => {
            t.removeEventListener("focus", r), t.removeEventListener("blur", i);
          }
        );
    }, [t, r, i]),
    ds(o, e)
  );
}
var $ = u(_());
function Sf(t) {
  let { popup: e, onMaximize: o, bOSX: n } = t,
    r = Ip(e),
    i = vn.useCallback(() => {
      o
        ? o()
        : Qe(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, o]);
  return (0, $.jsx)(ta, {
    className: b(r ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: i,
    children: !n && (r ? (0, $.jsx)(Ks, {}) : (0, $.jsx)($s, {})),
  });
}
function wf(t) {
  let { popup: e, onMinimize: o, bOSX: n } = t,
    r = vn.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, $.jsx)(ta, {
    className: "minimizeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, $.jsx)(Zs, {}),
  });
}
function Mf(t) {
  let { popup: e, onClose: o, bOSX: n } = t,
    r = vn.useCallback(() => {
      e && (Qe(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, $.jsx)(ta, {
    className: "closeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, $.jsx)(Do, {}),
  });
}
function ta(t) {
  let { className: e, onClick: o, children: n } = t,
    r = vn.useCallback(
      (i) => {
        o && (i.stopPropagation(), o(i));
      },
      [o],
    );
  return (0, $.jsx)("div", {
    className: b("title-area-icon", e),
    onClick: r,
    children: (0, $.jsx)("div", {
      className: "title-area-icon-inner",
      children: n,
    }),
  });
}
function Fp(t) {
  let {
      className: e,
      style: o,
      hideActions: n,
      hideClose: r,
      hideMin: i,
      hideMax: a,
      bOSX: s = Ws(),
      bForceWindowFocused: l,
      onMinimize: c,
      onMaximize: p,
      onClose: d,
      extraActions: g,
      popup: h,
      children: w,
    } = t,
    k = Np(h);
  return (0, $.jsxs)("div", {
    className: b(
      "TitleBar",
      "title-area",
      s && "OSX",
      (k || l) && "WindowFocus",
      e,
    ),
    style: o,
    children: [
      (0, $.jsx)("div", { className: "title-area-highlight" }),
      (0, $.jsx)("div", { className: "title-area-children", children: w }),
      !n &&
        (0, $.jsxs)($.Fragment, {
          children: [
            g &&
              (0, $.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: g,
              }),
            (0, $.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !r && (0, $.jsx)(Mf, { popup: h, onClose: d, bOSX: s }),
                !a && (0, $.jsx)(Sf, { popup: h, onMaximize: p, bOSX: s }),
                !i && (0, $.jsx)(wf, { popup: h, onMinimize: c, bOSX: s }),
              ],
            }),
          ],
        }),
    ],
  });
}
var Fo = u(_());
function Up(t) {
  let { Modal: e } = t,
    { name: o, modalProps: n, options: r } = e,
    i = ye().ownerWindow,
    { popup: a, element: s } = _r(
      o,
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
        availscreenwidth: i.screen.availWidth,
        availscreenheight: i.screen.availHeight,
        bModal: n.bHideMainWindowForPopouts,
      },
      {
        updateParamsBeforeShow: (p) => Df(p, n, r, i),
        onClose: () => n.fnOnClose && n.fnOnClose(),
      },
    ),
    l = r?.bHideActions,
    c =
      typeof r?.nDragAreaHeight == "number"
        ? { height: r.nDragAreaHeight }
        : void 0;
  return s
    ? Op.createPortal(
        (0, Fo.jsx)(yp, {
          ownerWindow: a,
          children: (0, Fo.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: al,
            children: [
              (0, Fo.jsx)(Fp, {
                hideMin: !0,
                hideMax: !0,
                popup: a,
                hideActions: l,
                style: c,
              }),
              (0, Fo.jsx)(Oo, {
                browserInfo: n.browserContext,
                bCenterPopupsOnWindow: r.bCenterOnWindow,
                children: e.element,
              }),
            ],
          }),
        }),
        s,
      )
    : null;
}
function Df(t, e, o, n) {
  let r,
    i,
    a = e.popupWidth || 500,
    s = e.popupHeight || 400,
    l;
  if (J.IN_CLIENT && n?.SteamClient?.Browser?.GetBrowserID)
    l = n.SteamClient.Browser.GetBrowserID();
  else {
    let c = n.screen;
    (r = (c.availWidth - a) / 2), (i = (c.availHeight - s) / 2);
    let p = c;
    typeof p.availLeft < "u" &&
      typeof p.availTop < "u" &&
      ((r += p.availLeft), (i += p.availTop));
  }
  return {
    ...t,
    dimensions: { width: a, height: s, left: r, top: i },
    center_on_window: o.bCenterOnWindow ? n : void 0,
    window_opener_id: l,
  };
}
var ce = u(M()),
  Wp = u(bt());
var gr = u(_());
function Hp(t) {
  let { ModalManager: e } = t,
    [o, n] = ce.useState(void 0),
    [r, i] = ce.useState(!0),
    a = ce.useRef(0),
    s = ce.useCallback(() => {
      ce.startTransition(() => {
        i(!0);
      });
    }, []);
  ce.useEffect(() => e.RegisterMeasureModalCallback(s).Unregister, [e, s]),
    ce.useLayoutEffect(() => {
      o ||
        ce.startTransition(() => {
          n(e.TakeMeasureModalRequest()), i(!1);
        });
    }, [e, o, r]);
  let l = ce.useCallback((c) => {
    a.current++,
      ce.startTransition(() => {
        n((p) => (p === c ? void 0 : p));
      });
  }, []);
  return o
    ? (0, gr.jsx)(yf, { onMeasureComplete: l, request: o }, a.current)
    : null;
}
function yf(t) {
  let [e, o] = ce.useState(),
    n = ye().ownerWindow;
  return (
    ce.useLayoutEffect(() => {
      let r = n.document.body,
        i = n.document.createElement("div");
      return (
        (i.style.position = "absolute"),
        (i.style.visibility = "hidden"),
        r.appendChild(i),
        o(i),
        () => {
          r.removeChild(i);
        }
      );
    }, [n]),
    e ? Wp.createPortal((0, gr.jsx)(Tf, { ...t, elContainer: e }), e) : null
  );
}
function Tf(t) {
  let { elContainer: e, onMeasureComplete: o, request: n } = t;
  return (
    ce.useEffect(() => {
      let r = !1,
        i = (a) => {
          r || (n.fnResults(a), o(n), (r = !0));
        };
      return kf(e, n.promiseContentReady).then(i), () => i(void 0);
    }, [e, o, n]),
    (0, gr.jsx)(ge, { children: n.rctToMeasure })
  );
}
async function kf(t, e) {
  e && (await e);
  let o = document;
  J.IN_STEAMUI && o.fonts && (await o.fonts.ready);
  let n = t.getBoundingClientRect(),
    r = Math.ceil(n.height),
    i = Math.ceil(n.width);
  return { height: r, width: i };
}
var fr = class t {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${t.sm_lastKey++}`;
    }
  },
  oo = class extends fr {
    element;
    ModalUpdatedCallback = new ot();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  to = class extends fr {
    m_OnElementReadyCallbacks = new ot();
    m_OnActiveModalCallbacks = new ot();
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
m([f], to.prototype, "RefModalElement", 1);
var hr = class extends oo {
  m_strName;
  m_modalProps;
  m_options;
  constructor(e, o, n, r) {
    super(o),
      (this.m_strName = e),
      (this.m_modalProps = n),
      (this.m_options = r);
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
var Gp = u(M());
var Cn = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new ot();
    m_OnModalShownCallbacks = new ot();
    m_OnModalHiddenCallbacks = new ot();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new ot();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new ot();
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
      _e(
        this.m_cMountedOverlays == 0,
        "Duplicate modal DialogOverlay; modals will appear in both",
      ),
        this.m_cMountedOverlays++;
      let o = this.m_OnModalCountChangedCallbacks.Register(e);
      return () => {
        this.m_cMountedOverlays--, o.Unregister();
      };
    }
    OnModalCountChanged(e) {
      e == "show" &&
        this.m_cMountedOverlays == 0 &&
        window.setTimeout(() => {
          _e(
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
      let o = this.m_rgModals.indexOf(e);
      o != -1 && this.m_rgModals.splice(o, 1), this.OnModalCountChanged("hide");
    }
    ShowModalInternal(e) {
      _e(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let o = new oo(e);
      this.m_rgModals.push(o);
      let n = {
        Close: () => {
          this.RemoveModal(o);
        },
        Update: (r) => {
          o.UpdateModal(r);
        },
      };
      return this.OnModalCountChanged("show"), n;
    }
    ShowPortalModal() {
      _e(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let e = new to();
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
    RequestModalMeasure(e, o, n) {
      this.m_rgMeasureModalRequests.push({
        rctToMeasure: e,
        fnResults: o,
        promiseContentReady: n,
      }),
        this.m_OnMeasureModal.Dispatch();
    }
    get legacy_popup_modals() {
      return this.m_rgLegacyPopupModals;
    }
    ShowLegacyPopupModal(e, o, n, r) {
      let i = () => {
          let s = this.m_rgLegacyPopupModals.indexOf(a);
          s != -1 && this.m_rgLegacyPopupModals.splice(s, 1),
            this.m_OnLegacyPopupModalCountChanged.Dispatch(
              this.m_rgLegacyPopupModals.length,
            ),
            n.fnOnClose && n.fnOnClose();
        },
        a = new hr(
          e,
          o,
          { ...n, fnOnClose: i },
          { bCenterOnWindow: this.m_bCenterPopupsOnWindow, ...r },
        );
      return (
        this.m_rgLegacyPopupModals.push(a),
        this.m_OnLegacyPopupModalCountChanged.Dispatch(
          this.m_rgLegacyPopupModals.length,
        ),
        {
          Close: i,
          Update: (s) => {
            a.UpdateModal(s);
          },
        }
      );
    }
  },
  oa = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let o = this.m_mapModalManager.get(e);
      return (
        o ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (o = new Cn()),
          this.m_mapModalManager.set(e, o)),
        o
      );
    }
    RegisterModalManager(e, o) {
      _e(
        !this.m_mapModalManager.has(o) || o == window,
        `Stomping CModalManager for ${o.document.title}!`,
      );
      let n = this.m_mapModalManager.get(o);
      return (
        this.m_mapModalManager.set(o, e),
        () => {
          n
            ? this.m_mapModalManager.set(o, n)
            : this.m_mapModalManager.delete(o);
        }
      );
    }
    UnregisterModalManager(e) {
      this.m_mapModalManager.delete(e);
    }
  },
  Rn = new oa();
function Uo(t) {
  return Rn.GetModalManager(t);
}
var na = "kNiAxGG9vCI-";
var Vp = "_3G8oCr9ck-g-";
var fe = u(M()),
  Yp = u(bt());
var jp = u(M());
var no = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var ra = u(_()),
  jt = class extends jp.Component {
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
          visibilityObserver: o,
          className: n,
          style: r,
          bEnablePointerEvents: i,
          direction: a,
          nBodyAlignment: s,
          nBodyDistance: l,
          nAllowOffscreenPx: c,
          nMaxLateralMoveOnScreen: p,
          children: d,
          onNoSpace: g,
          bTopmost: h,
          ...w
        } = this.props,
        k = Object.assign({ left: this.state.x, top: this.state.y }, r),
        L = !o || o.visible;
      return (0, ra.jsx)("div", {
        className: b(no.HoverPositionOuter, h && no.HoverAboveModal),
        children: (0, ra.jsx)("div", {
          ...w,
          className: b(
            no.HoverPosition,
            L && this.state.hoverPositionReady && no.Ready,
            this.m_bNoSpace && no.NoSpace,
            i && no.EnablePointerEvents,
            n,
          ),
          style: k,
          ref: this.bindHover,
          children: d,
        }),
      });
    }
    positionHover() {
      let e = this.m_elHover,
        o = this.props.target;
      if (
        !e ||
        !o ||
        (this.state.hoverPositionReady &&
          this.props.visibilityObserver &&
          !this.props.visibilityObserver.visible)
      )
        return;
      let n = o.ownerDocument.defaultView;
      if (!n || n.closed) return;
      let r = e.querySelector(".hover_arrow.left"),
        i = e.querySelector(".hover_arrow.right"),
        a = e.querySelector(".hover_arrow.top"),
        s = e.querySelector(".hover_arrow.bottom"),
        l = o.getBoundingClientRect(),
        c = e.getBoundingClientRect(),
        p =
          this.props.direction == "overlay" ||
          this.props.direction == "overlay-center";
      r && r.setAttribute("style", "display: none;"),
        i && i.setAttribute("style", "display: none;"),
        a && a.setAttribute("style", "display: none;"),
        s && s.setAttribute("style", "display: none;");
      let {
          nBodyDistance: d = 8,
          direction: g = "right",
          nBodyAlignment: h = 0.5,
        } = this.props,
        {
          nLeft: w,
          nTop: k,
          nOverflow: L,
          nLateralOverflow: le,
        } = zp(g, h, d, l, c, n.innerWidth, n.innerHeight);
      if (L > (this.props.nAllowOffscreenPx ?? 10) && !p) {
        let ue = xf(this.props.direction ?? "right"),
          {
            nLeft: Me,
            nTop: ve,
            nOverflow: pe,
            nLateralOverflow: Co,
          } = zp(ue, h, d, l, c, n.innerWidth, n.innerHeight);
        if (
          (pe < L && ((g = ue), (w = Me), (k = ve), (L = pe), (le = Co)),
          L > (this.props.nAllowOffscreenPx ?? 10))
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
        !p &&
        ([k, w] = Ef(
          this.props.nMaxLateralMoveOnScreen,
          le,
          g ?? "right",
          k,
          w,
        ));
      let Q = null;
      switch (g) {
        case "left":
          Q = i;
          break;
        case "right":
          Q = r;
          break;
        case "top":
          Q = s;
          break;
        case "bottom":
          Q = a;
          break;
      }
      Q && Q.setAttribute("style", ""),
        w != this.state.x && this.setState({ x: w }),
        k != this.state.y && this.setState({ y: k }),
        this.state.hoverPositionReady ||
          this.setState({ hoverPositionReady: !0 });
    }
  };
ts(jt, "defaultProps", {
  direction: "right",
  nBodyAlignment: 0.5,
  nAllowOffscreenPx: 10,
  nBodyDistance: 8,
  nMaxLateralMoveOnScreen: void 0,
}),
  m([f], jt.prototype, "bindHover", 1),
  (jt = m([Wt], jt));
function xf(t) {
  switch (t) {
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
function zp(t, e, o, n, r, i, a) {
  let s = i,
    l = a,
    c = 0,
    p = 0,
    d,
    g,
    h,
    w;
  switch (t) {
    case "right":
      (d = n.right + o),
        (g = br(n.top, n.height, r.height, e)),
        (h = Math.max(0, d + r.width - s)),
        (w = [Math.max(0, c - g), Math.max(0, g + r.height - l)]);
      break;
    case "left":
      (d = n.left - o - r.width),
        (g = br(n.top, n.height, r.height, e)),
        (h = Math.max(0, p - d)),
        (w = [Math.max(0, c - g), Math.max(0, g + r.height - l)]);
      break;
    case "bottom":
      (d = br(n.left, n.width, r.width, e)),
        (g = n.bottom + o),
        (h = Math.max(0, g + r.height - l)),
        (w = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "top":
      (d = br(n.left, n.width, r.width, e)),
        (g = n.top - o - r.height),
        (h = Math.max(0, c - g)),
        (w = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "overlay":
      (d = n.left), (g = n.top), (h = 0), (w = [0, 0]);
      break;
    case "overlay-center":
      (d = n.left + 0.5 * n.width - 0.5 * r.width),
        (g = n.top + 0.5 * n.height - 0.5 * r.height),
        (h = 0),
        (w = [0, 0]);
      break;
  }
  return { nLeft: d, nTop: g, nOverflow: h, nLateralOverflow: w };
}
function br(t, e, o, n) {
  return Math.max(0, Math.min(1, n)) * (e - o) + t;
}
function Ef(t, e, o, n, r) {
  let i = Math.max(e[0], e[1]);
  t !== void 0 && (i = Math.min(t, i)), (i = Math.max(0, i));
  let a = e[0] > e[1] ? i : -i;
  return o === "left" || o === "right" ? (n += a) : (r += a), [n, r];
}
var qp = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var He = u(_()),
  Xp = fe.createContext({}),
  Lf = () => fe.useContext(Xp);
function vr(t) {
  let [e, o] = fe.useState(null),
    n = fe.useMemo(() => ({ targetElement: e }), [e]);
  return (0, He.jsxs)(Xp.Provider, {
    value: n,
    children: [(0, He.jsx)("div", { ref: o }), t.children],
  });
}
function Cr(t) {
  let { divProps: e, tooltipProps: o } = Jp({
    ...t,
    toolTipContent: t.toolTipContent
      ? (0, He.jsx)(If, { children: Bf(t.toolTipContent) })
      : null,
  });
  return (0, He.jsxs)(vt, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, He.jsx)($p, { ...o }), t.children],
  });
}
function Qp(t) {
  let { divProps: e, tooltipProps: o } = Jp(t);
  return (0, He.jsxs)(vt, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, He.jsx)($p, { ...o }), t.children],
  });
}
function Jp(t) {
  let {
      toolTipContent: e,
      nDelayShowMS: o = 300,
      bDisabled: n,
      direction: r,
      nBodyAlignment: i,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: l,
      strTooltipClassname: c,
      bNavStop: p,
      bTopmost: d,
      children: g,
      ...h
    } = t,
    w = {
      direction: r,
      nBodyAlignment: i,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: l,
      className: c,
      bTopmost: d,
    },
    [k, L] = fe.useState(!1),
    [le, Q] = fe.useState(),
    ue = fe.useCallback((pe) => {
      L(!0), Q(pe.currentTarget);
    }, []),
    Me = fe.useCallback(() => {
      L(!1);
    }, []),
    ve = {
      active: k && !n,
      target: le,
      nDelayShowMS: o,
      hoverPositionProps: w,
      children: e,
    };
  return {
    divProps: { ...h, onMouseEnter: ue, onMouseLeave: Me },
    stateHandlers: { setTarget: Q, setHovered: L },
    tooltipProps: ve,
  };
}
function Bf(t) {
  return typeof t == "string" ? B(t) : t;
}
function If(t) {
  return (0, He.jsx)("div", {
    ...t,
    className: b(qp.TextToolTip, t.className),
  });
}
function $p(t) {
  let {
      active: e,
      target: o,
      nDelayShowMS: n = 300,
      hoverPositionProps: r,
      children: i,
    } = t,
    [a, s] = fe.useState(e),
    l = Lf();
  if (
    (fe.useEffect(() => {
      if (e)
        if (n) {
          let p = window.setTimeout(() => s(!0), n);
          return () => window.clearTimeout(p);
        } else {
          s(!0);
          return;
        }
      else {
        s(!1);
        return;
      }
    }, [e]),
    !a || !i || !o)
  )
    return null;
  let { targetElement: c } = l;
  return Yp.createPortal(
    (0, He.jsx)(jt, { target: o, ...r, children: i }),
    c ?? o.ownerDocument.body,
  );
}
var X = u(_());
function Nf(t) {
  ct.useEffect(() => {
    if (t)
      return (
        document.body.classList.add(na),
        () => document.body.classList.remove(na)
      );
  }, [t]);
}
function Ff(t) {
  let e = ye().ownerWindow,
    o = Nt(),
    n = ct.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  ct.useEffect(() => t.RegisterOverlay(o), [t, o]),
    ct.useEffect(() => t.RegisterOnModalShownCallback(n).Unregister, [t, n]);
}
function Of(t, e) {
  return cs(
    (o) => {
      if (!o || !e) return;
      let n = o.ownerDocument.defaultView;
      return Rn.RegisterModalManager(t, n);
    },
    [t],
  );
}
function Zp(t) {
  let {
      ModalManager: e,
      bRegisterModalManager: o = !0,
      DialogWrapper: n,
      rctActiveContextMenus: r,
      bUseDialogElement: i = !0,
      style: a,
      ...s
    } = t,
    l = e.modals,
    c = l && !!l.length,
    p = e.active_modal;
  Nf(c), Ff(e);
  let d = Of(e, o),
    g = null,
    h = !i;
  return (
    l && l.length
      ? (g = l.map((w) => {
          let k = w == p,
            L = {
              key: w.key,
              active: k,
              rctActiveContextMenus: k && i ? r : void 0,
            };
          return w instanceof oo
            ? (0, X.jsx)(Wf, { ...L, modal: w, Component: n ?? Hf })
            : w instanceof to
              ? (0, X.jsx)(Uf, { ...L, modal: w, bUseDialogElement: i })
              : void 0;
        }))
      : ((h = !0), (a = { ...a, display: "none" })),
    (0, X.jsxs)(X.Fragment, {
      children: [
        (0, X.jsxs)(nr, {
          children: [
            (0, X.jsxs)("div", {
              ...s,
              style: a,
              ref: d,
              className: b(s.className, "FullModalOverlay"),
              children: [
                (0, X.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                g,
              ],
            }),
            h && r,
          ],
        }),
        (0, X.jsx)(Hp, { ModalManager: e }),
        (0, X.jsx)(Gf, { ModalManager: e }),
      ],
    })
  );
}
function Uf(t) {
  let {
    modal: e,
    rctActiveContextMenus: o,
    active: n,
    bUseDialogElement: r,
  } = t;
  ct.useEffect(() => {
    if (n)
      return (
        e.SetActive(n),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, n]);
  let i = (0, X.jsxs)(ge, {
    children: [
      (0, X.jsx)("div", {
        className: b("ModalOverlayContent", n ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      o,
    ],
  });
  return r ? (0, X.jsx)(Kp, { active: n, children: i }) : i;
}
function Wf(t) {
  let { modal: e, active: o, rctActiveContextMenus: n, Component: r } = t,
    i = Nt();
  return (
    Ft(e.ModalUpdatedCallback, i),
    (0, X.jsx)(ge, {
      children: (0, X.jsxs)(r, {
        className: b("ModalOverlayContent", o ? "active" : "inactive"),
        active: o,
        modalKey: e.key,
        children: [n, e.element],
      }),
    })
  );
}
function Hf(t) {
  let { className: e, active: o, children: n } = t;
  return (0, X.jsx)(Kp, {
    active: o,
    children: (0, X.jsx)(vr, {
      children: (0, X.jsx)("div", { className: e, tabIndex: -1, children: n }),
    }),
  });
}
function Kp(t) {
  let { active: e, children: o } = t,
    n = ct.useRef(null);
  return (
    ct.useEffect(() => {
      let r = n.current;
      if (!(!e || !r)) return r.showModal(), () => r.close();
    }, [e]),
    (0, X.jsx)("dialog", {
      ref: n,
      className: Vp,
      onCancel: (r) => r.preventDefault(),
      children: t.children,
    })
  );
}
function Gf(t) {
  let { ModalManager: e } = t,
    o = Nt();
  return (
    Ft(e.LegacyPopupModalCountChangedCallbacks, o),
    (0, X.jsx)(X.Fragment, {
      children: e.legacy_popup_modals.map((n) =>
        (0, X.jsx)(Up, { Modal: n }, n.key),
      ),
    })
  );
}
var ro = u(_()),
  ia = Be.createContext({}),
  Oo = Be.memo(function (e) {
    let {
        children: o,
        bRenderOverlayAtRoot: n,
        refModalManager: r,
        DialogWrapper: i,
        bUseDialogElement: a = !0,
        ContextMenuComponent: s = Lp,
        refContextMenuManager: l,
        browserInfo: c,
        bUsePopups: p,
        bOnlyPopups: d,
        bCenterPopupsOnWindow: g,
        bRegisterManagersWithWindow: h = !0,
        ...w
      } = e,
      k = Be.useRef();
    k.current || (k.current = new Cn());
    let L = (0, ro.jsx)(Zp, {
      ...w,
      DialogWrapper: i,
      ModalManager: k.current,
      bUseDialogElement: a,
      bRegisterModalManager: h,
      rctActiveContextMenus: (0, ro.jsx)(s, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (L = ed.createPortal(L, document.body)),
      us(r, k.current),
      p !== void 0 && k.current?.SetUsePopups(p),
      g !== void 0 && k.current?.SetCenterPopupsOnWindow(g),
      d !== void 0 && k.current?.SetOnlyPopups(d),
      k.current.SetBrowserInfo(c);
    let le = Be.useMemo(
      () => ({ ModalManager: k.current, DialogWrapper: i }),
      [i],
    );
    return (0, ro.jsx)(ia.Provider, {
      value: le,
      children: (0, ro.jsxs)(kp, {
        refContextMenuManager: l,
        bRegisterMenuManager: h,
        children: [(0, ro.jsx)(ge, { children: L }), e.children],
      }),
    });
  });
function No() {
  return Be.useContext(ia).ModalManager;
}
function td() {
  return Be.useContext(ia).DialogWrapper;
}
function Bp(t) {
  let e = No();
  Be.useEffect(() => {
    if (t) return Rn.RegisterModalManager(e, t);
  }, [t, e]);
}
var nm = u(M());
var qt = u(M());
var Rr = u(M());
var Ie = u(_()),
  aa = Rr.createContext({}),
  Vf = () => Rr.useContext(aa);
function io(t) {
  let o = Vf().ModalPosition ?? zf;
  return (0, Ie.jsx)(o, { ...t });
}
function zf(t) {
  let e = {},
    o;
  t.onEscKeypress &&
    ((e.tabIndex = 0),
    (e.onKeyDown = (a) => {
      a.keyCode == 27 && t.onEscKeypress();
    }),
    (e.onMouseDown = (a) => {
      a.currentTarget === a.target &&
        !t.bDisableBackgroundDismiss &&
        t.onEscKeypress();
    }),
    (o = (a) => {
      a && (Vn(a, a.ownerDocument.activeElement) || a.focus());
    }));
  let n = ["ModalPosition"];
  t.className && n.push(t.className),
    t.bDestructiveWarning && n.push("Destructive");
  let r = t.renderContent || ((a) => (0, Ie.jsx)("div", { ...a })),
    i = (0, Ie.jsxs)(Ie.Fragment, {
      children: [
        !t.hideTopBar &&
          (0, Ie.jsx)("div", { className: "ModalPosition_TopBar" }),
        t.onEscKeypress &&
          !t.bHideCloseIcon &&
          (0, Ie.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, Ie.jsx)("div", {
              className: "closeButton",
              onClick: (a) => {
                a.stopPropagation(), t.onEscKeypress();
              },
              children: (0, Ie.jsx)(Do, {}),
            }),
          }),
        (0, Ie.jsx)(ge, { children: t.children }),
      ],
    });
  return (0, Ie.jsx)("div", {
    className: n.join(" "),
    ...e,
    ref: o,
    children: r({ className: "ModalPosition_Content", children: i }),
  });
}
var ao = u(M()),
  nd = u(bt());
var sa = u(_());
function rd(t) {
  let { active: e, children: o } = t,
    n = No() || Uo(window),
    r = td(),
    [i, a] = ao.useState(null),
    [s, l] = ao.useState(!1),
    c = ao.useRef();
  if (
    (ao.useEffect(() => {
      if (e) {
        let d = n.ShowPortalModal(),
          g = d.OnElementReadyCallbacks.Register(a),
          h = d.OnModalActiveCallbacks.Register(l);
        return (
          (c.current = d.key),
          () => {
            a(null), l(!1), d.Close(), g.Unregister(), h.Unregister();
          }
        );
      } else return;
    }, [n, e]),
    !i || !e)
  )
    return null;
  let p = (0, sa.jsx)(vr, { children: o });
  return (
    r && (p = (0, sa.jsx)(r, { active: s, modalKey: c.current, children: p })),
    nd.createPortal(p, i)
  );
}
var Pn = {
  "duration-app-launch": "800ms",
  BasicContextMenuModal: "uJ0hG-CaVOs-",
  BasicContextMenuHeader: "AN2Hp1LQ9n0-",
  BasicContextMenuHeaderShrinkableSpacing: "hhS45xpvmfI-",
  BasicContextMenuContainer: "cDV5SKqaxnw-",
  slideInAnimation: "_9RJyOBZkv0I-",
  contextMenu: "VhLVP3Jhvgw-",
  contextMenuContents: "x1-2KO7vgJs-",
  hasSubMenu: "ATTtIklorIs-",
  contextMenuFade: "gTRyZgCh-Ho-",
  contextMenuItem: "FHkogJCCEy0-",
  Destructive: "Yxr6N2s2xws-",
  Positive: "eu5VX0tYz1Y-",
  Emphasis: "-WXzVoCu0h0-",
  active: "QKT3qH6x50k-",
  Selected: "c-X1QIVPLV4-",
  Focused: "RlhXEz57U1Q-",
  Capitalized: "Mn3ln2J648M-",
  MenuSectionHeader: "pOKcXNp9Arw-",
  UpperCase: "ToEy48RSk-A-",
  SubMenu: "Bntd5n9xKuk-",
  ContextMenuSeparator: "F-1ptqsIY-w-",
  Label: "iVtiM3Pigsc-",
  Arrow: "k1Y1vLMrtss-",
  BackgroundAnimation: "MgI1vEuUsqE-",
  "ItemFocusAnim-darkerGrey-nocolor": "DdWcJspeHns-",
  "ItemFocusAnim-darkerGrey": "_7oE4zLcHjdQ-",
  "ItemFocusAnim-darkGrey": "zz5u1HFpgNU-",
  "ItemFocusAnim-grey": "BUFXFGQP9Gs-",
  "ItemFocusAnim-translucent-white-10": "fMP0VfJIbPg-",
  "ItemFocusAnim-translucent-white-20": "dVMbtgn4Whs-",
  "ItemFocusAnimBorder-darkGrey": "l7pXZguduCo-",
  "ItemFocusAnim-green": "VQNbBo8A804-",
  focusAnimation: "_7XOpRmzNKi0-",
  hoverAnimation: "l-HXOknTs7g-",
};
var Te = u(_());
function id(t) {
  let { managerOverride: e } = t,
    o = mr(),
    n = e ?? o,
    r = Nt();
  return (
    Ft(n.OnMenusChanged, r),
    (0, Te.jsx)(rd, {
      active: !!n.ActiveMenu,
      children: (0, Te.jsx)(jf, { ActiveMenu: n.ActiveMenu }),
    })
  );
}
function jf(t) {
  let { ActiveMenu: e } = t,
    o = qt.useCallback(() => {
      e?.OnCancel();
    }, [e]);
  qt.useEffect(() => () => e?.Hide(), [e]);
  let n = [],
    r = null;
  Xs(() => {
    for (let a = e; a && a.visible; a = a.submenu)
      n.push((0, Te.jsx)(qf, { instance: a }, a.key)), (r = a.label);
  });
  let i = qt.useCallback(
    (a) => {
      a.currentTarget == a.target && o();
    },
    [o],
  );
  return (0, Te.jsx)(io, {
    padding: "none",
    children: (0, Te.jsxs)("div", {
      onClick: i,
      className: b("BasicUIContextMenu", Pn.BasicContextMenuModal),
      children: [
        r &&
          (0, Te.jsx)(Te.Fragment, {
            children: (0, Te.jsx)("div", {
              className: Pn.BasicContextMenuHeader,
              children: r,
            }),
          }),
        (0, Te.jsx)(O, {
          className: Pn.BasicContextMenuContainer,
          onCancelButton: o,
          onClick: i,
          children: n,
        }),
      ],
    }),
  });
}
function qf(t) {
  let { instance: e } = t,
    o = it(),
    n = qt.useCallback(() => {
      o && Ee.PlayNavSound(25);
    }, [o]),
    r = qt.useMemo(
      () => ({
        instance: e,
        styles: Pn,
        presentation: 1,
        callbacks: { onDisabledItemSelected: n },
      }),
      [e, n],
    );
  return (0, Te.jsx)(ge, {
    children: (0, Te.jsx)(Jn.Provider, { value: r, children: e.ReactElement }),
  });
}
var je = u(M());
var ua = u(M());
var Pr = u(_());
var ca = class {
  m_Promise;
  m_Value = void 0;
  constructor(e) {
    Rt(this), (this.promise = e);
  }
  set promise(e) {
    (this.m_Promise = e),
      (this.m_Value = void 0),
      e?.then((o) => {
        this.m_Promise === e && (this.m_Value = o);
      });
  }
  get promise() {
    return this.m_Promise;
  }
  get value() {
    return this.m_Value;
  }
};
m([Ct], ca.prototype, "m_Value", 2);
function Ge(t) {
  return ua.forwardRef(function (o, n) {
    return (0, Pr.jsx)("div", { ...o, className: b(t, o.className), ref: n });
  });
}
function ad(t) {
  if (typeof t != "string") return NaN;
  let o = !t.includes("ms") && t.includes("s"),
    n = Number.parseFloat(t);
  return o && (n *= 1e3), n;
}
var sd = "me1BHzZX9A0-";
var Sr = u(_());
function Tt(t) {
  let e = t.customTooltip ? Qp : Cr;
  return (0, Sr.jsxs)(e, {
    toolTipContent: t.tooltip,
    className: b(sd, "HelperTooltip", t.className),
    children: [" ", (0, Sr.jsx)(el, {})],
  });
}
var pa = u(M()),
  Wo = pa.default.createContext({}),
  da = () => pa.default.useContext(Wo);
function Ve(t, e) {
  return da()[t] ?? e;
}
var Ke = {
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
var so = u(_());
function ld(t) {
  let e = Ve("ToggleControl", Xf);
  return (0, so.jsx)(e, { ...t });
}
function Xf(t) {
  let { value: e, onChange: o, disabled: n } = t;
  return (0, so.jsxs)("div", {
    className: b(Ke.Toggle, n && Ke.Disabled),
    onClick: () => !n && o && o(!e),
    children: [
      (0, so.jsx)("div", { className: Ke.ToggleRail }),
      (0, so.jsx)("div", {
        className: b(Ke.ToggleRail, Ke.Highlight, e ? Ke.On : Ke.Off),
      }),
      (0, so.jsx)("div", { className: b(Ke.ToggleSwitch, e ? Ke.On : Ke.Off) }),
    ],
  });
}
var E = u(_());
function Mr(t) {
  return je.forwardRef(function (o, n) {
    return (0, E.jsx)(O, { ...o, className: b(t, o.className), ref: n });
  });
}
var Dr = Ge("DialogHeader"),
  oy = Ge("DialogSubHeader"),
  ny = Ge("SettingsDialogSubHeader"),
  cd = Ge("DialogFooter"),
  Qf = Ge("DialogLabel _DialogLayout"),
  ud = Ge("DialogBodyText"),
  ry = Ge("DialogBody"),
  pd = Mr("DialogBody"),
  iy = Ge("DialogInnerBody"),
  ay = Ge("DialogControlsSection"),
  sy = Ge("DialogControlsSectionHeader"),
  Jf = Mr("DialogTwoColLayout _DialogColLayout"),
  $f = Mr("DialogThreeColLayout _DialogColLayout"),
  ly = Mr("DialogTwoThirdColLayout _DialogColLayout"),
  cy = Ge("DialogColumn _DialogLayout");
function ma(t) {
  let e = Ve("Content", Zf);
  return (0, E.jsx)(e, { ...t });
}
function Zf(t) {
  let { children: e, bCenterVertically: o, refElem: n, ...r } = t,
    i = "DialogContent _DialogLayout" + (t.className ? " " + t.className : "");
  return (
    o && (i += " _DialogCenterVertically"),
    (0, E.jsx)("div", {
      ...r,
      ref: n,
      className: i,
      children: (0, E.jsx)("div", {
        className: "DialogContent_InnerWidth",
        children: e,
      }),
    })
  );
}
var wr = class extends je.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, E.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
m([f], wr.prototype, "OnSubmit", 1);
function dd(t) {
  let { classNameContent: e, bCenterVertically: o, ...n } = t;
  return (0, E.jsx)(ma, {
    className: e,
    bCenterVertically: o,
    children: (0, E.jsx)(wr, { ...n }),
  });
}
function md(t) {
  let { label: e, tooltip: o, className: n, children: r } = t;
  return (0, E.jsxs)("label", {
    className: b("DialogInputLabelGroup", "_DialogLayout", n),
    children: [
      e &&
        (0, E.jsxs)(Qf, {
          children: [e, " ", o && (0, E.jsx)(Tt, { tooltip: o }), " "],
        }),
      r,
    ],
  });
}
var Mn = je.forwardRef(function (e, o) {
    let n = da(),
      { svgicon: r, ...i } = e,
      a = b(
        e.className,
        r !== void 0 && "hasSVGIcon",
        i.disabled && "Disabled",
        n.strButtonClassName,
      ),
      s = (l) => {
        if (!(i.disabled || !l))
          return (c) => {
            c.stopPropagation(), l(c);
          };
      };
    return (0, E.jsxs)(Ut, {
      ref: o,
      onOKActionDescription: i.disabled ? null : void 0,
      noFocusRing: !!n.strButtonClassName,
      ...i,
      className: a,
      disabled: !1,
      onClick: s(i.onClick),
      onPointerDown: s(i.onPointerDown),
      onPointerUp: s(i.onPointerUp),
      onPointerCancel: s(i.onPointerCancel),
      onMouseDown: s(i.onMouseDown),
      onMouseUp: s(i.onMouseUp),
      onTouchStart: s(i.onTouchStart),
      onTouchEnd: s(i.onTouchEnd),
      onTouchCancel: s(i.onTouchCancel),
      onSubmit: s(i.onSubmit),
      children: [r && r(), e.children],
    });
  }),
  wn = je.forwardRef(function (e, o) {
    return (0, E.jsx)(Mn, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: o,
      className: b(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  ze = je.forwardRef(function (e, o) {
    return (0, E.jsx)(Mn, {
      type: "button",
      ...e,
      ref: o,
      className: b(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  uy = je.forwardRef(function (e, o) {
    return (0, E.jsx)(Mn, {
      type: "button",
      ...e,
      ref: o,
      className: b(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  py = je.forwardRef(function (e, o) {
    return (0, E.jsx)(Mn, {
      type: "button",
      ...e,
      ref: o,
      className: b(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  dy = je.forwardRef(function (e, o) {
    return (0, E.jsx)(Mn, {
      type: "button",
      ...e,
      ref: o,
      className: b(e.className, "TextButton"),
    });
  });
function _d(t) {
  return (0, E.jsxs)(Jf, {
    className: t.className,
    children: [
      (0, E.jsxs)(wn, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        autoFocus: t.focusButton == "primary",
        children: [t.strOKText || B("#Button_Confirm"), " "],
      }),
      (0, E.jsx)(ze, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        autoFocus: t.focusButton == "secondary",
        children: t.strCancelText || B("#Button_Cancel"),
      }),
    ],
  });
}
function gd(t) {
  let e = t.bOKDisabled ? ze : wn,
    o = t.bOKDisabled ? wn : ze;
  return (0, E.jsxs)($f, {
    children: [
      (0, E.jsxs)(e, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        children: [t.strOKText || B("#Button_Confirm"), " "],
      }),
      (0, E.jsxs)(o, {
        onClick: t.onUpdate,
        disabled: t.bUpdateDisabled,
        children: [t.strUpdateText || B("#Button_Update"), " "],
      }),
      (0, E.jsx)(ze, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        children: t.strCancelText || B("#Button_Cancel"),
      }),
    ],
  });
}
var Yt = class extends je.Component {
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
  shouldComponentUpdate(e, o) {
    return !(
      e.label == this.props.label &&
      e.description == this.props.description &&
      e.onChange == this.props.onChange &&
      e.controlled == this.props.controlled &&
      e.disabled == this.props.disabled &&
      o.disabled == this.state.disabled &&
      e.checked == this.checked &&
      o.checked == this.state.checked
    );
  }
  get checked() {
    return this.props.controlled ? this.props.checked : this.state.checked;
  }
  GetPanelElementProps() {
    let {
      onChange: e,
      checked: o,
      label: n,
      description: r,
      tabIndex: i,
      disabled: a,
      className: s,
      tooltip: l,
      color: c,
      highlightColor: p,
      bottomSeparator: d,
      controlled: g,
      ...h
    } = this.props;
    return {
      ...h,
      tabIndex: i || 0,
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
  SetChecked(e, o) {
    this.setState({ checked: e }),
      o && this.props.onChange && this.props.onChange(e);
  }
};
m([f], Yt.prototype, "Toggle", 1),
  m([f], Yt.prototype, "KeyDown", 1),
  m([f], Yt.prototype, "SetChecked", 1);
var my = je.forwardRef(function (e, o) {
    let n = Ve("ToggleField", Sn);
    return (0, E.jsx)(n, { ref: o, ...e });
  }),
  Sn = class extends Yt {
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
        (0, E.jsxs)("div", {
          className: e,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, E.jsxs)("div", {
              className: "displayColumn alignSelfCenter",
              children: [
                (0, E.jsxs)("div", {
                  className: "DialogToggle_Label",
                  children: [
                    (0, E.jsx)("span", { children: this.props.label }),
                    this.props.tooltip &&
                      (0, E.jsx)(Tt, { tooltip: this.props.tooltip }),
                  ],
                }),
                this.props.description &&
                  (0, E.jsx)("div", {
                    className: "DialogToggle_Description",
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, E.jsx)("div", {
                  className: "DialogToggleField_NewUIContainer",
                  children: (0, E.jsx)(ld, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, E.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, E.jsxs)(O, {
                    className: "DialogToggleField_OptionPanel",
                    onOKButton: this.Toggle,
                    children: [
                      (0, E.jsx)("div", {
                        className:
                          "DialogToggleField_Option Off" +
                          (this.checked ? "" : " Active"),
                        children: B("#Dialog_Off"),
                      }),
                      (0, E.jsx)("div", {
                        className:
                          "DialogToggleField_Option On" +
                          (this.checked ? " Active" : ""),
                        children: B("#Dialog_On"),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
m([f], Sn.prototype, "OnOffKeyDown", 1),
  m([f], Sn.prototype, "OnNewUIToggle", 1);
var ut = u(M());
var yr = class extends gl {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, o, n) {
    super(hs(e.ref.current), n),
      (this.m_component = e),
      (this.m_propTargets = o),
      (this.m_setStateOnComplete = n.setStateOnComplete);
  }
  Start() {
    this.m_props = {};
    for (let e in this.m_propTargets) {
      let o = parseFloat(this.m_component.state[e]) || 0,
        n = this.m_propTargets[e];
      o != n && (this.m_props[e] = { start: o, end: n });
    }
    super.Start();
  }
  Update(e) {
    let o = {};
    for (let n in this.m_props) {
      let r = this.m_props[n],
        i = r.start + (r.end - r.start) * e;
      o[n] = i;
    }
    this.m_component.setState(o);
  }
  FireOnComplete() {
    super.FireOnComplete(),
      this.m_setStateOnComplete &&
        this.m_component.setState(this.m_setStateOnComplete);
  }
};
var F = u(_()),
  Kf = ut.forwardRef(function (e, o) {
    let n = Ve("InputElement", wo);
    return (0, F.jsx)(n, { ...e, ref: o });
  }),
  Xt = class Xt extends ut.PureComponent {
    m_CopiedAnimation;
    ref = ut.createRef();
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
          this.props.mustBeURL == !0 && !Xt.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !Xt.validateEmail(this.m_elInput?.value),
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
      let o = this.m_elInput.ownerDocument;
      if (o.queryCommandEnabled("copy")) {
        o.execCommand("copy"),
          e.currentTarget.focus(),
          this.m_CopiedAnimation && this.m_CopiedAnimation.Cancel();
        let n = -4,
          r = -24;
        this.setState({ m_bCompletedCopiedAnimation: !1 }),
          this.setState({ m_CopiedYPos: n }, () => {
            (this.m_CopiedAnimation = new yr(
              this,
              { m_CopiedYPos: r },
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
      _e(
        !(e.bShowClearAction || e.bAlwaysShowClearAction) || e.onChange,
        "In order for bShowClearAction to work correctly, you should be handling onChange and passing value to the Dialog.Input.",
      );
    }
    render() {
      let {
          label: e,
          description: o,
          requiredLabel: n,
          bShowCopyAction: r,
          bShowClearAction: i,
          bAlwaysShowClearAction: a,
          rangeMin: s,
          rangeMax: l,
          mustBeNumeric: c,
          mustBeURL: p,
          fnStrValidateURL: d,
          mustBeEmail: g,
          focusOnMount: h,
          tooltip: w,
          inlineControls: k,
          maxChars: L,
          ...le
        } = this.props,
        Q =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (le.className ? " " + le.className : ""),
        ue = "copiedAnimation",
        Me = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (ue = "copiedAnimation animationPlaying"),
        Me && (ue = "copiedAnimation animationComplete");
      let ve = {};
      this.state.m_CopiedYPos !== void 0 &&
        (ve.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let pe = (0, F.jsxs)(ut.Fragment, {
        children: [
          (0, F.jsxs)(O, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, F.jsx)(Kf, {
                type: "text",
                ...le,
                className: Q,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              r &&
                (0, F.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, F.jsx)(ze, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: B("#Button_Copy"),
                    }),
                    (0, F.jsx)("div", {
                      style: ve,
                      className: ue,
                      children: B("#Button_Copied"),
                    }),
                  ],
                }),
              (a || (i && le.value)) &&
                (0, F.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, F.jsx)(Do, {}),
                }),
              k,
            ],
          }),
          o &&
            (0, F.jsx)("div", {
              className: "DialogLabelExplainer",
              children: o,
            }),
        ],
      });
      return e
        ? (0, F.jsx)("div", {
            className:
              "DialogInputLabelGroup _DialogLayout DialogRequirementLabel",
            children: (0, F.jsxs)("label", {
              children: [
                (0, F.jsxs)("div", {
                  className: "DialogLabel",
                  children: [
                    e,
                    " ",
                    this.props.tooltip &&
                      (0, F.jsx)(Tt, { tooltip: this.props.tooltip }),
                    (0, F.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                pe,
                this.state.m_bNumberBelowMinRange
                  ? (0, F.jsxs)("div", {
                      children: [" ", B("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, F.jsxs)("div", {
                      children: [" ", B("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, F.jsxs)("div", {
                      children: [" ", B("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, F.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, F.jsxs)("div", {
                      children: [" ", B("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, F.jsxs)("div", {
                      children: [" ", B("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, F.jsxs)("div", {
                      children: [
                        " ",
                        Hs("#Input_Error_TooManyCharacters", L),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : pe;
    }
  };
m([f], Xt.prototype, "OnInputRef", 1),
  m([f], Xt.prototype, "OnChanged", 1),
  m([f], Xt.prototype, "OnCopyClick", 1),
  m([f], Xt.prototype, "OnClearClick", 1);
var lo = Xt,
  Dn = class extends lo {
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
        description: o,
        requiredLabel: n,
        bShowCopyAction: r,
        bShowClearAction: i,
        bAlwaysShowClearAction: a,
        rangeMin: s,
        rangeMax: l,
        maxChars: c,
        mustBeNumeric: p,
        mustBeURL: d,
        fnStrValidateURL: g,
        mustBeEmail: h,
        focusOnMount: w,
        tooltip: k,
        inlineControls: L,
        className: le,
        children: Q,
        ...ue
      } = this.props;
      return (0, F.jsx)("div", {
        className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
        children: (0, F.jsxs)("label", {
          children: [
            e && (0, F.jsx)("div", { className: "DialogLabel", children: e }),
            (0, F.jsx)("div", {
              className: b(
                "_DialogInputContainer",
                "DialogTextInputBase",
                this.m_bFocused && "Active",
              ),
              onClick: this.OnBackgroundClick,
              children: (0, F.jsxs)(O, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  ut.Children.map(Q, (Me, ve) =>
                    (0, F.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: Me,
                      },
                      ve,
                    ),
                  ),
                  (0, F.jsx)(wo, {
                    type: "text",
                    ...ue,
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
            o &&
              (0, F.jsx)("div", {
                className: "DialogLabelExplainer",
                children: o,
              }),
          ],
        }),
      });
    }
  };
m([f], Dn.prototype, "OnBackgroundClick", 1),
  m([f], Dn.prototype, "OnInputFocus", 1),
  m([f], Dn.prototype, "OnInputBlur", 1);
var fd = u(M());
var pt = u(_()),
  hd = (t, e) =>
    "" + (t != null ? Number.parseFloat(t.toFixed(3)) : null) + (e ?? "");
var kt = class extends fd.Component {
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
    let o = 1;
    e.ctrlKey &&
      (o = Math.max(
        1,
        Math.floor((this.props.max - this.props.min) * 0.1 + 0.5),
      )),
      e.keyCode == 37
        ? (this.IncrementValue(-1 * o), e.preventDefault())
        : e.keyCode == 39 && (this.IncrementValue(1 * o), e.preventDefault()),
      this.CompleteChange(2);
  }
  AdjustSliderForClientX(e, o) {
    let n =
      ((e - this.m_rectSlider.left) /
        (this.m_rectSlider.right - this.m_rectSlider.left)) *
        (this.props.max - this.props.min) +
      this.props.min;
    n = Math.floor(n + 0.5);
    let r = this.ClampValue(n);
    r != this.props.value &&
      (this.props.onChange && this.props.onChange(r, o),
      (this.m_flLastSetValue = r));
  }
  CompleteChange(e) {
    this.m_flLastSetValue != null &&
      (this.props.onChangeComplete &&
        this.props.onChangeComplete(this.m_flLastSetValue, e),
      (this.m_flLastSetValue = null));
  }
  IncrementValue(e) {
    let o = this.ClampValue(this.props.value + e);
    o != this.props.value &&
      (this.props.onChange && this.props.onChange(o, 2),
      (this.m_flLastSetValue = o));
  }
  render() {
    let e = {},
      o = {};
    if (this.BPropsValid()) {
      let l =
        (100 * (this.props.value - this.props.min)) /
          (this.props.max - this.props.min) +
        "%";
      (e.width = l), (o.left = l);
    }
    let { label: n, description: r, tooltip: i, ...a } = this.props,
      s = this.props.renderValue ?? hd;
    return (0, pt.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        n &&
          (0, pt.jsxs)("div", {
            className: "DialogLabel",
            children: [n, !!i && (0, pt.jsx)(Tt, { tooltip: i })],
          }),
        (0, pt.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, pt.jsx)("div", { className: "DialogSlider_Value", style: e }),
            (0, pt.jsx)("div", { className: "DialogSlider_Grabber", style: o }),
          ],
        }),
        this.props.showValue &&
          (0, pt.jsx)("div", {
            className: "DialogLabelExplainer",
            children: s(this.props.value, this.props.valueSuffix),
          }),
        r &&
          (0, pt.jsx)("div", {
            className: "DialogLabelExplainer",
            children: r,
          }),
      ],
    });
  }
};
m([f], kt.prototype, "OnMouseDown", 1),
  m([f], kt.prototype, "OnMouseMove", 1),
  m([f], kt.prototype, "OnMouseUp", 1),
  m([f], kt.prototype, "OnTouchStart", 1),
  m([f], kt.prototype, "OnTouchMove", 1),
  m([f], kt.prototype, "OnTouchEnd", 1),
  m([f], kt.prototype, "OnKeyDown", 1);
var bd = u(M());
var th = u(_()),
  eh = { setValue: () => {} },
  Vy = bd.default.createContext(eh);
var Se = u(M());
var yn = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var Z = u(_());
function At(t) {
  return typeof t == "object" && "data" in t;
}
function co(t) {
  return typeof t == "object" && "bIsSeparator" in t;
}
function mt(t) {
  return typeof t == "object" && "options" in t;
}
function ga(t, e) {
  if (t === e) return !0;
  if (!Array.isArray(t) || !Array.isArray(e) || t.length != e.length) return !1;
  for (let o = 0; o < t.length; o++) if (!fa(t[o], e[o])) return !1;
  return !0;
}
function fa(t, e) {
  return t == null || e == null
    ? t == e
    : co(t) && co(e)
      ? !0
      : !(
          co(t) ||
          co(e) ||
          t.label !== e.label ||
          t.tooltip !== e.tooltip ||
          mt(t) != mt(e) ||
          (mt(t) && mt(e) && !ga(t.options, e.options)) ||
          (At(t) && At(e) && t.data !== e.data)
        );
}
function Tr(t, e) {
  if (t != null)
    for (let o = 0; o < t.length; o++) {
      let n = t[o];
      if (At(n) && n.data === e) return n;
      if (mt(n)) {
        let r = Tr(n.options, e);
        if (r != null) return r;
      }
    }
}
function oh(t) {
  let e = Ve("DropDownField", nh);
  return (0, Z.jsx)(e, { ...t });
}
function nh(t) {
  let {
    label: e,
    tooltip: o,
    strClassName: n,
    dropDownControlRef: r,
    ...i
  } = t;
  return (0, Z.jsx)(md, {
    label: e,
    tooltip: o,
    className: n,
    children: (0, Z.jsx)(dt, { menuLabel: e, ...i, ref: r }),
  });
}
var rh = Se.forwardRef(function (e, o) {
    return (0, Z.jsxs)(Ut, {
      focusable: e.focusable,
      className: b(e.className, "DialogDropDown", "_DialogInputContainer", {
        Active: e.opened,
        Disabled: e.disabled,
      }),
      tabIndex: e.tabIndex,
      onClick: e.onClick,
      onKeyDown: e.onKeyDown,
      disabled: e.disabled,
      type: "button",
      ref: o,
      noFocusRing: e.noFocusRing,
      children: [
        e.children,
        !e.disabled &&
          (0, Z.jsx)("div", {
            className: b(e.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, Z.jsx)(Js, {}),
          }),
      ],
    });
  }),
  dt = class extends Se.Component {
    static contextType = Wo;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: Tr(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let o = Tr(this.props.rgOptions, e);
      fa(o, this.value) || this.setState({ value: o });
    }
    get value() {
      return this.props.controlled
        ? Tr(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, o, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        o.bOpened !== this.state.bOpened ||
        !ga(this.props.rgOptions, e.rgOptions) ||
        !fa(o.value, this.value)
      )
        return !0;
      let r = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let i of r) if (e[i] !== this.props[i]) return !0;
      return !1;
    }
    componentDidUpdate(e, o) {
      Hn(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let n = !ga(e.rgOptions, this.props.rgOptions),
        r = e.selectedOption !== this.props.selectedOption,
        i = this.value !== o.value;
      !this.props.controlled &&
        (n || i || r) &&
        (r || this.value == null
          ? this.SetSelectedOption(this.props.selectedOption)
          : this.SetSelectedOption(this.value.data)),
        (n || i) &&
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
    OnValueSelected(e, o) {
      this.HideMenu(),
        this.setState({ value: o }),
        this.props.onChange && this.props.onChange(o, this, e);
    }
    BuildMenu() {
      let e = "DialogMenuPosition";
      this.props.strDropDownClassName &&
        (e += " " + this.props.strDropDownClassName);
      let o = {
          bOverlapHorizontal: !0,
          bMatchWidth: this.props.bMatchWidth ?? !0,
          bFitToWindow: !0,
          strClassName: e,
          bDisableMouseOverlay: this.props.bDisableMouseOverlay,
          ...this.props.contextMenuPositionOptions,
        },
        n = this.props.contextMenuPositionOptions?.onCancel;
      (this.m_iMenuInstance = nn(
        (0, Z.jsx)(ih, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: n,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
        }),
        this.m_elInput,
        o,
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
      Cd(e, this.props.rgOptions.filter(At), this.value?.data, (o) =>
        this.OnValueSelected(void 0, o),
      );
    }
    render() {
      let e = (0, Z.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: this.value?.label ?? this.props.strDefaultLabel,
        }),
        o =
          this.props.renderButtonValue != null
            ? this.props.renderButtonValue(e)
            : e,
        n = this.props.focusable ?? !0,
        r = this.props.renderButton || this.context.DropDownControlButton || rh;
      return (0, Z.jsx)(r, {
        focusable: n,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (n ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        children: o,
      });
    }
  };
m([f], dt.prototype, "OnInputRef", 1),
  m([f], dt.prototype, "ToggleMenu", 1),
  m([f], dt.prototype, "OnValueSelected", 1),
  m([f], dt.prototype, "ShowMenu", 1),
  m([f], dt.prototype, "HideMenu", 1),
  m([f], dt.prototype, "OnKeyDown", 1);
var vd = Se.createContext(null);
function ih(t) {
  let e = Ve("DropDownMenu", ah);
  return (0, Z.jsx)(vd.Provider, {
    value: {},
    children: (0, Z.jsx)(e, { ...t }),
  });
}
function Cd(t, e, o, n) {
  let r;
  if (t.key === "ArrowDown")
    r = (e.findIndex((a) => a.data === o) + 1) % e.length;
  else if (t.key === "ArrowUp") {
    let i = e.findIndex((a) => a.data === o);
    r = i <= 0 ? e.length - 1 : i - 1;
  }
  r !== void 0 && (n(e[r]), t.preventDefault());
}
function ah(t) {
  let {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      selectedValue: r,
    } = t,
    [i, a] = Se.useState(r),
    s = Se.useMemo(() => e.filter(At), [e]),
    l = Se.useCallback(
      (c) => {
        Cd(c, s, i, (p) => a(p.data));
      },
      [i, s],
    );
  return (0, Z.jsx)("div", {
    className: b(
      yn.DialogDropDownMenu,
      "_DialogInputContainer",
      t.strDropDownMenuCtnClass,
    ),
    onKeyDown: l,
    children: (0, Z.jsx)(Rd, {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: i,
      setActiveValue: a,
    }),
  });
}
function Rd(t) {
  let { rgOptions: e, ...o } = t;
  return e.map((n, r) =>
    co(n)
      ? (0, Z.jsx)(
          "hr",
          {
            className: b(
              yn.DialogDropDownMenu_Item,
              yn.DialogDropDownMenu_Separator,
            ),
          },
          r,
        )
      : mt(n)
        ? (0, Z.jsx)(Rd, { ...o, rgOptions: n.options }, r)
        : (0, Z.jsx)(sh, { ...o, option: n }, r),
  );
}
function sh(t) {
  let {
      option: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: r,
      setActiveValue: i,
    } = t,
    a = Se.useCallback((c) => c && c.focus(), []),
    s = Se.useCallback(() => {
      i(e.data);
    }, [i, e]),
    l = e.data === r;
  return (0, Z.jsx)("button", {
    type: "button",
    className: b(
      yn.DialogDropDownMenu_Item,
      o,
      e.strOptionClass,
      l && "ContextMenuAutoFocus",
    ),
    onClick: (c) => n(c, e),
    ref: l ? a : void 0,
    onMouseEnter: s,
    children: e.tooltip
      ? (0, Z.jsx)(Cr, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, Z.jsx)("div", { children: e.label }),
  });
}
var _a = class extends Se.Component {
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
        strInitialDisplay: o,
        initialValue: n,
        ...r
      } = this.props,
      { rgOptions: i } = this.state;
    return (
      i === void 0 &&
        (o || n
          ? ((i = [{ label: o, data: n }]), (r.selectedOption = n))
          : (i = [])),
      (0, Z.jsx)(oh, { ...r, rgOptions: i, onMenuOpened: this.OnMenuOpened })
    );
  }
};
m([f], _a.prototype, "OnMenuOpened", 1);
var ch = u(M());
var Pd = u(_());
var Ne = u(M());
var Sd = u(k_());
var ha = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new ba(e, !1);
  }
};
var ba = class {
    m_parent;
    m_window;
    m_container = null;
    iIntervalShow;
    m_bRemoveOnHide;
    m_reactRoot;
    constructor(e, o = !0) {
      (this.m_parent = e),
        (this.m_window = e.ownerDocument.defaultView),
        (this.m_bRemoveOnHide = o);
    }
    Show(e, o) {
      return (
        this.CancelShowInterval(),
        o
          ? new Promise((n, r) => {
              this.iIntervalShow = this.m_window.setTimeout(() => {
                let i = this.m_parent.ownerDocument;
                i.defaultView &&
                  !i.defaultView.closed &&
                  (this.InternalShow(e), n());
              }, o);
            })
          : (this.InternalShow(e), Promise.resolve())
      );
    }
    InternalShow(e) {
      this.m_container ||
        ((this.m_container = this.m_parent.ownerDocument.createElement("div")),
        this.m_parent.appendChild(this.m_container)),
        this.m_reactRoot ||
          (this.m_reactRoot = Sd.createRoot(this.m_container)),
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
      return this.m_container && Vn(this.m_container, e);
    }
  },
  kr = class {
    m_strUniqueID;
    m_mapEmbeddedHovers = new WeakMap();
    constructor(e) {
      this.m_strUniqueID = e;
    }
    ShowElementDelayed(e, o, n, r) {
      let i = this.GetEmbeddedElement(e);
      return (i.activeObject = r), i.instance.Show(n, o);
    }
    ShowElement(e, o, n) {
      let r = this.GetEmbeddedElement(e);
      (r.activeObject = n), r.instance.Show(o);
    }
    HideElement(e, o, n) {
      let r = this.GetEmbeddedElement(e);
      r.activeObject == o && ((r.activeObject = void 0), r.instance.Hide(n));
    }
    GetEmbeddedElement(e) {
      let o = this.m_mapEmbeddedHovers.get(e);
      return o || ((o = new ha(e.body)), this.m_mapEmbeddedHovers.set(e, o)), o;
    }
  };
var ke = u(_()),
  Tn = new Cs("DragDrop").Debug;
var va = class extends Ne.Component {
  m_coordinator = new Ar();
  OnDrop(e, o) {
    o > e && o--, o != e && this.props.onReorder(e, o);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, ke.jsx)(
          Lr,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (n) => n.props.data != 0,
            fnOnDrop: (n) => this.OnDrop(n.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      Ne.Children.forEach(this.props.children, (n, r) => {
        let i = n.props.id || "__list_" + r,
          a = r + 1;
        e.push(
          (0, ke.jsx)(
            qe,
            { coordinator: this.m_coordinator, data: r, children: n },
            i,
          ),
        ),
          e.push(
            (0, ke.jsx)(
              Lr,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (s) => s.props.data != a,
                fnOnDrop: (s) => this.OnDrop(s.props.data, a),
              },
              "dropregion_" + i,
            ),
          );
      }),
      (0, ke.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
m([f], va.prototype, "OnDrop", 1);
function uh(t) {
  if ("touches" in t) {
    let e = t;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [t.clientX, t.clientY];
}
function Ca(t, e, o, n) {
  return n
    ? o && t > o.left && t < o.right && e > o.top && e < o.bottom
    : o && t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
}
var Ar = class {
  m_embeddedElement = new kr("DragGhosts");
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
    Zo(this.m_rgDropRegions, e),
      Zo(this.m_rgActiveDropRegions, e),
      this.m_activeDropRegion == e &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost());
  }
  OnDragGhostRef(e) {
    this.m_dragGhost = e;
  }
  ShowDragGhost() {
    let e = this.m_activeDraggable.renderDragGhost(),
      o = b(
        e.props.className,
        !!this.m_activeDropRegion && "DraggedOverActiveDrop",
      ),
      n = Ne.cloneElement(e, { ref: this.OnDragGhostRef, className: o });
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
    _e(
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
    for (let o of this.m_rgDropRegions)
      o.BAcceptDraggable(e) &&
        (o.OnDragStarted(e), this.m_rgActiveDropRegions.push(o));
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
  FindBestActiveDropRegionForPoint(e, o) {
    let n = this.m_activeDraggable.GetDragDocument(),
      r;
    if (("elementsFromPoint" in n && (r = n.elementsFromPoint(e, o)), r)) {
      let i = new Map();
      this.m_rgActiveDropRegions.forEach((a) => i.set(a.GetElement(), a));
      for (let a of r) {
        let s = i.get(a);
        if (s) return s;
      }
    } else {
      if (
        this.m_activeDropRegion &&
        this.m_activeDropRegion.BDraggableInRegion(e, o, this.m_activeDraggable)
      )
        return this.m_activeDropRegion;
      for (let i = this.m_rgActiveDropRegions.length - 1; i >= 0; i--) {
        let a = this.m_rgActiveDropRegions[i];
        if (a.BDraggableInRegion(e, o, this.m_activeDraggable)) return a;
      }
    }
  }
  m_prevClientX = 0;
  m_prevClientY = 0;
  OnDrag(e, o, n) {
    let r = this.m_prevClientX || o,
      i = this.m_prevClientY || n;
    if (
      (e.props.bEnableHTMLDrag &&
        this.m_dragOffWindowTimer &&
        window.clearTimeout(this.m_dragOffWindowTimer),
      this.m_dragGhost)
    ) {
      let s = r === void 0 ? 0 : r - (this.m_dragGhost.state.clientX ?? 0),
        l = i === void 0 ? 0 : i - (this.m_dragGhost.state.clientY ?? 0);
      if (
        (this.m_dragGhost.setState({
          clientX: r,
          clientY: i,
          clientXDelta: s,
          clientYDelta: l,
          bVisible: !0,
        }),
        e.props.bEnableHTMLDrag && (s || l))
      ) {
        let c = r + s,
          p = i + l,
          d = e.GetDragDocument().body.getBoundingClientRect();
        if (Ca(r, i, d) && !Ca(c, p, d, !0)) {
          let g = On(c, d.left, d.right, d.left - 200, d.right + 200),
            h = On(p, d.top, d.bottom, d.top - 100, d.bottom + 100),
            w = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, g, h);
          }, w);
        }
      }
    }
    let a = this.FindBestActiveDropRegionForPoint(r, i);
    (this.m_prevClientX = o),
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
        this.m_activeDropRegion.OnDragMove(r, i, this.m_activeDraggable);
  }
};
m([f], Ar.prototype, "OnDragGhostRef", 1);
var wd = 5,
  qe = class extends Ne.Component {
    constructor(e) {
      super(e), Rt(this);
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
    m_divRef = Ne.createRef();
    GetDragDocument() {
      return this.m_DragInfo.ownerWin?.document;
    }
    RecordDragStart(e, o, n) {
      (this.m_DragInfo.startClientX = o), (this.m_DragInfo.startClientY = n);
      let r = e.getBoundingClientRect();
      (this.m_DragInfo.startOffsetX = o - r.left),
        (this.m_DragInfo.startOffsetY = n - r.top),
        (this.m_DragInfo.startWidth = r.width),
        (this.m_DragInfo.startHeight = r.height),
        (this.m_DragInfo.ownerWin = e.ownerDocument.defaultView);
    }
    ProcessDragMove(e) {
      Tn("ProcessDragMove", e, this.props.data);
      let [o, n] = uh(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(o - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(n - (this.m_DragInfo.startClientY ?? 0), 2) >=
          wd * wd &&
          ((this.m_DragInfo.bStarted = !0),
          this.forceUpdate(),
          this.props.fnOnDragStart && this.props.fnOnDragStart(),
          this.props.coordinator.OnDragStart(this),
          this.props.coordinator.OnDrag(this, o, n));
      else {
        if (this.props.bEnableHTMLDrag && o == 0 && n == 0) return;
        this.props.coordinator.OnDrag(this, o, n);
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
      Tn("ResetDragState", this.props.data),
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
      Tn("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
        (e.dataTransfer.effectAllowed = "copyMove"),
        this.props.strHTMLDragData &&
          this.props.strHTMLDragData.forEach((n, r) =>
            e.dataTransfer.setData(r, n),
          ),
        e.dataTransfer.getData("text/plain") ||
          e.dataTransfer.setData("text/plain", this.props.data.toString());
      let o = new Image();
      e.dataTransfer.setDragImage(o, 0, 0),
        this.RecordDragStart(e.currentTarget, e.clientX, e.clientY),
        this.m_DragInfo.ownerWin?.addEventListener("drag", this.OnHTMLDrag),
        this.m_DragInfo.ownerWin?.addEventListener(
          "dragend",
          this.OnHTMLDragEnd,
        );
    }
    OnHTMLDrag(e) {
      Tn("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      Tn(
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
          data: o,
          bEnableHTMLDrag: n,
          strHTMLDragData: r,
          fnOnDragStart: i,
          fnOnDragEnd: a,
          fnRenderDragGhost: s,
          fnRenderDropGhost: l,
          className: c,
          strActiveClassName: p,
          children: d,
          ...g
        } = this.props,
        h = {},
        w = c || "DialogDraggable";
      return (
        this.m_DragInfo.bStarted
          ? ((w = b(w, p || "DraggedOut")),
            n && (h = { onDragEnd: this.OnHTMLDragEnd }))
          : n
            ? (h = { onDragStart: this.OnHTMLDragStart })
            : (h = {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
        (0, ke.jsx)("div", {
          ref: this.m_divRef,
          className: w,
          ...h,
          ...g,
          draggable: n,
          children: d,
        })
      );
    }
    renderDropGhost() {
      return this.props.fnRenderDropGhost
        ? this.props.fnRenderDropGhost()
        : (0, ke.jsx)(xr, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, ke.jsx)(Er, {
            elContent: this.GetClone(),
            offsetX: this.m_DragInfo.startOffsetX,
            offsetY: this.m_DragInfo.startOffsetY,
            width: this.m_DragInfo.startWidth,
            height: this.m_DragInfo.startHeight,
          });
    }
    GetClone() {
      let e = this.m_divRef.current,
        o;
      if (e && e.childElementCount)
        if (e.childElementCount == 1) o = e.firstElementChild.cloneNode(!0);
        else {
          o = document.createElement("div");
          for (let n = e.firstChild; n; n = n.nextSibling)
            o.appendChild(n.cloneNode(!0));
        }
      return o;
    }
  };
m([f], qe.prototype, "ProcessDragMove", 1),
  m([f], qe.prototype, "OnMouseDown", 1),
  m([f], qe.prototype, "OnMouseUp", 1),
  m([f], qe.prototype, "OnTouchStart", 1),
  m([f], qe.prototype, "OnTouchEnd", 1),
  m([Ns], qe.prototype, "ResetDragState", 1),
  m([f], qe.prototype, "OnHTMLDragStart", 1),
  m([f], qe.prototype, "OnHTMLDrag", 1),
  m([f], qe.prototype, "OnHTMLDragEnd", 1);
var xr = class extends Ne.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, ke.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
m([f], xr.prototype, "OnRef", 1);
var Er = class extends Ne.Component {
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
      return (0, ke.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      o = On(
        this.CalculateRotationDegrees(this.state.clientYDelta),
        -90,
        90,
        2,
        0,
      ),
      n = {
        transform: `rotateX(${this.CalculateRotationDegrees(-1 * (this.state.clientYDelta ?? 0))}deg) rotateY( ${this.CalculateRotationDegrees(this.state.clientXDelta)}deg)`,
        transition: "transform .16s ease-out, filter .16s ease-out",
        filter: "brightness(" + o + ")",
      },
      r = this.props.className || "DialogDraggable_DragGhost";
    return (0, ke.jsx)("div", {
      className: r,
      style: e,
      children: (0, ke.jsx)("div", { ref: this.OnRef, style: n }),
    });
  }
};
m([f], Er.prototype, "OnRef", 1);
var Ra = class extends Ne.Component {
    m_divRef = Ne.createRef();
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
    OnDragEnter(e, o) {
      this.setState({ dropGhost: o }),
        this.props.fnOnDragEnter && this.props.fnOnDragEnter(e);
    }
    OnDragLeave(e) {
      this.setState({ dropGhost: void 0 }),
        this.props.fnOnDragLeave && this.props.fnOnDragLeave(e);
    }
    OnDragMove(e, o, n) {}
    OnDrop(e) {
      this.setState({ dropGhost: void 0 }), this.props.fnOnDrop(e);
    }
    BAcceptDraggable(e) {
      return !this.props.fnBAcceptDraggable || this.props.fnBAcceptDraggable(e);
    }
    BDraggableInRegion(e, o, n) {
      return Ca(e, o, this.GetClientRect());
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
          fnBAcceptDraggable: o,
          fnOnDrop: n,
          fnOnDragEnter: r,
          fnOnDragLeave: i,
          className: a,
          strActiveClassName: s,
          children: l,
          focusable: c,
          containerRef: p,
          ...d
        } = this.props,
        g = b(
          a || "DialogDropRegion",
          this.state.bDraggableActive && (s || "Active"),
        );
      return (0, ke.jsxs)(vt, {
        ref: Gn(p, this.m_divRef),
        className: g,
        ...d,
        focusable: c === void 0 ? !!d.onClick : c,
        children: [this.state.dropGhost, l],
      });
    }
  },
  Lr = class extends Ra {
    BDraggableInRegion(e, o, n) {
      let r = this.GetClientRect();
      return r
        ? e >= r.left && e <= r.right && o >= r.top - 20 && o <= r.bottom + 20
        : !1;
    }
  };
var H = u(M());
var _t = {
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
var V = u(_()),
  ph = "separator",
  dh = "spacer",
  kn = class {
    constructor() {
      Rt(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
m([Ct], kn.prototype, "m_flPageListScrollTop", 2),
  m([Ct], kn.prototype, "m_flPageScrollTop", 2);
var uo = class uo {
  static s_Instance;
  static Get() {
    return uo.s_Instance || (uo.s_Instance = new uo()), uo.s_Instance;
  }
  constructor() {
    Rt(this);
  }
  m_setPagedSettingsInstances = new Set();
};
m([Ct], uo.prototype, "m_setPagedSettingsInstances", 2);
var Br = uo;
function mh(t) {
  let {
    stylesheet: e,
    pages: o,
    iActivePage: n,
    onPageSelected: r,
    PageListItemComponent: i = _h,
    PageListSeparatorComponent: a = gh,
  } = t;
  return o.map((s, l) => {
    let c = l === n;
    if (s === ph) {
      let p = l === n + 1 || l === n - 1;
      return (0, V.jsx)(a, { bTransparent: p }, l);
    } else {
      if (s === dh)
        return (0, V.jsx)("div", { className: _t.PageListSpacer }, l);
      {
        if (s.visible === !1) return null;
        let p = s.identifier || s.title || l.toString(),
          d = () => r(l, s);
        return (0, V.jsx)(
          i,
          {
            className: b(e.PagedSettingsDialog_PageListItem, { [e.Active]: c }),
            onClick: d,
            title: s.title,
            icon: s.icon,
            active: c,
          },
          p,
        );
      }
    }
  });
}
function _h(t) {
  let { title: e, icon: o, active: n, className: r, onClick: i, ...a } = t;
  return (0, V.jsxs)("div", {
    className: r,
    onClick: i,
    children: [
      o
        ? (0, V.jsx)("div", { className: _t.PageListItem_Icon, children: o })
        : null,
      (0, V.jsx)("div", {
        className: _t.PageListItem_Title,
        ...a,
        children: e,
      }),
    ],
  });
}
var Md = H.forwardRef(function (e, o) {
  let { activePage: n, style: r, stylesheet: i } = e,
    a = n?.padding ?? "standard";
  return (0, V.jsxs)(ma, {
    style: r,
    className: b(
      i?.PagedSettingsDialog_PageContent,
      n?.pageClassName,
      a == "none" && i?.NoPadding,
    ),
    refElem: o,
    children: [
      n?.header,
      !n?.hideTitle && (0, V.jsx)(Dr, { children: n?.title }),
      (0, V.jsx)(ge, { children: n?.content }),
    ],
  });
});
function gh(t) {
  return (0, V.jsx)("div", {
    className: b(_t.PageListSeparator, { [_t.Transparent]: t.bTransparent }),
  });
}
var Dd = H.forwardRef(function (e, o) {
  let { stylesheet: n = _t, pages: r, onPageRequested: i } = e,
    a = e.page == null,
    [s, l] = H.useState(() =>
      e.startingPage === void 0
        ? -1
        : r.findIndex(
            (Ce) => typeof Ce == "object" && Ce.identifier === e.startingPage,
          ),
    ),
    c = s;
  a ||
    (c = r.findIndex(
      (Ce) => typeof Ce == "object" && Ce.identifier === e.page,
    )),
    (c < 0 || c >= r.length) && (c = 0);
  let p = null;
  typeof r[c] == "object" && (p = r[c]);
  let d = H.useRef(null),
    g = H.useCallback(() => d.current?.TakeFocus() || !1, [d]),
    [h, w] = H.useState(!1),
    k = h ? g : void 0,
    L = H.useCallback((Ce) => {
      Ce && w(!0);
    }, []),
    le = H.useCallback(
      (Ce, Ro) => {
        w(!0),
          Ee.PlayNavSound(15),
          i && i(Ro.identifier),
          Ro.click ? Ro.click() : a && l(Ce);
      },
      [a, i],
    ),
    Q = H.useRef(null),
    ue = (Ce) => {
      Ce.detail.button == 1 && Q.current?.TakeFocus(Ce.detail.button);
    },
    Me = e.showTitle ?? !0,
    ve = b("DialogContentTransition", n.PagedSettingDialog_ContentColumn);
  H.useEffect(() => {
    e.bAutoFocusPageContent && Q.current?.TakeFocus();
  }, []);
  let { refForPageList: pe, refForPage: Co } = bh();
  return (0, V.jsxs)(O, {
    className: b(n.PagedSettingsDialog, e.className),
    ref: o,
    children: [
      (0, V.jsxs)(O, {
        className: b(
          n.PagedSettingsDialog_PageListColumn,
          e.hideList && _t.Hidden,
          "PageListColumn",
        ),
        navRef: d,
        onButtonDown: ue,
        onFocusWithin: L,
        children: [
          Me &&
            (0, V.jsx)("div", {
              className: n.PagedSettingsDialog_Title,
              children: e.title,
            }),
          e.topControls && (0, V.jsx)("div", { children: e.topControls }),
          (0, V.jsx)(O, {
            className: b(
              n.PagedSettingsDialog_PageList,
              e.disablePageListScrolling &&
                n.PagedSettingsDialog_PageList_DisableScrolling,
              Me && n.PagedSettingsDialog_PageList_ShowTitle,
              e.bNoHeaderPadding &&
                n.PageSettingsDialog_PageList_NoHeaderPadding,
            ),
            navEntryPreferPosition: 4,
            ref: pe,
            children: (0, V.jsx)(mh, {
              stylesheet: n,
              pages: r,
              iActivePage: c,
              onPageSelected: le,
              PageListItemComponent: e.PageListItemComponent,
              PageListSeparatorComponent: e.PageListSeparatorComponent,
            }),
          }),
          e.bottomControls && (0, V.jsx)("div", { children: e.bottomControls }),
        ],
      }),
      (0, V.jsxs)(O, {
        className: ve,
        onCancelButton: k,
        navRef: Q,
        children: [
          e.toggleHideList &&
            (0, V.jsx)(hh, {
              hideList: e.hideList,
              toggleHideList: e.toggleHideList,
            }),
          e.renderPageContent
            ? e.renderPageContent(p, Co, Md)
            : (0, V.jsx)(Md, { ref: Co, activePage: p, stylesheet: n }),
        ],
      }),
    ],
  });
});
var fh = H.createContext(!1);
var WT = H.memo(function (e) {
  let {
      isActive: o,
      refForPage: n,
      page: r,
      PageComponent: i,
      stylesheet: a,
    } = e,
    s = H.useRef(!1);
  if (!o && !s.current) return null;
  s.current = !0;
  let l = o ? void 0 : { display: "none" };
  return (0, V.jsx)(fh.Provider, {
    value: o,
    children: (0, V.jsx)(i, { ref: n, style: l, activePage: r, stylesheet: a }),
  });
});
function hh(t) {
  let { hideList: e, toggleHideList: o } = t;
  return (0, V.jsx)("div", {
    className: b(_t.HidePageListButton, e && _t.ListHidden),
    onClick: o,
    children: e
      ? (0, V.jsx)(ni, { direction: "right" })
      : (0, V.jsx)(ni, { direction: "left" }),
  });
}
function bh() {
  let t = H.useMemo(() => new kn(), []);
  H.useEffect(
    () => (
      Br.Get().m_setPagedSettingsInstances.add(t),
      () => {
        Br.Get().m_setPagedSettingsInstances.delete(t);
      }
    ),
    [t],
  );
  let e = H.useCallback(
      (c) => (t.m_flPageListScrollTop = c.currentTarget.scrollTop),
      [t],
    ),
    o = H.useCallback(
      (c) => (t.m_flPageScrollTop = c.currentTarget.scrollTop),
      [t],
    ),
    n = Jr("scroll", e),
    r = Jr("scroll", o),
    i = H.useCallback(
      (c) => (t.m_flPageListScrollTop = c?.scrollTop ?? 0),
      [t],
    ),
    a = H.useCallback((c) => (t.m_flPageScrollTop = c?.scrollTop ?? 0), [t]),
    s = xe(n, i),
    l = xe(r, a);
  return { refForPageList: s, refForPage: l };
}
var Ir = u(M());
var yd = u(_()),
  Qt = class extends Ir.Component {
    m_refTextArea = Ir.createRef();
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
        o = this.GetMinHeight(),
        n = this.GetMaxHeight(),
        r,
        i = e.value.length;
      if (
        (this.m_nTextAreaPadding === void 0 && this.CalculatePadding(),
        i < this.m_cEntryLength &&
          ((r = window.scrollY), (e.style.height = o + "px")),
        e.scrollHeight > n)
      )
        (e.style.height = n + "px"), (e.style.overflow = "auto");
      else if (e.scrollHeight != e.clientHeight) {
        let a = Math.max(e.scrollHeight, o);
        (e.style.height = a - this.m_nTextAreaPadding + "px"),
          e.style.overflow == "auto" && (e.style.overflow = "hidden");
      }
      r !== void 0 && window.scrollTo(window.scrollX, r),
        (this.m_cEntryLength = i);
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
      let { nMinHeight: e, nMaxHeight: o, ...n } = this.props;
      return (0, yd.jsx)(Ls, {
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
m([f], Qt.prototype, "InternalOnInput", 1),
  m([f], Qt.prototype, "OnKeyUp", 1),
  m([f], Qt.prototype, "OnBlur", 1),
  m([f], Qt.prototype, "OnClick", 1),
  m([f], Qt.prototype, "OnPaste", 1),
  m([f], Qt.prototype, "OnCut", 1);
var gt = u(M());
var T = {
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
  Spacer: "FubjHOng-Ic-",
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
var xn = u(M());
var wa = u(M());
var Sa = u(_());
async function vh(t, e, o) {
  let n = Uo(e),
    r = o?.bForcePopOut || kd(n);
  _e(
    !(r && o?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let i = !r && o?.bNeverPopOut === !0,
    a = kd(n) || (!i && xd(n, e)),
    s = r && o?.popupWidth && o?.popupHeight,
    l;
  if (a && !s) {
    let p = wa.cloneElement(t, { closeModal: () => {} });
    l = await Ch(n, p, o?.promiseRenderComplete);
  }
  let c = l && l.height / e.innerHeight < 0.9 && l.width / e.innerWidth < 0.8;
  if (i || (!r && c)) return Td(t, e, void 0, { fnOnClose: o?.fnOnClose });
  {
    let p = {
        strTitle: o?.strTitle || B("#Dialog_DefaultWindowTitle"),
        fnOnClose: o?.fnOnClose,
        popupWidth: o?.popupWidth || l?.width,
        popupHeight: o?.popupHeight || l?.height,
        bHideMainWindowForPopouts: o?.bHideMainWindowForPopouts,
        className: o?.className,
      },
      d = { bHideActions: o?.bHideActionIcons },
      g = o?.browserContext || e.browserInfo;
    return Td(t, e, p.strTitle, p, g, d, n);
  }
}
async function Ad(t, e, o) {
  return vh(t, e, { bHideMainWindowForPopouts: !0, ...o });
}
function Td(t, e, o, n, r, i, a) {
  let s,
    l,
    c = t.props.closeModal,
    p = () => {
      l && l.Close(), c && c(), n?.fnOnClose && n.fnOnClose();
    },
    d = () => {
      s && s.Close(), p();
    },
    g = wa.cloneElement(t, { closeModal: d });
  if (((a = a || Uo(e)), xd(a, e) && n && o)) {
    if (n.bHideMainWindowForPopouts) {
      let w = (0, Sa.jsx)(io, {
        className: "Hidden",
        onEscKeypress: g.props.bDisableBackgroundDismiss ? void 0 : d,
        children: (0, Sa.jsx)("div", {}),
      });
      l = a.ShowModal(w);
    }
    let h = { ...n, fnOnClose: p, browserContext: r };
    s = a.ShowLegacyPopupModal(o, g, h, i);
  } else s = a.ShowModal(g);
  return s;
}
function xd(t, e) {
  return (t = t || Uo(e || window)), J.USE_POPUPS && t.BUsePopups();
}
function kd(t) {
  return t.BOnlyPopups && t.BOnlyPopups();
}
async function Ch(t, e, o) {
  return new Promise((n, r) => {
    t.RequestModalMeasure(e, n, o);
  });
}
var Ma = u(M());
var Da = u(_()),
  Ed = Wt((t) => {
    let { onCancel: e, closeModal: o, bOKDisabled: n, onOK: r } = t,
      i = it();
    _e(
      o || e,
      `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${t.className} ${t.modalClassName}`,
    );
    let a = Ma.useCallback(() => {
        (e && e()) || (o && o());
      }, [e, o]),
      s = Ma.useCallback(async () => {
        n || (r && (await r()), o && o());
      }, [n, r, o]);
    return (0, Da.jsx)(io, {
      onEscKeypress: a,
      className: t.modalClassName,
      bDestructiveWarning: t.bDestructiveWarning,
      bDisableBackgroundDismiss: t.bDisableBackgroundDismiss,
      bHideCloseIcon: t.bHideCloseIcon,
      children: (0, Da.jsx)(dd, {
        classNameContent: b(
          "GenericConfirmDialog",
          t.bAllowFullSize && "DialogContentFullSize",
          t.className,
        ),
        onSubmit: s,
        bCenterVertically: !i,
        children: t.children,
      }),
    });
  });
var he = u(_());
var Ho = class extends xn.Component {
  Cancel(e) {
    return () => {
      e && e(), this.props.closeModal && this.props.closeModal();
    };
  }
  render() {
    let {
        strTitle: e,
        strDescription: o,
        strOKButtonText: n,
        strCancelButtonText: r,
        onGamepadCancel: i,
        strMiddleButtonText: a,
        onMiddleButton: s,
        bAlertDialog: l,
        children: c,
        ...p
      } = this.props,
      d = n || B("#Button_Close"),
      g = (0, he.jsx)(_d, {
        bOKDisabled: this.props.bOKDisabled,
        bCancelDisabled: this.props.bCancelDisabled,
        strOKText: n,
        onCancel: this.Cancel(this.props.onCancel),
        strCancelText: r,
      });
    return (
      l
        ? (g = (0, he.jsx)(wn, { children: d }))
        : s &&
          (g = (0, he.jsx)(gd, {
            bOKDisabled: this.props.bOKDisabled,
            bCancelDisabled: this.props.bCancelDisabled,
            strOKText: n,
            onCancel: this.Cancel(this.props.onCancel),
            strCancelText: r,
            onUpdate: () => {
              s(), this.props.closeModal && this.props.closeModal();
            },
            strUpdateText: a,
            bUpdateDisabled: this.props.bMiddleDisabled,
          })),
      (0, he.jsxs)(Ed, {
        ...p,
        children: [
          (0, he.jsxs)(Dr, {
            children: [
              " ",
              e || (0, he.jsx)(he.Fragment, { children: " " }),
              " ",
            ],
          }),
          (0, he.jsxs)(pd, {
            onCancelButton: this.Cancel(i || this.props.onCancel),
            children: [
              (0, he.jsxs)(ud, { children: [o, c] }),
              (0, he.jsx)(cd, { children: g }),
            ],
          }),
        ],
      })
    );
  }
};
Ho = m([Wt], Ho);
var Nr = class extends xn.Component {
  render() {
    let e = {
      strTitle: B("#Error_FailureNotice"),
      strDescription: B("#Error_GenericFailureDescription"),
      bAlertDialog: !0,
      bDestructiveWarning: !0,
      onOK: () => {},
      onCancel: () => {},
      ...this.props,
    };
    return (0, he.jsx)(Ho, { ...e });
  }
};
Nr = m([Wt], Nr);
var An = class extends xn.Component {
  render() {
    let e = {
      onOK: () => {},
      onCancel: () => {},
      bAlertDialog: !0,
      ...this.props,
    };
    return (
      (e.strDescription = (0, he.jsxs)("span", {
        style: { whiteSpace: "pre-line" },
        children: [" ", e.strDescription, " "],
      })),
      (0, he.jsx)(Ho, { ...e })
    );
  }
};
An = m([Wt], An);
function Ld(t, e, o) {
  Ad((0, he.jsx)(An, { strTitle: t, strDescription: e }), o);
}
var de = u(_()),
  Go = gt.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        icon: i,
        children: a,
        childrenLayout: s,
        inlineWrap: l,
        childrenContainerWidth: c,
        spacingBetweenLabelAndChild: p,
        padding: d,
        disabled: g,
        bottomSeparator: h,
        className: w,
        highlightOnFocus: k,
        indentLevel: L,
        verticalAlignment: le,
        iconLocation: Q,
        tooltip: ue,
        explainer: Me,
        explainerTitle: ve,
        ...pe
      } = e,
      Co = it(),
      Ce = s ?? "inline",
      Ro = Q ?? "front",
      Xa = Ro == "front" && !!i,
      Qa = Ro == "before-children" && !!i,
      Vr = Ce == "inline" && !!a,
      Ja = Ce == "below" && !!a,
      R_ = l ?? (Co ? "shift-children-below" : "keep-inline"),
      zr = !!(pe.onClick || pe.onActivate || pe.focusable),
      $a = (i != null && Xa) || n != null || (Vr && a != null),
      Za = c ?? "min",
      P_ = p ?? "standard",
      Ka = d ?? "standard",
      es = h ?? "standard",
      S_ = k ?? !0,
      w_ = L ?? 0,
      M_ = le ?? "center",
      D_ = Rh(ve ?? n, Me),
      jr = gt.useRef(),
      y_ = xe(jr, e.navRef),
      T_ = gt.useCallback(
        (qr) => {
          jr.current?.TakeFocus(), qr.preventDefault();
        },
        [jr],
      );
    return (0, de.jsxs)(O, {
      focusable: zr,
      noFocusRing: !0,
      scrollIntoViewWhenChildFocused: !0,
      onActivate: (qr) => pe.onClick?.(qr),
      ref: o,
      onMouseDown: zr ? void 0 : T_,
      ...pe,
      ...D_,
      navRef: y_,
      className: b(
        w,
        T.Field,
        g && T.Disabled,
        $a && T.WithFirstRow,
        Vr && T.WithChildrenInline,
        Ja && T.WithChildrenBelow,
        M_ == "center" && T.VerticalAlignCenter,
        R_ == "shift-children-below" && T.InlineWrapShiftsChildrenBelow,
        !!r && T.WithDescription,
        es == "standard" && T.WithBottomSeparatorStandard,
        es == "thick" && T.WithBottomSeparatorThick,
        Za == "fixed" && T.ChildrenWidthFixed,
        Za == "max" && T.ChildrenWidthGrow,
        P_ == "standard" && T.ExtraPaddingOnChildrenBelow,
        Ka == "standard" && T.StandardPadding,
        Ka == "compact" && T.CompactPadding,
        zr && T.Clickable,
        S_ && T.HighlightOnFocus,
      ),
      style: { "--indent-level": w_ },
      children: [
        $a &&
          (0, de.jsxs)("div", {
            className: T.FieldLabelRow,
            children: [
              (0, de.jsxs)("div", {
                className: T.FieldLabel,
                children: [
                  Xa &&
                    (0, de.jsx)("div", {
                      className: b(T.FieldIcon, T.Front),
                      children: i,
                    }),
                  n,
                  ue && (0, de.jsx)(Tt, { tooltip: ue }),
                ],
              }),
              Vr &&
                (0, de.jsxs)("div", {
                  className: T.FieldChildrenWithIcon,
                  children: [
                    Qa &&
                      (0, de.jsx)("div", {
                        className: b(T.FieldIcon, T.BeforeChildren),
                        children: i,
                      }),
                    (0, de.jsx)("div", {
                      className: T.FieldChildrenInner,
                      children: a,
                    }),
                  ],
                }),
            ],
          }),
        Ja &&
          (0, de.jsxs)("div", {
            className: T.FieldChildrenWithIcon,
            children: [
              Qa &&
                (0, de.jsx)("div", {
                  className: b(T.FieldIcon, T.BeforeChildren),
                  children: i,
                }),
              (0, de.jsx)("div", {
                className: T.FieldChildrenInner,
                children: a,
              }),
            ],
          }),
        r && (0, de.jsx)("div", { className: T.FieldDescription, children: r }),
      ],
    });
  });
function Rh(t, e) {
  let o = ye(),
    n = gt.useCallback(() => {
      Ld(t, e, o.ownerWindow ?? window);
    }, [o, t, e]);
  if (e == null) return {};
  let r = B("#Field_MoreInfo_Action");
  return { onOptionsButton: n, onOptionsActionDescription: r };
}
var Tk = gt.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        explainer: i,
        icon: a,
        layout: s,
        disabled: l,
        onActivate: c,
        bottomSeparator: p,
        highlightOnFocus: d,
        childrenContainerWidth: g,
        padding: h,
        inlineWrap: w,
        fieldClassName: k,
        fieldChildren: L,
        ...le
      } = e,
      { refWithValue: Q, refForElement: ue } = Qr(o);
    return (0, de.jsxs)(Go, {
      label: n,
      description: r,
      icon: a,
      bottomSeparator: p,
      highlightOnFocus: d,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: g ?? "min",
      onMouseDown: (ve) => {
        Q.current?.focus(), ve.preventDefault();
      },
      padding: h,
      inlineWrap: w,
      explainer: i,
      className: k,
      disabled: l,
      onActivate: l ? c : void 0,
      children: [(0, de.jsx)(ze, { ...le, disabled: l, ref: ue }), L],
    });
  }),
  Bd = gt.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        icon: i,
        layout: a,
        bottomSeparator: s,
        highlightOnFocus: l,
        ...c
      } = e,
      { refWithValue: p, refForElement: d } = Qr(o);
    return (0, de.jsx)(Go, {
      label: n,
      description: r,
      icon: i,
      bottomSeparator: s,
      highlightOnFocus: l,
      childrenLayout: a ?? "inline",
      childrenContainerWidth: "fixed",
      onMouseDown: (h) => {
        p.current?.element?.focus(), h.preventDefault();
      },
      children: (0, de.jsx)(lo, { ...c, ref: d }),
    });
  });
var jd = u(M());
var ie = u(M());
var Fe = u(M());
var ya = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function Ta(t, e) {
  return t.classList
    ? !!e && t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function ka(t, e) {
  t.classList
    ? t.classList.add(e)
    : Ta(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function Id(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function Aa(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
      ? (t.className = Id(t.className, e))
      : t.setAttribute(
          "class",
          Id((t.className && t.className.baseVal) || "", e),
        );
}
var Ba = u(M());
var En = u(M()),
  Ln = u(bt());
var xa = { disabled: !1 };
var Nd = u(M()),
  Vo = Nd.default.createContext(null);
var Fr = function (e) {
  return e.scrollTop;
};
var Bn = "unmounted",
  po = "exited",
  mo = "entering",
  jo = "entered",
  Ea = "exiting",
  Et = (function (t) {
    ko(e, t);
    function e(n, r) {
      var i;
      i = t.call(this, n, r) || this;
      var a = r,
        s = a && !a.isMounting ? n.enter : n.appear,
        l;
      return (
        (i.appearStatus = null),
        n.in
          ? s
            ? ((l = po), (i.appearStatus = mo))
            : (l = jo)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Bn)
            : (l = po),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    e.getDerivedStateFromProps = function (r, i) {
      var a = r.in;
      return a && i.status === Bn ? { status: po } : null;
    };
    var o = e.prototype;
    return (
      (o.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (o.componentDidUpdate = function (r) {
        var i = null;
        if (r !== this.props) {
          var a = this.state.status;
          this.props.in
            ? a !== mo && a !== jo && (i = mo)
            : (a === mo || a === jo) && (i = Ea);
        }
        this.updateStatus(!1, i);
      }),
      (o.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (o.getTimeouts = function () {
        var r = this.props.timeout,
          i,
          a,
          s;
        return (
          (i = a = s = r),
          r != null &&
            typeof r != "number" &&
            ((i = r.exit),
            (a = r.enter),
            (s = r.appear !== void 0 ? r.appear : a)),
          { exit: i, enter: a, appear: s }
        );
      }),
      (o.updateStatus = function (r, i) {
        if ((r === void 0 && (r = !1), i !== null))
          if ((this.cancelNextCallback(), i === mo)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ln.default.findDOMNode(this);
              a && Fr(a);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === po &&
            this.setState({ status: Bn });
      }),
      (o.performEnter = function (r) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : r,
          l = this.props.nodeRef ? [s] : [Ln.default.findDOMNode(this), s],
          c = l[0],
          p = l[1],
          d = this.getTimeouts(),
          g = s ? d.appear : d.enter;
        if ((!r && !a) || xa.disabled) {
          this.safeSetState({ status: jo }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, p),
          this.safeSetState({ status: mo }, function () {
            i.props.onEntering(c, p),
              i.onTransitionEnd(g, function () {
                i.safeSetState({ status: jo }, function () {
                  i.props.onEntered(c, p);
                });
              });
          });
      }),
      (o.performExit = function () {
        var r = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : Ln.default.findDOMNode(this);
        if (!i || xa.disabled) {
          this.safeSetState({ status: po }, function () {
            r.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Ea }, function () {
            r.props.onExiting(s),
              r.onTransitionEnd(a.exit, function () {
                r.safeSetState({ status: po }, function () {
                  r.props.onExited(s);
                });
              });
          });
      }),
      (o.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (o.safeSetState = function (r, i) {
        (i = this.setNextCallback(i)), this.setState(r, i);
      }),
      (o.setNextCallback = function (r) {
        var i = this,
          a = !0;
        return (
          (this.nextCallback = function (s) {
            a && ((a = !1), (i.nextCallback = null), r(s));
          }),
          (this.nextCallback.cancel = function () {
            a = !1;
          }),
          this.nextCallback
        );
      }),
      (o.onTransitionEnd = function (r, i) {
        this.setNextCallback(i);
        var a = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ln.default.findDOMNode(this),
          s = r == null && !this.props.addEndListener;
        if (!a || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [a, this.nextCallback],
            c = l[0],
            p = l[1];
          this.props.addEndListener(c, p);
        }
        r != null && setTimeout(this.nextCallback, r);
      }),
      (o.render = function () {
        var r = this.state.status;
        if (r === Bn) return null;
        var i = this.props,
          a = i.children,
          s = i.in,
          l = i.mountOnEnter,
          c = i.unmountOnExit,
          p = i.appear,
          d = i.enter,
          g = i.exit,
          h = i.timeout,
          w = i.addEndListener,
          k = i.onEnter,
          L = i.onEntering,
          le = i.onEntered,
          Q = i.onExit,
          ue = i.onExiting,
          Me = i.onExited,
          ve = i.nodeRef,
          pe = To(i, [
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
        return En.default.createElement(
          Vo.Provider,
          { value: null },
          typeof a == "function"
            ? a(r, pe)
            : En.default.cloneElement(En.default.Children.only(a), pe),
        );
      }),
      e
    );
  })(En.default.Component);
Et.contextType = Vo;
Et.propTypes = {};
function zo() {}
Et.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: zo,
  onEntering: zo,
  onEntered: zo,
  onExit: zo,
  onExiting: zo,
  onExited: zo,
};
Et.UNMOUNTED = Bn;
Et.EXITED = po;
Et.ENTERING = mo;
Et.ENTERED = jo;
Et.EXITING = Ea;
var Fd = Et;
var Ph = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return ka(e, n);
      })
    );
  },
  La = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return Aa(e, n);
      })
    );
  },
  Ia = (function (t) {
    ko(e, t);
    function e() {
      for (var n, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      return (
        (n = t.call.apply(t, [this].concat(i)) || this),
        (n.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (n.onEnter = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            d = c[1];
          n.removeClasses(p, "exit"),
            n.addClass(p, d ? "appear" : "enter", "base"),
            n.props.onEnter && n.props.onEnter(s, l);
        }),
        (n.onEntering = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            d = c[1],
            g = d ? "appear" : "enter";
          n.addClass(p, g, "active"),
            n.props.onEntering && n.props.onEntering(s, l);
        }),
        (n.onEntered = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            d = c[1],
            g = d ? "appear" : "enter";
          n.removeClasses(p, g),
            n.addClass(p, g, "done"),
            n.props.onEntered && n.props.onEntered(s, l);
        }),
        (n.onExit = function (s) {
          var l = n.resolveArguments(s),
            c = l[0];
          n.removeClasses(c, "appear"),
            n.removeClasses(c, "enter"),
            n.addClass(c, "exit", "base"),
            n.props.onExit && n.props.onExit(s);
        }),
        (n.onExiting = function (s) {
          var l = n.resolveArguments(s),
            c = l[0];
          n.addClass(c, "exit", "active"),
            n.props.onExiting && n.props.onExiting(s);
        }),
        (n.onExited = function (s) {
          var l = n.resolveArguments(s),
            c = l[0];
          n.removeClasses(c, "exit"),
            n.addClass(c, "exit", "done"),
            n.props.onExited && n.props.onExited(s);
        }),
        (n.resolveArguments = function (s, l) {
          return n.props.nodeRef ? [n.props.nodeRef.current, s] : [s, l];
        }),
        (n.getClassNames = function (s) {
          var l = n.props.classNames,
            c = typeof l == "string",
            p = c && l ? l + "-" : "",
            d = c ? "" + p + s : l[s],
            g = c ? d + "-active" : l[s + "Active"],
            h = c ? d + "-done" : l[s + "Done"];
          return { baseClassName: d, activeClassName: g, doneClassName: h };
        }),
        n
      );
    }
    var o = e.prototype;
    return (
      (o.addClass = function (r, i, a) {
        var s = this.getClassNames(i)[a + "ClassName"],
          l = this.getClassNames("enter"),
          c = l.doneClassName;
        i === "appear" && a === "done" && c && (s += " " + c),
          a === "active" && r && Fr(r),
          s && ((this.appliedClasses[i][a] = s), Ph(r, s));
      }),
      (o.removeClasses = function (r, i) {
        var a = this.appliedClasses[i],
          s = a.base,
          l = a.active,
          c = a.done;
        (this.appliedClasses[i] = {}),
          s && La(r, s),
          l && La(r, l),
          c && La(r, c);
      }),
      (o.render = function () {
        var r = this.props,
          i = r.classNames,
          a = To(r, ["classNames"]);
        return Ba.default.createElement(
          Fd,
          $n({}, a, {
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
  })(Ba.default.Component);
Ia.defaultProps = { classNames: "" };
Ia.propTypes = {};
var Na = Ia;
function Od(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
var In = u(M());
var Ye = u(M());
function Or(t, e) {
  var o = function (i) {
      return e && (0, Ye.isValidElement)(i) ? e(i) : i;
    },
    n = Object.create(null);
  return (
    t &&
      Ye.Children.map(t, function (r) {
        return r;
      }).forEach(function (r) {
        n[r.key] = o(r);
      }),
    n
  );
}
function Sh(t, e) {
  (t = t || {}), (e = e || {});
  function o(p) {
    return p in e ? e[p] : t[p];
  }
  var n = Object.create(null),
    r = [];
  for (var i in t) i in e ? r.length && ((n[i] = r), (r = [])) : r.push(i);
  var a,
    s = {};
  for (var l in e) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var c = n[l][a];
        s[n[l][a]] = o(c);
      }
    s[l] = o(l);
  }
  for (a = 0; a < r.length; a++) s[r[a]] = o(r[a]);
  return s;
}
function _o(t, e, o) {
  return o[e] != null ? o[e] : t.props[e];
}
function Ud(t, e) {
  return Or(t.children, function (o) {
    return (0, Ye.cloneElement)(o, {
      onExited: e.bind(null, o),
      in: !0,
      appear: _o(o, "appear", t),
      enter: _o(o, "enter", t),
      exit: _o(o, "exit", t),
    });
  });
}
function Wd(t, e, o) {
  var n = Or(t.children),
    r = Sh(e, n);
  return (
    Object.keys(r).forEach(function (i) {
      var a = r[i];
      if ((0, Ye.isValidElement)(a)) {
        var s = i in e,
          l = i in n,
          c = e[i],
          p = (0, Ye.isValidElement)(c) && !c.props.in;
        l && (!s || p)
          ? (r[i] = (0, Ye.cloneElement)(a, {
              onExited: o.bind(null, a),
              in: !0,
              exit: _o(a, "exit", t),
              enter: _o(a, "enter", t),
            }))
          : !l && s && !p
            ? (r[i] = (0, Ye.cloneElement)(a, { in: !1 }))
            : l &&
              s &&
              (0, Ye.isValidElement)(c) &&
              (r[i] = (0, Ye.cloneElement)(a, {
                onExited: o.bind(null, a),
                in: c.props.in,
                exit: _o(a, "exit", t),
                enter: _o(a, "enter", t),
              }));
      }
    }),
    r
  );
}
var wh =
    Object.values ||
    function (t) {
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    },
  Mh = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  Fa = (function (t) {
    ko(e, t);
    function e(n, r) {
      var i;
      i = t.call(this, n, r) || this;
      var a = i.handleExited.bind(Od(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: a,
          firstRender: !0,
        }),
        i
      );
    }
    var o = e.prototype;
    return (
      (o.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (o.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (e.getDerivedStateFromProps = function (r, i) {
        var a = i.children,
          s = i.handleExited,
          l = i.firstRender;
        return { children: l ? Ud(r, s) : Wd(r, a, s), firstRender: !1 };
      }),
      (o.handleExited = function (r, i) {
        var a = Or(this.props.children);
        r.key in a ||
          (r.props.onExited && r.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = $n({}, s.children);
              return delete l[r.key], { children: l };
            }));
      }),
      (o.render = function () {
        var r = this.props,
          i = r.component,
          a = r.childFactory,
          s = To(r, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = wh(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? In.default.createElement(Vo.Provider, { value: l }, c)
            : In.default.createElement(
                Vo.Provider,
                { value: l },
                In.default.createElement(i, s, c),
              )
        );
      }),
      e
    );
  })(In.default.Component);
Fa.propTypes = {};
Fa.defaultProps = Mh;
var Oa = Fa;
var qo = u(_());
function Hd(t) {
  let {
      childrenKey: e,
      childrenClasses: o,
      children: n,
      directionClass: r,
      animate: i = !0,
    } = t,
    a = b(ya.TransitionGroup, r);
  return (0, qo.jsx)(Oa, {
    className: a,
    appear: !1,
    enter: i,
    exit: i,
    children: (0, qo.jsx)(Dh, { childrenClasses: o, children: n }, e),
  });
}
function Dh(t) {
  let { sizeClass: e, children: o, childrenClasses: n, navKey: r, ...i } = t,
    [a, s, l, c] = yh(),
    p = Fe.useRef(!0),
    d = Fe.useCallback(() => p.current, [p]),
    g = Fe.useCallback(() => {
      (p.current = !0), l();
    }, [l]),
    h = Fe.useCallback(() => {
      (p.current = !1), c();
    }, [c]),
    w = 1e4,
    k = t.childrenClasses,
    L = {
      enter: k.enterStart,
      enterActive: k.enterEnd,
      exit: k.exitStart,
      exitActive: k.exitEnd,
    };
  return a.current && !a.current.ownerDocument.defaultView
    ? null
    : (0, qo.jsx)(Na, {
        nodeRef: a,
        classNames: L,
        in: !0,
        timeout: w,
        addEndListener: s,
        onEntering: g,
        onExiting: h,
        ...i,
        children: (0, qo.jsx)("div", {
          ref: a,
          className: b(ya.ContentWrapper, e, k.base),
          children: (0, qo.jsx)(O, {
            className: e,
            fnCanTakeFocus: d,
            navKey: r,
            children: t.children,
          }),
        }),
      });
}
function yh() {
  let t = Fe.useRef(null),
    e = Fe.useRef();
  Fe.useLayoutEffect(() => {
    let i = t.current;
    if (!i || e.current) return;
    e.current = {
      element: i,
      activeProps: new Set(),
      bExiting: !1,
      fnDone: null,
    };
    let a = e.current,
      s = (c) => {
        c.target == i && a.activeProps.add(c.propertyName);
      };
    i.addEventListener("transitionrun", s, !1);
    let l = (c) => {
      c.target == i &&
        (a.activeProps.delete(c.propertyName),
        a.fnDone && a.activeProps.size == 0 && a.bExiting && a.fnDone());
    };
    i.addEventListener("transitionend", l, !1),
      i.addEventListener("transitioncancel", l, !1);
  }, []);
  let o = Fe.useCallback(
      (i) => {
        if (!e.current) {
          i();
          return;
        }
        e.current.fnDone = i;
      },
      [e],
    ),
    n = Fe.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    r = Fe.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [t, o, n, r];
}
function Gd(t, e) {
  return {
    base: e,
    enterStart: t.Enter,
    enterEnd: t.EnterActive,
    exitStart: t.Exit,
    exitEnd: t.ExitActive,
  };
}
function Vd(t, e) {
  return e == 1
    ? t.Left
    : e == 2
      ? t.Right
      : e == 3
        ? t.Up
        : e == 4
          ? t.Down
          : "";
}
var Lt = {
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
var et = u(_()),
  zd = ie.createContext(null);
function Th(t) {
  let e = ie.useContext(zd),
    n = Fs().IN_VR,
    { title: r, icon: i, active: a, ...s } = t;
  return (0, et.jsxs)(O, {
    preferredFocus: a,
    navRef: a && e ? e : void 0,
    noFocusRing: !0,
    onActivate: n ? void 0 : s.onClick,
    onFocus: n ? void 0 : s.onClick,
    ...s,
    children: [
      i && (0, et.jsx)("div", { className: Lt.PageListItem_Icon, children: i }),
      (0, et.jsx)("div", { className: Lt.PageListItem_Title, children: r }),
    ],
  });
}
function kh(t) {
  return (0, et.jsx)("div", { className: Lt.Separator });
}
var Ah = ie.forwardRef(function (e, o) {
  let { page: n, bAutoFocusPageContent: r, showTitle: i = !1 } = e,
    a = ie.useRef(null),
    s = ie.useRef(!0);
  ie.useEffect(() => {
    (!s.current || !r) && a.current?.TakeFocus(), (s.current = !1);
  }, [n, r]);
  let l = (c, p, d) =>
    (0, et.jsx)(xh, {
      pages: e.pages,
      activePage: c,
      refForPage: p,
      PageComponent: d,
    });
  return (0, et.jsx)(zd.Provider, {
    value: a,
    children: (0, et.jsx)(Dd, {
      ...e,
      stylesheet: Lt,
      showTitle: i,
      PageListItemComponent: Th,
      PageListSeparatorComponent: kh,
      renderPageContent: e.renderPageContent || l,
    }),
  });
});
function xh(t) {
  let { pages: e, activePage: o, refForPage: n, PageComponent: r } = t,
    i = ie.useMemo(() => e.findIndex((c) => c == o), [e, o]),
    a = Eh(i),
    s = Lh(o?.identifier, n),
    l = Vd(Lt, a);
  return (0, et.jsx)(Hd, {
    childrenKey: o?.identifier,
    childrenClasses: Gd(Lt, Lt.ContentTransition),
    directionClass: l,
    animate: a != 0,
    children:
      o &&
      (0, et.jsx)(
        r,
        { ref: s(o.identifier), stylesheet: Lt, activePage: o },
        o.identifier,
      ),
  });
}
function Eh(t) {
  let e = ie.useRef(t),
    o = ie.useRef(0),
    n = e.current;
  if (n == t) return o.current;
  let r = 0;
  return (
    n < t ? (r = 4) : n > t && (r = 3), (e.current = t), (o.current = r), r
  );
}
function Lh(t, e) {
  let o = ie.useMemo(() => new Map(), []),
    n = ie.useRef();
  n.current = t;
  let r = ie.useRef();
  r.current = e;
  let i = ie.useCallback(
    (a) => (s) => {
      o.set(a, s), a === n.current && Jt(r.current, s);
    },
    [o],
  );
  return (
    ie.useEffect(() => (Jt(e, t && o.get(t)), () => Jt(e, void 0)), [o, t, e]),
    i
  );
}
var qd = u(_()),
  AA = jd.forwardRef(function (e, o) {
    return (0, qd.jsx)(wo, {
      noFocusRing: !0,
      ...e,
      ref: o,
      className: b(T.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var Qd = u(M());
var Xd = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var Oe = u(_());
function Jd(t, e) {
  for (let o of t.options)
    if ((At(o) && o.data === e) || (mt(o) && Jd(o, e))) return !0;
  return !1;
}
function Ua(t) {
  let e = (o) =>
    o?.map((n, r) =>
      co(n)
        ? (0, Oe.jsx)(nl, {}, r)
        : At(n)
          ? (0, Oe.jsx)(
              yo,
              {
                onSelected: (i) => t.onValueSelected && t.onValueSelected(i, n),
                selected: t.selectedValue === n.data,
                children: (0, Oe.jsx)(Oe.Fragment, { children: n.label }),
              },
              r,
            )
          : mt(n)
            ? (0, Oe.jsx)(
                rl,
                {
                  label: n.label,
                  selectedWithin: Jd(n, t.selectedValue),
                  children: e(n.options),
                },
                r,
              )
            : null,
    );
  return (0, Oe.jsx)(on, { onCancel: t.onCancel, children: e(t.rgOptions) });
}
var Bh = Qd.forwardRef(function (e, o) {
  return (0, Oe.jsx)(ze, {
    className: b(Xd.DropDownControlButton, e.className),
    focusable: e.focusable,
    disabled: e.disabled,
    onClick: e.onClick,
    tabIndex: e.tabIndex,
    ref: o,
    children: (0, Oe.jsxs)("div", {
      className: T.DropDownControlButtonContents,
      children: [
        e.children,
        (0, Oe.jsx)("div", { className: b(T.Spacer, "Spacer") }),
        (0, Oe.jsx)(rn, { direction: "down" }),
      ],
    }),
  });
});
var ft = u(M());
var $d = "TW2ZQnLvgIc-";
var go = u(_()),
  YA = ft.forwardRef(function (e, o) {
    let { className: n, ...r } = e,
      i = ft.useRef(),
      a = xe(o, i),
      [s, l] = ft.useState(!1),
      c = ft.useCallback(() => {
        l((p) => !p), window.setTimeout(() => i.current?.Focus(), 1);
      }, []);
    return (0, go.jsx)(O, {
      className: n,
      onOptionsButton: c,
      onOptionsActionDescription: B(
        s ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, go.jsx)(lo, {
        autoComplete: "off",
        ref: a,
        inlineControls: (0, go.jsx)(ze, {
          className: $d,
          onPointerDown: c,
          onOKButton: c,
          children: s ? (0, go.jsx)(ll, {}) : (0, go.jsx)(cl, {}),
        }),
        ...r,
        type: s ? "text" : "password",
      }),
    });
  });
function Fh(t) {
  let e = t.split(".");
  if (e.length > 4) return !1;
  for (let o = 0; o < e.length; o++) {
    let n = e[o];
    if (n == "") {
      if (o == e.length - 1) continue;
      return !1;
    }
    if (!/^[0-9]*$/.test(n)) return !1;
    let r = parseInt(n);
    if (!(r >= 0 && r <= 255)) return !1;
  }
  return !0;
}
var XA = ft.forwardRef(function (e, o) {
  let { className: n, value: r, ...i } = e,
    a = r ?? "";
  return (0, go.jsx)(Bd, {
    autoComplete: "off",
    value: a,
    ref: o,
    placeholder: "   .   .   .   ",
    ...i,
    onChange: (l) => {
      let c = l.target.value;
      if (Fh(c)) i.onChange && i.onChange(l);
      else {
        l.target.value = a;
        return;
      }
    },
  });
});
var we = u(M());
var I = {
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
var z = u(_()),
  Oh = 10,
  Uh = 1,
  Wh = 0.01,
  Hh = 0.05,
  vx = ad(I["error-shake-duration"]);
function Zd(t, e) {
  return e < 0 ? 0 : e > 1 ? 1 : t == 0 ? e : Math.round(e / t) * t;
}
function Kd(t, e, o) {
  let n = t + o * (e - t);
  return Number.parseFloat(n.toFixed(10));
}
function Ha(t, e, o) {
  return (o - t) / (e - t);
}
var me = class extends we.Component {
  m_refSlider = we.createRef();
  m_refHandle = we.createRef();
  m_navRefSlider = we.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = Rs();
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
    return Math.abs(this.props.step ?? Uh);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      o = e > 0 ? e / this.range : Wh;
    return Math.max(o, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : Po(this.props.value, this.props.min, this.props.max);
    return Ha(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return Ha(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = Po(0, this.props.min, this.props.max);
    return Ha(this.props.min, this.props.max, e);
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
    let o = 0;
    if (e.detail.button == 11) o = -1;
    else if (e.detail.button == 12) o = 1;
    else return !1;
    e.detail.is_repeat
      ? (this.m_nRepeatCount == 0 &&
          (this.m_fInitalRepeatTime = performance.now()),
        this.m_nRepeatCount++)
      : ((this.m_nRepeatCount = 0),
        (this.m_fInitalRepeatTime = performance.now()));
    let n = performance.now() - this.m_fInitalRepeatTime,
      r = os(n, 0, 2e3, 500, 250),
      i = Math.pow(2, Math.floor(n / r)),
      a = this.normalizedDpadStep * i,
      s = Po(a, this.normalizedDpadStep, Hh) * o,
      l = Zd(this.normalizedStep, this.normalizedClampedValue + s),
      c = Kd(this.props.min, this.props.max, l);
    if (
      ((c = Po(
        c,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      c != this.props.value)
    ) {
      let p = c > this.m_fLatestUserValue;
      Ee.PlayNavSound(p ? 18 : 19),
        (this.m_fLatestUserValue = c),
        this.FireOnChange(c, 2);
    } else Ee.PlayNavSound(25);
    return !0;
  }
  FireOnChange(e, o) {
    this.m_fLatestOnChangeValue != e &&
      ((this.m_fLatestOnChangeValue = e),
      this.props.onChange && this.props.onChange(e, o));
  }
  ComputeNormalizedValueForMousePosition(e) {
    if (this.m_sliderBounds == null) return 0;
    let o = e / this.m_fZoom,
      n = this.m_sliderBounds.right - this.m_sliderBounds.left,
      r =
        this.m_handleBounds == null
          ? 0
          : this.m_handleBounds.right - this.m_handleBounds.left,
      i = n - r;
    return (o - this.m_sliderBounds.left - r / 2) / i;
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
    let o = this.ComputeNormalizedValueForMousePosition(e),
      n = Zd(this.normalizedStep, o),
      r = Kd(this.props.min, this.props.max, n),
      i = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((r = Po(r, i, a)), r != this.props.value)) {
      let s = r > this.props.value,
        l = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !l) && Ee.PlayNavSound(s ? 18 : 19),
        this.m_eDragMode == 1 || this.m_eDragMode == 3)
      ) {
        let p = !1;
        if (
          (r == i || r == a) &&
          this.m_fLatestUserValue > i &&
          this.m_fLatestUserValue < a &&
          !p
        )
          this.PlayHaptic(5), (p = !0);
        else if (
          !this.BShouldTriggerHapticOnSnap() &&
          this.m_fLatestUserValue >= i &&
          this.m_fLatestUserValue <= a
        ) {
          let g = Math.floor(((this.m_fLatestUserValue - i) / (a - i)) * 40),
            h = Math.floor(((r - i) / (a - i)) * 40);
          g != h && !p && (this.PlayHaptic(4), (p = !0));
        }
        !l && !p && (this.PlayHaptic(3), (p = !0));
      }
      (this.m_fLatestUserValue = r),
        this.FireOnChange(r, this.SliderChangeSource);
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
    let o = this.ComputeNormalizedValueForMousePosition(e.touches[0].clientX);
    o < 0 ||
      o > 1 ||
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
          let o = { x: e.touches[0].clientX, y: e.touches[0].clientY };
          if (Ss(this.m_vTouchStartPosition, o) >= Oh) {
            let r = Ps(this.m_vTouchStartPosition, o);
            Math.abs(r.x) > Math.abs(r.y)
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
    let o = this.step == 0;
    if (this.m_fLatestUserValue != this.m_fStartValue && o && e) {
      let r = this.m_fLatestUserValue > this.m_fStartValue;
      Ee.PlayNavSound(r ? 18 : 19);
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
    this.m_fZoom = fs(this.m_refSlider.current);
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
      Ee.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let o = (0, z.jsx)(on, {
        children: (0, z.jsx)(yo, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: B("#ResetToDefault"),
        }),
      });
      nn(o, e);
    }
  }
  render() {
    let e = this.props.showBookendLabels ?? !1,
      o = this.props.notchTicksVisible ?? !e,
      n = e ? 2 : this.props.notchCount,
      r = [
        { notchIndex: 0, label: `${this.props.min}` },
        { notchIndex: 1, label: `${this.props.max}` },
      ],
      i = e ? r : this.props.notchLabels,
      a = this.props.focusable ?? !0,
      s = this.normalizedDefaultValue,
      l = this.normalizedSliderOrigin,
      c = s != null,
      p = this.props.resetValueAppearance ?? "top-caret",
      d = p == "top-caret",
      g = !d,
      h = {};
    this.CanResetToDefault && (h[3] = B("#ResetToDefault"));
    let w = `${I.SliderHandle} SliderHandle`,
      k = `${I.SliderHandleContainer} SliderHandleContainer `;
    return (
      this.props.handleType == "verticalline"
        ? ((w = `${I.VerticalLineSliderHandle} SliderHandle`),
          (k = `${I.VerticalLineSliderHandleContainer} SliderHandleContainer `))
        : (this.props.handleType == "leftparen" ||
            this.props.handleType == "rightparen") &&
          ((w = b(
            I.ParenSliderHandle,
            this.props.handleType == "leftparen" ? I.Left : I.Right,
            "SliderHandle",
          )),
          (k = b(
            I.ParenSliderHandleContainer,
            this.props.handleType == "leftparen" ? I.Left : I.Right,
            "SliderHandleContainer",
          ))),
      (0, z.jsx)(hl, {
        noFocusRing: !0,
        className: b(
          I.SliderControlPanelGroup,
          "SliderControlPanelGroup",
          this.props.className,
        ),
        navRef: this.props.navRef,
        onMouseDown: (L) => this.OnMouseDown(L.nativeEvent),
        onTouchStart: (L) => this.OnTouchStart(L.nativeEvent),
        onOKActionDescription: this.props.disabled
          ? null
          : B("#Slider_AdjustSlider"),
        focusable: a,
        childFocusDisabled: this.props.disabled || !a,
        onContextMenu: this.OnContextMenu,
        onOKButton: this.props.disabled ? () => Ee.PlayNavSound(25) : void 0,
        onSecondaryButton: this.CanResetToDefault
          ? this.ResetToDefault
          : void 0,
        onSecondaryActionDescription: this.CanResetToDefault
          ? B("#ResetToDefault")
          : void 0,
        actionDescriptionMap: h,
        children: (0, z.jsxs)(vt, {
          className: b(
            I.SliderControlAndNotches,
            this.props.disabled && I.Disabled,
            c && I.WithDefaultValue,
            c && g && I.DefaultValueIsColorRange,
            c && g && p.side == "left" && I.DefaultValueColorLeft,
            c && g && p.side != "left" && I.DefaultValueColorRight,
          ),
          focusable: this.isKeyNavTarget,
          noFocusRing: !0,
          onFocus: this.OnInnerSliderFocus,
          onBlur: this.OnInnerSliderBlur,
          style: {
            "--normalized-slider-value": this.normalizedClampedValue,
            "--normalized-slider-default-value": s,
            "--normalized-slider-origin": l,
            "--default-value-track-color": g ? p.trackForegroundColor : void 0,
            "--slider-extra-notch-padding":
              this.props.extraNotchPadding ?? "0px",
          },
          ref: Gn(this.m_refSlider, this.props.innerRef),
          navRef: this.m_navRefSlider,
          onGamepadDirection: this.OnGamepadDirection,
          onOKButton: this.BlurInnerSlider,
          onOKActionDescription: null,
          onCancelButton: this.BlurInnerSlider,
          onCancelActionDescription: B("#ActionButtonLabelDone"),
          children: [
            (0, z.jsxs)("div", {
              className: b(I.SliderControl, "SliderControl"),
              children: [
                (0, z.jsx)("div", {
                  className: b(
                    I.SliderTrack,
                    this.props.notchCount != null && o && I.SliderHasNotches,
                    { [I.SliderTrackDark]: this.props.trackTone === "dark" },
                    "SliderTrack",
                  ),
                }),
                c &&
                  d &&
                  (0, z.jsx)("div", {
                    className: I.DefaultValueTickContainer,
                    children: (0, z.jsx)("div", {
                      className: I.DefaultValueTick,
                      children: (0, z.jsx)(rn, { direction: "down" }),
                    }),
                  }),
                this.validRange &&
                  this.props.value != null &&
                  !isNaN(this.props.value) &&
                  this.showHandle &&
                  (0, z.jsx)("div", {
                    className: k,
                    children: (0, z.jsxs)("div", {
                      className: w,
                      ref: this.m_refHandle,
                      children: [
                        this.props.handleType == "leftparen" &&
                          (0, z.jsx)(ul, {}),
                        this.props.handleType == "rightparen" &&
                          (0, z.jsx)(pl, {}),
                      ],
                    }),
                  }),
              ],
            }),
            (0, z.jsx)(Gh, {
              notchCount: n,
              notchLabels: i,
              sliderValue: this.normalizedClampedValue,
              notchTicksVisible: o,
              renderNotch: this.props.renderNotch,
            }),
          ],
        }),
      })
    );
  }
};
m([f], me.prototype, "RecomputeSliderBounds", 1),
  m([f], me.prototype, "SetDragMode", 1),
  m([f], me.prototype, "OnGamepadDirection", 1),
  m([f], me.prototype, "UpdateSliderValueForPosition", 1),
  m([f], me.prototype, "OnWindowMouseMove", 1),
  m([f], me.prototype, "OnWindowMouseUp", 1),
  m([f], me.prototype, "OnMouseDown", 1),
  m([f], me.prototype, "OnTouchStart", 1),
  m([f], me.prototype, "OnWindowTouchMove", 1),
  m([f], me.prototype, "OnWindowTouchEnd", 1),
  m([f], me.prototype, "Complete", 1),
  m([f], me.prototype, "BlurInnerSlider", 1),
  m([f], me.prototype, "OnInnerSliderFocus", 1),
  m([f], me.prototype, "OnInnerSliderBlur", 1),
  m([f], me.prototype, "ResetToDefault", 1),
  m([f], me.prototype, "OnContextMenu", 1);
function Gh(t) {
  let {
      sliderValue: e,
      notchCount: o,
      notchLabels: n,
      notchTicksVisible: r,
      renderNotch: i,
    } = t,
    a = n ?? [];
  if (!o) return null;
  let s = !1,
    l = [];
  for (let c = 0; c < o; ++c) {
    let p = a.find((d) => d.notchIndex == c);
    p && (s = !0),
      l.push(
        (0, z.jsx)(
          Vh,
          {
            notchIndex: c,
            sliderValue: e,
            notchLabel: p,
            notchCount: o,
            notchTicksVisible: r,
            renderNotch: i,
          },
          c,
        ),
      );
  }
  return (0, z.jsx)(O, { className: b(I.SliderNotchContainer), children: l });
}
function Vh(t) {
  let e = t.notchIndex <= (t.notchCount - 1) * t.sliderValue,
    o = t.notchCount <= 3 && !t.notchTicksVisible,
    n = o && t.notchIndex == 0,
    r = o && t.notchIndex == t.notchCount - 1,
    i = { ...t, alignLeftEnd: n, alignRightEnd: r, active: e };
  return (0, z.jsx)("div", {
    className: b(I.SliderNotch, o && I.AlignToEnds),
    children: t.renderNotch ? t.renderNotch(i) : (0, z.jsx)(zh, { ...i }),
  });
}
function zh(t) {
  let { alignLeftEnd: e, alignRightEnd: o, active: n } = t;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      t.notchTicksVisible &&
        (0, z.jsx)("div", {
          className: b(I.SliderNotchTick, n && I.TickActive),
        }),
      t.notchLabel &&
        (0, z.jsx)("div", {
          className: b(
            I.SliderNotchLabel,
            e && I.AlignToLeft,
            o && I.AlignToRight,
          ),
          children: t.notchLabel?.label,
        }),
    ],
  });
}
var Cx = we.forwardRef(function (e, o) {
  let {
    label: n,
    labelIndex: r,
    xOffset: i,
    onResize: a,
    OnMouseDown: s,
    OnTouchStart: l,
  } = e;
  we.useEffect(() => {
    a(r);
  }, [a, r]);
  let c = we.useCallback(
      (g) => {
        a(r);
      },
      [a, r],
    ),
    p = ol(c),
    d = xe(p, o);
  return (0, z.jsx)("div", {
    className: I.CompoundSliderSubSliderLabel,
    ref: d,
    onMouseDown: s,
    onTouchStart: l,
    style: { transform: `translateX(${i}px)` },
    children: (0, z.jsx)("div", {
      className: I.CompoundSliderSubSliderLabelInternal,
      children: n,
    }),
  });
});
var em = u(M());
var fo = u(_()),
  Yd = em.forwardRef(function (e, o) {
    let {
        value: n,
        onChange: r,
        disabled: i,
        className: a,
        focusable: s,
        children: l,
        navRef: c,
      } = e,
      p = () => {
        if (!i && r) {
          let d = !n;
          r(d), Ee.PlayNavSound(d ? 16 : 17);
        }
      };
    return (0, fo.jsxs)(vt, {
      noFocusRing: !0,
      className: b(a, T.Toggle, { [T.Disabled]: !!i, [T.On]: !!n }),
      onClick: p,
      ref: o,
      navRef: c,
      focusable: s,
      children: [
        (0, fo.jsx)("div", { className: T.ToggleRail }),
        (0, fo.jsx)("div", { className: T.ToggleSwitch }),
        l,
      ],
    });
  }),
  Ur = class extends Yt {
    OnToggleChange(e) {
      !this.props.disabled && e !== this.checked && this.Toggle();
    }
    render() {
      let e = !!this.props.disabled,
        { actionDescriptions: o, gamepadEvents: n } = xs(this.props);
      return (0, fo.jsx)(Go, {
        className: this.props.className,
        disabled: e,
        label: this.props.label,
        icon: this.props.icon,
        description: this.props.description,
        explainer: this.props.explainer,
        explainerTitle: this.props.explainerTitle,
        padding: this.props.padding,
        bottomSeparator: this.props.bottomSeparator,
        highlightOnFocus: this.props.highlightOnFocus,
        inlineWrap: "keep-inline",
        onContextMenu: this.props.onContextMenu,
        actionDescriptionMap: o,
        onClick: this.props.onClick,
        indentLevel: this.props.indentLevel,
        ...n,
        children: (0, fo.jsx)(Yd, {
          onChange: this.OnToggleChange,
          value: this.checked,
          disabled: e,
          navRef: this.props.navRef,
        }),
      });
    }
  };
m([f], Ur.prototype, "OnToggleChange", 1);
var Ga = u(_());
function Wa(t) {
  let { children: e, bCenterVertically: o, refElem: n, ...r } = t,
    i = b(
      T.GamepadDialogContent,
      "DialogContent _DialogLayout",
      t.className,
      o && " _DialogCenterVertically",
    ),
    { ref: a, navRef: s } = fl(),
    l = xe(n, a);
  return (0, Ga.jsx)(O, {
    ...r,
    className: i,
    ref: l,
    navRef: s,
    children: (0, Ga.jsx)(O, {
      className: b(
        T.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
var Nn = u(M());
var Yo = u(_());
function tm() {
  return Nn.useMemo(() => jh(), []);
}
function jh() {
  return function (e) {
    let {
        refNavTree: o,
        className: n,
        active: r,
        children: i,
        modalKey: a,
      } = e,
      s = Nn.useRef(null);
    Bs(s, r, !0);
    let l = xe(s, o);
    return (0, Yo.jsx)(ks, {
      className: n,
      navTreeRef: l,
      modal: !0,
      enabled: r,
      navID: `ModalDialogOverlay_${a}`,
      children: i,
    });
  };
}
function qh(t) {
  let {
      className: e,
      onEscKeypress: o,
      padding: n = "standard",
      bGamepadUIScrollWithin: r,
      children: i,
    } = t,
    a = b(
      T.ModalPosition,
      n == "standard" && T.WithStandardPadding,
      r && T.ScrollWithin,
      e,
    );
  return (0, Yo.jsx)(O, {
    className: a,
    onCancelButton: o,
    focusableIfNoChildren: !0,
    children: (0, Yo.jsx)(Xn, { children: (0, Yo.jsx)(ge, { children: i }) }),
  });
}
function om(t) {
  let e = Nn.useMemo(() => ({ ModalPosition: qh }), []);
  return (0, Yo.jsx)(aa.Provider, { value: e, children: t.children });
}
var Wr = u(_());
function Va(t) {
  let e = tm(),
    o = nm.useMemo(() => ({ DropDownMenu: Ua, Content: Wa }), []);
  return (0, Wr.jsx)(Wo.Provider, {
    value: o,
    children: (0, Wr.jsx)(om, {
      children: (0, Wr.jsx)(Oo, {
        ...t,
        bUseDialogElement: !1,
        DialogWrapper: e,
        ContextMenuComponent: id,
      }),
    }),
  });
}
var za = u(_());
function rm(t) {
  let e = it(),
    o = { bRenderOverlayAtRoot: !0, bUsePopups: !1, ...t };
  return e ? (0, za.jsx)(Va, { ...o }) : (0, za.jsx)(Oo, { ...o });
}
var vm = u(rt(), 1);
var im = "/RDNVLABA.png";
var am = "/QQGETVBA.png";
var sm = "/MVIQJMBA.png";
var lm = "/62SHH2CA.png";
var cm = "Ksy4XAVZlM0-";
var um = "n2wjqqfVgC4-";
var ja = "osYYItlitxA-";
var pm = "knntvUEkLRg-";
var dm = "_1ToiOSH69g8-";
var mm = "s6DTWBl90Rc-";
var _m = "UnRkTYm5fo0-";
var gm = "ftmxCcsknb4-";
var fm = "byvXpNiaYrs-";
var hm = "y9kERlobJ88-";
var bm = "Hf0BSchKz6g-";
var y = u(_(), 1);
function Xe() {
  return (0, y.jsx)("span", {
    "aria-hidden": "true",
    className: hm,
    children: "|",
  });
}
function Cm(t) {
  return (0, y.jsx)("footer", {
    className: (0, vm.default)(cm, t.className, !Jo.logged_in && um),
    children: (0, y.jsxs)("div", {
      className: pm,
      children: [
        (0, y.jsx)("hr", {}),
        (0, y.jsxs)("div", {
          className: dm,
          children: [
            (0, y.jsx)(x, {
              className: _m,
              to: "https://www.valvesoftware.com",
              openInNewWindow: !0,
              children: (0, y.jsx)("img", {
                src: ht(lm),
                alt: "Valve Software",
              }),
            }),
            (0, y.jsxs)("div", {
              className: mm,
              children: [
                (0, y.jsx)("div", {
                  children: Re.Localize(
                    "#footer_legal_notice",
                    new Date().getFullYear(),
                  ),
                }),
                (0, y.jsxs)("div", {
                  children: [
                    Re.Localize("#footer_vat_included"),
                    "  ",
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "privacy_agreement/",
                      children: Re.Localize("#footer_privacy_policy"),
                    }),
                    (0, y.jsx)(Xe, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "legal/",
                      children: Re.Localize("#footer_legal"),
                    }),
                    (0, y.jsx)(Xe, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "subscriber_agreement/",
                      children: Re.Localize("#footer_ssa"),
                    }),
                    (0, y.jsx)(Xe, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "steam_refunds/",
                      children: Re.Localize("#footer_refunds"),
                    }),
                    (0, y.jsx)(Xe, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "account/cookiepreferences/",
                      children: Re.Localize("#footer_cookies"),
                    }),
                  ],
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className: gm,
              children: (0, y.jsx)("img", {
                src: ht(sm),
                alt: "Valve Software",
              }),
            }),
          ],
        }),
        Lo() &&
          (0, y.jsx)("div", {
            className: fm,
            children: (0, y.jsx)("button", {
              onClick: Au,
              children: W.Localize("#global_menu_view_mobile_website"),
            }),
          }),
        (0, y.jsx)("hr", {}),
        (0, y.jsxs)("div", {
          className: bm,
          children: [
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: "https://www.valvesoftware.com/about",
              children: Re.Localize("#footer_about_valve"),
            }),
            (0, y.jsx)(Xe, {}),
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: "http://www.valvesoftware.com",
              children: Re.Localize("#footer_jobs"),
            }),
            (0, y.jsx)(Xe, {}),
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: "http://www.steampowered.com/steamworks/",
              children: Re.Localize("#footer_steamworks"),
            }),
            (0, y.jsx)(Xe, {}),
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: R.PARTNER_BASE_URL + "steamdirect",
              children: Re.Localize("#footer_steam_distribution"),
            }),
            (0, y.jsx)(Xe, {}),
            (0, y.jsx)(x, {
              external: !0,
              to: R.HELP_BASE_URL + So().strISOCode + "/",
              children: Re.Localize("#footer_nav_help_support"),
            }),
            (0, y.jsx)(Xe, {}),
            R.COUNTRY === "US" &&
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(x, {
                    snr: !0,
                    external: !0,
                    to: R.STORE_BASE_URL + "hardware_recycling/",
                    children: Re.Localize("#footer_recycling"),
                  }),
                  (0, y.jsx)(Xe, {}),
                ],
              }),
            !nt(R.EREALM) &&
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(x, {
                    snr: !0,
                    external: !0,
                    to: R.STORE_BASE_URL + "digitalgiftcards/",
                    children: Re.Localize("#footer_walletcode"),
                  }),
                  (0, y.jsx)(Xe, {}),
                  (0, y.jsxs)(x, {
                    openInNewWindow: !0,
                    to: "http://www.facebook.com/Steam",
                    children: [
                      (0, y.jsx)("img", {
                        src: ht(im),
                        alt: "Facebook",
                        className: ja,
                      }),
                      " Steam",
                    ],
                  }),
                  (0, y.jsx)(Xe, {}),
                  (0, y.jsxs)(x, {
                    openInNewWindow: !0,
                    to: "http://twitter.com/steam",
                    children: [
                      (0, y.jsx)("img", {
                        src: ht(am),
                        alt: "X",
                        className: ja,
                      }),
                      " @steam",
                    ],
                  }),
                ],
              }),
          ],
        }),
        t.children,
      ],
    }),
  });
}
var tt = {
  LoadingIndicator: "YCAfbWkeMBk-",
  loadingBarAnim: "Sszr8hrC6Ks-",
  Root: "gQWgnAxVrOM-",
  StoreBody: "VuAIAiWhjcg-",
  StoreBodyContainer: "khI3dKnN9c8-",
  Scrollable: "o5zcnn2HXfA-",
  Header: "bp0Pu4TVwpI-",
  StoreContent: "GHIW6-Wf1rQ-",
  InternalOptions: "r4HLvRr97Ps-",
  Text: "_75hRa6m6-oI-",
};
var Rm = "qxuaSNtrNvE-";
var Pm = "v2uRRqcZpzM-";
var Fn = "_-4fVuiRLPho-";
var Sm = "ntJcAB2O7Fk-";
var wm = "egWCUcRU2LI-";
var Mm = "CKr-BZNYbas-";
var Qo = u(M());
var Dm = "_5de1w948geo-";
var ym = "khWjubQ0dGo-";
var Tm = "_5f3k46d-01g-";
var Bt = u(_(), 1);
function km() {
  return (0, Bt.jsxs)("form", {
    method: "GET",
    action: `${R.STORE_BASE_URL}search`,
    className: Dm,
    children: [
      (0, Bt.jsx)("input", {
        className: ym,
        name: "q",
        placeholder: St.Localize("#Menu_SearchPlaceholder"),
      }),
      (0, Bt.jsx)("button", {
        className: Tm,
        type: "submit",
        children: (0, Bt.jsx)(eb, {}),
      }),
    ],
  });
}
function eb(t) {
  return (0, Bt.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 20",
    fill: "none",
    ...t,
    children: (0, Bt.jsx)("g", {
      children: (0, Bt.jsx)("path", {
        fill: "currentColor",
        d: "M14.5382 13.1495C15.5866 11.6421 16.0327 9.7968 15.7887 7.97691C15.5447 6.15702 14.6282 4.4944 13.2197 3.31636C11.8113 2.13833 10.0128 1.53023 8.17847 1.61178C6.34411 1.69333 4.60673 2.45862 3.30835 3.75699C2.00998 5.05536 1.24469 6.79275 1.16314 8.62711C1.08159 10.4615 1.68969 12.2599 2.86772 13.6684C4.04576 15.0768 5.70838 15.9933 7.52827 16.2373C9.34816 16.4813 11.1935 16.0352 12.7009 14.9868L15.987 18.2781L16.1759 18.0891L17.6562 16.6088L17.8452 16.4198L14.5382 13.1495ZM8.5015 13.6745C7.56711 13.6745 6.65371 13.3974 5.87679 12.8783C5.09988 12.3592 4.49435 11.6213 4.13678 10.7581C3.7792 9.8948 3.68564 8.9449 3.86793 8.02846C4.05022 7.11203 4.50017 6.27023 5.16088 5.60952C5.82159 4.94881 6.66339 4.49886 7.57982 4.31657C8.49626 4.13428 9.44616 4.22784 10.3094 4.58541C11.1727 4.94299 11.9105 5.54852 12.4296 6.32543C12.9488 7.10235 13.2258 8.01575 13.2258 8.95014C13.2258 10.2031 12.7281 11.4048 11.8421 12.2907C10.9561 13.1767 9.75447 13.6745 8.5015 13.6745Z",
      }),
    }),
  });
}
var f_ = u(rt());
var m_ = u(bt(), 1);
var Am = "_8jYEPRQ-5m4-";
var xm = "DkDkgW5s5IY-";
var Em = "_7xtK0r5UTx8-";
var Lm = "_98YR25-xVdk-";
var Bm = "jXApoIO8dJY-";
var Im = "auILN5pfzL4-";
var Nm = "y-9ESlli0eo-";
var Fm = "cxcmftFqzcI-";
var Om = "QNZ0SISqT4A-";
var qa = "T1kJZm1B9Dg-";
var Um = "_8pjzPcuVTaA-";
var Wm = "_4sgfooX5sIY-";
var Hm = "fZm0hzbW-hI-";
var Xo = u(M(), 1);
var l_ = u(rt(), 1);
var Gm = "Xt4BdOiy1FU-";
var Vm = "yngW2pJBTpk-";
var zm = "RjWLjI4Nl8k-";
var jm = "izdllajEUaU-";
var qm = "cQg1Li41uAM-";
var Ym = "vWR3MFqTiyA-";
var bo = u(_(), 1);
function Xm(t) {
  return (0, bo.jsx)("div", { className: Gm, children: t.children });
}
function Qm(t) {
  return (0, bo.jsx)("div", {
    role: "heading",
    "aria-level": 2,
    className: Vm,
    children: t.children,
  });
}
function Jm(t) {
  return (0, bo.jsx)(O, {
    "flow-children": "row",
    className: zm,
    children: t.children,
  });
}
function $m(t) {
  return (0, bo.jsx)("div", { className: jm, children: t.children });
}
function Zm(t) {
  return (0, bo.jsx)(O, {
    "flow-children": "column",
    className: qm,
    children: t.children,
  });
}
function ho(t) {
  return (0, bo.jsx)("a", {
    href: t.href,
    className: Ym,
    children: t.children,
  });
}
var Km = "AcamE8XjlRc-";
var e_ = "R36Rw1h-qoE-";
var t_ = "SKGIeivRLBQ-";
var o_ = "_3F97bh9lwUk-";
var n_ = "fvfKoqTIR1A-";
var r_ = "nMUDkkNnT1Y-";
var i_ = "LPVi2CukTHc-";
var a_ = "NJjZeQN1Jg0-";
var Y = u(_(), 1);
function s_() {
  return (0, Y.jsxs)(Xm, {
    children: [
      (0, Y.jsx)(Qm, { children: G("#Menu_Section_Recommendations") }),
      (0, Y.jsxs)(Jm, {
        children: [
          (0, Y.jsx)($m, { children: (0, Y.jsx)(ab, {}) }),
          (0, Y.jsx)(ib, {}),
        ],
      }),
    ],
  });
}
function ib() {
  return (0, Y.jsxs)(Zm, {
    children: [
      (0, Y.jsx)(ho, {
        href: `${J.STORE_BASE_URL}explore/next/3`,
        children: G("#Menu_Section_Recommendations_NewReleasesQueue"),
      }),
      (0, Y.jsx)(ho, {
        href: `${J.STORE_BASE_URL}communityrecommendations/`,
        children: G("#Menu_Section_Recommendations_CommunityRecommendations"),
      }),
      (0, Y.jsx)(ho, {
        href: `${J.STORE_BASE_URL}recommender/`,
        children: G("#Menu_Section_Recommendations_InteractiveRecommender"),
      }),
      (0, Y.jsx)(ho, {
        href: `${J.STORE_BASE_URL}recommended/friendactivity/`,
        children: G("#Menu_Section_Recommendations_PopularAmongFriends"),
      }),
      (0, Y.jsx)(ho, {
        href: `${J.STORE_BASE_URL}curators/`,
        children: G("#Menu_Section_Recommendations_SteamCurators"),
      }),
      (0, Y.jsx)(ho, {
        href: `${J.STORE_BASE_URL}dlcforyou/`,
        children: G("#Menu_Section_Recommendations_DLCForYou"),
      }),
    ],
  });
}
function ab() {
  return (0, Y.jsxs)("div", {
    className: Km,
    children: [
      (0, Y.jsx)("div", {
        className: e_,
        children: (0, Y.jsx)("div", { className: t_ }),
      }),
      (0, Y.jsxs)("div", {
        className: o_,
        children: [
          (0, Y.jsx)("div", {
            className: n_,
            children: G("#Menu_Section_Recommendations_DiscoveryQueue_Title"),
          }),
          (0, Y.jsx)("div", {
            className: r_,
            children: G(
              "#Menu_Section_Recommendations_DiscoveryQueue_Description",
            ),
          }),
          (0, Y.jsxs)("a", {
            className: i_,
            href: `${J.STORE_BASE_URL}explore/next/0`,
            children: [
              (0, Y.jsx)("span", {
                className: a_,
                children: G(
                  "#Menu_Section_Recommendations_DiscoveryQueue_ActionButton",
                ),
              }),
              (0, Y.jsx)(sb, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function sb() {
  return (0, Y.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 16",
    fill: "none",
    children: (0, Y.jsx)("path", {
      fill: "currentColor",
      d: "M11.0941 6.30047L7.19722 2.40354L9.60075 -3.86836e-07L17.6008 8L9.60075 16L7.19722 13.5965L11.0941 9.69958L0.750976 9.69958L0.750976 6.30047L11.0941 6.30047Z",
    }),
  });
}
var be = u(_(), 1);
function c_() {
  let [t, e] = Xo.useState("today"),
    o = Xo.useMemo(
      () => [
        ["today", G("#Menu_Popover_Today")],
        ["recommendations", G("#Menu_Popover_Recommendations")],
        ["categories", G("#Menu_Popover_Categories")],
        ["hardware", G("#Menu_Popover_Hardware")],
        ["waystoplay", G("#Menu_Popover_WaysToPlay")],
        ["specialsections", G("#Menu_Popover_SpecialSections")],
      ],
      [],
    );
  return (0, be.jsxs)("div", {
    className: Fm,
    children: [
      (0, be.jsxs)("div", {
        className: Om,
        children: [
          o.map(([n, r]) =>
            (0, be.jsx)(
              cb,
              { active: t == n, setSection: e, section: n, children: r },
              n,
            ),
          ),
          (0, be.jsx)(Es, {
            className: qa,
            href: J.STORE_BASE_URL,
            children: G("#Menu_Popover_ViewAll"),
          }),
        ],
      }),
      (0, be.jsx)(lb, { section: t }),
    ],
  });
}
function lb(t) {
  let { section: e } = t;
  switch (e) {
    case "today":
      return "TODAY ON STEAM";
    case "recommendations":
      return (0, be.jsx)(s_, {});
    case "categories":
      return "CATEGORIES";
    case "hardware":
      return "HARDWARE";
    case "waystoplay":
      return "WAYS TO PLAY";
    case "specialsections":
      return "SPECIAL SECTIONS";
    default:
      return rs(e, `Unknown section ${e}`), null;
  }
}
function cb(t) {
  let { setSection: e, active: o, section: n, children: r } = t,
    i = Xo.useCallback(() => e(n), [e, n]);
  return (0, be.jsxs)(Ut, {
    className: (0, l_.default)(qa, o && Hm),
    onClick: i,
    onMouseEnter: i,
    children: [r, " ", (0, be.jsx)(ub, {})],
  });
}
function ub() {
  return (0, be.jsxs)(be.Fragment, {
    children: [
      (0, be.jsx)("div", { className: Um }),
      (0, be.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 13",
        fill: "none",
        className: Wm,
        children: (0, be.jsx)("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.36084 6.68974L3.66211 3.99101L4.84062 2.8125L8.71786 6.68974L4.84062 10.567L3.66211 9.38847L6.36084 6.68974Z",
        }),
      }),
    ],
  });
}
var It = u(M()),
  u_ = u(bt()),
  d_ = u(_());
function p_(t) {
  let {
      visible: e = !0,
      className: o,
      keepMounted: n = !1,
      expandDirection: r = "height",
      msAnimationDuration: i = 250,
      children: a,
    } = t,
    { style: s, active: l, refDiv: c } = pb(e, r, i);
  return !e && !l && !n
    ? null
    : (0, d_.jsx)("div", { className: o, ref: c, style: s, children: a });
}
function pb(t, e = "height", o = 250) {
  let n = It.useRef(null),
    r = It.useRef(!0),
    [i, a] = It.useState("idle"),
    [s, l] = It.useState({});
  return (
    It.useLayoutEffect(() => {
      r.current ? (r.current = !1) : a("start");
    }, [t]),
    It.useLayoutEffect(() => {
      let p = n.current,
        d = e == "height" ? "scrollHeight" : "scrollWidth",
        g = () => {
          u_.unstable_batchedUpdates(() => {
            l({}), a("idle");
          });
        };
      if (i == "start") {
        let h = p[d];
        h == 0
          ? g()
          : (l((w) => ({
              [e]: t ? "0px" : `${h}px`,
              ...w,
              overflow: "hidden",
            })),
            a("active"));
      } else if (i == "active") {
        p.scrollTop;
        let h = p[d];
        return (
          l({ overflow: "hidden", [e]: t ? `${h}px` : "0px" }),
          p.addEventListener("transitionend", g),
          () => {
            p.removeEventListener("transitionend", g);
          }
        );
      }
    }, [i, t]),
    {
      style: { ...s, transition: `${e} ${o}ms` },
      active: i != "idle",
      refDiv: n,
    }
  );
}
var __ = u(rt(), 1),
  ae = u(_(), 1);
function g_(t) {
  let { visible: e, refPage: o, closePopover: n } = t;
  return (0, ae.jsxs)(ae.Fragment, {
    children: [
      (0, ae.jsx)(p_, {
        visible: e,
        className: Am,
        msAnimationDuration: 100,
        children: (0, ae.jsx)("div", {
          className: xm,
          children: (0, ae.jsxs)("div", {
            className: Em,
            children: [(0, ae.jsx)(mb, {}), (0, ae.jsx)(c_, {})],
          }),
        }),
      }),
      (0, ae.jsx)(db, { active: e, refPage: o, closePopover: n }),
    ],
  });
}
function db(t) {
  let { active: e, refPage: o, closePopover: n } = t;
  return m_.createPortal(
    (0, ae.jsx)("div", { className: (0, __.default)(Lm, e && Bm), onClick: n }),
    o.current,
  );
}
function mb() {
  return (0, ae.jsxs)("div", {
    className: Im,
    children: [
      (0, ae.jsx)(vo, {
        href: R.STORE_BASE_URL,
        children: G("#Menu_Popover_StoreHome"),
      }),
      (0, ae.jsx)(vo, {
        href: `${R.STORE_BASE_URL}genre/Free%20to%20Play/`,
        children: G("#Menu_Popover_FreeToPlay"),
      }),
      (0, ae.jsx)(vo, {
        href: `${R.STORE_BASE_URL}charts/`,
        children: G("#Menu_Popover_SteamCharts"),
      }),
      (0, ae.jsx)(vo, {
        href: `${R.STORE_BASE_URL}points/`,
        children: G("#Menu_Popover_PointsShop"),
      }),
      (0, ae.jsx)(vo, {
        href: `${R.STORE_BASE_URL}digitalgiftcards/`,
        children: G("#Menu_Popover_GiftCards"),
      }),
      (0, ae.jsx)(vo, {
        href: `${R.STORE_BASE_URL}news/`,
        children: G("#Menu_Popover_NewsAndUpdates"),
      }),
      (0, ae.jsx)(vo, {
        href: `${R.STORE_BASE_URL}account/preferences/`,
        children: G("#Menu_Popover_Preferences"),
      }),
    ],
  });
}
function vo(t) {
  let { href: e, children: o } = t;
  return (0, ae.jsx)("a", { href: e, className: Nm, children: o });
}
var h_ = u(M());
var A = u(_()),
  b_ = Qo.memo(function (e) {
    let { refPage: o } = e;
    return (0, A.jsx)("div", {
      className: Rm,
      children: (0, A.jsx)(_b, { refPage: o }),
    });
  });
function _b(t) {
  let { refPage: e } = t,
    o = Qo.useRef(null),
    [n, r, i] = ms();
  return (
    (0, h_.useEffect)(() => {
      let a = o.current,
        s = e.current;
      return (
        s.style.setProperty(
          "--store-menu-floating-height",
          `${a.clientHeight}px`,
        ),
        () => {
          s?.style.removeProperty("--store-menu-floating-height");
        }
      );
    }, [e]),
    (0, A.jsxs)(A.Fragment, {
      children: [
        (0, A.jsxs)("div", {
          className: Pm,
          ref: o,
          children: [
            (0, A.jsx)(gb, { onClick: n ? i : r }),
            (0, A.jsx)(Hr, {}),
            (0, A.jsx)(Ya, {
              strURL: `${R.STORE_BASE_URL}charts/topselling/`,
              children: St.Localize("#Menu_TopSellers"),
            }),
            (0, A.jsx)(Hr, {}),
            (0, A.jsx)(Ya, {
              strURL: `${R.STORE_BASE_URL}explore/new/`,
              children: St.Localize("#Menu_NewReleases"),
            }),
            (0, A.jsx)(Hr, {}),
            (0, A.jsx)(Ya, {
              strURL: `${R.STORE_BASE_URL}specials/`,
              children: St.Localize("#Menu_OnSale"),
            }),
            (0, A.jsx)(km, {}),
            (0, A.jsx)(fb, {}),
            (0, A.jsx)(Hr, {}),
            (0, A.jsx)(hb, {}),
          ],
        }),
        (0, A.jsx)(g_, { visible: n, refPage: t.refPage, closePopover: i }),
      ],
    })
  );
}
function Hr() {
  return (0, A.jsx)("div", { className: Mm });
}
function gb(t) {
  let { onClick: e } = t;
  return (0, A.jsx)(A.Fragment, {
    children: (0, A.jsxs)(Ut, {
      className: Fn,
      onClick: e,
      children: [(0, A.jsx)(bb, {}), " ", St.Localize("#Menu_OpenFlyout")],
    }),
  });
}
function Ya(t) {
  let { strURL: e, children: o } = t;
  return (0, A.jsx)("a", {
    className: (0, f_.default)(Fn, wm),
    href: e,
    children: o,
  });
}
function fb() {
  return (0, A.jsxs)("a", {
    className: Fn,
    href: `${R.STORE_BASE_URL}wishlist/`,
    children: [
      (0, A.jsx)(vb, {}),
      St.Localize("#Menu_Wishlist"),
      " ",
      (0, A.jsx)(v_, { children: "5" }),
    ],
  });
}
function v_(t) {
  return (0, A.jsx)("span", { className: Sm, children: t.children });
}
function hb() {
  return (0, A.jsxs)("a", {
    className: Fn,
    href: `${R.STORE_BASE_URL}cart/`,
    children: [
      (0, A.jsx)(Cb, {}),
      St.Localize("#Menu_Cart"),
      " ",
      (0, A.jsx)(v_, { children: "2" }),
    ],
  });
}
function bb(t) {
  return (0, A.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 12",
    fill: "none",
    ...t,
    children: (0, A.jsxs)("g", {
      children: [
        (0, A.jsx)("rect", {
          fill: "currentColor",
          x: "0.458984",
          width: "13.9393",
          height: "2.23028",
        }),
        (0, A.jsx)("rect", {
          fill: "currentColor",
          x: "0.458984",
          y: "4.46094",
          width: "13.9393",
          height: "2.23028",
        }),
        (0, A.jsx)("rect", {
          fill: "currentColor",
          x: "0.458984",
          y: "8.92188",
          width: "13.9393",
          height: "2.23028",
        }),
      ],
    }),
  });
}
function vb(t) {
  return (0, A.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 18",
    fill: "none",
    ...t,
    children: [
      (0, A.jsx)("path", {
        fill: "currentColor",
        d: "M7.35571 4.84717L8.571 8.61455C8.72291 9.13104 9.14826 9.52601 9.66475 9.7083L13.4321 10.9236L9.66475 12.1389C9.14826 12.2908 8.75329 12.7161 8.571 13.2326L7.35571 17L6.14043 13.2326C5.98852 12.7161 5.56317 12.3212 5.04667 12.1389L1.2793 10.9236L5.04667 9.7083C5.56317 9.55639 5.95814 9.13104 6.14043 8.61455L7.35571 4.84717Z",
      }),
      (0, A.jsx)("path", {
        fill: "currentColor",
        d: "M11.2353 2.90283L11.7737 4.58905C11.8455 4.82476 12.025 5.00607 12.2584 5.0786L13.9276 5.62254L12.2584 6.16648C12.025 6.239 11.8455 6.42032 11.7737 6.65602L11.2353 8.34224L10.6968 6.65602C10.625 6.42032 10.4455 6.239 10.2122 6.16648L8.54297 5.62254L10.2122 5.0786C10.4455 5.00607 10.625 4.82476 10.6968 4.58905L11.2353 2.90283Z",
      }),
      (0, A.jsx)("path", {
        fill: "currentColor",
        d: "M4.44381 3.29138L4.71304 4.14356C4.74894 4.25234 4.83868 4.343 4.94637 4.37926L5.78996 4.65123L4.94637 4.9232C4.83868 4.95947 4.74894 5.05012 4.71304 5.15891L4.44381 6.01109L4.17458 5.15891C4.13868 5.05012 4.04894 4.95947 3.94125 4.9232L3.09766 4.65123L3.94125 4.37926C4.04894 4.343 4.13868 4.25234 4.17458 4.14356L4.44381 3.29138Z",
      }),
      (0, A.jsx)("path", {
        fill: "currentColor",
        d: "M13.7797 6.79138L14.049 7.64356C14.0849 7.75234 14.1746 7.843 14.2823 7.87926L15.1259 8.15123L14.2823 8.4232C14.1746 8.45947 14.0849 8.55012 14.049 8.65891L13.7797 9.51108L13.5105 8.65891C13.4746 8.55012 13.3849 8.45947 13.2772 8.4232L12.4336 8.15123L13.2772 7.87926C13.3849 7.843 13.4746 7.75234 13.5105 7.64356L13.7797 6.79138Z",
      }),
    ],
  });
}
function Cb(t) {
  return (0, A.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 16",
    fill: "none",
    ...t,
    children: (0, A.jsx)("path", {
      fill: "currentColor",
      d: "M14.0132 4.85417L12.5465 10.1708C12.4763 10.4387 12.3192 10.6758 12.0997 10.8447C11.8803 11.0136 11.6109 11.1049 11.334 11.1042H6.14648C5.87656 11.1044 5.61379 11.0173 5.39749 10.8558C5.18119 10.6944 5.02296 10.4672 4.94648 10.2083L3.15065 4.85417H0.833984V3.1875H3.45065C3.71251 3.18799 3.9676 3.2707 4.17992 3.42396C4.39224 3.57722 4.55106 3.79329 4.63398 4.04167L4.90898 4.875L14.0132 4.85417ZM6.25065 12.7708C6.04463 12.7708 5.84323 12.8319 5.67193 12.9464C5.50063 13.0608 5.36712 13.2235 5.28828 13.4139C5.20944 13.6042 5.18881 13.8137 5.229 14.0157C5.26919 14.2178 5.3684 14.4034 5.51408 14.5491C5.65976 14.6947 5.84537 14.794 6.04743 14.8342C6.2495 14.8743 6.45894 14.8537 6.64928 14.7749C6.83962 14.696 7.00231 14.5625 7.11677 14.3912C7.23123 14.2199 7.29232 14.0185 7.29232 13.8125C7.29232 13.5362 7.18257 13.2713 6.98722 13.0759C6.79187 12.8806 6.52692 12.7708 6.25065 12.7708ZM11.2507 12.7708C11.0446 12.7708 10.8432 12.8319 10.6719 12.9464C10.5006 13.0608 10.3671 13.2235 10.2883 13.4139C10.2094 13.6042 10.1888 13.8137 10.229 14.0157C10.2692 14.2178 10.3684 14.4034 10.5141 14.5491C10.6598 14.6947 10.8454 14.794 11.0474 14.8342C11.2495 14.8743 11.4589 14.8537 11.6493 14.7749C11.8396 14.696 12.0023 14.5625 12.1168 14.3912C12.2312 14.2199 12.2923 14.0185 12.2923 13.8125C12.2923 13.5362 12.1826 13.2713 11.9872 13.0759C11.7919 12.8806 11.5269 12.7708 11.2507 12.7708Z",
    }),
  });
}
var C_ = u(M(), 1),
  j = u(_(), 1),
  Rb = Is({ Component: Pb });
function Pb({ children: t }) {
  let {
      strWebAPIToken: e,
      header: o,
      currentUserLinkDetails: n,
      steamid: r,
      storeBrowseContext: i,
      bShowGlobalHeader: a,
      gamepadUiTabs: s,
      bSpoofing: l,
      bVirtualizedScrolling: c,
    } = Rb.useLoaderData(),
    p = (0, C_.useRef)(null),
    d = s.length > 0;
  return (
    R.IN_GAMEPADUI && (window.bSupportsGamepadUI = !0),
    (0, j.jsx)(Sb, {
      strWebAPIToken: e,
      steamid: r,
      storeBrowseContext: i,
      children: (0, j.jsxs)("html", {
        lang: So().strISOCode,
        className: (0, Gr.default)(tt.Root, Tu()),
        children: [
          (0, j.jsx)("head", { children: (0, j.jsx)(as, {}) }),
          (0, j.jsx)("body", {
            className: (0, Gr.default)(tt.StoreBody, d && "gamepadui"),
            children: (0, j.jsx)(As, {
              navID: "StoreTemplate",
              disabledRoot: !R.IN_GAMEPADUI,
              children: (0, j.jsx)("div", {
                className: (0, Gr.default)(
                  tt.StoreBodyContainer,
                  c && tt.Scrollable,
                ),
                children: (0, j.jsx)(Xn, {
                  children: (0, j.jsxs)(rm, {
                    children: [
                      a &&
                        (0, j.jsx)(up, {
                          navContent: o.navContent,
                          globalActions: o.globalActions,
                          notifications: o.notifications,
                          userDetails: n,
                          changeLanguagePath: "/account/setlanguage/",
                          cartInResponsiveMenu: !0,
                          className: tt.Header,
                          children: (0, j.jsxs)("div", {
                            className: tt.InternalOptions,
                            children: [
                              l && (0, j.jsx)(_p, {}),
                              (0, j.jsx)(Cl, { buttonClassName: tt.Text }),
                            ],
                          }),
                        }),
                      bl() && (0, j.jsx)(b_, { refPage: p }),
                      (0, j.jsxs)("section", {
                        className: tt.StoreContent,
                        ref: p,
                        children: [
                          (0, j.jsx)("div", { className: tt.LoadingIndicator }),
                          (0, j.jsx)(Pl, { gamepadUiTabs: s }),
                          (0, j.jsx)(rc, {}),
                          (0, j.jsx)(ss, { children: t }),
                        ],
                      }),
                      !R.IN_GAMEPADUI &&
                        (0, j.jsx)(Cm, { className: tt.Footer }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        ],
      }),
    })
  );
}
function Sb(t) {
  let { strWebAPIToken: e, steamid: o, storeBrowseContext: n, children: r } = t;
  return (0, j.jsx)(Os, {
    IN_GAMEPADUI: R.IN_GAMEPADUI,
    children: (0, j.jsx)(lc, {
      children: (0, j.jsx)(vp, {
        strWebAPIToken: e,
        steamid: o,
        children: (0, j.jsx)(Rp, {
          children: (0, j.jsx)(_l, {
            context: n,
            msDelayBatch: 250,
            children: r,
          }),
        }),
      }),
    }),
  });
}
export { Rb as route };
