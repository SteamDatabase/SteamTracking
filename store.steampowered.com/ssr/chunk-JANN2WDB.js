const CLSTAMP = 9664229;

import { a as n } from "./chunk-OQWIU5TE.js";
import {
  B as T,
  C as w,
  D as A,
  q as C,
  r as S,
  w as d,
  x as h,
} from "./chunk-7JS6PCN7.js";
import { i as D, v as L, x as Q, z as b } from "./chunk-HH2FIFPI.js";
import { H as y } from "./chunk-WBIJKKLO.js";
import { f as m } from "./chunk-4USLEHUX.js";
import { b as p, g as f, w as g } from "./chunk-ODJGBEIP.js";
function j(e, t, s, I) {
  let c = h(),
    _ = y(),
    u = p(),
    { storeBrowseContext: R, dataLoader: l } = D(),
    { country: z } = R,
    Y = g(I);
  return f({
    mutationFn: async () => {
      if (!e && !t) throw "nPackageID or nBundleID must be passed.";
      let i;
      if (C(c)) {
        let [o, r] = await w(_, z, e, t, s, Y);
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
function W(e) {
  return e?.is_coming_soon
    ? v(
        e.coming_soon_display,
        e.steam_release_date,
        e.custom_release_date_message,
      )
    : e?.steam_release_date
      ? x(e.steam_release_date)
      : "";
}
function v(e, t, s) {
  switch (e) {
    case "date_full":
      return x(t);
    case "date_month":
      return O(new Date(t * 1e3));
    case "date_quarter":
      return U(new Date(t * 1e3));
    case "date_year":
      return F(new Date(t * 1e3));
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
function F(e) {
  return e.toLocaleDateString(m(), { year: "numeric" });
}
function O(e) {
  return e.toLocaleDateString(m(), { month: "long", year: "numeric" });
}
function U(e) {
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
export { j as a, W as b };
