/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/

import { r as e } from "./rolldown-runtime.js?contenthash=Bk3-1wwW";
import {
  At as t,
  Cn as n,
  Ct as r,
  Et as i,
  F as a,
  Gt as o,
  H as s,
  J as c,
  Kt as l,
  Mt as u,
  Nt as d,
  Ot as f,
  Qt as p,
  Ut as m,
  Wt as h,
  Yt as g,
  _n as _,
  _t as v,
  an as y,
  dn as b,
  dt as ee,
  fn as x,
  gn as S,
  gt as te,
  hn as C,
  i as ne,
  in as re,
  kt as ie,
  ln as w,
  mn as T,
  pn as E,
  tn as ae,
  vn as D,
  wt as oe,
  yn as se,
  yt as ce,
} from "./storenaveventcontext.js?contenthash=B0hquxXn";
import {
  $ as le,
  At as ue,
  B as de,
  Ct as fe,
  Dt as pe,
  Et as O,
  F as me,
  Ft as he,
  G as ge,
  H as _e,
  It as ve,
  J as ye,
  K as k,
  L as be,
  Lt as xe,
  Mt as Se,
  N as Ce,
  Nt as A,
  Ot as j,
  P as we,
  Pt as Te,
  Q as M,
  R as Ee,
  St as De,
  Tt as Oe,
  U as ke,
  V as Ae,
  W as je,
  X as Me,
  Y as Ne,
  Z as N,
  _t as Pe,
  a as Fe,
  at as Ie,
  bt as Le,
  c as Re,
  ct as ze,
  dt as Be,
  et as Ve,
  ft as He,
  gt as Ue,
  ht as P,
  i as We,
  jt as Ge,
  kt as Ke,
  l as qe,
  lt as Je,
  mt as F,
  n as Ye,
  o as Xe,
  ot as Ze,
  pt as Qe,
  q as $e,
  r as et,
  s as tt,
  st as nt,
  t as rt,
  tt as it,
  u as at,
  ut as ot,
  vt as st,
  wt as ct,
  xt as lt,
  yt as ut,
  z as dt,
} from "./main.js?contenthash=Gj1oORqk";
var I = e(n()),
  L = e(se(), 1),
  ft = new (class {
    m_transport = null;
    m_registry = null;
    SetDefaultTransport(e) {
      this.m_transport != null &&
        console.error(
          `Multiple attempts to set a default WebUI transport: overriding previous`,
        ),
        (this.m_transport = e);
    }
    GetDefaultTransport() {
      return this.m_transport;
    }
    SetDefaultHandlerRegistry(e) {
      this.m_registry != null &&
        console.error(
          `Multiple attempts to set a default WebUI message handler registry: overriding previous`,
        ),
        (this.m_registry = e);
    }
    GetDefaultHandlerRegistry() {
      return this.m_registry;
    }
  })();
