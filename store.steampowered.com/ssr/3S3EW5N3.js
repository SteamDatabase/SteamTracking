const CLSTAMP = 9459120;

import {
  A as Vs,
  B as Gs,
  C as Wr,
  D as zs,
  E as js,
  F as qs,
  G as Hr,
  H as zo,
  I as zm,
  J as Fn,
  K as Vr,
  N as Ys,
  O as Xs,
  P as Qs,
  Q as $s,
  a as Ls,
  b as xt,
  c as Ur,
  h as Is,
  i as go,
  l as Fs,
  m as Ns,
  n as Os,
  s as Us,
  w as Ws,
  x as In,
  y as Go,
  z as fo,
} from "./chunk-4R45CHFO.js";
import { a as h, c as pe } from "./chunk-MAUG33VO.js";
import { a as Vo } from "./chunk-NIGFH3DW.js";
import {
  a as _t,
  d as Cs,
  i as gt,
  u as x,
  v as Ms,
  x as Ds,
} from "./chunk-WUNN3NDO.js";
import { a as Vm } from "./chunk-HLESM4XE.js";
import { b as _o, d as Zs } from "./chunk-JWAWZ7CO.js";
import "./chunk-XNTN7IU5.js";
import {
  A as Js,
  a as ys,
  b as Ts,
  c as Ho,
  d as kn,
  e as An,
  f as ft,
  g as xn,
  h as En,
  i as ks,
} from "./chunk-IO5WS72B.js";
import "./chunk-WEVFHWST.js";
import {
  a as Ze,
  b as A,
  c as Ln,
  d as Bn,
  g as el,
  h as Nn,
  i as bo,
  j as ho,
  l as tl,
  n as ol,
} from "./chunk-PIHEGH3M.js";
import { g as Bs } from "./chunk-EMGR5DRS.js";
import { a as Hs } from "./chunk-RBKAJYH5.js";
import { a as Es } from "./chunk-AZ7X4AZ2.js";
import "./chunk-SBSTWHDW.js";
import { i as Ks } from "./chunk-TB32KNX3.js";
import "./chunk-QU7R77WY.js";
import {
  F as As,
  G as xs,
  a as Gm,
  b as R,
  c as P,
  d as $,
  e as J,
  f as Z,
  g as K,
  h as ee,
  i as te,
  o as Ya,
  r as Er,
  t as Lr,
  u as Me,
} from "./chunk-T6WVOON4.js";
import {
  a as Rs,
  b as Ps,
  c as Ke,
  e as Ss,
  f as ws,
} from "./chunk-LW37M63U.js";
import "./chunk-WA5EU625.js";
import { a as Wt } from "./chunk-O7H4SLWJ.js";
import { a as qa } from "./chunk-LOOERVR7.js";
import { a as fe } from "./chunk-37LHL3W6.js";
import {
  A as as,
  B as ss,
  C as ls,
  E as ze,
  F as Wo,
  G as cs,
  H as us,
  I as ps,
  K as Or,
  L as ds,
  M as ms,
  O as _s,
  P as gs,
  R as fs,
  T as At,
  U as Tn,
  W as mo,
  X as bs,
  a as Ht,
  aa as hs,
  b as De,
  ba as U,
  c as Dn,
  d as Xa,
  e as Br,
  f as Qa,
  g as yt,
  h as Ir,
  i as $a,
  j as Fr,
  k as Tt,
  l as Ja,
  m as ye,
  n as Ka,
  o as yn,
  p as es,
  q as ts,
  s as os,
  v as Nr,
  w as ns,
  x as rs,
  y as is,
  z as kt,
} from "./chunk-6N5ZMAQM.js";
import { a as Vt } from "./chunk-GJE55LEV.js";
import { d as Za } from "./chunk-UGG4CGTN.js";
import { a as ue } from "./chunk-W2SL7MEF.js";
import { a as vs } from "./chunk-3CAS47CD.js";
import {
  a as wn,
  c as Oo,
  d as po,
  p as za,
  q as ja,
} from "./chunk-SSJ7CYK5.js";
import "./chunk-Y7RX73SD.js";
import { b as uo, c as Va } from "./chunk-SYAE5ZSF.js";
import {
  d as Ga,
  g as Mn,
  i as Uo,
  m as Je,
  q as _,
} from "./chunk-426E7PHQ.js";
import {
  a as co,
  b as Sn,
  c as Ha,
  g as Be,
  i as mt,
  j as w,
  k as No,
  l as M,
  m as f,
} from "./chunk-I4YNAXHV.js";
import { d as u, e as d, f as Wa } from "./chunk-RJVNLONQ.js";
function nl() {
  return location.pathname;
}
function On() {
  return location.href;
}
function rl(t) {
  return t == 1 || t == 2 || t == 13;
}
var Un = u(M(), 1);
var Gr = u(f(), 1),
  jm = Un.default.lazy(() => import("./metrics-PMWFYLRK.js"));
