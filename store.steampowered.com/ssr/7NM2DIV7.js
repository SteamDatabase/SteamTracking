const CLSTAMP = 9621725;

import {
  A as ol,
  B as nl,
  C as ei,
  D as rl,
  E as il,
  F as al,
  G as ti,
  H as on,
  I as A_,
  J as nn,
  K as oi,
  N as sl,
  O as ll,
  P as cl,
  Q as ul,
  a as Ys,
  b as Ht,
  c as Kr,
  h as Qs,
  i as Mo,
  l as Js,
  m as $s,
  n as Zs,
  s as Ks,
  w as el,
  x as Qn,
  y as tn,
  z as Do,
} from "./chunk-LISO6FQD.js";
import "./chunk-7DBAJOER.js";
import { a as v, c as ge } from "./chunk-KMBAPDTU.js";
import { a as en } from "./chunk-ZRRWLBBT.js";
import "./chunk-LHCKGSPM.js";
import {
  a as vt,
  d as Is,
  i as Ct,
  u as E,
  v as Ws,
  x as Hs,
} from "./chunk-4CLFOMBV.js";
import { a as T_ } from "./chunk-52FYSNR6.js";
import { b as wo, d as dl, e as hl } from "./chunk-XAIYUPEN.js";
import "./chunk-VMNQEAPJ.js";
import {
  A as pl,
  a as Gs,
  b as Vs,
  c as Ko,
  d as Vn,
  e as zn,
  f as Rt,
  g as jn,
  h as qn,
  i as zs,
} from "./chunk-T5R5HA6V.js";
import "./chunk-TL5AGPUO.js";
import { a as ot, b as A, c as Xn, e as fl } from "./chunk-Z5PB7HON.js";
import { h as Xs } from "./chunk-OIB4W63F.js";
import "./chunk-H6BW4J65.js";
import { A as Pt, B as H, j as ml } from "./chunk-52D4XJSF.js";
import "./chunk-KHREW4X3.js";
import {
  F as js,
  G as qs,
  a as k_,
  b as P,
  c as S,
  d as K,
  e as ee,
  f as te,
  g as oe,
  h as ne,
  i as re,
  o as ss,
  r as qr,
  t as Yr,
  u as ke,
} from "./chunk-FLM2RWKS.js";
import "./chunk-Z5ZSSGNQ.js";
import { a as ht } from "./chunk-7QXB6VNI.js";
import { a as as } from "./chunk-5CQONC6K.js";
import {
  a as Yn,
  c as _l,
  d as Jn,
  e as yo,
  f as To,
  h as gl,
  k as Re,
} from "./chunk-4MJ7Y5DG.js";
import {
  A as So,
  B as Es,
  G as Ls,
  H as F,
  a as xe,
  b as vs,
  c as Ut,
  d as Cs,
  e as Rs,
  f as Ps,
  h as Xe,
  i as Zo,
  j as Ss,
  k as ws,
  l as Ms,
  n as Zr,
  o as Ds,
  p as ys,
  r as Ts,
  s as ks,
  v as As,
  x as bt,
  y as Wt,
  z as xs,
} from "./chunk-J4WWSJ5J.js";
import { a as nt } from "./chunk-VT5P5CPI.js";
import { a as tl } from "./chunk-EMD4TCMF.js";
import {
  A as $r,
  B as hs,
  C as bs,
  a as $t,
  b as Ae,
  c as Hn,
  d as ls,
  e as Xr,
  f as cs,
  g as Ft,
  h as Qr,
  i as us,
  j as Jr,
  k as Ot,
  m as ps,
  n as ds,
  p as ms,
  q as Gn,
  s as _s,
  t as gs,
  v as fs,
} from "./chunk-7CZT6RLZ.js";
import {
  a as Ns,
  b as Fs,
  c as rt,
  e as Os,
  f as Us,
} from "./chunk-D3P3S5VH.js";
import "./chunk-GAMLKW4O.js";
import "./chunk-DGIEEIOT.js";
import { a as _e } from "./chunk-DGBBVGKD.js";
import { a as Bs } from "./chunk-V5X7Y6PQ.js";
import {
  a as Un,
  c as Jo,
  g as Po,
  s as rs,
  t as is,
} from "./chunk-MYRGI4P6.js";
import "./chunk-RB7KZ3PF.js";
import { c as On } from "./chunk-MBG223ZF.js";
import {
  d as os,
  g as Wn,
  h as ns,
  i as $o,
  m as tt,
  q as h,
} from "./chunk-V6NE4MIP.js";
import {
  a as Ro,
  b as Fn,
  c as ts,
  i as Z,
  k as ft,
  l as R,
  m as Qo,
  o as g,
} from "./chunk-K34HL7TB.js";
import { a as w } from "./chunk-LTXTEHOA.js";
import { d as u, e as _, f as es } from "./chunk-GT4J6GNR.js";
function $n() {
  return location.href;
}
function bl(t) {
  return t == 1 || t == 2 || t == 13;
}
var Zn = u(w(), 1);
var ni = u(g(), 1),
  x_ = Zn.default.lazy(() => import("./metrics-Z73YJPRW.js"));
function vl(t) {
  let e = rs();
  return e.metrics
    ? (0, ni.jsx)(Zn.Suspense, {
        children: (0, ni.jsx)(x_, { metrics: e.metrics, ...t }),
      })
    : null;
}
var Cl = u(nt(), 1);
var rn = {
  HeaderContainer: "NS66-vzC3B4-",
  PillTabs: "HfUir0ARlEg-",
  PillTabItem: "_6YKIMRZJgjI-",
  Active: "cVEuwqCXKqk-",
};
var Kn = u(g(), 1);
function Rl(t) {
  let { gamepadUiTabs: e } = t;
  if (e.length === 0) return null;
  let o = $n(),
    n = [...e]
      .sort((r, i) => i.href.length - r.href.length)
      .find((r) => o.startsWith(r.href));
  return (0, Kn.jsx)("div", {
    className: rn.HeaderContainer,
    children: (0, Kn.jsx)("div", {
      className: rn.PillTabs,
      children: e.map((r) =>
        (0, Kn.jsx)(
          A,
          {
            gamepadFocusable: !0,
            noFocusRing: !0,
            className: (0, Cl.default)(
              rn.PillTabItem,
              r === n && rn.Active,
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
var er = u(w());
var Pl = "D6LHFgi1JYw-";
var Sl = "-ygkyFbonHM-";
var wl = "-ocPE8koGWA-";
var Ml = "wScBjl6G2E8-";
var ri = "J8QB0JMqyaM-";
var Dl = "-mBLWqp7JFk-";
var yl = "./cookies_brazilian-K4WP2HCA.json";
var Tl = "./cookies_bulgarian-3F25L7AA.json";
var kl = "./cookies_czech-WZ2UGHAA.json";
var Al = "./cookies_danish-UON7TKDA.json";
var xl = "./cookies_dutch-GCBILAAA.json";
var El = "./cookies_english-FDTNVUAA.json";
var Ll = "./cookies_finnish-ZUSYHYAA.json";
var Bl = "./cookies_french-NATP6HBA.json";
var Il = "./cookies_german-5QBUI7CA.json";
var Nl = "./cookies_greek-AWKYX4DA.json";
var Fl = "./cookies_hungarian-7N6TKDDA.json";
var Ol = "./cookies_indonesian-TTEY42CA.json";
var Ul = "./cookies_italian-YNFQT3DA.json";
var Wl = "./cookies_japanese-XFKOMEAA.json";
var Hl = "./cookies_koreana-OJE7BYDA.json";
var Gl = "./cookies_latam-KMOOIBBA.json";
var Vl = "./cookies_norwegian-NQ26SHAA.json";
var zl = "./cookies_polish-535OIIBA.json";
var jl = "./cookies_portuguese-UMJSLPBA.json";
var ql = "./cookies_romanian-JBZRLJBA.json";
var Yl = "./cookies_russian-KMFNLJDA.json";
var Xl = "./cookies_schinese-4CG5QJAA.json";
var Ql = "./cookies_spanish-ATUIC6DA.json";
var Jl = "./cookies_swedish-4LF6D6AA.json";
var $l = "./cookies_tchinese-4CGDFUBA.json";
var Zl = "./cookies_thai-UBSW2GCA.json";
var Kl = "./cookies_turkish-DHSZCYAA.json";
var ec = "./cookies_ukrainian-WH35XMDA.json";
var tc = "./cookies_vietnamese-VG3ISECA.json";
var O = {};
O.brazilian = yl;
O.bulgarian = Tl;
O.czech = kl;
O.danish = Al;
O.dutch = xl;
O.english = El;
O.finnish = Ll;
O.french = Bl;
O.german = Il;
O.greek = Nl;
O.hungarian = Fl;
O.indonesian = Ol;
O.italian = Ul;
O.japanese = Wl;
O.koreana = Hl;
O.latam = Gl;
O.norwegian = Vl;
O.polish = zl;
O.portuguese = jl;
O.romanian = ql;
O.russian = Yl;
O.schinese = Xl;
O.spanish = Ql;
O.swedish = Jl;
O.tchinese = $l;
O.thai = Zl;
O.turkish = Kl;
O.ukrainian = ec;
O.vietnamese = tc;
async function ii(t) {
  if (O[t]) return (await fetch(new URL(O[t], import.meta.url))).json();
}
var an = On(ii);
var Oe = u(g());
async function oc(t) {
  let e = R.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
    o = new FormData();
  o.set("bAllow", t.toString()), o.set("sessionId", Rt(Vs));
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
function lg() {
  let t = (0, er.useRef)(null);
  return (
    (0, er.useEffect)(() => {
      let e = setTimeout(() => {
        t.current?.show();
      }, 4e3);
      return () => {
        clearTimeout(e);
      };
    }, []),
    (0, Oe.jsxs)("dialog", {
      className: Pl,
      ref: t,
      children: [
        (0, Oe.jsxs)("div", {
          className: Sl,
          children: [
            (0, Oe.jsx)("div", {
              className: ri,
              children: an.Localize("#CookiePrefPopup_Title"),
            }),
            (0, Oe.jsx)("div", {
              className: ri,
              children: Un(
                an.Localize("#CookiePrefPopup_Desc"),
                (0, Oe.jsx)("a", {
                  href: R.STORE_BASE_URL + "account/cookiepreferences",
                }),
                (0, Oe.jsx)("a", {
                  href: R.STORE_BASE_URL + "privacy_agreement",
                }),
              ),
            }),
          ],
        }),
        (0, Oe.jsxs)("div", {
          className: Dl,
          children: [
            (0, Oe.jsx)("button", {
              className: wl,
              onClick: async () => {
                await oc(1), t.current?.close();
              },
              children: an.Localize("#CookiePrefPopup_AcceptAll"),
            }),
            (0, Oe.jsx)("button", {
              className: Ml,
              onClick: async () => {
                await oc(0), t.current?.close();
              },
              children: an.Localize("#CookiePrefPopup_RejectAll"),
            }),
          ],
        }),
      ],
    })
  );
}
function nc() {
  let t = zs();
  return t && t.preference_state != 4 ? null : (0, Oe.jsx)(lg, {});
}
var Ue = u(w());
var sn = "GamepadInput";
var cg = "Checkout",
  ug = "PinnedView",
  tr = class {
    PostMessage(e) {}
    RegisterForMessage(e) {}
  },
  ln = class {
    m_fnCallback = void 0;
    constructor() {
      SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
    }
    RegisterForMessage(e) {
      this.m_fnCallback = e;
    }
    PostMessage(e) {
      let o = JSON.stringify(e);
      SteamClient.BrowserView.PostMessageToParent(sn, o);
    }
    OnMessage(e, o) {
      if (e == sn) {
        let n = JSON.parse(o);
        this.m_fnCallback(n);
      } else if (e == cg) {
        let n = JSON.parse(o);
        if (n.action == "paypal_success")
          try {
            window.OnPayPalSuccess(n.transid);
          } catch {}
        else if (n.action == "paypal_cancel")
          try {
            window.OnPayPalCancel(n.transid);
          } catch {}
      } else if (e == ug) {
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
_([h], ln.prototype, "OnMessage", 1);
var cn = class {
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
    this.m_postWindow.postMessage({ gamepadMessage: sn, args: o }, "*");
  }
  OnMessage(e) {
    let o = e?.data;
    if (o && o.gamepadMessage == sn && o.args) {
      let n = JSON.parse(o.args);
      this.m_fnCallback(n);
    }
  }
};
_([h], cn.prototype, "OnMessage", 1);
var Zt = class {
  m_NavigationController;
  m_postMessage;
  m_bIsGamepadInputExternallyControlled = !1;
  constructor(e) {
    if (((this.m_NavigationController = e), pg()))
      (this.m_bIsGamepadInputExternallyControlled = !0),
        (this.m_postMessage = new ln()),
        this.m_NavigationController.UpdateDefaultSourceToGamepad();
    else {
      let o = window.top;
      o && o != window.self
        ? ((this.m_bIsGamepadInputExternallyControlled = !0),
          (this.m_postMessage = new cn(o)))
        : ((this.m_bIsGamepadInputExternallyControlled = !1),
          (this.m_postMessage = new tr()));
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
_([h], Zt.prototype, "OnFocusChanged", 1),
  _([h], Zt.prototype, "OnMessage", 1),
  _([h], Zt.prototype, "PostPageUnloading", 1);
function pg() {
  return (
    Zo("BrowserView.RegisterForMessageFromParent") &&
    Zo("BrowserView.PostMessageToParent")
  );
}
var rc = [
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
  un = class extends Ut {
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
        for (let a = 0; a < rc.length; a++) {
          let s = rc[a],
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
_([h], un.prototype, "PollGamepads", 1);
var Kt = class extends Ut {
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
    return Z.PLATFORM === "linux" && e.key.length > 1
      ? e.key || e.code
      : e.code || e.key;
  }
  BShouldSwallowEventForTextInputWorkaround(e) {
    if (
      !(
        ms(e.target) &&
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
_([h], Kt.prototype, "OnKeyDown", 1),
  _([h], Kt.prototype, "OnKeyUp", 1),
  _([h], Kt.prototype, "Reset", 1);
var St = class extends Ut {
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
_([h], St.prototype, "TranslateKey", 1),
  _([h], St.prototype, "OnMouseDown", 1),
  _([h], St.prototype, "OnMouseUp", 1),
  _([h], St.prototype, "OnMouseMove", 1),
  _([h], St.prototype, "Reset", 1);
var ko = class extends Ut {
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
_([h], ko.prototype, "OnTouchStart", 1), _([h], ko.prototype, "OnTouchEnd", 1);
var li = "VirtualKeyboardMessage";
function ac(t) {
  return t && t.type === li;
}
var wt = class {
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
    e == li && this.InternalDispatchMessage(JSON.parse(o));
  }
  OnMessage(e) {
    this.InternalDispatchMessage(e.data);
  }
  InternalDispatchMessage(e) {
    if (ac(e))
      switch (e.message) {
        case "OnEnterKeyPress":
          break;
      }
  }
  SendMessage(e) {
    let o = { type: "VirtualKeyboardMessage", ...e };
    Zo("BrowserView.PostMessageToParent")
      ? SteamClient.BrowserView.PostMessageToParent(o.type, JSON.stringify(o))
      : this.m_ownerWindow &&
        (Wn(
          this.m_ownerWindow.parent &&
            this.m_ownerWindow.parent != this.m_ownerWindow,
          "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
        ),
        this.m_ownerWindow.parent.postMessage(o, "*"));
  }
};
_([h], wt.prototype, "ShowVirtualKeyboard", 1),
  _([h], wt.prototype, "ShowModalKeyboard", 1),
  _([h], wt.prototype, "HideVirtualKeyboard", 1),
  _([h], wt.prototype, "OnBrowserViewMessage", 1),
  _([h], wt.prototype, "OnMessage", 1);
var si = class {
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
    if (e == li) {
      let r = JSON.parse(o);
      if (ac(r))
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
_([h], si.prototype, "OnMessage", 1);
var Mt = u(g());
function sc(t) {
  let [e] = Ue.useState(() => new Ss()),
    [o, n] = Ue.useState(),
    [r] = Ue.useState(() => new wt()),
    [i, a] = Ue.useState(void 0),
    s = rt();
  return (
    Ue.useEffect(() => {
      if (s && !o) {
        let p = new Zt(e);
        n(p), a(p.BIsGamepadInputExternallyControlled());
      }
    }, [s, o, e]),
    Ue.useEffect(() => {
      if (s) return r.Init(window);
    }, [s, r]),
    (0, Mt.jsxs)(Ms, {
      controller: e,
      children: [
        i === !1 && s === !0 && (0, Mt.jsx)(mg, {}),
        (i === !0 || s === !0) && (0, Mt.jsx)(_g, {}),
        s && (0, Mt.jsx)(gg, {}),
        (0, Mt.jsxs)(Ds, {
          ownerWindow: window,
          children: [
            o && (0, Mt.jsx)(dg, { bridge: o }),
            (0, Mt.jsx)(ws, { factory: r, children: t.children }),
          ],
        }),
      ],
    })
  );
}
function dg(t) {
  let { bridge: e } = t,
    o = ys();
  return (
    Ue.useEffect(() => {
      if (!(!o || !e)) return e.RegisterForFocusChanged(o);
    }, [o, e]),
    null
  );
}
function mg() {
  let [t] = Ue.useState(() => new un());
  return Zr(t), null;
}
function ci(t) {
  let [e, o] = Ue.useState(void 0);
  Ue.useEffect(() => o(new t(window)), [t]), Zr(e);
}
function _g() {
  return ci(Kt), null;
}
function gg() {
  return ci(St), ci(ko), null;
}
var Xi = u(nt(), 1),
  lp = u(w(), 1);
var rr = u(w()),
  lc = u(w());
var Ao = u(w());
function or(t) {
  let [e, o] = (0, Ao.useState)(!1);
  return (
    (0, Ao.useEffect)(() => {
      (0, Ao.startTransition)(() => {
        o(!0);
      });
    }, []),
    e ? t.children : (t.fallback ?? null)
  );
}
var nr = u(g());
function ir(t) {
  let { dynamicImport: e, fallback: o, ...n } = t,
    [r] = (0, rr.useState)(() =>
      lc.default.lazy(async () => ({ default: await e() })),
    );
  return (0, nr.jsx)(or, {
    fallback: o,
    children: (0, nr.jsx)(rr.Suspense, {
      fallback: o,
      children: (0, nr.jsx)(r, { ...n }),
    }),
  });
}
var tu = u(nt(), 1),
  Gt = u(w(), 1);
var xo = u(w(), 1);
var cc = "FbRIoYoNi9g-";
var uc = "vnGo6vvKWMk-";
var pc = "kCO5XYi3veo-";
var dc = "Ca4SW9HC3ME-";
var mc = "P0JO-Sl0erw-";
var it = u(g(), 1);
async function ui(t, e) {
  let o = new FormData();
  o.set("language", t);
  let n = await fetch(e, {
    method: "POST",
    credentials: "same-origin",
    body: o,
  });
  if (!n.ok) throw n;
}
function _c(t) {
  let {
      open: e,
      menuAction: o,
      changeLanguagePath: n,
      bLoggedIn: r,
      onDismiss: i,
    } = t,
    [a, s] = (0, xo.useState)(!1),
    l = (0, xo.useRef)(null);
  (0, xo.useEffect)(() => {
    e ? l.current?.showModal() : l.current?.close();
  }, [e]);
  async function c(p) {
    s(!0);
    try {
      await ui(p, n);
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
  return (0, it.jsx)("dialog", {
    ref: l,
    className: cc,
    onMouseDown: (p) => p.target === l.current && i(),
    children: (0, it.jsxs)("div", {
      children: [
        (0, it.jsx)("hr", { className: pc }),
        (0, it.jsxs)("form", {
          method: "dialog",
          className: uc,
          onSubmit: (p) => c(p.target.elements.namedItem("language")?.value),
          children: [
            (0, it.jsx)("select", {
              disabled: a,
              name: "language",
              onChange: (p) => c(p.target.value),
              defaultValue: Po().strLanguage,
              children: t.menuAction.children?.map((p) =>
                (0, it.jsx)(
                  "option",
                  { value: p.action_parameters?.language, children: p.label },
                  p.label,
                ),
              ),
            }),
            (0, it.jsx)("div", {
              className: dc,
              children: (0, it.jsx)("input", {
                type: "submit",
                value: "OK",
                className: mc,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var pi = "h3Jy-1Il1os-";
var gc = "HOrB6lehQpg-";
var fc = "_7iCcob-JJ4g-";
var hc = "QYT54GHN-rI-";
var bc = "_79DIT7RUQ5g-";
var di = "Hxi-pnf9Xlw-";
var mi = "TwsehSqoph8-";
var vc = "cQPGTl-Lp-0-";
var Cc = "rzUmQa-ty1I-";
var _i = "_2CYMhC951F4-";
var Rc = "h8dQ-Uyh4L0-";
var Pc = "NzGUCXVXDcA-";
var Sc = "L09rGTMfR9c-";
var wc = "./global_header_brazilian-QF2T6MCA.json";
var Mc = "./global_header_bulgarian-FRYAWQDA.json";
var Dc = "./global_header_czech-ZHIWGADA.json";
var yc = "./global_header_danish-GTGIGYBA.json";
var Tc = "./global_header_dutch-HDK4MSCA.json";
var kc = "./global_header_english-QERWLJCA.json";
var Ac = "./global_header_finnish-JMO5FZDA.json";
var xc = "./global_header_french-CJNSG7BA.json";
var Ec = "./global_header_german-3CHRXIAA.json";
var Lc = "./global_header_greek-U2VV4XCA.json";
var Bc = "./global_header_hungarian-726J65DA.json";
var Ic = "./global_header_indonesian-B4TLVUBA.json";
var Nc = "./global_header_italian-ED6Y5KDA.json";
var Fc = "./global_header_japanese-QRY6W7DA.json";
var Oc = "./global_header_koreana-HNT7DNDA.json";
var Uc = "./global_header_latam-JTAMHMCA.json";
var Wc = "./global_header_norwegian-PONCKJAA.json";
var Hc = "./global_header_polish-YSLROOBA.json";
var Gc = "./global_header_portuguese-T2BVTTDA.json";
var Vc = "./global_header_romanian-SL2I5MDA.json";
var zc = "./global_header_russian-5SGMOOAA.json";
var jc = "./global_header_sc_schinese-QVBLUWAA.json";
var qc = "./global_header_schinese-WAEK2BBA.json";
var Yc = "./global_header_spanish-J5UIHOBA.json";
var Xc = "./global_header_swedish-MTG4WSBA.json";
var Qc = "./global_header_tchinese-LOVT6ADA.json";
var Jc = "./global_header_thai-Y6GA43AA.json";
var $c = "./global_header_turkish-S3H7YCBA.json";
var Zc = "./global_header_ukrainian-OEDO4ADA.json";
var Kc = "./global_header_vietnamese-W33LN2DA.json";
var I = {};
I.brazilian = wc;
I.bulgarian = Mc;
I.czech = Dc;
I.danish = yc;
I.dutch = Tc;
I.english = kc;
I.finnish = Ac;
I.french = xc;
I.german = Ec;
I.greek = Lc;
I.hungarian = Bc;
I.indonesian = Ic;
I.italian = Nc;
I.japanese = Fc;
I.koreana = Oc;
I.latam = Uc;
I.norwegian = Wc;
I.polish = Hc;
I.portuguese = Gc;
I.romanian = Vc;
I.russian = zc;
I.sc_schinese = jc;
I.schinese = qc;
I.spanish = Yc;
I.swedish = Xc;
I.tchinese = Qc;
I.thai = Jc;
I.turkish = $c;
I.ukrainian = Zc;
I.vietnamese = Kc;
async function gi(t) {
  if (I[t]) return (await fetch(new URL(I[t], import.meta.url))).json();
}
var U = On(gi);
function ar() {
  let t = document.createElement("form");
  (t.action = "/logout/"),
    (t.method = "POST"),
    document.body.appendChild(t),
    t.submit();
}
var m = u(k_());
var fi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
    }
  },
  hi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotions || re(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { promotions: { n: 1, c: bi, r: !0, q: !0 } },
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
    }
  },
  bi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotionid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
    }
  },
  vi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.has_wallet || re(t.M()),
        m.Message.initialize(this, e, 0, -1, [13], null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetWalletDetails_Response";
    }
  },
  Ci = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_balance_in_usd || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetClientWalletDetails_Request";
    }
  },
  Ri = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Request";
    }
  },
  Pi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.pwid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Response";
    }
  },
  Si = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Request";
    }
  },
  wi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Response";
    }
  },
  Mi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Request";
    }
  },
  Di = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Response";
    }
  },
  yi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_limit || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Request";
    }
  },
  sr = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Response";
    }
  },
  Ti = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Request";
    }
  },
  ki = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tokens || re(t.M()),
        m.Message.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tokens: { n: 1, c: sr, r: !0, q: !0 } },
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Response";
    }
  },
  Ai = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Request";
    }
  },
  xi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.valid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Response";
    }
  },
  Ei = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Request";
    }
  },
  Li = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Response";
    }
  },
  Bi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Request";
    }
  },
  Ii = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Response";
    }
  },
  Ni = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.compat_tool || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Request";
    }
  },
  Fi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return e;
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {}
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Response";
    }
  },
  Oi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_Token";
    }
  },
  Ui = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.result || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
              token: { n: 2, c: Oi },
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeDevice_Response";
    }
  },
  Wi = class t extends m.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || re(t.M()),
        m.Message.initialize(this, e, 0, -1, void 0, null);
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
      let o = new m.default.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return oe(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ne(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new m.default.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
    }
  },
  Hi;
