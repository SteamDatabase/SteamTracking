const CLSTAMP = 9580955;

import {
  A as Xs,
  B as Qs,
  C as Qr,
  D as Js,
  E as $s,
  F as Zs,
  G as Jr,
  H as $o,
  I as Hm,
  J as Zo,
  K as $r,
  N as Ks,
  O as el,
  P as tl,
  Q as ol,
  a as Us,
  b as It,
  c as Xr,
  h as Hs,
  i as Po,
  l as Gs,
  m as Vs,
  n as zs,
  s as js,
  w as qs,
  x as zn,
  y as Jo,
  z as So,
} from "./chunk-OJBO752L.js";
import "./chunk-SVQYPCYS.js";
import { a as h, c as de } from "./chunk-BGIISAMC.js";
import { a as Qo } from "./chunk-YL4GTWCH.js";
import "./chunk-JB6FMTC3.js";
import {
  a as _t,
  d as ys,
  i as gt,
  u as B,
  v as Es,
  x as Ls,
} from "./chunk-KAAR4DYW.js";
import { a as Um } from "./chunk-ZKK26LDA.js";
import { b as Ro, d as rl, e as cl } from "./chunk-M3XBA5ZB.js";
import "./chunk-PDBQJ5NI.js";
import {
  A as nl,
  a as Bs,
  b as Is,
  c as Xo,
  d as On,
  e as Un,
  f as ft,
  g as Wn,
  h as Hn,
  i as Fs,
} from "./chunk-RW6W3RLP.js";
import "./chunk-OJBFIBKV.js";
import { a as Ke, b as x, c as Vn, e as ll } from "./chunk-HSEX7JW7.js";
import { h as Ws } from "./chunk-WB4IGSZS.js";
import "./chunk-IG2PNMJ3.js";
import { A as bt, B as Ft, j as il } from "./chunk-XQHMYBDG.js";
import "./chunk-GC7PWKLS.js";
import {
  F as Ns,
  G as Os,
  a as Wm,
  b as P,
  c as S,
  d as J,
  e as $,
  f as Z,
  g as K,
  h as ee,
  i as te,
  o as es,
  r as Hr,
  t as Gr,
  u as De,
} from "./chunk-YRV5L4Y2.js";
import "./chunk-ADCMD5UX.js";
import { a as kt } from "./chunk-Y2CSMDO7.js";
import { a as Ka } from "./chunk-JE6M6J5X.js";
import {
  a as Gn,
  c as al,
  d as jn,
  e as wo,
  f as Mo,
  h as sl,
  k as be,
} from "./chunk-QPW2HOGZ.js";
import {
  A as Co,
  B as ws,
  G as Ms,
  H as U,
  a as Te,
  b as ds,
  c as Lt,
  d as ms,
  e as _s,
  f as gs,
  h as je,
  i as Yo,
  j as fs,
  k as bs,
  l as hs,
  n as Yr,
  o as vs,
  p as Cs,
  r as Rs,
  s as Ps,
  v as Ss,
  x as Bt,
  y as vo,
} from "./chunk-SGKW4IKV.js";
import { a as Et } from "./chunk-AHYZ7DGW.js";
import { a as Ys } from "./chunk-XTWA6ZP4.js";
import {
  A as qr,
  B as us,
  C as ps,
  a as qt,
  b as ye,
  c as Fn,
  d as ts,
  e as Vr,
  f as os,
  g as At,
  h as zr,
  i as ns,
  j as jr,
  k as xt,
  m as rs,
  n as is,
  p as as,
  q as Nn,
  s as ss,
  t as ls,
  v as cs,
} from "./chunk-NGWCM2N4.js";
import {
  a as Ts,
  b as ks,
  c as et,
  e as As,
  f as xs,
} from "./chunk-YWYXIFU5.js";
import "./chunk-OIAXXOCA.js";
import "./chunk-EV7XDJJR.js";
import { a as pe } from "./chunk-B7FVGLFO.js";
import { a as Ds } from "./chunk-EJBY2DWF.js";
import {
  a as Bn,
  c as jo,
  g as ho,
  s as $a,
  t as Za,
} from "./chunk-RGPKKWDG.js";
import "./chunk-S33DKKWZ.js";
import { c as Ln } from "./chunk-HL5J6CF5.js";
import {
  d as Ja,
  g as In,
  i as qo,
  n as Ze,
  r as f,
} from "./chunk-FB3EMUNJ.js";
import {
  a as bo,
  b as En,
  c as Qa,
  g as Ie,
  i as mt,
  j as R,
  k as zo,
  m as g,
} from "./chunk-P7UTOOWD.js";
import { a as M } from "./chunk-2M6UGZTQ.js";
import { d as u, e as m, f as Xa } from "./chunk-HHQ2KM4L.js";
function qn() {
  return location.href;
}
function ul(t) {
  return t == 1 || t == 2 || t == 13;
}
var Yn = u(M(), 1);
var Zr = u(g(), 1),
  Gm = Yn.default.lazy(() => import("./metrics-U4HQQL2M.js"));