function il(t) {
  let e = ja();
  return e.metrics
    ? (0, Gr.jsx)(Un.Suspense, {
        children: (0, Gr.jsx)(jm, { metrics: e.metrics, ...t }),
      })
    : null;
}
var al = u(Vt(), 1);
var jo = {
  HeaderContainer: "NS66-vzC3B4-",
  PillTabs: "HfUir0ARlEg-",
  PillTabItem: "_6YKIMRZJgjI-",
  Active: "cVEuwqCXKqk-",
};
var Wn = u(f(), 1);
function sl(t) {
  let { gamepadUiTabs: e } = t;
  if (e.length === 0) return null;
  let o = On(),
    n = [...e]
      .sort((r, i) => i.href.length - r.href.length)
      .find((r) => o.startsWith(r.href));
  return (0, Wn.jsx)("div", {
    className: jo.HeaderContainer,
    children: (0, Wn.jsx)("div", {
      className: jo.PillTabs,
      children: e.map((r) =>
        (0, Wn.jsx)(
          A,
          {
            gamepadFocusable: !0,
            noFocusRing: !0,
            className: (0, al.default)(
              jo.PillTabItem,
              r === n && jo.Active,
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
var Hn = u(M());
var ll = "D6LHFgi1JYw-";
var cl = "-ygkyFbonHM-";
var ul = "-ocPE8koGWA-";
var pl = "wScBjl6G2E8-";
var zr = "J8QB0JMqyaM-";
var dl = "-mBLWqp7JFk-";
var ml = "./cookies_brazilian-K4WP2HCA.json";
var _l = "./cookies_bulgarian-3F25L7AA.json";
var gl = "./cookies_czech-WZ2UGHAA.json";
var fl = "./cookies_danish-UON7TKDA.json";
var bl = "./cookies_dutch-GCBILAAA.json";
var hl = "./cookies_english-FDTNVUAA.json";
var vl = "./cookies_finnish-ZUSYHYAA.json";
var Cl = "./cookies_french-NATP6HBA.json";
var Rl = "./cookies_german-5QBUI7CA.json";
var Pl = "./cookies_greek-AWKYX4DA.json";
var Sl = "./cookies_hungarian-7N6TKDDA.json";
var wl = "./cookies_indonesian-TTEY42CA.json";
var Ml = "./cookies_italian-YNFQT3DA.json";
var Dl = "./cookies_japanese-XFKOMEAA.json";
var yl = "./cookies_koreana-Z2MV63BA.json";
var Tl = "./cookies_latam-KMOOIBBA.json";
var kl = "./cookies_norwegian-NQ26SHAA.json";
var Al = "./cookies_polish-535OIIBA.json";
var xl = "./cookies_portuguese-UMJSLPBA.json";
var El = "./cookies_romanian-JBZRLJBA.json";
var Ll = "./cookies_russian-KMFNLJDA.json";
var Bl = "./cookies_schinese-4CG5QJAA.json";
var Il = "./cookies_spanish-ATUIC6DA.json";
var Fl = "./cookies_swedish-4LF6D6AA.json";
var Nl = "./cookies_tchinese-4CGDFUBA.json";
var Ol = "./cookies_thai-UBSW2GCA.json";
var Ul = "./cookies_turkish-DHSZCYAA.json";
var Wl = "./cookies_ukrainian-WH35XMDA.json";
var Hl = "./cookies_vietnamese-VG3ISECA.json";
var N = {};
N.brazilian = ml;
N.bulgarian = _l;
N.czech = gl;
N.danish = fl;
N.dutch = bl;
N.english = hl;
N.finnish = vl;
N.french = Cl;
N.german = Rl;
N.greek = Pl;
N.hungarian = Sl;
N.indonesian = wl;
N.italian = Ml;
N.japanese = Dl;
N.koreana = yl;
N.latam = Tl;
N.norwegian = kl;
N.polish = Al;
N.portuguese = xl;
N.romanian = El;
N.russian = Ll;
N.schinese = Bl;
N.spanish = Il;
N.swedish = Fl;
N.tchinese = Nl;
N.thai = Ol;
N.turkish = Ul;
N.ukrainian = Wl;
N.vietnamese = Hl;
async function jr(t) {
  if (N[t]) return (await fetch(new URL(N[t], import.meta.url))).json();
}
var qo = uo(jr);
var Ie = u(f());
async function Vl(t) {
  let e = w.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
    o = new FormData();
  o.set("bAllow", t.toString()), o.set("sessionId", ft(Ts));
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
function P_() {
  let t = (0, Hn.useRef)(null);
  return (
    (0, Hn.useEffect)(() => {
      let e = setTimeout(() => {
        t.current?.show();
      }, 4e3);
      return () => {
        clearTimeout(e);
      };
    }, []),
    (0, Ie.jsxs)("dialog", {
      className: ll,
      ref: t,
      children: [
        (0, Ie.jsxs)("div", {
          className: cl,
          children: [
            (0, Ie.jsx)("div", {
              className: zr,
              children: qo.Localize("#CookiePrefPopup_Title"),
            }),
            (0, Ie.jsx)("div", {
              className: zr,
              children: wn(
                qo.Localize("#CookiePrefPopup_Desc"),
                (0, Ie.jsx)("a", {
                  href: w.STORE_BASE_URL + "account/cookiepreferences",
                }),
                (0, Ie.jsx)("a", {
                  href: w.STORE_BASE_URL + "privacy_agreement",
                }),
              ),
            }),
          ],
        }),
        (0, Ie.jsxs)("div", {
          className: dl,
          children: [
            (0, Ie.jsx)("button", {
              className: ul,
              onClick: async () => {
                await Vl(1), t.current?.close();
              },
              children: qo.Localize("#CookiePrefPopup_AcceptAll"),
            }),
            (0, Ie.jsx)("button", {
              className: pl,
              onClick: async () => {
                await Vl(0), t.current?.close();
              },
              children: qo.Localize("#CookiePrefPopup_RejectAll"),
            }),
          ],
        }),
      ],
    })
  );
}
function Gl() {
  let t = ks();
  return t && t.preference_state != 4 ? null : (0, Ie.jsx)(P_, {});
}
var Fe = u(M());
var Yo = "GamepadInput";
var S_ = "Checkout",
  w_ = "PinnedView",
  Vn = class {
    PostMessage(e) {}
    RegisterForMessage(e) {}
  },
  Xo = class {
    m_fnCallback = void 0;
    constructor() {
      SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
    }
    RegisterForMessage(e) {
      this.m_fnCallback = e;
    }
    PostMessage(e) {
      let o = JSON.stringify(e);
      SteamClient.BrowserView.PostMessageToParent(Yo, o);
    }
    OnMessage(e, o) {
      if (e == Yo) {
        let n = JSON.parse(o);
        this.m_fnCallback(n);
      } else if (e == S_) {
        let n = JSON.parse(o);
        if (n.action == "paypal_success")
          try {
            window.OnPayPalSuccess(n.transid);
          } catch {}
        else if (n.action == "paypal_cancel")
          try {
            window.OnPayPalCancel(n.transid);
          } catch {}
      } else if (e == w_) {
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
d([_], Xo.prototype, "OnMessage", 1);
var Qo = class {
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
    this.m_postWindow.postMessage({ gamepadMessage: Yo, args: o }, "*");
  }
  OnMessage(e) {
    let o = e?.data;
    if (o && o.gamepadMessage == Yo && o.args) {
      let n = JSON.parse(o.args);
      this.m_fnCallback(n);
    }
  }
};
d([_], Qo.prototype, "OnMessage", 1);
var Gt = class {
  m_NavigationController;
  m_postMessage;
  m_bIsGamepadInputExternallyControlled = !1;
  constructor(e) {
    if (((this.m_NavigationController = e), M_()))
      (this.m_bIsGamepadInputExternallyControlled = !0),
        (this.m_postMessage = new Xo()),
        this.m_NavigationController.UpdateDefaultSourceToGamepad();
    else {
      let o = window.top;
      o && o != window.self
        ? ((this.m_bIsGamepadInputExternallyControlled = !0),
          (this.m_postMessage = new Qo(o)))
        : ((this.m_bIsGamepadInputExternallyControlled = !1),
          (this.m_postMessage = new Vn()));
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
d([_], Gt.prototype, "OnFocusChanged", 1),
  d([_], Gt.prototype, "OnMessage", 1),
  d([_], Gt.prototype, "PostPageUnloading", 1);
function M_() {
  return (
    Wo("BrowserView.RegisterForMessageFromParent") &&
    Wo("BrowserView.PostMessageToParent")
  );
}
var zl = [
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
  $o = class extends kt {
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
        for (let a = 0; a < zl.length; a++) {
          let s = zl[a],
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
d([_], $o.prototype, "PollGamepads", 1);
var zt = class extends kt {
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
    return Be.PLATFORM === "linux" && e.key.length > 1
      ? e.key || e.code
      : e.code || e.key;
  }
  BShouldSwallowEventForTextInputWorkaround(e) {
    if (
      !(
        Ka(e.target) &&
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
d([_], zt.prototype, "OnKeyDown", 1),
  d([_], zt.prototype, "OnKeyUp", 1),
  d([_], zt.prototype, "Reset", 1);
var bt = class extends kt {
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
d([_], bt.prototype, "TranslateKey", 1),
  d([_], bt.prototype, "OnMouseDown", 1),
  d([_], bt.prototype, "OnMouseUp", 1),
  d([_], bt.prototype, "OnMouseMove", 1),
  d([_], bt.prototype, "Reset", 1);
var vo = class extends kt {
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
d([_], vo.prototype, "OnTouchStart", 1), d([_], vo.prototype, "OnTouchEnd", 1);
var Xr = "VirtualKeyboardMessage";
function ql(t) {
  return t && t.type === Xr;
}
var ht = class {
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
    e == Xr && this.InternalDispatchMessage(JSON.parse(o));
  }
  OnMessage(e) {
    this.InternalDispatchMessage(e.data);
  }
  InternalDispatchMessage(e) {
    if (ql(e))
      switch (e.message) {
        case "OnEnterKeyPress":
          break;
      }
  }
  SendMessage(e) {
    let o = { type: "VirtualKeyboardMessage", ...e };
    Wo("BrowserView.PostMessageToParent")
      ? SteamClient.BrowserView.PostMessageToParent(o.type, JSON.stringify(o))
      : this.m_ownerWindow &&
        (Mn(
          this.m_ownerWindow.parent &&
            this.m_ownerWindow.parent != this.m_ownerWindow,
          "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
        ),
        this.m_ownerWindow.parent.postMessage(o, "*"));
  }
};
d([_], ht.prototype, "ShowVirtualKeyboard", 1),
  d([_], ht.prototype, "ShowModalKeyboard", 1),
  d([_], ht.prototype, "HideVirtualKeyboard", 1),
  d([_], ht.prototype, "OnBrowserViewMessage", 1),
  d([_], ht.prototype, "OnMessage", 1);
var Yr = class {
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
    if (e == Xr) {
      let r = JSON.parse(o);
      if (ql(r))
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
d([_], Yr.prototype, "OnMessage", 1);
var vt = u(f());
function Yl(t) {
  let [e] = Fe.useState(() => new cs()),
    [o, n] = Fe.useState(),
    [r] = Fe.useState(() => new ht()),
    [i, a] = Fe.useState(void 0),
    s = Ke();
  return (
    Fe.useEffect(() => {
      if (s && !o) {
        let p = new Gt(e);
        n(p), a(p.BIsGamepadInputExternallyControlled());
      }
    }, [s, o, e]),
    Fe.useEffect(() => {
      if (s) return r.Init(window);
    }, [s, r]),
    (0, vt.jsxs)(ps, {
      controller: e,
      children: [
        i === !1 && s === !0 && (0, vt.jsx)(y_, {}),
        (i === !0 || s === !0) && (0, vt.jsx)(T_, {}),
        s && (0, vt.jsx)(k_, {}),
        (0, vt.jsxs)(ds, {
          ownerWindow: window,
          children: [
            o && (0, vt.jsx)(D_, { bridge: o }),
            (0, vt.jsx)(us, { factory: r, children: t.children }),
          ],
        }),
      ],
    })
  );
}
function D_(t) {
  let { bridge: e } = t,
    o = ms();
  return (
    Fe.useEffect(() => {
      if (!(!o || !e)) return e.RegisterForFocusChanged(o);
    }, [o, e]),
    null
  );
}
function y_() {
  let [t] = Fe.useState(() => new $o());
  return Or(t), null;
}
function Qr(t) {
  let [e, o] = Fe.useState(void 0);
  Fe.useEffect(() => o(new t(window)), [t]), Or(e);
}
function T_() {
  return Qr(zt), null;
}
function k_() {
  return Qr(bt), Qr(vo), null;
}
var Ii = u(Vt(), 1),
  Dp = u(M(), 1);
var jn = u(M()),
  Xl = u(M());
var Co = u(M());
function Gn(t) {
  let [e, o] = (0, Co.useState)(!1);
  return (
    (0, Co.useEffect)(() => {
      (0, Co.startTransition)(() => {
        o(!0);
      });
    }, []),
    e ? t.children : (t.fallback ?? null)
  );
}
var zn = u(f());
function qn(t) {
  let { dynamicImport: e, fallback: o, ...n } = t,
    [r] = (0, jn.useState)(() =>
      Xl.default.lazy(async () => ({ default: await e() })),
    );
  return (0, zn.jsx)(Gn, {
    fallback: o,
    children: (0, zn.jsx)(jn.Suspense, {
      fallback: o,
      children: (0, zn.jsx)(r, { ...n }),
    }),
  });
}
var Ql = "./sharedui_brazilian-UX54NWDA.json";
var $l = "./sharedui_bulgarian-2GPMAHCA.json";
var Jl = "./sharedui_czech-6LLSMWAA.json";
var Zl = "./sharedui_danish-J4L3E7BA.json";
var Kl = "./sharedui_dutch-Z4OMBQAA.json";
var ec = "./sharedui_english-MXUPZOAA.json";
var tc = "./sharedui_finnish-MGAG25BA.json";
var oc = "./sharedui_french-UXBLCUBA.json";
var nc = "./sharedui_german-AV6GUSBA.json";
var rc = "./sharedui_greek-4JWBCPDA.json";
var ic = "./sharedui_hungarian-LALTBTCA.json";
var ac = "./sharedui_indonesian-DYUEDEAA.json";
var sc = "./sharedui_italian-EXVBLYAA.json";
var lc = "./sharedui_japanese-VO2IBHCA.json";
var cc = "./sharedui_korean-MY3GNJBA.json";
var uc = "./sharedui_latam-CJNVFYCA.json";
var pc = "./sharedui_norwegian-2AAQODBA.json";
var dc = "./sharedui_polish-HXUONFCA.json";
var mc = "./sharedui_portuguese-UX54NWDA.json";
var _c = "./sharedui_romanian-BGJWETCA.json";
var gc = "./sharedui_russian-HUAJDKAA.json";
var fc = "./sharedui_schinese-CDKR3BAA.json";
var bc = "./sharedui_spanish-CJNVFYCA.json";
var hc = "./sharedui_swedish-XURNMQCA.json";
var vc = "./sharedui_tchinese-36IA4XCA.json";
var Cc = "./sharedui_thai-XBFZLSBA.json";
var Rc = "./sharedui_turkish-WRVQQCAA.json";
var Pc = "./sharedui_ukrainian-5EYGFJCA.json";
var Sc = "./sharedui_vietnamese-IY6FSOAA.json";
var O = {};
O.brazilian = Ql;
O.bulgarian = $l;
O.czech = Jl;
O.danish = Zl;
O.dutch = Kl;
O.english = ec;
O.finnish = tc;
O.french = oc;
O.german = nc;
O.greek = rc;
O.hungarian = ic;
O.indonesian = ac;
O.italian = sc;
O.japanese = lc;
O.korean = cc;
O.latam = uc;
O.norwegian = pc;
O.polish = dc;
O.portuguese = mc;
O.romanian = _c;
O.russian = gc;
O.schinese = fc;
O.spanish = bc;
O.swedish = hc;
O.tchinese = vc;
O.thai = Cc;
O.turkish = Rc;
O.ukrainian = Pc;
O.vietnamese = Sc;
async function $r(t) {
  if (O[t]) return (await fetch(new URL(O[t], import.meta.url))).json();
}
var wc = uo($r);
var Dc = u(f(), 1);
function Mc(t) {
  let { languages: e } = Va(),
    o = e[0];
  if (o.eSource !== 1) return null;
  let n = e.find((r) => r.strLanguage !== o.strLanguage);
  return n
    ? (0, Dc.jsx)("a", {
        href: nl().replace(o.strISOCode, n.strISOCode),
        className: t.className,
        children: wc.LocalizeInSpecificLang(
          n,
          "#ViewInYourLanguage",
          Es.LocalizeInSpecificLang(n, `#Language_${n.strLanguage}`),
        ),
      })
    : null;
}
var vu = u(Vt(), 1),
  Et = u(M(), 1);
var Ro = u(M(), 1);
var yc = "FbRIoYoNi9g-";
var Tc = "vnGo6vvKWMk-";
var kc = "kCO5XYi3veo-";
var Ac = "Ca4SW9HC3ME-";
var xc = "P0JO-Sl0erw-";
var et = u(f(), 1);
async function Jr(t, e) {
  let o = new FormData();
  o.set("language", t);
  let n = await fetch(e, {
    method: "POST",
    credentials: "same-origin",
    body: o,
  });
  if (!n.ok) throw n;
}
function Ec(t) {
  let {
      open: e,
      menuAction: o,
      changeLanguagePath: n,
      bLoggedIn: r,
      onDismiss: i,
    } = t,
    [a, s] = (0, Ro.useState)(!1),
    l = (0, Ro.useRef)(null);
  (0, Ro.useEffect)(() => {
    e ? l.current?.showModal() : l.current?.close();
  }, [e]);
  async function c(p) {
    s(!0);
    try {
      await Jr(p, n);
    } catch (m) {
      console.error(m), s(!1);
      return;
    }
    r
      ? (location.href = w.STORE_BASE_URL + "account/languagepreferences/")
      : o.href
        ? (location.href = o.href)
        : location.reload();
  }
  return (0, et.jsx)("dialog", {
    ref: l,
    className: yc,
    onMouseDown: (p) => p.target === l.current && i(),
    children: (0, et.jsxs)("div", {
      children: [
        (0, et.jsx)("hr", { className: kc }),
        (0, et.jsxs)("form", {
          method: "dialog",
          className: Tc,
          onSubmit: (p) => c(p.target.elements.namedItem("language")?.value),
          children: [
            (0, et.jsx)("select", {
              disabled: a,
              name: "language",
              onChange: (p) => c(p.target.value),
              defaultValue: po().strLanguage,
              children: t.menuAction.children?.map((p) =>
                (0, et.jsx)(
                  "option",
                  { value: p.action_parameters?.language, children: p.label },
                  p.label,
                ),
              ),
            }),
            (0, et.jsx)("div", {
              className: Ac,
              children: (0, et.jsx)("input", {
                type: "submit",
                value: "OK",
                className: xc,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var Zr = "h3Jy-1Il1os-";
var Lc = "HOrB6lehQpg-";
var Bc = "_7iCcob-JJ4g-";
var Ic = "QYT54GHN-rI-";
var Fc = "_79DIT7RUQ5g-";
var Kr = "Hxi-pnf9Xlw-";
var ei = "TwsehSqoph8-";
var Nc = "cQPGTl-Lp-0-";
var Oc = "rzUmQa-ty1I-";
var ti = "_2CYMhC951F4-";
var Uc = "h8dQ-Uyh4L0-";
var Wc = "NzGUCXVXDcA-";
var Hc = "L09rGTMfR9c-";
var Vc = "./global_header_brazilian-QF2T6MCA.json";
var Gc = "./global_header_bulgarian-FRYAWQDA.json";
var zc = "./global_header_czech-ZHIWGADA.json";
var jc = "./global_header_danish-GTGIGYBA.json";
var qc = "./global_header_dutch-HDK4MSCA.json";
var Yc = "./global_header_english-QERWLJCA.json";
var Xc = "./global_header_finnish-JMO5FZDA.json";
var Qc = "./global_header_french-CJNSG7BA.json";
var $c = "./global_header_german-3CHRXIAA.json";
var Jc = "./global_header_greek-U2VV4XCA.json";
var Zc = "./global_header_hungarian-726J65DA.json";
var Kc = "./global_header_indonesian-B4TLVUBA.json";
var eu = "./global_header_italian-ED6Y5KDA.json";
var tu = "./global_header_japanese-QRY6W7DA.json";
var ou = "./global_header_koreana-HNT7DNDA.json";
var nu = "./global_header_latam-JTAMHMCA.json";
var ru = "./global_header_norwegian-PONCKJAA.json";
var iu = "./global_header_polish-YSLROOBA.json";
var au = "./global_header_portuguese-T2BVTTDA.json";
var su = "./global_header_romanian-SL2I5MDA.json";
var lu = "./global_header_russian-5SGMOOAA.json";
var cu = "./global_header_sc_schinese-QVBLUWAA.json";
var uu = "./global_header_schinese-WAEK2BBA.json";
var pu = "./global_header_spanish-J5UIHOBA.json";
var du = "./global_header_swedish-MTG4WSBA.json";
var mu = "./global_header_tchinese-LOVT6ADA.json";
var _u = "./global_header_thai-Y6GA43AA.json";
var gu = "./global_header_turkish-S3H7YCBA.json";
var fu = "./global_header_ukrainian-OEDO4ADA.json";
var bu = "./global_header_vietnamese-W33LN2DA.json";
var I = {};
I.brazilian = Vc;
I.bulgarian = Gc;
I.czech = zc;
I.danish = jc;
I.dutch = qc;
I.english = Yc;
I.finnish = Xc;
I.french = Qc;
I.german = $c;
I.greek = Jc;
I.hungarian = Zc;
I.indonesian = Kc;
I.italian = eu;
I.japanese = tu;
I.koreana = ou;
I.latam = nu;
I.norwegian = ru;
I.polish = iu;
I.portuguese = au;
I.romanian = su;
I.russian = lu;
I.sc_schinese = cu;
I.schinese = uu;
I.spanish = pu;
I.swedish = du;
I.tchinese = mu;
I.thai = _u;
I.turkish = gu;
I.ukrainian = fu;
I.vietnamese = bu;
async function oi(t) {
  if (I[t]) return (await fetch(new URL(I[t], import.meta.url))).json();
}
var W = uo(oi);
function Yn() {
  let t = document.createElement("form");
  (t.action = "/logout/"),
    (t.method = "POST"),
    document.body.appendChild(t),
    t.submit();
}
var C = u(Gm());
var D = C.Message;
var ni = class t extends D {
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
              country_code: { n: 1, br: R.readString, bw: P.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  ri = class t extends D {
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
            fields: { promotions: { n: 1, c: ii, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  ii = class t extends D {
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
              promotionid: { n: 1, br: R.readUint32, bw: P.writeUint32 },
              promotion_description: {
                n: 2,
                br: R.readString,
                bw: P.writeString,
              },
              minimum_cart_amount: {
                n: 3,
                br: R.readInt64String,
                bw: P.writeInt64String,
              },
              minimum_cart_amount_for_display: {
                n: 4,
                br: R.readInt64String,
                bw: P.writeInt64String,
              },
              discount_amount: {
                n: 5,
                br: R.readInt64String,
                bw: P.writeInt64String,
              },
              currency_code: { n: 6, br: R.readInt32, bw: P.writeInt32 },
              available_use_count: { n: 7, br: R.readInt32, bw: P.writeInt32 },
              promotional_discount_type: {
                n: 8,
                br: R.readInt32,
                bw: P.writeInt32,
              },
              loyalty_reward_id: { n: 9, br: R.readInt32, bw: P.writeInt32 },
              localized_name_token: {
                n: 10,
                br: R.readString,
                bw: P.writeString,
              },
              max_use_count: { n: 11, br: R.readInt32, bw: P.writeInt32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  ai = class t extends D {
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
              has_wallet: { n: 1, br: R.readBool, bw: P.writeBool },
              user_country_code: { n: 2, br: R.readString, bw: P.writeString },
              wallet_country_code: {
                n: 3,
                br: R.readString,
                bw: P.writeString,
              },
              wallet_state: { n: 4, br: R.readString, bw: P.writeString },
              balance: { n: 5, br: R.readInt64String, bw: P.writeInt64String },
              delayed_balance: {
                n: 6,
                br: R.readInt64String,
                bw: P.writeInt64String,
              },
              currency_code: { n: 7, br: R.readInt32, bw: P.writeInt32 },
              time_most_recent_txn: {
                n: 8,
                br: R.readUint32,
                bw: P.writeUint32,
              },
              most_recent_txnid: {
                n: 9,
                br: R.readUint64String,
                bw: P.writeUint64String,
              },
              balance_in_usd: {
                n: 10,
                br: R.readInt64String,
                bw: P.writeInt64String,
              },
              delayed_balance_in_usd: {
                n: 11,
                br: R.readInt64String,
                bw: P.writeInt64String,
              },
              has_wallet_in_other_regions: {
                n: 12,
                br: R.readBool,
                bw: P.writeBool,
              },
              other_regions: {
                n: 13,
                r: !0,
                q: !0,
                br: R.readInt32,
                pbr: R.readPackedInt32,
                bw: P.writeRepeatedInt32,
              },
              formatted_balance: { n: 14, br: R.readString, bw: P.writeString },
              formatted_delayed_balance: {
                n: 15,
                br: R.readString,
                bw: P.writeString,
              },
              delayed_balance_available_min_time: {
                n: 16,
                br: R.readInt32,
                bw: P.writeInt32,
              },
              delayed_balance_available_max_time: {
                n: 17,
                br: R.readInt32,
                bw: P.writeInt32,
              },
              delayed_balance_newest_source: {
                n: 18,
                br: R.readInt32,
                bw: P.writeInt32,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  si = class t extends D {
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
              include_balance_in_usd: { n: 1, br: R.readBool, bw: P.writeBool },
              wallet_region: { n: 2, d: 1, br: R.readInt32, bw: P.writeInt32 },
              include_formatted_balance: {
                n: 3,
                br: R.readBool,
                bw: P.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  li = class t extends D {
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
  ci = class t extends D {
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
              pwid: { n: 1, br: R.readUint32, bw: P.writeUint32 },
              identity_verification: {
                n: 2,
                br: R.readUint32,
                bw: P.writeUint32,
              },
              performed_age_verification: {
                n: 3,
                br: R.readBool,
                bw: P.writeBool,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  ui = class t extends D {
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
            fields: { appid: { n: 1, br: R.readUint32, bw: P.writeUint32 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  pi = class t extends D {
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
  di = class t extends D {
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
                br: R.readFixed64String,
                bw: P.writeFixed64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  mi = class t extends D {
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
            fields: { country: { n: 1, br: R.readString, bw: P.writeString } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  _i = class t extends D {
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
              invite_limit: { n: 1, br: R.readUint32, bw: P.writeUint32 },
              invite_duration: { n: 2, br: R.readUint32, bw: P.writeUint32 },
              invite_note: { n: 3, br: R.readString, bw: P.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  Xn = class t extends D {
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
              invite_token: { n: 1, br: R.readString, bw: P.writeString },
              invite_limit: {
                n: 2,
                br: R.readUint64String,
                bw: P.writeUint64String,
              },
              invite_duration: {
                n: 3,
                br: R.readUint64String,
                bw: P.writeUint64String,
              },
              time_created: { n: 4, br: R.readFixed32, bw: P.writeFixed32 },
              valid: { n: 5, br: R.readBool, bw: P.writeBool },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  gi = class t extends D {
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
  fi = class t extends D {
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
            fields: { tokens: { n: 1, c: Xn, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  bi = class t extends D {
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
                br: R.readFixed64String,
                bw: P.writeFixed64String,
              },
              invite_token: { n: 2, br: R.readString, bw: P.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  hi = class t extends D {
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
              valid: { n: 1, br: R.readBool, bw: P.writeBool },
              steamid: {
                n: 2,
                br: R.readUint64String,
                bw: P.writeUint64String,
              },
              invite_duration: {
                n: 3,
                br: R.readUint64String,
                bw: P.writeUint64String,
              },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  vi = class t extends D {
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
                br: R.readFixed64String,
                bw: P.writeFixed64String,
              },
              invite_token: { n: 2, br: R.readString, bw: P.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  Ci = class t extends D {
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
  Ri = class t extends D {
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
              invite_token: { n: 1, br: R.readString, bw: P.writeString },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
      return "CUserAccount_RevokeFriendInviteToken_Response";
    }
  },
  Si = class t extends D {
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
              compat_tool: { n: 1, br: R.readUint32, bw: P.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  wi = class t extends D {
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
                br: R.readFixed64String,
                bw: P.writeFixed64String,
              },
              client_token: { n: 2, br: R.readBytes, bw: P.writeBytes },
              expiry: { n: 3, br: R.readUint32, bw: P.writeUint32 },
              deviceid: { n: 4, br: R.readUint32, bw: P.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  Di = class t extends D {
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
              result: { n: 1, br: R.readUint32, bw: P.writeUint32 },
              token: { n: 2, c: Mi },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
                br: R.readFixed64String,
                bw: P.writeFixed64String,
              },
              appid: { n: 2, br: R.readUint32, bw: P.writeUint32 },
              device_info: { n: 3, br: R.readString, bw: P.writeString },
              deviceid: { n: 4, br: R.readUint32, bw: P.writeUint32 },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = $(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return Z(t.M(), e, o);
    }
    static fromObject(e) {
      return J(t.M(), e);
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
  Ti;
((m) => {
  function t(g, b) {
    return g.SendMsg(
      "UserAccount.GetAvailableValveDiscountPromotions#1",
      Me(ni, b),
      ri,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  m.GetAvailableValveDiscountPromotions = t;
  function e(g, b) {
    return g.SendMsg("UserAccount.GetClientWalletDetails#1", Me(si, b), ai, {
      ePrivilege: 1,
    });
  }
  m.GetClientWalletDetails = e;
  function o(g, b) {
    return g.SendMsg("UserAccount.GetAccountLinkStatus#1", Me(li, b), ci, {
      ePrivilege: 1,
    });
  }
  m.GetAccountLinkStatus = o;
  function n(g, b) {
    return g.SendMsg("UserAccount.CancelLicenseForApp#1", Me(ui, b), pi, {
      ePrivilege: 1,
    });
  }
  m.CancelLicenseForApp = n;
  function r(g, b) {
    return g.SendMsg("UserAccount.GetUserCountry#1", Me(di, b), mi, {
      ePrivilege: 1,
    });
  }
  m.GetUserCountry = r;
  function i(g, b) {
    return g.SendMsg("UserAccount.CreateFriendInviteToken#1", Me(_i, b), Xn, {
      ePrivilege: 3,
    });
  }
  m.CreateFriendInviteToken = i;
  function a(g, b) {
    return g.SendMsg("UserAccount.GetFriendInviteTokens#1", Me(gi, b), fi, {
      ePrivilege: 1,
    });
  }
  m.GetFriendInviteTokens = a;
  function s(g, b) {
    return g.SendMsg("UserAccount.ViewFriendInviteToken#1", Me(bi, b), hi, {
      ePrivilege: 1,
    });
  }
  m.ViewFriendInviteToken = s;
  function l(g, b) {
    return g.SendMsg("UserAccount.RedeemFriendInviteToken#1", Me(vi, b), Ci, {
      ePrivilege: 1,
    });
  }
  m.RedeemFriendInviteToken = l;
  function c(g, b) {
    return g.SendMsg("UserAccount.RevokeFriendInviteToken#1", Me(Ri, b), Pi, {
      ePrivilege: 1,
    });
  }
  m.RevokeFriendInviteToken = c;
  function p(g, b) {
    return g.SendMsg("UserAccount.RegisterCompatTool#1", Me(Si, b), wi, {
      ePrivilege: 1,
    });
  }
  m.RegisterCompatTool = p;
})((Ti ||= {}));
var Ng;
((e) => {
  function t(o, n) {
    return o.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", Me(yi, n), Di, {
      ePrivilege: 1,
    });
  }
  e.AuthorizeCurrentDevice = t;
})((Ng ||= {}));
function Og() {
  return ["CurrentUserWalletDetails", No.accountid];
}
function Ug(t) {
  return {
    queryKey: Og(),
    queryFn: async () => {
      if (!No.accountid) return;
      let e = w.EREALM === 2;
      return (
        await Ti.GetClientWalletDetails(t, {
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
function Qn() {
  let t = xs();
  return Ga(Ug(t));
}
var j = u(f(), 1);
function Cu(t) {
  let { action: e } = t,
    o = (0, Et.useContext)(Ru),
    n = "span",
    r = {};
  return (
    e.href &&
      ((n = A),
      (r.to = e.href),
      (r.external = !e.ssr),
      e.href.startsWith(w.STORE_BASE_URL) &&
        (r.snr = { feature: "globalheader" })),
    e.action &&
      (e.href || (n = "button"),
      (r.onClick = async function (a) {
        switch ((a.preventDefault(), e.action)) {
          case 1: {
            Yn();
            return;
          }
          case 2: {
            if (e.action_parameters?.language === void 0)
              throw "Missing language";
            try {
              await Jr(e.action_parameters.language, o.changeLanguagePath);
            } catch (s) {
              console.error(s);
              return;
            }
            o.userDetails
              ? (location.href =
                  w.STORE_BASE_URL + "account/languagepreferences/")
              : e.href
                ? (location.href = e.href)
                : location.reload();
            return;
          }
        }
      })),
    (0, j.jsx)(_o, {
      menuTarget: (0, j.jsx)(n, {
        ...r,
        tabIndex: 0,
        className: ei,
        children: wn(e.label, (0, j.jsx)("span", { className: Lc })),
      }),
      direction: "left",
      className: Oc,
      children: e.children?.map((i, a) => (0, j.jsx)(Cu, { action: i }, a)),
    })
  );
}
var Ru = (0, Et.createContext)({});
function hu(t) {
  return (0, j.jsx)(Ru.Provider, {
    value: t,
    children: t.globalActions.map((e, o) =>
      (0, j.jsx)(
        _o,
        {
          direction: "down-left",
          menuTarget: (0, j.jsx)("button", {
            className: Ic,
            children: e.label,
          }),
          className: Nc,
          interactionMode: 1,
          children: e.children?.map((n, r) => (0, j.jsx)(Cu, { action: n }, r)),
        },
        o,
      ),
    ),
  });
}
function Wg() {
  let { data: t } = Qn();
  return (0, j.jsx)("div", { className: Fc, children: t?.formatted_balance });
}
function Pu(t) {
  let { userDetails: e } = t,
    [o, n] = (0, Et.useState)(void 0),
    r = `/login/${o ? `?redir=${encodeURIComponent(o)}` : ""}`;
  return (
    (0, Et.useEffect)(() => {
      n(location.href);
    }, []),
    e
      ? (0, j.jsxs)("div", {
          className: Zr,
          children: [
            (0, j.jsx)("a", {
              className: ti,
              href: w.STORE_BASE_URL + "about/",
              children: W.Localize("#global_menu_install_steam"),
            }),
            t.notifications &&
              (0, j.jsx)("div", {
                className: Wc,
                children: (0, j.jsx)(qn, {
                  dynamicImport: async () =>
                    (await import("./greenenvelope-IAWSTHCR.js")).GreenEnvelope,
                  fallback: (0, j.jsx)("div", { className: Hc }),
                  bResponsiveHeader: !1,
                  notifications: t.notifications,
                }),
              }),
            (0, j.jsxs)("div", {
              className: Kr,
              children: [
                (0, j.jsx)(hu, {
                  userDetails: e,
                  globalActions: t.globalActions,
                  changeLanguagePath: t.changeLanguagePath,
                }),
                (0, j.jsx)(Wg, {}),
              ],
            }),
            (0, j.jsx)("a", {
              className: Bc,
              href: Vo(e),
              children: (0, j.jsx)(Bn, {
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
          className: Zr,
          children: (0, j.jsxs)("div", {
            className: Kr,
            children: [
              (0, j.jsx)("a", {
                className: (0, vu.default)(ti, Uc),
                href: w.STORE_BASE_URL + "about/",
                children: W.Localize("#global_menu_install_steam"),
              }),
              " ",
              (0, j.jsx)("a", {
                href: r,
                className: ei,
                children: W.Localize("#global_menu_login"),
              }),
              "  |  ",
              (0, j.jsx)(hu, {
                userDetails: e,
                globalActions: t.globalActions,
                changeLanguagePath: t.changeLanguagePath,
              }),
            ],
          }),
        })
  );
}
var Su = "eGsI8rO3zfU-";
var wu = "Ca2l5LKN6as-";
var Mu = "ewJx-kmPr-8-";
var Du = "SmaLDT4y0RE-";
var yu = "LyTAF1R-NHw-";
var ki = "_2GKjdN512t4-";
var Tu = "FhcQPauG0Bc-";
var ku = "_40MmWrTStR0-";
var Au = "_5N8HUkyU1sA-";
var Ai = u(Vt(), 1),
  Uu = u(M(), 1);
var xu = "MMrgod6KQlc-";
var Eu = "k0AAbwuFzJQ-";
var Lu = "ofgQne2Wvqg-";
var Bu = "FTufO00UqAw-";
var Iu = "iHkamGVWNgw-";
var Fu = "_9-ylsFqlD1Y-";
var Nu = "_99jWUQL7ajk-";
var Ou = "maI6DbOJuy4-";
var be = u(f(), 1),
  Ct = (0, Uu.forwardRef)(function (e, o) {
    let { item: n, responsive: r, className: i, ...a } = e,
      s = On().startsWith(n.href),
      l = n.label;
    return (
      r && (l = n.label_responsive ?? n.label),
      (0, be.jsx)(be.Fragment, {
        children: (0, be.jsxs)(A, {
          className: (0, Ai.default)(i, n.valveOnly && Nu),
          to: n.href,
          "aria-current": s ? "page" : void 0,
          external: !n.ssr,
          snr: n.href.startsWith(w.STORE_BASE_URL) && {
            feature: "globalheader",
          },
          ref: o,
          ...a,
          children: [
            l,
            n.new &&
              (0, be.jsx)("span", {
                className: Ou,
                children: W.Localize("#m_ext_new"),
              }),
          ],
        }),
      })
    );
  });
function Wu(t) {
  let { navContent: e } = t;
  return (0, be.jsx)(_o, {
    menuTarget: (0, be.jsx)(Ct, { item: e, className: Fu }),
    direction: "right",
    children: e.children?.map((o, n) => (0, be.jsx)(Wu, { navContent: o }, n)),
  });
}
function Hu(t) {
  return (0, be.jsx)("nav", {
    className: xu,
    children: (0, be.jsx)("ul", {
      className: Eu,
      children: t.navContent.map((e, o) =>
        (0, be.jsx)(
          _o,
          {
            menuTarget: (0, be.jsx)(Ct, {
              item: e,
              className: (0, Ai.default)(Lu, e.userContent && Bu),
            }),
            direction: "down",
            className: Iu,
            children: e.children?.map((n, r) =>
              (0, be.jsx)(Wu, { navContent: n }, r),
            ),
          },
          o,
        ),
      ),
    }),
  });
}
var Vu = "/X3MIBOBA.png";
var Gu = "/TYQTXQDA.svg";
var xi = "/5EH3SHCA.svg";
var zu = "/KSEIVHDA.png";
function Po() {
  return ft(Ho) === "desktop";
}
function Yg() {
  return ft(Ho) === "touch";
}
function ju() {
  let t = [];
  return (
    Po() && t.push("force_desktop"),
    Yg() && t.push("responsive touch"),
    t.join(" ")
  );
}
function qu() {
  xn(Ho, "desktop"), "location" in window && location.reload();
}
function Yu() {
  Po() && En(Ho), "location" in window && location.reload();
}
var je = u(Vt(), 1),
  qe = u(M(), 1);
var Xu = "UJ-b28jREN4-";
var Qu = "-ackiz2p900-";
var $u = "dsfHY-n2vRo-";
var Ju = "_7QSpS4Fcxis-";
var Zu = "SMuDlFUQZ7c-";
var Ku = "fbumr489F1M-";
var ep = "_4Irj26b6cAc-";
var tp = "J0hwuL-5qaI-";
var Ei = "vaiPH0LUuOg-";
var Li = "lHc2D8LzCAM-";
var op = "qMsE88Z2WWg-";
var np = "SI1K4dzVIa4-";
var rp = "wQ0CyaaCCZw-";
var ip = "QB99AacwCmk-";
var ap = "_8pHkaq8PPAw-";
var tt = "Ud1IMOOMuOI-";
var sp = "_58A1pqE2uSo-";
var qt = "myYtt3d51V4-";
var lp = "cmJ4ozhx9RE-";
var cp = "_2wGlOytoBKw-";
var up = "_049Kz8GkLto-";
var pp = "qNNahG-7Lqc-";
var dp = "Yp-VG7Zk9AY-";
var mp = "CX4Bz9fkpP4-";
var _p = "mL8bNWbmixg-";
var gp = "fPuSnTPv8Sw-";
var fp = "pHDUu-G3uyI-";
var bp = "do714Zjyklo-";
var hp = "eemuAILDlkQ-";
var vp = "Q-TiFOlMJ8s-";
var Bi = "V29-mSaJz7Q-";
var Cp = "lFK0b3Au9I8-";
var Rp = "eaAkMgON-CQ-";
var Pp = "gLRm-ue6Z7Q-";
var Sp = "RRZn8XwJQEk-";
var v = u(f(), 1);
function Qg(t) {
  return t.private_data?.persona_state === 0
    ? ep
    : t.private_data?.game_id !== void 0
      ? Ku
      : Zu;
}
function $g() {
  let { data: t } = Js();
  return t
    ? (0, v.jsx)("div", {
        className: Ei,
        children: (0, v.jsx)(A, {
          snr: !0,
          external: !0,
          to: w.STORE_BASE_URL + "cart",
          className: Ei,
          children: W.LocalizeReact(
            "#Cart_CountWidget",
            (0, v.jsx)("b", { children: Oo(t) }),
          ),
        }),
      })
    : null;
}
function Jg() {
  let { data: t } = Qn();
  return t?.formatted_balance
    ? (0, v.jsx)("div", {
        className: Li,
        children: (0, v.jsx)(A, {
          snr: !0,
          external: !0,
          to: w.STORE_BASE_URL + "account",
          className: Li,
          children: W.LocalizeReact(
            "#responsive_menu_wallet_balance",
            (0, v.jsx)("b", { children: t.formatted_balance }),
          ),
        }),
      })
    : null;
}
function wp(t) {
  let { navContent: e, children: o, labelAddition: n } = t,
    r = (0, qe.useRef)(null),
    i = (0, qe.useRef)(null),
    a = (0, qe.useRef)(null),
    s = (0, qe.useRef)();
  if (!o && (!e.children || e.children.length === 0))
    return (0, v.jsx)(Ct, { item: e, className: tt, responsive: !0 });
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
    className: ip,
    ref: r,
    onToggle: p,
    children: [
      (0, v.jsxs)("summary", {
        className: tt,
        ref: a,
        children: [
          e.label_responsive ?? e.label,
          " ",
          n,
          " ",
          (0, v.jsx)("div", { className: sp }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: ap,
        ref: i,
        children: [
          e.children?.map((m, g) =>
            (0, v.jsx)(Ct, { item: m, className: lp, responsive: !0 }, g),
          ),
          o,
        ],
      }),
    ],
  });
}
function Zg() {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)("div", {
        className: _p,
        children: [
          (0, v.jsx)(A, {
            snr: !0,
            external: !0,
            to: w.STORE_BASE_URL + "about",
            children: "关于蒸汽平台",
          }),
          "  |  ",
          (0, v.jsx)(A, {
            snr: !0,
            external: !0,
            to: w.STORE_BASE_URL + "steam_refunds",
            children: "退款政策",
          }),
          "  |  ",
          (0, v.jsx)(A, {
            snr: !0,
            external: !0,
            to: w.STORE_BASE_URL + "subscriber_agreement",
            children: "软件许可服务协议",
          }),
          "  |  ",
          (0, v.jsx)("br", {}),
          (0, v.jsx)(A, {
            snr: !0,
            external: !0,
            to: w.STORE_BASE_URL + "privacy_agreement",
            children: "个人信息保护政策",
          }),
          "  |  ",
          (0, v.jsx)(A, {
            snr: !0,
            external: !0,
            to: w.STORE_BASE_URL + "data_outbound",
            children: "个人信息出境告知书",
          }),
          "  |  ",
          (0, v.jsx)("br", {}),
          (0, v.jsx)(A, {
            to: "https://about.steamchina.com/content_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "不良内容举报投诉",
          }),
          "  |  ",
          (0, v.jsx)(A, {
            to: "https://about.steamchina.com/infringement_report.html",
            target: "_blank",
            rel: "noreferrer",
            children: "侵权投诉",
          }),
          "  |  ",
          (0, v.jsx)(A, {
            to: "https://about.steamchina.com/parentguardianship_agreement.html",
            target: "_blank",
            rel: "noreferrer",
            children: "家长监护",
          }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: gp,
        children: [
          (0, v.jsxs)(A, {
            external: !0,
            className: Bi,
            to: "http://qr.weibo.cn/g/7kla92",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微博",
                className: Rp,
                src: `${w.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微博" }),
            ],
          }),
          (0, v.jsxs)(A, {
            external: !0,
            className: Bi,
            to: "http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微信",
                className: Cp,
                src: `${w.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微信" }),
            ],
          }),
        ],
      }),
      (0, v.jsx)("hr", { className: hp }),
      (0, v.jsxs)("div", {
        className: vp,
        children: [
          (0, v.jsx)(A, {
            external: !0,
            to: "https://www.wanmei.com/",
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              className: Pp,
              src: `${w.STORE_CDN_URL}/public/shared/images/footer/pw_logo.svg?v=1`,
              alt: "",
            }),
          }),
          (0, v.jsx)(A, {
            external: !0,
            to: "https://www.valvesoftware.com",
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              className: Sp,
              src: `${w.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: "",
            }),
          }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: fp,
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
            className: bp,
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
function Kg() {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsx)("div", {
        children: (0, v.jsx)("img", {
          src: `${w.STORE_CDN_URL}/public/shared/images/responsive/logo_valve_footer.png`,
          alt: "",
        }),
      }),
      W.Localize("#responsive_footer_copyright"),
      "  ",
      (0, v.jsxs)("span", {
        children: [
          (0, v.jsx)(A, {
            to: w.STORE_BASE_URL + "privacy_agreement/",
            target: "_blank",
            children: W.Localize("#Common_Footer_PrivacyPolicy"),
          }),
          " |  ",
          (0, v.jsx)(A, {
            to: "http://www.valvesoftware.com/legal.htm",
            target: "_blank",
            children: W.Localize("#Common_Footer_Legal"),
          }),
          " |  ",
          (0, v.jsx)(A, {
            to: w.STORE_BASE_URL + "subscriber_agreement/",
            target: "_blank",
            children: W.Localize("#Common_Footer_SSA"),
          }),
          " |  ",
          (0, v.jsx)(A, {
            to: w.STORE_BASE_URL + "steam_refunds/",
            target: "_blank",
            children: W.Localize("#Common_Footer_Refunds"),
          }),
        ],
      }),
    ],
  });
}
function Mp(t) {
  let {
      userDetails: e,
      navContent: o,
      globalActions: n,
      changeLanguagePath: r,
      open: i,
      onDismiss: a,
      cartInResponsiveMenu: s,
    } = t,
    [l, c] = (0, qe.useState)(!1),
    p = (0, qe.useRef)(null),
    m = (0, qe.useRef)();
  (0, qe.useEffect)(() => {
    p.current &&
      (i
        ? (p.current?.showModal(),
          m.current?.cancel(),
          (m.current = p.current.animate(
            { transform: ["translateX(-280px)", "translateX(0)"] },
            { duration: 250, fill: "forwards", easing: "ease-in-out" },
          )))
        : m.current &&
          (m.current?.cancel(),
          (m.current = p.current.animate(
            { transform: ["translateX(0)", "translateX(-280px)"] },
            { duration: 250, fill: "forwards", easing: "ease-in-out" },
          )),
          m.current.addEventListener("finish", () => p.current?.close())));
  }, [i]);
  let g =
    n.find((b) => b.id === "language") ??
    n[0]?.children?.find((b) => b.id === "language");
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)("dialog", {
        className: (0, je.default)(Xu, Ze(w.EREALM) && Qu),
        ref: p,
        onMouseDown: (b) => b.target === p.current && a(),
        children: [
          (0, v.jsxs)("div", {
            className: $u,
            children: [
              !e &&
                (0, v.jsx)(Ct, {
                  className: (0, je.default)(tt),
                  item: {
                    href: "/login/",
                    label: W.Localize("#global_menu_login_caps"),
                  },
                }),
              e &&
                (0, v.jsxs)("div", {
                  className: (0, je.default)(Ju, Qg(e)),
                  children: [
                    (0, v.jsxs)("div", {
                      className: tp,
                      children: [
                        (0, v.jsx)("a", {
                          className: rp,
                          href: Vo(e),
                          children: (0, v.jsx)(Bn, {
                            playerLinkDetails: e,
                            statusPosition: "border",
                            alt: "",
                            role: "presentation",
                            size: "Small",
                            className: np,
                          }),
                        }),
                        " ",
                        (0, v.jsx)("a", {
                          className: op,
                          href: Vo(e),
                          children: e.public_data?.persona_name,
                        }),
                      ],
                    }),
                    s && (0, v.jsx)($g, {}),
                    (0, v.jsx)(Jg, {}),
                  ],
                }),
              t.notifications &&
                (0, v.jsx)(wp, {
                  navContent: { label: "Notifications", href: "" },
                  labelAddition: (0, v.jsxs)("div", {
                    className: (0, je.default)(
                      cp,
                      t.notifications?.unread_count && pp,
                    ),
                    children: [
                      t.notifications.unread_count > 0 &&
                        (0, v.jsx)("span", { className: up }),
                      (0, v.jsx)("span", {
                        className: dp,
                        children: Oo(t.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, v.jsx)(qn, {
                    dynamicImport: async () =>
                      (await import("./greenenvelope-IAWSTHCR.js"))
                        .GreenEnvelope,
                    fallback: (0, v.jsx)("div", {}),
                    bResponsiveHeader: !0,
                    notifications: t.notifications,
                  }),
                }),
              o.map((b, S) => (0, v.jsx)(wp, { navContent: b }, S)),
              (0, v.jsxs)("div", {
                className: "minor_menu_items",
                children: [
                  e &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)(Ct, {
                          className: (0, je.default)(tt, qt),
                          item: {
                            href: w.STORE_BASE_URL + "account",
                            label: W.Localize("#global_menu_account_details"),
                          },
                        }),
                        (0, v.jsx)(Ct, {
                          className: (0, je.default)(tt, qt),
                          item: {
                            href: w.STORE_BASE_URL + "account/preferences",
                            label: W.Localize(
                              "#global_menu_account_preferences",
                            ),
                          },
                        }),
                      ],
                    }),
                  !Ze(w.EREALM) &&
                    (0, v.jsx)(v.Fragment, {
                      children: (0, v.jsx)("button", {
                        className: (0, je.default)(tt, qt),
                        onClick: () => c(!0),
                        children: W.Localize("#global_menu_change_language"),
                      }),
                    }),
                  e &&
                    (0, v.jsx)("button", {
                      className: (0, je.default)(tt, qt),
                      onClick: Yn,
                      children: W.Localize("#global_menu_change_user"),
                    }),
                  !Ze(w.EREALM) &&
                    (0, v.jsx)(Ct, {
                      className: (0, je.default)(tt, qt),
                      item: {
                        href: w.STORE_BASE_URL + "mobile",
                        label: W.Localize("#global_menu_getmobileapp"),
                      },
                    }),
                  !Po() &&
                    (0, v.jsx)("button", {
                      className: (0, je.default)(tt, qt),
                      onClick: qu,
                      children: W.Localize("#global_menu_view_desktop_website"),
                    }),
                ],
              }),
            ],
          }),
          (0, v.jsx)("footer", {
            className: mp,
            children: Ze(w.EREALM) ? (0, v.jsx)(Zg, {}) : (0, v.jsx)(Kg, {}),
          }),
        ],
      }),
      g &&
        (0, v.jsx)(Ec, {
          open: l,
          onDismiss: () => c(!1),
          menuAction: g,
          changeLanguagePath: r,
          bLoggedIn: e != null,
        }),
    ],
  });
}
var re = u(f(), 1);
function yp(t) {
  let [e, o] = (0, Dp.useState)(!1);
  return (0, re.jsxs)(re.Fragment, {
    children: [
      (0, re.jsxs)("header", {
        className: (0, Ii.default)(Su, t.className),
        children: [
          (0, re.jsxs)("div", {
            className: wu,
            children: [
              (0, re.jsx)("a", {
                href: w.STORE_BASE_URL,
                "aria-label": W.Localize("#Aria_Steam_Home_Link"),
                className: ki,
                children: (0, re.jsx)("img", {
                  src: mt(Ze(w.EREALM) ? xi : Gu),
                  alt: W.Localize("#Aria_Steam_Home_Link"),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, re.jsx)(Hu, { navContent: t.navContent }),
              (0, re.jsx)(Pu, {
                globalActions: t.globalActions,
                userDetails: t.userDetails,
                notifications: t.notifications,
                changeLanguagePath: t.changeLanguagePath,
              }),
              t.children,
            ],
          }),
          (0, re.jsxs)("div", {
            className: Mu,
            children: [
              (0, re.jsxs)("button", {
                className: Du,
                onClick: () => o(!0),
                children: [
                  (0, re.jsx)("img", { src: mt(Vu), alt: "", className: yu }),
                  t.notifications?.unread_count &&
                    (0, re.jsx)("div", {
                      className: Tu,
                      children: (0, re.jsx)("div", {
                        className: (0, Ii.default)(ku),
                        children: (0, re.jsx)("span", {
                          className: Au,
                          children: Oo(t.notifications.unread_count ?? 0),
                        }),
                      }),
                    }),
                ],
              }),
              (0, re.jsx)("a", {
                href: w.STORE_BASE_URL,
                "aria-label": W.Localize("#Aria_Steam_Home_Link"),
                className: ki,
                children: (0, re.jsx)("img", {
                  src: mt(Ze(w.EREALM) ? xi : zu),
                  alt: W.Localize("#Aria_Steam_Home_Link"),
                  height: 36,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, re.jsx)(Mp, { ...t, open: e, onDismiss: () => o(!1) }),
    ],
  });
}
var Tp = "y0fX1sHXgbg-";
var kp = "dkzTutiFwB8-";
var Ap = "SMtSKQQ7dWs-";
var Jo = u(f(), 1);
function xp(t) {
  return (0, Jo.jsxs)("span", {
    className: Tp,
    children: [
      (0, Jo.jsx)("span", {
        className: kp,
        children: "You are spoofing another user!",
      }),
      " ",
      (0, Jo.jsx)("span", {
        className: Ap,
        onClick: () => {
          En(An), window.location.reload();
        },
        children: "end spoofing",
      }),
    ],
  });
}
var So = u(M());
var Ip = u(zm(), 1);
function Fi(t) {
  try {
    if (!t || typeof t != "string") return null;
    let e = t.split(".");
    if (e.length !== 3) return null;
    let [o, n] = e,
      r = Lp(o),
      i = Lp(n);
    return !r || !i ? null : { header: JSON.parse(r), body: JSON.parse(i) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function Ep(t) {
  return t ? t.body.exp : 0;
}
function tf(t) {
  return t ? t.body.nbf || t.body.iat : 0;
}
function Bp(t) {
  let e = Ep(t),
    o = tf(t),
    n = 900,
    r = e - o;
  return r < 900 * 1.5 && (n = r <= 60 ? 0 : 60), Ep(t) - n < Date.now() / 1e3;
}
function Lp(t) {
  return atob(t.replace(/-/g, "+").replace(/_/g, "/"));
}
var $n = class {
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
      (this.m_bJWTToken = Fi(o) != null),
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
    let i = ft(An);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new Er();
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
            Bp(Fi(this.m_webApiAccessToken)) &&
              ((this.m_refreshAccessTokenPromise =
                this.m_fnRequestNewAccessToken(this.m_webApiAccessToken)),
              (this.m_webApiAccessToken =
                await this.m_refreshAccessTokenPromise),
              (this.m_refreshAccessTokenPromise = void 0)));
      }
      let s = await this.Send(e, o, n, i);
      if (s.status != 200) throw new Error("Request Error");
      if (
        ((a = Lr.Init(r, 147)),
        s.headers &&
          (s.headers.get("x-eresult") &&
            a.Hdr().set_eresult(parseInt(s.headers.get("x-eresult"))),
          s.headers.get("x-error_message") &&
            a.Hdr().set_error_message(s.headers.get("x-error_message"))),
        this.m_bJsonMode)
      )
        a.SetBodyJSON(await s.json());
      else {
        let l = new Ya(await s.arrayBuffer());
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
      s = Ip.fromByteArray(a),
      l = r.eWebAPIKeyRequirement,
      c = r.ePrivilege == 0 && l == 1,
      p = {},
      m = new URLSearchParams();
    if (
      (!e.bSendAuth &&
        l != 1 &&
        console.error(
          `Attempting to invoke service ${o} without auth, but auth is required.`,
        ),
      this.m_webApiAccessToken &&
        e.bSendAuth &&
        !c &&
        (m.append("access_token", this.m_webApiAccessToken),
        this.m_strSpoofedSteamID &&
          m.append("spoof_steamid", this.m_strSpoofedSteamID)),
      r.bConstMethod)
    )
      return (
        m.append("origin", self.origin),
        this.m_bJsonMode
          ? m.append("input_json", JSON.stringify(n.Body().toObject()))
          : m.append("input_protobuf_encoded", s),
        fetch(`${i}?${m.toString()}`, p)
      );
    {
      let b = new FormData();
      return (
        this.m_bJsonMode
          ? b.append("input_json", JSON.stringify(n.Body().toObject()))
          : b.append("input_protobuf_encoded", s),
        fetch(`${i}?${m.toString()}`, { ...p, method: "POST", body: b })
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
    let r = Lr.Init(e);
    return (
      r.Hdr().set_eresult(2),
      r.Hdr().set_transport_error(o),
      n && r.Hdr().set_error_message(n),
      r
    );
  }
};
var Jn = class {
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
var Zo = class extends Jn {
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
var Ni = u(f());
function Fp(t) {
  let { strWebAPIToken: e, steamid: o, children: n } = t,
    r = So.useRef(),
    i = So.useRef(),
    a = So.useCallback(
      () => (
        r.current || (r.current = new $n(w.WEBAPI_BASE_URL, e, !1, of)),
        r.current
      ),
      [e],
    ),
    s = So.useCallback(
      () => (i.current || (i.current = new Zo()), i.current),
      [],
    );
  return (0, Ni.jsx)(As, {
    useActiveSteamInterface: a,
    useStorage: s,
    children: (0, Ni.jsx)(Bs, { steamid: o, children: n }),
  });
}
async function of(t) {
  let o = await (
    await fetch(`${w.LOGIN_BASE_URL}jwt/ajaxrefresh`, {
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
var Np = u(M());
var Zn = class {
  m_mapAppToSNRs = new Map();
  m_rgImpressionsToAdd = [];
  BIsValid() {
    return !0;
  }
  AddImpression(e, o) {
    if (!ys(kn)) return;
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
    let o = [ft(kn) || "", ...this.m_rgImpressionsToAdd].join("|");
    this.m_rgImpressionsToAdd = [];
    let n = encodeURIComponent(o).length,
      r = 3200;
    n <= r
      ? xn(kn, o)
      : console.warn(
          `Cookie max length exceeded ( ${n} > ${r} ), discarding impressions`,
        );
  }
};
var Up = u(f());
function Op(t) {
  let [e] = Np.useState(() => new Zn());
  return (0, Up.jsx)(Zs, { ImpressionTracker: e, children: t.children });
}
var yr = u(Vt(), 1);
var ke = u(M()),
  _d = u(Wt());
var wo = u(M());
var ot = u(M());
var Wp = { m_unPID: 0, m_nBrowserID: -1 };
var Ko = class {
  m_fnRender;
  m_rgLoadingLinks = [];
  constructor(e, o, n) {
    if (((this.m_rgLoadingLinks = []), n))
      for (let r = 0; r < n.length; r++) this.AddLink(n[r], !0);
    else {
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
      Uo(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
d([_], Ko.prototype, "OnLinkLoad", 1);
function Oi() {
  return Ss() ? 256 : 0;
}
function tn(t) {
  let e = 0;
  switch (t) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= tn(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= tn(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= Oi()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= Oi()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= Oi()),
        e
      );
  }
}
function Vp() {
  let { ownerWindow: t } = Re();
  return Ye.GetPopupForWindow(t)?.browser_info || Wp;
}
var Gp = ot.createContext({ ownerWindow: window }),
  Re = () => ot.useContext(Gp);
function zp(t) {
  let { ownerWindow: e, children: o } = t,
    n = ot.useMemo(() => ({ ownerWindow: e }), [e]);
  return ot.createElement(Gp.Provider, { value: n }, o);
}
var Ce = class {
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
      ue(
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
    let n = Ye.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let r, i, a;
    n
      ? ((i = n.m_element),
        (r = n.m_popup),
        n.ReleasePopup(),
        (a = n.m_renderWhenReady),
        Ye.RemoveTrackedPopup(n),
        r?.removeEventListener("beforeunload", n.OnBeforeUnloadEvent),
        r?.removeEventListener("unload", n.OnUnload),
        r?.removeEventListener("resize", n.OnResizeEvent),
        r?.removeEventListener("focus", this.OnFocusInternal),
        r?.removeEventListener("blur", this.OnBlurInternal),
        r?.removeEventListener("drop", n.OnDrop),
        r?.removeEventListener("dragover", n.OnDragOver),
        r?.removeEventListener("message", this.OnMessage))
      : (({ popup: r, element: i } = en.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new Ko(r.document, i))),
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
        Be.LANGUAGE &&
          r.document.documentElement.setAttribute("lang", Ds() ?? ""),
        (this.m_popup = r),
        (this.m_element = i),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, o);
        })),
      Ye.AddTrackedPopup(this),
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
      rl(this.browser_info.m_eBrowserType) &&
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
      Ye.RemoveTrackedPopup(this),
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
      (ze(this.m_popup.window, "Window.Close")
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
    return ze(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return ze(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return ze(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
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
d([_t], Ce.prototype, "m_bFocused", 2),
  d([_], Ce.prototype, "OnMessage", 1),
  d([_], Ce.prototype, "RenderInternal", 1),
  d([_], Ce.prototype, "OnCreateInternal", 1),
  d([_], Ce.prototype, "OnResizeEvent", 1),
  d([_], Ce.prototype, "OnBeforeUnloadEvent", 1),
  d([_], Ce.prototype, "OnUnload", 1),
  d([_], Ce.prototype, "OnFocusInternal", 1),
  d([_], Ce.prototype, "OnBlurInternal", 1);
var Ui = class extends Ce {
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
          (e.strRestoreDetails = Ye.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          Ye.SetRestoreDetails(
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
            (Ye.SetRestoreDetails(e, o, this.m_bExpires),
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
    Ye.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
d([_], Ui.prototype, "QueryAndStoreWindowPosition", 1);
var en = class {
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
      ue(e, "Couldn't find head element"),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let o = Nr();
            this.m_mapPopups.forEach((n) => {
              rs(n.window.document, o, !1);
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
    this.m_mapPopups.set(e.GetName(), e);
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
    let m = (o.owner_window || window).open(l, e, s);
    if (!m)
      return (
        console.error(
          `Failed to create popup, browser/CEF may be blocking popups for "${window.location.origin}"`,
        ),
        {}
      );
    let g = "";
    o.html_class && (g = `class="${o.html_class}"`);
    let b = "";
    o.body_class && (b = `class="${o.body_class}"`);
    let S = "";
    o.popup_class && (S = `class="${o.popup_class}"`);
    let k = `<!DOCTYPE html><html ${g}><head><title></title></head><body ${b}><div id="popup_target" ${S}></div></body></html>`;
    return (
      m.document.write(k),
      (m.document.title = a),
      ns(m, Nr()),
      { popup: m, element: m.document.getElementById("popup_target") }
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
d([_, Ws(100)], en.prototype, "DebouncedSaveSavedDimensionStore", 1);
var Ye = new en();
window.g_PopupManager = Ye;
var Yp = u(f()),
  jp = wo.default.createContext(null);
function qp(t) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: o = !0,
      children: n,
    } = t,
    i = Re()?.ownerWindow || window,
    a = wo.default.useRef();
  return (
    a.current || (a.current = new qs()),
    wo.default.useLayoutEffect(() => {
      if (o)
        return (
          Hr.SetMenuManager(i, a.current), () => Hr.SetMenuManager(i, void 0)
        );
    }, [i, o]),
    wo.default.useLayoutEffect(
      () => (Ht(e, a.current), () => Ht(e, void 0)),
      [e],
    ),
    (0, Yp.jsx)(jp.Provider, { value: a.current, children: n })
  );
}
function Kn() {
  return wo.default.useContext(jp);
}
var Bt = u(M()),
  Qp = u(Wt());
var Lt = u(M());
var on = u(M());
var rf = u(f()),
  nf = on.createContext({ body_class: "" });
function Xp() {
  return on.useContext(nf);
}
function er(t, e, o) {
  let n = Lt.useRef(void 0),
    [r, i] = Lt.useState(void 0),
    a = Xp();
  return (
    n.current || (n.current = new Wi(t, af(e, a), i)),
    (n.current.m_callbacks = o),
    Lt.useEffect(() => {
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
    Lt.useEffect(() => {
      n.current.window?.SteamClient.Window.SetHideOnClose &&
        n.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: n.current.window, element: r, popupObj: n.current }
  );
}
function af(t, e) {
  return { ...t, body_class: h(t.body_class, e.body_class) };
}
var Wi = class extends Ce {
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
var Te = u(f());
function $p(t) {
  let { managerOverride: e, bSuppressMouseOverlay: o } = t,
    n = yt(),
    r = Vp(),
    i = Kn(),
    a = e ?? i;
  Tt(a.OnMenusChanged, n);
  let s = !o && a.BShouldRenderMouseOverlay(),
    l = a.GetAllMenus();
  return (0, Te.jsxs)(Te.Fragment, {
    children: [
      s && (0, Te.jsx)(zs, {}),
      l.map((c) =>
        (0, Te.jsx)(
          pe,
          { children: (0, Te.jsx)(lf, { instance: c, browserInfo: r }) },
          c.key,
        ),
      ),
    ],
  });
}
function lf(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = !1,
    i = Mo(),
    a = Re().ownerWindow,
    s = Bt.default.useRef(void 0);
  s.current === void 0 &&
    (s.current =
      (r || e.options.bForcePopup || a.innerWidth < 400 || i?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let l = Bt.default.useMemo(
      () => ({ instance: e, styles: Ur, presentation: 0 }),
      [e],
    ),
    c = n || e.ReactElement;
  return (0, Te.jsx)(In.Provider, {
    value: l,
    children: s.current
      ? (0, Te.jsx)(uf, { instance: e, browserInfo: o, children: c })
      : (0, Te.jsx)(cf, { instance: e, children: c }),
  });
}
function cf(t) {
  let { instance: e, children: o } = t;
  return (0, Te.jsx)(Wr, { ...e.position, children: o });
}
function uf(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = Bt.default.useRef(null),
    a = Re().ownerWindow,
    s = a.SteamClient.Browser.GetBrowserID(),
    l = Bt.default.useCallback(
      (g) => {
        let { options: b, position: S } = e,
          k = S.element;
        if (b.bScreenCoordinates)
          g.dimensions = {
            left: S.clientX,
            top: S.clientY,
            width: 2,
            height: 1,
          };
        else {
          let B = es(a, k.getBoundingClientRect());
          (g.dimensions = { left: B.right, top: B.top, width: 2, height: 1 }),
            (g.availscreenwidth = a.screen.availWidth),
            (g.availscreenheight = a.screen.availHeight);
        }
        return g;
      },
      [a, e],
    ),
    c = e.options.bStandalone ? tn(4) : tn(3);
  e.options.bCreateHidden && (c |= 2), e.options.bAlwaysOnTop && (c |= 8192);
  let { popupObj: p, element: m } = er(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: Ur.ContextMenuPopup + " client_chat_frame",
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
    (0, Bt.useEffect)(() => {
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
    Jp(p.window),
    Bt.default.useEffect(() => {
      e.SetPopup(p);
    }, [e, p]),
    m
      ? Qp.default.createPortal(
          (0, Te.jsx)(Wr, {
            ref: r,
            ...e.position,
            parentWin: a,
            popup: p,
            children: n,
          }),
          m,
        )
      : null
  );
}
var rt = u(M());
var td = u(Wt());
var rn = u(M());
var It = u(M());
function Zp(t) {
  let [e, o] = It.default.useState(!1),
    n = It.default.useCallback(() => {
      ze(t, "Window.IsWindowMaximized")
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
    It.default.useEffect(n, [n, t]),
    $a(t, "resize", n),
    Fr(t, ["window_moved"], n),
    e
  );
}
function Kp(t, e = 100) {
  let [o, n] = It.default.useState(!1),
    r = It.default.useCallback(() => n(!0), [n]),
    i = It.default.useCallback(() => n(!1), [n]);
  return (
    It.default.useEffect(() => {
      if (t)
        return (
          t.addEventListener("focus", r),
          t.addEventListener("blur", i),
          () => {
            t.removeEventListener("focus", r), t.removeEventListener("blur", i);
          }
        );
    }, [t, r, i]),
    Ja(o, e)
  );
}
var Q = u(f());
function pf(t) {
  let { popup: e, onMaximize: o, bOSX: n } = t,
    r = Zp(e),
    i = rn.useCallback(() => {
      o
        ? o()
        : ze(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, o]);
  return (0, Q.jsx)(Hi, {
    className: h(r ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: i,
    children: !n && (r ? (0, Q.jsx)(Os, {}) : (0, Q.jsx)(Fs, {})),
  });
}
function df(t) {
  let { popup: e, onMinimize: o, bOSX: n } = t,
    r = rn.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, Q.jsx)(Hi, {
    className: "minimizeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, Q.jsx)(Ns, {}),
  });
}
function mf(t) {
  let { popup: e, onClose: o, bOSX: n } = t,
    r = rn.useCallback(() => {
      e && (ze(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, Q.jsx)(Hi, {
    className: "closeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, Q.jsx)(go, {}),
  });
}
function Hi(t) {
  let { className: e, onClick: o, children: n } = t,
    r = rn.useCallback(
      (i) => {
        o && (i.stopPropagation(), o(i));
      },
      [o],
    );
  return (0, Q.jsx)("div", {
    className: h("title-area-icon", e),
    onClick: r,
    children: (0, Q.jsx)("div", {
      className: "title-area-icon-inner",
      children: n,
    }),
  });
}
function ed(t) {
  let {
      className: e,
      style: o,
      hideActions: n,
      hideClose: r,
      hideMin: i,
      hideMax: a,
      bOSX: s = ws(),
      bForceWindowFocused: l,
      onMinimize: c,
      onMaximize: p,
      onClose: m,
      extraActions: g,
      popup: b,
      children: S,
    } = t,
    k = Kp(b);
  return (0, Q.jsxs)("div", {
    className: h(
      "TitleBar",
      "title-area",
      s && "OSX",
      (k || l) && "WindowFocus",
      e,
    ),
    style: o,
    children: [
      (0, Q.jsx)("div", { className: "title-area-highlight" }),
      (0, Q.jsx)("div", { className: "title-area-children", children: S }),
      !n &&
        (0, Q.jsxs)(Q.Fragment, {
          children: [
            g &&
              (0, Q.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: g,
              }),
            (0, Q.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !r && (0, Q.jsx)(mf, { popup: b, onClose: m, bOSX: s }),
                !a && (0, Q.jsx)(pf, { popup: b, onMaximize: p, bOSX: s }),
                !i && (0, Q.jsx)(df, { popup: b, onMinimize: c, bOSX: s }),
              ],
            }),
          ],
        }),
    ],
  });
}
var Do = u(f());
function od(t) {
  let { Modal: e } = t,
    { name: o, modalProps: n, options: r } = e,
    i = Re().ownerWindow,
    { popup: a, element: s } = er(
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
        updateParamsBeforeShow: (p) => _f(p, n, r, i),
        onClose: () => n.fnOnClose && n.fnOnClose(),
      },
    ),
    l = r?.bHideActions,
    c =
      typeof r?.nDragAreaHeight == "number"
        ? { height: r.nDragAreaHeight }
        : void 0;
  return s
    ? td.createPortal(
        (0, Do.jsx)(zp, {
          ownerWindow: a,
          children: (0, Do.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: js,
            children: [
              (0, Do.jsx)(ed, {
                hideMin: !0,
                hideMax: !0,
                popup: a,
                hideActions: l,
                style: c,
              }),
              (0, Do.jsx)(yo, {
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
function _f(t, e, o, n) {
  let r,
    i,
    a = e.popupWidth || 500,
    s = e.popupHeight || 400,
    l;
  if (Be.IN_CLIENT && n?.SteamClient?.Browser?.GetBrowserID)
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
var se = u(M()),
  nd = u(Wt());
var tr = u(f());
function rd(t) {
  let { ModalManager: e } = t,
    [o, n] = se.useState(void 0),
    [r, i] = se.useState(!0),
    a = se.useRef(0),
    s = se.useCallback(() => {
      se.startTransition(() => {
        i(!0);
      });
    }, []);
  se.useEffect(() => e.RegisterMeasureModalCallback(s).Unregister, [e, s]),
    se.useLayoutEffect(() => {
      o ||
        se.startTransition(() => {
          n(e.TakeMeasureModalRequest()), i(!1);
        });
    }, [e, o, r]);
  let l = se.useCallback((c) => {
    a.current++,
      se.startTransition(() => {
        n((p) => (p === c ? void 0 : p));
      });
  }, []);
  return o
    ? (0, tr.jsx)(gf, { onMeasureComplete: l, request: o }, a.current)
    : null;
}
function gf(t) {
  let [e, o] = se.useState(),
    n = Re().ownerWindow;
  return (
    se.useLayoutEffect(() => {
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
    e ? nd.createPortal((0, tr.jsx)(ff, { ...t, elContainer: e }), e) : null
  );
}
function ff(t) {
  let { elContainer: e, onMeasureComplete: o, request: n } = t;
  return (
    se.useEffect(() => {
      let r = !1,
        i = (a) => {
          r || (n.fnResults(a), o(n), (r = !0));
        };
      return bf(e, n.promiseContentReady).then(i), () => i(void 0);
    }, [e, o, n]),
    (0, tr.jsx)(pe, { children: n.rctToMeasure })
  );
}
async function bf(t, e) {
  e && (await e);
  let o = document;
  Be.IN_STEAMUI && o.fonts && (await o.fonts.ready);
  let n = t.getBoundingClientRect(),
    r = Math.ceil(n.height),
    i = Math.ceil(n.width);
  return { height: r, width: i };
}
var or = class t {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${t.sm_lastKey++}`;
    }
  },
  Xt = class extends or {
    element;
    ModalUpdatedCallback = new Je();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  Yt = class extends or {
    m_OnElementReadyCallbacks = new Je();
    m_OnActiveModalCallbacks = new Je();
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
d([_], Yt.prototype, "RefModalElement", 1);
var nr = class extends Xt {
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
var id = u(M());
var an = class {
    m_bUsePopups = !0;
    m_bOnlyPopups = !1;
    m_bCenterPopupsOnWindow = !1;
    m_rgModals = [];
    m_OnModalCountChangedCallbacks = new Je();
    m_OnModalShownCallbacks = new Je();
    m_OnModalHiddenCallbacks = new Je();
    m_cMountedOverlays = 0;
    m_rgMeasureModalRequests = [];
    m_OnMeasureModal = new Je();
    m_rgLegacyPopupModals = [];
    m_OnLegacyPopupModalCountChanged = new Je();
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
      ue(
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
          ue(
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
      ue(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let o = new Xt(e);
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
      ue(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let e = new Yt();
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
        a = new nr(
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
  Vi = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let o = this.m_mapModalManager.get(e);
      return (
        o ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (o = new an()),
          this.m_mapModalManager.set(e, o)),
        o
      );
    }
    RegisterModalManager(e, o) {
      ue(
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
  sn = new Vi();
function To(t) {
  return sn.GetModalManager(t);
}
var Gi = "kNiAxGG9vCI-";
var ad = "_3G8oCr9ck-g-";
var de = u(M()),
  ud = u(Wt());
var ld = u(M());
var Qt = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var zi = u(f()),
  Rt = class extends ld.Component {
    m_elHover;
    m_listeners = new Za();
    m_bNoSpace = !1;
    state = { x: void 0, y: void 0, hoverPositionReady: !1 };
    bindHover(e) {
      (this.m_elHover = e || void 0), this.positionHover();
    }
    componentDidMount() {
      this.m_listeners.AddEventListener(window, "blur", this.OnWindowBlur);
    }
    componentDidUpdate() {
      this.positionHover();
    }
    componentWillUnmount() {
      this.m_listeners.Unregister();
    }
    OnWindowBlur(e) {
      this.props.onWindowBlur && this.props.onWindowBlur(e);
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
          children: m,
          onNoSpace: g,
          onWindowBlur: b,
          bTopmost: S,
          ...k
        } = this.props,
        B = Object.assign({ left: this.state.x, top: this.state.y }, r),
        X = !o || o.visible;
      return (0, zi.jsx)("div", {
        className: h(Qt.HoverPositionOuter, S && Qt.HoverAboveModal),
        children: (0, zi.jsx)("div", {
          ...k,
          className: h(
            Qt.HoverPosition,
            X && this.state.hoverPositionReady && Qt.Ready,
            this.m_bNoSpace && Qt.NoSpace,
            i && Qt.EnablePointerEvents,
            n,
          ),
          style: B,
          ref: this.bindHover,
          children: m,
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
          nBodyDistance: m = 8,
          direction: g = "right",
          nBodyAlignment: b = 0.5,
        } = this.props,
        {
          nLeft: S,
          nTop: k,
          nOverflow: B,
          nLateralOverflow: X,
        } = sd(g, b, m, l, c, n.innerWidth, n.innerHeight);
      if (B > (this.props.nAllowOffscreenPx ?? 10) && !p) {
        let ie = vf(this.props.direction ?? "right"),
          {
            nLeft: we,
            nTop: ge,
            nOverflow: ae,
            nLateralOverflow: _e,
          } = sd(ie, b, m, l, c, n.innerWidth, n.innerHeight);
        if (
          (ae < B && ((g = ie), (S = we), (k = ge), (B = ae), (X = _e)),
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
        ([k, S] = Cf(
          this.props.nMaxLateralMoveOnScreen,
          X,
          g ?? "right",
          k,
          S,
        ));
      let ne = null;
      switch (g) {
        case "left":
          ne = i;
          break;
        case "right":
          ne = r;
          break;
        case "top":
          ne = s;
          break;
        case "bottom":
          ne = a;
          break;
      }
      ne && ne.setAttribute("style", ""),
        S != this.state.x && this.setState({ x: S }),
        k != this.state.y && this.setState({ y: k }),
        this.state.hoverPositionReady ||
          this.setState({ hoverPositionReady: !0 });
    }
  };
Wa(Rt, "defaultProps", {
  direction: "right",
  nBodyAlignment: 0.5,
  nAllowOffscreenPx: 10,
  nBodyDistance: 8,
  nMaxLateralMoveOnScreen: void 0,
}),
  d([_], Rt.prototype, "bindHover", 1),
  d([_], Rt.prototype, "OnWindowBlur", 1),
  (Rt = d([xt], Rt));
function vf(t) {
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
function sd(t, e, o, n, r, i, a) {
  let s = i,
    l = a,
    c = 0,
    p = 0,
    m,
    g,
    b,
    S;
  switch (t) {
    case "right":
      (m = n.right + o),
        (g = rr(n.top, n.height, r.height, e)),
        (b = Math.max(0, m + r.width - s)),
        (S = [Math.max(0, c - g), Math.max(0, g + r.height - l)]);
      break;
    case "left":
      (m = n.left - o - r.width),
        (g = rr(n.top, n.height, r.height, e)),
        (b = Math.max(0, p - m)),
        (S = [Math.max(0, c - g), Math.max(0, g + r.height - l)]);
      break;
    case "bottom":
      (m = rr(n.left, n.width, r.width, e)),
        (g = n.bottom + o),
        (b = Math.max(0, g + r.height - l)),
        (S = [Math.max(0, p - m), Math.max(0, m + r.width - s)]);
      break;
    case "top":
      (m = rr(n.left, n.width, r.width, e)),
        (g = n.top - o - r.height),
        (b = Math.max(0, c - g)),
        (S = [Math.max(0, p - m), Math.max(0, m + r.width - s)]);
      break;
    case "overlay":
      (m = n.left), (g = n.top), (b = 0), (S = [0, 0]);
      break;
    case "overlay-center":
      (m = n.left + 0.5 * n.width - 0.5 * r.width),
        (g = n.top + 0.5 * n.height - 0.5 * r.height),
        (b = 0),
        (S = [0, 0]);
      break;
  }
  return { nLeft: m, nTop: g, nOverflow: b, nLateralOverflow: S };
}
function rr(t, e, o, n) {
  return Math.max(0, Math.min(1, n)) * (e - o) + t;
}
function Cf(t, e, o, n, r) {
  let i = Math.max(e[0], e[1]);
  t !== void 0 && (i = Math.min(t, i)), (i = Math.max(0, i));
  let a = e[0] > e[1] ? i : -i;
  return o === "left" || o === "right" ? (n += a) : (r += a), [n, r];
}
var cd = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var nt = u(f()),
  pd = de.createContext({}),
  Rf = () => de.useContext(pd);
function ir(t) {
  let [e, o] = de.useState(null),
    n = de.useMemo(() => ({ targetElement: e }), [e]);
  return (0, nt.jsxs)(pd.Provider, {
    value: n,
    children: [(0, nt.jsx)("div", { ref: o }), t.children],
  });
}
function ar(t) {
  let { divProps: e, tooltipProps: o } = Pf({
    ...t,
    toolTipContent: t.toolTipContent
      ? (0, nt.jsx)(wf, { children: Sf(t.toolTipContent) })
      : null,
  });
  return (0, nt.jsxs)(At, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, nt.jsx)(Mf, { ...o }), t.children],
  });
}
function Pf(t) {
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
      bTopmost: m,
      children: g,
      ...b
    } = t,
    S = {
      direction: r,
      nBodyAlignment: i,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: l,
      className: c,
      bTopmost: m,
    },
    [k, B] = de.useState(!1),
    [X, ne] = de.useState(),
    ie = de.useCallback((ae) => {
      B(!0), ne(ae.currentTarget);
    }, []),
    we = de.useCallback(() => {
      B(!1);
    }, []),
    ge = {
      active: k && !n,
      target: X,
      nDelayShowMS: o,
      hoverPositionProps: S,
      children: e,
    };
  return {
    divProps: { ...b, onMouseEnter: ie, onMouseLeave: we },
    stateHandlers: { setTarget: ne, setHovered: B },
    tooltipProps: ge,
  };
}
function Sf(t) {
  return typeof t == "string" ? x(t) : t;
}
function wf(t) {
  return (0, nt.jsx)("div", {
    ...t,
    className: h(cd.TextToolTip, t.className),
  });
}
function Mf(t) {
  let {
      active: e,
      target: o,
      nDelayShowMS: n = 300,
      hoverPositionProps: r,
      children: i,
    } = t,
    [a, s] = de.useState(e),
    l = Rf();
  if (
    (de.useEffect(() => {
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
  return ud.createPortal(
    (0, nt.jsx)(Rt, { target: o, ...r, children: i }),
    c ?? o.ownerDocument.body,
  );
}
var q = u(f());
function Df(t) {
  rt.useEffect(() => {
    if (t)
      return (
        document.body.classList.add(Gi),
        () => document.body.classList.remove(Gi)
      );
  }, [t]);
}
function yf(t) {
  let e = Re().ownerWindow,
    o = yt(),
    n = rt.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  rt.useEffect(() => t.RegisterOverlay(o), [t, o]),
    rt.useEffect(() => t.RegisterOnModalShownCallback(n).Unregister, [t, n]);
}
function Tf(t, e) {
  return Xa(
    (o) => {
      if (!o || !e) return;
      let n = o.ownerDocument.defaultView;
      return sn.RegisterModalManager(t, n);
    },
    [t],
  );
}
function dd(t) {
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
  Df(c), yf(e);
  let m = Tf(e, o),
    g = null,
    b = !i;
  return (
    l && l.length
      ? (g = l.map((S) => {
          let k = S == p,
            B = {
              key: S.key,
              active: k,
              rctActiveContextMenus: k && i ? r : void 0,
            };
          return S instanceof Xt
            ? (0, q.jsx)(Af, { ...B, modal: S, Component: n ?? xf })
            : S instanceof Yt
              ? (0, q.jsx)(kf, { ...B, modal: S, bUseDialogElement: i })
              : void 0;
        }))
      : ((b = !0), (a = { ...a, display: "none" })),
    (0, q.jsxs)(q.Fragment, {
      children: [
        (0, q.jsxs)(Gn, {
          children: [
            (0, q.jsxs)("div", {
              ...s,
              style: a,
              ref: m,
              className: h(s.className, "FullModalOverlay"),
              children: [
                (0, q.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                g,
              ],
            }),
            b && r,
          ],
        }),
        (0, q.jsx)(rd, { ModalManager: e }),
        (0, q.jsx)(Ef, { ModalManager: e }),
      ],
    })
  );
}
function kf(t) {
  let {
    modal: e,
    rctActiveContextMenus: o,
    active: n,
    bUseDialogElement: r,
  } = t;
  rt.useEffect(() => {
    if (n)
      return (
        e.SetActive(n),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, n]);
  let i = (0, q.jsxs)(pe, {
    children: [
      (0, q.jsx)("div", {
        className: h("ModalOverlayContent", n ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      o,
    ],
  });
  return r ? (0, q.jsx)(md, { active: n, children: i }) : i;
}
function Af(t) {
  let { modal: e, active: o, rctActiveContextMenus: n, Component: r } = t,
    i = yt();
  return (
    Tt(e.ModalUpdatedCallback, i),
    (0, q.jsx)(pe, {
      children: (0, q.jsxs)(r, {
        className: h("ModalOverlayContent", o ? "active" : "inactive"),
        active: o,
        modalKey: e.key,
        children: [n, e.element],
      }),
    })
  );
}
function xf(t) {
  let { className: e, active: o, children: n } = t;
  return (0, q.jsx)(md, {
    active: o,
    children: (0, q.jsx)(ir, {
      children: (0, q.jsx)("div", { className: e, tabIndex: -1, children: n }),
    }),
  });
}
function md(t) {
  let { active: e, children: o } = t,
    n = rt.useRef(null);
  return (
    rt.useEffect(() => {
      let r = n.current;
      if (!(!e || !r)) return r.showModal(), () => r.close();
    }, [e]),
    (0, q.jsx)("dialog", {
      ref: n,
      className: ad,
      onCancel: (r) => r.preventDefault(),
      children: t.children,
    })
  );
}
function Ef(t) {
  let { ModalManager: e } = t,
    o = yt();
  return (
    Tt(e.LegacyPopupModalCountChangedCallbacks, o),
    (0, q.jsx)(q.Fragment, {
      children: e.legacy_popup_modals.map((n) =>
        (0, q.jsx)(od, { Modal: n }, n.key),
      ),
    })
  );
}
var $t = u(f()),
  ji = ke.createContext({}),
  yo = ke.memo(function (e) {
    let {
        children: o,
        bRenderOverlayAtRoot: n,
        refModalManager: r,
        DialogWrapper: i,
        bUseDialogElement: a = !0,
        ContextMenuComponent: s = $p,
        refContextMenuManager: l,
        browserInfo: c,
        bUsePopups: p,
        bOnlyPopups: m,
        bCenterPopupsOnWindow: g,
        bRegisterManagersWithWindow: b = !0,
        ...S
      } = e,
      k = ke.useRef();
    k.current || (k.current = new an());
    let B = (0, $t.jsx)(dd, {
      ...S,
      DialogWrapper: i,
      ModalManager: k.current,
      bUseDialogElement: a,
      bRegisterModalManager: b,
      rctActiveContextMenus: (0, $t.jsx)(s, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (B = _d.createPortal(B, document.body)),
      Qa(r, k.current),
      p !== void 0 && k.current?.SetUsePopups(p),
      g !== void 0 && k.current?.SetCenterPopupsOnWindow(g),
      m !== void 0 && k.current?.SetOnlyPopups(m),
      k.current.SetBrowserInfo(c);
    let X = ke.useMemo(
      () => ({ ModalManager: k.current, DialogWrapper: i }),
      [i],
    );
    return (0, $t.jsx)(ji.Provider, {
      value: X,
      children: (0, $t.jsxs)(qp, {
        refContextMenuManager: l,
        bRegisterMenuManager: b,
        children: [(0, $t.jsx)(pe, { children: B }), e.children],
      }),
    });
  });
function Mo() {
  return ke.useContext(ji).ModalManager;
}
function gd() {
  return ke.useContext(ji).DialogWrapper;
}
function Jp(t) {
  let e = Mo();
  ke.useEffect(() => {
    if (t) return sn.RegisterModalManager(e, t);
  }, [t, e]);
}
var fm = u(M());
var Ft = u(M());
var sr = u(M());
var Ae = u(f()),
  qi = sr.createContext({}),
  Lf = () => sr.useContext(qi);
function Jt(t) {
  let o = Lf().ModalPosition ?? Bf;
  return (0, Ae.jsx)(o, { ...t });
}
function Bf(t) {
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
      a && (yn(a, a.ownerDocument.activeElement) || a.focus());
    }));
  let n = ["ModalPosition"];
  t.className && n.push(t.className),
    t.bDestructiveWarning && n.push("Destructive");
  let r = t.renderContent || ((a) => (0, Ae.jsx)("div", { ...a })),
    i = (0, Ae.jsxs)(Ae.Fragment, {
      children: [
        !t.hideTopBar &&
          (0, Ae.jsx)("div", { className: "ModalPosition_TopBar" }),
        t.onEscKeypress &&
          !t.bHideCloseIcon &&
          (0, Ae.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, Ae.jsx)("div", {
              className: "closeButton",
              onClick: (a) => {
                a.stopPropagation(), t.onEscKeypress();
              },
              children: (0, Ae.jsx)(go, {}),
            }),
          }),
        (0, Ae.jsx)(pe, { children: t.children }),
      ],
    });
  return (0, Ae.jsx)("div", {
    className: n.join(" "),
    ...e,
    ref: o,
    children: r({ className: "ModalPosition_Content", children: i }),
  });
}
var Zt = u(M()),
  bd = u(Wt());
var Yi = u(f());
function hd(t) {
  let { active: e, children: o } = t,
    n = Mo() || To(window),
    r = gd(),
    [i, a] = Zt.useState(null),
    [s, l] = Zt.useState(!1),
    c = Zt.useRef();
  if (
    (Zt.useEffect(() => {
      if (e) {
        let m = n.ShowPortalModal(),
          g = m.OnElementReadyCallbacks.Register(a),
          b = m.OnModalActiveCallbacks.Register(l);
        return (
          (c.current = m.key),
          () => {
            a(null), l(!1), m.Close(), g.Unregister(), b.Unregister();
          }
        );
      } else return;
    }, [n, e]),
    !i || !e)
  )
    return null;
  let p = (0, Yi.jsx)(ir, { children: o });
  return (
    r && (p = (0, Yi.jsx)(r, { active: s, modalKey: c.current, children: p })),
    bd.createPortal(p, i)
  );
}
var ln = {
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
var Pe = u(f());
function vd(t) {
  let { managerOverride: e } = t,
    o = Kn(),
    n = e ?? o,
    r = yt();
  return (
    Tt(n.OnMenusChanged, r),
    (0, Pe.jsx)(hd, {
      active: !!n.ActiveMenu,
      children: (0, Pe.jsx)(If, { ActiveMenu: n.ActiveMenu }),
    })
  );
}
function If(t) {
  let { ActiveMenu: e } = t,
    o = Ft.useCallback(() => {
      e?.OnCancel();
    }, [e]);
  Ft.useEffect(() => () => e?.Hide(), [e]);
  let n = [],
    r = null;
  Ls(() => {
    for (let a = e; a && a.visible; a = a.submenu)
      n.push((0, Pe.jsx)(Ff, { instance: a }, a.key)), (r = a.label);
  });
  let i = Ft.useCallback(
    (a) => {
      a.currentTarget == a.target && o();
    },
    [o],
  );
  return (0, Pe.jsx)(Jt, {
    padding: "none",
    children: (0, Pe.jsxs)("div", {
      onClick: i,
      className: h("BasicUIContextMenu", ln.BasicContextMenuModal),
      children: [
        r &&
          (0, Pe.jsx)(Pe.Fragment, {
            children: (0, Pe.jsx)("div", {
              className: ln.BasicContextMenuHeader,
              children: r,
            }),
          }),
        (0, Pe.jsx)(U, {
          className: ln.BasicContextMenuContainer,
          onCancelButton: o,
          onClick: i,
          children: n,
        }),
      ],
    }),
  });
}
function Ff(t) {
  let { instance: e } = t,
    o = Ke(),
    n = Ft.useCallback(() => {
      o && ye.PlayNavSound(25);
    }, [o]),
    r = Ft.useMemo(
      () => ({
        instance: e,
        styles: ln,
        presentation: 1,
        callbacks: { onDisabledItemSelected: n },
      }),
      [e, n],
    );
  return (0, Pe.jsx)(pe, {
    children: (0, Pe.jsx)(In.Provider, { value: r, children: e.ReactElement }),
  });
}
var We = u(M());
var $i = u(M());
var lr = u(f());
var Qi = class {
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
d([_t], Qi.prototype, "m_Value", 2);
function Ne(t) {
  return $i.forwardRef(function (o, n) {
    return (0, lr.jsx)("div", { ...o, className: h(t, o.className), ref: n });
  });
}
function Cd(t) {
  if (typeof t != "string") return NaN;
  let o = !t.includes("ms") && t.includes("s"),
    n = Number.parseFloat(t);
  return o && (n *= 1e3), n;
}
var Rd = "me1BHzZX9A0-";
var cr = u(f());
function it(t) {
  return (0, cr.jsxs)(ar, {
    toolTipContent: t.tooltip,
    className: h(Rd, "HelperTooltip", t.className),
    children: [" ", (0, cr.jsx)(Us, {})],
  });
}
var Ji = u(M()),
  ko = Ji.default.createContext({}),
  Zi = () => Ji.default.useContext(ko);
function Oe(t, e) {
  return Zi()[t] ?? e;
}
var Xe = {
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
var Kt = u(f());
function Pd(t) {
  let e = Oe("ToggleControl", Of);
  return (0, Kt.jsx)(e, { ...t });
}
function Of(t) {
  let { value: e, onChange: o, disabled: n } = t;
  return (0, Kt.jsxs)("div", {
    className: h(Xe.Toggle, n && Xe.Disabled),
    onClick: () => !n && o && o(!e),
    children: [
      (0, Kt.jsx)("div", { className: Xe.ToggleRail }),
      (0, Kt.jsx)("div", {
        className: h(Xe.ToggleRail, Xe.Highlight, e ? Xe.On : Xe.Off),
      }),
      (0, Kt.jsx)("div", { className: h(Xe.ToggleSwitch, e ? Xe.On : Xe.Off) }),
    ],
  });
}
var E = u(f());
function pr(t) {
  return We.forwardRef(function (o, n) {
    return (0, E.jsx)(U, { ...o, className: h(t, o.className), ref: n });
  });
}
var dr = Ne("DialogHeader"),
  Fy = Ne("DialogSubHeader"),
  Ny = Ne("SettingsDialogSubHeader"),
  Sd = Ne("DialogFooter"),
  Oy = Ne("DialogLabel _DialogLayout"),
  wd = Ne("DialogBodyText"),
  Uy = Ne("DialogBody"),
  Md = pr("DialogBody"),
  Wy = Ne("DialogInnerBody"),
  Hy = Ne("DialogControlsSection"),
  Vy = Ne("DialogControlsSectionHeader"),
  Uf = pr("DialogTwoColLayout _DialogColLayout"),
  Wf = pr("DialogThreeColLayout _DialogColLayout"),
  Gy = pr("DialogTwoThirdColLayout _DialogColLayout"),
  zy = Ne("DialogColumn _DialogLayout");
function Ki(t) {
  let e = Oe("Content", Hf);
  return (0, E.jsx)(e, { ...t });
}
function Hf(t) {
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
var ur = class extends We.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, E.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
d([_], ur.prototype, "OnSubmit", 1);
function Dd(t) {
  let { classNameContent: e, bCenterVertically: o, ...n } = t;
  return (0, E.jsx)(Ki, {
    className: e,
    bCenterVertically: o,
    children: (0, E.jsx)(ur, { ...n }),
  });
}
var pn = We.forwardRef(function (e, o) {
    let n = Zi(),
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
    return (0, E.jsxs)(Tn, {
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
  un = We.forwardRef(function (e, o) {
    return (0, E.jsx)(pn, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  Ue = We.forwardRef(function (e, o) {
    return (0, E.jsx)(pn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  jy = We.forwardRef(function (e, o) {
    return (0, E.jsx)(pn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  qy = We.forwardRef(function (e, o) {
    return (0, E.jsx)(pn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  Yy = We.forwardRef(function (e, o) {
    return (0, E.jsx)(pn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "TextButton"),
    });
  });
function yd(t) {
  return (0, E.jsxs)(Uf, {
    className: t.className,
    children: [
      (0, E.jsxs)(un, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        autoFocus: t.focusButton == "primary",
        children: [t.strOKText || x("#Button_Confirm"), " "],
      }),
      (0, E.jsx)(Ue, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        autoFocus: t.focusButton == "secondary",
        children: t.strCancelText || x("#Button_Cancel"),
      }),
    ],
  });
}
function Td(t) {
  let e = t.bOKDisabled ? Ue : un,
    o = t.bOKDisabled ? un : Ue;
  return (0, E.jsxs)(Wf, {
    children: [
      (0, E.jsxs)(e, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        children: [t.strOKText || x("#Button_Confirm"), " "],
      }),
      (0, E.jsxs)(o, {
        onClick: t.onUpdate,
        disabled: t.bUpdateDisabled,
        children: [t.strUpdateText || x("#Button_Update"), " "],
      }),
      (0, E.jsx)(Ue, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        children: t.strCancelText || x("#Button_Cancel"),
      }),
    ],
  });
}
var Nt = class extends We.Component {
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
      bottomSeparator: m,
      controlled: g,
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
d([_], Nt.prototype, "Toggle", 1),
  d([_], Nt.prototype, "KeyDown", 1),
  d([_], Nt.prototype, "SetChecked", 1);
var Xy = We.forwardRef(function (e, o) {
    let n = Oe("ToggleField", cn);
    return (0, E.jsx)(n, { ref: o, ...e });
  }),
  cn = class extends Nt {
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
                      (0, E.jsx)(it, { tooltip: this.props.tooltip }),
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
                  children: (0, E.jsx)(Pd, {
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
                        children: x("#Dialog_Off"),
                      }),
                      (0, E.jsx)("div", {
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
d([_], cn.prototype, "OnOffKeyDown", 1),
  d([_], cn.prototype, "OnNewUIToggle", 1);
var at = u(M());
var mr = class extends el {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, o, n) {
    super(os(e.ref.current), n),
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
var F = u(f()),
  Vf = at.forwardRef(function (e, o) {
    let n = Oe("InputElement", mo);
    return (0, F.jsx)(n, { ...e, ref: o });
  }),
  Ot = class Ot extends at.PureComponent {
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
          this.props.mustBeURL == !0 && !Ot.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !Ot.validateEmail(this.m_elInput?.value),
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
            (this.m_CopiedAnimation = new mr(
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
      ue(
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
          fnStrValidateURL: m,
          mustBeEmail: g,
          focusOnMount: b,
          tooltip: S,
          inlineControls: k,
          maxChars: B,
          ...X
        } = this.props,
        ne =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (X.className ? " " + X.className : ""),
        ie = "copiedAnimation",
        we = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (ie = "copiedAnimation animationPlaying"),
        we && (ie = "copiedAnimation animationComplete");
      let ge = {};
      this.state.m_CopiedYPos !== void 0 &&
        (ge.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let ae = (0, F.jsxs)(at.Fragment, {
        children: [
          (0, F.jsxs)(U, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, F.jsx)(Vf, {
                type: "text",
                ...X,
                className: ne,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              r &&
                (0, F.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, F.jsx)(Ue, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: x("#Button_Copy"),
                    }),
                    (0, F.jsx)("div", {
                      style: ge,
                      className: ie,
                      children: x("#Button_Copied"),
                    }),
                  ],
                }),
              (a || (i && X.value)) &&
                (0, F.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, F.jsx)(go, {}),
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
                      (0, F.jsx)(it, { tooltip: this.props.tooltip }),
                    (0, F.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                ae,
                this.state.m_bNumberBelowMinRange
                  ? (0, F.jsxs)("div", {
                      children: [" ", x("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, F.jsxs)("div", {
                      children: [" ", x("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, F.jsxs)("div", {
                      children: [" ", x("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, F.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, F.jsxs)("div", {
                      children: [" ", x("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, F.jsxs)("div", {
                      children: [" ", x("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, F.jsxs)("div", {
                      children: [
                        " ",
                        Ms("#Input_Error_TooManyCharacters", B),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : ae;
    }
  };
d([_], Ot.prototype, "OnInputRef", 1),
  d([_], Ot.prototype, "OnChanged", 1),
  d([_], Ot.prototype, "OnCopyClick", 1),
  d([_], Ot.prototype, "OnClearClick", 1);
var eo = Ot,
  dn = class extends eo {
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
        mustBeURL: m,
        fnStrValidateURL: g,
        mustBeEmail: b,
        focusOnMount: S,
        tooltip: k,
        inlineControls: B,
        className: X,
        children: ne,
        ...ie
      } = this.props;
      return (0, F.jsx)("div", {
        className: "DialogInputLabelGroup _DialogLayout DialogListBuilderInput",
        children: (0, F.jsxs)("label", {
          children: [
            e && (0, F.jsx)("div", { className: "DialogLabel", children: e }),
            (0, F.jsx)("div", {
              className: h(
                "_DialogInputContainer",
                "DialogTextInputBase",
                this.m_bFocused && "Active",
              ),
              onClick: this.OnBackgroundClick,
              children: (0, F.jsxs)(U, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  at.Children.map(ne, (we, ge) =>
                    (0, F.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: we,
                      },
                      ge,
                    ),
                  ),
                  (0, F.jsx)(mo, {
                    type: "text",
                    ...ie,
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
d([_], dn.prototype, "OnBackgroundClick", 1),
  d([_], dn.prototype, "OnInputFocus", 1),
  d([_], dn.prototype, "OnInputBlur", 1);
var kd = u(M());
var st = u(f()),
  Ad = (t, e) =>
    "" + (t != null ? Number.parseFloat(t.toFixed(3)) : null) + (e ?? "");
var Pt = class extends kd.Component {
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
      s = this.props.renderValue ?? Ad;
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
            children: [n, !!i && (0, st.jsx)(it, { tooltip: i })],
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
d([_], Pt.prototype, "OnMouseDown", 1),
  d([_], Pt.prototype, "OnMouseMove", 1),
  d([_], Pt.prototype, "OnMouseUp", 1),
  d([_], Pt.prototype, "OnTouchStart", 1),
  d([_], Pt.prototype, "OnTouchMove", 1),
  d([_], Pt.prototype, "OnTouchEnd", 1),
  d([_], Pt.prototype, "OnKeyDown", 1);
var xd = u(M());
var zf = u(f()),
  Gf = { setValue: () => {} },
  wT = xd.default.createContext(Gf);
var he = u(M());
var mn = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var Y = u(f());
function St(t) {
  return typeof t == "object" && "data" in t;
}
function to(t) {
  return typeof t == "object" && "bIsSeparator" in t;
}
function ct(t) {
  return typeof t == "object" && "options" in t;
}
function ta(t, e) {
  if (t === e) return !0;
  if (!Array.isArray(t) || !Array.isArray(e) || t.length != e.length) return !1;
  for (let o = 0; o < t.length; o++) if (!oa(t[o], e[o])) return !1;
  return !0;
}
function oa(t, e) {
  return t == null || e == null
    ? t == e
    : to(t) && to(e)
      ? !0
      : !(
          to(t) ||
          to(e) ||
          t.label !== e.label ||
          t.tooltip !== e.tooltip ||
          ct(t) != ct(e) ||
          (ct(t) && ct(e) && !ta(t.options, e.options)) ||
          (St(t) && St(e) && t.data !== e.data)
        );
}
function _r(t, e) {
  if (t != null)
    for (let o = 0; o < t.length; o++) {
      let n = t[o];
      if (St(n) && n.data === e) return n;
      if (ct(n)) {
        let r = _r(n.options, e);
        if (r != null) return r;
      }
    }
}
function jf(t) {
  let e = Oe("DropDownField", qf);
  return (0, Y.jsx)(e, { ...t });
}
function qf(t) {
  let {
    label: e,
    tooltip: o,
    strClassName: n,
    dropDownControlRef: r,
    ...i
  } = t;
  return (0, Y.jsxs)("div", {
    className: h("DialogInputLabelGroup", "_DialogLayout", n),
    children: [
      e &&
        (0, Y.jsxs)("div", {
          className: "DialogLabel",
          children: [e, o && (0, Y.jsx)(it, { tooltip: o })],
        }),
      (0, Y.jsx)(lt, { menuLabel: e, ...i, ref: r }),
    ],
  });
}
var Yf = he.forwardRef(function (e, o) {
    return (0, Y.jsxs)(Tn, {
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
          (0, Y.jsx)("div", {
            className: h(e.arrowClassName, "DialogDropDown_Arrow"),
            children: (0, Y.jsx)(Is, {}),
          }),
      ],
    });
  }),
  lt = class extends he.Component {
    static contextType = ko;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: _r(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let o = _r(this.props.rgOptions, e);
      oa(o, this.value) || this.setState({ value: o });
    }
    get value() {
      return this.props.controlled
        ? _r(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, o, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        o.bOpened !== this.state.bOpened ||
        !ta(this.props.rgOptions, e.rgOptions) ||
        !oa(o.value, this.value)
      )
        return !0;
      let r = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let i of r) if (e[i] !== this.props[i]) return !0;
      return !1;
    }
    componentDidUpdate(e, o) {
      Mn(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let n = !ta(e.rgOptions, this.props.rgOptions),
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
      (this.m_iMenuInstance = zo(
        (0, Y.jsx)(Xf, {
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
      Ld(e, this.props.rgOptions.filter(St), this.value?.data, (o) =>
        this.OnValueSelected(void 0, o),
      );
    }
    render() {
      let e = (0, Y.jsx)("div", {
          className: "DialogDropDown_CurrentDisplay",
          children: this.value?.label ?? this.props.strDefaultLabel,
        }),
        o =
          this.props.renderButtonValue != null
            ? this.props.renderButtonValue(e)
            : e,
        n = this.props.focusable ?? !0,
        r = this.props.renderButton || this.context.DropDownControlButton || Yf;
      return (0, Y.jsx)(r, {
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
d([_], lt.prototype, "OnInputRef", 1),
  d([_], lt.prototype, "ToggleMenu", 1),
  d([_], lt.prototype, "OnValueSelected", 1),
  d([_], lt.prototype, "ShowMenu", 1),
  d([_], lt.prototype, "HideMenu", 1),
  d([_], lt.prototype, "OnKeyDown", 1);
var Ed = he.createContext(null);
function Xf(t) {
  let e = Oe("DropDownMenu", Qf);
  return (0, Y.jsx)(Ed.Provider, {
    value: {},
    children: (0, Y.jsx)(e, { ...t }),
  });
}
function Ld(t, e, o, n) {
  let r;
  if (t.key === "ArrowDown")
    r = (e.findIndex((a) => a.data === o) + 1) % e.length;
  else if (t.key === "ArrowUp") {
    let i = e.findIndex((a) => a.data === o);
    r = i <= 0 ? e.length - 1 : i - 1;
  }
  r !== void 0 && (n(e[r]), t.preventDefault());
}
function Qf(t) {
  let {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      selectedValue: r,
    } = t,
    [i, a] = he.useState(r),
    s = he.useMemo(() => e.filter(St), [e]),
    l = he.useCallback(
      (c) => {
        Ld(c, s, i, (p) => a(p.data));
      },
      [i, s],
    );
  return (0, Y.jsx)("div", {
    className: h(
      mn.DialogDropDownMenu,
      "_DialogInputContainer",
      t.strDropDownMenuCtnClass,
    ),
    onKeyDown: l,
    children: (0, Y.jsx)(Bd, {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: i,
      setActiveValue: a,
    }),
  });
}
function Bd(t) {
  let { rgOptions: e, ...o } = t;
  return e.map((n, r) =>
    to(n)
      ? (0, Y.jsx)(
          "hr",
          {
            className: h(
              mn.DialogDropDownMenu_Item,
              mn.DialogDropDownMenu_Separator,
            ),
          },
          r,
        )
      : ct(n)
        ? (0, Y.jsx)(Bd, { ...o, rgOptions: n.options }, r)
        : (0, Y.jsx)($f, { ...o, option: n }, r),
  );
}
function $f(t) {
  let {
      option: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: r,
      setActiveValue: i,
    } = t,
    a = he.useCallback((c) => c && c.focus(), []),
    s = he.useCallback(() => {
      i(e.data);
    }, [i, e]),
    l = e.data === r;
  return (0, Y.jsx)("button", {
    type: "button",
    className: h(
      mn.DialogDropDownMenu_Item,
      o,
      e.strOptionClass,
      l && "ContextMenuAutoFocus",
    ),
    onClick: (c) => n(c, e),
    ref: l ? a : void 0,
    onMouseEnter: s,
    children: e.tooltip
      ? (0, Y.jsx)(ar, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, Y.jsx)("div", { children: e.label }),
  });
}
var ea = class extends he.Component {
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
      (0, Y.jsx)(jf, { ...r, rgOptions: i, onMenuOpened: this.OnMenuOpened })
    );
  }
};
d([_], ea.prototype, "OnMenuOpened", 1);
var Zf = u(M());
var Id = u(f());
var xe = u(M());
var Fd = u(Vm());
var na = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new ra(e, !1);
  }
};
var ra = class {
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
          (this.m_reactRoot = Fd.createRoot(this.m_container)),
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
      return this.m_container && yn(this.m_container, e);
    }
  },
  gr = class {
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
      return o || ((o = new na(e.body)), this.m_mapEmbeddedHovers.set(e, o)), o;
    }
  };
var Se = u(f()),
  _n = new is("DragDrop").Debug;
var ia = class extends xe.Component {
  m_coordinator = new fr();
  OnDrop(e, o) {
    o > e && o--, o != e && this.props.onReorder(e, o);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, Se.jsx)(
          vr,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (n) => n.props.data != 0,
            fnOnDrop: (n) => this.OnDrop(n.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      xe.Children.forEach(this.props.children, (n, r) => {
        let i = n.props.id || "__list_" + r,
          a = r + 1;
        e.push(
          (0, Se.jsx)(
            He,
            { coordinator: this.m_coordinator, data: r, children: n },
            i,
          ),
        ),
          e.push(
            (0, Se.jsx)(
              vr,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (s) => s.props.data != a,
                fnOnDrop: (s) => this.OnDrop(s.props.data, a),
              },
              "dropregion_" + i,
            ),
          );
      }),
      (0, Se.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
d([_], ia.prototype, "OnDrop", 1);
function Kf(t) {
  if ("touches" in t) {
    let e = t;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [t.clientX, t.clientY];
}
function aa(t, e, o, n) {
  return n
    ? o && t > o.left && t < o.right && e > o.top && e < o.bottom
    : o && t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
}
var fr = class {
  m_embeddedElement = new gr("DragGhosts");
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
    Uo(this.m_rgDropRegions, e),
      Uo(this.m_rgActiveDropRegions, e),
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
      n = xe.cloneElement(e, { ref: this.OnDragGhostRef, className: o });
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
    ue(
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
          m = e.GetDragDocument().body.getBoundingClientRect();
        if (aa(r, i, m) && !aa(c, p, m, !0)) {
          let g = Sn(c, m.left, m.right, m.left - 200, m.right + 200),
            b = Sn(p, m.top, m.bottom, m.top - 100, m.bottom + 100),
            S = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, g, b);
          }, S);
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
d([_], fr.prototype, "OnDragGhostRef", 1);
var Nd = 5,
  He = class extends xe.Component {
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
    m_divRef = xe.createRef();
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
      _n("ProcessDragMove", e, this.props.data);
      let [o, n] = Kf(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(o - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(n - (this.m_DragInfo.startClientY ?? 0), 2) >=
          Nd * Nd &&
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
      _n("ResetDragState", this.props.data),
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
      _n("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
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
      _n("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      _n(
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
          children: m,
          ...g
        } = this.props,
        b = {},
        S = c || "DialogDraggable";
      return (
        this.m_DragInfo.bStarted
          ? ((S = h(S, p || "DraggedOut")),
            n && (b = { onDragEnd: this.OnHTMLDragEnd }))
          : n
            ? (b = { onDragStart: this.OnHTMLDragStart })
            : (b = {
                onMouseDown: this.OnMouseDown,
                onTouchStart: this.OnTouchStart,
              }),
        (0, Se.jsx)("div", {
          ref: this.m_divRef,
          className: S,
          ...b,
          ...g,
          draggable: n,
          children: m,
        })
      );
    }
    renderDropGhost() {
      return this.props.fnRenderDropGhost
        ? this.props.fnRenderDropGhost()
        : (0, Se.jsx)(br, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, Se.jsx)(hr, {
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
d([_], He.prototype, "ProcessDragMove", 1),
  d([_], He.prototype, "OnMouseDown", 1),
  d([_], He.prototype, "OnMouseUp", 1),
  d([_], He.prototype, "OnTouchStart", 1),
  d([_], He.prototype, "OnTouchEnd", 1),
  d([Cs], He.prototype, "ResetDragState", 1),
  d([_], He.prototype, "OnHTMLDragStart", 1),
  d([_], He.prototype, "OnHTMLDrag", 1),
  d([_], He.prototype, "OnHTMLDragEnd", 1);
var br = class extends xe.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, Se.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
d([_], br.prototype, "OnRef", 1);
var hr = class extends xe.Component {
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
      return (0, Se.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      o = Sn(
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
    return (0, Se.jsx)("div", {
      className: r,
      style: e,
      children: (0, Se.jsx)("div", { ref: this.OnRef, style: n }),
    });
  }
};
d([_], hr.prototype, "OnRef", 1);
var sa = class extends xe.Component {
    m_divRef = xe.createRef();
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
      return aa(e, o, this.GetClientRect());
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
          ...m
        } = this.props,
        g = h(
          a || "DialogDropRegion",
          this.state.bDraggableActive && (s || "Active"),
        );
      return (0, Se.jsxs)(At, {
        ref: Dn(p, this.m_divRef),
        className: g,
        ...m,
        focusable: c === void 0 ? !!m.onClick : c,
        children: [this.state.dropGhost, l],
      });
    }
  },
  vr = class extends sa {
    BDraggableInRegion(e, o, n) {
      let r = this.GetClientRect();
      return r
        ? e >= r.left && e <= r.right && o >= r.top - 20 && o <= r.bottom + 20
        : !1;
    }
  };
var V = u(M());
var ut = {
  "duration-app-launch": "800ms",
  PagedSettingsDialog: "fb--znpA9iY-",
  PagedSettingsDialog_PageContent: "Qe9z1N90-mU-",
  NoPadding: "_25gxUTuvrIE-",
  PagedSettingsDialog_PageListColumn: "ByZLSOXEJi8-",
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
};
var H = u(f()),
  eb = "separator",
  tb = "spacer",
  gn = class {
    constructor() {
      gt(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
d([_t], gn.prototype, "m_flPageListScrollTop", 2),
  d([_t], gn.prototype, "m_flPageScrollTop", 2);
var oo = class oo {
  static s_Instance;
  static Get() {
    return oo.s_Instance || (oo.s_Instance = new oo()), oo.s_Instance;
  }
  constructor() {
    gt(this);
  }
  m_setPagedSettingsInstances = new Set();
};
d([_t], oo.prototype, "m_setPagedSettingsInstances", 2);
var Cr = oo;
function ob(t) {
  let {
    stylesheet: e,
    pages: o,
    iActivePage: n,
    onPageSelected: r,
    PageListItemComponent: i = nb,
    PageListSeparatorComponent: a = rb,
  } = t;
  return o.map((s, l) => {
    let c = l === n;
    if (s === eb) {
      let p = l === n + 1 || l === n - 1;
      return (0, H.jsx)(a, { bTransparent: p }, l);
    } else {
      if (s === tb)
        return (0, H.jsx)("div", { className: ut.PageListSpacer }, l);
      {
        if (s.visible === !1) return null;
        let p = s.identifier || s.title || l.toString(),
          m = () => r(l, s);
        return (0, H.jsx)(
          i,
          {
            className: h(e.PagedSettingsDialog_PageListItem, { [e.Active]: c }),
            onClick: m,
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
function nb(t) {
  let { title: e, icon: o, active: n, className: r, onClick: i, ...a } = t;
  return (0, H.jsxs)("div", {
    className: r,
    onClick: i,
    children: [
      o
        ? (0, H.jsx)("div", { className: ut.PageListItem_Icon, children: o })
        : null,
      (0, H.jsx)("div", {
        className: ut.PageListItem_Title,
        ...a,
        children: e,
      }),
    ],
  });
}
var Od = V.forwardRef(function (e, o) {
  let { activePage: n, style: r, stylesheet: i } = e,
    a = n?.padding ?? "standard";
  return (0, H.jsxs)(Ki, {
    style: r,
    className: h(
      i?.PagedSettingsDialog_PageContent,
      n?.pageClassName,
      a == "none" && i?.NoPadding,
    ),
    refElem: o,
    children: [
      n?.header,
      !n?.hideTitle && (0, H.jsx)(dr, { children: n?.title }),
      (0, H.jsx)(pe, { children: n?.content }),
    ],
  });
});
function rb(t) {
  return (0, H.jsx)("div", {
    className: h(ut.PageListSeparator, { [ut.Transparent]: t.bTransparent }),
  });
}
var Ud = V.forwardRef(function (e, o) {
  let { stylesheet: n = ut, pages: r, onPageRequested: i } = e,
    a = e.page == null,
    [s, l] = V.useState(() =>
      e.startingPage === void 0
        ? -1
        : r.findIndex(
            (_e) => typeof _e == "object" && _e.identifier === e.startingPage,
          ),
    ),
    c = s;
  a ||
    (c = r.findIndex(
      (_e) => typeof _e == "object" && _e.identifier === e.page,
    )),
    (c < 0 || c >= r.length) && (c = 0);
  let p = null;
  typeof r[c] == "object" && (p = r[c]);
  let m = V.useRef(null),
    g = V.useCallback(() => m.current?.TakeFocus(), [m]),
    [b, S] = V.useState(!1),
    k = (_e) => {
      _e && S(!0);
    },
    B = V.useCallback(
      (_e, lo) => {
        S(!0),
          ye.PlayNavSound(15),
          i && i(lo.identifier),
          lo.click ? lo.click() : a && l(_e);
      },
      [a, i],
    ),
    X = V.useRef(null),
    ne = (_e) => {
      _e.detail.button == 1 && X.current?.TakeFocus(_e.detail.button);
    },
    ie = e.showTitle ?? !0,
    we = h("DialogContentTransition", n.PagedSettingDialog_ContentColumn);
  V.useEffect(() => {
    e.bAutoFocusPageContent && X.current?.TakeFocus();
  }, []);
  let { refForPageList: ge, refForPage: ae } = sb();
  return (0, H.jsxs)(U, {
    className: h(n.PagedSettingsDialog, e.className),
    ref: o,
    children: [
      (0, H.jsxs)(U, {
        className: h(
          n.PagedSettingsDialog_PageListColumn,
          e.hideList && ut.Hidden,
          "PageListColumn",
        ),
        navRef: m,
        onButtonDown: ne,
        onFocusWithin: k,
        children: [
          ie &&
            (0, H.jsx)("div", {
              className: n.PagedSettingsDialog_Title,
              children: e.title,
            }),
          e.topControls && (0, H.jsx)("div", { children: e.topControls }),
          (0, H.jsx)(U, {
            className: h(
              n.PagedSettingsDialog_PageList,
              e.disablePageListScrolling &&
                n.PagedSettingsDialog_PageList_DisableScrolling,
              ie && n.PagedSettingsDialog_PageList_ShowTitle,
              e.bNoHeaderPadding &&
                n.PageSettingsDialog_PageList_NoHeaderPadding,
            ),
            navEntryPreferPosition: 4,
            ref: ge,
            children: (0, H.jsx)(ob, {
              stylesheet: n,
              pages: r,
              iActivePage: c,
              onPageSelected: B,
              PageListItemComponent: e.PageListItemComponent,
              PageListSeparatorComponent: e.PageListSeparatorComponent,
            }),
          }),
          e.bottomControls && (0, H.jsx)("div", { children: e.bottomControls }),
        ],
      }),
      (0, H.jsxs)(U, {
        className: we,
        onCancelButton: b ? g : void 0,
        navRef: X,
        children: [
          e.toggleHideList &&
            (0, H.jsx)(ab, {
              hideList: e.hideList,
              toggleHideList: e.toggleHideList,
            }),
          e.renderPageContent
            ? e.renderPageContent(p, ae, Od)
            : (0, H.jsx)(Od, { ref: ae, activePage: p, stylesheet: n }),
        ],
      }),
    ],
  });
});
var ib = V.createContext(!1);
var vk = V.memo(function (e) {
  let {
      isActive: o,
      refForPage: n,
      page: r,
      PageComponent: i,
      stylesheet: a,
    } = e,
    s = V.useRef(!1);
  if (!o && !s.current) return null;
  s.current = !0;
  let l = o ? void 0 : { display: "none" };
  return (0, H.jsx)(ib.Provider, {
    value: o,
    children: (0, H.jsx)(i, { ref: n, style: l, activePage: r, stylesheet: a }),
  });
});
function ab(t) {
  let { hideList: e, toggleHideList: o } = t;
  return (0, H.jsx)("div", {
    className: h(ut.HidePageListButton, e && ut.ListHidden),
    onClick: o,
    children: e
      ? (0, H.jsx)(Vr, { direction: "right" })
      : (0, H.jsx)(Vr, { direction: "left" }),
  });
}
function sb() {
  let t = V.useMemo(() => new gn(), []);
  V.useEffect(
    () => (
      Cr.Get().m_setPagedSettingsInstances.add(t),
      () => {
        Cr.Get().m_setPagedSettingsInstances.delete(t);
      }
    ),
    [t],
  );
  let e = V.useCallback(
      (c) => (t.m_flPageListScrollTop = c.currentTarget.scrollTop),
      [t],
    ),
    o = V.useCallback(
      (c) => (t.m_flPageScrollTop = c.currentTarget.scrollTop),
      [t],
    ),
    n = Ir("scroll", e),
    r = Ir("scroll", o),
    i = V.useCallback(
      (c) => (t.m_flPageListScrollTop = c?.scrollTop ?? 0),
      [t],
    ),
    a = V.useCallback((c) => (t.m_flPageScrollTop = c?.scrollTop ?? 0), [t]),
    s = De(n, i),
    l = De(r, a);
  return { refForPageList: s, refForPage: l };
}
var Rr = u(M());
var Wd = u(f()),
  Ut = class extends Rr.Component {
    m_refTextArea = Rr.createRef();
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
      return (0, Wd.jsx)(bs, {
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
d([_], Ut.prototype, "InternalOnInput", 1),
  d([_], Ut.prototype, "OnKeyUp", 1),
  d([_], Ut.prototype, "OnBlur", 1),
  d([_], Ut.prototype, "OnClick", 1),
  d([_], Ut.prototype, "OnPaste", 1),
  d([_], Ut.prototype, "OnCut", 1);
var pt = u(M());
var T = {
  "duration-app-launch": "800ms",
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
var bn = u(M());
var ua = u(M());
var ca = u(f());
async function lb(t, e, o) {
  let n = To(e),
    r = o?.bForcePopOut || Vd(n);
  ue(
    !(r && o?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let i = !r && o?.bNeverPopOut === !0,
    a = Vd(n) || (!i && zd(n, e)),
    s = r && o?.popupWidth && o?.popupHeight,
    l;
  if (a && !s) {
    let p = ua.cloneElement(t, { closeModal: () => {} });
    l = await cb(n, p, o?.promiseRenderComplete);
  }
  let c = l && l.height / e.innerHeight < 0.9 && l.width / e.innerWidth < 0.8;
  if (i || (!r && c)) return Hd(t, e, void 0, { fnOnClose: o?.fnOnClose });
  {
    let p = {
        strTitle: o?.strTitle || x("#Dialog_DefaultWindowTitle"),
        fnOnClose: o?.fnOnClose,
        popupWidth: o?.popupWidth || l?.width,
        popupHeight: o?.popupHeight || l?.height,
        bHideMainWindowForPopouts: o?.bHideMainWindowForPopouts,
        className: o?.className,
      },
      m = { bHideActions: o?.bHideActionIcons },
      g = o?.browserContext || e.browserInfo;
    return Hd(t, e, p.strTitle, p, g, m, n);
  }
}
async function Gd(t, e, o) {
  return lb(t, e, { bHideMainWindowForPopouts: !0, ...o });
}
function Hd(t, e, o, n, r, i, a) {
  let s,
    l,
    c = t.props.closeModal,
    p = () => {
      l && l.Close(), c && c(), n?.fnOnClose && n.fnOnClose();
    },
    m = () => {
      s && s.Close(), p();
    },
    g = ua.cloneElement(t, { closeModal: m });
  if (((a = a || To(e)), zd(a, e) && n && o)) {
    if (n.bHideMainWindowForPopouts) {
      let S = (0, ca.jsx)(Jt, {
        className: "Hidden",
        onEscKeypress: g.props.bDisableBackgroundDismiss ? void 0 : m,
        children: (0, ca.jsx)("div", {}),
      });
      l = a.ShowModal(S);
    }
    let b = { ...n, fnOnClose: p, browserContext: r };
    s = a.ShowLegacyPopupModal(o, g, b, i);
  } else s = a.ShowModal(g);
  return s;
}
function zd(t, e) {
  return (t = t || To(e || window)), Be.USE_POPUPS && t.BUsePopups();
}
function Vd(t) {
  return t.BOnlyPopups && t.BOnlyPopups();
}
async function cb(t, e, o) {
  return new Promise((n, r) => {
    t.RequestModalMeasure(e, n, o);
  });
}
var pa = u(M());
var da = u(f()),
  jd = xt((t) => {
    let { onCancel: e, closeModal: o, bOKDisabled: n, onOK: r } = t,
      i = Ke();
    ue(
      o || e,
      `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${t.className} ${t.modalClassName}`,
    );
    let a = pa.useCallback(() => {
        (e && e()) || (o && o());
      }, [e, o]),
      s = pa.useCallback(async () => {
        n || (r && (await r()), o && o());
      }, [n, r, o]);
    return (0, da.jsx)(Jt, {
      onEscKeypress: a,
      className: t.modalClassName,
      bDestructiveWarning: t.bDestructiveWarning,
      bDisableBackgroundDismiss: t.bDisableBackgroundDismiss,
      bHideCloseIcon: t.bHideCloseIcon,
      children: (0, da.jsx)(Dd, {
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
var me = u(f());
var Ao = class extends bn.Component {
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
      m = n || x("#Button_Close"),
      g = (0, me.jsx)(yd, {
        bOKDisabled: this.props.bOKDisabled,
        bCancelDisabled: this.props.bCancelDisabled,
        strOKText: n,
        onCancel: this.Cancel(this.props.onCancel),
        strCancelText: r,
      });
    return (
      l
        ? (g = (0, me.jsx)(un, { children: m }))
        : s &&
          (g = (0, me.jsx)(Td, {
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
      (0, me.jsxs)(jd, {
        ...p,
        children: [
          (0, me.jsxs)(dr, {
            children: [
              " ",
              e || (0, me.jsx)(me.Fragment, { children: " " }),
              " ",
            ],
          }),
          (0, me.jsxs)(Md, {
            onCancelButton: this.Cancel(i || this.props.onCancel),
            children: [
              (0, me.jsxs)(wd, { children: [o, c] }),
              (0, me.jsx)(Sd, { children: g }),
            ],
          }),
        ],
      })
    );
  }
};
Ao = d([xt], Ao);
var Pr = class extends bn.Component {
  render() {
    let e = {
      strTitle: x("#Error_FailureNotice"),
      strDescription: x("#Error_GenericFailureDescription"),
      bAlertDialog: !0,
      bDestructiveWarning: !0,
      onOK: () => {},
      onCancel: () => {},
      ...this.props,
    };
    return (0, me.jsx)(Ao, { ...e });
  }
};
Pr = d([xt], Pr);
var fn = class extends bn.Component {
  render() {
    let e = {
      onOK: () => {},
      onCancel: () => {},
      bAlertDialog: !0,
      ...this.props,
    };
    return (
      (e.strDescription = (0, me.jsxs)("span", {
        style: { whiteSpace: "pre-line" },
        children: [" ", e.strDescription, " "],
      })),
      (0, me.jsx)(Ao, { ...e })
    );
  }
};
fn = d([xt], fn);
function qd(t, e, o) {
  Gd((0, me.jsx)(fn, { strTitle: t, strDescription: e }), o);
}
var le = u(f()),
  xo = pt.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        icon: i,
        children: a,
        childrenLayout: s,
        inlineWrap: l,
        childrenContainerWidth: c,
        spacingBetweenLabelAndChild: p,
        padding: m,
        disabled: g,
        bottomSeparator: b,
        className: S,
        highlightOnFocus: k,
        indentLevel: B,
        verticalAlignment: X,
        iconLocation: ne,
        tooltip: ie,
        explainer: we,
        explainerTitle: ge,
        ...ae
      } = e,
      _e = Ke(),
      lo = s ?? "inline",
      Ea = ne ?? "front",
      La = Ea == "front" && !!i,
      Ba = Ea == "before-children" && !!i,
      Tr = lo == "inline" && !!a,
      Ia = lo == "below" && !!a,
      Bm = l ?? (_e ? "shift-children-below" : "keep-inline"),
      kr = !!(ae.onClick || ae.onActivate || ae.focusable),
      Fa = (i != null && La) || n != null || (Tr && a != null),
      Na = c ?? "min",
      Im = p ?? "standard",
      Oa = m ?? "standard",
      Ua = b ?? "standard",
      Fm = k ?? !0,
      Nm = B ?? 0,
      Om = X ?? "center",
      Um = ub(ge ?? n, we),
      Ar = pt.useRef(),
      Wm = De(Ar, e.navRef),
      Hm = pt.useCallback(
        (xr) => {
          Ar.current?.TakeFocus(), xr.preventDefault();
        },
        [Ar],
      );
    return (0, le.jsxs)(U, {
      focusable: kr,
      noFocusRing: !0,
      scrollIntoViewWhenChildFocused: !0,
      onActivate: (xr) => ae.onClick?.(xr),
      ref: o,
      onMouseDown: kr ? void 0 : Hm,
      ...ae,
      ...Um,
      navRef: Wm,
      className: h(
        S,
        T.Field,
        g && T.Disabled,
        Fa && T.WithFirstRow,
        Tr && T.WithChildrenInline,
        Ia && T.WithChildrenBelow,
        Om == "center" && T.VerticalAlignCenter,
        Bm == "shift-children-below" && T.InlineWrapShiftsChildrenBelow,
        !!r && T.WithDescription,
        Ua == "standard" && T.WithBottomSeparatorStandard,
        Ua == "thick" && T.WithBottomSeparatorThick,
        Na == "fixed" && T.ChildrenWidthFixed,
        Na == "max" && T.ChildrenWidthGrow,
        Im == "standard" && T.ExtraPaddingOnChildrenBelow,
        Oa == "standard" && T.StandardPadding,
        Oa == "compact" && T.CompactPadding,
        kr && T.Clickable,
        Fm && T.HighlightOnFocus,
      ),
      style: { "--indent-level": Nm },
      children: [
        Fa &&
          (0, le.jsxs)("div", {
            className: T.FieldLabelRow,
            children: [
              (0, le.jsxs)("div", {
                className: T.FieldLabel,
                children: [
                  La &&
                    (0, le.jsx)("div", {
                      className: h(T.FieldIcon, T.Front),
                      children: i,
                    }),
                  n,
                  ie && (0, le.jsx)(it, { tooltip: ie }),
                ],
              }),
              Tr &&
                (0, le.jsxs)("div", {
                  className: T.FieldChildrenWithIcon,
                  children: [
                    Ba &&
                      (0, le.jsx)("div", {
                        className: h(T.FieldIcon, T.BeforeChildren),
                        children: i,
                      }),
                    (0, le.jsx)("div", {
                      className: T.FieldChildrenInner,
                      children: a,
                    }),
                  ],
                }),
            ],
          }),
        Ia &&
          (0, le.jsxs)("div", {
            className: T.FieldChildrenWithIcon,
            children: [
              Ba &&
                (0, le.jsx)("div", {
                  className: h(T.FieldIcon, T.BeforeChildren),
                  children: i,
                }),
              (0, le.jsx)("div", {
                className: T.FieldChildrenInner,
                children: a,
              }),
            ],
          }),
        r && (0, le.jsx)("div", { className: T.FieldDescription, children: r }),
      ],
    });
  });
function ub(t, e) {
  let o = Re(),
    n = pt.useCallback(() => {
      qd(t, e, o.ownerWindow ?? window);
    }, [o, t, e]);
  if (e == null) return {};
  let r = x("#Field_MoreInfo_Action");
  return { onOptionsButton: n, onOptionsActionDescription: r };
}
var sA = pt.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        explainer: i,
        icon: a,
        layout: s,
        disabled: l,
        onActivate: c,
        bottomSeparator: p,
        highlightOnFocus: m,
        childrenContainerWidth: g,
        padding: b,
        inlineWrap: S,
        fieldClassName: k,
        fieldChildren: B,
        ...X
      } = e,
      { refWithValue: ne, refForElement: ie } = Br(o);
    return (0, le.jsxs)(xo, {
      label: n,
      description: r,
      icon: a,
      bottomSeparator: p,
      highlightOnFocus: m,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: g ?? "min",
      onMouseDown: (ge) => {
        ne.current?.focus(), ge.preventDefault();
      },
      padding: b,
      inlineWrap: S,
      explainer: i,
      className: k,
      disabled: l,
      onActivate: l ? c : void 0,
      children: [(0, le.jsx)(Ue, { ...X, disabled: l, ref: ie }), B],
    });
  }),
  Yd = pt.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        icon: i,
        layout: a,
        bottomSeparator: s,
        highlightOnFocus: l,
        ...c
      } = e,
      { refWithValue: p, refForElement: m } = Br(o);
    return (0, le.jsx)(xo, {
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
      children: (0, le.jsx)(eo, { ...c, ref: m }),
    });
  });
var rm = u(M());
var oe = u(M());
var Ee = u(M());
var ma = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function _a(t, e) {
  return t.classList
    ? !!e && t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function ga(t, e) {
  t.classList
    ? t.classList.add(e)
    : _a(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function Xd(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function fa(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
      ? (t.className = Xd(t.className, e))
      : t.setAttribute(
          "class",
          Xd((t.className && t.className.baseVal) || "", e),
        );
}
var Ca = u(M());
var hn = u(M()),
  vn = u(Wt());
var ba = { disabled: !1 };
var Qd = u(M()),
  Eo = Qd.default.createContext(null);
var Sr = function (e) {
  return e.scrollTop;
};
var Cn = "unmounted",
  no = "exited",
  ro = "entering",
  Bo = "entered",
  ha = "exiting",
  Mt = (function (t) {
    ho(e, t);
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
            ? ((l = no), (i.appearStatus = ro))
            : (l = Bo)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = Cn)
            : (l = no),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    e.getDerivedStateFromProps = function (r, i) {
      var a = r.in;
      return a && i.status === Cn ? { status: no } : null;
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
            ? a !== ro && a !== Bo && (i = ro)
            : (a === ro || a === Bo) && (i = ha);
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
          if ((this.cancelNextCallback(), i === ro)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : vn.default.findDOMNode(this);
              a && Sr(a);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === no &&
            this.setState({ status: Cn });
      }),
      (o.performEnter = function (r) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : r,
          l = this.props.nodeRef ? [s] : [vn.default.findDOMNode(this), s],
          c = l[0],
          p = l[1],
          m = this.getTimeouts(),
          g = s ? m.appear : m.enter;
        if ((!r && !a) || ba.disabled) {
          this.safeSetState({ status: Bo }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, p),
          this.safeSetState({ status: ro }, function () {
            i.props.onEntering(c, p),
              i.onTransitionEnd(g, function () {
                i.safeSetState({ status: Bo }, function () {
                  i.props.onEntered(c, p);
                });
              });
          });
      }),
      (o.performExit = function () {
        var r = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : vn.default.findDOMNode(this);
        if (!i || ba.disabled) {
          this.safeSetState({ status: no }, function () {
            r.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: ha }, function () {
            r.props.onExiting(s),
              r.onTransitionEnd(a.exit, function () {
                r.safeSetState({ status: no }, function () {
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
            : vn.default.findDOMNode(this),
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
        if (r === Cn) return null;
        var i = this.props,
          a = i.children,
          s = i.in,
          l = i.mountOnEnter,
          c = i.unmountOnExit,
          p = i.appear,
          m = i.enter,
          g = i.exit,
          b = i.timeout,
          S = i.addEndListener,
          k = i.onEnter,
          B = i.onEntering,
          X = i.onEntered,
          ne = i.onExit,
          ie = i.onExiting,
          we = i.onExited,
          ge = i.nodeRef,
          ae = bo(i, [
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
        return hn.default.createElement(
          Eo.Provider,
          { value: null },
          typeof a == "function"
            ? a(r, ae)
            : hn.default.cloneElement(hn.default.Children.only(a), ae),
        );
      }),
      e
    );
  })(hn.default.Component);
Mt.contextType = Eo;
Mt.propTypes = {};
function Lo() {}
Mt.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Lo,
  onEntering: Lo,
  onEntered: Lo,
  onExit: Lo,
  onExiting: Lo,
  onExited: Lo,
};
Mt.UNMOUNTED = Cn;
Mt.EXITED = no;
Mt.ENTERING = ro;
Mt.ENTERED = Bo;
Mt.EXITING = ha;
var $d = Mt;
var pb = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return ga(e, n);
      })
    );
  },
  va = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return fa(e, n);
      })
    );
  },
  Ra = (function (t) {
    ho(e, t);
    function e() {
      for (var n, r = arguments.length, i = new Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      return (
        (n = t.call.apply(t, [this].concat(i)) || this),
        (n.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (n.onEnter = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            m = c[1];
          n.removeClasses(p, "exit"),
            n.addClass(p, m ? "appear" : "enter", "base"),
            n.props.onEnter && n.props.onEnter(s, l);
        }),
        (n.onEntering = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            m = c[1],
            g = m ? "appear" : "enter";
          n.addClass(p, g, "active"),
            n.props.onEntering && n.props.onEntering(s, l);
        }),
        (n.onEntered = function (s, l) {
          var c = n.resolveArguments(s, l),
            p = c[0],
            m = c[1],
            g = m ? "appear" : "enter";
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
            m = c ? "" + p + s : l[s],
            g = c ? m + "-active" : l[s + "Active"],
            b = c ? m + "-done" : l[s + "Done"];
          return { baseClassName: m, activeClassName: g, doneClassName: b };
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
          a === "active" && r && Sr(r),
          s && ((this.appliedClasses[i][a] = s), pb(r, s));
      }),
      (o.removeClasses = function (r, i) {
        var a = this.appliedClasses[i],
          s = a.base,
          l = a.active,
          c = a.done;
        (this.appliedClasses[i] = {}),
          s && va(r, s),
          l && va(r, l),
          c && va(r, c);
      }),
      (o.render = function () {
        var r = this.props,
          i = r.classNames,
          a = bo(r, ["classNames"]);
        return Ca.default.createElement(
          $d,
          Nn({}, a, {
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
  })(Ca.default.Component);
Ra.defaultProps = { classNames: "" };
Ra.propTypes = {};
var Pa = Ra;
function Jd(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
var Rn = u(M());
var Ve = u(M());
function wr(t, e) {
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
function db(t, e) {
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
function io(t, e, o) {
  return o[e] != null ? o[e] : t.props[e];
}
function Zd(t, e) {
  return wr(t.children, function (o) {
    return (0, Ve.cloneElement)(o, {
      onExited: e.bind(null, o),
      in: !0,
      appear: io(o, "appear", t),
      enter: io(o, "enter", t),
      exit: io(o, "exit", t),
    });
  });
}
function Kd(t, e, o) {
  var n = wr(t.children),
    r = db(e, n);
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
              exit: io(a, "exit", t),
              enter: io(a, "enter", t),
            }))
          : !l && s && !p
            ? (r[i] = (0, Ve.cloneElement)(a, { in: !1 }))
            : l &&
              s &&
              (0, Ve.isValidElement)(c) &&
              (r[i] = (0, Ve.cloneElement)(a, {
                onExited: o.bind(null, a),
                in: c.props.in,
                exit: io(a, "exit", t),
                enter: io(a, "enter", t),
              }));
      }
    }),
    r
  );
}
var mb =
    Object.values ||
    function (t) {
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    },
  _b = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  Sa = (function (t) {
    ho(e, t);
    function e(n, r) {
      var i;
      i = t.call(this, n, r) || this;
      var a = i.handleExited.bind(Jd(i));
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
        return { children: l ? Zd(r, s) : Kd(r, a, s), firstRender: !1 };
      }),
      (o.handleExited = function (r, i) {
        var a = wr(this.props.children);
        r.key in a ||
          (r.props.onExited && r.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = Nn({}, s.children);
              return delete l[r.key], { children: l };
            }));
      }),
      (o.render = function () {
        var r = this.props,
          i = r.component,
          a = r.childFactory,
          s = bo(r, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = mb(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Rn.default.createElement(Eo.Provider, { value: l }, c)
            : Rn.default.createElement(
                Eo.Provider,
                { value: l },
                Rn.default.createElement(i, s, c),
              )
        );
      }),
      e
    );
  })(Rn.default.Component);
Sa.propTypes = {};
Sa.defaultProps = _b;
var wa = Sa;
var Io = u(f());
function em(t) {
  let {
      childrenKey: e,
      childrenClasses: o,
      children: n,
      directionClass: r,
      animate: i = !0,
    } = t,
    a = h(ma.TransitionGroup, r);
  return (0, Io.jsx)(wa, {
    className: a,
    appear: !1,
    enter: i,
    exit: i,
    children: (0, Io.jsx)(gb, { childrenClasses: o, children: n }, e),
  });
}
function gb(t) {
  let { sizeClass: e, children: o, childrenClasses: n, ...r } = t,
    [i, a, s, l] = fb(),
    c = Ee.useRef(!0),
    p = Ee.useCallback(() => c.current, [c]),
    m = Ee.useCallback(() => {
      (c.current = !0), s();
    }, [s]),
    g = Ee.useCallback(() => {
      (c.current = !1), l();
    }, [l]),
    b = 1e4,
    S = t.childrenClasses,
    k = {
      enter: S.enterStart,
      enterActive: S.enterEnd,
      exit: S.exitStart,
      exitActive: S.exitEnd,
    };
  return i.current && !i.current.ownerDocument.defaultView
    ? null
    : (0, Io.jsx)(Pa, {
        nodeRef: i,
        classNames: k,
        in: !0,
        timeout: b,
        addEndListener: a,
        onEntering: m,
        onExiting: g,
        ...r,
        children: (0, Io.jsx)("div", {
          ref: i,
          className: h(ma.ContentWrapper, e, S.base),
          children: (0, Io.jsx)(U, {
            className: e,
            fnCanTakeFocus: p,
            children: t.children,
          }),
        }),
      });
}
function fb() {
  let t = Ee.useRef(null),
    e = Ee.useRef();
  Ee.useLayoutEffect(() => {
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
  let o = Ee.useCallback(
      (i) => {
        if (!e.current) {
          i();
          return;
        }
        e.current.fnDone = i;
      },
      [e],
    ),
    n = Ee.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    r = Ee.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [t, o, n, r];
}
function tm(t, e) {
  return {
    base: e,
    enterStart: t.Enter,
    enterEnd: t.EnterActive,
    exitStart: t.Exit,
    exitEnd: t.ExitActive,
  };
}
function om(t, e) {
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
var Dt = {
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
var Qe = u(f()),
  nm = oe.createContext(null);
function bb(t) {
  let e = oe.useContext(nm),
    n = Rs().IN_VR,
    { title: r, icon: i, active: a, ...s } = t;
  return (0, Qe.jsxs)(U, {
    preferredFocus: a,
    navRef: a && e ? e : void 0,
    noFocusRing: !0,
    onActivate: n ? void 0 : s.onClick,
    onFocus: n ? void 0 : s.onClick,
    ...s,
    children: [
      i && (0, Qe.jsx)("div", { className: Dt.PageListItem_Icon, children: i }),
      (0, Qe.jsx)("div", { className: Dt.PageListItem_Title, children: r }),
    ],
  });
}
function hb(t) {
  return (0, Qe.jsx)("div", { className: Dt.Separator });
}
var vb = oe.forwardRef(function (e, o) {
  let { page: n, bAutoFocusPageContent: r, showTitle: i = !1 } = e,
    a = oe.useRef(null),
    s = oe.useRef(!0);
  oe.useEffect(() => {
    (!s.current || !r) && a.current?.TakeFocus(), (s.current = !1);
  }, [n, r]);
  let l = (c, p, m) =>
    (0, Qe.jsx)(Cb, {
      pages: e.pages,
      activePage: c,
      refForPage: p,
      PageComponent: m,
    });
  return (0, Qe.jsx)(nm.Provider, {
    value: a,
    children: (0, Qe.jsx)(Ud, {
      ...e,
      stylesheet: Dt,
      showTitle: i,
      PageListItemComponent: bb,
      PageListSeparatorComponent: hb,
      renderPageContent: e.renderPageContent || l,
    }),
  });
});
function Cb(t) {
  let { pages: e, activePage: o, refForPage: n, PageComponent: r } = t,
    i = oe.useMemo(() => e.findIndex((c) => c == o), [e, o]),
    a = Rb(i),
    s = Pb(o?.identifier, n),
    l = om(Dt, a);
  return (0, Qe.jsx)(em, {
    childrenKey: o?.identifier,
    childrenClasses: tm(Dt, Dt.ContentTransition),
    directionClass: l,
    animate: a != 0,
    children:
      o &&
      (0, Qe.jsx)(
        r,
        { ref: s(o.identifier), stylesheet: Dt, activePage: o },
        o.identifier,
      ),
  });
}
function Rb(t) {
  let e = oe.useRef(t),
    o = oe.useRef(0),
    n = e.current;
  if (n == t) return o.current;
  let r = 0;
  return (
    n < t ? (r = 4) : n > t && (r = 3), (e.current = t), (o.current = r), r
  );
}
function Pb(t, e) {
  let o = oe.useMemo(() => new Map(), []),
    n = oe.useRef();
  n.current = t;
  let r = oe.useRef();
  r.current = e;
  let i = oe.useCallback(
    (a) => (s) => {
      o.set(a, s), a === n.current && Ht(r.current, s);
    },
    [o],
  );
  return (
    oe.useEffect(() => (Ht(e, t && o.get(t)), () => Ht(e, void 0)), [o, t, e]),
    i
  );
}
var im = u(f()),
  cx = rm.forwardRef(function (e, o) {
    return (0, im.jsx)(mo, {
      noFocusRing: !0,
      ...e,
      ref: o,
      className: h(T.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var lm = u(M());
var sm = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var Le = u(f());
function cm(t, e) {
  for (let o of t.options)
    if ((St(o) && o.data === e) || (ct(o) && cm(o, e))) return !0;
  return !1;
}
function Ma(t) {
  let e = (o) =>
    o?.map((n, r) =>
      to(n)
        ? (0, Le.jsx)(Vs, {}, r)
        : St(n)
          ? (0, Le.jsx)(
              fo,
              {
                onSelected: (i) => t.onValueSelected && t.onValueSelected(i, n),
                selected: t.selectedValue === n.data,
                children: (0, Le.jsx)(Le.Fragment, { children: n.label }),
              },
              r,
            )
          : ct(n)
            ? (0, Le.jsx)(
                Gs,
                {
                  label: n.label,
                  selectedWithin: cm(n, t.selectedValue),
                  children: e(n.options),
                },
                r,
              )
            : null,
    );
  return (0, Le.jsx)(Go, { onCancel: t.onCancel, children: e(t.rgOptions) });
}
var Sb = lm.forwardRef(function (e, o) {
  return (0, Le.jsx)(Ue, {
    className: h(sm.DropDownControlButton, e.className),
    focusable: e.focusable,
    disabled: e.disabled,
    onClick: e.onClick,
    tabIndex: e.tabIndex,
    ref: o,
    children: (0, Le.jsxs)("div", {
      className: T.DropDownControlButtonContents,
      children: [
        e.children,
        (0, Le.jsx)("div", { className: h(T.Spacer, "Spacer") }),
        (0, Le.jsx)(Fn, { direction: "down" }),
      ],
    }),
  });
});
var dt = u(M());
var um = "TW2ZQnLvgIc-";
var ao = u(f()),
  Dx = dt.forwardRef(function (e, o) {
    let { className: n, ...r } = e,
      i = dt.useRef(),
      a = De(o, i),
      [s, l] = dt.useState(!1),
      c = dt.useCallback(() => {
        l((p) => !p), window.setTimeout(() => i.current?.Focus(), 1);
      }, []);
    return (0, ao.jsx)(U, {
      className: n,
      onOptionsButton: c,
      onOptionsActionDescription: x(
        s ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, ao.jsx)(eo, {
        autoComplete: "off",
        ref: a,
        inlineControls: (0, ao.jsx)(Ue, {
          className: um,
          onPointerDown: c,
          onOKButton: c,
          children: s ? (0, ao.jsx)(Ys, {}) : (0, ao.jsx)(Xs, {}),
        }),
        ...r,
        type: s ? "text" : "password",
      }),
    });
  });
function Db(t) {
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
var yx = dt.forwardRef(function (e, o) {
  let { className: n, value: r, ...i } = e,
    a = r ?? "";
  return (0, ao.jsx)(Yd, {
    autoComplete: "off",
    value: a,
    ref: o,
    placeholder: "   .   .   .   ",
    ...i,
    onChange: (l) => {
      let c = l.target.value;
      if (Db(c)) i.onChange && i.onChange(l);
      else {
        l.target.value = a;
        return;
      }
    },
  });
});
var ve = u(M());
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
var G = u(f()),
  yb = 10,
  Tb = 1,
  kb = 0.01,
  Ab = 0.05,
  Zx = Cd(L["error-shake-duration"]);
function pm(t, e) {
  return e < 0 ? 0 : e > 1 ? 1 : t == 0 ? e : Math.round(e / t) * t;
}
function dm(t, e, o) {
  let n = t + o * (e - t);
  return Number.parseFloat(n.toFixed(10));
}
function ya(t, e, o) {
  return (o - t) / (e - t);
}
var ce = class extends ve.Component {
  m_refSlider = ve.createRef();
  m_refHandle = ve.createRef();
  m_navRefSlider = ve.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = as();
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
    return Math.abs(this.props.step ?? Tb);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      o = e > 0 ? e / this.range : kb;
    return Math.max(o, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : co(this.props.value, this.props.min, this.props.max);
    return ya(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return ya(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = co(0, this.props.min, this.props.max);
    return ya(this.props.min, this.props.max, e);
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
      r = Ha(n, 0, 2e3, 500, 250),
      i = Math.pow(2, Math.floor(n / r)),
      a = this.normalizedDpadStep * i,
      s = co(a, this.normalizedDpadStep, Ab) * o,
      l = pm(this.normalizedStep, this.normalizedClampedValue + s),
      c = dm(this.props.min, this.props.max, l);
    if (
      ((c = co(
        c,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      c != this.props.value)
    ) {
      let p = c > this.m_fLatestUserValue;
      ye.PlayNavSound(p ? 18 : 19),
        (this.m_fLatestUserValue = c),
        this.FireOnChange(c, 2);
    } else ye.PlayNavSound(25);
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
      n = pm(this.normalizedStep, o),
      r = dm(this.props.min, this.props.max, n),
      i = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((r = co(r, i, a)), r != this.props.value)) {
      let s = r > this.props.value,
        l = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !l) && ye.PlayNavSound(s ? 18 : 19),
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
            b = Math.floor(((r - i) / (a - i)) * 40);
          g != b && !p && (this.PlayHaptic(4), (p = !0));
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
          if (ls(this.m_vTouchStartPosition, o) >= yb) {
            let r = ss(this.m_vTouchStartPosition, o);
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
      ye.PlayNavSound(r ? 18 : 19);
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
    this.m_fZoom = ts(this.m_refSlider.current);
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
      ye.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let o = (0, G.jsx)(Go, {
        children: (0, G.jsx)(fo, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: x("#ResetToDefault"),
        }),
      });
      zo(o, e);
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
      m = p == "top-caret",
      g = !m,
      b = {};
    this.CanResetToDefault && (b[3] = x("#ResetToDefault"));
    let S = `${L.SliderHandle} SliderHandle`,
      k = `${L.SliderHandleContainer} SliderHandleContainer `;
    return (
      this.props.handleType == "verticalline"
        ? ((S = `${L.VerticalLineSliderHandle} SliderHandle`),
          (k = `${L.VerticalLineSliderHandleContainer} SliderHandleContainer `))
        : (this.props.handleType == "leftparen" ||
            this.props.handleType == "rightparen") &&
          ((S = h(
            L.ParenSliderHandle,
            this.props.handleType == "leftparen" ? L.Left : L.Right,
            "SliderHandle",
          )),
          (k = h(
            L.ParenSliderHandleContainer,
            this.props.handleType == "leftparen" ? L.Left : L.Right,
            "SliderHandleContainer",
          ))),
      (0, G.jsx)(ol, {
        noFocusRing: !0,
        className: h(
          L.SliderControlPanelGroup,
          "SliderControlPanelGroup",
          this.props.className,
        ),
        navRef: this.props.navRef,
        onMouseDown: (B) => this.OnMouseDown(B.nativeEvent),
        onTouchStart: (B) => this.OnTouchStart(B.nativeEvent),
        onOKActionDescription: this.props.disabled
          ? null
          : x("#Slider_AdjustSlider"),
        focusable: a,
        childFocusDisabled: this.props.disabled || !a,
        onContextMenu: this.OnContextMenu,
        onOKButton: this.props.disabled ? () => ye.PlayNavSound(25) : void 0,
        onSecondaryButton: this.CanResetToDefault
          ? this.ResetToDefault
          : void 0,
        onSecondaryActionDescription: this.CanResetToDefault
          ? x("#ResetToDefault")
          : void 0,
        actionDescriptionMap: b,
        children: (0, G.jsxs)(At, {
          className: h(
            L.SliderControlAndNotches,
            this.props.disabled && L.Disabled,
            c && L.WithDefaultValue,
            c && g && L.DefaultValueIsColorRange,
            c && g && p.side == "left" && L.DefaultValueColorLeft,
            c && g && p.side != "left" && L.DefaultValueColorRight,
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
          ref: Dn(this.m_refSlider, this.props.innerRef),
          navRef: this.m_navRefSlider,
          onGamepadDirection: this.OnGamepadDirection,
          onOKButton: this.BlurInnerSlider,
          onOKActionDescription: null,
          onCancelButton: this.BlurInnerSlider,
          onCancelActionDescription: x("#ActionButtonLabelDone"),
          children: [
            (0, G.jsxs)("div", {
              className: h(L.SliderControl, "SliderControl"),
              children: [
                (0, G.jsx)("div", {
                  className: h(
                    L.SliderTrack,
                    this.props.notchCount != null && o && L.SliderHasNotches,
                    { [L.SliderTrackDark]: this.props.trackTone === "dark" },
                    "SliderTrack",
                  ),
                }),
                c &&
                  m &&
                  (0, G.jsx)("div", {
                    className: L.DefaultValueTickContainer,
                    children: (0, G.jsx)("div", {
                      className: L.DefaultValueTick,
                      children: (0, G.jsx)(Fn, { direction: "down" }),
                    }),
                  }),
                this.validRange &&
                  this.props.value != null &&
                  !isNaN(this.props.value) &&
                  this.showHandle &&
                  (0, G.jsx)("div", {
                    className: k,
                    children: (0, G.jsxs)("div", {
                      className: S,
                      ref: this.m_refHandle,
                      children: [
                        this.props.handleType == "leftparen" &&
                          (0, G.jsx)(Qs, {}),
                        this.props.handleType == "rightparen" &&
                          (0, G.jsx)($s, {}),
                      ],
                    }),
                  }),
              ],
            }),
            (0, G.jsx)(xb, {
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
d([_], ce.prototype, "RecomputeSliderBounds", 1),
  d([_], ce.prototype, "SetDragMode", 1),
  d([_], ce.prototype, "OnGamepadDirection", 1),
  d([_], ce.prototype, "UpdateSliderValueForPosition", 1),
  d([_], ce.prototype, "OnWindowMouseMove", 1),
  d([_], ce.prototype, "OnWindowMouseUp", 1),
  d([_], ce.prototype, "OnMouseDown", 1),
  d([_], ce.prototype, "OnTouchStart", 1),
  d([_], ce.prototype, "OnWindowTouchMove", 1),
  d([_], ce.prototype, "OnWindowTouchEnd", 1),
  d([_], ce.prototype, "Complete", 1),
  d([_], ce.prototype, "BlurInnerSlider", 1),
  d([_], ce.prototype, "OnInnerSliderFocus", 1),
  d([_], ce.prototype, "OnInnerSliderBlur", 1),
  d([_], ce.prototype, "ResetToDefault", 1),
  d([_], ce.prototype, "OnContextMenu", 1);
function xb(t) {
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
    let p = a.find((m) => m.notchIndex == c);
    p && (s = !0),
      l.push(
        (0, G.jsx)(
          Eb,
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
  return (0, G.jsx)(U, { className: h(L.SliderNotchContainer), children: l });
}
function Eb(t) {
  let e = t.notchIndex <= (t.notchCount - 1) * t.sliderValue,
    o = t.notchCount <= 3 && !t.notchTicksVisible,
    n = o && t.notchIndex == 0,
    r = o && t.notchIndex == t.notchCount - 1,
    i = { ...t, alignLeftEnd: n, alignRightEnd: r, active: e };
  return (0, G.jsx)("div", {
    className: h(L.SliderNotch, o && L.AlignToEnds),
    children: t.renderNotch ? t.renderNotch(i) : (0, G.jsx)(Lb, { ...i }),
  });
}
function Lb(t) {
  let { alignLeftEnd: e, alignRightEnd: o, active: n } = t;
  return (0, G.jsxs)(G.Fragment, {
    children: [
      t.notchTicksVisible &&
        (0, G.jsx)("div", {
          className: h(L.SliderNotchTick, n && L.TickActive),
        }),
      t.notchLabel &&
        (0, G.jsx)("div", {
          className: h(
            L.SliderNotchLabel,
            e && L.AlignToLeft,
            o && L.AlignToRight,
          ),
          children: t.notchLabel?.label,
        }),
    ],
  });
}
var Kx = ve.forwardRef(function (e, o) {
  let {
    label: n,
    labelIndex: r,
    xOffset: i,
    onResize: a,
    OnMouseDown: s,
    OnTouchStart: l,
  } = e;
  ve.useEffect(() => {
    a(r);
  }, [a, r]);
  let c = ve.useCallback(
      (g) => {
        a(r);
      },
      [a, r],
    ),
    p = Hs(c),
    m = De(p, o);
  return (0, G.jsx)("div", {
    className: L.CompoundSliderSubSliderLabel,
    ref: m,
    onMouseDown: s,
    onTouchStart: l,
    style: { transform: `translateX(${i}px)` },
    children: (0, G.jsx)("div", {
      className: L.CompoundSliderSubSliderLabelInternal,
      children: n,
    }),
  });
});
var mm = u(M());
var so = u(f()),
  am = mm.forwardRef(function (e, o) {
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
          let m = !n;
          r(m), ye.PlayNavSound(m ? 16 : 17);
        }
      };
    return (0, so.jsxs)(At, {
      noFocusRing: !0,
      className: h(a, T.Toggle, { [T.Disabled]: !!i, [T.On]: !!n }),
      onClick: p,
      ref: o,
      navRef: c,
      focusable: s,
      children: [
        (0, so.jsx)("div", { className: T.ToggleRail }),
        (0, so.jsx)("div", { className: T.ToggleSwitch }),
        l,
      ],
    });
  }),
  Mr = class extends Nt {
    OnToggleChange(e) {
      !this.props.disabled && e !== this.checked && this.Toggle();
    }
    render() {
      let e = !!this.props.disabled,
        { actionDescriptions: o, gamepadEvents: n } = fs(this.props);
      return (0, so.jsx)(xo, {
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
        children: (0, so.jsx)(am, {
          onChange: this.OnToggleChange,
          value: this.checked,
          disabled: e,
          navRef: this.props.navRef,
        }),
      });
    }
  };
d([_], Mr.prototype, "OnToggleChange", 1);
var Ta = u(f());
function Da(t) {
  let { children: e, bCenterVertically: o, refElem: n, ...r } = t,
    i = h(
      T.GamepadDialogContent,
      "DialogContent _DialogLayout",
      t.className,
      o && " _DialogCenterVertically",
    ),
    { ref: a, navRef: s } = tl(),
    l = De(n, a);
  return (0, Ta.jsx)(U, {
    ...r,
    className: i,
    ref: l,
    navRef: s,
    children: (0, Ta.jsx)(U, {
      className: h(
        T.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
var Pn = u(M());
var Fo = u(f());
function _m() {
  return Pn.useMemo(() => Bb(), []);
}
function Bb() {
  return function (e) {
    let {
        refNavTree: o,
        className: n,
        active: r,
        children: i,
        modalKey: a,
      } = e,
      s = Pn.useRef(null);
    hs(s, r, !0);
    let l = De(s, o);
    return (0, Fo.jsx)(_s, {
      className: n,
      navTreeRef: l,
      modal: !0,
      enabled: r,
      navID: `ModalDialogOverlay_${a}`,
      children: i,
    });
  };
}
function Ib(t) {
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
  return (0, Fo.jsx)(U, {
    className: a,
    onCancelButton: o,
    focusableIfNoChildren: !0,
    children: (0, Fo.jsx)(Ln, { children: (0, Fo.jsx)(pe, { children: i }) }),
  });
}
function gm(t) {
  let e = Pn.useMemo(() => ({ ModalPosition: Ib }), []);
  return (0, Fo.jsx)(qi.Provider, { value: e, children: t.children });
}
var Dr = u(f());
function ka(t) {
  let e = _m(),
    o = fm.useMemo(() => ({ DropDownMenu: Ma, Content: Da }), []);
  return (0, Dr.jsx)(ko.Provider, {
    value: o,
    children: (0, Dr.jsx)(gm, {
      children: (0, Dr.jsx)(yo, {
        ...t,
        bUseDialogElement: !1,
        DialogWrapper: e,
        ContextMenuComponent: vd,
      }),
    }),
  });
}
var Aa = u(f());
function bm(t) {
  let e = Ke(),
    o = { bRenderOverlayAtRoot: !0, bUsePopups: !1, ...t };
  return e ? (0, Aa.jsx)(ka, { ...o }) : (0, Aa.jsx)(yo, { ...o });
}
var Em = u(Vt(), 1);
var hm = "/RDNVLABA.png";
var vm = "/QQGETVBA.png";
var Cm = "/MVIQJMBA.png";
var Rm = "/62SHH2CA.png";
var Pm = "Ksy4XAVZlM0-";
var Sm = "n2wjqqfVgC4-";
var xa = "osYYItlitxA-";
var wm = "knntvUEkLRg-";
var Mm = "_1ToiOSH69g8-";
var Dm = "s6DTWBl90Rc-";
var ym = "UnRkTYm5fo0-";
var Tm = "ftmxCcsknb4-";
var km = "byvXpNiaYrs-";
var Am = "y9kERlobJ88-";
var xm = "Hf0BSchKz6g-";
var y = u(f(), 1);
function Ge() {
  return (0, y.jsx)("span", {
    "aria-hidden": "true",
    className: Am,
    children: "|",
  });
}
function Lm(t) {
  return (0, y.jsx)("footer", {
    className: (0, Em.default)(Pm, t.className, !No.logged_in && Sm),
    children: (0, y.jsxs)("div", {
      className: wm,
      children: [
        (0, y.jsx)("hr", {}),
        (0, y.jsxs)("div", {
          className: Mm,
          children: [
            (0, y.jsx)(A, {
              className: ym,
              to: "https://www.valvesoftware.com",
              openInNewWindow: !0,
              children: (0, y.jsx)("img", {
                src: mt(Rm),
                alt: "Valve Software",
              }),
            }),
            (0, y.jsxs)("div", {
              className: Dm,
              children: [
                (0, y.jsx)("div", {
                  children: fe.Localize(
                    "#footer_legal_notice",
                    new Date().getFullYear(),
                  ),
                }),
                (0, y.jsxs)("div", {
                  children: [
                    fe.Localize("#footer_vat_included"),
                    "  ",
                    (0, y.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "privacy_agreement/",
                      children: fe.Localize("#footer_privacy_policy"),
                    }),
                    (0, y.jsx)(Ge, {}),
                    (0, y.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "legal/",
                      children: fe.Localize("#footer_legal"),
                    }),
                    (0, y.jsx)(Ge, {}),
                    (0, y.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "subscriber_agreement/",
                      children: fe.Localize("#footer_ssa"),
                    }),
                    (0, y.jsx)(Ge, {}),
                    (0, y.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "steam_refunds/",
                      children: fe.Localize("#footer_refunds"),
                    }),
                    (0, y.jsx)(Ge, {}),
                    (0, y.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "account/cookiepreferences/",
                      children: fe.Localize("#footer_cookies"),
                    }),
                  ],
                }),
              ],
            }),
            (0, y.jsx)("div", {
              className: Tm,
              children: (0, y.jsx)("img", {
                src: mt(Cm),
                alt: "Valve Software",
              }),
            }),
          ],
        }),
        Po() &&
          (0, y.jsx)("div", {
            className: km,
            children: (0, y.jsx)("button", {
              onClick: Yu,
              children: W.Localize("#global_menu_view_mobile_website"),
            }),
          }),
        (0, y.jsx)("hr", {}),
        (0, y.jsxs)("div", {
          className: xm,
          children: [
            (0, y.jsx)(A, {
              openInNewWindow: !0,
              to: "https://www.valvesoftware.com/about",
              children: fe.Localize("#footer_about_valve"),
            }),
            (0, y.jsx)(Ge, {}),
            (0, y.jsx)(A, {
              openInNewWindow: !0,
              to: "http://www.valvesoftware.com",
              children: fe.Localize("#footer_jobs"),
            }),
            (0, y.jsx)(Ge, {}),
            (0, y.jsx)(A, {
              openInNewWindow: !0,
              to: "http://www.steampowered.com/steamworks/",
              children: fe.Localize("#footer_steamworks"),
            }),
            (0, y.jsx)(Ge, {}),
            (0, y.jsx)(A, {
              openInNewWindow: !0,
              to: w.PARTNER_BASE_URL + "steamdirect",
              children: fe.Localize("#footer_steam_distribution"),
            }),
            (0, y.jsx)(Ge, {}),
            (0, y.jsx)(A, {
              external: !0,
              to: w.HELP_BASE_URL + po().strISOCode + "/",
              children: fe.Localize("#footer_nav_help_support"),
            }),
            (0, y.jsx)(Ge, {}),
            w.COUNTRY === "US" &&
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(A, {
                    snr: !0,
                    external: !0,
                    to: w.STORE_BASE_URL + "hardware_recycling/",
                    children: fe.Localize("#footer_recycling"),
                  }),
                  (0, y.jsx)(Ge, {}),
                ],
              }),
            !Ze(w.EREALM) &&
              (0, y.jsxs)(y.Fragment, {
                children: [
                  (0, y.jsx)(A, {
                    snr: !0,
                    external: !0,
                    to: w.STORE_BASE_URL + "digitalgiftcards/",
                    children: fe.Localize("#footer_walletcode"),
                  }),
                  (0, y.jsx)(Ge, {}),
                  (0, y.jsxs)(A, {
                    openInNewWindow: !0,
                    to: "http://www.facebook.com/Steam",
                    children: [
                      (0, y.jsx)("img", {
                        src: mt(hm),
                        alt: "Facebook",
                        className: xa,
                      }),
                      " Steam",
                    ],
                  }),
                  (0, y.jsx)(Ge, {}),
                  (0, y.jsxs)(A, {
                    openInNewWindow: !0,
                    to: "http://twitter.com/steam",
                    children: [
                      (0, y.jsx)("img", {
                        src: mt(vm),
                        alt: "X",
                        className: xa,
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
  Footer: "-h-uRXvKNBM-",
  InternalOptions: "r4HLvRr97Ps-",
  Text: "_75hRa6m6-oI-",
};
var z = u(f(), 1),
  Hb = vs({ Component: Vb });
function Vb({ children: t }) {
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
    } = Hb.useLoaderData(),
    p = s.length > 0;
  return (
    w.IN_GAMEPADUI && (window.bSupportsGamepadUI = !0),
    (0, z.jsx)(Gb, {
      strWebAPIToken: e,
      steamid: r,
      storeBrowseContext: i,
      children: (0, z.jsxs)("html", {
        lang: po().strISOCode,
        className: (0, yr.default)($e.Root, ju()),
        children: [
          (0, z.jsx)("head", { children: (0, z.jsx)(za, {}) }),
          (0, z.jsx)("body", {
            className: (0, yr.default)($e.StoreBody, p && "gamepadui"),
            children: (0, z.jsx)(gs, {
              navID: "StoreTemplate",
              disabledRoot: !w.IN_GAMEPADUI,
              children: (0, z.jsx)("div", {
                className: (0, yr.default)(
                  $e.StoreBodyContainer,
                  c && $e.Scrollable,
                ),
                children: (0, z.jsx)(Ln, {
                  children: (0, z.jsxs)(bm, {
                    children: [
                      a &&
                        (0, z.jsx)(yp, {
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
                              l && (0, z.jsx)(xp, {}),
                              (0, z.jsx)(il, { buttonClassName: $e.Text }),
                            ],
                          }),
                        }),
                      (0, z.jsxs)("section", {
                        className: $e.StoreContent,
                        children: [
                          (0, z.jsx)("div", { className: $e.LoadingIndicator }),
                          (0, z.jsx)(sl, { gamepadUiTabs: s }),
                          (0, z.jsx)(Mc, {}),
                          (0, z.jsx)(Gl, {}),
                          (0, z.jsx)(qa, { children: t }),
                        ],
                      }),
                      !w.IN_GAMEPADUI &&
                        (0, z.jsx)(Lm, { className: $e.Footer }),
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
function Gb(t) {
  let { strWebAPIToken: e, steamid: o, storeBrowseContext: n, children: r } = t;
  return (0, z.jsx)(Ps, {
    IN_GAMEPADUI: w.IN_GAMEPADUI,
    children: (0, z.jsx)(Yl, {
      children: (0, z.jsx)(Fp, {
        strWebAPIToken: e,
        steamid: o,
        children: (0, z.jsx)(Op, {
          children: (0, z.jsx)(Ks, {
            context: n,
            msDelayBatch: 250,
            children: r,
          }),
        }),
      }),
    }),
  });
}
export { Hb as route };
