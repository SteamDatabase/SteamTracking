/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39297],
    {
      13558: ($, ft, r) => {
        "use strict";
        r.d(ft, { Tv: () => it, _u: () => _ });
        var e = r(7850),
          L = r(90626),
          N = r(36707),
          Y = r(93237),
          z = r.n(Y);
        const h = 10;
        function u(S) {
          return S === void 0 ? !1 : S <= h;
        }
        const s = new WeakMap();
        function rt(S, E) {
          for (const R of S.groups) {
            let U = s.get(R.achievements);
            U ||
              ((U = new Map(
                R.achievements.map((V) => [V.api_name, V.internal_key]),
              )),
              s.set(R.achievements, U));
            const q = U.get(E);
            if (q !== void 0) return q;
          }
        }
        function vt(S) {
          return (S?.groups_achievable?.total ?? 0) != 0;
        }
        function Z(S, E, R) {
          return S.achievements.some(
            (U) => (!S.archived && !U.archived) || D(U, E, R),
          );
        }
        function D(S, E, R) {
          return (
            E?.achievements[S.internal_key]?.unlocked == !0 ||
            (R?.some((U) => U?.achievements[S.internal_key]?.unlocked == !0) ??
              !1)
          );
        }
        function v(S, E) {
          if (Array.isArray(S))
            return (
              S.length > 1 ||
              (S.length == 1 && S[0] !== k_DefaultAchievementGroup)
            );
          {
            const R = S.groups.filter((U) => Z(U, E));
            return (
              R.length > 1 ||
              (R.length == 1 && R[0].id !== k_DefaultAchievementGroup)
            );
          }
        }
        function yt(S, E) {
          return new Intl.DateTimeFormat(GetPreferredLocales(), {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: E ? "h23" : void 0,
          }).format(new Date(S * 1e3));
        }
        function T(S, E) {
          return AchievementsLocalization.Localize(
            "#Achievements_PercentFormat",
            S.toLocaleString(GetPreferredLocales(), E),
          );
        }
        function w(S, E) {
          const R = E > 0 ? S / E : 0,
            U = T(R * 100, { maximumFractionDigits: E > 100 ? 1 : 0 });
          return { percentUnlocked: R, percentUnlockedStr: U };
        }
        function X(S) {
          return S === void 0
            ? ""
            : T(S, { maximumFractionDigits: 1, minimumFractionDigits: 1 });
        }
        function W(S) {
          return AchievementsLocalization.Localize(
            "#Achievements_Tooltip_GlobalUnlockPercent",
            X(S),
          );
        }
        function F(S, E) {
          return E
            ? {
                name: AchievementsLocalization.Localize(
                  "#AchievementSpoilerName",
                ),
                description: AchievementsLocalization.Localize(
                  "#AchievementSpoilerDescription",
                ),
              }
            : { name: S.name ?? "", description: S.description ?? "" };
        }
        function et(S) {
          return S >= 17891964e-1;
        }
        var at = r(64082);
        function Bt(S) {
          if (S !== void 0)
            return { "--icon-size": S == "fill" ? "100%" : `${S}px` };
        }
        function _(S) {
          const {
              imgURL: E,
              glow: R,
              pauseAnimation: U,
              hidden: q,
              alt: V,
              hideNativeTooltip: st = !1,
              className: nt,
              size: mt,
              ...Tt
            } = S,
            [gt, At] = L.useState(!1),
            Lt = L.useCallback((ot) => {
              ot &&
                (ot.complete
                  ? At(!0)
                  : (ot.onload = () => {
                      At(!0);
                    }));
            }, []),
            p = R && (q || gt),
            k = Bt(mt);
          return (0, e.jsxs)("div", {
            className: (0, N.A)(
              z().AchievementIconWrapper,
              nt,
              U && z().RareAchievementNoAnimation,
            ),
            style: k,
            ...Tt,
            children: [
              p &&
                (0, e.jsx)("div", {
                  className: z().RareAchievementIconGlowContainerRoot,
                  children: (0, e.jsx)("div", {
                    className: z().RareAchievementIconGlowContainer,
                    children: (0, e.jsx)("div", {
                      className: z().RareAchievementIconGlow,
                    }),
                  }),
                }),
              q
                ? (0, e.jsx)("div", {
                    className: (0, N.A)(z().HiddenLabel, p && z().IconGlow),
                    children: "?",
                  })
                : (0, e.jsx)("img", {
                    ref: Lt,
                    className: (0, N.A)(z().Icon, p && z().IconGlow),
                    src: E == "" ? void 0 : E,
                    loading: "lazy",
                    alt: V,
                    title: st ? void 0 : V,
                  }),
            ],
          });
        }
        function it(S) {
          const {
              achievement: E,
              globalUnlockPercentage: R,
              unlocked: U,
              forceVisible: q = !1,
              hidden: V,
              ...st
            } = S,
            nt = V ?? (U ? !1 : !q && E.hidden),
            mt = (U ? E.icon_achieved : E.icon_unachieved) ?? "",
            Tt = U && u(R),
            gt = nt
              ? at.c.Localize("#AchievementSpoilerName")
              : (E.name ?? " ");
          return (0, e.jsx)(_, {
            hidden: nt,
            imgURL: mt,
            glow: Tt,
            alt: gt,
            ...st,
          });
        }
        function Ct(S) {
          const {
              hidden: E,
              forceVisible: R,
              size: U,
              className: q,
              style: V,
              onClick: st,
              unlocked: nt,
              ...mt
            } = S,
            { appid: Tt, achievement: gt, progress: At } = mt,
            Lt = useGlobalAchievementPercentage(Tt, gt.internal_key);
          return jsx(AchievementToolTip, {
            ...mt,
            children: jsx(it, {
              achievement: gt,
              globalUnlockPercentage: Lt,
              unlocked: nt ?? At?.unlocked ?? !1,
              hidden: E,
              forceVisible: R,
              size: U,
              className: q,
              style: V,
              onClick: st,
              hideNativeTooltip: !0,
            }),
          });
        }
      },
      98001: ($, ft, r) => {
        "use strict";
        r.d(ft, { v: () => N });
        var e = r(72609);
        function L(Y) {
          const { appid: z, profileUrl: h, dlc: u } = Y,
            s = h
              ? `${h}/achievements/${z}`
              : `${e.TS.COMMUNITY_BASE_URL}achievements/${z}`;
          return u !== void 0 ? `${s}?dlc=${u}` : s;
        }
        function N(Y) {
          return L(Y);
        }
      },
      64082: ($, ft, r) => {
        "use strict";
        r.d(ft, { c: () => Y });
        var e = r(37901);
        const L = {};
        (L.arabic = () => r.e(94507).then(r.t.bind(r, 94507, 19))),
          (L.brazilian = () => r.e(29815).then(r.t.bind(r, 29815, 19))),
          (L.bulgarian = () => r.e(79200).then(r.t.bind(r, 79200, 19))),
          (L.czech = () => r.e(81142).then(r.t.bind(r, 81142, 19))),
          (L.danish = () => r.e(42394).then(r.t.bind(r, 42394, 19))),
          (L.dutch = () => r.e(80559).then(r.t.bind(r, 80559, 19))),
          (L.english = () => r.e(92885).then(r.t.bind(r, 92885, 19))),
          (L.finnish = () => r.e(22754).then(r.t.bind(r, 22754, 19))),
          (L.french = () => r.e(89627).then(r.t.bind(r, 89627, 19))),
          (L.german = () => r.e(8281).then(r.t.bind(r, 8281, 19))),
          (L.greek = () => r.e(53749).then(r.t.bind(r, 53749, 19))),
          (L.hungarian = () => r.e(88180).then(r.t.bind(r, 88180, 19))),
          (L.indonesian = () => r.e(13303).then(r.t.bind(r, 13303, 19))),
          (L.italian = () => r.e(28757).then(r.t.bind(r, 28757, 19))),
          (L.japanese = () => r.e(88468).then(r.t.bind(r, 88468, 19))),
          (L.koreana = () => r.e(82558).then(r.t.bind(r, 82558, 19))),
          (L.latam = () => r.e(3894).then(r.t.bind(r, 3894, 19))),
          (L.malay = () => r.e(35957).then(r.t.bind(r, 35957, 19))),
          (L.norwegian = () => r.e(43081).then(r.t.bind(r, 43081, 19))),
          (L.polish = () => r.e(63822).then(r.t.bind(r, 63822, 19))),
          (L.portuguese = () => r.e(16470).then(r.t.bind(r, 16470, 19))),
          (L.romanian = () => r.e(46488).then(r.t.bind(r, 46488, 19))),
          (L.russian = () => r.e(50272).then(r.t.bind(r, 50272, 19))),
          (L.sc_schinese = () => r.e(88794).then(r.t.bind(r, 88794, 19))),
          (L.schinese = () => r.e(15171).then(r.t.bind(r, 15171, 19))),
          (L.spanish = () => r.e(34341).then(r.t.bind(r, 34341, 19))),
          (L.swedish = () => r.e(61844).then(r.t.bind(r, 61844, 19))),
          (L.tchinese = () => r.e(71088).then(r.t.bind(r, 71088, 19))),
          (L.thai = () => r.e(49829).then(r.t.bind(r, 49829, 19))),
          (L.turkish = () => r.e(95917).then(r.t.bind(r, 95917, 19))),
          (L.ukrainian = () => r.e(15151).then(r.t.bind(r, 15151, 19))),
          (L.vietnamese = () => r.e(53460).then(r.t.bind(r, 53460, 19)));
        async function N(z) {
          if (L[z]) return L[z]();
        }
        const Y = (0, e.l)(N);
      },
      3946: ($, ft, r) => {
        "use strict";
        r.d(ft, { V: () => N });
        var e = r(7850),
          L = r(72080);
        function N(Y) {
          return (0, e.jsxs)("a", {
            href: Y.strURL,
            className: L.gg.Box,
            "data-modal-content-sizetofit": !!Y.bSizeToFit,
            "data-appid": Y.appid,
            "data-publishedfileid": Y.publishedfileid,
            children: [
              (0, e.jsx)(L.KN, { strURL: Y.strPreviewURL }),
              (0, e.jsxs)(L.J7, {
                children: [
                  (0, e.jsx)(L.bv, { children: Y.strTitle }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("span", {
                      className: L.gg.Type,
                      children: Y.strType,
                    }),
                  }),
                  Y.author && (0, e.jsx)(L.zN, { children: Y.author }),
                  (0, e.jsx)(L.AT, { children: Y.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      93191: ($, ft, r) => {
        "use strict";
        r.d(ft, { F: () => N, n: () => L });
        var e = r(72609);
        function L(Y, z) {
          return Y?.public_data?.profile_url
            ? `${e.TS.COMMUNITY_BASE_URL}id/${Y.public_data.profile_url}`
            : N(Y?.public_data?.steamid || z);
        }
        function N(Y) {
          return Y ? `${e.TS.COMMUNITY_BASE_URL}profiles/${Y}` : "";
        }
      },
      15860: ($, ft, r) => {
        "use strict";
        r.d(ft, { L: () => h, c: () => z });
        var e = r(27386),
          L = r(76617),
          N = r(58632),
          Y = r.n(N);
        function z(u, s) {
          return new (Y())(
            async (rt) => {
              const vt = [...rt],
                Z = await e.xtC.GetPlayerLinkDetails(u, { steamids: vt }),
                D = new Map();
              return (
                Z.Body()
                  .accounts()
                  .forEach((v) => {
                    const yt = v.toObject();
                    D.set(yt.public_data.steamid, yt);
                  }),
                vt.map((v) => D.get(v) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...s },
          );
        }
        function h(u) {
          return (0, L.V)("PlayerLinkDetails", () => z(u));
        }
      },
      54357: ($, ft, r) => {
        "use strict";
        r.d(ft, { B: () => rt });
        var e = r(7850),
          L = r(90626);
        function N(Z) {
          const [D, v] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => v(!0));
            }, []),
            jsx(Y.Provider, { value: D, children: Z.children })
          );
        }
        const Y = (0, L.createContext)(!1);
        function z() {
          return !0;
        }
        const h = Intl.DateTimeFormat().resolvedOptions().timeZone,
          u =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((Z) => Z.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          s = u && decodeURIComponent(u);
        function rt() {
          return z() ? h : (s ?? h);
        }
        function vt() {
          "document" in globalThis &&
            h &&
            (document.cookie = `timezoneName=${h};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        vt();
      },
      69596: ($, ft, r) => {
        "use strict";
        r.d(ft, { O: () => N });
        const e =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function L(Y) {
          return Y ? e.test(Y.trim()) : !1;
        }
        function N(Y, z) {
          return L(Y) ? Y : z;
        }
      },
      11547: ($, ft, r) => {
        "use strict";
        r.d(ft, { H: () => ae, k: () => oe });
        var e = r(7850),
          L = r(29950),
          N = r(29630),
          Y = r(68941),
          z = r(70187),
          h = r(1917),
          u = r(24660),
          s = r(72609),
          rt = r(86722),
          vt = r(6878),
          Z = r.n(vt),
          D = r(53107),
          v = r(36707),
          yt = r(53113),
          T = r(69596),
          w = r(35265);
        function X(M) {
          switch (M) {
            case "button":
              return (0, v.A)(Z().LinkButton, "LinkButton");
            case "pill":
              return (0, v.A)(Z().LinkPill, "LinkPill");
            default:
              return (0, v.A)(Z().Link, "Link");
          }
        }
        function W(M, C, tt) {
          let J = "";
          return (
            M == "button" && C && (J += `background-color: ${C};`),
            M == "pill" && tt && (J += `color: ${tt};`),
            J.length == 0 ? void 0 : J
          );
        }
        function F(M, C, tt) {
          let J;
          return (
            (M == "button" || M == "pill") && C && (J = { backgroundColor: C }),
            (M == "button" || M == "pill") &&
              tt &&
              (J = { ...(J ?? {}), color: tt }),
            J
          );
        }
        function et(M, C) {
          const tt = (
            typeof M == "string"
              ? M
              : Array.isArray(M) && M.length == 1 && typeof M[0] == "string"
                ? M[0]
                : void 0
          )?.trim();
          return !tt || !C ? !0 : tt != C.trim();
        }
        function at(M) {
          let C = (0, L.J)((0, z.j$)(M.args) || (0, z.j$)(M.args, "href"));
          const tt = (0, z.j$)(M.args, "style"),
            J = (0, z.j$)(M.args, "id"),
            Mt = (0, T.O)(
              (0, z.j$)(M.args, "buttoncolor") || (0, z.j$)(M.args, "bgcolor"),
              void 0,
            ),
            Nt = (0, T.O)(
              (0, z.j$)(M.args, "labelcolor") || (0, z.j$)(M.args, "color"),
              void 0,
            ),
            Pt = X(tt),
            Yt = M.context.event,
            St = (0, N.z5)(C, M.language, Yt?.rtime32_last_modified),
            Xt = (0, w.W7)(et(M.children, C) ? "" : (C ?? ""));
          if (Xt && C) return Xt.fnBBComponent(C, { event: M.context.event });
          if (St === void 0 || St == null) return M.children || "";
          typeof St == "string" ? (C = St) : (C = St[1]);
          const ie = F(tt, Mt, Nt);
          return typeof C == "string" && C.length > 0 && C[0] == "#"
            ? (0, e.jsx)(u.Ii, {
                className: Pt,
                href: C,
                style: ie,
                children: M.children,
              })
            : C == "steam://settings/account"
              ? (0, e.jsx)(D.uU, {
                  className: Pt,
                  href: "steam://settings/account",
                  children: M.children,
                })
              : (0, e.jsx)(rt.d$, {
                  className: Pt,
                  url: C,
                  event: M.context.event,
                  id: J,
                  style: ie,
                  children: M.children,
                });
        }
        function Bt(M) {
          const C = (0, z.j$)(M.args, "href"),
            tt = (0, w.W7)(C);
          return tt
            ? tt.fnBBComponent(C, { event: M.context.event })
            : (0, e.jsx)(at, { ...M });
        }
        var _ = r(25046),
          it = r(29522),
          Ct = r(40358),
          S = r(64271),
          E = r(90626),
          R = r(67523),
          U = r.n(R),
          q = r(36118),
          V = r(18210),
          st = r(85599),
          nt = r(89767),
          mt = r.n(nt),
          Tt = r(64457),
          gt = r(48963),
          At = r.n(gt),
          Lt = ((M) => (
            (M.k_TrailerAsButton = "button"),
            (M.k_TrailerAsPill = "pill"),
            (M.k_TrailerAsFull = "full"),
            (M.k_TrailerAsPoster = "poster"),
            (M.k_TrailerAsMicro = "micro"),
            M
          ))(Lt || {});
        const p = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function k(M, C) {
          const tt = new Set();
          for (const J of M.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const Mt = p.exec(J[1] ?? ""),
              Nt = Mt ? Number.parseInt(Mt[1] ?? Mt[2] ?? Mt[3] ?? "") : C;
            Nt && tt.add(Nt);
          }
          return Array.from(tt);
        }
        function ot(M) {
          const {
              embedStyle: C,
              appid: tt,
              color: J,
              bgcolor: Mt,
              children: Nt,
              trailerBaseID: Pt,
              subtitles: Yt,
            } = M,
            [St, Xt] = (0, E.useState)(!1),
            ie = (0, E.useMemo)(() => ({ appid: tt }), [tt]);
          switch (C) {
            case "button":
            case "pill":
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)("button", {
                    type: "button",
                    className: (0, v.A)({
                      [mt().Pill]: C == "pill",
                      [mt().Button]: C == "button",
                    }),
                    onClick: () => Xt(!0),
                    style: { color: J, backgroundColor: Mt },
                    children: [
                      (0, e.jsx)(q.jGG, {}),
                      Nt || (0, V.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, e.jsx)(Tt.PE, {
                    id: ie,
                    bShowModal: St,
                    trailerBaseID: Pt,
                    hideModal: () => Xt(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, e.jsx)(ht, { ...M });
          }
        }
        function ht(M) {
          const { appid: C, trailerBaseID: tt } = M,
            J = (0, it.$5)(C),
            { data: Mt } = (0, Ct.J$)(J),
            [Nt, Pt] = (0, E.useState)(() =>
              !C || !tt ? (0, V.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            Yt = (0, _.kB)(J),
            St = (0, E.useMemo)(
              () => (Yt ? Yt.find((Xt) => Xt.trailer_base_id === tt) : null),
              [Yt, tt],
            );
          return (
            (0, E.useEffect)(() => {
              Mt?.unvailable_for_country_restriction &&
                Pt((0, V.we)("#TrailerPlayer_CouldNotLoad", C, tt)),
                Yt &&
                  !St &&
                  Pt(
                    (0, V.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      M.appid,
                      M.trailerBaseID,
                    ),
                  );
            }, [
              C,
              M.appid,
              M.trailerBaseID,
              Mt?.unvailable_for_country_restriction,
              tt,
              St,
              Yt,
            ]),
            Nt
              ? M.bIsPreviewMode
                ? (0, e.jsx)("div", { className: U().ErrorDiv, children: Nt })
                : null
              : St
                ? (0, e.jsx)(Et, { trailerToPlay: St })
                : (0, e.jsx)(st.t, {
                    string: (0, V.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function Et(M) {
          const { trailerToPlay: C } = M,
            {
              rgDashTrailers: tt,
              rgHlsTrailers: J,
              strCaptionManufest: Mt,
            } = (0, E.useMemo)(() => {
              const { rgDashTrailers: Nt, rgHlsTrailers: Pt } = (0, _.hg)(C),
                Yt = (0, _.Wv)(C);
              return {
                rgDashTrailers: Nt,
                rgHlsTrailers: Pt,
                strCaptionManufest: Yt,
              };
            }, [C]);
          return tt?.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: At().VideoPopupContainers,
                children: (0, e.jsx)(S.P, {
                  dashManifests: tt || [],
                  hlsManifest: (J.length > 0 && J?.[0]) || "",
                  screenshot: (0, _.hl)(C),
                  altText: C.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: Mt,
                }),
              });
        }
        var jt = r(34736),
          pt = r(39239),
          xt = r(13465),
          bt = r(80150),
          zt = r(18994),
          Ut = r(3166),
          wt = r(68538);
        function Ot(M) {
          const C = (0, Ut.Qn)(),
            tt = (0, zt.a4)(zt.Wn),
            J =
              String((0, z.j$)(M.args, "autoadvance")).toLowerCase() === "true";
          return (0, e.jsx)(wt.F, {
            hideArrows: !tt,
            hidePips: C,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: tt,
            bAutoAdvance: J,
            className: Z().ScreenshotCarousel,
            children: M.children,
          });
        }
        var Rt = r(37501),
          _t = r.n(Rt),
          te = r(1123);
        function Jt(M) {
          const { strURL: C, children: tt } = M;
          return (
            typeof C == "string"
              ? !(0, yt.ZF)(C)
              : C.some((Mt) => !(0, yt.ZF)(Mt))
          )
            ? (0, e.jsx)(kt, { children: tt })
            : (0, e.jsx)(e.Fragment, { children: tt });
        }
        function kt(M) {
          const { children: C } = M;
          return (0, te.Ey)()
            ? (0, e.jsx)(e.Fragment, { children: C })
            : (0, e.jsx)("div", {
                className: _t().ImageBlocked,
                children: (0, V.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, e.jsx)("a", {
                    href: s.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var ee = r(33645),
          re = r.n(ee);
        let se = null;
        function oe() {
          return (
            se == null &&
              (se = new Map([
                ["url", { Constructor: at, autocloses: !1 }],
                ["dynamiclink", { Constructor: Bt, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: z.Tu(z.Zb, Z().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: z.Tu(z.Sz, Z().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: z.Tu(z.ZS, Z().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: z.Tu(z.Pk, Z().BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: z.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: z._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: z.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: z.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: le, autocloses: !1 }],
                ["previewyoutube", { Constructor: h.gH, autocloses: !1 }],
                ["looping_media", { Constructor: Y.$A, autocloses: !1 }],
                ["video", { Constructor: Y.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: h.Eo, autocloses: !1 }],
                ["trailer", { Constructor: de, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: me,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: ce, autocloses: !1 }],
                ["carousel", { Constructor: Ot, autocloses: !1 }],
              ])),
            se
          );
        }
        function le(M) {
          const { showErrorInfo: C, event: tt } = M.context;
          let J = (0, z.j$)(M.args, "src") || M.children?.toString();
          J || (J = (0, z.j$)(M.args)), (J = (0, L.J)(J ?? "") || void 0);
          const Mt = (0, z.j$)(M.args, "style") === "inline",
            Nt = (0, N.z5)(J, M.language, tt?.rtime32_last_modified);
          if (Nt == null) return null;
          if (typeof Nt == "string") {
            J = Nt;
            let Pt;
            return (
              (Pt = !(0, yt.ZF)(J)),
              tt?.BHasTag("auto_rssfeed") && (Pt = !1),
              C
                ? (0, e.jsx)(pt.i, {
                    className: (0, v.A)({ [re().Image_Inline]: Mt }),
                    src: J,
                    crossOrigin: Pt ? "anonymous" : void 0,
                  })
                : ((J = (0, yt.L$)(J)),
                  (0, e.jsx)(Jt, {
                    strURL: J,
                    children: (0, e.jsx)(bt.o, {
                      className: (0, v.A)({ [re().Image_Inline]: Mt }),
                      src: J,
                      crossOrigin: Pt ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, e.jsx)(Jt, {
              strURL: Nt,
              children: (0, e.jsx)(xt.c, { rgSources: Nt }),
            });
        }
        function ce(M) {
          const C = (0, z.j$)(M.args);
          if (C == null || C == null || C.length == 0) return "";
          const tt = M.children?.toString(),
            J = new Array();
          return (
            J.push(
              `${s.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${s.TS.LANGUAGE}/${C}`,
            ),
            s.TS.LANGUAGE != "english" &&
              J.push(
                `${s.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${C}`,
              ),
            (0, e.jsx)(xt.c, { rgSources: J, alt: tt })
          );
        }
        function de(M) {
          const C = ae(M.args, "appid", M.context.event?.appid ?? 0),
            tt = ae(M.args, "trailerid", 0);
          let J =
            (0, z.j$)(M.args, "style")?.toLocaleLowerCase() ??
            Lt.k_TrailerAsFull;
          J = Object.values(Lt).includes(J) ? J : Lt.k_TrailerAsFull;
          const Mt = (0, T.O)(M.args.color, "black"),
            Nt = (0, T.O)(M.args.bgcolor, "white"),
            Pt = (0, Y.g4)(M.args);
          return (0, e.jsx)(ot, {
            appid: C,
            trailerBaseID: tt,
            bIsPreviewMode: M.context.showErrorInfo,
            embedStyle: J,
            color: Mt,
            bgcolor: Nt,
            subtitles: Pt.rgVideoTracks,
            children: M.children,
          });
        }
        function me(M) {
          const C = (0, z.j$)(M.args, "name"),
            tt = (0, z.j$)(M.args, "title"),
            J = (0, z.j$)(M.args, "company"),
            Mt = (0, z.j$)(M.args, "photo");
          return M.context.bShowShortSpeakerInfo
            ? (0, e.jsx)(jt.S8, {
                name: C,
                title: tt,
                company: J,
                photo: Mt,
                bio: M.children,
              })
            : (0, e.jsx)(jt.$k, {
                name: C,
                title: tt,
                company: J,
                photo: Mt,
                bio: M.children,
              });
        }
        function ae(M, C, tt) {
          const J = (0, z.j$)(M, C);
          return J === void 0 || J == null ? tt : Number.parseInt(J);
        }
      },
      1683: ($, ft, r) => {
        "use strict";
        r.d(ft, { d3: () => _, Zn: () => it });
        var e = r(7850),
          L = r(33770),
          N = r(7487),
          Y = r(72609),
          z = r(90626),
          h = r(70187),
          u = r(86722),
          s = r(39414),
          rt = r(38340),
          vt = r(96197),
          Z = r(53113);
        class D extends N.K0 {
          m_LinkFilter = s.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(E, R, U, q) {
            super(E),
              (this.m_parentNode = R),
              (this.m_mapHostToComponent = U),
              (this.m_globalStoreLink = q);
          }
          AppendText(E, R = !1) {
            let U = E;
            if (
              (R || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let q = this.m_LinkFilter.exec(U);
              for (; q; ) {
                if (q.index > 0) {
                  let nt = q.input.substring(0, q.index);
                  super.AppendText(nt, R);
                }
                let V = q[0],
                  st = !1;
                if (this.m_mapHostToComponent) {
                  for (let nt = 0; nt < this.m_mapHostToComponent.length; ++nt)
                    if (this.m_mapHostToComponent[nt].urlRegExp.exec(V)) {
                      (st = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[nt].fnBBComponent(
                            V,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                st || super.AppendNode((0, u.Pm)(V)),
                  (U = q.input.substring(q.index + V.length)),
                  (q = this.m_LinkFilter.exec(U));
              }
            }
            U.length > 0 && super.AppendText(U, R);
          }
        }
        const v = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class yt extends N.K0 {
          m_EmoteRegex = new RegExp(v);
          AppendText(E, R = !1) {
            let U = E;
            if (E.length >= 3) {
              let q = this.m_EmoteRegex.exec(U);
              for (; q; ) {
                if (q.index > 0) {
                  let st = q.input.substring(0, q.index);
                  super.AppendText(st, R);
                }
                let V = q[1];
                super.AppendNode(z.createElement(vt.n, { emoticon: V }, [])),
                  (U = q.input.substring(q.index + V.length + 2)),
                  (q = this.m_EmoteRegex.exec(U));
              }
            }
            U.length > 0 && super.AppendText(U, R);
          }
        }
        class T extends N.K0 {
          m_parentNode = void 0;
          constructor(E, R) {
            super(E), (this.m_parentNode = R);
          }
          AppendText(E, R = !1) {
            let U = E;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !w(U) &&
              (U = (0, Z.L$)(U)),
              super.AppendText(U, R);
          }
        }
        function w(S) {
          const E = S.trim();
          return E.startsWith(rt.lw) || E.startsWith(rt.eg);
        }
        var X = r(11547),
          W = r(35265);
        let F = null;
        function et() {
          return (
            F == null &&
              (F = new Map([
                ...Array.from(h.W4.entries()),
                ...Array.from((0, X.k)().entries()),
              ])),
            F
          );
        }
        const at = z.createContext(null);
        function Bt() {
          return z.useContext(at) ?? et();
        }
        function _(S) {
          const E = Bt(),
            R = z.useMemo(
              () =>
                new Map([
                  ...Array.from(E.entries()),
                  ...Array.from(S.dictionary.entries()),
                ]),
              [E, S.dictionary],
            );
          return (0, e.jsx)(at.Provider, { value: R, children: S.children });
        }
        function it(S) {
          const {
              text: E,
              languageOverride: R,
              event: U,
              showErrorInfo: q,
              bShowShortSpeakerInfo: V,
            } = S,
            st = (0, W.m$)(),
            nt = z.useCallback(
              (gt) =>
                new T(
                  new yt(new D(new N.OJ(new N.R8()), gt, st, { event: U })),
                  gt,
                ),
              [U, st],
            ),
            mt = Bt();
          return z
            .useMemo(() => new L.B(mt, nt, R || Y.TS.LANGUAGE), [mt, nt, R])
            .ParseBBCode(E, {
              showErrorInfo: q,
              event: U,
              bShowShortSpeakerInfo: V,
              bbcode: E,
            });
        }
        function Ct(S) {
          const {
              strTag: E,
              args: R,
              rawargs: U,
              language: q = PchLanguageToELanguage(Config.LANGUAGE),
              children: V,
              ...st
            } = S,
            nt = Bt().get(E);
          return nt
            ? jsx(nt.Constructor, {
                context: st,
                tagname: E,
                args: R,
                language: q,
                rawargs: U,
                children: V,
              })
            : jsxs(Fragment, { children: [`[${E}]`, V, `[/${E}]`] });
        }
      },
      35265: ($, ft, r) => {
        "use strict";
        r.d(ft, { m$: () => Ee, W7: () => An });
        var e = r(7850),
          L = r(32093),
          N = r(72609),
          Y = r(88743),
          z = r(40358),
          h = r(90626),
          u = r(86722),
          s = r(6878),
          rt = r.n(s),
          vt = r(36118),
          Z = r(36707),
          D = r(87949),
          v = r(55483),
          yt = r(10985),
          T = r(99412),
          w = r(47797),
          X = r(76559);
        const W =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          F =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          et = [W, F],
          at =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function Bt(b, I) {
          const O = new RegExp(b).exec(I);
          if (!O || O.length <= 3) return;
          const ut = O[3];
          if (ut)
            switch (O[1]) {
              case "gid":
                return { eventGID: ut, strClanSteamID64: O[2] };
              case "group":
                return { eventGID: ut, clanAccountID: Number.parseInt(O[2]) };
              case "groups":
                return { eventGID: ut, strGroupVanity: O[2] };
              default:
                return isNaN(+O[2])
                  ? { eventGID: ut, strOGGVanity: O[2] }
                  : { eventGID: ut, appid: Number(O[2]) };
            }
        }
        function _(b) {
          for (const I of et) {
            const O = Bt(I, b);
            if (O) return O;
          }
        }
        function it(b) {
          const I = [],
            O = new Set(),
            ut = [
              ...et.map((lt) => ({ regExp: lt, bAnnouncement: !1 })),
              { regExp: at, bAnnouncement: !0 },
            ];
          for (const { regExp: lt, bAnnouncement: Ht } of ut)
            for (const xe of b.matchAll(new RegExp(lt, "gi"))) {
              const Me = Bt(lt, xe[0]);
              Me &&
                !O.has(`${Ht ? "A" : "E"}${Me.eventGID}`) &&
                (O.add(`${Ht ? "A" : "E"}${Me.eventGID}`),
                I.push({ link: Me, bAnnouncement: Ht }));
            }
          return I;
        }
        var Ct = r(9046),
          S = r(72080),
          E = r(29522),
          R = r(85599),
          U = r(18210),
          q = r(13465),
          V = r(56492),
          st = r(88812),
          nt = r(39654);
        function mt({ clanSteamID: b, strVanity: I, strGroupVanity: O }) {
          const ut = I !== void 0 || O !== void 0,
            { data: lt, isPending: Ht } = (0, v.W$)(
              ut ? (I ?? O ?? "") : "",
              I !== void 0 ? "store" : "group",
            );
          if (!ut) return b?.GetAccountID();
          if (!Ht) return lt?.clanAccountID ?? null;
        }
        function Tt(b) {
          const { appid: I, announcementGID: O, eventGID: ut, strURL: lt } = b,
            Ht = mt(b),
            xe = Ht === null,
            Me = Ht != null,
            {
              data: Ae,
              isPending: yn,
              isError: Zn,
            } = (0, nt.vE)(
              xe
                ? void 0
                : {
                    clanAccountID: Me ? Ht : void 0,
                    appid: I,
                    eventGID: ut,
                    announcementGID: O,
                  },
            ),
            $n = (0, E.$5)(I || Ae?.appid || void 0),
            { data: pi } = (0, z.J$)($n);
          if (xe || Zn || Ae === null) return (0, u.Pm)(lt);
          if (yn || !Ae) return (0, e.jsx)(R.t, {});
          const wn = (0, T.sfN)(N.TS.LANGUAGE),
            En = Ae.GetNameWithFallback(wn),
            pn = Ae.GetSubTitleWithSummaryFallback(wn),
            Jn = pi?.name,
            Pn = (0, U.TW)(Ae.GetStartTimeAndDateUnixSeconds());
          return (0, e.jsxs)(V.tj, {
            eventModel: Ae,
            route: V.PH.k_eView,
            className: S.gg.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": I,
            children: [
              (0, e.jsx)(gt, { ...b, event: Ae }),
              (0, e.jsxs)(S.J7, {
                children: [
                  (0, e.jsxs)(S.zN, {
                    children: [
                      (0, U.we)(
                        Ae.type == T.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        Jn ?? "",
                      ),
                      (0, e.jsx)(S.MG, { children: Pn }),
                    ],
                  }),
                  (0, e.jsx)(S.bv, {
                    children: (0, e.jsx)("div", {
                      className: S.gg.Type,
                      children: En,
                    }),
                  }),
                  (0, e.jsx)(S.AT, { children: pn }),
                ],
              }),
            ],
          });
        }
        function gt(b) {
          const {
            event: I,
            fnFilterImageURLsForKnownFailures: O,
            fnImageFailureCallback: ut,
          } = b;
          let lt = (0, T.sfN)(N.TS.LANGUAGE),
            Ht = (0, st.WC)(I, "capsule", lt, Ct.wI.capsule_main) ?? [];
          return (
            Ht && O && (Ht = O(Ht)),
            (0, e.jsx)(q.c, {
              className: S.gg.Preview,
              rgSources: Ht ?? [],
              onIncrementalError: (xe, Me, Ae) => ut && ut(Me),
            })
          );
        }
        var At = r(10349),
          Lt = r(53113);
        const p =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          k = ["store.steampowered.com", "store.steamchina.com"],
          ot = ["steampowered.com", "steamcommunity.com"],
          ht = ["steamchina.com"],
          Et = ["steam.dev", "valve.org"];
        function jt(b, I) {
          return I.some((O) => b == O || b.endsWith(`.${O}`));
        }
        function pt(b) {
          const I = (0, Lt.wm)(b).toLocaleLowerCase(),
            O = (0, Lt.wm)(N.TS.STORE_BASE_URL).toLocaleLowerCase(),
            ut = (0, Lt.wm)(N.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return I == O || I == ut
            ? !0
            : k.includes(O)
              ? jt(I, jt(O, ht) ? ht : ot)
              : jt(I, [...ot, ...ht, ...Et]);
        }
        function xt(b) {
          if (pt(b)) return bt(b);
        }
        function bt(b) {
          const I = new RegExp(p).exec(b);
          if (!I || I.length <= 2) return;
          const O = I[1].toLowerCase(),
            ut = Number(I[2]);
          if (!(!(ut > 0) || !(0, At.nB)(O)))
            return {
              id: ut,
              strItemType: O,
              storeItemKey:
                O == "sub"
                  ? { packageid: ut }
                  : O == "bundle"
                    ? { bundleid: ut }
                    : { appid: ut },
            };
        }
        function zt(b) {
          const I = [],
            O = new Set();
          for (const ut of b.matchAll(new RegExp(p, "gi"))) {
            const lt = bt(ut[0]);
            lt &&
              !O.has(`${lt.strItemType}/${lt.id}`) &&
              (O.add(`${lt.strItemType}/${lt.id}`), I.push(lt));
          }
          return I;
        }
        function Ut(b) {
          return (
            !!b && (b.GetEventType() == T.ajI || b.GetEventType() == T.HRy)
          );
        }
        function wt(b) {
          const I = Ut(b),
            O = I ? b.clanSteamID.GetAccountID() : void 0,
            { data: ut, isLoading: lt } = (0, v.TB)(O),
            { data: Ht, isLoading: xe } = (0, yt.A5)(O);
          if (!I) return null;
          if (!(lt || xe))
            return !Ht || !ut || !(0, w.Ns)(b, ut) ? null : (Ht.appids ?? []);
        }
        function Ot(b, I) {
          return b === null
            ? !0
            : I.length > 0 && I.every((O) => b.includes(O));
        }
        function Rt(b, I) {
          const O = wt(I);
          if (b.appid === void 0) return !0;
          if (!(b.appid > 0)) return !1;
          if (O !== void 0) return Ot(O, [b.appid]);
        }
        function _t({ link: b, strURL: I, eventModel: O, bAnnouncement: ut }) {
          const lt = Rt(b, O);
          if (lt === void 0) return null;
          if (!lt) return (0, u.Pm)(I, O);
          const Ht =
            b.strClanSteamID64 !== void 0
              ? new X.b(b.strClanSteamID64)
              : b.clanAccountID !== void 0
                ? X.b.InitFromClanID(b.clanAccountID)
                : void 0;
          return (0, e.jsx)(Tt, {
            appid: b.appid,
            clanSteamID: Ht,
            strVanity: b.strOGGVanity,
            strGroupVanity: b.strGroupVanity,
            eventGID: ut ? void 0 : b.eventGID,
            announcementGID: ut ? b.eventGID : void 0,
            strURL: I,
          });
        }
        function te(b, I, O, ut = !1) {
          if (pt(I)) {
            const lt = Bt(b, I);
            if (lt)
              return (0, e.jsx)(_t, {
                link: lt,
                strURL: I,
                eventModel: O?.event,
                bAnnouncement: ut,
              });
          }
          return (0, u.Pm)(I, O?.event);
        }
        function Jt(b, I) {
          return te(F, b, I);
        }
        function kt(b, I) {
          return te(W, b, I);
        }
        function ee(b, I) {
          return te(at, b, I, !0);
        }
        const re = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function se(b) {
          if (!re.test(b)) return;
          const I = b.split("?");
          if (I.length == 2)
            return new URLSearchParams(I[1]).get("id") ?? void 0;
        }
        var oe = r(3946),
          le = r(13854),
          ce = r(374);
        function de(b) {
          const { sharedFileID: I } = b,
            { data: O } = (0, ce.oK)(I),
            ut = N.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            lt = O ?? {
              sharedfileid: I,
              title: (0, U.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: ut + I,
            },
            Ht = (0, le.TG)(lt.url) ? ut + lt.url : lt.url;
          let xe = lt.personnaname !== void 0 && lt.personnaname.length > 0;
          return (0, e.jsx)(oe.V, {
            strURL: Ht,
            strTitle: lt.title,
            strPreviewURL: lt.previewurl,
            strType: lt.type,
            strDescription: lt.description,
            author:
              xe &&
              (0, U.PP)(
                "#EventEditor_Author",
                (0, e.jsx)(S.mZ, { children: lt.personnaname }),
              ),
            publishedfileid: I,
            appid: lt.appid,
            bSizeToFit: lt.bSizeToFit,
          });
        }
        var me = r(80902),
          ae = r(32651),
          M = r.n(ae);
        const C = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function tt(b) {
          const I = new Set();
          for (const O of b.matchAll(new RegExp(C, "gi"))) O[1] && I.add(O[1]);
          return Array.from(I);
        }
        function J(b) {
          return ["sketchfab_oembed", b];
        }
        function Mt(b) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(b)}`;
        }
        function Nt(b) {
          return {
            queryKey: J(b),
            queryFn: async () => {
              const I = await fetch(Mt(b));
              if (I.status === 404) return null;
              if (!I.ok)
                throw new Error(`sketchfab oembed returned ${I.status}`);
              return await I.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function Pt(b) {
          return (0, me.I)(Nt(b));
        }
        function Yt(b) {
          const { modelID: I } = b,
            [O, ut] = h.useState(!0),
            { data: lt } = Pt(I);
          if (O) {
            const Ht = () => ut(!1),
              xe = (Me) => {
                (Me.key === "Enter" || Me.key === " ") &&
                  (Me.preventDefault(), Ht());
              };
            return (0, e.jsxs)("div", {
              className: M().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: Ht,
              onKeyDown: xe,
              children: [
                lt?.thumbnail_url &&
                  (0, e.jsx)("img", {
                    className: M().dynamiclink_preview,
                    src: lt.thumbnail_url,
                    alt: lt.title,
                  }),
                (0, e.jsx)("img", {
                  className: M().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, e.jsxs)("div", {
                  className: M().dynamiclink_content,
                  children: [
                    (0, e.jsxs)("div", {
                      className: M().dynamiclink_name,
                      children: [
                        (0, e.jsx)("span", {
                          className: M().dynamiclink_type,
                          children: (0, U.we)("#EventDisplay_Sketchfab"),
                        }),
                        lt?.title &&
                          (0, e.jsxs)("div", { children: [lt.title, "\xA0"] }),
                      ],
                    }),
                    lt?.author_name &&
                      (0, e.jsx)("div", {
                        className: M().dynamiclink_author,
                        children: lt.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, e.jsx)("div", {
            className: M().sketchfabmodelembedded,
            children: (0, e.jsx)("iframe", {
              className: M().sketchfabmodelembedded,
              title: lt?.title ?? I,
              src: `https://sketchfab.com/models/${encodeURIComponent(I)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const St =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function Xt(b) {
          const I = St.exec(b),
            O = I ? Number(I[1]) : 0;
          return O > 0 ? O : void 0;
        }
        function ie(b) {
          return pt(b) ? Xt(b) : void 0;
        }
        function Be(b) {
          const I = new Set();
          for (const O of b.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const ut = Xt(O[0]);
            ut && I.add(ut);
          }
          return Array.from(I);
        }
        var he = r(31774),
          fe = r(71421),
          ve = r(33998),
          ye = r.n(ve);
        function He(b) {
          const { defid: I } = b,
            O = (0, he.wk)(I);
          if (!O || !O.community_item_data) return null;
          const ut = O.appid,
            lt = O.community_item_data.item_image_large,
            Ht = `${N.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${ut}/${lt}`;
          return (0, e.jsx)("div", {
            className: ye().Ctn,
            children: (0, e.jsx)(fe.he, {
              toolTipContent: O.community_item_data.item_description,
              children: (0, e.jsx)("img", {
                src: Ht,
                alt: O.community_item_data.item_title,
              }),
            }),
          });
        }
        var Fe = r(43597);
        const Re = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          cn = /twitter\.com\/(\w+)(\/?)$/i,
          Hn = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          Gn = /twitch\.tv\/(\w+)(\/?)$/i,
          Tn =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function ke() {
          return N.TS.EREALM === L.TU.k_ESteamRealmChina;
        }
        const A = new Map();
        function Ee() {
          const b = N.TS.EREALM;
          let I = A.get(b);
          return (
            I ||
              (ke()
                ? (I = [
                    { urlRegExp: new RegExp(p), fnBBComponent: qe },
                    { urlRegExp: new RegExp(W), fnBBComponent: kt },
                    { urlRegExp: new RegExp(F), fnBBComponent: Jt },
                    { urlRegExp: new RegExp(at), fnBBComponent: ee },
                    { urlRegExp: new RegExp(Tn), fnBBComponent: vn },
                  ])
                : (I = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: Fe.j6,
                    },
                    { urlRegExp: new RegExp(re), fnBBComponent: Ln },
                    { urlRegExp: new RegExp(p), fnBBComponent: qe },
                    { urlRegExp: new RegExp(W), fnBBComponent: kt },
                    { urlRegExp: new RegExp(F), fnBBComponent: Jt },
                    { urlRegExp: new RegExp(at), fnBBComponent: ee },
                    { urlRegExp: new RegExp(Re), fnBBComponent: Kn },
                    { urlRegExp: new RegExp(C), fnBBComponent: Qn },
                    { urlRegExp: new RegExp(cn), fnBBComponent: zn },
                    { urlRegExp: new RegExp(Hn), fnBBComponent: Fn },
                    { urlRegExp: new RegExp(Gn), fnBBComponent: yi },
                    { urlRegExp: new RegExp(Tn), fnBBComponent: vn },
                    { urlRegExp: new RegExp(St), fnBBComponent: Nn },
                  ]),
              A.set(b, I)),
            I
          );
        }
        function n(b) {
          return Ee().find((I) => !!I.urlRegExp.exec(b));
        }
        function An(b) {
          return h.useMemo(() => n(b), [b]);
        }
        function Kn(b, I) {
          if (ke()) return null;
          const O = new RegExp(Re).exec(b);
          if (O && O.length > 1) {
            const ut = O[1];
            if (ut?.length > 0) {
              let lt =
                "https://medal.tv/clip/" +
                ut +
                "/?autoplay=0&donate=0" +
                (I && I.event ? "&steamappid=" + I.event.appid : "");
              return (0, e.jsx)("iframe", {
                className: rt().MedalTVWidget,
                src: lt,
                title: ut,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, u.Pm)(b, I?.event);
        }
        function Qn(b, I) {
          let O = new RegExp(C).exec(b);
          if (O && O.length > 1) {
            let ut = O[1];
            if (ut && ut.length > 1) return (0, e.jsx)(Yt, { modelID: ut });
          }
          return (0, u.Pm)(b, I?.event);
        }
        function Ln(b, I) {
          const O = se(b);
          return O !== void 0
            ? (0, e.jsx)(de, { sharedFileID: O })
            : (0, u.Pm)(b, I?.event);
        }
        function qe(b, I) {
          const O = xt(b);
          return O
            ? (0, e.jsx)(Vn, {
                eventModel: I?.event,
                inputID: O.id,
                inputType: O.strItemType,
                fallbackUrl: b,
              })
            : (0, u.Pm)(b, I?.event);
        }
        function Vn(b) {
          const {
              inputID: I,
              inputType: O,
              eventModel: ut,
              fallbackUrl: lt,
            } = b,
            Ht = (0, Y.dE)(I, O),
            { data: xe } = (0, z.J$)(Ht),
            Me = wt(ut);
          let Ae;
          if (Me === null) Ae = !0;
          else if (Me && xe) {
            const yn = xe.appid ? [xe.appid] : (xe.included_appids ?? []);
            Ae = Ot(Me, yn);
          }
          return Ae === void 0
            ? null
            : Ae
              ? (0, e.jsx)(D.e, {
                  id: I,
                  inputType: O,
                  bApplyUserContentPref: !0,
                })
              : (0, u.Pm)(lt, ut);
        }
        function Nn(b, I) {
          const O = ie(b);
          return O
            ? (0, e.jsx)("div", {
                className: (0, Z.A)(rt().LoyaltyRewardCtn),
                children: (0, e.jsx)(He, { defid: O, url: b }),
              })
            : (0, u.Pm)(b, I?.event);
        }
        function zn(b, I) {
          return ke() ? null : an(b, (0, e.jsx)(vt.KKS, {}), "@", I);
        }
        function Fn(b, I) {
          return ke() ? null : an(b, (0, e.jsx)(vt.KKS, {}), "#", I);
        }
        function yi(b, I) {
          return ke() ? null : an(b, (0, e.jsx)(vt.qcc, {}), void 0, I);
        }
        function vn(b, I) {
          return an(b, (0, e.jsx)(vt.Qte, {}), void 0, I);
        }
        function an(b, I, O, ut) {
          let lt;
          const Ht = b.endsWith("/") ? b.length - 1 : b.length,
            xe = b.lastIndexOf("/", Ht - 1);
          xe != -1 && xe + 1 < b.length && (lt = b.substring(xe + 1, Ht)),
            O && lt && (lt = O + lt);
          const Me = (0, u.Pm)(b, ut?.event, lt ?? b);
          return (0, e.jsxs)("div", {
            className: rt().SocialLink,
            children: [
              (0, e.jsx)("div", { className: rt().SocialIcon, children: I }),
              Me,
            ],
          });
        }
      },
      39654: ($, ft, r) => {
        "use strict";
        r.d(ft, { vE: () => T });
        var e = r(72604),
          L = r(99412),
          N = r(72609),
          Y = r(80902),
          z = r(38884),
          h = r(76559),
          u = r(18210);
        const s = "events/ajaxgetpartnerevent";
        function rt(w) {
          const X = u.A0.GetELanguageFallback(w);
          return w != X ? `${w}_${X}` : `${w}`;
        }
        function vt(w) {
          return w ? (0, z.oE)(new h.b(w.clanSteamID64), w.event) : null;
        }
        async function Z(w, X) {
          const W = new URLSearchParams();
          w.clanAccountID && W.set("clan_accountid", String(w.clanAccountID)),
            w.appid && W.set("appid", String(w.appid)),
            w.eventGID && W.set("event_gid", w.eventGID),
            w.announcementGID && W.set("announcement_gid", w.announcementGID),
            W.set("lang_list", rt(X)),
            W.set("last_modified_time", "0"),
            W.set("origin", window.location.origin);
          const F = N.TS.STORE_BASE_URL + s + "?" + W.toString(),
            et = await fetch(F);
          if (!et.ok) throw new Error(`${F} answered ${et.status}`);
          const at = await et.json();
          return at.success !== e.R || !at.event?.clan_steamid
            ? null
            : { clanSteamID64: at.event.clan_steamid, event: at.event };
        }
        function D(w, X) {
          return [
            "LinkedPartnerEvent",
            w.clanAccountID,
            w.appid,
            w.eventGID,
            w.announcementGID,
            X,
          ];
        }
        function v(w) {
          return (
            !!w &&
            (!!w.clanAccountID || !!w.appid) &&
            (!!w.eventGID || !!w.announcementGID)
          );
        }
        function yt(w, X) {
          const W = v(w);
          return {
            queryKey: D(w ?? {}, X),
            queryFn: () => Z(w ?? {}, X),
            select: vt,
            enabled: W,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function T(w) {
          const X = (0, L.sfN)(N.TS.LANGUAGE);
          return (0, Y.I)(yt(w, X));
        }
      },
      56492: ($, ft, r) => {
        "use strict";
        r.d(ft, {
          Bw: () => mt,
          EX: () => it,
          Hx: () => At,
          JP: () => _,
          LJ: () => U,
          OG: () => gt,
          PH: () => F,
          T7: () => S,
          sY: () => q,
          tj: () => Lt,
          yh: () => nt,
        });
        var e = r(7850),
          L = r(50974),
          N = r(99412),
          Y = r(24660),
          z = r(72865),
          h = r(90626),
          u = r(92757),
          s = r(83482),
          rt = r(16369),
          vt = r(10303),
          Z = r(64165),
          D = r(71742),
          v = r(53113),
          yt = r(3166),
          T = r(72609),
          w = r(39905),
          X = r(47875),
          W = r(40358),
          F = ((p) => (
            (p.k_eView = "view"),
            (p.k_eViewWebSiteHub = "websitehub"),
            (p.k_eCommunityView = "communityview"),
            (p.k_eCommunityEdit = "edit"),
            (p.k_eCommunityEditBroadcast = "editBroadcast"),
            (p.k_eCommunityAdminPage = "admin"),
            (p.k_eCommunityPublish = "publish"),
            (p.k_eCommunityMigrate = "migrate"),
            (p.k_eCommunityPreview = "preview"),
            (p.k_eCommunityPreviewSale = "previewsale"),
            (p.k_eCommunityAnnouncementHub = "community_announcehub"),
            (p.k_eStoreView = "storeview"),
            (p.k_eStoreNewsHub = "newshub"),
            (p.k_eStoreOwnerPage = "store"),
            (p.k_eStoreSalePage = "sale"),
            (p.k_eStoreHardwarePreview = "hardwarepreview"),
            (p.k_eStoreUsersNewsHub = "usernewshub"),
            p
          ))(F || {});
        const et =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function at(p) {
          return p.match(et)?.[1];
        }
        function Bt(p, k) {
          if (!k) return !1;
          const ot = !0,
            ht = at(window.location.href),
            Et = ot && ht == "news",
            jt = k.GetEventType() == N.ajI,
            pt = !1,
            xt = k.appid ? "games" : "groups",
            bt =
              pt &&
              xt == ht &&
              ((k.appid && k.appid === yt.UF.APPID) ||
                (!k.appid &&
                  k.clanSteamID.GetAccountID() === yt.UF.CLANACCOUNTID));
          switch (p) {
            case "view":
              return bt || (Et && !q());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return bt;
            case "admin":
              return jt ? !1 : bt;
            case "websitehub":
              return bt || Et;
            case "storeview":
              return Et && !q();
            case "newshub":
            case "store":
            case "usernewshub":
              return Et;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, D.wT)(!1, "Unknown route specified for link: " + p), !1
              );
          }
        }
        function _(p) {
          const k =
            T.TS.COMMUNITY_BASE_URL +
            "gid/" +
            p.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            p.AnnouncementGID;
          return {
            strFacebookUrl: k + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: k + "?site=twitter",
            strRedditUrl: k + "?site=reddit",
          };
        }
        function it(p) {
          return st(p, "sale", "absolute");
        }
        function Ct(p, k) {
          return nt(p, k, "sale", "absolute");
        }
        function S(p) {
          return st(p, "storeview", "absolute");
        }
        function E(p, k) {
          return nt(p, k, "storeview", "absolute");
        }
        function R(p, k, ot) {
          if (ot)
            return (
              (p ? "/games/" + yt.UF.VANITY_ID : "/groups/" + yt.UF.VANITY_ID) +
              "/"
            );
          const ht = p ? "ogg/" + p : "gid/" + k.ConvertTo64BitString();
          return T.TS.COMMUNITY_BASE_URL + ht + "/";
        }
        function U() {
          return "news";
        }
        function q() {
          return !1;
        }
        function V(p) {
          return p.clanSteamID.GetAccountID() === L.gt && !1;
        }
        function st(p, k, ot) {
          const { data: ht } = (0, W.J$)(
            p?.appid ? { appid: p.appid } : void 0,
          );
          if (p) return nt(p, ht, k, ot);
        }
        function nt(p, k, ot, ht) {
          const Et = ht === "relative",
            jt = !1,
            pt = Et ? "/" : T.TS.STORE_BASE_URL,
            xt = R(p.appid, p.clanSteamID, Et);
          ot === "view"
            ? (ot = jt ? "communityview" : "storeview")
            : ot === "websitehub" &&
              (ot = jt ? "community_announcehub" : "newshub");
          const bt = p.GID ? p.GID : "",
            zt = p.AnnouncementGID ? p.AnnouncementGID : "",
            Ut =
              p.BIsOGGEvent() &&
              p.appid &&
              k &&
              p.BHasSaleUpdateLandingPageVanity(),
            wt = p.GetEventType() == N.ajI;
          switch (ot) {
            case "publish":
              return (
                xt +
                (p.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + zt
                  : "partnerevents/publish/" + bt + "?tab=publishing")
              );
            case "edit":
              return (
                xt +
                (p.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + zt
                  : "partnerevents/edit/" + bt)
              );
            case "editBroadcast":
              return (
                xt +
                (p.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + zt
                  : "partnerevents/edit/" + bt) +
                "?tab=broadcast"
              );
            case "migrate":
              return xt + "partnerevents/migrate_announcement/" + zt;
            case "preview":
              return wt
                ? xt + "partnerevents/previewsale/" + bt
                : xt +
                    (p.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + zt
                      : "partnerevents/preview/" + bt);
            case "previewsale":
              return xt + "partnerevents/previewsale/" + bt;
            case "admin":
              return wt
                ? `${pt}curator/${p.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : xt + "partnerevents";
            case "community_announcehub":
              return xt + "announcements";
            case "newshub": {
              const Ot = p.appid
                ? `app/${p.appid}`
                : `group/${p.clanSteamID.GetAccountID()}`;
              return pt + `${U()}/${Ot}`;
            }
            case "store":
              return (
                pt +
                (p.appid
                  ? "app/" + p.appid
                  : "curator/" + p.clanSteamID.GetAccountID())
              );
            case "sale":
              return p.jsondata.bSaleEnabled
                ? Ut
                  ? `${(0, X._)(k)}/${p.GetSaleUpdateLandingPageVanity()}`
                  : wt
                    ? `${pt}curator/${p.clanSteamID.GetAccountID()}`
                    : pt +
                      (0, Z.n)(
                        p.clanSteamID.GetAccountID(),
                        p.GetSaleVanity(),
                        !!p.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : pt;
            case "hardwarepreview":
              return V(p) ? `${pt}hardware_v2/${zt}?beta=1` : pt;
            case "communityview":
              return xt + "announcements/detail/" + zt;
            case "storeview": {
              if (p.clanSteamID.GetAccountID() == (0, rt.H)())
                return `${T.TS.STORE_BASE_URL}meetsteam/${bt}`;
              if (Ut)
                return `${(0, X._)(k)}/${p.GetSaleUpdateLandingPageVanity()}`;
              if (wt) return `${pt}curator/${p.clanSteamID.GetAccountID()}`;
              {
                const Ot = p.appid
                    ? `app/${p.appid}`
                    : `group/${p.clanSteamID.GetAccountID()}`,
                  Rt = q() ? "view_v2" : "view",
                  _t = p.bOldAnnouncement ? `old_view/${zt}` : `${Rt}/${bt}`;
                return `${pt}${U()}/${Ot}/${_t}`;
              }
            }
            case "usernewshub":
              return `${pt}${U()}/`;
            default:
              return (0, D.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function mt(p, k, ot) {
          const ht = ot === "forceAbsolute" || !Bt(k, p);
          return st(p, k, ht ? "absolute" : "relative");
        }
        function Tt(p, k, ot, ht) {
          const Et = ht === "forceAbsolute" || !Bt(ot, p);
          return nt(p, k, ot, Et ? "absolute" : "relative");
        }
        function gt(p) {
          const { eventModel: k, route: ot, bPopup: ht = !0 } = p,
            Et = Bt(ot, k),
            jt = st(k, ot, Et ? "relative" : "absolute");
          return (
            h.useEffect(() => {
              jt && (ht ? window.open(jt) : window.location.assign(jt));
            }, [ht, jt]),
            Et && jt ? (0, e.jsx)(u.rd, { push: !0, to: jt }) : null
          );
        }
        function At(p, k, ot) {
          const ht = R(p, k, !1);
          return ot === "admin" ? ht + "partnerevents" : "";
        }
        function Lt(p) {
          const { eventModel: k, preferredFocus: ot } = p,
            { bCanUseLink: ht } = h.useContext(vt.I),
            Et = (0, z.n9)(),
            jt = (0, u.W6)(),
            pt = ht && Bt(p.route, k),
            xt = st(k, p.route, pt ? "relative" : "absolute"),
            bt = !pt && xt ? (0, v.NT)(xt) : xt,
            zt = pt || !bt ? bt : (0, s.wJ)(bt, Et),
            Ut = st(k, "websitehub", "absolute"),
            wt =
              p.route != "websitehub"
                ? w.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            Ot = h.useCallback(() => {
              Ut && window.location.assign(Ut);
            }, [Ut]);
          return k
            ? pt
              ? (0, e.jsx)(Y.Ii, {
                  style: p.style,
                  className: p.className,
                  href: jt.createHref({ pathname: zt }),
                  onClick: (Rt) => {
                    zt && (p.onClick?.(Rt), jt.push(zt), Rt.preventDefault());
                  },
                  onOptionsActionDescription: wt,
                  onOptionsButton: wt ? Ot : void 0,
                  preferredFocus: ot,
                  children: p.children,
                })
              : (0, e.jsx)(Y.Ii, {
                  href: zt,
                  style: p.style,
                  className: p.className,
                  onClick: p.onClick,
                  preferredFocus: ot,
                  onOptionsActionDescription: wt,
                  onOptionsButton: wt ? Ot : void 0,
                  children: p.children,
                })
            : null;
        }
      },
      87949: ($, ft, r) => {
        "use strict";
        r.d(ft, { e: () => Z });
        var e = r(7850),
          L = r(48156),
          N = r(72609),
          Y = r(40358),
          z = r(88743),
          h = r(61431),
          u = r(36707),
          s = r(18210),
          rt = r(20881),
          vt = r.n(rt);
        function Z(D) {
          const { inputType: v, id: yt, bApplyUserContentPref: T } = D,
            w = v == "bundle" ? "bundle" : v == "sub" ? "sub" : "game",
            X = (0, z.zl)(yt, w),
            { data: W } = (0, Y.J$)(X),
            { data: F, isPending: et } = (0, Y.Ij)(T ? X : void 0);
          if (!W) return null;
          if (T) {
            if (et) return null;
            if (F?.filter_failure == L.hQ.Zy || F?.filter_failure == L.hQ.ir) {
              let at = "#StoreCapsule_App_Excluded";
              switch (v) {
                case "sub":
                  at = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  at = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, e.jsx)("div", {
                className: (0, u.A)(
                  vt().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, s.oW)(
                  at,
                  (0, e.jsx)("a", {
                    href: N.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, e.jsx)("div", {
            className: (0, u.A)(
              vt().AppSummaryWidgetCtn,
              "AppSummaryWidgetCtn",
            ),
            children: (0, e.jsx)(h.p, {
              id: yt,
              type: w,
              bShowDemoButton: W.type == L.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      88812: ($, ft, r) => {
        "use strict";
        r.d(ft, { WC: () => s });
        var e = r(9046),
          L = r(5827),
          N = r(75233),
          Y = r(80902),
          z = r(71742),
          h = r(68266),
          u = r(85741);
        function s(T, w, X, W, F) {
          const et = (0, N.jE)(),
            at = (0, L.eG)();
          return (0, Y.I)(vt(et, at, T, w, X, W, F)).data ?? void 0;
        }
        function rt(T, w, X, W, F) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            T?.GID,
            w,
            X,
            W,
            F,
          ];
        }
        function vt(T, w, X, W, F, et, at) {
          return {
            queryKey: rt(X, W, F, et, at),
            enabled: X && !!X.GID,
            queryFn: async () => {
              if (!X) return null;
              let Bt = new Array();
              if (!X.BImageNeedScreenshotFallback(W, F)) {
                const _ = await T.ensureQueryData((0, h.lx)(T, w, X, W, F, et));
                if ((_ && Bt.push(_), et != e.wI.full)) {
                  const it = await T.ensureQueryData(
                    (0, h.lx)(T, w, X, W, F, e.wI.full),
                  );
                  it && Bt.push(it);
                }
              }
              if (!at)
                try {
                  const _ = await T.ensureQueryData((0, u.dO)(T, w, X));
                  _ && Bt.push(_);
                } catch (_) {
                  if (
                    ((0, z.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${X?.GID} from clan ${X?.clanSteamID.GetAccountID()}`,
                    ),
                    Bt.length == 0)
                  )
                    throw _;
                }
              return Bt;
            },
          };
        }
        function Z(T, w, X, W, F) {
          if (!F || T.BImageNeedScreenshotFallback(w, X)) return;
          const et = GetImageFromEventDirectly(T, w, X, W);
          if (!et) return;
          const at = [et];
          if (W != EArtworkSizes.full) {
            const Bt = GetImageFromEventDirectly(T, w, X, EArtworkSizes.full);
            if (!Bt) return;
            at.push(Bt);
          }
          return at;
        }
        function D(T, w, X, W) {
          const F = useQueryClient(),
            et = useStoreBrowseDataLoader();
          return useQuery(yt(F, et, T, w, X, W)).data ?? void 0;
        }
        function v(T, w, X, W) {
          const F = {};
          for (const et of T) {
            if (!et.eventModel.GID) continue;
            const at = Z(et.eventModel, w, X, W, et.bIgnoreArtworkScreenshot);
            if (!at) return;
            F[et.eventModel.GID] = at;
          }
          return F;
        }
        function yt(T, w, X, W, F, et) {
          return {
            queryKey: [
              "useEventImagesForSizeAsArrayWithFallback",
              X.map(
                (at) => `${at.eventModel.GID}:${!!at.bIgnoreArtworkScreenshot}`,
              ),
              W,
              F,
              et,
            ],
            enabled: X.length > 0,
            initialData: () => v(X, W, F, et),
            placeholderData: keepPreviousData,
            queryFn: async () => {
              const at = {};
              return (
                await Promise.all(
                  X.map(async (Bt) => {
                    const { eventModel: _, bIgnoreArtworkScreenshot: it } = Bt;
                    if (!_.GID) return;
                    let Ct = Z(_, W, F, et, it);
                    if (!Ct)
                      try {
                        Ct =
                          (await T.ensureQueryData(
                            vt(T, w, _, W, F, et, it),
                          )) ?? void 0;
                      } catch {
                        Ct = void 0;
                      }
                    Ct && (at[_.GID] = Ct);
                  }),
                ),
                at
              );
            },
          };
        }
      },
      68266: ($, ft, r) => {
        "use strict";
        r.d(ft, { lx: () => yt, m0: () => D });
        var e = r(9046),
          L = r(55483),
          N = r(72609),
          Y = r(21721),
          z = r(5827),
          h = r(40358),
          u = r(75233),
          s = r(80902),
          rt = r(18210),
          vt = r(53113),
          Z = r(85741);
        function D(w, X, W, F = e.wI.full, et = !0) {
          const at = (0, u.jE)(),
            Bt = (0, z.eG)();
          return (0, s.I)(yt(at, Bt, w, X, W, F, et)).data ?? void 0;
        }
        function v(w, X, W, F = e.wI.full, et = !0) {
          return ["useEventImageURLWithFallback", w?.GID, X, W, F, et];
        }
        function yt(w, X, W, F, et, at = e.wI.full, Bt = !0) {
          return {
            queryKey: v(W, F, et, at, Bt),
            enabled: !!W?.GID,
            initialData: () => T(W, F, et, at, Bt),
            queryFn: async () => {
              if (!W) return null;
              let _ = T(W, F, et, at, Bt);
              if (_) return _;
              const it = await w.ensureQueryData(
                (0, L.ec)(W.clanSteamID.GetAccountID(), w),
              );
              if (F == "capsule") {
                let S = W.appid;
                if (
                  !S &&
                  it &&
                  ((it.is_creator_home && !it.is_ogg) || it.is_curator)
                )
                  if (W.jsondata?.referenced_appids?.length)
                    S = W.jsondata.referenced_appids[0];
                  else return it.avatar_full_url ?? null;
                const E = await w.ensureQueryData((0, h.AQ)(X, { appid: S }));
                return E
                  ? ((0, Y.b0)(E, "main_capsule") ?? null)
                  : it?.avatar_full_url
                    ? it.avatar_full_url
                    : `${N.TS.STORE_ITEM_BASE_URL}steam/apps/${S}/header.jpg`;
              }
              return F == "background" &&
                it &&
                ((it.is_creator_home && !it.is_ogg) || it.is_curator)
                ? (it.creator_page_bg_url ?? null)
                : await w.ensureQueryData((0, Z.dO)(w, X, W));
            },
          };
        }
        function T(w, X, W, F = e.wI.full, et = !0) {
          if (!w) return;
          const at = w.GetImageURL(X, W, F);
          if (at && at.trim().length > 0) return at;
          const Bt = rt.A0.GetELanguageFallback(W);
          if (W != Bt) {
            const it = w.GetImageURL(X, Bt, F);
            if (it && it.trim().length > 0) return it;
          }
          if (X == "capsule") {
            let it = w.GetImageFromBeginningOfDescription(W, Number.MAX_VALUE);
            if (it && (et || (0, vt.ZF)(it))) return it;
          }
        }
      },
      85741: ($, ft, r) => {
        "use strict";
        r.d(ft, { Mg: () => s, dO: () => rt });
        var e = r(55483),
          L = r(99412),
          N = r(72609),
          Y = r(5827),
          z = r(40358),
          h = r(75233),
          u = r(80902);
        function s(Z) {
          const D = (0, h.jE)(),
            v = (0, Y.eG)();
          return (0, u.I)(rt(D, v, Z)).data ?? void 0;
        }
        function rt(Z, D, v) {
          return {
            queryKey: vt(v),
            enabled: !!v?.GID,
            queryFn: async () => {
              if (!v) return null;
              const yt = v.appid
                  ? await Z.ensureQueryData((0, z.OE)(D, { appid: v.appid }))
                  : null,
                T = await Z.ensureQueryData(
                  (0, e.ec)(v.clanSteamID.GetAccountID(), Z),
                );
              if (v.appid)
                if (yt) {
                  if (
                    yt.all_ages_screenshots &&
                    yt.all_ages_screenshots.length > 0
                  ) {
                    let w = Number(
                      v.bOldAnnouncement
                        ? v.AnnouncementGID
                        : v.GID == null
                          ? 0
                          : v.GID,
                    );
                    return (
                      (w = w % yt.all_ages_screenshots.length),
                      `${N.TS.STORE_ITEM_BASE_URL}${yt.all_ages_screenshots[w].filename}`
                    );
                  }
                } else return "";
              return v.GetEventType() != L.ajI &&
                T &&
                ((T.is_creator_home && !T.is_ogg) || T.is_curator)
                ? (T.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function vt(Z) {
          return ["useFallbackArtworkScreenshot", Z?.GID];
        }
      },
      16369: ($, ft, r) => {
        "use strict";
        r.d(ft, { H: () => N });
        var e = r(99412),
          L = r(72609);
        const N = () => (L.TS.EUNIVERSE === e.Rv ? 2581 : 45267781);
      },
      31774: ($, ft, r) => {
        "use strict";
        r.d(ft, { $O: () => W, wk: () => X });
        var e = r(80902),
          L = r(75233),
          N = r(90626),
          Y = r(72609),
          z = r(45806),
          h = r(48491),
          u = r(49288);
        async function s(F, et) {
          const { rgDefIDs: at, strCategory: Bt, itemClass: _ } = et,
            it = await u.a9.QueryRewardItems(F, {
              definitionids: at,
              community_item_classes: _ ? [_] : void 0,
              filter_match_any_category_tags: Bt ? [Bt] : void 0,
            });
          if (!it.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + it.GetEResult(),
            );
          return it.Body().toObject().definitions ?? [];
        }
        let rt;
        function vt() {
          const F = (0, z.q)();
          return F
            ? F.GetAnonymousServiceTransport()
            : (rt || (rt = new h.D(Y.TS.WEBAPI_BASE_URL)),
              rt.GetServiceTransport());
        }
        async function Z(F) {
          return s(vt(), F);
        }
        const D = 3600 * 1e3;
        function v(F) {
          return ["LoyaltyRewardDef", F];
        }
        function yt(F, et) {
          return ["LoyaltyRewardDefsByCategoryAndClass", F, et];
        }
        function T(F) {
          return {
            queryKey: v(F),
            queryFn: async () => {
              const et = await Z({ rgDefIDs: [F] }),
                at = et.length == 1 ? et[0] : void 0;
              if (!at)
                throw new Error(
                  `Asked for point shop item ${F} and got ${et.length} items back, wanted exactly one.`,
                );
              return at;
            },
            enabled: F > 0,
            staleTime: D,
            retry: !1,
          };
        }
        function w(F, et) {
          return {
            queryKey: yt(F, et),
            queryFn: () => Z({ strCategory: F, itemClass: et }),
            enabled: !!(F && et),
            staleTime: D,
            retry: !1,
          };
        }
        function X(F) {
          const { data: et } = (0, e.I)(T(F));
          return et;
        }
        function W(F, et) {
          const at = (0, L.jE)(),
            { data: Bt } = (0, e.I)(w(F, et));
          return (
            (0, N.useEffect)(() => {
              Bt?.forEach((_) => {
                _.defid !== void 0 && at.setQueryData(v(_.defid), _);
              });
            }, [Bt, at]),
            Bt
          );
        }
      },
      47797: ($, ft, r) => {
        "use strict";
        r.d(ft, { Ns: () => N });
        var e = r(99412);
        const L = 1778623200;
        function N(h, u) {
          let s = !1;
          return (
            h && h.GetEventType() == e.ajI
              ? (s = !0)
              : h && u && u.is_creator_home && (s = Y(h, u)),
            s
          );
        }
        function Y(h, u) {
          return !!u && !!u.is_creator_home && (h.createTime ?? 0) > L;
        }
        function z(h) {
          const u = useClanInfoByAccountID(h.clanSteamID.GetAccountID());
          return N(h, u.data);
        }
      },
      64457: ($, ft, r) => {
        "use strict";
        r.d(ft, { PE: () => _, Yg: () => et, _t: () => at, gO: () => Ct });
        var e = r(7850),
          L = r(21721),
          N = r(25046),
          Y = r(40358),
          z = r(68094),
          h = r(41032),
          u = r(90626),
          s = r(62571),
          rt = r(40426),
          vt = r(36118),
          Z = r(36707),
          D = r(18210),
          v = r(72609),
          yt = r(96538),
          T = r(85599),
          w = r(64271),
          X = r(48963),
          W = r.n(X),
          F = r(50573);
        function et(E) {
          const { id: R, bPopOutTrailerPlayback: U } = E,
            { data: q } = (0, Y.Yo)(R),
            { data: V } = (0, Y.j4)(R),
            { data: st } = (0, Y.J$)(R),
            [nt, mt] = (0, u.useState)(!1),
            [Tt, gt] = (0, u.useState)(!1),
            At = (0, h.dy)(),
            Lt = q?.highlights?.filter((ht) => !At || ht.all_ages),
            p = Lt && Lt?.length > 0 ? Lt[0] : void 0,
            k = u.useCallback(() => {
              p && (U ? gt(!0) : mt((ht) => !ht));
            }, [p, U]);
          if (!st)
            return (0, e.jsx)("div", {
              className: (0, Z.A)(W().HilightGrid, W().MediaContainer),
              children: (0, e.jsx)(T.t, { size: "medium" }),
            });
          const ot = p
            ? (0, e.jsx)(S, {
                trailer: p,
                bPlayVideo: nt,
                fnTogglePlayTrailer: k,
              })
            : null;
          return !p &&
            !(V && V.all_ages_screenshots && V.all_ages_screenshots.length > 0)
            ? null
            : (0, e.jsxs)("div", {
                className: (0, Z.A)(W().HilightGrid, W().MediaContainer),
                children: [
                  (0, e.jsx)(at, {
                    elFeaturedInCenter: ot,
                    storeItemScreenshots: V,
                    trailer: p,
                    id: R,
                    name: st.name || "",
                  }),
                  U
                    ? (0, e.jsx)(_, {
                        id: R,
                        bShowModal: Tt,
                        hideModal: () => gt(!1),
                      })
                    : (0, e.jsx)(Bt, {
                        name: st.name || "",
                        trailer: p,
                        bPlayVideo: nt,
                        fnTogglePlayTrailer: k,
                        bControls: !0,
                      }),
                ],
              });
        }
        function at(E) {
          const {
              elFeaturedInCenter: R,
              id: U,
              name: q,
              trailer: V,
              storeItemScreenshots: st,
              featureElementclassName: nt,
              bUseTrailerAsFirstThumb: mt,
              bNoScreenShotModals: Tt,
            } = E,
            [gt, At] = u.useState(void 0),
            [Lt, p] = (0, rt.XC)(),
            k = (0, h.dy)(),
            ot = (0, u.useRef)(null),
            [ht, Et] = (0, u.useState)(0);
          if (!U) return null;
          const jt = R || (gt !== void 0 && gt !== -1) ? gt : 0,
            pt = new Array(),
            xt = new Array();
          mt &&
            V &&
            (pt.push(
              (0, e.jsx)(
                S,
                {
                  trailer: V,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => At(0),
                  onMouseLeave: () => {
                    const wt = ot.current;
                    wt && Et(wt.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            xt.push(
              (0, e.jsx)(
                Bt,
                {
                  ref: ot,
                  name: q,
                  trailer: V,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: ht,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const bt = (
            k ? st?.all_ages_screenshots : st?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (bt?.forEach((wt, Ot) => {
              if ((R || Ot > 0) && pt.length < 3) {
                const Rt = (0, L.bu)(wt, "thumb"),
                  _t = (0, L.bu)(wt, "600x338"),
                  te = pt.length;
                pt.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, Z.A)({
                        [W().ThumbnailCtn]: !0,
                        [W().ThumbnialClickable]: !Tt,
                      }),
                      onMouseEnter: () => At(te),
                      children: Tt
                        ? (0, e.jsx)("img", { src: Rt, alt: q })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: W().ThumbnailButton,
                            onClick: () => {
                              const Jt = [...(bt || [])];
                              if (Jt.length > 0) {
                                for (let kt = 0; kt < Ot; ++kt) {
                                  const ee = Jt.shift();
                                  ee && Jt.push(ee);
                                }
                                Lt(Jt.map((kt) => (0, L.bu)(kt, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: Rt, alt: q }),
                          }),
                    },
                    Ot + "_small_" + Rt,
                  ),
                ),
                  xt.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: W().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: _t, alt: q }),
                      },
                      Ot + "_big_" + Rt,
                    ),
                  );
              }
            }),
            !R && (!xt || xt.length == 0))
          )
            return null;
          const zt = pt.slice(0, 3),
            Ut = Array.from({ length: Math.max(0, 3 - zt.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              p,
              (0, e.jsx)("div", {
                className: nt || W().MainMediaCtn,
                children:
                  R && (jt === -1 || jt === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: R })
                    : (0, e.jsx)(e.Fragment, {
                        children: jt !== void 0 && xt[jt],
                      }),
              }),
              zt.length > 0 &&
                (0, e.jsxs)("div", {
                  className: W().ScreenshotThumbnailRow,
                  onMouseLeave: () => At(-1),
                  children: [
                    zt,
                    Ut.map((wt, Ot) =>
                      (0, e.jsx)(
                        "div",
                        { className: W().ThumbnailCtn },
                        `app_${(0, z.ER)(U)}_${Ot}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function Bt(E) {
          const {
            ref: R,
            name: U,
            trailer: q,
            bControls: V,
            bPlayVideo: st,
            fnTogglePlayTrailer: nt,
            startTime: mt,
          } = E;
          if (
            ((0, u.useEffect)(() => {
              const gt = R?.current;
              if (mt != null && mt > 0 && gt) {
                const At = () => {
                  gt.currentTime = mt || 0;
                };
                return (
                  gt.addEventListener("loadedmetadata", At),
                  () => {
                    gt.removeEventListener("loadedmetadata", At);
                  }
                );
              }
            }, [R, mt]),
            !q)
          )
            return null;
          let Tt = (0, Z.A)(W().VideoLargeContainer, st && W().videoPlaying);
          return (0, e.jsxs)("div", {
            className: Tt,
            onClick: nt,
            role: "presentation",
            children: [
              (0, e.jsx)(F.hj, {
                name: U,
                trailerCategory: q.trailer_category,
                trailerDisplay: F.g,
                mouseOver: !1,
              }),
              !!(st && q.microtrailer) &&
                (0, e.jsx)("video", {
                  className: W().VideoLarge,
                  ref: R,
                  controls: V,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: mt != null && mt > 0 ? void 0 : q.screenshot_full,
                  children: q.microtrailer?.map((gt) =>
                    v.TS.IN_CLIENT && gt.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          {
                            src: (0, N.M4)(q, gt.filename || ""),
                            type: gt.type,
                          },
                          gt.filename,
                        ),
                  ),
                }),
              V &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: W().CloseButton,
                  "aria-label": (0, D.we)("#Button_Close"),
                  children: (0, e.jsx)(vt.sED, {}),
                }),
            ],
          });
        }
        function _(E) {
          return E.bShowModal ? (0, e.jsx)(it, { ...E }) : null;
        }
        function it(E) {
          const { id: R, bShowModal: U, trailerBaseID: q, hideModal: V } = E,
            { data: st } = (0, Y.J$)(R),
            nt = (0, N.kB)(R),
            mt = (0, u.useMemo)(() => {
              if (!(!nt || nt.length == 0)) {
                if (q) {
                  const ot = nt.find((ht) => ht.trailer_base_id == q);
                  if (ot) return ot;
                }
                return nt[0];
              }
            }, [nt, q]),
            Tt = u.useId(),
            gt = u.useId(),
            {
              rgDashTrailers: At,
              rgHlsTrailers: Lt,
              strCaptionManufest: p,
              strScreenshot: k,
            } = (0, u.useMemo)(() => {
              if (!mt)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: ot, rgHlsTrailers: ht } = (0, N.hg)(mt);
              return {
                rgDashTrailers: ot,
                rgHlsTrailers: ht,
                strCaptionManufest: (0, N.Wv)(mt),
                strScreenshot: (0, N.hl)(mt),
              };
            }, [mt]);
          return !mt || !mt.adaptive_trailers || At.length == 0
            ? null
            : (0, e.jsx)(yt.EN, {
                active: U,
                children: (0, e.jsxs)(yt.eV, {
                  "aria-labelledby": (0, s.q)(Tt, gt),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: V,
                  children: [
                    (0, e.jsx)("div", {
                      className: W().VideoPopupContainers,
                      children: (0, e.jsx)(w.P, {
                        dashManifests: At,
                        hlsManifest: Lt[0] || "",
                        screenshot: k,
                        altText: mt.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: p,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: Tt,
                      style: { display: "none" },
                      children: st?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: gt,
                      style: { display: "none" },
                      children: mt.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function Ct(E) {
          const { appid: R, trailerBaseID: U, bShowModal: q, hideModal: V } = E,
            st = (0, u.useMemo)(() => ({ appid: R }), [R]);
          return (0, e.jsx)(_, {
            id: st,
            trailerBaseID: U,
            bShowModal: q,
            hideModal: V,
          });
        }
        function S(E) {
          const {
            trailer: R,
            fnTogglePlayTrailer: U,
            bPlayVideo: q,
            onMouseEnter: V,
            onMouseLeave: st,
          } = E;
          return (0, e.jsxs)("div", {
            className: (0, Z.A)({
              [W().VideoThumbnail]: !q,
              [W().videoPlaying]: q,
              [W().ThumbnailCtn]: !0,
            }),
            onClick: U,
            onMouseEnter: V,
            onMouseLeave: st,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, N.hl)(R), alt: R.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: W().VideoPlayButton,
                "aria-label": (0, D.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(vt.jGG, {}),
              }),
            ],
          });
        }
      },
      76617: ($, ft, r) => {
        "use strict";
        r.d(ft, { V: () => s });
        function e(rt) {
          return Object.prototype.toString.call(rt) === "[object Object]";
        }
        function L(rt) {
          if (!e(rt)) return !1;
          const vt = rt.constructor;
          if (typeof vt > "u") return !0;
          const Z = vt.prototype;
          return !(
            !e(Z) || !Object.prototype.hasOwnProperty.call(Z, "isPrototypeOf")
          );
        }
        function N(...rt) {
          return JSON.stringify(rt, (vt, Z) => {
            if (L(Z)) {
              const D = {};
              return (
                Object.keys(Z)
                  .sort()
                  .forEach((v) => {
                    D[v] = Z[v];
                  }),
                D
              );
            }
            return Z;
          });
        }
        var Y = r(90626),
          z = r(7850);
        const h = (0, Y.createContext)({ instances: {}, factories: {} });
        function u(rt) {
          const { name: vt, fnFactory: Z, children: D } = rt,
            v = React.useContext(h),
            [yt] = useState({}),
            T = useMemo(
              () => ({
                instances: yt,
                factories: { ...v.factories, [vt]: Z },
                parent: v,
              }),
              [yt, vt, v],
            );
          return jsx(h.Provider, { value: T, children: D });
        }
        function s(rt, vt) {
          const Z = (0, Y.useContext)(h),
            D = typeof rt == "string" ? rt : N(...rt);
          let v = Z;
          for (; v; ) {
            if (D in v.instances) return v.instances[D];
            if (D in v.factories) break;
            v = v.parent;
          }
          const T = (v?.factories[D] ?? vt)();
          return ((v ?? Z).instances[D] = T), T;
        }
      },
      38884: ($, ft, r) => {
        "use strict";
        r.d(ft, { E0: () => rt, oE: () => vt });
        var e = r(71742),
          L = r(3166),
          N = r(76559),
          Y = r(73259),
          z = r(34592),
          h = r(99412),
          u = r(41635);
        function s(Z) {
          return (
            (Z.gid == null || Z.gid == null || Z.gid == "0") &&
            !!Z.announcement_body &&
            Z.announcement_body.gid != "0"
          );
        }
        function rt(Z) {
          return s(Z) ? Y.cB + Z.announcement_body?.gid : Z.gid;
        }
        function vt(Z, D) {
          let v = new Y.lh();
          if (
            ((v.clanSteamID = Z),
            (0, e.wT)(
              v.clanSteamID && v.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                v.clanSteamID.ConvertTo64BitString() +
                " " +
                L.TS.EUNIVERSE,
            ),
            (v.GID = rt(D)),
            (v.bOldAnnouncement = s(D)),
            (v.appid = D.appid ?? 0),
            (v.createTime = D.rtime_created),
            (v.startTime = D.rtime32_start_time),
            (v.endTime = D.rtime32_end_time),
            (v.visibilityStartTime = D.rtime32_visibility_start),
            (v.visibilityEndTime = D.rtime32_visibility_end),
            (v.loadedAllLanguages = !1),
            (v.type = D.event_type ?? h.DRF),
            (v.nVotesUp = D.votes_up ?? 0),
            (v.nVotesDown = D.votes_down ?? 0),
            (v.comment_type = D.comment_type),
            (v.gidfeature = D.gidfeature),
            (v.gidfeature2 = D.gidfeature2),
            (v.featured_app_tagid = D.featured_app_tagid),
            (v.vecTags = new Array()),
            (v.creator_steamid = D.creator_steamid),
            (v.last_update_steamid = D.last_update_steamid),
            (v.rtime32_last_modified = D.rtime32_last_modified),
            (v.rtime32_moderator_reviewed = D.rtime_mod_reviewed),
            (v.video_preview_type = D.video_preview_type),
            (v.video_preview_id = D.video_preview_id),
            (v.has_live_stream = D.has_live_stream),
            (v.live_stream_viewer_count = D.live_stream_viewer_count),
            (v.m_nBuildID = D.build_id),
            (v.m_strBuildBranch = D.build_branch),
            D.announcement_body)
          ) {
            let T = D.announcement_body;
            (v.AnnouncementGID = T.gid),
              v.name.set(T.language, T.headline),
              v.description.set(T.language, T.body),
              v.timestamp_loc_updated.clear(),
              (v.forumTopicGID = T.forum_topic_id),
              (v.nCommentCount = T.commentcount),
              (v.postTime = T.posttime),
              v.bOldAnnouncement && !T.hidden && (v.startTime = T.posttime),
              (v.announcementClanSteamID = new N.b(T.clanid)),
              T.tags &&
                T.tags.length > 0 &&
                T.tags.forEach((w) => v.vecTags.push(w)),
              !v.rtime32_last_solr_search_col_updated &&
                v.rtime32_last_modified &&
                ((v.rtime32_last_solr_search_col_updated =
                  v.rtime32_last_modified),
                (v.rtime32_last_modified = T.updatetime));
          } else
            (v.AnnouncementGID = "0"),
              (v.forumTopicGID = D.forum_topic_id),
              v.name.clear(),
              v.description.clear(),
              v.timestamp_loc_updated.clear(),
              (v.postTime = D.rtime32_start_time),
              (v.nCommentCount = D.comment_count ?? 0),
              v.name.set(h.Bhc, D.event_name ?? ""),
              v.description.set(h.Bhc, D.event_notes ?? "");
          D.broadcaster_accountid &&
            (v.broadcaster = new N.b(D.broadcaster_accountid));
          const yt = Y.DJ;
          try {
            v.jsondata = {
              ...yt,
              ...(D.jsondata ? JSON.parse(D.jsondata) : void 0),
            };
          } catch (T) {
            const w = (0, z.H)(T);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  w.strErrorMsg,
                w,
              ),
              T)
            );
          }
          if (
            ((v.jsondata.localized_capsule_image = (0, u.$Y)(
              v.jsondata.localized_capsule_image || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_title_image = (0, u.$Y)(
              v.jsondata.localized_title_image || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_subtitle = (0, u.$Y)(
              v.jsondata.localized_subtitle || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_summary = (0, u.$Y)(
              v.jsondata.localized_summary || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_broadcast_title = (0, u.$Y)(
              v.jsondata.localized_broadcast_title || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_broadcast_left_image = (0, u.$Y)(
              v.jsondata.localized_broadcast_left_image || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_broadcast_right_image = (0, u.$Y)(
              v.jsondata.localized_broadcast_right_image || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_sale_header = (0, u.$Y)(
              v.jsondata.localized_sale_header || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_sale_overlay = (0, u.$Y)(
              v.jsondata.localized_sale_overlay || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_sale_product_banner = (0, u.$Y)(
              v.jsondata.localized_sale_product_banner || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_sale_product_mobile_banner = (0, u.$Y)(
              v.jsondata.localized_sale_product_mobile_banner || [],
              h.bP9,
              null,
            )),
            (v.jsondata.localized_sale_logo = (0, u.$Y)(
              v.jsondata.localized_sale_logo || [],
              h.bP9,
              null,
            )),
            v.jsondata.sale_num_headers !== void 0 &&
              v.jsondata.localized_per_day_sales_header)
          )
            for (let T = 0; T < v.jsondata.sale_num_headers; ++T)
              v.jsondata.localized_per_day_sales_header[T] = (0, u.$Y)(
                v.jsondata.localized_per_day_sales_header[T],
                h.bP9,
                null,
              );
          return (
            v.jsondata.sale_sections &&
              v.jsondata.sale_sections.forEach((T, w) => {
                T.localized_label &&
                  (T.localized_label = (0, u.$Y)(
                    T.localized_label,
                    h.bP9,
                    null,
                  )),
                  T.section_type === "trailercarousel" &&
                    (T.show_as_carousel = !1),
                  (v.jsondata.sale_sections[w] = { ...Y.G6, ...T });
              }),
            v.jsondata.email_setting &&
              v.jsondata.email_setting.sections &&
              v.jsondata.email_setting.sections.forEach((T) => {
                T.localized_headline !== void 0 &&
                  T.localized_headline !== null &&
                  (T.localized_headline = (0, u.$Y)(
                    T.localized_headline,
                    h.bP9,
                    null,
                  )),
                  T.localized_body !== void 0 &&
                    T.localized_body !== null &&
                    (T.localized_body = (0, u.$Y)(
                      T.localized_body,
                      h.bP9,
                      null,
                    )),
                  T.localized_image !== void 0 &&
                    T.localized_image !== null &&
                    (T.localized_image = (0, u.$Y)(
                      T.localized_image,
                      h.bP9,
                      null,
                    ));
              }),
            v.jsondata.localized_title_image.forEach((T, w) => {
              if (T != null && T.substr(0, 4) == "http") {
                let X = T.lastIndexOf("/"),
                  W = T.substr(X + 1);
                v.jsondata.localized_title_image[w] = W;
              }
            }),
            (v.bLoaded = !0),
            D.published
              ? D.unlisted
                ? (v.visibility_state = Y.zv.k_EEventStateUnlisted)
                : D.hidden
                  ? (v.visibility_state = Y.zv.k_EEventStateStaged)
                  : (v.visibility_state = Y.zv.k_EEventStateVisible)
              : (v.visibility_state = Y.zv.k_EEventStateUnpublished),
            v
          );
        }
      },
      46943: ($, ft, r) => {
        "use strict";
        r.d(ft, { Ul: () => W, xz: () => Bt, $Y: () => at, i8: () => et });
        var e = r(7850),
          L = r(90626),
          N = r(75844),
          Y = r(5858),
          z = r(36707),
          h = r(3166),
          u = r(13465);
        const s =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          rt =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          vt =
            r.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var Z = r(43047),
          D = r.n(Z),
          v = r(71742),
          yt = Object.defineProperty,
          T = Object.getOwnPropertyDescriptor,
          w = (_, it, Ct, S) => {
            for (
              var E = S > 1 ? void 0 : S ? T(it, Ct) : it, R = _.length - 1, U;
              R >= 0;
              R--
            )
              (U = _[R]) && (E = (S ? U(it, Ct, E) : U(E)) || E);
            return S && E && yt(it, Ct, E), E;
          };
        function X(_) {
          switch (_) {
            case "X-Small":
            case "Small":
              return s;
            case "Medium":
            case "MediumLarge":
              return rt;
            case "Large":
            case "X-Large":
            case "FillArea":
              return vt;
            default:
              return (0, v.z_)(_, `Unhandled size ${_}`), rt;
          }
        }
        const W = L.memo(function (it) {
            const {
                strAvatarURL: Ct,
                size: S = "Medium",
                className: E,
                statusStyle: R,
                statusPosition: U,
                children: q,
                ...V
              } = it,
              st = L.useMemo(() => {
                const nt = [];
                return Ct && nt.push(Ct), nt.push(X(S)), nt;
              }, [Ct, S]);
            return (0, e.jsxs)("div", {
              className: (0, z.A)(
                D().avatarHolder,
                "avatarHolder",
                "no-drag",
                S,
                E,
              ),
              ...V,
              children: [
                (0, e.jsx)("div", {
                  className: (0, z.A)(D().avatarStatus, "avatarStatus", U),
                  style: R,
                }),
                (0, e.jsx)(u.c, {
                  className: (0, z.A)(D().avatar, "avatar"),
                  rgSources: st,
                  draggable: !1,
                }),
                q,
              ],
            });
          }),
          F = L.memo(function (it) {
            const {
              strAvatarURL: Ct,
              size: S = "Medium",
              className: E,
              statusStyle: R,
              statusPosition: U,
              children: q,
              ...V
            } = it;
            return (0, e.jsxs)("div", {
              className: (0, z.A)(
                D().avatarHolder,
                "avatarHolder",
                "no-drag",
                S,
                E,
              ),
              ...V,
              children: [
                (0, e.jsx)("div", {
                  className: (0, z.A)(D().avatarStatus, "avatarStatus", U),
                  style: R,
                }),
                (0, e.jsx)("img", {
                  className: (0, z.A)(D().avatar, "avatar"),
                  src: Ct,
                  draggable: !1,
                }),
                q,
              ],
            });
          });
        let et = class extends L.Component {
          render() {
            const {
              persona: _,
              size: it = "Medium",
              animatedAvatar: Ct,
              className: S,
              strBackupAvatarURL: E,
              ...R
            } = this.props;
            let U = "";
            return (
              Ct && Ct.image_small && Ct.image_small.length != 0
                ? (U =
                    h.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + Ct.image_small)
                : _
                  ? ((U = _.avatar_url_medium),
                    it == "Small" || it == "X-Small"
                      ? (U = _.avatar_url)
                      : (it == "Large" ||
                          it == "X-Large" ||
                          it == "FillArea") &&
                        (U = _.avatar_url_full))
                  : E && (U = E),
              (0, e.jsx)(W, {
                strAvatarURL: U,
                size: it,
                className: (0, z.A)((0, Y.rO)(_), S),
                ...R,
              })
            );
          }
        };
        et = w([N.PA], et);
        const at = (0, N.PA)((_) => {
          const {
            profileItem: it,
            className: Ct,
            bDisableAnimation: S,
            ...E
          } = _;
          if (!it || !it.image_small || it.image_small.length == 0) return null;
          let R = S ? it.image_large : it.image_small;
          return (
            R || (R = it.image_small),
            R.startsWith("https://") ||
              (R = h.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + R),
            (0, e.jsx)("div", {
              className: (0, z.A)(D().avatarFrame, Ct, "avatarFrame"),
              ...E,
              children: (0, e.jsx)("img", {
                className: D().avatarFrameImg,
                src: R,
              }),
            })
          );
        });
        let Bt = class extends L.Component {
          m_timer;
          constructor(_) {
            super(_),
              (this.state = { bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = 0);
          }
          componentDidMount() {
            this.props.bParentHovered || this.SetupAnimationTimer();
          }
          SetupAnimationTimer() {
            let _ = 0;
            switch (this.props.loopDuration) {
              case "Short":
                _ = 2500;
                break;
              case "Medium":
                _ = 5e3;
                break;
              case "Long":
                _ = 1e4;
                break;
            }
            _ != 0 &&
              (this.setState({ bAnimate: this.props.loopDuration != "None" }),
              (this.m_timer = window.setTimeout(
                () => this.setState({ bAnimate: !1 }),
                _,
              )));
          }
          StopAnimationTimer() {
            this.m_timer &&
              (window.clearTimeout(this.m_timer), (this.m_timer = 0));
          }
          onHover() {
            this.SetupAnimationTimer();
          }
          componentWillUnmount() {
            this.StopAnimationTimer();
          }
          componentDidUpdate(_) {
            this.props.loopDuration != _.loopDuration &&
              (this.props.loopDuration == "None"
                ? (this.setState({ bAnimate: !1 }), this.StopAnimationTimer())
                : this.props.loopDuration == "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : (this.setState({ bAnimate: !0 }),
                    this.SetupAnimationTimer())),
              this.props.bParentHovered != _.bParentHovered &&
                (this.props.bParentHovered &&
                this.props.loopDuration != "None" &&
                this.props.loopDuration != "Infinite"
                  ? (this.setState({ bAnimate: !0 }), this.StopAnimationTimer())
                  : this.state.bAnimate && this.SetupAnimationTimer());
          }
          render() {
            let {
              loopDuration: _,
              animatedAvatar: it,
              avatarFrame: Ct,
              children: S,
              style: E,
              bLimitProfileFrameAnimationTime: R,
              bParentHovered: U,
              ...q
            } = this.props;
            q.onClick && (E = { ...E, cursor: "pointer" });
            const V = this.state.bAnimate ? (it ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(et, {
                animatedAvatar: V,
                ...q,
                children: [
                  S,
                  (0, e.jsx)(at, {
                    profileItem: Ct ?? null,
                    bDisableAnimation: R && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        Bt = w([N.PA], Bt);
      },
      59490: ($, ft, r) => {
        "use strict";
        r.d(ft, { p: () => s });
        var e = r(7850),
          L = r(90626),
          N = r(76559),
          Y = r(54407),
          z = r(15736),
          h = r.n(z),
          u = r(3166);
        function s(rt) {
          const {
              accountID: vt,
              bHideWhenNotAvailable: Z,
              bHideName: D,
              bLink: v = !0,
            } = rt,
            [yt] = (0, Y.KT)(vt),
            T = (0, Y.KM)(vt),
            w = L.useMemo(() => N.b.InitFromAccountID(vt), [vt]),
            X = `${u.TS.COMMUNITY_BASE_URL}profiles/${w.ConvertTo64BitString()}`,
            W = v ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: yt
              ? (0, e.jsxs)(W, {
                  href: v ? X : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: z.SmallAvatar,
                      src: yt.avatar_url,
                      "data-miniprofile": "s" + w.ConvertTo64BitString(),
                    }),
                    !D &&
                      (0, e.jsx)("span", {
                        children: T
                          ? `${T} (${yt.persona_name})`
                          : yt.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !Z && (0, e.jsx)("span", { children: vt }),
                }),
          });
        }
      },
      9519: ($, ft, r) => {
        "use strict";
        r.d(ft, { q: () => Y });
        var e = r(90626),
          L = r(30096);
        const N = 2e4;
        function Y(z) {
          const h = (0, e.useRef)(!1),
            u = (0, e.useRef)(null),
            s = (0, e.useCallback)(() => {
              u.current = setTimeout(() => {
                z.current &&
                  !z.current.paused &&
                  (z.current.pause(), (h.current = !0));
              }, N);
            }, [z]),
            rt = (0, e.useCallback)(() => {
              u.current && (clearTimeout(u.current), (u.current = null)),
                z.current && h.current && (z.current.play(), (h.current = !1));
            }, [z]);
          (0, L.l6)(window, "blur", s), (0, L.l6)(window, "focus", rt);
        }
      },
      51133: ($, ft, r) => {
        "use strict";
        r.r(ft), r.d(ft, { YearInReviewRoutes: () => yr, default: () => Po });
        var e = r(7850),
          L = r(72604),
          N = r(72609),
          Y = r(2289),
          z = r(27386),
          h = r(80613),
          u = r.n(h),
          s = r(75245),
          rt = r(35038);
        const vt = 0,
          Z = 1,
          D = 2,
          v = 3,
          yt = 4,
          T = 0,
          w = 1,
          X = 2,
          W = 3,
          F = 4,
          et = 5,
          at = 6,
          Bt = 7,
          _ = 8,
          it = 9,
          Ct = 10,
          S = 11;
        function E(o) {
          return "unknown ESeason ( " + o + " )";
        }
        function R(o) {
          return "unknown EUserActionEventType ( " + o + " )";
        }
        function U(o) {
          return "unknown EYearInReviewPrivacyState ( " + o + " )";
        }
        function q(o) {
          return "unknown EYearInReviewAccessSource ( " + o + " )";
        }
        class V extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.total_playtime_seconds || s.Sg(V.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
                  fields: {
                    total_playtime_seconds: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 20,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    vr_sessions: {
                      n: 21,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    deck_sessions: {
                      n: 22,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    controller_sessions: {
                      n: 23,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    linux_sessions: {
                      n: 24,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    macos_sessions: {
                      n: 25,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    windows_sessions: {
                      n: 26,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    total_playtime_percentagex100: {
                      n: 27,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    vr_playtime_percentagex100: {
                      n: 28,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    deck_playtime_percentagex100: {
                      n: 29,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    controller_playtime_percentagex100: {
                      n: 30,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    linux_playtime_percentagex100: {
                      n: 31,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    macos_playtime_percentagex100: {
                      n: 32,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    windows_playtime_percentagex100: {
                      n: 33,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = s.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(V.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new V();
            return V.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(V.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(V.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class st extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.appid || s.Sg(st.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = s.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(st.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new st();
            return st.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(st.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(st.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class nt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              nt.prototype.longest_consecutive_days || s.Sg(nt.M()),
              h.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    longest_consecutive_days: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    rtime_start: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    streak_games: { n: 3, c: st, r: !0, q: !0 },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = s.w0(nt.M())), nt.sm_mbf;
          }
          toObject(t = !1) {
            return nt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(nt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(nt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new nt();
            return nt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(nt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(nt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class mt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              mt.prototype.overall_rank || s.Sg(mt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              mt.sm_m ||
                (mt.sm_m = {
                  proto: mt,
                  fields: {
                    overall_rank: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    vr_rank: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    deck_rank: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    controller_rank: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    linux_rank: {
                      n: 5,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    mac_rank: {
                      n: 6,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    windows_rank: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              mt.sm_m
            );
          }
          static MBF() {
            return mt.sm_mbf || (mt.sm_mbf = s.w0(mt.M())), mt.sm_mbf;
          }
          toObject(t = !1) {
            return mt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(mt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(mt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new mt();
            return mt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(mt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(mt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class Tt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tt.prototype.appid || s.Sg(Tt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    stats: { n: 2, c: V },
                    playtime_streak: { n: 3, c: nt },
                    playtime_ranks: { n: 4, c: mt },
                    rtime_first_played: {
                      n: 5,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    relative_game_stats: { n: 6, c: V },
                  },
                }),
              Tt.sm_m
            );
          }
          static MBF() {
            return Tt.sm_mbf || (Tt.sm_mbf = s.w0(Tt.M())), Tt.sm_mbf;
          }
          toObject(t = !1) {
            return Tt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Tt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Tt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Tt();
            return Tt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Tt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Tt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class gt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              gt.prototype.appid || s.Sg(gt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    new_this_year: {
                      n: 2,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    rtime_first_played_lifetime: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    demo: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                    playtest: { n: 5, br: s.qM.readBool, bw: s.gp.writeBool },
                    played_during_early_access: {
                      n: 6,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    played_vr: { n: 7, br: s.qM.readBool, bw: s.gp.writeBool },
                    played_deck: {
                      n: 8,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    played_controller: {
                      n: 9,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    played_linux: {
                      n: 10,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    played_mac: {
                      n: 11,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    played_windows: {
                      n: 12,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    total_playtime_percentagex100: {
                      n: 13,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    total_sessions: {
                      n: 14,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    rtime_release_date: {
                      n: 15,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    parent_appid: {
                      n: 16,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = s.w0(gt.M())), gt.sm_mbf;
          }
          toObject(t = !1) {
            return gt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(gt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(gt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new gt();
            return gt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(gt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(gt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class At extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.appid || s.Sg(At.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    total_playtime_percentagex100: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = s.w0(At.M())), At.sm_mbf;
          }
          toObject(t = !1) {
            return At.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(At.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new At();
            return At.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(At.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(At.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class Lt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Lt.prototype.appid || s.Sg(Lt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Lt.sm_m ||
                (Lt.sm_m = {
                  proto: Lt,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    rank: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    relative_playtime_percentagex100: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              Lt.sm_m
            );
          }
          static MBF() {
            return Lt.sm_mbf || (Lt.sm_mbf = s.w0(Lt.M())), Lt.sm_mbf;
          }
          toObject(t = !1) {
            return Lt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Lt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Lt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Lt();
            return Lt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Lt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Lt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class p extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              p.prototype.category || s.Sg(p.M()),
              h.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              p.sm_m ||
                (p.sm_m = {
                  proto: p,
                  fields: {
                    category: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    rankings: { n: 2, c: Lt, r: !0, q: !0 },
                  },
                }),
              p.sm_m
            );
          }
          static MBF() {
            return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
          }
          toObject(t = !1) {
            return p.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(p.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(p.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new p();
            return p.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(p.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return p.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(p.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              p.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class k extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              k.prototype.overall_ranking || s.Sg(k.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              k.sm_m ||
                (k.sm_m = {
                  proto: k,
                  fields: {
                    overall_ranking: { n: 1, c: p },
                    vr_ranking: { n: 2, c: p },
                    deck_ranking: { n: 3, c: p },
                    controller_ranking: { n: 4, c: p },
                    linux_ranking: { n: 5, c: p },
                    mac_ranking: { n: 6, c: p },
                    windows_ranking: { n: 7, c: p },
                  },
                }),
              k.sm_m
            );
          }
          static MBF() {
            return k.sm_mbf || (k.sm_mbf = s.w0(k.M())), k.sm_mbf;
          }
          toObject(t = !1) {
            return k.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(k.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(k.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new k();
            return k.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(k.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return k.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(k.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              k.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class ot extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ot.prototype.total_achievements || s.Sg(ot.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    total_achievements: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = s.w0(ot.M())), ot.sm_mbf;
          }
          toObject(t = !1) {
            return ot.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ot.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ot.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ot();
            return ot.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ot.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ot.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class ht extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ht.prototype.stats || s.Sg(ht.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: { stats: { n: 1, c: Et, r: !0, q: !0 } },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = s.w0(ht.M())), ht.sm_mbf;
          }
          toObject(t = !1) {
            return ht.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ht.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ht.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ht();
            return ht.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ht.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ht.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class Et extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.tag_id || s.Sg(Et.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
                  fields: {
                    tag_id: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    tag_weight: {
                      n: 2,
                      br: s.qM.readFloat,
                      bw: s.gp.writeFloat,
                    },
                    tag_weight_pre_selection: {
                      n: 3,
                      br: s.qM.readFloat,
                      bw: s.gp.writeFloat,
                    },
                  },
                }),
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = s.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Et.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Et();
            return Et.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Et.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Et.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class jt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              jt.prototype.screenshots_shared || s.Sg(jt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    screenshots_shared: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    gifts_sent: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    loyalty_reactions: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    written_reviews: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    guides_submitted: {
                      n: 5,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    workshop_contributions: {
                      n: 6,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    badges_earned: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    friends_added: {
                      n: 8,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    forum_posts: {
                      n: 9,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    workshop_subscriptions: {
                      n: 10,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    guide_subscribers: {
                      n: 11,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    workshop_subscribers: {
                      n: 12,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    games_played_pct: {
                      n: 13,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    achievements_pct: {
                      n: 14,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    game_streak_pct: {
                      n: 15,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    games_played_avg: {
                      n: 16,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    achievements_avg: {
                      n: 17,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    game_streak_avg: {
                      n: 18,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = s.w0(jt.M())), jt.sm_mbf;
          }
          toObject(t = !1) {
            return jt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(jt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(jt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new jt();
            return jt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(jt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(jt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class pt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pt.prototype.total_stats || s.Sg(pt.M()),
              h.Message.initialize(this, t, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
                  fields: {
                    total_stats: { n: 1, c: V },
                    games: { n: 2, c: Tt, r: !0, q: !0 },
                    playtime_streak: { n: 3, c: nt },
                    months: { n: 5, c: xt, r: !0, q: !0 },
                    game_summary: { n: 6, c: gt, r: !0, q: !0 },
                    demos_played: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    game_rankings: { n: 8, c: k },
                    playtests_played: {
                      n: 9,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    summary_stats: { n: 10, c: ot },
                    substantial: {
                      n: 11,
                      d: !0,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    tag_stats: { n: 12, c: ht },
                    by_numbers: { n: 13, c: jt },
                  },
                }),
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = s.w0(pt.M())), pt.sm_mbf;
          }
          toObject(t = !1) {
            return pt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(pt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(pt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new pt();
            return pt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(pt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(pt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class xt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xt.prototype.rtime_month || s.Sg(xt.M()),
              h.Message.initialize(this, t, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xt.sm_m ||
                (xt.sm_m = {
                  proto: xt,
                  fields: {
                    rtime_month: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    stats: { n: 2, c: V },
                    appid: { n: 4, c: Tt, r: !0, q: !0 },
                    relative_monthly_stats: { n: 5, c: V },
                    game_summary: { n: 6, c: At, r: !0, q: !0 },
                  },
                }),
              xt.sm_m
            );
          }
          static MBF() {
            return xt.sm_mbf || (xt.sm_mbf = s.w0(xt.M())), xt.sm_mbf;
          }
          toObject(t = !1) {
            return xt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(xt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(xt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new xt();
            return xt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(xt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(xt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class bt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.account_id || s.Sg(bt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    account_id: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    playtime_stats: { n: 3, c: pt },
                    privacy_state: {
                      n: 4,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = s.w0(bt.M())), bt.sm_mbf;
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(bt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(bt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new bt();
            return bt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(bt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(bt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class zt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.from_dbo || s.Sg(zt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              zt.sm_m ||
                (zt.sm_m = {
                  proto: zt,
                  fields: {
                    from_dbo: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                    overall_time_ms: {
                      n: 2,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    dbo_load_ms: {
                      n: 3,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    query_execution_ms: {
                      n: 4,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    message_population_ms: {
                      n: 5,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                    dbo_lock_load_ms: {
                      n: 6,
                      br: s.qM.readUint64String,
                      bw: s.gp.writeUint64String,
                    },
                  },
                }),
              zt.sm_m
            );
          }
          static MBF() {
            return zt.sm_mbf || (zt.sm_mbf = s.w0(zt.M())), zt.sm_mbf;
          }
          toObject(t = !1) {
            return zt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(zt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(zt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new zt();
            return zt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(zt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(zt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class Ut extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.statid || s.Sg(Ut.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    statid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    fieldid: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    achievement_name_internal: {
                      n: 3,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    rtime_unlocked: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              Ut.sm_m
            );
          }
          static MBF() {
            return Ut.sm_mbf || (Ut.sm_mbf = s.w0(Ut.M())), Ut.sm_mbf;
          }
          toObject(t = !1) {
            return Ut.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Ut.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Ut.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Ut();
            return Ut.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Ut.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Ut.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class wt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.appid || s.Sg(wt.M()),
              h.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    achievements: { n: 2, c: Ut, r: !0, q: !0 },
                    all_time_unlocked_achievements: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    unlocked_more_in_future: {
                      n: 4,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              wt.sm_m
            );
          }
          static MBF() {
            return wt.sm_mbf || (wt.sm_mbf = s.w0(wt.M())), wt.sm_mbf;
          }
          toObject(t = !1) {
            return wt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(wt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(wt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new wt();
            return wt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(wt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(wt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class Ot extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ot.prototype.median_achievements || s.Sg(Ot.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    median_achievements: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    median_games: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    median_streak: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              Ot.sm_m
            );
          }
          static MBF() {
            return Ot.sm_mbf || (Ot.sm_mbf = s.w0(Ot.M())), Ot.sm_mbf;
          }
          toObject(t = !1) {
            return Ot.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Ot.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Ot.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Ot();
            return Ot.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Ot.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Ot.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class Rt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Rt.prototype.new_releases || s.Sg(Rt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Rt.sm_m ||
                (Rt.sm_m = {
                  proto: Rt,
                  fields: {
                    new_releases: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    recent_releases: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    classic_releases: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    recent_cutoff_year: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              Rt.sm_m
            );
          }
          static MBF() {
            return Rt.sm_mbf || (Rt.sm_mbf = s.w0(Rt.M())), Rt.sm_mbf;
          }
          toObject(t = !1) {
            return Rt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Rt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Rt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Rt();
            return Rt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Rt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Rt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Rt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Rt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class _t extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              _t.prototype.games_played || s.Sg(_t.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _t.sm_m ||
                (_t.sm_m = {
                  proto: _t,
                  fields: {
                    games_played: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    unlocked_achievements: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    longest_streak: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              _t.sm_m
            );
          }
          static MBF() {
            return _t.sm_mbf || (_t.sm_mbf = s.w0(_t.M())), _t.sm_mbf;
          }
          toObject(t = !1) {
            return _t.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(_t.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(_t.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new _t();
            return _t.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(_t.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return _t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(_t.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              _t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class te extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              te.prototype.steamid || s.Sg(te.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    force_regenerate: {
                      n: 3,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    access_source: {
                      n: 4,
                      br: s.qM.readInt32,
                      bw: s.gp.writeInt32,
                    },
                    fetch_previous_year_summary: {
                      n: 5,
                      d: !1,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = s.w0(te.M())), te.sm_mbf;
          }
          toObject(t = !1) {
            return te.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(te.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(te.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new te();
            return te.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(te.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(te.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class Jt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Jt.prototype.stats || s.Sg(Jt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Jt.sm_m ||
                (Jt.sm_m = {
                  proto: Jt,
                  fields: {
                    stats: { n: 1, c: bt },
                    performance_stats: { n: 2, c: zt },
                    percentiles: { n: 3, c: Ot },
                    distribution: { n: 4, c: Rt },
                    previous_year_summary: { n: 5, c: _t },
                  },
                }),
              Jt.sm_m
            );
          }
          static MBF() {
            return Jt.sm_mbf || (Jt.sm_mbf = s.w0(Jt.M())), Jt.sm_mbf;
          }
          toObject(t = !1) {
            return Jt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Jt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Jt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Jt();
            return Jt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Jt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Jt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Jt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Jt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class kt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.steamid || s.Sg(kt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    privacy_state: {
                      n: 3,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                  },
                }),
              kt.sm_m
            );
          }
          static MBF() {
            return kt.sm_mbf || (kt.sm_mbf = s.w0(kt.M())), kt.sm_mbf;
          }
          toObject(t = !1) {
            return kt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(kt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(kt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new kt();
            return kt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(kt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(kt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class ee extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ee.prototype.privacy_state || s.Sg(ee.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = s.w0(ee.M())), ee.sm_mbf;
          }
          toObject(t = !1) {
            return ee.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ee.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ee.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ee();
            return ee.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ee.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ee.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class re extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              re.prototype.steamid || s.Sg(re.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = s.w0(re.M())), re.sm_mbf;
          }
          toObject(t = !1) {
            return re.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(re.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(re.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new re();
            return re.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(re.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(re.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class se extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              se.prototype.privacy_state || s.Sg(se.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    privacy_state: {
                      n: 1,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                    generated_value: {
                      n: 2,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    steamid: {
                      n: 3,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = s.w0(se.M())), se.sm_mbf;
          }
          toObject(t = !1) {
            return se.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(se.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(se.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new se();
            return se.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(se.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(se.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class oe extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              oe.prototype.steamid || s.Sg(oe.M()),
              h.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                    total_only: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = s.w0(oe.M())), oe.sm_mbf;
          }
          toObject(t = !1) {
            return oe.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(oe.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(oe.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new oe();
            return oe.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(oe.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(oe.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class le extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              le.prototype.game_achievements || s.Sg(le.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    game_achievements: { n: 1, c: wt, r: !0, q: !0 },
                    total_achievements: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    total_rare_achievements: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    total_games_with_achievements: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = s.w0(le.M())), le.sm_mbf;
          }
          toObject(t = !1) {
            return le.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(le.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(le.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new le();
            return le.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(le.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(le.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class ce extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ce.prototype.steamid || s.Sg(ce.M()),
              h.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    appids: {
                      n: 3,
                      r: !0,
                      q: !0,
                      br: s.qM.readUint32,
                      pbr: s.qM.readPackedUint32,
                      bw: s.gp.writeRepeatedUint32,
                    },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = s.w0(ce.M())), ce.sm_mbf;
          }
          toObject(t = !1) {
            return ce.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ce.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ce.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ce();
            return ce.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ce.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ce.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class de extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.apps || s.Sg(de.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: { apps: { n: 1, c: ae, r: !0, q: !0 } },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = s.w0(de.M())), de.sm_mbf;
          }
          toObject(t = !1) {
            return de.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(de.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(de.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new de();
            return de.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(de.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(de.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class me extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              me.prototype.image_url || s.Sg(me.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              me.sm_m ||
                (me.sm_m = {
                  proto: me,
                  fields: {
                    image_url: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    preview_url: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    image_width: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    image_height: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    maybe_inappropriate_sex: {
                      n: 5,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    maybe_inappropriate_violence: {
                      n: 6,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    visibility: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    spoiler_tag: {
                      n: 8,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              me.sm_m
            );
          }
          static MBF() {
            return me.sm_mbf || (me.sm_mbf = s.w0(me.M())), me.sm_mbf;
          }
          toObject(t = !1) {
            return me.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(me.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(me.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new me();
            return me.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(me.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return me.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(me.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              me.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class ae extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ae.prototype.appid || s.Sg(ae.M()),
              h.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    screenshots: { n: 2, c: me, r: !0, q: !0 },
                  },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = s.w0(ae.M())), ae.sm_mbf;
          }
          toObject(t = !1) {
            return ae.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ae.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ae.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ae();
            return ae.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ae.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ae.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class M extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              M.prototype.steamid || s.Sg(M.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              M.sm_m ||
                (M.sm_m = {
                  proto: M,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    gid: {
                      n: 2,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    type: { n: 3, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  },
                }),
              M.sm_m
            );
          }
          static MBF() {
            return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
          }
          toObject(t = !1) {
            return M.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(M.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(M.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new M();
            return M.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(M.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return M.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(M.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              M.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class C extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              C.prototype.jsondata || s.Sg(C.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    jsondata: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = s.w0(C.M())), C.sm_mbf;
          }
          toObject(t = !1) {
            return C.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(C.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(C.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new C();
            return C.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(C.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return C.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(C.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class tt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.steamid || s.Sg(tt.M()),
              h.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    gids: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: s.qM.readFixed64String,
                      pbr: s.qM.readPackedFixed64String,
                      bw: s.gp.writeRepeatedFixed64String,
                    },
                    type: { n: 3, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = s.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(tt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new tt();
            return tt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(tt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(tt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class J extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              J.prototype.entries || s.Sg(J.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              J.sm_m ||
                (J.sm_m = {
                  proto: J,
                  fields: { entries: { n: 1, c: Mt, r: !0, q: !0 } },
                }),
              J.sm_m
            );
          }
          static MBF() {
            return J.sm_mbf || (J.sm_mbf = s.w0(J.M())), J.sm_mbf;
          }
          toObject(t = !1) {
            return J.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(J.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(J.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new J();
            return J.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(J.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return J.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(J.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              J.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class Mt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.gid || s.Sg(Mt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    gid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = s.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(t = !1) {
            return Mt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Mt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Mt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Mt();
            return Mt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Mt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Mt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class Nt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Nt.prototype.gid || s.Sg(Nt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Nt.sm_m ||
                (Nt.sm_m = {
                  proto: Nt,
                  fields: {
                    gid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    type: { n: 2, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    count: { n: 3, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    last_account_index: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              Nt.sm_m
            );
          }
          static MBF() {
            return Nt.sm_mbf || (Nt.sm_mbf = s.w0(Nt.M())), Nt.sm_mbf;
          }
          toObject(t = !1) {
            return Nt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Nt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Nt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Nt();
            return Nt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Nt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Nt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class Pt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Pt.prototype.entries || s.Sg(Pt.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pt.sm_m ||
                (Pt.sm_m = {
                  proto: Pt,
                  fields: {
                    entries: { n: 1, c: Yt, r: !0, q: !0 },
                    last_account_index: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              Pt.sm_m
            );
          }
          static MBF() {
            return Pt.sm_mbf || (Pt.sm_mbf = s.w0(Pt.M())), Pt.sm_mbf;
          }
          toObject(t = !1) {
            return Pt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Pt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Pt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Pt();
            return Pt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Pt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Pt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class Yt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.gid || s.Sg(Yt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Yt.sm_m ||
                (Yt.sm_m = {
                  proto: Yt,
                  fields: {
                    gid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    jsondata: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    steamid: {
                      n: 3,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                  },
                }),
              Yt.sm_m
            );
          }
          static MBF() {
            return Yt.sm_mbf || (Yt.sm_mbf = s.w0(Yt.M())), Yt.sm_mbf;
          }
          toObject(t = !1) {
            return Yt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Yt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Yt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Yt();
            return Yt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Yt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Yt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class St extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              St.prototype.steamid || s.Sg(St.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    return_private: {
                      n: 3,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = s.w0(St.M())), St.sm_mbf;
          }
          toObject(t = !1) {
            return St.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(St.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(St.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new St();
            return St.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(St.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return St.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(St.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class Xt extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.steamid || s.Sg(Xt.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    privacy_state: {
                      n: 3,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                    rt_privacy_updated: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    privacy_override: {
                      n: 5,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                  },
                }),
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = s.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Xt.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Xt.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Xt();
            return Xt.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Xt.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Xt.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class ie extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ie.prototype.friend_shares || s.Sg(ie.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
                  fields: {
                    friend_shares: { n: 1, c: Xt, r: !0, q: !0 },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  },
                }),
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = s.w0(ie.M())), ie.sm_mbf;
          }
          toObject(t = !1) {
            return ie.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ie.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ie.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ie();
            return ie.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ie.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ie.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class Be extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Be.prototype.steamid || s.Sg(Be.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Be.sm_m ||
                (Be.sm_m = {
                  proto: Be,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    language: {
                      n: 3,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              Be.sm_m
            );
          }
          static MBF() {
            return Be.sm_mbf || (Be.sm_mbf = s.w0(Be.M())), Be.sm_mbf;
          }
          toObject(t = !1) {
            return Be.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(Be.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(Be.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new Be();
            return Be.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(Be.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return Be.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(Be.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              Be.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class he extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.images || s.Sg(he.M()),
              h.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: { images: { n: 1, c: fe, r: !0, q: !0 } },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = s.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(he.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new he();
            return he.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(he.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(he.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class fe extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.name || s.Sg(fe.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    name: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                    url_path: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = s.w0(fe.M())), fe.sm_mbf;
          }
          toObject(t = !1) {
            return fe.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(fe.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(fe.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new fe();
            return fe.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(fe.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(fe.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class ve extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ve.prototype.steamid || s.Sg(ve.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = s.w0(ve.M())), ve.sm_mbf;
          }
          toObject(t = !1) {
            return ve.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ve.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ve.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ve();
            return ve.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ve.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ve.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class ye extends h.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.year || s.Sg(ye.M()),
              h.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    year: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    month: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    games_played: {
                      n: 4,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    top_played_appid: {
                      n: 5,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    longest_streak_days: {
                      n: 6,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    rt_streak_start: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    achievements: {
                      n: 8,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    screenshots: {
                      n: 9,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = s.w0(ye.M())), ye.sm_mbf;
          }
          toObject(t = !1) {
            return ye.toObject(t, this);
          }
          static toObject(t, i) {
            return s.BT(ye.M(), t, i);
          }
          static fromObject(t) {
            return s.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let i = new (u().BinaryReader)(t),
              a = new ye();
            return ye.deserializeBinaryFromReader(a, i);
          }
          static deserializeBinaryFromReader(t, i) {
            return s.zj(ye.MBF(), t, i);
          }
          serializeBinary() {
            var t = new (u().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, i) {
            s.i0(ye.M(), t, i);
          }
          serializeBase64String() {
            var t = new (u().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var He;
        ((o) => {
          function t(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, rt.I8)(te, K, Q),
              Jt,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearInReview = t;
          function i(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, rt.I8)(re, K, Q),
              se,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.GetUserSharingPermissions = i;
          function a(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, rt.I8)(kt, K, Q),
              ee,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.SetUserSharingPermissions = a;
          function l(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, rt.I8)(oe, K, Q),
              le,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearAchievements = l;
          function c(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, rt.I8)(ce, K, Q),
              de,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearScreenshots = c;
          function d(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, rt.I8)(M, K, Q),
              C,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          o.GetUserActionData = d;
          function m(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, rt.I8)(tt, K, Q),
              J,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          o.GetMultipleUserActionData = m;
          function g(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, rt.I8)(Nt, K, Q),
              Pt,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          o.GetAllUserActionDataForType = g;
          function y(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, rt.I8)(St, K, Q),
              ie,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.GetFriendsSharedYearInReview = y;
          function j(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, rt.I8)(Be, K, Q),
              he,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearInReviewShareImage = j;
          function P(H, K, Q) {
            return H.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, rt.I8)(ve, K, Q),
              ye,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.GetYIRCurrentMonthlySummary = P;
        })(He || (He = {}));
        var Fe = r(68312),
          Re = r(80902),
          cn = r(75233),
          Hn = r(51614),
          Gn = r(54806),
          Tn = r(58632),
          ke = r.n(Tn),
          A = r(90626),
          Ee = r(71742),
          n = r(83764);
        const An = {
            [n.Gkz]: [n.Gkz, n.Vg1, n.Sv2, n.e94, n.H2m, n.Loc],
            [n.GBh]: [n.GBh, n.dpF, n.NHG, n.CSO, n.$c4, n.pqi, n.rxn],
            [n.xXG]: [n.xXG, n.JtN, n.eQ$, n.ewi],
            [n.Jzd]: [n.Jzd],
            [n.IEJ]: [n.IEJ, n.LGs],
            [n.REG]: [n.REG],
            [n.X$z]: [n.X$z, n.NUE],
            [n.Vg1]: [n.Gkz, n.Vg1, n.Sv2, n.MnB],
            [n.nuP]: [n.nuP, n.BGM, n.R$d, n.bPv, n.Upk, n.yTG, n.mYY],
            [n.dpF]: [n.GBh, n.dpF, n.NHG, n.RRP, n.mRX],
            [n.z3Q]: [n.z3Q, n.KCN, n.J1r, n.gEw, n.Gxx],
            [n.equ]: [n.equ, n.NUE],
            [n.Sv2]: [n.Gkz, n.Vg1, n.Sv2, n.W1J],
            [n.dWZ]: [n.dWZ, n.jzL, n.a1e],
            [n.MnB]: [n.Vg1, n.MnB],
            [n.ubQ]: [n.ubQ, n.G1H, n.ZUO],
            [n.gGw]: [n.gGw, n.ZBT, n.RW$],
            [n.JtN]: [n.xXG, n.JtN, n.UfY, n.c2w],
            [n.ZBT]: [n.gGw, n.ZBT, n.RW$],
            [n.Xkc]: [n.Xkc],
            [n.Gb2]: [n.Gb2, n.aBe, n.U2r, n.qU0],
            [n.CT2]: [n.CT2],
            [n._D]: [n._D],
            [n.eQ$]: [n.xXG, n.eQ$, n.SCk, n.nNq],
            [n.JCU]: [n.JCU, n.guj],
            [n.NHG]: [n.GBh, n.dpF, n.NHG],
            [n.G1H]: [n.ubQ, n.G1H],
            [n.qj]: [n.qj, n.bvg],
            [n.ewi]: [n.xXG, n.ewi, n.dxW],
            [n.gm5]: [n.gm5],
            [n.uZq]: [n.uZq],
            [n.NGF]: [n.NGF, n.cNr],
            [n.bHv]: [n.bHv],
            [n.Vov]: [n.Vov, n.IbE, n.qn3],
            [n.QBr]: [n.QBr, n.GEy],
            [n.nZ3]: [n.nZ3],
            [n.RnC]: [n.RnC],
            [n.CSO]: [n.GBh, n.CSO],
            [n.zwR]: [n.zwR],
            [n.CI1]: [n.CI1],
            [n.ZoV]: [n.ZoV, n.lIy],
            [n.MNG]: [n.MNG, n.J2h],
            [n.bvg]: [n.qj, n.bvg],
            [n.$c4]: [n.GBh, n.$c4],
            [n.Izv]: [n.Izv, n.NUE],
            [n.guj]: [n.JCU, n.guj],
            [n.UEV]: [n.UEV],
            [n.t_B]: [n.t_B, n.V1D],
            [n.vPq]: [n.vPq],
            [n.qAH]: [n.qAH, n.Fyw],
            [n.LqT]: [n.LqT, n.cNr],
            [n.RW$]: [n.gGw, n.ZBT, n.RW$],
            [n.ZUO]: [n.ubQ, n.ZUO],
            [n.ceg]: [n.ceg, n.dxW],
            [n.KCN]: [n.z3Q, n.KCN],
            [n.Fyw]: [n.qAH, n.Fyw],
            [n.VmN]: [n.VmN],
            [n.lIy]: [n.ZoV, n.lIy],
            [n.pqi]: [n.GBh, n.pqi],
            [n.qhO]: [n.qhO],
            [n.aUb]: [n.aUb],
            [n.tvO]: [n.tvO],
            [n.ouZ]: [n.ouZ],
            [n.IbE]: [n.Vov, n.IbE, n.q6r, n.nIA],
            [n.uzb]: [n.uzb],
            [n.mG_]: [n.mG_],
            [n.Ey4]: [n.Ey4],
            [n.e94]: [n.Gkz, n.e94],
            [n.Ya6]: [n.Ya6],
            [n.KZU]: [n.KZU],
            [n.UfY]: [n.JtN, n.UfY],
            [n.aBe]: [n.Gb2, n.aBe],
            [n.LGs]: [n.IEJ, n.LGs],
            [n.Hc3]: [n.Hc3],
            [n.aNN]: [n.aNN, n.DHU, n.AJK, n.w7d],
            [n.H2m]: [n.Gkz, n.H2m],
            [n.c2w]: [n.JtN, n.c2w],
            [n.l$V]: [n.l$V],
            [n.dBS]: [n.dBS],
            [n.IxF]: [n.IxF],
            [n.SnN]: [n.SnN],
            [n.aAJ]: [n.aAJ],
            [n.mvf]: [n.mvf],
            [n.wIS]: [n.wIS],
            [n.zjR]: [n.zjR],
            [n.BWK]: [n.BWK],
            [n.Yui]: [n.Yui],
            [n.nL9]: [n.nL9, n.nPW, n.l7W, n.$$Y],
            [n.jzL]: [n.dWZ, n.jzL, n.a1e],
            [n.ljy]: [n.ljy],
            [n.yUQ]: [n.yUQ],
            [n.BGM]: [n.nuP, n.BGM, n.IZu],
            [n.bIG]: [n.bIG, n.W5T],
            [n.GEy]: [n.QBr, n.GEy],
            [n.kOp]: [n.kOp],
            [n.hwI]: [n.hwI],
            [n.RRP]: [n.dpF, n.RRP, n.Oxw],
            [n.W5T]: [n.bIG, n.W5T],
            [n.VmC]: [n.VmC],
            [n.kpV]: [n.kpV],
            [n.gFr]: [n.gFr],
            [n.R$d]: [n.nuP, n.R$d],
            [n.Mth]: [n.Mth],
            [n.J1r]: [n.z3Q, n.J1r],
            [n.Qnc]: [n.Qnc],
            [n.Oxw]: [n.RRP, n.Oxw, n.UMQ, n.jXd, n.W19],
            [n.fVF]: [n.fVF, n.$YD],
            [n.qmd]: [n.qmd],
            [n.PoK]: [n.PoK],
            [n.bPv]: [n.nuP, n.bPv],
            [n.V1D]: [n.t_B, n.V1D],
            [n.HuG]: [n.HuG],
            [n.ng1]: [n.ng1],
            [n.Buq]: [n.Buq],
            [n.x7u]: [n.x7u],
            [n.Ftl]: [n.Ftl],
            [n.dbP]: [n.dbP],
            [n.DHU]: [n.aNN, n.DHU],
            [n.Qw3]: [n.Qw3],
            [n.J2h]: [n.MNG, n.J2h],
            [n.FzB]: [n.FzB],
            [n.Mhp]: [n.Mhp],
            [n.SCk]: [n.eQ$, n.SCk],
            [n.xrV]: [n.xrV],
            [n.ZEP]: [n.ZEP],
            [n.O5E]: [n.O5E],
            [n.Cc7]: [n.Cc7],
            [n.J51]: [n.J51],
            [n.cTj]: [n.cTj],
            [n.mwe]: [n.mwe],
            [n.Upk]: [n.nuP, n.Upk],
            [n.CIE]: [n.CIE],
            [n.qn3]: [n.Vov, n.qn3],
            [n.LIU]: [n.LIU],
            [n.Bh3]: [n.Bh3],
            [n.r6c]: [n.r6c],
            [n.a1e]: [n.dWZ, n.jzL, n.a1e],
            [n.ws2]: [n.ws2],
            [n.pbj]: [n.pbj],
            [n.H9D]: [n.H9D, n.QMk],
            [n.yfg]: [n.yfg],
            [n.EuK]: [n.EuK],
            [n.w43]: [n.w43],
            [n.zah]: [n.zah, n.b7S, n.M$A, n.lXI, n.gKc],
            [n.NUE]: [n.X$z, n.equ, n.Izv, n.NUE],
            [n.Loc]: [n.Gkz, n.Loc],
            [n.orb]: [n.orb],
            [n.di6]: [n.di6],
            [n.Ehy]: [n.Ehy],
            [n.ACh]: [n.ACh],
            [n.SN2]: [n.SN2],
            [n.aWw]: [n.aWw],
            [n.YzP]: [n.YzP],
            [n.yd9]: [n.yd9],
            [n.MAO]: [n.MAO],
            [n.nNq]: [n.eQ$, n.nNq],
            [n.Wo$]: [n.Wo$],
            [n.qU1]: [n.qU1],
            [n.hSB]: [n.hSB],
            [n.DnZ]: [n.DnZ],
            [n.qgQ]: [n.qgQ],
            [n.DcL]: [n.DcL],
            [n.SJn]: [n.SJn],
            [n.PGe]: [n.PGe],
            [n.dh_]: [n.dh_],
            [n.aK9]: [n.aK9],
            [n.GtN]: [n.GtN],
            [n.rAU]: [n.rAU],
            [n.Ywc]: [n.Ywc],
            [n.URU]: [n.URU],
            [n.Ag6]: [n.Ag6],
            [n.PYD]: [n.PYD],
            [n.dZk]: [n.dZk],
            [n.LCt]: [n.LCt],
            [n.umB]: [n.umB],
            [n.iZW]: [n.iZW],
            [n.W$A]: [n.W$A],
            [n.dI5]: [n.dI5],
            [n.IYH]: [n.IYH],
            [n.UMQ]: [n.Oxw, n.UMQ],
            [n.Eyy]: [n.Eyy],
            [n.QMk]: [n.H9D, n.QMk],
            [n.fzK]: [n.fzK, n.Pjm],
            [n.se7]: [n.se7],
            [n.tE1]: [n.tE1],
            [n.U2r]: [n.Gb2, n.U2r],
            [n.aSG]: [n.aSG],
            [n.XDm]: [n.XDm],
            [n.rkt]: [n.rkt],
            [n.l0w]: [n.l0w],
            [n.$44]: [n.$44],
            [n.ZKR]: [n.ZKR],
            [n.Yr4]: [n.Yr4],
            [n.ngb]: [n.ngb],
            [n.q6r]: [n.IbE, n.q6r],
            [n.yTG]: [n.nuP, n.yTG],
            [n.HhK]: [n.HhK],
            [n.sYW]: [n.sYW],
            [n.ML$]: [n.ML$],
            [n.JJq]: [n.JJq],
            [n.xEY]: [n.xEY],
            [n.W1J]: [n.Sv2, n.W1J],
            [n._Sw]: [n._Sw],
            [n.OJd]: [n.OJd],
            [n.L9$]: [n.L9$],
            [n.gEw]: [n.z3Q, n.gEw],
            [n.col]: [n.col],
            [n.vNw]: [n.vNw],
            [n.QxX]: [n.QxX],
            [n.Yzj]: [n.Yzj],
            [n.Cuj]: [n.Cuj],
            [n.kMe]: [n.kMe],
            [n.N1C]: [n.N1C],
            [n.lw$]: [n.lw$],
            [n.nJM]: [n.nJM],
            [n.DfI]: [n.DfI],
            [n.oNT]: [n.oNT],
            [n.Bul]: [n.Bul],
            [n.nPW]: [n.nL9, n.nPW, n.l7W],
            [n.rgd]: [n.rgd],
            [n.r7M]: [n.r7M],
            [n.pvr]: [n.pvr],
            [n.CMh]: [n.CMh],
            [n.uCt]: [n.uCt],
            [n.cXA]: [n.cXA],
            [n.MW7]: [n.MW7],
            [n.mKd]: [n.mKd],
            [n.jx3]: [n.jx3],
            [n.QM3]: [n.QM3],
            [n.mYY]: [n.nuP, n.mYY],
            [n.IVO]: [n.IVO],
            [n.ycC]: [n.ycC],
            [n.DLU]: [n.DLU],
            [n.QSw]: [n.QSw],
            [n.ybs]: [n.ybs],
            [n.Gxx]: [n.z3Q, n.Gxx],
            [n.$YD]: [n.fVF, n.$YD],
            [n.XqG]: [n.XqG],
            [n.KoH]: [n.KoH],
            [n.mRX]: [n.dpF, n.mRX],
            [n.Xgy]: [n.Xgy],
            [n.ZI3]: [n.ZI3],
            [n.AHx]: [n.AHx],
            [n.Lun]: [n.Lun],
            [n.cS7]: [n.cS7],
            [n.XsI]: [n.XsI],
            [n.i5w]: [n.i5w],
            [n.U1I]: [n.U1I],
            [n.Wq7]: [n.Wq7],
            [n.btm]: [n.btm],
            [n.VW1]: [n.VW1],
            [n.rpf]: [n.rpf],
            [n.l7W]: [n.nL9, n.nPW, n.l7W],
            [n.WE2]: [n.WE2],
            [n.cNr]: [n.NGF, n.LqT, n.cNr],
            [n.hWb]: [n.hWb],
            [n.TTb]: [n.TTb],
            [n.f_e]: [n.f_e],
            [n.IVU]: [n.IVU],
            [n.YpH]: [n.YpH],
            [n.Xe4]: [n.Xe4],
            [n.UTf]: [n.UTf],
            [n.ZXz]: [n.ZXz],
            [n.mX6]: [n.mX6],
            [n.AnB]: [n.AnB],
            [n.Jtk]: [n.Jtk],
            [n.bT7]: [n.bT7],
            [n.sFD]: [n.sFD],
            [n.pUQ]: [n.pUQ],
            [n.GGT]: [n.GGT],
            [n.W5v]: [n.W5v],
            [n.t0u]: [n.t0u],
            [n.b7S]: [n.zah, n.b7S],
            [n.X_3]: [n.X_3],
            [n.gEn]: [n.gEn],
            [n._wZ]: [n._wZ],
            [n.w_P]: [n.w_P],
            [n.tS6]: [n.tS6],
            [n.M$A]: [n.zah, n.M$A, n.lXI],
            [n.oXQ]: [n.oXQ],
            [n.Wec]: [n.Wec],
            [n.vT2]: [n.vT2],
            [n.vXU]: [n.vXU],
            [n.wdW]: [n.wdW],
            [n.eXt]: [n.eXt],
            [n.jh5]: [n.jh5],
            [n.Hp8]: [n.Hp8],
            [n.dxW]: [n.ewi, n.ceg, n.dxW],
            [n.Pjm]: [n.fzK, n.Pjm],
            [n.hYj]: [n.hYj],
            [n.k52]: [n.k52],
            [n.v_]: [n.v_],
            [n.fxF]: [n.fxF],
            [n.vk_]: [n.vk_],
            [n.Eid]: [n.Eid],
            [n.rTg]: [n.rTg],
            [n.SXO]: [n.SXO],
            [n.hTI]: [n.hTI],
            [n.YxI]: [n.YxI],
            [n.iZ9]: [n.iZ9],
            [n.GW_]: [n.GW_],
            [n.uaC]: [n.uaC],
            [n.ijE]: [n.ijE],
            [n._z]: [n._z],
            [n.rSh]: [n.rSh],
            [n.PJd]: [n.PJd],
            [n.jXd]: [n.Oxw, n.jXd, n.W19],
            [n.lPO]: [n.lPO],
            [n.jsz]: [n.jsz],
            [n.JJT]: [n.JJT],
            [n.qDq]: [n.qDq],
            [n.lXI]: [n.zah, n.M$A, n.lXI],
            [n.CNW]: [n.CNW],
            [n.MCn]: [n.MCn],
            [n.qyq]: [n.qyq],
            [n.I8s]: [n.I8s],
            [n.tCQ]: [n.tCQ],
            [n.P3p]: [n.P3p],
            [n.L3J]: [n.L3J],
            [n.a5M]: [n.a5M],
            [n.y$q]: [n.y$q],
            [n.kci]: [n.kci],
            [n.rNe]: [n.rNe],
            [n.rxn]: [n.GBh, n.rxn],
            [n.gR3]: [n.gR3],
            [n.Y4B]: [n.Y4B],
            [n.LHe]: [n.LHe],
            [n.dm2]: [n.dm2],
            [n.aRw]: [n.aRw],
            [n.qU0]: [n.Gb2, n.qU0],
            [n.IZu]: [n.BGM, n.IZu],
            [n.pcg]: [n.pcg],
            [n.i2H]: [n.i2H],
            [n.Oyv]: [n.Oyv],
            [n.jdh]: [n.jdh],
            [n.TZq]: [n.TZq],
            [n.O10]: [n.O10],
            [n.FGn]: [n.FGn],
            [n.rgP]: [n.rgP],
            [n.GW8]: [n.GW8],
            [n.iY_]: [n.iY_],
            [n.KxZ]: [n.KxZ],
            [n.eut]: [n.eut],
            [n.FMz]: [n.FMz],
            [n.xok]: [n.xok],
            [n.W19]: [n.Oxw, n.jXd, n.W19],
            [n.tPT]: [n.tPT],
            [n.nIA]: [n.IbE, n.nIA],
            [n.JEe]: [n.JEe],
            [n.V9H]: [n.V9H],
            [n.w7d]: [n.aNN, n.w7d],
            [n.TXs]: [n.TXs],
            [n.Bpv]: [n.Bpv],
            [n.VLK]: [n.VLK],
            [n.puh]: [n.puh],
            [n.Fbc]: [n.Fbc],
            [n.I0E]: [n.I0E],
            [n.QA9]: [n.QA9, n.Ya$],
            [n.gKc]: [n.zah, n.gKc],
            [n.IzC]: [n.IzC],
            [n.Ya$]: [n.QA9, n.Ya$],
            [n.gOe]: [n.gOe],
            [n.Reo]: [n.Reo],
            [n.AJK]: [n.aNN, n.AJK],
            [n.$$Y]: [n.nL9, n.$$Y],
            [n.o0L]: [n.o0L],
          },
          Kn = [n.gGw, n.ZBT, n.RW$, n.G1H];
        function Qn(o, t) {
          const i = o.filter((g) => Kn.findIndex((y) => y == g.nTagId) == -1);
          let a = [],
            l = [],
            c = i.length,
            d = 0,
            m = 0;
          for (; d < i.length && c + m > t && m < t; ) {
            const g = i[d].nTagId;
            l.findIndex((y) => y == g) == -1 &&
              (a.push({
                nTagId: g,
                nWeight: i[d].nWeight,
                nPreSelectionWeight: i[d].nPreSelectionWeight,
              }),
              An[g] &&
                An[g].forEach((y) => {
                  l.push(y);
                }),
              m++),
              d++,
              c--;
          }
          for (; d < i.length && m < t; )
            a.push({
              nTagId: i[d].nTagId,
              nWeight: i[d].nWeight,
              nPreSelectionWeight: i[d].nPreSelectionWeight,
            }),
              d++,
              m++;
          return a;
        }
        var Ln = r(13854);
        function qe() {
          return N.iA.country_code.toLowerCase() === "cn";
        }
        function Vn(o, t, i) {
          const { rgRankings: a, nTotalResultCount: l } = zn(o, t),
            c = new Set(a.map((m) => m.appid).slice(0, i));
          return {
            rgResults: o
              .GetRawStats()
              .playtime_stats.games.filter((m) => c.has(m.appid))
              .sort((m, g) => {
                const y = `${t}_rank`,
                  j = m.playtime_ranks[y] ?? 0,
                  P = g.playtime_ranks[y] ?? 0;
                return j - P;
              }),
            nTotalResultCount: l,
          };
        }
        function Nn(o, t, i, a) {
          const { rgRankings: l, nTotalResultCount: c } = zn(o, t, i),
            d = l.map((m) => {
              if (m.relative_playtime_percentagex100) {
                let y = 0;
                return (
                  t == "demo" || t == "playtest"
                    ? (y =
                        a > 0
                          ? (m.relative_playtime_percentagex100 * 100 * 100) / a
                          : 0)
                    : (y = m.relative_playtime_percentagex100),
                  {
                    appid: m.appid,
                    parent_appid: m.parent_appid,
                    nPercentagex100: y,
                  }
                );
              }
              const g = o
                .GetRawStats()
                .playtime_stats.games.findIndex((y) => y.appid == m.appid);
              if (g >= 0) {
                const y = Fn(t, a, o.GetRawStats().playtime_stats.games[g]);
                return {
                  appid: m.appid,
                  parent_appid: m.parent_appid,
                  nPercentagex100: y,
                };
              }
              return { appid: m.appid };
            });
          return { nTotalResultCount: c, rgResults: d };
        }
        function zn(o, t, i) {
          if (t == "demo" || t == "playtest") {
            const c =
              t == "demo" ? o.GetDemoByPlaytime() : o.GetPlaytestByPlaytime();
            return {
              nTotalResultCount: c.length,
              rgRankings: c
                .slice(0, i)
                .map((d) => ({
                  appid: d.appid,
                  parent_appid: d.parent_appid,
                  relative_playtime_percentagex100:
                    d.total_playtime_percentagex100,
                })),
            };
          }
          const a = `${t}_ranking`,
            l = o.GetRawStats().playtime_stats.game_rankings[a]?.rankings;
          return {
            nTotalResultCount: l?.length ?? 0,
            rgRankings: l?.slice(0, i) || [],
          };
        }
        function Fn(o, t, i) {
          const a = i.stats.total_playtime_percentagex100,
            l = `${o}_playtime_percentagex100`,
            c = i.relative_game_stats[l] ?? 0;
          return Ln.OQ((c * a) / t, 0, 1e4);
        }
        function yi(o, t) {
          const i = `${t === "overall" ? "total" : t}_sessions`;
          return o.stats[i] || 0;
        }
        function vn(o, t) {
          let i = () => !0;
          if (!o.playtime_stats?.game_summary) return [];
          switch (t) {
            case "overall":
              i = (a) => !a.demo && !a.playtest;
              break;
            case "vr":
              i = (a) => !a.demo && !a.playtest && a.played_vr;
              break;
            case "deck":
              i = (a) => !a.demo && !a.playtest && a.played_deck;
              break;
            case "controller":
              i = (a) => !a.demo && !a.playtest && a.played_controller;
              break;
            case "linux":
              i = (a) => !a.demo && !a.playtest && a.played_linux;
              break;
            case "mac":
              i = (a) => !a.demo && !a.playtest && a.played_mac;
              break;
            case "windows":
              i = (a) => !a.demo && !a.playtest && a.played_windows;
              break;
            case "demo":
              i = (a) => !!a.demo;
              break;
            case "playtest":
              i = (a) => !!a.playtest;
              break;
          }
          return o.playtime_stats.game_summary.filter(i);
        }
        function an(o, t) {
          if (t != "demo" && t != "playtest") {
            const i = `${t === "overall" ? "total" : t}_sessions`,
              a = `${t === "overall" ? "total" : t}_playtime_percentagex100`;
            return {
              nTotalGames: vn(o, t).length || 0,
              nTotalSessions: o.playtime_stats.total_stats[i] || 0,
              nTotalPercentage: o.playtime_stats.total_stats[a] || 0,
            };
          } else {
            const i = vn(o, t);
            return {
              nTotalGames: i.length,
              nTotalSessions: i
                .map((a) => a.total_sessions)
                .reduce((a, l) => (a ?? 0) + (l ?? 0), 0),
              nTotalPercentage: i
                .map((a) => a.total_playtime_percentagex100)
                .reduce((a, l) => (a ?? 0) + (l ?? 0), 0),
            };
          }
        }
        const b = "percentMonthOfOverall",
          I = "percentOtherGamesRelativeMonth";
        function O(o, t, i, a) {
          const l = new Set(i),
            c = t
              .map((m, g) => {
                const y = new Date((m.rtime_month + 86400) * 1e3),
                  j = {},
                  P = {},
                  H = {},
                  K = {},
                  Q = m.stats.total_playtime_percentagex100;
                let It = 0,
                  $t = 0;
                [...m.game_summary]
                  .sort(
                    (Wt, qt) =>
                      (qt?.total_playtime_percentagex100 ?? 0) -
                      (Wt?.total_playtime_percentagex100 ?? 0),
                  )
                  .filter((Wt) => a.has(Wt.appid))
                  .forEach((Wt, qt) => {
                    const { appid: pe } = Wt,
                      Oe = Wt.total_playtime_percentagex100,
                      Ye = Wt.relative_playtime_percentagex100;
                    qt < 6 && typeof Ye == "number" && Ye > 100 && l.has(pe)
                      ? ((j[pe] = Oe), (P[pe] = Ye), (It += Oe), ($t += Ye))
                      : (H[pe] = Ye);
                    const Xe = a.get(pe).total_playtime_percentagex100 ?? 1;
                    K[pe] = (Oe / Xe) * 1e4;
                  }),
                  (j[b] = Q);
                const Kt = Q - It;
                j[I] = Kt;
                const ge = 1e4 - $t;
                return (
                  (P[I] = ge),
                  {
                    date: y,
                    topPlayedPercentBreakdownPerMonth: j,
                    topPlayedRelativePercentBreakdownForMonth: P,
                    otherPlayedPercentBreakdownForMonth: H,
                    playPercentBreakdownForGame: K,
                  }
                );
              })
              .sort((m, g) => m.date.getTime() - g.date.getTime()),
            d = new Array();
          for (let m = 0; m < 12; ++m) {
            const g = c.findIndex(
              (y) =>
                y.date.getUTCMonth() === m && y.date.getUTCFullYear() === o,
            );
            g === -1
              ? d.push({
                  date: new Date(Date.UTC(o, m, 15)),
                  topPlayedPercentBreakdownPerMonth: {},
                  topPlayedRelativePercentBreakdownForMonth: {},
                  otherPlayedPercentBreakdownForMonth: {},
                  playPercentBreakdownForGame: {},
                })
              : d.push(c[g]);
          }
          return d;
        }
        var ut = r(44983),
          lt = r(20117);
        const Ht = 5,
          xe = 8;
        function Me(o) {
          o.game_summary?.length &&
            (0, Ee.wT)(
              o.total_stats &&
                Array.isArray(o.games) &&
                Array.isArray(o.months) &&
                typeof o.demos_played == "number" &&
                o.game_rankings &&
                typeof o.playtests_played == "number" &&
                (typeof o.substantial == "boolean" ||
                  typeof o.substantial == "number") &&
                o.by_numbers,
              "YIR playtime stats missing expected fields!",
            );
        }
        function Ae(o) {
          return (
            (0, Ee.wT)(
              typeof o.account_id == "number" &&
                typeof o.year == "number" &&
                typeof o.privacy_state == "number" &&
                o.playtime_stats,
              "YIR stats missing expected fields!",
            ),
            o.playtime_stats && Me(o.playtime_stats),
            o
          );
        }
        function yn(o) {
          if (typeof o?.new_releases == "number")
            return (
              (0, Ee.wT)(
                typeof o.recent_releases == "number" &&
                  typeof o.classic_releases == "number" &&
                  typeof o.recent_cutoff_year == "number",
                "YIR global playtime distribution missing expected fields!",
              ),
              o
            );
        }
        function Zn(o) {
          if (typeof o?.games_played == "number")
            return (
              (0, Ee.wT)(
                typeof o.unlocked_achievements == "number" &&
                  typeof o.longest_streak == "number",
                "YIR previous year summary missing expected fields!",
              ),
              o
            );
        }
        class $n {
          m_allStats;
          m_steamid;
          m_mapGameSummary = new Map();
          m_mapGameStats = new Map();
          m_globalPercentiles;
          m_globalGameplayDistribution;
          m_previousYearSummary;
          m_rgTopGamesShown = [];
          m_rgTopGameShownAppIDs = [];
          m_rgMonthChartData = [];
          m_rgTopGameMonthsChartIdsAndRanks = [];
          m_rgAggregateTagData = [];
          m_rgDemoByPlaytime = [];
          m_rgPlaytestByPlaytime = [];
          GetRawStats() {
            return this.m_allStats;
          }
          GetDemoByPlaytime() {
            return this.m_rgDemoByPlaytime;
          }
          BHasDemoByPlaytime() {
            return this.m_rgDemoByPlaytime.length > 0;
          }
          GetPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime;
          }
          BHasPlaytestByPlaytime() {
            return this.m_rgPlaytestByPlaytime.length > 0;
          }
          BHasPlaytimeData() {
            return this.m_allStats.playtime_stats.game_summary.length > 0;
          }
          GetPlayTimeStats() {
            return this.m_allStats.playtime_stats;
          }
          GetSteamID() {
            return this.m_steamid;
          }
          GetYear() {
            return this.m_allStats.year;
          }
          GetGameSummaryForApp(t) {
            return this.m_mapGameSummary.get(t);
          }
          GetAccountID() {
            return new lt.b2(this.m_steamid).GetAccountID();
          }
          GetFilteredGameSummary() {
            return this.m_allStats.playtime_stats.game_summary.filter(
              (t) => !t.demo && !t.playtest,
            );
          }
          GetGameStats(t) {
            return this.m_mapGameStats.get(t);
          }
          GetTopGamesShown() {
            return this.m_rgTopGamesShown;
          }
          GetTopGamesShownAppIDs() {
            return this.m_rgTopGameShownAppIDs;
          }
          GetChartMonthlyData() {
            return this.m_rgMonthChartData;
          }
          GetTopGameIdsAndRanks() {
            return this.m_rgTopGameMonthsChartIdsAndRanks;
          }
          GetGlobalPercentiles() {
            return this.m_globalPercentiles;
          }
          GetGlobalGameplayDistribition() {
            return this.m_globalGameplayDistribution;
          }
          GetPreviousYearSummary() {
            return this.m_previousYearSummary;
          }
          GetChartMonthlyDataForApp(t) {
            const i = this.m_rgMonthChartData.map((l) => ({
                date: l.date,
                percent: l.playPercentBreakdownForGame[t],
              })),
              a = this.m_rgTopGameMonthsChartIdsAndRanks.find(
                (l) => l.appid === t,
              )?.rank;
            return { gameChartData: i, rank: a };
          }
          GetUserAggregateTagData() {
            return this.m_rgAggregateTagData;
          }
          constructor(t, i, a, l) {
            const c = Ae(t);
            if (
              ((this.m_allStats = c),
              (this.m_steamid = lt.b2
                .InitFromAccountID(c.account_id, N.TS.EUNIVERSE)
                .ConvertTo64BitString()),
              (this.m_globalPercentiles = i ?? void 0),
              (this.m_globalGameplayDistribution = yn(a)),
              (this.m_previousYearSummary = Zn(l)),
              this.BHasPlaytimeData() &&
                c.playtime_stats.total_stats.total_sessions > 0)
            ) {
              c.playtime_stats.game_summary.forEach((g) => {
                (0, Ee.wT)(
                  !this.m_mapGameSummary.has(g.appid),
                  `Found at least two record of appid ${g.appid} in stats.playtime_stats.game_summary`,
                ),
                  this.m_mapGameSummary.set(g.appid, g);
              }),
                c.playtime_stats.games.forEach((g) => {
                  (0, Ee.wT)(
                    !this.m_mapGameStats.has(g.appid),
                    `Found at least two record of appid ${g.appid} in stats.playtime_stats.games`,
                  ),
                    this.m_mapGameStats.set(g.appid, g);
                });
              const { rgResults: d } = Vn(this, "overall", xe),
                m = d.map((g) => g.appid);
              (this.m_rgTopGameMonthsChartIdsAndRanks = m.map((g, y) => ({
                appid: g,
                rank: y,
              }))),
                (this.m_rgTopGamesShown = d.slice(0, Ht)),
                (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
                  (g) => g.appid,
                )),
                (this.m_rgMonthChartData = O(
                  this.GetYear(),
                  this.GetPlayTimeStats().months,
                  m,
                  this.m_mapGameSummary,
                ));
            }
            if (
              c.playtime_stats.tag_stats &&
              c.playtime_stats.tag_stats.stats.length > 0
            ) {
              let m = c.playtime_stats.tag_stats.stats.map((g) => ({
                nTagId: g.tag_id,
                nWeight: parseFloat(g.tag_weight.toString()),
                nPreSelectionWeight: parseFloat(
                  g.tag_weight_pre_selection
                    ? g.tag_weight_pre_selection.toString()
                    : "0.0",
                ),
              }));
              this.m_rgAggregateTagData = Qn(m, 6);
            }
            c &&
              ((this.m_rgDemoByPlaytime = c.playtime_stats.game_summary
                .filter((d) => !!d.demo)
                .sort(
                  (d, m) =>
                    m.total_playtime_percentagex100 -
                    d.total_playtime_percentagex100,
                )),
              (this.m_rgPlaytestByPlaytime = c.playtime_stats.game_summary
                .filter((d) => !!d.playtest)
                .sort(
                  (d, m) =>
                    m.total_playtime_percentagex100 -
                    d.total_playtime_percentagex100,
                )));
          }
          GetGameAgeCounts(t) {
            let i = this.m_allStats.playtime_stats?.game_summary || [];
            if (t.length == 0) return [i.length];
            let a = Date.UTC(this.GetYear(), 11, 15) / 1e3,
              l = Array(t.length + 1).fill(0);
            for (let c of i) {
              let d = c.rtime_release_date || a;
              if (d >= a) {
                l[0] += c.total_playtime_percentagex100;
                continue;
              }
              let m = (a - d) / ut.Kp.PerYear,
                g = t.findIndex((y) => m < y);
              g >= 0
                ? (l[g] += c.total_playtime_percentagex100)
                : (l[l.length - 1] += c.total_playtime_percentagex100);
            }
            return l;
          }
        }
        const pi = null,
          wn = "0px 0px 100% 0px";
        function En(o, t) {
          const {
            stats: i,
            percentiles: a,
            distribution: l,
            previous_year_summary: c,
          } = t;
          return {
            eResult: o,
            privacy_state: i?.privacy_state,
            stats: i,
            percentiles: a,
            distribution: l,
            previous_year_summary: c,
          };
        }
        function pn(o, t) {
          return ["YIR", "Get", o, t];
        }
        function Jn(o, t, i, a = {}) {
          return {
            queryKey: pn(t, i),
            queryFn: async () => {
              const l = await He.GetUserYearInReview(o, {
                steamid: t,
                year: i,
                fetch_previous_year_summary: !0,
                access_source: a.eAccessSource,
                force_regenerate: a.bForceRegenerate,
              });
              return En(l.GetEResult(), l.Body().toObject());
            },
            staleTime: 1 / 0,
          };
        }
        function Pn(o, t) {
          return (0, Re.I)(Jn((0, Fe.KV)(), o, t));
        }
        function pr(o, t) {
          const { data: i, isLoading: a } = Pn(o, t),
            {
              eResult: l,
              stats: c,
              percentiles: d,
              distribution: m,
              previous_year_summary: g,
            } = i ?? {};
          return {
            userYearInReview: A.useMemo(() => {
              if (!(l != L.R || !c)) return new $n(c, d, m, g);
            }, [l, c, d, m, g]),
            isLoading: a,
          };
        }
        function Bi(o, t) {
          return Pn(o, t).data?.privacy_state;
        }
        function Br(o, t) {
          const i = (0, Fe.KV)(),
            a = (0, cn.jE)();
          return (0, Hn.n)({
            mutationFn: async (l) => {
              const c = await He.SetUserSharingPermissions(i, {
                steamid: o,
                year: t,
                privacy_state: l,
              });
              return {
                eResult: c.GetEResult(),
                privacy_state: c.Body().privacy_state(),
              };
            },
            onSuccess: ({ eResult: l, privacy_state: c }) => {
              l == L.R &&
                c !== void 0 &&
                a.setQueryData(
                  pn(o, t),
                  (d) => d && { ...d, privacy_state: c },
                );
            },
          });
        }
        function xr(o, t, i) {
          return {
            steamid: t,
            nYear: i,
            achievements: new (ke())((a) => jr(o, t, i, a), { cache: !1 }),
            screenshots: new (ke())((a) => Ar(o, t, i, a), { cache: !1 }),
          };
        }
        const xi = A.createContext(void 0);
        function Xn() {
          const o = A.useContext(xi);
          return (
            (0, Ee.wT)(
              o,
              "Cannot use YIR data loaders outside of Steam Replay page!",
            ),
            o
          );
        }
        async function jr(o, t, i, a) {
          try {
            const l = await He.GetUserYearAchievements(o, {
              steamid: t,
              year: i,
              appids: [...a],
              total_only: !1,
            });
            if (l.GetEResult() == L.R) {
              const { game_achievements: c = [] } = l.Body().toObject(),
                d = c.reduce((m, g) => ((m[g.appid] = g), m), {});
              return a.map((m) => {
                const g = d[m];
                return {
                  ...g,
                  appid: m,
                  achievements: (g?.achievements ?? []).map((y) => ({
                    ...y,
                    achievement_name_internal: (
                      y.achievement_name_internal ?? ""
                    ).toLowerCase(),
                  })),
                };
              });
            }
            console.error("GetUserYearAchievements failed: " + l.GetEResult());
          } catch (l) {
            console.error("GetUserYearAchievements failed", l);
          }
          return a.map((l) => ({ appid: l, achievements: [] }));
        }
        function ji(o, t) {
          return {
            queryKey: ["YIR", "achievements", "apps", o.steamid, o.nYear, t],
            queryFn: () => o.achievements.load(t),
            staleTime: 1 / 0,
          };
        }
        function br(o) {
          const t = Xn();
          (0, Gn.E)({
            queries: o.GetTopGamesShownAppIDs().map((i) => ji(t, i)),
          });
        }
        function bi(o) {
          const { data: t } = (0, Re.I)({ ...ji(Xn(), o), enabled: !!o });
          return t;
        }
        function Mr(o, t, i) {
          return {
            queryKey: ["YIR", "achievements", "display", t, i],
            queryFn: async () => {
              try {
                const a = await z.xtC.GetGameAchievements(o, {
                  appid: t,
                  language: i,
                });
                if (a.GetEResult() == L.R)
                  return (a.Body().toObject().achievements ?? []).map((l) => ({
                    ...l,
                    internal_name: (l.internal_name ?? "").toLowerCase(),
                  }));
                console.error("GetGameAchievements failed: " + a.GetEResult());
              } catch (a) {
                console.error("GetGameAchievements failed", a);
              }
              return [];
            },
            staleTime: 1 / 0,
          };
        }
        function kn(o, t = !0) {
          const i = (0, Fe.KV)(),
            { data: a } = (0, Re.I)({
              ...Mr(i, o, N.TS.LANGUAGE || "english"),
              enabled: t && !!o,
            });
          return a;
        }
        function Ir(o) {
          const t = kn(o);
          return A.useMemo(() => {
            const i = new Map();
            for (const a of t ?? [])
              a.internal_name && i.set(a.internal_name, a);
            return i;
          }, [t]);
        }
        function Tr(o) {
          return kn(o)?.length ?? 0;
        }
        async function Ar(o, t, i, a) {
          const l = await He.GetUserYearScreenshots(o, {
            steamid: t,
            year: i,
            appids: [...a],
          });
          if (!l.BSuccess())
            throw `Load Screenshots failed: ${l.GetErrorMessage()}`;
          const { apps: c = [] } = l.Body().toObject(),
            d = c.reduce((m, g) => ((m[g.appid] = g), m), {});
          return a.map((m) => d[m]?.screenshots);
        }
        function Lr(o, t) {
          return {
            queryKey: ["YIR", "Screenshots", o.steamid, o.nYear, t],
            queryFn: async () => (await o.screenshots.load(t)) ?? null,
            staleTime: 1 / 0,
          };
        }
        function Nr(o) {
          const { data: t } = (0, Re.I)({ ...Lr(Xn(), o), enabled: !!o });
          return t ?? void 0;
        }
        function zr(o, t, i, a) {
          return {
            queryKey: ["YIR", "Friends", t, i, a],
            queryFn: async () => {
              const l = await He.GetFriendsSharedYearInReview(o, {
                steamid: t,
                year: i,
                return_private: a,
              });
              if (l.GetEResult() != L.R)
                throw "error friend sharing information " + l.GetEResult();
              const { friend_shares: c = [] } = l.Body().toObject();
              return c
                .filter((d) => !!d.steamid)
                .map(
                  ({
                    steamid: d,
                    privacy_state: m,
                    rt_privacy_updated: g,
                    privacy_override: y,
                  }) => ({
                    steamid: d,
                    privacy_state: m ?? 0,
                    rt_privacy_updated: g ?? 0,
                    privacy_override: !!y,
                  }),
                );
            },
            staleTime: 1 / 0,
          };
        }
        function wr(o, t) {
          return (0, Re.I)(zr((0, Fe.KV)(), o, t, N.iA.is_support));
        }
        function Er(o, t) {
          return {
            queryKey: ["YIR", "FamilyGroup", t],
            queryFn: async () => {
              const i = await Y.Ex.GetFamilyGroupForUser(o, {
                steamid: t,
                include_family_group_response: !0,
              });
              if (i.GetEResult() != L.R)
                throw "error loading family group " + i.GetEResult();
              return i.Body().toObject();
            },
            staleTime: 1 / 0,
          };
        }
        function Pr(o) {
          return (0, Re.I)(Er((0, Fe.KV)(), o));
        }
        function Dr(o, t, i, a) {
          return {
            queryKey: ["YIR", "ShareImages", t, i, a],
            queryFn: async () => {
              const l = await He.GetUserYearInReviewShareImage(o, {
                steamid: t,
                year: i,
                language: a,
              });
              if (l.GetEResult() != L.R)
                throw `Load social images failed: ${l.GetErrorMessage()}`;
              return l.Body().toObject().images ?? [];
            },
            staleTime: 1 / 0,
          };
        }
        function Or(o, t, i) {
          return (0, Re.I)(Dr((0, Fe.KV)(), o, t, i));
        }
        const Mi = A.createContext(void 0);
        function Ii() {
          const o = A.useContext(Mi);
          return (
            (0, Ee.wT)(
              o,
              "Cannot use YIR page data outside of Steam Replay page!",
            ),
            o
          );
        }
        var dn = r(40358),
          Sr = r(5827);
        function Ti(o) {
          return o?.success === L.R || o?.success === L.sW;
        }
        function _e(o) {
          const t = o ? { appid: o } : void 0,
            { data: i, isLoading: a } = (0, dn.J$)(t),
            { data: l, isLoading: c } = (0, dn.gy)(t);
          return {
            item: A.useMemo(
              () => (Ti(i) ? { info: i, assets: l ?? null } : void 0),
              [i, l],
            ),
            bLoading: a || c,
          };
        }
        function mn(o, t = !1) {
          return (0, Re.I)(Wr((0, cn.jE)(), (0, Sr.eG)(), o, t));
        }
        function Wr(o, t, i, a = !1) {
          return {
            queryKey: ["YIR", "storeitems", i, a],
            queryFn: async () => {
              const l = await Promise.all(
                  i.map(async (d) => {
                    const [m, g] = await Promise.allSettled([
                      o.fetchQuery((0, dn.us)(t, { appid: d })),
                      o.fetchQuery((0, dn.Th)(t, { appid: d })),
                      a && o.fetchQuery((0, dn.OE)(t, { appid: d })),
                    ]);
                    return m.status === "rejected" || !Ti(m.value)
                      ? null
                      : {
                          appid: d,
                          info: m.value,
                          assets: g.status === "fulfilled" ? g.value : null,
                        };
                  }),
                ),
                c = new Map();
              for (const d of l) d && c.set(d.appid, d);
              if (c.size === 0 && i.length > 0)
                throw new Error("Error loading store items!");
              return c;
            },
            staleTime: 0,
          };
        }
        var Rr = r(46943),
          Ai = r(54407),
          qn = r(16412),
          Le = r(25792),
          Cr = r(95695),
          Te = r(36118),
          Bn = r(85599),
          Ur = r(64238),
          B = r.n(Ur),
          x = r(22673),
          xn = r(59521),
          Dn = r(37901);
        const Qt = {};
        (Qt.arabic = () => r.e(49101).then(r.t.bind(r, 49101, 19))),
          (Qt.brazilian = () => r.e(78513).then(r.t.bind(r, 78513, 19))),
          (Qt.bulgarian = () => r.e(52986).then(r.t.bind(r, 52986, 19))),
          (Qt.czech = () => r.e(32820).then(r.t.bind(r, 32820, 19))),
          (Qt.danish = () => r.e(1864).then(r.t.bind(r, 1864, 19))),
          (Qt.dutch = () => r.e(58325).then(r.t.bind(r, 58325, 19))),
          (Qt.english = () => r.e(91651).then(r.t.bind(r, 91651, 19))),
          (Qt.finnish = () => r.e(24972).then(r.t.bind(r, 24972, 19))),
          (Qt.french = () => r.e(19065).then(r.t.bind(r, 19065, 19))),
          (Qt.german = () => r.e(54003).then(r.t.bind(r, 54003, 19))),
          (Qt.greek = () => r.e(93443).then(r.t.bind(r, 93443, 19))),
          (Qt.hungarian = () => r.e(79366).then(r.t.bind(r, 79366, 19))),
          (Qt.indonesian = () => r.e(35057).then(r.t.bind(r, 35057, 19))),
          (Qt.italian = () => r.e(82155).then(r.t.bind(r, 82155, 19))),
          (Qt.japanese = () => r.e(29318).then(r.t.bind(r, 29318, 19))),
          (Qt.koreana = () => r.e(50400).then(r.t.bind(r, 50400, 19))),
          (Qt.latam = () => r.e(15024).then(r.t.bind(r, 15024, 19))),
          (Qt.malay = () => r.e(50191).then(r.t.bind(r, 50191, 19))),
          (Qt.norwegian = () => r.e(323).then(r.t.bind(r, 323, 19))),
          (Qt.polish = () => r.e(17892).then(r.t.bind(r, 17892, 19))),
          (Qt.portuguese = () => r.e(93532).then(r.t.bind(r, 93532, 19))),
          (Qt.romanian = () => r.e(28702).then(r.t.bind(r, 28702, 19))),
          (Qt.russian = () => r.e(26586).then(r.t.bind(r, 26586, 19))),
          (Qt.sc_schinese = () => r.e(46848).then(r.t.bind(r, 46848, 19))),
          (Qt.schinese = () => r.e(81849).then(r.t.bind(r, 81849, 19))),
          (Qt.spanish = () => r.e(14571).then(r.t.bind(r, 14571, 19))),
          (Qt.swedish = () => r.e(79706).then(r.t.bind(r, 79706, 19))),
          (Qt.tchinese = () => r.e(2634).then(r.t.bind(r, 2634, 19))),
          (Qt.thai = () => r.e(22531).then(r.t.bind(r, 22531, 19))),
          (Qt.turkish = () => r.e(23043).then(r.t.bind(r, 23043, 19))),
          (Qt.ukrainian = () => r.e(99337).then(r.t.bind(r, 99337, 19))),
          (Qt.vietnamese = () => r.e(40182).then(r.t.bind(r, 40182, 19)));
        async function Yr(o) {
          if (Qt[o]) return Qt[o]();
        }
        const Li = (0, Dn.l)(Yr),
          Vt = {};
        (Vt.arabic = () => r.e(72817).then(r.t.bind(r, 72817, 19))),
          (Vt.brazilian = () => r.e(66781).then(r.t.bind(r, 89162, 19))),
          (Vt.bulgarian = () => r.e(84230).then(r.t.bind(r, 84230, 19))),
          (Vt.czech = () => r.e(52920).then(r.t.bind(r, 52920, 19))),
          (Vt.danish = () => r.e(48524).then(r.t.bind(r, 48524, 19))),
          (Vt.dutch = () => r.e(48361).then(r.t.bind(r, 48361, 19))),
          (Vt.english = () => r.e(17615).then(r.t.bind(r, 17615, 19))),
          (Vt.finnish = () => r.e(56528).then(r.t.bind(r, 56528, 19))),
          (Vt.french = () => r.e(92997).then(r.t.bind(r, 92997, 19))),
          (Vt.german = () => r.e(4503).then(r.t.bind(r, 4503, 19))),
          (Vt.greek = () => r.e(37767).then(r.t.bind(r, 37767, 19))),
          (Vt.hungarian = () => r.e(14034).then(r.t.bind(r, 14034, 19))),
          (Vt.indonesian = () => r.e(19013).then(r.t.bind(r, 19013, 19))),
          (Vt.italian = () => r.e(32031).then(r.t.bind(r, 32031, 19))),
          (Vt.japanese = () => r.e(9490).then(r.t.bind(r, 9490, 19))),
          (Vt.koreana = () => r.e(34372).then(r.t.bind(r, 34372, 19))),
          (Vt.latam = () => r.e(76020).then(r.t.bind(r, 76020, 19))),
          (Vt.malay = () => r.e(79275).then(r.t.bind(r, 79275, 19))),
          (Vt.norwegian = () => r.e(42591).then(r.t.bind(r, 42591, 19))),
          (Vt.polish = () => r.e(17832).then(r.t.bind(r, 17832, 19))),
          (Vt.portuguese = () => r.e(53384).then(r.t.bind(r, 53384, 19))),
          (Vt.romanian = () => r.e(99586).then(r.t.bind(r, 99586, 19))),
          (Vt.russian = () => r.e(37766).then(r.t.bind(r, 37766, 19))),
          (Vt.sc_schinese = () => r.e(73900).then(r.t.bind(r, 73900, 19))),
          (Vt.schinese = () => r.e(30581).then(r.t.bind(r, 30581, 19))),
          (Vt.spanish = () => r.e(78079).then(r.t.bind(r, 78079, 19))),
          (Vt.swedish = () => r.e(94270).then(r.t.bind(r, 94270, 19))),
          (Vt.tchinese = () => r.e(14606).then(r.t.bind(r, 14606, 19))),
          (Vt.thai = () => r.e(735).then(r.t.bind(r, 735, 19))),
          (Vt.turkish = () => r.e(18975).then(r.t.bind(r, 18975, 19))),
          (Vt.ukrainian = () => r.e(47197).then(r.t.bind(r, 47197, 19))),
          (Vt.vietnamese = () => r.e(17042).then(r.t.bind(r, 17042, 19)));
        async function Hr(o) {
          if (Vt[o]) return Vt[o]();
        }
        const Ni = (0, Dn.l)(Hr),
          Ft = {};
        (Ft.arabic = () => r.e(3569).then(r.t.bind(r, 3569, 19))),
          (Ft.brazilian = () => r.e(31997).then(r.t.bind(r, 31997, 19))),
          (Ft.bulgarian = () => r.e(43238).then(r.t.bind(r, 43238, 19))),
          (Ft.czech = () => r.e(8632).then(r.t.bind(r, 8632, 19))),
          (Ft.danish = () => r.e(57836).then(r.t.bind(r, 57836, 19))),
          (Ft.dutch = () => r.e(76073).then(r.t.bind(r, 76073, 19))),
          (Ft.english = () => r.e(18351).then(r.t.bind(r, 18351, 19))),
          (Ft.finnish = () => r.e(64560).then(r.t.bind(r, 64560, 19))),
          (Ft.french = () => r.e(64325).then(r.t.bind(r, 64325, 19))),
          (Ft.german = () => r.e(70199).then(r.t.bind(r, 70199, 19))),
          (Ft.greek = () => r.e(30631).then(r.t.bind(r, 30631, 19))),
          (Ft.hungarian = () => r.e(8370).then(r.t.bind(r, 8370, 19))),
          (Ft.indonesian = () => r.e(45893).then(r.t.bind(r, 45893, 19))),
          (Ft.italian = () => r.e(88607).then(r.t.bind(r, 88607, 19))),
          (Ft.japanese = () => r.e(95378).then(r.t.bind(r, 95378, 19))),
          (Ft.koreana = () => r.e(45636).then(r.t.bind(r, 45636, 19))),
          (Ft.latam = () => r.e(79380).then(r.t.bind(r, 79380, 19))),
          (Ft.malay = () => r.e(73579).then(r.t.bind(r, 73579, 19))),
          (Ft.norwegian = () => r.e(41343).then(r.t.bind(r, 41343, 19))),
          (Ft.polish = () => r.e(97160).then(r.t.bind(r, 97160, 19))),
          (Ft.portuguese = () => r.e(29064).then(r.t.bind(r, 29064, 19))),
          (Ft.romanian = () => r.e(68290).then(r.t.bind(r, 68290, 19))),
          (Ft.russian = () => r.e(80454).then(r.t.bind(r, 80454, 19))),
          (Ft.sc_schinese = () => r.e(96588).then(r.t.bind(r, 96588, 19))),
          (Ft.schinese = () => r.e(93813).then(r.t.bind(r, 93813, 19))),
          (Ft.spanish = () => r.e(7135).then(r.t.bind(r, 7135, 19))),
          (Ft.swedish = () => r.e(55646).then(r.t.bind(r, 55646, 19))),
          (Ft.tchinese = () => r.e(21230).then(r.t.bind(r, 21230, 19))),
          (Ft.thai = () => r.e(78015).then(r.t.bind(r, 78015, 19))),
          (Ft.turkish = () => r.e(1951).then(r.t.bind(r, 1951, 19))),
          (Ft.ukrainian = () => r.e(70781).then(r.t.bind(r, 70781, 19))),
          (Ft.vietnamese = () => r.e(33394).then(r.t.bind(r, 33394, 19)));
        async function Gr(o) {
          if (Ft[o]) return Ft[o]();
        }
        const zi = (0, Dn.l)(Gr),
          Zt = {};
        (Zt.arabic = () => r.e(87621).then(r.t.bind(r, 87621, 19))),
          (Zt.brazilian = () => r.e(20537).then(r.t.bind(r, 20537, 19))),
          (Zt.bulgarian = () => r.e(52482).then(r.t.bind(r, 52482, 19))),
          (Zt.czech = () => r.e(81868).then(r.t.bind(r, 81868, 19))),
          (Zt.danish = () => r.e(16224).then(r.t.bind(r, 16224, 19))),
          (Zt.dutch = () => r.e(81629).then(r.t.bind(r, 81629, 19))),
          (Zt.english = () => r.e(63675).then(r.t.bind(r, 63675, 19))),
          (Zt.finnish = () => r.e(4628).then(r.t.bind(r, 4628, 19))),
          (Zt.french = () => r.e(85121).then(r.t.bind(r, 85121, 19))),
          (Zt.german = () => r.e(3931).then(r.t.bind(r, 3931, 19))),
          (Zt.greek = () => r.e(31531).then(r.t.bind(r, 31531, 19))),
          (Zt.hungarian = () => r.e(78302).then(r.t.bind(r, 78302, 19))),
          (Zt.indonesian = () => r.e(28921).then(r.t.bind(r, 28921, 19))),
          (Zt.italian = () => r.e(41283).then(r.t.bind(r, 41283, 19))),
          (Zt.japanese = () => r.e(25550).then(r.t.bind(r, 25550, 19))),
          (Zt.koreana = () => r.e(29352).then(r.t.bind(r, 29352, 19))),
          (Zt.latam = () => r.e(75624).then(r.t.bind(r, 75624, 19))),
          (Zt.malay = () => r.e(81271).then(r.t.bind(r, 81271, 19))),
          (Zt.norwegian = () => r.e(94491).then(r.t.bind(r, 94491, 19))),
          (Zt.polish = () => r.e(28268).then(r.t.bind(r, 28268, 19))),
          (Zt.portuguese = () => r.e(72660).then(r.t.bind(r, 72660, 19))),
          (Zt.romanian = () => r.e(38134).then(r.t.bind(r, 38134, 19))),
          (Zt.russian = () => r.e(32658).then(r.t.bind(r, 32658, 19))),
          (Zt.sc_schinese = () => r.e(92280).then(r.t.bind(r, 92280, 19))),
          (Zt.schinese = () => r.e(1617).then(r.t.bind(r, 1617, 19))),
          (Zt.spanish = () => r.e(77555).then(r.t.bind(r, 77555, 19))),
          (Zt.swedish = () => r.e(42930).then(r.t.bind(r, 42930, 19))),
          (Zt.tchinese = () => r.e(60610).then(r.t.bind(r, 60610, 19))),
          (Zt.thai = () => r.e(4939).then(r.t.bind(r, 4939, 19))),
          (Zt.turkish = () => r.e(21131).then(r.t.bind(r, 21131, 19))),
          (Zt.ukrainian = () => r.e(28049).then(r.t.bind(r, 28049, 19))),
          (Zt.vietnamese = () => r.e(38030).then(r.t.bind(r, 38030, 19)));
        async function Kr(o) {
          if (Zt[o]) return Zt[o]();
        }
        const wi = (0, Dn.l)(Kr),
          Qr = new Map([
            [2022, Li],
            [2023, Ni],
            [2024, zi],
            [2025, wi],
          ]);
        function Vr(o) {
          return Qr.get(o);
        }
        function Fr() {
          const o = (0, xn.K)(x.c),
            t = (0, xn.K)(Li),
            i = (0, xn.K)(Ni),
            a = (0, xn.K)(zi),
            l = (0, xn.K)(wi);
          return o && t && i && a && l;
        }
        var tn = r(39905),
          Se = r(3166),
          Ze = r(48156);
        const Ei =
          r.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
        var Ge = r(21721),
          je = r(24642),
          ct = r(10738),
          ue = r.n(ct),
          Pi = r(20681),
          Zr = r(54357),
          On = r(16114);
        const en = A.createContext({
          bIsUser: !1,
          persona_name: "",
          avatar_url: "",
          themeStyle: {},
        });
        function _n() {
          return (0, A.useContext)(en).bIsUser;
        }
        function ne() {
          return (0, A.useContext)(en).themeStyle;
        }
        function ti(o) {
          const t = N.iA.logged_in,
            i = o?.content_descriptorids ?? [],
            a = _n(),
            l = (0, cn.jE)(),
            { data: c } = (0, Pi.mx)(),
            d = c ?? (0, Pi.rN)(l),
            m =
              !!o &&
              (i.some((g) => d.setExcludedContentDescriptors.has(g)) ||
                (!!o.appid && d.mapIgnoredApps.has(o.appid)));
          return t ? !a && m : i.length > 0;
        }
        function $r() {
          return (0, A.useContext)(en).persona_name;
        }
        function be() {
          const { persona_name: o, bIsUser: t } = (0, A.useContext)(en);
          return A.useCallback(
            (i, ...a) => (0, x.u)(x.c, i, t, o, ...a) ?? i,
            [t, o],
          );
        }
        function Jr() {
          const { persona_name: o, bIsUser: t } = (0, A.useContext)(en);
          return A.useCallback(
            (i, a, ...l) => {
              const c = Vr(i);
              return c && (0, x.u)(c, a, t, o, ...l);
            },
            [t, o],
          );
        }
        function De(o) {
          return o < 100
            ? x.c.Localize("#YIR_Percent_Low", "1")
            : x.c.Localize("#YIR_Percent", Math.round(o / 100).toFixed(0));
        }
        function Di() {
          return !0;
        }
        function Oi() {
          const o = Di(),
            t = (0, Zr.B)();
          return A.useCallback(
            (i) =>
              (0, On.TW)(i, {
                weekday: "short",
                year: o ? void 0 : "numeric",
                timeZone: t,
              }),
            [o, t],
          );
        }
        const ei = { index: void 0, appids: [] },
          Si = A.createContext(ei),
          Sn = A.createContext(() => {});
        function Xr(o) {
          const [t, i] = A.useState(ei);
          return (0, e.jsx)(Sn.Provider, {
            value: i,
            children: (0, e.jsx)(Si.Provider, {
              value: t,
              children: o.children,
            }),
          });
        }
        function Wi(o) {
          return typeof o.index == "number" && o.appids.length > o.index
            ? o.appids[o.index]
            : null;
        }
        function kr() {
          const o = A.useContext(Si);
          return { unAppID: Wi(o), length: o.appids.length, index: o.index };
        }
        function Ri() {
          const o = A.useContext(Sn);
          return A.useCallback((t, i) => o({ index: t, appids: i }), [o]);
        }
        function Ci(o, t) {
          const i = Ri();
          return A.useCallback(() => i(o, t), [i, o, t]);
        }
        function Ui(o) {
          const t = A.useContext(Sn);
          return A.useCallback(() => {
            t((i) => (o >= 0 && o < i.appids.length ? { ...i, index: o } : i));
          }, [t, o]);
        }
        function qr() {
          const o = A.useContext(Sn);
          return A.useCallback(
            (t) => {
              o((i) => (Wi(i) == t ? ei : i));
            },
            [o],
          );
        }
        var We = r(7253),
          f = r.n(We),
          _r = r(87762),
          Dt = r.n(_r),
          jn = r(81944);
        function Ne(o) {
          const { className: t, children: i, strClassOnFirstVisible: a } = o,
            [l, c] = (0, A.useState)(!1);
          return (0, e.jsx)(jn.J, {
            trigger: "once",
            onVisibilityChange: c,
            className: B()(t, l ? a || "NowVisible" : void 0),
            children: i,
          });
        }
        var Yi = r(41032),
          Pe = r(19298);
        function Wn(o) {
          const {
              category: t,
              userYearInReview: i,
              strClassName: a,
              bgImageURL: l,
              title: c,
              subTitle: d,
              disclaimer: m,
              subTitleTokenIfMax: g,
            } = o,
            y = i.GetRawStats(),
            j = 5,
            {
              nTotalGames: P,
              nTotalSessions: H,
              nTotalPercentage: K,
            } = (0, A.useMemo)(() => an(y, t), [y, t]),
            { rgResults: Q, nTotalResultCount: It } = (0, A.useMemo)(
              () => Nn(i, t, j, K),
              [i, t, K, j],
            ),
            $t = (0, A.useMemo)(
              () => Q.map((Oe) => Oe.parent_appid || Oe.appid),
              [Q],
            ),
            [Gt, Kt] = (0, A.useState)(
              Q.length > 0 ? Q[0].parent_appid || Q[0].appid : 0,
            ),
            { isLoading: ge, data: Wt } = mn($t, t == "vr"),
            qt = ts(Q, t, ge, Wt),
            pe =
              t === "overall" ||
              t === "controller" ||
              t == "demo" ||
              t == "playtest";
          return (0, e.jsxs)("div", {
            className: B()(a, t, Dt().PlatformContentsCtn),
            children: [
              (0, e.jsx)("div", { className: Dt().SectionTitle, children: c }),
              !!l &&
                (0, e.jsx)("img", {
                  alt: "",
                  src: l,
                  className: Dt().BackgroundImage,
                }),
              t === "vr" && Gt > 0 && (0, e.jsx)(es, { appid: Gt }),
              (0, e.jsxs)("div", {
                className: B()(f().YearInReviewContent, Dt().StatsRow),
                children: [
                  (0, e.jsxs)("div", {
                    className: Dt().StatBlock,
                    children: [
                      (0, e.jsx)("div", {
                        className: Dt().BigNum,
                        children: (0, je.D)(P),
                      }),
                      (0, e.jsx)("div", {
                        className: Dt().StatDescription,
                        children: x.c.LocalizePlural("#YIR_NewLine_Games", P),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Dt().StatBlock,
                    children: [
                      (0, e.jsx)("div", {
                        className: Dt().BigNum,
                        children: (0, je.D)(H),
                      }),
                      (0, e.jsx)("div", {
                        className: Dt().StatDescription,
                        children: x.c.LocalizePlural("#YIR_NewLine_Session", H),
                      }),
                    ],
                  }),
                  !pe &&
                    (0, e.jsx)(Ki, { percentVal: K, subToken: "#YIR_NewLine" }),
                ],
              }),
              !!d &&
                (0, e.jsx)("div", {
                  className: Dt().SectionSubTitle,
                  children: d,
                }),
              !d &&
                !!g &&
                It > j &&
                qt > 0 &&
                (0, e.jsx)("div", {
                  className: Dt().SectionSubTitle,
                  children: x.c.Localize(g, qt),
                }),
              !!m &&
                (0, e.jsx)("div", { className: Dt().Disclaimer, children: m }),
              (0, e.jsx)(Ne, {
                className: ue().SteamDeckGameCapRow,
                children: (0, e.jsx)(Hi, {
                  rgGamePercentages: Q,
                  category: t,
                  fnOnHoverApp: Kt,
                }),
              }),
            ],
          });
        }
        function ts(o, t, i, a) {
          return (0, A.useMemo)(
            () =>
              i || !a
                ? 0
                : o.reduce((l, c) => {
                    const d = c.parent_appid || c.appid,
                      m = a.get(d)?.info.visible,
                      y = !(t == "demo" || t == "playtest") || c.parent_appid;
                    return l + (m && y ? 1 : 0);
                  }, 0),
            [o, i, a, t],
          );
        }
        function es(o) {
          const { appid: t } = o,
            { data: i } = (0, dn.j4)({ appid: t }),
            a = (0, Yi.$9)();
          if (!i) return null;
          const l = i.all_ages_screenshots ?? [],
            d = (
              a == "blocked"
                ? l
                : [...l, ...(i.mature_content_screenshots ?? [])].sort(
                    (g, y) => g.ordinal - y.ordinal,
                  )
            )[1];
          if (!d) return null;
          const m = a == "masked" && !l.includes(d);
          return (0, e.jsx)("img", {
            alt: "",
            src: (0, Ge.bu)(d),
            className: B()({ [Dt().GameImage]: !0, [Dt().BlurImage]: m }),
          });
        }
        function Hi(o) {
          const { rgGamePercentages: t, category: i, fnOnHoverApp: a } = o,
            l = t.map((d) => d.appid);
          let c;
          switch (i) {
            case "demo":
              c = Ze.uE.ue;
              break;
            case "playtest":
              c = Ze.uE.Vi;
              break;
          }
          return (0, e.jsx)(Pe.Z, {
            "flow-children": "grid",
            className: B()(f().YearInReviewContent, Dt().CapRow, ue().CapRow),
            children: t.map((d, m) =>
              (0, e.jsx)(
                ni,
                {
                  appid: d.appid,
                  strInfo:
                    d.nPercentagex100 !== void 0
                      ? De(d.nPercentagex100)
                      : void 0,
                  nParentAppID: d.parent_appid,
                  eChildType: c,
                  index: m,
                  loading: "eager",
                  rgAppIDs: l,
                  fnOnMouseEvent: () => a && a(d.appid),
                },
                i + "_" + d.appid,
              ),
            ),
          });
        }
        function ni(o) {
          const {
              appid: t,
              strInfo: i,
              rgAppIDs: a,
              index: l,
              loading: c,
              fnOnMouseEvent: d,
              nParentAppID: m,
              eChildType: g,
            } = o,
            { item: y, bLoading: j } = _e(g == null ? t : m),
            P = Ci(l, a);
          if (j) return null;
          if (!y || !y.info.visible)
            return m && (g == Ze.uE.ue || g == Ze.uE.Vi)
              ? (0, e.jsx)(ni, { ...o, nParentAppID: m, eChildType: Ze.uE.HT })
              : null;
          const H = (0, Ge.CB)(y.assets, "library_capsule");
          return (0, e.jsxs)("a", {
            className: ue().CapsuleCtn,
            onClick: P,
            onMouseEnter: d,
            children: [
              H
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsxs)("div", {
                        className: ue().SpecialFlags,
                        children: [
                          m &&
                            g == Ze.uE.ue &&
                            (0, e.jsx)("div", {
                              className: ue().DemoPlayDetails,
                              children: x.c.Localize("#YIR_Played_Demo"),
                            }),
                          m &&
                            g == Ze.uE.Vi &&
                            (0, e.jsx)("div", {
                              className: ue().PlaytestPlayDetails,
                              children: x.c.Localize("#YIR_Played_PlayTest"),
                            }),
                        ],
                      }),
                      (0, e.jsx)("img", {
                        loading: c,
                        src: H,
                        alt: y.info.name,
                      }),
                    ],
                  })
                : (0, e.jsx)(Gi, { item: y.info }),
              !!i &&
                (0, e.jsx)("div", { className: ue().TimePlayed, children: i }),
            ],
          });
        }
        function Gi(o) {
          const { item: t } = o;
          return (0, e.jsxs)("div", {
            className: ue().UnavailableGame,
            children: [
              (0, e.jsx)("img", { src: Ei, alt: t.name || "" + t.appid }),
              (0, e.jsx)("div", {
                className: ue().GameTitle,
                children: t.name,
              }),
            ],
          });
        }
        function Ki(o) {
          const { percentVal: t, subToken: i } = o,
            a = De(t),
            l = `${i}_Percent`;
          return (0, e.jsxs)("div", {
            className: Dt().StatBlock,
            children: [
              (0, e.jsx)("div", { className: Dt().BigNum, children: a }),
              (0, e.jsx)("div", {
                className: Dt().StatDescription,
                children: x.c.Localize(l),
              }),
            ],
          });
        }
        var Qi = r(47875),
          ns = r(6698),
          $e = r(13824),
          ii = r(72865),
          nn = r(71421),
          Vi = r(20169);
        function is(o) {
          const { userYearInReview: t, nYear: i } = o,
            a = ne(),
            l = (0, A.useMemo)(() => {
              const g = new Set();
              return (
                t.GetPlayTimeStats().game_summary.forEach((y) => {
                  !y.demo && !y.playtest
                    ? g.add(y.appid)
                    : y.parent_appid && g.add(y.parent_appid);
                }),
                Array.from(g)
              );
            }, [t]),
            { isLoading: c } = mn(l),
            d = be(),
            m = [
              {
                name: x.c.Localize("#YIR_FirstTime_Tab_MonthlyGrid"),
                key: "firsttimebymonth",
                contents: (0, e.jsx)(Le.tH, {
                  children: (0, e.jsx)("div", {
                    className: $e.MonthGridOverallCtn,
                    children: (0, e.jsx)(os, { userYearInReview: t, nYear: i }),
                  }),
                }),
              },
              {
                name: x.c.Localize("#YIR_FirstTime_Tab_Grid"),
                key: "firsttimegrid",
                contents: (0, e.jsx)(Le.tH, {
                  children: (0, e.jsx)(as, { userYearInReview: t, nYear: i }),
                }),
              },
            ];
          return l.length == 0
            ? null
            : (0, e.jsxs)(Ne, {
                className: We.AllFirstPlayedCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: B()($e.AllGamesBGImage, a.AllGamesBGImage),
                  }),
                  (0, e.jsxs)("div", {
                    className: We.YearInReviewContent,
                    children: [
                      (0, e.jsx)("div", {
                        className: We.SectionTitle,
                        children: d("#YIR_FirstTime_Title", l.length),
                      }),
                      c
                        ? (0, e.jsx)(Bn.t, {
                            size: "medium",
                            position: "center",
                            string: tn.Z.Localize("#Loading"),
                          })
                        : (0, e.jsx)("div", {
                            className: We.TabCtn,
                            children: (0, e.jsx)(rs, {
                              className: We.TabBar,
                              classNameTab: B()(We.Tab, a.Tab),
                              tabs: m,
                            }),
                          }),
                    ],
                  }),
                ],
              });
        }
        function rs(o) {
          const { className: t, classNameTab: i, tabs: a } = o,
            [l, c] = (0, A.useState)(a[0]?.key);
          if (!a.length) return null;
          const d = a.find(({ key: m }) => m === l) ?? a[0];
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Pe.Z, {
                className: B()($e.TabBar, t),
                navEntryPreferPosition: Vi.iU.FIRST,
                children: a.map((m) =>
                  (0, e.jsx)(
                    ss,
                    {
                      className: i,
                      active: m.key === d.key,
                      onActivate: () => c(m.key),
                      children: m.name,
                    },
                    m.key,
                  ),
                ),
              }),
              (0, e.jsx)(Pe.Z, { children: d.contents }),
            ],
          });
        }
        function ss(o) {
          const { className: t, active: i, onActivate: a, children: l } = o;
          return (0, e.jsx)(Pe.Z, {
            className: B()($e.Tab, i && $e.Active, i && "ActiveTab", t),
            onActivate: a,
            children: l,
          });
        }
        function as(o) {
          const { nYear: t, userYearInReview: i } = o,
            a = i.GetPlayTimeStats().game_summary,
            l = be(),
            [c, d] = A.useState(!1),
            { bShouldShowMore: m, rgGamesInOrderOfPlaytime: g } = (0,
            A.useMemo)(() => {
              const y = new Set(),
                j = a
                  .filter((K) =>
                    y.has(K.appid)
                      ? !1
                      : (y.add(K.appid),
                        K.parent_appid || (!K.demo && !K.playtest)),
                  )
                  .sort(
                    (K, Q) =>
                      Q.total_playtime_percentagex100 -
                      K.total_playtime_percentagex100,
                  )
                  .map((K) => ({
                    appid: K.appid,
                    nPercentagex100: K.total_playtime_percentagex100,
                    bNewThisYear: !!K.new_this_year,
                    bIsDemo: !!K.demo,
                    bIsPlaytest: !!K.playtest,
                    nParentAppID: K.parent_appid,
                  })),
                P = 100,
                H = a.length > P && !c;
              return {
                bShouldShowMore: H,
                rgGamesInOrderOfPlaytime: H ? j.slice(0, P) : j,
              };
            }, [a, c]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Fi, {
                nYear: t,
                rgGamesInOrderOfPlaytime: g,
                strTooltip: l("#YIR_FirstTime_Percentages"),
              }),
              m &&
                (0, e.jsx)("div", {
                  className: ct.MoreButtonContainer,
                  children: (0, e.jsx)("a", {
                    href: "#",
                    className: ct.ShowMoreBtn,
                    onClick: () => d(!0),
                    children: x.c.Localize("#YIR_ShowMore"),
                  }),
                }),
            ],
          });
        }
        function os(o) {
          const { nYear: t, userYearInReview: i } = o,
            a = i.GetRawStats().playtime_stats.months;
          return (0, e.jsx)(e.Fragment, {
            children: a
              .filter((l) => l.stats.total_sessions > 0)
              .map((l) =>
                (0, e.jsx)(
                  ls,
                  { month: l, userYearInReview: i, nYear: t },
                  "outermonth" + l.rtime_month,
                ),
              ),
          });
        }
        function ls(o) {
          const { nYear: t, userYearInReview: i, month: a } = o,
            l = Di(),
            c = be(),
            [d, m] = A.useState(!1),
            { bShouldShowMore: g, rgGameStats: y } = (0, A.useMemo)(() => {
              const P = a.game_summary
                  .filter((Q) => {
                    const It = i.GetGameSummaryForApp(Q.appid);
                    return (
                      (0, Ee.wT)(
                        It,
                        `Displaying Month Data ${a.rtime_month} missing summary for appid: ${Q.appid}`,
                      ),
                      It && (It.parent_appid || (!It.demo && !It.playtest))
                    );
                  })
                  .sort(
                    (Q, It) =>
                      It.relative_playtime_percentagex100 -
                      Q.relative_playtime_percentagex100,
                  )
                  .map((Q) => {
                    const It = i.GetGameSummaryForApp(Q.appid);
                    return {
                      appid: It.appid,
                      nPercentagex100: Q.relative_playtime_percentagex100,
                      bNewThisYear: !!It.new_this_year,
                      bIsDemo: !!It.demo,
                      bIsPlaytest: !!It.playtest,
                      nParentAppID: It.parent_appid,
                    };
                  }),
                H = 8,
                K = P.length > H && !d;
              return { bShouldShowMore: K, rgGameStats: K ? P.slice(0, H) : P };
            }, [a.game_summary, a.rtime_month, d, i]);
          if (y.length == 0) return null;
          const j = new Date((a.rtime_month + 1440 * 60) * 1e3);
          return (0, e.jsxs)(
            "div",
            {
              className: $e.MonthGroupCtn,
              children: [
                (0, e.jsx)("div", {
                  className: $e.MonthTitle,
                  children: l
                    ? x.c.Localize(
                        `#YIR_MonthlyGrid_MonthSingular_${j.getUTCMonth() + 1}`,
                      )
                    : (0, On.sq)(j),
                }),
                (0, e.jsx)(Fi, {
                  rgGamesInOrderOfPlaytime: y,
                  nYear: t,
                  strTooltip: c("#YIR_FirstTime_MonthlyPercentages"),
                }),
                g &&
                  (0, e.jsx)("div", {
                    className: ct.MoreButtonContainer,
                    children: (0, e.jsx)("a", {
                      href: "#",
                      className: ct.ShowMoreBtn,
                      onClick: () => m(!0),
                      children: x.c.Localize("#YIR_ShowMore"),
                    }),
                  }),
              ],
            },
            "monthgroup_" + a.rtime_month,
          );
        }
        function Fi(o) {
          const { nYear: t, rgGamesInOrderOfPlaytime: i, strTooltip: a } = o,
            l = Ri(),
            c = (0, A.useMemo)(
              () => i.map((j) => j.nParentAppID || j.appid),
              [i],
            ),
            { data: d } = mn(c);
          let m = i.filter((j) => d?.has(j.nParentAppID || j.appid));
          const g = m.map((j) => j.appid);
          let y = m.map((j, P) => {
            let H = () => l(P, g);
            return (0, e.jsx)(
              cs,
              {
                appid: j.nParentAppID || j.appid,
                bNewThisYear: j.bNewThisYear,
                fnOnClick: H,
                nYear: t,
                strPercentage:
                  j.nPercentagex100 !== void 0 ? De(j.nPercentagex100) : void 0,
                strTooltip: a,
                bIsDemo: j.bIsDemo,
                bIsPlayTest: j.bIsPlaytest,
              },
              j.appid,
            );
          });
          return (0, e.jsx)(Pe.Z, {
            "flow-children": "grid",
            className: B()(ct.FirstPlayCtn, $e.FirstPlayCtn),
            children: y,
          });
        }
        function cs(o) {
          const {
              nYear: t,
              appid: i,
              bNewThisYear: a,
              fnOnClick: l,
              strPercentage: c,
              strTooltip: d,
              bIsDemo: m,
              bIsPlayTest: g,
            } = o,
            { item: y } = _e(i),
            j = (0, ii.aL)(y && (0, Qi._)(y.info)) || "",
            P = ne();
          if (!y || !y.info.visible) return null;
          const H = (0, Ge.CB)(y.assets, "library_capsule");
          return (0, e.jsx)("div", {
            className: B()({
              [ct.GameCtn]: !0,
              [$e.GameCtn]: !0,
              [ct.GameNewThisYear]: a,
            }),
            onClick: (K) => {
              l && (K.preventDefault(), l());
            },
            children: (0, e.jsx)(ns.oj, {
              appid: i,
              children: (0, e.jsxs)("a", {
                href: l ? void 0 : j,
                className: ct.CapsuleCtn,
                children: [
                  (!!a || !!m || !!g) &&
                    (0, e.jsxs)("div", {
                      className: ct.SpecialFlags,
                      children: [
                        !!a &&
                          (0, e.jsx)("div", {
                            className: B()(
                              ct.GamePlayDetails,
                              P.GamePlayDetails,
                            ),
                            children: x.c.Localize("#YIR_FirstTime_Played", t),
                          }),
                        !!m &&
                          (0, e.jsx)("div", {
                            className: B()(
                              ct.DemoPlayDetails,
                              P.DemoPlayDetails,
                            ),
                            children: x.c.Localize("#YIR_Played_Demo"),
                          }),
                        !!g &&
                          (0, e.jsx)("div", {
                            className: B()(
                              ct.PlaytestPlayDetails,
                              P.PlaytestPlayDetails,
                            ),
                            children: x.c.Localize("#YIR_Played_PlayTest"),
                          }),
                      ],
                    }),
                  H
                    ? (0, e.jsx)("img", { alt: "", loading: "lazy", src: H })
                    : (0, e.jsx)(Gi, { item: y.info }),
                  !!c &&
                    (0, e.jsx)(nn.he, {
                      toolTipContent: d,
                      className: ct.TimePlayed,
                      children: c,
                    }),
                ],
              }),
            }),
          });
        }
        var ds = r(20175),
          Ce = r.n(ds);
        const ms = 9e3,
          us = 1,
          gs = 50;
        function hs(o) {
          const t = o
            .GetPlayTimeStats()
            .games.map((c) => o.GetGameSummaryForApp(c.appid))
            .filter((c) => c && (c.parent_appid || (!c.demo && !c.playtest)));
          if (t.length == 0) return { eType: "basic" };
          const i = t[0].total_playtime_percentagex100 ?? 0;
          return o.GetPlayTimeStats().game_summary.length < us || i >= ms
            ? { eType: "single", appid: t[0].parent_appid || t[0].appid }
            : {
                eType: "tiles",
                rgAppIDs: Array.from(
                  new Set(
                    o
                      .GetPlayTimeStats()
                      .game_summary.filter(
                        (c) => c.parent_appid || (!c.demo && !c.playtest),
                      )
                      .sort(
                        (c, d) =>
                          d.total_playtime_percentagex100 -
                          c.total_playtime_percentagex100,
                      )
                      .slice(0, gs)
                      .map((c) => c.parent_appid || c.appid),
                  ),
                ),
              };
        }
        var bn = r(36707),
          Je = r(17247);
        function fs(o) {
          const {
            children: t,
            className: i,
            squareClassName: a,
            gridClassName: l,
            bEvenTiles: c,
            bFadeInTiles: d,
            bDrift: m,
          } = o;
          return (0, e.jsx)("div", {
            className: (0, bn.A)(Je.Container, i),
            children: (0, e.jsx)("div", {
              className: (0, bn.A)(Je.Frame, !d && Je.FadeInGrid),
              children: (0, e.jsx)("div", {
                className: (0, bn.A)(Je.Square, m && Je.Drift, a),
                children: (0, e.jsx)("div", {
                  className: (0, bn.A)(
                    { [Je.Grid]: !0, [Je.WideTiles]: !c, [Je.FadeInTiles]: d },
                    l,
                  ),
                  children: t,
                }),
              }),
            }),
          });
        }
        function vs(o) {
          return (0, e.jsx)("img", {
            className: (0, bn.A)(Je.Tile, o.className),
            src: o.strImageURL,
            alt: "",
          });
        }
        function Zi(o) {
          const { userYearInReview: t, children: i } = o,
            a = (0, A.useMemo)(() => hs(t), [t]);
          return a.eType == "basic"
            ? (0, e.jsx)(ri, { children: i })
            : a.eType == "single"
              ? (0, e.jsx)(Bs, { appid: a.appid, children: i })
              : (0, e.jsx)(ys, { rgAppIDs: a.rgAppIDs, children: i });
        }
        function ys(o) {
          const { rgAppIDs: t, children: i } = o,
            a = ne(),
            { data: l } = mn(t),
            { rgStoreItems: c, rgImageURLs: d } = (0, A.useMemo)(() => {
              if (!l) return { rgStoreItems: null, rgImageURLs: null };
              const m = t.map((y) => l.get(y)).filter((y) => !!y && !!y.assets),
                g = ps(m);
              return { rgStoreItems: m, rgImageURLs: g };
            }, [t, l]);
          return c
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(fs, {
                    className: B()(Ce().ImagesCtn, a.ImagesCtn),
                    squareClassName: Ce().TileSquare,
                    gridClassName: B()({
                      [Ce().TileGrid]: !0,
                      [Ce().Sub10]: c.length <= 10,
                      [Ce().Sub20]: c.length <= 20,
                      [Ce().Sub40]: c.length <= 40,
                    }),
                    bFadeInTiles: !0,
                    bDrift: !0,
                    children: d.map((m, g) =>
                      (0, e.jsx)(
                        vs,
                        { strImageURL: m, className: Ce().Tile },
                        g,
                      ),
                    ),
                  }),
                  i,
                ],
              })
            : (0, e.jsx)(ri, { children: i });
        }
        function ps(o) {
          const t = (l) => (
              (0, Ee.wT)(l.assets, "Cannot get image without assets"),
              (0, Ge.CB)(l.assets, "library_hero", "main_capsule")
            ),
            i = (l) => (
              (0, Ee.wT)(l.assets, "Cannot get image without assets"),
              (0, Ge.CB)(l.assets, "raw_page_background", "main_capsule")
            ),
            a = o.map(t);
          return (
            o.length <= 50 && a.push(...o.map(i)),
            o.length <= 20 && a.push(...o.map(t)),
            a
          );
        }
        function Bs(o) {
          const { appid: t, children: i } = o,
            { item: a } = _e(t),
            l = ne();
          return a
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: B()(Ce().ImagesCtn, l.ImagesCtn),
                    children: (0, e.jsx)("div", {
                      className: B()(Ce().SingleGame, l.SingleGame),
                      children: (0, e.jsx)("div", {
                        className: B()(Ce().ImageTint, l.ImageTint),
                        children: (0, e.jsx)("img", {
                          alt: "",
                          src: (0, Ge.CB)(a.assets, "library_hero"),
                        }),
                      }),
                    }),
                  }),
                  i,
                ],
              })
            : (0, e.jsx)(ri, { children: i });
        }
        function ri(o) {
          return (0, e.jsx)("div", {
            className: Ce().basicBackground,
            children: o.children,
          });
        }
        var xs = r(54094),
          dt = r.n(xs),
          si = r(91843),
          ai = r(16965),
          Mn = r(49404),
          js = r(55709),
          bs = r(63905),
          Ms = r(79191),
          Is = r(47148),
          oi = r(19730);
        const un = ({
          spaceAroundCount: o,
          endValue: t,
          maxValue: i,
          duration: a = 1e3,
          startAnimation: l = !1,
          stopAnimation: c = !1,
          onAnimationStart: d,
          onAnimationStop: m,
          delay: g = 0,
          className: y,
        }) => {
          const [j, P] = (0, A.useState)(0),
            H = A.useRef(null),
            K = (Q) => (Q < 0.5 ? 4 * Q ** 3 : 1 - Math.pow(-2 * Q + 2, 3) / 2);
          return (
            (0, A.useEffect)(() => {
              let Q = null;
              const It = () => {
                if (!Q) return;
                const Gt = Date.now() - Q,
                  Kt = Math.min(1, Gt / a),
                  ge = K(Kt),
                  Wt = Math.round((i ?? t) * ge);
                Wt <= t
                  ? (P(Wt), (H.current = requestAnimationFrame(It)))
                  : P(t);
              };
              return (
                l &&
                  (d && d(),
                  window.setTimeout(() => {
                    (Q = Date.now()),
                      d && d(),
                      (H.current = requestAnimationFrame(It));
                  }, g)),
                () => {
                  H.current && cancelAnimationFrame(H.current), c && m && m();
                }
              );
            }, [t, a, l, c, d, m, g, i]),
            o
              ? (0, e.jsxs)(e.Fragment, {
                  children: ["\xA0", (0, oi.Dq)(j), "\xA0"],
                })
              : (0, e.jsx)(e.Fragment, { children: (0, oi.Dq)(j) })
          );
        };
        var Ts = r(94162),
          As = r(39567),
          $i = r(63886);
        function li() {
          if (typeof $i.E$ != "function") {
            console.error(
              "Cannot find configureTextMeasurement. Recharts not patched correctly for this context.",
            );
            return;
          }
          (0, $i.E$)({
            measureText: (o, t) => {
              const i = o.toString(),
                a = typeof t?.fontSize == "number" ? t.fontSize : 13;
              return { width: i.length * 8, height: a * 1.3 };
            },
          });
        }
        li();
        const Ls = () => {
            const o = ne();
            return (0, e.jsxs)("svg", {
              className: B()(
                dt().ProgressIconSVG,
                dt().IconStreak,
                o.IconStreak,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 220 256",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, e.jsx)("path", {
                  d: "M62.8236 111.578C62.8236 118.539 57.1801 124.183 50.2186 124.183C43.257 124.183 37.6135 118.539 37.6135 111.578C37.6135 104.616 43.257 98.9728 50.2186 98.9728C57.1801 98.9728 62.8236 104.616 62.8236 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M104.84 111.578C104.84 118.539 99.197 124.183 92.2354 124.183C85.2738 124.183 79.6304 118.539 79.6304 111.578C79.6304 104.616 85.2738 98.9728 92.2354 98.9728C99.197 98.9728 104.84 104.616 104.84 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M146.857 111.578C146.857 118.539 141.214 124.183 134.252 124.183C127.29 124.183 121.647 118.539 121.647 111.578C121.647 104.616 127.29 98.9728 134.252 98.9728C141.214 98.9728 146.857 104.616 146.857 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M188.874 111.578C188.874 118.539 183.23 124.183 176.269 124.183C169.307 124.183 163.664 118.539 163.664 111.578C163.664 104.616 169.307 98.9728 176.269 98.9728C183.23 98.9728 188.874 104.616 188.874 111.578Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M62.8236 153.595C62.8236 160.556 57.1801 166.2 50.2186 166.2C43.257 166.2 37.6135 160.556 37.6135 153.595C37.6135 146.633 43.257 140.99 50.2186 140.99C57.1801 140.99 62.8236 146.633 62.8236 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M104.84 153.595C104.84 160.556 99.197 166.2 92.2354 166.2C85.2738 166.2 79.6304 160.556 79.6304 153.595C79.6304 146.633 85.2738 140.99 92.2354 140.99C99.197 140.99 104.84 146.633 104.84 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M146.857 153.595C146.857 160.556 141.214 166.2 134.252 166.2C127.29 166.2 121.647 160.556 121.647 153.595C121.647 146.633 127.29 140.99 134.252 140.99C141.214 140.99 146.857 146.633 146.857 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M188.874 153.595C188.874 160.556 183.23 166.2 176.269 166.2C169.307 166.2 163.664 160.556 163.664 153.595C163.664 146.633 169.307 140.99 176.269 140.99C183.23 140.99 188.874 146.633 188.874 153.595Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M62.8236 195.611C62.8236 202.573 57.1801 208.216 50.2186 208.216C43.257 208.216 37.6135 202.573 37.6135 195.611C37.6135 188.65 43.257 183.006 50.2186 183.006C57.1801 183.006 62.8236 188.65 62.8236 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M104.84 195.611C104.84 202.573 99.197 208.216 92.2354 208.216C85.2738 208.216 79.6304 202.573 79.6304 195.611C79.6304 188.65 85.2738 183.006 92.2354 183.006C99.197 183.006 104.84 188.65 104.84 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  d: "M146.857 195.611C146.857 202.573 141.214 208.216 134.252 208.216C127.29 208.216 121.647 202.573 121.647 195.611C121.647 188.65 127.29 183.006 134.252 183.006C141.214 183.006 146.857 188.65 146.857 195.611Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M216.696 196.876C218.637 198.84 218.617 202.006 216.653 203.947L197.527 222.839C194.78 225.552 190.355 225.529 187.636 222.787L177.266 212.324C175.322 210.363 175.336 207.197 177.297 205.253C179.258 203.309 182.424 203.323 184.368 205.284L192.63 213.62L209.625 196.832C211.59 194.892 214.755 194.911 216.696 196.876Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M169.538 8H156.974V44.6175L169.538 44.6175V8ZM156.974 0C152.556 0 148.974 3.58172 148.974 7.99999V12.8068H78.3153V8C78.3153 3.58172 74.7335 0 70.3153 0H57.7515C53.3332 0 49.7515 3.58172 49.7515 7.99999V12.8068H12C5.37258 12.8068 0 18.1794 0 24.8068V108.777C0 110.986 1.79086 112.777 4 112.777C6.20914 112.777 8 110.986 8 108.777V77.7627H162.73C164.939 77.7627 166.73 75.9718 166.73 73.7627C166.73 71.5536 164.939 69.7627 162.73 69.7627H8V24.8068C8 22.5976 9.79086 20.8068 12 20.8068H49.7515V44.6175C49.7515 49.0358 53.3332 52.6175 57.7515 52.6175H70.3153C74.7335 52.6175 78.3153 49.0358 78.3153 44.6175V20.8068H148.974V44.6175C148.974 49.0358 152.556 52.6175 156.974 52.6175H169.538C173.956 52.6175 177.538 49.0358 177.538 44.6175V20.8068H214.487C216.696 20.8068 218.487 22.5976 218.487 24.8068V69.7627H181.404C179.195 69.7627 177.404 71.5536 177.404 73.7627C177.404 75.9718 179.195 77.7627 181.404 77.7627H218.487V174.637C212.078 170.481 204.434 168.067 196.227 168.067C173.602 168.067 155.26 186.408 155.26 209.034C155.26 216.458 157.235 223.421 160.689 229.426H12C9.79086 229.426 8 227.636 8 225.426V127.918C8 125.709 6.20914 123.918 4 123.918C1.79086 123.918 0 125.709 0 127.918V225.426C0 232.054 5.37256 237.426 12 237.426H166.695C174.149 245.177 184.625 250 196.227 250C218.852 250 237.193 231.659 237.193 209.034C237.193 198.394 233.137 188.702 226.487 181.419V24.8068C226.487 18.1794 221.115 12.8068 214.487 12.8068H177.538V8C177.538 3.58172 173.956 0 169.538 0H156.974ZM229.193 209.034C229.193 227.24 214.434 242 196.227 242C178.02 242 163.26 227.24 163.26 209.034C163.26 190.827 178.02 176.067 196.227 176.067C214.434 176.067 229.193 190.827 229.193 209.034ZM57.7515 8H70.3153V44.6175L57.7515 44.6175V8Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          Ns = () => {
            const o = ne();
            return (0, e.jsxs)("svg", {
              className: B()(
                dt().ProgressIconSVG,
                dt().IconGamesPlayed,
                o.IconGamesPlayed,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "100px",
              viewBox: "0 0 215 215",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M37.6146 37.7144C-0.630497 75.9444 -0.631195 137.928 37.6151 176.159C66.7056 205.238 109.551 212.205 145.234 197.037C147.268 196.173 149.617 197.12 150.481 199.153C151.345 201.186 150.397 203.534 148.364 204.399C109.781 220.8 63.4338 213.28 31.9583 181.817C-9.41226 140.463 -9.41295 73.4128 31.9588 32.0574C33.5213 30.4955 36.0541 30.4957 37.6159 32.0578C39.1777 33.6199 39.1771 36.1525 37.6146 37.7144Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M57.6852 17.4447C56.6914 15.4719 57.4852 13.0669 59.4583 12.0728C99.1749 -7.93684 148.868 -1.37195 182.042 31.7888C223.412 73.143 223.413 140.193 182.041 181.548C180.479 183.11 177.946 183.11 176.384 181.548C174.822 179.986 174.823 177.453 176.385 175.891C214.63 137.661 214.631 75.6779 176.385 37.4467C145.724 6.79791 99.7824 0.714176 63.0573 19.2167C61.0842 20.2108 58.679 19.4174 57.6852 17.4447Z",
                  fill: "#E5E5E5",
                }),
                (0, e.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M106.838 188.612C152.036 188.612 188.676 151.986 188.676 106.806C188.676 61.6257 152.036 25 106.838 25C61.6402 25 25 61.6257 25 106.806C25 151.986 61.6402 188.612 106.838 188.612ZM142.994 113.577C148.329 110.499 148.329 102.799 142.994 99.7197L93.9972 71.4425C88.6639 68.3645 81.9984 72.2136 81.9984 78.3714L81.9984 134.926C81.9984 141.084 88.6639 144.933 93.9972 141.855L142.994 113.577Z",
                  fill: "#E5E5E5",
                }),
              ],
            });
          },
          zs = () => {
            const o = ne();
            return (0, e.jsx)("svg", {
              className: B()(
                dt().ProgressIconSVG,
                dt().IconAchievement,
                o.IconAchievement,
              ),
              x: "0px",
              y: "0px",
              width: "100px",
              height: "120px",
              viewBox: "0 0 240 276",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M107.636 23.0644L120.478 8.96963L133.319 23.0644C137.003 27.1077 142.704 28.6353 147.916 26.9756L166.085 21.19L170.159 39.8174C171.327 45.1608 175.501 49.3343 180.844 50.5029L199.472 54.5768L193.686 72.7455C192.026 77.9573 193.554 83.6585 197.597 87.3422L211.692 100.184L197.597 113.026C193.554 116.709 192.026 122.411 193.686 127.622L199.472 145.791L180.844 149.865C175.501 151.034 171.327 155.207 170.159 160.551L166.085 179.178L147.916 173.392C142.704 171.733 137.003 173.26 133.319 177.303L120.478 191.398L107.636 177.303C103.952 173.26 98.251 171.733 93.0392 173.392L74.8705 179.178L70.7966 160.551C69.628 155.207 65.4545 151.034 60.1111 149.865L41.4837 145.791L47.2693 127.622C48.929 122.411 47.4014 116.709 43.3581 113.026L29.2633 100.184L43.3581 87.3422C47.4014 83.6584 48.929 77.9573 47.2693 72.7455L41.4837 54.5768L60.1111 50.5029C65.4545 49.3343 69.628 45.1608 70.7966 39.8174L74.8705 21.19L93.0391 26.9756C98.251 28.6353 103.952 27.1077 107.636 23.0644ZM116.042 1.95909C118.422 -0.653032 122.533 -0.653031 124.913 1.9591L139.233 17.6766C140.812 19.4094 143.255 20.0641 145.489 19.3528L165.749 12.9011C169.116 11.8289 172.676 13.8842 173.431 17.3363L177.974 38.1081C178.475 40.3982 180.263 42.1868 182.553 42.6877L203.325 47.2305C206.777 47.9855 208.833 51.5454 207.76 54.9125L201.309 75.1729C200.598 77.4065 201.252 79.8499 202.985 81.4286L218.703 95.7488C221.315 98.1287 221.315 102.239 218.703 104.619L202.985 118.939C201.252 120.518 200.598 122.961 201.309 125.195L207.76 145.455C208.833 148.823 206.777 152.382 203.325 153.137L190.801 155.876L239.847 236.34C242.331 240.415 239.521 245.659 234.753 245.849L206.74 246.963C204.683 247.045 202.798 248.133 201.698 249.874L186.727 273.576C184.178 277.611 178.232 277.422 175.945 273.234L131.275 191.426L124.913 198.409C122.533 201.021 118.422 201.021 116.042 198.409L109.564 191.298L64.8244 273.234C62.5373 277.422 56.5913 277.611 54.0427 273.576L39.0711 249.874C37.9718 248.133 36.0867 247.045 34.0298 246.963L6.01687 245.849C1.24829 245.659 -1.56099 240.415 0.922882 236.34L49.9904 155.841L37.63 153.137C34.1779 152.382 32.1226 148.823 33.1948 145.455L39.6465 125.195C40.3578 122.961 39.7031 120.518 37.9703 118.939L22.2528 104.619C19.6407 102.239 19.6407 98.1286 22.2528 95.7487L37.9703 81.4286C39.7031 79.8499 40.3578 77.4065 39.6465 75.1729L33.1948 54.9125C32.1226 51.5454 34.1779 47.9855 37.63 47.2305L58.4018 42.6877C60.6919 42.1868 62.4805 40.3982 62.9814 38.1081L67.5242 17.3363C68.2792 13.8842 71.8391 11.8289 75.2062 12.9011L95.4666 19.3528C97.7002 20.0641 100.144 19.4094 101.722 17.6766L116.042 1.95909ZM58.2574 157.649L9.29666 237.973L34.3478 238.969C39.0346 239.156 43.3299 241.636 45.8348 245.601L59.2235 266.798L103.865 185.043L101.722 182.691C100.144 180.959 97.7002 180.304 95.4666 181.015L75.2062 187.467C71.8391 188.539 68.2792 186.484 67.5242 183.032L62.9814 162.26C62.4805 159.97 60.6919 158.181 58.4018 157.68L58.2574 157.649ZM136.974 185.17L181.546 266.798L194.935 245.601C197.44 241.636 201.735 239.156 206.422 238.969L231.473 237.973L182.534 157.684C180.253 158.191 178.473 159.976 177.974 162.26L173.431 183.032C172.676 186.484 169.116 188.539 165.749 187.467L145.489 181.015C143.255 180.304 140.812 180.959 139.233 182.691L136.974 185.17ZM146.738 53.2766C121.119 38.4858 88.3612 47.2633 73.5704 72.8818C62.3219 92.3648 64.7011 115.986 77.7705 132.691C79.1317 134.431 78.8247 136.945 77.0848 138.307C75.3449 139.668 72.8309 139.361 71.4697 137.621C56.4587 118.434 53.7068 91.2865 66.6422 68.8818C83.6422 39.437 121.293 29.3484 150.738 46.3484C152.651 47.453 153.307 49.8993 152.202 51.8125C151.097 53.7257 148.651 54.3812 146.738 53.2766ZM167.979 60.9959C166.588 59.2794 164.069 59.0153 162.353 60.406C160.636 61.7967 160.372 64.3156 161.763 66.032C175.326 82.7723 177.936 106.79 166.527 126.551C151.737 152.169 118.978 160.947 93.3599 146.156C91.4467 145.051 89.0003 145.707 87.8957 147.62C86.7912 149.533 87.4467 151.98 89.3599 153.084C118.805 170.084 156.456 159.996 173.456 130.551C186.575 107.827 183.558 80.2246 167.979 60.9959Z",
                fill: "#E5E5E5",
              }),
            });
          };
        function ws(o) {
          const { userYearInReview: t } = o,
            i = ne();
          return (0, e.jsx)(Ne, {
            className: B()(f().TopHonorsSection, i.TopHonorsSection),
            children: (0, e.jsx)("div", {
              className: B()(f().YearInReviewContent, f().TopHonorsContent),
              children: (0, e.jsxs)("div", {
                className: dt().TopHonorsCtn,
                children: [
                  (0, e.jsx)(Es, { userYearInReview: t }),
                  (0, e.jsxs)("div", {
                    className: dt().SpiderAndNumbersCnt,
                    children: [
                      (0, e.jsx)(Ss, { userYearInReview: t }),
                      (0, e.jsx)(Us, { userYearInReview: t }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function Es(o) {
          let { userYearInReview: t } = o;
          const i = t.GetYear(),
            a = be(),
            l = ne();
          let c = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            d = t.GetFilteredGameSummary()?.length || 0,
            m =
              t.GetPlayTimeStats().playtime_streak?.longest_consecutive_days ||
              0,
            g = t.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
            y = t.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
            j = t.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
            P = m > 0 && j > 0 && !qe();
          g >= 99 && (g = 100),
            y >= 99 && (y = 100),
            j >= 99 && (j = 100),
            c == t.GetPlayTimeStats().by_numbers?.achievements_avg && (g = 50),
            d == t.GetPlayTimeStats().by_numbers?.games_played_avg && (y = 50),
            m == t.GetPlayTimeStats().by_numbers?.game_streak_avg && (j = 50),
            c == 0 && (g = 0),
            d == 0 && (y = 0),
            m == 0 && (j = 0);
          const [H, K] = A.useState(!1),
            [Q, It] = A.useState(!1),
            [$t, Gt] = A.useState(!1),
            Kt = A.useCallback(async (pe) => {
              pe && (K(!0), It(!0), Gt(!0));
            }, []),
            ge = (0, e.jsx)(un, {
              endValue: c,
              maxValue: (c * 100) / g,
              duration: 2e3,
              startAnimation: H,
              delay: 500,
            }),
            Wt = (0, e.jsx)(un, {
              endValue: d,
              maxValue: (d * 100) / y,
              duration: 2e3,
              startAnimation: Q,
              delay: 700,
            }),
            qt = (0, e.jsx)(un, {
              endValue: m,
              maxValue: (m * 100) / j,
              duration: 2e3,
              startAnimation: $t,
              delay: 900,
            });
          return (0, e.jsxs)("div", {
            className: B()(dt().PlayBehaviorContainer, l.PlayBehaviorContainer),
            children: [
              (0, e.jsx)("div", {
                className: f().SectionTitle,
                children: a("#YIR_Compare_Title_Label"),
              }),
              (0, e.jsx)("div", {
                className: B()(
                  f().SectionSubTitle,
                  dt().PlayBehaviorSectionSubTitle,
                ),
                children: a("#YIR_Compare_Subtitle_Label"),
              }),
              (0, e.jsxs)(jn.J, {
                onVisibilityChange: Kt,
                children: [
                  (0, e.jsx)(ci, {
                    progressLabel: a(
                      c == 1
                        ? "#YIR_Compare_PlayerProgress_Achievements_Single"
                        : "#YIR_Compare_PlayerProgress_Achievements_Label",
                      ge,
                    ),
                    userPercent: g,
                    steamAverage:
                      t.GetPlayTimeStats().by_numbers?.achievements_avg,
                    progressIcon: (0, e.jsx)(zs, {}),
                  }),
                  (0, e.jsx)(ci, {
                    progressLabel: a(
                      d == 1
                        ? "#YIR_Compare_PlayerProgress_PlayedGames_Single"
                        : "#YIR_Compare_PlayerProgress_PlayedGames_Label",
                      Wt,
                    ),
                    userPercent: y,
                    steamAverage:
                      t.GetPlayTimeStats().by_numbers?.games_played_avg,
                    progressIcon: (0, e.jsx)(Ns, {}),
                  }),
                  P &&
                    (0, e.jsx)(ci, {
                      progressLabel: a(
                        m == 1
                          ? "#YIR_Compare_PlayerProgress_LongestStreak_Single"
                          : "#YIR_Compare_PlayerProgress_LongestStreak_Label",
                        qt,
                      ),
                      userPercent: j,
                      steamAverage:
                        t.GetPlayTimeStats().by_numbers?.game_streak_avg,
                      progressIcon: (0, e.jsx)(Ls, {}),
                    }),
                ],
              }),
              (0, e.jsx)("div", {
                className: dt().PlayNewnessContainer,
                children: (0, e.jsx)(Os, { userYearInReview: t }),
              }),
            ],
          });
        }
        function ci(o) {
          let {
            progressLabel: t,
            steamAverage: i,
            progressIcon: a,
            userPercent: l,
          } = o;
          const c = ne();
          return (
            (l = Ln.OQ(l, 0, 100)),
            (0, e.jsxs)(Ne, {
              className: dt().PlayerBehaviorProgressCnt,
              children: [
                (0, e.jsx)("div", {
                  className: dt().ProgressIcon,
                  children: a,
                }),
                (0, e.jsxs)("div", {
                  className: dt().ProgressRightSide,
                  children: [
                    (0, e.jsx)("div", {
                      className: B()(dt().ProgressLabel, c.ProgressLabel),
                      children: t,
                    }),
                    (0, e.jsx)("div", {
                      className: dt().ProgressBar,
                      children: (0, e.jsx)("div", {
                        className: dt().ProgressBarWrapper,
                        children: (0, e.jsx)("div", {
                          className: B()(
                            dt().ProgressBarFilled,
                            c.ProgressBarFilled,
                            c.ProgressBarFilledGradient,
                          ),
                          style: {
                            clipPath:
                              "polygon(0% 0, " +
                              l +
                              "% 0%, " +
                              l +
                              "% 100%, 0% 100%)",
                          },
                          children: (0, e.jsxs)("div", {
                            className: dt().GlitterBox,
                            children: [
                              (0, e.jsx)("div", { className: dt().Glitter }),
                              (0, e.jsx)("div", {
                                className: B()(
                                  dt().Glitter,
                                  dt().GlitterSecond,
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: dt().ProgressLabelsCnt,
                      children:
                        i &&
                        (0, e.jsx)("div", {
                          className: dt().ProgressSteamAvgLabel,
                          children: x.c.Localize(
                            "#YIR_Compare_PlayerProgress_Steam_Avg",
                            i,
                          ),
                        }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var Ps = ((o) => (
          (o.NewActive = "NewActive"),
          (o.UsedActive = "UsedActive"),
          (o.OldActive = "OldActive"),
          o
        ))(Ps || {});
        const Ds = {
          NewActive: "#YIR_Compare_NewGames_Flavor",
          UsedActive: "#YIR_Compare_ComfortGames_Flavor",
          OldActive: "#YIR_Compare_OldGames_Flavor",
        };
        function Os(o) {
          const { userYearInReview: t } = o,
            i = t.GetYear(),
            a = ne(),
            l = a.new_games_color,
            c = a.used_games_color,
            d = a.old_games_color,
            [m, g] = (0, A.useState)("NewActive"),
            y = be(),
            j = t.GetGlobalGameplayDistribition(),
            P = {
              NewActive: j?.new_releases || 0,
              UsedActive: j?.recent_releases || 0,
              OldActive: j?.classic_releases || 0,
            },
            H = j && j.new_releases ? j.recent_cutoff_year : 7,
            K = H + 1;
          let [Q, It, $t] = A.useMemo(() => {
            let qt = t.GetGameAgeCounts([1, K]),
              pe = qt.reduce((we, Ve) => Ve + we, 0);
            if (pe == 0) return [0, 0, 0];
            let Oe = qt.map((we) => Math.floor((we * 100) / pe)),
              Ye = 100 - Oe.reduce((we, Ve) => Ve + we, 0),
              Xe = qt.map((we, Ve) => ({
                decimal: ((we * 100) / pe) % 1,
                index: Ve,
              }));
            for (
              Xe = Xe.sort((we, Ve) => we.decimal - Ve.decimal);
              Ye > 0 && Xe.length > 0;
            ) {
              let we = Xe.pop();
              (Oe[we.index] += 1), (Ye -= 1);
            }
            return Oe;
          }, [t, K]);
          const Gt = { NewActive: Q, UsedActive: It, OldActive: $t },
            Kt = {
              NewActive: y("#YIR_Compare_NewGames_Desc_User", i),
              UsedActive: y("#YIR_Compare_ComfortGames_Desc_User", H),
              OldActive: y("#YIR_Compare_OldGames_Desc_User", K),
            },
            ge = {
              NewActive: x.c.Localize("#YIR_Compare_NewGames_Desc_AvgSteam", i),
              UsedActive: x.c.Localize(
                "#YIR_Compare_ComfortGames_Desc_AvgSteam",
                H,
              ),
              OldActive: x.c.Localize("#YIR_Compare_OldGames_Desc_AvgSteam", K),
            },
            Wt = (0, A.useMemo)(() => {
              const qt = new Array();
              return (
                qt.push({ name: "new", value: Q > 0 ? Q : 1 }),
                qt.push({ name: "used", value: It > 0 ? It : 1 }),
                qt.push({ name: "old", value: $t > 0 ? $t : 1 }),
                qt
              );
            }, [Q, It, $t]);
          return (0, e.jsxs)("div", {
            className: B()(dt().GameNewnessComparisonContainer, dt()[m], a[m]),
            children: [
              (0, e.jsx)("div", {
                className: B()(dt().GameNewnessTitle, a.GameNewnessTitle),
                children: x.c.LocalizeReact(
                  "#YIR_Compare_Flavor_Title",
                  (0, e.jsx)("div", {}),
                ),
              }),
              (0, e.jsxs)("div", {
                className: dt().GameNewnessDataCnt,
                children: [
                  (0, e.jsx)("div", {
                    className: dt().WheelChart,
                    children: (0, e.jsx)(si.r, {
                      responsive: !0,
                      style: { width: "100%", aspectRatio: 1 },
                      children: (0, e.jsxs)(ai.F, {
                        data: Wt,
                        dataKey: "value",
                        nameKey: "name",
                        cx: "50%",
                        cy: "50%",
                        innerRadius: "48%",
                        outerRadius: "92%",
                        fill: "#8884d8",
                        paddingAngle: 3,
                        minAngle: 2,
                        startAngle: 45,
                        endAngle: 405,
                        children: [
                          (0, e.jsx)(
                            Mn.f,
                            {
                              onMouseEnter: () => g("NewActive"),
                              className: B()(
                                dt().WheelArc,
                                m === "NewActive" && dt().Active,
                              ),
                              fill: l,
                              style:
                                m === "NewActive"
                                  ? { opacity: "1" }
                                  : { opacity: "0.75" },
                            },
                            "cell-1",
                          ),
                          (0, e.jsx)(
                            Mn.f,
                            {
                              onMouseEnter: () => g("UsedActive"),
                              className: B()(
                                dt().WheelArc,
                                m === "UsedActive" && dt().Active,
                              ),
                              fill: c,
                              style:
                                m === "UsedActive"
                                  ? { opacity: "1" }
                                  : { opacity: "0.75" },
                            },
                            "cell-2",
                          ),
                          (0, e.jsx)(
                            Mn.f,
                            {
                              onMouseEnter: () => g("OldActive"),
                              className: B()(
                                dt().WheelArc,
                                m === "OldActive" && dt().Active,
                              ),
                              fill: d,
                              style:
                                m === "OldActive"
                                  ? { opacity: "1" }
                                  : { opacity: "0.75" },
                            },
                            "cell-3",
                          ),
                        ],
                      }),
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: dt().RightSideContainer,
                    children: (0, e.jsxs)("div", {
                      className: dt().DataBoxesContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          className: B()(
                            dt().UserData,
                            a.UserData,
                            dt().DataBox,
                            a.DataBox,
                            a.Background,
                          ),
                          children: [
                            (0, e.jsx)("div", {
                              className: B()(
                                dt().DataBoxArrow,
                                a.DataBoxArrow,
                                a.Background,
                              ),
                            }),
                            (0, e.jsxs)("div", {
                              className: B()(
                                dt().PercentageLabel,
                                a.PercentageLabel,
                                a.Color,
                              ),
                              children: [
                                x.c.Localize("#YIR_Compare_Percentage", Gt[m]),
                                (0, e.jsx)("div", {
                                  className: dt().FlavorLabel,
                                  children: x.c.Localize(Ds[m]),
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: B()(
                                dt().PercentageDescriptionLabel,
                                a.PercentageDescriptionLabel,
                                a.Color,
                              ),
                              children: Kt[m],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: B()(
                            dt().SteamData,
                            a.SteamData,
                            dt().DataBox,
                            a.DataBox,
                            a.Border,
                          ),
                          children: [
                            (0, e.jsx)("div", {
                              className: B()(
                                dt().PercentageLabel,
                                a.PercentageLabel,
                                a.Color,
                              ),
                              children: x.c.Localize(
                                "#YIR_Compare_Percentage",
                                P[m],
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: B()(
                                dt().PercentageDescriptionLabel,
                                a.PercentageDescriptionLabel,
                                a.Color,
                              ),
                              children: ge[m],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }
        function Ss(o) {
          const { userYearInReview: t } = o,
            i = t.GetUserAggregateTagData(),
            { data: a } = (0, As.Fv)(N.TS.LANGUAGE),
            l = be(),
            c = ne(),
            d = Ws(),
            m = i.map((j) => j.nPreSelectionWeight).sort((j, P) => P - j);
          let g = i.map((j, P) => {
            const H = m.findIndex((K) => K - j.nPreSelectionWeight < 1e-5);
            return { subject: a && a[j.nTagId], A: (6 - H) * 10 + 2 * P + 0.5 };
          });
          if (g.length == 0) return null;
          const y = g.map((j, P) =>
            (0, e.jsx)("li", { children: j.subject }, P),
          );
          return (0, e.jsxs)("div", {
            className: B()(dt().SpidergraphContainer, dt().HalfwidthColumn),
            children: [
              (0, e.jsx)("div", {
                className: dt().SectionLabel,
                children: x.c.Localize("#YIR_Spider_Title"),
              }),
              (0, e.jsx)("div", {
                className: B()(dt().SectionDesc, c.SectionDesc),
                children: l("#YIR_Spider_Desc", t.GetYear()),
              }),
              (0, e.jsx)("div", {
                className: dt().GraphBox,
                children: (0, e.jsxs)(js.V, {
                  responsive: !0,
                  className: dt().SpiderResponsiveContainer,
                  style: { width: "100%", height: "100%" },
                  cx: "50%",
                  cy: "50%",
                  outerRadius: "70%",
                  data: g,
                  children: [
                    (0, e.jsx)(bs.z, {}),
                    (0, e.jsx)(Ms.r, {
                      tick: (0, e.jsx)(Rs, { bNumberedLabels: d }),
                      dataKey: "subject",
                    }),
                    (0, e.jsx)(Is.V, {
                      name: "tempRadar",
                      dataKey: "A",
                      stroke: "#8884d8",
                      fill: "#8884d8",
                      fillOpacity: 1,
                      animationDuration: 2e3,
                      isAnimationActive: !0,
                    }),
                  ],
                }),
              }),
              d &&
                (0, e.jsxs)("ol", {
                  className: dt().RadarChartLegend,
                  children: [" ", y, " "],
                }),
            ],
          });
        }
        function Ws() {
          const [o, t] = (0, A.useState)(!1);
          return (
            (0, A.useEffect)(
              () => t((0, Ts.Ae)() || window.innerWidth <= 300),
              [],
            ),
            o
          );
        }
        function Rs(o) {
          const {
            payload: t,
            x: i,
            verticalAnchor: a,
            bNumberedLabels: l,
            ...c
          } = o;
          return l
            ? (0, e.jsx)("text", {
                x: i,
                ...c,
                children: (0, e.jsx)("tspan", {
                  x: i,
                  dy: "20px",
                  children: t.index + 1,
                }),
              })
            : (0, e.jsx)("svg", {
                x: i - 85,
                ...c,
                width: "170px",
                height: "100%",
                children: (0, e.jsx)("foreignObject", {
                  className: dt().RadarTextContainer,
                  dy: "20px",
                  width: "170",
                  height: "150",
                  children: (0, e.jsx)("div", {
                    className: dt().RadarText,
                    children: t.value,
                  }),
                }),
              });
        }
        function Cs(o) {
          let t = o.GetRawStats().playtime_stats?.by_numbers;
          return t
            ? [
                ["#YIR_ByTheNum_Friends", t.friends_added || 0],
                ["#YIR_ByTheNum_GiftsSent", t.gifts_sent || 0],
                ["#YIR_ByTheNum_AwardsGiven", t.loyalty_reactions || 0],
                ["#YIR_ByTheNum_Badges", t.badges_earned || 0],
                ["#YIR_ByTheNum_Screenshots", t.screenshots_shared || 0],
                ["#YIR_ByTheNum_Reviews", t.written_reviews || 0],
                ["#YIR_ByTheNum_Posts", t.forum_posts || 0],
                ["#YIR_ByTheNum_Guides", t.guides_submitted || 0],
                ["#YIR_ByTheNum_GuideSubs", t.guide_subscribers || 0],
                ["#YIR_ByTheNum_Workshops", t.workshop_contributions || 0],
                [
                  "#YIR_ByTheNum_WorkshopSubscribers",
                  t.workshop_subscribers || 0,
                ],
                [
                  "#YIR_ByTheNum_WorkshopSubscriptions",
                  t.workshop_subscriptions || 0,
                ],
              ].sort((a, l) => l[1] - a[1])
            : [];
        }
        function Us(o) {
          const { userYearInReview: t } = o;
          let i = Cs(t);
          if (i.length == 0) return null;
          let a = i.map(([l, c]) =>
            (0, e.jsx)(Ys, { label: x.c.Localize(l), value: c }, l),
          );
          return (0, e.jsxs)("div", {
            className: B()(dt().NumbersContainer, dt().HalfwidthColumn),
            children: [
              (0, e.jsx)("div", {
                className: dt().SectionLabel,
                children: x.c.Localize("#YIR_ByTheNum_Title"),
              }),
              (0, e.jsx)("div", {
                className: dt().NumbersRowsCnt,
                children: a,
              }),
            ],
          });
        }
        function Ys(o) {
          let { label: t, value: i } = o,
            a = i ? (0, je.D)(i) : "-";
          return (0, e.jsxs)("div", {
            className: B()(dt().NumbersRow, i == 0 && dt().Disabled),
            children: [
              (0, e.jsx)("div", { className: dt().NumbersLabel, children: t }),
              (0, e.jsx)("div", { className: dt().FillerDots }),
              (0, e.jsx)("div", { className: dt().NumbersValue, children: a }),
            ],
          });
        }
        var Hs = r(59490),
          di = r(90405),
          rn = r(5751),
          on = r(24660);
        function Gs(o) {
          const { userYearInReview: t } = o;
          if (N.iA.is_support || N.iA.accountid == t.GetAccountID()) {
            const i = t.GetSteamID(),
              a = t.GetYear();
            return (0, e.jsxs)(di.K, {
              rootMargin: "0px 0px 100% 0px",
              children: [
                (0, e.jsx)(Ks, { steamid: i, year: a }),
                (0, e.jsx)(Qs, { steamid: i, year: a }),
              ],
            });
          }
          return null;
        }
        function Ks(o) {
          const { steamid: t, year: i } = o,
            { data: a } = Pr(t);
          if (!a || a.is_not_member_of_any_group || !a.family_group)
            return null;
          const l = (a.family_group.members ?? [])
            .map((c) => c.steamid)
            .filter((c) => !!c && c !== t);
          return l.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: rn.FriendsSharedSection,
                children: [
                  (0, e.jsx)("div", {
                    className: rn.FriendsSharedSectionTitle,
                    children: x.c.Localize("#YIR_FamilyShared"),
                  }),
                  (0, e.jsx)("div", {
                    className: rn.FriendsGrid,
                    children: l.map((c) =>
                      (0, e.jsx)(
                        Xi,
                        {
                          steamid: c,
                          year: i,
                          ePrivacy: v,
                          bPrivacyOverride: !1,
                        },
                        "family_" + c,
                      ),
                    ),
                  }),
                ],
              });
        }
        const Ji = 50;
        function Qs(o) {
          const { steamid: t, year: i } = o,
            { isLoading: a, data: l } = wr(t, i),
            c = (0, A.useMemo)(
              () =>
                l
                  ? [...l]
                      .sort(
                        (y, j) =>
                          (j.rt_privacy_updated ?? 0) -
                          (y.rt_privacy_updated ?? 0),
                      )
                      .slice(0, Ji)
                  : [],
              [l],
            ),
            d = (0, A.useMemo)(
              () => c.map((y) => new lt.b2(y.steamid).GetAccountID()),
              [c],
            ),
            m = (0, Ai.B3)(d);
          if (a || d?.length == 0 || !m) return null;
          const g = new Map();
          for (const y of m)
            !y || !y.steamid || g.set(y.steamid, y.persona_name ?? "");
          return (
            c.sort((y, j) => g.get(y.steamid).localeCompare(g.get(j.steamid))),
            (0, e.jsxs)("div", {
              className: rn.FriendsSharedSection,
              children: [
                (0, e.jsx)("div", {
                  className: rn.FriendsSharedSectionTitle,
                  children: x.c.Localize("#YIR_FriendShared"),
                }),
                (0, e.jsx)(Pe.Z, {
                  className: rn.FriendsGrid,
                  "flow-children": "grid",
                  children: c
                    .slice(0, Ji)
                    .map((y) =>
                      (0, e.jsx)(
                        Xi,
                        {
                          steamid: y.steamid,
                          ePrivacy: y.privacy_state,
                          year: i,
                          bPrivacyOverride: y.privacy_override,
                        },
                        "friendshare_" + y.steamid + "_" + i,
                      ),
                    ),
                }),
                !!N.iA.is_support &&
                  (0, e.jsx)("div", {
                    style: {
                      backgroundColor: "#461F28",
                      border: "1px solid #761F28",
                      padding: "4px",
                    },
                    children: x.c.Localize("#YIR_FriendShared_support"),
                  }),
              ],
            })
          );
        }
        function Xi(o) {
          const { steamid: t, year: i, ePrivacy: a } = o,
            l = ne();
          return (0, e.jsx)(on.Ii, {
            href: `${N.TS.STORE_BASE_URL}replay/${t}/${i}`,
            className: B()({
              [rn.IsPrivate]: a == Z,
              [rn.FriendCtn]: !0,
              [l.FriendCtn]: !0,
            }),
            children: (0, e.jsx)(Hs.p, {
              accountID: new lt.b2(t).GetAccountID(),
              bHideWhenNotAvailable: !0,
              bLink: !1,
            }),
          });
        }
        var Vs = r(2259),
          Fs = r(9519);
        function ln(o) {
          return `${N.TS.STORE_CDN_URL}public/images/yearinreview/${o}`;
        }
        var Zs = r(40216),
          sn = r.n(Zs),
          Rn = r(58861),
          ki = r(93340);
        li();
        const Ke = 100;
        var $s = ((o) => (
          (o.windows = "windows"),
          (o.linux = "linux"),
          (o.deck = "deck"),
          (o.mac = "mac"),
          (o.vr = "vr"),
          o
        ))($s || {});
        function Js(o) {
          const { userYearInReview: t } = o,
            i = t.GetPlayTimeStats(),
            a = i.total_stats,
            l = i.game_summary,
            c = be(),
            d = ne(),
            m = (0, A.useMemo)(() => {
              const j = new Array();
              return (
                typeof a.windows_playtime_percentagex100 == "number" &&
                  a.windows_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "windows",
                    name: x.c.Localize("#YIR_Platfrom_windows"),
                    value: a.windows_playtime_percentagex100,
                  }),
                typeof a.linux_playtime_percentagex100 == "number" &&
                  a.linux_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "linux",
                    name: x.c.Localize("#YIR_Platfrom_linux"),
                    value: a.linux_playtime_percentagex100,
                  }),
                typeof a.macos_playtime_percentagex100 == "number" &&
                  a.macos_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "mac",
                    name: x.c.Localize("#YIR_Platfrom_macos"),
                    value: a.macos_playtime_percentagex100,
                  }),
                typeof a.vr_playtime_percentagex100 == "number" &&
                  a.vr_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "vr",
                    name: x.c.Localize("#YIR_Platfrom_vr"),
                    value: a.vr_playtime_percentagex100,
                  }),
                typeof a.deck_playtime_percentagex100 == "number" &&
                  a.deck_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "deck",
                    name: x.c.Localize("#YIR_Platfrom_deck"),
                    value: a.deck_playtime_percentagex100,
                  }),
                j
              );
            }, [a]),
            g = (0, A.useMemo)(() => {
              const j = new Array();
              return (
                typeof a.windows_playtime_percentagex100 == "number" &&
                  a.windows_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "windows",
                    name: x.c.Localize("#YIR_Platfrom_windows"),
                    value: l.filter((P) => P.played_windows).length,
                  }),
                typeof a.linux_playtime_percentagex100 == "number" &&
                  a.linux_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "linux",
                    name: x.c.Localize("#YIR_Platfrom_linux"),
                    value: l.filter((P) => P.played_linux).length,
                  }),
                typeof a.macos_playtime_percentagex100 == "number" &&
                  a.macos_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "mac",
                    name: x.c.Localize("#YIR_Platfrom_macos"),
                    value: l.filter((P) => P.played_mac).length,
                  }),
                typeof a.vr_playtime_percentagex100 == "number" &&
                  a.vr_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "vr",
                    name: x.c.Localize("#YIR_Platfrom_vr"),
                    value: l.filter((P) => P.played_vr).length,
                  }),
                typeof a.deck_playtime_percentagex100 == "number" &&
                  a.deck_playtime_percentagex100 > Ke &&
                  j.push({
                    id: "deck",
                    name: x.c.Localize("#YIR_Platfrom_deck"),
                    value: l.filter((P) => P.played_deck).length,
                  }),
                j
              );
            }, [a, l]);
          if (m.length < 2) return null;
          const y = qi(a);
          return (0, e.jsx)(Ne, {
            className: B()(ue().PlatformChartsCtn, d.PlatformChartsCtn),
            children: (0, e.jsxs)("div", {
              className: B()(f().YearInReviewContent, ue().PlatformSpacing),
              children: [
                (0, e.jsx)("div", {
                  className: f().SectionTitle,
                  children: c("#YIR_Platform"),
                }),
                (0, e.jsxs)("div", {
                  className: ue().PlatformChartsRow,
                  children: [
                    (0, e.jsxs)("div", {
                      className: ue().PieCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: ue().GraphTitle,
                          children: x.c.Localize("#YIR_Platfrom_playtime"),
                        }),
                        (0, e.jsxs)(si.r, {
                          responsive: !0,
                          style: { width: "90%", aspectRatio: 1 },
                          children: [
                            (0, e.jsx)(ai.F, {
                              data: m,
                              dataKey: "value",
                              nameKey: "name",
                              cx: "50%",
                              cy: "50%",
                              innerRadius: "40%",
                              outerRadius: "80%",
                              fill: "#8884d8",
                              paddingAngle: 1,
                              children: m.map((j, P) =>
                                (0, e.jsx)(
                                  Mn.f,
                                  { fill: d[`pie_${j.id}`] },
                                  `cell-${P}`,
                                ),
                              ),
                            }),
                            (0, e.jsx)(Rn.m, {
                              content: (j) =>
                                (0, e.jsx)(Xs, {
                                  active: j.active,
                                  payload: j.payload,
                                }),
                            }),
                            (0, e.jsx)(ki.s, {}),
                          ],
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: ue().PieCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: ue().GraphTitle,
                          children: x.c.Localize("#YIR_Platfrom_games"),
                        }),
                        (0, e.jsxs)(si.r, {
                          responsive: !0,
                          style: { width: "90%", aspectRatio: 1 },
                          children: [
                            (0, e.jsx)(ai.F, {
                              data: g,
                              dataKey: "value",
                              nameKey: "name",
                              cx: "50%",
                              cy: "50%",
                              innerRadius: "40%",
                              outerRadius: "80%",
                              fill: "#82ca9d",
                              paddingAngle: 1,
                              children: g.map((j, P) =>
                                (0, e.jsx)(
                                  Mn.f,
                                  { fill: d[`pie_${j.id}`] },
                                  `cell-${P}`,
                                ),
                              ),
                            }),
                            (0, e.jsx)(Rn.m, {
                              content: (j) =>
                                (0, e.jsx)(ks, {
                                  active: j.active,
                                  payload: j.payload,
                                }),
                            }),
                            (0, e.jsx)(ki.s, {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (y.bDeck || y.bVR) &&
                  (0, e.jsx)("div", {
                    className: B()(f().SectionTitle, ue().PlatformDetailsSetup),
                    children: c("#YIR_Platform_DiveIn"),
                  }),
              ],
            }),
          });
        }
        function Xs(o) {
          const { active: t, payload: i } = o;
          if (t && i && i.length) {
            const a = i[0].value;
            return (0, e.jsxs)(nn.t1, {
              children: [
                i[0].name,
                ": ",
                x.c.Localize("#YIR_Percent_Playtime", De(a)),
              ],
            });
          }
          return null;
        }
        function ks(o) {
          const { active: t, payload: i } = o;
          if (t && i && i.length) {
            const a = i[0].value,
              l = i[0].name;
            return (0, e.jsx)(nn.t1, {
              children: x.c.Localize(
                a === 1
                  ? "#YIR_Platfrom_gamesplays_tooltip"
                  : "#YIR_Platfrom_gamesplays_tooltip_Plural",
                (0, je.D)(a),
                l,
              ),
            });
          }
          return null;
        }
        const Cn = 100;
        function qs(o) {
          const { userYearInReview: t } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Js, { userYearInReview: t }),
              (0, e.jsx)(ta, { userYearInReview: t }),
            ],
          });
        }
        function _s(o) {
          const { userYearInReview: t, strClassName: i, nYear: a } = o,
            l = t.GetRawStats(),
            c = be(),
            d = void 0,
            m = c("#YIR_TopGames_deck_subtitle"),
            {
              nTotalGames: g,
              nTotalSessions: y,
              nTotalPercentage: j,
            } = (0, A.useMemo)(() => an(l, "deck"), [l]),
            { rgResults: P } = (0, A.useMemo)(
              () => Nn(t, "deck", 5, j),
              [t, j],
            ),
            H = Number(Math.round(j / 100).toFixed(0));
          let K = c("#YIR_TopGames_deck_new");
          H > 50 && (K = c("#YIR_TopGames_deck_mostly"));
          const Q = (0, A.useRef)(null),
            It = (0, Vs.wY)((pe) => {
              Q.current &&
                Q.current.style.setProperty(
                  "--contentSize",
                  `${pe.contentRect.width}px`,
                );
            }),
            [$t, Gt] = A.useState(!1),
            Kt = A.useCallback((pe) => {
              pe && Gt(!0);
            }, []),
            ge = (0, e.jsx)(un, {
              endValue: g,
              duration: 2e3,
              startAnimation: $t,
            }),
            Wt = (0, e.jsx)(un, {
              endValue: y,
              duration: 2e3,
              startAnimation: $t,
            }),
            qt = (0, A.useRef)(null);
          return (
            (0, Fs.q)(qt),
            (0, e.jsxs)("div", {
              className: B()(i, Dt().PlatformContentsCtn, sn().DeckContainer),
              ref: Q,
              children: [
                (0, e.jsx)("div", {
                  className: B()(Dt().SectionTitle, sn().SectionTitle),
                  children: K,
                }),
                (0, e.jsxs)("div", {
                  className: sn().ScreenContainer,
                  ref: It,
                  children: [
                    (0, e.jsxs)("div", {
                      className: sn().PlatformDataContainer,
                      children: [
                        (0, e.jsxs)(jn.J, {
                          onVisibilityChange: Kt,
                          className: B()(
                            f().YearInReviewContent,
                            Dt().StatsRow,
                            sn().StatsRow,
                          ),
                          children: [
                            (0, e.jsxs)("div", {
                              className: Dt().StatBlock,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Dt().BigNum,
                                  children: ge,
                                }),
                                (0, e.jsx)("div", {
                                  className: Dt().StatDescription,
                                  children: x.c.LocalizePlural(
                                    "#YIR_NewLine_Games",
                                    g,
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: Dt().StatBlock,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Dt().BigNum,
                                  children: Wt,
                                }),
                                (0, e.jsx)("div", {
                                  className: Dt().StatDescription,
                                  children: x.c.LocalizePlural(
                                    "#YIR_NewLine_Session",
                                    y,
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)(Ki, {
                              percentVal: j,
                              subToken: "#YIR_NewLine",
                            }),
                          ],
                        }),
                        !!d &&
                          (0, e.jsx)("div", {
                            className: B()(
                              Dt().SectionSubTitle,
                              sn().SectionSubTitle,
                            ),
                            children: d,
                          }),
                        (0, e.jsx)(Ne, {
                          className: ue().SteamDeckGameCapRow,
                          children: (0, e.jsx)(Hi, {
                            rgGamePercentages: P,
                            category: "deck",
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("video", {
                      className: sn().Video,
                      poster:
                        "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg",
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      autoPlay: !0,
                      controls: !1,
                      ref: qt,
                      children: [
                        (0, e.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.webm",
                          type: "video/webm",
                        }),
                        (0, e.jsx)("source", {
                          src: "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesExport.mp4",
                          type: "video/mp4",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: B()(Dt().Disclaimer, sn().Disclaimer),
                  children: m,
                }),
              ],
            })
          );
        }
        function qi(o) {
          return {
            bDeck:
              typeof o.deck_playtime_percentagex100 == "number" &&
              o.deck_playtime_percentagex100 > Cn,
            bVR:
              typeof o.vr_playtime_percentagex100 == "number" &&
              o.vr_playtime_percentagex100 > Cn,
          };
        }
        function ta(o) {
          const { userYearInReview: t } = o,
            i = t.GetYear(),
            a = be(),
            l = t.GetPlayTimeStats().total_stats,
            c =
              l.controller_playtime_percentagex100 +
              l.deck_playtime_percentagex100;
          let d = !1;
          c > 7e3 && (d = !0);
          const m = qi(l);
          return (0, e.jsxs)(di.K, {
            rootMargin: "0px 0px 100% 0px",
            children: [
              !!m.bDeck &&
                (0, e.jsx)(Ne, {
                  className: B()(Dt().Section, Dt().Deck),
                  children: (0, e.jsx)(_s, { userYearInReview: t, nYear: i }),
                }),
              !!m.bVR &&
                (0, e.jsx)(Ne, {
                  className: B()(Dt().Section, Dt().VR),
                  children: (0, e.jsx)(Wn, {
                    category: "vr",
                    userYearInReview: t,
                    bgImageURL: ln("vr_background6.webp"),
                    title: a("#YIR_TopGames_vr"),
                    subTitle: void 0,
                  }),
                }),
              c > 1e3 &&
                (0, e.jsx)(Ne, {
                  className: B()(Dt().Section, Dt().Controller),
                  children: (0, e.jsx)(Wn, {
                    category: "controller",
                    userYearInReview: t,
                    title: a(
                      d
                        ? "#YIR_TopGames_controllerMost"
                        : "#YIR_TopGames_controller",
                      De(c),
                    ),
                    subTitle: a(
                      "#YIR_Platform_subtitle_controller",
                      x.c.Localize("#YIR_Platfrom_controller_forsubtitle"),
                    ),
                  }),
                }),
              i >= 2024 &&
                (0, e.jsx)(Le.tH, {
                  children: (0, e.jsx)(ea, { userYearInReview: t }),
                }),
            ],
          });
        }
        function ea(o) {
          const { userYearInReview: t } = o,
            i = be(),
            [a, l] = (0, A.useMemo)(
              () => [
                t
                  .GetDemoByPlaytime()
                  .filter(Boolean)
                  .map((c) => c.total_playtime_percentagex100)
                  .reduce((c, d) => c + d, 0),
                t
                  .GetPlaytestByPlaytime()
                  .filter(Boolean)
                  .map((c) => c.total_playtime_percentagex100)
                  .reduce((c, d) => c + d, 0),
              ],
              [t],
            );
          return (0, e.jsxs)(e.Fragment, {
            children: [
              a > Cn &&
                (0, e.jsxs)(Ne, {
                  className: B()(Dt().Section, Dt().Demo),
                  children: [
                    (0, e.jsx)("div", { className: Dt().BG_Demo }),
                    (0, e.jsx)(Wn, {
                      category: "demo",
                      userYearInReview: t,
                      title: i("#YIR_TopGames_demo"),
                      subTitleTokenIfMax: "#YIR_TopGames_demoMax",
                    }),
                  ],
                }),
              l > Cn &&
                (0, e.jsxs)(Ne, {
                  className: B()(Dt().Section, Dt().Playtest),
                  children: [
                    (0, e.jsx)("div", { className: Dt().BG_Playtest }),
                    (0, e.jsx)(Wn, {
                      category: "playtest",
                      userYearInReview: t,
                      title: i("#YIR_TopGames_playtest"),
                      subTitleTokenIfMax: "#YIR_TopGames_playtestMax",
                    }),
                  ],
                }),
            ],
          });
        }
        var na = r(11498),
          Ie = r.n(na);
        function ia(o) {
          const { userYearInReview: t } = o;
          if (qe()) return null;
          const i = t.GetPlayTimeStats().playtime_streak;
          return !i ||
            (typeof i.longest_consecutive_days == "number" &&
              i.longest_consecutive_days < 5)
            ? null
            : (0, e.jsx)(ra, { ...o, longestStreak: i });
        }
        function ra(o) {
          const { userYearInReview: t, longestStreak: i } = o,
            a = be(),
            l = Oi(),
            c = ne(),
            [d, m] = A.useState(!1),
            g = A.useCallback((Wt) => {
              Wt && m(!0);
            }, []),
            [y, j] = A.useState(!1),
            P = A.useCallback((Wt) => {
              Wt &&
                window.setTimeout(() => {
                  j(!0);
                }, 30);
            }, []),
            [H, K] = A.useState(!1),
            Q = 12,
            It = i.streak_games.length > Q && !H,
            $t = It
              ? i.streak_games.sort((Wt, qt) => Wt.appid - qt.appid).slice(0, Q)
              : i.streak_games.sort((Wt, qt) => Wt.appid - qt.appid),
            Gt = $t.map((Wt) => Wt.appid),
            Kt = i.streak_games.length,
            ge = i.longest_consecutive_days ?? 0;
          return (0, e.jsxs)("div", {
            className: B()(
              ue().StreakCtn,
              Ie().StreakCtn,
              Ie().Section,
              c.Section,
            ),
            children: [
              (0, e.jsx)("div", {
                className: B()(
                  Ie().LongestStreakBgImage,
                  c.LongestStreakBgImage,
                ),
              }),
              (0, e.jsxs)("div", {
                className: f().YearInReviewContent,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ie().SectionTitle,
                    children: [
                      (0, e.jsx)(jn.J, {
                        className: Ie().LongestStreakDailyCount,
                        onVisibilityChange: g,
                        children: a(
                          "#YIR_Longest_Streak_Title",
                          (0, e.jsx)(un, {
                            className: Ie().LongestStreakNumber,
                            endValue: ge,
                            duration: 2e3,
                            startAnimation: d,
                          }),
                        ),
                      }),
                      (0, e.jsxs)(Ne, {
                        className: Ie().StreakBarCtn,
                        children: [
                          (0, e.jsx)("div", { className: Ie().StreakSizeCtn }),
                          (0, e.jsx)("div", {
                            className: B()(
                              Ie().StreakSizeFullBar,
                              c.StreakSizeFullBar,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: B()({
                              [Ie().StreakTickCtn]: !0,
                              [Ie().LargerTicks]: ge < 40,
                            }),
                            children: (0, e.jsx)(aa, { nDays: ge - 1 }),
                          }),
                          (0, e.jsx)("div", { className: Ie().StreakSizeCtn }),
                        ],
                      }),
                      (0, e.jsxs)(Ne, {
                        className: Ie().StreakDates,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ie().StreakStart,
                            children: l(i.rtime_start ?? 0),
                          }),
                          (0, e.jsx)("div", {
                            className: Ie().StreakEnd,
                            children: l(
                              (i.rtime_start ?? 0) + ge * 24 * 60 * 60,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)(jn.J, {
                    onVisibilityChange: P,
                    className: B()(
                      ue().LongestStreakGamesWrapper,
                      Ie().LongestStreakGamesWrapper,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: B()(
                          Ie().CapRowTitle,
                          y && Ie().AnimateTitle,
                        ),
                        children: a(
                          Kt > 1
                            ? "#YIR_Longest_Streak_Games"
                            : "#YIR_Longest_Streak_Games_Singular",
                          (0, je.D)(Kt),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: B()(Ie().CapRowCtn),
                        children: (0, e.jsx)(Pe.Z, {
                          "flow-children": "grid",
                          className: B()(
                            ue().CapRow,
                            ue().LongestStreak,
                            y && ue().AnimateCap,
                          ),
                          children: $t.map((Wt, qt) => {
                            const pe = t.GetGameSummaryForApp(Wt.appid);
                            return (0, e.jsx)(
                              ni,
                              {
                                appid: Wt.appid,
                                index: qt,
                                loading: "lazy",
                                rgAppIDs: Gt,
                                nParentAppID: pe?.parent_appid,
                                eChildType: sa(pe),
                              },
                              "longest_" + Wt.appid,
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                  It &&
                    (0, e.jsx)("div", {
                      className: ue().MoreButtonContainer,
                      children: (0, e.jsx)("a", {
                        href: "#",
                        className: ue().ShowMoreBtn,
                        onClick: () => K(!0),
                        children: x.c.Localize("#YIR_ShowMore"),
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function sa(o) {
          if (o?.demo) return Ze.uE.ue;
          if (o?.playtest) return Ze.uE.Vi;
        }
        function aa(o) {
          const { nDays: t } = o,
            i = [];
          if (t > 0) {
            for (let a = 0; a < t + 2; ++a)
              i.push(
                (0, e.jsx)(
                  "div",
                  { className: Ie().Tick },
                  "DrawNDivForStreakDays" + a,
                ),
              );
            return (0, e.jsx)(e.Fragment, { children: i });
          }
          return null;
        }
        var Un = r(1946);
        function oa(o) {
          const { steamid: t, year: i } = o,
            a = ne(),
            { rgOtherYears: l } = Ii(),
            c = be();
          return l.length === 0
            ? null
            : (0, e.jsxs)("div", {
                className: Un.OtherYearsCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: B()(Un.OtherYearsHeader, a.OtherYearsHeader),
                    children: c("#YearInReview_OtherYearLinks_Header"),
                  }),
                  (0, e.jsx)("div", {
                    className: B()(Un.OtherYearLinks, a.OtherYearLinks),
                    children: l.map((d) =>
                      (0, e.jsx)(
                        on.Ii,
                        {
                          href: `${N.TS.STORE_BASE_URL}replay/${t}/${d}?src=${_}`,
                          className: B()(Un.OtherYearLink, a.OtherYearLink),
                          children: d,
                        },
                        d,
                      ),
                    ),
                  }),
                ],
              });
        }
        var G = r(60197),
          Ue = r.n(G),
          la = r(88003),
          ca = r(24806),
          mi = r(99412),
          da = r(96538);
        const _i = "0123456789abcdef",
          tr = "bcdfghjkmnpqrtvw";
        function er(o, t, i) {
          return Array.from(o, (a) => {
            const l = t.indexOf(a);
            return l >= 0 ? i[l] : a;
          }).join("");
        }
        function ma(o) {
          if (!o) return "";
          const t = new lt.b2(o).GetAccountID();
          return er(t.toString(16), _i, tr);
        }
        function Uo(o) {
          const t = er(o.toLowerCase(), tr, _i).replace(/[^0-9a-f]/g, "");
          return t ? parseInt(t, 16) : 0;
        }
        var ua = r(91085),
          gn = r(41672);
        function nr(o) {
          const { steamid: t, nYear: i } = o,
            a = _n(),
            l = ne();
          if (!N.iA.logged_in) return null;
          if (!a && N.iA.logged_in)
            return (0, e.jsx)(on.Ii, {
              className: B()(G.SeeRewindButton, l.SeeRewindButton),
              href: `${N.TS.STORE_BASE_URL}replay/${N.iA.steamid}/${i}?src=${it}`,
              children: x.c.Localize("#YIR_SeeYourRewind"),
            });
          const c = () => {
            (0, la.pg)((0, e.jsx)(va, { steamid: t, nYear: i }), window, {
              strTitle: tn.Z.Localize("#Button_Share"),
            });
          };
          return (0, e.jsxs)(Pe.Z, {
            className: G.YIRShareCtn,
            children: [
              (0, e.jsx)(ir, { steamid: t, nYear: i }),
              (0, e.jsxs)(Pe.Z, {
                className: G.ShareButton,
                onActivate: c,
                children: [
                  (0, e.jsx)(Te.SYj, { className: B()(G.ShareIcon) }),
                  (0, e.jsx)("span", {
                    className: B()(G.ShareText),
                    children: tn.Z.Localize("#Button_Share"),
                  }),
                ],
              }),
            ],
          });
        }
        function ir(o) {
          const { steamid: t, nYear: i } = o,
            [a, l] = (0, A.useState)(""),
            c = Bi(t, i),
            { mutateAsync: d } = Br(t, i),
            m = (0, A.useMemo)(() => c === v || c === D, [c]),
            g = [
              { data: Z, label: x.c.Localize("#YIR_ShareVisbility_Private") },
              {
                data: D,
                label: x.c.Localize("#YIR_ShareVisbility_FriendsOnly"),
              },
              { data: v, label: x.c.Localize("#YIR_ShareVisbility_Public") },
            ],
            y = async (j) => {
              if (j.data !== c) {
                const { eResult: P } = await d(j.data),
                  H = P != L.R ? ga(P) : "";
                H && l(H);
              }
            };
          return (0, e.jsxs)(Pe.Z, {
            "flow-children": "column",
            children: [
              (0, e.jsx)("div", {
                className: B()(G.PrivacyWarning, m ? G.Visible : ""),
                children: m
                  ? x.c.Localize("#YIR_ShareVisbility")
                  : x.c.Localize("#YIR_ShareModal_DisabledShareTtp"),
              }),
              (0, e.jsx)("div", {
                className: G.DropDownSizer,
                children: (0, e.jsx)(qn.ZU, {
                  strDropDownButtonClassName: G.DropdownButton,
                  strDropDownClassName: G.DropdownOption,
                  rgOptions: g,
                  selectedOption: c,
                  onChange: y,
                }),
              }),
              a && (0, e.jsx)("div", { className: G.Error, children: a }),
            ],
          });
        }
        function ga(o) {
          return o === L.S7 ? "Servers are busy, please try again later" : "";
        }
        function ha(o) {
          return `y${o % 100}`;
        }
        const fa = "l";
        function va(o) {
          const { closeModal: t, steamid: i, nYear: a } = o,
            [l, c] = (0, A.useState)(),
            d = Bi(i, a),
            m = (0, A.useMemo)(() => d === v || d === D, [d]),
            [g, y] = (0, A.useState)((0, mi.sfN)(N.TS.LANGUAGE)),
            j = (0, A.useMemo)(() => (0, mi.LgB)(g), [g]),
            P = ma(i),
            H = `https://s.team/${ha(a)}/${P}`,
            K = (0, A.useMemo)(() => {
              const It = new URL(H);
              return It.searchParams.set(fa, j), It.href;
            }, [j, H]),
            Q = () => {
              c(!0);
            };
          return l
            ? (0, e.jsx)(ua.J, { eventLink: K, closeModal: t })
            : (0, e.jsx)(da.o0, {
                strDescription: "",
                strTitle: x.c.Localize("#YIR_ShareModal_Title"),
                onCancel: t,
                onOK: t,
                bAlertDialog: !0,
                modalClassName: G.ShareModalDialogCtn,
                children: (0, e.jsxs)("div", {
                  className: G.ShareModal,
                  children: [
                    (0, e.jsx)("div", {
                      className: G.ShareLanguagePicker,
                      children: (0, e.jsx)("div", {
                        className: G.LangaugeDropdown,
                        children: (0, e.jsx)(ca.Ng, {
                          selectedLang: g,
                          fnOnLanguageChanged: y,
                          fnFilterLanguage: (It) => It !== mi.X51,
                        }),
                      }),
                    }),
                    (0, e.jsx)(ya, {
                      language: j,
                      steamid: i,
                      nYear: a,
                      shareUrl: K,
                    }),
                    (0, e.jsxs)("div", {
                      className: G.FooterCtn,
                      children: [
                        (0, e.jsx)(ir, { steamid: i, nYear: a }),
                        (0, e.jsx)("div", {
                          className: B()(G.VisBorder, !m && G.Disabled),
                          children: N.TS.IN_MOBILE_WEBVIEW
                            ? (0, e.jsx)(ba, {
                                bCanShare: m,
                                shareUrl: K,
                                shareOnSteamActivityFeed: Q,
                              })
                            : (0, e.jsx)(ja, {
                                nYear: a,
                                bCanShare: m,
                                shareUrl: K,
                                shortAccountCode: P,
                                language: j,
                                shareOnSteamActivityFeed: Q,
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function ya(o) {
          const { language: t, steamid: i, nYear: a, shareUrl: l } = o,
            [c, d] = (0, A.useState)(0),
            [m, g] = (0, A.useState)(!1),
            { isLoading: y, data: j } = Or(i, a, t),
            P = j ? j.length - 1 : 0,
            H = `${N.TS.BASE_URL_SHARED_CDN}social_sharing/`,
            K = (Gt) => {
              c > 0 && (d(c - 1), Gt.stopPropagation());
            },
            Q = (Gt) => {
              c < P && (d(c + 1), Gt.stopPropagation());
            },
            It = (Gt) => {
              g(!0), Gt.stopPropagation();
            },
            $t = (Gt) => {
              g(!1), Gt.stopPropagation();
            };
          return (
            (0, gn.E)("ArrowLeft", K),
            (0, gn.E)("Left", K),
            (0, gn.E)("ArrowRight", Q),
            (0, gn.E)("Right", Q),
            y
              ? (0, e.jsx)("div", {
                  className: B()(G.CarouselCtn, G.LoadingCtn),
                  children: (0, e.jsx)(Bn.t, { position: "center" }),
                })
              : j
                ? (0, e.jsxs)("div", {
                    className: G.CarouselCtn,
                    children: [
                      m &&
                        (0, e.jsx)(pa, {
                          carouselIndex: c,
                          endPreviewImage: $t,
                          onMoveLeft: K,
                          onMoveRight: Q,
                          name: j[c].name,
                          url: `${H}${j[c].url_path}`,
                          maxIndex: P,
                        }),
                      (0, e.jsxs)("div", {
                        className: G.ImageArrowCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: B()(
                              G.Arrow,
                              G.Left,
                              c === 0 && G.ArrowDisabled,
                            ),
                            onClick: K,
                            children: (0, e.jsx)(Te.V5W, { angle: 270 }),
                          }),
                          (0, e.jsx)("div", {
                            className: B()(
                              G.Arrow,
                              G.Right,
                              c === P && G.ArrowDisabled,
                            ),
                            onClick: Q,
                            children: (0, e.jsx)(Te.V5W, { angle: 90 }),
                          }),
                          (0, e.jsxs)("div", {
                            className: G.ImagesCtn,
                            children: [
                              (0, e.jsx)("div", {
                                className: B()(G.Peek, G.LeftPeak),
                                children:
                                  c !== 0 &&
                                  (0, e.jsx)("img", {
                                    alt: "",
                                    className: G.PeakImg,
                                    src: `${H}${j[c - 1].url_path}`,
                                  }),
                              }),
                              (0, e.jsx)("div", {
                                className: G.CenterImage,
                                children: (0, e.jsxs)("div", {
                                  className: G.ImgAndPreviewCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      onClick: It,
                                      className: G.PreviewMask,
                                      children: x.c.Localize(
                                        "#YIR_ShareModal_FullscreenPreview",
                                      ),
                                    }),
                                    (0, e.jsx)("img", {
                                      alt: "",
                                      className: G.CenterImg,
                                      src: `${H}${j[c].url_path}`,
                                    }),
                                  ],
                                }),
                              }),
                              (0, e.jsx)("div", {
                                className: B()(G.Peek, G.RightPeak),
                                children:
                                  c !== P &&
                                  (0, e.jsx)("img", {
                                    alt: "",
                                    className: G.PeakImg,
                                    src: `${H}${j[c + 1].url_path}`,
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      N.TS.IN_MOBILE_WEBVIEW
                        ? (0, e.jsx)(xa, {
                            imageUrl: `${H}${j[c].url_path}`,
                            shareUrl: l,
                          })
                        : N.TS.IN_CLIENT
                          ? null
                          : (0, e.jsx)(Ba, {
                              imageUrl: `${H}${j[c].url_path}`,
                            }),
                      (0, e.jsx)("div", {
                        className: G.CarouselHintCtn,
                        children: j.map((Gt, Kt) =>
                          (0, e.jsx)(
                            "div",
                            {
                              className: B()(
                                G.CarouselHint,
                                Kt === c ? G.ActiveHint : null,
                              ),
                            },
                            `${Kt}_hint`,
                          ),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: G.FormatHint,
                        children: x.c.Localize(
                          `#YIR_ShareModal_ImageCaption_${j[c].name}`,
                        ),
                      }),
                    ],
                  })
                : (0, e.jsx)("div", {
                    className: B()(G.CarouselCtn, G.LoadingCtn),
                    children: (0, e.jsx)("div", {
                      children: x.c.Localize(
                        "#YIR_ShareModal_FailedToGenerateImages",
                      ),
                    }),
                  })
          );
        }
        function pa(o) {
          const {
            carouselIndex: t,
            maxIndex: i,
            onMoveLeft: a,
            onMoveRight: l,
            endPreviewImage: c,
            name: d,
            url: m,
          } = o;
          return (
            (0, gn.E)("Escape", c),
            (0, gn.E)("Esc", c),
            (0, e.jsx)("div", {
              className: G.PreviewImageCtn,
              children: (0, e.jsx)("div", {
                className: G.PreviewClickCtn,
                onClick: c,
                children: (0, e.jsxs)("div", {
                  className: G.PreviewAndIconCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: G.CloseIcon,
                      children: (0, e.jsx)(Te.sED, {}),
                    }),
                    (0, e.jsx)("div", {
                      className: B()(
                        G.Arrow,
                        G.Left,
                        t === 0 && G.ArrowDisabled,
                      ),
                      onClick: a,
                      children: (0, e.jsx)(Te.V5W, { angle: 270 }),
                    }),
                    (0, e.jsx)("div", {
                      className: B()(
                        G.Arrow,
                        G.Right,
                        t === i && G.ArrowDisabled,
                      ),
                      onClick: l,
                      children: (0, e.jsx)(Te.V5W, { angle: 90 }),
                    }),
                    (0, e.jsx)("img", {
                      alt: "",
                      className: G[`PreviewImage_${d}`],
                      src: m,
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function Ba(o) {
          const t = () => {
            fetch(o.imageUrl)
              .then((i) => i.blob())
              .then((i) => URL.createObjectURL(i))
              .then((i) => {
                const a = document.createElement("a");
                (a.href = i),
                  (a.download = ""),
                  document.body.appendChild(a),
                  a.click(),
                  document.body.removeChild(a);
              });
          };
          return (0, e.jsxs)("div", {
            className: G.InteractButton,
            onClick: t,
            children: [
              (0, e.jsx)(Te.MQO, { className: G.InteractButtonIcon }),
              (0, e.jsx)("span", {
                className: B()(G.InteractButtonText),
                children: x.c.Localize("#YIR_ShareModal_SaveImage"),
              }),
            ],
          });
        }
        function xa(o) {
          const { imageUrl: t, shareUrl: i } = o,
            a = () => {
              const l = Reflect.get(window, "ReactNativeWebView");
              if (l?.postMessage) {
                const c = {
                  event_name: "shareimage",
                  link: t,
                  url: t,
                  subject: x.c.Localize("#YIR_ShareModal_MobileSubject"),
                  message: i,
                  title: x.c.Localize("#YIR_ShareModal_MobileMessage"),
                };
                l.postMessage(JSON.stringify(c));
                return;
              }
            };
          return (0, e.jsxs)("div", {
            className: G.InteractButton,
            onClick: a,
            children: [
              (0, e.jsx)(Te.SYj, { className: G.InteractButtonIcon }),
              (0, e.jsx)("span", {
                className: B()(G.InteractButtonText),
                children: x.c.Localize("#YIR_ShareModal_ShareImage"),
              }),
            ],
          });
        }
        function ja(o) {
          const {
              bCanShare: t,
              shareUrl: i,
              shortAccountCode: a,
              language: l,
              nYear: c,
              shareOnSteamActivityFeed: d,
            } = o,
            [m, g] = (0, A.useState)(!1),
            y = () => {
              navigator.clipboard.writeText(i), g(!0);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: G.ShareURLTitle,
                children: x.c.Localize("#YIR_ShareModal_YourLink"),
              }),
              (0, e.jsxs)("div", {
                className: G.ShareURLCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: G.ShareShortUrl,
                    children: i,
                  }),
                  (0, e.jsxs)("div", {
                    className: B()(G.ShareLinkButton),
                    onClick: y,
                    children: [
                      (0, e.jsx)(Te.SYj, { className: G.ShareLinkIcon }),
                      (0, e.jsx)("span", {
                        className: B()(G.ShareLinkText),
                        children: x.c.Localize(
                          m
                            ? "#YIR_ShareModal_CopyLink_Success"
                            : "#YIR_ShareModal_CopyLink",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className: B()(G.SocialButtons, G.SteamButtons),
                children: [
                  (0, e.jsxs)("div", {
                    onClick: d,
                    className: B()(G.ShareLinkButton, G.FeedBtn),
                    children: [
                      (0, e.jsx)(Te.Qte, { className: G.ShareLinkIcon }),
                      (0, e.jsx)("span", {
                        className: B()(G.ShareLinkText),
                        children: x.c.Localize(
                          "#YIR_ShareModal_ShareOnFriendsActivity",
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("a", {
                    href: `${N.TS.COMMUNITY_BASE_URL}profiles/${N.iA.steamid}/edit/showcases`,
                    className: B()(G.ShareLinkButton, G.FeedBtn),
                    children: [
                      (0, e.jsx)(Te.KJW, { className: G.ShareLinkIcon }),
                      (0, e.jsx)("span", {
                        className: B()(G.ShareLinkText),
                        children: x.c.Localize("#YIR_ShareModal_AddShowcase"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function ba(o) {
          const { bCanShare: t, shareUrl: i, shareOnSteamActivityFeed: a } = o,
            l = () => {
              const c = Reflect.get(window, "ReactNativeWebView");
              if (c?.postMessage) {
                const d = {
                  event_name: "share",
                  link: i,
                  url: i,
                  subject: x.c.Localize("#YIR_ShareModal_MobileSubject"),
                  message: x.c.Localize("#YIR_ShareModal_MobileMessage"),
                  title: x.c.Localize("#YIR_ShareModal_MobileMessage"),
                };
                c.postMessage(JSON.stringify(d));
                return;
              }
            };
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)("div", {
              className: G.MobileCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: B()(G.ShareLinkButton, !t && G.Disabled),
                  onClick: l,
                  children: [
                    (0, e.jsx)(Te.SYj, { className: G.ShareLinkIcon }),
                    (0, e.jsx)("span", {
                      className: B()(G.ShareLinkText),
                      children: x.c.Localize("#YIR_ShareModal_ShareLink"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  onClick: a,
                  className: B()(G.ShareLinkButton, !t && G.Disabled),
                  children: [
                    (0, e.jsx)(Te.Qte, { className: G.ShareLinkIcon }),
                    (0, e.jsx)("span", {
                      className: B()(G.ShareLinkText),
                      children: x.c.Localize(
                        "#YIR_ShareModal_ShareOnFriendsActivity",
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function ui(o) {
          return o >= 2024;
        }
        function Ma(o) {
          const { userYearInReview: t } = o,
            i = t.GetYear(),
            a = t.GetPlayTimeStats().total_stats,
            l = t.GetPlayTimeStats().demos_played || 0,
            c = t.GetPlayTimeStats().playtests_played || 0,
            d = t.GetFilteredGameSummary(),
            m = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            g = d.filter((Kt) => Kt.new_this_year).length || 0,
            y = t.GetPlayTimeStats().playtime_streak,
            j = t.GetTopGamesShown(),
            P = be(),
            H = (0, A.useMemo)(() => j.slice(0, 5), [j]),
            K = (0, A.useMemo)(() => H.map((Kt) => Kt.appid), [H]),
            { data: Q } = mn(K),
            It = H.map((Kt, ge) =>
              Q?.has(Kt.appid)
                ? (0, e.jsx)(
                    Da,
                    { gameStat: Kt, gridClass: `Game${ge}` },
                    `${ge}_${Kt.appid}`,
                  )
                : null,
            ).filter((Kt) => Kt !== null),
            $t = [
              Ta(m, t),
              La(i, a),
              Aa(
                i,
                y,
                ui(i) ? t.GetPreviousYearSummary()?.longest_streak : void 0,
              ),
            ].filter((Kt) => Kt !== null),
            Gt = (0, e.jsx)(
              za,
              {
                rgGamesLength: d.length,
                nNewGames: g,
                nDemoPlayed: l,
                nPlaytestPlayed: c,
                nYear: t.GetYear(),
                nPreviousYearsGames: ui(i)
                  ? t.GetPreviousYearSummary()?.games_played
                  : void 0,
              },
              "overview",
            );
          return (0, e.jsx)(Ne, {
            children: (0, e.jsxs)("div", {
              className: B()(f().YearInReviewContent, f().SummaryArea),
              children: [
                (0, e.jsx)(Na, {
                  rgGamesLength: d.length,
                  nNewGames: g,
                  totalAchievementUnlocked: m,
                  nTotalPlaytimeSeconds: a.total_playtime_seconds || 0,
                  nTotalPercentagePlaytimex100: a.total_playtime_percentagex100,
                }),
                d.length !== 1 &&
                  (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("div", {
                      className: f().SummaryGridCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: f().SectionSubTitle,
                          children: P("#YIR_YourSummary_SubTitle"),
                        }),
                        (0, e.jsx)(Ia, {
                          overview: Gt,
                          statFillers: $t,
                          gameFillers: It,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        }
        function Ia(o) {
          let { statFillers: t, gameFillers: i, overview: a } = o;
          return i.length > 2 && t.length > 1
            ? (0, e.jsx)("div", {
                className: f().SummaryGridStandard,
                children: [a, t[0], t[1], i[0], i[1], i[2]],
              })
            : i.length > 1 && t.length > 2
              ? (0, e.jsx)("div", {
                  className: f().SummaryGridStandard,
                  children: [a, t[1], t[2], t[0], i[0], i[1]],
                })
              : t.length == 1 && i.length > 3
                ? (0, e.jsx)("div", {
                    className: f().SummaryGridStandard,
                    children: [a, t[0], i[0], i[1], i[2], i[3]],
                  })
                : i.length > 1
                  ? (0, e.jsx)("div", {
                      className: f().SummaryGridSparse,
                      children: [a, i[0], i[1]],
                    })
                  : null;
        }
        function Ta(o, t) {
          return o > 0
            ? (0, e.jsx)(wa, { userYearInReview: t }, "totalAchievements")
            : null;
        }
        function Aa(o, t, i) {
          return t &&
            typeof t.longest_consecutive_days == "number" &&
            typeof i == "number" &&
            t.longest_consecutive_days <= 1 &&
            i <= 1
            ? null
            : t &&
                typeof t.longest_consecutive_days == "number" &&
                t.longest_consecutive_days > 0 &&
                !qe()
              ? (0, e.jsx)(
                  Ea,
                  { oLongestStreak: t, nYear: o, nPrevLongestStreamDays: i },
                  "longestStreak",
                )
              : null;
        }
        const rr = 1e3;
        function La(o, t) {
          const i =
              t.controller_playtime_percentagex100 +
              t.deck_playtime_percentagex100,
            a =
              t.total_playtime_percentagex100 -
              t.controller_playtime_percentagex100 -
              t.vr_playtime_percentagex100 -
              t.deck_playtime_percentagex100;
          return i < rr || a < rr
            ? null
            : (0, e.jsx)(Pa, { oTotalStats: t, nYear: o }, "hardwareTime");
        }
        function Na(o) {
          const {
              rgGamesLength: t,
              nNewGames: i,
              totalAchievementUnlocked: a,
              nTotalPlaytimeSeconds: l,
              nTotalPercentagePlaytimex100: c,
            } = o,
            d = be();
          let m;
          return (
            i > 50 && a > 100
              ? (m = d("#YIR_YourSummary_GamesTonNewAchievements"))
              : i > 20 && a > 100
                ? (m = d("#YIR_YourSummary_GamesNewAchievements"))
                : i > 20 && l > 36e4
                  ? (m = d("#YIR_YourSummary_GamesNew"))
                  : t > 10 && i < 5
                    ? (m = d("#YIR_YourSummary_GamesManyTriedNew"))
                    : t > 10
                      ? (m = d("#YIR_YourSummary_GamesMany"))
                      : i > 1 &&
                          i < 5 &&
                          (l > 36e4 ||
                            (l == 0 && typeof c == "number" && c > 5e3))
                        ? (m = d("#YIR_YourSummary_HoursManyTriedNew"))
                        : t < 2 && l > 36e4
                          ? (m = d("#YIR_YourSummary_HoursManySingleGame"))
                          : t < 2
                            ? (m = d("#YIR_YourSummary_SingleGame"))
                            : t < 5
                              ? (m = d("#YIR_YourSummary_GamesFew"))
                              : l > 36e4
                                ? (m = d("#YIR_YourSummary_HoursMany"))
                                : (m = null),
            (0, e.jsx)("div", { className: f().SectionTitle, children: m })
          );
        }
        function za(o) {
          const t = $r(),
            {
              rgGamesLength: i,
              nNewGames: a,
              nDemoPlayed: l,
              nPlaytestPlayed: c,
              nYear: d,
              nPreviousYearsGames: m,
            } = o,
            g = ne(),
            y = ln("bg_2023.svg");
          let j = f().NormalNumbers;
          return (
            i > 99999 ? (j = f().SixNumbers) : i > 99 && (j = f().ThreeNumbers),
            (0, e.jsx)("div", {
              className: B()(f().SummaryCtnShadow, g.SummaryCtnShadow),
              children: (0, e.jsxs)("div", {
                className: B()(
                  f().SummaryCtn,
                  f().GridItem,
                  g.GridItem,
                  f().OverviewBlock,
                  g.SummaryCtn,
                ),
                children: [
                  (0, e.jsx)("div", { className: f().SubtleBorder }),
                  (0, e.jsx)("div", {
                    className: B()(
                      f().BackgroundImage,
                      f().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${y})` },
                  }),
                  (0, e.jsxs)("div", {
                    className: f().SummaryBlockTitle,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().RewindHeader,
                        children: x.c.LocalizeReact(
                          "#YearInReview_SteamRewindHeader",
                          (0, e.jsx)("span", {
                            className: B()(f().UserName, g.UserName),
                            children: x.c.Localize(
                              "#YearInReview_PossessiveUserName",
                              t,
                            ),
                          }),
                          tn.Z.Localize("#date_year", d),
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: B()(f().StatBox, f().Big),
                        children: [
                          (0, e.jsx)("div", {
                            className: B()(f().BigNum, j),
                            children: (0, je.D)(i),
                          }),
                          (0, e.jsx)("div", {
                            className: f().SmallText,
                            children: x.c.LocalizePlural(
                              "#YIR_YourSummary_Games",
                              i,
                            ),
                          }),
                          (0, e.jsx)(gi, {
                            strTokenPrefix: "#YIR_YourSummary_PrevYear_Game",
                            nCurValue: i,
                            nPrevValue: m,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().SubSummaryCtn,
                    children: [
                      !!a &&
                        (0, e.jsxs)("div", {
                          className: f().StatBox,
                          children: [
                            (0, e.jsx)("div", {
                              className: f().BigNum,
                              children: (0, je.D)(a),
                            }),
                            (0, e.jsx)("div", {
                              className: f().SmallText,
                              children: x.c.LocalizePlural(
                                "#YIR_YourSummary_GamesFirst",
                                a,
                              ),
                            }),
                          ],
                        }),
                      !!l &&
                        (0, e.jsxs)("div", {
                          className: f().StatBox,
                          children: [
                            (0, e.jsx)("div", {
                              className: f().BigNum,
                              children: (0, je.D)(l),
                            }),
                            (0, e.jsx)("div", {
                              className: f().SmallText,
                              children: x.c.LocalizePlural(
                                "#YIR_YourSummary_Demos",
                                l,
                              ),
                            }),
                          ],
                        }),
                      !!c &&
                        (0, e.jsxs)("div", {
                          className: f().StatBox,
                          children: [
                            (0, e.jsx)("div", {
                              className: f().BigNum,
                              children: (0, je.D)(c),
                            }),
                            (0, e.jsx)("div", {
                              className: f().SmallText,
                              children: x.c.LocalizePlural(
                                "#YIR_YourSummary_PlayTests",
                                c,
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function gi(o) {
          const { strTokenPrefix: t, nCurValue: i, nPrevValue: a } = o;
          if (!(a == null || a === 0 || i === 0))
            return i == a
              ? null
              : i < a
                ? (0, e.jsxs)("div", {
                    className: f().CompareCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: B()(f().CompareArrow, f().ArrowDownCtn),
                      }),
                      (0, e.jsx)("div", {
                        className: f().CompareText,
                        children: x.c.LocalizePlural(
                          `${t}Less`,
                          a - i,
                          (0, je.D)(a - i),
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: f().CompareCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: B()(f().CompareArrow, f().ArrowUpCtn),
                      }),
                      (0, e.jsx)("div", {
                        className: f().CompareText,
                        children: x.c.LocalizePlural(
                          `${t}More`,
                          i - a,
                          (0, je.D)(i - a),
                        ),
                      }),
                    ],
                  });
        }
        function wa(o) {
          const { userYearInReview: t } = o,
            i = t.GetPlayTimeStats().summary_stats,
            a = t.GetFilteredGameSummary(),
            l = t.GetYear(),
            c = ne();
          if (!i) return null;
          const d = ln("achievement_grid_02.webp");
          let m = f().NormalNumbers;
          return (
            typeof i.total_achievements == "number" &&
            i.total_achievements > 99999
              ? (m = f().SixNumbers)
              : typeof i.total_achievements == "number" &&
                i.total_achievements > 99 &&
                (m = f().ThreeNumbers),
            (0, e.jsx)("div", {
              className: B()(f().SummaryCtnShadow, c.SummaryCtnShadow),
              children: (0, e.jsxs)("div", {
                className: B()(
                  f().SummaryCtn,
                  f().GridItem,
                  c.GridItem,
                  f().Achievements,
                  f().AchievementBlock,
                  c.SummaryCtn,
                  c.AchievementBlock,
                ),
                children: [
                  (0, e.jsx)("div", { className: f().SubtleBorder }),
                  (0, e.jsx)("div", {
                    className: B()(
                      f().BackgroundImage,
                      f().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${d})` },
                  }),
                  (0, e.jsxs)("div", {
                    className: B()(f().StatBox, f().SummaryBlockHugeNumCtn),
                    children: [
                      (0, e.jsx)("div", {
                        className: B()(f().BigNum, m),
                        children: (0, je.D)(i.total_achievements),
                      }),
                      (0, e.jsx)("div", {
                        className: f().SmallText,
                        children: x.c.LocalizePlural(
                          "#YIR_YourSummary_Achievement",
                          i.total_achievements,
                        ),
                      }),
                      (0, e.jsx)(gi, {
                        strTokenPrefix: "#YIR_YourSummary_PrevYear_Ach",
                        nCurValue: i.total_achievements,
                        nPrevValue: ui(l)
                          ? t.GetPreviousYearSummary()?.unlocked_achievements
                          : void 0,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().SummaryBlockExtrasCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: f().StatBox,
                        children: [
                          (0, e.jsx)("div", {
                            className: B()(f().BigNum),
                            children: (0, je.D)(
                              i.total_games_with_achievements || 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: f().SmallText,
                            children: x.c.LocalizePlural(
                              "#YIR_YourSummary_Achievement_Games",
                              i.total_games_with_achievements,
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: f().StatBox,
                        children: [
                          (0, e.jsx)("div", {
                            className: f().BigNum,
                            children: (0, je.D)(i.total_rare_achievements || 0),
                          }),
                          (0, e.jsx)("div", {
                            className: f().SmallText,
                            children: x.c.LocalizePlural(
                              "#YIR_YourSummary_Achievement_Rare",
                              i.total_rare_achievements,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function Ea(o) {
          const { oLongestStreak: t, nPrevLongestStreamDays: i } = o,
            a = t.rtime_start ?? 0,
            l = t.longest_consecutive_days ?? 0,
            c = Oi(),
            d = c(a),
            m = c(a + l * 24 * 60 * 60),
            g = ne();
          if (qe()) return null;
          const y = ln("streak_bg.jpg");
          return (0, e.jsx)("div", {
            className: B()(f().SummaryCtnShadow, g.SummaryCtnShadow),
            children: (0, e.jsxs)("div", {
              className: B()(
                f().SummaryCtn,
                f().GridItem,
                g.GridItem,
                f().StreakBlock,
                g.SummaryCtn,
                g.StreakBlock,
              ),
              children: [
                (0, e.jsx)("div", { className: f().SubtleBorder }),
                (0, e.jsx)("div", {
                  className: B()(f().BackgroundImage, f().BackgroundImageCover),
                  style: { backgroundImage: `url(${y})` },
                }),
                (0, e.jsxs)("div", {
                  className: B()(f().StatBox, f().SummaryBlockHugeNumCtn),
                  children: [
                    (0, e.jsx)("div", {
                      className: f().BigNum,
                      children: x.c.LocalizePlural(
                        "#YIR_Game_LongestStreak_DaysPlayed",
                        l,
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: f().SmallText,
                      children: x.c.Localize("#YIR_YourSummary_Stat_Streak"),
                    }),
                    (0, e.jsx)("div", {
                      className: f().SmallLightText,
                      children: x.c.Localize(
                        "#YIR_Game_LongestStreak_FromDateToDate",
                        d,
                        m,
                      ),
                    }),
                    (0, e.jsx)(gi, {
                      strTokenPrefix: "#YIR_YourSummary_PrevYear_Day",
                      nCurValue: l,
                      nPrevValue: i,
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: f().SummaryBlockExtrasCtn,
                  children: (0, e.jsxs)("div", {
                    className: B()(f().StatBox, f().LongestStreakStat),
                    children: [
                      (0, e.jsx)("div", {
                        className: f().BigNum,
                        children: (0, je.D)(t.streak_games.length),
                      }),
                      (0, e.jsx)("div", {
                        className: f().SmallText,
                        children: x.c.LocalizePlural(
                          "#YIR_YourSummary_Games",
                          t.streak_games.length,
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function Pa(o) {
          const { oTotalStats: t, nYear: i } = o,
            a =
              t.total_playtime_percentagex100 -
              t.controller_playtime_percentagex100 -
              t.vr_playtime_percentagex100 -
              t.deck_playtime_percentagex100,
            l = De(a),
            c =
              t.controller_playtime_percentagex100 +
              t.deck_playtime_percentagex100,
            d = De(c),
            m = ln("keyboard.png?v=3"),
            g = ln("controllers.png?v=2"),
            y = ne();
          let j, P, H;
          return (
            Math.floor(c / 100) < 40
              ? ((j = 40), (P = f().Small), (H = f().Large))
              : Math.floor(c / 100) > 60
                ? ((j = 60), (P = f().Large), (H = f().Small))
                : (j = c / 100),
            (0, e.jsx)("div", {
              className: B()(f().SummaryCtnShadow, y.SummaryCtnShadow),
              children: (0, e.jsxs)("div", {
                className: B()(
                  f().HardwareSummary,
                  f().SummaryCtn,
                  f().GridItem,
                  y.GridItem,
                  f().HardwareBlock,
                  y.SummaryCtn,
                  y.HardwareBlock,
                ),
                children: [
                  (0, e.jsx)("div", { className: f().SubtleBorder }),
                  (0, e.jsxs)("div", {
                    className: f().ContentCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: f().KeyboardPortion,
                        children: [
                          (0, e.jsx)("div", {
                            className: f().BackgroundImage,
                            style: { background: `url(${m}) bottom` },
                          }),
                          (0, e.jsx)("div", {
                            className: B()(f().Stat, H),
                            children: l,
                          }),
                          (0, e.jsx)("div", {
                            className: B()(f().Subtitle, H),
                            children: x.c.Localize(
                              "#YIR_HowYouPlayed_Keyboard_Generic",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: f().ControllerPortion,
                        style: { height: j + "%" },
                        children: [
                          (0, e.jsx)("div", {
                            className: f().BackgroundImage,
                            style: { background: `url(${g}) top` },
                          }),
                          (0, e.jsx)("div", {
                            className: B()(f().Stat, P),
                            children: d,
                          }),
                          (0, e.jsx)("div", {
                            className: B()(f().Subtitle, P),
                            children: x.c.Localize(
                              "#YIR_HowYouPlayed_Controllers_Percent",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function Da(o) {
          const { gameStat: t, gridClass: i } = o,
            { appid: a } = t,
            { item: l } = _e(a),
            c = Ci(0, [a]),
            d = ne();
          if (!l) return null;
          const m = (0, Ge.CB)(l.assets, "library_hero"),
            g = Math.trunc(t.stats.total_sessions);
          return (0, e.jsx)("div", {
            className: B()(f().SummaryCtnShadow, d.SummaryCtnShadow),
            children: (0, e.jsxs)("div", {
              className: B()(
                f().SummaryCtn,
                f().GridItem,
                d.GridItem,
                f()[i],
                d.SummaryCtn,
                d[i],
              ),
              onClick: c,
              children: [
                (0, e.jsx)("div", { className: f().SubtleBorder }),
                (0, e.jsx)("div", {
                  className: B()(f().BackgroundImage, d.BackgroundImage),
                  style: { backgroundImage: `url(${m})` },
                }),
                (0, e.jsx)("div", {
                  className: f().SummaryBlockGameName,
                  children: l.info.name,
                }),
                (0, e.jsxs)("div", {
                  className: f().SummaryBlockExtrasCtn,
                  children: [
                    (0, e.jsx)(Oa, {
                      percentVal: t.stats.total_playtime_percentagex100,
                      subToken: "#YIR_Game_PlayStat",
                    }),
                    (0, e.jsxs)("div", {
                      className: f().StatBox,
                      children: [
                        (0, e.jsx)("div", {
                          className: f().BigNum,
                          children: (0, je.D)(g),
                        }),
                        (0, e.jsx)("div", {
                          className: f().SmallText,
                          children: x.c.Localize(
                            g == 1
                              ? "#YIR_Game_PlaySession_Singular"
                              : "#YIR_Game_PlaySessions",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function Oa(o) {
          const { percentVal: t, subToken: i, className: a } = o,
            l = De(t),
            c = `${i}_Percent`;
          return (0, e.jsxs)("div", {
            className: B()(f().StatBox, a),
            children: [
              (0, e.jsx)("div", { className: f().BigNum, children: l }),
              (0, e.jsx)("div", {
                className: f().SmallText,
                children: x.c.Localize(c),
              }),
            ],
          });
        }
        var Sa = r(1012),
          sr = r(82907),
          ar = r(61215),
          or = r(55241),
          hi = r(71026),
          lr = r(36058),
          Qe = r(44367);
        li();
        const Wa = A.memo(function (t) {
            const { data: i, topMonthlyAppsAndRanks: a } = t,
              l = ne(),
              c = (0, A.useCallback)(
                (m, g) => (i[g]?.date ? (0, On.oL)(i[g].date) : ""),
                [i],
              ),
              d = (0, A.useRef)(void 0);
            return (0, e.jsxs)(sr.X, {
              responsive: !0,
              style: { width: "100%", height: "100%" },
              data: i,
              margin: { top: 25, left: 0, right: 0, bottom: 0 },
              barGap: 30,
              children: [
                (0, e.jsx)(ar.d, { vertical: !1, stroke: "#a0aab6" }),
                (0, e.jsx)(or.h, {
                  tickFormatter: De,
                  tick: { fill: "white" },
                  axisLine: !0,
                }),
                (0, e.jsx)(Rn.m, {
                  wrapperStyle: { outline: "none" },
                  allowEscapeViewBox: { x: !1, y: !0 },
                  isAnimationActive: !1,
                  offset: 0,
                  content: (m) =>
                    (0, e.jsx)(Ra, {
                      active: m.active,
                      payload: m.payload,
                      hoveredBarIDRef: d,
                    }),
                }),
                (0, e.jsx)(hi.y, {
                  barSize: 60,
                  dataKey: `topPlayedPercentBreakdownPerMonth.${I}`,
                  name: I,
                  stackId: "a",
                  fill: l.monthOthersColor,
                  onMouseEnter: () => (d.current = I),
                  onMouseOut: () => (d.current = void 0),
                }),
                a.map((m, g) =>
                  (0, e.jsx)(
                    hi.y,
                    {
                      barSize: 60,
                      dataKey: `topPlayedPercentBreakdownPerMonth.${m.appid}`,
                      name: m.appid.toString(),
                      stackId: "a",
                      fill: l[`topApp_${m.rank}`],
                      onMouseEnter: () => (d.current = m.appid.toString()),
                      onMouseOut: () => (d.current = void 0),
                    },
                    `${g}`,
                  ),
                ),
                (0, e.jsx)(lr.W, {
                  interval: 0,
                  tick: (0, e.jsx)(dr, {}),
                  tickFormatter: c,
                }),
              ],
            });
          }),
          fi = 7;
        function Ra(o) {
          const { active: t, payload: i, hoveredBarIDRef: a } = o,
            l = ne(),
            c = be();
          if (t && i && i.length) {
            const d = i[0].payload.date.getUTCMonth(),
              m = x.c.Localize(`#YIR_MonthlyCharts_MonthNoun_${d + 1}`),
              g = i[0].payload.topPlayedPercentBreakdownPerMonth[b],
              y = Object.keys(i[0].payload.otherPlayedPercentBreakdownForMonth),
              j = i[0].payload.topPlayedRelativePercentBreakdownForMonth,
              P = i.find(($t) => $t.name === a.current),
              K = P?.name === I,
              Q = i
                .map(($t) => {
                  const Gt = $t.name,
                    Kt = j[$t.name];
                  if (Gt === I) {
                    const ge = K && i.length == 1;
                    return (0, e.jsxs)(
                      A.Fragment,
                      {
                        children: [
                          !ge &&
                            (0, e.jsx)("div", {
                              className: B()($t === P && Qe.HoveredGameLabel),
                              children: vi(
                                Kt,
                                m,
                                "#YIR_MonthlyCharts_OtherGamesTooltip",
                              ),
                            }),
                          K &&
                            y
                              .slice(0, fi)
                              .map((Wt) =>
                                (0, e.jsx)(
                                  Ua,
                                  { appId: Wt, className: Qe.HoveredGameLabel },
                                  Wt,
                                ),
                              ),
                          K &&
                            y.length > fi &&
                            (0, e.jsx)("div", {
                              className: Qe.HoveredGameLabel,
                              children: x.c.Localize(
                                "#YIR_MonthlyCharts_OtherGamesTooltip_AndMore",
                                y.length - fi,
                              ),
                            }),
                        ],
                      },
                      Gt,
                    );
                  }
                  return $t.value
                    ? (0, e.jsx)(
                        Ya,
                        {
                          appId: Gt,
                          className: B()($t === P && Qe.HoveredGameLabel),
                          date: m,
                          value: Kt,
                        },
                        Gt,
                      )
                    : null;
                })
                .reverse(),
              It = Q.length == 1 && y.length > 0;
            return (0, e.jsxs)(nn.t1, {
              style: { background: P?.color ?? l.monthOthersColor },
              className: Qe.MonthlyChartTooltipCtn,
              children: [
                (0, e.jsx)("div", { className: Qe.TooltipBackgroundOverlay }),
                (0, e.jsx)("div", {
                  className: Qe.TooltipImageContainer,
                  children:
                    P &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !K && (0, e.jsx)(cr, { appId: P.name }),
                        K && (0, e.jsx)(Ca, { appIds: y.slice(0, 7) }),
                      ],
                    }),
                }),
                (0, e.jsxs)("div", {
                  className: Qe.TotalPlaytimeContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: ct.TotalPlaytime,
                      children: vi(
                        g,
                        m,
                        "#YIR_MonthlyCharts_PlayedTotalTooltip",
                      ),
                    }),
                    !It &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: x.c.Localize(
                              "#YIR_MonthlyCharts_PlayedSubtitleTooltip",
                            ),
                          }),
                          Q,
                        ],
                      }),
                    It &&
                      P &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: c(
                              "#YIR_MonthlyCharts_OtherGamesTooltip_Only",
                            ),
                          }),
                          Q,
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          return null;
        }
        function Ca({ appIds: o }) {
          return (0, e.jsx)("div", {
            className: Qe.OtherGamesStack,
            children: o?.map((t, i) =>
              (0, e.jsx)(
                cr,
                {
                  appId: t,
                  style: { zIndex: o.length - i, "--stack-position": i },
                },
                t,
              ),
            ),
          });
        }
        function cr({ appId: o, style: t }) {
          const { item: i } = _e(parseInt(o));
          if (!i?.assets) return null;
          const a = (0, Ge.CB)(i.assets, "library_capsule") || Ei;
          return (0, e.jsx)("img", {
            alt: "",
            style: t,
            className: Qe.CapsuleImg,
            src: a,
          });
        }
        function Ua({ appId: o, className: t }) {
          const { item: i } = _e(parseInt(o));
          return i
            ? (0, e.jsx)("div", { className: t, children: i.info.name }, o)
            : null;
        }
        function Ya(o) {
          const { appId: t, className: i, value: a, date: l } = o,
            { item: c } = _e(parseInt(t));
          return c
            ? (0, e.jsx)(
                "div",
                {
                  className: i,
                  children: vi(
                    a,
                    l,
                    "#YIR_MonthlyCharts_TopPlayedTooltip",
                    (0, e.jsx)("b", { children: c.info.name }),
                  ),
                },
                t,
              )
            : null;
        }
        const Ha = A.memo(function (t) {
          const { data: i, name: a, color: l } = t,
            c = !0,
            d = ne(),
            m = (0, A.useCallback)(
              (g, y) => (i[y]?.date ? (0, On.oL)(i[y].date) : ""),
              [i],
            );
          return (0, e.jsxs)(sr.X, {
            responsive: !0,
            style: { width: "100%", height: "100%" },
            data: i,
            margin: { top: 25, left: 0, right: 0, bottom: 0 },
            barGap: 30,
            children: [
              (0, e.jsx)(Rn.m, {
                wrapperStyle: {
                  outline: "1px solid " + (l ?? d.chartAccentColorAlt),
                },
                allowEscapeViewBox: { x: !1, y: !0 },
                isAnimationActive: !1,
                content: (g) =>
                  (0, e.jsx)(Ga, {
                    active: g.active,
                    payload: g.payload,
                    name: a,
                  }),
              }),
              (0, e.jsx)(ar.d, { vertical: !1, stroke: "#a0aab6" }),
              (0, e.jsx)(or.h, {
                tickFormatter: c ? De : oi.NO,
                tick: { fill: "white" },
                axisLine: !0,
              }),
              (0, e.jsx)(hi.y, {
                barSize: 60,
                dataKey: c ? "percent" : "value",
                fill: l ?? d.chartAccentColorAlt,
              }),
              (0, e.jsx)(lr.W, {
                interval: 0,
                tick: (0, e.jsx)(dr, {}),
                tickFormatter: m,
                color: "#ffffff",
              }),
            ],
          });
        });
        function dr(o) {
          const { x: t, y: i, payload: a } = o,
            l = o.tickFormatter(a.value, a.index);
          return (0, e.jsx)("g", {
            transform: `translate(${t},${i})`,
            children: (0, e.jsx)("text", {
              x: 0,
              y: 0,
              dy: 16,
              textAnchor: "end",
              fill: "#FFFFFF",
              transform: "rotate(-35)",
              children: l,
            }),
          });
        }
        function Ga(o) {
          const { active: t, payload: i, name: a } = o,
            l = !0,
            c = ne(),
            d = i[0];
          if (t && d?.value) {
            const m = d.payload.date.getUTCMonth(),
              g = x.c.Localize(`#YIR_MonthlyCharts_MonthNoun_${m + 1}`),
              y = d.value,
              j = l
                ? "#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent"
                : "#YIR_MonthlyCharts_TopPlayedTooltip_Time";
            return (0, e.jsx)(nn.t1, {
              style: { background: "#0e1014" },
              children: (0, e.jsx)(
                "div",
                {
                  style: { color: c.chartAccentColor },
                  children: x.c.LocalizeReact(
                    j,
                    (0, e.jsx)("b", { children: l ? De(y) : (0, je.D)(y) }),
                    g,
                    a,
                  ),
                },
                a,
              ),
            });
          }
          return null;
        }
        function vi(o, t, i, ...a) {
          const l = `${i}_Percent`;
          return x.c.LocalizeReact(
            l,
            (0, e.jsx)("b", { children: De(o) }),
            t,
            ...a,
          );
        }
        var Yn = r(77408);
        function Ka(o) {
          const { userYearInReview: t } = o,
            i = be(),
            a = t.GetChartMonthlyData(),
            l = t.GetTopGameIdsAndRanks(),
            c = t.GetPlayTimeStats().games?.length ?? 0;
          return (0, e.jsx)("div", {
            className: Yn.Section,
            children:
              c > 1 &&
              (0, e.jsxs)(Ne, {
                className: Yn.AnimationVisibilityCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: We.SectionTitle,
                    children: i("#YIR_MonthlyCharts_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: Yn.ChartContainer,
                    children: (0, e.jsx)("div", {
                      className: Yn.Chart,
                      children: (0, e.jsx)(Wa, {
                        data: a,
                        topMonthlyAppsAndRanks: l,
                      }),
                    }),
                  }),
                ],
              }),
          });
        }
        var Qa = r(24179),
          Va = r(54528),
          Fa = r(96362);
        function Za(o) {
          const t = bi(o),
            i = kn(o, !1);
          return $a(t?.all_time_unlocked_achievements, i?.length ?? 0);
        }
        function $a(o, t) {
          return typeof o == "number" && o > 0 && t > 0 && t <= o;
        }
        const Ja = 2022,
          Yo = 2025;
        var Xa = r(72739),
          ka = r(29522),
          mr = r(40426),
          qa = r(13558),
          _a = r(7077),
          to = r.n(_a),
          ze = r(96002),
          eo = r(98001),
          no = r(93191);
        function io(o) {
          const { appid: t, userYearInReview: i } = o,
            a = bi(t);
          return !a || !((a?.achievements?.length ?? 0) > 0)
            ? null
            : (0, e.jsx)(Le.tH, {
                children: (0, A.createElement)(ro, {
                  ...o,
                  key: "achievementunlucklist_" + t,
                  userUnlockedAchievements: a,
                }),
              });
        }
        function ro(o) {
          const {
              appid: t,
              userYearInReview: i,
              bBlurContent: a,
              userUnlockedAchievements: l,
            } = o,
            [c, d] = (0, A.useState)(a),
            m = be(),
            g = Tr(t),
            y = () => d(!1),
            j = l.achievements?.length ?? 0,
            P = l.all_time_unlocked_achievements,
            H = P == g && g > 0 && j > 0 && P > 0 && !l.unlocked_more_in_future,
            K = (0, eo.v)({ appid: t, profileUrl: (0, no.F)(i.GetSteamID()) }),
            Q = (0, Se.hf)();
          return (0, e.jsxs)("div", {
            className: B()(We.YearInReviewContent, ze.AchievementsCtn),
            children: [
              c &&
                (0, e.jsx)("div", {
                  onClick: y,
                  className: ze.ContentRestrictionText,
                  children: x.c.Localize(
                    "#YIR_TopGames_ContentRestrictionAchievements",
                  ),
                }),
              (0, e.jsxs)("div", {
                className: ze.AchievementSectionTitleCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: ze.AchievementSectionTitle,
                    children: m("#YIR_TopGames_Achievements"),
                  }),
                  (0, e.jsxs)("div", {
                    className: ze.AchievementLinkCtn,
                    children: [
                      Q &&
                        (0, e.jsx)("a", {
                          href: K,
                          className: ze.AchievementLink,
                          children: x.c.Localize("#YIR_SeeAllAchievements"),
                        }),
                      !Q &&
                        (0, e.jsx)(on.Ii, {
                          href: K,
                          target: "_blank",
                          className: ze.AchievementLink,
                          children: x.c.Localize("#YIR_SeeAllAchievements"),
                        }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: B()({
                  [ze.AllUnlockedAchievements]: H,
                  [ze.AchievementsRowCtn]: !0,
                }),
                children: (0, e.jsxs)("div", {
                  className: ze.AchievementRow,
                  children: [
                    (0, e.jsxs)("div", {
                      className: ze.AchievementsTitleCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: ze.AchievementsBigNum,
                          children: (0, je.D)(j),
                        }),
                        (0, e.jsx)("div", {
                          className: ze.AchievementsSmallText,
                          children: x.c.LocalizeReact(
                            "#YIR_UnlockedThisYear_Short",
                            (0, e.jsx)("br", {}),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)(so, { userUnlockedAchievements: l }),
                  ],
                }),
              }),
            ],
          });
        }
        function so(o) {
          const { userUnlockedAchievements: t } = o,
            i = t.appid;
          (0, Ee.wT)(i, "Missing appid for achievements list!");
          const a = Ir(i),
            l = (0, A.useMemo)(
              () =>
                [...(t.achievements ?? [])].sort(
                  (d, m) => (d.rtime_unlocked ?? 0) - (m.rtime_unlocked ?? 0),
                ),
              [t],
            );
          return l?.length > 0
            ? (0, e.jsx)(e.Fragment, {
                children: l
                  .map((c) => a.get(c.achievement_name_internal ?? ""))
                  .filter((c) => !!c?.icon)
                  .map((c) =>
                    (0, e.jsx)(
                      oo,
                      { appid: i, display: c },
                      "displayAch_" + c.internal_name,
                    ),
                  ),
              })
            : (0, e.jsx)(Bn.t, {
                size: "small",
                string: tn.Z.Localize("#Loading"),
              });
        }
        const ao = 10;
        function oo(o) {
          const { display: t, appid: i } = o,
            a = `${N.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${i}/${t.icon}`,
            l = Number.parseFloat("" + t.player_percent_unlocked) < ao;
          return (0, e.jsx)(nn.m9, {
            toolTipContent: (0, e.jsx)(lo, { display: t }),
            className: B()({ [ze.RareAchievement]: l, [ze.Achievement]: !0 }),
            children: (0, e.jsx)(qa._u, {
              imgURL: a,
              className: ze.AchievementIcon,
              alt: t.localized_name ?? t.internal_name,
              glow: l,
              hideNativeTooltip: !0,
            }),
          });
        }
        function lo(o) {
          const { display: t } = o;
          let i;
          return (
            t.localized_desc && t.localized_name
              ? (i = `${t?.localized_name}: ${t.localized_desc}`)
              : t.localized_name
                ? (i = t.localized_name)
                : t.internal_name && (i = t.internal_name),
            (0, e.jsxs)("div", {
              className: to().TextToolTip,
              children: [
                (0, e.jsx)("div", { children: i }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  children: x.c.Localize(
                    "#YIR_Achievement_ttip",
                    (0, je.D)(
                      Math.max(
                        0.1,
                        Number.parseFloat("" + t.player_percent_unlocked),
                      ),
                    ),
                  ),
                }),
              ],
            })
          );
        }
        var In = r(30386);
        function co(o) {
          const { appid: t, bBlurContent: i, nYear: a } = o,
            l = Nr(t),
            [c, d] = (0, mr.XC)(),
            m = be();
          return !l || l.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: B()(We.YearInReviewContent, In.ScreenshotsCtn),
                children: [
                  d,
                  (0, e.jsx)("div", {
                    className: In.ScreenshotHeader,
                    children: m("#YIR_ScreenshotsThisYear"),
                  }),
                  (0, e.jsx)("div", {
                    className: In.ScreenshotRow,
                    children: l.map((g, y) =>
                      (0, e.jsx)(
                        uo,
                        {
                          nYear: a,
                          bBlurContent: i,
                          screenshot: g,
                          fnSetExpandScreenShot: () => {
                            const P = l
                              .slice(y)
                              .concat(l.slice(0, y))
                              .map((H) => H.image_url);
                            c(P);
                          },
                        },
                        `${g.image_url}_${y}`,
                      ),
                    ),
                  }),
                ],
              });
        }
        const mo =
          "?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
        function uo(o) {
          const {
              screenshot: t,
              fnSetExpandScreenShot: i,
              bBlurContent: a,
              nYear: l,
            } = o,
            [c, d] = (0, A.useState)(a),
            m = { backgroundImage: `url(${t.image_url + mo})` },
            g = () => {
              c && d(!1), i();
            };
          return (0, e.jsxs)("div", {
            className: In.ScreenshotCtn,
            onClick: g,
            style: m,
            children: [
              c &&
                (0, e.jsx)("div", {
                  className: In.ContentRestrictionText,
                  children: x.c.Localize(
                    "#YIR_TopGames_ContentRestrictionScreenshots",
                  ),
                }),
              (0, e.jsx)("img", {
                alt: "",
                src: ln("screenshot_placeholder.png"),
              }),
            ],
          });
        }
        function ur(o) {
          const { userYearInReview: t } = o,
            i = t.GetTopGamesShownAppIDs(),
            a = be(),
            l = 0,
            c = Ht,
            d = (0, A.useMemo)(() => i?.slice(l, c), [l, c, i]);
          if (!i || i.length == 0 || l > i.length) return null;
          let m = i.length > 1;
          return (0, e.jsx)("div", {
            className: B()(ct.TopGamesContainer),
            children: (0, e.jsxs)(di.K, {
              placeholderHeight: "100vh",
              rootMargin: wn,
              className: ct.FullWidth,
              children: [
                !!m &&
                  (0, e.jsx)("div", {
                    className: B()(ct.TopGameTitleCtn, ct.white),
                    children: (0, e.jsx)("div", {
                      className: ct.TopGameTitle,
                      children: a("#YIR_TopGame_mostplayed_intro"),
                    }),
                  }),
                d.map((g, y) =>
                  (0, e.jsx)(
                    Ne,
                    {
                      children: (0, e.jsx)(
                        gr,
                        { unAppID: g, userYearInReview: t, index: y },
                        y,
                      ),
                    },
                    y,
                  ),
                ),
              ],
            }),
          });
        }
        function go(o) {
          const { gameSummary: t, index: i, userYearInReview: a } = o,
            l = be(),
            c = Jr(),
            d = t.appid,
            m = a.GetYear();
          for (let y = m; y >= Ja; --y) {
            const j = `#steamrewind${y}_gametext_appid_${d}`,
              P = c(y, j, m);
            if (P !== void 0)
              return (0, e.jsxs)("div", {
                className: ct.IntroLine,
                children: [P, " "],
              });
          }
          let g;
          return (
            i == 0
              ? t?.new_this_year
                ? typeof t.total_playtime_percentagex100 == "number" &&
                  t.total_playtime_percentagex100 > 1e3
                  ? (g = "#YIR_TopGame_first_new_hooked")
                  : (g = "#YIR_TopGame_first_new")
                : (g = "#YIR_TopGame_first_continued")
              : i == 1 &&
                (t?.new_this_year
                  ? (g = "#YIR_TopGame_top_new")
                  : (g = "#YIR_TopGame_top_continued")),
            g
              ? (0, e.jsx)("div", {
                  className: B()(ct.IntroLine, We.IntroLine),
                  children: l(g, a.GetYear()),
                })
              : null
          );
        }
        function ho(o) {
          let [t, i] = A.useState(!1),
            a = A.useRef(null),
            l = a.current;
          const c = qr();
          A.useEffect(() => {
            o !== null && o != l && i(!0), o === null && t && i(!1);
          }, [i, t, o, l]),
            (a.current = o);
          let d = A.useRef(void 0),
            m = A.useCallback(() => {
              let g = () => c(o),
                y = parseInt(ct.strGameDetailsTransitionTimeMS);
              (d.current = setTimeout(g, y)), i(!1);
            }, [c, o]);
          return (
            A.useEffect(
              () => () => {
                d.current && clearTimeout(d.current), (d.current = void 0);
              },
              [],
            ),
            [t, m]
          );
        }
        function fo(o) {
          return A.useCallback(
            (i) => {
              i.target == i.currentTarget && o();
            },
            [o],
          );
        }
        function vo(o) {
          let { userYearInReview: t } = o,
            { unAppID: i, length: a, index: l = 0 } = kr(),
            [c, d] = ho(i),
            m = fo(d);
          const g = Ui(l + 1),
            y = Ui(l - 1),
            j = (0, Se.Qn)();
          if (i == null && !c) return null;
          let P = B()(ct.GameDetailsPopup, c && ct.Visible, j && ct.GamepadUI),
            H = (0, e.jsx)("div", {
              className: P,
              onClick: m,
              children: (0, e.jsxs)("div", {
                className: ct.ContentWrapper,
                children: [
                  (0, e.jsx)("div", {
                    className: ct.GameWrapper,
                    children:
                      i !== null &&
                      (0, e.jsx)(gr, {
                        unAppID: i,
                        userYearInReview: t,
                        index: 1,
                      }),
                  }),
                  (0, e.jsx)(mr._G, {
                    index: l,
                    numElements: a,
                    fnForward: g,
                    fnBackwards: y,
                    fnClose: d,
                  }),
                ],
              }),
            });
          return typeof document > "u"
            ? null
            : Xa.createPortal(H, document.body);
        }
        const gr = A.memo(function (t) {
          const { unAppID: i, userYearInReview: a, index: l } = t,
            c = a.GetGameStats(i),
            d = Math.trunc(c?.playtime_streak?.longest_consecutive_days || 1),
            m = a.GetGameSummaryForApp(i),
            g = m ? m.parent_appid || i : 0,
            { item: y, bLoading: j } = _e(g),
            P = Za(g),
            H = (0, ii.aL)(y ? (0, Qi._)(y.info) : void 0),
            K = be(),
            Q = l % 2 ? "OddGradient" : "EvenGradient",
            It = (0, Se.Qn)(),
            $t = _n(),
            Gt = ne(),
            Kt = (0, Se.hf)(),
            { gameChartData: ge, rank: Wt } = (0, A.useMemo)(
              () => a.GetChartMonthlyDataForApp(i),
              [i, a],
            );
          if (j)
            return (0, e.jsx)("div", {
              className: B()(
                ct.TopGameBlockContainer,
                ct[Q],
                Gt.TopGameBlockContainer,
                Gt[Q],
                ct.LoadingCtn,
              ),
              children: (0, e.jsx)(Bn.t, { position: "center" }),
            });
          if (!y || !m) return null;
          let qt = H;
          N.TS.IN_CLIENT && (qt = "steam://openurl/" + qt);
          const pe = ge?.find((Ro) => Ro.percent > 0),
            Oe = pe ? pe.date.getUTCMonth() : null,
            Ye = Oe
              ? x.c.Localize(`#YIR_MonthlyCharts_MonthNoun_${Oe + 1}`)
              : "",
            Xe = Math.trunc(m.total_sessions);
          let we = "";
          $t && It
            ? (we = `steam://open/games/details/${i}`)
            : $t &&
              !N.TS.IN_MOBILE_WEBVIEW &&
              (we = `steam://open/library/details/${i}`);
          const Ve = y.info.name ?? "";
          let fn = Ve;
          return (
            m.demo
              ? (fn = x.c.Localize("#YIR_GameName_PlusDemo", fn))
              : m.playtest &&
                (fn = x.c.Localize("#YIR_GameName_PlusPlaytest", fn)),
            (0, e.jsxs)(Ne, {
              className: B()(
                ct.TopGameBlockContainer,
                ct[Q],
                Gt.TopGameBlockContainer,
                Gt[Q],
              ),
              children: [
                (0, e.jsx)(po, { item: y }),
                (0, e.jsxs)("div", {
                  className: ct.StandardInfoCtn,
                  children: [
                    (0, e.jsx)(yo, { item: y }),
                    (0, e.jsxs)("div", {
                      className: B()(
                        We.YearInReviewContent,
                        ct.InfoContentSpacing,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          className: ct.InfoContainer,
                          children: [
                            (0, e.jsxs)(Pe.Z, {
                              className: ct.GameLinks,
                              "flow-children": "row",
                              children: [
                                Kt &&
                                  (0, e.jsx)("a", {
                                    href: qt,
                                    className: ct.GameLink,
                                    children: x.c.Localize(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !Kt &&
                                  (0, e.jsx)(on.Ii, {
                                    href: qt,
                                    target: "_blank",
                                    className: ct.GameLink,
                                    children: x.c.Localize(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !!we &&
                                  (0, e.jsx)(on.Ii, {
                                    href: we,
                                    className: ct.GameLink,
                                    children: x.c.Localize(
                                      "#YIR_TopGames_VisitInLibrary",
                                    ),
                                  }),
                                !$t && (0, e.jsx)(xo, { appID: g }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: B()({
                                [ct.Title]: !0,
                                [ct.TitleLongName]: (fn?.length ?? 0) > 25,
                              }),
                              children: fn,
                            }),
                            (0, e.jsx)(go, {
                              gameSummary: m,
                              userYearInReview: a,
                              index: l,
                            }),
                            (0, e.jsxs)("div", {
                              className: ct.StatsGroup,
                              children: [
                                !!m.total_playtime_percentagex100 &&
                                  (0, e.jsxs)("div", {
                                    className: ct.StatContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: ct.BigNum,
                                        children: De(
                                          Math.ceil(
                                            m.total_playtime_percentagex100,
                                          ),
                                        ),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: ct.NumSubtitle,
                                        children: x.c.Localize(
                                          "#YIR_Game_PercentPlaytime",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!m.total_sessions &&
                                  (0, e.jsxs)("div", {
                                    className: ct.StatContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: ct.BigNum,
                                        children: (0, je.D)(Xe),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: ct.NumSubtitle,
                                        children: x.c.Localize(
                                          Xe == 1
                                            ? "#YIR_Game_PlaySession_Singular"
                                            : "#YIR_Game_PlaySessions",
                                        ),
                                      }),
                                    ],
                                  }),
                                !qe() &&
                                  d > 1 &&
                                  (0, e.jsx)("div", {
                                    className: ct.StatContainer,
                                    children: (0, e.jsxs)(nn.he, {
                                      toolTipContent: x.c.LocalizeReact(
                                        "#YIR_Game_LongestStreak_ttip",
                                      ),
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: ct.BigNum,
                                          children: (0, je.D)(d),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: ct.NumSubtitle,
                                          children: x.c.Localize(
                                            "#YIR_Game_LongestStreak",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!m?.new_this_year &&
                                  (0, e.jsx)("div", {
                                    className: ct.StatContainer,
                                    children: (0, e.jsxs)(nn.he, {
                                      toolTipContent: K(
                                        "#YIR_TopGames_NewThisYEar_ttip",
                                      ),
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: ct.BigNum,
                                          children: (0, e.jsx)(Te.eNX, {}),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: ct.NumSubtitle,
                                          children: x.c.Localize(
                                            "#YIR_TopGames_NewThisYEar",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!P &&
                                  (0, e.jsxs)("div", {
                                    className: ct.StatContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: ct.BigNum,
                                        children: (0, e.jsx)(Te.Exy, {}),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: ct.NumSubtitle,
                                        children:
                                          x.c.Localize("#YIR_TopGames_100"),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        ge &&
                          (0, e.jsxs)("div", {
                            className: B()(
                              ct.GameChartCtn,
                              ct.ChartWidthHelper,
                            ),
                            children: [
                              (0, e.jsx)("div", {
                                className: ct.GameChartFirstPlayed,
                                children: Ye
                                  ? K(
                                      m?.new_this_year
                                        ? "#YIR_TopGames_firstplayedNew"
                                        : "#YIR_TopGames_firstplayed",
                                      Ye,
                                    )
                                  : null,
                              }),
                              (0, e.jsx)("div", {
                                className: ct.GameChart,
                                children: (0, e.jsx)(Ha, {
                                  data: ge,
                                  name: Ve,
                                  color: Gt[`topApp_${Wt}`],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(Bo, { appid: g, userYearInReview: a, item: y }),
              ],
            })
          );
        });
        function yo(o) {
          const { item: t } = o,
            i = ti(t.info),
            a = (0, Ge.CB)(t.assets, "library_hero");
          return (0, e.jsx)("div", {
            className: ct.BackgroundImage,
            style: i ? void 0 : { backgroundImage: `url(${a})` },
          });
        }
        function po(o) {
          const { item: t } = o,
            i = ne(),
            a = ti(t.info),
            l = (0, Ge.CB)(t.assets, "library_hero");
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)("div", {
              className: B()(ct.BackgroundImageFull, i.BackgroundImageFull),
              style: a ? void 0 : { backgroundImage: `url(${l})` },
            }),
          });
        }
        function Bo(o) {
          const { appid: t, userYearInReview: i, item: a } = o,
            l = ti(a.info);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(io, {
                bBlurContent: l,
                appid: t,
                userYearInReview: i,
              }),
              (0, e.jsx)(co, { bBlurContent: l, appid: t, nYear: i.GetYear() }),
            ],
          });
        }
        function xo(o) {
          const { appID: t } = o,
            i = (0, ka.$5)(t),
            a = (0, Va.bB)(t),
            { bIsOwned: l } = (0, Qa.ZJ)(i),
            c = (0, ii.ru)(),
            { mutate: d } = (0, Fa.s)(t, !a, c);
          return !N.iA.logged_in || l
            ? null
            : (0, e.jsxs)(Pe.Z, {
                className: B()(ct.AddToWishlist),
                onActivate: (m) => {
                  m.preventDefault(), m.stopPropagation(), d();
                },
                children: [
                  a ? (0, e.jsx)(Te.qnF, {}) : (0, e.jsx)(Te.T4m, {}),
                  tn.Z.Localize(
                    a ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                  ),
                ],
              });
        }
        function jo(o) {
          const { pageData: t } = o,
            { steamid: i, nYear: a, eResult: l } = t;
          A.useEffect(() => {
            const d = new URL(window.location.href),
              m = ["src", "snr", "sP"].filter((g) => d.searchParams.has(g));
            m.length &&
              (m.forEach((g) => d.searchParams.delete(g)),
              window.history.replaceState(window.history.state, "", d));
          }, []);
          const c = A.useRef(null);
          return (
            A.useEffect(() => {
              c.current && c.current.NavTree()?.Activate(!0);
            }, []),
            l == L.sW
              ? (0, e.jsx)(hn, {
                  message: x.c.Localize("#YIR_Error_NoShareNoGameplayNotUser"),
                })
              : !i || !a
                ? (0, e.jsx)(hn, { message: x.c.Localize("#YIR_Error_NoData") })
                : (0, e.jsx)(Mi.Provider, {
                    value: t,
                    children: (0, e.jsx)(Pe.Z, {
                      navRef: c,
                      children: (0, e.jsx)(bo, { steamid: i, year: a }),
                    }),
                  })
          );
        }
        function bo(o) {
          let { steamid: t, year: i } = o;
          const a = new lt.b2(t),
            [l, c] = (0, Ai.KT)(a.GetAccountID()),
            { userYearInReview: d, isLoading: m } = pr(t, i),
            { isLoading: g, isError: y } = mn(
              d?.GetTopGamesShownAppIDs() ?? [],
            ),
            j = Fr();
          if (c || m || g || !j)
            return (0, e.jsx)(Bn.t, {
              string: tn.Z.Localize("#Loading"),
              position: "center",
            });
          if (!l || !a.BIsIndividualAccount())
            return (0, e.jsx)(hn, {
              message: x.c.Localize("#YIR_Error_NoUser"),
            });
          if (!d || y)
            return (0, e.jsx)(hn, {
              message: x.c.Localize("#YIR_Error_PageLoadFailed"),
            });
          const P = !d.GetPlayTimeStats()?.game_summary?.length;
          return N.iA.steamid !== l.steamid && P
            ? (0, e.jsx)(hn, {
                message: x.c.Localize("#YIR_Error_NoShareNoGameplayNotUser"),
              })
            : P
              ? (0, e.jsx)(hn, {
                  message: x.c.Localize("#YIR_Error_NoShareNoGameplay"),
                })
              : (0, e.jsx)(Pe.Z, {
                  autoFocus: !0,
                  noFocusRing: !0,
                  focusable: !1,
                  scrollIntoViewType: Vi.Yo.NoTransformSparseContent,
                  children: (0, e.jsx)("div", {
                    className: f().YearInReviewContainer,
                    children: (0, e.jsx)(Io, {
                      userYearInReview: d,
                      avatarAndPersona: l,
                    }),
                  }),
                });
        }
        function Mo(o) {
          const {
              viewAsUser: t,
              avatarAndPersona: i,
              userYearInReview: a,
              themeYear: l,
              children: c,
            } = o,
            d = (0, Sa.b)(l),
            m = (0, Fe.KV)(),
            g = a.GetSteamID(),
            y = a.GetYear(),
            j = A.useMemo(() => xr(m, g, y), [m, g, y]),
            P = A.useMemo(
              () => ({
                bIsUser: t,
                persona_name: i.persona_name,
                avatar_url: i.avatar_url,
                themeStyle: d,
              }),
              [t, i.persona_name, i.avatar_url, d],
            );
          return (0, e.jsx)(en.Provider, {
            value: P,
            children: (0, e.jsx)(Yi.QA, {
              eAdultOnlyMediaBehavior: t ? "allowed" : "masked",
              children: (0, e.jsx)(xi.Provider, {
                value: j,
                children: (0, e.jsx)(Xr, { children: c }),
              }),
            }),
          });
        }
        function Io(o) {
          const { userYearInReview: t, avatarAndPersona: i } = o,
            a = t.GetYear(),
            l = N.iA.logged_in && N.iA.steamid === i.steamid,
            [c, d] = (0, A.useState)(l),
            [m, g] = (0, A.useState)(a);
          return (0, e.jsxs)(Mo, {
            viewAsUser: c,
            userYearInReview: t,
            avatarAndPersona: i,
            themeYear: m,
            children: [
              (0, e.jsx)(No, {
                viewAsUser: c,
                setViewAsUser: d,
                themeYear: m,
                setThemeYear: g,
              }),
              (0, e.jsx)(To, { ...o, viewAsUser: c }),
            ],
          });
        }
        function To(o) {
          const { userYearInReview: t, viewAsUser: i } = o,
            a = t.GetSteamID(),
            l = t.GetYear();
          br(t);
          const { persona_name: c } = (0, A.useContext)(en),
            d = t.GetPlayTimeStats().game_summary?.length;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Lo, { userYearInReview: t }),
              (0, e.jsx)(Le.tH, {
                children: (0, e.jsxs)(Zi, {
                  userYearInReview: t,
                  children: [
                    (0, e.jsx)(Ma, { userYearInReview: t }),
                    d === 1 && (0, e.jsx)(ur, { userYearInReview: t }),
                  ],
                }),
              }),
              (0, e.jsx)(Le.tH, {
                children: (0, e.jsx)(ws, { userYearInReview: t }),
              }),
              typeof d == "number" &&
                d > 1 &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ur, { userYearInReview: t }),
                    (0, e.jsx)("div", {
                      className: f().TimeRelatedCtn,
                      children: (0, e.jsx)(Le.tH, {
                        children: (0, e.jsx)(Ka, { userYearInReview: t }),
                      }),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: f().GraphRelatedCtn,
                children: (0, e.jsx)(Le.tH, {
                  children: (0, e.jsx)(qs, { userYearInReview: t }),
                }),
              }),
              !!t.GetPlayTimeStats().playtime_streak &&
                (0, e.jsx)(Le.tH, {
                  children: (0, e.jsx)(ia, { userYearInReview: t }),
                }),
              typeof d == "number" &&
                d > 5 &&
                (0, e.jsx)(Le.tH, {
                  children: (0, e.jsx)(is, { userYearInReview: t, nYear: l }),
                }),
              (0, e.jsx)(Le.tH, {
                children: (0, e.jsxs)("div", {
                  className: f().BottomCtn,
                  children: [
                    (0, e.jsx)(Zi, {
                      userYearInReview: t,
                      children: (0, e.jsx)(zo, {
                        playerName: c,
                        userYearInReview: t,
                      }),
                    }),
                    i &&
                      (0, e.jsxs)("div", {
                        className: Ue().ShareOptions,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ue().ShareTitle,
                            children: x.c.Localize("#YIR_ShareOptionsTitle"),
                          }),
                          (0, e.jsxs)(Pe.Z, {
                            className: Ue().ShareColumns,
                            children: [
                              (0, e.jsxs)("div", {
                                className: B()(Ue().ShareArea),
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Ue().ShareTypeTitle,
                                    children: x.c.Localize(
                                      "#YIR_ShareModal_TitleSocial",
                                    ),
                                  }),
                                  (0, e.jsx)(nr, { steamid: a, nYear: l }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: B()(Ue().ShareArea),
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Ue().ShareTypeTitle,
                                    children: x.c.Localize(
                                      "#YIR_ShareModal_TitleProfile",
                                    ),
                                  }),
                                  (0, e.jsxs)(on.Ii, {
                                    href: `${N.TS.COMMUNITY_BASE_URL}profiles/${N.iA.steamid}/edit/showcases`,
                                    className: B()(Ue().ShareButton),
                                    children: [
                                      (0, e.jsx)(Te.KJW, {
                                        className: Ue().ShareLinkIcon,
                                      }),
                                      (0, e.jsx)("span", {
                                        className: B()(Ue().ShareText),
                                        children: x.c.Localize(
                                          "#YIR_ShareModal_AddShowcase",
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, e.jsx)(Le.tH, {
                children: (0, e.jsx)(Gs, { userYearInReview: t }),
              }),
              (0, e.jsx)(Le.tH, {
                children: (0, e.jsx)(oa, { steamid: a, year: l }),
              }),
              (0, e.jsx)(Le.tH, { children: (0, e.jsx)(wo, { year: l }) }),
              (0, e.jsx)(Le.tH, {
                children: (0, e.jsx)(vo, { userYearInReview: t }),
              }),
            ],
          });
        }
        function Ao() {
          const o = ne(),
            { persona_name: t, avatar_url: i } = (0, A.useContext)(en);
          return (0, e.jsxs)("div", {
            className: f().AvatarName,
            children: [
              (0, e.jsx)(Rr.Ul, {
                strAvatarURL: i.replace(/\.jpg$/, "_full.jpg"),
                className: f().UserAvatar,
              }),
              (0, e.jsx)("span", {
                className: B()(f().UserName, o.UserName),
                children: x.c.Localize("#YearInReview_PossessiveUserName", t),
              }),
            ],
          });
        }
        function Lo(o) {
          let { userYearInReview: t } = o;
          const i = t.GetSteamID(),
            a = t.GetYear();
          return (0, e.jsx)("div", {
            className: B()(f().YearInReviewContent, f().TopAreaSizer),
            children: (0, e.jsxs)("div", {
              className: f().HeaderCtn,
              children: [
                (0, e.jsx)("div", {
                  className: f().RewindHeader,
                  children: x.c.LocalizeReact(
                    "#YearInReview_SteamRewindHeader",
                    (0, e.jsx)(Ao, {}),
                    tn.Z.Localize("#date_year", a, " "),
                  ),
                }),
                N.iA.logged_in &&
                  (0, e.jsx)("div", {
                    className: f().HeaderShareCtn,
                    children: (0, e.jsx)("div", {
                      className: B()(Ue().ShareArea),
                      children: (0, e.jsx)(Le.tH, {
                        children: (0, e.jsx)(nr, { steamid: i, nYear: a }),
                      }),
                    }),
                  }),
              ],
            }),
          });
        }
        function No(o) {
          const {
              viewAsUser: t,
              setViewAsUser: i,
              themeYear: a,
              setThemeYear: l,
            } = o,
            c = [
              { data: 2022, label: "2022" },
              { data: 2023, label: "2023" },
              { data: 2024, label: "2024" },
              { data: 2025, label: "2025" },
              { data: 2026, label: "2026" },
            ],
            d = (0, A.useCallback)(
              (y) => {
                l(y.data);
              },
              [l],
            ),
            m = (0, Se.Qn)(),
            { bAllowDevToggles: g } = Ii();
          return !g || m
            ? null
            : (0, e.jsxs)("div", {
                className: B()(f().DevToggle, Cr.ValveOnlyBackground),
                children: [
                  (0, e.jsx)("div", {
                    children: "Debug Only: Toggle First Person View",
                  }),
                  (0, e.jsx)(qn.RF, { onChange: i, checked: t }),
                  (0, e.jsx)("div", {
                    children:
                      "Debug Only: Change to view the contents in the css style of a different year",
                  }),
                  (0, e.jsx)(qn.ZU, {
                    rgOptions: c,
                    selectedOption: a,
                    onChange: d,
                  }),
                ],
              });
        }
        function hn(o) {
          let { message: t } = o;
          return (0, e.jsxs)("div", {
            className: f().MissingUserCtn,
            children: [
              (0, e.jsx)("div", { className: f().GenericBackground }),
              (0, e.jsxs)("div", {
                className: B()(f().YearInReviewContainer, f().ErrorMsg),
                children: [
                  (0, e.jsx)("div", {
                    className: f().SectionTitle,
                    children: t,
                  }),
                  (0, e.jsx)("div", {}),
                ],
              }),
            ],
          });
        }
        function zo(o) {
          let { userYearInReview: t } = o;
          const i = ne();
          if (!N.iA.is_support && N.iA.accountid != t.GetAccountID())
            return null;
          const a = t.GetYear();
          return (0, e.jsx)("div", {
            className: B()(f().YearInReviewContent, f().ConclusionCtn),
            children: (0, e.jsx)("div", {
              className: f().SectionTitle,
              children: x.c.LocalizeReact(
                "#YIR_Conclusion",
                (0, e.jsx)("span", {
                  className: B()(f().ConclusionName, i.ConclusionName),
                  children: o.playerName,
                }),
                a,
              ),
            }),
          });
        }
        function wo(o) {
          const { year: t } = o;
          return (0, e.jsxs)("div", {
            className: B()(f().YearInReviewContenredPadding, f().FAQSection),
            children: [
              (0, e.jsx)("div", {
                className: f().SectionTitle,
                children: x.c.Localize("#YIR_FAQ_Title"),
              }),
              (0, e.jsxs)("div", {
                className: f().Questions,
                children: [
                  (0, e.jsxs)("div", {
                    className: f().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().Question,
                        children: x.c.Localize("#YIR_FAQ_Dates_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().Answer,
                        children: x.c.Localize("#YIR_FAQ_Dates_A", t),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().Question,
                        children: x.c.Localize("#YIR_FAQ_Offline_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().Answer,
                        children: x.c.Localize("#YIR_FAQ_Offline_A"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().Question,
                        children: x.c.Localize("#YIR_FAQ_Types_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().Answer,
                        children: x.c.Localize("#YIR_FAQ_Types_A"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().Question,
                        children: x.c.Localize("#YIR_FAQ_Share_Q"),
                      }),
                      (0, e.jsxs)("div", {
                        className: f().Answer,
                        children: [
                          x.c.Localize("#YIR_FAQ_Share_A"),
                          (0, e.jsxs)("ol", {
                            children: [
                              (0, e.jsx)("li", {
                                children: x.c.Localize("#YIR_FAQ_Share_A_b1"),
                              }),
                              (0, e.jsx)("li", {
                                children: x.c.Localize("#YIR_FAQ_Share_A_b2"),
                              }),
                              (0, e.jsx)("li", {
                                children: x.c.Localize("#YIR_FAQ_Share_A_b3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().Question,
                        children: x.c.Localize("#YIR_FAQ_ShareFamily_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().Answer,
                        children: x.c.Localize("#YIR_FAQ_ShareFamily_A"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: f().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: f().Question,
                        children: x.c.Localize("#YIR_FAQ_Controller_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: f().Answer,
                        children: x.c.Localize("#YIR_FAQ_Controller_A1"),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        className: f().Answer,
                        children: x.c.Localize("#YIR_FAQ_Controller_A2"),
                      }),
                    ],
                  }),
                  t == 2022
                    ? (0, e.jsxs)("div", {
                        className: f().QuestionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: f().Question,
                            children: x.c.Localize("#YIR_FAQ_PrivateApps_Q"),
                          }),
                          (0, e.jsx)("div", {
                            className: f().Answer,
                            children: x.c.Localize("#YIR_FAQ_PrivateApps_A", t),
                          }),
                        ],
                      })
                    : (0, e.jsxs)("div", {
                        className: f().QuestionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: f().Question,
                            children: x.c.Localize("#YIR_FAQ_PrivateApps_v2_Q"),
                          }),
                          (0, e.jsx)("div", {
                            className: f().Answer,
                            children: x.c.Localize(
                              "#YIR_FAQ_PrivateApps_v2_A",
                              t,
                            ),
                          }),
                        ],
                      }),
                ],
              }),
            ],
          });
        }
        var Eo = r(58732),
          hr = r(92757),
          fr = r(76559),
          vr = r(51079);
        const yr = { Home: (o, t) => `${Eo.B.YearInReview(o, t)}` };
        function Po(o) {
          return (0, e.jsx)(vr.Ay, {
            domain: "store.steampowered.com",
            controller: "yearinreview",
            children: (0, e.jsx)(hr.dO, {
              children: (0, e.jsx)(hr.qh, {
                path: `${yr.Home(":steamId?", ":year?")}`,
                render: (t) =>
                  (0, e.jsx)(vr.Ay, {
                    method: "yearinreview",
                    children: (0, e.jsx)(Le.tH, {
                      children: (0, e.jsx)(Do, {
                        steamId: t.match.params.steamId,
                        year: t.match.params.year,
                      }),
                    }),
                  }),
              }),
            }),
          });
        }
        function Do(o) {
          const { steamId: t, year: i } = o,
            a = (0, cn.jE)(),
            l = A.useMemo(() => Oo(t, i), [t, i]);
          return (
            A.useMemo(() => So(a, l), [a, l]), (0, e.jsx)(jo, { pageData: l })
          );
        }
        function Oo(o, t) {
          const i = o == "my" ? N.iA.steamid : o || "",
            a = parseInt(t ?? ""),
            l = i ? new fr.b(i).GetAccountID() : 0,
            c =
              N.iA.is_support &&
              !!(0, Se.Fd)(
                "localization_advanced_access",
                "application_config",
              );
          return {
            steamid: i,
            nYear: a,
            eResult: Number.parseInt(
              (0, Se.Fd)("yearinreview_eresults", "application_config"),
            ),
            rgOtherYears:
              (0, Se.Fd)(
                `yearinreview_otheryears_${l}_${a}`,
                "application_config",
              ) ?? [],
            bLocalizationAdvancedAccess: c,
            bAllowDevToggles: c,
          };
        }
        function So(o, t) {
          const { steamid: i, nYear: a } = t;
          if (!i || !a) return;
          const l = new fr.b(i),
            c = pn(l.ConvertTo64BitString(), a);
          if (o.getQueryData(c)) return;
          const d = (0, Se.Fd)(
            `yearinreview_${l.GetAccountID()}_${a}`,
            "application_config",
          );
          Wo(d) &&
            o.setQueryData(
              c,
              En(L.R, {
                stats: d,
                percentiles: (0, Se.Fd)(
                  `yearinreview_${a}_percentiles`,
                  "application_config",
                ),
                distribution: (0, Se.Fd)(
                  `yearinreview_${a}_distribution`,
                  "application_config",
                ),
                previous_year_summary: (0, Se.Fd)(
                  `yearinreview_${a}_previous_year_summary`,
                  "application_config",
                ),
              }),
            );
        }
        function Wo(o) {
          const t = o;
          return (
            !!t &&
            typeof t == "object" &&
            !!t.account_id &&
            typeof t.account_id == "number" &&
            !!t.playtime_stats &&
            typeof t.playtime_stats == "object"
          );
        }
      },
      93237: ($) => {
        $.exports = {
          "duration-app-launch": "800ms",
          Icon: "M5YgSyrfvCXXY_XYhYzcl",
          AchievementIconWrapper: "_1DmdUWkRKPlUYGtbBrrRtx",
          RareAchievementIconGlowContainerRoot: "_1R1QQtfmrxNkfIGlKSdDqG",
          RareAchievementIconGlowContainer: "kt0NXHlg2kFjVkiN_2eEL",
          rotate: "_1ovVdJrqKKpglnX8FYej3J",
          RareAchievementNoAnimation: "_1mSBKtmFFZvwBLtxBOMwak",
          RareAchievementIconGlow: "_3vFmYitX2pXuOenxR0blk8",
          IconGlow: "_2BCoqu4wd4ehkJkelVhjb3",
          HiddenLabel: "_1smYxH70zcX0D3CUQDwF3o",
        };
      },
      32651: ($) => {
        $.exports = {
          sketchfab_play_overlay_image: "_2WGPdoLu3Mok312NPs4DC_",
          sketchfabmodelembedded: "_14FKhrcp5aEfuZXW03a6au",
          dynamiclink_box: "la-zlY3wcco-_OyUTXmWM",
          dynamiclink_preview: "B_zezwCTpciygxrjvmXNV",
          dynamiclink_content: "ZTL8kcUkjRh3Jhqb-3UG5",
          dynamiclink_name: "FZ02D3gsewSiEX4HnmBN-",
          dynamiclink_type: "_2vy-XuvOjtS-m9dMXarnp_",
          dynamiclink_author: "_11n3JjqH-AfIdduU-GuPbA",
        };
      },
      89767: ($) => {
        $.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      37501: ($) => {
        $.exports = { ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm" };
      },
      33998: ($) => {
        $.exports = { Ctn: "_1BsM1CkjnMDPzj027r1TEC" };
      },
      20881: ($) => {
        $.exports = { AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2" };
      },
      48963: ($) => {
        $.exports = {
          "duration-app-launch": "800ms",
          strMediumWidth: "800px",
          strMaxMobileWidth: "600px",
          MediaContainer: "_17AnAUol6F9ESSlAVOkOR-",
          MediaContainerMM: "_1Tu2CrBa6Z3v2u5ysIVCgY",
          ScreenshotThumbnailRow: "_3wPvOiq2zq3UJa_V5yq1BU",
          HilightGrid: "afMTFv3mQcpX11KsRQBFe",
          MainMediaCtn: "_2aKn0S9zGN4Xj9bwODcL4q",
          VideoThumbnail: "_2GhyyIvyUNXt2pBSQ23xKP",
          ScreenshotDisplayCtn: "_2syrNfuweRm7tMaHtnsLIS",
          MainCapsuleWithHover: "_20P19pxcCCC_Er1aQHk0wG",
          MainCapsule: "_27-W3skVjYBfNp6t1cTtnj",
          AppDetails: "_3YbIHh6FwfB9zQVNU18OSy",
          GameName: "_2aMRa54ScYF_qLXc6-dsRN",
          ShortDesc: "_10C6v9rot6kwBCcXpZVENg",
          ThumbnialClickable: "_1RTH8HUO6crMdjXdJjz_-U",
          ThumbnailCtn: "_2s3nR6hnRPmnLN1kr5khr-",
          ThumbnailButton: "_1WQUuWkffHs6P77xq6DMhs",
          videoPlaying: "_1_yxluHJLi2TiNbG5b2KYk",
          VideoPlayButton: "KqB15I24fyQtJzf6XANUI",
          VideoLargeContainer: "_3n_2JdJT5wZ8s9KG2vtLYz",
          CloseButton: "_2dgOJd4j8-hJA92PrLWqZT",
          VideoPopupContainers: "_1_L84gO810flUzqiuUkG7H",
          VideoLarge: "_3AL75Io6tlvBgexvKuaPG0",
        };
      },
      17247: ($) => {
        $.exports = {
          Container: "_2_XDG9R-XpB-eIThkLBCSM",
          Frame: "_1jXJqI6egsVN9-CmA-JFSJ",
          FadeInGrid: "_2bPST_zPPtsm3_ju1z0sQB",
          FadeIn: "_2_0ROqVRdr3CcSZ79hAAVR",
          Square: "_3j8KRorQcTw5QNG3CCiWq7",
          Drift: "_2kCjs9_12D05MUxaukuLYA",
          Grid: "_3vVKhPGkKDvYoSLFYnJYFg",
          Tile: "_3EUu345VfD4sR0IeRyh0nG",
          WideTiles: "_3Y5PVvHgh3lGKAQh3IZY7g",
          FadeInTiles: "_2xidke4A8OynmVULh2_c30",
        };
      },
      96002: ($) => {
        $.exports = {
          AchievementsCtn: "eW4gzXOFFjJmbPpnmLEsW",
          AchievementSectionTitleCtn: "ZYuVh_jByWjEiZwi_1F4D",
          AchievementLinkCtn: "_1A8oO_DYGf_JNfZh8P8cmF",
          AchievementLink: "_3C_8h8nr-D-hecmkF9QN7d",
          AchievementSectionTitle: "_1EIvaYu5QSWg8151LW-jqC",
          ElementFadeIn: "_3wH3B2-F3WSN3wgX9I6E2k",
          AchievementsRowCtn: "_1NYinaqqvjEHq4uImqKSbY",
          AchievementRow: "_14q6Kd9Yidcxi1X1KUxl2q",
          AchievementsTitleCtn: "mA8l4gfC6pg75YdZBvjDk",
          AchievementsBigNum: "_2FvUpx13BKH37sVztlDnpK",
          AchievementsSmallText: "_3H2xA2HF93zu8iENYyzEKg",
          Achievement: "_3jyFz4Q4D6NpReMRSXoiK3",
          RareAchievement: "_1OjH2qNVqYnsbJM2FX4UHe",
          AchievementIcon: "_2TUXykXU6g4otWY6JozzUI",
          ContentRestrictionText: "_1IKOfRrOKNPGjzGAbgTjE_",
          BadgeBoxIntro: "_3Cn6sA1BgWhcU0OndmfDJ",
          BadgeBarFiller: "LQw7WwNM7FoJiy3k15cQo",
          Appear: "_3mgR2GHe98OhWWVYPWA3Ic",
        };
      },
      13824: ($) => {
        $.exports = {
          MonthGridOverallCtn: "_39riY1ALzXddeLUi4b6njV",
          MonthGroupCtn: "_2PJ5dHX9Oih-78STp7Gh9k",
          FirstPlayCtn: "_1flKypEsMgcTMxdLOSn0A2",
          MonthTitle: "_2nSdjNpwdgPuYMr4zlXPEO",
          GameCtn: "_3LAV6o8j79NTSpKVTX-ONT",
          AllGamesBGImage: "_2VKXXNuV16rgy-mMP0blns",
          TabBar: "_3QgCZzaBbkFZcthXSJSTIk",
          Tab: "_3bDzYNUN11xVkEwg4zvn53",
          Active: "_2aXGfqvFYvoIw53MrM6CD4",
        };
      },
      20175: ($) => {
        $.exports = {
          ImagesCtn: "_3JGbh53UazrhAaR6KXi8kg",
          TileSquare: "_2_U9r6EulYb2JwaZf9UwLi",
          TileGrid: "_3smtrFobH8_FPmgFkf2o_v",
          Sub40: "_2X3LKsjOCckZcubnNUbRM2",
          Sub20: "_3cbAf2Xk2Lfluxi1Ojnru0",
          Sub10: "_3_1vYOshswOh0vozKQSWaZ",
          Tile: "_16aTxalT2BhfKWNXqsBlxO",
          SingleGame: "JmN1Eo3aF2wu9FFFgic6Z",
          ImageTint: "_1R2cNHbD97TvCVeJbF_CfG",
          BgImage: "_1qOz25FACHWC7ZHi01fny1",
          ElementFadeIn: "_28HSFCMg_eIIlJ3r0UpPOm",
          BadgeBoxIntro: "_1AP0QN4L8dMuJ-MARIH7fT",
          BadgeBarFiller: "_1rQO1VsQaovoJdnwLQuEKM",
          Appear: "_2IAPuee0PtKJR3f7exLFT1",
        };
      },
      54094: ($) => {
        $.exports = {
          TopHonorsCtn: "_1fuaqG0AL10aJNg8K_c_IU",
          BadgeBox: "K8vmWivWd7RVIckV95vAY",
          BadgeBoxIntro: "rfMXqTSox8ll__3Xmf3Oj",
          BadgeContents: "_2nNt_KIszccOtLf0WzUrIR",
          BadgeRarity_common: "_2_l6GtDYFnoyfVAacbyavx",
          RarityText: "_22TRHKdLUqaIFHF9wYsAkC",
          BadgeRarity_uncommon: "As1w9Z5lMhS31dnkvL5s1",
          BadgeRarity_rare: "_2_N4mS8cXcF67roPPhRTMk",
          BadgeRarity_epic: "_1f88ffr-7Fz7QWaK_zWrdU",
          BadgeRarity_legendary: "_3yYtr6MIzi7bCGhCAE6Ppd",
          RightCol: "_2wSSnjW5drN9i_2gGFxgy",
          RarityInfoCtn: "_9J952xXBVKswIlEmoOyoI",
          RarityBar: "_2ZvJp_rD6rOYVYPDALvtT8",
          RarityBarSegment: "_1eX3GDh_iGLW_M-ucuiZLg",
          FillerBar: "_2vEIDtSp6Gl8JcQ00rILPl",
          SegmentCap: "_2ImXaZqg410GKKDQa3Pbn9",
          BadgeBarFiller: "VvnUA7gDdbtSx5hRJrjdP",
          RarityDesc: "_2k7qd3KsckXv9UOPyfG_0Y",
          BadgeName: "_3hYW021Aqnc0gD0II-8MHL",
          BadgeImgCtn: "_1lDoCOc4W8CAwmYRBEQAgX",
          BadgeDesc: "_3cEWqPn5E4Jn5zZw0sHFdz",
          BadgeGetBtn: "_3XJ0GSTTp7c1x2fO9slbIQ",
          SpiderAndNumbersCnt: "_2smZfwTjxr99Z9G_YHKcfh",
          HalfwidthColumn: "_55cHDEWVgkgz-SPC3r7oT",
          SpidergraphContainer: "_1rrwJfEs-O1ewF5e3rvfT3",
          GraphBox: "_1tAaTMCqxdAxdDZqioNZZS",
          RadarText: "_1lysNWfa68EPC-Gs0MLiBY",
          RadarTextContainer: "_1NnV04cS9KHGEXhpeoeQ3a",
          SpiderResponsiveContainer: "_2m6tajXQvixPE5AD-ZpcSv",
          RadarChartLegend: "_25k2M_lXfkjbMBklQiNdjG",
          NumbersRowsCnt: "_26Xq-LpSAolU4ou9Y-DAua",
          NumbersRow: "_1hST62nyIzmGRJd-9FO5NH",
          NumbersLabel: "_316XVsECeACtqEuFhbw0z9",
          NumbersValue: "wZIDD_Uf6MaGoQQi4XP40",
          FillerDots: "mNltGcIak52Q1s5Zf0NIU",
          Disabled: "MwG2ah1xIjS4OqRtDiCFg",
          SectionLabel: "_3inzpKl31BtWhQSbg_7YwD",
          SectionDesc: "_1rEaTcJ6ze8AFIgxfZQ2yo",
          PlayBehaviorContainer: "C-BemrA90gLEsdt8GXUCW",
          ProgressBarFilled: "YvZP7EccXynGhWGolm-0V",
          GlitterBox: "_2eSDMaWxXPgE_9pGt-244C",
          GlitterSecond: "_2aQpSZj3RzmOr4PMTC1yYv",
          Glitter: "MrG3WtVvi1CJJOHxWLTup",
          glitterMove: "_6daCzBGcfUECEWT0DrkTb",
          glitterMove2: "O0KfKVlRf_7MOnYxM78Ul",
          PlayBehaviorSectionSubTitle: "_1YOa2_BDd_TkMANU6mMJE7",
          PlayerBehaviorProgressCnt: "_1X-jN8ooh5IUIJLkVhijmy",
          ProgressBarWrapper: "_1YwMMTi70jbfbwWfypUKo2",
          ProgressLabelsCnt: "j7FRn5nh3Vgo5rwVtLZ-d",
          ProgressSteamAvgLabel: "_1BlJPGLkneFv9cCQ77C_Dy",
          progressBar: "SM2hr-JEmMZ3nNlzXtoAM",
          Appear: "_21N1VxABguGyT6ysf3ZaZU",
          ProgressIcon: "_2kKy0ggIAf1owsS46dPOsP",
          ProgressIconSVG: "_3pR8vNlF4fw-IYTm2aQmyD",
          ProgressRightSide: "_3I2K8N7mKHswxhexlXUcC4",
          ProgressBar: "n5ZPCAGDZJjDaAgiZNWlM",
          ProgressLabel: "WJvSwYLbTMOL4rOFTJjHI",
          PlayNewnessContainer: "_1PSNF8opqp5pTAsjGZcEOx",
          GameNewnessComparisonContainer: "_3pgx0DerD0LSS9-eKcf4Hm",
          GameNewnessDataCnt: "_1mb_OZ_h-Dm2kW0s0v_koN",
          WheelChart: "NAtJjAiS2Shk-7DYc3FKY",
          WheelArc: "_3f8H_QF6WzUP1JLNlg-3nL",
          Active: "M68lG7ooQ9Qf__kYeYbw3",
          RightSideContainer: "_1U6F5GMm_PUsOkT5j_u0lh",
          DataBoxesContainer: "_3hCn2uxdtjvNUA_7-OQQue",
          FlavorLabel: "FLK0eC7Hha2-s1lmHSGS1",
          DataBox: "_3_yBPJ3Dz_41t_ynzRzu5W",
          PercentageLabel: "_1CY52kiA0KYztlYn57Xr_J",
          PercentageDescriptionLabel: "_3lRjsvADdzItoX6kp9ZA3l",
          DataBoxArrow: "_1KVkdXPA9foh8DFM-qCxAK",
          GameNewnessTitle: "_1XdZHYD0-hj6KSukuao0aQ",
          ElementFadeIn: "_1CU84LiLM_7J6_557M5kgY",
        };
      },
      10738: ($) => {
        $.exports = {
          strGameDetailsTransitionTimeMS: "300ms",
          TotalHoursContainer: "v41gDiFwzw3DGnwP-cALt",
          HoursPlayed: "xoO6mo4p8_IOElI9H4Y5m",
          TotalHoursSubtitle: "_2-sdJ9wh7eHK4w4Voqc9ln",
          FullWidth: "_17wR6FHMEczf-g1zjUy-I0",
          TopGamesContainer: "_2Y1sojYqIjMbXoPIYQcNCp",
          TopGameTitleCtn: "_34JGPXmnQsOCJxAEu1xcrt",
          TopGameTitle: "_19je0cCd02CNGNMBOdci9V",
          TopGameBlockContainer: "jYyY7c20MJpyHRM26h1uY",
          LoadingCtn: "_2gZk9_4Xzl3ad1N8aa-cu0",
          OddGradient: "_245SNjjS1E3LEBXq1-r4bP",
          StandardInfoCtn: "_25MpyGTI8DJW4Zs8kPxdPu",
          NumSubtitle: "_2byk5HZvPT_RuATttbQ_5u",
          IntroLine: "_1elCDgKXuMsJGX3ide6oB3",
          Title: "_1CZyBeiXVNP99-3wCbR-u1",
          StatsGroup: "_4BvwvO3VgH6ZG7Qm9sktR",
          EvenGradient: "zLHeIjcDA7wGAKOP0whhC",
          SelectedInfoCtn: "_3fxvzSnvVc-dF2juJkRS5D",
          BackgroundImageFull: "_22ewA8ylzFNgyWrTZydfoX",
          ElementFadeIn: "_3nWeazHfpRmP8ACDtkkOTP",
          BackgroundImage: "_22vHC3-heyz9GnK5oX9K4g",
          InfoContentSpacing: "_2koF9YfeckrXhWH_6u-oPn",
          InfoContainer: "_1znVngHcZoMW202kwdao1x",
          GameLinks: "_376D9_KYoFhWD_jaMVCiL5",
          GameLink: "_3AJLZMHaJMHjqz8GnXgOXM",
          AddToWishlist: "_3Tbtm47DDFL79uIDv2jG7F",
          TitleLongName: "_3dIe92zTA3DZi1O9bKh2is",
          StatContainer: "BgocQlDSBw3hX4WIkeucS",
          BigNum: "Qrj9IL_mXAruukOvqwEQs",
          ChartStuff: "eE5uoTvZkRDHrLchbI4qZ",
          GameChartCtn: "_3RG2kKm1w-tWHsasI1rtFQ",
          GameChart: "_1pAvTYGtmTjIiVfjHw7UyD",
          GameChartFirstPlayed: "_2YyInrut3rASUln22zAIKA",
          ChartWidthHelper: "_124tZna8-zA2IxlGG1PCkV",
          GameContentCtn: "_28_8DbvXMfuGo0s0n7qPjC",
          GameCtn: "mYJUXAjxXDya5F1IOGXzA",
          GameItemDetails: "AcWl62PgtFqrKdMyKAQz1",
          GamePlayDetails: "_2tZ0ob7D8-SB3-4PEaJx_c",
          SteamDeckGameCapRow: "_22QsAjZhFOTIZrzllIurWw",
          CapsuleCtn: "_1tYDn7WYcdPWCEqCkNz-Sh",
          Appear: "_35970dLKkA_4fmagrjhQ46",
          FirstPlayCtn: "_189YieA8K_Mw9Al9s7_eIA",
          SpecialFlags: "_2pkhaqOq1UN7nIJG2porVE",
          DemoPlayDetails: "_1G35DzHjQTcCERQC-ECCLG",
          PlaytestPlayDetails: "_3t18OQQyxYzrBX3bQTTn8_",
          PlatformChartsCtn: "_2jWNP3arYY1BL3XcHAn84H",
          PlatformSpacing: "SCcKgk6BtdKuw9lsfGyYc",
          PlatformChartsRow: "_34dEzfz9OEnuEakksZvf9p",
          PieCtn: "_1LEPaxVodeDXqbGrLtA3Sy",
          GraphTitle: "NZbnzXMjU4o-X5NCZCwpV",
          PlatformDetailsSetup: "_3cAa7I-1ce0j1_Eg_kDiqB",
          LongestStreakGamesWrapper: "_1dN12HR7e2nKa7EjxxZQqM",
          CapRow: "_1eIbxOvxTgYUrKNzdR-L2S",
          LongestStreak: "MPGp0O3RzT0Q49w0c0qP0",
          AnimateCap: "_2otiVZWl9joMU9AEAW2Kow",
          StreakCtn: "_1Au1R3IqWALErUW3-9bU1c",
          TimePlayed: "ymaKsi0nft6kaA8oiJG1G",
          UnavailableGame: "_2-4VNSMEhhZ-xdD0370G8f",
          GameTitle: "_3_zycx95Xq_sda4DXlejZ3",
          GameDetailsPopup: "_3WtIxWH7i_hDPowMRyjdvD",
          Visible: "upLCDXwVTCA0UMfy-QsCt",
          ContentWrapper: "Nl_0Z8YOWE5w_X1p7fe_l",
          ButtonCtn: "_3BQdAb7-SQZ5czq4iF3IZy",
          ButtonIcon: "_16_hduxJtJFKPM6lpvyCv6",
          Disabled: "_2m3wA7jwIPPZv7sDP6RqFd",
          GameWrapper: "_3glI8tpJguLJ9Sv4yRyR0G",
          GamepadUI: "_2MnncrzvrUVL3Xm9OJiabl",
          MoreButtonContainer: "_3FFNVwcbTVx-7hdZ7OprmX",
          ShowMoreBtn: "_2KKzOhD1eO3N_NJLw4IsEf",
          BadgeBoxIntro: "_3b736i-37o9DisLoo-BdFc",
          BadgeBarFiller: "_2Fka1tXRnFsKNRxvNc7CXU",
        };
      },
      5751: ($) => {
        $.exports = {
          FriendCtn: "QUjIgprzA6Kbs7xBAZ0G4",
          FriendsSharedSection: "_2Rq_zPIIJLZ1-QzjOI_QoE",
          FriendsSharedSectionTitle: "_35laQj1c49taZ9qr-yWwvU",
          FriendsGrid: "_3rWLm6o2EmBKqcTkRck7VQ",
        };
      },
      40216: ($) => {
        $.exports = {
          Video: "_1M1FzBz-vwcF2DlRDw6aJU",
          PlatformDataContainer: "_2KkuIOs5TU9Im57khW5Mjx",
          DeckContainer: "SRvgXpX46BGk3ExxAmzXp",
          StatsRow: "_2wwiTr9_1mZBnNSqY8TUY",
          SectionSubTitle: "bDYxzNyICQbYgW4xU4OV3",
          Disclaimer: "_3Lh3IS123CdB1UnKrM-UqX",
          SectionTitle: "U-nH5AEIm21jmfNmy9D62",
          ScreenContainer: "wclk5mJZGY7HN8R39K9UL",
        };
      },
      7253: ($) => {
        $.exports = {
          YearInReviewContainer: "_2Esrbjun6oDMfm3z0_S9Qo",
          YearInReviewContent: "_34xjVN8zuusfY6i5pdeRmd",
          TopAreaSizer: "cfYlTBD9UMEGy2eJy5IOW",
          TopHonorsContent: "_1prXkqO0MJWkcqW8bantCg",
          TabCtn: "_1vG6SnFZi-39wNl7yLagkJ",
          TabBar: "_3wXsAskmaHT7gqXr1IRL-q",
          Tab: "_2s9Wnaogy1AMi7QV2JxB-a",
          HeaderCtn: "_27O_99InrFLHyhSohDCxXU",
          RewindHeader: "_1JMmapAfV9CHfT-jwn3cYd",
          AvatarName: "_1Tj700YdecW57M1F9BtRnJ",
          UserAvatar: "-rUtuwXaIuwLDG9V4cUCC",
          UserName: "PVtbr3rlq7ect5ubSQ9F2",
          InlineUserName: "_1dsNG4PwglSIFcdCyDXQ_W",
          SectionTitle: "_1BNeBwWm-o15qeck5usEnN",
          Appear: "jZQYm4z4716xvqrUBHc_v",
          SectionSubTitle: "QI8iZ_nw5g3Y50IrU0oCr",
          SummaryArea: "_3uAxHEp9ysLQlzG-sK70cA",
          SummaryGridCtn: "_2T_rWOusDD7hI72GWqvSxy",
          SummaryCtnShadow: "tFnsQF7Hz95xX6SAoMsJ1",
          SummaryGridStandard: "_3ssxngi9TwcdmavYrjhJu0",
          SummaryGridSparse: "_13eGKeML2QcpA8dIvk-C96",
          GridItem: "rQGunY6vAvoBjpyGWmO7L",
          Game0: "_2gomgwC7T6AApxhCwH9y81",
          Game1: "_3e_VgLcpwHUfSQTu0yecqV",
          Game2: "_1zUzIl0TemMycLw8-ydBS0",
          OverviewBlock: "_3I6H8xkzT-CN3k2aPbncrO",
          BackgroundImage: "_1QgHJQJkFzU0eO3k4iRMeg",
          StreakBlock: "_1HLlwSlgqdvbwC_QGMBkLu",
          SummaryBlockHugeNumCtn: "_10b7HEOu3JIvH2oxFq98jE",
          BigNum: "_1nw1AxFXoiKpq_vOQ2gxSo",
          HardwareBlock: "_2eKuac26y2RDqwd3hijKhx",
          DeviceBlock: "_2JQ-inucnlchcJHltk89o4",
          SummaryCtn: "_2lymW1w_z1bts7qBxqDez-",
          SubtleBorder: "_2uIEUUlmsOtQ_cCEUHLzFM",
          HardwareSummary: "_3t5h2iZU4-U2vzsydxHQHU",
          ContentCtn: "_2wndfjAf02YLWuZTrl3Upk",
          KeyboardPortion: "_2sGNJXZZvAQsMvvsHQpsi9",
          Stat: "_3iusuePDL7HJ0BBMvsswXN",
          ControllerPortion: "_2Rju5NBn6F8SrpJhuKw0n-",
          Small: "_3f50VItIYkZXyjyyYuI5tI",
          Large: "_3BVO6m6Gnm0Chutro2BvHY",
          Subtitle: "Hm6JxuYw44F8HImXpU6rv",
          SummaryBlockGameName: "_3mF7QTrg76rUpW_7ZkH6Cj",
          SummaryBlockExtrasCtn: "uoFglYZQgZ3E6nWuPOoNS",
          BackgroundImageCover: "_1Cg4zw9p61lU_f4mrj9CVc",
          Achievements: "rYd4jy19WhWo8KETr4H-0",
          SummaryBlockTitle: "WH6tAR8H_SDsgV0sr_vL2",
          YearSubtitle: "CccBlIamN5QHiR2hhrRs7",
          Big: "_22GbSR4dXDNqFH8C_jR7wU",
          StatBox: "bk_lIAnpiU1e8qA_nznqG",
          SubSummaryCtn: "_2eMcK6ctsM113Dn4baXnwV",
          LongestStreakStat: "S_D1GGmEcTX1dGQp2KsjD",
          SmallText: "_3f1C4a_ZeRlqnBRzzCZDti",
          ThreeNumbers: "_2ZvOGrXnag650oklI7V0Om",
          SixNumbers: "FXwKG2EZBUov0iVhUTN4x",
          SmallLightText: "_3JNlrvwokXNRohEO0Tvs4e",
          CompareCtn: "j2MatsBj6tYWgcbtnkImS",
          CompareArrow: "wbWwg_omLILncKnMkKpsw",
          CompareText: "_3Ljt05PFk5ZfE26qoQ4-u5",
          ArrowUpCtn: "_1PZY3fz_RgHgbaH2lv2iNT",
          ArrowDownCtn: "_15faDGb4x4EbGg9sPldGZt",
          DeviceSummary: "KvSx-L-06AGp-qLrpef2c",
          HardwareStats: "_2qesp6PQPKseF-t6dpD3Wq",
          GraphRelatedCtn: "_2fmyth7b8H4gIhRBFczy5e",
          TimeRelatedCtn: "_2KxtKJjzlzIuzapjVSKqNz",
          TopHonorsSection: "_2EdxrhGWVNO8mvMC8NvWh_",
          AllPlayedCtn: "_2ofWP-i86B2a4xH6i-k3P3",
          AllPlayedContentCtn: "eP1XjsqRoD1zipUPQayu0",
          AllFirstPlayedCtn: "_1KfUzP0XKpB4290fXK8ify",
          DevToggle: "_1JBThC4rQWQ9zF5EMfQ4MF",
          MissingUserCtn: "_7HO2RlSAV0C6uHhSoW4i9",
          LogInCtn: "_3G68ot7J5tbGGa0Ee0wBIH",
          GenericBackground: "_3Bs8RBdWes0mqDsucdIzs",
          LoginButtonCtn: "_1dzf13YE6Dr2CEZy3nmiqB",
          ErrorMsg: "_2MjJiHLsSfL2DiDi_MPzUA",
          HeaderShareCtn: "_2N4fkkQz0G3s4han4AOTqr",
          ConclusionCtn: "_16sGmr-phaS10eLa666GJI",
          Questions: "_2JfwVZoBEMm3bmuUypCQad",
          FAQSection: "Y4GNRIKAMRdKmKxoYF8vm",
          QuestionCtn: "O3eoDWRpFpwI3gVzDZrmx",
          Question: "_7SV_vDBmbutmYDI4bHuk7",
          Answer: "NUC9MsCLgFupOBlmVEFD4",
          BottomCtn: "_2Ie0FCf-KNZznJYeFPagr2",
          ElementFadeIn: "_15L4egKWSvfAYxDxkQ8JYL",
          BadgeBoxIntro: "_3AZJqdqiXdE75tiaa7ZNUO",
          BadgeBarFiller: "_1HKcWglObNA64EsrdCdgrr",
        };
      },
      11498: ($) => {
        $.exports = {
          Section: "_3PAniBq6rjYc2m36IugM4q",
          SectionTitle: "_2Pj_j5ySAIbAQCZJXXHaxC",
          StreakSubTitle: "_23EJkuDULHTcznUJFfQClS",
          LongestStreakDailyCount: "_3Mls26KZCqFSTSheIHbQGV",
          StreakSizeCtn: "_2q-ySU-PiZjoMUj-6FcbKE",
          LongestStreakNumber: "_2mVNLmFQcHGqNencPh5yTz",
          StreakDates: "_1QUGOSy4PRgUezrY3wotbN",
          Appear: "mGVafvcRBs0HMzFZzM-DJ",
          LongestStreakGamesWrapper: "_3PpAFVa_jQ0ywCx7Xwf5BO",
          CapRowTitle: "_3odIeGfNSYjE1Pco5IxcMk",
          AnimateTitle: "_2v_Mh0aWrgvAsocnFFwGZ6",
          StreakCtn: "oyIC-gr9l17BgbvPxkiEz",
          CapRowCtn: "_1Qu-b7iJ7_WLnqhbkGK8KS",
          StreakBarCtn: "_18hECsdhmWyKkMjz9s4lE9",
          StreakSizeFullBar: "_3PQ0fWKugP_c_2ll8h9tbd",
          StreakBarAppear: "_3U_VC64UnvAlsdw8U3esu6",
          Tick: "_1dWifBSphUmwpzW4VJMACF",
          StreakTicksAppear: "_3baMsQloxlceJn-CpEUdn4",
          StreakTickCtn: "_1mi4nzggFHFLfhhTZbEFel",
          LargerTicks: "_GxOA0m2bytLLUw5q2jIT",
          LongestStreakBgImage: "_17zwGMeaO0XJXSkPq7a04I",
          ElementFadeIn: "_3KSWuVf_eGV3lstWKlCK_U",
          BadgeBoxIntro: "_1OHTIKYtZ9Ow6rX25gdfOo",
          BadgeBarFiller: "_1c-hMxFIRB9bFBmuwCHzvX",
        };
      },
      1946: ($) => {
        $.exports = {
          OtherYearsCtn: "ZFr-zkTzmpySQuVgzxYUD",
          OtherYearsHeader: "_3Y2GCNOtGNo0Xe8r1Kt626",
          OtherYearLinks: "_3Uhn7ap72dGDfQpLDwBkcX",
          OtherYearLink: "_3518yDLyo2qkU1CI0RYXgG",
        };
      },
      30386: ($) => {
        $.exports = {
          ScreenshotsCtn: "_3z56d8ZAw1m7tymCPKLnZG",
          ElementFadeIn: "_2MMYVAwyNusl-34nkFkuct",
          ScreenshotHeader: "_2L22tSzCNjfYgYv7TmkZFx",
          ScreenshotRow: "_1iyC0Ag6XVeawCcnXnGk84",
          ScreenshotCtn: "_2f-mtEH2nBQPdLLAhFuHAV",
          ContentRestrictionText: "_3AVAQ0ejsc_Yx_RdEes-tz",
          BadgeBoxIntro: "AGlFAzZf1pf-pjqSJ7HCU",
          BadgeBarFiller: "_1kJTWtILvxJ2sJJe5I7WAu",
          Appear: "_3sCSuiPiK6YZP4YqJit8xO",
        };
      },
      60197: ($) => {
        $.exports = {
          ShareOptions: "_3JS3uvYxmm4uxg9LKg7V5v",
          ShareTitle: "_2KB0bv4bJkXKXE8ulaq-Gt",
          ShareColumns: "WWOHpVBgD-jmCyFqQdsQ-",
          ShowcaseInfo: "_1IRlqYfguWSVErwdY_3_oW",
          ShareCtn: "_3E9DRgDhze3SZC_8rBwh99",
          YIRShareCtn: "_31wedODkl1bENzsBW0EMLj",
          ShareButton: "_1chFu_g7Pym2VQZoV0Kzo1",
          PrivacyWarning: "RMRlwqHeaQrzZUfGqzTH",
          ShareTypeTitle: "_2pNSPsIoRtculZcbEkAG7p",
          ShareArea: "_3YTJzMIIhl0gbxy3VSWiBU",
          SeeRewindButton: "_1rpdyB04B1_1ebJE_duD2o",
          Visible: "_1vntg59bE9Q9TlrfhWrxdY",
          DropDownSizer: "_2yCHl9jEyJatvpX_K0NOnS",
          ShareHeader: "QtgJ2vuunulNd0kt151m7",
          DropdownButton: "_1OAMjMYJFZIRqi7Yuw7Sk",
          Error: "_4P3AgyOvHm67bo4nqnykw",
          DropdownOption: "_2WqegcyOGXE3OfOBPuFKJc",
          ShareText: "_3nWCNZlUDKPFLtm9kzz-aM",
          ShareIcon: "_2ZgUDbleMuASK8J04DMwAI",
          ShareModalDialogCtn: "rkCkoPjO5tWNNKg1C-4He",
          ShareModal: "OuDcn_EUKN87W0QRAXmnm",
          ShareLanguagePicker: "_1AUpsJw7_5TmxJSEOpnMMa",
          LanguageLabel: "_2Mjl1MC-eBE-tHDeIoqR-X",
          LangaugeDropdown: "C7WyauRrz8Gn01miyf_zU",
          CarouselCtn: "_12tro3nlSoDAnHR8Owl2vq",
          LoadingCtn: "_1WIhto2_LVaK2uRT08ROL_",
          PreviewImageCtn: "_3Q80Cy7mIk7SgDXsIJVpBh",
          PreviewClickCtn: "AKi0dI-yZTqoGbrXwdcLU",
          PreviewAndIconCtn: "ufwvtRETTFZXtZhb_2YrV",
          CloseIcon: "_1GcFVEjZotDw7tRUGkNn_w",
          PreviewImage_1080x1080: "_3t0bs5rOn7hUuHkHzroNlv",
          PreviewImage_1080x1920: "SUsV4qmRw0Tb9YlN5RoPp",
          PreviewImage_1200x628: "c1xhpyCeymLIYsz_s72rE",
          ImageArrowCtn: "_3EH6zdLzxQWcZnxCqZW0Q",
          Arrow: "jvbeU0Bou-oLQKh3j3ZAP",
          Left: "_1wzQblWkABmbS_w5mzgjqG",
          Right: "_39Y8RA971bGbJbOzEu4D7Y",
          ArrowDisabled: "_2zvDQQbZ-fxXABN88O355",
          ImagesCtn: "_1penYHZK5jtR2fhACZ7oNg",
          CenterImage: "_17MFLvHvCFoo1Z5LYr2X5u",
          ImgAndPreviewCtn: "_2xSt2_hCKs1Y1mahSb2Q-t",
          PreviewMask: "_2Lj4I8nwnDHOQVw6BwzarS",
          Peek: "uUXl4JVWLrftehzyXSOX_",
          RightPeak: "_1OLhccdSVrD5PyyrMCHocr",
          LeftPeak: "_3MsRzX0A-Q5jHnzfgKh_sH",
          CenterImg: "_1bbh4X_f6RdHR2juBmB5CC",
          PeakImg: "_1ya7qrbf5qUmfEwm2ajy6y",
          InteractButton: "_2ROuf9Q_Xc2fJ6h6KMPhAv",
          InteractButtonIcon: "_1yRGhIYdp7cijMDnbCkWF_",
          InteractButtonText: "IKqdC1gWDEh47b6aShvM",
          CarouselHintCtn: "_13LmX30k-qZcko23iAy_Wy",
          CarouselHint: "_3Lndnk7OuA-Cxrwu08gp9C",
          ActiveHint: "_36bKAFgz9yC26XLbSWSLLK",
          FormatHint: "_3AG4PvnnmFCLO8DBW5LxfU",
          FooterCtn: "_3zpbzTS5MXoJJRzrH9P1_A",
          TooltipCtn: "_2R2HhI-PrhY9YK1e6aw8KH",
          ShareURLCtn: "_138H68CtJTGveTjNlBA7oh",
          ShareLinkButton: "_2-pp7mLO0Z5LW_FQNWcuxT",
          ShareShortUrl: "_3_ln9maFPGFW9W9EImpue5",
          ShareURLTitle: "_1i0cNS9ygjMYD1w4cYQaFn",
          SteamButtons: "g_mP1q1Dfphi44kdlau1n",
          SocialButtons: "_35VyVQJGOTuLFu-ykNK0sQ",
          FeedBtn: "_26-PhsWZa7m6d4R1dlcBoO",
          FB: "_152BeQAIzn7gu6Px1V_qhD",
          TW: "_36Gw4vPvTa9gxJT9uPT44t",
          RD: "LmriTy2U0fOHClwJH7xM2",
          Disabled: "_37-P5ZQHj_XMuKff3PVXbB",
          VisBorder: "_28_hvR-87-1ah11ZwGiyOR",
          MobileCtn: "_1otpP9I_-wTkl2Jwm7SicJ",
          ShareLinkIcon: "_1kyX_DYZkTKUMjxdbfYgpp",
          ShareLinkText: "CZ5IqOSp9UsKs471m38mm",
          ElementFadeIn: "_34tvhpjD4JWJmlp63qfJ_u",
          BadgeBoxIntro: "_3ue5J5y5iKtAr7GmxxYyjr",
          BadgeBarFiller: "_2z0vHCKh4Vd4aHr-vQjwi5",
          Appear: "_21sWxqz5OUqF25JIXG2olE",
        };
      },
      87762: ($) => {
        $.exports = {
          Section: "_23CAjrh1GSkSnVLvTR5oMw",
          Windows: "_1vUKHU_-dtbGzZHmFG_u-U",
          Linux: "_1o--oAuSJeE_GmsCFpkwbk",
          Controller: "_2WFjtAehE3pFqje383Apw-",
          Mac: "_3SAulun4j-hGdFAOaHMbp1",
          Deck: "_1cdYllaGl7qKTKCszDFyZy",
          CapRow: "_3PinvS-n0dF9rC5O78ku-V",
          PlatformContentsCtn: "_1PsKgEezJS5LMLbRK6JRZv",
          VR: "_3JUUgSFwfKxpfQ_uNHi9Ux",
          SectionTitle: "_2ah4WA3WRlwVSDqcvyKiDp",
          BackgroundImage: "brAyRdlpyVp4WdUiouZB5",
          Playtest: "_3pbkBRNE2fKqDlygGwp91D",
          BG_Playtest: "_1SOo3GdhcPL3SZHHVSXD4Q",
          Demo: "_2x1g0ifxtuQ8mtjJ5iceYT",
          BG_Demo: "_1L4LhCnNHJcLq_zafC-iLq",
          GameImage: "_2yVfmbboadjMhiHjpNy-8q",
          SectionSubTitle: "_3D-DCkmRU57aIXxV54qrQy",
          ElementFadeIn: "_1QlNj-fqLYzkSNa-U9kQBj",
          StatsRow: "_3At0tlfltTfJr33sjMDd13",
          StatBlock: "_95lW8BaVq1fmWokWdPPsW",
          BigNum: "_2OZijVsBqx3_g0e6xUIed3",
          StatDescription: "_1Of54Z3aGealUyOUMITDzO",
          DemoSash: "pzuwMpcmcIVrNbv46H5g9",
          BadgeBoxIntro: "_2DanVgBGo7HGllaGxlFUPw",
          BadgeBarFiller: "_3IwREAEEL8jykwZNPZKhoi",
          Appear: "G3ygUAsC5hrz7PVYC_UfR",
        };
      },
      44367: ($) => {
        $.exports = {
          MonthlyChartTooltipCtn: "_1TNHuWn9a6C9HG2OhTIaAH",
          TooltipBackgroundOverlay: "_2gvJ9eyEAyGTfL9iQ3IuMd",
          TotalPlaytimeContainer: "MbHB9d5TrrPPsmCLXDaIV",
          TooltipImageContainer: "_133vUbAOO4PTUZTnAle9Gk",
          OtherGamesStack: "_24c6yhG567Fue2VRuoe_2i",
          CapsuleImg: "_3pVEkyjcVAxFbWBaXkDxtw",
          HoveredGameLabel: "k6Eh-X_tQXx5sEpDHBMq6",
          TotalPlaytime: "_3F-F53fTqM5DXVQc6Jz5d3",
        };
      },
      77408: ($) => {
        $.exports = {
          Section: "_3Apb0bYbV5W1c7HG5T26XH",
          ChartContainer: "_23mKMjDPbjptriYDLI6HAk",
          Chart: "_28TwDjH899CiiJ8lJ1fFES",
        };
      },
      43047: ($) => {
        $.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      6878: ($) => {
        $.exports = {
          Header1: "SPYFj8pCLpNmnuQJEDobC",
          Header2: "QuKtTJ4LCPUlQeWYfLNyX",
          Header3: "_3s7cUqglDds9wzcWb7OLz6",
          Link: "_29bMZB6BOQfTQ_3za-w60I",
          LinkHost: "_16eO9LHnJuheylkB3Fdrpn",
          LinkButton: "_2HnDgHQT_3ehcs4WgskKG5",
          LinkPill: "_3nRRZ1AKPWQnyWTcT1RDt9",
          UnorderedList: "_2FoSxA1yCqpvxdOJnu8N8Z",
          OrderedList: "vV4IwOV-RuzelptiRQ_ZS",
          StoreWidget: "_36Y-loIMvxDKY9RIVxecCp",
          MedalTVWidget: "_1j2vixiqbbe8GqxA-cmlhA",
          LoyaltyRewardCtn: "_14p7R6qC1Kkyg4Qal1UJZu",
          SaleSectionCtn: "_39HWXhhjsbML7K9sme9ItV",
          SaleTextCtn: "_2Tqq0UDtuHw6otaE2Ww46g",
          ReminderCtn: "_25AZkxZYa3ROp8PHchCq-k",
          BlockQuote: "_2cY7bYMGmnuPPhM3aMQMfa",
          SocialLink: "_2LAnc-M7XILk5D72Qy7V6q",
          SocialIcon: "dDjYNUHT-jcb_B0VGK6CP",
          LocalizeBlock: "_1oBceu_yGnJHhqsA8fmA7P",
          CheckMark: "_24AtTon5otxGQGBY3P6ATR",
          ScreenshotCarousel: "_3uA0hv9La9Do6XtRycM0RX",
        };
      },
      15736: ($) => {
        $.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
    },
  ]);
})();
