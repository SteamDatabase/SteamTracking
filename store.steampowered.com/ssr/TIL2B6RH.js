const CLSTAMP = 9547330;

import {
  A as Ns,
  B as Os,
  C as Ur,
  D as Us,
  E as Ws,
  F as Hs,
  G as Wr,
  H as Go,
  I as sm,
  J as In,
  K as Hr,
  N as Gs,
  O as Vs,
  P as zs,
  Q as js,
  a as ys,
  b as kt,
  c as Or,
  h as As,
  i as mo,
  l as xs,
  m as Es,
  n as Bs,
  s as Ls,
  w as Is,
  x as Ln,
  y as Ho,
  z as _o,
} from "./chunk-6KWUZ4A3.js";
import { a as h, c as ue } from "./chunk-25H23SP5.js";
import { a as Wo } from "./chunk-DINDSR6F.js";
import "./chunk-G6WQXGUM.js";
import {
  a as dt,
  d as fs,
  i as mt,
  u as E,
  v as Rs,
  x as Ps,
} from "./chunk-DRHDRVT4.js";
import { a as im } from "./chunk-DM22IAUX.js";
import { b as po, d as Ys } from "./chunk-JYJ5KYK4.js";
import "./chunk-GPS57MYB.js";
import {
  A as qs,
  a as Ss,
  b as ws,
  c as Uo,
  d as yn,
  e as kn,
  f as _t,
  g as An,
  h as xn,
  i as Ms,
} from "./chunk-Z6N4Q7VU.js";
import "./chunk-WO3CEU5F.js";
import { a as $e, b as A, c as Bn, e as $s } from "./chunk-MSQUBO7K.js";
import { h as ks } from "./chunk-O4APK2GG.js";
import "./chunk-PNXHTWJ7.js";
import { j as Xs } from "./chunk-WG4NJYDE.js";
import "./chunk-MNRWPSID.js";
import {
  F as Ds,
  G as Ts,
  a as am,
  b as R,
  c as P,
  d as Q,
  e as J,
  f as $,
  g as Z,
  h as K,
  i as ee,
  o as za,
  r as xr,
  t as Er,
  u as we,
} from "./chunk-HVFEAXUD.js";
import "./chunk-2AL3UCOG.js";
import { a as Ut } from "./chunk-SUPDU7FQ.js";
import { a as Va } from "./chunk-IML2VA23.js";
import {
  a as En,
  c as Qs,
  d as Fn,
  e as go,
  f as fo,
  h as Js,
  k as ge,
} from "./chunk-YUTM2PGJ.js";
import {
  A as uo,
  B as ms,
  G as _s,
  H as O,
  a as De,
  b as ts,
  c as Tt,
  d as os,
  e as ns,
  f as rs,
  h as Ve,
  i as Oo,
  j as is,
  k as as,
  l as ss,
  n as Nr,
  o as ls,
  p as cs,
  r as us,
  s as ps,
  v as ds,
  x as yt,
  y as Tn,
} from "./chunk-ALJ7ZBDI.js";
import { a as Ht } from "./chunk-GNBYZ3IG.js";
import { a as Fs } from "./chunk-CKNPWG3E.js";
import {
  A as Ka,
  B as es,
  a as Wt,
  b as Me,
  c as Mn,
  d as ja,
  e as Br,
  f as qa,
  g as Mt,
  h as Lr,
  i as Ya,
  j as Ir,
  k as Dt,
  m as Xa,
  o as Qa,
  p as Dn,
  r as Ja,
  s as $a,
  u as Za,
  z as Fr,
} from "./chunk-WN6WALRF.js";
import {
  a as bs,
  b as hs,
  c as Ze,
  e as vs,
  f as Cs,
} from "./chunk-JKD4YTTE.js";
import "./chunk-4ZDJ6ZNV.js";
import "./chunk-53QLFTH5.js";
import { a as ce } from "./chunk-R3HC5USD.js";
import { a as gs } from "./chunk-XBH32RZB.js";
import {
  a as Sn,
  c as Fo,
  g as co,
  s as Ha,
  t as Ga,
} from "./chunk-RXZZUJCY.js";
import "./chunk-Y7U34FHE.js";
import { c as Pn } from "./chunk-SI6EXUXU.js";
import {
  d as Wa,
  g as wn,
  i as No,
  n as Je,
  r as g,
} from "./chunk-LZ45WXT5.js";
import {
  a as lo,
  b as Rn,
  c as Ua,
  g as Be,
  i as pt,
  j as w,
  k as Io,
  m as f,
} from "./chunk-ORVXQIOR.js";
import { a as M } from "./chunk-G7LI47US.js";
import { d as u, e as m, f as Oa } from "./chunk-TW65PMSD.js";
function Nn() {
  return location.href;
}
function Zs(t) {
  return t == 1 || t == 2 || t == 13;
}
var On = u(M(), 1);
var Gr = u(f(), 1),
  lm = On.default.lazy(() => import("./metrics-YT3DFDSA.js"));
function Ks(t) {
  let e = Ga();
  return e.metrics
    ? (0, Gr.jsx)(On.Suspense, {
        children: (0, Gr.jsx)(lm, { metrics: e.metrics, ...t }),
      })
    : null;
}
var el = u(Ht(), 1);
var Vo = {
  HeaderContainer: "NS66-vzC3B4-",
  PillTabs: "HfUir0ARlEg-",
  PillTabItem: "_6YKIMRZJgjI-",
  Active: "cVEuwqCXKqk-",
};
var Un = u(f(), 1);
function tl(t) {
  let { gamepadUiTabs: e } = t;
  if (e.length === 0) return null;
  let o = Nn(),
    n = [...e]
      .sort((r, i) => i.href.length - r.href.length)
      .find((r) => o.startsWith(r.href));
  return (0, Un.jsx)("div", {
    className: Vo.HeaderContainer,
    children: (0, Un.jsx)("div", {
      className: Vo.PillTabs,
      children: e.map((r) =>
        (0, Un.jsx)(
          A,
          {
            gamepadFocusable: !0,
            noFocusRing: !0,
            className: (0, el.default)(
              Vo.PillTabItem,
              r === n && Vo.Active,
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
var Wn = u(M());
var ol = "D6LHFgi1JYw-";
var nl = "-ygkyFbonHM-";
var rl = "-ocPE8koGWA-";
var il = "wScBjl6G2E8-";
var Vr = "J8QB0JMqyaM-";
var al = "-mBLWqp7JFk-";
var sl = "./cookies_brazilian-K4WP2HCA.json";
var ll = "./cookies_bulgarian-3F25L7AA.json";
var cl = "./cookies_czech-WZ2UGHAA.json";
var ul = "./cookies_danish-UON7TKDA.json";
var pl = "./cookies_dutch-GCBILAAA.json";
var dl = "./cookies_english-FDTNVUAA.json";
var ml = "./cookies_finnish-ZUSYHYAA.json";
var _l = "./cookies_french-NATP6HBA.json";
var gl = "./cookies_german-5QBUI7CA.json";
var fl = "./cookies_greek-AWKYX4DA.json";
var bl = "./cookies_hungarian-7N6TKDDA.json";
var hl = "./cookies_indonesian-TTEY42CA.json";
var vl = "./cookies_italian-YNFQT3DA.json";
var Cl = "./cookies_japanese-XFKOMEAA.json";
var Rl = "./cookies_koreana-Z2MV63BA.json";
var Pl = "./cookies_latam-KMOOIBBA.json";
var Sl = "./cookies_norwegian-NQ26SHAA.json";
var wl = "./cookies_polish-535OIIBA.json";
var Ml = "./cookies_portuguese-UMJSLPBA.json";
var Dl = "./cookies_romanian-JBZRLJBA.json";
var Tl = "./cookies_russian-KMFNLJDA.json";
var yl = "./cookies_schinese-4CG5QJAA.json";
var kl = "./cookies_spanish-ATUIC6DA.json";
var Al = "./cookies_swedish-4LF6D6AA.json";
var xl = "./cookies_tchinese-4CGDFUBA.json";
var El = "./cookies_thai-UBSW2GCA.json";
var Bl = "./cookies_turkish-DHSZCYAA.json";
var Ll = "./cookies_ukrainian-WH35XMDA.json";
var Il = "./cookies_vietnamese-VG3ISECA.json";
var N = {};
N.brazilian = sl;
N.bulgarian = ll;
N.czech = cl;
N.danish = ul;
N.dutch = pl;
N.english = dl;
N.finnish = ml;
N.french = _l;
N.german = gl;
N.greek = fl;
N.hungarian = bl;
N.indonesian = hl;
N.italian = vl;
N.japanese = Cl;
N.koreana = Rl;
N.latam = Pl;
N.norwegian = Sl;
N.polish = wl;
N.portuguese = Ml;
N.romanian = Dl;
N.russian = Tl;
N.schinese = yl;
N.spanish = kl;
N.swedish = Al;
N.tchinese = xl;
N.thai = El;
N.turkish = Bl;
N.ukrainian = Ll;
N.vietnamese = Il;
async function zr(t) {
  if (N[t]) return (await fetch(new URL(N[t], import.meta.url))).json();
}
var zo = Pn(zr);
var Le = u(f());
async function Fl(t) {
  let e = w.STORE_BASE_URL + "account/ajaxsetcookiepreferences",
    o = new FormData();
  o.set("bAllow", t.toString()), o.set("sessionId", _t(ws));
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
function Um() {
  let t = (0, Wn.useRef)(null);
  return (
    (0, Wn.useEffect)(() => {
      let e = setTimeout(() => {
        t.current?.show();
      }, 4e3);
      return () => {
        clearTimeout(e);
      };
    }, []),
    (0, Le.jsxs)("dialog", {
      className: ol,
      ref: t,
      children: [
        (0, Le.jsxs)("div", {
          className: nl,
          children: [
            (0, Le.jsx)("div", {
              className: Vr,
              children: zo.Localize("#CookiePrefPopup_Title"),
            }),
            (0, Le.jsx)("div", {
              className: Vr,
              children: Sn(
                zo.Localize("#CookiePrefPopup_Desc"),
                (0, Le.jsx)("a", {
                  href: w.STORE_BASE_URL + "account/cookiepreferences",
                }),
                (0, Le.jsx)("a", {
                  href: w.STORE_BASE_URL + "privacy_agreement",
                }),
              ),
            }),
          ],
        }),
        (0, Le.jsxs)("div", {
          className: al,
          children: [
            (0, Le.jsx)("button", {
              className: rl,
              onClick: async () => {
                await Fl(1), t.current?.close();
              },
              children: zo.Localize("#CookiePrefPopup_AcceptAll"),
            }),
            (0, Le.jsx)("button", {
              className: il,
              onClick: async () => {
                await Fl(0), t.current?.close();
              },
              children: zo.Localize("#CookiePrefPopup_RejectAll"),
            }),
          ],
        }),
      ],
    })
  );
}
function Nl() {
  let t = Ms();
  return t && t.preference_state != 4 ? null : (0, Le.jsx)(Um, {});
}
var Ie = u(M());
var jo = "GamepadInput";
var Wm = "Checkout",
  Hm = "PinnedView",
  Hn = class {
    PostMessage(e) {}
    RegisterForMessage(e) {}
  },
  qo = class {
    m_fnCallback = void 0;
    constructor() {
      SteamClient.BrowserView.RegisterForMessageFromParent(this.OnMessage);
    }
    RegisterForMessage(e) {
      this.m_fnCallback = e;
    }
    PostMessage(e) {
      let o = JSON.stringify(e);
      SteamClient.BrowserView.PostMessageToParent(jo, o);
    }
    OnMessage(e, o) {
      if (e == jo) {
        let n = JSON.parse(o);
        this.m_fnCallback(n);
      } else if (e == Wm) {
        let n = JSON.parse(o);
        if (n.action == "paypal_success")
          try {
            window.OnPayPalSuccess(n.transid);
          } catch {}
        else if (n.action == "paypal_cancel")
          try {
            window.OnPayPalCancel(n.transid);
          } catch {}
      } else if (e == Hm) {
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
m([g], qo.prototype, "OnMessage", 1);
var Yo = class {
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
    this.m_postWindow.postMessage({ gamepadMessage: jo, args: o }, "*");
  }
  OnMessage(e) {
    let o = e?.data;
    if (o && o.gamepadMessage == jo && o.args) {
      let n = JSON.parse(o.args);
      this.m_fnCallback(n);
    }
  }
};
m([g], Yo.prototype, "OnMessage", 1);
var Gt = class {
  m_NavigationController;
  m_postMessage;
  m_bIsGamepadInputExternallyControlled = !1;
  constructor(e) {
    if (((this.m_NavigationController = e), Gm()))
      (this.m_bIsGamepadInputExternallyControlled = !0),
        (this.m_postMessage = new qo()),
        this.m_NavigationController.UpdateDefaultSourceToGamepad();
    else {
      let o = window.top;
      o && o != window.self
        ? ((this.m_bIsGamepadInputExternallyControlled = !0),
          (this.m_postMessage = new Yo(o)))
        : ((this.m_bIsGamepadInputExternallyControlled = !1),
          (this.m_postMessage = new Hn()));
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
m([g], Gt.prototype, "OnFocusChanged", 1),
  m([g], Gt.prototype, "OnMessage", 1),
  m([g], Gt.prototype, "PostPageUnloading", 1);
function Gm() {
  return (
    Oo("BrowserView.RegisterForMessageFromParent") &&
    Oo("BrowserView.PostMessageToParent")
  );
}
var Ol = [
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
  Xo = class extends Tt {
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
        for (let a = 0; a < Ol.length; a++) {
          let s = Ol[a],
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
m([g], Xo.prototype, "PollGamepads", 1);
var Vt = class extends Tt {
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
        Qa(e.target) &&
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
m([g], Vt.prototype, "OnKeyDown", 1),
  m([g], Vt.prototype, "OnKeyUp", 1),
  m([g], Vt.prototype, "Reset", 1);
var gt = class extends Tt {
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
m([g], gt.prototype, "TranslateKey", 1),
  m([g], gt.prototype, "OnMouseDown", 1),
  m([g], gt.prototype, "OnMouseUp", 1),
  m([g], gt.prototype, "OnMouseMove", 1),
  m([g], gt.prototype, "Reset", 1);
var bo = class extends Tt {
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
m([g], bo.prototype, "OnTouchStart", 1), m([g], bo.prototype, "OnTouchEnd", 1);
var Yr = "VirtualKeyboardMessage";
function Wl(t) {
  return t && t.type === Yr;
}
var ft = class {
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
    e == Yr && this.InternalDispatchMessage(JSON.parse(o));
  }
  OnMessage(e) {
    this.InternalDispatchMessage(e.data);
  }
  InternalDispatchMessage(e) {
    if (Wl(e))
      switch (e.message) {
        case "OnEnterKeyPress":
          break;
      }
  }
  SendMessage(e) {
    let o = { type: "VirtualKeyboardMessage", ...e };
    Oo("BrowserView.PostMessageToParent")
      ? SteamClient.BrowserView.PostMessageToParent(o.type, JSON.stringify(o))
      : this.m_ownerWindow &&
        (wn(
          this.m_ownerWindow.parent &&
            this.m_ownerWindow.parent != this.m_ownerWindow,
          "CVirtualKeyboardClient: No parent client window available, cannot display virtual keyboard",
        ),
        this.m_ownerWindow.parent.postMessage(o, "*"));
  }
};
m([g], ft.prototype, "ShowVirtualKeyboard", 1),
  m([g], ft.prototype, "ShowModalKeyboard", 1),
  m([g], ft.prototype, "HideVirtualKeyboard", 1),
  m([g], ft.prototype, "OnBrowserViewMessage", 1),
  m([g], ft.prototype, "OnMessage", 1);
var qr = class {
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
    if (e == Yr) {
      let r = JSON.parse(o);
      if (Wl(r))
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
m([g], qr.prototype, "OnMessage", 1);
var bt = u(f());
function Hl(t) {
  let [e] = Ie.useState(() => new is()),
    [o, n] = Ie.useState(),
    [r] = Ie.useState(() => new ft()),
    [i, a] = Ie.useState(void 0),
    s = Ze();
  return (
    Ie.useEffect(() => {
      if (s && !o) {
        let p = new Gt(e);
        n(p), a(p.BIsGamepadInputExternallyControlled());
      }
    }, [s, o, e]),
    Ie.useEffect(() => {
      if (s) return r.Init(window);
    }, [s, r]),
    (0, bt.jsxs)(ss, {
      controller: e,
      children: [
        i === !1 && s === !0 && (0, bt.jsx)(zm, {}),
        (i === !0 || s === !0) && (0, bt.jsx)(jm, {}),
        s && (0, bt.jsx)(qm, {}),
        (0, bt.jsxs)(ls, {
          ownerWindow: window,
          children: [
            o && (0, bt.jsx)(Vm, { bridge: o }),
            (0, bt.jsx)(as, { factory: r, children: t.children }),
          ],
        }),
      ],
    })
  );
}
function Vm(t) {
  let { bridge: e } = t,
    o = cs();
  return (
    Ie.useEffect(() => {
      if (!(!o || !e)) return e.RegisterForFocusChanged(o);
    }, [o, e]),
    null
  );
}
function zm() {
  let [t] = Ie.useState(() => new Xo());
  return Nr(t), null;
}
function Xr(t) {
  let [e, o] = Ie.useState(void 0);
  Ie.useEffect(() => o(new t(window)), [t]), Nr(e);
}
function jm() {
  return Xr(Vt), null;
}
function qm() {
  return Xr(gt), Xr(bo), null;
}
var Bi = u(Ht(), 1),
  Gu = u(M(), 1);
var zn = u(M()),
  Gl = u(M());
var ho = u(M());
function Gn(t) {
  let [e, o] = (0, ho.useState)(!1);
  return (
    (0, ho.useEffect)(() => {
      (0, ho.startTransition)(() => {
        o(!0);
      });
    }, []),
    e ? t.children : (t.fallback ?? null)
  );
}
var Vn = u(f());
function jn(t) {
  let { dynamicImport: e, fallback: o, ...n } = t,
    [r] = (0, zn.useState)(() =>
      Gl.default.lazy(async () => ({ default: await e() })),
    );
  return (0, Vn.jsx)(Gn, {
    fallback: o,
    children: (0, Vn.jsx)(zn.Suspense, {
      fallback: o,
      children: (0, Vn.jsx)(r, { ...n }),
    }),
  });
}
var Ic = u(Ht(), 1),
  At = u(M(), 1);
var vo = u(M(), 1);
var Vl = "FbRIoYoNi9g-";
var zl = "vnGo6vvKWMk-";
var jl = "kCO5XYi3veo-";
var ql = "Ca4SW9HC3ME-";
var Yl = "P0JO-Sl0erw-";
var Ke = u(f(), 1);
async function Qr(t, e) {
  let o = new FormData();
  o.set("language", t);
  let n = await fetch(e, {
    method: "POST",
    credentials: "same-origin",
    body: o,
  });
  if (!n.ok) throw n;
}
function Xl(t) {
  let {
      open: e,
      menuAction: o,
      changeLanguagePath: n,
      bLoggedIn: r,
      onDismiss: i,
    } = t,
    [a, s] = (0, vo.useState)(!1),
    l = (0, vo.useRef)(null);
  (0, vo.useEffect)(() => {
    e ? l.current?.showModal() : l.current?.close();
  }, [e]);
  async function c(p) {
    s(!0);
    try {
      await Qr(p, n);
    } catch (d) {
      console.error(d), s(!1);
      return;
    }
    r
      ? (location.href = w.STORE_BASE_URL + "account/languagepreferences/")
      : o.href
        ? (location.href = o.href)
        : location.reload();
  }
  return (0, Ke.jsx)("dialog", {
    ref: l,
    className: Vl,
    onMouseDown: (p) => p.target === l.current && i(),
    children: (0, Ke.jsxs)("div", {
      children: [
        (0, Ke.jsx)("hr", { className: jl }),
        (0, Ke.jsxs)("form", {
          method: "dialog",
          className: zl,
          onSubmit: (p) => c(p.target.elements.namedItem("language")?.value),
          children: [
            (0, Ke.jsx)("select", {
              disabled: a,
              name: "language",
              onChange: (p) => c(p.target.value),
              defaultValue: co().strLanguage,
              children: t.menuAction.children?.map((p) =>
                (0, Ke.jsx)(
                  "option",
                  { value: p.action_parameters?.language, children: p.label },
                  p.label,
                ),
              ),
            }),
            (0, Ke.jsx)("div", {
              className: ql,
              children: (0, Ke.jsx)("input", {
                type: "submit",
                value: "OK",
                className: Yl,
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
var Jr = "h3Jy-1Il1os-";
var Ql = "HOrB6lehQpg-";
var Jl = "_7iCcob-JJ4g-";
var $l = "QYT54GHN-rI-";
var Zl = "_79DIT7RUQ5g-";
var $r = "Hxi-pnf9Xlw-";
var Zr = "TwsehSqoph8-";
var Kl = "cQPGTl-Lp-0-";
var ec = "rzUmQa-ty1I-";
var Kr = "_2CYMhC951F4-";
var tc = "h8dQ-Uyh4L0-";
var oc = "NzGUCXVXDcA-";
var nc = "L09rGTMfR9c-";
var rc = "./global_header_brazilian-QF2T6MCA.json";
var ic = "./global_header_bulgarian-FRYAWQDA.json";
var ac = "./global_header_czech-ZHIWGADA.json";
var sc = "./global_header_danish-GTGIGYBA.json";
var lc = "./global_header_dutch-HDK4MSCA.json";
var cc = "./global_header_english-QERWLJCA.json";
var uc = "./global_header_finnish-JMO5FZDA.json";
var pc = "./global_header_french-CJNSG7BA.json";
var dc = "./global_header_german-3CHRXIAA.json";
var mc = "./global_header_greek-U2VV4XCA.json";
var _c = "./global_header_hungarian-726J65DA.json";
var gc = "./global_header_indonesian-B4TLVUBA.json";
var fc = "./global_header_italian-ED6Y5KDA.json";
var bc = "./global_header_japanese-QRY6W7DA.json";
var hc = "./global_header_koreana-HNT7DNDA.json";
var vc = "./global_header_latam-JTAMHMCA.json";
var Cc = "./global_header_norwegian-PONCKJAA.json";
var Rc = "./global_header_polish-YSLROOBA.json";
var Pc = "./global_header_portuguese-T2BVTTDA.json";
var Sc = "./global_header_romanian-SL2I5MDA.json";
var wc = "./global_header_russian-5SGMOOAA.json";
var Mc = "./global_header_sc_schinese-QVBLUWAA.json";
var Dc = "./global_header_schinese-WAEK2BBA.json";
var Tc = "./global_header_spanish-J5UIHOBA.json";
var yc = "./global_header_swedish-MTG4WSBA.json";
var kc = "./global_header_tchinese-LOVT6ADA.json";
var Ac = "./global_header_thai-Y6GA43AA.json";
var xc = "./global_header_turkish-S3H7YCBA.json";
var Ec = "./global_header_ukrainian-OEDO4ADA.json";
var Bc = "./global_header_vietnamese-W33LN2DA.json";
var I = {};
I.brazilian = rc;
I.bulgarian = ic;
I.czech = ac;
I.danish = sc;
I.dutch = lc;
I.english = cc;
I.finnish = uc;
I.french = pc;
I.german = dc;
I.greek = mc;
I.hungarian = _c;
I.indonesian = gc;
I.italian = fc;
I.japanese = bc;
I.koreana = hc;
I.latam = vc;
I.norwegian = Cc;
I.polish = Rc;
I.portuguese = Pc;
I.romanian = Sc;
I.russian = wc;
I.sc_schinese = Mc;
I.schinese = Dc;
I.spanish = Tc;
I.swedish = yc;
I.tchinese = kc;
I.thai = Ac;
I.turkish = xc;
I.ukrainian = Ec;
I.vietnamese = Bc;
async function ei(t) {
  if (I[t]) return (await fetch(new URL(I[t], import.meta.url))).json();
}
var U = Pn(ei);
function qn() {
  let t = document.createElement("form");
  (t.action = "/logout/"),
    (t.method = "POST"),
    document.body.appendChild(t),
    t.submit();
}
var C = u(am());
var D = C.Message;
var ti = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country_code || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Request";
    }
  },
  oi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotions || ee(t.M()),
        D.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { promotions: { n: 1, c: ni, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response";
    }
  },
  ni = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.promotionid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAvailableValveDiscountPromotions_Response_ValveDiscountPromotionDetails";
    }
  },
  ri = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.has_wallet || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetWalletDetails_Response";
    }
  },
  ii = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.include_balance_in_usd || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetClientWalletDetails_Request";
    }
  },
  ai = class t extends D {
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
  si = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.pwid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetAccountLinkStatus_Response";
    }
  },
  li = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.appid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CancelLicenseForApp_Request";
    }
  },
  ci = class t extends D {
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
  ui = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Request";
    }
  },
  pi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.country || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetUserCountry_Response";
    }
  },
  di = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_limit || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Request";
    }
  },
  Yn = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_CreateFriendInviteToken_Response";
    }
  },
  mi = class t extends D {
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
  _i = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.tokens || ee(t.M()),
        D.initialize(this, e, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        t.sm_m ||
          (t.sm_m = {
            proto: t,
            fields: { tokens: { n: 1, c: Yn, r: !0, q: !0 } },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_GetFriendInviteTokens_Response";
    }
  },
  gi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Request";
    }
  },
  fi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.valid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_ViewFriendInviteToken_Response";
    }
  },
  bi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RedeemFriendInviteToken_Request";
    }
  },
  hi = class t extends D {
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
  vi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.invite_token || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RevokeFriendInviteToken_Request";
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
      return "CUserAccount_RevokeFriendInviteToken_Response";
    }
  },
  Ri = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.compat_tool || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CUserAccount_RegisterCompatTool_Request";
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
      return "CUserAccount_RegisterCompatTool_Response";
    }
  },
  Si = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_Token";
    }
  },
  wi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.result || ee(t.M()),
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
              token: { n: 2, c: Si },
            },
          }),
        t.sm_m
      );
    }
    static MBF() {
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeDevice_Response";
    }
  },
  Mi = class t extends D {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(),
        t.prototype.steamid || ee(t.M()),
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
      return t.sm_mbf || (t.sm_mbf = Q(t.M())), t.sm_mbf;
    }
    toObject(e = !1) {
      return t.toObject(e, this);
    }
    static toObject(e, o) {
      return $(t.M(), e, o);
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
      return Z(t.MBF(), e, o);
    }
    serializeBinary() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBuffer();
    }
    static serializeBinaryToWriter(e, o) {
      K(t.M(), e, o);
    }
    serializeBase64String() {
      var e = new C.BinaryWriter();
      return t.serializeBinaryToWriter(this, e), e.getResultBase64String();
    }
    getClassName() {
      return "CEmbeddedClient_AuthorizeCurrentDevice_Request";
    }
  },
  Di;