((d) => {
  function t(f, b) {
    return f.SendMsg(
      "UserAccount.GetAvailableValveDiscountPromotions#1",
      ke(fi, b),
      hi,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  d.GetAvailableValveDiscountPromotions = t;
  function e(f, b) {
    return f.SendMsg("UserAccount.GetClientWalletDetails#1", ke(Ci, b), vi, {
      ePrivilege: 1,
    });
  }
  d.GetClientWalletDetails = e;
  function o(f, b) {
    return f.SendMsg("UserAccount.GetAccountLinkStatus#1", ke(Ri, b), Pi, {
      ePrivilege: 1,
    });
  }
  d.GetAccountLinkStatus = o;
  function n(f, b) {
    return f.SendMsg("UserAccount.CancelLicenseForApp#1", ke(Si, b), wi, {
      ePrivilege: 1,
    });
  }
  d.CancelLicenseForApp = n;
  function r(f, b) {
    return f.SendMsg("UserAccount.GetUserCountry#1", ke(Mi, b), Di, {
      ePrivilege: 1,
    });
  }
  d.GetUserCountry = r;
  function i(f, b) {
    return f.SendMsg("UserAccount.CreateFriendInviteToken#1", ke(yi, b), sr, {
      ePrivilege: 3,
    });
  }
  d.CreateFriendInviteToken = i;
  function a(f, b) {
    return f.SendMsg("UserAccount.GetFriendInviteTokens#1", ke(Ti, b), ki, {
      ePrivilege: 1,
    });
  }
  d.GetFriendInviteTokens = a;
  function s(f, b) {
    return f.SendMsg("UserAccount.ViewFriendInviteToken#1", ke(Ai, b), xi, {
      ePrivilege: 1,
    });
  }
  d.ViewFriendInviteToken = s;
  function l(f, b) {
    return f.SendMsg("UserAccount.RedeemFriendInviteToken#1", ke(Ei, b), Li, {
      ePrivilege: 1,
    });
  }
  d.RedeemFriendInviteToken = l;
  function c(f, b) {
    return f.SendMsg("UserAccount.RevokeFriendInviteToken#1", ke(Bi, b), Ii, {
      ePrivilege: 1,
    });
  }
  d.RevokeFriendInviteToken = c;
  function p(f, b) {
    return f.SendMsg("UserAccount.RegisterCompatTool#1", ke(Ni, b), Fi, {
      ePrivilege: 1,
    });
  }
  d.RegisterCompatTool = p;
})((Hi ||= {}));
var Xg;
((e) => {
  function t(o, n) {
    return o.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", ke(Wi, n), Ui, {
      ePrivilege: 1,
    });
  }
  e.AuthorizeCurrentDevice = t;
})((Xg ||= {}));
function Qg() {
  return ["CurrentUserWalletDetails", Qo.accountid];
}
function Jg(t) {
  return {
    queryKey: Qg(),
    queryFn: async () => {
      if (!Qo.accountid) return;
      let e = R.EREALM === 2;
      return (
        await Hi.GetClientWalletDetails(t, {
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
function lr() {
  let t = qs();
  return os(Jg(t));
}
var j = u(g(), 1);
function ou(t) {
  let { action: e } = t,
    o = (0, Gt.useContext)(nu),
    n = "span",
    r = {};
  return (
    e.href &&
      ((n = A),
      (r.to = e.href),
      (r.external = !e.ssr),
      e.href.startsWith(R.STORE_BASE_URL) &&
        (r.snr = { feature: "globalheader" })),
    e.action &&
      (e.href || (n = "button"),
      (r.onClick = async function (a) {
        switch ((a.preventDefault(), e.action)) {
          case 1: {
            ar();
            return;
          }
          case 2: {
            if (e.action_parameters?.language === void 0)
              throw "Missing language";
            try {
              await ui(e.action_parameters.language, o.changeLanguagePath);
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
    (0, j.jsx)(wo, {
      menuTarget: (0, j.jsx)(n, {
        ...r,
        tabIndex: 0,
        className: mi,
        children: Un(e.label, (0, j.jsx)("span", { className: gc })),
      }),
      direction: "left",
      className: Cc,
      children: e.children?.map((i, a) => (0, j.jsx)(ou, { action: i }, a)),
    })
  );
}
var nu = (0, Gt.createContext)({});
function eu(t) {
  return (0, j.jsx)(nu.Provider, {
    value: t,
    children: t.globalActions.map((e, o) =>
      (0, j.jsx)(
        wo,
        {
          direction: "down-left",
          menuTarget: (0, j.jsx)("button", {
            className: hc,
            children: e.label,
          }),
          className: vc,
          interactionMode: 1,
          children: e.children?.map((n, r) => (0, j.jsx)(ou, { action: n }, r)),
        },
        o,
      ),
    ),
  });
}
function $g() {
  let { data: t } = lr();
  return (0, j.jsx)("div", { className: bc, children: t?.formatted_balance });
}
function ru(t) {
  let { userDetails: e } = t,
    [o, n] = (0, Gt.useState)(void 0),
    r = `/login/${o ? `?redir=${encodeURIComponent(o)}` : ""}`;
  return (
    (0, Gt.useEffect)(() => {
      n(location.href);
    }, []),
    e
      ? (0, j.jsxs)("div", {
          className: pi,
          children: [
            (0, j.jsx)("a", {
              className: _i,
              href: R.STORE_BASE_URL + "about/",
              children: U.Localize("#global_menu_install_steam"),
            }),
            t.notifications &&
              (0, j.jsx)("div", {
                className: Pc,
                children: (0, j.jsx)(ir, {
                  dynamicImport: async () =>
                    (await import("./greenenvelope-XGEJVKIP.js")).GreenEnvelope,
                  fallback: (0, j.jsx)("div", { className: Sc }),
                  bResponsiveHeader: !1,
                  notifications: t.notifications,
                }),
              }),
            (0, j.jsxs)("div", {
              className: di,
              children: [
                (0, j.jsx)(eu, {
                  userDetails: e,
                  globalActions: t.globalActions,
                  changeLanguagePath: t.changeLanguagePath,
                }),
                (0, j.jsx)($g, {}),
              ],
            }),
            (0, j.jsx)("a", {
              className: fc,
              href: en(e),
              children: (0, j.jsx)(Xn, {
                playerLinkDetails: e,
                statusPosition: "border",
                alt: "",
                role: "presentation",
                size: "Small",
              }),
            }),
          ],
        })
      : (0, j.jsx)("div", {
          className: pi,
          children: (0, j.jsxs)("div", {
            className: di,
            children: [
              (0, j.jsx)("a", {
                className: (0, tu.default)(_i, Rc),
                href: R.STORE_BASE_URL + "about/",
                children: U.Localize("#global_menu_install_steam"),
              }),
              " ",
              (0, j.jsx)("a", {
                href: r,
                className: mi,
                children: U.Localize("#global_menu_login"),
              }),
              "  |  ",
              (0, j.jsx)(eu, {
                userDetails: e,
                globalActions: t.globalActions,
                changeLanguagePath: t.changeLanguagePath,
              }),
            ],
          }),
        })
  );
}
var iu = "eGsI8rO3zfU-";
var au = "Ca2l5LKN6as-";
var su = "ewJx-kmPr-8-";
var lu = "SmaLDT4y0RE-";
var cu = "LyTAF1R-NHw-";
var Gi = "_2GKjdN512t4-";
var uu = "FhcQPauG0Bc-";
var pu = "_40MmWrTStR0-";
var du = "_5N8HUkyU1sA-";
var Vi = u(nt(), 1),
  Ru = u(w(), 1);
var mu = "MMrgod6KQlc-";
var _u = "k0AAbwuFzJQ-";
var gu = "ofgQne2Wvqg-";
var fu = "FTufO00UqAw-";
var hu = "iHkamGVWNgw-";
var bu = "_9-ylsFqlD1Y-";
var vu = "_99jWUQL7ajk-";
var Cu = "maI6DbOJuy4-";
var Pe = u(g(), 1),
  Dt = (0, Ru.forwardRef)(function (e, o) {
    let { item: n, responsive: r, className: i, ...a } = e,
      s = $n().startsWith(n.href),
      l = n.label;
    return (
      r && (l = n.label_responsive ?? n.label),
      (0, Pe.jsx)(Pe.Fragment, {
        children: (0, Pe.jsxs)(A, {
          className: (0, Vi.default)(i, n.valveOnly && vu),
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
                className: Cu,
                children: U.Localize("#m_ext_new"),
              }),
          ],
        }),
      })
    );
  });
function Pu(t) {
  let { navContent: e } = t;
  return (0, Pe.jsx)(wo, {
    menuTarget: (0, Pe.jsx)(Dt, { item: e, className: bu }),
    direction: "right",
    children: e.children?.map((o, n) => (0, Pe.jsx)(Pu, { navContent: o }, n)),
  });
}
function Su(t) {
  return (0, Pe.jsx)("nav", {
    className: mu,
    children: (0, Pe.jsx)("ul", {
      className: _u,
      children: t.navContent.map((e, o) =>
        (0, Pe.jsx)(
          wo,
          {
            menuTarget: (0, Pe.jsx)(Dt, {
              item: e,
              className: (0, Vi.default)(gu, e.userContent && fu),
            }),
            direction: "down",
            className: hu,
            children: e.children?.map((n, r) =>
              (0, Pe.jsx)(Pu, { navContent: n }, r),
            ),
          },
          o,
        ),
      ),
    }),
  });
}
var wu = "/X3MIBOBA.png";
var Mu = "/TYQTXQDA.svg";
var zi = "/5EH3SHCA.svg";
var Du = "/KSEIVHDA.png";
function Eo() {
  return Rt(Ko) === "desktop";
}
function rf() {
  return Rt(Ko) === "touch";
}
function yu() {
  let t = [];
  return (
    Eo() && t.push("force_desktop"),
    rf() && t.push("responsive touch"),
    t.join(" ")
  );
}
function Tu() {
  jn(Ko, "desktop"), "location" in window && location.reload();
}
function ku() {
  Eo() && qn(Ko), "location" in window && location.reload();
}
var Qe = u(nt(), 1),
  Je = u(w(), 1);
var Au = "UJ-b28jREN4-";
var xu = "-ackiz2p900-";
var Eu = "dsfHY-n2vRo-";
var Lu = "_7QSpS4Fcxis-";
var Bu = "SMuDlFUQZ7c-";
var Iu = "fbumr489F1M-";
var Nu = "_4Irj26b6cAc-";
var Fu = "J0hwuL-5qaI-";
var ji = "vaiPH0LUuOg-";
var qi = "lHc2D8LzCAM-";
var Ou = "qMsE88Z2WWg-";
var Uu = "SI1K4dzVIa4-";
var Wu = "wQ0CyaaCCZw-";
var Hu = "QB99AacwCmk-";
var Gu = "_8pHkaq8PPAw-";
var at = "Ud1IMOOMuOI-";
var Vu = "_58A1pqE2uSo-";
var to = "myYtt3d51V4-";
var zu = "cmJ4ozhx9RE-";
var ju = "_2wGlOytoBKw-";
var qu = "_049Kz8GkLto-";
var Yu = "qNNahG-7Lqc-";
var Xu = "Yp-VG7Zk9AY-";
var Qu = "CX4Bz9fkpP4-";
var Ju = "mL8bNWbmixg-";
var $u = "fPuSnTPv8Sw-";
var Zu = "pHDUu-G3uyI-";
var Ku = "do714Zjyklo-";
var ep = "eemuAILDlkQ-";
var tp = "Q-TiFOlMJ8s-";
var Yi = "V29-mSaJz7Q-";
var op = "lFK0b3Au9I8-";
var np = "eaAkMgON-CQ-";
var rp = "gLRm-ue6Z7Q-";
var ip = "RRZn8XwJQEk-";
var C = u(g(), 1);
function sf(t) {
  return t.private_data?.persona_state === 0
    ? Nu
    : t.private_data?.game_id !== void 0
      ? Iu
      : Bu;
}
function lf() {
  let { data: t } = pl();
  return t
    ? (0, C.jsx)("div", {
        className: ji,
        children: (0, C.jsx)(A, {
          snr: !0,
          external: !0,
          to: R.STORE_BASE_URL + "cart",
          className: ji,
          children: U.LocalizeReact(
            "#Cart_CountWidget",
            (0, C.jsx)("b", { children: Jo(t) }),
          ),
        }),
      })
    : null;
}
function cf() {
  let { data: t } = lr();
  return t?.formatted_balance
    ? (0, C.jsx)("div", {
        className: qi,
        children: (0, C.jsx)(A, {
          snr: !0,
          external: !0,
          to: R.STORE_BASE_URL + "account",
          className: qi,
          children: U.LocalizeReact(
            "#responsive_menu_wallet_balance",
            (0, C.jsx)("b", { children: t.formatted_balance }),
          ),
        }),
      })
    : null;
}
function ap(t) {
  let { navContent: e, children: o, labelAddition: n } = t,
    r = (0, Je.useRef)(null),
    i = (0, Je.useRef)(null),
    a = (0, Je.useRef)(null),
    s = (0, Je.useRef)();
  if (!o && (!e.children || e.children.length === 0))
    return (0, C.jsx)(Dt, { item: e, className: at, responsive: !0 });
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
  return (0, C.jsxs)("details", {
    name: "responsive-menu",
    className: Hu,
    ref: r,
    onToggle: p,
    children: [
      (0, C.jsxs)("summary", {
        className: at,
        ref: a,
        children: [
          e.label_responsive ?? e.label,
          " ",
          n,
          " ",
          (0, C.jsx)("div", { className: Vu }),
        ],
      }),
      (0, C.jsxs)("div", {
        className: Gu,
        ref: i,
        children: [
          e.children?.map((d, f) =>
            (0, C.jsx)(Dt, { item: d, className: zu, responsive: !0 }, f),
          ),
          o,
        ],
      }),
    ],
  });
}
function uf() {
  return (0, C.jsxs)(C.Fragment, {
    children: [
      (0, C.jsxs)("div", {
        className: Ju,
        children: [
          (0, C.jsx)(A, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "about",
            children: "关于蒸汽平台",
          }),
          "  |  ",
          (0, C.jsx)(A, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "steam_refunds",
            children: "退款政策",
          }),
          "  |  ",
          (0, C.jsx)(A, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "subscriber_agreement",
            children: "软件许可服务协议",
          }),
          "  |  ",
          (0, C.jsx)("br", {}),
          (0, C.jsx)(A, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "privacy_agreement",
            children: "个人信息保护政策",
          }),
          "  |  ",
          (0, C.jsx)(A, {
            snr: !0,
            external: !0,
            to: R.STORE_BASE_URL + "data_outbound",
            children: "个人信息出境告知书",
          }),
          "  |  ",
          (0, C.jsx)("br", {}),
          (0, C.jsx)(A, {
            to: "https://about.steamchina.com/content_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "不良内容举报投诉",
          }),
          "  |  ",
          (0, C.jsx)(A, {
            to: "https://about.steamchina.com/infringement_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "侵权投诉",
          }),
          "  |  ",
          (0, C.jsx)(A, {
            to: "https://about.steamchina.com/parentguardianship_agreement.html",
            target: "_blank",
            rel: "noreferrer",
            children: "家长监护",
          }),
        ],
      }),
      (0, C.jsxs)("div", {
        className: $u,
        children: [
          (0, C.jsxs)(A, {
            external: !0,
            className: Yi,
            to: "http://qr.weibo.cn/g/7kla92",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, C.jsx)("img", {
                alt: "微博",
                className: np,
                src: `${R.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, C.jsx)("div", { children: "微博" }),
            ],
          }),
          (0, C.jsxs)(A, {
            external: !0,
            className: Yi,
            to: "http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, C.jsx)("img", {
                alt: "微信",
                className: op,
                src: `${R.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, C.jsx)("div", { children: "微信" }),
            ],
          }),
        ],
      }),
      (0, C.jsx)("hr", { className: ep }),
      (0, C.jsxs)("div", {
        className: tp,
        children: [
          (0, C.jsx)(A, {
            external: !0,
            to: "https://www.wanmei.com/",
            target: "_blank",
            rel: "noreferrer",
            children: (0, C.jsx)("img", {
              className: rp,
              src: `${R.STORE_CDN_URL}/public/shared/images/footer/pw_logo.svg?v=1`,
              alt: "",
            }),
          }),
          (0, C.jsx)(A, {
            external: !0,
            to: "https://www.valvesoftware.com",
            target: "_blank",
            rel: "noreferrer",
            children: (0, C.jsx)("img", {
              className: ip,
              src: `${R.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: "",
            }),
          }),
        ],
      }),
      (0, C.jsxs)("div", {
        className: Zu,
        children: [
          (0, C.jsxs)("div", {
            children: [
              "© ",
              new Date().getFullYear(),
              " Valve Corporation 版权所有，完美世界已获授权。",
              (0, C.jsx)("br", {}),
              "所有商标均属于其在美国或其他国家的拥有者。",
            ],
          }),
          (0, C.jsxs)("div", {
            className: Ku,
            children: [
              "© 完美世界征奇(上海)多媒体科技有限公司 版权所有。",
              (0, C.jsx)("br", {}),
              "增值电信业务经营许可证沪B2-20180406",
            ],
          }),
        ],
      }),
    ],
  });
}
function pf() {
  return (0, C.jsxs)(C.Fragment, {
    children: [
      (0, C.jsx)("div", {
        children: (0, C.jsx)("img", {
          src: `${R.STORE_CDN_URL}/public/shared/images/responsive/logo_valve_footer.png`,
          alt: "",
        }),
      }),
      U.Localize("#responsive_footer_copyright"),
      "  ",
      (0, C.jsxs)("span", {
        children: [
          (0, C.jsx)(A, {
            to: R.STORE_BASE_URL + "privacy_agreement/",
            target: "_blank",
            children: U.Localize("#Common_Footer_PrivacyPolicy"),
          }),
          " |  ",
          (0, C.jsx)(A, {
            to: "http://www.valvesoftware.com/legal.htm",
            target: "_blank",
            children: U.Localize("#Common_Footer_Legal"),
          }),
          " |  ",
          (0, C.jsx)(A, {
            to: R.STORE_BASE_URL + "subscriber_agreement/",
            target: "_blank",
            children: U.Localize("#Common_Footer_SSA"),
          }),
          " |  ",
          (0, C.jsx)(A, {
            to: R.STORE_BASE_URL + "steam_refunds/",
            target: "_blank",
            children: U.Localize("#Common_Footer_Refunds"),
          }),
        ],
      }),
    ],
  });
}
function sp(t) {
  let {
      userDetails: e,
      navContent: o,
      globalActions: n,
      changeLanguagePath: r,
      open: i,
      onDismiss: a,
      cartInResponsiveMenu: s,
    } = t,
    [l, c] = (0, Je.useState)(!1),
    p = (0, Je.useRef)(null),
    d = (0, Je.useRef)();
  (0, Je.useEffect)(() => {
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
  let f =
    n.find((b) => b.id === "language") ??
    n[0]?.children?.find((b) => b.id === "language");
  return (0, C.jsxs)(C.Fragment, {
    children: [
      (0, C.jsxs)("dialog", {
        className: (0, Qe.default)(Au, ot(R.EREALM) && xu),
        ref: p,
        onMouseDown: (b) => b.target === p.current && a(),
        children: [
          (0, C.jsxs)("div", {
            className: Eu,
            children: [
              !e &&
                (0, C.jsx)(Dt, {
                  className: (0, Qe.default)(at),
                  item: {
                    href: "/login/",
                    label: U.Localize("#global_menu_login_caps"),
                  },
                }),
              e &&
                (0, C.jsxs)("div", {
                  className: (0, Qe.default)(Lu, sf(e)),
                  children: [
                    (0, C.jsxs)("div", {
                      className: Fu,
                      children: [
                        (0, C.jsx)("a", {
                          className: Wu,
                          href: en(e),
                          children: (0, C.jsx)(Xn, {
                            playerLinkDetails: e,
                            statusPosition: "border",
                            alt: "",
                            role: "presentation",
                            size: "Small",
                            className: Uu,
                          }),
                        }),
                        " ",
                        (0, C.jsx)("a", {
                          className: Ou,
                          href: en(e),
                          children: e.public_data?.persona_name,
                        }),
                      ],
                    }),
                    s && (0, C.jsx)(lf, {}),
                    (0, C.jsx)(cf, {}),
                  ],
                }),
              t.notifications &&
                (0, C.jsx)(ap, {
                  navContent: { label: "Notifications", href: "" },
                  labelAddition: (0, C.jsxs)("div", {
                    className: (0, Qe.default)(
                      ju,
                      t.notifications?.unread_count && Yu,
                    ),
                    children: [
                      t.notifications.unread_count > 0 &&
                        (0, C.jsx)("span", { className: qu }),
                      (0, C.jsx)("span", {
                        className: Xu,
                        children: Jo(t.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, C.jsx)(ir, {
                    dynamicImport: async () =>
                      (await import("./greenenvelope-XGEJVKIP.js"))
                        .GreenEnvelope,
                    fallback: (0, C.jsx)("div", {}),
                    bResponsiveHeader: !0,
                    notifications: t.notifications,
                  }),
                }),
              o.map((b, M) => (0, C.jsx)(ap, { navContent: b }, M)),
              (0, C.jsxs)("div", {
                className: "minor_menu_items",
                children: [
                  e &&
                    (0, C.jsxs)(C.Fragment, {
                      children: [
                        (0, C.jsx)(Dt, {
                          className: (0, Qe.default)(at, to),
                          item: {
                            href: R.STORE_BASE_URL + "account",
                            label: U.Localize("#global_menu_account_details"),
                          },
                        }),
                        (0, C.jsx)(Dt, {
                          className: (0, Qe.default)(at, to),
                          item: {
                            href: R.STORE_BASE_URL + "account/preferences",
                            label: U.Localize(
                              "#global_menu_account_preferences",
                            ),
                          },
                        }),
                      ],
                    }),
                  !ot(R.EREALM) &&
                    (0, C.jsx)(C.Fragment, {
                      children: (0, C.jsx)("button", {
                        className: (0, Qe.default)(at, to),
                        onClick: () => c(!0),
                        children: U.Localize("#global_menu_change_language"),
                      }),
                    }),
                  e &&
                    (0, C.jsx)("button", {
                      className: (0, Qe.default)(at, to),
                      onClick: ar,
                      children: U.Localize("#global_menu_change_user"),
                    }),
                  !ot(R.EREALM) &&
                    (0, C.jsx)(Dt, {
                      className: (0, Qe.default)(at, to),
                      item: {
                        href: R.STORE_BASE_URL + "mobile",
                        label: U.Localize("#global_menu_getmobileapp"),
                      },
                    }),
                  !Eo() &&
                    (0, C.jsx)("button", {
                      className: (0, Qe.default)(at, to),
                      onClick: Tu,
                      children: U.Localize("#global_menu_view_desktop_website"),
                    }),
                ],
              }),
            ],
          }),
          (0, C.jsx)("footer", {
            className: Qu,
            children: ot(R.EREALM) ? (0, C.jsx)(uf, {}) : (0, C.jsx)(pf, {}),
          }),
        ],
      }),
      f &&
        (0, C.jsx)(_c, {
          open: l,
          onDismiss: () => c(!1),
          menuAction: f,
          changeLanguagePath: r,
          bLoggedIn: e != null,
        }),
    ],
  });
}
var se = u(g(), 1);
function cp(t) {
  let [e, o] = (0, lp.useState)(!1);
  return (0, se.jsxs)(se.Fragment, {
    children: [
      (0, se.jsxs)("header", {
        className: (0, Xi.default)(iu, t.className),
        children: [
          (0, se.jsxs)("div", {
            className: au,
            children: [
              (0, se.jsx)("a", {
                href: R.STORE_BASE_URL,
                "aria-label": U.Localize("#Aria_Steam_Home_Link"),
                className: Gi,
                children: (0, se.jsx)("img", {
                  src: ft(ot(R.EREALM) ? zi : Mu),
                  alt: U.Localize("#Aria_Steam_Home_Link"),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, se.jsx)(Su, { navContent: t.navContent }),
              (0, se.jsx)(ru, {
                globalActions: t.globalActions,
                userDetails: t.userDetails,
                notifications: t.notifications,
                changeLanguagePath: t.changeLanguagePath,
              }),
              t.children,
            ],
          }),
          (0, se.jsxs)("div", {
            className: su,
            children: [
              (0, se.jsxs)("button", {
                className: lu,
                onClick: () => o(!0),
                children: [
                  (0, se.jsx)("img", { src: ft(wu), alt: "", className: cu }),
                  t.notifications?.unread_count &&
                    (0, se.jsx)("div", {
                      className: uu,
                      children: (0, se.jsx)("div", {
                        className: (0, Xi.default)(pu),
                        children: (0, se.jsx)("span", {
                          className: du,
                          children: Jo(t.notifications.unread_count ?? 0),
                        }),
                      }),
                    }),
                ],
              }),
              (0, se.jsx)("a", {
                href: R.STORE_BASE_URL,
                "aria-label": U.Localize("#Aria_Steam_Home_Link"),
                className: Gi,
                children: (0, se.jsx)("img", {
                  src: ft(ot(R.EREALM) ? zi : Du),
                  alt: U.Localize("#Aria_Steam_Home_Link"),
                  height: 36,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, se.jsx)(sp, { ...t, open: e, onDismiss: () => o(!1) }),
    ],
  });
}
var up = "y0fX1sHXgbg-";
var pp = "dkzTutiFwB8-";
var dp = "SMtSKQQ7dWs-";
var pn = u(g(), 1);
function mp(t) {
  return (0, pn.jsxs)("span", {
    className: up,
    children: [
      (0, pn.jsx)("span", {
        className: pp,
        children: "You are spoofing another user!",
      }),
      " ",
      (0, pn.jsx)("span", {
        className: dp,
        onClick: () => {
          qn(zn), window.location.reload();
        },
        children: "end spoofing",
      }),
    ],
  });
}
var Lo = u(w());
var hp = u(A_(), 1);
function Qi(t) {
  try {
    if (!t || typeof t != "string") return null;
    let e = t.split(".");
    if (e.length !== 3) return null;
    let [o, n] = e,
      r = gp(o),
      i = gp(n);
    return !r || !i ? null : { header: JSON.parse(r), body: JSON.parse(i) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function _p(t) {
  return t ? t.body.exp : 0;
}
function mf(t) {
  return t ? t.body.nbf || t.body.iat : 0;
}
function fp(t) {
  let e = _p(t),
    o = mf(t),
    n = 900,
    r = e - o;
  return r < 900 * 1.5 && (n = r <= 60 ? 0 : 60), _p(t) - n < Date.now() / 1e3;
}
function gp(t) {
  return atob(t.replace(/-/g, "+").replace(/_/g, "/"));
}
var cr = class {
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
      (this.m_bJWTToken = Qi(o) != null),
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
    let i = Rt(zn);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new qr();
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
            fp(Qi(this.m_webApiAccessToken)) &&
              ((this.m_refreshAccessTokenPromise =
                this.m_fnRequestNewAccessToken(this.m_webApiAccessToken)),
              (this.m_webApiAccessToken =
                await this.m_refreshAccessTokenPromise),
              (this.m_refreshAccessTokenPromise = void 0)));
      }
      let s = await this.Send(e, o, n, i);
      if (s.status != 200) throw new Error("Request Error");
      if (
        ((a = Yr.Init(r, 147)),
        s.headers &&
          (s.headers.get("x-eresult") &&
            a.Hdr().set_eresult(parseInt(s.headers.get("x-eresult"))),
          s.headers.get("x-error_message") &&
            a.Hdr().set_error_message(s.headers.get("x-error_message"))),
        this.m_bJsonMode)
      )
        a.SetBodyJSON(await s.json());
      else {
        let l = new ss(await s.arrayBuffer());
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
      s = hp.fromByteArray(a),
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
      let b = new FormData();
      return (
        this.m_bJsonMode
          ? b.append("input_json", JSON.stringify(n.Body().toObject()))
          : b.append("input_protobuf_encoded", s),
        fetch(`${i}?${d.toString()}`, { ...p, method: "POST", body: b })
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
    let r = Yr.Init(e);
    return (
      r.Hdr().set_eresult(2),
      r.Hdr().set_transport_error(o),
      n && r.Hdr().set_error_message(n),
      r
    );
  }
};
var ur = class {
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
var dn = class extends ur {
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
var Ji = u(g());
function bp(t) {
  let { strWebAPIToken: e, steamid: o, children: n } = t,
    r = Lo.useRef(),
    i = Lo.useRef(),
    a = Lo.useCallback(
      () => (
        r.current || (r.current = new cr(R.WEBAPI_BASE_URL, e, !1, _f)),
        r.current
      ),
      [e],
    ),
    s = Lo.useCallback(
      () => (i.current || (i.current = new dn()), i.current),
      [],
    );
  return (0, Ji.jsx)(js, {
    useActiveSteamInterface: a,
    useStorage: s,
    children: (0, Ji.jsx)(Xs, { steamid: o, children: n }),
  });
}
async function _f(t) {
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
var vp = u(w());
var pr = class {
  m_mapAppToSNRs = new Map();
  m_rgImpressionsToAdd = [];
  BIsValid() {
    return !0;
  }
  AddImpression(e, o) {
    if (!Gs(Vn)) return;
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
    let o = [Rt(Vn) || "", ...this.m_rgImpressionsToAdd].join("|");
    this.m_rgImpressionsToAdd = [];
    let n = encodeURIComponent(o).length,
      r = 3200;
    n <= r
      ? jn(Vn, o)
      : console.warn(
          `Cookie max length exceeded ( ${n} > ${r} ), discarding impressions`,
        );
  }
};
var Rp = u(g());
function Cp(t) {
  let [e] = vp.useState(() => new pr());
  return (0, Rp.jsx)(dl, { ImpressionTracker: e, children: t.children });
}
var Hr = u(nt(), 1);
var Le = u(w()),
  Kp = u(ht());
var Bo = u(w());
var st = u(w());
var Pp = { m_unPID: 0, m_nBrowserID: -1 };
var mn = class {
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
      $o(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
_([h], mn.prototype, "OnLinkLoad", 1);
function $i() {
  return Os() ? 256 : 0;
}
function gn(t) {
  let e = 0;
  switch (t) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= gn(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= gn(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= $i()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= $i()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= $i()),
        e
      );
  }
}
function wp() {
  let { ownerWindow: t } = De();
  return $e.GetPopupForWindow(t)?.browser_info || Pp;
}
var Mp = st.createContext({ ownerWindow: window }),
  De = () => st.useContext(Mp);
function Dp(t) {
  let { ownerWindow: e, children: o } = t,
    n = st.useMemo(() => ({ ownerWindow: e }), [e]);
  return st.createElement(Mp.Provider, { value: n }, o);
}
var Me = class {
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
    Ct(this),
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
    let n = $e.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let r, i, a;
    n
      ? ((i = n.m_element),
        (r = n.m_popup),
        n.ReleasePopup(),
        (a = n.m_renderWhenReady),
        $e.RemoveTrackedPopup(n),
        r?.removeEventListener("beforeunload", n.OnBeforeUnloadEvent),
        r?.removeEventListener("unload", n.OnUnload),
        r?.removeEventListener("resize", n.OnResizeEvent),
        r?.removeEventListener("focus", this.OnFocusInternal),
        r?.removeEventListener("blur", this.OnBlurInternal),
        r?.removeEventListener("drop", n.OnDrop),
        r?.removeEventListener("dragover", n.OnDragOver),
        r?.removeEventListener("message", this.OnMessage))
      : (({ popup: r, element: i } = _n.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new mn(r?.document, i))),
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
        Z.LANGUAGE &&
          r.document.documentElement.setAttribute("lang", Hs() ?? ""),
        (this.m_popup = r),
        (this.m_element = i),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, o);
        })),
      $e.AddTrackedPopup(this),
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
      bl(this.browser_info.m_eBrowserType) &&
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
      $e.RemoveTrackedPopup(this),
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
      (Xe(this.m_popup.window, "Window.Close")
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
    return Xe(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return Xe(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return Xe(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
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
_([vt], Me.prototype, "m_bFocused", 2),
  _([h], Me.prototype, "OnMessage", 1),
  _([h], Me.prototype, "RenderInternal", 1),
  _([h], Me.prototype, "OnCreateInternal", 1),
  _([h], Me.prototype, "OnResizeEvent", 1),
  _([h], Me.prototype, "OnBeforeUnloadEvent", 1),
  _([h], Me.prototype, "OnUnload", 1),
  _([h], Me.prototype, "OnFocusInternal", 1),
  _([h], Me.prototype, "OnBlurInternal", 1);
var Zi = class extends Me {
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
          (e.strRestoreDetails = $e.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          $e.SetRestoreDetails(
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
            ($e.SetRestoreDetails(e, o, this.m_bExpires),
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
    $e.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
_([h], Zi.prototype, "QueryAndStoreWindowPosition", 1);
var _n = class {
  m_bShuttingDown = !1;
  m_mapPopups = vt.map([], { deep: !1 });
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
            let o = $r();
            this.m_mapPopups.forEach((n) => {
              bs(n.window.document, o, !1);
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
    let f = "";
    o.html_class && (f = `class="${o.html_class}"`);
    let b = "";
    o.body_class && (b = `class="${o.body_class}"`);
    let M = "";
    o.popup_class && (M = `class="${o.popup_class}"`);
    let T = `<!DOCTYPE html><html ${f}><head><title></title></head><body ${b}><div id="popup_target" ${M}></div></body></html>`;
    return (
      d.document.write(T),
      (d.document.title = a),
      hs(d, $r()),
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
_([h, el(100)], _n.prototype, "DebouncedSaveSavedDimensionStore", 1);
var $e = new _n();
window.g_PopupManager = $e;
var kp = u(g()),
  yp = Bo.default.createContext(null);
function Tp(t) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: o = !0,
      children: n,
    } = t,
    i = De()?.ownerWindow || window,
    a = Bo.default.useRef();
  return (
    a.current || (a.current = new al()),
    Bo.default.useLayoutEffect(() => {
      if (o)
        return (
          ti.SetMenuManager(i, a.current), () => ti.SetMenuManager(i, void 0)
        );
    }, [i, o]),
    Bo.default.useLayoutEffect(
      () => ($t(e, a.current), () => $t(e, void 0)),
      [e],
    ),
    (0, kp.jsx)(yp.Provider, { value: a.current, children: n })
  );
}
function dr() {
  return Bo.default.useContext(yp);
}
var zt = u(w()),
  xp = u(ht());
var Vt = u(w());
var fn = u(w());
var ff = u(g()),
  gf = fn.createContext({ body_class: "" });
function Ap() {
  return fn.useContext(gf);
}
function mr(t, e, o) {
  let n = Vt.useRef(void 0),
    [r, i] = Vt.useState(void 0),
    a = Ap();
  return (
    n.current || (n.current = new Ki(t, hf(e, a), i)),
    (n.current.m_callbacks = o),
    Vt.useEffect(() => {
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
    Vt.useEffect(() => {
      n.current.window?.SteamClient.Window.SetHideOnClose &&
        n.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: n.current.window, element: r, popupObj: n.current }
  );
}
function hf(t, e) {
  return { ...t, body_class: v(t.body_class, e.body_class) };
}
var Ki = class extends Me {
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
var Ee = u(g());
function Ep(t) {
  let { managerOverride: e, bSuppressMouseOverlay: o } = t,
    n = Ft(),
    r = wp(),
    i = dr(),
    a = e ?? i;
  Ot(a.OnMenusChanged, n);
  let s = !o && a.BShouldRenderMouseOverlay(),
    l = a.GetAllMenus();
  return (0, Ee.jsxs)(Ee.Fragment, {
    children: [
      s && (0, Ee.jsx)(rl, {}),
      l.map((c) =>
        (0, Ee.jsx)(
          ge,
          { children: (0, Ee.jsx)(vf, { instance: c, browserInfo: r }) },
          c.key,
        ),
      ),
    ],
  });
}
function vf(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = !1,
    i = Io(),
    a = De().ownerWindow,
    s = zt.default.useRef(void 0);
  s.current === void 0 &&
    (s.current =
      (r || e.options.bForcePopup || a.innerWidth < 400 || i?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let l = zt.default.useMemo(
      () => ({ instance: e, styles: Kr, presentation: 0 }),
      [e],
    ),
    c = n || e.ReactElement;
  return (0, Ee.jsx)(Qn.Provider, {
    value: l,
    children: s.current
      ? (0, Ee.jsx)(Rf, { instance: e, browserInfo: o, children: c })
      : (0, Ee.jsx)(Cf, { instance: e, children: c }),
  });
}
function Cf(t) {
  let { instance: e, children: o } = t;
  return (0, Ee.jsx)(ei, { ...e.position, children: o });
}
function Rf(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = zt.default.useRef(null),
    a = De().ownerWindow,
    s = a.SteamClient.Browser.GetBrowserID(),
    l = zt.default.useCallback(
      (f) => {
        let { options: b, position: M } = e,
          T = M.element;
        if (b.bScreenCoordinates)
          f.dimensions = {
            left: M.clientX,
            top: M.clientY,
            width: 2,
            height: 1,
          };
        else {
          let B = _s(a, T.getBoundingClientRect());
          (f.dimensions = { left: B.right, top: B.top, width: 2, height: 1 }),
            (f.availscreenwidth = a.screen.availWidth),
            (f.availscreenheight = a.screen.availHeight);
        }
        return f;
      },
      [a, e],
    ),
    c = e.options.bStandalone ? gn(4) : gn(3);
  e.options.bCreateHidden && (c |= 2), e.options.bAlwaysOnTop && (c |= 8192);
  let { popupObj: p, element: d } = mr(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: Kr.ContextMenuPopup + " client_chat_frame",
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
    (0, zt.useEffect)(() => {
      if (p)
        if (e.visible) {
          r.current && r.current.PositionMenu(),
            r.current && r.current.PositionPopupWindow();
          let f = e.options.bNoFocusWhenShown ? 2 : 1;
          e.TakeFocus(f);
        } else
          e.options.bRetainOnHide &&
            window.setTimeout(() => {
              p.window?.SteamClient.Window.HideWindow();
            }, 30);
    }, [p, e, e.visible]),
    Lp(p.window),
    zt.default.useEffect(() => {
      e.SetPopup(p);
    }, [e, p]),
    d
      ? xp.default.createPortal(
          (0, Ee.jsx)(ei, {
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
var lt = u(w());
var Fp = u(ht());
var bn = u(w());
var jt = u(w());
function Bp(t) {
  let [e, o] = jt.default.useState(!1),
    n = jt.default.useCallback(() => {
      Xe(t, "Window.IsWindowMaximized")
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
    jt.default.useEffect(n, [n, t]),
    us(t, "resize", n),
    Jr(t, ["window_moved"], n),
    e
  );
}
function Ip(t, e = 100) {
  let [o, n] = jt.default.useState(!1),
    r = jt.default.useCallback(() => n(!0), [n]),
    i = jt.default.useCallback(() => n(!1), [n]);
  return (
    jt.default.useEffect(() => {
      if (t)
        return (
          t.addEventListener("focus", r),
          t.addEventListener("blur", i),
          () => {
            t.removeEventListener("focus", r), t.removeEventListener("blur", i);
          }
        );
    }, [t, r, i]),
    ps(o, e)
  );
}
var Q = u(g());
function Pf(t) {
  let { popup: e, onMaximize: o, bOSX: n } = t,
    r = Bp(e),
    i = bn.useCallback(() => {
      o
        ? o()
        : Xe(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, o]);
  return (0, Q.jsx)(ea, {
    className: v(r ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: i,
    children: !n && (r ? (0, Q.jsx)(Zs, {}) : (0, Q.jsx)(Js, {})),
  });
}
function Sf(t) {
  let { popup: e, onMinimize: o, bOSX: n } = t,
    r = bn.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, Q.jsx)(ea, {
    className: "minimizeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, Q.jsx)($s, {}),
  });
}
function wf(t) {
  let { popup: e, onClose: o, bOSX: n } = t,
    r = bn.useCallback(() => {
      e && (Xe(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, Q.jsx)(ea, {
    className: "closeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, Q.jsx)(Mo, {}),
  });
}
function ea(t) {
  let { className: e, onClick: o, children: n } = t,
    r = bn.useCallback(
      (i) => {
        o && (i.stopPropagation(), o(i));
      },
      [o],
    );
  return (0, Q.jsx)("div", {
    className: v("title-area-icon", e),
    onClick: r,
    children: (0, Q.jsx)("div", {
      className: "title-area-icon-inner",
      children: n,
    }),
  });
}
function Np(t) {
  let {
      className: e,
      style: o,
      hideActions: n,
      hideClose: r,
      hideMin: i,
      hideMax: a,
      bOSX: s = Us(),
      bForceWindowFocused: l,
      onMinimize: c,
      onMaximize: p,
      onClose: d,
      extraActions: f,
      popup: b,
      children: M,
    } = t,
    T = Ip(b);
  return (0, Q.jsxs)("div", {
    className: v(
      "TitleBar",
      "title-area",
      s && "OSX",
      (T || l) && "WindowFocus",
      e,
    ),
    style: o,
    children: [
      (0, Q.jsx)("div", { className: "title-area-highlight" }),
      (0, Q.jsx)("div", { className: "title-area-children", children: M }),
      !n &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            f &&
              (0, Q.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: f,
              }),
            (0, Q.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !r && (0, Q.jsx)(wf, { popup: b, onClose: d, bOSX: s }),
                !a && (0, Q.jsx)(Pf, { popup: b, onMaximize: p, bOSX: s }),
                !i && (0, Q.jsx)(Sf, { popup: b, onMinimize: c, bOSX: s }),
              ],
            }),
          ],
        }),
    ],
  });
}
var No = u(g());
function Op(t) {
  let { Modal: e } = t,
    { name: o, modalProps: n, options: r } = e,
    i = De().ownerWindow,
    { popup: a, element: s } = mr(
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
        updateParamsBeforeShow: (p) => Mf(p, n, r, i),
        onClose: () => n.fnOnClose && n.fnOnClose(),
      },
    ),
    l = r?.bHideActions,
    c =
      typeof r?.nDragAreaHeight == "number"
        ? { height: r.nDragAreaHeight }
        : void 0;
  return s
    ? Fp.createPortal(
        (0, No.jsx)(Dp, {
          ownerWindow: a,
          children: (0, No.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: il,
            children: [
              (0, No.jsx)(Np, {
                hideMin: !0,
                hideMax: !0,
                popup: a,
                hideActions: l,
                style: c,
              }),
              (0, No.jsx)(Fo, {
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
function Mf(t, e, o, n) {
  let r,
    i,
    a = e.popupWidth || 500,
    s = e.popupHeight || 400,
    l;
  if (Z.IN_CLIENT && n?.SteamClient?.Browser?.GetBrowserID)
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
var ue = u(w()),
  Up = u(ht());
var _r = u(g());
function Wp(t) {
  let { ModalManager: e } = t,
    [o, n] = ue.useState(void 0),
    [r, i] = ue.useState(!0),
    a = ue.useRef(0),
    s = ue.useCallback(() => {
      ue.startTransition(() => {
        i(!0);
      });
    }, []);
  ue.useEffect(() => e.RegisterMeasureModalCallback(s).Unregister, [e, s]),
    ue.useLayoutEffect(() => {
      o ||
        ue.startTransition(() => {
          n(e.TakeMeasureModalRequest()), i(!1);
        });
    }, [e, o, r]);
  let l = ue.useCallback((c) => {
    a.current++,
      ue.startTransition(() => {
        n((p) => (p === c ? void 0 : p));
      });
  }, []);
  return o
    ? (0, _r.jsx)(Df, { onMeasureComplete: l, request: o }, a.current)
    : null;
}
function Df(t) {
  let [e, o] = ue.useState(),
    n = De().ownerWindow;
  return (
    ue.useLayoutEffect(() => {
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
    e ? Up.createPortal((0, _r.jsx)(yf, { ...t, elContainer: e }), e) : null
  );
}
function yf(t) {
  let { elContainer: e, onMeasureComplete: o, request: n } = t;
  return (
    ue.useEffect(() => {
      let r = !1,
        i = (a) => {
          r || (n.fnResults(a), o(n), (r = !0));
        };
      return Tf(e, n.promiseContentReady).then(i), () => i(void 0);
    }, [e, o, n]),
    (0, _r.jsx)(ge, { children: n.rctToMeasure })
  );
}
async function Tf(t, e) {
  e && (await e);
  let o = document;
  Z.IN_STEAMUI && o.fonts && (await o.fonts.ready);
  let n = t.getBoundingClientRect(),
    r = Math.ceil(n.height),
    i = Math.ceil(n.width);
  return { height: r, width: i };
}
var gr = class t {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${t.sm_lastKey++}`;
    }
  },
  no = class extends gr {
    element;
    ModalUpdatedCallback = new tt();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  oo = class extends gr {
    m_OnElementReadyCallbacks = new tt();
    m_OnActiveModalCallbacks = new tt();
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
_([h], oo.prototype, "RefModalElement", 1);
var fr = class extends no {
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
var Hp = u(w());
var vn = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new tt();
    m_OnModalShownCallbacks = new tt();
    m_OnModalHiddenCallbacks = new tt();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new tt();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new tt();
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
      let o = new no(e);
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
      let e = new oo();
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
        a = new fr(
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
  ta = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let o = this.m_mapModalManager.get(e);
      return (
        o ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (o = new vn()),
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
  Cn = new ta();
function Oo(t) {
  return Cn.GetModalManager(t);
}
var oa = "kNiAxGG9vCI-";
var Gp = "_3G8oCr9ck-g-";
var fe = u(w()),
  qp = u(ht());
var zp = u(w());
var ro = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var na = u(g()),
  qt = class extends zp.Component {
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
          onNoSpace: f,
          bTopmost: b,
          ...M
        } = this.props,
        T = Object.assign({ left: this.state.x, top: this.state.y }, r),
        B = !o || o.visible;
      return (0, na.jsx)("div", {
        className: v(ro.HoverPositionOuter, b && ro.HoverAboveModal),
        children: (0, na.jsx)("div", {
          ...M,
          className: v(
            ro.HoverPosition,
            B && this.state.hoverPositionReady && ro.Ready,
            this.m_bNoSpace && ro.NoSpace,
            i && ro.EnablePointerEvents,
            n,
          ),
          style: T,
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
          direction: f = "right",
          nBodyAlignment: b = 0.5,
        } = this.props,
        {
          nLeft: M,
          nTop: T,
          nOverflow: B,
          nLateralOverflow: le,
        } = Vp(f, b, d, l, c, n.innerWidth, n.innerHeight);
      if (B > (this.props.nAllowOffscreenPx ?? 10) && !p) {
        let pe = Af(this.props.direction ?? "right"),
          {
            nLeft: Ce,
            nTop: be,
            nOverflow: ce,
            nLateralOverflow: It,
          } = Vp(pe, b, d, l, c, n.innerWidth, n.innerHeight);
        if (
          (ce < B && ((f = pe), (M = Ce), (T = be), (B = ce), (le = It)),
          B > (this.props.nAllowOffscreenPx ?? 10))
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
        ([T, M] = xf(
          this.props.nMaxLateralMoveOnScreen,
          le,
          f ?? "right",
          T,
          M,
        ));
      let X = null;
      switch (f) {
        case "left":
          X = i;
          break;
        case "right":
          X = r;
          break;
        case "top":
          X = s;
          break;
        case "bottom":
          X = a;
          break;
      }
      X && X.setAttribute("style", ""),
        M != this.state.x && this.setState({ x: M }),
        T != this.state.y && this.setState({ y: T }),
        this.state.hoverPositionReady ||
          this.setState({ hoverPositionReady: !0 });
    }
  };
es(qt, "defaultProps", {
  direction: "right",
  nBodyAlignment: 0.5,
  nAllowOffscreenPx: 10,
  nBodyDistance: 8,
  nMaxLateralMoveOnScreen: void 0,
}),
  _([h], qt.prototype, "bindHover", 1),
  (qt = _([Ht], qt));
function Af(t) {
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
function Vp(t, e, o, n, r, i, a) {
  let s = i,
    l = a,
    c = 0,
    p = 0,
    d,
    f,
    b,
    M;
  switch (t) {
    case "right":
      (d = n.right + o),
        (f = hr(n.top, n.height, r.height, e)),
        (b = Math.max(0, d + r.width - s)),
        (M = [Math.max(0, c - f), Math.max(0, f + r.height - l)]);
      break;
    case "left":
      (d = n.left - o - r.width),
        (f = hr(n.top, n.height, r.height, e)),
        (b = Math.max(0, p - d)),
        (M = [Math.max(0, c - f), Math.max(0, f + r.height - l)]);
      break;
    case "bottom":
      (d = hr(n.left, n.width, r.width, e)),
        (f = n.bottom + o),
        (b = Math.max(0, f + r.height - l)),
        (M = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "top":
      (d = hr(n.left, n.width, r.width, e)),
        (f = n.top - o - r.height),
        (b = Math.max(0, c - f)),
        (M = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "overlay":
      (d = n.left), (f = n.top), (b = 0), (M = [0, 0]);
      break;
    case "overlay-center":
      (d = n.left + 0.5 * n.width - 0.5 * r.width),
        (f = n.top + 0.5 * n.height - 0.5 * r.height),
        (b = 0),
        (M = [0, 0]);
      break;
  }
  return { nLeft: d, nTop: f, nOverflow: b, nLateralOverflow: M };
}
function hr(t, e, o, n) {
  return Math.max(0, Math.min(1, n)) * (e - o) + t;
}
function xf(t, e, o, n, r) {
  let i = Math.max(e[0], e[1]);
  t !== void 0 && (i = Math.min(t, i)), (i = Math.max(0, i));
  let a = e[0] > e[1] ? i : -i;
  return o === "left" || o === "right" ? (n += a) : (r += a), [n, r];
}
var jp = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var We = u(g()),
  Yp = fe.createContext({}),
  Ef = () => fe.useContext(Yp);
function br(t) {
  let [e, o] = fe.useState(null),
    n = fe.useMemo(() => ({ targetElement: e }), [e]);
  return (0, We.jsxs)(Yp.Provider, {
    value: n,
    children: [(0, We.jsx)("div", { ref: o }), t.children],
  });
}
function vr(t) {
  let { divProps: e, tooltipProps: o } = Qp({
    ...t,
    toolTipContent: t.toolTipContent
      ? (0, We.jsx)(Bf, { children: Lf(t.toolTipContent) })
      : null,
  });
  return (0, We.jsxs)(bt, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, We.jsx)(Jp, { ...o }), t.children],
  });
}
function Xp(t) {
  let { divProps: e, tooltipProps: o } = Qp(t);
  return (0, We.jsxs)(bt, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, We.jsx)(Jp, { ...o }), t.children],
  });
}
function Qp(t) {
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
      usePointerEvents: f,
      children: b,
      onMouseLeave: M,
      ...T
    } = t,
    B = {
      direction: r,
      nBodyAlignment: i,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: l,
      className: c,
      bTopmost: d,
    },
    [le, X] = fe.useState(!1),
    [pe, Ce] = fe.useState(),
    be = fe.useCallback((Nt) => {
      X(!0), Ce(Nt.currentTarget);
    }, []),
    ce = fe.useCallback(() => {
      X(!1);
    }, []),
    It = {
      active: le && !n,
      target: pe,
      nDelayShowMS: o,
      hoverPositionProps: B,
      children: e,
    },
    $ = { ...T };
  return (
    f
      ? (($.onPointerEnter = be), ($.onPointerLeave = ce))
      : (($.onMouseEnter = be), ($.onMouseLeave = ce)),
    {
      divProps: $,
      stateHandlers: { setTarget: Ce, setHovered: X },
      tooltipProps: It,
    }
  );
}
function Lf(t) {
  return typeof t == "string" ? E(t) : t;
}
function Bf(t) {
  return (0, We.jsx)("div", {
    ...t,
    className: v(jp.TextToolTip, t.className),
  });
}
function Jp(t) {
  let {
      active: e,
      target: o,
      nDelayShowMS: n = 300,
      hoverPositionProps: r,
      children: i,
    } = t,
    [a, s] = fe.useState(e),
    l = Ef();
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
  return qp.createPortal(
    (0, We.jsx)(qt, { target: o, ...r, children: i }),
    c ?? o.ownerDocument.body,
  );
}
var Y = u(g());
function If(t) {
  lt.useEffect(() => {
    if (t)
      return (
        document.body.classList.add(oa),
        () => document.body.classList.remove(oa)
      );
  }, [t]);
}
function Nf(t) {
  let e = De().ownerWindow,
    o = Ft(),
    n = lt.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  lt.useEffect(() => t.RegisterOverlay(o), [t, o]),
    lt.useEffect(() => t.RegisterOnModalShownCallback(n).Unregister, [t, n]);
}
function Ff(t, e) {
  return ls(
    (o) => {
      if (!o || !e) return;
      let n = o.ownerDocument.defaultView;
      return Cn.RegisterModalManager(t, n);
    },
    [t],
  );
}
function $p(t) {
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
  If(c), Nf(e);
  let d = Ff(e, o),
    f = null,
    b = !i;
  return (
    l && l.length
      ? (f = l.map((M) => {
          let T = M == p,
            B = {
              key: M.key,
              active: T,
              rctActiveContextMenus: T && i ? r : void 0,
            };
          return M instanceof no
            ? (0, Y.jsx)(Uf, { ...B, modal: M, Component: n ?? Wf })
            : M instanceof oo
              ? (0, Y.jsx)(Of, { ...B, modal: M, bUseDialogElement: i })
              : void 0;
        }))
      : ((b = !0), (a = { ...a, display: "none" })),
    (0, Y.jsxs)(Y.Fragment, {
      children: [
        (0, Y.jsxs)(or, {
          children: [
            (0, Y.jsxs)("div", {
              ...s,
              style: a,
              ref: d,
              className: v(s.className, "FullModalOverlay"),
              children: [
                (0, Y.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                f,
              ],
            }),
            b && r,
          ],
        }),
        (0, Y.jsx)(Wp, { ModalManager: e }),
        (0, Y.jsx)(Hf, { ModalManager: e }),
      ],
    })
  );
}
function Of(t) {
  let {
    modal: e,
    rctActiveContextMenus: o,
    active: n,
    bUseDialogElement: r,
  } = t;
  lt.useEffect(() => {
    if (n)
      return (
        e.SetActive(n),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, n]);
  let i = (0, Y.jsxs)(ge, {
    children: [
      (0, Y.jsx)("div", {
        className: v("ModalOverlayContent", n ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      o,
    ],
  });
  return r ? (0, Y.jsx)(Zp, { active: n, children: i }) : i;
}
function Uf(t) {
  let { modal: e, active: o, rctActiveContextMenus: n, Component: r } = t,
    i = Ft();
  return (
    Ot(e.ModalUpdatedCallback, i),
    (0, Y.jsx)(ge, {
      children: (0, Y.jsxs)(r, {
        className: v("ModalOverlayContent", o ? "active" : "inactive"),
        active: o,
        modalKey: e.key,
        children: [n, e.element],
      }),
    })
  );
}
function Wf(t) {
  let { className: e, active: o, children: n } = t;
  return (0, Y.jsx)(Zp, {
    active: o,
    children: (0, Y.jsx)(br, {
      children: (0, Y.jsx)("div", { className: e, tabIndex: -1, children: n }),
    }),
  });
}
function Zp(t) {
  let { active: e, children: o } = t,
    n = lt.useRef(null);
  return (
    lt.useEffect(() => {
      let r = n.current;
      if (!(!e || !r)) return r.showModal(), () => r.close();
    }, [e]),
    (0, Y.jsx)("dialog", {
      ref: n,
      className: Gp,
      onCancel: (r) => r.preventDefault(),
      children: t.children,
    })
  );
}
function Hf(t) {
  let { ModalManager: e } = t,
    o = Ft();
  return (
    Ot(e.LegacyPopupModalCountChangedCallbacks, o),
    (0, Y.jsx)(Y.Fragment, {
      children: e.legacy_popup_modals.map((n) =>
        (0, Y.jsx)(Op, { Modal: n }, n.key),
      ),
    })
  );
}
var io = u(g()),
  ra = Le.createContext({}),
  Fo = Le.memo(function (e) {
    let {
        children: o,
        bRenderOverlayAtRoot: n,
        refModalManager: r,
        DialogWrapper: i,
        bUseDialogElement: a = !0,
        ContextMenuComponent: s = Ep,
        refContextMenuManager: l,
        browserInfo: c,
        bUsePopups: p,
        bOnlyPopups: d,
        bCenterPopupsOnWindow: f,
        bRegisterManagersWithWindow: b = !0,
        ...M
      } = e,
      T = Le.useRef();
    T.current || (T.current = new vn());
    let B = (0, io.jsx)($p, {
      ...M,
      DialogWrapper: i,
      ModalManager: T.current,
      bUseDialogElement: a,
      bRegisterModalManager: b,
      rctActiveContextMenus: (0, io.jsx)(s, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (B = Kp.createPortal(B, document.body)),
      cs(r, T.current),
      p !== void 0 && T.current?.SetUsePopups(p),
      f !== void 0 && T.current?.SetCenterPopupsOnWindow(f),
      d !== void 0 && T.current?.SetOnlyPopups(d),
      T.current.SetBrowserInfo(c);
    let le = Le.useMemo(
      () => ({ ModalManager: T.current, DialogWrapper: i }),
      [i],
    );
    return (0, io.jsx)(ra.Provider, {
      value: le,
      children: (0, io.jsxs)(Tp, {
        refContextMenuManager: l,
        bRegisterMenuManager: b,
        children: [(0, io.jsx)(ge, { children: B }), e.children],
      }),
    });
  });
function Io() {
  return Le.useContext(ra).ModalManager;
}
function ed() {
  return Le.useContext(ra).DialogWrapper;
}
function Lp(t) {
  let e = Io();
  Le.useEffect(() => {
    if (t) return Cn.RegisterModalManager(e, t);
  }, [t, e]);
}
var om = u(w());
var Yt = u(w());
var Cr = u(w());
var Be = u(g()),
  ia = Cr.createContext({}),
  Gf = () => Cr.useContext(ia);
function ao(t) {
  let o = Gf().ModalPosition ?? Vf;
  return (0, Be.jsx)(o, { ...t });
}
function Vf(t) {
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
      a && (Gn(a, a.ownerDocument.activeElement) || a.focus());
    }));
  let n = ["ModalPosition"];
  t.className && n.push(t.className),
    t.bDestructiveWarning && n.push("Destructive");
  let r = t.renderContent || ((a) => (0, Be.jsx)("div", { ...a })),
    i = (0, Be.jsxs)(Be.Fragment, {
      children: [
        !t.hideTopBar &&
          (0, Be.jsx)("div", { className: "ModalPosition_TopBar" }),
        t.onEscKeypress &&
          !t.bHideCloseIcon &&
          (0, Be.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, Be.jsx)("div", {
              className: "closeButton",
              onClick: (a) => {
                a.stopPropagation(), t.onEscKeypress();
              },
              children: (0, Be.jsx)(Mo, {}),
            }),
          }),
        (0, Be.jsx)(ge, { children: t.children }),
      ],
    });
  return (0, Be.jsx)("div", {
    className: n.join(" "),
    ...e,
    ref: o,
    children: r({ className: "ModalPosition_Content", children: i }),
  });
}
var so = u(w()),
  od = u(ht());
var aa = u(g());
function nd(t) {
  let { active: e, children: o } = t,
    n = Io() || Oo(window),
    r = ed(),
    [i, a] = so.useState(null),
    [s, l] = so.useState(!1),
    c = so.useRef();
  if (
    (so.useEffect(() => {
      if (e) {
        let d = n.ShowPortalModal(),
          f = d.OnElementReadyCallbacks.Register(a),
          b = d.OnModalActiveCallbacks.Register(l);
        return (
          (c.current = d.key),
          () => {
            a(null), l(!1), d.Close(), f.Unregister(), b.Unregister();
          }
        );
      } else return;
    }, [n, e]),
    !i || !e)
  )
    return null;
  let p = (0, aa.jsx)(br, { children: o });
  return (
    r && (p = (0, aa.jsx)(r, { active: s, modalKey: c.current, children: p })),
    od.createPortal(p, i)
  );
}
var Rn = {
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
var ye = u(g());
function rd(t) {
  let { managerOverride: e } = t,
    o = dr(),
    n = e ?? o,
    r = Ft();
  return (
    Ot(n.OnMenusChanged, r),
    (0, ye.jsx)(nd, {
      active: !!n.ActiveMenu,
      children: (0, ye.jsx)(zf, { ActiveMenu: n.ActiveMenu }),
    })
  );
}
function zf(t) {
  let { ActiveMenu: e } = t,
    o = Yt.useCallback(() => {
      e?.OnCancel();
    }, [e]);
  Yt.useEffect(() => () => e?.Hide(), [e]);
  let n = [],
    r = null;
  Ys(() => {
    for (let a = e; a && a.visible; a = a.submenu)
      n.push((0, ye.jsx)(jf, { instance: a }, a.key)), (r = a.label);
  });
  let i = Yt.useCallback(
    (a) => {
      a.currentTarget == a.target && o();
    },
    [o],
  );
  return (0, ye.jsx)(ao, {
    padding: "none",
    children: (0, ye.jsxs)("div", {
      onClick: i,
      className: v("BasicUIContextMenu", Rn.BasicContextMenuModal),
      children: [
        r &&
          (0, ye.jsx)(ye.Fragment, {
            children: (0, ye.jsx)("div", {
              className: Rn.BasicContextMenuHeader,
              children: r,
            }),
          }),
        (0, ye.jsx)(F, {
          className: Rn.BasicContextMenuContainer,
          onCancelButton: o,
          onClick: i,
          role: "listbox",
          children: n,
        }),
      ],
    }),
  });
}
function jf(t) {
  let { instance: e } = t,
    o = rt(),
    n = Yt.useCallback(() => {
      o && xe.PlayNavSound(25);
    }, [o]),
    r = Yt.useMemo(
      () => ({
        instance: e,
        styles: Rn,
        presentation: 1,
        callbacks: { onDisabledItemSelected: n },
      }),
      [e, n],
    );
  return (0, ye.jsx)(ge, {
    children: (0, ye.jsx)(Qn.Provider, { value: r, children: e.ReactElement }),
  });
}
var ze = u(w());
var ca = u(w());
var Rr = u(g());
var la = class {
  m_Promise;
  m_Value = void 0;
  constructor(e) {
    Ct(this), (this.promise = e);
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
_([vt], la.prototype, "m_Value", 2);
function He(t) {
  return ca.forwardRef(function (o, n) {
    return (0, Rr.jsx)("div", { ...o, className: v(t, o.className), ref: n });
  });
}
function id(t) {
  if (typeof t != "string") return NaN;
  let o = !t.includes("ms") && t.includes("s"),
    n = Number.parseFloat(t);
  return o && (n *= 1e3), n;
}
var ad = "me1BHzZX9A0-";
var Pr = u(g());
function yt(t) {
  let e = t.customTooltip ? Xp : vr;
  return (0, Pr.jsxs)(e, {
    toolTipContent: t.tooltip,
    className: v(ad, "HelperTooltip", t.className),
    children: [" ", (0, Pr.jsx)(Ks, {})],
  });
}
var ua = u(w()),
  Uo = ua.default.createContext({}),
  pa = () => ua.default.useContext(Uo);
function Ge(t, e) {
  return pa()[t] ?? e;
}
var Ze = {
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
var lo = u(g());
function sd(t) {
  let e = Ge("ToggleControl", Yf);
  return (0, lo.jsx)(e, { ...t });
}
function Yf(t) {
  let { value: e, onChange: o, disabled: n } = t;
  return (0, lo.jsxs)("div", {
    className: v(Ze.Toggle, n && Ze.Disabled),
    onClick: () => !n && o && o(!e),
    children: [
      (0, lo.jsx)("div", { className: Ze.ToggleRail }),
      (0, lo.jsx)("div", {
        className: v(Ze.ToggleRail, Ze.Highlight, e ? Ze.On : Ze.Off),
      }),
      (0, lo.jsx)("div", { className: v(Ze.ToggleSwitch, e ? Ze.On : Ze.Off) }),
    ],
  });
}
var x = u(g());
function wr(t) {
  return ze.forwardRef(function (o, n) {
    return (0, x.jsx)(F, { ...o, className: v(t, o.className), ref: n });
  });
}
var Mr = He("DialogHeader"),
  ey = He("DialogSubHeader"),
  ty = He("SettingsDialogSubHeader"),
  ld = He("DialogFooter"),
  Xf = He("DialogLabel _DialogLayout"),
  cd = He("DialogBodyText"),
  oy = He("DialogBody"),
  ud = wr("DialogBody"),
  ny = He("DialogInnerBody"),
  ry = He("DialogControlsSection"),
  iy = He("DialogControlsSectionHeader"),
  Qf = wr("DialogTwoColLayout _DialogColLayout"),
  Jf = wr("DialogThreeColLayout _DialogColLayout"),
  ay = wr("DialogTwoThirdColLayout _DialogColLayout"),
  sy = He("DialogColumn _DialogLayout");
function da(t) {
  let e = Ge("Content", $f);
  return (0, x.jsx)(e, { ...t });
}
function $f(t) {
  let { children: e, bCenterVertically: o, refElem: n, ...r } = t,
    i = "DialogContent _DialogLayout" + (t.className ? " " + t.className : "");
  return (
    o && (i += " _DialogCenterVertically"),
    (0, x.jsx)("div", {
      ...r,
      ref: n,
      className: i,
      children: (0, x.jsx)("div", {
        className: "DialogContent_InnerWidth",
        children: e,
      }),
    })
  );
}
var Sr = class extends ze.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, x.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
_([h], Sr.prototype, "OnSubmit", 1);
function pd(t) {
  let { classNameContent: e, bCenterVertically: o, ...n } = t;
  return (0, x.jsx)(da, {
    className: e,
    bCenterVertically: o,
    children: (0, x.jsx)(Sr, { ...n }),
  });
}
function dd(t) {
  let { label: e, tooltip: o, className: n, children: r } = t;
  return (0, x.jsxs)("label", {
    className: v("DialogInputLabelGroup", "_DialogLayout", n),
    children: [
      e &&
        (0, x.jsxs)(Xf, {
          children: [e, " ", o && (0, x.jsx)(yt, { tooltip: o }), " "],
        }),
      r,
    ],
  });
}
var wn = ze.forwardRef(function (e, o) {
    let n = pa(),
      { svgicon: r, ...i } = e,
      a = v(
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
    return (0, x.jsxs)(Wt, {
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
  Sn = ze.forwardRef(function (e, o) {
    return (0, x.jsx)(wn, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: o,
      className: v(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  Ve = ze.forwardRef(function (e, o) {
    return (0, x.jsx)(wn, {
      type: "button",
      ...e,
      ref: o,
      className: v(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  ly = ze.forwardRef(function (e, o) {
    return (0, x.jsx)(wn, {
      type: "button",
      ...e,
      ref: o,
      className: v(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  cy = ze.forwardRef(function (e, o) {
    return (0, x.jsx)(wn, {
      type: "button",
      ...e,
      ref: o,
      className: v(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  uy = ze.forwardRef(function (e, o) {
    return (0, x.jsx)(wn, {
      type: "button",
      ...e,
      ref: o,
      className: v(e.className, "TextButton"),
    });
  });
function md(t) {
  return (0, x.jsxs)(Qf, {
    className: t.className,
    children: [
      (0, x.jsxs)(Sn, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        autoFocus: t.focusButton == "primary",
        children: [t.strOKText || E("#Button_Confirm"), " "],
      }),
      (0, x.jsx)(Ve, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        autoFocus: t.focusButton == "secondary",
        children: t.strCancelText || E("#Button_Cancel"),
      }),
    ],
  });
}
function _d(t) {
  let e = t.bOKDisabled ? Ve : Sn,
    o = t.bOKDisabled ? Sn : Ve;
  return (0, x.jsxs)(Jf, {
    children: [
      (0, x.jsxs)(e, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        children: [t.strOKText || E("#Button_Confirm"), " "],
      }),
      (0, x.jsxs)(o, {
        onClick: t.onUpdate,
        disabled: t.bUpdateDisabled,
        children: [t.strUpdateText || E("#Button_Update"), " "],
      }),
      (0, x.jsx)(Ve, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        children: t.strCancelText || E("#Button_Cancel"),
      }),
    ],
  });
}
var Xt = class extends ze.Component {
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
      controlled: f,
      ...b
    } = this.props;
    return {
      ...b,
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
_([h], Xt.prototype, "Toggle", 1),
  _([h], Xt.prototype, "KeyDown", 1),
  _([h], Xt.prototype, "SetChecked", 1);
var py = ze.forwardRef(function (e, o) {
    let n = Ge("ToggleField", Pn);
    return (0, x.jsx)(n, { ref: o, ...e });
  }),
  Pn = class extends Xt {
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
        (0, x.jsxs)("div", {
          className: e,
          tabIndex: this.props.tabIndex || 0,
          onKeyDown: this.OnOffKeyDown,
          children: [
            (0, x.jsxs)("div", {
              className: "displayColumn alignSelfCenter",
              children: [
                (0, x.jsxs)("div", {
                  className: "DialogToggle_Label",
                  children: [
                    (0, x.jsx)("span", { children: this.props.label }),
                    this.props.tooltip &&
                      (0, x.jsx)(yt, { tooltip: this.props.tooltip }),
                  ],
                }),
                this.props.description &&
                  (0, x.jsx)("div", {
                    className: "DialogToggle_Description",
                    children: this.props.description,
                  }),
                this.props.children,
              ],
            }),
            this.props.useToggleRail
              ? (0, x.jsx)("div", {
                  className: "DialogToggleField_NewUIContainer",
                  children: (0, x.jsx)(sd, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, x.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, x.jsxs)(F, {
                    className: "DialogToggleField_OptionPanel",
                    onOKButton: this.Toggle,
                    children: [
                      (0, x.jsx)("div", {
                        className:
                          "DialogToggleField_Option Off" +
                          (this.checked ? "" : " Active"),
                        children: E("#Dialog_Off"),
                      }),
                      (0, x.jsx)("div", {
                        className:
                          "DialogToggleField_Option On" +
                          (this.checked ? " Active" : ""),
                        children: E("#Dialog_On"),
                      }),
                    ],
                  }),
                }),
          ],
        })
      );
    }
  };
_([h], Pn.prototype, "OnOffKeyDown", 1),
  _([h], Pn.prototype, "OnNewUIToggle", 1);
var ct = u(w());
var Dr = class extends _l {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, o, n) {
    super(fs(e.ref.current), n),
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
var N = u(g()),
  Zf = ct.forwardRef(function (e, o) {
    let n = Ge("InputElement", So);
    return (0, N.jsx)(n, { ...e, ref: o });
  }),
  Qt = class Qt extends ct.PureComponent {
    m_CopiedAnimation;
    ref = ct.createRef();
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
          this.props.mustBeURL == !0 && !Qt.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !Qt.validateEmail(this.m_elInput?.value),
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
            (this.m_CopiedAnimation = new Dr(
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
          mustBeEmail: f,
          focusOnMount: b,
          tooltip: M,
          inlineControls: T,
          maxChars: B,
          ...le
        } = this.props,
        X =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (le.className ? " " + le.className : ""),
        pe = "copiedAnimation",
        Ce = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (pe = "copiedAnimation animationPlaying"),
        Ce && (pe = "copiedAnimation animationComplete");
      let be = {};
      this.state.m_CopiedYPos !== void 0 &&
        (be.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let ce = (0, N.jsxs)(ct.Fragment, {
        children: [
          (0, N.jsxs)(F, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, N.jsx)(Zf, {
                type: "text",
                ...le,
                className: X,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              r &&
                (0, N.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, N.jsx)(Ve, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: E("#Button_Copy"),
                    }),
                    (0, N.jsx)("div", {
                      style: be,
                      className: pe,
                      children: E("#Button_Copied"),
                    }),
                  ],
                }),
              (a || (i && le.value)) &&
                (0, N.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, N.jsx)(Mo, {}),
                }),
              T,
            ],
          }),
          o &&
            (0, N.jsx)("div", {
              className: "DialogLabelExplainer",
              children: o,
            }),
        ],
      });
      return e
        ? (0, N.jsx)("div", {
            className:
              "DialogInputLabelGroup _DialogLayout DialogRequirementLabel",
            children: (0, N.jsxs)("label", {
              children: [
                (0, N.jsxs)("div", {
                  className: "DialogLabel",
                  children: [
                    e,
                    " ",
                    this.props.tooltip &&
                      (0, N.jsx)(yt, { tooltip: this.props.tooltip }),
                    (0, N.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                ce,
                this.state.m_bNumberBelowMinRange
                  ? (0, N.jsxs)("div", {
                      children: [" ", E("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, N.jsxs)("div", {
                      children: [" ", E("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, N.jsxs)("div", {
                      children: [" ", E("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, N.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, N.jsxs)("div", {
                      children: [" ", E("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, N.jsxs)("div", {
                      children: [" ", E("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, N.jsxs)("div", {
                      children: [
                        " ",
                        Ws("#Input_Error_TooManyCharacters", B),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : ce;
    }
  };
_([h], Qt.prototype, "OnInputRef", 1),
  _([h], Qt.prototype, "OnChanged", 1),
  _([h], Qt.prototype, "OnCopyClick", 1),
  _([h], Qt.prototype, "OnClearClick", 1);
var co = Qt,
  Mn = class extends co {
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
        fnStrValidateURL: f,
        mustBeEmail: b,
        focusOnMount: M,
        tooltip: T,
        inlineControls: B,
        className: le,
        children: X,
        ...pe
      } = this.props;
      return (0, N.jsx)("div", {
        className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
        children: (0, N.jsxs)("label", {
          children: [
            e && (0, N.jsx)("div", { className: "DialogLabel", children: e }),
            (0, N.jsx)("div", {
              className: v(
                "_DialogInputContainer",
                "DialogTextInputBase",
                this.m_bFocused && "Active",
              ),
              onClick: this.OnBackgroundClick,
              children: (0, N.jsxs)(F, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  ct.Children.map(X, (Ce, be) =>
                    (0, N.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: Ce,
                      },
                      be,
                    ),
                  ),
                  (0, N.jsx)(So, {
                    type: "text",
                    ...pe,
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
              (0, N.jsx)("div", {
                className: "DialogLabelExplainer",
                children: o,
              }),
          ],
        }),
      });
    }
  };
_([h], Mn.prototype, "OnBackgroundClick", 1),
  _([h], Mn.prototype, "OnInputFocus", 1),
  _([h], Mn.prototype, "OnInputBlur", 1);
var gd = u(w());
var ut = u(g()),
  fd = (t, e) =>
    "" + (t != null ? Number.parseFloat(t.toFixed(3)) : null) + (e ?? "");
var Tt = class extends gd.Component {
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
      s = this.props.renderValue ?? fd;
    return (0, ut.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        n &&
          (0, ut.jsxs)("div", {
            className: "DialogLabel",
            children: [n, !!i && (0, ut.jsx)(yt, { tooltip: i })],
          }),
        (0, ut.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, ut.jsx)("div", { className: "DialogSlider_Value", style: e }),
            (0, ut.jsx)("div", { className: "DialogSlider_Grabber", style: o }),
          ],
        }),
        this.props.showValue &&
          (0, ut.jsx)("div", {
            className: "DialogLabelExplainer",
            children: s(this.props.value, this.props.valueSuffix),
          }),
        r &&
          (0, ut.jsx)("div", {
            className: "DialogLabelExplainer",
            children: r,
          }),
      ],
    });
  }
};
_([h], Tt.prototype, "OnMouseDown", 1),
  _([h], Tt.prototype, "OnMouseMove", 1),
  _([h], Tt.prototype, "OnMouseUp", 1),
  _([h], Tt.prototype, "OnTouchStart", 1),
  _([h], Tt.prototype, "OnTouchMove", 1),
  _([h], Tt.prototype, "OnTouchEnd", 1),
  _([h], Tt.prototype, "OnKeyDown", 1);
var hd = u(w());
var eh = u(g()),
  Kf = { setValue: () => {} },
  Hy = hd.default.createContext(Kf);
var Se = u(w());
var Dn = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var J = u(g());
function kt(t) {
  return typeof t == "object" && "data" in t;
}
function uo(t) {
  return typeof t == "object" && "bIsSeparator" in t;
}
function dt(t) {
  return typeof t == "object" && "options" in t;
}
function _a(t, e) {
  if (t === e) return !0;
  if (!Array.isArray(t) || !Array.isArray(e) || t.length != e.length) return !1;
  for (let o = 0; o < t.length; o++) if (!ga(t[o], e[o])) return !1;
  return !0;
}
function ga(t, e) {
  return t == null || e == null
    ? t == e
    : uo(t) && uo(e)
      ? !0
      : !(
          uo(t) ||
          uo(e) ||
          t.label !== e.label ||
          t.tooltip !== e.tooltip ||
          dt(t) != dt(e) ||
          (dt(t) && dt(e) && !_a(t.options, e.options)) ||
          (kt(t) && kt(e) && t.data !== e.data)
        );
}
function yr(t, e) {
  if (t != null)
    for (let o = 0; o < t.length; o++) {
      let n = t[o];
      if (kt(n) && n.data === e) return n;
      if (dt(n)) {
        let r = yr(n.options, e);
        if (r != null) return r;
      }
    }
}
function th(t) {
  let e = Ge("DropDownField", oh);
  return (0, J.jsx)(e, { ...t });
}
function oh(t) {
  let {
    label: e,
    tooltip: o,
    strClassName: n,
    dropDownControlRef: r,
    ...i
  } = t;
  return (0, J.jsx)(dd, {
    label: e,
    tooltip: o,
    className: n,
    children: (0, J.jsx)(pt, { menuLabel: e, ...i, ref: r }),
  });
}
var nh = Se.forwardRef(function (e, o) {
    return (0, J.jsxs)(Wt, {
      focusable: e.focusable,
      className: v(e.className, "DialogDropDown", "_DialogInputContainer", {
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
      role: e.role ?? "combobox",
      "aria-controls": e["aria-controls"],
      "aria-expanded": e.opened,
      children: [
        e.children,
        !e.disabled &&
          (0, J.jsx)("div", {
            className: v(e.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, J.jsx)(Qs, {}),
          }),
      ],
    });
  }),
  pt = class extends Se.Component {
    static contextType = Uo;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: yr(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let o = yr(this.props.rgOptions, e);
      ga(o, this.value) || this.setState({ value: o });
    }
    get value() {
      return this.props.controlled
        ? yr(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, o, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        o.bOpened !== this.state.bOpened ||
        !_a(this.props.rgOptions, e.rgOptions) ||
        !ga(o.value, this.value)
      )
        return !0;
      let r = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let i of r) if (e[i] !== this.props[i]) return !0;
      return !1;
    }
    componentDidUpdate(e, o) {
      Wn(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let n = !_a(e.rgOptions, this.props.rgOptions),
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
      (this.m_iMenuInstance = on(
        (0, J.jsx)(rh, {
          rgOptions: this.props.rgOptions,
          onValueSelected: this.OnValueSelected,
          onCancel: n,
          selectedValue: this.value?.data,
          strDropDownMenuCtnClass: this.props.strDropDownMenuCtnClass,
          strDropDownItemClassName: this.props.strDropDownItemClassName,
          id: `dropdownmenu_${this.m_iMenuInstance?.key}`,
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
      vd(e, this.props.rgOptions.filter(kt), this.value?.data, (o) =>
        this.OnValueSelected(void 0, o),
      );
    }
    render() {
      let e = (0, J.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: this.value?.label ?? this.props.strDefaultLabel,
        }),
        o =
          this.props.renderButtonValue != null
            ? this.props.renderButtonValue(e)
            : e,
        n = this.props.focusable ?? !0,
        r = this.props.renderButton || this.context.DropDownControlButton || nh;
      return (0, J.jsx)(r, {
        focusable: n,
        disabled: this.props.disabled ?? !1,
        opened: this.state.bOpened,
        onClick: this.props.disabled ? void 0 : this.ToggleMenu,
        onKeyDown: this.props.disabled ? void 0 : this.OnKeyDown,
        tabIndex: this.props.tabIndex ?? (n ? 0 : void 0),
        ref: this.OnInputRef,
        className: this.props.strDropDownButtonClassName,
        arrowClassName: this.props.arrowClassName,
        role: "combobox",
        "aria-controls": this.m_iMenuInstance
          ? `dropdownmenu_${this.m_iMenuInstance.key}`
          : void 0,
        children: o,
      });
    }
  };
_([h], pt.prototype, "OnInputRef", 1),
  _([h], pt.prototype, "ToggleMenu", 1),
  _([h], pt.prototype, "OnValueSelected", 1),
  _([h], pt.prototype, "ShowMenu", 1),
  _([h], pt.prototype, "HideMenu", 1),
  _([h], pt.prototype, "OnKeyDown", 1);
var bd = Se.createContext(null);
function rh(t) {
  let e = Ge("DropDownMenu", ih);
  return (0, J.jsx)(bd.Provider, {
    value: {},
    children: (0, J.jsx)(e, { ...t }),
  });
}
function vd(t, e, o, n) {
  let r;
  if (t.key === "ArrowDown")
    r = (e.findIndex((a) => a.data === o) + 1) % e.length;
  else if (t.key === "ArrowUp") {
    let i = e.findIndex((a) => a.data === o);
    r = i <= 0 ? e.length - 1 : i - 1;
  }
  r !== void 0 && (n(e[r]), t.preventDefault());
}
function ih(t) {
  let {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      selectedValue: r,
    } = t,
    [i, a] = Se.useState(r),
    s = Se.useMemo(() => e.filter(kt), [e]),
    l = Se.useCallback(
      (c) => {
        vd(c, s, i, (p) => a(p.data));
      },
      [i, s],
    );
  return (0, J.jsx)("div", {
    className: v(
      Dn.DialogDropDownMenu,
      "_DialogInputContainer",
      t.strDropDownMenuCtnClass,
    ),
    onKeyDown: l,
    children: (0, J.jsx)(Cd, {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: i,
      setActiveValue: a,
    }),
  });
}
function Cd(t) {
  let { rgOptions: e, ...o } = t;
  return e.map((n, r) =>
    uo(n)
      ? (0, J.jsx)(
          "hr",
          {
            className: v(
              Dn.DialogDropDownMenu_Item,
              Dn.DialogDropDownMenu_Separator,
            ),
          },
          r,
        )
      : dt(n)
        ? (0, J.jsx)(Cd, { ...o, rgOptions: n.options }, r)
        : (0, J.jsx)(ah, { ...o, option: n }, r),
  );
}
function ah(t) {
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
  return (0, J.jsx)("button", {
    type: "button",
    className: v(
      Dn.DialogDropDownMenu_Item,
      o,
      e.strOptionClass,
      l && "ContextMenuAutoFocus",
    ),
    onClick: (c) => n(c, e),
    ref: l ? a : void 0,
    onMouseEnter: s,
    role: "option",
    "aria-selected": l,
    children: e.tooltip
      ? (0, J.jsx)(vr, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, J.jsx)("div", { children: e.label }),
  });
}
var ma = class extends Se.Component {
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
      (0, J.jsx)(th, { ...r, rgOptions: i, onMenuOpened: this.OnMenuOpened })
    );
  }
};
_([h], ma.prototype, "OnMenuOpened", 1);
var lh = u(w());
var Rd = u(g());
var Ie = u(w());
var Pd = u(T_());
var fa = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new ha(e, !1);
  }
};
var ha = class {
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
          (this.m_reactRoot = Pd.createRoot(this.m_container)),
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
      return this.m_container && Gn(this.m_container, e);
    }
  },
  Tr = class {
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
      return o || ((o = new fa(e.body)), this.m_mapEmbeddedHovers.set(e, o)), o;
    }
  };
var Te = u(g()),
  yn = new vs("DragDrop").Debug;
var ba = class extends Ie.Component {
  m_coordinator = new kr();
  OnDrop(e, o) {
    o > e && o--, o != e && this.props.onReorder(e, o);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, Te.jsx)(
          Er,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (n) => n.props.data != 0,
            fnOnDrop: (n) => this.OnDrop(n.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      Ie.Children.forEach(this.props.children, (n, r) => {
        let i = n.props.id || "__list_" + r,
          a = r + 1;
        e.push(
          (0, Te.jsx)(
            je,
            { coordinator: this.m_coordinator, data: r, children: n },
            i,
          ),
        ),
          e.push(
            (0, Te.jsx)(
              Er,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (s) => s.props.data != a,
                fnOnDrop: (s) => this.OnDrop(s.props.data, a),
              },
              "dropregion_" + i,
            ),
          );
      }),
      (0, Te.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
_([h], ba.prototype, "OnDrop", 1);
function ch(t) {
  if ("touches" in t) {
    let e = t;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [t.clientX, t.clientY];
}
function va(t, e, o, n) {
  return n
    ? o && t > o.left && t < o.right && e > o.top && e < o.bottom
    : o && t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
}
var kr = class {
  m_embeddedElement = new Tr("DragGhosts");
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
    $o(this.m_rgDropRegions, e),
      $o(this.m_rgActiveDropRegions, e),
      this.m_activeDropRegion == e &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost());
  }
  OnDragGhostRef(e) {
    this.m_dragGhost = e;
  }
  ShowDragGhost() {
    let e = this.m_activeDraggable.renderDragGhost(),
      o = v(
        e.props.className,
        !!this.m_activeDropRegion && "DraggedOverActiveDrop",
      ),
      n = Ie.cloneElement(e, { ref: this.OnDragGhostRef, className: o });
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
        if (va(r, i, d) && !va(c, p, d, !0)) {
          let f = Fn(c, d.left, d.right, d.left - 200, d.right + 200),
            b = Fn(p, d.top, d.bottom, d.top - 100, d.bottom + 100),
            M = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, f, b);
          }, M);
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
_([h], kr.prototype, "OnDragGhostRef", 1);
var Sd = 5,
  je = class extends Ie.Component {
    constructor(e) {
      super(e), Ct(this);
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
    m_divRef = Ie.createRef();
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
      yn("ProcessDragMove", e, this.props.data);
      let [o, n] = ch(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(o - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(n - (this.m_DragInfo.startClientY ?? 0), 2) >=
          Sd * Sd &&
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
      yn("ResetDragState", this.props.data),
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
      yn("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
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
      yn("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      yn(
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
          ...f
        } = this.props,
        b = {},
        M = c || "DialogDraggable";
      return (
        this.m_DragInfo.bStarted
          ? ((M = v(M, p || "DraggedOut")),
            n && (b = { onDragEnd: this.OnHTMLDragEnd }))
          : n
            ? (b = { onDragStart: this.OnHTMLDragStart })
            : (b = {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
        (0, Te.jsx)("div", {
          ref: this.m_divRef,
          className: M,
          ...b,
          ...f,
          draggable: n,
          children: d,
        })
      );
    }
    renderDropGhost() {
      return this.props.fnRenderDropGhost
        ? this.props.fnRenderDropGhost()
        : (0, Te.jsx)(Ar, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, Te.jsx)(xr, {
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
_([h], je.prototype, "ProcessDragMove", 1),
  _([h], je.prototype, "OnMouseDown", 1),
  _([h], je.prototype, "OnMouseUp", 1),
  _([h], je.prototype, "OnTouchStart", 1),
  _([h], je.prototype, "OnTouchEnd", 1),
  _([Is], je.prototype, "ResetDragState", 1),
  _([h], je.prototype, "OnHTMLDragStart", 1),
  _([h], je.prototype, "OnHTMLDrag", 1),
  _([h], je.prototype, "OnHTMLDragEnd", 1);
var Ar = class extends Ie.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, Te.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
_([h], Ar.prototype, "OnRef", 1);
var xr = class extends Ie.Component {
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
      return (0, Te.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      o = Fn(
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
    return (0, Te.jsx)("div", {
      className: r,
      style: e,
      children: (0, Te.jsx)("div", { ref: this.OnRef, style: n }),
    });
  }
};
_([h], xr.prototype, "OnRef", 1);
var Ca = class extends Ie.Component {
    m_divRef = Ie.createRef();
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
      return va(e, o, this.GetClientRect());
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
        f = v(
          a || "DialogDropRegion",
          this.state.bDraggableActive && (s || "Active"),
        );
      return (0, Te.jsxs)(bt, {
        ref: Hn(p, this.m_divRef),
        className: f,
        ...d,
        focusable: c === void 0 ? !!d.onClick : c,
        children: [this.state.dropGhost, l],
      });
    }
  },
  Er = class extends Ca {
    BDraggableInRegion(e, o, n) {
      let r = this.GetClientRect();
      return r
        ? e >= r.left && e <= r.right && o >= r.top - 20 && o <= r.bottom + 20
        : !1;
    }
  };
var W = u(w());
var mt = {
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
var G = u(g()),
  uh = "separator",
  ph = "spacer",
  Tn = class {
    constructor() {
      Ct(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
_([vt], Tn.prototype, "m_flPageListScrollTop", 2),
  _([vt], Tn.prototype, "m_flPageScrollTop", 2);
var po = class po {
  static s_Instance;
  static Get() {
    return po.s_Instance || (po.s_Instance = new po()), po.s_Instance;
  }
  constructor() {
    Ct(this);
  }
  m_setPagedSettingsInstances = new Set();
};
_([vt], po.prototype, "m_setPagedSettingsInstances", 2);
var Lr = po;
function dh(t) {
  let {
    stylesheet: e,
    pages: o,
    iActivePage: n,
    onPageSelected: r,
    PageListItemComponent: i = mh,
    PageListSeparatorComponent: a = _h,
  } = t;
  return o.map((s, l) => {
    let c = l === n;
    if (s === uh) {
      let p = l === n + 1 || l === n - 1;
      return (0, G.jsx)(a, { bTransparent: p }, l);
    } else {
      if (s === ph)
        return (0, G.jsx)("div", { className: mt.PageListSpacer }, l);
      {
        if (s.visible === !1) return null;
        let p = s.identifier || s.title || l.toString(),
          d = () => r(l, s);
        return (0, G.jsx)(
          i,
          {
            className: v(e.PagedSettingsDialog_PageListItem, { [e.Active]: c }),
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
function mh(t) {
  let { title: e, icon: o, active: n, className: r, onClick: i, ...a } = t;
  return (0, G.jsxs)("div", {
    className: r,
    onClick: i,
    children: [
      o
        ? (0, G.jsx)("div", { className: mt.PageListItem_Icon, children: o })
        : null,
      (0, G.jsx)("div", {
        className: mt.PageListItem_Title,
        ...a,
        children: e,
      }),
    ],
  });
}
var wd = W.forwardRef(function (e, o) {
  let { activePage: n, style: r, stylesheet: i } = e,
    a = n?.padding ?? "standard";
  return (0, G.jsxs)(da, {
    style: r,
    className: v(
      i?.PagedSettingsDialog_PageContent,
      n?.pageClassName,
      a == "none" && i?.NoPadding,
    ),
    refElem: o,
    children: [
      n?.header,
      !n?.hideTitle && (0, G.jsx)(Mr, { children: n?.title }),
      (0, G.jsx)(ge, { children: n?.content }),
    ],
  });
});
function _h(t) {
  return (0, G.jsx)("div", {
    className: v(mt.PageListSeparator, { [mt.Transparent]: t.bTransparent }),
  });
}
var Md = W.forwardRef(function (e, o) {
  let { stylesheet: n = mt, pages: r, onPageRequested: i } = e,
    a = e.page == null,
    [s, l] = W.useState(() =>
      e.startingPage === void 0
        ? -1
        : r.findIndex(
            ($) => typeof $ == "object" && $.identifier === e.startingPage,
          ),
    ),
    c = s;
  a ||
    (c = r.findIndex(($) => typeof $ == "object" && $.identifier === e.page)),
    (c < 0 || c >= r.length) && (c = 0);
  let p = null;
  typeof r[c] == "object" && (p = r[c]);
  let d = W.useRef(null),
    f = W.useCallback(() => d.current?.TakeFocus() || !1, [d]),
    [b, M] = W.useState(!1),
    T = b ? f : void 0,
    B = W.useCallback(($) => {
      $ && M(!0);
    }, []),
    le = W.useCallback(
      ($, Nt) => {
        M(!0),
          xe.PlayNavSound(15),
          i && i(Nt.identifier),
          Nt.click ? Nt.click() : a && l($);
      },
      [a, i],
    ),
    X = W.useRef(null),
    pe = ($) => {
      $.detail.button == 1 && X.current?.TakeFocus($.detail.button);
    },
    Ce = e.showTitle ?? !0,
    be = v("DialogContentTransition", n.PagedSettingDialog_ContentColumn);
  W.useEffect(() => {
    e.bAutoFocusPageContent && X.current?.TakeFocus();
  }, []);
  let { refForPageList: ce, refForPage: It } = hh();
  return (0, G.jsxs)(F, {
    className: v(n.PagedSettingsDialog, e.className),
    ref: o,
    children: [
      (0, G.jsxs)(F, {
        className: v(
          n.PagedSettingsDialog_PageListColumn,
          e.hideList && mt.Hidden,
          "PageListColumn",
        ),
        navRef: d,
        onButtonDown: pe,
        onFocusWithin: B,
        children: [
          Ce &&
            (0, G.jsx)("div", {
              className: n.PagedSettingsDialog_Title,
              children: e.title,
            }),
          e.topControls && (0, G.jsx)("div", { children: e.topControls }),
          (0, G.jsx)(F, {
            className: v(
              n.PagedSettingsDialog_PageList,
              e.disablePageListScrolling &&
                n.PagedSettingsDialog_PageList_DisableScrolling,
              Ce && n.PagedSettingsDialog_PageList_ShowTitle,
              e.bNoHeaderPadding &&
                n.PageSettingsDialog_PageList_NoHeaderPadding,
            ),
            navEntryPreferPosition: 4,
            ref: ce,
            children: (0, G.jsx)(dh, {
              stylesheet: n,
              pages: r,
              iActivePage: c,
              onPageSelected: le,
              PageListItemComponent: e.PageListItemComponent,
              PageListSeparatorComponent: e.PageListSeparatorComponent,
            }),
          }),
          e.bottomControls && (0, G.jsx)("div", { children: e.bottomControls }),
        ],
      }),
      (0, G.jsxs)(F, {
        className: be,
        onCancelButton: T,
        navRef: X,
        children: [
          e.toggleHideList &&
            (0, G.jsx)(fh, {
              hideList: e.hideList,
              toggleHideList: e.toggleHideList,
            }),
          e.renderPageContent
            ? e.renderPageContent(p, It, wd)
            : (0, G.jsx)(wd, { ref: It, activePage: p, stylesheet: n }),
        ],
      }),
    ],
  });
});
var gh = W.createContext(!1);
var OT = W.memo(function (e) {
  let {
      isActive: o,
      refForPage: n,
      page: r,
      PageComponent: i,
      stylesheet: a,
    } = e,
    s = W.useRef(!1);
  if (!o && !s.current) return null;
  s.current = !0;
  let l = o ? void 0 : { display: "none" };
  return (0, G.jsx)(gh.Provider, {
    value: o,
    children: (0, G.jsx)(i, { ref: n, style: l, activePage: r, stylesheet: a }),
  });
});
function fh(t) {
  let { hideList: e, toggleHideList: o } = t;
  return (0, G.jsx)("div", {
    className: v(mt.HidePageListButton, e && mt.ListHidden),
    onClick: o,
    children: e
      ? (0, G.jsx)(oi, { direction: "right" })
      : (0, G.jsx)(oi, { direction: "left" }),
  });
}
function hh() {
  let t = W.useMemo(() => new Tn(), []);
  W.useEffect(
    () => (
      Lr.Get().m_setPagedSettingsInstances.add(t),
      () => {
        Lr.Get().m_setPagedSettingsInstances.delete(t);
      }
    ),
    [t],
  );
  let e = W.useCallback(
      (c) => (t.m_flPageListScrollTop = c.currentTarget.scrollTop),
      [t],
    ),
    o = W.useCallback(
      (c) => (t.m_flPageScrollTop = c.currentTarget.scrollTop),
      [t],
    ),
    n = Qr("scroll", e),
    r = Qr("scroll", o),
    i = W.useCallback(
      (c) => (t.m_flPageListScrollTop = c?.scrollTop ?? 0),
      [t],
    ),
    a = W.useCallback((c) => (t.m_flPageScrollTop = c?.scrollTop ?? 0), [t]),
    s = Ae(n, i),
    l = Ae(r, a);
  return { refForPageList: s, refForPage: l };
}
var Br = u(w());
var Dd = u(g()),
  Jt = class extends Br.Component {
    m_refTextArea = Br.createRef();
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
      return (0, Dd.jsx)(Es, {
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
_([h], Jt.prototype, "InternalOnInput", 1),
  _([h], Jt.prototype, "OnKeyUp", 1),
  _([h], Jt.prototype, "OnBlur", 1),
  _([h], Jt.prototype, "OnClick", 1),
  _([h], Jt.prototype, "OnPaste", 1),
  _([h], Jt.prototype, "OnCut", 1);
var _t = u(w());
var y = {
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
var An = u(w());
var Sa = u(w());
var Pa = u(g());
async function bh(t, e, o) {
  let n = Oo(e),
    r = o?.bForcePopOut || Td(n);
  _e(
    !(r && o?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let i = !r && o?.bNeverPopOut === !0,
    a = Td(n) || (!i && Ad(n, e)),
    s = r && o?.popupWidth && o?.popupHeight,
    l;
  if (a && !s) {
    let p = Sa.cloneElement(t, { closeModal: () => {} });
    l = await vh(n, p, o?.promiseRenderComplete);
  }
  let c = l && l.height / e.innerHeight < 0.9 && l.width / e.innerWidth < 0.8;
  if (i || (!r && c)) return yd(t, e, void 0, { fnOnClose: o?.fnOnClose });
  {
    let p = {
        strTitle: o?.strTitle || E("#Dialog_DefaultWindowTitle"),
        fnOnClose: o?.fnOnClose,
        popupWidth: o?.popupWidth || l?.width,
        popupHeight: o?.popupHeight || l?.height,
        bHideMainWindowForPopouts: o?.bHideMainWindowForPopouts,
        className: o?.className,
      },
      d = { bHideActions: o?.bHideActionIcons },
      f = o?.browserContext || e.browserInfo;
    return yd(t, e, p.strTitle, p, f, d, n);
  }
}
async function kd(t, e, o) {
  return bh(t, e, { bHideMainWindowForPopouts: !0, ...o });
}
function yd(t, e, o, n, r, i, a) {
  let s,
    l,
    c = t.props.closeModal,
    p = () => {
      l && l.Close(), c && c(), n?.fnOnClose && n.fnOnClose();
    },
    d = () => {
      s && s.Close(), p();
    },
    f = Sa.cloneElement(t, { closeModal: d });
  if (((a = a || Oo(e)), Ad(a, e) && n && o)) {
    if (n.bHideMainWindowForPopouts) {
      let M = (0, Pa.jsx)(ao, {
        className: "Hidden",
        onEscKeypress: f.props.bDisableBackgroundDismiss ? void 0 : d,
        children: (0, Pa.jsx)("div", {}),
      });
      l = a.ShowModal(M);
    }
    let b = { ...n, fnOnClose: p, browserContext: r };
    s = a.ShowLegacyPopupModal(o, f, b, i);
  } else s = a.ShowModal(f);
  return s;
}
function Ad(t, e) {
  return (t = t || Oo(e || window)), Z.USE_POPUPS && t.BUsePopups();
}
function Td(t) {
  return t.BOnlyPopups && t.BOnlyPopups();
}
async function vh(t, e, o) {
  return new Promise((n, r) => {
    t.RequestModalMeasure(e, n, o);
  });
}
var wa = u(w());
var Ma = u(g()),
  xd = Ht((t) => {
    let { onCancel: e, closeModal: o, bOKDisabled: n, onOK: r } = t,
      i = rt();
    _e(
      o || e,
      `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${t.className} ${t.modalClassName}`,
    );
    let a = wa.useCallback(() => {
        (e && e()) || (o && o());
      }, [e, o]),
      s = wa.useCallback(async () => {
        n || (r && (await r()), o && o());
      }, [n, r, o]);
    return (0, Ma.jsx)(ao, {
      onEscKeypress: a,
      className: t.modalClassName,
      bDestructiveWarning: t.bDestructiveWarning,
      bDisableBackgroundDismiss: t.bDisableBackgroundDismiss,
      bHideCloseIcon: t.bHideCloseIcon,
      children: (0, Ma.jsx)(pd, {
        classNameContent: v(
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
var he = u(g());
var Wo = class extends An.Component {
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
      d = n || E("#Button_Close"),
      f = (0, he.jsx)(md, {
        bOKDisabled: this.props.bOKDisabled,
        bCancelDisabled: this.props.bCancelDisabled,
        strOKText: n,
        onCancel: this.Cancel(this.props.onCancel),
        strCancelText: r,
      });
    return (
      l
        ? (f = (0, he.jsx)(Sn, { children: d }))
        : s &&
          (f = (0, he.jsx)(_d, {
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
      (0, he.jsxs)(xd, {
        ...p,
        children: [
          (0, he.jsxs)(Mr, {
            children: [
              " ",
              e || (0, he.jsx)(he.Fragment, { children: " " }),
              " ",
            ],
          }),
          (0, he.jsxs)(ud, {
            onCancelButton: this.Cancel(i || this.props.onCancel),
            children: [
              (0, he.jsxs)(cd, { children: [o, c] }),
              (0, he.jsx)(ld, { children: f }),
            ],
          }),
        ],
      })
    );
  }
};
Wo = _([Ht], Wo);
var Ir = class extends An.Component {
  render() {
    let e = {
      strTitle: E("#Error_FailureNotice"),
      strDescription: E("#Error_GenericFailureDescription"),
      bAlertDialog: !0,
      bDestructiveWarning: !0,
      onOK: () => {},
      onCancel: () => {},
      ...this.props,
    };
    return (0, he.jsx)(Wo, { ...e });
  }
};
Ir = _([Ht], Ir);
var kn = class extends An.Component {
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
      (0, he.jsx)(Wo, { ...e })
    );
  }
};
kn = _([Ht], kn);
function Ed(t, e, o) {
  kd((0, he.jsx)(kn, { strTitle: t, strDescription: e }), o);
}
var de = u(g()),
  Ho = _t.forwardRef(function (e, o) {
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
        disabled: f,
        bottomSeparator: b,
        className: M,
        highlightOnFocus: T,
        indentLevel: B,
        verticalAlignment: le,
        iconLocation: X,
        tooltip: pe,
        explainer: Ce,
        explainerTitle: be,
        ...ce
      } = e,
      It = rt(),
      $ = s ?? "inline",
      Nt = X ?? "front",
      Ya = Nt == "front" && !!i,
      Xa = Nt == "before-children" && !!i,
      Gr = $ == "inline" && !!a,
      Qa = $ == "below" && !!a,
      C_ = l ?? (It ? "shift-children-below" : "keep-inline"),
      Vr = !!(ce.onClick || ce.onActivate || ce.focusable),
      Ja = (i != null && Ya) || n != null || (Gr && a != null),
      $a = c ?? "min",
      R_ = p ?? "standard",
      Za = d ?? "standard",
      Ka = b ?? "standard",
      P_ = T ?? !0,
      S_ = B ?? 0,
      w_ = le ?? "center",
      M_ = Ch(be ?? n, Ce),
      zr = _t.useRef(),
      D_ = Ae(zr, e.navRef),
      y_ = _t.useCallback(
        (jr) => {
          zr.current?.TakeFocus(), jr.preventDefault();
        },
        [zr],
      );
    return (0, de.jsxs)(F, {
      focusable: Vr,
      noFocusRing: !0,
      scrollIntoViewWhenChildFocused: !0,
      onActivate: (jr) => ce.onClick?.(jr),
      ref: o,
      onMouseDown: Vr ? void 0 : y_,
      ...ce,
      ...M_,
      navRef: D_,
      className: v(
        M,
        y.Field,
        f && y.Disabled,
        Ja && y.WithFirstRow,
        Gr && y.WithChildrenInline,
        Qa && y.WithChildrenBelow,
        w_ == "center" && y.VerticalAlignCenter,
        C_ == "shift-children-below" && y.InlineWrapShiftsChildrenBelow,
        !!r && y.WithDescription,
        Ka == "standard" && y.WithBottomSeparatorStandard,
        Ka == "thick" && y.WithBottomSeparatorThick,
        $a == "fixed" && y.ChildrenWidthFixed,
        $a == "max" && y.ChildrenWidthGrow,
        R_ == "standard" && y.ExtraPaddingOnChildrenBelow,
        Za == "standard" && y.StandardPadding,
        Za == "compact" && y.CompactPadding,
        Vr && y.Clickable,
        P_ && y.HighlightOnFocus,
      ),
      style: { "--indent-level": S_ },
      children: [
        Ja &&
          (0, de.jsxs)("div", {
            className: y.FieldLabelRow,
            children: [
              (0, de.jsxs)("div", {
                className: y.FieldLabel,
                children: [
                  Ya &&
                    (0, de.jsx)("div", {
                      className: v(y.FieldIcon, y.Front),
                      children: i,
                    }),
                  n,
                  pe && (0, de.jsx)(yt, { tooltip: pe }),
                ],
              }),
              Gr &&
                (0, de.jsxs)("div", {
                  className: y.FieldChildrenWithIcon,
                  children: [
                    Xa &&
                      (0, de.jsx)("div", {
                        className: v(y.FieldIcon, y.BeforeChildren),
                        children: i,
                      }),
                    (0, de.jsx)("div", {
                      className: y.FieldChildrenInner,
                      children: a,
                    }),
                  ],
                }),
            ],
          }),
        Qa &&
          (0, de.jsxs)("div", {
            className: y.FieldChildrenWithIcon,
            children: [
              Xa &&
                (0, de.jsx)("div", {
                  className: v(y.FieldIcon, y.BeforeChildren),
                  children: i,
                }),
              (0, de.jsx)("div", {
                className: y.FieldChildrenInner,
                children: a,
              }),
            ],
          }),
        r && (0, de.jsx)("div", { className: y.FieldDescription, children: r }),
      ],
    });
  });
function Ch(t, e) {
  let o = De(),
    n = _t.useCallback(() => {
      Ed(t, e, o.ownerWindow ?? window);
    }, [o, t, e]);
  if (e == null) return {};
  let r = E("#Field_MoreInfo_Action");
  return { onOptionsButton: n, onOptionsActionDescription: r };
}
var Dk = _t.forwardRef(function (e, o) {
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
        childrenContainerWidth: f,
        padding: b,
        inlineWrap: M,
        fieldClassName: T,
        fieldChildren: B,
        ...le
      } = e,
      { refWithValue: X, refForElement: pe } = Xr(o);
    return (0, de.jsxs)(Ho, {
      label: n,
      description: r,
      icon: a,
      bottomSeparator: p,
      highlightOnFocus: d,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: f ?? "min",
      onMouseDown: (be) => {
        X.current?.focus(), be.preventDefault();
      },
      padding: b,
      inlineWrap: M,
      explainer: i,
      className: T,
      disabled: l,
      onActivate: l ? c : void 0,
      children: [(0, de.jsx)(Ve, { ...le, disabled: l, ref: pe }), B],
    });
  }),
  Ld = _t.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        icon: i,
        layout: a,
        bottomSeparator: s,
        highlightOnFocus: l,
        ...c
      } = e,
      { refWithValue: p, refForElement: d } = Xr(o);
    return (0, de.jsx)(Ho, {
      label: n,
      description: r,
      icon: i,
      bottomSeparator: s,
      highlightOnFocus: l,
      childrenLayout: a ?? "inline",
      childrenContainerWidth: "fixed",
      onMouseDown: (b) => {
        p.current?.element?.focus(), b.preventDefault();
      },
      children: (0, de.jsx)(co, { ...c, ref: d }),
    });
  });
var zd = u(w());
var ie = u(w());
var Ne = u(w());
var Da = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function ya(t, e) {
  return t.classList
    ? !!e && t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function Ta(t, e) {
  t.classList
    ? t.classList.add(e)
    : ya(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function Bd(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function ka(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
      ? (t.className = Bd(t.className, e))
      : t.setAttribute(
          "class",
          Bd((t.className && t.className.baseVal) || "", e),
        );
}
var La = u(w());
var xn = u(w()),
  En = u(ht());
var Aa = { disabled: !1 };
var Id = u(w()),
  Go = Id.default.createContext(null);
var Nr = function (e) {
  return e.scrollTop;
};
var Ln = "unmounted",
  mo = "exited",
  _o = "entering",
  zo = "entered",
  xa = "exiting",
  xt = (function (t) {
    To(e, t);
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
            ? ((l = mo), (i.appearStatus = _o))
            : (l = zo)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Ln)
            : (l = mo),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    e.getDerivedStateFromProps = function (r, i) {
      var a = r.in;
      return a && i.status === Ln ? { status: mo } : null;
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
            ? a !== _o && a !== zo && (i = _o)
            : (a === _o || a === zo) && (i = xa);
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
          if ((this.cancelNextCallback(), i === _o)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : En.default.findDOMNode(this);
              a && Nr(a);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === mo &&
            this.setState({ status: Ln });
      }),
      (o.performEnter = function (r) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : r,
          l = this.props.nodeRef ? [s] : [En.default.findDOMNode(this), s],
          c = l[0],
          p = l[1],
          d = this.getTimeouts(),
          f = s ? d.appear : d.enter;
        if ((!r && !a) || Aa.disabled) {
          this.safeSetState({ status: zo }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, p),
          this.safeSetState({ status: _o }, function () {
            i.props.onEntering(c, p),
              i.onTransitionEnd(f, function () {
                i.safeSetState({ status: zo }, function () {
                  i.props.onEntered(c, p);
                });
              });
          });
      }),
      (o.performExit = function () {
        var r = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : En.default.findDOMNode(this);
        if (!i || Aa.disabled) {
          this.safeSetState({ status: mo }, function () {
            r.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: xa }, function () {
            r.props.onExiting(s),
              r.onTransitionEnd(a.exit, function () {
                r.safeSetState({ status: mo }, function () {
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
            : En.default.findDOMNode(this),
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
        if (r === Ln) return null;
        var i = this.props,
          a = i.children,
          s = i.in,
          l = i.mountOnEnter,
          c = i.unmountOnExit,
          p = i.appear,
          d = i.enter,
          f = i.exit,
          b = i.timeout,
          M = i.addEndListener,
          T = i.onEnter,
          B = i.onEntering,
          le = i.onEntered,
          X = i.onExit,
          pe = i.onExiting,
          Ce = i.onExited,
          be = i.nodeRef,
          ce = yo(i, [
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
        return xn.default.createElement(
          Go.Provider,
          { value: null },
          typeof a == "function"
            ? a(r, ce)
            : xn.default.cloneElement(xn.default.Children.only(a), ce),
        );
      }),
      e
    );
  })(xn.default.Component);
xt.contextType = Go;
xt.propTypes = {};
function Vo() {}
xt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Vo,
  onEntering: Vo,
  onEntered: Vo,
  onExit: Vo,
  onExiting: Vo,
  onExited: Vo,
};
xt.UNMOUNTED = Ln;
xt.EXITED = mo;
xt.ENTERING = _o;
xt.ENTERED = zo;
xt.EXITING = xa;
var Nd = xt;
var Rh = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return Ta(e, n);
      })
    );
  },
  Ea = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return ka(e, n);
      })
    );
  },
  Ba = (function (t) {
    To(e, t);
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
            f = d ? "appear" : "enter";
          n.addClass(p, f, "active"),
            n.props.onEntering && n.props.onEntering(s, l);
        }),
        (n.onEntered = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            d = c[1],
            f = d ? "appear" : "enter";
          n.removeClasses(p, f),
            n.addClass(p, f, "done"),
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
            f = c ? d + "-active" : l[s + "Active"],
            b = c ? d + "-done" : l[s + "Done"];
          return { baseClassName: d, activeClassName: f, doneClassName: b };
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
          a === "active" && r && Nr(r),
          s && ((this.appliedClasses[i][a] = s), Rh(r, s));
      }),
      (o.removeClasses = function (r, i) {
        var a = this.appliedClasses[i],
          s = a.base,
          l = a.active,
          c = a.done;
        (this.appliedClasses[i] = {}),
          s && Ea(r, s),
          l && Ea(r, l),
          c && Ea(r, c);
      }),
      (o.render = function () {
        var r = this.props,
          i = r.classNames,
          a = yo(r, ["classNames"]);
        return La.default.createElement(
          Nd,
          Jn({}, a, {
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
  })(La.default.Component);
Ba.defaultProps = { classNames: "" };
Ba.propTypes = {};
var Ia = Ba;
function Fd(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
var Bn = u(w());
var qe = u(w());
function Fr(t, e) {
  var o = function (i) {
      return e && (0, qe.isValidElement)(i) ? e(i) : i;
    },
    n = Object.create(null);
  return (
    t &&
      qe.Children.map(t, function (r) {
        return r;
      }).forEach(function (r) {
        n[r.key] = o(r);
      }),
    n
  );
}
function Ph(t, e) {
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
function go(t, e, o) {
  return o[e] != null ? o[e] : t.props[e];
}
function Od(t, e) {
  return Fr(t.children, function (o) {
    return (0, qe.cloneElement)(o, {
      onExited: e.bind(null, o),
      in: !0,
      appear: go(o, "appear", t),
      enter: go(o, "enter", t),
      exit: go(o, "exit", t),
    });
  });
}
function Ud(t, e, o) {
  var n = Fr(t.children),
    r = Ph(e, n);
  return (
    Object.keys(r).forEach(function (i) {
      var a = r[i];
      if ((0, qe.isValidElement)(a)) {
        var s = i in e,
          l = i in n,
          c = e[i],
          p = (0, qe.isValidElement)(c) && !c.props.in;
        l && (!s || p)
          ? (r[i] = (0, qe.cloneElement)(a, {
              onExited: o.bind(null, a),
              in: !0,
              exit: go(a, "exit", t),
              enter: go(a, "enter", t),
            }))
          : !l && s && !p
            ? (r[i] = (0, qe.cloneElement)(a, { in: !1 }))
            : l &&
              s &&
              (0, qe.isValidElement)(c) &&
              (r[i] = (0, qe.cloneElement)(a, {
                onExited: o.bind(null, a),
                in: c.props.in,
                exit: go(a, "exit", t),
                enter: go(a, "enter", t),
              }));
      }
    }),
    r
  );
}
var Sh =
    Object.values ||
    function (t) {
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    },
  wh = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  Na = (function (t) {
    To(e, t);
    function e(n, r) {
      var i;
      i = t.call(this, n, r) || this;
      var a = i.handleExited.bind(Fd(i));
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
        return { children: l ? Od(r, s) : Ud(r, a, s), firstRender: !1 };
      }),
      (o.handleExited = function (r, i) {
        var a = Fr(this.props.children);
        r.key in a ||
          (r.props.onExited && r.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = Jn({}, s.children);
              return delete l[r.key], { children: l };
            }));
      }),
      (o.render = function () {
        var r = this.props,
          i = r.component,
          a = r.childFactory,
          s = yo(r, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = Sh(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Bn.default.createElement(Go.Provider, { value: l }, c)
            : Bn.default.createElement(
                Go.Provider,
                { value: l },
                Bn.default.createElement(i, s, c),
              )
        );
      }),
      e
    );
  })(Bn.default.Component);
Na.propTypes = {};
Na.defaultProps = wh;
var Fa = Na;
var jo = u(g());
function Wd(t) {
  let {
      childrenKey: e,
      childrenClasses: o,
      children: n,
      directionClass: r,
      animate: i = !0,
    } = t,
    a = v(Da.TransitionGroup, r);
  return (0, jo.jsx)(Fa, {
    className: a,
    appear: !1,
    enter: i,
    exit: i,
    children: (0, jo.jsx)(Mh, { childrenClasses: o, children: n }, e),
  });
}
function Mh(t) {
  let { sizeClass: e, children: o, childrenClasses: n, navKey: r, ...i } = t,
    [a, s, l, c] = Dh(),
    p = Ne.useRef(!0),
    d = Ne.useCallback(() => p.current, [p]),
    f = Ne.useCallback(() => {
      (p.current = !0), l();
    }, [l]),
    b = Ne.useCallback(() => {
      (p.current = !1), c();
    }, [c]),
    M = 1e4,
    T = t.childrenClasses,
    B = {
      enter: T.enterStart,
      enterActive: T.enterEnd,
      exit: T.exitStart,
      exitActive: T.exitEnd,
    };
  return a.current && !a.current.ownerDocument.defaultView
    ? null
    : (0, jo.jsx)(Ia, {
        nodeRef: a,
        classNames: B,
        in: !0,
        timeout: M,
        addEndListener: s,
        onEntering: f,
        onExiting: b,
        ...i,
        children: (0, jo.jsx)("div", {
          ref: a,
          className: v(Da.ContentWrapper, e, T.base),
          children: (0, jo.jsx)(F, {
            className: e,
            fnCanTakeFocus: d,
            navKey: r,
            children: t.children,
          }),
        }),
      });
}
function Dh() {
  let t = Ne.useRef(null),
    e = Ne.useRef();
  Ne.useLayoutEffect(() => {
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
  let o = Ne.useCallback(
      (i) => {
        if (!e.current) {
          i();
          return;
        }
        e.current.fnDone = i;
      },
      [e],
    ),
    n = Ne.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    r = Ne.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [t, o, n, r];
}
function Hd(t, e) {
  return {
    base: e,
    enterStart: t.Enter,
    enterEnd: t.EnterActive,
    exitStart: t.Exit,
    exitEnd: t.ExitActive,
  };
}
function Gd(t, e) {
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
var Et = {
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
var Ke = u(g()),
  Vd = ie.createContext(null);
function yh(t) {
  let e = ie.useContext(Vd),
    n = Ns().IN_VR,
    { title: r, icon: i, active: a, ...s } = t;
  return (0, Ke.jsxs)(F, {
    preferredFocus: a,
    navRef: a && e ? e : void 0,
    noFocusRing: !0,
    onActivate: n ? void 0 : s.onClick,
    onFocus: n ? void 0 : s.onClick,
    ...s,
    children: [
      i && (0, Ke.jsx)("div", { className: Et.PageListItem_Icon, children: i }),
      (0, Ke.jsx)("div", { className: Et.PageListItem_Title, children: r }),
    ],
  });
}
function Th(t) {
  return (0, Ke.jsx)("div", { className: Et.Separator });
}
var kh = ie.forwardRef(function (e, o) {
  let { page: n, bAutoFocusPageContent: r, showTitle: i = !1 } = e,
    a = ie.useRef(null),
    s = ie.useRef(!0);
  ie.useEffect(() => {
    (!s.current || !r) && a.current?.TakeFocus(), (s.current = !1);
  }, [n, r]);
  let l = (c, p, d) =>
    (0, Ke.jsx)(Ah, {
      pages: e.pages,
      activePage: c,
      refForPage: p,
      PageComponent: d,
    });
  return (0, Ke.jsx)(Vd.Provider, {
    value: a,
    children: (0, Ke.jsx)(Md, {
      ...e,
      stylesheet: Et,
      showTitle: i,
      PageListItemComponent: yh,
      PageListSeparatorComponent: Th,
      renderPageContent: e.renderPageContent || l,
    }),
  });
});
function Ah(t) {
  let { pages: e, activePage: o, refForPage: n, PageComponent: r } = t,
    i = ie.useMemo(() => e.findIndex((c) => c == o), [e, o]),
    a = xh(i),
    s = Eh(o?.identifier, n),
    l = Gd(Et, a);
  return (0, Ke.jsx)(Wd, {
    childrenKey: o?.identifier,
    childrenClasses: Hd(Et, Et.ContentTransition),
    directionClass: l,
    animate: a != 0,
    children:
      o &&
      (0, Ke.jsx)(
        r,
        { ref: s(o.identifier), stylesheet: Et, activePage: o },
        o.identifier,
      ),
  });
}
function xh(t) {
  let e = ie.useRef(t),
    o = ie.useRef(0),
    n = e.current;
  if (n == t) return o.current;
  let r = 0;
  return (
    n < t ? (r = 4) : n > t && (r = 3), (e.current = t), (o.current = r), r
  );
}
function Eh(t, e) {
  let o = ie.useMemo(() => new Map(), []),
    n = ie.useRef();
  n.current = t;
  let r = ie.useRef();
  r.current = e;
  let i = ie.useCallback(
    (a) => (s) => {
      o.set(a, s), a === n.current && $t(r.current, s);
    },
    [o],
  );
  return (
    ie.useEffect(() => ($t(e, t && o.get(t)), () => $t(e, void 0)), [o, t, e]),
    i
  );
}
var jd = u(g()),
  TA = zd.forwardRef(function (e, o) {
    return (0, jd.jsx)(So, {
      noFocusRing: !0,
      ...e,
      ref: o,
      className: v(y.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var Xd = u(w());
var Yd = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var Fe = u(g());
function Qd(t, e) {
  for (let o of t.options)
    if ((kt(o) && o.data === e) || (dt(o) && Qd(o, e))) return !0;
  return !1;
}
function Oa(t) {
  let e = (o) =>
    o?.map((n, r) =>
      uo(n)
        ? (0, Fe.jsx)(ol, {}, r)
        : kt(n)
          ? (0, Fe.jsx)(
              Do,
              {
                onSelected: (i) => t.onValueSelected && t.onValueSelected(i, n),
                selected: t.selectedValue === n.data,
                children: (0, Fe.jsx)(Fe.Fragment, { children: n.label }),
              },
              r,
            )
          : dt(n)
            ? (0, Fe.jsx)(
                nl,
                {
                  label: n.label,
                  selectedWithin: Qd(n, t.selectedValue),
                  children: e(n.options),
                },
                r,
              )
            : null,
    );
  return (0, Fe.jsx)(tn, { onCancel: t.onCancel, children: e(t.rgOptions) });
}
var Lh = Xd.forwardRef(function (e, o) {
  return (0, Fe.jsx)(Ve, {
    className: v(Yd.DropDownControlButton, e.className),
    focusable: e.focusable,
    disabled: e.disabled,
    onClick: e.onClick,
    tabIndex: e.tabIndex,
    ref: o,
    children: (0, Fe.jsxs)("div", {
      className: y.DropDownControlButtonContents,
      children: [
        e.children,
        (0, Fe.jsx)("div", { className: v(y.Spacer, "Spacer") }),
        (0, Fe.jsx)(nn, { direction: "down" }),
      ],
    }),
  });
});
var gt = u(w());
var Jd = "TW2ZQnLvgIc-";
var fo = u(g()),
  jA = gt.forwardRef(function (e, o) {
    let { className: n, ...r } = e,
      i = gt.useRef(),
      a = Ae(o, i),
      [s, l] = gt.useState(!1),
      c = gt.useCallback(() => {
        l((p) => !p), window.setTimeout(() => i.current?.Focus(), 1);
      }, []);
    return (0, fo.jsx)(F, {
      className: n,
      onOptionsButton: c,
      onOptionsActionDescription: E(
        s ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, fo.jsx)(co, {
        autoComplete: "off",
        ref: a,
        inlineControls: (0, fo.jsx)(Ve, {
          className: Jd,
          onPointerDown: c,
          onOKButton: c,
          children: s ? (0, fo.jsx)(sl, {}) : (0, fo.jsx)(ll, {}),
        }),
        ...r,
        type: s ? "text" : "password",
      }),
    });
  });
function Nh(t) {
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
var qA = gt.forwardRef(function (e, o) {
  let { className: n, value: r, ...i } = e,
    a = r ?? "";
  return (0, fo.jsx)(Ld, {
    autoComplete: "off",
    value: a,
    ref: o,
    placeholder: "   .   .   .   ",
    ...i,
    onChange: (l) => {
      let c = l.target.value;
      if (Nh(c)) i.onChange && i.onChange(l);
      else {
        l.target.value = a;
        return;
      }
    },
  });
});
var we = u(w());
var L = {
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
var V = u(g()),
  Fh = 10,
  Oh = 1,
  Uh = 0.01,
  Wh = 0.05,
  hx = id(L["error-shake-duration"]);
function $d(t, e) {
  return e < 0 ? 0 : e > 1 ? 1 : t == 0 ? e : Math.round(e / t) * t;
}
function Zd(t, e, o) {
  let n = t + o * (e - t);
  return Number.parseFloat(n.toFixed(10));
}
function Wa(t, e, o) {
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
  m_vTouchStartPosition = Cs();
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
    return Math.abs(this.props.step ?? Oh);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      o = e > 0 ? e / this.range : Uh;
    return Math.max(o, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : Ro(this.props.value, this.props.min, this.props.max);
    return Wa(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return Wa(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = Ro(0, this.props.min, this.props.max);
    return Wa(this.props.min, this.props.max, e);
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
      r = ts(n, 0, 2e3, 500, 250),
      i = Math.pow(2, Math.floor(n / r)),
      a = this.normalizedDpadStep * i,
      s = Ro(a, this.normalizedDpadStep, Wh) * o,
      l = $d(this.normalizedStep, this.normalizedClampedValue + s),
      c = Zd(this.props.min, this.props.max, l);
    if (
      ((c = Ro(
        c,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      c != this.props.value)
    ) {
      let p = c > this.m_fLatestUserValue;
      xe.PlayNavSound(p ? 18 : 19),
        (this.m_fLatestUserValue = c),
        this.FireOnChange(c, 2);
    } else xe.PlayNavSound(25);
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
      n = $d(this.normalizedStep, o),
      r = Zd(this.props.min, this.props.max, n),
      i = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((r = Ro(r, i, a)), r != this.props.value)) {
      let s = r > this.props.value,
        l = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !l) && xe.PlayNavSound(s ? 18 : 19),
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
          let f = Math.floor(((this.m_fLatestUserValue - i) / (a - i)) * 40),
            b = Math.floor(((r - i) / (a - i)) * 40);
          f != b && !p && (this.PlayHaptic(4), (p = !0));
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
          if (Ps(this.m_vTouchStartPosition, o) >= Fh) {
            let r = Rs(this.m_vTouchStartPosition, o);
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
      xe.PlayNavSound(r ? 18 : 19);
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
    this.m_fZoom = gs(this.m_refSlider.current);
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
      xe.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let o = (0, V.jsx)(tn, {
        children: (0, V.jsx)(Do, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: E("#ResetToDefault"),
        }),
      });
      on(o, e);
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
      f = !d,
      b = {};
    this.CanResetToDefault && (b[3] = E("#ResetToDefault"));
    let M = `${L.SliderHandle} SliderHandle`,
      T = `${L.SliderHandleContainer} SliderHandleContainer `;
    return (
      this.props.handleType == "verticalline"
        ? ((M = `${L.VerticalLineSliderHandle} SliderHandle`),
          (T = `${L.VerticalLineSliderHandleContainer} SliderHandleContainer `))
        : (this.props.handleType == "leftparen" ||
            this.props.handleType == "rightparen") &&
          ((M = v(
            L.ParenSliderHandle,
            this.props.handleType == "leftparen" ? L.Left : L.Right,
            "SliderHandle",
          )),
          (T = v(
            L.ParenSliderHandleContainer,
            this.props.handleType == "leftparen" ? L.Left : L.Right,
            "SliderHandleContainer",
          ))),
      (0, V.jsx)(fl, {
        noFocusRing: !0,
        className: v(
          L.SliderControlPanelGroup,
          "SliderControlPanelGroup",
          this.props.className,
        ),
        navRef: this.props.navRef,
        onMouseDown: (B) => this.OnMouseDown(B.nativeEvent),
        onTouchStart: (B) => this.OnTouchStart(B.nativeEvent),
        onOKActionDescription: this.props.disabled
          ? null
          : E("#Slider_AdjustSlider"),
        focusable: a,
        childFocusDisabled: this.props.disabled || !a,
        onContextMenu: this.OnContextMenu,
        onOKButton: this.props.disabled ? () => xe.PlayNavSound(25) : void 0,
        onSecondaryButton: this.CanResetToDefault
          ? this.ResetToDefault
          : void 0,
        onSecondaryActionDescription: this.CanResetToDefault
          ? E("#ResetToDefault")
          : void 0,
        actionDescriptionMap: b,
        children: (0, V.jsxs)(bt, {
          className: v(
            L.SliderControlAndNotches,
            this.props.disabled && L.Disabled,
            c && L.WithDefaultValue,
            c && f && L.DefaultValueIsColorRange,
            c && f && p.side == "left" && L.DefaultValueColorLeft,
            c && f && p.side != "left" && L.DefaultValueColorRight,
          ),
          focusable: this.isKeyNavTarget,
          noFocusRing: !0,
          onFocus: this.OnInnerSliderFocus,
          onBlur: this.OnInnerSliderBlur,
          style: {
            "--normalized-slider-value": this.normalizedClampedValue,
            "--normalized-slider-default-value": s,
            "--normalized-slider-origin": l,
            "--default-value-track-color": f ? p.trackForegroundColor : void 0,
            "--slider-extra-notch-padding":
              this.props.extraNotchPadding ?? "0px",
          },
          ref: Hn(this.m_refSlider, this.props.innerRef),
          navRef: this.m_navRefSlider,
          onGamepadDirection: this.OnGamepadDirection,
          onOKButton: this.BlurInnerSlider,
          onOKActionDescription: null,
          onCancelButton: this.BlurInnerSlider,
          onCancelActionDescription: E("#ActionButtonLabelDone"),
          children: [
            (0, V.jsxs)("div", {
              className: v(L.SliderControl, "SliderControl"),
              children: [
                (0, V.jsx)("div", {
                  className: v(
                    L.SliderTrack,
                    this.props.notchCount != null && o && L.SliderHasNotches,
                    { [L.SliderTrackDark]: this.props.trackTone === "dark" },
                    "SliderTrack",
                  ),
                }),
                c &&
                  d &&
                  (0, V.jsx)("div", {
                    className: L.DefaultValueTickContainer,
                    children: (0, V.jsx)("div", {
                      className: L.DefaultValueTick,
                      children: (0, V.jsx)(nn, { direction: "down" }),
                    }),
                  }),
                this.validRange &&
                  this.props.value != null &&
                  !isNaN(this.props.value) &&
                  this.showHandle &&
                  (0, V.jsx)("div", {
                    className: T,
                    children: (0, V.jsxs)("div", {
                      className: M,
                      ref: this.m_refHandle,
                      children: [
                        this.props.handleType == "leftparen" &&
                          (0, V.jsx)(cl, {}),
                        this.props.handleType == "rightparen" &&
                          (0, V.jsx)(ul, {}),
                      ],
                    }),
                  }),
              ],
            }),
            (0, V.jsx)(Hh, {
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
_([h], me.prototype, "RecomputeSliderBounds", 1),
  _([h], me.prototype, "SetDragMode", 1),
  _([h], me.prototype, "OnGamepadDirection", 1),
  _([h], me.prototype, "UpdateSliderValueForPosition", 1),
  _([h], me.prototype, "OnWindowMouseMove", 1),
  _([h], me.prototype, "OnWindowMouseUp", 1),
  _([h], me.prototype, "OnMouseDown", 1),
  _([h], me.prototype, "OnTouchStart", 1),
  _([h], me.prototype, "OnWindowTouchMove", 1),
  _([h], me.prototype, "OnWindowTouchEnd", 1),
  _([h], me.prototype, "Complete", 1),
  _([h], me.prototype, "BlurInnerSlider", 1),
  _([h], me.prototype, "OnInnerSliderFocus", 1),
  _([h], me.prototype, "OnInnerSliderBlur", 1),
  _([h], me.prototype, "ResetToDefault", 1),
  _([h], me.prototype, "OnContextMenu", 1);
function Hh(t) {
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
        (0, V.jsx)(
          Gh,
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
  return (0, V.jsx)(F, { className: v(L.SliderNotchContainer), children: l });
}
function Gh(t) {
  let e = t.notchIndex <= (t.notchCount - 1) * t.sliderValue,
    o = t.notchCount <= 3 && !t.notchTicksVisible,
    n = o && t.notchIndex == 0,
    r = o && t.notchIndex == t.notchCount - 1,
    i = { ...t, alignLeftEnd: n, alignRightEnd: r, active: e };
  return (0, V.jsx)("div", {
    className: v(L.SliderNotch, o && L.AlignToEnds),
    children: t.renderNotch ? t.renderNotch(i) : (0, V.jsx)(Vh, { ...i }),
  });
}
function Vh(t) {
  let { alignLeftEnd: e, alignRightEnd: o, active: n } = t;
  return (0, V.jsxs)(V.Fragment, {
    children: [
      t.notchTicksVisible &&
        (0, V.jsx)("div", {
          className: v(L.SliderNotchTick, n && L.TickActive),
        }),
      t.notchLabel &&
        (0, V.jsx)("div", {
          className: v(
            L.SliderNotchLabel,
            e && L.AlignToLeft,
            o && L.AlignToRight,
          ),
          children: t.notchLabel?.label,
        }),
    ],
  });
}
var bx = we.forwardRef(function (e, o) {
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
      (f) => {
        a(r);
      },
      [a, r],
    ),
    p = tl(c),
    d = Ae(p, o);
  return (0, V.jsx)("div", {
    className: L.CompoundSliderSubSliderLabel,
    ref: d,
    onMouseDown: s,
    onTouchStart: l,
    style: { transform: `translateX(${i}px)` },
    children: (0, V.jsx)("div", {
      className: L.CompoundSliderSubSliderLabelInternal,
      children: n,
    }),
  });
});
var Kd = u(w());
var ho = u(g()),
  qd = Kd.forwardRef(function (e, o) {
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
          r(d), xe.PlayNavSound(d ? 16 : 17);
        }
      };
    return (0, ho.jsxs)(bt, {
      noFocusRing: !0,
      className: v(a, y.Toggle, { [y.Disabled]: !!i, [y.On]: !!n }),
      onClick: p,
      ref: o,
      navRef: c,
      focusable: s,
      children: [
        (0, ho.jsx)("div", { className: y.ToggleRail }),
        (0, ho.jsx)("div", { className: y.ToggleSwitch }),
        l,
      ],
    });
  }),
  Or = class extends Xt {
    OnToggleChange(e) {
      !this.props.disabled && e !== this.checked && this.Toggle();
    }
    render() {
      let e = !!this.props.disabled,
        { actionDescriptions: o, gamepadEvents: n } = As(this.props);
      return (0, ho.jsx)(Ho, {
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
        children: (0, ho.jsx)(qd, {
          onChange: this.OnToggleChange,
          value: this.checked,
          disabled: e,
          navRef: this.props.navRef,
        }),
      });
    }
  };
_([h], Or.prototype, "OnToggleChange", 1);
var Ha = u(g());
function Ua(t) {
  let { children: e, bCenterVertically: o, refElem: n, ...r } = t,
    i = v(
      y.GamepadDialogContent,
      "DialogContent _DialogLayout",
      t.className,
      o && " _DialogCenterVertically",
    ),
    { ref: a, navRef: s } = gl(),
    l = Ae(n, a);
  return (0, Ha.jsx)(F, {
    ...r,
    className: i,
    ref: l,
    navRef: s,
    children: (0, Ha.jsx)(F, {
      className: v(
        y.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
var In = u(w());
var qo = u(g());
function em() {
  return In.useMemo(() => zh(), []);
}
function zh() {
  return function (e) {
    let {
        refNavTree: o,
        className: n,
        active: r,
        children: i,
        modalKey: a,
      } = e,
      s = In.useRef(null);
    Ls(s, r, !0);
    let l = Ae(s, o);
    return (0, qo.jsx)(Ts, {
      className: n,
      navTreeRef: l,
      modal: !0,
      enabled: r,
      navID: `ModalDialogOverlay_${a}`,
      children: i,
    });
  };
}
function jh(t) {
  let {
      className: e,
      onEscKeypress: o,
      padding: n = "standard",
      bGamepadUIScrollWithin: r,
      children: i,
    } = t,
    a = v(
      y.ModalPosition,
      n == "standard" && y.WithStandardPadding,
      r && y.ScrollWithin,
      e,
    );
  return (0, qo.jsx)(F, {
    className: a,
    onCancelButton: o,
    focusableIfNoChildren: !0,
    children: (0, qo.jsx)(Yn, { children: (0, qo.jsx)(ge, { children: i }) }),
  });
}
function tm(t) {
  let e = In.useMemo(() => ({ ModalPosition: jh }), []);
  return (0, qo.jsx)(ia.Provider, { value: e, children: t.children });
}
var Ur = u(g());
function Ga(t) {
  let e = em(),
    o = om.useMemo(() => ({ DropDownMenu: Oa, Content: Ua }), []);
  return (0, Ur.jsx)(Uo.Provider, {
    value: o,
    children: (0, Ur.jsx)(tm, {
      children: (0, Ur.jsx)(Fo, {
        ...t,
        bUseDialogElement: !1,
        DialogWrapper: e,
        ContextMenuComponent: rd,
      }),
    }),
  });
}
var Va = u(g());
function nm(t) {
  let e = rt(),
    o = { bRenderOverlayAtRoot: !0, bUsePopups: !1, ...t };
  return e ? (0, Va.jsx)(Ga, { ...o }) : (0, Va.jsx)(Fo, { ...o });
}
var bm = u(nt(), 1);
var rm = "/RDNVLABA.png";
var im = "/QQGETVBA.png";
var am = "/MVIQJMBA.png";
var sm = "/62SHH2CA.png";
var lm = "Ksy4XAVZlM0-";
var cm = "n2wjqqfVgC4-";
var za = "osYYItlitxA-";
var um = "knntvUEkLRg-";
var pm = "_1ToiOSH69g8-";
var dm = "s6DTWBl90Rc-";
var mm = "UnRkTYm5fo0-";
var _m = "ftmxCcsknb4-";
var gm = "byvXpNiaYrs-";
var fm = "y9kERlobJ88-";
var hm = "Hf0BSchKz6g-";
var D = u(g(), 1);
function Ye() {
  return (0, D.jsx)("span", {
    "aria-hidden": "true",
    className: fm,
    children: "|",
  });
}
function vm(t) {
  return (0, D.jsx)("footer", {
    className: (0, bm.default)(lm, t.className, !Qo.logged_in && cm),
    children: (0, D.jsxs)("div", {
      className: um,
      children: [
        (0, D.jsx)("hr", {}),
        (0, D.jsxs)("div", {
          className: pm,
          children: [
            (0, D.jsx)(A, {
              className: mm,
              to: "https://www.valvesoftware.com",
              openInNewWindow: !0,
              children: (0, D.jsx)("img", {
                src: ft(sm),
                alt: "Valve Software",
              }),
            }),
            (0, D.jsxs)("div", {
              className: dm,
              children: [
                (0, D.jsx)("div", {
                  children: Re.Localize(
                    "#footer_legal_notice",
                    new Date().getFullYear(),
                  ),
                }),
                (0, D.jsxs)("div", {
                  children: [
                    Re.Localize("#footer_vat_included"),
                    "  ",
                    (0, D.jsx)(A, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "privacy_agreement/",
                      children: Re.Localize("#footer_privacy_policy"),
                    }),
                    (0, D.jsx)(Ye, {}),
                    (0, D.jsx)(A, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "legal/",
                      children: Re.Localize("#footer_legal"),
                    }),
                    (0, D.jsx)(Ye, {}),
                    (0, D.jsx)(A, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "subscriber_agreement/",
                      children: Re.Localize("#footer_ssa"),
                    }),
                    (0, D.jsx)(Ye, {}),
                    (0, D.jsx)(A, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "steam_refunds/",
                      children: Re.Localize("#footer_refunds"),
                    }),
                    (0, D.jsx)(Ye, {}),
                    (0, D.jsx)(A, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "account/cookiepreferences/",
                      children: Re.Localize("#footer_cookies"),
                    }),
                  ],
                }),
              ],
            }),
            (0, D.jsx)("div", {
              className: _m,
              children: (0, D.jsx)("img", {
                src: ft(am),
                alt: "Valve Software",
              }),
            }),
          ],
        }),
        Eo() &&
          (0, D.jsx)("div", {
            className: gm,
            children: (0, D.jsx)("button", {
              onClick: ku,
              children: U.Localize("#global_menu_view_mobile_website"),
            }),
          }),
        (0, D.jsx)("hr", {}),
        (0, D.jsxs)("div", {
          className: hm,
          children: [
            (0, D.jsx)(A, {
              openInNewWindow: !0,
              to: "https://www.valvesoftware.com/about",
              children: Re.Localize("#footer_about_valve"),
            }),
            (0, D.jsx)(Ye, {}),
            (0, D.jsx)(A, {
              openInNewWindow: !0,
              to: "http://www.valvesoftware.com",
              children: Re.Localize("#footer_jobs"),
            }),
            (0, D.jsx)(Ye, {}),
            (0, D.jsx)(A, {
              openInNewWindow: !0,
              to: "http://www.steampowered.com/steamworks/",
              children: Re.Localize("#footer_steamworks"),
            }),
            (0, D.jsx)(Ye, {}),
            (0, D.jsx)(A, {
              openInNewWindow: !0,
              to: R.PARTNER_BASE_URL + "steamdirect",
              children: Re.Localize("#footer_steam_distribution"),
            }),
            (0, D.jsx)(Ye, {}),
            (0, D.jsx)(A, {
              external: !0,
              to: R.HELP_BASE_URL + Po().strISOCode + "/",
              children: Re.Localize("#footer_nav_help_support"),
            }),
            (0, D.jsx)(Ye, {}),
            R.COUNTRY === "US" &&
              (0, D.jsxs)(D.Fragment, {
                children: [
                  (0, D.jsx)(A, {
                    snr: !0,
                    external: !0,
                    to: R.STORE_BASE_URL + "hardware_recycling/",
                    children: Re.Localize("#footer_recycling"),
                  }),
                  (0, D.jsx)(Ye, {}),
                ],
              }),
            !ot(R.EREALM) &&
              (0, D.jsxs)(D.Fragment, {
                children: [
                  (0, D.jsx)(A, {
                    snr: !0,
                    external: !0,
                    to: R.STORE_BASE_URL + "digitalgiftcards/",
                    children: Re.Localize("#footer_walletcode"),
                  }),
                  (0, D.jsx)(Ye, {}),
                  (0, D.jsxs)(A, {
                    openInNewWindow: !0,
                    to: "http://www.facebook.com/Steam",
                    children: [
                      (0, D.jsx)("img", {
                        src: ft(rm),
                        alt: "Facebook",
                        className: za,
                      }),
                      " Steam",
                    ],
                  }),
                  (0, D.jsx)(Ye, {}),
                  (0, D.jsxs)(A, {
                    openInNewWindow: !0,
                    to: "http://twitter.com/steam",
                    children: [
                      (0, D.jsx)("img", {
                        src: ft(im),
                        alt: "X",
                        className: za,
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
var et = {
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
var Cm = "qxuaSNtrNvE-";
var Rm = "v2uRRqcZpzM-";
var Nn = "_-4fVuiRLPho-";
var Pm = "ntJcAB2O7Fk-";
var Sm = "egWCUcRU2LI-";
var wm = "CKr-BZNYbas-";
var Xo = u(w());
var Mm = "_5de1w948geo-";
var Dm = "khWjubQ0dGo-";
var ym = "_5f3k46d-01g-";
var Lt = u(g(), 1);
function Tm() {
  return (0, Lt.jsxs)("form", {
    method: "GET",
    action: `${R.STORE_BASE_URL}search`,
    className: Mm,
    children: [
      (0, Lt.jsx)("input", {
        className: Dm,
        name: "q",
        placeholder: Pt.Localize("#Menu_SearchPlaceholder"),
      }),
      (0, Lt.jsx)("button", {
        className: ym,
        type: "submit",
        children: (0, Lt.jsx)(Kh, {}),
      }),
    ],
  });
}
function Kh(t) {
  return (0, Lt.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 20",
    fill: "none",
    ...t,
    children: (0, Lt.jsx)("g", {
      children: (0, Lt.jsx)("path", {
        fill: "currentColor",
        d: "M14.5382 13.1495C15.5866 11.6421 16.0327 9.7968 15.7887 7.97691C15.5447 6.15702 14.6282 4.4944 13.2197 3.31636C11.8113 2.13833 10.0128 1.53023 8.17847 1.61178C6.34411 1.69333 4.60673 2.45862 3.30835 3.75699C2.00998 5.05536 1.24469 6.79275 1.16314 8.62711C1.08159 10.4615 1.68969 12.2599 2.86772 13.6684C4.04576 15.0768 5.70838 15.9933 7.52827 16.2373C9.34816 16.4813 11.1935 16.0352 12.7009 14.9868L15.987 18.2781L16.1759 18.0891L17.6562 16.6088L17.8452 16.4198L14.5382 13.1495ZM8.5015 13.6745C7.56711 13.6745 6.65371 13.3974 5.87679 12.8783C5.09988 12.3592 4.49435 11.6213 4.13678 10.7581C3.7792 9.8948 3.68564 8.9449 3.86793 8.02846C4.05022 7.11203 4.50017 6.27023 5.16088 5.60952C5.82159 4.94881 6.66339 4.49886 7.57982 4.31657C8.49626 4.13428 9.44616 4.22784 10.3094 4.58541C11.1727 4.94299 11.9105 5.54852 12.4296 6.32543C12.9488 7.10235 13.2258 8.01575 13.2258 8.95014C13.2258 10.2031 12.7281 11.4048 11.8421 12.2907C10.9561 13.1767 9.75447 13.6745 8.5015 13.6745Z",
      }),
    }),
  });
}
var g_ = u(nt());
var d_ = u(ht(), 1);
var km = "_8jYEPRQ-5m4-";
var Am = "DkDkgW5s5IY-";
var xm = "_7xtK0r5UTx8-";
var Em = "_98YR25-xVdk-";
var Lm = "jXApoIO8dJY-";
var Bm = "auILN5pfzL4-";
var Im = "y-9ESlli0eo-";
var Nm = "cxcmftFqzcI-";
var Fm = "QNZ0SISqT4A-";
var ja = "T1kJZm1B9Dg-";
var Om = "_8pjzPcuVTaA-";
var Um = "_4sgfooX5sIY-";
var Wm = "fZm0hzbW-hI-";
var Yo = u(w(), 1);
var s_ = u(nt(), 1);
var Hm = "Xt4BdOiy1FU-";
var Gm = "yngW2pJBTpk-";
var Vm = "RjWLjI4Nl8k-";
var zm = "izdllajEUaU-";
var jm = "cQg1Li41uAM-";
var qm = "vWR3MFqTiyA-";
var vo = u(g(), 1);
function Ym(t) {
  return (0, vo.jsx)("div", { className: Hm, children: t.children });
}
function Xm(t) {
  return (0, vo.jsx)("div", {
    role: "heading",
    "aria-level": 2,
    className: Gm,
    children: t.children,
  });
}
function Qm(t) {
  return (0, vo.jsx)(F, {
    "flow-children": "row",
    className: Vm,
    children: t.children,
  });
}
function Jm(t) {
  return (0, vo.jsx)("div", { className: zm, children: t.children });
}
function $m(t) {
  return (0, vo.jsx)(F, {
    "flow-children": "column",
    className: jm,
    children: t.children,
  });
}
function bo(t) {
  return (0, vo.jsx)("a", {
    href: t.href,
    className: qm,
    children: t.children,
  });
}
var Zm = "AcamE8XjlRc-";
var Km = "R36Rw1h-qoE-";
var e_ = "SKGIeivRLBQ-";
var t_ = "_3F97bh9lwUk-";
var o_ = "fvfKoqTIR1A-";
var n_ = "nMUDkkNnT1Y-";
var r_ = "LPVi2CukTHc-";
var i_ = "NJjZeQN1Jg0-";
var q = u(g(), 1);
function a_() {
  return (0, q.jsxs)(Ym, {
    children: [
      (0, q.jsx)(Xm, { children: H("#Menu_Section_Recommendations") }),
      (0, q.jsxs)(Qm, {
        children: [
          (0, q.jsx)(Jm, { children: (0, q.jsx)(ib, {}) }),
          (0, q.jsx)(rb, {}),
        ],
      }),
    ],
  });
}
function rb() {
  return (0, q.jsxs)($m, {
    children: [
      (0, q.jsx)(bo, {
        href: `${Z.STORE_BASE_URL}explore/next/3`,
        children: H("#Menu_Section_Recommendations_NewReleasesQueue"),
      }),
      (0, q.jsx)(bo, {
        href: `${Z.STORE_BASE_URL}communityrecommendations/`,
        children: H("#Menu_Section_Recommendations_CommunityRecommendations"),
      }),
      (0, q.jsx)(bo, {
        href: `${Z.STORE_BASE_URL}recommender/`,
        children: H("#Menu_Section_Recommendations_InteractiveRecommender"),
      }),
      (0, q.jsx)(bo, {
        href: `${Z.STORE_BASE_URL}recommended/friendactivity/`,
        children: H("#Menu_Section_Recommendations_PopularAmongFriends"),
      }),
      (0, q.jsx)(bo, {
        href: `${Z.STORE_BASE_URL}curators/`,
        children: H("#Menu_Section_Recommendations_SteamCurators"),
      }),
      (0, q.jsx)(bo, {
        href: `${Z.STORE_BASE_URL}dlcforyou/`,
        children: H("#Menu_Section_Recommendations_DLCForYou"),
      }),
    ],
  });
}
function ib() {
  return (0, q.jsxs)("div", {
    className: Zm,
    children: [
      (0, q.jsx)("div", {
        className: Km,
        children: (0, q.jsx)("div", { className: e_ }),
      }),
      (0, q.jsxs)("div", {
        className: t_,
        children: [
          (0, q.jsx)("div", {
            className: o_,
            children: H("#Menu_Section_Recommendations_DiscoveryQueue_Title"),
          }),
          (0, q.jsx)("div", {
            className: n_,
            children: H(
              "#Menu_Section_Recommendations_DiscoveryQueue_Description",
            ),
          }),
          (0, q.jsxs)("a", {
            className: r_,
            href: `${Z.STORE_BASE_URL}explore/next/0`,
            children: [
              (0, q.jsx)("span", {
                className: i_,
                children: H(
                  "#Menu_Section_Recommendations_DiscoveryQueue_ActionButton",
                ),
              }),
              (0, q.jsx)(ab, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function ab() {
  return (0, q.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 18 16",
    fill: "none",
    children: (0, q.jsx)("path", {
      fill: "currentColor",
      d: "M11.0941 6.30047L7.19722 2.40354L9.60075 -3.86836e-07L17.6008 8L9.60075 16L7.19722 13.5965L11.0941 9.69958L0.750976 9.69958L0.750976 6.30047L11.0941 6.30047Z",
    }),
  });
}
var ve = u(g(), 1);
function l_() {
  let [t, e] = Yo.useState("today"),
    o = Yo.useMemo(
      () => [
        ["today", H("#Menu_Popover_Today")],
        ["recommendations", H("#Menu_Popover_Recommendations")],
        ["categories", H("#Menu_Popover_Categories")],
        ["hardware", H("#Menu_Popover_Hardware")],
        ["waystoplay", H("#Menu_Popover_WaysToPlay")],
        ["specialsections", H("#Menu_Popover_SpecialSections")],
      ],
      [],
    );
  return (0, ve.jsxs)("div", {
    className: Nm,
    children: [
      (0, ve.jsxs)("div", {
        className: Fm,
        children: [
          o.map(([n, r]) =>
            (0, ve.jsx)(
              lb,
              { active: t == n, setSection: e, section: n, children: r },
              n,
            ),
          ),
          (0, ve.jsx)(xs, {
            className: ja,
            href: Z.STORE_BASE_URL,
            children: H("#Menu_Popover_ViewAll"),
          }),
        ],
      }),
      (0, ve.jsx)(sb, { section: t }),
    ],
  });
}
function sb(t) {
  let { section: e } = t;
  switch (e) {
    case "today":
      return "TODAY ON STEAM";
    case "recommendations":
      return (0, ve.jsx)(a_, {});
    case "categories":
      return "CATEGORIES";
    case "hardware":
      return "HARDWARE";
    case "waystoplay":
      return "WAYS TO PLAY";
    case "specialsections":
      return "SPECIAL SECTIONS";
    default:
      return ns(e, `Unknown section ${e}`), null;
  }
}
function lb(t) {
  let { setSection: e, active: o, section: n, children: r } = t,
    i = Yo.useCallback(() => e(n), [e, n]);
  return (0, ve.jsxs)(Wt, {
    className: (0, s_.default)(ja, o && Wm),
    onClick: i,
    onMouseEnter: i,
    children: [r, " ", (0, ve.jsx)(cb, {})],
  });
}
function cb() {
  return (0, ve.jsxs)(ve.Fragment, {
    children: [
      (0, ve.jsx)("div", { className: Om }),
      (0, ve.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 13",
        fill: "none",
        className: Um,
        children: (0, ve.jsx)("path", {
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M6.36084 6.68974L3.66211 3.99101L4.84062 2.8125L8.71786 6.68974L4.84062 10.567L3.66211 9.38847L6.36084 6.68974Z",
        }),
      }),
    ],
  });
}
var Bt = u(w()),
  c_ = u(ht()),
  p_ = u(g());
function u_(t) {
  let {
      visible: e = !0,
      className: o,
      keepMounted: n = !1,
      expandDirection: r = "height",
      msAnimationDuration: i = 250,
      children: a,
    } = t,
    { style: s, active: l, refDiv: c } = ub(e, r, i);
  return !e && !l && !n
    ? null
    : (0, p_.jsx)("div", { className: o, ref: c, style: s, children: a });
}
function ub(t, e = "height", o = 250) {
  let n = Bt.useRef(null),
    r = Bt.useRef(!0),
    [i, a] = Bt.useState("idle"),
    [s, l] = Bt.useState({});
  return (
    Bt.useLayoutEffect(() => {
      r.current ? (r.current = !1) : a("start");
    }, [t]),
    Bt.useLayoutEffect(() => {
      let p = n.current,
        d = e == "height" ? "scrollHeight" : "scrollWidth",
        f = () => {
          c_.unstable_batchedUpdates(() => {
            l({}), a("idle");
          });
        };
      if (i == "start") {
        let b = p[d];
        b == 0
          ? f()
          : (l((M) => ({
              [e]: t ? "0px" : `${b}px`,
              ...M,
              overflow: "hidden",
            })),
            a("active"));
      } else if (i == "active") {
        p.scrollTop;
        let b = p[d];
        return (
          l({ overflow: "hidden", [e]: t ? `${b}px` : "0px" }),
          p.addEventListener("transitionend", f),
          () => {
            p.removeEventListener("transitionend", f);
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
var m_ = u(nt(), 1),
  ae = u(g(), 1);
function __(t) {
  let { visible: e, refPage: o, closePopover: n } = t;
  return (0, ae.jsxs)(ae.Fragment, {
    children: [
      (0, ae.jsx)(u_, {
        visible: e,
        className: km,
        msAnimationDuration: 100,
        children: (0, ae.jsx)("div", {
          className: Am,
          children: (0, ae.jsxs)("div", {
            className: xm,
            children: [(0, ae.jsx)(db, {}), (0, ae.jsx)(l_, {})],
          }),
        }),
      }),
      (0, ae.jsx)(pb, { active: e, refPage: o, closePopover: n }),
    ],
  });
}
function pb(t) {
  let { active: e, refPage: o, closePopover: n } = t;
  return d_.createPortal(
    (0, ae.jsx)("div", { className: (0, m_.default)(Em, e && Lm), onClick: n }),
    o.current,
  );
}
function db() {
  return (0, ae.jsxs)("div", {
    className: Bm,
    children: [
      (0, ae.jsx)(Co, {
        href: R.STORE_BASE_URL,
        children: H("#Menu_Popover_StoreHome"),
      }),
      (0, ae.jsx)(Co, {
        href: `${R.STORE_BASE_URL}genre/Free%20to%20Play/`,
        children: H("#Menu_Popover_FreeToPlay"),
      }),
      (0, ae.jsx)(Co, {
        href: `${R.STORE_BASE_URL}charts/`,
        children: H("#Menu_Popover_SteamCharts"),
      }),
      (0, ae.jsx)(Co, {
        href: `${R.STORE_BASE_URL}points/`,
        children: H("#Menu_Popover_PointsShop"),
      }),
      (0, ae.jsx)(Co, {
        href: `${R.STORE_BASE_URL}digitalgiftcards/`,
        children: H("#Menu_Popover_GiftCards"),
      }),
      (0, ae.jsx)(Co, {
        href: `${R.STORE_BASE_URL}news/`,
        children: H("#Menu_Popover_NewsAndUpdates"),
      }),
      (0, ae.jsx)(Co, {
        href: `${R.STORE_BASE_URL}account/preferences/`,
        children: H("#Menu_Popover_Preferences"),
      }),
    ],
  });
}
function Co(t) {
  let { href: e, children: o } = t;
  return (0, ae.jsx)("a", { href: e, className: Im, children: o });
}
var f_ = u(w());
var k = u(g()),
  h_ = Xo.memo(function (e) {
    let { refPage: o } = e;
    return (0, k.jsx)("div", {
      className: Cm,
      children: (0, k.jsx)(mb, { refPage: o }),
    });
  });
function mb(t) {
  let { refPage: e } = t,
    o = Xo.useRef(null),
    [n, r, i] = ds();
  return (
    (0, f_.useEffect)(() => {
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
    (0, k.jsxs)(k.Fragment, {
      children: [
        (0, k.jsxs)("div", {
          className: Rm,
          ref: o,
          children: [
            (0, k.jsx)(_b, { onClick: n ? i : r }),
            (0, k.jsx)(Wr, {}),
            (0, k.jsx)(qa, {
              strURL: `${R.STORE_BASE_URL}charts/topselling/`,
              children: Pt.Localize("#Menu_TopSellers"),
            }),
            (0, k.jsx)(Wr, {}),
            (0, k.jsx)(qa, {
              strURL: `${R.STORE_BASE_URL}explore/new/`,
              children: Pt.Localize("#Menu_NewReleases"),
            }),
            (0, k.jsx)(Wr, {}),
            (0, k.jsx)(qa, {
              strURL: `${R.STORE_BASE_URL}specials/`,
              children: Pt.Localize("#Menu_OnSale"),
            }),
            (0, k.jsx)(Tm, {}),
            (0, k.jsx)(gb, {}),
            (0, k.jsx)(Wr, {}),
            (0, k.jsx)(fb, {}),
          ],
        }),
        (0, k.jsx)(__, { visible: n, refPage: t.refPage, closePopover: i }),
      ],
    })
  );
}
function Wr() {
  return (0, k.jsx)("div", { className: wm });
}
function _b(t) {
  let { onClick: e } = t;
  return (0, k.jsx)(k.Fragment, {
    children: (0, k.jsxs)(Wt, {
      className: Nn,
      onClick: e,
      children: [(0, k.jsx)(hb, {}), " ", Pt.Localize("#Menu_OpenFlyout")],
    }),
  });
}
function qa(t) {
  let { strURL: e, children: o } = t;
  return (0, k.jsx)("a", {
    className: (0, g_.default)(Nn, Sm),
    href: e,
    children: o,
  });
}
function gb() {
  return (0, k.jsxs)("a", {
    className: Nn,
    href: `${R.STORE_BASE_URL}wishlist/`,
    children: [
      (0, k.jsx)(bb, {}),
      Pt.Localize("#Menu_Wishlist"),
      " ",
      (0, k.jsx)(b_, { children: "5" }),
    ],
  });
}
function b_(t) {
  return (0, k.jsx)("span", { className: Pm, children: t.children });
}
function fb() {
  return (0, k.jsxs)("a", {
    className: Nn,
    href: `${R.STORE_BASE_URL}cart/`,
    children: [
      (0, k.jsx)(vb, {}),
      Pt.Localize("#Menu_Cart"),
      " ",
      (0, k.jsx)(b_, { children: "2" }),
    ],
  });
}
function hb(t) {
  return (0, k.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 12",
    fill: "none",
    ...t,
    children: (0, k.jsxs)("g", {
      children: [
        (0, k.jsx)("rect", {
          fill: "currentColor",
          x: "0.458984",
          width: "13.9393",
          height: "2.23028",
        }),
        (0, k.jsx)("rect", {
          fill: "currentColor",
          x: "0.458984",
          y: "4.46094",
          width: "13.9393",
          height: "2.23028",
        }),
        (0, k.jsx)("rect", {
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
function bb(t) {
  return (0, k.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 17 18",
    fill: "none",
    ...t,
    children: [
      (0, k.jsx)("path", {
        fill: "currentColor",
        d: "M7.35571 4.84717L8.571 8.61455C8.72291 9.13104 9.14826 9.52601 9.66475 9.7083L13.4321 10.9236L9.66475 12.1389C9.14826 12.2908 8.75329 12.7161 8.571 13.2326L7.35571 17L6.14043 13.2326C5.98852 12.7161 5.56317 12.3212 5.04667 12.1389L1.2793 10.9236L5.04667 9.7083C5.56317 9.55639 5.95814 9.13104 6.14043 8.61455L7.35571 4.84717Z",
      }),
      (0, k.jsx)("path", {
        fill: "currentColor",
        d: "M11.2353 2.90283L11.7737 4.58905C11.8455 4.82476 12.025 5.00607 12.2584 5.0786L13.9276 5.62254L12.2584 6.16648C12.025 6.239 11.8455 6.42032 11.7737 6.65602L11.2353 8.34224L10.6968 6.65602C10.625 6.42032 10.4455 6.239 10.2122 6.16648L8.54297 5.62254L10.2122 5.0786C10.4455 5.00607 10.625 4.82476 10.6968 4.58905L11.2353 2.90283Z",
      }),
      (0, k.jsx)("path", {
        fill: "currentColor",
        d: "M4.44381 3.29138L4.71304 4.14356C4.74894 4.25234 4.83868 4.343 4.94637 4.37926L5.78996 4.65123L4.94637 4.9232C4.83868 4.95947 4.74894 5.05012 4.71304 5.15891L4.44381 6.01109L4.17458 5.15891C4.13868 5.05012 4.04894 4.95947 3.94125 4.9232L3.09766 4.65123L3.94125 4.37926C4.04894 4.343 4.13868 4.25234 4.17458 4.14356L4.44381 3.29138Z",
      }),
      (0, k.jsx)("path", {
        fill: "currentColor",
        d: "M13.7797 6.79138L14.049 7.64356C14.0849 7.75234 14.1746 7.843 14.2823 7.87926L15.1259 8.15123L14.2823 8.4232C14.1746 8.45947 14.0849 8.55012 14.049 8.65891L13.7797 9.51108L13.5105 8.65891C13.4746 8.55012 13.3849 8.45947 13.2772 8.4232L12.4336 8.15123L13.2772 7.87926C13.3849 7.843 13.4746 7.75234 13.5105 7.64356L13.7797 6.79138Z",
      }),
    ],
  });
}
function vb(t) {
  return (0, k.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 15 16",
    fill: "none",
    ...t,
    children: (0, k.jsx)("path", {
      fill: "currentColor",
      d: "M14.0132 4.85417L12.5465 10.1708C12.4763 10.4387 12.3192 10.6758 12.0997 10.8447C11.8803 11.0136 11.6109 11.1049 11.334 11.1042H6.14648C5.87656 11.1044 5.61379 11.0173 5.39749 10.8558C5.18119 10.6944 5.02296 10.4672 4.94648 10.2083L3.15065 4.85417H0.833984V3.1875H3.45065C3.71251 3.18799 3.9676 3.2707 4.17992 3.42396C4.39224 3.57722 4.55106 3.79329 4.63398 4.04167L4.90898 4.875L14.0132 4.85417ZM6.25065 12.7708C6.04463 12.7708 5.84323 12.8319 5.67193 12.9464C5.50063 13.0608 5.36712 13.2235 5.28828 13.4139C5.20944 13.6042 5.18881 13.8137 5.229 14.0157C5.26919 14.2178 5.3684 14.4034 5.51408 14.5491C5.65976 14.6947 5.84537 14.794 6.04743 14.8342C6.2495 14.8743 6.45894 14.8537 6.64928 14.7749C6.83962 14.696 7.00231 14.5625 7.11677 14.3912C7.23123 14.2199 7.29232 14.0185 7.29232 13.8125C7.29232 13.5362 7.18257 13.2713 6.98722 13.0759C6.79187 12.8806 6.52692 12.7708 6.25065 12.7708ZM11.2507 12.7708C11.0446 12.7708 10.8432 12.8319 10.6719 12.9464C10.5006 13.0608 10.3671 13.2235 10.2883 13.4139C10.2094 13.6042 10.1888 13.8137 10.229 14.0157C10.2692 14.2178 10.3684 14.4034 10.5141 14.5491C10.6598 14.6947 10.8454 14.794 11.0474 14.8342C11.2495 14.8743 11.4589 14.8537 11.6493 14.7749C11.8396 14.696 12.0023 14.5625 12.1168 14.3912C12.2312 14.2199 12.2923 14.0185 12.2923 13.8125C12.2923 13.5362 12.1826 13.2713 11.9872 13.0759C11.7919 12.8806 11.5269 12.7708 11.2507 12.7708Z",
    }),
  });
}
var v_ = u(w(), 1),
  z = u(g(), 1),
  Cb = Bs({ Component: Rb });
function Rb({ children: t }) {
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
    } = Cb.useLoaderData(),
    p = (0, v_.useRef)(null),
    d = s.length > 0;
  return (
    R.IN_GAMEPADUI && (window.bSupportsGamepadUI = !0),
    (0, z.jsx)(Pb, {
      strWebAPIToken: e,
      steamid: r,
      storeBrowseContext: i,
      children: (0, z.jsxs)("html", {
        lang: Po().strISOCode,
        className: (0, Hr.default)(et.Root, yu()),
        children: [
          (0, z.jsx)("head", { children: (0, z.jsx)(is, {}) }),
          (0, z.jsx)("body", {
            className: (0, Hr.default)(et.StoreBody, d && "gamepadui"),
            children: (0, z.jsx)(ks, {
              navID: "StoreTemplate",
              disabledRoot: !R.IN_GAMEPADUI,
              children: (0, z.jsx)("div", {
                className: (0, Hr.default)(
                  et.StoreBodyContainer,
                  c && et.Scrollable,
                ),
                children: (0, z.jsx)(Yn, {
                  children: (0, z.jsxs)(nm, {
                    children: [
                      a &&
                        (0, z.jsx)(cp, {
                          navContent: o.navContent,
                          globalActions: o.globalActions,
                          notifications: o.notifications,
                          userDetails: n,
                          changeLanguagePath: "/account/setlanguage/",
                          cartInResponsiveMenu: !0,
                          className: et.Header,
                          children: (0, z.jsxs)("div", {
                            className: et.InternalOptions,
                            children: [
                              l && (0, z.jsx)(mp, {}),
                              (0, z.jsx)(vl, { buttonClassName: et.Text }),
                            ],
                          }),
                        }),
                      hl() && (0, z.jsx)(h_, { refPage: p }),
                      (0, z.jsxs)("section", {
                        className: et.StoreContent,
                        ref: p,
                        children: [
                          (0, z.jsx)("div", { className: et.LoadingIndicator }),
                          (0, z.jsx)(Rl, { gamepadUiTabs: s }),
                          (0, z.jsx)(nc, {}),
                          (0, z.jsx)(as, { children: t }),
                        ],
                      }),
                      !R.IN_GAMEPADUI &&
                        (0, z.jsx)(vm, { className: et.Footer }),
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
function Pb(t) {
  let { strWebAPIToken: e, steamid: o, storeBrowseContext: n, children: r } = t;
  return (0, z.jsx)(Fs, {
    IN_GAMEPADUI: R.IN_GAMEPADUI,
    children: (0, z.jsx)(sc, {
      children: (0, z.jsx)(bp, {
        strWebAPIToken: e,
        steamid: o,
        children: (0, z.jsx)(Cp, {
          children: (0, z.jsx)(ml, {
            context: n,
            msDelayBatch: 250,
            children: r,
          }),
        }),
      }),
    }),
  });
}
export { Cb as route };