function pl(t) {
  let e = $a();
  return e.metrics
    ? (0, Zr.jsx)(Yn.Suspense, {
        children: (0, Zr.jsx)(Gm, { metrics: e.metrics, ...t }),
      })
    : null;
}
var dl = u(Et(), 1);
var Ko = {
  HeaderContainer: "NS66-vzC3B4-",
  PillTabs: "HfUir0ARlEg-",
  PillTabItem: "_6YKIMRZJgjI-",
  Active: "cVEuwqCXKqk-",
};
var Xn = u(g(), 1);
function ml(t) {
  let { gamepadUiTabs: e } = t;
  if (e.length === 0) return null;
  let o = qn(),
    n = [...e]
      .sort((r, i) => i.href.length - r.href.length)
      .find((r) => o.startsWith(r.href));
  return (0, Xn.jsx)("div", {
    className: Ko.HeaderContainer,
    children: (0, Xn.jsx)("div", {
      className: Ko.PillTabs,
      children: e.map((r) =>
        (0, Xn.jsx)(
          x,
          {
            gamepadFocusable: !0,
            noFocusRing: !0,
            className: (0, dl.default)(
              Ko.PillTabItem,
              r === n && Ko.Active,
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
var Qn = u(M());
var _l = "D6LHFgi1JYw-";
var gl = "-ygkyFbonHM-";
var fl = "-ocPE8koGWA-";
var bl = "wScBjl6G2E8-";
var Kr = "J8QB0JMqyaM-";
var hl = "-mBLWqp7JFk-";
var vl = "./cookies_brazilian-K4WP2HCA.json";
var Cl = "./cookies_bulgarian-3F25L7AA.json";
var Rl = "./cookies_czech-WZ2UGHAA.json";
var Pl = "./cookies_danish-UON7TKDA.json";
var Sl = "./cookies_dutch-GCBILAAA.json";
var wl = "./cookies_english-FDTNVUAA.json";
var Ml = "./cookies_finnish-ZUSYHYAA.json";
var Dl = "./cookies_french-NATP6HBA.json";
var yl = "./cookies_german-5QBUI7CA.json";
var Tl = "./cookies_greek-AWKYX4DA.json";
var kl = "./cookies_hungarian-7N6TKDDA.json";
var Al = "./cookies_indonesian-TTEY42CA.json";
var xl = "./cookies_italian-YNFQT3DA.json";
var El = "./cookies_japanese-XFKOMEAA.json";
var Ll = "./cookies_koreana-Z2MV63BA.json";
var Bl = "./cookies_latam-KMOOIBBA.json";
var Il = "./cookies_norwegian-NQ26SHAA.json";
var Fl = "./cookies_polish-535OIIBA.json";
var Nl = "./cookies_portuguese-UMJSLPBA.json";
var Ol = "./cookies_romanian-JBZRLJBA.json";
var Ul = "./cookies_russian-KMFNLJDA.json";
var Wl = "./cookies_schinese-4CG5QJAA.json";
var Hl = "./cookies_spanish-ATUIC6DA.json";
var Gl = "./cookies_swedish-4LF6D6AA.json";
var Vl = "./cookies_tchinese-4CGDFUBA.json";
var zl = "./cookies_thai-UBSW2GCA.json";
var jl = "./cookies_turkish-DHSZCYAA.json";
var ql = "./cookies_ukrainian-WH35XMDA.json";
var Yl = "./cookies_vietnamese-VG3ISECA.json";
var O = {};
O.brazilian = vl;
O.bulgarian = Cl;
O.czech = Rl;
O.danish = Pl;
O.dutch = Sl;
O.english = wl;
O.finnish = Ml;
O.french = Dl;
O.german = yl;
O.greek = Tl;
O.hungarian = kl;
O.indonesian = Al;
O.italian = xl;
O.japanese = El;
O.koreana = Ll;
O.latam = Bl;
O.norwegian = Il;
O.polish = Fl;
O.portuguese = Nl;
O.romanian = Ol;
O.russian = Ul;
O.schinese = Wl;
O.spanish = Hl;
O.swedish = Gl;
O.tchinese = Vl;
O.thai = zl;
O.turkish = jl;
O.ukrainian = ql;
O.vietnamese = Yl;
async function ei(t) {
  if (O[t]) return (await fetch(new URL(O[t], import.meta.url))).json();
}
var en = Ln(ei);
var Fe = u(g());
async function Xl(t) {
  let e = R.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
    o = new FormData();
  o.set("bAllow", t.toString()), o.set("sessionId", ft(Is));
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
function v_() {
  let t = (0, Qn.useRef)(null);
  return (
    (0, Qn.useEffect)(() => {
      let e = setTimeout(() => {
        t.current?.show();
      }, 4e3);
      return () => {
        clearTimeout(e);
      };
    }, []),
    (0, Fe.jsxs)("dialog", {
      className: _l,
      ref: t,
      children: [
        (0, Fe.jsxs)("div", {
          className: gl,
          children: [
            (0, Fe.jsx)("div", {
              className: Kr,
              children: en.Localize("#CookiePrefPopup_Title"),
            }),
            (0, Fe.jsx)("div", {
              className: Kr,
              children: Bn(
                en.Localize("#CookiePrefPopup_Desc"),
                (0, Fe.jsx)("a", {
                  href: R.STORE_BASE_URL + "account/cookiepreferences",
                }),
                (0, Fe.jsx)("a", {
                  href: R.STORE_BASE_URL + "privacy_agreement",
                }),
              ),
            }),
          ],
        }),
        (0, Fe.jsxs)("div", {
          className: hl,
          children: [
            (0, Fe.jsx)("button", {
              className: fl,
              onClick: async () => {
                await Xl(1), t.current?.close();
              },
              children: en.Localize("#CookiePrefPopup_AcceptAll"),
            }),
            (0, Fe.jsx)("button", {
              className: bl,
              onClick: async () => {
                await Xl(0), t.current?.close();
              },
              children: en.Localize("#CookiePrefPopup_RejectAll"),
            }),
          ],
        }),
      ],
    })
  );
}
function Ql() {
  let t = Fs();
  return t && t.preference_state != 4 ? null : (0, Fe.jsx)(v_, {});
}
var Ne = u(M());
var tn = "GamepadInput";
var C_ = "Checkout",
  R_ = "PinnedView",
  Jn = class {
    PostMessage(e) {}
    RegisterForMessage(e) {}
  },
  on = class {
    m_fnCallback = void 0;
    constructor() {
      SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
    }
    RegisterForMessage(e) {
      this.m_fnCallback = e;
    }
    PostMessage(e) {
      let o = JSON.stringify(e);
      SteamClient.BrowserView.PostMessageToParent(tn, o);
    }
    OnMessage(e, o) {
      if (e == tn) {
        let n = JSON.parse(o);
        this.m_fnCallback(n);
      } else if (e == C_) {
        let n = JSON.parse(o);
        if (n.action == "paypal_success")
          try {
            window.OnPayPalSuccess(n.transid);
          } catch {}
        else if (n.action == "paypal_cancel")
          try {
            window.OnPayPalCancel(n.transid);
          } catch {}
      } else if (e == R_) {
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
m([f], on.prototype, "OnMessage", 1);
var nn = class {
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
    this.m_postWindow.postMessage({ gamepadMessage: tn, args: o }, "*");
  }
  OnMessage(e) {
    let o = e?.data;
    if (o && o.gamepadMessage == tn && o.args) {
      let n = JSON.parse(o.args);
      this.m_fnCallback(n);
    }
  }
};
m([f], nn.prototype, "OnMessage", 1);
var Yt = class {
  m_NavigationController;
  m_postMessage;
  m_bIsGamepadInputExternallyControlled = !1;
  constructor(e) {
    if (((this.m_NavigationController = e), P_()))
      (this.m_bIsGamepadInputExternallyControlled = !0),
        (this.m_postMessage = new on()),
        this.m_NavigationController.UpdateDefaultSourceToGamepad();
    else {
      let o = window.top;
      o && o != window.self
        ? ((this.m_bIsGamepadInputExternallyControlled = !0),
          (this.m_postMessage = new nn(o)))
        : ((this.m_bIsGamepadInputExternallyControlled = !1),
          (this.m_postMessage = new Jn()));
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
m([f], Yt.prototype, "OnFocusChanged", 1),
  m([f], Yt.prototype, "OnMessage", 1),
  m([f], Yt.prototype, "PostPageUnloading", 1);
function P_() {
  return (
    Yo("BrowserView.RegisterForMessageFromParent") &&
    Yo("BrowserView.PostMessageToParent")
  );
}
var Jl = [
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
  rn = class extends Lt {
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
        for (let a = 0; a < Jl.length; a++) {
          let s = Jl[a],
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
m([f], rn.prototype, "PollGamepads", 1);
var Xt = class extends Lt {
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
    return Ie.PLATFORM === "linux" && e.key.length > 1
      ? e.key || e.code
      : e.code || e.key;
  }
  BShouldSwallowEventForTextInputWorkaround(e) {
    if (
      !(
        as(e.target) &&
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
m([f], Xt.prototype, "OnKeyDown", 1),
  m([f], Xt.prototype, "OnKeyUp", 1),
  m([f], Xt.prototype, "Reset", 1);
var ht = class extends Lt {
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
m([f], ht.prototype, "TranslateKey", 1),
  m([f], ht.prototype, "OnMouseDown", 1),
  m([f], ht.prototype, "OnMouseUp", 1),
  m([f], ht.prototype, "OnMouseMove", 1),
  m([f], ht.prototype, "Reset", 1);
var Do = class extends Lt {
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
m([f], Do.prototype, "OnTouchStart", 1), m([f], Do.prototype, "OnTouchEnd", 1);
var ni = "VirtualKeyboardMessage";
function Zl(t) {
  return t && t.type === ni;
}
var vt = class {
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
    e == ni && this.InternalDispatchMessage(JSON.parse(o));
  }
  OnMessage(e) {
    this.InternalDispatchMessage(e.data);
  }
  InternalDispatchMessage(e) {
    if (Zl(e))
      switch (e.message) {
        case "OnEnterKeyPress":
          break;
      }
  }
  SendMessage(e) {
    let o = { type: "VirtualKeyboardMessage", ...e };
    Yo("BrowserView.PostMessageToParent")
      ? SteamClient.BrowserView.PostMessageToParent(o.type, JSON.stringify(o))
      : this.m_ownerWindow &&
        (In(
          this.m_ownerWindow.parent &&
            this.m_ownerWindow.parent != this.m_ownerWindow,
          "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
        ),
        this.m_ownerWindow.parent.postMessage(o, "*"));
  }
};
m([f], vt.prototype, "ShowVirtualKeyboard", 1),
  m([f], vt.prototype, "ShowModalKeyboard", 1),
  m([f], vt.prototype, "HideVirtualKeyboard", 1),
  m([f], vt.prototype, "OnBrowserViewMessage", 1),
  m([f], vt.prototype, "OnMessage", 1);
var oi = class {
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
    if (e == ni) {
      let r = JSON.parse(o);
      if (Zl(r))
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
m([f], oi.prototype, "OnMessage", 1);
var Ct = u(g());
function Kl(t) {
  let [e] = Ne.useState(() => new fs()),
    [o, n] = Ne.useState(),
    [r] = Ne.useState(() => new vt()),
    [i, a] = Ne.useState(void 0),
    s = et();
  return (
    Ne.useEffect(() => {
      if (s && !o) {
        let p = new Yt(e);
        n(p), a(p.BIsGamepadInputExternallyControlled());
      }
    }, [s, o, e]),
    Ne.useEffect(() => {
      if (s) return r.Init(window);
    }, [s, r]),
    (0, Ct.jsxs)(hs, {
      controller: e,
      children: [
        i === !1 && s === !0 && (0, Ct.jsx)(w_, {}),
        (i === !0 || s === !0) && (0, Ct.jsx)(M_, {}),
        s && (0, Ct.jsx)(D_, {}),
        (0, Ct.jsxs)(vs, {
          ownerWindow: window,
          children: [
            o && (0, Ct.jsx)(S_, { bridge: o }),
            (0, Ct.jsx)(bs, { factory: r, children: t.children }),
          ],
        }),
      ],
    })
  );
}
function S_(t) {
  let { bridge: e } = t,
    o = Cs();
  return (
    Ne.useEffect(() => {
      if (!(!o || !e)) return e.RegisterForFocusChanged(o);
    }, [o, e]),
    null
  );
}
function w_() {
  let [t] = Ne.useState(() => new rn());
  return Yr(t), null;
}
function ri(t) {
  let [e, o] = Ne.useState(void 0);
  Ne.useEffect(() => o(new t(window)), [t]), Yr(e);
}
function M_() {
  return ri(Xt), null;
}
function D_() {
  return ri(ht), ri(Do), null;
}
var Vi = u(Et(), 1),
  ep = u(M(), 1);
var Kn = u(M()),
  ec = u(M());
var yo = u(M());
function $n(t) {
  let [e, o] = (0, yo.useState)(!1);
  return (
    (0, yo.useEffect)(() => {
      (0, yo.startTransition)(() => {
        o(!0);
      });
    }, []),
    e ? t.children : (t.fallback ?? null)
  );
}
var Zn = u(g());
function er(t) {
  let { dynamicImport: e, fallback: o, ...n } = t,
    [r] = (0, Kn.useState)(() =>
      ec.default.lazy(async () => ({ default: await e() })),
    );
  return (0, Zn.jsx)($n, {
    fallback: o,
    children: (0, Zn.jsx)(Kn.Suspense, {
      fallback: o,
      children: (0, Zn.jsx)(r, { ...n }),
    }),
  });
}
var Yc = u(Et(), 1),
  Nt = u(M(), 1);
var To = u(M(), 1);
var tc = "FbRIoYoNi9g-";
var oc = "vnGo6vvKWMk-";
var nc = "kCO5XYi3veo-";
var rc = "Ca4SW9HC3ME-";
var ic = "P0JO-Sl0erw-";
var tt = u(g(), 1);
async function ii(t, e) {
  let o = new FormData();
  o.set("language", t);
  let n = await fetch(e, {
    method: "POST",
    credentials: "same-origin",
    body: o,
  });
  if (!n.ok) throw n;
}
function ac(t) {
  let {
      open: e,
      menuAction: o,
      changeLanguagePath: n,
      bLoggedIn: r,
      onDismiss: i,
    } = t,
    [a, s] = (0, To.useState)(!1),
    l = (0, To.useRef)(null);
  (0, To.useEffect)(() => {
    e ? l.current?.showModal() : l.current?.close();
  }, [e]);
  async function c(p) {
    s(!0);
    try {
      await ii(p, n);
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
  return (0, tt.jsx)("dialog", {
    ref: l,
    className: tc,
    onMouseDown: (p) => p.target === l.current && i(),
    children: (0, tt.jsxs)("div", {
      children: [
        (0, tt.jsx)("hr", { className: nc }),
        (0, tt.jsxs)("form", {
          method: "dialog",
          className: oc,
          onSubmit: (p) => c(p.target.elements.namedItem("language")?.value),
          children: [
            (0, tt.jsx)("select", {
              disabled: a,
              name: "language",
              onChange: (p) => c(p.target.value),
              defaultValue: ho().strLanguage,
              children: t.menuAction.children?.map((p) =>
                (0, tt.jsx)(
                  "option",
                  { value: p.action_parameters?.language, children: p.label },
                  p.label,
                ),
              ),
            }),
            (0, tt.jsx)("div", {
              className: rc,
              children: (0, tt.jsx)("input", {
                type: "submit",
                value: "OK",
                className: ic,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var ai = "h3Jy-1Il1os-";
var sc = "HOrB6lehQpg-";
var lc = "_7iCcob-JJ4g-";
var cc = "QYT54GHN-rI-";
var uc = "_79DIT7RUQ5g-";
var si = "Hxi-pnf9Xlw-";
var li = "TwsehSqoph8-";
var pc = "cQPGTl-Lp-0-";
var dc = "rzUmQa-ty1I-";
var ci = "_2CYMhC951F4-";
var mc = "h8dQ-Uyh4L0-";
var _c = "NzGUCXVXDcA-";
var gc = "L09rGTMfR9c-";
var fc = "./global_header_brazilian-QF2T6MCA.json";
var bc = "./global_header_bulgarian-FRYAWQDA.json";
var hc = "./global_header_czech-ZHIWGADA.json";
var vc = "./global_header_danish-GTGIGYBA.json";
var Cc = "./global_header_dutch-HDK4MSCA.json";
var Rc = "./global_header_english-QERWLJCA.json";
var Pc = "./global_header_finnish-JMO5FZDA.json";
var Sc = "./global_header_french-CJNSG7BA.json";
var wc = "./global_header_german-3CHRXIAA.json";
var Mc = "./global_header_greek-U2VV4XCA.json";
var Dc = "./global_header_hungarian-726J65DA.json";
var yc = "./global_header_indonesian-B4TLVUBA.json";
var Tc = "./global_header_italian-ED6Y5KDA.json";
var kc = "./global_header_japanese-QRY6W7DA.json";
var Ac = "./global_header_koreana-HNT7DNDA.json";
var xc = "./global_header_latam-JTAMHMCA.json";
var Ec = "./global_header_norwegian-PONCKJAA.json";
var Lc = "./global_header_polish-YSLROOBA.json";
var Bc = "./global_header_portuguese-T2BVTTDA.json";
var Ic = "./global_header_romanian-SL2I5MDA.json";
var Fc = "./global_header_russian-5SGMOOAA.json";
var Nc = "./global_header_sc_schinese-QVBLUWAA.json";
var Oc = "./global_header_schinese-WAEK2BBA.json";
var Uc = "./global_header_spanish-J5UIHOBA.json";
var Wc = "./global_header_swedish-MTG4WSBA.json";
var Hc = "./global_header_tchinese-LOVT6ADA.json";
var Gc = "./global_header_thai-Y6GA43AA.json";
var Vc = "./global_header_turkish-S3H7YCBA.json";
var zc = "./global_header_ukrainian-OEDO4ADA.json";
var jc = "./global_header_vietnamese-W33LN2DA.json";
var F = {};
F.brazilian = fc;
F.bulgarian = bc;
F.czech = hc;
F.danish = vc;
F.dutch = Cc;
F.english = Rc;
F.finnish = Pc;
F.french = Sc;
F.german = wc;
F.greek = Mc;
F.hungarian = Dc;
F.indonesian = yc;
F.italian = Tc;
F.japanese = kc;
F.koreana = Ac;
F.latam = xc;
F.norwegian = Ec;
F.polish = Lc;
F.portuguese = Bc;
F.romanian = Ic;
F.russian = Fc;
F.sc_schinese = Nc;
F.schinese = Oc;
F.spanish = Uc;
F.swedish = Wc;
F.tchinese = Hc;
F.thai = Gc;
F.turkish = Vc;
F.ukrainian = zc;
F.vietnamese = jc;
async function ui(t) {
  if (F[t]) return (await fetch(new URL(F[t], import.meta.url))).json();
}
var W = Ln(ui);
function tr() {
  let t = document.createElement("form");
  (t.action = "/logout/"),
    (t.method = "POST"),
    document.body.appendChild(t),
    t.submit();
}
var C = u(Wm());
var D = C.Message;
var pi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
    }
  },
  di = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotions || te(t.M()),
        D.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { promotions: { n: 1, c: mi, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
    }
  },
  mi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotionid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
    }
  },
  _i = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.has_wallet || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetWalletDetails_Response";
    }
  },
  gi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_balance_in_usd || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetClientWalletDetails_Request";
    }
  },
  fi = class t extends D {
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
  bi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.pwid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Response";
    }
  },
  hi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Request";
    }
  },
  vi = class t extends D {
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
  Ci = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Request";
    }
  },
  Ri = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Response";
    }
  },
  Pi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_limit || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Request";
    }
  },
  or = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Response";
    }
  },
  Si = class t extends D {
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
  wi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tokens || te(t.M()),
        D.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tokens: { n: 1, c: or, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Response";
    }
  },
  Mi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Request";
    }
  },
  Di = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.valid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Response";
    }
  },
  yi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Request";
    }
  },
  Ti = class t extends D {
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
  ki = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Request";
    }
  },
  Ai = class t extends D {
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
  xi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.compat_tool || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Request";
    }
  },
  Ei = class t extends D {
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
  Li = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_Token";
    }
  },
  Bi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.result || te(t.M()),
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
              token: { n: 2, c: Li },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeDevice_Response";
    }
  },
  Ii = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || te(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = J(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return $(t.M(), e);
    }
    static deserializeBinary(e) {
      let o = new C.BinaryReader(e),
        n = new t();
      return t.deserializeBinaryFromReader(n, o);
    }
    static deserializeBinaryFromReader(e, o) {
      return K(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      ee(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
    }
  },
  Fi;
((d) => {
  function t(_, b) {
    return _.SendMsg(
      "UserAccount.GetAvailableValveDiscountPromotions#1",
      De(pi, b),
      di,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  d.GetAvailableValveDiscountPromotions = t;
  function e(_, b) {
    return _.SendMsg("UserAccount.GetClientWalletDetails#1", De(gi, b), _i, {
      ePrivilege: 1,
    });
  }
  d.GetClientWalletDetails = e;
  function o(_, b) {
    return _.SendMsg("UserAccount.GetAccountLinkStatus#1", De(fi, b), bi, {
      ePrivilege: 1,
    });
  }
  d.GetAccountLinkStatus = o;
  function n(_, b) {
    return _.SendMsg("UserAccount.CancelLicenseForApp#1", De(hi, b), vi, {
      ePrivilege: 1,
    });
  }
  d.CancelLicenseForApp = n;
  function r(_, b) {
    return _.SendMsg("UserAccount.GetUserCountry#1", De(Ci, b), Ri, {
      ePrivilege: 1,
    });
  }
  d.GetUserCountry = r;
  function i(_, b) {
    return _.SendMsg("UserAccount.CreateFriendInviteToken#1", De(Pi, b), or, {
      ePrivilege: 3,
    });
  }
  d.CreateFriendInviteToken = i;
  function a(_, b) {
    return _.SendMsg("UserAccount.GetFriendInviteTokens#1", De(Si, b), wi, {
      ePrivilege: 1,
    });
  }
  d.GetFriendInviteTokens = a;
  function s(_, b) {
    return _.SendMsg("UserAccount.ViewFriendInviteToken#1", De(Mi, b), Di, {
      ePrivilege: 1,
    });
  }
  d.ViewFriendInviteToken = s;
  function l(_, b) {
    return _.SendMsg("UserAccount.RedeemFriendInviteToken#1", De(yi, b), Ti, {
      ePrivilege: 1,
    });
  }
  d.RedeemFriendInviteToken = l;
  function c(_, b) {
    return _.SendMsg("UserAccount.RevokeFriendInviteToken#1", De(ki, b), Ai, {
      ePrivilege: 1,
    });
  }
  d.RevokeFriendInviteToken = c;
  function p(_, b) {
    return _.SendMsg("UserAccount.RegisterCompatTool#1", De(xi, b), Ei, {
      ePrivilege: 1,
    });
  }
  d.RegisterCompatTool = p;
})((Fi ||= {}));
var ig;
((e) => {
  function t(o, n) {
    return o.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", De(Ii, n), Bi, {
      ePrivilege: 1,
    });
  }
  e.AuthorizeCurrentDevice = t;
})((ig ||= {}));
function ag() {
  return ["CurrentUserWalletDetails", zo.accountid];
}
function sg(t) {
  return {
    queryKey: ag(),
    queryFn: async () => {
      if (!zo.accountid) return;
      let e = R.EREALM === 2;
      return (
        await Fi.GetClientWalletDetails(t, {
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
function nr() {
  let t = Os();
  return Ja(sg(t));
}
var j = u(g(), 1);
function Xc(t) {
  let { action: e } = t,
    o = (0, Nt.useContext)(Qc),
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
            tr();
            return;
          }
          case 2: {
            if (e.action_parameters?.language === void 0)
              throw "Missing language";
            try {
              await ii(e.action_parameters.language, o.changeLanguagePath);
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
    (0, j.jsx)(Ro, {
      menuTarget: (0, j.jsx)(n, {
        ...r,
        tabIndex: 0,
        className: li,
        children: Bn(e.label, (0, j.jsx)("span", { className: sc })),
      }),
      direction: "left",
      className: dc,
      children: e.children?.map((i, a) => (0, j.jsx)(Xc, { action: i }, a)),
    })
  );
}
var Qc = (0, Nt.createContext)({});
function qc(t) {
  return (0, j.jsx)(Qc.Provider, {
    value: t,
    children: t.globalActions.map((e, o) =>
      (0, j.jsx)(
        Ro,
        {
          direction: "down-left",
          menuTarget: (0, j.jsx)("button", {
            className: cc,
            children: e.label,
          }),
          className: pc,
          interactionMode: 1,
          children: e.children?.map((n, r) => (0, j.jsx)(Xc, { action: n }, r)),
        },
        o,
      ),
    ),
  });
}
function lg() {
  let { data: t } = nr();
  return (0, j.jsx)("div", { className: uc, children: t?.formatted_balance });
}
function Jc(t) {
  let { userDetails: e } = t,
    [o, n] = (0, Nt.useState)(void 0),
    r = `/login/${o ? `?redir=${encodeURIComponent(o)}` : ""}`;
  return (
    (0, Nt.useEffect)(() => {
      n(location.href);
    }, []),
    e
      ? (0, j.jsxs)("div", {
          className: ai,
          children: [
            (0, j.jsx)("a", {
              className: ci,
              href: R.STORE_BASE_URL + "about/",
              children: W.Localize("#global_menu_install_steam"),
            }),
            t.notifications &&
              (0, j.jsx)("div", {
                className: _c,
                children: (0, j.jsx)(er, {
                  dynamicImport: async () =>
                    (await import("./greenenvelope-ZEOSNKN2.js")).GreenEnvelope,
                  fallback: (0, j.jsx)("div", { className: gc }),
                  bResponsiveHeader: !1,
                  notifications: t.notifications,
                }),
              }),
            (0, j.jsxs)("div", {
              className: si,
              children: [
                (0, j.jsx)(qc, {
                  userDetails: e,
                  globalActions: t.globalActions,
                  changeLanguagePath: t.changeLanguagePath,
                }),
                (0, j.jsx)(lg, {}),
              ],
            }),
            (0, j.jsx)("a", {
              className: lc,
              href: Qo(e),
              children: (0, j.jsx)(Vn, {
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
          className: ai,
          children: (0, j.jsxs)("div", {
            className: si,
            children: [
              (0, j.jsx)("a", {
                className: (0, Yc.default)(ci, mc),
                href: R.STORE_BASE_URL + "about/",
                children: W.Localize("#global_menu_install_steam"),
              }),
              " ",
              (0, j.jsx)("a", {
                href: r,
                className: li,
                children: W.Localize("#global_menu_login"),
              }),
              "  |  ",
              (0, j.jsx)(qc, {
                userDetails: e,
                globalActions: t.globalActions,
                changeLanguagePath: t.changeLanguagePath,
              }),
            ],
          }),
        })
  );
}
var $c = "eGsI8rO3zfU-";
var Zc = "Ca2l5LKN6as-";
var Kc = "ewJx-kmPr-8-";
var eu = "SmaLDT4y0RE-";
var tu = "LyTAF1R-NHw-";
var Ni = "_2GKjdN512t4-";
var ou = "FhcQPauG0Bc-";
var nu = "_40MmWrTStR0-";
var ru = "_5N8HUkyU1sA-";
var Oi = u(Et(), 1),
  mu = u(M(), 1);
var iu = "MMrgod6KQlc-";
var au = "k0AAbwuFzJQ-";
var su = "ofgQne2Wvqg-";
var lu = "FTufO00UqAw-";
var cu = "iHkamGVWNgw-";
var uu = "_9-ylsFqlD1Y-";
var pu = "_99jWUQL7ajk-";
var du = "maI6DbOJuy4-";
var he = u(g(), 1),
  Rt = (0, mu.forwardRef)(function (e, o) {
    let { item: n, responsive: r, className: i, ...a } = e,
      s = qn().startsWith(n.href),
      l = n.label;
    return (
      r && (l = n.label_responsive ?? n.label),
      (0, he.jsx)(he.Fragment, {
        children: (0, he.jsxs)(x, {
          className: (0, Oi.default)(i, n.valveOnly && pu),
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
              (0, he.jsx)("span", {
                className: du,
                children: W.Localize("#m_ext_new"),
              }),
          ],
        }),
      })
    );
  });
function _u(t) {
  let { navContent: e } = t;
  return (0, he.jsx)(Ro, {
    menuTarget: (0, he.jsx)(Rt, { item: e, className: uu }),
    direction: "right",
    children: e.children?.map((o, n) => (0, he.jsx)(_u, { navContent: o }, n)),
  });
}
function gu(t) {
  return (0, he.jsx)("nav", {
    className: iu,
    children: (0, he.jsx)("ul", {
      className: au,
      children: t.navContent.map((e, o) =>
        (0, he.jsx)(
          Ro,
          {
            menuTarget: (0, he.jsx)(Rt, {
              item: e,
              className: (0, Oi.default)(su, e.userContent && lu),
            }),
            direction: "down",
            className: cu,
            children: e.children?.map((n, r) =>
              (0, he.jsx)(_u, { navContent: n }, r),
            ),
          },
          o,
        ),
      ),
    }),
  });
}
var fu = "/X3MIBOBA.png";
var bu = "/TYQTXQDA.svg";
var Ui = "/5EH3SHCA.svg";
var hu = "/KSEIVHDA.png";
function ko() {
  return ft(Xo) === "desktop";
}
function gg() {
  return ft(Xo) === "touch";
}
function vu() {
  let t = [];
  return (
    ko() && t.push("force_desktop"),
    gg() && t.push("responsive touch"),
    t.join(" ")
  );
}
function Cu() {
  Wn(Xo, "desktop"), "location" in window && location.reload();
}
function Ru() {
  ko() && Hn(Xo), "location" in window && location.reload();
}
var qe = u(Et(), 1),
  Ye = u(M(), 1);
var Pu = "UJ-b28jREN4-";
var Su = "-ackiz2p900-";
var wu = "dsfHY-n2vRo-";
var Mu = "_7QSpS4Fcxis-";
var Du = "SMuDlFUQZ7c-";
var yu = "fbumr489F1M-";
var Tu = "_4Irj26b6cAc-";
var ku = "J0hwuL-5qaI-";
var Wi = "vaiPH0LUuOg-";
var Hi = "lHc2D8LzCAM-";
var Au = "qMsE88Z2WWg-";
var xu = "SI1K4dzVIa4-";
var Eu = "wQ0CyaaCCZw-";
var Lu = "QB99AacwCmk-";
var Bu = "_8pHkaq8PPAw-";
var ot = "Ud1IMOOMuOI-";
var Iu = "_58A1pqE2uSo-";
var Jt = "myYtt3d51V4-";
var Fu = "cmJ4ozhx9RE-";
var Nu = "_2wGlOytoBKw-";
var Ou = "_049Kz8GkLto-";
var Uu = "qNNahG-7Lqc-";
var Wu = "Yp-VG7Zk9AY-";
var Hu = "CX4Bz9fkpP4-";
var Gu = "mL8bNWbmixg-";
var Vu = "fPuSnTPv8Sw-";
var zu = "pHDUu-G3uyI-";
var ju = "do714Zjyklo-";
var qu = "eemuAILDlkQ-";
var Yu = "Q-TiFOlMJ8s-";
var Gi = "V29-mSaJz7Q-";
var Xu = "lFK0b3Au9I8-";
var Qu = "eaAkMgON-CQ-";
var Ju = "gLRm-ue6Z7Q-";
var $u = "RRZn8XwJQEk-";
var v = u(g(), 1);
function bg(t) {
  return t.private_data?.persona_state === 0
    ? Tu
    : t.private_data?.game_id !== void 0
      ? yu
      : Du;
}
function hg() {
  let { data: t } = nl();
  return t
    ? (0, v.jsx)("div", {
        className: Wi,
        children: (0, v.jsx)(x, {
          snr: !0,
          external: !0,
          to: R.STORE_BASE_URL + "cart",
          className: Wi,
          children: W.LocalizeReact(
            "#Cart_CountWidget",
            (0, v.jsx)("b", { children: jo(t) }),
          ),
        }),
      })
    : null;
}
function vg() {
  let { data: t } = nr();
  return t?.formatted_balance
    ? (0, v.jsx)("div", {
        className: Hi,
        children: (0, v.jsx)(x, {
          snr: !0,
          external: !0,
          to: R.STORE_BASE_URL + "account",
          className: Hi,
          children: W.LocalizeReact(
            "#responsive_menu_wallet_balance",
            (0, v.jsx)("b", { children: t.formatted_balance }),
          ),
        }),
      })
    : null;
}
function Zu(t) {
  let { navContent: e, children: o, labelAddition: n } = t,
    r = (0, Ye.useRef)(null),
    i = (0, Ye.useRef)(null),
    a = (0, Ye.useRef)(null),
    s = (0, Ye.useRef)();
  if (!o && (!e.children || e.children.length === 0))
    return (0, v.jsx)(Rt, { item: e, className: ot, responsive: !0 });
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
    className: Lu,
    ref: r,
    onToggle: p,
    children: [
      (0, v.jsxs)("summary", {
        className: ot,
        ref: a,
        children: [
          e.label_responsive ?? e.label,
          " ",
          n,
          " ",
          (0, v.jsx)("div", { className: Iu }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: Bu,
        ref: i,
        children: [
          e.children?.map((d, _) =>
            (0, v.jsx)(Rt, { item: d, className: Fu, responsive: !0 }, _),
          ),
          o,
        ],
      }),
    ],
  });
}
function Cg() {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)("div", {
        className: Gu,
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
        className: Vu,
        children: [
          (0, v.jsxs)(x, {
            external: !0,
            className: Gi,
            to: "http://qr.weibo.cn/g/7kla92",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微博",
                className: Qu,
                src: `${R.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微博" }),
            ],
          }),
          (0, v.jsxs)(x, {
            external: !0,
            className: Gi,
            to: "http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微信",
                className: Xu,
                src: `${R.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微信" }),
            ],
          }),
        ],
      }),
      (0, v.jsx)("hr", { className: qu }),
      (0, v.jsxs)("div", {
        className: Yu,
        children: [
          (0, v.jsx)(x, {
            external: !0,
            to: "https://www.wanmei.com/",
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              className: Ju,
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
              className: $u,
              src: `${R.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: "",
            }),
          }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: zu,
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
            className: ju,
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
function Rg() {
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
function Ku(t) {
  let {
      userDetails: e,
      navContent: o,
      globalActions: n,
      changeLanguagePath: r,
      open: i,
      onDismiss: a,
      cartInResponsiveMenu: s,
    } = t,
    [l, c] = (0, Ye.useState)(!1),
    p = (0, Ye.useRef)(null),
    d = (0, Ye.useRef)();
  (0, Ye.useEffect)(() => {
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
  let _ =
    n.find((b) => b.id === "language") ??
    n[0]?.children?.find((b) => b.id === "language");
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)("dialog", {
        className: (0, qe.default)(Pu, Ke(R.EREALM) && Su),
        ref: p,
        onMouseDown: (b) => b.target === p.current && a(),
        children: [
          (0, v.jsxs)("div", {
            className: wu,
            children: [
              !e &&
                (0, v.jsx)(Rt, {
                  className: (0, qe.default)(ot),
                  item: {
                    href: "/login/",
                    label: W.Localize("#global_menu_login_caps"),
                  },
                }),
              e &&
                (0, v.jsxs)("div", {
                  className: (0, qe.default)(Mu, bg(e)),
                  children: [
                    (0, v.jsxs)("div", {
                      className: ku,
                      children: [
                        (0, v.jsx)("a", {
                          className: Eu,
                          href: Qo(e),
                          children: (0, v.jsx)(Vn, {
                            playerLinkDetails: e,
                            statusPosition: "border",
                            alt: "",
                            role: "presentation",
                            size: "Small",
                            className: xu,
                          }),
                        }),
                        " ",
                        (0, v.jsx)("a", {
                          className: Au,
                          href: Qo(e),
                          children: e.public_data?.persona_name,
                        }),
                      ],
                    }),
                    s && (0, v.jsx)(hg, {}),
                    (0, v.jsx)(vg, {}),
                  ],
                }),
              t.notifications &&
                (0, v.jsx)(Zu, {
                  navContent: { label: "Notifications", href: "" },
                  labelAddition: (0, v.jsxs)("div", {
                    className: (0, qe.default)(
                      Nu,
                      t.notifications?.unread_count && Uu,
                    ),
                    children: [
                      t.notifications.unread_count > 0 &&
                        (0, v.jsx)("span", { className: Ou }),
                      (0, v.jsx)("span", {
                        className: Wu,
                        children: jo(t.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, v.jsx)(er, {
                    dynamicImport: async () =>
                      (await import("./greenenvelope-ZEOSNKN2.js"))
                        .GreenEnvelope,
                    fallback: (0, v.jsx)("div", {}),
                    bResponsiveHeader: !0,
                    notifications: t.notifications,
                  }),
                }),
              o.map((b, w) => (0, v.jsx)(Zu, { navContent: b }, w)),
              (0, v.jsxs)("div", {
                className: "minor_menu_items",
                children: [
                  e &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)(Rt, {
                          className: (0, qe.default)(ot, Jt),
                          item: {
                            href: R.STORE_BASE_URL + "account",
                            label: W.Localize("#global_menu_account_details"),
                          },
                        }),
                        (0, v.jsx)(Rt, {
                          className: (0, qe.default)(ot, Jt),
                          item: {
                            href: R.STORE_BASE_URL + "account/preferences",
                            label: W.Localize(
                              "#global_menu_account_preferences",
                            ),
                          },
                        }),
                      ],
                    }),
                  !Ke(R.EREALM) &&
                    (0, v.jsx)(v.Fragment, {
                      children: (0, v.jsx)("button", {
                        className: (0, qe.default)(ot, Jt),
                        onClick: () => c(!0),
                        children: W.Localize("#global_menu_change_language"),
                      }),
                    }),
                  e &&
                    (0, v.jsx)("button", {
                      className: (0, qe.default)(ot, Jt),
                      onClick: tr,
                      children: W.Localize("#global_menu_change_user"),
                    }),
                  !Ke(R.EREALM) &&
                    (0, v.jsx)(Rt, {
                      className: (0, qe.default)(ot, Jt),
                      item: {
                        href: R.STORE_BASE_URL + "mobile",
                        label: W.Localize("#global_menu_getmobileapp"),
                      },
                    }),
                  !ko() &&
                    (0, v.jsx)("button", {
                      className: (0, qe.default)(ot, Jt),
                      onClick: Cu,
                      children: W.Localize("#global_menu_view_desktop_website"),
                    }),
                ],
              }),
            ],
          }),
          (0, v.jsx)("footer", {
            className: Hu,
            children: Ke(R.EREALM) ? (0, v.jsx)(Cg, {}) : (0, v.jsx)(Rg, {}),
          }),
        ],
      }),
      _ &&
        (0, v.jsx)(ac, {
          open: l,
          onDismiss: () => c(!1),
          menuAction: _,
          changeLanguagePath: r,
          bLoggedIn: e != null,
        }),
    ],
  });
}
var re = u(g(), 1);
function tp(t) {
  let [e, o] = (0, ep.useState)(!1);
  return (0, re.jsxs)(re.Fragment, {
    children: [
      (0, re.jsxs)("header", {
        className: (0, Vi.default)($c, t.className),
        children: [
          (0, re.jsxs)("div", {
            className: Zc,
            children: [
              (0, re.jsx)("a", {
                href: R.STORE_BASE_URL,
                "aria-label": W.Localize("#Aria_Steam_Home_Link"),
                className: Ni,
                children: (0, re.jsx)("img", {
                  src: mt(Ke(R.EREALM) ? Ui : bu),
                  alt: W.Localize("#Aria_Steam_Home_Link"),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, re.jsx)(gu, { navContent: t.navContent }),
              (0, re.jsx)(Jc, {
                globalActions: t.globalActions,
                userDetails: t.userDetails,
                notifications: t.notifications,
                changeLanguagePath: t.changeLanguagePath,
              }),
              t.children,
            ],
          }),
          (0, re.jsxs)("div", {
            className: Kc,
            children: [
              (0, re.jsxs)("button", {
                className: eu,
                onClick: () => o(!0),
                children: [
                  (0, re.jsx)("img", { src: mt(fu), alt: "", className: tu }),
                  t.notifications?.unread_count &&
                    (0, re.jsx)("div", {
                      className: ou,
                      children: (0, re.jsx)("div", {
                        className: (0, Vi.default)(nu),
                        children: (0, re.jsx)("span", {
                          className: ru,
                          children: jo(t.notifications.unread_count ?? 0),
                        }),
                      }),
                    }),
                ],
              }),
              (0, re.jsx)("a", {
                href: R.STORE_BASE_URL,
                "aria-label": W.Localize("#Aria_Steam_Home_Link"),
                className: Ni,
                children: (0, re.jsx)("img", {
                  src: mt(Ke(R.EREALM) ? Ui : hu),
                  alt: W.Localize("#Aria_Steam_Home_Link"),
                  height: 36,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, re.jsx)(Ku, { ...t, open: e, onDismiss: () => o(!1) }),
    ],
  });
}
var op = "y0fX1sHXgbg-";
var np = "dkzTutiFwB8-";
var rp = "SMtSKQQ7dWs-";
var an = u(g(), 1);
function ip(t) {
  return (0, an.jsxs)("span", {
    className: op,
    children: [
      (0, an.jsx)("span", {
        className: np,
        children: "You are spoofing another user!",
      }),
      " ",
      (0, an.jsx)("span", {
        className: rp,
        onClick: () => {
          Hn(Un), window.location.reload();
        },
        children: "end spoofing",
      }),
    ],
  });
}
var Ao = u(M());
var cp = u(Hm(), 1);
function zi(t) {
  try {
    if (!t || typeof t != "string") return null;
    let e = t.split(".");
    if (e.length !== 3) return null;
    let [o, n] = e,
      r = sp(o),
      i = sp(n);
    return !r || !i ? null : { header: JSON.parse(r), body: JSON.parse(i) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function ap(t) {
  return t ? t.body.exp : 0;
}
function Sg(t) {
  return t ? t.body.nbf || t.body.iat : 0;
}
function lp(t) {
  let e = ap(t),
    o = Sg(t),
    n = 900,
    r = e - o;
  return r < 900 * 1.5 && (n = r <= 60 ? 0 : 60), ap(t) - n < Date.now() / 1e3;
}
function sp(t) {
  return atob(t.replace(/-/g, "+").replace(/_/g, "/"));
}
var rr = class {
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
      (this.m_bJWTToken = zi(o) != null),
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
    let i = ft(Un);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new Hr();
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
            lp(zi(this.m_webApiAccessToken)) &&
              ((this.m_refreshAccessTokenPromise =
                this.m_fnRequestNewAccessToken(this.m_webApiAccessToken)),
              (this.m_webApiAccessToken =
                await this.m_refreshAccessTokenPromise),
              (this.m_refreshAccessTokenPromise = void 0)));
      }
      let s = await this.Send(e, o, n, i);
      if (s.status != 200) throw new Error("Request Error");
      if (
        ((a = Gr.Init(r, 147)),
        s.headers &&
          (s.headers.get("x-eresult") &&
            a.Hdr().set_eresult(parseInt(s.headers.get("x-eresult"))),
          s.headers.get("x-error_message") &&
            a.Hdr().set_error_message(s.headers.get("x-error_message"))),
        this.m_bJsonMode)
      )
        a.SetBodyJSON(await s.json());
      else {
        let l = new es(await s.arrayBuffer());
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
      s = cp.fromByteArray(a),
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
    let r = Gr.Init(e);
    return (
      r.Hdr().set_eresult(2),
      r.Hdr().set_transport_error(o),
      n && r.Hdr().set_error_message(n),
      r
    );
  }
};
var ir = class {
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
var sn = class extends ir {
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
var ji = u(g());
function up(t) {
  let { strWebAPIToken: e, steamid: o, children: n } = t,
    r = Ao.useRef(),
    i = Ao.useRef(),
    a = Ao.useCallback(
      () => (
        r.current || (r.current = new rr(R.WEBAPI_BASE_URL, e, !1, wg)),
        r.current
      ),
      [e],
    ),
    s = Ao.useCallback(
      () => (i.current || (i.current = new sn()), i.current),
      [],
    );
  return (0, ji.jsx)(Ns, {
    useActiveSteamInterface: a,
    useStorage: s,
    children: (0, ji.jsx)(Ws, { steamid: o, children: n }),
  });
}
async function wg(t) {
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
var pp = u(M());
var ar = class {
  m_mapAppToSNRs = new Map();
  m_rgImpressionsToAdd = [];
  BIsValid() {
    return !0;
  }
  AddImpression(e, o) {
    if (!Bs(On)) return;
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
    let o = [ft(On) || "", ...this.m_rgImpressionsToAdd].join("|");
    this.m_rgImpressionsToAdd = [];
    let n = encodeURIComponent(o).length,
      r = 3200;
    n <= r
      ? Wn(On, o)
      : console.warn(
          `Cookie max length exceeded ( ${n} > ${r} ), discarding impressions`,
        );
  }
};
var mp = u(g());
function dp(t) {
  let [e] = pp.useState(() => new ar());
  return (0, mp.jsx)(rl, { ImpressionTracker: e, children: t.children });
}
var Fr = u(Et(), 1);
var Ae = u(M()),
  Gp = u(kt());
var xo = u(M());
var nt = u(M());
var _p = { m_unPID: 0, m_nBrowserID: -1 };
var ln = class {
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
      qo(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
m([f], ln.prototype, "OnLinkLoad", 1);
function qi() {
  return As() ? 256 : 0;
}
function un(t) {
  let e = 0;
  switch (t) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= un(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= un(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= qi()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= qi()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= qi()),
        e
      );
  }
}
function fp() {
  let { ownerWindow: t } = Se();
  return Xe.GetPopupForWindow(t)?.browser_info || _p;
}
var bp = nt.createContext({ ownerWindow: window }),
  Se = () => nt.useContext(bp);
function hp(t) {
  let { ownerWindow: e, children: o } = t,
    n = nt.useMemo(() => ({ ownerWindow: e }), [e]);
  return nt.createElement(bp.Provider, { value: n }, o);
}
var Pe = class {
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
    gt(this),
      pe(
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
    let n = Xe.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let r, i, a;
    n
      ? ((i = n.m_element),
        (r = n.m_popup),
        n.ReleasePopup(),
        (a = n.m_renderWhenReady),
        Xe.RemoveTrackedPopup(n),
        r?.removeEventListener("beforeunload", n.OnBeforeUnloadEvent),
        r?.removeEventListener("unload", n.OnUnload),
        r?.removeEventListener("resize", n.OnResizeEvent),
        r?.removeEventListener("focus", this.OnFocusInternal),
        r?.removeEventListener("blur", this.OnBlurInternal),
        r?.removeEventListener("drop", n.OnDrop),
        r?.removeEventListener("dragover", n.OnDragOver),
        r?.removeEventListener("message", this.OnMessage))
      : (({ popup: r, element: i } = cn.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new ln(r?.document, i))),
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
        Ie.LANGUAGE &&
          r.document.documentElement.setAttribute("lang", Ls() ?? ""),
        (this.m_popup = r),
        (this.m_element = i),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, o);
        })),
      Xe.AddTrackedPopup(this),
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
      ul(this.browser_info.m_eBrowserType) &&
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
      Xe.RemoveTrackedPopup(this),
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
      (je(this.m_popup.window, "Window.Close")
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
    return je(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return je(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return je(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
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
m([_t], Pe.prototype, "m_bFocused", 2),
  m([f], Pe.prototype, "OnMessage", 1),
  m([f], Pe.prototype, "RenderInternal", 1),
  m([f], Pe.prototype, "OnCreateInternal", 1),
  m([f], Pe.prototype, "OnResizeEvent", 1),
  m([f], Pe.prototype, "OnBeforeUnloadEvent", 1),
  m([f], Pe.prototype, "OnUnload", 1),
  m([f], Pe.prototype, "OnFocusInternal", 1),
  m([f], Pe.prototype, "OnBlurInternal", 1);
var Yi = class extends Pe {
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
          (e.strRestoreDetails = Xe.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          Xe.SetRestoreDetails(
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
            (Xe.SetRestoreDetails(e, o, this.m_bExpires),
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
    Xe.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
m([f], Yi.prototype, "QueryAndStoreWindowPosition", 1);
var cn = class {
  m_bShuttingDown = !1;
  m_mapPopups = _t.map([], { deep: !1 });
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
      pe(e, "Couldn't find head element"),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let o = qr();
            this.m_mapPopups.forEach((n) => {
              ps(n.window.document, o, !1);
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
    let _ = "";
    o.html_class && (_ = `class="${o.html_class}"`);
    let b = "";
    o.body_class && (b = `class="${o.body_class}"`);
    let w = "";
    o.popup_class && (w = `class="${o.popup_class}"`);
    let k = `<!DOCTYPE html><html ${_}><head><title></title></head><body ${b}><div id="popup_target" ${w}></div></body></html>`;
    return (
      d.document.write(k),
      (d.document.title = a),
      us(d, qr()),
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
m([f, qs(100)], cn.prototype, "DebouncedSaveSavedDimensionStore", 1);
var Xe = new cn();
window.g_PopupManager = Xe;
var Rp = u(g()),
  vp = xo.default.createContext(null);
function Cp(t) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: o = !0,
      children: n,
    } = t,
    i = Se()?.ownerWindow || window,
    a = xo.default.useRef();
  return (
    a.current || (a.current = new Zs()),
    xo.default.useLayoutEffect(() => {
      if (o)
        return (
          Jr.SetMenuManager(i, a.current), () => Jr.SetMenuManager(i, void 0)
        );
    }, [i, o]),
    xo.default.useLayoutEffect(
      () => (qt(e, a.current), () => qt(e, void 0)),
      [e],
    ),
    (0, Rp.jsx)(vp.Provider, { value: a.current, children: n })
  );
}
function sr() {
  return xo.default.useContext(vp);
}
var Ut = u(M()),
  Sp = u(kt());
var Ot = u(M());
var pn = u(M());
var Dg = u(g()),
  Mg = pn.createContext({ body_class: "" });
function Pp() {
  return pn.useContext(Mg);
}
function lr(t, e, o) {
  let n = Ot.useRef(void 0),
    [r, i] = Ot.useState(void 0),
    a = Pp();
  return (
    n.current || (n.current = new Xi(t, yg(e, a), i)),
    (n.current.m_callbacks = o),
    Ot.useEffect(() => {
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
    Ot.useEffect(() => {
      n.current.window?.SteamClient.Window.SetHideOnClose &&
        n.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: n.current.window, element: r, popupObj: n.current }
  );
}
function yg(t, e) {
  return { ...t, body_class: h(t.body_class, e.body_class) };
}
var Xi = class extends Pe {
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
var ke = u(g());
function wp(t) {
  let { managerOverride: e, bSuppressMouseOverlay: o } = t,
    n = At(),
    r = fp(),
    i = sr(),
    a = e ?? i;
  xt(a.OnMenusChanged, n);
  let s = !o && a.BShouldRenderMouseOverlay(),
    l = a.GetAllMenus();
  return (0, ke.jsxs)(ke.Fragment, {
    children: [
      s && (0, ke.jsx)(Js, {}),
      l.map((c) =>
        (0, ke.jsx)(
          de,
          { children: (0, ke.jsx)(kg, { instance: c, browserInfo: r }) },
          c.key,
        ),
      ),
    ],
  });
}
function kg(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = !1,
    i = Eo(),
    a = Se().ownerWindow,
    s = Ut.default.useRef(void 0);
  s.current === void 0 &&
    (s.current =
      (r || e.options.bForcePopup || a.innerWidth < 400 || i?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let l = Ut.default.useMemo(
      () => ({ instance: e, styles: Xr, presentation: 0 }),
      [e],
    ),
    c = n || e.ReactElement;
  return (0, ke.jsx)(zn.Provider, {
    value: l,
    children: s.current
      ? (0, ke.jsx)(xg, { instance: e, browserInfo: o, children: c })
      : (0, ke.jsx)(Ag, { instance: e, children: c }),
  });
}
function Ag(t) {
  let { instance: e, children: o } = t;
  return (0, ke.jsx)(Qr, { ...e.position, children: o });
}
function xg(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = Ut.default.useRef(null),
    a = Se().ownerWindow,
    s = a.SteamClient.Browser.GetBrowserID(),
    l = Ut.default.useCallback(
      (_) => {
        let { options: b, position: w } = e,
          k = w.element;
        if (b.bScreenCoordinates)
          _.dimensions = {
            left: w.clientX,
            top: w.clientY,
            width: 2,
            height: 1,
          };
        else {
          let L = ss(a, k.getBoundingClientRect());
          (_.dimensions = { left: L.right, top: L.top, width: 2, height: 1 }),
            (_.availscreenwidth = a.screen.availWidth),
            (_.availscreenheight = a.screen.availHeight);
        }
        return _;
      },
      [a, e],
    ),
    c = e.options.bStandalone ? un(4) : un(3);
  e.options.bCreateHidden && (c |= 2), e.options.bAlwaysOnTop && (c |= 8192);
  let { popupObj: p, element: d } = lr(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: Xr.ContextMenuPopup + " client_chat_frame",
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
    (0, Ut.useEffect)(() => {
      if (p)
        if (e.visible) {
          r.current && r.current.PositionMenu(),
            r.current && r.current.PositionPopupWindow();
          let _ = e.options.bNoFocusWhenShown ? 2 : 1;
          e.TakeFocus(_);
        } else
          e.options.bRetainOnHide &&
            window.setTimeout(() => {
              p.window?.SteamClient.Window.HideWindow();
            }, 30);
    }, [p, e, e.visible]),
    Mp(p.window),
    Ut.default.useEffect(() => {
      e.SetPopup(p);
    }, [e, p]),
    d
      ? Sp.default.createPortal(
          (0, ke.jsx)(Qr, {
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
var it = u(M());
var kp = u(kt());
var mn = u(M());
var Wt = u(M());
function Dp(t) {
  let [e, o] = Wt.default.useState(!1),
    n = Wt.default.useCallback(() => {
      je(t, "Window.IsWindowMaximized")
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
    Wt.default.useEffect(n, [n, t]),
    ns(t, "resize", n),
    jr(t, ["window_moved"], n),
    e
  );
}
function yp(t, e = 100) {
  let [o, n] = Wt.default.useState(!1),
    r = Wt.default.useCallback(() => n(!0), [n]),
    i = Wt.default.useCallback(() => n(!1), [n]);
  return (
    Wt.default.useEffect(() => {
      if (t)
        return (
          t.addEventListener("focus", r),
          t.addEventListener("blur", i),
          () => {
            t.removeEventListener("focus", r), t.removeEventListener("blur", i);
          }
        );
    }, [t, r, i]),
    rs(o, e)
  );
}
var X = u(g());
function Eg(t) {
  let { popup: e, onMaximize: o, bOSX: n } = t,
    r = Dp(e),
    i = mn.useCallback(() => {
      o
        ? o()
        : je(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, o]);
  return (0, X.jsx)(Qi, {
    className: h(r ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: i,
    children: !n && (r ? (0, X.jsx)(zs, {}) : (0, X.jsx)(Gs, {})),
  });
}
function Lg(t) {
  let { popup: e, onMinimize: o, bOSX: n } = t,
    r = mn.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, X.jsx)(Qi, {
    className: "minimizeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, X.jsx)(Vs, {}),
  });
}
function Bg(t) {
  let { popup: e, onClose: o, bOSX: n } = t,
    r = mn.useCallback(() => {
      e && (je(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, X.jsx)(Qi, {
    className: "closeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, X.jsx)(Po, {}),
  });
}
function Qi(t) {
  let { className: e, onClick: o, children: n } = t,
    r = mn.useCallback(
      (i) => {
        o && (i.stopPropagation(), o(i));
      },
      [o],
    );
  return (0, X.jsx)("div", {
    className: h("title-area-icon", e),
    onClick: r,
    children: (0, X.jsx)("div", {
      className: "title-area-icon-inner",
      children: n,
    }),
  });
}
function Tp(t) {
  let {
      className: e,
      style: o,
      hideActions: n,
      hideClose: r,
      hideMin: i,
      hideMax: a,
      bOSX: s = xs(),
      bForceWindowFocused: l,
      onMinimize: c,
      onMaximize: p,
      onClose: d,
      extraActions: _,
      popup: b,
      children: w,
    } = t,
    k = yp(b);
  return (0, X.jsxs)("div", {
    className: h(
      "TitleBar",
      "title-area",
      s && "OSX",
      (k || l) && "WindowFocus",
      e,
    ),
    style: o,
    children: [
      (0, X.jsx)("div", { className: "title-area-highlight" }),
      (0, X.jsx)("div", { className: "title-area-children", children: w }),
      !n &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            _ &&
              (0, X.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: _,
              }),
            (0, X.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !r && (0, X.jsx)(Bg, { popup: b, onClose: d, bOSX: s }),
                !a && (0, X.jsx)(Eg, { popup: b, onMaximize: p, bOSX: s }),
                !i && (0, X.jsx)(Lg, { popup: b, onMinimize: c, bOSX: s }),
              ],
            }),
          ],
        }),
    ],
  });
}
var Lo = u(g());
function Ap(t) {
  let { Modal: e } = t,
    { name: o, modalProps: n, options: r } = e,
    i = Se().ownerWindow,
    { popup: a, element: s } = lr(
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
        updateParamsBeforeShow: (p) => Ig(p, n, r, i),
        onClose: () => n.fnOnClose && n.fnOnClose(),
      },
    ),
    l = r?.bHideActions,
    c =
      typeof r?.nDragAreaHeight == "number"
        ? { height: r.nDragAreaHeight }
        : void 0;
  return s
    ? kp.createPortal(
        (0, Lo.jsx)(hp, {
          ownerWindow: a,
          children: (0, Lo.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: $s,
            children: [
              (0, Lo.jsx)(Tp, {
                hideMin: !0,
                hideMax: !0,
                popup: a,
                hideActions: l,
                style: c,
              }),
              (0, Lo.jsx)(Bo, {
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
function Ig(t, e, o, n) {
  let r,
    i,
    a = e.popupWidth || 500,
    s = e.popupHeight || 400,
    l;
  if (Ie.IN_CLIENT && n?.SteamClient?.Browser?.GetBrowserID)
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
var ae = u(M()),
  xp = u(kt());
var cr = u(g());
function Ep(t) {
  let { ModalManager: e } = t,
    [o, n] = ae.useState(void 0),
    [r, i] = ae.useState(!0),
    a = ae.useRef(0),
    s = ae.useCallback(() => {
      ae.startTransition(() => {
        i(!0);
      });
    }, []);
  ae.useEffect(() => e.RegisterMeasureModalCallback(s).Unregister, [e, s]),
    ae.useLayoutEffect(() => {
      o ||
        ae.startTransition(() => {
          n(e.TakeMeasureModalRequest()), i(!1);
        });
    }, [e, o, r]);
  let l = ae.useCallback((c) => {
    a.current++,
      ae.startTransition(() => {
        n((p) => (p === c ? void 0 : p));
      });
  }, []);
  return o
    ? (0, cr.jsx)(Fg, { onMeasureComplete: l, request: o }, a.current)
    : null;
}
function Fg(t) {
  let [e, o] = ae.useState(),
    n = Se().ownerWindow;
  return (
    ae.useLayoutEffect(() => {
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
    e ? xp.createPortal((0, cr.jsx)(Ng, { ...t, elContainer: e }), e) : null
  );
}
function Ng(t) {
  let { elContainer: e, onMeasureComplete: o, request: n } = t;
  return (
    ae.useEffect(() => {
      let r = !1,
        i = (a) => {
          r || (n.fnResults(a), o(n), (r = !0));
        };
      return Og(e, n.promiseContentReady).then(i), () => i(void 0);
    }, [e, o, n]),
    (0, cr.jsx)(de, { children: n.rctToMeasure })
  );
}
async function Og(t, e) {
  e && (await e);
  let o = document;
  Ie.IN_STEAMUI && o.fonts && (await o.fonts.ready);
  let n = t.getBoundingClientRect(),
    r = Math.ceil(n.height),
    i = Math.ceil(n.width);
  return { height: r, width: i };
}
var ur = class t {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${t.sm_lastKey++}`;
    }
  },
  Zt = class extends ur {
    element;
    ModalUpdatedCallback = new Ze();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  $t = class extends ur {
    m_OnElementReadyCallbacks = new Ze();
    m_OnActiveModalCallbacks = new Ze();
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
m([f], $t.prototype, "RefModalElement", 1);
var pr = class extends Zt {
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
var Lp = u(M());
var _n = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new Ze();
    m_OnModalShownCallbacks = new Ze();
    m_OnModalHiddenCallbacks = new Ze();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new Ze();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new Ze();
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
      pe(
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
          pe(
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
      pe(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let o = new Zt(e);
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
      pe(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let e = new $t();
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
        a = new pr(
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
  Ji = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let o = this.m_mapModalManager.get(e);
      return (
        o ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (o = new _n()),
          this.m_mapModalManager.set(e, o)),
        o
      );
    }
    RegisterModalManager(e, o) {
      pe(
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
  gn = new Ji();
function Io(t) {
  return gn.GetModalManager(t);
}
var $i = "kNiAxGG9vCI-";
var Bp = "_3G8oCr9ck-g-";
var me = u(M()),
  Op = u(kt());
var Fp = u(M());
var Kt = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var Zi = u(g()),
  Ht = class extends Fp.Component {
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
          onNoSpace: _,
          bTopmost: b,
          ...w
        } = this.props,
        k = Object.assign({ left: this.state.x, top: this.state.y }, r),
        L = !o || o.visible;
      return (0, Zi.jsx)("div", {
        className: h(Kt.HoverPositionOuter, b && Kt.HoverAboveModal),
        children: (0, Zi.jsx)("div", {
          ...w,
          className: h(
            Kt.HoverPosition,
            L && this.state.hoverPositionReady && Kt.Ready,
            this.m_bNoSpace && Kt.NoSpace,
            i && Kt.EnablePointerEvents,
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
          direction: _ = "right",
          nBodyAlignment: b = 0.5,
        } = this.props,
        {
          nLeft: w,
          nTop: k,
          nOverflow: L,
          nLateralOverflow: ie,
        } = Ip(_, b, d, l, c, n.innerWidth, n.innerHeight);
      if (L > (this.props.nAllowOffscreenPx ?? 10) && !p) {
        let se = Wg(this.props.direction ?? "right"),
          {
            nLeft: Re,
            nTop: ge,
            nOverflow: le,
            nLateralOverflow: go,
          } = Ip(se, b, d, l, c, n.innerWidth, n.innerHeight);
        if (
          (le < L && ((_ = se), (w = Re), (k = ge), (L = le), (ie = go)),
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
        ([k, w] = Hg(
          this.props.nMaxLateralMoveOnScreen,
          ie,
          _ ?? "right",
          k,
          w,
        ));
      let Y = null;
      switch (_) {
        case "left":
          Y = i;
          break;
        case "right":
          Y = r;
          break;
        case "top":
          Y = s;
          break;
        case "bottom":
          Y = a;
          break;
      }
      Y && Y.setAttribute("style", ""),
        w != this.state.x && this.setState({ x: w }),
        k != this.state.y && this.setState({ y: k }),
        this.state.hoverPositionReady ||
          this.setState({ hoverPositionReady: !0 });
    }
  };
Xa(Ht, "defaultProps", {
  direction: "right",
  nBodyAlignment: 0.5,
  nAllowOffscreenPx: 10,
  nBodyDistance: 8,
  nMaxLateralMoveOnScreen: void 0,
}),
  m([f], Ht.prototype, "bindHover", 1),
  (Ht = m([It], Ht));
function Wg(t) {
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
function Ip(t, e, o, n, r, i, a) {
  let s = i,
    l = a,
    c = 0,
    p = 0,
    d,
    _,
    b,
    w;
  switch (t) {
    case "right":
      (d = n.right + o),
        (_ = dr(n.top, n.height, r.height, e)),
        (b = Math.max(0, d + r.width - s)),
        (w = [Math.max(0, c - _), Math.max(0, _ + r.height - l)]);
      break;
    case "left":
      (d = n.left - o - r.width),
        (_ = dr(n.top, n.height, r.height, e)),
        (b = Math.max(0, p - d)),
        (w = [Math.max(0, c - _), Math.max(0, _ + r.height - l)]);
      break;
    case "bottom":
      (d = dr(n.left, n.width, r.width, e)),
        (_ = n.bottom + o),
        (b = Math.max(0, _ + r.height - l)),
        (w = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "top":
      (d = dr(n.left, n.width, r.width, e)),
        (_ = n.top - o - r.height),
        (b = Math.max(0, c - _)),
        (w = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "overlay":
      (d = n.left), (_ = n.top), (b = 0), (w = [0, 0]);
      break;
    case "overlay-center":
      (d = n.left + 0.5 * n.width - 0.5 * r.width),
        (_ = n.top + 0.5 * n.height - 0.5 * r.height),
        (b = 0),
        (w = [0, 0]);
      break;
  }
  return { nLeft: d, nTop: _, nOverflow: b, nLateralOverflow: w };
}
function dr(t, e, o, n) {
  return Math.max(0, Math.min(1, n)) * (e - o) + t;
}
function Hg(t, e, o, n, r) {
  let i = Math.max(e[0], e[1]);
  t !== void 0 && (i = Math.min(t, i)), (i = Math.max(0, i));
  let a = e[0] > e[1] ? i : -i;
  return o === "left" || o === "right" ? (n += a) : (r += a), [n, r];
}
var Np = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var rt = u(g()),
  Up = me.createContext({}),
  Gg = () => me.useContext(Up);
function mr(t) {
  let [e, o] = me.useState(null),
    n = me.useMemo(() => ({ targetElement: e }), [e]);
  return (0, rt.jsxs)(Up.Provider, {
    value: n,
    children: [(0, rt.jsx)("div", { ref: o }), t.children],
  });
}
function _r(t) {
  let { divProps: e, tooltipProps: o } = Vg({
    ...t,
    toolTipContent: t.toolTipContent
      ? (0, rt.jsx)(jg, { children: zg(t.toolTipContent) })
      : null,
  });
  return (0, rt.jsxs)(Bt, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, rt.jsx)(qg, { ...o }), t.children],
  });
}
function Vg(t) {
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
      children: _,
      ...b
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
    [k, L] = me.useState(!1),
    [ie, Y] = me.useState(),
    se = me.useCallback((le) => {
      L(!0), Y(le.currentTarget);
    }, []),
    Re = me.useCallback(() => {
      L(!1);
    }, []),
    ge = {
      active: k && !n,
      target: ie,
      nDelayShowMS: o,
      hoverPositionProps: w,
      children: e,
    };
  return {
    divProps: { ...b, onMouseEnter: se, onMouseLeave: Re },
    stateHandlers: { setTarget: Y, setHovered: L },
    tooltipProps: ge,
  };
}
function zg(t) {
  return typeof t == "string" ? B(t) : t;
}
function jg(t) {
  return (0, rt.jsx)("div", {
    ...t,
    className: h(Np.TextToolTip, t.className),
  });
}
function qg(t) {
  let {
      active: e,
      target: o,
      nDelayShowMS: n = 300,
      hoverPositionProps: r,
      children: i,
    } = t,
    [a, s] = me.useState(e),
    l = Gg();
  if (
    (me.useEffect(() => {
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
  return Op.createPortal(
    (0, rt.jsx)(Ht, { target: o, ...r, children: i }),
    c ?? o.ownerDocument.body,
  );
}
var q = u(g());
function Yg(t) {
  it.useEffect(() => {
    if (t)
      return (
        document.body.classList.add($i),
        () => document.body.classList.remove($i)
      );
  }, [t]);
}
function Xg(t) {
  let e = Se().ownerWindow,
    o = At(),
    n = it.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  it.useEffect(() => t.RegisterOverlay(o), [t, o]),
    it.useEffect(() => t.RegisterOnModalShownCallback(n).Unregister, [t, n]);
}
function Qg(t, e) {
  return ts(
    (o) => {
      if (!o || !e) return;
      let n = o.ownerDocument.defaultView;
      return gn.RegisterModalManager(t, n);
    },
    [t],
  );
}
function Wp(t) {
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
  Yg(c), Xg(e);
  let d = Qg(e, o),
    _ = null,
    b = !i;
  return (
    l && l.length
      ? (_ = l.map((w) => {
          let k = w == p,
            L = {
              key: w.key,
              active: k,
              rctActiveContextMenus: k && i ? r : void 0,
            };
          return w instanceof Zt
            ? (0, q.jsx)($g, { ...L, modal: w, Component: n ?? Zg })
            : w instanceof $t
              ? (0, q.jsx)(Jg, { ...L, modal: w, bUseDialogElement: i })
              : void 0;
        }))
      : ((b = !0), (a = { ...a, display: "none" })),
    (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsxs)($n, {
          children: [
            (0, q.jsxs)("div", {
              ...s,
              style: a,
              ref: d,
              className: h(s.className, "FullModalOverlay"),
              children: [
                (0, q.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                _,
              ],
            }),
            b && r,
          ],
        }),
        (0, q.jsx)(Ep, { ModalManager: e }),
        (0, q.jsx)(Kg, { ModalManager: e }),
      ],
    })
  );
}
function Jg(t) {
  let {
    modal: e,
    rctActiveContextMenus: o,
    active: n,
    bUseDialogElement: r,
  } = t;
  it.useEffect(() => {
    if (n)
      return (
        e.SetActive(n),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, n]);
  let i = (0, q.jsxs)(de, {
    children: [
      (0, q.jsx)("div", {
        className: h("ModalOverlayContent", n ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      o,
    ],
  });
  return r ? (0, q.jsx)(Hp, { active: n, children: i }) : i;
}
function $g(t) {
  let { modal: e, active: o, rctActiveContextMenus: n, Component: r } = t,
    i = At();
  return (
    xt(e.ModalUpdatedCallback, i),
    (0, q.jsx)(de, {
      children: (0, q.jsxs)(r, {
        className: h("ModalOverlayContent", o ? "active" : "inactive"),
        active: o,
        modalKey: e.key,
        children: [n, e.element],
      }),
    })
  );
}
function Zg(t) {
  let { className: e, active: o, children: n } = t;
  return (0, q.jsx)(Hp, {
    active: o,
    children: (0, q.jsx)(mr, {
      children: (0, q.jsx)("div", { className: e, tabIndex: -1, children: n }),
    }),
  });
}
function Hp(t) {
  let { active: e, children: o } = t,
    n = it.useRef(null);
  return (
    it.useEffect(() => {
      let r = n.current;
      if (!(!e || !r)) return r.showModal(), () => r.close();
    }, [e]),
    (0, q.jsx)("dialog", {
      ref: n,
      className: Bp,
      onCancel: (r) => r.preventDefault(),
      children: t.children,
    })
  );
}
function Kg(t) {
  let { ModalManager: e } = t,
    o = At();
  return (
    xt(e.LegacyPopupModalCountChangedCallbacks, o),
    (0, q.jsx)(q.Fragment, {
      children: e.legacy_popup_modals.map((n) =>
        (0, q.jsx)(Ap, { Modal: n }, n.key),
      ),
    })
  );
}
var eo = u(g()),
  Ki = Ae.createContext({}),
  Bo = Ae.memo(function (e) {
    let {
        children: o,
        bRenderOverlayAtRoot: n,
        refModalManager: r,
        DialogWrapper: i,
        bUseDialogElement: a = !0,
        ContextMenuComponent: s = wp,
        refContextMenuManager: l,
        browserInfo: c,
        bUsePopups: p,
        bOnlyPopups: d,
        bCenterPopupsOnWindow: _,
        bRegisterManagersWithWindow: b = !0,
        ...w
      } = e,
      k = Ae.useRef();
    k.current || (k.current = new _n());
    let L = (0, eo.jsx)(Wp, {
      ...w,
      DialogWrapper: i,
      ModalManager: k.current,
      bUseDialogElement: a,
      bRegisterModalManager: b,
      rctActiveContextMenus: (0, eo.jsx)(s, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (L = Gp.createPortal(L, document.body)),
      os(r, k.current),
      p !== void 0 && k.current?.SetUsePopups(p),
      _ !== void 0 && k.current?.SetCenterPopupsOnWindow(_),
      d !== void 0 && k.current?.SetOnlyPopups(d),
      k.current.SetBrowserInfo(c);
    let ie = Ae.useMemo(
      () => ({ ModalManager: k.current, DialogWrapper: i }),
      [i],
    );
    return (0, eo.jsx)(Ki.Provider, {
      value: ie,
      children: (0, eo.jsxs)(Cp, {
        refContextMenuManager: l,
        bRegisterMenuManager: b,
        children: [(0, eo.jsx)(de, { children: L }), e.children],
      }),
    });
  });
function Eo() {
  return Ae.useContext(Ki).ModalManager;
}
function Vp() {
  return Ae.useContext(Ki).DialogWrapper;
}
function Mp(t) {
  let e = Eo();
  Ae.useEffect(() => {
    if (t) return gn.RegisterModalManager(e, t);
  }, [t, e]);
}
var jd = u(M());
var Gt = u(M());
var gr = u(M());
var xe = u(g()),
  ea = gr.createContext({}),
  ef = () => gr.useContext(ea);
function to(t) {
  let o = ef().ModalPosition ?? tf;
  return (0, xe.jsx)(o, { ...t });
}
function tf(t) {
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
      a && (Nn(a, a.ownerDocument.activeElement) || a.focus());
    }));
  let n = ["ModalPosition"];
  t.className && n.push(t.className),
    t.bDestructiveWarning && n.push("Destructive");
  let r = t.renderContent || ((a) => (0, xe.jsx)("div", { ...a })),
    i = (0, xe.jsxs)(xe.Fragment, {
      children: [
        !t.hideTopBar &&
          (0, xe.jsx)("div", { className: "ModalPosition_TopBar" }),
        t.onEscKeypress &&
          !t.bHideCloseIcon &&
          (0, xe.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, xe.jsx)("div", {
              className: "closeButton",
              onClick: (a) => {
                a.stopPropagation(), t.onEscKeypress();
              },
              children: (0, xe.jsx)(Po, {}),
            }),
          }),
        (0, xe.jsx)(de, { children: t.children }),
      ],
    });
  return (0, xe.jsx)("div", {
    className: n.join(" "),
    ...e,
    ref: o,
    children: r({ className: "ModalPosition_Content", children: i }),
  });
}
var oo = u(M()),
  jp = u(kt());
var ta = u(g());
function qp(t) {
  let { active: e, children: o } = t,
    n = Eo() || Io(window),
    r = Vp(),
    [i, a] = oo.useState(null),
    [s, l] = oo.useState(!1),
    c = oo.useRef();
  if (
    (oo.useEffect(() => {
      if (e) {
        let d = n.ShowPortalModal(),
          _ = d.OnElementReadyCallbacks.Register(a),
          b = d.OnModalActiveCallbacks.Register(l);
        return (
          (c.current = d.key),
          () => {
            a(null), l(!1), d.Close(), _.Unregister(), b.Unregister();
          }
        );
      } else return;
    }, [n, e]),
    !i || !e)
  )
    return null;
  let p = (0, ta.jsx)(mr, { children: o });
  return (
    r && (p = (0, ta.jsx)(r, { active: s, modalKey: c.current, children: p })),
    jp.createPortal(p, i)
  );
}
var fn = {
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
var we = u(g());
function Yp(t) {
  let { managerOverride: e } = t,
    o = sr(),
    n = e ?? o,
    r = At();
  return (
    xt(n.OnMenusChanged, r),
    (0, we.jsx)(qp, {
      active: !!n.ActiveMenu,
      children: (0, we.jsx)(of, { ActiveMenu: n.ActiveMenu }),
    })
  );
}
function of(t) {
  let { ActiveMenu: e } = t,
    o = Gt.useCallback(() => {
      e?.OnCancel();
    }, [e]);
  Gt.useEffect(() => () => e?.Hide(), [e]);
  let n = [],
    r = null;
  Us(() => {
    for (let a = e; a && a.visible; a = a.submenu)
      n.push((0, we.jsx)(nf, { instance: a }, a.key)), (r = a.label);
  });
  let i = Gt.useCallback(
    (a) => {
      a.currentTarget == a.target && o();
    },
    [o],
  );
  return (0, we.jsx)(to, {
    padding: "none",
    children: (0, we.jsxs)("div", {
      onClick: i,
      className: h("BasicUIContextMenu", fn.BasicContextMenuModal),
      children: [
        r &&
          (0, we.jsx)(we.Fragment, {
            children: (0, we.jsx)("div", {
              className: fn.BasicContextMenuHeader,
              children: r,
            }),
          }),
        (0, we.jsx)(U, {
          className: fn.BasicContextMenuContainer,
          onCancelButton: o,
          onClick: i,
          children: n,
        }),
      ],
    }),
  });
}
function nf(t) {
  let { instance: e } = t,
    o = et(),
    n = Gt.useCallback(() => {
      o && Te.PlayNavSound(25);
    }, [o]),
    r = Gt.useMemo(
      () => ({
        instance: e,
        styles: fn,
        presentation: 1,
        callbacks: { onDisabledItemSelected: n },
      }),
      [e, n],
    );
  return (0, we.jsx)(de, {
    children: (0, we.jsx)(zn.Provider, { value: r, children: e.ReactElement }),
  });
}
var He = u(M());
var ra = u(M());
var fr = u(g());
var na = class {
  m_Promise;
  m_Value = void 0;
  constructor(e) {
    gt(this), (this.promise = e);
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
m([_t], na.prototype, "m_Value", 2);
function Oe(t) {
  return ra.forwardRef(function (o, n) {
    return (0, fr.jsx)("div", { ...o, className: h(t, o.className), ref: n });
  });
}
function Xp(t) {
  if (typeof t != "string") return NaN;
  let o = !t.includes("ms") && t.includes("s"),
    n = Number.parseFloat(t);
  return o && (n *= 1e3), n;
}
var Qp = "me1BHzZX9A0-";
var br = u(g());
function Pt(t) {
  return (0, br.jsxs)(_r, {
    toolTipContent: t.tooltip,
    className: h(Qp, "HelperTooltip", t.className),
    children: [" ", (0, br.jsx)(js, {})],
  });
}
var ia = u(M()),
  Fo = ia.default.createContext({}),
  aa = () => ia.default.useContext(Fo);
function Ue(t, e) {
  return aa()[t] ?? e;
}
var Qe = {
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
var no = u(g());
function Jp(t) {
  let e = Ue("ToggleControl", af);
  return (0, no.jsx)(e, { ...t });
}
function af(t) {
  let { value: e, onChange: o, disabled: n } = t;
  return (0, no.jsxs)("div", {
    className: h(Qe.Toggle, n && Qe.Disabled),
    onClick: () => !n && o && o(!e),
    children: [
      (0, no.jsx)("div", { className: Qe.ToggleRail }),
      (0, no.jsx)("div", {
        className: h(Qe.ToggleRail, Qe.Highlight, e ? Qe.On : Qe.Off),
      }),
      (0, no.jsx)("div", { className: h(Qe.ToggleSwitch, e ? Qe.On : Qe.Off) }),
    ],
  });
}
var E = u(g());
function vr(t) {
  return He.forwardRef(function (o, n) {
    return (0, E.jsx)(U, { ...o, className: h(t, o.className), ref: n });
  });
}
var Cr = Oe("DialogHeader"),
  iD = Oe("DialogSubHeader"),
  aD = Oe("SettingsDialogSubHeader"),
  $p = Oe("DialogFooter"),
  sf = Oe("DialogLabel _DialogLayout"),
  Zp = Oe("DialogBodyText"),
  sD = Oe("DialogBody"),
  Kp = vr("DialogBody"),
  lD = Oe("DialogInnerBody"),
  cD = Oe("DialogControlsSection"),
  uD = Oe("DialogControlsSectionHeader"),
  lf = vr("DialogTwoColLayout _DialogColLayout"),
  cf = vr("DialogThreeColLayout _DialogColLayout"),
  pD = vr("DialogTwoThirdColLayout _DialogColLayout"),
  dD = Oe("DialogColumn _DialogLayout");
function sa(t) {
  let e = Ue("Content", uf);
  return (0, E.jsx)(e, { ...t });
}
function uf(t) {
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
var hr = class extends He.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, E.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
m([f], hr.prototype, "OnSubmit", 1);
function ed(t) {
  let { classNameContent: e, bCenterVertically: o, ...n } = t;
  return (0, E.jsx)(sa, {
    className: e,
    bCenterVertically: o,
    children: (0, E.jsx)(hr, { ...n }),
  });
}
function td(t) {
  let { label: e, tooltip: o, className: n, children: r } = t;
  return (0, E.jsxs)("label", {
    className: h("DialogInputLabelGroup", "_DialogLayout", n),
    children: [
      e &&
        (0, E.jsxs)(sf, {
          children: [e, " ", o && (0, E.jsx)(Pt, { tooltip: o }), " "],
        }),
      r,
    ],
  });
}
var vn = He.forwardRef(function (e, o) {
    let n = aa(),
      { svgicon: r, ...i } = e,
      a = h(
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
    return (0, E.jsxs)(vo, {
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
  hn = He.forwardRef(function (e, o) {
    return (0, E.jsx)(vn, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  We = He.forwardRef(function (e, o) {
    return (0, E.jsx)(vn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  mD = He.forwardRef(function (e, o) {
    return (0, E.jsx)(vn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  _D = He.forwardRef(function (e, o) {
    return (0, E.jsx)(vn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  gD = He.forwardRef(function (e, o) {
    return (0, E.jsx)(vn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "TextButton"),
    });
  });
function od(t) {
  return (0, E.jsxs)(lf, {
    className: t.className,
    children: [
      (0, E.jsxs)(hn, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        autoFocus: t.focusButton == "primary",
        children: [t.strOKText || B("#Button_Confirm"), " "],
      }),
      (0, E.jsx)(We, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        autoFocus: t.focusButton == "secondary",
        children: t.strCancelText || B("#Button_Cancel"),
      }),
    ],
  });
}
function nd(t) {
  let e = t.bOKDisabled ? We : hn,
    o = t.bOKDisabled ? hn : We;
  return (0, E.jsxs)(cf, {
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
      (0, E.jsx)(We, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        children: t.strCancelText || B("#Button_Cancel"),
      }),
    ],
  });
}
var Vt = class extends He.Component {
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
      controlled: _,
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
m([f], Vt.prototype, "Toggle", 1),
  m([f], Vt.prototype, "KeyDown", 1),
  m([f], Vt.prototype, "SetChecked", 1);
var fD = He.forwardRef(function (e, o) {
    let n = Ue("ToggleField", bn);
    return (0, E.jsx)(n, { ref: o, ...e });
  }),
  bn = class extends Vt {
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
                      (0, E.jsx)(Pt, { tooltip: this.props.tooltip }),
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
                  children: (0, E.jsx)(Jp, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, E.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, E.jsxs)(U, {
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
m([f], bn.prototype, "OnOffKeyDown", 1),
  m([f], bn.prototype, "OnNewUIToggle", 1);
var at = u(M());
var Rr = class extends al {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, o, n) {
    super(cs(e.ref.current), n),
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
  pf = at.forwardRef(function (e, o) {
    let n = Ue("InputElement", Co);
    return (0, N.jsx)(n, { ...e, ref: o });
  }),
  zt = class zt extends at.PureComponent {
    m_CopiedAnimation;
    ref = at.createRef();
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
          this.props.mustBeURL == !0 && !zt.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !zt.validateEmail(this.m_elInput?.value),
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
            (this.m_CopiedAnimation = new Rr(
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
      pe(
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
          mustBeEmail: _,
          focusOnMount: b,
          tooltip: w,
          inlineControls: k,
          maxChars: L,
          ...ie
        } = this.props,
        Y =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (ie.className ? " " + ie.className : ""),
        se = "copiedAnimation",
        Re = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (se = "copiedAnimation animationPlaying"),
        Re && (se = "copiedAnimation animationComplete");
      let ge = {};
      this.state.m_CopiedYPos !== void 0 &&
        (ge.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let le = (0, N.jsxs)(at.Fragment, {
        children: [
          (0, N.jsxs)(U, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, N.jsx)(pf, {
                type: "text",
                ...ie,
                className: Y,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              r &&
                (0, N.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, N.jsx)(We, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: B("#Button_Copy"),
                    }),
                    (0, N.jsx)("div", {
                      style: ge,
                      className: se,
                      children: B("#Button_Copied"),
                    }),
                  ],
                }),
              (a || (i && ie.value)) &&
                (0, N.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, N.jsx)(Po, {}),
                }),
              k,
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
                      (0, N.jsx)(Pt, { tooltip: this.props.tooltip }),
                    (0, N.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                le,
                this.state.m_bNumberBelowMinRange
                  ? (0, N.jsxs)("div", {
                      children: [" ", B("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, N.jsxs)("div", {
                      children: [" ", B("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, N.jsxs)("div", {
                      children: [" ", B("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, N.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, N.jsxs)("div", {
                      children: [" ", B("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, N.jsxs)("div", {
                      children: [" ", B("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, N.jsxs)("div", {
                      children: [
                        " ",
                        Es("#Input_Error_TooManyCharacters", L),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : le;
    }
  };
m([f], zt.prototype, "OnInputRef", 1),
  m([f], zt.prototype, "OnChanged", 1),
  m([f], zt.prototype, "OnCopyClick", 1),
  m([f], zt.prototype, "OnClearClick", 1);
var ro = zt,
  Cn = class extends ro {
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
        fnStrValidateURL: _,
        mustBeEmail: b,
        focusOnMount: w,
        tooltip: k,
        inlineControls: L,
        className: ie,
        children: Y,
        ...se
      } = this.props;
      return (0, N.jsx)("div", {
        className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
        children: (0, N.jsxs)("label", {
          children: [
            e && (0, N.jsx)("div", { className: "DialogLabel", children: e }),
            (0, N.jsx)("div", {
              className: h(
                "_DialogInputContainer",
                "DialogTextInputBase",
                this.m_bFocused && "Active",
              ),
              onClick: this.OnBackgroundClick,
              children: (0, N.jsxs)(U, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  at.Children.map(Y, (Re, ge) =>
                    (0, N.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: Re,
                      },
                      ge,
                    ),
                  ),
                  (0, N.jsx)(Co, {
                    type: "text",
                    ...se,
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
m([f], Cn.prototype, "OnBackgroundClick", 1),
  m([f], Cn.prototype, "OnInputFocus", 1),
  m([f], Cn.prototype, "OnInputBlur", 1);
var rd = u(M());
var st = u(g()),
  id = (t, e) =>
    "" + (t != null ? Number.parseFloat(t.toFixed(3)) : null) + (e ?? "");
var St = class extends rd.Component {
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
      s = this.props.renderValue ?? id;
    return (0, st.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        n &&
          (0, st.jsxs)("div", {
            className: "DialogLabel",
            children: [n, !!i && (0, st.jsx)(Pt, { tooltip: i })],
          }),
        (0, st.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, st.jsx)("div", { className: "DialogSlider_Value", style: e }),
            (0, st.jsx)("div", { className: "DialogSlider_Grabber", style: o }),
          ],
        }),
        this.props.showValue &&
          (0, st.jsx)("div", {
            className: "DialogLabelExplainer",
            children: s(this.props.value, this.props.valueSuffix),
          }),
        r &&
          (0, st.jsx)("div", {
            className: "DialogLabelExplainer",
            children: r,
          }),
      ],
    });
  }
};
m([f], St.prototype, "OnMouseDown", 1),
  m([f], St.prototype, "OnMouseMove", 1),
  m([f], St.prototype, "OnMouseUp", 1),
  m([f], St.prototype, "OnTouchStart", 1),
  m([f], St.prototype, "OnTouchMove", 1),
  m([f], St.prototype, "OnTouchEnd", 1),
  m([f], St.prototype, "OnKeyDown", 1);
var ad = u(M());
var mf = u(g()),
  df = { setValue: () => {} },
  qD = ad.default.createContext(df);
var ve = u(M());
var Rn = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var Q = u(g());
function wt(t) {
  return typeof t == "object" && "data" in t;
}
function io(t) {
  return typeof t == "object" && "bIsSeparator" in t;
}
function ct(t) {
  return typeof t == "object" && "options" in t;
}
function ca(t, e) {
  if (t === e) return !0;
  if (!Array.isArray(t) || !Array.isArray(e) || t.length != e.length) return !1;
  for (let o = 0; o < t.length; o++) if (!ua(t[o], e[o])) return !1;
  return !0;
}
function ua(t, e) {
  return t == null || e == null
    ? t == e
    : io(t) && io(e)
      ? !0
      : !(
          io(t) ||
          io(e) ||
          t.label !== e.label ||
          t.tooltip !== e.tooltip ||
          ct(t) != ct(e) ||
          (ct(t) && ct(e) && !ca(t.options, e.options)) ||
          (wt(t) && wt(e) && t.data !== e.data)
        );
}
function Pr(t, e) {
  if (t != null)
    for (let o = 0; o < t.length; o++) {
      let n = t[o];
      if (wt(n) && n.data === e) return n;
      if (ct(n)) {
        let r = Pr(n.options, e);
        if (r != null) return r;
      }
    }
}
function _f(t) {
  let e = Ue("DropDownField", gf);
  return (0, Q.jsx)(e, { ...t });
}
function gf(t) {
  let {
    label: e,
    tooltip: o,
    strClassName: n,
    dropDownControlRef: r,
    ...i
  } = t;
  return (0, Q.jsx)(td, {
    label: e,
    tooltip: o,
    className: n,
    children: (0, Q.jsx)(lt, { menuLabel: e, ...i, ref: r }),
  });
}
var ff = ve.forwardRef(function (e, o) {
    return (0, Q.jsxs)(vo, {
      focusable: e.focusable,
      className: h(e.className, "DialogDropDown", "_DialogInputContainer", {
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
          (0, Q.jsx)("div", {
            className: h(e.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, Q.jsx)(Hs, {}),
          }),
      ],
    });
  }),
  lt = class extends ve.Component {
    static contextType = Fo;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: Pr(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let o = Pr(this.props.rgOptions, e);
      ua(o, this.value) || this.setState({ value: o });
    }
    get value() {
      return this.props.controlled
        ? Pr(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, o, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        o.bOpened !== this.state.bOpened ||
        !ca(this.props.rgOptions, e.rgOptions) ||
        !ua(o.value, this.value)
      )
        return !0;
      let r = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let i of r) if (e[i] !== this.props[i]) return !0;
      return !1;
    }
    componentDidUpdate(e, o) {
      In(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let n = !ca(e.rgOptions, this.props.rgOptions),
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
      (this.m_iMenuInstance = $o(
        (0, Q.jsx)(bf, {
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
      ld(e, this.props.rgOptions.filter(wt), this.value?.data, (o) =>
        this.OnValueSelected(void 0, o),
      );
    }
    render() {
      let e = (0, Q.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: this.value?.label ?? this.props.strDefaultLabel,
        }),
        o =
          this.props.renderButtonValue != null
            ? this.props.renderButtonValue(e)
            : e,
        n = this.props.focusable ?? !0,
        r = this.props.renderButton || this.context.DropDownControlButton || ff;
      return (0, Q.jsx)(r, {
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
m([f], lt.prototype, "OnInputRef", 1),
  m([f], lt.prototype, "ToggleMenu", 1),
  m([f], lt.prototype, "OnValueSelected", 1),
  m([f], lt.prototype, "ShowMenu", 1),
  m([f], lt.prototype, "HideMenu", 1),
  m([f], lt.prototype, "OnKeyDown", 1);
var sd = ve.createContext(null);
function bf(t) {
  let e = Ue("DropDownMenu", hf);
  return (0, Q.jsx)(sd.Provider, {
    value: {},
    children: (0, Q.jsx)(e, { ...t }),
  });
}
function ld(t, e, o, n) {
  let r;
  if (t.key === "ArrowDown")
    r = (e.findIndex((a) => a.data === o) + 1) % e.length;
  else if (t.key === "ArrowUp") {
    let i = e.findIndex((a) => a.data === o);
    r = i <= 0 ? e.length - 1 : i - 1;
  }
  r !== void 0 && (n(e[r]), t.preventDefault());
}
function hf(t) {
  let {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      selectedValue: r,
    } = t,
    [i, a] = ve.useState(r),
    s = ve.useMemo(() => e.filter(wt), [e]),
    l = ve.useCallback(
      (c) => {
        ld(c, s, i, (p) => a(p.data));
      },
      [i, s],
    );
  return (0, Q.jsx)("div", {
    className: h(
      Rn.DialogDropDownMenu,
      "_DialogInputContainer",
      t.strDropDownMenuCtnClass,
    ),
    onKeyDown: l,
    children: (0, Q.jsx)(cd, {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: i,
      setActiveValue: a,
    }),
  });
}
function cd(t) {
  let { rgOptions: e, ...o } = t;
  return e.map((n, r) =>
    io(n)
      ? (0, Q.jsx)(
          "hr",
          {
            className: h(
              Rn.DialogDropDownMenu_Item,
              Rn.DialogDropDownMenu_Separator,
            ),
          },
          r,
        )
      : ct(n)
        ? (0, Q.jsx)(cd, { ...o, rgOptions: n.options }, r)
        : (0, Q.jsx)(vf, { ...o, option: n }, r),
  );
}
function vf(t) {
  let {
      option: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: r,
      setActiveValue: i,
    } = t,
    a = ve.useCallback((c) => c && c.focus(), []),
    s = ve.useCallback(() => {
      i(e.data);
    }, [i, e]),
    l = e.data === r;
  return (0, Q.jsx)("button", {
    type: "button",
    className: h(
      Rn.DialogDropDownMenu_Item,
      o,
      e.strOptionClass,
      l && "ContextMenuAutoFocus",
    ),
    onClick: (c) => n(c, e),
    ref: l ? a : void 0,
    onMouseEnter: s,
    children: e.tooltip
      ? (0, Q.jsx)(_r, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, Q.jsx)("div", { children: e.label }),
  });
}
var la = class extends ve.Component {
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
      (0, Q.jsx)(_f, { ...r, rgOptions: i, onMenuOpened: this.OnMenuOpened })
    );
  }
};
m([f], la.prototype, "OnMenuOpened", 1);
var Rf = u(M());
var ud = u(g());
var Ee = u(M());
var pd = u(Um());
var pa = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new da(e, !1);
  }
};
var da = class {
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
          (this.m_reactRoot = pd.createRoot(this.m_container)),
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
      return this.m_container && Nn(this.m_container, e);
    }
  },
  Sr = class {
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
      return o || ((o = new pa(e.body)), this.m_mapEmbeddedHovers.set(e, o)), o;
    }
  };
var Me = u(g()),
  Pn = new ds("DragDrop").Debug;
var ma = class extends Ee.Component {
  m_coordinator = new wr();
  OnDrop(e, o) {
    o > e && o--, o != e && this.props.onReorder(e, o);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, Me.jsx)(
          yr,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (n) => n.props.data != 0,
            fnOnDrop: (n) => this.OnDrop(n.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      Ee.Children.forEach(this.props.children, (n, r) => {
        let i = n.props.id || "__list_" + r,
          a = r + 1;
        e.push(
          (0, Me.jsx)(
            Ge,
            { coordinator: this.m_coordinator, data: r, children: n },
            i,
          ),
        ),
          e.push(
            (0, Me.jsx)(
              yr,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (s) => s.props.data != a,
                fnOnDrop: (s) => this.OnDrop(s.props.data, a),
              },
              "dropregion_" + i,
            ),
          );
      }),
      (0, Me.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
m([f], ma.prototype, "OnDrop", 1);
function Pf(t) {
  if ("touches" in t) {
    let e = t;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [t.clientX, t.clientY];
}
function _a(t, e, o, n) {
  return n
    ? o && t > o.left && t < o.right && e > o.top && e < o.bottom
    : o && t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
}
var wr = class {
  m_embeddedElement = new Sr("DragGhosts");
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
    qo(this.m_rgDropRegions, e),
      qo(this.m_rgActiveDropRegions, e),
      this.m_activeDropRegion == e &&
        ((this.m_activeDropRegion = void 0),
        this.m_activeDraggable && this.ShowDragGhost());
  }
  OnDragGhostRef(e) {
    this.m_dragGhost = e;
  }
  ShowDragGhost() {
    let e = this.m_activeDraggable.renderDragGhost(),
      o = h(
        e.props.className,
        !!this.m_activeDropRegion && "DraggedOverActiveDrop",
      ),
      n = Ee.cloneElement(e, { ref: this.OnDragGhostRef, className: o });
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
    pe(
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
        if (_a(r, i, d) && !_a(c, p, d, !0)) {
          let _ = En(c, d.left, d.right, d.left - 200, d.right + 200),
            b = En(p, d.top, d.bottom, d.top - 100, d.bottom + 100),
            w = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, _, b);
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
m([f], wr.prototype, "OnDragGhostRef", 1);
var dd = 5,
  Ge = class extends Ee.Component {
    constructor(e) {
      super(e), gt(this);
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
    m_divRef = Ee.createRef();
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
      Pn("ProcessDragMove", e, this.props.data);
      let [o, n] = Pf(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(o - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(n - (this.m_DragInfo.startClientY ?? 0), 2) >=
          dd * dd &&
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
      Pn("ResetDragState", this.props.data),
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
      Pn("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
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
      Pn("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      Pn(
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
          ..._
        } = this.props,
        b = {},
        w = c || "DialogDraggable";
      return (
        this.m_DragInfo.bStarted
          ? ((w = h(w, p || "DraggedOut")),
            n && (b = { onDragEnd: this.OnHTMLDragEnd }))
          : n
            ? (b = { onDragStart: this.OnHTMLDragStart })
            : (b = {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
        (0, Me.jsx)("div", {
          ref: this.m_divRef,
          className: w,
          ...b,
          ..._,
          draggable: n,
          children: d,
        })
      );
    }
    renderDropGhost() {
      return this.props.fnRenderDropGhost
        ? this.props.fnRenderDropGhost()
        : (0, Me.jsx)(Mr, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, Me.jsx)(Dr, {
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
m([f], Ge.prototype, "ProcessDragMove", 1),
  m([f], Ge.prototype, "OnMouseDown", 1),
  m([f], Ge.prototype, "OnMouseUp", 1),
  m([f], Ge.prototype, "OnTouchStart", 1),
  m([f], Ge.prototype, "OnTouchEnd", 1),
  m([ys], Ge.prototype, "ResetDragState", 1),
  m([f], Ge.prototype, "OnHTMLDragStart", 1),
  m([f], Ge.prototype, "OnHTMLDrag", 1),
  m([f], Ge.prototype, "OnHTMLDragEnd", 1);
var Mr = class extends Ee.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, Me.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
m([f], Mr.prototype, "OnRef", 1);
var Dr = class extends Ee.Component {
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
      return (0, Me.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      o = En(
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
    return (0, Me.jsx)("div", {
      className: r,
      style: e,
      children: (0, Me.jsx)("div", { ref: this.OnRef, style: n }),
    });
  }
};
m([f], Dr.prototype, "OnRef", 1);
var ga = class extends Ee.Component {
    m_divRef = Ee.createRef();
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
      return _a(e, o, this.GetClientRect());
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
        _ = h(
          a || "DialogDropRegion",
          this.state.bDraggableActive && (s || "Active"),
        );
      return (0, Me.jsxs)(Bt, {
        ref: Fn(p, this.m_divRef),
        className: _,
        ...d,
        focusable: c === void 0 ? !!d.onClick : c,
        children: [this.state.dropGhost, l],
      });
    }
  },
  yr = class extends ga {
    BDraggableInRegion(e, o, n) {
      let r = this.GetClientRect();
      return r
        ? e >= r.left && e <= r.right && o >= r.top - 20 && o <= r.bottom + 20
        : !1;
    }
  };
var H = u(M());
var ut = {
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
  Sf = "separator",
  wf = "spacer",
  Sn = class {
    constructor() {
      gt(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
m([_t], Sn.prototype, "m_flPageListScrollTop", 2),
  m([_t], Sn.prototype, "m_flPageScrollTop", 2);
var ao = class ao {
  static s_Instance;
  static Get() {
    return ao.s_Instance || (ao.s_Instance = new ao()), ao.s_Instance;
  }
  constructor() {
    gt(this);
  }
  m_setPagedSettingsInstances = new Set();
};
m([_t], ao.prototype, "m_setPagedSettingsInstances", 2);
var Tr = ao;
function Mf(t) {
  let {
    stylesheet: e,
    pages: o,
    iActivePage: n,
    onPageSelected: r,
    PageListItemComponent: i = Df,
    PageListSeparatorComponent: a = yf,
  } = t;
  return o.map((s, l) => {
    let c = l === n;
    if (s === Sf) {
      let p = l === n + 1 || l === n - 1;
      return (0, G.jsx)(a, { bTransparent: p }, l);
    } else {
      if (s === wf)
        return (0, G.jsx)("div", { className: ut.PageListSpacer }, l);
      {
        if (s.visible === !1) return null;
        let p = s.identifier || s.title || l.toString(),
          d = () => r(l, s);
        return (0, G.jsx)(
          i,
          {
            className: h(e.PagedSettingsDialog_PageListItem, { [e.Active]: c }),
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
function Df(t) {
  let { title: e, icon: o, active: n, className: r, onClick: i, ...a } = t;
  return (0, G.jsxs)("div", {
    className: r,
    onClick: i,
    children: [
      o
        ? (0, G.jsx)("div", { className: ut.PageListItem_Icon, children: o })
        : null,
      (0, G.jsx)("div", {
        className: ut.PageListItem_Title,
        ...a,
        children: e,
      }),
    ],
  });
}
var md = H.forwardRef(function (e, o) {
  let { activePage: n, style: r, stylesheet: i } = e,
    a = n?.padding ?? "standard";
  return (0, G.jsxs)(sa, {
    style: r,
    className: h(
      i?.PagedSettingsDialog_PageContent,
      n?.pageClassName,
      a == "none" && i?.NoPadding,
    ),
    refElem: o,
    children: [
      n?.header,
      !n?.hideTitle && (0, G.jsx)(Cr, { children: n?.title }),
      (0, G.jsx)(de, { children: n?.content }),
    ],
  });
});
function yf(t) {
  return (0, G.jsx)("div", {
    className: h(ut.PageListSeparator, { [ut.Transparent]: t.bTransparent }),
  });
}
var _d = H.forwardRef(function (e, o) {
  let { stylesheet: n = ut, pages: r, onPageRequested: i } = e,
    a = e.page == null,
    [s, l] = H.useState(() =>
      e.startingPage === void 0
        ? -1
        : r.findIndex(
            (fe) => typeof fe == "object" && fe.identifier === e.startingPage,
          ),
    ),
    c = s;
  a ||
    (c = r.findIndex(
      (fe) => typeof fe == "object" && fe.identifier === e.page,
    )),
    (c < 0 || c >= r.length) && (c = 0);
  let p = null;
  typeof r[c] == "object" && (p = r[c]);
  let d = H.useRef(null),
    _ = H.useCallback(() => d.current?.TakeFocus() || !1, [d]),
    [b, w] = H.useState(!1),
    k = b ? _ : void 0,
    L = H.useCallback((fe) => {
      fe && w(!0);
    }, []),
    ie = H.useCallback(
      (fe, fo) => {
        w(!0),
          Te.PlayNavSound(15),
          i && i(fo.identifier),
          fo.click ? fo.click() : a && l(fe);
      },
      [a, i],
    ),
    Y = H.useRef(null),
    se = (fe) => {
      fe.detail.button == 1 && Y.current?.TakeFocus(fe.detail.button);
    },
    Re = e.showTitle ?? !0,
    ge = h("DialogContentTransition", n.PagedSettingDialog_ContentColumn);
  H.useEffect(() => {
    e.bAutoFocusPageContent && Y.current?.TakeFocus();
  }, []);
  let { refForPageList: le, refForPage: go } = Af();
  return (0, G.jsxs)(U, {
    className: h(n.PagedSettingsDialog, e.className),
    ref: o,
    children: [
      (0, G.jsxs)(U, {
        className: h(
          n.PagedSettingsDialog_PageListColumn,
          e.hideList && ut.Hidden,
          "PageListColumn",
        ),
        navRef: d,
        onButtonDown: se,
        onFocusWithin: L,
        children: [
          Re &&
            (0, G.jsx)("div", {
              className: n.PagedSettingsDialog_Title,
              children: e.title,
            }),
          e.topControls && (0, G.jsx)("div", { children: e.topControls }),
          (0, G.jsx)(U, {
            className: h(
              n.PagedSettingsDialog_PageList,
              e.disablePageListScrolling &&
                n.PagedSettingsDialog_PageList_DisableScrolling,
              Re && n.PagedSettingsDialog_PageList_ShowTitle,
              e.bNoHeaderPadding &&
                n.PageSettingsDialog_PageList_NoHeaderPadding,
            ),
            navEntryPreferPosition: 4,
            ref: le,
            children: (0, G.jsx)(Mf, {
              stylesheet: n,
              pages: r,
              iActivePage: c,
              onPageSelected: ie,
              PageListItemComponent: e.PageListItemComponent,
              PageListSeparatorComponent: e.PageListSeparatorComponent,
            }),
          }),
          e.bottomControls && (0, G.jsx)("div", { children: e.bottomControls }),
        ],
      }),
      (0, G.jsxs)(U, {
        className: ge,
        onCancelButton: k,
        navRef: Y,
        children: [
          e.toggleHideList &&
            (0, G.jsx)(kf, {
              hideList: e.hideList,
              toggleHideList: e.toggleHideList,
            }),
          e.renderPageContent
            ? e.renderPageContent(p, go, md)
            : (0, G.jsx)(md, { ref: go, activePage: p, stylesheet: n }),
        ],
      }),
    ],
  });
});
var Tf = H.createContext(!1);
var Vy = H.memo(function (e) {
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
  return (0, G.jsx)(Tf.Provider, {
    value: o,
    children: (0, G.jsx)(i, { ref: n, style: l, activePage: r, stylesheet: a }),
  });
});
function kf(t) {
  let { hideList: e, toggleHideList: o } = t;
  return (0, G.jsx)("div", {
    className: h(ut.HidePageListButton, e && ut.ListHidden),
    onClick: o,
    children: e
      ? (0, G.jsx)($r, { direction: "right" })
      : (0, G.jsx)($r, { direction: "left" }),
  });
}
function Af() {
  let t = H.useMemo(() => new Sn(), []);
  H.useEffect(
    () => (
      Tr.Get().m_setPagedSettingsInstances.add(t),
      () => {
        Tr.Get().m_setPagedSettingsInstances.delete(t);
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
    n = zr("scroll", e),
    r = zr("scroll", o),
    i = H.useCallback(
      (c) => (t.m_flPageListScrollTop = c?.scrollTop ?? 0),
      [t],
    ),
    a = H.useCallback((c) => (t.m_flPageScrollTop = c?.scrollTop ?? 0), [t]),
    s = ye(n, i),
    l = ye(r, a);
  return { refForPageList: s, refForPage: l };
}
var kr = u(M());
var gd = u(g()),
  jt = class extends kr.Component {
    m_refTextArea = kr.createRef();
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
      return (0, gd.jsx)(ws, {
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
m([f], jt.prototype, "InternalOnInput", 1),
  m([f], jt.prototype, "OnKeyUp", 1),
  m([f], jt.prototype, "OnBlur", 1),
  m([f], jt.prototype, "OnClick", 1),
  m([f], jt.prototype, "OnPaste", 1),
  m([f], jt.prototype, "OnCut", 1);
var pt = u(M());
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
var Mn = u(M());
var ha = u(M());
var ba = u(g());
async function xf(t, e, o) {
  let n = Io(e),
    r = o?.bForcePopOut || bd(n);
  pe(
    !(r && o?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let i = !r && o?.bNeverPopOut === !0,
    a = bd(n) || (!i && vd(n, e)),
    s = r && o?.popupWidth && o?.popupHeight,
    l;
  if (a && !s) {
    let p = ha.cloneElement(t, { closeModal: () => {} });
    l = await Ef(n, p, o?.promiseRenderComplete);
  }
  let c = l && l.height / e.innerHeight < 0.9 && l.width / e.innerWidth < 0.8;
  if (i || (!r && c)) return fd(t, e, void 0, { fnOnClose: o?.fnOnClose });
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
      _ = o?.browserContext || e.browserInfo;
    return fd(t, e, p.strTitle, p, _, d, n);
  }
}
async function hd(t, e, o) {
  return xf(t, e, { bHideMainWindowForPopouts: !0, ...o });
}
function fd(t, e, o, n, r, i, a) {
  let s,
    l,
    c = t.props.closeModal,
    p = () => {
      l && l.Close(), c && c(), n?.fnOnClose && n.fnOnClose();
    },
    d = () => {
      s && s.Close(), p();
    },
    _ = ha.cloneElement(t, { closeModal: d });
  if (((a = a || Io(e)), vd(a, e) && n && o)) {
    if (n.bHideMainWindowForPopouts) {
      let w = (0, ba.jsx)(to, {
        className: "Hidden",
        onEscKeypress: _.props.bDisableBackgroundDismiss ? void 0 : d,
        children: (0, ba.jsx)("div", {}),
      });
      l = a.ShowModal(w);
    }
    let b = { ...n, fnOnClose: p, browserContext: r };
    s = a.ShowLegacyPopupModal(o, _, b, i);
  } else s = a.ShowModal(_);
  return s;
}
function vd(t, e) {
  return (t = t || Io(e || window)), Ie.USE_POPUPS && t.BUsePopups();
}
function bd(t) {
  return t.BOnlyPopups && t.BOnlyPopups();
}
async function Ef(t, e, o) {
  return new Promise((n, r) => {
    t.RequestModalMeasure(e, n, o);
  });
}
var va = u(M());
var Ca = u(g()),
  Cd = It((t) => {
    let { onCancel: e, closeModal: o, bOKDisabled: n, onOK: r } = t,
      i = et();
    pe(
      o || e,
      `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${t.className} ${t.modalClassName}`,
    );
    let a = va.useCallback(() => {
        (e && e()) || (o && o());
      }, [e, o]),
      s = va.useCallback(async () => {
        n || (r && (await r()), o && o());
      }, [n, r, o]);
    return (0, Ca.jsx)(to, {
      onEscKeypress: a,
      className: t.modalClassName,
      bDestructiveWarning: t.bDestructiveWarning,
      bDisableBackgroundDismiss: t.bDisableBackgroundDismiss,
      bHideCloseIcon: t.bHideCloseIcon,
      children: (0, Ca.jsx)(ed, {
        classNameContent: h(
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
var _e = u(g());
var No = class extends Mn.Component {
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
      _ = (0, _e.jsx)(od, {
        bOKDisabled: this.props.bOKDisabled,
        bCancelDisabled: this.props.bCancelDisabled,
        strOKText: n,
        onCancel: this.Cancel(this.props.onCancel),
        strCancelText: r,
      });
    return (
      l
        ? (_ = (0, _e.jsx)(hn, { children: d }))
        : s &&
          (_ = (0, _e.jsx)(nd, {
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
      (0, _e.jsxs)(Cd, {
        ...p,
        children: [
          (0, _e.jsxs)(Cr, {
            children: [
              " ",
              e || (0, _e.jsx)(_e.Fragment, { children: " " }),
              " ",
            ],
          }),
          (0, _e.jsxs)(Kp, {
            onCancelButton: this.Cancel(i || this.props.onCancel),
            children: [
              (0, _e.jsxs)(Zp, { children: [o, c] }),
              (0, _e.jsx)($p, { children: _ }),
            ],
          }),
        ],
      })
    );
  }
};
No = m([It], No);
var Ar = class extends Mn.Component {
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
    return (0, _e.jsx)(No, { ...e });
  }
};
Ar = m([It], Ar);
var wn = class extends Mn.Component {
  render() {
    let e = {
      onOK: () => {},
      onCancel: () => {},
      bAlertDialog: !0,
      ...this.props,
    };
    return (
      (e.strDescription = (0, _e.jsxs)("span", {
        style: { whiteSpace: "pre-line" },
        children: [" ", e.strDescription, " "],
      })),
      (0, _e.jsx)(No, { ...e })
    );
  }
};
wn = m([It], wn);
function Rd(t, e, o) {
  hd((0, _e.jsx)(wn, { strTitle: t, strDescription: e }), o);
}
var ce = u(g()),
  Oo = pt.forwardRef(function (e, o) {
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
        disabled: _,
        bottomSeparator: b,
        className: w,
        highlightOnFocus: k,
        indentLevel: L,
        verticalAlignment: ie,
        iconLocation: Y,
        tooltip: se,
        explainer: Re,
        explainerTitle: ge,
        ...le
      } = e,
      go = et(),
      fe = s ?? "inline",
      fo = Y ?? "front",
      Ha = fo == "front" && !!i,
      Ga = fo == "before-children" && !!i,
      Nr = fe == "inline" && !!a,
      Va = fe == "below" && !!a,
      xm = l ?? (go ? "shift-children-below" : "keep-inline"),
      Or = !!(le.onClick || le.onActivate || le.focusable),
      za = (i != null && Ha) || n != null || (Nr && a != null),
      ja = c ?? "min",
      Em = p ?? "standard",
      qa = d ?? "standard",
      Ya = b ?? "standard",
      Lm = k ?? !0,
      Bm = L ?? 0,
      Im = ie ?? "center",
      Fm = Lf(ge ?? n, Re),
      Ur = pt.useRef(),
      Nm = ye(Ur, e.navRef),
      Om = pt.useCallback(
        (Wr) => {
          Ur.current?.TakeFocus(), Wr.preventDefault();
        },
        [Ur],
      );
    return (0, ce.jsxs)(U, {
      focusable: Or,
      noFocusRing: !0,
      scrollIntoViewWhenChildFocused: !0,
      onActivate: (Wr) => le.onClick?.(Wr),
      ref: o,
      onMouseDown: Or ? void 0 : Om,
      ...le,
      ...Fm,
      navRef: Nm,
      className: h(
        w,
        T.Field,
        _ && T.Disabled,
        za && T.WithFirstRow,
        Nr && T.WithChildrenInline,
        Va && T.WithChildrenBelow,
        Im == "center" && T.VerticalAlignCenter,
        xm == "shift-children-below" && T.InlineWrapShiftsChildrenBelow,
        !!r && T.WithDescription,
        Ya == "standard" && T.WithBottomSeparatorStandard,
        Ya == "thick" && T.WithBottomSeparatorThick,
        ja == "fixed" && T.ChildrenWidthFixed,
        ja == "max" && T.ChildrenWidthGrow,
        Em == "standard" && T.ExtraPaddingOnChildrenBelow,
        qa == "standard" && T.StandardPadding,
        qa == "compact" && T.CompactPadding,
        Or && T.Clickable,
        Lm && T.HighlightOnFocus,
      ),
      style: { "--indent-level": Bm },
      children: [
        za &&
          (0, ce.jsxs)("div", {
            className: T.FieldLabelRow,
            children: [
              (0, ce.jsxs)("div", {
                className: T.FieldLabel,
                children: [
                  Ha &&
                    (0, ce.jsx)("div", {
                      className: h(T.FieldIcon, T.Front),
                      children: i,
                    }),
                  n,
                  se && (0, ce.jsx)(Pt, { tooltip: se }),
                ],
              }),
              Nr &&
                (0, ce.jsxs)("div", {
                  className: T.FieldChildrenWithIcon,
                  children: [
                    Ga &&
                      (0, ce.jsx)("div", {
                        className: h(T.FieldIcon, T.BeforeChildren),
                        children: i,
                      }),
                    (0, ce.jsx)("div", {
                      className: T.FieldChildrenInner,
                      children: a,
                    }),
                  ],
                }),
            ],
          }),
        Va &&
          (0, ce.jsxs)("div", {
            className: T.FieldChildrenWithIcon,
            children: [
              Ga &&
                (0, ce.jsx)("div", {
                  className: h(T.FieldIcon, T.BeforeChildren),
                  children: i,
                }),
              (0, ce.jsx)("div", {
                className: T.FieldChildrenInner,
                children: a,
              }),
            ],
          }),
        r && (0, ce.jsx)("div", { className: T.FieldDescription, children: r }),
      ],
    });
  });
function Lf(t, e) {
  let o = Se(),
    n = pt.useCallback(() => {
      Rd(t, e, o.ownerWindow ?? window);
    }, [o, t, e]);
  if (e == null) return {};
  let r = B("#Field_MoreInfo_Action");
  return { onOptionsButton: n, onOptionsActionDescription: r };
}
var xT = pt.forwardRef(function (e, o) {
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
        childrenContainerWidth: _,
        padding: b,
        inlineWrap: w,
        fieldClassName: k,
        fieldChildren: L,
        ...ie
      } = e,
      { refWithValue: Y, refForElement: se } = Vr(o);
    return (0, ce.jsxs)(Oo, {
      label: n,
      description: r,
      icon: a,
      bottomSeparator: p,
      highlightOnFocus: d,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: _ ?? "min",
      onMouseDown: (ge) => {
        Y.current?.focus(), ge.preventDefault();
      },
      padding: b,
      inlineWrap: w,
      explainer: i,
      className: k,
      disabled: l,
      onActivate: l ? c : void 0,
      children: [(0, ce.jsx)(We, { ...ie, disabled: l, ref: se }), L],
    });
  }),
  Pd = pt.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        icon: i,
        layout: a,
        bottomSeparator: s,
        highlightOnFocus: l,
        ...c
      } = e,
      { refWithValue: p, refForElement: d } = Vr(o);
    return (0, ce.jsx)(Oo, {
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
      children: (0, ce.jsx)(ro, { ...c, ref: d }),
    });
  });
var Ld = u(M());
var oe = u(M());
var Le = u(M());
var Ra = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function Pa(t, e) {
  return t.classList
    ? !!e && t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function Sa(t, e) {
  t.classList
    ? t.classList.add(e)
    : Pa(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function Sd(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function wa(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
      ? (t.className = Sd(t.className, e))
      : t.setAttribute(
          "class",
          Sd((t.className && t.className.baseVal) || "", e),
        );
}
var Ta = u(M());
var Dn = u(M()),
  yn = u(kt());
var Ma = { disabled: !1 };
var wd = u(M()),
  Uo = wd.default.createContext(null);
var xr = function (e) {
  return e.scrollTop;
};
var Tn = "unmounted",
  so = "exited",
  lo = "entering",
  Ho = "entered",
  Da = "exiting",
  Dt = (function (t) {
    Mo(e, t);
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
            ? ((l = so), (i.appearStatus = lo))
            : (l = Ho)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Tn)
            : (l = so),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    e.getDerivedStateFromProps = function (r, i) {
      var a = r.in;
      return a && i.status === Tn ? { status: so } : null;
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
            ? a !== lo && a !== Ho && (i = lo)
            : (a === lo || a === Ho) && (i = Da);
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
          if ((this.cancelNextCallback(), i === lo)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : yn.default.findDOMNode(this);
              a && xr(a);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === so &&
            this.setState({ status: Tn });
      }),
      (o.performEnter = function (r) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : r,
          l = this.props.nodeRef ? [s] : [yn.default.findDOMNode(this), s],
          c = l[0],
          p = l[1],
          d = this.getTimeouts(),
          _ = s ? d.appear : d.enter;
        if ((!r && !a) || Ma.disabled) {
          this.safeSetState({ status: Ho }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, p),
          this.safeSetState({ status: lo }, function () {
            i.props.onEntering(c, p),
              i.onTransitionEnd(_, function () {
                i.safeSetState({ status: Ho }, function () {
                  i.props.onEntered(c, p);
                });
              });
          });
      }),
      (o.performExit = function () {
        var r = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : yn.default.findDOMNode(this);
        if (!i || Ma.disabled) {
          this.safeSetState({ status: so }, function () {
            r.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Da }, function () {
            r.props.onExiting(s),
              r.onTransitionEnd(a.exit, function () {
                r.safeSetState({ status: so }, function () {
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
            : yn.default.findDOMNode(this),
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
        if (r === Tn) return null;
        var i = this.props,
          a = i.children,
          s = i.in,
          l = i.mountOnEnter,
          c = i.unmountOnExit,
          p = i.appear,
          d = i.enter,
          _ = i.exit,
          b = i.timeout,
          w = i.addEndListener,
          k = i.onEnter,
          L = i.onEntering,
          ie = i.onEntered,
          Y = i.onExit,
          se = i.onExiting,
          Re = i.onExited,
          ge = i.nodeRef,
          le = wo(i, [
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
        return Dn.default.createElement(
          Uo.Provider,
          { value: null },
          typeof a == "function"
            ? a(r, le)
            : Dn.default.cloneElement(Dn.default.Children.only(a), le),
        );
      }),
      e
    );
  })(Dn.default.Component);
Dt.contextType = Uo;
Dt.propTypes = {};
function Wo() {}
Dt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Wo,
  onEntering: Wo,
  onEntered: Wo,
  onExit: Wo,
  onExiting: Wo,
  onExited: Wo,
};
Dt.UNMOUNTED = Tn;
Dt.EXITED = so;
Dt.ENTERING = lo;
Dt.ENTERED = Ho;
Dt.EXITING = Da;
var Md = Dt;
var Bf = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return Sa(e, n);
      })
    );
  },
  ya = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return wa(e, n);
      })
    );
  },
  ka = (function (t) {
    Mo(e, t);
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
            _ = d ? "appear" : "enter";
          n.addClass(p, _, "active"),
            n.props.onEntering && n.props.onEntering(s, l);
        }),
        (n.onEntered = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            d = c[1],
            _ = d ? "appear" : "enter";
          n.removeClasses(p, _),
            n.addClass(p, _, "done"),
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
            _ = c ? d + "-active" : l[s + "Active"],
            b = c ? d + "-done" : l[s + "Done"];
          return { baseClassName: d, activeClassName: _, doneClassName: b };
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
          a === "active" && r && xr(r),
          s && ((this.appliedClasses[i][a] = s), Bf(r, s));
      }),
      (o.removeClasses = function (r, i) {
        var a = this.appliedClasses[i],
          s = a.base,
          l = a.active,
          c = a.done;
        (this.appliedClasses[i] = {}),
          s && ya(r, s),
          l && ya(r, l),
          c && ya(r, c);
      }),
      (o.render = function () {
        var r = this.props,
          i = r.classNames,
          a = wo(r, ["classNames"]);
        return Ta.default.createElement(
          Md,
          jn({}, a, {
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
  })(Ta.default.Component);
ka.defaultProps = { classNames: "" };
ka.propTypes = {};
var Aa = ka;
function Dd(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
var kn = u(M());
var Ve = u(M());
function Er(t, e) {
  var o = function (i) {
      return e && (0, Ve.isValidElement)(i) ? e(i) : i;
    },
    n = Object.create(null);
  return (
    t &&
      Ve.Children.map(t, function (r) {
        return r;
      }).forEach(function (r) {
        n[r.key] = o(r);
      }),
    n
  );
}
function If(t, e) {
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
function co(t, e, o) {
  return o[e] != null ? o[e] : t.props[e];
}
function yd(t, e) {
  return Er(t.children, function (o) {
    return (0, Ve.cloneElement)(o, {
      onExited: e.bind(null, o),
      in: !0,
      appear: co(o, "appear", t),
      enter: co(o, "enter", t),
      exit: co(o, "exit", t),
    });
  });
}
function Td(t, e, o) {
  var n = Er(t.children),
    r = If(e, n);
  return (
    Object.keys(r).forEach(function (i) {
      var a = r[i];
      if ((0, Ve.isValidElement)(a)) {
        var s = i in e,
          l = i in n,
          c = e[i],
          p = (0, Ve.isValidElement)(c) && !c.props.in;
        l && (!s || p)
          ? (r[i] = (0, Ve.cloneElement)(a, {
              onExited: o.bind(null, a),
              in: !0,
              exit: co(a, "exit", t),
              enter: co(a, "enter", t),
            }))
          : !l && s && !p
            ? (r[i] = (0, Ve.cloneElement)(a, { in: !1 }))
            : l &&
              s &&
              (0, Ve.isValidElement)(c) &&
              (r[i] = (0, Ve.cloneElement)(a, {
                onExited: o.bind(null, a),
                in: c.props.in,
                exit: co(a, "exit", t),
                enter: co(a, "enter", t),
              }));
      }
    }),
    r
  );
}
var Ff =
    Object.values ||
    function (t) {
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    },
  Nf = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  xa = (function (t) {
    Mo(e, t);
    function e(n, r) {
      var i;
      i = t.call(this, n, r) || this;
      var a = i.handleExited.bind(Dd(i));
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
        return { children: l ? yd(r, s) : Td(r, a, s), firstRender: !1 };
      }),
      (o.handleExited = function (r, i) {
        var a = Er(this.props.children);
        r.key in a ||
          (r.props.onExited && r.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = jn({}, s.children);
              return delete l[r.key], { children: l };
            }));
      }),
      (o.render = function () {
        var r = this.props,
          i = r.component,
          a = r.childFactory,
          s = wo(r, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = Ff(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? kn.default.createElement(Uo.Provider, { value: l }, c)
            : kn.default.createElement(
                Uo.Provider,
                { value: l },
                kn.default.createElement(i, s, c),
              )
        );
      }),
      e
    );
  })(kn.default.Component);
xa.propTypes = {};
xa.defaultProps = Nf;
var Ea = xa;
var Go = u(g());
function kd(t) {
  let {
      childrenKey: e,
      childrenClasses: o,
      children: n,
      directionClass: r,
      animate: i = !0,
    } = t,
    a = h(Ra.TransitionGroup, r);
  return (0, Go.jsx)(Ea, {
    className: a,
    appear: !1,
    enter: i,
    exit: i,
    children: (0, Go.jsx)(Of, { childrenClasses: o, children: n }, e),
  });
}
function Of(t) {
  let { sizeClass: e, children: o, childrenClasses: n, navKey: r, ...i } = t,
    [a, s, l, c] = Uf(),
    p = Le.useRef(!0),
    d = Le.useCallback(() => p.current, [p]),
    _ = Le.useCallback(() => {
      (p.current = !0), l();
    }, [l]),
    b = Le.useCallback(() => {
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
    : (0, Go.jsx)(Aa, {
        nodeRef: a,
        classNames: L,
        in: !0,
        timeout: w,
        addEndListener: s,
        onEntering: _,
        onExiting: b,
        ...i,
        children: (0, Go.jsx)("div", {
          ref: a,
          className: h(Ra.ContentWrapper, e, k.base),
          children: (0, Go.jsx)(U, {
            className: e,
            fnCanTakeFocus: d,
            navKey: r,
            children: t.children,
          }),
        }),
      });
}
function Uf() {
  let t = Le.useRef(null),
    e = Le.useRef();
  Le.useLayoutEffect(() => {
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
  let o = Le.useCallback(
      (i) => {
        if (!e.current) {
          i();
          return;
        }
        e.current.fnDone = i;
      },
      [e],
    ),
    n = Le.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    r = Le.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [t, o, n, r];
}
function Ad(t, e) {
  return {
    base: e,
    enterStart: t.Enter,
    enterEnd: t.EnterActive,
    exitStart: t.Exit,
    exitEnd: t.ExitActive,
  };
}
function xd(t, e) {
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
var yt = {
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
var Je = u(g()),
  Ed = oe.createContext(null);
function Wf(t) {
  let e = oe.useContext(Ed),
    n = Ts().IN_VR,
    { title: r, icon: i, active: a, ...s } = t;
  return (0, Je.jsxs)(U, {
    preferredFocus: a,
    navRef: a && e ? e : void 0,
    noFocusRing: !0,
    onActivate: n ? void 0 : s.onClick,
    onFocus: n ? void 0 : s.onClick,
    ...s,
    children: [
      i && (0, Je.jsx)("div", { className: yt.PageListItem_Icon, children: i }),
      (0, Je.jsx)("div", { className: yt.PageListItem_Title, children: r }),
    ],
  });
}
function Hf(t) {
  return (0, Je.jsx)("div", { className: yt.Separator });
}
var Gf = oe.forwardRef(function (e, o) {
  let { page: n, bAutoFocusPageContent: r, showTitle: i = !1 } = e,
    a = oe.useRef(null),
    s = oe.useRef(!0);
  oe.useEffect(() => {
    (!s.current || !r) && a.current?.TakeFocus(), (s.current = !1);
  }, [n, r]);
  let l = (c, p, d) =>
    (0, Je.jsx)(Vf, {
      pages: e.pages,
      activePage: c,
      refForPage: p,
      PageComponent: d,
    });
  return (0, Je.jsx)(Ed.Provider, {
    value: a,
    children: (0, Je.jsx)(_d, {
      ...e,
      stylesheet: yt,
      showTitle: i,
      PageListItemComponent: Wf,
      PageListSeparatorComponent: Hf,
      renderPageContent: e.renderPageContent || l,
    }),
  });
});
function Vf(t) {
  let { pages: e, activePage: o, refForPage: n, PageComponent: r } = t,
    i = oe.useMemo(() => e.findIndex((c) => c == o), [e, o]),
    a = zf(i),
    s = jf(o?.identifier, n),
    l = xd(yt, a);
  return (0, Je.jsx)(kd, {
    childrenKey: o?.identifier,
    childrenClasses: Ad(yt, yt.ContentTransition),
    directionClass: l,
    animate: a != 0,
    children:
      o &&
      (0, Je.jsx)(
        r,
        { ref: s(o.identifier), stylesheet: yt, activePage: o },
        o.identifier,
      ),
  });
}
function zf(t) {
  let e = oe.useRef(t),
    o = oe.useRef(0),
    n = e.current;
  if (n == t) return o.current;
  let r = 0;
  return (
    n < t ? (r = 4) : n > t && (r = 3), (e.current = t), (o.current = r), r
  );
}
function jf(t, e) {
  let o = oe.useMemo(() => new Map(), []),
    n = oe.useRef();
  n.current = t;
  let r = oe.useRef();
  r.current = e;
  let i = oe.useCallback(
    (a) => (s) => {
      o.set(a, s), a === n.current && qt(r.current, s);
    },
    [o],
  );
  return (
    oe.useEffect(() => (qt(e, t && o.get(t)), () => qt(e, void 0)), [o, t, e]),
    i
  );
}
var Bd = u(g()),
  Lk = Ld.forwardRef(function (e, o) {
    return (0, Bd.jsx)(Co, {
      noFocusRing: !0,
      ...e,
      ref: o,
      className: h(T.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var Nd = u(M());
var Fd = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var Be = u(g());
function Od(t, e) {
  for (let o of t.options)
    if ((wt(o) && o.data === e) || (ct(o) && Od(o, e))) return !0;
  return !1;
}
function La(t) {
  let e = (o) =>
    o?.map((n, r) =>
      io(n)
        ? (0, Be.jsx)(Xs, {}, r)
        : wt(n)
          ? (0, Be.jsx)(
              So,
              {
                onSelected: (i) => t.onValueSelected && t.onValueSelected(i, n),
                selected: t.selectedValue === n.data,
                children: (0, Be.jsx)(Be.Fragment, { children: n.label }),
              },
              r,
            )
          : ct(n)
            ? (0, Be.jsx)(
                Qs,
                {
                  label: n.label,
                  selectedWithin: Od(n, t.selectedValue),
                  children: e(n.options),
                },
                r,
              )
            : null,
    );
  return (0, Be.jsx)(Jo, { onCancel: t.onCancel, children: e(t.rgOptions) });
}
var qf = Nd.forwardRef(function (e, o) {
  return (0, Be.jsx)(We, {
    className: h(Fd.DropDownControlButton, e.className),
    focusable: e.focusable,
    disabled: e.disabled,
    onClick: e.onClick,
    tabIndex: e.tabIndex,
    ref: o,
    children: (0, Be.jsxs)("div", {
      className: T.DropDownControlButtonContents,
      children: [
        e.children,
        (0, Be.jsx)("div", { className: h(T.Spacer, "Spacer") }),
        (0, Be.jsx)(Zo, { direction: "down" }),
      ],
    }),
  });
});
var dt = u(M());
var Ud = "TW2ZQnLvgIc-";
var uo = u(g()),
  Jk = dt.forwardRef(function (e, o) {
    let { className: n, ...r } = e,
      i = dt.useRef(),
      a = ye(o, i),
      [s, l] = dt.useState(!1),
      c = dt.useCallback(() => {
        l((p) => !p), window.setTimeout(() => i.current?.Focus(), 1);
      }, []);
    return (0, uo.jsx)(U, {
      className: n,
      onOptionsButton: c,
      onOptionsActionDescription: B(
        s ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, uo.jsx)(ro, {
        autoComplete: "off",
        ref: a,
        inlineControls: (0, uo.jsx)(We, {
          className: Ud,
          onPointerDown: c,
          onOKButton: c,
          children: s ? (0, uo.jsx)(Ks, {}) : (0, uo.jsx)(el, {}),
        }),
        ...r,
        type: s ? "text" : "password",
      }),
    });
  });
function Qf(t) {
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
var $k = dt.forwardRef(function (e, o) {
  let { className: n, value: r, ...i } = e,
    a = r ?? "";
  return (0, uo.jsx)(Pd, {
    autoComplete: "off",
    value: a,
    ref: o,
    placeholder: "   .   .   .   ",
    ...i,
    onChange: (l) => {
      let c = l.target.value;
      if (Qf(c)) i.onChange && i.onChange(l);
      else {
        l.target.value = a;
        return;
      }
    },
  });
});
var Ce = u(M());
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
var V = u(g()),
  Jf = 10,
  $f = 1,
  Zf = 0.01,
  Kf = 0.05,
  PA = Xp(I["error-shake-duration"]);
function Wd(t, e) {
  return e < 0 ? 0 : e > 1 ? 1 : t == 0 ? e : Math.round(e / t) * t;
}
function Hd(t, e, o) {
  let n = t + o * (e - t);
  return Number.parseFloat(n.toFixed(10));
}
function Ia(t, e, o) {
  return (o - t) / (e - t);
}
var ue = class extends Ce.Component {
  m_refSlider = Ce.createRef();
  m_refHandle = Ce.createRef();
  m_navRefSlider = Ce.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = ms();
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
    return Math.abs(this.props.step ?? $f);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      o = e > 0 ? e / this.range : Zf;
    return Math.max(o, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : bo(this.props.value, this.props.min, this.props.max);
    return Ia(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return Ia(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = bo(0, this.props.min, this.props.max);
    return Ia(this.props.min, this.props.max, e);
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
      r = Qa(n, 0, 2e3, 500, 250),
      i = Math.pow(2, Math.floor(n / r)),
      a = this.normalizedDpadStep * i,
      s = bo(a, this.normalizedDpadStep, Kf) * o,
      l = Wd(this.normalizedStep, this.normalizedClampedValue + s),
      c = Hd(this.props.min, this.props.max, l);
    if (
      ((c = bo(
        c,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      c != this.props.value)
    ) {
      let p = c > this.m_fLatestUserValue;
      Te.PlayNavSound(p ? 18 : 19),
        (this.m_fLatestUserValue = c),
        this.FireOnChange(c, 2);
    } else Te.PlayNavSound(25);
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
      n = Wd(this.normalizedStep, o),
      r = Hd(this.props.min, this.props.max, n),
      i = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((r = bo(r, i, a)), r != this.props.value)) {
      let s = r > this.props.value,
        l = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !l) && Te.PlayNavSound(s ? 18 : 19),
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
          let _ = Math.floor(((this.m_fLatestUserValue - i) / (a - i)) * 40),
            b = Math.floor(((r - i) / (a - i)) * 40);
          _ != b && !p && (this.PlayHaptic(4), (p = !0));
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
          if (gs(this.m_vTouchStartPosition, o) >= Jf) {
            let r = _s(this.m_vTouchStartPosition, o);
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
      Te.PlayNavSound(r ? 18 : 19);
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
    this.m_fZoom = ls(this.m_refSlider.current);
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
      Te.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let o = (0, V.jsx)(Jo, {
        children: (0, V.jsx)(So, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: B("#ResetToDefault"),
        }),
      });
      $o(o, e);
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
      _ = !d,
      b = {};
    this.CanResetToDefault && (b[3] = B("#ResetToDefault"));
    let w = `${I.SliderHandle} SliderHandle`,
      k = `${I.SliderHandleContainer} SliderHandleContainer `;
    return (
      this.props.handleType == "verticalline"
        ? ((w = `${I.VerticalLineSliderHandle} SliderHandle`),
          (k = `${I.VerticalLineSliderHandleContainer} SliderHandleContainer `))
        : (this.props.handleType == "leftparen" ||
            this.props.handleType == "rightparen") &&
          ((w = h(
            I.ParenSliderHandle,
            this.props.handleType == "leftparen" ? I.Left : I.Right,
            "SliderHandle",
          )),
          (k = h(
            I.ParenSliderHandleContainer,
            this.props.handleType == "leftparen" ? I.Left : I.Right,
            "SliderHandleContainer",
          ))),
      (0, V.jsx)(ll, {
        noFocusRing: !0,
        className: h(
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
        onOKButton: this.props.disabled ? () => Te.PlayNavSound(25) : void 0,
        onSecondaryButton: this.CanResetToDefault
          ? this.ResetToDefault
          : void 0,
        onSecondaryActionDescription: this.CanResetToDefault
          ? B("#ResetToDefault")
          : void 0,
        actionDescriptionMap: b,
        children: (0, V.jsxs)(Bt, {
          className: h(
            I.SliderControlAndNotches,
            this.props.disabled && I.Disabled,
            c && I.WithDefaultValue,
            c && _ && I.DefaultValueIsColorRange,
            c && _ && p.side == "left" && I.DefaultValueColorLeft,
            c && _ && p.side != "left" && I.DefaultValueColorRight,
          ),
          focusable: this.isKeyNavTarget,
          noFocusRing: !0,
          onFocus: this.OnInnerSliderFocus,
          onBlur: this.OnInnerSliderBlur,
          style: {
            "--normalized-slider-value": this.normalizedClampedValue,
            "--normalized-slider-default-value": s,
            "--normalized-slider-origin": l,
            "--default-value-track-color": _ ? p.trackForegroundColor : void 0,
            "--slider-extra-notch-padding":
              this.props.extraNotchPadding ?? "0px",
          },
          ref: Fn(this.m_refSlider, this.props.innerRef),
          navRef: this.m_navRefSlider,
          onGamepadDirection: this.OnGamepadDirection,
          onOKButton: this.BlurInnerSlider,
          onOKActionDescription: null,
          onCancelButton: this.BlurInnerSlider,
          onCancelActionDescription: B("#ActionButtonLabelDone"),
          children: [
            (0, V.jsxs)("div", {
              className: h(I.SliderControl, "SliderControl"),
              children: [
                (0, V.jsx)("div", {
                  className: h(
                    I.SliderTrack,
                    this.props.notchCount != null && o && I.SliderHasNotches,
                    { [I.SliderTrackDark]: this.props.trackTone === "dark" },
                    "SliderTrack",
                  ),
                }),
                c &&
                  d &&
                  (0, V.jsx)("div", {
                    className: I.DefaultValueTickContainer,
                    children: (0, V.jsx)("div", {
                      className: I.DefaultValueTick,
                      children: (0, V.jsx)(Zo, { direction: "down" }),
                    }),
                  }),
                this.validRange &&
                  this.props.value != null &&
                  !isNaN(this.props.value) &&
                  this.showHandle &&
                  (0, V.jsx)("div", {
                    className: k,
                    children: (0, V.jsxs)("div", {
                      className: w,
                      ref: this.m_refHandle,
                      children: [
                        this.props.handleType == "leftparen" &&
                          (0, V.jsx)(tl, {}),
                        this.props.handleType == "rightparen" &&
                          (0, V.jsx)(ol, {}),
                      ],
                    }),
                  }),
              ],
            }),
            (0, V.jsx)(eb, {
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
m([f], ue.prototype, "RecomputeSliderBounds", 1),
  m([f], ue.prototype, "SetDragMode", 1),
  m([f], ue.prototype, "OnGamepadDirection", 1),
  m([f], ue.prototype, "UpdateSliderValueForPosition", 1),
  m([f], ue.prototype, "OnWindowMouseMove", 1),
  m([f], ue.prototype, "OnWindowMouseUp", 1),
  m([f], ue.prototype, "OnMouseDown", 1),
  m([f], ue.prototype, "OnTouchStart", 1),
  m([f], ue.prototype, "OnWindowTouchMove", 1),
  m([f], ue.prototype, "OnWindowTouchEnd", 1),
  m([f], ue.prototype, "Complete", 1),
  m([f], ue.prototype, "BlurInnerSlider", 1),
  m([f], ue.prototype, "OnInnerSliderFocus", 1),
  m([f], ue.prototype, "OnInnerSliderBlur", 1),
  m([f], ue.prototype, "ResetToDefault", 1),
  m([f], ue.prototype, "OnContextMenu", 1);
function eb(t) {
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
          tb,
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
  return (0, V.jsx)(U, { className: h(I.SliderNotchContainer), children: l });
}
function tb(t) {
  let e = t.notchIndex <= (t.notchCount - 1) * t.sliderValue,
    o = t.notchCount <= 3 && !t.notchTicksVisible,
    n = o && t.notchIndex == 0,
    r = o && t.notchIndex == t.notchCount - 1,
    i = { ...t, alignLeftEnd: n, alignRightEnd: r, active: e };
  return (0, V.jsx)("div", {
    className: h(I.SliderNotch, o && I.AlignToEnds),
    children: t.renderNotch ? t.renderNotch(i) : (0, V.jsx)(ob, { ...i }),
  });
}
function ob(t) {
  let { alignLeftEnd: e, alignRightEnd: o, active: n } = t;
  return (0, V.jsxs)(V.Fragment, {
    children: [
      t.notchTicksVisible &&
        (0, V.jsx)("div", {
          className: h(I.SliderNotchTick, n && I.TickActive),
        }),
      t.notchLabel &&
        (0, V.jsx)("div", {
          className: h(
            I.SliderNotchLabel,
            e && I.AlignToLeft,
            o && I.AlignToRight,
          ),
          children: t.notchLabel?.label,
        }),
    ],
  });
}
var SA = Ce.forwardRef(function (e, o) {
  let {
    label: n,
    labelIndex: r,
    xOffset: i,
    onResize: a,
    OnMouseDown: s,
    OnTouchStart: l,
  } = e;
  Ce.useEffect(() => {
    a(r);
  }, [a, r]);
  let c = Ce.useCallback(
      (_) => {
        a(r);
      },
      [a, r],
    ),
    p = Ys(c),
    d = ye(p, o);
  return (0, V.jsx)("div", {
    className: I.CompoundSliderSubSliderLabel,
    ref: d,
    onMouseDown: s,
    onTouchStart: l,
    style: { transform: `translateX(${i}px)` },
    children: (0, V.jsx)("div", {
      className: I.CompoundSliderSubSliderLabelInternal,
      children: n,
    }),
  });
});
var Gd = u(M());
var po = u(g()),
  Id = Gd.forwardRef(function (e, o) {
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
          r(d), Te.PlayNavSound(d ? 16 : 17);
        }
      };
    return (0, po.jsxs)(Bt, {
      noFocusRing: !0,
      className: h(a, T.Toggle, { [T.Disabled]: !!i, [T.On]: !!n }),
      onClick: p,
      ref: o,
      navRef: c,
      focusable: s,
      children: [
        (0, po.jsx)("div", { className: T.ToggleRail }),
        (0, po.jsx)("div", { className: T.ToggleSwitch }),
        l,
      ],
    });
  }),
  Lr = class extends Vt {
    OnToggleChange(e) {
      !this.props.disabled && e !== this.checked && this.Toggle();
    }
    render() {
      let e = !!this.props.disabled,
        { actionDescriptions: o, gamepadEvents: n } = Ss(this.props);
      return (0, po.jsx)(Oo, {
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
        children: (0, po.jsx)(Id, {
          onChange: this.OnToggleChange,
          value: this.checked,
          disabled: e,
          navRef: this.props.navRef,
        }),
      });
    }
  };
m([f], Lr.prototype, "OnToggleChange", 1);
var Fa = u(g());
function Ba(t) {
  let { children: e, bCenterVertically: o, refElem: n, ...r } = t,
    i = h(
      T.GamepadDialogContent,
      "DialogContent _DialogLayout",
      t.className,
      o && " _DialogCenterVertically",
    ),
    { ref: a, navRef: s } = sl(),
    l = ye(n, a);
  return (0, Fa.jsx)(U, {
    ...r,
    className: i,
    ref: l,
    navRef: s,
    children: (0, Fa.jsx)(U, {
      className: h(
        T.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
var An = u(M());
var Vo = u(g());
function Vd() {
  return An.useMemo(() => nb(), []);
}
function nb() {
  return function (e) {
    let {
        refNavTree: o,
        className: n,
        active: r,
        children: i,
        modalKey: a,
      } = e,
      s = An.useRef(null);
    Ms(s, r, !0);
    let l = ye(s, o);
    return (0, Vo.jsx)(Rs, {
      className: n,
      navTreeRef: l,
      modal: !0,
      enabled: r,
      navID: `ModalDialogOverlay_${a}`,
      children: i,
    });
  };
}
function rb(t) {
  let {
      className: e,
      onEscKeypress: o,
      padding: n = "standard",
      bGamepadUIScrollWithin: r,
      children: i,
    } = t,
    a = h(
      T.ModalPosition,
      n == "standard" && T.WithStandardPadding,
      r && T.ScrollWithin,
      e,
    );
  return (0, Vo.jsx)(U, {
    className: a,
    onCancelButton: o,
    focusableIfNoChildren: !0,
    children: (0, Vo.jsx)(Gn, { children: (0, Vo.jsx)(de, { children: i }) }),
  });
}
function zd(t) {
  let e = An.useMemo(() => ({ ModalPosition: rb }), []);
  return (0, Vo.jsx)(ea.Provider, { value: e, children: t.children });
}
var Br = u(g());
function Na(t) {
  let e = Vd(),
    o = jd.useMemo(() => ({ DropDownMenu: La, Content: Ba }), []);
  return (0, Br.jsx)(Fo.Provider, {
    value: o,
    children: (0, Br.jsx)(zd, {
      children: (0, Br.jsx)(Bo, {
        ...t,
        bUseDialogElement: !1,
        DialogWrapper: e,
        ContextMenuComponent: Yp,
      }),
    }),
  });
}
var Oa = u(g());
function qd(t) {
  let e = et(),
    o = { bRenderOverlayAtRoot: !0, bUsePopups: !1, ...t };
  return e ? (0, Oa.jsx)(Na, { ...o }) : (0, Oa.jsx)(Bo, { ...o });
}
var sm = u(Et(), 1);
var Yd = "/RDNVLABA.png";
var Xd = "/QQGETVBA.png";
var Qd = "/MVIQJMBA.png";
var Jd = "/62SHH2CA.png";
var $d = "Ksy4XAVZlM0-";
var Zd = "n2wjqqfVgC4-";
var Ua = "osYYItlitxA-";
var Kd = "knntvUEkLRg-";
var em = "_1ToiOSH69g8-";
var tm = "s6DTWBl90Rc-";
var om = "UnRkTYm5fo0-";
var nm = "ftmxCcsknb4-";
var rm = "byvXpNiaYrs-";
var im = "y9kERlobJ88-";
var am = "Hf0BSchKz6g-";
var y = u(g(), 1);
function ze() {
  return (0, y.jsx)("span", {
    "aria-hidden": "true",
    className: im,
    children: "|",
  });
}
function lm(t) {
  return (0, y.jsx)("footer", {
    className: (0, sm.default)($d, t.className, !zo.logged_in && Zd),
    children: (0, y.jsxs)("div", {
      className: Kd,
      children: [
        (0, y.jsx)("hr", {}),
        (0, y.jsxs)("div", {
          className: em,
          children: [
            (0, y.jsx)(x, {
              className: om,
              to: "https://www.valvesoftware.com",
              openInNewWindow: !0,
              children: (0, y.jsx)("img", {
                src: mt(Jd),
                alt: "Valve Software",
              }),
            }),
            (0, y.jsxs)("div", {
              className: tm,
              children: [
                (0, y.jsx)("div", {
                  children: be.Localize(
                    "#footer_legal_notice",
                    new Date().getFullYear(),
                  ),
                }),
                (0, y.jsxs)("div", {
                  children: [
                    be.Localize("#footer_vat_included"),
                    "  ",
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "privacy_agreement/",
                      children: be.Localize("#footer_privacy_policy"),
                    }),
                    (0, y.jsx)(ze, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "legal/",
                      children: be.Localize("#footer_legal"),
                    }),
                    (0, y.jsx)(ze, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "subscriber_agreement/",
                      children: be.Localize("#footer_ssa"),
                    }),
                    (0, y.jsx)(ze, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "steam_refunds/",
                      children: be.Localize("#footer_refunds"),
                    }),
                    (0, y.jsx)(ze, {}),
                    (0, y.jsx)(x, {
                      openInNewWindow: !0,
                      to: R.STORE_BASE_URL + "account/cookiepreferences/",
                      children: be.Localize("#footer_cookies"),
                    }),
                  ],
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className: nm,
              children: (0, y.jsx)("img", {
                src: mt(Qd),
                alt: "Valve Software",
              }),
            }),
          ],
        }),
        ko() &&
          (0, y.jsx)("div", {
            className: rm,
            children: (0, y.jsx)("button", {
              onClick: Ru,
              children: W.Localize("#global_menu_view_mobile_website"),
            }),
          }),
        (0, y.jsx)("hr", {}),
        (0, y.jsxs)("div", {
          className: am,
          children: [
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: "https://www.valvesoftware.com/about",
              children: be.Localize("#footer_about_valve"),
            }),
            (0, y.jsx)(ze, {}),
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: "http://www.valvesoftware.com",
              children: be.Localize("#footer_jobs"),
            }),
            (0, y.jsx)(ze, {}),
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: "http://www.steampowered.com/steamworks/",
              children: be.Localize("#footer_steamworks"),
            }),
            (0, y.jsx)(ze, {}),
            (0, y.jsx)(x, {
              openInNewWindow: !0,
              to: R.PARTNER_BASE_URL + "steamdirect",
              children: be.Localize("#footer_steam_distribution"),
            }),
            (0, y.jsx)(ze, {}),
            (0, y.jsx)(x, {
              external: !0,
              to: R.HELP_BASE_URL + ho().strISOCode + "/",
              children: be.Localize("#footer_nav_help_support"),
            }),
            (0, y.jsx)(ze, {}),
            R.COUNTRY === "US" &&
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(x, {
                    snr: !0,
                    external: !0,
                    to: R.STORE_BASE_URL + "hardware_recycling/",
                    children: be.Localize("#footer_recycling"),
                  }),
                  (0, y.jsx)(ze, {}),
                ],
              }),
            !Ke(R.EREALM) &&
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(x, {
                    snr: !0,
                    external: !0,
                    to: R.STORE_BASE_URL + "digitalgiftcards/",
                    children: be.Localize("#footer_walletcode"),
                  }),
                  (0, y.jsx)(ze, {}),
                  (0, y.jsxs)(x, {
                    openInNewWindow: !0,
                    to: "http://www.facebook.com/Steam",
                    children: [
                      (0, y.jsx)("img", {
                        src: mt(Yd),
                        alt: "Facebook",
                        className: Ua,
                      }),
                      " Steam",
                    ],
                  }),
                  (0, y.jsx)(ze, {}),
                  (0, y.jsxs)(x, {
                    openInNewWindow: !0,
                    to: "http://twitter.com/steam",
                    children: [
                      (0, y.jsx)("img", {
                        src: mt(Xd),
                        alt: "X",
                        className: Ua,
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
var $e = {
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
var cm = "qxuaSNtrNvE-";
var um = "v2uRRqcZpzM-";
var xn = "_-4fVuiRLPho-";
var pm = "ntJcAB2O7Fk-";
var dm = "egWCUcRU2LI-";
var mm = "CKr-BZNYbas-";
var _o = u(M());
var _m = "_5de1w948geo-";
var gm = "khWjubQ0dGo-";
var fm = "_5f3k46d-01g-";
var Tt = u(g(), 1);
function bm() {
  return (0, Tt.jsxs)("form", {
    method: "GET",
    action: `${R.STORE_BASE_URL}search`,
    className: _m,
    children: [
      (0, Tt.jsx)("input", {
        className: gm,
        name: "q",
        placeholder: bt.Localize("#Menu_SearchPlaceholder"),
      }),
      (0, Tt.jsx)("button", {
        className: fm,
        type: "submit",
        children: (0, Tt.jsx)(db, {}),
      }),
    ],
  });
}
function db(t) {
  return (0, Tt.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 19 20",
    fill: "none",
    ...t,
    children: (0, Tt.jsx)("g", {
      children: (0, Tt.jsx)("path", {
        fill: "currentColor",
        d: "M14.5382 13.1495C15.5866 11.6421 16.0327 9.7968 15.7887 7.97691C15.5447 6.15702 14.6282 4.4944 13.2197 3.31636C11.8113 2.13833 10.0128 1.53023 8.17847 1.61178C6.34411 1.69333 4.60673 2.45862 3.30835 3.75699C2.00998 5.05536 1.24469 6.79275 1.16314 8.62711C1.08159 10.4615 1.68969 12.2599 2.86772 13.6684C4.04576 15.0768 5.70838 15.9933 7.52827 16.2373C9.34816 16.4813 11.1935 16.0352 12.7009 14.9868L15.987 18.2781L16.1759 18.0891L17.6562 16.6088L17.8452 16.4198L14.5382 13.1495ZM8.5015 13.6745C7.56711 13.6745 6.65371 13.3974 5.87679 12.8783C5.09988 12.3592 4.49435 11.6213 4.13678 10.7581C3.7792 9.8948 3.68564 8.9449 3.86793 8.02846C4.05022 7.11203 4.50017 6.27023 5.16088 5.60952C5.82159 4.94881 6.66339 4.49886 7.57982 4.31657C8.49626 4.13428 9.44616 4.22784 10.3094 4.58541C11.1727 4.94299 11.9105 5.54852 12.4296 6.32543C12.9488 7.10235 13.2258 8.01575 13.2258 8.95014C13.2258 10.2031 12.7281 11.4048 11.8421 12.2907C10.9561 13.1767 9.75447 13.6745 8.5015 13.6745Z",
      }),
    }),
  });
}
var Dm = u(Et());
var wm = u(kt(), 1);
var hm = "DkDkgW5s5IY-";
var vm = "_7xtK0r5UTx8-";
var Cm = "_98YR25-xVdk-";
var Rm = "auILN5pfzL4-";
var Pm = "y-9ESlli0eo-";
var Sm = "F9DAqlcbnFU-";
var ne = u(g(), 1);
function Mm(t) {
  let { refPage: e, closePopover: o } = t;
  return (0, ne.jsxs)(ne.Fragment, {
    children: [
      (0, ne.jsx)("div", {
        className: hm,
        children: (0, ne.jsxs)("div", {
          className: vm,
          children: [(0, ne.jsx)(gb, {}), (0, ne.jsx)(fb, {})],
        }),
      }),
      (0, ne.jsx)(_b, { refPage: e, closePopover: o }),
    ],
  });
}
function _b(t) {
  let { refPage: e, closePopover: o } = t;
  return wm.createPortal(
    (0, ne.jsx)("div", { className: Cm, onClick: o }),
    e.current,
  );
}
function gb() {
  return (0, ne.jsxs)("div", {
    className: Rm,
    children: [
      (0, ne.jsx)(mo, {
        href: R.STORE_BASE_URL,
        children: Ft("#Menu_Popover_StoreHome"),
      }),
      (0, ne.jsx)(mo, {
        href: `${R.STORE_BASE_URL}genre/Free%20to%20Play/`,
        children: Ft("#Menu_Popover_FreeToPlay"),
      }),
      (0, ne.jsx)(mo, {
        href: `${R.STORE_BASE_URL}charts/`,
        children: Ft("#Menu_Popover_SteamCharts"),
      }),
      (0, ne.jsx)(mo, {
        href: `${R.STORE_BASE_URL}points/`,
        children: Ft("#Menu_Popover_PointsShop"),
      }),
      (0, ne.jsx)(mo, {
        href: `${R.STORE_BASE_URL}digitalgiftcards/`,
        children: Ft("#Menu_Popover_GiftCards"),
      }),
      (0, ne.jsx)(mo, {
        href: `${R.STORE_BASE_URL}news/`,
        children: Ft("#Menu_Popover_NewsAndUpdates"),
      }),
      (0, ne.jsx)(mo, {
        href: `${R.STORE_BASE_URL}account/preferences/`,
        children: Ft("#Menu_Popover_Preferences"),
      }),
    ],
  });
}
function mo(t) {
  let { href: e, children: o } = t;
  return (0, ne.jsx)("a", { href: e, className: Pm, children: o });
}
function fb() {
  return (0, ne.jsx)("div", { className: Sm });
}
var ym = u(M());
var A = u(g()),
  Tm = _o.memo(function (e) {
    let { refPage: o } = e;
    return (0, A.jsx)("div", {
      className: cm,
      children: (0, A.jsx)(bb, { refPage: o }),
    });
  });
function bb(t) {
  let { refPage: e } = t,
    o = _o.useRef(null),
    n = _o.useRef(null),
    [r, i, a] = is();
  return (
    (0, ym.useEffect)(() => {
      let s = o.current,
        l = e.current;
      return (
        l.style.setProperty(
          "--store-menu-floating-height",
          `${s.clientHeight}px`,
        ),
        () => {
          l?.style.removeProperty("--store-menu-floating-height");
        }
      );
    }, [e]),
    (0, A.jsxs)(A.Fragment, {
      children: [
        (0, A.jsxs)("div", {
          className: um,
          ref: o,
          children: [
            (0, A.jsx)(hb, { onClick: r ? a : i }),
            (0, A.jsx)(Ir, {}),
            (0, A.jsx)(Wa, {
              strURL: `${R.STORE_BASE_URL}charts/topselling/`,
              children: bt.Localize("#Menu_TopSellers"),
            }),
            (0, A.jsx)(Ir, {}),
            (0, A.jsx)(Wa, {
              strURL: `${R.STORE_BASE_URL}explore/new/`,
              children: bt.Localize("#Menu_NewReleases"),
            }),
            (0, A.jsx)(Ir, {}),
            (0, A.jsx)(Wa, {
              strURL: `${R.STORE_BASE_URL}specials/`,
              children: bt.Localize("#Menu_OnSale"),
            }),
            (0, A.jsx)(bm, {}),
            (0, A.jsx)(vb, {}),
            (0, A.jsx)(Ir, {}),
            (0, A.jsx)(Cb, {}),
          ],
        }),
        r && (0, A.jsx)(Mm, { refPage: t.refPage, closePopover: a }),
      ],
    })
  );
}
function Ir() {
  return (0, A.jsx)("div", { className: mm });
}
function hb(t) {
  let { onClick: e } = t;
  return (0, A.jsx)(A.Fragment, {
    children: (0, A.jsxs)(vo, {
      className: xn,
      onClick: e,
      children: [(0, A.jsx)(Rb, {}), " ", bt.Localize("#Menu_OpenFlyout")],
    }),
  });
}
function Wa(t) {
  let { strURL: e, children: o } = t;
  return (0, A.jsx)("a", {
    className: (0, Dm.default)(xn, dm),
    href: e,
    children: o,
  });
}
function vb() {
  return (0, A.jsxs)("a", {
    className: xn,
    href: `${R.STORE_BASE_URL}wishlist/`,
    children: [
      (0, A.jsx)(Pb, {}),
      bt.Localize("#Menu_Wishlist"),
      " ",
      (0, A.jsx)(km, { children: "5" }),
    ],
  });
}
function km(t) {
  return (0, A.jsx)("span", { className: pm, children: t.children });
}
function Cb() {
  return (0, A.jsxs)("a", {
    className: xn,
    href: `${R.STORE_BASE_URL}cart/`,
    children: [
      (0, A.jsx)(Sb, {}),
      bt.Localize("#Menu_Cart"),
      " ",
      (0, A.jsx)(km, { children: "2" }),
    ],
  });
}
function Rb(t) {
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
function Pb(t) {
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
function Sb(t) {
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
var Am = u(M(), 1),
  z = u(g(), 1),
  wb = Ds({ Component: Mb });
function Mb({ children: t }) {
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
    } = wb.useLoaderData(),
    p = (0, Am.useRef)(null),
    d = s.length > 0;
  return (
    R.IN_GAMEPADUI && (window.bSupportsGamepadUI = !0),
    (0, z.jsx)(Db, {
      strWebAPIToken: e,
      steamid: r,
      storeBrowseContext: i,
      children: (0, z.jsxs)("html", {
        lang: ho().strISOCode,
        className: (0, Fr.default)($e.Root, vu()),
        children: [
          (0, z.jsx)("head", { children: (0, z.jsx)(Za, {}) }),
          (0, z.jsx)("body", {
            className: (0, Fr.default)($e.StoreBody, d && "gamepadui"),
            children: (0, z.jsx)(Ps, {
              navID: "StoreTemplate",
              disabledRoot: !R.IN_GAMEPADUI,
              children: (0, z.jsx)("div", {
                className: (0, Fr.default)(
                  $e.StoreBodyContainer,
                  c && $e.Scrollable,
                ),
                children: (0, z.jsx)(Gn, {
                  children: (0, z.jsxs)(qd, {
                    children: [
                      a &&
                        (0, z.jsx)(tp, {
                          navContent: o.navContent,
                          globalActions: o.globalActions,
                          notifications: o.notifications,
                          userDetails: n,
                          changeLanguagePath: "/account/setlanguage/",
                          cartInResponsiveMenu: !0,
                          className: $e.Header,
                          children: (0, z.jsxs)("div", {
                            className: $e.InternalOptions,
                            children: [
                              l && (0, z.jsx)(ip, {}),
                              (0, z.jsx)(pl, { buttonClassName: $e.Text }),
                            ],
                          }),
                        }),
                      cl() && (0, z.jsx)(Tm, { refPage: p }),
                      (0, z.jsxs)("section", {
                        className: $e.StoreContent,
                        ref: p,
                        children: [
                          (0, z.jsx)("div", { className: $e.LoadingIndicator }),
                          (0, z.jsx)(ml, { gamepadUiTabs: s }),
                          (0, z.jsx)(Ql, {}),
                          (0, z.jsx)(Ka, { children: t }),
                        ],
                      }),
                      !R.IN_GAMEPADUI &&
                        (0, z.jsx)(lm, { className: $e.Footer }),
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
function Db(t) {
  let { strWebAPIToken: e, steamid: o, storeBrowseContext: n, children: r } = t;
  return (0, z.jsx)(ks, {
    IN_GAMEPADUI: R.IN_GAMEPADUI,
    children: (0, z.jsx)(Kl, {
      children: (0, z.jsx)(up, {
        strWebAPIToken: e,
        steamid: o,
        children: (0, z.jsx)(dp, {
          children: (0, z.jsx)(il, {
            context: n,
            msDelayBatch: 250,
            children: r,
          }),
        }),
      }),
    }),
  });
}
export { wb as route };
