const CLSTAMP = 9437282;

import {
  B as T,
  C as w,
  D as A,
  q as C,
  r as S,
  w as d,
  x as h,
} from "./chunk-O5N7U2SO.js";
import { a as n } from "./chunk-B6EXSVU6.js";
import { h as D, t as L, v as Q, w as b } from "./chunk-67YTJS3R.js";
import { G as y } from "./chunk-NN4RZIIE.js";
import { d as m } from "./chunk-KO2VKCP7.js";
import { b as p, f, v as g } from "./chunk-J73K3DL5.js";
function $(e, t, s) {
  let c = h(),
    _ = y(),
    u = p(),
    { storeBrowseContext: I, dataLoader: l } = D(),
    { country: R } = I,
    z = g();
  return f({
    mutationFn: async () => {
      if (!e && !t) throw "nPackageID or nBundleID must be passed.";
      let i;
      if (C(c)) {
        let [o, r] = await w(_, R, e, t, s, z);
        if (o == 1) (i = r.line_item_ids), d(u, c, r.cart);
        else throw `AddToAccountCart failed with ${o}`;
      } else if (S(c)) {
        let [o, r] = await T(_, e ? [e] : void 0, t, s);
        if (o == 1 && r)
          (i =
            (e
              ? r.lineitems?.filter(
                  (a) =>
                    a.package_item &&
                    a.package_item.packageid == e &&
                    !a.package_item.gidbundle,
                )
              : r.lineitems?.filter(
                  (a) => a.bundle_item && a.bundle_item.bundleid == t,
                )
            )?.map((a) => a.gidlineitem) || []),
            d(u, c, A(r));
        else throw `AddItemsToAnonymousCart failed with ${o}`;
      } else throw "Invalid cart type";
      return i;
    },
    onMutate: () => {
      let i = e ? { packageid: e } : { bundleid: t };
      (async () => {
        let o = await u.fetchQuery(b(l, i)),
          r =
            o?.included_appids?.length == 1
              ? { appid: o.included_appids[0] }
              : i;
        u.prefetchQuery(L(l, r)), u.prefetchQuery(Q(l, r));
      })();
    },
  });
}
function V(e) {
  return e?.is_coming_soon
    ? Y(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? x(e.steam_release_date)
      : "";
}
function Y(e, t, s) {
  switch (e) {
    case "date_full":
      return x(t);
    case "date_month":
      return F(new Date(t * 1e3));
    case "date_quarter":
      return O(new Date(t * 1e3));
    case "date_year":
      return v(new Date(t * 1e3));
    case "text_comingsoon":
      return s || n.Localize("#Store_ComingSoon_ComingSoon");
    case "text_tba":
      return s || n.Localize("#Store_ComingSoon_TBA");
    default:
      return "";
  }
}
function x(e) {
  return new Date(e * 1e3).toLocaleDateString(m());
}
function v(e) {
  return e.toLocaleDateString(m(), { year: "numeric" });
}
function F(e) {
  return e.toLocaleDateString(m(), { month: "long", year: "numeric" });
}
function O(e) {
  switch (e.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return n.Localize("#Time_QuarterOfYear_Q1", e.getUTCFullYear());
    case 3:
    case 4:
    case 5:
      return n.Localize("#Time_QuarterOfYear_Q2", e.getUTCFullYear());
    case 6:
    case 7:
    case 8:
      return n.Localize("#Time_QuarterOfYear_Q3", e.getUTCFullYear());
    case 9:
    case 10:
    case 11:
    default:
      return n.Localize("#Time_QuarterOfYear_Q4", e.getUTCFullYear());
  }
}
export { $ as a, V as b };