((d) => {
  function t(_, b) {
    return _.SendMsg(
      "UserAccount.GetAvailableValveDiscountPromotions#1",
      we(ti, b),
      oi,
      { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
    );
  }
  d.GetAvailableValveDiscountPromotions = t;
  function e(_, b) {
    return _.SendMsg("UserAccount.GetClientWalletDetails#1", we(ii, b), ri, {
      ePrivilege: 1,
    });
  }
  d.GetClientWalletDetails = e;
  function o(_, b) {
    return _.SendMsg("UserAccount.GetAccountLinkStatus#1", we(ai, b), si, {
      ePrivilege: 1,
    });
  }
  d.GetAccountLinkStatus = o;
  function n(_, b) {
    return _.SendMsg("UserAccount.CancelLicenseForApp#1", we(li, b), ci, {
      ePrivilege: 1,
    });
  }
  d.CancelLicenseForApp = n;
  function r(_, b) {
    return _.SendMsg("UserAccount.GetUserCountry#1", we(ui, b), pi, {
      ePrivilege: 1,
    });
  }
  d.GetUserCountry = r;
  function i(_, b) {
    return _.SendMsg("UserAccount.CreateFriendInviteToken#1", we(di, b), Yn, {
      ePrivilege: 3,
    });
  }
  d.CreateFriendInviteToken = i;
  function a(_, b) {
    return _.SendMsg("UserAccount.GetFriendInviteTokens#1", we(mi, b), _i, {
      ePrivilege: 1,
    });
  }
  d.GetFriendInviteTokens = a;
  function s(_, b) {
    return _.SendMsg("UserAccount.ViewFriendInviteToken#1", we(gi, b), fi, {
      ePrivilege: 1,
    });
  }
  d.ViewFriendInviteToken = s;
  function l(_, b) {
    return _.SendMsg("UserAccount.RedeemFriendInviteToken#1", we(bi, b), hi, {
      ePrivilege: 1,
    });
  }
  d.RedeemFriendInviteToken = l;
  function c(_, b) {
    return _.SendMsg("UserAccount.RevokeFriendInviteToken#1", we(vi, b), Ci, {
      ePrivilege: 1,
    });
  }
  d.RevokeFriendInviteToken = c;
  function p(_, b) {
    return _.SendMsg("UserAccount.RegisterCompatTool#1", we(Ri, b), Pi, {
      ePrivilege: 1,
    });
  }
  d.RegisterCompatTool = p;
})((Di ||= {}));
var M_;
((e) => {
  function t(o, n) {
    return o.SendMsg("EmbeddedClient.AuthorizeCurrentDevice#1", we(Mi, n), wi, {
      ePrivilege: 1,
    });
  }
  e.AuthorizeCurrentDevice = t;
})((M_ ||= {}));
function D_() {
  return ["CurrentUserWalletDetails", Io.accountid];
}
function T_(t) {
  return {
    queryKey: D_(),
    queryFn: async () => {
      if (!Io.accountid) return;
      let e = w.EREALM === 2;
      return (
        await Di.GetClientWalletDetails(t, {
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
function Xn() {
  let t = Ts();
  return Wa(T_(t));
}
var V = u(f(), 1);
function Fc(t) {
  let { action: e } = t,
    o = (0, At.useContext)(Nc),
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
            qn();
            return;
          }
          case 2: {
            if (e.action_parameters?.language === void 0)
              throw "Missing language";
            try {
              await Qr(e.action_parameters.language, o.changeLanguagePath);
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
    (0, V.jsx)(po, {
      menuTarget: (0, V.jsx)(n, {
        ...r,
        tabIndex: 0,
        className: Zr,
        children: Sn(e.label, (0, V.jsx)("span", { className: Ql })),
      }),
      direction: "left",
      className: ec,
      children: e.children?.map((i, a) => (0, V.jsx)(Fc, { action: i }, a)),
    })
  );
}
var Nc = (0, At.createContext)({});
function Lc(t) {
  return (0, V.jsx)(Nc.Provider, {
    value: t,
    children: t.globalActions.map((e, o) =>
      (0, V.jsx)(
        po,
        {
          direction: "down-left",
          menuTarget: (0, V.jsx)("button", {
            className: $l,
            children: e.label,
          }),
          className: Kl,
          interactionMode: 1,
          children: e.children?.map((n, r) => (0, V.jsx)(Fc, { action: n }, r)),
        },
        o,
      ),
    ),
  });
}
function y_() {
  let { data: t } = Xn();
  return (0, V.jsx)("div", { className: Zl, children: t?.formatted_balance });
}
function Oc(t) {
  let { userDetails: e } = t,
    [o, n] = (0, At.useState)(void 0),
    r = `/login/${o ? `?redir=${encodeURIComponent(o)}` : ""}`;
  return (
    (0, At.useEffect)(() => {
      n(location.href);
    }, []),
    e
      ? (0, V.jsxs)("div", {
          className: Jr,
          children: [
            (0, V.jsx)("a", {
              className: Kr,
              href: w.STORE_BASE_URL + "about/",
              children: U.Localize("#global_menu_install_steam"),
            }),
            t.notifications &&
              (0, V.jsx)("div", {
                className: oc,
                children: (0, V.jsx)(jn, {
                  dynamicImport: async () =>
                    (await import("./greenenvelope-3ZGVIXQO.js")).GreenEnvelope,
                  fallback: (0, V.jsx)("div", { className: nc }),
                  bResponsiveHeader: !1,
                  notifications: t.notifications,
                }),
              }),
            (0, V.jsxs)("div", {
              className: $r,
              children: [
                (0, V.jsx)(Lc, {
                  userDetails: e,
                  globalActions: t.globalActions,
                  changeLanguagePath: t.changeLanguagePath,
                }),
                (0, V.jsx)(y_, {}),
              ],
            }),
            (0, V.jsx)("a", {
              className: Jl,
              href: Wo(e),
              children: (0, V.jsx)(Bn, {
                playerLinkDetails: e,
                statusPosition: "border",
                alt: "",
                role: "presentation",
                size: "Small",
              }),
            }),
          ],
        })
      : (0, V.jsx)("div", {
          className: Jr,
          children: (0, V.jsxs)("div", {
            className: $r,
            children: [
              (0, V.jsx)("a", {
                className: (0, Ic.default)(Kr, tc),
                href: w.STORE_BASE_URL + "about/",
                children: U.Localize("#global_menu_install_steam"),
              }),
              " ",
              (0, V.jsx)("a", {
                href: r,
                className: Zr,
                children: U.Localize("#global_menu_login"),
              }),
              "  |  ",
              (0, V.jsx)(Lc, {
                userDetails: e,
                globalActions: t.globalActions,
                changeLanguagePath: t.changeLanguagePath,
              }),
            ],
          }),
        })
  );
}
var Uc = "eGsI8rO3zfU-";
var Wc = "Ca2l5LKN6as-";
var Hc = "ewJx-kmPr-8-";
var Gc = "SmaLDT4y0RE-";
var Vc = "LyTAF1R-NHw-";
var Ti = "_2GKjdN512t4-";
var zc = "FhcQPauG0Bc-";
var jc = "_40MmWrTStR0-";
var qc = "_5N8HUkyU1sA-";
var yi = u(Ht(), 1),
  tu = u(M(), 1);
var Yc = "MMrgod6KQlc-";
var Xc = "k0AAbwuFzJQ-";
var Qc = "ofgQne2Wvqg-";
var Jc = "FTufO00UqAw-";
var $c = "iHkamGVWNgw-";
var Zc = "_9-ylsFqlD1Y-";
var Kc = "_99jWUQL7ajk-";
var eu = "maI6DbOJuy4-";
var fe = u(f(), 1),
  ht = (0, tu.forwardRef)(function (e, o) {
    let { item: n, responsive: r, className: i, ...a } = e,
      s = Nn().startsWith(n.href),
      l = n.label;
    return (
      r && (l = n.label_responsive ?? n.label),
      (0, fe.jsx)(fe.Fragment, {
        children: (0, fe.jsxs)(A, {
          className: (0, yi.default)(i, n.valveOnly && Kc),
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
              (0, fe.jsx)("span", {
                className: eu,
                children: U.Localize("#m_ext_new"),
              }),
          ],
        }),
      })
    );
  });
function ou(t) {
  let { navContent: e } = t;
  return (0, fe.jsx)(po, {
    menuTarget: (0, fe.jsx)(ht, { item: e, className: Zc }),
    direction: "right",
    children: e.children?.map((o, n) => (0, fe.jsx)(ou, { navContent: o }, n)),
  });
}
function nu(t) {
  return (0, fe.jsx)("nav", {
    className: Yc,
    children: (0, fe.jsx)("ul", {
      className: Xc,
      children: t.navContent.map((e, o) =>
        (0, fe.jsx)(
          po,
          {
            menuTarget: (0, fe.jsx)(ht, {
              item: e,
              className: (0, yi.default)(Qc, e.userContent && Jc),
            }),
            direction: "down",
            className: $c,
            children: e.children?.map((n, r) =>
              (0, fe.jsx)(ou, { navContent: n }, r),
            ),
          },
          o,
        ),
      ),
    }),
  });
}
var ru = "/X3MIBOBA.png";
var iu = "/TYQTXQDA.svg";
var ki = "/5EH3SHCA.svg";
var au = "/KSEIVHDA.png";
function Co() {
  return _t(Uo) === "desktop";
}
function I_() {
  return _t(Uo) === "touch";
}
function su() {
  let t = [];
  return (
    Co() && t.push("force_desktop"),
    I_() && t.push("responsive touch"),
    t.join(" ")
  );
}
function lu() {
  An(Uo, "desktop"), "location" in window && location.reload();
}
function cu() {
  Co() && xn(Uo), "location" in window && location.reload();
}
var ze = u(Ht(), 1),
  je = u(M(), 1);
var uu = "UJ-b28jREN4-";
var pu = "-ackiz2p900-";
var du = "dsfHY-n2vRo-";
var mu = "_7QSpS4Fcxis-";
var _u = "SMuDlFUQZ7c-";
var gu = "fbumr489F1M-";
var fu = "_4Irj26b6cAc-";
var bu = "J0hwuL-5qaI-";
var Ai = "vaiPH0LUuOg-";
var xi = "lHc2D8LzCAM-";
var hu = "qMsE88Z2WWg-";
var vu = "SI1K4dzVIa4-";
var Cu = "wQ0CyaaCCZw-";
var Ru = "QB99AacwCmk-";
var Pu = "_8pHkaq8PPAw-";
var et = "Ud1IMOOMuOI-";
var Su = "_58A1pqE2uSo-";
var jt = "myYtt3d51V4-";
var wu = "cmJ4ozhx9RE-";
var Mu = "_2wGlOytoBKw-";
var Du = "_049Kz8GkLto-";
var Tu = "qNNahG-7Lqc-";
var yu = "Yp-VG7Zk9AY-";
var ku = "CX4Bz9fkpP4-";
var Au = "mL8bNWbmixg-";
var xu = "fPuSnTPv8Sw-";
var Eu = "pHDUu-G3uyI-";
var Bu = "do714Zjyklo-";
var Lu = "eemuAILDlkQ-";
var Iu = "Q-TiFOlMJ8s-";
var Ei = "V29-mSaJz7Q-";
var Fu = "lFK0b3Au9I8-";
var Nu = "eaAkMgON-CQ-";
var Ou = "gLRm-ue6Z7Q-";
var Uu = "RRZn8XwJQEk-";
var v = u(f(), 1);
function N_(t) {
  return t.private_data?.persona_state === 0
    ? fu
    : t.private_data?.game_id !== void 0
      ? gu
      : _u;
}
function O_() {
  let { data: t } = qs();
  return t
    ? (0, v.jsx)("div", {
        className: Ai,
        children: (0, v.jsx)(A, {
          snr: !0,
          external: !0,
          to: w.STORE_BASE_URL + "cart",
          className: Ai,
          children: U.LocalizeReact(
            "#Cart_CountWidget",
            (0, v.jsx)("b", { children: Fo(t) }),
          ),
        }),
      })
    : null;
}
function U_() {
  let { data: t } = Xn();
  return t?.formatted_balance
    ? (0, v.jsx)("div", {
        className: xi,
        children: (0, v.jsx)(A, {
          snr: !0,
          external: !0,
          to: w.STORE_BASE_URL + "account",
          className: xi,
          children: U.LocalizeReact(
            "#responsive_menu_wallet_balance",
            (0, v.jsx)("b", { children: t.formatted_balance }),
          ),
        }),
      })
    : null;
}
function Wu(t) {
  let { navContent: e, children: o, labelAddition: n } = t,
    r = (0, je.useRef)(null),
    i = (0, je.useRef)(null),
    a = (0, je.useRef)(null),
    s = (0, je.useRef)();
  if (!o && (!e.children || e.children.length === 0))
    return (0, v.jsx)(ht, { item: e, className: et, responsive: !0 });
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
    className: Ru,
    ref: r,
    onToggle: p,
    children: [
      (0, v.jsxs)("summary", {
        className: et,
        ref: a,
        children: [
          e.label_responsive ?? e.label,
          " ",
          n,
          " ",
          (0, v.jsx)("div", { className: Su }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: Pu,
        ref: i,
        children: [
          e.children?.map((d, _) =>
            (0, v.jsx)(ht, { item: d, className: wu, responsive: !0 }, _),
          ),
          o,
        ],
      }),
    ],
  });
}
function W_() {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsxs)("div", {
        className: Au,
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
        className: xu,
        children: [
          (0, v.jsxs)(A, {
            external: !0,
            className: Ei,
            to: "http://qr.weibo.cn/g/7kla92",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微博",
                className: Nu,
                src: `${w.STORE_CDN_URL}/public/shared/images/footer/weibo_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微博" }),
            ],
          }),
          (0, v.jsxs)(A, {
            external: !0,
            className: Ei,
            to: "http://weixin.qq.com/r/LC-K0i3EunDFrWmx93o_",
            target: "_blank",
            rel: "noreferrer",
            children: [
              (0, v.jsx)("img", {
                alt: "微信",
                className: Fu,
                src: `${w.STORE_CDN_URL}/public/shared/images/footer/wechat_logo.svg?v=1`,
              }),
              (0, v.jsx)("div", { children: "微信" }),
            ],
          }),
        ],
      }),
      (0, v.jsx)("hr", { className: Lu }),
      (0, v.jsxs)("div", {
        className: Iu,
        children: [
          (0, v.jsx)(A, {
            external: !0,
            to: "https://www.wanmei.com/",
            target: "_blank",
            rel: "noreferrer",
            children: (0, v.jsx)("img", {
              className: Ou,
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
              className: Uu,
              src: `${w.STORE_CDN_URL}/public/shared/images/footer/valve_logo.svg?v=1`,
              alt: "",
            }),
          }),
        ],
      }),
      (0, v.jsxs)("div", {
        className: Eu,
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
            className: Bu,
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
function H_() {
  return (0, v.jsxs)(v.Fragment, {
    children: [
      (0, v.jsx)("div", {
        children: (0, v.jsx)("img", {
          src: `${w.STORE_CDN_URL}/public/shared/images/responsive/logo_valve_footer.png`,
          alt: "",
        }),
      }),
      U.Localize("#responsive_footer_copyright"),
      "  ",
      (0, v.jsxs)("span", {
        children: [
          (0, v.jsx)(A, {
            to: w.STORE_BASE_URL + "privacy_agreement/",
            target: "_blank",
            children: U.Localize("#Common_Footer_PrivacyPolicy"),
          }),
          " |  ",
          (0, v.jsx)(A, {
            to: "http://www.valvesoftware.com/legal.htm",
            target: "_blank",
            children: U.Localize("#Common_Footer_Legal"),
          }),
          " |  ",
          (0, v.jsx)(A, {
            to: w.STORE_BASE_URL + "subscriber_agreement/",
            target: "_blank",
            children: U.Localize("#Common_Footer_SSA"),
          }),
          " |  ",
          (0, v.jsx)(A, {
            to: w.STORE_BASE_URL + "steam_refunds/",
            target: "_blank",
            children: U.Localize("#Common_Footer_Refunds"),
          }),
        ],
      }),
    ],
  });
}
function Hu(t) {
  let {
      userDetails: e,
      navContent: o,
      globalActions: n,
      changeLanguagePath: r,
      open: i,
      onDismiss: a,
      cartInResponsiveMenu: s,
    } = t,
    [l, c] = (0, je.useState)(!1),
    p = (0, je.useRef)(null),
    d = (0, je.useRef)();
  (0, je.useEffect)(() => {
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
        className: (0, ze.default)(uu, $e(w.EREALM) && pu),
        ref: p,
        onMouseDown: (b) => b.target === p.current && a(),
        children: [
          (0, v.jsxs)("div", {
            className: du,
            children: [
              !e &&
                (0, v.jsx)(ht, {
                  className: (0, ze.default)(et),
                  item: {
                    href: "/login/",
                    label: U.Localize("#global_menu_login_caps"),
                  },
                }),
              e &&
                (0, v.jsxs)("div", {
                  className: (0, ze.default)(mu, N_(e)),
                  children: [
                    (0, v.jsxs)("div", {
                      className: bu,
                      children: [
                        (0, v.jsx)("a", {
                          className: Cu,
                          href: Wo(e),
                          children: (0, v.jsx)(Bn, {
                            playerLinkDetails: e,
                            statusPosition: "border",
                            alt: "",
                            role: "presentation",
                            size: "Small",
                            className: vu,
                          }),
                        }),
                        " ",
                        (0, v.jsx)("a", {
                          className: hu,
                          href: Wo(e),
                          children: e.public_data?.persona_name,
                        }),
                      ],
                    }),
                    s && (0, v.jsx)(O_, {}),
                    (0, v.jsx)(U_, {}),
                  ],
                }),
              t.notifications &&
                (0, v.jsx)(Wu, {
                  navContent: { label: "Notifications", href: "" },
                  labelAddition: (0, v.jsxs)("div", {
                    className: (0, ze.default)(
                      Mu,
                      t.notifications?.unread_count && Tu,
                    ),
                    children: [
                      t.notifications.unread_count > 0 &&
                        (0, v.jsx)("span", { className: Du }),
                      (0, v.jsx)("span", {
                        className: yu,
                        children: Fo(t.notifications?.unread_count ?? 0),
                      }),
                    ],
                  }),
                  children: (0, v.jsx)(jn, {
                    dynamicImport: async () =>
                      (await import("./greenenvelope-3ZGVIXQO.js"))
                        .GreenEnvelope,
                    fallback: (0, v.jsx)("div", {}),
                    bResponsiveHeader: !0,
                    notifications: t.notifications,
                  }),
                }),
              o.map((b, S) => (0, v.jsx)(Wu, { navContent: b }, S)),
              (0, v.jsxs)("div", {
                className: "minor_menu_items",
                children: [
                  e &&
                    (0, v.jsxs)(v.Fragment, {
                      children: [
                        (0, v.jsx)(ht, {
                          className: (0, ze.default)(et, jt),
                          item: {
                            href: w.STORE_BASE_URL + "account",
                            label: U.Localize("#global_menu_account_details"),
                          },
                        }),
                        (0, v.jsx)(ht, {
                          className: (0, ze.default)(et, jt),
                          item: {
                            href: w.STORE_BASE_URL + "account/preferences",
                            label: U.Localize(
                              "#global_menu_account_preferences",
                            ),
                          },
                        }),
                      ],
                    }),
                  !$e(w.EREALM) &&
                    (0, v.jsx)(v.Fragment, {
                      children: (0, v.jsx)("button", {
                        className: (0, ze.default)(et, jt),
                        onClick: () => c(!0),
                        children: U.Localize("#global_menu_change_language"),
                      }),
                    }),
                  e &&
                    (0, v.jsx)("button", {
                      className: (0, ze.default)(et, jt),
                      onClick: qn,
                      children: U.Localize("#global_menu_change_user"),
                    }),
                  !$e(w.EREALM) &&
                    (0, v.jsx)(ht, {
                      className: (0, ze.default)(et, jt),
                      item: {
                        href: w.STORE_BASE_URL + "mobile",
                        label: U.Localize("#global_menu_getmobileapp"),
                      },
                    }),
                  !Co() &&
                    (0, v.jsx)("button", {
                      className: (0, ze.default)(et, jt),
                      onClick: lu,
                      children: U.Localize("#global_menu_view_desktop_website"),
                    }),
                ],
              }),
            ],
          }),
          (0, v.jsx)("footer", {
            className: ku,
            children: $e(w.EREALM) ? (0, v.jsx)(W_, {}) : (0, v.jsx)(H_, {}),
          }),
        ],
      }),
      _ &&
        (0, v.jsx)(Xl, {
          open: l,
          onDismiss: () => c(!1),
          menuAction: _,
          changeLanguagePath: r,
          bLoggedIn: e != null,
        }),
    ],
  });
}
var ne = u(f(), 1);
function Vu(t) {
  let [e, o] = (0, Gu.useState)(!1);
  return (0, ne.jsxs)(ne.Fragment, {
    children: [
      (0, ne.jsxs)("header", {
        className: (0, Bi.default)(Uc, t.className),
        children: [
          (0, ne.jsxs)("div", {
            className: Wc,
            children: [
              (0, ne.jsx)("a", {
                href: w.STORE_BASE_URL,
                "aria-label": U.Localize("#Aria_Steam_Home_Link"),
                className: Ti,
                children: (0, ne.jsx)("img", {
                  src: pt($e(w.EREALM) ? ki : iu),
                  alt: U.Localize("#Aria_Steam_Home_Link"),
                  width: 176,
                  height: 44,
                }),
              }),
              (0, ne.jsx)(nu, { navContent: t.navContent }),
              (0, ne.jsx)(Oc, {
                globalActions: t.globalActions,
                userDetails: t.userDetails,
                notifications: t.notifications,
                changeLanguagePath: t.changeLanguagePath,
              }),
              t.children,
            ],
          }),
          (0, ne.jsxs)("div", {
            className: Hc,
            children: [
              (0, ne.jsxs)("button", {
                className: Gc,
                onClick: () => o(!0),
                children: [
                  (0, ne.jsx)("img", { src: pt(ru), alt: "", className: Vc }),
                  t.notifications?.unread_count &&
                    (0, ne.jsx)("div", {
                      className: zc,
                      children: (0, ne.jsx)("div", {
                        className: (0, Bi.default)(jc),
                        children: (0, ne.jsx)("span", {
                          className: qc,
                          children: Fo(t.notifications.unread_count ?? 0),
                        }),
                      }),
                    }),
                ],
              }),
              (0, ne.jsx)("a", {
                href: w.STORE_BASE_URL,
                "aria-label": U.Localize("#Aria_Steam_Home_Link"),
                className: Ti,
                children: (0, ne.jsx)("img", {
                  src: pt($e(w.EREALM) ? ki : au),
                  alt: U.Localize("#Aria_Steam_Home_Link"),
                  height: 36,
                }),
              }),
            ],
          }),
        ],
      }),
      (0, ne.jsx)(Hu, { ...t, open: e, onDismiss: () => o(!1) }),
    ],
  });
}
var zu = "y0fX1sHXgbg-";
var ju = "dkzTutiFwB8-";
var qu = "SMtSKQQ7dWs-";
var Qo = u(f(), 1);
function Yu(t) {
  return (0, Qo.jsxs)("span", {
    className: zu,
    children: [
      (0, Qo.jsx)("span", {
        className: ju,
        children: "You are spoofing another user!",
      }),
      " ",
      (0, Qo.jsx)("span", {
        className: qu,
        onClick: () => {
          xn(kn), window.location.reload();
        },
        children: "end spoofing",
      }),
    ],
  });
}
var Ro = u(M());
var $u = u(sm(), 1);
function Li(t) {
  try {
    if (!t || typeof t != "string") return null;
    let e = t.split(".");
    if (e.length !== 3) return null;
    let [o, n] = e,
      r = Qu(o),
      i = Qu(n);
    return !r || !i ? null : { header: JSON.parse(r), body: JSON.parse(i) };
  } catch (e) {
    return (
      console.error(`Exception while attempting to decode token: "${e}"`), null
    );
  }
}
function Xu(t) {
  return t ? t.body.exp : 0;
}
function V_(t) {
  return t ? t.body.nbf || t.body.iat : 0;
}
function Ju(t) {
  let e = Xu(t),
    o = V_(t),
    n = 900,
    r = e - o;
  return r < 900 * 1.5 && (n = r <= 60 ? 0 : 60), Xu(t) - n < Date.now() / 1e3;
}
function Qu(t) {
  return atob(t.replace(/-/g, "+").replace(/_/g, "/"));
}
var Qn = class {
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
      (this.m_bJWTToken = Li(o) != null),
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
    let i = _t(kn);
    i && /[0-9]+/g.test(i) && (this.m_strSpoofedSteamID = i);
  }
  WaitUntilLoggedOn() {
    return Promise.resolve();
  }
  GetServerRTime32() {
    return Number(new Date());
  }
  get steamid() {
    return new xr();
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
            Ju(Li(this.m_webApiAccessToken)) &&
              ((this.m_refreshAccessTokenPromise =
                this.m_fnRequestNewAccessToken(this.m_webApiAccessToken)),
              (this.m_webApiAccessToken =
                await this.m_refreshAccessTokenPromise),
              (this.m_refreshAccessTokenPromise = void 0)));
      }
      let s = await this.Send(e, o, n, i);
      if (s.status != 200) throw new Error("Request Error");
      if (
        ((a = Er.Init(r, 147)),
        s.headers &&
          (s.headers.get("x-eresult") &&
            a.Hdr().set_eresult(parseInt(s.headers.get("x-eresult"))),
          s.headers.get("x-error_message") &&
            a.Hdr().set_error_message(s.headers.get("x-error_message"))),
        this.m_bJsonMode)
      )
        a.SetBodyJSON(await s.json());
      else {
        let l = new za(await s.arrayBuffer());
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
      s = $u.fromByteArray(a),
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
    let r = Er.Init(e);
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
var Jo = class extends Jn {
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
var Ii = u(f());
function Zu(t) {
  let { strWebAPIToken: e, steamid: o, children: n } = t,
    r = Ro.useRef(),
    i = Ro.useRef(),
    a = Ro.useCallback(
      () => (
        r.current || (r.current = new Qn(w.WEBAPI_BASE_URL, e, !1, z_)),
        r.current
      ),
      [e],
    ),
    s = Ro.useCallback(
      () => (i.current || (i.current = new Jo()), i.current),
      [],
    );
  return (0, Ii.jsx)(Ds, {
    useActiveSteamInterface: a,
    useStorage: s,
    children: (0, Ii.jsx)(ks, { steamid: o, children: n }),
  });
}
async function z_(t) {
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
var Ku = u(M());
var $n = class {
  m_mapAppToSNRs = new Map();
  m_rgImpressionsToAdd = [];
  BIsValid() {
    return !0;
  }
  AddImpression(e, o) {
    if (!Ss(yn)) return;
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
    let o = [_t(yn) || "", ...this.m_rgImpressionsToAdd].join("|");
    this.m_rgImpressionsToAdd = [];
    let n = encodeURIComponent(o).length,
      r = 3200;
    n <= r
      ? An(yn, o)
      : console.warn(
          `Cookie max length exceeded ( ${n} > ${r} ), discarding impressions`,
        );
  }
};
var tp = u(f());
function ep(t) {
  let [e] = Ku.useState(() => new $n());
  return (0, tp.jsx)(Ys, { ImpressionTracker: e, children: t.children });
}
var Dr = u(Ht(), 1);
var ye = u(M()),
  Ap = u(Ut());
var Po = u(M());
var tt = u(M());
var op = { m_unPID: 0, m_nBrowserID: -1 };
var $o = class {
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
      No(this.m_rgLoadingLinks, e.currentTarget),
      this.m_rgLoadingLinks.length == 0 &&
        (this.m_fnRender?.(), (this.m_fnRender = void 0));
  }
};
m([g], $o.prototype, "OnLinkLoad", 1);
function Fi() {
  return vs() ? 256 : 0;
}
function Ko(t) {
  let e = 0;
  switch (t) {
    case 0:
      return (e |= 8192), (e |= 8), (e |= 512), (e |= 4194304), e;
    case 1:
      return (e |= Ko(0)), (e |= 16384), (e |= 262144), (e |= 1048576), e;
    case 2:
      return (
        (e |= Ko(0)), (e |= 262144), (e |= 16384), (e |= 4), (e |= Fi()), e
      );
    case 3:
      return (
        (e |= 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 65536),
        (e |= 4194304),
        (e |= Fi()),
        e
      );
    case 4:
      return (
        (e = 8),
        (e |= 262144),
        (e |= 16384),
        (e |= 1048576),
        (e |= 4194304),
        (e |= Fi()),
        e
      );
  }
}
function rp() {
  let { ownerWindow: t } = Ce();
  return qe.GetPopupForWindow(t)?.browser_info || op;
}
var ip = tt.createContext({ ownerWindow: window }),
  Ce = () => tt.useContext(ip);
function ap(t) {
  let { ownerWindow: e, children: o } = t,
    n = tt.useMemo(() => ({ ownerWindow: e }), [e]);
  return tt.createElement(ip.Provider, { value: n }, o);
}
var ve = class {
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
    mt(this),
      ce(
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
    let n = qe.GetExistingPopup(this.m_strName);
    if (n && !this.m_rgParams.replace_existing_popup) return;
    this.m_rgParams = this.UpdateParamsBeforeShow(this.m_rgParams);
    let r, i, a;
    n
      ? ((i = n.m_element),
        (r = n.m_popup),
        n.ReleasePopup(),
        (a = n.m_renderWhenReady),
        qe.RemoveTrackedPopup(n),
        r?.removeEventListener("beforeunload", n.OnBeforeUnloadEvent),
        r?.removeEventListener("unload", n.OnUnload),
        r?.removeEventListener("resize", n.OnResizeEvent),
        r?.removeEventListener("focus", this.OnFocusInternal),
        r?.removeEventListener("blur", this.OnBlurInternal),
        r?.removeEventListener("drop", n.OnDrop),
        r?.removeEventListener("dragover", n.OnDragOver),
        r?.removeEventListener("message", this.OnMessage))
      : (({ popup: r, element: i } = Zo.CreatePopup(this.m_strName, {
          ...this.m_rgParams,
          title: this.m_strTitle,
        })),
        (a = new $o(r?.document, i))),
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
          r.document.documentElement.setAttribute("lang", Ps() ?? ""),
        (this.m_popup = r),
        (this.m_element = i),
        (this.m_renderWhenReady = a),
        this.m_renderWhenReady?.SetTarget(() => {
          this.m_popup &&
            this.m_element &&
            this.RenderInternal(this.m_popup, this.m_element, o);
        })),
      qe.AddTrackedPopup(this),
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
      Zs(this.browser_info.m_eBrowserType) &&
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
      qe.RemoveTrackedPopup(this),
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
      (Ve(this.m_popup.window, "Window.Close")
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
    return Ve(this.m_popup, "Window.GetWindowRestoreDetails") &&
      !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.GetWindowRestoreDetails()
      : Promise.resolve("");
  }
  IsMinimized() {
    return Ve(this.m_popup, "Window.IsWindowMinimized") && !this.m_popup.closed
      ? this.m_popup.SteamClient.Window.IsWindowMinimized()
      : Promise.resolve(!1);
  }
  IsMaximized() {
    return Ve(this.m_popup, "Window.IsWindowMaximized") && !this.m_popup.closed
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
m([dt], ve.prototype, "m_bFocused", 2),
  m([g], ve.prototype, "OnMessage", 1),
  m([g], ve.prototype, "RenderInternal", 1),
  m([g], ve.prototype, "OnCreateInternal", 1),
  m([g], ve.prototype, "OnResizeEvent", 1),
  m([g], ve.prototype, "OnBeforeUnloadEvent", 1),
  m([g], ve.prototype, "OnUnload", 1),
  m([g], ve.prototype, "OnFocusInternal", 1),
  m([g], ve.prototype, "OnBlurInternal", 1);
var Ni = class extends ve {
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
          (e.strRestoreDetails = qe.GetRestoreDetails(
            this.m_strInitialSavedDimensionsKey,
          )))
        : e.strRestoreDetails &&
          ((this.m_strInitialSavedDimensionsKey = this.GetSavedDimensionsKey()),
          qe.SetRestoreDetails(
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
            (qe.SetRestoreDetails(e, o, this.m_bExpires),
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
    qe.SetRestoreDetails(this.GetSavedDimensionsKey(), e, !1),
      (this.m_rgParams.strRestoreDetails = e);
  }
};
m([g], Ni.prototype, "QueryAndStoreWindowPosition", 1);
var Zo = class {
  m_bShuttingDown = !1;
  m_mapPopups = dt.map([], { deep: !1 });
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
      ce(e, "Couldn't find head element"),
        e &&
          ((this.m_DynamicCSSObserver = new MutationObserver(() => {
            let o = Fr();
            this.m_mapPopups.forEach((n) => {
              es(n.window.document, o, !1);
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
    let S = "";
    o.popup_class && (S = `class="${o.popup_class}"`);
    let k = `<!DOCTYPE html><html ${_}><head><title></title></head><body ${b}><div id="popup_target" ${S}></div></body></html>`;
    return (
      d.document.write(k),
      (d.document.title = a),
      Ka(d, Fr()),
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
m([g, Is(100)], Zo.prototype, "DebouncedSaveSavedDimensionStore", 1);
var qe = new Zo();
window.g_PopupManager = qe;
var cp = u(f()),
  sp = Po.default.createContext(null);
function lp(t) {
  let {
      refContextMenuManager: e,
      bRegisterMenuManager: o = !0,
      children: n,
    } = t,
    i = Ce()?.ownerWindow || window,
    a = Po.default.useRef();
  return (
    a.current || (a.current = new Hs()),
    Po.default.useLayoutEffect(() => {
      if (o)
        return (
          Wr.SetMenuManager(i, a.current), () => Wr.SetMenuManager(i, void 0)
        );
    }, [i, o]),
    Po.default.useLayoutEffect(
      () => (Wt(e, a.current), () => Wt(e, void 0)),
      [e],
    ),
    (0, cp.jsx)(sp.Provider, { value: a.current, children: n })
  );
}
function Zn() {
  return Po.default.useContext(sp);
}
var Et = u(M()),
  pp = u(Ut());
var xt = u(M());
var en = u(M());
var q_ = u(f()),
  j_ = en.createContext({ body_class: "" });
function up() {
  return en.useContext(j_);
}
function Kn(t, e, o) {
  let n = xt.useRef(void 0),
    [r, i] = xt.useState(void 0),
    a = up();
  return (
    n.current || (n.current = new Oi(t, Y_(e, a), i)),
    (n.current.m_callbacks = o),
    xt.useEffect(() => {
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
    xt.useEffect(() => {
      n.current.window?.SteamClient.Window.SetHideOnClose &&
        n.current.window?.SteamClient.Window.SetHideOnClose(!!e.bHideOnClose);
    }, [e.bHideOnClose]),
    { popup: n.current.window, element: r, popupObj: n.current }
  );
}
function Y_(t, e) {
  return { ...t, body_class: h(t.body_class, e.body_class) };
}
var Oi = class extends ve {
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
function dp(t) {
  let { managerOverride: e, bSuppressMouseOverlay: o } = t,
    n = Mt(),
    r = rp(),
    i = Zn(),
    a = e ?? i;
  Dt(a.OnMenusChanged, n);
  let s = !o && a.BShouldRenderMouseOverlay(),
    l = a.GetAllMenus();
  return (0, Te.jsxs)(Te.Fragment, {
    children: [
      s && (0, Te.jsx)(Us, {}),
      l.map((c) =>
        (0, Te.jsx)(
          ue,
          { children: (0, Te.jsx)(Q_, { instance: c, browserInfo: r }) },
          c.key,
        ),
      ),
    ],
  });
}
function Q_(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = !1,
    i = So(),
    a = Ce().ownerWindow,
    s = Et.default.useRef(void 0);
  s.current === void 0 &&
    (s.current =
      (r || e.options.bForcePopup || a.innerWidth < 400 || i?.BOnlyPopups()) &&
      !!a.SteamClient?.Window);
  let l = Et.default.useMemo(
      () => ({ instance: e, styles: Or, presentation: 0 }),
      [e],
    ),
    c = n || e.ReactElement;
  return (0, Te.jsx)(Ln.Provider, {
    value: l,
    children: s.current
      ? (0, Te.jsx)($_, { instance: e, browserInfo: o, children: c })
      : (0, Te.jsx)(J_, { instance: e, children: c }),
  });
}
function J_(t) {
  let { instance: e, children: o } = t;
  return (0, Te.jsx)(Ur, { ...e.position, children: o });
}
function $_(t) {
  let { instance: e, browserInfo: o, children: n } = t,
    r = Et.default.useRef(null),
    a = Ce().ownerWindow,
    s = a.SteamClient.Browser.GetBrowserID(),
    l = Et.default.useCallback(
      (_) => {
        let { options: b, position: S } = e,
          k = S.element;
        if (b.bScreenCoordinates)
          _.dimensions = {
            left: S.clientX,
            top: S.clientY,
            width: 2,
            height: 1,
          };
        else {
          let L = Ja(a, k.getBoundingClientRect());
          (_.dimensions = { left: L.right, top: L.top, width: 2, height: 1 }),
            (_.availscreenwidth = a.screen.availWidth),
            (_.availscreenheight = a.screen.availHeight);
        }
        return _;
      },
      [a, e],
    ),
    c = e.options.bStandalone ? Ko(4) : Ko(3);
  e.options.bCreateHidden && (c |= 2), e.options.bAlwaysOnTop && (c |= 8192);
  let { popupObj: p, element: d } = Kn(
    "contextmenu_" + e.key,
    {
      title: e.options.title || "Menu",
      html_class: Or.ContextMenuPopup + " client_chat_frame",
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
    (0, Et.useEffect)(() => {
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
    mp(p.window),
    Et.default.useEffect(() => {
      e.SetPopup(p);
    }, [e, p]),
    d
      ? pp.default.createPortal(
          (0, Te.jsx)(Ur, {
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
var nt = u(M());
var bp = u(Ut());
var on = u(M());
var Bt = u(M());
function _p(t) {
  let [e, o] = Bt.default.useState(!1),
    n = Bt.default.useCallback(() => {
      Ve(t, "Window.IsWindowMaximized")
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
    Bt.default.useEffect(n, [n, t]),
    Ya(t, "resize", n),
    Ir(t, ["window_moved"], n),
    e
  );
}
function gp(t, e = 100) {
  let [o, n] = Bt.default.useState(!1),
    r = Bt.default.useCallback(() => n(!0), [n]),
    i = Bt.default.useCallback(() => n(!1), [n]);
  return (
    Bt.default.useEffect(() => {
      if (t)
        return (
          t.addEventListener("focus", r),
          t.addEventListener("blur", i),
          () => {
            t.removeEventListener("focus", r), t.removeEventListener("blur", i);
          }
        );
    }, [t, r, i]),
    Xa(o, e)
  );
}
var q = u(f());
function Z_(t) {
  let { popup: e, onMaximize: o, bOSX: n } = t,
    r = _p(e),
    i = on.useCallback(() => {
      o
        ? o()
        : Ve(e, "Window.ToggleMaximize") &&
          e.SteamClient.Window.ToggleMaximize();
    }, [e, o]);
  return (0, q.jsx)(Ui, {
    className: h(r ? "restoreButton" : "maximizeButton", "windowControlButton"),
    onClick: i,
    children: !n && (r ? (0, q.jsx)(Bs, {}) : (0, q.jsx)(xs, {})),
  });
}
function K_(t) {
  let { popup: e, onMinimize: o, bOSX: n } = t,
    r = on.useCallback(() => {
      e.SteamClient.Window.Minimize();
    }, [e]);
  return (0, q.jsx)(Ui, {
    className: "minimizeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, q.jsx)(Es, {}),
  });
}
function eg(t) {
  let { popup: e, onClose: o, bOSX: n } = t,
    r = on.useCallback(() => {
      e && (Ve(e, "Window.Close") ? e.SteamClient.Window.Close() : e.close());
    }, [e]);
  return (0, q.jsx)(Ui, {
    className: "closeButton windowControlButton",
    onClick: o ?? r,
    children: !n && (0, q.jsx)(mo, {}),
  });
}
function Ui(t) {
  let { className: e, onClick: o, children: n } = t,
    r = on.useCallback(
      (i) => {
        o && (i.stopPropagation(), o(i));
      },
      [o],
    );
  return (0, q.jsx)("div", {
    className: h("title-area-icon", e),
    onClick: r,
    children: (0, q.jsx)("div", {
      className: "title-area-icon-inner",
      children: n,
    }),
  });
}
function fp(t) {
  let {
      className: e,
      style: o,
      hideActions: n,
      hideClose: r,
      hideMin: i,
      hideMax: a,
      bOSX: s = Cs(),
      bForceWindowFocused: l,
      onMinimize: c,
      onMaximize: p,
      onClose: d,
      extraActions: _,
      popup: b,
      children: S,
    } = t,
    k = gp(b);
  return (0, q.jsxs)("div", {
    className: h(
      "TitleBar",
      "title-area",
      s && "OSX",
      (k || l) && "WindowFocus",
      e,
    ),
    style: o,
    children: [
      (0, q.jsx)("div", { className: "title-area-highlight" }),
      (0, q.jsx)("div", { className: "title-area-children", children: S }),
      !n &&
        (0, q.jsxs)(q.Fragment, {
          children: [
            _ &&
              (0, q.jsx)("div", {
                className: "title-bar-actions extra-actions",
                children: _,
              }),
            (0, q.jsxs)("div", {
              className: "title-bar-actions window-controls",
              children: [
                !r && (0, q.jsx)(eg, { popup: b, onClose: d, bOSX: s }),
                !a && (0, q.jsx)(Z_, { popup: b, onMaximize: p, bOSX: s }),
                !i && (0, q.jsx)(K_, { popup: b, onMinimize: c, bOSX: s }),
              ],
            }),
          ],
        }),
    ],
  });
}
var wo = u(f());
function hp(t) {
  let { Modal: e } = t,
    { name: o, modalProps: n, options: r } = e,
    i = Ce().ownerWindow,
    { popup: a, element: s } = Kn(
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
        updateParamsBeforeShow: (p) => tg(p, n, r, i),
        onClose: () => n.fnOnClose && n.fnOnClose(),
      },
    ),
    l = r?.bHideActions,
    c =
      typeof r?.nDragAreaHeight == "number"
        ? { height: r.nDragAreaHeight }
        : void 0;
  return s
    ? bp.createPortal(
        (0, wo.jsx)(ap, {
          ownerWindow: a,
          children: (0, wo.jsxs)("div", {
            className: "PopupFullWindow",
            onContextMenu: Ws,
            children: [
              (0, wo.jsx)(fp, {
                hideMin: !0,
                hideMax: !0,
                popup: a,
                hideActions: l,
                style: c,
              }),
              (0, wo.jsx)(Mo, {
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
function tg(t, e, o, n) {
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
var ae = u(M()),
  vp = u(Ut());
var er = u(f());
function Cp(t) {
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
    ? (0, er.jsx)(og, { onMeasureComplete: l, request: o }, a.current)
    : null;
}
function og(t) {
  let [e, o] = ae.useState(),
    n = Ce().ownerWindow;
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
    e ? vp.createPortal((0, er.jsx)(ng, { ...t, elContainer: e }), e) : null
  );
}
function ng(t) {
  let { elContainer: e, onMeasureComplete: o, request: n } = t;
  return (
    ae.useEffect(() => {
      let r = !1,
        i = (a) => {
          r || (n.fnResults(a), o(n), (r = !0));
        };
      return rg(e, n.promiseContentReady).then(i), () => i(void 0);
    }, [e, o, n]),
    (0, er.jsx)(ue, { children: n.rctToMeasure })
  );
}
async function rg(t, e) {
  e && (await e);
  let o = document;
  Be.IN_STEAMUI && o.fonts && (await o.fonts.ready);
  let n = t.getBoundingClientRect(),
    r = Math.ceil(n.height),
    i = Math.ceil(n.width);
  return { height: r, width: i };
}
var tr = class t {
    key;
    static sm_lastKey = 0;
    constructor() {
      this.key = `Modal_${t.sm_lastKey++}`;
    }
  },
  Yt = class extends tr {
    element;
    ModalUpdatedCallback = new Je();
    constructor(e) {
      super(), (this.element = e);
    }
    UpdateModal(e) {
      (this.element = e), this.ModalUpdatedCallback.Dispatch();
    }
  },
  qt = class extends tr {
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
m([g], qt.prototype, "RefModalElement", 1);
var or = class extends Yt {
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
var Rp = u(M());
var nn = class {
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
      ce(
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
          ce(
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
      ce(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let o = new Yt(e);
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
      ce(
        !this.m_bOnlyPopups,
        "Attempting to show modal in popup-only modal manager; will not display.",
      );
      let e = new qt();
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
        a = new or(
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
  Wi = class {
    m_mapModalManager = new WeakMap();
    GetModalManager(e) {
      let o = this.m_mapModalManager.get(e);
      return (
        o ||
          (console.assert(
            !1,
            `Early access to modal manager, creating one for ${e.document.title}`,
          ),
          (o = new nn()),
          this.m_mapModalManager.set(e, o)),
        o
      );
    }
    RegisterModalManager(e, o) {
      ce(
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
  rn = new Wi();
function Do(t) {
  return rn.GetModalManager(t);
}
var Hi = "kNiAxGG9vCI-";
var Pp = "_3G8oCr9ck-g-";
var pe = u(M()),
  Dp = u(Ut());
var wp = u(M());
var Xt = {
  HoverPosition: "pKS2pegh-RQ-",
  Ready: "lNlkfTairww-",
  NoSpace: "_--Ss-RzFfa4-",
  EnablePointerEvents: "WKYfhU-e-Vs-",
  HoverAboveModal: "l5PVpLvx0Ik-",
  HoverPositionOuter: "jAGa1MCcCRo-",
};
var Gi = u(f()),
  Lt = class extends wp.Component {
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
          ...S
        } = this.props,
        k = Object.assign({ left: this.state.x, top: this.state.y }, r),
        L = !o || o.visible;
      return (0, Gi.jsx)("div", {
        className: h(Xt.HoverPositionOuter, b && Xt.HoverAboveModal),
        children: (0, Gi.jsx)("div", {
          ...S,
          className: h(
            Xt.HoverPosition,
            L && this.state.hoverPositionReady && Xt.Ready,
            this.m_bNoSpace && Xt.NoSpace,
            i && Xt.EnablePointerEvents,
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
          nLeft: S,
          nTop: k,
          nOverflow: L,
          nLateralOverflow: X,
        } = Sp(_, b, d, l, c, n.innerWidth, n.innerHeight);
      if (L > (this.props.nAllowOffscreenPx ?? 10) && !p) {
        let re = ag(this.props.direction ?? "right"),
          {
            nLeft: Se,
            nTop: _e,
            nOverflow: ie,
            nLateralOverflow: me,
          } = Sp(re, b, d, l, c, n.innerWidth, n.innerHeight);
        if (
          (ie < L && ((_ = re), (S = Se), (k = _e), (L = ie), (X = me)),
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
        ([k, S] = sg(
          this.props.nMaxLateralMoveOnScreen,
          X,
          _ ?? "right",
          k,
          S,
        ));
      let oe = null;
      switch (_) {
        case "left":
          oe = i;
          break;
        case "right":
          oe = r;
          break;
        case "top":
          oe = s;
          break;
        case "bottom":
          oe = a;
          break;
      }
      oe && oe.setAttribute("style", ""),
        S != this.state.x && this.setState({ x: S }),
        k != this.state.y && this.setState({ y: k }),
        this.state.hoverPositionReady ||
          this.setState({ hoverPositionReady: !0 });
    }
  };
Oa(Lt, "defaultProps", {
  direction: "right",
  nBodyAlignment: 0.5,
  nAllowOffscreenPx: 10,
  nBodyDistance: 8,
  nMaxLateralMoveOnScreen: void 0,
}),
  m([g], Lt.prototype, "bindHover", 1),
  (Lt = m([kt], Lt));
function ag(t) {
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
function Sp(t, e, o, n, r, i, a) {
  let s = i,
    l = a,
    c = 0,
    p = 0,
    d,
    _,
    b,
    S;
  switch (t) {
    case "right":
      (d = n.right + o),
        (_ = nr(n.top, n.height, r.height, e)),
        (b = Math.max(0, d + r.width - s)),
        (S = [Math.max(0, c - _), Math.max(0, _ + r.height - l)]);
      break;
    case "left":
      (d = n.left - o - r.width),
        (_ = nr(n.top, n.height, r.height, e)),
        (b = Math.max(0, p - d)),
        (S = [Math.max(0, c - _), Math.max(0, _ + r.height - l)]);
      break;
    case "bottom":
      (d = nr(n.left, n.width, r.width, e)),
        (_ = n.bottom + o),
        (b = Math.max(0, _ + r.height - l)),
        (S = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "top":
      (d = nr(n.left, n.width, r.width, e)),
        (_ = n.top - o - r.height),
        (b = Math.max(0, c - _)),
        (S = [Math.max(0, p - d), Math.max(0, d + r.width - s)]);
      break;
    case "overlay":
      (d = n.left), (_ = n.top), (b = 0), (S = [0, 0]);
      break;
    case "overlay-center":
      (d = n.left + 0.5 * n.width - 0.5 * r.width),
        (_ = n.top + 0.5 * n.height - 0.5 * r.height),
        (b = 0),
        (S = [0, 0]);
      break;
  }
  return { nLeft: d, nTop: _, nOverflow: b, nLateralOverflow: S };
}
function nr(t, e, o, n) {
  return Math.max(0, Math.min(1, n)) * (e - o) + t;
}
function sg(t, e, o, n, r) {
  let i = Math.max(e[0], e[1]);
  t !== void 0 && (i = Math.min(t, i)), (i = Math.max(0, i));
  let a = e[0] > e[1] ? i : -i;
  return o === "left" || o === "right" ? (n += a) : (r += a), [n, r];
}
var Mp = {
  TextToolTip: "xa7nOX-adjA-",
  ToolTipCustom: "PlhA2maQjXM-",
  ToolTipTitle: "cIyIjwsfsgk-",
  Center: "anxU2KCS-vI-",
  ToolTipInsetContent: "l-gADqxrGeQ-",
};
var ot = u(f()),
  Tp = pe.createContext({}),
  lg = () => pe.useContext(Tp);
function rr(t) {
  let [e, o] = pe.useState(null),
    n = pe.useMemo(() => ({ targetElement: e }), [e]);
  return (0, ot.jsxs)(Tp.Provider, {
    value: n,
    children: [(0, ot.jsx)("div", { ref: o }), t.children],
  });
}
function ir(t) {
  let { divProps: e, tooltipProps: o } = cg({
    ...t,
    toolTipContent: t.toolTipContent
      ? (0, ot.jsx)(pg, { children: ug(t.toolTipContent) })
      : null,
  });
  return (0, ot.jsxs)(yt, {
    className: "tool-tip-source",
    noFocusRing: !0,
    focusable: t.bNavStop ?? !!e.onClick,
    ...e,
    children: [(0, ot.jsx)(dg, { ...o }), t.children],
  });
}
function cg(t) {
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
    S = {
      direction: r,
      nBodyAlignment: i,
      nBodyDistance: a,
      nAllowOffscreenPx: s,
      nMaxLateralMoveOnScreen: l,
      className: c,
      bTopmost: d,
    },
    [k, L] = pe.useState(!1),
    [X, oe] = pe.useState(),
    re = pe.useCallback((ie) => {
      L(!0), oe(ie.currentTarget);
    }, []),
    Se = pe.useCallback(() => {
      L(!1);
    }, []),
    _e = {
      active: k && !n,
      target: X,
      nDelayShowMS: o,
      hoverPositionProps: S,
      children: e,
    };
  return {
    divProps: { ...b, onMouseEnter: re, onMouseLeave: Se },
    stateHandlers: { setTarget: oe, setHovered: L },
    tooltipProps: _e,
  };
}
function ug(t) {
  return typeof t == "string" ? E(t) : t;
}
function pg(t) {
  return (0, ot.jsx)("div", {
    ...t,
    className: h(Mp.TextToolTip, t.className),
  });
}
function dg(t) {
  let {
      active: e,
      target: o,
      nDelayShowMS: n = 300,
      hoverPositionProps: r,
      children: i,
    } = t,
    [a, s] = pe.useState(e),
    l = lg();
  if (
    (pe.useEffect(() => {
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
  return Dp.createPortal(
    (0, ot.jsx)(Lt, { target: o, ...r, children: i }),
    c ?? o.ownerDocument.body,
  );
}
var j = u(f());
function mg(t) {
  nt.useEffect(() => {
    if (t)
      return (
        document.body.classList.add(Hi),
        () => document.body.classList.remove(Hi)
      );
  }, [t]);
}
function _g(t) {
  let e = Ce().ownerWindow,
    o = Mt(),
    n = nt.useCallback(() => {
      e?.SteamClient?.Window && e.SteamClient.Window.BringToFront();
    }, [e]);
  nt.useEffect(() => t.RegisterOverlay(o), [t, o]),
    nt.useEffect(() => t.RegisterOnModalShownCallback(n).Unregister, [t, n]);
}
function gg(t, e) {
  return ja(
    (o) => {
      if (!o || !e) return;
      let n = o.ownerDocument.defaultView;
      return rn.RegisterModalManager(t, n);
    },
    [t],
  );
}
function yp(t) {
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
  mg(c), _g(e);
  let d = gg(e, o),
    _ = null,
    b = !i;
  return (
    l && l.length
      ? (_ = l.map((S) => {
          let k = S == p,
            L = {
              key: S.key,
              active: k,
              rctActiveContextMenus: k && i ? r : void 0,
            };
          return S instanceof Yt
            ? (0, j.jsx)(bg, { ...L, modal: S, Component: n ?? hg })
            : S instanceof qt
              ? (0, j.jsx)(fg, { ...L, modal: S, bUseDialogElement: i })
              : void 0;
        }))
      : ((b = !0), (a = { ...a, display: "none" })),
    (0, j.jsxs)(j.Fragment, {
      children: [
        (0, j.jsxs)(Gn, {
          children: [
            (0, j.jsxs)("div", {
              ...s,
              style: a,
              ref: d,
              className: h(s.className, "FullModalOverlay"),
              children: [
                (0, j.jsx)("div", {
                  className: "ModalOverlayContent ModalOverlayBackground",
                }),
                _,
              ],
            }),
            b && r,
          ],
        }),
        (0, j.jsx)(Cp, { ModalManager: e }),
        (0, j.jsx)(vg, { ModalManager: e }),
      ],
    })
  );
}
function fg(t) {
  let {
    modal: e,
    rctActiveContextMenus: o,
    active: n,
    bUseDialogElement: r,
  } = t;
  nt.useEffect(() => {
    if (n)
      return (
        e.SetActive(n),
        () => {
          e.SetActive(!1);
        }
      );
  }, [e, n]);
  let i = (0, j.jsxs)(ue, {
    children: [
      (0, j.jsx)("div", {
        className: h("ModalOverlayContent", n ? "active" : "inactive"),
        ref: e.RefModalElement,
      }),
      o,
    ],
  });
  return r ? (0, j.jsx)(kp, { active: n, children: i }) : i;
}
function bg(t) {
  let { modal: e, active: o, rctActiveContextMenus: n, Component: r } = t,
    i = Mt();
  return (
    Dt(e.ModalUpdatedCallback, i),
    (0, j.jsx)(ue, {
      children: (0, j.jsxs)(r, {
        className: h("ModalOverlayContent", o ? "active" : "inactive"),
        active: o,
        modalKey: e.key,
        children: [n, e.element],
      }),
    })
  );
}
function hg(t) {
  let { className: e, active: o, children: n } = t;
  return (0, j.jsx)(kp, {
    active: o,
    children: (0, j.jsx)(rr, {
      children: (0, j.jsx)("div", { className: e, tabIndex: -1, children: n }),
    }),
  });
}
function kp(t) {
  let { active: e, children: o } = t,
    n = nt.useRef(null);
  return (
    nt.useEffect(() => {
      let r = n.current;
      if (!(!e || !r)) return r.showModal(), () => r.close();
    }, [e]),
    (0, j.jsx)("dialog", {
      ref: n,
      className: Pp,
      onCancel: (r) => r.preventDefault(),
      children: t.children,
    })
  );
}
function vg(t) {
  let { ModalManager: e } = t,
    o = Mt();
  return (
    Dt(e.LegacyPopupModalCountChangedCallbacks, o),
    (0, j.jsx)(j.Fragment, {
      children: e.legacy_popup_modals.map((n) =>
        (0, j.jsx)(hp, { Modal: n }, n.key),
      ),
    })
  );
}
var Qt = u(f()),
  Vi = ye.createContext({}),
  Mo = ye.memo(function (e) {
    let {
        children: o,
        bRenderOverlayAtRoot: n,
        refModalManager: r,
        DialogWrapper: i,
        bUseDialogElement: a = !0,
        ContextMenuComponent: s = dp,
        refContextMenuManager: l,
        browserInfo: c,
        bUsePopups: p,
        bOnlyPopups: d,
        bCenterPopupsOnWindow: _,
        bRegisterManagersWithWindow: b = !0,
        ...S
      } = e,
      k = ye.useRef();
    k.current || (k.current = new nn());
    let L = (0, Qt.jsx)(yp, {
      ...S,
      DialogWrapper: i,
      ModalManager: k.current,
      bUseDialogElement: a,
      bRegisterModalManager: b,
      rctActiveContextMenus: (0, Qt.jsx)(s, {}),
    });
    e.bRenderOverlayAtRoot &&
      typeof document < "u" &&
      "body" in document &&
      (L = Ap.createPortal(L, document.body)),
      qa(r, k.current),
      p !== void 0 && k.current?.SetUsePopups(p),
      _ !== void 0 && k.current?.SetCenterPopupsOnWindow(_),
      d !== void 0 && k.current?.SetOnlyPopups(d),
      k.current.SetBrowserInfo(c);
    let X = ye.useMemo(
      () => ({ ModalManager: k.current, DialogWrapper: i }),
      [i],
    );
    return (0, Qt.jsx)(Vi.Provider, {
      value: X,
      children: (0, Qt.jsxs)(lp, {
        refContextMenuManager: l,
        bRegisterMenuManager: b,
        children: [(0, Qt.jsx)(ue, { children: L }), e.children],
      }),
    });
  });
function So() {
  return ye.useContext(Vi).ModalManager;
}
function xp() {
  return ye.useContext(Vi).DialogWrapper;
}
function mp(t) {
  let e = So();
  ye.useEffect(() => {
    if (t) return rn.RegisterModalManager(e, t);
  }, [t, e]);
}
var Bd = u(M());
var It = u(M());
var ar = u(M());
var ke = u(f()),
  zi = ar.createContext({}),
  Cg = () => ar.useContext(zi);
function Jt(t) {
  let o = Cg().ModalPosition ?? Rg;
  return (0, ke.jsx)(o, { ...t });
}
function Rg(t) {
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
      a && (Dn(a, a.ownerDocument.activeElement) || a.focus());
    }));
  let n = ["ModalPosition"];
  t.className && n.push(t.className),
    t.bDestructiveWarning && n.push("Destructive");
  let r = t.renderContent || ((a) => (0, ke.jsx)("div", { ...a })),
    i = (0, ke.jsxs)(ke.Fragment, {
      children: [
        !t.hideTopBar &&
          (0, ke.jsx)("div", { className: "ModalPosition_TopBar" }),
        t.onEscKeypress &&
          !t.bHideCloseIcon &&
          (0, ke.jsx)("div", {
            className: "ModalPosition_Dismiss",
            children: (0, ke.jsx)("div", {
              className: "closeButton",
              onClick: (a) => {
                a.stopPropagation(), t.onEscKeypress();
              },
              children: (0, ke.jsx)(mo, {}),
            }),
          }),
        (0, ke.jsx)(ue, { children: t.children }),
      ],
    });
  return (0, ke.jsx)("div", {
    className: n.join(" "),
    ...e,
    ref: o,
    children: r({ className: "ModalPosition_Content", children: i }),
  });
}
var $t = u(M()),
  Bp = u(Ut());
var ji = u(f());
function Lp(t) {
  let { active: e, children: o } = t,
    n = So() || Do(window),
    r = xp(),
    [i, a] = $t.useState(null),
    [s, l] = $t.useState(!1),
    c = $t.useRef();
  if (
    ($t.useEffect(() => {
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
  let p = (0, ji.jsx)(rr, { children: o });
  return (
    r && (p = (0, ji.jsx)(r, { active: s, modalKey: c.current, children: p })),
    Bp.createPortal(p, i)
  );
}
var an = {
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
var Re = u(f());
function Ip(t) {
  let { managerOverride: e } = t,
    o = Zn(),
    n = e ?? o,
    r = Mt();
  return (
    Dt(n.OnMenusChanged, r),
    (0, Re.jsx)(Lp, {
      active: !!n.ActiveMenu,
      children: (0, Re.jsx)(Pg, { ActiveMenu: n.ActiveMenu }),
    })
  );
}
function Pg(t) {
  let { ActiveMenu: e } = t,
    o = It.useCallback(() => {
      e?.OnCancel();
    }, [e]);
  It.useEffect(() => () => e?.Hide(), [e]);
  let n = [],
    r = null;
  ys(() => {
    for (let a = e; a && a.visible; a = a.submenu)
      n.push((0, Re.jsx)(Sg, { instance: a }, a.key)), (r = a.label);
  });
  let i = It.useCallback(
    (a) => {
      a.currentTarget == a.target && o();
    },
    [o],
  );
  return (0, Re.jsx)(Jt, {
    padding: "none",
    children: (0, Re.jsxs)("div", {
      onClick: i,
      className: h("BasicUIContextMenu", an.BasicContextMenuModal),
      children: [
        r &&
          (0, Re.jsx)(Re.Fragment, {
            children: (0, Re.jsx)("div", {
              className: an.BasicContextMenuHeader,
              children: r,
            }),
          }),
        (0, Re.jsx)(O, {
          className: an.BasicContextMenuContainer,
          onCancelButton: o,
          onClick: i,
          children: n,
        }),
      ],
    }),
  });
}
function Sg(t) {
  let { instance: e } = t,
    o = Ze(),
    n = It.useCallback(() => {
      o && De.PlayNavSound(25);
    }, [o]),
    r = It.useMemo(
      () => ({
        instance: e,
        styles: an,
        presentation: 1,
        callbacks: { onDisabledItemSelected: n },
      }),
      [e, n],
    );
  return (0, Re.jsx)(ue, {
    children: (0, Re.jsx)(Ln.Provider, { value: r, children: e.ReactElement }),
  });
}
var Ue = u(M());
var Xi = u(M());
var sr = u(f());
var Yi = class {
  m_Promise;
  m_Value = void 0;
  constructor(e) {
    mt(this), (this.promise = e);
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
m([dt], Yi.prototype, "m_Value", 2);
function Fe(t) {
  return Xi.forwardRef(function (o, n) {
    return (0, sr.jsx)("div", { ...o, className: h(t, o.className), ref: n });
  });
}
function Fp(t) {
  if (typeof t != "string") return NaN;
  let o = !t.includes("ms") && t.includes("s"),
    n = Number.parseFloat(t);
  return o && (n *= 1e3), n;
}
var Np = "me1BHzZX9A0-";
var lr = u(f());
function vt(t) {
  return (0, lr.jsxs)(ir, {
    toolTipContent: t.tooltip,
    className: h(Np, "HelperTooltip", t.className),
    children: [" ", (0, lr.jsx)(Ls, {})],
  });
}
var Qi = u(M()),
  To = Qi.default.createContext({}),
  Ji = () => Qi.default.useContext(To);
function Ne(t, e) {
  return Ji()[t] ?? e;
}
var Ye = {
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
var Zt = u(f());
function Op(t) {
  let e = Ne("ToggleControl", Mg);
  return (0, Zt.jsx)(e, { ...t });
}
function Mg(t) {
  let { value: e, onChange: o, disabled: n } = t;
  return (0, Zt.jsxs)("div", {
    className: h(Ye.Toggle, n && Ye.Disabled),
    onClick: () => !n && o && o(!e),
    children: [
      (0, Zt.jsx)("div", { className: Ye.ToggleRail }),
      (0, Zt.jsx)("div", {
        className: h(Ye.ToggleRail, Ye.Highlight, e ? Ye.On : Ye.Off),
      }),
      (0, Zt.jsx)("div", { className: h(Ye.ToggleSwitch, e ? Ye.On : Ye.Off) }),
    ],
  });
}
var x = u(f());
function ur(t) {
  return Ue.forwardRef(function (o, n) {
    return (0, x.jsx)(O, { ...o, className: h(t, o.className), ref: n });
  });
}
var pr = Fe("DialogHeader"),
  pM = Fe("DialogSubHeader"),
  dM = Fe("SettingsDialogSubHeader"),
  Up = Fe("DialogFooter"),
  Dg = Fe("DialogLabel _DialogLayout"),
  Wp = Fe("DialogBodyText"),
  mM = Fe("DialogBody"),
  Hp = ur("DialogBody"),
  _M = Fe("DialogInnerBody"),
  gM = Fe("DialogControlsSection"),
  fM = Fe("DialogControlsSectionHeader"),
  Tg = ur("DialogTwoColLayout _DialogColLayout"),
  yg = ur("DialogThreeColLayout _DialogColLayout"),
  bM = ur("DialogTwoThirdColLayout _DialogColLayout"),
  hM = Fe("DialogColumn _DialogLayout");
function $i(t) {
  let e = Ne("Content", kg);
  return (0, x.jsx)(e, { ...t });
}
function kg(t) {
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
var cr = class extends Ue.Component {
  OnSubmit(e) {
    e.preventDefault(), this.props.onSubmit && this.props.onSubmit(e);
  }
  render() {
    return (0, x.jsx)("form", { ...this.props, onSubmit: this.OnSubmit });
  }
};
m([g], cr.prototype, "OnSubmit", 1);
function Gp(t) {
  let { classNameContent: e, bCenterVertically: o, ...n } = t;
  return (0, x.jsx)($i, {
    className: e,
    bCenterVertically: o,
    children: (0, x.jsx)(cr, { ...n }),
  });
}
function Vp(t) {
  let { label: e, tooltip: o, className: n, children: r } = t;
  return (0, x.jsxs)("label", {
    className: h("DialogInputLabelGroup", "_DialogLayout", n),
    children: [
      e &&
        (0, x.jsxs)(Dg, {
          children: [e, " ", o && (0, x.jsx)(vt, { tooltip: o }), " "],
        }),
      r,
    ],
  });
}
var cn = Ue.forwardRef(function (e, o) {
    let n = Ji(),
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
    return (0, x.jsxs)(Tn, {
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
  ln = Ue.forwardRef(function (e, o) {
    return (0, x.jsx)(cn, {
      preferredFocus: !0,
      type: e.onClick ? "button" : "submit",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "Primary"),
    });
  }),
  Oe = Ue.forwardRef(function (e, o) {
    return (0, x.jsx)(cn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "Secondary"),
    });
  }),
  vM = Ue.forwardRef(function (e, o) {
    return (0, x.jsx)(cn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton", "_DialogLayout", "EmptyButton"),
    });
  }),
  CM = Ue.forwardRef(function (e, o) {
    return (0, x.jsx)(cn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "DialogButton _DialogLayout Small"),
    });
  }),
  RM = Ue.forwardRef(function (e, o) {
    return (0, x.jsx)(cn, {
      type: "button",
      ...e,
      ref: o,
      className: h(e.className, "TextButton"),
    });
  });
function zp(t) {
  return (0, x.jsxs)(Tg, {
    className: t.className,
    children: [
      (0, x.jsxs)(ln, {
        onClick: t.onOK,
        disabled: t.bOKDisabled,
        autoFocus: t.focusButton == "primary",
        children: [t.strOKText || E("#Button_Confirm"), " "],
      }),
      (0, x.jsx)(Oe, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        autoFocus: t.focusButton == "secondary",
        children: t.strCancelText || E("#Button_Cancel"),
      }),
    ],
  });
}
function jp(t) {
  let e = t.bOKDisabled ? Oe : ln,
    o = t.bOKDisabled ? ln : Oe;
  return (0, x.jsxs)(yg, {
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
      (0, x.jsx)(Oe, {
        onClick: t.onCancel,
        disabled: t.bCancelDisabled,
        children: t.strCancelText || E("#Button_Cancel"),
      }),
    ],
  });
}
var Ft = class extends Ue.Component {
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
m([g], Ft.prototype, "Toggle", 1),
  m([g], Ft.prototype, "KeyDown", 1),
  m([g], Ft.prototype, "SetChecked", 1);
var PM = Ue.forwardRef(function (e, o) {
    let n = Ne("ToggleField", sn);
    return (0, x.jsx)(n, { ref: o, ...e });
  }),
  sn = class extends Ft {
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
                      (0, x.jsx)(vt, { tooltip: this.props.tooltip }),
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
                  children: (0, x.jsx)(Op, {
                    onChange: this.OnNewUIToggle,
                    value: this.checked,
                  }),
                })
              : (0, x.jsx)("div", {
                  className: "DialogToggleField_Control",
                  onClick: this.Toggle,
                  children: (0, x.jsxs)(O, {
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
m([g], sn.prototype, "OnOffKeyDown", 1),
  m([g], sn.prototype, "OnNewUIToggle", 1);
var rt = u(M());
var dr = class extends Qs {
  m_component;
  m_propTargets;
  m_props = {};
  m_setStateOnComplete;
  constructor(e, o, n) {
    super(Za(e.ref.current), n),
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
  Ag = rt.forwardRef(function (e, o) {
    let n = Ne("InputElement", uo);
    return (0, F.jsx)(n, { ...e, ref: o });
  }),
  Nt = class Nt extends rt.PureComponent {
    m_CopiedAnimation;
    ref = rt.createRef();
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
          this.props.mustBeURL == !0 && !Nt.validateUrl(this.m_elInput?.value),
        m_strInvalidURLMessage: this.props.fnStrValidateURL
          ? this.props.fnStrValidateURL(this.m_elInput?.value)
          : null,
        m_bIsInvalidEmail:
          this.props.mustBeEmail == !0 &&
          !Nt.validateEmail(this.m_elInput?.value),
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
            (this.m_CopiedAnimation = new dr(
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
      ce(
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
          tooltip: S,
          inlineControls: k,
          maxChars: L,
          ...X
        } = this.props,
        oe =
          "DialogInput DialogInputPlaceholder DialogTextInputBase" +
          (X.className ? " " + X.className : ""),
        re = "copiedAnimation",
        Se = this.state.m_bCompletedCopiedAnimation;
      this.m_CopiedAnimation && (re = "copiedAnimation animationPlaying"),
        Se && (re = "copiedAnimation animationComplete");
      let _e = {};
      this.state.m_CopiedYPos !== void 0 &&
        (_e.transform = "translateY(" + this.state.m_CopiedYPos + "px)");
      let ie = (0, F.jsxs)(rt.Fragment, {
        children: [
          (0, F.jsxs)(O, {
            className: "DialogInput_Wrapper _DialogLayout",
            "flow-children": "row",
            ref: this.ref,
            children: [
              (0, F.jsx)(Ag, {
                type: "text",
                ...X,
                className: oe,
                ref: this.OnInputRef,
                onChange: this.OnChanged,
              }),
              r &&
                (0, F.jsxs)("div", {
                  className: "displayRow",
                  children: [
                    (0, F.jsx)(Oe, {
                      className: "DialogInput_CopyAction Primary",
                      onClick: this.OnCopyClick,
                      children: E("#Button_Copy"),
                    }),
                    (0, F.jsx)("div", {
                      style: _e,
                      className: re,
                      children: E("#Button_Copied"),
                    }),
                  ],
                }),
              (a || (i && X.value)) &&
                (0, F.jsx)("div", {
                  className: "DialogInput_ClearAction",
                  onClick: this.OnClearClick,
                  children: (0, F.jsx)(mo, {}),
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
                      (0, F.jsx)(vt, { tooltip: this.props.tooltip }),
                    (0, F.jsx)("span", {
                      className: "DialogInputRequirementLabel",
                      children: this.props.requiredLabel,
                    }),
                    " ",
                  ],
                }),
                ie,
                this.state.m_bNumberBelowMinRange
                  ? (0, F.jsxs)("div", {
                      children: [" ", E("#Input_Error_NumberTooSmall"), " "],
                    })
                  : null,
                this.state.m_bNumberAboveMaxRange
                  ? (0, F.jsxs)("div", {
                      children: [" ", E("#Input_Error_NumberTooLarge"), " "],
                    })
                  : null,
                this.state.m_bIsInvalidURL
                  ? (0, F.jsxs)("div", {
                      children: [" ", E("#Input_Error_MustBeURL"), " "],
                    })
                  : null,
                this.state.m_strInvalidURLMessage
                  ? (0, F.jsxs)("div", {
                      children: [" ", this.state.m_strInvalidURLMessage, " "],
                    })
                  : null,
                this.state.m_bIsInvalidEmail
                  ? (0, F.jsxs)("div", {
                      children: [" ", E("#Input_Error_MustBeEmail"), " "],
                    })
                  : null,
                this.state.m_bIsNotNumeric
                  ? (0, F.jsxs)("div", {
                      children: [" ", E("#Input_Error_MustBeNumber"), " "],
                    })
                  : null,
                this.state.m_bAboveMaxChars
                  ? (0, F.jsxs)("div", {
                      children: [
                        " ",
                        Rs("#Input_Error_TooManyCharacters", L),
                        " ",
                      ],
                    })
                  : null,
              ],
            }),
          })
        : ie;
    }
  };
m([g], Nt.prototype, "OnInputRef", 1),
  m([g], Nt.prototype, "OnChanged", 1),
  m([g], Nt.prototype, "OnCopyClick", 1),
  m([g], Nt.prototype, "OnClearClick", 1);
var Kt = Nt,
  un = class extends Kt {
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
        focusOnMount: S,
        tooltip: k,
        inlineControls: L,
        className: X,
        children: oe,
        ...re
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
              children: (0, F.jsxs)(O, {
                className: "DialogListBuilderInput_List",
                "flow-children": "row",
                children: [
                  rt.Children.map(oe, (Se, _e) =>
                    (0, F.jsx)(
                      "div",
                      {
                        className: "DialogListBuilderInput_ListItem",
                        children: Se,
                      },
                      _e,
                    ),
                  ),
                  (0, F.jsx)(uo, {
                    type: "text",
                    ...re,
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
m([g], un.prototype, "OnBackgroundClick", 1),
  m([g], un.prototype, "OnInputFocus", 1),
  m([g], un.prototype, "OnInputBlur", 1);
var qp = u(M());
var it = u(f()),
  Yp = (t, e) =>
    "" + (t != null ? Number.parseFloat(t.toFixed(3)) : null) + (e ?? "");
var Ct = class extends qp.Component {
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
      s = this.props.renderValue ?? Yp;
    return (0, it.jsxs)("div", {
      className:
        "DialogSlider_Container _DialogInputContainer _DialogLayout" +
        (this.props.className ? " " + this.props.className : ""),
      onKeyDown: this.OnKeyDown,
      tabIndex: this.props.tabIndex || 0,
      children: [
        n &&
          (0, it.jsxs)("div", {
            className: "DialogLabel",
            children: [n, !!i && (0, it.jsx)(vt, { tooltip: i })],
          }),
        (0, it.jsxs)("div", {
          className: "DialogSlider_Slider",
          onMouseDown: this.OnMouseDown,
          onTouchStart: this.OnTouchStart,
          children: [
            (0, it.jsx)("div", { className: "DialogSlider_Value", style: e }),
            (0, it.jsx)("div", { className: "DialogSlider_Grabber", style: o }),
          ],
        }),
        this.props.showValue &&
          (0, it.jsx)("div", {
            className: "DialogLabelExplainer",
            children: s(this.props.value, this.props.valueSuffix),
          }),
        r &&
          (0, it.jsx)("div", {
            className: "DialogLabelExplainer",
            children: r,
          }),
      ],
    });
  }
};
m([g], Ct.prototype, "OnMouseDown", 1),
  m([g], Ct.prototype, "OnMouseMove", 1),
  m([g], Ct.prototype, "OnMouseUp", 1),
  m([g], Ct.prototype, "OnTouchStart", 1),
  m([g], Ct.prototype, "OnTouchMove", 1),
  m([g], Ct.prototype, "OnTouchEnd", 1),
  m([g], Ct.prototype, "OnKeyDown", 1);
var Xp = u(M());
var Eg = u(f()),
  xg = { setValue: () => {} },
  ZM = Xp.default.createContext(xg);
var be = u(M());
var pn = {
  DialogDropDownMenu_Item: "jHkXIJHJm88-",
  DialogDropDownMenu_Separator: "_8Ba71jUzzWw-",
  DialogDropDownMenu: "_865BbeRmTtw-",
};
var Y = u(f());
function Rt(t) {
  return typeof t == "object" && "data" in t;
}
function eo(t) {
  return typeof t == "object" && "bIsSeparator" in t;
}
function st(t) {
  return typeof t == "object" && "options" in t;
}
function Ki(t, e) {
  if (t === e) return !0;
  if (!Array.isArray(t) || !Array.isArray(e) || t.length != e.length) return !1;
  for (let o = 0; o < t.length; o++) if (!ea(t[o], e[o])) return !1;
  return !0;
}
function ea(t, e) {
  return t == null || e == null
    ? t == e
    : eo(t) && eo(e)
      ? !0
      : !(
          eo(t) ||
          eo(e) ||
          t.label !== e.label ||
          t.tooltip !== e.tooltip ||
          st(t) != st(e) ||
          (st(t) && st(e) && !Ki(t.options, e.options)) ||
          (Rt(t) && Rt(e) && t.data !== e.data)
        );
}
function mr(t, e) {
  if (t != null)
    for (let o = 0; o < t.length; o++) {
      let n = t[o];
      if (Rt(n) && n.data === e) return n;
      if (st(n)) {
        let r = mr(n.options, e);
        if (r != null) return r;
      }
    }
}
function Bg(t) {
  let e = Ne("DropDownField", Lg);
  return (0, Y.jsx)(e, { ...t });
}
function Lg(t) {
  let {
    label: e,
    tooltip: o,
    strClassName: n,
    dropDownControlRef: r,
    ...i
  } = t;
  return (0, Y.jsx)(Vp, {
    label: e,
    tooltip: o,
    className: n,
    children: (0, Y.jsx)(at, { menuLabel: e, ...i, ref: r }),
  });
}
var Ig = be.forwardRef(function (e, o) {
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
            children: (0, Y.jsx)(As, {}),
          }),
      ],
    });
  }),
  at = class extends be.Component {
    static contextType = To;
    m_elInput;
    m_iMenuInstance;
    constructor(e) {
      super(e),
        (this.state = {
          value: mr(e.rgOptions, e.selectedOption),
          bOpened: !1,
        });
    }
    SetSelectedOption(e) {
      if (this.props.controlled) return;
      let o = mr(this.props.rgOptions, e);
      ea(o, this.value) || this.setState({ value: o });
    }
    get value() {
      return this.props.controlled
        ? mr(this.props.rgOptions, this.props.selectedOption)
        : this.state.value;
    }
    shouldComponentUpdate(e, o, n) {
      if (
        e.selectedOption !== this.props.selectedOption ||
        e.disabled != this.props.disabled ||
        o.bOpened !== this.state.bOpened ||
        !Ki(this.props.rgOptions, e.rgOptions) ||
        !ea(o.value, this.value)
      )
        return !0;
      let r = ["selectedOption", "tabIndex", "onChange", "strDefaultLabel"];
      for (let i of r) if (e[i] !== this.props[i]) return !0;
      return !1;
    }
    componentDidUpdate(e, o) {
      wn(
        this.props.controlled === e.controlled,
        '"controlled" prop should never change after mount',
      );
      let n = !Ki(e.rgOptions, this.props.rgOptions),
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
      (this.m_iMenuInstance = Go(
        (0, Y.jsx)(Fg, {
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
      Jp(e, this.props.rgOptions.filter(Rt), this.value?.data, (o) =>
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
        r = this.props.renderButton || this.context.DropDownControlButton || Ig;
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
m([g], at.prototype, "OnInputRef", 1),
  m([g], at.prototype, "ToggleMenu", 1),
  m([g], at.prototype, "OnValueSelected", 1),
  m([g], at.prototype, "ShowMenu", 1),
  m([g], at.prototype, "HideMenu", 1),
  m([g], at.prototype, "OnKeyDown", 1);
var Qp = be.createContext(null);
function Fg(t) {
  let e = Ne("DropDownMenu", Ng);
  return (0, Y.jsx)(Qp.Provider, {
    value: {},
    children: (0, Y.jsx)(e, { ...t }),
  });
}
function Jp(t, e, o, n) {
  let r;
  if (t.key === "ArrowDown")
    r = (e.findIndex((a) => a.data === o) + 1) % e.length;
  else if (t.key === "ArrowUp") {
    let i = e.findIndex((a) => a.data === o);
    r = i <= 0 ? e.length - 1 : i - 1;
  }
  r !== void 0 && (n(e[r]), t.preventDefault());
}
function Ng(t) {
  let {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      selectedValue: r,
    } = t,
    [i, a] = be.useState(r),
    s = be.useMemo(() => e.filter(Rt), [e]),
    l = be.useCallback(
      (c) => {
        Jp(c, s, i, (p) => a(p.data));
      },
      [i, s],
    );
  return (0, Y.jsx)("div", {
    className: h(
      pn.DialogDropDownMenu,
      "_DialogInputContainer",
      t.strDropDownMenuCtnClass,
    ),
    onKeyDown: l,
    children: (0, Y.jsx)($p, {
      rgOptions: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: i,
      setActiveValue: a,
    }),
  });
}
function $p(t) {
  let { rgOptions: e, ...o } = t;
  return e.map((n, r) =>
    eo(n)
      ? (0, Y.jsx)(
          "hr",
          {
            className: h(
              pn.DialogDropDownMenu_Item,
              pn.DialogDropDownMenu_Separator,
            ),
          },
          r,
        )
      : st(n)
        ? (0, Y.jsx)($p, { ...o, rgOptions: n.options }, r)
        : (0, Y.jsx)(Og, { ...o, option: n }, r),
  );
}
function Og(t) {
  let {
      option: e,
      strDropDownItemClassName: o,
      onValueSelected: n,
      activeValue: r,
      setActiveValue: i,
    } = t,
    a = be.useCallback((c) => c && c.focus(), []),
    s = be.useCallback(() => {
      i(e.data);
    }, [i, e]),
    l = e.data === r;
  return (0, Y.jsx)("button", {
    type: "button",
    className: h(
      pn.DialogDropDownMenu_Item,
      o,
      e.strOptionClass,
      l && "ContextMenuAutoFocus",
    ),
    onClick: (c) => n(c, e),
    ref: l ? a : void 0,
    onMouseEnter: s,
    children: e.tooltip
      ? (0, Y.jsx)(ir, {
          toolTipContent: e.tooltip,
          bTopmost: !0,
          className: "TooltipContainer",
          children: e.label,
        })
      : (0, Y.jsx)("div", { children: e.label }),
  });
}
var Zi = class extends be.Component {
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
      (0, Y.jsx)(Bg, { ...r, rgOptions: i, onMenuOpened: this.OnMenuOpened })
    );
  }
};
m([g], Zi.prototype, "OnMenuOpened", 1);
var Wg = u(M());
var Zp = u(f());
var Ae = u(M());
var Kp = u(im());
var ta = class {
  activeObject;
  instance;
  constructor(e) {
    this.instance = new oa(e, !1);
  }
};
var oa = class {
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
          (this.m_reactRoot = Kp.createRoot(this.m_container)),
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
      return this.m_container && Dn(this.m_container, e);
    }
  },
  _r = class {
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
      return o || ((o = new ta(e.body)), this.m_mapEmbeddedHovers.set(e, o)), o;
    }
  };
var Pe = u(f()),
  dn = new ts("DragDrop").Debug;
var na = class extends Ae.Component {
  m_coordinator = new gr();
  OnDrop(e, o) {
    o > e && o--, o != e && this.props.onReorder(e, o);
  }
  render() {
    let e = [];
    return (
      e.push(
        (0, Pe.jsx)(
          hr,
          {
            coordinator: this.m_coordinator,
            fnBAcceptDraggable: (n) => n.props.data != 0,
            fnOnDrop: (n) => this.OnDrop(n.props.data, 0),
          },
          "dropregion_top",
        ),
      ),
      Ae.Children.forEach(this.props.children, (n, r) => {
        let i = n.props.id || "__list_" + r,
          a = r + 1;
        e.push(
          (0, Pe.jsx)(
            We,
            { coordinator: this.m_coordinator, data: r, children: n },
            i,
          ),
        ),
          e.push(
            (0, Pe.jsx)(
              hr,
              {
                coordinator: this.m_coordinator,
                fnBAcceptDraggable: (s) => s.props.data != a,
                fnOnDrop: (s) => this.OnDrop(s.props.data, a),
              },
              "dropregion_" + i,
            ),
          );
      }),
      (0, Pe.jsx)("div", { className: "DialogReorderableList", children: e })
    );
  }
};
m([g], na.prototype, "OnDrop", 1);
function Hg(t) {
  if ("touches" in t) {
    let e = t;
    return [e.touches[0].clientX, e.touches[0].clientY];
  } else return [t.clientX, t.clientY];
}
function ra(t, e, o, n) {
  return n
    ? o && t > o.left && t < o.right && e > o.top && e < o.bottom
    : o && t >= o.left && t <= o.right && e >= o.top && e <= o.bottom;
}
var gr = class {
  m_embeddedElement = new _r("DragGhosts");
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
    No(this.m_rgDropRegions, e),
      No(this.m_rgActiveDropRegions, e),
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
      n = Ae.cloneElement(e, { ref: this.OnDragGhostRef, className: o });
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
    ce(
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
        if (ra(r, i, d) && !ra(c, p, d, !0)) {
          let _ = Rn(c, d.left, d.right, d.left - 200, d.right + 200),
            b = Rn(p, d.top, d.bottom, d.top - 100, d.bottom + 100),
            S = 50;
          this.m_dragOffWindowTimer = window.setTimeout(() => {
            e == this.m_activeDraggable && this.OnDrag(e, _, b);
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
m([g], gr.prototype, "OnDragGhostRef", 1);
var ed = 5,
  We = class extends Ae.Component {
    constructor(e) {
      super(e), mt(this);
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
    m_divRef = Ae.createRef();
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
      dn("ProcessDragMove", e, this.props.data);
      let [o, n] = Hg(e);
      if (!this.m_DragInfo.bStarted)
        Math.pow(o - (this.m_DragInfo.startClientX ?? 0), 2) +
          Math.pow(n - (this.m_DragInfo.startClientY ?? 0), 2) >=
          ed * ed &&
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
      dn("ResetDragState", this.props.data),
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
      dn("HTMLDragStart", e, this.props.data, this.props.strHTMLDragData),
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
      dn("HTMLDrag", e, e.dataTransfer?.types.length), this.ProcessDragMove(e);
    }
    OnHTMLDragEnd(e) {
      dn(
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
        (0, Pe.jsx)("div", {
          ref: this.m_divRef,
          className: S,
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
        : (0, Pe.jsx)(fr, { elContent: this.GetClone() });
    }
    renderDragGhost() {
      return this.props.fnRenderDragGhost
        ? this.props.fnRenderDragGhost()
        : (0, Pe.jsx)(br, {
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
m([g], We.prototype, "ProcessDragMove", 1),
  m([g], We.prototype, "OnMouseDown", 1),
  m([g], We.prototype, "OnMouseUp", 1),
  m([g], We.prototype, "OnTouchStart", 1),
  m([g], We.prototype, "OnTouchEnd", 1),
  m([fs], We.prototype, "ResetDragState", 1),
  m([g], We.prototype, "OnHTMLDragStart", 1),
  m([g], We.prototype, "OnHTMLDrag", 1),
  m([g], We.prototype, "OnHTMLDragEnd", 1);
var fr = class extends Ae.Component {
  OnRef(e) {
    e && this.props.elContent && e.appendChild(this.props.elContent);
  }
  render() {
    return (0, Pe.jsx)("div", {
      className: "DialogDraggable_DropGhost",
      ref: this.OnRef,
    });
  }
};
m([g], fr.prototype, "OnRef", 1);
var br = class extends Ae.Component {
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
      return (0, Pe.jsx)("div", {});
    let e = {
        left: this.state.clientX - (this.props.offsetX || 0),
        top: this.state.clientY - (this.props.offsetY || 0),
        width: this.props.width || "auto",
        height: this.props.height || "auto",
        perspective: "600px",
      },
      o = Rn(
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
    return (0, Pe.jsx)("div", {
      className: r,
      style: e,
      children: (0, Pe.jsx)("div", { ref: this.OnRef, style: n }),
    });
  }
};
m([g], br.prototype, "OnRef", 1);
var ia = class extends Ae.Component {
    m_divRef = Ae.createRef();
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
      return ra(e, o, this.GetClientRect());
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
      return (0, Pe.jsxs)(yt, {
        ref: Mn(p, this.m_divRef),
        className: _,
        ...d,
        focusable: c === void 0 ? !!d.onClick : c,
        children: [this.state.dropGhost, l],
      });
    }
  },
  hr = class extends ia {
    BDraggableInRegion(e, o, n) {
      let r = this.GetClientRect();
      return r
        ? e >= r.left && e <= r.right && o >= r.top - 20 && o <= r.bottom + 20
        : !1;
    }
  };
var H = u(M());
var lt = {
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
var W = u(f()),
  Gg = "separator",
  Vg = "spacer",
  mn = class {
    constructor() {
      mt(this);
    }
    m_flPageListScrollTop = 0;
    m_flPageScrollTop = 0;
  };
m([dt], mn.prototype, "m_flPageListScrollTop", 2),
  m([dt], mn.prototype, "m_flPageScrollTop", 2);
var to = class to {
  static s_Instance;
  static Get() {
    return to.s_Instance || (to.s_Instance = new to()), to.s_Instance;
  }
  constructor() {
    mt(this);
  }
  m_setPagedSettingsInstances = new Set();
};
m([dt], to.prototype, "m_setPagedSettingsInstances", 2);
var vr = to;
function zg(t) {
  let {
    stylesheet: e,
    pages: o,
    iActivePage: n,
    onPageSelected: r,
    PageListItemComponent: i = jg,
    PageListSeparatorComponent: a = qg,
  } = t;
  return o.map((s, l) => {
    let c = l === n;
    if (s === Gg) {
      let p = l === n + 1 || l === n - 1;
      return (0, W.jsx)(a, { bTransparent: p }, l);
    } else {
      if (s === Vg)
        return (0, W.jsx)("div", { className: lt.PageListSpacer }, l);
      {
        if (s.visible === !1) return null;
        let p = s.identifier || s.title || l.toString(),
          d = () => r(l, s);
        return (0, W.jsx)(
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
function jg(t) {
  let { title: e, icon: o, active: n, className: r, onClick: i, ...a } = t;
  return (0, W.jsxs)("div", {
    className: r,
    onClick: i,
    children: [
      o
        ? (0, W.jsx)("div", { className: lt.PageListItem_Icon, children: o })
        : null,
      (0, W.jsx)("div", {
        className: lt.PageListItem_Title,
        ...a,
        children: e,
      }),
    ],
  });
}
var td = H.forwardRef(function (e, o) {
  let { activePage: n, style: r, stylesheet: i } = e,
    a = n?.padding ?? "standard";
  return (0, W.jsxs)($i, {
    style: r,
    className: h(
      i?.PagedSettingsDialog_PageContent,
      n?.pageClassName,
      a == "none" && i?.NoPadding,
    ),
    refElem: o,
    children: [
      n?.header,
      !n?.hideTitle && (0, W.jsx)(pr, { children: n?.title }),
      (0, W.jsx)(ue, { children: n?.content }),
    ],
  });
});
function qg(t) {
  return (0, W.jsx)("div", {
    className: h(lt.PageListSeparator, { [lt.Transparent]: t.bTransparent }),
  });
}
var od = H.forwardRef(function (e, o) {
  let { stylesheet: n = lt, pages: r, onPageRequested: i } = e,
    a = e.page == null,
    [s, l] = H.useState(() =>
      e.startingPage === void 0
        ? -1
        : r.findIndex(
            (me) => typeof me == "object" && me.identifier === e.startingPage,
          ),
    ),
    c = s;
  a ||
    (c = r.findIndex(
      (me) => typeof me == "object" && me.identifier === e.page,
    )),
    (c < 0 || c >= r.length) && (c = 0);
  let p = null;
  typeof r[c] == "object" && (p = r[c]);
  let d = H.useRef(null),
    _ = H.useCallback(() => d.current?.TakeFocus(), [d]),
    [b, S] = H.useState(!1),
    k = (me) => {
      me && S(!0);
    },
    L = H.useCallback(
      (me, so) => {
        S(!0),
          De.PlayNavSound(15),
          i && i(so.identifier),
          so.click ? so.click() : a && l(me);
      },
      [a, i],
    ),
    X = H.useRef(null),
    oe = (me) => {
      me.detail.button == 1 && X.current?.TakeFocus(me.detail.button);
    },
    re = e.showTitle ?? !0,
    Se = h("DialogContentTransition", n.PagedSettingDialog_ContentColumn);
  H.useEffect(() => {
    e.bAutoFocusPageContent && X.current?.TakeFocus();
  }, []);
  let { refForPageList: _e, refForPage: ie } = Qg();
  return (0, W.jsxs)(O, {
    className: h(n.PagedSettingsDialog, e.className),
    ref: o,
    children: [
      (0, W.jsxs)(O, {
        className: h(
          n.PagedSettingsDialog_PageListColumn,
          e.hideList && lt.Hidden,
          "PageListColumn",
        ),
        navRef: d,
        onButtonDown: oe,
        onFocusWithin: k,
        children: [
          re &&
            (0, W.jsx)("div", {
              className: n.PagedSettingsDialog_Title,
              children: e.title,
            }),
          e.topControls && (0, W.jsx)("div", { children: e.topControls }),
          (0, W.jsx)(O, {
            className: h(
              n.PagedSettingsDialog_PageList,
              e.disablePageListScrolling &&
                n.PagedSettingsDialog_PageList_DisableScrolling,
              re && n.PagedSettingsDialog_PageList_ShowTitle,
              e.bNoHeaderPadding &&
                n.PageSettingsDialog_PageList_NoHeaderPadding,
            ),
            navEntryPreferPosition: 4,
            ref: _e,
            children: (0, W.jsx)(zg, {
              stylesheet: n,
              pages: r,
              iActivePage: c,
              onPageSelected: L,
              PageListItemComponent: e.PageListItemComponent,
              PageListSeparatorComponent: e.PageListSeparatorComponent,
            }),
          }),
          e.bottomControls && (0, W.jsx)("div", { children: e.bottomControls }),
        ],
      }),
      (0, W.jsxs)(O, {
        className: Se,
        onCancelButton: b ? _ : void 0,
        navRef: X,
        children: [
          e.toggleHideList &&
            (0, W.jsx)(Xg, {
              hideList: e.hideList,
              toggleHideList: e.toggleHideList,
            }),
          e.renderPageContent
            ? e.renderPageContent(p, ie, td)
            : (0, W.jsx)(td, { ref: ie, activePage: p, stylesheet: n }),
        ],
      }),
    ],
  });
});
var Yg = H.createContext(!1);
var XD = H.memo(function (e) {
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
  return (0, W.jsx)(Yg.Provider, {
    value: o,
    children: (0, W.jsx)(i, { ref: n, style: l, activePage: r, stylesheet: a }),
  });
});
function Xg(t) {
  let { hideList: e, toggleHideList: o } = t;
  return (0, W.jsx)("div", {
    className: h(lt.HidePageListButton, e && lt.ListHidden),
    onClick: o,
    children: e
      ? (0, W.jsx)(Hr, { direction: "right" })
      : (0, W.jsx)(Hr, { direction: "left" }),
  });
}
function Qg() {
  let t = H.useMemo(() => new mn(), []);
  H.useEffect(
    () => (
      vr.Get().m_setPagedSettingsInstances.add(t),
      () => {
        vr.Get().m_setPagedSettingsInstances.delete(t);
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
    n = Lr("scroll", e),
    r = Lr("scroll", o),
    i = H.useCallback(
      (c) => (t.m_flPageListScrollTop = c?.scrollTop ?? 0),
      [t],
    ),
    a = H.useCallback((c) => (t.m_flPageScrollTop = c?.scrollTop ?? 0), [t]),
    s = Me(n, i),
    l = Me(r, a);
  return { refForPageList: s, refForPage: l };
}
var Cr = u(M());
var nd = u(f()),
  Ot = class extends Cr.Component {
    m_refTextArea = Cr.createRef();
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
      return (0, nd.jsx)(ms, {
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
m([g], Ot.prototype, "InternalOnInput", 1),
  m([g], Ot.prototype, "OnKeyUp", 1),
  m([g], Ot.prototype, "OnBlur", 1),
  m([g], Ot.prototype, "OnClick", 1),
  m([g], Ot.prototype, "OnPaste", 1),
  m([g], Ot.prototype, "OnCut", 1);
var ct = u(M());
var y = {
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
var gn = u(M());
var la = u(M());
var sa = u(f());
async function Jg(t, e, o) {
  let n = Do(e),
    r = o?.bForcePopOut || id(n);
  ce(
    !(r && o?.bNeverPopOut),
    "Conflicting popout options; will ignore bNeverPopOut",
  );
  let i = !r && o?.bNeverPopOut === !0,
    a = id(n) || (!i && sd(n, e)),
    s = r && o?.popupWidth && o?.popupHeight,
    l;
  if (a && !s) {
    let p = la.cloneElement(t, { closeModal: () => {} });
    l = await $g(n, p, o?.promiseRenderComplete);
  }
  let c = l && l.height / e.innerHeight < 0.9 && l.width / e.innerWidth < 0.8;
  if (i || (!r && c)) return rd(t, e, void 0, { fnOnClose: o?.fnOnClose });
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
      _ = o?.browserContext || e.browserInfo;
    return rd(t, e, p.strTitle, p, _, d, n);
  }
}
async function ad(t, e, o) {
  return Jg(t, e, { bHideMainWindowForPopouts: !0, ...o });
}
function rd(t, e, o, n, r, i, a) {
  let s,
    l,
    c = t.props.closeModal,
    p = () => {
      l && l.Close(), c && c(), n?.fnOnClose && n.fnOnClose();
    },
    d = () => {
      s && s.Close(), p();
    },
    _ = la.cloneElement(t, { closeModal: d });
  if (((a = a || Do(e)), sd(a, e) && n && o)) {
    if (n.bHideMainWindowForPopouts) {
      let S = (0, sa.jsx)(Jt, {
        className: "Hidden",
        onEscKeypress: _.props.bDisableBackgroundDismiss ? void 0 : d,
        children: (0, sa.jsx)("div", {}),
      });
      l = a.ShowModal(S);
    }
    let b = { ...n, fnOnClose: p, browserContext: r };
    s = a.ShowLegacyPopupModal(o, _, b, i);
  } else s = a.ShowModal(_);
  return s;
}
function sd(t, e) {
  return (t = t || Do(e || window)), Be.USE_POPUPS && t.BUsePopups();
}
function id(t) {
  return t.BOnlyPopups && t.BOnlyPopups();
}
async function $g(t, e, o) {
  return new Promise((n, r) => {
    t.RequestModalMeasure(e, n, o);
  });
}
var ca = u(M());
var ua = u(f()),
  ld = kt((t) => {
    let { onCancel: e, closeModal: o, bOKDisabled: n, onOK: r } = t,
      i = Ze();
    ce(
      o || e,
      `Either closeModal or onCancel should be passed to GenericDialog. Classes: ${t.className} ${t.modalClassName}`,
    );
    let a = ca.useCallback(() => {
        (e && e()) || (o && o());
      }, [e, o]),
      s = ca.useCallback(async () => {
        n || (r && (await r()), o && o());
      }, [n, r, o]);
    return (0, ua.jsx)(Jt, {
      onEscKeypress: a,
      className: t.modalClassName,
      bDestructiveWarning: t.bDestructiveWarning,
      bDisableBackgroundDismiss: t.bDisableBackgroundDismiss,
      bHideCloseIcon: t.bHideCloseIcon,
      children: (0, ua.jsx)(Gp, {
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
var de = u(f());
var yo = class extends gn.Component {
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
      _ = (0, de.jsx)(zp, {
        bOKDisabled: this.props.bOKDisabled,
        bCancelDisabled: this.props.bCancelDisabled,
        strOKText: n,
        onCancel: this.Cancel(this.props.onCancel),
        strCancelText: r,
      });
    return (
      l
        ? (_ = (0, de.jsx)(ln, { children: d }))
        : s &&
          (_ = (0, de.jsx)(jp, {
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
      (0, de.jsxs)(ld, {
        ...p,
        children: [
          (0, de.jsxs)(pr, {
            children: [
              " ",
              e || (0, de.jsx)(de.Fragment, { children: " " }),
              " ",
            ],
          }),
          (0, de.jsxs)(Hp, {
            onCancelButton: this.Cancel(i || this.props.onCancel),
            children: [
              (0, de.jsxs)(Wp, { children: [o, c] }),
              (0, de.jsx)(Up, { children: _ }),
            ],
          }),
        ],
      })
    );
  }
};
yo = m([kt], yo);
var Rr = class extends gn.Component {
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
    return (0, de.jsx)(yo, { ...e });
  }
};
Rr = m([kt], Rr);
var _n = class extends gn.Component {
  render() {
    let e = {
      onOK: () => {},
      onCancel: () => {},
      bAlertDialog: !0,
      ...this.props,
    };
    return (
      (e.strDescription = (0, de.jsxs)("span", {
        style: { whiteSpace: "pre-line" },
        children: [" ", e.strDescription, " "],
      })),
      (0, de.jsx)(yo, { ...e })
    );
  }
};
_n = m([kt], _n);
function cd(t, e, o) {
  ad((0, de.jsx)(_n, { strTitle: t, strDescription: e }), o);
}
var se = u(f()),
  ko = ct.forwardRef(function (e, o) {
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
        className: S,
        highlightOnFocus: k,
        indentLevel: L,
        verticalAlignment: X,
        iconLocation: oe,
        tooltip: re,
        explainer: Se,
        explainerTitle: _e,
        ...ie
      } = e,
      me = Ze(),
      so = s ?? "inline",
      Aa = oe ?? "front",
      xa = Aa == "front" && !!i,
      Ea = Aa == "before-children" && !!i,
      Tr = so == "inline" && !!a,
      Ba = so == "below" && !!a,
      $d = l ?? (me ? "shift-children-below" : "keep-inline"),
      yr = !!(ie.onClick || ie.onActivate || ie.focusable),
      La = (i != null && xa) || n != null || (Tr && a != null),
      Ia = c ?? "min",
      Zd = p ?? "standard",
      Fa = d ?? "standard",
      Na = b ?? "standard",
      Kd = k ?? !0,
      em = L ?? 0,
      tm = X ?? "center",
      om = Zg(_e ?? n, Se),
      kr = ct.useRef(),
      nm = Me(kr, e.navRef),
      rm = ct.useCallback(
        (Ar) => {
          kr.current?.TakeFocus(), Ar.preventDefault();
        },
        [kr],
      );
    return (0, se.jsxs)(O, {
      focusable: yr,
      noFocusRing: !0,
      scrollIntoViewWhenChildFocused: !0,
      onActivate: (Ar) => ie.onClick?.(Ar),
      ref: o,
      onMouseDown: yr ? void 0 : rm,
      ...ie,
      ...om,
      navRef: nm,
      className: h(
        S,
        y.Field,
        _ && y.Disabled,
        La && y.WithFirstRow,
        Tr && y.WithChildrenInline,
        Ba && y.WithChildrenBelow,
        tm == "center" && y.VerticalAlignCenter,
        $d == "shift-children-below" && y.InlineWrapShiftsChildrenBelow,
        !!r && y.WithDescription,
        Na == "standard" && y.WithBottomSeparatorStandard,
        Na == "thick" && y.WithBottomSeparatorThick,
        Ia == "fixed" && y.ChildrenWidthFixed,
        Ia == "max" && y.ChildrenWidthGrow,
        Zd == "standard" && y.ExtraPaddingOnChildrenBelow,
        Fa == "standard" && y.StandardPadding,
        Fa == "compact" && y.CompactPadding,
        yr && y.Clickable,
        Kd && y.HighlightOnFocus,
      ),
      style: { "--indent-level": em },
      children: [
        La &&
          (0, se.jsxs)("div", {
            className: y.FieldLabelRow,
            children: [
              (0, se.jsxs)("div", {
                className: y.FieldLabel,
                children: [
                  xa &&
                    (0, se.jsx)("div", {
                      className: h(y.FieldIcon, y.Front),
                      children: i,
                    }),
                  n,
                  re && (0, se.jsx)(vt, { tooltip: re }),
                ],
              }),
              Tr &&
                (0, se.jsxs)("div", {
                  className: y.FieldChildrenWithIcon,
                  children: [
                    Ea &&
                      (0, se.jsx)("div", {
                        className: h(y.FieldIcon, y.BeforeChildren),
                        children: i,
                      }),
                    (0, se.jsx)("div", {
                      className: y.FieldChildrenInner,
                      children: a,
                    }),
                  ],
                }),
            ],
          }),
        Ba &&
          (0, se.jsxs)("div", {
            className: y.FieldChildrenWithIcon,
            children: [
              Ea &&
                (0, se.jsx)("div", {
                  className: h(y.FieldIcon, y.BeforeChildren),
                  children: i,
                }),
              (0, se.jsx)("div", {
                className: y.FieldChildrenInner,
                children: a,
              }),
            ],
          }),
        r && (0, se.jsx)("div", { className: y.FieldDescription, children: r }),
      ],
    });
  });
function Zg(t, e) {
  let o = Ce(),
    n = ct.useCallback(() => {
      cd(t, e, o.ownerWindow ?? window);
    }, [o, t, e]);
  if (e == null) return {};
  let r = E("#Field_MoreInfo_Action");
  return { onOptionsButton: n, onOptionsActionDescription: r };
}
var FT = ct.forwardRef(function (e, o) {
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
        inlineWrap: S,
        fieldClassName: k,
        fieldChildren: L,
        ...X
      } = e,
      { refWithValue: oe, refForElement: re } = Br(o);
    return (0, se.jsxs)(ko, {
      label: n,
      description: r,
      icon: a,
      bottomSeparator: p,
      highlightOnFocus: d,
      childrenLayout: s ?? "inline",
      childrenContainerWidth: _ ?? "min",
      onMouseDown: (_e) => {
        oe.current?.focus(), _e.preventDefault();
      },
      padding: b,
      inlineWrap: S,
      explainer: i,
      className: k,
      disabled: l,
      onActivate: l ? c : void 0,
      children: [(0, se.jsx)(Oe, { ...X, disabled: l, ref: re }), L],
    });
  }),
  ud = ct.forwardRef(function (e, o) {
    let {
        label: n,
        description: r,
        icon: i,
        layout: a,
        bottomSeparator: s,
        highlightOnFocus: l,
        ...c
      } = e,
      { refWithValue: p, refForElement: d } = Br(o);
    return (0, se.jsx)(ko, {
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
      children: (0, se.jsx)(Kt, { ...c, ref: d }),
    });
  });
var Rd = u(M());
var te = u(M());
var xe = u(M());
var pa = { TransitionGroup: "xbJxDr3b7qU-", ContentWrapper: "CNH6rvKas2k-" };
function da(t, e) {
  return t.classList
    ? !!e && t.classList.contains(e)
    : (" " + (t.className.baseVal || t.className) + " ").indexOf(
        " " + e + " ",
      ) !== -1;
}
function ma(t, e) {
  t.classList
    ? t.classList.add(e)
    : da(t, e) ||
      (typeof t.className == "string"
        ? (t.className = t.className + " " + e)
        : t.setAttribute(
            "class",
            ((t.className && t.className.baseVal) || "") + " " + e,
          ));
}
function pd(t, e) {
  return t
    .replace(new RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function _a(t, e) {
  t.classList
    ? t.classList.remove(e)
    : typeof t.className == "string"
      ? (t.className = pd(t.className, e))
      : t.setAttribute(
          "class",
          pd((t.className && t.className.baseVal) || "", e),
        );
}
var ha = u(M());
var fn = u(M()),
  bn = u(Ut());
var ga = { disabled: !1 };
var dd = u(M()),
  Ao = dd.default.createContext(null);
var Pr = function (e) {
  return e.scrollTop;
};
var hn = "unmounted",
  oo = "exited",
  no = "entering",
  Eo = "entered",
  fa = "exiting",
  St = (function (t) {
    fo(e, t);
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
            ? ((l = oo), (i.appearStatus = no))
            : (l = Eo)
          : n.unmountOnExit || n.mountOnEnter
            ? (l = hn)
            : (l = oo),
        (i.state = { status: l }),
        (i.nextCallback = null),
        i
      );
    }
    e.getDerivedStateFromProps = function (r, i) {
      var a = r.in;
      return a && i.status === hn ? { status: oo } : null;
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
            ? a !== no && a !== Eo && (i = no)
            : (a === no || a === Eo) && (i = fa);
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
          if ((this.cancelNextCallback(), i === no)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var a = this.props.nodeRef
                ? this.props.nodeRef.current
                : bn.default.findDOMNode(this);
              a && Pr(a);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === oo &&
            this.setState({ status: hn });
      }),
      (o.performEnter = function (r) {
        var i = this,
          a = this.props.enter,
          s = this.context ? this.context.isMounting : r,
          l = this.props.nodeRef ? [s] : [bn.default.findDOMNode(this), s],
          c = l[0],
          p = l[1],
          d = this.getTimeouts(),
          _ = s ? d.appear : d.enter;
        if ((!r && !a) || ga.disabled) {
          this.safeSetState({ status: Eo }, function () {
            i.props.onEntered(c);
          });
          return;
        }
        this.props.onEnter(c, p),
          this.safeSetState({ status: no }, function () {
            i.props.onEntering(c, p),
              i.onTransitionEnd(_, function () {
                i.safeSetState({ status: Eo }, function () {
                  i.props.onEntered(c, p);
                });
              });
          });
      }),
      (o.performExit = function () {
        var r = this,
          i = this.props.exit,
          a = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : bn.default.findDOMNode(this);
        if (!i || ga.disabled) {
          this.safeSetState({ status: oo }, function () {
            r.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: fa }, function () {
            r.props.onExiting(s),
              r.onTransitionEnd(a.exit, function () {
                r.safeSetState({ status: oo }, function () {
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
            : bn.default.findDOMNode(this),
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
        if (r === hn) return null;
        var i = this.props,
          a = i.children,
          s = i.in,
          l = i.mountOnEnter,
          c = i.unmountOnExit,
          p = i.appear,
          d = i.enter,
          _ = i.exit,
          b = i.timeout,
          S = i.addEndListener,
          k = i.onEnter,
          L = i.onEntering,
          X = i.onEntered,
          oe = i.onExit,
          re = i.onExiting,
          Se = i.onExited,
          _e = i.nodeRef,
          ie = go(i, [
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
        return fn.default.createElement(
          Ao.Provider,
          { value: null },
          typeof a == "function"
            ? a(r, ie)
            : fn.default.cloneElement(fn.default.Children.only(a), ie),
        );
      }),
      e
    );
  })(fn.default.Component);
St.contextType = Ao;
St.propTypes = {};
function xo() {}
St.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: xo,
  onEntering: xo,
  onEntered: xo,
  onExit: xo,
  onExiting: xo,
  onExited: xo,
};
St.UNMOUNTED = hn;
St.EXITED = oo;
St.ENTERING = no;
St.ENTERED = Eo;
St.EXITING = fa;
var md = St;
var Kg = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return ma(e, n);
      })
    );
  },
  ba = function (e, o) {
    return (
      e &&
      o &&
      o.split(" ").forEach(function (n) {
        return _a(e, n);
      })
    );
  },
  va = (function (t) {
    fo(e, t);
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
          a === "active" && r && Pr(r),
          s && ((this.appliedClasses[i][a] = s), Kg(r, s));
      }),
      (o.removeClasses = function (r, i) {
        var a = this.appliedClasses[i],
          s = a.base,
          l = a.active,
          c = a.done;
        (this.appliedClasses[i] = {}),
          s && ba(r, s),
          l && ba(r, l),
          c && ba(r, c);
      }),
      (o.render = function () {
        var r = this.props,
          i = r.classNames,
          a = go(r, ["classNames"]);
        return ha.default.createElement(
          md,
          Fn({}, a, {
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
  })(ha.default.Component);
va.defaultProps = { classNames: "" };
va.propTypes = {};
var Ca = va;
function _d(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
var vn = u(M());
var He = u(M());
function Sr(t, e) {
  var o = function (i) {
      return e && (0, He.isValidElement)(i) ? e(i) : i;
    },
    n = Object.create(null);
  return (
    t &&
      He.Children.map(t, function (r) {
        return r;
      }).forEach(function (r) {
        n[r.key] = o(r);
      }),
    n
  );
}
function ef(t, e) {
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
function ro(t, e, o) {
  return o[e] != null ? o[e] : t.props[e];
}
function gd(t, e) {
  return Sr(t.children, function (o) {
    return (0, He.cloneElement)(o, {
      onExited: e.bind(null, o),
      in: !0,
      appear: ro(o, "appear", t),
      enter: ro(o, "enter", t),
      exit: ro(o, "exit", t),
    });
  });
}
function fd(t, e, o) {
  var n = Sr(t.children),
    r = ef(e, n);
  return (
    Object.keys(r).forEach(function (i) {
      var a = r[i];
      if ((0, He.isValidElement)(a)) {
        var s = i in e,
          l = i in n,
          c = e[i],
          p = (0, He.isValidElement)(c) && !c.props.in;
        l && (!s || p)
          ? (r[i] = (0, He.cloneElement)(a, {
              onExited: o.bind(null, a),
              in: !0,
              exit: ro(a, "exit", t),
              enter: ro(a, "enter", t),
            }))
          : !l && s && !p
            ? (r[i] = (0, He.cloneElement)(a, { in: !1 }))
            : l &&
              s &&
              (0, He.isValidElement)(c) &&
              (r[i] = (0, He.cloneElement)(a, {
                onExited: o.bind(null, a),
                in: c.props.in,
                exit: ro(a, "exit", t),
                enter: ro(a, "enter", t),
              }));
      }
    }),
    r
  );
}
var tf =
    Object.values ||
    function (t) {
      return Object.keys(t).map(function (e) {
        return t[e];
      });
    },
  of = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  Ra = (function (t) {
    fo(e, t);
    function e(n, r) {
      var i;
      i = t.call(this, n, r) || this;
      var a = i.handleExited.bind(_d(i));
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
        return { children: l ? gd(r, s) : fd(r, a, s), firstRender: !1 };
      }),
      (o.handleExited = function (r, i) {
        var a = Sr(this.props.children);
        r.key in a ||
          (r.props.onExited && r.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var l = Fn({}, s.children);
              return delete l[r.key], { children: l };
            }));
      }),
      (o.render = function () {
        var r = this.props,
          i = r.component,
          a = r.childFactory,
          s = go(r, ["component", "childFactory"]),
          l = this.state.contextValue,
          c = tf(this.state.children).map(a);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? vn.default.createElement(Ao.Provider, { value: l }, c)
            : vn.default.createElement(
                Ao.Provider,
                { value: l },
                vn.default.createElement(i, s, c),
              )
        );
      }),
      e
    );
  })(vn.default.Component);
Ra.propTypes = {};
Ra.defaultProps = of;
var Pa = Ra;
var Bo = u(f());
function bd(t) {
  let {
      childrenKey: e,
      childrenClasses: o,
      children: n,
      directionClass: r,
      animate: i = !0,
    } = t,
    a = h(pa.TransitionGroup, r);
  return (0, Bo.jsx)(Pa, {
    className: a,
    appear: !1,
    enter: i,
    exit: i,
    children: (0, Bo.jsx)(nf, { childrenClasses: o, children: n }, e),
  });
}
function nf(t) {
  let { sizeClass: e, children: o, childrenClasses: n, ...r } = t,
    [i, a, s, l] = rf(),
    c = xe.useRef(!0),
    p = xe.useCallback(() => c.current, [c]),
    d = xe.useCallback(() => {
      (c.current = !0), s();
    }, [s]),
    _ = xe.useCallback(() => {
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
    : (0, Bo.jsx)(Ca, {
        nodeRef: i,
        classNames: k,
        in: !0,
        timeout: b,
        addEndListener: a,
        onEntering: d,
        onExiting: _,
        ...r,
        children: (0, Bo.jsx)("div", {
          ref: i,
          className: h(pa.ContentWrapper, e, S.base),
          children: (0, Bo.jsx)(O, {
            className: e,
            fnCanTakeFocus: p,
            children: t.children,
          }),
        }),
      });
}
function rf() {
  let t = xe.useRef(null),
    e = xe.useRef();
  xe.useLayoutEffect(() => {
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
  let o = xe.useCallback(
      (i) => {
        if (!e.current) {
          i();
          return;
        }
        e.current.fnDone = i;
      },
      [e],
    ),
    n = xe.useCallback(() => {
      e.current && (e.current.bExiting = !1);
    }, [e]),
    r = xe.useCallback(() => {
      e.current && (e.current.bExiting = !0);
    }, [e]);
  return [t, o, n, r];
}
function hd(t, e) {
  return {
    base: e,
    enterStart: t.Enter,
    enterEnd: t.EnterActive,
    exitStart: t.Exit,
    exitEnd: t.ExitActive,
  };
}
function vd(t, e) {
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
var wt = {
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
var Xe = u(f()),
  Cd = te.createContext(null);
function af(t) {
  let e = te.useContext(Cd),
    n = bs().IN_VR,
    { title: r, icon: i, active: a, ...s } = t;
  return (0, Xe.jsxs)(O, {
    preferredFocus: a,
    navRef: a && e ? e : void 0,
    noFocusRing: !0,
    onActivate: n ? void 0 : s.onClick,
    onFocus: n ? void 0 : s.onClick,
    ...s,
    children: [
      i && (0, Xe.jsx)("div", { className: wt.PageListItem_Icon, children: i }),
      (0, Xe.jsx)("div", { className: wt.PageListItem_Title, children: r }),
    ],
  });
}
function sf(t) {
  return (0, Xe.jsx)("div", { className: wt.Separator });
}
var lf = te.forwardRef(function (e, o) {
  let { page: n, bAutoFocusPageContent: r, showTitle: i = !1 } = e,
    a = te.useRef(null),
    s = te.useRef(!0);
  te.useEffect(() => {
    (!s.current || !r) && a.current?.TakeFocus(), (s.current = !1);
  }, [n, r]);
  let l = (c, p, d) =>
    (0, Xe.jsx)(cf, {
      pages: e.pages,
      activePage: c,
      refForPage: p,
      PageComponent: d,
    });
  return (0, Xe.jsx)(Cd.Provider, {
    value: a,
    children: (0, Xe.jsx)(od, {
      ...e,
      stylesheet: wt,
      showTitle: i,
      PageListItemComponent: af,
      PageListSeparatorComponent: sf,
      renderPageContent: e.renderPageContent || l,
    }),
  });
});
function cf(t) {
  let { pages: e, activePage: o, refForPage: n, PageComponent: r } = t,
    i = te.useMemo(() => e.findIndex((c) => c == o), [e, o]),
    a = uf(i),
    s = pf(o?.identifier, n),
    l = vd(wt, a);
  return (0, Xe.jsx)(bd, {
    childrenKey: o?.identifier,
    childrenClasses: hd(wt, wt.ContentTransition),
    directionClass: l,
    animate: a != 0,
    children:
      o &&
      (0, Xe.jsx)(
        r,
        { ref: s(o.identifier), stylesheet: wt, activePage: o },
        o.identifier,
      ),
  });
}
function uf(t) {
  let e = te.useRef(t),
    o = te.useRef(0),
    n = e.current;
  if (n == t) return o.current;
  let r = 0;
  return (
    n < t ? (r = 4) : n > t && (r = 3), (e.current = t), (o.current = r), r
  );
}
function pf(t, e) {
  let o = te.useMemo(() => new Map(), []),
    n = te.useRef();
  n.current = t;
  let r = te.useRef();
  r.current = e;
  let i = te.useCallback(
    (a) => (s) => {
      o.set(a, s), a === n.current && Wt(r.current, s);
    },
    [o],
  );
  return (
    te.useEffect(() => (Wt(e, t && o.get(t)), () => Wt(e, void 0)), [o, t, e]),
    i
  );
}
var Pd = u(f()),
  Oy = Rd.forwardRef(function (e, o) {
    return (0, Pd.jsx)(uo, {
      noFocusRing: !0,
      ...e,
      ref: o,
      className: h(y.BasicTextInput, e.className),
      size: e.size ?? 1,
    });
  });
var Md = u(M());
var wd = {
  "duration-app-launch": "800ms",
  DropDownControlButton: "SN62O1Nd2Uc-",
};
var Ee = u(f());
function Dd(t, e) {
  for (let o of t.options)
    if ((Rt(o) && o.data === e) || (st(o) && Dd(o, e))) return !0;
  return !1;
}
function Sa(t) {
  let e = (o) =>
    o?.map((n, r) =>
      eo(n)
        ? (0, Ee.jsx)(Ns, {}, r)
        : Rt(n)
          ? (0, Ee.jsx)(
              _o,
              {
                onSelected: (i) => t.onValueSelected && t.onValueSelected(i, n),
                selected: t.selectedValue === n.data,
                children: (0, Ee.jsx)(Ee.Fragment, { children: n.label }),
              },
              r,
            )
          : st(n)
            ? (0, Ee.jsx)(
                Os,
                {
                  label: n.label,
                  selectedWithin: Dd(n, t.selectedValue),
                  children: e(n.options),
                },
                r,
              )
            : null,
    );
  return (0, Ee.jsx)(Ho, { onCancel: t.onCancel, children: e(t.rgOptions) });
}
var df = Md.forwardRef(function (e, o) {
  return (0, Ee.jsx)(Oe, {
    className: h(wd.DropDownControlButton, e.className),
    focusable: e.focusable,
    disabled: e.disabled,
    onClick: e.onClick,
    tabIndex: e.tabIndex,
    ref: o,
    children: (0, Ee.jsxs)("div", {
      className: y.DropDownControlButtonContents,
      children: [
        e.children,
        (0, Ee.jsx)("div", { className: h(y.Spacer, "Spacer") }),
        (0, Ee.jsx)(In, { direction: "down" }),
      ],
    }),
  });
});
var ut = u(M());
var Td = "TW2ZQnLvgIc-";
var io = u(f()),
  tk = ut.forwardRef(function (e, o) {
    let { className: n, ...r } = e,
      i = ut.useRef(),
      a = Me(o, i),
      [s, l] = ut.useState(!1),
      c = ut.useCallback(() => {
        l((p) => !p), window.setTimeout(() => i.current?.Focus(), 1);
      }, []);
    return (0, io.jsx)(O, {
      className: n,
      onOptionsButton: c,
      onOptionsActionDescription: E(
        s ? "#Login_HidePassword" : "#Login_ShowPassword",
      ),
      children: (0, io.jsx)(Kt, {
        autoComplete: "off",
        ref: a,
        inlineControls: (0, io.jsx)(Oe, {
          className: Td,
          onPointerDown: c,
          onOKButton: c,
          children: s ? (0, io.jsx)(Gs, {}) : (0, io.jsx)(Vs, {}),
        }),
        ...r,
        type: s ? "text" : "password",
      }),
    });
  });
function gf(t) {
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
var ok = ut.forwardRef(function (e, o) {
  let { className: n, value: r, ...i } = e,
    a = r ?? "";
  return (0, io.jsx)(ud, {
    autoComplete: "off",
    value: a,
    ref: o,
    placeholder: "   .   .   .   ",
    ...i,
    onChange: (l) => {
      let c = l.target.value;
      if (gf(c)) i.onChange && i.onChange(l);
      else {
        l.target.value = a;
        return;
      }
    },
  });
});
var he = u(M());
var B = {
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
  ff = 10,
  bf = 1,
  hf = 0.01,
  vf = 0.05,
  Tk = Fp(B["error-shake-duration"]);
function yd(t, e) {
  return e < 0 ? 0 : e > 1 ? 1 : t == 0 ? e : Math.round(e / t) * t;
}
function kd(t, e, o) {
  let n = t + o * (e - t);
  return Number.parseFloat(n.toFixed(10));
}
function Ma(t, e, o) {
  return (o - t) / (e - t);
}
var le = class extends he.Component {
  m_refSlider = he.createRef();
  m_refHandle = he.createRef();
  m_navRefSlider = he.createRef();
  m_sliderBounds = void 0;
  m_handleBounds = void 0;
  m_fZoom = 1;
  m_eDragMode = 0;
  m_vTouchStartPosition = os();
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
    return Math.abs(this.props.step ?? bf);
  }
  get normalizedStep() {
    return this.step / this.range;
  }
  get normalizedDpadStep() {
    let e = this.props.dpadStep ?? this.step,
      o = e > 0 ? e / this.range : hf;
    return Math.max(o, this.normalizedStep);
  }
  get normalizedClampedValue() {
    let e =
      this.props.value == null || isNaN(this.props.value)
        ? this.props.min
        : lo(this.props.value, this.props.min, this.props.max);
    return Ma(this.props.min, this.props.max, e);
  }
  get normalizedDefaultValue() {
    let e = this.props.resetValue;
    if (!(e == null || isNaN(e) || e < this.props.min || e > this.props.max))
      return Ma(this.props.min, this.props.max, e);
  }
  get normalizedSliderOrigin() {
    let e = lo(0, this.props.min, this.props.max);
    return Ma(this.props.min, this.props.max, e);
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
      r = Ua(n, 0, 2e3, 500, 250),
      i = Math.pow(2, Math.floor(n / r)),
      a = this.normalizedDpadStep * i,
      s = lo(a, this.normalizedDpadStep, vf) * o,
      l = yd(this.normalizedStep, this.normalizedClampedValue + s),
      c = kd(this.props.min, this.props.max, l);
    if (
      ((c = lo(
        c,
        this.props.clampMin ?? this.props.min,
        this.props.clampMax ?? this.props.max,
      )),
      c != this.props.value)
    ) {
      let p = c > this.m_fLatestUserValue;
      De.PlayNavSound(p ? 18 : 19),
        (this.m_fLatestUserValue = c),
        this.FireOnChange(c, 2);
    } else De.PlayNavSound(25);
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
      n = yd(this.normalizedStep, o),
      r = kd(this.props.min, this.props.max, n),
      i = this.props.clampMin ?? this.props.min,
      a = this.props.clampMax ?? this.props.max;
    if (((r = lo(r, i, a)), r != this.props.value)) {
      let s = r > this.props.value,
        l = this.step == 0;
      if (
        ((this.m_eDragMode == 0 || !l) && De.PlayNavSound(s ? 18 : 19),
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
          if (rs(this.m_vTouchStartPosition, o) >= ff) {
            let r = ns(this.m_vTouchStartPosition, o);
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
      De.PlayNavSound(r ? 18 : 19);
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
    this.m_fZoom = $a(this.m_refSlider.current);
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
      De.PlayNavSound(e ? 18 : 19);
  }
  OnContextMenu(e) {
    if (this.props.resetValue != null) {
      let o = (0, G.jsx)(Ho, {
        children: (0, G.jsx)(_o, {
          disabled: !this.CanResetToDefault,
          onSelected: this.ResetToDefault,
          children: E("#ResetToDefault"),
        }),
      });
      Go(o, e);
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
    this.CanResetToDefault && (b[3] = E("#ResetToDefault"));
    let S = `${B.SliderHandle} SliderHandle`,
      k = `${B.SliderHandleContainer} SliderHandleContainer `;
    return (
      this.props.handleType == "verticalline"
        ? ((S = `${B.VerticalLineSliderHandle} SliderHandle`),
          (k = `${B.VerticalLineSliderHandleContainer} SliderHandleContainer `))
        : (this.props.handleType == "leftparen" ||
            this.props.handleType == "rightparen") &&
          ((S = h(
            B.ParenSliderHandle,
            this.props.handleType == "leftparen" ? B.Left : B.Right,
            "SliderHandle",
          )),
          (k = h(
            B.ParenSliderHandleContainer,
            this.props.handleType == "leftparen" ? B.Left : B.Right,
            "SliderHandleContainer",
          ))),
      (0, G.jsx)($s, {
        noFocusRing: !0,
        className: h(
          B.SliderControlPanelGroup,
          "SliderControlPanelGroup",
          this.props.className,
        ),
        navRef: this.props.navRef,
        onMouseDown: (L) => this.OnMouseDown(L.nativeEvent),
        onTouchStart: (L) => this.OnTouchStart(L.nativeEvent),
        onOKActionDescription: this.props.disabled
          ? null
          : E("#Slider_AdjustSlider"),
        focusable: a,
        childFocusDisabled: this.props.disabled || !a,
        onContextMenu: this.OnContextMenu,
        onOKButton: this.props.disabled ? () => De.PlayNavSound(25) : void 0,
        onSecondaryButton: this.CanResetToDefault
          ? this.ResetToDefault
          : void 0,
        onSecondaryActionDescription: this.CanResetToDefault
          ? E("#ResetToDefault")
          : void 0,
        actionDescriptionMap: b,
        children: (0, G.jsxs)(yt, {
          className: h(
            B.SliderControlAndNotches,
            this.props.disabled && B.Disabled,
            c && B.WithDefaultValue,
            c && _ && B.DefaultValueIsColorRange,
            c && _ && p.side == "left" && B.DefaultValueColorLeft,
            c && _ && p.side != "left" && B.DefaultValueColorRight,
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
          ref: Mn(this.m_refSlider, this.props.innerRef),
          navRef: this.m_navRefSlider,
          onGamepadDirection: this.OnGamepadDirection,
          onOKButton: this.BlurInnerSlider,
          onOKActionDescription: null,
          onCancelButton: this.BlurInnerSlider,
          onCancelActionDescription: E("#ActionButtonLabelDone"),
          children: [
            (0, G.jsxs)("div", {
              className: h(B.SliderControl, "SliderControl"),
              children: [
                (0, G.jsx)("div", {
                  className: h(
                    B.SliderTrack,
                    this.props.notchCount != null && o && B.SliderHasNotches,
                    { [B.SliderTrackDark]: this.props.trackTone === "dark" },
                    "SliderTrack",
                  ),
                }),
                c &&
                  d &&
                  (0, G.jsx)("div", {
                    className: B.DefaultValueTickContainer,
                    children: (0, G.jsx)("div", {
                      className: B.DefaultValueTick,
                      children: (0, G.jsx)(In, { direction: "down" }),
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
                          (0, G.jsx)(zs, {}),
                        this.props.handleType == "rightparen" &&
                          (0, G.jsx)(js, {}),
                      ],
                    }),
                  }),
              ],
            }),
            (0, G.jsx)(Cf, {
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
m([g], le.prototype, "RecomputeSliderBounds", 1),
  m([g], le.prototype, "SetDragMode", 1),
  m([g], le.prototype, "OnGamepadDirection", 1),
  m([g], le.prototype, "UpdateSliderValueForPosition", 1),
  m([g], le.prototype, "OnWindowMouseMove", 1),
  m([g], le.prototype, "OnWindowMouseUp", 1),
  m([g], le.prototype, "OnMouseDown", 1),
  m([g], le.prototype, "OnTouchStart", 1),
  m([g], le.prototype, "OnWindowTouchMove", 1),
  m([g], le.prototype, "OnWindowTouchEnd", 1),
  m([g], le.prototype, "Complete", 1),
  m([g], le.prototype, "BlurInnerSlider", 1),
  m([g], le.prototype, "OnInnerSliderFocus", 1),
  m([g], le.prototype, "OnInnerSliderBlur", 1),
  m([g], le.prototype, "ResetToDefault", 1),
  m([g], le.prototype, "OnContextMenu", 1);
function Cf(t) {
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
        (0, G.jsx)(
          Rf,
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
  return (0, G.jsx)(O, { className: h(B.SliderNotchContainer), children: l });
}
function Rf(t) {
  let e = t.notchIndex <= (t.notchCount - 1) * t.sliderValue,
    o = t.notchCount <= 3 && !t.notchTicksVisible,
    n = o && t.notchIndex == 0,
    r = o && t.notchIndex == t.notchCount - 1,
    i = { ...t, alignLeftEnd: n, alignRightEnd: r, active: e };
  return (0, G.jsx)("div", {
    className: h(B.SliderNotch, o && B.AlignToEnds),
    children: t.renderNotch ? t.renderNotch(i) : (0, G.jsx)(Pf, { ...i }),
  });
}
function Pf(t) {
  let { alignLeftEnd: e, alignRightEnd: o, active: n } = t;
  return (0, G.jsxs)(G.Fragment, {
    children: [
      t.notchTicksVisible &&
        (0, G.jsx)("div", {
          className: h(B.SliderNotchTick, n && B.TickActive),
        }),
      t.notchLabel &&
        (0, G.jsx)("div", {
          className: h(
            B.SliderNotchLabel,
            e && B.AlignToLeft,
            o && B.AlignToRight,
          ),
          children: t.notchLabel?.label,
        }),
    ],
  });
}
var yk = he.forwardRef(function (e, o) {
  let {
    label: n,
    labelIndex: r,
    xOffset: i,
    onResize: a,
    OnMouseDown: s,
    OnTouchStart: l,
  } = e;
  he.useEffect(() => {
    a(r);
  }, [a, r]);
  let c = he.useCallback(
      (_) => {
        a(r);
      },
      [a, r],
    ),
    p = Fs(c),
    d = Me(p, o);
  return (0, G.jsx)("div", {
    className: B.CompoundSliderSubSliderLabel,
    ref: d,
    onMouseDown: s,
    onTouchStart: l,
    style: { transform: `translateX(${i}px)` },
    children: (0, G.jsx)("div", {
      className: B.CompoundSliderSubSliderLabelInternal,
      children: n,
    }),
  });
});
var Ad = u(M());
var ao = u(f()),
  Sd = Ad.forwardRef(function (e, o) {
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
          r(d), De.PlayNavSound(d ? 16 : 17);
        }
      };
    return (0, ao.jsxs)(yt, {
      noFocusRing: !0,
      className: h(a, y.Toggle, { [y.Disabled]: !!i, [y.On]: !!n }),
      onClick: p,
      ref: o,
      navRef: c,
      focusable: s,
      children: [
        (0, ao.jsx)("div", { className: y.ToggleRail }),
        (0, ao.jsx)("div", { className: y.ToggleSwitch }),
        l,
      ],
    });
  }),
  wr = class extends Ft {
    OnToggleChange(e) {
      !this.props.disabled && e !== this.checked && this.Toggle();
    }
    render() {
      let e = !!this.props.disabled,
        { actionDescriptions: o, gamepadEvents: n } = ds(this.props);
      return (0, ao.jsx)(ko, {
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
        children: (0, ao.jsx)(Sd, {
          onChange: this.OnToggleChange,
          value: this.checked,
          disabled: e,
          navRef: this.props.navRef,
        }),
      });
    }
  };
m([g], wr.prototype, "OnToggleChange", 1);
var Da = u(f());
function wa(t) {
  let { children: e, bCenterVertically: o, refElem: n, ...r } = t,
    i = h(
      y.GamepadDialogContent,
      "DialogContent _DialogLayout",
      t.className,
      o && " _DialogCenterVertically",
    ),
    { ref: a, navRef: s } = Js(),
    l = Me(n, a);
  return (0, Da.jsx)(O, {
    ...r,
    className: i,
    ref: l,
    navRef: s,
    children: (0, Da.jsx)(O, {
      className: h(
        y.GamepadDialogContent_InnerWidth,
        "DialogContent_InnerWidth",
      ),
      children: e,
    }),
  });
}
var Cn = u(M());
var Lo = u(f());
function xd() {
  return Cn.useMemo(() => Sf(), []);
}
function Sf() {
  return function (e) {
    let {
        refNavTree: o,
        className: n,
        active: r,
        children: i,
        modalKey: a,
      } = e,
      s = Cn.useRef(null);
    _s(s, r, !0);
    let l = Me(s, o);
    return (0, Lo.jsx)(us, {
      className: n,
      navTreeRef: l,
      modal: !0,
      enabled: r,
      navID: `ModalDialogOverlay_${a}`,
      children: i,
    });
  };
}
function wf(t) {
  let {
      className: e,
      onEscKeypress: o,
      padding: n = "standard",
      bGamepadUIScrollWithin: r,
      children: i,
    } = t,
    a = h(
      y.ModalPosition,
      n == "standard" && y.WithStandardPadding,
      r && y.ScrollWithin,
      e,
    );
  return (0, Lo.jsx)(O, {
    className: a,
    onCancelButton: o,
    focusableIfNoChildren: !0,
    children: (0, Lo.jsx)(En, { children: (0, Lo.jsx)(ue, { children: i }) }),
  });
}
function Ed(t) {
  let e = Cn.useMemo(() => ({ ModalPosition: wf }), []);
  return (0, Lo.jsx)(zi.Provider, { value: e, children: t.children });
}
var Mr = u(f());
function Ta(t) {
  let e = xd(),
    o = Bd.useMemo(() => ({ DropDownMenu: Sa, Content: wa }), []);
  return (0, Mr.jsx)(To.Provider, {
    value: o,
    children: (0, Mr.jsx)(Ed, {
      children: (0, Mr.jsx)(Mo, {
        ...t,
        bUseDialogElement: !1,
        DialogWrapper: e,
        ContextMenuComponent: Ip,
      }),
    }),
  });
}
var ya = u(f());
function Ld(t) {
  let e = Ze(),
    o = { bRenderOverlayAtRoot: !0, bUsePopups: !1, ...t };
  return e ? (0, ya.jsx)(Ta, { ...o }) : (0, ya.jsx)(Mo, { ...o });
}
var Qd = u(Ht(), 1);
var Id = "/RDNVLABA.png";
var Fd = "/QQGETVBA.png";
var Nd = "/MVIQJMBA.png";
var Od = "/62SHH2CA.png";
var Ud = "Ksy4XAVZlM0-";
var Wd = "n2wjqqfVgC4-";
var ka = "osYYItlitxA-";
var Hd = "knntvUEkLRg-";
var Gd = "_1ToiOSH69g8-";
var Vd = "s6DTWBl90Rc-";
var zd = "UnRkTYm5fo0-";
var jd = "ftmxCcsknb4-";
var qd = "byvXpNiaYrs-";
var Yd = "y9kERlobJ88-";
var Xd = "Hf0BSchKz6g-";
var T = u(f(), 1);
function Ge() {
  return (0, T.jsx)("span", {
    "aria-hidden": "true",
    className: Yd,
    children: "|",
  });
}
function Jd(t) {
  return (0, T.jsx)("footer", {
    className: (0, Qd.default)(Ud, t.className, !Io.logged_in && Wd),
    children: (0, T.jsxs)("div", {
      className: Hd,
      children: [
        (0, T.jsx)("hr", {}),
        (0, T.jsxs)("div", {
          className: Gd,
          children: [
            (0, T.jsx)(A, {
              className: zd,
              to: "https://www.valvesoftware.com",
              openInNewWindow: !0,
              children: (0, T.jsx)("img", {
                src: pt(Od),
                alt: "Valve Software",
              }),
            }),
            (0, T.jsxs)("div", {
              className: Vd,
              children: [
                (0, T.jsx)("div", {
                  children: ge.Localize(
                    "#footer_legal_notice",
                    new Date().getFullYear(),
                  ),
                }),
                (0, T.jsxs)("div", {
                  children: [
                    ge.Localize("#footer_vat_included"),
                    "  ",
                    (0, T.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "privacy_agreement/",
                      children: ge.Localize("#footer_privacy_policy"),
                    }),
                    (0, T.jsx)(Ge, {}),
                    (0, T.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "legal/",
                      children: ge.Localize("#footer_legal"),
                    }),
                    (0, T.jsx)(Ge, {}),
                    (0, T.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "subscriber_agreement/",
                      children: ge.Localize("#footer_ssa"),
                    }),
                    (0, T.jsx)(Ge, {}),
                    (0, T.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "steam_refunds/",
                      children: ge.Localize("#footer_refunds"),
                    }),
                    (0, T.jsx)(Ge, {}),
                    (0, T.jsx)(A, {
                      openInNewWindow: !0,
                      to: w.STORE_BASE_URL + "account/cookiepreferences/",
                      children: ge.Localize("#footer_cookies"),
                    }),
                  ],
                }),
              ],
            }),
            (0, T.jsx)("div", {
              className: jd,
              children: (0, T.jsx)("img", {
                src: pt(Nd),
                alt: "Valve Software",
              }),
            }),
          ],
        }),
        Co() &&
          (0, T.jsx)("div", {
            className: qd,
            children: (0, T.jsx)("button", {
              onClick: cu,
              children: U.Localize("#global_menu_view_mobile_website"),
            }),
          }),
        (0, T.jsx)("hr", {}),
        (0, T.jsxs)("div", {
          className: Xd,
          children: [
            (0, T.jsx)(A, {
              openInNewWindow: !0,
              to: "https://www.valvesoftware.com/about",
              children: ge.Localize("#footer_about_valve"),
            }),
            (0, T.jsx)(Ge, {}),
            (0, T.jsx)(A, {
              openInNewWindow: !0,
              to: "http://www.valvesoftware.com",
              children: ge.Localize("#footer_jobs"),
            }),
            (0, T.jsx)(Ge, {}),
            (0, T.jsx)(A, {
              openInNewWindow: !0,
              to: "http://www.steampowered.com/steamworks/",
              children: ge.Localize("#footer_steamworks"),
            }),
            (0, T.jsx)(Ge, {}),
            (0, T.jsx)(A, {
              openInNewWindow: !0,
              to: w.PARTNER_BASE_URL + "steamdirect",
              children: ge.Localize("#footer_steam_distribution"),
            }),
            (0, T.jsx)(Ge, {}),
            (0, T.jsx)(A, {
              external: !0,
              to: w.HELP_BASE_URL + co().strISOCode + "/",
              children: ge.Localize("#footer_nav_help_support"),
            }),
            (0, T.jsx)(Ge, {}),
            w.COUNTRY === "US" &&
              (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)(A, {
                    snr: !0,
                    external: !0,
                    to: w.STORE_BASE_URL + "hardware_recycling/",
                    children: ge.Localize("#footer_recycling"),
                  }),
                  (0, T.jsx)(Ge, {}),
                ],
              }),
            !$e(w.EREALM) &&
              (0, T.jsxs)(T.Fragment, {
                children: [
                  (0, T.jsx)(A, {
                    snr: !0,
                    external: !0,
                    to: w.STORE_BASE_URL + "digitalgiftcards/",
                    children: ge.Localize("#footer_walletcode"),
                  }),
                  (0, T.jsx)(Ge, {}),
                  (0, T.jsxs)(A, {
                    openInNewWindow: !0,
                    to: "http://www.facebook.com/Steam",
                    children: [
                      (0, T.jsx)("img", {
                        src: pt(Id),
                        alt: "Facebook",
                        className: ka,
                      }),
                      " Steam",
                    ],
                  }),
                  (0, T.jsx)(Ge, {}),
                  (0, T.jsxs)(A, {
                    openInNewWindow: !0,
                    to: "http://twitter.com/steam",
                    children: [
                      (0, T.jsx)("img", {
                        src: pt(Fd),
                        alt: "X",
                        className: ka,
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
var Qe = {
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
  Af = gs({ Component: xf });
function xf({ children: t }) {
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
    } = Af.useLoaderData(),
    p = s.length > 0;
  return (
    w.IN_GAMEPADUI && (window.bSupportsGamepadUI = !0),
    (0, z.jsx)(Ef, {
      strWebAPIToken: e,
      steamid: r,
      storeBrowseContext: i,
      children: (0, z.jsxs)("html", {
        lang: co().strISOCode,
        className: (0, Dr.default)(Qe.Root, su()),
        children: [
          (0, z.jsx)("head", { children: (0, z.jsx)(Ha, {}) }),
          (0, z.jsx)("body", {
            className: (0, Dr.default)(Qe.StoreBody, p && "gamepadui"),
            children: (0, z.jsx)(ps, {
              navID: "StoreTemplate",
              disabledRoot: !w.IN_GAMEPADUI,
              children: (0, z.jsx)("div", {
                className: (0, Dr.default)(
                  Qe.StoreBodyContainer,
                  c && Qe.Scrollable,
                ),
                children: (0, z.jsx)(En, {
                  children: (0, z.jsxs)(Ld, {
                    children: [
                      a &&
                        (0, z.jsx)(Vu, {
                          navContent: o.navContent,
                          globalActions: o.globalActions,
                          notifications: o.notifications,
                          userDetails: n,
                          changeLanguagePath: "/account/setlanguage/",
                          cartInResponsiveMenu: !0,
                          className: Qe.Header,
                          children: (0, z.jsxs)("div", {
                            className: Qe.InternalOptions,
                            children: [
                              l && (0, z.jsx)(Yu, {}),
                              (0, z.jsx)(Ks, { buttonClassName: Qe.Text }),
                            ],
                          }),
                        }),
                      (0, z.jsxs)("section", {
                        className: Qe.StoreContent,
                        children: [
                          (0, z.jsx)("div", { className: Qe.LoadingIndicator }),
                          (0, z.jsx)(tl, { gamepadUiTabs: s }),
                          (0, z.jsx)(Nl, {}),
                          (0, z.jsx)(Va, { children: t }),
                        ],
                      }),
                      !w.IN_GAMEPADUI &&
                        (0, z.jsx)(Jd, { className: Qe.Footer }),
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
function Ef(t) {
  let { strWebAPIToken: e, steamid: o, storeBrowseContext: n, children: r } = t;
  return (0, z.jsx)(hs, {
    IN_GAMEPADUI: w.IN_GAMEPADUI,
    children: (0, z.jsx)(Hl, {
      children: (0, z.jsx)(Zu, {
        strWebAPIToken: e,
        steamid: o,
        children: (0, z.jsx)(ep, {
          children: (0, z.jsx)(Xs, {
            context: n,
            msDelayBatch: 250,
            children: r,
          }),
        }),
      }),
    }),
  });
}
export { Af as route };