function R() {
  return ft;
}
var z = s(),
  pt = e(Je(), 1),
  mt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            clanid: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            link_url: { n: 3, br: T.readString, bw: D.writeString },
            link_text: { n: 4, br: T.readString, bw: D.writeString },
            blurb: { n: 5, br: T.readString, bw: D.writeString },
            time_recommended: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            comment_count: { n: 7, br: T.readInt32, bw: D.writeInt32 },
            upvote_count: { n: 8, br: T.readInt32, bw: D.writeInt32 },
            accountid_creator: { n: 9, br: T.readUint32, bw: D.writeUint32 },
            recommendation_state: { n: 10, br: T.readEnum, bw: D.writeEnum },
            received_compensation: { n: 11, br: T.readBool, bw: D.writeBool },
            received_for_free: { n: 12, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_RecommendedApp`;
    }
  },
  ht = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.listid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [10, 12, 13, 14], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            listid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
            title: { n: 2, br: T.readString, bw: D.writeString },
            blurb: { n: 3, br: T.readString, bw: D.writeString },
            link: { n: 4, br: T.readString, bw: D.writeString },
            list_state: { n: 5, br: T.readEnum, bw: D.writeEnum },
            sort_order: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            time_created: { n: 7, br: T.readUint32, bw: D.writeUint32 },
            time_updated: { n: 8, br: T.readUint32, bw: D.writeUint32 },
            accountid: { n: 9, br: T.readUint32, bw: D.writeUint32 },
            apps: { n: 10, c: gt, r: !0, q: !0 },
            list_type: { n: 11, br: T.readEnum, bw: D.writeEnum },
            title_localization: { n: 12, c: ae, r: !0, q: !0 },
            blurb_localization: { n: 13, c: ae, r: !0, q: !0 },
            link_localization: { n: 14, c: ae, r: !0, q: !0 },
            sale_clan_steamid: {
              n: 15,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            sale_clan_event_gid: {
              n: 16,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            list_jsondata: { n: 17, br: T.readString, bw: D.writeString },
            clan_account_id: { n: 18, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_ListDetails`;
    }
  },
  gt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.recommended_app || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            recommended_app: { n: 1, c: mt },
            blurb: { n: 2, br: T.readString, bw: D.writeString },
            sort_order: { n: 3, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_ListDetails_ListItem`;
    }
  },
  _t = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            list_state: { n: 2, br: T.readEnum, bw: D.writeEnum },
            start: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            count: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            return_total_only: { n: 5, br: T.readBool, bw: D.writeBool },
            return_metadata_only: { n: 6, br: T.readBool, bw: D.writeBool },
            max_apps: { n: 7, br: T.readInt32, bw: D.writeInt32 },
            sale_clan_event_gid: {
              n: 8,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetLists_Request`;
    }
  },
  vt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.list_details || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            list_details: { n: 1, c: ht, r: !0, q: !0 },
            total: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetLists_Response`;
    }
  },
  yt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            listid: { n: 2, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Request`;
    }
  },
  bt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.list_details || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { list_details: { n: 1, c: ht } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCuration_GetListDetails_Response`;
    }
  },
  xt;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCuration.GetLists#1`, h(_t, t, n), vt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetLists = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCuration.GetListDetails#1`, h(yt, t, n), bt, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetListDetails = n;
})((xt ||= {}));
async function St(e) {
  return Et(
    `${c.COMMUNITY_BASE_URL}ogg/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Ct(e) {
  let t = j.InitFromClanID(e);
  return Et(
    `${c.COMMUNITY_BASE_URL}gid/${t.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function wt(e) {
  return Et(
    `${c.COMMUNITY_BASE_URL}groups/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Tt(e) {
  return Et(
    `${c.COMMUNITY_BASE_URL}games/${e}/ajaxgetvanityandclanid/?origin=${location.origin}`,
  );
}
async function Et(e) {
  let t = await fetch(e, { method: `GET` });
  if (t.status == 404) return null;
  if (!t.ok) throw Error(`Server returned ${t.status}`);
  let n = await t.json();
  return n.success == 1 ? n : null;
}
function Dt(e) {
  return [`clantoclaninfo`, e];
}
function Ot(e) {
  return [`apptoclanid`, e];
}
function kt(e, t = `group`) {
  return [`vanitytoclanid`, t, e?.toLocaleLowerCase()];
}
function At(e) {
  let t = e?.[0];
  return t == `clantoclaninfo` || t == `apptoclanid` || t == `vanitytoclanid`;
}
var jt = new WeakSet();
function Mt(e) {
  if (!jt.has(e)) {
    jt.add(e);
    for (let t of [[`clantoclaninfo`], [`apptoclanid`], [`vanitytoclanid`]])
      e.setQueryDefaults(t, { staleTime: 1 / 0, gcTime: 1 / 0, retry: !1 });
  }
}
var Nt = new WeakMap();
function Pt(e) {
  if (!e) return null;
  let t = Nt.get(e);
  return (
    t ||
      ((t = {
        ...e,
        clanSteamID: e.clanSteamIDString
          ? new j(e.clanSteamIDString)
          : j.InitFromClanID(e.clanAccountID),
      }),
      Nt.set(e, t)),
    t
  );
}
function Ft(e) {
  let { msg: t, success: n, ...r } = e;
  return { ...r, rss_language: e.rss_language ? e.rss_language : 0 };
}
function It(e, t) {
  if (!t) return null;
  Mt(e);
  let n = Ft(t);
  return (
    e.setQueryData(Dt(n.clanAccountID), n),
    n.appid && e.setQueryData(Ot(n.appid), n.clanAccountID),
    n.vanity_url && e.setQueryData(kt(n.vanity_url, `group`), n.clanAccountID),
    n
  );
}
function Lt(e, t) {
  for (let n of t) It(e, n);
}
function Rt(e) {
  let t = Be();
  return ot(zt(e, t));
}
function zt(e, t) {
  return (
    Mt(t),
    {
      queryKey: Dt(e ?? null),
      queryFn: async () => (e ? It(t, await Ct(e)) : null),
      enabled: e !== void 0,
      select: Pt,
    }
  );
}
function Bt(e, t) {
  return (
    Mt(t),
    {
      queryKey: Ot(e),
      queryFn: async () => It(t, await St(e))?.clanAccountID ?? null,
      enabled: !!e,
    }
  );
}
function Vt(e, t, n = `group`) {
  return (
    Mt(t),
    {
      queryKey: kt(e, n),
      queryFn: async () => {
        if (n == `store`) {
          let n = t.getQueryData(kt(e, `group`));
          if (n) return n;
        }
        return (
          It(t, n == `store` ? await Tt(e) : await wt(e))?.clanAccountID ?? null
        );
      },
      enabled: !!e,
    }
  );
}
function Ht(e, t) {
  if (e) return Pt(t.getQueryData(Dt(e))) ?? void 0;
}
function Ut(e, t) {
  if (e) return Ht(t.getQueryData(Ot(e)), t);
}
function Wt(e, t, n) {
  if (!e) return;
  let r = n ? [n] : [`store`, `group`];
  for (let n of r) {
    let r = Ht(t.getQueryData(kt(e, n)), t);
    if (r) return r;
  }
}
async function Gt(e, t) {
  return e ? Pt(await t.fetchQuery(zt(e, t))) : null;
}
async function Kt(e, t) {
  return e ? Gt(await t.fetchQuery(Bt(e, t)), t) : null;
}
async function qt(e, t, n = `group`) {
  return e ? Gt(await t.fetchQuery(Vt(e, t, n)), t) : null;
}
var B = e(Ke());
function Jt(e, t) {
  if (e[t]) {
    if (t == `community_icon`) {
      let n = e.asset_url_format
        .replace(/^steam\//, `images/`)
        .replace("${FILENAME}", `${e[t]}.jpg`)
        .replace(/\?.*$/, ``);
      return `${c.MEDIA_CDN_COMMUNITY_URL}${n}`;
    }
    if (typeof e[t] == `string`) {
      let n = e.asset_url_format.replace("${FILENAME}", e[t]);
      return `${c.STORE_ITEM_BASE_URL}${n}`;
    }
  }
}
var Yt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            is_allowed: { n: 2, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalApp`;
    }
  },
  Xt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.allowed_time_windows || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            allowed_time_windows: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            allowed_daily_minutes: {
              n: 2,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalPlaytimeDay`;
    }
  },
  Zt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apply_playtime_restrictions || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apply_playtime_restrictions: {
              n: 2,
              br: T.readBool,
              bw: D.writeBool,
            },
            playtime_days: { n: 15, c: Xt, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalPlaytimeRestrictions`;
    }
  },
  Qt = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.restrictions || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            restrictions: { n: 1, c: Xt },
            rtime_expires: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalTemporaryPlaytimeRestrictions`;
    }
  },
  $t = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [4, 5, 17, 18, 19], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            applist_base_id: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            applist_base_description: {
              n: 3,
              br: T.readString,
              bw: D.writeString,
            },
            applist_base: { n: 4, c: Yt, r: !0, q: !0 },
            applist_custom: { n: 5, c: Yt, r: !0, q: !0 },
            passwordhashtype: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            salt: { n: 7, br: T.readBytes, bw: D.writeBytes },
            passwordhash: { n: 8, br: T.readBytes, bw: D.writeBytes },
            is_enabled: { n: 9, br: T.readBool, bw: D.writeBool },
            enabled_features: { n: 10, br: T.readUint32, bw: D.writeUint32 },
            recovery_email: { n: 11, br: T.readString, bw: D.writeString },
            is_site_license_lock: { n: 12, br: T.readBool, bw: D.writeBool },
            temporary_enabled_features: {
              n: 13,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            rtime_temporary_feature_expiration: {
              n: 14,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            playtime_restrictions: { n: 15, c: Zt },
            temporary_playtime_restrictions: { n: 16, c: Qt },
            excluded_store_content_descriptors: {
              n: 17,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            excluded_community_content_descriptors: {
              n: 18,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            utility_appids: {
              n: 19,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalSettings`;
    }
  },
  en = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            family_groupid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            features: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            time_requested: { n: 5, br: T.readUint32, bw: D.writeUint32 },
            approved: { n: 6, br: T.readBool, bw: D.writeBool },
            steamid_responder: {
              n: 7,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            time_responded: { n: 8, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalFeatureRequest`;
    }
  },
  tn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            family_groupid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            current_playtime_restrictions: { n: 4, c: Xt },
            time_expires: { n: 5, br: T.readUint32, bw: D.writeUint32 },
            time_requested: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            approved: { n: 7, br: T.readBool, bw: D.writeBool },
            steamid_responder: {
              n: 8,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            time_responded: { n: 9, br: T.readUint32, bw: D.writeUint32 },
            restrictions_approved: { n: 10, c: Qt },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ParentalPlaytimeRequest`;
    }
  },
  nn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: D.writeString },
            settings: { n: 2, c: $t },
            sessionid: { n: 3, br: T.readString, bw: D.writeString },
            enablecode: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_EnableParentalSettings_Request`;
    }
  },
  rn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_EnableParentalSettings_Response`;
    }
  },
  an = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: D.writeString },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_DisableParentalSettings_Request`;
    }
  },
  on = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_DisableParentalSettings_Response`;
    }
  },
  sn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetParentalSettings_Request`;
    }
  },
  cn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.settings || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { settings: { n: 1, c: $t } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetParentalSettings_Response`;
    }
  },
  ln = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.priority || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { priority: { n: 1, br: T.readUint32, bw: D.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetSignedParentalSettings_Request`;
    }
  },
  un = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serialized_settings || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serialized_settings: { n: 1, br: T.readBytes, bw: D.writeBytes },
            signature: { n: 2, br: T.readBytes, bw: D.writeBytes },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetSignedParentalSettings_Response`;
    }
  },
  dn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: D.writeString },
            settings: { n: 2, c: $t },
            new_password: { n: 3, br: T.readString, bw: D.writeString },
            sessionid: { n: 4, br: T.readString, bw: D.writeString },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_SetParentalSettings_Request`;
    }
  },
  fn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_SetParentalSettings_Response`;
    }
  },
  pn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.unlock_token || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            unlock_token: { n: 1, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidateToken_Request`;
    }
  },
  mn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidateToken_Response`;
    }
  },
  hn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: D.writeString },
            session: { n: 2, br: T.readString, bw: D.writeString },
            send_unlock_on_success: { n: 3, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidatePassword_Request`;
    }
  },
  gn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.token || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { token: { n: 1, br: T.readString, bw: D.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ValidatePassword_Response`;
    }
  },
  _n = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.session || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { session: { n: 1, br: T.readString, bw: D.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_LockClient_Request`;
    }
  },
  vn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_LockClient_Response`;
    }
  },
  yn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Request`;
    }
  },
  bn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestRecoveryCode_Response`;
    }
  },
  xn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.features || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            features: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestFeatureAccess_Request`;
    }
  },
  Sn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestFeatureAccess_Response`;
    }
  },
  Cn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.approve || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            approve: { n: 1, br: T.readBool, bw: D.writeBool },
            requestid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            features: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            duration: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApproveFeatureAccess_Request`;
    }
  },
  wn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApproveFeatureAccess_Response`;
    }
  },
  Tn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.time_expires || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            time_expires: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            current_playtime_restrictions: { n: 2, c: Xt },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestPlaytime_Request`;
    }
  },
  En = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requestid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requestid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_RequestPlaytime_Response`;
    }
  },
  Dn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.approve || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            approve: { n: 1, br: T.readBool, bw: D.writeBool },
            requestid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            restrictions_approved: { n: 3, c: Qt },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApprovePlaytime_Request`;
    }
  },
  On = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ApprovePlaytime_Response`;
    }
  },
  kn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rt_include_completed_since || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rt_include_completed_since: {
              n: 1,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            family_groupid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetRequests_Request`;
    }
  },
  An = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.feature_requests || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            feature_requests: { n: 1, c: en, r: !0, q: !0 },
            playtime_requests: { n: 2, c: tn, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_GetRequests_Response`;
    }
  },
  jn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.day_of_week || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            day_of_week: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            minutes_used: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            steamid: {
              n: 10,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ReportPlaytimeAndNotify_Request`;
    }
  },
  Mn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ReportPlaytimeAndNotify_Response`;
    }
  },
  Nn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.serialized_settings || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            serialized_settings: { n: 1, br: T.readBytes, bw: D.writeBytes },
            signature: { n: 2, br: T.readBytes, bw: D.writeBytes },
            password: { n: 3, br: T.readString, bw: D.writeString },
            sessionid: { n: 4, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ParentalSettingsChange_Notification`;
    }
  },
  Pn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.password || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            password: { n: 1, br: T.readString, bw: D.writeString },
            sessionid: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ParentalUnlock_Notification`;
    }
  },
  Fn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sessionid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { sessionid: { n: 1, br: T.readString, bw: D.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_ParentalLock_Notification`;
    }
  },
  In = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.day_of_week || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            day_of_week: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            minutes_used: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CParental_PlaytimeUsed_Notification`;
    }
  },
  Ln;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Parental.EnableParentalSettings#1`, h(nn, t, n), rn, {
      ePrivilege: 1,
    });
  }
  e.EnableParentalSettings = t;
  function n(e, t, n) {
    return e.SendMsg(`Parental.DisableParentalSettings#1`, h(an, t, n), on, {
      ePrivilege: 1,
    });
  }
  e.DisableParentalSettings = n;
  function r(e, t, n) {
    return e.SendMsg(`Parental.GetParentalSettings#1`, h(sn, t, n), cn, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`all`],
    });
  }
  e.GetParentalSettings = r;
  function i(e, t, n) {
    return e.SendMsg(`Parental.GetSignedParentalSettings#1`, h(ln, t, n), un, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetSignedParentalSettings = i;
  function a(e, t, n) {
    return e.SendMsg(`Parental.SetParentalSettings#1`, h(dn, t, n), fn, {
      ePrivilege: 1,
    });
  }
  e.SetParentalSettings = a;
  function o(e, t, n) {
    return e.SendMsg(`Parental.ValidateToken#1`, h(pn, t, n), mn, {
      ePrivilege: 1,
      rgBrowserAPISites: [`help`],
    });
  }
  e.ValidateToken = o;
  function s(e, t, n) {
    return e.SendMsg(`Parental.ValidatePassword#1`, h(hn, t, n), gn, {
      ePrivilege: 1,
    });
  }
  e.ValidatePassword = s;
  function c(e, t, n) {
    return e.SendMsg(`Parental.LockClient#1`, h(_n, t, n), vn, {
      ePrivilege: 1,
    });
  }
  e.LockClient = c;
  function l(e, t, n) {
    return e.SendMsg(`Parental.RequestRecoveryCode#1`, h(yn, t, n), bn, {
      ePrivilege: 1,
    });
  }
  e.RequestRecoveryCode = l;
  function u(e, t, n) {
    return e.SendMsg(`Parental.RequestFeatureAccess#1`, h(xn, t, n), Sn, {
      ePrivilege: 1,
    });
  }
  e.RequestFeatureAccess = u;
  function d(e, t, n) {
    return e.SendMsg(`Parental.ApproveFeatureAccess#1`, h(Cn, t, n), wn, {
      ePrivilege: 1,
    });
  }
  e.ApproveFeatureAccess = d;
  function f(e, t, n) {
    return e.SendMsg(`Parental.RequestPlaytime#1`, h(Tn, t, n), En, {
      ePrivilege: 1,
    });
  }
  e.RequestPlaytime = f;
  function p(e, t, n) {
    return e.SendMsg(`Parental.ApprovePlaytime#1`, h(Dn, t, n), On, {
      ePrivilege: 1,
    });
  }
  e.ApprovePlaytime = p;
  function m(e, t, n) {
    return e.SendMsg(`Parental.GetRequests#1`, h(kn, t, n), An, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetRequests = m;
  function g(e, t, n) {
    return e.SendMsg(`Parental.ReportPlaytimeAndNotify#1`, h(jn, t, n), Mn, {
      ePrivilege: 1,
    });
  }
  e.ReportPlaytimeAndNotify = g;
})((Ln ||= {}));
var Rn;
(function (e) {
  (e.NotifySettingsChangeHandler = {
    name: `ParentalClient.NotifySettingsChange#1`,
    request: Nn,
  }),
    (e.NotifyUnlockHandler = {
      name: `ParentalClient.NotifyUnlock#1`,
      request: Pn,
    }),
    (e.NotifyLockHandler = {
      name: `ParentalClient.NotifyLock#1`,
      request: Fn,
    }),
    (e.NotifyPlaytimeUsedHandler = {
      name: `ParentalClient.NotifyPlaytimeUsed#1`,
      request: In,
    });
})((Rn ||= {}));
function zn(e) {
  return [`parentalsettings`, e];
}
function Bn(e) {
  let t = e.applist_base.concat(e.applist_custom);
  return new Map(t.map((e) => [e.appid, e.is_allowed]));
}
async function Vn(e, t) {
  let n = m.Init(sn);
  n.Body().set_steamid(t);
  let r = await Ln.GetParentalSettings(e, n);
  if (r.GetEResult() != 1)
    throw Error(`Error from GetParentalSettings: ${r.GetEResult()}`);
  let i = r.Body().settings().toObject();
  return (
    (i.playtime_restrictions ||= {
      apply_playtime_restrictions: !1,
      playtime_days: Array(7).fill({
        allowed_time_windows: BigInt(0xffffffffffff).toString(),
        allowed_daily_minutes: 1440,
      }),
    }),
    { settings: i, mapAppsAllowed: Bn(i) }
  );
}
function Hn(e, t, n) {
  return {
    queryKey: zn(t),
    queryFn: () => Vn(e, t),
    placeholderData: { settings: void 0, mapAppsAllowed: void 0 },
    ...n,
  };
}
function Un(e) {
  let t = Ge();
  return ot(Hn(t, e));
}
function Wn(e, t) {
  return [`validateparentaltoken`, e, t];
}
function Gn() {
  let e = t(`clientsessionid`),
    n = t(`sessionid`);
  return e || n;
}
function Kn() {
  let e = Ge(),
    n = A(),
    r = t(`steamparental`),
    i = Gn(),
    a = r,
    o = a?.split(`||`) || [];
  o.length == 2 && (a = o[1]);
  let s = a && a !== `0` ? i + `||` + a : void 0,
    c = ot({
      queryKey: Wn(n, s),
      queryFn: async () => {
        if (!s) return 15;
        let t = m.Init(pn);
        return (
          t.Body().set_unlock_token(s),
          (await Ln.ValidateToken(e, t)).GetEResult()
        );
      },
    });
  return !c.isSuccess || c.data !== 1;
}
function qn(e, t, n) {
  if (t == 0 || t == null) return !1;
  if (!e) return !0;
  if (!e.is_enabled || !n) return !1;
  if (t == 15) return !0;
  let r = e.enabled_features;
  return !r || !(r & (1 << t));
}
function Jn(e) {
  let { settings: t } = Un(A()).data ?? {};
  return qn(t, e, Kn());
}
function Yn(e) {
  return `unknown ESteamNotificationType ( ` + e + ` )`;
}
var Xn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            notification_targets: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            notification_type: { n: 3, br: T.readEnum, bw: D.writeEnum },
            body_data: { n: 4, br: T.readString, bw: D.writeString },
            read: { n: 7, br: T.readBool, bw: D.writeBool },
            timestamp: { n: 8, br: T.readUint32, bw: D.writeUint32 },
            hidden: { n: 9, br: T.readBool, bw: D.writeBool },
            expiry: { n: 10, br: T.readUint32, bw: D.writeUint32 },
            viewed: { n: 11, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationData`;
    }
  },
  Zn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.include_hidden || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            include_hidden: { n: 1, d: !1, br: T.readBool, bw: D.writeBool },
            language: { n: 2, d: 0, br: T.readInt32, bw: D.writeInt32 },
            include_confirmation_count: {
              n: 3,
              d: !0,
              br: T.readBool,
              bw: D.writeBool,
            },
            include_pinned_counts: {
              n: 4,
              d: !1,
              br: T.readBool,
              bw: D.writeBool,
            },
            include_read: { n: 5, d: !0, br: T.readBool, bw: D.writeBool },
            count_only: { n: 6, d: !1, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Request`;
    }
  },
  Qn = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notifications || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Xn, r: !0, q: !0 },
            confirmation_count: { n: 2, br: T.readInt32, bw: D.writeInt32 },
            pending_gift_count: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            pending_friend_count: { n: 5, br: T.readUint32, bw: D.writeUint32 },
            unread_count: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            pending_family_invite_count: {
              n: 7,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetSteamNotifications_Response`;
    }
  },
  $n = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            notification_type: { n: 2, br: T.readEnum, bw: D.writeEnum },
            notification_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: D.writeRepeatedUint64String,
            },
            mark_all_read: { n: 4, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsRead_Notification`;
    }
  },
  er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.remote_client_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            remote_client_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            target_client_type: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_MarkNotificationsViewed_Notification`;
    }
  },
  tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            notification_targets: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `SteamNotificationPreference`;
    }
  },
  nr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Request`;
    }
  },
  rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_SetPreferences_Response`;
    }
  },
  ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Request`;
    }
  },
  ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_GetPreferences_Response`;
    }
  },
  or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notification_ids || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notification_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: D.writeRepeatedUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_HideNotification_Notification`;
    }
  },
  sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.notifications || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            notifications: { n: 1, c: Xn, r: !0, q: !0 },
            pending_gift_count: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            pending_friend_count: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            pending_family_invite_count: {
              n: 4,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_NotificationsReceived_Notification`;
    }
  },
  cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferences || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { preferences: { n: 1, c: tr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamNotification_PreferencesUpdated_Notification`;
    }
  },
  lr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `SteamNotification.GetSteamNotifications#1`,
      h(Zn, t, n),
      Qn,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        rgBrowserAPISites: [`partner`, `help`],
      },
    );
  }
  e.GetSteamNotifications = t;
  function n(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsRead#1`,
      h($n, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `help`] },
    );
  }
  e.MarkNotificationsRead = n;
  function r(e, t) {
    return e.SendNotification(
      `SteamNotification.MarkNotificationsViewed#1`,
      h(er, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`, `help`] },
    );
  }
  e.MarkNotificationsViewed = r;
  function i(e, t) {
    return e.SendNotification(
      `SteamNotification.HideNotification#1`,
      h(or, t),
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.HideNotification = i;
  function a(e, t, n) {
    return e.SendMsg(`SteamNotification.SetPreferences#1`, h(nr, t, n), rr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetPreferences = a;
  function o(e, t, n) {
    return e.SendMsg(`SteamNotification.GetPreferences#1`, h(ir, t, n), ar, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetPreferences = o;
})((lr ||= {}));
var ur;
(function (e) {
  (e.NotificationsReceivedHandler = {
    name: `SteamNotificationClient.NotificationsReceived#1`,
    request: sr,
  }),
    (e.PreferencesUpdatedHandler = {
      name: `SteamNotificationClient.PreferencesUpdated#1`,
      request: cr,
    });
})((ur ||= {}));
var dr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            type: { n: 1, br: T.readString, bw: D.writeString },
            value: { n: 2, br: T.readString, bw: D.writeString },
            color: { n: 3, br: T.readString, bw: D.writeString },
            label: { n: 4, br: T.readString, bw: D.writeString },
            name: { n: 5, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_DescriptionLine`;
    }
  },
  fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.link || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            link: { n: 1, br: T.readString, bw: D.writeString },
            name: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Action`;
    }
  },
  pr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            category: { n: 2, br: T.readString, bw: D.writeString },
            internal_name: { n: 3, br: T.readString, bw: D.writeString },
            localized_category_name: {
              n: 4,
              br: T.readString,
              bw: D.writeString,
            },
            localized_tag_name: { n: 5, br: T.readString, bw: D.writeString },
            color: { n: 6, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Tag`;
    }
  },
  mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contained_items || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contained_items: { n: 1, c: hr, r: !0, q: !0 },
            search_tags: { n: 2, c: pr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ContainerProperties`;
    }
  },
  hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
            instanceid: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_ClassIdentifiers`;
    }
  },
  gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [8, 10, 11, 12, 13, 21, 26], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readInt32, bw: D.writeInt32 },
            classid: { n: 2, br: T.readUint64String, bw: D.writeUint64String },
            instanceid: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            currency: { n: 4, br: T.readBool, bw: D.writeBool },
            background_color: { n: 5, br: T.readString, bw: D.writeString },
            icon_url: { n: 6, br: T.readString, bw: D.writeString },
            icon_url_large: { n: 7, br: T.readString, bw: D.writeString },
            descriptions: { n: 8, c: dr, r: !0, q: !0 },
            tradable: { n: 9, br: T.readBool, bw: D.writeBool },
            actions: { n: 10, c: fr, r: !0, q: !0 },
            owner_descriptions: { n: 11, c: dr, r: !0, q: !0 },
            owner_actions: { n: 12, c: fr, r: !0, q: !0 },
            fraudwarnings: {
              n: 13,
              r: !0,
              q: !0,
              br: T.readString,
              bw: D.writeRepeatedString,
            },
            name: { n: 14, br: T.readString, bw: D.writeString },
            name_color: { n: 15, br: T.readString, bw: D.writeString },
            type: { n: 16, br: T.readString, bw: D.writeString },
            market_name: { n: 17, br: T.readString, bw: D.writeString },
            market_hash_name: { n: 18, br: T.readString, bw: D.writeString },
            market_fee: { n: 19, br: T.readString, bw: D.writeString },
            market_fee_app: { n: 28, br: T.readInt32, bw: D.writeInt32 },
            contained_item: { n: 20, c: e },
            market_actions: { n: 21, c: fr, r: !0, q: !0 },
            commodity: { n: 22, br: T.readBool, bw: D.writeBool },
            market_tradable_restriction: {
              n: 23,
              br: T.readInt32,
              bw: D.writeInt32,
            },
            market_marketable_restriction: {
              n: 24,
              br: T.readInt32,
              bw: D.writeInt32,
            },
            marketable: { n: 25, br: T.readBool, bw: D.writeBool },
            tags: { n: 26, c: pr, r: !0, q: !0 },
            item_expiration: { n: 27, br: T.readString, bw: D.writeString },
            market_buy_country_restriction: {
              n: 30,
              br: T.readString,
              bw: D.writeString,
            },
            market_sell_country_restriction: {
              n: 31,
              br: T.readString,
              bw: D.writeString,
            },
            sealed: { n: 32, br: T.readBool, bw: D.writeBool },
            container_properties: { n: 33, c: mr },
            market_bucket_group_name: {
              n: 34,
              br: T.readString,
              bw: D.writeString,
            },
            market_bucket_group_id: {
              n: 35,
              br: T.readString,
              bw: D.writeString,
            },
            sealed_type: { n: 37, br: T.readUint32, bw: D.writeUint32 },
            market_name_inside_group: {
              n: 38,
              br: T.readString,
              bw: D.writeString,
            },
            market_bucket_id: { n: 39, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_Description`;
    }
  },
  _r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.propertyid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            propertyid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            int_value: { n: 2, br: T.readInt64String, bw: D.writeInt64String },
            float_value: { n: 3, br: T.readFloat, bw: D.writeFloat },
            string_value: { n: 4, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperty`;
    }
  },
  vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.classid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3, 4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            classid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
            instanceid: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            standalone_properties: { n: 3, c: _r, r: !0, q: !0 },
            parent_relationship_properties: { n: 4, c: _r, r: !0, q: !0 },
            nested_accessories: { n: 5, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetAccessory`;
    }
  },
  yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            contextid: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            assetid: { n: 3, br: T.readUint64String, bw: D.writeUint64String },
            asset_properties: { n: 4, c: _r, r: !0, q: !0 },
            asset_accessories: { n: 5, c: vr, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetProperties`;
    }
  },
  br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            id: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            name: { n: 2, br: T.readString, bw: D.writeString },
            type: { n: 3, br: T.readEnum, bw: D.writeEnum },
            float_min: { n: 4, br: T.readFloat, bw: D.writeFloat },
            float_max: { n: 5, br: T.readFloat, bw: D.writeFloat },
            int_min: { n: 6, br: T.readInt64String, bw: D.writeInt64String },
            int_max: { n: 7, br: T.readInt64String, bw: D.writeInt64String },
            localized_label: { n: 8, br: T.readString, bw: D.writeString },
            hide_from_description: { n: 9, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEconItem_AssetPropertySchema`;
    }
  },
  xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            language: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Request`;
    }
  },
  Sr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.property_schemas || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { property_schemas: { n: 1, c: br, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetPropertySchema_Response`;
    }
  },
  Cr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            contextid: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            assetid: { n: 3, br: T.readUint64String, bw: D.writeUint64String },
            classid: { n: 4, br: T.readUint64String, bw: D.writeUint64String },
            instanceid: {
              n: 5,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            currencyid: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            amount: { n: 7, br: T.readInt64String, bw: D.writeInt64String },
            missing: { n: 8, br: T.readBool, bw: D.writeBool },
            est_usd: { n: 9, br: T.readInt64String, bw: D.writeInt64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_Asset`;
    }
  },
  wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            appid: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            contextid: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            get_descriptions: { n: 4, br: T.readBool, bw: D.writeBool },
            get_asset_properties: { n: 11, br: T.readBool, bw: D.writeBool },
            for_trade_offer_verification: {
              n: 10,
              br: T.readBool,
              bw: D.writeBool,
            },
            language: { n: 5, br: T.readString, bw: D.writeString },
            filters: { n: 6, c: Tr },
            start_assetid: {
              n: 8,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            count: { n: 9, br: T.readInt32, bw: D.writeInt32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request`;
    }
  },
  Tr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assetids || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assetids: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: D.writeRepeatedUint64String,
            },
            currencyids: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            tradable_only: { n: 3, br: T.readBool, bw: D.writeBool },
            marketable_only: { n: 4, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions`;
    }
  },
  Er = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.assets || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            assets: { n: 1, c: Cr, r: !0, q: !0 },
            descriptions: { n: 2, c: gr, r: !0, q: !0 },
            missing_assets: { n: 3, c: Cr, r: !0, q: !0 },
            asset_properties: { n: 7, c: yr, r: !0, q: !0 },
            more_items: { n: 4, br: T.readBool, bw: D.writeBool },
            last_assetid: {
              n: 5,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            total_inventory_count: {
              n: 6,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetInventoryItemsWithDescriptions_Response`;
    }
  },
  Dr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.generate_new_token || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            generate_new_token: { n: 1, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Request`;
    }
  },
  Or = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.trade_offer_access_token || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            trade_offer_access_token: {
              n: 1,
              br: T.readString,
              bw: D.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetTradeOfferAccessToken_Response`;
    }
  },
  kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.return_url || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { return_url: { n: 1, br: T.readString, bw: D.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Request`;
    }
  },
  Ar = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.url || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { url: { n: 1, br: T.readString, bw: D.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_ClientGetItemShopOverlayAuthURL_Response`;
    }
  },
  jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: D.writeString },
            appid: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            classes: { n: 3, c: hr, r: !0, q: !0 },
            high_pri: { n: 4, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Request`;
    }
  },
  Mr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.descriptions || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { descriptions: { n: 1, c: gr, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CEcon_GetAssetClassInfo_Response`;
    }
  },
  Nr;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(
      `Econ.GetInventoryItemsWithDescriptions#1`,
      h(wr, t, n),
      Er,
      {
        bConstMethod: !0,
        ePrivilege: 2,
        eWebAPIKeyRequirement: 2,
        rgBrowserAPISites: [`partner`, `help`],
      },
    );
  }
  e.GetInventoryItemsWithDescriptions = t;
  function n(e, t, n) {
    return e.SendMsg(`Econ.GetTradeOfferAccessToken#1`, h(Dr, t, n), Or, {
      ePrivilege: 1,
    });
  }
  e.GetTradeOfferAccessToken = n;
  function r(e, t, n) {
    return e.SendMsg(
      `Econ.ClientGetItemShopOverlayAuthURL#1`,
      h(kr, t, n),
      Ar,
      { ePrivilege: 1 },
    );
  }
  e.ClientGetItemShopOverlayAuthURL = r;
  function i(e, t, n) {
    return e.SendMsg(`Econ.GetAssetClassInfo#1`, h(jr, t, n), Mr, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.GetAssetClassInfo = i;
  function a(e, t, n) {
    return e.SendMsg(`Econ.GetAssetPropertySchema#1`, h(xr, t, n), Sr, {
      bConstMethod: !0,
      ePrivilege: 0,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetAssetPropertySchema = a;
})((Nr ||= {}));
var Pr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: D.writeString },
            steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Request`;
    }
  },
  Fr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            cooldown_skip_granted: { n: 2, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CreateFamilyGroup_Response`;
    }
  },
  Ir = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            send_running_apps: { n: 2, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Request`;
    }
  },
  Lr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            role: { n: 2, br: T.readEnum, bw: D.writeEnum },
            time_joined: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            cooldown_seconds_remaining: {
              n: 4,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupMember`;
    }
  },
  Rr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            role: { n: 2, br: T.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupPendingInvite`;
    }
  },
  zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupFormerMember`;
    }
  },
  Br = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.name || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2, 3, 7], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            name: { n: 1, br: T.readString, bw: D.writeString },
            members: { n: 2, c: Lr, r: !0, q: !0 },
            pending_invites: { n: 3, c: Rr, r: !0, q: !0 },
            free_spots: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            country: { n: 5, br: T.readString, bw: D.writeString },
            slot_cooldown_remaining_seconds: {
              n: 6,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            former_members: { n: 7, c: zr, r: !0, q: !0 },
            slot_cooldown_overrides: {
              n: 8,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroup_Response`;
    }
  },
  Vr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            role: { n: 2, br: T.readEnum, bw: D.writeEnum },
            inviter_steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            awaiting_2fa: { n: 4, br: T.readBool, bw: D.writeBool },
            invite_id: {
              n: 5,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupPendingInviteForUser`;
    }
  },
  Hr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
            include_family_group_response: {
              n: 2,
              br: T.readBool,
              bw: D.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Request`;
    }
  },
  Ur = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            rtime_joined: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            rtime_left: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            role: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            participated: { n: 5, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `FamilyGroupMembership`;
    }
  },
  Wr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [5, 10], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            is_not_member_of_any_group: {
              n: 2,
              br: T.readBool,
              bw: D.writeBool,
            },
            latest_time_joined: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            latest_joined_family_groupid: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            pending_group_invites: { n: 5, c: Vr, r: !0, q: !0 },
            role: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            cooldown_seconds_remaining: {
              n: 7,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            family_group: { n: 8, c: Br },
            can_undelete_last_joined_family: {
              n: 9,
              br: T.readBool,
              bw: D.writeBool,
            },
            membership_history: { n: 10, c: Ur, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetFamilyGroupForUser_Response`;
    }
  },
  Gr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            name: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Request`;
    }
  },
  Kr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ModifyFamilyGroupDetails_Response`;
    }
  },
  qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            receiver_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            receiver_role: { n: 3, br: T.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Request`;
    }
  },
  Jr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.invite_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            invite_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            two_factor_method: { n: 2, br: T.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_InviteToFamilyGroup_Response`;
    }
  },
  Yr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            nonce: { n: 2, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Request`;
    }
  },
  Xr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.two_factor_method || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            two_factor_method: { n: 2, br: T.readEnum, bw: D.writeEnum },
            cooldown_skip_granted: { n: 3, br: T.readBool, bw: D.writeBool },
            invite_already_accepted: { n: 4, br: T.readBool, bw: D.writeBool },
            cooldown_seconds_remaining: {
              n: 5,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_JoinFamilyGroup_Response`;
    }
  },
  Zr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            steamid_to_remove: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Request`;
    }
  },
  Qr = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RemoveFromFamilyGroup_Response`;
    }
  },
  $r = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            steamid_to_cancel: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Request`;
    }
  },
  ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_CancelFamilyGroupInvite_Response`;
    }
  },
  ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Request`;
    }
  },
  ni = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_DeleteFamilyGroup_Response`;
    }
  },
  ri = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            client_instance_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Request`;
    }
  },
  ii = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.users || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            users: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readFixed64String,
              pbr: T.readPackedFixed64String,
              bw: D.writeRepeatedFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetUsersSharingDevice_Response`;
    }
  },
  ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            gidshoppingcart: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            store_country_code: { n: 3, br: T.readString, bw: D.writeString },
            use_account_cart: { n: 4, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Request`;
    }
  },
  oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            request_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RequestPurchase_Response`;
    }
  },
  si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            request_ids: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: D.writeRepeatedUint64String,
            },
            rt_include_completed_since: {
              n: 4,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Request`;
    }
  },
  ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requester_steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [9, 10, 11, 12], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requester_steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            gidshoppingcart: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            time_requested: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            time_responded: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            responder_steamid: {
              n: 5,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            response_action: { n: 6, br: T.readEnum, bw: D.writeEnum },
            is_completed: { n: 7, br: T.readBool, bw: D.writeBool },
            request_id: {
              n: 8,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            requested_packageids: {
              n: 9,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            purchased_packageids: {
              n: 10,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            requested_bundleids: {
              n: 11,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            purchased_bundleids: {
              n: 12,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `PurchaseRequest`;
    }
  },
  li = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { requests: { n: 1, c: ci, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPurchaseRequests_Response`;
    }
  },
  ui = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            action: { n: 3, br: T.readEnum, bw: D.writeEnum },
            request_id: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Request`;
    }
  },
  di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RespondToRequestedPurchase_Response`;
    }
  },
  fi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            running_apps: { n: 2, c: mi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification`;
    }
  },
  pi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.member_steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            member_steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            owner_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember`;
    }
  },
  mi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            playing_members: { n: 3, c: pi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp`;
    }
  },
  hi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_InviteStatus_Notification`;
    }
  },
  gi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroupsClient_GroupChanged_Notification`;
    }
  },
  _i = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Request`;
    }
  },
  vi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.changes || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { changes: { n: 1, c: yi, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response`;
    }
  },
  yi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            actor_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            type: { n: 3, br: T.readEnum, bw: D.writeEnum },
            body: { n: 4, br: T.readString, bw: D.writeString },
            by_support: { n: 5, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetChangeLog_Response_Change`;
    }
  },
  bi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            appid: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            first_played: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            latest_played: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            seconds_played: { n: 5, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_PlaytimeEntry`;
    }
  },
  xi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Request`;
    }
  },
  Si = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.entries || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            entries: { n: 1, c: bi, r: !0, q: !0 },
            entries_by_owner: { n: 2, c: bi, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPlaytimeSummary_Response`;
    }
  },
  Ci = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            cooldown_count: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Request`;
    }
  },
  wi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetFamilyCooldownOverrides_Response`;
    }
  },
  Ti = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            include_own: { n: 2, br: T.readBool, bw: D.writeBool },
            include_excluded: { n: 3, br: T.readBool, bw: D.writeBool },
            language: { n: 5, br: T.readString, bw: D.writeString },
            max_apps: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            include_non_games: { n: 7, br: T.readBool, bw: D.writeBool },
            steamid: {
              n: 8,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Request`;
    }
  },
  Ei = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            apps: { n: 1, c: Di, r: !0, q: !0 },
            owner_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response`;
    }
  },
  Di = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2, 15], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            owner_steamids: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readFixed64String,
              pbr: T.readPackedFixed64String,
              bw: D.writeRepeatedFixed64String,
            },
            name: { n: 6, br: T.readString, bw: D.writeString },
            sort_as: { n: 7, br: T.readString, bw: D.writeString },
            capsule_filename: { n: 8, br: T.readString, bw: D.writeString },
            img_icon_hash: { n: 9, br: T.readString, bw: D.writeString },
            exclude_reason: { n: 10, d: 0, br: T.readEnum, bw: D.writeEnum },
            rt_time_acquired: { n: 11, br: T.readUint32, bw: D.writeUint32 },
            rt_last_played: { n: 12, br: T.readUint32, bw: D.writeUint32 },
            rt_playtime: { n: 13, br: T.readUint32, bw: D.writeUint32 },
            app_type: { n: 14, d: 1, br: T.readEnum, bw: D.writeEnum },
            content_descriptors: {
              n: 15,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetSharedLibraryApps_Response_SharedApp`;
    }
  },
  Oi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            nonce: { n: 3, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Request`;
    }
  },
  ki = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmInviteToFamilyGroup_Response`;
    }
  },
  Ai = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            invite_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            nonce: { n: 3, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Request`;
    }
  },
  ji = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ConfirmJoinFamilyGroup_Response`;
    }
  },
  Mi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            steamid: { n: 2, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Request`;
    }
  },
  Ni = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ResendInvitationToFamilyGroup_Response`;
    }
  },
  Pi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            appid: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            lender_steamid: {
              n: 3,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Request`;
    }
  },
  Fi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_SetPreferredLender_Response`;
    }
  },
  Ii = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Request`;
    }
  },
  Li = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.members || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { members: { n: 1, c: Ri, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response`;
    }
  },
  Ri = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            preferred_appids: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetPreferredLenders_Response_FamilyMember`;
    }
  },
  zi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Request`;
    }
  },
  Bi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_UndeleteFamilyGroup_Response`;
    }
  },
  Vi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Request`;
    }
  },
  Hi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ForceAcceptInvite_Response`;
    }
  },
  Ui = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Request`;
    }
  },
  Wi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.wallet_country_matches || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            wallet_country_matches: { n: 1, br: T.readBool, bw: D.writeBool },
            ip_match: { n: 2, br: T.readBool, bw: D.writeBool },
            join_restriction: { n: 3, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_GetInviteCheckResults_Response`;
    }
  },
  Gi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            invite_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Request`;
    }
  },
  Ki = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_ClearCooldownSkip_Response`;
    }
  },
  qi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.family_groupid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            family_groupid: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            rtime32_target: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Request`;
    }
  },
  Ji = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CFamilyGroups_RollbackFamilyGroup_Response`;
    }
  },
  Yi;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`FamilyGroups.CreateFamilyGroup#1`, h(Pr, t, n), Fr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.CreateFamilyGroup = t;
  function n(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroup#1`, h(Ir, t, n), Br, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetFamilyGroup = n;
  function r(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetFamilyGroupForUser#1`, h(Hr, t, n), Wr, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetFamilyGroupForUser = r;
  function i(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.ModifyFamilyGroupDetails#1`,
      h(Gr, t, n),
      Kr,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ModifyFamilyGroupDetails = i;
  function a(e, t, n) {
    return e.SendMsg(`FamilyGroups.InviteToFamilyGroup#1`, h(qr, t, n), Jr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.InviteToFamilyGroup = a;
  function o(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.ConfirmInviteToFamilyGroup#1`,
      h(Oi, t, n),
      ki,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ConfirmInviteToFamilyGroup = o;
  function s(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.ResendInvitationToFamilyGroup#1`,
      h(Mi, t, n),
      Ni,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.ResendInvitationToFamilyGroup = s;
  function c(e, t, n) {
    return e.SendMsg(`FamilyGroups.JoinFamilyGroup#1`, h(Yr, t, n), Xr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.JoinFamilyGroup = c;
  function l(e, t, n) {
    return e.SendMsg(`FamilyGroups.ConfirmJoinFamilyGroup#1`, h(Ai, t, n), ji, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.ConfirmJoinFamilyGroup = l;
  function u(e, t, n) {
    return e.SendMsg(`FamilyGroups.RemoveFromFamilyGroup#1`, h(Zr, t, n), Qr, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.RemoveFromFamilyGroup = u;
  function d(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.CancelFamilyGroupInvite#1`,
      h($r, t, n),
      ei,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.CancelFamilyGroupInvite = d;
  function f(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetUsersSharingDevice#1`, h(ri, t, n), ii, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetUsersSharingDevice = f;
  function p(e, t, n) {
    return e.SendMsg(`FamilyGroups.DeleteFamilyGroup#1`, h(ti, t, n), ni, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.DeleteFamilyGroup = p;
  function m(e, t, n) {
    return e.SendMsg(`FamilyGroups.UndeleteFamilyGroup#1`, h(zi, t, n), Bi, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.UndeleteFamilyGroup = m;
  function g(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetPlaytimeSummary#1`, h(xi, t, n), Si, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetPlaytimeSummary = g;
  function _(e, t, n) {
    return e.SendMsg(`FamilyGroups.RequestPurchase#1`, h(ai, t, n), oi, {
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.RequestPurchase = _;
  function v(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetPurchaseRequests#1`, h(si, t, n), li, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetPurchaseRequests = v;
  function y(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.RespondToRequestedPurchase#1`,
      h(ui, t, n),
      di,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.RespondToRequestedPurchase = y;
  function b(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetChangeLog#1`, h(_i, t, n), vi, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetChangeLog = b;
  function ee(e, t, n) {
    return e.SendMsg(
      `FamilyGroups.SetFamilyCooldownOverrides#1`,
      h(Ci, t, n),
      wi,
      { ePrivilege: 5 },
    );
  }
  e.SetFamilyCooldownOverrides = ee;
  function x(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetSharedLibraryApps#1`, h(Ti, t, n), Ei, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetSharedLibraryApps = x;
  function S(e, t, n) {
    return e.SendMsg(`FamilyGroups.SetPreferredLender#1`, h(Pi, t, n), Fi, {
      ePrivilege: 1,
    });
  }
  e.SetPreferredLender = S;
  function te(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetPreferredLenders#1`, h(Ii, t, n), Li, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  e.GetPreferredLenders = te;
  function C(e, t, n) {
    return e.SendMsg(`FamilyGroups.ForceAcceptInvite#1`, h(Vi, t, n), Hi, {
      ePrivilege: 5,
    });
  }
  e.ForceAcceptInvite = C;
  function ne(e, t, n) {
    return e.SendMsg(`FamilyGroups.GetInviteCheckResults#1`, h(Ui, t, n), Wi, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetInviteCheckResults = ne;
  function re(e, t, n) {
    return e.SendMsg(`FamilyGroups.ClearCooldownSkip#1`, h(Gi, t, n), Ki, {
      ePrivilege: 5,
    });
  }
  e.ClearCooldownSkip = re;
  function ie(e, t, n) {
    return e.SendMsg(`FamilyGroups.RollbackFamilyGroup#1`, h(qi, t, n), Ji, {
      ePrivilege: 5,
    });
  }
  e.RollbackFamilyGroup = ie;
})((Yi ||= {}));
var Xi;
(function (e) {
  (e.NotifyRunningAppsHandler = {
    name: `FamilyGroupsClient.NotifyRunningApps#1`,
    request: fi,
  }),
    (e.NotifyInviteStatusHandler = {
      name: `FamilyGroupsClient.NotifyInviteStatus#1`,
      request: hi,
    }),
    (e.NotifyGroupChangedHandler = {
      name: `FamilyGroupsClient.NotifyGroupChanged#1`,
      request: gi,
    });
})((Xi ||= {}));
var Zi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.accountid_giftee || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            accountid_giftee: { n: 1, br: T.readInt32, bw: D.writeInt32 },
            gift_message: { n: 2, c: Qi },
            time_scheduled_send: { n: 3, br: T.readInt32, bw: D.writeInt32 },
            email_giftee: { n: 4, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartGiftInfo`;
    }
  },
  Qi = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gifteename || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gifteename: { n: 1, br: T.readString, bw: D.writeString },
            message: { n: 2, br: T.readString, bw: D.writeString },
            sentiment: { n: 3, br: T.readString, bw: D.writeString },
            signature: { n: 4, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CartGiftMessage`;
    }
  },
  $i = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid_requester || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid_requester: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            purchase_request_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Request`;
    }
  },
  ea = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CreateNew_Response`;
    }
  },
  ta = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.amount || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            amount: { n: 1, br: T.readInt64String, bw: D.writeInt64String },
            currencycode: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Amount`;
    }
  },
  na = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.packageid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            packageid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            costwhenadded: { n: 2, c: ta },
            is_gift: { n: 3, br: T.readBool, bw: D.writeBool },
            gidbundle: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            quantity: { n: 5, br: T.readUint32, bw: D.writeUint32 },
            gift_info: { n: 6, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_PackageItem`;
    }
  },
  ra = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.walletcredit || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { walletcredit: { n: 1, c: ta } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_WalletCreditItem`;
    }
  },
  ia = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            gidcoupontarget: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            packageid: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            gidcoupon: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_CouponItem`;
    }
  },
  aa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.microtxnappid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            microtxnappid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            microtxnassetclassid: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_MicroTxnAsset`;
    }
  },
  oa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.bundleid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            bundleid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            quantity: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            is_gift: { n: 3, br: T.readBool, bw: D.writeBool },
            gift_info: { n: 4, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_BundleItem`;
    }
  },
  sa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reward_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { reward_id: { n: 1, br: T.readInt32, bw: D.writeInt32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_LoyaltyRewardItem`;
    }
  },
  ca = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidparent || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidparent: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            children: { n: 2, c: e, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RelationShip`;
    }
  },
  la = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.couponid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            couponid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            gidcoupon: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            gidlineitem: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AvailableCoupon`;
    }
  },
  ua = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidlineitem || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidlineitem: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            package_item: { n: 2, c: na },
            wallet_credit_item: { n: 3, c: ra },
            coupon_item: { n: 4, c: ia },
            micro_item: { n: 5, c: aa },
            bundle_item: { n: 7, c: oa },
            loyalty_item: { n: 8, c: sa },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Item`;
    }
  },
  da = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coupons || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { coupons: { n: 1, c: la, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Potentials`;
    }
  },
  fa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_GetContents_Request`;
    }
  },
  pa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.lineitems || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            lineitems: { n: 1, c: ua, r: !0, q: !0 },
            treeview: { n: 2, c: ca, r: !0, q: !0 },
            potentials: { n: 3, c: da },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_Contents`;
    }
  },
  ma = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            contents: { n: 2, c: pa },
            time_created: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            merged_into_account_cart: { n: 4, br: T.readBool, bw: D.writeBool },
            steamid_requester: {
              n: 5,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            purchase_request_id: {
              n: 6,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_GetContents_Response`;
    }
  },
  ha = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            browserid: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            cart_items: { n: 4, c: na, r: !0, q: !0 },
            store_country_code: { n: 5, br: T.readString, bw: D.writeString },
            beta_mode: { n: 6, d: !1, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Request`;
    }
  },
  ga = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            contents: { n: 2, c: pa },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddPackages_Response`;
    }
  },
  _a = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            quantity: { n: 3, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Request`;
    }
  },
  va = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            contents: { n: 2, c: pa },
            result_details: {
              n: 3,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_UpdatePackageQuantity_Response`;
    }
  },
  ya = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            bundleid: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            browserid: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            store_country: { n: 5, br: T.readString, bw: D.writeString },
            quantity: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            beta_mode: { n: 7, d: !1, br: T.readBool, bw: D.writeBool },
            gift_info: { n: 8, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Request`;
    }
  },
  ba = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: pa },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_AddBundle_Response`;
    }
  },
  xa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            gidlineitem: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            gift_info: { n: 3, c: Zi },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Request`;
    }
  },
  Sa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { contents: { n: 1, c: pa } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_ModifyLineItem_Response`;
    }
  },
  Ca = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gidshoppingcart || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gidshoppingcart: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            gidlineitems: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint64String,
              pbr: T.readPackedUint64String,
              bw: D.writeRepeatedUint64String,
            },
            browserid: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Request`;
    }
  },
  wa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.contents || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            contents: { n: 1, c: pa },
            result_details: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CShoppingCart_RemoveLineItems_Response`;
    }
  },
  Ta;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ShoppingCart.CreateNewShoppingCart#1`, h($i, t, n), ea, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.CreateNewShoppingCart = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ShoppingCart.GetShoppingCartContents#1`,
      h(fa, t, n),
      ma,
      {
        bConstMethod: !0,
        ePrivilege: 1,
        eWebAPIKeyRequirement: 1,
        rgBrowserAPISites: [`partner`],
      },
    );
  }
  e.GetShoppingCartContents = n;
  function r(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddPackages#1`, h(ha, t, n), ga, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddPackages = r;
  function i(e, t, n) {
    return e.SendMsg(`ShoppingCart.UpdatePackageQuantity#1`, h(_a, t, n), va, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.UpdatePackageQuantity = i;
  function a(e, t, n) {
    return e.SendMsg(`ShoppingCart.AddBundle#1`, h(ya, t, n), ba, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.AddBundle = a;
  function o(e, t, n) {
    return e.SendMsg(`ShoppingCart.ModifyLineItem#1`, h(xa, t, n), Sa, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  e.ModifyLineItem = o;
  function s(e, t, n) {
    return e.SendMsg(`ShoppingCart.RemoveLineItems#1`, h(Ca, t, n), wa, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.RemoveLineItems = s;
})((Ta ||= {})),
  I.createContext({ staleTimeMs: 1 / 0 }),
  (0, I.createContext)({ errorMessage: null, setErrorMessage: (e) => {} });
function Ea(e, t) {
  return `${u.STORE_BASE_URL}cart/purchaserequest/${e}/${t}`;
}
var Da = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.data || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { data: { n: 1, c: Oa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `AdditionalSubjectData`;
    }
  },
  Oa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.key || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            key: { n: 1, br: T.readString, bw: D.writeString },
            value: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `AdditionalSubjectData_DataEntry`;
    }
  },
  ka = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
            start: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            count: { n: 3, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Request`;
    }
  },
  Aa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.report_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [23, 24], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            report_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            reporter_steamid: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            time_reported: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            report_reason: { n: 4, br: T.readEnum, bw: D.writeEnum },
            report_text: { n: 5, br: T.readString, bw: D.writeString },
            subject_type: { n: 6, br: T.readEnum, bw: D.writeEnum },
            subject_group_id: {
              n: 7,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            subject_id: {
              n: 8,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            resolved: { n: 9, br: T.readEnum, bw: D.writeEnum },
            time_resolved: { n: 10, br: T.readUint32, bw: D.writeUint32 },
            resolver_steamid: {
              n: 11,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            time_notified: { n: 12, br: T.readUint32, bw: D.writeUint32 },
            additional_subject_data: { n: 13, c: Da },
            time_disputed: { n: 14, br: T.readUint32, bw: D.writeUint32 },
            dispute_details: { n: 15, br: T.readString, bw: D.writeString },
            dispute_resolver_steamid: {
              n: 16,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            dispute_resolved: { n: 17, br: T.readEnum, bw: D.writeEnum },
            time_dispute_resolved: {
              n: 18,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            detected_by_automation: {
              n: 19,
              d: !1,
              br: T.readBool,
              bw: D.writeBool,
            },
            resolved_by_automation: {
              n: 20,
              d: 0,
              br: T.readEnum,
              bw: D.writeEnum,
            },
            content_moderated_reason: {
              n: 21,
              br: T.readEnum,
              bw: D.writeEnum,
            },
            dispute_resolved_reason: { n: 22, br: T.readEnum, bw: D.writeEnum },
            sanctions_applied: { n: 23, c: La, r: !0, q: !0 },
            sanctions_applied_on_dispute: { n: 24, c: La, r: !0, q: !0 },
            reported_content_id: {
              n: 25,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            coordinates: { n: 26, c: ho },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReport`;
    }
  },
  ja = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.content_report || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            content_report: { n: 1, c: Aa, r: !0, q: !0 },
            total_count: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportsSubmittedByUser_Response`;
    }
  },
  Ma = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
            subject_type: { n: 2, br: T.readEnum, bw: D.writeEnum },
            subject_group_id: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            subject_id: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            reported_content_id: {
              n: 5,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Request`;
    }
  },
  Na = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.content_report || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { content_report: { n: 1, c: Aa } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOneReportSubmittedByUser_Response`;
    }
  },
  Pa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Request`;
    }
  },
  Fa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [13, 31, 32], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            owner_steam_id: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            language: { n: 5, br: T.readInt32, bw: D.writeInt32 },
            resolved: { n: 6, br: T.readEnum, bw: D.writeEnum },
            time_resolved: { n: 7, br: T.readUint32, bw: D.writeUint32 },
            unresolved_report_count: {
              n: 8,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            oldest_unresolved_report_time: {
              n: 9,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            resolver_steamid: {
              n: 10,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            assigned_moderator_steamid: {
              n: 11,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            time_claimed_by_moderator: {
              n: 12,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            reports: { n: 13, c: Aa, r: !0, q: !0 },
            additional_subject_data: { n: 14, c: Da },
            csam_status: { n: 15, br: T.readEnum, bw: D.writeEnum },
            terrorism_status: { n: 16, br: T.readEnum, bw: D.writeEnum },
            content_moderated_reason: {
              n: 17,
              br: T.readEnum,
              bw: D.writeEnum,
            },
            unresolved_dispute_count: {
              n: 18,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            oldest_unresolved_dispute_time: {
              n: 19,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            owner_dispute_time: { n: 24, br: T.readUint32, bw: D.writeUint32 },
            owner_dispute_resolved_time: {
              n: 25,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            owner_dispute_details: {
              n: 26,
              br: T.readString,
              bw: D.writeString,
            },
            required_moderator_level: {
              n: 27,
              br: T.readEnum,
              bw: D.writeEnum,
            },
            resolved_by_automation: {
              n: 28,
              d: 0,
              br: T.readEnum,
              bw: D.writeEnum,
            },
            detected_by_automation: {
              n: 29,
              d: !1,
              br: T.readBool,
              bw: D.writeBool,
            },
            credible_threat_of_violence_status: {
              n: 30,
              br: T.readEnum,
              bw: D.writeEnum,
            },
            sanctions_applied: { n: 31, c: La, r: !0, q: !0 },
            sanctions_applied_after_dispute: { n: 32, c: La, r: !0, q: !0 },
            decision_reversed: { n: 33, br: T.readBool, bw: D.writeBool },
            reported_content_id: {
              n: 34,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            coordinates: { n: 35, c: ho },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubject`;
    }
  },
  Ia = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subject: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedSubjectsByOwner_Response`;
    }
  },
  La = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.sanction || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            sanction: { n: 1, br: T.readEnum, bw: D.writeEnum },
            days: { n: 2, br: T.readInt32, bw: D.writeInt32 },
            escalate_to: { n: 3, br: T.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubjectSanction`;
    }
  },
  Ra = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Request`;
    }
  },
  za = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.buckets || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            buckets: { n: 1, c: Ba, r: !0, q: !0 },
            pending_for_any_moderator: {
              n: 2,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            pending_for_supervisor: {
              n: 3,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            pending_for_valve: { n: 4, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response`;
    }
  },
  Ba = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            unresolved_count: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            oldest_unresolved: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            unclaimed_count: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            oldest_disputed: { n: 5, br: T.readUint32, bw: D.writeUint32 },
            disputed_count: { n: 6, br: T.readUint32, bw: D.writeUint32 },
            unclaimed_disputed_count: {
              n: 7,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            pending_for_any_moderator: {
              n: 8,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            pending_for_supervisor: {
              n: 9,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            pending_for_valve: { n: 10, br: T.readUint32, bw: D.writeUint32 },
            oldest_unresolved_for_any_moderator: {
              n: 11,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            oldest_unresolved_for_supervisor: {
              n: 12,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            oldest_unresolved_for_valve: {
              n: 13,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            coordinates: { n: 14, c: ho },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetSubjectOverview_Response_Bucket`;
    }
  },
  Va = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ContentReportSubjectKey`;
    }
  },
  Ha = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            rtime_cooldown_ends: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            acquit_unresolved_reports: {
              n: 3,
              br: T.readBool,
              bw: D.writeBool,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Request`;
    }
  },
  Ua = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateReporterCooldown_Response`;
    }
  },
  Wa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Request`;
    }
  },
  Ga = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_cooldown_ends || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_cooldown_ends: { n: 1, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterCooldown_Response`;
    }
  },
  Ka = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Request`;
    }
  },
  qa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferred_level || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: T.readEnum, bw: D.writeEnum },
            enabled_subject_types: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readEnum,
              pbr: T.readPackedEnum,
              bw: D.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorPreferences_Response`;
    }
  },
  Ja = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.preferred_level || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            preferred_level: { n: 1, br: T.readEnum, bw: D.writeEnum },
            enabled_subject_types: { n: 2, c: Ya },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request`;
    }
  },
  Ya = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_types || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_types: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readEnum,
              pbr: T.readPackedEnum,
              bw: D.writeRepeatedEnum,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Request_SubjectTypeList`;
    }
  },
  Xa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SetModeratorPreferences_Response`;
    }
  },
  Za = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            rt_start: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Request`;
    }
  },
  Qa = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.activities || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { activities: { n: 1, c: $a, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response`;
    }
  },
  $a = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            timestamp: { n: 4, br: T.readUint32, bw: D.writeUint32 },
            action: { n: 5, br: T.readEnum, bw: D.writeEnum },
            json_data: { n: 6, br: T.readString, bw: D.writeString },
            reported_content_id: {
              n: 7,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetModeratorActivity_Response_ModerationActivity`;
    }
  },
  eo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_start_date || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_start_date: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            rtime_end_date: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            subject_type: { n: 3, br: T.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Request`;
    }
  },
  to = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.stats || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { stats: { n: 2, c: no, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response`;
    }
  },
  no = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.rtime_date || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            rtime_date: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            times_unresolved: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            times_resolved: { n: 3, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetDailyModerationStatistics_Response_DayStatistics`;
    }
  },
  ro = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            count: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Request`;
    }
  },
  io = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: ao, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response`;
    }
  },
  ao = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            subject_group_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            subject_id: {
              n: 3,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            reported_content_id: {
              n: 4,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetOldestUnresolvedSubjects_Response_Subject`;
    }
  },
  oo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Request`;
    }
  },
  so = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.total_reports || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            total_reports: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            total_acquitted_reports: {
              n: 2,
              br: T.readUint32,
              bw: D.writeUint32,
            },
            reports_in_last_week: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            acquitted_reports_in_last_week: {
              n: 4,
              br: T.readUint32,
              bw: D.writeUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReporterStats_Response`;
    }
  },
  co = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            moderator_level: { n: 2, br: T.readEnum, bw: D.writeEnum },
            filters: { n: 3, c: ho, r: !0, q: !0 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Request`;
    }
  },
  lo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ClaimBatch_Response`;
    }
  },
  uo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Request`;
    }
  },
  fo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetClaimedSubjects_Response`;
    }
  },
  po = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects_to_release || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects_to_release: { n: 1, c: Va, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Request`;
    }
  },
  mo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReleaseSubjects_Response`;
    }
  },
  ho = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject_type || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            subject_type: { n: 1, br: T.readEnum, bw: D.writeEnum },
            steamid: { n: 2, br: T.readUint64String, bw: D.writeUint64String },
            forum: { n: 3, br: T.readUint64String, bw: D.writeUint64String },
            topic: { n: 4, br: T.readUint64String, bw: D.writeUint64String },
            comment: { n: 5, br: T.readUint64String, bw: D.writeUint64String },
            comment_thread_id: {
              n: 6,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            sender_account_id: { n: 7, br: T.readUint32, bw: D.writeUint32 },
            chat_message_rtime: { n: 8, br: T.readUint32, bw: D.writeUint32 },
            chat_message_ordinal: { n: 9, br: T.readUint32, bw: D.writeUint32 },
            chat_group_id: {
              n: 10,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            chat_room_id: {
              n: 11,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            receiver_account_id: { n: 12, br: T.readUint32, bw: D.writeUint32 },
            published_file_id: {
              n: 13,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            ugc_content_type: { n: 14, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `ReportedContentCoordinates`;
    }
  },
  go = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Request`;
    }
  },
  _o = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subject || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { subject: { n: 1, c: Fa } } }), e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContentByID_Response`;
    }
  },
  vo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.coordinates || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= { proto: e, fields: { coordinates: { n: 1, c: ho } } }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Request`;
    }
  },
  yo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.subjects || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { subjects: { n: 1, c: Fa, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetReportedContent_Response`;
    }
  },
  bo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            details: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Request`;
    }
  },
  xo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_OwnerDisputeModeration_Response`;
    }
  },
  So = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Request`;
    }
  },
  Co = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.entries || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { entries: { n: 1, c: wo, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response`;
    }
  },
  wo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.timestamp || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            timestamp: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            actor_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            automated_action: { n: 3, br: T.readBool, bw: D.writeBool },
            action: { n: 4, br: T.readEnum, bw: D.writeEnum },
            additional_json_data: { n: 5, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_GetAuditLogByID_Response_AuditLogEntry`;
    }
  },
  To = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            report_id: {
              n: 2,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            dispute_details: { n: 3, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Request`;
    }
  },
  Eo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ReporterDisputeModeration_Response`;
    }
  },
  Do = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Request`;
    }
  },
  Oo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_SustainModerationByID_Response`;
    }
  },
  ko = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            new_level: { n: 2, br: T.readEnum, bw: D.writeEnum },
            reason: { n: 3, br: T.readEnum, bw: D.writeEnum },
            note: { n: 4, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Request`;
    }
  },
  Ao = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_EscalateSubjectByID_Response`;
    }
  },
  jo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [9], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            resolution: { n: 4, br: T.readEnum, bw: D.writeEnum },
            reason: { n: 2, br: T.readEnum, bw: D.writeEnum },
            note: { n: 3, br: T.readString, bw: D.writeString },
            resolved_by_automation: { n: 7, br: T.readEnum, bw: D.writeEnum },
            sanctions_applied: { n: 9, c: La, r: !0, q: !0 },
            skip_lock: { n: 10, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Request`;
    }
  },
  Mo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_ResolveByID_Response`;
    }
  },
  No = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            csam_status: { n: 2, br: T.readEnum, bw: D.writeEnum },
            terrorism_status: { n: 3, br: T.readEnum, bw: D.writeEnum },
            credible_threat_of_violence_status: {
              n: 4,
              br: T.readEnum,
              bw: D.writeEnum,
            },
            additional_subject_data: { n: 5, c: Da },
            owner_dispute_details: {
              n: 6,
              br: T.readString,
              bw: D.writeString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Request`;
    }
  },
  Po = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_UpdateSubjectByID_Response`;
    }
  },
  Fo = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.reported_content_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            reported_content_id: {
              n: 1,
              br: T.readUint64String,
              bw: D.writeUint64String,
            },
            action: { n: 2, br: T.readEnum, bw: D.writeEnum },
            automated_action: { n: 3, br: T.readBool, bw: D.writeBool },
            additional_json_data: { n: 4, br: T.readString, bw: D.writeString },
            actor_steamid: {
              n: 5,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Request`;
    }
  },
  Io = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CContentModeration_WriteToAuditLogByID_Response`;
    }
  },
  Lo;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`ContentModeration.ClaimBatch#1`, h(co, t, n), lo, {
      ePrivilege: 5,
    });
  }
  e.ClaimBatch = t;
  function n(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetClaimedSubjects#1`,
      h(uo, t, n),
      fo,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetClaimedSubjects = n;
  function r(e, t, n) {
    return e.SendMsg(`ContentModeration.ReleaseSubjects#1`, h(po, t, n), mo, {
      ePrivilege: 5,
    });
  }
  e.ReleaseSubjects = r;
  function i(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportsSubmittedByUser#1`,
      h(ka, t, n),
      ja,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetReportsSubmittedByUser = i;
  function a(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOneReportSubmittedByUser#1`,
      h(Ma, t, n),
      Na,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetOneReportSubmittedByUser = a;
  function o(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedSubjectsByOwner#1`,
      h(Pa, t, n),
      Ia,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetReportedSubjectsByOwner = o;
  function s(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetSubjectOverview#1`,
      h(Ra, t, n),
      za,
      { ePrivilege: 5 },
    );
  }
  e.GetSubjectOverview = s;
  function c(e, t, n) {
    return e.SendMsg(
      `ContentModeration.UpdateReporterCooldown#1`,
      h(Ha, t, n),
      Ua,
      { ePrivilege: 5 },
    );
  }
  e.UpdateReporterCooldown = c;
  function l(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReporterCooldown#1`,
      h(Wa, t, n),
      Ga,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetReporterCooldown = l;
  function u(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorPreferences#1`,
      h(Ka, t, n),
      qa,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetModeratorPreferences = u;
  function d(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SetModeratorPreferences#1`,
      h(Ja, t, n),
      Xa,
      { ePrivilege: 5 },
    );
  }
  e.SetModeratorPreferences = d;
  function f(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetModeratorActivity#1`,
      h(Za, t, n),
      Qa,
      { ePrivilege: 5 },
    );
  }
  e.GetModeratorActivity = f;
  function p(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetDailyModerationStatistics#1`,
      h(eo, t, n),
      to,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetDailyModerationStatistics = p;
  function m(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetOldestUnresolvedSubjects#1`,
      h(ro, t, n),
      io,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetOldestUnresolvedSubjects = m;
  function g(e, t, n) {
    return e.SendMsg(`ContentModeration.GetReporterStats#1`, h(oo, t, n), so, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetReporterStats = g;
  function _(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedContentByID#1`,
      h(go, t, n),
      _o,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetReportedContentByID = _;
  function v(e, t, n) {
    return e.SendMsg(
      `ContentModeration.GetReportedContent#1`,
      h(vo, t, n),
      yo,
      { bConstMethod: !0, ePrivilege: 5 },
    );
  }
  e.GetReportedContent = v;
  function y(e, t, n) {
    return e.SendMsg(
      `ContentModeration.OwnerDisputeModeration#1`,
      h(bo, t, n),
      xo,
      { ePrivilege: 1 },
    );
  }
  e.OwnerDisputeModeration = y;
  function b(e, t, n) {
    return e.SendMsg(`ContentModeration.GetAuditLogByID#1`, h(So, t, n), Co, {
      bConstMethod: !0,
      ePrivilege: 5,
    });
  }
  e.GetAuditLogByID = b;
  function ee(e, t, n) {
    return e.SendMsg(
      `ContentModeration.ReporterDisputeModeration#1`,
      h(To, t, n),
      Eo,
      { ePrivilege: 1 },
    );
  }
  e.ReporterDisputeModeration = ee;
  function x(e, t, n) {
    return e.SendMsg(
      `ContentModeration.SustainModerationByID#1`,
      h(Do, t, n),
      Oo,
      { ePrivilege: 5 },
    );
  }
  e.SustainModerationByID = x;
  function S(e, t, n) {
    return e.SendMsg(
      `ContentModeration.EscalateSubjectByID#1`,
      h(ko, t, n),
      Ao,
      { ePrivilege: 5 },
    );
  }
  e.EscalateSubjectByID = S;
  function te(e, t, n) {
    return e.SendMsg(`ContentModeration.ResolveByID#1`, h(jo, t, n), Mo, {
      ePrivilege: 5,
    });
  }
  e.ResolveByID = te;
  function C(e, t, n) {
    return e.SendMsg(`ContentModeration.UpdateSubjectByID#1`, h(No, t, n), Po, {
      ePrivilege: 5,
    });
  }
  e.UpdateSubjectByID = C;
  function ne(e, t, n) {
    return e.SendMsg(
      `ContentModeration.WriteToAuditLogByID#1`,
      h(Fo, t, n),
      Io,
      { ePrivilege: 5 },
    );
  }
  e.WriteToAuditLogByID = ne;
})((Lo ||= {}));
function Ro(e) {
  let t = e?.reported_content_id
    ? e.reported_content_id
    : `${e?.subject_type}-${e?.subject_group_id}-${e?.subject_id}`;
  return `${u.COMMUNITY_BASE_URL}my/reportedcontent/${t}`;
}
var zo = {
  11: {
    displayNameLoc: `#SteamNotification_HelpRequest_Author`,
    titleLoc: `#SteamNotification_HelpRequest_Title`,
    bodyLoc: (e) => ({
      locString: `#SteamNotification_HelpRequest_Body`,
      params: [e.ticket],
    }),
    link: (e) => u.HELP_BASE_URL + `wizard/HelpRequest/` + e.ticket,
  },
  6: {
    displayNameLoc: `#SteamNotifications_MajorSale`,
    titleLoc: (e) => ({ locString: e.title }),
    bodyLoc: (e) =>
      r() && e.link.includes(`https://store.steampowered.com`)
        ? `#SteamNotifications_MajorSale_SteamChina_Title`
        : e.body,
    image: (e) => e.image,
    link: (e) =>
      r() && e.link.includes(`https://store.steampowered.com`)
        ? e.link.replace(`https://store.steampowered.com`, u.STORE_BASE_URL)
        : e.link,
  },
  10: {
    displayNameLoc: (e) => e.display_name,
    titleLoc: (e) => e.title,
    bodyLoc: (e) => e.body,
    image: (e) => e.image,
    link: (e) => e.link,
  },
  14: {
    titleLoc: `#SteamNotification_ModeratorMessage_Title`,
    link: (e) => u.COMMUNITY_BASE_URL + `my/moderatormessages/` + e.msgid,
  },
  28: {
    displayNameLoc: (e) =>
      e.is_limited_launch
        ? `#Notification_LimitedLaunchInviteTitle`
        : `#Notification_PlaytestInviteTitle`,
    titleLoc: (e) =>
      e.is_limited_launch
        ? `#Notification_LimitedLaunchInviteBody`
        : `#Notification_PlaytestInviteBody`,
    image: (e) => e.appid,
    link: (e) => u.STORE_BASE_URL + `account/gatedaccess?appid=` + e.appid,
  },
  30: {
    titleLoc: (e) => {
      switch (e.status) {
        case 1:
          return `#Notification_ReportedContentAction_Received`;
        case 2:
          return `#Notification_ReportedContentAction_Sanctioned`;
        case 3:
          return `#Notification_ReportedContentAction_Acquitted`;
        case 4:
          return `#Notification_ReportedContentAction_DisputeReceived`;
        case 5:
          return `#Notification_ReportedContentAction_DisputeSanctioned`;
        case 6:
          return `#Notification_ReportedContentAction_DisputeAcquitted`;
        default:
          return `#Notification_ReportedContentAction_Unknown`;
      }
    },
    link: (e) => Ro(e),
  },
};
function Bo(e) {
  if (e !== void 0) return zo[e];
}
function Vo(e) {
  return !!Bo(e);
}
var Ho = {
  16: {
    steamidAttribute: `inviter`,
    titleLoc: `#SteamNotifications_FamilyInviteTitle`,
    bodyLoc: `#SteamNotifications_FamilyInviteBody`,
    url: (e) =>
      `${u.STORE_BASE_URL}account/familymanagement/join?invitation=${e.familyid}`,
  },
  15: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalFeatureRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalFeatureRequestBody`,
    url: () => `${u.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  17: {
    steamidAttribute: `requestor_steamid`,
    titleLoc: `#SteamNotifications_FamilyPurchaseRequestTitle`,
    bodyLoc: `#SteamNotifications_FamilyPurchaseRequestBody`,
    url: (e) => Ea(e.familyid, e.request_id),
  },
  19: {
    steamidAttribute: `responder_steamid`,
    titleLoc: (e) =>
      e.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle`
        : ``,
    bodyLoc: (e) =>
      e.action == 1
        ? `#SteamNotifications_FamilyPurchaseRequestDeclinedBody`
        : ``,
    url: () => `${u.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  18: {
    steamidAttribute: `steamid`,
    titleLoc: `#SteamNotifications_ParentalPlaytimeRequestTitle`,
    bodyLoc: `#SteamNotifications_ParentalPlaytimeRequestBody`,
    url: () => `${u.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  20: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseTitleApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined`,
    bodyLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalFeatureAccessResponseBodyApproved`
        : `#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined`,
    url: () => `${u.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
  21: {
    steamidAttribute: `steamid_approver`,
    titleLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseTitleApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseTitleDeclined`,
    bodyLoc: (e) =>
      e.approved
        ? `#SteamNotifications_ParentalPlaytimeResponseBodyApproved`
        : `#SteamNotifications_ParentalPlaytimeResponseBodyDeclined`,
    url: () => `${u.STORE_BASE_URL}account/familymanagement?tab=requests`,
  },
};
function Uo(e) {
  if (e !== void 0) return Ho[e];
}
function Wo(e) {
  return !!Uo(e);
}
var Go = [3, 5, 2, 4, 8, 9, 12, 22, 24, 23, 29];
function Ko(e) {
  return Go.findIndex((t) => t == e) != null;
}
function qo(e) {
  return !e.hidden && Jo(e.notification_type) && fs(e.body_data);
}
function Jo(e) {
  return Vo(e) || Wo(e) || Ko(e);
}
var Yo = new te(`SteamNotificationStore`),
  Xo = Yo.Debug,
  Zo = Yo.Error,
  Qo = Yo.Warning,
  $o = class {
    constructor() {
      Oe(this);
    }
    m_rgNotificationRollups = [];
    m_summary = es();
    m_bLoaded = !1;
    m_nUnviewed = 0;
    m_rgNotifyServerRead = [];
    m_rgNotifyServerHidden = [];
    m_keyNotifyServerRead = ``;
    m_keyNotifyServerHidden = ``;
    m_steamid;
    m_transport;
    m_rgUnreadNotificationIDs = [];
    m_rgNewRollupIDs = new Map();
    m_rgTestNotifications = [];
    m_currentNotificationsData = null;
    m_strRemoteClientID = ``;
    m_eTargetClientType = 0;
    m_fnOnNotificationCallback = null;
    BHasNotificationsData() {
      return this.m_currentNotificationsData != null;
    }
    setTransport(e) {
      this.m_transport = e;
    }
    RegisterOnNotificationCallback(e) {
      this.m_fnOnNotificationCallback = e;
    }
    SetClientFilters(e, t = 0) {
      (this.m_strRemoteClientID = e), (this.m_eTargetClientType = t);
    }
    NotifyServerNotificationsRead(e) {
      this.m_rgNotifyServerRead.push(...e), this.UpdateServer();
    }
    NotifyServerNotificationsHidden(e) {
      this.m_rgNotifyServerHidden.push(...e), this.UpdateServer();
    }
    BSendToCallbackAsNew(e) {
      return (
        !e.read &&
        !xs(e) &&
        !this.m_rgUnreadNotificationIDs.includes(e.notification_id)
      );
    }
    Dev_AddTestNotification(e) {}
    Dev_UpdateTestNotificationReadState(e, t) {
      let n = this.m_rgTestNotifications.findIndex(
        (t) => t.notification_id == e,
      );
      return (
        n !== -1 &&
        this.m_rgTestNotifications[n].read != t &&
        ((this.m_rgTestNotifications[n].read = t), !0)
      );
    }
    UpdateServer() {
      if (this.m_rgNotifyServerRead.length > 0) {
        let e = m.Init($n);
        e.Body().set_notification_ids(this.m_rgNotifyServerRead),
          lr.MarkNotificationsRead(this.m_transport, e) &&
            (this.m_rgNotifyServerRead = []);
      }
      if (this.m_rgNotifyServerHidden.length > 0) {
        let e = m.Init(or);
        e.Body().set_notification_ids(this.m_rgNotifyServerHidden),
          lr.HideNotification(this.m_transport, e) &&
            (this.m_rgNotifyServerHidden = []);
      }
    }
    MarkItemRead(e, t = !1) {
      let n = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (n === -1) {
        t
          ? this.NotifyServerNotificationsRead([e])
          : Zo(
              `Attempted to mark notification read that is not in the notification store`,
            );
        return;
      }
      let r = this.m_rgNotificationRollups[n];
      if (r.item.read) {
        Zo(`Attempted to mark notification read that is already read`);
        return;
      }
      if (((r.item.read = !0), r.rgunread?.length > 0)) {
        this.ReduceNewTotals(r.type, r.rgunread.length);
        let e = [];
        r.rgunread.forEach((t) => {
          e.push(t);
        }),
          r.rgread.push(...r.rgunread),
          (r.rgunread = []),
          this.NotifyServerNotificationsRead(e);
      }
    }
    MarkItemHidden(e) {
      let t = this.m_rgNotificationRollups.findIndex(
        (t) => t.item.notification_id == e,
      );
      if (t === -1) {
        Zo(
          `Attempted to mark notification hidden that is not in the notification store`,
        );
        return;
      }
      let n = this.m_rgNotificationRollups[t];
      (n.item.hidden = !0),
        n.rgunread?.length > 0 &&
          this.ReduceNewTotals(n.type, n.rgunread?.length),
        this.NotifyServerNotificationsHidden([...n.rgunread, ...n.rgread]);
    }
    ReduceNewTotals(e, t) {
      bs(this.m_summary, e, -t);
    }
    MarkAllItemsViewed() {
      let e = m.Init(er);
      e.Body().set_remote_client_id(this.m_strRemoteClientID),
        e.Body().set_target_client_type(this.m_eTargetClientType),
        lr.MarkNotificationsViewed(this.m_transport, e),
        (this.m_nUnviewed = 0);
    }
    MarkAllItemsRead(e) {
      let t = [],
        n = [],
        r = e ?? this.m_rgNotificationRollups;
      return (
        r.forEach((e, r) => {
          e.rgunread.length > 0 &&
            (e.rgunread.forEach((e) => {
              t.push(e);
            }),
            n.push(r));
        }),
        t.length > 0 &&
          ((this.m_summary = Object.assign(es(), {
            pending_gifts: this.m_summary.pending_gifts,
            pending_invites: this.m_summary.pending_invites,
            pending_family_invites: this.m_summary.pending_family_invites,
          })),
          n.forEach((e) => {
            let t = r[e];
            (t.item.read = !0), (t.rgunread = []);
          }),
          this.NotifyServerNotificationsRead(t)),
        t.length + 0
      );
    }
    ApplyNotificationsUpdate(e) {
      if (
        (Xo(`ApplyNotificationsUpdate`, e),
        !e ||
          (!e.notifications?.length &&
            e.pending_friend_count === void 0 &&
            e.pending_gift_count === void 0))
      ) {
        Xo(`Error: ApplyNotificationsUpdate was called with no data`);
        return;
      }
      if (!this.m_currentNotificationsData) {
        Xo(
          `Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set`,
        );
        return;
      }
      let t = this.m_currentNotificationsData;
      e.notifications?.forEach((e) => {
        let n = t.notifications.findIndex(
          (t) => t.notification_id == e.notification_id,
        );
        n == -1
          ? t.notifications.push(e)
          : Object.assign(t.notifications[n], e);
      }),
        e.pending_friend_count !== void 0 &&
          (this.m_currentNotificationsData.pending_friend_count =
            e.pending_friend_count),
        e.pending_gift_count !== void 0 &&
          (this.m_currentNotificationsData.pending_gift_count =
            e.pending_gift_count),
        e.pending_family_invite_count !== void 0 &&
          (this.m_currentNotificationsData.pending_family_invite_count =
            e.pending_family_invite_count),
        this.ProcessNotifications();
    }
    ProcessNewNotificationPayload(e) {
      (this.m_currentNotificationsData = JSON.parse(JSON.stringify(e))),
        this.ProcessNotifications();
    }
    ProcessNotifications() {
      let e = [],
        t = es(),
        n = 0;
      if (
        (this.m_currentNotificationsData?.notifications?.forEach((r) => {
          this.BExcludeClientTargetedNotification(r) ||
            (this.m_rgNotifyServerHidden.length > 0 &&
              this.m_rgNotifyServerHidden.findIndex(
                (e) => e == r.notification_id,
              ) !== -1 &&
              (r.hidden = !0),
            qo(r) &&
              (this.m_rgNotifyServerRead.length > 0 &&
                this.m_rgNotifyServerRead.findIndex(
                  (e) => e == r.notification_id,
                ) !== -1 &&
                (r.read = !0),
              r.read || bs(t, r.notification_type, 1),
              r.viewed || n++,
              this.AddNotificationToRollups(e, r)));
        }),
        e.sort((e, t) => e.timestamp - t.timestamp),
        this.m_fnOnNotificationCallback)
      ) {
        for (let t of e)
          if (t.bSendToCallbackAsNew)
            this.m_rgNewRollupIDs.set(
              t.rollup_key,
              JSON.parse(JSON.stringify(t)),
            ),
              this.m_fnOnNotificationCallback(t, 0);
          else if (this.m_rgNewRollupIDs.has(t.rollup_key)) {
            let e = this.m_rgNewRollupIDs.get(t.rollup_key);
            (e.item.read != t.item.read || e.item.viewed != t.item.viewed) &&
              (this.m_rgNewRollupIDs.set(
                t.rollup_key,
                JSON.parse(JSON.stringify(t)),
              ),
              this.m_fnOnNotificationCallback(t, 1));
          }
        for (let [t, n] of this.m_rgNewRollupIDs)
          e.findIndex((e) => e.rollup_key == t) == -1 &&
            (this.m_fnOnNotificationCallback(n, 2),
            this.m_rgNewRollupIDs.delete(t));
      }
      e.reverse(),
        (t.pending_gifts =
          this.m_currentNotificationsData?.pending_gift_count ?? 0),
        (t.pending_invites =
          this.m_currentNotificationsData?.pending_friend_count ?? 0),
        (t.pending_family_invites =
          this.m_currentNotificationsData?.pending_family_invite_count ?? 0),
        (this.m_rgNotificationRollups = e.slice()),
        (this.m_summary = t),
        (this.m_bLoaded = !0),
        (this.m_nUnviewed = n);
    }
    BExcludeClientTargetedNotification(e) {
      let t = fs(e.body_data);
      return t
        ? !!(
            (t.remote_client_id &&
              this.m_strRemoteClientID != t.remote_client_id) ||
            (t.target_client_types &&
              !(this.m_eTargetClientType & t.target_client_types))
          )
        : !1;
    }
    BReplaceRollupItem(e, t) {
      return e.read == t.read
        ? (e.read && t.read) || t.viewed == e.viewed
          ? t.timestamp < e.timestamp
          : !e.viewed && t.viewed
            ? !0
            : e.viewed && t.viewed
              ? t.viewed < e.viewed
              : !1
        : t.read;
    }
    AddNotificationToRollups(e, t) {
      let n = this.BSendToCallbackAsNew(t);
      n && this.m_rgUnreadNotificationIDs.push(t.notification_id);
      let r = t.notification_type;
      switch (r) {
        case 3:
          {
            let i = ps(t);
            if (!i) return;
            let a =
                `comment_` +
                i.owner_steam_id?.GetAccountID() +
                `_` +
                i.forum_id +
                `_` +
                i.topic_id +
                (i.brate_limited ? `_ratelimited` : ``),
              o = e.findIndex((e) => e.rollup_key == a);
            if (o == -1)
              e.push({
                type: r,
                rollup_key: a,
                item: t,
                rollup_count: 1,
                timestamp: t.timestamp,
                rgunread: t.read ? [] : [t.notification_id],
                rgread: t.read ? [t.notification_id] : [],
                bSendToCallbackAsNew: n,
                url: os(i),
              });
            else {
              let r = e[o];
              this.BReplaceRollupItem(t, r.item) &&
                ((r.url = os(i)),
                (r.item = t),
                (r.timestamp = t.timestamp),
                (r.bSendToCallbackAsNew = n)),
                (r.rollup_count += 1),
                t.read
                  ? r.rgread.push(t.notification_id)
                  : r.rgunread.push(t.notification_id);
            }
          }
          break;
        case 4:
          let i = ps(t);
          if (i) {
            let a = `item_` + i.appid;
            this.AddNotificationToRollupByAppID(e, t, a, r, n, i.appid);
          }
          break;
        case 12:
          let a = ps(t)?.appid.toString();
          if (a) {
            let i = `asyncgame_` + a;
            this.AddNotificationToRollupByAppID(e, t, i, r, n, a);
          }
          break;
        case 30:
          let o = ps(t),
            s = o?.report_id,
            c = Ro(o),
            l = `contentreport_${s}`,
            u = e.findIndex((e) => e.rollup_key == l);
          if (u == -1)
            e.push({
              type: r,
              rollup_key: l,
              item: t,
              rollup_count: 1,
              timestamp: t.timestamp,
              rgunread: t.read ? [] : [t.notification_id],
              rgread: t.read ? [t.notification_id] : [],
              bSendToCallbackAsNew: n,
              url: c,
            });
          else {
            let r = e[u];
            this.BReplaceRollupItem(t, r.item) &&
              ((r.url = c),
              (r.item = t),
              (r.timestamp = t.timestamp),
              (r.bSendToCallbackAsNew = n)),
              (r.rollup_count += 1),
              t.read
                ? r.rgread.push(t.notification_id)
                : r.rgunread.push(t.notification_id);
          }
          break;
        default:
          e.push({
            type: r,
            rollup_key: t.notification_id,
            item: t,
            timestamp: t.timestamp,
            rgunread: t.read ? [] : [t.notification_id],
            rgread: t.read ? [t.notification_id] : [],
            bSendToCallbackAsNew: n,
          });
      }
    }
    AddNotificationToRollupByAppID(e, t, n, r, i, a) {
      let o = e.findIndex((e) => e.rollup_key == n);
      if (o == -1)
        e.push({
          type: r,
          rollup_key: n,
          item: t,
          rollup_count: 1,
          timestamp: t.timestamp,
          rgunread: t.read ? [] : [t.notification_id],
          rgread: t.read ? [t.notification_id] : [],
          bSendToCallbackAsNew: i,
        });
      else {
        let n = e[o];
        this.BReplaceRollupItem(t, n.item) &&
          ((n.item = t),
          (n.timestamp = t.timestamp),
          (n.bSendToCallbackAsNew = i)),
          (n.rollup_count += 1),
          t.read
            ? n.rgread.push(t.notification_id)
            : n.rgunread.push(t.notification_id);
      }
    }
  };
v([O], $o.prototype, `m_rgNotificationRollups`, void 0),
  v([O], $o.prototype, `m_summary`, void 0),
  v([O], $o.prototype, `m_bLoaded`, void 0),
  v([O], $o.prototype, `m_nUnviewed`, void 0),
  v([ct], $o.prototype, `ProcessNotifications`, null);
function es() {
  return {
    comments: 0,
    inventory_items: 0,
    invites: 0,
    gifts: 0,
    offline_messages: 0,
    trade_offers: 0,
    async_game_updates: 0,
    moderator_messages: 0,
    help_request_replies: 0,
    general: 0,
    wishlist: 0,
    pending_gifts: 0,
    pending_invites: 0,
    major_sale: 0,
    parental_feature_requests: 0,
    family_invites: 0,
    family_purchase_requests: 0,
    family_purchase_request_responses: 0,
    pending_family_invites: 0,
    parental_playtime_requests: 0,
    parental_feature_access_responses: 0,
    parental_playtime_responses: 0,
    requested_game_added: 0,
    playtest_invites: 0,
  };
}
async function ts(e, t, n, r, i, a = !0, o = !1) {
  if (!t) throw Error(`Invalid steamid for GetSteamNotifications`);
  let s = m.Init(Zn);
  s.Body().set_language(n),
    s.Body().set_include_read(a),
    s.Body().set_include_pinned_counts(!0),
    s.Body().set_include_confirmation_count(o);
  let c = await lr.GetSteamNotifications(e, s);
  if (c.GetEResult() !== 1)
    throw (
      (Qo(
        `Received error from GetSteamNotifications. Result ${c.GetEResult()}. Transport ${c.Hdr().transport_error()}`,
      ),
      Error(`Error from GetSteamNotifications: ${c.GetEResult()}`))
    );
  let l = c.Body().toObject();
  return (
    r &&
      (l.notifications = l.notifications?.filter(
        (e) => !ys(e.notification_type, r, i),
      )),
    l
  );
}
async function ns(e, t) {
  if (!e || !e.steamid || !e.contextid || !e.appid || !e.assetid)
    return Zo(`Item notification missing required attributes`), null;
  let n = m.Init(wr);
  n.Body().set_steamid(e.steamid),
    n.Body().set_contextid(e.contextid),
    n.Body().set_appid(parseInt(e.appid)),
    n.Body().set_get_descriptions(!0),
    n.Body().set_language(u.LANGUAGE);
  let r = new Tr();
  r.add_assetids(e.assetid), n.Body().set_filters(r);
  let i = await Nr.GetInventoryItemsWithDescriptions(t, n);
  return i.GetEResult() === 1
    ? (i.Body().toObject().descriptions[0] ?? null)
    : (Zo(`Request for steam item metadata did not succeed`, i.GetEResult()),
      null);
}
var rs = `ItemMetadata`;
function is(e) {
  return [`${rs}_${e?.steamid}_${e?.appid}_${e?.contextid}_${e?.assetid}`];
}
function as(e, t, n) {
  let r = hs(4, e.body_data);
  r.steamid = t;
  let i = ot({
    queryKey: is(r),
    queryFn: async () => ns(r, n),
    staleTime: 1 / 0,
  });
  return i.isSuccess ? i.data : null;
}
function os(e) {
  let t = `comment/${e.comment_type}/bounce/${e.owner_steam_id.ConvertTo64BitString()}/${e.forum_id}/?feature2=${e.topic_id}`;
  return e.last_post > 0 && (t += `&tscn=` + (e.last_post - 1)), t;
}
function ss(e) {
  return e.comment_type == 10;
}
function cs(e) {
  return e?.bhas_friend;
}
function ls(e) {
  return e.comment_type == 10;
}
function us(e) {
  return ss(e) || cs(e);
}
function ds(e) {
  return ls(e);
}
function fs(e) {
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch {
    Xo(`Steam notification in invalid format:`, e);
  }
  return null;
}
function ps(e) {
  return hs(e.notification_type, e.body_data);
}
function ms(e) {
  return hs(e.type, e.item?.body_data);
}
function hs(e, t) {
  let n = fs(t);
  if (!n) return null;
  switch (e) {
    case 2:
      return n.gifter_account;
    case 22:
      return {
        responder_steamid: n.responder_steamid,
        package_id: n.package_id,
        bundle_id: n.bundle_id,
      };
    case 9:
      return parseInt(n.sender);
    case 8:
      return { appid: n.appid, count: n.count ?? 1, appids: n.appids ?? [] };
    case 12:
      return !n.appid || !n.state || (n.state != 1 && n.state != 2)
        ? (Xo(`Async game notification invalid data`, t), null)
        : { appid: parseInt(n.appid), state: parseInt(n.state) };
    case 3:
      let r = {
        owner_steam_id: n.owner_steam_id ? new j(n.owner_steam_id) : null,
        bclan_account: gs(n.bclan_account),
        title: n.title,
        comment: n.text,
        time: n.last_post,
        comment_type: Number(n.type),
        topic_id: n.topic_id,
        forum_id: n.forum_id,
        account_steam_id: n.account_id
          ? j.InitFromAccountID(n.account_id)
          : null,
        bhas_friend: gs(n.bhas_friend),
        bis_forum: gs(n.bis_forum),
        last_post: n.last_post,
        bsubscribed: gs(n.subscribed),
        bis_owner: gs(n.bis_owner),
        brate_limited: !!n.brate_limited,
      };
      return (
        n.json_data &&
          (r.json_data = {
            app_id: parseInt(n.json_data.app_id),
            file_type: parseInt(n.json_data.file_type),
            title: n.json_data.title,
          }),
        r
      );
    case 5:
      return {
        requestorID: parseInt(n.requestor_id),
        state: n.state ? parseInt(n.state) : 0,
      };
    case 4:
      return {
        appid: parseInt(n.app_id),
        assetid: n.asset_id ?? ``,
        contextid: n.context_id ?? ``,
      };
    case 23:
      return {
        url: n.url ?? ``,
        strGameName: n.content_app_name ?? ``,
        mediaType: n.media_type ?? `clip`,
        secDuration: parseFloat(n.duration_seconds ?? 0),
        nSize: parseInt(n.file_size ?? 0),
        strMachineName: n.machine_name,
        rtExpiration: n.expiration,
        thumbnailURL: n.thumbnail_url,
      };
    case 30:
      return {
        report_id: n.report_id ?? ``,
        reported_content_id: n.reported_content_id ?? ``,
        subject_type: n.subject_type ?? 0,
        subject_group_id: n.subject_group_id ?? `0`,
        subject_id: n.subject_id ?? `0`,
        status: n.status ?? 0,
      };
    default:
      return (
        Xo(
          `GetCustomNotificationDataByType called with unexpected type:` + e,
          t,
        ),
        null
      );
  }
}
function gs(e) {
  if (e === void 0) return !1;
  if (typeof e == `number`) return e > 0;
  if (typeof e == `string`)
    switch (e.toLowerCase()?.trim()) {
      case `true`:
      case `1`:
        return !0;
      default:
        return !1;
    }
  return Xo(`notification contained unexpected boolean value`), !1;
}
var _s = {
  0: { rollup_field: void 0, eFeature: void 0 },
  1: { rollup_field: void 0, eFeature: void 0 },
  2: { rollup_field: `gifts`, eFeature: 0 },
  3: { rollup_field: `comments`, eFeature: 2 },
  4: { rollup_field: `inventory_items`, eFeature: 3 },
  5: { rollup_field: `invites`, eFeature: 4 },
  6: { rollup_field: `major_sale`, eFeature: 1 },
  7: { rollup_field: void 0, eFeature: void 0 },
  8: { rollup_field: `wishlist`, eFeature: 1 },
  9: { rollup_field: `trade_offers`, eFeature: 6 },
  10: { rollup_field: `general`, eFeature: 0 },
  11: { rollup_field: `help_request_replies`, eFeature: 0 },
  12: { rollup_field: `async_game_updates`, eFeature: 0 },
  14: { rollup_field: `moderator_messages`, eFeature: 2 },
  15: { rollup_field: `parental_feature_requests`, eFeature: 0 },
  16: { rollup_field: `family_invites`, eFeature: 0 },
  17: { rollup_field: `family_purchase_requests`, eFeature: 0 },
  18: { rollup_field: `parental_playtime_requests`, eFeature: 0 },
  19: { rollup_field: `family_purchase_request_responses`, eFeature: 0 },
  20: { rollup_field: `parental_feature_access_responses`, eFeature: 0 },
  21: { rollup_field: `parental_playtime_responses`, eFeature: 0 },
  22: { rollup_field: `requested_game_added`, eFeature: 0 },
  23: { rollup_field: void 0, eFeature: 0 },
  24: { rollup_field: void 0, eFeature: 0 },
  28: { rollup_field: `playtest_invites`, eFeature: 1 },
  29: { rollup_field: void 0, eFeature: 6 },
  30: { rollup_field: void 0, eFeature: 0 },
};
function vs(e) {
  let t = _s[e];
  return w(!!t, `Missing notification type data for ${e}`), t;
}
function ys(e, t, n) {
  return t ? qn(t, vs(e)?.eFeature ?? 15, n) : !1;
}
function bs(e, t, n) {
  pe(() => {
    let r = vs(t);
    r?.rollup_field && (e[r.rollup_field] = Math.max(0, e[r.rollup_field] + n));
  });
}
function V(e) {
  return !e.viewed || e.viewed + 600 > Le();
}
function xs(e) {
  return e.viewed && e.viewed + 172800 < Le();
}
var Ss = `wiJqXTPU468-`,
  Cs = `hioRg1nXJCQ-`,
  ws = `_0aFiUekNE6I-`,
  Ts = `_6CRZVgXX8WU-`,
  Es = `-RS5MjpS9jg-`,
  Ds = `VCr0rtJhkqE-`,
  Os = `_251Yq-pwxUA-`,
  ks = `L0aJl-TTCO0-`,
  As = `jw00MnpI46s-`,
  js = `yV0P89CB4mg-`,
  Ms = `d2UeLuiq6xY-`,
  Ns = `EJrQKVkzhjk-`,
  Ps = `M7XVUF5aHZw-`,
  Fs = `GDByqt7FPpw-`,
  Is = `wDxGI9lKYwM-`,
  Ls = `bhbnhf7x6FA-`;
function Rs(e) {
  if (!e) return;
  let t = typeof e == `string` ? e : e.locString,
    n = typeof e == `string` ? [] : e.params || [];
  if (t) return t[0] === `#` ? F(t, ...n) : t;
}
function zs(e, t) {
  return I.useMemo(() => {
    if (e === void 0) return null;
    let n = Bo(e),
      r = fs(t);
    if (!n || !r) return null;
    let i =
        typeof n.displayNameLoc == `function`
          ? n.displayNameLoc(r)
          : { locString: n.displayNameLoc },
      a =
        typeof n.titleLoc == `function`
          ? n.titleLoc(r)
          : { locString: n.titleLoc },
      o =
        typeof n.bodyLoc == `function`
          ? n.bodyLoc(r)
          : { locString: n.bodyLoc },
      s = typeof n.image == `function` ? n.image(r) : n.image,
      c = typeof n.link == `function` ? n.link(r) : n.link;
    return {
      display_name: Rs(i),
      title: Rs(a),
      body: Rs(o),
      image: s,
      link: c,
    };
  }, [t, e]);
}
function Bs(e, t) {
  return I.useMemo(() => {
    let n = Uo(e),
      r = fs(t);
    if (!n) return null;
    let i = typeof n.titleLoc == `string` ? n.titleLoc : n.titleLoc(r),
      a = typeof n.bodyLoc == `string` ? n.bodyLoc : n.bodyLoc(r),
      o = typeof n.url == `string` ? n.url : n.url(r),
      s =
        typeof n.steamidAttribute == `string`
          ? n.steamidAttribute
          : n.steamidAttribute(r);
    return { strTitleLoc: i, strBodyLoc: a, strUrl: o, steamid: r && r[s] };
  }, [t, e]);
}
function Vs(e) {
  return I.useMemo(() => (Ko(e.type) ? ms(e) : null), [e]);
}
var Hs = `xKH6brPrFV4-`,
  Us = `fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb`;
function Ws(e, t) {
  let n = `.jpg`;
  (!e || e === `0000000000000000000000000000000000000000`) && (e = Us),
    e.length == 44 && ((n = e.substr(-4)), (e = e.substr(0, 40)));
  let r = u.AVATAR_BASE_URL;
  return (
    r ||
      ((r = u.MEDIA_CDN_COMMUNITY_URL + `images/avatars/`),
      (r += e.substr(0, 2) + `/`)),
    (r += e),
    t && t != `small` && (r += `_` + t),
    (r += n),
    r
  );
}
var Gs = `061818254b2c99ac49e6626adb128ed1282a392f`,
  Ks = class {
    m_unAppID;
    m_bInitialized = !1;
    m_strName;
    m_strIconURL;
    m_dtUpdatedFromServer;
    m_eAppType;
    constructor(e) {
      this.m_unAppID = e;
    }
    get appid() {
      return this.m_unAppID;
    }
    get is_initialized() {
      return this.m_bInitialized;
    }
    get is_valid() {
      return this.m_bInitialized && !!this.m_strName;
    }
    get name() {
      return this.m_strName;
    }
    get icon_url_no_default() {
      return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, Gs);
    }
    get icon_url() {
      return this.BuildAppURL(this.m_strIconURL, Gs);
    }
    get time_updated_from_server() {
      return this.m_dtUpdatedFromServer;
    }
    get apptype() {
      return this.m_eAppType;
    }
    BIsApplicationOrTool() {
      return this.apptype == 4 || this.apptype == 2;
    }
    BuildAppURL(e, t) {
      return e
        ? u.MEDIA_CDN_COMMUNITY_URL +
            `images/apps/` +
            this.appid +
            `/` +
            e +
            `.jpg`
        : Ws(t);
    }
    DeserializeFromMessage(e) {
      (this.m_bInitialized = !0),
        (this.m_strName = e.name()),
        (this.m_strIconURL = e.icon()),
        (this.m_dtUpdatedFromServer = new Date()),
        (this.m_eAppType = e.app_type());
    }
    DeserializeFromAppOverview(e) {
      e.icon_hash() && e.app_type() != 1073741824
        ? ((this.m_bInitialized = !0),
          (this.m_strName = e.display_name()),
          (this.m_strIconURL = e.icon_hash()),
          (this.m_dtUpdatedFromServer = new Date()),
          (this.m_eAppType = e.app_type()))
        : (this.m_bInitialized = !1);
    }
    DeserializeFromCacheObject(e) {
      try {
        (this.m_strName = e.strName),
          (this.m_strIconURL = e.strIconURL),
          (this.m_dtUpdatedFromServer = new Date(e.strUpdatedFromServer)),
          (this.m_eAppType = e.eAppType),
          (this.m_bInitialized = !0);
      } catch {}
    }
    SerializeToCacheObject() {
      return (
        w(
          this.m_bInitialized,
          `Attempting to serialize an uninitialized AppInfo object for caching!`,
        ),
        this.m_bInitialized
          ? {
              strName: this.m_strName,
              strIconURL: this.m_strIconURL,
              strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
              eAppType: this.m_eAppType,
            }
          : null
      );
    }
  },
  qs = class {
    m_nLastUpdated = 0;
    m_mapLanguages = O.map();
    m_appid;
    m_fetching = null;
    constructor(e) {
      this.m_appid = e;
    }
    GetAppID() {
      return this.m_appid;
    }
    GetTokenList(e) {
      return this.m_mapLanguages.has(e) ? this.m_mapLanguages.get(e) : null;
    }
    Localize(e, t) {
      let n = u.LANGUAGE;
      return Js(
        e,
        this.GetTokenList(n),
        n == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        t,
      );
    }
    SubstituteParams(e, t) {
      let n = u.LANGUAGE;
      return Ys(
        e,
        this.GetTokenList(n),
        n == `english` ? null : this.GetTokenList(`english`),
        this.m_appid,
        t,
      );
    }
  };
function Js(e, t, n, r, i) {
  if (!e.startsWith(`#`))
    return (
      console.log(`Token doesn't start with #:`, e, `appid`, r, `tokens`, t), ``
    );
  let a = e;
  e = e.toLowerCase();
  let o = ``;
  if (
    (t && t.has(e) && (o = t.get(e)), !o && n && n.has(e) && (o = n.get(e)), o)
  )
    o = Ys(o, t, n, r, i);
  else if (
    ((t || n) &&
      console.log(`No loc found for appid`, r, a, `Tokens:`, t, `Fallback:`, n),
    t && u.EUNIVERSE != 1)
  )
    return e;
  return o;
}
function Ys(e, t, n, r, i) {
  let a = e.match(/{[A-za-z0-9_%#:]+}/g);
  if (a)
    for (let o of a) {
      let a = Js(Xs(o.slice(1, -1), i), t, n, r, i);
      if (!a) return ``;
      e = e.replace(o, a);
    }
  return (e = Xs(e, i)), e;
}
function Xs(e, t) {
  let n = e.match(/%[A-Za-z0-9_:]+%/g);
  if (n)
    for (let r of n) {
      let n = r.slice(1, -1).toLowerCase(),
        i = t.get(n);
      i == null
        ? console.log(`No rich presence found for`, n)
        : (e = e.replace(r, i));
    }
  return e;
}
var Zs = 1209600,
  Qs = class {
    m_CMInterface;
    m_mapAppInfo = O.map();
    m_mapRichPresenceLoc = O.map();
    m_cAppInfoRequestsInFlight = 0;
    m_setPendingAppInfo = new Set();
    m_PendingAppInfoPromise;
    m_PendingAppInfoResolve;
    m_CacheStorage = null;
    m_fnCallbackOnAppInfoLoaded = new re();
    constructor() {
      Oe(this);
    }
    Init(e) {
      this.m_CMInterface = e;
    }
    BHavePendingAppInfoRequests() {
      return (
        this.m_setPendingAppInfo.size > 0 || this.m_cAppInfoRequestsInFlight > 0
      );
    }
    get CMInterface() {
      return this.m_CMInterface;
    }
    RegisterCallbackOnLoad(e) {
      if (!this.BHavePendingAppInfoRequests()) {
        w(!1, `Registering for callback on appinfo load, but nothing queued`),
          e();
        return;
      }
      this.m_fnCallbackOnAppInfoLoaded.Register(e);
    }
    IsLoadingAppID(e) {
      return this.m_setPendingAppInfo.has(e);
    }
    GetAppInfo(e) {
      if (
        (w(this.m_CMInterface, `CAppInfoStore.GetAppInfo called before Init`),
        !this.m_mapAppInfo.has(e))
      ) {
        let t = new Ks(e);
        this.m_mapAppInfo.set(e, t), this.QueueAppInfoRequest(e);
      }
      return this.m_mapAppInfo.get(e);
    }
    QueueAppInfoRequest(e) {
      return e
        ? (this.m_setPendingAppInfo.size ||
            ((this.m_PendingAppInfoPromise = new Promise(
              (e) => (this.m_PendingAppInfoResolve = e),
            )),
            window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
          this.m_setPendingAppInfo.add(e),
          this.m_PendingAppInfoPromise)
        : Promise.resolve();
    }
    async FlushPendingAppInfo() {
      let e = this.m_PendingAppInfoResolve,
        t = Array.from(this.m_setPendingAppInfo);
      (this.m_PendingAppInfoPromise = void 0),
        (this.m_PendingAppInfoResolve = void 0),
        this.m_setPendingAppInfo.clear(),
        await this.LoadAppInfoBatch(t),
        e?.();
    }
    async LoadAppInfoBatch(e) {
      this.m_cAppInfoRequestsInFlight++;
      let t = await this.LoadAppInfoBatchFromLocalCache(e);
      if (t.length) {
        console.log(`Loading batch of App Info from Steam: `, t),
          await this.m_CMInterface?.WaitUntilLoggedOn();
        let e = m.Init(Re);
        for (e.Body().set_language(xe(u.LANGUAGE)); t.length > 0; ) {
          let n = Math.min(50, t.length),
            r = t.slice(0, n);
          (t = t.slice(n)), e.Body().set_appids(r);
          let i = await qe.GetApps(this.m_CMInterface.GetServiceTransport(), e);
          i.GetEResult() == 1
            ? this.OnGetAppsResponse(i)
            : console.error(
                `Error when calling CommunityService.GetApps: EResult=${i.GetEResult()}, AppIDs:`,
                r,
              );
        }
      }
      --this.m_cAppInfoRequestsInFlight == 0 &&
        this.m_setPendingAppInfo.size == 0 &&
        (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
        this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
    }
    OnGetAppsResponse(e) {
      let t = [];
      for (let n of e.Body().apps()) {
        let e = this.m_mapAppInfo.get(n.appid());
        w(e, `Got AppInfo response for unrequested AppID: ${n.appid()}`),
          e &&
            ((e = new Ks(n.appid())),
            e.DeserializeFromMessage(n),
            this.m_mapAppInfo.set(n.appid(), e),
            t.push(e));
      }
      this.SaveAppInfoBatchToLocalCache(t);
    }
    OnAppOverviewChange(e) {
      for (let t of e) {
        let e = new Ks(t.appid());
        e.DeserializeFromAppOverview(t),
          e.is_initialized && this.m_mapAppInfo.set(t.appid(), e);
      }
    }
    async EnsureAppInfoForAppIDs(e) {
      let t = !1;
      return (
        e.forEach((e) => {
          let n = this.m_mapAppInfo.get(e);
          if (n) {
            n.is_valid || (t = !0);
            return;
          }
          (n = new Ks(e)),
            this.m_mapAppInfo.set(e, n),
            this.QueueAppInfoRequest(e),
            (t = !0);
        }),
        t && this.m_PendingAppInfoPromise !== void 0
          ? this.m_PendingAppInfoPromise
          : Promise.resolve()
      );
    }
    SetCacheStorage(e) {
      this.m_CacheStorage = e;
    }
    GetCacheKeyForAppID(e) {
      return `APPINFO_` + e;
    }
    async LoadAppInfoBatchFromLocalCache(e) {
      if (!this.m_CacheStorage) return e;
      console.log(`Loading batch of App Info from Local Cache: `, e);
      let t = new Date(new Date().getTime() - Zs * 1e3),
        n = async (e) => {
          let n = await this.m_CacheStorage?.GetObject(
            this.GetCacheKeyForAppID(e),
          );
          if (!n) return e;
          let r = this.m_mapAppInfo.get(e);
          return (
            w(
              r,
              `Didn't find AppInfo in our map when loading from cache but it should've been there?`,
            ),
            r
              ? ((r = new Ks(e)),
                r.DeserializeFromCacheObject(n),
                r.is_initialized
                  ? (this.m_mapAppInfo.set(e, r),
                    r.time_updated_from_server < t ? e : null)
                  : (console.warn(
                      `Failed to deserialize cached App Info: `,
                      e,
                      n,
                    ),
                    e))
              : e
          );
        },
        r = e.map((e) => n(e));
      return (await Promise.all(r)).filter((e) => e !== null);
    }
    async SaveAppInfoBatchToLocalCache(e) {
      if (this.m_CacheStorage) {
        console.log(
          `Saving batch of App Info to Local Cache: `,
          e.map((e) => e.appid),
        );
        for (let t of e) {
          let e = t.SerializeToCacheObject();
          e &&
            this.m_CacheStorage.StoreObject(
              this.GetCacheKeyForAppID(t.appid),
              e,
            );
        }
      }
    }
    Localize(e, t, n) {
      let r = this.GetRichPresenceLoc(e);
      return r
        ? r.Localize(t, n)
        : u.EUNIVERSE == 1
          ? ``
          : (console.log(
              `Unable to find app localization information for app ${e} token ${t}, this may not have had a chance to load yet`,
            ),
            t);
    }
    GetRichPresenceLoc(e) {
      if (this.m_mapRichPresenceLoc.has(e.toString())) {
        let t = this.m_mapRichPresenceLoc.get(e.toString());
        return (
          t.m_nLastUpdated + 72e5 < Date.now() &&
            this.QueueRichPresenceLocRequest(t),
          t
        );
      }
      let t = new qs(e);
      return (
        this.m_mapRichPresenceLoc.set(e.toString(), t),
        this.QueueRichPresenceLocRequest(t),
        t
      );
    }
    GetRichPresenceLocAsync(e) {
      let t = this.GetRichPresenceLoc(e);
      return t.m_nLastUpdated ? Promise.resolve(t) : t.m_fetching;
    }
    OnRichPresenceLocUpdate(e, t) {
      e.m_nLastUpdated = Date.now();
      for (let n of t) {
        let t = n.language(),
          r = e.m_mapLanguages.get(t);
        r
          ? r.clear()
          : (e.m_mapLanguages.set(t, new Map()), (r = e.m_mapLanguages.get(t)));
        for (let e of n.tokens()) r?.set(e.name().toLowerCase(), e.value());
      }
    }
    QueueRichPresenceLocRequest(e) {
      return (
        e.m_fetching ||
          ((e.m_fetching = this.m_CMInterface
            .WaitUntilLoggedOn()
            .then(() => {
              let t = m.Init(tt);
              return (
                t.Body().set_appid(e.GetAppID()),
                t.Body().set_language(u.LANGUAGE),
                qe.GetAppRichPresenceLocalization(
                  this.m_CMInterface.GetServiceTransport(),
                  t,
                )
              );
            })
            .then(
              (t) => (
                (e.m_fetching = null),
                t.GetEResult() == 1
                  ? (this.OnRichPresenceLocUpdate(e, t.Body().token_lists()),
                    Promise.resolve(e))
                  : Promise.reject()
              ),
            )),
          e.m_fetching.catch(() => {
            e.m_fetching = null;
          })),
        e.m_fetching
      );
    }
  };
v([ct], Qs.prototype, `OnGetAppsResponse`, null),
  v([ct], Qs.prototype, `OnRichPresenceLocUpdate`, null);
var $s = new Qs(),
  H = class {
    m_steamid;
    m_bInitialized = !1;
    m_ePersonaState = 0;
    m_unGamePlayedAppID = 0;
    m_gameid = `0`;
    m_unPersonaStateFlags = 0;
    m_strPlayerName = ``;
    m_strAvatarHash = Us;
    m_strAccountName = ``;
    m_rtLastSeenOnline = 0;
    m_strGameExtraInfo = ``;
    m_unGameServerIP = 0;
    m_unGameServerPort = 0;
    m_game_lobby_id = ``;
    m_bPlayerNamePending = !1;
    m_bAvatarPending = !1;
    m_broadcastId = void 0;
    m_broadcastAccountId = void 0;
    m_broadcastAppId = void 0;
    m_broadcastViewerCount = void 0;
    m_strBroadcastTitle = void 0;
    m_bCommunityBanned = void 0;
    m_eGamingDeviceType = 0;
    m_mapRichPresence = O.map();
    m_bNameInitialized = !1;
    m_bStatusInitialized = !1;
    m_strProfileURL = void 0;
    constructor(e) {
      Oe(this), (this.m_steamid = e);
    }
    Reset() {
      (this.m_ePersonaState = 0),
        (this.m_unGamePlayedAppID = 0),
        (this.m_gameid = `0`),
        (this.m_strGameExtraInfo = ``),
        (this.m_unGameServerIP = 0),
        (this.m_unGameServerPort = 0),
        (this.m_game_lobby_id = ``),
        this.m_mapRichPresence.clear(),
        (this.m_broadcastId = void 0),
        (this.m_broadcastAccountId = void 0),
        (this.m_broadcastAppId = void 0),
        (this.m_broadcastViewerCount = void 0),
        (this.m_strBroadcastTitle = void 0),
        (this.m_eGamingDeviceType = 0);
    }
    GetAccountID() {
      return this.m_steamid.GetAccountID();
    }
    GetSteamIDAsString() {
      return this.m_steamid.ConvertTo64BitString();
    }
    get is_online() {
      return this.m_ePersonaState != 0 && this.m_ePersonaState != 7;
    }
    get is_ingame() {
      return (
        this.is_online &&
        (this.m_unGamePlayedAppID != 0 || this.m_gameid != `0`)
      );
    }
    get is_watchingbroadcast() {
      return !!this.m_broadcastAccountId;
    }
    get is_in_nonsteam_game() {
      return this.m_unGamePlayedAppID == 0 && this.m_gameid != `0`;
    }
    get is_in_joinable_game() {
      return (
        this.has_joinable_game_flag ||
        this.is_in_valid_lobby ||
        this.has_server_ip
      );
    }
    get has_joinable_game_flag() {
      return !!((this.m_unPersonaStateFlags ?? 0) & 2);
    }
    get connect_string() {
      return this.m_mapRichPresence.get(`connect`);
    }
    get is_in_valid_lobby() {
      return this.m_game_lobby_id != null && this.m_game_lobby_id != `0`;
    }
    get has_server_ip() {
      return this.m_unGameServerIP != 0;
    }
    get is_awayOrSnooze() {
      return this.m_ePersonaState == 3 || this.m_ePersonaState == 4;
    }
    HasStateFlag(e) {
      return ((this.m_unPersonaStateFlags ?? 0) & e) != 0;
    }
    get last_seen_online() {
      return this.m_rtLastSeenOnline;
    }
    ClearStateOnDisconnect() {
      this.m_ePersonaState != 0 && this.Reset();
    }
    get is_golden() {
      return this.HasStateFlag(4);
    }
    GetCurrentGameName() {
      return this.m_strGameExtraInfo
        ? this.m_strGameExtraInfo
        : this.m_unGamePlayedAppID
          ? $s.GetAppInfo(this.m_unGamePlayedAppID).name
          : ``;
    }
    GetCurrentGameIconURL() {
      return this.m_unGamePlayedAppID
        ? $s.GetAppInfo(this.m_unGamePlayedAppID).icon_url
        : ``;
    }
    BIsAppInfoReady() {
      return (
        !this.m_unGamePlayedAppID ||
        $s.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
      );
    }
    HasCurrentGameRichPresence() {
      return this.m_mapRichPresence.has(`steam_display`);
    }
    HasRichPresenceForViewGameInfo() {
      return !!(
        this.m_mapRichPresence.has(`status`) ||
        this.m_mapRichPresence.has(`connect`) ||
        this.m_mapRichPresence.has(`connect_private`)
      );
    }
    GetCurrentGameRichPresence() {
      if (this.HasCurrentGameRichPresence()) {
        let e = $s.GetRichPresenceLoc(this.m_unGamePlayedAppID);
        if (e) {
          let t = this.m_mapRichPresence.get(`steam_display`);
          return e.Localize(t, this.m_mapRichPresence);
        }
      } else if (this.HasStateFlag(8))
        return F(`#PersonaStateRemotePlayTogether`);
      return ``;
    }
    GetCurrentGameStatus() {
      return (
        this.GetCurrentGameRichPresence() ||
        this.m_mapRichPresence.get(`status`) ||
        ``
      );
    }
    GetOfflineStatusUpdateRate() {
      if (this.last_seen_online == 0) return 3e4;
      let e = 3600,
        t = 1e3,
        n = $s.CMInterface.GetServerRTime32() - this.last_seen_online;
      return (t *= n > 86400 ? e : n > 2 * e ? 60 : 15), t;
    }
    GetOfflineStatusTime() {
      if (this.last_seen_online == 0) return F(`#PersonaStateOffline`);
      let e = this.GetOfflineStatusUpdateRate();
      (!u.IN_MOBILE || e <= 60) && De(e);
      let t = $s.CMInterface.GetServerRTime32() - this.last_seen_online;
      return t < 60
        ? F(`#PersonaStateLastSeen_JustNow`)
        : F(`#PersonaStateLastSeen`, ut(t));
    }
    GetLocalizedOnlineStatus() {
      switch (this.m_ePersonaState) {
        case 0:
        case 7:
          return this.GetOfflineStatusTime();
        case 1:
          return F(`#PersonaStateOnline`);
        case 2:
          return F(`#PersonaStateBusy`);
        case 3:
          return F(`#PersonaStateAway`);
        case 4:
          return F(`#PersonaStateSnooze`);
        case 5:
          return F(`#PersonaStateLookingToTrade`);
        case 6:
          return F(`#PersonaStateLookingToPlay`);
        default:
          return ``;
      }
    }
    get has_public_party_beacon() {
      return this.m_mapRichPresence.has(`__beacon`) && this.is_ingame;
    }
    get player_group() {
      return this.m_mapRichPresence.has(`steam_player_group`)
        ? this.m_mapRichPresence.get(`steam_player_group`)
        : ``;
    }
    get player_group_size() {
      return this.m_mapRichPresence.has(`steam_player_group_size`)
        ? Number.parseInt(this.m_mapRichPresence.get(`steam_player_group_size`))
        : 0;
    }
    get online_state() {
      return this.is_online
        ? this.is_ingame
          ? `in-game`
          : this.m_broadcastAccountId
            ? `watchingbroadcast`
            : `online`
        : `offline`;
    }
    BHasAvatarSet() {
      return this.m_strAvatarHash != Us;
    }
    get avatar_url() {
      return Ws(this.m_strAvatarHash);
    }
    get avatar_url_medium() {
      return Ws(this.m_strAvatarHash, `medium`);
    }
    get avatar_url_full() {
      return Ws(this.m_strAvatarHash, `full`);
    }
    static SortStatusComparator(e, t, n) {
      if (t.has_public_party_beacon) {
        if (!n.has_public_party_beacon) return -1;
      } else if (n.has_public_party_beacon) return 1;
      else if (t.is_ingame) {
        if (!n.is_ingame) return -1;
        if (e) {
          if (t.is_awayOrSnooze) {
            if (!n.is_awayOrSnooze) return 1;
          } else if (n.is_awayOrSnooze) return -1;
        } else return 0;
      } else if (n.is_ingame) return 1;
      if (t.is_online) {
        if (!n.is_online) return -1;
      } else if (n.is_online) return 1;
      if (e) {
        if (t.is_awayOrSnooze) {
          if (!n.is_awayOrSnooze) return 1;
        } else if (n.is_awayOrSnooze) return -1;
      }
      return 0;
    }
    GetCommunityProfileURL() {
      return this.m_strProfileURL
        ? `${u.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
        : `${u.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
    }
  };
v([O], H.prototype, `m_bInitialized`, void 0),
  v([O], H.prototype, `m_ePersonaState`, void 0),
  v([O], H.prototype, `m_unGamePlayedAppID`, void 0),
  v([O], H.prototype, `m_gameid`, void 0),
  v([O], H.prototype, `m_unPersonaStateFlags`, void 0),
  v([O], H.prototype, `m_strPlayerName`, void 0),
  v([O], H.prototype, `m_strAvatarHash`, void 0),
  v([O], H.prototype, `m_strAccountName`, void 0),
  v([O], H.prototype, `m_rtLastSeenOnline`, void 0),
  v([O], H.prototype, `m_strGameExtraInfo`, void 0),
  v([O], H.prototype, `m_unGameServerIP`, void 0),
  v([O], H.prototype, `m_unGameServerPort`, void 0),
  v([O], H.prototype, `m_game_lobby_id`, void 0),
  v([O], H.prototype, `m_bPlayerNamePending`, void 0),
  v([O], H.prototype, `m_bAvatarPending`, void 0),
  v([O], H.prototype, `m_broadcastId`, void 0),
  v([O], H.prototype, `m_broadcastAccountId`, void 0),
  v([O], H.prototype, `m_broadcastAppId`, void 0),
  v([O], H.prototype, `m_broadcastViewerCount`, void 0),
  v([O], H.prototype, `m_strBroadcastTitle`, void 0),
  v([O], H.prototype, `m_bCommunityBanned`, void 0),
  v([O], H.prototype, `m_eGamingDeviceType`, void 0),
  v([O], H.prototype, `m_bNameInitialized`, void 0);
function ec(e, t) {
  return new pt.default(
    async (t) => {
      let n = [...t],
        r = await Xe.GetPlayerLinkDetails(e, { steamids: n }),
        i = new Map();
      return (
        r
          .Body()
          .accounts()
          .forEach((e) => {
            let t = e.toObject();
            i.set(t.public_data.steamid, t);
          }),
        n.map((e) => i.get(e) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...t },
  );
}
function tc(e) {
  let t = Ge(),
    n = I.useContext(nc);
  return ot(rc(n, t, e));
}
var nc = I.createContext({
  loadPersonaState: async (e, t) => {
    if (e == null) return null;
    let n = await ac(t).load(j.InitFromAccountID(e).ConvertTo64BitString());
    return oc(j.InitFromAccountID(e), n);
  },
});
function rc(e, t, n) {
  let r = typeof n == `string` ? new j(n).GetAccountID() : n;
  return {
    queryKey: [`PlayerSummary`, r],
    queryFn: () => e.loadPersonaState(r, t),
    enabled: !!r,
  };
}
var ic;
function ac(e) {
  return (ic ??= ec(e));
}
function oc(e, t) {
  let n = new H(e),
    r = t?.public_data,
    i = t?.private_data;
  return (
    (n.m_bInitialized = !!t),
    (n.m_ePersonaState = i?.persona_state ?? 0),
    (n.m_strAvatarHash = r?.sha_digest_avatar ? o(r.sha_digest_avatar) : Us),
    (n.m_strPlayerName = r?.persona_name ?? e.ConvertTo64BitString()),
    (n.m_strAccountName = i?.account_name),
    i?.persona_state_flags &&
      (n.m_unPersonaStateFlags = i?.persona_state_flags),
    i?.game_id && (n.m_gameid = i?.game_id),
    i?.game_server_ip_address &&
      (n.m_unGameServerIP = i?.game_server_ip_address),
    i?.lobby_steam_id && (n.m_game_lobby_id = i?.lobby_steam_id),
    i?.game_extra_info && (n.m_strGameExtraInfo = i?.game_extra_info),
    r?.profile_url && (n.m_strProfileURL = r.profile_url),
    n
  );
}
var sc = `TGHZjszXouA-`,
  cc = `_6e5Lw2oBEA8-`,
  lc = `WRvk-2z-S7U-`,
  uc = `nvOZwARKtWQ-`,
  dc = `XA47jRZ-kl4-`,
  fc = `_5TOP1rhjK9g-`,
  pc = `cfYT-RvHPnk-`,
  mc = `X7vR4UwyQ10-`,
  hc = `YhW9H-T-Hto-`,
  gc = `uxNRiRH0W-8-`,
  _c = `ts49d7c2wyQ-`,
  vc = `_4wHdhfSncuQ-`,
  yc = `_3GiOMfMgSIk-`,
  bc = `rnSSdvjnnIY-`,
  xc = `PqHuV1F7Sv8-`,
  Sc = `YR06jcjcqq0-`,
  Cc = `N-3dV6EGIb0-`,
  wc = `_8dzP2cjjs8I-`,
  Tc = `_78CF9aUvUeY-`,
  Ec = `iq-v-asRRbU-`,
  Dc = `BIeyjH0P840-`,
  Oc = `rreXhb5OR24-`,
  kc = `ohF5M-dbfvU-`,
  Ac = `FSYcqMA13Ys-`,
  jc = `oFu8pAhMtAE-`,
  Mc = `dNwwI424aTg-`;
function Nc(e) {
  let { onActivate: t, icon: n, body: r, eUIMode: i, classNames: a } = e,
    o = t,
    s = uc;
  return (
    i == 7 ? (s = Cc) : i == 3 && (s = Sc),
    (s = N(s, a)),
    (0, z.jsx)(M, {
      className: s,
      onActivate: o,
      children: (0, z.jsx)(`div`, {
        className: fc,
        children: (0, z.jsxs)(`div`, {
          className: vc,
          children: [(0, z.jsx)(`span`, { className: mc, children: n }), r],
        }),
      }),
    })
  );
}
function Pc(e) {
  let {
    count: t,
    icon: n,
    onActivate: r,
    strBody: i,
    bAlwaysShow: a,
    eUIMode: o,
    classNames: s,
    visible: c,
  } = e;
  return !t && !a
    ? null
    : (0, z.jsx)(Nc, {
        icon: n,
        body: i,
        onActivate: r,
        eUIMode: o,
        classNames: s,
        visible: c,
      });
}
function U(e) {
  let {
      nUnread: t,
      location: n,
      eUIMode: r,
      bLoading: i,
      footer: a,
      bNewIndicator: o,
    } = e,
    [s, c] = I.useState(+!!i),
    [l, u] = I.useState(void 0);
  I.useEffect(() => {
    s == 1 && !i ? c(2) : s == 2 && i && c(1);
  }, [s, i]),
    I.useEffect(() => {
      let e = window.setTimeout(() => c(0), 2e4);
      return () => window.clearTimeout(e);
    }, []),
    I.useEffect(() => {
      t && t > 0 && l !== `_78CF9aUvUeY-` && n != 2 && n != 1
        ? u(Tc)
        : !t && l == `_78CF9aUvUeY-` && u(wc);
    }, [t, n, l]);
  let d = e.onActivate;
  (d ||= () => console.log(`Missing activate function`)),
    s == 1 && (d = void 0);
  let f = lc;
  n == 4 ? (f = yc) : n == 2 ? (f = xc) : (r == 7 || r == 3) && (f = bc);
  let p = null;
  if (s != 0 && n != 2 && n != 1) {
    let e = s == 2 ? Oc : null;
    p = (0, z.jsxs)(`div`, {
      className: N(Dc, e),
      children: [
        (0, z.jsx)(`div`, { className: N(dc, kc) }),
        (0, z.jsxs)(`div`, {
          className: fc,
          children: [
            (0, z.jsx)(`div`, { className: N(pc, jc) }),
            (0, z.jsx)(`div`, { className: N(Ec, Ac) }),
          ],
        }),
      ],
    });
  }
  return (0, z.jsxs)(M, {
    onActivate: d,
    className: sc,
    onOptionsButton: e.onOptionsButton,
    onOptionsActionDescription: e.onOptionsButtonDesc,
    children: [
      (0, z.jsxs)(`div`, {
        className: N(f, l),
        children: [
          (0, z.jsx)(`div`, { className: dc, children: e.logo }),
          e.personaStatus &&
            (0, z.jsx)(`div`, {
              className: N(`ZQ9KB1rwRQg-`, e.personaStatus),
            }),
          (0, z.jsx)(`div`, { className: fc, children: e.children }),
          p,
          o && (0, z.jsx)(Fc, { location: n }),
        ],
      }),
      a || null,
    ],
  });
}
function Fc(e) {
  let { location: t } = e;
  return t == 3
    ? (0, z.jsx)(`div`, { className: Mc, children: (0, z.jsx)(de, {}) })
    : null;
}
function W(e) {
  let {
      icon: t,
      title: n,
      timestamp: r,
      location: i,
      fnRenderTimestamp: a,
    } = e,
    o = !!r && (i == 3 || i == 4),
    s;
  return (
    (s = i == 4 ? Rc : (a ?? zc)),
    (0, z.jsxs)(`div`, {
      className: pc,
      children: [
        (0, z.jsx)(Ic, { icon: t }),
        !!n && (0, z.jsx)(Lc, { title: n }),
        o && s({ timestamp: r }),
      ],
    })
  );
}
function Ic(e) {
  return (0, z.jsxs)(z.Fragment, {
    children: [
      !!e.icon &&
        (0, z.jsx)(`div`, { className: `X7vR4UwyQ10-`, children: e.icon }),
      ` `,
    ],
  });
}
function Lc(e) {
  return (0, z.jsx)(`div`, { className: hc, children: e.title });
}
function G(e) {
  let t = N(gc, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function K(e) {
  let t = N(_c, e.multiline && `ho1ru92H8AU-`);
  return (0, z.jsx)(`div`, { className: t, children: e.children });
}
function Rc(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = Pe(e.timestamp);
  return (
    lt(t, n) || (r = st(e.timestamp, !1, !1, !1) + ` ` + r),
    (0, z.jsx)(`div`, { className: cc, children: r })
  );
}
function zc(e) {
  if (e.timestamp === void 0) return null;
  let t = new Date(),
    n = new Date(e.timestamp * 1e3),
    r = lt(t, n) ? Pe(e.timestamp) : st(e.timestamp, !1, !1, !1);
  return (0, z.jsx)(`div`, { className: cc, children: r });
}
function q(e) {
  return e == 1;
}
function Bc(e, t) {
  return I.useCallback(
    (n) => {
      e && e(n), t && t();
    },
    [e, t],
  );
}
var Vc = `vjeKRorxqWY-`,
  Hc = `UWjdKshdhD8-`,
  Uc = `RZ1644uUH-k-`,
  Wc = `_5LTIC-a3DVw-`,
  Gc = `BXKoUPp7c7k-`,
  Kc = `kg8VJS07NZk-`;
function J(e) {
  let {
      onActivate: t,
      onDismiss: n,
      logo: r,
      icon: i,
      title: a,
      body: o,
      personaStatus: s,
      className: c,
      singleLineOnly: l,
      fullWidth: u,
    } = e,
    d = Bc(t, n);
  return (0, z.jsxs)(M, {
    className: N(Kc, !l && `_5OrWG-2Mx14-`, c),
    onActivate: d,
    onMouseDown: (e) => {
      e.button == 1 && n && n();
    },
    children: [
      (0, z.jsx)(`div`, { className: Gc, children: r }),
      e.personaStatus && (0, z.jsx)(`div`, { className: N(`f0Hsd0awDV4-`, s) }),
      (0, z.jsxs)(`div`, {
        className: N(Vc, u && `Dcsg7SLpVF8-`),
        children: [
          (0, z.jsxs)(`div`, {
            className: Hc,
            children: [
              !!i &&
                (0, z.jsx)(`div`, { className: `q9vQBNOskjU-`, children: i }),
              (0, z.jsx)(`div`, { className: Uc, children: a }),
            ],
          }),
          (0, z.jsx)(`div`, { className: Wc, children: o }),
        ],
      }),
    ],
  });
}
var qc = `wtEvuR05t3A-`,
  Jc = `JxEGxPRLYiU-`,
  Yc = `QEIVNNUa9hM-`,
  Xc = `GYEm-fQU5e0-`,
  Zc = `jkcoKzEvvVE-`,
  Qc = `Z-UOt0JU-rA-`,
  $c = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            clan_steamid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            relation: { n: 3, br: T.readEnum, bw: D.writeEnum },
            linkname: { n: 4, br: T.readString, bw: D.writeString },
            json: { n: 5, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageLink`;
    }
  },
  el = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            appid_list: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CDeveloperPageToApps`;
    }
  },
  tl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            link: { n: 2, c: $c },
            remove: { n: 3, d: !1, br: T.readBool, bw: D.writeBool },
            update_json_only: { n: 4, d: !1, br: T.readBool, bw: D.writeBool },
            skip_clan_permissions: {
              n: 5,
              d: !1,
              br: T.readBool,
              bw: D.writeBool,
            },
            partner_id: { n: 6, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Request`;
    }
  },
  nl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_SetDevPageLink_Response`;
    }
  },
  rl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { appid: { n: 1, br: T.readUint32, bw: D.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Request`;
    }
  },
  il = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.links || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { links: { n: 1, c: $c, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageLinks_Response`;
    }
  },
  al = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_ids || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_ids: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
            ignore_dlc: { n: 2, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Request`;
    }
  },
  ol = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: el, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageAllAppsLinked_Response`;
    }
  },
  sl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_account_id || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_account_id: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            listid: { n: 2, br: T.readUint64String, bw: D.writeUint64String },
            ignore_dlc: { n: 3, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Request`;
    }
  },
  cl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.apps || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { apps: { n: 1, c: ll, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response`;
    }
  },
  ll = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            sort_order: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPageListApps_Response_ListApp`;
    }
  },
  ul = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.partnerid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { partnerid: { n: 1, br: T.readUint32, bw: D.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Request`;
    }
  },
  dl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.results || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { results: { n: 1, c: fl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response`;
    }
  },
  fl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.clan_accountid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            clan_accountid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            linknames: {
              n: 2,
              r: !0,
              q: !0,
              br: T.readString,
              bw: D.writeRepeatedString,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo`;
    }
  },
  pl;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`StoreCatalog.SetDevPageLink#1`, h(tl, t, n), nl, {
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.SetDevPageLink = t;
  function n(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageLinks#1`, h(rl, t, n), il, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 2,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageLinks = n;
  function r(e, t, n) {
    return e.SendMsg(
      `StoreCatalog.GetDevPageAllAppsLinked#1`,
      h(al, t, n),
      ol,
      { ePrivilege: 1, rgBrowserAPISites: [`partner`] },
    );
  }
  e.GetDevPageAllAppsLinked = r;
  function i(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPageListApps#1`, h(sl, t, n), cl, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPageListApps = i;
  function a(e, t, n) {
    return e.SendMsg(`StoreCatalog.GetDevPagesForPartner#1`, h(ul, t, n), dl, {
      bConstMethod: !0,
      ePrivilege: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetDevPagesForPartner = a;
})((pl ||= {}));
var ml = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            accept: { n: 2, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Request`;
    }
  },
  hl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_RespondToClanInvite_Response`;
    }
  },
  gl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.steamid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            steamid: {
              n: 1,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            rtime_oldest_date: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Request`;
    }
  },
  _l = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.snippets || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { snippets: { n: 1, c: vl, r: !0, q: !0 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response`;
    }
  },
  vl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gid: { n: 1, br: T.readFixed64String, bw: D.writeFixed64String },
            announcement_gid: {
              n: 2,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            hidden: { n: 3, br: T.readBool, bw: D.writeBool },
            published: { n: 4, br: T.readBool, bw: D.writeBool },
            rtime32_start_time: { n: 5, br: T.readUint32, bw: D.writeUint32 },
            event_name: { n: 6, br: T.readString, bw: D.writeString },
            event_type: { n: 7, br: T.readEnum, bw: D.writeEnum },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData`;
    }
  },
  yl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.requests || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            requests: { n: 1, c: bl, r: !0, q: !0 },
            cursor: { n: 2, br: T.readString, bw: D.writeString },
            count: { n: 3, d: 100, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request`;
    }
  },
  bl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            start_build_id: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            end_build_id: { n: 3, br: T.readUint32, bw: D.writeUint32 },
            branch: { n: 4, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange`;
    }
  },
  xl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.matches || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            matches: { n: 1, c: Sl, r: !0, q: !0 },
            num_total_results: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            next_cursor: { n: 3, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response`;
    }
  },
  Sl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appid: { n: 1, br: T.readUint32, bw: D.writeUint32 },
            build_id: { n: 2, br: T.readUint32, bw: D.writeUint32 },
            branch: { n: 3, br: T.readString, bw: D.writeString },
            clan_event_gid: {
              n: 4,
              br: T.readFixed64String,
              bw: D.writeFixed64String,
            },
            clan_account_id: { n: 5, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc`;
    }
  },
  Cl;
(function (e) {
  function t(e, t, n) {
    return e.SendMsg(`Clan.RespondToClanInvite#1`, h(ml, t, n), hl, {
      ePrivilege: 1,
    });
  }
  e.RespondToClanInvite = t;
  function n(e, t, n) {
    return e.SendMsg(
      `Clan.GetDraftAndRecentPartnerEventSnippet#1`,
      h(gl, t, n),
      _l,
      { bConstMethod: !0, ePrivilege: 1 },
    );
  }
  e.GetDraftAndRecentPartnerEventSnippet = n;
  function r(e, t, n) {
    return e.SendMsg(`Clan.GetPartnerEventsByBuildIDRange#1`, h(yl, t, n), xl, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
      rgBrowserAPISites: [`partner`],
    });
  }
  e.GetPartnerEventsByBuildIDRange = r;
})((Cl ||= {}));
var wl = class {
  m_clanSteamID;
  m_appidList = [];
  m_strName = ``;
  m_strAvatarURLFullSize = ``;
  m_strTagLineLoc = ``;
  m_nFollowers = 0;
  m_strVanity = ``;
  m_webLink = void 0;
  m_linkedEvent = void 0;
  m_mapListInfo = new Map();
  m_promise;
  m_bIsLoaded = !1;
  m_bIsHidden = !1;
  m_clanAccountFlags = 0;
  constructor(e) {
    Oe(this), (this.m_clanSteamID = e);
  }
  Initialize(e) {
    (this.m_strName = e.name || ``),
      (this.m_strAvatarURLFullSize =
        e.avatar_url_full_size ||
        `https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg`),
      (this.m_strTagLineLoc = e.tag_line_localized || ``),
      (this.m_nFollowers = e.followers || 0),
      (this.m_strVanity = e.vanity || void 0),
      (this.m_webLink = e.weblink),
      (this.m_bIsHidden = e.hidden || !1),
      (this.m_clanAccountFlags = e.clan_account_flags ?? 0),
      (this.m_linkedEvent = e.linked_event),
      (this.m_mapListInfo = new Map(Object.entries(e.list_info ?? {}))),
      e.appids && e.appids.forEach((e) => this.m_appidList.push(e)),
      (this.m_bIsLoaded = !0);
  }
  GetCreatorHomeIdentifier() {
    return {
      name: this.m_strName,
      clan_account_id: this.m_clanSteamID.GetAccountID(),
      type: `developer`,
      hidden: this.m_bIsHidden,
    };
  }
  BIsPartnerEventEditorEnabled() {
    return !!(this.m_clanAccountFlags & 8);
  }
  BHasClanAccountFlagSet(e) {
    return !!(this.m_clanAccountFlags & e);
  }
  BIsLoaded() {
    return this.m_bIsLoaded;
  }
  GetClanSteamID() {
    return this.m_clanSteamID;
  }
  GetClanAccountID() {
    return this.m_clanSteamID.GetAccountID();
  }
  GetAppIDList() {
    return this.m_appidList;
  }
  GetName() {
    return this.m_strName;
  }
  GetAvatarURLFullSize() {
    return this.m_strAvatarURLFullSize;
  }
  GetTagLine() {
    return this.m_strTagLineLoc;
  }
  GetNumFollowers() {
    return this.m_nFollowers;
  }
  BIsHidden() {
    return this.m_bIsHidden;
  }
  GetCreatorHomeURL(e) {
    if (this.m_strVanity) {
      switch (e) {
        case `publisher`:
          return u.STORE_BASE_URL + `publisher/` + this.m_strVanity + `/`;
        case `franchise`:
          return u.STORE_BASE_URL + `franchise/` + this.m_strVanity + `/`;
      }
      return u.STORE_BASE_URL + `developer/` + this.m_strVanity + `/`;
    }
    return (
      u.STORE_BASE_URL + `curator/` + this.m_clanSteamID.GetAccountID() + `/`
    );
  }
  BHasWebLink() {
    return this.m_webLink !== void 0;
  }
  GetWebLink() {
    return this.m_webLink;
  }
  GetVanityString() {
    return this.m_strVanity;
  }
  GetLinkedEventGID() {
    return this.m_linkedEvent;
  }
  GetListInfo() {
    return this.m_mapListInfo;
  }
  AdjustFollower(e) {
    this.m_nFollowers += e;
  }
  async EnablePartnerEventEditorFlag() {
    this.BIsPartnerEventEditorEnabled() ||
      (await this.UpdateGroupFlagsFeature([2, 8], !0));
  }
  async UpdateGroupFlagsFeature(e, t) {
    let n = u.PARTNER_BASE_URL + `sales/ajaxupdateclanaccountflags`,
      r = this.m_clanAccountFlags;
    if (
      (e.forEach((e) => {
        t ? (r |= e) : (r &= ~e);
      }),
      r == this.m_clanAccountFlags)
    )
      return;
    let a = [];
    r & 1 && a.push(1),
      r & 8 && a.push(8),
      r & 2 && a.push(2),
      r & 4 && a.push(4),
      r & 16 && a.push(16),
      r & 32 && a.push(32),
      r & 64 && a.push(64),
      r & 128 && a.push(128),
      r & 256 && a.push(256);
    let o = new FormData();
    o.append(`sessionid`, i()),
      o.append(`clan_account_id`, this.GetClanAccountID().toString()),
      o.append(`accountflags`, JSON.stringify(a));
    let s = await B.default.post(n, o);
    s &&
      s.status == 200 &&
      s.data.success == 1 &&
      (this.m_clanAccountFlags = r);
  }
};
v([O], wl.prototype, `m_appidList`, void 0),
  v([O], wl.prototype, `m_nFollowers`, void 0),
  v([O], wl.prototype, `m_clanAccountFlags`, void 0);
var Tl = class e {
  constructor() {
    Oe(this);
  }
  m_mapClanToCreatorHome = new Map();
  m_mapAppToCreatorIDList = new Map();
  m_bLoadedFromConfig = !1;
  m_serviceTransport = void 0;
  LazyInit() {
    if (!this.m_bLoadedFromConfig) {
      let t = f(`creatorhome`, `application_config`);
      this.ValidateStoreDefault(t) &&
        t.forEach((t) => {
          let n = Number(t.creator_clan_id),
            r = new wl(j.InitFromClanID(n));
          r.Initialize(t),
            (r.m_promise = e.GetAsPromise(r)),
            this.m_mapClanToCreatorHome.set(n, r);
        });
      let n = f(`creatorhomeforapp`, `application_config`);
      this.ValidateStoreDefaultAppList(n) &&
        n.forEach((e) => {
          e.appid !== void 0 &&
            (this.m_mapAppToCreatorIDList.has(e.appid) ||
              this.m_mapAppToCreatorIDList.set(e.appid, []),
            this.m_mapAppToCreatorIDList.get(e.appid).push(e));
        }),
        (this.m_bLoadedFromConfig = !0);
    }
  }
  GetServiceTransport() {
    if (!this.m_serviceTransport) {
      let e = f(`loyalty_webapi_token`, `application_config`),
        t = He(new Qe(u.WEBAPI_BASE_URL, e || void 0));
      this.m_serviceTransport = t.GetServiceTransport();
    }
    return this.m_serviceTransport;
  }
  static async GetAsPromise(e) {
    return e;
  }
  ValidateStoreDefault(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].name == `string` &&
          (typeof t[0].creator_clan_id == `string` ||
            typeof t[0].creator_clan_id == `number`)
      : !1;
  }
  ValidateStoreDefaultAppList(e) {
    let t = e;
    return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
      ? typeof t[0].clan_account_id == `number` &&
          t[0].clan_account_id > 0 &&
          typeof t[0].appid == `number` &&
          t[0].appid > 0
      : !1;
  }
  BHasCreatorHomeLoaded(e) {
    return (
      this.m_mapClanToCreatorHome.has(e.GetAccountID()) &&
      this.m_mapClanToCreatorHome.get(e.GetAccountID()).BIsLoaded()
    );
  }
  GetCreatorHome(e) {
    return this.m_mapClanToCreatorHome.get(e.GetAccountID());
  }
  GetCreatorHomeByID(e) {
    return this.m_mapClanToCreatorHome.get(e.clan_account_id);
  }
  async LoadCreatorHome(e, t = !1, n) {
    if (
      (this.LazyInit(), t || !this.m_mapClanToCreatorHome.has(e.GetAccountID()))
    ) {
      let t = new wl(e);
      (t.m_promise = this.InternalCreatorHome(t, n)),
        await t.m_promise,
        this.m_mapClanToCreatorHome.set(e.GetAccountID(), t);
    }
    return this.m_mapClanToCreatorHome.get(e.GetAccountID()).m_promise;
  }
  async InternalCreatorHome(e, t) {
    let n = { get_appids: !0, l: u.LANGUAGE },
      r =
        u.STORE_BASE_URL +
        `curator/` +
        e.GetClanAccountID() +
        `/ajaxgetcreatorhomeinfo`,
      i = await B.default.get(r, { params: n, cancelToken: t && t.token });
    return e.Initialize(i.data), e;
  }
  async LoadCreatorHomeListForAppIncludeHiddden(e, t) {
    if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(e))) {
      let n = { appid: e },
        r = u.STORE_BASE_URL + `events/ajaxgetcreatorhomeidforapp`,
        i = await B.default.get(r, {
          params: n,
          cancelToken: t && t.token,
          withCredentials: !0,
        });
      this.m_mapAppToCreatorIDList.set(e, i.data.creator_list);
    }
    return this.m_mapAppToCreatorIDList.get(e);
  }
  async SearchCreatorHomeStore(e, t, n) {
    let r = `${u.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
      i = {
        term: e.replace(` `, `+`),
        require_creator: t,
        cc: u.COUNTRY,
        l: u.LANGUAGE,
        origin: self.origin,
      },
      a = [],
      o = await B.default.get(r, { params: i, cancelToken: n.token });
    return (
      o.data.curators &&
        pe(() => {
          o.data.curators.forEach((e) => {
            if (!this.m_mapClanToCreatorHome.has(e.creator_clan_id)) {
              let t = new wl(j.InitFromClanID(e.creator_clan_id));
              t.Initialize(e),
                this.m_mapClanToCreatorHome.set(e.creator_clan_id, t);
            }
            a.push(this.m_mapClanToCreatorHome.get(e.creator_clan_id));
          });
        }),
      a
    );
  }
  GetCreatorHomeListForAppIncludeHidden(e) {
    return this.m_mapAppToCreatorIDList.has(e)
      ? this.m_mapAppToCreatorIDList.get(e)
      : [];
  }
};
v([O], Tl.prototype, `m_mapClanToCreatorHome`, void 0),
  v([O], Tl.prototype, `m_mapAppToCreatorIDList`, void 0),
  v([ct], Tl.prototype, `LazyInit`, null);
var El = new Tl();
Ve(`g_CreatorHomeStore`, El);
var Dl = new WeakSet();
function Ol(e = it) {
  if (typeof window > `u` || typeof document > `u` || Dl.has(e)) return;
  let t = ie(`groupvanityinfo`, `application_config`);
  (t !== void 0 || document.readyState == `complete`) &&
    (Dl.add(e), kl(t) && Lt(e, t));
}
function kl(e) {
  let t = e;
  return t && Array.isArray(t) && t.length > 0 && typeof t[0] == `object`
    ? typeof t[0].clanAccountID == `number` &&
        (typeof t[0].appid == `number` || typeof t[0].vanity_url == `string`)
    : !1;
}
function Al(e) {
  return typeof e == `string` ? parseInt(e) : e;
}
function jl(e) {
  return typeof e == `string` ? Number.parseInt(e) : e;
}
var Ml = new (class {
  m_queryClient = it;
  m_boxCacheVersion = O.box(0);
  m_bWatchingCache = !1;
  m_bBumpScheduled = !1;
  Init() {
    this.LazyInit();
  }
  LazyInit() {
    Ol(this.m_queryClient),
      this.m_bWatchingCache ||
        ((this.m_bWatchingCache = !0),
        this.m_queryClient.getQueryCache().subscribe((e) => {
          (e?.type == `added` ||
            e?.type == `updated` ||
            e?.type == `removed`) &&
            At(e.query?.queryKey) &&
            this.ScheduleCacheVersionBump();
        }));
  }
  ScheduleCacheVersionBump() {
    this.m_bBumpScheduled ||
      ((this.m_bBumpScheduled = !0),
      queueMicrotask(() => {
        (this.m_bBumpScheduled = !1),
          pe(() =>
            this.m_boxCacheVersion.set(this.m_boxCacheVersion.get() + 1),
          );
      }));
  }
  ReadCache() {
    return this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient;
  }
  AddGroupVanities(e) {
    this.LazyInit(), kl(e) && Lt(this.m_queryClient, e);
  }
  BHasClanInfoLoaded(e) {
    return (
      w(e.BIsValid(), `Clan SteamID is not valid when ClanInfo`),
      w(
        e.BIsClanAccount(),
        `Clan SteamID is not a clan account id when requesting clan info `,
      ),
      this.BHasClanInfoLoadedByAccountID(e.GetAccountID())
    );
  }
  BHasClanInfoLoadedByAccountID(e) {
    return !!Ht(jl(e), this.ReadCache());
  }
  RegisterClanData(e) {
    this.LazyInit(), Lt(this.m_queryClient, e);
  }
  async LoadOGGClanInfoForAppID(e) {
    return (
      this.LazyInit(),
      (e = Al(e)),
      w(e != 0, `LoadOGGClanInfoForAppID called with appid of zero`),
      e == 0 ? null : Kt(e, this.m_queryClient).catch(() => null)
    );
  }
  async LoadOGGClanInfoForIdentifier(e) {
    return this.LazyInit(), qt(e, this.m_queryClient, `store`);
  }
  async LoadOGGClanInfoForGroupVanity(e) {
    return this.LazyInit(), qt(e, this.m_queryClient, `group`);
  }
  async LoadClanInfoForClanSteamID(e) {
    return this.LoadClanInfoForClanAccountID(e.GetAccountID());
  }
  async LoadClanInfoForClanAccountID(e) {
    return this.LazyInit(), Gt(jl(e), this.m_queryClient);
  }
  GetOGGClanInfo(e) {
    let t = this.ReadCache();
    return typeof e == `string` ? Wt(e, t) : Ut(e, t);
  }
  GetClanSteamIDForAppID(e) {
    let t = Ut(Al(e), this.ReadCache());
    return t ? j.InitFromClanID(t.clanAccountID) : void 0;
  }
  GetClanVanityForAppID(e) {
    return Ut(Al(e), this.ReadCache())?.vanity_url;
  }
  GetClanVanityForClanSteamID(e) {
    return Ht(e.GetAccountID(), this.ReadCache())?.vanity_url;
  }
  HasLoadedClanAccountID(e) {
    return this.BHasClanInfoLoadedByAccountID(e);
  }
  GetClanMemberCount(e) {
    return Ut(Al(e), this.ReadCache())?.member_count ?? 0;
  }
  GetClanInfoByClanAccountID(e) {
    return (
      w(
        !!e,
        `Unepxected clanid when requesting information. GetClanInfoByClanAccountID `,
      ),
      Ht(jl(e), this.ReadCache())
    );
  }
  GetCreatorStoreURL(e) {
    let t = El.GetCreatorHome(e);
    if (t) return t.GetCreatorHomeURL(`developer`);
    let n = this.GetClanInfoByClanAccountID(e.GetAccountID());
    return (
      u.COMMUNITY_BASE_URL +
      (n.vanity_url
        ? `groups/` + n.vanity_url
        : `gid/` + e.ConvertTo64BitString())
    );
  }
})();
Ve(`g_ClanStore`, Ml);
function Nl() {
  let e = Be();
  return Ol(e), e;
}
function Pl(e) {
  Nl();
  let { data: t, isPending: n } = Rt(e ? jl(e) : void 0);
  return [!!e && n, t ?? void 0];
}
function Fl(e) {
  switch (e) {
    case 6:
      return (0, z.jsx)(ye, {});
    case 11:
      return (0, z.jsx)($e, {});
    default:
      return (0, z.jsx)(k, {});
  }
}
function Il(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = typeof n?.image == `number`,
    l = c ? { appid: n.image } : void 0,
    { data: u } = nt(l),
    { data: d } = Ie(l),
    f = n?.display_name ?? ``,
    p = n?.title ?? n?.body,
    m = n?.title ? n.body : null,
    h = q(r),
    g = l && (!u || !d),
    [_, v] = I.useState(!1),
    y = () => v(!0),
    b = null;
  if (c) b = Kl(d, t, h);
  else {
    let e = h ? Yc : qc;
    b =
      n?.image && !_
        ? (0, z.jsx)(`img`, { className: e, src: n.image, onError: y })
        : t;
  }
  return h
    ? (0, z.jsx)(J, { ...e, logo: b, icon: i, title: f, body: p })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: b,
          bLoading: g,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: i,
              title: f,
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(G, { multiline: !m, children: p }),
            !!m && (0, z.jsx)(K, { children: m }),
            s ? (0, z.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function Ll(e) {
  let {
      displayName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = q(n),
    c = F(`#SteamNotifications_TradeOffer_Title`),
    l = s
      ? F(`#SteamNotifications_TradeOffer_Body_Short`, t ?? ``)
      : F(`#SteamNotifications_TradeOffer_Body`),
    u = F(`#SteamNotifications_TradeOffer_Description`, t ?? ``),
    d = !t;
  return s
    ? (0, z.jsx)(J, { ...e, logo: e.logo, icon: e.icon, title: c, body: l })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          bLoading: d,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: r,
              title: c,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, z.jsx)(G, { children: l }),
            (0, z.jsx)(K, { children: u }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
var Rl = (e) => {
  let {
      location: t,
      icon: n,
      timestamp: r,
      fnRenderTimestamp: i,
      onHide: a,
    } = e,
    o = q(t),
    s = F(`#SteamNotifications_TradeReversal_Title`),
    c = F(
      o
        ? `#SteamNotifications_TradeReversal_Body_Short`
        : `#SteamNotifications_TradeReversal_Body`,
    ),
    l = F(`#SteamNotifications_TradeReversal_Description`);
  return o
    ? (0, z.jsx)(J, { ...e, logo: e.logo, icon: e.icon, title: s, body: c })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: n,
              title: s,
              timestamp: r,
              location: t,
              fnRenderTimestamp: i,
            }),
            (0, z.jsx)(G, { children: c }),
            (0, z.jsx)(K, { children: l }),
            a ? (0, z.jsx)(Y, { onHide: a }) : null,
          ],
        }),
      });
};
function zl(e) {
  let {
      senderName: t,
      location: n,
      icon: r,
      timestamp: i,
      fnRenderTimestamp: a,
      onHide: o,
    } = e,
    s = q(n),
    c = s
      ? F(`#Notification_GiftReceived_Body_Short`, t ?? ``)
      : F(`#Notification_GiftReceived_Body`),
    l = t ? F(`#Notification_GiftReceived_Description`, t) : null,
    u = F(`#Notification_GiftReceived_Title`),
    d = !t;
  return s
    ? (0, z.jsx)(J, { ...e, logo: e.logo, icon: e.icon, title: u, body: c })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          bLoading: d,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: r,
              title: u,
              timestamp: i,
              location: n,
              fnRenderTimestamp: a,
            }),
            (0, z.jsx)(G, { multiline: !l, children: c }),
            !!l && (0, z.jsx)(K, { children: l }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function Bl(e) {
  let {
      requestorName: t,
      requestorAvatarURL: n,
      fallbackLogo: r,
      data: i,
      location: a,
      icon: o,
      timestamp: s,
      fnRenderTimestamp: c,
      onHide: l,
    } = e,
    u = q(a),
    d = ``;
  t && i.state == 2
    ? (d = F(`#SteamNotifications_FriendInvite_Description_AwaitingResponse`))
    : t && i.state == 3
      ? (d = F(`#SteamNotifications_FriendInvite_Description_Friends`))
      : t && (d = F(`#SteamNotifications_FriendInvite_Description`));
  let [f, p] = I.useState(!1),
    m = () => p(!0),
    h = r;
  if (n && !f) {
    let e = i.state == 3 && a != 1,
      t = u ? Yc : qc;
    h = (0, z.jsxs)(M, {
      style: { position: `relative` },
      children: [
        e && (0, z.jsx)(_e, { className: `A9KSdbG38mc-` }),
        (0, z.jsx)(`img`, { className: t, src: n, onError: m }),
      ],
    });
  }
  let g = t || F(`#SteamNotifications_FriendInvite_Body_Generic`),
    _ = !t;
  return u
    ? (0, z.jsx)(J, {
        ...e,
        logo: h,
        icon: e.icon,
        title: F(`#Notification_FriendInvite_Title`),
        body: g,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: h,
          bLoading: _,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: o,
              title: F(`#Notification_FriendInvite_Title`),
              timestamp: s,
              location: a,
              fnRenderTimestamp: c,
            }),
            (0, z.jsx)(G, { multiline: !d, children: g }),
            !!d && (0, z.jsx)(K, { children: d }),
            l ? (0, z.jsx)(Y, { onHide: l }) : null,
          ],
        }),
      });
}
function Vl(e) {
  let {
      itemState: t,
      fallbackLogo: n,
      data: r,
      location: i,
      icon: a,
      timestamp: o,
      appName: s,
      fnRenderTimestamp: c,
      nUnread: l,
      onHide: d,
    } = e,
    [f, p] = I.useState(!1),
    m = () => p(!0),
    h = q(i),
    g = n;
  if (t?.icon_url && !f) {
    let e = `${u.COMMUNITY_CDN_URL}economy/image/${t.icon_url}`,
      n = t.background_color ? `#` + t.background_color : null,
      r = h ? Yc : qc;
    g = (0, z.jsx)(M, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
        className: r,
        style: { backgroundColor: n ?? void 0, justifyContent: `center` },
        src: e,
        onError: m,
      }),
    });
  }
  let _ = r.appid == 753,
    v = null;
  if (l !== void 0 && l > 1) {
    let e = l - 1;
    v = _
      ? F(`#Notification_Item_RollupMore_Steam`, e)
      : s
        ? F(`#Notification_Item_RollupMore_GameName`, e, s)
        : F(`#Notification_Item_RollupMore`, e);
  } else s && (v = _ ? s : F(`#Notification_Item_Single_GameName`, s));
  let y = t?.name ? t.name : F(`#Notification_Item_Body_Generic`),
    b = !t;
  if (h) {
    let t = ``;
    return (
      (t = s
        ? F(
            l > 1
              ? `#Notification_Item_Body_Short_Plural`
              : `#Notification_Item_Body_Short`,
            s,
          )
        : F(`#Notification_Item_Body_Generic`)),
      (0, z.jsx)(J, {
        ...e,
        logo: g,
        icon: e.icon,
        title: F(`#Notification_ItemAnnouncement_Body`),
        body: t,
      })
    );
  }
  return (0, z.jsx)(X, {
    children: (0, z.jsxs)(U, {
      logo: g,
      bLoading: b,
      ...e,
      children: [
        (0, z.jsx)(W, {
          icon: a,
          title: F(`#Notification_ItemAnnouncement_TitleLong`),
          timestamp: o,
          location: i,
          fnRenderTimestamp: c,
        }),
        (0, z.jsx)(G, { multiline: !v, children: y }),
        !!v && (0, z.jsx)(K, { children: v }),
        d ? (0, z.jsx)(Y, { onHide: d }) : null,
      ],
    }),
  });
}
function Hl(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = q(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = nt(l),
    { data: d } = Ie(l),
    f = Kl(d, t, c),
    p = l && (!u || !d),
    m = ``;
  return (
    n.state == 1
      ? (m =
          c && u?.name
            ? F(`#SteamNotification_AsyncGame_Action_Short`, u.name)
            : F(`#SteamNotification_AsyncGame_Action`))
      : n.state == 2 &&
        (m =
          c && u?.name
            ? F(`#SteamNotification_AsyncGame_Done_Short`, u.name)
            : F(`#SteamNotification_AsyncGame_Done`)),
    c
      ? (0, z.jsx)(J, {
          ...e,
          logo: f,
          icon: e.icon,
          title: F(`#SteamNotification_AsyncGame_Title`),
          body: m,
        })
      : (0, z.jsx)(X, {
          children: (0, z.jsxs)(U, {
            logo: f,
            bLoading: p,
            ...e,
            children: [
              (0, z.jsx)(W, {
                icon: i,
                title: F(`#SteamNotification_AsyncGame_Title`),
                timestamp: a,
                location: r,
                fnRenderTimestamp: o,
              }),
              (0, z.jsx)(G, { children: m }),
              (0, z.jsx)(K, { children: u?.name }),
              s ? (0, z.jsx)(Y, { onHide: s }) : null,
            ],
          }),
        })
  );
}
function Ul(e) {
  let {
      title: t,
      body: n,
      logoUrl: r,
      bDataLoading: i,
      icon: a,
      onHide: o,
      location: s,
      timestamp: c,
      fnRenderTimestamp: l,
      onActivate: u,
      personaStatus: d,
    } = e,
    f = q(s),
    p = f ? Yc : qc,
    m = (0, z.jsx)(M, {
      style: { position: `relative` },
      children: (0, z.jsx)(`img`, {
        className: p,
        style: { justifyContent: `center` },
        src: r,
      }),
    });
  return f
    ? (0, z.jsx)(J, {
        logo: m,
        icon: e.icon,
        title: t,
        body: n,
        onActivate: u,
        personaStatus: d,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: m,
          bLoading: i,
          onActivate: u,
          personaStatus: d,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: a,
              title: t,
              timestamp: c,
              location: s,
              fnRenderTimestamp: l,
            }),
            (0, z.jsx)(G, { multiline: !0, children: n }),
            o ? (0, z.jsx)(Y, { onHide: o }) : null,
          ],
        }),
      });
}
function Wl(e) {
  let {
      currentUserSteamID: t,
      fallbackLogo: n,
      postedByDisplayName: r,
      postedByAvatarURL: i,
      ownerDisplayName: a,
      data: o,
      location: s,
      icon: c,
      timestamp: l,
      fnRenderTimestamp: u,
      nUnread: d,
      appName: f,
      onHide: p,
      commentTitle: m,
      commentBody: h,
    } = e,
    g = m,
    _ = q(s),
    [v, y] = I.useState(!1),
    b = () => y(!0),
    [ee, x] = Pl(o.bclan_account ? o.owner_steam_id?.GetAccountID() : void 0),
    S = ss(o) ? r : null,
    te = ls(o) ? a : null;
  o.comment_type == 10
    ? (g =
        o.owner_steam_id?.ConvertTo64BitString() == t
          ? s == 4 && S
            ? F(`#SteamNotifications_Comment_Your_Profile_By`, S)
            : F(`#SteamNotifications_Comment_Your_Profile`)
          : te
            ? s == 4 && S
              ? F(`#SteamNotifications_Comment_Player_Profile_By`, S, te)
              : F(`#SteamNotifications_Comment_Player_Profile`, te)
            : F(`#SteamNotifications_Comment_Profile`))
    : o.comment_type == 5 && o.json_data?.file_type == 5
      ? (g =
          o.owner_steam_id?.ConvertTo64BitString() == t
            ? f
              ? F(`#SteamNotifications_Comment_Your_Screenshot_Game`, f)
              : F(`#SteamNotifications_Comment_Your_Screenshot`)
            : f
              ? F(`#SteamNotifications_Comment_Screenshot_Game`, f)
              : F(`#SteamNotifications_Comment_Screenshot`))
      : !g && o.json_data?.title && (g = o.json_data.title);
  let C = null;
  o.brate_limited
    ? (g =
        o.comment_type == 7 && o.bis_forum && h
          ? F(`#SteamNotifications_Comment_RateLimited_Forum`, h)
          : F(`#SteamNotifications_Comment_RateLimited`))
    : (C =
        o.comment_type == 7 && o.bis_forum && h
          ? (0, z.jsx)(K, {
              children: F(`#SteamNotifications_Comment_NewDiscussion`, h),
            })
          : (0, z.jsxs)(K, { children: [`"`, h, `"`] }));
  let ne = F(`#SteamNotifications_Comment`),
    re = null;
  if (d !== void 0 && d > 1) {
    let e = `+` + (d - 1);
    s == 4
      ? (re = (0, z.jsx)(`div`, { className: Xc, children: e }))
      : (ne = ne + ` ` + e);
  }
  let ie = n;
  if (!v) {
    let e = _ ? Yc : qc;
    if (i && cs(o)) {
      let t = o.bhas_friend && s != 1;
      ie = (0, z.jsxs)(`div`, {
        style: { position: `relative` },
        children: [
          t && (0, z.jsx)(_e, { className: `A9KSdbG38mc-` }),
          (0, z.jsx)(`img`, { className: e, src: i, onError: b }),
        ],
      });
    } else
      x?.avatar_medium_url &&
        (ie = (0, z.jsx)(`img`, {
          className: e,
          src: x.avatar_medium_url,
          onError: b,
        }));
  }
  return _
    ? (0, z.jsx)(J, { ...e, logo: ie, icon: e.icon, title: ne, body: g })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: ie,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: c,
              title: ne,
              timestamp: l,
              location: s,
              fnRenderTimestamp: u,
            }),
            (0, z.jsx)(G, { children: g }),
            C,
            re,
            p ? (0, z.jsx)(Y, { onHide: p }) : null,
          ],
        }),
      });
}
function Gl(e) {
  let {
      fallbackLogo: t,
      data: n,
      location: r,
      icon: i,
      timestamp: a,
      fnRenderTimestamp: o,
      onHide: s,
    } = e,
    c = q(r),
    l = n.appid ? { appid: n.appid } : void 0,
    { data: u } = nt(l),
    { data: d } = Ie(l),
    { data: f } = Ze(l),
    p = Kl(d, t, c),
    m = l && (!u || !d || !f),
    h = ``,
    g = null;
  if (u) {
    let e = u.name ?? ``;
    (h = e),
      n.count == 1
        ? c
          ? (h = Ue(
              `#SteamNotifications_Wishlist_OnSale_Single_Short`,
              (0, z.jsx)(`span`, { children: e }),
              (0, z.jsx)(`span`, {
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
          : (g = Ue(
              `#SteamNotifications_Wishlist_OnSale_Single`,
              (0, z.jsx)(`span`, {
                style: { color: `#FFFFFF` },
                children: f?.formatted_final_price,
              }),
            ))
        : n.count == 2
          ? c
            ? (h = F(`#SteamNotifications_Wishlist_OnSale_PlusOne_Short`, e))
            : (g = F(`#SteamNotifications_Wishlist_OnSale_PlusOne`))
          : c
            ? (h = F(
                `#SteamNotifications_Wishlist_OnSale_PlusMany_Short`,
                e,
                n.count - 1,
              ))
            : (g = F(
                `#SteamNotifications_Wishlist_OnSale_PlusMany`,
                n.count - 1,
              ));
  } else h = F(`#SteamNotifications_Wishlist_Generic`);
  return c
    ? (0, z.jsx)(J, {
        ...e,
        logo: p,
        icon: e.icon,
        title: F(`#SteamNotifications_Wishlist`),
        body: h,
      })
    : (0, z.jsx)(X, {
        children: (0, z.jsxs)(U, {
          logo: p,
          bLoading: m,
          ...e,
          children: [
            (0, z.jsx)(W, {
              icon: i,
              title: F(`#SteamNotifications_Wishlist`),
              timestamp: a,
              location: r,
              fnRenderTimestamp: o,
            }),
            (0, z.jsx)(G, { multiline: !g, children: h }),
            !!g && (0, z.jsx)(K, { children: g }),
            s ? (0, z.jsx)(Y, { onHide: s }) : null,
          ],
        }),
      });
}
function Kl(e, t, n = !1) {
  let [r, i] = I.useState(!1),
    a = () => i(!0);
  if (!e || r)
    return (0, z.jsx)(M, { style: { position: `relative` }, children: t });
  let o = Jt(e, `community_icon`);
  return n
    ? (0, z.jsx)(M, {
        style: { position: `relative` },
        children: (0, z.jsx)(`img`, { src: o, className: Yc, onError: a }),
      })
    : (0, z.jsxs)(M, {
        style: { position: `relative` },
        children: [
          (0, z.jsx)(`img`, { className: N(Jc), src: o, onError: a }),
          (0, z.jsx)(`img`, {
            src: o,
            onError: a,
            style: {
              position: `absolute`,
              left: 7,
              top: 7,
              height: 32,
              width: 32,
            },
          }),
        ],
      });
}
function Y(e) {
  return (0, z.jsx)(`div`, {
    className: Zc,
    onClick: (t) => {
      e.onHide(), t.stopPropagation(), t.preventDefault();
    },
    onMouseDown: (e) => {
      e.stopPropagation(), e.preventDefault();
    },
    children: (0, z.jsx)(Me, {}),
  });
}
function X(e) {
  return (0, z.jsx)(`div`, { className: Qc, children: e.children });
}
var ql = e(ue()),
  Jl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: D.writeString },
            type: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_UpdateTextFilterDictionary_Notification`;
    }
  },
  Yl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: D.writeString },
            type: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Request`;
    }
  },
  Xl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.dictionary || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { dictionary: { n: 1, br: T.readString, bw: D.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetTextFilterDictionary_Response`;
    }
  },
  Zl = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.language || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            language: { n: 1, br: T.readString, bw: D.writeString },
            type: { n: 2, br: T.readString, bw: D.writeString },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_TextFilterDictionaryChanged_Notification`;
    }
  },
  Ql = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.pid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { pid: { n: 1, br: T.readUint32, bw: D.writeUint32 } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Request`;
    }
  },
  $l = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gameid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_GetGameIDForPID_Response`;
    }
  },
  eu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.gameid || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            gameid: { n: 1, br: T.readUint64String, bw: D.writeUint64String },
            should_handle: { n: 2, br: T.readBool, bw: D.writeBool },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_SetOverlayEscapeKeyHandling_Notification`;
    }
  },
  tu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.search_term || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            search_term: { n: 1, br: T.readString, bw: D.writeString },
            max_results: { n: 2, br: T.readUint32, bw: D.writeUint32 },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Request`;
    }
  },
  nu = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.appids || b(e.M()),
        L.Message.initialize(this, t, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: {
            appids: {
              n: 1,
              r: !0,
              q: !0,
              br: T.readUint32,
              pbr: T.readPackedUint32,
              bw: D.writeRepeatedUint32,
            },
          },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CSteamEngine_SearchAppDataCacheByStoreKeywords_Response`;
    }
  },
  ru;
(function (e) {
  e.UpdateTextFilterDictionaryHandler = {
    name: `SteamEngine.UpdateTextFilterDictionary#1`,
    request: Jl,
  };
  function t(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            ru.UpdateTextFilterDictionaryHandler,
            e,
          )
    );
  }
  e.RegisterForUpdateTextFilterDictionary = t;
  function n(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            h(Jl, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.UpdateTextFilterDictionary = n;
  function r(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.UpdateTextFilterDictionary#1`,
            h(Jl, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (e.SendMsgUpdateTextFilterDictionary = r),
    (e.GetTextFilterDictionaryHandler = {
      name: `SteamEngine.GetTextFilterDictionary#1`,
      request: Yl,
      response: Xl,
    });
  function i(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, h(Yl, e), Xl, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetTextFilterDictionary = i;
  function a(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(`SteamEngine.GetTextFilterDictionary#1`, h(Yl, e), Xl, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (e.SendMsgGetTextFilterDictionary = a),
    (e.NotifyTextFilterDictionaryChangedHandler = {
      name: `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
      request: Zl,
    });
  function o(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            ru.NotifyTextFilterDictionaryChangedHandler,
            e,
          )
    );
  }
  e.RegisterForNotifyTextFilterDictionaryChanged = o;
  function s(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            h(Zl, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.NotifyTextFilterDictionaryChanged = s;
  function c(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.NotifyTextFilterDictionaryChanged#1`,
            h(Zl, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (e.SendMsgNotifyTextFilterDictionaryChanged = c),
    (e.GetGameIDForPIDHandler = {
      name: `SteamEngine.GetGameIDForPID#1`,
      request: Ql,
      response: $l,
    });
  function l(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, h(Ql, e), $l, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  e.GetGameIDForPID = l;
  function u(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(`SteamEngine.GetGameIDForPID#1`, h(Ql, e), $l, {
            ePrivilege: 1,
            eClientExecutionSite: 2,
          })
    );
  }
  (e.SendMsgGetGameIDForPID = u),
    (e.SetOverlayEscapeKeyHandlingHandler = {
      name: `SteamEngine.SetOverlayEscapeKeyHandling#1`,
      request: eu,
    });
  function d(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(
            ru.SetOverlayEscapeKeyHandlingHandler,
            e,
          )
    );
  }
  e.RegisterForSetOverlayEscapeKeyHandling = d;
  function f(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            h(eu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SetOverlayEscapeKeyHandling = f;
  function p(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(
            `SteamEngine.SetOverlayEscapeKeyHandling#1`,
            h(eu, e),
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  (e.SendMsgSetOverlayEscapeKeyHandling = p),
    (e.SearchAppDataCacheByStoreKeywordsHandler = {
      name: `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
      request: tu,
      response: nu,
    });
  function m(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            h(tu, e),
            nu,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SearchAppDataCacheByStoreKeywords = m;
  function g(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(
            `SteamEngine.SearchAppDataCacheByStoreKeywords#1`,
            h(tu, e),
            nu,
            { ePrivilege: 1, eClientExecutionSite: 2 },
          )
    );
  }
  e.SendMsgSearchAppDataCacheByStoreKeywords = g;
})((ru ||= {}));
var iu = class {
  constructor() {
    Oe(this);
  }
  m_mapCallbacks = new Map();
  m_rgRegisteredEMsgs = [];
  m_mapServiceMethodHandlers = new Map();
  m_rgRegisteredServiceMethodHandlers = [];
  DispatchMsgToHandlers(e, t) {
    let n = e.GetEMsg();
    if (n == 146) {
      let n = e.Hdr().target_job_name();
      if (n) {
        let r = this.m_mapServiceMethodHandlers.get(n);
        if (r) {
          this.DEBUG_LogMessageDispatch(e, r[0]);
          for (let i of r)
            try {
              i.invoke(e, t);
            } catch (e) {
              e instanceof Error
                ? p().ReportError(e)
                : console.error(
                    `MessageHandlers failed to dispatch message to handler (${n}): `,
                    e,
                  );
            }
          return !0;
        }
      }
    } else {
      let t = this.m_mapCallbacks.get(n);
      if (t) {
        this.DEBUG_LogMessageDispatch(e, t[0]);
        for (let n of t)
          try {
            n.invoke(e);
          } catch (e) {
            e instanceof Error
              ? p().ReportError(e)
              : console.error(
                  `MessageHandlers failed to dispatch message to handler: `,
                  e,
                );
          }
        return !0;
      }
    }
    return !1;
  }
  DEBUG_LogMessageDispatch(e, t) {}
  get emsg_list() {
    return this.m_rgRegisteredEMsgs;
  }
  get servicemethod_list() {
    return this.m_rgRegisteredServiceMethodHandlers;
  }
  AddCallback(e, t, n) {
    let r = this.m_mapCallbacks.get(e);
    return (
      r ||
        ((r = []),
        this.m_mapCallbacks.set(e, r),
        this.m_rgRegisteredEMsgs.push(e)),
      r.push({ invoke: n, msgClass: t }),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapCallbacks.get(e);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  AddServiceMethodHandler(e, t) {
    let n = (n, r) => {
      let i = m.InitFromMsg(e.request, n),
        a = m.Init(e.response, 147),
        o = t(i, a),
        s = (e) => {
          a.Hdr().set_eresult(e), r(a);
        };
      o instanceof Promise
        ? o.then(s).catch(() => {
            s(2);
          })
        : s(o);
    };
    return (
      this.m_mapServiceMethodHandlers.has(e.name)
        ? console.error(`Duplicate registration for method ` + e.name)
        : (this.m_mapServiceMethodHandlers.set(e.name, [
            { invoke: n, msgClass: e.request },
          ]),
          this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapServiceMethodHandlers.get(e.name);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  AddServiceNotificationHandler(e, t) {
    let n = (n, r) => {
        t(m.InitFromMsg(e.request, n));
      },
      r = this.m_mapServiceMethodHandlers.get(e.name);
    return (
      r ||
        ((r = []),
        this.m_mapServiceMethodHandlers.set(e.name, r),
        this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
      r.push({ invoke: n, msgClass: e.request }),
      {
        invoke: n,
        unregister: () => {
          let t = this.m_mapServiceMethodHandlers.get(e.name);
          if (t)
            for (let e = 0; e < t.length; e++)
              t[e].invoke == n && (t.splice(e, 1), e--);
        },
      }
    );
  }
  RegisterBaseEMessageHandler(e, t) {
    return this.AddCallback(e, void 0, t);
  }
  RegisterEMessageHandler(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      n(m.InitFromMsg(t, e));
    });
  }
  RegisterEMessageAction(e, t, n) {
    return this.AddCallback(e, t, (e) => {
      pe(() => {
        n(m.InitFromMsg(t, e));
      });
    });
  }
  RegisterServiceNotificationHandler(e, t) {
    return this.AddServiceNotificationHandler(e, t);
  }
  RegisterServiceNotificationHandlerAction(e, t) {
    return this.AddServiceNotificationHandler(e, (e) => {
      let n;
      return (
        pe(() => {
          n = t(e);
        }),
        n
      );
    });
  }
  RegisterServiceMethodHandler(e, t) {
    return this.AddServiceMethodHandler(e, t);
  }
  RegisterServiceMethodHandlerAction(e, t) {
    return this.AddServiceMethodHandler(e, (e, n) => {
      let r;
      return (
        pe(() => {
          r = t(e, n);
        }),
        r
      );
    });
  }
};
v([O], iu.prototype, `m_rgRegisteredEMsgs`, void 0),
  v([O], iu.prototype, `m_rgRegisteredServiceMethodHandlers`, void 0);
var au = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(t = null) {
      super(),
        e.prototype.auth_key || b(e.M()),
        L.Message.initialize(this, t, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (e.sm_m ||= {
          proto: e,
          fields: { auth_key: { n: 1, br: T.readString, bw: D.writeString } },
        }),
        e.sm_m
      );
    }
    static MBF() {
      return (e.sm_mbf ||= C(e.M())), e.sm_mbf;
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(t, n) {
      return _(e.M(), t, n);
    }
    static fromObject(t) {
      return E(e.M(), t);
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(t, n) {
      return x(e.MBF(), t, n);
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(t, n) {
      S(e.M(), t, n);
    }
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Request`;
    }
  },
  ou = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CTransportAuth_Authenticate_Response`;
    }
  },
  su = class e extends L.Message {
    static ImplementsStaticInterface() {}
    constructor(e = null) {
      super(), L.Message.initialize(this, e, 0, -1, void 0, null);
    }
    toObject(t = !1) {
      return e.toObject(t, this);
    }
    static toObject(e, t) {
      return e ? { $jspbMessageInstance: t } : {};
    }
    static fromObject(t) {
      return new e();
    }
    static deserializeBinary(t) {
      let n = new L.BinaryReader(t),
        r = new e();
      return e.deserializeBinaryFromReader(r, n);
    }
    static deserializeBinaryFromReader(e, t) {
      return e;
    }
    serializeBinary() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBuffer();
    }
    static serializeBinaryToWriter(e, t) {}
    serializeBase64String() {
      var t = new L.BinaryWriter();
      return e.serializeBinaryToWriter(this, t), t.getResultBase64String();
    }
    getClassName() {
      return `CTransportAuth_StartShutdown_Notification`;
    }
  },
  cu;
(function (e) {
  e.AuthenticateHandler = {
    name: `TransportAuth.Authenticate#1`,
    request: au,
    response: ou,
  };
  function t(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, h(au, e), ou, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.Authenticate = t;
  function n(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? new Promise((e, t) => {
            console.error(
              `Transport Error: no transport is available for request`,
            ),
              t(`Transport Error: no transport is available for request`);
          })
        : t.SendMsg(`TransportAuth.Authenticate#1`, h(au, e), ou, {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  (e.SendMsgAuthenticate = n),
    (e.NotifyStartShutdownHandler = {
      name: `TransportAuth.NotifyStartShutdown#1`,
      request: su,
    });
  function r(e, t) {
    return (
      (t ||= R().GetDefaultHandlerRegistry()),
      t == null
        ? (console.error(
            `Transport Error: no default registry is available for request`,
          ),
          null)
        : t.RegisterServiceNotificationHandler(cu.NotifyStartShutdownHandler, e)
    );
  }
  e.RegisterForNotifyStartShutdown = r;
  function i(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, h(su, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.NotifyStartShutdown = i;
  function a(e, t) {
    return (
      (t ||= R().GetDefaultTransport()),
      t == null
        ? (console.error(
            `Transport Error: no transport is available for request`,
          ),
          !1)
        : t.SendNotification(`TransportAuth.NotifyStartShutdown#1`, h(su, e), {
            ePrivilege: 1,
            eClientExecutionSite: 3,
          })
    );
  }
  e.SendMsgNotifyStartShutdown = a;
})((cu ||= {}));
var lu = class {
  m_socket = null;
  m_sName;
  m_sURL;
  Log = new te(`CWebSocketConnection`, () => this.m_sName);
  m_bDisconnectRequested = !1;
  m_bConnecting = !1;
  m_fnOnMessageHandler;
  m_fnOnCloseHandler;
  m_fnOnReconnectStartHandler;
  m_fnOnReconnectFinishHandler;
  m_nConnectAttemptsMax;
  m_nConnectAttemptTimeoutMs;
  m_bReconnectOnFailure;
  m_nReconnectAttemptTimeoutMs;
  m_nReconnectAttemptsMax;
  constructor(e, t) {
    (this.m_sName = e),
      (this.m_fnOnMessageHandler = t.fnOnMessageHandler),
      (this.m_fnOnCloseHandler = t.fnOnCloseHandler),
      (this.m_fnOnReconnectStartHandler =
        t.fnOnReconnectStartHandler ?? (() => {})),
      (this.m_fnOnReconnectFinishHandler =
        t.fnOnReconnectFinishHandler ?? (() => {})),
      (this.m_nConnectAttemptsMax = t.nConnectAttemptsMax ?? 8),
      (this.m_nConnectAttemptTimeoutMs = t.nConnectAttemptTimeoutMs ?? 1e3),
      (this.m_bReconnectOnFailure = t.bReconnectOnFailure ?? !1),
      (this.m_nReconnectAttemptsMax = t.nReconnectAttemptsMax ?? 3e4),
      (this.m_nReconnectAttemptTimeoutMs = t.nReconnectAttemptTimeoutMs ?? 1e4);
  }
  get name() {
    return this.m_sName;
  }
  async Connect(e) {
    return (
      (this.m_sURL = e),
      this.ConnectWithRetry(
        this.m_sURL,
        this.m_nConnectAttemptsMax,
        this.m_nConnectAttemptTimeoutMs,
      )
    );
  }
  async Reconnect() {
    return this.ConnectWithRetry(
      this.m_sURL,
      this.m_nReconnectAttemptsMax,
      this.m_nReconnectAttemptTimeoutMs,
    );
  }
  GetInterAttemptBackoffMs(e) {
    return g(e, 1, 5) * 1e3;
  }
  async ConnectWithRetry(e, t, n) {
    this.m_bConnecting = !0;
    let r = 0;
    do {
      try {
        let t = await this.ConnectToSocket(e, n);
        if (t.result == 1) return (this.m_bConnecting = !1), t;
        this.Log.Warning(`connect attempt failed: ${t.result} - ${t.message}`);
      } catch (e) {
        this.Log.Warning(`connect attempt failed: exception ${e.name} - ${e}`);
      }
      let i = this.GetInterAttemptBackoffMs(r);
      this.Log.Info(`connect retry: attempt:${r}/${t} backoff:${i}`),
        await new Promise((e) => setTimeout(e, i)),
        (this.m_socket = null),
        (r += 1);
    } while (r < t);
    return (
      this.Log.Warning(
        `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
      ),
      (this.m_bConnecting = !1),
      this.BShouldReconnect() && this.StartReconnect(),
      { result: 2, message: `not ready, exceeded retry count` }
    );
  }
  Disconnect() {
    this.Log.Info(`disconnect requested`),
      (this.m_bDisconnectRequested = !0),
      this.m_socket.close();
  }
  PrepareForShutdown() {
    this.Log.Info(`shutdown pending`), (this.m_bDisconnectRequested = !0);
  }
  BShouldReconnect() {
    return this.m_bConnecting || !this.m_bReconnectOnFailure
      ? !1
      : !this.m_bDisconnectRequested;
  }
  async StartReconnect() {
    if (
      (this.Log.Info(`start reconnect`),
      (this.m_socket = null),
      this.m_fnOnReconnectStartHandler({ connection: this }),
      (await this.Reconnect()).result != 1)
    ) {
      this.Log.Warning(`failed to re-connect to websocket after close`),
        this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 2 }),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !0,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    this.Log.Info(`reconnect successful`),
      this.m_fnOnReconnectFinishHandler({ connection: this, eResult: 1 });
  }
  async ConnectToSocket(e, t) {
    if (this.m_socket != null)
      return this.m_socket.readyState == WebSocket.OPEN
        ? { result: 1, message: `ready` }
        : (this.Log.Error(
            `websocket in an unexpected state: ${this.m_socket.readyState}`,
          ),
          { result: 2, message: `websocket in an unexpected state` });
    try {
      this.m_socket = new WebSocket(e);
    } catch {
      return (
        this.Log.Warning(`failed to initialize websocket connection`),
        { result: 35, message: `Failed to initialize websocket connection` }
      );
    }
    return (
      (this.m_socket.binaryType = `arraybuffer`),
      (this.m_socket.onerror = this.OnSocketError),
      (this.m_socket.onmessage = this.OnSocketMessage),
      (this.m_socket.onopen = this.OnSocketOpen),
      (this.m_socket.onclose = this.OnSocketClose),
      (await this.WaitForSocketOpen(this.m_socket, t))
        ? (this.Log.Info(`connection ready`), { result: 1, message: `ready` })
        : (this.Log.Warning(`failed to reach open state`),
          { result: 2, message: `failed to reach open state` })
    );
  }
  async WaitForSocketOpen(e, t) {
    if (e.readyState != WebSocket.CONNECTING)
      return e.readyState == WebSocket.OPEN;
    let n = t / 100;
    for (; e.readyState == WebSocket.CONNECTING && n > 0; )
      n--, await new Promise((e) => setTimeout(e, 100));
    return e.readyState == WebSocket.OPEN;
  }
  BCanSendMessages() {
    return this.m_socket != null && this.m_socket.readyState == WebSocket.OPEN;
  }
  OnSocketError(e) {
    this.Log.Warning(`websocket error`);
  }
  OnSocketOpen(e) {
    this.Log.Info(`websocket open`);
  }
  OnSocketClose(e) {
    if (this.m_bDisconnectRequested) {
      this.Log.Info(`websocket closed`),
        this.m_fnOnCloseHandler({
          connection: this,
          bError: !1,
          bIsExpectedToReconnect: !1,
        });
      return;
    }
    if (this.m_bConnecting) return;
    this.Log.Warning(`websocket unexpectedly closed`);
    let t = this.BShouldReconnect();
    this.m_fnOnCloseHandler({
      connection: this,
      bError: !0,
      bIsExpectedToReconnect: t,
    }),
      t && this.StartReconnect();
  }
  async OnSocketMessage(e) {
    this.m_fnOnMessageHandler(e.data);
  }
  SendSerializedMessage(e) {
    try {
      return this.m_socket.send(e), 1;
    } catch {
      return 2;
    }
  }
};
v([y], lu.prototype, `OnSocketError`, null),
  v([y], lu.prototype, `OnSocketOpen`, null),
  v([y], lu.prototype, `OnSocketClose`, null),
  v([y], lu.prototype, `OnSocketMessage`, null);
var uu = `127.0.0.1`,
  Z = new te(`WebUITransport`),
  du = class {
    m_iMsgSeq = 1;
    m_mapPendingMethodRequests = new Map();
    m_messageHandlers = new iu();
    m_mapServiceCallErrorCount = new Map();
    m_mapConnectionDetails = new Map();
    m_fnOnStatusEventHandler;
    m_fnOnReconnectErrorHandler;
    m_bInitialized = !1;
    m_nMaximumMsgSizeBytes = 1024;
    BIsValid() {
      return this.m_bInitialized;
    }
    GetMaximumMsgSizeBytes() {
      return this.m_nMaximumMsgSizeBytes;
    }
    TEST_GetMaximumMsgBodySizeBytes() {
      return (
        this.m_nMaximumMsgSizeBytes - this.TEST_GetMsgHeaderEstimatedSizeBytes()
      );
    }
    TEST_GetMsgHeaderEstimatedSizeBytes() {
      return 128;
    }
    TEST_GetExcessivelyLargeBodySize() {
      return 67108864;
    }
    ReportError(e) {
      Z.Warning(e);
      let t = p();
      t &&
        t.ReportError(Error(e), {
          bIncludeMessageInIdentifier: !0,
          cCallsitesToIgnore: 1,
        });
    }
    async Init() {
      if (!u.IN_CLIENT) return;
      let e = await SteamClient.WebUITransport.GetTransportInfo();
      (this.m_nMaximumMsgSizeBytes = e.nMaximumMsgSizeBytes),
        this.CreateConnection(1, `steamUI`, e.portSteamUI, e.authKeySteamUI),
        this.CreateConnection(
          2,
          `clientdll`,
          e.portClientdll,
          e.authKeyClientdll,
        ),
        R().SetDefaultTransport(this),
        R().SetDefaultHandlerRegistry(this.m_messageHandlers),
        cu.RegisterForNotifyStartShutdown(this.OnStartShutdown);
    }
    get messageHandlers() {
      return this.m_messageHandlers;
    }
    SetStatusEventHandler(e) {
      this.m_fnOnStatusEventHandler = e;
    }
    SetReconnectErrorHandler(e) {
      this.m_fnOnReconnectErrorHandler = e;
    }
    CreateConnection(e, t, n, r) {
      let i = {
        connection: new lu(t, {
          bReconnectOnFailure: !0,
          fnOnMessageHandler: this.OnWebsocketMessage,
          fnOnCloseHandler: this.OnWebsocketClose,
          fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
          fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
          nConnectAttemptsMax: 8,
          nConnectAttemptTimeoutMs: 1e4,
          nReconnectAttemptsMax: 8,
          nReconnectAttemptTimeoutMs: 1e4,
        }),
        sUrl: `ws://${uu}:${n}/transportsocket/`,
        sAuthKey: r,
        eClientExecutionSite: e,
      };
      this.m_mapConnectionDetails.set(e, i);
    }
    SendMsg(e, t, n, r) {
      return new Promise((i, a) => {
        let o = r.eClientExecutionSite;
        if (o == null || o == 0) {
          Z.Error(`SendMsg: Invalid client execution site: ${o}`),
            a(`Transport SendMsg: invalid client execution site ${o}`);
          return;
        }
        let s = this.m_mapConnectionDetails.get(o);
        if (s == null) {
          Z.Error(
            `SendMsg: could not find connection for execution site: ${o}`,
          ),
            a(
              `Transport SendMsg: could not find connection for execution site ${o}`,
            );
          return;
        }
        let c = s.connection;
        if (!c.BCanSendMessages()) {
          let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
          this.m_mapServiceCallErrorCount.set(e, t + 1);
          let n = `SendMsg: Attempt to send message but socket wasn't ready: ${c.name} - ${e}`;
          t == 1 && this.ReportError(n),
            Z.Warning(n + ` error count: ${t}`),
            a(`Transport SendMsg: socket not ready`);
          return;
        }
        let l = this.m_iMsgSeq++;
        t.SetEMsg(146),
          t.Hdr().set_target_job_name(e),
          t.Hdr().set_jobid_source(`` + l);
        let u = t.Serialize();
        if (u.byteLength >= this.m_nMaximumMsgSizeBytes) {
          Z.Error(
            `SendMsg: message exceeds maximum size: ${u.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
          );
          let e = m.Init(n);
          e.Hdr().set_eresult(2), i(e);
          return;
        }
        if (c.SendSerializedMessage(u) != 1) {
          Z.Error(`SendMsg: Failed to send message`),
            a(`Transport SendMsg: failed to send message`);
          return;
        }
        this.m_mapPendingMethodRequests.set(l, {
          m_iSeq: l,
          m_responseClass: n,
          m_fnCallback: i,
          m_fnError: a,
        });
      });
    }
    SendNotification(e, t, n) {
      let r = n.eClientExecutionSite;
      if (r == null || r == 0)
        return (
          Z.Error(`SendNotification: Invalid client execution site: ${r}`), !1
        );
      let i = this.m_mapConnectionDetails.get(r);
      if (i == null)
        return (
          Z.Error(
            `SendNotification: could not find connection for execution site: ${r}`,
          ),
          !1
        );
      let a = i.connection;
      if (!a.BCanSendMessages()) {
        let t = this.m_mapServiceCallErrorCount.get(e) ?? 1;
        this.m_mapServiceCallErrorCount.set(e, t + 1);
        let n = `SendNotification: Attempt to send message but socket wasn't ready: ${a.name} - ${e}`;
        return (
          t == 1 && this.ReportError(n), Z.Warning(n + ` error count: ${t}`), !1
        );
      }
      return (
        t.SetEMsg(146),
        t.Hdr().set_target_job_name(e),
        a.SendSerializedMessage(t.Serialize()) == 1
      );
    }
    async ConnectToSite(e) {
      let t = await e.connection.Connect(e.sUrl);
      return t.result == 1
        ? (await this.SendAuthMessage(e)).BSuccess()
          ? { result: 1, message: `connected` }
          : { result: 2, message: `client auth failed` }
        : t;
    }
    async MakeReady() {
      let e = [];
      for (let [t, n] of this.m_mapConnectionDetails)
        e.push(this.ConnectToSite(n));
      let t = await Promise.all(e);
      (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
      for (let e of t) if (e.result != 1) return e;
      return { result: 1, message: `ready` };
    }
    GetConnectionDetails(e) {
      for (let [t, n] of this.m_mapConnectionDetails)
        if (n.connection === e) return n;
      return (
        Z.Error(`GetConnectionDetails: failed to identify connection`), null
      );
    }
    DispatchTransportStatusUpdate() {
      if (!this.m_fnOnStatusEventHandler) return;
      let e = !0;
      for (let [t, n] of this.m_mapConnectionDetails)
        n.connection.BCanSendMessages() || (e = !1);
      this.m_fnOnStatusEventHandler({ bConnected: e });
    }
    OnWebsocketReconnectStart(e) {
      this.DispatchTransportStatusUpdate();
    }
    OnWebsocketReconnectFinish(e) {
      if ((this.DispatchTransportStatusUpdate(), e.eResult != 1)) {
        Z.Warning(`OnWebsocketReconnect: Failed to reconnect to steam client`),
          this.m_fnOnReconnectErrorHandler?.({});
        return;
      }
      this.FailAllPendingRequests();
      let t = this.GetConnectionDetails(e.connection);
      t && this.SendAuthMessage(t);
    }
    OnWebsocketClose(e) {
      e.bIsExpectedToReconnect || this.FailAllPendingRequests();
    }
    OnWebsocketMessage(e) {
      let t = new l(e),
        n = m.InitHeaderFromPacket(t);
      n.Hdr().jobid_target() &&
      n.Hdr().jobid_target() !== `18446744073709551615`
        ? this.DispatchMethodResponse(n)
        : this.DispatchNotification(n);
    }
    DispatchMethodResponse(e) {
      let t = parseInt(e.Hdr().jobid_target()),
        n = this.m_mapPendingMethodRequests.get(t);
      if (n == null) {
        w(!1, `Transport Error: no pending callback for request`);
        return;
      }
      w(t == n.m_iSeq, `Transport Error: mistmatched request sequence`),
        this.m_mapPendingMethodRequests.delete(t);
      let r = m.InitFromMsg(n.m_responseClass, e);
      n.m_fnCallback(r);
    }
    DispatchNotification(e) {
      this.m_messageHandlers.DispatchMsgToHandlers(e, (e) => {
        w(!1, `Transport Error: A notification should not generate a response`);
      });
    }
    FailAllPendingRequests() {
      for (let [e, t] of this.m_mapPendingMethodRequests) {
        this.ReportError(
          `FailAllPendingRequests: forcing failure for request: ${t.m_responseClass.name}`,
        );
        let e = m.Init(t.m_responseClass);
        e.Hdr().set_eresult(2), t.m_fnCallback(e);
      }
      this.m_mapPendingMethodRequests.clear();
    }
    async SendAuthMessage(e) {
      let t = cu.AuthenticateHandler.name,
        n = { eClientExecutionSite: e.eClientExecutionSite },
        r = m.Init(au);
      return (
        r.Hdr().set_webui_auth_key(e.sAuthKey),
        await this.SendMsg(t, r, cu.AuthenticateHandler.response, n)
      );
    }
    OnStartShutdown(e) {
      for (let [e, t] of this.m_mapConnectionDetails)
        t.connection.PrepareForShutdown();
      return 1;
    }
  };
v([y], du.prototype, `OnWebsocketReconnectStart`, null),
  v([y], du.prototype, `OnWebsocketReconnectFinish`, null),
  v([y], du.prototype, `OnWebsocketClose`, null),
  v([y], du.prototype, `OnWebsocketMessage`, null),
  v([y], du.prototype, `OnStartShutdown`, null);
var fu = new du();
function pu() {
  return u.IN_MOBILE ? oe : ce();
}
function mu(e) {
  if (e === ``) return !1;
  try {
    return RegExp(`\\b(` + e + `)\\b`, `ugi`), !0;
  } catch {
    return (
      console.log(`'${e}' is an invalid expression, removing from text filter`),
      !1
    );
  }
}
var hu = 15,
  gu = 3600,
  _u = `(1)`,
  Q = class {
    m_WebUIServiceTransport;
    m_unAccountID;
    m_Transport = null;
    m_Storage = null;
    m_TextFilterPreferences = { eTextFilterSetting: 3, bIgnoreFriends: !1 };
    m_TextFilterWords;
    m_mapPlayerCache = new Map();
    m_strBannedWords = ``;
    m_strProfanityWords = ``;
    m_strCleanWords = ``;
    m_strBannedPattern = ``;
    m_strCleanPattern = ``;
    m_bWordListsComplete = !1;
    m_bHaveCompleteFilter = !1;
    m_regexBannedWords = null;
    m_regexCleanWords = null;
    m_bShownFilterTip = !1;
    m_bInitialized = !1;
    m_bFilterChangedWhileLoading = !1;
    m_bOngoingLoad = !1;
    m_promiseOngoingLoad = null;
    m_fnUnregisterDictionaryChanged = void 0;
    m_rgUnregisterPlayerNotifications = [];
    m_DataAccess;
    constructor(e) {
      Oe(this);
      let t = new rt();
      (this.m_TextFilterPreferences = {
        eTextFilterSetting: t.text_filter_setting(),
        bIgnoreFriends: t.text_filter_ignore_friends(),
      }),
        (this.m_TextFilterWords = new We()),
        (this.m_DataAccess = e);
    }
    async Init(e = 0, t = null, n = null, r = null) {
      (this.m_bInitialized = !1),
        (this.m_WebUIServiceTransport = fu),
        (this.m_unAccountID = e),
        (this.m_Transport = t),
        (this.m_Storage = n),
        (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        this.InitSteamEngineLanguages(),
        this.RegisterPlayerNotifications(r),
        await this.LoadFilter(),
        await this.LoadTextFilterPreferences(),
        await this.LoadTextFilterWords(),
        await this.RequestUpdatedSettings(),
        (this.m_nLoadLanguagesRetryDelaySec = hu),
        await this.EnsureFiltersLoaded();
    }
    InitSteamEngineLanguages() {
      this.m_WebUIServiceTransport.BIsValid() &&
        (this.m_fnUnregisterDictionaryChanged?.(),
        (this.m_fnUnregisterDictionaryChanged =
          this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
            ru.NotifyTextFilterDictionaryChangedHandler,
            this.OnTextFilterDictionaryChanged,
          ).unregister),
        this.InitSteamEngineLanguage(u.LANGUAGE),
        u.LANGUAGE !== `english` && this.InitSteamEngineLanguage(`english`));
    }
    OnTextFilterDictionaryChanged(e) {
      return (
        !this.m_bInitialized && !this.m_bOngoingLoad
          ? (this.m_bFilterChangedWhileLoading = !0)
          : ((this.m_nLoadLanguagesRetryDelaySec = hu),
            this.EnsureFiltersLoaded()),
        1
      );
    }
    EnsureFiltersLoaded() {
      return this.m_bOngoingLoad && this.m_promiseOngoingLoad
        ? ((this.m_bFilterChangedWhileLoading = !0), this.m_promiseOngoingLoad)
        : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
          this.m_promiseOngoingLoad);
    }
    async InitFiltersWithRetry() {
      this.m_bOngoingLoad = !0;
      try {
        do
          (this.m_bFilterChangedWhileLoading = !1),
            await this.LoadLanguages(),
            this.OnFilterDataChanged(),
            (this.m_bInitialized = !0);
        while (this.m_bFilterChangedWhileLoading);
      } finally {
        (this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null);
      }
    }
    RegisterPlayerNotifications(e) {
      this.m_rgUnregisterPlayerNotifications.forEach((e) => e()),
        (this.m_rgUnregisterPlayerNotifications = []),
        e &&
          this.m_rgUnregisterPlayerNotifications.push(
            e.RegisterServiceNotificationHandler(
              Fe.NotifyCommunityPreferencesChangedHandler,
              (e) => (
                this.UpdateCommunityPreferences(e.Body().preferences()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
            e.RegisterServiceNotificationHandler(
              Fe.NotifyTextFilterWordsChangedHandler,
              (e) => (
                this.UpdateTextFilterWords(e.Body().words()),
                this.OnPlayerSettingsChanged(),
                1
              ),
            ).unregister,
          );
    }
    OnPlayerSettingsChanged() {
      this.m_bInitialized && !this.m_bOngoingLoad && this.OnFilterDataChanged();
    }
    InitSteamEngineLanguage(e) {
      let t = m.Init(Jl);
      t.Body().set_language(e),
        t.Body().set_type(`profanity`),
        ru.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport),
        t.Body().set_type(`banned`),
        ru.SendMsgUpdateTextFilterDictionary(t, this.m_WebUIServiceTransport);
    }
    GetSteamEngineTextFilterDictionary(e, t) {
      let n = m.Init(Yl);
      return (
        n.Body().set_language(e),
        n.Body().set_type(t),
        ru.SendMsgGetTextFilterDictionary(n, this.m_WebUIServiceTransport)
      );
    }
    GetStorageKey(e) {
      return e + `_` + this.m_unAccountID;
    }
    async LoadTextFilterPreferences() {
      if (this.m_Storage) {
        let e = await this.m_Storage.GetObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
        );
        e && (this.m_TextFilterPreferences = e);
      }
    }
    SaveTextFilterPreferences() {
      this.m_Storage &&
        this.m_Storage.StoreObject(
          this.GetStorageKey(`CTextFilterStore_TextFilterPreferences`),
          this.m_TextFilterPreferences,
        );
    }
    ObfuscateString(e) {
      try {
        let t = new TextEncoder().encode(_u + e);
        return ql.fromByteArray(t);
      } catch {
        return ``;
      }
    }
    DeobfuscateString(e) {
      try {
        let t = ql.toByteArray(e),
          n = new TextDecoder().decode(t);
        return n.startsWith(_u)
          ? ((n = n.slice(3)), n)
          : (console.log(
              `DeobfuscateString given invalid base64 data, ignoring: ` + e,
            ),
            ``);
      } catch {
        return ``;
      }
    }
    async LoadObfuscatedString(e) {
      if (this.m_Storage) {
        let t = await this.m_Storage.GetString(this.GetStorageKey(e));
        if (t) return this.DeobfuscateString(t);
      }
      return null;
    }
    async SaveObfuscatedString(e, t) {
      this.m_Storage &&
        this.m_Storage.StoreString(
          this.GetStorageKey(e),
          this.ObfuscateString(t),
        );
    }
    async LoadTextFilterWords() {
      let e = await this.LoadObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
      );
      if (e)
        try {
          this.m_TextFilterWords = We.fromObject(JSON.parse(e));
        } catch {
          console.warn(`Error parsing cached text filter word list`, e),
            (this.m_TextFilterWords = new We());
        }
    }
    SaveTextFilterWords() {
      this.SaveObfuscatedString(
        `CTextFilterStore_TextFilterWords`,
        JSON.stringify(this.m_TextFilterWords.toObject()),
      );
    }
    async LoadFilter() {
      let e = await this.LoadObfuscatedString(
          `CTextFilterStore_strBannedPattern`,
        ),
        t = await this.LoadObfuscatedString(`CTextFilterStore_strCleanPattern`);
      (this.m_bHaveCompleteFilter = e != null && t != null),
        e != null && t != null && this.BRebuildFilter(e, t);
    }
    SaveFilter() {
      this.SaveObfuscatedString(
        `CTextFilterStore_strBannedPattern`,
        this.m_strBannedPattern,
      ),
        this.SaveObfuscatedString(
          `CTextFilterStore_strCleanPattern`,
          this.m_strCleanPattern,
        );
    }
    async RequestUpdatedSettings() {
      let e = new rt();
      if (this.m_unAccountID !== 0)
        try {
          if (this.m_Transport) {
            let t = m.Init(Ye);
            e = (await Xe.GetCommunityPreferences(this.m_Transport, t))
              .Body()
              .preferences();
          } else {
            let t = { sessionid: i(), origin: pu() },
              n = await B.default.get(
                u.COMMUNITY_BASE_URL + `textfilter/ajaxgetcommunitypreferences`,
                { params: t, withCredentials: !0 },
              );
            e = rt.fromObject(n.data.preferences);
          }
        } catch {}
      if (
        (this.UpdateCommunityPreferences(e),
        e.text_filter_words_revision() !==
          this.m_TextFilterWords.text_filter_words_revision())
      ) {
        let t = new We();
        if (e.text_filter_words_revision() !== 0)
          try {
            if (this.m_Transport) {
              let e = m.Init(et);
              t = (await Xe.GetTextFilterWords(this.m_Transport, e))
                .Body()
                .words();
            } else {
              let e = { sessionid: i(), origin: pu() },
                n = await B.default.get(
                  u.COMMUNITY_BASE_URL +
                    `textfilter/ajaxgettextfiltercustomwords`,
                  { params: e, withCredentials: !0 },
                );
              t = We.fromObject(n.data.words);
            }
          } catch {}
        this.UpdateTextFilterWords(t);
      }
    }
    UpdateCommunityPreferences(e) {
      let t = !1;
      e.text_filter_setting() !==
        this.m_TextFilterPreferences?.eTextFilterSetting &&
        ((this.m_TextFilterPreferences.eTextFilterSetting =
          e.text_filter_setting()),
        (t = !0)),
        e.text_filter_ignore_friends() !==
          this.m_TextFilterPreferences.bIgnoreFriends &&
          ((this.m_TextFilterPreferences.bIgnoreFriends =
            e.text_filter_ignore_friends()),
          (t = !0)),
        t && this.SaveTextFilterPreferences();
    }
    get TextFilterPreferences() {
      return this.m_TextFilterPreferences;
    }
    UpdateTextFilterWords(e) {
      (this.m_TextFilterWords = e), this.SaveTextFilterWords();
    }
    m_nLoadLanguagesRetryTimeout = void 0;
    m_nLoadLanguagesRetryDelaySec = hu;
    async LoadLanguages() {
      (this.m_strBannedWords = ``),
        (this.m_strProfanityWords = ``),
        (this.m_strCleanWords = ``),
        (this.m_bWordListsComplete = !1),
        (this.m_nLoadLanguagesRetryTimeout &&=
          (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout), void 0));
      try {
        let e = await this.LoadLanguage(u.LANGUAGE);
        if (
          (u.LANGUAGE !== `english` &&
            (e = (await this.LoadLanguage(`english`)) && e),
          !e)
        )
          throw Error(`clean_public dictionary unavailable`);
        (this.m_nLoadLanguagesRetryDelaySec = hu),
          (this.m_bWordListsComplete = !0);
      } catch (e) {
        this.m_nLoadLanguagesRetryDelaySec = Math.min(
          this.m_nLoadLanguagesRetryDelaySec * 2,
          gu,
        );
        let t = this.m_nLoadLanguagesRetryDelaySec;
        console.warn(`LoadLanguages caught`, e, `retry in`, t, `seconds`),
          (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
            (this.m_nLoadLanguagesRetryTimeout = void 0),
              this.EnsureFiltersLoaded();
          }, t * 1e3));
      }
    }
    async LoadLanguage(e) {
      let t = ``,
        n = !1;
      if (this.m_WebUIServiceTransport.BIsValid())
        try {
          {
            let t = await this.GetSteamEngineTextFilterDictionary(e, `banned`);
            this.m_strBannedWords += t.Body().dictionary();
          }
          {
            let t = await this.GetSteamEngineTextFilterDictionary(
              e,
              `profanity`,
            );
            this.m_strProfanityWords += t.Body().dictionary();
          }
          n = !0;
        } catch (e) {
          console.warn(`LoadLanguage caught while loading from cache:`, e);
        }
      if (!n) {
        t = `${u.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${e}&v=1&origin=${pu()}`;
        {
          let e = await B.default.get(t);
          this.m_strBannedWords += e.data;
        }
        t = `${u.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${e}&v=1&origin=${pu()}`;
        {
          let e = await B.default.get(t);
          this.m_strProfanityWords += e.data;
        }
      }
      let r = this.m_WebUIServiceTransport.BIsValid(),
        i = `CTextFilterStore_strCleanPublic_` + e;
      t = `${u.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${e}&v=1&origin=${pu()}`;
      try {
        let e = await B.default.get(t);
        (this.m_strCleanWords += e.data),
          r && this.SaveObfuscatedString(i, e.data);
      } catch (e) {
        console.warn(`LoadLanguage caught while loading clean list:`, e);
        let t = r ? await this.LoadObfuscatedString(i) : null;
        if (!t) return !1;
        this.m_strCleanWords += t;
      }
      return !0;
    }
    CreatePattern(e) {
      let t = e.filter(function (e) {
        return mu(e);
      });
      return t.length > 0 ? `\\b(` + t.join(`|`) + `)\\b` : ``;
    }
    OnFilterDataChanged() {
      if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter) return;
      let e = new RegExp(/\s*[\r\n]+\s*/g),
        t = [],
        n = [];
      switch (this.m_TextFilterPreferences.eTextFilterSetting) {
        case 0:
          break;
        case 3:
          break;
        case 2:
          t = t.concat(this.m_strBannedWords.split(e));
          break;
        default:
          t = t.concat(
            this.m_strProfanityWords.split(e),
            this.m_strBannedWords.split(e),
          );
      }
      (t = t.concat(this.m_TextFilterWords.text_filter_custom_banned_words())),
        (n = this.m_strCleanWords.split(e)),
        (n = n.concat(this.m_TextFilterWords.text_filter_custom_clean_words()));
      let r = this.CreatePattern(t),
        i = this.CreatePattern(n);
      i != `` && (i = `^(` + i + `)$`),
        this.BRebuildFilter(r, i) &&
          this.m_bWordListsComplete &&
          this.SaveFilter(),
        (this.m_bHaveCompleteFilter = this.m_bWordListsComplete);
    }
    BRebuildFilter(e, t) {
      if (e === this.m_strBannedPattern && t === this.m_strCleanPattern)
        return !1;
      if (
        ((this.m_regexBannedWords = null),
        (this.m_strBannedPattern = e),
        e !== ``)
      )
        try {
          this.m_regexBannedWords = new RegExp(e, `ugi`);
        } catch (e) {
          console.warn(`Couldn't compile textfilter bannedwords regex`),
            p().ReportError(
              Error(`Couldn't compile textfilter bannedwords regex: ${e}`),
            ),
            (this.m_strBannedPattern = ``);
        }
      if (
        ((this.m_regexCleanWords = null),
        (this.m_strCleanPattern = t),
        t !== ``)
      )
        try {
          this.m_regexCleanWords = new RegExp(t, `ugi`);
        } catch (e) {
          console.warn(`Couldn't compile textfilter cleanwords regex`),
            p().ReportError(
              Error(`Couldn't compile textfilter cleanwords regex: ${e}`),
            ),
            (this.m_strCleanPattern = ``);
        }
      return !0;
    }
    CreateProfanityReplacement(e) {
      return `♥`.repeat(e);
    }
    BHasFilter() {
      return this.m_regexBannedWords != null;
    }
    BShownFilterTip() {
      return this.m_bShownFilterTip;
    }
    SetFilterTipShown(e) {
      this.m_bShownFilterTip = e;
    }
    FilterText(e, t) {
      if (!this.m_regexBannedWords) return t;
      let n = 0;
      return (
        typeof e == `string` && e !== ``
          ? (n = new j(e).GetAccountID())
          : typeof e == `number` && (n = e),
        !t ||
        n == this.m_unAccountID ||
        (e &&
          this.m_TextFilterPreferences.bIgnoreFriends &&
          this.m_DataAccess.BIsFriend(n))
          ? t
          : t.replace(this.m_regexBannedWords, (e) =>
              this.m_regexCleanWords && e.search(this.m_regexCleanWords) == 0
                ? e
                : this.CreateProfanityReplacement(e.length),
            )
      );
    }
  };
v([O], Q.prototype, `m_TextFilterPreferences`, void 0),
  v([O], Q.prototype, `m_mapPlayerCache`, void 0),
  v([O], Q.prototype, `m_regexBannedWords`, void 0),
  v([O], Q.prototype, `m_regexCleanWords`, void 0),
  v([O], Q.prototype, `m_bInitialized`, void 0),
  v([O], Q.prototype, `m_bFilterChangedWhileLoading`, void 0),
  v([O], Q.prototype, `m_bOngoingLoad`, void 0),
  v([ct], Q.prototype, `Init`, null),
  v([y], Q.prototype, `OnTextFilterDictionaryChanged`, null),
  v([ct], Q.prototype, `UpdateCommunityPreferences`, null),
  v([ct], Q.prototype, `BRebuildFilter`, null);
var vu;
function yu() {
  if (!vu) {
    let e = new Set(),
      t = { sessionid: i(), origin: pu() };
    B.default
      .get(u.COMMUNITY_BASE_URL + `textfilter/ajaxgetfriendslist`, {
        params: t,
        withCredentials: !0,
      })
      .then((t) => {
        for (let n of t.data.friendslist?.friends ?? [])
          Te(n.efriendrelationship) &&
            e.add(new j(n.ulfriendid).GetAccountID());
      }),
      (vu = (t) => e.has(t));
  }
  return vu;
}
var bu = null,
  xu = !1;
function Su() {
  return (bu ||= new Q({ BIsFriend: yu() })), bu;
}
function Cu() {
  let e = Ge(),
    t = Se(),
    n = fe(() => Su().m_bInitialized);
  return (
    !n &&
      !xu &&
      ((xu = !0), bu.Init(d.accountid, e, t).finally(() => (xu = !1))),
    [n, bu]
  );
}
function wu(e) {
  let t = null;
  return Wo(e) ? (t = ku) : Vo(e) ? (t = Eu) : zu[e] && (t = zu[e]), t;
}
function Tu(e) {
  let { rollup: t, uimode: n, location: r } = e,
    i = wu(t.type);
  return i
    ? (0, z.jsx)(me, {
        controller: `notification`,
        method: ve(n),
        submethod: he(r),
        children: (0, z.jsx)(i, { ...e }),
      })
    : null;
}
function Eu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = zs(t.item.notification_type, t.item.body_data),
    s = Yn(t.type).replace(`k_ESteamNotificationType_`, ``)?.toLowerCase(),
    c = ne(o?.link ?? `#`, s);
  return (0, z.jsx)(`a`, {
    href: o?.link ? c : `#`,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Il, {
      icon: Fl(t.type),
      onActivate: () =>
        n(() => {
          o?.link && c && window.location.assign(c);
        }, t.item),
      fallbackLogo: (0, z.jsx)(k, {}),
      location: r,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Du(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${u.COMMUNITY_BASE_URL}my/gamenotifications/`,
    s = () => n(() => window.location.assign(o), t.item),
    c = (e) => n(() => {}, t.item, e),
    l = Vs(t);
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: c,
    children: (0, z.jsx)(Hl, {
      icon: (0, z.jsx)(k, {}),
      fallbackLogo: (0, z.jsx)(dt, {}),
      onActivate: s,
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Ou(e) {
  let {
      steamid: t,
      url: n,
      strTitleLoc: r,
      strBodyLoc: i,
      rollup: a,
      onNotificationClick: o,
      location: s,
      uimode: c,
      onHide: l,
    } = e,
    { data: u } = tc(t),
    d = (e) => o(() => {}, a.item, e),
    f = () => o(() => window.location.assign(n), a.item);
  if (!i) return null;
  let p = !u,
    m = F(r, u?.m_strPlayerName ?? ``),
    h = F(i, u?.m_strPlayerName ?? ``);
  return (0, z.jsx)(`a`, {
    href: n,
    onMouseDown: d,
    children: (0, z.jsx)(Ul, {
      title: m,
      body: h,
      bDataLoading: p,
      logoUrl: u?.avatar_url_medium,
      icon: (0, z.jsx)(k, {}),
      onActivate: f,
      location: s,
      eUIMode: c,
      timestamp: a.timestamp,
      nUnread: a.rgunread.length,
      bNewIndicator: V(a.item),
      onHide: l,
    }),
  });
}
function ku(e) {
  let t = Bs(e.rollup.type, e.rollup.item.body_data);
  if (!t) return null;
  let { strTitleLoc: n, strBodyLoc: r, strUrl: i, steamid: a } = t;
  return !a || !n || !r
    ? null
    : (0, z.jsx)(Ou, {
        steamid: a,
        url: i,
        strTitleLoc: n,
        strBodyLoc: r,
        ...e,
      });
}
function Au(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = A(),
    s = Vs(t),
    c = `${u.COMMUNITY_BASE_URL}profiles/${o}/tradeoffers`,
    l = () => n(() => window.location.assign(c), t.item),
    d = (e) => n(() => {}, t.item, e),
    { data: f } = tc(j.InitFromAccountID(s).GetAccountID());
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: d,
    children: (0, z.jsx)(Ll, {
      logo: (0, z.jsx)(k, {}),
      icon: (0, z.jsx)(Ne, {}),
      onActivate: l,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      displayName: f?.m_strPlayerName,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
var ju = (e) => {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = `${u.COMMUNITY_BASE_URL}my/tradehistory`;
  return (0, z.jsx)(`a`, {
    href: o,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Rl, {
      logo: (0, z.jsx)(k, {}),
      icon: (0, z.jsx)(Ne, {}),
      onActivate: () => n(() => window.location.assign(o), t.item),
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
};
function Mu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = A(),
    s = `${u.COMMUNITY_BASE_URL}profiles/${o}/inventory/#pending_gifts`,
    c = () => n(() => window.location.assign(s), t.item),
    l = (e) => n(() => {}, t.item, e),
    d = Vs(t),
    { data: f } = tc(j.InitFromAccountID(d).GetAccountID());
  return (0, z.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, z.jsx)(zl, {
      logo: (0, z.jsx)(k, {}),
      icon: (0, z.jsx)(je, {}),
      onActivate: c,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      senderName: f?.m_strPlayerName,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Nu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Vs(t),
    { data: s } = tc(o.responder_steamid),
    c =
      o.package_id > 0
        ? { packageid: o.package_id }
        : { bundleid: o.bundle_id },
    { data: l } = ze(c),
    d = l ? `app/${l.appid}` : ``,
    f = `${u.STORE_BASE_URL}${d}`,
    p = () => n(() => window.location.assign(f), t.item),
    m = (e) => n(() => {}, t.item, e),
    h = !s || !l,
    g = F(`#SteamNotifications_RequestedGameAddedTitle`),
    _ = l ? F(`#SteamNotifications_RequestedGameAddedBody`, l.name ?? ``) : ``;
  return (0, z.jsx)(`a`, {
    href: f,
    onMouseDown: m,
    children: (0, z.jsx)(Ul, {
      title: g,
      body: _,
      bDataLoading: h,
      logoUrl: s?.avatar_url_medium,
      icon: (0, z.jsx)(k, {}),
      onActivate: p,
      location: r,
      eUIMode: i,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Pu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = A(),
    s = Ge(),
    c = as(t.item, o, s),
    l = Vs(t),
    { data: d } = nt(l?.appid ? { appid: l.appid } : void 0),
    f = `${u.COMMUNITY_BASE_URL}profiles/${o}/inventory`;
  return (0, z.jsx)(`a`, {
    href: f,
    onMouseDown: (e) => n(() => {}, t.item, e),
    children: (0, z.jsx)(Vl, {
      appName: d?.name,
      icon: (0, z.jsx)(ge, {}),
      fallbackLogo: (0, z.jsx)(k, {}),
      onActivate: () => n(() => window.location.assign(f), t.item),
      location: r,
      eUIMode: i,
      data: l,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      itemState: c,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Fu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = A(),
    s = `${u.COMMUNITY_BASE_URL}profiles/${o}/friends/pending`,
    c = () => n(() => window.location.assign(s), t.item),
    l = (e) => n(() => {}, t.item, e),
    d = Vs(t),
    { data: f } = tc(d.requestorID);
  return (0, z.jsx)(`a`, {
    href: s,
    onMouseDown: l,
    children: (0, z.jsx)(Bl, {
      fallbackLogo: (0, z.jsx)(ke, {}),
      icon: (0, z.jsx)(Ee, {}),
      onActivate: c,
      location: r,
      eUIMode: i,
      data: d,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      requestorAvatarURL: f?.avatar_url_medium,
      requestorName: f?.m_strPlayerName,
      bNewIndicator: V(t.item),
      onHide: a,
    }),
  });
}
function Iu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Vs(t),
    s = A(),
    c = u.COMMUNITY_BASE_URL + t.url,
    l = () => n(() => window.location.assign(c), t.item),
    d = (e) => {
      n(() => {}, t.item, e);
    },
    { data: f } = tc(us(o) ? o?.account_steam_id?.GetAccountID() : null),
    { data: p } = tc(ds(o) ? o?.owner_steam_id?.GetAccountID() : null),
    m = o.json_data?.app_id ? { appid: o.json_data?.app_id } : void 0,
    { data: h } = nt(m),
    [g, _] = Cu(),
    v = g ? _.FilterText(o.account_steam_id.GetAccountID(), o.title) : ``,
    y = g ? _.FilterText(o.account_steam_id.GetAccountID(), o.comment) : ``;
  return (0, z.jsx)(`a`, {
    href: c,
    onMouseDown: d,
    children: (0, z.jsx)(Wl, {
      fallbackLogo: (0, z.jsx)(k, {}),
      icon: (0, z.jsx)(Ae, {}),
      onActivate: l,
      location: r,
      currentUserSteamID: s,
      eUIMode: i,
      data: o,
      timestamp: t.timestamp,
      nUnread: t.rgunread.length,
      postedByAvatarURL: f?.avatar_url_medium,
      postedByDisplayName: f?.m_strPlayerName,
      ownerDisplayName: p?.m_strPlayerName,
      bNewIndicator: V(t.item),
      appName: h?.name,
      onHide: a,
      commentTitle: v,
      commentBody: y,
      bLoading: !g,
    }),
  });
}
function Lu(e) {
  let {
      rollup: t,
      onNotificationClick: n,
      location: r,
      uimode: i,
      onHide: a,
    } = e,
    o = Vs(t),
    { data: s } = nt({ appid: o.appid }),
    [c, l] = (0, I.useState)(``),
    d = A();
  return (
    (0, I.useEffect)(() => {
      if (o.count > 1 && o.appids?.length)
        return l(
          u.STORE_BASE_URL +
            `wishlist/profiles/${d}/?wng=${o.appids.toString()}#sort=discount`,
        );
      if (s) return l(u.STORE_BASE_URL + s.store_url_path);
      let e = o.appid ? `?appid=${o.appid}` : ``;
      l(u.STORE_BASE_URL + `wishlist/profiles/${d}/${e}#sort=discount`);
    }, [o, s, d]),
    (0, z.jsx)(`a`, {
      href: c,
      onMouseDown: (e) => n(() => {}, t.item, e),
      children: (0, z.jsx)(Gl, {
        fallbackLogo: (0, z.jsx)(k, {}),
        icon: (0, z.jsx)(ye, {}),
        onActivate: () => n(() => window.location.assign(c), t.item),
        location: r,
        data: o,
        timestamp: t.timestamp,
        nUnread: t.rgunread.length,
        eUIMode: i,
        bNewIndicator: V(t.item),
        onHide: a,
      }),
    })
  );
}
function Ru(e) {
  let { url: t, count: n, icon: r, strBody: i, eFeature: a } = e,
    o = Jn(a);
  return !n || o
    ? null
    : (0, z.jsx)(`a`, {
        href: t,
        className: Hs,
        children: (0, z.jsx)(Pc, {
          icon: (0, z.jsx)(r, {}),
          count: n,
          onActivate: () => window.location.assign(t),
          strBody: i,
          eUIMode: 3,
          visible: !0,
        }),
      });
}
var zu = { 3: Iu, 8: Lu, 5: Fu, 4: Pu, 2: Mu, 9: Au, 12: Du, 22: Nu, 29: ju },
  Bu = class e extends I.Component {
    static GetScrollableClassname() {
      return `vt-scrollable`;
    }
    m_observer = null;
    m_refElement = I.createRef();
    m_elTracked = null;
    m_bPreviouslyIntersecting = !1;
    BTriggerOnce() {
      return (this.props.trigger || `once`) == `once`;
    }
    GetBoundingClientRect() {
      return this.m_refElement.current
        ? this.m_refElement.current.getBoundingClientRect()
        : null;
    }
    DestroyObserver() {
      this.m_observer &&
        (this.m_observer.disconnect(),
        (this.m_observer = null),
        (this.m_elTracked = null));
    }
    componentWillUnmount() {
      this.DestroyObserver();
    }
    componentDidMount() {
      this.UpdateObserver(null);
    }
    componentDidUpdate(e) {
      this.UpdateObserver(e);
    }
    UpdateObserver(e) {
      if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
      this.m_observer &&
        e &&
        (e.rootMargin != this.m_observer.rootMargin ||
          e.thresholds != this.m_observer.thresholds) &&
        this.DestroyObserver();
      let t = this.m_refElement.current;
      if (
        (this.m_observer &&
          t != this.m_elTracked &&
          (this.m_elTracked && this.m_observer.unobserve(this.m_elTracked),
          (this.m_elTracked = null)),
        !this.m_observer && t)
      ) {
        let e = { root: this.FindScrollableAncestor(t) };
        this.props.rootMargin && (e.rootMargin = this.props.rootMargin),
          this.props.thresholds && (e.threshold = this.props.thresholds),
          (this.m_observer = at(t, this.OnIntersection, e));
      }
      this.m_observer &&
        t &&
        t != this.m_elTracked &&
        (this.m_observer.observe(t), (this.m_elTracked = t));
    }
    FindScrollableAncestor(t) {
      return a(t, (t) => {
        let n = this.props.horizontal
          ? window.getComputedStyle(t).overflowX
          : window.getComputedStyle(t).overflowY;
        return !!(
          n == `scroll` ||
          n == `auto` ||
          t.classList.contains(e.GetScrollableClassname())
        );
      });
    }
    HandleRef = (e) => {
      ee(this.m_refElement, e),
        this.props.containerRef && ee(this.props.containerRef, e);
    };
    OnIntersection = (e) => {
      let t = !1;
      for (let n of e)
        if (n.isIntersecting) {
          t = !0;
          break;
        }
      this.m_bPreviouslyIntersecting != t &&
        ((this.m_bPreviouslyIntersecting = t),
        this.props.onVisibilityChange && this.props.onVisibilityChange(t),
        t && this.BTriggerOnce() && this.DestroyObserver());
    };
    render() {
      let {
        onVisibilityChange: e,
        rootMargin: t,
        trigger: n,
        horizontal: r,
        containerRef: i,
        ...a
      } = this.props;
      return (0, z.jsx)(M, {
        ref: this.HandleRef,
        ...a,
        children: this.props.children,
      });
    }
  },
  $ = new $o(),
  Vu = le(function (e) {
    let { bResponsiveHeader: t, notifications: n } = e;
    I.useEffect(() => {
      n && !$.m_bLoaded && $.ProcessNewNotificationPayload(n);
    }, [n]);
    let r = Ge();
    (0, I.useEffect)(() => {
      $.setTransport(r), (window.RefreshSteamNotifications = () => $u(r));
    }, [r]);
    let i = Hu();
    return t
      ? (0, z.jsxs)(z.Fragment, {
          children: [(0, z.jsx)(Zu, {}), (0, z.jsx)(qu, {})],
        })
      : (0, z.jsx)(Wu, { nTotalUnviewed: i.nUnviewed });
  });
function Hu() {
  return fe(() => ({
    notifications: $.m_rgNotificationRollups,
    summary: $.m_summary,
    loaded: $.m_bLoaded,
    nUnviewed: $.m_nUnviewed,
  }));
}
function Uu() {
  let e = Hu(),
    { data: t } = Un(A()),
    n = Kn(),
    r = t?.settings;
  return e.notifications.filter((e) => !ys(e.type, r, n) && !xs(e.item));
}
function Wu(e) {
  let { nTotalUnviewed: t } = e,
    n = I.useRef(null),
    r = Uu(),
    [i, a] = I.useState(Ps);
  I.useEffect(() => {
    n.current ||
      ((n.current = be(
        (0, z.jsx)(Gu, { popupRef: n }),
        document.getElementById(`green_envelope_menu_root`),
        {
          bPreferPopLeft: !0,
          bOverlapHorizontal: !0,
          strClassName: `GreenEnvelopeMenu`,
        },
      )),
      n.current.Hide());
    let e = document.getElementById(`header_notification_link`);
    e && (e.style.cssText = `background-color: rgba(0,0,0,0)`),
      window.setTimeout(() => a(null), 2e3);
  }, []);
  let o = () => {
      n.current?.visible ||
        (n.current?.Show(),
        r.findIndex((e) => !e.item.viewed) != -1 && $.MarkAllItemsViewed());
    },
    s = I.useCallback(
      (e) => {
        !e && n.current?.visible && n.current.Hide();
      },
      [n],
    );
  return (0, z.jsx)(Bu, {
    trigger: `repeated`,
    onVisibilityChange: s,
    children: (0, z.jsx)(`button`, {
      onClick: o,
      id: `green_envelope_menu_root`,
      className: N(As, t ? Ns : Ms, i),
      children: (0, z.jsx)(we, {
        className: js,
        "aria-label": F(`#NotificationsMenu_Title`),
      }),
    }),
  });
}
var Gu = (e) => {
    let { popupRef: t } = e,
      n = I.useRef(null),
      [r, i] = I.useState(!1);
    I.useEffect(() => {
      i(n.current != null && n.current?.scrollHeight > n.current?.clientHeight);
    }, [n.current?.scrollHeight, r]);
    let a = r ? void 0 : Ts;
    return (0, z.jsxs)(`div`, {
      className: Ss,
      onClick: () => t?.current?.Hide(),
      children: [
        (0, z.jsx)(Ku, {}),
        (0, z.jsxs)(`div`, {
          className: N(ws, a),
          ref: n,
          children: [
            (0, z.jsx)(Zu, {}),
            (0, z.jsx)(Yu, {}),
            (0, z.jsx)(Qu, {}),
          ],
        }),
      ],
    });
  },
  Ku = () => {
    let e = `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/notifications`;
    return (0, z.jsxs)(`div`, {
      className: N(Es),
      children: [
        (0, z.jsx)(`div`, {
          className: Os,
          children: F(`#NotificationsMenu_Title`),
        }),
        (0, z.jsx)(`a`, {
          href: e,
          children: (0, z.jsx)(`div`, {
            className: ks,
            children: F(`#NotificationsMenu_ViewAll`),
          }),
        }),
      ],
    });
  },
  qu = () => {
    let e = `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/notifications`;
    return (0, z.jsx)(`div`, {
      className: N(Es, Ds),
      children: (0, z.jsx)(`a`, {
        href: e,
        children: (0, z.jsx)(`div`, {
          className: ks,
          children: F(`#NotificationsMenu_ViewAll`),
        }),
      }),
    });
  };
function Ju(e, t, n) {
  !t.read &&
    (!n || n.button == 0 || n.button == 1) &&
    t.notification_id &&
    $.MarkItemRead(t.notification_id),
    e();
}
function Yu() {
  let e = Uu();
  return e.length == 0
    ? null
    : (0, z.jsx)(`div`, {
        className: Cs,
        children: e.map((e, t) =>
          (0, z.jsx)(
            Tu,
            { rollup: e, onNotificationClick: Ju, uimode: 3, location: 3 },
            t,
          ),
        ),
      });
}
var Xu = [
  {
    fnUrl: () =>
      `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/inventory/#pending_gifts`,
    countItem: `pending_gifts`,
    icon: je,
    fnLocalizeBody: (e) => P(`#Notification_NewGiftsPinned_Body`, e),
    feature: 1,
  },
  {
    fnUrl: () => `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/home/invites`,
    countItem: `pending_invites`,
    icon: Ee,
    fnLocalizeBody: (e) => P(`#Notification_FriendInvitePinned_Body`, e),
    feature: 4,
  },
  {
    fnUrl: () =>
      `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/notifications#comments`,
    countItem: `comments`,
    icon: Ae,
    fnLocalizeBody: (e) => P(`#Notification_NewCommentPinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/inventory`,
    countItem: `inventory_items`,
    icon: ge,
    fnLocalizeBody: (e) => P(`#Notification_NewItemAnnouncementPinned_Body`, e),
    feature: 3,
  },
  {
    fnUrl: () => `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/tradeoffers`,
    countItem: `trade_offers`,
    icon: Ne,
    fnLocalizeBody: (e) => P(`#Notification_NewTradeOffersPinned_Body`, e),
    feature: 6,
  },
  {
    fnUrl: () =>
      `${u.COMMUNITY_BASE_URL}profiles/${d.steamid}/gamenotifications`,
    countItem: `async_game_updates`,
    icon: dt,
    fnLocalizeBody: (e) => P(`#Notification_NewAsyncGamePinned_Body`, e),
  },
  {
    fnUrl: () => `${u.COMMUNITY_BASE_URL}my/moderatormessages`,
    countItem: `moderator_messages`,
    icon: Ce,
    fnLocalizeBody: (e) => P(`#Notification_NewModeratorMessagePinned_Body`, e),
    feature: 2,
  },
  {
    fnUrl: () => `${u.HELP_BASE_URL}wizard/HelpRequests`,
    countItem: `help_request_replies`,
    icon: $e,
    fnLocalizeBody: (e) =>
      P(`#Notification_NewHelpRequestRepliesPinned_Body`, e),
  },
  {
    fnUrl: () =>
      `${u.STORE_BASE_URL}account/familymanagement/join?ft=${d.steamid}`,
    countItem: `family_invites`,
    icon: k,
    fnLocalizeBody: (e) => P(`#Notification_FamilyInvitePinned_Body`, e),
  },
];
function Zu() {
  let e = Hu();
  return (0, z.jsx)(z.Fragment, {
    children: Xu.map((t) =>
      (0, z.jsx)(
        Ru,
        {
          url: t.fnUrl(),
          count: e.summary[t.countItem],
          icon: t.icon,
          strBody: t.fnLocalizeBody(e.summary[t.countItem]),
          eFeature: t.feature,
        },
        t.countItem,
      ),
    ),
  });
}
function Qu() {
  return (0, z.jsxs)(`div`, {
    className: Fs,
    children: [
      (0, z.jsx)(`div`, {
        className: Is,
        children: F(`#NotificationsList_EmptyTitle_New`),
      }),
      (0, z.jsx)(`div`, {
        className: Ls,
        children: F(`#NotificationsList_EmptyBody`),
      }),
    ],
  });
}
async function $u(e) {
  let t = null;
  try {
    t = await ts(e, d.steamid, xe(u.LANGUAGE), void 0, !1, !1);
  } catch {}
  t && $.ProcessNewNotificationPayload(t);
}
export { Vu as GreenEnvelope, Vu as default, Hu as useSteamNotifications };
