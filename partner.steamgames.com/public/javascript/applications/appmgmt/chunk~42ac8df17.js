/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkappmgmt_storeadmin =
    self.webpackChunkappmgmt_storeadmin || []).push([
    [42012],
    {
      86722: (R, $, r) => {
        "use strict";
        r.d($, { Pm: () => z, d$: () => f, tB: () => M });
        var a = r(7850),
          u = r(24660),
          n = r(72609),
          W = r(43434),
          b = r(83482),
          U = r(71421),
          O = r(53113);
        function v(d) {
          const y = d?.jsondata?.read_more_link;
          if (!y) return;
          const I = (0, O.wm)(y).toLocaleLowerCase();
          return I ? [I] : void 0;
        }
        function F(d, y) {
          return (0, W.p)(d, v(y));
        }
        function M(d, y) {
          if (!d) return "";
          if (!(0, W.p)(d)) return (0, O.NT)(d);
          const I = F(d, y) ? (0, W.E)(d) : d;
          return (n.TS.IN_CLIENT ? "steam://openurl_external/" : "") + I;
        }
        function z(d, y, I) {
          const x = d.toLowerCase().startsWith("http") ? d : "http://" + d;
          return (0, a.jsx)(f, { url: x, event: y, children: I || d });
        }
        const f = (d) => {
          const { url: y, event: I, className: x, style: B } = d;
          let c = (0, b.OZ)(y);
          c = M(c, I);
          const l = (0, W.p)(c) ? "noopener nofollow" : void 0,
            e =
              typeof d.children == "string" &&
              d.children.length > 0 &&
              y &&
              !y.startsWith("steam://")
                ? (0, O.Qz)(y)
                : void 0;
          return (0, a.jsx)(U.Gq, {
            toolTipContent: e,
            direction: "top",
            children: (0, a.jsx)(u.Ii, {
              className: x,
              href: c,
              rel: l,
              id: d.id,
              style: B,
              children: d.children,
            }),
          });
        };
      },
      55483: (R, $, r) => {
        "use strict";
        r.d($, {
          yT: () => I,
          MR: () => j,
          AB: () => J,
          Rc: () => H,
          Gt: () => kt,
          ko: () => nr,
          fy: () => Mt,
          ec: () => V,
          aA: () => o,
          TB: () => w,
          vF: () => xt,
          W$: () => Ft,
        });
        var a = r(99412),
          u = r(76559),
          n = r(75233),
          W = r(20194),
          b = r(72604),
          U = r(72609);
        async function O(T) {
          const D = `${U.TS.COMMUNITY_BASE_URL}ogg/${T}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return z(D);
        }
        async function v(T) {
          const D = u.b.InitFromClanID(T),
            S = `${U.TS.COMMUNITY_BASE_URL}gid/${D.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return z(S);
        }
        async function F(T) {
          const D = `${U.TS.COMMUNITY_BASE_URL}groups/${T}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return z(D);
        }
        async function M(T) {
          const D = `${U.TS.COMMUNITY_BASE_URL}games/${T}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return z(D);
        }
        async function z(T) {
          const D = await fetch(T, { method: "GET" });
          if (D.status == 404) return null;
          if (!D.ok) throw new Error(`Server returned ${D.status}`);
          const S = await D.json();
          return S.success != b.R ? null : S;
        }
        function f(T) {
          return ["clantoclaninfo", T];
        }
        function d(T) {
          return ["apptoclanid", T];
        }
        function y(T, D = "group") {
          return ["vanitytoclanid", D, T?.toLocaleLowerCase()];
        }
        function I(T) {
          const D = T?.[0];
          return (
            D == "clantoclaninfo" || D == "apptoclanid" || D == "vanitytoclanid"
          );
        }
        const x = new WeakSet();
        function B(T) {
          if (!x.has(T)) {
            x.add(T);
            for (const D of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              T.setQueryDefaults(D, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const c = new WeakMap();
        function l(T) {
          if (!T) return null;
          let D = c.get(T);
          return (
            D ||
              ((D = {
                ...T,
                clanSteamID: T.clanSteamIDString
                  ? new u.b(T.clanSteamIDString)
                  : u.b.InitFromClanID(T.clanAccountID),
              }),
              c.set(T, D)),
            D
          );
        }
        function e(T) {
          const { msg: D, success: S, ...h } = T;
          return {
            ...h,
            rss_language: T.rss_language ? T.rss_language : a.Bhc,
          };
        }
        function k(T, D) {
          if (!D) return null;
          B(T);
          const S = e(D);
          return (
            T.setQueryData(f(S.clanAccountID), S),
            S.appid && T.setQueryData(d(S.appid), S.clanAccountID),
            S.vanity_url &&
              T.setQueryData(y(S.vanity_url, "group"), S.clanAccountID),
            S
          );
        }
        function o(T, D) {
          for (const S of D) k(T, S);
        }
        function w(T) {
          const D = (0, n.jE)();
          return (0, W.I)(V(T, D));
        }
        function V(T, D) {
          return (
            B(D),
            {
              queryKey: f(T ?? null),
              queryFn: async () => (T ? k(D, await v(T)) : null),
              enabled: T !== void 0,
              select: l,
            }
          );
        }
        function q(T, D) {
          return (
            B(D),
            {
              queryKey: d(T),
              queryFn: async () => k(D, await O(T))?.clanAccountID ?? null,
              enabled: !!T,
            }
          );
        }
        function E(T, D, S = "group") {
          return (
            B(D),
            {
              queryKey: y(T, S),
              queryFn: async () => {
                if (S == "store") {
                  const N = D.getQueryData(y(T, "group"));
                  if (N) return N;
                }
                const h = S == "store" ? await M(T) : await F(T);
                return k(D, h)?.clanAccountID ?? null;
              },
              enabled: !!T,
            }
          );
        }
        function K(T) {
          return T.isPending ? void 0 : (T.data ?? null);
        }
        function ct(T) {
          return w(T.BIsClanAccount() ? T.GetAccountID() : void 0);
        }
        function xt(T) {
          const D = (0, n.jE)(),
            S = (0, W.I)(q(T, D));
          return w(T ? K(S) : void 0);
        }
        function Ft(T, D = "group") {
          const S = (0, n.jE)(),
            h = (0, W.I)(E(T, S, D));
          return w(T ? K(h) : void 0);
        }
        function kt(T, D) {
          if (T) return l(D.getQueryData(f(T))) ?? void 0;
        }
        function nr(T, D) {
          if (T) return kt(D.getQueryData(d(T)), D);
        }
        function Mt(T, D, S) {
          if (!T) return;
          const h = S ? [S] : ["store", "group"];
          for (const N of h) {
            const A = kt(D.getQueryData(y(T, N)), D);
            if (A) return A;
          }
        }
        async function j(T, D) {
          return T ? l(await D.fetchQuery(V(T, D))) : null;
        }
        async function J(T, D) {
          return T ? j(await D.fetchQuery(q(T, D)), D) : null;
        }
        async function H(T, D, S = "group") {
          return T ? j(await D.fetchQuery(E(T, D, S)), D) : null;
        }
      },
      10985: (R, $, r) => {
        "use strict";
        r.d($, { LO: () => v, A5: () => b });
        var a = r(20194),
          u = r(72604),
          n = r(72609);
        async function W(F) {
          let M = { get_appids: !0, l: n.TS.LANGUAGE };
          const z = new URLSearchParams(M).toString(),
            f = `${n.TS.STORE_BASE_URL}curator/${F}/ajaxgetcreatorhomeinfo/?${z}`,
            d = await fetch(f, { method: "GET" });
          if (!d.ok) throw new Error(`Server returned ${d.status}`);
          const y = await d.json();
          return y.success != u.R ? null : y;
        }
        function b(F) {
          return (0, a.I)(U(F));
        }
        function U(F) {
          return {
            queryKey: O(F),
            queryFn: async () => {
              const M = await W(F);
              if (M) {
                const {
                  success: z,
                  err_msg: f,
                  warning: d,
                  warning_msg: y,
                  ...I
                } = M;
                return I;
              }
              return null;
            },
            enabled: !!F,
          };
        }
        function O(F) {
          return ["creatorhomebyaccount", F];
        }
        function v(F, M) {
          if (F.vanity) {
            switch (M) {
              case "publisher":
                return `${n.TS.STORE_BASE_URL}publisher/${F.vanity}/`;
              case "franchise":
                return `${n.TS.STORE_BASE_URL}franchise/${F.vanity}/`;
            }
            return `${n.TS.STORE_BASE_URL}developer/${F.vanity}/`;
          }
          return `${n.TS.STORE_BASE_URL}curator/${F.creator_clan_id}/`;
        }
      },
      90900: (R, $, r) => {
        "use strict";
        r.d($, { J_: () => n, TP: () => z, st: () => d });
        var a = r(79024);
        function u(o) {
          if (o.preferenceControls.isTechnicallyNecessary) return !0;
          const w = GetCurrentCookiePreferences();
          if (!w) return !1;
          switch (w.preference_state) {
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_AllowAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultAllowAll:
              return !0;
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_RejectAll:
            case EPrivacyCookiePreferenceState.k_EPrivacyCookiePreferenceState_DefaultRejectAll:
              return !1;
          }
          return (
            "IsAllowed" in o.preferenceControls &&
            o.preferenceControls.IsAllowed(w)
          );
        }
        const n = {
            name: "cookieSettings",
            options: {
              secure: !0,
              httpOnly: !1,
              path: "/",
              sameSite: "none",
              maxAge: 1e3 * 3600 * 24 * 365,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          W = {
            name: "steamLoginSecure",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          b = {
            name: "steamDidLoginRefresh",
            options: {
              secure: !0,
              httpOnly: !0,
              path: "/",
              sameSite: "none",
              maxAge: 5 * 1e3,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          U = {
            name: "sessionid",
            options: { secure: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          O = {
            name: "strResponsiveViewPrefs",
            options: { maxAge: 365 * 24 * 60 * 60 * 1e3 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          v = {
            name: "mobileClient",
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          F = {
            name: "presentation_mode",
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          M = {
            name: "Steam_Language",
            options: { secure: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          z = {
            name: "shoppingCartGID",
            options: { path: "/", secure: !0, maxAge: 1e3 * 3600 * 24 * 7 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          f = {
            name: "app_impressions",
            options: { path: "/", secure: !0 },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed: (o) =>
                !!o.valve_analytics?.product_impressions_tracking,
            },
          },
          d = {
            name: "steamLoginSpoofSteamID",
            options: { path: "/", secure: !0 },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          y = {
            name: "steamCountry",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          I = {
            name: "steamCountryUseIPCountry",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "none" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          x = {
            name: "browserid",
            options: {
              path: "/",
              secure: !0,
              maxAge: 3600 * 24 * 7 * 365,
              sameSite: "none",
            },
            preferenceControls: {
              isTechnicallyNecessary: !1,
              IsAllowed(o) {
                return o.valve_analytics?.product_impressions_tracking ?? !1;
              },
            },
          },
          B = {
            name: "clientHints",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !1,
              maxAge: 3600 * 24 * 7 * 365,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          c = {
            name: "webTradeEligibility",
            options: {
              path: "/",
              secure: !0,
              httpOnly: !0,
              maxAge: 3600 * 24 * 1,
            },
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          l = {
            name: "steamparental",
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          e = {
            name: "clientsessionid",
            preferenceControls: { isTechnicallyNecessary: !0 },
          },
          k = {
            name: "steambrowserredirect",
            options: { secure: !0, httpOnly: !0, path: "/", sameSite: "lax" },
            preferenceControls: { isTechnicallyNecessary: !0 },
          };
      },
      16114: (R, $, r) => {
        "use strict";
        r.d($, {
          sq: () => q,
          TW: () => M,
          KC: () => c,
          $z: () => d,
          R2: () => K,
        });
        var a = r(84346);
        const u = {};
        (u.arabic = () => r.e(6696).then(r.t.bind(r, 6696, 19))),
          (u.brazilian = () => r.e(58906).then(r.t.bind(r, 58906, 19))),
          (u.bulgarian = () => r.e(53473).then(r.t.bind(r, 53473, 19))),
          (u.czech = () => r.e(83899).then(r.t.bind(r, 83899, 19))),
          (u.danish = () => r.e(84925).then(r.t.bind(r, 84925, 19))),
          (u.dutch = () => r.e(69902).then(r.t.bind(r, 69902, 19))),
          (u.english = () => r.e(80716).then(r.t.bind(r, 80716, 19))),
          (u.finnish = () => r.e(81663).then(r.t.bind(r, 81663, 19))),
          (u.french = () => r.e(48484).then(r.t.bind(r, 48484, 19))),
          (u.german = () => r.e(66810).then(r.t.bind(r, 66810, 19))),
          (u.greek = () => r.e(13744).then(r.t.bind(r, 13744, 19))),
          (u.hungarian = () => r.e(62101).then(r.t.bind(r, 62101, 19))),
          (u.indonesian = () => r.e(68948).then(r.t.bind(r, 68948, 19))),
          (u.italian = () => r.e(2916).then(r.t.bind(r, 2916, 19))),
          (u.japanese = () => r.e(40195).then(r.t.bind(r, 40195, 19))),
          (u.koreana = () => r.e(84259).then(r.t.bind(r, 84259, 19))),
          (u.latam = () => r.e(24475).then(r.t.bind(r, 24475, 19))),
          (u.malay = () => r.e(60580).then(r.t.bind(r, 60580, 19))),
          (u.norwegian = () => r.e(36884).then(r.t.bind(r, 36884, 19))),
          (u.polish = () => r.e(15269).then(r.t.bind(r, 15269, 19))),
          (u.portuguese = () => r.e(96865).then(r.t.bind(r, 96865, 19))),
          (u.romanian = () => r.e(71391).then(r.t.bind(r, 71391, 19))),
          (u.russian = () => r.e(64933).then(r.t.bind(r, 64933, 19))),
          (u.sc_schinese = () => r.e(27503).then(r.t.bind(r, 27503, 19))),
          (u.schinese = () => r.e(44768).then(r.t.bind(r, 44768, 19))),
          (u.spanish = () => r.e(20876).then(r.t.bind(r, 20876, 19))),
          (u.swedish = () => r.e(75181).then(r.t.bind(r, 75181, 19))),
          (u.tchinese = () => r.e(89779).then(r.t.bind(r, 89779, 19))),
          (u.thai = () => r.e(98970).then(r.t.bind(r, 98970, 19))),
          (u.turkish = () => r.e(87996).then(r.t.bind(r, 87996, 19))),
          (u.ukrainian = () => r.e(47306).then(r.t.bind(r, 47306, 19))),
          (u.vietnamese = () => r.e(72539).then(r.t.bind(r, 72539, 19)));
        async function n(j) {
          if (u[j]) return u[j]();
        }
        var W = r(37901);
        const b = (0, W.l)(n);
        var U = r(44983),
          O = ((j) => (
            (j[(j.None = 0)] = "None"),
            (j[(j.Ago = 1)] = "Ago"),
            (j[(j.Remaining = 2)] = "Remaining"),
            j
          ))(O || {});
        function v(j, J) {
          const H = Date.now() / 1e3 - j;
          return F(H, J);
        }
        function F(j, J, H) {
          let T;
          typeof J == "boolean"
            ? (T = {
                eSuffix: J ? 0 : 1,
                bForceSingleUnits: H,
                bHighGranularity: !1,
              })
            : (T = {
                eSuffix: 1,
                bForceSingleUnits: !1,
                bHighGranularity: !1,
                ...J,
              });
          let D = "TimeInterval_";
          T.eSuffix == 1
            ? (D = "TimeSince_")
            : T.eSuffix == 2 && (D = "TimeRemaining_");
          let S = (h) => Math.floor(h);
          if (
            (T.bAllowDecimal && (S = (h) => Math.round(h * 10) / 10),
            j >= Seconds.PerYear * 2)
          )
            return PkgLocalization.Localize(
              `#${D}XYears`,
              S(j / Seconds.PerYear),
            );
          if (j >= Seconds.PerYear)
            return (
              (j -= Seconds.PerYear),
              j >= Seconds.PerMonth * 2 && !T.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${D}1YearXMonths`,
                    S(j / Seconds.PerMonth),
                  )
                : PkgLocalization.Localize(`#${D}1Year`)
            );
          if (j >= Seconds.PerMonth * 2)
            return PkgLocalization.Localize(
              `#${D}XMonths`,
              S(j / Seconds.PerMonth),
            );
          if (j >= Seconds.PerWeek * 2)
            return PkgLocalization.Localize(
              `#${D}XWeeks`,
              S(j / Seconds.PerWeek),
            );
          if (j >= Seconds.PerWeek)
            return PkgLocalization.Localize(
              `#${D}1Week`,
              S(j / Seconds.PerWeek),
            );
          if (j >= Seconds.PerDay * 2)
            return PkgLocalization.Localize(
              `#${D}XDays`,
              S(j / Seconds.PerDay),
            );
          if (j >= Seconds.PerDay)
            return (
              (j -= Seconds.PerDay),
              j >= Seconds.PerHour * 2 && !T.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${D}1DayXHours`,
                    S(j / Seconds.PerHour),
                  )
                : PkgLocalization.Localize(`#${D}1Day`)
            );
          if (j >= Seconds.PerHour * 2)
            return PkgLocalization.Localize(
              `#${D}XHours`,
              S(j / Seconds.PerHour),
            );
          if (j >= Seconds.PerHour)
            return (
              (j -= Seconds.PerHour),
              j >= Seconds.PerMinute * 2 && !T.bForceSingleUnits
                ? PkgLocalization.Localize(
                    `#${D}1HourXMinutes`,
                    S(j / Seconds.PerMinute),
                  )
                : PkgLocalization.Localize(`#${D}1Hour`)
            );
          if (j >= Seconds.PerMinute * 2) {
            const h = Math.floor(j / Seconds.PerMinute),
              N = j % Seconds.PerMinute;
            return !T.bHighGranularity || N == 0
              ? PkgLocalization.Localize(
                  `#${D}XMinutes`,
                  S(j / Seconds.PerMinute),
                )
              : N == 1
                ? PkgLocalization.Localize(`#${D}XMinutes1Second`, h)
                : PkgLocalization.Localize(`#${D}XMinutesXSeconds`, h, N);
          } else if (j >= Seconds.PerMinute) {
            const h = j % Seconds.PerMinute;
            return !T.bHighGranularity || h == 0
              ? PkgLocalization.Localize(`#${D}1Minute`)
              : h == 1
                ? PkgLocalization.Localize(`#${D}1Minute1Second`)
                : PkgLocalization.Localize(`#${D}1MinuteXSeconds`, h);
          } else
            return T.bHighGranularity
              ? j == 1
                ? PkgLocalization.Localize(`#${D}1Second`)
                : PkgLocalization.Localize(`#${D}XSeconds`, j)
              : PkgLocalization.Localize(`#${D}LessThanAMinute`);
        }
        function M(j, J, H) {
          let T;
          J === void 0 || J === !0 || J === !1
            ? (T = {
                weekday: H ? "long" : "short",
                year: J ? void 0 : "numeric",
              })
            : (T = J);
          let D = new Date(j * 1e3);
          const S = {
            weekday: "short",
            month: "long",
            day: "numeric",
            year: "numeric",
            ...T,
          };
          return D.toLocaleDateString((0, a.J)(), S);
        }
        function z(j, J) {
          let H = new Date(j * 1e3),
            T = new Date(J * 1e3);
          return H.getFullYear() != T.getFullYear() ||
            H.getMonth() != T.getMonth() ||
            H.getDate() != T.getDate()
            ? f(j, J)
            : c(j) + " - " + c(J);
        }
        function f(j, J) {
          let H = new Date(j * 1e3),
            T = new Date(J * 1e3);
          const D = new Date();
          if (
            H.getFullYear() != T.getFullYear() ||
            D.getFullYear() == H.getFullYear()
          )
            return `${d(j)} - ${d(J)}`;
          const S = { month: "short", day: "numeric" },
            h = H.toLocaleDateString(GetPreferredLocales(), S) + " - ";
          if (H.getMonth() == T.getMonth()) {
            const N = { day: "numeric" };
            return h + T.toLocaleDateString(GetPreferredLocales(), N);
          } else return h + T.toLocaleDateString(GetPreferredLocales(), S);
        }
        function d(j, J) {
          let H = new Date(j * 1e3);
          const T = { year: "numeric", month: "short", day: "numeric", ...J };
          return H.toLocaleDateString((0, a.J)(), T);
        }
        function y(j, J) {
          const {
              fullmonthname: H = !1,
              bUseRelativeNames: T = !0,
              bIncludeDayName: D = !1,
            } = J ?? {},
            S = new Date(),
            h = new Date(j * 1e3);
          if (h.getFullYear() != S.getFullYear())
            return d(j, { month: H ? "long" : "short" });
          const N = new Date();
          if ((N.setHours(0, 0, 0, 0), T)) {
            if (h >= N) {
              if ((N.setDate(N.getDate() + 1), h < N))
                return PkgLocalization.Localize("#Time_Today");
              if ((N.setDate(N.getDate() + 1), h < N))
                return PkgLocalization.Localize("#Time_Tomorrow");
            } else if ((N.setDate(N.getDate() - 1), h >= N))
              return PkgLocalization.Localize("#Time_Yesterday");
          }
          const A = { month: H ? "long" : "short", day: "numeric" };
          return (
            D && (A.weekday = "long"),
            h.toLocaleDateString(GetPreferredLocales(), A)
          );
        }
        function I(j) {
          let J = new Date(j * 1e3);
          return q(J);
        }
        function x(j) {
          let J = new Date(j * 1e3);
          return V(J);
        }
        function B(j) {
          const J = new Date();
          J.setHours(15);
          const H = J.toLocaleTimeString(j, { hour: "numeric" }),
            T = J.toLocaleTimeString(j, { hour: "numeric", hour12: !1 });
          return H == T;
        }
        function c(j, J, H) {
          const T = new Date(j * 1e3),
            D = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
            S = { hour: "numeric", minute: "2-digit" },
            h = (0, a.J)(),
            A = { ...(J?.bForce24HourClock || B(h[0]) ? D : S), ...H };
          return T.toLocaleTimeString(h, A);
        }
        function l(j, J, H) {
          const T = new Date(j * 1e3);
          return e(T, !1, !1) + " " + c(j, { bForce24HourClock: J }) + " " + H;
        }
        function e(j, J = !1, H = !0) {
          const T = {
            weekday: H ? "long" : "short",
            day: "numeric",
            month: J ? "long" : "short",
          };
          return j.toLocaleDateString(GetPreferredLocales(), T);
        }
        function k(j) {
          return j.toLocaleDateString(GetPreferredLocales(), {
            weekday: "long",
          });
        }
        function o(j) {
          return j.toLocaleDateString(GetPreferredLocales(), { month: "long" });
        }
        function w(j) {
          return j.toLocaleDateString(GetPreferredLocales(), {
            month: "short",
          });
        }
        function V(j) {
          return j.toLocaleDateString(GetPreferredLocales(), {
            year: "numeric",
          });
        }
        function q(j) {
          return j.toLocaleDateString((0, a.J)(), {
            month: "long",
            year: "numeric",
          });
        }
        function E(j, J) {
          switch (j.getUTCMonth()) {
            case 0:
            case 1:
            case 2:
              return PkgLocalization.Localize(
                J
                  ? "#Time_QuarterOfYear_Expanded_Q1"
                  : "#Time_QuarterOfYear_Q1",
                j.getUTCFullYear(),
              );
            case 3:
            case 4:
            case 5:
              return PkgLocalization.Localize(
                J
                  ? "#Time_QuarterOfYear_Expanded_Q2"
                  : "#Time_QuarterOfYear_Q2",
                j.getUTCFullYear(),
              );
            case 6:
            case 7:
            case 8:
              return PkgLocalization.Localize(
                J
                  ? "#Time_QuarterOfYear_Expanded_Q3"
                  : "#Time_QuarterOfYear_Q3",
                j.getUTCFullYear(),
              );
            default:
              return PkgLocalization.Localize(
                J
                  ? "#Time_QuarterOfYear_Expanded_Q4"
                  : "#Time_QuarterOfYear_Q4",
                j.getUTCFullYear(),
              );
          }
        }
        function K(j) {
          const J = Math.floor(j / U.Kp.PerYear),
            H = Math.floor(j / U.Kp.PerMonth),
            T = Math.floor((j % U.Kp.PerMonth) / U.Kp.PerDay),
            D = Math.floor((j % U.Kp.PerDay) / U.Kp.PerHour),
            S = Math.floor((j % U.Kp.PerHour) / U.Kp.PerMinute);
          return (
            (j = j % U.Kp.PerMinute),
            J > 0
              ? b.Localize("#TimeRemaining_MoreThanOneYear")
              : H > 0
                ? b.Localize("#TimeRemaining_MonthsDays", H, T)
                : T > 0
                  ? b.Localize(
                      "#TimeRemaining_DaysHoursMinutes",
                      T,
                      D.toString().padStart(2, "0"),
                      S.toString().padStart(2, "0"),
                    )
                  : D > 0
                    ? b.Localize(
                        "#TimeRemaining_HoursMinutesSeconds",
                        D.toString().padStart(2, "0"),
                        S.toString().padStart(2, "0"),
                        j.toString().padStart(2, "0"),
                      )
                    : b.Localize(
                        "#TimeRemaining_MinutesSeconds",
                        S.toString().padStart(2, "0"),
                        j.toString().padStart(2, "0"),
                      )
          );
        }
        function ct(j, J, H) {
          for (; j.length < J; ) j = H + j;
          return j;
        }
        function xt(j) {
          return (
            (j === void 0 || isNaN(j)) && (j = 0),
            {
              hours: Math.floor(j / 3600),
              minutes: Math.floor((j % 3600) / 60),
              seconds: Math.floor(j % 60),
              fraction: j - Math.floor(j),
            }
          );
        }
        function Ft(j, J, H) {
          let T = j < 0;
          j = T ? 0 - j : j;
          const D = xt(j),
            S = D.fraction.toFixed(2).split(".")[1],
            h = J ?? !0;
          let N = !h || S == "00";
          T &&
            D.hours == 0 &&
            D.minutes == 0 &&
            D.seconds == 0 &&
            N &&
            (T = !1);
          let A = "";
          if (D.hours) {
            const tt = D.hours.toString(),
              st = ct(D.minutes.toString(), 2, "0"),
              ut = ct(D.seconds.toString(), 2, "0"),
              wt = h
                ? "#Duration_Abbreviation_HourMinuteSecondMillisecond"
                : "#Duration_Abbreviation_HourMinuteSecond";
            A = PkgLocalization.Localize(wt, tt, st, ut, S);
          } else if (D.minutes) {
            const tt = D.minutes.toString(),
              st = ct(D.seconds.toString(), 2, "0"),
              ut = h
                ? "#Duration_Abbreviation_MinuteSecondMillisecond"
                : "#Duration_Abbreviation_MinuteSecond";
            A = PkgLocalization.Localize(ut, tt, st, S);
          } else if (D.seconds) {
            const tt = D.seconds.toString(),
              st = h
                ? "#Duration_Abbreviation_SecondMillisecond"
                : "#Duration_Abbreviation_Second";
            A = PkgLocalization.Localize(st, tt, S);
          }
          return (
            T &&
              (H
                ? (A = PkgLocalization.Localize("#Duration_WrittenNegation", A))
                : (A = "-" + A)),
            A
          );
        }
        function kt(j, J, H) {
          let T = j < 0;
          j = T ? 0 - j : j;
          const D = xt(j),
            S = ct(D.seconds.toString(), 2, "0"),
            h = D.fraction.toFixed(2).split(".")[1],
            N = J ?? !0;
          let A = !N || h == "00";
          T &&
            D.hours == 0 &&
            D.minutes == 0 &&
            D.seconds == 0 &&
            A &&
            (T = !1);
          let tt = "";
          if (D.hours) {
            const st = ct(D.minutes.toString(), 2, "0"),
              ut = N
                ? "#Duration_HourMinuteSecondMillisecond"
                : "#Duration_HourMinuteSecond";
            tt = PkgLocalization.Localize(ut, D.hours, st, S, h);
          } else {
            const st = D.minutes.toString(),
              ut = N
                ? "#Duration_MinuteSecondMillisecond"
                : "#Duration_MinuteSecond";
            tt = PkgLocalization.Localize(ut, st, S, h);
          }
          return (
            T &&
              (H
                ? (tt = PkgLocalization.Localize(
                    "#Duration_WrittenNegation",
                    tt,
                  ))
                : (tt = "-" + tt)),
            tt
          );
        }
        function nr(j) {
          const J = xt(j),
            H = J.hours * 60 + J.minutes,
            T = J.hours,
            D = Math.floor(J.hours / 24),
            S = Math.floor(D / 30);
          return S > 1
            ? PkgLocalization.Localize("#ReadableDuration_Months", S)
            : S === 1
              ? PkgLocalization.Localize("#ReadableDuration_OneMonth")
              : D > 1
                ? PkgLocalization.Localize("#ReadableDuration_Days", D)
                : T > 2
                  ? PkgLocalization.Localize("#ReadableDuration_Hours", T)
                  : H > 2
                    ? PkgLocalization.Localize("#ReadableDuration_Minutes", H)
                    : H > 1
                      ? PkgLocalization.Localize("#ReadableDuration_OneMinute")
                      : PkgLocalization.Localize(
                          "#ReadableDuration_LessThanOneMinute",
                        );
        }
        function Mt(j) {
          if (j >= 120) {
            const H = (Math.round((j / 60) * 10) / 10).toLocaleString(
              GetPreferredLocales(),
              { minimumFractionDigits: 0, maximumFractionDigits: 1 },
            );
            return PkgLocalization.Localize("#Playtime_Hours", H);
          }
          return PkgLocalization.Localize(
            "#Playtime_Minutes",
            j.toLocaleString(GetPreferredLocales()),
          );
        }
      },
      44983: (R, $, r) => {
        "use strict";
        r.d($, { Kp: () => a });
        const a = {
          PerYear: 31536e3,
          PerMonth: 2628e3,
          PerWeek: 604800,
          PerDay: 86400,
          PerHour: 3600,
          PerMinute: 60,
        };
        function u(f, d) {
          return (
            f.getFullYear() == d.getFullYear() &&
            f.getMonth() == d.getMonth() &&
            f.getDate() == d.getDate()
          );
        }
        function n(f, d) {
          let y = new Date(f);
          return y.setDate(y.getDate() - 1), u(y, d);
        }
        function W(f, d) {
          return f.getFullYear() == d.getFullYear();
        }
        function b(f) {
          return new Date(
            f.getFullYear(),
            f.getMonth(),
            f.getDate(),
            f.getHours(),
            0,
            0,
            0,
          );
        }
        function U(f) {
          return new Date(
            f.getFullYear(),
            f.getMonth(),
            f.getDate(),
            0,
            0,
            0,
            0,
          );
        }
        function O(f) {
          return new Date(f.getFullYear(), f.getMonth(), 1, 0, 0, 0, 0);
        }
        function v(f) {
          return new Promise((d) => setTimeout(d, f));
        }
        function F() {
          return Math.floor(Date.now() / 1e3);
        }
        function M(f) {
          return Math.floor(f.getTime() / 1e3);
        }
        function z(f) {
          const d = Math.round(f / 1e3),
            y = Math.floor(d % 60),
            I = Math.floor((d / 60) % 60),
            x = Math.floor(d / 3600);
          let B = !1,
            c = "";
          return (
            x > 0 && ((c += x + ":"), (B = !0)),
            (c += B && I < 10 ? "0" + I + ":" : I + ":"),
            (c += y < 10 ? "0" + y : y),
            c
          );
        }
      },
      1e3: (R, $, r) => {
        "use strict";
        r.d($, { do: () => Xt, of: () => Ht });
        var a = r(7850),
          u = r(55483),
          n = r(24660),
          W = r(64868),
          b = r(72609),
          U = r(89926),
          O = r(72865),
          v = r(25294),
          F = r(20194),
          M = r(75233),
          z = r(68312),
          f = r(98609),
          d = r(20125);
        async function y(p, G) {
          const et = (0, d.Am)(f.TS.STORE_BASE_URL, G, f.iA.country_code);
          return (await (await fetch(et)).json()).rgFollowedApps || [];
        }
        function I() {
          const p = (0, z.KV)(),
            G = f.iA.accountid;
          return (0, F.I)(x(p, G));
        }
        function x(p, G) {
          return {
            queryKey: l(G),
            queryFn: async () => {
              if (!G) return new Set();
              const et = await y(p, G);
              return new Set(et);
            },
            staleTime: 600 * 1e3,
          };
        }
        function B(p) {
          const { data: G } = I();
          return G === void 0 || p == null ? void 0 : G.has(p);
        }
        function c() {
          const p = (0, M.jE)(),
            G = f.iA.accountid;
          return (et, gt) => {
            p.setQueryData(l(G), (rt) => {
              if (!rt) return;
              const Bt = new Set(rt);
              if (gt) for (const mt of gt) Bt.delete(mt);
              if (et) for (const mt of et) Bt.add(mt);
              return Bt;
            });
          };
        }
        function l(p) {
          return ["AccountFollowApps", p ?? 0];
        }
        var e = r(51614),
          k = r(67705);
        function o(p, G, et) {
          const gt = c(),
            rt = f.iA.accountid;
          return (0, e.n)({
            mutationKey: ["useUpdateAppFollow", p, rt, G],
            mutationFn: async () => {
              if (p == null) return;
              const Bt = f.TS.STORE_BASE_URL + "explore/followgame",
                mt = new FormData();
              mt.append("appid", "" + p),
                mt.append("sessionid", (0, k.KC)()),
                G || mt.append("unfollow", "1"),
                et && mt.append("snr", et);
              const yt = await fetch(Bt, {
                method: "POST",
                body: mt,
                credentials: "include",
              });
              if (!yt.ok)
                throw new Error(
                  `Follow App ${G ? "add" : "remove"} of appid ${p} failed (${yt.status})`,
                );
            },
            onMutate: () => {
              p != null && gt(G ? [p] : void 0, G ? void 0 : [p]);
            },
            onError: () => {
              p != null && gt(G ? void 0 : [p], G ? [p] : void 0);
            },
            onSuccess: () => {
              (0, d.WZ)();
            },
          });
        }
        var w = r(10134),
          V = r(32093);
        async function q(p, G) {
          const et = (0, d.Am)(f.TS.STORE_BASE_URL, G, f.iA.country_code),
            rt = await (await fetch(et)).json(),
            Bt = new Set();
          rt.rgCreatorsIgnored?.forEach((at) => Bt.add(at)),
            rt.rgCreatorsFollowed?.forEach((at) => Bt.add(at));
          const mt = new Set();
          return (
            rt.rgCreatorsIgnored?.forEach((at) => mt.add(at)),
            [
              ...(rt.rgCuratorsIgnored ?? []),
              ...(rt.rgCurators
                ? Object.values(rt.rgCurators ?? {}).map((at) => at.clanid)
                : []),
            ].map((at) => {
              const Ut = mt.has(at);
              return {
                clanid: at,
                ignored: Ut,
                followed: !Ut,
                is_creator: Bt.has(at),
              };
            })
          );
        }
        function E() {
          const p = (0, z.KV)(),
            G = b.iA.accountid;
          return (0, F.I)(K(p, G));
        }
        function K(p, G) {
          return {
            queryKey: J(G),
            queryFn: async () => {
              const et = new Map();
              if (G)
                try {
                  (await q(p, G)).forEach((rt) => et.set(rt.clanid, rt));
                } catch (gt) {
                  console.error("GetCuratorAffinityQuery", gt);
                }
              return et;
            },
            enabled: !!G,
          };
        }
        function ct(p) {
          const { data: G } = E();
          return G === void 0 || p == null ? void 0 : !!G.get(p)?.followed;
        }
        function xt(p) {
          const { data: G } = E();
          return G === void 0 || p == null ? void 0 : !!G.get(p)?.ignored;
        }
        function Ft(p) {
          const { data: G } = E();
          if (G === void 0 || p == null || !G.has(p)) return;
          const et = G.get(p);
          return !!(et.followed && et.is_creator);
        }
        function kt(p) {
          const { data: G } = E();
          if (G === void 0 || p == null || !G.has(p)) return;
          const et = G.get(p);
          return !!(et.ignored && et.is_creator);
        }
        function nr() {
          return b.TS.EREALM != V.TU.k_ESteamRealmChina;
        }
        function Mt() {
          return Config.EREALM != ESteamRealm.k_ESteamRealmChina;
        }
        function j() {
          const p = (0, M.jE)(),
            G = b.iA.accountid;
          return (et, gt, rt, Bt) => {
            p.setQueryData(J(G), (mt) => {
              if (!mt) return;
              const yt = new Map(mt);
              return (
                et?.forEach((nt) => {
                  yt.has(nt.clanAccountID)
                    ? (yt.get(nt.clanAccountID).followed = !0)
                    : yt.set(nt.clanAccountID, {
                        clanid: nt.clanAccountID,
                        followed: !0,
                        ignored: !1,
                        is_creator: !1,
                      });
                }),
                gt?.forEach((nt) => {
                  yt.has(nt.clanAccountID)
                    ? (yt.get(nt.clanAccountID).ignored = !0)
                    : yt.set(nt.clanAccountID, {
                        clanid: nt.clanAccountID,
                        followed: !1,
                        ignored: !0,
                        is_creator: !1,
                      });
                }),
                rt?.forEach((nt) => yt.delete(nt.clanAccountID)),
                Bt?.forEach((nt) => {
                  let at = yt.get(nt.clanAccountID);
                  at && (at.is_creator = !0);
                }),
                yt
              );
            });
          };
        }
        function J(p) {
          return ["CuratorAffinityQueryKey", p ?? 0];
        }
        var H = ((p) => (
          (p[(p.k_ECuratorFollow = 1)] = "k_ECuratorFollow"),
          (p[(p.k_ECuratorUnfollow = 2)] = "k_ECuratorUnfollow"),
          (p[(p.k_ECuratorIgnore = 3)] = "k_ECuratorIgnore"),
          (p[(p.k_ECuratorUnignore = 4)] = "k_ECuratorUnignore"),
          p
        ))(H || {});
        function T(p, G) {
          const et = j(),
            gt = f.iA.accountid;
          return (0, e.n)({
            mutationKey: ["useUpdateCuratorAffinity", p, gt, G],
            mutationFn: async () => {
              if (p == null) return !1;
              const rt = G == H.k_ECuratorFollow || G == H.k_ECuratorUnfollow,
                Bt = G == H.k_ECuratorFollow || G == H.k_ECuratorIgnore,
                mt = `${f.TS.STORE_BASE_URL}curators/${rt ? "ajaxfollow/" : "ajaxignore/"}`,
                yt = new FormData();
              yt.append("clanid", "" + p),
                yt.append("sessionid", (0, k.KC)()),
                yt.append(rt ? "follow" : "ignore", Bt ? "1" : "0");
              const nt = await fetch(mt, {
                  method: "POST",
                  body: yt,
                  credentials: "include",
                }),
                at = await nt.json();
              if (!nt.ok)
                throw new Error(
                  `Curator Affinity: ${rt ? "Follow" : "Ignore"} Currator ${Bt ? "add" : "remove"} failed (${nt.status} / ${at.msg})`,
                );
              return at.is_creator;
            },
            onMutate: () => {
              if (p != null) {
                const rt =
                  G == H.k_ECuratorUnfollow || G == H.k_ECuratorUnignore;
                et(
                  G == H.k_ECuratorFollow ? [{ clanAccountID: p }] : void 0,
                  G == H.k_ECuratorIgnore ? [{ clanAccountID: p }] : void 0,
                  rt ? [{ clanAccountID: p }] : void 0,
                );
              }
            },
            onError: (rt) => {
              if (p != null) {
                const Bt = G == H.k_ECuratorFollow || G == H.k_ECuratorIgnore;
                et(
                  G == H.k_ECuratorUnfollow ? [{ clanAccountID: p }] : void 0,
                  G == H.k_ECuratorUnignore ? [{ clanAccountID: p }] : void 0,
                  Bt ? [{ clanAccountID: p }] : void 0,
                  rt ? [{ clanAccountID: p, is_creator: !0 }] : void 0,
                );
              }
            },
            onSuccess: (rt) => {
              rt &&
                p &&
                et(void 0, void 0, void 0, [
                  { clanAccountID: p, is_creator: !0 },
                ]),
                (0, d.WZ)();
            },
          });
        }
        var D = r(90626),
          S = r(85705),
          h = r(36118),
          N = r(36707),
          A = r(18210),
          tt = r(2801),
          st = r(71421),
          ut = r(99371),
          wt = r.n(ut),
          zt = r(85385),
          Kt = r(95695),
          yr = r.n(Kt);
        const $t = (p) => {
          const {
              className: G,
              bIgnored: et,
              bApplyingFollowing: gt,
              bFollowing: rt,
              onFollowClick: Bt,
              followType: mt,
            } = p,
            { elDialogElement: yt, fnShowLogonDialog: nt } = (0, U.l)();
          if (!nr()) return null;
          let at = null;
          switch (mt) {
            case "app":
              at = (0, A.we)("#text_store_follow_desc");
              break;
            case "creatorhome":
              at = (0, A.we)("#CreatorHome_Follow_tooltip");
              break;
            case "steamcurator":
              at = (0, A.we)("#steam_curator_follow_ttip");
              break;
            case "group":
              at = (0, A.we)("#steam_group_follow_ttip");
          }
          return at
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(st.Gq, {
                    toolTipContent: !et && !rt ? at : void 0,
                    children: (0, a.jsxs)(n.ml, {
                      className: (0, N.A)(
                        yr().Button,
                        wt().FollowButton,
                        "FollowButton",
                        G,
                        rt ? "Followed" : "",
                      ),
                      onClick: () => {
                        b.iA.logged_in ? Bt() : nt();
                      },
                      children: [
                        gt && (0, a.jsx)(S.k, { size: 15 }),
                        !gt && (rt || et) && (0, a.jsx)(h.Jlk, {}),
                        (0, a.jsx)("div", {
                          className: (0, N.A)(
                            wt().FollowBtnText,
                            "FollowBtnText",
                          ),
                          children:
                            !gt &&
                            (rt
                              ? (0, A.we)("#Button_Followed")
                              : et
                                ? (0, A.we)("#Button_Ignored")
                                : (0, A.we)("#Button_Follow")),
                        }),
                      ],
                    }),
                  }),
                  yt,
                ],
              })
            : (console.error("CommonFollowButton unexpected type", mt), null);
        };
        function Ht(p) {
          const {
              followType: G,
              fnSuccessCallback: et,
              clanAccountID: gt,
              className: rt,
            } = p,
            [Bt, mt] = D.useState(!1),
            { data: yt } = (0, u.TB)(G ? void 0 : gt),
            nt = ct(gt),
            at = xt(gt),
            { mutateAsync: Ut } = T(
              gt,
              nt ? H.k_ECuratorUnfollow : H.k_ECuratorFollow,
            ),
            [Jt, Vt, pt] = (0, W.uD)(),
            Gt = D.useCallback(async () => {
              nt != null && (mt(!0), await Ut(), mt(!1), et?.(nt));
            }, [nt, et, Ut]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)($t, {
                className: rt,
                bIgnored: !!at,
                bFollowing: !!nt,
                bApplyingFollowing: Bt,
                onFollowClick: () => {
                  b.iA.is_limited ? Vt() : Gt();
                },
                followType:
                  G ?? (yt?.is_creator_home ? "creatorhome" : "steamcurator"),
              }),
              (0, a.jsx)(tt.EN, {
                active: Jt,
                children: (0, a.jsx)(zt.g, { closeModal: pt }),
              }),
            ],
          });
        }
        function Xt(p) {
          const { appid: G, className: et } = p,
            [gt, rt] = D.useState(!1),
            Bt = B(G),
            mt = (0, w.BD)(G),
            yt = (0, O.n9)(),
            nt = v.A.GetSNRLinkParam(yt),
            { mutateAsync: at } = o(G, !Bt, nt),
            Ut = D.useCallback(async () => {
              rt(!0), await at(), rt(!1);
            }, [at]);
          return (0, a.jsx)($t, {
            className: et,
            bIgnored: !!mt,
            bFollowing: !!Bt,
            bApplyingFollowing: gt,
            onFollowClick: Ut,
            followType: "app",
          });
        }
      },
      85385: (R, $, r) => {
        "use strict";
        r.d($, { g: () => b });
        var a = r(7850),
          u = r(2801),
          n = r(18210),
          W = r(72609);
        const b = (U) => {
          let O = W.TS.HELP_BASE_URL + "wizard/HelpWithLimitedAccount";
          return (0, a.jsx)(u.o0, {
            strTitle: (0, n.we)("#Informational_Message"),
            onCancel: U.closeModal,
            onOK: U.closeModal,
            bAlertDialog: !0,
            children: (0, a.jsx)("div", {
              children: (0, n.PP)(
                U.strTokenOverride || "#User_LimitedAccount",
                (0, a.jsx)("a", {
                  href: O,
                  target: W.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noopener noreferrer",
                  children: (0, n.we)("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        };
      },
      83764: (R, $, r) => {
        "use strict";
        r.d($, {
          $YD: () => rs,
          BGM: () => ie,
          BWK: () => Ee,
          Buq: () => xr,
          CSO: () => Gr,
          CYA: () => os,
          DHU: () => se,
          EEh: () => Yi,
          Ftl: () => Te,
          FzB: () => ot,
          G1H: () => rt,
          Gkz: () => u,
          Gxx: () => ei,
          HuG: () => fr,
          IEJ: () => n,
          IbE: () => nt,
          Izv: () => Nr,
          J1r: () => Yr,
          JEe: () => Ri,
          Jtk: () => We,
          Jzd: () => F,
          KCN: () => bt,
          KoH: () => _i,
          LGs: () => et,
          LqT: () => Ht,
          MNG: () => E,
          Mhp: () => ye,
          MnB: () => J,
          PYD: () => Rr,
          PoK: () => At,
          QA9: () => $i,
          QBr: () => d,
          R$d: () => Ur,
          R1B: () => ns,
          RW$: () => ss,
          RsL: () => cs,
          Sv2: () => nr,
          UEV: () => rr,
          UfY: () => Fr,
          Vg1: () => tt,
          VmN: () => me,
          Vov: () => Ft,
          W5v: () => ts,
          Wo$: () => Br,
          Wq7: () => Ci,
          X$z: () => Mt,
          Xkc: () => W,
          Ywc: () => ai,
          ZBT: () => B,
          ZUO: () => qt,
          a5M: () => pi,
          aNN: () => Nt,
          aWw: () => ae,
          bPv: () => Je,
          btm: () => Ve,
          cNr: () => ee,
          cTj: () => Mr,
          ceg: () => H,
          dBS: () => fe,
          dWZ: () => U,
          dm2: () => es,
          dpF: () => D,
          dxW: () => Vi,
          eQ$: () => l,
          equ: () => N,
          f_e: () => _e,
          gEw: () => Q,
          gGw: () => e,
          hSB: () => be,
          hwI: () => De,
          iZ9: () => Ai,
          jXd: () => as,
          jx3: () => Ae,
          jzL: () => X,
          kpV: () => ur,
          lXI: () => Xi,
          mG_: () => I,
          mYY: () => Be,
          mvf: () => ut,
          nL9: () => f,
          nNq: () => qi,
          nPW: () => Qi,
          ng1: () => P,
          nuP: () => b,
          qhO: () => Lr,
          rAU: () => Gi,
          rNe: () => Ji,
          t_B: () => pr,
          u7l: () => Re,
          uZq: () => k,
          ubQ: () => ct,
          vk_: () => Zi,
          vx7: () => is,
          wz4: () => ls,
          yUQ: () => G,
          z3Q: () => O,
          zah: () => he,
          zwR: () => Kt,
        });
        const a = 492,
          u = 19,
          n = 21,
          W = 597,
          b = 9,
          U = 599,
          O = 122,
          v = 493,
          F = 113,
          M = 4182,
          z = 4667,
          f = 701,
          d = 128,
          y = 4345,
          I = 699,
          x = 1756,
          B = 6650,
          c = 4166,
          l = 3871,
          e = 12095,
          k = 1664,
          o = 3859,
          w = 1742,
          V = 4026,
          q = 4085,
          E = 1684,
          K = 21978,
          ct = 1667,
          xt = 4136,
          Ft = 3942,
          kt = 3964,
          nr = 1774,
          Mt = 1695,
          j = 7208,
          J = 3839,
          H = 1625,
          T = 87,
          D = 1685,
          S = 5350,
          h = 4004,
          N = 1662,
          A = 84,
          tt = 1663,
          st = 1677,
          ut = 1773,
          wt = 1719,
          zt = 3810,
          Kt = 3834,
          yr = 3843,
          $t = 4726,
          Ht = 3799,
          Xt = 4711,
          p = 1693,
          G = 1654,
          et = 1698,
          gt = 7481,
          rt = 1721,
          Bt = 1723,
          mt = 1697,
          yt = 4305,
          nt = 1755,
          at = 1734,
          Ut = 1036,
          Jt = 1659,
          Vt = 872,
          pt = 10397,
          Gt = 7368,
          _t = 1708,
          Qt = 4342,
          Ct = 1027,
          tr = 3968,
          At = 5716,
          rr = 4175,
          ar = 4234,
          er = 8013,
          ir = 1643,
          qt = 3978,
          sr = 4255,
          X = 12472,
          Q = 10695,
          _ = 3841,
          ot = 4106,
          bt = 4231,
          Tt = 3798,
          vt = 6426,
          Nt = 1716,
          Wr = 1678,
          Nr = 1702,
          Fr = 5900,
          Zr = 784,
          Ur = 1741,
          $r = 3987,
          Pr = 4791,
          ie = 1676,
          ue = 1621,
          de = 3878,
          se = 3959,
          Mr = 4885,
          Gr = 1775,
          ne = 4747,
          ae = 1738,
          me = 1687,
          Jr = 1646,
          oe = 4094,
          fe = 4604,
          Yr = 4434,
          Xr = 1743,
          pr = 9551,
          Lr = 3835,
          Oe = 5125,
          kr = 3916,
          ze = 3814,
          ye = 1645,
          Te = 1720,
          Ue = 4190,
          or = 5411,
          cr = 6971,
          Me = 4947,
          Pe = 4295,
          Ie = 4840,
          Fe = 1669,
          Ee = 4172,
          Le = 4252,
          Ne = 4195,
          je = 7332,
          le = 4325,
          ge = 1710,
          ke = 8945,
          Ze = 4057,
          ce = 4637,
          Ar = 5851,
          he = 1666,
          Ke = 5923,
          L = 4242,
          t = 4168,
          s = 4150,
          P = 4115,
          dt = 1445,
          Yt = 1754,
          Lt = 5752,
          lr = 5711,
          jt = 1644,
          St = 4695,
          ft = 4158,
          Rt = 13782,
          xr = 1628,
          Ir = 14139,
          Kr = 3965,
          He = 4064,
          $e = 6815,
          Rr = 4486,
          ai = 5395,
          Pi = 1759,
          Je = 4328,
          oi = 7948,
          Ye = 13906,
          Xe = 11014,
          pe = 1673,
          li = 4758,
          we = 1770,
          be = 5613,
          Qr = 31275,
          De = 4191,
          Ii = 4036,
          Ot = 6378,
          C = 5363,
          m = 15045,
          wr = 4562,
          br = 4236,
          Vr = 6691,
          vr = 11123,
          ur = 44868,
          Sr = 5547,
          dr = 8122,
          Or = 5186,
          zr = 4161,
          mr = 4400,
          fr = 6730,
          Tr = 4975,
          Er = 4364,
          gr = 7743,
          qr = 5030,
          Br = 6129,
          _r = 9541,
          jr = 4598,
          hr = 1718,
          Cr = 1777,
          te = 7432,
          Dr = 809,
          re = 7107,
          ve = 19995,
          Ae = 1665,
          ci = 10816,
          Re = 560542,
          ui = 4736,
          Ve = 5154,
          Ge = 16598,
          di = 7250,
          qe = 1752,
          mi = 1616,
          We = 17305,
          _e = 21725,
          Be = 3813,
          xe = 5794,
          Fi = 4684,
          fi = 25085,
          Li = 1670,
          Ni = 5348,
          ki = 5708,
          Ki = 1714,
          gi = 4821,
          Bi = 176981,
          Hr = 3854,
          yi = 13276,
          Mi = 5055,
          Ce = 4046,
          wi = 1681,
          bi = 1688,
          vi = 1732,
          Si = 4508,
          Oi = 12057,
          ti = 5160,
          zi = 29482,
          Ti = 8666,
          ri = 16689,
          Ei = 4608,
          ee = 31579,
          ji = 5179,
          ei = 4474,
          hi = 1671,
          Di = 1751,
          Wi = 5502,
          Se = 3955,
          xi = 9271,
          Z = 10808,
          i = 5608,
          g = 1717,
          Y = 6052,
          it = 5300,
          lt = 1647,
          ht = 5765,
          Pt = 8075,
          Dt = 97070,
          It = 4878,
          Wt = 15954,
          Et = 1651,
          Zt = 4145,
          Ui = 6910,
          Qe = 22602,
          ii = 6869,
          si = 5673,
          Hi = 7569,
          ni = 6276,
          us = 150626,
          ds = 9564,
          ms = 11333,
          fs = 3952,
          gs = 30358,
          Bs = 16094,
          ys = 8093,
          Ms = 5796,
          ws = 10679,
          bs = 5390,
          vs = 1254552,
          Ss = 15277,
          Os = 17894,
          zs = 1680,
          Ts = 1637,
          Es = 507423,
          js = 4559,
          hs = 4155,
          Ds = 9157,
          Ws = 4202,
          xs = 6915,
          Us = 12686,
          Qi = 1254546,
          Ps = 5382,
          Is = 15564,
          Zi = 18594,
          Fs = 4777,
          Ls = 3796,
          Ns = 6625,
          ks = 5372,
          Ks = 8369,
          Hs = 5432,
          Qs = 7423,
          Zs = 24003,
          $s = 5981,
          Js = 4845,
          Ys = 5230,
          Xs = 198631,
          ps = 776177,
          As = 180368,
          Rs = 7926,
          Vs = 7622,
          Gs = 8253,
          qs = 9592,
          _s = 17770,
          Cs = 6621,
          tn = 6041,
          rn = 4835,
          en = 13577,
          sn = 4184,
          nn = 6310,
          an = 6702,
          on = 16250,
          ln = 42152,
          cn = 1674,
          un = 56690,
          dn = 9204,
          mn = 6948,
          fn = 17015,
          gn = 21006,
          Bn = 1730,
          $i = 7038,
          yn = 5407,
          Ji = 1746,
          Mn = 14906,
          wn = 4137,
          bn = 603297,
          vn = 13070,
          Sn = 123332,
          On = 198913,
          zn = 22955,
          Tn = 19780,
          En = 47827,
          Yi = 5727,
          jn = 255534,
          hn = 7328,
          Dn = 5914,
          Wn = 19568,
          xn = 4852,
          Un = 9803,
          Pn = 324176,
          In = 17337,
          Fn = 27758,
          Ln = 1753,
          Nn = 15868,
          kn = 71389,
          Kn = 10383,
          Hn = 96359,
          Qn = 252854,
          Zn = 856791,
          $n = 28444,
          Jn = 745697,
          Yn = 7309,
          Xn = 129761,
          pn = 620519,
          An = 353880,
          Rn = 1084988,
          Xi = 791774,
          Vn = 1100689,
          pi = 5652,
          Ai = 615955,
          Ri = 4102,
          Gn = 10437,
          Vi = 3877,
          Gi = 5537,
          qn = 6506,
          qi = 5379,
          _i = 10235,
          _n = 3920,
          Ci = 220585,
          Cn = 1100686,
          ts = 87918,
          rs = 1100687,
          es = 26921,
          is = 1100688,
          ta = 12190,
          ra = 13382,
          ea = 3993,
          ia = 11104,
          sa = 4994,
          na = 32322,
          aa = 17389,
          oa = 42804,
          la = 454187,
          ss = 9130,
          ca = 916648,
          ua = 1023537,
          da = 33572,
          ma = 158638,
          fa = 6054,
          ga = 4535,
          ns = 91114,
          as = 7178,
          Ba = 11634,
          os = 723991,
          ya = 1320952,
          ls = 1239876,
          cs = 23491,
          Ma = 889937,
          wa = 25959,
          ba = 760247,
          va = 37376,
          Sa = 1776,
          Oa = 10617,
          za = 46348,
          Ta = 20486,
          Ea = 1352486,
          ja = 9626,
          ha = 52406,
          Da = 6835,
          Wa = 21635,
          xa = 97376,
          Ua = 552282,
          Pa = 3934,
          Ia = 3954,
          Fa = 4162,
          La = 4291,
          Na = 4520,
          ka = 5941,
          Ka = 6214,
          Ha = 7108,
          Qa = 7556,
          Za = 7702,
          $a = 11095,
          Ja = 14720,
          Ya = 35079,
          Xa = 37799,
          pa = 40500,
          Aa = 42089,
          Ra = 42329,
          Va = 49213,
          Ga = 61357,
          qa = 117648,
          _a = 189941,
          Ca = 323922,
          to = 337964,
          ro = 769306,
          eo = 847164,
          io = 1091588,
          so = 1199779,
          no = 1220528;
      },
      79024: (R, $, r) => {
        "use strict";
        r.d($, { T4: () => V, CY: () => a, ie: () => u });
        var a = {};
        r.r(a),
          r.d(a, {
            PK: () => v,
            UI: () => M,
            __: () => O,
            _H: () => z,
            rE: () => F,
          });
        var u = {};
        r.r(u), r.d(u, { CL: () => f, mO: () => y });
        var n = r(80613),
          W = r.n(n),
          b = r(75245),
          U = r(35038);
        const O = 0,
          v = 1,
          F = 2,
          M = 3,
          z = 4,
          f = 0,
          d = 1,
          y = 1;
        function I(q) {
          return "unknown EPrivacyCookiePreferenceState ( " + q + " )";
        }
        function x(q) {
          return "unknown EPrivacyCookiePreferencesVersion ( " + q + " )";
        }
        class B extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(E = null) {
            super(),
              B.prototype.version || b.Sg(B.M()),
              n.Message.initialize(this, E, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    version: { n: 1, br: b.qM.readEnum, bw: b.gp.writeEnum },
                    preference_state: {
                      n: 2,
                      br: b.qM.readEnum,
                      bw: b.gp.writeEnum,
                    },
                    content_customization: { n: 3, c },
                    valve_analytics: { n: 4, c: l },
                    third_party_analytics: { n: 5, c: e },
                    third_party_content: { n: 6, c: k },
                    utm_enabled: {
                      n: 7,
                      d: !0,
                      br: b.qM.readBool,
                      bw: b.gp.writeBool,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = b.w0(B.M())), B.sm_mbf;
          }
          toObject(E = !1) {
            return B.toObject(E, this);
          }
          static toObject(E, K) {
            return b.BT(B.M(), E, K);
          }
          static fromObject(E) {
            return b.Uq(B.M(), E);
          }
          static deserializeBinary(E) {
            let K = new (W().BinaryReader)(E),
              ct = new B();
            return B.deserializeBinaryFromReader(ct, K);
          }
          static deserializeBinaryFromReader(E, K) {
            return b.zj(B.MBF(), E, K);
          }
          serializeBinary() {
            var E = new (W().BinaryWriter)();
            return B.serializeBinaryToWriter(this, E), E.getResultBuffer();
          }
          static serializeBinaryToWriter(E, K) {
            b.i0(B.M(), E, K);
          }
          serializeBase64String() {
            var E = new (W().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, E), E.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences";
          }
        }
        class c extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(E = null) {
            super(),
              c.prototype.recentapps || b.Sg(c.M()),
              n.Message.initialize(this, E, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = {
                  proto: c,
                  fields: {
                    recentapps: { n: 1, br: b.qM.readBool, bw: b.gp.writeBool },
                  },
                }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = b.w0(c.M())), c.sm_mbf;
          }
          toObject(E = !1) {
            return c.toObject(E, this);
          }
          static toObject(E, K) {
            return b.BT(c.M(), E, K);
          }
          static fromObject(E) {
            return b.Uq(c.M(), E);
          }
          static deserializeBinary(E) {
            let K = new (W().BinaryReader)(E),
              ct = new c();
            return c.deserializeBinaryFromReader(ct, K);
          }
          static deserializeBinaryFromReader(E, K) {
            return b.zj(c.MBF(), E, K);
          }
          serializeBinary() {
            var E = new (W().BinaryWriter)();
            return c.serializeBinaryToWriter(this, E), E.getResultBuffer();
          }
          static serializeBinaryToWriter(E, K) {
            b.i0(c.M(), E, K);
          }
          serializeBase64String() {
            var E = new (W().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, E), E.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ContentCustomization";
          }
        }
        class l extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(E = null) {
            super(),
              l.prototype.product_impressions_tracking || b.Sg(l.M()),
              n.Message.initialize(this, E, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    product_impressions_tracking: {
                      n: 1,
                      br: b.qM.readBool,
                      bw: b.gp.writeBool,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = b.w0(l.M())), l.sm_mbf;
          }
          toObject(E = !1) {
            return l.toObject(E, this);
          }
          static toObject(E, K) {
            return b.BT(l.M(), E, K);
          }
          static fromObject(E) {
            return b.Uq(l.M(), E);
          }
          static deserializeBinary(E) {
            let K = new (W().BinaryReader)(E),
              ct = new l();
            return l.deserializeBinaryFromReader(ct, K);
          }
          static deserializeBinaryFromReader(E, K) {
            return b.zj(l.MBF(), E, K);
          }
          serializeBinary() {
            var E = new (W().BinaryWriter)();
            return l.serializeBinaryToWriter(this, E), E.getResultBuffer();
          }
          static serializeBinaryToWriter(E, K) {
            b.i0(l.M(), E, K);
          }
          serializeBase64String() {
            var E = new (W().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, E), E.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ValveAnalytics";
          }
        }
        class e extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(E = null) {
            super(),
              e.prototype.google_analytics || b.Sg(e.M()),
              n.Message.initialize(this, E, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              e.sm_m ||
                (e.sm_m = {
                  proto: e,
                  fields: {
                    google_analytics: {
                      n: 1,
                      br: b.qM.readBool,
                      bw: b.gp.writeBool,
                    },
                  },
                }),
              e.sm_m
            );
          }
          static MBF() {
            return e.sm_mbf || (e.sm_mbf = b.w0(e.M())), e.sm_mbf;
          }
          toObject(E = !1) {
            return e.toObject(E, this);
          }
          static toObject(E, K) {
            return b.BT(e.M(), E, K);
          }
          static fromObject(E) {
            return b.Uq(e.M(), E);
          }
          static deserializeBinary(E) {
            let K = new (W().BinaryReader)(E),
              ct = new e();
            return e.deserializeBinaryFromReader(ct, K);
          }
          static deserializeBinaryFromReader(E, K) {
            return b.zj(e.MBF(), E, K);
          }
          serializeBinary() {
            var E = new (W().BinaryWriter)();
            return e.serializeBinaryToWriter(this, E), E.getResultBuffer();
          }
          static serializeBinaryToWriter(E, K) {
            b.i0(e.M(), E, K);
          }
          serializeBase64String() {
            var E = new (W().BinaryWriter)();
            return (
              e.serializeBinaryToWriter(this, E), E.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyAnalytics";
          }
        }
        class k extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(E = null) {
            super(),
              k.prototype.youtube || b.Sg(k.M()),
              n.Message.initialize(this, E, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    youtube: { n: 1, br: b.qM.readBool, bw: b.gp.writeBool },
                    vimeo: { n: 2, br: b.qM.readBool, bw: b.gp.writeBool },
                    sketchfab: { n: 3, br: b.qM.readBool, bw: b.gp.writeBool },
                    twitter: { n: 4, br: b.qM.readBool, bw: b.gp.writeBool },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = b.w0(k.M())), k.sm_mbf;
          }
          toObject(E = !1) {
            return k.toObject(E, this);
          }
          static toObject(E, K) {
            return b.BT(k.M(), E, K);
          }
          static fromObject(E) {
            return b.Uq(k.M(), E);
          }
          static deserializeBinary(E) {
            let K = new (W().BinaryReader)(E),
              ct = new k();
            return k.deserializeBinaryFromReader(ct, K);
          }
          static deserializeBinaryFromReader(E, K) {
            return b.zj(k.MBF(), E, K);
          }
          serializeBinary() {
            var E = new (W().BinaryWriter)();
            return k.serializeBinaryToWriter(this, E), E.getResultBuffer();
          }
          static serializeBinaryToWriter(E, K) {
            b.i0(k.M(), E, K);
          }
          serializeBase64String() {
            var E = new (W().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, E), E.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacyCookiePreferences_ThirdPartyContent";
          }
        }
        class o extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(E = null) {
            super(), n.Message.initialize(this, E, 0, -1, void 0, null);
          }
          toObject(E = !1) {
            return o.toObject(E, this);
          }
          static toObject(E, K) {
            return E ? { $jspbMessageInstance: K } : {};
          }
          static fromObject(E) {
            return new o();
          }
          static deserializeBinary(E) {
            let K = new (W().BinaryReader)(E),
              ct = new o();
            return o.deserializeBinaryFromReader(ct, K);
          }
          static deserializeBinaryFromReader(E, K) {
            return E;
          }
          serializeBinary() {
            var E = new (W().BinaryWriter)();
            return o.serializeBinaryToWriter(this, E), E.getResultBuffer();
          }
          static serializeBinaryToWriter(E, K) {}
          serializeBase64String() {
            var E = new (W().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, E), E.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Request";
          }
        }
        class w extends n.Message {
          static ImplementsStaticInterface() {}
          constructor(E = null) {
            super(),
              w.prototype.preferences || b.Sg(w.M()),
              n.Message.initialize(this, E, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { preferences: { n: 1, c: B } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = b.w0(w.M())), w.sm_mbf;
          }
          toObject(E = !1) {
            return w.toObject(E, this);
          }
          static toObject(E, K) {
            return b.BT(w.M(), E, K);
          }
          static fromObject(E) {
            return b.Uq(w.M(), E);
          }
          static deserializeBinary(E) {
            let K = new (W().BinaryReader)(E),
              ct = new w();
            return w.deserializeBinaryFromReader(ct, K);
          }
          static deserializeBinaryFromReader(E, K) {
            return b.zj(w.MBF(), E, K);
          }
          serializeBinary() {
            var E = new (W().BinaryWriter)();
            return w.serializeBinaryToWriter(this, E), E.getResultBuffer();
          }
          static serializeBinaryToWriter(E, K) {
            b.i0(w.M(), E, K);
          }
          serializeBase64String() {
            var E = new (W().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, E), E.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountPrivacy_GetCookiePreferences_Response";
          }
        }
        var V;
        ((q) => {
          function E(K, ct, xt) {
            return K.SendMsg(
              "AccountPrivacy.GetCookiePreferences#1",
              (0, U.I8)(o, ct, xt),
              w,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          q.GetCookiePreferences = E;
        })(V || (V = {}));
      },
      41944: (R, $, r) => {
        "use strict";
        r.d($, { _o: () => e, lO: () => c });
        var a = r(80613),
          u = r.n(a),
          n = r(75245),
          W = r(35038),
          b = r(3367),
          U = r(18025);
        class O extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              O.prototype.context || n.Sg(O.M()),
              a.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    context: { n: 2, c: b.TS },
                    data_request: { n: 3, c: b.gn },
                    gift_info: { n: 4, c: U.$z },
                    gidshoppingcart: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    gidreplayoftransid: {
                      n: 5,
                      br: n.qM.readFixed64String,
                      bw: n.gp.writeFixed64String,
                    },
                    for_init_purchase: {
                      n: 6,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
          }
          toObject(o = !1) {
            return O.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(O.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(O.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new O();
            return O.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(O.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return O.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(O.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Request";
          }
        }
        class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              v.prototype.cart_items || n.Sg(v.M()),
              a.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    cart_items: { n: 1, c: F, r: !0, q: !0 },
                    estimated_totals: { n: 5, c: d },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
          }
          toObject(o = !1) {
            return v.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(v.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(v.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new v();
            return v.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(v.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return v.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(v.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response";
          }
        }
        class F extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              F.prototype.line_item_id || n.Sg(F.M()),
              a.Message.initialize(this, o, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    item_id: { n: 2, c: b.O4 },
                    store_item: { n: 3, c: b.vB },
                    gift_info: { n: 4, c: U.$z },
                    errors: { n: 5, c: M },
                    warnings: { n: 6, c: z },
                    subtotal: { n: 7, c: U.Hi },
                    price_when_added: { n: 8, c: U.Hi },
                    original_price: { n: 9, c: U.Hi },
                    coupon_applied: { n: 10, c: U.HX },
                    coupon_discount: { n: 11, c: U.Hi },
                    can_purchase_as_gift: {
                      n: 12,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    restrict_add_additional_to_cart: {
                      n: 13,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    quantity: {
                      n: 14,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    included_packageids: {
                      n: 15,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = n.w0(F.M())), F.sm_mbf;
          }
          toObject(o = !1) {
            return F.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(F.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(F.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new F();
            return F.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(F.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return F.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(F.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem";
          }
        }
        class M extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              M.prototype.owned_appids || n.Sg(M.M()),
              a.Message.initialize(this, o, 0, -1, [1, 2, 11], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    owned_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: n.qM.readInt32,
                      pbr: n.qM.readPackedInt32,
                      bw: n.gp.writeRepeatedInt32,
                    },
                    duplicate_appids_in_cart: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: n.qM.readInt32,
                      pbr: n.qM.readPackedInt32,
                      bw: n.gp.writeRepeatedInt32,
                    },
                    unavailable_in_country: {
                      n: 3,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    invalid_coupon: {
                      n: 4,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    invalid_coupon_for_item: {
                      n: 5,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    coupon_exclusive_promo: {
                      n: 6,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    cannot_purchase_as_gift: {
                      n: 7,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    invalid_item: {
                      n: 8,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    too_many_in_cart: {
                      n: 9,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    has_existing_billing_agreement: {
                      n: 10,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    missing_must_own_appids: {
                      n: 11,
                      r: !0,
                      q: !0,
                      br: n.qM.readInt32,
                      pbr: n.qM.readPackedInt32,
                      bw: n.gp.writeRepeatedInt32,
                    },
                    adult_content_restricted: {
                      n: 12,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    commercial_license_restricted: {
                      n: 13,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    gift_not_valid_for_recipient_region: {
                      n: 14,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = n.w0(M.M())), M.sm_mbf;
          }
          toObject(o = !1) {
            return M.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(M.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(M.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new M();
            return M.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(M.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return M.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(M.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Errors";
          }
        }
        class z extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              z.prototype.owned_appids || n.Sg(z.M()),
              a.Message.initialize(this, o, 0, -1, [1, 2, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              z.sm_m ||
                (z.sm_m = {
                  proto: z,
                  fields: {
                    owned_appids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: n.qM.readInt32,
                      pbr: n.qM.readPackedInt32,
                      bw: n.gp.writeRepeatedInt32,
                    },
                    owned_appids_extra_copy: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: n.qM.readInt32,
                      pbr: n.qM.readPackedInt32,
                      bw: n.gp.writeRepeatedInt32,
                    },
                    appids_in_mastersub: { n: 3, c: f, r: !0, q: !0 },
                    price_has_changed: {
                      n: 4,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    non_refundable: {
                      n: 5,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    gift_recipient_higher_price: {
                      n: 6,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                  },
                }),
              z.sm_m
            );
          }
          static MBF() {
            return z.sm_mbf || (z.sm_mbf = n.w0(z.M())), z.sm_mbf;
          }
          toObject(o = !1) {
            return z.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(z.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(z.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new z();
            return z.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(z.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return z.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(z.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              z.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings";
          }
        }
        class f extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              f.prototype.cart_appid || n.Sg(f.M()),
              a.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              f.sm_m ||
                (f.sm_m = {
                  proto: f,
                  fields: {
                    cart_appid: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    mastersub_appid: {
                      n: 2,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              f.sm_m
            );
          }
          static MBF() {
            return f.sm_mbf || (f.sm_mbf = n.w0(f.M())), f.sm_mbf;
          }
          toObject(o = !1) {
            return f.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(f.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(f.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new f();
            return f.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(f.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return f.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(f.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_CartItem_Warnings_AppInMasterSub";
          }
        }
        class d extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              d.prototype.subtotal || n.Sg(d.M()),
              a.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: {
                    subtotal: { n: 1, c: U.Hi },
                    wallet_balance: { n: 2, c: U.Hi },
                    exceeding_wallet_balance: { n: 3, c: U.Hi },
                    remaining_wallet_balance: { n: 4, c: U.Hi },
                  },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = n.w0(d.M())), d.sm_mbf;
          }
          toObject(o = !1) {
            return d.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(d.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(d.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new d();
            return d.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(d.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return d.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(d.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_ValidateCart_Response_EstimatedTotals";
          }
        }
        class y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              y.prototype.item_ids || n.Sg(y.M()),
              a.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: { item_ids: { n: 1, c: b.O4, r: !0, q: !0 } },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = n.w0(y.M())), y.sm_mbf;
          }
          toObject(o = !1) {
            return y.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(y.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(y.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new y();
            return y.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(y.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return y.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(y.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Request";
          }
        }
        class I extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              I.prototype.ownership_info || n.Sg(I.M()),
              a.Message.initialize(this, o, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: { ownership_info: { n: 1, c: B, r: !0, q: !0 } },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = n.w0(I.M())), I.sm_mbf;
          }
          toObject(o = !1) {
            return I.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(I.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(I.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new I();
            return I.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(I.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return I.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(I.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response";
          }
        }
        class x extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              x.prototype.accountid || n.Sg(x.M()),
              a.Message.initialize(this, o, 0, -1, [4, 5], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              x.sm_m ||
                (x.sm_m = {
                  proto: x,
                  fields: {
                    accountid: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    already_owns: {
                      n: 2,
                      br: n.qM.readBool,
                      bw: n.gp.writeBool,
                    },
                    wishes_for: { n: 3, br: n.qM.readBool, bw: n.gp.writeBool },
                    partial_owns_appids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    partial_wishes_for: {
                      n: 5,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                  },
                }),
              x.sm_m
            );
          }
          static MBF() {
            return x.sm_mbf || (x.sm_mbf = n.w0(x.M())), x.sm_mbf;
          }
          toObject(o = !1) {
            return x.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(x.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(x.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new x();
            return x.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(x.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return x.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(x.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_FriendOwnership";
          }
        }
        class B extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              B.prototype.item_id || n.Sg(B.M()),
              a.Message.initialize(this, o, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    item_id: { n: 1, c: b.O4 },
                    friend_ownership: { n: 2, c: x, r: !0, q: !0 },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = n.w0(B.M())), B.sm_mbf;
          }
          toObject(o = !1) {
            return B.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(B.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(B.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new B();
            return B.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(B.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return B.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(B.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_GetFriendOwnershipForGifting_Response_OwnershipInfo";
          }
        }
        class c extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              c.prototype.item_id || n.Sg(c.M()),
              a.Message.initialize(this, o, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              c.sm_m ||
                (c.sm_m = { proto: c, fields: { item_id: { n: 1, c: b.O4 } } }),
              c.sm_m
            );
          }
          static MBF() {
            return c.sm_mbf || (c.sm_mbf = n.w0(c.M())), c.sm_mbf;
          }
          toObject(o = !1) {
            return c.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(c.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(c.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new c();
            return c.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(c.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return c.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(c.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              c.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Request";
          }
        }
        class l extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(o = null) {
            super(),
              l.prototype.packageids_added || n.Sg(l.M()),
              a.Message.initialize(this, o, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              l.sm_m ||
                (l.sm_m = {
                  proto: l,
                  fields: {
                    packageids_added: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    appids_added: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: n.qM.readUint32,
                      pbr: n.qM.readPackedUint32,
                      bw: n.gp.writeRepeatedUint32,
                    },
                    purchase_result_detail: {
                      n: 3,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                  },
                }),
              l.sm_m
            );
          }
          static MBF() {
            return l.sm_mbf || (l.sm_mbf = n.w0(l.M())), l.sm_mbf;
          }
          toObject(o = !1) {
            return l.toObject(o, this);
          }
          static toObject(o, w) {
            return n.BT(l.M(), o, w);
          }
          static fromObject(o) {
            return n.Uq(l.M(), o);
          }
          static deserializeBinary(o) {
            let w = new (u().BinaryReader)(o),
              V = new l();
            return l.deserializeBinaryFromReader(V, w);
          }
          static deserializeBinaryFromReader(o, w) {
            return n.zj(l.MBF(), o, w);
          }
          serializeBinary() {
            var o = new (u().BinaryWriter)();
            return l.serializeBinaryToWriter(this, o), o.getResultBuffer();
          }
          static serializeBinaryToWriter(o, w) {
            n.i0(l.M(), o, w);
          }
          serializeBase64String() {
            var o = new (u().BinaryWriter)();
            return (
              l.serializeBinaryToWriter(this, o), o.getResultBase64String()
            );
          }
          getClassName() {
            return "CCheckout_AddFreeLicense_Response";
          }
        }
        var e;
        ((k) => {
          function o(q, E, K) {
            return q.SendMsg("Checkout.ValidateCart#1", (0, W.I8)(O, E, K), v, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          k.ValidateCart = o;
          function w(q, E, K) {
            return q.SendMsg(
              "Checkout.GetFriendOwnershipForGifting#1",
              (0, W.I8)(y, E, K),
              I,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          k.GetFriendOwnershipForGifting = w;
          function V(q, E, K) {
            return q.SendMsg(
              "Checkout.AddFreeLicense#1",
              (0, W.I8)(c, E, K),
              l,
              { ePrivilege: 1 },
            );
          }
          k.AddFreeLicense = V;
        })(e || (e = {}));
      },
      18025: (R, $, r) => {
        "use strict";
        r.d($, { $z: () => b, HX: () => v, Hi: () => O });
        var a = r(80613),
          u = r.n(a),
          n = r(75245);
        function W(F) {
          return "unknown ELineItemPurchaseNotice ( " + F + " )";
        }
        class b extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(M = null) {
            super(),
              b.prototype.accountid_giftee || n.Sg(b.M()),
              a.Message.initialize(this, M, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
                  fields: {
                    accountid_giftee: {
                      n: 1,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    gift_message: { n: 2, c: U },
                    time_scheduled_send: {
                      n: 3,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    email_giftee: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = n.w0(b.M())), b.sm_mbf;
          }
          toObject(M = !1) {
            return b.toObject(M, this);
          }
          static toObject(M, z) {
            return n.BT(b.M(), M, z);
          }
          static fromObject(M) {
            return n.Uq(b.M(), M);
          }
          static deserializeBinary(M) {
            let z = new (u().BinaryReader)(M),
              f = new b();
            return b.deserializeBinaryFromReader(f, z);
          }
          static deserializeBinaryFromReader(M, z) {
            return n.zj(b.MBF(), M, z);
          }
          serializeBinary() {
            var M = new (u().BinaryWriter)();
            return b.serializeBinaryToWriter(this, M), M.getResultBuffer();
          }
          static serializeBinaryToWriter(M, z) {
            n.i0(b.M(), M, z);
          }
          serializeBase64String() {
            var M = new (u().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, M), M.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        }
        class U extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(M = null) {
            super(),
              U.prototype.gifteename || n.Sg(U.M()),
              a.Message.initialize(this, M, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              U.sm_m ||
                (U.sm_m = {
                  proto: U,
                  fields: {
                    gifteename: {
                      n: 1,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    message: {
                      n: 2,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    sentiment: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    signature: {
                      n: 4,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              U.sm_m
            );
          }
          static MBF() {
            return U.sm_mbf || (U.sm_mbf = n.w0(U.M())), U.sm_mbf;
          }
          toObject(M = !1) {
            return U.toObject(M, this);
          }
          static toObject(M, z) {
            return n.BT(U.M(), M, z);
          }
          static fromObject(M) {
            return n.Uq(U.M(), M);
          }
          static deserializeBinary(M) {
            let z = new (u().BinaryReader)(M),
              f = new U();
            return U.deserializeBinaryFromReader(f, z);
          }
          static deserializeBinaryFromReader(M, z) {
            return n.zj(U.MBF(), M, z);
          }
          serializeBinary() {
            var M = new (u().BinaryWriter)();
            return U.serializeBinaryToWriter(this, M), M.getResultBuffer();
          }
          static serializeBinaryToWriter(M, z) {
            n.i0(U.M(), M, z);
          }
          serializeBase64String() {
            var M = new (u().BinaryWriter)();
            return (
              U.serializeBinaryToWriter(this, M), M.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        }
        class O extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(M = null) {
            super(),
              O.prototype.amount_in_cents || n.Sg(O.M()),
              a.Message.initialize(this, M, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              O.sm_m ||
                (O.sm_m = {
                  proto: O,
                  fields: {
                    amount_in_cents: {
                      n: 1,
                      br: n.qM.readInt64String,
                      bw: n.gp.writeInt64String,
                    },
                    currency_code: {
                      n: 2,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                    formatted_amount: {
                      n: 3,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                  },
                }),
              O.sm_m
            );
          }
          static MBF() {
            return O.sm_mbf || (O.sm_mbf = n.w0(O.M())), O.sm_mbf;
          }
          toObject(M = !1) {
            return O.toObject(M, this);
          }
          static toObject(M, z) {
            return n.BT(O.M(), M, z);
          }
          static fromObject(M) {
            return n.Uq(O.M(), M);
          }
          static deserializeBinary(M) {
            let z = new (u().BinaryReader)(M),
              f = new O();
            return O.deserializeBinaryFromReader(f, z);
          }
          static deserializeBinaryFromReader(M, z) {
            return n.zj(O.MBF(), M, z);
          }
          serializeBinary() {
            var M = new (u().BinaryWriter)();
            return O.serializeBinaryToWriter(this, M), M.getResultBuffer();
          }
          static serializeBinaryToWriter(M, z) {
            n.i0(O.M(), M, z);
          }
          serializeBase64String() {
            var M = new (u().BinaryWriter)();
            return (
              O.serializeBinaryToWriter(this, M), M.getResultBase64String()
            );
          }
          getClassName() {
            return "CartAmount";
          }
        }
        class v extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(M = null) {
            super(),
              v.prototype.couponid || n.Sg(v.M()),
              a.Message.initialize(this, M, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              v.sm_m ||
                (v.sm_m = {
                  proto: v,
                  fields: {
                    couponid: {
                      n: 1,
                      br: n.qM.readUint32,
                      bw: n.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: n.qM.readUint64String,
                      bw: n.gp.writeUint64String,
                    },
                    title: { n: 5, br: n.qM.readString, bw: n.gp.writeString },
                    coupon_description: {
                      n: 6,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    large_icon_url: {
                      n: 7,
                      br: n.qM.readString,
                      bw: n.gp.writeString,
                    },
                    discount_pct: {
                      n: 8,
                      br: n.qM.readInt32,
                      bw: n.gp.writeInt32,
                    },
                  },
                }),
              v.sm_m
            );
          }
          static MBF() {
            return v.sm_mbf || (v.sm_mbf = n.w0(v.M())), v.sm_mbf;
          }
          toObject(M = !1) {
            return v.toObject(M, this);
          }
          static toObject(M, z) {
            return n.BT(v.M(), M, z);
          }
          static fromObject(M) {
            return n.Uq(v.M(), M);
          }
          static deserializeBinary(M) {
            let z = new (u().BinaryReader)(M),
              f = new v();
            return v.deserializeBinaryFromReader(f, z);
          }
          static deserializeBinaryFromReader(M, z) {
            return n.zj(v.MBF(), M, z);
          }
          serializeBinary() {
            var M = new (u().BinaryWriter)();
            return v.serializeBinaryToWriter(this, M), M.getResultBuffer();
          }
          static serializeBinaryToWriter(M, z) {
            n.i0(v.M(), M, z);
          }
          serializeBase64String() {
            var M = new (u().BinaryWriter)();
            return (
              v.serializeBinaryToWriter(this, M), M.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        }
      },
      43462: (R, $, r) => {
        "use strict";
        r.d($, { RI: () => a });
        var a = {};
        r.r(a), r.d(a, { $m: () => U });
        var u = r(80613),
          n = r.n(u),
          W = r(75245),
          b = r(35038);
        const U = 0,
          O = 1,
          v = 2,
          F = 3,
          M = 4;
        function z(x) {
          return "unknown ERecommendationIgnoreReason ( " + x + " )";
        }
        class f extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(B = null) {
            super(), u.Message.initialize(this, B, 0, -1, void 0, null);
          }
          toObject(B = !1) {
            return f.toObject(B, this);
          }
          static toObject(B, c) {
            return B ? { $jspbMessageInstance: c } : {};
          }
          static fromObject(B) {
            return new f();
          }
          static deserializeBinary(B) {
            let c = new (n().BinaryReader)(B),
              l = new f();
            return f.deserializeBinaryFromReader(l, c);
          }
          static deserializeBinaryFromReader(B, c) {
            return B;
          }
          serializeBinary() {
            var B = new (n().BinaryWriter)();
            return f.serializeBinaryToWriter(this, B), B.getResultBuffer();
          }
          static serializeBinaryToWriter(B, c) {}
          serializeBase64String() {
            var B = new (n().BinaryWriter)();
            return (
              f.serializeBinaryToWriter(this, B), B.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Request";
          }
        }
        class d extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(B = null) {
            super(),
              d.prototype.ignore_list || W.Sg(d.M()),
              u.Message.initialize(this, B, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              d.sm_m ||
                (d.sm_m = {
                  proto: d,
                  fields: { ignore_list: { n: 1, c: y, r: !0, q: !0 } },
                }),
              d.sm_m
            );
          }
          static MBF() {
            return d.sm_mbf || (d.sm_mbf = W.w0(d.M())), d.sm_mbf;
          }
          toObject(B = !1) {
            return d.toObject(B, this);
          }
          static toObject(B, c) {
            return W.BT(d.M(), B, c);
          }
          static fromObject(B) {
            return W.Uq(d.M(), B);
          }
          static deserializeBinary(B) {
            let c = new (n().BinaryReader)(B),
              l = new d();
            return d.deserializeBinaryFromReader(l, c);
          }
          static deserializeBinaryFromReader(B, c) {
            return W.zj(d.MBF(), B, c);
          }
          serializeBinary() {
            var B = new (n().BinaryWriter)();
            return d.serializeBinaryToWriter(this, B), B.getResultBuffer();
          }
          static serializeBinaryToWriter(B, c) {
            W.i0(d.M(), B, c);
          }
          serializeBase64String() {
            var B = new (n().BinaryWriter)();
            return (
              d.serializeBinaryToWriter(this, B), B.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response";
          }
        }
        class y extends u.Message {
          static ImplementsStaticInterface() {}
          constructor(B = null) {
            super(),
              y.prototype.appid || W.Sg(y.M()),
              u.Message.initialize(this, B, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              y.sm_m ||
                (y.sm_m = {
                  proto: y,
                  fields: {
                    appid: { n: 1, br: W.qM.readUint32, bw: W.gp.writeUint32 },
                    packageid: {
                      n: 2,
                      br: W.qM.readUint32,
                      bw: W.gp.writeUint32,
                    },
                    reason: { n: 3, br: W.qM.readEnum, bw: W.gp.writeEnum },
                  },
                }),
              y.sm_m
            );
          }
          static MBF() {
            return y.sm_mbf || (y.sm_mbf = W.w0(y.M())), y.sm_mbf;
          }
          toObject(B = !1) {
            return y.toObject(B, this);
          }
          static toObject(B, c) {
            return W.BT(y.M(), B, c);
          }
          static fromObject(B) {
            return W.Uq(y.M(), B);
          }
          static deserializeBinary(B) {
            let c = new (n().BinaryReader)(B),
              l = new y();
            return y.deserializeBinaryFromReader(l, c);
          }
          static deserializeBinaryFromReader(B, c) {
            return W.zj(y.MBF(), B, c);
          }
          serializeBinary() {
            var B = new (n().BinaryWriter)();
            return y.serializeBinaryToWriter(this, B), B.getResultBuffer();
          }
          static serializeBinaryToWriter(B, c) {
            W.i0(y.M(), B, c);
          }
          serializeBase64String() {
            var B = new (n().BinaryWriter)();
            return (
              y.serializeBinaryToWriter(this, B), B.getResultBase64String()
            );
          }
          getClassName() {
            return "CStorePreferences_GetIgnoreList_Response_IgnoreListEntry";
          }
        }
        var I;
        ((x) => {
          function B(c, l, e) {
            return c.SendMsg(
              "StorePreferences.GetIgnoreList#1",
              (0, b.I8)(f, l, e),
              d,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          x.GetIgnoreList = B;
        })(I || (I = {}));
      },
      98735: (R, $, r) => {
        "use strict";
        r.d($, { oj: () => I, zG: () => y, nz: () => d });
        var a = r(7850),
          u = r(3367),
          n = r(72865),
          W = r(90626);
        const b = W.createContext({
          AddImpression: () => {
            console.log("Impression Tracking not enabled");
          },
          BIsValid: () => !1,
        });
        function U() {
          return W.useContext(b);
        }
        function O(x) {
          return jsx(b.Provider, {
            value: x.ImpressionTracker,
            children: x.children,
          });
        }
        var v = r(40365),
          F = r(18938);
        function M(x) {
          const { appID: B, feature: c, depth: l, children: e } = x,
            k = (0, n.ru)(c, l),
            o = U(),
            [w, V] = W.useState(void 0),
            q = W.useCallback(
              (xt) => {
                xt.isIntersecting &&
                  V((Ft) =>
                    Ft?.appID == B && Ft?.snr == k ? Ft : { appID: B, snr: k },
                  );
              },
              [B, k],
            );
          (0, W.useEffect)(() => {
            w && w.appID != null && o.AddImpression(w.appID, w.snr);
          }, [o, w]);
          const E = (0, v.BL)(q),
            K = B && (!w || (w.appID != B && w.snr != k)),
            ct = (0, F.Ue)(e.props.ref, K ? E : void 0);
          return W.cloneElement(e, { ref: ct });
        }
        var z = r(26356);
        function f(x) {
          return x == "bundle"
            ? "bundle"
            : x == "sub"
              ? "sub"
              : (BIsSaleItemType(x), "app");
        }
        function d(x) {
          return x == u.c6.xO
            ? "bundle"
            : x == u.c6.RD
              ? "sub"
              : (x == u.c6.qI, "app");
        }
        function y(x, B) {
          const c = B || (x ? z.ZJ : z.iA);
          return [!!c, c];
        }
        const I = (x) => {
          const { appid: B } = x,
            c = (0, a.jsx)("div", {
              className: "ImpressionTrackedElement",
              children: x.children,
            });
          return B ? (0, a.jsx)(M, { appID: B, children: c }) : c;
        };
      },
      89926: (R, $, r) => {
        "use strict";
        r.d($, { l: () => F });
        var a = r(7850),
          u = r(64868),
          n = r(39905),
          W = r(1880),
          b = r(69168),
          U = r(74107),
          O = r(47875);
        function v(z) {
          const { closeModal: f, strDescOverride: d } = z;
          return (0, a.jsx)(W.o0, {
            strTitle: U.F5.Localize("#LoginRedirect_Dialog_Title"),
            strDescription:
              d || U.F5.Localize("#LoginRedirect_Dialog_Description"),
            onCancel: f,
            strOKButtonText: n.Z.Localize("#Button_OK"),
            onOK: () => {
              (0, O.l)(), f();
            },
          });
        }
        function F(z) {
          const [f, d, y] = (0, u.uD)();
          return {
            elDialogElement: (0, a.jsx)(b.E, {
              active: f,
              children: (0, a.jsx)(v, { closeModal: y, strDescOverride: z }),
            }),
            fnShowLogonDialog: d,
          };
        }
        function M(z) {
          const { label: f, strDialogDesc: d } = z,
            { elDialogElement: y, fnShowLogonDialog: I } = F(d);
          return jsxs(Fragment, {
            children: [
              jsx(Button, {
                onClick: I,
                children: f || SharedLocalization.Localize("#Login_SignIn"),
              }),
              y,
            ],
          });
        }
      },
      24237: (R, $, r) => {
        "use strict";
        r.d($, { Q: () => sr });
        var a = r(7850),
          u = r(64868),
          n = r(3367),
          W = r(62178),
          b = r(48357),
          U = r(80104),
          O = r(68260),
          v = r(77459),
          F = r(55483),
          M = r(10985),
          z = r(35413),
          f = r(1e3),
          d = r(64769),
          y = r.n(d),
          I = r(36707);
        function x(X) {
          const {
              nCreatorAccountID: Q,
              classOverride: _,
              styleOverride: ot,
              followType: bt,
            } = X,
            { data: Tt } = (0, F.TB)(Q),
            { data: vt } = (0, M.A5)(Q);
          if (!Tt || !vt) return null;
          const Nt =
            Tt.avatar_medium_url ||
            Tt.avatar_full_url ||
            (0, z.t)(void 0, "medium");
          return (0, a.jsxs)("div", {
            className: (0, I.A)(y().GameHoverCreatorFollowButtonCtn, _),
            style: ot,
            children: [
              (0, a.jsx)("a", {
                href: (0, M.LO)(vt, "developer"),
                children: (0, a.jsx)("img", { src: Nt, alt: Tt.group_name }),
              }),
              (0, a.jsx)(f.of, { clanAccountID: Q, followType: bt }),
            ],
          });
        }
        var B = r(44267),
          c = r(90626),
          l = r(19619),
          e = r(36118),
          k = r(47689),
          o = r(18210),
          w = r(3166),
          V = r(39722),
          q = r.n(V),
          E = r(89926),
          K = r(19298),
          ct = r(10134),
          xt = r(20125),
          Ft = r(51614),
          kt = r(98609),
          nr = r(67705),
          Mt = r(43462);
        function j(X, Q, _, ot = Mt.RI.$m) {
          const bt = (0, ct.h3)(),
            Tt = kt.iA.accountid;
          return (0, Ft.n)({
            mutationKey: ["useUpdateAppIgnore", X, Tt, Q],
            mutationFn: async () => {
              if (X == null) return;
              const vt =
                  kt.TS.STORE_BASE_URL + "recommended/ignorerecommendation",
                Nt = new FormData();
              Nt.append("appid", "" + X),
                Nt.append("sessionid", (0, nr.KC)()),
                Nt.append("remove", Q ? "0" : "1"),
                _ && Nt.append("snr", _),
                Nt.append("ignore_reason", "" + ot);
              const Wr = await fetch(vt, {
                method: "POST",
                body: Nt,
                credentials: "include",
              });
              if (!Wr.ok)
                throw new Error(
                  `Ignore App ${Q ? "add" : "remove"} of appid ${X} failed (${Wr.status})`,
                );
            },
            onMutate: () => {
              X != null && bt(Q ? [X] : void 0, Q ? void 0 : [X]);
            },
            onError: () => {
              X != null && bt(Q ? void 0 : [X], Q ? [X] : void 0);
            },
            onSuccess: () => {
              (0, xt.WZ)();
            },
          });
        }
        function J(X) {
          const { id: Q, snr: _, classOverride: ot } = X,
            [bt, Tt] = (0, c.useState)(!1),
            vt = (0, k.m)("GameHoverIgnoreButton"),
            { elDialogElement: Nt, fnShowLogonDialog: Wr } = (0, E.l)(),
            Nr = Q && "appid" in Q ? Q.appid : void 0,
            Fr = (0, ct.BD)(Nr),
            { mutateAsync: Zr } = j(Nr, !Fr, _),
            Ur = Q && "appid" in Q && l.Fm.Get().BIsGameIgnored(Q.appid),
            $r = async (Pr) => {
              Pr.preventDefault(),
                Pr.stopPropagation(),
                w.iA.logged_in
                  ? Q &&
                    "appid" in Q &&
                    (Tt(!0), await Zr(), vt.token.reason || Tt(!1))
                  : Wr();
            };
          return (0, a.jsxs)(K.Z, {
            className: (0, I.A)(q().IgnoreButton, ot),
            onClick: $r,
            children: [
              (0, a.jsx)(e.NtH, {}),
              (0, a.jsx)("div", {
                className: (0, I.A)(
                  q().IgnoreButtonText,
                  bt && q().IgnoreLoadingText,
                ),
                children: (0, o.we)(
                  Ur ? "#Sale_RemoveFromIgnored" : "#Sale_Ignore",
                ),
              }),
              Nt,
            ],
          });
        }
        var H = r(72609),
          T = r(21721),
          D = r(25046),
          S = r(87249),
          h = r(68094),
          N = r(40358),
          A = r(29522),
          tt = r(14616),
          st = r(54806);
        const ut =
          r.p +
          "images/applications/appmgmt/defaultappheader.png?v=valveisgoodatcaching";
        var wt = r(14874),
          zt = r(8323),
          Kt = r(54963);
        const yr = 5500,
          $t = 2e3,
          Ht = 10;
        function Xt(X, Q) {
          return X && Q && Q.main_capsule
            ? {
                stringifyID: `maincap_${X.id}_${X.item_type}`,
                rctImage: (0, a.jsx)(
                  "img",
                  {
                    className: y().FullDivImage,
                    loading: "lazy",
                    src: (0, T.b0)(Q, "main_capsule"),
                    alt: X.name,
                  },
                  "fallback",
                ),
                nDurationMs: $t,
              }
            : null;
        }
        function p(X, Q) {
          return {
            stringifyID: `vid_${(0, h.ER)(X)}`,
            rctImage: (0, a.jsx)(S.mj, { id: X, active: !0 }),
            nDurationMs: yr,
          };
        }
        function G(X, Q, _, ot) {
          return _.slice(0, ot).map((bt, Tt) => {
            const vt = (0, T.bu)(bt, "1920x1080");
            return {
              stringifyID: `screen${Tt}_${(0, h.ER)(X)}`,
              rctImage: (0, a.jsx)(
                "img",
                {
                  className: y().FullDivImage,
                  loading: "lazy",
                  src: vt,
                  alt: `${Q}'s screenshot ${Tt + 1}`,
                },
                vt,
              ),
              nDurationMs: $t,
            };
          });
        }
        function et(X, Q, _, ot, bt) {
          const Tt = [];
          if (
            (bt && Tt.push(p(X, bt)),
            ot && ot.length > 0 && Tt.push(...G(X, Q.name, ot, Ht)),
            Tt.length == 0 && _ && _.main_capsule)
          ) {
            const vt = Xt(Q, _);
            vt && Tt.push(vt);
          }
          return X && Tt.length == 0, Tt;
        }
        function gt(X, Q, _, ot, bt, Tt) {
          const vt = [];
          Tt && vt.push(p(Q, Tt)),
            ot && ot.length > 0 && vt.push(...G(X, _.name, ot, Ht));
          const Nt = Ht - (ot?.length || 0);
          return (
            Nt > 0 && bt && bt.length > 0 && vt.push(...G(X, _.name, bt, Nt)),
            X && vt.length == 0,
            vt
          );
        }
        function rt(X) {
          return (0, a.jsx)("img", {
            className: y().FullDivImage,
            loading: "lazy",
            src: (0, H.YJ)(ut),
            alt: "default",
          });
        }
        function Bt(X) {
          const { id: Q } = X,
            { data: _ } = (0, N.U2)(Q);
          if (!_ || _.unvailable_for_country_restriction || !_.visible)
            return (0, a.jsx)("div", {
              className: y().TrailerCtn,
              children: (0, a.jsx)(rt, {}, "default"),
            });
          const ot = _.item_type,
            bt = _.type;
          return ot == n.c6.xO || ot == n.c6.RD
            ? (0, a.jsx)(at, { includeAppIDs: _.included_appids })
            : (bt == n.uE.ue || bt == n.uE.Vi) &&
                _.related_items &&
                _.related_items.parent_appid
              ? (0, a.jsx)(yt, {
                  demoItemDefaultInfo: _,
                  parentAppID: _.related_items.parent_appid,
                })
              : (0, a.jsx)(mt, { storeItemDefaultData: _ });
        }
        function mt(X) {
          const { storeItemDefaultData: Q } = X,
            _ = (0, wt.QO)(Q),
            ot = (0, D.TH)(_),
            { data: bt } = (0, N.lv)(_),
            Tt = (0, T.DT)(_),
            vt = (0, c.useMemo)(() => et(_, Q, bt, Tt, ot), [_, Tt, ot, bt, Q]);
          return (0, a.jsx)(Ut, { rgTrailerAndImages: vt });
        }
        function yt(X) {
          const { demoItemDefaultInfo: Q, parentAppID: _ } = X,
            ot = (0, wt.QO)(Q);
          return (0, D.TH)(ot)
            ? (0, a.jsx)(mt, { storeItemDefaultData: Q })
            : (0, a.jsx)(nt, {
                demoID: ot,
                demoItemDefaultInfo: Q,
                parentAppID: _,
              });
        }
        function nt(X) {
          const { parentAppID: Q, demoID: _, demoItemDefaultInfo: ot } = X,
            bt = (0, A.$5)(Q),
            Tt = (0, T.DT)(_),
            vt = (0, T.DT)(bt),
            Nt = (0, D.TH)(bt),
            Wr = (0, c.useMemo)(
              () => gt(_, bt, ot, Tt, vt, Nt),
              [_, bt, ot, Nt, Tt, vt],
            );
          return (0, a.jsx)(Ut, { rgTrailerAndImages: Wr });
        }
        function at(X) {
          const { includeAppIDs: Q } = X,
            _ = (0, tt.eG)(),
            ot = (0, st.E)({
              queries: Q.map((vt) => (0, N.AQ)(_, { appid: vt })),
            }),
            bt = (0, st.E)({
              queries: Q.map((vt) => (0, N.us)(_, { appid: vt })),
            }),
            Tt = (0, c.useMemo)(
              () =>
                ot
                  .map((vt, Nt) => {
                    const Wr = bt[Nt].data,
                      Nr = vt.data;
                    return Xt(Wr, Nr);
                  })
                  .filter((vt) => !!vt),
              [ot, bt],
            );
          return (0, a.jsx)(Ut, { rgTrailerAndImages: Tt });
        }
        function Ut(X) {
          const { rgTrailerAndImages: Q } = X,
            _ = (0, c.useRef)(0),
            ot = (0, Kt.CH)(),
            [bt] = c.useState(new zt.LU()),
            Tt = (0, c.useCallback)(
              (vt = !1) => {
                if ((vt && (_.current = 0), Q?.length > 0)) {
                  const Nt = Q[_.current].nDurationMs;
                  bt.Schedule(Nt, () => {
                    const Wr = _.current;
                    (_.current = (_.current + 1) % Q.length),
                      Wr != _.current && (Tt(), ot());
                  });
                }
              },
              [Q, bt, ot],
            );
          return (
            (0, c.useEffect)(
              () => (Q.length > 0 && Tt(), () => bt.Cancel()),
              [Q, Tt, bt],
            ),
            (0, a.jsx)("div", {
              className: y().TrailerCtn,
              children: Q?.map((vt, Nt) =>
                (0, a.jsx)(
                  "div",
                  {
                    className: (0, I.A)({
                      [y().FullDivImage]: !0,
                      [y().Transparent]: Nt != _.current,
                    }),
                    children: vt.rctImage,
                  },
                  "e-" + Nt + "-" + vt.stringifyID,
                ),
              ),
            })
          );
        }
        var Jt = r(16179),
          Vt = r(3348),
          pt = r(19563),
          Gt = r(76532),
          _t = r.n(Gt),
          Qt = r(29245),
          Ct = r(41188),
          tr = r(26356),
          At = r(98735);
        function rr(X) {
          const { id: Q } = X,
            { data: _ } = (0, N.xz)(Q);
          return _
            ? (0, a.jsx)("div", {
                className: y().TagRow,
                children: (0, a.jsx)("div", {
                  className: y().Tags,
                  children: _.slice(0, 10)
                    .filter((ot) => ot.tagid)
                    .map((ot) =>
                      (0, a.jsx)(
                        Ct.p,
                        { tagid: ot.tagid, className: y().Tag },
                        "tag_" + ot.tagid,
                      ),
                    ),
                }),
              })
            : null;
        }
        function ar(X) {
          const {
              id: Q,
              displayID: _,
              name: ot,
              strStoreUrl: bt,
              elElementToAppend: Tt,
              bShowDemoButton: vt,
              bHideBottomHalf: Nt,
              bHidePrice: Wr,
              bShowDeckCompatibilityDialog: Nr,
              eHardwareCompatibilityDisplay: Fr,
              onShowDeckCompatibilityDialog: Zr,
              bUseSubscriptionLayout: Ur,
              nCreatorAccountID: $r,
              bPreventNavigation: Pr,
              bShowDescription: ie,
            } = X,
            ue = (0, W.RJ)(),
            de =
              Zr &&
              (() => {
                ue?.(), Zr();
              }),
            [se, Mr] = (0, c.useState)(!1),
            Gr = "",
            [ne, ae] = (0, c.useState)(Gr),
            me = (Lr) => ae(`translateY( -${Lr?.clientHeight || 0}px )`),
            { data: Jr } = (0, N.J$)(Q),
            { data: oe } = (0, N.lv)(_),
            fe = !Ur && !vt && !Tt,
            Yr = Jr && Jr.item_type == n.c6.qI,
            [Xr, pr] = (0, At.zG)(Nr, Fr);
          return (0, a.jsxs)("div", {
            className: y().BottomShelf,
            style: { transform: Nt && se ? ne : Gr },
            onMouseEnter: () => Mr(!0),
            onFocus: () => Mr(!0),
            onMouseLeave: () => Mr(!1),
            onBlur: () => Mr(!1),
            children: [
              (0, a.jsxs)("a", {
                href: bt,
                className: y().Midline,
                onClick: (Lr) => {
                  Pr && Lr.preventDefault();
                },
                "aria-disabled": Pr,
                children: [
                  oe &&
                    (0, a.jsx)("div", {
                      className: y().CapsuleImageAnchorPoint,
                      children: (0, a.jsx)("div", {
                        className: (0, I.A)(
                          y().CapsuleImageCtn,
                          y().WithCornerShine,
                        ),
                        children: (0, a.jsx)("img", {
                          loading: "lazy",
                          src: (0, T.b0)(oe, "header"),
                          alt: Jr?.name,
                        }),
                      }),
                    }),
                  !Wr &&
                    !Ur &&
                    (0, a.jsx)("div", {
                      className: y().Price,
                      children: (0, a.jsx)(b.NF, {
                        id: Q,
                        onlyOneDiscountPct: !0,
                      }),
                    }),
                ],
              }),
              (0, a.jsx)("div", {
                className: y().BottomShelfOffScreen,
                ref: me,
                children: (0, a.jsxs)("div", {
                  className: y().TextContent,
                  children: [
                    (0, a.jsx)("a", {
                      href: bt,
                      onClick: (Lr) => {
                        Pr && Lr.preventDefault();
                      },
                      "aria-disabled": Pr,
                      children: (0, a.jsx)("div", {
                        className: y().GameTitle,
                        children: Jr?.name || ot,
                      }),
                    }),
                    ie && (0, a.jsx)(ir, { id: Q }),
                    (0, a.jsx)(rr, { id: Q }),
                    !Xr && (0, a.jsx)(U.J, { id: Q }),
                    !!(!Xr && fe) &&
                      (0, a.jsxs)("div", {
                        className: y().ReviewsAndRelease,
                        children: [
                          (0, a.jsx)(Qt.Q, {
                            id: Q,
                            strClassName: y().PlatformDisplay,
                          }),
                          (0, a.jsx)(er, { id: Q }),
                        ],
                      }),
                    vt && (0, a.jsx)(O.j, { id: Q, className: y().DemoButton }),
                    !!(Xr && Yr) &&
                      (0, a.jsx)(pt.Pj, {
                        id: Q,
                        compatibility: pr,
                        onShowDialog: de,
                      }),
                    !!Tt && Tt,
                    Ur &&
                      Yr &&
                      Q &&
                      "appid" in Q &&
                      Q.appid &&
                      (0, a.jsx)(v.E, { appid: Q.appid, bIsMuted: !1 }),
                    $r && (0, a.jsx)(x, { nCreatorAccountID: $r }),
                  ],
                }),
              }),
            ],
          });
        }
        function er(X) {
          const { id: Q } = X,
            { data: _ } = (0, N.by)(Q);
          if (!_) return null;
          const ot = (0, Vt.CC)(_);
          return (0, a.jsx)("div", {
            className: y().ReleaseDate,
            children: ot,
          });
        }
        function ir(X) {
          const { id: Q } = X,
            { data: _ } = (0, N.wl)(Q);
          return _
            ? (0, a.jsx)("div", {
                className: y().ShortDescription,
                children: _?.short_description,
              })
            : null;
        }
        function qt(X) {
          const {
              id: Q,
              displayID: _,
              strStoreUrl: ot,
              bHideBottomHalf: bt,
              bShowDeckCompatibilityDialog: Tt,
              eHardwareCompatibilityDisplay: vt,
              bShowWishlistButton: Nt = !0,
              bShowIgnoreButton: Wr = !1,
            } = X,
            { data: Nr } = (0, N.Yo)(Q),
            { data: Fr } = (0, N.j4)(Q),
            Zr = Nr === void 0 && Fr === void 0,
            [Ur] = (0, At.zG)(!!Tt, vt);
          return (0, a.jsxs)("div", {
            className: (0, I.A)(
              y().GameHoverCapsuleCtn,
              Zr && y().Loading,
              _t().InGameHover,
              bt && y().UseHidingBottomHalf,
            ),
            children: [
              (0, a.jsxs)("a", {
                href: ot,
                className: y().TrailerAnchorStoreLink,
                children: [
                  !!(Nt && !Ur) && (0, a.jsx)(B.E, { id: _, snr: X.strSNR }),
                  !!(Wr && !Ur) && (0, a.jsx)(J, { id: _, snr: X.strSNR }),
                  Q && (0, a.jsx)(Bt, { id: Q }),
                ],
              }),
              (0, a.jsx)(ar, { ...X }),
            ],
          });
        }
        function sr(X) {
          const {
              id: Q,
              name: _,
              bPreventNavigation: ot,
              elElementToAppend: bt,
              bShowDemoButton: Tt,
              bPreferDemoStorePage: vt,
              bHidePrice: Nt,
              bUseSubscriptionLayout: Wr,
              strExtraParams: Nr,
              children: Fr,
              nCreatorAccountID: Zr,
              nWidthMultiplier: Ur,
              bShowDeckCompatibilityDialog: $r,
              eHardwareCompatibilityDisplay: Pr,
              bShowWishlistButton: ie = !0,
              bShowIgnoreButton: ue = !1,
              bShowDescription: de = !1,
              ...se
            } = X,
            { data: Mr } = (0, N.J$)(Q),
            Gr = (0, w.Qn)(),
            [ne, ae, me] = (0, u.uD)(),
            { strStoreURL: Jr, snr: oe } = (0, Jt.x)(Mr, vt);
          if ((!Mr && !_) || Gr)
            return (0, a.jsx)(a.Fragment, { children: Fr });
          let fe = Q;
          Mr &&
            Mr.item_type == n.c6.RD &&
            Mr.included_appids?.length == 1 &&
            (fe = { appid: Mr.included_appids[0] });
          const Yr = (0, W.nq)() == "hiding",
            Xr = ot || !Mr ? void 0 : Jr,
            [, pr] = (0, At.zG)($r, Pr);
          let Lr;
          pr != tr.iA &&
            Mr?.appid &&
            Mr?.item_type == n.c6.qI &&
            (Lr = Mr.appid);
          const Oe = {
              id: Q,
              displayID: fe,
              name: _,
              bPreventNavigation: ot,
              strStoreUrl: Xr,
              elElementToAppend: bt,
              bShowDemoButton: Tt,
              bShowDeckCompatibilityDialog: $r,
              eHardwareCompatibilityDisplay: Pr,
              bHideBottomHalf: Yr,
              bHidePrice: Nt,
              bUseSubscriptionLayout: Wr,
              strSNR: oe,
              nCreatorAccountID: Zr,
              bShowWishlistButton: ie,
              bShowIgnoreButton: ue,
              bShowDescription: de,
              onShowDeckCompatibilityDialog: Lr ? ae : void 0,
            },
            kr = (0, a.jsx)(qt, { ...Oe }),
            ze = Xr ? (0, a.jsx)("a", { href: Xr, children: Fr }) : Fr;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(W.JU, {
                hoverContent: kr,
                nWidthMultiplier: Ur,
                ...se,
                children: ze,
              }),
              Lr &&
                (0, a.jsx)(pt.cO, {
                  nAppID: Lr,
                  appName: Mr?.name || _,
                  startingTab: pr,
                  active: ne,
                  closeModal: me,
                }),
            ],
          });
        }
      },
      80104: (R, $, r) => {
        "use strict";
        r.d($, { J: () => x });
        var a = r(7850),
          u = r(84346),
          n = r(32288),
          W = r(3367),
          b = r(83784),
          U = r(40358),
          O = r(29522),
          v = r(12818),
          F = r(71421),
          M = r(36707),
          z = r(64769),
          f = r.n(z),
          d = r(39905),
          y = r(72609),
          I = r(32994);
        function x(c) {
          const { id: l, bTruncateTotalReviews: e, bShowTooltip: k } = c,
            { data: o } = (0, U.ik)(l),
            { data: w } = (0, U.J$)(l),
            V = (0, O.h0)(l),
            { data: q } = (0, U.J$)(V),
            { data: E } = (0, I.lI)();
          if (!o || !w || (w.type == W.uE.ue && !(0, b.J)(q))) return null;
          let K = o.summary_unfiltered || o.summary_filtered,
            ct = "#ReviewScore_UserReviewScoreAria",
            xt = !1;
          const Ft = d.Z.Localize("#Language_" + y.TS.LANGUAGE);
          if (
            (B(E?.preferences?.review_score_preference) &&
              (o.summary_language_specific
                ? ((xt = !0),
                  (ct = "#ReviewScore_UserReviewScoreAria_LanguageSpecific"),
                  (K = o.summary_language_specific))
                : (K = o.summary_filtered)),
            !K || !K.review_score)
          )
            return null;
          let kt = f().ReviewScoreNone;
          K.review_score > 0 && K.review_score < W.j6.hc
            ? (kt = f().ReviewScoreLow)
            : K.review_score == W.j6.hc
              ? (kt = f().ReviewScoreMixed)
              : (kt = f().ReviewScoreHigh);
          const nr = `${y.TS.STORE_BASE_URL}app/${w.appid}/#app_reviews_hash`,
            Mt = (0, a.jsxs)("div", {
              className: (0, M.A)(f().ReviewScoreValue, kt),
              children: [
                (0, a.jsx)("div", {
                  className: f().ReviewScoreLabel,
                  "aria-label": d.Z.Localize(ct, K.review_score_label, Ft),
                  children: K.review_score_label,
                }),
                (0, a.jsxs)("div", {
                  className: f().ReviewScoreCount,
                  "aria-label": d.Z.Localize(
                    "#GameHover_UserReviewCount",
                    K.review_count.toLocaleString((0, u.J)()),
                  ),
                  children: [
                    "(",
                    e
                      ? "(" + K.review_count.toLocaleString((0, u.J)()) + ")"
                      : xt
                        ? d.Z.Localize(
                            "#GameHover_UserReviewCount_Lang",
                            K.review_count.toLocaleString((0, u.J)()),
                            Ft,
                          )
                        : d.Z.Localize(
                            "#GameHover_UserReviewCount",
                            K.review_count.toLocaleString((0, u.J)()),
                          ),
                    ")",
                  ],
                }),
                !e &&
                  (0, a.jsxs)("div", {
                    className: f().ReviewScoreHeader,
                    children: [
                      " ",
                      d.Z.Localize("#GameHover_UserReviewsHeader"),
                    ],
                  }),
              ],
            });
          let j = "#ReviewScore_PercentPositive";
          if (w.item_type === W.c6.xO)
            j = "#ReviewScore_PercentPositive_bundle";
          else if (w.item_type === W.c6.qI)
            switch (w.type) {
              case W.uE.Sv:
                j = "#ReviewScore_PercentPositive_software";
                break;
              case W.uE.Wz:
                j = "#ReviewScore_PercentPositive_video";
                break;
              case W.uE.Hk:
                j = "#ReviewScore_PercentPositive_hardware";
                break;
              case W.uE.gQ:
                j = "#ReviewScore_PercentPositive_series";
                break;
            }
          return (0, a.jsx)(v.q, {
            url: nr,
            className: (0, M.A)(f().ReviewScore, "ReviewScore"),
            children:
              k && K.percent_positive != null && K.review_count != null && j
                ? (0, a.jsx)(F.he, {
                    bTopmost: !0,
                    toolTipContent: d.Z.Localize(
                      j,
                      K.percent_positive,
                      K.review_count,
                    ),
                    children: Mt,
                  })
                : Mt,
          });
        }
        function B(c) {
          return c === void 0 || c === n.Wf.SL || c === n.Wf.cG;
        }
      },
      44267: (R, $, r) => {
        "use strict";
        r.d($, { E: () => c });
        var a = r(7850),
          u = r(19298),
          n = r(3367),
          W = r(89926),
          b = r(40358),
          U = r(29522),
          O = r(24179),
          v = r(54528),
          F = r(96362),
          M = r(90626),
          z = r(36118),
          f = r(47689),
          d = r(36707),
          y = r(3166),
          I = r(64769),
          x = r.n(I),
          B = r(39905);
        function c(l) {
          const {
              id: e,
              snr: k,
              classOverride: o,
              styleOverride: w,
              bShowInGamepadUI: V,
            } = l,
            { data: q } = (0, b.J$)(e),
            { elDialogElement: E, fnShowLogonDialog: K } = (0, W.l)(),
            [ct, xt] = (0, M.useState)(() => {
              if (
                q &&
                (q.type == n.uE.ue || q.type == n.uE.Vi) &&
                q.related_items?.parent_appid
              )
                return q.related_items?.parent_appid;
              if (e && "appid" in e) return e.appid;
            }),
            Ft = (0, U.$5)(ct),
            kt = (0, v.bB)(ct),
            { bIsOwned: nr } = (0, O.ZJ)(Ft),
            [Mt, j] = (0, M.useState)(!1),
            J = (0, f.m)("GameHoverWishlistButton"),
            { mutateAsync: H } = (0, F.s)(ct, !kt, k);
          (0, M.useEffect)(() => {
            e &&
              "appid" in e &&
              (q?.type == n.uE.ue || q?.type == n.uE.Vi) &&
              xt(q.related_items?.parent_appid || e.appid);
          }, [q, e]);
          const T = (0, M.useCallback)(
            async (D) => {
              y.iA.logged_in
                ? (D.preventDefault(),
                  D.stopPropagation(),
                  j(!0),
                  await H(),
                  J.token.reason || j(!1))
                : K();
            },
            [J.token.reason, K, H],
          );
          return nr && q?.type != n.uE.Hk
            ? null
            : (0, a.jsxs)(u.Z, {
                className: (0, d.A)(
                  x().WishlistButton,
                  V && x().ShowInGamepadUI,
                  o,
                ),
                onActivate: T,
                style: w,
                children: [
                  kt ? (0, a.jsx)(z.qnF, {}) : (0, a.jsx)(z.T4m, {}),
                  (0, a.jsx)("div", {
                    className: (0, d.A)(
                      x().WishlistButtonText,
                      Mt && x().WishlistLoadingText,
                      "WishlistButtonText",
                    ),
                    children: B.Z.Localize(
                      kt ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                    ),
                  }),
                  E,
                ],
              });
        }
      },
      62178: (R, $, r) => {
        "use strict";
        r.d($, { JU: () => l, RJ: () => c, nq: () => o });
        var a = r(7850),
          u = r(67344),
          n = r(90626),
          W = r(41301),
          b = r(561),
          U = r(76867),
          O = r(25792),
          v = r(21659),
          F = r(36707),
          M = r(54963),
          z = r(3166),
          f = r(64769),
          d = r.n(f),
          y = r(10350),
          I = r.n(y);
        const x = 150,
          B = n.createContext(void 0);
        function c() {
          return n.useContext(B);
        }
        function l(q) {
          const {
              hoverContent: E,
              hoverProps: K,
              nDelayShowMs: ct,
              nWidthMultiplier: xt,
              children: Ft,
              className: kt,
            } = q,
            nr = (0, z.Qn)(),
            Mt = (0, v.zI)(),
            j = !nr && !Mt,
            [J, H] = n.useState(!1),
            [T, D] = n.useState(void 0),
            S = (st) => {
              H(!0), D(st.currentTarget);
            },
            h = () => H(!1),
            N = n.useCallback(() => H(!1), []),
            A = (st) => {
              st.keyCode == W.zV &&
                (H(!1), st.preventDefault(), st.stopPropagation());
            },
            tt = () => H(!1);
          return (0, a.jsxs)("div", {
            "data-key": "hover div",
            role: "button",
            tabIndex: 0,
            className: (0, F.A)(I().ItemHoverSource, kt),
            onMouseEnter: S,
            onMouseLeave: h,
            onTouchStart: tt,
            onKeyDown: A,
            children: [
              j &&
                T &&
                (0, a.jsx)(B.Provider, {
                  value: N,
                  children: (0, a.jsx)(e, {
                    visible: J,
                    target: T,
                    nDelayShowMs: ct,
                    nWidthMultiplier: xt,
                    hoverProps: K,
                    children: E,
                  }),
                }),
              (0, a.jsx)(O.tH, { children: Ft }),
            ],
          });
        }
        function e(q) {
          const {
              hoverProps: E,
              nDelayShowMs: K = x,
              nWidthMultiplier: ct = 1.15,
              target: xt,
              visible: Ft,
              children: kt,
            } = q,
            [nr, Mt] = n.useState(Ft);
          if (
            (n.useEffect(() => {
              if (Ft)
                if (K) {
                  const H = window.setTimeout(() => Mt(!0), K);
                  return () => window.clearTimeout(H);
                } else {
                  Mt(!0);
                  return;
                }
              else {
                if ((0, u.p)()) return;
                Mt(!1);
                return;
              }
            }, [Ft]),
            n.useEffect(() => {
              if (!nr) return;
              const H = 50,
                T = xt.ownerDocument.defaultView;
              if (T) {
                const D = T.scrollY,
                  S = () => {
                    Math.abs(T.scrollY - D) > H && Mt(!1);
                  };
                return (
                  window.addEventListener("scroll", S),
                  () => window.removeEventListener("scroll", S)
                );
              }
              return () => {};
            }, [nr, xt?.ownerDocument.defaultView]),
            !xt || !kt || !nr)
          )
            return null;
          const j = xt.clientWidth < 200 ? "8px" : "10px",
            J = {
              direction: "overlay-center",
              bEnablePointerEvents: !0,
              ...(E || {}),
              style: {
                zIndex: 98,
                width: xt.clientWidth * ct,
                fontSize: j,
                minHeight: o() == "hiding" ? void 0 : 300,
                height:
                  o() == "hiding"
                    ? xt.clientWidth * 1.15 * (125 / 184)
                    : void 0,
                ...E?.style,
              },
              target: xt,
            };
          return (0, a.jsx)(k, {
            hoverProps: J,
            children: (0, a.jsx)(O.tH, { children: kt }),
          });
        }
        function k(q) {
          const { hoverProps: E, children: K } = q,
            ct = n.useCallback((Ft) => Ft?.focus(), []);
          return (0, a.jsx)(b.g, {
            ...E,
            children: (0, a.jsx)(U.M, {
              timeout: 500,
              in: !0,
              appear: !0,
              classNames: {
                appearActive: (0, F.A)(I().Opening, d().Opening),
                enterDone: (0, F.A)(I().Open, d().Open),
              },
              children: (Ft) =>
                (0, a.jsx)("div", {
                  ref: (0, M.XB)(Ft, ct),
                  className: I().HoverContentTransition,
                  tabIndex: -1,
                  children: K,
                }),
            }),
          });
        }
        function o() {
          return window.sessionStorage?.getItem(w) || "default";
        }
        const w = "DEBUG_UseNewGameHover";
        function V(q) {
          window.sessionStorage.setItem(w, q);
        }
        window.SetHoverPresentation = V;
      },
      74107: (R, $, r) => {
        "use strict";
        r.d($, { F5: () => W });
        var a = r(37901);
        const u = {};
        (u.arabic = () => r.e(22940).then(r.t.bind(r, 22940, 19))),
          (u.brazilian = () => r.e(59990).then(r.t.bind(r, 59990, 19))),
          (u.bulgarian = () => r.e(38573).then(r.t.bind(r, 38573, 19))),
          (u.czech = () => r.e(40975).then(r.t.bind(r, 40975, 19))),
          (u.danish = () => r.e(38721).then(r.t.bind(r, 38721, 19))),
          (u.dutch = () => r.e(354).then(r.t.bind(r, 354, 19))),
          (u.english = () => r.e(49768).then(r.t.bind(r, 49768, 19))),
          (u.finnish = () => r.e(12931).then(r.t.bind(r, 12931, 19))),
          (u.french = () => r.e(6064).then(r.t.bind(r, 6064, 19))),
          (u.german = () => r.e(62942).then(r.t.bind(r, 62942, 19))),
          (u.greek = () => r.e(13924).then(r.t.bind(r, 13924, 19))),
          (u.hungarian = () => r.e(21822).then(r.t.bind(r, 99441, 19))),
          (u.indonesian = () => r.e(42584).then(r.t.bind(r, 42584, 19))),
          (u.italian = () => r.e(97688).then(r.t.bind(r, 97688, 19))),
          (u.japanese = () => r.e(5407).then(r.t.bind(r, 5407, 19))),
          (u.koreana = () => r.e(65815).then(r.t.bind(r, 65815, 19))),
          (u.latam = () => r.e(44287).then(r.t.bind(r, 44287, 19))),
          (u.malay = () => r.e(58160).then(r.t.bind(r, 58160, 19))),
          (u.norwegian = () => r.e(33648).then(r.t.bind(r, 33648, 19))),
          (u.polish = () => r.e(22649).then(r.t.bind(r, 22649, 19))),
          (u.portuguese = () => r.e(23629).then(r.t.bind(r, 23629, 19))),
          (u.romanian = () => r.e(81555).then(r.t.bind(r, 81555, 19))),
          (u.russian = () => r.e(11809).then(r.t.bind(r, 11809, 19))),
          (u.sc_schinese = () => r.e(98347).then(r.t.bind(r, 98347, 19))),
          (u.schinese = () => r.e(79004).then(r.t.bind(r, 79004, 19))),
          (u.spanish = () => r.e(97760).then(r.t.bind(r, 97760, 19))),
          (u.swedish = () => r.e(86881).then(r.t.bind(r, 86881, 19))),
          (u.tchinese = () => r.e(28183).then(r.t.bind(r, 28183, 19))),
          (u.thai = () => r.e(10950).then(r.t.bind(r, 10950, 19))),
          (u.turkish = () => r.e(22568).then(r.t.bind(r, 22568, 19))),
          (u.ukrainian = () => r.e(17038).then(r.t.bind(r, 17038, 19))),
          (u.vietnamese = () => r.e(62327).then(r.t.bind(r, 62327, 19)));
        async function n(O) {
          if (u[O]) return u[O]();
        }
        const W = (0, a.l)(n);
        async function b() {
          return Promise.all([W.Ready()]);
        }
        function U() {
          return useLocalizationReady(W);
        }
      },
      26591: (R, $, r) => {
        "use strict";
        r.d($, { h: () => he });
        var a = r(7850),
          u = r(72604);
        function n(L) {
          return !!L;
        }
        var W = r(68312),
          b = r(14616),
          U = r(40358),
          O = r(72865),
          v = r(75233),
          F = r(51614);
        function M(L) {
          return L.type === "account";
        }
        function z(L) {
          return L.type === "anonymous";
        }
        function f(L) {
          return L.type === "request";
        }
        function d(L) {
          return L.type === "replay";
        }
        function y() {
          const L = useShoppingCartID();
          return !f(L) && !d(L);
        }
        function I() {
          const L = useShoppingCartID();
          return d(L);
        }
        function x() {
          const L = useShoppingCartID();
          return f(L) ? L.requestID : void 0;
        }
        var B = r(35038),
          c = r(80613),
          l = r.n(c),
          e = r(75245),
          k = r(18025);
        class o extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              o.prototype.clanid || e.Sg(o.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              o.sm_m ||
                (o.sm_m = {
                  proto: o,
                  fields: {
                    clanid: { n: 1, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    listid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              o.sm_m
            );
          }
          static MBF() {
            return o.sm_mbf || (o.sm_mbf = e.w0(o.M())), o.sm_mbf;
          }
          toObject(t = !1) {
            return o.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(o.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(o.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new o();
            return o.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(o.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return o.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(o.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              o.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_CuratorData";
          }
        }
        class w extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              w.prototype.domain || e.Sg(w.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    domain: { n: 1, br: e.qM.readString, bw: e.gp.writeString },
                    controller: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    method: { n: 3, br: e.qM.readString, bw: e.gp.writeString },
                    submethod: {
                      n: 4,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    feature: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    depth: { n: 6, br: e.qM.readUint32, bw: e.gp.writeUint32 },
                    countrycode: {
                      n: 7,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    webkey: {
                      n: 8,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    is_client: { n: 9, br: e.qM.readBool, bw: e.gp.writeBool },
                    curator_data: { n: 10, c: o },
                    is_likely_bot: {
                      n: 11,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    is_utm: { n: 12, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = e.w0(w.M())), w.sm_mbf;
          }
          toObject(t = !1) {
            return w.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(w.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(w.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new w();
            return w.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(w.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return w.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(w.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserInterface_NavData";
          }
        }
        const V = 0,
          q = 1,
          E = 2,
          K = 0,
          ct = 1,
          xt = 2,
          Ft = 3;
        function kt(L) {
          return "unknown EAccountCartLineItemType ( " + L + " )";
        }
        function nr(L) {
          return "unknown EAccountCartValidationFailure ( " + L + " )";
        }
        class Mt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.validation_failure || e.Sg(Mt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    validation_failure: {
                      n: 1,
                      d: K,
                      br: e.qM.readEnum,
                      bw: e.gp.writeEnum,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = e.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(t = !1) {
            return Mt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Mt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Mt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Mt();
            return Mt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Mt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Mt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartValidationDetails";
          }
        }
        class j extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              j.prototype.is_gift || e.Sg(j.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    is_gift: { n: 1, br: e.qM.readBool, bw: e.gp.writeBool },
                    is_private: { n: 2, br: e.qM.readBool, bw: e.gp.writeBool },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = e.w0(j.M())), j.sm_mbf;
          }
          toObject(t = !1) {
            return j.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(j.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(j.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new j();
            return j.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(j.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return j.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(j.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItemFlags";
          }
        }
        class J extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.line_item_id || e.Sg(J.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    type: { n: 2, br: e.qM.readEnum, bw: e.gp.writeEnum },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 4,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_valid: { n: 8, br: e.qM.readBool, bw: e.gp.writeBool },
                    validation_details: { n: 9, c: Mt },
                    time_added: {
                      n: 10,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    price_when_added: { n: 11, c: k.Hi },
                    gift_info: { n: 12, c: k.$z },
                    flags: { n: 13, c: j },
                    gidcoupon_applied: {
                      n: 14,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = e.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(J.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new J();
            return J.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(J.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(J.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartLineItem";
          }
        }
        class H extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.line_items || e.Sg(H.M()),
              c.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    line_items: { n: 1, c: J, r: !0, q: !0 },
                    subtotal: { n: 2, c: k.Hi },
                    is_valid: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    validation_details: { n: 4, c: Mt },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = e.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(H.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new H();
            return H.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(H.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(H.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "AccountCartContents";
          }
        }
        class T extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              T.prototype.user_country || e.Sg(T.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              T.sm_m ||
                (T.sm_m = {
                  proto: T,
                  fields: {
                    user_country: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              T.sm_m
            );
          }
          static MBF() {
            return T.sm_mbf || (T.sm_mbf = e.w0(T.M())), T.sm_mbf;
          }
          toObject(t = !1) {
            return T.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(T.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(T.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new T();
            return T.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(T.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return T.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(T.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              T.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Request";
          }
        }
        class D extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              D.prototype.cart || e.Sg(D.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = { proto: D, fields: { cart: { n: 1, c: H } } }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = e.w0(D.M())), D.sm_mbf;
          }
          toObject(t = !1) {
            return D.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(D.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(D.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new D();
            return D.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(D.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return D.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(D.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetCart_Response";
          }
        }
        class S extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              S.prototype.user_country || e.Sg(S.M()),
              c.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
                  fields: {
                    user_country: {
                      n: 1,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    items: { n: 2, c: h, r: !0, q: !0 },
                    navdata: { n: 3, c: w },
                  },
                }),
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = e.w0(S.M())), S.sm_mbf;
          }
          toObject(t = !1) {
            return S.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(S.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(S.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new S();
            return S.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(S.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return S.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(S.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request";
          }
        }
        class h extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              h.prototype.packageid || e.Sg(h.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              h.sm_m ||
                (h.sm_m = {
                  proto: h,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    bundleid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gift_info: { n: 10, c: k.$z },
                    flags: { n: 11, c: j },
                  },
                }),
              h.sm_m
            );
          }
          static MBF() {
            return h.sm_mbf || (h.sm_mbf = e.w0(h.M())), h.sm_mbf;
          }
          toObject(t = !1) {
            return h.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(h.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(h.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new h();
            return h.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(h.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return h.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(h.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              h.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Request_ItemToAdd";
          }
        }
        class N extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              N.prototype.line_item_ids || e.Sg(N.M()),
              c.Message.initialize(this, t, 0, -1, [1, 3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              N.sm_m ||
                (N.sm_m = {
                  proto: N,
                  fields: {
                    line_item_ids: {
                      n: 1,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    cart: { n: 2, c: H },
                    replaced_packages: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                    existing_billing_agreementid: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    new_billing_agreement_recurring_packageid: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              N.sm_m
            );
          }
          static MBF() {
            return N.sm_mbf || (N.sm_mbf = e.w0(N.M())), N.sm_mbf;
          }
          toObject(t = !1) {
            return N.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(N.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(N.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new N();
            return N.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(N.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return N.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(N.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              N.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_AddItemsToCart_Response";
          }
        }
        class A extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              A.prototype.line_item_id || e.Sg(A.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              A.sm_m ||
                (A.sm_m = {
                  proto: A,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    gift_info: { n: 10, c: k.$z },
                    flags: { n: 11, c: j },
                    apply_gidcoupon: {
                      n: 12,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              A.sm_m
            );
          }
          static MBF() {
            return A.sm_mbf || (A.sm_mbf = e.w0(A.M())), A.sm_mbf;
          }
          toObject(t = !1) {
            return A.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(A.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(A.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new A();
            return A.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(A.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return A.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(A.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              A.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Request";
          }
        }
        class tt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.cart || e.Sg(tt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = { proto: tt, fields: { cart: { n: 1, c: H } } }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = e.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(tt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new tt();
            return tt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(tt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(tt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_ModifyLineItem_Response";
          }
        }
        class st extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.line_item_id || e.Sg(st.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = e.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(st.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new st();
            return st.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(st.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(st.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Request";
          }
        }
        class ut extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ut.prototype.cart || e.Sg(ut.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = { proto: ut, fields: { cart: { n: 1, c: H } } }),
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = e.w0(ut.M())), ut.sm_mbf;
          }
          toObject(t = !1) {
            return ut.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(ut.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(ut.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new ut();
            return ut.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(ut.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(ut.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_RemoveItemFromCart_Response";
          }
        }
        class wt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.gidshoppingcart || e.Sg(wt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    user_country: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = e.w0(wt.M())), wt.sm_mbf;
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(wt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(wt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new wt();
            return wt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(wt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(wt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Request";
          }
        }
        class zt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.cart || e.Sg(zt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = { proto: zt, fields: { cart: { n: 1, c: H } } }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = e.w0(zt.M())), zt.sm_mbf;
          }
          toObject(t = !1) {
            return zt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(zt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(zt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new zt();
            return zt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(zt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(zt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_MergeShoppingCartContents_Response";
          }
        }
        class Kt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return Kt.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new Kt();
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Kt();
            return Kt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Request";
          }
        }
        class yr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(), c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          toObject(t = !1) {
            return yr.toObject(t, this);
          }
          static toObject(t, s) {
            return t ? { $jspbMessageInstance: s } : {};
          }
          static fromObject(t) {
            return new yr();
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new yr();
            return yr.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return t;
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return yr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {}
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              yr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_DeleteCart_Response";
          }
        }
        class $t extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.language || e.Sg($t.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    language: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = e.w0($t.M())), $t.sm_mbf;
          }
          toObject(t = !1) {
            return $t.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT($t.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq($t.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new $t();
            return $t.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj($t.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0($t.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Request";
          }
        }
        class Ht extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ht.prototype.line_items || e.Sg(Ht.M()),
              c.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ht.sm_m ||
                (Ht.sm_m = {
                  proto: Ht,
                  fields: { line_items: { n: 1, c: Xt, r: !0, q: !0 } },
                }),
              Ht.sm_m
            );
          }
          static MBF() {
            return Ht.sm_mbf || (Ht.sm_mbf = e.w0(Ht.M())), Ht.sm_mbf;
          }
          toObject(t = !1) {
            return Ht.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Ht.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Ht.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Ht();
            return Ht.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Ht.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Ht.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response";
          }
        }
        class Xt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.line_item_id || e.Sg(Xt.M()),
              c.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    line_item_id: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    coupons: { n: 2, c: k.HX, r: !0, q: !0 },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = e.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Xt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Xt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Xt();
            return Xt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Xt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Xt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAccountCart_GetRelevantCoupons_Response_LineItemCoupons";
          }
        }
        var p;
        ((L) => {
          function t(jt, St, ft) {
            return jt.SendMsg(
              "AccountCart.GetCart#1",
              (0, B.I8)(T, St, ft),
              D,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          L.GetCart = t;
          function s(jt, St, ft) {
            return jt.SendMsg(
              "AccountCart.AddItemsToCart#1",
              (0, B.I8)(S, St, ft),
              N,
              { ePrivilege: 1 },
            );
          }
          L.AddItemsToCart = s;
          function P(jt, St, ft) {
            return jt.SendMsg(
              "AccountCart.ModifyLineItem#1",
              (0, B.I8)(A, St, ft),
              tt,
              { ePrivilege: 1 },
            );
          }
          L.ModifyLineItem = P;
          function dt(jt, St, ft) {
            return jt.SendMsg(
              "AccountCart.RemoveItemFromCart#1",
              (0, B.I8)(st, St, ft),
              ut,
              { ePrivilege: 1 },
            );
          }
          L.RemoveItemFromCart = dt;
          function Yt(jt, St, ft) {
            return jt.SendMsg(
              "AccountCart.MergeShoppingCartContents#1",
              (0, B.I8)(wt, St, ft),
              zt,
              { ePrivilege: 1 },
            );
          }
          L.MergeShoppingCartContents = Yt;
          function Lt(jt, St, ft) {
            return jt.SendMsg(
              "AccountCart.DeleteCart#1",
              (0, B.I8)(Kt, St, ft),
              yr,
              { ePrivilege: 1 },
            );
          }
          L.DeleteCart = Lt;
          function lr(jt, St, ft) {
            return jt.SendMsg(
              "AccountCart.GetRelevantCoupons#1",
              (0, B.I8)($t, St, ft),
              Ht,
              { ePrivilege: 1 },
            );
          }
          L.GetRelevantCoupons = lr;
        })(p || (p = {}));
        var G = r(41944);
        class et extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              et.prototype.steamid_requester || e.Sg(et.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    steamid_requester: {
                      n: 1,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = e.w0(et.M())), et.sm_mbf;
          }
          toObject(t = !1) {
            return et.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(et.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(et.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new et();
            return et.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(et.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(et.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Request";
          }
        }
        class gt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.gidshoppingcart || e.Sg(gt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = e.w0(gt.M())), gt.sm_mbf;
          }
          toObject(t = !1) {
            return gt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(gt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(gt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new gt();
            return gt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(gt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(gt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CreateNew_Response";
          }
        }
        class rt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rt.prototype.amount || e.Sg(rt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    amount: {
                      n: 1,
                      br: e.qM.readInt64String,
                      bw: e.gp.writeInt64String,
                    },
                    currencycode: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = e.w0(rt.M())), rt.sm_mbf;
          }
          toObject(t = !1) {
            return rt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(rt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(rt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new rt();
            return rt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(rt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(rt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Amount";
          }
        }
        class Bt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Bt.prototype.packageid || e.Sg(Bt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    costwhenadded: { n: 2, c: rt },
                    is_gift: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    gidbundle: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    quantity: {
                      n: 5,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gift_info: { n: 6, c: k.$z },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = e.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(t = !1) {
            return Bt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Bt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Bt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Bt();
            return Bt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Bt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Bt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_PackageItem";
          }
        }
        class mt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              mt.prototype.walletcredit || e.Sg(mt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: { walletcredit: { n: 1, c: rt } },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = e.w0(mt.M())), mt.sm_mbf;
          }
          toObject(t = !1) {
            return mt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(mt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(mt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new mt();
            return mt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(mt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(mt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_WalletCreditItem";
          }
        }
        class yt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              yt.prototype.couponid || e.Sg(yt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    couponid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupontarget: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    packageid: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 4,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = e.w0(yt.M())), yt.sm_mbf;
          }
          toObject(t = !1) {
            return yt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(yt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(yt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new yt();
            return yt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(yt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(yt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_CouponItem";
          }
        }
        class nt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.microtxnappid || e.Sg(nt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    microtxnappid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    microtxnassetclassid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = e.w0(nt.M())), nt.sm_mbf;
          }
          toObject(t = !1) {
            return nt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(nt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(nt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new nt();
            return nt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(nt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(nt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_MicroTxnAsset";
          }
        }
        class at extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              at.prototype.bundleid || e.Sg(at.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    bundleid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    quantity: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    is_gift: { n: 3, br: e.qM.readBool, bw: e.gp.writeBool },
                    gift_info: { n: 4, c: k.$z },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = e.w0(at.M())), at.sm_mbf;
          }
          toObject(t = !1) {
            return at.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(at.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(at.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new at();
            return at.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(at.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return at.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(at.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_BundleItem";
          }
        }
        class Ut extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.reward_id || e.Sg(Ut.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    reward_id: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = e.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(t = !1) {
            return Ut.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Ut.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Ut.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Ut();
            return Ut.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Ut.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Ut.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        }
        class Jt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jt.prototype.gidparent || e.Sg(Jt.M()),
              c.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    gidparent: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    children: { n: 2, c: Jt, r: !0, q: !0 },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = e.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(t = !1) {
            return Jt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Jt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Jt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Jt();
            return Jt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Jt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Jt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RelationShip";
          }
        }
        class Vt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Vt.prototype.couponid || e.Sg(Vt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Vt.sm_m ||
                (Vt.sm_m = {
                  proto: Vt,
                  fields: {
                    couponid: {
                      n: 1,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    gidcoupon: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Vt.sm_m
            );
          }
          static MBF() {
            return Vt.sm_mbf || (Vt.sm_mbf = e.w0(Vt.M())), Vt.sm_mbf;
          }
          toObject(t = !1) {
            return Vt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Vt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Vt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Vt();
            return Vt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Vt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Vt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AvailableCoupon";
          }
        }
        class pt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pt.prototype.gidlineitem || e.Sg(pt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    gidlineitem: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    package_item: { n: 2, c: Bt },
                    wallet_credit_item: { n: 3, c: mt },
                    coupon_item: { n: 4, c: yt },
                    micro_item: { n: 5, c: nt },
                    bundle_item: { n: 7, c: at },
                    loyalty_item: { n: 8, c: Ut },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = e.w0(pt.M())), pt.sm_mbf;
          }
          toObject(t = !1) {
            return pt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(pt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(pt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new pt();
            return pt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(pt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(pt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Item";
          }
        }
        class Gt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Gt.prototype.coupons || e.Sg(Gt.M()),
              c.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Gt.sm_m ||
                (Gt.sm_m = {
                  proto: Gt,
                  fields: { coupons: { n: 1, c: Vt, r: !0, q: !0 } },
                }),
              Gt.sm_m
            );
          }
          static MBF() {
            return Gt.sm_mbf || (Gt.sm_mbf = e.w0(Gt.M())), Gt.sm_mbf;
          }
          toObject(t = !1) {
            return Gt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Gt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Gt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Gt();
            return Gt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Gt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Gt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Potentials";
          }
        }
        class _t extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _t.prototype.gidshoppingcart || e.Sg(_t.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = e.w0(_t.M())), _t.sm_mbf;
          }
          toObject(t = !1) {
            return _t.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(_t.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(_t.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new _t();
            return _t.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(_t.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(_t.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Request";
          }
        }
        class Qt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Qt.prototype.lineitems || e.Sg(Qt.M()),
              c.Message.initialize(this, t, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qt.sm_m ||
                (Qt.sm_m = {
                  proto: Qt,
                  fields: {
                    lineitems: { n: 1, c: pt, r: !0, q: !0 },
                    treeview: { n: 2, c: Jt, r: !0, q: !0 },
                    potentials: { n: 3, c: Gt },
                  },
                }),
              Qt.sm_m
            );
          }
          static MBF() {
            return Qt.sm_mbf || (Qt.sm_mbf = e.w0(Qt.M())), Qt.sm_mbf;
          }
          toObject(t = !1) {
            return Qt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Qt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Qt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Qt();
            return Qt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Qt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Qt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_Contents";
          }
        }
        class Ct extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ct.prototype.gidshoppingcart || e.Sg(Ct.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ct.sm_m ||
                (Ct.sm_m = {
                  proto: Ct,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Qt },
                    time_created: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    merged_into_account_cart: {
                      n: 4,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    steamid_requester: {
                      n: 5,
                      br: e.qM.readFixed64String,
                      bw: e.gp.writeFixed64String,
                    },
                    purchase_request_id: {
                      n: 6,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              Ct.sm_m
            );
          }
          static MBF() {
            return Ct.sm_mbf || (Ct.sm_mbf = e.w0(Ct.M())), Ct.sm_mbf;
          }
          toObject(t = !1) {
            return Ct.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Ct.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Ct.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Ct();
            return Ct.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Ct.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Ct.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Ct.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Ct.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_GetContents_Response";
          }
        }
        class tr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tr.prototype.gidshoppingcart || e.Sg(tr.M()),
              c.Message.initialize(this, t, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tr.sm_m ||
                (tr.sm_m = {
                  proto: tr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    browserid: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    cart_items: { n: 4, c: Bt, r: !0, q: !0 },
                    store_country_code: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    beta_mode: {
                      n: 6,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              tr.sm_m
            );
          }
          static MBF() {
            return tr.sm_mbf || (tr.sm_mbf = e.w0(tr.M())), tr.sm_mbf;
          }
          toObject(t = !1) {
            return tr.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(tr.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(tr.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new tr();
            return tr.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(tr.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return tr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(tr.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              tr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Request";
          }
        }
        class At extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.gidshoppingcart || e.Sg(At.M()),
              c.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Qt },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = e.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(At.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new At();
            return At.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(At.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(At.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddPackages_Response";
          }
        }
        class rr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              rr.prototype.gidshoppingcart || e.Sg(rr.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rr.sm_m ||
                (rr.sm_m = {
                  proto: rr,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    quantity: {
                      n: 3,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                  },
                }),
              rr.sm_m
            );
          }
          static MBF() {
            return rr.sm_mbf || (rr.sm_mbf = e.w0(rr.M())), rr.sm_mbf;
          }
          toObject(t = !1) {
            return rr.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(rr.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(rr.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new rr();
            return rr.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(rr.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return rr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(rr.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              rr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        }
        class ar extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ar.prototype.gidshoppingcart || e.Sg(ar.M()),
              c.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ar.sm_m ||
                (ar.sm_m = {
                  proto: ar,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    contents: { n: 2, c: Qt },
                    result_details: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ar.sm_m
            );
          }
          static MBF() {
            return ar.sm_mbf || (ar.sm_mbf = e.w0(ar.M())), ar.sm_mbf;
          }
          toObject(t = !1) {
            return ar.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(ar.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(ar.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new ar();
            return ar.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(ar.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return ar.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(ar.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              ar.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        }
        class er extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              er.prototype.gidshoppingcart || e.Sg(er.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              er.sm_m ||
                (er.sm_m = {
                  proto: er,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    bundleid: {
                      n: 2,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    browserid: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    store_country: {
                      n: 5,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                    quantity: {
                      n: 6,
                      br: e.qM.readUint32,
                      bw: e.gp.writeUint32,
                    },
                    beta_mode: {
                      n: 7,
                      d: !1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    gift_info: { n: 8, c: k.$z },
                  },
                }),
              er.sm_m
            );
          }
          static MBF() {
            return er.sm_mbf || (er.sm_mbf = e.w0(er.M())), er.sm_mbf;
          }
          toObject(t = !1) {
            return er.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(er.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(er.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new er();
            return er.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(er.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return er.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(er.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              er.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Request";
          }
        }
        class ir extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ir.prototype.contents || e.Sg(ir.M()),
              c.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ir.sm_m ||
                (ir.sm_m = {
                  proto: ir,
                  fields: {
                    contents: { n: 1, c: Qt },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ir.sm_m
            );
          }
          static MBF() {
            return ir.sm_mbf || (ir.sm_mbf = e.w0(ir.M())), ir.sm_mbf;
          }
          toObject(t = !1) {
            return ir.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(ir.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(ir.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new ir();
            return ir.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(ir.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return ir.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(ir.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              ir.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_AddBundle_Response";
          }
        }
        class qt extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              qt.prototype.gidshoppingcart || e.Sg(qt.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitem: {
                      n: 2,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gift_info: { n: 3, c: k.$z },
                  },
                }),
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = e.w0(qt.M())), qt.sm_mbf;
          }
          toObject(t = !1) {
            return qt.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(qt.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(qt.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new qt();
            return qt.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(qt.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(qt.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Request";
          }
        }
        class sr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              sr.prototype.contents || e.Sg(sr.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              sr.sm_m ||
                (sr.sm_m = {
                  proto: sr,
                  fields: { contents: { n: 1, c: Qt } },
                }),
              sr.sm_m
            );
          }
          static MBF() {
            return sr.sm_mbf || (sr.sm_mbf = e.w0(sr.M())), sr.sm_mbf;
          }
          toObject(t = !1) {
            return sr.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(sr.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(sr.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new sr();
            return sr.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(sr.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return sr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(sr.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              sr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_ModifyLineItem_Response";
          }
        }
        class X extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              X.prototype.gidshoppingcart || e.Sg(X.M()),
              c.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              X.sm_m ||
                (X.sm_m = {
                  proto: X,
                  fields: {
                    gidshoppingcart: {
                      n: 1,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                    gidlineitems: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint64String,
                      pbr: e.qM.readPackedUint64String,
                      bw: e.gp.writeRepeatedUint64String,
                    },
                    browserid: {
                      n: 3,
                      br: e.qM.readUint64String,
                      bw: e.gp.writeUint64String,
                    },
                  },
                }),
              X.sm_m
            );
          }
          static MBF() {
            return X.sm_mbf || (X.sm_mbf = e.w0(X.M())), X.sm_mbf;
          }
          toObject(t = !1) {
            return X.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(X.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(X.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new X();
            return X.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(X.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return X.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(X.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              X.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Request";
          }
        }
        class Q extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Q.prototype.contents || e.Sg(Q.M()),
              c.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    contents: { n: 1, c: Qt },
                    result_details: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: e.qM.readUint32,
                      pbr: e.qM.readPackedUint32,
                      bw: e.gp.writeRepeatedUint32,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = e.w0(Q.M())), Q.sm_mbf;
          }
          toObject(t = !1) {
            return Q.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(Q.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(Q.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new Q();
            return Q.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(Q.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(Q.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_RemoveLineItems_Response";
          }
        }
        var _;
        ((L) => {
          function t(jt, St, ft) {
            return jt.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, B.I8)(et, St, ft),
              gt,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          L.CreateNewShoppingCart = t;
          function s(jt, St, ft) {
            return jt.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, B.I8)(_t, St, ft),
              Ct,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          L.GetShoppingCartContents = s;
          function P(jt, St, ft) {
            return jt.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, B.I8)(tr, St, ft),
              At,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          L.AddPackages = P;
          function dt(jt, St, ft) {
            return jt.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, B.I8)(rr, St, ft),
              ar,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          L.UpdatePackageQuantity = dt;
          function Yt(jt, St, ft) {
            return jt.SendMsg(
              "ShoppingCart.AddBundle#1",
              (0, B.I8)(er, St, ft),
              ir,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          L.AddBundle = Yt;
          function Lt(jt, St, ft) {
            return jt.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, B.I8)(qt, St, ft),
              sr,
              { ePrivilege: 1, eWebAPIKeyRequirement: 1 },
            );
          }
          L.ModifyLineItem = Lt;
          function lr(jt, St, ft) {
            return jt.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, B.I8)(X, St, ft),
              Q,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          L.RemoveLineItems = lr;
        })(_ || (_ = {}));
        var ot = r(72609),
          bt = r(25294);
        function Tt(L, t, s) {
          return {
            queryKey: GetShoppingCartKey(t),
            queryFn: () => $r(L, t),
            staleTime: 1800 * 1e3,
            ...s,
          };
        }
        function vt(L) {
          const t = useActiveServiceTransport(),
            s = useShoppingCartID();
          return useQuery(Tt(t, s, L));
        }
        function Nt(L, t, s) {
          if (L !== void 0)
            return t
              ? L.line_items.some(
                  (P) =>
                    P.type ==
                      EAccountCartLineItemType.k_EAccountCartLineItem_Package &&
                    P.packageid === t,
                )
              : s
                ? L.line_items.some(
                    (P) =>
                      P.type ==
                        EAccountCartLineItemType.k_EAccountCartLineItem_Bundle &&
                      P.bundleid === s,
                  )
                : void 0;
        }
        function Wr(L) {
          return vt({ select: (t) => t.line_items?.length ?? 0, ...L });
        }
        function Nr(L, t, s, P, dt, Yt) {
          const {
            navData: Lt,
            nAccountIDGiftee: lr,
            bIsGift: jt = !1,
          } = Yt ?? {};
          if (BIsAccountCart(s)) {
            const St = (P || []).map((ft) => ({
              packageid: ft,
              bIsGift: jt,
              nAccountIDGiftee: lr,
            }));
            return (
              dt &&
                St.push({ bundleid: dt, bIsGift: jt, nAccountIDGiftee: lr }),
              Ur(L, UserConfig.country_code, St, Lt).then(
                ([ft, Rt]) => (
                  InvalidateDynamicStoreVersion(),
                  ft == k_EResultOK
                    ? (ReplaceShoppingCart(t, s, Rt.cart),
                      {
                        success: !0,
                        items: Rt.line_item_ids,
                        replaced_packageids: Rt.replaced_packages,
                      })
                    : ft === k_EResultAlreadyOwned
                      ? {
                          success: !1,
                          result: ft,
                          existing_billing_agreementid:
                            Rt.existing_billing_agreementid,
                          new_billing_agreement_recurring_packageid:
                            Rt.new_billing_agreement_recurring_packageid,
                        }
                      : { success: !1, result: ft }
                ),
              )
            );
          } else
            return Fr(L, P, dt, jt, lr).then(([St, ft]) => {
              if ((InvalidateDynamicStoreVersion(), St)) {
                ReplaceShoppingCart(t, s, Pr(ft));
                const Rt = (P || []).map((Ir) =>
                  ft?.lineitems?.find(
                    (Kr) => Kr.package_item?.packageid === Ir,
                  ),
                );
                return (
                  dt &&
                    Rt.push(
                      ft?.lineitems?.find(
                        (Ir) => Ir.bundle_item?.bundleid === dt,
                      ),
                    ),
                  {
                    success: !0,
                    items: Rt.filter(isTruthy).map((Ir) => Ir.gidlineitem),
                  }
                );
              }
              return { success: !1 };
            });
        }
        async function Fr(L, t, s, P, dt) {
          const Yt = new FormData();
          t &&
            (t.length === 1
              ? Yt.set("subid", t[0].toString())
              : t.forEach((jt) => Yt.append("subid[]", jt.toString()))),
            s && Yt.set("bundleid", s.toString()),
            (P || dt) &&
              (Yt.set("isgift", "1"),
              dt && Yt.set("gifteeaccountid", dt.toString())),
            Yt.set("action", "add_to_cart");
          const Lt = await fetch(`${ot.TS.STORE_BASE_URL}cart/addtocart`, {
            method: "post",
            body: Yt,
          });
          if (!Lt.ok) throw new Error("Failed to fetch /cart/addtocart");
          const lr = await Lt.json();
          return [lr?.success ? u.R : u.zi, lr?.contents];
        }
        async function Zr(L, t, s, P) {
          return Ur(L, t, [s], P);
        }
        async function Ur(L, t, s, P) {
          const dt = B.w.Init(S);
          if (!s || s.length === 0)
            return (
              console.error(
                "No valid Package or Bundle provided to add to cart",
              ),
              [u.nO, null]
            );
          s.forEach((Lt) => {
            const lr = dt.Body().add_items();
            Lt.packageid
              ? lr.set_packageid(Lt.packageid)
              : Lt.bundleid
                ? lr.set_bundleid(Lt.bundleid)
                : console.error(
                    "Neither a package nor bundle ID were provided with an item in AddItemsToAccountCart",
                  ),
              Lt.bIsGift &&
                (lr.flags(!0).set_is_gift(!0),
                Lt.nAccountIDGiftee &&
                  lr.gift_info(!0).set_accountid_giftee(Lt.nAccountIDGiftee));
          }),
            P && dt.Body().set_navdata(w.fromObject((0, bt.R)(P))),
            dt.Body().set_user_country(t);
          const Yt = await p.AddItemsToCart(L, dt);
          return (
            Yt.BSuccess() ||
              console.warn(
                `Failed to add item to account cart: ${Yt.GetEResult()}`,
              ),
            [Yt.GetEResult(), Yt.Body().toObject()]
          );
        }
        async function $r(L, t) {
          if (BIsAccountCart(t)) {
            const s = CProtoBufMsg.Init(CAccountCart_GetCart_Request);
            s.Body().set_user_country(UserConfig.country_code);
            const P = await AccountCartService.GetCart(L, s);
            if (!P.BSuccess())
              throw `Error loading AccountCart: ${P.GetErrorMessage()}`;
            return P.Body().toObject()?.cart;
          } else if (BIsReplayCart(t)) {
            const s = CProtoBufMsg.Init(CCheckout_ValidateCart_Request);
            SetStoreBrowseContext(
              { country: UserConfig.country_code, language: Config.LANGUAGE },
              s,
            ),
              s.Body().set_gidreplayoftransid(t.gid);
            const P = await CheckoutService.ValidateCart(L, s);
            if (!P.BSuccess())
              throw `Error loading ReplayCart: ${P.GetErrorMessage()}`;
            return ue(P.Body().toObject());
          } else {
            if (!t.gid) return Pr(void 0);
            const s = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
            s.Body().set_gidshoppingcart(t.gid);
            const P = await ShoppingCartService.GetShoppingCartContents(L, s);
            if (!P.BSuccess())
              throw `Error loading Legacy Cart: ${P.GetErrorMessage()}`;
            return Pr(P.Body().toObject().contents);
          }
        }
        function Pr(L) {
          const t = { line_items: [] };
          return (
            L?.lineitems?.length &&
              (t.line_items = L.lineitems
                .map((s) => (s.package_item?.gidbundle ? null : ie(s)))
                .filter(n)),
            t
          );
        }
        function ie(L) {
          const t = { price_when_added: {}, flags: {} };
          return (
            (t.line_item_id = L.gidlineitem),
            L.bundle_item?.bundleid
              ? ((t.bundleid = L.bundle_item.bundleid),
                (t.type = E),
                L.bundle_item.is_gift &&
                  ((t.flags.is_gift = L.bundle_item.is_gift),
                  (t.gift_info = L.bundle_item.gift_info)))
              : L.package_item &&
                ((t.packageid = L.package_item.packageid),
                (t.price_when_added.amount_in_cents =
                  L.package_item.costwhenadded?.amount ?? ""),
                (t.price_when_added.currency_code =
                  L.package_item.costwhenadded?.currencycode ?? 0),
                (t.type = q),
                L.package_item.is_gift &&
                  ((t.flags.is_gift = L.package_item.is_gift),
                  (t.gift_info = L.package_item.gift_info))),
            t
          );
        }
        function ue(L) {
          const t = { subtotal: L.estimated_totals.subtotal, line_items: [] };
          return (
            (t.line_items = L.cart_items
              ?.map((s) => {
                let P;
                if (s.item_id?.packageid)
                  P = EAccountCartLineItemType.k_EAccountCartLineItem_Package;
                else if (s.item_id?.bundleid)
                  P = EAccountCartLineItemType.k_EAccountCartLineItem_Bundle;
                else return;
                return {
                  line_item_id: s.line_item_id,
                  type: P,
                  packageid: s.item_id.packageid,
                  bundleid: s.item_id.bundleid,
                  is_valid: !0,
                  price_when_added: s.price_when_added,
                  gift_info: s.gift_info,
                  flags: { is_gift: !!s.gift_info?.accountid_giftee },
                  gidcoupon_applied: s.coupon_applied?.gidcoupon,
                };
              })
              .filter(isTruthy)),
            t
          );
        }
        var de = r(52438),
          se = r(90900),
          Mr = r(90626);
        function Gr(L) {
          return L
            ? { type: "replay", gid: L }
            : ot.iA.logged_in
              ? { type: "account" }
              : { type: "anonymous", gid: (0, de.j_)(se.TP) };
        }
        const ne = Mr.createContext({ cartID: void 0 });
        function ae() {
          return Mr.useContext(ne).cartID || Gr();
        }
        function me(L) {
          const { cartID: t, children: s } = L,
            P = React.useMemo(() => ({ cartID: t }), [t]);
          return jsx(ne.Provider, { value: P, children: s });
        }
        function Jr(L) {
          return M(L) ? L.type : L.gid;
        }
        function oe(L) {
          return ["shopping_cart", Jr(L), ot.iA.accountid];
        }
        function fe(L, t) {
          return BIsAccountCart(L)
            ? ["validate_checkout", Jr(L), UserConfig.accountid]
            : ["validate_checkout", Jr(L), t?.accountid_giftee];
        }
        function Yr(L, t) {
          L.invalidateQueries({ queryKey: ["validate_checkout"], exact: !1 });
        }
        function Xr(L, t) {
          L.invalidateQueries({ queryKey: oe(t) }), Yr(L, t);
        }
        function pr(L, t, s) {
          L.setQueryData(oe(t), s), Yr(L, t);
        }
        function Lr(L, t, s, P, dt) {
          return Oe(
            [{ packageid: L, bundleid: t, bIsGift: s, nAccountIDGiftee: P }],
            dt,
          );
        }
        function Oe(L, t) {
          const s = ae(),
            P = (0, W.KV)(),
            dt = (0, v.jE)(),
            { storeBrowseContext: Yt, dataLoader: Lt } = (0, b.yn)(),
            { country: lr } = Yt,
            jt = (0, O.Gd)(t);
          return (0, F.n)({
            mutationFn: async () => {
              if (
                L.length == 0 ||
                !L.every((ft) => ft.packageid || ft.bundleid)
              )
                throw "Every item must have a valid package or bundle id";
              let St;
              if (M(s)) {
                const [ft, Rt] = await Ur(P, lr, L, jt);
                if (ft == u.R) (St = Rt.line_item_ids), pr(dt, s, Rt.cart);
                else throw `AddItemsToAccountCart failed with ${ft}`;
              } else if (z(s)) {
                const ft = L.map((Kr) => Kr.packageid).filter(n),
                  Rt = L.map((Kr) => Kr.bundleid).filter(n);
                if (Rt.length > 1)
                  throw "The anonymous cart can only take one bundle per call";
                const [xr, Ir] = await Fr(
                  P,
                  ft.length > 0 ? ft : void 0,
                  Rt[0],
                  L.some((Kr) => Kr.bIsGift),
                  L.find((Kr) => Kr.nAccountIDGiftee)?.nAccountIDGiftee,
                );
                if (xr == u.R && Ir) {
                  const Kr = new Set(ft),
                    He = new Set(Rt);
                  (St =
                    Ir.lineitems
                      ?.filter(
                        (Rr) =>
                          (Rr.package_item &&
                            !Rr.package_item.gidbundle &&
                            Kr.has(Rr.package_item.packageid)) ||
                          (Rr.bundle_item && He.has(Rr.bundle_item.bundleid)),
                      )
                      ?.map((Rr) => Rr.gidlineitem) || []),
                    pr(dt, s, Pr(Ir));
                } else throw `AddItemsToAnonymousCart failed with ${xr}`;
              } else throw "Invalid cart type";
              return St;
            },
            onMutate: () => {
              (async () => {
                const St = L.map((Rt) =>
                  Rt.packageid
                    ? { packageid: Rt.packageid }
                    : { bundleid: Rt.bundleid },
                );
                (
                  await Promise.all(
                    St.map((Rt) => dt.fetchQuery((0, U.us)(Lt, Rt))),
                  )
                ).forEach((Rt, xr) => {
                  const Ir =
                    Rt?.included_appids?.length == 1
                      ? { appid: Rt.included_appids[0] }
                      : St[xr];
                  dt.prefetchQuery((0, U.AQ)(Lt, Ir)),
                    dt.prefetchQuery((0, U.rK)(Lt, Ir));
                });
              })();
            },
          });
        }
        var kr = r(3367);
        function ze(L) {
          const {
              storeItem: t,
              feature: s,
              depth: P,
              children: dt,
              noImpressionTracking: Yt,
              ...Lt
            } = L,
            lr = t?.appid,
            jt = ye(t);
          if (!t) return dt;
          const St = jsx(FocusableAnchor, { ...Lt, href: jt, children: dt });
          return lr && !Yt
            ? jsx(ImpressionTrackedElement, {
                appID: lr,
                feature: s,
                depth: P,
                children: St,
              })
            : St;
        }
        function ye(L, t, s) {
          return (0, O.aL)(
            L ? `${ot.TS.STORE_BASE_URL}${L.store_url_path}` : void 0,
            t,
            s,
          );
        }
        var Te = r(24179),
          Ue = r(83482);
        class or extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              or.prototype.packageid || e.Sg(or.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              or.sm_m ||
                (or.sm_m = {
                  proto: or,
                  fields: {
                    packageid: {
                      n: 1,
                      br: e.qM.readInt32,
                      bw: e.gp.writeInt32,
                    },
                    country_code: {
                      n: 2,
                      br: e.qM.readString,
                      bw: e.gp.writeString,
                    },
                  },
                }),
              or.sm_m
            );
          }
          static MBF() {
            return or.sm_mbf || (or.sm_mbf = e.w0(or.M())), or.sm_mbf;
          }
          toObject(t = !1) {
            return or.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(or.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(or.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new or();
            return or.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(or.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return or.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(or.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              or.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Request";
          }
        }
        class cr extends c.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              cr.prototype.inventory_available || e.Sg(cr.M()),
              c.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              cr.sm_m ||
                (cr.sm_m = {
                  proto: cr,
                  fields: {
                    inventory_available: {
                      n: 1,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                    high_pending_orders: {
                      n: 2,
                      br: e.qM.readBool,
                      bw: e.gp.writeBool,
                    },
                  },
                }),
              cr.sm_m
            );
          }
          static MBF() {
            return cr.sm_mbf || (cr.sm_mbf = e.w0(cr.M())), cr.sm_mbf;
          }
          toObject(t = !1) {
            return cr.toObject(t, this);
          }
          static toObject(t, s) {
            return e.BT(cr.M(), t, s);
          }
          static fromObject(t) {
            return e.Uq(cr.M(), t);
          }
          static deserializeBinary(t) {
            let s = new (l().BinaryReader)(t),
              P = new cr();
            return cr.deserializeBinaryFromReader(P, s);
          }
          static deserializeBinaryFromReader(t, s) {
            return e.zj(cr.MBF(), t, s);
          }
          serializeBinary() {
            var t = new (l().BinaryWriter)();
            return cr.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, s) {
            e.i0(cr.M(), t, s);
          }
          serializeBase64String() {
            var t = new (l().BinaryWriter)();
            return (
              cr.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPhysicalGoods_CheckInventoryAvailableByPackage_Response";
          }
        }
        var Me;
        ((L) => {
          function t(s, P, dt) {
            return s.SendMsg(
              "PhysicalGoods.CheckInventoryAvailableByPackage#1",
              (0, B.I8)(or, P, dt),
              cr,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 1 },
            );
          }
          L.CheckInventoryAvailableByPackage = t;
        })(Me || (Me = {}));
        var Pe = r(20194),
          Ie = r(69561),
          Fe = r(98609);
        const Ee = { high_pending_orders: !1, inventory_available: !0 };
        function Le(L) {
          const t = (0, W.rW)(),
            { data: s } = (0, U.J$)(L),
            P = (0, Pe.I)({
              queryKey: [
                s?.id || Ie.sc,
                s?.type || "invalid",
                s?.item_type || "invalid",
              ],
              queryFn: () => Ne(s, t),
              enabled: !!(s && s.type === kr.uE.Hk),
            });
          return P.isLoading ? null : P.data;
        }
        async function Ne(L, t) {
          if (!L || L.item_type !== kr.c6.RD || L.type !== kr.uE.Hk) return Ee;
          const s = B.w.Init(or);
          s.Body().set_packageid(L.id || 0),
            s.Body().set_country_code(Fe.iA.country_code);
          const P = await Me.CheckInventoryAvailableByPackage(t, s);
          if (P.GetEResult() !== u.R)
            throw (
              (console.error(
                "Received error from FetchPhysicalGoodsStock",
                P.GetEResult(),
              ),
              new Error(
                `Error from FetchPhysicalGoodsStock: ${P.GetEResult()}`,
              ))
            );
          return P.Body().toObject();
        }
        var je = r(53107),
          le = r(36707),
          ge = r(3166),
          ke = r(85599),
          Ze = r(95706),
          ce = r.n(Ze),
          Ar = r(39905);
        function he(L) {
          const { id: t, className: s } = L,
            P = (0, O.n9)(),
            { data: dt } = (0, U.J$)(t),
            { data: Yt } = (0, U.by)(t),
            { data: Lt } = (0, U.EO)(t),
            lr = Le(t),
            { bIsOwned: jt } = (0, Te.ZJ)(t),
            St = ye(dt),
            ft = (0, Mr.useCallback)(() => {
              if (dt) {
                let xr = dt.appid;
                dt.related_items?.parent_appid &&
                  dt.type != kr.uE.Ov &&
                  (xr = dt.related_items.parent_appid),
                  (0, je.Id)(window, `steam://run/${xr}`);
              }
            }, [dt]);
          if (!dt || !Yt || !Lt || dt.type == kr.uE.gQ) return null;
          const Rt =
            dt.is_free ||
            (Lt.final_price_in_cents != null &&
              Lt.final_price_in_cents == "0") ||
            (Lt.discount_pct && Lt.discount_pct >= 100);
          if (dt.item_type == kr.c6.RD) {
            if (dt.type == kr.uE.Hk)
              if (lr) {
                if (!lr.inventory_available)
                  return (0, a.jsx)("div", {
                    className: (0, le.A)(ce().ActionOutOfStock, s),
                    children: (0, a.jsxs)("span", {
                      children: [" ", Ar.Z.Localize("#Sale_ReserveExhausted")],
                    }),
                  });
              } else
                return (0, a.jsx)(ke.t, { size: "small", position: "center" });
            else if (Rt && dt.included_appids && dt.included_appids.length > 1)
              return null;
          }
          if (dt.item_type == kr.c6.qI) {
            if (
              (Yt.is_coming_soon && !Lt.packageid) ||
              (jt && dt.type === kr.uE.Hk)
            )
              return null;
            if (!jt && Lt.is_free_to_keep)
              if (ge.TS.IN_CLIENT || (0, ge.yK)() != "store") {
                const xr = `${ge.TS.IN_CLIENT ? "steam://openurl/" : ""}${St}`;
                return (0, a.jsx)("div", {
                  onClick: (Ir) => (0, je.Id)(Ir, xr),
                  className: (0, le.A)(ce().Action, s),
                  children: (0, a.jsx)("span", {
                    children: Ar.Z.Localize(
                      "#EventDisplay_CallToAction_VisitStore",
                    ),
                  }),
                });
              } else {
                const xr = (0, Ue.wJ)(
                  `${ge.TS.STORE_BASE_URL}freelicense/addfreelicense`,
                  P,
                );
                return (0, a.jsxs)("form", {
                  action: xr,
                  method: "POST",
                  children: [
                    (0, a.jsx)("input", {
                      type: "hidden",
                      name: "subid",
                      value: Lt.packageid,
                    }),
                    (0, a.jsx)("input", {
                      type: "hidden",
                      name: "sessionid",
                      value: (0, ge.KC)(),
                    }),
                    (0, a.jsx)("button", {
                      className: (0, le.A)(ce().Action, s),
                      type: "submit",
                      children: Ar.Z.Localize(
                        "#EventDisplay_CallToAction_AddToAccount",
                      ),
                    }),
                  ],
                });
              }
            if ((jt || Rt) && !dt.is_coming_soon) {
              let xr = Ar.Z.Localize(
                "#EventDisplay_CallToAction_PlayNowForFree",
              );
              return (
                jt
                  ? (xr = Ar.Z.Localize("#EventDisplay_CallToAction_PlayNow"))
                  : dt.is_free_temporarily &&
                    (xr = Ar.Z.Localize(
                      "#EventDisplay_CallToAction_AddToAccount",
                    )),
                (0, a.jsx)("div", {
                  className: (0, le.A)(ce().Action, s),
                  onClick: ft,
                  children: (0, a.jsx)("span", { children: xr }),
                })
              );
            }
            if (Lt.formatted_final_price == "")
              return (0, a.jsx)("a", {
                href: St,
                className: (0, le.A)(ce().Action, s),
                children: Ar.Z.Localize(
                  "#EventDisplay_CallToAction_VisitStore",
                ),
              });
          }
          return (0, a.jsx)(Ke, {
            className: s,
            storeItemBestPurchaseOption: Lt,
            storeItemDefaultData: dt,
          });
        }
        function Ke(L) {
          const {
              className: t,
              storeItemBestPurchaseOption: s,
              storeItemDefaultData: P,
            } = L,
            dt = (0, O.n9)(),
            { mutate: Yt } = Lr(
              s?.packageid,
              s?.bundleid,
              !1,
              void 0,
              dt.feature,
            );
          return (0, a.jsx)("div", {
            className: (0, le.A)(ce().Action, t),
            onClick: () => Yt(),
            children: (0, a.jsx)("span", {
              children: Ar.Z.Localize("#Store_AddToCart"),
            }),
          });
        }
      },
      68260: (R, $, r) => {
        "use strict";
        r.d($, { j: () => xi });
        var a = r(7850),
          u = r(72609),
          n = r(3367),
          W = r(40358),
          b = r(13977),
          U = r(71421),
          O = r(36707),
          v = r(26591),
          F = r(72365),
          M = r.n(F),
          z = r(13620),
          f = r(99412),
          d = r(64868),
          y = r(66243),
          I = r(29522),
          x = r(24179),
          B = r(20125),
          c = r(90626);
        const l = null,
          e = -700,
          k = null,
          o = null,
          w = null,
          V = null,
          q = null,
          E = null,
          K = null,
          ct = null,
          xt = null,
          Ft = null,
          kt = null,
          nr = null,
          Mt = null,
          j = null,
          J = null,
          H = null,
          T = -600,
          D = -599,
          S = -598,
          h = -597,
          N = -596,
          A = -595,
          tt = -594,
          st = -593,
          ut = -592,
          wt = -591,
          zt = -590,
          Kt = -589,
          yr = -588,
          $t = -587,
          Ht = -586,
          Xt = -585,
          p = -584,
          G = -583,
          et = -582,
          gt = -581,
          rt = -580,
          Bt = -579,
          mt = -578,
          yt = -577,
          nt = -576,
          at = -575,
          Ut = -574,
          Jt = -573,
          Vt = -572,
          pt = -571,
          Gt = null,
          _t = -500,
          Qt = -499,
          Ct = -498,
          tr = -497,
          At = -496,
          rr = null,
          ar = null,
          er = -300,
          ir = -203,
          qt = -202,
          sr = -201,
          X = -200,
          Q = -199,
          _ = -198,
          ot = -197,
          bt = -196,
          Tt = -195,
          vt = -194,
          Nt = -193,
          Wr = -192,
          Nr = -191,
          Fr = -190,
          Zr = -189,
          Ur = -188,
          $r = -187,
          Pr = -186,
          ie = -185,
          ue = -184,
          de = -183,
          se = -182,
          Mr = null,
          Gr = -102,
          ne = -101,
          ae = -100,
          me = -99,
          Jr = null,
          oe = null,
          fe = null,
          Yr = -95,
          Xr = -94,
          pr = -93,
          Lr = -92,
          Oe = null,
          kr = -90,
          ze = -89,
          ye = -88,
          Te = -87,
          Ue = -86,
          or = -85,
          cr = -84,
          Me = -83,
          Pe = -82,
          Ie = -81,
          Fe = -80,
          Ee = -79,
          Le = -75,
          Ne = -74,
          je = -70,
          le = -69,
          ge = -68,
          ke = -67,
          Ze = null,
          ce = -1,
          Ar = 0,
          he = 1,
          Ke = 2,
          L = 3,
          t = 4,
          s = 5,
          P = 6,
          dt = 7,
          Yt = 8,
          Lt = 9,
          lr = 10,
          jt = 11,
          St = 12,
          ft = 13,
          Rt = 14,
          xr = 15,
          Ir = 16,
          Kr = 17,
          He = 18,
          $e = 19,
          Rr = 20,
          ai = 21,
          Pi = 32;
        function Je(Z) {
          switch (Z) {
            case Ar:
              return "Windows";
            case he:
              return "Windows 3.11";
            case Ke:
              return "Windows 95";
            case L:
              return "Windows 98";
            case t:
              return "Windows ME";
            case s:
              return "Windows NT";
            case P:
              return "Windows 2000";
            case dt:
              return "Windows XP";
            case Yt:
              return "Windows 2003";
            case Lt:
              return "Windows Vista";
            case lr:
              return "Windows 7";
            case jt:
              return "Windows 2008";
            case St:
              return "Windows 2012";
            case xr:
              return "Windows 2012 R2";
            case ft:
              return "Windows 8";
            case Rt:
              return "Windows 8.1";
            case Ir:
              return "Windows 10";
            case Kr:
              return "Windows 2016";
            case He:
              return "Windows 2019";
            case $e:
              return "Windows 2022";
            case Rr:
              return "Windows 11";
            case Gr:
              return "Mac OS";
            case ne:
              return "MacOS 10.4";
            case ae:
              return "MacOS 10.5";
            case me:
              return "MacOS 10.5.8";
            case Yr:
              return "MacOS 10.6";
            case Xr:
              return "MacOS 10.6.3";
            case pr:
              return "MacOS 10.6.4 with Apple's Snow Leopard Graphics Update";
            case Lr:
              return "MacOS 10.6.7";
            case kr:
              return "MacOS 10.7";
            case ze:
              return "MacOS 10.8";
            case ye:
              return "MacOS 10.9";
            case Te:
              return "MacOS 10.10";
            case Ue:
              return "MacOS 10.11";
            case or:
              return "MacOS 10.12";
            case cr:
              return "MacOS 10.13";
            case Me:
              return "MacOS 10.14";
            case Pe:
              return "MacOS 10.15";
            case Ie:
              return "MacOS 11 (as 10.16)";
            case Le:
              return "MacOS 12 (as 10.17)";
            case je:
              return "MacOS 13 (as 10.18)";
            case Fe:
              return "MacOS 11";
            case Ee:
              return "MacOS 11.1";
            case Ne:
              return "MacOS 12";
            case le:
              return "MacOS 13";
            case ge:
              return "MacOS 14";
            case ke:
              return "MacOS 15";
            case ir:
              return "Linux";
            case qt:
              return "Linux 2.2";
            case sr:
              return "Linux 2.4";
            case X:
              return "Linux 2.6";
            case Q:
              return "Linux 3.2";
            case _:
              return "Linux 3.5";
            case ot:
              return "Linux 3.6";
            case bt:
              return "Linux 3.10";
            case Tt:
              return "Linux 3.16";
            case vt:
              return "Linux 3.18";
            case Nt:
              return "Linux 3.x";
            case Nr:
              return "Linux 4.1";
            case Fr:
              return "Linux 4.4";
            case Zr:
              return "Linux 4.9";
            case Ur:
              return "Linux 4.14";
            case $r:
              return "Linux 4.19";
            case Wr:
              return "Linux 4.x";
            case Pr:
              return "Linux 5.x";
            case ie:
              return "Linux 5.4";
            case ue:
              return "Linux 6.x";
            case de:
              return "Linux 7.x";
            case se:
              return "Linux 5.10";
            case er:
              return "PS3";
            case e:
              return "Web Client";
            case _t:
              return "Android";
            case Qt:
              return "Android 6.x";
            case Ct:
              return "Android 7.x";
            case tr:
              return "Android 8.x";
            case At:
              return "Android 9.x";
            case T:
              return "iOS";
            case D:
              return "iOS 1";
            case S:
              return "iOS 2";
            case h:
              return "iOS 3";
            case N:
              return "iOS 4";
            case A:
              return "iOS 5";
            case tt:
              return "iOS 6";
            case st:
              return "iOS 6.1";
            case ut:
              return "iOS 7";
            case wt:
              return "iOS 7.1";
            case zt:
              return "iOS 8";
            case Kt:
              return "iOS 8.1";
            case yr:
              return "iOS 8.2";
            case $t:
              return "iOS 8.3";
            case Ht:
              return "iOS 8.4";
            case Xt:
              return "iOS 9";
            case p:
              return "iOS 9.1";
            case G:
              return "iOS 9.2";
            case et:
              return "iOS 9_.3";
            case gt:
              return "iOS 10";
            case rt:
              return "iOS 10.1";
            case Bt:
              return "iOS 10.2";
            case mt:
              return "iOS 10.3";
            case yt:
              return "iOS 11";
            case nt:
              return "iOS 11.1";
            case at:
              return "iOS 11.2";
            case Ut:
              return "iOS 11.3";
            case Jt:
              return "iOS 11.4";
            case Vt:
              return "iOS 12";
            case pt:
              return "iOS 12.1";
            default:
            case ce:
              return "Unknown";
          }
        }
        var oi = ((Z) => (
            (Z[(Z.k_EPlatformTypeUnknown = 0)] = "k_EPlatformTypeUnknown"),
            (Z[(Z.k_EPlatformTypeWin32 = 1)] = "k_EPlatformTypeWin32"),
            (Z[(Z.k_EPlatformTypeWin64 = 2)] = "k_EPlatformTypeWin64"),
            (Z[(Z.k_EPlatformTypeLinux64 = 3)] = "k_EPlatformTypeLinux64"),
            (Z[(Z.k_EPlatformTypeOSX = 4)] = "k_EPlatformTypeOSX"),
            (Z[(Z.k_EPlatformTypePS3 = 5)] = "k_EPlatformTypePS3"),
            (Z[(Z.k_EPlatformTypeLinux32 = 6)] = "k_EPlatformTypeLinux32"),
            (Z[(Z.k_EPlatformTypeAndroid32 = 7)] = "k_EPlatformTypeAndroid32"),
            (Z[(Z.k_EPlatformTypeAndroid64 = 8)] = "k_EPlatformTypeAndroid64"),
            (Z[(Z.k_EPlatformTypeIOS32 = 9)] = "k_EPlatformTypeIOS32"),
            (Z[(Z.k_EPlatformTypeIOS64 = 10)] = "k_EPlatformTypeIOS64"),
            (Z[(Z.k_EPlatformTypeTVOS = 11)] = "k_EPlatformTypeTVOS"),
            (Z[(Z.k_EPlatformTypeEmbeddedClient = 12)] =
              "k_EPlatformTypeEmbeddedClient"),
            (Z[(Z.k_EPlatformTypeBrowser = 13)] = "k_EPlatformTypeBrowser"),
            (Z[(Z.k_EPlatformTypeMax = 14)] = "k_EPlatformTypeMax"),
            Z
          ))(oi || {}),
          Ye = r(20194),
          Xe = r(54806),
          pe = r(75233),
          li = r(51614),
          we = r(72604),
          be = r(42993),
          Qr = r(35038),
          De = r(68312),
          Ii = r(33512),
          Ot = r(80613),
          C = r.n(Ot),
          m = r(75245);
        class wr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              wr.prototype.client_instanceid || m.Sg(wr.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wr.sm_m ||
                (wr.sm_m = {
                  proto: wr,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                  },
                }),
              wr.sm_m
            );
          }
          static MBF() {
            return wr.sm_mbf || (wr.sm_mbf = m.w0(wr.M())), wr.sm_mbf;
          }
          toObject(i = !1) {
            return wr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(wr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(wr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new wr();
            return wr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(wr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return wr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(wr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              wr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Request";
          }
        }
        class br extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              br.prototype.protocol_version || m.Sg(br.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              br.sm_m ||
                (br.sm_m = {
                  proto: br,
                  fields: {
                    protocol_version: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    os: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                  },
                }),
              br.sm_m
            );
          }
          static MBF() {
            return br.sm_mbf || (br.sm_mbf = m.w0(br.M())), br.sm_mbf;
          }
          toObject(i = !1) {
            return br.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(br.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(br.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new br();
            return br.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(br.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return br.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(br.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              br.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientLogonInfo_Response";
          }
        }
        class Vr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Vr.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new Vr();
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Vr();
            return Vr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Vr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Vr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Request";
          }
        }
        class vr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              vr.prototype.sessions || m.Sg(vr.M()),
              Ot.Message.initialize(this, i, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vr.sm_m ||
                (vr.sm_m = {
                  proto: vr,
                  fields: {
                    sessions: { n: 1, c: ur, r: !0, q: !0 },
                    refetch_interval_sec: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              vr.sm_m
            );
          }
          static MBF() {
            return vr.sm_mbf || (vr.sm_mbf = m.w0(vr.M())), vr.sm_mbf;
          }
          toObject(i = !1) {
            return vr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(vr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(vr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new vr();
            return vr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(vr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return vr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(vr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              vr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response";
          }
        }
        class ur extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              ur.prototype.client_instanceid || m.Sg(ur.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ur.sm_m ||
                (ur.sm_m = {
                  proto: ur,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    protocol_version: {
                      n: 2,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    os_name: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    machine_name: {
                      n: 4,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    os_type: { n: 5, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                    device_type: {
                      n: 6,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    realm: { n: 7, br: m.qM.readInt32, bw: m.gp.writeInt32 },
                  },
                }),
              ur.sm_m
            );
          }
          static MBF() {
            return ur.sm_mbf || (ur.sm_mbf = m.w0(ur.M())), ur.sm_mbf;
          }
          toObject(i = !1) {
            return ur.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(ur.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(ur.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new ur();
            return ur.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(ur.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return ur.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(ur.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              ur.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetAllClientLogonInfo_Response_Session";
          }
        }
        class Sr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Sr.prototype.client_instanceid || m.Sg(Sr.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Sr.sm_m ||
                (Sr.sm_m = {
                  proto: Sr,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                  },
                }),
              Sr.sm_m
            );
          }
          static MBF() {
            return Sr.sm_mbf || (Sr.sm_mbf = m.w0(Sr.M())), Sr.sm_mbf;
          }
          toObject(i = !1) {
            return Sr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(Sr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(Sr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Sr();
            return Sr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(Sr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Sr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(Sr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Sr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Request";
          }
        }
        class dr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              dr.prototype.package_version || m.Sg(dr.M()),
              Ot.Message.initialize(this, i, 0, -1, [7, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              dr.sm_m ||
                (dr.sm_m = {
                  proto: dr,
                  fields: {
                    package_version: {
                      n: 1,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    os: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                    machine_name: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    ip_public: {
                      n: 4,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    ip_private: {
                      n: 5,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    bytes_available: {
                      n: 6,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    running_games: { n: 7, c: Or, r: !0, q: !0 },
                    protocol_version: {
                      n: 8,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    clientcomm_version: {
                      n: 9,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    local_users: {
                      n: 10,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                  },
                }),
              dr.sm_m
            );
          }
          static MBF() {
            return dr.sm_mbf || (dr.sm_mbf = m.w0(dr.M())), dr.sm_mbf;
          }
          toObject(i = !1) {
            return dr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(dr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(dr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new dr();
            return dr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(dr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return dr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(dr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              dr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData";
          }
        }
        class Or extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Or.prototype.appid || m.Sg(Or.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Or.sm_m ||
                (Or.sm_m = {
                  proto: Or,
                  fields: {
                    appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    extra_info: {
                      n: 2,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    time_running_sec: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Or.sm_m
            );
          }
          static MBF() {
            return Or.sm_mbf || (Or.sm_mbf = m.w0(Or.M())), Or.sm_mbf;
          }
          toObject(i = !1) {
            return Or.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(Or.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(Or.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Or();
            return Or.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(Or.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Or.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(Or.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Or.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_ClientData_RunningGames";
          }
        }
        class zr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              zr.prototype.client_info || m.Sg(zr.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zr.sm_m ||
                (zr.sm_m = {
                  proto: zr,
                  fields: { client_info: { n: 1, c: dr } },
                }),
              zr.sm_m
            );
          }
          static MBF() {
            return zr.sm_mbf || (zr.sm_mbf = m.w0(zr.M())), zr.sm_mbf;
          }
          toObject(i = !1) {
            return zr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(zr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(zr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new zr();
            return zr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(zr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return zr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(zr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              zr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientInfo_Response";
          }
        }
        class mr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              mr.prototype.fields || m.Sg(mr.M()),
              Ot.Message.initialize(this, i, 0, -1, [6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mr.sm_m ||
                (mr.sm_m = {
                  proto: mr,
                  fields: {
                    fields: { n: 1, br: m.qM.readString, bw: m.gp.writeString },
                    filters: {
                      n: 2,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    client_instanceid: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    include_client_info: {
                      n: 4,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    language: {
                      n: 5,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    filter_appids: {
                      n: 6,
                      r: !0,
                      q: !0,
                      br: m.qM.readUint32,
                      pbr: m.qM.readPackedUint32,
                      bw: m.gp.writeRepeatedUint32,
                    },
                  },
                }),
              mr.sm_m
            );
          }
          static MBF() {
            return mr.sm_mbf || (mr.sm_mbf = m.w0(mr.M())), mr.sm_mbf;
          }
          toObject(i = !1) {
            return mr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(mr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(mr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new mr();
            return mr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(mr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return mr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(mr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              mr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Request";
          }
        }
        class fr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              fr.prototype.bytes_available || m.Sg(fr.M()),
              Ot.Message.initialize(this, i, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fr.sm_m ||
                (fr.sm_m = {
                  proto: fr,
                  fields: {
                    bytes_available: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    apps: { n: 2, c: Tr, r: !0, q: !0 },
                    client_info: { n: 3, c: dr },
                    refetch_interval_sec_full: {
                      n: 4,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    refetch_interval_sec_changing: {
                      n: 5,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    refetch_interval_sec_updating: {
                      n: 6,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              fr.sm_m
            );
          }
          static MBF() {
            return fr.sm_mbf || (fr.sm_mbf = m.w0(fr.M())), fr.sm_mbf;
          }
          toObject(i = !1) {
            return fr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(fr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(fr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new fr();
            return fr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(fr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return fr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(fr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              fr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response";
          }
        }
        class Tr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Tr.prototype.appid || m.Sg(Tr.M()),
              Ot.Message.initialize(this, i, 0, -1, [17], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tr.sm_m ||
                (Tr.sm_m = {
                  proto: Tr,
                  fields: {
                    appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    app: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                    category: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    app_type: {
                      n: 4,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                    num_downloading: {
                      n: 8,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    bytes_download_rate: {
                      n: 11,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    bytes_downloaded: {
                      n: 12,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    bytes_to_download: {
                      n: 13,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    dlcs: { n: 17, c: Er, r: !0, q: !0 },
                    favorite: { n: 18, br: m.qM.readBool, bw: m.gp.writeBool },
                    auto_update: {
                      n: 19,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    installed: { n: 20, br: m.qM.readBool, bw: m.gp.writeBool },
                    download_paused: {
                      n: 21,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    changing: { n: 22, br: m.qM.readBool, bw: m.gp.writeBool },
                    available_on_platform: {
                      n: 23,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    bytes_staged: {
                      n: 24,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    bytes_to_stage: {
                      n: 25,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    bytes_required: {
                      n: 26,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    source_buildid: {
                      n: 27,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    target_buildid: {
                      n: 28,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    estimated_seconds_remaining: {
                      n: 29,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    queue_position: {
                      n: 30,
                      d: -1,
                      br: m.qM.readInt32,
                      bw: m.gp.writeInt32,
                    },
                    uninstalling: {
                      n: 31,
                      br: m.qM.readBool,
                      bw: m.gp.writeBool,
                    },
                    rt_time_scheduled: {
                      n: 32,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    running: { n: 33, br: m.qM.readBool, bw: m.gp.writeBool },
                    update_percentage: {
                      n: 34,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Tr.sm_m
            );
          }
          static MBF() {
            return Tr.sm_mbf || (Tr.sm_mbf = m.w0(Tr.M())), Tr.sm_mbf;
          }
          toObject(i = !1) {
            return Tr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(Tr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(Tr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Tr();
            return Tr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(Tr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Tr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(Tr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Tr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData";
          }
        }
        class Er extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Er.prototype.appid || m.Sg(Er.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Er.sm_m ||
                (Er.sm_m = {
                  proto: Er,
                  fields: {
                    appid: { n: 1, br: m.qM.readUint32, bw: m.gp.writeUint32 },
                    app: { n: 2, br: m.qM.readString, bw: m.gp.writeString },
                    installed: {
                      n: 3,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                  },
                }),
              Er.sm_m
            );
          }
          static MBF() {
            return Er.sm_mbf || (Er.sm_mbf = m.w0(Er.M())), Er.sm_mbf;
          }
          toObject(i = !1) {
            return Er.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(Er.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(Er.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Er();
            return Er.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(Er.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Er.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(Er.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Er.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_GetClientAppList_Response_AppData_DLCData";
          }
        }
        class gr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              gr.prototype.appid || m.Sg(gr.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gr.sm_m ||
                (gr.sm_m = {
                  proto: gr,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                  },
                }),
              gr.sm_m
            );
          }
          static MBF() {
            return gr.sm_mbf || (gr.sm_mbf = m.w0(gr.M())), gr.sm_mbf;
          }
          toObject(i = !1) {
            return gr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(gr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(gr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new gr();
            return gr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(gr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return gr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(gr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              gr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Request";
          }
        }
        class qr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return qr.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new qr();
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new qr();
            return qr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return qr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              qr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_InstallClientApp_Response";
          }
        }
        class Br extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Br.prototype.appid || m.Sg(Br.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Br.sm_m ||
                (Br.sm_m = {
                  proto: Br,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 2,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                  },
                }),
              Br.sm_m
            );
          }
          static MBF() {
            return Br.sm_mbf || (Br.sm_mbf = m.w0(Br.M())), Br.sm_mbf;
          }
          toObject(i = !1) {
            return Br.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(Br.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(Br.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Br();
            return Br.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(Br.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Br.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(Br.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Br.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Request";
          }
        }
        class _r extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return _r.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new _r();
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new _r();
            return _r.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return _r.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              _r.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_UninstallClientApp_Response";
          }
        }
        class jr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              jr.prototype.appid || m.Sg(jr.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jr.sm_m ||
                (jr.sm_m = {
                  proto: jr,
                  fields: {
                    appid: {
                      n: 1,
                      q: !0,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    action: {
                      n: 2,
                      q: !0,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    client_instanceid: {
                      n: 3,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                  },
                }),
              jr.sm_m
            );
          }
          static MBF() {
            return jr.sm_mbf || (jr.sm_mbf = m.w0(jr.M())), jr.sm_mbf;
          }
          toObject(i = !1) {
            return jr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(jr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(jr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new jr();
            return jr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(jr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return jr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(jr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              jr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Request";
          }
        }
        class hr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              hr.prototype.client_instanceid || m.Sg(hr.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              hr.sm_m ||
                (hr.sm_m = {
                  proto: hr,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    appid: {
                      n: 2,
                      q: !0,
                      br: m.qM.readUint32,
                      bw: m.gp.writeUint32,
                    },
                    query_params: {
                      n: 3,
                      br: m.qM.readString,
                      bw: m.gp.writeString,
                    },
                  },
                }),
              hr.sm_m
            );
          }
          static MBF() {
            return hr.sm_mbf || (hr.sm_mbf = m.w0(hr.M())), hr.sm_mbf;
          }
          toObject(i = !1) {
            return hr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(hr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(hr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new hr();
            return hr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(hr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return hr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(hr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              hr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Request";
          }
        }
        class Cr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return Cr.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new Cr();
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Cr();
            return Cr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Cr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Cr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_LaunchClientApp_Response";
          }
        }
        class te extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return te.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new te();
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new te();
            return te.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return te.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_SetClientAppUpdateState_Response";
          }
        }
        class Dr extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(),
              Dr.prototype.client_instanceid || m.Sg(Dr.M()),
              Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dr.sm_m ||
                (Dr.sm_m = {
                  proto: Dr,
                  fields: {
                    client_instanceid: {
                      n: 1,
                      br: m.qM.readUint64String,
                      bw: m.gp.writeUint64String,
                    },
                    enable: { n: 2, br: m.qM.readBool, bw: m.gp.writeBool },
                  },
                }),
              Dr.sm_m
            );
          }
          static MBF() {
            return Dr.sm_mbf || (Dr.sm_mbf = m.w0(Dr.M())), Dr.sm_mbf;
          }
          toObject(i = !1) {
            return Dr.toObject(i, this);
          }
          static toObject(i, g) {
            return m.BT(Dr.M(), i, g);
          }
          static fromObject(i) {
            return m.Uq(Dr.M(), i);
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new Dr();
            return Dr.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return m.zj(Dr.MBF(), i, g);
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return Dr.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {
            m.i0(Dr.M(), i, g);
          }
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              Dr.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Request";
          }
        }
        class re extends Ot.Message {
          static ImplementsStaticInterface() {}
          constructor(i = null) {
            super(), Ot.Message.initialize(this, i, 0, -1, void 0, null);
          }
          toObject(i = !1) {
            return re.toObject(i, this);
          }
          static toObject(i, g) {
            return i ? { $jspbMessageInstance: g } : {};
          }
          static fromObject(i) {
            return new re();
          }
          static deserializeBinary(i) {
            let g = new (C().BinaryReader)(i),
              Y = new re();
            return re.deserializeBinaryFromReader(Y, g);
          }
          static deserializeBinaryFromReader(i, g) {
            return i;
          }
          serializeBinary() {
            var i = new (C().BinaryWriter)();
            return re.serializeBinaryToWriter(this, i), i.getResultBuffer();
          }
          static serializeBinaryToWriter(i, g) {}
          serializeBase64String() {
            var i = new (C().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, i), i.getResultBase64String()
            );
          }
          getClassName() {
            return "CClientComm_EnableOrDisableDownloads_Response";
          }
        }
        var ve;
        ((Z) => {
          function i(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.GetClientLogonInfo#1",
              (0, Qr.I8)(wr, Et, Zt),
              br,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetClientLogonInfo = i;
          function g(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, Qr.I8)(Vr, Et, Zt),
              vr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetAllClientLogonInfo = g;
          function Y(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.GetClientInfo#1",
              (0, Qr.I8)(Sr, Et, Zt),
              zr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetClientInfo = Y;
          function it(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, Qr.I8)(mr, Et, Zt),
              fr,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Z.GetClientAppList = it;
          function lt(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, Qr.I8)(gr, Et, Zt),
              qr,
              { ePrivilege: 1 },
            );
          }
          Z.InstallClientApp = lt;
          function ht(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, Qr.I8)(Br, Et, Zt),
              _r,
              { ePrivilege: 1 },
            );
          }
          Z.UninstallClientApp = ht;
          function Pt(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, Qr.I8)(hr, Et, Zt),
              Cr,
              { ePrivilege: 1 },
            );
          }
          Z.LaunchClientApp = Pt;
          function Dt(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, Qr.I8)(jr, Et, Zt),
              te,
              { ePrivilege: 1 },
            );
          }
          Z.SetClientAppUpdateState = Dt;
          function It(Wt, Et, Zt) {
            return Wt.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, Qr.I8)(Dr, Et, Zt),
              re,
              { ePrivilege: 1 },
            );
          }
          Z.EnableOrDisableDownloads = It;
        })(ve || (ve = {}));
        const Ae = "RemoteDownload_OnlineClient",
          ci = "RemoteDownload_ClientAppList",
          Re = "RemoteDownload_ClientAppData",
          ui = "RemoteDownload_PatchNotes";
        class Ve extends Error {
          constructor(i, g) {
            super(i), (this.result = g);
          }
          result;
        }
        function Ge() {
          const Z = (0, De.KV)(),
            i = (0, be.LH)();
          return (0, Ye.I)({
            queryKey: [Ae, i],
            queryFn: async () => {
              const Y = Qr.w.Init(Vr),
                it = await ve.GetAllClientLogonInfo(Z, Y);
              if (it.GetEResult() !== we.R)
                throw (
                  (console.error(
                    "Received error from GetAllClientLogonInfo",
                    it.GetEResult(),
                    it.Hdr().transport_error(),
                  ),
                  new Error(
                    `Error from GetAllClientLogonInfo: ${it.GetEResult()}`,
                  ))
                );
              const lt = [];
              for (const ht of it.Body().sessions())
                ht.device_type() !== f.eSB && lt.push(ht.toObject());
              return {
                sessions: lt,
                refetchInterval: it.Body().refetch_interval_sec() || 300,
              };
            },
            staleTime: 300 * 1e3,
            refetchInterval: (Y) =>
              (Y.state.data?.refetchInterval || 300) * 1e3,
          });
        }
        class di {
          constructor(i) {
            Object.assign(this, i.toObject()),
              (this.bytes_to_download = parseInt(i.bytes_to_download() ?? "0")),
              (this.bytes_downloaded = parseInt(i.bytes_downloaded() ?? "0")),
              (this.bytes_staged = parseInt(i.bytes_staged() ?? "0")),
              (this.bytes_to_stage = parseInt(i.bytes_to_stage() ?? "0")),
              (this.bytes_required = parseInt(i.bytes_required() ?? "0"));
          }
          appid;
          app;
          category;
          app_type;
          num_downloading;
          bytes_download_rate;
          bytes_downloaded;
          bytes_to_download;
          favorite;
          auto_update;
          installed;
          download_paused;
          changing;
          available_on_platform;
          bytes_staged;
          bytes_to_stage;
          bytes_required;
          source_buildid;
          target_buildid;
          estimated_seconds_remaining;
          queue_position;
          uninstalling;
          rt_time_scheduled;
          update_percentage;
          BIsDownloading() {
            return this.num_downloading !== void 0 && this.num_downloading > 0;
          }
          SetDownloading() {
            (this.num_downloading = 1), (this.download_paused = !1);
          }
          SetPaused(i) {
            (this.download_paused = i), (this.num_downloading = i ? 0 : 1);
          }
          BIsAtTopOfQueue() {
            return this.queue_position === 0;
          }
          BIsPaused() {
            return (
              !!this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage ||
                this.queue_position != -1)
            );
          }
          BHasPendingUpdate() {
            return (
              !this.BIsDownloading() &&
              !this.download_paused &&
              (this.bytes_downloaded < this.bytes_to_download ||
                this.bytes_staged < this.bytes_to_stage)
            );
          }
          GetPercentComplete() {
            return this.update_percentage
              ? this.update_percentage
              : this.bytes_to_download
                ? Math.floor(
                    (this.bytes_downloaded * 100) / this.bytes_to_download,
                  )
                : 0;
          }
        }
        async function qe(Z, i, g) {
          const Y = i.client_instanceid,
            it = Qr.w.Init(mr);
          it.Body().set_fields("games"),
            it.Body().set_filters(g),
            it.Body().set_client_instanceid(Y),
            it.Body().set_include_client_info(!0);
          const lt = await ve.GetClientAppList(Z, it);
          if (lt.GetEResult() !== we.R)
            throw (
              (console.error(
                "Received error from GetClientAppList",
                lt.GetEResult(),
                lt.Hdr().transport_error(),
              ),
              new Ve(
                `Error from GetClientAppList: ${lt.GetEResult()}`,
                lt.GetEResult(),
              ))
            );
          const ht = new Map();
          for (const Pt of lt.Body().apps()) {
            const Dt = new di(Pt);
            ht.set(Pt.appid(), Dt);
          }
          return {
            session: i,
            mapApps: ht,
            clientInfo: lt.Body().client_info()?.toObject(),
            refetchIntervals: {
              full: lt.Body().refetch_interval_sec_full() || 3600,
              changing: lt.Body().refetch_interval_sec_changing() || 60,
              updating: lt.Body().refetch_interval_sec_updating() || 10,
            },
          };
        }
        async function mi(Z, i, g, Y) {
          if (!Y) return;
          const it = await qe(Z, i, g);
          for (const [lt, ht] of it.mapApps) Y.mapApps.set(lt, ht);
          return { ...it, mapApps: Y.mapApps };
        }
        function We(Z, i, g) {
          return [ci, Z, i, g];
        }
        function _e(Z, i = !0) {
          const g = Ge(),
            Y = (0, De.KV)(),
            it = (0, be.LH)(),
            lt = (Et) => {
              i && (Et.result == we.Dy || Et.result == we._3) && g.refetch();
            },
            ht = (0, Xe.E)({
              queries: (g.data?.sessions || []).map((Et) => ({
                queryKey: We(it, Et.client_instanceid, "none"),
                queryFn: async () => qe(Y, Et, "none"),
                staletime: 3600 * 1e3,
                refetchInterval: (Zt) =>
                  (Zt.state.data?.refetchIntervals.full || 3600) * 1e3,
                enabled: g.isSuccess && !g.isFetching,
                onError: lt,
                retry: i,
              })),
            }),
            Pt = (0, c.useCallback)(
              (Et) => {
                if (!Z) return Et;
                const Zt = new Map(
                  Array.from(Et?.mapApps.entries() ?? []).filter(Z),
                );
                return { ...Et, mapApps: Zt };
              },
              [Z],
            ),
            Dt = (0, pe.jE)(),
            It = (0, Xe.E)({
              queries: (g.data?.sessions || []).map((Et, Zt) => ({
                queryKey: We(it, Et.client_instanceid, "changing"),
                queryFn: async () => mi(Y, Et, "changing", ht[Zt].data),
                enabled: ht[Zt].isSuccess && !ht[Zt].isFetching,
                staletime: 10 * 1e3,
                select: Pt,
                refetchInterval: (Ui) => {
                  const Qe = Ui.state.data;
                  if (!Qe) return 60 * 1e3;
                  let ii = !1;
                  for (const ni of Qe.mapApps.values())
                    if (ni.BIsDownloading() || ni.uninstalling) {
                      ii = !0;
                      break;
                    }
                  const si = Qe.refetchIntervals;
                  return (ii ? si.updating : si.changing) * 1e3;
                },
                onError: lt,
                retry: i,
              })),
            }),
            Wt = () => {
              for (const Et of g.data?.sessions || []) {
                const Zt = We(it, Et.client_instanceid, "changing");
                Dt.removeQueries({ queryKey: Zt });
              }
              for (const Et of ht) Et.refetch();
            };
          return {
            rgQueries: It.map((Et, Zt) =>
              ht[Zt].isError && !ht[Zt].isFetching ? ht[Zt] : Et,
            ),
            refetch: Wt,
          };
        }
        function Be(Z, i) {
          return [Re, Z, i];
        }
        function xe(Z, i = !0) {
          const g = (0, be.LH)(),
            { rgQueries: Y } = _e(void 0, i);
          return (0, Ye.I)({
            queryKey: Be(g, Z),
            queryFn: () => {
              const it = new Map();
              for (const lt of Y)
                if (lt.isSuccess) {
                  const ht = lt.data?.session?.client_instanceid,
                    Dt = lt.data?.mapApps?.get(Z);
                  Dt &&
                    it.set(ht, {
                      session: lt.data.session,
                      app: Dt,
                      clientInfo: lt.data.clientInfo,
                    });
                }
              return it;
            },
            enabled: Y.reduce(
              (it, lt) => it && lt.isSuccess && !lt.isFetching,
              !0,
            ),
            staleTime: 0,
            gcTime: 0,
          });
        }
        function Fi(Z, i, g) {
          const Y = useActiveAccount(),
            it = useActiveServiceTransport();
          return useQuery({
            queryKey: [ui, Y, Z, i, g],
            queryFn: async () => {
              if (!i || !g || i == g) return {};
              const ht = CProtoBufMsg.Init(
                  CClan_GetPartnerEventsByBuildIDRange_Request,
                ),
                Pt = ht.Body().add_requests();
              Pt.set_appid(Z),
                Pt.set_start_build_id(i + 1),
                ht.Body().set_count(100);
              const Dt = await ClanService.GetPartnerEventsByBuildIDRange(
                it,
                ht,
              );
              if (Dt.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from GetPartnerEventsByBuildIDRange",
                    Dt.GetEResult(),
                  ),
                  new Error(
                    `Error from GetPartnerEventsByBuildIDRange: ${Dt.GetEResult()}`,
                  ))
                );
              return {
                appid: Z,
                source_buildid: i,
                target_buildid: g,
                patch_notes: Dt.Body()
                  .toObject()
                  .matches?.sort((It, Wt) => Wt.build_id - It.build_id),
              };
            },
          });
        }
        function fi(Z, i, g) {
          const Y = (0, De.KV)(),
            it = xe(Z),
            lt = (0, be.LH)(),
            ht = (0, pe.jE)();
          return (0, li.n)({
            mutationFn: async () => {
              const Pt = Qr.w.Init(gr);
              Pt.Body().set_appid(Z), Pt.Body().set_client_instanceid(i);
              const Dt = await ve.InstallClientApp(Y, Pt);
              if (Dt.GetEResult() != we.R)
                throw (
                  (console.error(
                    "Received error from InstallClientApp",
                    Dt.GetEResult(),
                  ),
                  new Error(`Error from InstallClientApp: ${Dt.GetEResult()}`))
                );
              const It = it?.data;
              It && It.get(i) && It.get(i).app.SetDownloading(),
                ht.setQueryData(Be(lt, Z), It),
                it.refetch();
            },
            onSuccess: g,
          });
        }
        function Li(Z, i, g) {
          const Y = useActiveServiceTransport(),
            it = xe(Z),
            lt = useActiveAccount(),
            ht = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Pt = CProtoBufMsg.Init(
                CClientComm_UninstallClientApp_Request,
              );
              Pt.Body().set_appid(Z), Pt.Body().set_client_instanceid(i);
              const Dt = await ClientCommService.UninstallClientApp(Y, Pt);
              if (Dt.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from UninstallClientApp",
                    Dt.GetEResult(),
                  ),
                  new Error(
                    `Error from UninstallClientApp: ${Dt.GetEResult()}`,
                  ))
                );
              const It = it?.data;
              It && It.get(i) && (It.get(i).app.uninstalling = !0),
                ht.setQueryData(Be(lt, Z), It),
                it.refetch();
            },
            onSuccess: g,
          });
        }
        function Ni(Z, i, g) {
          const Y = useActiveServiceTransport(),
            it = xe(Z),
            lt = useActiveAccount(),
            ht = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Pt = it?.data,
                Dt = Pt && Pt.get(i),
                It = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
              It.Body().set_appid(Z),
                It.Body().set_client_instanceid(i),
                It.Body().set_action(1);
              const Wt = await ClientCommService.SetClientAppUpdateState(Y, It);
              if (Wt.GetEResult() != k_EResultOK)
                throw (
                  (console.error(
                    "Received error from SetClientAppUpdateState",
                    Wt.GetEResult(),
                  ),
                  new Error(
                    `Error from SetClientAppUpdateState: ${Wt.GetEResult()}`,
                  ))
                );
              Dt && Pt.get(i).app.SetDownloading(),
                ht.setQueryData(Be(lt, Z), Pt),
                it.refetch();
            },
            onSuccess: g,
          });
        }
        function ki(Z, i, g, Y) {
          const it = useActiveServiceTransport(),
            lt = xe(Z),
            ht = useActiveAccount(),
            Pt = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const Dt = lt?.data,
                It = Dt && Dt.get(i);
              if (
                It?.clientInfo?.clientcomm_version &&
                It.clientInfo.clientcomm_version >= 1
              ) {
                const Wt = CProtoBufMsg.Init(
                  CClientComm_EnableOrDisableDownloads_Request,
                );
                Wt.Body().set_client_instanceid(i), Wt.Body().set_enable(!g);
                const Et = await ClientCommService.EnableOrDisableDownloads(
                  it,
                  Wt,
                );
                if (Et.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from EnableOrDisableDownloads",
                      Et.GetEResult(),
                    ),
                    new Error(
                      `Error from EnableOrDisableDownloads: ${Et.GetEResult()}`,
                    ))
                  );
              } else {
                const Wt = CProtoBufMsg.Init(
                  CClientComm_SetClientAppUpdateState_Request,
                );
                Wt.Body().set_appid(Z),
                  Wt.Body().set_client_instanceid(i),
                  Wt.Body().set_action(g ? 0 : 1);
                const Et = await ClientCommService.SetClientAppUpdateState(
                  it,
                  Wt,
                );
                if (Et.GetEResult() != k_EResultOK)
                  throw (
                    (console.error(
                      "Received error from SetClientAppUpdateState",
                      Et.GetEResult(),
                    ),
                    new Error(
                      `Error from SetClientAppUpdateState: ${Et.GetEResult()}`,
                    ))
                  );
              }
              It && Dt.get(i)?.app.SetPaused(g),
                Pt.setQueryData(Be(ht, Z), Dt),
                lt.refetch();
            },
            onSuccess: Y,
          });
        }
        async function Ki(Z, i, g, Y) {
          const it = CProtoBufMsg.Init(CClientComm_LaunchClientApp_Request);
          it.Body().set_appid(g),
            it.Body().set_client_instanceid(i),
            it.Body().set_query_params(Y);
          const lt = await ClientCommService.LaunchClientApp(Z, it);
          if (lt.GetEResult() !== k_EResultOK)
            throw (
              (console.error(
                "Received error from LaunchClientApp",
                lt.GetEResult(),
                lt.Hdr().transport_error(),
              ),
              new Error(`Error from LaunchClientApp: ${lt.GetEResult()}`))
            );
        }
        var gi = r(25792),
          Bi = r(16346),
          Hr = r(18210),
          yi = r(99047),
          Mi = r(58579),
          Ce = r.n(Mi);
        const wi = {
          bFitToWindow: !0,
          bOverlapHorizontal: !0,
          bMatchWidth: !1,
          bShiftToFitWindow: !0,
          bDisablePopTop: !0,
        };
        function bi(Z) {
          const { setRemoteClientID: i, rgSessions: g } = Z,
            Y = (0, c.useCallback)(
              (it) => {
                g?.length &&
                  (0, Bi.lX)(
                    (0, a.jsx)(vi, {
                      sessions: g,
                      setRemoteDownloadClientId: i,
                    }),
                    it,
                    wi,
                  );
              },
              [i, g],
            );
          return g?.length
            ? (0, a.jsx)("button", {
                onClick: Y,
                className: Ce().ClientSelectDropdown,
                children: (0, a.jsx)(Oi, {}),
              })
            : null;
        }
        function vi({ sessions: Z, setRemoteDownloadClientId: i }) {
          return (0, a.jsx)("ul", {
            className: Ce().ClientListDropdownMenu,
            children: Z.map((g) =>
              (0, a.jsx)(
                yi.kt,
                {
                  onSelected: () => {
                    i(g.client_instanceid);
                  },
                  children: (0, Hr.we)(
                    "#GamesList_Client_Indicator",
                    Si(g.device_type) ?? "",
                    g.machine_name,
                  ),
                },
                g.client_instanceid,
              ),
            ),
          });
        }
        function Si(Z) {
          switch (Z) {
            case f.g0U:
              return (0, Hr.we)("#Library_DeviceType_PC");
            case f.LS$:
              return (0, Hr.we)("#Library_DeviceType_SteamDeck");
            case f.bOm:
              return (0, Hr.we)("#Library_DeviceType_SteamMachine");
            case f.jYC:
              return (0, Hr.we)("#Library_DeviceType_SteamFrame");
            default:
              return;
          }
        }
        function Oi(Z) {
          return (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 13 8",
            fill: "none",
            ...Z,
            children: (0, a.jsx)("path", {
              fill: "currentColor",
              d: "M12.6128 1.7121C12.7616 1.56087 12.8428 1.3684 12.8428 1.14155C12.8428 0.687862 12.491 0.323534 12.0446 0.323534C11.8214 0.323534 11.6184 0.419772 11.4628 0.577877L6.83601 5.38975L2.22271 0.577877C2.06712 0.419772 1.85743 0.323534 1.64097 0.323534C1.19452 0.323534 0.842773 0.687862 0.842773 1.14155C0.842773 1.3684 0.923946 1.56087 1.07276 1.71211L6.21369 7.06016C6.38956 7.25264 6.60602 7.342 6.84277 7.34888C7.07953 7.34888 7.28246 7.25264 7.4651 7.06016L12.6128 1.7121Z",
            }),
          });
        }
        var ti = r(2801),
          zi = r(36118),
          Ti = r(85599),
          ri = r(98609),
          Ei = r(39285),
          ee = r.n(Ei);
        function ji(Z) {
          const { appid: i } = Z,
            g = (0, I.$5)(i),
            { data: Y } = (0, W.J$)(g),
            [it, lt, ht] = (0, d.uD)(!1),
            { mutateAsync: Pt } = (0, z.S)({ appid: i }),
            [Dt, It] = (0, c.useState)(!1),
            Wt = (0, x.S6)(i);
          return !Y || Wt
            ? null
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(y.sP, {
                    onClick: async () => {
                      try {
                        It(!0), await Pt(), (0, B.WZ)(), It(!1), lt();
                      } catch (Et) {
                        It(!1),
                          console.error(
                            "Error AddToLibraryActionWithRemoteInstall",
                            Et,
                          );
                      }
                    },
                    children: [
                      Dt && (0, a.jsx)(Ti.t, { size: "small" }),
                      (0, Hr.we)("#Sale_AddToLibrary_NoPlus"),
                    ],
                  }),
                  (0, a.jsx)(gi.tH, {
                    children: (0, a.jsx)(ti.EN, {
                      active: it,
                      children: (0, a.jsx)(ti.o0, {
                        strTitle: (0, Hr.we)("#Sale_AddedToLibrary"),
                        strDescription: (0, Hr.PP)(
                          "#Sale_AddToLibrary_DialogDesc",
                          (0, a.jsx)("span", {
                            className: ee().GameName,
                            children: Y.name || "",
                          }),
                        ),
                        closeModal: ht,
                        bAlertDialog: !0,
                        children: (0, a.jsx)(ei, { id: g }),
                      }),
                    }),
                  }),
                ],
              });
        }
        function ei(Z) {
          const { id: i } = Z,
            g = Ge(),
            [Y, it] = (0, c.useState)(0),
            [lt, ht] = (0, c.useState)(!1),
            { data: Pt } = (0, W.qI)(i);
          if (!i || !("appid" in i) || ri.TS.IN_CLIENT || !Pt) return null;
          const Dt = g.data?.sessions?.filter((It) => {
            switch (It.device_type) {
              default:
              case f.g0U:
                {
                  if (!It.os_type) return !1;
                  const Wt = Je(It.os_type);
                  if (Pt.windows && Wt.includes("Windows")) return !0;
                  if (Pt.mac && Wt.includes("Mac")) return !0;
                  if (Pt.steamos_linux && Wt.includes("Linux")) return !0;
                }
                break;
              case f.LS$:
                return Pt.windows || Pt.steamos_linux;
            }
            return !1;
          });
          if (Dt && Dt?.length > 0) {
            const It = Dt[Y];
            return (0, a.jsx)("div", {
              className: ee().RemoteOptions,
              children: lt
                ? (0, a.jsx)(Di, { session: It })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(hi, {
                        rgAcceptableSession: Dt,
                        session: It,
                        setSessionIndex: it,
                      }),
                      (0, a.jsx)("div", {
                        className: ee().ActionRow,
                        children: (0, a.jsx)(Wi, {
                          appid: i.appid,
                          session: It,
                          setRemoteDownloadRequested: ht,
                        }),
                      }),
                    ],
                  }),
            });
          }
          return null;
        }
        function hi(Z) {
          const { rgAcceptableSession: i, session: g, setSessionIndex: Y } = Z;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("div", {
                children: (0, Hr.we)("#Sale_AddToLibrary_RemoteDownload"),
              }),
              (0, a.jsxs)("div", {
                className: ee().ClientSelector,
                children: [
                  (0, a.jsx)("span", {
                    className: ee().ClientName,
                    children: g.machine_name,
                  }),
                  (0, a.jsx)(bi, {
                    rgSessions: i,
                    setRemoteClientID: (it) => {
                      const lt = i.findIndex(
                        (ht) => ht.client_instanceid === it,
                      );
                      lt >= 0 && Y(lt);
                    },
                  }),
                ],
              }),
            ],
          });
        }
        function Di(Z) {
          const { session: i } = Z;
          return (0, a.jsxs)("div", {
            className: ee().DownloadStartedCtn,
            children: [
              (0, Hr.we)("#Sale_AddToLibrary_DownloadStarted"),
              (0, a.jsx)("br", {}),
              (0, a.jsx)("a", {
                href: `${ri.TS.COMMUNITY_BASE_URL}my/games?tab=all&clientid=${i.client_instanceid}`,
                children: (0, Hr.we)("#Sale_AddToLibrary_SeeDownloadProgress"),
              }),
            ],
          });
        }
        function Wi(Z) {
          const { appid: i, session: g, setRemoteDownloadRequested: Y } = Z,
            it = fi(i, g.client_instanceid);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(y.sP, {
                onClick: () => {
                  it.mutateAsync(), Y(!0);
                },
                children: [
                  (0, a.jsx)(zi.f5X, {}),
                  (0, Hr.we)("#Button_StartDownload"),
                ],
              }),
              (0, a.jsx)("div", {
                className: ee().LearnMoreCtn,
                children: (0, a.jsx)("a", {
                  href: "https://help.steampowered.com/faqs/view/1025-BD94-12FC-3409",
                  className: ee().InlineLink,
                  children: (0, Hr.we)("#Button_Learn"),
                }),
              }),
            ],
          });
        }
        var Se = r(39905);
        function xi(Z) {
          const { id: i, className: g } = Z,
            { data: Y } = (0, W.J$)(i);
          if (!Y) return null;
          const it =
              Y.related_items?.demo_appid && Y.related_items.demo_appid
                ? Y.related_items.demo_appid
                : [],
            lt = it.length > 0,
            ht = lt || Y.type === n.uE.ue,
            Pt = ht
              ? Se.Z.Localize("#Sale_InstallDemo_ttip", Y.name || "")
              : lt
                ? Se.Z.Localize("#Sale_CannotInstallDemo_ttip", Y.name || "")
                : Se.Z.Localize("#Loading");
          if (u.TS.IN_MOBILE_WEBVIEW) {
            if (ht && lt) {
              const Dt = Y.type === n.uE.ue ? Y.appid : it[0];
              return (0, a.jsx)("div", {
                className: g,
                children: (0, a.jsx)(ji, { appid: Dt }),
              });
            }
            return null;
          }
          return !ht && lt && Y.is_free
            ? (0, a.jsx)(v.h, { id: i, className: g })
            : (0, a.jsx)(U.he, {
                toolTipContent: Pt,
                onClick: (Dt) => {
                  Dt.preventDefault(),
                    Dt.stopPropagation(),
                    ht &&
                      (0, b.o)(Y.type === n.uE.ue ? Y.appid : it[0], Y.name);
                },
                className: (0, O.A)(
                  g,
                  M().DemoButton,
                  !ht && M().DisabledButton,
                ),
                children: ht
                  ? Se.Z.Localize("#Sale_InstallDemo")
                  : Se.Z.Localize("#Sale_DemoNotFound"),
              });
        }
      },
      29245: (R, $, r) => {
        "use strict";
        r.d($, { Q: () => F });
        var a = r(7850),
          u = r(39905),
          n = r(40358),
          W = r(76532),
          b = r.n(W),
          U = r(36118),
          O = r(36707),
          v = r(72609);
        function F(M) {
          const {
              id: z,
              strClassName: f,
              bMinimizePlatforms: d,
              bHideWindows: y,
            } = M,
            { data: I } = (0, n.qI)(z);
          if (!I) return null;
          if (d) {
            let x = y
              ? null
              : I?.windows &&
                (0, a.jsx)("span", {
                  title: u.Z.Localize("#Platform_Windows"),
                  children: (0, a.jsx)(U.Xz0, {
                    "aria-label": u.Z.Localize("#Platform_Windows"),
                  }),
                });
            return (
              v.TS.PLATFORM === "linux" && I?.steamos_linux
                ? (x = (0, a.jsx)("span", {
                    title: u.Z.Localize("#Platform_Linux"),
                    children: (0, a.jsx)(U.Qte, {
                      "aria-label": u.Z.Localize("#Platform_Linux"),
                    }),
                  }))
                : v.TS.PLATFORM === "macos" && I?.mac
                  ? (x = (0, a.jsx)("span", {
                      title: u.Z.Localize("#Platform_Mac"),
                      children: (0, a.jsx)(U.kPc, {
                        "aria-label": u.Z.Localize("#Platform_Mac"),
                      }),
                    }))
                  : I.vr_support?.vrhmd &&
                    (x = (0, a.jsx)("span", {
                      title: u.Z.Localize("#Platform_VR"),
                      children: (0, a.jsx)(U.VR, {
                        "aria-label": u.Z.Localize("#Platform_VR"),
                      }),
                    })),
              x
                ? (0, a.jsx)("span", {
                    className: (0, O.A)(b().CapsulePlatform, f),
                    children: x,
                  })
                : null
            );
          }
          return (0, a.jsxs)("span", {
            className: (0, O.A)(b().CapsulePlatform, f),
            children: [
              !y &&
                I.windows &&
                (0, a.jsx)("span", {
                  title: u.Z.Localize("#Platform_Windows"),
                  children: (0, a.jsx)(U.Xz0, {
                    "aria-label": u.Z.Localize("#Platform_Windows"),
                  }),
                }),
              I.mac &&
                (0, a.jsx)("span", {
                  title: u.Z.Localize("#Platform_Mac"),
                  children: (0, a.jsx)(U.kPc, {
                    "aria-label": u.Z.Localize("#Platform_Mac"),
                  }),
                }),
              I.steamos_linux &&
                (0, a.jsx)("span", {
                  title: u.Z.Localize("#Platform_Linux"),
                  children: (0, a.jsx)(U.Qte, {
                    "aria-label": u.Z.Localize("#Platform_Linux"),
                  }),
                }),
              I.vr_support?.vrhmd &&
                (0, a.jsx)("span", {
                  title: u.Z.Localize("#Platform_VR"),
                  children: (0, a.jsx)(U.VR, {
                    "aria-label": u.Z.Localize("#Platform_VR"),
                  }),
                }),
            ],
          });
        }
      },
      48357: (R, $, r) => {
        "use strict";
        r.d($, { Bq: () => k, NF: () => l });
        var a = r(7850),
          u = r(3367),
          n = r(3348),
          W = r(81055),
          b = r(40358),
          U = r(11512),
          O = r(76532),
          v = r.n(O),
          F = r(36118),
          M = r(249),
          z = r(71421),
          f = r(36707),
          d = r(39905),
          y = r(74107),
          I = r(72609),
          x = r(33220),
          B = r(86681),
          c = r(1706);
        function l(o) {
          const { id: w, bSelfPurchaseOption: V } = o,
            { data: q } = (0, b.Q_)(w),
            { data: E } = (0, b.J$)(w);
          if (!E) return null;
          const K = V && E.item_type == u.c6.RD ? E.self_purchase_option : q;
          return (0, a.jsx)(e, { purchaseOption: K, ...o });
        }
        function e(o) {
          const {
              bSingleLineMode: w,
              onlyOneDiscountPct: V,
              id: q,
              purchaseOption: E,
              bHidePrePurchase: K,
              bHideReleaseDate: ct,
              bHideIfDemo: xt,
              bPurchaseOptionDisplay: Ft,
              strContainerClassName: kt,
              strDiscountAndPriceClassName: nr,
              strPriceFormattedClassName: Mt,
              bPreferWholeNumbers: j,
              bSelfPurchaseOption: J,
              bHideNewTag: H,
              bPrePurchaseBesidePrice: T,
            } = o,
            D = I.TS.NOW,
            { data: S } = (0, b.by)(q),
            { data: h } = (0, b.J$)(q);
          if (!h) return null;
          const N = E,
            A = !H && (0, W.fk)(S, D),
            tt = (0, f.A)({
              [v().StoreSalePriceWidgetContainer]: !0,
              [v().SingleLineMode]: w,
              StoreSalePriceWidgetContainer: !0,
              [v().NewItem]: A,
              [v().PurchaseOption]: Ft,
              [kt ?? ""]: !!kt,
            });
          if (o.bShowInLibrary)
            return (0, a.jsx)("div", {
              className: tt,
              children: (0, a.jsx)("div", {
                className: v().StoreSalePriceBox,
                children: d.Z.Localize("#EventDisplay_CallToAction_InLibrary"),
              }),
            });
          if (S && S.is_coming_soon && (!N || (!N.packageid && !N.bundleid))) {
            if (ct) return null;
            const Kt =
              S.coming_soon_display &&
              ["text_comingsoon", "text_tba"].includes(S.coming_soon_display)
                ? (0, U.d)(S)
                : d.Z.Localize(
                    "#EventDisplay_CallToAction_ComingSoon_Date",
                    (0, n.CC)(S),
                  );
            return (0, a.jsx)("div", {
              className: tt,
              children: (0, a.jsx)("div", {
                className: v().StoreSalePriceBox,
                children: Kt,
              }),
            });
          }
          if (h.is_free)
            if (h.is_free_temporarily) {
              if (N && N.is_free_to_keep && !N.formatted_original_price)
                return (0, a.jsx)("div", {
                  className: tt,
                  children: (0, a.jsx)("div", {
                    className: v().StoreSalePriceBox,
                    children: d.Z.Localize("#EventDisplay_CallToAction_Free"),
                  }),
                });
            } else
              return h.item_type == u.c6.qI && h.type == u.uE.ue
                ? xt
                  ? null
                  : (0, a.jsxs)("div", {
                      className: tt,
                      children: [
                        A &&
                          (0, a.jsx)("div", {
                            className: v().StoreSaleNewItem,
                            children: d.Z.Localize("#Flag_New"),
                          }),
                        (0, a.jsx)("div", {
                          className: v().StoreSalePriceBox,
                          children: d.Z.Localize(
                            "#EventDisplay_CallToAction_FreeDemo",
                          ),
                        }),
                      ],
                    })
                : (0, a.jsxs)("div", {
                    className: tt,
                    children: [
                      A &&
                        (0, a.jsx)("div", {
                          className: v().StoreSaleNewItem,
                          children: d.Z.Localize("#Flag_New"),
                        }),
                      (0, a.jsx)("div", {
                        className: v().StoreSalePriceBox,
                        children: d.Z.Localize(
                          "#EventDisplay_CallToAction_FreeToPlay",
                        ),
                      }),
                    ],
                  });
          if (!N || !N.formatted_final_price) return null;
          let st = N.discount_pct || 0,
            ut = (!V && h.item_type == u.c6.xO && N.bundle_discount_pct) || 0,
            wt = N.formatted_final_price;
          if (j) {
            const Kt = (0, x.rt)(I.iA.country_code.toUpperCase()),
              yr = { ...(0, B.J)(Kt), bWholeUnitsOnly: !0 };
            wt = (0, c.d)(Number.parseInt(N.final_price_in_cents || "0"), yr);
          }
          const zt = (0, W.Nq)(S, N);
          return (0, a.jsx)(k, {
            bSingleLineMode: !!w,
            nBaseDiscountPercentage: ut,
            nDiscountPercentage: st,
            bIsPrePurchase: zt,
            strBestPurchaseOriginalPriceFormatted:
              N.formatted_original_price || "",
            strBestPurchasePriceFormatted: wt,
            bHideDiscountPercentForCompliance:
              !!N.hide_discount_pct_for_compliance,
            bShowNewFlag: A,
            bHidePrePurchase: !!K,
            bPrePurchaseBesidePrice: T,
            strDiscountAndPriceClassName: nr,
            strPriceFormattedClassName: Mt,
            bPurchaseOptionDisplay: Ft,
          });
        }
        function k(o) {
          const {
              bSingleLineMode: w,
              nDiscountPercentage: V,
              bIsPrePurchase: q,
              nBaseDiscountPercentage: E,
              strBestPurchaseOriginalPriceFormatted: K,
              strBestPurchasePriceFormatted: ct,
              bHideDiscountPercentForCompliance: xt,
              bShowNewFlag: Ft,
              bHidePrePurchase: kt,
              bPrePurchaseBesidePrice: nr,
              strDiscountAndPriceClassName: Mt,
              strPriceFormattedClassName: j,
              bPurchaseOptionDisplay: J,
            } = o,
            H = xt;
          let T;
          V &&
            (H
              ? (T = d.Z.Localize("#Discount_ARIA_Label_SpecialPrice", K))
              : (T = d.Z.Localize("#Discount_ARIA_Label", V, K, ct)));
          const D = !!((V || E) && !H),
            S = D && !!K,
            h = D && !S && J;
          return (0, a.jsxs)("div", {
            className: (0, f.A)({
              [v().StoreSalePriceWidgetContainer]: !0,
              [v().SingleLineMode]: w,
              StoreSalePriceWidgetContainer: !0,
              [v().Discounted]: !!V,
              Discounted: !!V,
              [v().PrePurchase]: !!q,
              [v().PrePurchaseBesidePrice]: !!nr,
              [v().NewItem]: !!Ft,
              [v().PurchaseOption]: J,
              [Mt ?? ""]: !!Mt,
            }),
            "aria-label": T,
            children: [
              !!(q && !kt) &&
                (0, a.jsx)("div", {
                  className: (0, f.A)(
                    v().StoreSalePrepurchaseLabel,
                    "StoreSalePrepurchaseLabel",
                  ),
                  children: (0, a.jsxs)("span", {
                    children: [
                      (0, a.jsx)(M.zD7, {}),
                      d.Z.Localize(
                        "#EventDisplay_CallToAction_Prepurchase_Short",
                      ),
                    ],
                  }),
                }),
              !!(!q && Ft) &&
                (0, a.jsx)("div", {
                  className: v().StoreSaleNewItem,
                  children: d.Z.Localize("#Flag_New"),
                }),
              !!(E && !H) &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(z.Gq, {
                      toolTipContent: d.Z.Localize(
                        "#Sale_Bundle_Discount_ttip",
                      ),
                      children: (0, a.jsx)("span", {
                        className: (0, f.A)(v().BaseDiscount),
                        children: `-${E}%`,
                      }),
                    }),
                    !!V &&
                      (0, a.jsxs)(a.Fragment, {
                        children: [
                          (0, a.jsx)("span", { children: "\xA0" }),
                          (0, a.jsx)(z.Gq, {
                            toolTipContent: d.Z.Localize(
                              "#Sale_Bundle_Discount_Limited_ttip",
                            ),
                            children: (0, a.jsx)("span", {
                              className: (0, f.A)(v().StoreSaleDiscountBox),
                              children: `-${V}%`,
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              !!(!E && V && !H) &&
                (0, a.jsx)("div", {
                  className: (0, f.A)(
                    v().StoreSaleDiscountBox,
                    "StoreSaleDiscountBox",
                  ),
                  children: `-${V}%`,
                }),
              !!(V && H) &&
                (0, a.jsx)("div", {
                  className: v().DiscountIconCtn,
                  children: (0, a.jsx)(F.XH_, {}),
                }),
              S || h
                ? (0, a.jsxs)("div", {
                    className: (0, f.A)(v().StoreSaleDiscountedPriceCtn),
                    children: [
                      S
                        ? (0, a.jsx)("div", {
                            className: (0, f.A)({
                              [v().SingleLineOriginalPrice]: w,
                              [v().StoreOriginalPrice]: !w,
                            }),
                            children: K,
                          })
                        : (0, a.jsx)("div", {
                            className: v().YourPriceLabel,
                            children: y.F5.Localize("#PriceDisplay_YourPrice"),
                          }),
                      (0, a.jsx)("div", {
                        className: (0, f.A)({
                          [v().StoreSalePriceBox]: !0,
                          [v().SingleLineMode]: w,
                          [j ?? ""]: !!j,
                        }),
                        children: ct,
                      }),
                    ],
                  })
                : (0, a.jsx)("div", {
                    className: (0, f.A)({
                      [v().StoreSalePriceBox]: !0,
                      [j ?? ""]: !!j,
                    }),
                    children: ct,
                  }),
            ],
          });
        }
      },
      41188: (R, $, r) => {
        "use strict";
        r.d($, { n: () => M, p: () => z });
        var a = r(7850),
          u = r(99412),
          n = r(39567),
          W = r(76532),
          b = r.n(W),
          U = r(12818),
          O = r(36707),
          v = r(39905),
          F = r(72609);
        function M(d) {
          const {
            rgTagIDs: y,
            bShowEvenIfNoTags: I,
            bHideTitle: x,
            bLargeText: B,
            bNoStoreLinks: c,
          } = d;
          return y?.length > 0 || I
            ? (0, a.jsxs)("div", {
                className: (0, O.A)(
                  b().SaleTagBlockCtn,
                  B ? b().LargeText : "",
                  "SaleTagBlockCtn",
                ),
                children: [
                  !x &&
                    (0, a.jsx)("div", {
                      className: (0, O.A)(b().TagTitle, "WidgetTagTitle"),
                      children: v.Z.Localize("#GameHover_Tags"),
                    }),
                  y?.length > 0
                    ? (0, a.jsx)("div", {
                        className: (0, O.A)(b().TagBox, "TagBox"),
                        children: y.map((l) =>
                          (0, a.jsx)(f, { tagid: l, bNoStoreLinks: c }, l),
                        ),
                      })
                    : (0, a.jsx)("div", {
                        children: v.Z.Localize("#Broadcast_None"),
                      }),
                ],
              })
            : null;
        }
        function z(d) {
          const { tagid: y, className: I } = d,
            x = (0, n.MB)(y, F.TS.LANGUAGE);
          if (!x) return null;
          const B = (0, u.wwZ)((0, u.sfN)(F.TS.LANGUAGE)),
            c = `${F.TS.STORE_BASE_URL}tags/${B}/${x}`;
          return (0, a.jsx)(U.q, {
            url: c,
            className: (0, O.A)(b().Tag, "WidgetTag", I),
            children: x,
          });
        }
        function f(d) {
          const { tagid: y, className: I, bNoStoreLinks: x } = d,
            B = (0, u.wwZ)((0, u.sfN)(F.TS.LANGUAGE)),
            c = (0, n.MB)(y, F.TS.LANGUAGE),
            l = `${F.TS.STORE_BASE_URL}tags/${B}/${c}`;
          return c
            ? x
              ? (0, a.jsx)("div", {
                  className: (0, O.A)(b().Tag, "WidgetTag", I),
                  children: c,
                })
              : (0, a.jsx)(U.q, {
                  url: l,
                  className: (0, O.A)(b().Tag, "WidgetTag", I),
                  children: c,
                })
            : null;
        }
      },
      77459: (R, $, r) => {
        "use strict";
        r.d($, { E: () => z });
        var a = r(7850),
          u = r(13620),
          n = r(29522),
          W = r(40358),
          b = r(24179),
          U = r(13977),
          O = r(76532),
          v = r.n(O),
          F = r(36707),
          M = r(18210);
        function z(f) {
          const { appid: d, bIsMuted: y } = f,
            I = (0, n.$5)(d),
            x = (0, b.S6)(d),
            { data: B } = (0, W.J$)(I),
            { mutate: c } = (0, u.S)(I),
            l = (k) => {
              k.preventDefault(), x ? (0, U.o)(d, B?.name) : c();
            },
            e = (0, F.A)(
              v().CapsuleBottomBar,
              y && v().Muted,
              x ? v().PlayNowButton : v().AddToLibraryButton,
            );
          return (0, a.jsx)("div", {
            role: "button",
            tabIndex: 0,
            onClick: l,
            className: e,
            onKeyDown: (k) => {
              (k.key === "Enter" || k.key === " ") &&
                (k.preventDefault(), l(k));
            },
            children: (0, M.we)(x ? "#Sale_PlayNow" : "#Sale_AddToLibrary"),
          });
        }
      },
      16179: (R, $, r) => {
        "use strict";
        r.d($, { x: () => U });
        var a = r(47875),
          u = r(72865),
          n = r(86722),
          W = r(83482),
          b = r(77200);
        function U(O, v) {
          const F = (0, u.n9)(),
            M = (0, b.w)(),
            z = (0, n.tB)((0, a._)(O, v));
          return { snr: (0, W.L3)(F), strStoreURL: (0, W.It)(z, F, M) };
        }
      },
      12818: (R, $, r) => {
        "use strict";
        r.d($, { q: () => O });
        var a = r(7850),
          u = r(24660),
          n = r(72865),
          W = r(52393),
          b = r.n(W),
          U = r(72609);
        function O(M) {
          const {
              className: z,
              url: f,
              style: d,
              children: y,
              bSkipForcingStoreLink: I,
              bOpenInline: x,
              bFocusable: B = !0,
            } = M,
            c = I ? f : f ? v(f, U.TS.STORE_BASE_URL) : void 0,
            l = (0, n.aL)(c);
          return l
            ? (0, a.jsx)(u.Ii, {
                href: l,
                target: U.TS.IN_CLIENT || x ? void 0 : "_blank",
                className: z,
                style: d,
                rel: "noopener noreferrer",
                focusable: B,
                children: y,
              })
            : (0, a.jsx)("span", { style: d, className: z, children: y });
        }
        function v(M, z) {
          try {
            const f = new URL(z),
              d = new URL(M);
            return f.href.replace(/\/$/, "") + d.pathname + d.search + d.hash;
          } catch {
            return "";
          }
        }
        function F(M) {
          const { section: z } = M;
          return z.label_link && !z.label_link_style
            ? jsx("div", {
                className: styles.SaleViewAll,
                children: jsx(O, {
                  url: z.label_link,
                  children: SharedLocalization.Localize(
                    "#btn_live_streams_all",
                  ),
                }),
              })
            : null;
        }
      },
      42993: (R, $, r) => {
        "use strict";
        r.d($, { LH: () => b });
        var a = r(90626);
        const u = (0, a.createContext)(void 0),
          n = u.Provider;
        function W(U) {
          const { steamid: O, children: v } = U,
            F = useMemo(
              () => ({ useActiveAccount: () => (!O || O == "0" ? "" : O) }),
              [O],
            );
          return createElement(n, { value: F }, v);
        }
        function b() {
          const U = (0, a.useContext)(u);
          if (!U)
            throw new Error(
              "called useActiveAccount outside of ActiveAccountProvider",
            );
          return U.useActiveAccount();
        }
      },
      66243: (R, $, r) => {
        "use strict";
        r.d($, { Oh: () => M, n9: () => v, sP: () => b });
        var a = r(7850),
          u = r(24660),
          n = r(44375),
          W = r.n(n);
        function b(f) {
          const { children: d, ...y } = f;
          return (0, a.jsx)(u.fu, {
            className: n.GreenButton,
            type: "button",
            ...y,
            children: (0, a.jsx)("span", { children: d }),
          });
        }
        function U(f) {
          const { children: d, ...y } = f;
          return jsx(FocusableButton, {
            className: styles.GreenButton,
            type: "submit",
            ...y,
            children: jsx("span", { children: d }),
          });
        }
        function O(f) {
          const { children: d, ...y } = f;
          return jsx(FocusableAnchor, {
            className: styles.GreenButton,
            ...y,
            children: jsx("span", { children: d }),
          });
        }
        function v(f) {
          const { children: d, ...y } = f;
          return (0, a.jsx)(u.fu, {
            className: n.BlueButton,
            type: "button",
            ...y,
            children: (0, a.jsx)("span", { children: d }),
          });
        }
        function F(f) {
          const { children: d, ...y } = f;
          return jsx(FocusableAnchor, {
            className: styles.BlueButton,
            ...y,
            children: jsx("span", { children: d }),
          });
        }
        function M(f) {
          const { children: d, ...y } = f;
          return (0, a.jsx)(u.fu, {
            className: n.GreyButton,
            type: "button",
            ...y,
            children: (0, a.jsx)("span", { children: d }),
          });
        }
        function z(f) {
          const { children: d, ...y } = f;
          return jsx(FocusableAnchor, {
            className: styles.GreyButton,
            ...y,
            children: jsx("span", { children: d }),
          });
        }
      },
      21721: (R, $, r) => {
        "use strict";
        r.d($, { DT: () => O, b0: () => b, bu: () => U });
        var a = r(72609),
          u = r(40358),
          n = r(71742),
          W = r(41032);
        function b(z, f) {
          if (z[f]) {
            if (f == "community_icon") {
              const d = z.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${z[f]}.jpg`)
                .replace(/\?.*$/, "");
              return `${a.TS.MEDIA_CDN_COMMUNITY_URL}${d}`;
            } else if (typeof z[f] == "string") {
              const d = z.asset_url_format.replace("${FILENAME}", z[f]);
              return `${a.TS.STORE_ITEM_BASE_URL}${d}`;
            }
          }
        }
        function U(z, f = "full") {
          let d = "";
          switch (f) {
            case "thumb":
              d = ".116x65";
              break;
            case "600x338":
              d = ".600x338";
              break;
            case "1920x1080":
              d = ".1920x1080";
              break;
            case "full":
              d = "";
              break;
            default:
              (0, n.z_)(f, `Invalid size: ${f}`);
              break;
          }
          return (
            a.TS.STORE_ITEM_BASE_URL +
            z.filename.replace(/\.([^.]+)(\?.*)?$/, `${d}.$1$2`)
          );
        }
        function O(z) {
          const { data: f } = (0, u.j4)(z),
            d = (0, W.dy)();
          if (f)
            return [
              ...(f.all_ages_screenshots || []),
              ...(!d && f.mature_content_screenshots
                ? f.mature_content_screenshots
                : []),
            ].sort((y, I) => y.ordinal - I.ordinal);
        }
        function v(z, f = !1) {
          const { data: d } = useStoreItemAssets({ appid: z });
          if (d !== void 0)
            return d === null
              ? null
              : f && d.library_capsule_2x
                ? b(d, "library_capsule_2x")
                : d.library_capsule
                  ? b(d, "library_capsule")
                  : `${Config.STORE_ITEM_BASE_URL}steam/apps/${z}/portrait.png`;
        }
        function F(z, ...f) {
          const { data: d } = useStoreItemAssets(z);
          return M(d, ...f);
        }
        function M(z, ...f) {
          if (!z?.asset_url_format) return;
          const d = f.find((y) => {
            const I = z[y];
            return typeof I == "string" && I.trim() !== "";
          });
          return d && b(z, d);
        }
      },
      87249: (R, $, r) => {
        "use strict";
        r.d($, { C0: () => z, mj: () => f });
        var a = r(7850),
          u = r(3367),
          n = r(72609),
          W = r(40358),
          b = r(64238),
          U = r.n(b),
          O = r(90626),
          v = r(25046),
          F = r(73187),
          M = r.n(F),
          z = ((y) => (
            (y[(y.k_ETrailerGrowAmount_None = 0)] =
              "k_ETrailerGrowAmount_None"),
            (y[(y.k_ETrailerGrowAmount_Implicit = 1)] =
              "k_ETrailerGrowAmount_Implicit"),
            (y[(y.k_ETrailerGrowAmount_Medium = 2)] =
              "k_ETrailerGrowAmount_Medium"),
            y
          ))(z || {});
        function f(y) {
          const { id: I, active: x, bIsHoverMode: B, eGrowOnActivate: c } = y,
            { data: l } = (0, W.J$)(I),
            e = O.useRef(0),
            k = O.useRef(null);
          O.useLayoutEffect(() => {
            x && k.current && (k.current.currentTime = e.current);
          }, [x]);
          const o = (K) => {
              e.current = K.currentTarget.currentTime;
            },
            w = (0, v.kB)(x ? I : void 0);
          if ((B && n.TS.IN_MOBILE) || !x || !l || !l.visible || !w)
            return null;
          const V = w.filter(
            (K) => K.microtrailer && K.microtrailer.length > 0,
          );
          if (V.length === 0)
            return l &&
              l.related_items?.parent_appid &&
              (l.type == u.uE.ue || l.type == u.uE.Vi)
              ? (0, a.jsx)(f, {
                  ...y,
                  id: { appid: l.related_items.parent_appid },
                })
              : null;
          let q;
          switch (c) {
            case 1:
              q = M().GrowOnHoverImplicit;
              break;
            case 2:
              q = M().GrowOnHoverMedium;
              break;
          }
          const E = V[0];
          return (0, a.jsx)("video", {
            className: U()(M().CapsuleMicroTrailer, q),
            loop: !0,
            muted: !0,
            controls: !1,
            autoPlay: !0,
            ref: k,
            playsInline: !0,
            onTimeUpdate: o,
            children: (0, a.jsx)(d, { trailer: E }),
          });
        }
        function d(y) {
          const { trailer: I } = y;
          return !I || !I.microtrailer
            ? null
            : (0, a.jsx)(a.Fragment, {
                children: I.microtrailer?.map((x) =>
                  n.TS.IN_CLIENT && x.type == "video/mp4"
                    ? null
                    : (0, a.jsx)(
                        "source",
                        { src: (0, v.M4)(I, x.filename || ""), type: x.type },
                        x.filename,
                      ),
                ),
              });
        }
      },
      83784: (R, $, r) => {
        "use strict";
        r.d($, { J: () => a, S: () => u });
        function a(n) {
          return n
            ? !!(
                n.related_items &&
                n.related_items.standalone_demo_appid &&
                n.related_items.standalone_demo_appid.length > 0 &&
                n.related_items.standalone_demo_appid[0]
              )
            : !1;
        }
        function u(n) {
          return !n || !n.related_items?.standalone_demo_appid
            ? []
            : n.related_items?.standalone_demo_appid;
        }
      },
      3348: (R, $, r) => {
        "use strict";
        r.d($, { CC: () => U });
        var a = r(16114),
          u = r(11512);
        function n(O) {
          return O?.is_coming_soon
            ? b(
                O.coming_soon_display,
                O.steam_release_date,
                O.custom_release_date_message,
              )
            : O?.steam_release_date
              ? LocalizeRtime32ToShortDate(O.steam_release_date)
              : "";
        }
        function W(O) {
          return n(O.releaseInfo);
        }
        function b(O, v, F) {
          switch (O) {
            case "date_full":
              return LocalizeRtime32ToShortDate(v);
            case "date_month":
              return LocalizeCalendarMonthAndYear(new Date(v * 1e3));
            case "date_quarter":
              return LocalizeCalendarQuarter(new Date(v * 1e3));
            case "date_year":
              return LocalizeCalendarYear(new Date(v * 1e3));
            case "text_comingsoon":
              return (
                F || SharedLocalization.Localize("#Store_ComingSoon_ComingSoon")
              );
            case "text_tba":
              return F || SharedLocalization.Localize("#Store_ComingSoon_TBA");
            default:
              return "";
          }
        }
        function U(O) {
          if (!O) return "";
          if (O && O.is_coming_soon) {
            if (O.coming_soon_display) return (0, u.d)(O);
            if (O.custom_release_date_message)
              return O.custom_release_date_message;
            const F = O.steam_release_date;
            return F
              ? O.is_abridged_release_date
                ? (0, a.sq)(new Date(F * 1e3))
                : (0, a.$z)(F)
              : "";
          }
          let v = O.steam_release_date;
          return v || (v = O.original_release_date), v ? (0, a.$z)(v) : "";
        }
      },
      81055: (R, $, r) => {
        "use strict";
        r.d($, { Nq: () => U, fk: () => b });
        var a = r(44983);
        function u(v, F = !1) {
          if (v.is_coming_soon && !F) return 0;
          let M = v.steam_release_date;
          return M || (M = v.original_release_date), M;
        }
        function n(v) {
          let F = v.original_steam_release_date;
          return F || (F = u(v)), F;
        }
        const W = 7;
        function b(v, F) {
          if (!v) return !1;
          const M = u(v);
          return M ? !v.is_coming_soon && M + W * a.Kp.PerDay > F : !1;
        }
        function U(v, F) {
          return !!(v && v.is_coming_soon && F && F.packageid);
        }
        function O(v, F) {
          return !!(v && F && F.packageid);
        }
      },
      47875: (R, $, r) => {
        "use strict";
        r.d($, { _: () => n, l: () => W });
        var a = r(72609),
          u = r(83784);
        function n(b, U = !1) {
          if (b)
            return U && (0, u.J)(b)
              ? `${a.TS.STORE_BASE_URL}app/${((0, u.S))(b)[0]}`
              : `${a.TS.STORE_BASE_URL}${b.store_url_path}`;
        }
        function W() {
          window.location.href = `${a.TS.STORE_BASE_URL}login/?redir=${encodeURIComponent(window.location.href)}`;
        }
      },
      39567: (R, $, r) => {
        "use strict";
        r.d($, { Fv: () => O, MB: () => M });
        var a = r(72604),
          u = r(35038),
          n = r(83764),
          W = r(32288),
          b = r(68312),
          U = r(20194);
        function O(d) {
          const y = (0, b.TR)(),
            I = (0, b.rX)();
          return (0, U.I)(v(y.GetAnonymousServiceTransport(), I, d));
        }
        function v(d, y, I) {
          return {
            queryKey: ["LocalizedTagNames", I],
            queryFn: async () => {
              const x = `LocalizedTagNames2_${I}`,
                B = await y.GetObject(x),
                c = u.w.Init(W.Gr);
              c.Body().set_language(I),
                B?.version_hash &&
                  c.Body().set_have_version_hash(B.version_hash);
              const l = await W.nd.GetTagList(d, c);
              let e;
              if (l.GetEResult() == a.R)
                (e = l.Body().toObject()), y && y.StoreObject(x, e);
              else if (l.GetEResult() == a.Ze) e = B || void 0;
              else if (B)
                console.warn(
                  "Couldn't load updated tag localization, will continue with what we have from storage.",
                ),
                  (e = B);
              else throw l.GetErrorMessage();
              const k = {};
              return (
                (e?.tags || []).forEach(({ tagid: w, name: V }) => (k[w] = V)),
                k
              );
            },
            staleTime: 3600 * 1e3,
          };
        }
        async function F(d, y, I) {
          return ReactQueryClient.fetchQuery(
            v(d.GetAnonymousServiceTransport(), y, I),
          );
        }
        function M(d, y) {
          const { data: I } = O(y);
          return I && I[d];
        }
        function z(d) {
          const { data: y } = O(d);
          return !!y;
        }
        const f = [n.RW$, n.ZBT, n.gGw];
      },
      29522: (R, $, r) => {
        "use strict";
        r.d($, { $5: () => v, _Z: () => W, h0: () => O, oc: () => F });
        var a = r(40358),
          u = r(3367),
          n = r(90626);
        function W(z) {
          const { data: f } = (0, a.J$)(z);
          return (0, n.useMemo)(
            () =>
              f
                ? f.item_type == u.c6.qI
                  ? [f.appid]
                  : f.included_appids || []
                : [],
            [f],
          );
        }
        function b(z) {
          if (!z?.length) return [];
          const f = z.map((d) => d.creator_clan_account_id).filter((d) => !!d);
          return Array.from(new Set(f));
        }
        function U(z) {
          const { data: f } = useStoreItemDefaultInfo({ appid: z });
          return f?.appid || z;
        }
        function O(z) {
          const { data: f } = (0, a.J$)(z);
          return (0, n.useMemo)(() => {
            if (f && f.related_items && f.related_items.parent_appid)
              return { appid: f.related_items.parent_appid };
          }, [f]);
        }
        function v(z) {
          return (0, n.useMemo)(() => (z ? { appid: z } : void 0), [z]);
        }
        function F(z) {
          return (0, n.useMemo)(() => (z ? { packageid: z } : void 0), [z]);
        }
        function M(z) {
          return useMemo(() => (z ? { bundleid: z } : void 0), [z]);
        }
      },
      10134: (R, $, r) => {
        "use strict";
        r.d($, { BD: () => F, h3: () => M });
        var a = r(20194),
          u = r(75233),
          n = r(68312),
          W = r(98609),
          b = r(20125);
        async function U(f, d) {
          const y = (0, b.Am)(W.TS.STORE_BASE_URL, d, W.iA.country_code),
            x = await (await fetch(y)).json();
          return Object.keys(x.rgIgnoredApps).map(Number) || [];
        }
        function O() {
          const f = (0, n.KV)(),
            d = W.iA.accountid;
          return (0, a.I)(v(f, d));
        }
        function v(f, d) {
          return {
            queryKey: z(d),
            queryFn: async () => {
              if (!d) return new Set();
              const y = await U(f, d);
              return new Set(y);
            },
            staleTime: 600 * 1e3,
          };
        }
        function F(f) {
          const { data: d } = O();
          return d === void 0 || f == null ? void 0 : d.has(f);
        }
        function M() {
          const f = (0, u.jE)(),
            d = W.iA.accountid;
          return (y, I) => {
            f.setQueryData(z(d), (x) => {
              if (!x) return;
              const B = new Set(x);
              if (I) for (const c of I) B.delete(c);
              if (y) for (const c of y) B.add(c);
              return B;
            });
          };
        }
        function z(f) {
          return ["AccountIgnoreApps", f ?? 0];
        }
      },
      13620: (R, $, r) => {
        "use strict";
        r.d($, { S: () => O });
        var a = r(35038),
          u = r(41944),
          n = r(3367),
          W = r(68312),
          b = r(51614),
          U = r(24179);
        function O(F) {
          const M = (0, W.KV)(),
            z = (0, U._7)();
          return (0, b.n)({
            mutationFn: () => v(M, F),
            onSuccess(f) {
              const [
                d,
                {
                  packageids_added: y,
                  appids_added: I,
                  purchase_result_detail: x,
                },
              ] = f;
              I && z(I);
            },
          });
        }
        async function v(F, M) {
          const z = a.w.Init(u.lO);
          z.Body().set_item_id(n.O4.fromObject(M));
          const f = await u._o.AddFreeLicense(F, z);
          return [f.GetEResult(), f.Body().toObject()];
        }
      },
      24179: (R, $, r) => {
        "use strict";
        r.d($, { S6: () => y, ZJ: () => B, $Y: () => z, _7: () => I });
        var a = r(90626),
          u = r(20194),
          n = r(75233),
          W = r(68312),
          b = r(20125),
          U = r(98609);
        async function O(c, l) {
          const e = (0, b.Am)(U.TS.STORE_BASE_URL, l, U.iA.country_code);
          return (await (await fetch(e)).json()).rgOwnedApps || [];
        }
        async function v(c, l, e) {
          return (await O(c, l)).includes(e);
        }
        var F = r(40358),
          M = r(72609);
        function z() {
          const c = (0, W.KV)(),
            l = M.iA.accountid;
          return (0, u.I)(f(c, l));
        }
        function f(c, l) {
          return {
            queryKey: x(l),
            queryFn: async () => {
              if (!l) return new Set();
              const e = await O(c, l);
              return new Set(e);
            },
            staleTime: 600 * 1e3,
          };
        }
        function d(c, l, e) {
          return {
            queryKey: ["AccountOwnsApp", l, e],
            queryFn: async () => (l ? await v(c, l, e) : !1),
            staleTime: 600 * 1e3,
          };
        }
        function y(c) {
          const l = (0, W.KV)(),
            e = M.iA.accountid,
            { data: k } = (0, u.I)(d(l, e, c));
          return k === void 0 ? void 0 : k;
        }
        function I(c) {
          const l = (0, n.jE)(),
            e = M.iA.accountid;
          return a.useCallback(
            (k) => {
              l.setQueryData(x(e), (o) =>
                o ? new Set([...o.values(), ...k]) : c ? new Set(k) : void 0,
              );
            },
            [l, e, c],
          );
        }
        function x(c) {
          return ["AccountOwnedApps", c ?? 0];
        }
        function B(c) {
          const { data: l } = (0, F.J$)(c && "appid" in c ? void 0 : c),
            { data: e } = z();
          let k;
          return (
            c && "appid" in c ? (k = [c.appid]) : l && (k = l.included_appids),
            k === void 0 || e === void 0 || k.length == 0
              ? { bIsOwned: void 0, unAppID: void 0 }
              : { bIsOwned: !k.some((o) => !e.has(o)), unAppID: k[0] }
          );
        }
      },
      20125: (R, $, r) => {
        "use strict";
        r.d($, { Am: () => n, WZ: () => W });
        const a = "unUserdataVersion";
        function u() {
          return Number.parseInt(window.localStorage.getItem(a) || "0");
        }
        function n(b, U, O) {
          const v = u();
          let F = `${b}dynamicstore/userdata/?id=${U}&cc=${O}&origin=${self.origin}`;
          return v && (F += `&v=${v}`), F;
        }
        function W() {
          window.localStorage.setItem(
            a,
            (
              Number.parseInt(window.localStorage.getItem(a) || "0") + 1
            ).toString(),
          );
        }
      },
      32994: (R, $, r) => {
        "use strict";
        r.d($, { lI: () => v });
        var a = r(99412),
          u = r(35038),
          n = r(18735),
          W = r(32288),
          b = r(72609),
          U = r(20194),
          O = r(68312);
        function v() {
          const l = (0, O.KV)(),
            e = b.iA.accountid,
            k = b.iA.country_code;
          return (0, U.I)(F(l, e, k));
        }
        function F(l, e, k) {
          return {
            queryKey: c(e),
            queryFn: async () => {
              if (!e) return B();
              const o = u.w.Init(W.xf);
              o.Body().set_country_code(k);
              const w = await W.nd.GetStorePreferences(l, o);
              if (!w.BSuccess())
                throw `Error loading store preferences: ${w.GetErrorMessage()}`;
              return w.Body().toObject();
            },
            staleTime: 3600 * 1e3,
          };
        }
        function M(l) {
          const e = l?.preferences?.primary_language;
          return e === void 0 || e <= k_ELanguage_None || e >= k_ELanguage_MAX
            ? PchLanguageToELanguage(Config.LANGUAGE)
            : e;
        }
        function z() {
          const l = useActiveServiceTransport(),
            e = UserConfig.accountid;
          return useQuery(y(l, e));
        }
        function f() {
          const l = useActiveServiceTransport(),
            e = UserConfig.accountid,
            k = UserConfig.country_code;
          return useQuery({
            ...F(l, e, k),
            select: (o) => I(o, PchLanguageToELanguage(Config.LANGUAGE)),
          });
        }
        const d = [n.T4, n.u7];
        function y(l, e) {
          const k = UserConfig.country_code;
          return { ...F(l, e, k), select: x };
        }
        function I(l, e) {
          const k = [e];
          if (
            l &&
            l.preferences &&
            l.preferences.primary_language !== void 0 &&
            l.preferences.primary_language !== k_ELanguage_None
          ) {
            const { primary_language: o, secondary_languages: w } =
              l.preferences;
            if ((o !== e && k.push(o), w)) {
              const V = BigInt(w);
              for (let q = k_ELanguage_English; q < k_ELanguage_MAX; q++)
                (V >> BigInt(q)) & BigInt(1) && q != e && q != o && k.push(q);
            }
          }
          return k;
        }
        function x(l) {
          return l?.content_descriptor_preferences
            ?.content_descriptors_to_exclude
            ? l.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
                (e) => e.content_descriptorid,
              ) || []
            : d;
        }
        function B() {
          return {
            preferences: { primary_language: (0, a.sfN)(b.TS.LANGUAGE) },
            content_descriptor_preferences: {
              content_descriptors_to_exclude: d.map((l) => ({
                content_descriptorid: l,
              })),
            },
          };
        }
        function c(l) {
          return ["StorePreferencesQueryKey", l ?? 0];
        }
      },
      96362: (R, $, r) => {
        "use strict";
        r.d($, { s: () => U });
        var a = r(51614),
          u = r(67705),
          n = r(54528),
          W = r(20125),
          b = r(98609);
        function U(O, v, F) {
          const M = (0, n.$3)(),
            z = b.iA.accountid;
          return (0, a.n)({
            mutationKey: ["useUpdateWishlist", O, z, v],
            mutationFn: async () => {
              if (O == null) return;
              const f =
                  b.TS.STORE_BASE_URL +
                  "api/" +
                  (v ? "addtowishlist" : "removefromwishlist"),
                d = new FormData();
              d.append("appid", "" + O),
                d.append("sessionid", (0, u.KC)()),
                F && d.append("snr", F);
              const y = await fetch(f, {
                method: "POST",
                body: d,
                credentials: "include",
              });
              if (!y.ok)
                throw new Error(
                  `Wishlist ${v ? "add" : "remove"} of appid ${O} failed (${y.status})`,
                );
            },
            onMutate: () => {
              O != null && M(v ? [O] : void 0, v ? void 0 : [O]);
            },
            onError: () => {
              O != null && M(v ? void 0 : [O], v ? [O] : void 0);
            },
            onSuccess: () => {
              (0, W.WZ)();
            },
          });
        }
      },
      54528: (R, $, r) => {
        "use strict";
        r.d($, { bB: () => M, $3: () => z, F0: () => v });
        var a = r(20194),
          u = r(75233),
          n = r(68312),
          W = r(72609),
          b = r(20125),
          U = r(98609);
        async function O(d, y) {
          const I = (0, b.Am)(U.TS.STORE_BASE_URL, y, U.iA.country_code);
          return (await (await fetch(I)).json()).rgWishlist || [];
        }
        function v() {
          const d = (0, n.KV)(),
            y = W.iA.accountid;
          return (0, a.I)(F(d, y));
        }
        function F(d, y) {
          return {
            queryKey: f(y),
            queryFn: async () => {
              if (!y) return new Set();
              const I = await O(d, y);
              return new Set(I);
            },
            staleTime: 600 * 1e3,
          };
        }
        function M(d) {
          const { data: y } = v();
          return y === void 0 || d == null ? void 0 : y.has(d);
        }
        function z() {
          const d = (0, u.jE)(),
            y = W.iA.accountid;
          return (I, x) => {
            d.setQueryData(f(y), (B) => {
              if (!B) return;
              const c = new Set(B);
              if (x) for (const l of x) c.delete(l);
              if (I) for (const l of I) c.add(l);
              return c;
            });
          };
        }
        function f(d) {
          return ["AccountWishlistApps", d ?? 0];
        }
      },
      13977: (R, $, r) => {
        "use strict";
        r.d($, { o: () => z });
        var a = r(7850),
          u = r(58534),
          n = r(2801),
          W = r(88003),
          b = r(36118),
          U = r(36707),
          O = r(18210),
          v = r(3166),
          F = r(54599),
          M = r.n(F);
        async function z(I, x) {
          const B = "steam://run/" + I;
          v.TS.IN_CLIENT
            ? (console.log(`Running game ${I} locally.`),
              (window.location.href = B))
            : (console.log(
                `Cannot identify local client. Prompting user to launch ${I}.`,
              ),
              d(I, B, x));
        }
        async function f(I, x) {
          const B = "steam://install/" + I;
          Config.IN_CLIENT ? (window.location.href = B) : d(I, B, x);
        }
        async function d(I, x, B) {
          console.log("prompting for", B);
          const c = v.TS.STORE_BASE_URL + "about/";
          (0, W.mK)(
            (0, a.jsx)(y, {
              appid: I,
              strGameName: B || "",
              strOnOKUrl: x,
              strDownloadSteamUrl: c,
            }),
            window,
          );
        }
        const y = (I) => {
          const x = () => I.closeModal && I.closeModal();
          return (0, a.jsx)(n.x_, {
            onEscKeypress: x,
            className: M().GotSteamDialog,
            children: (0, a.jsxs)(u.UC, {
              children: [
                (0, a.jsxs)(u.Y9, {
                  children: [" ", (0, O.we)("#GotSteam_Title"), " "],
                }),
                (0, a.jsxs)(u.nB, {
                  children: [
                    (0, a.jsx)(u.a3, {
                      children: (0, O.PP)(
                        "#GotSteam_PromptWithDownloadLink",
                        (0, a.jsx)("a", {
                          href: I.strDownloadSteamUrl,
                          className: M().DownloadSteamUrl,
                          children: (0, O.we)("#GotSteam_DownloadLinkText"),
                        }),
                        (0, a.jsx)("span", {
                          className: M().GameName,
                          children: I.strGameName,
                        }),
                      ),
                    }),
                    (0, a.jsxs)("div", {
                      className: M().Buttons,
                      children: [
                        (0, a.jsxs)("a", {
                          href: I.strOnOKUrl,
                          onClick: x,
                          className: (0, U.A)(M().Button, M().LeftButton),
                          children: [
                            (0, a.jsxs)("div", {
                              className: M().AnswerText,
                              children: [" ", (0, O.we)("#GotSteam_Yes"), " "],
                            }),
                            (0, a.jsxs)("div", {
                              className: M().ActionText,
                              children: [
                                " ",
                                (0, O.we)("#GotSteam_Yes_Play"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsxs)("a", {
                          href: I.strDownloadSteamUrl,
                          onClick: x,
                          className: M().Button,
                          children: [
                            (0, a.jsxs)("div", {
                              className: M().AnswerText,
                              children: [" ", (0, O.we)("#GotSteam_No"), " "],
                            }),
                            (0, a.jsxs)("div", {
                              className: M().ActionText,
                              children: [
                                " ",
                                (0, O.we)("#GotSteam_No_Download"),
                                " ",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: M().Footer,
                      children: [
                        (0, a.jsx)(b.Qte, { className: M().Logo }),
                        (0, O.we)("#GotSteam_Blurb"),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
      83482: (R, $, r) => {
        "use strict";
        r.d($, {
          Ay: () => x,
          It: () => f,
          L3: () => d,
          OZ: () => M,
          k2: () => F,
          wJ: () => z,
        });
        var a = r(72865),
          u = r(25294),
          n = r(71742),
          W = r(53113),
          b = r(98609),
          U = r(72609),
          O = r(90626),
          v = r(39414);
        function F(B, c = "", l = null) {
          return x.InstrumentLink(B, c, l);
        }
        function M(B, c, l) {
          const e = (0, a.n9)();
          return O.useMemo(() => {
            const k = (0, W.wm)(B).toLowerCase(),
              o = (0, W.wm)(U.TS.COMMUNITY_BASE_URL).toLowerCase(),
              w = (0, W.wm)(U.TS.STORE_BASE_URL).toLowerCase();
            return k === o || k === w ? (0, a.bV)(e, B, c, l) : B;
          }, [e, B, c, l]);
        }
        function z(B, c, l = null) {
          const e = d(c, l),
            k = c ? u.A.GetCuratorClanIDParam(c) : null;
          return u.A.AddNavParamToURL(B, e, k);
        }
        function f(B, c, l, e = null) {
          const k = z(B, c, e);
          if (l && Object.keys(l).length > 0)
            try {
              const o = new URL((0, v.S)(k)),
                w = new URLSearchParams(o.search);
              return (
                Object.entries(l).forEach(([V, q]) => {
                  w.set(V, encodeURIComponent(q ?? ""));
                }),
                o.origin + o.pathname + "?" + w.toString() + o.hash
              );
            } catch {}
          return k;
        }
        function d(B, c = null) {
          return B?.domain ? x.GetLinkParam(B, c) : b.TS.SNR;
        }
        function y(B, c = "", l = null) {
          const e = `${Config.STORE_BASE_URL}app/${B}`;
          return F(e, c, l);
        }
        function I(B, c = "") {
          const l = `${Config.STORE_BASE_URL}dlc/${B}`;
          return F(l, c);
        }
        class x {
          static sm_strDomain;
          static sm_strController;
          static sm_strMethod;
          static sm_strSubmethod;
          static sm_strComputedLinkPrefix;
          static SetNavEventParams(c, l, e = null, k = null) {
            (x.sm_strDomain = c),
              (x.sm_strController = l),
              (x.sm_strMethod = e),
              (x.sm_strSubmethod = k),
              (x.sm_strComputedLinkPrefix = null);
          }
          static GetDefaultParams() {
            let c = { domain: x.sm_strDomain, controller: x.sm_strController };
            return (
              x.sm_strMethod && (c.method = x.sm_strMethod),
              x.sm_strSubmethod && (c.submethod = x.sm_strSubmethod),
              c
            );
          }
          static InstrumentLink(c, l, e = null) {
            const k = x.GetLinkParam(l, e),
              o = typeof l != "string" ? u.A.GetCuratorClanIDParam(l) : null;
            return u.A.AddNavParamToURL(c, k, o);
          }
          static GetLinkParam(c, l = null) {
            let e;
            if (typeof c != "string") {
              if (c.domain) return u.A.GetSNRLinkParam(c, l);
              e = c.feature || "";
            }
            let k;
            if (!x.sm_strComputedLinkPrefix && !x.ComputeStaticLinkPrefix())
              return null;
            k = x.sm_strComputedLinkPrefix;
            let o = u.A.EncodeEventComponent(e);
            return o && ((k += "_" + o), l && (k += "_" + l)), k;
          }
          static ComputeStaticLinkPrefix() {
            return x.sm_strDomain
              ? ((x.sm_strComputedLinkPrefix = u.A.ComputeLinkPrefix(
                  x.sm_strDomain,
                  x.sm_strController,
                  x.sm_strMethod,
                  x.sm_strSubmethod,
                )),
                !0)
              : ((0, n.wT)(
                  !1,
                  "CStoreNavEvents::SetNavEventParams was not called before calling InstrumentLink!",
                ),
                !1);
          }
        }
      },
      19619: (R, $, r) => {
        "use strict";
        r.d($, { Fm: () => H, L2: () => D });
        var a = r(41735),
          u = r.n(a),
          n = r(14947),
          W = r(99412),
          b = r(72604),
          U = r(34592),
          O = r(3166),
          v = r(82734),
          F = r(25294),
          M = r(40497),
          z = r(3367),
          f = r(43462),
          d = r(20125),
          y = r(36191),
          I = r(93804),
          x = r(72609),
          B = r(20194),
          c = r(97996),
          l = ((S) => (
            (S[(S.AnyController = 0)] = "AnyController"),
            (S[(S.XboxController = 1)] = "XboxController"),
            (S[(S.Ps3Controller = 2)] = "Ps3Controller"),
            (S[(S.Ps4Controller = 3)] = "Ps4Controller"),
            (S[(S.Ps5Controller = 4)] = "Ps5Controller"),
            (S[(S.SwitchController = 5)] = "SwitchController"),
            (S[(S.SteamController = 6)] = "SteamController"),
            (S[(S.SteamDeckNeptune = 7)] = "SteamDeckNeptune"),
            (S[(S.SteamDeckGalileo = 8)] = "SteamDeckGalileo"),
            (S[(S.Switch2Controller = 9)] = "Switch2Controller"),
            (S[(S.SteamControllerTriton = 10)] = "SteamControllerTriton"),
            S
          ))(l || {});
        const e = {
          any_controller: 0,
          xbox_controller: 1,
          ps3_controller: 2,
          ps4_controller: 3,
          ps5_controller: 4,
          switch_controller: 5,
          steam_controller: 6,
          steam_deck_neptune: 7,
          steam_deck_galileo: 8,
          switch2_controller: 9,
          steam_controller_triton: 10,
        };
        function k() {
          const S = [...x.iA.excluded_content_descriptors];
          return {
            bLoaded: !1,
            setWishlist: new Set(),
            rgWishlistInOrder: [],
            setOwnedApps: new Set(),
            setOwnedPackages: new Set(),
            setExcludedTagIDs: new Set(),
            rgExcludedTagIDsSorted: [],
            setExcludedContentDescriptors: new Set(S),
            rgExcludedContentDescriptors: S,
            setRecommendedApps: new Set(),
            rgRecommendedAppsInOrder: [],
            mapIgnoredApps: new Map(),
            mapIgnoredPackages: new Map(),
            setCuratorsFollowed: new Set(),
            rgCuratorsFollowed: [],
            setCuratorsIgnored: new Set(),
            mapRecommendingCuratorsForApp: new Map(),
            setPreferredPlatforms: new Set(),
            setHardwareUsed: new Set(),
            rgRecommendedTags: [],
            ePrimaryLanguage: W.xPp,
            setSecondaryLanguages: new Set(),
            bShowFilteredUserReviewScores: !0,
            bAllowAppImpressions: !1,
          };
        }
        let o;
        function w() {
          return (o ??= k());
        }
        function V() {
          return !!(0, c.VY)("wants_mature_content");
        }
        function q(S) {
          const h = k();
          if (
            ((h.bLoaded = !0),
            S.rgCurators &&
              ((h.rgCuratorsFollowed = Object.keys(S.rgCurators).map(Number)),
              (h.setCuratorsFollowed = new Set(h.rgCuratorsFollowed))),
            S.rgCuratorsIgnored &&
              (h.setCuratorsIgnored = new Set(S.rgCuratorsIgnored.map(Number))),
            S.rgWishlist &&
              ((h.rgWishlistInOrder = S.rgWishlist.map(Number)),
              (h.setWishlist = new Set(h.rgWishlistInOrder))),
            S.rgOwnedApps &&
              (h.setOwnedApps = new Set(S.rgOwnedApps.map(Number))),
            S.rgOwnedPackages &&
              (h.setOwnedPackages = new Set(S.rgOwnedPackages.map(Number))),
            S.rgIgnoredApps && (h.mapIgnoredApps = E(S.rgIgnoredApps)),
            S.rgIgnoredPackages &&
              (h.mapIgnoredPackages = E(S.rgIgnoredPackages)),
            S.rgExcludedTags &&
              ((h.setExcludedTagIDs = new Set(
                S.rgExcludedTags.map((N) => Number(N.tagid)),
              )),
              (h.rgExcludedTagIDsSorted = Array.from(
                h.setExcludedTagIDs,
              ).sort())),
            V()
              ? ((h.setExcludedContentDescriptors = new Set()),
                (h.rgExcludedContentDescriptors = []))
              : S.rgExcludedContentDescriptorIDs &&
                ((h.rgExcludedContentDescriptors =
                  S.rgExcludedContentDescriptorIDs.map((N) => Number(N))),
                (h.setExcludedContentDescriptors = new Set(
                  h.rgExcludedContentDescriptors,
                ))),
            S.rgRecommendedApps &&
              ((h.rgRecommendedAppsInOrder = S.rgRecommendedApps.map(Number)),
              (h.setRecommendedApps = new Set(h.rgRecommendedAppsInOrder))),
            S.rgPreferredPlatforms &&
              (h.setPreferredPlatforms = new Set(S.rgPreferredPlatforms)),
            S.bAllowAppImpressions &&
              (h.bAllowAppImpressions = S.bAllowAppImpressions),
            (h.bShowFilteredUserReviewScores =
              !!S.bShowFilteredUserReviewScores),
            S.rgPrimaryLanguage !== void 0 &&
              (h.ePrimaryLanguage = S.rgPrimaryLanguage),
            S.rgSecondaryLanguages &&
              (h.setSecondaryLanguages = new Set(S.rgSecondaryLanguages)),
            S.rgRecommendedTags &&
              (h.rgRecommendedTags = S.rgRecommendedTags.map((N) => N.tagid)),
            S.rgCurations)
          )
            for (const N of Object.keys(S.rgCurations)) {
              const A = [];
              for (const tt of Object.keys(S.rgCurations[N]))
                S.rgCurations[N][tt] === I.tV.$D && A.push(Number(tt));
              h.mapRecommendingCuratorsForApp.set(Number(N), A);
            }
          if (S.rgHardwareUsed)
            for (const N of S.rgHardwareUsed) {
              const A = e[N];
              A !== void 0 && h.setHardwareUsed.add(A);
            }
          return h;
        }
        function E(S) {
          const h = new Map();
          for (const [N, A] of Object.entries(S)) {
            const tt = Number(N);
            tt && h.set(tt, Number(A));
          }
          return h;
        }
        const K = "dynamicuserdata";
        function ct(S) {
          return [K, S];
        }
        function xt(S) {
          return S?.[0] == K;
        }
        async function Ft(S) {
          try {
            const h = await fetch(
              (0, d.Am)(x.TS.STORE_BASE_URL, S, x.iA.country_code),
              { credentials: "include" },
            );
            if (!h.ok) throw new Error(`Server returned ${h.status}`);
            return q(await h.json());
          } catch (h) {
            return (
              console.warn("LoadDynamicUserData", h),
              (0, y.aj)().ReportError(new Error(`LoadDynamicUserData ${h}`), {
                bIncludeMessageInIdentifier: !0,
              }),
              k()
            );
          }
        }
        function kt() {
          const S = x.iA.accountid;
          return {
            queryKey: ct(S),
            queryFn: () => Ft(S),
            staleTime: 1 / 0,
            gcTime: 1 / 0,
            retry: !1,
            enabled: !0,
          };
        }
        function nr() {
          return (0, B.I)(kt());
        }
        function Mt(S) {
          return S.getQueryData(ct(x.iA.accountid)) ?? w();
        }
        async function j(S) {
          return S.fetchQuery(kt());
        }
        function J(S, h) {
          S.setQueryData(ct(x.iA.accountid), (N) => {
            if (!N) return;
            const A = h(N);
            return A ? { ...N, ...A } : N;
          });
        }
        class H {
          m_queryClient = M.L;
          m_boxCacheVersion = n.sH.box(0);
          m_bInitialized = !1;
          m_boxAjaxInFlight = n.sH.box(!1);
          LazyInit() {
            this.m_bInitialized ||
              ((this.m_bInitialized = !0),
              this.m_queryClient.getQueryCache().subscribe((h) => {
                (h?.type != "added" &&
                  h?.type != "updated" &&
                  h?.type != "removed") ||
                  (xt(h.query?.queryKey) &&
                    (0, n.h5)(() =>
                      this.m_boxCacheVersion.set(
                        this.m_boxCacheVersion.get() + 1,
                      ),
                    ));
              }));
          }
          ReadData() {
            return (
              this.LazyInit(),
              this.m_boxCacheVersion.get(),
              Mt(this.m_queryClient)
            );
          }
          BIsLoaded() {
            return this.ReadData().bLoaded;
          }
          GetWishlistGamesInUserOrder() {
            return this.ReadData().rgWishlistInOrder;
          }
          GetRecommendedGamesInIRPriorityOrder() {
            return this.ReadData().rgRecommendedAppsInOrder;
          }
          GetFollowedCuratorCount() {
            return this.ReadData().setCuratorsFollowed.size;
          }
          GetFollowedCuratorsAccountID() {
            return this.ReadData().rgCuratorsFollowed;
          }
          BIsFollowingCurator(h) {
            return this.ReadData().setCuratorsFollowed.has(T(h));
          }
          BIsIgnoringCurator(h) {
            return this.ReadData().setCuratorsIgnored.has(T(h));
          }
          get ExcludedContentDescriptor() {
            return this.ReadData().rgExcludedContentDescriptors;
          }
          BExcludeTagIDs(h) {
            const N = this.ReadData().setExcludedTagIDs;
            return h.some((A) => N.has(A));
          }
          GetExcludedTagsSortedByID() {
            return this.ReadData().rgExcludedTagIDsSorted;
          }
          BExcludesContentDescriptor(h) {
            const N = this.ReadData().setExcludedContentDescriptors;
            return h.some((A) => N.has(A));
          }
          BIncludesContentDescriptor(h) {
            return !this.ReadData().setExcludedContentDescriptors.has(h);
          }
          BIsGameWishlisted(h) {
            return this.ReadData().setWishlist.has(Number(h));
          }
          BIsGameRecommended(h) {
            return this.ReadData().setRecommendedApps.has(Number(h));
          }
          BIsGameIgnored(h) {
            return !!h && this.ReadData().mapIgnoredApps.has(Number(h));
          }
          BIsPackageIgnored(h) {
            return !!h && this.ReadData().mapIgnoredPackages.has(Number(h));
          }
          BIsGameOwned(h) {
            return !!h && this.ReadData().setOwnedApps.has(Number(h));
          }
          BIsStoreItemOwned(h) {
            switch (h.GetStoreItemType()) {
              case z.c6.qI:
                if (this.BIsGameOwned(h.GetAppID())) return !0;
                break;
              case z.c6.RD:
              case z.c6.xO:
                if (h.GetIncludedAppIDs().every((N) => this.BIsGameOwned(N)))
                  return !0;
                break;
            }
            return !1;
          }
          BOwnsApp(h) {
            return !!h && this.ReadData().setOwnedApps.has(Number(h));
          }
          BOwnsPackage(h) {
            return this.ReadData().setOwnedPackages.has(Number(h));
          }
          BHasUsedHardware(h) {
            return this.ReadData().setHardwareUsed.has(h);
          }
          BShowFilteredUserReviewScores() {
            return this.ReadData().bShowFilteredUserReviewScores;
          }
          BAppImpressionsAllowed() {
            return this.ReadData().bAllowAppImpressions;
          }
          GetPrimaryLanguage() {
            return this.ReadData().ePrimaryLanguage;
          }
          GetSecondaryLanguages() {
            return this.ReadData().setSecondaryLanguages;
          }
          BIsAnyLanguageEnabled(h) {
            const { ePrimaryLanguage: N, setSecondaryLanguages: A } =
              this.ReadData();
            return N == null || N <= W.xPp || W.bP9 <= N
              ? !0
              : h.some((tt) => N === tt || A.has(tt));
          }
          GetRecommendedTags() {
            return this.ReadData().rgRecommendedTags;
          }
          BIsAjaxInFlight() {
            return this.m_boxAjaxInFlight.get();
          }
          BIsAppRecommendedBySomeCurator(h) {
            return this.ReadData().mapRecommendingCuratorsForApp.has(Number(h));
          }
          GetRecommendingCuratorsForApp(h) {
            return this.ReadData().mapRecommendingCuratorsForApp.get(Number(h));
          }
          BHasPlatformPreferenceSet() {
            const h = this.ReadData().setPreferredPlatforms.size;
            return h > 0 && h < 3;
          }
          BIsPreferredPlatform(h) {
            return this.ReadData().setPreferredPlatforms.has(h);
          }
          async HintLoad() {
            return this.LazyInit(), await j(this.m_queryClient), this;
          }
          async UpdateFollowOrIgnoreCurator(h, N, A) {
            this.LazyInit();
            let tt =
              O.TS.STORE_BASE_URL +
              "curators/" +
              (N ? "ajaxfollow/" : "ajaxignore/");
            const st = h.GetAccountID(),
              ut = new FormData();
            ut.append("clanid", "" + st),
              ut.append("sessionid", (0, O.KC)()),
              ut.append(N ? "follow" : "ignore", A ? "1" : "0");
            let wt = await u().post(tt, ut, { withCredentials: !0 });
            return (
              wt &&
                wt.status == 200 &&
                (this.InvalidateCache(),
                J(this.m_queryClient, (zt) => {
                  const Kt = new Set(
                    N ? zt.setCuratorsFollowed : zt.setCuratorsIgnored,
                  );
                  return (
                    A ? Kt.add(st) : Kt.delete(st),
                    N
                      ? {
                          setCuratorsFollowed: Kt,
                          rgCuratorsFollowed: Array.from(Kt),
                        }
                      : { setCuratorsIgnored: Kt }
                  );
                })),
              wt.data
            );
          }
          async UpdateAppIgnore(h, N, A, tt = f.RI.$m) {
            this.LazyInit();
            let st = O.TS.STORE_BASE_URL + "recommended/ignorerecommendation";
            const ut = new FormData();
            ut.append("sessionid", (0, O.KC)()),
              ut.append("appid", "" + h),
              ut.append("remove", N ? "0" : "1"),
              ut.append("snr", A),
              ut.append("ignore_reason", "" + tt);
            try {
              (0, n.h5)(() => this.m_boxAjaxInFlight.set(!0));
              let wt = await u().post(st, ut, { withCredentials: !0 });
              return (
                wt &&
                  wt.status == 200 &&
                  (this.InvalidateCache(),
                  J(this.m_queryClient, (zt) => {
                    const Kt = new Map(zt.mapIgnoredApps);
                    return (
                      N ? Kt.set(Number(h), tt) : Kt.delete(Number(h)),
                      { mapIgnoredApps: Kt }
                    );
                  })),
                wt.data
              );
            } catch (wt) {
              let zt = (0, U.H)(wt);
              console.error("UpdateAppIgnore", zt.strErrorMsg, zt);
            } finally {
              (0, n.h5)(() => this.m_boxAjaxInFlight.set(!1));
            }
            return { success: b.zi };
          }
          async AddToCart(h, N, A, tt, st, ut, wt) {
            if (
              typeof window.g_bUseNewCartAPI < "u" &&
              window.g_bUseNewCartAPI &&
              typeof window.AddItemToCart == "function"
            ) {
              let yr;
              return (
                st && (yr = F.A.ParseSNR(st)),
                window.AddItemToCart(N, ut, yr),
                !0
              );
            }
            const zt = new FormData();
            zt.append("action", "add_to_cart"),
              ut
                ? zt.append("bundleid", ut.toString())
                : zt.append("subid", "" + N),
              st && zt.append("snr", st),
              zt.append("sessionid", (0, O.KC)()),
              zt.append("quantity", "1");
            const Kt = (0, v.uX)(h);
            h.preventDefault();
            try {
              await u().post(A, zt, { withCredentials: !0 }),
                this.InvalidateCache(),
                wt?.fnSetURL ? wt.fnSetURL(tt) : (Kt.location.href = tt);
            } catch (yr) {
              return console.log("HandleOnAddToCart", yr), !1;
            }
            return !0;
          }
          InvalidateCache() {
            (0, d.WZ)();
          }
          static s_globalSingletonStore;
          static Get() {
            return (
              H.s_globalSingletonStore || (H.s_globalSingletonStore = new H()),
              H.s_globalSingletonStore
            );
          }
          static BConfirmedAdultContentAgeGate() {
            return V();
          }
          constructor() {}
        }
        function T(S) {
          return typeof S == "object" && "GetAccountID" in S
            ? S.GetAccountID()
            : Number(S);
        }
        function D() {
          const { isPending: S } = nr();
          return [S, H.Get()];
        }
      },
      76867: (R, $, r) => {
        "use strict";
        r.d($, { M: () => W });
        var a = r(7850),
          u = r(90626),
          n = r(80724);
        function W(b) {
          const { children: U, ...O } = b,
            v = u.useRef(null);
          return (0, a.jsx)(n.A, { nodeRef: v, ...O, children: b.children(v) });
        }
      },
      85705: (R, $, r) => {
        "use strict";
        r.d($, { k: () => b });
        var a = r(7850),
          u = r(36707),
          n = r(37999),
          W = r.n(n);
        function b(U) {
          const { size: O, color: v, trackColor: F } = U,
            M = { borderColor: F, borderLeftColor: v };
          if (typeof O == "number") {
            const z = `${O}px`;
            (M.width = z),
              (M.height = z),
              (M.minHeight = z),
              (M.minWidth = z),
              (M.borderWidth = `${O / 10}px`);
          }
          return (0, a.jsx)("div", {
            className: (0, u.A)(
              n.Loading,
              O == "small" && n.Small,
              (O == "medium" || !O) && n.Medium,
              O == "large" && n.Large,
            ),
            style: M,
          });
        }
      },
      77200: (R, $, r) => {
        "use strict";
        r.d($, { w: () => b });
        var a = r(7850),
          u = r(90626);
        const n = u.createContext({});
        function W(U) {
          const { children: O, ...v } = U;
          return jsx(n.Provider, { value: v, children: O });
        }
        function b() {
          return u.useContext(n);
        }
      },
      21659: (R, $, r) => {
        "use strict";
        r.d($, { c5: () => b, zI: () => U });
        var a = r(90626),
          u = r(45387),
          n = r.n(u),
          W = r(54963);
        function b() {
          return window.innerWidth < parseInt(n().strMaxMobileWidth);
        }
        function U() {
          const v = (0, W.CH)();
          return (
            a.useEffect(
              () => (
                window.addEventListener("resize", v),
                () => window.removeEventListener("resize", v)
              ),
              [v],
            ),
            window.innerWidth < parseInt(n().strMaxMobileWidth)
          );
        }
        function O() {
          const v = useForceUpdate();
          return (
            React.useEffect(
              () => (
                window.addEventListener("resize", v),
                () => window.removeEventListener("resize", v)
              ),
              [v],
            ),
            window.innerWidth < parseInt(styles.strMaxResponsiveWidth)
          );
        }
      },
      99371: (R) => {
        R.exports = {
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
      76532: (R) => {
        R.exports = {
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
      64769: (R) => {
        R.exports = {
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
      39722: (R) => {
        R.exports = {
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
      10350: (R) => {
        R.exports = {
          ItemHoverSource: "_31qyh2htA-NLfzSAvjjJcl",
          Selectable: "b_zOCi3Z3BKdeweHShKDf",
          HoverContentTransition: "_14fzjUJx__1_iVvRQOFvNZ",
          Opening: "_1-VyPy3KZSzyBfUxYeZGHQ",
          Open: "_2lBsXkkcijYbtJ_ml1-6nE",
        };
      },
      95706: (R) => {
        R.exports = {
          AddToCartAnchorCtn: "_2qDFksxM_Q3AG6L1u8NwZU",
          Action: "ttu4ikNa3-0XD2V-s6GcO",
          ActionOutOfStock: "_1PlPor5x810Tggmt8VYmNm",
        };
      },
      72365: (R) => {
        R.exports = {
          DemoButton: "_28CiBI8NLjLb6f6rlg_Ymg",
          DisabledButton: "_2vOGUa8HwoudpQtMOK5Nqw",
        };
      },
      39285: (R) => {
        R.exports = {
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
      44375: (R) => {
        R.exports = {
          GreenButton: "_23fSnYfnMQqkgm3ROkJhrO",
          GreyButton: "_15dbpkIdbzeDJlZYQEhn1d",
          BlueButton: "_14GZWzJgooP0mbfTvEQnjA",
        };
      },
      73187: (R) => {
        R.exports = {
          CapsuleMicroTrailer: "_2aMRbzoT83AkFGYSmCvnRe",
          GrowOnHoverImplicit: "_23t3208XMavZer6IZIxzSb",
          GrowOnHoverMedium: "_2aYdrHuuHZHrhgAJh-eZX3",
        };
      },
      54599: (R) => {
        R.exports = {
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
      45737: (R) => {
        R.exports = {
          AdminPageCtn: "wC3_c2yhq3ppKA9AKQoTy",
          BaseUI: "_3ar6NZpkNtMK2pmiKMadXq",
          WidePageCtn: "uHgjQHyNygSKukDngfNQO",
          AdminHeader: "vrqqGANTuXeQs27RGumFj",
          Breadcrumbs: "_31raJsbMXVc33oW6c5hNxS",
          Required: "_1-jmJyKnLRFoN-GX0Oqor8",
          PageTitleFlexCtn: "_3uPTh_ikegl-PIq12cfjJg",
          PageTitle: "_2RxJB5bupbx0mkW8dYJQRE",
          Beta: "_1YBhTKSlOER8bOnp0BU4Wj",
          PageSubTitle: "okuL_y7hLnZUD5P4ACqUN",
          ValveOnlyTitle: "_3skaXOiv1_vtHc_pGOPNsc",
          ValveOnlyBackground: "_2FESGwA28dH3EVAa7uTsUX",
          SectionCtn: "_1eWwNe3G6T8EcVRg0R5Ftj",
          DividerHeading: "_2kKPmwgbsJ_P67Vo-HwwRf",
          ColumnCtn: "_1bjwXvgQa-kJBMijOLS8X5",
          LeftCol: "_1AqrivbzwCs57BXiugqpeA",
          ColHeader: "_3m2-TXBKQenlqzPUBuhbaD",
          Blue: "J7iYYml2Jf_PcaACW1hEr",
          ColHeaderImg: "_1VFkxNTzCFO2uCcle_nAJk",
          Bright: "_3ZqV0CAeVnd0rruF6TVKQz",
          ActionBar: "ilVbVkb6hkO_s6E_kiiSd",
          SectionIntroRequirements: "_3TKZIwYk2f5dd3MR5909Uz",
          warning: "_2HiNh3o5cgMEbzFKYBUjAy",
          IntroText: "_1WWL_09T_-Jq--HSJRhKtH",
          RightCol: "_3kaQhRnhNh_awrnNX90rui",
          NoSticky: "JQNb8bHftBTAYpCXTx52v",
          SmallText: "_3ltg5fPzb-WsRyzI41vAv_",
          Button: "_3L1DFwM1lpsRwZ-AaMx9ie",
          TitleSmall: "_3DyXNd5UgceEG9fcCKinvw",
          DefaultSectionCtn: "Pupnokb21glaosRjxBjAm",
          Indent: "_7PV326-4cpZdmTCEdgC2l",
          DashLink: "_2NH_FlbsKA0jN2jPG4Rn9A",
          FlexRow: "_3rz6jzCvvOGt8N0XaPIdzg",
          MarginBottom: "_2Bw2oyBgXlb8EZ4HHbE8Ye",
          UploadedImageDisplayCtn: "_1_JRuj6yAJovBDZE8IMSob",
          UploaderLeftCol: "_3KQhw0sa1q_h62e4yaFgbw",
          MarketingMessage: "_2pCvRF734J5gLxMMHW7LIb",
          BannerPreview: "_1x4unTauuLCbMkThgRpsXc",
          UploaderRightCol: "_3jcvvtnLhiQBvAebO2eI4Z",
          LangCountTitle: "_1tPNH9hTWnMUsbdob5i93a",
          LangSelectCtn: "_3tHzJ-eCQIlg-4XjTN0bNU",
          UploaderImgLang: "_1jJThBArHevzcJ93kx4WhR",
          LangSelected: "_1sUrnQsBw06ZqTIbMeE9tT",
          DeleteAll: "rYuknI3K1VFknv90GNUTc",
          EditCtn: "_1g5X3AT4HwD0ya2e2t2WTO",
          StatusBtn: "_1MGZHxsnyQPrLXwl-8Fium",
          HalfWidthBtnCtn: "fGJIpDJEvYkHmhWFP39BX",
          StatReportCtn: "_1J3v1KGOhdSGz77c2rLxWy",
          Stat: "_3OYQbVCq1yBuEx1XcDzG06",
          BigStat: "lYYwDDss378Sm0FKPBxPh",
          IncreaseRateInfo: "_2yY3XT7VPyYBZS3FCEGgRS",
          AdminVerticalTabs: "_38rhsxAONglYlA01yweB9r",
          RightPanel: "_1QYBs5PGw6PClZRx9WNL6z",
        };
      },
      52393: (R) => {
        R.exports = {
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
      58579: (R) => {
        R.exports = {
          ClientSelectDropdown: "_36ai7Zh_5P9n3Lpg52IdgV",
          ClientListDropdownMenu: "bEY2j4LBFVv4rCwEfxS64",
        };
      },
      37999: (R) => {
        R.exports = {
          Loading: "_24C5lxFpKz_kHyuT-8GJKK",
          LoadingSpinnerAmin: "_15h2OLuARlaaeboZ5TbsTx",
          Small: "_2FPxEVbkMdVDAw1TLfl_B5",
          Medium: "_2FfWbZHeiT3_nRXH-pI7av",
          Large: "_30IMocjbXd0leP4E5U2Yrx",
        };
      },
      45387: (R) => {
        R.exports = {
          strMaxMobileWidth: "700px",
          strMaxResponsiveWidth: "910px",
          strMaxTabletWidth: "1080px",
        };
      },
    },
  ]);
})();
