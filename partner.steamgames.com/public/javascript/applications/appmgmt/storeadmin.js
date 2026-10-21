/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./richgamedescriptioneditor2.js?contenthash=ULwv5Xsu",
      "./richgamedescriptioneditor.js?contenthash=Dw78P9IW",
      "./mobx.esm.js?contenthash=CuqnC1HA",
      "./dialogs.js?contenthash=Ef6x5QZW",
      "./long.js?contenthash=BCeVig72",
      "./react-router.js?contenthash=BY_BIsGq",
      "../../../css/applications/appmgmt/dialogs.css?contenthash=BSBzYtmn",
      "./uploadutils.js?contenthash=56rGQE9s",
      "./steammessages_community_pb.js?contenthash=Cl3PrhFl",
      "./useMutation.js?contenthash=D8rfPQfp",
      "./utils.js?contenthash=DYuUgnil",
      "./mutation.js?contenthash=BUldeZVU",
      "./useresizeobserver.js?contenthash=DhQ6ws8-",
      "./cloudlocalizedartdisplay.js?contenthash=fjKDXjAS",
      "./modaldialog.js?contenthash=DBYgqldN",
      "../../../css/applications/appmgmt/modaldialog.css?contenthash=DIzQc6yp",
      "./basebuttons.js?contenthash=DeB_bgJx",
      "../../../css/applications/appmgmt/basebuttons.css?contenthash=BJx2zq6Y",
      "./axios.js?contenthash=BJ1Ik0cP",
      "./throbber.js?contenthash=DT0j8i1L",
      "../../../css/applications/appmgmt/throbber.css?contenthash=B5cG3W4v",
      "./editorlocalizationstore.js?contenthash=DnWti2pm",
      "./genericimageupload.js?contenthash=CJesdfDm",
      "./modals.js?contenthash=BkJN1F7L",
      "./linkregionbox.js?contenthash=CZPEfTtd",
      "../../../css/applications/appmgmt/linkregionbox.css?contenthash=HkLONVRS",
      "../../../css/applications/appmgmt/genericimageupload.css?contenthash=NERScwG6",
      "./adminshared.module.js?contenthash=DQBfJqXN",
      "../../../css/applications/appmgmt/adminshared.css?contenthash=Bdafyp0R",
      "../../../css/applications/appmgmt/cloudlocalizedartdisplay.css?contenthash=BKjBu2__",
      "./simplemodaldialog.js?contenthash=D6zh1ZUJ",
      "../../../css/applications/appmgmt/simplemodaldialog.css?contenthash=U5XJc_k7",
      "./imageuploaderpanel.js?contenthash=BHWpebfK",
      "./axiosutils.js?contenthash=DP-p1hH0",
      "./partnereventshared.module.js?contenthash=P6Lsyb-l",
      "../../../css/applications/appmgmt/partnereventshared.css?contenthash=B7LNJQ8W",
      "./shared_common.module.js?contenthash=DMZ38Ep5",
      "../../../css/applications/appmgmt/shared_common.css?contenthash=Ct0mtd7G",
      "../../../css/applications/appmgmt/imageuploaderpanel.css?contenthash=Dkju2lA2",
      "./bbcodes.module.js?contenthash=9AAwTmEw",
      "../../../css/applications/appmgmt/bbcodes.css?contenthash=DxrOPR5M",
      "./numberformats.js?contenthash=CKlVZdPm",
      "./getpreferredlocales.js?contenthash=D7VZe_5-",
      "../../../css/applications/appmgmt/richgamedescriptioneditor.css?contenthash=SwmxS47z",
      "../../../css/applications/appmgmt/shared_dialog.css?contenthash=C9HgcjP9",
    ]),
) => i.map((i) => d[i]);

import {
  A as e,
  At as t,
  Bt as n,
  Ft as r,
  It as i,
  Lt as a,
  Mt as o,
  N as s,
  Nt as c,
  Pt as l,
  U as u,
  W as d,
  Wt as f,
  Y as p,
  at as m,
  et as h,
  gt as g,
  it as _,
  jt as v,
  k as ee,
  kt as y,
  ot as b,
  q as x,
  qt as te,
  rt as ne,
  tt as re,
  x as ie,
} from "./mobx.esm.js?contenthash=CuqnC1HA";
import {
  $ as S,
  $t as C,
  Ca as w,
  Ct as ae,
  Ea as oe,
  Fa as se,
  Ft as ce,
  H as le,
  Ht as T,
  Jt as ue,
  Ka as de,
  L as fe,
  Lt as pe,
  Mt as me,
  O as he,
  Po as ge,
  Pt as _e,
  R as ve,
  Ut as E,
  Va as ye,
  Vt as be,
  Wa as xe,
  Wt as Se,
  X as Ce,
  Y as we,
  Yo as Te,
  Yt as Ee,
  Zt as De,
  br as Oe,
  bt as ke,
  ca as D,
  cn as Ae,
  cs as je,
  dn as O,
  fo as Me,
  ft as Ne,
  gn as Pe,
  ha as Fe,
  hn as Ie,
  ia as Le,
  in as Re,
  jt as ze,
  ln as Be,
  mn as Ve,
  mt as He,
  nt as Ue,
  on as We,
  oo as Ge,
  p as Ke,
  pa as qe,
  pn as Je,
  q as Ye,
  ra as Xe,
  rn as Ze,
  rs as Qe,
  s as k,
  sa as A,
  st as $e,
  ta as et,
  tn as tt,
  tt as nt,
  u as rt,
  uo as it,
  xn as at,
  z as ot,
  zt as st,
} from "./dialogs.js?contenthash=Ef6x5QZW";
import {
  _ as ct,
  c as lt,
  n as ut,
  w as dt,
  x as ft,
} from "./long.js?contenthash=BCeVig72";
import { h as pt } from "./storebrowsequerycontext.js?contenthash=B76-TDtt";
import { i as mt } from "./saletags.js?contenthash=DII44t2-";
import { r as ht } from "./storenaveventcontext.js?contenthash=CrGsfo-T";
import { a as gt, r as j } from "./react-router.js?contenthash=BY_BIsGq";
import { i as _t } from "./utils.js?contenthash=DYuUgnil";
import { t as vt } from "./useQuery.js?contenthash=DLhLtH8F";
import { t as yt } from "./reactqueryroot.js?contenthash=BRWegL9C";
import { i as bt, t as xt } from "./currencyformat.js?contenthash=lqE5xB1s";
import { t as St } from "./useMutation.js?contenthash=D8rfPQfp";
import {
  a as Ct,
  b as wt,
  c as Tt,
  f as Et,
  l as Dt,
  m as Ot,
  n as kt,
  o as At,
  p as jt,
  s as Mt,
  v as Nt,
} from "./marketingmessageevent.js?contenthash=CKjNqr-D";
import { t as Pt } from "./dataloader.js?contenthash=tOrZtG9l";
import { L as Ft } from "./storeitem.js?contenthash=DPh6d898";
import { n as It } from "./pricingguidelineobject.js?contenthash=zLI3iiBM";
import { r as M, t as Lt } from "./modals.js?contenthash=BkJN1F7L";
import { n as N, r as P } from "./render.js?contenthash=DtkfYyDz";
import {
  a as Rt,
  c as zt,
  n as F,
  s as Bt,
} from "./text.js?contenthash=Cyl0Hm-O";
import { r as Vt, t as Ht } from "./button.js?contenthash=DOIwfHfd";
import { a as Ut, r as Wt } from "./localization.js?contenthash=D__SjrCZ";
import { t as Gt } from "./getpreferredlocales.js?contenthash=D7VZe_5-";
import { n as Kt, r as qt } from "./select.js?contenthash=C5FPqnGV";
import { t as Jt } from "./heading.js?contenthash=BTG9Wh20";
import { c as Yt, t as Xt } from "./dashboardutilities.js?contenthash=CuiPrjhc";
import { t as Zt } from "./grid.js?contenthash=DaXeEixe";
import {
  $ as Qt,
  Q as $t,
  Z as en,
  et as tn,
  tt as nn,
} from "./tabulatorutils.js?contenthash=DjJCijIL";
import { c as rn } from "./deckverified.js?contenthash=CNumniKJ";
import { t as an } from "./axios.js?contenthash=BJ1Ik0cP";
import { t as I } from "./axiosutils.js?contenthash=DP-p1hH0";
import { a as on } from "./historyutils.js?contenthash=By1ZfcRb";
import { t as sn } from "./throbber.js?contenthash=DT0j8i1L";
import { o as cn } from "./linkfilter.js?contenthash=CEX7WYmL";
import {
  a as ln,
  d as un,
  f as dn,
  i as fn,
  l as pn,
  o as mn,
  u as hn,
} from "./currencyutils.js?contenthash=DLilGjyJ";
import {
  r as gn,
  t as _n,
} from "./eventdevfeaturestore.js?contenthash=DhrGkbYa";
import {
  n as vn,
  t as yn,
} from "./editorlocalizationstore.js?contenthash=DnWti2pm";
import {
  l as bn,
  u as xn,
} from "./partnereventshared.module.js?contenthash=P6Lsyb-l";
import { t as Sn } from "./steamid.js?contenthash=M22uw5Sj";
import { t as Cn } from "./storeitemcache.js?contenthash=ChWiHeCp";
import {
  i as wn,
  l as Tn,
} from "./partnereventdialog.module.js?contenthash=Bx2fOKRM";
import {
  c as En,
  d as Dn,
  f as On,
  l as kn,
  s as An,
  u as jn,
} from "./creatorhomestore.js?contenthash=DhcAvqYS";
import { n as Mn, t as Nn } from "./simplesuccesserror.js?contenthash=B-IH9Fe6";
import {
  a as Pn,
  i as Fn,
  n as In,
  t as Ln,
} from "./storeitemhooks.js?contenthash=DF8ajThV";
import "./pricinggridcell.js?contenthash=DiY9Ygmu";
import { n as Rn, t as zn } from "./clanstore.js?contenthash=DDtdpSFB";
import { t as Bn } from "./phpintegration.js?contenthash=CHDQW7hW";
import { t as Vn } from "./unknownroute.js?contenthash=BBdYiwN1";
import {
  G as Hn,
  W as Un,
  r as Wn,
} from "./adminshared.module.js?contenthash=DQBfJqXN";
import {
  a as L,
  c as Gn,
  i as Kn,
  l as qn,
  n as Jn,
  o as Yn,
  r as Xn,
  s as Zn,
  t as Qn,
} from "./releasedateinfo.js?contenthash=BAmEkvgn";
import { t as $n } from "./storebrowsesetup.js?contenthash=BqlzmPqA";
import { t as er } from "./partnereventshareddates.js?contenthash=cS8VXtx0";
import { r as tr, t as nr } from "./languagepicker.js?contenthash=BTGniVDu";
import { t as rr } from "./react-select.cjs.js?contenthash=BkDEIcN9";
import { t as ir } from "./reorderablelist.js?contenthash=Cmr3NtDh";
import { a as ar, r as or } from "./adminaccount.js?contenthash=D18QX9jh";
import { r as sr } from "./collapseablesection.js?contenthash=DdQitV5w";
import { t as cr } from "./userprofile.js?contenthash=BXur7VM0";
import { a as lr } from "./partnerinfostore.js?contenthash=Dhq2jJrp";
import {
  _ as ur,
  a as dr,
  c as fr,
  d as pr,
  f as mr,
  g as hr,
  h as gr,
  i as _r,
  l as vr,
  m as yr,
  n as br,
  o as xr,
  p as Sr,
  r as Cr,
  s as wr,
  t as Tr,
  u as Er,
} from "./richgamedescriptioneditor.js?contenthash=Dw78P9IW";
var Dr = f({
    Handle: () => Nr,
    Root: () => Or,
    "Size-1": () => kr,
    "Size-2": () => Ar,
    "Size-3": () => jr,
    Track: () => Mr,
    default: () => Pr,
  }),
  Or = `d-BLqkeCLbk-`,
  kr = `_7hcdKp0UbyA-`,
  Ar = `MAUEgPZQNE8-`,
  jr = `brbpWizcZX0-`,
  Mr = `Ehgs1xAPJUY-`,
  Nr = `BiPJnzSoYb4-`,
  Pr = {
    Root: Or,
    "Size-1": `_7hcdKp0UbyA-`,
    "Size-2": `MAUEgPZQNE8-`,
    "Size-3": `brbpWizcZX0-`,
    Track: Mr,
    Handle: Nr,
  },
  R = te(g(), 1),
  z = _();
function Fr(e) {
  return (0, z.jsxs)(zr.Root, {
    ...e,
    children: [(0, z.jsx)(zr.Track, {}), (0, z.jsx)(zr.Handle, {})],
  });
}
function Ir(e) {
  let { value: t, onChange: n, size: r = `2`, color: i, ref: a } = e;
  return (0, z.jsx)(P, {
    ref: a,
    role: `switch`,
    "aria-checked": !!t,
    onClick: () => n(!t),
    onKeyDown: (e) => {
      (e.key === ` ` || e.key === `Enter`) &&
        (n(!t), e.preventDefault(), e.stopPropagation());
    },
    tabIndex: 0,
    "data-accent-color": i,
    ...zt({ size: r, className: Or }, Br),
    children: e.children,
  });
}
function Lr(e) {
  return (0, z.jsx)(`div`, { className: Mr, ...e });
}
function Rr(e) {
  return (0, z.jsx)(`div`, { className: Nr, ...e });
}
var zr = Object.assign(Fr, { Root: Ir, Track: Lr, Handle: Rr }),
  Br = [
    ...Rt,
    { prop: `size`, className: (e) => Dr[`Size-${e}`], responsive: !0 },
  ],
  Vr = f({
    Separator: () => Hr,
    "Size-1": () => Ur,
    "Size-2": () => Wr,
    "Size-3": () => Gr,
    "Size-4": () => Kr,
    default: () => qr,
  }),
  Hr = `vNNhEahPBA0-`,
  Ur = `cG3Bl0aMLsI-`,
  Wr = `sTGfTmWlAtM-`,
  Gr = `SaUen44WwpY-`,
  Kr = `KZc7C2EnUyw-`,
  qr = {
    Separator: Hr,
    "Size-1": `cG3Bl0aMLsI-`,
    "Size-2": `sTGfTmWlAtM-`,
    "Size-3": `SaUen44WwpY-`,
    "Size-4": `KZc7C2EnUyw-`,
  };
function Jr(e) {
  let { orientation: t = `horizontal`, size: n = `1`, ...r } = e;
  return (0, z.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": t,
    ...zt({ ...r, size: n, className: Hr }, Yr),
  });
}
var Yr = [
    ...Rt,
    { prop: `size`, className: (e) => Vr[`Size-${e}`], responsive: !0 },
    { prop: `color`, cssProperty: (e) => [`--separator-color`, Bt(e)] },
  ],
  Xr = `jVrrbr8-yq0-`,
  Zr = `wHTwYZgt1aE-`,
  Qr = `_5MTf-osqPjQ-`,
  $r = `E8lBOOHiEFg-`,
  ei = `f91HINLj8gM-`,
  ti = `GMZfIVrEZB0-`,
  ni = `TM-gf0Qc-hM-`,
  ri = `kMCVIwCpXwE-`,
  ii = `gOWLvh1zsGE-`,
  ai = `TP4hd63bK9g-`,
  oi = `bPw46i25ToU-`,
  si = `_4HJ4TxI7VGA-`,
  ci = `_3z50y552VaM-`,
  li = `zNam2sH3JOc-`,
  ui = `xFCMLN1hRNQ-`;
function B(t) {
  let n = t.strSecondaryCategory
      ? `${h.STORE_BASE_URL}search/?controllersupport=${t.strCategory}%2C${t.strSecondaryCategory}`
      : `${h.STORE_BASE_URL}search/?controllersupport=${t.strCategory}`,
    r = (0, z.jsxs)(z.Fragment, {
      children: [
        (0, z.jsx)(`div`, {
          className: e(
            ii,
            t.bHightlightRow && `VFEhs8s4XjQ-`,
            t.bHighlightGPRequired && `XXKNqeXLmoo-`,
          ),
          children: t.tagImage,
        }),
        (0, z.jsxs)(`div`, {
          className: e(
            ni,
            t.bHighlightText && `op0rZhgyRd8-`,
            t.bHightlightRow && `VFEhs8s4XjQ-`,
            t.bHighlightGPRequired && `XXKNqeXLmoo-`,
          ),
          children: [
            (0, z.jsx)(`div`, {
              className: e(
                ri,
                t.bHighlightText && `op0rZhgyRd8-`,
                t.bHightlightRow && `VFEhs8s4XjQ-`,
                t.bHighlightGPRequired && `XXKNqeXLmoo-`,
                t.bPersonalized && `aYsYtJOhj9Q-`,
              ),
              children: A(t.strLocalizationToken),
            }),
            t.strTooltipString &&
              (0, z.jsx)(Ve, {
                toolTipContent: A(t.strTooltipString),
                className: `fGXAfQIw1s8-`,
                children: (0, z.jsx)(`span`, {
                  className: `Tu69Vg196Wk-`,
                  children: `?`,
                }),
              }),
          ],
        }),
      ],
    });
  return t.strCategory
    ? (0, z.jsx)(`a`, { href: n, className: ti, children: r })
    : (0, z.jsx)(`div`, { className: ti, children: r });
}
function di(e) {
  return (0, z.jsx)(`div`, {
    className: oi,
    children: (0, z.jsx)(hi, { bPreview: !0, ...e }),
  });
}
function fi() {
  return (0, z.jsx)(B, {
    tagImage: (0, z.jsx)(we, { className: e(ui, ai), role: `presentation` }),
    strLocalizationToken: `#Store_ControllerSupport_GamepadRequired`,
    bHighlightGPRequired: !0,
    strTooltipString: `#Store_ControllerSupport_Tooltip_ControllerRequired`,
  });
}
function pi() {
  return (0, z.jsxs)(`div`, {
    className: e(si),
    children: [
      (0, z.jsx)(S, { className: e(ci), role: `presentation` }),
      (0, z.jsx)(`div`, {
        className: e(void 0),
        children: A(`#Store_ControllerSupport_GamepadPreferred`),
      }),
    ],
  });
}
function mi(t) {
  let { bNoKeyboardSupport: n, bGamepadPreferred: r } = t;
  return (0, z.jsxs)(`div`, {
    className: e(li),
    children: [n && (0, z.jsx)(fi, {}), r && !n && (0, z.jsx)(pi, {})],
  });
}
function hi(e) {
  let {
      bControllerSupportWizardComplete: t,
      bPS4ControllerSupport: n,
      bPS5ControllerSupport: r,
      bPS4ControllerBTSupport: i,
      bPS5ControllerBTSupport: a,
      bFullXboxControllerSupport: o,
      bPartialXboxControllerSupport: s,
      bSteamInputAPISupport: c,
      bHasOther: l,
      bHasPS4: u,
      bHasPS5: d,
      bHasXbox: f,
      bPreview: p,
    } = e,
    m = [];
  if (n && r && i && a) {
    let e = (0, z.jsx)(ve, {
        className: ai,
        controllerType: 34,
        partial: !o,
        role: `presentation`,
      }),
      t = u || d;
    m.push(
      (0, z.jsx)(
        B,
        {
          tagImage: e,
          strLocalizationToken: t
            ? `#Store_ControllerSupport_PS_Personalized`
            : `#Store_ControllerSupport_PS`,
          bPersonalized: t,
          strCategory: `55`,
          strSecondaryCategory: `57`,
        },
        `1`,
      ),
    );
  } else {
    if (n) {
      let e = (0, z.jsx)(ve, {
        className: ai,
        controllerType: 34,
        partial: !o,
        role: `presentation`,
      });
      i
        ? m.push(
            (0, z.jsx)(
              B,
              {
                tagImage: e,
                strLocalizationToken: u
                  ? `#Store_ControllerSupport_PS4_Personalized`
                  : `#Store_ControllerSupport_PS4`,
                bPersonalized: u,
                strCategory: `55`,
              },
              `2`,
            ),
          )
        : m.push(
            (0, z.jsx)(
              B,
              {
                tagImage: e,
                strLocalizationToken: u
                  ? `#Store_ControllerSupport_PS4_USB_Personalized`
                  : `#Store_ControllerSupport_PS4_USB`,
                bPersonalized: u,
                strCategory: `55`,
              },
              `3`,
            ),
          );
    }
    if (r) {
      let e = (0, z.jsx)(ve, {
        className: ai,
        controllerType: 45,
        partial: !o,
        role: `presentation`,
      });
      a
        ? m.push(
            (0, z.jsx)(
              B,
              {
                tagImage: e,
                strLocalizationToken: d
                  ? `#Store_ControllerSupport_PS5_Personalized`
                  : `#Store_ControllerSupport_PS5`,
                bPersonalized: d,
                strCategory: `57`,
              },
              `4`,
            ),
          )
        : m.push(
            (0, z.jsx)(
              B,
              {
                tagImage: e,
                strLocalizationToken: d
                  ? `#Store_ControllerSupport_PS5_USB_Personalized`
                  : `#Store_ControllerSupport_PS5_USB`,
                bPersonalized: d,
                strCategory: `57`,
              },
              `5`,
            ),
          );
    }
  }
  return (0, z.jsx)(z.Fragment, {
    children:
      (s || o) &&
      (0, z.jsxs)(z.Fragment, {
        children: [
          (0, z.jsx)(`div`, {
            className: `_1jp-rCKW9iQ-`,
            children: A(
              o
                ? `#Store_ControllerSupport_FullController`
                : `#Store_ControllerSupport_PartialController`,
            ),
          }),
          (0, z.jsx)(B, {
            tagImage: (0, z.jsx)(ve, {
              className: `TP4hd63bK9g-`,
              controllerType: 32,
              partial: !o,
              role: `presentation`,
            }),
            strLocalizationToken: f
              ? `#Store_ControllerSupport_Xbox_Personalized`
              : `#Store_ControllerSupport_Xbox`,
            bPersonalized: f,
            strCategory: `18`,
          }),
          m,
          c &&
            (0, z.jsx)(B, {
              tagImage: (0, z.jsx)(Ye, {
                className: `kFzhb-mNMzc-`,
                bGreyOutRightSide: !o,
                role: `presentation`,
              }),
              strLocalizationToken: `#Store_ControllerSupport_SIAPI`,
              strTooltipString: `#Store_ControllerSupport_Tooltip_SIAPI`,
              strCategory: `59`,
            }),
          ((!p && !t) || (!c && l && !f)) &&
            (0, z.jsx)(B, {
              tagImage: (0, z.jsx)(ae, {
                className: `kFzhb-mNMzc-`,
                role: `presentation`,
              }),
              strLocalizationToken:
                l || u || d
                  ? `#Store_ControllerSupport_Unknown_Personalized`
                  : `#Store_ControllerSupport_Unknown`,
              bPersonalized: l || u || d,
            }),
          (0, z.jsx)(mi, { ...e }),
        ],
      }),
  });
}
var gi = `CrNfIb97lo0-`,
  _i = `_5B4qwoPZ5mU-`,
  vi = `lwJYgtUofCo-`,
  yi = `zaMEZ3qo1ng-`,
  bi = `_-5YOSsqut1s-`,
  xi = `dBuODJ98Qu4-`,
  Si = `TlddyxBrzjE-`,
  Ci = `oBLEua4MMFo-`,
  wi = `CvUWooQdT8g-`,
  Ti = `L7gNL9e63mA-`,
  Ei = `uTpROzGpjCw-`;
function V(e, t) {
  let n = document.getElementById(e);
  n && n.setAttribute(`value`, t ? `true` : ``);
}
async function Di(e) {
  V(`gamepadsupport_input_1`, e.bPartialXboxControllerSupport),
    V(`gamepadsupport_input_2`, e.bFullXboxControllerSupport),
    V(`controllersupport_input_3`, e.bPS4ControllerSupport),
    V(`controllersupport_input_4`, e.bPS4ControllerBTSupport),
    V(`controllersupport_input_5`, e.bPS5ControllerSupport),
    V(`controllersupport_input_6`, e.bPS5ControllerBTSupport),
    V(`controllersupport_input_7`, e.bSteamInputAPISupport),
    V(`controllersupport_input_8`, e.bNoKeyboardSupport),
    V(`controllersupport_input_8_input`, e.bNoKeyboardSupport),
    V(`controllersupport_input_9`, e.bGamepadPreferred),
    V(`controllersupport_input_10`, !0);
  let t = document.getElementById(`submitBtn`);
  t && t.click();
}
function Oi(t) {
  let {
      nPageNum: n,
      currentValues: r,
      setCurrentValues: i,
      setSkipToEnd: a,
    } = t,
    o = [
      {
        id: 0,
        locString: `#ControllerSupportModal_PgOne_MouseKBOnly`,
        settings: {
          bFullXboxControllerSupport: !1,
          bPartialXboxControllerSupport: !1,
          bPS4ControllerSupport: !1,
          bPS4ControllerBTSupport: !1,
          bPS5ControllerSupport: !1,
          bPS5ControllerBTSupport: !1,
          bSteamInputAPISupport: !1,
          bNoKeyboardSupport: !1,
          bGamepadPreferred: !1,
        },
        bSkipToEnd: !0,
      },
      {
        id: 1,
        locString: `#ControllerSupportModal_PgOne_GamepadAndMouse`,
        settings: {
          bFullXboxControllerSupport: !0,
          bPartialXboxControllerSupport: !1,
          bNoKeyboardSupport: !1,
          bGamepadPreferred: !1,
        },
      },
      {
        id: 2,
        locString: `#ControllerSupportModal_PgOne_GamepadPreferred`,
        settings: {
          bFullXboxControllerSupport: !0,
          bPartialXboxControllerSupport: !1,
          bNoKeyboardSupport: !1,
          bGamepadPreferred: !0,
        },
      },
      {
        id: 3,
        locString: `#ControllerSupportModal_PgOne_GamepadRequired`,
        settings: {
          bFullXboxControllerSupport: !0,
          bPartialXboxControllerSupport: !1,
          bNoKeyboardSupport: !0,
          bGamepadPreferred: !1,
        },
      },
    ],
    s = () =>
      r.bNoKeyboardSupport
        ? 3
        : r.bGamepadPreferred
          ? 2
          : r.bFullXboxControllerSupport || r.bPartialXboxControllerSupport
            ? 1
            : 0,
    c = s(),
    l = (e) => {
      let t = o.find((t) => t.id == e);
      i({ ...r, ...t?.settings }), a(t.bSkipToEnd ?? !1);
    };
  R.useEffect(() => {
    c == 0 && a(!0);
  }, [c, a]);
  let u = (0, z.jsx)(`div`, {
      children: (0, z.jsx)(ce, {
        labelId: null,
        value: s(),
        onChange: l,
        children: o.map((t) =>
          (0, z.jsxs)(
            _e,
            {
              value: t.id,
              children: [
                (0, z.jsx)(`div`, {
                  className: e(bi, c == t.id && `WcqiysDrcMg-`),
                }),
                (0, z.jsx)(`div`, { className: xi, children: A(t.locString) }),
              ],
            },
            t.id,
          ),
        ),
      }),
    }),
    d = (0, z.jsxs)(`div`, {
      children: [
        (0, z.jsx)(`p`, {
          children: A(`#ControllerSupportModal_PgOne_Instructions`),
        }),
        (0, z.jsx)(`p`, {
          children: A(`#ControllerSupportModal_PgOne_Instructions_VR`),
        }),
      ],
    });
  return (0, z.jsx)(Ii, {
    strStepName: A(`#ControllerSupportModal_StepString`, n + 1),
    strStepSubHeaderToken: `#ControllerSupportModal_PgOne_Header`,
    strInstructionsToken: d,
    strQuestionToken: `#ControllerSupportModal_PgOne_Question`,
    leftColumnContent: u,
  });
}
function ki(t) {
  let {
      nPageNum: n,
      currentValues: r,
      setCurrentValues: i,
      setSkipToEnd: a,
    } = t,
    o = R.useMemo(
      () => [
        {
          id: 0,
          locString: `#ControllerSupportModal_PgTwo_FullController`,
          settings: {
            bFullXboxControllerSupport: !0,
            bPartialXboxControllerSupport: !1,
          },
          bSkipToEnd: !1,
        },
        {
          id: 1,
          locString: `#ControllerSupportModal_PgTwo_PartialController`,
          settings: {
            bFullXboxControllerSupport: !1,
            bPartialXboxControllerSupport: !0,
          },
        },
      ],
      [],
    ),
    s = R.useCallback(() => +!r.bFullXboxControllerSupport, [r]),
    c = R.useCallback(
      (e) => {
        let t = o.find((t) => t.id == e);
        i({ ...r, ...t?.settings }), a(t.bSkipToEnd ?? !1);
      },
      [r, o, i, a],
    ),
    l = s(),
    u = (0, z.jsx)(`div`, {
      children: (0, z.jsx)(ce, {
        labelId: null,
        value: s(),
        onChange: c,
        children: o.map((t) =>
          (0, z.jsxs)(
            _e,
            {
              value: t.id,
              children: [
                (0, z.jsx)(`div`, {
                  className: e(bi, l == t.id && `WcqiysDrcMg-`),
                }),
                (0, z.jsx)(`div`, { className: xi, children: A(t.locString) }),
              ],
            },
            t.id,
          ),
        ),
      }),
    }),
    d = (0, z.jsxs)(`div`, {
      children: [
        (0, z.jsx)(`p`, {
          children: A(`#ControllerSupportModal_PgTwo_Instructions`),
        }),
        (0, z.jsxs)(`ol`, {
          children: [
            (0, z.jsx)(`li`, {
              children: A(`#ControllerSupportModal_PgTwo_Instructions_pt1`),
            }),
            (0, z.jsx)(`li`, {
              children: A(`#ControllerSupportModal_PgThree_Instructions_pt1`),
            }),
            (0, z.jsx)(`li`, {
              children: A(`#ControllerSupportModal_PgTwo_Instructions_pt4`),
            }),
            (0, z.jsx)(`li`, {
              children: A(`#ControllerSupportModal_PgTwo_Instructions_pt5`),
            }),
          ],
        }),
      ],
    });
  return (0, z.jsx)(Ii, {
    stepIMG: (0, z.jsx)(fe, { type: `xbox` }),
    strStepName: A(`#ControllerSupportModal_StepString`, n + 1),
    strStepSubHeaderToken: `#ControllerSupportModal_PgTwo_Header`,
    strInstructionsToken: d,
    strQuestionToken: `#ControllerSupportModal_PgTwo_Question`,
    leftColumnContent: u,
  });
}
function Ai(e) {
  let { nPageNum: t, currentValues: n, setCurrentValues: r } = e,
    i = [
      {
        id: 0,
        locString: `#ControllerSupportModal_PgThree_Ps4`,
        settings: { bPS4ControllerSupport: !0 },
        invertedSettings: {
          bPS4ControllerSupport: !1,
          bPS4ControllerBTSupport: !1,
        },
        bValue: n.bPS4ControllerSupport,
      },
      {
        id: 1,
        locString: `#ControllerSupportModal_PgThree_Ps4BT`,
        settings: { bPS4ControllerBTSupport: !0, bPS4ControllerSupport: !0 },
        invertedSettings: { bPS4ControllerBTSupport: !1 },
        bValue: n.bPS4ControllerBTSupport,
      },
      {
        id: 2,
        locString: `#ControllerSupportModal_PgThree_Ps5`,
        settings: { bPS5ControllerSupport: !0 },
        invertedSettings: {
          bPS5ControllerSupport: !1,
          bPS5ControllerBTSupport: !1,
        },
        bValue: n.bPS5ControllerSupport,
      },
      {
        id: 3,
        locString: `#ControllerSupportModal_PgThree_Ps5BT`,
        settings: { bPS5ControllerBTSupport: !0, bPS5ControllerSupport: !0 },
        invertedSettings: { bPS5ControllerBTSupport: !1 },
        bValue: n.bPS5ControllerBTSupport,
      },
      {
        id: 4,
        locString: `#ControllerSupportModal_PgThree_None`,
        settings: {
          bPS4ControllerSupport: !1,
          bPS4ControllerBTSupport: !1,
          bPS5ControllerSupport: !1,
          bPS5ControllerBTSupport: !1,
        },
        invertedSettings: { bPS4ControllerSupport: !0 },
        bValue:
          !n.bPS4ControllerSupport &&
          !n.bPS4ControllerBTSupport &&
          !n.bPS5ControllerSupport &&
          !n.bPS5ControllerBTSupport,
      },
    ],
    a = (e) => {
      r({ ...n, ...e });
    },
    o = (0, z.jsx)(`div`, {
      children: i.map((e) =>
        (0, z.jsx)(
          E,
          {
            checked: e.bValue,
            onChange: (t) => a(t ? e.settings : e.invertedSettings),
            label: A(e.locString),
          },
          e.id,
        ),
      ),
    }),
    s = (0, z.jsxs)(`div`, {
      children: [
        (0, z.jsx)(`p`, {
          children: A(`#ControllerSupportModal_PgThree_Instructions`),
        }),
        (0, z.jsx)(`ol`, {
          children: (0, z.jsx)(`li`, {
            children: A(`#ControllerSupportModal_PgThree_Instructions_pt1`),
          }),
        }),
        (0, z.jsx)(`p`, {
          children: D(
            `#ControllerSupportModal_PgThree_Instructions_note`,
            (0, z.jsx)(`span`, { style: { fontWeight: `bold` } }),
          ),
        }),
      ],
    });
  return (0, z.jsx)(Ii, {
    stepIMG: (0, z.jsx)(fe, { type: `ps4` }),
    strStepName: A(`#ControllerSupportModal_StepString`, t + 1),
    strStepSubHeaderToken: `#ControllerSupportModal_PgThree_Header`,
    strInstructionsToken: s,
    strQuestionToken: `#ControllerSupportModal_PgThree_Question`,
    leftColumnContent: o,
  });
}
function ji(t) {
  let {
      nPageNum: n,
      currentValues: r,
      setCurrentValues: i,
      setSkipToEnd: a,
    } = t,
    o = [
      {
        id: 0,
        locString: `#ControllerSupportModal_PgFour_SIAPI`,
        settings: { bSteamInputAPISupport: !0 },
        bSkipToEnd: !1,
      },
      {
        id: 1,
        locString: `#ControllerSupportModal_PgFour_NoSIAPI`,
        settings: { bSteamInputAPISupport: !1 },
        bSkipToEnd: !1,
      },
    ],
    s = () => +!r.bSteamInputAPISupport,
    c = (e) => {
      let t = o.find((t) => t.id == e);
      i({ ...r, ...t?.settings }), a(t.bSkipToEnd ?? !1);
    },
    l = s(),
    u = (0, z.jsx)(`div`, {
      children: (0, z.jsx)(ce, {
        labelId: null,
        value: l,
        onChange: c,
        classNames: void 0,
        children: o.map((t) =>
          (0, z.jsxs)(
            _e,
            {
              value: t.id,
              children: [
                (0, z.jsx)(`div`, {
                  className: e(bi, l == t.id && `WcqiysDrcMg-`),
                }),
                (0, z.jsx)(`div`, { className: xi, children: A(t.locString) }),
              ],
            },
            t.id,
          ),
        ),
      }),
    }),
    d = (0, z.jsxs)(`div`, {
      children: [
        (0, z.jsx)(`p`, {
          children: A(`#ControllerSupportModal_PgFour_Instructions`),
        }),
        (0, z.jsxs)(`ol`, {
          children: [
            (0, z.jsx)(`li`, {
              children: A(`#ControllerSupportModal_PgFour_Instructions_pt1`),
            }),
            (0, z.jsx)(`li`, {
              children: A(`#ControllerSupportModal_PgFour_Instructions_pt2`),
            }),
            (0, z.jsx)(`li`, {
              children: A(`#ControllerSupportModal_PgFour_Instructions_pt3`),
            }),
          ],
        }),
        (0, z.jsx)(`p`, {
          children: A(`#ControllerSupportModal_PgFour_Instructions_note`),
        }),
      ],
    });
  return (0, z.jsx)(Ii, {
    strStepName: A(`#ControllerSupportModal_StepString`, n + 1),
    strStepSubHeaderToken: `#ControllerSupportModal_PgFour_Header`,
    strInstructionsToken: d,
    strQuestionToken: `#ControllerSupportModal_PgFour_Question`,
    leftColumnContent: u,
  });
}
function Mi(e) {
  let { currentValues: t } = e,
    n = (0, z.jsx)(`div`, {
      children:
        (t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport) &&
        (0, z.jsx)(di, { ...e.currentValues }),
    }),
    r =
      t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport
        ? `#ControllerSupportModal_PgFive_Question`
        : `#ControllerSupportModal_PgFive_QuestionNoController`;
  return (0, z.jsx)(Ii, {
    strStepName: A(`#ControllerSupportModal_StepString`, 5),
    strStepSubHeaderToken: `#ControllerSupportModal_PgFive_Header`,
    strInstructionsToken: void 0,
    strQuestionToken: r,
    leftColumnContent: n,
  });
}
function Ni(e) {
  let { appid: t, onClose: n, onCommit: r, params: i } = e,
    [a, o] = R.useState(i),
    [s, c] = R.useState(i),
    [l, u] = R.useState(!1),
    [d, f] = R.useState(0),
    p = R.useCallback(() => {
      Di(s), r(!1);
    }, [r, s]),
    m = () => {
      c(a);
      let e = d - 1;
      l && d == 4 && (e = 0), f(e);
    },
    h = () => {
      o(s), f(l ? 4 : d + 1);
    },
    g;
  switch (d) {
    default:
    case 0:
      g = (0, z.jsx)(Oi, {
        nPageNum: d,
        currentValues: s,
        setCurrentValues: c,
        setSkipToEnd: u,
      });
      break;
    case 1:
      g = (0, z.jsx)(ki, {
        nPageNum: d,
        currentValues: s,
        setCurrentValues: c,
        setSkipToEnd: u,
      });
      break;
    case 2:
      g = (0, z.jsx)(Ai, {
        nPageNum: d,
        currentValues: s,
        setCurrentValues: c,
        setSkipToEnd: u,
      });
      break;
    case 3:
      g = (0, z.jsx)(ji, {
        nPageNum: d,
        currentValues: s,
        setCurrentValues: c,
        setSkipToEnd: u,
      });
      break;
    case 4:
      g = (0, z.jsx)(Mi, { currentValues: s });
  }
  let _ = (0, z.jsx)(Fi, {
      nPageIdx: d,
      nPages: 5,
      strHeaderText: A(`#ControllerSupportModal_Title`),
    }),
    v = d == 4;
  return (0, z.jsx)(Pi.Provider, {
    value: s,
    children: (0, z.jsx)(Li, {
      fnNext: v ? () => p() : h,
      fnBack: d > 0 ? m : n,
      header: _,
      strOkButtonLabel: v ? `Save and Exit` : `Next`,
      children: g,
    }),
  });
}
var Pi = R.createContext(null);
function Fi(t) {
  let { nPages: n, nPageIdx: r, strHeaderText: i } = t,
    a = (100 * (r + 1)) / (n + 1);
  return (0, z.jsxs)(`div`, {
    className: e(void 0),
    children: [
      !1,
      (0, z.jsx)(`div`, { className: Ci, children: A(i) }),
      (0, z.jsx)(`div`, {
        className: e(Si, r == n - 1 && `WmNSSwbcAEk-`),
        children:
          r < n - 1 &&
          (0, z.jsx)(`div`, {
            className: e(`wBBogABkCCg-`),
            style: { width: a + `%` },
          }),
      }),
    ],
  });
}
var Ii = R.memo(function (e) {
  let {
    strStepName: t,
    strStepSubHeaderToken: n,
    stepIMG: r,
    strInstructionsToken: i,
    strQuestionToken: a,
    leftColumnContent: o,
    rightColumnContent: s,
  } = e;
  return (0, z.jsxs)(`div`, {
    className: vi,
    children: [
      (0, z.jsxs)(`div`, {
        className: wi,
        children: [
          r &&
            (0, z.jsxs)(`div`, {
              className: `UWaFu65r-SE-`,
              children: [` `, r, ` `],
            }),
          (0, z.jsxs)(`div`, {
            className: Ti,
            children: [t, (0, z.jsx)(We, { children: A(n) })],
          }),
        ],
      }),
      i && (0, z.jsx)(`div`, { className: `Ef5RrILbX5A-`, children: i }),
      (0, z.jsx)(`div`, {
        className: Ei,
        children: D(a, (0, z.jsx)(`span`, { style: { fontWeight: `bold` } })),
      }),
      (0, z.jsxs)(Ae, {
        children: [
          (0, z.jsx)(Se, { children: o }),
          (0, z.jsx)(Se, { children: s }),
        ],
      }),
    ],
  });
});
function Li(e) {
  let { fnNext: t, fnBack: n, children: r, header: i, strOkButtonLabel: a } = e;
  return (0, z.jsxs)(Lt, {
    active: !0,
    className: gi,
    children: [
      i,
      (0, z.jsx)(st, { className: yi, children: r }),
      (0, z.jsx)(tt, {
        className: _i,
        bCancelDisabled: !n,
        onCancel: n,
        strCancelText: `Back`,
        onOK: t,
        strOKText: a,
      }),
    ],
  });
}
function Ri(t) {
  let { unAppID: n } = t,
    [r, i] = R.useState(!1),
    a = R.useCallback(() => i(!0), []),
    o = R.useCallback(() => i(!1), []),
    s =
      t.bControllerSupportWizardComplete &&
      (t.bFullXboxControllerSupport || t.bPartialXboxControllerSupport);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      r && (0, z.jsx)(Ni, { appid: n, onClose: o, onCommit: o, params: t }),
      (0, z.jsxs)(st, {
        children: [
          (0, z.jsx)(`div`, {
            className: Qr,
            children: A(`#App_Landing_ControllerSupport_WizardPrompt_Desc`),
          }),
          t.bControllerSupportWizardComplete &&
            (0, z.jsx)(`div`, {
              className: `_5MTf-osqPjQ-`,
              children: A(
                `#App_Landing_ControllerSupport_WizardPrompt_CustomerView`,
              ),
            }),
        ],
      }),
      (0, z.jsxs)(`div`, {
        className: e(Xr),
        children: [
          (0, z.jsxs)(`div`, {
            className: Zr,
            children: [
              !t.bControllerSupportWizardComplete &&
                (0, z.jsx)(zi, { onClick: a }),
              t.bControllerSupportWizardComplete &&
                !s &&
                (0, z.jsx)(Bi, { onClick: a }),
              t.bControllerSupportWizardComplete &&
                s &&
                (0, z.jsx)(di, { ...t }),
            ],
          }),
          t.bControllerSupportWizardComplete &&
            s &&
            (0, z.jsxs)(`div`, {
              className: `YRxeGPP-2Y8-`,
              onClick: a,
              children: [
                (0, z.jsx)(`div`, {
                  className: e(`eZGIk5Qqo00-`, `fALc4GmLpP4-`),
                }),
                (0, z.jsx)(`div`, {
                  className: `aUzBfV7Mr8c-`,
                  children: (0, z.jsx)(Oe, {}),
                }),
                (0, z.jsx)(`div`, {
                  className: e(`eZGIk5Qqo00-`, `-MtRKHZ31n4-`),
                }),
              ],
            }),
        ],
      }),
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`div`, {
        className: Qr,
        children: A(`#App_Landing_ControllerSupport_WizardPrompt_Upcoming`),
      }),
    ],
  });
}
function zi(e) {
  return (0, z.jsx)(`div`, {
    children: (0, z.jsxs)(st, {
      children: [
        (0, z.jsx)(be, {
          children: (0, z.jsx)(`div`, {
            className: $r,
            children: A(
              `#App_Landing_ControllerSupport_WizardPrompt_StatusNotStarted`,
            ),
          }),
        }),
        (0, z.jsxs)(Ze, {
          className: ei,
          onClick: e.onClick,
          children: [
            ` `,
            A(`#App_Landing_ControllerSupport_WizardPrompt_EditButton`),
            ` `,
          ],
        }),
      ],
    }),
  });
}
function Bi(e) {
  return (0, z.jsx)(`div`, {
    children: (0, z.jsxs)(st, {
      children: [
        (0, z.jsx)(be, {
          children: (0, z.jsx)(`div`, {
            className: $r,
            children: A(
              `#App_Landing_ControllerSupport_WizardPrompt_StatusNoController`,
            ),
          }),
        }),
        (0, z.jsxs)(T, {
          className: ei,
          onClick: e.onClick,
          children: [
            ` `,
            A(`#App_Landing_ControllerSupport_WizardPrompt_EditButton`),
            ` `,
          ],
        }),
      ],
    }),
  });
}
function Vi(e) {
  let { language: t, rctToolbarControls: n, mapValues: r } = e,
    i = r.get(t),
    a = R.createRef();
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(Hi, { refTextArea: a, value: i, rctToolbarControls: n }),
      (0, z.jsx)(Wi, { language: t, value: i, refTextArea: a }),
    ],
  });
}
function Hi(e) {
  let { refTextArea: t, value: n, rctToolbarControls: r } = e,
    i = R.useCallback(
      (e, r) => {
        Gi(t.current, n, e, r);
      },
      [t, n],
    ),
    a = R.useCallback(
      (e, r) => {
        Gi(t.current, n, e, r, (e) =>
          e.replace(
            /(\r\n|\n|\r)/gm,
            `\r
[*]`,
          ),
        );
      },
      [t, n],
    );
  return (0, z.jsxs)(fr, {
    children: [
      (0, z.jsx)(Ui, {
        fnInsertText: i,
        tooltip: A(`#FormattingToolbar_Bold`),
        start: `[b]`,
        end: `[/b]`,
        children: (0, z.jsx)(nt, {}),
      }),
      (0, z.jsx)(Ui, {
        fnInsertText: i,
        tooltip: A(`#FormattingToolbar_Italic`),
        start: `[i]`,
        end: `[/i]`,
        children: (0, z.jsx)(Ne, {}),
      }),
      (0, z.jsx)(Ui, {
        fnInsertText: i,
        tooltip: A(`#FormattingToolbar_Underline`),
        start: `[u]`,
        end: `[/u]`,
        children: (0, z.jsx)(ke, {}),
      }),
      (0, z.jsx)(dr, {}),
      (0, z.jsx)(Ui, {
        fnInsertText: a,
        tooltip: A(`#FormattingToolbar_BulletedList`),
        start: `[list][*]`,
        end: `[/list]`,
        children: (0, z.jsx)(Ue, {}),
      }),
      (0, z.jsx)(Ui, {
        fnInsertText: i,
        tooltip: A(`#FormattingToolbar_HeadingLevel2`),
        start: `[h2]`,
        end: `[/h2]`,
        children: (0, z.jsx)($e, {}),
      }),
      (0, z.jsx)(dr, {}),
      (0, z.jsx)(Ui, {
        fnInsertText: i,
        tooltip: A(`#FormattingToolbar_InsertLink`),
        start: `[url]`,
        end: `[/url]`,
        children: (0, z.jsx)(He, {}),
      }),
      (0, z.jsx)(Ui, {
        fnInsertText: i,
        tooltip: A(`#EventEditor_InsertImage`),
        start: `[img]`,
        end: `[/img]`,
        children: (0, z.jsx)(Ce, {}),
      }),
      (0, z.jsx)(xr, {}),
      r,
    ],
  });
}
function Ui(e) {
  let { fnInsertText: t, tooltip: n, start: r, end: i, children: a } = e;
  return (0, z.jsx)(wr, { onClick: () => t(r, i), tooltip: n, children: a });
}
function Wi(e) {
  let { language: t, value: n, refTextArea: r } = e,
    i = R.useCallback((e) => n.Set(e.currentTarget.value), [n]),
    a = Me(n),
    o = R.useCallback(
      (e) => {
        lt(r, e?.textarea);
      },
      [r],
    );
  return (0, z.jsx)(he, {
    className: hr,
    ref: o,
    nMinHeight: 96,
    value: a,
    onChange: i,
    lang: Xe(t),
  });
}
function Gi(e, t, n, r, i) {
  if (e.selectionStart || e.selectionStart === 0) {
    let a = e.selectionStart,
      o = e.selectionEnd,
      s = e.value.substring(0, a),
      c = e.value.substring(a, o),
      l = e.value.substring(o, e.value.length),
      u = i ? i(c) : c,
      d = u.length - c.length,
      f = e.scrollTop;
    Ki(t, s + n + u + r + l, () => {
      e.focus(),
        (e.selectionStart = a + n.length),
        (e.selectionEnd = o + n.length + d),
        (e.scrollTop = f);
    });
  } else Ki(t, e.value + n + ` ` + r, () => e.focus());
}
function Ki(e, t, n) {
  e.Set(t), window.setTimeout(n, 1);
}
function qi(e) {
  switch (e) {
    case `Demo`:
      return `#StoreAdmin_GameDescription_AboutThisDemo`;
    case `DLC`:
      return `#StoreAdmin_GameDescription_AboutThisContent`;
    case `Music`:
      return `#StoreAdmin_GameDescription_AboutThisSoundtrack`;
    case `Application`:
      return `#StoreAdmin_GameDescription_AboutThisSoftware`;
    default:
      return `#StoreAdmin_GameDescription_AboutThisGame`;
  }
}
var Ji = R.lazy(() =>
  Te(
    () => import(`./richgamedescriptioneditor2.js?contenthash=ULwv5Xsu`),
    __vite__mapDeps([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44,
    ]),
    import.meta.url,
  ),
);
function Yi(e) {
  let {
      rgLanguages: t,
      value: n,
      strNamePrefix: r,
      rgPath: i,
      editorType: a,
      asset_mtime: o,
      appType: s,
    } = e,
    c = R.useMemo(() => new Map(t), [t]),
    l = R.useMemo(() => Array.from(c.keys()).map(ft), [c]),
    {
      strActiveLanguage: u,
      mapValues: d,
      rctLanguageSelect: f,
      rctHiddenInputs: p,
    } = yr(c, n, r, i),
    m = Xi(),
    h = mr(),
    g = a == `aboutthegame` ? (0, z.jsx)(br, { children: A(qi(s)) }) : void 0;
  return (0, z.jsxs)(`div`, {
    className: gr,
    children: [
      a == `aboutthegame` && (0, z.jsx)(Zi, {}),
      a == `aboutthegame` && !h && (0, z.jsx)(Qi, {}),
      (0, z.jsxs)(
        ut,
        {
          children: [
            ` `,
            (0, z.jsx)(R.Suspense, {
              fallback: null,
              children: (0, z.jsx)(ur.Provider, {
                value: o,
                children: (0, z.jsx)(m, {
                  language: u,
                  mapValues: d,
                  languages: l,
                  rctToolbarControls: f,
                  editorType: a,
                  rctAboveEditor: g,
                }),
              }),
            }),
          ],
        },
        h ? `richeditor` : `bbcode`,
      ),
      p,
    ],
  });
}
function Xi() {
  return mr() ? Ji : Vi;
}
function Zi() {
  let e = mr(),
    t = Sr();
  return (0, z.jsx)(E, {
    style: { width: `fit-content` },
    checked: e,
    label: A(`#StoreAdmin_GameDescription_UseRichEditor`),
    onChange: t,
  });
}
function Qi() {
  return (0, z.jsxs)(`div`, {
    children: [
      qe(
        `#StoreAdmin_GameDescription_PlainEditorImageInstructions1`,
        (0, z.jsx)(ot, { className: `inline_svg` }),
      ),
      (0, z.jsx)(`br`, {}),
      A(`#StoreAdmin_GameDescription_PlainEditorImageInstructions2`),
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`br`, {}),
    ],
  });
}
var $i = (function (e) {
    return (
      (e[(e.k_CreatorHomeNone = 0)] = `k_CreatorHomeNone`),
      (e[(e.k_CreatorHomeAll = -1)] = `k_CreatorHomeAll`),
      e
    );
  })({}),
  ea = `_36Mr-zFxrGg-`,
  ta = `vDk4ZmssF0c-`,
  na = `D0pD3KsBa-k-`,
  ra = `FAhSNGdBt8k-`,
  ia = `_8ETjP3g09U0-`,
  aa = `_4LAwpd6wUqQ-`,
  oa = `dcVJ2J-ApVw-`;
function sa(e) {
  let { rgCreatorHomes: t, groupvanityinfo: n } = e,
    [r, i] = (0, R.useState)(!0);
  return (
    (0, R.useEffect)(() => {
      n
        ? (async () => {
            await zn.AddGroupVanities(n), i(!1);
          })()
        : i(!1);
    }, [n]),
    r
      ? null
      : (0, z.jsxs)(ut, {
          children: [
            (0, z.jsxs)(`div`, {
              className: `instructions`,
              children: [
                (0, z.jsxs)(`h2`, {
                  children: [
                    A(`#Create_Home_Title`),
                    ` `,
                    (0, z.jsx)(`span`, {
                      className: `small`,
                      children: (0, z.jsx)(`a`, {
                        href: `${u.STORE_BASE_URL}news/group/4145017/view/4578559379959234050`,
                        target: `_blank`,
                        children: A(`#AssetRequest_General_SeeDocs`),
                      }),
                    }),
                  ],
                }),
                (0, z.jsx)(`hr`, {}),
                !t || t.length == 0
                  ? (0, z.jsx)(`div`, {
                      className: ra,
                      children: D(
                        `#Create_Home_None`,
                        (0, z.jsx)(`a`, {
                          href: `${u.PARTNER_BASE_URL}doc/store/creator_homepage`,
                          target: `_blank`,
                        }),
                        (0, z.jsx)(`a`, {
                          href: `${u.PARTNER_BASE_URL}doc/store/franchise_pages`,
                          target: `_blank`,
                        }),
                      ),
                    })
                  : (0, z.jsx)(la, { ...e, baseGameAppID: e.appid }),
              ],
            }),
            (0, z.jsx)(`br`, {}),
            (0, z.jsx)(`br`, {}),
          ],
        })
  );
}
function ca(e, t) {
  if (e >= t) return [];
  let n = [];
  for (let r = e; r < t; r++) n.push(r);
  return n;
}
function la(e) {
  let {
      rgCreatorHomes: t,
      oInputFeatured: n,
      creatorNames: r,
      baseGameAppID: i,
    } = e,
    [a, o] = (0, R.useState)(() => {
      if (n) return n;
      for (let e of r.rgFrachises) {
        let n = t.find((t) => t.linkname == e);
        if (n)
          return {
            clan_account_id: new Sn(n.clan_steamid).GetAccountID(),
            sort_order: `salesrank`,
            featured_appids: void 0,
          };
      }
      return { clan_account_id: 0 };
    }),
    s = (0, R.useCallback)(
      (e, t) => {
        a.clan_account_id == $i.k_CreatorHomeAll
          ? o({
              ...a,
              featured_appids: [...(a.featured_appids || []), t],
              featured_creator_clan_account_id: [
                ...(a.featured_creator_clan_account_id || []),
                e,
              ],
            })
          : o({ ...a, featured_appids: [...(a.featured_appids || []), t] });
      },
      [a],
    ),
    c = (0, R.useMemo)(() => {
      if (a.clan_account_id == $i.k_CreatorHomeAll) {
        let e = new Set();
        t.forEach((t) => e.add(new Sn(t.clan_steamid).GetAccountID()));
        let n = [];
        return (
          e.forEach((e) => {
            let t = zn.GetClanInfoByClanAccountID(e);
            n.push({
              name: t?.group_name || `` + e,
              key: `clanid` + e,
              contents: (0, z.jsx)(ut, {
                children: (0, z.jsx)(va, {
                  creatorHomeClanAccountID: e,
                  fnAddAppToFeaturedAppList: s,
                  baseGameAppID: i,
                  rgFeaturedList: a.featured_appids,
                }),
              }),
            });
          }),
          n
        );
      }
      return null;
    }, [i, s, a.clan_account_id, a.featured_appids, t]);
  return (0, z.jsxs)(`div`, {
    children: [
      (0, z.jsx)(`div`, { children: A(`#Create_Home_Desc`) }),
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`div`, {
        className: xn,
        children: A(`#Create_Home_SelectedSource`),
      }),
      (0, z.jsx)(_a, { rgCreatorHomes: t, oFeatured: a, fnSetFeatured: o }),
      (0, z.jsx)(`div`, {
        style: { display: `flex`, flexDirection: `column` },
        className: bn,
        children: a.clan_account_id
          ? (0, z.jsx)(z.Fragment, {
              children:
                a.clan_account_id > 0
                  ? (0, z.jsx)(va, {
                      creatorHomeClanAccountID: a.clan_account_id,
                      fnAddAppToFeaturedAppList: s,
                      baseGameAppID: i,
                      rgFeaturedList: a.featured_appids,
                    })
                  : (0, z.jsx)(rn, { tabs: c }),
            })
          : (0, z.jsx)(`span`, { children: A(`#Create_Home_Selected_None`) }),
      }),
      (0, z.jsxs)(`div`, {
        className: void 0,
        children: [
          !!(
            a.clan_account_id || a.featured_creator_clan_account_id?.length > 0
          ) &&
            (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsx)(pa, {
                  rgFeaturedList: a.featured_appids,
                  strFeaturedFirstAppToken: a.featured_first_app_token,
                  rgFeaturedClanList: a.featured_creator_clan_account_id,
                  fnSetFeatureAppAndClans: (e, t, n) => {
                    o({
                      ...a,
                      featured_appids: e,
                      featured_creator_clan_account_id: t,
                      featured_first_app_token: n,
                    });
                  },
                }),
                (0, z.jsx)(ya, { oFeatured: a, fnSetFeatured: o }),
              ],
            }),
          (0, z.jsx)(ua, { oFeatured: a }),
        ],
      }),
    ],
  });
}
function ua(e) {
  let { oFeatured: t } = e,
    [n, r] = (0, R.useState)(() => t?.featured_appids?.length || 0);
  (0, R.useEffect)(() => {
    n < (t?.featured_appids?.length || 0) && r(t.featured_appids.length);
  }, [t, n]);
  let i = ca(t?.featured_appids?.length || 0, n),
    a =
      !t?.featured_first_app_token ||
      t?.featured_first_app_token == `#Featured_App_None`;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[featured_creator_home][clan_account_id]`,
        value: t?.clan_account_id || 0,
      }),
      (0, z.jsx)(
        `input`,
        {
          type: `hidden`,
          name: `app[featured_creator_home][featured_first_app_token]`,
          value: a ? void 0 : t?.featured_first_app_token,
        },
        a ? `empty` : `feating`,
      ),
      t?.clan_account_id
        ? (0, z.jsxs)(z.Fragment, {
            children: [
              (0, z.jsx)(`input`, {
                type: `hidden`,
                name: `app[featured_creator_home][sort_order]`,
                value: t.sort_order || `salesrank`,
              }),
              t.featured_appids?.map((e, n) =>
                (0, z.jsxs)(
                  R.Fragment,
                  {
                    children: [
                      (0, z.jsx)(`input`, {
                        type: `hidden`,
                        name: `app[featured_creator_home][featured_appids][${n}]`,
                        value: e,
                      }),
                      (0, z.jsx)(`input`, {
                        type: `hidden`,
                        name: `app[featured_creator_home][featured_creator_clan_account_id][${n}]`,
                        value: t.featured_creator_clan_account_id?.[n],
                      }),
                    ],
                  },
                  `app` + e,
                ),
              ),
            ],
          })
        : (0, z.jsx)(`input`, {
            type: `hidden`,
            name: `app[featured_creator_home][sort_order]`,
            value: void 0,
          }),
      i.map((e) =>
        (0, z.jsxs)(
          R.Fragment,
          {
            children: [
              (0, z.jsx)(`input`, {
                type: `hidden`,
                name: `app[featured_creator_home][featured_appids][${e}]`,
                value: void 0,
              }),
              (0, z.jsx)(`input`, {
                type: `hidden`,
                name: `app[featured_creator_home][featured_creator_clan_account_id][${e}]`,
                value: void 0,
              }),
            ],
          },
          `nullinput` + e,
        ),
      ),
    ],
  });
}
var da = { include_assets: !0, include_release: !0 };
function fa(e) {
  let {
      creatorHomeClanAccountID: t,
      rgFeaturedList: n,
      fnAddAppToFeaturedAppList: r,
      baseGameAppID: i,
    } = e,
    a = ar(),
    [o, s] = (0, R.useState)(null),
    c = An(a, t, !0),
    l = Pn(c, da),
    u = (0, R.useMemo)(
      () =>
        l != 1 && c
          ? c
              .filter((e) => e != i)
              .map((e) => {
                let t = Cn.Get().GetApp(e);
                return {
                  value: e,
                  label: `${t ? t.GetName() : ``} (Appid: ${e})`,
                };
              })
          : [],
      [c, l, i],
    );
  return !c || l == 1
    ? (0, z.jsx)(sn, { size: `small`, string: A(`#Loading`) })
    : (0, z.jsxs)(`div`, {
        className: ia,
        children: [
          (0, z.jsx)(`div`, {
            className: `DialogLabel`,
            children: A(`#Create_Home_ManuallyFeature`),
          }),
          (0, z.jsx)(`div`, { children: A(`#Create_Home_Select_App_Desc`) }),
          (0, z.jsxs)(`div`, {
            className: oa,
            children: [
              (0, z.jsx)(rr._default, {
                className: `react-select-container`,
                classNamePrefix: `react-select`,
                isSearchable: !0,
                isMulti: !1,
                placeholder: A(`#Create_Home_Select_App`),
                options: u,
                value: u.find((e) => e.value === o),
                onChange: (e) => s(e.value),
                controlShouldRenderValue: !!o,
              }),
              (0, z.jsx)(Ze, {
                disabled: !o,
                onClick: () => {
                  (!n || n.findIndex((e) => e === o) == -1) && r(t, o), s(null);
                },
                children: A(`#Create_Home_Add_App`),
              }),
            ],
          }),
        ],
      });
}
function pa(e) {
  let {
    rgFeaturedList: t,
    rgFeaturedClanList: n,
    fnSetFeatureAppAndClans: r,
    strFeaturedFirstAppToken: i,
  } = e;
  return (0, z.jsxs)(`div`, {
    className: ia,
    children: [
      (0, z.jsx)(`div`, {
        className: `DialogLabel`,
        children: A(`#Create_Home_App_Featured`),
      }),
      (0, z.jsxs)(`div`, {
        style: { display: `flex`, flexDirection: `column` },
        className: bn,
        children: [
          (0, z.jsx)(`p`, { children: A(`#Create_Home_App_Featured_Desc`) }),
          !t || t.length == 0
            ? (0, z.jsx)(`div`, { children: A(`#Create_Home_No_Featured`) })
            : (0, z.jsx)(ir, {
                items: t || [],
                render: (e, a) =>
                  (0, z.jsx)(
                    ha,
                    {
                      appid: e,
                      creatorClanID: n?.[a],
                      elEditor:
                        a == 0
                          ? (0, z.jsx)(ma, {
                              strFeaturedFirstAppToken: i,
                              fnSetFeaturedFirstAppToken: (e) => r(t, n, e),
                            })
                          : void 0,
                    },
                    `row` + e,
                  ),
                onDelete: (e) => {
                  let a = [...t];
                  a.splice(e, 1);
                  let o;
                  n && ((o = [...n]), o.splice(e, 1)), r(a, o, i);
                },
                onMove: (e, a) => {
                  let o = [...t];
                  je(o, e, a);
                  let s;
                  n && ((s = [...n]), je(s, e, a)), r(o, s, i);
                },
              }),
        ],
      }),
    ],
  });
}
function ma(e) {
  let { strFeaturedFirstAppToken: t, fnSetFeaturedFirstAppToken: n } = e,
    r = (0, R.useMemo)(() => {
      let e = [];
      return (
        e.push({ label: A(`#Featured_App_None`), data: null }),
        e.push({
          label: A(`#Featured_App_Reason_Next`),
          data: `#Featured_App_Reason_Next`,
        }),
        e.push({
          label: A(`#Featured_App_Reason_Franchise`),
          data: `#Featured_App_Reason_Franchise`,
        }),
        e.push({
          label: A(`#Featured_App_Reason_Similar`),
          data: `#Featured_App_Reason_Similar`,
        }),
        e.push({
          label: A(`#Featured_App_Reason_Upcoming`),
          data: `#Featured_App_Reason_Upcoming`,
        }),
        e.push({
          label: A(`#Featured_App_Reason_YouMight`),
          data: `#Featured_App_Reason_YouMight`,
        }),
        e.push({
          label: A(`#Featured_App_Reason_LatestEdition`),
          data: `#Featured_App_Reason_LatestEdition`,
        }),
        e
      );
    }, []);
  return (0, z.jsx)(`div`, {
    className: ra,
    children: (0, z.jsx)(me, {
      label: A(`#Featured_App_Name`),
      tooltip: A(`#Featured_App_Tooltip`),
      rgOptions: r,
      selectedOption: t || null,
      onChange: (e) => {
        n(e.data);
      },
    }),
  });
}
function ha(e) {
  let { appid: t, elEditor: n, creatorClanID: r } = e,
    [i] = In(t, da),
    a = (0, R.useMemo)(() => ({ id: t, type: `game` }), [t]),
    o = (0, R.useMemo)(() => ga(r), [r]);
  return (0, z.jsxs)(`div`, {
    className: na,
    children: [
      i
        ? (0, z.jsx)(`div`, {
            className: ea,
            children: (0, z.jsx)(Nt, {
              capsule: a,
              imageType: `header`,
              bShowParentApp: !1,
              bHideStoreHover: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          })
        : (0, z.jsxs)(`div`, {
            className: ta,
            children: [
              (0, z.jsx)(`div`, {
                children: A(`#Create_Home_Missing_Capsule`),
              }),
              (0, z.jsxs)(`div`, { children: [`appid: (`, t, `)`] }),
            ],
          }),
      !!o &&
        (0, z.jsxs)(`div`, {
          className: `iLIDoOqGT1U-`,
          children: [
            (0, z.jsx)(`div`, {
              className: `DialogLabel`,
              children: A(`#Create_Home_App_FeaturedSource`),
            }),
            (0, z.jsx)(Et, {
              creatorID: o,
              bShowTagline: !1,
              bHideCreatorType: !0,
              bSmallFormat: !0,
              bHideFollowButton: !0,
            }),
          ],
        }),
      n,
    ],
  });
}
function ga(e) {
  return e
    ? {
        name: zn.GetClanInfoByClanAccountID(e)?.group_name || `(${e})`,
        clan_account_id: e,
        type: `developer`,
      }
    : null;
}
function _a(e) {
  let { rgCreatorHomes: t, oFeatured: n, fnSetFeatured: r } = e,
    i = (0, R.useMemo)(() => {
      let e = new Set();
      t.forEach((t) => e.add(new Sn(t.clan_steamid).GetAccountID()));
      let n = [];
      return (
        n.push({
          label: A(`#Create_Home_None_Selected`),
          data: $i.k_CreatorHomeNone,
          tooltip: A(`#Create_Home_None_Selected_ttip`),
        }),
        e.forEach((e) => {
          let t = zn.GetClanInfoByClanAccountID(e);
          n.push({ label: t?.group_name || `(${e})`, data: e });
        }),
        n.length > 2 &&
          n.push({
            label: A(`#Create_Home_All_Creators`) + ` (?)`,
            data: $i.k_CreatorHomeAll,
            tooltip: A(`#Create_Home_All_Creators_ttip`),
          }),
        n
      );
    }, [t]);
  return (0, z.jsx)(`div`, {
    className: ra,
    children: (0, z.jsx)(me, {
      rgOptions: i,
      selectedOption: n?.clan_account_id || 0,
      onChange: (e) => {
        e.data != n?.clan_account_id &&
          r({
            clan_account_id: e.data,
            featured_appids: void 0,
            featured_creator_clan_account_id: void 0,
            sort_order: `salesrank`,
          });
      },
    }),
  });
}
function va(e) {
  let { creatorHomeClanAccountID: t } = e,
    [n, r] = (0, R.useState)(() => ga(t));
  return (
    (0, R.useEffect)(() => {
      n?.clan_account_id != t && r(ga(t));
    }, [t, n?.clan_account_id]),
    (0, z.jsxs)(`div`, {
      className: void 0,
      children: [
        (0, z.jsx)(Et, {
          creatorID: n,
          bShowTagline: !0,
          bHideCreatorType: !0,
          bSmallFormat: !0,
          bHideFollowButton: !0,
        }),
        (0, z.jsx)(`br`, {}),
        (0, z.jsx)(fa, { ...e }),
      ],
    })
  );
}
function ya(e) {
  let { oFeatured: t, fnSetFeatured: n } = e;
  return (0, z.jsxs)(ue, {
    children: [
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`div`, {
        className: `DialogLabel`,
        children: A(`#Create_Home_SortBy`),
      }),
      (0, z.jsxs)(`div`, {
        style: { display: `flex`, flexDirection: `column` },
        className: bn,
        children: [
          (0, z.jsx)(`p`, { children: A(`#Create_Home_SortBy_Desc`) }),
          (0, z.jsxs)(`div`, {
            className: aa,
            children: [
              (0, z.jsx)(Re, {
                checked: t.sort_order == `salesrank`,
                controlled: !0,
                onChange: (e) => e && n({ ...t, sort_order: `salesrank` }),
                label: A(`#Create_Home_SortBy_Sales`),
                tooltip: A(`#Create_Home_SortBy_Sales_ttip`),
              }),
              (0, z.jsx)(Re, {
                checked: t.sort_order == `releasedate`,
                controlled: !0,
                onChange: (e) => e && n({ ...t, sort_order: `releasedate` }),
                label: A(`#Create_Home_SortBy_Release`),
                tooltip: A(`#Create_Home_SortBy_Release_ttip`),
              }),
              (0, z.jsx)(Re, {
                checked: t.sort_order == `tags`,
                controlled: !0,
                onChange: (e) => e && n({ ...t, sort_order: `tags` }),
                label: A(`#Create_Home_SortBy_Tag`),
                tooltip: A(`#Create_Home_SortBy_Tag_ttip`),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var H = te(an());
function ba(e) {
  let { data: t, isLoading: n } = vt({
    queryKey: [`useAppDLCListPartnerSite`, e],
    queryFn: async () => {
      let t = `${u.PARTNER_BASE_URL}apps/ajaxgetdlc`,
        n = { appid: e, sessionid: x() },
        r = await H.default.get(t, { params: n });
      if (r?.data?.success != 1)
        throw (
          `Fail to load DLC list for appid ` +
          e +
          ` with error: ` +
          r?.data?.message
        );
      return r.data.dlcids || [];
    },
    enabled: !!e,
  });
  return n ? null : t;
}
var xa = `AC7X8LBY40w-`,
  Sa = `_0bsNxg5LTNk-`;
function Ca(e) {
  let { rgDLCSettings: t, parentAppID: n, dlcAppID: r } = e,
    [i, a] = (0, R.useState)(() => t);
  return (0, z.jsxs)($n, {
    children: [
      (0, z.jsx)(`h2`, { children: A(`#DLC_Dependency_Title`) }),
      (0, z.jsx)(`hr`, {}),
      (0, z.jsx)(`p`, { children: A(`#DLC_Dependency_Desc`) }),
      (0, z.jsx)(ka, {
        parentAppID: n,
        dlcAppID: r,
        fnSelectedDLCAppID: (e) => {
          i.findIndex((t) => t.dlc_appid == e) == -1 &&
            a([...i, { dlc_appid: e, config: `dlc_required` }]);
        },
      }),
      (0, z.jsx)(Ea, { rgDLCInfo: i, fnSetDLCInfo: a }),
      (0, z.jsx)(wa, { rgDLCInfo: i }),
    ],
  });
}
function wa(e) {
  let { rgDLCInfo: t } = e,
    [n, r] = (0, R.useState)(() => t?.length || 0);
  (0, R.useEffect)(() => {
    t?.length > n && r(t.length);
  }, [n, t]);
  let i = (0, R.useMemo)(() => {
    let e = [];
    for (let r = t.length || 0; r < n; ++r)
      e.push(
        (0, z.jsx)(
          `input`,
          { type: `hidden`, name: `app[dlc_dependency][${r}]`, value: void 0 },
          `dependancy_del` + r,
        ),
      );
    return e;
  }, [n, t]);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      t?.map((e, t) =>
        (0, z.jsxs)(
          `div`,
          {
            children: [
              (0, z.jsx)(`input`, {
                type: `hidden`,
                name: `app[dlc_dependency][${t}][dlc_appid]`,
                value: e.dlc_appid,
              }),
              (0, z.jsx)(`input`, {
                type: `hidden`,
                name: `app[dlc_dependency][${t}][config]`,
                value: e.config,
              }),
            ],
          },
          `dependency_input` + e.dlc_appid + `_` + t,
        ),
      ),
      i,
    ],
  });
}
var Ta = { include_assets: !0, include_release: !0 };
function Ea(e) {
  let { rgDLCInfo: t, fnSetDLCInfo: r } = e;
  return (0, z.jsx)(ir, {
    items: t,
    render: (e, i) =>
      (0, z.jsx)(
        Oa,
        {
          dependency: e,
          index: i,
          fnSetDLCInfo: (e) => {
            let a = [...t];
            n(a[i].dlc_appid == e.dlc_appid, `AppID don't match, what gives`),
              console.log(),
              (a[i].config = e.config),
              r(a);
          },
        },
        `row` + e.dlc_appid,
      ),
    onDelete: (e) => {
      let n = [...t];
      n.splice(e, 1), r(n);
    },
    onReorder: (e) => r([...e]),
  });
}
var Da = [
  {
    label: A(`#DLC_Dependency_Require`),
    tooltip: A(`#DLC_Dependency_Require_ttip`),
    data: `dlc_required`,
  },
  {
    label: A(`#DLC_Dependency_Recommended`),
    tooltip: A(`#DLC_Dependency_Recommended_ttip`),
    data: `dlc_recommended`,
  },
];
function Oa(e) {
  let { dependency: t, fnSetDLCInfo: n } = e;
  return (0, z.jsx)(ha, {
    appid: t.dlc_appid,
    elEditor: (0, z.jsx)(`div`, {
      className: Sa,
      children: (0, z.jsx)(me, {
        label: A(`#DLC_Dependency_Relationship`),
        rgOptions: Da,
        selectedOption: t.config,
        onChange: (e) => {
          if (t.config != e.data) {
            let r = { ...t };
            (r.config = e.data), n(r);
          }
        },
      }),
    }),
  });
}
function ka(e) {
  let { parentAppID: t, fnSelectedDLCAppID: n, dlcAppID: r } = e,
    [i, a] = (0, R.useState)(null),
    o = ba(t),
    s = Pn(o, Ta),
    c = (0, R.useMemo)(
      () =>
        s != 1 && o
          ? o
              .filter((e) => e != r)
              .map((e) => {
                let t = Cn.Get().GetApp(e);
                return {
                  value: e,
                  label: `${t ? t.GetName() : ``} (Appid: ${e})`,
                };
              })
          : [],
      [s, o, r],
    );
  return !o || s == 1
    ? (0, z.jsx)(sn, { size: `small`, string: A(`#Loading`) })
    : (0, z.jsxs)(`div`, {
        className: xa,
        children: [
          (0, z.jsx)(rr._default, {
            className: `react-select-container`,
            classNamePrefix: `react-select`,
            isSearchable: !0,
            isMulti: !1,
            placeholder: A(`#Create_Home_Select_App`),
            options: c,
            value: c.find((e) => e.value === i),
            onChange: (e) => a(e.value),
          }),
          (0, z.jsx)(T, {
            disabled: !i,
            onClick: () => {
              n(i), a(void 0);
            },
            children: A(`#DLC_Dependency_Select`),
          }),
        ],
      });
}
var Aa = `_6R-zrM08IHs-`,
  ja = `FPLX-MeuvWI-`,
  Ma = `Z25dbXSGb28-`,
  Na = `R5809O-0rqM-`,
  Pa = `HmHoLhmfJjE-`;
function Fa(e) {
  let { rgDLC: t, parentappid: n } = e,
    [r, i] = R.useState(t ? [...t] : []),
    [a, o] = R.useState([]);
  R.useEffect(() => {
    i(e?.rgDLC ? [...e.rgDLC] : []);
  }, [e]);
  let s = (e) => {
    let t = [...r];
    (t[e].bDeleted = !0), i(t);
  };
  R.useEffect(() => {
    let e = [],
      n = 0;
    for (
      r.forEach((t) => {
        t.bDeleted ||
          (e.push(
            R.createElement(`input`, {
              type: `hidden`,
              name: `app[related_items][dlc][${n}][appid]`,
              value: t.appid,
            }),
          ),
          e.push(
            R.createElement(`input`, {
              type: `hidden`,
              name: `app[related_items][dlc][${n}][itemid]`,
              value: t.itemid,
            }),
          ),
          e.push(
            R.createElement(`input`, {
              type: `hidden`,
              name: `app[related_items][dlc][${n}][highlight]`,
              value: n == 0 && t.highlight ? t.highlight : ``,
            }),
          ),
          e.push(
            R.createElement(`input`, {
              type: `hidden`,
              name: `app[related_items][dlc][${n}][highlight_reason]`,
              value: n == 0 && t.highlight_reason ? t.highlight_reason : ``,
            }),
          ),
          n++);
      });
      n < t.length;
    ) {
      let t = R.createElement(`input`, {
        type: `hidden`,
        name: `app[related_items][dlc][${n}]`,
        value: ``,
      });
      e.push(t), n++;
    }
    o(e);
  }, [t.length, r]);
  let c = (e, t) => {
      if (isNaN(e) || isNaN(t)) return;
      let n = [...r];
      n.splice(t, 0, n.splice(e, 1)[0]), i(n);
    },
    l = (e, t) => {
      let n = [...r];
      (n[e].highlight = t.highlight),
        (n[e].highlight_reason = t.highlight_reason),
        i(n);
    },
    u = (0, z.jsx)(T, {
      className: Pa,
      onClick: (e) =>
        Ke(
          (0, z.jsx)(Ia, {
            rgDLCItems: r,
            parentAppID: n,
            onSelected: (e, t, n, a) => {
              let o = { itemid: `` + t, appid: `` + e, name: n },
                s = a ? [o, ...r] : [...r, o];
              i(s);
            },
          }),
          ge(e),
        ),
      children: A(`#StoreAdmin_Add_DLC`) + `...`,
    });
  return (0, z.jsxs)(z.Fragment, {
    children: [
      u,
      (0, z.jsx)(ir, {
        items: r,
        onDelete: (e) => s(e),
        onMove: (e, t) => c(e, t),
        render: (e, t) =>
          (0, z.jsx)(
            La,
            { item: e, index: t, fnUpdateHighlight: l },
            e?.itemid ?? e?.appid,
          ),
      }),
      ...a,
    ],
  });
}
function Ia(e) {
  let { closeModal: t, rgDLCItems: n, onSelected: r, parentAppID: i } = e,
    [a, o] = R.useState(null),
    s = (e, t) => {
      o({ appid: e, itemid: t });
    },
    [c] = Ln(a?.appid, 0, { include_basic_info: !0, include_assets: !0 }),
    l = R.useCallback(
      (e) => {
        r(a?.appid, a?.itemid, c?.GetName(), e);
      },
      [a, r, c],
    );
  return (0, z.jsxs)(rt, {
    title: A(`#StoreAdmin_Add_DLC`),
    closeModal: t,
    className: ja,
    children: [
      (0, z.jsx)(st, {
        children: (0, z.jsxs)(`div`, {
          className: Na,
          children: [
            (0, z.jsx)(`div`, { children: A(`#StoreAdmin_Add_DLC_Desc`) }),
            (0, z.jsx)(Dt, {
              fnSetItemID: s,
              itemType: 0,
              fnFilterID: (e) =>
                n.findIndex((t) => parseInt(t.appid) == e) == -1,
              bIncludeRetired: !1,
              bOnlyDLC: !0,
              rgParentAppIDs: [i],
              bRunQueryOnLoad: !0,
            }),
            !!a?.appid &&
              (0, z.jsxs)(`div`, {
                className: `V1-59qaPkWA-`,
                children: [
                  (0, z.jsx)(`div`, {
                    children: c?.GetName()
                      ? c.GetName() + ` (` + c.GetID() + `)`
                      : a.appid,
                  }),
                  (0, z.jsx)(`img`, {
                    src:
                      c?.GetAssets().GetSmallCapsuleURL() ||
                      c?.GetAssets().GetHeaderURL(),
                  }),
                ],
              }),
          ],
        }),
      }),
      (0, z.jsxs)(De, {
        className: Ma,
        children: [
          (0, z.jsx)(Ze, {
            disabled: !a,
            onClick: () => {
              l(!0), t && t();
            },
            children: A(`#StoreAdmin_Add_To_Top`),
          }),
          (0, z.jsx)(T, {
            disabled: !a,
            onClick: () => {
              l(!1), t && t();
            },
            children: A(`#StoreAdmin_Add_To_Bottom`),
          }),
          (0, z.jsx)(T, {
            onClick: () => {
              t && t();
            },
            children: A(`#Button_Cancel`),
          }),
        ],
      }),
    ],
  });
}
function La(t) {
  let { item: n, index: r, fnUpdateHighlight: i } = t,
    a = !n.bRetired && !n.bUnlisted,
    o = r == 0 && a,
    s = R.useMemo(
      () => [
        { label: A(`#StoreAdmin_Highlight_NoneSelected`), data: `` },
        { label: A(`#StoreAdmin_Highlight_New`), data: 1 },
        { label: A(`#StoreAdmin_Highlight_ComingSoon`), data: 2 },
        { label: A(`#StoreAdmin_Highlight_PlayerFavorite`), data: 3 },
        { label: A(`#StoreAdmin_Highlight_Recommended`), data: 4 },
        { label: A(`#StoreAdmin_Highlight_NewPlayer`), data: 5 },
      ],
      [],
    ),
    c = () => {
      (n.highlight = !n.highlight), i(r, n);
    },
    l = (e) => {
      (n.highlight_reason = e.data), i(r, n);
    };
  if (!n) return null;
  let u = e(Aa, n.bDeleted && `wWwt59hM-dY-`, !a && `gsX5IuRSdVQ-`);
  return (0, z.jsxs)(`div`, {
    className: u,
    children: [
      (0, z.jsx)(`a`, {
        href: h.PARTNER_BASE_URL + `apps/landing/` + n.appid,
        children: n.name || n.appid,
      }),
      n.bRetired &&
        (0, z.jsxs)(`span`, {
          className: `KCA34Yd2Ii8-`,
          children: [`(`, A(`#StoreAdmin_Retired`), `)`],
        }),
      !n.bRetired &&
        n.bUnlisted &&
        (0, z.jsxs)(`span`, {
          className: `KCA34Yd2Ii8-`,
          children: [`(`, A(`#StoreAdmin_Unlisted`), `)`],
        }),
      o &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(E, {
              className: `XiJaNY-2OMA-`,
              checked: n.highlight,
              onClick: c,
              label: A(`#StoreAdmin_Highlight_Checkbox`),
            }),
            n.highlight &&
              (0, z.jsxs)(z.Fragment, {
                children: [
                  (0, z.jsx)(`div`, {
                    className: `vp-rU-Vbl0M-`,
                    children: A(`#StoreAdmin_Highlight_Reason`),
                  }),
                  (0, z.jsx)(`div`, {
                    className: `_3olLFH72leE-`,
                    children: (0, z.jsx)(ze, {
                      rgOptions: s,
                      onChange: l,
                      selectedOption: n.highlight_reason
                        ? parseInt(`` + n.highlight_reason)
                        : ``,
                    }),
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
var Ra = `-wR-IWHipyE-`;
function za(e) {
  let { rgPinnedBundles: t, rgEnabledBundles: n } = e,
    [r, i] = (0, R.useState)(t),
    a = n.filter((e) => r.findIndex((t) => t.bundleid === e.bundleid) === -1);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(Va, {
        pinnedBundles: r,
        unpinnedBundles: a,
        setPinnedBundles: i,
      }),
      (0, z.jsx)(Ba, { pinnedBundles: r, nInitialPinnedBundles: t.length }),
    ],
  });
}
function Ba(e) {
  let { pinnedBundles: t, nInitialPinnedBundles: n } = e,
    r = 0,
    i = [];
  for (; r < Math.max(n, t.length); ) {
    if (r < t.length) {
      let e = t[r];
      i.push({ index: r, value: e.bundleid });
    } else i.push({ index: r, value: `` });
    r++;
  }
  return (0, z.jsx)(`div`, {
    className: void 0,
    children: i.map((e) =>
      (0, z.jsx)(
        `input`,
        {
          type: `hidden`,
          name: `app[pinned_bundles][${e.index}]`,
          value: e.value,
        },
        e.index,
      ),
    ),
  });
}
function Va(e) {
  let { pinnedBundles: t, unpinnedBundles: n, setPinnedBundles: r } = e;
  return (0, z.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, z.jsx)(Ha, {
        unpinnedBundles: n,
        onChange: (e) => {
          let i = n.find((t) => t.bundleid === e.value);
          if (i === void 0) return;
          let a = t.concat([i]);
          r(a);
        },
      }),
      (0, z.jsx)(Ua, {
        pinnedBundles: t,
        onDelete: (e) => {
          let n = [...t];
          n.splice(e, 1), r(n);
        },
        onMove: (e, n) => {
          let i = new Array(...t),
            [a] = i.splice(e, 1);
          i.splice(n, 0, a), r(i);
        },
      }),
    ],
  });
}
function Ha(e) {
  let { unpinnedBundles: t, onChange: n } = e,
    r = t.map((e) => ({ value: e.bundleid, label: e.name }));
  return (0, z.jsx)(rr._default, {
    className: `react-select-container`,
    classNamePrefix: `react-select`,
    isSearchable: !0,
    isMulti: !1,
    placeholder: A(`#PinnedBundles_Placeholder`),
    options: r,
    onChange: n,
    controlShouldRenderValue: !1,
    noOptionsMessage: () => A(`#PinnedBundles_NoOptions`),
  });
}
function Ua(e) {
  let { pinnedBundles: t, onDelete: n, onMove: r } = e;
  return t.length === 0
    ? (0, z.jsx)(`div`, {
        className: Ra,
        children: A(`#PinnedBundles_NoPinnedBundles`),
      })
    : (0, z.jsx)(ir, {
        items: t,
        onDelete: n,
        onMove: r,
        render: (e, t) =>
          (0, z.jsx)(`div`, {
            className: void 0,
            children: (0, z.jsxs)(`a`, {
              href: `${h.PARTNER_BASE_URL}bundles/view/${e.bundleid}`,
              children: [e.name, ` (`, e.bundleid, `)`],
            }),
          }),
      });
}
function Wa() {
  let e = new Map();
  return (
    p(`current_prices`, `application_config`).forEach((t) => {
      e.set(t.packageid, t);
    }),
    e
  );
}
function Ga() {
  let [e, t] = (0, R.useState)(() => Wa());
  return e;
}
var Ka = te(Pt()),
  qa = 20,
  Ja = 9e5,
  Ya = `PackagePriceChanges`,
  Xa = new Map();
async function Za(e) {
  let t = { packageids: e.join(`,`) },
    n = await H.default.get(
      `${h.PARTNER_BASE_URL}pricing/admin/packagepricechanges`,
      { params: t, withCredentials: !0 },
    );
  if (!n || n.status != 200 || n.data?.success != 1)
    throw `Load package price changes failed ${I(n).strErrorMsg}`;
  let r = new Map();
  return (
    n.data.packages?.forEach((e) => r.set(e.packageid, e)),
    e.map((e) => r.get(e) || { packageid: e, total_changes: 0, changes: [] })
  );
}
var Qa = new Ka.default((e) => Za(e), { cache: !1, maxBatchSize: qa });
function $a(e, t) {
  let n = new Map();
  return (
    t.forEach((t, r) => {
      t.data
        ? n.set(t.data.packageid, t.data)
        : t.isError && n.set(e[r], { packageid: e[r], bLoadFailed: !0 });
    }),
    n.size > 0 ? n : Xa
  );
}
function eo(e) {
  let t = (0, R.useMemo)(() => Array.from(new Set(e)).filter(Boolean), [e]),
    n = (0, R.useCallback)((e) => $a(t, e), [t]);
  return bt({
    queries: t.map((e) => ({
      queryKey: [Ya, e],
      queryFn: () => Qa.load(e),
      staleTime: Ja,
      retry: 1,
    })),
    combine: n,
  });
}
var to = class e {
  m_mapPackageToPartners = new Map();
  GetMap() {
    return this.m_mapPackageToPartners;
  }
  static s_Singleton;
  static Get() {
    return (
      e.s_Singleton || ((e.s_Singleton = new e()), e.s_Singleton.Init()),
      e.s_Singleton
    );
  }
  constructor() {}
  Init() {
    p(`package_to_paid_partners`, `application_config`).forEach((e) => {
      this.m_mapPackageToPartners.has(e.packageid) ||
        this.m_mapPackageToPartners.set(e.packageid, []),
        this.m_mapPackageToPartners.get(e.packageid).push(e.partnerid);
    });
  }
};
function no() {
  let [e, t] = (0, R.useState)(() => to.Get().GetMap());
  return e;
}
var ro = class e {
  m_rgMapProposal = new Map();
  m_nTotalItems = 0;
  m_proposalAddRemoveCallback = new Qe();
  GetProposals() {
    return Array.from(this.m_rgMapProposal.values());
  }
  GetProposalListChange() {
    return this.m_proposalAddRemoveCallback;
  }
  async LoadMoreProposal() {
    return this.m_proposalAddRemoveCallback.Dispatch(this.GetProposals()), !1;
  }
  async RejectProposal(e, t, n) {
    let r = null;
    try {
      let i = new FormData();
      i.append(`sessionid`, x()),
        i.append(`packageid`, `` + e),
        i.append(`json`, `1`),
        i.append(`reason_code`, t.join(`,`) || ``),
        i.append(`email_message`, n);
      let a = `${h.PARTNER_BASE_URL}packages/rejectpricing`,
        o = await H.default.post(a, i, { withCredentials: !0 });
      if (o.status == 200 && o.data?.success == 1)
        return (
          console.log(`Proposal for package ${e} successfully rejected`),
          this.m_rgMapProposal.delete(e),
          this.m_proposalAddRemoveCallback.Dispatch(this.GetProposals()),
          !0
        );
      r = I(o);
    } catch (e) {
      r = I(e);
    }
    return (
      console.error(
        `CPriceProposalReviewRequiredStore::RejectProposal failed with ` +
          r.strErrorMsg,
        r,
      ),
      !1
    );
  }
  async AcceptProposal(e, t, n) {
    let r = null;
    try {
      let i = new FormData();
      i.append(`sessionid`, x()),
        i.append(`packageid`, `` + e),
        i.append(`json`, `1`),
        i.append(`proposalkey`, `` + n),
        i.append(`partner_will_publish`, t ? `1` : `0`);
      let a = `${h.PARTNER_BASE_URL}packages/approvepricing`,
        o = await H.default.post(a, i, { withCredentials: !0 });
      if (o.status == 200 && o.data?.success == 1)
        return (
          console.log(
            `Proposal for package ${e} successfully accepted`,
            o.data.output,
          ),
          this.m_rgMapProposal.delete(e),
          this.m_proposalAddRemoveCallback.Dispatch(this.GetProposals()),
          null
        );
      if (((r = I(o)), o?.data?.output))
        return (
          console.log(
            `CPriceProposalReviewRequiredStore::AcceptProposal message information:`,
            o.data.output,
            r.strErrorMsg,
          ),
          o.data.output
        );
    } catch (e) {
      r = I(e);
    }
    return (
      console.error(
        `CPriceProposalReviewRequiredStore::AcceptProposal failed with ` +
          r.strErrorMsg,
        r,
      ),
      `generic failure`
    );
  }
  static s_Singleton;
  static Get() {
    return (e.s_Singleton ||= new e()), e.s_Singleton;
  }
  constructor() {
    let e = p(`proposed_prices`, `application_config`);
    this.ValidateInputDefault(e) &&
      e.forEach((e) => this.m_rgMapProposal.set(e.packageid, e)),
      (this.m_nTotalItems = p(`total_proposed_prices`, `application_config`));
  }
  ValidateInputDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && t[0].packageid > 0;
  }
};
ee([dt], ro.prototype, `LoadMoreProposal`, null),
  ee([dt], ro.prototype, `RejectProposal`, null),
  ee([dt], ro.prototype, `AcceptProposal`, null);
function io() {
  let [e, t] = (0, R.useState)(() => ro.Get().GetProposals());
  return Ge(ro.Get().GetProposalListChange(), t), e;
}
function ao() {
  return {
    fnLoadMoreProposal: ro.Get().LoadMoreProposal,
    fnRejectProposal: ro.Get().RejectProposal,
    fnAcceptProposal: ro.Get().AcceptProposal,
  };
}
var oo = { include_release: !0 },
  so = (function (e) {
    return (
      (e[(e.None = 0)] = `None`),
      (e[(e.Approved = 1)] = `Approved`),
      (e[(e.Rejected_CountryPricing = 2)] = `Rejected_CountryPricing`),
      (e[(e.Rejected_ExceedsMaxPrice = 3)] = `Rejected_ExceedsMaxPrice`),
      (e[(e.Rejected_PriceIncreaseTooHigh = 4)] =
        `Rejected_PriceIncreaseTooHigh`),
      (e[(e.Rejected_NoGuidelineMatch = 5)] = `Rejected_NoGuidelineMatch`),
      (e[(e.Rejected_MissingCurrencies = 6)] = `Rejected_MissingCurrencies`),
      (e[(e.Rejected_MissingRegions = 7)] = `Rejected_MissingRegions`),
      (e[(e.Failed = 8)] = `Failed`),
      (e[(e.Rejected_RecentPriceUpDown = 9)] = `Rejected_RecentPriceUpDown`),
      e
    );
  })({}),
  co = {
    0: `None`,
    1: `Auto-Approvable`,
    2: `Contains Country-Override Pricing`,
    3: `Exceeds Max Auto-Approvable Price`,
    4: `Prices Above Guidance Thresholds`,
    5: `No Guideline Match`,
    6: `Missing Currencies`,
    7: `Missing Regions`,
    8: `Auto-Approval Failed`,
    9: `Price Raised and Lowered Recently`,
  },
  lo = un();
dn();
var uo = hn();
function fo(e) {
  let t = [];
  return (
    lo.forEach((n) => {
      e.proposed_prices.base_amounts.some((e) => e.amount.currency_code == n) ||
        t.push(fn(n));
    }),
    uo.forEach((n) => {
      let r = Qt(n);
      e.proposed_prices.region_amounts.some((e) => e.name == r) ||
        t.push(en(n));
    }),
    t
  );
}
function po(e) {
  let t = [];
  return (
    e.proposed_prices.base_amounts.forEach((e) => {
      lo.includes(e.amount.currency_code) ||
        (console.log(`Unexpected currency code: ` + e.amount.currency_code, e),
        t.push(
          `Currency Code: "${e.amount.currency_code}" with price in cents ${e.amount.amount}`,
        ));
    }),
    e.proposed_prices.region_amounts.forEach((e) => {
      uo.includes(nn(e.name.toUpperCase())) ||
        (console.log(
          `Unexpected region code: ${e.name} and currency code ${e.amount.currency_code} with price in cents ${e.amount.amount}`,
        ),
        t.push(e.name));
    }),
    t
  );
}
function mo(e, t, n) {
  if (t) {
    let n = en(t);
    return e?.current_costs?.region_amounts?.find((e) => e.region == n)?.amount
      .amount;
  }
  return e?.current_costs?.base_amounts?.find((e) => e.currency_code == n)
    ?.amount;
}
function ho(e, t, n, r, i, a) {
  r.price * 2.25 < t.amount.amount
    ? i.push({
        strCurrency: n ? en(n) : mn(t.amount.currency_code),
        nAmountCents: t.amount.amount,
        nPercent: Math.floor((t.amount.amount / r.price) * 100) - 100,
        nProposedPrice: t.amount.amount,
        nGuidancePrice: r.price,
        nOriginalPrice: mo(e, n, t.amount.currency_code),
      })
    : r.price * 0.5 > t.amount.amount &&
      a.push({
        strCurrency: n ? en(n) : mn(t.amount.currency_code),
        nAmountCents: t.amount.amount,
        nPercent: 100 - Math.floor((t.amount.amount / r.price) * 100),
        nProposedPrice: t.amount.amount,
        nGuidancePrice: r.price,
        nOriginalPrice: mo(e, n, t.amount.currency_code),
      });
}
function go(e, t, n, r) {
  let i = [],
    a = [],
    o = t.get(r.packageid);
  return (
    r.proposed_prices.base_amounts.map((t) => {
      let r =
        n.GetRecommendPrice(e, t.amount.currency_code) ||
        n.GetScaledRecommendedPrice(e, t.amount.currency_code);
      ho(o, t, null, r, i, a);
    }),
    r.proposed_prices.region_amounts.map((t) => {
      let r = nn(t.name),
        s =
          n.GetRecommendPrice(e, 1, r) || n.GetScaledRecommendedPrice(e, 1, r);
      ho(o, t, r, s, i, a);
    }),
    {
      rgAboveThreshold: i.sort((e, t) => t.nPercent - e.nPercent),
      rgBelowThreshold: a.sort((e, t) => t.nPercent - e.nPercent),
    }
  );
}
function _o(e) {
  let t = Math.floor(Date.now() / 1e3);
  return e.BIsReleased() && e.GetReleaseDateRTime() + 2592e3 > t;
}
var vo = `zOG1XzzITdA-`,
  yo = `iMD58Fd55bk-`,
  bo = `EdsCg4G3MUg-`,
  xo = `ri55DbWsjgk-`,
  So = `YNa-ehVzPgs-`,
  Co = `ru3C9owQ0dQ-`,
  wo = `rSx6-CJXFJQ-`,
  To = `_8xXDF-FrB4Q-`,
  Eo = `Z-TW4aCKgBw-`,
  Do = `Te-mu78zdY8-`,
  Oo = `C50y3--9Ovo-`,
  ko = `Jpo8TgNpbDU-`,
  Ao = `Z0twxkNs3fo-`,
  jo = `_4DFOqvCxZ0M-`,
  Mo = `_2uvPzzOBjGQ-`,
  No = `V2gNAwo-rAo-`,
  Po = `uhBx-lh9xBE-`,
  Fo = `MUHP1uD5cv8-`,
  Io = `bExJGYkAOO4-`,
  Lo = `J835g2r5JtI-`,
  Ro = `_2Q5cW4fR6qY-`,
  zo = `pjPEgV6-L4c-`,
  Bo = `aHq3Qp56Iqw-`,
  Vo = `egFHzKpvYSg-`,
  Ho = `FedvZtvNBCs-`,
  Uo = `Bclh165t7PI-`,
  Wo = `e5JK4o9xxOA-`,
  Go = `HKFPUvQHDoY-`,
  Ko = `_2SKkRcv78K0-`,
  qo = `RLIhmx2oHpo-`,
  Jo = `BfJlny2q1AE-`,
  Yo = `-BITBWzdfck-`,
  Xo = `FE-HleGvmDk-`,
  Zo = `_-1qvnnTDKq4-`,
  Qo = `ho4dckBOcXU-`,
  $o = `rcUCWq2ePhU-`,
  es = `gJJEDWy-t4M-`,
  ts = `j2ku0FBs8AA-`,
  ns = `lYCi0eLFt28-`,
  rs = `vu8QBoNVfsc-`,
  is = `c5-r1yv9rgc-`,
  as = `Tc3W5o3bAjI-`,
  os = `ieaSqZ63d3w-`,
  ss = `zNCKwmXcuPE-`,
  cs = `eA7cHiBfOpQ-`,
  ls = 2592e3;
function us(e) {
  let { packageID: t, priceChanges: n } = e,
    r = n?.changes?.[0];
  return (0, z.jsxs)(`div`, {
    className: Go,
    children: [
      (0, z.jsx)(ds, { priceChanges: n }),
      (0, z.jsx)(`a`, {
        href: `${h.PARTNER_BASE_URL}packages/pricehistory/${t}`,
        target: `_blank`,
        rel: `noreferrer`,
        children: `Show Package Price History`,
      }),
      !!r && (0, z.jsx)(fs, { priceChanges: n }),
    ],
  });
}
function ds(t) {
  let { priceChanges: n } = t;
  if (!n)
    return (0, z.jsx)(`div`, {
      className: Ko,
      children: `Looking up published price changes...`,
    });
  if (n.bLoadFailed)
    return (0, z.jsx)(`div`, {
      className: qo,
      children: `Could not load published price changes`,
    });
  let r = n.changes?.[0];
  if (!r)
    return (0, z.jsx)(`div`, {
      className: Ko,
      children: `No previously published price change`,
    });
  let i = Date.now() / 1e3 - r.time < ls;
  return (0, z.jsx)(Ie, {
    toolTipContent: (0, z.jsx)(ps, { priceChanges: n }),
    direction: `right`,
    nDelayShowMS: 150,
    children: (0, z.jsxs)(`div`, {
      className: e(Jo, i && `Q6-Pa-7lTas-`),
      children: [`Price last published `, w(r.time), ` (`, se(r.time), `)`],
    }),
  });
}
function fs(e) {
  let { priceChanges: t } = e,
    n = t.total_changes || 0;
  return (0, z.jsxs)(`div`, {
    className: Yo,
    children: [n, ` published price `, n == 1 ? `change` : `changes`, ` total`],
  });
}
function ps(e) {
  let { priceChanges: t } = e,
    n = t.changes || [];
  return (0, z.jsxs)(`div`, {
    className: Xo,
    children: [
      (0, z.jsx)(`div`, {
        className: Zo,
        children: `Recent published price changes`,
      }),
      (0, z.jsxs)(`table`, {
        className: $o,
        children: [
          (0, z.jsx)(`thead`, {
            children: (0, z.jsxs)(`tr`, {
              className: es,
              children: [
                (0, z.jsx)(`th`, { children: `Published` }),
                (0, z.jsx)(`th`, { children: `USD` }),
                (0, z.jsx)(`th`, { children: `Change` }),
                (0, z.jsx)(`th`, { children: `Currencies` }),
                (0, z.jsx)(`th`, { children: `By` }),
              ],
            }),
          }),
          (0, z.jsx)(`tbody`, {
            children: n.map((e, t) =>
              (0, z.jsx)(ms, { change: e }, `${e.time}_${t}`),
            ),
          }),
        ],
      }),
      t.total_changes > n.length &&
        (0, z.jsxs)(`div`, {
          className: `ho4dckBOcXU-`,
          children: [
            `Showing the last `,
            n.length,
            ` of `,
            t.total_changes,
            ` published changes`,
          ],
        }),
      (0, z.jsx)(`div`, {
        className: Qo,
        children: `Open the package price history for the full per-currency detail.`,
      }),
    ],
  });
}
function ms(e) {
  let { change: t } = e;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsxs)(`tr`, {
        className: ts,
        children: [
          (0, z.jsxs)(`td`, {
            children: [
              w(t.time),
              (0, z.jsx)(`div`, { className: ns, children: se(t.time) }),
            ],
          }),
          (0, z.jsx)(`td`, {
            className: rs,
            children: t.usd_amount ? xt(t.usd_amount, 1) : `--`,
          }),
          (0, z.jsx)(`td`, { children: (0, z.jsx)(hs, { change: t }) }),
          (0, z.jsxs)(`td`, {
            className: is,
            children: [
              t.currency_count || 0,
              !!t.country_count &&
                (0, z.jsxs)(`span`, {
                  children: [` +`, t.country_count, ` country`],
                }),
            ],
          }),
          (0, z.jsx)(`td`, {
            children: (0, z.jsx)(cr, { accountID: t.account }),
          }),
        ],
      }),
      !!t.notes &&
        (0, z.jsx)(`tr`, {
          className: `j2ku0FBs8AA-`,
          children: (0, z.jsx)(`td`, {
            className: `_2cVW5YisORc-`,
            colSpan: 5,
            children: t.notes,
          }),
        }),
    ],
  });
}
function hs(e) {
  let { change: t } = e;
  if (!t.usd_amount)
    return (0, z.jsx)(`span`, { className: ss, children: `no USD price` });
  if (t.first_published)
    return (0, z.jsx)(`span`, {
      className: cs,
      children: `first published price`,
    });
  if (!t.usd_previous)
    return (0, z.jsx)(`span`, {
      className: ss,
      children: `previous USD price unknown`,
    });
  if (t.usd_amount == t.usd_previous)
    return (0, z.jsx)(`span`, { className: ss, children: `USD unchanged` });
  let n = t.usd_amount > t.usd_previous,
    r = Math.round(((t.usd_amount - t.usd_previous) / t.usd_previous) * 100);
  return (0, z.jsxs)(`span`, {
    className: n ? as : os,
    children: [
      n ? `▲` : `▼`,
      ` `,
      Math.abs(r),
      `% from `,
      xt(t.usd_previous, 1),
    ],
  });
}
var gs = `zDNB2F0lnUw-`,
  _s = `UuIVSy9RwhU-`;
function vs(e) {
  let { proposal: t, mapCurrentPrices: n, oGuideline: r } = e,
    { fnAcceptProposal: i } = ao(),
    [a, o] = (0, R.useState)(!1),
    [s, c] = (0, R.useState)(null),
    [l] = Fn(t.packageid, oo);
  return a
    ? (0, z.jsx)(`div`, {
        children: (0, z.jsx)(sn, {
          string: `Accepting`,
          size: `small`,
          position: `center`,
        }),
      })
    : (0, z.jsxs)(`div`, {
        className: gs,
        children: [
          (0, z.jsxs)(T, {
            onClick: async () => {
              o(!0),
                i(t.packageid, t.partner_will_publish, t.proposal_key)
                  .then(c)
                  .finally(() => o(!1));
            },
            children: [`Publish Proposal `, s ? ` (FORCE)` : ``],
          }),
          !!s &&
            (0, z.jsxs)(`div`, {
              children: [
                `Publish failed with: `,
                s,
                `, publish again to bypass check`,
              ],
            }),
          (0, z.jsx)(T, {
            onClick: (e) => {
              let i = [];
              fo(t).length > 0 && i.push(`currency_missing`);
              let a = t.proposed_prices.base_amounts.find(
                  (e) => e.amount.currency_code == 1,
                )?.amount.amount,
                o = go(a, n, r, t);
              (o.rgAboveThreshold.length > 0 ||
                o.rgBelowThreshold.length > 0) &&
                i.push(`out_of_guideline`),
                l && _o(l) && i.push(`within_30_days`),
                Ke((0, z.jsx)(bs, { proposal: t, errors: i }), ge(e));
            },
            children: `Reject...`,
          }),
        ],
      });
}
var ys = new Map([
  [`within_30_days`, `Within 30 Days of Release`],
  [`currency_missing`, `Missing one or more currency`],
  [`out_of_guideline`, `One or more currency out of expected range`],
]);
function bs(e) {
  let { proposal: t, closeModal: n, errors: r } = e,
    [i, a] = (0, R.useState)(() => r),
    [o, s] = (0, R.useState)(``),
    { fnRejectProposal: c } = ao(),
    l = `Reject pricing proposal for package ${t.packageid}`,
    u = Mn();
  return u.bLoading
    ? (0, z.jsx)(Nn, { state: u, strDialogTitle: l, closeModal: n })
    : (0, z.jsxs)(k, {
        strTitle: l,
        strDescription: `Select the appropriate reasons for rejecting this price proposal. Each will surface to the user in the reject email.`,
        bDisableBackgroundDismiss: !0,
        onCancel: n,
        onOK: () => {
          u.fnSetLoading(!0),
            c(t.packageid, i, o)
              .then((e) => {
                e
                  ? u.fnSetSuccess(!0)
                  : (u.fnSetError(!0),
                    u.fnSetStrError(
                      `Failed to reject; check console for details`,
                    ));
              })
              .catch((e) => {
                u.fnSetError(!0),
                  u.fnSetStrError(
                    `Failed to reject; check console for details`,
                  );
              });
        },
        children: [
          (0, z.jsx)(C, { children: `Rejection type:` }),
          Array.from(ys.keys()).map((e) =>
            (0, z.jsx)(
              E,
              {
                checked: i.includes(e),
                onChange: (t) => {
                  let n = i.filter((t) => t != e);
                  t && n.push(e), a(n);
                },
                label: ys.get(e),
              },
              `check` + e,
            ),
          ),
          (0, z.jsx)(`br`, {}),
          (0, z.jsx)(`hr`, {}),
          (0, z.jsx)(C, {
            children: `Optionally include custom message text in rejection email`,
          }),
          (0, z.jsx)(`textarea`, {
            onChange: (e) => s(e.target.value),
            value: o,
            className: _s,
          }),
        ],
      });
}
var xs = `q-hOeY9tNP0-`,
  Ss = `PlELCJWOxlY-`,
  Cs = `eVlaEM3Il5M-`,
  ws = `uapJQPy-OlM-`,
  Ts = `vxSAzgYrmsQ-`,
  Es = `_6A0TgN0d89Y-`,
  Ds = `xmqIJV-IszY-`,
  Os = `qMvgfUy26iw-`,
  ks = `SNe8yGihpL4-`,
  As = `SoRRfqI9a0E-`,
  js = `xMqacDD-w8Q-`,
  Ms = `vXxK9V2HCsE-`,
  U = te(a(), 1),
  Ns = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.quicktext_id || y(e.M()),
        U.Message.initialize(this, t, 0, -1, [6, 10, 11], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext_id: { n: 1, br: o.readUint32, bw: i.writeUint32 },
            requires_update: { n: 2, br: o.readBool, bw: i.writeBool },
            title: { n: 3, br: o.readString, bw: i.writeString },
            hidden: { n: 4, br: o.readBool, bw: i.writeBool },
            approved: { n: 5, br: o.readBool, bw: i.writeBool },
            help_request_types: {
              n: 6,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            content: { n: 7, c: Ps },
            button_text: { n: 8, br: o.readString, bw: i.writeString },
            replacement: { n: 9, br: o.readBool, bw: i.writeBool },
            payment_methods: {
              n: 10,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            appids: {
              n: 11,
              r: !0,
              q: !0,
              br: o.readUint32,
              pbr: o.readPackedUint32,
              bw: i.writeRepeatedUint32,
            },
            escalation_level: { n: 12, br: o.readEnum, bw: i.writeEnum },
            partner_only: { n: 13, br: o.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSupportData_QuickText`;
    }
  },
  Ps = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.content || y(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content: { n: 1, br: o.readString, bw: i.writeString },
            major_revision: { n: 2, br: o.readUint32, bw: i.writeUint32 },
            minor_revision: { n: 3, br: o.readUint32, bw: i.writeUint32 },
            author: { n: 4, br: o.readUint32, bw: i.writeUint32 },
            last_update: { n: 5, br: o.readUint32, bw: i.writeUint32 },
            language: { n: 6, br: o.readInt32, bw: i.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSupportData_QuickTextContent`;
    }
  },
  Fs = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.quicktext_id || y(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext_id: { n: 1, br: o.readUint32, bw: i.writeUint32 },
            language: { n: 2, br: o.readString, bw: i.writeString },
            from_sql: { n: 3, br: o.readBool, bw: i.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSupportAgents_GetQuickText_Request`;
    }
  },
  Is = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.quicktext || y(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            quicktext: { n: 1, c: Ns },
            english_reference: { n: 2, c: Ps },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSupportAgents_GetQuickText_Response`;
    }
  },
  Ls = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || y(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: o.readUint32, bw: i.writeUint32 },
            log_type: { n: 2, br: o.readString, bw: i.writeString },
            version_string: { n: 3, br: o.readString, bw: i.writeString },
            log_contents: { n: 4, br: o.readString, bw: i.writeString },
            request_id: {
              n: 5,
              br: o.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CHelpRequestLogs_UploadUserApplicationLog_Request`;
    }
  },
  Rs = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || y(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: o.readUint64String, bw: i.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CHelpRequestLogs_UploadUserApplicationLog_Response`;
    }
  },
  zs = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || y(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: o.readUint32, bw: i.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CHelpRequestLogs_GetApplicationLogDemand_Request`;
    }
  },
  Bs = class e extends U.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.request_id || y(e.M()),
        U.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            request_id: {
              n: 1,
              br: o.readUint64String,
              bw: i.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= c(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return r(e.M(), t, n);
    }
    static fromObject(t) {
      return v(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new U.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(n, r) {
      return t(e.MBF(), n, r);
    }
    serializeBinary() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      l(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new U.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CHelpRequestLogs_GetApplicationLogDemand_Response`;
    }
  },
  Vs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`SupportAgents.GetQuickText#1`, b(Fs, t, n), Is, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetQuickText = t;
})((Vs ||= {}));
var Hs;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `HelpRequestLogs.UploadUserApplicationLog#1`,
      b(Ls, t, n),
      Rs,
      { ePrivilege: 1 },
    );
  }
  e.UploadUserApplicationLog = t;
  function n(e, t, n) {
    return e.SendMsg(
      `HelpRequestLogs.GetApplicationLogDemand#1`,
      b(zs, t, n),
      Bs,
      { ePrivilege: 1 },
    );
  }
  e.GetApplicationLogDemand = n;
})((Hs ||= {}));
function Us(e, t, n) {
  return vt({
    queryKey: [`PartnerTickets`, e, t, n],
    queryFn: async () => {
      let r = { nPublisherId: e, eHelpIssue: t, eHelpRequestType: n };
      return (
        await H.default.get(
          `${h.PARTNER_BASE_URL}admin/ajaxfetchsupportticketforpartner`,
          { params: r, withCredentials: !0 },
        )
      ).data.tickets;
    },
  });
}
function Ws(e, t, n, r, i) {
  let a = _t();
  return St({
    mutationFn: async (a) => {
      i.fnSetLoading(!0);
      let o = new FormData();
      o.append(`help_issue`, `` + n),
        o.append(`help_request_type`, `` + r),
        o.append(`appid`, `` + a.appid),
        o.append(`initial_text`, a.strRequestTitle),
        o.append(`issue_text`, a.strRequestBody),
        o.append(`sessionid`, x()),
        o.append(`steamid`, e),
        o.append(`publisherid_selected`, `` + t);
      let s = await H.default.post(
        `${h.PARTNER_BASE_URL}admin/ajaxcreatesupportticketforrequest/`,
        o,
      );
      if (s?.data?.success != 1)
        throw (
          (s?.data?.message && i.fnSetStrError(s?.data?.message),
          s?.data?.message || `create ticket failed generic`)
        );
    },
    onSuccess() {
      i.fnSetSuccess(!0);
    },
    onError() {
      i.fnSetError(!0);
    },
    onSettled() {
      a.invalidateQueries({ queryKey: [`PartnerTickets`, t, n, r] });
    },
  });
}
var Gs = `c-Yi01qMXbU-`;
function Ks(e) {
  let { partnerID: t, setTicketCount: n } = e,
    { data: r } = Us(t, 920, 55),
    [i, a] = (0, R.useState)(2);
  return (
    (0, R.useEffect)(() => {
      r?.length > 0 && n(r?.length);
    }, [r, n]),
    !r || r.length == 0
      ? null
      : (0, z.jsxs)(`div`, {
          children: [
            (0, z.jsx)(`br`, {}),
            (0, z.jsxs)(`h3`, { children: [`Tickets `, r.length, `:`] }),
            r
              .slice(0, i)
              .map((e) => (0, z.jsx)(Js, { helpReq: e }, e.help_requestid)),
            i < r.length &&
              (0, z.jsxs)(`a`, {
                href: `#`,
                onClick: () => a(r.length),
                children: [`Show all `, r.length, ` Tickets`],
              }),
          ],
        })
  );
}
function qs(e) {
  return e.startsWith(`HT`) && e.length === 14
    ? `${e.slice(0, 2)}-${e.slice(2, 6)}-${e.slice(6, 10)}-${e.slice(10)}`
    : e;
}
function Js(t) {
  let { helpReq: n } = t,
    r = or();
  return r
    ? (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsxs)(`div`, {
            className: e({
              [Gs]: r.findIndex((e) => e.id === n.accountid) >= 0,
            }),
            children: [
              r.findIndex((e) => e.id == n.assigned_agent_accountid) >= 0
                ? (0, z.jsxs)(z.Fragment, {
                    children: [
                      `Owned By: `,
                      (0, z.jsx)(cr, { accountID: n.assigned_agent_accountid }),
                      `,`,
                    ],
                  })
                : (0, z.jsxs)(z.Fragment, {
                    children: [
                      `Created by: `,
                      (0, z.jsx)(cr, { accountID: n.accountid }),
                      `,`,
                    ],
                  }),
              `Created on `,
              w(n.time_created),
            ],
          }),
          (0, z.jsx)(`br`, {}),
          (0, z.jsx)(`p`, { children: n.issue_text }),
          (0, z.jsx)(`div`, {}),
          !!(n.time_last_response && n.time_last_response > n.time_created) &&
            (0, z.jsxs)(`div`, {
              children: [`Last Update `, w(n.time_last_response)],
            }),
          (0, z.jsx)(`br`, {}),
          (0, z.jsx)(`a`, {
            href: `${h.HELP_BASE_URL}en/ticketmaster/ticket/${qs(n.reference_code)}`,
            target: `_blank`,
            children: `Open Ticket`,
          }),
        ],
      })
    : (0, z.jsx)(sn, { size: `small` });
}
function Ys(e) {
  let { nAccountIDProposer: t, packageID: n, mapPartnerPaidByPackage: r } = e,
    i = r.get(n);
  return i
    ? (0, z.jsx)(T, {
        onClick: (e) =>
          Ke(
            (0, z.jsx)(Zs, {
              nAccountIDProposer: t,
              packageID: n,
              partnerID: i[0],
            }),
            ge(e),
          ),
        children: `Create Ticket`,
      })
    : (0, z.jsx)(`div`, {
        className: Tn,
        children: `Warning: Package isn't associated with a partner... Cannot create ticket`,
      });
}
var Xs = {};
function Zs(e) {
  let { partnerID: t, packageID: n, closeModal: r, nAccountIDProposer: i } = e,
    [a] = lr(t),
    [o] = Fn(n, Xs),
    s = (0, R.useMemo)(
      () => Sn.InitFromAccountID(i).ConvertTo64BitString(),
      [i],
    ),
    [c, l] = (0, R.useState)(() => o?.GetAppID() || 0),
    [u] = In(c, Xs),
    [d, f] = (0, R.useState)(`Question about pricing for package ${n}`),
    [p, m] = (0, R.useState)(``);
  (0, R.useEffect)(() => {
    o && c == 0 && l(o.GetAppID());
  }, [o, c]);
  let h = Mn(),
    g = Ws(s, t, 920, 55, h);
  return h.bLoading
    ? (0, z.jsx)(Nn, {
        state: h,
        strDialogTitle: `Create Ticket for Partner`,
        closeModal: r,
      })
    : (0, z.jsxs)(k, {
        strTitle: `Create Ticket for Partner`,
        strDescription: `Create a pricing ticket for partner ${a?.name} (${t}) for Package ${n}. App ${u?.GetName() || ``} with ${c}. Please update ticket title and body`,
        bOKDisabled: !c || d.trim().length == 0 || p.trim().length == 0,
        onOK: () =>
          g.mutate({ appid: c, strRequestTitle: d, strRequestBody: p }),
        bAllowFullSize: !0,
        onCancel: r,
        bDisableBackgroundDismiss: p.trim().length > 0,
        children: [
          (0, z.jsx)(pe, {
            type: `text`,
            label: `Ticket Title`,
            placeholder: `Enter Ticket Title`,
            value: d,
            onChange: (e) => f(e.currentTarget.value || ``),
          }),
          (0, z.jsx)(C, { children: `Enter Ticket Body` }),
          (0, z.jsx)(`textarea`, {
            value: p,
            onChange: (e) => m(e.currentTarget.value),
            cols: 80,
            rows: 20,
          }),
          (0, z.jsx)(pe, {
            type: `number`,
            label: `AppID to Associate with Ticket`,
            value: c,
            onChange: (e) => l(Number.parseInt(e.currentTarget.value) || 0),
          }),
        ],
      });
}
function Qs(t) {
  let { proposal: n, mapPartnerPaidByPackage: r, mapPriceChanges: i } = t,
    [a] = Fn(n.packageid, oo),
    [o] = Fn(a?.GetIncludedAppIDsOrSelf()?.[0], oo),
    s = `${h.PARTNER_BASE_URL}store/packagelanding/${n.packageid}`;
  return (0, z.jsxs)(`div`, {
    className: e(ks, yo),
    children: [
      (0, z.jsxs)(`div`, {
        className: As,
        children: [
          a
            ? (0, z.jsxs)(`span`, {
                children: [
                  (0, z.jsx)(`a`, { href: s, children: a.GetName() }),
                  ` `,
                  `(${n.packageid})`,
                ],
              })
            : (0, z.jsx)(`a`, { href: s, children: `Package ${n.packageid}` }),
          o?.GetAppType() == 4 && (0, z.jsx)(`span`, { children: ` (DLC)` }),
          o?.GetAppType() == 2 && (0, z.jsx)(`span`, { children: ` (MOD)` }),
          o?.GetAppType() == 10 &&
            (0, z.jsx)(`span`, { children: ` (HARDWARE)` }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: void 0,
        children:
          a && a.BIsVisible()
            ? `Release On: ` +
              (a.GetReleaseDateRTime()
                ? w(a.GetReleaseDateRTime())
                : ` No Release date`)
            : `Store Visibility: Hidden`,
      }),
      (0, z.jsx)(us, {
        packageID: n.packageid,
        priceChanges: i.get(n.packageid),
      }),
      (0, z.jsx)(`div`, {
        className: js,
        children: (0, z.jsx)(cr, { accountID: n.account }),
      }),
      (0, z.jsx)(vs, { ...t }),
      (0, z.jsx)(Ys, {
        nAccountIDProposer: n.account_proposer,
        packageID: n.packageid,
        mapPartnerPaidByPackage: r,
      }),
      (0, z.jsx)($s, { packageID: n.packageid, mapPartnerPaidByPackage: r }),
    ],
  });
}
function $s(e) {
  let { packageID: t, mapPartnerPaidByPackage: n } = e,
    r = n.get(t);
  return r
    ? (0, z.jsx)(`div`, {
        children: r.map((e) => (0, z.jsx)(ec, { partnerID: e }, `partner` + e)),
      })
    : null;
}
function ec(e) {
  let { partnerID: t } = e,
    [n] = lr(t);
  return n
    ? (0, z.jsxs)(`a`, {
        href: `${h.PARTNER_BASE_URL}admin/reviewpricesubmissions/?publisherID=${n.partnerid}`,
        children: [n.name, ` (`, n.partnerid, `)`],
      })
    : null;
}
function tc(e) {
  let { amountInCents: t, className: n } = e;
  return t
    ? (0, z.jsx)(`div`, { className: n, children: W(t) })
    : (0, z.jsx)(`div`, { className: n });
}
function W(e) {
  return e
    ? (e / 100).toLocaleString(Gt(), {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : ``;
}
function nc(e) {
  return (0, z.jsx)(`thead`, {
    children: (0, z.jsxs)(`tr`, {
      children: [
        lo.map((e) =>
          (0, z.jsx)(
            `td`,
            {
              children: (0, z.jsx)(Ve, {
                toolTipContent: ln(e),
                children: fn(e),
              }),
            },
            `header` + e,
          ),
        ),
        uo.map((e) =>
          (0, z.jsx)(
            `td`,
            {
              children: (0, z.jsx)(Ve, {
                toolTipContent: $t(e),
                children: Qt(e),
              }),
            },
            `header_region` + e,
          ),
        ),
      ],
    }),
  });
}
function rc(e) {
  let { proposal: t, oGuideline: n, mapCurrentPrices: r } = e,
    i = r.get(t.packageid),
    a = t.proposed_prices.base_amounts.find((e) => e.amount.currency_code == 1)
      ?.amount.amount;
  return (0, z.jsxs)(`tr`, {
    children: [
      lo.map((e) => {
        let r = n.GetRecommendPrice(a, e) || n.GetScaledRecommendedPrice(a, e);
        return (0, z.jsx)(
          ic,
          { eCurrencyCode: e, proposal: t, curPrice: i, guidePrice: r },
          t.packageid + `-` + e,
        );
      }),
      uo.map((e) => {
        let r = tn(e),
          o =
            n.GetRecommendPrice(a, r, e) ||
            n.GetScaledRecommendedPrice(a, r, e);
        return (0, z.jsx)(
          ac,
          {
            eCurrencyCode: r,
            eRegionCode: e,
            proposal: t,
            curPrice: i,
            guidePrice: o,
          },
          t.packageid + `-` + e,
        );
      }),
    ],
  });
}
function ic(e) {
  let { eCurrencyCode: t, curPrice: n, proposal: r, guidePrice: i } = e,
    a = r.proposed_prices.base_amounts.find((e) => e.amount.currency_code == t),
    o = n?.current_costs?.base_amounts.find((e) => e.currency_code == t);
  return (0, z.jsx)(oc, { proposed: a, originalAmount: o, guidePrice: i });
}
function ac(e) {
  let { eRegionCode: t, curPrice: n, proposal: r, guidePrice: i } = e,
    a = Qt(t),
    o = r.proposed_prices.region_amounts.find((e) => e.name == a),
    s = n?.current_costs?.region_amounts.find((e) => e.region == a);
  return (0, z.jsx)(oc, {
    proposed: o,
    originalAmount: s?.amount,
    guidePrice: i,
  });
}
function oc(e) {
  let { proposed: t, originalAmount: n, guidePrice: r } = e,
    i,
    a;
  return (
    t &&
      (r && r.price > t.amount.amount
        ? ((i = Ds),
          (a = `Suggested price ${W(r.price)} - ${Math.floor(100 - (t.amount.amount / r.price) * 100)}% ▼`))
        : r && r.price < t.amount.amount
          ? ((i = Es),
            (a = `Suggested price ${W(r.price)} - ${Math.floor((t.amount.amount / r.price) * 100 - 100)}% ▲`))
          : n
            ? n.amount > t.amount.amount
              ? (i = Ts)
              : n.amount < t.amount.amount && (i = ws)
            : (i = Cs)),
    (0, z.jsxs)(`td`, {
      className: Ms,
      children: [
        (0, z.jsx)(Ve, {
          toolTipContent: a,
          children: (0, z.jsx)(tc, {
            className: i,
            amountInCents: t?.amount.amount,
          }),
        }),
        n?.amount != t?.amount.amount &&
          (0, z.jsx)(tc, { amountInCents: n?.amount }),
        !n && (0, z.jsx)(`div`, { children: `--` }),
      ],
    })
  );
}
var sc = 2e4;
function cc(t) {
  let {
      rgProposals: n,
      oGuideline: r,
      mapCurrentPrices: i,
      mapPartnerPaidByPackage: a,
      mapPriceChanges: o,
    } = t,
    [s, c] = (0, R.useState)(!1),
    [l, u] = (0, R.useState)(!0);
  return (0, z.jsxs)(`div`, {
    className: e(vo),
    children: [
      (0, z.jsxs)(sr, {
        title: `Reasons Auto-Publish is blocked`,
        children: [
          (0, z.jsx)(`p`, {
            children: `This page will surface the reason why the package did not auto-publish and may require work to correct`,
          }),
          (0, z.jsxs)(`ol`, {
            className: Co,
            children: [
              (0, z.jsx)(`li`, {
                className: wo,
                children: `Missing Currencies`,
              }),
              (0, z.jsx)(`li`, {
                className: To,
                children: `Outside of acceptable threshold (more than 125% above or 50% below the guideline)`,
              }),
              (0, z.jsx)(`li`, {
                className: Eo,
                children: `USD Price doesn't match any guideline price point`,
              }),
              (0, z.jsx)(`li`, {
                className: Mo,
                children: `USD Price above 200$ USD`,
              }),
              (0, z.jsx)(`li`, {
                className: void 0,
                children: `Raising Price during 30 days during launch window`,
              }),
              (0, z.jsx)(`li`, {
                className: void 0,
                children: `Has Country specific pricing`,
              }),
            ],
          }),
          (0, z.jsxs)(`p`, {
            children: [
              `You can filter the list by choosing `,
              (0, z.jsx)(`a`, {
                href: `${h.PARTNER_BASE_URL}admin/reviewpricesubmissions/?myPartners=1`,
                children: `my partners`,
              }),
              ` view`,
            ],
          }),
        ],
      }),
      (0, z.jsx)(E, {
        label: `Show All Price Comparison Rows`,
        tooltip: `Displays the price comparison rows for all of the section below.`,
        checked: s,
        onChange: c,
      }),
      (0, z.jsx)(E, {
        label: `Show Prices with Open Tickets`,
        tooltip: `Displays the price comparison rows for those with open tickets against them.`,
        checked: l,
        onChange: u,
      }),
      (0, z.jsx)(`div`, {
        className: e(xo),
        children: (0, z.jsx)(`div`, {
          className: yo,
          children: `Package Info`,
        }),
      }),
      n.map((e) =>
        (0, z.jsx)(
          `div`,
          {
            children: (0, z.jsx)(lc, {
              oGuideline: r,
              proposal: e,
              mapCurrentPrices: i,
              mapPartnerPaidByPackage: a,
              mapPriceChanges: o,
              bForceShowComparisonRows: s,
              bShowWithOpenTickets: l,
            }),
          },
          `delta_` + e.packageid,
        ),
      ),
    ],
  });
}
function lc(e) {
  let { bShowWithOpenTickets: t } = e,
    [n, r] = (0, R.useState)(0);
  return n > 0 && !t
    ? null
    : (0, z.jsxs)(`div`, {
        className: bo,
        children: [
          (0, z.jsxs)(`div`, {
            className: xo,
            children: [
              (0, z.jsx)(Qs, { ...e }),
              (0, z.jsx)(uc, { ...e, setOpenTicketCount: r }),
              (0, z.jsx)(yc, { ...e }),
            ],
          }),
          (0, z.jsx)(xc, { ...e }),
        ],
      });
}
function uc(e) {
  let { proposal: t, setOpenTicketCount: n } = e,
    r = e.mapPartnerPaidByPackage.get(t.packageid)?.[0] || 0;
  return (0, z.jsxs)(`div`, {
    className: So,
    children: [
      (0, z.jsx)(dc, { ...e }),
      (0, z.jsx)(`div`, {
        className: ko,
        children: `Web Auto-Approval Checks`,
      }),
      (0, z.jsx)(pc, { ...e }),
      (0, z.jsx)(mc, { ...e }),
      (0, z.jsx)(bc, { ...e }),
      (0, z.jsx)(hc, { ...e }),
      (0, z.jsx)(fc, { ...e }),
      (0, z.jsx)(Ks, { partnerID: r, setTicketCount: n }),
    ],
  });
}
function dc(e) {
  let { proposal: t } = e,
    n = t.auto_approval_state || so.None,
    r = co[n] || `Unknown (${n})`;
  return (0, z.jsxs)(`div`, {
    className: Ao,
    children: [
      (0, z.jsx)(`div`, {
        className: ko,
        children: `Server Auto-Approval Checks`,
      }),
      (0, z.jsx)(`div`, { className: Oo, children: r }),
      !!t.auto_approval_notes &&
        (0, z.jsxs)(`div`, {
          className: `a-vQMUP7-qk-`,
          children: [`- `, t.auto_approval_notes],
        }),
    ],
  });
}
function fc(e) {
  let { proposal: t, mapCurrentPrices: n } = e,
    r = t.proposed_prices.base_amounts.find((e) => e.amount.currency_code == 1)
      ?.amount.amount,
    i = n
      .get(t.packageid)
      ?.current_costs.base_amounts.find((e) => e.currency_code == 1)?.amount;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      r > sc &&
        (0, z.jsxs)(`div`, {
          className: `_2uvPzzOBjGQ-`,
          children: [`USD Price $`, W(r), ` is above $200 USD Threshold`],
        }),
      !!(i && r > 2 * i) &&
        (0, z.jsxs)(`div`, {
          className: `_2uvPzzOBjGQ-`,
          children: [
            `USD price $`,
            W(r),
            ` is more than twice existing USD Price $`,
            W(i),
          ],
        }),
    ],
  });
}
function pc(e) {
  let { proposal: t } = e,
    n = (0, R.useMemo)(() => fo(t), [t]);
  return n?.length > 0
    ? (0, z.jsxs)(`div`, {
        className: Do,
        children: [
          (0, z.jsxs)(`div`, {
            className: Oo,
            children: [`Missing `, n.length, ` currencies: `],
          }),
          n.map(pn).join(`, `),
        ],
      })
    : null;
}
function mc(e) {
  let { proposal: t } = e,
    n = (0, R.useMemo)(() => po(t), [t]);
  return n?.length > 0
    ? (0, z.jsxs)(`div`, {
        className: Do,
        children: [
          (0, z.jsxs)(`div`, {
            className: Oo,
            children: [`Unexpected `, n.length, ` currencies: `],
          }),
          n.join(`, `),
        ],
      })
    : null;
}
function hc(e) {
  let { proposal: t, oGuideline: n } = e,
    r = t.proposed_prices.base_amounts.find((e) => e.amount.currency_code == 1)
      ?.amount.amount,
    i = n.GetRecommendPrice(r, 1);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      !i &&
        (0, z.jsxs)(`div`, {
          className: `lUhksFuvP3g-`,
          children: [
            `$`,
            W(r),
            ` USD Price doesn't align with any matrix price point. Will compare proposal to scaled guideline.`,
          ],
        }),
      (0, z.jsx)(vc, { ...e, USDPriceCents: r }),
    ],
  });
}
function gc(t) {
  let { thresholdData: n, strDirection: r } = t,
    i = null;
  return (
    n.nOriginalPrice == n.nProposedPrice && (i = zo),
    (0, z.jsxs)(`tr`, {
      className: Io,
      children: [
        (0, z.jsx)(`td`, { className: Ro, children: n.strCurrency }),
        (0, z.jsx)(`td`, {
          className: e(Bo, i),
          children: n.nOriginalPrice ? `${W(n.nOriginalPrice)}` : `--`,
        }),
        (0, z.jsx)(`td`, {
          className: e(Vo, i),
          children: `${W(n.nProposedPrice)}`,
        }),
        (0, z.jsx)(`td`, { className: Ho, children: `${W(n.nGuidancePrice)}` }),
        (0, z.jsx)(`td`, { className: Uo, children: `${n.nPercent}% ${r}` }),
      ],
    })
  );
}
function _c(t) {
  let { strGuidanceMessage: n, strDirection: r } = t;
  return (0, z.jsxs)(`thead`, {
    children: [
      (0, z.jsx)(`tr`, {
        children: (0, z.jsxs)(`td`, {
          colSpan: 5,
          className: e(No, r == `above` ? Po : Fo),
          children: [
            (0, z.jsx)(`b`, { children: r == `above` ? `▲` : `▼` }),
            ` `,
            n,
          ],
        }),
      }),
      (0, z.jsxs)(`tr`, {
        className: e(Io, Lo),
        children: [
          (0, z.jsx)(`td`, { className: Ro, children: `Currency` }),
          (0, z.jsx)(`td`, { className: Bo, children: `Current` }),
          (0, z.jsx)(`td`, { className: Vo, children: `Proposed` }),
          (0, z.jsx)(`td`, { className: Ho, children: `Recommended` }),
          (0, z.jsx)(`td`, { className: Uo, children: `% diff` }),
        ],
      }),
    ],
  });
}
function vc(e) {
  let { proposal: t, oGuideline: n, USDPriceCents: r, mapCurrentPrices: i } = e,
    { rgAboveThreshold: a, rgBelowThreshold: o } = (0, R.useMemo)(
      () => go(r, i, n, t),
      [r, i, n, t],
    );
  if (a.length > 0 || o.length > 0) {
    let e = W(r);
    return (0, z.jsxs)(`div`, {
      className: jo,
      children: [
        a.length > 0 &&
          (0, z.jsxs)(`table`, {
            className: `g-B7IhXyCUA-`,
            children: [
              (0, z.jsx)(_c, {
                strGuidanceMessage: `${a.length} currencies above guidance threshold for USD $ ${e}`,
                strDirection: `above`,
              }),
              (0, z.jsx)(`tbody`, {
                children: a.map((e) =>
                  (0, z.jsx)(
                    gc,
                    { thresholdData: e, strDirection: `▲` },
                    t.packageid + `_` + e.strCurrency,
                  ),
                ),
              }),
            ],
          }),
        o.length > 0 &&
          (0, z.jsxs)(`table`, {
            className: `g-B7IhXyCUA-`,
            children: [
              (0, z.jsx)(_c, {
                strGuidanceMessage: `${o.length} currencies below guidance threshold for USD $ ${e}`,
                strDirection: `below`,
              }),
              (0, z.jsx)(`tbody`, {
                children: o.map((e) =>
                  (0, z.jsx)(
                    gc,
                    { thresholdData: e, strDirection: `▼` },
                    t.packageid + `_` + e.strCurrency,
                  ),
                ),
              }),
            ],
          }),
      ],
    });
  }
  return null;
}
function yc(e) {
  let { proposal: t } = e;
  return t.proposed_prices.country_amounts?.length > 0
    ? (0, z.jsxs)(`div`, {
        children: [
          `Package has Country price overrides for Countries:`,
          t.proposed_prices.country_amounts.map((e) => e.name).join(`,`),
        ],
      })
    : null;
}
function bc(e) {
  let { proposal: t } = e,
    [n] = Fn(t.packageid, oo);
  return n && _o(n)
    ? (0, z.jsxs)(`div`, {
        className: Wo,
        children: [
          `This game released less than 30 days ago, on `,
          w(n.GetReleaseDateRTime()),
        ],
      })
    : null;
}
function xc(t) {
  let { bForceShowComparisonRows: n } = t,
    [r, i] = (0, R.useState)(!1);
  return !r && !n
    ? (0, z.jsx)(E, {
        label: `Show Price Comparison Row`,
        onChange: () => i(!0),
      })
    : (0, z.jsxs)(`div`, {
        className: e(void 0),
        children: [(0, z.jsx)(nc, {}), (0, z.jsx)(rc, { ...t })],
      });
}
function Sc(e) {
  let {
    rgProposals: t,
    oGuideline: n,
    mapCurrentPrices: r,
    mapPartnerPaidByPackage: i,
    mapPriceChanges: a,
  } = e;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(Ec, {}),
      (0, z.jsx)(Cc, { oGuideline: n }),
      (0, z.jsx)(`hr`, {}),
      (0, z.jsx)(`hr`, {}),
      t.map((e) =>
        (0, z.jsxs)(
          `div`,
          {
            children: [
              (0, z.jsx)(`hr`, {}),
              (0, z.jsx)(wc, {
                oGuideline: n,
                proposal: e,
                mapCurrentPrices: r,
                mapPartnerPaidByPackage: i,
                mapPriceChanges: a,
              }),
            ],
          },
          e.packageid,
        ),
      ),
    ],
  });
}
function Cc(t) {
  return (0, z.jsxs)(`div`, {
    className: e(xs, Ss),
    children: [
      (0, z.jsx)(`div`, { className: ks, children: `Package Info` }),
      (0, z.jsx)(nc, {}),
    ],
  });
}
function wc(e) {
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsxs)(`div`, {
        className: xs,
        children: [(0, z.jsx)(Qs, { ...e }), (0, z.jsx)(rc, { ...e })],
      }),
      (0, z.jsx)(Tc, { ...e }),
    ],
  });
}
function Tc(e) {
  let { proposal: t } = e,
    n = t.proposed_prices.country_amounts;
  return n?.length > 0
    ? (0, z.jsxs)(`div`, {
        className: xs,
        children: [
          (0, z.jsx)(`div`, { children: `^^^^` }),
          n.map((e) =>
            (0, z.jsxs)(
              `div`,
              {
                children: [
                  e.name,
                  `/`,
                  mn(e.amount.currency_code),
                  ` @ `,
                  W(e.account),
                ],
              },
              `country_${t.packageid}_${e.amount.currency_code}`,
            ),
          ),
        ],
      })
    : null;
}
function Ec(e) {
  return (0, z.jsx)(sr, {
    title: `Legend`,
    tooltip: `Explains the color scheme per proposed pricing color`,
    bStartMinimized: !0,
    children: (0, z.jsxs)(`div`, {
      className: Os,
      children: [
        (0, z.jsx)(`div`, { className: Ts, children: `Price Decreases` }),
        (0, z.jsx)(`div`, { className: ws, children: `Price Increases` }),
        (0, z.jsx)(`div`, { className: Cs, children: `Price is New` }),
        (0, z.jsx)(`div`, {
          className: Es,
          children: `Price is higher than guideline. Mouseover to see suggested price.`,
        }),
        (0, z.jsx)(`div`, {
          className: Ds,
          children: `Price is lower than guideline. Mouseover to see suggested price.`,
        }),
      ],
    }),
  });
}
function Dc(t) {
  let [n] = (0, R.useState)(() => p(`filter_name`, `application_config`) || ``),
    r = io(),
    i = It(),
    a = Ga(),
    o = no(),
    s = eo((0, R.useMemo)(() => r.map((e) => e.packageid), [r])),
    [c, l] = on(`tab`, `delta`);
  if (!i) return (0, z.jsx)(sn, { string: `Loading Pricing Guidelines` });
  let u = (e) => l(e.key),
    d = [
      {
        name: `Price Delta`,
        key: `delta`,
        contents: (0, z.jsx)(ut, {
          children: (0, z.jsx)(cc, {
            rgProposals: r,
            oGuideline: i,
            mapCurrentPrices: a,
            mapPartnerPaidByPackage: o,
            mapPriceChanges: s,
          }),
        }),
        onClick: u,
      },
      {
        name: `Submissions Raw Table`,
        key: `raw`,
        contents: (0, z.jsx)(ut, {
          children: (0, z.jsx)(Sc, {
            rgProposals: r,
            oGuideline: i,
            mapCurrentPrices: a,
            mapPartnerPaidByPackage: o,
            mapPriceChanges: s,
          }),
        }),
        onClick: u,
      },
    ];
  return (0, z.jsx)($n, {
    children: (0, z.jsx)(ut, {
      children: (0, z.jsxs)(`div`, {
        className: e(Wn, Hn),
        children: [
          (0, z.jsx)(`h1`, { children: `Package Prices Submissions Reviews` }),
          (0, z.jsx)(`p`, { children: n }),
          (0, z.jsx)(`hr`, {}),
          (0, z.jsx)(rn, { tabs: d, startingTab: c }),
        ],
      }),
    }),
  });
}
var Oc = 10,
  kc = `orange-9 20%`,
  Ac = {
    background: `rgb( from var(--color-orange-9) r g b / 20% )`,
    padding: `0 4px`,
  },
  jc = 1,
  Mc = 1;
function Nc(e, t) {
  return `${e}|${t}`;
}
function Pc(e, t) {
  let n = new Map(),
    r = (e, t) => {
      let r = Nc(e, t),
        i = n.get(r);
      return (
        i ||
          ((i = { eCurrencyCode: e, eRegionCode: t, mapAmounts: new Map() }),
          n.set(r, i)),
        i.mapAmounts
      );
    };
  for (let n of e) {
    if (t !== void 0 && n.convert_method !== t) continue;
    let e = Number(n.usd_price);
    for (let t of n.currency_prices ?? [])
      r(t.currency_code, 0).set(e, Number(t.price));
    for (let t of n.region_prices ?? [])
      r(t.currency_code, t.region_code).set(e, Number(t.price));
  }
  return n;
}
function Fc(e, t, n, r) {
  let i = [],
    a = new Set([...e.keys(), ...t.keys()]);
  for (let o of a) {
    let a = e.get(o),
      s = t.get(o),
      { eCurrencyCode: c, eRegionCode: l } = a ?? s,
      u = new Set([
        ...(a?.mapAmounts.keys() ?? []),
        ...(s?.mapAmounts.keys() ?? []),
      ]),
      d = [],
      f = 0;
    for (let e of [...u].sort((e, t) => e - t)) {
      let t = a?.mapAmounts.get(e),
        n = s?.mapAmounts.get(e);
      if (t === void 0 || n === void 0 || t === 0) {
        f++;
        continue;
      }
      d.push({
        nUSDPricepoint: e,
        nExistingAmount: t,
        nStagedAmount: n,
        flPercentDiff: ((n - t) / t) * 100,
      });
    }
    let p = il(n, c),
      m = il(r, c),
      h = d.map((e) => Rc(e, p, m)).filter((e) => e !== null),
      g = Ic(d, (e) => e.nExistingAmount, p),
      _ = Ic(d, (e) => e.nStagedAmount, m);
    i.push({
      eCurrencyCode: c,
      eRegionCode: l,
      rgPricepointDiffs: d,
      nSkippedPricepoints: f,
      flAvgPercentDiff: d.length
        ? d.reduce((e, t) => e + t.flPercentDiff, 0) / d.length
        : null,
      flAvgPercentDiffUSD: h.length
        ? h.reduce((e, t) => e + t, 0) / h.length
        : null,
      nPricepointsIncreasing: d.filter(
        (e) => e.nStagedAmount > e.nExistingAmount,
      ).length,
      nPricepointsDecreasing: d.filter(
        (e) => e.nStagedAmount < e.nExistingAmount,
      ).length,
      nPricepointsUnchanged: d.filter(
        (e) => e.nStagedAmount === e.nExistingAmount,
      ).length,
      flAvgUSDDiscountExisting: g,
      flAvgUSDDiscountStaged: _,
      flAvgUSDDiscountChange: g === null || _ === null ? null : _ - g,
    });
  }
  return (
    i.sort((e, t) => {
      let n = Vc(e.eRegionCode),
        r = Vc(t.eRegionCode);
      return (e.eRegionCode === 0) == (t.eRegionCode === 0)
        ? n.localeCompare(r) ||
            fn(e.eCurrencyCode).localeCompare(fn(t.eCurrencyCode))
        : e.eRegionCode === 0
          ? -1
          : 1;
    }),
    i
  );
}
function Ic(e, t, n) {
  return n === null || e.length === 0
    ? null
    : e.reduce((e, r) => e + Lc(t(r), n, r.nUSDPricepoint), 0) / e.length;
}
function Lc(e, t, n) {
  return (1 - (e * t) / n) * 100;
}
function Rc(e, t, n) {
  if (t === null || n === null) return null;
  let r = Math.round(e.nExistingAmount * t);
  return r ? ((Math.round(e.nStagedAmount * n) - r) / r) * 100 : null;
}
function zc(e) {
  return e.rgPricepointDiffs.length === 0
    ? null
    : e.nPricepointsIncreasing > e.nPricepointsDecreasing &&
        e.nPricepointsIncreasing > e.nPricepointsUnchanged
      ? `increasing`
      : e.nPricepointsDecreasing > e.nPricepointsIncreasing &&
          e.nPricepointsDecreasing > e.nPricepointsUnchanged
        ? `decreasing`
        : `unchanged`;
}
function Bc(e, t) {
  return e.flAvgPercentDiff !== null && Math.abs(e.flAvgPercentDiff) > t;
}
function Vc(e) {
  return e === 0 ? `None` : Qt(e);
}
function Hc(e) {
  return e.eRegionCode === 0 ? fn(e.eCurrencyCode) : Qt(e.eRegionCode);
}
function Uc(e) {
  return e.eRegionCode === 0 ? ln(e.eCurrencyCode) : $t(e.eRegionCode);
}
var Wc = [
    {
      eColumn: `currency`,
      strLabel: `Currency/Region
Abbreviation`,
      bNumeric: !1,
    },
    {
      eColumn: `name`,
      strLabel: `Currency/Region
Name`,
      bNumeric: !1,
    },
    {
      eColumn: `region`,
      strLabel: `Region`,
      bNumeric: !1,
      strTooltip: `Is this a region? Regions are priced in USD, not local currency`,
    },
    {
      eColumn: `movement`,
      strLabel: `Movement`,
      bNumeric: !1,
      strTooltip: `Of the supported pricepoints for this entry, which direction did the majority move in (increasing, decreasing, unchanged)`,
    },
    {
      eColumn: `avgPercentDiff`,
      strLabel: `Avg % Difference
(Local Pricing)`,
      bNumeric: !0,
      strTooltip: `The difference the customer will see.

 What is the average percentage change between the existing pricing guideline and the staged pricing guideline`,
    },
    {
      eColumn: `avgPercentDiffUSD`,
      strLabel: `Avg % Difference USD
(Existing vs Staged Amounts)`,
      bNumeric: !0,
    },
    {
      eColumn: `increasing`,
      strLabel: `Pricepoints
Increasing`,
      bNumeric: !0,
      strTooltip: `How many of the supported pricepoints increased with the staged amounts`,
    },
    {
      eColumn: `decreasing`,
      strLabel: `Pricepoints
Decreasing`,
      bNumeric: !0,
      strTooltip: `How many of the supported pricepoints decreased with the staged amounts`,
    },
    {
      eColumn: `unchanged`,
      strLabel: `Pricepoints
Unchanged`,
      bNumeric: !0,
      strTooltip: `How many of the supported pricepoints were unchanged with the staged amounts`,
    },
    {
      eColumn: `avgDiscountExisting`,
      strLabel: `Avg USD Discount
(Existing)`,
      bNumeric: !0,
    },
    {
      eColumn: `avgDiscountStaged`,
      strLabel: `Avg USD Discount
(Staged)`,
      bNumeric: !0,
      strTooltip: `The average discount from the USD pricepoints for staged values.

This discount is calculated using the CURRENT fx rate 

 Eg.'How do we relate to USD if we ship the staged pricing today'`,
    },
    {
      eColumn: `avgDiscountChange`,
      strLabel: `Avg USD Discount
Change`,
      bNumeric: !0,
      strTooltip: `The change from Existing to Staged USD Discounts.

Eg. "do we discount more or less from USD with the staged set of pricing". 

Positive is less discount, negative is more discount.`,
    },
  ],
  Gc = new Map([
    [`increasing`, 1],
    [`unchanged`, 0],
    [`decreasing`, -1],
  ]),
  Kc = { fontVariantNumeric: `tabular-nums` },
  qc = { whiteSpace: `pre-line` },
  Jc = { color: `#c7821a` },
  Yc = { visibility: `hidden` },
  Xc = { listStyleType: `disc` };
function Zc(e, t) {
  switch (t) {
    case `currency`:
      return Hc(e);
    case `name`:
      return Uc(e);
    case `region`:
      return e.eRegionCode === 0 ? 0 : 1;
    case `movement`:
      return Gc.get(zc(e)) ?? null;
    case `avgPercentDiff`:
      return e.flAvgPercentDiff;
    case `avgPercentDiffUSD`:
      return e.flAvgPercentDiffUSD;
    case `increasing`:
      return e.nPricepointsIncreasing;
    case `decreasing`:
      return e.nPricepointsDecreasing;
    case `unchanged`:
      return e.nPricepointsUnchanged;
    case `avgDiscountExisting`:
      return e.flAvgUSDDiscountExisting;
    case `avgDiscountStaged`:
      return e.flAvgUSDDiscountStaged;
    case `avgDiscountChange`:
      return e.flAvgUSDDiscountChange;
  }
}
function Qc(e, t, n) {
  return [...e].sort((e, r) => {
    let i = Zc(e, t),
      a = Zc(r, t);
    if (i === null || a === null) return (i === null) - +(a === null);
    let o = typeof i == `string` ? i.localeCompare(a) : i - a;
    return n ? o : -o;
  });
}
function G(e) {
  return (0, z.jsx)(P, { paddingY: `1`, paddingX: `2`, ...e });
}
function $c(e) {
  let {
      column: t,
      eSortColumn: n,
      bAscending: r,
      OnClick: i,
      strTooltip: a,
    } = e,
    o = t.eColumn === n;
  return (0, z.jsx)(G, {
    background: `dull-9 20%`,
    textAlign: t.bNumeric ? `end` : `start`,
    onClick: () => i(t.eColumn),
    style: { cursor: `pointer`, userSelect: `none` },
    children: (0, z.jsxs)(N, {
      direction: `column`,
      justify: `between`,
      height: `100%`,
      children: [
        (0, z.jsxs)(F, {
          contrast: o ? `title` : `subtitle`,
          whiteSpace: `pre-line`,
          children: [
            t.strLabel,
            o &&
              (0, z.jsx)(Ut, {
                direction: r ? `up` : `down`,
                marginStart: `1`,
              }),
          ],
        }),
        a &&
          (0, z.jsx)(P, {
            textAlign: `end`,
            children: (0, z.jsx)(O, {
              small: !0,
              tooltip: (0, z.jsx)(`span`, { style: qc, children: a }),
            }),
          }),
      ],
    }),
  });
}
function el(e) {
  let { flPercent: t, strTooltip: n } = e;
  return t === null
    ? (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsx)(F, { contrast: `note`, children: `—` }),
      })
    : (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsxs)(F, {
          color: t < 0 ? `text-error` : t > 0 ? `text-success` : `text-body`,
          style: Kc,
          children: [
            t > 0 ? `+` : ``,
            t.toFixed(1),
            `%`,
            n && (0, z.jsx)(O, { small: !0, tooltip: n }),
          ],
        }),
      });
}
function tl(e) {
  let { eMovement: t } = e;
  return t === `increasing`
    ? (0, z.jsx)(G, {
        textAlign: `center`,
        children: (0, z.jsx)(F, {
          color: `text-success`,
          children: (0, z.jsx)(Ut, { direction: `up` }),
        }),
      })
    : t === `decreasing`
      ? (0, z.jsx)(G, {
          textAlign: `center`,
          children: (0, z.jsx)(F, {
            color: `text-error`,
            children: (0, z.jsx)(Ut, { direction: `down` }),
          }),
        })
      : t === `unchanged`
        ? (0, z.jsx)(G, {
            textAlign: `center`,
            children: (0, z.jsx)(F, { color: `text-body`, children: `–` }),
          })
        : (0, z.jsx)(G, {});
}
function nl(e) {
  return (0, z.jsx)(G, {
    textAlign: `end`,
    children: (0, z.jsx)(F, { style: Kc, children: e.nCount }),
  });
}
function rl(e) {
  let { flPercent: t, bStarred: n } = e;
  return t === null
    ? (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsx)(F, { contrast: `note`, children: `—` }),
      })
    : (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsxs)(F, {
          color: `text-body`,
          contrast: `body`,
          style: Kc,
          children: [t.toFixed(1), `%`, n && `*`],
        }),
      });
}
function il(e, t) {
  return t === 1 ? 1 : e?.rates[t] || null;
}
function al(e) {
  let { nAmount: t, eCurrencyCode: n, bBold: r } = e;
  return t === null
    ? (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsx)(F, { contrast: `note`, children: `—` }),
      })
    : (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsx)(F, {
          weight: r ? `heavy` : void 0,
          style: Kc,
          children: xt(t, n),
        }),
      });
}
function ol(e) {
  let { nDifference: t, eCurrencyCode: n } = e;
  return t === null
    ? (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsx)(F, { contrast: `note`, children: `—` }),
      })
    : (0, z.jsx)(G, {
        textAlign: `end`,
        children: (0, z.jsxs)(F, {
          color: t < 0 ? `text-error` : t > 0 ? `text-success` : `text-body`,
          style: Kc,
          children: [t > 0 ? `+` : ``, xt(t, n)],
        }),
      });
}
function sl(e) {
  return new Date(e * 1e3).toISOString().slice(0, 10);
}
function cl(e) {
  let {
      row: t,
      bExpanded: n,
      OnToggle: r,
      launchFXRates: i,
      currentFXRates: a,
      strLaunchTooltip: o,
      flSignificantPercentDiff: s,
      bNearCNYDiscount: c,
    } = e,
    l = il(i, t.eCurrencyCode),
    u = il(a, t.eCurrencyCode),
    d = Bc(t, s),
    f;
  return (
    t.flAvgPercentDiff !== null &&
      t.flAvgPercentDiffUSD !== null &&
      Math.abs(t.flAvgPercentDiff) > jc &&
      Math.abs(t.flAvgPercentDiffUSD) > jc &&
      (t.flAvgPercentDiff > 0 && t.flAvgPercentDiffUSD < 0
        ? (f = `Currency FX rates decreased more than local pricing multipliers increased`)
        : t.flAvgPercentDiff < 0 &&
          t.flAvgPercentDiffUSD > 0 &&
          (f = `Currency FX rates increased more than local pricing multipliers decreased`)),
    (0, z.jsxs)(z.Fragment, {
      children: [
        (0, z.jsxs)(Zt, {
          columns: `subgrid`,
          gridColumn: `1 / -1`,
          alignItems: `center`,
          background: d ? kc : `dull-9 10%`,
          onClick: r,
          style: { cursor: `pointer` },
          children: [
            (0, z.jsx)(G, {
              children: (0, z.jsxs)(F, {
                whiteSpace: `nowrap`,
                children: [
                  (0, z.jsx)(Ut, {
                    direction: n ? `down` : `right`,
                    marginEnd: `1`,
                  }),
                  Hc(t),
                ],
              }),
            }),
            (0, z.jsx)(G, {
              children: (0, z.jsx)(F, {
                whiteSpace: `nowrap`,
                children: Uc(t),
              }),
            }),
            (0, z.jsx)(G, {
              textAlign: `center`,
              children: t.eRegionCode !== 0 && (0, z.jsx)(Wt, { size: `4` }),
            }),
            (0, z.jsx)(tl, { eMovement: zc(t) }),
            (0, z.jsx)(el, { flPercent: t.flAvgPercentDiff }),
            (0, z.jsx)(el, { flPercent: t.flAvgPercentDiffUSD, strTooltip: f }),
            (0, z.jsx)(nl, { nCount: t.nPricepointsIncreasing }),
            (0, z.jsx)(nl, { nCount: t.nPricepointsDecreasing }),
            (0, z.jsx)(nl, { nCount: t.nPricepointsUnchanged }),
            (0, z.jsx)(rl, { flPercent: t.flAvgUSDDiscountExisting }),
            (0, z.jsx)(rl, {
              flPercent: t.flAvgUSDDiscountStaged,
              bStarred: c,
            }),
            (0, z.jsx)(rl, { flPercent: t.flAvgUSDDiscountChange }),
          ],
        }),
        n &&
          (0, z.jsx)(P, {
            gridColumn: `1 / -1`,
            paddingStart: `6`,
            paddingBottom: `2`,
            children: (0, z.jsxs)(Zt, {
              columns: `repeat( 11, max-content )`,
              gap: `1`,
              children: [
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `USD Pricepoint`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `Existing`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `Staged`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `Difference`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `% Difference`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `Existing (USD)`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `Staged (USD)`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `Difference (USD)`,
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsxs)(F, {
                    contrast: `subtitle`,
                    whiteSpace: `nowrap`,
                    children: [
                      `USD Discount (Existing, At Launch)`,
                      i &&
                        (0, z.jsx)(O, {
                          small: !0,
                          tooltip: `USD @ ${sl(i.rt_date)}`,
                        }),
                    ],
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsxs)(F, {
                    contrast: `subtitle`,
                    whiteSpace: `nowrap`,
                    children: [
                      `USD Discount (Staged)`,
                      a &&
                        (0, z.jsx)(O, {
                          small: !0,
                          tooltip: `USD @ ${sl(a.rt_date)}`,
                        }),
                    ],
                  }),
                }),
                (0, z.jsx)(G, {
                  textAlign: `end`,
                  children: (0, z.jsx)(F, {
                    contrast: `subtitle`,
                    children: `USD Discount Change`,
                  }),
                }),
                t.rgPricepointDiffs.map((e) => {
                  let n = u === null ? null : Math.round(e.nExistingAmount * u),
                    r = u === null ? null : Math.round(e.nStagedAmount * u),
                    i = n === null || r === null ? null : r - n,
                    a =
                      l === null
                        ? null
                        : Lc(e.nExistingAmount, l, e.nUSDPricepoint),
                    o =
                      u === null
                        ? null
                        : Lc(e.nStagedAmount, u, e.nUSDPricepoint);
                  return (0, z.jsxs)(
                    Zt,
                    {
                      columns: `subgrid`,
                      gridColumn: `1 / -1`,
                      alignItems: `center`,
                      background: `dull-9 10%`,
                      children: [
                        (0, z.jsx)(al, {
                          nAmount: e.nUSDPricepoint,
                          eCurrencyCode: 1,
                          bBold: !0,
                        }),
                        (0, z.jsx)(al, {
                          nAmount: e.nExistingAmount,
                          eCurrencyCode: t.eCurrencyCode,
                        }),
                        (0, z.jsx)(al, {
                          nAmount: e.nStagedAmount,
                          eCurrencyCode: t.eCurrencyCode,
                        }),
                        (0, z.jsx)(ol, {
                          nDifference: e.nStagedAmount - e.nExistingAmount,
                          eCurrencyCode: t.eCurrencyCode,
                        }),
                        (0, z.jsx)(el, { flPercent: e.flPercentDiff }),
                        (0, z.jsx)(al, { nAmount: n, eCurrencyCode: 1 }),
                        (0, z.jsx)(al, { nAmount: r, eCurrencyCode: 1 }),
                        (0, z.jsx)(ol, { nDifference: i, eCurrencyCode: 1 }),
                        (0, z.jsx)(rl, { flPercent: a }),
                        (0, z.jsx)(rl, { flPercent: o }),
                        (0, z.jsx)(rl, {
                          flPercent: a === null || o === null ? null : o - a,
                        }),
                      ],
                    },
                    e.nUSDPricepoint,
                  );
                }),
              ],
            }),
          }),
      ],
    })
  );
}
function ll(e) {
  let {
      rgRows: t,
      flSignificantPercentDiff: n,
      eTableFilter: r,
      OnToggleFilter: i,
    } = e,
    a = 0,
    o = 0,
    s = 0,
    c = 0,
    l = 0;
  for (let e of t) {
    let t = zc(e);
    t === `increasing`
      ? (a++, Bc(e, n) && o++)
      : t === `decreasing`
        ? (c++, Bc(e, n) && l++)
        : t === `unchanged` && s++;
  }
  return (0, z.jsx)(Zt, {
    columns: `max-content max-content`,
    alignItems: `center`,
    gapX: `2`,
    gapY: `1`,
    marginTop: `2`,
    children: [
      { eMovement: `increasing`, nCount: a, nShaded: o },
      { eMovement: `unchanged`, nCount: s, nShaded: 0 },
      { eMovement: `decreasing`, nCount: c, nShaded: l },
    ].map((e) =>
      (0, z.jsxs)(
        R.Fragment,
        {
          children: [
            (0, z.jsxs)(F, {
              children: [
                `Currencies/Regions `,
                e.eMovement,
                `: `,
                e.nCount,
                (0, z.jsxs)(`span`, {
                  style: e.nShaded > 0 ? void 0 : Yc,
                  children: [
                    ` (`,
                    (0, z.jsxs)(`span`, {
                      style: Jc,
                      children: [e.nShaded, ` significantly`],
                    }),
                    `)`,
                  ],
                }),
              ],
            }),
            (0, z.jsx)(P, {
              children:
                e.nCount > 0 &&
                (0, z.jsxs)(Ht, {
                  size: `1`,
                  variant: `outline`,
                  onClick: () => i(e.eMovement),
                  children: [
                    r === e.eMovement ? `Hide` : `Show`,
                    ` `,
                    e.eMovement,
                  ],
                }),
            }),
          ],
        },
        e.eMovement,
      ),
    ),
  });
}
function ul(e) {
  let {
      strTitle: t,
      rgRows: n,
      launchFXRates: r,
      currentFXRates: i,
      flSignificantPercentDiff: a,
      bCompareToCNY: o,
    } = e,
    s =
      r && i
        ? `Compares the staged pricing at current FX rates (${sl(i.rt_date)}) against the existing pricing at launch FX rates (${sl(r.rt_date)})`
        : void 0,
    c = r
      ? `The average discount from the USD pricepoints for this existing values.\n\nThis is calculated using the PRIOR fx rate (${sl(r.rt_date)})\n\nEg. 'How did we relate to USD when we shipped this pricing'`
      : void 0,
    l = new Map([
      [`avgPercentDiffUSD`, s],
      [`avgDiscountExisting`, c],
    ]),
    [u, d] = (0, R.useState)(`avgPercentDiff`),
    [f, p] = (0, R.useState)(!1),
    m = (e) => {
      p(e !== u || !f), d(e);
    },
    [h, g] = (0, R.useState)(null),
    [_, v] = (0, R.useState)(null),
    ee = (e) => v(e === _ ? null : e),
    y = _ === `all` ? n : n.filter((e) => zc(e) === _),
    b = n.reduce((e, t) => e + t.nSkippedPricepoints, 0),
    x = o
      ? (n.find((e) => e.eCurrencyCode === 23 && e.eRegionCode === 0)
          ?.flAvgUSDDiscountStaged ?? null)
      : null;
  return (0, z.jsxs)(P, {
    marginTop: `4`,
    children: [
      (0, z.jsxs)(N, {
        align: `center`,
        gap: `4`,
        children: [
          (0, z.jsx)(Jt, { level: `3`, children: t }),
          (0, z.jsx)(Ht, {
            size: `1`,
            variant: `outline`,
            onClick: () => ee(`all`),
            children: _ === `all` ? `Hide all` : `Show all`,
          }),
        ],
      }),
      (0, z.jsx)(ll, {
        rgRows: n,
        flSignificantPercentDiff: a,
        eTableFilter: _,
        OnToggleFilter: ee,
      }),
      _ !== null &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(`br`, {}),
            (0, z.jsxs)(`ul`, {
              children: [
                (0, z.jsxs)(F, {
                  as: `li`,
                  size: `3`,
                  style: Xc,
                  children: [
                    (0, z.jsx)(`span`, {
                      style: Ac,
                      children: `Orange shaded rows`,
                    }),
                    ` flag an average movement of greater than +/-`,
                    a,
                    `% in local currency amounts`,
                  ],
                }),
                x !== null &&
                  (0, z.jsxs)(F, {
                    as: `li`,
                    size: `3`,
                    style: Xc,
                    children: [
                      `* - Staged USD Discount is within +/-`,
                      Mc,
                      `% of China's discount (`,
                      x.toFixed(1),
                      `%)`,
                    ],
                  }),
              ],
            }),
            (0, z.jsxs)(Zt, {
              columns: `repeat( ${Wc.length}, max-content )`,
              gap: `1`,
              alignContent: `center`,
              marginTop: `3`,
              children: [
                Wc.map((e) =>
                  (0, z.jsx)(
                    $c,
                    {
                      column: e,
                      eSortColumn: u,
                      bAscending: f,
                      OnClick: m,
                      strTooltip: l.get(e.eColumn) ?? e.strTooltip,
                    },
                    e.eColumn,
                  ),
                ),
                Qc(y, u, f).map((e) => {
                  let t = Nc(e.eCurrencyCode, e.eRegionCode),
                    n =
                      x !== null &&
                      e.flAvgUSDDiscountStaged !== null &&
                      e.eCurrencyCode !== 23 &&
                      Math.abs(e.flAvgUSDDiscountStaged - x) <= Mc;
                  return (0, z.jsx)(
                    cl,
                    {
                      row: e,
                      bExpanded: t === h,
                      OnToggle: () => g(t === h ? null : t),
                      launchFXRates: r,
                      currentFXRates: i,
                      strLaunchTooltip: s,
                      flSignificantPercentDiff: a,
                      bNearCNYDiscount: n,
                    },
                    t,
                  );
                }),
              ],
            }),
            (0, z.jsxs)(F, {
              as: `div`,
              contrast: `note`,
              marginTop: `2`,
              children: [
                b,
                ` currency / pricepoint pairs were priced on only one side and are not included above.`,
              ],
            }),
          ],
        }),
    ],
  });
}
function dl(e) {
  let { currentFXRates: t, latestPricingMultiplierSet: n } = e,
    [r, i, a] = it(),
    [o, s] = (0, R.useState)(null),
    [c, l] = (0, R.useState)(null);
  return (0, z.jsxs)(P, {
    marginTop: `6`,
    children: [
      (0, z.jsx)(Ht, {
        onClick: i,
        disabled: !t || !n,
        children: `Stage New Pricing`,
      }),
      !t &&
        (0, z.jsx)(F, {
          as: `div`,
          contrast: `note`,
          marginTop: `2`,
          children: `No FX rates are available to stage with`,
        }),
      !n &&
        (0, z.jsx)(F, {
          as: `div`,
          contrast: `note`,
          marginTop: `2`,
          children: `No pricing multiplier set is available to stage with`,
        }),
      c && (0, z.jsx)(F, { as: `div`, marginTop: `2`, children: c }),
      (0, z.jsx)(M, {
        active: r,
        children: (0, z.jsx)(k, {
          strTitle: `Stage New Pricing`,
          onOK: async () => {
            if (!t || !n) return;
            let e = new FormData();
            e.append(`sessionid`, x()),
              e.append(
                `pricing_multiplier_id`,
                String(n.pricing_multiplier_id),
              ),
              e.append(`rt_date_fx`, String(t.rt_date));
            try {
              let t = await H.default.post(
                `${h.PARTNER_BASE_URL}admin/ajaxstagenewpricingguidelines/`,
                e,
              );
              t.data.success === 1
                ? (l(null), s(t.data.rows_written))
                : l(`Staging failed, EResult ${t.data.success}`);
            } catch {
              l(`Staging failed, the request did not complete`);
            }
          },
          closeModal: a,
          strDescription: `Generate new staged pricing for every pricing method using the following values?`,
          children: (0, z.jsxs)(`ul`, {
            children: [
              (0, z.jsxs)(`li`, {
                style: Xc,
                children: [`Exchange Rate Date: `, t && sl(t.rt_date)],
              }),
              (0, z.jsxs)(`li`, {
                style: Xc,
                children: [`Pricing Multiplier ID: `, n?.pricing_multiplier_id],
              }),
              (0, z.jsxs)(`li`, {
                style: Xc,
                children: [
                  `Pricing Multiplier Date: `,
                  n && sl(n.rt_date_source),
                ],
              }),
            ],
          }),
        }),
      }),
      (0, z.jsx)(M, {
        active: o !== null,
        children: (0, z.jsx)(k, {
          strTitle: `New Pricing Staged`,
          strDescription: `Staged ${o} rows. Reload the page to compare them.`,
          bAlertDialog: !0,
          bHideCloseIcon: !0,
          bDisableBackgroundDismiss: !0,
          strOKButtonText: `Reload Page`,
          onOK: () => window.location.reload(),
        }),
      }),
    ],
  });
}
var fl = {
  2: `Purchasing Power Conversion`,
  3: `Exchange-rate Conversion`,
  1: `Multi-variable conversion`,
};
function pl(e) {
  let t = (0, R.useMemo)(
      () => p(`current_fx_rates`, `application_config`) ?? null,
      [],
    ),
    n = (0, R.useMemo)(
      () => p(`latest_pricing_multiplier_set`, `application_config`) ?? null,
      [],
    ),
    [r, i] = (0, R.useState)(String(Oc)),
    a = Number(r),
    o = r.trim() !== `` && a >= 0 && a <= 100,
    s = o ? a : Oc,
    c = (0, R.useMemo)(() => {
      let e = p(`existing_price_points`, `application_config`) ?? [];
      return (p(`pricing_methods`, `application_config`) ?? []).map((n) => {
        let r = n.launch_fx_rates ?? null,
          i = Fc(
            Pc(e, n.convert_method),
            Pc(n.staged_price_points ?? []),
            r,
            t,
          ).filter((e) => e.eCurrencyCode !== 1 || e.eRegionCode !== 0);
        return {
          eConvertMethod: n.convert_method,
          rgRows: i,
          launchFXRates: r,
        };
      });
    }, [t]);
  return (0, z.jsxs)(`div`, {
    className: Wn,
    children: [
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`h2`, {
        className: Un,
        children: `Package Pricing Guideline Comparison`,
      }),
      (0, z.jsxs)(`ul`, {
        children: [
          (0, z.jsx)(F, {
            as: `li`,
            size: `3`,
            style: Xc,
            children: `This page shows staged package pricing guidelines against the currently live package pricing guidelines, per USD pricepoint.`,
          }),
          (0, z.jsxs)(F, {
            as: `li`,
            size: `3`,
            style: Xc,
            children: [
              (0, z.jsx)(`span`, {
                style: Jc,
                children: `Significant movement`,
              }),
              `: Currencies or regions moving more than +/-`,
              (0, z.jsx)(P, {
                display: `inline-block`,
                width: `48px`,
                marginX: `1`,
                children: (0, z.jsx)(Yt, {
                  size: `1`,
                  variant: `underline`,
                  inputMode: `decimal`,
                  value: r,
                  onTextChange: i,
                  status: o ? void 0 : `error`,
                }),
              }),
              `% in local currency amounts`,
            ],
          }),
        ],
      }),
      c.map((e, n) =>
        (0, z.jsxs)(
          R.Fragment,
          {
            children: [
              n > 0 && (0, z.jsx)(Jr, { size: `4`, marginY: `6` }),
              (0, z.jsx)(ul, {
                strTitle: fl[e.eConvertMethod] ?? `Unknown`,
                rgRows: e.rgRows,
                launchFXRates: e.launchFXRates,
                currentFXRates: t,
                flSignificantPercentDiff: s,
                bCompareToCNY: e.eConvertMethod === 1,
              }),
            ],
          },
          e.eConvertMethod,
        ),
      ),
      (0, z.jsx)(dl, { currentFXRates: t, latestPricingMultiplierSet: n }),
    ],
  });
}
var ml = `_8nPW5oRGHpc-`,
  hl = `D8BFNdXtMLw-`,
  gl = `gGAJ9XPNso0-`,
  _l = `sojDRJx02y4-`,
  vl = `leALpWLb3xU-`,
  yl = `y2P4m13xtgo-`,
  bl = `q5O0szsUKuo-`,
  xl = `MPNwTHn0eEg-`,
  Sl = `eJRzCYWeq8g-`,
  Cl = `QJNLkKaa9I4-`,
  wl = `a6Rb6j63v7o-`,
  Tl = `H9M3RtkI--s-`,
  El = `wjYQ5CXuaew-`,
  Dl = `AYWb5sTbnZM-`,
  Ol = `A7l-U7vZNUk-`,
  kl = `n1o--6tc3YY-`,
  Al = `RNcWqFf972U-`,
  jl = `pYzjiD2uguo-`,
  Ml = `dDcaMxYKDUI-`,
  Nl = `Zr9MshfNwDo-`,
  Pl = `_9CFrsSY6uNk-`,
  Fl = `0`,
  Il = `1`,
  Ll = `2`,
  K = `3`,
  q = `4`;
function Rl(e) {
  return !!e && Object.values(e).some((e) => e && e.trim().length !== 0);
}
function zl(e) {
  switch (e.kind) {
    case Fl:
      return A(`#StoreAdmin_PurchaseOptionsOrder_InvalidKindError`);
    case K:
      return Rl(e.header)
        ? null
        : A(`#StoreAdmin_PurchaseOptionsOrder_MissingHeaderError`);
    case Il:
      return e.package_id
        ? null
        : A(`#StoreAdmin_PurchaseOptionsOrder_MissingPackageError`);
    case Ll:
      return e.bundle_id
        ? null
        : A(`#StoreAdmin_PurchaseOptionsOrder_MissingBundleError`);
    case q:
      return Rl(e.dropdown_title)
        ? !e.dropdown_items || e.dropdown_items.length < 2
          ? A(`#StoreAdmin_PurchaseOptionsOrder_MissingDropdownItemsError`)
          : null
        : A(`#StoreAdmin_PurchaseOptionsOrder_MissingDropdownTitleError`);
  }
}
var Bl = (0, R.createContext)(null);
function Vl(e, t) {
  if (e.length === 0) return !1;
  for (let n of e)
    switch (n.kind) {
      case Ll:
        return !1;
      case K:
        continue;
      case Fl:
        return !1;
      case Il:
        return t.includes(n.package_id);
      case q:
        return (
          n.dropdown_items &&
          n.dropdown_items.length > 0 &&
          n.dropdown_items[0].kind === `package` &&
          t.includes(n.dropdown_items[0].package_id)
        );
    }
  return !1;
}
function Hl(e) {
  let {
      appid: t,
      rgBaseGamePackageIds: n,
      rgAllBundles: r,
      rgAllPackages: i,
      rgValidLanguages: a,
    } = e,
    [o, s] = (0, R.useState)(e.bManualPurchaseOptionsOrder),
    [c, l] = (0, R.useState)(e.rgPurchaseOptionsOrder),
    [u, d] = (0, R.useMemo)(() => {
      let e = new Set(),
        t = new Set();
      for (let n of c)
        switch (n.kind) {
          case Il:
            t.add(n.package_id);
            break;
          case Ll:
            e.add(n.bundle_id && n.bundle_id);
            break;
          case q:
            for (let e of n.dropdown_items ?? []) t.add(e.package_id);
        }
      return [
        i
          .filter((e) => !t.has(e.packageid))
          .map((e) => ({
            value: e.packageid,
            label: A(
              `#StoreAdmin_PurchaseOptionsOrder_NameWithId`,
              e.name,
              e.packageid,
            ),
          })),
        r
          .filter((t) => !e.has(t.bundleid))
          .map((e) => ({
            value: e.bundleid,
            label: A(
              `#StoreAdmin_PurchaseOptionsOrder_NameWithId`,
              e.name,
              e.bundleid,
            ),
          })),
      ];
    }, [r, i, c]),
    f = (0, R.useMemo)(
      () => a.map((e) => ({ value: e, label: A(`#Language_${e}`) })),
      [a],
    ),
    p = n.length === 0 || Vl(c, n),
    m = {
      appid: t,
      rgUnusedBundles: d,
      rgUnusedPackages: u,
      rgValidLanguages: f,
      bHasErrors: c.some((e) => zl(e) !== null) || !p,
      rgAllPackages: i,
      rgAllBundles: r,
    };
  return (0, z.jsxs)(`div`, {
    className: wl,
    children: [
      (0, z.jsx)(`h2`, {
        children: A(`#StoreAdmin_PurchaseOptionsOrder_Title`),
      }),
      (0, z.jsx)(`p`, {
        children: A(`#StoreAdmin_PurchaseOptionsOrder_Description`),
      }),
      (0, z.jsxs)(`div`, {
        className: Tl,
        children: [
          (0, z.jsx)(Be, { value: o, onChange: (e) => s(e) }),
          (0, z.jsx)(`div`, {
            className: void 0,
            children: A(`#StoreAdmin_PurchaseOptionsOrder_ToggleLabel`),
          }),
          (0, z.jsx)(`input`, {
            type: `hidden`,
            name: `app[purchase_options_order][method]`,
            value: o ? `manual` : `original`,
          }),
        ],
      }),
      (0, z.jsxs)(Bl.Provider, {
        value: m,
        children: [
          o &&
            (0, z.jsxs)(z.Fragment, {
              children: [
                !p &&
                  (0, z.jsxs)(`div`, {
                    className: `wjYQ5CXuaew-`,
                    children: [
                      (0, z.jsx)(le, { className: `AYWb5sTbnZM-` }),
                      A(
                        `#StoreAdmin_PurchaseOptionsOrder_FirstItemMustBeBaseGame`,
                      ),
                      `\xA0 `,
                      n.join(`, `),
                    ],
                  }),
                (0, z.jsx)(Ql, {
                  appid: e.appid,
                  items: c,
                  setItems: l,
                  component: Gl,
                  noItemsPlaceholder: (0, z.jsx)(`p`, {
                    className: `JieVCTtA-aE-`,
                    children: A(
                      `#StoreAdmin_PurchaseOptionsOrder_NoPurchaseOptionsPlaceholder`,
                    ),
                  }),
                  emptyItem: () => ({ kind: Fl }),
                  addText: A(`#StoreAdmin_PurchaseOptionsOrder_Add`),
                }),
              ],
            }),
          (0, z.jsx)(Ul, {
            rgOptions: c,
            rgOriginalOptions: e.rgPurchaseOptionsOrder,
          }),
        ],
      }),
    ],
  });
}
function Ul(e) {
  let { rgOptions: t, rgOriginalOptions: n } = e;
  if ((0, R.useContext)(Bl).bHasErrors) return null;
  let r = [];
  for (let e = 0; e < Math.max(t.length, n.length); e++)
    e < t.length
      ? r.push(
          (0, z.jsx)(
            `div`,
            {
              children: (0, z.jsx)(Wl, {
                option: t[e],
                originalOption: n[e] ?? null,
                index: e,
              }),
            },
            e,
          ),
        )
      : r.push(
          (0, z.jsx)(
            `input`,
            {
              type: `hidden`,
              name: `app[purchase_options_order][order][${e}]`,
              value: ``,
            },
            e,
          ),
        );
  return (0, z.jsx)(z.Fragment, { children: r });
}
function Wl(e) {
  let { option: t, originalOption: n, index: r } = e,
    i = `app[purchase_options_order][order][${r}]`;
  if (
    (0, R.useContext)(Bl).bHasErrors ||
    !n ||
    (t.kind === n.kind && t.kind !== q && t.kind !== K)
  )
    return null;
  if (t.kind === q && n.kind === q) {
    let e = [];
    if (t.dropdown_items.length < n.dropdown_items.length)
      for (let r = t.dropdown_items.length; r < n.dropdown_items.length; r++)
        e.push(
          (0, z.jsx)(`input`, {
            type: `hidden`,
            name: `${i}[dropdown_items][${r}]`,
            value: ``,
          }),
        );
    for (let [r, a] of Object.entries(n.dropdown_title ?? {}))
      a.trim().length !== 0 &&
        ((t.dropdown_title && t.dropdown_title[r].trim().length > 0) ||
          e.push(
            (0, z.jsx)(`input`, {
              type: `hidden`,
              name: `${i}[dropdown_title][${r}]`,
              value: ``,
            }),
          ));
    for (let [r, a] of Object.entries(n.description ?? {}))
      a.trim().length !== 0 &&
        ((t.description && t.description[r].trim().length > 0) ||
          e.push(
            (0, z.jsx)(`input`, {
              type: `hidden`,
              name: `${i}[description][${r}]`,
              value: ``,
            }),
          ));
    return (0, z.jsx)(z.Fragment, { children: e });
  }
  if (t.kind === K && n.kind === K) {
    let e = [];
    for (let [r, a] of Object.entries(n.header ?? {}))
      a.trim().length !== 0 &&
        ((t.header && t.header[r].trim().length > 0) ||
          e.push(
            (0, z.jsx)(`input`, {
              type: `hidden`,
              name: `${i}[header][${r}]`,
              value: ``,
            }),
          ));
    return (0, z.jsx)(z.Fragment, { children: e });
  }
  switch (n.kind) {
    case Il:
      return (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `${i}[package_id]`,
        value: ``,
      });
    case Ll:
      return (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `${i}[bundle_id]`,
        value: ``,
      });
    case K:
      return (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `${i}[header]`,
        value: ``,
      });
    case q:
      return (0, z.jsxs)(z.Fragment, {
        children: [
          (0, z.jsx)(`input`, {
            type: `hidden`,
            name: `${i}[dropdown_title]`,
            value: ``,
          }),
          (0, z.jsx)(`input`, {
            type: `hidden`,
            name: `${i}[description]`,
            value: ``,
          }),
          n.dropdown_items?.map((e, t) =>
            (0, z.jsx)(
              `input`,
              { type: `hidden`, name: `${i}[dropdown_items][${t}]`, value: `` },
              t,
            ),
          ),
        ],
      });
    case Fl:
      return null;
  }
}
function Gl(e) {
  let { index: t, item: n, setItem: r, removeItem: i } = e,
    a = (0, R.useContext)(Bl),
    o = (e) => {
      let t = structuredClone(n);
      (t.kind = e.target.value), r(t);
    },
    s = [
      { value: Il, label: A(`#StoreAdmin_PurchaseOptionsOrder_Package`) },
      { value: Ll, label: A(`#StoreAdmin_PurchaseOptionsOrder_Bundle`) },
      { value: K, label: A(`#StoreAdmin_PurchaseOptionsOrder_Header`) },
      { value: q, label: A(`#StoreAdmin_PurchaseOptionsOrder_Dropdown`) },
    ],
    c;
  switch (n.kind) {
    case Fl:
      c = (0, z.jsx)(ql, { item: n, index: t });
      break;
    case Il:
      c = (0, z.jsx)(Jl, { item: n, setItem: r, index: t });
      break;
    case Ll:
      c = (0, z.jsx)(Yl, { item: n, setItem: r, index: t });
      break;
    case K:
      c = (0, z.jsx)(Xl, { item: n, setItem: r, index: t });
      break;
    case q:
      c = (0, z.jsx)(Zl, { item: n, setItem: r, index: t });
  }
  return (0, z.jsxs)(`div`, {
    className: vl,
    children: [
      !a.bHasErrors &&
        (0, z.jsx)(`input`, {
          type: `hidden`,
          name: `app[purchase_options_order][order][${t}][kind]`,
          value: n.kind,
        }),
      (0, z.jsxs)(`div`, {
        className: yl,
        children: [
          (0, z.jsxs)(`select`, {
            onChange: o,
            value: n.kind,
            children: [
              (0, z.jsx)(`option`, { hidden: !0, value: Fl }),
              s.map((e, t) =>
                (0, z.jsx)(`option`, { value: e.value, children: e.label }, t),
              ),
            ],
          }),
          (0, z.jsx)(`a`, {
            className: bl,
            onClick: i,
            children: A(`#StoreAdmin_PurchaseOptionsOrder_Remove`),
          }),
        ],
      }),
      (0, z.jsx)(`div`, { className: xl, children: c }),
    ],
  });
}
function Kl(e) {
  return e.message === null
    ? null
    : (0, z.jsxs)(`div`, {
        className: El,
        children: [(0, z.jsx)(le, { className: Dl }), e.message],
      });
}
function ql(e) {
  let t = zl(e.item);
  return (0, z.jsx)(z.Fragment, { children: (0, z.jsx)(Kl, { message: t }) });
}
function Jl(e) {
  let { item: t, index: n, setItem: r } = e,
    i = (0, R.useContext)(Bl),
    a = (e) => {
      let n = structuredClone(t);
      (n.package_id = e.value), r(n);
    },
    o = i.rgAllPackages.find((e) => e.packageid === t.package_id),
    s = {
      value: t.package_id,
      label: o ? o.name : A(`#StoreAdmin_PurchaseOptionsOrder_Loading`),
    };
  return (0, z.jsxs)(`div`, {
    className: Ol,
    children: [
      (0, z.jsx)(Kl, { message: zl(t) }),
      (0, z.jsx)(rr._default, {
        className: `react-select-container`,
        classNamePrefix: `react-select`,
        isSearchable: !0,
        isMulti: !1,
        name: i.bHasErrors
          ? void 0
          : `app[purchase_options_order][order][${n}][package_id]`,
        placeholder: A(`#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder`),
        options: i.rgUnusedPackages,
        value: s,
        onChange: a,
      }),
    ],
  });
}
function Yl(e) {
  let t = (0, R.useContext)(Bl),
    { item: n, setItem: r, index: i } = e,
    a = (e) => {
      let t = structuredClone(n);
      (t.bundle_id = e.value), r(t);
    },
    o;
  if (n.bundle_id) {
    let e = t.rgAllBundles.find((e) => e.bundleid === n.bundle_id);
    o = {
      value: n.bundle_id,
      label: A(
        `#StoreAdmin_PurchaseOptionsOrder_NameWithId`,
        e.name,
        n.bundle_id,
      ),
    };
  }
  return (0, z.jsxs)(`div`, {
    className: void 0,
    children: [
      (0, z.jsx)(Kl, { message: zl(n) }),
      (0, z.jsx)(rr._default, {
        className: `react-select-container`,
        classNamePrefix: `react-select`,
        isSearchable: !0,
        isMulti: !1,
        value: o,
        name: t.bHasErrors
          ? void 0
          : `app[purchase_options_order][order][${i}][bundle_id]`,
        placeholder: A(`#StoreAdmin_PurchaseOptionsOrder_BundlePlaceholder`),
        options: t.rgUnusedBundles,
        onChange: a,
      }),
    ],
  });
}
function Xl(e) {
  let t = (0, R.useContext)(Bl),
    { index: n, item: r, setItem: i } = e,
    [a, o] = (0, R.useState)(`english`),
    s = (r.header && r.header[a]) || ``;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(Kl, { message: zl(r) }),
      (0, z.jsxs)(`div`, {
        className: Sl,
        children: [
          (0, z.jsx)(`input`, {
            type: `hidden`,
            value: K,
            name: `app[purchase_options_order][order][${n}][kind]`,
          }),
          (0, z.jsx)(`input`, {
            type: `text`,
            onInput: (e) => {
              let t = e.target.value,
                n = structuredClone(r);
              n.header === void 0 && (n.header = {}), (n.header[a] = t), i(n);
            },
            value: s,
            name: `app[purchase_options_order][order][${n}][header][${a}]`,
            className: Cl,
            placeholder: `Header text`,
          }),
          t.rgValidLanguages.map((e, t) =>
            e.value === a
              ? null
              : r.header && r.header[e.value]
                ? (0, z.jsx)(
                    `input`,
                    {
                      type: `hidden`,
                      name: `app[purchase_options_order][order][${n}][header][${e.value}]`,
                      value: r.header[e.value],
                    },
                    t,
                  )
                : null,
          ),
          (0, z.jsx)(`select`, {
            value: a,
            onChange: (e) => {
              let t = e.target.value;
              o(t);
            },
            className: void 0,
            children: t.rgValidLanguages.map((e, t) =>
              (0, z.jsx)(`option`, { value: e.value, children: e.label }, t),
            ),
          }),
        ],
      }),
    ],
  });
}
function Zl(e) {
  let t = (0, R.useContext)(Bl),
    { item: n, setItem: r, index: i } = e,
    [a, o] = (0, R.useState)(`english`),
    [s, c] = (0, R.useState)(`english`),
    l = (e) => {
      let t = structuredClone(n);
      (t.dropdown_title ||= {}), (t.dropdown_title[a] = e.target.value), r(t);
    },
    u = (e) => {
      let t = structuredClone(n);
      (t.description ||= {}), (t.description[s] = e.target.value), r(t);
    },
    d = (e) => {
      let t = structuredClone(n);
      t.dropdown_items ||= [];
      let i = { kind: `package`, package_id: e.value[1] };
      t.dropdown_items.push(i), r(t);
    },
    f = t.rgUnusedPackages.map((e) => ({
      value: [`package`, e.value],
      label: e.label,
    }));
  return (0, z.jsxs)(`div`, {
    className: kl,
    children: [
      (0, z.jsx)(Kl, { message: zl(n) }),
      (0, z.jsxs)(`div`, {
        className: Al,
        children: [
          (0, z.jsx)(`label`, {
            children: A(`#StoreAdmin_PurchaseOptionsOrder_DropdownTitleLabel`),
          }),
          (0, z.jsx)(`input`, {
            type: `text`,
            className: jl,
            name: `app[purchase_options_order][order][${i}][dropdown_title][${a}]`,
            value: (n.dropdown_title && n.dropdown_title[a]) || ``,
            placeholder: A(
              `#StoreAdmin_PurchaseOptionsOrder_DropdownTitlePlaceholder`,
            ),
            onChange: l,
          }),
          t.rgValidLanguages.map((e, t) =>
            e.value === a
              ? null
              : n.dropdown_title &&
                  n.dropdown_title[e.value] &&
                  n.dropdown_title[e.value].trim().length > 0
                ? (0, z.jsx)(
                    `input`,
                    {
                      type: `hidden`,
                      name: `app[purchase_options_order][order][${i}][dropdown_title][${e.value}]`,
                      value: n.dropdown_title[e.value],
                    },
                    t,
                  )
                : null,
          ),
          (0, z.jsx)(`select`, {
            value: a,
            onChange: (e) => o(e.target.value),
            className: void 0,
            children: t.rgValidLanguages.map((e, t) =>
              (0, z.jsx)(`option`, { value: e.value, children: e.label }, t),
            ),
          }),
        ],
      }),
      (0, z.jsxs)(`div`, {
        className: Ml,
        children: [
          (0, z.jsx)(`label`, {
            children: A(
              `#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionLabel`,
            ),
          }),
          (0, z.jsx)(`select`, {
            value: s,
            onChange: (e) => c(e.target.value),
            className: void 0,
            children: t.rgValidLanguages.map((e, t) =>
              (0, z.jsx)(`option`, { value: e.value, children: e.label }, t),
            ),
          }),
        ],
      }),
      (0, z.jsx)(`input`, {
        type: `text`,
        className: Nl,
        name: `app[purchase_options_order][order][${i}][description][${s}]`,
        value: (n.description && n.description[s]) || ``,
        onChange: u,
        placeholder: A(
          `#StoreAdmin_PurchaseOptionsOrder_DropdownDescriptionPlaceholder`,
        ),
      }),
      t.rgValidLanguages.map((e, t) =>
        e.value === s
          ? null
          : n.description &&
              n.description[e.value] &&
              n.description[e.value].trim().length > 0
            ? (0, z.jsx)(
                `input`,
                {
                  type: `hidden`,
                  name: `app[purchase_options_order][order][${i}][description][${e.value}]`,
                  value: n.description[e.value],
                },
                t,
              )
            : null,
      ),
      (0, z.jsxs)(`div`, {
        className: Pl,
        children: [
          (0, z.jsx)(`label`, {
            children: A(`#StoreAdmin_PurchaseOptionsOrder_DropdownItemsLabel`),
          }),
          (0, z.jsx)(rr._default, {
            className: `react-select-container`,
            classNamePrefix: `react-select`,
            isSearchable: !0,
            isMulti: !1,
            placeholder: A(
              `#StoreAdmin_PurchaseOptionsOrder_PackagePlaceholder`,
            ),
            options: f,
            onChange: d,
            controlShouldRenderValue: !1,
          }),
          (0, z.jsx)(ir, {
            render: (e) => {
              if (e.package_id) {
                let n = t.rgAllPackages.find(
                  (t) => t.packageid === e.package_id,
                );
                return (0, z.jsx)(`div`, {
                  className: void 0,
                  children: (0, z.jsx)(`a`, {
                    href: `${h.PARTNER_BASE_URL}store/packagelanding/${e.package_id}`,
                    children: A(
                      `#StoreAdmin_PurchaseOptionsOrder_NameWithId`,
                      n.name,
                      e.package_id,
                    ),
                  }),
                });
              }
              if (e.bundle_id) {
                let n = t.rgAllBundles.find((t) => t.bundleid === e.bundle_id);
                return (0, z.jsx)(`div`, {
                  className: void 0,
                  children: (0, z.jsx)(`a`, {
                    href: `${h.PARTNER_BASE_URL}bundles/view/${e.bundle_id}`,
                    children: A(
                      `#StoreAdmin_PurchaseOptionsOrder_NameWithId`,
                      n.name,
                      e.bundle_id,
                    ),
                  }),
                });
              }
              return null;
            },
            onDelete: (e) => {
              let t = structuredClone(n);
              (t.dropdown_items ||= []), t.dropdown_items.splice(e, 1), r(t);
            },
            onMove: (e, t) => {
              let i = structuredClone(n);
              i.dropdown_items ||= [];
              let [a] = i.dropdown_items.splice(e, 1);
              i.dropdown_items.splice(t, 0, a), r(i);
            },
            items: n.dropdown_items ?? [],
          }),
          (n.dropdown_items ?? []).map((e, t) =>
            (0, z.jsxs)(
              `div`,
              {
                children: [
                  (0, z.jsx)(`input`, {
                    type: `hidden`,
                    name: `app[purchase_options_order][order][${i}][dropdown_items][${t}][kind]`,
                    value: `package`,
                  }),
                  (0, z.jsx)(`input`, {
                    type: `hidden`,
                    name: `app[purchase_options_order][order][${i}][dropdown_items][${t}][package_id]`,
                    value: e.package_id,
                  }),
                ],
              },
              t,
            ),
          ),
        ],
      }),
    ],
  });
}
function Ql(e) {
  let {
      items: t,
      setItems: n,
      component: r,
      emptyItem: i,
      noItemsPlaceholder: a,
      addText: o,
    } = e,
    s = (e) => () => {
      if (e === 0) return;
      let r = [...t],
        [i] = r.splice(e, 1);
      r.splice(e - 1, 0, i), n(r);
    },
    c = (e) => () => {
      if (e === t.length - 1) return;
      let r = [...t],
        [i] = r.splice(e, 1);
      r.splice(e + 1, 0, i), n(r);
    },
    l = () => (n(t.concat([i()])), !1),
    u = (e) => (r) => {
      let i = [...t];
      (i[e] = r), n(i);
    },
    d = (e) => () => {
      let r = [...t];
      r.splice(e, 1), n(r);
    };
  return (0, z.jsxs)(`div`, {
    className: ml,
    children: [
      t.length > 0 &&
        t.map((e, t) =>
          (0, z.jsx)(
            $l,
            {
              index: t,
              item: e,
              setItem: u(t),
              removeItem: d(t),
              component: r,
              moveUp: s(t),
              moveDown: c(t),
            },
            `reorderable-` + t,
          ),
        ),
      t.length === 0 && a,
      (0, z.jsx)(`a`, { onClick: l, children: o }),
    ],
  });
}
function $l(e) {
  let {
    index: t,
    item: n,
    setItem: r,
    moveUp: i,
    moveDown: a,
    removeItem: o,
  } = e;
  return (0, z.jsxs)(`div`, {
    className: hl,
    children: [
      (0, z.jsxs)(`div`, {
        className: gl,
        children: [
          (0, z.jsx)(`div`, { onClick: () => i(), children: `▲` }),
          (0, z.jsx)(`div`, { onClick: () => a(), children: `▼` }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: _l,
        children: (0, z.jsx)(e.component, {
          index: t,
          item: n,
          setItem: r,
          removeItem: o,
        }),
      }),
    ],
  });
}
var eu = `vZHzprwxhsg-`,
  tu = `CptO57fOS6U-`,
  nu = `PBHL2qey-s8-`,
  ru = { include_assets: !0, include_basic_info: !0 };
function iu(e) {
  let { appid: t } = e,
    [n] = In(t, ru),
    r = ht(),
    i = n?.GetAssets();
  return !n || !t || !i
    ? null
    : (0, z.jsx)(`div`, {
        className: eu,
        children: (0, z.jsx)(`div`, {
          className: tu,
          children: (0, z.jsxs)(`a`, {
            href: cn(n.GetStorePageURL(), r),
            children: [
              (0, z.jsx)(`img`, { src: i.GetSmallCapsuleURL() }),
              (0, z.jsxs)(`div`, {
                className: nu,
                children: [n.GetShortDescription(), ` `],
              }),
            ],
          }),
        }),
      });
}
function au(e) {
  let {
      text: t,
      placeholderToken: n,
      kvName: r,
      onChangeText: i,
      bOnlyDisplay: a,
      rgRealms: o,
      className: s,
    } = e,
    c = vn(),
    l = et.GetLanguageListForRealms(o),
    u = [];
  r &&
    l.forEach((e) => {
      u.push(
        (0, z.jsx)(
          `input`,
          {
            type: `hidden`,
            name: `${r}[${ct(e, `english`)}]`,
            value: Ct(t, e),
          },
          r + `_` + e,
        ),
      );
    });
  let d = Ct(t, c) || ``;
  return (0, z.jsxs)(`div`, {
    className: s,
    children: [
      a
        ? (0, z.jsx)(`div`, { children: d || (0, z.jsx)(`i`, { children: n }) })
        : (0, z.jsx)(`input`, {
            type: `text`,
            placeholder: A(n || `#KVInputBox_Default`),
            value: d,
            onChange: (e) => i(e.currentTarget.value, c),
          }),
      u,
    ],
  });
}
var ou = `EV26XGJ0bfw-`,
  su = `S-FF-anRU6U-`,
  cu = `J1B9T7QTEZ4-`,
  lu = `u7YYJD07Y7I-`,
  uu = `YwOglbSI-9o-`,
  du = `jRtkH99oVXc-`,
  fu = `_2Kw0vRVMD7I-`,
  pu = `ZF5GqmNvp70-`,
  mu = `C-hJ8WEOm8s-`,
  hu = `_7d-6-UUePSY-`,
  gu = `YuZ3Jp276RI-`,
  _u = `yOj-PKUuZp8-`,
  vu = `Tso4jy9-TJc-`,
  yu = `K8rSblffGIQ-`,
  bu = `LTIsCl4TZRE-`,
  xu = `-uU-N3t0Q8g-`,
  Su = `mzdUmT7SEtk-`,
  Cu = `fXqFM2N4HKA-`,
  wu = class e {
    m_mapAppIDToDLCs = new Map();
    m_mapAppIDToSoundTracks = new Map();
    m_mapPromise = new Map();
    GetDLCForAppID(e) {
      return this.m_mapAppIDToDLCs.get(e);
    }
    GetSoundTracksForAppID(e) {
      return this.m_mapAppIDToSoundTracks.get(e);
    }
    async LoadDLCAndSoundTracksForAppID(e, t) {
      return (
        this.m_mapPromise.has(e) ||
          this.m_mapPromise.set(
            e,
            this.InternalLoadDLCAndSoundTracksForAppID(e, t),
          ),
        this.m_mapPromise.get(e)
      );
    }
    async InternalLoadDLCAndSoundTracksForAppID(e, t) {
      if (!this.m_mapAppIDToDLCs.has(e) && e != 0)
        try {
          let n = { origin: self.origin, cc: h.COUNTRY || `US`, l: h.LANGUAGE },
            r = ``;
          r =
            s() == `partner`
              ? `${h.PARTNER_BASE_URL}seasonpass/ajaxgetreleasedorupcomingdlc?parentappid=${e}`
              : h.STORE_BASE_URL + `dlc/` + e + `/ajaxgetdlclist`;
          let i = await H.default.get(r, { params: n, cancelToken: t?.token }),
            a = [];
          i.data.dlcs &&
            i.data.dlcs.forEach((e) => {
              a.push({
                appid: e.appid,
                name: e.name,
                is_released_somewhere: !!e.is_released_somewhere,
              });
            }),
            this.m_mapAppIDToDLCs.set(e, a),
            (a = []),
            i.data.soundtracks &&
              i.data.soundtracks.forEach((e) => {
                a.push({
                  appid: e.appid,
                  name: e.name,
                  is_released_somewhere: !!e.is_released_somewhere,
                });
              }),
            this.m_mapAppIDToSoundTracks.set(e, a);
        } catch (t) {
          let n = I(t);
          console.error(
            `LoadDLCAndSoundTracksForAppID for appid: ` +
              e +
              ` hit: ` +
              n.strErrorMsg,
            n,
          );
        }
      return {
        dlcs: this.m_mapAppIDToDLCs.has(e) ? this.m_mapAppIDToDLCs.get(e) : [],
        soundtracks: this.m_mapAppIDToSoundTracks.has(e)
          ? this.m_mapAppIDToSoundTracks.get(e)
          : [],
      };
    }
    static s_Singleton;
    static Get() {
      return (e.s_Singleton ||= new e()), e.s_Singleton;
    }
    constructor() {
      ie(this);
    }
  };
function Tu(e) {
  let [t, n] = (0, R.useState)(e),
    [r, i] = (0, R.useState)(wu.Get().GetDLCForAppID(t));
  return (
    (0, R.useEffect)(() => {
      e &&
        (e != t || !r) &&
        wu
          .Get()
          .LoadDLCAndSoundTracksForAppID(t, null)
          .then((t) => {
            i(t.dlcs), n(e);
          });
    }, [t, e, r]),
    r
  );
}
function Eu(e) {
  let [t, n] = (0, R.useState)(e),
    [r, i] = (0, R.useState)(wu.Get().GetSoundTracksForAppID(t));
  return (
    (0, R.useEffect)(() => {
      e &&
        (e != t || !r) &&
        wu
          .Get()
          .LoadDLCAndSoundTracksForAppID(t, null)
          .then((t) => {
            i(t.soundtracks), n(e);
          });
    }, [t, e, r]),
    r
  );
}
function Du(t) {
  let {
      appid: n,
      setAppID: r,
      rgExcludeAppIDs: i,
      seasonPassID: a,
      bOnlyShowReleaseDLC: o,
      strLocalizedLabel: s,
      strLocalizedTooltip: c,
      fnResetAppID: l,
    } = t,
    u = Tu(a.parentAppID),
    d = Eu(a.parentAppID),
    f = (0, R.useMemo)(
      () => [
        ...(u?.filter((e) => !o || !!e.is_released_somewhere) || []),
        ...(d?.filter((e) => !o || !!e.is_released_somewhere) || []),
      ],
      [u, d, o],
    ),
    p = (0, R.useMemo)(
      () => f?.filter((e) => !i || !i.includes(e.appid)),
      [f, i],
    ),
    m = (0, R.useMemo)(
      () =>
        p
          ? p.map((e) => ({
              label: (0, z.jsx)(ku, { appInfo: e }),
              data: e.appid,
            }))
          : [],
      [p],
    );
  return p
    ? m.length == 0 && o
      ? (0, z.jsx)(`div`, {
          className: e(wn, `ErrorCtn`),
          children: A(`#SeasonPass_NoDLC`),
        })
      : (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(me, {
              label: s || A(`#SeasonPass_ShipDLC`),
              tooltip: c || A(`#SeasonPass_ShipDLC_ttip`),
              selectedOption: n,
              onChange: (e) => r(e.data),
              rgOptions: m,
            }),
            !!(n && l) &&
              (0, z.jsx)(T, {
                onClick: l,
                children: A(`#SeasonPass_CustomerComingSoonDLC_clear`),
              }),
          ],
        })
    : (0, z.jsx)(sn, {
        size: `small`,
        position: `center`,
        string: A(`#Loading`),
      });
}
var Ou = { include_release: !0 };
function ku(e) {
  let { appInfo: t } = e,
    [n] = In(t.appid, Ou);
  return n
    ? (0, z.jsxs)(`span`, {
        children: [
          t.name,
          ` - (`,
          n.BIsComingSoon()
            ? A(`#SeasonPass_Customer_ComingSoon_Mark`)
            : w(n.GetReleaseDateRTime()),
          `)`,
        ],
      })
    : (0, z.jsx)(`span`, { children: t.name });
}
function Au(t) {
  let {
      mileStone: n,
      index: r,
      bCreate: i,
      bAppHasSteamChinaToolsEnabled: a,
      rgShippedMilestoneIDs: o,
    } = t,
    [s, c, l] = it(),
    u = R.useMemo(() => Le(a), [a]),
    d = R.useMemo(
      () => Tt(n?.milestone_desc || { english: `` }),
      [n?.milestone_desc],
    ),
    f = R.useMemo(
      () => [`seasonpass`, `commitments`, `` + r, `milestone_desc`],
      [r],
    ),
    p = yr(u, d, `app`, i ? void 0 : f);
  return (
    (0, R.useEffect)(() => {
      if (s) {
        let e = ft(p.strActiveLanguage, 0);
        yn.Get().SetCurEditLanguage(e);
      }
    }, [p.strActiveLanguage, s]),
    Ge(yn.Get().GetCallback(), (e) => {
      p.setActiveLanguage(ct(e));
    }),
    (0, z.jsxs)(`div`, {
      className: e(hu, cu),
      children: [
        s && (0, z.jsx)(ju, { hideModal: l, bCreate: i, ...t, ...p }),
        !i && p.rctHiddenInputs,
        (0, z.jsxs)(T, {
          onClick: c,
          children: [
            A(i ? `#SeasonPass_ItemNew` : `#Button_Edit`),
            i && (0, z.jsx)(O, { tooltip: A(`#SeasonPass_ItemNew_desc`) }),
          ],
        }),
      ],
    })
  );
}
function ju(e) {
  let {
      hideModal: t,
      seasonPassID: n,
      mileStone: r,
      milestoneID: i,
      onSave: a,
      strActiveLanguage: o,
      rgLanguages: s,
      rctLanguageSelect: c,
      mapValues: l,
      bAppHasSteamChinaToolsEnabled: u,
      bCreate: f,
      rgShippedMilestoneIDs: p,
    } = e,
    m = gn(),
    [h, g] = (0, R.useState)(r?.internal_desc || ``),
    [_, v] = (0, R.useState)(r?.expected_delivery || m + 86400),
    [ee, y] = (0, R.useState)(r?.display_format || `date_quarter`),
    [b, x] = (0, R.useState)(r?.localized_title || { english: `` }),
    [te] = (0, R.useState)(r?.milestone_desc || {}),
    [re, ie] = (0, R.useState)(r?.coming_soon_appid),
    [S, C] = (0, R.useState)(!!r?.backfilled_release),
    w = (0, R.useRef)(void 0),
    [ae, oe] = (0, R.useState)(!1),
    se = (0, R.useMemo)(
      () =>
        u
          ? [ne.k_ESteamRealmGlobal, ne.k_ESteamRealmChina]
          : [ne.k_ESteamRealmGlobal],
      [u],
    ),
    ce = A(r ? `#SeasonPass_Update` : `#SeasonPass_Create`),
    le = p?.includes(i);
  return (0, z.jsx)(M, {
    active: !0,
    children: (0, z.jsx)(k, {
      strTitle: ce,
      strDescription: A(`#SeasonPass_Create_desc`),
      bAllowFullSize: !0,
      bDisableBackgroundDismiss: !0,
      strOKButtonText: A(r ? `#Button_Update` : `#Button_Create`),
      bOKDisabled: b.english.length < 3,
      onOK: () => {
        let e = {};
        l.forEach((t, n) => {
          e[n] = t.Value;
        }),
          a({
            milestone_id: i,
            internal_desc: h,
            expected_delivery: _,
            submit_time: m,
            submit_accountid: d.accountid,
            display_format: ee,
            localized_title: b,
            milestone_desc: e,
            milestone_image: void 0,
            backfilled_release: S,
            coming_soon_appid: re,
          }),
          f && l.forEach((e, t) => l.get(t).Set(``)),
          t();
      },
      onCancel: () => {
        l.forEach((e, t) => {
          te?.[t] ? l.get(t).Set(te[t]) : l.get(t).Set(``);
        }),
          t();
      },
      children: (0, z.jsxs)(`div`, {
        className: _u,
        children: [
          (0, z.jsxs)(`h3`, {
            children: [
              A(`#SeasonPass_CustomerTitle`),
              (0, z.jsx)(`span`, {
                className: `DialogInputRequirementLabel`,
                children: A(`#Steamworks_Generic_Required`),
              }),
            ],
          }),
          (0, z.jsx)(`p`, { children: A(`#SeasonPass_CustomerSubtitle`) }),
          (0, z.jsx)(au, {
            text: b,
            className: bu,
            onChangeText: (e, t) => {
              Mt(b, t, e), x({ ...b });
            },
            kvName: void 0,
            rgRealms: se,
          }),
          (0, z.jsxs)(`h3`, {
            children: [
              A(`#SeasonPass_CustomerDescription_Title`),
              (0, z.jsx)(`span`, {
                className: `DialogInputRequirementLabel`,
                children: A(`#Steamworks_Generic_Required`),
              }),
            ],
          }),
          (0, z.jsx)(`p`, {
            children: A(`#SeasonPass_CustomerDescription_Subtitle`),
          }),
          (0, z.jsx)(`p`, {
            children: A(`#SeasonPass_CustomerDescription_Images`),
          }),
          (0, z.jsx)(Tr, {
            language: o,
            languages: s,
            editorType: `milestone`,
            rctToolbarControls: c,
            mapValues: l,
            rctAboveEditor: (0, z.jsx)(iu, { appid: r?.completed_appid || re }),
          }),
          !le &&
            (0, z.jsx)(Du, {
              appid: re,
              setAppID: ie,
              rgExcludeAppIDs: null,
              seasonPassID: n,
              strLocalizedLabel: A(`#SeasonPass_CustomerComingSoonDLC`),
              strLocalizedTooltip: A(`#SeasonPass_CustomerComingSoonDLC_ttip`),
            }),
          !le &&
            (0, z.jsxs)(`div`, {
              children: [
                (0, z.jsxs)(`div`, {
                  className: `_1nQGdj5fd04-`,
                  children: [
                    (0, z.jsxs)(`div`, {
                      children: [
                        (0, z.jsx)(`h3`, {
                          children: A(
                            S
                              ? `#SeasonPass_Backfill_date`
                              : `#SeasonPass_Delivery`,
                          ),
                        }),
                        (0, z.jsx)(`p`, {
                          children: A(
                            S
                              ? `#SeasonPass_Backfill_date_ttip`
                              : `#SeasonPass_Delivery_ttip`,
                          ),
                        }),
                        (0, z.jsx)(er, {
                          nEarliestTime: S ? 0 : m,
                          fnGetTimeToUpdate: () => _,
                          fnSetTimeToUpdate: v,
                          fnIsValidDateTime: () => (S ? _ < m : m < _),
                          strInvalidDateTimeLocalizedMsg: S
                            ? A(`#SeasonPass_BackFill_invalid_date`)
                            : void 0,
                        }),
                      ],
                    }),
                    !S &&
                      (0, z.jsxs)(`div`, {
                        children: [
                          (0, z.jsx)(`h3`, {
                            children: A(`#SeasonPass_CustomerDisplay`),
                          }),
                          (0, z.jsx)(`p`, {
                            children: A(`#SeasonPass_CustomerDisplay_ttip`),
                          }),
                          (0, z.jsx)(Yn, {
                            value: ee,
                            onChange: y,
                            rgComingSoonOptionOverride: Zn,
                            rtSteamReleaseDate: _,
                            bExpandedDisplay: !0,
                          }),
                        ],
                      }),
                  ],
                }),
                (0, z.jsx)(E, {
                  ref: w,
                  label: A(`#SeasonPass_Backfill_check`),
                  tooltip: A(`#SeasonPass_Backfill_check_ttip`),
                  onChange: (e) => {
                    let t = !(!e && _ < m);
                    oe(!t), t ? C(e) : w.current.SetChecked(!0, !1);
                  },
                  checked: S,
                }),
                ae &&
                  (0, z.jsx)(`div`, {
                    className: `n7RXDTH-Wf8-`,
                    children: A(`#SeasonPass_Backfill_warning`),
                  }),
              ],
            }),
          (0, z.jsx)(`br`, {}),
        ],
      }),
    }),
  });
}
function Mu(t) {
  let { milestoneID: n, rgPublishedMilestoneIDs: r, onDelete: i } = t,
    [a, o, s] = it();
  return !r || r?.includes(n)
    ? null
    : (0, z.jsxs)(`div`, {
        className: e(hu, cu),
        children: [
          (0, z.jsx)(M, {
            active: a,
            children: (0, z.jsx)(k, {
              strTitle: A(`#Button_Delete`),
              strDescription: A(`#Dialog_AreYouSure`),
              onOK: i,
              bDestructiveWarning: !0,
              bDisableBackgroundDismiss: !1,
              closeModal: s,
            }),
          }),
          (0, z.jsx)(T, { onClick: o, children: A(`#Button_Delete`) }),
        ],
      });
}
function Nu(e) {
  let {
      hideModal: t,
      inputMilestone: n,
      setCurrentMilestone: r,
      seasonPassID: i,
      rgExcludedAppIDs: a,
    } = e,
    o = !n.completed_appid,
    s = !n.completed_event_gid,
    [c, l] = (0, R.useState)(null),
    [u, f] = (0, R.useState)(null);
  return (0, z.jsx)(M, {
    active: !0,
    children: (0, z.jsxs)(k, {
      bAllowFullSize: !0,
      bDisableBackgroundDismiss: !0,
      strTitle: A(`#SeasonPass_PostShipLink`),
      strDescription: A(`#SeasonPass_PostShipLink_Desc`),
      closeModal: t,
      bOKDisabled: !c && !u,
      onOK: () => {
        let e = { ...n };
        o && c && (e.completed_appid = c),
          s && u && (e.completed_event_gid = u),
          r(e);
      },
      children: [
        o &&
          (0, z.jsxs)(`div`, {
            className: `Hpp3eg4SQiA-`,
            children: [
              (0, z.jsx)(C, { children: A(`#SeasonPass_UpdateLaunch_dlc`) }),
              (0, z.jsx)(Du, {
                appid: c,
                setAppID: l,
                rgExcludeAppIDs: a,
                seasonPassID: i,
                bOnlyShowReleaseDLC: !0,
              }),
            ],
          }),
        s &&
          (0, z.jsxs)(`div`, {
            className: `Hpp3eg4SQiA-`,
            children: [
              (0, z.jsxs)(C, {
                children: [
                  A(`#SeasonPass_UpdateLaunch_update`),
                  (0, z.jsx)(O, { tooltip: A(`#SeasonPass_AddLaunchEvent`) }),
                ],
              }),
              (0, z.jsx)(kt, {
                appid: i.parentAppID,
                selectedEventGID: u,
                fnSetUpdateEvent: (e, t) => f(t),
                bFilterOutDrafts: !0,
              }),
              !!d.is_support &&
                (0, z.jsx)(`div`, {
                  className: `u6DPgTclyv4-`,
                  children: (0, z.jsxs)(`div`, {
                    children: [`Selected GID: `, u],
                  }),
                }),
            ],
          }),
      ],
    }),
  });
}
var Pu = { include_release: !0, include_included_items: !0 };
function Fu(e) {
  let {
      inputMilestone: t,
      setCurrentMilestone: n,
      seasonPassID: r,
      rgAllMilestones: i,
      index: a,
      rgShippedMilestoneIDs: o,
    } = e,
    [s] = In(t.completed_appid, Pu),
    [c, l, u] = it(),
    [d, f, p] = it(),
    m = !!o.includes(t.milestone_id),
    g = !(!m || (t.completed_appid && t.completed_event_gid));
  return (0, z.jsxs)(`div`, {
    className: gu,
    children: [
      !!m &&
        (0, z.jsx)(z.Fragment, {
          children: (0, z.jsx)(`div`, {
            className: `UDkhgohXIGQ-`,
            children: `✓`,
          }),
        }),
      !!t.completed_appid &&
        (0, z.jsxs)(`a`, {
          href: `${h.STORE_BASE_URL}app/${t.completed_appid}`,
          target: `_blank`,
          children: [s?.GetName() || ``, ` (`, t.completed_appid, `)`],
        }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${a}][completed_appid]`,
        value: t.completed_appid ? t.completed_appid : ``,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${a}][completed_event_gid]`,
        value: t.completed_event_gid ? `` + t.completed_event_gid : ``,
      }),
      !!t.completed_event_gid &&
        (0, z.jsx)(`a`, {
          href: `${h.STORE_BASE_URL}news/app/${r.parentAppID}/view/${t.completed_event_gid}`,
          target: `_blank`,
          children: A(`#SeasonPass_ViewLaunchEvent`),
        }),
      !m &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            c &&
              (0, z.jsx)(Lu, {
                inputMilestone: t,
                setCurrentMilestone: n,
                rgExcludedAppIDs: Iu(i, r, t.milestone_id),
                seasonPassID: r,
                hideModal: u,
              }),
            (0, z.jsx)(T, {
              onClick: l,
              children: A(
                t.completed_appid ||
                  t.completed_event_gid ||
                  t.backfilled_release
                  ? `#SeasonPass_UpdateLaunch_Edit`
                  : `#SeasonPass_UpdateLaunch`,
              ),
            }),
          ],
        }),
      !!g &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            d &&
              (0, z.jsx)(Nu, {
                setCurrentMilestone: n,
                inputMilestone: t,
                hideModal: p,
                rgExcludedAppIDs: Iu(i, r, t.milestone_id),
                seasonPassID: r,
              }),
            (0, z.jsx)(Je, {
              toolTipContent: A(`#SeasonPass_PostShipLink_Button_ttip`),
              children: (0, z.jsxs)(T, {
                onClick: f,
                children: [
                  A(`#SeasonPass_PostShipLink_Button`),
                  (0, z.jsx)(O, { tooltip: void 0 }),
                ],
              }),
            }),
          ],
        }),
    ],
  });
}
function Iu(e, t, n) {
  let r = [];
  return (
    r.push(t.dlcAppID),
    e.forEach((e) => {
      e.milestone_id != n && e.completed_appid && r.push(e.completed_appid);
    }),
    r
  );
}
function Lu(t) {
  let {
      hideModal: n,
      inputMilestone: r,
      setCurrentMilestone: i,
      seasonPassID: a,
      rgExcludedAppIDs: o,
    } = t,
    [s, c] = (0, R.useState)(r.completed_appid),
    [l, u] = (0, R.useState)(r.completed_event_gid),
    [f, p] = (0, R.useState)(() => !!r.completed_appid),
    [m, g] = (0, R.useState)(!!r.completed_event_gid);
  return (0, z.jsx)(M, {
    active: !0,
    children: (0, z.jsx)(k, {
      bAllowFullSize: !0,
      bDisableBackgroundDismiss: !0,
      strTitle: qe(
        `#SeasonPass_UpdateLaunch_title`,
        r.localized_title?.[h.LANGUAGE] || r.localized_title?.english,
      ),
      strDescription: A(
        r.backfilled_release
          ? `#SeasonPass_UpdateLaunch_desc_backfill`
          : `#SeasonPass_UpdateLaunch_desc`,
      ),
      closeModal: n,
      bOKDisabled: f && !s,
      onOK: () => {
        i({ ...r, completed_appid: s, completed_event_gid: l });
      },
      children: (0, z.jsxs)(`div`, {
        className: e(vu),
        children: [
          (0, z.jsx)(`div`, {
            className: e(yu),
            children: (0, z.jsxs)(ue, {
              children: [
                (0, z.jsx)(Ee, {
                  children: A(`#SeasonPass_UpdateLaunch_radio_label`),
                }),
                (0, z.jsx)(Re, {
                  checked: !f,
                  onChange: (e) => e && p(!1),
                  label: A(`#SeasonPass_UpdateLaunch_radio_label_1`),
                }),
                (0, z.jsx)(Re, {
                  checked: f,
                  onChange: (e) => e && p(!0),
                  label: A(`#SeasonPass_UpdateLaunch_radio_label_2`),
                  tooltip: A(`#SeasonPass_UpdateLaunch_radio_label_2_ttip`),
                }),
              ],
            }),
          }),
          (0, z.jsx)(`hr`, {}),
          (0, z.jsx)(`br`, {}),
          !(f && !m) &&
            (0, z.jsxs)(`div`, {
              className: `Hpp3eg4SQiA-`,
              children: [
                (0, z.jsxs)(C, {
                  children: [
                    A(`#SeasonPass_UpdateLaunch_update`),
                    (0, z.jsx)(O, { tooltip: A(`#SeasonPass_AddLaunchEvent`) }),
                  ],
                }),
                (0, z.jsx)(kt, {
                  appid: a.parentAppID,
                  selectedEventGID: l,
                  fnSetUpdateEvent: (e, t) => u(t),
                  bFilterOutDrafts: !0,
                }),
                !!d.is_support &&
                  (0, z.jsx)(`div`, {
                    className: `u6DPgTclyv4-`,
                    children: (0, z.jsxs)(`div`, {
                      children: [`Selected GID: `, l],
                    }),
                  }),
              ],
            }),
          f &&
            (0, z.jsxs)(`div`, {
              className: `Hpp3eg4SQiA-`,
              children: [
                (0, z.jsx)(C, { children: A(`#SeasonPass_UpdateLaunch_dlc`) }),
                (0, z.jsx)(Du, {
                  appid: s,
                  setAppID: c,
                  rgExcludeAppIDs: o,
                  seasonPassID: a,
                  bOnlyShowReleaseDLC: !0,
                  fnResetAppID: () => {
                    p(!1), c(void 0);
                  },
                }),
              ],
            }),
          f &&
            !m &&
            (0, z.jsx)(`div`, {
              className: `Hpp3eg4SQiA-`,
              children: (0, z.jsx)(E, {
                label: A(`#SeaosnPass_OptionalEvents`),
                checked: m,
                onChange: (e) => g(e),
              }),
            }),
        ],
      }),
    }),
  });
}
function Ru(e) {
  let {
    seasonPassData: t,
    seasonPassID: n,
    rgPublishedMilestoneIDs: r,
    bAppHasSteamChinaToolsEnabled: i,
    fnDeleteMilestoneByID: a,
    rgShippedMilestoneIDs: o,
  } = e;
  return (0, z.jsxs)(`div`, {
    className: fu,
    children: [
      (0, z.jsx)(C, { children: A(`#SeasonPass_Milestone_table`) }),
      (0, z.jsxs)(`table`, {
        className: `landingTable`,
        children: [
          (0, z.jsx)(`thead`, {
            children: (0, z.jsxs)(`tr`, {
              children: [
                (0, z.jsx)(`th`, {
                  children: A(`#SeasonPass_Milestone_Title`),
                }),
                (0, z.jsx)(`th`, {}),
              ],
            }),
          }),
          (0, z.jsx)(`tbody`, {
            children: t?.commitments?.map((e, s) =>
              (0, z.jsx)(
                Bu,
                {
                  inputMilestone: e,
                  index: s,
                  seasonPassID: n,
                  rgAllMilestones: t.commitments,
                  bAppHasSteamChinaToolsEnabled: i,
                  rgPublishedMilestoneIDs: r,
                  rgShippedMilestoneIDs: o,
                  fnDeleteMilestone: () => a(e.milestone_id),
                },
                `row` + e.milestone_id,
              ),
            ),
          }),
        ],
      }),
    ],
  });
}
function zu(e) {
  let { milestone: t, index: n } = e;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][milestone_id]`,
        value: t ? t.milestone_id : void 0,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][internal_desc]`,
        value: t ? t.internal_desc : void 0,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][submit_time]`,
        value: t ? t.submit_time : void 0,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][submit_accountid]`,
        value: t ? t.submit_accountid : void 0,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][expected_delivery]`,
        value: t ? t.expected_delivery : void 0,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][display_format]`,
        value: t ? t.display_format : void 0,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][backfilled_release]`,
        value: t ? String(!!t.backfilled_release) : void 0,
      }),
      (0, z.jsx)(`input`, {
        type: `hidden`,
        name: `app[seasonpass][commitments][${n}][coming_soon_appid]`,
        value: t ? t.coming_soon_appid : void 0,
      }),
      !t &&
        (0, z.jsxs)(z.Fragment, {
          children: [
            (0, z.jsx)(`input`, {
              type: `hidden`,
              name: `app[seasonpass][commitments][${n}][localized_title]`,
              value: void 0,
            }),
            (0, z.jsx)(`input`, {
              type: `hidden`,
              name: `app[seasonpass][commitments][${n}][milestone_desc]`,
              value: void 0,
            }),
          ],
        }),
    ],
  });
}
function Bu(t) {
  let {
      inputMilestone: n,
      index: r,
      seasonPassID: i,
      rgAllMilestones: a,
      bAppHasSteamChinaToolsEnabled: o,
      rgPublishedMilestoneIDs: s,
      fnDeleteMilestone: c,
      rgShippedMilestoneIDs: l,
    } = t,
    [u, d] = (0, R.useState)(n),
    f = _n(),
    p = !!l.includes(u.milestone_id),
    m = !p && u.expected_delivery < f,
    h = (0, R.useMemo)(
      () =>
        o
          ? [ne.k_ESteamRealmGlobal, ne.k_ESteamRealmChina]
          : [ne.k_ESteamRealmGlobal],
      [o],
    ),
    g = vn(),
    _ = et.GetELanguageFallback(g);
  return (0, z.jsxs)(`tr`, {
    children: [
      (0, z.jsx)(`td`, {
        children: (0, z.jsxs)(`div`, {
          className: e({ [xu]: !0, [Su]: p }),
          children: [
            (0, z.jsx)(zu, { milestone: u, index: r }),
            (0, z.jsx)(au, {
              text: u.localized_title,
              className: void 0,
              onChangeText: null,
              kvName: `app[seasonpass][commitments][${r}][localized_title]`,
              bOnlyDisplay: !0,
              placeholderToken: A(
                `#SeasonPass_NoLang_Fallback`,
                A(`#Language_` + ct(g)),
                A(`#Language_` + ct(_)),
              ),
              rgRealms: h,
            }),
            p
              ? (0, z.jsx)(`div`, {
                  className: e(pu, mu),
                  children: A(`#SeasonPass_Released`),
                })
              : (0, z.jsx)(z.Fragment, {
                  children: u?.backfilled_release
                    ? (0, z.jsx)(`div`, {
                        className: Cu,
                        children: A(`#SeasonPass_Backfill_require_publish`),
                      })
                    : (0, z.jsxs)(`div`, {
                        className: e(pu),
                        children: [
                          (0, z.jsxs)(Ve, {
                            toolTipContent:
                              A(`#SeasonPass_Delivery`) +
                              `: ` +
                              w(u.expected_delivery) +
                              ` @ ` +
                              oe(u.expected_delivery),
                            children: [
                              A(`#SeasonPass_Coming`),
                              (0, z.jsx)(`br`, {}),
                              Ft(
                                u.display_format,
                                u.expected_delivery,
                                null,
                                !0,
                              ),
                            ],
                          }),
                          m &&
                            (0, z.jsx)(`div`, {
                              className: e(m ? `wizbFzhGtBc-` : void 0),
                              children: A(`#SeasonPass_PassDueNote`),
                            }),
                        ],
                      }),
                }),
          ],
        }),
      }),
      (0, z.jsx)(`td`, {
        children: (0, z.jsxs)(`div`, {
          className: du,
          children: [
            (0, z.jsx)(Fu, {
              inputMilestone: u,
              setCurrentMilestone: d,
              seasonPassID: i,
              rgAllMilestones: a,
              index: r,
              rgShippedMilestoneIDs: l,
            }),
            (0, z.jsx)(Au, {
              milestoneID: u.milestone_id,
              mileStone: u,
              onSave: d,
              index: r,
              bAppHasSteamChinaToolsEnabled: o,
              rgShippedMilestoneIDs: l,
              seasonPassID: i,
            }),
            (0, z.jsx)(Mu, {
              milestoneID: u.milestone_id,
              onDelete: c,
              rgPublishedMilestoneIDs: s,
            }),
          ],
        }),
      }),
    ],
  });
}
function Vu(e) {
  let {
      seasonPassID: t,
      seasonPassData: n,
      rgPublishedMilestoneIDs: r,
      rgShippedMilestoneIDs: i,
    } = e,
    [a, o] = (0, R.useState)(n || { commitments: [] }),
    { bAppHasSteamChinaToolsEnabled: s } = Er(),
    [c, l] = (0, R.useState)(n?.commitments?.length || 0),
    u = (0, R.useMemo)(() => {
      let e = 0;
      do e = Math.floor(Math.random() * 9e4) + 1e4;
      while (a?.commitments?.findIndex((t) => t.milestone_id == e) >= 0);
      return e;
    }, [a]),
    f = (0, R.useCallback)(
      (e) =>
        !!a.commitments?.some(
          (t) => At(t.localized_title, e) || At(t.milestone_desc, e),
        ),
      [a.commitments],
    ),
    p = [];
  if (c > a.commitments?.length)
    for (let e = a.commitments?.length; e < c; e++)
      p.push((0, z.jsx)(zu, { index: e, milestone: null }, e));
  return (0, z.jsxs)(`div`, {
    className: ou,
    children: [
      (0, z.jsx)(nr, { fnLangHasData: f }),
      (0, z.jsx)(Hu, {
        seasonPassID: t,
        nNextMilestoneID: u,
        index: a?.commitments?.length || 0,
        fnAppendSeasonPass: (e) => {
          o({ ...a, commitments: [...(a.commitments || []), e] }),
            l(Math.max(c, a.commitments ? a.commitments.length + 1 : 1));
        },
        bAppHasSteamChinaToolsEnabled: s,
        rgShippedMilestoneIDs: i,
      }),
      (0, z.jsx)(Uu, { seasonPassData: a, rgShippedMilestoneIDs: i }),
      (0, z.jsx)(Ru, {
        seasonPassID: t,
        seasonPassData: a,
        bAppHasSteamChinaToolsEnabled: s,
        rgPublishedMilestoneIDs: r,
        rgShippedMilestoneIDs: i,
        fnDeleteMilestoneByID: (e) => {
          let t = a.commitments.findIndex((t) => t.milestone_id == e);
          t >= 0 &&
            (a.commitments.splice(t, 1),
            o({ ...a, commitments: [...a.commitments] }));
        },
      }),
      p,
      !!d.is_support &&
        (0, z.jsx)(`div`, {
          className: `u6DPgTclyv4-`,
          children: (0, z.jsx)(T, {
            onClick: (e) =>
              Ke(
                (0, z.jsx)(k, {
                  strTitle: `Clear?`,
                  strDescription: `Are you sure?`,
                  onOK: () => o({ commitments: [] }),
                }),
                ge(e),
              ),
            children: `(VO) Clear All Milestones (in memory)`,
          }),
        }),
      (0, z.jsx)(`br`, {}),
      (0, z.jsx)(`br`, {}),
    ],
  });
}
function Hu(t) {
  let {
    seasonPassID: n,
    fnAppendSeasonPass: r,
    nNextMilestoneID: i,
    index: a,
    bAppHasSteamChinaToolsEnabled: o,
    rgShippedMilestoneIDs: s,
  } = t;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsxs)(`div`, {
        className: e(`instructions`),
        children: [
          (0, z.jsxs)(`div`, {
            className: e(`title2`),
            children: [
              A(`#SeasonPass_Title`),
              ` `,
              (0, z.jsx)(`span`, {
                className: `small`,
                children: (0, z.jsx)(`a`, {
                  href: `${h.PARTNER_BASE_URL}doc/store/seasonpass`,
                  target: `_blank`,
                  children: A(`#AssetRequest_General_SeeDocs`),
                }),
              }),
            ],
          }),
          (0, z.jsx)(`br`, { style: { clear: `left` } }),
          (0, z.jsx)(`div`, { className: `grayRule`, children: ` ` }),
          (0, z.jsxs)(`div`, {
            className: `instructions_table`,
            children: [
              (0, z.jsxs)(`div`, {
                className: `instructions_table_row`,
                children: [
                  (0, z.jsx)(`div`, {
                    className: `instructions_table_cell left`,
                    children: (0, z.jsx)(`strong`, {
                      children: A(`#Appmgmg_Generic_Title_Overview`),
                    }),
                  }),
                  (0, z.jsxs)(`div`, {
                    className: `instructions_table_cell`,
                    children: [
                      (0, z.jsx)(`p`, { children: A(`#SeasonPass_Desc`) }),
                      (0, z.jsx)(`p`, { children: A(`#SeasonPass_Desc2`) }),
                      (0, z.jsx)(`p`, { children: A(`#SeasonPass_Desc3`) }),
                    ],
                  }),
                ],
              }),
              (0, z.jsxs)(`div`, {
                className: `instructions_table_row`,
                children: [
                  (0, z.jsx)(`div`, {
                    className: `instructions_table_cell left`,
                    children: (0, z.jsx)(`strong`, {
                      children: A(`#Appmgmg_Generic_Title_Releasing`),
                    }),
                  }),
                  (0, z.jsx)(`div`, {
                    className: `instructions_table_cell`,
                    children: (0, z.jsxs)(`p`, {
                      children: [
                        ` `,
                        D(
                          `#SeasonPass_Desc_Releasing`,
                          (0, z.jsx)(`a`, {
                            href: `${h.PARTNER_BASE_URL}doc/store/seasonpass#release`,
                            target: `_blank`,
                          }),
                        ),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      (0, z.jsxs)(`div`, {
        className: uu,
        children: [
          (0, z.jsx)(`span`, { className: lu, children: (0, z.jsx)(tr, {}) }),
          (0, z.jsx)(`div`, {
            className: su,
            children: (0, z.jsx)(Au, {
              onSave: r,
              milestoneID: i,
              index: a,
              bCreate: !0,
              bAppHasSteamChinaToolsEnabled: o,
              rgShippedMilestoneIDs: s,
              seasonPassID: n,
            }),
          }),
        ],
      }),
    ],
  });
}
function Uu(e) {
  let { seasonPassData: t, rgShippedMilestoneIDs: n } = e,
    r = _n(),
    [i, a, o] = (0, R.useMemo)(() => {
      let e =
          t?.commitments?.filter(
            (e) => !e.completed_time && !n.includes(e.milestone_id),
          ) || [],
        i = e.filter(
          (e) => e.expected_delivery < r + 604800 && !e.backfilled_release,
        ),
        a = e.filter((e) => e.expected_delivery < r && !e.backfilled_release);
      return [e.length > 0, i.length > 0, a.length > 0];
    }, [t, r, n]);
  return i
    ? (0, z.jsx)(z.Fragment, {
        children:
          o &&
          (0, z.jsx)(`div`, {
            className: `wizbFzhGtBc-`,
            children: A(`#SeasonPass_PassDue`),
          }),
      })
    : null;
}
var Wu = `ZlgE-RXiZVA-`,
  Gu = `YLQlq21lYYY-`,
  Ku = `UuWHe0byT9Y-`,
  qu = `ksCbmUv2cR4-`;
function Ju(e) {
  let { rgSocialMedia: t } = e,
    [n, r] = R.useState(t ? [...t] : []),
    [i, a] = R.useState(n.length),
    o = R.useCallback(
      (e) => {
        e.length > i && a(e.length), r(e);
      },
      [i],
    );
  return (0, z.jsxs)(`div`, {
    children: [
      (0, z.jsx)(Yu, { ...e, rgSocialMediaItems: n, fnSetItems: o }),
      (0, z.jsx)(ed, { items: n, maxSeen: i }),
    ],
  });
}
function Yu(e) {
  let {
      rgSocialMediaItems: t,
      fnSetItems: n,
      rgSupportedSocialMediaTypes: r,
      rgValidationData: i,
    } = e,
    a = R.useMemo(
      () =>
        r
          .filter(
            (e) =>
              t.findIndex((t) => t.type === e.type) === -1 ||
              e.type === `qq` ||
              e.type === `qqlink`,
          )
          .map((e) => ({
            label: A(`#StoreAdmin_SocialMedia_Type_${e.type}`),
            data: e.type,
          }))
          .sort((e, t) => (e.label < t.label ? -1 : 1)),
      [r, t],
    ),
    o = (e) => {
      let r = t.slice();
      r.splice(e, 1), n(r);
    },
    s = (e, r) => {
      let i = t.slice();
      je(i, e, r), n(i);
    },
    c = (e, r) => {
      let i = t.map((t, n) => (n === e ? { ...t, link: r } : t));
      n(i);
    };
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(Xu, {
        options: a,
        onAddLink: (e) => {
          let r = t.slice();
          r.push({ type: e, link: `` }), n(r);
        },
      }),
      (0, z.jsx)(ir, {
        items: t,
        onDelete: o,
        onMove: s,
        render: (e, t) =>
          (0, z.jsx)(
            Qu,
            {
              item: e,
              onUpdateLink: (e) => c(t, e),
              validationData: i[e.type],
            },
            e.type,
          ),
      }),
    ],
  });
}
function Xu(e) {
  let { options: t, onAddLink: n } = e;
  return (0, z.jsx)(`div`, {
    className: qu,
    children: (0, z.jsx)(ze, {
      strDefaultLabel: A(`#StoreAdmin_SocialMedia_Add`),
      controlled: !0,
      rgOptions: t,
      onChange: (e) => {
        let t = e.data;
        t && n(t);
      },
      selectedOption: null,
    }),
  });
}
function Zu(e, t) {
  let n = !0,
    r = ``;
  return (
    t.prefix
      ? ((r =
          e.type === `mastodon`
            ? A(
                `#StoreAdmin_SocialMedia_ValidationMastodon`,
                t.prefix.join(`, `),
              )
            : A(
                `#StoreAdmin_SocialMedia_ValidationPrefix`,
                t.prefix.join(`, `),
              )),
        e.link &&
          ((n = !1),
          t.prefix.forEach((t) => {
            e.link.startsWith(t) && (n = !0);
          })))
      : t.number
        ? ((r = A(`#StoreAdmin_SocialMedia_ValidationNumber`)),
          e.link && (n = /^\d+$/.test(e.link)))
        : t.text
          ? (r = A(`#StoreAdmin_SocialMedia_ValidationText`))
          : t.regex &&
            e.type === `tumblr` &&
            (r = A(`#StoreAdmin_SocialMedia_ValidationTumblr`)),
    { bValid: n, strTooltip: r }
  );
}
function Qu(e) {
  let { item: t, onUpdateLink: n, validationData: r } = e,
    i;
  i = r.number
    ? A(`#StoreAdmin_SocialMedia_EnterNumber`)
    : r.text
      ? A(`#StoreAdmin_SocialMedia_EnterName`)
      : A(`#StoreAdmin_SocialMedia_EnterLink`);
  let { bValid: a, strTooltip: o } = Zu(t, r);
  return (0, z.jsxs)(`div`, {
    className: Wu,
    children: [
      (0, z.jsx)(`div`, {
        className: Gu,
        children: A(`#StoreAdmin_SocialMedia_Type_${t.type}`),
      }),
      (0, z.jsx)(xe, {
        className: Ku,
        type: `text`,
        value: t.link,
        placeholder: i,
        onChange: (e) => n(e.target.value),
      }),
      o &&
        (0, z.jsx)(Ve, {
          className: `vIGgULQ6INU-`,
          toolTipContent: o,
          children: `(?)`,
        }),
      !a && (0, z.jsx)(`div`, { className: `TDokO-aV6BA-`, children: o }),
    ],
  });
}
function $u(e, t) {
  let n = [],
    r = 0;
  for (
    e.forEach((e) => {
      e.link &&
        (n.push(
          R.createElement(`input`, {
            type: `hidden`,
            name: `app[content][ordered_social_links][${r}][type]`,
            value: e.type,
          }),
        ),
        n.push(
          R.createElement(`input`, {
            type: `hidden`,
            name: `app[content][ordered_social_links][${r}][link]`,
            value: e.link,
          }),
        ),
        r++);
    });
    r < t;
  )
    n.push(
      R.createElement(`input`, {
        type: `hidden`,
        name: `app[content][ordered_social_links][${r}]`,
        value: ``,
      }),
    ),
      r++;
  return (
    [`discord_server`, `youtube`, `facebook`, `twitter`, `twitch`].forEach(
      (e) => {
        n.push(
          R.createElement(`input`, {
            type: `hidden`,
            name: `app[content][links][${e}]`,
            value: ``,
          }),
        );
      },
    ),
    n
  );
}
function ed(e) {
  let { items: t, maxSeen: n } = e,
    r = R.useMemo(() => $u(t, n), [t, n]);
  return (0, z.jsx)(z.Fragment, { children: [...r] });
}
var td = `hkoqMyDbq1g-`,
  nd = `_0gMysPNWjHE-`,
  rd = `fhDwM8O-VHY-`,
  id = `_1T4mbgOoeVY-`,
  ad = `_1tPmq0Pxy5U-`,
  od = `p9O4ZiXu2T4-`,
  sd = `ezWNw9wWLOI-`,
  cd = `uZKHqqtlTTo-`,
  ld = `jCzgr-K82jM-`;
function ud(e) {
  let {
      rgAntiCheatData: t,
      rgSupportedAntiCheatOptions: n,
      rgLanguages: r,
      rgSupportedAntiCheatBootProtections: i,
    } = e,
    a = R.useMemo(() => new Map(r), [r]),
    o = (0, R.useMemo)(
      () =>
        Object.entries(n).map(([e, t]) => ({
          label: A(`#StoreAdmin_AntiCheat_Type_${e}`),
          data: e,
        })),
      [n],
    ),
    s = (e) => {
      e.data &&
        (l(e.data),
        e.data !== `none` &&
          e.data !== `unspecified` &&
          e.data !== `other` &&
          d(n[e.data].kernel));
    },
    [c, l] = (0, R.useState)(t.type),
    [u, d] = (0, R.useState)(t.kernel),
    [f, p] = (0, R.useState)(t.uninstall),
    [m, h] = (0, R.useState)(t.bootprotect),
    g = c !== `none` && c !== `unspecified`;
  return (0, z.jsxs)(`div`, {
    className: `section`,
    id: `anti_cheat`,
    children: [
      (0, z.jsx)(`h2`, { children: A(`#StoreAdmin_AntiCheat_Header`) }),
      (0, z.jsx)(`div`, { className: `grayRule` }),
      (0, z.jsx)(`p`, { children: A(`#StoreAdmin_AntiCheat_Description`) }),
      (0, z.jsx)(`p`, { children: A(`#StoreAdmin_AntiCheat_Description2`) }),
      (0, z.jsx)(dd, {
        label: A(`#StoreAdmin_AntiCheat_ServiceLabel`),
        children: (0, z.jsx)(md, {
          options: o,
          selectedOption: c,
          onSelectionChanged: s,
        }),
      }),
      c === `other` &&
        (0, z.jsx)(hd, { values: t.otherNameLoc, mapLanguages: a }),
      g && (0, z.jsx)(gd, { checked: u, onChange: d }),
      g && u && (0, z.jsx)(_d, { checked: f, onChange: p }),
      g && (0, z.jsx)(yd, { supported: i, currentValue: m, onChange: h }),
      (0, z.jsx)(xd, {
        selectedOption: c === `unspecified` ? `` : c,
        kernelMode: g ? u : !1,
        uninstallsCompletely: g && u ? f : !1,
        bootProtection: m == `none` ? `` : m,
      }),
    ],
  });
}
function dd(e) {
  let { label: t, children: n } = e;
  return (0, z.jsxs)(`div`, {
    className: `formrow flexRow`,
    children: [
      t
        ? (0, z.jsx)(`div`, { className: `formlabel`, children: t })
        : (0, z.jsx)(`div`, { className: `formlabel`, children: `\xA0` }),
      (0, z.jsx)(`div`, {
        className: `formdata settingsBlock`,
        children: (0, z.jsx)(`div`, { className: `left`, children: n }),
      }),
    ],
  });
}
function fd(e) {
  let { children: t } = e;
  return (0, z.jsx)(`div`, { className: sd, children: t });
}
function pd(e) {
  let { children: t } = e;
  return (0, z.jsx)(`div`, { className: cd, children: t });
}
function md(e) {
  let { options: t, selectedOption: n, onSelectionChanged: r } = e;
  return (0, z.jsx)(`div`, {
    className: td,
    children: (0, z.jsx)(ze, {
      controlled: !0,
      rgOptions: t,
      onChange: r,
      selectedOption: n,
    }),
  });
}
function hd(e) {
  let { values: t, mapLanguages: n } = e,
    {
      strActiveLanguage: r,
      mapValues: i,
      rctLanguageSelect: a,
      rctHiddenInputs: o,
    } = yr(n, t, `app`, [`game`, `3panticheat`, `othernameloc`]),
    s = i.get(r),
    c = Me(s);
  return (0, z.jsxs)(dd, {
    children: [
      (0, z.jsx)(`div`, { className: od, children: a }),
      (0, z.jsx)(pe, {
        className: nd,
        type: `text`,
        value: c,
        placeholder: `Enter the service name`,
        onChange: (e) => s.Set(e.target.value),
        maxLength: 256,
      }),
      o,
    ],
  });
}
function gd(t) {
  let { checked: n, onChange: r } = t;
  return (0, z.jsxs)(dd, {
    children: [
      (0, z.jsx)(E, {
        className: e(rd, id),
        label: A(`#StoreAdmin_AntiCheat_KernelModeLabel`),
        checked: n,
        onChange: r,
      }),
      (0, z.jsx)(`div`, {
        className: ad,
        children: A(`#StoreAdmin_AntiCheat_KernelModelDescription_Other`),
      }),
    ],
  });
}
function _d(e) {
  let { checked: t, onChange: n } = e;
  return (0, z.jsxs)(dd, {
    children: [
      (0, z.jsx)(E, {
        className: id,
        label: A(`#StoreAdmin_AntiCheat_UninstallCompletelyLabel`),
        checked: t,
        onChange: n,
      }),
      (0, z.jsx)(`div`, {
        className: ad,
        children: A(`#StoreAdmin_AntiCheat_UninstallCompletelyDescription`),
      }),
    ],
  });
}
function vd(e) {
  return e == `none`
    ? A(`#StoreAdmin_AntiCheat_BootProtection_None`)
    : e == `secureboot_tpm2`
      ? A(`#StoreAdmin_AntiCheat_BootProtection_SecureBootTPM2`)
      : e;
}
function yd(e) {
  let { supported: t, currentValue: n, onChange: r } = e;
  if (t.length == 0) return null;
  let i = t.map((e) => ({ label: vd(e), data: e })),
    a = t.find((e) => e == n) ? n : t[0];
  return (0, z.jsx)(dd, {
    children: (0, z.jsxs)(fd, {
      children: [
        (0, z.jsxs)(pd, {
          children: [A(`#StoreAdmin_AntiCheat_BootProtectionLabel`), ` `],
        }),
        (0, z.jsx)(`div`, {
          className: ld,
          children: A(`#StoreAdmin_AntiCheat_BootProtectionDescription`),
        }),
        (0, z.jsx)(`div`, {
          className: td,
          children: (0, z.jsx)(ze, {
            controlled: !0,
            rgOptions: i,
            onChange: (e) => {
              e.data && r(e.data);
            },
            selectedOption: a,
          }),
        }),
      ],
    }),
  });
}
function bd(e, t, n, r) {
  let i = [];
  return (
    i.push(
      R.createElement(`input`, {
        type: `hidden`,
        name: `app[game][3panticheat][type]`,
        value: e,
      }),
    ),
    i.push(
      R.createElement(`input`, {
        type: `hidden`,
        name: `app[game][3panticheat][kernel]`,
        value: t ? `1` : ``,
      }),
    ),
    i.push(
      R.createElement(`input`, {
        type: `hidden`,
        name: `app[game][3panticheat][uninst]`,
        value: n ? `1` : ``,
      }),
    ),
    i.push(
      R.createElement(`input`, {
        type: `hidden`,
        name: `app[game][3panticheat][othername]`,
        value: ``,
      }),
    ),
    i.push(
      R.createElement(`input`, {
        type: `hidden`,
        name: `app[game][3panticheat][bootprotect]`,
        value: r,
      }),
    ),
    i
  );
}
function xd(e) {
  let {
      selectedOption: t,
      kernelMode: n,
      uninstallsCompletely: r,
      bootProtection: i,
    } = e,
    a = R.useMemo(() => bd(t, n, r, i), [t, n, r, i]);
  return (0, z.jsx)(z.Fragment, { children: [...a] });
}
var Sd = `LCC3VOQgOZE-`,
  Cd = `jJET3QqamWA-`,
  wd = `GsgNhyoncZU-`,
  Td = `tSjo8Rvk4qI-`,
  Ed = `oQBjAgJLZiU-`,
  Dd = `yI3iGdS9kqQ-`,
  Od = `_--OQJgbnFnc-`,
  kd = `HbYq5YNkEiM-`;
function Ad(e) {
  let [t, n] = R.useState(e),
    r = (e, r) => {
      let i = [...t];
      (i[e] = r), n(i);
    },
    i = (e) => {
      let r = [...t];
      r.splice(e, 1), n(r);
    };
  return {
    items: t,
    setItem: r,
    deleteItem: i,
    appendItem: (e) => {
      n(t.concat([e]));
    },
    moveItem: (e, r) => {
      let i = [...t],
        a = t[e];
      e < r
        ? (i.splice(r + 1, 0, a), i.splice(e, 1))
        : (i.splice(e, 1), i.splice(r, 0, a)),
        n(i);
    },
    getState: (e) => ({
      item: t[e],
      setItem: (t) => r(e, t),
      deleteItem: () => i(e),
    }),
  };
}
function jd(t) {
  let [n, r] = R.useState(!1);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(Lt, {
        active: n,
        onDismiss: () => r(!1),
        children: (0, z.jsx)(Nd, {
          originalItems: t.rgItems,
          onDismiss: () => r(!1),
          packageid: t.packageid,
        }),
      }),
      (0, z.jsxs)(`table`, {
        className: `landingTable`,
        children: [
          (0, z.jsx)(`thead`, {
            children: (0, z.jsxs)(`tr`, {
              className: `tr heading`,
              children: [
                (0, z.jsx)(`th`, {
                  children: A(`#StoreAdmin_NonAppContent_TableHeader_Name`),
                }),
                (0, z.jsx)(`th`, {
                  children: A(`#StoreAdmin_NonAppContent_TableHeader_Visible`),
                }),
              ],
            }),
          }),
          (0, z.jsxs)(`tbody`, {
            children: [
              t.rgItems.length === 0 &&
                (0, z.jsx)(`tr`, {
                  children: (0, z.jsx)(`td`, {
                    colSpan: 2,
                    children: A(`#StoreAdmin_NonAppContent_NoNonAppItems`),
                  }),
                }),
              t.rgItems.length > 0 &&
                t.rgItems.map((e, n) =>
                  (0, z.jsx)(Md, { item: e, language: t.language }, n),
                ),
            ],
          }),
        ],
      }),
      (0, z.jsx)(`div`, {
        children: (0, z.jsx)(`button`, {
          className: e(`btnv6_blue_hoverfade btn_small`),
          onClick: () => r(!0),
          children: (0, z.jsx)(`span`, {
            children: A(`#StoreAdmin_NonAppContent_Edit`),
          }),
        }),
      }),
    ],
  });
}
function Md(e) {
  let { item: t, language: n } = e,
    r = A(`#StoreAdmin_NonAppContent_MissingLanguage`);
  return (
    t.localized_title &&
      (r =
        t.localized_title[n] ??
        t.localized_title.english ??
        A(`#StoreAdmin_NonAppContent_MissingLanguage`)),
    A(`#StoreAdmin_NonAppContent_MissingLanguage`),
    t.localized_description &&
      (t.localized_description[n] ??
        t.localized_description.english ??
        A(`#StoreAdmin_NonAppContent_MissingLanguage`)),
    (0, z.jsxs)(`tr`, {
      className: `tr highlightHover`,
      children: [
        (0, z.jsx)(`td`, { className: `td`, children: r }),
        (0, z.jsx)(`td`, {
          className: `td`,
          children: A(
            t.visible === `1`
              ? `#StoreAdmin_NonAppContent_Editor_Yes`
              : `#StoreAdmin_NonAppContent_Editor_No`,
          ),
        }),
      ],
    })
  );
}
function Nd(t) {
  let { originalItems: n, packageid: r, onDismiss: i } = t,
    a = [];
  for (let e of n)
    a.push({
      localized_title: e.localized_title ?? {},
      localized_description: e.localized_description ?? {},
      visible: e.visible,
    });
  let o = Ad(a),
    [s, c] = R.useState(`editor`),
    [l, u] = R.useState(null),
    d = () => {
      o.appendItem({
        localized_title: {},
        localized_description: {},
        visible: `0`,
      });
    },
    f = Fd(r),
    p = async () => {
      c(`throbber`),
        await f
          .mutateAsync(o.items)
          .then((e) => {
            e.success === 1 ? u(null) : u(e.errors[0] || `Unknown error`);
          })
          .catch((e) => {
            throw (u(e.message), e);
          })
          .finally(() => {
            c(`message`);
          });
    },
    m = () => {
      c(`editor`), i();
    },
    h = () => {
      window.location.reload();
    };
  return s === `editor`
    ? (0, z.jsxs)(`div`, {
        className: Sd,
        children: [
          (0, z.jsx)(`h1`, {
            children: A(`#StoreAdmin_NonAppContent_Editor_Header`),
          }),
          (0, z.jsxs)(`div`, {
            className: wd,
            children: [
              o.items.length > 0 &&
                (0, z.jsx)(ir, {
                  onMove: o.moveItem,
                  rowClassName: `_7K7c-gTd-P4-`,
                  items: o.items,
                  render: (e, t) => (0, z.jsx)(Pd, { state: o.getState(t) }),
                  onDelete: o.deleteItem,
                }),
              o.items.length === 0 &&
                (0, z.jsx)(`div`, {
                  children: A(
                    `#StoreAdmin_NonAppContent_Editor_NoNonAppItems`,
                    A(`#StoreAdmin_NonAppContent_Editor_AddItemButton`),
                  ),
                }),
              (0, z.jsx)(`button`, {
                className: e(`btn_green_white_innerfade`, Cd),
                onClick: d,
                children: A(`#StoreAdmin_NonAppContent_Editor_AddItemButton`),
              }),
            ],
          }),
          (0, z.jsxs)(`div`, {
            className: Td,
            children: [
              (0, z.jsx)(`button`, {
                className: `btn_green_white_innerfade`,
                onClick: p,
                children: A(`#StoreAdmin_NonAppContent_Save`),
              }),
              (0, z.jsx)(`button`, {
                onClick: m,
                children: A(`#StoreAdmin_NonAppContent_Cancel`),
              }),
            ],
          }),
        ],
      })
    : s === `throbber`
      ? (0, z.jsx)(sn, { size: `large` })
      : l === null
        ? (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`h1`, {
                children: A(
                  `#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Header`,
                ),
              }),
              (0, z.jsx)(`p`, {
                children: A(
                  `#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description`,
                ),
              }),
              (0, z.jsx)(`button`, {
                onClick: h,
                children: A(`#StoreAdmin_NonAppContent_Editor_OK`),
              }),
            ],
          })
        : (0, z.jsxs)(`div`, {
            children: [
              (0, z.jsx)(`h1`, {
                children: A(`#StoreAdmin_NonAppContent_Editor_Error_Header`),
              }),
              (0, z.jsx)(`p`, {
                children: A(
                  `#StoreAdmin_NonAppContent_Editor_Error_Description`,
                ),
              }),
              (0, z.jsx)(`p`, { children: l }),
              (0, z.jsx)(`button`, {
                onClick: h,
                children: A(`#StoreAdmin_NonAppContent_Editor_OK`),
              }),
            ],
          });
}
function Pd(e) {
  let { state: t } = e,
    { item: n, setItem: r, deleteItem: i } = t,
    [a, o] = R.useState(`english`),
    s = Le(!1),
    c = (e) => {
      o(e.target.value);
    },
    l = (e) => {
      (n.localized_title[a] = e.target.value), r(n);
    },
    u = (e) => {
      (n.localized_description[a] = e.target.value), r(n);
    },
    d = (e) => {
      (n.visible = e ? `1` : `0`), r(n);
    },
    f = ``;
  n.localized_title && n.localized_title[a] && (f = n.localized_title[a]);
  let p = ``;
  return (
    n.localized_description &&
      n.localized_description[a] &&
      (p = n.localized_description[a]),
    (0, z.jsxs)(`div`, {
      className: Ed,
      children: [
        (0, z.jsxs)(`div`, {
          className: Dd,
          children: [
            (0, z.jsx)(`input`, {
              className: void 0,
              type: `text`,
              placeholder: A(
                `#StoreAdmin_NonAppContent_Editor_TitlePlaceholder`,
              ),
              value: f,
              onChange: l,
              maxLength: 120,
            }),
            (0, z.jsx)(`select`, {
              onChange: c,
              children: Fe(s, (e, t) =>
                (0, z.jsx)(`option`, { value: t, children: e }, t),
              ),
            }),
          ],
        }),
        (0, z.jsxs)(`div`, {
          className: Od,
          children: [
            (0, z.jsx)(Be, { value: n.visible === `1`, onChange: d }),
            ` `,
            (0, z.jsx)(`span`, {
              children: A(`#StoreAdmin_NonAppContent_Editor_Visible`),
            }),
          ],
        }),
        (0, z.jsxs)(`div`, {
          className: kd,
          children: [
            (0, z.jsx)(`p`, {
              children: A(`#StoreAdmin_NonAppContent_Editor_Description`),
            }),
            (0, z.jsx)(`textarea`, {
              placeholder: A(
                `#StoreAdmin_NonAppContent_Editor_DescriptionPlaceholder`,
              ),
              maxLength: 300,
              rows: 5,
              onChange: u,
              value: p,
            }),
          ],
        }),
      ],
    })
  );
}
function Fd(e) {
  return St({
    mutationKey: [`save_nonapp_contents`, e],
    mutationFn: async (t) => {
      let n = new FormData();
      n.append(`sessionid`, x());
      let r = `nonapp_contents`;
      for (let e = 0; e < t.length; e++) {
        let i = t[e];
        for (let t of Object.keys(i.localized_title ?? []))
          n.append(`${r}[${e}][localized_title][${t}]`, i.localized_title[t]);
        for (let t of Object.keys(i.localized_description ?? []))
          n.append(
            `${r}[${e}][localized_description][${t}]`,
            i.localized_description[t],
          );
        n.append(`${r}[${e}][visible]`, i.visible);
      }
      t.length === 0 && n.append(r, ``);
      let i = `${h.PARTNER_BASE_URL}store/ajaxpackagesave/${e}`,
        a = await H.default.post(i, n);
      if (a.status !== 200) return a.data;
      if (a.data.success != 1) throw a.data;
      let o = new FormData();
      o.append(`sessionid`, x()),
        o.append(`changenotes`, `Change non-app items in package`);
      let s = `${h.PARTNER_BASE_URL}admin/store/packagepublish/${e}`,
        c = await H.default.post(s, o);
      if (c.status !== 200) return c.data;
      if (a.data.success != 1) throw a.data;
      return { success: 1, errors: [] };
    },
  });
}
var Id = `hVh3wNIo7As-`,
  Ld = `jCoiqPzYcP4-`;
function Rd(e) {
  let { packageid: t } = e,
    [n, r] = R.useState(e.bShowCapsuleArt),
    [i, a] = R.useState(e.bHideItemPrefixes),
    [o, s] = R.useState(null),
    c = zd(t),
    [l, u] = R.useState(null),
    d = (e) => {
      s(`edit`);
    },
    f = (e) => {
      r(e.target.checked);
    },
    p = (e) => {
      a(e.target.checked);
    },
    m = () => {
      r(e.bShowCapsuleArt), s(null);
    },
    h = async () => {
      s(`working`),
        await c
          .mutateAsync({ bShowCapsuleArt: n, bHideItemPrefix: i })
          .then((e) => {
            e.success === 1 ? u(null) : u(e.errors[0] || `Unknown error`);
          })
          .catch((e) => {
            throw (u(e.message), e);
          })
          .finally(() => {
            s(`message`);
          });
    },
    g = () => {
      window.location.reload();
    };
  return (0, z.jsxs)(`div`, {
    className: Id,
    children: [
      (0, z.jsxs)(Lt, {
        active: o !== null,
        onDismiss: m,
        children: [
          o === `edit` &&
            (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsx)(`h1`, {
                  children: A(`#StoreAdmin_EditPackageDisplay_Header`),
                }),
                !e.bHideShowCapsuleCheckbox &&
                  (0, z.jsxs)(z.Fragment, {
                    children: [
                      (0, z.jsx)(`p`, {
                        children: A(
                          `#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description`,
                        ),
                      }),
                      (0, z.jsxs)(`label`, {
                        children: [
                          (0, z.jsx)(`input`, {
                            type: `checkbox`,
                            checked: n,
                            onChange: f,
                          }),
                          (0, z.jsx)(`span`, {
                            className: `v-vFVKJQ-iU-`,
                            children: A(
                              `#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label`,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, z.jsx)(`p`, {
                  children: A(
                    `#StoreAdmin_EditPackageDisplay_HidePrefix_Description`,
                  ),
                }),
                (0, z.jsxs)(`label`, {
                  children: [
                    (0, z.jsx)(`input`, {
                      type: `checkbox`,
                      checked: i,
                      onChange: p,
                    }),
                    (0, z.jsx)(`span`, {
                      className: `v-vFVKJQ-iU-`,
                      children: A(
                        `#StoreAdmin_EditPackageDisplay_HidePrefix_Label`,
                      ),
                    }),
                  ],
                }),
                (0, z.jsxs)(`div`, {
                  className: `dpPOA513BFA-`,
                  children: [
                    (0, z.jsx)(`button`, {
                      className: `btn_green_white_innerfade btn_medium`,
                      onClick: h,
                      disabled:
                        n === e.bShowCapsuleArt && i === e.bHideItemPrefixes,
                      children: A(`#StoreAdmin_ShowCapsuleArt_SaveAndPublish`),
                    }),
                    (0, z.jsx)(`button`, {
                      className: `btnv6_blue_hoverfade btn_medium`,
                      onClick: m,
                      children: A(`#StoreAdmin_ShowCapsuleArt_Cancel`),
                    }),
                  ],
                }),
              ],
            }),
          o === `working` &&
            (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsx)(`h1`, {
                  children: A(`#StoreAdmin_EditPackageDisplay_Header`),
                }),
                (0, z.jsx)(sn, { size: `large` }),
              ],
            }),
          o === `message` &&
            l === null &&
            (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsx)(`h1`, {
                  children: A(`#StoreAdmin_EditPackageDisplay_Header`),
                }),
                (0, z.jsx)(`p`, {
                  children: A(
                    `#StoreAdmin_NonAppContent_Editor_SuccessfullySaved_Description`,
                  ),
                }),
                (0, z.jsx)(`button`, {
                  onClick: g,
                  children: A(`#StoreAdmin_NonAppContent_Editor_OK`),
                }),
              ],
            }),
          o === `message` &&
            l !== null &&
            (0, z.jsxs)(z.Fragment, {
              children: [
                (0, z.jsx)(`h1`, {
                  children: A(`#StoreAdmin_EditPackageDisplay_Header`),
                }),
                (0, z.jsx)(`p`, {
                  children: A(
                    `#StoreAdmin_NonAppContent_Editor_Error_Description`,
                  ),
                }),
                (0, z.jsx)(`p`, { children: l }),
                (0, z.jsx)(`button`, {
                  onClick: g,
                  children: A(`#StoreAdmin_NonAppContent_Editor_OK`),
                }),
              ],
            }),
        ],
      }),
      !e.bHideShowCapsuleCheckbox &&
        (0, z.jsxs)(`div`, {
          className: `jCoiqPzYcP4-`,
          children: [
            (0, z.jsx)(`input`, {
              type: `checkbox`,
              className: void 0,
              checked: n,
              onChange: d,
            }),
            (0, z.jsx)(Je, {
              toolTipContent: A(
                `#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description`,
              ),
              children: (0, z.jsxs)(`div`, {
                className: void 0,
                children: [
                  (0, z.jsx)(`span`, {
                    children: A(
                      `#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label`,
                    ),
                  }),
                  ` (?)`,
                ],
              }),
            }),
          ],
        }),
      e.bHideShowCapsuleCheckbox &&
        (0, z.jsxs)(`div`, {
          className: `jCoiqPzYcP4-`,
          children: [
            (0, z.jsx)(`input`, {
              type: `checkbox`,
              className: void 0,
              checked: n,
              disabled: !0,
            }),
            (0, z.jsx)(Je, {
              toolTipContent: A(
                `#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Description`,
              ),
              children: (0, z.jsxs)(`div`, {
                className: void 0,
                children: [
                  (0, z.jsx)(`span`, {
                    children: A(
                      `#StoreAdmin_EditPackageDisplay_ShowCapsuleArt_Label`,
                    ),
                  }),
                  ` (?)`,
                  (0, z.jsx)(`br`, {}),
                  (0, z.jsx)(`span`, {
                    children: A(
                      `#StoreAdmin_EditPackageDisplay_UseEditStorePackage`,
                    ),
                  }),
                ],
              }),
            }),
          ],
        }),
      (0, z.jsxs)(`div`, {
        className: Ld,
        children: [
          (0, z.jsx)(`input`, {
            type: `checkbox`,
            className: void 0,
            checked: i,
            onChange: d,
          }),
          (0, z.jsx)(Je, {
            toolTipContent: A(
              `#StoreAdmin_EditPackageDisplay_HidePrefix_Description`,
            ),
            children: (0, z.jsxs)(`div`, {
              className: void 0,
              children: [
                (0, z.jsx)(`span`, {
                  children: A(
                    `#StoreAdmin_EditPackageDisplay_HidePrefix_Label`,
                  ),
                }),
                ` (?)`,
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function zd(e) {
  return St({
    mutationKey: [`save_show_capsule_art_toggle`, e],
    mutationFn: async (t) => {
      let n = new FormData();
      n.append(`sessionid`, x()),
        n.append(
          `show_capsule_art_in_purchase_option`,
          t.bShowCapsuleArt ? `1` : `0`,
        ),
        n.append(`hide_shared_prefix_on_items`, t.bHideItemPrefix ? `1` : `0`);
      let r = `${h.PARTNER_BASE_URL}store/ajaxpackagesave/${e}`,
        i = await H.default.post(r, n);
      if (i.status !== 200) return i.data;
      if (i.data.success != 1) throw i.data;
      let a = new FormData();
      a.append(`sessionid`, x()),
        a.append(`changenotes`, `Configure package purchase display options.`),
        a.append(`packages[0]`, `` + e);
      let o = `${h.PARTNER_BASE_URL}store/ajaxpublishpackages`,
        s = await H.default.post(o, a);
      if (s.status !== 200) return s.data;
      if (i.data.success != 1) throw i.data;
      return { success: 1, errors: [] };
    },
  });
}
var Bd = `xGaHmkLHZZM-`,
  Vd = `u4jHCTT050Y-`,
  Hd = `Z-7bnbxk-tE-`,
  Ud = `WiQV847AsNA-`,
  Wd = `d5aRMUq2Vrc-`,
  Gd = `_6syK10pZiBI-`,
  Kd = `lsrv9AtI7lc-`;
function qd(e) {
  let [t, n] = (0, R.useState)([]),
    [r, i] = (0, R.useState)(!1),
    { itemid: a, apptype: o, altasset: s, altpostfix: c } = e;
  (0, R.useEffect)(
    () => (
      (window.ShowImageConfirmationDialog = (e) => {
        n(e), i(!0);
      }),
      () => {
        delete window.ShowImageConfirmationDialog;
      }
    ),
    [],
  );
  let l = () => {
      i(!1);
    },
    u = R.useCallback(() => {
      window.SubmitImageUpload(a, o, s, c, !0), l();
    }, [s, c, o, a]);
  return (0, z.jsx)(ut, {
    children: (0, z.jsx)(M, {
      active: r,
      children: (0, z.jsx)(Yd, {
        rgImages: t,
        fnOnSuccess: u,
        fnCloseDialog: l,
      }),
    }),
  });
}
function Jd(e) {
  let t = [];
  switch (e) {
    case `Small Capsule`:
      t = [`LegibleLogo`, `NoAdditionalText`];
      break;
    case `Main Capsule`:
      t = [`OneThirdLogo`, `NoAdditionalText`];
      break;
    case `Package Header`:
    case `Header Capsule`:
      t = [`OneThirdLogo`, `NoAdditionalText`];
      break;
    case `Library Capsule`:
    case `Vertical Capsule`:
    case `Library Header`:
      t = [`OneThirdLogo`, `NoAdditionalText`];
      break;
    case `Library Hero`:
      t = [`NoLogo`];
      break;
    case `Library Logo`:
      t = [`TransparentBG`, `NoAdditionalText`];
      break;
    default:
      n(!1, `Unknown uploaded image provided: ${e}`);
  }
  return t;
}
function Yd(e) {
  let { rgImages: t, fnOnSuccess: n, fnCloseDialog: r } = e,
    [i, a] = (0, R.useState)({}),
    o = (0, R.useCallback)(
      (e, t, n) => a({ ...i, [e]: { ...i[e], [t]: n } }),
      [i],
    ),
    s = !0;
  t.forEach((e) => {
    Jd(e.image_def.name).forEach((t) => {
      if (!i[e.image_def.name] || !i[e.image_def.name][t]) {
        s = !1;
        return;
      }
    });
  });
  let c = t.map((e) =>
    (0, z.jsx)(Xd, { image: e, onCheckboxChange: o }, e.image_def.name),
  );
  return (0, z.jsxs)(k, {
    className: Bd,
    strTitle: A(`#StoreAdmin_GraphicalAssets_ConfirmDialog_Title`),
    bOKDisabled: !s,
    closeModal: r,
    strOKButtonText: A(`#StoreAdmin_GraphicalAssets_ConfirmDialog_ConfirmBtn`),
    onOK: n,
    bDestructiveWarning: !s,
    bDisableBackgroundDismiss: !0,
    children: [
      (0, z.jsx)(`div`, {
        className: Vd,
        children: D(
          `#StoreAdmin_GraphicalAssets_ConfirmDialog_Desc`,
          (0, z.jsx)(at, {
            href: `${u.PARTNER_BASE_URL}doc/store/assets/rules`,
          }),
        ),
      }),
      c,
    ],
  });
}
function Xd(e) {
  let { image: t, onCheckboxChange: n } = e,
    r = Jd(t.image_def.name),
    i = [];
  for (let e of r)
    i.push(
      (0, z.jsx)(
        E,
        {
          onChange: (r) => n(t.image_def.name, e, r),
          label: A(`#StoreAdmin_GraphicalAssets_ConfirmDialog_${e}`),
        },
        `${t.image_def.name}_Checkbox_${e}`,
      ),
    );
  return (0, z.jsxs)(`div`, {
    className: Hd,
    children: [
      (0, z.jsx)(`div`, { className: Ud, children: t.image_def.name }),
      (0, z.jsx)(`div`, {
        className: Wd,
        children: (0, z.jsx)(`img`, { className: Gd, src: t.image_src }),
      }),
      (0, z.jsx)(`div`, { className: Kd, children: i }),
    ],
  });
}
var Zd = `usePartnerActiveCreatorClans`;
function Qd(e, t) {
  return wt({
    queryKey: [Zd, e],
    queryFn: async () => {
      let n = m.Init(jn);
      n.Body().set_partnerid(e);
      let r;
      try {
        r = await On.GetDevPagesForPartner(t, n);
      } catch (t) {
        throw (
          (console.error(
            `usePartnerActiveCreatorClans on PartnerID ${e} request failed`,
            t,
          ),
          t)
        );
      }
      if (r.GetEResult() == 1)
        return r
          .Body()
          .results()
          .map((e) => e.toObject());
      throw (
        (console.error(
          `usePartnerActiveCreatorClans on PartnerID ${e} failed with EResult: ${r.GetEResult()}`,
        ),
        Error(`GetDevPagesForPartner answered EResult ${r.GetEResult()}`))
      );
    },
    enabled: e > 0,
  });
}
var $d = `useCreatorHomeClanLinksByApp`;
function ef(e) {
  let t = ar(),
    n = vt({
      queryKey: [$d, e],
      queryFn: async () => {
        let n = m.Init(kn);
        n.Body().set_appid(e);
        let r = await On.GetDevPageLinks(t, n);
        return r.GetEResult() == 1
          ? r
              .Body()
              .links()
              .map((e) => e.toObject())
          : (console.error(
              `useCreatorHomeClanLinksByApp on AppID ${e} failed with ${r.GetEResult()}`,
            ),
            []);
      },
      enabled: e > 0,
    });
  return n.isLoading ? null : n.data;
}
async function tf(e) {
  let t = `${h.PARTNER_BASE_URL}apps/creatorhomelinkroles?clanids=${e.join(`,`)}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r.success != 1) throw Error(r.msg || `EResult ${r.success}`);
  return r.verdicts ?? [];
}
var nf = `useCreatorHomeFranchiseVerdict`;
function rf(e, t, n) {
  return vt({
    queryKey: [nf, e],
    queryFn: async () =>
      (await tf([e])).find((t) => t.clan_account_id === e) ?? null,
    initialData: n,
    enabled: t && e > 0,
    staleTime: 1 / 0,
  });
}
function af(e, t, n) {
  let r = sf();
  return St({
    mutationFn: async ({ clanAccountID: i, bReuseExistingClan: a }) => {
      let o = {
        appid: t,
        remove: !1,
        update_json_only: !1,
        skip_clan_permissions: a,
        partner_id: e,
        link: {
          appid: t,
          clan_steamid: Sn.InitFromClanID(i).ConvertTo64BitString(),
          relation: 0,
          linkname: n,
          json: null,
        },
      };
      return await r.mutateAsync(o);
    },
  });
}
function of(e, t, n) {
  let r = sf();
  return St({
    mutationFn: async () => {
      let i = {
        appid: e,
        remove: !0,
        update_json_only: !1,
        link: {
          appid: e,
          clan_steamid: Sn.InitFromClanID(t).ConvertTo64BitString(),
          relation: 0,
          linkname: n,
          json: null,
        },
      };
      return await r.mutateAsync(i);
    },
  });
}
function sf() {
  let e = ar();
  return St({
    mutationFn: async (t) => {
      let n = m.Init(Dn);
      n.Body().set_appid(t.appid),
        n.Body().set_remove(t.remove),
        n.Body().set_update_json_only(t.update_json_only),
        n.Body().set_skip_clan_permissions(t.skip_clan_permissions),
        n.Body().set_partner_id(t.partner_id),
        n.Body().link().set_appid(t.link.appid),
        n.Body().link().set_clan_steamid(t.link.clan_steamid),
        n.Body().link().set_relation(t.link.relation),
        n.Body().link().set_linkname(t.link.linkname),
        n.Body().link().set_json(t.link.json);
      let r = await On.SetDevPageLink(e, n);
      return r.GetEResult() == 1
        ? (yt.invalidateQueries({ queryKey: [$d, t.appid] }), !0)
        : (console.error(
            `useSetDevPageLink on AppID ${t.appid} failed with ${r.GetEResult()}`,
          ),
          !1);
    },
  });
}
function cf(e) {
  let [t, n, r] = it();
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(T, { onClick: n, children: A(`#Button_Unlink`) }),
      (0, z.jsx)(M, {
        active: t,
        children: (0, z.jsx)(lf, { ...e, closeModal: r }),
      }),
    ],
  });
}
function lf(e) {
  let { pageLink: t, clanAccountID: n, clanName: r, closeModal: i } = e,
    a = of(t.appid, n, t.linkname),
    o = Mn();
  return o.bLoading
    ? (0, z.jsx)(Nn, {
        state: o,
        strDialogTitle: A(`#Button_Unlink`),
        closeModal: i,
      })
    : (0, z.jsx)(k, {
        onCancel: i,
        strTitle: A(`#Button_Unlink`),
        strDescription: A(`#AppLanding_Creator_UnlinkDesc`, r || n, t.linkname),
        onOK: () => {
          o.fnSetLoading(!0),
            a
              .mutateAsync()
              .then((e) => {
                e
                  ? (o.fnSetStrSuccess(A(`#EventDisplay_Share_Success`)),
                    o.fnSetSuccess(!0))
                  : (o.fnSetStrError(A(`#Error_ErrorCommunicatingWithNetwork`)),
                    o.fnSetError(!0));
              })
              .catch((e) => {
                o.fnSetStrError(A(`#Error_ErrorCommunicatingWithNetwork`)),
                  o.fnSetError(!0),
                  console.error(
                    `unlinking failed appid ${t.appid} with error ${I(e).strErrorMsg} `,
                  );
              });
        },
        children: (0, z.jsx)(F, {
          as: `p`,
          size: `2`,
          children: A(`#Dialog_AreYouSure`),
        }),
      });
}
var uf = `QAHIS4yjZBQ-`,
  df = `s4J9wBMZqyY-`,
  ff = `cj0Nws4rX38-`,
  pf = `wb-tIma93jE-`,
  mf = `useClanLinkableForMeViaCreatorHome`;
function hf() {
  return wt({
    queryKey: [mf, re.accountid],
    queryFn: async () => {
      let e = `${h.PARTNER_BASE_URL}creatorhome/ajaxgetgroupsforuser`,
        t = { sessionid: x() },
        n;
      try {
        n = await H.default.get(e, { params: t });
      } catch (e) {
        let { strErrorMsg: t, errorCode: n } = I(e);
        throw (
          (console.error(
            `useClanLinkableForMeViaCreatorHome: request failed, EResult ${n}: ${t}`,
            e,
          ),
          e)
        );
      }
      if (n?.status == 200 && n.data?.success == 1)
        return n.data.rgClanAccountIDs ?? [];
      throw (
        (console.error(
          `useClanLinkableForMeViaCreatorHome: status ${n?.status}, EResult ${n?.data?.success}`,
        ),
        Error(`ajaxgetgroupsforuser answered EResult ${n?.data?.success}`))
      );
    },
    enabled: re.logged_in,
  });
}
var gf = `X0myRC5gFN0-`,
  _f = `mS7NNiaKUWM-`;
function vf(e) {
  let { nAppID: t, nPartnerID: n } = e,
    [r, i, a] = it();
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(T, { onClick: i, children: A(`#Button_Link`) }),
      (0, z.jsx)(M, {
        active: r,
        children: (0, z.jsx)(xf, { closeModal: a, ...e }),
      }),
    ],
  });
}
var yf = [],
  bf = [];
function xf(e) {
  let { nAppID: t, nPartnerID: n, linkname: r, closeModal: i } = e,
    a = af(n, t, r),
    [o, s] = (0, R.useState)(null),
    c = ar(),
    l = n > 0,
    u = vt(Qd(n, c)),
    d = u.data ?? yf,
    f = vt(hf()),
    p = f.data ?? bf;
  (0, R.useEffect)(() => {
    l ||
      console.warn(
        `LinkDialog: no partner for app ${t} (got ${n}), offering only the groups the user owns or officers`,
      ),
      re.logged_in ||
        console.warn(
          `LinkDialog: UserConfig says signed out, so the groups the user owns or officers were not requested`,
        );
  }, [l, t, n]);
  let { rgClanChoices: m, setExistingLinks: h } = (0, R.useMemo)(() => {
      let e = new Set(d.map((e) => e.clan_accountid)),
        t = new Set([...p, ...e]);
      return { rgClanChoices: Array.from(t), setExistingLinks: e };
    }, [d, p]),
    g = qt({ rgOptions: m, selectedValue: o, onSelectionChange: s }),
    _ = Mn();
  return u.isLoading || f.isLoading
    ? (0, z.jsx)(k, {
        strTitle: A(`#Button_Link`),
        bAlertDialog: !0,
        closeModal: i,
        children: (0, z.jsxs)(N, {
          align: `center`,
          gap: `2`,
          children: [
            (0, z.jsx)(Vt, { size: `1` }),
            (0, z.jsx)(F, {
              size: `2`,
              contrast: `description`,
              children: A(`#Loading`),
            }),
          ],
        }),
      })
    : u.isError || f.isError
      ? (0, z.jsx)(k, {
          strTitle: A(`#Button_Link`),
          bAlertDialog: !0,
          closeModal: i,
          children: (0, z.jsx)(F, {
            as: `p`,
            size: `2`,
            color: `text-error`,
            children: A(`#AppLanding_Creator_Linking_Failed`),
          }),
        })
      : _.bLoading
        ? (0, z.jsx)(Nn, {
            state: _,
            strDialogTitle: A(`#Button_Link`),
            closeModal: i,
          })
        : (0, z.jsx)(k, {
            onCancel: i,
            bAllowFullSize: !0,
            strTitle: A(`#AppLAnding_Creator_LinkingTitle`, r),
            strDescription: A(`#AppLAnding_Creator_LinkingDesc`, r),
            bOKDisabled: !o,
            onOK: async () => {
              _.fnSetLoading(!0);
              let e = { clanAccountID: o, bReuseExistingClan: h.has(o) };
              await a
                .mutateAsync(e)
                .then((e) => {
                  e
                    ? (_.fnSetStrSuccess(A(`#EventDisplay_Share_Success`)),
                      _.fnSetSuccess(!0))
                    : (_.fnSetStrError(
                        A(`#Error_ErrorCommunicatingWithNetwork`),
                      ),
                      _.fnSetError(!0));
                })
                .catch((e) => {
                  _.fnSetStrError(A(`#Error_ErrorCommunicatingWithNetwork`)),
                    _.fnSetError(!0),
                    console.error(
                      `linking failed appid ${t} with error ${I(e).strErrorMsg} `,
                    );
                });
            },
            children: (0, z.jsxs)(N, {
              direction: `column`,
              gap: `3`,
              children: [
                (0, z.jsx)(F, {
                  as: `p`,
                  size: `2`,
                  children: A(`#AppLanding_Creator_LinkingNote`),
                }),
                !l &&
                  (0, z.jsx)(F, {
                    as: `p`,
                    size: `2`,
                    contrast: `description`,
                    children: A(`#AppLanding_Creator_Linking_NoPartner`),
                  }),
                m.length == 0
                  ? (0, z.jsx)(F, {
                      as: `p`,
                      size: `2`,
                      contrast: `description`,
                      children: A(`#AppLanding_Creator_Linking_NoOptions`),
                    })
                  : (0, z.jsx)(`div`, {
                      className: gf,
                      children: (0, z.jsxs)(Kt.Root, {
                        state: g,
                        size: `2`,
                        popoverWidth: `target`,
                        children: [
                          (0, z.jsx)(Kt.Trigger, {
                            children: o
                              ? (0, z.jsx)(Sf, {
                                  clanAccountID: o,
                                  bExistingLink: h.has(o),
                                })
                              : (0, z.jsx)(Kt.Placeholder, {
                                  children: A(`#AppLanding_Creator_Choice`),
                                }),
                          }),
                          (0, z.jsx)(Kt.Options, {
                            children: m.map((e) =>
                              (0, z.jsx)(
                                Kt.Option,
                                {
                                  value: e,
                                  children: (0, z.jsx)(Sf, {
                                    clanAccountID: e,
                                    bExistingLink: h.has(e),
                                  }),
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                    }),
              ],
            }),
          });
}
function Sf(e) {
  let { clanAccountID: t, bExistingLink: n } = e,
    [r, i] = Rn(t),
    a = i ? i.group_name + `(${t})` : `` + t;
  return (0, z.jsx)(Je, {
    toolTipContent: n ? A(`#AppLanding_Creator_Existing`) : void 0,
    children: (0, z.jsxs)(N, {
      align: `center`,
      gap: `2`,
      wrap: `nowrap`,
      children: [
        (0, z.jsx)(`img`, { className: _f, src: i?.avatar_full_url }),
        (0, z.jsxs)(F, {
          size: `2`,
          truncate: !0,
          children: [a, ` `, n ? `*` : ``],
        }),
      ],
    }),
  });
}
function Cf(e) {
  let {
      nAppID: t,
      nPrimaryPartnerID: n,
      strName: r,
      strKvTargetName: i,
      rgConflictClanAccountIDs: a,
      rgCatalogVerdicts: o,
      bCheckCatalogRoles: s,
      bCheckFranchiseMinGames: c,
      rgNameMustMatchLinks: l,
      strMatchKey: u,
    } = e,
    [d, f] = (0, R.useState)(() => r),
    p = Af(t, n),
    m = ef(t)?.find(
      (e) =>
        e.linkname.trim().toLocaleLowerCase() == r.trim().toLocaleLowerCase(),
    ),
    h = (0, R.useMemo)(
      () => (m ? new Sn(m.clan_steamid).GetAccountID() : 0),
      [m],
    ),
    { data: g } = rf(
      h,
      !!(s || c),
      o?.find((e) => e.clan_account_id === h),
    ),
    _ = (0, R.useMemo)(() => {
      if (!m) return null;
      if (a?.includes(h))
        return { strIssue: A(`#AppLanding_Creator_FranchiseSameAsDevPub`) };
      if (s && g?.franchise_links_suppressed)
        return {
          strIssue: A(`#AppLanding_Creator_FranchiseIsDevPubElsewhere`),
          rgDevPubAppIDs: g.devpub_appids,
          cDevPubApps: g.devpub_app_count,
        };
      if (c && g?.franchise_too_few_games)
        return { strIssue: A(`#AppLanding_Creator_FranchiseTooFewGames`) };
      let e = l?.filter((e) => e.clanAccountID === h);
      return e?.length && !e.some((e) => e.strMatchKey === u)
        ? { strIssue: A(`#AppLanding_Creator_DeveloperNameMismatch`) }
        : null;
    }, [m, h, a, s, c, g, l, u]);
  return (0, z.jsxs)(N, {
    align: `start`,
    gap: `2`,
    wrap: `nowrap`,
    className: uf,
    children: [
      (0, z.jsx)(Je, {
        toolTipContent: m && A(`#AppLanding_CreatorLocked`),
        children: (0, z.jsx)(`input`, {
          type: `text`,
          size: 30,
          value: d,
          onChange: (e) => {
            m || f(e.currentTarget.value || ``);
          },
        }),
      }),
      (0, z.jsx)(`input`, {
        name: i,
        type: `hidden`,
        value: d,
        onChange: () => {},
      }),
      !!(m && r?.toLocaleLowerCase() === d?.toLocaleLowerCase()) &&
        (0, z.jsx)(Ef, { pageLink: m, strKvTargetName: i, linkIssue: _ }),
      !m &&
        d?.trim().length > 0 &&
        (0, z.jsx)(vf, { nPartnerID: p, nAppID: t, linkname: d.trim() }),
      d?.toLocaleLowerCase() !== r?.toLocaleLowerCase() &&
        (0, z.jsx)(F, {
          size: `2`,
          contrast: `description`,
          marginTop: `2`,
          children: A(`#AppLanding_Creator_SaveRequires`),
        }),
    ],
  });
}
var wf = { direction: `right`, style: { minWidth: `350px` } };
function Tf(e, t) {
  let n = (0, R.useMemo)(() => new Sn(e.clan_steamid).GetAccountID(), [e]),
    { creatorHome: r } = En(n),
    [i, a] = Rn(n),
    o = (0, R.useMemo)(() => {
      let e = `developer`;
      return (
        t.includes(`[publisher`)
          ? (e = `publisher`)
          : t.includes(`[franchise`) && (e = `franchise`),
        { clan_account_id: n, name: a?.group_name, type: e }
      );
    }, [n, t, a]);
  return {
    clanAccountID: n,
    clanInfo: a,
    strURL: r?.GetCreatorHomeURL(o.type),
  };
}
function Ef(t) {
  let { pageLink: n, strKvTargetName: r, linkIssue: i } = t,
    a = i?.strIssue,
    { clanAccountID: o, clanInfo: s, strURL: c } = Tf(n, r);
  return (0, z.jsxs)(N, {
    justify: `between`,
    align: `start`,
    gap: `2`,
    wrap: `nowrap`,
    flexGrow: `1`,
    children: [
      (0, z.jsxs)(N, {
        direction: `column`,
        children: [
          (0, z.jsxs)(N, {
            align: `center`,
            gap: `2`,
            wrap: `nowrap`,
            className: e(df, a && `HboqRPf-5uw-`),
            children: [
              !!a &&
                (0, z.jsx)(F, {
                  color: `text-error`,
                  weight: `heavy`,
                  children: `✖`,
                }),
              qe(
                `#AppLanding_CreatorLinked`,
                (0, z.jsx)(kf, { clanAccountID: o, strURL: c, clanInfo: s }),
              ),
            ],
          }),
          !!a &&
            (0, z.jsx)(Je, {
              toolTipContent:
                i.rgDevPubAppIDs?.length > 0 &&
                (0, z.jsx)(Df, {
                  rgAppIDs: i.rgDevPubAppIDs,
                  cTotal: i.cDevPubApps ?? 0,
                }),
              children: (0, z.jsx)(F, {
                as: `p`,
                size: `2`,
                color: `text-error`,
                marginLeft: `3`,
                marginTop: `1`,
                children: a,
              }),
            }),
        ],
      }),
      (0, z.jsx)(cf, {
        pageLink: n,
        clanAccountID: o,
        clanName: s?.group_name || `` + o,
      }),
    ],
  });
}
function Df(e) {
  let { rgAppIDs: t, cTotal: n } = e;
  return (0, z.jsxs)(N, {
    direction: `column`,
    children: [
      (0, z.jsx)(`div`, {
        children: A(`#AppLanding_Creator_FranchiseIsDevPubElsewhere_Apps`),
      }),
      t.map((e) => (0, z.jsx)(Of, { appid: e }, e)),
      n > t.length &&
        (0, z.jsx)(`div`, {
          children: A(
            `#AppLanding_Creator_FranchiseIsDevPubElsewhere_More`,
            n - t.length,
          ),
        }),
    ],
  });
}
function Of(e) {
  let { appid: t } = e,
    { data: n } = pt({ appid: t });
  return (0, z.jsx)(`div`, {
    children: n?.visible && n.name ? `${n.name} (${t})` : t,
  });
}
function kf(e) {
  let { clanAccountID: t, clanInfo: n, strURL: r } = e,
    i = n?.group_name || `` + t;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(Xt, { href: r, target: `_blank`, children: i }),
      (0, z.jsx)(mt, {
        className: ff,
        hoverProps: wf,
        hoverContent: (0, z.jsx)(jt, { clanInfo: n }),
        children: (0, z.jsx)(Xt, {
          href: r,
          target: `_blank`,
          children: (0, z.jsx)(`img`, {
            className: pf,
            src: n?.avatar_full_url,
          }),
        }),
      }),
    ],
  });
}
function Af(e, t) {
  let [n, r] = (0, R.useState)(() => (t > 0 ? t : null)),
    i = Ot(n > 0 ? null : e);
  return (
    (0, R.useEffect)(() => {
      !n &&
        i &&
        (i.length > 0
          ? r(i[0].partner_id)
          : console.warn(
              `Creator home linking: the page gave no primary partner (${t}) and nobody is paid for app ${e}, so creator homes linked on other games cannot be offered`,
            ));
    }, [i, n, e, t]),
    n
  );
}
function jf(e) {
  let [t, n, r] = it(),
    { rgScreenshots: i, refetch: a, isFetching: o } = Mf(t),
    { mutateAsync: s, isPending: c } = Nf(),
    l = R.useMemo(
      () => i?.map((e, t) => ({ key: t, mapAltText: e.alt_text })) ?? [],
      [i],
    ),
    u = async (e, t) => (await s({ nIndex: e, mapAltText: t })) !== !1,
    d = (e, t) => {
      let n = ct(t),
        r = ct(t == 29 ? 6 : 0);
      return n in i[e].urls
        ? i[e].urls[n]
        : r in i[e].urls
          ? i[e].urls[r]
          : null;
    };
  return (0, z.jsxs)(`div`, {
    children: [
      t &&
        (0, z.jsx)(_r, {
          entries: l,
          isLoading: o || c,
          hideModal: r,
          fnRefetch: a,
          mutateAltTextAsync: u,
          isMutatePending: c,
          fnGetImage: (e, t) => (0, z.jsx)(`img`, { src: d(e, t) }),
        }),
      (0, z.jsx)(T, {
        onClick: n,
        children: A(`#StoreAdmin_EditAltText_Button`),
      }),
    ],
  });
}
function Mf(e) {
  let t = pr(`screenshots`),
    {
      data: n,
      refetch: r,
      isFetching: i,
    } = vt({
      queryKey: [`StoreAppScreenshots`, t],
      queryFn: async () => {
        let e = await fetch(t);
        try {
          return await e.json();
        } catch {
          return null;
        }
      },
      enabled: e,
      refetchOnMount: `always`,
      staleTime: 0,
    });
  return { rgScreenshots: n, refetch: r, isFetching: i };
}
function Nf() {
  let e = pr(`quickupdateajax`);
  return St({
    mutationFn: async ({ nIndex: t, mapAltText: n }) => {
      if (t == null || !n) return !1;
      let r = new FormData();
      r.append(`sessionid`, x());
      for (let [e, i] of Object.entries(n))
        r.append(`app[assets][screenshots][${t}][alt_text][${e}]`, i);
      let i = await fetch(e, { method: `post`, body: r }),
        a = await i.json();
      if (!i.ok) throw `Error modifying screenshot`;
      return a;
    },
    onError: (e) => {
      console.error(
        A(
          `#StoreAdmin_UploadError_Generic`,
          typeof e == `string` ? e : e.message,
        ),
      );
    },
  });
}
var Pf = `_6axFEDDKFoQ-`,
  Ff = `yP5iBIK4jNg-`;
function If(e) {
  let { nAppID: t, rgAllCreatorHomeNames: n, nPrimaryPartnerID: r } = e,
    i = ef(t),
    a = (0, R.useMemo)(
      () =>
        i
          ? i
              .filter(
                (e) =>
                  !n.some(
                    (t) =>
                      e.linkname.trim().toLocaleLowerCase() ==
                      t.trim().toLocaleLowerCase(),
                  ),
              )
              .sort((e, t) =>
                e.linkname.localeCompare(t.linkname, void 0, {
                  sensitivity: `base`,
                }),
              )
          : [],
      [i, n],
    );
  return a.length == 0
    ? null
    : (0, z.jsxs)(`div`, {
        children: [
          (0, z.jsx)(`h3`, { children: A(`#AppLinding_Creator_Broken`) }),
          (0, z.jsx)(`p`, { children: A(`#AppLinding_Creator_Broken_desc`) }),
          a.map((e) => (0, z.jsx)(Lf, { pageLink: e }, `dp_` + e.linkname)),
        ],
      });
}
function Lf(e) {
  let { pageLink: t } = e,
    { clanAccountID: n, clanInfo: r, strURL: i } = Tf(t, `developer`);
  return (0, z.jsxs)(`div`, {
    className: Pf,
    children: [
      (0, z.jsx)(cf, {
        pageLink: t,
        clanAccountID: n,
        clanName: r?.group_name || `` + n,
      }),
      (0, z.jsx)(`div`, {
        className: Ff,
        children: qe(
          `#AppLanding_Creator_Broken_Link`,
          (0, z.jsx)(z.Fragment, { children: t.linkname }),
          (0, z.jsx)(kf, { clanAccountID: n, strURL: i, clanInfo: r }),
        ),
      }),
    ],
  });
}
var Rf = class extends Error {
  eResult;
  constructor(e, t) {
    super(t), (this.eResult = e);
  }
};
async function zf(e) {
  let t = `${h.PARTNER_BASE_URL}apps/creatorhomelinkhistory?appid=${e}`,
    n = await fetch(t, { credentials: `include` });
  if (!n.ok) throw Error(`${t} answered ${n.status}`);
  let r = await n.json();
  if (r.success != 1) throw new Rf(r.success, r.msg || `EResult ${r.success}`);
  return r.entries ?? [];
}
var Bf = `useCreatorHomeLinkHistory`;
function Vf(e, t) {
  return vt({
    queryKey: [Bf, e],
    queryFn: () => zf(e),
    enabled: t && e > 0,
    staleTime: 1 / 0,
  });
}
var Hf = `_9JcrL-59Dfc-`,
  Uf = `pnx8m255ZRs-`,
  Wf = `I6JxXG2HY4c-`,
  Gf = `PNrx-uoC9y8-`,
  Kf = `toVgzPkEL88-`;
function qf(e) {
  let { nAppID: t } = e,
    [n, r] = (0, R.useState)(!1);
  return (0, z.jsxs)(P, {
    marginTop: `5`,
    children: [
      (0, z.jsxs)(N, {
        align: `center`,
        gap: `4`,
        children: [
          (0, z.jsx)(Jt, {
            level: `3`,
            children: A(`#AppLanding_Creator_History`),
          }),
          (0, z.jsx)(Ht, {
            size: `1`,
            variant: `outline`,
            onClick: () => r(!n),
            children: A(
              n
                ? `#AppLanding_Creator_History_Hide`
                : `#AppLanding_Creator_History_Show`,
            ),
          }),
        ],
      }),
      n && (0, z.jsx)(Jf, { nAppID: t }),
    ],
  });
}
function Jf(e) {
  let { nAppID: t } = e,
    n = Vf(t, !0),
    [r, i] = (0, R.useState)(!1),
    a = (0, R.useMemo)(() => [...(n.data ?? [])].reverse(), [n.data]),
    o = (0, R.useMemo)(() => (r ? a.filter((e) => !!e.is_active) : a), [a, r]);
  if (n.isLoading)
    return (0, z.jsxs)(N, {
      align: `center`,
      gap: `2`,
      marginTop: `3`,
      children: [
        (0, z.jsx)(Vt, { size: `1` }),
        (0, z.jsx)(F, {
          size: `2`,
          contrast: `description`,
          children: A(`#AppLanding_Creator_History_Loading`),
        }),
      ],
    });
  if (n.isError) {
    let e = n.error instanceof Rf && n.error.eResult == 15;
    return (0, z.jsx)(F, {
      as: `p`,
      size: `2`,
      color: `text-error`,
      marginTop: `3`,
      children: A(
        e
          ? `#AppLanding_Creator_History_Denied`
          : `#AppLanding_Creator_History_Failed`,
      ),
    });
  }
  return a.length == 0
    ? (0, z.jsx)(F, {
        as: `p`,
        size: `2`,
        contrast: `description`,
        marginTop: `3`,
        children: A(`#AppLanding_Creator_History_Empty`),
      })
    : (0, z.jsxs)(N, {
        direction: `column`,
        gap: `3`,
        marginTop: `3`,
        children: [
          (0, z.jsxs)(N, {
            align: `center`,
            gap: `2`,
            children: [
              (0, z.jsx)(zr, { size: `1`, value: r, onChange: i }),
              (0, z.jsx)(F, {
                size: `2`,
                children: A(`#AppLanding_Creator_History_HideRemoved`),
              }),
            ],
          }),
          o.length == 0
            ? (0, z.jsx)(F, {
                as: `p`,
                size: `2`,
                contrast: `description`,
                children: A(`#AppLanding_Creator_History_NoneActive`),
              })
            : (0, z.jsxs)(Zt, {
                columns: `minmax(140px, 1fr) 2fr 2fr 2fr`,
                gapX: `4`,
                alignItems: `center`,
                className: Hf,
                children: [
                  (0, z.jsx)(Yf, {
                    strToken: `#AppLanding_Creator_History_Name`,
                  }),
                  (0, z.jsx)(Yf, {
                    strToken: `#AppLanding_Creator_History_CreatorHome`,
                  }),
                  (0, z.jsx)(Yf, {
                    strToken: `#AppLanding_Creator_History_Linked`,
                  }),
                  (0, z.jsx)(Yf, {
                    strToken: `#AppLanding_Creator_History_Status`,
                  }),
                  o.map((e, t) =>
                    (0, z.jsx)(
                      Xf,
                      { entry: e },
                      `${e.link?.clan_steamid}_${e.link?.linkname}_${e.time_created}_${t}`,
                    ),
                  ),
                ],
              }),
        ],
      });
}
function Yf(e) {
  return (0, z.jsx)(P, {
    paddingY: `1`,
    className: Uf,
    children: (0, z.jsx)(F, {
      size: `1`,
      contrast: `description`,
      whiteSpace: `nowrap`,
      children: A(e.strToken),
    }),
  });
}
function Xf(t) {
  let { entry: n } = t,
    r = n.link ?? {},
    {
      clanAccountID: i,
      clanInfo: a,
      strURL: o,
    } = Tf(
      r,
      r.relation == 1
        ? `game[publishers]`
        : r.relation == 6
          ? `game[franchises]`
          : `game[developers]`,
    ),
    s = !!n.is_active,
    c = s ? void 0 : `description`;
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(P, {
        paddingY: `2`,
        className: Wf,
        children: (0, z.jsx)(F, {
          size: `2`,
          contrast: c,
          whiteSpace: `nowrap`,
          className: e(!s && `_5N9OOVjz5G8-`),
          children: r.linkname,
        }),
      }),
      (0, z.jsx)(P, {
        paddingY: `2`,
        className: Wf,
        children: (0, z.jsx)(N, {
          align: `center`,
          gap: `2`,
          wrap: `nowrap`,
          className: Gf,
          children: (0, z.jsx)(kf, {
            clanAccountID: i,
            strURL: o,
            clanInfo: a,
          }),
        }),
      }),
      (0, z.jsx)(P, {
        paddingY: `2`,
        className: Wf,
        children: (0, z.jsx)(F, {
          size: `2`,
          contrast: c,
          children: qe(
            `#AppLanding_Creator_History_ByOn`,
            (0, z.jsx)(Zf, { accountID: n.created_by_accountid }),
            (0, z.jsx)(z.Fragment, { children: Qf(n.time_created) }),
          ),
        }),
      }),
      (0, z.jsx)(P, {
        paddingY: `2`,
        className: Wf,
        children: (0, z.jsx)(F, {
          size: `2`,
          contrast: c,
          children: s
            ? A(`#AppLanding_Creator_History_Active`)
            : qe(
                `#AppLanding_Creator_History_RemovedByOn`,
                (0, z.jsx)(Zf, { accountID: n.updated_by_accountid }),
                (0, z.jsx)(z.Fragment, { children: Qf(n.time_modified) }),
              ),
        }),
      }),
    ],
  });
}
function Zf(e) {
  let { accountID: t } = e;
  return (t ?? 0) > 0
    ? (0, z.jsx)(N, {
        inline: !0,
        align: `center`,
        className: Kf,
        children: (0, z.jsx)(cr, { accountID: t }),
      })
    : (0, z.jsx)(z.Fragment, {
        children: A(`#AppLanding_Creator_History_UnknownAccount`),
      });
}
function Qf(e) {
  return (e ?? 0) > 0 ? w(e) : ``;
}
var $f = `ut9Zlzvv8tU-`,
  ep = `_918ET1T3Q44-`,
  tp = `QNmSW6M-UmM-`,
  np = `kAJxJuJ2QLc-`,
  rp = `LtwI-MuOmiI-`,
  ip = `x8oQENqyJ1s-`,
  ap = `d7THf9xgFO0-`,
  op = `iontxnFO5hk-`,
  sp = `d7UCTQDYGFg-`,
  cp = `_2Pn7yJB3D4M-`,
  lp = `_0JhQq90Mrho-`,
  up = {
    bAccessibilityDifficultyLevels: `#Accessibility_Feature_AdjustableDifficulty`,
    bAccessibilitySaveAnytime: `#Accessibility_Feature_SaveAnytime`,
    bAccessibilityNarratedMenus: `#Accessibility_Feature_NarratedMenus`,
    bAccessibilityBackgroundVolumeControls: `#Accessibility_Feature_CustomVolumeControls`,
    bAccessibilityStereoSound: `#Accessibility_Feature_StereoSound`,
    bAccessibilitySurroundSound: `#Accessibility_Feature_SurroundSound`,
    bAccessibilityResizableUI: `#Accessibility_Feature_AdjustableTextSize`,
    bAccessibilitySubtitles: `#Accessibility_Feature_SubtitleOptions`,
    bAccessibilityColorAlternatives: `#Accessibility_Feature_ColorAlternatives`,
    bAccessibilityCameraComfort: `#Accessibility_Feature_CameraComfort`,
    bAccessibilityKeyboardOnlyOption: `#Accessibility_Feature_KeyboardOnlyOption`,
    bAccessibilityMouseOnlyOption: `#Accessibility_Feature_MouseOnlyOption`,
    bAccessibilityTouchOnlyOption: `#Accessibility_Feature_TouchOnlyOption`,
    bAccessibilityPlayableWithoutQuicktimeEvents: `#Accessibility_Feature_WithoutQuickTimeEvents`,
    bAccessibilityChatTexttoSpeech: `#Accessibility_Feature_TextToSpeech`,
    bAccessibilityChatSpeechtoText: `#Accessibility_Feature_SpeechToText`,
    bAccessibilityPlayableAtYourOwnPace: `#Accessibility_Feature_PlayableAtYourOwnPace`,
    bAccessibilityPlayableWithoutVision: `#Accessibility_Feature_PlayableWithoutVision`,
    bAccessibilityContrastControls: `#Accessibility_Feature_ContrastControls`,
  },
  dp = {
    bAccessibilityDifficultyLevels: `adjustable_difficulty`,
    bAccessibilitySaveAnytime: `save_anytime`,
    bAccessibilityNarratedMenus: `narrated_game_menus`,
    bAccessibilityBackgroundVolumeControls: `custom_volume_controls`,
    bAccessibilityStereoSound: `stereo_sound`,
    bAccessibilitySurroundSound: `surround_sound`,
    bAccessibilityResizableUI: `adjustable_text_size`,
    bAccessibilitySubtitles: `subtitle_options`,
    bAccessibilityColorAlternatives: `color_alternatives`,
    bAccessibilityCameraComfort: `camera_comfort`,
    bAccessibilityKeyboardOnlyOption: `keyboard_only_option`,
    bAccessibilityMouseOnlyOption: `mouse_only_option`,
    bAccessibilityTouchOnlyOption: `touch_only_option`,
    bAccessibilityPlayableWithoutQuicktimeEvents: `playable_without_timed_input`,
    bAccessibilityChatTexttoSpeech: `chat_text_to_speech`,
    bAccessibilityChatSpeechtoText: `chat_speech_to_text`,
    bAccessibilityPlayableAtYourOwnPace: `playable_at_your_own_pace`,
    bAccessibilityPlayableWithoutVision: `playable_without_vision`,
    bAccessibilityContrastControls: `contrast_controls`,
  },
  fp = {
    bAccessibilityDifficultyLevels: `gameplay`,
    bAccessibilitySaveAnytime: `gameplay`,
    bAccessibilityNarratedMenus: `audio`,
    bAccessibilityBackgroundVolumeControls: `audio`,
    bAccessibilityStereoSound: `audio`,
    bAccessibilitySurroundSound: `audio`,
    bAccessibilityResizableUI: `visual`,
    bAccessibilitySubtitles: `visual`,
    bAccessibilityColorAlternatives: `visual`,
    bAccessibilityCameraComfort: `visual`,
    bAccessibilityPlayableWithoutVision: `visual`,
    bAccessibilityContrastControls: `visual`,
    bAccessibilityKeyboardOnlyOption: `input`,
    bAccessibilityMouseOnlyOption: `input`,
    bAccessibilityTouchOnlyOption: `input`,
    bAccessibilityPlayableWithoutQuicktimeEvents: `input`,
    bAccessibilityChatTexttoSpeech: `input`,
    bAccessibilityChatSpeechtoText: `input`,
    bAccessibilityPlayableAtYourOwnPace: `input`,
  },
  pp = {
    gameplay: `#Accessibility_Group_Gameplay`,
    visual: `#Accessibility_Group_Visual`,
    audio: `#Accessibility_Group_Audio`,
    input: `#Accessibility_Group_Input`,
  };
function mp(e) {
  let [t, n] = (0, R.useState)(e.initialOpen ?? !1),
    r = R.useId(),
    i = Object.entries(e.features)
      .filter(([e, t]) => t)
      .map(([e]) => e);
  if (i.length === 0) return null;
  let a = {};
  i.forEach((e) => {
    let t = fp[e];
    (a[t] ??= []), a[t].push(e);
  });
  let o = Object.keys(a).length > 1;
  return (0, z.jsxs)(`details`, {
    className: $f,
    open: t,
    onToggle: (e) => n(e.currentTarget.open),
    children: [
      (0, z.jsxs)(de, {
        className: ep,
        children: [
          (0, z.jsx)(`div`, {
            className: cp,
            children: (0, z.jsx)(hp, { className: np, "aria-label": `` }),
          }),
          (0, z.jsxs)(`span`, {
            className: rp,
            id: r,
            children: [
              (0, z.jsx)(`span`, {
                className: sp,
                children: t
                  ? A(`#AccessibilityFeatures`)
                  : A(`#AccessibilityFeaturesWithCount`, i.length),
              }),
              (0, z.jsx)(`a`, {
                className: lp,
                href: `${h.HELP_BASE_URL}faqs/view/02F5-ACB2-6038-0F36`,
                target: `_blank`,
                children: `?`,
              }),
            ],
          }),
        ],
      }),
      (0, z.jsxs)(`ul`, {
        className: tp,
        "aria-labelledby": r,
        children: [
          o &&
            (0, z.jsxs)(z.Fragment, {
              children: [
                a.gameplay &&
                  (0, z.jsx)(`li`, {
                    children: (0, z.jsx)(gp, {
                      group: `gameplay`,
                      features: a.gameplay,
                      open: t,
                    }),
                  }),
                a.visual &&
                  (0, z.jsx)(`li`, {
                    children: (0, z.jsx)(gp, {
                      group: `visual`,
                      features: a.visual,
                      open: t,
                    }),
                  }),
                a.audio &&
                  (0, z.jsx)(`li`, {
                    children: (0, z.jsx)(gp, {
                      group: `audio`,
                      features: a.audio,
                      open: t,
                    }),
                  }),
                a.input &&
                  (0, z.jsx)(`li`, {
                    children: (0, z.jsx)(gp, {
                      group: `input`,
                      features: a.input,
                      open: t,
                    }),
                  }),
              ],
            }),
          !o &&
            i.map((e) =>
              (0, z.jsx)(
                `li`,
                { children: (0, z.jsx)(_p, { feature: e, open: t }) },
                e,
              ),
            ),
        ],
      }),
    ],
  });
}
function hp(e) {
  return (0, z.jsxs)(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    version: `1.1`,
    viewBox: `0 0 1200 1200`,
    ...e,
    children: [
      (0, z.jsx)(`path`, {
        fill: `currentColor`,
        d: `m600 60c-298.03 0-540 241.97-540 540s241.97 540 540 540 540-241.97 540-540-241.97-540-540-540zm0 95.555c245.3 0 444.46 199.14 444.46 444.45s-199.15 444.45-444.46 444.45c-245.29 0-444.45-199.14-444.45-444.45s199.15-444.45 444.45-444.45z`,
        fillRule: `evenodd`,
      }),
      (0, z.jsx)(`path`, {
        fill: `currentColor`,
        d: `m521.1 573.13c-9.3242 107.1-33.887 210.97-72.18 311.96-9.3477 24.66 3.0859 52.262 27.73 61.609 24.66 9.3477 52.262-3.0703 61.609-27.73 27.109-71.496 47.832-144.32 61.738-218.58 13.906 74.258 34.633 147.09 61.738 218.58 9.3477 24.66 36.949 37.078 61.609 27.73 24.66-9.3477 37.078-36.949 27.73-61.609-38.27-100.93-62.82-204.76-72.156-311.76 57.227-2.8086 114.48-8.8086 171.73-18.109 26.027-4.2344 43.727-28.801 39.492-54.828-4.2227-26.016-28.789-43.715-54.816-39.492-156.98 25.512-313.96 24.504-470.94-0.046875-26.051-4.0664-50.508 13.777-54.59 39.828-4.0664 26.051 13.777 50.508 39.828 54.574 57.145 8.9414 114.3 14.941 171.47 17.867z`,
        fillRule: `evenodd`,
      }),
      (0, z.jsx)(`path`, {
        fill: `currentColor`,
        d: `m686.23 353.69c0 47.625-38.605 86.234-86.23 86.234s-86.23-38.609-86.23-86.234 38.605-86.23 86.23-86.23 86.23 38.605 86.23 86.23`,
        fillRule: `evenodd`,
      }),
    ],
  });
}
function gp(e) {
  let t = R.useId();
  return (0, z.jsxs)(z.Fragment, {
    children: [
      (0, z.jsx)(`span`, { className: ip, id: t, children: A(pp[e.group]) }),
      (0, z.jsx)(`ul`, {
        className: ap,
        "aria-labelledby": t,
        children: e.features.map((t) =>
          (0, z.jsx)(
            `li`,
            { children: (0, z.jsx)(_p, { feature: t, open: e.open }) },
            t,
          ),
        ),
      }),
    ],
  });
}
function _p(e) {
  return (0, z.jsx)(ye, {
    href: `${h.STORE_BASE_URL}category/${dp[e.feature]}`,
    className: op,
    focusable: e.open,
    children: (0, z.jsx)(`span`, {
      className: rp,
      children: (0, z.jsx)(`span`, {
        className: sp,
        children: A(up[e.feature]),
      }),
    }),
  });
}
var vp = `_-3Y-jjXizWk-`,
  yp = `_2A6QTL8eyDA-`,
  bp = `M-sj-csriYQ-`,
  J = `xjBsqiHr-3Q-`,
  xp = `PdV-oy1zj6Q-`,
  Sp = `_3tE1Gj-pDe0-`,
  Cp = `gd--YuP96Wo-`,
  wp = `N5ekii0FuqM-`,
  Tp = `gXxQHoZ-fqY-`,
  Ep = `VnxbllcHQJM-`,
  Y = `DQnPNUgHr7s-`,
  X = `n-2BabGuBWE-`;
function Dp() {
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(`#App_Landing_AccessibilityFeatures_Wizard_Gameplay`),
      }),
      (0, z.jsxs)(`div`, {
        className: X,
        children: [
          (0, z.jsx)(`p`, {
            children: A(`#App_Landing_AccessibilityFeatures_WizardPrompt_Desc`),
          }),
          (0, z.jsx)(`p`, {
            children: D(
              `#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Instructions`,
              (0, z.jsx)(`a`, {
                href: `${h.PARTNER_BASE_URL}doc/accessibility_features#gameplay`,
                target: `_blank`,
              }),
            ),
          }),
        ],
      }),
      (0, z.jsx)(`div`, {
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Gameplay_Question`,
        ),
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc`,
        ),
        id: `bAccessibilityDifficultyLevels`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc`,
        ),
        id: `bAccessibilitySaveAnytime`,
      }),
    ],
  });
}
function Op() {
  let { currentValues: e, fnSetValue: t } = Bp(),
    n = R.useId();
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus`,
        ),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: D(
            `#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Instructions`,
            (0, z.jsx)(`a`, {
              href: `https://learn.microsoft.com/windows/win32/winauto/entry-uiauto-win32`,
              target: `_blank`,
            }),
            (0, z.jsx)(`a`, {
              href: `${h.PARTNER_BASE_URL}doc/accessibility_features#narrated_menus`,
              target: `_blank`,
            }),
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        id: n,
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Question`,
        ),
      }),
      (0, z.jsx)(Wp, {
        labelId: n,
        options: [
          {
            id: `yes`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_Yes`,
            ),
          },
          {
            id: `no`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_NarratedMenus_No`,
            ),
          },
        ],
        fnCalculateSelectedOption: () => {
          if (e.bAccessibilityNarratedMenus) return `yes`;
          if (e.bAccessibilityNarratedMenus === !1) return `no`;
        },
        fnSetValues: (e) => {
          e === `yes` && t(`bAccessibilityNarratedMenus`, !0),
            e === `no` && t(`bAccessibilityNarratedMenus`, !1);
        },
      }),
    ],
  });
}
function kp() {
  let { currentValues: e, fnSetValue: t } = Bp(),
    n = R.useId();
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision`,
        ),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: A(
            `#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Instructions`,
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        id: n,
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Question`,
        ),
      }),
      (0, z.jsx)(Wp, {
        labelId: n,
        options: [
          {
            id: `yes`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_Yes`,
            ),
          },
          {
            id: `no`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_PlayableWithoutVision_No`,
            ),
          },
        ],
        fnCalculateSelectedOption: () => {
          if (e.bAccessibilityPlayableWithoutVision) return `yes`;
          if (e.bAccessibilityPlayableWithoutVision === !1) return `no`;
        },
        fnSetValues: (e) => {
          e === `yes` && t(`bAccessibilityPlayableWithoutVision`, !0),
            e === `no` && t(`bAccessibilityPlayableWithoutVision`, !1);
        },
      }),
    ],
  });
}
function Ap() {
  let { currentValues: e, fnSetValue: t } = Bp(),
    n = R.useId();
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls`,
        ),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: D(
            `#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Instructions`,
            (0, z.jsx)(`a`, {
              href: `${h.PARTNER_BASE_URL}doc/accessibility_features#volume_controls`,
              target: `_blank`,
            }),
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        id: n,
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Question`,
        ),
      }),
      (0, z.jsx)(Wp, {
        labelId: n,
        options: [
          {
            id: `yes`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_Yes`,
            ),
          },
          {
            id: `no`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_CustomVolumeControls_No`,
            ),
          },
        ],
        fnCalculateSelectedOption: () => {
          if (e.bAccessibilityBackgroundVolumeControls) return `yes`;
          if (e.bAccessibilityBackgroundVolumeControls === !1) return `no`;
        },
        fnSetValues: (e) => {
          e === `yes` && t(`bAccessibilityBackgroundVolumeControls`, !0),
            e === `no` && t(`bAccessibilityBackgroundVolumeControls`, !1);
        },
      }),
    ],
  });
}
function jp() {
  let { currentValues: e, fnSetValue: t } = Bp(),
    n = R.useId();
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(
          `#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio`,
        ),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: A(
            `#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Instructions`,
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        id: n,
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_Question`,
        ),
      }),
      (0, z.jsx)(Wp, {
        labelId: n,
        options: [
          {
            id: `surround`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_SurroundSound`,
            ),
          },
          {
            id: `stereo`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_StereoSound`,
            ),
          },
          {
            id: `none`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_DirectionalAudio_None`,
            ),
          },
        ],
        fnCalculateSelectedOption: () =>
          e.bAccessibilitySurroundSound
            ? `surround`
            : e.bAccessibilityStereoSound
              ? `stereo`
              : `none`,
        fnSetValues: (e) => {
          e === `surround` &&
            (t(`bAccessibilitySurroundSound`, !0),
            t(`bAccessibilityStereoSound`, !0)),
            e === `stereo` &&
              (t(`bAccessibilitySurroundSound`, !1),
              t(`bAccessibilityStereoSound`, !0)),
            e === `none` &&
              (t(`bAccessibilitySurroundSound`, !1),
              t(`bAccessibilityStereoSound`, !1));
        },
      }),
    ],
  });
}
function Mp() {
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(`#App_Landing_AccessibilityFeatures_Wizard_Visual`),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: D(
            `#App_Landing_AccessibilityFeatures_Wizard_Visual_Instructions`,
            (0, z.jsx)(`a`, {
              href: `${h.PARTNER_BASE_URL}doc/accessibility_features#visual_recommendations`,
              target: `_blank`,
            }),
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Visual_Question`,
        ),
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc`,
        ),
        id: `bAccessibilityResizableUI`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc`,
        ),
        id: `bAccessibilitySubtitles`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc`,
        ),
        id: `bAccessibilityColorAlternatives`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc`,
        ),
        id: `bAccessibilityContrastControls`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc`,
        ),
        id: `bAccessibilityCameraComfort`,
      }),
    ],
  });
}
function Np() {
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(`#App_Landing_AccessibilityFeatures_Wizard_Input`),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: D(
            `#App_Landing_AccessibilityFeatures_Wizard_Input_Instructions`,
            (0, z.jsx)(`a`, {
              href: `${h.PARTNER_BASE_URL}doc/accessibility_features#input_recommendations`,
              target: `_blank`,
            }),
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        className: Y,
        children: A(`#App_Landing_AccessibilityFeatures_Wizard_Input_Question`),
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc`,
        ),
        id: `bAccessibilityKeyboardOnlyOption`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc`,
        ),
        id: `bAccessibilityMouseOnlyOption`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc`,
        ),
        id: `bAccessibilityTouchOnlyOption`,
      }),
    ],
  });
}
function Pp() {
  let { currentValues: e, fnSetValue: t } = Bp(),
    n = R.useId();
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(
          `#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents`,
        ),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: A(
            `#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Instructions`,
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        id: n,
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_Question`,
        ),
      }),
      (0, z.jsx)(Wp, {
        labelId: n,
        options: [
          {
            id: `no`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_No`,
            ),
          },
          {
            id: `playable_without_quick_time_events`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoQTE`,
            ),
          },
          {
            id: `playable_at_your_own_pace`,
            name: A(
              `#App_Landing_AccessibilityFeatures_Wizard_QuickTimeEvents_NoTimedInput`,
            ),
          },
        ],
        fnCalculateSelectedOption: () => {
          if (e.bAccessibilityPlayableAtYourOwnPace)
            return `playable_at_your_own_pace`;
          if (e.bAccessibilityPlayableWithoutQuicktimeEvents)
            return `playable_without_quick_time_events`;
          if (
            e.bAccessibilityPlayableAtYourOwnPace === !1 &&
            e.bAccessibilityPlayableWithoutQuicktimeEvents === !1
          )
            return `no`;
        },
        fnSetValues: (e) => {
          e === `playable_at_your_own_pace` &&
            (t(`bAccessibilityPlayableAtYourOwnPace`, !0),
            t(`bAccessibilityPlayableWithoutQuicktimeEvents`, !0)),
            e === `playable_without_quick_time_events` &&
              (t(`bAccessibilityPlayableAtYourOwnPace`, !1),
              t(`bAccessibilityPlayableWithoutQuicktimeEvents`, !0)),
            e === `no` &&
              (t(`bAccessibilityPlayableAtYourOwnPace`, !1),
              t(`bAccessibilityPlayableWithoutQuicktimeEvents`, !1));
        },
      }),
    ],
  });
}
function Fp() {
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(
          `#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText`,
        ),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: D(
            `#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Instructions`,
            (0, z.jsx)(`a`, {
              href: `${h.PARTNER_BASE_URL}doc/accessibility_features#tts`,
              target: `_blank`,
            }),
          ),
        }),
      }),
      (0, z.jsx)(`div`, {
        className: Y,
        children: A(
          `#App_Landing_AccessibilityFeatures_Wizard_TextToSpeechAndSpeechToText_Question`,
        ),
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc`,
        ),
        id: `bAccessibilityChatTexttoSpeech`,
      }),
      (0, z.jsx)(Q, {
        name: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText`,
        ),
        description: A(
          `#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc`,
        ),
        id: `bAccessibilityChatSpeechtoText`,
      }),
    ],
  });
}
function Ip() {
  return (0, z.jsxs)(`div`, {
    className: J,
    children: [
      (0, z.jsx)(Z, {
        subtitle: A(`#App_Landing_AccessibilityFeatures_Wizard_Summary`),
      }),
      (0, z.jsx)(`div`, {
        className: X,
        children: (0, z.jsx)(`p`, {
          children: A(
            `#App_Landing_AccessibilityFeatures_Wizard_Summary_Instructions`,
          ),
        }),
      }),
      (0, z.jsxs)(Ae, {
        children: [
          (0, z.jsxs)(Se, {
            children: [
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableDifficulty_Desc`,
                ),
                id: `bAccessibilityDifficultyLevels`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SaveAnytime_Desc`,
                ),
                id: `bAccessibilitySaveAnytime`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_CustomVolumeControls_Desc`,
                ),
                id: `bAccessibilityBackgroundVolumeControls`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_NarratedMenus_Desc`,
                ),
                id: `bAccessibilityNarratedMenus`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_StereoSound_Desc`,
                ),
                id: `bAccessibilityStereoSound`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SurroundSound_Desc`,
                ),
                id: `bAccessibilitySurroundSound`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_AdjustableTextSize_Desc`,
                ),
                id: `bAccessibilityResizableUI`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SubtitleOptions_Desc`,
                ),
                id: `bAccessibilitySubtitles`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_ColorAlternatives_Desc`,
                ),
                id: `bAccessibilityColorAlternatives`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_ContrastControls_Desc`,
                ),
                id: `bAccessibilityContrastControls`,
              }),
            ],
          }),
          (0, z.jsxs)(Se, {
            children: [
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_CameraComfort_Desc`,
                ),
                id: `bAccessibilityCameraComfort`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableWithoutVision_Desc`,
                ),
                id: `bAccessibilityPlayableWithoutVision`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_KeyboardOnlyOption_Desc`,
                ),
                id: `bAccessibilityKeyboardOnlyOption`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_MouseOnlyOption_Desc`,
                ),
                id: `bAccessibilityMouseOnlyOption`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_TouchOnlyOption_Desc`,
                ),
                id: `bAccessibilityTouchOnlyOption`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_WithoutQuickTimeEvents_Desc`,
                ),
                id: `bAccessibilityPlayableWithoutQuicktimeEvents`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_PlayableAtYourOwnPace_Desc`,
                ),
                id: `bAccessibilityPlayableAtYourOwnPace`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_TextToSpeech_Desc`,
                ),
                id: `bAccessibilityChatTexttoSpeech`,
              }),
              (0, z.jsx)(Q, {
                name: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText`,
                ),
                description: A(
                  `#App_Landing_AccessibilityFeatures_Wizard_Feature_SpeechToText_Desc`,
                ),
                id: `bAccessibilityChatSpeechtoText`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
var Lp = { 2: [kp, Mp, Pp] };
function Rp(e, t, n, r) {
  return (0, R.useMemo)(() => {
    if (e) return [Ip];
    if (!r)
      return [Dp, Op, kp, Ap, jp, Mp, Np, Pp, t ? Fp : void 0, Ip].filter(
        (e) => !!e,
      );
    let i = new Set();
    for (let e = n + 1; e <= 2; e++) if (e in Lp) for (let t of Lp[e]) i.add(t);
    return [...i, Ip];
  }, [e, t, n, r]);
}
var zp = R.createContext(void 0);
function Bp() {
  return R.useContext(zp);
}
function Vp(e) {
  let t = R.useMemo(
    () => ({
      currentValues: e.currentValues,
      fnSetValue: e.fnSetValue,
      nPageIndex: e.nPageIndex,
      bEditMode: e.bEditMode,
    }),
    [e.currentValues, e.fnSetValue, e.nPageIndex, e.bEditMode],
  );
  return (0, z.jsx)(zp.Provider, { value: t, children: e.children });
}
function Hp(e) {
  let {
      close: t,
      features: n,
      editMode: r,
      changedMode: i,
      isMultiplayer: a,
      nLastVersionCompleted: o,
    } = e,
    [s, c] = (0, R.useState)(0),
    l = Rp(
      r,
      a || n.bAccessibilityChatSpeechtoText || n.bAccessibilityChatTexttoSpeech,
      o,
      i,
    ),
    [u, d] = R.useState(n),
    f = () => c((e) => e - 1),
    p = () => c((e) => e + 1),
    m = f;
  s === 0 && (m = t);
  let h = p,
    g = A(`#Wizard_NextButton`);
  s === l.length - 1 &&
    ((h = () => {
      Gp(u), t();
    }),
    (g = A(`#Wizard_SaveAndExitButton`)));
  let _ = (e, t) => {
      d((n) => ({ ...n, [e]: t }));
    },
    v = l[s];
  return (0, z.jsxs)(Lt, {
    active: !0,
    className: yp,
    children: [
      (0, z.jsxs)(Vp, {
        fnSetValue: _,
        currentValues: u,
        nPageIndex: s,
        bEditMode: r,
        children: [
          (0, z.jsx)(Up, { nPages: l.length }),
          (0, z.jsx)(st, { className: void 0, children: (0, z.jsx)(v, {}) }),
        ],
      }),
      (0, z.jsx)(tt, {
        className: bp,
        onCancel: m,
        strCancelText: A(`#Wizard_BackButton`),
        onOK: h,
        strOKText: g,
      }),
    ],
  });
}
function Up(t) {
  let { nPages: n } = t,
    { nPageIndex: r } = Bp(),
    i = (100 * (r + 1)) / (n + 1);
  return (0, z.jsxs)(`div`, {
    children: [
      (0, z.jsx)(`div`, {
        className: xp,
        children: A(`#App_Landing_AccessibilityFeatures_Wizard_Title`),
      }),
      (0, z.jsx)(`div`, {
        className: e(vp, r == n - 1 && `hhq9DnjJtjs-`),
        children:
          r < n - 1 &&
          (0, z.jsx)(`div`, {
            className: e(`_69fcWRPTdVQ-`),
            style: { width: i + `%` },
          }),
      }),
    ],
  });
}
function Z(e) {
  let { nPageIndex: t, bEditMode: n } = Bp();
  return n
    ? null
    : (0, z.jsx)(`div`, {
        className: Sp,
        children: (0, z.jsxs)(`div`, {
          className: Cp,
          children: [
            A(`#Wizard_StepNumber`, t + 1),
            e.subtitle && (0, z.jsx)(We, { children: e.subtitle }),
          ],
        }),
      });
}
function Q(e) {
  let { currentValues: t, fnSetValue: n } = Bp();
  return (0, z.jsx)(E, {
    label: (0, z.jsxs)(`div`, {
      className: Ep,
      children: [
        (0, z.jsxs)(`span`, {
          children: [
            e.name,
            ` `,
            e.tooltip &&
              (0, z.jsx)(O, {
                customTooltip: !0,
                tooltip: (0, z.jsx)(Pe, {
                  className: `NsfGoNs6DSg-`,
                  children: e.tooltip,
                }),
              }),
          ],
        }),
        (0, z.jsx)(`p`, { children: e.description }),
      ],
    }),
    checked: t[e.id],
    onChange: (t) => n(e.id, t),
  });
}
function Wp(t) {
  let n = t.fnCalculateSelectedOption();
  return (0, z.jsx)(ce, {
    labelId: t.labelId,
    value: n,
    onChange: t.fnSetValues,
    children: t.options.map((t) =>
      (0, z.jsxs)(
        _e,
        {
          value: t.id,
          children: [
            (0, z.jsx)(`div`, {
              className: e(wp, n == t.id && `R0zkKZzrcMM-`),
            }),
            (0, z.jsx)(`div`, { className: Tp, children: A(t.name) }),
          ],
        },
        t.id,
      ),
    ),
  });
}
function $(e, t) {
  let r = document.querySelector(
    `[name="app[classification][category][category_${e}]"]`,
  );
  n(r, `Missing category input for`, e),
    r && r.setAttribute(`value`, t ? `true` : ``);
}
function Gp(e) {
  $(64, e.bAccessibilityResizableUI),
    $(65, e.bAccessibilitySubtitles),
    $(66, e.bAccessibilityColorAlternatives),
    $(67, e.bAccessibilityCameraComfort),
    $(68, e.bAccessibilityBackgroundVolumeControls),
    $(69, e.bAccessibilityStereoSound),
    $(70, e.bAccessibilitySurroundSound),
    $(71, e.bAccessibilityNarratedMenus),
    $(72, e.bAccessibilityChatSpeechtoText),
    $(73, e.bAccessibilityChatTexttoSpeech),
    $(74, e.bAccessibilityPlayableWithoutQuicktimeEvents),
    $(75, e.bAccessibilityKeyboardOnlyOption),
    $(76, e.bAccessibilityMouseOnlyOption),
    $(77, e.bAccessibilityTouchOnlyOption),
    $(78, e.bAccessibilityDifficultyLevels),
    $(79, e.bAccessibilitySaveAnytime),
    $(80, e.bAccessibilityPlayableAtYourOwnPace),
    $(81, e.bAccessibilityPlayableWithoutVision),
    $(82, e.bAccessibilityContrastControls),
    document
      .querySelector(`[name="app[content][accessibilitywizard][v1]"]`)
      ?.setAttribute(`value`, `true`),
    document
      .querySelector(`[name="app[content][accessibilitywizard][v2]"]`)
      ?.setAttribute(`value`, `true`);
  let t = document.getElementById(`submitBtn`);
  t && t.click();
}
var Kp = `XfvvD-BYnLU-`,
  qp = `MSQdO5JivPc-`,
  Jp = `J2a4iIIgWWQ-`,
  Yp = `YVos-jJBmnw-`,
  Xp = `Z8MHUqYUBQQ-`,
  Zp = `-gxj6fgaK-Y-`,
  Qp = `l6qKSnVfODo-`,
  $p = `_1ATj3oxCW7E-`,
  em = `f7KC5UwjHDM-`,
  tm = `cBFeVRjxhNQ-`,
  nm = `YgZgx5rQv0U-`;
function rm(e) {
  let {
      isMultiplayer: t,
      bWizardCompleted: n,
      nLastVersionCompleted: r,
      ...i
    } = e,
    a = Object.entries(i).some(([e, t]) => e.startsWith(`bAccessibility`) && t),
    [o, s] = R.useState(0);
  return (0, z.jsxs)(z.Fragment, {
    children: [
      o !== 0 &&
        (0, z.jsx)(Hp, {
          editMode: o === 2,
          changedMode: o === 3,
          close: () => s(0),
          features: i,
          isMultiplayer: t,
          nLastVersionCompleted: r,
        }),
      (0, z.jsx)(im, {
        bWizardCompleted: n,
        nLastVersionCompleted: r,
        bHasAnyAccessibilityFeatures: a,
        setModalState: s,
        features: e,
      }),
    ],
  });
}
function im(e) {
  let {
    bHasAnyAccessibilityFeatures: t,
    bWizardCompleted: n,
    nLastVersionCompleted: r,
    setModalState: i,
    features: a,
  } = e;
  return t || n
    ? (0, z.jsx)(om, {
        bHasAnyAccessibilityFeatures: t,
        onEdit: () => i(2),
        onStart: () => i(1),
        onChanged: () => i(3),
        features: a,
        nLastVersionCompleted: r,
      })
    : (0, z.jsx)(am, { onStart: () => i(1) });
}
function am(e) {
  return (0, z.jsxs)(st, {
    children: [
      (0, z.jsx)(be, {
        className: Kp,
        children: A(`#App_Landing_AccessibilityFeatures_WizardPrompt_Desc`),
      }),
      (0, z.jsx)(Ze, {
        className: em,
        onClick: e.onStart,
        children: A(
          `#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton`,
        ),
      }),
    ],
  });
}
function om(e) {
  return (0, z.jsxs)(st, {
    children: [
      (0, z.jsx)(be, {
        className: Kp,
        children: e.bHasAnyAccessibilityFeatures
          ? A(`#App_Landing_AccessibilityFeatures_Summary`)
          : A(`#App_Landing_AccessibilityFeatures_Summary_NoFeatures`),
      }),
      e.bHasAnyAccessibilityFeatures &&
        (0, z.jsx)(sm, { features: e.features, onEdit: e.onEdit }),
      (0, z.jsx)(`div`, {
        className: tm,
        children: (0, z.jsx)(Ze, {
          className: em,
          onClick: e.onStart,
          children: A(
            `#App_Landing_AccessibilityFeatures_WizardPrompt_StartButton`,
          ),
        }),
      }),
      2 > e.nLastVersionCompleted &&
        (0, z.jsxs)(`div`, {
          className: `CUVVzwQpqzA-`,
          children: [
            (0, z.jsx)(`div`, {
              className: `qIUPAIKcRAM-`,
              children: (0, z.jsx)(`span`, {
                className: `BkqJ6iwg4Ho-`,
                children: A(`#Callout_NEW`),
              }),
            }),
            (0, z.jsxs)(`div`, {
              children: [
                (0, z.jsx)(`p`, {
                  children: A(
                    `#App_Landing_AccessibilityFeatures_WizardPrompt_Update_Desc`,
                  ),
                }),
                (0, z.jsxs)(`div`, {
                  className: `vX67tzlTw4U-`,
                  children: [
                    (0, z.jsx)(Ze, {
                      className: `EDLrEp6Q3Mg-`,
                      onClick: e.onChanged,
                      children: A(
                        `#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton`,
                      ),
                    }),
                    (0, z.jsx)(`span`, {
                      children: A(
                        `#App_Landing_AccessibilityFeatures_WizardPrompt_UpdateButton_Desc`,
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function sm(t) {
  return (0, z.jsxs)(`div`, {
    className: qp,
    children: [
      (0, z.jsx)(`div`, {
        className: Jp,
        children: (0, z.jsx)(`div`, {
          className: nm,
          children: (0, z.jsx)(mp, { features: t.features, initialOpen: !0 }),
        }),
      }),
      (0, z.jsxs)(`div`, {
        className: Yp,
        onClick: t.onEdit,
        children: [
          (0, z.jsx)(`div`, { className: e(Xp, Zp) }),
          (0, z.jsx)(`div`, { className: $p, children: (0, z.jsx)(Oe, {}) }),
          (0, z.jsx)(`div`, { className: e(Xp, Qp) }),
        ],
      }),
    ],
  });
}
function cm(e) {
  return (0, z.jsxs)(gt, {
    children: [
      (0, z.jsx)(j, {
        path: L.GameEdit(`:action(${Xn.join(`|`)})`, `:itemid`),
        children: (0, z.jsx)(vr, {
          children: (0, z.jsx)(Bn, {
            config: {
              "storeadmin-releasedateinfo": (e) =>
                (0, z.jsx)(Qn, { bIsGameEdit: !0, ...e }),
              "storeadmin-controllersupportinfo": (e) =>
                (0, z.jsx)(Ri, { ...e }),
              "storeadmin-app-description-editor": (e) =>
                (0, z.jsx)(Yi, { ...e }),
              "storeadmin-app-extraassetslist": (e) => (0, z.jsx)(Cr, { ...e }),
              "storeadmin-season-pass-survey": (e) => (0, z.jsx)(Vu, { ...e }),
              "storeadmin-creator-home-display-edit": (e) =>
                (0, z.jsx)(sa, { ...e }),
              "storeadmin-dlc-edit": (e) => (0, z.jsx)(Fa, { ...e }),
              "storeadmin-dlc-dependancy-edit": (e) => (0, z.jsx)(Ca, { ...e }),
              "storeadmin-social-media-edit": (e) => (0, z.jsx)(Ju, { ...e }),
              "storeadmin-anticheat-edit": (e) => (0, z.jsx)(ud, { ...e }),
              "storeadmin-graphicalassets-confirmdialog": (e) =>
                (0, z.jsx)(qd, { ...e }),
              "storeadmin-pinnedbundles-edit": (e) => (0, z.jsx)(za, { ...e }),
              "storeadmin-purchaseoptionsorder-edit": (e) =>
                (0, z.jsx)(Hl, { ...e }),
              "storeadmin-accessibilityfeatures": (e) =>
                (0, z.jsx)(rm, { ...e }),
              "storeadmin-creator-home-edit": (e) => (0, z.jsx)(Cf, { ...e }),
              "storeadmin-app-screenshot-alttext": (e) =>
                (0, z.jsx)(jf, { ...e }),
              "storeadmin-creator-home-fixup": (e) => (0, z.jsx)(If, { ...e }),
              "storeadmin-creator-home-link-history": (e) =>
                (0, z.jsx)(qf, { ...e }),
              "storeadmin-editions-editor": (e) => (0, z.jsx)(Gn, { ...e }),
            },
          }),
        }),
      }),
      (0, z.jsx)(j, {
        path: L.PackageEdit(`:action(${Kn.join(`|`)})`, `:itemid`),
        children: (0, z.jsx)(Bn, {
          config: {
            "storeadmin-graphicalassets-confirmdialog": (e) =>
              (0, z.jsx)(qd, { ...e }),
          },
        }),
      }),
      (0, z.jsx)(j, {
        path: L.BundleEdit(`:action(${Jn.join(`|`)})`, `:itemid`),
        children: (0, z.jsx)(Bn, {
          config: {
            "storeadmin-graphicalassets-confirmdialog": (e) =>
              (0, z.jsx)(qd, { ...e }),
          },
        }),
      }),
      (0, z.jsx)(j, { path: L.ReviewPriceProposals(), component: Dc }),
      (0, z.jsx)(j, { path: L.PackagePricingComparison(), component: pl }),
      (0, z.jsx)(j, {
        path: L.PackageLanding(`:packageid`),
        children: (0, z.jsx)(Bn, {
          config: {
            "packagelanding-nonappcontents-edit": (e) =>
              (0, z.jsx)(jd, { ...e }),
            "packagelanding-packagepurchasedisplay": (e) =>
              (0, z.jsx)(Rd, { ...e }),
          },
        }),
      }),
      (0, z.jsx)(j, {
        path: L.FrontPageEdit(`:clusterid`),
        children: (0, z.jsx)(Bn, {
          config: { "storeadmin-colors": (e) => (0, z.jsx)(qn, { ...e }) },
        }),
      }),
      (0, z.jsx)(j, {
        path: L.FrontPageSteamChinaEdit(`:clusterid`),
        children: (0, z.jsx)(Bn, {
          config: { "storeadmin-colors": (e) => (0, z.jsx)(qn, { ...e }) },
        }),
      }),
      (0, z.jsx)(j, {
        path: L.ContentHubEditor(`:suffix`, `:clusterid`),
        children: (0, z.jsx)(Bn, {
          config: { "storeadmin-colors": (e) => (0, z.jsx)(qn, { ...e }) },
        }),
      }),
      (0, z.jsx)(j, { component: Vn }),
    ],
  });
}
export { cm as default };
