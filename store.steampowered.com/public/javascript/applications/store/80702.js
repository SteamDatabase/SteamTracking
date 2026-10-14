/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [80702],
    {
      86722: (w, N, t) => {
        "use strict";
        t.d(N, { Pm: () => h, d$: () => i, tB: () => T });
        var e = t(7850),
          n = t(24660),
          E = t(72609),
          o = t(43434),
          f = t(83482),
          g = t(71421),
          x = t(53113);
        function C(a) {
          const s = a?.jsondata?.read_more_link;
          if (!s) return;
          const r = (0, x.wm)(s).toLocaleLowerCase();
          return r ? [r] : void 0;
        }
        function v(a, s) {
          return (0, o.p)(a, C(s));
        }
        function T(a, s) {
          if (!a) return "";
          if (!(0, o.p)(a)) return (0, x.NT)(a);
          const r = v(a, s) ? (0, o.E)(a) : a;
          return (E.TS.IN_CLIENT ? "steam://openurl_external/" : "") + r;
        }
        function h(a, s, r) {
          const m = a.toLowerCase().startsWith("http") ? a : "http://" + a;
          return (0, e.jsx)(i, { url: m, event: s, children: r || a });
        }
        const i = (a) => {
          const { url: s, event: r, className: m, style: S } = a;
          let M = (0, f.OZ)(s);
          M = T(M, r);
          const I = (0, o.p)(M) ? "noopener nofollow" : void 0,
            L =
              typeof a.children == "string" &&
              a.children.length > 0 &&
              s &&
              !s.startsWith("steam://")
                ? (0, x.Qz)(s)
                : void 0;
          return (0, e.jsx)(g.Gq, {
            toolTipContent: L,
            direction: "top",
            children: (0, e.jsx)(n.Ii, {
              className: m,
              href: M,
              rel: I,
              id: a.id,
              style: S,
              children: a.children,
            }),
          });
        };
      },
      91405: (w, N, t) => {
        "use strict";
        t.d(N, { A: () => a, w: () => s });
        var e = t(72604),
          n = t(80411),
          E = t(68312),
          o = t(5827),
          f = t(40358),
          g = t(72865),
          x = t(75233),
          C = t(51614),
          v = t(48366),
          T = t(9843),
          h = t(78280),
          i = t(83665);
        function a(r, m, S, M, I) {
          return s(
            [{ packageid: r, bundleid: m, bIsGift: S, nAccountIDGiftee: M }],
            I,
          );
        }
        function s(r, m) {
          const S = (0, h.j4)(),
            M = (0, E.KV)(),
            I = (0, x.jE)(),
            { storeBrowseContext: L, dataLoader: F } = (0, o.yn)(),
            { country: J } = L,
            H = (0, g.Gd)(m);
          return (0, C.n)({
            mutationFn: async () => {
              if (r.length == 0 || !r.every((k) => k.packageid || k.bundleid))
                throw "Every item must have a valid package or bundle id";
              let $;
              if ((0, v.c2)(S)) {
                const [k, Z] = await (0, T.ce)(M, J, r, H);
                if (k == e.R) ($ = Z.line_item_ids), (0, i.LN)(I, S, Z.cart);
                else throw `AddItemsToAccountCart failed with ${k}`;
              } else if ((0, v.kx)(S)) {
                const k = r.map((ne) => ne.packageid).filter(n.z),
                  Z = r.map((ne) => ne.bundleid).filter(n.z);
                if (Z.length > 1)
                  throw "The anonymous cart can only take one bundle per call";
                const [U, X] = await (0, T.SI)(
                  M,
                  k.length > 0 ? k : void 0,
                  Z[0],
                  r.some((ne) => ne.bIsGift),
                  r.find((ne) => ne.nAccountIDGiftee)?.nAccountIDGiftee,
                );
                if (U == e.R && X) {
                  const ne = new Set(k),
                    O = new Set(Z);
                  ($ =
                    X.lineitems
                      ?.filter(
                        (q) =>
                          (q.package_item &&
                            !q.package_item.gidbundle &&
                            ne.has(q.package_item.packageid)) ||
                          (q.bundle_item && O.has(q.bundle_item.bundleid)),
                      )
                      ?.map((q) => q.gidlineitem) || []),
                    (0, i.LN)(I, S, (0, T.qS)(X));
                } else throw `AddItemsToAnonymousCart failed with ${U}`;
              } else throw "Invalid cart type";
              return $;
            },
            onMutate: () => {
              (async () => {
                const $ = r.map((Z) =>
                  Z.packageid
                    ? { packageid: Z.packageid }
                    : { bundleid: Z.bundleid },
                );
                (
                  await Promise.all($.map((Z) => I.fetchQuery((0, f.us)(F, Z))))
                ).forEach((Z, U) => {
                  const X =
                    Z?.included_appids?.length == 1
                      ? { appid: Z.included_appids[0] }
                      : $[U];
                  I.prefetchQuery((0, f.AQ)(F, X)),
                    I.prefetchQuery((0, f.rK)(F, X));
                });
              })();
            },
          });
        }
      },
      55483: (w, N, t) => {
        "use strict";
        t.d(N, {
          yT: () => r,
          MR: () => l,
          AB: () => y,
          Rc: () => B,
          Gt: () => z,
          ko: () => q,
          fy: () => b,
          ec: () => $,
          aA: () => J,
          TB: () => H,
          W$: () => O,
        });
        var e = t(99412),
          n = t(76559),
          E = t(75233),
          o = t(80902),
          f = t(72604),
          g = t(72609);
        async function x(c) {
          const u = `${g.TS.COMMUNITY_BASE_URL}ogg/${c}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return h(u);
        }
        async function C(c) {
          const u = n.b.InitFromClanID(c),
            A = `${g.TS.COMMUNITY_BASE_URL}gid/${u.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return h(A);
        }
        async function v(c) {
          const u = `${g.TS.COMMUNITY_BASE_URL}groups/${c}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return h(u);
        }
        async function T(c) {
          const u = `${g.TS.COMMUNITY_BASE_URL}games/${c}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return h(u);
        }
        async function h(c) {
          const u = await fetch(c, { method: "GET" });
          if (u.status == 404) return null;
          if (!u.ok) throw new Error(`Server returned ${u.status}`);
          const A = await u.json();
          return A.success != f.R ? null : A;
        }
        function i(c) {
          return ["clantoclaninfo", c];
        }
        function a(c) {
          return ["apptoclanid", c];
        }
        function s(c, u = "group") {
          return ["vanitytoclanid", u, c?.toLocaleLowerCase()];
        }
        function r(c) {
          const u = c?.[0];
          return (
            u == "clantoclaninfo" || u == "apptoclanid" || u == "vanitytoclanid"
          );
        }
        const m = new WeakSet();
        function S(c) {
          if (!m.has(c)) {
            m.add(c);
            for (const u of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              c.setQueryDefaults(u, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const M = new WeakMap();
        function I(c) {
          if (!c) return null;
          let u = M.get(c);
          return (
            u ||
              ((u = {
                ...c,
                clanSteamID: c.clanSteamIDString
                  ? new n.b(c.clanSteamIDString)
                  : n.b.InitFromClanID(c.clanAccountID),
              }),
              M.set(c, u)),
            u
          );
        }
        function L(c) {
          const { msg: u, success: A, ...j } = c;
          return {
            ...j,
            rss_language: c.rss_language ? c.rss_language : e.Bhc,
          };
        }
        function F(c, u) {
          if (!u) return null;
          S(c);
          const A = L(u);
          return (
            c.setQueryData(i(A.clanAccountID), A),
            A.appid && c.setQueryData(a(A.appid), A.clanAccountID),
            A.vanity_url &&
              c.setQueryData(s(A.vanity_url, "group"), A.clanAccountID),
            A
          );
        }
        function J(c, u) {
          for (const A of u) F(c, A);
        }
        function H(c) {
          const u = (0, E.jE)();
          return (0, o.I)($(c, u));
        }
        function $(c, u) {
          return (
            S(u),
            {
              queryKey: i(c ?? null),
              queryFn: async () => (c ? F(u, await C(c)) : null),
              enabled: c !== void 0,
              select: I,
            }
          );
        }
        function k(c, u) {
          return (
            S(u),
            {
              queryKey: a(c),
              queryFn: async () => F(u, await x(c))?.clanAccountID ?? null,
              enabled: !!c,
            }
          );
        }
        function Z(c, u, A = "group") {
          return (
            S(u),
            {
              queryKey: s(c, A),
              queryFn: async () => {
                if (A == "store") {
                  const D = u.getQueryData(s(c, "group"));
                  if (D) return D;
                }
                const j = A == "store" ? await T(c) : await v(c);
                return F(u, j)?.clanAccountID ?? null;
              },
              enabled: !!c,
            }
          );
        }
        function U(c) {
          return c.isPending ? void 0 : (c.data ?? null);
        }
        function X(c) {
          return H(c.BIsClanAccount() ? c.GetAccountID() : void 0);
        }
        function ne(c) {
          const u = useQueryClient(),
            A = useQuery(k(c, u));
          return H(c ? U(A) : void 0);
        }
        function O(c, u = "group") {
          const A = (0, E.jE)(),
            j = (0, o.I)(Z(c, A, u));
          return H(c ? U(j) : void 0);
        }
        function z(c, u) {
          if (c) return I(u.getQueryData(i(c))) ?? void 0;
        }
        function q(c, u) {
          if (c) return z(u.getQueryData(a(c)), u);
        }
        function b(c, u, A) {
          if (!c) return;
          const j = A ? [A] : ["store", "group"];
          for (const D of j) {
            const p = z(u.getQueryData(s(c, D)), u);
            if (p) return p;
          }
        }
        async function l(c, u) {
          return c ? I(await u.fetchQuery($(c, u))) : null;
        }
        async function y(c, u) {
          return c ? l(await u.fetchQuery(k(c, u)), u) : null;
        }
        async function B(c, u, A = "group") {
          return c ? l(await u.fetchQuery(Z(c, u, A)), u) : null;
        }
      },
      10985: (w, N, t) => {
        "use strict";
        t.d(N, { LO: () => C, A5: () => f });
        var e = t(80902),
          n = t(72604),
          E = t(72609);
        async function o(v) {
          let T = { get_appids: !0, l: E.TS.LANGUAGE };
          const h = new URLSearchParams(T).toString(),
            i = `${E.TS.STORE_BASE_URL}curator/${v}/ajaxgetcreatorhomeinfo/?${h}`,
            a = await fetch(i, { method: "GET" });
          if (!a.ok) throw new Error(`Server returned ${a.status}`);
          const s = await a.json();
          return s.success != n.R ? null : s;
        }
        function f(v) {
          return (0, e.I)(g(v));
        }
        function g(v) {
          return {
            queryKey: x(v),
            queryFn: async () => {
              const T = await o(v);
              if (T) {
                const {
                  success: h,
                  err_msg: i,
                  warning: a,
                  warning_msg: s,
                  ...r
                } = T;
                return r;
              }
              return null;
            },
            enabled: !!v,
          };
        }
        function x(v) {
          return ["creatorhomebyaccount", v];
        }
        function C(v, T) {
          if (v.vanity) {
            switch (T) {
              case "publisher":
                return `${E.TS.STORE_BASE_URL}publisher/${v.vanity}/`;
              case "franchise":
                return `${E.TS.STORE_BASE_URL}franchise/${v.vanity}/`;
            }
            return `${E.TS.STORE_BASE_URL}developer/${v.vanity}/`;
          }
          return `${E.TS.STORE_BASE_URL}curator/${v.creator_clan_id}/`;
        }
      },
      86681: (w, N, t) => {
        "use strict";
        t.d(N, { J: () => o });
        var e = t(34104);
        const n = {
            [e.rg]: {},
            [e.CS]: { strSymbol: "$" },
            [e.dz]: { strSymbol: "\xA3" },
            [e.a4]: {
              strSymbol: "\u20AC",
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.ln]: { strSymbol: "CHF" },
            [e.Fq]: {
              strSymbol: "\u0440\u0443\u0431.",
              bSuffixSymbol: !0,
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: "",
            },
            [e.sY]: {
              strSymbol: "z\u0142",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.iU]: {
              strSymbol: "R$",
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.xm]: {
              strSymbol: "\xA5",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
            },
            [e.KE]: {
              strSymbol: "kr",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.DP]: {
              strSymbol: "Rp",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ".",
              strThousandsSeparator: " ",
            },
            [e.Jw]: { strSymbol: "RM" },
            [e.En]: { strSymbol: "P" },
            [e.wA]: { strSymbol: "S$" },
            [e.cm]: { strSymbol: "\u0E3F" },
            [e.aQ]: {
              strSymbol: "\u20AB",
              bWholeUnitsOnly: !0,
              bSuffixSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.yR]: {
              strSymbol: "\u20A9",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
            },
            [e.bj]: {
              strSymbol: "TL",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.SJ]: {
              strSymbol: "\u20B4",
              bSuffixSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.ds]: { strSymbol: "Mex$", bSpaceForSymbol: !0 },
            [e.cX]: { strSymbol: "CDN$", bSpaceForSymbol: !0 },
            [e.m1]: { strSymbol: "A$", bSpaceForSymbol: !0 },
            [e.WS]: { strSymbol: "NZ$", bSpaceForSymbol: !0 },
            [e.C6]: { strSymbol: "\xA5", bSpaceForSymbol: !0 },
            [e.T_]: {
              strSymbol: "\u20B9",
              bSpaceForSymbol: !0,
              bWholeUnitsOnly: !0,
            },
            [e.D5]: {
              strSymbol: "CLP$",
              bSpaceForSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.D4]: { strSymbol: "S/." },
            [e.G1]: {
              strSymbol: "COL$",
              bSpaceForSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.de]: {
              strSymbol: "R",
              bSpaceForSymbol: !0,
              strDecimalSymbol: ".",
              strThousandsSeparator: " ",
            },
            [e.bO]: { strSymbol: "HK$", bSpaceForSymbol: !0 },
            [e.Jb]: {
              strSymbol: "NT$",
              bWholeUnitsOnly: !0,
              bSpaceForSymbol: !0,
            },
            [e.CR]: { strSymbol: "SR", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.Cv]: {
              strSymbol: "AED",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.JW]: { strSymbol: "kr", bSpaceForSymbol: !0, bSuffixSymbol: !0 },
            [e.aU]: {
              strSymbol: "ARS$",
              bSpaceForSymbol: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.G7]: { strSymbol: "\u20AA" },
            [e.jT]: { strSymbol: "Br" },
            [e.X0]: {
              strSymbol: "\u20B8",
              bSuffixSymbol: !0,
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: " ",
            },
            [e.Gx]: { strSymbol: "KD", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.w7]: { strSymbol: "QR", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.uZ]: {
              strSymbol: "\u20A1",
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.lK]: {
              strSymbol: "$U",
              bWholeUnitsOnly: !0,
              strDecimalSymbol: ",",
              strThousandsSeparator: ".",
            },
            [e.xt]: {
              strSymbol: "\u043B\u0432",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.Bz]: { strSymbol: "kn", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.OD]: {
              strSymbol: "K\u010D",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.S1]: {
              strSymbol: "kr.",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.HQ]: { strSymbol: "Ft", bSuffixSymbol: !0, bSpaceForSymbol: !0 },
            [e.tn]: {
              strSymbol: "lei",
              bSuffixSymbol: !0,
              bSpaceForSymbol: !0,
            },
            [e.mh]: {},
          },
          E = {
            strSymbol: "",
            bSuffixSymbol: !1,
            bSpaceForSymbol: !1,
            bWholeUnitsOnly: !1,
            eCurrency: e.rg,
            strDecimalSymbol: ".",
            strThousandsSeparator: ",",
          };
        function o(f) {
          return { ...E, ...n[f], eCurrency: f };
        }
      },
      1706: (w, N, t) => {
        "use strict";
        t.d(N, { d: () => E, x: () => n });
        var e = t(86681);
        function n(o, f) {
          const g = (0, e.J)(f);
          return E(o, g);
        }
        function E(o, f) {
          const {
              strSymbol: g,
              bSuffixSymbol: x,
              bSpaceForSymbol: C,
              bWholeUnitsOnly: v,
              strDecimalSymbol: T,
              strThousandsSeparator: h,
            } = f,
            i = o < 0,
            a = v && o % 100 === 0;
          i && (o = -o);
          const s = [];
          for (let I = 0; I < 2; I++)
            a || s.push(o % 10), (o = Math.floor(o / 10));
          !a && T && s.push(T);
          let r = 0;
          do
            r++ % 3 === 0 && r > 2 && h && s.push(h),
              s.push(o % 10),
              (o = Math.floor(o / 10));
          while (o > 0);
          const m = s.reverse().join(""),
            S = C ? " " : "",
            M = i ? "-" : "";
          return x ? `${M}${m}${S}${g}` : `${M}${g}${S}${m}`;
        }
      },
      33220: (w, N, t) => {
        "use strict";
        t.d(N, { rt: () => n });
        var e = t(34104);
        function n(h) {
          switch (h?.toUpperCase()) {
            case "AE":
              return e.Cv;
            case "AU":
              return e.m1;
            case "BR":
              return e.iU;
            case "CA":
              return e.cX;
            case "CH":
            case "LI":
              return e.ln;
            case "CL":
              return e.D5;
            case "CN":
            case "XC":
              return e.C6;
            case "CO":
              return e.G1;
            case "CR":
              return e.uZ;
            case "AD":
            case "AL":
            case "AT":
            case "AX":
            case "BA":
            case "BE":
            case "BG":
            case "CY":
            case "CZ":
            case "DE":
            case "DK":
            case "EE":
            case "ES":
            case "FI":
            case "FO":
            case "FR":
            case "GF":
            case "GI":
            case "GP":
            case "GR":
            case "HR":
            case "HU":
            case "IE":
            case "IT":
            case "LT":
            case "LU":
            case "LV":
            case "MC":
            case "ME":
            case "MK":
            case "MQ":
            case "MT":
            case "NC":
            case "NL":
            case "PF":
            case "PT":
            case "RE":
            case "RO":
            case "RS":
            case "SE":
            case "SI":
            case "SJ":
            case "SK":
            case "SM":
            case "VA":
              return e.a4;
            case "GB":
            case "GG":
            case "GS":
            case "IM":
            case "JE":
              return e.dz;
            case "HK":
              return e.bO;
            case "ID":
              return e.DP;
            case "IL":
              return e.G7;
            case "IN":
              return e.T_;
            case "JP":
              return e.xm;
            case "KR":
              return e.yR;
            case "KW":
              return e.Gx;
            case "KZ":
              return e.X0;
            case "MX":
              return e.ds;
            case "MY":
              return e.Jw;
            case "NO":
              return e.KE;
            case "NZ":
              return e.WS;
            case "PE":
              return e.D4;
            case "PH":
              return e.En;
            case "PL":
              return e.sY;
            case "QA":
              return e.w7;
            case "RU":
              return e.Fq;
            case "SA":
              return e.CR;
            case "SG":
              return e.wA;
            case "TH":
              return e.cm;
            case "TW":
              return e.Jb;
            case "UA":
              return e.SJ;
            case "AF":
            case "AG":
            case "AI":
            case "AM":
            case "AN":
            case "AO":
            case "AQ":
            case "AR":
            case "AS":
            case "AW":
            case "AZ":
            case "BB":
            case "BD":
            case "BF":
            case "BH":
            case "BI":
            case "BJ":
            case "BM":
            case "BN":
            case "BO":
            case "BS":
            case "BT":
            case "BV":
            case "BW":
            case "BY":
            case "BZ":
            case "CC":
            case "CD":
            case "CF":
            case "CG":
            case "CI":
            case "CK":
            case "CM":
            case "CV":
            case "CX":
            case "DJ":
            case "DM":
            case "DO":
            case "DZ":
            case "EC":
            case "EG":
            case "EH":
            case "ER":
            case "ET":
            case "FJ":
            case "FK":
            case "FM":
            case "GA":
            case "GD":
            case "GE":
            case "GH":
            case "GL":
            case "GM":
            case "GN":
            case "GQ":
            case "GT":
            case "GU":
            case "GW":
            case "GY":
            case "HM":
            case "HN":
            case "HT":
            case "IO":
            case "IQ":
            case "IS":
            case "JM":
            case "JO":
            case "KE":
            case "KG":
            case "KH":
            case "KI":
            case "KM":
            case "KN":
            case "KY":
            case "LA":
            case "LB":
            case "LC":
            case "LK":
            case "LR":
            case "LS":
            case "LY":
            case "MA":
            case "MD":
            case "MG":
            case "MH":
            case "ML":
            case "MM":
            case "MN":
            case "MO":
            case "MP":
            case "MR":
            case "MS":
            case "MU":
            case "MV":
            case "MW":
            case "MZ":
            case "NA":
            case "NE":
            case "NF":
            case "NG":
            case "NI":
            case "NP":
            case "NR":
            case "NU":
            case "OM":
            case "PA":
            case "PG":
            case "PK":
            case "PM":
            case "PN":
            case "PR":
            case "PS":
            case "PW":
            case "PY":
            case "RW":
            case "SB":
            case "SC":
            case "SD":
            case "SH":
            case "SL":
            case "SN":
            case "SO":
            case "SR":
            case "ST":
            case "SV":
            case "SY":
            case "SZ":
            case "TC":
            case "TD":
            case "TF":
            case "TG":
            case "TJ":
            case "TK":
            case "TL":
            case "TM":
            case "TN":
            case "TO":
            case "TR":
            case "TT":
            case "TV":
            case "TZ":
            case "UG":
            case "UM":
            case "US":
            case "UZ":
            case "VC":
            case "VE":
            case "VG":
            case "VI":
            case "VU":
            case "WF":
            case "WS":
            case "YE":
            case "YT":
            case "ZM":
            case "ZW":
              return e.CS;
            case "UY":
              return e.lK;
            case "VN":
              return e.aQ;
            case "ZA":
              return e.de;
            default:
              return console.assert(!1, `Unhandled country code: ${h}`), e.CS;
          }
        }
        function E(h) {
          switch (h) {
            case k_ECurrencyCodeGBP:
              return "GBP";
            case k_ECurrencyCodeEUR:
              return "EUR";
            case k_ECurrencyCodeCHF:
              return "CHF";
            case k_ECurrencyCodeRUB:
              return "RUB";
            case k_ECurrencyCodePLN:
              return "PLN";
            case k_ECurrencyCodeBRL:
              return "BRL";
            case k_ECurrencyCodeJPY:
              return "JPY";
            case k_ECurrencyCodeNOK:
              return "NOK";
            case k_ECurrencyCodeIDR:
              return "IDR";
            case k_ECurrencyCodeMYR:
              return "MYR";
            case k_ECurrencyCodePHP:
              return "PHP";
            case k_ECurrencyCodeSGD:
              return "SGD";
            case k_ECurrencyCodeTHB:
              return "THB";
            case k_ECurrencyCodeVND:
              return "VND";
            case k_ECurrencyCodeKRW:
              return "KRW";
            case k_ECurrencyCodeTRY:
              return "TRY";
            case k_ECurrencyCodeUAH:
              return "UAH";
            case k_ECurrencyCodeMXN:
              return "MXN";
            case k_ECurrencyCodeCAD:
              return "CAD";
            case k_ECurrencyCodeAUD:
              return "AUD";
            case k_ECurrencyCodeNZD:
              return "NZD";
            case k_ECurrencyCodeCNY:
              return "CNY";
            case k_ECurrencyCodeINR:
              return "INR";
            case k_ECurrencyCodeCLP:
              return "CLP";
            case k_ECurrencyCodePEN:
              return "PEN";
            case k_ECurrencyCodeCOP:
              return "COP";
            case k_ECurrencyCodeZAR:
              return "ZAR";
            case k_ECurrencyCodeHKD:
              return "HKD";
            case k_ECurrencyCodeTWD:
              return "TWD";
            case k_ECurrencyCodeSAR:
              return "SAR";
            case k_ECurrencyCodeAED:
              return "AED";
            case k_ECurrencyCodeSEK:
              return "SEK";
            case k_ECurrencyCodeARS:
              return "ARS";
            case k_ECurrencyCodeILS:
              return "ILS";
            case k_ECurrencyCodeBYN:
              return "BYN";
            case k_ECurrencyCodeKZT:
              return "KZT";
            case k_ECurrencyCodeKWD:
              return "KWD";
            case k_ECurrencyCodeQAR:
              return "QAR";
            case k_ECurrencyCodeCRC:
              return "CRC";
            case k_ECurrencyCodeUYU:
              return "UYU";
            case k_ECurrencyCodeBGN:
              return "BGN";
            case k_ECurrencyCodeHRK:
              return "HRK";
            case k_ECurrencyCodeCZK:
              return "CZK";
            case k_ECurrencyCodeDKK:
              return "DKK";
            case k_ECurrencyCodeHUF:
              return "HUF";
            case k_ECurrencyCodeRON:
              return "RON";
            default:
              return "USD";
          }
        }
        function o(h) {
          switch (h) {
            case k_ECurrencyCodeUSD:
              return "US Dollar";
            case k_ECurrencyCodeGBP:
              return "GB Pounds";
            case k_ECurrencyCodeEUR:
              return "Euros";
            case k_ECurrencyCodeCHF:
              return "Swiss Francs";
            case k_ECurrencyCodeRUB:
              return "Russian Rubles";
            case k_ECurrencyCodePLN:
              return "Polish zloty";
            case k_ECurrencyCodeBRL:
              return "Brazilian Reals";
            case k_ECurrencyCodeJPY:
              return "Japanese Yen";
            case k_ECurrencyCodeNOK:
              return "Norwegian Krone";
            case k_ECurrencyCodeIDR:
              return "Indonesian Rupiah";
            case k_ECurrencyCodeMYR:
              return "Malaysian Ringgit";
            case k_ECurrencyCodePHP:
              return "Philippine Peso";
            case k_ECurrencyCodeSGD:
              return "Singapore Dollar";
            case k_ECurrencyCodeTHB:
              return "Thai Baht";
            case k_ECurrencyCodeVND:
              return "Vietnamese Dong";
            case k_ECurrencyCodeKRW:
              return "Korean Won";
            case k_ECurrencyCodeTRY:
              return "Turkish Lira";
            case k_ECurrencyCodeUAH:
              return "Ukrainian Hryvnia";
            case k_ECurrencyCodeMXN:
              return "Mexican Peso";
            case k_ECurrencyCodeCAD:
              return "Canadian Dollar";
            case k_ECurrencyCodeAUD:
              return "Australian Dollar";
            case k_ECurrencyCodeNZD:
              return "New Zealand Dollar";
            case k_ECurrencyCodeCNY:
              return "Chinese Yuan";
            case k_ECurrencyCodeINR:
              return "Indian Rupee";
            case k_ECurrencyCodeCLP:
              return "Chilean Peso";
            case k_ECurrencyCodePEN:
              return "Peruvian Sol";
            case k_ECurrencyCodeCOP:
              return "Colombian Peso";
            case k_ECurrencyCodeZAR:
              return "South African Rand";
            case k_ECurrencyCodeHKD:
              return "Hong Kong Dollar";
            case k_ECurrencyCodeTWD:
              return "Taiwanese Dollar";
            case k_ECurrencyCodeSAR:
              return "Saudi Arabian Riyal";
            case k_ECurrencyCodeAED:
              return "Emirati Dirham";
            case k_ECurrencyCodeSEK:
              return "Swedish Krona";
            case k_ECurrencyCodeARS:
              return "Argentine Peso";
            case k_ECurrencyCodeILS:
              return "Israeli New Shequel";
            case k_ECurrencyCodeBYN:
              return "Belarusian Ruble";
            case k_ECurrencyCodeKZT:
              return "Kazakhstani Tenge";
            case k_ECurrencyCodeKWD:
              return "Kuwaiti Dinar";
            case k_ECurrencyCodeQAR:
              return "Qatari Rial";
            case k_ECurrencyCodeCRC:
              return "Costa Rican Colon";
            case k_ECurrencyCodeUYU:
              return "Uruguayan Peso";
            case k_ECurrencyCodeBGN:
              return "Bulgarian lev";
            case k_ECurrencyCodeHRK:
              return "Croatian kuna";
            case k_ECurrencyCodeCZK:
              return "Czech koruna";
            case k_ECurrencyCodeDKK:
              return "Danish krone";
            case k_ECurrencyCodeHUF:
              return "Hungarian forint";
            case k_ECurrencyCodeRON:
              return "Romanian leu";
            default:
              return "";
          }
        }
        function f(h, i = k_ERegionCodeInvalid) {
          switch (h) {
            case k_ECurrencyCodeGBP:
              return "gbp";
            case k_ECurrencyCodeEUR:
              return "eur";
            case k_ECurrencyCodeCHF:
              return "chf";
            case k_ECurrencyCodeRUB:
              return "rub";
            case k_ECurrencyCodePLN:
              return "pln";
            case k_ECurrencyCodeBRL:
              return "brl";
            case k_ECurrencyCodeJPY:
              return "jpy";
            case k_ECurrencyCodeNOK:
              return "nok";
            case k_ECurrencyCodeIDR:
              return "idr";
            case k_ECurrencyCodeMYR:
              return "myr";
            case k_ECurrencyCodePHP:
              return "php";
            case k_ECurrencyCodeSGD:
              return "sgd";
            case k_ECurrencyCodeTHB:
              return "thb";
            case k_ECurrencyCodeVND:
              return "vnd";
            case k_ECurrencyCodeKRW:
              return "krw";
            case k_ECurrencyCodeTRY:
              return "try";
            case k_ECurrencyCodeUAH:
              return "uah";
            case k_ECurrencyCodeMXN:
              return "mxn";
            case k_ECurrencyCodeCAD:
              return "cad";
            case k_ECurrencyCodeAUD:
              return "aud";
            case k_ECurrencyCodeNZD:
              return "nzd";
            case k_ECurrencyCodeCNY:
              return "cny";
            case k_ECurrencyCodeINR:
              return "inr";
            case k_ECurrencyCodeCLP:
              return "clp";
            case k_ECurrencyCodePEN:
              return "pen";
            case k_ECurrencyCodeCOP:
              return "cop";
            case k_ECurrencyCodeZAR:
              return "zar";
            case k_ECurrencyCodeHKD:
              return "hkd";
            case k_ECurrencyCodeTWD:
              return "twd";
            case k_ECurrencyCodeSAR:
              return "sar";
            case k_ECurrencyCodeAED:
              return "aed";
            case k_ECurrencyCodeSEK:
              return "sek";
            case k_ECurrencyCodeARS:
              return "ars";
            case k_ECurrencyCodeILS:
              return "ils";
            case k_ECurrencyCodeBYN:
              return "byn";
            case k_ECurrencyCodeKZT:
              return "kzt";
            case k_ECurrencyCodeKWD:
              return "kwd";
            case k_ECurrencyCodeQAR:
              return "qar";
            case k_ECurrencyCodeCRC:
              return "crc";
            case k_ECurrencyCodeUYU:
              return "uyu";
            case k_ECurrencyCodeBGN:
              return "bgn";
            case k_ECurrencyCodeHRK:
              return "hrk";
            case k_ECurrencyCodeCZK:
              return "czk";
            case k_ECurrencyCodeDKK:
              return "dkk";
            case k_ECurrencyCodeHUF:
              return "huf";
            case k_ECurrencyCodeRON:
              return "ron";
            default:
              return i == k_ERegionCodeCIS
                ? "usd_cis"
                : i == k_ERegionCodeSAsia
                  ? "usd_sasia"
                  : i == k_ERegionCodeLATAM
                    ? "usd_latam"
                    : i == k_ERegionCodeMENA
                      ? "usd_mena"
                      : "usd";
          }
        }
        function g(h) {
          switch (h) {
            case k_ERegionCodeCIS:
              return "CIS";
            case k_ERegionCodeSAsia:
              return "SASIA";
            case k_ERegionCodeLATAM:
              return "LATAM";
            case k_ERegionCodeMENA:
              return "MENA";
          }
          return "Unknown";
        }
        function x(h) {
          switch (h) {
            case "USD":
              return k_ECurrencyCodeUSD;
            case "GBP":
              return k_ECurrencyCodeGBP;
            case "EUR":
              return k_ECurrencyCodeEUR;
            case "CHF":
              return k_ECurrencyCodeCHF;
            case "RUB":
              return k_ECurrencyCodeRUB;
            case "PLN":
              return k_ECurrencyCodePLN;
            case "BRL":
              return k_ECurrencyCodeBRL;
            case "JPY":
              return k_ECurrencyCodeJPY;
            case "NOK":
              return k_ECurrencyCodeNOK;
            case "IDR":
              return k_ECurrencyCodeIDR;
            case "MYR":
              return k_ECurrencyCodeMYR;
            case "PHP":
              return k_ECurrencyCodePHP;
            case "SGD":
              return k_ECurrencyCodeSGD;
            case "THB":
              return k_ECurrencyCodeTHB;
            case "VND":
              return k_ECurrencyCodeVND;
            case "KRW":
              return k_ECurrencyCodeKRW;
            case "TRY":
              return k_ECurrencyCodeTRY;
            case "UAH":
              return k_ECurrencyCodeUAH;
            case "MXN":
              return k_ECurrencyCodeMXN;
            case "CAD":
              return k_ECurrencyCodeCAD;
            case "AUD":
              return k_ECurrencyCodeAUD;
            case "NZD":
              return k_ECurrencyCodeNZD;
            case "CNY":
              return k_ECurrencyCodeCNY;
            case "INR":
              return k_ECurrencyCodeINR;
            case "CLP":
              return k_ECurrencyCodeCLP;
            case "PEN":
              return k_ECurrencyCodePEN;
            case "COP":
              return k_ECurrencyCodeCOP;
            case "ZAR":
              return k_ECurrencyCodeZAR;
            case "HKD":
              return k_ECurrencyCodeHKD;
            case "TWD":
              return k_ECurrencyCodeTWD;
            case "SAR":
              return k_ECurrencyCodeSAR;
            case "AED":
              return k_ECurrencyCodeAED;
            case "SEK":
              return k_ECurrencyCodeSEK;
            case "ARS":
              return k_ECurrencyCodeARS;
            case "ILS":
              return k_ECurrencyCodeILS;
            case "BYN":
              return k_ECurrencyCodeBYN;
            case "KZT":
              return k_ECurrencyCodeKZT;
            case "KWD":
              return k_ECurrencyCodeKWD;
            case "QAR":
              return k_ECurrencyCodeQAR;
            case "CRC":
              return k_ECurrencyCodeCRC;
            case "UYU":
              return k_ECurrencyCodeUYU;
            case "BGN":
              return k_ECurrencyCodeBGN;
            case "HRK":
              return k_ECurrencyCodeHRK;
            case "CZK":
              return k_ECurrencyCodeCZK;
            case "DKK":
              return k_ECurrencyCodeDKK;
            case "HUF":
              return k_ECurrencyCodeHUF;
            case "RON":
              return k_ECurrencyCodeRON;
            case "USD_CIS":
            case "USD_MENA":
            case "USD_LATAM":
            case "USD_SASIA":
              return k_ECurrencyCodeUSD;
            default:
              return C(h)
                ? x(h.substring(0, 3))
                : Number.isInteger(Number(h))
                  ? Number(h)
                  : (AssertMsg(
                      !1,
                      `ASCIICurrencyCodeToECurrencyCode unexpected code ${h}`,
                    ),
                    k_ECurrencyCodeInvalid);
          }
        }
        function C(h) {
          return h.length == 6;
        }
        function v(h) {
          const i = x(h.slice(0, 3)),
            a = h.slice(4, 6);
          return { eCurrencyCode: i, strCountryCode: a };
        }
        function T(h) {
          const i = x(h.toUpperCase());
          return `${o(i)} (${h})`;
        }
      },
      34104: (w, N, t) => {
        "use strict";
        t.d(N, {
          Bz: () => de,
          C6: () => $,
          CR: () => q,
          CS: () => n,
          Cv: () => b,
          D4: () => U,
          D5: () => Z,
          DP: () => h,
          En: () => a,
          Fq: () => g,
          G1: () => X,
          G7: () => B,
          Gx: () => A,
          HQ: () => _,
          JW: () => l,
          Jb: () => z,
          Jw: () => i,
          KE: () => T,
          OD: () => re,
          S1: () => oe,
          SJ: () => I,
          T_: () => k,
          WS: () => H,
          X0: () => u,
          a4: () => o,
          aQ: () => m,
          aU: () => y,
          bO: () => O,
          bj: () => M,
          cX: () => F,
          cm: () => r,
          de: () => ne,
          ds: () => L,
          dz: () => E,
          iU: () => C,
          jT: () => c,
          lK: () => p,
          ln: () => f,
          m1: () => J,
          mh: () => R,
          rg: () => e,
          sY: () => x,
          tn: () => d,
          uZ: () => D,
          w7: () => j,
          wA: () => s,
          xm: () => v,
          xt: () => K,
          yR: () => S,
        });
        const e = 0,
          n = 1,
          E = 2,
          o = 3,
          f = 4,
          g = 5,
          x = 6,
          C = 7,
          v = 8,
          T = 9,
          h = 10,
          i = 11,
          a = 12,
          s = 13,
          r = 14,
          m = 15,
          S = 16,
          M = 17,
          I = 18,
          L = 19,
          F = 20,
          J = 21,
          H = 22,
          $ = 23,
          k = 24,
          Z = 25,
          U = 26,
          X = 27,
          ne = 28,
          O = 29,
          z = 30,
          q = 31,
          b = 32,
          l = 33,
          y = 34,
          B = 35,
          c = 36,
          u = 37,
          A = 38,
          j = 39,
          D = 40,
          p = 41,
          K = 42,
          de = 43,
          re = 44,
          oe = 45,
          _ = 46,
          d = 47,
          R = 48;
        function P(ue) {
          return typeof ue == "number" && ue > e && ue < R;
        }
        function G() {
          return [
            "USD",
            "GBP",
            "EUR",
            "CHF",
            "RUB",
            "PLN",
            "BRL",
            "JPY",
            "NOK",
            "IDR",
            "MYR",
            "PHP",
            "SGD",
            "THB",
            "VND",
            "KRW",
            "TRY",
            "UAH",
            "MXN",
            "CAD",
            "AUD",
            "NZD",
            "CNY",
            "INR",
            "CLP",
            "PEN",
            "COP",
            "ZAR",
            "HKD",
            "TWD",
            "SAR",
            "AED",
            "SEK",
            "ARS",
            "ILS",
            "BYN",
            "KZT",
            "KWD",
            "QAR",
            "CRC",
            "UYU",
            "BGN",
            "HRK",
            "CZK",
            "DKK",
            "HUF",
            "RON",
          ];
        }
        const Q = [M, y];
        function ee() {
          return [
            n,
            E,
            o,
            f,
            g,
            x,
            C,
            v,
            T,
            h,
            i,
            a,
            s,
            r,
            m,
            S,
            I,
            L,
            F,
            J,
            H,
            $,
            k,
            Z,
            U,
            X,
            ne,
            O,
            z,
            q,
            b,
            B,
            u,
            A,
            j,
            D,
            p,
          ];
        }
        function ce() {
          return [...ee(), ...Q, l, K, de, re, oe, _, d];
        }
      },
      16114: (w, N, t) => {
        "use strict";
        t.d(N, {
          a8: () => x,
          sq: () => k,
          u6: () => Z,
          cc: () => F,
          vl: () => $,
          TW: () => T,
          KC: () => M,
          IH: () => q,
          $z: () => a,
          _l: () => s,
          oL: () => H,
          R2: () => U,
          Hq: () => v,
        });
        var e = t(84346);
        const n = {};
        (n.arabic = () => t.e(6696).then(t.t.bind(t, 6696, 19))),
          (n.brazilian = () => t.e(58906).then(t.t.bind(t, 58906, 19))),
          (n.bulgarian = () => t.e(53473).then(t.t.bind(t, 53473, 19))),
          (n.czech = () => t.e(83899).then(t.t.bind(t, 83899, 19))),
          (n.danish = () => t.e(84925).then(t.t.bind(t, 84925, 19))),
          (n.dutch = () => t.e(69902).then(t.t.bind(t, 69902, 19))),
          (n.english = () => t.e(80716).then(t.t.bind(t, 80716, 19))),
          (n.finnish = () => t.e(81663).then(t.t.bind(t, 81663, 19))),
          (n.french = () => t.e(48484).then(t.t.bind(t, 48484, 19))),
          (n.german = () => t.e(66810).then(t.t.bind(t, 66810, 19))),
          (n.greek = () => t.e(13744).then(t.t.bind(t, 13744, 19))),
          (n.hungarian = () => t.e(62101).then(t.t.bind(t, 62101, 19))),
          (n.indonesian = () => t.e(68948).then(t.t.bind(t, 68948, 19))),
          (n.italian = () => t.e(2916).then(t.t.bind(t, 2916, 19))),
          (n.japanese = () => t.e(40195).then(t.t.bind(t, 40195, 19))),
          (n.koreana = () => t.e(84259).then(t.t.bind(t, 84259, 19))),
          (n.latam = () => t.e(24475).then(t.t.bind(t, 24475, 19))),
          (n.malay = () => t.e(60580).then(t.t.bind(t, 60580, 19))),
          (n.norwegian = () => t.e(36884).then(t.t.bind(t, 36884, 19))),
          (n.polish = () => t.e(15269).then(t.t.bind(t, 15269, 19))),
          (n.portuguese = () => t.e(96865).then(t.t.bind(t, 96865, 19))),
          (n.romanian = () => t.e(71391).then(t.t.bind(t, 71391, 19))),
          (n.russian = () => t.e(64933).then(t.t.bind(t, 64933, 19))),
          (n.sc_schinese = () => t.e(27503).then(t.t.bind(t, 27503, 19))),
          (n.schinese = () => t.e(44768).then(t.t.bind(t, 44768, 19))),
          (n.spanish = () => t.e(20876).then(t.t.bind(t, 20876, 19))),
          (n.swedish = () => t.e(75181).then(t.t.bind(t, 75181, 19))),
          (n.tchinese = () => t.e(89779).then(t.t.bind(t, 89779, 19))),
          (n.thai = () => t.e(98970).then(t.t.bind(t, 98970, 19))),
          (n.turkish = () => t.e(87996).then(t.t.bind(t, 87996, 19))),
          (n.ukrainian = () => t.e(47306).then(t.t.bind(t, 47306, 19))),
          (n.vietnamese = () => t.e(72539).then(t.t.bind(t, 72539, 19)));
        async function E(l) {
          if (n[l]) return n[l]();
        }
        var o = t(37901);
        const f = (0, o.l)(E);
        var g = t(44983),
          x = ((l) => (
            (l[(l.None = 0)] = "None"),
            (l[(l.Ago = 1)] = "Ago"),
            (l[(l.Remaining = 2)] = "Remaining"),
            l
          ))(x || {});
        function C(l, y) {
          const B = Date.now() / 1e3 - l;
          return v(B, y);
        }
        function v(l, y, B) {
          let c;
          typeof y == "boolean"
            ? (c = {
                eSuffix: y ? 0 : 1,
                bForceSingleUnits: B,
                bHighGranularity: !1,
              })
            : (c = {
                eSuffix: 1,
                bForceSingleUnits: !1,
                bHighGranularity: !1,
                ...y,
              });
          let u = "TimeInterval_";
          c.eSuffix == 1
            ? (u = "TimeSince_")
            : c.eSuffix == 2 && (u = "TimeRemaining_");
          let A = (j) => Math.floor(j);
          if (
            (c.bAllowDecimal && (A = (j) => Math.round(j * 10) / 10),
            l >= g.Kp.PerYear * 2)
          )
            return f.Localize(`#${u}XYears`, A(l / g.Kp.PerYear));
          if (l >= g.Kp.PerYear)
            return (
              (l -= g.Kp.PerYear),
              l >= g.Kp.PerMonth * 2 && !c.bForceSingleUnits
                ? f.Localize(`#${u}1YearXMonths`, A(l / g.Kp.PerMonth))
                : f.Localize(`#${u}1Year`)
            );
          if (l >= g.Kp.PerMonth * 2)
            return f.Localize(`#${u}XMonths`, A(l / g.Kp.PerMonth));
          if (l >= g.Kp.PerWeek * 2)
            return f.Localize(`#${u}XWeeks`, A(l / g.Kp.PerWeek));
          if (l >= g.Kp.PerWeek)
            return f.Localize(`#${u}1Week`, A(l / g.Kp.PerWeek));
          if (l >= g.Kp.PerDay * 2)
            return f.Localize(`#${u}XDays`, A(l / g.Kp.PerDay));
          if (l >= g.Kp.PerDay)
            return (
              (l -= g.Kp.PerDay),
              l >= g.Kp.PerHour * 2 && !c.bForceSingleUnits
                ? f.Localize(`#${u}1DayXHours`, A(l / g.Kp.PerHour))
                : f.Localize(`#${u}1Day`)
            );
          if (l >= g.Kp.PerHour * 2)
            return f.Localize(`#${u}XHours`, A(l / g.Kp.PerHour));
          if (l >= g.Kp.PerHour)
            return (
              (l -= g.Kp.PerHour),
              l >= g.Kp.PerMinute * 2 && !c.bForceSingleUnits
                ? f.Localize(`#${u}1HourXMinutes`, A(l / g.Kp.PerMinute))
                : f.Localize(`#${u}1Hour`)
            );
          if (l >= g.Kp.PerMinute * 2) {
            const j = Math.floor(l / g.Kp.PerMinute),
              D = l % g.Kp.PerMinute;
            return !c.bHighGranularity || D == 0
              ? f.Localize(`#${u}XMinutes`, A(l / g.Kp.PerMinute))
              : D == 1
                ? f.Localize(`#${u}XMinutes1Second`, j)
                : f.Localize(`#${u}XMinutesXSeconds`, j, D);
          } else if (l >= g.Kp.PerMinute) {
            const j = l % g.Kp.PerMinute;
            return !c.bHighGranularity || j == 0
              ? f.Localize(`#${u}1Minute`)
              : j == 1
                ? f.Localize(`#${u}1Minute1Second`)
                : f.Localize(`#${u}1MinuteXSeconds`, j);
          } else
            return c.bHighGranularity
              ? l == 1
                ? f.Localize(`#${u}1Second`)
                : f.Localize(`#${u}XSeconds`, l)
              : f.Localize(`#${u}LessThanAMinute`);
        }
        function T(l, y, B) {
          let c;
          y === void 0 || y === !0 || y === !1
            ? (c = {
                weekday: B ? "long" : "short",
                year: y ? void 0 : "numeric",
              })
            : (c = y);
          let u = new Date(l * 1e3);
          const A = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...c,
          };
          return u.toLocaleDateString((0, e.J)(), A);
        }
        function h(l, y) {
          let B = new Date(l * 1e3),
            c = new Date(y * 1e3);
          return B.getFullYear() != c.getFullYear() ||
            B.getMonth() != c.getMonth() ||
            B.getDate() != c.getDate()
            ? i(l, y)
            : M(l) + " - " + M(y);
        }
        function i(l, y) {
          let B = new Date(l * 1e3),
            c = new Date(y * 1e3);
          const u = new Date();
          if (
            B.getFullYear() != c.getFullYear() ||
            u.getFullYear() == B.getFullYear()
          )
            return `${a(l)} - ${a(y)}`;
          const A = { month: "short", day: "numeric" },
            j = B.toLocaleDateString(GetPreferredLocales(), A) + " - ";
          if (B.getMonth() == c.getMonth()) {
            const D = { day: "numeric" };
            return j + c.toLocaleDateString(GetPreferredLocales(), D);
          } else return j + c.toLocaleDateString(GetPreferredLocales(), A);
        }
        function a(l, y) {
          let B = new Date(l * 1e3);
          const c = { year: "numeric", month: "short", day: "numeric", ...y };
          return B.toLocaleDateString((0, e.J)(), c);
        }
        function s(l, y) {
          const {
              fullmonthname: B = !1,
              bUseRelativeNames: c = !0,
              bIncludeDayName: u = !1,
            } = y ?? {},
            A = new Date(),
            j = new Date(l * 1e3);
          if (j.getFullYear() != A.getFullYear())
            return a(l, { month: B ? "long" : "short" });
          const D = new Date();
          if ((D.setHours(0, 0, 0, 0), c)) {
            if (j >= D) {
              if ((D.setDate(D.getDate() + 1), j < D))
                return f.Localize("#Time_Today");
              if ((D.setDate(D.getDate() + 1), j < D))
                return f.Localize("#Time_Tomorrow");
            } else if ((D.setDate(D.getDate() - 1), j >= D))
              return f.Localize("#Time_Yesterday");
          }
          const p = { month: B ? "long" : "short", day: "numeric" };
          return u && (p.weekday = "long"), j.toLocaleDateString((0, e.J)(), p);
        }
        function r(l) {
          let y = new Date(l * 1e3);
          return k(y);
        }
        function m(l) {
          let y = new Date(l * 1e3);
          return $(y);
        }
        function S(l) {
          const y = new Date();
          y.setHours(15);
          const B = y.toLocaleTimeString(l, { hour: "numeric" }),
            c = y.toLocaleTimeString(l, { hour: "numeric", hour12: !1 });
          return B == c;
        }
        function M(l, y, B) {
          const c = new Date(l * 1e3),
            u = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            A = { hour: "numeric", minute: "2-digit" },
            j = (0, e.J)(),
            p = { ...(y?.bForce24HourClock || S(j[0]) ? u : A), ...B };
          return c.toLocaleTimeString(j, p);
        }
        function I(l, y, B) {
          const c = new Date(l * 1e3);
          return L(c, !1, !1) + " " + M(l, { bForce24HourClock: y }) + " " + B;
        }
        function L(l, y = !1, B = !0) {
          const c = {
            weekday: B ? "long" : "short",
            day: "numeric",
            month: y ? "long" : "short",
          };
          return l.toLocaleDateString(GetPreferredLocales(), c);
        }
        function F(l) {
          return l.toLocaleDateString((0, e.J)(), { weekday: "long" });
        }
        function J(l) {
          return l.toLocaleDateString(GetPreferredLocales(), { month: "long" });
        }
        function H(l) {
          return l.toLocaleDateString((0, e.J)(), { month: "short" });
        }
        function $(l) {
          return l.toLocaleDateString((0, e.J)(), { year: "numeric" });
        }
        function k(l) {
          return l.toLocaleDateString((0, e.J)(), {
            month: "long",
            year: "numeric",
          });
        }
        function Z(l, y) {
          switch (l.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return f.Localize(
                y
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                l.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return f.Localize(
                y
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                l.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return f.Localize(
                y
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                l.getUTCFullYear(),
              );
            default:
              return f.Localize(
                y
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                l.getUTCFullYear(),
              );
          }
        }
        function U(l) {
          const y = Math.floor(l / g.Kp.PerYear),
            B = Math.floor(l / g.Kp.PerMonth),
            c = Math.floor((l % g.Kp.PerMonth) / g.Kp.PerDay),
            u = Math.floor((l % g.Kp.PerDay) / g.Kp.PerHour),
            A = Math.floor((l % g.Kp.PerHour) / g.Kp.PerMinute);
          return (
            (l = l % g.Kp.PerMinute),
            y > 0
              ? f.Localize("#TimeRemaining_MoreThanOneYear")
              : B > 0
                ? f.Localize("#TimeRemaining_MonthsDays", B, c)
                : c > 0
                  ? f.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      c,
                      u.toString().padStart(2, "0"),
                      A.toString().padStart(2, "0"),
                    )
                  : u > 0
                    ? f.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        u.toString().padStart(2, "0"),
                        A.toString().padStart(2, "0"),
                        l.toString().padStart(2, "0"),
                      )
                    : f.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        A.toString().padStart(2, "0"),
                        l.toString().padStart(2, "0"),
                      )
          );
        }
        function X(l, y, B) {
          for (; l.length < y; ) l = B + l;
          return l;
        }
        function ne(l) {
          return (
            (l === void 0 || isNaN(l)) && (l = 0),
            {
              hours: Math.floor(l / 3600),
              minutes: Math.floor((l % 3600) / 60),
              seconds: Math.floor(l % 60),
              fraction: l - Math.floor(l),
            }
          );
        }
        function O(l, y, B) {
          let c = l < 0;
          l = c ? 0 - l : l;
          const u = ne(l),
            A = u.fraction.toFixed(2).split(".")[1],
            j = y ?? !0;
          let D = !j || A == "00";
          c &&
            u.hours == 0 &&
            u.minutes == 0 &&
            u.seconds == 0 &&
            D &&
            (c = !1);
          let p = "";
          if (u.hours) {
            const K = u.hours.toString(),
              de = X(u.minutes.toString(), 2, "0"),
              re = X(u.seconds.toString(), 2, "0"),
              oe = j
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            p = PkgLocalization.Localize(oe, K, de, re, A);
          } else if (u.minutes) {
            const K = u.minutes.toString(),
              de = X(u.seconds.toString(), 2, "0"),
              re = j
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            p = PkgLocalization.Localize(re, K, de, A);
          } else if (u.seconds) {
            const K = u.seconds.toString(),
              de = j
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            p = PkgLocalization.Localize(de, K, A);
          }
          return (
            c &&
              (B
                ? (p = PkgLocalization.Localize("#Duration_WrittenNegation", p))
                : (p = "-" + p)),
            p
          );
        }
        function z(l, y, B) {
          let c = l < 0;
          l = c ? 0 - l : l;
          const u = ne(l),
            A = X(u.seconds.toString(), 2, "0"),
            j = u.fraction.toFixed(2).split(".")[1],
            D = y ?? !0;
          let p = !D || j == "00";
          c &&
            u.hours == 0 &&
            u.minutes == 0 &&
            u.seconds == 0 &&
            p &&
            (c = !1);
          let K = "";
          if (u.hours) {
            const de = X(u.minutes.toString(), 2, "0"),
              re = D
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            K = PkgLocalization.Localize(re, u.hours, de, A, j);
          } else {
            const de = u.minutes.toString(),
              re = D
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            K = PkgLocalization.Localize(re, de, A, j);
          }
          return (
            c &&
              (B
                ? (K = PkgLocalization.Localize("#Duration_WrittenNegation", K))
                : (K = "-" + K)),
            K
          );
        }
        function q(l) {
          const y = ne(l),
            B = y.hours * 60 + y.minutes,
            c = y.hours,
            u = Math.floor(y.hours / 24),
            A = Math.floor(u / 30);
          return A > 1
            ? f.Localize("#ReadableDuration_Months", A)
            : A === 1
              ? f.Localize("#ReadableDuration_OneMonth")
              : u > 1
                ? f.Localize("#ReadableDuration_Days", u)
                : c > 2
                  ? f.Localize("#ReadableDuration_Hours", c)
                  : B > 2
                    ? f.Localize("#ReadableDuration_Minutes", B)
                    : B > 1
                      ? f.Localize("#ReadableDuration_OneMinute")
                      : f.Localize("#ReadableDuration_LessThanOneMinute");
        }
        function b(l) {
          if (l >= 120) {
            const B = (Math.round((l / 60) * 10) / 10).toLocaleString(
              GetPreferredLocales(),
              { minimumFractionDigits: 0, maximumFractionDigits: 1 },
            );
            return PkgLocalization.Localize("#Playtime_Hours", B);
          }
          return PkgLocalization.Localize(
            "#Playtime_Minutes",
            l.toLocaleString(GetPreferredLocales()),
          );
        }
      },
      44983: (w, N, t) => {
        "use strict";
        t.d(N, { Kp: () => e, _2: () => v });
        const e = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function n(i, a) {
          return (
            i.getFullYear() == a.getFullYear() &&
            i.getMonth() == a.getMonth() &&
            i.getDate() == a.getDate()
          );
        }
        function E(i, a) {
          let s = new Date(i);
          return s.setDate(s.getDate() - 1), n(s, a);
        }
        function o(i, a) {
          return i.getFullYear() == a.getFullYear();
        }
        function f(i) {
          return new Date(
            i.getFullYear(),
            i.getMonth(),
            i.getDate(),
            i.getHours(),
            0,
            0,
            0,
          );
        }
        function g(i) {
          return new Date(
            i.getFullYear(),
            i.getMonth(),
            i.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function x(i) {
          return new Date(i.getFullYear(), i.getMonth(), 1, 0, 0, 0, 0);
        }
        function C(i) {
          return new Promise((a) => setTimeout(a, i));
        }
        function v() {
          return Math.floor(Date.now() / 1e3);
        }
        function T(i) {
          return Math.floor(i.getTime() / 1e3);
        }
        function h(i) {
          const a = Math.round(i / 1e3),
            s = Math.floor(a % 60),
            r = Math.floor((a / 60) % 60),
            m = Math.floor(a / 3600);
          let S = !1,
            M = "";
          return (
            m > 0 && ((M += m + ":"), (S = !0)),
            (M += S && r < 10 ? "0" + r + ":" : r + ":"),
            (M += s < 10 ? "0" + s : s),
            M
          );
        }
      },
      72147: (w, N, t) => {
        "use strict";
        t.d(N, { do: () => b, of: () => q });
        var e = t(7850),
          n = t(55483),
          E = t(24660),
          o = t(64868),
          f = t(72609),
          g = t(89926),
          x = t(72865),
          C = t(25294),
          v = t(11996),
          T = t(19047),
          h = t(10134),
          i = t(35675),
          a = t(20125),
          s = t(51614),
          r = t(98609),
          m = t(67705),
          S = ((l) => (
            (l[(l.k_ECuratorFollow = 1)] = "k_ECuratorFollow"),
            (l[(l.k_ECuratorUnfollow = 2)] = "k_ECuratorUnfollow"),
            (l[(l.k_ECuratorIgnore = 3)] = "k_ECuratorIgnore"),
            (l[(l.k_ECuratorUnignore = 4)] = "k_ECuratorUnignore"),
            l
          ))(S || {});
        function M(l, y) {
          const B = (0, i.BU)(),
            c = r.iA.accountid;
          return (0, s.n)({
            mutationKey: ["useUpdateCuratorAffinity", l, c, y],
            mutationFn: async () => {
              if (l == null) return !1;
              const u = y == S.k_ECuratorFollow || y == S.k_ECuratorUnfollow,
                A = y == S.k_ECuratorFollow || y == S.k_ECuratorIgnore,
                j = `${r.TS.STORE_BASE_URL}curators/${u ? "ajaxfollow/" : "ajaxignore/"}`,
                D = new FormData();
              D.append("clanid", "" + l),
                D.append("sessionid", (0, m.KC)()),
                D.append(u ? "follow" : "ignore", A ? "1" : "0");
              const p = await fetch(j, {
                  method: "POST",
                  body: D,
                  credentials: "include",
                }),
                K = await p.json();
              if (!p.ok)
                throw new Error(
                  `Curator Affinity: ${u ? "Follow" : "Ignore"} Currator ${A ? "add" : "remove"} failed (${p.status} / ${K.msg})`,
                );
              return K.is_creator;
            },
            onMutate: () => {
              if (l != null) {
                const u =
                  y == S.k_ECuratorUnfollow || y == S.k_ECuratorUnignore;
                B(
                  y == S.k_ECuratorFollow ? [{ clanAccountID: l }] : void 0,
                  y == S.k_ECuratorIgnore ? [{ clanAccountID: l }] : void 0,
                  u ? [{ clanAccountID: l }] : void 0,
                );
              }
            },
            onError: (u) => {
              if (l != null) {
                const A = y == S.k_ECuratorFollow || y == S.k_ECuratorIgnore;
                B(
                  y == S.k_ECuratorUnfollow ? [{ clanAccountID: l }] : void 0,
                  y == S.k_ECuratorUnignore ? [{ clanAccountID: l }] : void 0,
                  A ? [{ clanAccountID: l }] : void 0,
                  u ? [{ clanAccountID: l, is_creator: !0 }] : void 0,
                );
              }
            },
            onSuccess: (u) => {
              u &&
                l &&
                B(void 0, void 0, void 0, [
                  { clanAccountID: l, is_creator: !0 },
                ]),
                (0, a.WZ)();
            },
          });
        }
        var I = t(90626),
          L = t(85705),
          F = t(36118),
          J = t(36707),
          H = t(18210),
          $ = t(96538),
          k = t(71421),
          Z = t(99371),
          U = t.n(Z),
          X = t(85385),
          ne = t(95695),
          O = t.n(ne);
        const z = (l) => {
          const {
              className: y,
              bIgnored: B,
              bApplyingFollowing: c,
              bFollowing: u,
              onFollowClick: A,
              followType: j,
            } = l,
            { elDialogElement: D, fnShowLogonDialog: p } = (0, g.l)();
          if (!(0, i.xU)()) return null;
          let K = null;
          switch (j) {
            case "app":
              K = (0, H.we)("#text_store_follow_desc");
              break;
            case "creatorhome":
              K = (0, H.we)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              K = (0, H.we)("#steam_curator_follow_ttip");
              break;
            case "group":
              K = (0, H.we)("#steam_group_follow_ttip");
          }
          return K
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(k.Gq, {
                    toolTipContent: !B && !u ? K : void 0,
                    children: (0, e.jsxs)(E.ml, {
                      className: (0, J.A)(
                        O().Button,
                        U().FollowButton,
                        "FollowButton",
                        y,
                        u ? "Followed" : "",
                      ),
                      onClick: () => {
                        f.iA.logged_in ? A() : p();
                      },
                      children: [
                        c && (0, e.jsx)(L.k, { size: 15 }),
                        !c && (u || B) && (0, e.jsx)(F.Jlk, {}),
                        (0, e.jsx)("div", {
                          className: (0, J.A)(
                            U().FollowBtnText,
                            "FollowBtnText",
                          ),
                          children:
                            !c &&
                            (u
                              ? (0, H.we)("#Button_Followed")
                              : B
                                ? (0, H.we)("#Button_Ignored")
                                : (0, H.we)("#Button_Follow")),
                        }),
                      ],
                    }),
                  }),
                  D,
                ],
              })
            : (console.error("CommonFollowButton unexpected type", j), null);
        };
        function q(l) {
          const {
              followType: y,
              fnSuccessCallback: B,
              clanAccountID: c,
              className: u,
            } = l,
            [A, j] = I.useState(!1),
            { data: D } = (0, n.TB)(y ? void 0 : c),
            p = (0, i.eT)(c),
            K = (0, i.mQ)(c),
            { mutateAsync: de } = M(
              c,
              p ? S.k_ECuratorUnfollow : S.k_ECuratorFollow,
            ),
            [re, oe, _] = (0, o.uD)(),
            d = I.useCallback(async () => {
              p != null && (j(!0), await de(), j(!1), B?.(p));
            }, [p, B, de]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(z, {
                className: u,
                bIgnored: !!K,
                bFollowing: !!p,
                bApplyingFollowing: A,
                onFollowClick: () => {
                  f.iA.is_limited ? oe() : d();
                },
                followType:
                  y ?? (D?.is_creator_home ? "creatorhome" : "steamcurator"),
              }),
              (0, e.jsx)($.EN, {
                active: re,
                children: (0, e.jsx)(X.g, { closeModal: _ }),
              }),
            ],
          });
        }
        function b(l) {
          const { appid: y, className: B } = l,
            [c, u] = I.useState(!1),
            A = (0, v.Fh)(y),
            j = (0, h.BD)(y),
            D = (0, x.n9)(),
            p = C.A.GetSNRLinkParam(D),
            { mutateAsync: K } = (0, T.L)(y, !A, p),
            de = I.useCallback(async () => {
              u(!0), await K(), u(!1);
            }, [K]);
          return (0, e.jsx)(z, {
            className: B,
            bIgnored: !!j,
            bFollowing: !!A,
            bApplyingFollowing: c,
            onFollowClick: de,
            followType: "app",
          });
        }
      },
      85385: (w, N, t) => {
        "use strict";
        t.d(N, { g: () => f });
        var e = t(7850),
          n = t(96538),
          E = t(18210),
          o = t(72609);
        const f = (g) => {
          let x = o.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
          return (0, e.jsx)(n.o0, {
            strTitle: (0, E.we)("#Informational_Message"),
            onCancel: g.closeModal,
            onOK: g.closeModal,
            bAlertDialog: !0,
            children: (0, e.jsx)("div", {
              children: (0, E.PP)(
                g.strTokenOverride || "#User_LimitedAccount",
                (0, e.jsx)("a", {
                  href: x,
                  target: o.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noopener noreferrer",
                  children: (0, E.we)("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        };
      },
      6698: (w, N, t) => {
        "use strict";
        t.d(N, { nz: () => g, oj: () => C, zG: () => x });
        var e = t(7850),
          n = t(48156),
          E = t(95995),
          o = t(26356);
        function f(v) {
          return v == "bundle"
            ? "bundle"
            : v == "sub"
              ? "sub"
              : (BIsSaleItemType(v), "app");
        }
        function g(v) {
          return v == n.c6.xO
            ? "bundle"
            : v == n.c6.RD
              ? "sub"
              : (v == n.c6.qI, "app");
        }
        function x(v, T) {
          const h = T || (v ? o.ZJ : o.iA);
          return [!!h, h];
        }
        const C = (v) => {
          const { appid: T } = v,
            h = (0, e.jsx)("div", {
              className: "ImpressionTrackedElement",
              children: v.children,
            });
          return T ? (0, e.jsx)(E.A, { appID: T, children: h }) : h;
        };
      },
      89926: (w, N, t) => {
        "use strict";
        t.d(N, { l: () => T, v: () => h });
        var e = t(7850),
          n = t(64868),
          E = t(39905),
          o = t(1880),
          f = t(69168),
          g = t(74107),
          x = t(47875),
          C = t(8892);
        function v(i) {
          const { closeModal: a, strDescOverride: s } = i;
          return (0, e.jsx)(o.o0, {
            strTitle: g.F5.Localize("#LoginRedirect_Dialog_Title"),
            strDescription:
              s || g.F5.Localize("#LoginRedirect_Dialog_Description"),
            onCancel: a,
            strOKButtonText: E.Z.Localize("#Button_OK"),
            onOK: () => {
              (0, x.l)(), a();
            },
          });
        }
        function T(i) {
          const [a, s, r] = (0, n.uD)();
          return {
            elDialogElement: (0, e.jsx)(f.E, {
              active: a,
              children: (0, e.jsx)(v, { closeModal: r, strDescOverride: i }),
            }),
            fnShowLogonDialog: s,
          };
        }
        function h(i) {
          const { label: a, strDialogDesc: s } = i,
            { elDialogElement: r, fnShowLogonDialog: m } = T(s);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(C.$, {
                onClick: m,
                children: a || E.Z.Localize("#Login_SignIn"),
              }),
              r,
            ],
          });
        }
      },
      80702: (w, N, t) => {
        "use strict";
        t.d(N, { Q: () => mt });
        var e = t(7850),
          n = t(64868),
          E = t(48156),
          o = t(67344),
          f = t(90626),
          g = t(41301),
          x = t(561),
          C = t(76867),
          v = t(25792),
          T = t(21659),
          h = t(36707),
          i = t(30096),
          a = t(3166),
          s = t(64769),
          r = t.n(s),
          m = t(10350),
          S = t.n(m);
        const M = 150,
          I = f.createContext(void 0);
        function L() {
          return f.useContext(I);
        }
        function F(te) {
          const {
              hoverContent: V,
              hoverProps: Y,
              nDelayShowMs: se,
              nWidthMultiplier: ae,
              children: ie,
              className: le,
            } = te,
            me = (0, a.Qn)(),
            fe = (0, T.zI)(),
            Se = !me && !fe,
            [Ee, he] = f.useState(!1),
            [pe, Me] = f.useState(void 0),
            ye = (Ce) => {
              he(!0), Me(Ce.currentTarget);
            },
            He = () => he(!1),
            Ne = f.useCallback(() => he(!1), []),
            be = (Ce) => {
              Ce.keyCode == g.zV &&
                (he(!1), Ce.preventDefault(), Ce.stopPropagation());
            },
            we = () => he(!1);
          return (0, e.jsxs)("div", {
            "data-key": "hover div",
            role: "button",
            tabIndex: 0,
            className: (0, h.A)(S().ItemHoverSource, le),
            onMouseEnter: ye,
            onMouseLeave: He,
            onTouchStart: we,
            onKeyDown: be,
            children: [
              Se &&
                pe &&
                (0, e.jsx)(I.Provider, {
                  value: Ne,
                  children: (0, e.jsx)(J, {
                    visible: Ee,
                    target: pe,
                    nDelayShowMs: se,
                    nWidthMultiplier: ae,
                    hoverProps: Y,
                    children: V,
                  }),
                }),
              (0, e.jsx)(v.tH, { children: ie }),
            ],
          });
        }
        function J(te) {
          const {
              hoverProps: V,
              nDelayShowMs: Y = M,
              nWidthMultiplier: se = 1.15,
              target: ae,
              visible: ie,
              children: le,
            } = te,
            [me, fe] = f.useState(ie);
          if (
            (f.useEffect(() => {
              if (ie)
                if (Y) {
                  const he = window.setTimeout(() => fe(!0), Y);
                  return () => window.clearTimeout(he);
                } else {
                  fe(!0);
                  return;
                }
              else {
                if ((0, o.p)()) return;
                fe(!1);
                return;
              }
            }, [ie]),
            f.useEffect(() => {
              if (!me) return;
              const he = 50,
                pe = ae.ownerDocument.defaultView;
              if (pe) {
                const Me = pe.scrollY,
                  ye = () => {
                    Math.abs(pe.scrollY - Me) > he && fe(!1);
                  };
                return (
                  window.addEventListener("scroll", ye),
                  () => window.removeEventListener("scroll", ye)
                );
              }
              return () => {};
            }, [me, ae?.ownerDocument.defaultView]),
            !ae || !le || !me)
          )
            return null;
          const Se = ae.clientWidth < 200 ? "8px" : "10px",
            Ee = {
              direction: "overlay-center",
              bEnablePointerEvents: !0,
              ...(V || {}),
              style: {
                zIndex: 98,
                width: ae.clientWidth * se,
                fontSize: Se,
                minHeight: $() == "hiding" ? void 0 : 300,
                height:
                  $() == "hiding"
                    ? ae.clientWidth * 1.15 * (125 / 184)
                    : void 0,
                ...V?.style,
              },
              target: ae,
            };
          return (0, e.jsx)(H, {
            hoverProps: Ee,
            children: (0, e.jsx)(v.tH, { children: le }),
          });
        }
        function H(te) {
          const { hoverProps: V, children: Y } = te,
            se = f.useCallback((ie) => ie?.focus(), []);
          return (0, e.jsx)(x.g, {
            ...V,
            children: (0, e.jsx)(C.M, {
              timeout: 500,
              in: !0,
              appear: !0,
              classNames: {
                appearActive: (0, h.A)(S().Opening, r().Opening),
                enterDone: (0, h.A)(S().Open, r().Open),
              },
              children: (ie) =>
                (0, e.jsx)("div", {
                  ref: (0, i.XB)(ie, se),
                  className: S().HoverContentTransition,
                  tabIndex: -1,
                  children: Y,
                }),
            }),
          });
        }
        function $() {
          return window.sessionStorage?.getItem(k) || "default";
        }
        const k = "DEBUG_UseNewGameHover";
        function Z(te) {
          window.sessionStorage.setItem(k, te);
        }
        window.SetHoverPresentation = Z;
        var U = t(48357),
          X = t(80104),
          ne = t(27284),
          O = t(77459),
          z = t(63026),
          q = t(44267),
          b = t(6469),
          l = t(36118),
          y = t(47689),
          B = t(18210),
          c = t(39722),
          u = t.n(c),
          A = t(89926),
          j = t(19298),
          D = t(10134),
          p = t(62292);
        function K(te) {
          const { id: V, snr: Y, classOverride: se } = te,
            [ae, ie] = (0, f.useState)(!1),
            le = (0, y.m)("GameHoverIgnoreButton"),
            { elDialogElement: me, fnShowLogonDialog: fe } = (0, A.l)(),
            Se = V && "appid" in V ? V.appid : void 0,
            Ee = (0, D.BD)(Se),
            { mutateAsync: he } = (0, p.Q)(Se, !Ee, Y),
            pe = V && "appid" in V && b.Fm.Get().BIsGameIgnored(V.appid),
            Me = async (ye) => {
              ye.preventDefault(),
                ye.stopPropagation(),
                a.iA.logged_in
                  ? V &&
                    "appid" in V &&
                    (ie(!0), await he(), le.token.reason || ie(!1))
                  : fe();
            };
          return (0, e.jsxs)(j.Z, {
            className: (0, h.A)(u().IgnoreButton, se),
            onClick: Me,
            children: [
              (0, e.jsx)(l.NtH, {}),
              (0, e.jsx)("div", {
                className: (0, h.A)(
                  u().IgnoreButtonText,
                  ae && u().IgnoreLoadingText,
                ),
                children: (0, B.we)(
                  pe ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore",
                ),
              }),
              me,
            ],
          });
        }
        var de = t(72609),
          re = t(21721),
          oe = t(25046),
          _ = t(87249),
          d = t(68094),
          R = t(40358),
          P = t(29522),
          G = t(5827),
          Q = t(54806),
          ee = t(61855),
          ce = t(14874),
          ue = t(8323);
        const W = 5500,
          Le = 2e3,
          ge = 10;
        function De(te, V) {
          return te && V && V.main_capsule
            ? {
                stringifyID: `maincap_${te.id}_${te.item_type}`,
                rctImage: (0, e.jsx)(
                  "img",
                  {
                    className: r().FullDivImage,
                    loading: "lazy",
                    src: (0, re.b0)(V, "main_capsule"),
                    alt: te.name,
                  },
                  "fallback",
                ),
                nDurationMs: Le,
              }
            : null;
        }
        function Te(te, V) {
          return {
            stringifyID: `vid_${(0, d.ER)(te)}`,
            rctImage: (0, e.jsx)(_.mj, { id: te, active: !0 }),
            nDurationMs: W,
          };
        }
        function Ie(te, V, Y, se) {
          return Y.slice(0, se).map((ae, ie) => {
            const le = (0, re.bu)(ae, "1920x1080");
            return {
              stringifyID: `screen${ie}_${(0, d.ER)(te)}`,
              rctImage: (0, e.jsx)(
                "img",
                {
                  className: r().FullDivImage,
                  loading: "lazy",
                  src: le,
                  alt: `${V}'s screenshot ${ie + 1}`,
                },
                le,
              ),
              nDurationMs: Le,
            };
          });
        }
        function ke(te, V, Y, se, ae) {
          const ie = [];
          if (
            (ae && ie.push(Te(te, ae)),
            se && se.length > 0 && ie.push(...Ie(te, V.name, se, ge)),
            ie.length == 0 && Y && Y.main_capsule)
          ) {
            const le = De(V, Y);
            le && ie.push(le);
          }
          return te && ie.length == 0, ie;
        }
        function Ge(te, V, Y, se, ae, ie) {
          const le = [];
          ie && le.push(Te(V, ie)),
            se && se.length > 0 && le.push(...Ie(te, Y.name, se, ge));
          const me = ge - (se?.length || 0);
          return (
            me > 0 && ae && ae.length > 0 && le.push(...Ie(te, Y.name, ae, me)),
            te && le.length == 0,
            le
          );
        }
        function Ye(te) {
          return (0, e.jsx)("img", {
            className: r().FullDivImage,
            loading: "lazy",
            src: (0, de.YJ)(ee.A),
            alt: "default",
          });
        }
        function Pe(te) {
          const { id: V } = te,
            { data: Y } = (0, R.U2)(V);
          if (!Y || Y.unvailable_for_country_restriction || !Y.visible)
            return (0, e.jsx)("div", {
              className: r().TrailerCtn,
              children: (0, e.jsx)(Ye, {}, "default"),
            });
          const se = Y.item_type,
            ae = Y.type;
          return se == E.c6.xO || se == E.c6.RD
            ? (0, e.jsx)(Re, { includeAppIDs: Y.included_appids })
            : (ae == E.uE.ue || ae == E.uE.Vi) &&
                Y.related_items &&
                Y.related_items.parent_appid
              ? (0, e.jsx)(ve, {
                  demoItemDefaultInfo: Y,
                  parentAppID: Y.related_items.parent_appid,
                })
              : (0, e.jsx)(Ue, { storeItemDefaultData: Y });
        }
        function Ue(te) {
          const { storeItemDefaultData: V } = te,
            Y = (0, ce.QO)(V),
            se = (0, oe.TH)(Y),
            { data: ae } = (0, R.lv)(Y),
            ie = (0, re.DT)(Y),
            le = (0, f.useMemo)(() => ke(Y, V, ae, ie, se), [Y, ie, se, ae, V]);
          return (0, e.jsx)(Be, { rgTrailerAndImages: le });
        }
        function ve(te) {
          const { demoItemDefaultInfo: V, parentAppID: Y } = te,
            se = (0, ce.QO)(V);
          return (0, oe.TH)(se)
            ? (0, e.jsx)(Ue, { storeItemDefaultData: V })
            : (0, e.jsx)(_e, {
                demoID: se,
                demoItemDefaultInfo: V,
                parentAppID: Y,
              });
        }
        function _e(te) {
          const { parentAppID: V, demoID: Y, demoItemDefaultInfo: se } = te,
            ae = (0, P.$5)(V),
            ie = (0, re.DT)(Y),
            le = (0, re.DT)(ae),
            me = (0, oe.TH)(ae),
            fe = (0, f.useMemo)(
              () => Ge(Y, ae, se, ie, le, me),
              [Y, ae, se, me, ie, le],
            );
          return (0, e.jsx)(Be, { rgTrailerAndImages: fe });
        }
        function Re(te) {
          const { includeAppIDs: V } = te,
            Y = (0, G.eG)(),
            se = (0, Q.E)({
              queries: V.map((le) => (0, R.AQ)(Y, { appid: le })),
            }),
            ae = (0, Q.E)({
              queries: V.map((le) => (0, R.us)(Y, { appid: le })),
            }),
            ie = (0, f.useMemo)(
              () =>
                se
                  .map((le, me) => {
                    const fe = ae[me].data,
                      Se = le.data;
                    return De(fe, Se);
                  })
                  .filter((le) => !!le),
              [se, ae],
            );
          return (0, e.jsx)(Be, { rgTrailerAndImages: ie });
        }
        function Be(te) {
          const { rgTrailerAndImages: V } = te,
            Y = (0, f.useRef)(0),
            se = (0, i.CH)(),
            [ae] = f.useState(new ue.LU()),
            ie = (0, f.useCallback)(
              (le = !1) => {
                if ((le && (Y.current = 0), V?.length > 0)) {
                  const me = V[Y.current].nDurationMs;
                  ae.Schedule(me, () => {
                    const fe = Y.current;
                    (Y.current = (Y.current + 1) % V.length),
                      fe != Y.current && (ie(), se());
                  });
                }
              },
              [V, ae, se],
            );
          return (
            (0, f.useEffect)(
              () => (V.length > 0 && ie(), () => ae.Cancel()),
              [V, ie, ae],
            ),
            (0, e.jsx)("div", {
              className: r().TrailerCtn,
              children: V?.map((le, me) =>
                (0, e.jsx)(
                  "div",
                  {
                    className: (0, h.A)({
                      [r().FullDivImage]: !0,
                      [r().Transparent]: me != Y.current,
                    }),
                    children: le.rctImage,
                  },
                  "e-" + me + "-" + le.stringifyID,
                ),
              ),
            })
          );
        }
        var et = t(16179),
          tt = t(3348),
          qe = t(41944),
          nt = t(76532),
          rt = t.n(nt),
          ot = t(29245),
          st = t(41188),
          at = t(26356),
          Qe = t(6698);
        function it(te) {
          const { id: V } = te,
            { data: Y } = (0, R.xz)(V);
          return Y
            ? (0, e.jsx)("div", {
                className: r().TagRow,
                children: (0, e.jsx)("div", {
                  className: r().Tags,
                  children: Y.slice(0, 10)
                    .filter((se) => se.tagid)
                    .map((se) =>
                      (0, e.jsx)(
                        st.p,
                        { tagid: se.tagid, className: r().Tag },
                        "tag_" + se.tagid,
                      ),
                    ),
                }),
              })
            : null;
        }
        function lt(te) {
          const {
              id: V,
              displayID: Y,
              name: se,
              strStoreUrl: ae,
              elElementToAppend: ie,
              bShowDemoButton: le,
              bHideBottomHalf: me,
              bHidePrice: fe,
              bShowDeckCompatibilityDialog: Se,
              eHardwareCompatibilityDisplay: Ee,
              onShowDeckCompatibilityDialog: he,
              bUseSubscriptionLayout: pe,
              nCreatorAccountID: Me,
              bPreventNavigation: ye,
              bShowDescription: He,
            } = te,
            Ne = L(),
            be =
              he &&
              (() => {
                Ne?.(), he();
              }),
            [we, Ce] = (0, f.useState)(!1),
            We = "",
            [Je, Xe] = (0, f.useState)(We),
            $e = (xe) => Xe(`translateY( -${xe?.clientHeight || 0}px )`),
            { data: Oe } = (0, R.J$)(V),
            { data: Ke } = (0, R.lv)(Y),
            Fe = !pe && !le && !ie,
            Ze = Oe && Oe.item_type == E.c6.qI,
            [Ae, Ve] = (0, Qe.zG)(Se, Ee);
          return (0, e.jsxs)("div", {
            className: r().BottomShelf,
            style: { transform: me && we ? Je : We },
            onMouseEnter: () => Ce(!0),
            onFocus: () => Ce(!0),
            onMouseLeave: () => Ce(!1),
            onBlur: () => Ce(!1),
            children: [
              (0, e.jsxs)("a", {
                href: ae,
                className: r().Midline,
                onClick: (xe) => {
                  ye && xe.preventDefault();
                },
                "aria-disabled": ye,
                children: [
                  Ke &&
                    (0, e.jsx)("div", {
                      className: r().CapsuleImageAnchorPoint,
                      children: (0, e.jsx)("div", {
                        className: (0, h.A)(
                          r().CapsuleImageCtn,
                          r().WithCornerShine,
                        ),
                        children: (0, e.jsx)("img", {
                          loading: "lazy",
                          src: (0, re.b0)(Ke, "header"),
                          alt: Oe?.name,
                        }),
                      }),
                    }),
                  !fe &&
                    !pe &&
                    (0, e.jsx)("div", {
                      className: r().Price,
                      children: (0, e.jsx)(U.NF, {
                        id: V,
                        onlyOneDiscountPct: !0,
                      }),
                    }),
                ],
              }),
              (0, e.jsx)("div", {
                className: r().BottomShelfOffScreen,
                ref: $e,
                children: (0, e.jsxs)("div", {
                  className: r().TextContent,
                  children: [
                    (0, e.jsx)("a", {
                      href: ae,
                      onClick: (xe) => {
                        ye && xe.preventDefault();
                      },
                      "aria-disabled": ye,
                      children: (0, e.jsx)("div", {
                        className: r().GameTitle,
                        children: Oe?.name || se,
                      }),
                    }),
                    He && (0, e.jsx)(ut, { id: V }),
                    (0, e.jsx)(it, { id: V }),
                    !Ae && (0, e.jsx)(X.J, { id: V }),
                    !!(!Ae && Fe) &&
                      (0, e.jsxs)("div", {
                        className: r().ReviewsAndRelease,
                        children: [
                          (0, e.jsx)(ot.Q, {
                            id: V,
                            strClassName: r().PlatformDisplay,
                          }),
                          (0, e.jsx)(ct, { id: V }),
                        ],
                      }),
                    le &&
                      (0, e.jsx)(ne.j, { id: V, className: r().DemoButton }),
                    !!(Ae && Ze) &&
                      (0, e.jsx)(qe.Pj, {
                        id: V,
                        compatibility: Ve,
                        onShowDialog: be,
                      }),
                    !!ie && ie,
                    pe &&
                      Ze &&
                      V &&
                      "appid" in V &&
                      V.appid &&
                      (0, e.jsx)(O.E, { appid: V.appid, bIsMuted: !1 }),
                    Me && (0, e.jsx)(z.Q, { nCreatorAccountID: Me }),
                  ],
                }),
              }),
            ],
          });
        }
        function ct(te) {
          const { id: V } = te,
            { data: Y } = (0, R.by)(V);
          if (!Y) return null;
          const se = (0, tt.CC)(Y);
          return (0, e.jsx)("div", {
            className: r().ReleaseDate,
            children: se,
          });
        }
        function ut(te) {
          const { id: V } = te,
            { data: Y } = (0, R.wl)(V);
          return Y
            ? (0, e.jsx)("div", {
                className: r().ShortDescription,
                children: Y?.short_description,
              })
            : null;
        }
        function dt(te) {
          const {
              id: V,
              displayID: Y,
              strStoreUrl: se,
              bHideBottomHalf: ae,
              bShowDeckCompatibilityDialog: ie,
              eHardwareCompatibilityDisplay: le,
              bShowWishlistButton: me = !0,
              bShowIgnoreButton: fe = !1,
            } = te,
            { data: Se } = (0, R.Yo)(V),
            { data: Ee } = (0, R.j4)(V),
            he = Se === void 0 && Ee === void 0,
            [pe] = (0, Qe.zG)(!!ie, le);
          return (0, e.jsxs)("div", {
            className: (0, h.A)(
              r().GameHoverCapsuleCtn,
              he && r().Loading,
              rt().InGameHover,
              ae && r().UseHidingBottomHalf,
            ),
            children: [
              (0, e.jsxs)("a", {
                href: se,
                className: r().TrailerAnchorStoreLink,
                children: [
                  !!(me && !pe) && (0, e.jsx)(q.E, { id: Y, snr: te.strSNR }),
                  !!(fe && !pe) && (0, e.jsx)(K, { id: Y, snr: te.strSNR }),
                  V && (0, e.jsx)(Pe, { id: V }),
                ],
              }),
              (0, e.jsx)(lt, { ...te }),
            ],
          });
        }
        function mt(te) {
          const {
              id: V,
              name: Y,
              bPreventNavigation: se,
              elElementToAppend: ae,
              bShowDemoButton: ie,
              bPreferDemoStorePage: le,
              bHidePrice: me,
              bUseSubscriptionLayout: fe,
              strExtraParams: Se,
              children: Ee,
              nCreatorAccountID: he,
              nWidthMultiplier: pe,
              bShowDeckCompatibilityDialog: Me,
              eHardwareCompatibilityDisplay: ye,
              bShowWishlistButton: He = !0,
              bShowIgnoreButton: Ne = !1,
              bShowDescription: be = !1,
              ...we
            } = te,
            { data: Ce } = (0, R.J$)(V),
            We = (0, a.Qn)(),
            [Je, Xe, $e] = (0, n.uD)(),
            { strStoreURL: Oe, snr: Ke } = (0, et.x)(Ce, le);
          if ((!Ce && !Y) || We)
            return (0, e.jsx)(e.Fragment, { children: Ee });
          let Fe = V;
          Ce &&
            Ce.item_type == E.c6.RD &&
            Ce.included_appids?.length == 1 &&
            (Fe = { appid: Ce.included_appids[0] });
          const Ze = $() == "hiding",
            Ae = se || !Ce ? void 0 : Oe,
            [, Ve] = (0, Qe.zG)(Me, ye);
          let xe;
          Ve != at.iA &&
            Ce?.appid &&
            Ce?.item_type == E.c6.qI &&
            (xe = Ce.appid);
          const Ct = {
              id: V,
              displayID: Fe,
              name: Y,
              bPreventNavigation: se,
              strStoreUrl: Ae,
              elElementToAppend: ae,
              bShowDemoButton: ie,
              bShowDeckCompatibilityDialog: Me,
              eHardwareCompatibilityDisplay: ye,
              bHideBottomHalf: Ze,
              bHidePrice: me,
              bUseSubscriptionLayout: fe,
              strSNR: Ke,
              nCreatorAccountID: he,
              bShowWishlistButton: He,
              bShowIgnoreButton: Ne,
              bShowDescription: be,
              onShowDeckCompatibilityDialog: xe ? Xe : void 0,
            },
            ft = (0, e.jsx)(dt, { ...Ct }),
            gt = Ae ? (0, e.jsx)("a", { href: Ae, children: Ee }) : Ee;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(F, {
                hoverContent: ft,
                nWidthMultiplier: pe,
                ...we,
                children: gt,
              }),
              xe &&
                (0, e.jsx)(qe.cO, {
                  nAppID: xe,
                  appName: Ce?.name || Y,
                  startingTab: Ve,
                  active: Je,
                  closeModal: $e,
                }),
            ],
          });
        }
      },
      63026: (w, N, t) => {
        "use strict";
        t.d(N, { Q: () => v });
        var e = t(7850),
          n = t(55483),
          E = t(10985),
          o = t(35413),
          f = t(72147),
          g = t(64769),
          x = t.n(g),
          C = t(36707);
        function v(T) {
          const {
              nCreatorAccountID: h,
              classOverride: i,
              styleOverride: a,
              followType: s,
            } = T,
            { data: r } = (0, n.TB)(h),
            { data: m } = (0, E.A5)(h);
          if (!r || !m) return null;
          const S =
            r.avatar_medium_url ||
            r.avatar_full_url ||
            (0, o.t)(void 0, "medium");
          return (0, e.jsxs)("div", {
            className: (0, C.A)(x().GameHoverCreatorFollowButtonCtn, i),
            style: a,
            children: [
              (0, e.jsx)("a", {
                href: (0, E.LO)(m, "developer"),
                children: (0, e.jsx)("img", { src: S, alt: r.group_name }),
              }),
              (0, e.jsx)(f.of, { clanAccountID: h, followType: s }),
            ],
          });
        }
      },
      80104: (w, N, t) => {
        "use strict";
        t.d(N, { J: () => m });
        var e = t(7850),
          n = t(84346),
          E = t(55051),
          o = t(48156),
          f = t(83784),
          g = t(40358),
          x = t(29522),
          C = t(12818),
          v = t(71421),
          T = t(36707),
          h = t(64769),
          i = t.n(h),
          a = t(39905),
          s = t(72609),
          r = t(32994);
        function m(M) {
          const { id: I, bTruncateTotalReviews: L, bShowTooltip: F } = M,
            { data: J } = (0, g.ik)(I),
            { data: H } = (0, g.J$)(I),
            $ = (0, x.h0)(I),
            { data: k } = (0, g.J$)($),
            { data: Z } = (0, r.lI)();
          if (!J || !H || (H.type == o.uE.ue && !(0, f.J)(k))) return null;
          let U = J.summary_unfiltered || J.summary_filtered,
            X = "#ReviewScore_UserReviewScoreAria",
            ne = !1;
          const O = a.Z.Localize("#Language_" + s.TS.LANGUAGE);
          if (
            (S(Z?.preferences?.review_score_preference) &&
              (J.summary_language_specific
                ? ((ne = !0),
                  (X = "#ReviewScore_UserReviewScoreAria_LanguageSpecific"),
                  (U = J.summary_language_specific))
                : (U = J.summary_filtered)),
            !U || !U.review_score)
          )
            return null;
          let z = i().ReviewScoreNone;
          U.review_score > 0 && U.review_score < o.j6.hc
            ? (z = i().ReviewScoreLow)
            : U.review_score == o.j6.hc
              ? (z = i().ReviewScoreMixed)
              : (z = i().ReviewScoreHigh);
          const q = `${s.TS.STORE_BASE_URL}app/${H.appid}/#app_reviews_hash`,
            b = (0, e.jsxs)("div", {
              className: (0, T.A)(i().ReviewScoreValue, z),
              children: [
                (0, e.jsx)("div", {
                  className: i().ReviewScoreLabel,
                  "aria-label": a.Z.Localize(X, U.review_score_label, O),
                  children: U.review_score_label,
                }),
                (0, e.jsxs)("div", {
                  className: i().ReviewScoreCount,
                  "aria-label": a.Z.Localize(
                    "#GameHover_UserReviewCount",
                    U.review_count.toLocaleString((0, n.J)()),
                  ),
                  children: [
                    "(",
                    L
                      ? "(" + U.review_count.toLocaleString((0, n.J)()) + ")"
                      : ne
                        ? a.Z.Localize(
                            "#GameHover_UserReviewCount_Lang",
                            U.review_count.toLocaleString((0, n.J)()),
                            O,
                          )
                        : a.Z.Localize(
                            "#GameHover_UserReviewCount",
                            U.review_count.toLocaleString((0, n.J)()),
                          ),
                    ")",
                  ],
                }),
                !L &&
                  (0, e.jsxs)("div", {
                    className: i().ReviewScoreHeader,
                    children: [
                      " ",
                      a.Z.Localize("#GameHover_UserReviewsHeader"),
                    ],
                  }),
              ],
            });
          let l = "#ReviewScore_PercentPositive";
          if (H.item_type === o.c6.xO)
            l = "#ReviewScore_PercentPositive_bundle";
          else if (H.item_type === o.c6.qI)
            switch (H.type) {
              case o.uE.Sv:
                l = "#ReviewScore_PercentPositive_software";
                break;
              case o.uE.Wz:
                l = "#ReviewScore_PercentPositive_video";
                break;
              case o.uE.Hk:
                l = "#ReviewScore_PercentPositive_hardware";
                break;
              case o.uE.gQ:
                l = "#ReviewScore_PercentPositive_series";
                break;
            }
          return (0, e.jsx)(C.q, {
            url: q,
            className: (0, T.A)(i().ReviewScore, "ReviewScore"),
            children:
              F && U.percent_positive != null && U.review_count != null && l
                ? (0, e.jsx)(v.he, {
                    bTopmost: !0,
                    toolTipContent: a.Z.Localize(
                      l,
                      U.percent_positive,
                      U.review_count,
                    ),
                    children: b,
                  })
                : b,
          });
        }
        function S(M) {
          return M === void 0 || M === E.Wf.SL || M === E.Wf.cG;
        }
      },
      44267: (w, N, t) => {
        "use strict";
        t.d(N, { E: () => M });
        var e = t(7850),
          n = t(19298),
          E = t(48156),
          o = t(89926),
          f = t(40358),
          g = t(29522),
          x = t(24179),
          C = t(54528),
          v = t(96362),
          T = t(90626),
          h = t(36118),
          i = t(47689),
          a = t(36707),
          s = t(3166),
          r = t(64769),
          m = t.n(r),
          S = t(39905);
        function M(I) {
          const {
              id: L,
              snr: F,
              classOverride: J,
              styleOverride: H,
              bShowInGamepadUI: $,
            } = I,
            { data: k } = (0, f.J$)(L),
            { elDialogElement: Z, fnShowLogonDialog: U } = (0, o.l)(),
            [X, ne] = (0, T.useState)(() => {
              if (
                k &&
                (k.type == E.uE.ue || k.type == E.uE.Vi) &&
                k.related_items?.parent_appid
              )
                return k.related_items?.parent_appid;
              if (L && "appid" in L) return L.appid;
            }),
            O = (0, g.$5)(X),
            z = (0, C.bB)(X),
            { bIsOwned: q } = (0, x.ZJ)(O),
            [b, l] = (0, T.useState)(!1),
            y = (0, i.m)("GameHoverWishlistButton"),
            { mutateAsync: B } = (0, v.s)(X, !z, F);
          (0, T.useEffect)(() => {
            L &&
              "appid" in L &&
              (k?.type == E.uE.ue || k?.type == E.uE.Vi) &&
              ne(k.related_items?.parent_appid || L.appid);
          }, [k, L]);
          const c = (0, T.useCallback)(
            async (u) => {
              s.iA.logged_in
                ? (u.preventDefault(),
                  u.stopPropagation(),
                  l(!0),
                  await B(),
                  y.token.reason || l(!1))
                : U();
            },
            [y.token.reason, U, B],
          );
          return q && k?.type != E.uE.Hk
            ? null
            : (0, e.jsxs)(n.Z, {
                className: (0, a.A)(
                  m().WishlistButton,
                  $ && m().ShowInGamepadUI,
                  J,
                ),
                onActivate: c,
                style: H,
                children: [
                  z ? (0, e.jsx)(h.qnF, {}) : (0, e.jsx)(h.T4m, {}),
                  (0, e.jsx)("div", {
                    className: (0, a.A)(
                      m().WishlistButtonText,
                      b && m().WishlistLoadingText,
                      "WishlistButtonText",
                    ),
                    children: S.Z.Localize(
                      z ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                    ),
                  }),
                  Z,
                ],
              });
        }
      },
      74107: (w, N, t) => {
        "use strict";
        t.d(N, { F5: () => o });
        var e = t(37901);
        const n = {};
        (n.arabic = () => t.e(22940).then(t.t.bind(t, 22940, 19))),
          (n.brazilian = () => t.e(59990).then(t.t.bind(t, 59990, 19))),
          (n.bulgarian = () => t.e(38573).then(t.t.bind(t, 38573, 19))),
          (n.czech = () => t.e(40975).then(t.t.bind(t, 40975, 19))),
          (n.danish = () => t.e(38721).then(t.t.bind(t, 38721, 19))),
          (n.dutch = () => t.e(354).then(t.t.bind(t, 354, 19))),
          (n.english = () => t.e(49768).then(t.t.bind(t, 49768, 19))),
          (n.finnish = () => t.e(12931).then(t.t.bind(t, 12931, 19))),
          (n.french = () => t.e(6064).then(t.t.bind(t, 6064, 19))),
          (n.german = () => t.e(62942).then(t.t.bind(t, 62942, 19))),
          (n.greek = () => t.e(13924).then(t.t.bind(t, 13924, 19))),
          (n.hungarian = () => t.e(99441).then(t.t.bind(t, 99441, 19))),
          (n.indonesian = () => t.e(42584).then(t.t.bind(t, 42584, 19))),
          (n.italian = () => t.e(97688).then(t.t.bind(t, 97688, 19))),
          (n.japanese = () => t.e(5407).then(t.t.bind(t, 5407, 19))),
          (n.koreana = () => t.e(65815).then(t.t.bind(t, 65815, 19))),
          (n.latam = () => t.e(44287).then(t.t.bind(t, 44287, 19))),
          (n.malay = () => t.e(58160).then(t.t.bind(t, 35779, 19))),
          (n.norwegian = () => t.e(33648).then(t.t.bind(t, 33648, 19))),
          (n.polish = () => t.e(22649).then(t.t.bind(t, 22649, 19))),
          (n.portuguese = () => t.e(23629).then(t.t.bind(t, 23629, 19))),
          (n.romanian = () => t.e(81555).then(t.t.bind(t, 81555, 19))),
          (n.russian = () => t.e(11809).then(t.t.bind(t, 11809, 19))),
          (n.sc_schinese = () => t.e(98347).then(t.t.bind(t, 98347, 19))),
          (n.schinese = () => t.e(79004).then(t.t.bind(t, 79004, 19))),
          (n.spanish = () => t.e(97760).then(t.t.bind(t, 97760, 19))),
          (n.swedish = () => t.e(86881).then(t.t.bind(t, 86881, 19))),
          (n.tchinese = () => t.e(28183).then(t.t.bind(t, 28183, 19))),
          (n.thai = () => t.e(10950).then(t.t.bind(t, 10950, 19))),
          (n.turkish = () => t.e(22568).then(t.t.bind(t, 22568, 19))),
          (n.ukrainian = () => t.e(17038).then(t.t.bind(t, 17038, 19))),
          (n.vietnamese = () => t.e(62327).then(t.t.bind(t, 62327, 19)));
        async function E(x) {
          if (n[x]) return n[x]();
        }
        const o = (0, e.l)(E);
        async function f() {
          return Promise.all([o.Ready()]);
        }
        function g() {
          return useLocalizationReady(o);
        }
      },
      63803: (w, N, t) => {
        "use strict";
        t.d(N, { h: () => q });
        var e = t(7850),
          n = t(91405),
          E = t(48156),
          o = t(27894),
          f = t(40358),
          g = t(72865),
          x = t(24179),
          C = t(90626),
          v = t(83482),
          T = t(72604),
          h = t(35038),
          i = t(80613),
          a = t.n(i),
          s = t(75245);
        class r extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(y = null) {
            super(),
              r.prototype.packageid || s.Sg(r.M()),
              i.Message.initialize(this, y, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              r.sm_m ||
                (r.sm_m = {
                  proto: r,
                  fields: {
                    packageid: {
                      n: 1,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    country_code: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              r.sm_m
            );
          }
          static MBF() {
            return r.sm_mbf || (r.sm_mbf = s.w0(r.M())), r.sm_mbf;
          }
          toObject(y = !1) {
            return r.toObject(y, this);
          }
          static toObject(y, B) {
            return s.BT(r.M(), y, B);
          }
          static fromObject(y) {
            return s.Uq(r.M(), y);
          }
          static deserializeBinary(y) {
            let B = new (a().BinaryReader)(y),
              c = new r();
            return r.deserializeBinaryFromReader(c, B);
          }
          static deserializeBinaryFromReader(y, B) {
            return s.zj(r.MBF(), y, B);
          }
          serializeBinary() {
            var y = new (a().BinaryWriter)();
            return r.serializeBinaryToWriter(this, y), y.getResultBuffer();
          }
          static serializeBinaryToWriter(y, B) {
            s.i0(r.M(), y, B);
          }
          serializeBase64String() {
            var y = new (a().BinaryWriter)();
            return (
              r.serializeBinaryToWriter(this, y), y.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
          }
        }
        class m extends i.Message {
          static ImplementsStaticInterface() {}
          constructor(y = null) {
            super(),
              m.prototype.inventory_available || s.Sg(m.M()),
              i.Message.initialize(this, y, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              m.sm_m ||
                (m.sm_m = {
                  proto: m,
                  fields: {
                    inventory_available: {
                      n: 1,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    high_pending_orders: {
                      n: 2,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              m.sm_m
            );
          }
          static MBF() {
            return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
          }
          toObject(y = !1) {
            return m.toObject(y, this);
          }
          static toObject(y, B) {
            return s.BT(m.M(), y, B);
          }
          static fromObject(y) {
            return s.Uq(m.M(), y);
          }
          static deserializeBinary(y) {
            let B = new (a().BinaryReader)(y),
              c = new m();
            return m.deserializeBinaryFromReader(c, B);
          }
          static deserializeBinaryFromReader(y, B) {
            return s.zj(m.MBF(), y, B);
          }
          serializeBinary() {
            var y = new (a().BinaryWriter)();
            return m.serializeBinaryToWriter(this, y), y.getResultBuffer();
          }
          static serializeBinaryToWriter(y, B) {
            s.i0(m.M(), y, B);
          }
          serializeBase64String() {
            var y = new (a().BinaryWriter)();
            return (
              m.serializeBinaryToWriter(this, y), y.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
          }
        }
        var S;
        ((l) => {
          function y(B, c, u) {
            return B.SendMsg(
              "PhysicalGoods.CheckInventoryAvailableByPackage#1",
              (0, h.I8)(r, c, u),
              m,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          l.CheckInventoryAvailableByPackage = y;
        })(S || (S = {}));
        var M = t(80902),
          I = t(68312),
          L = t(67529),
          F = t(98609);
        const J = { high_pending_orders: !1, inventory_available: !0 };
        function H(l) {
          const y = (0, I.rW)(),
            { data: B } = (0, f.J$)(l),
            c = (0, M.I)({
              queryKey: [
                B?.id || L.sc,
                B?.type || "invalid",
                B?.item_type || "invalid",
              ],
              queryFn: () => $(B, y),
              enabled: !!(B && B.type === E.uE.Hk),
            });
          return c.isLoading ? null : c.data;
        }
        async function $(l, y) {
          if (!l || l.item_type !== E.c6.RD || l.type !== E.uE.Hk) return J;
          const B = h.w.Init(r);
          B.Body().set_packageid(l.id || 0),
            B.Body().set_country_code(F.iA.country_code);
          const c = await S.CheckInventoryAvailableByPackage(y, B);
          if (c.GetEResult() !== T.R)
            throw (
              (console.error(
                "Received error from FetchPhysicalGoodsStock",
                c.GetEResult(),
              ),
              new Error(
                `Error from FetchPhysicalGoodsStock: ${c.GetEResult()}`,
              ))
            );
          return c.Body().toObject();
        }
        var k = t(53107),
          Z = t(36707),
          U = t(3166),
          X = t(85599),
          ne = t(95706),
          O = t.n(ne),
          z = t(39905);
        function q(l) {
          const { id: y, className: B } = l,
            c = (0, g.n9)(),
            { data: u } = (0, f.J$)(y),
            { data: A } = (0, f.by)(y),
            { data: j } = (0, f.EO)(y),
            D = H(y),
            { bIsOwned: p } = (0, x.ZJ)(y),
            K = (0, o.n)(u),
            de = (0, C.useCallback)(() => {
              if (u) {
                let oe = u.appid;
                u.related_items?.parent_appid &&
                  u.type != E.uE.Ov &&
                  (oe = u.related_items.parent_appid),
                  (0, k.Id)(window, `steam://run/${oe}`);
              }
            }, [u]);
          if (!u || !A || !j || u.type == E.uE.gQ) return null;
          const re =
            u.is_free ||
            (j.final_price_in_cents != null && j.final_price_in_cents == "0") ||
            (j.discount_pct && j.discount_pct >= 100);
          if (u.item_type == E.c6.RD) {
            if (u.type == E.uE.Hk)
              if (D) {
                if (!D.inventory_available)
                  return (0, e.jsx)("div", {
                    className: (0, Z.A)(O().ActionOutOfStock, B),
                    children: (0, e.jsxs)("span", {
                      children: [" ", z.Z.Localize("#Sale_ReserveExhausted")],
                    }),
                  });
              } else
                return (0, e.jsx)(X.t, { size: "small", position: "center" });
            else if (re && u.included_appids && u.included_appids.length > 1)
              return null;
          }
          if (u.item_type == E.c6.qI) {
            if ((A.is_coming_soon && !j.packageid) || (p && u.type === E.uE.Hk))
              return null;
            if (!p && j.is_free_to_keep)
              if (U.TS.IN_CLIENT || (0, U.yK)() != "store") {
                const oe = `${U.TS.IN_CLIENT ? "steam://openurl/" : ""}${K}`;
                return (0, e.jsx)("div", {
                  onClick: (_) => (0, k.Id)(_, oe),
                  className: (0, Z.A)(O().Action, B),
                  children: (0, e.jsx)("span", {
                    children: z.Z.Localize(
                      "#EventDisplay_CallToAction_VisitStore",
                    ),
                  }),
                });
              } else {
                const oe = (0, v.wJ)(
                  `${U.TS.STORE_BASE_URL}freelicense/addfreelicense`,
                  c,
                );
                return (0, e.jsxs)("form", {
                  action: oe,
                  method: "POST",
                  children: [
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: "subid",
                      value: j.packageid,
                    }),
                    (0, e.jsx)("input", {
                      type: "hidden",
                      name: "sessionid",
                      value: (0, U.KC)(),
                    }),
                    (0, e.jsx)("button", {
                      className: (0, Z.A)(O().Action, B),
                      type: "submit",
                      children: z.Z.Localize(
                        "#EventDisplay_CallToAction_AddToAccount",
                      ),
                    }),
                  ],
                });
              }
            if ((p || re) && !u.is_coming_soon) {
              let oe = z.Z.Localize(
                "#EventDisplay_CallToAction_PlayNowForFree",
              );
              return (
                p
                  ? (oe = z.Z.Localize("#EventDisplay_CallToAction_PlayNow"))
                  : u.is_free_temporarily &&
                    (oe = z.Z.Localize(
                      "#EventDisplay_CallToAction_AddToAccount",
                    )),
                (0, e.jsx)("div", {
                  className: (0, Z.A)(O().Action, B),
                  onClick: de,
                  children: (0, e.jsx)("span", { children: oe }),
                })
              );
            }
            if (j.formatted_final_price == "")
              return (0, e.jsx)("a", {
                href: K,
                className: (0, Z.A)(O().Action, B),
                children: z.Z.Localize("#EventDisplay_CallToAction_VisitStore"),
              });
          }
          return (0, e.jsx)(b, {
            className: B,
            storeItemBestPurchaseOption: j,
            storeItemDefaultData: u,
          });
        }
        function b(l) {
          const {
              className: y,
              storeItemBestPurchaseOption: B,
              storeItemDefaultData: c,
            } = l,
            u = (0, g.n9)(),
            { mutate: A } = (0, n.A)(
              B?.packageid,
              B?.bundleid,
              !1,
              void 0,
              u.feature,
            );
          return (0, e.jsx)("div", {
            className: (0, Z.A)(O().Action, y),
            onClick: () => A(),
            children: (0, e.jsx)("span", {
              children: z.Z.Localize("#Store_AddToCart"),
            }),
          });
        }
      },
      27284: (w, N, t) => {
        "use strict";
        t.d(N, { j: () => de });
        var e = t(7850),
          n = t(72609),
          E = t(48156),
          o = t(40358),
          f = t(13977),
          g = t(71421),
          x = t(36707),
          C = t(63803),
          v = t(72365),
          T = t.n(v),
          h = t(13620),
          i = t(99412),
          a = t(64868),
          s = t(66243),
          r = t(29522),
          m = t(24179),
          S = t(20125),
          M = t(90626),
          I = t(33405),
          L = t(23761),
          F = t(25792),
          J = t(16346),
          H = t(18210),
          $ = t(34360),
          k = t(58579),
          Z = t.n(k);
        const U = {
          bFitToWindow: !0,
          bOverlapHorizontal: !0,
          bMatchWidth: !1,
          bShiftToFitWindow: !0,
          bDisablePopTop: !0,
        };
        function X(re) {
          const { setRemoteClientID: oe, rgSessions: _ } = re,
            d = (0, M.useCallback)(
              (R) => {
                _?.length &&
                  (0, J.lX)(
                    (0, e.jsx)(ne, {
                      sessions: _,
                      setRemoteDownloadClientId: oe,
                    }),
                    R,
                    U,
                  );
              },
              [oe, _],
            );
          return _?.length
            ? (0, e.jsx)("button", {
                onClick: d,
                className: Z().ClientSelectDropdown,
                children: (0, e.jsx)(z, {}),
              })
            : null;
        }
        function ne({ sessions: re, setRemoteDownloadClientId: oe }) {
          return (0, e.jsx)("ul", {
            className: Z().ClientListDropdownMenu,
            children: re.map((_) =>
              (0, e.jsx)(
                $.kt,
                {
                  onSelected: () => {
                    oe(_.client_instanceid);
                  },
                  children: (0, H.we)(
                    "#GamesList_Client_Indicator",
                    O(_.device_type) ?? "",
                    _.machine_name,
                  ),
                },
                _.client_instanceid,
              ),
            ),
          });
        }
        function O(re) {
          switch (re) {
            case i.g0U:
              return (0, H.we)("#Library_DeviceType_PC");
            case i.LS$:
              return (0, H.we)("#Library_DeviceType_SteamDeck");
            case i.bOm:
              return (0, H.we)("#Library_DeviceType_SteamMachine");
            case i.jYC:
              return (0, H.we)("#Library_DeviceType_SteamFrame");
            default:
              return;
          }
        }
        function z(re) {
          return (0, e.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13 8",
            fill: "none",
            ...re,
            children: (0, e.jsx)("path", {
              fill: "currentColor",
              d: "M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z",
            }),
          });
        }
        var q = t(96538),
          b = t(36118),
          l = t(85599),
          y = t(98609),
          B = t(39285),
          c = t.n(B);
        function u(re) {
          const { appid: oe } = re,
            _ = (0, r.$5)(oe),
            { data: d } = (0, o.J$)(_),
            [R, P, G] = (0, a.uD)(!1),
            { mutateAsync: Q } = (0, h.S)({ appid: oe }),
            [ee, ce] = (0, M.useState)(!1),
            ue = (0, m.S6)(oe);
          return !d || ue
            ? null
            : (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)(s.sP, {
                    onClick: async () => {
                      try {
                        ce(!0), await Q(), (0, S.WZ)(), ce(!1), P();
                      } catch (W) {
                        ce(!1),
                          console.error(
                            "Error AddToLibraryActionWithRemoteInstall",
                            W,
                          );
                      }
                    },
                    children: [
                      ee && (0, e.jsx)(l.t, { size: "small" }),
                      (0, H.we)("#Sale_AddToLibrary_NoPlus"),
                    ],
                  }),
                  (0, e.jsx)(F.tH, {
                    children: (0, e.jsx)(q.EN, {
                      active: R,
                      children: (0, e.jsx)(q.o0, {
                        strTitle: (0, H.we)("#Sale_AddedToLibrary"),
                        strDescription: (0, H.PP)(
                          "#Sale_AddToLibrary_DialogDesc",
                          (0, e.jsx)("span", {
                            className: c().GameName,
                            children: d.name || "",
                          }),
                        ),
                        closeModal: G,
                        bAlertDialog: !0,
                        children: (0, e.jsx)(A, { id: _ }),
                      }),
                    }),
                  }),
                ],
              });
        }
        function A(re) {
          const { id: oe } = re,
            _ = (0, L.Vc)(),
            [d, R] = (0, M.useState)(0),
            [P, G] = (0, M.useState)(!1),
            { data: Q } = (0, o.qI)(oe);
          if (!oe || !("appid" in oe) || y.TS.IN_CLIENT || !Q) return null;
          const ee = _.data?.sessions?.filter((ce) => {
            switch (ce.device_type) {
              default:
              case i.g0U:
                {
                  if (!ce.os_type) return !1;
                  const ue = (0, I.gU)(ce.os_type);
                  if (Q.windows && ue.includes("Windows")) return !0;
                  if (Q.mac && ue.includes("Mac")) return !0;
                  if (Q.steamos_linux && ue.includes("Linux")) return !0;
                }
                break;
              case i.LS$:
                return Q.windows || Q.steamos_linux;
            }
            return !1;
          });
          if (ee && ee?.length > 0) {
            const ce = ee[d];
            return (0, e.jsx)("div", {
              className: c().RemoteOptions,
              children: P
                ? (0, e.jsx)(D, { session: ce })
                : (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsx)(j, {
                        rgAcceptableSession: ee,
                        session: ce,
                        setSessionIndex: R,
                      }),
                      (0, e.jsx)("div", {
                        className: c().ActionRow,
                        children: (0, e.jsx)(p, {
                          appid: oe.appid,
                          session: ce,
                          setRemoteDownloadRequested: G,
                        }),
                      }),
                    ],
                  }),
            });
          }
          return null;
        }
        function j(re) {
          const {
            rgAcceptableSession: oe,
            session: _,
            setSessionIndex: d,
          } = re;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                children: (0, H.we)("#Sale_AddToLibrary_RemoteDownload"),
              }),
              (0, e.jsxs)("div", {
                className: c().ClientSelector,
                children: [
                  (0, e.jsx)("span", {
                    className: c().ClientName,
                    children: _.machine_name,
                  }),
                  (0, e.jsx)(X, {
                    rgSessions: oe,
                    setRemoteClientID: (R) => {
                      const P = oe.findIndex((G) => G.client_instanceid === R);
                      P >= 0 && d(P);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function D(re) {
          const { session: oe } = re;
          return (0, e.jsxs)("div", {
            className: c().DownloadStartedCtn,
            children: [
              (0, H.we)("#Sale_AddToLibrary_DownloadStarted"),
              (0, e.jsx)("br", {}),
              (0, e.jsx)("a", {
                href: `${y.TS.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${oe.client_instanceid}`,
                children: (0, H.we)("#Sale_AddToLibrary_SeeDownloadProgress"),
              }),
            ],
          });
        }
        function p(re) {
          const { appid: oe, session: _, setRemoteDownloadRequested: d } = re,
            R = (0, L.we)(oe, _.client_instanceid);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsxs)(s.sP, {
                onClick: () => {
                  R.mutateAsync(), d(!0);
                },
                children: [
                  (0, e.jsx)(b.f5X, {}),
                  (0, H.we)("#Button_StartDownload"),
                ],
              }),
              (0, e.jsx)("div", {
                className: c().LearnMoreCtn,
                children: (0, e.jsx)("a", {
                  href: "https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409",
                  className: c().InlineLink,
                  children: (0, H.we)("#Button_Learn"),
                }),
              }),
            ],
          });
        }
        var K = t(39905);
        function de(re) {
          const { id: oe, className: _ } = re,
            { data: d } = (0, o.J$)(oe);
          if (!d) return null;
          const R =
              d.related_items?.demo_appid && d.related_items.demo_appid
                ? d.related_items.demo_appid
                : [],
            P = R.length > 0,
            G = P || d.type === E.uE.ue,
            Q = G
              ? K.Z.Localize("#Sale_InstallDemo_ttip", d.name || "")
              : P
                ? K.Z.Localize("#Sale_CannotInstallDemo_ttip", d.name || "")
                : K.Z.Localize("#Loading");
          if (n.TS.IN_MOBILE_WEBVIEW) {
            if (G && P) {
              const ee = d.type === E.uE.ue ? d.appid : R[0];
              return (0, e.jsx)("div", {
                className: _,
                children: (0, e.jsx)(u, { appid: ee }),
              });
            }
            return null;
          }
          return !G && P && d.is_free
            ? (0, e.jsx)(C.h, { id: oe, className: _ })
            : (0, e.jsx)(g.he, {
                toolTipContent: Q,
                onClick: (ee) => {
                  ee.preventDefault(),
                    ee.stopPropagation(),
                    G && (0, f.o)(d.type === E.uE.ue ? d.appid : R[0], d.name);
                },
                className: (0, x.A)(
                  _,
                  T().DemoButton,
                  !G && T().DisabledButton,
                ),
                children: G
                  ? K.Z.Localize("#Sale_InstallDemo")
                  : K.Z.Localize("#Sale_DemoNotFound"),
              });
        }
      },
      29245: (w, N, t) => {
        "use strict";
        t.d(N, { Q: () => v });
        var e = t(7850),
          n = t(39905),
          E = t(40358),
          o = t(76532),
          f = t.n(o),
          g = t(36118),
          x = t(36707),
          C = t(72609);
        function v(T) {
          const {
              id: h,
              strClassName: i,
              bMinimizePlatforms: a,
              bHideWindows: s,
            } = T,
            { data: r } = (0, E.qI)(h);
          if (!r) return null;
          if (a) {
            let m = s
              ? null
              : r?.windows &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Windows"),
                  children: (0, e.jsx)(g.Xz0, {
                    "aria-label": n.Z.Localize("#Platform_Windows"),
                  }),
                });
            return (
              C.TS.PLATFORM === "linux" && r?.steamos_linux
                ? (m = (0, e.jsx)("span", {
                    title: n.Z.Localize("#Platform_Linux"),
                    children: (0, e.jsx)(g.Qte, {
                      "aria-label": n.Z.Localize("#Platform_Linux"),
                    }),
                  }))
                : C.TS.PLATFORM === "macos" && r?.mac
                  ? (m = (0, e.jsx)("span", {
                      title: n.Z.Localize("#Platform_Mac"),
                      children: (0, e.jsx)(g.kPc, {
                        "aria-label": n.Z.Localize("#Platform_Mac"),
                      }),
                    }))
                  : r.vr_support?.vrhmd &&
                    (m = (0, e.jsx)("span", {
                      title: n.Z.Localize("#Platform_VR"),
                      children: (0, e.jsx)(g.VR, {
                        "aria-label": n.Z.Localize("#Platform_VR"),
                      }),
                    })),
              m
                ? (0, e.jsx)("span", {
                    className: (0, x.A)(f().CapsulePlatform, i),
                    children: m,
                  })
                : null
            );
          }
          return (0, e.jsxs)("span", {
            className: (0, x.A)(f().CapsulePlatform, i),
            children: [
              !s &&
                r.windows &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Windows"),
                  children: (0, e.jsx)(g.Xz0, {
                    "aria-label": n.Z.Localize("#Platform_Windows"),
                  }),
                }),
              r.mac &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Mac"),
                  children: (0, e.jsx)(g.kPc, {
                    "aria-label": n.Z.Localize("#Platform_Mac"),
                  }),
                }),
              r.steamos_linux &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_Linux"),
                  children: (0, e.jsx)(g.Qte, {
                    "aria-label": n.Z.Localize("#Platform_Linux"),
                  }),
                }),
              r.vr_support?.vrhmd &&
                (0, e.jsx)("span", {
                  title: n.Z.Localize("#Platform_VR"),
                  children: (0, e.jsx)(g.VR, {
                    "aria-label": n.Z.Localize("#Platform_VR"),
                  }),
                }),
            ],
          });
        }
      },
      48357: (w, N, t) => {
        "use strict";
        t.d(N, { AO: () => L, NF: () => I });
        var e = t(7850),
          n = t(48156),
          E = t(3348),
          o = t(81055),
          f = t(40358),
          g = t(11512),
          x = t(76532),
          C = t.n(x),
          v = t(36118),
          T = t(56718),
          h = t(71421),
          i = t(36707),
          a = t(39905),
          s = t(74107),
          r = t(72609),
          m = t(33220),
          S = t(86681),
          M = t(1706);
        function I(J) {
          const { id: H, bSelfPurchaseOption: $ } = J,
            { data: k } = (0, f.Q_)(H),
            { data: Z } = (0, f.J$)(H);
          if (!Z) return null;
          const U = $ && Z.item_type == n.c6.RD ? Z.self_purchase_option : k;
          return (0, e.jsx)(L, { purchaseOption: U, ...J });
        }
        function L(J) {
          const {
              bSingleLineMode: H,
              onlyOneDiscountPct: $,
              id: k,
              purchaseOption: Z,
              bHidePrePurchase: U,
              bHideReleaseDate: X,
              bHideIfDemo: ne,
              bPurchaseOptionDisplay: O,
              strContainerClassName: z,
              strDiscountAndPriceClassName: q,
              strPriceFormattedClassName: b,
              bPreferWholeNumbers: l,
              bSelfPurchaseOption: y,
              bHideNewTag: B,
              bPrePurchaseBesidePrice: c,
            } = J,
            u = r.TS.NOW,
            { data: A } = (0, f.by)(k),
            { data: j } = (0, f.J$)(k);
          if (!j) return null;
          const D = Z,
            p = !B && (0, o.fk)(A, u),
            K = (0, i.A)({
              [C().StoreSalePriceWidgetContainer]: !0,
              [C().SingleLineMode]: H,
              StoreSalePriceWidgetContainer: !0,
              [C().NewItem]: p,
              [C().PurchaseOption]: O,
              [z ?? ""]: !!z,
            });
          if (J.bShowInLibrary)
            return (0, e.jsx)("div", {
              className: K,
              children: (0, e.jsx)("div", {
                className: C().StoreSalePriceBox,
                children: a.Z.Localize("#EventDisplay_CallToAction_InLibrary"),
              }),
            });
          if (A && A.is_coming_soon && (!D || (!D.packageid && !D.bundleid))) {
            if (X) return null;
            const d =
              A.coming_soon_display &&
              ["text_comingsoon", "text_tba"].includes(A.coming_soon_display)
                ? (0, g.d)(A)
                : a.Z.Localize(
                    "#EventDisplay_CallToAction_ComingSoon_Date",
                    (0, E.CC)(A),
                  );
            return (0, e.jsx)("div", {
              className: K,
              children: (0, e.jsx)("div", {
                className: C().StoreSalePriceBox,
                children: d,
              }),
            });
          }
          if (j.is_free)
            if (j.is_free_temporarily) {
              if (D && D.is_free_to_keep && !D.formatted_original_price)
                return (0, e.jsx)("div", {
                  className: K,
                  children: (0, e.jsx)("div", {
                    className: C().StoreSalePriceBox,
                    children: a.Z.Localize("#EventDisplay_CallToAction_Free"),
                  }),
                });
            } else
              return j.item_type == n.c6.qI && j.type == n.uE.ue
                ? ne
                  ? null
                  : (0, e.jsxs)("div", {
                      className: K,
                      children: [
                        p &&
                          (0, e.jsx)("div", {
                            className: C().StoreSaleNewItem,
                            children: a.Z.Localize("#Flag_New"),
                          }),
                        (0, e.jsx)("div", {
                          className: C().StoreSalePriceBox,
                          children: a.Z.Localize(
                            "#EventDisplay_CallToAction_FreeDemo",
                          ),
                        }),
                      ],
                    })
                : (0, e.jsxs)("div", {
                    className: K,
                    children: [
                      p &&
                        (0, e.jsx)("div", {
                          className: C().StoreSaleNewItem,
                          children: a.Z.Localize("#Flag_New"),
                        }),
                      (0, e.jsx)("div", {
                        className: C().StoreSalePriceBox,
                        children: a.Z.Localize(
                          "#EventDisplay_CallToAction_FreeToPlay",
                        ),
                      }),
                    ],
                  });
          if (!D || !D.formatted_final_price) return null;
          let de = D.discount_pct || 0,
            re = (!$ && j.item_type == n.c6.xO && D.bundle_discount_pct) || 0,
            oe = D.formatted_final_price;
          if (l) {
            const d = (0, m.rt)(r.iA.country_code.toUpperCase()),
              R = { ...(0, S.J)(d), bWholeUnitsOnly: !0 };
            oe = (0, M.d)(Number.parseInt(D.final_price_in_cents || "0"), R);
          }
          const _ = (0, o.Nq)(A, D);
          return (0, e.jsx)(F, {
            bSingleLineMode: !!H,
            nBaseDiscountPercentage: re,
            nDiscountPercentage: de,
            bIsPrePurchase: _,
            strBestPurchaseOriginalPriceFormatted:
              D.formatted_original_price || "",
            strBestPurchasePriceFormatted: oe,
            bHideDiscountPercentForCompliance:
              !!D.hide_discount_pct_for_compliance,
            bShowNewFlag: p,
            bHidePrePurchase: !!U,
            bPrePurchaseBesidePrice: c,
            strDiscountAndPriceClassName: q,
            strPriceFormattedClassName: b,
            bPurchaseOptionDisplay: O,
          });
        }
        function F(J) {
          const {
              bSingleLineMode: H,
              nDiscountPercentage: $,
              bIsPrePurchase: k,
              nBaseDiscountPercentage: Z,
              strBestPurchaseOriginalPriceFormatted: U,
              strBestPurchasePriceFormatted: X,
              bHideDiscountPercentForCompliance: ne,
              bShowNewFlag: O,
              bHidePrePurchase: z,
              bPrePurchaseBesidePrice: q,
              strDiscountAndPriceClassName: b,
              strPriceFormattedClassName: l,
              bPurchaseOptionDisplay: y,
            } = J,
            B = ne;
          let c;
          $ &&
            (B
              ? (c = a.Z.Localize("#Discount_ARIA_Label_SpecialPrice", U))
              : (c = a.Z.Localize("#Discount_ARIA_Label", $, U, X)));
          const u = !!(($ || Z) && !B),
            A = u && !!U,
            j = u && !A && y;
          return (0, e.jsxs)("div", {
            className: (0, i.A)({
              [C().StoreSalePriceWidgetContainer]: !0,
              [C().SingleLineMode]: H,
              StoreSalePriceWidgetContainer: !0,
              [C().Discounted]: !!$,
              Discounted: !!$,
              [C().PrePurchase]: !!k,
              [C().PrePurchaseBesidePrice]: !!q,
              [C().NewItem]: !!O,
              [C().PurchaseOption]: y,
              [b ?? ""]: !!b,
            }),
            "aria-label": c,
            children: [
              !!(k && !z) &&
                (0, e.jsx)("div", {
                  className: (0, i.A)(
                    C().StoreSalePrepurchaseLabel,
                    "StoreSalePrepurchaseLabel",
                  ),
                  children: (0, e.jsxs)("span", {
                    children: [
                      (0, e.jsx)(T.zD7, {}),
                      a.Z.Localize(
                        "#EventDisplay_CallToAction_Prepurchase_Short",
                      ),
                    ],
                  }),
                }),
              !!(!k && O) &&
                (0, e.jsx)("div", {
                  className: C().StoreSaleNewItem,
                  children: a.Z.Localize("#Flag_New"),
                }),
              !!(Z && !B) &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(h.Gq, {
                      toolTipContent: a.Z.Localize(
                        "#Sale_Bundle_Discount_ttip",
                      ),
                      children: (0, e.jsx)("span", {
                        className: (0, i.A)(C().BaseDiscount),
                        children: `-${Z}%`,
                      }),
                    }),
                    !!$ &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("span", { children: "\xA0" }),
                          (0, e.jsx)(h.Gq, {
                            toolTipContent: a.Z.Localize(
                              "#Sale_Bundle_Discount_Limited_ttip",
                            ),
                            children: (0, e.jsx)("span", {
                              className: (0, i.A)(C().StoreSaleDiscountBox),
                              children: `-${$}%`,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              !!(!Z && $ && !B) &&
                (0, e.jsx)("div", {
                  className: (0, i.A)(
                    C().StoreSaleDiscountBox,
                    "StoreSaleDiscountBox",
                  ),
                  children: `-${$}%`,
                }),
              !!($ && B) &&
                (0, e.jsx)("div", {
                  className: C().DiscountIconCtn,
                  children: (0, e.jsx)(v.XH_, {}),
                }),
              A || j
                ? (0, e.jsxs)("div", {
                    className: (0, i.A)(C().StoreSaleDiscountedPriceCtn),
                    children: [
                      A
                        ? (0, e.jsx)("div", {
                            className: (0, i.A)({
                              [C().SingleLineOriginalPrice]: H,
                              [C().StoreOriginalPrice]: !H,
                            }),
                            children: U,
                          })
                        : (0, e.jsx)("div", {
                            className: C().YourPriceLabel,
                            children: s.F5.Localize("#PriceDisplay_YourPrice"),
                          }),
                      (0, e.jsx)("div", {
                        className: (0, i.A)({
                          [C().StoreSalePriceBox]: !0,
                          [C().SingleLineMode]: H,
                          [l ?? ""]: !!l,
                        }),
                        children: X,
                      }),
                    ],
                  })
                : (0, e.jsx)("div", {
                    className: (0, i.A)({
                      [C().StoreSalePriceBox]: !0,
                      [l ?? ""]: !!l,
                    }),
                    children: X,
                  }),
            ],
          });
        }
      },
      41188: (w, N, t) => {
        "use strict";
        t.d(N, { n: () => T, p: () => h });
        var e = t(7850),
          n = t(99412),
          E = t(39567),
          o = t(76532),
          f = t.n(o),
          g = t(12818),
          x = t(36707),
          C = t(39905),
          v = t(72609);
        function T(a) {
          const {
            rgTagIDs: s,
            bShowEvenIfNoTags: r,
            bHideTitle: m,
            bLargeText: S,
            bNoStoreLinks: M,
          } = a;
          return s?.length > 0 || r
            ? (0, e.jsxs)("div", {
                className: (0, x.A)(
                  f().SaleTagBlockCtn,
                  S ? f().LargeText : "",
                  "SaleTagBlockCtn",
                ),
                children: [
                  !m &&
                    (0, e.jsx)("div", {
                      className: (0, x.A)(f().TagTitle, "WidgetTagTitle"),
                      children: C.Z.Localize("#GameHover_Tags"),
                    }),
                  s?.length > 0
                    ? (0, e.jsx)("div", {
                        className: (0, x.A)(f().TagBox, "TagBox"),
                        children: s.map((I) =>
                          (0, e.jsx)(i, { tagid: I, bNoStoreLinks: M }, I),
                        ),
                      })
                    : (0, e.jsx)("div", {
                        children: C.Z.Localize("#Broadcast_None"),
                      }),
                ],
              })
            : null;
        }
        function h(a) {
          const { tagid: s, className: r } = a,
            m = (0, E.MB)(s, v.TS.LANGUAGE);
          if (!m) return null;
          const S = (0, n.wwZ)((0, n.sfN)(v.TS.LANGUAGE)),
            M = `${v.TS.STORE_BASE_URL}tags/${S}/${m}`;
          return (0, e.jsx)(g.q, {
            url: M,
            className: (0, x.A)(f().Tag, "WidgetTag", r),
            children: m,
          });
        }
        function i(a) {
          const { tagid: s, className: r, bNoStoreLinks: m } = a,
            S = (0, n.wwZ)((0, n.sfN)(v.TS.LANGUAGE)),
            M = (0, E.MB)(s, v.TS.LANGUAGE),
            I = `${v.TS.STORE_BASE_URL}tags/${S}/${M}`;
          return M
            ? m
              ? (0, e.jsx)("div", {
                  className: (0, x.A)(f().Tag, "WidgetTag", r),
                  children: M,
                })
              : (0, e.jsx)(g.q, {
                  url: I,
                  className: (0, x.A)(f().Tag, "WidgetTag", r),
                  children: M,
                })
            : null;
        }
      },
      77459: (w, N, t) => {
        "use strict";
        t.d(N, { E: () => h });
        var e = t(7850),
          n = t(13620),
          E = t(29522),
          o = t(40358),
          f = t(24179),
          g = t(13977),
          x = t(76532),
          C = t.n(x),
          v = t(36707),
          T = t(18210);
        function h(i) {
          const { appid: a, bIsMuted: s } = i,
            r = (0, E.$5)(a),
            m = (0, f.S6)(a),
            { data: S } = (0, o.J$)(r),
            { mutate: M } = (0, n.S)(r),
            I = (F) => {
              F.preventDefault(), m ? (0, g.o)(a, S?.name) : M();
            },
            L = (0, v.A)(
              C().CapsuleBottomBar,
              s && C().Muted,
              m ? C().PlayNowButton : C().AddToLibraryButton,
            );
          return (0, e.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: I,
            className: L,
            onKeyDown: (F) => {
              (F.key === "Enter" || F.key === " ") &&
                (F.preventDefault(), I(F));
            },
            children: (0, T.we)(m ? "#Sale_PlayNow" : "#Sale_AddToLibrary"),
          });
        }
      },
      16179: (w, N, t) => {
        "use strict";
        t.d(N, { x: () => g });
        var e = t(47875),
          n = t(72865),
          E = t(86722),
          o = t(83482),
          f = t(77200);
        function g(x, C) {
          const v = (0, n.n9)(),
            T = (0, f.w)(),
            h = (0, E.tB)((0, e._)(x, C));
          return { snr: (0, o.L3)(v), strStoreURL: (0, o.It)(h, v, T) };
        }
      },
      12818: (w, N, t) => {
        "use strict";
        t.d(N, { F: () => T, q: () => C });
        var e = t(7850),
          n = t(24660),
          E = t(72865),
          o = t(52393),
          f = t.n(o),
          g = t(72609),
          x = t(39905);
        function C(h) {
          const {
              className: i,
              url: a,
              style: s,
              children: r,
              bSkipForcingStoreLink: m,
              bOpenInline: S,
              bFocusable: M = !0,
            } = h,
            I = m ? a : a ? v(a, g.TS.STORE_BASE_URL) : void 0,
            L = (0, E.aL)(I);
          return L
            ? (0, e.jsx)(n.Ii, {
                href: L,
                target: g.TS.IN_CLIENT || S ? void 0 : "_blank",
                className: i,
                style: s,
                rel: "noopener noreferrer",
                focusable: M,
                children: r,
              })
            : (0, e.jsx)("span", { style: s, className: i, children: r });
        }
        function v(h, i) {
          try {
            const a = new URL(i),
              s = new URL(h);
            return a.href.replace(/\/$/, "") + s.pathname + s.search + s.hash;
          } catch {
            return "";
          }
        }
        function T(h) {
          const { section: i } = h;
          return i.label_link && !i.label_link_style
            ? (0, e.jsx)("div", {
                className: f().SaleViewAll,
                children: (0, e.jsx)(C, {
                  url: i.label_link,
                  children: x.Z.Localize("#btn_live_streams_all"),
                }),
              })
            : null;
        }
      },
      66243: (w, N, t) => {
        "use strict";
        t.d(N, { Oh: () => T, n9: () => C, sP: () => f, x0: () => v });
        var e = t(7850),
          n = t(24660),
          E = t(44375),
          o = t.n(E);
        function f(i) {
          const { children: a, ...s } = i;
          return (0, e.jsx)(n.fu, {
            className: E.GreenButton,
            type: "button",
            ...s,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function g(i) {
          const { children: a, ...s } = i;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...s,
            children: jsx("span", { children: a }),
          });
        }
        function x(i) {
          const { children: a, ...s } = i;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...s,
            children: jsx("span", { children: a }),
          });
        }
        function C(i) {
          const { children: a, ...s } = i;
          return (0, e.jsx)(n.fu, {
            className: E.BlueButton,
            type: "button",
            ...s,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function v(i) {
          const { children: a, ...s } = i;
          return (0, e.jsx)(n.Ii, {
            className: E.BlueButton,
            ...s,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function T(i) {
          const { children: a, ...s } = i;
          return (0, e.jsx)(n.fu, {
            className: E.GreyButton,
            type: "button",
            ...s,
            children: (0, e.jsx)("span", { children: a }),
          });
        }
        function h(i) {
          const { children: a, ...s } = i;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...s,
            children: jsx("span", { children: a }),
          });
        }
      },
      87249: (w, N, t) => {
        "use strict";
        t.d(N, { C0: () => h, Ck: () => a, mj: () => i });
        var e = t(7850),
          n = t(48156),
          E = t(72609),
          o = t(40358),
          f = t(64238),
          g = t.n(f),
          x = t(90626),
          C = t(25046),
          v = t(73187),
          T = t.n(v),
          h = ((s) => (
            (s[(s.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (s[(s.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (s[(s.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            s
          ))(h || {});
        function i(s) {
          const { id: r, active: m, bIsHoverMode: S, eGrowOnActivate: M } = s,
            { data: I } = (0, o.J$)(r),
            L = x.useRef(0),
            F = x.useRef(null);
          x.useLayoutEffect(() => {
            m && F.current && (F.current.currentTime = L.current);
          }, [m]);
          const J = (U) => {
              L.current = U.currentTarget.currentTime;
            },
            H = (0, C.kB)(m ? r : void 0);
          if ((S && E.TS.IN_MOBILE) || !m || !I || !I.visible || !H)
            return null;
          const $ = H.filter(
            (U) => U.microtrailer && U.microtrailer.length > 0,
          );
          if ($.length === 0)
            return I &&
              I.related_items?.parent_appid &&
              (I.type == n.uE.ue || I.type == n.uE.Vi)
              ? (0, e.jsx)(i, {
                  ...s,
                  id: { appid: I.related_items.parent_appid },
                })
              : null;
          let k;
          switch (M) {
            case 1:
              k = T().GrowOnHoverImplicit;
              break;
            case 2:
              k = T().GrowOnHoverMedium;
              break;
          }
          const Z = $[0];
          return (0, e.jsx)("video", {
            className: g()(T().CapsuleMicroTrailer, k),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: F,
            playsInline: !0,
            onTimeUpdate: J,
            children: (0, e.jsx)(a, { trailer: Z }),
          });
        }
        function a(s) {
          const { trailer: r } = s;
          return !r || !r.microtrailer
            ? null
            : (0, e.jsx)(e.Fragment, {
                children: r.microtrailer?.map((m) =>
                  E.TS.IN_CLIENT && m.type == "video/mp4"
                    ? null
                    : (0, e.jsx)(
                        "source",
                        { src: (0, C.M4)(r, m.filename || ""), type: m.type },
                        m.filename,
                      ),
                ),
              });
        }
      },
      83784: (w, N, t) => {
        "use strict";
        t.d(N, { J: () => e, S: () => n });
        function e(E) {
          return E
            ? !!(
                E.related_items &&
                E.related_items.standalone_demo_appid &&
                E.related_items.standalone_demo_appid.length > 0 &&
                E.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function n(E) {
          return !E || !E.related_items?.standalone_demo_appid
            ? []
            : E.related_items?.standalone_demo_appid;
        }
      },
      3348: (w, N, t) => {
        "use strict";
        t.d(N, { CC: () => x, VM: () => o });
        var e = t(16114),
          n = t(39905),
          E = t(11512);
        function o(C) {
          return C?.is_coming_soon
            ? g(
                C.coming_soon_display,
                C.steam_release_date,
                C.custom_release_date_message,
              )
            : C?.steam_release_date
              ? (0, e.$z)(C.steam_release_date)
              : "";
        }
        function f(C) {
          return o(C.releaseInfo);
        }
        function g(C, v, T) {
          switch (C) {
            case "date_full":
              return (0, e.$z)(v);
            case "date_month":
              return (0, e.sq)(new Date(v * 1e3));
            case "date_quarter":
              return (0, e.u6)(new Date(v * 1e3));
            case "date_year":
              return (0, e.vl)(new Date(v * 1e3));
            case "text_comingsoon":
              return T || n.Z.Localize("#Store_ComingSoon_ComingSoon");
            case "text_tba":
              return T || n.Z.Localize("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
        function x(C) {
          if (!C) return "";
          if (C && C.is_coming_soon) {
            if (C.coming_soon_display) return (0, E.d)(C);
            if (C.custom_release_date_message)
              return C.custom_release_date_message;
            const T = C.steam_release_date;
            return T
              ? C.is_abridged_release_date
                ? (0, e.sq)(new Date(T * 1e3))
                : (0, e.$z)(T)
              : "";
          }
          let v = C.steam_release_date;
          return v || (v = C.original_release_date), v ? (0, e.$z)(v) : "";
        }
      },
      81055: (w, N, t) => {
        "use strict";
        t.d(N, { Nq: () => g, fk: () => f, o$: () => x });
        var e = t(44983);
        function n(C, v = !1) {
          if (C.is_coming_soon && !v) return 0;
          let T = C.steam_release_date;
          return T || (T = C.original_release_date), T;
        }
        function E(C) {
          let v = C.original_steam_release_date;
          return v || (v = n(C)), v;
        }
        const o = 7;
        function f(C, v) {
          if (!C) return !1;
          const T = n(C);
          return T ? !C.is_coming_soon && T + o * e.Kp.PerDay > v : !1;
        }
        function g(C, v) {
          return !!(C && C.is_coming_soon && v && v.packageid);
        }
        function x(C, v) {
          return !!(C && v && v.packageid);
        }
      },
      47875: (w, N, t) => {
        "use strict";
        t.d(N, { _: () => E, l: () => o });
        var e = t(72609),
          n = t(83784);
        function E(f, g = !1) {
          if (f)
            return g && (0, n.J)(f)
              ? `${e.TS.STORE_BASE_URL}app/${((0, n.S))(f)[0]}`
              : `${e.TS.STORE_BASE_URL}${f.store_url_path}`;
        }
        function o() {
          window.location.href = `${e.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      29522: (w, N, t) => {
        "use strict";
        t.d(N, {
          $5: () => C,
          AP: () => g,
          Qm: () => f,
          _Z: () => o,
          h0: () => x,
          oc: () => v,
        });
        var e = t(40358),
          n = t(48156),
          E = t(90626);
        function o(h) {
          const { data: i } = (0, e.J$)(h);
          return (0, E.useMemo)(
            () =>
              i
                ? i.item_type == n.c6.qI
                  ? [i.appid]
                  : i.included_appids || []
                : [],
            [i],
          );
        }
        function f(h) {
          if (!h?.length) return [];
          const i = h.map((a) => a.creator_clan_account_id).filter((a) => !!a);
          return Array.from(new Set(i));
        }
        function g(h) {
          const { data: i } = (0, e.J$)({ appid: h });
          return i?.appid || h;
        }
        function x(h) {
          const { data: i } = (0, e.J$)(h);
          return (0, E.useMemo)(() => {
            if (i && i.related_items && i.related_items.parent_appid)
              return { appid: i.related_items.parent_appid };
          }, [i]);
        }
        function C(h) {
          return (0, E.useMemo)(() => (h ? { appid: h } : void 0), [h]);
        }
        function v(h) {
          return (0, E.useMemo)(() => (h ? { packageid: h } : void 0), [h]);
        }
        function T(h) {
          return useMemo(() => (h ? { bundleid: h } : void 0), [h]);
        }
      },
      11996: (w, N, t) => {
        "use strict";
        t.d(N, { Fh: () => v, zg: () => T });
        var e = t(80902),
          n = t(75233),
          E = t(68312),
          o = t(98609),
          f = t(20125);
        async function g(i, a) {
          const s = (0, f.Am)(o.TS.STORE_BASE_URL, a, o.iA.country_code);
          return (await (await fetch(s)).json()).rgFollowedApps || [];
        }
        function x() {
          const i = (0, E.KV)(),
            a = o.iA.accountid;
          return (0, e.I)(C(i, a));
        }
        function C(i, a) {
          return {
            queryKey: h(a),
            queryFn: async () => {
              if (!a) return new Set();
              const s = await g(i, a);
              return new Set(s);
            },
            staleTime: 600 * 1e3,
          };
        }
        function v(i) {
          const { data: a } = x();
          return a === void 0 || i == null ? void 0 : a.has(i);
        }
        function T() {
          const i = (0, n.jE)(),
            a = o.iA.accountid;
          return (s, r) => {
            i.setQueryData(h(a), (m) => {
              if (!m) return;
              const S = new Set(m);
              if (r) for (const M of r) S.delete(M);
              if (s) for (const M of s) S.add(M);
              return S;
            });
          };
        }
        function h(i) {
          return ["AccountFollowApps", i ?? 0];
        }
      },
      19047: (w, N, t) => {
        "use strict";
        t.d(N, { L: () => g });
        var e = t(20125),
          n = t(51614),
          E = t(98609),
          o = t(67705),
          f = t(11996);
        function g(x, C, v) {
          const T = (0, f.zg)(),
            h = E.iA.accountid;
          return (0, n.n)({
            mutationKey: ["useUpdateAppFollow", x, h, C],
            mutationFn: async () => {
              if (x == null) return;
              const i = E.TS.STORE_BASE_URL + "explore/followgame",
                a = new FormData();
              a.append("appid", "" + x),
                a.append("sessionid", (0, o.KC)()),
                C || a.append("unfollow", "1"),
                v && a.append("snr", v);
              const s = await fetch(i, {
                method: "POST",
                body: a,
                credentials: "include",
              });
              if (!s.ok)
                throw new Error(
                  `Follow App ${C ? "add" : "remove"} of appid ${x} failed (${s.status})`,
                );
            },
            onMutate: () => {
              x != null && T(C ? [x] : void 0, C ? void 0 : [x]);
            },
            onError: () => {
              x != null && T(C ? void 0 : [x], C ? [x] : void 0);
            },
            onSuccess: () => {
              (0, e.WZ)();
            },
          });
        }
      },
      10134: (w, N, t) => {
        "use strict";
        t.d(N, { BD: () => v, h3: () => T });
        var e = t(80902),
          n = t(75233),
          E = t(68312),
          o = t(98609),
          f = t(20125);
        async function g(i, a) {
          const s = (0, f.Am)(o.TS.STORE_BASE_URL, a, o.iA.country_code),
            m = await (await fetch(s)).json();
          return Object.keys(m.rgIgnoredApps).map(Number) || [];
        }
        function x() {
          const i = (0, E.KV)(),
            a = o.iA.accountid;
          return (0, e.I)(C(i, a));
        }
        function C(i, a) {
          return {
            queryKey: h(a),
            queryFn: async () => {
              if (!a) return new Set();
              const s = await g(i, a);
              return new Set(s);
            },
            staleTime: 600 * 1e3,
          };
        }
        function v(i) {
          const { data: a } = x();
          return a === void 0 || i == null ? void 0 : a.has(i);
        }
        function T() {
          const i = (0, n.jE)(),
            a = o.iA.accountid;
          return (s, r) => {
            i.setQueryData(h(a), (m) => {
              if (!m) return;
              const S = new Set(m);
              if (r) for (const M of r) S.delete(M);
              if (s) for (const M of s) S.add(M);
              return S;
            });
          };
        }
        function h(i) {
          return ["AccountIgnoreApps", i ?? 0];
        }
      },
      62292: (w, N, t) => {
        "use strict";
        t.d(N, { Q: () => x });
        var e = t(20125),
          n = t(51614),
          E = t(98609),
          o = t(67705),
          f = t(10134),
          g = t(43462);
        function x(C, v, T, h = g.RI.$m) {
          const i = (0, f.h3)(),
            a = E.iA.accountid;
          return (0, n.n)({
            mutationKey: ["useUpdateAppIgnore", C, a, v],
            mutationFn: async () => {
              if (C == null) return;
              const s =
                  E.TS.STORE_BASE_URL + "recommended/ignorerecommendation",
                r = new FormData();
              r.append("appid", "" + C),
                r.append("sessionid", (0, o.KC)()),
                r.append("remove", v ? "0" : "1"),
                T && r.append("snr", T),
                r.append("ignore_reason", "" + h);
              const m = await fetch(s, {
                method: "POST",
                body: r,
                credentials: "include",
              });
              if (!m.ok)
                throw new Error(
                  `Ignore App ${v ? "add" : "remove"} of appid ${C} failed (${m.status})`,
                );
            },
            onMutate: () => {
              C != null && i(v ? [C] : void 0, v ? void 0 : [C]);
            },
            onError: () => {
              C != null && i(v ? void 0 : [C], v ? [C] : void 0);
            },
            onSuccess: () => {
              (0, e.WZ)();
            },
          });
        }
      },
      13620: (w, N, t) => {
        "use strict";
        t.d(N, { S: () => x });
        var e = t(35038),
          n = t(19563),
          E = t(48156),
          o = t(68312),
          f = t(51614),
          g = t(24179);
        function x(v) {
          const T = (0, o.KV)(),
            h = (0, g._7)();
          return (0, f.n)({
            mutationFn: () => C(T, v),
            onSuccess(i) {
              const [
                a,
                {
                  packageids_added: s,
                  appids_added: r,
                  purchase_result_detail: m,
                },
              ] = i;
              r && h(r);
            },
          });
        }
        async function C(v, T) {
          const h = e.w.Init(n.lO);
          h.Body().set_item_id(E.O4.fromObject(T));
          const i = await n._o.AddFreeLicense(v, h);
          return [i.GetEResult(), i.Body().toObject()];
        }
      },
      24179: (w, N, t) => {
        "use strict";
        t.d(N, { S6: () => s, ZJ: () => S, $Y: () => h, _7: () => r });
        var e = t(90626),
          n = t(80902),
          E = t(75233),
          o = t(68312),
          f = t(20125),
          g = t(98609);
        async function x(M, I) {
          const L = (0, f.Am)(g.TS.STORE_BASE_URL, I, g.iA.country_code);
          return (await (await fetch(L)).json()).rgOwnedApps || [];
        }
        async function C(M, I, L) {
          return (await x(M, I)).includes(L);
        }
        var v = t(40358),
          T = t(72609);
        function h() {
          const M = (0, o.KV)(),
            I = T.iA.accountid;
          return (0, n.I)(i(M, I));
        }
        function i(M, I) {
          return {
            queryKey: m(I),
            queryFn: async () => {
              if (!I) return new Set();
              const L = await x(M, I);
              return new Set(L);
            },
            staleTime: 600 * 1e3,
          };
        }
        function a(M, I, L) {
          return {
            queryKey: ["AccountOwnsApp", I, L],
            queryFn: async () => (I ? await C(M, I, L) : !1),
            staleTime: 600 * 1e3,
          };
        }
        function s(M) {
          const I = (0, o.KV)(),
            L = T.iA.accountid,
            { data: F } = (0, n.I)(a(I, L, M));
          return F === void 0 ? void 0 : F;
        }
        function r(M) {
          const I = (0, E.jE)(),
            L = T.iA.accountid;
          return e.useCallback(
            (F) => {
              I.setQueryData(m(L), (J) =>
                J ? new Set([...J.values(), ...F]) : M ? new Set(F) : void 0,
              );
            },
            [I, L, M],
          );
        }
        function m(M) {
          return ["AccountOwnedApps", M ?? 0];
        }
        function S(M) {
          const { data: I } = (0, v.J$)(M && "appid" in M ? void 0 : M),
            { data: L } = h();
          let F;
          return (
            M && "appid" in M ? (F = [M.appid]) : I && (F = I.included_appids),
            F === void 0 || L === void 0 || F.length == 0
              ? { bIsOwned: void 0, unAppID: void 0 }
              : { bIsOwned: !F.some((J) => !L.has(J)), unAppID: F[0] }
          );
        }
      },
      35675: (w, N, t) => {
        "use strict";
        t.d(N, {
          Us: () => m,
          xU: () => r,
          Gw: () => v,
          eT: () => h,
          mQ: () => i,
          BU: () => S,
        });
        var e = t(32093),
          n = t(80902),
          E = t(75233),
          o = t(68312),
          f = t(72609),
          g = t(20125),
          x = t(98609);
        async function C(I, L) {
          const F = (0, g.Am)(x.TS.STORE_BASE_URL, L, x.iA.country_code),
            H = await (await fetch(F)).json(),
            $ = new Set();
          H.rgCreatorsIgnored?.forEach((X) => $.add(X)),
            H.rgCreatorsFollowed?.forEach((X) => $.add(X));
          const k = new Set();
          return (
            H.rgCreatorsIgnored?.forEach((X) => k.add(X)),
            [
              ...(H.rgCuratorsIgnored ?? []),
              ...(H.rgCurators
                ? Object.values(H.rgCurators ?? {}).map((X) => X.clanid)
                : []),
            ].map((X) => {
              const ne = k.has(X);
              return {
                clanid: X,
                ignored: ne,
                followed: !ne,
                is_creator: $.has(X),
              };
            })
          );
        }
        function v() {
          const I = (0, o.KV)(),
            L = f.iA.accountid;
          return (0, n.I)(T(I, L));
        }
        function T(I, L) {
          return {
            queryKey: M(L),
            queryFn: async () => {
              const F = new Map();
              if (L)
                try {
                  (await C(I, L)).forEach((H) => F.set(H.clanid, H));
                } catch (J) {
                  console.error("GetCuratorAffinityQuery", J);
                }
              return F;
            },
            enabled: !!L,
          };
        }
        function h(I) {
          const { data: L } = v();
          return L === void 0 || I == null ? void 0 : !!L.get(I)?.followed;
        }
        function i(I) {
          const { data: L } = v();
          return L === void 0 || I == null ? void 0 : !!L.get(I)?.ignored;
        }
        function a(I) {
          const { data: L } = v();
          if (L === void 0 || I == null || !L.has(I)) return;
          const F = L.get(I);
          return !!(F.followed && F.is_creator);
        }
        function s(I) {
          const { data: L } = v();
          if (L === void 0 || I == null || !L.has(I)) return;
          const F = L.get(I);
          return !!(F.ignored && F.is_creator);
        }
        function r() {
          return f.TS.EREALM != e.TU.k_ESteamRealmChina;
        }
        function m() {
          return f.TS.EREALM != e.TU.k_ESteamRealmChina;
        }
        function S() {
          const I = (0, E.jE)(),
            L = f.iA.accountid;
          return (F, J, H, $) => {
            I.setQueryData(M(L), (k) => {
              if (!k) return;
              const Z = new Map(k);
              return (
                F?.forEach((U) => {
                  Z.has(U.clanAccountID)
                    ? (Z.get(U.clanAccountID).followed = !0)
                    : Z.set(U.clanAccountID, {
                        clanid: U.clanAccountID,
                        followed: !0,
                        ignored: !1,
                        is_creator: !1,
                      });
                }),
                J?.forEach((U) => {
                  Z.has(U.clanAccountID)
                    ? (Z.get(U.clanAccountID).ignored = !0)
                    : Z.set(U.clanAccountID, {
                        clanid: U.clanAccountID,
                        followed: !1,
                        ignored: !0,
                        is_creator: !1,
                      });
                }),
                H?.forEach((U) => Z.delete(U.clanAccountID)),
                $?.forEach((U) => {
                  let X = Z.get(U.clanAccountID);
                  X && (X.is_creator = !0);
                }),
                Z
              );
            });
          };
        }
        function M(I) {
          return ["CuratorAffinityQueryKey", I ?? 0];
        }
      },
      96362: (w, N, t) => {
        "use strict";
        t.d(N, { s: () => g });
        var e = t(51614),
          n = t(67705),
          E = t(54528),
          o = t(20125),
          f = t(98609);
        function g(x, C, v) {
          const T = (0, E.$3)(),
            h = f.iA.accountid;
          return (0, e.n)({
            mutationKey: ["useUpdateWishlist", x, h, C],
            mutationFn: async () => {
              if (x == null) return;
              const i =
                  f.TS.STORE_BASE_URL +
                  "api/" +
                  (C ? "addtowishlist" : "removefromwishlist"),
                a = new FormData();
              a.append("appid", "" + x),
                a.append("sessionid", (0, n.KC)()),
                v && a.append("snr", v);
              const s = await fetch(i, {
                method: "POST",
                body: a,
                credentials: "include",
              });
              if (!s.ok)
                throw new Error(
                  `Wishlist ${C ? "add" : "remove"} of appid ${x} failed (${s.status})`,
                );
            },
            onMutate: () => {
              x != null && T(C ? [x] : void 0, C ? void 0 : [x]);
            },
            onError: () => {
              x != null && T(C ? void 0 : [x], C ? [x] : void 0);
            },
            onSuccess: () => {
              (0, o.WZ)();
            },
          });
        }
      },
      54528: (w, N, t) => {
        "use strict";
        t.d(N, { bB: () => T, $3: () => h, F0: () => C });
        var e = t(80902),
          n = t(75233),
          E = t(68312),
          o = t(72609),
          f = t(20125),
          g = t(98609);
        async function x(a, s) {
          const r = (0, f.Am)(g.TS.STORE_BASE_URL, s, g.iA.country_code);
          return (await (await fetch(r)).json()).rgWishlist || [];
        }
        function C() {
          const a = (0, E.KV)(),
            s = o.iA.accountid;
          return (0, e.I)(v(a, s));
        }
        function v(a, s) {
          return {
            queryKey: i(s),
            queryFn: async () => {
              if (!s) return new Set();
              const r = await x(a, s);
              return new Set(r);
            },
            staleTime: 600 * 1e3,
          };
        }
        function T(a) {
          const { data: s } = C();
          return s === void 0 || a == null ? void 0 : s.has(a);
        }
        function h() {
          const a = (0, n.jE)(),
            s = o.iA.accountid;
          return (r, m) => {
            a.setQueryData(i(s), (S) => {
              if (!S) return;
              const M = new Set(S);
              if (m) for (const I of m) M.delete(I);
              if (r) for (const I of r) M.add(I);
              return M;
            });
          };
        }
        function i(a) {
          return ["AccountWishlistApps", a ?? 0];
        }
      },
      13977: (w, N, t) => {
        "use strict";
        t.d(N, { M: () => i, o: () => h });
        var e = t(7850),
          n = t(16412),
          E = t(96538),
          o = t(88003),
          f = t(36118),
          g = t(36707),
          x = t(18210),
          C = t(3166),
          v = t(54599),
          T = t.n(v);
        async function h(r, m) {
          const S = "steam://run/" + r;
          C.TS.IN_CLIENT
            ? (console.log(`Running game ${r} locally.`),
              (window.location.href = S))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${r}.`,
              ),
              a(r, S, m));
        }
        async function i(r, m) {
          const S = "steam://install/" + r;
          C.TS.IN_CLIENT ? (window.location.href = S) : a(r, S, m);
        }
        async function a(r, m, S) {
          console.log("prompting for", S);
          const M = C.TS.STORE_BASE_URL + "about/";
          (0, o.mK)(
            (0, e.jsx)(s, {
              appid: r,
              strGameName: S || "",
              strOnOKUrl: m,
              strDownloadSteamUrl: M,
            }),
            window,
          );
        }
        const s = (r) => {
          const m = () => r.closeModal && r.closeModal();
          return (0, e.jsx)(E.x_, {
            onEscKeypress: m,
            className: T().GotSteamDialog,
            children: (0, e.jsxs)(n.UC, {
              children: [
                (0, e.jsxs)(n.Y9, {
                  children: [" ", (0, x.we)("#GotSteam_Title"), " "],
                }),
                (0, e.jsxs)(n.nB, {
                  children: [
                    (0, e.jsx)(n.a3, {
                      children: (0, x.PP)(
                        "#GotSteam_PromptWithDownloadLink",
                        (0, e.jsx)("a", {
                          href: r.strDownloadSteamUrl,
                          className: T().DownloadSteamUrl,
                          children: (0, x.we)("#GotSteam_DownloadLinkText"),
                        }),
                        (0, e.jsx)("span", {
                          className: T().GameName,
                          children: r.strGameName,
                        }),
                      ),
                    }),
                    (0, e.jsxs)("div", {
                      className: T().Buttons,
                      children: [
                        (0, e.jsxs)("a", {
                          href: r.strOnOKUrl,
                          onClick: m,
                          className: (0, g.A)(T().Button, T().LeftButton),
                          children: [
                            (0, e.jsxs)("div", {
                              className: T().AnswerText,
                              children: [" ", (0, x.we)("#GotSteam_Yes"), " "],
                            }),
                            (0, e.jsxs)("div", {
                              className: T().ActionText,
                              children: [
                                " ",
                                (0, x.we)("#GotSteam_Yes_Play"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("a", {
                          href: r.strDownloadSteamUrl,
                          onClick: m,
                          className: T().Button,
                          children: [
                            (0, e.jsxs)("div", {
                              className: T().AnswerText,
                              children: [" ", (0, x.we)("#GotSteam_No"), " "],
                            }),
                            (0, e.jsxs)("div", {
                              className: T().ActionText,
                              children: [
                                " ",
                                (0, x.we)("#GotSteam_No_Download"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: T().Footer,
                      children: [
                        (0, e.jsx)(f.Qte, { className: T().Logo }),
                        (0, x.we)("#GotSteam_Blurb"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      74732: (w, N, t) => {
        "use strict";
        t.d(N, { g4: () => v });
        var e = t(80755),
          n = t(64415),
          E = t(8323),
          o = t(57589),
          f = t(30096),
          g = Object.defineProperty,
          x = Object.getOwnPropertyDescriptor,
          C = (s, r, m, S) => {
            for (
              var M = S > 1 ? void 0 : S ? x(r, m) : r, I = s.length - 1, L;
              I >= 0;
              I--
            )
              (L = s[I]) && (M = (S ? L(r, m, M) : L(M)) || M);
            return S && M && g(r, m, M), M;
          },
          v = ((s) => (
            (s[(s.A = 0)] = "A"),
            (s[(s.B = 1)] = "B"),
            (s[(s.X = 2)] = "X"),
            (s[(s.Y = 3)] = "Y"),
            (s[(s.Left = 4)] = "Left"),
            (s[(s.Right = 5)] = "Right"),
            (s[(s.Up = 6)] = "Up"),
            (s[(s.Down = 7)] = "Down"),
            (s[(s.HomeMenu = 8)] = "HomeMenu"),
            (s[(s.QuickMenu = 9)] = "QuickMenu"),
            (s[(s.Select = 10)] = "Select"),
            (s[(s.Start = 11)] = "Start"),
            (s[(s.LeftBumper = 12)] = "LeftBumper"),
            (s[(s.RightBumper = 13)] = "RightBumper"),
            (s[(s.LeftTrigger = 14)] = "LeftTrigger"),
            (s[(s.RightTrigger = 15)] = "RightTrigger"),
            (s[(s.LeftStick = 16)] = "LeftStick"),
            (s[(s.LeftStickClick = 17)] = "LeftStickClick"),
            (s[(s.RightStick = 18)] = "RightStick"),
            (s[(s.RightStickClick = 19)] = "RightStickClick"),
            (s[(s.LeftTrackpad = 20)] = "LeftTrackpad"),
            (s[(s.LeftTrackpadClick = 21)] = "LeftTrackpadClick"),
            (s[(s.RightTrackpad = 22)] = "RightTrackpad"),
            (s[(s.RightTrackpadClick = 23)] = "RightTrackpadClick"),
            (s[(s.RearLeftUpper = 24)] = "RearLeftUpper"),
            (s[(s.RearLeftLower = 25)] = "RearLeftLower"),
            (s[(s.RearRightUpper = 26)] = "RearRightUpper"),
            (s[(s.RearRightLower = 27)] = "RearRightLower"),
            s
          ))(v || {});
        function T(s) {
          switch (s) {
            case 0:
              return EGamepadButton.OK;
            case 1:
              return EGamepadButton.CANCEL;
            case 2:
              return EGamepadButton.SECONDARY;
            case 3:
              return EGamepadButton.OPTIONS;
            case 4:
              return EGamepadButton.DIR_LEFT;
            case 5:
              return EGamepadButton.DIR_RIGHT;
            case 6:
              return EGamepadButton.DIR_UP;
            case 7:
              return EGamepadButton.DIR_DOWN;
            case 8:
              return EGamepadButton.STEAM_GUIDE;
            case 9:
              return EGamepadButton.STEAM_QUICK_MENU;
            case 10:
              return EGamepadButton.SELECT;
            case 11:
              return EGamepadButton.START;
            case 12:
              return EGamepadButton.BUMPER_LEFT;
            case 13:
              return EGamepadButton.BUMPER_RIGHT;
            case 14:
              return EGamepadButton.TRIGGER_LEFT;
            case 15:
              return EGamepadButton.TRIGGER_RIGHT;
            case 24:
              return EGamepadButton.REAR_LEFT_UPPER;
            case 25:
              return EGamepadButton.REAR_LEFT_LOWER;
            case 26:
              return EGamepadButton.REAR_RIGHT_UPPER;
            case 27:
              return EGamepadButton.REAR_RIGHT_LOWER;
            default:
              return EGamepadButton.INVALID;
          }
        }
        function h(s) {
          switch (s) {
            case n.pR.OK:
              return 0;
            case n.pR.CANCEL:
              return 1;
            case n.pR.SECONDARY:
              return 2;
            case n.pR.OPTIONS:
              return 3;
            case n.pR.DIR_LEFT:
              return 4;
            case n.pR.DIR_RIGHT:
              return 5;
            case n.pR.DIR_UP:
              return 6;
            case n.pR.DIR_DOWN:
              return 7;
            case n.pR.STEAM_GUIDE:
              return 8;
            case n.pR.STEAM_QUICK_MENU:
              return 9;
            case n.pR.SELECT:
              return 10;
            case n.pR.START:
              return 11;
            case n.pR.BUMPER_LEFT:
              return 12;
            case n.pR.BUMPER_RIGHT:
              return 13;
            case n.pR.TRIGGER_LEFT:
              return 14;
            case n.pR.TRIGGER_RIGHT:
              return 15;
            case n.pR.REAR_LEFT_UPPER:
              return 24;
            case n.pR.REAR_LEFT_LOWER:
              return 25;
            case n.pR.REAR_RIGHT_UPPER:
              return 26;
            case n.pR.REAR_RIGHT_LOWER:
              return 27;
            default:
              return 0;
          }
        }
        const i = class ze {
          m_boundActions = new Map();
          m_defaultActions = new Map();
          m_globalActionsSubscriptions = [];
          m_actionDescriptionChangedCallbackRegistrations = [];
          static Log = new o.wd("ActionDescription").Debug;
          m_nodeForCurrentDescriptions;
          InitContext(r) {
            const m = new E.e0();
            return (
              m.Push(
                r.FocusChangedCallbacks.Register(this.OnFocusNavigationChanged)
                  .Unregister,
              ),
              m.Push(
                r.NavTreeActivatedOrReactivatedCallbacks.Register(
                  this.OnActiveNavTreeChanged,
                ).Unregister,
              ),
              m.GetUnregisterFunc()
            );
          }
          BFromActiveNavTree(r, m) {
            let S = m?.Tree;
            return (
              S || (S = r?.Tree), S && S.Controller.IsActiveFocusNavTree(S)
            );
          }
          OnFocusNavigationChanged(r, m, S) {
            this.BFromActiveNavTree(m, S) && this.UpdateForFocusedNode(S);
          }
          OnActiveNavTreeChanged(r) {
            if (!r.Controller.IsActiveFocusNavTree(r)) return;
            const m = r.GetLastFocusedNode() ?? r.Root;
            m != this.m_nodeForCurrentDescriptions &&
              this.UpdateForFocusedNode(m);
          }
          UpdateForFocusedNode(r) {
            if (
              ((this.m_nodeForCurrentDescriptions = r),
              this.m_actionDescriptionChangedCallbackRegistrations.forEach(
                (m) => m.Unregister(),
              ),
              (this.m_actionDescriptionChangedCallbackRegistrations = []),
              r)
            ) {
              const m = () =>
                this.SetActionDescriptionsFromMap(
                  r.GetActiveActionDescriptions() ?? {},
                );
              m();
              for (let S = r; S != null; S = S.Parent)
                this.m_actionDescriptionChangedCallbackRegistrations.push(
                  S.ActionDescriptionChangedCallbackList.Register(() => m()),
                );
            } else this.SetActionDescriptionsFromMap({ [n.pR.OK]: null });
          }
          GetActionDescription(r) {
            let m;
            return (
              this.m_boundActions.has(r)
                ? (m = this.m_boundActions.get(r))
                : this.m_defaultActions.has(r) &&
                  (m = this.m_defaultActions.get(r)),
              ze.Log("GetActionDescription", m),
              m
            );
          }
          GetActionDescriptions() {
            const r = Object.values(v).filter((S) => typeof S == "number"),
              m = {};
            for (const S of r) m[S] = this.GetActionDescription(S);
            return m;
          }
          Notify() {
            const r = this.GetActionDescriptions();
            this.m_globalActionsSubscriptions.forEach((m) => m(r));
          }
          IsDefaultAction(r) {
            return (
              this.GetActionDescription(r) === this.m_defaultActions.get(r)
            );
          }
          SetDefaultAction(r, m) {
            return (
              m === void 0
                ? this.m_defaultActions.delete(r)
                : this.m_defaultActions.set(r, m),
              !this.m_boundActions.has(r)
            );
          }
          SetDefaultActionsFromMap(r) {
            let m = !1;
            for (const S in r) {
              const M = parseInt(S);
              this.SetDefaultAction(M, r[M]) && (m = !0);
            }
            m && this.Notify();
          }
          ClearActions() {
            ze.Log("ClearActionDescriptions"),
              this.m_boundActions.clear(),
              this.Notify();
          }
          SetActionsFromMap(r) {
            let m = !1;
            const S = Array.from(this.m_boundActions.keys());
            for (let M of S)
              r[M] === void 0 && this.SetAction(M, void 0) && (m = !0);
            for (let M in r) {
              const I = parseInt(M);
              this.SetAction(I, r[I]) && (m = !0);
            }
            m && this.Notify();
          }
          SetActionDescriptionsFromMap(r) {
            const m = {};
            for (const S in r) {
              const M = parseInt(S),
                I = h(M);
              m[I] = r[M];
            }
            this.SetActionsFromMap(m);
          }
          SetAction(r, m) {
            if ((ze.Log("SetActionDescription", r, m), m === void 0)) {
              if (!this.m_boundActions.has(r)) return !1;
              this.m_boundActions.delete(r);
            } else {
              if ((0, e.SI)(this.m_boundActions.get(r), m)) return !1;
              this.m_boundActions.set(r, m);
            }
            return !0;
          }
          SubscribeToActions(r) {
            return (
              this.m_globalActionsSubscriptions.push(r),
              r(this.GetActionDescriptions()),
              () => {
                const S = this.m_globalActionsSubscriptions?.indexOf(r);
                this.m_globalActionsSubscriptions && S != null && S >= 0
                  ? this.m_globalActionsSubscriptions.splice(S, 1)
                  : console.error(
                      "Unsubscribing an actions handler that was already unsubscribed",
                    );
              }
            );
          }
        };
        C([f.oI], i.prototype, "OnFocusNavigationChanged", 1),
          C([f.oI], i.prototype, "OnActiveNavTreeChanged", 1),
          C([f.oI], i.prototype, "SetActionDescriptionsFromMap", 1);
        let a = null;
      },
      76867: (w, N, t) => {
        "use strict";
        t.d(N, { M: () => o });
        var e = t(7850),
          n = t(90626),
          E = t(90740);
        function o(f) {
          const { children: g, ...x } = f,
            C = n.useRef(null);
          return (0, e.jsx)(E.A, { nodeRef: C, ...x, children: f.children(C) });
        }
      },
      41944: (w, N, t) => {
        "use strict";
        t.d(N, {
          Ez: () => A,
          Dy: () => re,
          wW: () => oe,
          UN: () => D,
          Tz: () => c,
          cO: () => B,
          Pu: () => de,
          Pj: () => y,
          Nt: () => K,
          aw: () => j,
          cP: () => p,
        });
        var e = t(7850),
          n = t(24660),
          E = t(19298),
          o = t(75779),
          f = t(55546),
          g = t(48156),
          x = t(64868),
          C = t(40358),
          v = t(90626),
          T = t(21690),
          h = t(41735),
          i = t.n(h),
          a = t(72604),
          s = t(34592),
          r = t(8323),
          m = t(30096),
          S = t(3166),
          M = Object.defineProperty,
          I = Object.getOwnPropertyDescriptor,
          L = (_, d, R, P) => {
            for (
              var G = P > 1 ? void 0 : P ? I(d, R) : d, Q = _.length - 1, ee;
              Q >= 0;
              Q--
            )
              (ee = _[Q]) && (G = (P ? ee(d, R, G) : ee(G)) || G);
            return P && G && M(d, R, G), G;
          };
        const F = class je {
          m_mapAppResults = new Map();
          m_mapAppCallbackList = new Map();
          m_mapAppResultsPromises = new Map();
          GetCompatabilityResultForApp(d) {
            return this.m_mapAppResults.get(d);
          }
          BHasCompatabilityResultForApp(d) {
            return this.m_mapAppResults.has(d);
          }
          GetCallbackForAppList(d) {
            return (
              this.m_mapAppCallbackList.has(d) ||
                this.m_mapAppCallbackList.set(d, new r.lu()),
              this.m_mapAppCallbackList.get(d)
            );
          }
          AddCompatabilityResult(d) {
            d.appid &&
              (this.m_mapAppResults.set(d.appid, d),
              this.GetCallbackForAppList(d.appid).Dispatch(d));
          }
          async LoadAppCompabitilityResult(d) {
            return this.m_mapAppResults.has(d)
              ? !0
              : (this.m_mapAppResultsPromises.has(d) ||
                  this.m_mapAppResultsPromises.set(
                    d,
                    this.InternalLoadAppCompatability(d),
                  ),
                this.m_mapAppResultsPromises.get(d));
          }
          async InternalLoadAppCompatability(d) {
            let R = null;
            try {
              const P = { nAppID: d, l: S.TS.LANGUAGE, cc: S.TS.COUNTRY };
              let G =
                S.TS.STORE_BASE_URL +
                "saleaction/ajaxgetdeckappcompatibilityreport";
              const Q = await i().get(G, { params: P, withCredentials: !0 });
              if (Q?.status == 200 && Q.data?.success == a.R && Q.data?.results)
                return this.AddCompatabilityResult(Q.data.results), !0;
              R = (0, s.H)(Q);
            } catch (P) {
              R = (0, s.H)(P);
            }
            return (
              console.error(
                "CDeckVerifiedDetailsStore.InternalLoadAppCompatability failed: " +
                  R?.strErrorMsg,
                R,
              ),
              !1
            );
          }
          static s_Singleton;
          static Get() {
            return (
              je.s_Singleton || (je.s_Singleton = new je()), je.s_Singleton
            );
          }
          constructor() {
            if (document.getElementById("application_config")) {
              let d = (0, S.Tc)("hardwarecompatibility", "application_config");
              je.ValidateCompatabilityResult(d) &&
                this.AddCompatabilityResult(d);
            }
          }
          static ValidateCompatabilityResult(d) {
            const R = d;
            return (
              R &&
              typeof R.appid == "number" &&
              typeof R.resolved_category == "number" &&
              typeof R.resolved_items == "object"
            );
          }
        };
        L([m.oI], F.prototype, "LoadAppCompabitilityResult", 1);
        let J = F;
        function H(_) {
          const [d, R] = v.useState(J.Get().GetCompatabilityResultForApp(_));
          return (
            (0, m.hL)(J.Get().GetCallbackForAppList(_), R),
            v.useEffect(() => {
              J.Get().BHasCompatabilityResultForApp(_) ||
                J.Get()
                  .LoadAppCompabitilityResult(_)
                  .then(() => R(J.Get().GetCompatabilityResultForApp(_)));
            }, [_]),
            d
          );
        }
        var $ = t(16412),
          k = t(96538),
          Z = t(36118),
          U = t(6046),
          X = t(85599),
          ne = t(36707),
          O = t(39905),
          z = t(48473),
          q = t(35111),
          b = t.n(q),
          l = t(26356);
        function y(_) {
          const { id: d, compatibility: R, onShowDialog: P } = _,
            { data: G } = (0, C.J$)(d),
            { data: Q } = (0, C.qI)(d),
            [ee, ce, ue] = (0, x.uD)();
          if (!G || !Q || G.item_type !== g.c6.qI) return null;
          let W = null,
            Le = null;
          if (R == l.bY) {
            const ge = Q.steam_frame_compat_category || o.YX;
            (W = (0, e.jsx)(T.bh, { category: ge })),
              (Le = O.Z.Localize(
                "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
              ));
          } else if (R == l.JR) {
            const ge = Q.steam_machine_compat_category || o.YX;
            (W = (0, e.jsx)(T.Ns, { category: ge })),
              (Le = O.Z.Localize(
                "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
              ));
          } else {
            const ge = Q.steam_deck_compat_category || o.YX;
            (W = (0, e.jsx)(T.$o, { category: ge })),
              (Le = O.Z.Localize(
                "#SteamDeckVerified_Store_CompatSectionHeader_Desktop",
              ));
          }
          return (0, e.jsxs)("div", {
            className: (0, ne.A)(b().LearnMoreCtn, "LearnMoreCtn"),
            children: [
              W,
              (0, e.jsx)(n.Ii, {
                onClick: (ge) => {
                  ge.preventDefault(), (P ?? ce)();
                },
                children: (0, e.jsx)("span", {
                  className: b().LearnMorePC,
                  children: Le,
                }),
              }),
              !P &&
                (0, e.jsx)(B, {
                  nAppID: G.appid,
                  appName: G.name,
                  active: ee,
                  startingTab: R,
                  closeModal: ue,
                }),
            ],
          });
        }
        function B(_) {
          const {
            nAppID: d,
            active: R,
            appName: P,
            startingTab: G,
            closeModal: Q,
          } = _;
          return (0, e.jsx)(k.EN, {
            active: R,
            children: (0, e.jsx)(u, {
              nAppID: d,
              appName: P,
              startingTab: G,
              closeModal: Q,
            }),
          });
        }
        function c(_) {
          const {
              url: d,
              containerClass: R,
              bIncludeIcon: P,
              onOpenBlogPost: G,
            } = _,
            Q = () => {
              G ? G() : d && (window.location.href = d);
            };
          return (0, e.jsxs)(n.Ii, {
            className: R,
            onClick: Q,
            children: [
              P && (0, e.jsx)("div", { className: b().DeveloperComments_Icon }),
              (0, e.jsx)("div", {
                className: P
                  ? b().DeveloperComments_LinkIcon
                  : b().DeveloperComments_LinkNoIcon,
                children: O.Z.Localize(
                  "#SteamDeckVerified_Store_CompatSection_DeveloperComments",
                ),
              }),
            ],
          });
        }
        function u(_) {
          const { nAppID: d, appName: R, startingTab: P, closeModal: G } = _,
            Q = H(d),
            ee = v.useId();
          return (0, e.jsx)(k.eV, {
            "aria-labelledby": ee,
            modalClassName: "DeckVerifiedModalDialog",
            closeModal: G,
            onCancel: G,
            children: (0, e.jsx)($.nB, {
              children: (0, e.jsx)(E.Z, {
                focusable: !1,
                "flow-children": "column",
                children: Q
                  ? (0, e.jsx)(U.Ay, {
                      titleId: ee,
                      appName: R,
                      results: Q,
                      eStartingTab: P,
                    })
                  : (0, e.jsx)(X.t, {
                      size: "medium",
                      position: "center",
                      string: O.Z.Localize("#Loading"),
                    }),
              }),
            }),
          });
        }
        function A(_) {
          const { category: d } = _;
          switch (d) {
            case o.I2:
              return (0, e.jsx)(Z.o5Q, {
                className: b().CategoryIcon,
                role: "presentation",
              });
            case o.sd:
              return (0, e.jsx)(Z.aVR, {
                className: b().CategoryIcon,
                role: "presentation",
              });
            case o.V8:
              return (0, e.jsx)(Z.jIP, {
                className: b().CategoryIcon,
                role: "presentation",
              });
            case o.YX:
            default:
              return (0, e.jsx)(Z.WX$, {
                className: b().CategoryIcon,
                role: "presentation",
              });
          }
        }
        function j(_) {
          const { category: d } = _;
          switch (d) {
            case f.Hi:
              return (0, e.jsx)(Z.ZjT, {
                className: b().CategoryIcon,
                role: "presentation",
              });
            case f.u_:
              return (0, e.jsx)(Z.jIP, {
                className: b().CategoryIcon,
                role: "presentation",
              });
            case f.xs:
            default:
              return (0, e.jsx)(Z.WX$, {
                className: b().CategoryIcon,
                role: "presentation",
              });
          }
        }
        function D(_) {
          const { id: d, category: R, appName: P, descriptionToken: G } = _;
          if (R == o.YX)
            return (0, e.jsx)("div", {
              id: d,
              className: b().CompatibilityDetailRatingSummary,
              children: P
                ? O.Z.LocalizeReact(
                    "#SteamDeckVerified_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  )
                : O.Z.Localize("#SteamDeckVerified_DescriptionHeader_Unknown"),
            });
          let Q = "",
            ee = null;
          switch (R) {
            case o.I2:
              (Q = "#SteamDeckVerified_DescriptionHeader_Verified"),
                (ee = b().Verified);
              break;
            case o.sd:
              (Q = "#SteamDeckVerified_DescriptionHeader_Playable"),
                (ee = b().Playable);
              break;
            case o.V8:
              (Q = "#SteamDeckVerified_DescriptionHeader_Unsupported"),
                (ee = b().Unsupported);
              break;
          }
          const ce = (0, e.jsx)("span", {
              className: ee,
              children: O.Z.Localize(re(R)),
            }),
            ue = (0, e.jsx)("span", {
              className: b().CompatibilityDetailRatingSummary,
              children: O.Z.Localize(G || Q),
            }),
            W = P
              ? O.Z.LocalizeReact(
                  "#SteamDeckVerified_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  ce,
                  ue,
                )
              : O.Z.LocalizeReact(
                  "#SteamDeckVerified_DescriptionHeader",
                  ce,
                  ue,
                );
          return (0, e.jsx)("div", {
            id: d,
            className: b().CompatibilityDetailRatingSummary,
            children: W,
          });
        }
        function p(_) {
          const { id: d, category: R, appName: P, descriptionToken: G } = _;
          if (R == f.xs)
            return (0, e.jsx)("div", {
              className: b().CompatibilityDetailRatingSummary,
              children: P
                ? O.Z.LocalizeReact(
                    "#SteamOSCompatibility_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  )
                : O.Z.Localize(
                    "#SteamOSCompatibility_DescriptionHeader_Unknown",
                  ),
            });
          let Q = "",
            ee = null;
          switch (R) {
            case f.Hi:
              (Q = "#SteamOSCompatibility_DescriptionHeader_Compatible"),
                (ee = b().Compatible);
              break;
            case f.u_:
              (Q = "#SteamOSCompatibility_DescriptionHeader_Unsupported"),
                (ee = b().Unsupported);
              break;
          }
          const ce = (0, e.jsx)("span", {
              className: ee,
              children: O.Z.Localize(oe(R)),
            }),
            ue = (0, e.jsx)("span", {
              className: b().CompatibilityDetailRatingSummary,
              children: O.Z.Localize(G || Q),
            }),
            W = P
              ? O.Z.LocalizeReact(
                  "#SteamOSCompatibility_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  ce,
                  ue,
                )
              : O.Z.LocalizeReact(
                  "#SteamOSCompatibility_DescriptionHeader",
                  ce,
                  ue,
                );
          return (0, e.jsx)("div", {
            id: d,
            className: b().CompatibilityDetailRatingSummary,
            children: W,
          });
        }
        function K(_) {
          const { id: d, category: R, appName: P, descriptionToken: G } = _;
          if (R == o.YX)
            return (0, e.jsx)("div", {
              className: b().CompatibilityDetailRatingSummary,
              children: P
                ? O.Z.LocalizeReact(
                    "#SteamMachineVerified_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  )
                : O.Z.Localize(
                    "#SteamMachineVerified_DescriptionHeader_Unknown",
                  ),
            });
          let Q = "",
            ee = null;
          switch (R) {
            case o.I2:
              (Q = "#SteamMachineVerified_DescriptionHeader_Verified"),
                (ee = b().Verified);
              break;
            case o.sd:
              (Q = "#SteamMachineVerified_DescriptionHeader_Playable"),
                (ee = b().Playable);
              break;
            case o.V8:
              (Q = "#SteamMachineVerified_DescriptionHeader_Unsupported"),
                (ee = b().Unsupported);
              break;
          }
          const ce = (0, e.jsx)("span", {
              className: ee,
              children: O.Z.Localize(re(R)),
            }),
            ue = (0, e.jsx)("span", {
              className: b().CompatibilityDetailRatingSummary,
              children: O.Z.Localize(G || Q),
            }),
            W = P
              ? O.Z.LocalizeReact(
                  "#SteamMachineVerified_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  ce,
                  ue,
                )
              : O.Z.LocalizeReact(
                  "#SteamMachineVerified_DescriptionHeader",
                  ce,
                  ue,
                );
          return (0, e.jsx)("div", {
            id: d,
            className: b().CompatibilityDetailRatingSummary,
            children: W,
          });
        }
        function de(_) {
          const { id: d, category: R, appName: P, descriptionToken: G } = _;
          if (R == o.YX)
            return (0, e.jsx)("div", {
              className: b().CompatibilityDetailRatingSummary,
              children: P
                ? O.Z.LocalizeReact(
                    "#SteamFrameVerified_DescriptionHeader_Unknown_WithAppName",
                    (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  )
                : O.Z.Localize("#SteamFrameVerified_DescriptionHeader_Unknown"),
            });
          let Q = "",
            ee = null;
          switch (R) {
            case o.I2:
              (Q = "#SteamFrameVerified_DescriptionHeader_Verified"),
                (ee = b().Verified);
              break;
            case o.sd:
              (Q = "#SteamFrameVerified_DescriptionHeader_Playable"),
                (ee = b().Playable);
              break;
            case o.V8:
              (Q = "#SteamFrameVerified_DescriptionHeader_Unsupported"),
                (ee = b().Unsupported);
              break;
          }
          const ce = (0, e.jsx)("span", {
              className: ee,
              children: O.Z.Localize(re(R)),
            }),
            ue = (0, e.jsx)("span", {
              className: b().CompatibilityDetailRatingSummary,
              children: O.Z.Localize(G || Q),
            }),
            W = P
              ? O.Z.LocalizeReact(
                  "#SteamFrameVerified_DescriptionHeader_WithAppName",
                  (0, e.jsx)("b", { children: (0, z.EK)(P) }),
                  ce,
                  ue,
                )
              : O.Z.LocalizeReact(
                  "#SteamFrameVerified_DescriptionHeader",
                  ce,
                  ue,
                );
          return (0, e.jsx)("div", {
            id: d,
            className: b().CompatibilityDetailRatingSummary,
            children: W,
          });
        }
        function re(_) {
          switch (_) {
            case o.I2:
              return "#SteamDeckVerified_Category_Verified";
            case o.sd:
              return "#SteamDeckVerified_Category_Playable";
            case o.V8:
              return "#SteamDeckVerified_Category_Unsupported";
            default:
              return "#SteamDeckVerified_Category_Unknown";
          }
        }
        function oe(_) {
          switch (_) {
            case f.Hi:
              return "#SteamOSCompatibility_Category_Compatible";
            case f.u_:
              return "#SteamOSCompatibility_Category_Unsupported";
            default:
              return "#SteamOSCompatibility_Category_Unknown";
          }
        }
      },
      31377: (w, N, t) => {
        "use strict";
        t.d(N, { $m: () => h, wt: () => x, xY: () => C });
        var e = t(7850),
          n = t(74732),
          E = t(28285),
          o = t.n(E),
          f = t(36707),
          g = t(18210),
          x = ((D) => (
            (D[(D.Knockout = 0)] = "Knockout"),
            (D[(D.Light = 1)] = "Light"),
            (D[(D.Dark = 2)] = "Dark"),
            D
          ))(x || {}),
          C = ((D) => (
            (D[(D.Small = 0)] = "Small"),
            (D[(D.Medium = 1)] = "Medium"),
            (D[(D.Large = 2)] = "Large"),
            D
          ))(C || {});
        function v(D) {
          switch (D) {
            case 0:
              return o().SizeSmall;
            case 1:
              return o().SizeMedium;
            case 2:
              return o().SizeLarge;
            default:
              return o().SizeMedium;
          }
        }
        function T(D) {
          switch (D) {
            case 0:
              return o().Knockout;
            case 1:
              return o().Light;
            case 2:
              return o().Dark;
            default:
              return o().Light;
          }
        }
        function h(D) {
          const p = (0, f.A)(
              D.size != null ? v(D.size) : v(1),
              D.type != null ? T(D.type) : T(1),
              D.additionalClassName,
            ),
            K = D.type == 0;
          switch (D.button) {
            case n.g4.A:
              return (0, e.jsx)(i, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_A"),
              });
            case n.g4.B:
              return (0, e.jsx)(a, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_B"),
              });
            case n.g4.X:
              return (0, e.jsx)(s, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_X"),
              });
            case n.g4.Y:
              return (0, e.jsx)(r, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_Y"),
              });
            case n.g4.Left:
              return (0, e.jsx)(M, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_DpadLeft"),
              });
            case n.g4.Right:
              return (0, e.jsx)(I, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_DpadRight"),
              });
            case n.g4.Up:
              return (0, e.jsx)(m, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_DpadUp"),
              });
            case n.g4.Down:
              return (0, e.jsx)(S, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_DpadDown"),
              });
            case n.g4.HomeMenu:
              return (0, e.jsx)(L, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_Steam"),
              });
            case n.g4.QuickMenu:
              return (0, e.jsx)(F, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_QAM"),
              });
            case n.g4.Select:
              return (0, e.jsx)(J, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_View"),
              });
            case n.g4.Start:
              return (0, e.jsx)(H, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_Menu"),
              });
            case n.g4.LeftBumper:
              return (0, e.jsx)($, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_L1"),
              });
            case n.g4.RightBumper:
              return (0, e.jsx)(k, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_R1"),
              });
            case n.g4.LeftTrigger:
              return (0, e.jsx)(Z, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_L2"),
              });
            case n.g4.RightTrigger:
              return (0, e.jsx)(U, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_R2"),
              });
            case n.g4.LeftStick:
              return (0, e.jsx)(z, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_LS"),
              });
            case n.g4.RightStick:
              return (0, e.jsx)(O, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_RS"),
              });
            case n.g4.LeftStickClick:
              return (0, e.jsx)(X, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_L3"),
              });
            case n.g4.RightStickClick:
              return (0, e.jsx)(ne, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_R3"),
              });
            case n.g4.LeftTrackpad:
              return (0, e.jsx)(B, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_LPad"),
              });
            case n.g4.RightTrackpad:
              return (0, e.jsx)(u, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_RPad"),
              });
            case n.g4.LeftTrackpadClick:
              return (0, e.jsx)(c, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_LPad_Click"),
              });
            case n.g4.RightTrackpadClick:
              return (0, e.jsx)(A, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_RPad_Click"),
              });
            case n.g4.RearLeftUpper:
              return (0, e.jsx)(q, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_L4"),
              });
            case n.g4.RearRightUpper:
              return (0, e.jsx)(l, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_R4"),
              });
            case n.g4.RearLeftLower:
              return (0, e.jsx)(b, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_L5"),
              });
            case n.g4.RearRightLower:
              return (0, e.jsx)(y, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_R5"),
              });
            default:
              return (0, e.jsx)(j, {
                bIsKnockout: K,
                className: p,
                "aria-label": (0, g.we)("#ControllerButton_Default"),
              });
          }
        }
        function i({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM21.2697 24H24.1317L19.2717 11.4H16.6077L11.8917 24H14.6457L15.4737 21.552H20.4057L21.2697 24ZM16.1937 19.446L17.9217 14.406L19.6857 19.446H16.1937Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    cx: "18",
                    cy: "18",
                    r: "18",
                    fill: "currentColor",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M24.1317 24H21.2697L20.4057 21.552H15.4737L14.6457 24H11.8917L16.6077 11.4H19.2717L24.1317 24ZM17.9217 14.406L16.1937 19.446H19.6857L17.9217 14.406Z",
                  }),
                ],
              });
        }
        function a({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.173 20.382C23.173 18.81 22.369 17.778 20.761 17.286C21.349 16.974 21.775 16.584 22.039 16.116C22.303 15.648 22.435 15.132 22.435 14.568C22.435 13.56 22.081 12.78 21.373 12.228C20.665 11.676 19.573 11.4 18.097 11.4H13.435V24H18.601C19.993 24 21.103 23.682 21.931 23.046C22.759 22.41 23.173 21.522 23.173 20.382ZM16.117 16.674V13.596H17.881C19.165 13.596 19.807 14.082 19.807 15.054C19.807 15.57 19.645 15.972 19.321 16.26C18.997 16.536 18.535 16.674 17.935 16.674H16.117ZM19.843 21.372C19.507 21.672 19.003 21.822 18.331 21.822H16.117V18.582H18.403C19.039 18.582 19.525 18.72 19.861 18.996C20.197 19.26 20.365 19.656 20.365 20.184C20.365 20.676 20.191 21.072 19.843 21.372Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M20.761 17.286C22.369 17.778 23.173 18.81 23.173 20.382C23.173 21.522 22.759 22.41 21.931 23.046C21.103 23.682 19.993 24 18.601 24H13.435V11.4H18.097C19.573 11.4 20.665 11.676 21.373 12.228C22.081 12.78 22.435 13.56 22.435 14.568C22.435 15.132 22.303 15.648 22.039 16.116C21.775 16.584 21.349 16.974 20.761 17.286ZM16.117 13.596V16.674H17.935C18.535 16.674 18.997 16.536 19.321 16.26C19.645 15.972 19.807 15.57 19.807 15.054C19.807 14.082 19.165 13.596 17.881 13.596H16.117ZM18.331 21.822C19.003 21.822 19.507 21.672 19.843 21.372C20.191 21.072 20.365 20.676 20.365 20.184C20.365 19.656 20.197 19.26 19.861 18.996C19.525 18.72 19.039 18.582 18.403 18.582H16.117V21.822H18.331Z",
                  }),
                ],
              });
        }
        function s({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM23.7101 11.4H20.3621L17.8601 15.45L15.3581 11.4H12.1001L16.4021 17.484L11.9201 24H15.0881L17.9141 19.41L20.8661 24H24.1061L19.2821 17.394L23.7101 11.4Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M20.3621 11.4H23.7101L19.2821 17.394L24.1061 24H20.8661L17.9141 19.41L15.0881 24H11.9201L16.4021 17.484L12.1001 11.4H15.3581L17.8601 15.45L20.3621 11.4Z",
                  }),
                ],
              });
        }
        function r({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM16.69 24H19.318V18.996L23.71 11.4H20.848L18.094 16.44L15.358 11.4H12.298L16.69 18.978V24Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    cx: "18",
                    cy: "18",
                    r: "18",
                    fill: "currentColor",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M19.318 24H16.69V18.978L12.298 11.4H15.358L18.094 16.44L20.848 11.4H23.71L19.318 18.996V24Z",
                  }),
                ],
              });
        }
        function m({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM25 20.1998L19.5555 14.7554V27.1998H16.4444V14.7554L11 20.1998L8.66663 17.8665L18 8.66661L27.3333 17.8665L25 20.1998Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M19.5555 14.7554L25 20.1998L27.3333 17.8665L18 8.66661L8.66663 17.8665L11 20.1998L16.4444 14.7554V27.1998H19.5555V14.7554Z",
                  }),
                ],
              });
        }
        function S({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM10.9999 15.6666L16.4444 21.1111L16.4444 8.66663H19.5555L19.5555 21.1111L24.9999 15.6666L27.3333 18L17.9999 27.1998L8.66659 18L10.9999 15.6666Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M16.4444 21.1111L10.9999 15.6666L8.66659 18L17.9999 27.1998L27.3333 18L24.9999 15.6666L19.5555 21.1111L19.5555 8.66663L16.4444 8.66663L16.4444 21.1111Z",
                  }),
                ],
              });
        }
        function M({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.2664 10.9332L14.8219 16.3777H27.2664V19.4888H14.8219L20.2664 24.9332L17.933 27.2665L8.73314 17.9332L17.933 8.59988L20.2664 10.9332Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M14.8219 16.3777L20.2664 10.9333L17.933 8.59994L8.73314 17.9332L17.933 27.2666L20.2664 24.9333L14.8219 19.4888L27.2664 19.4888L27.2664 16.3777L14.8219 16.3777Z",
                  }),
                ],
              });
        }
        function I({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM15.7332 24.9332L21.1776 19.4888H8.73315V16.3777H21.1776L15.7332 10.9332L18.0665 8.59991L27.2664 17.9333L18.0665 27.2666L15.7332 24.9332Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M21.1776 19.4887L15.7332 24.9332L18.0665 27.2665L27.2664 17.9332L18.0665 8.59985L15.7332 10.9332L21.1776 16.3776L8.73315 16.3776L8.73315 19.4887L21.1776 19.4887Z",
                  }),
                ],
              });
        }
        function L({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H82C91.9411 36 100 27.9411 100 18C100 8.05888 91.9411 0 82 0H18ZM21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5ZM35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388ZM50.8108 11.788H42.3148V24.388H50.8108V22.102H44.9608V19.15H50.0008V16.882H44.9608V14.038H50.8108V11.788ZM65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794ZM79.7729 11.788L75.8489 20.734L71.6009 11.788H69.0629V24.388H71.4749V16.468L74.9309 24.028H76.5329L79.9169 16.378V24.388H82.4549V11.788H79.7729Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 100 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 18C0 8.05888 8.05888 0 18 0H82C91.9411 0 100 8.05888 100 18C100 27.9411 91.9411 36 82 36H18C8.05888 36 0 27.9411 0 18Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M21.8011 11.5C22.6531 11.5 23.4391 11.62 24.1591 11.86C24.8791 12.1 25.4851 12.394 25.9771 12.742L24.8611 14.722C24.4171 14.41 23.9191 14.158 23.3671 13.966C22.8271 13.774 22.3111 13.678 21.8191 13.678C21.2191 13.678 20.7511 13.804 20.4151 14.056C20.0791 14.296 19.9111 14.632 19.9111 15.064C19.9111 15.496 20.1091 15.838 20.5051 16.09C20.9011 16.33 21.5071 16.594 22.3231 16.882C23.1631 17.182 23.8351 17.458 24.3391 17.71C24.8431 17.962 25.2811 18.334 25.6531 18.826C26.0371 19.306 26.2291 19.924 26.2291 20.68C26.2291 21.484 26.0191 22.18 25.5991 22.768C25.1911 23.356 24.6151 23.812 23.8711 24.136C23.1271 24.448 22.2751 24.604 21.3151 24.604C20.5351 24.604 19.7371 24.502 18.9211 24.298C18.1171 24.082 17.4091 23.794 16.7971 23.434L17.6251 21.238C18.2011 21.55 18.8071 21.802 19.4431 21.994C20.0911 22.174 20.7271 22.264 21.3511 22.264C22.0351 22.264 22.5451 22.132 22.8811 21.868C23.2291 21.604 23.4031 21.256 23.4031 20.824C23.4031 20.392 23.2171 20.056 22.8451 19.816C22.4731 19.576 21.9031 19.33 21.1351 19.078C20.2711 18.802 19.5751 18.538 19.0471 18.286C18.5191 18.022 18.0631 17.644 17.6791 17.152C17.3071 16.648 17.1211 15.994 17.1211 15.19C17.1211 14.446 17.3131 13.798 17.6971 13.246C18.0931 12.682 18.6451 12.25 19.3531 11.95C20.0611 11.65 20.8771 11.5 21.8011 11.5Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M35.2486 24.388H32.6026V14.056H28.7866V11.788H39.0646V14.056H35.2486V24.388Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M42.3148 11.788H50.8108V14.038H44.9608V16.882H50.0008V19.15H44.9608V22.102H50.8108V24.388H42.3148V11.788Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M65.8582 24.388H62.9962L62.1322 21.94H57.2002L56.3722 24.388H53.6182L58.3342 11.788H60.9982L65.8582 24.388ZM59.6482 14.794L57.9202 19.834H61.4122L59.6482 14.794Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M75.8489 20.734L79.7729 11.788H82.4549V24.388H79.9169V16.378L76.5329 24.028H74.9309L71.4749 16.468V24.388H69.0629V11.788H71.6009L75.8489 20.734Z",
                  }),
                ],
              });
        }
        function F({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 81 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18 0C8.05888 0 0 8.05888 0 18C0 27.9411 8.05888 36 18 36H61C70.9411 36 79 27.9411 79 18C79 8.05888 70.9411 0 61 0H18ZM21.5 22.5C23.9853 22.5 26 20.4853 26 18C26 15.5147 23.9853 13.5 21.5 13.5C19.0147 13.5 17 15.5147 17 18C17 20.4853 19.0147 22.5 21.5 22.5ZM44 18C44 20.4853 41.9853 22.5 39.5 22.5C37.0147 22.5 35 20.4853 35 18C35 15.5147 37.0147 13.5 39.5 13.5C41.9853 13.5 44 15.5147 44 18ZM57.5 22.5C59.9853 22.5 62 20.4853 62 18C62 15.5147 59.9853 13.5 57.5 13.5C55.0147 13.5 53 15.5147 53 18C53 20.4853 55.0147 22.5 57.5 22.5Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 81 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 18C0 8.05888 8.05888 0 18 0H61C70.9411 0 79 8.05888 79 18C79 27.9411 70.9411 36 61 36H18C8.05888 36 0 27.9411 0 18Z",
                  }),
                  (0, e.jsx)("circle", {
                    className: o().Foreground,
                    fill: "currentColor",
                    cx: "21.5",
                    cy: "18",
                    r: "4.5",
                  }),
                  (0, e.jsx)("circle", {
                    className: o().Foreground,
                    fill: "currentColor",
                    cx: "39.5",
                    cy: "18",
                    r: "4.5",
                  }),
                  (0, e.jsx)("circle", {
                    className: o().Foreground,
                    fill: "currentColor",
                    cx: "57.5",
                    cy: "18",
                    r: "4.5",
                  }),
                ],
              });
        }
        function J({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V25H31V11Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("rect", {
                    className: o().Background,
                    fill: "currentColor",
                    y: "6",
                    width: "48",
                    height: "24",
                    rx: "12",
                  }),
                  (0, e.jsx)("rect", {
                    className: o().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "11",
                    width: "14",
                    height: "14",
                  }),
                ],
              });
        }
        function H({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12 6C5.37258 6 0 11.3726 0 18C0 24.6274 5.37258 30 12 30H36C42.6274 30 48 24.6274 48 18C48 11.3726 42.6274 6 36 6H12ZM31 11H17V13.8H31V11ZM17 22.2H31V25H17V22.2ZM31 16.6H17V19.4H31V16.6Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 48 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("rect", {
                    className: o().Background,
                    fill: "currentColor",
                    y: "6",
                    width: "48",
                    height: "24",
                    rx: "12",
                  }),
                  (0, e.jsx)("rect", {
                    className: o().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "11",
                    width: "14",
                    height: "2.8",
                  }),
                  (0, e.jsx)("rect", {
                    className: o().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "22.2",
                    width: "14",
                    height: "2.8",
                  }),
                  (0, e.jsx)("rect", {
                    className: o().Foreground,
                    fill: "currentColor",
                    x: "17",
                    y: "16.6",
                    width: "14",
                    height: "2.8",
                  }),
                ],
              });
        }
        function $({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.5 0C3.35786 0 0 4.47715 0 10V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895431 35.3284 0 34.5 0H7.5ZM9.36182 23H17.8218V20.624H12.0078V10.4H9.36182V23ZM25.7635 20.714V10.4H23.7296L19.5896 12.452L20.4356 14.432L23.0816 13.316V20.714H20.1115V23H28.1576V20.714H25.7635Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 10C0 4.47715 3.35786 0 7.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671574 32 0 31.1046 0 30V10Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.8218 23H9.36182V10.4H12.0078V20.624H17.8218V23Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M25.7635 10.4V20.714H28.1576V23H20.1116V20.714H23.0816V13.316L20.4356 14.432L19.5896 12.452L23.7296 10.4H25.7635Z",
                  }),
                ],
              });
        }
        function k({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M28.5 0C32.6421 0 36 4.47715 36 10V30C36 31.1046 35.3284 32 34.5 32H1.5C0.671573 32 0 31.1046 0 30V2C0 0.895431 0.671573 0 1.5 0H28.5ZM15.8185 23H18.7525L15.7825 18.23C16.5505 17.894 17.1445 17.402 17.5645 16.754C17.9965 16.106 18.2125 15.296 18.2125 14.324C18.2125 13.088 17.8045 12.128 16.9885 11.444C16.1725 10.748 14.9005 10.4 13.1725 10.4H8.45654V23H11.1025V18.752H12.9745H13.2805L15.8185 23ZM11.1025 16.484V12.65H13.0105C13.8385 12.65 14.4385 12.806 14.8105 13.118C15.1945 13.418 15.3865 13.874 15.3865 14.486C15.3865 15.11 15.1885 15.602 14.7925 15.962C14.4085 16.31 13.8685 16.484 13.1725 16.484H11.1025ZM26.6688 20.714V10.4H24.6348L20.4948 12.452L21.3408 14.432L23.9868 13.316V20.714H21.0168V23H29.0628V20.714H26.6688Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M36 10C36 4.47715 32.6421 0 28.5 0H1.5C0.671574 0 0 0.895431 0 2V30C0 31.1046 0.671574 32 1.5 32H34.5C35.3284 32 36 31.1046 36 30V10Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M18.7525 23H15.8185L13.2805 18.752H12.9745H11.1025V23H8.45654V10.4H13.1725C14.9005 10.4 16.1725 10.748 16.9885 11.444C17.8045 12.128 18.2125 13.088 18.2125 14.324C18.2125 15.296 17.9965 16.106 17.5645 16.754C17.1445 17.402 16.5505 17.894 15.7825 18.23L18.7525 23ZM11.1025 12.65V16.484H13.1725C13.8685 16.484 14.4085 16.31 14.7925 15.962C15.1885 15.602 15.3865 15.11 15.3865 14.486C15.3865 13.874 15.1945 13.418 14.8105 13.118C14.4385 12.806 13.8385 12.65 13.0105 12.65H11.1025Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M26.6688 10.4V20.714H29.0628V23H21.0168V20.714H23.9868V13.316L21.3408 14.432L20.4948 12.452L24.6348 10.4H26.6688Z",
                  }),
                ],
              });
        }
        function Z({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.5 32C3.35786 32 0 27.5228 0 22V2C0 0.895431 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895431 36 2V30C36 31.1046 35.3284 32 34.5 32H7.5ZM29.0743 20.714H23.0083L25.6183 18.554C26.6623 17.69 27.4363 16.91 27.9403 16.214C28.4443 15.506 28.6963 14.72 28.6963 13.856C28.6963 12.68 28.2583 11.774 27.3823 11.138C26.5063 10.502 25.3423 10.184 23.8903 10.184C23.0743 10.184 22.3063 10.298 21.5863 10.526C20.8783 10.754 20.2483 11.06 19.6963 11.444L20.5963 13.388C20.9683 13.136 21.4003 12.926 21.8923 12.758C22.3963 12.59 22.9123 12.506 23.4403 12.506C24.1483 12.506 24.7243 12.668 25.1683 12.992C25.6243 13.304 25.8523 13.772 25.8523 14.396C25.8523 14.78 25.7623 15.134 25.5823 15.458C25.4023 15.782 25.1623 16.088 24.8623 16.376C24.5743 16.664 24.1543 17.042 23.6023 17.51L23.2963 17.78L19.6603 20.804V23H29.0743V20.714ZM9.32458 23H17.7846V20.624H11.9706V10.4H9.32458V23Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 22C0 27.5228 3.35786 32 7.5 32H34.5C35.3284 32 36 31.1046 36 30V2C36 0.895432 35.3284 0 34.5 0H1.5C0.671574 0 0 0.895432 0 2V22Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.7846 23H9.32458V10.4H11.9706V20.624H17.7846V23Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23.0083 20.714H29.0743V23H19.6603V20.804L23.2963 17.78L23.6023 17.51C24.1543 17.042 24.5743 16.664 24.8623 16.376C25.1623 16.088 25.4023 15.782 25.5823 15.458C25.7623 15.134 25.8523 14.78 25.8523 14.396C25.8523 13.772 25.6243 13.304 25.1683 12.992C24.7243 12.668 24.1483 12.506 23.4403 12.506C22.9123 12.506 22.3963 12.59 21.8923 12.758C21.4003 12.926 20.9683 13.136 20.5963 13.388L19.6963 11.444C20.2483 11.06 20.8783 10.754 21.5863 10.526C22.3063 10.298 23.0743 10.184 23.8903 10.184C25.3423 10.184 26.5063 10.502 27.3823 11.138C28.2583 11.774 28.6963 12.68 28.6963 13.856C28.6963 14.72 28.4443 15.506 27.9403 16.214C27.4363 16.91 26.6623 17.69 25.6183 18.554L23.0083 20.714Z",
                  }),
                ],
              });
        }
        function U({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M28.5 32C32.6421 32 36 27.5228 36 22V2C36 0.895431 35.3284 0 34.5 0H1.5C0.671573 0 0 0.895431 0 2V30C0 31.1046 0.671573 32 1.5 32H28.5ZM28.9796 20.714H22.9136L25.5236 18.554C26.5676 17.69 27.3416 16.91 27.8456 16.214C28.3496 15.506 28.6016 14.72 28.6016 13.856C28.6016 12.68 28.1636 11.774 27.2876 11.138C26.4116 10.502 25.2476 10.184 23.7956 10.184C22.9796 10.184 22.2116 10.298 21.4916 10.526C20.7836 10.754 20.1536 11.06 19.6016 11.444L20.5016 13.388C20.8736 13.136 21.3056 12.926 21.7976 12.758C22.3016 12.59 22.8176 12.506 23.3456 12.506C24.0536 12.506 24.6296 12.668 25.0736 12.992C25.5296 13.304 25.7576 13.772 25.7576 14.396C25.7576 14.78 25.6676 15.134 25.4876 15.458C25.3076 15.782 25.0676 16.088 24.7676 16.376C24.4796 16.664 24.0596 17.042 23.5076 17.51L23.2016 17.78L19.5656 20.804V23H28.9796V20.714ZM14.7813 23H17.7153L14.7453 18.23C15.5133 17.894 16.1073 17.402 16.5273 16.754C16.9593 16.106 17.1753 15.296 17.1753 14.324C17.1753 13.088 16.7673 12.128 15.9513 11.444C15.1353 10.748 13.8633 10.4 12.1353 10.4H7.41931V23H10.0653V18.752H11.9373H12.2433L14.7813 23ZM10.0653 16.484V12.65H11.9733C12.8013 12.65 13.4013 12.806 13.7733 13.118C14.1573 13.418 14.3493 13.874 14.3493 14.486C14.3493 15.11 14.1513 15.602 13.7553 15.962C13.3713 16.31 12.8313 16.484 12.1353 16.484H10.0653Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 32",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M36 22C36 27.5228 32.6421 32 28.5 32H1.5C0.671574 32 0 31.1046 0 30V2C0 0.895432 0.671574 0 1.5 0H34.5C35.3284 0 36 0.895432 36 2V22Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.7153 23H14.7813L12.2433 18.752H11.9373H10.0653V23H7.41931V10.4H12.1353C13.8633 10.4 15.1353 10.748 15.9513 11.444C16.7673 12.128 17.1753 13.088 17.1753 14.324C17.1753 15.296 16.9593 16.106 16.5273 16.754C16.1073 17.402 15.5133 17.894 14.7453 18.23L17.7153 23ZM10.0653 12.65V16.484H12.1353C12.8313 16.484 13.3713 16.31 13.7553 15.962C14.1513 15.602 14.3493 15.11 14.3493 14.486C14.3493 13.874 14.1573 13.418 13.7733 13.118C13.4013 12.806 12.8013 12.65 11.9733 12.65H10.0653Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M22.9136 20.714H28.9796V23H19.5656V20.804L23.2016 17.78L23.5076 17.51C24.0596 17.042 24.4796 16.664 24.7676 16.376C25.0676 16.088 25.3076 15.782 25.4876 15.458C25.6676 15.134 25.7576 14.78 25.7576 14.396C25.7576 13.772 25.5296 13.304 25.0736 12.992C24.6296 12.668 24.0536 12.506 23.3456 12.506C22.8176 12.506 22.3016 12.59 21.7976 12.758C21.3056 12.926 20.8736 13.136 20.5016 13.388L19.6016 11.444C20.1536 11.06 20.7836 10.754 21.4916 10.526C22.2116 10.298 22.9796 10.184 23.7956 10.184C25.2476 10.184 26.4116 10.502 27.2876 11.138C28.1636 11.774 28.6016 12.68 28.6016 13.856C28.6016 14.72 28.3496 15.506 27.8456 16.214C27.3416 16.91 26.5676 17.69 25.5236 18.554L22.9136 20.714Z",
                  }),
                ],
              });
        }
        function X({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM25.4679 14.284C24.7852 13.7613 23.7879 13.5 22.4759 13.5C21.6972 13.5 20.9666 13.6173 20.2839 13.852C19.6119 14.0867 19.0092 14.4227 18.4759 14.86L19.4679 16.364C19.8199 16.0973 20.2146 15.8893 20.6519 15.74C21.0999 15.58 21.5639 15.5 22.0439 15.5C22.6732 15.5 23.1639 15.6227 23.5159 15.868C23.8786 16.1133 24.0599 16.4387 24.0599 16.844C24.0599 17.2813 23.8679 17.6227 23.4839 17.868C23.1106 18.1027 22.6146 18.22 21.9959 18.22H20.6999V19.996H22.1399C23.7079 19.996 24.4919 20.508 24.4919 21.532C24.4919 22.0547 24.2839 22.4653 23.8679 22.764C23.4626 23.0627 22.8972 23.212 22.1719 23.212C21.0306 23.212 20.0439 22.876 19.2119 22.204L18.2039 23.932C18.7052 24.3373 19.3186 24.652 20.0439 24.876C20.7799 25.1 21.5532 25.212 22.3639 25.212C23.2172 25.212 23.9959 25.068 24.6999 24.78C25.4039 24.4813 25.9586 24.0653 26.3639 23.532C26.7692 22.988 26.9719 22.364 26.9719 21.66C26.9719 20.892 26.7479 20.2787 26.2999 19.82C25.8626 19.3507 25.2866 19.0413 24.5719 18.892V18.844C25.1799 18.6093 25.6492 18.2733 25.9799 17.836C26.3212 17.388 26.4919 16.8813 26.4919 16.316C26.4919 15.484 26.1506 14.8067 25.4679 14.284ZM9.48901 24.956H17.009V22.844H11.841V13.756H9.48901V24.956Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "19.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.009 24.956H9.48901V13.756H11.841V22.844H17.009V24.956Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M22.4759 13.5C23.7879 13.5 24.7852 13.7613 25.4679 14.284C26.1506 14.8067 26.4919 15.484 26.4919 16.316C26.4919 16.8813 26.3212 17.388 25.9799 17.836C25.6492 18.2733 25.1799 18.6093 24.5719 18.844V18.892C25.2866 19.0413 25.8626 19.3507 26.2999 19.82C26.7479 20.2787 26.9719 20.892 26.9719 21.66C26.9719 22.364 26.7692 22.988 26.3639 23.532C25.9586 24.0653 25.4039 24.4813 24.6999 24.78C23.9959 25.068 23.2172 25.212 22.3639 25.212C21.5532 25.212 20.7799 25.1 20.0439 24.876C19.3186 24.652 18.7052 24.3373 18.2039 23.932L19.2119 22.204C20.0439 22.876 21.0306 23.212 22.1719 23.212C22.8972 23.212 23.4626 23.0627 23.8679 22.764C24.2839 22.4653 24.4919 22.0547 24.4919 21.532C24.4919 20.508 23.7079 19.996 22.1399 19.996H20.6999V18.22H21.9959C22.6146 18.22 23.1106 18.1027 23.4839 17.868C23.8679 17.6227 24.0599 17.2813 24.0599 16.844C24.0599 16.4387 23.8786 16.1133 23.5159 15.868C23.1639 15.6227 22.6732 15.5 22.0439 15.5C21.5639 15.5 21.0999 15.58 20.6519 15.74C20.2146 15.8893 19.8199 16.0973 19.4679 16.364L18.4759 14.86C19.0092 14.4227 19.6119 14.0867 20.2839 13.852C20.9666 13.6173 21.6972 13.5 22.4759 13.5Z",
                  }),
                ],
              });
        }
        function ne({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 30.75C27.9411 30.75 36 25.7132 36 19.5C36 13.2868 27.9411 8.25 18 8.25C8.05887 8.25 0 13.2868 0 19.5C0 25.7132 8.05887 30.75 18 30.75ZM26.5882 14.284C25.9056 13.7613 24.9082 13.5 23.5962 13.5C22.8176 13.5 22.0869 13.6173 21.4043 13.852C20.7323 14.0867 20.1296 14.4227 19.5963 14.86L20.5882 16.364C20.9403 16.0973 21.3349 15.8893 21.7723 15.74C22.2202 15.58 22.6842 15.5 23.1642 15.5C23.7936 15.5 24.2843 15.6227 24.6362 15.868C24.9989 16.1133 25.1803 16.4387 25.1803 16.844C25.1803 17.2813 24.9883 17.6227 24.6043 17.868C24.2309 18.1027 23.7349 18.22 23.1162 18.22H21.8203V19.996H23.2603C24.8283 19.996 25.6122 20.508 25.6122 21.532C25.6122 22.0547 25.4042 22.4653 24.9883 22.764C24.5829 23.0627 24.0176 23.212 23.2923 23.212C22.1509 23.212 21.1643 22.876 20.3323 22.204L19.3242 23.932C19.8256 24.3373 20.4389 24.652 21.1642 24.876C21.9002 25.1 22.6736 25.212 23.4842 25.212C24.3376 25.212 25.1162 25.068 25.8202 24.78C26.5243 24.4813 27.0789 24.0653 27.4842 23.532C27.8896 22.988 28.0923 22.364 28.0923 21.66C28.0923 20.892 27.8682 20.2787 27.4202 19.82C26.9829 19.3507 26.4069 19.0413 25.6922 18.892V18.844C26.3002 18.6093 26.7696 18.2733 27.1003 17.836C27.4416 17.388 27.6122 16.8813 27.6122 16.316C27.6122 15.484 27.2709 14.8067 26.5882 14.284ZM15.544 24.956H18.152L15.512 20.716C16.1947 20.4173 16.7227 19.98 17.096 19.404C17.48 18.828 17.672 18.108 17.672 17.244C17.672 16.1453 17.3093 15.292 16.584 14.684C15.8587 14.0653 14.728 13.756 13.192 13.756H9V24.956H11.352V21.18H13.016H13.288L15.544 24.956ZM11.352 19.164V15.756H13.048C13.784 15.756 14.3173 15.8947 14.648 16.172C14.9893 16.4387 15.16 16.844 15.16 17.388C15.16 17.9427 14.984 18.38 14.632 18.7C14.2907 19.0093 13.8107 19.164 13.192 19.164H11.352Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "19.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M11 32V33.601C11 34.926 12.0446 36 13.3333 36H22.6667C23.9554 36 25 34.926 25 33.601V32C22.7984 32.523 20.4394 32.8029 18 32.8029C15.5606 32.8029 13.2016 32.523 11 32Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M23.1111 0H12L17.5556 5.625L23.1111 0Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M18.152 24.956H15.544L13.288 21.18H13.016H11.352V24.956H9V13.756H13.192C14.728 13.756 15.8587 14.0653 16.584 14.684C17.3093 15.292 17.672 16.1453 17.672 17.244C17.672 18.108 17.48 18.828 17.096 19.404C16.7227 19.98 16.1947 20.4173 15.512 20.716L18.152 24.956ZM11.352 15.756V19.164H13.192C13.8107 19.164 14.2907 19.0093 14.632 18.7C14.984 18.38 15.16 17.9427 15.16 17.388C15.16 16.844 14.9893 16.4387 14.648 16.172C14.3173 15.8947 13.784 15.756 13.048 15.756H11.352Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23.5962 13.5C24.9082 13.5 25.9056 13.7613 26.5882 14.284C27.2709 14.8067 27.6122 15.484 27.6122 16.316C27.6122 16.8813 27.4416 17.388 27.1003 17.836C26.7696 18.2733 26.3002 18.6093 25.6922 18.844V18.892C26.4069 19.0413 26.9829 19.3507 27.4202 19.82C27.8682 20.2787 28.0923 20.892 28.0923 21.66C28.0923 22.364 27.8896 22.988 27.4842 23.532C27.0789 24.0653 26.5243 24.4813 25.8202 24.78C25.1162 25.068 24.3376 25.212 23.4843 25.212C22.6736 25.212 21.9003 25.1 21.1643 24.876C20.4389 24.652 19.8256 24.3373 19.3243 23.932L20.3323 22.204C21.1643 22.876 22.1509 23.212 23.2923 23.212C24.0176 23.212 24.5829 23.0627 24.9882 22.764C25.4042 22.4653 25.6122 22.0547 25.6122 21.532C25.6122 20.508 24.8283 19.996 23.2603 19.996H21.8203V18.22H23.1163C23.7349 18.22 24.2309 18.1027 24.6043 17.868C24.9883 17.6227 25.1803 17.2813 25.1803 16.844C25.1803 16.4387 24.9989 16.1133 24.6363 15.868C24.2843 15.6227 23.7936 15.5 23.1643 15.5C22.6842 15.5 22.2203 15.58 21.7723 15.74C21.3349 15.8893 20.9403 16.0973 20.5883 16.364L19.5963 14.86C20.1296 14.4227 20.7323 14.0867 21.4043 13.852C22.0869 13.6173 22.8176 13.5 23.5962 13.5Z",
                  }),
                ],
              });
        }
        function O({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM20.8833 18.9875H23.6775L20.849 14.4447C21.5804 14.1247 22.1461 13.6561 22.5461 13.039C22.9575 12.4218 23.1633 11.6504 23.1633 10.7247C23.1633 9.54755 22.7747 8.63326 21.9975 7.98183C21.2204 7.31898 20.009 6.98755 18.3633 6.98755H13.8718V18.9875H16.3918V14.9418H18.1747H18.4661L20.8833 18.9875ZM16.3918 12.7818V9.13041H18.209C18.9975 9.13041 19.569 9.27898 19.9233 9.57612C20.289 9.86183 20.4718 10.2961 20.4718 10.879C20.4718 11.4733 20.2833 11.9418 19.9061 12.2847C19.5404 12.6161 19.0261 12.7818 18.3633 12.7818H16.3918Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "13.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23.6775 18.9875H20.8833L18.4661 14.9418H18.1747H16.3918V18.9875H13.8718V6.98755H18.3633C20.009 6.98755 21.2204 7.31898 21.9975 7.98184C22.7747 8.63326 23.1633 9.54755 23.1633 10.7247C23.1633 11.6504 22.9575 12.4218 22.5461 13.039C22.1461 13.6561 21.5804 14.1247 20.849 14.4447L23.6775 18.9875ZM16.3918 9.13041V12.7818H18.3633C19.0261 12.7818 19.5404 12.6161 19.9061 12.2847C20.2833 11.9418 20.4718 11.4733 20.4718 10.879C20.4718 10.2961 20.289 9.86183 19.9233 9.57612C19.569 9.27898 18.9975 9.13041 18.209 9.13041H16.3918Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              });
        }
        function z({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 24.75C27.9411 24.75 36 19.7132 36 13.5C36 7.2868 27.9411 2.25 18 2.25C8.05887 2.25 0 7.2868 0 13.5C0 19.7132 8.05887 24.75 18 24.75ZM14 19H23V16.7371H16.8149V7H14V19Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("ellipse", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "13.5",
                    rx: "18",
                    ry: "11.25",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23 19H14V7H16.8149V16.7371H23V19Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M11 26V31.601C11 32.926 12.0446 34 13.3333 34H22.6667C23.9554 34 25 32.926 25 31.601V26C22.7984 26.523 20.4394 26.8029 18 26.8029C15.5606 26.8029 13.2016 26.523 11 26Z",
                  }),
                ],
              });
        }
        function q({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.62341 24.75H17.0834V22.374H11.2694V12.15H8.62341V24.75ZM27.3111 19.854V12.15H24.8631L18.6891 20.16V21.888H24.6291V24.75H27.3111V21.888H29.1291V19.854H27.3111ZM21.2631 19.854L24.7371 15.3V19.854H21.2631Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.0834 24.75H8.62341V12.15H11.2694V22.374H17.0834V24.75Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M27.3111 12.15V19.854H29.1291V21.888H27.3111V24.75H24.6291V21.888H18.6891V20.16L24.8631 12.15H27.3111ZM24.7371 15.3L21.2631 19.854H24.7371V15.3Z",
                  }),
                ],
              });
        }
        function b({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM8.23669 24.75H16.6967V22.374H10.8827V12.15H8.23669V24.75ZM27.3744 14.4V12.15H19.3284V18.648L21.0024 19.566C21.3744 19.266 21.7524 19.044 22.1364 18.9C22.5204 18.744 22.9404 18.666 23.3964 18.666C24.0084 18.666 24.4884 18.828 24.8364 19.152C25.1964 19.476 25.3764 19.944 25.3764 20.556C25.3764 21.252 25.1424 21.786 24.6744 22.158C24.2064 22.53 23.5464 22.716 22.6944 22.716C21.5664 22.716 20.5404 22.404 19.6164 21.78L18.6804 23.796C19.1484 24.192 19.7364 24.498 20.4444 24.714C21.1524 24.93 21.9144 25.038 22.7304 25.038C23.8344 25.038 24.7884 24.852 25.5924 24.48C26.4084 24.096 27.0264 23.562 27.4464 22.878C27.8784 22.194 28.0944 21.396 28.0944 20.484C28.0944 19.26 27.7524 18.33 27.0684 17.694C26.3964 17.046 25.4964 16.722 24.3684 16.722C23.9244 16.722 23.4804 16.776 23.0364 16.884C22.6044 16.98 22.2144 17.136 21.8664 17.352V14.4H27.3744Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M16.6967 24.75H8.23669V12.15H10.8827V22.374H16.6967V24.75Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M27.3744 12.15V14.4H21.8664V17.352C22.2144 17.136 22.6044 16.98 23.0364 16.884C23.4804 16.776 23.9244 16.722 24.3684 16.722C25.4964 16.722 26.3964 17.046 27.0684 17.694C27.7524 18.33 28.0944 19.26 28.0944 20.484C28.0944 21.396 27.8784 22.194 27.4464 22.878C27.0264 23.562 26.4084 24.096 25.5924 24.48C24.7884 24.852 23.8344 25.038 22.7304 25.038C21.9144 25.038 21.1524 24.93 20.4444 24.714C19.7364 24.498 19.1484 24.192 18.6804 23.796L19.6164 21.78C20.5404 22.404 21.5664 22.716 22.6944 22.716C23.5464 22.716 24.2064 22.53 24.6744 22.158C25.1424 21.786 25.3764 21.252 25.3764 20.556C25.3764 19.944 25.1964 19.476 24.8364 19.152C24.4884 18.828 24.0084 18.666 23.3964 18.666C22.9404 18.666 22.5204 18.744 22.1364 18.9C21.7524 19.044 21.3744 19.266 21.0024 19.566L19.3284 18.648V12.15H27.3744Z",
                  }),
                ],
              });
        }
        function l({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.5176 24.75H17.4516L14.4816 19.98C15.2496 19.644 15.8436 19.152 16.2636 18.504C16.6956 17.856 16.9116 17.046 16.9116 16.074C16.9116 14.838 16.5036 13.878 15.6876 13.194C14.8716 12.498 13.5996 12.15 11.8716 12.15H7.15564V24.75H9.80164V20.502H11.6736H11.9796L14.5176 24.75ZM9.80164 18.234V14.4H11.7096C12.5376 14.4 13.1376 14.556 13.5096 14.868C13.8936 15.168 14.0856 15.624 14.0856 16.236C14.0856 16.86 13.8876 17.352 13.4916 17.712C13.1076 18.06 12.5676 18.234 11.8716 18.234H9.80164ZM27.6539 19.854V12.15H25.2059L19.0319 20.16V21.888H24.9719V24.75H27.6539V21.888H29.4719V19.854H27.6539ZM21.6059 19.854L25.0799 15.3V19.854H21.6059Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.4516 24.75H14.5176L11.9796 20.502H11.6736H9.80164V24.75H7.15564V12.15H11.8716C13.5996 12.15 14.8716 12.498 15.6876 13.194C16.5036 13.878 16.9116 14.838 16.9116 16.074C16.9116 17.046 16.6956 17.856 16.2636 18.504C15.8436 19.152 15.2496 19.644 14.4816 19.98L17.4516 24.75ZM9.80164 14.4V18.234H11.8716C12.5676 18.234 13.1076 18.06 13.4916 17.712C13.8876 17.352 14.0856 16.86 14.0856 16.236C14.0856 15.624 13.8936 15.168 13.5096 14.868C13.1376 14.556 12.5376 14.4 11.7096 14.4H9.80164Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M27.6539 12.15V19.854H29.4719V21.888H27.6539V24.75H24.9719V21.888H19.0319V20.16L25.2059 12.15H27.6539ZM25.0799 15.3L21.6059 19.854H25.0799V15.3Z",
                  }),
                ],
              });
        }
        function y({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 0C0.895431 0 0 0.895431 0 2V34C0 35.1046 0.895431 36 2 36H34C35.1046 36 36 35.1046 36 34V2C36 0.895431 35.1046 0 34 0H2ZM14.6934 24.75H17.6274L14.6574 19.98C15.4254 19.644 16.0194 19.152 16.4394 18.504C16.8714 17.856 17.0874 17.046 17.0874 16.074C17.0874 14.838 16.6794 13.878 15.8634 13.194C15.0474 12.498 13.7754 12.15 12.0474 12.15H7.33142V24.75H9.97742V20.502H11.8494H12.1554L14.6934 24.75ZM9.97742 18.234V14.4H11.8854C12.7134 14.4 13.3134 14.556 13.6854 14.868C14.0694 15.168 14.2614 15.624 14.2614 16.236C14.2614 16.86 14.0634 17.352 13.6674 17.712C13.2834 18.06 12.7434 18.234 12.0474 18.234H9.97742ZM28.2797 14.4V12.15H20.2337V18.648L21.9077 19.566C22.2797 19.266 22.6577 19.044 23.0417 18.9C23.4257 18.744 23.8457 18.666 24.3017 18.666C24.9137 18.666 25.3937 18.828 25.7417 19.152C26.1017 19.476 26.2817 19.944 26.2817 20.556C26.2817 21.252 26.0477 21.786 25.5797 22.158C25.1117 22.53 24.4517 22.716 23.5997 22.716C22.4717 22.716 21.4457 22.404 20.5217 21.78L19.5857 23.796C20.0537 24.192 20.6417 24.498 21.3497 24.714C22.0577 24.93 22.8197 25.038 23.6357 25.038C24.7397 25.038 25.6937 24.852 26.4977 24.48C27.3137 24.096 27.9317 23.562 28.3517 22.878C28.7837 22.194 28.9997 21.396 28.9997 20.484C28.9997 19.26 28.6577 18.33 27.9737 17.694C27.3017 17.046 26.4017 16.722 25.2737 16.722C24.8297 16.722 24.3857 16.776 23.9417 16.884C23.5097 16.98 23.1197 17.136 22.7717 17.352V14.4H28.2797Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M0 2C0 0.895431 0.895431 0 2 0H34C35.1046 0 36 0.895431 36 2V34C36 35.1046 35.1046 36 34 36H2C0.895431 36 0 35.1046 0 34V2Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.6274 24.75H14.6934L12.1554 20.502H11.8494H9.97742V24.75H7.33142V12.15H12.0474C13.7754 12.15 15.0474 12.498 15.8634 13.194C16.6794 13.878 17.0874 14.838 17.0874 16.074C17.0874 17.046 16.8714 17.856 16.4394 18.504C16.0194 19.152 15.4254 19.644 14.6574 19.98L17.6274 24.75ZM9.97742 14.4V18.234H12.0474C12.7434 18.234 13.2834 18.06 13.6674 17.712C14.0634 17.352 14.2614 16.86 14.2614 16.236C14.2614 15.624 14.0694 15.168 13.6854 14.868C13.3134 14.556 12.7134 14.4 11.8854 14.4H9.97742Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M28.2797 12.15V14.4H22.7717V17.352C23.1197 17.136 23.5097 16.98 23.9417 16.884C24.3857 16.776 24.8297 16.722 25.2737 16.722C26.4017 16.722 27.3017 17.046 27.9737 17.694C28.6577 18.33 28.9997 19.26 28.9997 20.484C28.9997 21.396 28.7837 22.194 28.3517 22.878C27.9317 23.562 27.3137 24.096 26.4977 24.48C25.6937 24.852 24.7397 25.038 23.6357 25.038C22.8197 25.038 22.0577 24.93 21.3497 24.714C20.6417 24.498 20.0537 24.192 19.5857 23.796L20.5217 21.78C21.4457 22.404 22.4717 22.716 23.5997 22.716C24.4517 22.716 25.1117 22.53 25.5797 22.158C26.0477 21.786 26.2817 21.252 26.2817 20.556C26.2817 19.944 26.1017 19.476 25.7417 19.152C25.3937 18.828 24.9137 18.666 24.3017 18.666C23.8457 18.666 23.4257 18.744 23.0417 18.9C22.6577 19.044 22.2797 19.266 21.9077 19.566L20.2337 18.648V12.15H28.2797Z",
                  }),
                ],
              });
        }
        function B({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.73583 3C3.6326 3 1.88863 4.6288 1.74515 6.72713L0.292161 27.9771C0.134133 30.2883 1.96629 32.25 4.28284 32.25H31.7172C34.0337 32.25 35.8659 30.2883 35.7078 27.9771L34.2548 6.72713C34.1114 4.6288 32.3674 3 30.2642 3H5.73583ZM14.8236 24.0625H23.2836V21.6865H17.4696V11.4625H14.8236V24.0625Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23.2836 24.0625H14.8236V11.4625H17.4696V21.6865H23.2836V24.0625Z",
                  }),
                ],
              });
        }
        function c({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM14.8237 28.0625H23.2837V25.6865H17.4697V15.4625H14.8237V28.0625Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23.2836 28.0625H14.8236V15.4625H17.4696V25.6865H23.2836V28.0625Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              });
        }
        function u({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.7359 3C3.63266 3 1.88869 4.6288 1.74521 6.72713L0.292222 27.9771C0.134194 30.2883 1.96635 32.25 4.2829 32.25H31.7172C34.0338 32.25 35.8659 30.2883 35.7079 27.9771L34.2549 6.72713C34.1114 4.6288 32.3675 3 30.2642 3H5.7359ZM20.7179 24.0625H23.6519L20.6819 19.2925C21.4499 18.9565 22.0439 18.4645 22.4639 17.8165C22.8959 17.1685 23.1119 16.3585 23.1119 15.3865C23.1119 14.1505 22.7039 13.1905 21.8879 12.5065C21.0719 11.8105 19.7999 11.4625 18.0719 11.4625H13.3559V24.0625H16.0019V19.8145H17.8739H18.1799L20.7179 24.0625ZM16.0019 17.5465V13.7125H17.9099C18.7379 13.7125 19.3379 13.8685 19.7099 14.1805C20.0939 14.4805 20.2859 14.9365 20.2859 15.5485C20.2859 16.1725 20.0879 16.6645 19.6919 17.0245C19.3079 17.3725 18.7679 17.5465 18.0719 17.5465H16.0019Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M1.74515 6.72713C1.88863 4.6288 3.6326 3 5.73584 3H30.2642C32.3674 3 34.1114 4.6288 34.2548 6.72713L35.7078 27.9771C35.8659 30.2883 34.0337 32.25 31.7172 32.25H4.28284C1.96629 32.25 0.134134 30.2883 0.292162 27.9771L1.74515 6.72713Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23.6518 24.0625H20.7178L18.1798 19.8145H17.8738H16.0018V24.0625H13.3558V11.4625H18.0718C19.7998 11.4625 21.0718 11.8105 21.8878 12.5065C22.7038 13.1905 23.1118 14.1505 23.1118 15.3865C23.1118 16.3585 22.8958 17.1685 22.4638 17.8165C22.0438 18.4645 21.4498 18.9565 20.6818 19.2925L23.6518 24.0625ZM16.0018 13.7125V17.5465H18.0718C18.7678 17.5465 19.3078 17.3725 19.6918 17.0245C20.0878 16.6645 20.2858 16.1725 20.2858 15.5485C20.2858 14.9365 20.0938 14.4805 19.7098 14.1805C19.3378 13.8685 18.7378 13.7125 17.9098 13.7125H16.0018Z",
                  }),
                ],
              });
        }
        function A({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.6282 8C4.52356 8 2.77893 9.6309 2.63727 11.7308L1.28806 31.7308C1.13224 34.0406 2.96389 36 5.27899 36H30.7211C33.0362 36 34.8679 34.0406 34.7121 31.7308L33.3629 11.7308C33.2212 9.63091 31.4766 8 29.3719 8H6.6282ZM20.7179 28.0625H23.6519L20.6819 23.2925C21.4499 22.9565 22.0439 22.4645 22.4639 21.8165C22.8959 21.1685 23.1119 20.3585 23.1119 19.3865C23.1119 18.1505 22.7039 17.1905 21.8879 16.5065C21.0719 15.8105 19.7999 15.4625 18.0719 15.4625H13.3559V28.0625H16.0019V23.8145H17.8739H18.1799L20.7179 28.0625ZM16.0019 21.5465V17.7125H17.9099C18.7379 17.7125 19.3379 17.8685 19.7099 18.1805C20.0939 18.4805 20.2859 18.9365 20.2859 19.5485C20.2859 20.1725 20.0879 20.6645 19.6919 21.0245C19.3079 21.3725 18.7679 21.5465 18.0719 21.5465H16.0019Z",
                  }),
                  (0, e.jsx)("path", {
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M2.63721 11.7308C2.77887 9.6309 4.5235 8 6.62814 8H29.3719C31.4765 8 33.2211 9.63091 33.3628 11.7308L34.712 31.7308C34.8678 34.0406 33.0362 36 30.7211 36H5.27893C2.96382 36 1.13218 34.0406 1.288 31.7308L2.63721 11.7308Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M23.6518 28.0625H20.7178L18.1798 23.8145H17.8738H16.0018V28.0625H13.3558V15.4625H18.0718C19.7998 15.4625 21.0718 15.8105 21.8878 16.5065C22.7038 17.1905 23.1118 18.1505 23.1118 19.3865C23.1118 20.3585 22.8958 21.1685 22.4638 21.8165C22.0438 22.4645 21.4498 22.9565 20.6818 23.2925L23.6518 28.0625ZM16.0018 17.7125V21.5465H18.0718C18.7678 21.5465 19.3078 21.3725 19.6918 21.0245C20.0878 20.6645 20.2858 20.1725 20.2858 19.5485C20.2858 18.9365 20.0938 18.4805 19.7098 18.1805C19.3378 17.8685 18.7378 17.7125 17.9098 17.7125H16.0018Z",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Background,
                    fill: "currentColor",
                    d: "M24 0H12L18 6L24 0Z",
                  }),
                ],
              });
        }
        function j({ bIsKnockout: D, ...p }) {
          return D
            ? (0, e.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "currentColor",
                  d: "M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36ZM20.4999 10.8201C19.7519 10.4974 18.8719 10.3361 17.8599 10.3361C16.9799 10.3361 16.1219 10.4681 15.2859 10.7321C14.4499 10.9961 13.7166 11.3407 13.0859 11.7661L14.0759 13.9881C15.0586 13.2547 16.1073 12.8881 17.2219 12.8881C17.9699 12.8881 18.5493 13.0494 18.9599 13.3721C19.3853 13.6801 19.5979 14.1201 19.5979 14.6921C19.5979 15.1027 19.4953 15.4474 19.2899 15.7261C19.0846 16.0047 18.7693 16.3201 18.3439 16.6721C17.8893 17.0681 17.5153 17.4347 17.2219 17.7721C16.9286 18.1094 16.6793 18.5641 16.4739 19.1361C16.2686 19.7081 16.1659 20.4047 16.1659 21.2261H18.8499C18.8499 20.6541 18.9453 20.1554 19.1359 19.7301C19.3266 19.2901 19.5539 18.9234 19.8179 18.6301C20.0966 18.3221 20.4633 17.9701 20.9179 17.5741C21.3579 17.1781 21.7026 16.8407 21.9519 16.5621C22.2159 16.2834 22.4359 15.9461 22.6119 15.5501C22.7879 15.1541 22.8759 14.6994 22.8759 14.1861C22.8759 13.4234 22.6706 12.7561 22.2599 12.1841C21.8493 11.5974 21.2626 11.1427 20.4999 10.8201ZM18.7839 23.2721C18.4759 22.9494 18.0653 22.7881 17.5519 22.7881C17.0386 22.7881 16.6279 22.9494 16.3199 23.2721C16.0119 23.5801 15.8579 23.9907 15.8579 24.5041C15.8579 25.0467 16.0119 25.4794 16.3199 25.8021C16.6279 26.1101 17.0386 26.2641 17.5519 26.2641C18.0653 26.2641 18.4759 26.1101 18.7839 25.8021C19.0919 25.4794 19.2459 25.0467 19.2459 24.5041C19.2459 23.9907 19.0919 23.5801 18.7839 23.2721Z",
                }),
              })
            : (0, e.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
                ...p,
                children: [
                  (0, e.jsx)("circle", {
                    className: o().Background,
                    fill: "currentColor",
                    cx: "18",
                    cy: "18",
                    r: "18",
                  }),
                  (0, e.jsx)("path", {
                    className: o().Foreground,
                    fill: "currentColor",
                    d: "M17.8599 10.3361C18.8719 10.3361 19.7519 10.4974 20.4999 10.8201C21.2626 11.1427 21.8493 11.5974 22.2599 12.1841C22.6706 12.7561 22.8759 13.4234 22.8759 14.1861C22.8759 14.6994 22.7879 15.1541 22.6119 15.5501C22.4359 15.9461 22.2159 16.2834 21.9519 16.5621C21.7026 16.8407 21.3579 17.1781 20.9179 17.5741C20.4633 17.9701 20.0966 18.3221 19.8179 18.6301C19.5539 18.9234 19.3266 19.2901 19.1359 19.7301C18.9453 20.1554 18.8499 20.6541 18.8499 21.2261H16.1659C16.1659 20.4047 16.2686 19.7081 16.4739 19.1361C16.6793 18.5641 16.9286 18.1094 17.2219 17.7721C17.5153 17.4347 17.8893 17.0681 18.3439 16.6721C18.7693 16.3201 19.0846 16.0047 19.2899 15.7261C19.4953 15.4474 19.5979 15.1027 19.5979 14.6921C19.5979 14.1201 19.3853 13.6801 18.9599 13.3721C18.5493 13.0494 17.9699 12.8881 17.2219 12.8881C16.1073 12.8881 15.0586 13.2547 14.0759 13.9881L13.0859 11.7661C13.7166 11.3407 14.4499 10.9961 15.2859 10.7321C16.1219 10.4681 16.9799 10.3361 17.8599 10.3361ZM17.5519 22.7881C18.0653 22.7881 18.4759 22.9494 18.7839 23.2721C19.0919 23.5801 19.2459 23.9907 19.2459 24.5041C19.2459 25.0467 19.0919 25.4794 18.7839 25.8021C18.4759 26.1101 18.0653 26.2641 17.5519 26.2641C17.0386 26.2641 16.6279 26.1101 16.3199 25.8021C16.0119 25.4794 15.8579 25.0467 15.8579 24.5041C15.8579 23.9907 16.0119 23.5801 16.3199 23.2721C16.6279 22.9494 17.0386 22.7881 17.5519 22.7881Z",
                  }),
                ],
              });
        }
      },
      85705: (w, N, t) => {
        "use strict";
        t.d(N, { k: () => f });
        var e = t(7850),
          n = t(36707),
          E = t(37999),
          o = t.n(E);
        function f(g) {
          const { size: x, color: C, trackColor: v } = g,
            T = { borderColor: v, borderLeftColor: C };
          if (typeof x == "number") {
            const h = `${x}px`;
            (T.width = h),
              (T.height = h),
              (T.minHeight = h),
              (T.minWidth = h),
              (T.borderWidth = `${x / 10}px`);
          }
          return (0, e.jsx)("div", {
            className: (0, n.A)(
              E.Loading,
              x == "small" && E.Small,
              (x == "medium" || !x) && E.Medium,
              x == "large" && E.Large,
            ),
            style: T,
          });
        }
      },
      6046: (w, N, t) => {
        "use strict";
        t.d(N, { Ay: () => c });
        var e = t(7850),
          n = t(19298),
          E = t(7967),
          o = t(75779);
        const f = 0,
          g = 1,
          x = 2,
          C = 3;
        var v = t(55546);
        const T = 0,
          h = 1,
          i = 2,
          a = 3,
          s = 4;
        var r = t(90626),
          m = t(21690),
          S = t(74732),
          M = t(41944),
          I = t(35111),
          L = t.n(I),
          F = t(31377),
          J = t(36118),
          H = t(39905),
          $ = t(3166),
          k = t(25792),
          Z = t(21418),
          U = t(35038),
          X = t(80613),
          ne = t.n(X),
          O = t(75245);
        class z extends X.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              z.prototype.appid || O.Sg(z.M()),
              X.Message.initialize(this, d, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    appid: { n: 1, br: O.qM.readUint32, bw: O.gp.writeUint32 },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = O.w0(z.M())), z.sm_mbf;
          }
          toObject(d = !1) {
            return z.toObject(d, this);
          }
          static toObject(d, R) {
            return O.BT(z.M(), d, R);
          }
          static fromObject(d) {
            return O.Uq(z.M(), d);
          }
          static deserializeBinary(d) {
            let R = new (ne().BinaryReader)(d),
              P = new z();
            return z.deserializeBinaryFromReader(P, R);
          }
          static deserializeBinaryFromReader(d, R) {
            return O.zj(z.MBF(), d, R);
          }
          serializeBinary() {
            var d = new (ne().BinaryWriter)();
            return z.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, R) {
            O.i0(z.M(), d, R);
          }
          serializeBase64String() {
            var d = new (ne().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePerformanceStats_GetGameFrameRateStats_Request";
          }
        }
        class q extends X.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              q.prototype.frame_rates || O.Sg(q.M()),
              X.Message.initialize(this, d, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: { frame_rates: { n: 1, c: b, r: !0, q: !0 } },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = O.w0(q.M())), q.sm_mbf;
          }
          toObject(d = !1) {
            return q.toObject(d, this);
          }
          static toObject(d, R) {
            return O.BT(q.M(), d, R);
          }
          static fromObject(d) {
            return O.Uq(q.M(), d);
          }
          static deserializeBinary(d) {
            let R = new (ne().BinaryReader)(d),
              P = new q();
            return q.deserializeBinaryFromReader(P, R);
          }
          static deserializeBinaryFromReader(d, R) {
            return O.zj(q.MBF(), d, R);
          }
          serializeBinary() {
            var d = new (ne().BinaryWriter)();
            return q.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, R) {
            O.i0(q.M(), d, R);
          }
          serializeBase64String() {
            var d = new (ne().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePerformanceStats_GetGameFrameRateStats_Response";
          }
        }
        class b extends X.Message {
          static ImplementsStaticInterface() {}
          constructor(d = null) {
            super(),
              b.prototype.clusterid || O.Sg(b.M()),
              X.Message.initialize(this, d, 0, -1, [8], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    clusterid: {
                      n: 1,
                      br: O.qM.readUint64String,
                      bw: O.gp.writeUint64String,
                    },
                    report_days: {
                      n: 4,
                      br: O.qM.readUint32,
                      bw: O.gp.writeUint32,
                    },
                    report_count: {
                      n: 5,
                      br: O.qM.readUint64String,
                      bw: O.gp.writeUint64String,
                    },
                    mean_frame_rate: {
                      n: 6,
                      br: O.qM.readDouble,
                      bw: O.gp.writeDouble,
                    },
                    mean_frame_rate_stddev: {
                      n: 7,
                      br: O.qM.readDouble,
                      bw: O.gp.writeDouble,
                    },
                    frame_rate_histogram: {
                      n: 8,
                      r: !0,
                      q: !0,
                      br: O.qM.readDouble,
                      pbr: O.qM.readPackedDouble,
                      bw: O.gp.writeRepeatedDouble,
                    },
                    histogram_report_count: {
                      n: 9,
                      br: O.qM.readUint64String,
                      bw: O.gp.writeUint64String,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = O.w0(b.M())), b.sm_mbf;
          }
          toObject(d = !1) {
            return b.toObject(d, this);
          }
          static toObject(d, R) {
            return O.BT(b.M(), d, R);
          }
          static fromObject(d) {
            return O.Uq(b.M(), d);
          }
          static deserializeBinary(d) {
            let R = new (ne().BinaryReader)(d),
              P = new b();
            return b.deserializeBinaryFromReader(P, R);
          }
          static deserializeBinaryFromReader(d, R) {
            return O.zj(b.MBF(), d, R);
          }
          serializeBinary() {
            var d = new (ne().BinaryWriter)();
            return b.serializeBinaryToWriter(this, d), d.getResultBuffer();
          }
          static serializeBinaryToWriter(d, R) {
            O.i0(b.M(), d, R);
          }
          serializeBase64String() {
            var d = new (ne().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, d), d.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePerformanceStats_GetGameFrameRateStats_Response_FrameRate";
          }
        }
        var l;
        ((_) => {
          function d(R, P, G) {
            return R.SendMsg(
              "GamePerformanceStats.GetGameFrameRateStats#1",
              (0, U.I8)(z, P, G),
              q,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetGameFrameRateStats = d;
        })(l || (l = {}));
        function y(_) {
          const d = useActiveServiceTransport();
          return useQuery({
            queryKey: ["performancestats_" + _],
            queryFn: async () => {
              if (!_) return null;
              const R = CProtoBufMsg.Init(
                CGamePerformanceStats_GetGameFrameRateStats_Request,
              );
              R.Body().set_appid(_);
              const P = await GamePerformanceStatsService.GetGameFrameRateStats(
                d,
                R,
              );
              return P.BSuccess() ? P.Body().toObject() : null;
            },
          });
        }
        var B = t(26356);
        function c(_) {
          const {
            results: d,
            titleId: R,
            descriptionId: P,
            appName: G,
            buttonProps: Q,
            autoFocus: ee,
            onOpenBlogPost: ce,
            eStartingTab: ue = B.ZJ,
            bShowTabs: W = !0,
          } = _;
          if (!d) return null;
          const Le = () => {
            ce
              ? ce()
              : d.steam_deck_blog_url &&
                (window.location.href = d.steam_deck_blog_url);
          };
          let ge = Q ?? {},
            De = null,
            Te = null;
          if (
            (d.steam_deck_blog_url &&
              ((ge.onOptionsActionDescription = H.Z.Localize(
                "#SteamDeckVerified_ViewDeveloperPost",
              )),
              (ge.onOptionsButton = Le),
              (De = (0, e.jsx)(K, {
                blogURL: d.steam_deck_blog_url,
                eHWCompatibiltyDisplay: B.ZJ,
              })),
              (Te = (0, e.jsx)(K, {
                blogURL: d.steam_deck_blog_url,
                eHWCompatibiltyDisplay: B.c9,
              }))),
            !d.resolved_items?.length &&
              !d.machine_resolved_items?.length &&
              !d.frame_resolved_items?.length)
          ) {
            let ve = "",
              _e = null,
              Re = null,
              Be = (0, e.jsx)(M.Ez, { category: d.resolved_category });
            return (
              ue == B.JR
                ? ((ve = H.Z.Localize(
                    "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
                  )),
                  (Re = (0, e.jsx)(M.Nt, {
                    id: P,
                    category: d.machine_resolved_category,
                    appName: G,
                  })),
                  (Be = (0, e.jsx)(M.Ez, {
                    category: d.machine_resolved_category,
                  })))
                : ue == B.c9
                  ? ((ve = H.Z.Localize(
                      "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
                    )),
                    (Re = (0, e.jsx)(M.cP, {
                      id: P,
                      category: d.steamos_resolved_category,
                      appName: G,
                    })),
                    (Be = (0, e.jsx)(M.aw, {
                      category: d.steamos_resolved_category,
                    })),
                    (_e = Te))
                  : ue == B.bY
                    ? ((ve = H.Z.Localize(
                        "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
                      )),
                      (Re = (0, e.jsx)(M.Pu, {
                        id: P,
                        category: d.frame_resolved_category,
                        appName: G,
                      })),
                      (Be = (0, e.jsx)(M.Ez, {
                        category: d.frame_resolved_category,
                      })))
                    : ((ve = H.Z.Localize(
                        "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
                      )),
                      (Re = (0, e.jsx)(M.UN, {
                        category: d.resolved_category,
                        appName: G,
                      })),
                      (_e = De)),
              (0, e.jsxs)(n.Z, {
                autoFocus: ee,
                focusableIfEmpty: ee,
                noFocusRing: !0,
                className: L().CompatibilityDetailsContainer,
                ...ge,
                children: [
                  (0, e.jsxs)("div", {
                    id: R,
                    className: L().DialogHeader,
                    children: [
                      (0, e.jsx)("div", {
                        className: L().DialogTitle,
                        children: ve,
                      }),
                      (0, e.jsx)("div", {
                        className: L().AppTitleCategory,
                        children: Be,
                      }),
                    ],
                  }),
                  Re,
                  _e,
                  !1,
                ],
              })
            );
          }
          const Ie = (0, m.z5)(d.resolved_category),
            ke = (0, m._R)(d.steamos_resolved_category),
            Ge = (0, m.z5)(d.machine_resolved_category),
            Ye = (0, m.z5)(d.frame_resolved_category || o.YX);
          if (!W) {
            let ve = null;
            switch (ue) {
              case B.JR:
                ve = (0, e.jsx)(D, { ..._ });
                break;
              case B.c9:
              case B.eC:
                ve = (0, e.jsx)(A, { ..._, deckBlogContent: Te });
                break;
              case B.bY:
                ve = (0, e.jsx)(p, { ..._ });
                break;
              case B.ZJ:
              default:
                ve = (0, e.jsx)(j, { ..._, deckBlogContent: De });
            }
            return (0, e.jsx)(k.tH, { children: ve });
          }
          const Pe = (ve) =>
              window.sessionStorage.setItem(
                "steamdeckcompatibility",
                `?tab=${ve.key}`,
              ),
            Ue = [
              {
                name: (0, e.jsxs)("div", {
                  className: L().pillContent,
                  children: [
                    (0, e.jsx)(J.lRD, { className: L().SteamDeckDeviceIcon }),
                    (0, e.jsx)(Ie, { className: L().RatingIcon }),
                  ],
                }),
                key: B.ZJ.toString(),
                contents: (0, e.jsx)(k.tH, {
                  children: (0, e.jsx)(j, { ..._, deckBlogContent: De }),
                }),
                onClick: Pe,
              },
              {
                name: (0, e.jsxs)("div", {
                  className: L().pillContent,
                  children: [
                    (0, e.jsx)(J.fhy, {
                      className: L().SteamMachineDeviceIcon,
                    }),
                    (0, e.jsx)(Ge, { className: L().RatingIcon }),
                  ],
                }),
                key: B.JR.toString(),
                contents: (0, e.jsx)(k.tH, {
                  children: (0, e.jsx)(D, { ..._ }),
                }),
                onClick: Pe,
              },
              {
                name: (0, e.jsxs)("div", {
                  className: L().pillContent,
                  children: [
                    "steamos",
                    (0, e.jsx)(ke, { className: L().RatingIcon }),
                  ],
                }),
                key: B.c9.toString(),
                contents: (0, e.jsx)(k.tH, {
                  children: (0, e.jsx)(A, { ..._, deckBlogContent: Te }),
                }),
                onClick: Pe,
              },
              {
                name: (0, e.jsxs)("div", {
                  className: L().pillContent,
                  children: [
                    (0, e.jsx)(J.Ves, { className: L().SteamFrameDeviceIcon }),
                    (0, e.jsx)(Ye, { className: L().RatingIcon }),
                  ],
                }),
                key: B.bY.toString(),
                contents: (0, e.jsx)(k.tH, {
                  children: (0, e.jsx)(p, { ..._ }),
                }),
                onClick: Pe,
              },
            ];
          return (0, e.jsx)(Z.V, {
            tabs: Ue,
            classNameCtn: L().CompatibilityTabs,
            classNameTabContent: L().CompatibilityTabContent,
            startingTab: ue.toString(),
            preferredFocus: !0,
            bDisableRouting: !0,
            focusRingHasBorderRadius: !0,
          });
        }
        function u(_) {
          const {
              titleId: d,
              title: R,
              autoFocus: P,
              buttonProps: G,
              ratingIcon: Q,
              ratingSummary: ee,
              deckBlogContent: ce,
              children: ue,
            } = _,
            [W, Le] = r.useState(!1),
            ge = r.useCallback(() => W, [W]),
            De = r.useRef(null),
            Te = (0, $.Qn)();
          let Ie = G ?? {};
          return (
            r.useEffect(() => {
              De?.current?.scrollHeight !== void 0 &&
                De?.current?.clientHeight !== void 0 &&
                Le(De?.current?.scrollHeight > De?.current?.clientHeight);
            }, []),
            (0, e.jsxs)(n.Z, {
              className: L().CompatibilityDetailsContainer,
              ...Ie,
              children: [
                (0, e.jsxs)("div", {
                  children: [
                    (0, e.jsxs)("div", {
                      id: d,
                      className: L().DialogHeader,
                      children: [
                        (0, e.jsx)("div", {
                          className: L().DialogTitle,
                          children: R,
                        }),
                        (0, e.jsx)("div", {
                          className: L().AppTitleCategory,
                          children: Q,
                        }),
                      ],
                    }),
                    ee,
                  ],
                }),
                ce,
                (0, e.jsx)(E.Qg, {
                  ref: De,
                  className: ge()
                    ? L().CompatibilityDetailsInterior_Scroll
                    : L().CompatibilityDetailsInterior_NoScroll,
                  children: (0, e.jsx)(n.Z, {
                    autoFocus: P,
                    focusableIfEmpty: P || ge(),
                    noFocusRing: !0,
                    children: ue,
                  }),
                }),
              ],
            })
          );
        }
        function A(_) {
          const { titleId: d, descriptionId: R, results: P, appName: G } = _,
            Q =
              P.steamos_resolved_items &&
              P.steamos_resolved_items?.findIndex(
                (W) => W.display_type == g,
              ) !== -1,
            ee = (0, e.jsx)(M.cP, {
              id: R,
              category: P.steamos_resolved_category ?? v.xs,
              appName: G,
            }),
            ce = (0, e.jsx)(M.aw, { category: P.steamos_resolved_category }),
            ue =
              P.steamos_resolved_items && P.steamos_resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: d,
            title: H.Z.Localize(
              "#SteamOSCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: ee,
            ..._,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                ue &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityDetailsSeparator,
                  }),
                P.steamos_resolved_items &&
                  P.steamos_resolved_items
                    .filter((W) => W.display_type != g)
                    .map((W) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: L().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(re, { displaytype: W.display_type }),
                            (0, e.jsx)("span", {
                              children: H.Z.Localize(W.loc_token),
                            }),
                          ],
                        },
                        W.loc_token + W.display_type,
                      ),
                    ),
                Q &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityNotes,
                    children: P.steamos_resolved_items
                      ?.filter((W) => W.display_type == g)
                      .map((W) =>
                        (0, e.jsxs)(
                          "div",
                          {
                            className: L().CompatibilityDetailsRow,
                            children: [
                              (0, e.jsx)(re, { displaytype: W.display_type }),
                              (0, e.jsx)("span", {
                                children: H.Z.Localize(W.loc_token),
                              }),
                            ],
                          },
                          W.loc_token + W.display_type,
                        ),
                      ),
                  }),
              ],
            }),
          });
        }
        function j(_) {
          const { titleId: d, descriptionId: R, results: P, appName: G } = _,
            Q = P.resolved_items?.findIndex((W) => W.display_type == h) !== -1,
            ee = (0, e.jsx)(M.UN, {
              id: R,
              category: P.resolved_category,
              appName: G,
            }),
            ce = (0, e.jsx)(M.Ez, { category: P.resolved_category }),
            ue = P.resolved_items && P.resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: d,
            title: H.Z.Localize(
              "#SteamDeckVerified_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: ee,
            ..._,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                ue &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityDetailsSeparator,
                  }),
                P.resolved_items &&
                  P.resolved_items
                    .filter((W) => W.display_type !== h)
                    .map((W) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: L().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(de, { displaytype: W.display_type }),
                            (0, e.jsx)("span", {
                              children:
                                W.loc_token.charAt(0) != "#"
                                  ? H.Z.Localize("#" + W.loc_token)
                                  : H.Z.Localize(W.loc_token),
                            }),
                          ],
                        },
                        W.loc_token + W.display_type,
                      ),
                    ),
                Q &&
                  P.resolved_items &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityNotes,
                    children: P.resolved_items
                      .filter((W) => W.display_type == h)
                      .map((W) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: L().CompatibilityDetailsNoteRow,
                            children: (0, e.jsx)("span", {
                              children: H.Z.Localize(W.loc_token),
                            }),
                          },
                          W.loc_token + W.display_type,
                        ),
                      ),
                  }),
                !1,
              ],
            }),
          });
        }
        function D(_) {
          const { titleId: d, descriptionId: R, results: P, appName: G } = _,
            Q =
              P.machine_resolved_items?.findIndex(
                (W) => W.display_type == h,
              ) !== -1,
            ee = (0, e.jsx)(M.Nt, {
              id: R,
              category: P.machine_resolved_category,
              appName: G,
            }),
            ce = (0, e.jsx)(M.Ez, { category: P.machine_resolved_category }),
            ue =
              P.machine_resolved_items && P.machine_resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: d,
            title: H.Z.Localize(
              "#SteamMachineCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: ee,
            ..._,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                ue &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityDetailsSeparator,
                  }),
                P.machine_resolved_items &&
                  P.machine_resolved_items
                    .filter((W) => W.display_type !== h)
                    .map((W) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: L().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(de, { displaytype: W.display_type }),
                            (0, e.jsx)("span", {
                              children: H.Z.Localize(W.loc_token),
                            }),
                          ],
                        },
                        W.loc_token + W.display_type,
                      ),
                    ),
                Q &&
                  P.machine_resolved_items &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityNotes,
                    children: P.machine_resolved_items
                      .filter((W) => W.display_type == h)
                      .map((W) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: L().CompatibilityDetailsNoteRow,
                            children: (0, e.jsx)("span", {
                              children: H.Z.Localize(W.loc_token),
                            }),
                          },
                          W.loc_token + W.display_type,
                        ),
                      ),
                  }),
              ],
            }),
          });
        }
        function p(_) {
          const { titleId: d, descriptionId: R, results: P, appName: G } = _,
            Q =
              P.frame_resolved_items?.findIndex((W) => W.display_type == h) !==
              -1,
            ee = (0, e.jsx)(M.Pu, {
              id: R,
              category: P.frame_resolved_category ?? o.YX,
              appName: G,
            }),
            ce = (0, e.jsx)(M.Ez, {
              category: P.frame_resolved_category ?? o.YX,
            }),
            ue = P.frame_resolved_items && P.frame_resolved_items?.length > 0;
          return (0, e.jsx)(u, {
            titleId: d,
            title: H.Z.Localize(
              "#SteamFrameCompatibility_Store_CompatSectionHeader_GamepadUI",
            ),
            ratingIcon: ce,
            ratingSummary: ee,
            ..._,
            children: (0, e.jsxs)(e.Fragment, {
              children: [
                ue &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityDetailsSeparator,
                  }),
                P.frame_resolved_items &&
                  P.frame_resolved_items
                    .filter((W) => W.display_type !== h)
                    .map((W) =>
                      (0, e.jsxs)(
                        "div",
                        {
                          className: L().CompatibilityDetailsRow,
                          children: [
                            (0, e.jsx)(de, { displaytype: W.display_type }),
                            (0, e.jsx)("span", {
                              children: H.Z.Localize(W.loc_token),
                            }),
                          ],
                        },
                        W.loc_token + W.display_type,
                      ),
                    ),
                Q &&
                  P.frame_resolved_items &&
                  (0, e.jsx)("div", {
                    className: L().CompatibilityNotes,
                    children: P.frame_resolved_items
                      .filter((W) => W.display_type == h)
                      .map((W) =>
                        (0, e.jsx)(
                          "div",
                          {
                            className: L().CompatibilityDetailsNoteRow,
                            children: (0, e.jsx)("span", {
                              children: H.Z.Localize(W.loc_token),
                            }),
                          },
                          W.loc_token + W.display_type,
                        ),
                      ),
                  }),
              ],
            }),
          });
        }
        function K(_) {
          const { blogURL: d, eHWCompatibiltyDisplay: R } = _,
            P = (0, $.Qn)();
          if (!d) return null;
          if (P) {
            const Q =
              R == B.c9
                ? H.Z.Localize("#SteamOS_DescriptionHeader_DeveloperBlog")
                : H.Z.Localize(
                    "#SteamDeckVerified_DescriptionHeader_DeveloperBlog",
                  );
            return (0, e.jsxs)("div", {
              className: L().CompatibilityDetailRatingSummary,
              children: [
                Q,
                (0, e.jsx)("div", {
                  className: L().DeveloperBlogYButton,
                  children: (0, e.jsx)(F.$m, {
                    button: S.g4.Y,
                    type: F.wt.Knockout,
                  }),
                }),
              ],
            });
          }
          const G =
            R == B.c9
              ? H.Z.Localize("#SteamOS_DescriptionHeader_DeveloperBlog_Desktop")
              : H.Z.Localize(
                  "#SteamDeckVerified_DescriptionHeader_DeveloperBlog_Desktop",
                );
          return (0, e.jsxs)("div", {
            className: L().CompatibilityDetailRatingSummary,
            children: [
              G,
              (0, e.jsx)("a", {
                href: d,
                className: L().DeveloperBlockLinkDesktop,
                children: H.Z.Localize("#SteamDeckVerified_ViewDeveloperPost"),
              }),
            ],
          });
        }
        function de(_) {
          const { displaytype: d } = _;
          switch (d) {
            case s:
              return (0, e.jsx)(J.o5Q, {
                className: L().CompatibilityDetailsResultIcon,
              });
            case a:
              return (0, e.jsx)(J.aVR, {
                className: L().CompatibilityDetailsResultIcon,
              });
            case i:
              return (0, e.jsx)(J.jIP, {
                className: L().CompatibilityDetailsResultIcon,
              });
            case T:
              return (0, e.jsx)(J.WX$, {
                className: L().CompatibilityDetailsResultIcon,
              });
            case h:
              return null;
          }
        }
        function re(_) {
          const { displaytype: d } = _;
          switch (d) {
            case C:
              return (0, e.jsx)(J.ZjT, {
                className: L().CompatibilityDetailsResultIcon,
              });
            case g:
              return (0, e.jsx)(J.bcZ, {
                className: L().CompatibilityDetailsResultIcon,
              });
            default:
              return null;
          }
        }
        function oe(_) {
          const d = usePerformanceStats(_.appid);
          return useMemo(
            () =>
              d?.data?.frame_rates
                ?.find((G) => G.clusterid == "1")
                ?.mean_frame_rate?.toFixed(0),
            [d],
          )
            ? jsx("div", { className: styles.GamePerformance, children: null })
            : null;
        }
      },
      21418: (w, N, t) => {
        "use strict";
        t.d(N, { V: () => a });
        var e = t(7850),
          n = t(90626),
          E = t(36707),
          o = t(18210),
          f = t(179),
          g = t(1990),
          x = t.n(g),
          C = t(71421),
          v = t(53107),
          T = t(19298),
          h = t(20169),
          i = t(92757);
        function a(m) {
          const {
              tabs: S,
              bDisableRouting: M,
              startingTab: I,
              controlledTab: L,
              OnTabChanged: F,
              classNameCtn: J,
              classNameTab: H,
              focusRingHasBorderRadius: $,
              classNameTabContent: k,
              preferredFocus: Z,
              bVerticalTabs: U,
              bSticky: X,
              bChecklistMode: ne,
            } = m,
            O = (0, i.zy)(),
            z = (0, i.W6)(),
            [q, b] = (0, n.useState)(
              () =>
                I ||
                (!M && (0, f.f3)(O, "tab") ? ((0, f.f3)(O, "tab") ?? "") : ""),
            );
          (0, n.useEffect)(() => {
            if (!m.bDisableRouting && O) {
              const j = (0, f.f3)(O, "tab");
              j && b(j);
            }
          }, [O, O.key, m.bDisableRouting, b]);
          const l = n.useCallback(
              (j) => {
                b(j.key),
                  M || (0, f.Bm)(z, "tab", j.key),
                  F?.(j.key),
                  j.onClick && j.onClick(j);
              },
              [M, z, F],
            ),
            y = S.filter((j) => !j.hidden);
          if (!y.length) return null;
          const B = L ?? q,
            c = y.find((j) => j.key === B) || y[0],
            u = Z ? (I ?? y[0].key) : void 0,
            A = (0, e.jsxs)(e.Fragment, {
              children: [
                (0, e.jsx)(T.Z, {
                  className: (0, E.A)(
                    x().GraphicalAssetsTabs,
                    U && x().GraphicalAssetsTabsVertical,
                    ne && x().ChecklistMode,
                    X && x().Sticky,
                    J,
                  ),
                  navEntryPreferPosition: Z ? h.iU.PREFERRED_CHILD : h.iU.FIRST,
                  children: y.map((j, D) =>
                    (0, e.jsx)(
                      r,
                      {
                        tab: j,
                        OnTabClick: l,
                        classNameTab: H,
                        focusRingHasBorderRadius: $,
                        active: j.key === c.key,
                        preferredFocus: u === j.key,
                      },
                      j.key,
                    ),
                  ),
                }),
                c && (0, e.jsx)(T.Z, { className: k, children: c.contents }),
              ],
            });
          return U
            ? (0, e.jsx)(T.Z, {
                className: (0, E.A)(x().GraphicalAssetsTabsLayoutVertical),
                children: A,
              })
            : A;
        }
        function s(m) {
          const {
            statusType: S = "success",
            bShowStatusBox: M,
            children: I,
          } = m;
          let L = "";
          return (
            S === "success"
              ? (L = styles.StatusSuccess)
              : S === "danger"
                ? (L = styles.StatusDanger)
                : S === "caution"
                  ? (L = styles.StatusCaution)
                  : S === "info"
                    ? (L = styles.StatusInfo)
                    : S === "incomplete" && (L = styles.StatusIncomplete),
            jsx("div", {
              className: classnames(
                styles.GraphicalAssetStatus,
                L,
                M ? styles.checklistBox : "",
              ),
              children: I,
            })
          );
        }
        function r(m) {
          const {
            tab: S,
            OnTabClick: M,
            classNameTab: I,
            focusRingHasBorderRadius: L,
            active: F,
            preferredFocus: J,
          } = m;
          return (0, e.jsx)(v.e7, {
            condition: !!(S.statusToolTip || S.tooltip),
            wrap: (H) =>
              (0, e.jsx)(C.he, {
                toolTipContent: S.statusToolTip || S.tooltip,
                children: H,
              }),
            children: (0, e.jsxs)(T.Z, {
              className: (0, E.A)(
                x().GraphicalAssetsTab,
                F && x().Active,
                F && "ActiveTab",
                I,
              ),
              onActivate: () => M(S),
              preferredFocus: J,
              focusRingHasBorderRadius: L,
              children: [
                !!S.vo_warning &&
                  (0, e.jsx)(C.he, {
                    toolTipContent: S.vo_warning,
                    children: (0, e.jsx)("div", {
                      className: x().VOWarning,
                      children: (0, o.we)("#EventEditor_VOWarning"),
                    }),
                  }),
                S.status,
                S.name,
              ],
            }),
          });
        }
      },
      99371: (w) => {
        w.exports = {
          DevSummaryCtn: "_34fexyvsk4ZCS1pkTxhzel",
          LargeFormat: "_1Gpg0Ssqz-6tv_-RNy2RNp",
          CreatorDescCtn: "_1RKG_vMqjYBgcXZH6CoS3U",
          SmallFormat: "_2uzyd3CZPlDXNcII3Zl5MV",
          MinimalDisplay: "_266wPb9e0vcATAZmthTQaq",
          DevSummaryWidgetCtn: "_3-CiOktJBVfuAsdgT4OW_f",
          DevSummaryContent: "_2jbedard-PdnyO3XpMLNPg",
          DevSummaryBackground: "_3F7LyeepqJvGpcXjroux4j",
          AvatarLink: "Y9lYkfS_6GRwnSuFBgyQz",
          Avatar: "_3x-VF5_m6i66QQrJJ-WgoN",
          CreatorTitleCtn: "_141X0qDDTpudXQuTa1cYJG",
          CreatorNameName: "_3F6BGfg9HSsjiOFeHmiuOZ",
          CreatorTagline: "_3RKG3sfzCT1ven1_L1lBW1",
          Title: "AW22-NNnUJaOiqzrVG1AX",
          Followers: "_3NzMkIJWeFg7rV--RVOM_g",
          FollowerCount: "B_sn9jeeUYTEEio2U3kqO",
          SocialFollowersCtn: "_1e-4cFtf9LKQ3rhJWKcr2h",
          FollowBtnCtn: "_1C9_c4mNpE6FRz-3PWv9sd",
          FollowButton: "nDye27oueac7bocDYPZ0V",
          FollowBtnText: "EZqO5MdZoyMOQJ38Sj0iH",
          SocialContainer: "_258mBlkhbYBiZXTs4qrAP1",
          SocialImg: "_1sKMwuRIbbgs9Z7qLAlsib",
          SocialLink: "_3FZ-m-aObV2XxGykp5A1pt",
          CuratorHoverCtn: "_3GV3_URzwPB-8VZj0tMins",
          MembersListLink: "YN9wF_mOsT6piqNqvyyNz",
        };
      },
      76532: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          headerCapsuleImgWidth: "460",
          headerCapsuleImgHeight: "215",
          mainCapsuleImgWidth: "616",
          mainCapsuleImgHeight: "353",
          libraryAssetImgWidth: "300",
          libraryAssetImgHeight: "450",
          heroCapsuleImgWidth: "374",
          heroCapsuleImgHeight: "448",
          StoreSaleWidgetContainer: "t75Je5tr-0U-BmJ9zl5ia",
          LibraryAssetExpandedDisplay: "_39Jz5Qi6nhOd7XvaNnbSoR",
          SaleItemDefaultCapsuleDisplay: "_2kFm1akTi_PvgXVMGuiGXo",
          BundleContentPreview: "_4fgFjJosEpAnm3TuEhO4q",
          PreviewCtn: "_3y21gqoSEnLQ-LQl97kRb8",
          MarketingMessage: "_3IdTKNXhXzkVoep4-5yZuN",
          StoreSaleWidgetRight: "_3aTPAkD_nC4hFYjSSUGdIx",
          StoreSaleWidgetHalfLeft: "_2OmLxbQ8PCPJL9p8YRyEKP",
          StoreSaleWidgetTitle: "w75CJy5_YgzbJm91xnOQK",
          StoreSaleWidgetLibraryAssetExtendedTop: "_3R3jAV3aZuBYZUeAW1nD7h",
          StoreSaleWidgetLeft: "_1ERk_jpTDmAx8rJn5bJNLR",
          StoreSaleDiscountBox: "_1kSDZm0Cg9anUkTfWFtwdN",
          PurchaseOption: "z_iiAWZceRwDjLt3ZisRU",
          StoreSaleWidgetImage: "x_kq8V9RpcQ0NN1peDKg7",
          CapsuleMicroTrailer: "_1ZsPp8DWmkC4OPKARDotIS",
          CapsulePlatform: "_3vk4H4zJk_wDD6oaJrsjuj",
          StoreSaleWidgetContents: "_1nfJPebnVfFpujoINIrTwx",
          StoreMetaDataCtn: "_28XzNZpa2zm6dfU_Hl1aoF",
          StoreSaleItemRelease: "dY0SjUwvxyZTq7knLEKEc",
          StoreSaleItemDev: "_3B7TyRytxk7VNgUkEksk_g",
          StoreSaleItemReview: "_2ZlC6bcWXRrbEH_H3ikW_v",
          TitleCtn: "_2hY5KQtdBm61wdeNXehgrm",
          StoreSaleWidgetCrossCenterRight: "_3oOCqm5QnRABrDXfNWZCiV",
          CapsuleBottomBar: "_1_ehE8jTqsTDnx5E7Sqjy7",
          PlayNowButton: "_14BfXA3_1WV39l7v3kD_s_",
          AddToLibraryButton: "_1ByCcqMjsaSpyZw0HZlDyi",
          StoreActionWidgetContainer: "_1KKmxZOJSplMIyYiT9qVp9",
          StoreSalePriceWidgetContainer: "_1so1AGD_m_uIBFDEc1ImOu",
          StoreSaleWidgetBgTint: "_1RmkMAMYEGZOaFv3k49gfc",
          LibraryFallbackAssetImageContainer: "_2qZSepj4cX-WLkospQs0Ep",
          FallbackBackground: "-V2UzXJLqza_XoSPI7wz6",
          SaleTagBlockCtn: "_1hS3ayvVLxIJlkxUDEBACP",
          StoreSaleWidgetCenter: "_1kHYilvb5rc5aw0OmhmfNw",
          StoreSaleLibraryAssetWidgetRight: "_101xD6rIYm8X_jp483Kshs",
          StoreSaleWidgetReleaseAndTags: "_1N4IfOUIwuiYhgqyiJ_ilZ",
          Bundle: "_292AerR2EXt-7RVrZp7E8K",
          WidgetReleaseDateAndPlatformCtn: "_1OUpla9y9ki3n--MdoUpSs",
          SaleItemBrowserRow: "_3_-EEQpFNke34pzfmip5yh",
          StoreSaleWidgetRelease: "_3MahqhNDkJzVX6vf3ysCbc",
          StoreSaleWidgetTags: "_38RGrHCxetbJdFlekFhXMJ",
          AppTag: "_38998HcikvEZtZcJXwppxS",
          StoreSaleWidgetShortDesc: "_2VdeXQqeuqu2i4yjprISF-",
          LargeText: "x5UGgerCCNFPP0IR7S-PC",
          TagTitle: "_1Tifv9nWMUHpqL-5PdjhNO",
          TagBox: "_3vCIFKfpJCOL-zsUEUiAtt",
          Tag: "_22IRYeqPYSxG2vqNmALNsh",
          Categories: "UUvYZ6JvzIAlcFDV4wF7j",
          SaleItemFullCapsuleDisplay: "_1b7dbi80Ody0jI0vYb_7bG",
          Category: "_23oBdrL9Cnh9x11yw8hmaN",
          CategoryIcon: "_2guay37SfoNrroBIe0UbYH",
          ReviewScores: "_3uIw-iqrc6AKEcMLki94nj",
          StoreSaleBroadcastWidgetRight: "_1xIPeza3-7471L4fvQRWBQ",
          StoreSalePriceActionWidgetContainer: "_20HgIIui8JHLBf62qfz5Gr",
          Action: "_3-6Yf-FWOYdz69902FtDwy",
          Discounted: "w775QgXXCtmtG8yzEp-2u",
          WishList: "_2mKhatcQBAj0oKWP1V_tFV",
          StoreSalePriceBox: "kauOU9QnW8Fs0QpxzTBph",
          SingleLineMode: "_1Ph5iLt6Bh7woGXf5RnIPB",
          StoreSaleDiscountedPriceCtn: "_2KBGD_hHRCfMXm-DDYRbQX",
          StoreSaleNewItem: "kT9bBl6aBZQ-0xiRlMWzc",
          StoreOriginalPrice: "_1odBXcjq8-Q8SFXViJa7c6",
          PrePurchase: "_1QuRa-ebvBejdSjmUkqX5v",
          NewItem: "_1ScAL4Y0dGHeXycrpJYkAC",
          PurchaseOptionDetails: "t7tIxWgiQRt2p2A979EUU",
          InGameHover: "_yRMvMttBTHiO3_SMH6Or",
          StoreSalePrepurchaseLabel: "_2mG_q95stW67uyZmLXcO8y",
          SingleLineOriginalPrice: "_1jRZOgPPLTjiXtsrX_iB1O",
          PrePurchaseBesidePrice: "_1jh1dcHkieLMN3eGCeHg_E",
          YourPriceLabel: "_1RGKRbbcPP2ImptkZ3LP6P",
          BaseDiscount: "_3BJdajInVqrAsGwPFUAshC",
          StoreSalePriceButton: "_PS7WNXgzr2qOl4HOjEIp",
          OuterCapsuleContainer: "_1omVjlZWALGX34pum8v7SF",
          BottomBarPriceInfo: "_2ogs95OHz8bo5FTfppAZiJ",
          TrailerActive: "_13__6f3T57ykYT09Z7etmf",
          CapsuleContainer: "_1kCTkXxE8CbUnnhSjsL-Kb",
          Linked: "_2uiBcpls1KbtGPBEPSQyrA",
          EventRow: "_3Ld-x7gljlKqiGE3WBsENh",
          BottomCreatorRow: "_3HMU8TsxAklmNPNyGoeAZU",
          CreatorLogo: "V0GgcGqSWSpKmV8RTzFU0",
          CreatorName: "dxHZGdYWTxGXbxaQiceKZ",
          AddToCartButton: "_1LJo1FYFdLFJE1u-PJcyxN",
          AddToWishlistButton: "_1kZYzTTdH8XUXsYP9lgb-h",
          HeaderCapsuleImageContainer: "_1W35jfl6uiYKf7Iwt3NNEz",
          MainCapsuleImageContainer: "_3ghuGooDVCn0gUuocEnV8B",
          HeroCapsuleImageContainer: "S9g2oScKWNbE4BrExvI19",
          DiscoveryQueueCtn: "_1PaQQXx0817RqTxahOzbZT",
          NoShadow: "_3xAYvMZ9m_TYNbwjyDr3d4",
          VerticalCapsule: "IR8muj8HL9MD7GoRBp7LZ",
          ForceLibrarySizing: "_1hSAcJwcSL1bbi-w5C5fjv",
          CapsuleImage: "_2xiNqpMzhZh4tVcBPD6z1W",
          LinkCapsuleImage: "_1AFjCLdN5rlqKicNNN4qJR",
          CapsuleParentInfo: "ZsrUviKbsm6zNlc92WYd9",
          ParentType: "-oMlD-aBQ0XixJxkc0cy5",
          Banner: "_2qnY9VZwgA2qx1ydmUlsUm",
          Blue: "_1f8WQvpQv-I5pqCmscp6iV",
          EarlyAccessGradient: "_1Y1oAEI6qR7aE22ePmy-8S",
          LinesImg: "_10MiXmZw9nyJIMVqHTS3FH",
          CapsuleDecorators: "_1Ss9w5OINDsfSBbOR7VWp9",
          BundleContentsCtnTransition: "_1O1d5Wj6hmDvM1KQDSEWBh",
          Expanding: "_2B71vqrTAumZWP2eCwqPfY",
          Expanded: "_1UxAPCy6v0_Fm-iAXFJMog",
          Collapsing: "_2TTiL0BkOdhiWpE6m0k6j9",
          BundleContentsCtn: "_2Fqilki7o63IJqfaEIIBpa",
          BundleContentsTitle: "_3TirrWSdMt2tPeAOOY3D_-",
          BundleShowButton: "_2W1zHZrECwIsSOb8OillGT",
          ShowContentsButton: "_3h99aa2siCkcjDn4G8vKQY",
          ShowContentsSection: "_4wRhe4a4sFJolBfzgS3Oi",
          BundleContentItem: "OhPohJ5GY4yteVD6yWZA-",
          StoreSaleWidgetOuterContainer: "_1YNtl1bfteFkaCFYHhtUMf",
          ContentsCount: "PQWG8XlLSUl9LC-7e3cPB",
          PreviewItem: "_3vQHsd2T2R-6xZB6sWSPRc",
          DeckCompatIcon: "_2nXaXW4Ps268qjxYMblw3e",
          BundleTag: "-D5ypo5W6aLJPMR1_L0y_",
          PreviewImg: "_3Z8MJxQ_Ji953C5R6oQdgY",
          DemoLayoutPopup: "tDBuR3ivkJbl0t9E_ssXD",
          FreeWeekendBar: "_3zm9xR6YDSxfquPOjhHoRc",
          FreeWeekendLabel: "_2Mqx0PhPACBhZxd70rTNo_",
          RecommendationReason: "_19AVGu5eqFoeoiqvydT0Tv",
          LocalizationSpan: "_8ZbRxdp7AJCWfdcbMmcye",
          CapsuleName: "_16nzXvpmoPX2AHcWtWHQsU",
          DiscountIconCtn: "_12oL_Na-4ZnfDriQ80BEBc",
          MaxActionButtonWidth: "_1AiAr0lqTfJuoAry1CmxyW",
          BackgroundAnimation: "_1CIMWCeT1o82vKuoVFS0Or",
          "ItemFocusAnim-darkerGrey-nocolor": "QmvtbjNkXhoFsHYRkJ8pk",
          "ItemFocusAnim-darkerGrey": "_2muPTTrVake-UfXJizQg6g",
          "ItemFocusAnim-darkGreySettings": "_15cm3kzIBv3fn2fxYuqTJR",
          "ItemFocusAnim-darkGrey": "_3WidOXfqJtMrQ7t9WsTNx",
          "ItemFocusAnim-grey": "_3TjvvuiDzTihqHMxswC7z_",
          "ItemFocusAnim-translucent-white-10": "_3u6erDX_vfSreCNiukX2S",
          "ItemFocusAnim-translucent-white-20": "_1pBe5-hUwVCsRu0ZWAS7NK",
          "ItemFocusAnimBorder-darkGrey": "_11_f57sto7UJFfYAgmuQ8_",
          "ItemFocusAnim-green": "_1pwlLApsSR1PWl1ys4T9Ka",
          focusAnimation: "XOkNr-sTpt-rrz1iaVQv4",
          hoverAnimation: "_2A0UXZtbRj2Hc7vKFjV9xl",
        };
      },
      64769: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          GameHoverCapsuleCtn: "_1isLDN8xbFyCDG5jtMO7J3",
          Loading: "_6exjsiWCk6IgWiQenqfQH",
          UseHidingBottomHalf: "_3707obuB-7wD8GDUYRaLH4",
          TrailerAnchorStoreLink: "_1VNyOcfe2cBKY52VedXjyc",
          TrailerCtn: "_3ANIAZhTtXLvORlbv-Du-N",
          FullDivImage: "JIMdRVl5GQwMrWUt3A6RH",
          Transparent: "_2pVFEfWO0oGPOwTylls-tE",
          Midline: "_3qz5n49jfXUrhCnqkmibgt",
          Price: "_3mEkhLPOOR45uhGnhsHkao",
          CapsuleImageAnchorPoint: "Ea3rwozDuOg8FLc8b7n2c",
          CapsuleImageCtn: "_3EW-HHeEwhOW7IbL8k5VnZ",
          WithCornerShine: "_30TPn4BD1o-X0WcWYvJ-gF",
          Opening: "LiQedMzPoDBtg4XmNlHSU",
          Open: "_2HPVMueZXbMmvgW8C6iOw7",
          DemoButton: "_2Mu1VwOBzB0kLcDCRbJD6w",
          WishlistButton: "_3FAid_cwwxW8-9Sp6pSPqS",
          ShowInGamepadUI: "_2f6Nut1kQFb4WnCmz4uXDG",
          WishlistButtonText: "_2GqXfP0dBAJl9ozuBV3Jqh",
          WishlistLoadingText: "_2k23LU1oBxEHe-_Qff-1k3",
          WishlistButtonNotTop: "_3W_yknADVFtPgqx9Wh2ayW",
          FollowGameButtonNotTop: "iNS5yHAxKgg4H1nukkyxN",
          BottomShelf: "_3QqbGLgtSpReBWRaPB5GnI",
          BottomShelfOffScreen: "_3ncpfgFYDbcm9Iv5ca27Y0",
          ShortDescription: "APpfln1FqbXnR9klsbeM_",
          TextContent: "_3WlfumeMCR40WR-uBdg3Gx",
          GameTitle: "_38GHf0V2kn6MNNjQF7QajG",
          TagRow: "_1keH60e_I90mkEgfpsw88B",
          Tags: "_1GfeALEEHA6uNXnvOXvTSW",
          Tag: "_2bi1NxjYgiXf0VZFoYAKWE",
          PlatformDisplay: "_1Y5yJHywrdBJlgg1JbWnM5",
          ReviewsAndRelease: "_39DFdWNzMu5Bpkg0MYRE__",
          ReleaseDate: "_3b8-ojNFf-CIMu9sOMJhM6",
          ReleasePrefix: "_1mRD6kBN_rXYh69QwQx9CJ",
          ReviewScore: "_6ctF1zf2MKZRofZdWQXqG",
          ReviewScoreHeader: "_3RQ_AUZpM18Y9IO5ufZ5X6",
          ReviewScoreCount: "yYag_VAd2NXLTrOBd-6mu",
          ReviewScoreLanguage: "_3-FV36ByKDMBDoEKOpnY9s",
          ReviewScoreValue: "XwgGstGDpIVOjAfg3pK1e",
          ReviewScoreDivider: "EbDXdng1ktTe_DvwN32Tv",
          ReviewScoreNone: "_j-FE6iveSoKTCgGAx_NK",
          ReviewScoreLow: "eb3U2C9mNpcsxnVO-QAvh",
          ReviewScoreMixed: "_33l5fpEoTZORkBTRCg4adM",
          ReviewScoreHigh: "_2Mc-wW0wAsgehC46aTwBVa",
          ReviewScorePercentage: "_2jmj3hWBpHbR2XUcZaAXFp",
          ReviewScoreLabel: "uEsfJ0VAuX37ItihZkK2J",
          GameHoverCreatorFollowButtonCtn: "_1RMWITT8PsJOgR4SoIR3Sw",
          BackgroundAnimation: "_2-NF7UzSGK3WLmqugAW3EM",
          "ItemFocusAnim-darkerGrey-nocolor": "bfQTK-Cop8MYUAa9j7rQb",
          "ItemFocusAnim-darkerGrey": "_1_wN_hVuLwcfYlTDIE-HTs",
          "ItemFocusAnim-darkGreySettings": "YO_BEpx_0vuXWdgMFEjkL",
          "ItemFocusAnim-darkGrey": "_32cDe-nAMlG7JYrA6niEGN",
          "ItemFocusAnim-grey": "_2LnPTi1cPqqxqvII8cqnlh",
          "ItemFocusAnim-translucent-white-10": "-jNJst4AtmAMI-o6ETEiC",
          "ItemFocusAnim-translucent-white-20": "_1dwebsW8iZHHqsEF46LGhs",
          "ItemFocusAnimBorder-darkGrey": "wiEMwKtkhMy1kSbxfOR43",
          "ItemFocusAnim-green": "PJqmv3PnTw0P2SQBGF3nn",
          focusAnimation: "_2mMG8YO1MWnzaegzgcISk2",
          hoverAnimation: "_2aCSOFWsYITdHt3aWn3-vu",
        };
      },
      39722: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          IgnoreButton: "_2TD7UsjzdR3Zr5ZOZ09n1J",
          IgnoreButtonText: "_2L6vwdfaFPRJ1zesEu6_Bf",
          IgnoreLoadingText: "uh8VGMa5zc623SZkB_hEQ",
          BackgroundAnimation: "_10sTNSs7WhNZPw6GdPTOJX",
          "ItemFocusAnim-darkerGrey-nocolor": "_1MdU34KFhJRKlGMaHngbls",
          "ItemFocusAnim-darkerGrey": "G_fmZBeNGKwyXP6EjOOZ_",
          "ItemFocusAnim-darkGreySettings": "_3n4qtxFhgpKOJlGlGVcI1H",
          "ItemFocusAnim-darkGrey": "_20-FW4mkUJEpsgtwPjoMD6",
          "ItemFocusAnim-grey": "_1QVohJAkrDR6QXMK3fZLMu",
          "ItemFocusAnim-translucent-white-10": "_2vttABcjIJHbd-xXLvTfgb",
          "ItemFocusAnim-translucent-white-20": "_2uyItrki6ohcX2MO3FPcKx",
          "ItemFocusAnimBorder-darkGrey": "_8sJgPArY-c3-X6w3X3la9",
          "ItemFocusAnim-green": "_3ZGmJEBxcg9Rgo7ObB8qJ0",
          focusAnimation: "_23SWPBJXy3Zmgp6Guu_3nw",
          hoverAnimation: "_3BrzCFDf-VVWJEnHMnE5xt",
        };
      },
      10350: (w) => {
        w.exports = {
          ItemHoverSource: "_31qyh2htA-NLfzSAvjjJcl",
          Selectable: "b_zOCi3Z3BKdeweHShKDf",
          HoverContentTransition: "_14fzjUJx__1_iVvRQOFvNZ",
          Opening: "_1-VyPy3KZSzyBfUxYeZGHQ",
          Open: "_2lBsXkkcijYbtJ_ml1-6nE",
        };
      },
      95706: (w) => {
        w.exports = {
          AddToCartAnchorCtn: "_2qDFksxM_Q3AG6L1u8NwZU",
          Action: "ttu4ikNa3-0XD2V-s6GcO",
          ActionOutOfStock: "_1PlPor5x810Tggmt8VYmNm",
        };
      },
      72365: (w) => {
        w.exports = {
          DemoButton: "_28CiBI8NLjLb6f6rlg_Ymg",
          DisabledButton: "_2vOGUa8HwoudpQtMOK5Nqw",
        };
      },
      39285: (w) => {
        w.exports = {
          RemoteOptions: "_1n4VsDtc0Av8cBgMJsgkDD",
          InlineLink: "_2nR4GT4DVg9Yl-bTs7Af6_",
          GameName: "_3uXW4QW6my5P4roTw70MxY",
          DownloadStartedCtn: "_1Vx6FpWjxhV9SI5Ld9_nsI",
          LearnMoreCtn: "_3oCB1RA8pibBfr_I0D7Jzr",
          ActionRow: "_1awvs90V6ciEDjEPbnZJ8J",
          ClientSelector: "_3aMZqhwSarToWISh50lejs",
          ClientName: "pR2rsYluolxfGVABLBUAc",
          Icon: "J_P3D4Qf7oCaZDIB-9dzG",
        };
      },
      44375: (w) => {
        w.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      73187: (w) => {
        w.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      54599: (w) => {
        w.exports = {
          GotSteamDialog: "_2Qusm1gosCAtAqLKo5hioQ",
          DownloadSteamUrl: "_10lP7BWsYbhm_AclLUpjRi",
          GameName: "_1_uzwF-1oILlCEkcaApC-n",
          Buttons: "_2_Obm3_emYUZKMgT1bdKgG",
          Button: "_2nVaF4foORFEq78yZ3A7yA",
          LeftButton: "_3WYyumzIcbu_0Zysgbr4_h",
          AnswerText: "hCqVo4reICITJSgSg8g6t",
          ActionText: "_2s5NsgqEDdI6nKvz-9YFa4",
          Footer: "_3OKQsxzgQZkt2GtKz9679g",
          Logo: "_2AEA_k1tEcjAtTL7-Bnitk",
        };
      },
      35111: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          BannerContainer: "_29jK3MyNRDW7PAcrm59l_O",
          BannerHeader: "_3yxJH3baj7mwTTYzBIyi_Z",
          BannerContentDesktop: "Cek1s5Ixk2xYmkqjjESD0",
          BannerContent: "_2dGPTYWTKq3CirJwPXKw2b",
          LearnMore: "_2gXzKgnqPNSUzBWEYvQ4OP",
          DeveloperBlockLinkDesktop: "_1lpfU0ZtNKyd69pGItpBIh",
          CategoryIcon: "_3qF711tcWJEMKEv_r_S2tz",
          LearnMoreCtn: "_2IcEuX6gnbktAOaz9t0dTB",
          LearnMorePC: "CrSPfZhq2070MqXIkkryS",
          DialogHeader: "ZEuE1Cb-TDw4-XHl51qc4",
          DialogTitle: "_2WJTd3a8tzPCkIBmvfBD79",
          AppTitleCategory: "_23sFZwpTqnM3Ameqew-ZuX",
          CompatibilityDetailsStillLearning: "_1WWwtz2-hqx1OnhlEOCTLl",
          CompatibilityDetailsContainer: "_1-O8t3AxzpNsipTPfHVktW",
          CompatibilityDetailsInterior_NoScroll: "_3oQPVwTgG0CmSxwl3e1cI4",
          CompatibilityDetailsInterior_Scroll: "_2uCLczcyA7K90OppYPMeBA",
          GamePerformance: "_5LMNcPZPMKt07G9Atmv_d",
          GamePerformanceValue: "rRMEH3oJvrQFGd520RdY0",
          CompatibilityDetailsRow: "_32fPpbyivR63XHk0qiRv5n",
          CompatibilityDetailRatingSummary: "mJGYScROtrnXBuQ-LU507",
          Verified: "ewmg-iZH8r2ghippaDEbq",
          Playable: "_1n8vatQzJB_Xptbs8lnm9n",
          Unsupported: "_2Q0ld2nJ3334gwZJ4LVzPW",
          Compatible: "_2XeA02URQukjyKp0fh__XL",
          CompatibilityDetailRatingDescription: "_3456EX4aC94XtIz6d_Qhsl",
          CompatibilityDetailsSeparator: "_2mwbdnqm9Lk1-Bzs8FIdCU",
          CompatibilityDetailsResultIcon: "-L3Xub7NtXchyErJuHnKk",
          CompatabilityDetailsNoteContainer: "_6_vookxUbQB-_K6ZSHoOs",
          CompatibilityNotes: "_1aoamIeDfCjdgyuxLvC71m",
          CompatibilityDetailsNoteRow: "_1Wu_jj1kk9n3WIoga3RL_J",
          DeveloperBlogYButton: "_3avWDmRhG0NCncSbd3Wsz5",
          Divider: "_1ikdMiUUJQCzu5m-OgP8az",
          DeveloperComments_Anchor: "_JTh9okiXkhbwI3pLwToq",
          DeveloperComments_Icon: "_2R6eCuptMWK0ZkTe0GeqEi",
          DeveloperComments_LinkNoIcon: "_1zjwW1q8ccnB76k2rPv9oM",
          DeveloperComments_LinkIcon: "_3OZNUKYm6BQ2AVO-NCNw2t",
          CompatibilityTabContent: "_3c5UMEMwi7F5tnSJiw26TQ",
          CompatibilityTabs: "_1ALZVqWCl2J8DJg4XxemH1",
          pillContent: "_1M5TZawv5Y4CRNXAISchG2",
          RatingIcon: "JpPKQ9u62K6FUa-N8VbN8",
          SteamMachineDeviceIcon: "_1nTDsg_9olpJdf7qqVpGfL",
          SteamFrameDeviceIcon: "_34S3mEk7xRyS1Lnlnkd0hu",
          SteamDeckDeviceIcon: "_3IOFFIoATruXDCEVO_7Jqd",
          BackgroundAnimation: "_2FyGcNFIRkW3k-FdDagwCV",
          "ItemFocusAnim-darkerGrey-nocolor": "_1yIgtU9bZ6s1FD5YwYN7Ux",
          "ItemFocusAnim-darkerGrey": "DhRlb0k8yiOildRAPKbUv",
          "ItemFocusAnim-darkGreySettings": "_1rM6kybplpPqKeO6oRkrNQ",
          "ItemFocusAnim-darkGrey": "_2FbbkQw3hYI7YAtytr5IDn",
          "ItemFocusAnim-grey": "_2suu44WFaHB4fkFfIvCI7U",
          "ItemFocusAnim-translucent-white-10": "_2j1TKoZjmYdt4yBTKkRCgR",
          "ItemFocusAnim-translucent-white-20": "_1qTgWOW3x6-b_CW5qQoSSo",
          "ItemFocusAnimBorder-darkGrey": "_1Lxbh0NQsK7RWCdF8QEIej",
          "ItemFocusAnim-green": "_1ZB1uzf3hgyFkekpi0xZg5",
          focusAnimation: "WewegkENW7QZMuoX3r_v8",
          hoverAnimation: "NCIvCtzfGkBvu5KDz_CE1",
        };
      },
      95695: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          PartnerEventFont: "LK4bXmKAknKopK864hJFM",
          Clear: "_3UhsQfZfx8h_mvk1qQ2E7p",
          Divider: "_3B5HO7jdTpNaectJS1a6UZ",
          EventDefaultRowContainer: "_3WO6cZns4r39Cg__Yd-7zn",
          EventStartPublic: "_2LU_YLKpLTGuqBMQLckmkk",
          EventOptions: "_2r_QeL5bd04KiohE77Gq-t",
          EventStatusContainer: "vOPSZ6WQ2uCEbtYrtUkJ5",
          FlexColumnContainer: "_1qhLqXcizfytm6omB4ywDD",
          FlexRowContainer: "Ke5f13IVZVzYSmQVJgVyd",
          Centered: "qy-9mgJyhfEb8Wt0gqzaF",
          VCentered: "_2Ke6gF28pxI9dp-gD87LfB",
          FlexContainSpaceBetween: "_3nPGWNNLFjqXgZ6hjwUnkf",
          FlexRowWrapSpaceBetweenContainer: "_19CjIj6mAtlIoY_7_iyOlz",
          FlexRowWrapFlexStartContainer: "tyP_cnaOBcolou13sADst",
          SaveBackground: "V0mbIUnoAWzmWNmnsjwlx",
          SupportedGroupLabel: "APmJNwEEvE9w4_JVyRQ3J",
          LanguageWithContent: "_2Cd1uISocztoq_3uIIDOXm",
          LargeInput: "fq68IvZbR5nyI81kv1dwh",
          InputBorder: "ObyysoLsv_KyZYdZkoC7W",
          RadioOption: "_3iJX1gtbWR_mkLvuDCeoNd",
          FlexGrow: "_1KvZAJk52RAyJKIXK3-wO0",
          EventEditorTextTitleCtn: "htm7dxJtSOP0s_Mcb3Ejx",
          doclink: "_1-bAKvDZnkuyP6Nmt66mQB",
          EventEditorUnpaddedTextTitle: "_9hsCLz0BkV6oeIrNt7M3D",
          EventEditorTextTitle: "_18fHxiLGI4r8_CPauC1oep",
          EventEditorTextTitleLengthInfo: "_2nHJ1mgbC-yNBhl6tjLgmD",
          CollapsableSectionTitle: "_2zejQIbvaMIPvk98NrTDzs",
          SectionTitle: "_7Qc_eWjn_s3VWDe79FmEq",
          EventSectionTitleCtn: "onqWKRp2JgmjHjFAtHUAM",
          EventSectionTitle: "Idd_AoQMoEWIZamI72mP7",
          EventSectionSpacer: "_1BloexLaoA9uwhXnsLWe6M",
          EventSectionMoreBtn: "uckBibUwkj9tX_NZHf6wN",
          EventEditorSpacerPadding: "_1RBfNW2ja0sibxeZdEEJX",
          EventEditorVisibilityCtn: "_1nqBhG2Wx5fvxBZz_TG7B9",
          EventEditorTextSubTitle: "_1i_pY6xNDaeC-hpFtw_bnr",
          FloatingTitle: "_31XRtqJrtSr23BOez9F94m",
          EventEditorEventStatus: "_2JGoLoYTtzbQVxL0l_1m3a",
          EventHidden: "_2H6fnGkwmWVynWQb7QvxLN",
          EventVisible: "_3Z0QrVP5ZnTQ2dk4TtNgY2",
          EventBarBackAndTitle: "_2rTjP81ZJlRiaauPzNG7K4",
          EventBarTitleCtn: "WfVzeWGwNKWJkHrZGYin4",
          EventBarTitle: "_29kVXprENYbLFAtuCiS9sQ",
          EventEditButtons: "_3nYmf7ouiiC2Fb1BBu5Gra",
          EventStatus: "_1sOFBLpnblzmUTv7zVK5bM",
          EventBarBack: "s3r9bZXo9Hn_LJ2KuwEdl",
          EditPreviewButton: "_1FhZQ0qnT9Cg5iDVCM4kUM",
          Delete: "_32kR7vbPRNV7B8ZsiduNmF",
          Disabled: "_2wVCx2MbxsBE0UA-mTs9GA",
          BrowseMoreButton: "_1YrclhbHAxZpfgTuGj4VeB",
          Button: "_1ABCOz8DSrl-YJdh1xD-m0",
          Icon: "_1dDpSuaJBGZzS41s0SPk4c",
          Primary: "_30iplBvtu2x5qDH5gkzuvV",
          ClearThings: "_3x_qLReSea_Uq9nqUlRsE2",
          OnIndicator: "_1GBsBcWhLJ4t6Fr7B5Je1z",
          OffIndicator: "w0I94_DnBuP6_sAy2jJOL",
          IconImage: "_2RY897Hy2yhwXPKZZIMbVc",
          RightColumnContainer: "_30-E9De2BTSA_LQAluUDUI",
          FloatRight: "_1bzHf_n9CdWgjfVlmRX68A",
          TTip: "_2aWukx6Wd2nw_kXZ1FP2NP",
          ValveSupportOnly: "wC6-UDN4iQob1NcD0Rpty",
          ArtworkAgeNotAppropriate: "_3V64ZhKy9wBGIO4DpFne9v",
          EventDashboardHeader: "_2kZr_0HccJXPhB1ZUZ5ouf",
          ContainerSpaceBetween: "_3gYZGtbFQRCQssXFJTFwmV",
          EventDashboardTitles: "_1ym4r-4rlOJQoOzRprSo8l",
          EventDashboardActions: "_2z_02l2jZf-9jcO4USrYak",
          EventDashboardStatsCtn: "_3IptFPCOJnBgUfgUej_jIH",
          EventDashboardAppCtn: "_2iPrKEyo2kmzykCYxURzj3",
          maintitle: "vEk_z-3SSNZ_QNdilG5U8",
          AppTitle: "l-Ow7jLX9GkLm9eYHQVAP",
          subtitle: "_2mJfcOfmivoiCR4CW-GrjN",
          ValveOnlyText: "_206saj_KMAibQF6XQ50lq0",
          ValveOnlyBackground: "JckrnbJXboKxpRp3fULfa",
          ValveOnlyAdminBackground: "_3HVu1O7B4zeCZWaOaUWPCo",
          DropDownOptionHelpLabel: "_2O-Yi5SNKU3AinaDygrO9y",
          Columns: "_1oVIRGhMwAB3uN9G3t8kZe",
          LeftCol: "_3PPz-6LrUAum0x5iKTRxzc",
          RightCol: "_25xelN-JQnAHv3pp9qVrpl",
          DropDownScroll: "_1CewBTRfw0excEQTv17oBF",
          DropDownScrollItem: "_3D3hCqbc4w-srLqZG9Uue1",
          CloseButton: "gR2gSLc4AtnoUyq29Np8F",
          CloseSectionTools: "_1d0D9Wb15dNSzABGRNMKzl",
          HalfColumn: "_3Xmp43r8PjDuBvfl8dK6Rt",
          InsetOption: "PKGX85T0vHviq8Tm_2GeT",
          tooltip_Ctn: "_3nqxIgL0a0DbPZHRZRzWsp",
          SaleEditorSpacing: "_2ZGwd2fru49CK-m22nkFg3",
          InstructionText: "ktxW5d8M1ectIDhxxa1M5",
          BackgroundImage: "_2wlqOo3XXW1wCAxwfudaL8",
          InEditor: "_1qfNCm-vmBy2gW4vlcWfgD",
          Blur: "_1rJkktMMsrzAultu2NgHkZ",
          SalePageBackground: "_2StYOVdV9beNEHqNB_UQuQ",
          SaleSectionHeader: "_2WMiQ5MbP_ReyaX5DOpoUD",
          SaleImageCtn: "_1_lNQ4U_L9dnN9dgC8h-m_",
          SaleImageHelper: "_12S7LpS3uz_qitMXmZV0Ky",
          JumpToButtonCtn: "_19bDhRwBW1auKJVn5jamrh",
          JumpToButton: "c4K67QJ5cG4Zr1eb4H_Fu",
          QACtn: "_337X4KlsU9k5t9s423wb_I",
          SaleSectionSubtitle: "_2rIaWN5LbF3muB3D2A-q5k",
          SaleSectionContainer: "_3gb3JeV_1IMaIeODzBSrP3",
          AddSectionButton: "_2_djjQBZmuIsrDz2l04Ua7",
          EventElementRequired: "_12rm6-FOWcy0YB458vbp5l",
          EventElementOptional: "_1mpG6blNZY9m8bmFF-Krii",
          EventElementComplete: "_1uZCvmPkcgPb6hJYpF9IYU",
          PixelOffsetCtn: "_3Xk96WC-5G6sSuI0Zw2aeZ",
          PixelOffsetRow: "_2PtWb-j9bnMM467osLZO2B",
          PixelOffsetNote: "JjEwaxBnKLv7wm8lbhcbX",
          PixelOffsetCallout: "f5QZTTLfNRcsOdH31-Kxv",
          Error: "mSSEDpLo6ibX1Ed5anQD_",
          GamepadOnlyScrollPanel: "_2NO6wzenl44Mce3akguO_",
          BackgroundAnimation: "_3jOnURPodgSJ0VVO2lchIh",
          "ItemFocusAnim-darkerGrey-nocolor": "_2J2q_u-IE_3MWcK8YJwYX5",
          "ItemFocusAnim-darkerGrey": "hml57jb3ouTfP1qbnI4_V",
          "ItemFocusAnim-darkGreySettings": "_1ex6ItU2bR-tAYkBYAfqnF",
          "ItemFocusAnim-darkGrey": "_3ILf95Fdqnqg9OfLO3lrZH",
          "ItemFocusAnim-grey": "_159SLrXx_wC4ZI3ZLaz1A_",
          "ItemFocusAnim-translucent-white-10": "_2LlOq5G2PXnoXnElUH9sZS",
          "ItemFocusAnim-translucent-white-20": "oskDWTSKtzqVUSfD5nKvN",
          "ItemFocusAnimBorder-darkGrey": "_22jWCdivanrS6yxyLk3zMH",
          "ItemFocusAnim-green": "_3JEJrM-AMsqF1VHbRBXYvZ",
          focusAnimation: "KS3LLxXLFm_S6AWOrqeVo",
          hoverAnimation: "_9UqiMHhWNZyuE_A0XwG9N",
        };
      },
      52393: (w) => {
        w.exports = {
          "duration-app-launch": "800ms",
          narrowWidth: "500px",
          SaleSection: "_1cOoCFwafBlSkwllIMf3XM",
          CarouselDisplay: "mntHD0WiARnsfz_kMYssq",
          SaleSectionCtn: "i2PTzRNXOK1OXvXb9-wzd",
          NoTopPadding: "_28qZDRJ1HAArkoQZjlLJ09",
          SaleHeaderContainer: "W4mvnnQ0uYKKoCfVm8QgX",
          DisabledBackground: "OPH8r3-pnCjCM7T8GrpWo",
          SaleSectionTabs: "_1FPIVJTLsw1nvAN24BGGKg",
          SaleViewAll: "_1bsBzvGKJui5_QaWVRBFDo",
          SaleSectionLoginPrompt: "_2-dSBTJ6PQzCGvK48gjCCf",
          LoginButton: "_3h6sHYHa8EFm2_xoGiVAnh",
          SaleSectionLivePreview: "_2dBAh0VOfhvgWv2ck8hp7n",
          Hover: "_15FfaTmQGzroKql83EUpaR",
          JumpedTo: "d-8MOKpyXkBvtl8y9qw8C",
          JumpToSection: "tlI9rzg19pPTqlI5UfDP",
          JumpToButton: "eOemW7abP9ncGnYuKqjCO",
          SaleOverlayCtn: "_3GTIcdmGdFdIHRLd5vgEDq",
          SaleOverlay: "_1sZo8rydBtEGprct3pN_1a",
          CarouselCapsuleBordered: "_31OAy5ksRg6RGhCGnDqRr3",
          CarouselCapsuleAnimated: "_3V1O5NH39Eec7m68CKLMDQ",
          AppSummaryWidgetCtn: "_2H8BmYvTdIYKMgG-XiCkc-",
          CarouselSalePageCapsule: "_3r4Ny9tQdQZc50XDM5B2q2",
          SaleBroadcastCtn: "_1SFMhugeWIHJIHrHl6ZQvD",
          SaleOuterTopMargin: "_2-wCQql61VqgdUYz9XDAE6",
          SaleOuterContainer: "_150kddWk8JgylTvh_eC20b",
          CustomStyle_together: "_1lAygDKkL4NolLsYyh0b_x",
          SaleNewSizing: "_1v-BVc2xZoBmJV2CPwNpq0",
          SalePageLogoSet: "JxIGHUxdTjFyWl1KO_tkn",
          SaleBackground: "_2N8SepiLeBUusG1vbHCgiY",
          SaleSectionTitleCtn: "bE2EA4JB9SDa1PZ7HSFL-",
          SaleSectionSubtext: "_17Fnl-wNZIrLjca5rOwwlT",
          SaleSectionContainer: "W9_WAYXgEe-t-7aqqC4Jp",
          vr_supported: "_1BDSJfdkuBN1tCLPLLopYW",
          vr_required: "_1P__hyqsgd049GH0Bn007_",
          preview_placeholder_section: "_3QLsjvek1OeH0pVbeOTBJj",
          LinkCapsule: "_2zVSaxkr0mGLlJ4ivF37dx",
          fullscreen_bg: "j2ykTCJIixZLTJZbDR4Tp",
          fullscreen_bg_video: "_3BU-yduiJJKNkd7_HrsZOY",
          SalePageBroadcastContextHover: "hbVdlTqhylKeYY8mtvLqP",
          AlbumCoverImage: "_2JfUA1GR2GBllJws5Gspq-",
          AlbumTitle: "keaMw-O2oHvRxLDK6gqEG",
          SaleSectionTabListContainer: "_2VZtqrDRVSIicZZHPUY9SY",
          MobileTabSelector: "_2fm5TVukvQanOpOSUahWeX",
          Visible: "_2Jmo5M2wPydPpQXUh8BQt3",
          MobileTabSelectorButton: "_1t4-3uyyq_jmSjRl6tRVef",
          MobileTabSelectorShortcut: "_1P5tcXycY4v5y9lSKeW2bG",
          DesktopTabs: "_2utXvAVvZJb3Wlt5jGxCs",
          MobileTabSelectorDropDown: "_3KO7Yj0s2ECNBrnZ3x6jIy",
          MobileTabSelectorOption: "GiTJlPmmuQyCr-OSCN08c",
          TabContentsContainer: "_2xJbuKOjgnmynp-q7384DI",
          HorizontalScrollInDragForceCursor: "nemO6I3-P1dWDt4lymNBD",
          SaleBroadcastSection: "_1u0IZcPxb5nhSDdfCHHBY9",
          CarouselPage: "HlkukqE4fB5si76sBJzKX",
          TabButtonsCtn: "_21-6tYOa1oCDYC9YCj1Vur",
          TabButton: "_1Gz4sRWceGeI3Si8NI3ZNk",
          SaleTabLabel: "_2mYMQE06Py3h0CfEokpNiM",
          DefaultCreatorCtn: "_3KzJ1sfvwr94TVth1tZA9",
          EventSectionViewAllCtn: "_1B6gV2QA_GwFQvK3wA5qWs",
          SaleSectionBackgroundImageGroupEdit: "_2a4meRP6BAw2re4BFrrwtA",
          BackgroundAnimation: "_1iEXo2C5dYh1sLdEds2zo_",
          "ItemFocusAnim-darkerGrey-nocolor": "_6ALY2cB6oP10XwjHy38XP",
          "ItemFocusAnim-darkerGrey": "_15R1kTQu4fktTozfpKwx_x",
          "ItemFocusAnim-darkGreySettings": "_25-J06c8AyBhzEbrxt0OlL",
          "ItemFocusAnim-darkGrey": "_3yxHI8TA-jq3Ka361SNOoS",
          "ItemFocusAnim-grey": "HdE5j3QJ5wzLUrUd8A9S6",
          "ItemFocusAnim-translucent-white-10": "_3Pg_mdzZKHlcgBMGWoeuM-",
          "ItemFocusAnim-translucent-white-20": "OZ_TTGcJc45o9tMuXjaVs",
          "ItemFocusAnimBorder-darkGrey": "_36t4Gu0DFfDO9-hIb82st6",
          "ItemFocusAnim-green": "_30VQHyiQ7SgMZgv2Q9RwMo",
          focusAnimation: "_1bLCgV4sZsGIHim8xs3go9",
          hoverAnimation: "_3--MfPAMg27VUuOckksz2m",
        };
      },
      28285: (w) => {
        w.exports = {
          Dark: "_2UAf_T9P3-2l5Rr-IlNksx",
          Background: "yjs9mmsKYDARPUPSoBFw3",
          Foreground: "JgT6ZW65muFgrXnrRrXyD",
          Light: "_1LgIo8fAGnrgqGzZ7rU_9D",
          Knockout: "_3BGwJlJ63TcWND8KK0xjaH",
          SizeSmall: "_1Zc5j2ll9yRxA_ZKHEYhw2",
          SizeMedium: "_12wgofPV3GgsAWFUJhpSz2",
          SizeLarge: "_3E-9rilOaYgJAzNjrYPRYE",
          ChordSummary: "_2NB_hM-9uJkdXPKC3tdS7-",
        };
      },
      58579: (w) => {
        w.exports = {
          ClientSelectDropdown: "_36ai7Zh_5P9n3Lpg52IdgV",
          ClientListDropdownMenu: "bEY2j4LBFVv4rCwEfxS64",
        };
      },
      37999: (w) => {
        w.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
      1990: (w) => {
        w.exports = {
          narrowWidth: "500px",
          GraphicalAssetsTabs: "_3oSHTIvUhbK90D9Uvj438V",
          GraphicalAssetsTab: "_3lJb_YN8uykqLcm4eG1jRF",
          Active: "_8XjrTFzaSA8ubHvHCu44L",
          Sticky: "_3dlxz6KBJpvmA-qsVAzxs8",
          GraphicalAssetsTabsLayoutVertical: "_1ZIVlOM_Qz4wInwwXzUHTR",
          GraphicalAssetsTabsVertical: "_3hS8NFdPTrUehJGNVT0PtV",
          ChecklistMode: "_3blAkLFfSQrJjGklUKOP7e",
          GraphicalAssetStatus: "_25U4FBOpeZQAX-v-f9Yosb",
          checklistBox: "_1idkU7IA8dDPOIbsU-dRkJ",
          StatusSuccess: "_1iIRVlPDTEUMMEFuHgLGlq",
          VOWarning: "_3LaJynPDFfccGWUEtdltlt",
          StatusDanger: "UxdQKun4GcZ-B1NJwHevX",
          StatusCaution: "E9t9jUT0k_0xGdy7HbJfd",
          StatusInfo: "_38gm-PDPbi6lw1-aiH81HR",
          StatusIncomplete: "ZGxYVjsUSjHLRHIWkx4-L",
        };
      },
    },
  ]);
})();
