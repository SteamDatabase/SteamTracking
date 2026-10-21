/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50762],
    {
      26589: (me, ue, r) => {
        "use strict";
        r.d(ue, { gg: () => R, hM: () => J });
        var n = r(72609),
          T = r(75233),
          a = r(80902),
          s = r(67705),
          t = r(76559),
          E = r(3166);
        function A(h, g) {
          return {
            clanid: h,
            appid: g,
            can_edit: !1,
            owns_app: !1,
            event_followed: [],
            event_followed_flags: [],
            event_ignored: [],
            follows_app: !1,
            valve_admin: !1,
            support_user: !1,
            limited_user: !0,
          };
        }
        function q(h, g) {
          return !g || !(h.support_user || h.valve_admin)
            ? h
            : { ...h, can_edit: !0, support_user: !1, valve_admin: !1 };
        }
        async function W(h, g, b) {
          const v = (0, s.Bu)(),
            l = (0, s.Fd)("partnereventpermissions", "application_config");
          if (N(l)) {
            const f = l.find((M) => M.clanid == h);
            if (f) {
              let { success: M, warn_msg: $, err_msg: k, ..._ } = f;
              return q(_, v);
            }
          }
          if (n.iA.logged_in) {
            const f = t.b.InitFromClanID(h);
            let M = `${n.TS.COMMUNITY_BASE_URL}gid/${f.ConvertTo64BitString()}/ajaxgetpartnereventpermissions/`;
            (0, E.yK)() == "partner"
              ? (M = `${n.TS.PARTNER_BASE_URL}partnerevents/ajaxgetpartnereventpermissions?clanaccountid=${h}`)
              : (0, E.yK)() == "store" &&
                (M = `${n.TS.STORE_BASE_URL}events/ajaxgetpartnereventpermissions?clanaccountid=${h}`);
            const $ = await fetch(M, { method: "GET", credentials: "include" });
            if ($.status == 200) {
              const k = await $.json();
              if (k) {
                let { success: _, warn_msg: Z, err_msg: V, ...c } = k;
                return q(c, v);
              }
            }
          }
          return A(h, void 0);
        }
        function N(h) {
          const g = h;
          return g &&
            Array.isArray(g) &&
            g.length > 0 &&
            typeof g[0] == "object"
            ? typeof g[0].clanid == "number" && typeof g[0].appid == "number"
            : !1;
        }
        var U = r(68312);
        function J(h) {
          const g = (0, T.jE)(),
            b = (0, U.KV)();
          return (0, a.I)(R(h, g, b));
        }
        function R(h, g, b) {
          return {
            queryKey: X(h),
            queryFn: async () => await W(h, g, b),
            enabled: !!h,
          };
        }
        function X(h) {
          return ["useEventUserPermissions", n.iA.accountid, h];
        }
      },
      3946: (me, ue, r) => {
        "use strict";
        r.d(ue, { V: () => a });
        var n = r(7850),
          T = r(72080);
        function a(s) {
          return (0, n.jsxs)("a", {
            href: s.strURL,
            className: T.gg.Box,
            "data-modal-content-sizetofit": !!s.bSizeToFit,
            "data-appid": s.appid,
            "data-publishedfileid": s.publishedfileid,
            children: [
              (0, n.jsx)(T.KN, { strURL: s.strPreviewURL }),
              (0, n.jsxs)(T.J7, {
                children: [
                  (0, n.jsx)(T.bv, { children: s.strTitle }),
                  (0, n.jsx)("div", {
                    children: (0, n.jsx)("span", {
                      className: T.gg.Type,
                      children: s.strType,
                    }),
                  }),
                  s.author && (0, n.jsx)(T.zN, { children: s.author }),
                  (0, n.jsx)(T.AT, { children: s.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      54357: (me, ue, r) => {
        "use strict";
        r.d(ue, { B: () => W });
        var n = r(7850),
          T = r(90626);
        function a(U) {
          const [J, R] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => R(!0));
            }, []),
            jsx(s.Provider, { value: J, children: U.children })
          );
        }
        const s = (0, T.createContext)(!1);
        function t() {
          return !0;
        }
        const E = Intl.DateTimeFormat().resolvedOptions().timeZone,
          A =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((U) => U.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          q = A && decodeURIComponent(A);
        function W() {
          return t() ? E : (q ?? E);
        }
        function N() {
          "document" in globalThis &&
            E &&
            (document.cookie = `timezoneName=${E};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        N();
      },
      69596: (me, ue, r) => {
        "use strict";
        r.d(ue, { O: () => a });
        const n =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function T(s) {
          return s ? n.test(s.trim()) : !1;
        }
        function a(s, t) {
          return T(s) ? s : t;
        }
      },
      11547: (me, ue, r) => {
        "use strict";
        r.d(ue, { H: () => Ve, k: () => Ue });
        var n = r(7850),
          T = r(29950),
          a = r(29630),
          s = r(68941),
          t = r(70187),
          E = r(1917),
          A = r(24660),
          q = r(72609),
          W = r(86722),
          N = r(6878),
          U = r.n(N),
          J = r(53107),
          R = r(36707),
          X = r(53113),
          h = r(69596),
          g = r(35265);
        function b(G) {
          switch (G) {
            case "button":
              return (0, R.A)(U().LinkButton, "LinkButton");
            case "pill":
              return (0, R.A)(U().LinkPill, "LinkPill");
            default:
              return (0, R.A)(U().Link, "Link");
          }
        }
        function v(G, re, Se) {
          let he = "";
          return (
            G == "button" && re && (he += `background-color: ${re};`),
            G == "pill" && Se && (he += `color: ${Se};`),
            he.length == 0 ? void 0 : he
          );
        }
        function l(G, re, Se) {
          let he;
          return (
            (G == "button" || G == "pill") &&
              re &&
              (he = { backgroundColor: re }),
            (G == "button" || G == "pill") &&
              Se &&
              (he = { ...(he ?? {}), color: Se }),
            he
          );
        }
        function f(G, re) {
          const Se = (
            typeof G == "string"
              ? G
              : Array.isArray(G) && G.length == 1 && typeof G[0] == "string"
                ? G[0]
                : void 0
          )?.trim();
          return !Se || !re ? !0 : Se != re.trim();
        }
        function M(G) {
          let re = (0, T.J)((0, t.j$)(G.args) || (0, t.j$)(G.args, "href"));
          const Se = (0, t.j$)(G.args, "style"),
            he = (0, t.j$)(G.args, "id"),
            Xe = (0, h.O)(
              (0, t.j$)(G.args, "buttoncolor") || (0, t.j$)(G.args, "bgcolor"),
              void 0,
            ),
            Re = (0, h.O)(
              (0, t.j$)(G.args, "labelcolor") || (0, t.j$)(G.args, "color"),
              void 0,
            ),
            x = b(Se),
            B = G.context.event,
            ae = (0, a.z5)(re, G.language, B?.rtime32_last_modified),
            be = (0, g.W7)(f(G.children, re) ? "" : (re ?? ""));
          if (be && re) return be.fnBBComponent(re, { event: G.context.event });
          if (ae === void 0 || ae == null) return G.children || "";
          typeof ae == "string" ? (re = ae) : (re = ae[1]);
          const de = l(Se, Xe, Re);
          return typeof re == "string" && re.length > 0 && re[0] == "#"
            ? (0, n.jsx)(A.Ii, {
                className: x,
                href: re,
                style: de,
                children: G.children,
              })
            : re == "steam://settings/account"
              ? (0, n.jsx)(J.uU, {
                  className: x,
                  href: "steam://settings/account",
                  children: G.children,
                })
              : (0, n.jsx)(W.d$, {
                  className: x,
                  url: re,
                  event: G.context.event,
                  id: he,
                  style: de,
                  children: G.children,
                });
        }
        function $(G) {
          const re = (0, t.j$)(G.args, "href"),
            Se = (0, g.W7)(re);
          return Se
            ? Se.fnBBComponent(re, { event: G.context.event })
            : (0, n.jsx)(M, { ...G });
        }
        var k = r(25046),
          _ = r(29522),
          Z = r(40358),
          V = r(64271),
          c = r(90626),
          u = r(67523),
          p = r.n(u),
          S = r(36118),
          F = r(18210),
          w = r(85599),
          I = r(89767),
          L = r.n(I),
          Me = r(64457),
          j = r(48963),
          ne = r.n(j),
          De = ((G) => (
            (G.k_TrailerAsButton = "button"),
            (G.k_TrailerAsPill = "pill"),
            (G.k_TrailerAsFull = "full"),
            (G.k_TrailerAsPoster = "poster"),
            (G.k_TrailerAsMicro = "micro"),
            G
          ))(De || {});
        const D = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function ee(G, re) {
          const Se = new Set();
          for (const he of G.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const Xe = D.exec(he[1] ?? ""),
              Re = Xe ? Number.parseInt(Xe[1] ?? Xe[2] ?? Xe[3] ?? "") : re;
            Re && Se.add(Re);
          }
          return Array.from(Se);
        }
        function le(G) {
          const {
              embedStyle: re,
              appid: Se,
              color: he,
              bgcolor: Xe,
              children: Re,
              trailerBaseID: x,
              subtitles: B,
            } = G,
            [ae, be] = (0, c.useState)(!1),
            de = (0, c.useMemo)(() => ({ appid: Se }), [Se]);
          switch (re) {
            case "button":
            case "pill":
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsxs)("button", {
                    type: "button",
                    className: (0, R.A)({
                      [L().Pill]: re == "pill",
                      [L().Button]: re == "button",
                    }),
                    onClick: () => be(!0),
                    style: { color: he, backgroundColor: Xe },
                    children: [
                      (0, n.jsx)(S.jGG, {}),
                      Re || (0, F.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, n.jsx)(Me.PE, {
                    id: de,
                    bShowModal: ae,
                    trailerBaseID: x,
                    hideModal: () => be(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, n.jsx)(Y, { ...G });
          }
        }
        function Y(G) {
          const { appid: re, trailerBaseID: Se } = G,
            he = (0, _.$5)(re),
            { data: Xe } = (0, Z.J$)(he),
            [Re, x] = (0, c.useState)(() =>
              !re || !Se ? (0, F.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            B = (0, k.kB)(he),
            ae = (0, c.useMemo)(
              () => (B ? B.find((be) => be.trailer_base_id === Se) : null),
              [B, Se],
            );
          return (
            (0, c.useEffect)(() => {
              Xe?.unvailable_for_country_restriction &&
                x((0, F.we)("#TrailerPlayer_CouldNotLoad", re, Se)),
                B &&
                  !ae &&
                  x(
                    (0, F.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      G.appid,
                      G.trailerBaseID,
                    ),
                  );
            }, [
              re,
              G.appid,
              G.trailerBaseID,
              Xe?.unvailable_for_country_restriction,
              Se,
              ae,
              B,
            ]),
            Re
              ? G.bIsPreviewMode
                ? (0, n.jsx)("div", { className: p().ErrorDiv, children: Re })
                : null
              : ae
                ? (0, n.jsx)(ye, { trailerToPlay: ae })
                : (0, n.jsx)(w.t, {
                    string: (0, F.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function ye(G) {
          const { trailerToPlay: re } = G,
            {
              rgDashTrailers: Se,
              rgHlsTrailers: he,
              strCaptionManufest: Xe,
            } = (0, c.useMemo)(() => {
              const { rgDashTrailers: Re, rgHlsTrailers: x } = (0, k.hg)(re),
                B = (0, k.Wv)(re);
              return {
                rgDashTrailers: Re,
                rgHlsTrailers: x,
                strCaptionManufest: B,
              };
            }, [re]);
          return Se?.length == 0
            ? null
            : (0, n.jsx)("div", {
                className: ne().VideoPopupContainers,
                children: (0, n.jsx)(V.P, {
                  dashManifests: Se || [],
                  hlsManifest: (he.length > 0 && he?.[0]) || "",
                  screenshot: (0, k.hl)(re),
                  altText: re.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: Xe,
                }),
              });
        }
        var oe = r(34736),
          pe = r(39239),
          Pe = r(13465),
          ge = r(80150),
          He = r(18994),
          ce = r(3166),
          se = r(68538);
        function Ee(G) {
          const re = (0, ce.Qn)(),
            Se = (0, He.a4)(He.Wn),
            he =
              String((0, t.j$)(G.args, "autoadvance")).toLowerCase() === "true";
          return (0, n.jsx)(se.F, {
            hideArrows: !Se,
            hidePips: re,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: Se,
            bAutoAdvance: he,
            className: U().ScreenshotCarousel,
            children: G.children,
          });
        }
        var xe = r(37501),
          ft = r.n(xe),
          Qe = r(1123);
        function nt(G) {
          const { strURL: re, children: Se } = G;
          return (
            typeof re == "string"
              ? !(0, X.ZF)(re)
              : re.some((Xe) => !(0, X.ZF)(Xe))
          )
            ? (0, n.jsx)(at, { children: Se })
            : (0, n.jsx)(n.Fragment, { children: Se });
        }
        function at(G) {
          const { children: re } = G;
          return (0, Qe.Ey)()
            ? (0, n.jsx)(n.Fragment, { children: re })
            : (0, n.jsx)("div", {
                className: ft().ImageBlocked,
                children: (0, F.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, n.jsx)("a", {
                    href: q.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var ve = r(33645),
          we = r.n(ve);
        let ke = null;
        function Ue() {
          return (
            ke == null &&
              (ke = new Map([
                ["url", { Constructor: M, autocloses: !1 }],
                ["dynamiclink", { Constructor: $, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: t.Tu(t.Zb, U().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: t.Tu(t.Sz, U().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: t.Tu(t.ZS, U().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: t.Tu(t.Pk, U().BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: t.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: t._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: t.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: t.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: $e, autocloses: !1 }],
                ["previewyoutube", { Constructor: E.gH, autocloses: !1 }],
                ["looping_media", { Constructor: s.$A, autocloses: !1 }],
                ["video", { Constructor: s.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: E.Eo, autocloses: !1 }],
                ["trailer", { Constructor: _e, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: it,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: tt, autocloses: !1 }],
                ["carousel", { Constructor: Ee, autocloses: !1 }],
              ])),
            ke
          );
        }
        function $e(G) {
          const { showErrorInfo: re, event: Se } = G.context;
          let he = (0, t.j$)(G.args, "src") || G.children?.toString();
          he || (he = (0, t.j$)(G.args)), (he = (0, T.J)(he ?? "") || void 0);
          const Xe = (0, t.j$)(G.args, "style") === "inline",
            Re = (0, a.z5)(he, G.language, Se?.rtime32_last_modified);
          if (Re == null) return null;
          if (typeof Re == "string") {
            he = Re;
            let x;
            return (
              (x = !(0, X.ZF)(he)),
              Se?.BHasTag("auto_rssfeed") && (x = !1),
              re
                ? (0, n.jsx)(pe.i, {
                    className: (0, R.A)({ [we().Image_Inline]: Xe }),
                    src: he,
                    crossOrigin: x ? "anonymous" : void 0,
                  })
                : ((he = (0, X.L$)(he)),
                  (0, n.jsx)(nt, {
                    strURL: he,
                    children: (0, n.jsx)(ge.o, {
                      className: (0, R.A)({ [we().Image_Inline]: Xe }),
                      src: he,
                      crossOrigin: x ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, n.jsx)(nt, {
              strURL: Re,
              children: (0, n.jsx)(Pe.c, { rgSources: Re }),
            });
        }
        function tt(G) {
          const re = (0, t.j$)(G.args);
          if (re == null || re == null || re.length == 0) return "";
          const Se = G.children?.toString(),
            he = new Array();
          return (
            he.push(
              `${q.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${q.TS.LANGUAGE}/${re}`,
            ),
            q.TS.LANGUAGE != "english" &&
              he.push(
                `${q.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${re}`,
              ),
            (0, n.jsx)(Pe.c, { rgSources: he, alt: Se })
          );
        }
        function _e(G) {
          const re = Ve(G.args, "appid", G.context.event?.appid ?? 0),
            Se = Ve(G.args, "trailerid", 0);
          let he =
            (0, t.j$)(G.args, "style")?.toLocaleLowerCase() ??
            De.k_TrailerAsFull;
          he = Object.values(De).includes(he) ? he : De.k_TrailerAsFull;
          const Xe = (0, h.O)(G.args.color, "black"),
            Re = (0, h.O)(G.args.bgcolor, "white"),
            x = (0, s.g4)(G.args);
          return (0, n.jsx)(le, {
            appid: re,
            trailerBaseID: Se,
            bIsPreviewMode: G.context.showErrorInfo,
            embedStyle: he,
            color: Xe,
            bgcolor: Re,
            subtitles: x.rgVideoTracks,
            children: G.children,
          });
        }
        function it(G) {
          const re = (0, t.j$)(G.args, "name"),
            Se = (0, t.j$)(G.args, "title"),
            he = (0, t.j$)(G.args, "company"),
            Xe = (0, t.j$)(G.args, "photo");
          return G.context.bShowShortSpeakerInfo
            ? (0, n.jsx)(oe.S8, {
                name: re,
                title: Se,
                company: he,
                photo: Xe,
                bio: G.children,
              })
            : (0, n.jsx)(oe.$k, {
                name: re,
                title: Se,
                company: he,
                photo: Xe,
                bio: G.children,
              });
        }
        function Ve(G, re, Se) {
          const he = (0, t.j$)(G, re);
          return he === void 0 || he == null ? Se : Number.parseInt(he);
        }
      },
      1683: (me, ue, r) => {
        "use strict";
        r.d(ue, { d3: () => k, Zn: () => _ });
        var n = r(7850),
          T = r(33770),
          a = r(7487),
          s = r(72609),
          t = r(90626),
          E = r(70187),
          A = r(86722),
          q = r(39414),
          W = r(38340),
          N = r(96197),
          U = r(53113);
        class J extends a.K0 {
          m_LinkFilter = q.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(c, u, p, S) {
            super(c),
              (this.m_parentNode = u),
              (this.m_mapHostToComponent = p),
              (this.m_globalStoreLink = S);
          }
          AppendText(c, u = !1) {
            let p = c;
            if (
              (u || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let S = this.m_LinkFilter.exec(p);
              for (; S; ) {
                if (S.index > 0) {
                  let I = S.input.substring(0, S.index);
                  super.AppendText(I, u);
                }
                let F = S[0],
                  w = !1;
                if (this.m_mapHostToComponent) {
                  for (let I = 0; I < this.m_mapHostToComponent.length; ++I)
                    if (this.m_mapHostToComponent[I].urlRegExp.exec(F)) {
                      (w = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[I].fnBBComponent(
                            F,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                w || super.AppendNode((0, A.Pm)(F)),
                  (p = S.input.substring(S.index + F.length)),
                  (S = this.m_LinkFilter.exec(p));
              }
            }
            p.length > 0 && super.AppendText(p, u);
          }
        }
        const R = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class X extends a.K0 {
          m_EmoteRegex = new RegExp(R);
          AppendText(c, u = !1) {
            let p = c;
            if (c.length >= 3) {
              let S = this.m_EmoteRegex.exec(p);
              for (; S; ) {
                if (S.index > 0) {
                  let w = S.input.substring(0, S.index);
                  super.AppendText(w, u);
                }
                let F = S[1];
                super.AppendNode(t.createElement(N.n, { emoticon: F }, [])),
                  (p = S.input.substring(S.index + F.length + 2)),
                  (S = this.m_EmoteRegex.exec(p));
              }
            }
            p.length > 0 && super.AppendText(p, u);
          }
        }
        class h extends a.K0 {
          m_parentNode = void 0;
          constructor(c, u) {
            super(c), (this.m_parentNode = u);
          }
          AppendText(c, u = !1) {
            let p = c;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !g(p) &&
              (p = (0, U.L$)(p)),
              super.AppendText(p, u);
          }
        }
        function g(V) {
          const c = V.trim();
          return c.startsWith(W.lw) || c.startsWith(W.eg);
        }
        var b = r(11547),
          v = r(35265);
        let l = null;
        function f() {
          return (
            l == null &&
              (l = new Map([
                ...Array.from(E.W4.entries()),
                ...Array.from((0, b.k)().entries()),
              ])),
            l
          );
        }
        const M = t.createContext(null);
        function $() {
          return t.useContext(M) ?? f();
        }
        function k(V) {
          const c = $(),
            u = t.useMemo(
              () =>
                new Map([
                  ...Array.from(c.entries()),
                  ...Array.from(V.dictionary.entries()),
                ]),
              [c, V.dictionary],
            );
          return (0, n.jsx)(M.Provider, { value: u, children: V.children });
        }
        function _(V) {
          const {
              text: c,
              languageOverride: u,
              event: p,
              showErrorInfo: S,
              bShowShortSpeakerInfo: F,
            } = V,
            w = (0, v.m$)(),
            I = t.useCallback(
              (j) =>
                new h(
                  new X(new J(new a.OJ(new a.R8()), j, w, { event: p })),
                  j,
                ),
              [p, w],
            ),
            L = $();
          return t
            .useMemo(() => new T.B(L, I, u || s.TS.LANGUAGE), [L, I, u])
            .ParseBBCode(c, {
              showErrorInfo: S,
              event: p,
              bShowShortSpeakerInfo: F,
              bbcode: c,
            });
        }
        function Z(V) {
          const {
              strTag: c,
              args: u,
              rawargs: p,
              language: S = PchLanguageToELanguage(Config.LANGUAGE),
              children: F,
              ...w
            } = V,
            I = $().get(c);
          return I
            ? jsx(I.Constructor, {
                context: w,
                tagname: c,
                args: u,
                language: S,
                rawargs: p,
                children: F,
              })
            : jsxs(Fragment, { children: [`[${c}]`, F, `[/${c}]`] });
        }
      },
      35265: (me, ue, r) => {
        "use strict";
        r.d(ue, { m$: () => Fe, W7: () => Ze });
        var n = r(7850),
          T = r(32093),
          a = r(72609),
          s = r(88743),
          t = r(40358),
          E = r(90626),
          A = r(86722),
          q = r(6878),
          W = r.n(q),
          N = r(36118),
          U = r(36707),
          J = r(87949),
          R = r(55483),
          X = r(10985),
          h = r(99412),
          g = r(47797),
          b = r(76559);
        const v =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          l =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          f = [v, l],
          M =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function $(K, H) {
          const C = new RegExp(K).exec(H);
          if (!C || C.length <= 3) return;
          const je = C[3];
          if (je)
            switch (C[1]) {
              case "gid":
                return { eventGID: je, strClanSteamID64: C[2] };
              case "group":
                return { eventGID: je, clanAccountID: Number.parseInt(C[2]) };
              case "groups":
                return { eventGID: je, strGroupVanity: C[2] };
              default:
                return isNaN(+C[2])
                  ? { eventGID: je, strOGGVanity: C[2] }
                  : { eventGID: je, appid: Number(C[2]) };
            }
        }
        function k(K) {
          for (const H of f) {
            const C = $(H, K);
            if (C) return C;
          }
        }
        function _(K) {
          const H = [],
            C = new Set(),
            je = [
              ...f.map((Ie) => ({ regExp: Ie, bAnnouncement: !1 })),
              { regExp: M, bAnnouncement: !0 },
            ];
          for (const { regExp: Ie, bAnnouncement: Ye } of je)
            for (const lt of K.matchAll(new RegExp(Ie, "gi"))) {
              const ot = $(Ie, lt[0]);
              ot &&
                !C.has(`${Ye ? "A" : "E"}${ot.eventGID}`) &&
                (C.add(`${Ye ? "A" : "E"}${ot.eventGID}`),
                H.push({ link: ot, bAnnouncement: Ye }));
            }
          return H;
        }
        var Z = r(9046),
          V = r(72080),
          c = r(29522),
          u = r(85599),
          p = r(18210),
          S = r(13465),
          F = r(56492),
          w = r(88812),
          I = r(39654);
        function L({ clanSteamID: K, strVanity: H, strGroupVanity: C }) {
          const je = H !== void 0 || C !== void 0,
            { data: Ie, isPending: Ye } = (0, R.W$)(
              je ? (H ?? C ?? "") : "",
              H !== void 0 ? "store" : "group",
            );
          if (!je) return K?.GetAccountID();
          if (!Ye) return Ie?.clanAccountID ?? null;
        }
        function Me(K) {
          const { appid: H, announcementGID: C, eventGID: je, strURL: Ie } = K,
            Ye = L(K),
            lt = Ye === null,
            ot = Ye != null,
            {
              data: ct,
              isPending: At,
              isError: Zt,
            } = (0, I.vE)(
              lt
                ? void 0
                : {
                    clanAccountID: ot ? Ye : void 0,
                    appid: H,
                    eventGID: je,
                    announcementGID: C,
                  },
            ),
            Yt = (0, c.$5)(H || ct?.appid || void 0),
            { data: Ge } = (0, t.J$)(Yt);
          if (lt || Zt || ct === null) return (0, A.Pm)(Ie);
          if (At || !ct) return (0, n.jsx)(u.t, {});
          const e = (0, h.sfN)(a.TS.LANGUAGE),
            i = ct.GetNameWithFallback(e),
            P = ct.GetSubTitleWithSummaryFallback(e),
            Jt = Ge?.name,
            _t = (0, p.TW)(ct.GetStartTimeAndDateUnixSeconds());
          return (0, n.jsxs)(F.tj, {
            eventModel: ct,
            route: F.PH.k_eView,
            className: V.gg.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": H,
            children: [
              (0, n.jsx)(j, { ...K, event: ct }),
              (0, n.jsxs)(V.J7, {
                children: [
                  (0, n.jsxs)(V.zN, {
                    children: [
                      (0, p.we)(
                        ct.type == h.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        Jt ?? "",
                      ),
                      (0, n.jsx)(V.MG, { children: _t }),
                    ],
                  }),
                  (0, n.jsx)(V.bv, {
                    children: (0, n.jsx)("div", {
                      className: V.gg.Type,
                      children: i,
                    }),
                  }),
                  (0, n.jsx)(V.AT, { children: P }),
                ],
              }),
            ],
          });
        }
        function j(K) {
          const {
            event: H,
            fnFilterImageURLsForKnownFailures: C,
            fnImageFailureCallback: je,
          } = K;
          let Ie = (0, h.sfN)(a.TS.LANGUAGE),
            Ye = (0, w.WC)(H, "capsule", Ie, Z.wI.capsule_main) ?? [];
          return (
            Ye && C && (Ye = C(Ye)),
            (0, n.jsx)(S.c, {
              className: V.gg.Preview,
              rgSources: Ye ?? [],
              onIncrementalError: (lt, ot, ct) => je && je(ot),
            })
          );
        }
        var ne = r(10349),
          De = r(53113);
        const D =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          ee = ["store.steampowered.com", "store.steamchina.com"],
          le = ["steampowered.com", "steamcommunity.com"],
          Y = ["steamchina.com"],
          ye = ["steam.dev", "valve.org"];
        function oe(K, H) {
          return H.some((C) => K == C || K.endsWith(`.${C}`));
        }
        function pe(K) {
          const H = (0, De.wm)(K).toLocaleLowerCase(),
            C = (0, De.wm)(a.TS.STORE_BASE_URL).toLocaleLowerCase(),
            je = (0, De.wm)(a.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return H == C || H == je
            ? !0
            : ee.includes(C)
              ? oe(H, oe(C, Y) ? Y : le)
              : oe(H, [...le, ...Y, ...ye]);
        }
        function Pe(K) {
          if (pe(K)) return ge(K);
        }
        function ge(K) {
          const H = new RegExp(D).exec(K);
          if (!H || H.length <= 2) return;
          const C = H[1].toLowerCase(),
            je = Number(H[2]);
          if (!(!(je > 0) || !(0, ne.nB)(C)))
            return {
              id: je,
              strItemType: C,
              storeItemKey:
                C == "sub"
                  ? { packageid: je }
                  : C == "bundle"
                    ? { bundleid: je }
                    : { appid: je },
            };
        }
        function He(K) {
          const H = [],
            C = new Set();
          for (const je of K.matchAll(new RegExp(D, "gi"))) {
            const Ie = ge(je[0]);
            Ie &&
              !C.has(`${Ie.strItemType}/${Ie.id}`) &&
              (C.add(`${Ie.strItemType}/${Ie.id}`), H.push(Ie));
          }
          return H;
        }
        function ce(K) {
          return (
            !!K && (K.GetEventType() == h.ajI || K.GetEventType() == h.HRy)
          );
        }
        function se(K) {
          const H = ce(K),
            C = H ? K.clanSteamID.GetAccountID() : void 0,
            { data: je, isLoading: Ie } = (0, R.TB)(C),
            { data: Ye, isLoading: lt } = (0, X.A5)(C);
          if (!H) return null;
          if (!(Ie || lt))
            return !Ye || !je || !(0, g.Ns)(K, je) ? null : (Ye.appids ?? []);
        }
        function Ee(K, H) {
          return K === null
            ? !0
            : H.length > 0 && H.every((C) => K.includes(C));
        }
        function xe(K, H) {
          const C = se(H);
          if (K.appid === void 0) return !0;
          if (!(K.appid > 0)) return !1;
          if (C !== void 0) return Ee(C, [K.appid]);
        }
        function ft({ link: K, strURL: H, eventModel: C, bAnnouncement: je }) {
          const Ie = xe(K, C);
          if (Ie === void 0) return null;
          if (!Ie) return (0, A.Pm)(H, C);
          const Ye =
            K.strClanSteamID64 !== void 0
              ? new b.b(K.strClanSteamID64)
              : K.clanAccountID !== void 0
                ? b.b.InitFromClanID(K.clanAccountID)
                : void 0;
          return (0, n.jsx)(Me, {
            appid: K.appid,
            clanSteamID: Ye,
            strVanity: K.strOGGVanity,
            strGroupVanity: K.strGroupVanity,
            eventGID: je ? void 0 : K.eventGID,
            announcementGID: je ? K.eventGID : void 0,
            strURL: H,
          });
        }
        function Qe(K, H, C, je = !1) {
          if (pe(H)) {
            const Ie = $(K, H);
            if (Ie)
              return (0, n.jsx)(ft, {
                link: Ie,
                strURL: H,
                eventModel: C?.event,
                bAnnouncement: je,
              });
          }
          return (0, A.Pm)(H, C?.event);
        }
        function nt(K, H) {
          return Qe(l, K, H);
        }
        function at(K, H) {
          return Qe(v, K, H);
        }
        function ve(K, H) {
          return Qe(M, K, H, !0);
        }
        const we = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function ke(K) {
          if (!we.test(K)) return;
          const H = K.split("?");
          if (H.length == 2)
            return new URLSearchParams(H[1]).get("id") ?? void 0;
        }
        var Ue = r(3946),
          $e = r(13854),
          tt = r(374);
        function _e(K) {
          const { sharedFileID: H } = K,
            { data: C } = (0, tt.oK)(H),
            je = a.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            Ie = C ?? {
              sharedfileid: H,
              title: (0, p.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: je + H,
            },
            Ye = (0, $e.TG)(Ie.url) ? je + Ie.url : Ie.url;
          let lt = Ie.personnaname !== void 0 && Ie.personnaname.length > 0;
          return (0, n.jsx)(Ue.V, {
            strURL: Ye,
            strTitle: Ie.title,
            strPreviewURL: Ie.previewurl,
            strType: Ie.type,
            strDescription: Ie.description,
            author:
              lt &&
              (0, p.PP)(
                "#EventEditor_Author",
                (0, n.jsx)(V.mZ, { children: Ie.personnaname }),
              ),
            publishedfileid: H,
            appid: Ie.appid,
            bSizeToFit: Ie.bSizeToFit,
          });
        }
        var it = r(80902),
          Ve = r(32651),
          G = r.n(Ve);
        const re = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function Se(K) {
          const H = new Set();
          for (const C of K.matchAll(new RegExp(re, "gi"))) C[1] && H.add(C[1]);
          return Array.from(H);
        }
        function he(K) {
          return ["sketchfab_oembed", K];
        }
        function Xe(K) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(K)}`;
        }
        function Re(K) {
          return {
            queryKey: he(K),
            queryFn: async () => {
              const H = await fetch(Xe(K));
              if (H.status === 404) return null;
              if (!H.ok)
                throw new Error(`sketchfab oembed returned ${H.status}`);
              return await H.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function x(K) {
          return (0, it.I)(Re(K));
        }
        function B(K) {
          const { modelID: H } = K,
            [C, je] = E.useState(!0),
            { data: Ie } = x(H);
          if (C) {
            const Ye = () => je(!1),
              lt = (ot) => {
                (ot.key === "Enter" || ot.key === " ") &&
                  (ot.preventDefault(), Ye());
              };
            return (0, n.jsxs)("div", {
              className: G().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: Ye,
              onKeyDown: lt,
              children: [
                Ie?.thumbnail_url &&
                  (0, n.jsx)("img", {
                    className: G().dynamiclink_preview,
                    src: Ie.thumbnail_url,
                    alt: Ie.title,
                  }),
                (0, n.jsx)("img", {
                  className: G().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, n.jsxs)("div", {
                  className: G().dynamiclink_content,
                  children: [
                    (0, n.jsxs)("div", {
                      className: G().dynamiclink_name,
                      children: [
                        (0, n.jsx)("span", {
                          className: G().dynamiclink_type,
                          children: (0, p.we)("#EventDisplay_Sketchfab"),
                        }),
                        Ie?.title &&
                          (0, n.jsxs)("div", { children: [Ie.title, "\xA0"] }),
                      ],
                    }),
                    Ie?.author_name &&
                      (0, n.jsx)("div", {
                        className: G().dynamiclink_author,
                        children: Ie.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, n.jsx)("div", {
            className: G().sketchfabmodelembedded,
            children: (0, n.jsx)("iframe", {
              className: G().sketchfabmodelembedded,
              title: Ie?.title ?? H,
              src: `https://sketchfab.com/models/${encodeURIComponent(H)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const ae =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function be(K) {
          const H = ae.exec(K),
            C = H ? Number(H[1]) : 0;
          return C > 0 ? C : void 0;
        }
        function de(K) {
          return pe(K) ? be(K) : void 0;
        }
        function Le(K) {
          const H = new Set();
          for (const C of K.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const je = be(C[0]);
            je && H.add(je);
          }
          return Array.from(H);
        }
        var Ce = r(31774),
          ut = r(71421),
          rt = r(33998),
          It = r.n(rt);
        function st(K) {
          const { defid: H } = K,
            C = (0, Ce.wk)(H);
          if (!C || !C.community_item_data) return null;
          const je = C.appid,
            Ie = C.community_item_data.item_image_large,
            Ye = `${a.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${je}/${Ie}`;
          return (0, n.jsx)("div", {
            className: It().Ctn,
            children: (0, n.jsx)(ut.he, {
              toolTipContent: C.community_item_data.item_description,
              children: (0, n.jsx)("img", {
                src: Ye,
                alt: C.community_item_data.item_title,
              }),
            }),
          });
        }
        var gt = r(43597);
        const Mt = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          Bt = /twitter\.com\/(\w+)(\/?)$/i,
          bt = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          yt = /twitch\.tv\/(\w+)(\/?)$/i,
          Q =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function fe() {
          return a.TS.EREALM === T.TU.k_ESteamRealmChina;
        }
        const Ae = new Map();
        function Fe() {
          const K = a.TS.EREALM;
          let H = Ae.get(K);
          return (
            H ||
              (fe()
                ? (H = [
                    { urlRegExp: new RegExp(D), fnBBComponent: Oe },
                    { urlRegExp: new RegExp(v), fnBBComponent: at },
                    { urlRegExp: new RegExp(l), fnBBComponent: nt },
                    { urlRegExp: new RegExp(M), fnBBComponent: ve },
                    { urlRegExp: new RegExp(Q), fnBBComponent: Nt },
                  ])
                : (H = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: gt.j6,
                    },
                    { urlRegExp: new RegExp(we), fnBBComponent: dt },
                    { urlRegExp: new RegExp(D), fnBBComponent: Oe },
                    { urlRegExp: new RegExp(v), fnBBComponent: at },
                    { urlRegExp: new RegExp(l), fnBBComponent: nt },
                    { urlRegExp: new RegExp(M), fnBBComponent: ve },
                    { urlRegExp: new RegExp(Mt), fnBBComponent: et },
                    { urlRegExp: new RegExp(re), fnBBComponent: Ke },
                    { urlRegExp: new RegExp(Bt), fnBBComponent: kt },
                    { urlRegExp: new RegExp(bt), fnBBComponent: St },
                    { urlRegExp: new RegExp(yt), fnBBComponent: jt },
                    { urlRegExp: new RegExp(Q), fnBBComponent: Nt },
                    { urlRegExp: new RegExp(ae), fnBBComponent: vt },
                  ]),
              Ae.set(K, H)),
            H
          );
        }
        function Te(K) {
          return Fe().find((H) => !!H.urlRegExp.exec(K));
        }
        function Ze(K) {
          return E.useMemo(() => Te(K), [K]);
        }
        function et(K, H) {
          if (fe()) return null;
          const C = new RegExp(Mt).exec(K);
          if (C && C.length > 1) {
            const je = C[1];
            if (je?.length > 0) {
              let Ie =
                "https://medal.tv/clip/" +
                je +
                "/?autoplay=0&donate=0" +
                (H && H.event ? "&steamappid=" + H.event.appid : "");
              return (0, n.jsx)("iframe", {
                className: W().MedalTVWidget,
                src: Ie,
                title: je,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, A.Pm)(K, H?.event);
        }
        function Ke(K, H) {
          let C = new RegExp(re).exec(K);
          if (C && C.length > 1) {
            let je = C[1];
            if (je && je.length > 1) return (0, n.jsx)(B, { modelID: je });
          }
          return (0, A.Pm)(K, H?.event);
        }
        function dt(K, H) {
          const C = ke(K);
          return C !== void 0
            ? (0, n.jsx)(_e, { sharedFileID: C })
            : (0, A.Pm)(K, H?.event);
        }
        function Oe(K, H) {
          const C = Pe(K);
          return C
            ? (0, n.jsx)(Ot, {
                eventModel: H?.event,
                inputID: C.id,
                inputType: C.strItemType,
                fallbackUrl: K,
              })
            : (0, A.Pm)(K, H?.event);
        }
        function Ot(K) {
          const {
              inputID: H,
              inputType: C,
              eventModel: je,
              fallbackUrl: Ie,
            } = K,
            Ye = (0, s.dE)(H, C),
            { data: lt } = (0, t.J$)(Ye),
            ot = se(je);
          let ct;
          if (ot === null) ct = !0;
          else if (ot && lt) {
            const At = lt.appid ? [lt.appid] : (lt.included_appids ?? []);
            ct = Ee(ot, At);
          }
          return ct === void 0
            ? null
            : ct
              ? (0, n.jsx)(J.e, {
                  id: H,
                  inputType: C,
                  bApplyUserContentPref: !0,
                })
              : (0, A.Pm)(Ie, je);
        }
        function vt(K, H) {
          const C = de(K);
          return C
            ? (0, n.jsx)("div", {
                className: (0, U.A)(W().LoyaltyRewardCtn),
                children: (0, n.jsx)(st, { defid: C, url: K }),
              })
            : (0, A.Pm)(K, H?.event);
        }
        function kt(K, H) {
          return fe() ? null : ht(K, (0, n.jsx)(N.KKS, {}), "@", H);
        }
        function St(K, H) {
          return fe() ? null : ht(K, (0, n.jsx)(N.KKS, {}), "#", H);
        }
        function jt(K, H) {
          return fe() ? null : ht(K, (0, n.jsx)(N.qcc, {}), void 0, H);
        }
        function Nt(K, H) {
          return ht(K, (0, n.jsx)(N.Qte, {}), void 0, H);
        }
        function ht(K, H, C, je) {
          let Ie;
          const Ye = K.endsWith("/") ? K.length - 1 : K.length,
            lt = K.lastIndexOf("/", Ye - 1);
          lt != -1 && lt + 1 < K.length && (Ie = K.substring(lt + 1, Ye)),
            C && Ie && (Ie = C + Ie);
          const ot = (0, A.Pm)(K, je?.event, Ie ?? K);
          return (0, n.jsxs)("div", {
            className: W().SocialLink,
            children: [
              (0, n.jsx)("div", { className: W().SocialIcon, children: H }),
              ot,
            ],
          });
        }
      },
      39654: (me, ue, r) => {
        "use strict";
        r.d(ue, { vE: () => h });
        var n = r(72604),
          T = r(99412),
          a = r(72609),
          s = r(80902),
          t = r(38884),
          E = r(76559),
          A = r(18210);
        const q = "events/ajaxgetpartnerevent";
        function W(g) {
          const b = A.A0.GetELanguageFallback(g);
          return g != b ? `${g}_${b}` : `${g}`;
        }
        function N(g) {
          return g ? (0, t.oE)(new E.b(g.clanSteamID64), g.event) : null;
        }
        async function U(g, b) {
          const v = new URLSearchParams();
          g.clanAccountID && v.set("clan_accountid", String(g.clanAccountID)),
            g.appid && v.set("appid", String(g.appid)),
            g.eventGID && v.set("event_gid", g.eventGID),
            g.announcementGID && v.set("announcement_gid", g.announcementGID),
            v.set("lang_list", W(b)),
            v.set("last_modified_time", "0"),
            v.set("origin", window.location.origin);
          const l = a.TS.STORE_BASE_URL + q + "?" + v.toString(),
            f = await fetch(l);
          if (!f.ok) throw new Error(`${l} answered ${f.status}`);
          const M = await f.json();
          return M.success !== n.R || !M.event?.clan_steamid
            ? null
            : { clanSteamID64: M.event.clan_steamid, event: M.event };
        }
        function J(g, b) {
          return [
            "LinkedPartnerEvent",
            g.clanAccountID,
            g.appid,
            g.eventGID,
            g.announcementGID,
            b,
          ];
        }
        function R(g) {
          return (
            !!g &&
            (!!g.clanAccountID || !!g.appid) &&
            (!!g.eventGID || !!g.announcementGID)
          );
        }
        function X(g, b) {
          const v = R(g);
          return {
            queryKey: J(g ?? {}, b),
            queryFn: () => U(g ?? {}, b),
            select: N,
            enabled: v,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function h(g) {
          const b = (0, T.sfN)(a.TS.LANGUAGE);
          return (0, s.I)(X(g, b));
        }
      },
      56492: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          Bw: () => L,
          EX: () => _,
          Hx: () => ne,
          JP: () => k,
          LJ: () => p,
          OG: () => j,
          PH: () => l,
          T7: () => V,
          sY: () => S,
          tj: () => De,
          yh: () => I,
        });
        var n = r(7850),
          T = r(50974),
          a = r(99412),
          s = r(24660),
          t = r(72865),
          E = r(90626),
          A = r(92757),
          q = r(83482),
          W = r(16369),
          N = r(10303),
          U = r(64165),
          J = r(71742),
          R = r(53113),
          X = r(3166),
          h = r(72609),
          g = r(39905),
          b = r(47875),
          v = r(40358),
          l = ((D) => (
            (D.k_eView = "view"),
            (D.k_eViewWebSiteHub = "websitehub"),
            (D.k_eCommunityView = "communityview"),
            (D.k_eCommunityEdit = "edit"),
            (D.k_eCommunityEditBroadcast = "editBroadcast"),
            (D.k_eCommunityAdminPage = "admin"),
            (D.k_eCommunityPublish = "publish"),
            (D.k_eCommunityMigrate = "migrate"),
            (D.k_eCommunityPreview = "preview"),
            (D.k_eCommunityPreviewSale = "previewsale"),
            (D.k_eCommunityAnnouncementHub = "community_announcehub"),
            (D.k_eStoreView = "storeview"),
            (D.k_eStoreNewsHub = "newshub"),
            (D.k_eStoreOwnerPage = "store"),
            (D.k_eStoreSalePage = "sale"),
            (D.k_eStoreHardwarePreview = "hardwarepreview"),
            (D.k_eStoreUsersNewsHub = "usernewshub"),
            D
          ))(l || {});
        const f =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function M(D) {
          return D.match(f)?.[1];
        }
        function $(D, ee) {
          if (!ee) return !1;
          const le = !0,
            Y = M(window.location.href),
            ye = le && Y == "news",
            oe = ee.GetEventType() == a.ajI,
            pe = !1,
            Pe = ee.appid ? "games" : "groups",
            ge =
              pe &&
              Pe == Y &&
              ((ee.appid && ee.appid === X.UF.APPID) ||
                (!ee.appid &&
                  ee.clanSteamID.GetAccountID() === X.UF.CLANACCOUNTID));
          switch (D) {
            case "view":
              return ge || (ye && !S());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return ge;
            case "admin":
              return oe ? !1 : ge;
            case "websitehub":
              return ge || ye;
            case "storeview":
              return ye && !S();
            case "newshub":
            case "store":
            case "usernewshub":
              return ye;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, J.wT)(!1, "Unknown route specified for link: " + D), !1
              );
          }
        }
        function k(D) {
          const ee =
            h.TS.COMMUNITY_BASE_URL +
            "gid/" +
            D.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            D.AnnouncementGID;
          return {
            strFacebookUrl: ee + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: ee + "?site=twitter",
            strRedditUrl: ee + "?site=reddit",
          };
        }
        function _(D) {
          return w(D, "sale", "absolute");
        }
        function Z(D, ee) {
          return I(D, ee, "sale", "absolute");
        }
        function V(D) {
          return w(D, "storeview", "absolute");
        }
        function c(D, ee) {
          return I(D, ee, "storeview", "absolute");
        }
        function u(D, ee, le) {
          if (le)
            return (
              (D ? "/games/" + X.UF.VANITY_ID : "/groups/" + X.UF.VANITY_ID) +
              "/"
            );
          const Y = D ? "ogg/" + D : "gid/" + ee.ConvertTo64BitString();
          return h.TS.COMMUNITY_BASE_URL + Y + "/";
        }
        function p() {
          return "news";
        }
        function S() {
          return !1;
        }
        function F(D) {
          return D.clanSteamID.GetAccountID() === T.gt && !1;
        }
        function w(D, ee, le) {
          const { data: Y } = (0, v.J$)(D?.appid ? { appid: D.appid } : void 0);
          if (D) return I(D, Y, ee, le);
        }
        function I(D, ee, le, Y) {
          const ye = Y === "relative",
            oe = !1,
            pe = ye ? "/" : h.TS.STORE_BASE_URL,
            Pe = u(D.appid, D.clanSteamID, ye);
          le === "view"
            ? (le = oe ? "communityview" : "storeview")
            : le === "websitehub" &&
              (le = oe ? "community_announcehub" : "newshub");
          const ge = D.GID ? D.GID : "",
            He = D.AnnouncementGID ? D.AnnouncementGID : "",
            ce =
              D.BIsOGGEvent() &&
              D.appid &&
              ee &&
              D.BHasSaleUpdateLandingPageVanity(),
            se = D.GetEventType() == a.ajI;
          switch (le) {
            case "publish":
              return (
                Pe +
                (D.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + He
                  : "partnerevents/publish/" + ge + "?tab=publishing")
              );
            case "edit":
              return (
                Pe +
                (D.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + He
                  : "partnerevents/edit/" + ge)
              );
            case "editBroadcast":
              return (
                Pe +
                (D.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + He
                  : "partnerevents/edit/" + ge) +
                "?tab=broadcast"
              );
            case "migrate":
              return Pe + "partnerevents/migrate_announcement/" + He;
            case "preview":
              return se
                ? Pe + "partnerevents/previewsale/" + ge
                : Pe +
                    (D.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + He
                      : "partnerevents/preview/" + ge);
            case "previewsale":
              return Pe + "partnerevents/previewsale/" + ge;
            case "admin":
              return se
                ? `${pe}curator/${D.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : Pe + "partnerevents";
            case "community_announcehub":
              return Pe + "announcements";
            case "newshub": {
              const Ee = D.appid
                ? `app/${D.appid}`
                : `group/${D.clanSteamID.GetAccountID()}`;
              return pe + `${p()}/${Ee}`;
            }
            case "store":
              return (
                pe +
                (D.appid
                  ? "app/" + D.appid
                  : "curator/" + D.clanSteamID.GetAccountID())
              );
            case "sale":
              return D.jsondata.bSaleEnabled
                ? ce
                  ? `${(0, b._)(ee)}/${D.GetSaleUpdateLandingPageVanity()}`
                  : se
                    ? `${pe}curator/${D.clanSteamID.GetAccountID()}`
                    : pe +
                      (0, U.n)(
                        D.clanSteamID.GetAccountID(),
                        D.GetSaleVanity(),
                        !!D.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : pe;
            case "hardwarepreview":
              return F(D) ? `${pe}hardware_v2/${He}?beta=1` : pe;
            case "communityview":
              return Pe + "announcements/detail/" + He;
            case "storeview": {
              if (D.clanSteamID.GetAccountID() == (0, W.H)())
                return `${h.TS.STORE_BASE_URL}meetsteam/${ge}`;
              if (ce)
                return `${(0, b._)(ee)}/${D.GetSaleUpdateLandingPageVanity()}`;
              if (se) return `${pe}curator/${D.clanSteamID.GetAccountID()}`;
              {
                const Ee = D.appid
                    ? `app/${D.appid}`
                    : `group/${D.clanSteamID.GetAccountID()}`,
                  xe = S() ? "view_v2" : "view",
                  ft = D.bOldAnnouncement ? `old_view/${He}` : `${xe}/${ge}`;
                return `${pe}${p()}/${Ee}/${ft}`;
              }
            }
            case "usernewshub":
              return `${pe}${p()}/`;
            default:
              return (0, J.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function L(D, ee, le) {
          const Y = le === "forceAbsolute" || !$(ee, D);
          return w(D, ee, Y ? "absolute" : "relative");
        }
        function Me(D, ee, le, Y) {
          const ye = Y === "forceAbsolute" || !$(le, D);
          return I(D, ee, le, ye ? "absolute" : "relative");
        }
        function j(D) {
          const { eventModel: ee, route: le, bPopup: Y = !0 } = D,
            ye = $(le, ee),
            oe = w(ee, le, ye ? "relative" : "absolute");
          return (
            E.useEffect(() => {
              oe && (Y ? window.open(oe) : window.location.assign(oe));
            }, [Y, oe]),
            ye && oe ? (0, n.jsx)(A.rd, { push: !0, to: oe }) : null
          );
        }
        function ne(D, ee, le) {
          const Y = u(D, ee, !1);
          return le === "admin" ? Y + "partnerevents" : "";
        }
        function De(D) {
          const { eventModel: ee, preferredFocus: le } = D,
            { bCanUseLink: Y } = E.useContext(N.I),
            ye = (0, t.n9)(),
            oe = (0, A.W6)(),
            pe = Y && $(D.route, ee),
            Pe = w(ee, D.route, pe ? "relative" : "absolute"),
            ge = !pe && Pe ? (0, R.NT)(Pe) : Pe,
            He = pe || !ge ? ge : (0, q.wJ)(ge, ye),
            ce = w(ee, "websitehub", "absolute"),
            se =
              D.route != "websitehub"
                ? g.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            Ee = E.useCallback(() => {
              ce && window.location.assign(ce);
            }, [ce]);
          return ee
            ? pe
              ? (0, n.jsx)(s.Ii, {
                  style: D.style,
                  className: D.className,
                  href: oe.createHref({ pathname: He }),
                  onClick: (xe) => {
                    He && (D.onClick?.(xe), oe.push(He), xe.preventDefault());
                  },
                  onOptionsActionDescription: se,
                  onOptionsButton: se ? Ee : void 0,
                  preferredFocus: le,
                  children: D.children,
                })
              : (0, n.jsx)(s.Ii, {
                  href: He,
                  style: D.style,
                  className: D.className,
                  onClick: D.onClick,
                  preferredFocus: le,
                  onOptionsActionDescription: se,
                  onOptionsButton: se ? Ee : void 0,
                  children: D.children,
                })
            : null;
        }
      },
      32606: (me, ue, r) => {
        "use strict";
        r.d(ue, { O: () => W, j: () => q });
        var n = r(7850),
          T = r(65946),
          a = r(18057),
          s = r(36707),
          t = r(71684),
          E = r(38182),
          A = r.n(E);
        function q(N) {
          const {
              event: U,
              className: J,
              nOverrideStartTime: R,
              nOverrideEndTime: X,
            } = N,
            h = N.stylesmodule ? { ...A(), ...N.stylesmodule } : A(),
            [g, b, v] = (0, T.q3)(() => [
              R ||
                (U.bOldAnnouncement
                  ? U.postTime
                  : U.GetStartTimeAndDateUnixSeconds()),
              X || U.GetEndTimeAndDateUnixSeconds(),
              U.type,
            ]),
            l = !(0, t.JS)(v);
          return (0, n.jsx)("div", {
            className: (0, s.A)(h.EventDetailTimeInfo, J),
            children: (0, n.jsx)(a.v9, {
              startDateAndTime: g,
              endDateAndTime: b,
              bHideEndTime: l,
              stylesmodule: h,
            }),
          });
        }
        function W(N) {
          const {
              id: U,
              event: J,
              className: R,
              dateRangeLayout: X = "horizontal",
            } = N,
            [h, g, b] = (0, T.q3)(() => [
              J.GetStartTimeAndDateUnixSeconds(),
              J.GetEndTimeAndDateUnixSeconds(),
              J.type,
            ]),
            v = {};
          return (
            X == "vertical" &&
              (v.ShortDateRange = A().VerticalLocalDateAndTime),
            (0, n.jsx)("div", {
              id: U,
              className: (0, s.A)(A().EventDetailTimeInfo, R),
              children: (0, n.jsx)(a.u1, {
                startDateAndTime: h,
                endDateAndTime: g,
                bHideEndTime: !(0, t.JS)(b),
                stylesmodule: v,
              }),
            })
          );
        }
      },
      87949: (me, ue, r) => {
        "use strict";
        r.d(ue, { e: () => U });
        var n = r(7850),
          T = r(48156),
          a = r(72609),
          s = r(40358),
          t = r(88743),
          E = r(61431),
          A = r(36707),
          q = r(18210),
          W = r(20881),
          N = r.n(W);
        function U(J) {
          const { inputType: R, id: X, bApplyUserContentPref: h } = J,
            g = R == "bundle" ? "bundle" : R == "sub" ? "sub" : "game",
            b = (0, t.zl)(X, g),
            { data: v } = (0, s.J$)(b),
            { data: l, isPending: f } = (0, s.Ij)(h ? b : void 0);
          if (!v) return null;
          if (h) {
            if (f) return null;
            if (l?.filter_failure == T.hQ.Zy || l?.filter_failure == T.hQ.ir) {
              let M = "#StoreCapsule_App_Excluded";
              switch (R) {
                case "sub":
                  M = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  M = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, n.jsx)("div", {
                className: (0, A.A)(
                  N().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, q.oW)(
                  M,
                  (0, n.jsx)("a", {
                    href: a.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, n.jsx)("div", {
            className: (0, A.A)(N().AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, n.jsx)(E.p, {
              id: X,
              type: g,
              bShowDemoButton: v.type == T.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      42277: (me, ue, r) => {
        "use strict";
        r.d(ue, { KL: () => W, mc: () => N });
        var n = r(72604),
          T = r(72609),
          a = r(75233),
          s = r(80902),
          t = r(51614),
          E = r(83028);
        function A(U, J) {
          return ["GetClanAnnouncementVoteForUser", J, U];
        }
        function q(U) {
          return U == "up" ? 1 : U == "down" ? -1 : 0;
        }
        function W(U, J, R, X) {
          const h = (0, a.jE)(),
            g = A(U, T.iA.accountid),
            { data: b } = (0, s.I)({
              queryKey: g,
              queryFn: async () => await R.GetMyEventVote(U),
              initialData: X?.initialVote,
              enabled: !!U && !!T.iA.accountid && (X?.bAsk ?? !0),
              staleTime: 1 / 0,
              gcTime: 1 / 0,
            }),
            { mutate: v } = (0, t.n)({
              mutationFn: async (f) => {
                const M = await R.RateEvent(U, J, f);
                if (M != n.R)
                  throw new Error(`RateClanAnnouncement failed with ${M}`);
              },
              onMutate: (f) => h.setQueryData(g, f),
              onError: () => h.invalidateQueries({ queryKey: g }),
            });
          return {
            myVote: b,
            Vote: (f) => {
              !U || f == b || v(f);
            },
          };
        }
        function N(U, J) {
          if (U.length == 0) return;
          const R = J ?? (0, E.X)("SetMyEventVotes");
          R &&
            U.forEach((X) =>
              R.setQueryData(A(X.gidAnnouncement, T.iA.accountid), X.vote),
            );
        }
      },
      80684: (me, ue, r) => {
        "use strict";
        r.d(ue, { _: () => U });
        var n = r(7850),
          T = r(5827),
          a = r(40358),
          s = r(47875),
          t = r(54806),
          E = r(65946),
          A = r(1683),
          q = r(18210),
          W = r(98462),
          N = r.n(W);
        function U(J) {
          const { event: R } = J,
            X = (0, E.q3)(() => R.jsondata?.referenced_appids || []),
            h = (0, T.eG)(),
            g = (0, t.E)({
              queries: X.map((l) => (0, a.us)(h, { appid: l })),
              combine: (l) => ({
                bLoaded: l.every((f) => !f.isPending),
                data: l.map((f) => f.data),
              }),
            });
          if (!X.length || !g.bLoaded) return null;
          const b = g.data
              .flatMap((l) =>
                l?.store_url_path && l?.name
                  ? [`[url="${(0, s._)(l)}"]${l.name}[/url]`]
                  : [],
              )
              .join((0, q.we)("#EventDisplay_ReferencedApps_Joiner")),
            v = (0, q.Yp)("#EventDisplay_ReferencedApps", X.length, b);
          return (0, n.jsx)("div", {
            className: N().ReferencedApps,
            children: (0, n.jsx)(A.Zn, { text: v, event: R }),
          });
        }
      },
      88812: (me, ue, r) => {
        "use strict";
        r.d(ue, { WC: () => q });
        var n = r(9046),
          T = r(5827),
          a = r(75233),
          s = r(80902),
          t = r(71742),
          E = r(68266),
          A = r(85741);
        function q(h, g, b, v, l) {
          const f = (0, a.jE)(),
            M = (0, T.eG)();
          return (0, s.I)(N(f, M, h, g, b, v, l)).data ?? void 0;
        }
        function W(h, g, b, v, l) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            h?.GID,
            g,
            b,
            v,
            l,
          ];
        }
        function N(h, g, b, v, l, f, M) {
          return {
            queryKey: W(b, v, l, f, M),
            enabled: b && !!b.GID,
            queryFn: async () => {
              if (!b) return null;
              let $ = new Array();
              if (!b.BImageNeedScreenshotFallback(v, l)) {
                const k = await h.ensureQueryData((0, E.lx)(h, g, b, v, l, f));
                if ((k && $.push(k), f != n.wI.full)) {
                  const _ = await h.ensureQueryData(
                    (0, E.lx)(h, g, b, v, l, n.wI.full),
                  );
                  _ && $.push(_);
                }
              }
              if (!M)
                try {
                  const k = await h.ensureQueryData((0, A.dO)(h, g, b));
                  k && $.push(k);
                } catch (k) {
                  if (
                    ((0, t.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${b?.GID} from clan ${b?.clanSteamID.GetAccountID()}`,
                    ),
                    $.length == 0)
                  )
                    throw k;
                }
              return $;
            },
          };
        }
        function U(h, g, b, v, l) {
          if (!l || h.BImageNeedScreenshotFallback(g, b)) return;
          const f = GetImageFromEventDirectly(h, g, b, v);
          if (!f) return;
          const M = [f];
          if (v != EArtworkSizes.full) {
            const $ = GetImageFromEventDirectly(h, g, b, EArtworkSizes.full);
            if (!$) return;
            M.push($);
          }
          return M;
        }
        function J(h, g, b, v) {
          const l = useQueryClient(),
            f = useStoreBrowseDataLoader();
          return useQuery(X(l, f, h, g, b, v)).data ?? void 0;
        }
        function R(h, g, b, v) {
          const l = {};
          for (const f of h) {
            if (!f.eventModel.GID) continue;
            const M = U(f.eventModel, g, b, v, f.bIgnoreArtworkScreenshot);
            if (!M) return;
            l[f.eventModel.GID] = M;
          }
          return l;
        }
        function X(h, g, b, v, l, f) {
          return {
            queryKey: [
              "useEventImagesForSizeAsArrayWithFallback",
              b.map(
                (M) => `${M.eventModel.GID}:${!!M.bIgnoreArtworkScreenshot}`,
              ),
              v,
              l,
              f,
            ],
            enabled: b.length > 0,
            initialData: () => R(b, v, l, f),
            placeholderData: keepPreviousData,
            queryFn: async () => {
              const M = {};
              return (
                await Promise.all(
                  b.map(async ($) => {
                    const { eventModel: k, bIgnoreArtworkScreenshot: _ } = $;
                    if (!k.GID) return;
                    let Z = U(k, v, l, f, _);
                    if (!Z)
                      try {
                        Z =
                          (await h.ensureQueryData(N(h, g, k, v, l, f, _))) ??
                          void 0;
                      } catch {
                        Z = void 0;
                      }
                    Z && (M[k.GID] = Z);
                  }),
                ),
                M
              );
            },
          };
        }
      },
      68266: (me, ue, r) => {
        "use strict";
        r.d(ue, { lx: () => X, m0: () => J });
        var n = r(9046),
          T = r(55483),
          a = r(72609),
          s = r(21721),
          t = r(5827),
          E = r(40358),
          A = r(75233),
          q = r(80902),
          W = r(18210),
          N = r(53113),
          U = r(85741);
        function J(g, b, v, l = n.wI.full, f = !0) {
          const M = (0, A.jE)(),
            $ = (0, t.eG)();
          return (0, q.I)(X(M, $, g, b, v, l, f)).data ?? void 0;
        }
        function R(g, b, v, l = n.wI.full, f = !0) {
          return ["useEventImageURLWithFallback", g?.GID, b, v, l, f];
        }
        function X(g, b, v, l, f, M = n.wI.full, $ = !0) {
          return {
            queryKey: R(v, l, f, M, $),
            enabled: !!v?.GID,
            initialData: () => h(v, l, f, M, $),
            queryFn: async () => {
              if (!v) return null;
              let k = h(v, l, f, M, $);
              if (k) return k;
              const _ = await g.ensureQueryData(
                (0, T.ec)(v.clanSteamID.GetAccountID(), g),
              );
              if (l == "capsule") {
                let V = v.appid;
                if (
                  !V &&
                  _ &&
                  ((_.is_creator_home && !_.is_ogg) || _.is_curator)
                )
                  if (v.jsondata?.referenced_appids?.length)
                    V = v.jsondata.referenced_appids[0];
                  else return _.avatar_full_url ?? null;
                const c = await g.ensureQueryData((0, E.AQ)(b, { appid: V }));
                return c
                  ? ((0, s.b0)(c, "main_capsule") ?? null)
                  : _?.avatar_full_url
                    ? _.avatar_full_url
                    : `${a.TS.STORE_ITEM_BASE_URL}steam/apps/${V}/header.jpg`;
              }
              return l == "background" &&
                _ &&
                ((_.is_creator_home && !_.is_ogg) || _.is_curator)
                ? (_.creator_page_bg_url ?? null)
                : await g.ensureQueryData((0, U.dO)(g, b, v));
            },
          };
        }
        function h(g, b, v, l = n.wI.full, f = !0) {
          if (!g) return;
          const M = g.GetImageURL(b, v, l);
          if (M && M.trim().length > 0) return M;
          const $ = W.A0.GetELanguageFallback(v);
          if (v != $) {
            const _ = g.GetImageURL(b, $, l);
            if (_ && _.trim().length > 0) return _;
          }
          if (b == "capsule") {
            let _ = g.GetImageFromBeginningOfDescription(v, Number.MAX_VALUE);
            if (_ && (f || (0, N.ZF)(_))) return _;
          }
        }
      },
      85741: (me, ue, r) => {
        "use strict";
        r.d(ue, { Mg: () => q, dO: () => W });
        var n = r(55483),
          T = r(99412),
          a = r(72609),
          s = r(5827),
          t = r(40358),
          E = r(75233),
          A = r(80902);
        function q(U) {
          const J = (0, E.jE)(),
            R = (0, s.eG)();
          return (0, A.I)(W(J, R, U)).data ?? void 0;
        }
        function W(U, J, R) {
          return {
            queryKey: N(R),
            enabled: !!R?.GID,
            queryFn: async () => {
              if (!R) return null;
              const X = R.appid
                  ? await U.ensureQueryData((0, t.OE)(J, { appid: R.appid }))
                  : null,
                h = await U.ensureQueryData(
                  (0, n.ec)(R.clanSteamID.GetAccountID(), U),
                );
              if (R.appid)
                if (X) {
                  if (
                    X.all_ages_screenshots &&
                    X.all_ages_screenshots.length > 0
                  ) {
                    let g = Number(
                      R.bOldAnnouncement
                        ? R.AnnouncementGID
                        : R.GID == null
                          ? 0
                          : R.GID,
                    );
                    return (
                      (g = g % X.all_ages_screenshots.length),
                      `${a.TS.STORE_ITEM_BASE_URL}${X.all_ages_screenshots[g].filename}`
                    );
                  }
                } else return "";
              return R.GetEventType() != T.ajI &&
                h &&
                ((h.is_creator_home && !h.is_ogg) || h.is_curator)
                ? (h.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function N(U) {
          return ["useFallbackArtworkScreenshot", U?.GID];
        }
      },
      28515: (me, ue, r) => {
        "use strict";
        r.d(ue, { n: () => E });
        var n = r(7850),
          T = r(90626),
          a = r(59432);
        const s = T.createContext(void 0);
        function t(A) {
          const [q, W] = React.useState(A.rtServerNow),
            N = !!A.bHoldSeed;
          return (
            React.useEffect(() => {
              N || W(void 0);
            }, [N]),
            jsx(s.Provider, { value: q, children: A.children })
          );
        }
        function E() {
          return T.useContext(s) ?? (0, a.Gw)();
        }
      },
      90533: (me, ue, r) => {
        "use strict";
        r.d(ue, { Eg: () => q, m4: () => h, EG: () => X, fm: () => v });
        var n = r(61639),
          T = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(3166);
        async function E(l, f) {
          const M = new URLSearchParams();
          M.append("page_action", String(l)),
            M.append("snr", t.TS.SNR),
            M.append("uint_data", String(f)),
            M.append("str_data", A());
          try {
            await fetch(
              t.TS.STORE_BASE_URL + "events/ajaxreportnewshubstats/",
              { method: "POST", body: M },
            );
          } catch {}
        }
        function A() {
          if (t.TS.IN_CLIENT) return "steam";
          const l = navigator.userAgent;
          return /iPhone|iPad|iPod/i.test(l) ||
            (/Macintosh/i.test(l) && /Safari/i.test(l))
            ? "ios"
            : /Android/i.test(l)
              ? "android"
              : "";
        }
        var q = ((l) => (
          (l[(l.k_eDiscussions = 0)] = "k_eDiscussions"),
          (l[(l.k_eThumbsUp = 1)] = "k_eThumbsUp"),
          (l[(l.k_eClickThrough = 2)] = "k_eClickThrough"),
          (l[(l.k_eMuted = 3)] = "k_eMuted"),
          (l[(l.k_ePlayedVideo = 4)] = "k_ePlayedVideo"),
          (l[(l.k_eReminder_Opened = 5)] = "k_eReminder_Opened"),
          (l[(l.k_eReminder_MobilePush = 6)] = "k_eReminder_MobilePush"),
          (l[(l.k_eReminder_Email = 7)] = "k_eReminder_Email"),
          (l[(l.k_eReminder_CalendarApple = 8)] = "k_eReminder_CalendarApple"),
          (l[(l.k_eReminder_CalendarGoogle = 9)] =
            "k_eReminder_CalendarGoogle"),
          (l[(l.k_eReminder_CalendarOutlook = 10)] =
            "k_eReminder_CalendarOutlook"),
          (l[(l.k_eReminder_EmailUnverified = 11)] =
            "k_eReminder_EmailUnverified"),
          (l[(l.k_eReminder_MobilePushMissing = 12)] =
            "k_eReminder_MobilePushMissing"),
          l
        ))(q || {});
        const W = {
          nFutureViewedIndex: 0,
          nPastViewedIndex: 0,
          nLastRecordedFilter: 0,
        };
        function N() {
          return ["EventCalendarTrackingProgress"];
        }
        function U(l) {
          return l.getQueryData(N()) ?? W;
        }
        function J(l, f) {
          l.setQueryDefaults(N(), { staleTime: 1 / 0, gcTime: 1 / 0 }),
            l.setQueryData(N(), (M) => ({ ...(M ?? W), ...f }));
        }
        function R(l, f, M) {
          return clearTimeout(l), setTimeout(M, f);
        }
        function X(l) {
          E(n.Mc.ej, l);
        }
        function h(l, f) {
          const $ = R(U(l).schFilter, 1e3, () => {
            f != U(l).nLastRecordedFilter &&
              (J(l, { nLastRecordedFilter: f }), E(n.Mc.Ms, f));
          });
          J(l, { schFilter: $ });
        }
        function g(l, f, M, $) {
          let k = 0,
            _ = 0,
            Z,
            V;
          for (const w of M) {
            const I = w.start_time > $;
            if ((w.unique_id == f && ((Z = _), (V = w)), I)) k++;
            else if (Z !== void 0) break;
            _++;
          }
          if (Z === void 0 || !V) return;
          const c = 500,
            u = U(l);
          if (Z < k) {
            const w = k - Z;
            if (u.nFutureViewedIndex >= w) return;
            const I = R(u.schFuture, c, () => {
              const L =
                Math.min(w, 4095) |
                (Math.min(k, 255) << 12) |
                (Math.min(b($), 2047) << 20);
              E(n.Mc.R, L);
            });
            J(l, { nFutureViewedIndex: w, schFuture: I });
            return;
          }
          const p = Z - k;
          if (u.nPastViewedIndex >= p) return;
          const S = Math.floor(($ - V.start_time) / (24 * 3600)),
            F = R(u.schPast, c, () => {
              const w =
                Math.min(p, 4095) |
                (Math.min(S, 255) << 12) |
                (Math.min(b($), 2047) << 20);
              E(n.Mc.mZ, w);
            });
          J(l, { nPastViewedIndex: p, schPast: F });
        }
        function b(l) {
          return Math.max(0, Math.floor(Date.now() / 1e3 - l));
        }
        function v() {
          const l = (0, T.jE)(),
            { mutate: f } = (0, a.n)({
              mutationFn: async (M) => {
                switch (M.type) {
                  case "interaction":
                    X(M.interaction);
                    break;
                  case "filter-change":
                    h(l, M.nFilterBitMask);
                    break;
                  case "event-viewed":
                    g(l, M.gidEvent, M.rgItemsInView, M.rtCalendarInit);
                    break;
                }
              },
            });
          return s.useMemo(
            () => ({
              RecordInteraction: (M) =>
                f({ type: "interaction", interaction: M }),
              RecordFilterChange: (M) =>
                f({ type: "filter-change", nFilterBitMask: M }),
              RecordEventViewed: (M, $, k) =>
                f({
                  type: "event-viewed",
                  gidEvent: M,
                  rgItemsInView: $,
                  rtCalendarInit: k,
                }),
            }),
            [f],
          );
        }
      },
      16369: (me, ue, r) => {
        "use strict";
        r.d(ue, { H: () => a });
        var n = r(99412),
          T = r(72609);
        const a = () => (T.TS.EUNIVERSE === n.Rv ? 2581 : 45267781);
      },
      69909: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          Lc: () => f,
          Mr: () => V,
          Sk: () => M,
          Ue: () => k,
          _t: () => $,
          ee: () => v,
          hh: () => N,
          mG: () => h,
          my: () => J,
          rF: () => _,
          us: () => Z,
        });
        var n = r(16936),
          T = r(54357),
          a = r(80902),
          s = r(16369),
          t = r(36174),
          E = r(65946),
          A = r(92264),
          q = r(87937),
          W = r.n(q);
        const N = "America/Los_Angeles";
        function U(c, u) {
          return {
            queryKey: R(c, u),
            queryFn: () => (0, n.t3)(u),
            enabled: (0, s.H)() == c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function J(c, u) {
          return (0, a.I)(U(c, u));
        }
        const R = (c, u) => ["useMeetSteamGetAvailability", c, u];
        function X(c, u, p) {
          return {
            queryKey: g(c, u, p),
            queryFn: async () => {
              const S = await (0, n.vd)(u);
              return S ? JSON.parse(S) : {};
            },
            enabled: (0, s.H)() == c && !!p,
          };
        }
        function h(c, u, p) {
          return (0, a.I)(X(c, u, p));
        }
        const g = (c, u, p) => ["useMeetSteamGetRegistrationDetails", c, u, p];
        function b(c) {
          return {
            queryKey: ["MeetSteamRegistrantInfo", c],
            queryFn: () => (0, n.Nc)(),
            enabled: !!c,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function v(c) {
          return (0, a.I)(b(c));
        }
        function l(c, u) {
          return {
            queryKey: ["useMeetSteamQRCode", c, u],
            queryFn: () => (0, n.EI)(c, u),
            enabled: !!u && !0,
            staleTime: t.Kp.PerMinute * 10,
          };
        }
        function f(c, u) {
          return (0, a.I)(l(c, u)).data?.qrcode;
        }
        function M(c, u = Intl.DateTimeFormat().resolvedOptions().timeZone) {
          return c.location_type === "in_person"
            ? (c.in_person_time_zone ?? N)
            : u;
        }
        function $(c) {
          const u = (0, T.B)();
          return (0, E.q3)(() => ({
            rtime_start: c.rtime_start,
            rtime_end: c.rtime_end,
            sDisplayTimeZone: M(c, u),
          }));
        }
        function k(c, u) {
          const p = W().unix(c),
            F = W().unix(c).tz(u).utcOffset() - p.utcOffset();
          return new Date((c + F * 60) * 1e3);
        }
        function _(c, u) {
          const p = k(c, u),
            S = new Date();
          return p.getFullYear() == S.getFullYear()
            ? (0, A.$w)(p)
            : (0, A._9)(p);
        }
        function Z(c, u) {
          const p = W().unix(c),
            F = W().unix(c).tz(u).utcOffset() - p.utcOffset();
          return (0, A.KC)(c + F * 60);
        }
        function V(c, u, p, S) {
          const F = W().unix(c),
            I = W().unix(c).tz(p).utcOffset() - F.utcOffset(),
            L = W().unix(u),
            Me = W().unix(u).tz(p),
            j = Me.utcOffset() - L.utcOffset();
          return (
            (0, A.Vx)(c + I * 60, u + j * 60, !0) +
            (S ? "" : " " + Me.format("z"))
          );
        }
      },
      5191: (me, ue, r) => {
        "use strict";
        r.d(ue, { j: () => Qe });
        var n = r(7850),
          T = r(55483),
          a = r(29522),
          s = r(40358),
          t = r(90533),
          E = r(72609),
          A = r(89926),
          q = r(28515),
          W = r(99412),
          N = r(64868),
          U = r(90626),
          J = r(16346),
          R = r(40650),
          X = r(16412),
          h = r(18057),
          g = r(96538),
          b = r(36118),
          v = r(85599),
          l = r(71421),
          f = r(36707),
          M = r(18210),
          $ = r(36174),
          k = r(53113),
          _ = r(6878),
          Z = r.n(_),
          V = r(95695),
          c = r(56492),
          u = r(42937);
        function p(ve) {
          return (
            (ve.bHasVerifiedEmail && ve.bFollowsByEmail) ||
            (ve.bHasPushNotification && ve.bFollowsByPush)
          );
        }
        function S(ve) {
          const {
              eventModel: we,
              rtNow: ke,
              notifyState: Ue,
              bOnlyShowIcon: $e,
              renderPanel: tt,
              onRequestSignIn: _e,
              bSignedIn: it,
              onTrack: Ve,
            } = ve,
            [G, re] = U.useState(!1),
            Se = U.useRef(null),
            he = U.useRef(null),
            Xe = U.useCallback(() => {
              he.current?.Hide(), re(!1);
            }, []),
            Re = () => {
              const de = {
                bOverlapHorizontal: !0,
                bOverlapVertical: !0,
                bDisablePopTop: !0,
                bMatchWidth: !0,
                strClassName: (0, f.A)(
                  u.ReminderDialog,
                  u.ReminderOptions,
                  R.contextMenu,
                ),
              };
              (he.current = (0, J.lX)(tt(Xe), Se.current, de)),
                he.current.SetOnHideCallback(Xe),
                re(!0),
                Ve?.("opened");
            },
            x = (de) => {
              if (!it) {
                _e?.();
                return;
              }
              G ? Xe() : Re(), de.stopPropagation(), de.preventDefault();
            },
            B = $e && !G,
            ae = p(Ue);
          return (we.startTime !== void 0 && we.startTime < ke) ||
            we.BIsUnlistedEvent()
            ? null
            : (0, n.jsxs)("div", {
                className: (0, f.A)({
                  [u.ReminderCheckBox]: !0,
                  [Z().ReminderCtn]: !0,
                  [u.IconMode]: B,
                  [u.TextMode]: !B,
                  ReminderSet: ae,
                  RemindMeWidget: !0,
                }),
                role: "button",
                tabIndex: 0,
                "aria-expanded": G,
                onClick: x,
                onKeyDown: (de) => {
                  (de.key === "Enter" || de.key === " ") && x(de);
                },
                ref: Se,
                children: [
                  ae &&
                    (0, n.jsx)("div", {
                      className: u.RemindCheck,
                      children: (0, n.jsx)(b.Jlk, {}),
                    }),
                  B &&
                    (0, n.jsx)("div", {
                      className: u.RemindBell,
                      children: (0, n.jsx)(b.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderDefault,
                    children: (0, M.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: u.ReminderOptions }),
                ],
              });
        }
        function F(ve) {
          const {
              eventModel: we,
              lang: ke,
              rtNow: Ue,
              notifyState: $e,
              bShowStartTime: tt,
              bExpandLeft: _e,
              bOnlyShowIcon: it,
              strCalendarEventTitle: Ve,
              onChangeNotify: G,
              onTrack: re,
              fnHidePanel: Se,
            } = ve,
            [he, Xe] = U.useState(!1),
            [Re, x] = U.useState(void 0),
            [B, ae, be] = (0, N.uD)(),
            de = async (Q, fe) => {
              if (!(!we.GID || we.GID == W.kFb)) {
                Xe(!0);
                try {
                  await G(Q, fe),
                    Q && re?.(fe == "email" ? "notify-email" : "notify-push");
                } catch (Ae) {
                  x(Ae instanceof Error ? Ae.message : String(Ae)), ae();
                }
                Xe(!1);
              }
            },
            Le = we.jsondata.bSaleEnabled
              ? c.PH.k_eStoreSalePage
              : c.PH.k_eStoreView,
            Ce = (0, c.Bw)(we, Le, "forceAbsolute"),
            ut = () => {
              let Q = we.GetSubTitleWithLanguageFallback(ke);
              Q = Q
                ? `${Q}


`
                : "";
              const fe = we.GetSummaryWithFallback(ke);
              return `${Q}${fe}

${Ce}`;
            },
            rt = () => {
              const Q = encodeURIComponent(Ve),
                fe = encodeURIComponent(ut()),
                Ae = we.GetStartTimeAndDateUnixSeconds(),
                Fe = w(Ae),
                Te = we.GetEndTimeAndDateUnixSeconds() || Ae + $.Kp.PerHour,
                Ze = w(Te),
                et =
                  (E.TS.IN_CLIENT ? "steam://openurl_external/" : "") +
                  `https://calendar.google.com/calendar/r/eventedit?text=${Q}&details=${fe}&dates=${Fe}/${Ze}`;
              return (0, k.k2)(et);
            },
            It = (Q) => {
              const fe = we.appid
                  ? "app/" + we.appid
                  : "group/" + we.clanSteamID.GetAccountID(),
                Ae = "l=" + (0, W.LgB)(ke);
              return `${E.TS.STORE_BASE_URL}${(0, c.LJ)()}/download/${fe}/${Q}/${we.GID}?${Ae}`;
            },
            {
              bHasVerifiedEmail: st,
              bHasPushNotification: gt,
              bFollowsByEmail: Mt,
              bFollowsByPush: Bt,
            } = $e,
            bt = !1,
            yt = tt && we.GetStartTimeAndDateUnixSeconds();
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsxs)("div", {
                className: (0, f.A)(
                  u.ReminderCheckBox,
                  it ? u.IconMode : u.TextMode,
                  "RemindMeWidget",
                ),
                role: "button",
                tabIndex: 0,
                onClick: Se,
                onKeyDown: (Q) => {
                  (Q.key === "Enter" || Q.key === " ") &&
                    (Q.preventDefault(), Se());
                },
                children: [
                  p($e) &&
                    (0, n.jsx)("div", {
                      className: u.RemindCheck,
                      children: (0, n.jsx)(b.Jlk, {}),
                    }),
                  it &&
                    (0, n.jsx)("div", {
                      className: u.RemindBell,
                      children: (0, n.jsx)(b.IrQ, {}),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderDefault,
                    children: (0, M.we)("#EventDisplay_Reminder_SetReminder"),
                  }),
                  (0, n.jsx)("div", { className: u.ReminderOpennedOptions }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: (0, f.A)(
                  u.FlexColumnContainer,
                  u.ReminderBackground,
                  _e && u.ReminderExpandsLeft,
                ),
                children: [
                  he &&
                    (0, n.jsx)(v.t, {
                      className: u.RpcThrobber,
                      size: "xlarge",
                      position: "center",
                    }),
                  yt &&
                    (0, n.jsx)("div", {
                      className: u.FullStartTime,
                      children: (0, M.PP)(
                        "#EventDisplay_EventUpcoming_WithDateAndTime",
                        (0, M.TW)(
                          yt,
                          (0, $.Ct)(new Date(yt * 1e3), new Date(Ue * 1e3)),
                        ),
                        (0, h.yi)(yt, !0),
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: u.ReminderOptionsHeader,
                    children: (0, M.we)(
                      "#EventDisplay_Reminder_GetNotification_Via",
                    ),
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, f.A)(u.ReminderOption, !st && u.Unverified),
                    children: [
                      (0, n.jsx)(l.he, {
                        className: u.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, M.we)(
                          st
                            ? "#EventReminder_NotifyByEmail_ttip"
                            : "#EventReminder_NotifyByEmail_Missing",
                        ),
                        children: (0, n.jsx)(X.Yh, {
                          label: (0, M.we)("#EventDisplay_Reminder_ViaEmail"),
                          disabled: !st,
                          checked: Mt,
                          onChange: (Q) => de(Q, "email"),
                        }),
                      }),
                      !st &&
                        (0, n.jsx)("div", {
                          className: V.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: E.TS.STORE_BASE_URL + "account/",
                            target: E.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => re?.("email-unverified"),
                            rel: "noreferrer",
                            children: (0, M.we)(
                              "#EventReminder_NotifyByEmail_Missing_Add",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, f.A)(u.ReminderOption, !gt && u.Unverified),
                    children: [
                      (0, n.jsx)(l.he, {
                        className: u.CheckboxWrapper,
                        bTopmost: !0,
                        toolTipContent: (0, M.we)(
                          gt
                            ? "#EventReminder_NotifyByMobile_ttip"
                            : "#EventReminder_NotifyByMobile_Missing",
                        ),
                        children: (0, n.jsx)(X.Yh, {
                          label: (0, M.we)(
                            "#EventDisplay_Reminder_ViaMobileApp",
                          ),
                          disabled: !gt,
                          checked: Bt,
                          onChange: (Q) => de(Q, "push"),
                        }),
                      }),
                      !gt &&
                        (0, n.jsx)("div", {
                          className: V.FlexColumnContainer,
                          children: (0, n.jsx)("a", {
                            href: E.TS.STORE_BASE_URL + "mobile/?show=steamapp",
                            target: E.TS.IN_CLIENT ? void 0 : "_blank",
                            onClick: () => re?.("push-missing"),
                            rel: "noreferrer",
                            children: (0, M.we)(
                              "#EventReminder_NotifyByMobile_Install",
                            ),
                          }),
                        }),
                    ],
                  }),
                  (0, n.jsxs)(U.Fragment, {
                    children: [
                      (0, n.jsx)("div", {
                        className: u.ReminderOptionsHeader,
                        children: (0, M.we)(
                          "#EventDisplay_Reminder_AddToCalendar",
                        ),
                      }),
                      (0, n.jsxs)("div", {
                        className: u.ReminderCalendarOptions,
                        children: [
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            href: It("ics"),
                            onClick: () => re?.("calendar-apple"),
                            children: (0, M.we)(
                              "#EventDisplay_Reminder_AppleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            target: E.TS.IN_CLIENT ? void 0 : "_blank",
                            href: rt(),
                            onClick: () => re?.("calendar-google"),
                            rel: "noreferrer",
                            children: (0, M.we)(
                              "#EventDisplay_Reminder_GoogleCalendar_Short",
                            ),
                          }),
                          (0, n.jsx)("a", {
                            className: u.ReminderOption,
                            href: It("outlook"),
                            onClick: () => re?.("calendar-outlook"),
                            children: (0, M.we)(
                              "#EventDisplay_Reminder_OutlookCalendar_Short",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  bt &&
                    (0, n.jsx)("div", {
                      className: (0, f.A)(u.ReminderSettings, u.ReminderOption),
                      children: (0, M.we)("#EventDisplay_Reminder_Preferences"),
                    }),
                ],
              }),
              (0, n.jsx)(g.EN, {
                active: B,
                children: (0, n.jsx)(g.KG, {
                  strTitle: (0, M.we)(
                    "#EventDisplay_Reminder_FollowEvent_Error",
                  ),
                  strDescription: (0, M.we)(
                    "#EventDisplay_Reminder_FollowEvent_ErrorDesc",
                  ),
                  closeModal: be,
                  children: Re,
                }),
              }),
            ],
          });
        }
        function w(ve) {
          return new Date(ve * 1e3)
            .toISOString()
            .replace(/[-:]/g, "")
            .replace(/\.\d{3}Z$/, "Z");
        }
        var I = r(26589),
          L = r(68312),
          Me = r(75233),
          j = r(80902),
          ne = r(76559),
          De = r(67705),
          D = ((ve) => (
            (ve[(ve.k_ENotifyFlagNone = 0)] = "k_ENotifyFlagNone"),
            (ve[(ve.k_ENotifyFlagByEmail = 1)] = "k_ENotifyFlagByEmail"),
            (ve[(ve.k_ENotifyFlagByPush = 2)] = "k_ENotifyFlagByPush"),
            ve
          ))(D || {});
        const ee = "notificationaction/usercontactmethods";
        async function le() {
          const ve = E.TS.STORE_BASE_URL + ee,
            we = await fetch(ve, { credentials: "include" });
          if (!we.ok) throw new Error(`${ve} answered ${we.status}`);
          return await we.json();
        }
        const Y = { bHasValidatedEmail: !1, bHasPushNotification: !1 };
        function ye() {
          const { data: ve } = (0, j.I)(pe());
          return ve ?? Y;
        }
        function oe(ve) {
          return ["useUserContactMethods", ve];
        }
        function pe() {
          return {
            queryKey: oe(E.iA.accountid),
            queryFn: le,
            enabled: !!E.iA.logged_in,
            initialData: () => {
              const ve = (0, De.Fd)("notificationstore", "application_config");
              return ge(ve) ? Pe(ve) : void 0;
            },
          };
        }
        function Pe(ve) {
          return {
            bHasValidatedEmail: !!ve.email_validated,
            bHasPushNotification: (ve.mobile_device_count ?? 0) > 0,
          };
        }
        function ge(ve) {
          const we = ve;
          return (
            !!we &&
            typeof we == "object" &&
            typeof we.mobile_device_count == "number"
          );
        }
        function He(ve, we) {
          const ke = (0, Me.jE)(),
            Ue = (0, L.KV)(),
            { data: $e } = (0, j.I)((0, I.gg)(ve, ke, Ue)),
            tt = ye(),
            _e = se($e, we);
          return {
            bHasVerifiedEmail: tt.bHasValidatedEmail,
            bHasPushNotification: tt.bHasPushNotification,
            bFollowsByEmail: (_e & D.k_ENotifyFlagByEmail) != 0,
            bFollowsByPush: (_e & D.k_ENotifyFlagByPush) != 0,
          };
        }
        function ce(ve, we) {
          const ke = (0, Me.jE)(),
            Ue = (0, L.KV)(),
            $e = (0, I.gg)(ve, ke, Ue);
          return async (tt, _e) => {
            if (!we) return;
            const it = ke.getQueryData($e.queryKey),
              Ve =
                _e == "email" ? D.k_ENotifyFlagByEmail : D.k_ENotifyFlagByPush,
              G = se(it, we),
              re = tt ? G | Ve : G & ~Ve;
            await Ee(ve, we, re),
              await ke.invalidateQueries({ queryKey: $e.queryKey });
          };
        }
        function se(ve, we) {
          const ke = we ? (ve?.event_followed?.indexOf(we) ?? -1) : -1;
          return ke == -1 ? 0 : (ve?.event_followed_flags?.[ke] ?? 0);
        }
        async function Ee(ve, we, ke) {
          const Ue = ke == 0,
            tt = `${`${E.TS.STORE_BASE_URL}events/`}${Ue ? "unfolloworunignoreevent" : "followorignoreevent"}`,
            _e = new URLSearchParams();
          _e.append("sessionid", (0, De.KC)()),
            _e.append("ignore", "false"),
            _e.append("gid", we),
            _e.append("notification_flag", "" + ke),
            _e.append("clan_accountid", "" + ve);
          const it = await fetch(tt, {
            method: "POST",
            body: _e,
            credentials: "include",
          });
          if (!it.ok) throw new Error(`${tt} answered ${it.status}`);
        }
        function xe(ve) {
          const { eventModel: we, bOnlyShowIcon: ke, onTrack: Ue } = ve,
            $e = (0, q.n)(),
            tt = He(we.clanSteamID.GetAccountID(), we.GID),
            { elDialogElement: _e, fnShowLogonDialog: it } = (0, A.l)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(S, {
                eventModel: we,
                rtNow: $e,
                notifyState: tt,
                bOnlyShowIcon: ke,
                bSignedIn: !!E.iA.logged_in || E.TS.IN_CLIENT,
                onRequestSignIn: it,
                onTrack: Ue,
                renderPanel: (Ve) =>
                  (0, n.jsx)(ft, { ...ve, rtNow: $e, fnHidePanel: Ve }),
              }),
              _e,
            ],
          });
        }
        function ft(ve) {
          const {
              eventModel: we,
              lang: ke,
              strHubName: Ue,
              bShowStartTime: $e,
              bExpandLeft: tt,
              bOnlyShowIcon: _e,
              onTrack: it,
              rtNow: Ve,
              fnHidePanel: G,
            } = ve,
            re = we.clanSteamID.GetAccountID(),
            Se = He(re, we.GID),
            he = ce(re, we.GID),
            Xe = we.GetNameWithFallback(ke) ?? "",
            Re = Ue ? `${Ue}: ${Xe}` : Xe;
          return (0, n.jsx)(F, {
            eventModel: we,
            lang: ke,
            rtNow: Ve,
            notifyState: Se,
            strCalendarEventTitle: Re,
            bShowStartTime: $e,
            bExpandLeft: tt,
            bOnlyShowIcon: _e,
            onChangeNotify: he,
            onTrack: it,
            fnHidePanel: G,
          });
        }
        function Qe(ve) {
          const {
              eventModel: we,
              lang: ke,
              bShowStartTime: Ue,
              bExpandLeft: $e,
              bOnlyShowIcon: tt,
            } = ve,
            _e = (0, t.fm)(),
            it = nt(we);
          return (0, n.jsx)(xe, {
            eventModel: we,
            lang: ke,
            strHubName: it,
            bShowStartTime: Ue,
            bExpandLeft: $e,
            bOnlyShowIcon: tt,
            onTrack: (Ve) => _e.RecordInteraction(at[Ve]),
          });
        }
        function nt(ve) {
          const we = ve.appid || void 0,
            ke = (0, a.$5)(we),
            { data: Ue } = (0, s.J$)(ke),
            { data: $e } = (0, T.TB)(
              we ? void 0 : ve.clanSteamID.GetAccountID(),
            );
          return (we ? Ue?.name : $e?.group_name) || void 0;
        }
        const at = {
          opened: t.Eg.k_eReminder_Opened,
          "notify-email": t.Eg.k_eReminder_Email,
          "notify-push": t.Eg.k_eReminder_MobilePush,
          "email-unverified": t.Eg.k_eReminder_EmailUnverified,
          "push-missing": t.Eg.k_eReminder_MobilePushMissing,
          "calendar-apple": t.Eg.k_eReminder_CalendarApple,
          "calendar-google": t.Eg.k_eReminder_CalendarGoogle,
          "calendar-outlook": t.Eg.k_eReminder_CalendarOutlook,
        };
      },
      91778: (me, ue, r) => {
        "use strict";
        r.d(ue, { k: () => t });
        var n = r(7850),
          T = r(90626),
          a = r(69168);
        const s = T.lazy(() =>
          Promise.all([
            r.e(5858),
            r.e(58612),
            r.e(98028),
            r.e(8319),
            r.e(34178),
            r.e(98656),
          ])
            .then(r.bind(r, 21637))
            .then((E) => ({ default: E.ShareEventDialogBody })),
        );
        function t(E) {
          const { bActive: A, ...q } = E;
          return (0, n.jsx)(a.E, {
            active: A,
            children: (0, n.jsx)(T.Suspense, {
              fallback: null,
              children: (0, n.jsx)(s, { ...q }),
            }),
          });
        }
      },
      73644: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          D1: () => k,
          Nk: () => l,
          k6: () => u,
          lS: () => b,
          lz: () => f,
        });
        var n = r(7850),
          T = r(32093),
          a = r(48156),
          s = r(72609),
          t = r(40358),
          E = r(90626),
          A = r(95695),
          q = r.n(A),
          W = r(36118),
          N = r(71421),
          U = r(36707),
          J = r(18210),
          R = r(53113),
          X = r(19890),
          h = r.n(X),
          g = r(4515);
        function b(p) {
          const { appid: S } = p;
          return (0, n.jsx)("div", {
            className: h().AppSocialLinksCtn,
            children: (0, n.jsx)(v, { appid: S }),
          });
        }
        function v(p) {
          const { appid: S } = p,
            { data: F } = (0, t.bg)({ appid: S });
          return !F || F.length == 0
            ? null
            : (0, n.jsx)(M, {
                strTitle: (0, J.we)("#EventDisplay_SocialTitle"),
                id: "" + S,
                rgSocialMedia: F,
              });
        }
        function l(p) {
          return (0, E.useMemo)(
            () =>
              p
                ? p.map((S) => {
                    const F = (0, g.v)(S.type);
                    return F == a.jL.EK || F == a.jL.Or
                      ? { link_type: F, text: S.link }
                      : { link_type: F, url: S.link };
                  })
                : [],
            [p],
          );
        }
        function f(p) {
          const { gidClanEvent: S, rgSocial: F, bIsCreatorHomeEvent: w } = p,
            I = l(F);
          if (I.length == 0) return null;
          const L = w
            ? (0, J.we)("#EventDisplay_Sale_SocialTitle_Dev")
            : (0, J.we)("#EventDisplay_Sale_SocialTitle");
          return (0, n.jsx)(M, { strTitle: L, id: S, rgSocialMedia: I });
        }
        function M(p) {
          const { strTitle: S, id: F, rgSocialMedia: w } = p;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: (0, U.A)(
                  q().EventEditorTextTitle,
                  "EventEditorTextTitle",
                ),
                children: S,
              }),
              (0, n.jsx)(k, { id: F, rgSocialMedia: w }),
            ],
          });
        }
        const $ = [
          a.jL.EK,
          a.jL.$3,
          a.jL.M0,
          a.jL.Ow,
          a.jL.Ib,
          a.jL.qe,
          a.jL.Lk,
        ];
        function k(p) {
          const { id: S, rgSocialMedia: F, className: w } = p,
            I = s.TS.EREALM === T.TU.k_ESteamRealmChina;
          return (0, n.jsx)("div", {
            className: (0, U.A)(h().AppSocialLinks, w),
            children: F.filter(
              (L) => !I || $.includes(L.link_type || a.jL.I0),
            ).map((L) =>
              L.url
                ? (0, n.jsx)(
                    _,
                    { social: L },
                    "app_social_link_" + S + "_" + L.link_type,
                  )
                : (0, n.jsx)(
                    Z,
                    { social: L },
                    "app_social_text_" + S + "_" + L.link_type + "_" + L.text,
                  ),
            ),
          });
        }
        function _(p) {
          const { social: S } = p;
          return S.url
            ? (0, n.jsx)("a", {
                href: (0, R.NT)(S.url, !0),
                target: s.TS.IN_CLIENT ? void 0 : "_blank",
                rel: "noopener noreferrer",
                children: (0, n.jsx)(N.he, {
                  toolTipContent: S.url,
                  children: (0, n.jsx)(V, { social: S }),
                }),
              })
            : null;
        }
        function Z(p) {
          const { social: S } = p;
          return (0, n.jsxs)("div", {
            className: h().AppSocialLinkWithText,
            children: [
              (0, n.jsx)(N.he, {
                toolTipContent: S.text,
                children: (0, n.jsx)(V, { social: S }),
              }),
              (0, n.jsx)("div", {
                className: h().AppSocialText,
                children: S.text,
              }),
            ],
          });
        }
        function V(p) {
          const { social: S } = p;
          return (0, n.jsx)(u, {
            linkType: S.link_type || a.jL.I0,
            className: h().AppSocialLinkIcon,
          });
        }
        const c = {
          [a.jL.lQ]: W.agV,
          [a.jL.GO]: W.ZnA,
          [a.jL.jG]: W.oy,
          [a.jL.F7]: W.ofN,
          [a.jL.Eb]: W.Bki,
          [a.jL.EK]: W.$vK,
          [a.jL.M0]: W.$vK,
          [a.jL.$3]: W.$vK,
          [a.jL.a$]: W.OSJ,
          [a.jL.Ow]: W.nm_,
          [a.jL.Ib]: W.tIO,
          [a.jL.uw]: W.Vt2,
          [a.jL.sP]: W.Vgk,
          [a.jL.u5]: W.VSd,
          [a.jL.db]: W.ccb,
          [a.jL.Yu]: W.rNt,
          [a.jL.JN]: W.g$j,
          [a.jL.EM]: W.BQz,
          [a.jL.Or]: W.jdP,
          [a.jL.qe]: W.bKN,
          [a.jL.H5]: W.sDU,
          [a.jL.Xm]: W.MbF,
          [a.jL.DB]: W.emH,
          [a.jL.Lk]: W.Yoo,
        };
        function u(p) {
          const { linkType: S, ...F } = p,
            w = c[S];
          return w ? (0, n.jsx)(w, { ...F }) : null;
        }
      },
      4515: (me, ue, r) => {
        "use strict";
        r.d(ue, { X: () => t, v: () => a });
        var n = r(48156);
        const T = {
          discord_server: n.jL.Eb,
          youtube: n.jL.lQ,
          facebook: n.jL.GO,
          twitter: n.jL.jG,
          twitch: n.jL.F7,
          reddit: n.jL.uw,
          instagram: n.jL.sP,
          tumblr: n.jL.u5,
          qq: n.jL.EK,
          qqlink: n.jL.M0,
          qqchannel: n.jL.$3,
          bilibili: n.jL.Ow,
          weibo: n.jL.Ib,
          wechat: n.jL.Or,
          tieba: n.jL.db,
          tiktok: n.jL.Yu,
          douyin: n.jL.qe,
          bluesky: n.jL.H5,
          mastodon: n.jL.Xm,
          threads: n.jL.DB,
          vk: n.jL.a$,
          telegram: n.jL.JN,
          linkedin: n.jL.EM,
          rednote: n.jL.Lk,
        };
        function a(E) {
          return T[E] ?? n.jL.I0;
        }
        const s = new Map(Object.entries(T).map(([E, A]) => [A, E]));
        function t(E) {
          return s.get(E);
        }
      },
      16936: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          t3: () => W,
          EI: () => R,
          Nc: () => J,
          vd: () => U,
          _V: () => N,
          kR: () => X,
        });
        var n = r(72609);
        const T = "meetsteam/availability",
          a = "meetsteam/registrations",
          s = "meetsteam/registrationdetails",
          t = "meetsteam/updateregistration",
          E = "meetsteam/registrantinfo",
          A = "meetsteam/attendance_qrcode";
        async function q(h, g) {
          const b = new URL(n.TS.STORE_BASE_URL + h);
          for (const [l, f] of Object.entries(g)) b.searchParams.set(l, f);
          const v = await fetch(b, { credentials: "include" });
          if (!v.ok) throw new Error(`${b} answered ${v.status}`);
          return await v.json();
        }
        async function W(h) {
          return (await q(T, { gid: h })).availability ?? [];
        }
        async function N(h) {
          return (await q(a, { gid: h })).registrations ?? [];
        }
        async function U(h) {
          return (await q(s, { gid: h })).strJSONData ?? "";
        }
        async function J() {
          return (
            (await q(E, {})).info ?? { realname: "", email: "", partners: [] }
          );
        }
        async function R(h, g) {
          return await q(A, { gid: h, accountid: String(g) });
        }
        async function X(h) {
          const g = n.TS.STORE_BASE_URL + t,
            b = new URLSearchParams({
              gid: h.gid,
              group_id: String(h.group_id),
              session_id: String(h.session_id),
              guest_count: String(h.guest_count),
              jsondata: h.jsondata,
              skip_email: h.skip_email ? "1" : "0",
            }),
            v = await fetch(g, {
              method: "POST",
              credentials: "include",
              body: b,
            });
          if (!v.ok) throw new Error(`${g} answered ${v.status}`);
          return (await v.json()).success;
        }
      },
      90711: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          DK: () => Zt,
          hW: () => he,
          Lw: () => Ve,
          ku: () => Re,
          Mn: () => re,
          sW: () => T,
          nn: () => n,
        });
        var n = {};
        r.r(n), r.d(n, { Tq: () => W, TC: () => v, fe: () => h });
        var T = {};
        r.r(T), r.d(T, { rx: () => Z, XP: () => V });
        var a = r(80613),
          s = r.n(a),
          t = r(75245),
          E = r(35038);
        const A = 0,
          q = 1,
          W = 0,
          N = 1,
          U = 2,
          J = 3,
          R = 4,
          X = 5,
          h = 6,
          g = 7,
          b = 8,
          v = 9,
          l = 10,
          f = 11,
          M = 12,
          $ = 13,
          k = 14,
          _ = 15,
          Z = 0,
          V = 1,
          c = 2;
        function u(Ge) {
          return "unknown EBroadcastChatPermission ( " + Ge + " )";
        }
        function p(Ge) {
          return "unknown EBroadcastWatchLocation ( " + Ge + " )";
        }
        function S(Ge) {
          return "unknown EBroadcastChatBan ( " + Ge + " )";
        }
        function F(Ge) {
          return "unknown EBroadcastRestriction ( " + Ge + " )";
        }
        class w extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              w.prototype.permission || t.Sg(w.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    client_instance_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 4, br: t.qM.readString, bw: t.gp.writeString },
                    cellid: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    rtmp_token: {
                      n: 6,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    thumbnail_upload: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    sysid: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    allow_webrtc: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = t.w0(w.M())), w.sm_mbf;
          }
          toObject(e = !1) {
            return w.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(w.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(w.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new w();
            return w.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(w.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(w.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class I extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              I.prototype.broadcast_id || t.Sg(I.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_upload_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_interval_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    heartbeat_interval_seconds: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = t.w0(I.M())), I.sm_mbf;
          }
          toObject(e = !1) {
            return I.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(I.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(I.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new I();
            return I.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(I.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(I.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class L extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              L.prototype.broadcast_id || t.Sg(L.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              L.sm_m ||
                (L.sm_m = {
                  proto: L,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              L.sm_m
            );
          }
          static MBF() {
            return L.sm_mbf || (L.sm_mbf = t.w0(L.M())), L.sm_mbf;
          }
          toObject(e = !1) {
            return L.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(L.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(L.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new L();
            return L.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(L.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(L.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              L.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Request";
          }
        }
        class Me extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Me.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Me();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Me();
            return Me.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Me.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Me.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class j extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              j.prototype.broadcast_id || t.Sg(j.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              j.sm_m ||
                (j.sm_m = {
                  proto: j,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    cellid: { n: 2, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    as_rtmp: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                    delay_seconds: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    rtmp_token: {
                      n: 5,
                      d: "0",
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    upload_ip_address: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                    sysid: { n: 8, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              j.sm_m
            );
          }
          static MBF() {
            return j.sm_mbf || (j.sm_mbf = t.w0(j.M())), j.sm_mbf;
          }
          toObject(e = !1) {
            return j.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(j.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(j.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new j();
            return j.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(j.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return j.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(j.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              j.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class ne extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ne.prototype.upload_token || t.Sg(ne.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    enable_replay: {
                      n: 6,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    http_address: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = t.w0(ne.M())), ne.sm_mbf;
          }
          toObject(e = !1) {
            return ne.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ne.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ne.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ne();
            return ne.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ne.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ne.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class De extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              De.prototype.broadcast_id || t.Sg(De.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              De.sm_m ||
                (De.sm_m = {
                  proto: De,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_token: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    upload_address: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    http_address: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_upload_id: {
                      n: 5,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_rtmp: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              De.sm_m
            );
          }
          static MBF() {
            return De.sm_mbf || (De.sm_mbf = t.w0(De.M())), De.sm_mbf;
          }
          toObject(e = !1) {
            return De.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(De.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(De.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new De();
            return De.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(De.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return De.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(De.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              De.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastUploadStarted_Notification";
          }
        }
        class D extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              D.prototype.steamid || t.Sg(D.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              D.sm_m ||
                (D.sm_m = {
                  proto: D,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              D.sm_m
            );
          }
          static MBF() {
            return D.sm_mbf || (D.sm_mbf = t.w0(D.M())), D.sm_mbf;
          }
          toObject(e = !1) {
            return D.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(D.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(D.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new D();
            return D.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(D.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(D.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              D.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Request";
          }
        }
        class ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ee.prototype.gameid || t.Sg(ee.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ee.sm_m ||
                (ee.sm_m = {
                  proto: ee,
                  fields: {
                    gameid: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 5, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 6,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_publisher: {
                      n: 7,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    thumbnail_url: {
                      n: 8,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_uploading: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    duration: {
                      n: 11,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    is_replay: { n: 12, br: t.qM.readBool, bw: t.gp.writeBool },
                    is_capturing_vod: {
                      n: 13,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_store_whitelisted: {
                      n: 14,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              ee.sm_m
            );
          }
          static MBF() {
            return ee.sm_mbf || (ee.sm_mbf = t.w0(ee.M())), ee.sm_mbf;
          }
          toObject(e = !1) {
            return ee.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ee.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ee.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ee();
            return ee.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ee.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ee.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastStatus_Response";
          }
        }
        class le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              le.prototype.steamid || t.Sg(le.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              le.sm_m ||
                (le.sm_m = {
                  proto: le,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = t.w0(le.M())), le.sm_mbf;
          }
          toObject(e = !1) {
            return le.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(le.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(le.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new le();
            return le.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(le.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(le.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class Y extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Y.prototype.thumbnail_url || t.Sg(Y.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Y.sm_m ||
                (Y.sm_m = {
                  proto: Y,
                  fields: {
                    thumbnail_url: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    update_interval: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_viewers: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    duration: { n: 4, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                  },
                }),
              Y.sm_m
            );
          }
          static MBF() {
            return Y.sm_mbf || (Y.sm_mbf = t.w0(Y.M())), Y.sm_mbf;
          }
          toObject(e = !1) {
            return Y.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Y.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Y.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Y();
            return Y.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Y.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Y.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Y.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Y.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
          }
        }
        class ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ye.prototype.steamid || t.Sg(ye.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    existing_broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_cell: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    watch_location: {
                      n: 6,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    is_webrtc: { n: 7, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ye.sm_m
            );
          }
          static MBF() {
            return ye.sm_mbf || (ye.sm_mbf = t.w0(ye.M())), ye.sm_mbf;
          }
          toObject(e = !1) {
            return ye.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ye.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ye();
            return ye.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              oe.prototype.response || t.Sg(oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
                  fields: {
                    response: { n: 1, br: t.qM.readEnum, bw: t.gp.writeEnum },
                    mpd_url: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_id: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    gameid: {
                      n: 4,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 5, br: t.qM.readString, bw: t.gp.writeString },
                    num_viewers: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    permission: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    is_rtmp: { n: 8, br: t.qM.readBool, bw: t.gp.writeBool },
                    seconds_delay: {
                      n: 9,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    viewer_token: {
                      n: 10,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      n: 11,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    heartbeat_interval: {
                      n: 12,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    thumbnail_url: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_webrtc: { n: 14, br: t.qM.readBool, bw: t.gp.writeBool },
                    webrtc_session_id: {
                      n: 15,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      n: 16,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    webrtc_turn_server: {
                      n: 17,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 18, br: t.qM.readBool, bw: t.gp.writeBool },
                    duration: {
                      n: 19,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      n: 20,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = t.w0(oe.M())), oe.sm_mbf;
          }
          toObject(e = !1) {
            return oe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(oe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new oe();
            return oe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function pe(Ge) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            Ge +
            " )"
          );
        }
        class Pe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Pe.prototype.steamid || t.Sg(Pe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Pe.sm_m ||
                (Pe.sm_m = {
                  proto: Pe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    representation: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Pe.sm_m
            );
          }
          static MBF() {
            return Pe.sm_mbf || (Pe.sm_mbf = t.w0(Pe.M())), Pe.sm_mbf;
          }
          toObject(e = !1) {
            return Pe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Pe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Pe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Pe();
            return Pe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Pe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Pe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Pe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Pe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_HeartbeatBroadcast_Notification";
          }
        }
        class ge extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ge.prototype.steamid || t.Sg(ge.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ge.sm_m ||
                (ge.sm_m = {
                  proto: ge,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = t.w0(ge.M())), ge.sm_mbf;
          }
          toObject(e = !1) {
            return ge.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ge.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ge.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ge();
            return ge.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ge.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ge.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopWatchingBroadcast_Notification";
          }
        }
        class He extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              He.prototype.steamid || t.Sg(He.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              He.sm_m ||
                (He.sm_m = {
                  proto: He,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    approval_response: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              He.sm_m
            );
          }
          static MBF() {
            return He.sm_mbf || (He.sm_mbf = t.w0(He.M())), He.sm_mbf;
          }
          toObject(e = !1) {
            return He.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(He.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(He.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new He();
            return He.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(He.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return He.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(He.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              He.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ce.prototype.success || t.Sg(ce.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    success: { n: 1, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = t.w0(ce.M())), ce.sm_mbf;
          }
          toObject(e = !1) {
            return ce.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ce.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ce.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ce();
            return ce.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ce.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ce.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              se.prototype.permission || t.Sg(se.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              se.sm_m ||
                (se.sm_m = {
                  proto: se,
                  fields: {
                    permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    gameid: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    title: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    game_data_config: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              se.sm_m
            );
          }
          static MBF() {
            return se.sm_mbf || (se.sm_mbf = t.w0(se.M())), se.sm_mbf;
          }
          toObject(e = !1) {
            return se.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(se.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(se.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new se();
            return se.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(se.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(se.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Request";
          }
        }
        class Ee extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ee.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Ee();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ee();
            return Ee.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ee.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ee.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendBroadcastStateToServer_Response";
          }
        }
        class xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              xe.prototype.steamid || t.Sg(xe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              xe.sm_m ||
                (xe.sm_m = {
                  proto: xe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    state: { n: 2, br: t.qM.readEnum, bw: t.gp.writeEnum },
                  },
                }),
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = t.w0(xe.M())), xe.sm_mbf;
          }
          toObject(e = !1) {
            return xe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(xe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(xe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new xe();
            return xe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(xe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(xe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function ft(Ge) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            Ge +
            " )"
          );
        }
        class Qe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Qe.prototype.broadcast_id || t.Sg(Qe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Qe.sm_m ||
                (Qe.sm_m = {
                  proto: Qe,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Qe.sm_m
            );
          }
          static MBF() {
            return Qe.sm_mbf || (Qe.sm_mbf = t.w0(Qe.M())), Qe.sm_mbf;
          }
          toObject(e = !1) {
            return Qe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Qe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Qe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Qe();
            return Qe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Qe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Qe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Qe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Qe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              nt.prototype.broadcast_id || t.Sg(nt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              nt.sm_m ||
                (nt.sm_m = {
                  proto: nt,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    too_many_poor_uploads: {
                      n: 4,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                  },
                }),
              nt.sm_m
            );
          }
          static MBF() {
            return nt.sm_mbf || (nt.sm_mbf = t.w0(nt.M())), nt.sm_mbf;
          }
          toObject(e = !1) {
            return nt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(nt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(nt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new nt();
            return nt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(nt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(nt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class at extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              at.prototype.broadcast_id || t.Sg(at.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              at.sm_m ||
                (at.sm_m = {
                  proto: at,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              at.sm_m
            );
          }
          static MBF() {
            return at.sm_mbf || (at.sm_mbf = t.w0(at.M())), at.sm_mbf;
          }
          toObject(e = !1) {
            return at.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(at.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(at.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new at();
            return at.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(at.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return at.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(at.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              at.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ve.prototype.broadcast_id || t.Sg(ve.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              ve.sm_m
            );
          }
          static MBF() {
            return ve.sm_mbf || (ve.sm_mbf = t.w0(ve.M())), ve.sm_mbf;
          }
          toObject(e = !1) {
            return ve.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ve.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ve();
            return ve.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class we extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              we.prototype.broadcast_channel_id || t.Sg(we.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              we.sm_m ||
                (we.sm_m = {
                  proto: we,
                  fields: {
                    broadcast_channel_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_channel_avatar: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              we.sm_m
            );
          }
          static MBF() {
            return we.sm_mbf || (we.sm_mbf = t.w0(we.M())), we.sm_mbf;
          }
          toObject(e = !1) {
            return we.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(we.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(we.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new we();
            return we.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(we.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return we.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(we.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              we.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class ke extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ke.prototype.thumbnail_upload_token || t.Sg(ke.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ke.sm_m ||
                (ke.sm_m = {
                  proto: ke,
                  fields: {
                    thumbnail_upload_token: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    thumbnail_data: {
                      n: 3,
                      br: t.qM.readBytes,
                      bw: t.gp.writeBytes,
                    },
                    thumbnail_width: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_height: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              ke.sm_m
            );
          }
          static MBF() {
            return ke.sm_mbf || (ke.sm_mbf = t.w0(ke.M())), ke.sm_mbf;
          }
          toObject(e = !1) {
            return ke.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ke.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ke.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ke();
            return ke.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ke.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ke.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class Ue extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ue.prototype.broadcast_upload_id || t.Sg(Ue.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ue.sm_m ||
                (Ue.sm_m = {
                  proto: Ue,
                  fields: {
                    broadcast_upload_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    upload_result: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ue.sm_m
            );
          }
          static MBF() {
            return Ue.sm_mbf || (Ue.sm_mbf = t.w0(Ue.M())), Ue.sm_mbf;
          }
          toObject(e = !1) {
            return Ue.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ue.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ue.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ue();
            return Ue.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ue.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ue.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ue.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ue.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class $e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              $e.prototype.broadcaster_steamid || t.Sg($e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $e.sm_m ||
                ($e.sm_m = {
                  proto: $e,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              $e.sm_m
            );
          }
          static MBF() {
            return $e.sm_mbf || ($e.sm_mbf = t.w0($e.M())), $e.sm_mbf;
          }
          toObject(e = !1) {
            return $e.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT($e.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq($e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new $e();
            return $e.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj($e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return $e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0($e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              $e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class tt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              tt.prototype.broadcast_id || t.Sg(tt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
                  fields: {
                    broadcast_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = t.w0(tt.M())), tt.sm_mbf;
          }
          toObject(e = !1) {
            return tt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(tt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(tt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new tt();
            return tt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(tt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(tt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
          }
        }
        class _e extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              _e.prototype.steamid || t.Sg(_e.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _e.sm_m ||
                (_e.sm_m = {
                  proto: _e,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    client_ip: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    client_cell: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              _e.sm_m
            );
          }
          static MBF() {
            return _e.sm_mbf || (_e.sm_mbf = t.w0(_e.M())), _e.sm_mbf;
          }
          toObject(e = !1) {
            return _e.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(_e.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(_e.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new _e();
            return _e.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(_e.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return _e.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(_e.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              _e.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class it extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              it.prototype.chat_id || t.Sg(it.M()),
              a.Message.initialize(this, e, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              it.sm_m ||
                (it.sm_m = {
                  proto: it,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    view_url_template: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    flair_group_ids: {
                      n: 4,
                      r: !0,
                      q: !0,
                      br: t.qM.readUint32,
                      pbr: t.qM.readPackedUint32,
                      bw: t.gp.writeRepeatedUint32,
                    },
                  },
                }),
              it.sm_m
            );
          }
          static MBF() {
            return it.sm_mbf || (it.sm_mbf = t.w0(it.M())), it.sm_mbf;
          }
          toObject(e = !1) {
            return it.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(it.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(it.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new it();
            return it.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(it.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return it.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(it.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              it.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class Ve extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ve.prototype.chat_id || t.Sg(Ve.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ve.sm_m ||
                (Ve.sm_m = {
                  proto: Ve,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    message: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    instance_id: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    language: {
                      n: 4,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    country_code: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ve.sm_m
            );
          }
          static MBF() {
            return Ve.sm_mbf || (Ve.sm_mbf = t.w0(Ve.M())), Ve.sm_mbf;
          }
          toObject(e = !1) {
            return Ve.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ve.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ve.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ve();
            return Ve.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ve.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ve.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ve.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ve.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class G extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              G.prototype.persona_name || t.Sg(G.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              G.sm_m ||
                (G.sm_m = {
                  proto: G,
                  fields: {
                    persona_name: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    in_game: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    result: { n: 3, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    cooldown_time_seconds: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                  },
                }),
              G.sm_m
            );
          }
          static MBF() {
            return G.sm_mbf || (G.sm_mbf = t.w0(G.M())), G.sm_mbf;
          }
          toObject(e = !1) {
            return G.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(G.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(G.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new G();
            return G.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(G.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(G.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              G.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              re.prototype.chat_id || t.Sg(re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              re.sm_m ||
                (re.sm_m = {
                  proto: re,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 2, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              re.sm_m
            );
          }
          static MBF() {
            return re.sm_mbf || (re.sm_mbf = t.w0(re.M())), re.sm_mbf;
          }
          toObject(e = !1) {
            return re.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(re.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new re();
            return re.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class Se extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Se.prototype.result || t.Sg(Se.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Se.sm_m ||
                (Se.sm_m = {
                  proto: Se,
                  fields: {
                    result: { n: 1, br: t.qM.readInt32, bw: t.gp.writeInt32 },
                    chat_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    flair: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              Se.sm_m
            );
          }
          static MBF() {
            return Se.sm_mbf || (Se.sm_mbf = t.w0(Se.M())), Se.sm_mbf;
          }
          toObject(e = !1) {
            return Se.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Se.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Se.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Se();
            return Se.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Se.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Se.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Se.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Se.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class he extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              he.prototype.chat_id || t.Sg(he.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    muted: { n: 3, br: t.qM.readBool, bw: t.gp.writeBool },
                  },
                }),
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = t.w0(he.M())), he.sm_mbf;
          }
          toObject(e = !1) {
            return he.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(he.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(he.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new he();
            return he.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(he.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return he.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(he.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Request";
          }
        }
        class Xe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Xe.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Xe();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Xe();
            return Xe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Xe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Xe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class Re extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Re.prototype.chat_id || t.Sg(Re.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Re.sm_m ||
                (Re.sm_m = {
                  proto: Re,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Re.sm_m
            );
          }
          static MBF() {
            return Re.sm_mbf || (Re.sm_mbf = t.w0(Re.M())), Re.sm_mbf;
          }
          toObject(e = !1) {
            return Re.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Re.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Re.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Re();
            return Re.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Re.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Re.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Re.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Re.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Request";
          }
        }
        class x extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return x.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new x();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new x();
            return x.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              x.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class B extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              B.prototype.chat_id || t.Sg(B.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              B.sm_m ||
                (B.sm_m = {
                  proto: B,
                  fields: {
                    chat_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    user_steamid: {
                      n: 2,
                      r: !0,
                      q: !0,
                      br: t.qM.readFixed64String,
                      pbr: t.qM.readPackedFixed64String,
                      bw: t.gp.writeRepeatedFixed64String,
                    },
                  },
                }),
              B.sm_m
            );
          }
          static MBF() {
            return B.sm_mbf || (B.sm_mbf = t.w0(B.M())), B.sm_mbf;
          }
          toObject(e = !1) {
            return B.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(B.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(B.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new B();
            return B.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(B.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(B.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              B.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ae.prototype.persona_names || t.Sg(ae.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: { persona_names: { n: 1, c: be, r: !0, q: !0 } },
                }),
              ae.sm_m
            );
          }
          static MBF() {
            return ae.sm_mbf || (ae.sm_mbf = t.w0(ae.M())), ae.sm_mbf;
          }
          toObject(e = !1) {
            return ae.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ae.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ae.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ae();
            return ae.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ae.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ae.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class be extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              be.prototype.steam_id || t.Sg(be.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              be.sm_m ||
                (be.sm_m = {
                  proto: be,
                  fields: {
                    steam_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    persona: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              be.sm_m
            );
          }
          static MBF() {
            return be.sm_mbf || (be.sm_mbf = t.w0(be.M())), be.sm_mbf;
          }
          toObject(e = !1) {
            return be.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(be.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(be.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new be();
            return be.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(be.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return be.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(be.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              be.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
          }
        }
        class de extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              de.prototype.steamid || t.Sg(de.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
                  fields: {
                    steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    broadcast_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    first_segment: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    num_segments: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    clip_description: {
                      n: 5,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = t.w0(de.M())), de.sm_mbf;
          }
          toObject(e = !1) {
            return de.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(de.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(de.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new de();
            return de.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(de.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return de.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(de.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class Le extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Le.prototype.broadcast_clip_id || t.Sg(Le.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Le.sm_m ||
                (Le.sm_m = {
                  proto: Le,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Le.sm_m
            );
          }
          static MBF() {
            return Le.sm_mbf || (Le.sm_mbf = t.w0(Le.M())), Le.sm_mbf;
          }
          toObject(e = !1) {
            return Le.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Le.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Le.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Le();
            return Le.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Le.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Le.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Le.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Le.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class Ce extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ce.prototype.broadcast_clip_id || t.Sg(Ce.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ce.sm_m ||
                (Ce.sm_m = {
                  proto: Ce,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Ce.sm_m
            );
          }
          static MBF() {
            return Ce.sm_mbf || (Ce.sm_mbf = t.w0(Ce.M())), Ce.sm_mbf;
          }
          toObject(e = !1) {
            return Ce.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ce.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ce.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ce();
            return Ce.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ce.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ce.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ce.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ce.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Request";
          }
        }
        class ut extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return ut.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new ut();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ut();
            return ut.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class rt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              rt.prototype.broadcast_clip_id || t.Sg(rt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              rt.sm_m ||
                (rt.sm_m = {
                  proto: rt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    start_time: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    end_time: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 4,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              rt.sm_m
            );
          }
          static MBF() {
            return rt.sm_mbf || (rt.sm_mbf = t.w0(rt.M())), rt.sm_mbf;
          }
          toObject(e = !1) {
            return rt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(rt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(rt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new rt();
            return rt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(rt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return rt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(rt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              rt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Request";
          }
        }
        class It extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return It.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new It();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new It();
            return It.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return It.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class st extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              st.prototype.broadcast_clip_id || t.Sg(st.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = t.w0(st.M())), st.sm_mbf;
          }
          toObject(e = !1) {
            return st.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(st.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(st.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new st();
            return st.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(st.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return st.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(st.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class gt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              gt.prototype.broadcast_clip_id || t.Sg(gt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              gt.sm_m ||
                (gt.sm_m = {
                  proto: gt,
                  fields: {
                    broadcast_clip_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    video_id: {
                      n: 2,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    channel_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    accountid_broadcaster: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    accountid_clipmaker: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    video_description: {
                      n: 7,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    start_time: {
                      n: 8,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    length_milliseconds: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    thumbnail_path: {
                      n: 10,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              gt.sm_m
            );
          }
          static MBF() {
            return gt.sm_mbf || (gt.sm_mbf = t.w0(gt.M())), gt.sm_mbf;
          }
          toObject(e = !1) {
            return gt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(gt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(gt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new gt();
            return gt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(gt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return gt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(gt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              gt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class Mt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Mt.prototype.broadcast_permission || t.Sg(Mt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    update_token: {
                      n: 2,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    broadcast_delay: {
                      n: 3,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 4, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 6,
                      d: A,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 7,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 8,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 9,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 10,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 12,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Mt.sm_m
            );
          }
          static MBF() {
            return Mt.sm_mbf || (Mt.sm_mbf = t.w0(Mt.M())), Mt.sm_mbf;
          }
          toObject(e = !1) {
            return Mt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Mt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Mt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Mt();
            return Mt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Mt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Mt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Request";
          }
        }
        class Bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Bt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Bt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Bt();
            return Bt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_SetRTMPInfo_Response";
          }
        }
        class bt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              bt.prototype.ip || t.Sg(bt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
                  fields: {
                    ip: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = t.w0(bt.M())), bt.sm_mbf;
          }
          toObject(e = !1) {
            return bt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(bt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(bt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new bt();
            return bt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(bt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(bt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class yt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              yt.prototype.broadcast_permission || t.Sg(yt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              yt.sm_m ||
                (yt.sm_m = {
                  proto: yt,
                  fields: {
                    broadcast_permission: {
                      n: 1,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    rtmp_host: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    rtmp_token: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    broadcast_delay: {
                      n: 4,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    app_id: { n: 5, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    required_app_id: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    broadcast_chat_permission: {
                      n: 7,
                      br: t.qM.readEnum,
                      bw: t.gp.writeEnum,
                    },
                    broadcast_buffer: {
                      n: 8,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    steamid: {
                      n: 9,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    chat_rate_limit: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    enable_replay: {
                      n: 11,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    is_partner_chat_only: {
                      n: 12,
                      br: t.qM.readBool,
                      bw: t.gp.writeBool,
                    },
                    wordban_list: {
                      n: 13,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              yt.sm_m
            );
          }
          static MBF() {
            return yt.sm_mbf || (yt.sm_mbf = t.w0(yt.M())), yt.sm_mbf;
          }
          toObject(e = !1) {
            return yt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(yt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(yt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new yt();
            return yt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(yt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return yt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(yt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              yt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class Q extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Q.prototype.row_limit || t.Sg(Q.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Q.sm_m ||
                (Q.sm_m = {
                  proto: Q,
                  fields: {
                    row_limit: {
                      n: 1,
                      d: 100,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    start_time: {
                      n: 2,
                      d: 0,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 3,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    session_id: {
                      n: 5,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Q.sm_m
            );
          }
          static MBF() {
            return Q.sm_mbf || (Q.sm_mbf = t.w0(Q.M())), Q.sm_mbf;
          }
          toObject(e = !1) {
            return Q.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Q.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Q.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Q();
            return Q.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Q.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Q.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Q.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Q.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              fe.prototype.upload_stats || t.Sg(fe.M()),
              a.Message.initialize(this, e, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: { upload_stats: { n: 1, c: Ae, r: !0, q: !0 } },
                }),
              fe.sm_m
            );
          }
          static MBF() {
            return fe.sm_mbf || (fe.sm_mbf = t.w0(fe.M())), fe.sm_mbf;
          }
          toObject(e = !1) {
            return fe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(fe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new fe();
            return fe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class Ae extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ae.prototype.upload_result || t.Sg(Ae.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ae.sm_m ||
                (Ae.sm_m = {
                  proto: Ae,
                  fields: {
                    upload_result: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    time_stopped: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    seconds_uploaded: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    max_viewers: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_x: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 6,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    avg_bandwidth: {
                      n: 7,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_bytes: {
                      n: 8,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    app_id: { n: 9, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    total_unique_viewers: {
                      n: 10,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    total_seconds_watched: {
                      n: 11,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    time_started: {
                      n: 12,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    upload_id: {
                      n: 13,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    local_address: {
                      n: 14,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    remote_address: {
                      n: 15,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    frames_per_second: {
                      n: 16,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    num_representations: {
                      n: 17,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    app_name: {
                      n: 18,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    is_replay: { n: 19, br: t.qM.readBool, bw: t.gp.writeBool },
                    session_id: {
                      n: 20,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                  },
                }),
              Ae.sm_m
            );
          }
          static MBF() {
            return Ae.sm_mbf || (Ae.sm_mbf = t.w0(Ae.M())), Ae.sm_mbf;
          }
          toObject(e = !1) {
            return Ae.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ae.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ae.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ae();
            return Ae.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ae.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ae.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ae.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ae.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class Fe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Fe.prototype.upload_id || t.Sg(Fe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Fe.sm_m ||
                (Fe.sm_m = {
                  proto: Fe,
                  fields: {
                    upload_id: {
                      n: 1,
                      br: t.qM.readUint64String,
                      bw: t.gp.writeUint64String,
                    },
                    steamid: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Fe.sm_m
            );
          }
          static MBF() {
            return Fe.sm_mbf || (Fe.sm_mbf = t.w0(Fe.M())), Fe.sm_mbf;
          }
          toObject(e = !1) {
            return Fe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Fe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Fe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Fe();
            return Fe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Fe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Fe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Fe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Fe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class Te extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Te.prototype.viewer_stats || t.Sg(Te.M()),
              a.Message.initialize(this, e, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Te.sm_m ||
                (Te.sm_m = {
                  proto: Te,
                  fields: {
                    viewer_stats: { n: 1, c: Ze, r: !0, q: !0 },
                    country_stats: { n: 2, c: et, r: !0, q: !0 },
                  },
                }),
              Te.sm_m
            );
          }
          static MBF() {
            return Te.sm_mbf || (Te.sm_mbf = t.w0(Te.M())), Te.sm_mbf;
          }
          toObject(e = !1) {
            return Te.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Te.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Te.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Te();
            return Te.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Te.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Te.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Te.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Te.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class Ze extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ze.prototype.time || t.Sg(Ze.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ze.sm_m ||
                (Ze.sm_m = {
                  proto: Ze,
                  fields: {
                    time: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              Ze.sm_m
            );
          }
          static MBF() {
            return Ze.sm_mbf || (Ze.sm_mbf = t.w0(Ze.M())), Ze.sm_mbf;
          }
          toObject(e = !1) {
            return Ze.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ze.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ze.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ze();
            return Ze.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ze.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ze.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ze.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ze.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class et extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              et.prototype.country_code || t.Sg(et.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              et.sm_m ||
                (et.sm_m = {
                  proto: et,
                  fields: {
                    country_code: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    num_viewers: {
                      n: 2,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              et.sm_m
            );
          }
          static MBF() {
            return et.sm_mbf || (et.sm_mbf = t.w0(et.M())), et.sm_mbf;
          }
          toObject(e = !1) {
            return et.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(et.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(et.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new et();
            return et.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(et.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return et.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(et.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              et.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class Ke extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ke.prototype.webrtc_session_id || t.Sg(Ke.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ke.sm_m ||
                (Ke.sm_m = {
                  proto: Ke,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    started: { n: 2, br: t.qM.readBool, bw: t.gp.writeBool },
                    offer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                    resolution_x: {
                      n: 4,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    resolution_y: {
                      n: 5,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    fps: { n: 6, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ke.sm_m
            );
          }
          static MBF() {
            return Ke.sm_mbf || (Ke.sm_mbf = t.w0(Ke.M())), Ke.sm_mbf;
          }
          toObject(e = !1) {
            return Ke.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ke.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ke.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ke();
            return Ke.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ke.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ke.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ke.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ke.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Request";
          }
        }
        class dt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return dt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new dt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new dt();
            return dt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return dt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              dt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class Oe extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Oe.prototype.webrtc_session_id || t.Sg(Oe.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Oe.sm_m ||
                (Oe.sm_m = {
                  proto: Oe,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              Oe.sm_m
            );
          }
          static MBF() {
            return Oe.sm_mbf || (Oe.sm_mbf = t.w0(Oe.M())), Oe.sm_mbf;
          }
          toObject(e = !1) {
            return Oe.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Oe.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Oe.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Oe();
            return Oe.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Oe.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Oe.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Oe.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Oe.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Request";
          }
        }
        class Ot extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Ot.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Ot();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ot();
            return Ot.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class vt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              vt.prototype.broadcaster_steamid || t.Sg(vt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = t.w0(vt.M())), vt.sm_mbf;
          }
          toObject(e = !1) {
            return vt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(vt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(vt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new vt();
            return vt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(vt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(vt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Request";
          }
        }
        class kt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return kt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new kt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new kt();
            return kt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class St extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              St.prototype.sdp_mid || t.Sg(St.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              St.sm_m ||
                (St.sm_m = {
                  proto: St,
                  fields: {
                    sdp_mid: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                    sdp_mline_index: {
                      n: 2,
                      br: t.qM.readInt32,
                      bw: t.gp.writeInt32,
                    },
                    candidate: {
                      n: 3,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              St.sm_m
            );
          }
          static MBF() {
            return St.sm_mbf || (St.sm_mbf = t.w0(St.M())), St.sm_mbf;
          }
          toObject(e = !1) {
            return St.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(St.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(St.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new St();
            return St.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(St.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return St.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(St.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              St.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class jt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              jt.prototype.webrtc_session_id || t.Sg(jt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              jt.sm_m ||
                (jt.sm_m = {
                  proto: jt,
                  fields: {
                    webrtc_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 2, c: St },
                  },
                }),
              jt.sm_m
            );
          }
          static MBF() {
            return jt.sm_mbf || (jt.sm_mbf = t.w0(jt.M())), jt.sm_mbf;
          }
          toObject(e = !1) {
            return jt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(jt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(jt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new jt();
            return jt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(jt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return jt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(jt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              jt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Request";
          }
        }
        class Nt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return Nt.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new Nt();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Nt();
            return Nt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Nt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Nt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class ht extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ht.prototype.broadcaster_steamid || t.Sg(ht.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ht.sm_m ||
                (ht.sm_m = {
                  proto: ht,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: St },
                  },
                }),
              ht.sm_m
            );
          }
          static MBF() {
            return ht.sm_mbf || (ht.sm_mbf = t.w0(ht.M())), ht.sm_mbf;
          }
          toObject(e = !1) {
            return ht.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ht.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ht.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ht();
            return ht.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ht.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ht.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ht.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ht.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
          }
        }
        class K extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(), a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          toObject(e = !1) {
            return K.toObject(e, this);
          }
          static toObject(e, i) {
            return e ? { $jspbMessageInstance: i } : {};
          }
          static fromObject(e) {
            return new K();
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new K();
            return K.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return e;
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return K.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {}
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              K.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class H extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              H.prototype.broadcaster_steamid || t.Sg(H.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
                  fields: {
                    broadcaster_steamid: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate_generation: {
                      n: 3,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                  },
                }),
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = t.w0(H.M())), H.sm_mbf;
          }
          toObject(e = !1) {
            return H.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(H.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(H.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new H();
            return H.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(H.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(H.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class C extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              C.prototype.candidate_generation || t.Sg(C.M()),
              a.Message.initialize(this, e, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              C.sm_m ||
                (C.sm_m = {
                  proto: C,
                  fields: {
                    candidate_generation: {
                      n: 1,
                      br: t.qM.readUint32,
                      bw: t.gp.writeUint32,
                    },
                    candidates: { n: 2, c: St, r: !0, q: !0 },
                  },
                }),
              C.sm_m
            );
          }
          static MBF() {
            return C.sm_mbf || (C.sm_mbf = t.w0(C.M())), C.sm_mbf;
          }
          toObject(e = !1) {
            return C.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(C.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(C.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new C();
            return C.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(C.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(C.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              C.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class je extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              je.prototype.broadcast_session_id || t.Sg(je.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              je.sm_m ||
                (je.sm_m = {
                  proto: je,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              je.sm_m
            );
          }
          static MBF() {
            return je.sm_mbf || (je.sm_mbf = t.w0(je.M())), je.sm_mbf;
          }
          toObject(e = !1) {
            return je.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(je.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(je.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new je();
            return je.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(je.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return je.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(je.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              je.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class Ie extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ie.prototype.cellid || t.Sg(Ie.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ie.sm_m ||
                (Ie.sm_m = {
                  proto: Ie,
                  fields: {
                    cellid: { n: 1, br: t.qM.readUint32, bw: t.gp.writeUint32 },
                  },
                }),
              Ie.sm_m
            );
          }
          static MBF() {
            return Ie.sm_mbf || (Ie.sm_mbf = t.w0(Ie.M())), Ie.sm_mbf;
          }
          toObject(e = !1) {
            return Ie.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ie.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ie.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ie();
            return Ie.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ie.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ie.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ie.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ie.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class Ye extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              Ye.prototype.turn_server || t.Sg(Ye.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ye.sm_m ||
                (Ye.sm_m = {
                  proto: Ye,
                  fields: {
                    turn_server: {
                      n: 1,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              Ye.sm_m
            );
          }
          static MBF() {
            return Ye.sm_mbf || (Ye.sm_mbf = t.w0(Ye.M())), Ye.sm_mbf;
          }
          toObject(e = !1) {
            return Ye.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(Ye.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(Ye.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new Ye();
            return Ye.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(Ye.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return Ye.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(Ye.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              Ye.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class lt extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              lt.prototype.broadcast_session_id || t.Sg(lt.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    turn_server: {
                      n: 2,
                      br: t.qM.readString,
                      bw: t.gp.writeString,
                    },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = t.w0(lt.M())), lt.sm_mbf;
          }
          toObject(e = !1) {
            return lt.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(lt.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(lt.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new lt();
            return lt.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(lt.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(lt.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class ot extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ot.prototype.broadcast_session_id || t.Sg(ot.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_steamid: {
                      n: 3,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    viewer_token: {
                      n: 4,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                  },
                }),
              ot.sm_m
            );
          }
          static MBF() {
            return ot.sm_mbf || (ot.sm_mbf = t.w0(ot.M())), ot.sm_mbf;
          }
          toObject(e = !1) {
            return ot.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ot.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ot.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ot();
            return ot.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ot.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ot.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class ct extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              ct.prototype.broadcast_session_id || t.Sg(ct.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ct.sm_m ||
                (ct.sm_m = {
                  proto: ct,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    answer: { n: 3, br: t.qM.readString, bw: t.gp.writeString },
                  },
                }),
              ct.sm_m
            );
          }
          static MBF() {
            return ct.sm_mbf || (ct.sm_mbf = t.w0(ct.M())), ct.sm_mbf;
          }
          toObject(e = !1) {
            return ct.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(ct.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(ct.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new ct();
            return ct.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(ct.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return ct.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(ct.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              ct.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class At extends a.Message {
          static ImplementsStaticInterface() {}
          constructor(e = null) {
            super(),
              At.prototype.broadcast_session_id || t.Sg(At.M()),
              a.Message.initialize(this, e, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              At.sm_m ||
                (At.sm_m = {
                  proto: At,
                  fields: {
                    broadcast_session_id: {
                      n: 1,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    webrtc_session_id: {
                      n: 2,
                      br: t.qM.readFixed64String,
                      bw: t.gp.writeFixed64String,
                    },
                    candidate: { n: 3, c: St },
                  },
                }),
              At.sm_m
            );
          }
          static MBF() {
            return At.sm_mbf || (At.sm_mbf = t.w0(At.M())), At.sm_mbf;
          }
          toObject(e = !1) {
            return At.toObject(e, this);
          }
          static toObject(e, i) {
            return t.BT(At.M(), e, i);
          }
          static fromObject(e) {
            return t.Uq(At.M(), e);
          }
          static deserializeBinary(e) {
            let i = new (s().BinaryReader)(e),
              P = new At();
            return At.deserializeBinaryFromReader(P, i);
          }
          static deserializeBinaryFromReader(e, i) {
            return t.zj(At.MBF(), e, i);
          }
          serializeBinary() {
            var e = new (s().BinaryWriter)();
            return At.serializeBinaryToWriter(this, e), e.getResultBuffer();
          }
          static serializeBinaryToWriter(e, i) {
            t.i0(At.M(), e, i);
          }
          serializeBase64String() {
            var e = new (s().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, e), e.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var Zt;
        ((Ge) => {
          function e(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, E.I8)(w, Be, ze),
              I,
              { ePrivilege: 1 },
            );
          }
          Ge.BeginBroadcastSession = e;
          function i(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, E.I8)(L, Be, ze),
              Me,
              { ePrivilege: 1 },
            );
          }
          Ge.EndBroadcastSession = i;
          function P(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, E.I8)(j, Be, ze),
              ne,
              { ePrivilege: 1 },
            );
          }
          Ge.StartBroadcastUpload = P;
          function Jt(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, E.I8)(Ue, Be),
              { ePrivilege: 1 },
            );
          }
          Ge.NotifyBroadcastUploadStop = Jt;
          function _t(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, E.I8)(ye, Be, ze),
              oe,
              { ePrivilege: 2 },
            );
          }
          Ge.WatchBroadcast = _t;
          function nn(We, Be) {
            return We.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, E.I8)(Pe, Be),
              { ePrivilege: 2 },
            );
          }
          Ge.HeartbeatBroadcast = nn;
          function mn(We, Be) {
            return We.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, E.I8)(ge, Be),
              { ePrivilege: 2 },
            );
          }
          Ge.StopWatchingBroadcast = mn;
          function un(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, E.I8)(D, Be, ze),
              ee,
              { ePrivilege: 2 },
            );
          }
          Ge.GetBroadcastStatus = un;
          function cn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, E.I8)(le, Be, ze),
              Y,
              { ePrivilege: 2 },
            );
          }
          Ge.GetBroadcastThumbnail = cn;
          function dn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, E.I8)(He, Be, ze),
              ce,
              { ePrivilege: 1 },
            );
          }
          Ge.InviteToBroadcast = dn;
          function gn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, E.I8)(se, Be, ze),
              Ee,
              { ePrivilege: 1 },
            );
          }
          Ge.SendBroadcastStateToServer = gn;
          function Ln(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, E.I8)(tt, Be),
              { ePrivilege: 1 },
            );
          }
          Ge.NotifyBroadcastSessionHeartbeat = Ln;
          function Xt(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, E.I8)(_e, Be, ze),
              it,
              { ePrivilege: 2 },
            );
          }
          Ge.GetBroadcastChatInfo = Xt;
          function fn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, E.I8)(Ve, Be, ze),
              G,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Ge.PostChatMessage = fn;
          function yn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, E.I8)(re, Be, ze),
              Se,
              { ePrivilege: 1, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Ge.UpdateChatMessageFlair = yn;
          function Lt(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, E.I8)(he, Be, ze),
              Xe,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Ge.MuteBroadcastChatUser = Lt;
          function vn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, E.I8)(Re, Be, ze),
              x,
              { ePrivilege: 3, rgBrowserAPISites: ["store", "community"] },
            );
          }
          Ge.RemoveUserChatText = vn;
          function rn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, E.I8)(B, Be, ze),
              ae,
              { ePrivilege: 1 },
            );
          }
          Ge.GetBroadcastChatUserNames = rn;
          function en(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, E.I8)(de, Be, ze),
              Le,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Ge.StartBuildClip = en;
          function sn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, E.I8)(Ce, Be, ze),
              ut,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Ge.GetBuildClipStatus = sn;
          function hn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, E.I8)(rt, Be, ze),
              It,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Ge.SetClipDetails = hn;
          function Vt(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, E.I8)(st, Be, ze),
              gt,
              { bConstMethod: !0, ePrivilege: 0, eWebAPIKeyRequirement: 2 },
            );
          }
          Ge.GetClipDetails = Vt;
          function Ct(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.SetRTMPInfo#1",
              (0, E.I8)(Mt, Be, ze),
              Bt,
              { ePrivilege: 1 },
            );
          }
          Ge.SetRTMPInfo = Ct;
          function qt(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetRTMPInfo#1",
              (0, E.I8)(bt, Be, ze),
              yt,
              { bConstMethod: !0, ePrivilege: 1 },
            );
          }
          Ge.GetRTMPInfo = qt;
          function pn(We, Be) {
            return We.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, E.I8)(lt, Be),
              { ePrivilege: 1 },
            );
          }
          Ge.NotifyWebRTCHaveTURNServer = pn;
          function an(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, E.I8)(Ke, Be, ze),
              dt,
              { ePrivilege: 1 },
            );
          }
          Ge.WebRTCStartResult = an;
          function Mn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, E.I8)(Oe, Be, ze),
              Ot,
              { ePrivilege: 1 },
            );
          }
          Ge.WebRTCStopped = Mn;
          function En(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, E.I8)(vt, Be, ze),
              kt,
              { ePrivilege: 1 },
            );
          }
          Ge.WebRTCSetAnswer = En;
          function bn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, E.I8)(Ie, Be, ze),
              Ye,
              { ePrivilege: 1 },
            );
          }
          Ge.WebRTCLookupTURNServer = bn;
          function Sn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, E.I8)(jt, Be, ze),
              Nt,
              { ePrivilege: 1 },
            );
          }
          Ge.WebRTCAddHostCandidate = Sn;
          function wn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, E.I8)(ht, Be, ze),
              K,
              { ePrivilege: 1 },
            );
          }
          Ge.WebRTCAddViewerCandidate = wn;
          function tn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, E.I8)(H, Be, ze),
              C,
              { ePrivilege: 1 },
            );
          }
          Ge.WebRTCGetHostCandidates = tn;
          function Dn(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, E.I8)(Q, Be, ze),
              fe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Ge.GetBroadcastUploadStats = Dn;
          function In(We, Be, ze) {
            return We.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, E.I8)(Fe, Be, ze),
              Te,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          Ge.GetBroadcastViewerStats = In;
        })(Zt || (Zt = {}));
        var Yt;
        ((Ge) => {
          (Ge.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: xe,
          }),
            (Ge.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: Qe,
            }),
            (Ge.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: De,
            }),
            (Ge.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: nt,
            }),
            (Ge.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: at,
            }),
            (Ge.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: $e,
            }),
            (Ge.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: ve,
            }),
            (Ge.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: we,
            }),
            (Ge.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: ke,
            }),
            (Ge.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: je,
            }),
            (Ge.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: ot,
            }),
            (Ge.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: ct,
            }),
            (Ge.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: At,
            });
        })(Yt || (Yt = {}));
      },
      61639: (me, ue, r) => {
        "use strict";
        r.d(ue, { Mc: () => n });
        var n = {};
        r.r(n),
          r.d(n, {
            Ms: () => $,
            n6: () => R,
            U6: () => q,
            kz: () => U,
            ej: () => Z,
            R: () => _,
            mZ: () => k,
            Is: () => h,
            B_: () => W,
            bW: () => N,
            iy: () => A,
          });
        var T = r(80613),
          a = r.n(T),
          s = r(75245),
          t = r(35038);
        const E = 0,
          A = 1,
          q = 2,
          W = 3,
          N = 4,
          U = 5,
          J = 6,
          R = 7,
          X = 8,
          h = 9,
          g = 10,
          b = 11,
          v = 12,
          l = 13,
          f = 14,
          M = 15,
          $ = 16,
          k = 17,
          _ = 18,
          Z = 19;
        function V(Me) {
          return "unknown EProductPageAction ( " + Me + " )";
        }
        function c(Me) {
          return "unknown EProductViewAction ( " + Me + " )";
        }
        function u(Me) {
          return "unknown EProductImpressionFromClientType ( " + Me + " )";
        }
        function p(Me) {
          return "unknown ETrackedEmailType ( " + Me + " )";
        }
        function S(Me) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + Me + " )"
          );
        }
        function F(Me) {
          return "unknown EUnifedProductInteractionActions ( " + Me + " )";
        }
        class w extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              w.prototype.impressions || s.Sg(w.M()),
              T.Message.initialize(this, j, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              w.sm_m ||
                (w.sm_m = {
                  proto: w,
                  fields: { impressions: { n: 1, c: I, r: !0, q: !0 } },
                }),
              w.sm_m
            );
          }
          static MBF() {
            return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
          }
          toObject(j = !1) {
            return w.toObject(j, this);
          }
          static toObject(j, ne) {
            return s.BT(w.M(), j, ne);
          }
          static fromObject(j) {
            return s.Uq(w.M(), j);
          }
          static deserializeBinary(j) {
            let ne = new (a().BinaryReader)(j),
              De = new w();
            return w.deserializeBinaryFromReader(De, ne);
          }
          static deserializeBinaryFromReader(j, ne) {
            return s.zj(w.MBF(), j, ne);
          }
          serializeBinary() {
            var j = new (a().BinaryWriter)();
            return w.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, ne) {
            s.i0(w.M(), j, ne);
          }
          serializeBase64String() {
            var j = new (a().BinaryWriter)();
            return (
              w.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification";
          }
        }
        class I extends T.Message {
          static ImplementsStaticInterface() {}
          constructor(j = null) {
            super(),
              I.prototype.type || s.Sg(I.M()),
              T.Message.initialize(this, j, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: {
                    type: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                    appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    num_impressions: {
                      n: 3,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                  },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
          }
          toObject(j = !1) {
            return I.toObject(j, this);
          }
          static toObject(j, ne) {
            return s.BT(I.M(), j, ne);
          }
          static fromObject(j) {
            return s.Uq(I.M(), j);
          }
          static deserializeBinary(j) {
            let ne = new (a().BinaryReader)(j),
              De = new I();
            return I.deserializeBinaryFromReader(De, ne);
          }
          static deserializeBinaryFromReader(j, ne) {
            return s.zj(I.MBF(), j, ne);
          }
          serializeBinary() {
            var j = new (a().BinaryWriter)();
            return I.serializeBinaryToWriter(this, j), j.getResultBuffer();
          }
          static serializeBinaryToWriter(j, ne) {
            s.i0(I.M(), j, ne);
          }
          serializeBase64String() {
            var j = new (a().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, j), j.getResultBase64String()
            );
          }
          getClassName() {
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var L;
        ((Me) => {
          function j(ne, De) {
            return ne.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, t.I8)(w, De),
              { ePrivilege: 1 },
            );
          }
          Me.ReportProductImpressionsFromClient = j;
        })(L || (L = {}));
      },
      36631: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          Ay: () => A,
          Cs: () => N,
          HN: () => X,
          HY: () => t,
          LD: () => W,
          MU: () => R,
          W3: () => E,
          bs: () => a,
          uF: () => s,
          yD: () => U,
        });
        var n = r(7850),
          T = r(90626);
        const a = 0,
          s = 1,
          t = 2,
          E = 3,
          A = 4,
          q = { eLocation: a },
          W = T.createContext(q);
        function N(h) {
          const { children: g, location: b } = h;
          return (0, n.jsx)(W.Provider, {
            value: { ...q, eLocation: b ?? a },
            children: g,
          });
        }
        function U() {
          return T.useContext(W);
        }
        function J() {
          return U().eLocation == s;
        }
        function R() {
          return U().eLocation == t;
        }
        function X() {
          const h = U();
          return h.eLocation == t || h.eLocation == s;
        }
      },
      92799: (me, ue, r) => {
        "use strict";
        r.d(ue, { m: () => l });
        var n = r(7850),
          T = r(23386),
          a = r(24660),
          s = r(64868),
          t = r(72609),
          E = r(90626),
          A = r(16412),
          q = r(73191),
          W = r(69168),
          N = r(36118),
          U = r(85599),
          J = r(36707),
          R = r(18210),
          X = r(6881),
          h = r(4105),
          g = r(94253),
          b = r(74187),
          v = r.n(b);
        function l(_) {
          const Z = (0, g.Oz)(),
            { bLoading: V } = Z,
            { className: c, bPreviewMode: u, rewardType: p } = _,
            [S, F, w] = (0, s.uD)();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)(A.$n, {
                className: (0, J.A)("CSSClaimItemButton", c),
                onClick: () => {
                  Z.bCanClaimNewItem
                    ? F()
                    : u &&
                      (F(),
                      console.log(
                        "Show dialog for debugging, since already claimed: ",
                        Z,
                      ));
                },
                disabled: V,
                children: V
                  ? (0, n.jsx)(U.t, {
                      string: (0, R.we)("#Loading"),
                      size: "small",
                    })
                  : (0, n.jsx)(f, { claimState: Z }),
              }),
              (0, n.jsx)(W.E, {
                active: S,
                children: (0, n.jsx)(M, { rewardType: p, closeModal: w }),
              }),
            ],
          });
        }
        function f(_) {
          const { claimState: Z, strButtonOverride: V, rewardType: c } = _;
          if (Z.bAlreadyClaimedCurrentItem)
            return (0, n.jsxs)("div", {
              className: (0, J.A)(b.CheckMark, "CSSClaimedState"),
              children: [
                (0, n.jsx)(N.Jlk, {}),
                (0, n.jsxs)("span", {
                  children: [
                    " ",
                    V || (0, R.we)("#Sale_ClaimableReward_AlreadyClaimed"),
                  ],
                }),
              ],
            });
          let u = (0, R.we)("#Sale_ClaimableReward_generic");
          switch (Z?.community_item_class || c) {
            case T.Ed:
              u = (0, R.we)("#Sale_ClaimableReward_sticker");
              break;
            case T.jE:
              u = (0, R.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case T.xw:
              u = (0, R.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)("span", {
            className: "CSSUnclaimedState",
            children: u,
          });
        }
        function M(_) {
          const { closeModal: Z, rewardType: V } = _,
            { fnClaimItem: c } = (0, g.CC)(),
            u = (0, q.vs)(),
            [p, S] = E.useState(null);
          E.useEffect(() => {
            u.bLoading ||
              (u.fnSetLoading(!0),
              c()
                .then((I) => {
                  if ((S(I), I.appid)) {
                    let L = (0, R.we)(
                      "#Sale_ClaimableReward_completed_generic",
                    );
                    const Me = p?.community_item_class || V;
                    switch (Me) {
                      case T.Ed:
                        L = (0, R.we)(
                          "#Sale_ClaimableReward_completed_sticker",
                        );
                        break;
                      case T.jE:
                        L = (0, R.we)(
                          "#Sale_ClaimableReward_completed_profilemodifier",
                        );
                        break;
                      case T.xw:
                        L = (0, R.we)(
                          "#Sale_ClaimableReward_completed_animatedavatar",
                        );
                        break;
                    }
                    u.fnSetStrSuccess("   "),
                      u.fnSetElSuccess(
                        (0, n.jsxs)("div", {
                          className: b.DialogCtn,
                          children: [
                            (0, n.jsx)("span", { children: L }),
                            (0, n.jsx)($, {
                              appid: I.appid,
                              community_item_type: I.community_item_type,
                              rewardType: Me,
                            }),
                          ],
                        }),
                      );
                  } else
                    u.fnSetStrError((0, R.we)("#Sale_ClaimableReward_Busy"));
                })
                .catch(() =>
                  u.fnSetStrError((0, R.we)("#Sale_ClaimableReward_Busy")),
                ));
          }, [p?.community_item_class, u, c, V]);
          let F = (0, R.we)("#Sale_ClaimableReward_generic");
          switch (p?.community_item_class || V) {
            case T.Ed:
              F = (0, R.we)("#Sale_ClaimableReward_sticker");
              break;
            case T.jE:
              F = (0, R.we)("#Sale_ClaimableReward_profilemodifier");
              break;
            case T.xw:
              F = (0, R.we)("#Sale_ClaimableReward_animatedavatar");
              break;
          }
          return (0, n.jsx)(q.Hh, {
            state: u,
            strDialogTitle: F,
            closeModal: Z,
          });
        }
        function $(_) {
          const { appid: Z, community_item_type: V, rewardType: c } = _;
          return !Z || !V
            ? null
            : (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(h.f8, { appid: Z, community_item_type: V }),
                  c == T.jE &&
                    (0, n.jsx)(k, { appid: Z, community_item_type: V }),
                ],
              });
        }
        function k(_) {
          const { appid: Z, community_item_type: V } = _,
            c = (0, X.fw)(Z),
            { mutate: u, isSuccess: p } = (0, g.t5)();
          if (!c) return null;
          const S = c.find((F) => F.item_type == V);
          return S
            ? (0, n.jsxs)("div", {
                className: b.EquipCtn,
                children: [
                  p
                    ? (0, n.jsx)("div", {
                        children: (0, R.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply_success",
                        ),
                      })
                    : (0, n.jsx)(A.$n, {
                        onClick: () => u(S),
                        children: (0, R.we)(
                          "#Sale_ClaimableReward_profilemodifier_apply",
                        ),
                      }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, R.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              })
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}/edit/goldenprofile`,
                    children: (0, R.we)(
                      "#Sale_ClaimableReward_profilemodifier_choose",
                    ),
                  }),
                  (0, n.jsx)(a.Ii, {
                    href: `${t.TS.COMMUNITY_BASE_URL}profiles/${t.iA.steamid}`,
                    children: (0, R.we)(
                      "#Sale_ClaimableReward_profilemodifier_view",
                    ),
                  }),
                ],
              });
        }
      },
      11587: (me, ue, r) => {
        "use strict";
        r.d(ue, { Qg: () => g, h3: () => h });
        var n = r(72609),
          T = r(80902),
          a = r(75233),
          s = r(51614),
          t = r(90626),
          E = r(72604);
        const A = "saleaction/giveawayregistration",
          q = "saleaction/creategiveawayregistration";
        async function W(b) {
          const v = n.TS.STORE_BASE_URL + A + "?name=" + encodeURIComponent(b),
            l = await fetch(v, { credentials: "include" });
          return await U("GetUserGiveawayRegistration", b, v, l);
        }
        async function N(b) {
          const v = n.TS.STORE_BASE_URL + q,
            l = await fetch(v, {
              method: "POST",
              credentials: "include",
              headers: { "content-type": "application/json" },
              body: JSON.stringify({ name: b }),
            });
          return await U("UpdateUserGiveawayRegistration", b, v, l);
        }
        async function U(b, v, l, f) {
          if (!f.ok) throw new Error(l + " answered " + f.status);
          const M = await f.json();
          if (M?.success == E.R && M.registration) return M.registration;
          throw new Error(b + " on " + v + " answered " + M?.success);
        }
        const J = { registered: !1 };
        function R(b, v) {
          return ["sale", "giveawayregistration", b, v];
        }
        function X(b, v) {
          return {
            queryKey: R(b, v),
            queryFn: () => W(b),
            enabled: !!b,
            retry: !1,
          };
        }
        function h(b) {
          const { data: v, isError: l } = (0, T.I)(X(b, n.iA.accountid));
          return l ? J : v;
        }
        function g() {
          const b = (0, a.jE)(),
            { mutateAsync: v } = (0, s.n)({
              mutationFn: N,
              onSuccess: (f, M) => b.setQueryData(R(M, n.iA.accountid), f),
            });
          return {
            fnCreateRegistration: (0, t.useCallback)(
              async (f) => {
                try {
                  return await v(f);
                } catch (M) {
                  return (
                    console.error(
                      "Registering for giveaway " + f + " failed",
                      M,
                    ),
                    J
                  );
                }
              },
              [v],
            ),
          };
        }
      },
      31774: (me, ue, r) => {
        "use strict";
        r.d(ue, { $O: () => v, wk: () => b });
        var n = r(80902),
          T = r(75233),
          a = r(90626),
          s = r(72609),
          t = r(45806),
          E = r(48491),
          A = r(49288);
        async function q(l, f) {
          const { rgDefIDs: M, strCategory: $, itemClass: k } = f,
            _ = await A.a9.QueryRewardItems(l, {
              definitionids: M,
              community_item_classes: k ? [k] : void 0,
              filter_match_any_category_tags: $ ? [$] : void 0,
            });
          if (!_.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + _.GetEResult(),
            );
          return _.Body().toObject().definitions ?? [];
        }
        let W;
        function N() {
          const l = (0, t.q)();
          return l
            ? l.GetAnonymousServiceTransport()
            : (W || (W = new E.D(s.TS.WEBAPI_BASE_URL)),
              W.GetServiceTransport());
        }
        async function U(l) {
          return q(N(), l);
        }
        const J = 3600 * 1e3;
        function R(l) {
          return ["LoyaltyRewardDef", l];
        }
        function X(l, f) {
          return ["LoyaltyRewardDefsByCategoryAndClass", l, f];
        }
        function h(l) {
          return {
            queryKey: R(l),
            queryFn: async () => {
              const f = await U({ rgDefIDs: [l] }),
                M = f.length == 1 ? f[0] : void 0;
              if (!M)
                throw new Error(
                  `Asked for point shop item ${l} and got ${f.length} items back, wanted exactly one.`,
                );
              return M;
            },
            enabled: l > 0,
            staleTime: J,
            retry: !1,
          };
        }
        function g(l, f) {
          return {
            queryKey: X(l, f),
            queryFn: () => U({ strCategory: l, itemClass: f }),
            enabled: !!(l && f),
            staleTime: J,
            retry: !1,
          };
        }
        function b(l) {
          const { data: f } = (0, n.I)(h(l));
          return f;
        }
        function v(l, f) {
          const M = (0, T.jE)(),
            { data: $ } = (0, n.I)(g(l, f));
          return (
            (0, a.useEffect)(() => {
              $?.forEach((k) => {
                k.defid !== void 0 && M.setQueryData(R(k.defid), k);
              });
            }, [$, M]),
            $
          );
        }
      },
      6881: (me, ue, r) => {
        "use strict";
        r.d(ue, { _u: () => p, fw: () => M, p1: () => $, Km: () => k });
        var n = r(80902),
          T = r(75233),
          a = r(51614),
          s = r(90626),
          t = r(72609),
          E = r(45806),
          A = r(33828),
          q = r(48491),
          W = r(67705),
          N = r(72604),
          U = r(31224);
        async function J(S, F) {
          const w = await U.uy.GetCommunityInventory(S, { filter_appids: [F] });
          if (w.GetEResult() != N.R)
            throw new Error(
              "Quest.GetCommunityInventory on app " +
                F +
                " answered " +
                w.GetEResult(),
            );
          return w.Body().toObject().items ?? [];
        }
        let R;
        function X() {
          const S = (0, E.q)();
          if (S) return S.GetServiceTransport();
          if (!R) {
            const F = (0, W.Fd)("read_inventory_token", "application_config");
            R = F ? new q.D(t.TS.WEBAPI_BASE_URL, F) : (0, A.P)();
          }
          return R.GetServiceTransport();
        }
        async function h(S) {
          return J(X(), S);
        }
        const g = 3 * 1e3,
          b = 5 * 1e3,
          v = 15 * 1e3;
        function l(S) {
          return ["QuestCommunityInventory", S];
        }
        function f(S) {
          return {
            queryKey: l(S),
            queryFn: () => h(S),
            enabled: !!S,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function M(S) {
          const { data: F } = (0, n.I)(f(S));
          return F;
        }
        function $(S, F) {
          const w = M(S);
          return {
            communityItem: (0, s.useMemo)(
              () => w?.find((L) => L.appid == S && L.item_type == F),
              [w, S, F],
            ),
            bLoaded: w != null,
          };
        }
        function k() {
          const S = (0, T.jE)();
          return (0, a.n)({
            mutationFn: (F) => Z(S, F.appid, F.fnBHasExpectedItems),
          });
        }
        const _ = new WeakMap();
        function Z(S, F, w) {
          if (!F || w(S.getQueryData(l(F)) ?? [])) return Promise.resolve();
          let I = _.get(S);
          I || ((I = new Map()), _.set(S, I));
          let L = I.get(F);
          return (
            L || ((L = V(S, F, w).finally(() => I?.delete(F))), I.set(F, L)), L
          );
        }
        async function V(S, F, w) {
          const I = [0, g, c()];
          for (const L of I) {
            L > 0 && (await u(L));
            let Me;
            try {
              (Me = await h(F)), S.setQueryData(l(F), Me);
            } catch (j) {
              console.error(
                "Re-reading the community inventory for app " + F + " failed",
                j,
              );
            }
            if (w(Me ?? [])) return;
          }
        }
        function c() {
          return b + Math.floor(Math.random() * (v - b));
        }
        function u(S) {
          return new Promise((F) => setTimeout(F, S));
        }
        function p(S, F, w) {
          S.setQueryData(l(F), w);
        }
      },
      4105: (me, ue, r) => {
        "use strict";
        r.d(ue, { Zx: () => $, f8: () => M });
        var n = r(7850),
          T = r(65946),
          a = r(23386),
          s = r(85599),
          t = r(18210),
          E = r(72609),
          A = r(56330),
          q = r(80902),
          W = r(90626),
          N = r(72604);
        const U = "minigamev2/itemdefs",
          J = "appid",
          R = "editor";
        function X() {
          return (typeof self < "u" ? self.origin + "/" : "") ===
            E.TS.STORE_BASE_URL
            ? E.TS.STORE_BASE_URL
            : E.TS.COMMUNITY_BASE_URL;
        }
        async function h(k, _) {
          if (!k) return [];
          const Z = new URLSearchParams({ [J]: String(k), l: E.TS.LANGUAGE });
          _ && Z.set(R, "1");
          const V = `${X()}${U}?${Z}`,
            c = await fetch(V, { credentials: _ ? "include" : "same-origin" });
          if (!c.ok) throw new Error(`${V} answered ${c.status}`);
          const u = await c.json();
          if (u?.success == N.R && u.item_definitions)
            return u.item_definitions;
          throw new Error(
            "Community item definitions for app " +
              k +
              " answered " +
              u?.success,
          );
        }
        function g(k, _) {
          return ["MinigameCommunityItemDefs", k, !!_];
        }
        function b(k, _) {
          return {
            queryKey: g(k, _),
            queryFn: () => h(k, _),
            enabled: !!k,
            retry: !1,
          };
        }
        function v(k, _) {
          const { data: Z } = (0, q.I)(b(k, _));
          return Z;
        }
        function l(k, _, Z) {
          const V = v(k, Z);
          return (0, W.useMemo)(
            () =>
              V?.find(
                (c) => (Z || c.active) && c.appid == k && c.item_type == _,
              ),
            [V, k, _, Z],
          );
        }
        function f(k) {
          const {
            appid: _,
            item_image_small: Z,
            item_image_large: V,
            item_movie_mp4: c,
            item_movie_webm: u,
            item_title: p,
          } = k;
          if (c && u) {
            const S = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${Z}`,
              F = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${u}`,
              w = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${c}`;
            return (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)("video", {
                muted: !0,
                controls: !1,
                autoPlay: !0,
                loop: !0,
                poster: S,
                playsInline: !0,
                className: k.videoClassName,
                children: [
                  (0, n.jsx)("source", { src: F, type: "video/webm" }),
                  !E.TS.IN_CLIENT &&
                    (0, n.jsx)("source", { src: w, type: "video/mp4" }),
                ],
              }),
            });
          } else {
            const S = `${E.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${_}/${Z || V}`;
            return (0, n.jsx)("img", {
              className: k.className,
              src: S,
              alt: p,
            });
          }
        }
        function M(k) {
          const { appid: _, community_item_type: Z, bForEdit: V } = k,
            c = l(_, Z, V),
            u =
              c && !c.active
                ? (0, n.jsx)("div", {
                    className: A.WarningStylesBackground,
                    children: (0, t.we)(
                      "#Sale_Section_RewardShelf_ItemInActiveWarning",
                    ),
                  })
                : void 0;
          return c
            ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(f, { ...c }), u],
              })
            : (0, n.jsx)(s.t, { size: "small", string: (0, t.we)("#Loading") });
        }
        function $(k) {
          const { section: _, rewardDef: Z, language: V } = k,
            c = l(Z.appid ?? 0, Z.community_item_type ?? 0),
            [u] = (0, T.q3)(() => [!!_.rewards?.show_reward_item_name]);
          let p;
          switch (Z.community_class) {
            case a.xi:
            case a.xw:
              p = `${E.TS.COMMUNITY_BASE_URL}my/edit/avatar`;
              break;
            case a.u8:
              p = `${E.TS.COMMUNITY_BASE_URL}my/edit/favoritebadge`;
              break;
            case a.sU:
            case a.jE:
              p = `${E.TS.COMMUNITY_BASE_URL}my/edit/background`;
              break;
            case a.zs:
              p = `${E.TS.COMMUNITY_BASE_URL}my/edit/miniprofile`;
              break;
            case a.Ed:
              p = `${E.TS.COMMUNITY_BASE_URL}chat`;
              break;
          }
          return (0, n.jsxs)("a", {
            href: p,
            children: [
              (0, n.jsx)(M, {
                appid: Z.appid ?? 0,
                community_item_type: Z.community_item_type ?? 0,
              }),
              !!u && (0, n.jsx)("span", { children: c?.item_name }),
            ],
          });
        }
      },
      94253: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          t5: () => L,
          os: () => le,
          Qt: () => De,
          CC: () => I,
          Oz: () => w,
          lu: () => Me,
        });
        var n = r(23386),
          T = r(72609),
          a = r(68312),
          s = r(75233),
          t = r(80902),
          E = r(51614),
          A = r(90626),
          q = r(45806),
          W = r(33828),
          N = r(48491),
          U = r(67705),
          J = r(72604),
          R = r(31224),
          X = r(7112);
        const h = { bCanClaimNewItem: !1, bAlreadyClaimedCurrentItem: !1 };
        async function g(Y, ye) {
          const oe = await X.Qm.CanClaimItem(Y, { language: ye });
          if (oe.GetEResult() != J.R)
            throw new Error(
              "SaleItemRewards.CanClaimItem answered " + oe.GetEResult(),
            );
          const pe = oe.Body().toObject(),
            Pe = pe.reward_item?.defid ? pe.reward_item : void 0;
          return {
            bCanClaimNewItem: !!pe.can_claim,
            bAlreadyClaimedCurrentItem: !!Pe,
            appid: Pe?.appid,
            community_item_type: Pe?.community_item_type,
            community_item_class: Pe?.community_item_class,
            rtNextClaimTime:
              (pe.next_claim_time ?? 0) > 0 ? pe.next_claim_time : void 0,
          };
        }
        async function b(Y, ye) {
          const oe = await X.Qm.ClaimItem(Y, { language: ye });
          if (oe.GetEResult() == J.Ze) return g(Y, ye);
          if (oe.GetEResult() != J.R)
            throw new Error(
              "SaleItemRewards.ClaimItem answered " + oe.GetEResult(),
            );
          const pe = oe.Body().toObject().reward_item;
          return {
            bCanClaimNewItem: !1,
            bAlreadyClaimedCurrentItem: !0,
            appid: pe?.appid,
            community_item_type: pe?.community_item_type,
            community_item_class: pe?.community_item_class,
            rtNextClaimTime:
              (oe.Body().next_claim_time() ?? 0) > 0
                ? oe.Body().next_claim_time()
                : void 0,
          };
        }
        async function v(Y, ye) {
          const oe = await R.uy.ActivateProfileModifierItem(Y, {
            communityitemid: ye.communityitemid,
            appid: ye.appid,
            activate: !0,
          });
          if (oe.GetEResult() != J.R)
            throw new Error(
              "Quest.ActivateProfileModifierItem answered " + oe.GetEResult(),
            );
          return oe.GetEResult();
        }
        async function l(Y, ye, oe, pe) {
          return (
            await X.Qm.GetCurrentDefinition(Y, {
              sale_def_type: ye,
              language: oe,
              include_community_item_def: pe,
            })
          )
            .Body()
            .toObject();
        }
        async function f(Y, ye, oe, pe) {
          return (
            await X.Qm.GetClaimedSaleRewards(Y, {
              sale_def_type: ye,
              language: oe,
              include_community_item_def: pe,
            })
          )
            .Body()
            .toObject();
        }
        let M;
        function $() {
          const Y = (0, q.q)();
          if (Y) return Y.GetServiceTransport();
          if (!M) {
            const ye = (0, U.Fd)("loyalty_webapi_token", "application_config");
            M = ye ? new N.D(T.TS.WEBAPI_BASE_URL, ye) : (0, W.P)();
          }
          return M.GetServiceTransport();
        }
        async function k(Y) {
          return g($(), Y);
        }
        async function _(Y) {
          return b($(), Y);
        }
        async function Z(Y) {
          return v($(), Y);
        }
        const V = 300 * 1e3;
        let c = !1,
          u = null;
        const p = {
          appid: 2243810,
          community_item_type: 2,
          community_item_class: n.Ed,
        };
        function S(Y) {
          return ["SaleItemCanClaim", Y];
        }
        function F(Y) {
          return {
            queryKey: S(Y),
            queryFn: () => k(Y),
            enabled: !c,
            staleTime: 1 / 0,
            retry: !1,
          };
        }
        function w() {
          const Y = T.TS.LANGUAGE,
            ye = (0, s.jE)(),
            { data: oe, isLoading: pe } = (0, t.I)(F(Y)),
            Pe = oe?.rtNextClaimTime;
          return (
            (0, A.useEffect)(() => {
              let ge = 0;
              if (Pe) {
                const He = () => {
                  const ce = Pe * 1e3 - Date.now();
                  if (ce <= 0) {
                    ye.invalidateQueries({ queryKey: S(Y) });
                    return;
                  }
                  ge = window.setTimeout(He, ce > V ? ce / 2 : ce);
                };
                He();
              }
              return () => window.clearTimeout(ge);
            }, [Pe, Y, ye]),
            { ...(oe ?? h), bLoading: pe }
          );
        }
        function I() {
          const Y = (0, s.jE)(),
            { mutateAsync: ye } = (0, E.n)({
              mutationFn: () => {
                if (u) {
                  const pe = u;
                  return (u = null), Promise.resolve(pe);
                }
                return c
                  ? Promise.resolve(Y.getQueryData(S(T.TS.LANGUAGE)) ?? h)
                  : _(T.TS.LANGUAGE);
              },
              onSuccess: (pe) => Y.setQueryData(S(T.TS.LANGUAGE), pe),
            });
          return { fnClaimItem: (0, A.useCallback)(() => ye(), [ye]) };
        }
        function L() {
          return (0, E.n)({ mutationFn: (Y) => Z(Y) });
        }
        function Me() {
          const Y = (0, s.jE)();
          return {
            fnSetClaimState: (0, A.useCallback)(
              (oe) => {
                (c = !0),
                  (u = oe.bCanClaimNewItem
                    ? {
                        bAlreadyClaimedCurrentItem: !0,
                        bCanClaimNewItem: !1,
                        rtNextClaimTime: Math.floor(Date.now() / 1e3) + 3600,
                        ...p,
                      }
                    : null),
                  Y.setQueryData(S(T.TS.LANGUAGE), oe);
              },
              [Y],
            ),
          };
        }
        function j(Y, ye, oe) {
          return ["SaleRewardsGetDefinition", Y, ye, oe];
        }
        function ne(Y, ye, oe, pe) {
          return {
            queryKey: j(ye, oe, pe),
            queryFn: () => l(Y, ye, oe, pe),
            staleTime: 1 / 0,
          };
        }
        function De(Y, ye, oe) {
          const pe = (0, a.KV)();
          return (0, t.I)(ne(pe, Y, ye, oe));
        }
        function D(Y, ye, oe, pe) {
          return ["GetClaimedSaleRewards", Y, ye, !!oe, pe];
        }
        function ee(Y, ye, oe, pe, Pe) {
          return {
            queryKey: D(ye, oe, pe, Pe),
            queryFn: () => f(Y, ye, oe, pe),
            staleTime: 1 / 0,
          };
        }
        function le(Y, ye, oe, pe) {
          const Pe = (0, a.KV)();
          return (0, t.I)(ee(Pe, Y, ye, oe, pe));
        }
      },
      86959: (me, ue, r) => {
        "use strict";
        r.d(ue, { Fk: () => a, rz: () => q });
        var n = r(53113),
          T = r(72609);
        function a(v, l) {
          return !l || l.startsWith("https://") || l.startsWith("http://")
            ? l
            : `${T.TS.CLAN_CDN_ASSET_URL}images/clan/${v}/${l}`;
        }
        function s(v, l, f) {
          return !l || IsHttpOrHttps(l) ? l : `${f}images/clan/${v}/${l}`;
        }
        const t = "poster",
          E = `${t}.avif`,
          A = /^([0-9a-f]{32})(?:_2x)?\.[a-z0-9.]+$/i;
        function q(v) {
          const l = v.video_webm_src || v.video_mp4_src;
          if (!l || v.image?.includes(`.${t}.`)) return v.image;
          const f = A.exec(l);
          return f ? `${f[1]}.${E}` : v.image;
        }
        const W = 0.01,
          N = 100,
          U = 4,
          J = null,
          R = 0.005;
        function X(v, l) {
          if (!(!v || !l || v <= 0 || l <= 0)) return h(v / l);
        }
        function h(v) {
          if (!v || !Number.isFinite(v) || v < W || v > N) return;
          const l = Math.pow(10, U);
          return Math.round(v * l) / l;
        }
        function g(v) {
          const l = v.trim();
          if (!l) return;
          const f = /^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i.exec(l);
          if (f) return X(parseFloat(f[1]), parseFloat(f[2]));
          if (/^\d+(?:\.\d+)?$/.test(l)) return h(parseFloat(l));
        }
        function b(v) {
          const l = J.find(([f, M]) => Math.abs(v - f / M) < R);
          return l ? `${l[0]}:${l[1]}` : String(v);
        }
      },
      47797: (me, ue, r) => {
        "use strict";
        r.d(ue, { Ns: () => a });
        var n = r(99412);
        const T = 1778623200;
        function a(E, A) {
          let q = !1;
          return (
            E && E.GetEventType() == n.ajI
              ? (q = !0)
              : E && A && A.is_creator_home && (q = s(E, A)),
            q
          );
        }
        function s(E, A) {
          return !!A && !!A.is_creator_home && (E.createTime ?? 0) > T;
        }
        function t(E) {
          const A = useClanInfoByAccountID(E.clanSteamID.GetAccountID());
          return a(E, A.data);
        }
      },
      64457: (me, ue, r) => {
        "use strict";
        r.d(ue, { PE: () => k, Yg: () => f, _t: () => M, gO: () => Z });
        var n = r(7850),
          T = r(21721),
          a = r(25046),
          s = r(40358),
          t = r(68094),
          E = r(41032),
          A = r(90626),
          q = r(62571),
          W = r(40426),
          N = r(36118),
          U = r(36707),
          J = r(18210),
          R = r(72609),
          X = r(96538),
          h = r(85599),
          g = r(64271),
          b = r(48963),
          v = r.n(b),
          l = r(50573);
        function f(c) {
          const { id: u, bPopOutTrailerPlayback: p } = c,
            { data: S } = (0, s.Yo)(u),
            { data: F } = (0, s.j4)(u),
            { data: w } = (0, s.J$)(u),
            [I, L] = (0, A.useState)(!1),
            [Me, j] = (0, A.useState)(!1),
            ne = (0, E.dy)(),
            De = S?.highlights?.filter((Y) => !ne || Y.all_ages),
            D = De && De?.length > 0 ? De[0] : void 0,
            ee = A.useCallback(() => {
              D && (p ? j(!0) : L((Y) => !Y));
            }, [D, p]);
          if (!w)
            return (0, n.jsx)("div", {
              className: (0, U.A)(v().HilightGrid, v().MediaContainer),
              children: (0, n.jsx)(h.t, { size: "medium" }),
            });
          const le = D
            ? (0, n.jsx)(V, {
                trailer: D,
                bPlayVideo: I,
                fnTogglePlayTrailer: ee,
              })
            : null;
          return !D &&
            !(F && F.all_ages_screenshots && F.all_ages_screenshots.length > 0)
            ? null
            : (0, n.jsxs)("div", {
                className: (0, U.A)(v().HilightGrid, v().MediaContainer),
                children: [
                  (0, n.jsx)(M, {
                    elFeaturedInCenter: le,
                    storeItemScreenshots: F,
                    trailer: D,
                    id: u,
                    name: w.name || "",
                  }),
                  p
                    ? (0, n.jsx)(k, {
                        id: u,
                        bShowModal: Me,
                        hideModal: () => j(!1),
                      })
                    : (0, n.jsx)($, {
                        name: w.name || "",
                        trailer: D,
                        bPlayVideo: I,
                        fnTogglePlayTrailer: ee,
                        bControls: !0,
                      }),
                ],
              });
        }
        function M(c) {
          const {
              elFeaturedInCenter: u,
              id: p,
              name: S,
              trailer: F,
              storeItemScreenshots: w,
              featureElementclassName: I,
              bUseTrailerAsFirstThumb: L,
              bNoScreenShotModals: Me,
            } = c,
            [j, ne] = A.useState(void 0),
            [De, D] = (0, W.XC)(),
            ee = (0, E.dy)(),
            le = (0, A.useRef)(null),
            [Y, ye] = (0, A.useState)(0);
          if (!p) return null;
          const oe = u || (j !== void 0 && j !== -1) ? j : 0,
            pe = new Array(),
            Pe = new Array();
          L &&
            F &&
            (pe.push(
              (0, n.jsx)(
                V,
                {
                  trailer: F,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => ne(0),
                  onMouseLeave: () => {
                    const se = le.current;
                    se && ye(se.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            Pe.push(
              (0, n.jsx)(
                $,
                {
                  ref: le,
                  name: S,
                  trailer: F,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: Y,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const ge = (
            ee ? w?.all_ages_screenshots : w?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (ge?.forEach((se, Ee) => {
              if ((u || Ee > 0) && pe.length < 3) {
                const xe = (0, T.bu)(se, "thumb"),
                  ft = (0, T.bu)(se, "600x338"),
                  Qe = pe.length;
                pe.push(
                  (0, n.jsx)(
                    "div",
                    {
                      className: (0, U.A)({
                        [v().ThumbnailCtn]: !0,
                        [v().ThumbnialClickable]: !Me,
                      }),
                      onMouseEnter: () => ne(Qe),
                      children: Me
                        ? (0, n.jsx)("img", { src: xe, alt: S })
                        : (0, n.jsx)("button", {
                            type: "button",
                            className: v().ThumbnailButton,
                            onClick: () => {
                              const nt = [...(ge || [])];
                              if (nt.length > 0) {
                                for (let at = 0; at < Ee; ++at) {
                                  const ve = nt.shift();
                                  ve && nt.push(ve);
                                }
                                De(nt.map((at) => (0, T.bu)(at, "full")));
                              }
                            },
                            children: (0, n.jsx)("img", { src: xe, alt: S }),
                          }),
                    },
                    Ee + "_small_" + xe,
                  ),
                ),
                  Pe.push(
                    (0, n.jsx)(
                      "div",
                      {
                        className: v().ScreenshotDisplayCtn,
                        children: (0, n.jsx)("img", { src: ft, alt: S }),
                      },
                      Ee + "_big_" + xe,
                    ),
                  );
              }
            }),
            !u && (!Pe || Pe.length == 0))
          )
            return null;
          const He = pe.slice(0, 3),
            ce = Array.from({ length: Math.max(0, 3 - He.length) });
          return (0, n.jsxs)(n.Fragment, {
            children: [
              D,
              (0, n.jsx)("div", {
                className: I || v().MainMediaCtn,
                children:
                  u && (oe === -1 || oe === void 0)
                    ? (0, n.jsx)(n.Fragment, { children: u })
                    : (0, n.jsx)(n.Fragment, {
                        children: oe !== void 0 && Pe[oe],
                      }),
              }),
              He.length > 0 &&
                (0, n.jsxs)("div", {
                  className: v().ScreenshotThumbnailRow,
                  onMouseLeave: () => ne(-1),
                  children: [
                    He,
                    ce.map((se, Ee) =>
                      (0, n.jsx)(
                        "div",
                        { className: v().ThumbnailCtn },
                        `app_${(0, t.ER)(p)}_${Ee}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function $(c) {
          const {
            ref: u,
            name: p,
            trailer: S,
            bControls: F,
            bPlayVideo: w,
            fnTogglePlayTrailer: I,
            startTime: L,
          } = c;
          if (
            ((0, A.useEffect)(() => {
              const j = u?.current;
              if (L != null && L > 0 && j) {
                const ne = () => {
                  j.currentTime = L || 0;
                };
                return (
                  j.addEventListener("loadedmetadata", ne),
                  () => {
                    j.removeEventListener("loadedmetadata", ne);
                  }
                );
              }
            }, [u, L]),
            !S)
          )
            return null;
          let Me = (0, U.A)(v().VideoLargeContainer, w && v().videoPlaying);
          return (0, n.jsxs)("div", {
            className: Me,
            onClick: I,
            role: "presentation",
            children: [
              (0, n.jsx)(l.hj, {
                name: p,
                trailerCategory: S.trailer_category,
                trailerDisplay: l.g,
                mouseOver: !1,
              }),
              !!(w && S.microtrailer) &&
                (0, n.jsx)("video", {
                  className: v().VideoLarge,
                  ref: u,
                  controls: F,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: L != null && L > 0 ? void 0 : S.screenshot_full,
                  children: S.microtrailer?.map((j) =>
                    R.TS.IN_CLIENT && j.type == "video/mp4"
                      ? null
                      : (0, n.jsx)(
                          "source",
                          { src: (0, a.M4)(S, j.filename || ""), type: j.type },
                          j.filename,
                        ),
                  ),
                }),
              F &&
                (0, n.jsx)("button", {
                  type: "button",
                  className: v().CloseButton,
                  "aria-label": (0, J.we)("#Button_Close"),
                  children: (0, n.jsx)(N.sED, {}),
                }),
            ],
          });
        }
        function k(c) {
          return c.bShowModal ? (0, n.jsx)(_, { ...c }) : null;
        }
        function _(c) {
          const { id: u, bShowModal: p, trailerBaseID: S, hideModal: F } = c,
            { data: w } = (0, s.J$)(u),
            I = (0, a.kB)(u),
            L = (0, A.useMemo)(() => {
              if (!(!I || I.length == 0)) {
                if (S) {
                  const le = I.find((Y) => Y.trailer_base_id == S);
                  if (le) return le;
                }
                return I[0];
              }
            }, [I, S]),
            Me = A.useId(),
            j = A.useId(),
            {
              rgDashTrailers: ne,
              rgHlsTrailers: De,
              strCaptionManufest: D,
              strScreenshot: ee,
            } = (0, A.useMemo)(() => {
              if (!L)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: le, rgHlsTrailers: Y } = (0, a.hg)(L);
              return {
                rgDashTrailers: le,
                rgHlsTrailers: Y,
                strCaptionManufest: (0, a.Wv)(L),
                strScreenshot: (0, a.hl)(L),
              };
            }, [L]);
          return !L || !L.adaptive_trailers || ne.length == 0
            ? null
            : (0, n.jsx)(X.EN, {
                active: p,
                children: (0, n.jsxs)(X.eV, {
                  "aria-labelledby": (0, q.q)(Me, j),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: F,
                  children: [
                    (0, n.jsx)("div", {
                      className: v().VideoPopupContainers,
                      children: (0, n.jsx)(g.P, {
                        dashManifests: ne,
                        hlsManifest: De[0] || "",
                        screenshot: ee,
                        altText: L.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: D,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      id: Me,
                      style: { display: "none" },
                      children: w?.name || "",
                    }),
                    (0, n.jsx)("div", {
                      id: j,
                      style: { display: "none" },
                      children: L.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function Z(c) {
          const { appid: u, trailerBaseID: p, bShowModal: S, hideModal: F } = c,
            w = (0, A.useMemo)(() => ({ appid: u }), [u]);
          return (0, n.jsx)(k, {
            id: w,
            trailerBaseID: p,
            bShowModal: S,
            hideModal: F,
          });
        }
        function V(c) {
          const {
            trailer: u,
            fnTogglePlayTrailer: p,
            bPlayVideo: S,
            onMouseEnter: F,
            onMouseLeave: w,
          } = c;
          return (0, n.jsxs)("div", {
            className: (0, U.A)({
              [v().VideoThumbnail]: !S,
              [v().videoPlaying]: S,
              [v().ThumbnailCtn]: !0,
            }),
            onClick: p,
            onMouseEnter: F,
            onMouseLeave: w,
            role: "presentation",
            children: [
              (0, n.jsx)("img", { src: (0, a.hl)(u), alt: u.trailer_name }),
              (0, n.jsx)("button", {
                type: "button",
                className: v().VideoPlayButton,
                "aria-label": (0, J.we)("#Playback_Play_Tooltip"),
                children: (0, n.jsx)(N.jGG, {}),
              }),
            ],
          });
        }
      },
      91354: (me, ue, r) => {
        "use strict";
        r.d(ue, { c: () => q });
        var n = r(7850),
          T = r(64238),
          a = r.n(T),
          s = r(16412),
          t = r(36118),
          E = r(89206),
          A = r.n(E);
        function q(W) {
          const { bExpanded: N, setExpanded: U } = W;
          return (0, n.jsx)(s.wl, {
            className: a()(E.ExpandRowButton, N && E.Selected),
            onClick: () => U(!N),
            children: (0, n.jsx)(t.b8_, { direction: "down" }),
          });
        }
      },
      9032: (me, ue, r) => {
        "use strict";
        r.d(ue, { uj: () => E, fB: () => A });
        var n = r(80902),
          T = r(72604),
          a = r(72609);
        async function s(q, W) {
          const N = a.TS.STORE_BASE_URL + "video/details/" + q + "/0",
            U = await fetch(N, { credentials: "include", signal: W });
          if (!U.ok) throw new Error(N + " answered " + U.status);
          const J = await U.json();
          if (J?.success != T.R && J?.success != "ready")
            throw new Error(
              "video/details on " + q + " answered " + J?.success,
            );
          return { appid: q, video_url: J.video_url, bookmark: J.bookmark };
        }
        function t(q) {
          return ["video", "vod", q];
        }
        function E(q) {
          return {
            queryKey: t(q),
            queryFn: ({ signal: W }) => s(q, W),
            retry: !1,
          };
        }
        function A(q) {
          const { data: W, isPending: N } = (0, n.I)(E(q));
          return { vodInfo: W, bLoading: N };
        }
      },
      813: (me, ue, r) => {
        "use strict";
        r.d(ue, { $5: () => M, TB: () => f, ac: () => v });
        var n = r(40497),
          T = r(75233),
          a = r(14947),
          s = r(90626),
          t = r(76559),
          E = r(71742),
          A = r(3166),
          q = r(60480),
          W = r(33512),
          N = r(55483),
          U = r(77291);
        const J = new WeakSet();
        function R(c = n.L) {
          if (typeof window > "u" || typeof document > "u" || J.has(c)) return;
          const u = (0, A.Fd)("groupvanityinfo", "application_config");
          (u === void 0 && document.readyState != "complete") ||
            (J.add(c), X(u) && (0, N.aA)(c, u));
        }
        function X(c) {
          const u = c;
          return u &&
            Array.isArray(u) &&
            u.length > 0 &&
            typeof u[0] == "object"
            ? typeof u[0].clanAccountID == "number" &&
                (typeof u[0].appid == "number" ||
                  typeof u[0].vanity_url == "string")
            : !1;
        }
        function h(c) {
          return typeof c == "string" ? parseInt(c) : c;
        }
        function g(c) {
          return typeof c == "string" ? Number.parseInt(c) : c;
        }
        class b {
          m_queryClient = n.L;
          m_boxCacheVersion = a.sH.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            R(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((u) => {
                  (u?.type != "added" &&
                    u?.type != "updated" &&
                    u?.type != "removed") ||
                    ((0, N.yT)(u.query?.queryKey) &&
                      this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, a.h5)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(u) {
            this.LazyInit(), X(u) && (0, N.aA)(this.m_queryClient, u);
          }
          BHasClanInfoLoaded(u) {
            return (
              (0, E.wT)(
                u.BIsValid(),
                "Clan SteamID is not valid when ClanInfo",
              ),
              (0, E.wT)(
                u.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(u.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(u) {
            return !!(0, N.Gt)(g(u), this.ReadCache());
          }
          RegisterClanData(u) {
            this.LazyInit(), (0, N.aA)(this.m_queryClient, u);
          }
          async LoadOGGClanInfoForAppID(u) {
            return (
              this.LazyInit(),
              (u = h(u)),
              (0, E.wT)(
                u != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              u == 0 ? null : (0, N.AB)(u, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(u) {
            return this.LazyInit(), (0, N.Rc)(u, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(u) {
            return this.LazyInit(), (0, N.Rc)(u, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(u) {
            return this.LoadClanInfoForClanAccountID(u.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(u) {
            return this.LazyInit(), (0, N.MR)(g(u), this.m_queryClient);
          }
          GetOGGClanInfo(u) {
            const p = this.ReadCache();
            return typeof u == "string" ? (0, N.fy)(u, p) : (0, N.ko)(u, p);
          }
          GetClanSteamIDForAppID(u) {
            const p = (0, N.ko)(h(u), this.ReadCache());
            return p ? t.b.InitFromClanID(p.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(u) {
            return (0, N.ko)(h(u), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(u) {
            return (0, N.Gt)(u.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(u) {
            return this.BHasClanInfoLoadedByAccountID(u);
          }
          GetClanMemberCount(u) {
            return (0, N.ko)(h(u), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(u) {
            return (
              (0, E.wT)(
                !!u,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              (0, N.Gt)(g(u), this.ReadCache())
            );
          }
          GetCreatorStoreURL(u) {
            let p = q.pF.GetCreatorHome(u);
            if (p) return p.GetCreatorHomeURL("developer");
            let S = this.GetClanInfoByClanAccountID(u.GetAccountID());
            return (
              A.TS.COMMUNITY_BASE_URL +
              (S.vanity_url
                ? "groups/" + S.vanity_url
                : "gid/" + u.ConvertTo64BitString())
            );
          }
        }
        const v = new b();
        (0, U.V)("g_ClanStore", v);
        function l() {
          const c = (0, T.jE)();
          return R(c), c;
        }
        function f(c) {
          l();
          const { data: u, isPending: p } = (0, N.TB)(c ? g(c) : void 0);
          return [!!c && p, u ?? void 0];
        }
        function M(c) {
          const u = l();
          (0, s.useEffect)(() => {
            c &&
              (0, N.MR)(g(c), u).catch((p) =>
                console.error(`Failed to hint load clan info ${c}`, p),
              );
          }, [c, u]);
        }
        function $(c) {
          return l(), useClanInfoByVanityQuery(c).data ?? null;
        }
        function k(c) {
          l();
          const u = c ? h(c) : void 0,
            { data: p, isPending: S } = useClanInfoByAppIDQuery(u);
          return { bLoadingClanInfo: !!u && S, clanInfo: p ?? null };
        }
        function _(c, u) {
          if (c.BIsOGGEvent()) return { bVisible: !1 };
          if (c.GetEventType() == k_EClanEventType_CreatorHome)
            return { bVisible: !1 };
          if (c.BHasSaleEnabled()) return { bVisible: !0 };
          if (
            c.jsondata.clone_from_event_gid &&
            c.jsondata.clone_from_sale_enabled
          )
            return { bVisible: !0 };
          if (c.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return { bVisible: !1 };
          const S = g_CreatorHomeStore.GetCreatorHome(c.clanSteamID);
          return S &&
            S.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? { bVisible: !0 }
            : u
              ? { bVisible: !0, bValveOnly: !0 }
              : { bVisible: !1 };
        }
        function Z(c, u) {
          return c.BIsOGGEvent()
            ? c.BHasSaleEnabled()
              ? { bVisible: !0 }
              : Config.EUNIVERSE == k_EUniversePublic
                ? { bVisible: !1 }
                : u
                  ? c.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? { bVisible: !0, bValveOnly: !0 }
                    : { bVisible: !1 }
                  : { bVisible: !1 }
            : { bVisible: !1 };
        }
        function V(c) {
          return c.BIsOGGEvent()
            ? { bVisible: !1 }
            : c.GetEventType() != k_EClanEventType_CreatorHome
              ? { bVisible: !1 }
              : c.BHasSaleEnabled()
                ? { bVisible: !0 }
                : c.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? { bVisible: !1 }
                  : { bVisible: !1 };
        }
      },
      53025: (me, ue, r) => {
        "use strict";
        r.d(ue, { $: () => A });
        var n = r(41735),
          T = r.n(n),
          a = r(3166),
          s = r(77495),
          t = r(73259),
          E = r(72604);
        class A extends s.ZQ {
          async DeleteOldAnnouncement(W, N) {
            let U = new URLSearchParams();
            U.append("sessionid", (0, a.KC)());
            let J =
                a.TS.COMMUNITY_BASE_URL +
                "/gid/" +
                W.ConvertTo64BitString() +
                "/announcements/ajaxdeleteannouncement/" +
                N,
              R = await T().post(J, U);
            if (R.data.success != E.R) throw R.data;
            return this.RemoveGIDFromList(W, t.cB + N), R.data;
          }
          static sm_Instance;
          static sm_SummaryInstance;
          static Get() {
            return (
              A.sm_Instance ||
                ((A.sm_Instance = new A()), A.sm_Instance.Init()),
              A.sm_Instance
            );
          }
          static GetSummaryStore() {
            return (
              A.sm_SummaryInstance ||
                ((A.sm_SummaryInstance = new A(!0)),
                A.sm_SummaryInstance.Init()),
              A.sm_SummaryInstance
            );
          }
        }
      },
      76035: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          $d: () => L,
          AD: () => _,
          CF: () => He,
          Fq: () => M,
          Jo: () => Z,
          Mn: () => pe,
          N2: () => I,
          PV: () => ge,
          QS: () => ye,
          RE: () => k,
          Ri: () => f,
          Vz: () => u,
          ZB: () => Y,
          _C: () => ee,
          a8: () => oe,
          cO: () => c,
          ed: () => S,
          jT: () => F,
          kr: () => V,
          lE: () => j,
          np: () => D,
          rv: () => le,
        });
        var n = r(72604),
          T = r(32093),
          a = r(35038),
          s = r(27386),
          t = r(34041),
          E = r(80902),
          A = r(75233),
          q = r(51614),
          W = r(68312),
          N = r(98609),
          U = r(67705),
          J = r(6469),
          R = r(41735),
          X = r.n(R),
          h = r(75779),
          g = r(90626),
          b = r(31224);
        const v = 2640290,
          l = 3334340,
          f = 4147080,
          M = 2215130;
        let $;
        function k() {
          return (
            $ || ($ = (0, U.Fd)("steam_awards_config", "application_config")), $
          );
        }
        const _ = g.createContext(null);
        function Z(ce) {
          const se = (0, W.KV)();
          return (0, E.I)({
            queryKey: [`SteamAwardDefs_${ce}`],
            queryFn: async () => {
              const Ee = a.w.Init(t.cD);
              return (
                Ee.Body().set_sale_appid(ce),
                Ee.Body().set_language(N.TS.LANGUAGE),
                (await t.zF.GetVoteDefinitions(se, Ee)).Body().toObject()
              );
            },
            initialData: () => k()?.definitions,
            enabled: ce !== void 0 && ce > 0,
          });
        }
        async function V(ce) {
          const se = a.w.Init(t.Dp);
          return (
            (await t.AH.GetUserNominations(ce, se)).Body().toObject()
              ?.nominations ?? []
          );
        }
        function c() {
          const ce = (0, W.KV)();
          return (0, E.I)({
            queryKey: [`SteamAwardNominations_${N.iA.accountid}`],
            queryFn: () => V(ce),
            initialData: () => k()?.user_nominations?.nominations,
            enabled: N.iA.logged_in,
          });
        }
        function u(ce) {
          const se = c();
          return se.isLoading
            ? { bLoadingNominationForCategory: !0 }
            : {
                currentNomination: se.data?.find((Ee) => Ee.category_id == ce),
                bLoadingNominationForCategory: !1,
              };
        }
        function p() {
          return [`SteamAwardBadgeProgress_${N.iA.accountid}`];
        }
        function S(ce) {
          const se = (0, W.KV)();
          return (0, E.I)({
            queryKey: p(),
            queryFn: async () => {
              const Ee = a.w.Init(s.jng);
              return (
                Ee.Body().set_badgeid(ce),
                Ee.Body().set_steamid(N.iA.steamid),
                (await s.xtC.GetCommunityBadgeProgress(se, Ee))
                  .Body()
                  .toObject()
              );
            },
            initialData: () => k()?.badge_progress,
            enabled: N.iA.logged_in,
          });
        }
        function F(ce) {
          const se = (0, W.KV)();
          return (0, E.I)({
            queryKey: [`SteamAwardSuggestions_${ce}`],
            queryFn: async () => {
              const Ee = a.w.Init(t.$N);
              return (
                Ee.Body().set_category_id(ce),
                (await t.AH.GetNominationRecommendations(se, Ee))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
          });
        }
        function w(ce, se) {
          ce.setQueryData([`SteamAwardNominations_${N.iA.accountid}`], se);
        }
        async function I(ce, se, Ee, xe) {
          const ft = a.w.Init(t.wz);
          ft.Body().set_category_id(Ee),
            ft.Body().set_source(xe),
            ft.Body().set_nominated_id(se);
          const Qe = await t.AH.Nominate(ce, ft);
          return (
            Qe.BSuccess() ||
              console.warn(
                `Failed to nominate app ${se} for category ${Ee}: ${Qe.GetEResult()}`,
              ),
            [Qe.GetEResult(), Qe.Body().toObject()]
          );
        }
        function L(ce, se, Ee, xe, ft) {
          const Qe = (0, W.KV)(),
            nt = (0, A.jE)();
          return (0, q.n)({
            mutationFn: () => I(Qe, ce, se, Ee),
            onSuccess: ([at, ve]) => {
              at == n.R
                ? (ve.nominations && w(nt, ve.nominations),
                  window.setTimeout(
                    () => nt.invalidateQueries({ queryKey: p() }),
                    1e3,
                  ),
                  ft && ft())
                : xe && xe(at);
            },
            onError: () => {
              xe && xe();
            },
          });
        }
        async function Me(ce, se, Ee) {
          let xe = {
            cc: N.TS.COUNTRY,
            l: N.TS.LANGUAGE,
            realm: T.TU.k_ESteamRealmGlobal,
            origin: self.origin,
            f: "jsonfull",
            term: ce.replace(" ", "+"),
            require_type: "game",
            is_released_somewhere: 1,
            excluded_tags: J.Fm.Get().GetExcludedTagsSortedByID(),
            excluded_content_descriptors: J.Fm.Get().ExcludedContentDescriptor,
            excluded_apps: Ee,
          };
          se.release_date_max &&
            (xe.release_date_max = new Date(
              se.release_date_max * 1e3,
            ).toISOString()),
            se.release_date_min &&
              (xe.release_date_min = new Date(
                se.release_date_min * 1e3,
              ).toISOString()),
            se.flag == t.Xs.O8 && (xe.vrsupport = 1),
            se.flag == t.Xs.x1 &&
              (xe.steam_deck_compat_categories = [h.YX, h.sd, h.I2]);
          const ft = `${N.TS.STORE_BASE_URL}search/suggest`;
          return (
            (await X().get(ft, { params: xe, withCredentials: !0 })).data ?? []
          );
        }
        function j(ce, se, Ee) {
          return (0, E.I)({
            queryKey: [ce, se.voteid, Ee],
            queryFn: () => Me(ce, se, Ee),
            staleTime: 1 / 0,
          });
        }
        function ne() {
          const ce = c();
          return ce.data ? ce.data.map((se) => se.appid) : [];
        }
        async function De(ce, se) {
          const Ee = a.w.Init(t.CX);
          Ee.Body().set_generate_new(se);
          const xe = await t.AH.GetNominationShareLink(ce, Ee);
          return (
            xe.BSuccess() ||
              console.warn(
                `Failed to GetNominationShareLink: ${xe.GetEResult()}`,
              ),
            [xe.GetEResult(), xe.Body().toObject()]
          );
        }
        function D() {
          const ce = (0, W.KV)();
          return (0, E.I)({
            queryKey: [`GetNominationShareLink_${N.iA.accountid}`],
            queryFn: async () => De(ce, !1),
            initialData: () => {
              const se = k()?.share_link;
              if (se) return [n.R, se];
            },
            staleTime: 1 / 0,
            enabled: N.iA.logged_in,
          });
        }
        function ee() {
          const ce = (0, W.KV)(),
            se = (0, A.jE)();
          return (0, q.n)({
            mutationFn: () => De(ce, !0),
            onSuccess: ([Ee, xe]) => {
              Ee == n.R &&
                se.setQueryData(
                  [`GetNominationShareLink_${N.iA.accountid}`],
                  [Ee, xe],
                );
            },
          });
        }
        async function le(ce, se, Ee, xe) {
          const ft = a.w.Init(t.yX);
          ft.Body().set_voteid(Ee),
            ft.Body().set_appid(se),
            ft.Body().set_sale_appid(xe);
          const Qe = await t.zF.SetVote(ce, ft);
          return (
            Qe.BSuccess() ||
              console.warn(
                `Failed to set vote for app (${se}): ${Qe.GetEResult()}`,
              ),
            [Qe.GetEResult(), Qe.Body().toObject()]
          );
        }
        function Y(ce, se, Ee) {
          const xe = (0, W.KV)(),
            ft = (0, A.jE)();
          return (0, q.n)({
            mutationFn: () => le(xe, ce, se, Ee),
            onSuccess: ([Qe, nt]) => {
              Qe == n.R &&
                ft.setQueryData(
                  [`SteamAwardUserVotes_${N.iA.accountid}`],
                  nt.user_votes,
                );
            },
          });
        }
        async function ye(ce, se) {
          const Ee = a.w.Init(t.qX);
          Ee.Body().set_sale_appid(se);
          const xe = await t.zF.GetUserVotes(ce, Ee);
          return (
            xe.BSuccess() ||
              console.warn(`Failed to get votes for user: ${xe.GetEResult()}`),
            xe.Body().toObject()?.user_votes ?? []
          );
        }
        function oe(ce) {
          const se = (0, W.KV)();
          return (0, E.I)({
            queryKey: [`SteamAwardUserVotes_${N.iA.accountid}`],
            queryFn: () => ye(se, ce),
            initialData: () => k()?.user_votes,
            enabled: N.iA.logged_in,
          });
        }
        function pe(ce, se) {
          const Ee = oe(ce);
          return (0, g.useMemo)(
            () => Ee.data?.find((xe) => xe.voteid == se)?.appid,
            [se, Ee.data],
          );
        }
        function Pe(ce) {
          const se = (0, W.KV)();
          return (0, E.I)({
            queryKey: [`SteamAwardItemDefs_${ce}`],
            queryFn: async () => {
              const Ee = a.w.Init(b.RG);
              return (
                Ee.Body().set_appid(ce),
                Ee.Body().set_language(N.TS.LANGUAGE),
                (await b.uy.GetCommunityItemDefinitions(se, Ee))
                  .Body()
                  .toObject()
              );
            },
            staleTime: 1 / 0,
            initialData: () => k()?.item_definitions,
          });
        }
        function ge(ce, se) {
          const Ee = Pe(ce),
            xe = Z(ce);
          if (!Ee.data || !xe.data) return null;
          const ft = xe.data.votes?.find((Qe) => Qe.voteid == se);
          return ft
            ? Ee.data.item_definitions?.find(
                (Qe) => Qe.item_type == ft.item_type,
              )
            : null;
        }
        function He() {
          const ce = g.useContext(_);
          return ce ? ce.yearStyles : {};
        }
      },
      73191: (me, ue, r) => {
        "use strict";
        r.d(ue, { Hh: () => N, vs: () => q });
        var n = r(7850),
          T = r(90626),
          a = r(96538),
          s = r(56330),
          t = r.n(s),
          E = r(18210),
          A = r(85599);
        function q(U) {
          const [J, R] = (0, T.useState)(() => !!U),
            [X, h] = (0, T.useState)(!1),
            [g, b] = (0, T.useState)(!1),
            [v, l] = (0, T.useState)(null),
            [f, M] = (0, T.useState)(null),
            [$, k] = (0, T.useState)(null),
            [_, Z] = (0, T.useState)(null),
            [V, c] = (0, T.useState)(null);
          return {
            bLoading: J,
            bError: X,
            bSuccess: g,
            strError: v,
            strSuccess: f,
            elSuccess: _,
            elError: $,
            strThrobber: V,
            fnSetLoading: R,
            fnSetError: h,
            fnSetSuccess: b,
            fnSetStrError: l,
            fnSetStrSuccess: M,
            fnSetElSuccess: Z,
            fnSetElError: k,
            fnSetThrobber: c,
          };
        }
        function W(U, J) {
          J != k_EResultOK ? U.fnSetError(!0) : U.fnSetSuccess(!0);
        }
        function N(U) {
          const {
              strDialogTitle: J,
              state: R,
              closeModal: X,
              strThrobber: h,
            } = U,
            {
              bLoading: g,
              bError: b,
              bSuccess: v,
              strError: l,
              strSuccess: f,
              elSuccess: M,
              elError: $,
              strThrobber: k,
            } = R;
          return b || l || $
            ? (0, n.jsxs)(a.o0, {
                strTitle: J,
                bAlertDialog: !0,
                closeModal: X,
                className: s.SuccessErrorDialog,
                children: [
                  !!l &&
                    (0, n.jsx)("div", {
                      className: s.ErrorStylesWithIcon,
                      children:
                        l || (0, E.we)("#Error_ErrorCommunicatingWithNetwork"),
                    }),
                  !!$ && $,
                ],
              })
            : v || f || M
              ? (0, n.jsx)(a.o0, {
                  strTitle: J,
                  strDescription: f || (0, E.we)("#EventDisplay_Share_Success"),
                  bAlertDialog: !0,
                  closeModal: X,
                  className: s.SuccessErrorDialog,
                  children: (0, n.jsx)(n.Fragment, { children: !!M && M }),
                })
              : (0, n.jsx)(a.o0, {
                  strTitle: J,
                  className: s.SuccessErrorDialog,
                  bProgressDialog: !0,
                  closeModal: () => {},
                  children: (0, n.jsx)(A.t, {
                    string: h || k || (0, E.we)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                });
        }
      },
      82385: (me, ue, r) => {
        "use strict";
        r.d(ue, { AD: () => Ve, He: () => re });
        var n = r(7850),
          T = r(14947),
          a = r(75844),
          s = r(90626),
          t = r(99412),
          E = r(41301),
          A = r(19298),
          q = r(76559),
          W = r(72849),
          N = r(9046),
          U = r(32606),
          J = r(813),
          R = r(7582),
          X = r(34360),
          h = r(10014),
          g = r(94520),
          b = r(93285),
          v = r(90316),
          l = r.n(v),
          f = r(95695),
          M = r.n(f),
          $ = r(13465),
          k = r(36118),
          _ = r(85599),
          Z = r(53107),
          V = r(5552),
          c = r(71742),
          u = r(8323),
          p = r(36707),
          S = r(82734),
          F = r(18210),
          w = r(30096),
          I = r(53113),
          L = r(3166),
          Me = r(17009),
          j = r.n(Me),
          ne = r(90537),
          De = r(56492),
          D = r(88812),
          ee = r(42184),
          le = r(5191),
          Y = r(80684),
          ye = r(7967),
          oe = r(60480),
          pe = r(84676);
        function Pe(x) {
          const { bOn: B } = x;
          return jsx("div", {
            className: B ? sharedstyles.OnIndicator : sharedstyles.OffIndicator,
            children: Localize(B ? "#Dialog_On" : "#Dialog_Off"),
          });
        }
        function ge(x) {
          return CommunityConfig.IS_CREATOR_HOME
            ? jsx(He, { identifier: x.identifier })
            : CommunityConfig.IS_CURATOR
              ? jsx(ce, { identifier: x.identifier })
              : jsx(se, { identifier: x.identifier });
        }
        function He(x) {
          const B = new CSteamID(CommunityConfig.CLANSTEAMID),
            { creatorHome: ae } = useCreatorHome(B.GetAccountID());
          return !ae || !ae.BIsLoaded()
            ? null
            : jsx(Ee, {
                strURL: NavLink(ae.GetCreatorHomeURL("developer")),
                strImgUrl: ae.GetAvatarURLFullSize(),
                strName: ae.GetName(),
              });
        }
        function ce(x) {
          const B = useClanInfoByVanity(CommunityConfig.VANITY_ID);
          return B
            ? jsx(Ee, {
                strURL: NavLink(
                  Config.COMMUNITY_BASE_URL +
                    "groups/" +
                    CommunityConfig.VANITY_ID,
                ),
                strImgUrl: B.avatar_full_url,
                strName: B.group_name,
              })
            : null;
        }
        function se(x) {
          const [B] = useStoreItemCacheApp(CommunityConfig.APPID, {
            include_assets: !0,
            include_release: !0,
          });
          return B
            ? jsx(Ee, {
                strURL: NavLink(B.GetStorePageURL()),
                strImgUrl: B.GetAssets()?.GetSmallCapsuleURL(),
                strName: B.GetName(),
              })
            : null;
        }
        function Ee(x) {
          const { strURL: B, strImgUrl: ae, strName: be } = x;
          return jsx("div", {
            className: sharedstyles.EventDashboardAppCtn,
            children: jsx("div", {
              className: sharedstyles.AppTitle,
              children: jsxs("a", {
                href: B,
                target: Config.IN_CLIENT ? void 0 : "_blank",
                children: [jsx("img", { src: ae }), be],
              }),
            }),
          });
        }
        function xe(x) {
          const { children: B } = x;
          return (0, L.Qn)() && !L.TS.IN_STEAMUI
            ? (0, n.jsx)(ye.Qg, {
                className: f.GamepadOnlyScrollPanel,
                children: B,
              })
            : (0, n.jsx)(n.Fragment, { children: B });
        }
        var ft = r(79590),
          Qe = r(73644),
          nt = r(41032),
          at = r(37589),
          ve = r(20169),
          we = Object.defineProperty,
          ke = Object.getOwnPropertyDescriptor,
          Ue = (x, B, ae, be) => {
            for (
              var de = be > 1 ? void 0 : be ? ke(B, ae) : B,
                Le = x.length - 1,
                Ce;
              Le >= 0;
              Le--
            )
              (Ce = x[Le]) && (de = (be ? Ce(B, ae, de) : Ce(de)) || de);
            return be && de && we(B, ae, de), de;
          };
        const $e = 56,
          tt = 136,
          _e = s.lazy(() =>
            Promise.all([
              r.e(36597),
              r.e(56589),
              r.e(85599),
              r.e(33512),
              r.e(18307),
              r.e(8892),
              r.e(80702),
              r.e(48355),
              r.e(36786),
              r.e(55050),
              r.e(60480),
              r.e(60839),
              r.e(14632),
              r.e(54409),
              r.e(73810),
              r.e(49968),
              r.e(74974),
              r.e(11095),
              r.e(14867),
              r.e(8319),
              r.e(10177),
              r.e(68396),
            ]).then(r.bind(r, 2422)),
          );
        function it(x) {
          const [B, ae] = (0, pe.t7)(x.appid, { include_assets: !0 }),
            [be, de] = (0, J.TB)(x.clanID);
          let Le = "";
          return (
            x.appid
              ? (Le = B?.GetAssets()?.GetCommunityIconURL() || "")
              : x.clanID && (Le = de?.avatar_full_url ?? ""),
            (0, n.jsx)("div", {
              className: (0, p.A)(j().ScrollButton, j().GameArt, j().AnimIn),
              onClick: x.onAppIconClick,
              children: !!Le && (0, n.jsx)("img", { src: Le, alt: "" }),
            })
          );
        }
        let Ve = class extends s.Component {
          m_loader;
          m_refPage = s.createRef();
          m_refContent = s.createRef();
          m_refScroll = s.createRef();
          m_refScrollAnchor = s.createRef();
          m_scrollAnimation = null;
          m_nTouchStartClientY;
          m_nPreviousRenderCount = 0;
          m_nCurrentRenderCount = 0;
          constructor(x) {
            super(x),
              (this.m_loader = new Re(this.props.partnerEventStore)),
              !this.props.bShowOnlyInitialEvent &&
                this.props.initialEvent &&
                this.m_loader.InitAroundEvent(
                  this.props.initialEvent,
                  this.props.additionalParams,
                );
          }
          FindCurrentlyViewedEventIndex() {
            const x = this.m_refScroll.current;
            if (!this.m_refContent.current || !x) return -1;
            let ae = this.m_refContent.current.children,
              be = this.GetScrollTopForComparison(x);
            for (let de = 0; de < ae.length; de++) {
              let Le = ae[de],
                Ce = Le.offsetTop,
                ut = Ce + Le.clientHeight;
              if (Ce <= be && ut > be) return de;
            }
            return -1;
          }
          GetPaddingTop() {
            return this.props.showAppHeader ? tt : $e;
          }
          GetScrollTopForComparison(x) {
            return Math.ceil(x.scrollTop + this.GetPaddingTop() + 24);
          }
          ScrollToEvent(x) {
            let B = this.m_refContent.current;
            if (!B || x < 0 || x >= B.children.length || this.m_scrollAnimation)
              return;
            let ae = B.children[x].offsetTop - this.GetPaddingTop();
            this.ScrollToOffset(ae);
          }
          ScrollToOffset(x) {
            let B = this.m_refScroll.current;
            if (!B) return;
            let ae = {
              msDuration: 500,
              timing: "cubic-in-out",
              onComplete: this.OnScrollComplete,
            };
            (this.m_scrollAnimation = new V.JV(B, { scrollTop: x }, ae)),
              this.m_scrollAnimation.Start();
          }
          ScrollToBottom() {
            this.m_refScroll.current &&
              this.ScrollToOffset(this.m_refScroll.current.scrollHeight);
          }
          ScrollToNextEvent() {
            let x = this.m_loader.GetEvents(),
              B = this.FindCurrentlyViewedEventIndex() + 1;
            if (B >= x.length) {
              this.ScrollToBottom();
              return;
            }
            this.ScrollToEvent(B),
              B == x.length - 1 && this.m_loader.LoadMoreAtEnd();
          }
          ScrollToPrevEvent() {
            let x = this.FindCurrentlyViewedEventIndex(),
              B = x - 1;
            if (B < 0) {
              this.ScrollToOffset(0);
              return;
            }
            let ae = this.m_refContent.current,
              be = this.m_refScroll.current;
            if (ae && be) {
              let de = ae.children[x],
                Le = de.offsetTop,
                Ce = Le + de.clientHeight,
                ut = this.GetScrollTopForComparison(be);
              (ut = ut - (Ce - Le) * 0.3), Le <= ut && (B = x);
            }
            this.ScrollToEvent(B);
          }
          OnScrollComplete() {
            this.m_scrollAnimation = null;
          }
          Close() {
            if (this.props.closeModal) {
              this.props.closeModal();
              return;
            }
          }
          OnBackgroundClick(x) {
            x.currentTarget == x.target && this.Close();
          }
          OnKeyDown(x) {
            x.keyCode == E.zV && this.Close();
          }
          OnScroll(x) {
            if (this.props.bShowOnlyInitialEvent) return;
            let B = this.m_refScroll.current;
            if (!B) return;
            let ae = B.clientHeight;
            B.scrollHeight - (B.scrollTop + ae) <= ae &&
              this.m_loader.LoadMoreAtEnd(),
              B.scrollTop <= ae && this.m_loader.LoadMoreAtBeginning();
          }
          getSnapshotBeforeUpdate(x) {
            let B = this.m_nCurrentRenderCount != this.m_nPreviousRenderCount;
            if (
              ((this.m_nPreviousRenderCount = this.m_nCurrentRenderCount), !B)
            )
              return null;
            let ae = this.m_refScroll.current;
            if (!ae || !this.m_refScrollAnchor.current) return null;
            let be = this.m_refScrollAnchor.current.GetDOM();
            return be ? be.offsetTop - ae.scrollTop : null;
          }
          OnTouchStart(x) {
            x.touches.length == 1 &&
              (this.m_nTouchStartClientY = x.touches[0].clientY);
          }
          OnTouchMove(x) {
            if (!this.m_refScroll.current || x.touches.length == 0) return;
            let B = 0;
            this.m_nTouchStartClientY !== void 0 &&
              (B = this.m_nTouchStartClientY - x.touches[0].clientY),
              this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(x, B);
          }
          OnWheel(x) {
            this.SuppressUnwantedScrollEventsBecauseSafariIsDumb(x, x.deltaY);
          }
          SuppressUnwantedScrollEventsBecauseSafariIsDumb(x, B) {
            const ae = this.m_refScroll.current;
            if (!ae) return;
            const be = S.kD(x.target) && S.id(ae, x.target),
              de = B < 0 && ae.scrollTop < 1,
              Le = ae.scrollHeight - ae.scrollTop <= ae.clientHeight,
              Ce = B > 0 && Le;
            (!be || de || Ce) && x.cancelable && x.preventDefault();
          }
          SetGlobalHeaderHidden(x) {
            const B = document.getElementsByClassName("responsive_header");
            (0, c.wT)(B.length <= 1, "Must have at most one responsive_header"),
              B.length >= 1 && (B[0].style.display = x ? "none" : "");
          }
          SetFooterPinnedToBottom(x) {
            const B = document.getElementById("footer");
            B && (B.style.position = x ? "absolute" : "");
          }
          componentDidMount() {
            const x = this.m_refScroll.current;
            x && !S.id(x, x.ownerDocument.activeElement) && x.focus();
            const B = this.m_refPage.current;
            B &&
              (B.addEventListener("touchstart", this.OnTouchStart),
              B.addEventListener("touchmove", this.OnTouchMove, {
                passive: !1,
              }),
              B.addEventListener("wheel", this.OnWheel, { passive: !1 })),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!0),
              this.SetFooterPinnedToBottom(!0);
          }
          componentDidUpdate(x, B, ae) {
            if (ae === null) return;
            const be = this.m_refScroll.current;
            if (!be) return;
            S.id(be, be.ownerDocument.activeElement) || be.focus();
            let de = this.m_refScrollAnchor.current
              ? this.m_refScrollAnchor.current.GetDOM()
              : null;
            de && (be.scrollTop = de.offsetTop - ae);
          }
          componentWillUnmount() {
            const x = this.m_refPage.current;
            x &&
              (x.removeEventListener("touchstart", this.OnTouchStart),
              x.removeEventListener("touchmove", this.OnTouchMove),
              x.removeEventListener("wheel", this.OnWheel)),
              this.props.showAppHeader && this.SetGlobalHeaderHidden(!1),
              this.SetFooterPinnedToBottom(!1);
          }
          render() {
            const { initialEvent: x, bShowOnlyInitialEvent: B } = this.props,
              ae = !x,
              be = x ? (B ? [x] : this.m_loader.GetEvents()) : [],
              de = [];
            let Le = this.props.appid,
              Ce = this.props.clanSteamID?.GetAccountID();
            for (const ut of be) {
              const rt = x !== void 0 && ut.GID == x.GID,
                It = rt;
              de.push(
                (0, n.jsx)(
                  re,
                  {
                    ref: rt ? this.m_refScrollAnchor : null,
                    event: ut,
                    emoticonStore: this.props.emoticonStore,
                    partnerEventStore: this.props.partnerEventStore,
                    disableReadTracking: rt,
                    fnFilterImageURLsForKnownFailures:
                      this.props.fnFilterImageURLsForKnownFailures,
                    fnImageFailureCallback: this.props.fnImageFailureCallback,
                    bDisableBroadcastPlayer: !It,
                    className: this.props.eventClassName,
                  },
                  ut.GID,
                ),
              ),
                Le == null && (Le = ut.appid),
                Ce == null && (Ce = ut.clanSteamID.GetAccountID());
            }
            return (
              (this.m_nCurrentRenderCount = de.length),
              (0, n.jsxs)(A.Z, {
                onCancelButton: this.props.closeModal,
                className: j().AppPartnerEventsPage,
                ref: this.m_refPage,
                children: [
                  this.props.showAppHeader &&
                    (0, n.jsx)(ee.v, { appId: Le ?? 0, clanId: Ce ?? 0 }),
                  (0, n.jsx)(A.Z, {
                    className: (0, p.A)(
                      j().AppPartnerEventsBody,
                      j().EndlessScroll,
                    ),
                    ref: this.m_refScroll,
                    onScroll: this.OnScroll,
                    onClick: this.OnBackgroundClick,
                    tabIndex: -1,
                    onKeyDown: this.OnKeyDown,
                    scrollIntoViewType: ve.Yo.NoTransformSparseContent,
                    children: ae
                      ? (0, n.jsx)("div", {
                          className: j().NoEvents,
                          children: (0, F.we)("#EventDisplay_NoEventsToSee"),
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              className: (0, p.A)(
                                j().ControlSection,
                                !this.props.onAppIconClick && j().NoGameLink,
                                B && j().NoScrollArrows,
                              ),
                              children: (0, n.jsx)("div", {
                                className: j().ControlSectionWidth,
                                children: (0, n.jsxs)("div", {
                                  className: j().ControlSectionRightSide,
                                  children: [
                                    !!this.props.closeModal &&
                                      (0, n.jsx)("div", {
                                        className: (0, p.A)(
                                          j().CloseButton,
                                          j().AnimIn,
                                        ),
                                        onClick: this.Close,
                                        children: (0, n.jsx)(k.sED, {}),
                                      }),
                                    !B &&
                                      (0, n.jsx)("div", {
                                        className: (0, p.A)(
                                          j().ScrollButton,
                                          j().Up,
                                          j().AnimIn,
                                        ),
                                        onClick: this.ScrollToPrevEvent,
                                        children: (0, n.jsx)(k.V5W, {
                                          angle: 0,
                                        }),
                                      }),
                                    !B &&
                                      (0, n.jsx)("div", {
                                        className: (0, p.A)(
                                          j().ScrollButton,
                                          j().Down,
                                          j().AnimIn,
                                        ),
                                        onClick: this.ScrollToNextEvent,
                                        children: (0, n.jsx)(k.V5W, {
                                          angle: 180,
                                        }),
                                      }),
                                    this.props.onAppIconClick &&
                                      (0, n.jsx)(it, {
                                        appid: Le,
                                        clanID: Ce ?? 0,
                                        onAppIconClick:
                                          this.props.onAppIconClick,
                                      }),
                                  ],
                                }),
                              }),
                            }),
                            !B &&
                              (0, n.jsx)(G, {
                                loader: this.m_loader,
                                location: "top",
                              }),
                            (0, n.jsx)("div", {
                              ref: this.m_refContent,
                              className: (0, p.A)(
                                j().AppPartnerEventsContainer,
                                !this.props.onAppIconClick && j().NoGameLink,
                              ),
                              children: de,
                            }),
                            !B &&
                              (0, n.jsx)(G, {
                                loader: this.m_loader,
                                location: "bottom",
                              }),
                          ],
                        }),
                  }),
                ],
              })
            );
          }
        };
        Ue([w.oI], Ve.prototype, "ScrollToNextEvent", 1),
          Ue([w.oI], Ve.prototype, "ScrollToPrevEvent", 1),
          Ue([w.oI], Ve.prototype, "OnScrollComplete", 1),
          Ue([w.oI], Ve.prototype, "Close", 1),
          Ue([w.oI], Ve.prototype, "OnBackgroundClick", 1),
          Ue([w.oI], Ve.prototype, "OnKeyDown", 1),
          Ue([w.oI], Ve.prototype, "OnScroll", 1),
          Ue([w.oI], Ve.prototype, "OnTouchStart", 1),
          Ue([w.oI], Ve.prototype, "OnTouchMove", 1),
          Ue([w.oI], Ve.prototype, "OnWheel", 1),
          (Ve = Ue([a.PA], Ve));
        const G = (0, a.PA)((x) => {
            let B = x.loader.GetNewerState(),
              ae = x.loader.GetOlderState();
            return B == 2 && ae == 2
              ? null
              : (x.location == "top" ? B : ae) == 2
                ? (0, n.jsx)("div", {
                    className: j().DirectionState,
                    children: (0, n.jsx)(_.t, {
                      position: "center",
                      string: (0, F.we)("#Loading"),
                    }),
                  })
                : null;
          }),
          re = s.forwardRef(function (B, ae) {
            const be = (0, L.Qn)(),
              [de, Le] = (0, pe.t7)(B.event.appid, { include_assets: !0 }),
              Ce = (0, nt.Zj)(B.event.appid),
              ut = (0, ne.Y)();
            return (0, n.jsx)(Se, {
              ref: ae,
              ...B,
              bInGamepadUI: be,
              bShouldMaskImages: Ce,
              storeItem: de,
              tracker: ut,
            });
          });
        let Se = class extends s.Component {
          m_refContent = s.createRef();
          m_sendReadInfo = new u.LU();
          m_bSentRead = !1;
          OnEnterVisible() {
            if (this.m_bSentRead || this.m_sendReadInfo.IsScheduled()) return;
            const x = 750,
              B = () => {
                this.props.tracker.RecordEventRead(this.props.event, W.Tc.ot),
                  (this.m_bSentRead = !0);
              };
            this.m_sendReadInfo.Schedule(x, B);
          }
          OnLeaveVisible() {
            this.m_sendReadInfo.Cancel();
          }
          GetDOM() {
            return this.m_refContent.current;
          }
          render() {
            const {
                event: x,
                langOverride: B,
                partnerEventStore: ae,
                emoticonStore: be,
                className: de,
                additionalTypeAndDateElement: Le,
                headerClassnames: Ce,
                isPreview: ut,
                bShouldMaskImages: rt,
                storeItem: It,
              } = this.props,
              st = B || (0, t.sfN)(L.TS.LANGUAGE),
              gt = x.GetDescriptionWithFallback(st) || "",
              Mt = Ce,
              Bt = "300px",
              bt = x.GetCategoryAsString(),
              yt = x.type;
            let Q = "";
            x.appid
              ? (Q = It?.GetName() || "")
              : x.clanSteamID &&
                (Q =
                  J.ac.GetClanInfoByClanAccountID(x.clanSteamID.GetAccountID())
                    ?.group_name ?? "");
            const fe = R.HD.GetTimeNowWithOverride(),
              Ae =
                yt !== t.uYK && fe < x.GetStartTimeAndDateUnixSeconds() && !ut;
            let Fe = null;
            return (
              x.jsondata.bSaleEnabled &&
                x.jsondata.sale_vanity_id &&
                (Fe = (0, oe.n4)(x)),
              (0, n.jsx)(xe, {
                children: (0, n.jsxs)("div", {
                  ref: this.m_refContent,
                  className: (0, p.A)(
                    de,
                    j().PartnerEvent,
                    l().InLibraryView,
                    Mt == "editor" ? l().InEditor : "",
                  ),
                  children: [
                    (0, n.jsx)(he, { ...this.props, eLanguage: st }),
                    (0, n.jsx)("div", {
                      className: l().LibraryEventTitleContainer,
                      children: (0, n.jsxs)("div", {
                        className: l().EventDetailTitleContainer,
                        children: [
                          this.props.headerElement,
                          (0, n.jsxs)("div", {
                            className: (0, p.A)(
                              j().EventTypeAndTimeRow,
                              Ae && j().WithReminder,
                            ),
                            children: [
                              (0, n.jsxs)("div", {
                                className: j().TimeandPostedBy,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: j().EventType,
                                    children: bt,
                                  }),
                                  (0, n.jsxs)("span", {
                                    className: j().PostedBy,
                                    children: [
                                      " ",
                                      (0, F.we)("#EventDisplay_PostedBy"),
                                      Q,
                                      " ",
                                    ],
                                  }),
                                  (0, n.jsx)(U.O, {
                                    event: x,
                                    className: l().EventDetailTimeInfo,
                                  }),
                                ],
                              }),
                              Ae &&
                                !ut &&
                                (0, n.jsx)("div", {
                                  className: j().ReminderContainer,
                                  children: (0, n.jsx)(le.j, {
                                    eventModel: x,
                                    lang: st,
                                    bExpandLeft: !0,
                                  }),
                                }),
                              !ut && Le,
                            ],
                          }),
                          !this.props.disableReadTracking &&
                            !ut &&
                            (0, n.jsx)(at.Y, {
                              onEnter: this.OnEnterVisible,
                              onLeave: this.OnLeaveVisible,
                              options: { rootMargin: `0px 0px -${Bt} 0px` },
                            }),
                          this.props.bInGamepadUI
                            ? (0, n.jsx)("div", {
                                className: l().EventDetailTitle,
                                children: x.GetNameWithFallback(st),
                              })
                            : (0, n.jsx)(De.tj, {
                                eventModel: x,
                                route: De.PH.k_eView,
                                className: l().EventDetailTitle,
                                children: x.GetNameWithFallback(st),
                              }),
                          x.BHasSubTitle(st) &&
                            (0, n.jsx)("div", {
                              className: (0, p.A)(
                                l().EventDetailsSubTitle,
                                j().LibraryViewSubtitle,
                              ),
                              children: x.GetSubTitle(st),
                            }),
                          (0, n.jsx)("div", {
                            className: l().EventDetailUserType,
                          }),
                        ],
                      }),
                    }),
                    !!(
                      x.BEventCanShowBroadcastWidget() &&
                      !this.props.bDisableBroadcastPlayer
                    ) &&
                      (0, n.jsx)("div", {
                        className: l().EventBroadcastCtn,
                        children: (0, n.jsx)(s.Suspense, {
                          fallback: null,
                          children: (0, n.jsx)(_e, { event: this.props.event }),
                        }),
                      }),
                    x.BHasTag("steam_award_nomination_request") &&
                      (0, n.jsx)(b.EventDisplaySteamAwardNomination, {
                        event: x,
                        lang: st,
                      }),
                    x.BHasTag("steam_award_vote_request") &&
                      (0, n.jsx)(b.WinterSaleSteamAwardVoteWrapper, {
                        appID: x.appid,
                        bIsEventActionEnabled: x.BIsEventActionEnabled(),
                        voteCategories: x.GetSteamAwardNomineeCategories(),
                      }),
                    (0, n.jsxs)("div", {
                      className: l().LibraryEventBodyContainer,
                      children: [
                        (0, n.jsxs)("div", {
                          className: (0, p.A)(
                            l().EventDetailsBody,
                            j().EventDetailsBody,
                            rt && l().MaskImages,
                          ),
                          onContextMenu: L.TS.IN_CLIENT ? X.aE : void 0,
                          children: [
                            (0, n.jsx)(g.fh, { text: gt, event: x }),
                            (0, n.jsx)("span", { className: M().Clear }),
                          ],
                        }),
                        (0, n.jsx)(Y._, { event: this.props.event }),
                        !!x.jsondata.read_more_link &&
                          (0, n.jsx)("div", {
                            className: (0, p.A)(j().ReadMoreCnt),
                            children: (0, n.jsx)(Z.uU, {
                              className: (0, p.A)(M().Button),
                              href: x.jsondata.read_more_link,
                              children: (0, F.we)(
                                "#EventEmail_Button_ClickForMoreDetails",
                              ),
                            }),
                          }),
                        Fe &&
                          x.GID &&
                          (0, n.jsxs)("div", {
                            className: (0, p.A)(j().ReadMoreCnt),
                            children: [
                              (0, n.jsx)(ft.m, { gidEvent: x.GID }),
                              (0, n.jsx)("a", {
                                className: (0, p.A)(M().Button, "LinkButton"),
                                href: (0, I.k2)(Fe),
                                children: (0, F.we)(
                                  "#Event_Button_VisitSalePage",
                                ),
                              }),
                            ],
                          }),
                        (0, n.jsx)(Qe.lS, { appid: x.appid }),
                      ],
                    }),
                    !ut &&
                      (0, n.jsx)(h.F, { eventModel: x, emoticonStore: be }),
                  ],
                }),
              })
            );
          }
        };
        Ue([w.oI], Se.prototype, "OnEnterVisible", 1),
          Ue([w.oI], Se.prototype, "OnLeaveVisible", 1),
          (Se = Ue([a.PA], Se));
        function he(x) {
          const {
              event: B,
              fnFilterImageURLsForKnownFailures: ae,
              fnImageFailureCallback: be,
              eLanguage: de,
              bShouldMaskImages: Le,
            } = x,
            Ce = B.BImageNeedScreenshotFallback("background", de),
            ut = B.type;
          let rt = (0, D.WC)(B, "background", de, N.wI.background_main, !Ce);
          return (
            ae && rt && (rt = ae(rt)),
            (0, n.jsxs)(n.Fragment, {
              children: [
                ut != t.Fwr &&
                  !Ce &&
                  rt &&
                  (0, n.jsx)($.c, {
                    className: (0, p.A)(
                      l().EventCoverImageBackground,
                      Le && l().MaskImages,
                    ),
                    rgSources: rt,
                    onIncrementalError: (It, st, gt) => be && be(st),
                  }),
                rt &&
                  rt.length > 0 &&
                  (0, n.jsx)($.c, {
                    className: l().EventBackgroundBlur,
                    rgSources: rt,
                    onIncrementalError: (It, st, gt) => be && be(st),
                  }),
              ],
            })
          );
        }
        var Xe = ((x) => (
          (x[(x.Idle = 1)] = "Idle"),
          (x[(x.Loading = 2)] = "Loading"),
          (x[(x.EndOfContent = 3)] = "EndOfContent"),
          x
        ))(Xe || {});
        class Re {
          k_nMaxPerDirection = 3;
          m_nAppID = 0;
          m_clanSteamID = new q.b();
          m_partnerEventStore;
          m_additionalParams;
          m_rgEvents = [];
          m_eOlderDirection = 1;
          m_eNewerDirection = 1;
          constructor(B) {
            (0, T.Gn)(this), (this.m_partnerEventStore = B);
          }
          GetEvents() {
            return this.m_rgEvents;
          }
          GetAppID() {
            return this.m_nAppID;
          }
          GetOlderState() {
            return this.m_eOlderDirection;
          }
          GetNewerState() {
            return this.m_eNewerDirection;
          }
          async InitAroundEvent(B, ae) {
            const be = this.m_partnerEventStore;
            (this.m_nAppID = B.appid),
              (this.m_clanSteamID = B.clanSteamID),
              (this.m_rgEvents = []),
              (this.m_eOlderDirection = 2),
              (this.m_eNewerDirection = 2),
              (this.m_additionalParams = ae),
              this.m_rgEvents.push(B);
            let de;
            try {
              de = await be.LoadAdjacentPartnerEventsByEvent(
                B,
                this.m_clanSteamID,
                this.m_nAppID,
                this.k_nMaxPerDirection,
                this.k_nMaxPerDirection,
                this.m_additionalParams,
              );
            } catch {}
            (0, T.h5)(() => {
              if (!de || de.length == 0) {
                (this.m_eOlderDirection = 3), (this.m_eNewerDirection = 3);
                return;
              }
              let Le = de.findIndex((rt) => rt.GID == B.GID),
                Ce = Le,
                ut = Le >= 0 ? de.length - Le - 1 : 0;
              (this.m_eNewerDirection = Ce >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_eOlderDirection =
                  ut >= this.k_nMaxPerDirection ? 1 : 3),
                (this.m_rgEvents = de);
            });
          }
          async LoadMoreAtEnd() {
            if (this.m_eOlderDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let B = this.m_rgEvents[this.m_rgEvents.length - 1];
            this.m_eOlderDirection = 2;
            let ae;
            try {
              ae =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  B,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  0,
                  this.k_nMaxPerDirection,
                  this.m_additionalParams,
                );
            } catch {}
            (0, T.h5)(() => {
              if (!ae) {
                this.m_eOlderDirection = 1;
                return;
              }
              const be = new Set(
                this.m_rgEvents
                  .map((de) => de.GID)
                  .filter((de) => de !== void 0),
              );
              for (let de of ae) {
                const Le = de.GID;
                Le && !be.has(Le) && (this.m_rgEvents.push(de), be.add(Le));
              }
              this.m_eOlderDirection =
                ae.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
          async LoadMoreAtBeginning() {
            if (this.m_eNewerDirection != 1 || this.m_rgEvents.length == 0)
              return;
            let B = this.m_rgEvents[0];
            this.m_eNewerDirection = 2;
            let ae;
            try {
              ae =
                await this.m_partnerEventStore.LoadAdjacentPartnerEventsByEvent(
                  B,
                  this.m_clanSteamID,
                  this.m_nAppID,
                  this.k_nMaxPerDirection,
                  0,
                );
            } catch {}
            (0, T.h5)(() => {
              if (!ae) {
                this.m_eNewerDirection = 1;
                return;
              }
              const be = new Set(
                this.m_rgEvents
                  .map((de) => de.GID)
                  .filter((de) => de !== void 0),
              );
              for (let de of ae.reverse()) {
                const Le = de.GID;
                Le && !be.has(Le) && (this.m_rgEvents.unshift(de), be.add(Le));
              }
              this.m_eNewerDirection =
                ae.length >= this.k_nMaxPerDirection ? 1 : 3;
            });
          }
        }
        Ue([T.sH.shallow], Re.prototype, "m_rgEvents", 2),
          Ue([T.sH], Re.prototype, "m_eOlderDirection", 2),
          Ue([T.sH], Re.prototype, "m_eNewerDirection", 2);
      },
      33752: (me, ue, r) => {
        "use strict";
        r.d(ue, { W: () => F });
        var n = r(7850),
          T = r(26589),
          a = r(40358),
          s = r(75844),
          t = r(90626),
          E = r(76559),
          A = r(813),
          q = r(6469),
          W = r(10142),
          N = r(16412),
          U = r(36118),
          J = r(53107),
          R = r(47689),
          X = r(36707),
          h = r(18210),
          g = r(53113),
          b = r(3166),
          v = r(17009),
          l = r.n(v),
          f = r(80702),
          M = r(95414),
          $ = r(73259);
        function k(w) {
          const {
              appId: I,
              clanId: L,
              strCapsuleUrl: Me,
              strGroupTitle: j,
              strExtraBannerGroupStyle: ne,
              actions: De,
            } = w,
            D = I !== $.DU,
            ee = t.useMemo(() => (I ? { appid: I } : { creatorid: L }), [I, L]),
            le = (0, n.jsx)("img", { className: l().AppBannerLogo, src: Me });
          return (0, b.Qn)()
            ? null
            : (0, n.jsxs)("div", {
                className: l().AppBannerCtn,
                children: [
                  (0, n.jsx)("div", {
                    className: l().AppBannerBackground,
                    style: { backgroundImage: `url(${Me})` },
                  }),
                  (0, n.jsxs)("div", {
                    className: (0, X.A)(l().AppBannerGroup, ne),
                    children: [
                      D
                        ? I
                          ? (0, n.jsx)(f.Q, {
                              id: ee,
                              className: l().AppBannerLogoCtn,
                              hoverProps: {
                                direction: "overlay",
                                style: { minWidth: "320px" },
                              },
                              children: le,
                            })
                          : (0, n.jsx)(M.u, {
                              id: ee,
                              hoverClassName: l().AppBannerLogoCtn,
                              children: le,
                            })
                        : (0, n.jsxs)("div", {
                            className: l().AppBannerLogoCtn,
                            children: [le, " "],
                          }),
                      (0, n.jsxs)("div", {
                        className: l().AppBannerTitle,
                        children: [
                          j,
                          (0, n.jsx)("div", {
                            className: l().NewsHubSubTitle,
                            children: (0, h.we)(
                              "#EventDisplay_NewsHubSubtitle",
                            ),
                          }),
                        ],
                      }),
                      D &&
                        (0, n.jsx)("div", {
                          className: l().AppBannerLinks,
                          children: De,
                        }),
                    ],
                  }),
                ],
              });
        }
        function _(w) {
          const { appid: I, clanAccountID: L } = w,
            Me = React.useMemo(() => (I ? { appid: I } : void 0), [I]),
            { data: j } = useStoreItemDefaultInfo(Me),
            { data: ne } = useStoreItemAssets(Me),
            { data: De } = useClanInfoByAccountID(I ? void 0 : L),
            { bIsOwned: D } = useIsStoreItemOwned(Me),
            ee = I
              ? ne
                ? StoreAssetURL(ne, "header")
                : void 0
              : De?.avatar_full_url,
            le = I ? j?.name : De?.group_name;
          return jsx(k, {
            appId: I ?? 0,
            clanId: L,
            strCapsuleUrl: ee,
            strGroupTitle: le,
            strExtraBannerGroupStyle: I ? void 0 : styles.ClanBanner,
            actions: jsxs(Fragment, {
              children: [
                !!(I && !D) &&
                  jsx("div", {
                    className: styles.HeaderWishlistButton,
                    children: jsx(WishlistButton, {
                      appid: I,
                      bIsFree: !!j?.is_free,
                      bIsComingSoon: !!j?.is_coming_soon,
                      className: classnames(
                        styles.ActionButton,
                        styles.WishlistBtnShort,
                      ),
                    }),
                  }),
                jsx("div", {
                  className: styles.HeaderFollowButton,
                  children: I
                    ? jsx(AppFollowButton, {
                        appid: I,
                        className: styles.HeaderButtonDark,
                      })
                    : jsx(CuratorFollowButton, {
                        clanAccountID: L,
                        className: styles.HeaderButtonDark,
                      }),
                }),
              ],
            }),
          });
        }
        var Z = r(56492),
          V = r(72147),
          c = r(64774);
        function u(w, I) {
          const [L, Me] = (0, t.useState)({}),
            j = (0, R.m)("useEventHeaderData");
          return (
            (0, t.useEffect)(() => {
              if (w)
                W.A.Get()
                  .QueueAppRequest(w, {
                    include_assets: !0,
                    include_screenshots: !0,
                  })
                  .then(() => {
                    const ne = W.A.Get().GetApp(w);
                    ne &&
                      !j?.token?.reason &&
                      Me({
                        strCapsuleUrl: ne.GetAssets()?.GetHeaderURL(),
                        strGroupTitle: ne.GetName(),
                        strStoreURL:
                          (b.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          ne.GetStorePageURL(),
                        strCommunityURL:
                          (b.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          ne.GetCommunityPageURL(),
                        strForumURL:
                          (b.TS.IN_CLIENT ? "steam://openurl/" : "") +
                          ne.GetCommunityDiscussionForumsURL(),
                      });
                  });
              else if (I) {
                const ne = E.b.InitFromClanID(I);
                A.ac.LoadClanInfoForClanSteamID(ne).then((De) => {
                  !De ||
                    j?.token?.reason ||
                    Me({
                      strCapsuleUrl: De.avatar_full_url,
                      strGroupTitle: De.group_name,
                      strStoreURL:
                        (b.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        b.TS.STORE_BASE_URL +
                        "curator/" +
                        I +
                        "/",
                      strCommunityURL:
                        (b.TS.IN_CLIENT ? "steam://openurl/" : "") +
                        b.TS.COMMUNITY_BASE_URL +
                        "gid/" +
                        ne.ConvertTo64BitString(),
                      strExtraBannerGroupStyle: l().ClanBanner,
                    });
                });
              }
            }, [w, j?.token?.reason, I]),
            L
          );
        }
        const p = {};
        function S(w) {
          const { appId: I, clanId: L, bShowRSSFeed: Me } = w,
            { strStoreURL: j, strCommunityURL: ne, strForumURL: De } = u(I, L),
            D = (0, b.Y2)(),
            ee =
              b.TS.STORE_BASE_URL +
              "feeds/" +
              (0, Z.LJ)() +
              (I ? "/app/" + I : "/group/" + L) +
              "/?cc=" +
              b.TS.COUNTRY +
              "&l=" +
              b.TS.LANGUAGE,
            { data: le } = (0, T.hM)(L),
            Y = !!(le?.can_edit || le?.support_user),
            ye = q.Fm.Get().BOwnsApp(I),
            oe = (0, t.useMemo)(() => {
              const pe = [];
              return (
                b.TS.IN_CLIENT &&
                  ye &&
                  pe.push({
                    label: (0, h.we)("#EventDisplay_ViewInLibrary_ExtraShort"),
                    data: "steam://nav/games/details/" + I,
                  }),
                j &&
                  pe.push({
                    label: (0, h.we)("#EventDisplay_ViewStorePage_ExtraShort"),
                    data: (0, g.k2)(j),
                  }),
                D ||
                  (ne &&
                    pe.push({
                      label: (0, h.we)(
                        "#EventDisplay_ViewCommunityPage_ExtraShort",
                      ),
                      data: (0, g.k2)(ne),
                    }),
                  De &&
                    pe.push({
                      label: (0, h.we)("#EventDisplay_ViewForum_ExtraShort"),
                      data: (0, g.k2)(De),
                    }),
                  Me &&
                    pe.push({
                      label: (0, n.jsxs)("div", {
                        className: l().RssRow,
                        children: [
                          (0, n.jsx)(U.ZPc, {}),
                          (0, h.we)("#EventDisplay_RSSFeed_ExtraShort"),
                        ],
                      }),
                      data: ee,
                    })),
                Y &&
                  pe.push({
                    label: (0, h.we)("#EventDisplay_Admin_ExtraShort"),
                    data: (0, Z.Hx)(I, E.b.InitFromClanID(L), "admin"),
                  }),
                pe
              );
            }, [ye, j, D, Y, ne, De, Me, ee, I, L]);
          return (0, n.jsx)(N.m, {
            strDefaultLabel: (0, h.we)(
              "#EventDisplay_LinksDropDown_ExtraShort",
            ),
            strClassName: l().AppBannerLinkDD,
            strDropDownButtonClassName: l().AppBannerLinkDDButton,
            strDropDownMenuCtnClass: l().AppBannerLinkDDContainer,
            contextMenuPositionOptions: { bMatchWidth: !1 },
            arrowClassName: l().DDButtonArrow,
            rgOptions: oe,
            onChange: (pe, Pe, ge) => {
              ge && (0, J.EP)(ge, pe.data);
            },
          });
        }
        const F = (0, s.PA)((w) => {
          const { appId: I, clanId: L } = w,
            {
              strCapsuleUrl: Me,
              strGroupTitle: j,
              strExtraBannerGroupStyle: ne,
            } = u(I, L),
            De = (0, t.useMemo)(
              () => (I ? { appid: I } : { creatorid: L }),
              [I, L],
            ),
            { data: D } = (0, a.J$)(De),
            ee = q.Fm.Get().BOwnsApp(I);
          return (0, n.jsx)(k, {
            appId: I,
            clanId: L,
            strCapsuleUrl: Me,
            strGroupTitle: j,
            strExtraBannerGroupStyle: ne,
            actions: (0, n.jsxs)(n.Fragment, {
              children: [
                !!(!ee && I) &&
                  (0, n.jsx)("div", {
                    className: l().HeaderWishlistButton,
                    children: (0, n.jsx)(c._, {
                      appid: I,
                      bIsFree: !!D?.is_free,
                      bIsComingSoon: !!D?.is_coming_soon,
                      className: (0, X.A)(
                        l().ActionButton,
                        l().WishlistBtnShort,
                      ),
                    }),
                  }),
                (0, n.jsx)("div", {
                  className: l().HeaderFollowButton,
                  children: I
                    ? (0, n.jsx)(V.do, {
                        appid: I,
                        className: l().HeaderButtonDark,
                      })
                    : (0, n.jsx)(V.of, {
                        clanAccountID: L,
                        className: l().HeaderButtonDark,
                      }),
                }),
                (0, n.jsx)(S, { ...w }),
              ],
            }),
          });
        });
      },
      91424: (me, ue, r) => {
        "use strict";
        r.d(ue, { H: () => b, Y: () => g });
        var n = r(7850),
          T = r(75844),
          a = r(90626),
          s = r(53025),
          t = r(77495),
          E = r(58483),
          A = r(82385),
          q = r(88003),
          W = r(30096),
          N = r(19332),
          U = r.n(N),
          J = Object.defineProperty,
          R = Object.getOwnPropertyDescriptor,
          X = (v, l, f, M) => {
            for (
              var $ = M > 1 ? void 0 : M ? R(l, f) : l, k = v.length - 1, _;
              k >= 0;
              k--
            )
              (_ = v[k]) && ($ = (M ? _(l, f, $) : _($)) || $);
            return M && $ && J(l, f, $), $;
          };
        function h(v) {
          const { event: l, closeModal: f } = v,
            M = (0, E.LJ)();
          return (0, n.jsx)(A.AD, {
            initialEvent: l,
            bShowOnlyInitialEvent: !0,
            partnerEventStore: t.O3,
            emoticonStore: M,
            showAppHeader: !0,
            closeModal: f,
          });
        }
        function g(v, l) {
          (0, q.pg)((0, n.jsx)(h, { event: v }), l);
        }
        let b = class extends a.Component {
          m_refFocus = a.createRef();
          componentDidMount() {
            this.props.fnClose &&
              (document.addEventListener("keydown", this.escFunction, !1),
              this.m_refFocus.current && this.m_refFocus.current.focus());
          }
          componentWillUnmount() {
            this.props.fnClose &&
              document.removeEventListener("keydown", this.escFunction, !1);
          }
          escFunction(v) {
            const { fnClose: l } = this.props;
            v.keyCode === 27 && l && l();
          }
          OnBackgroundClick(v) {
            v.currentTarget == v.target && this.props.fnClose();
          }
          render() {
            const { event: v, langOverride: l, isPreview: f } = this.props;
            return (0, n.jsx)("div", {
              ref: this.m_refFocus,
              className: N.Main,
              onClick: this.OnBackgroundClick,
              children: (0, n.jsx)(E.sU, {
                children: (M) =>
                  (0, n.jsx)(
                    A.He,
                    {
                      event: v,
                      emoticonStore: M,
                      partnerEventStore: s.$.Get(),
                      langOverride: l,
                      isPreview: f,
                      bDisableBroadcastPlayer: !1,
                    },
                    v.GID,
                  ),
              }),
            });
          }
        };
        X([W.oI], b.prototype, "escFunction", 1),
          X([W.oI], b.prototype, "OnBackgroundClick", 1),
          (b = X([T.PA], b));
      },
      10014: (me, ue, r) => {
        "use strict";
        r.d(ue, { W: () => p, F: () => S });
        var n = r(7850),
          T = r(65946),
          a = r(813),
          s = r(47875),
          t = r(88003),
          E = r(82734),
          A = r(18210),
          q = r(13854),
          W = r(53113),
          N = r(3166),
          U = r(96538),
          J = r(19298),
          R = r(64868),
          X = r(14256),
          h = r.n(X),
          g = r(95695),
          b = r.n(g),
          v = r(36118),
          l = r(36707),
          f = r(56492),
          M = r(91778);
        function $(F) {
          const { eventModel: w, emoticonStore: I } = F,
            [L, Me, j] = (0, R.uD)(),
            ne = (0, f.T7)(w);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)(J.Z, {
                focusable: !0,
                className: (0, l.A)(b().Button, b().Icon, h().DiscussionButton),
                onActivate: Me,
                children: [
                  (0, n.jsx)(v.SYj, { className: h().ShareIcon }),
                  (0, n.jsx)("span", {
                    className: h().DiscussionButtonText,
                    children: (0, A.we)("#Button_Share"),
                  }),
                ],
              }),
              (0, n.jsx)(M.k, {
                eventModel: w,
                strEventLink: ne ?? "",
                bActive: L,
                closeModal: j,
                emoticonStore: I,
              }),
            ],
          });
        }
        var k = r(68988),
          _ = r(85385),
          Z = r(24660),
          V = r(19730);
        function c(F) {
          const {
            nVoteCount: w,
            nCommentCount: I,
            myVote: L,
            onVote: Me,
            strDiscussionURL: j,
            onDiscussionUnavailable: ne,
            bShowDiscussion: De,
            repost: D,
            share: ee,
          } = F;
          return (0, n.jsxs)(J.Z, {
            className: h().Container,
            "flow-children": "row",
            focusable: !1,
            children: [
              (0, n.jsxs)("div", {
                className: h().InnerContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: h().VoteContainer,
                    children: [
                      (0, n.jsxs)("div", {
                        className: h().VoteCount,
                        children: [
                          (0, n.jsx)(v.bfp, {
                            className: h().VoteUpStaticIcon,
                          }),
                          (0, V.Dq)(w),
                        ],
                      }),
                      (0, n.jsxs)(J.Z, {
                        focusable: !0,
                        className: (0, l.A)(
                          b().Button,
                          b().Icon,
                          h().DiscussionButton,
                          L == "up" ? h().VoteButtonSelected : "",
                        ),
                        onActivate: () => Me("up"),
                        children: [
                          (0, n.jsx)(v.bfp, {
                            className:
                              L == "up"
                                ? h().VoteUpSelectedIcon
                                : h().VoteUpIcon,
                          }),
                          (0, n.jsx)("span", {
                            className: h().DiscussionButtonText,
                            children: (0, A.we)("#Button_RateUp"),
                          }),
                        ],
                      }),
                      (0, n.jsx)(J.Z, {
                        focusable: !0,
                        className: (0, l.A)(
                          b().Button,
                          b().Icon,
                          h().DiscussionButton,
                          L == "down" ? h().VoteButtonSelected : "",
                        ),
                        onActivate: () => Me("down"),
                        "aria-label": (0, A.we)("#Button_RateDown"),
                        children: (0, n.jsx)(v.bfp, {
                          className:
                            L == "down"
                              ? h().VoteDownSelectedIcon
                              : h().VoteDownIcon,
                        }),
                      }),
                    ],
                  }),
                  De &&
                    (0, n.jsx)(u, {
                      commentCount: I,
                      discussionURL: j,
                      gotoDiscussion: ne,
                    }),
                  D,
                ],
              }),
              ee &&
                (0, n.jsx)("div", {
                  className: h().ShareContainer,
                  children: ee,
                }),
            ],
          });
        }
        function u(F) {
          const { commentCount: w, discussionURL: I, gotoDiscussion: L } = F;
          return (0, n.jsxs)("div", {
            className: h().DiscussContainer,
            children: [
              (0, n.jsxs)("div", {
                className: h().DiscussionCount,
                children: [(0, n.jsx)(v.ROZ, {}), (0, V.Dq)(w)],
              }),
              I &&
                (0, n.jsx)(Z.Ii, {
                  href: (0, W.k2)(I),
                  children: (0, n.jsxs)("div", {
                    className: (0, l.A)(
                      b().Button,
                      b().Icon,
                      h().DiscussionButton,
                    ),
                    children: [
                      (0, n.jsx)(v.ROZ, {}),
                      (0, n.jsx)("span", {
                        className: h().DiscussionButtonText,
                        children: (0, A.we)("#Button_Discuss"),
                      }),
                    ],
                  }),
                }),
              !I &&
                (0, n.jsxs)(J.Z, {
                  focusable: !0,
                  onActivate: L,
                  className: (0, l.A)(
                    b().Button,
                    b().Icon,
                    h().DiscussionButton,
                  ),
                  children: [
                    (0, n.jsx)(v.ROZ, {}),
                    (0, n.jsx)("span", {
                      className: h().DiscussionButtonText,
                      children: (0, A.we)("#Button_Discuss"),
                    }),
                  ],
                }),
            ],
          });
        }
        function p() {
          return N.iA.logged_in
            ? N.iA.is_limited
              ? ((0, t.pg)((0, n.jsx)(_.g, {}), window), !1)
              : !0
            : (N.TS.IN_CLIENT
                ? console.log(
                    "EventDiscussionWidget: In Client: Cannot use login widget. We expect to be already logged in.",
                  )
                : (0, t.pg)(
                    (0, n.jsx)(U.o0, {
                      strTitle: (0, A.we)("#EventDisplay_Share_NotLoggedIn"),
                      strDescription: (0, A.we)(
                        "#EventDisplay_Share_NotLoggedIn_Description",
                      ),
                      strOKButtonText: (0, A.we)("#MobileLogin_SignIn"),
                      onOK: () => (0, s.l)(),
                    }),
                    window,
                  ),
              !1);
        }
        function S(F) {
          const { eventModel: w, emoticonStore: I } = F,
            L = (0, N.Qn)(),
            { myVote: Me, Vote: j } = (0, k.C)(w),
            ne = (pe) => {
              p() && Me !== void 0 && j(pe);
            },
            [, De] = (0, a.TB)(w.clanSteamID.GetAccountID()),
            D = (pe) => {
              const Pe = (0, E.uX)(pe);
              Pe &&
                (0, t.pg)(
                  (0, n.jsx)(U.KG, {
                    strDescription: (0, A.we)(
                      "#EventDisplay_Share_CommentMigrationInProcess",
                    ),
                  }),
                  Pe,
                );
            },
            [ee, le, Y, ye] = (0, T.q3)(() => [
              (0, q.OQ)(w.nVotesUp - w.nVotesDown, 0, Number.MAX_SAFE_INTEGER),
              (0, W.NT)(w.GetDiscussionURL(De?.vanity_url)),
              w.BIsUnlistedEvent(),
              w.nCommentCount,
            ]),
            oe = (0, N.Y2)();
          return (0, n.jsx)(c, {
            nVoteCount: ee,
            nCommentCount: ye,
            myVote: Me ?? void 0,
            onVote: ne,
            strDiscussionURL: le,
            onDiscussionUnavailable: D,
            bShowDiscussion: !oe && !Y,
            share: !L && (0, n.jsx)($, { eventModel: w, emoticonStore: I }),
          });
        }
      },
      94520: (me, ue, r) => {
        "use strict";
        r.d(ue, { zj: () => Pn, d3: () => Ke.d3, fh: () => wr });
        var n = r(7850),
          T = r(5191),
          a = r(70187),
          s = r(39256),
          t = r(18210),
          E = r(39654);
        function A(m) {
          const { MissingEventFallback: o } = m,
            { event: d, showErrorInfo: y } = m.context,
            O = (0, a.j$)(m.args),
            z = !!O && O != d?.GID,
            { data: te, isPending: ie } = (0, E.vE)(
              z && d
                ? { clanAccountID: d.clanSteamID.GetAccountID(), eventGID: O }
                : void 0,
            );
          if (!z)
            return d
              ? (0, n.jsx)(T.j, { eventModel: d, lang: m.language })
              : null;
          if (d) {
            if (te)
              return (0, n.jsx)(T.j, { eventModel: te, lang: m.language });
            if (ie) return null;
          }
          return o
            ? (0, n.jsx)(o, {
                eventGID: O,
                lang: m.language,
                bShowErrorInfo: !!y,
              })
            : y
              ? (0, n.jsx)(q, { eventGID: O })
              : null;
        }
        function q({ eventGID: m }) {
          return (0, n.jsx)("div", {
            className: s.ErrorDiv,
            children: (0, t.we)("#EventDidplay_Reminder_EventNotVisible", m),
          });
        }
        function W(m) {
          return /\[remindme\b/i.test(m);
        }
        function N(m) {
          const o = new Set();
          for (const d of m.matchAll(/\[remindme=(\d+)\]/gi)) o.add(d[1]);
          return [...o];
        }
        var U = r(48421);
        const J = new Map([["remindme", { Constructor: R, autocloses: !1 }]]);
        function R(m) {
          return (0, n.jsx)(A, { ...m, MissingEventFallback: X });
        }
        function X({ eventGID: m, lang: o, bShowErrorInfo: d }) {
          const y = (0, U.RR)(m);
          return y
            ? (0, n.jsx)(T.j, { eventModel: y, lang: o })
            : d
              ? (0, n.jsx)(q, { eventGID: m })
              : null;
        }
        var h = r(64868),
          g = r(72609),
          b = r(11587),
          v = r(89926),
          l = r(90626),
          f = r(16412),
          M = r(96538),
          $ = r(69168),
          k = r(85599);
        function _(m) {
          if (m === "GameAwardDrop2022") {
            const o = (0, b.h3)(m),
              d = (0, b.Qg)();
            return o
              ? o.registered
                ? {
                    bInitialState: !1,
                    bSuccessState: o.eligible,
                    bFailedState: !o.eligible,
                    fnAction: o.eligible
                      ? void 0
                      : async () => {
                          await d.fnCreateRegistration(m);
                        },
                  }
                : {
                    bInitialState: !0,
                    fnAction: async () => {
                      await d.fnCreateRegistration(m);
                    },
                  }
              : { bInitialState: !0 };
          }
          return { bInitialState: !0 };
        }
        function Z(m) {
          const o = (0, a.j$)(m.args, "action"),
            d = (0, a.j$)(m.args, "initialToken"),
            y = (0, a.j$)(m.args, "successToken"),
            O = (0, a.j$)(m.args, "failToken"),
            z = _(o),
            { elDialogElement: te, fnShowLogonDialog: ie } = (0, v.l)(),
            [Ne, qe, mt] = (0, h.uD)();
          return !o || !d || !y || !O
            ? m.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children:
                    "Failed to provide all tokens. Dialog will not appear",
                })
              : null
            : !g.iA.logged_in && o != "test" && o != "nologinrequired"
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(f.$n, {
                      className: "CSSActionDialogButton",
                      onClick: ie,
                      children: (0, t.we)("#Login_SignIn"),
                    }),
                    te,
                  ],
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsxs)(f.$n, {
                      className: "CSSActionDialogButton",
                      onClick: qe,
                      children: [
                        !!z.bInitialState && (0, t.we)(d),
                        !!z.bSuccessState && (0, t.we)(y),
                        !!z.bFailedState && (0, t.we)(O),
                      ],
                    }),
                    (0, n.jsx)($.E, {
                      active: Ne,
                      children: (0, n.jsx)(V, {
                        strAction: o,
                        strInitialToken: d,
                        strSuccessToken: y,
                        strFailToken: O,
                        closeModal: mt,
                        children: m.children,
                      }),
                    }),
                  ],
                });
        }
        function V(m) {
          const {
              strAction: o,
              children: d,
              closeModal: y,
              strInitialToken: O,
              strSuccessToken: z,
              strFailToken: te,
            } = m,
            ie = _(o),
            [Ne, qe] = l.useState(!!ie.fnAction),
            mt = l.useRef(!1);
          l.useEffect(() => {
            !ie.fnAction ||
              mt.current ||
              ((mt.current = !0), qe(!0), ie.fnAction().finally(() => qe(!1)));
          }, [ie]);
          const Je = l.useId();
          return (0, n.jsxs)(M.eV, {
            bDisableBackgroundDismiss: !0,
            closeModal: y,
            onCancel: y,
            className: "CSSActionDialogDialog",
            "aria-labelledby": Je,
            children: [
              (0, n.jsxs)(f.Y9, {
                id: Je,
                children: [
                  !!ie.bInitialState && (0, t.we)(O),
                  !!ie.bSuccessState && (0, t.we)(z),
                  !!ie.bFailedState && (0, t.we)(te),
                ],
              }),
              (0, n.jsx)(f.nB, {
                children: (0, n.jsx)(f.a3, {
                  children: Ne
                    ? (0, n.jsx)(k.t, {
                        size: "medium",
                        position: "center",
                        string: (0, t.we)("#Loading"),
                      })
                    : d,
                }),
              }),
            ],
          });
        }
        var c = r(23386),
          u = r(92799);
        function p(m) {
          const o = !!m.context.showErrorInfo,
            { elDialogElement: d, fnShowLogonDialog: y } = (0, v.l)();
          if (!g.iA.logged_in)
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(f.$n, {
                  onClick: y,
                  className: "CSSClaimItemLoginButton",
                  children: (0, t.we)("#Sale_ClaimableReward_Login"),
                }),
                d,
              ],
            });
          const O = (0, a.j$)(m.args, "type");
          let z;
          if (O)
            switch (O) {
              case "profilemodifier":
                z = c.jE;
                break;
              case "sticker":
                z = c.Ed;
                break;
            }
          return (0, n.jsx)(u.m, { bPreviewMode: o, rewardType: z });
        }
        function S(m) {
          return /\[claimitem\b/i.test(m);
        }
        function F(m) {
          const o = (0, a.j$)(m.args, "name"),
            d =
              ((0, a.j$)(m.args, "visible") || "false").toLowerCase() ===
              "true",
            y = (0, b.h3)(o);
          return o
            ? !y || !y.registered
              ? null
              : (y.eligible && d) || (!y.eligible && !d)
                ? (0, n.jsx)(n.Fragment, { children: m.children })
                : null
            : m.context.showErrorInfo
              ? (0, n.jsx)("div", {
                  children: "Failed to provide giveaway name",
                })
              : null;
        }
        const w = /\bname\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function I(m) {
          const o = new Set();
          for (const d of m.matchAll(/\[giveawayeligible\b([^\]]*)\]/gi)) {
            const y = w.exec(d[1] ?? ""),
              O = y?.[1] ?? y?.[2] ?? y?.[3];
            O && o.add(O);
          }
          return Array.from(o);
        }
        var L = r(99412),
          Me = r(86048);
        function j(m, o) {
          const d = l.useCallback(
            (y) => {
              y.preventDefault(), (y.returnValue = o);
            },
            [o],
          );
          (0, Me.l6)(window, "beforeunload", m ? d : void 0),
            l.useEffect(() => {
              if (!m || !window.navigation) return;
              const y = (O) => {
                (O.navigationType != "push" &&
                  O.navigationType != "traverse") ||
                  O.hashChange ||
                  O.downloadRequest !== null ||
                  !O.cancelable ||
                  window.confirm(o) ||
                  O.preventDefault();
              };
              return (
                window.navigation.addEventListener("navigate", y),
                () => window.navigation.removeEventListener("navigate", y)
              );
            }, [m, o]);
        }
        var ne = r(65946),
          De = r(87937),
          D = r.n(De),
          ee = r(91354),
          le = r(69909),
          Y = r(72604),
          ye = r(16936),
          oe = r(80902),
          pe = r(75233),
          Pe = r(51614),
          ge = r(16369);
        const He = 0,
          ce = 1,
          se = 2,
          Ee = 3,
          xe = new Map(),
          ft = "",
          Qe = 0;
        function nt(m, o) {
          return ["MeetSteamRegistrations", m, o];
        }
        function at(m, o) {
          return ["MeetSteamSelections", m, o];
        }
        function ve(m) {
          return {
            queryKey: nt(m?.gidClanEvent ?? ft, m?.userAccountID ?? Qe),
            queryFn: async () => {
              if (!m) return xe;
              const o = await (0, ye._V)(m.gidClanEvent),
                d = new Map();
              return (
                o.forEach((y) => {
                  const O = {
                    ...y,
                    regmodel: y.jsondata ? JSON.parse(y.jsondata) : void 0,
                  };
                  O.group_id === void 0 ||
                    O.session_id === void 0 ||
                    d.set(O.group_id, O);
                }),
                d
              );
            },
            enabled:
              !!m && (0, ge.H)() == m?.clanAccountID && !!m?.userAccountID,
          };
        }
        function we(m, o) {
          return {
            queryKey: at(m, o),
            queryFn: () => null,
            initialData: null,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
          };
        }
        const ke = l.createContext(void 0);
        function Ue(m) {
          const {
              clanAccountID: o,
              gidClanEvent: d,
              userAccountID: y,
              children: O,
            } = m,
            z = l.useMemo(
              () => ({ clanAccountID: o, gidClanEvent: d, userAccountID: y }),
              [o, d, y],
            );
          return (0, n.jsx)(ke.Provider, { value: z, children: O });
        }
        function $e() {
          const m = l.useContext(ke),
            o = (0, oe.I)(ve(m)),
            d = (0, oe.I)(we(m?.gidClanEvent ?? ft, m?.userAccountID ?? Qe)),
            y = o.data ?? xe;
          return l.useMemo(
            () => ({
              registrations: y,
              selections: d.data ?? tt(y),
              bLoading: o.isFetching,
            }),
            [y, d.data, o.isFetching],
          );
        }
        function tt(m) {
          const o = new Map();
          return (
            m.forEach((d, y) => {
              d.session_id !== void 0 && o.set(y, d.session_id);
            }),
            o
          );
        }
        function _e(m, o) {
          return o === void 0 ? void 0 : m.selections.get(o);
        }
        function it(m) {
          return Array.from(m.selections.keys());
        }
        function Ve(m, o, d) {
          if (o === void 0 || d === void 0) return He;
          const y = m.registrations.get(o)?.session_id == d,
            O = m.selections.get(o) == d;
          return y && O ? ce : !y && O ? se : y && !O ? Ee : He;
        }
        function G(m, o, d) {
          if (o === void 0 || d === void 0) return !1;
          const y = !!m.registrations.get(o),
            O = m.selections.get(o) == d,
            z = m.registrations.get(o)?.session_id == m.selections.get(o);
          return y && !O && z;
        }
        function re(m, o) {
          return o === void 0 ? void 0 : m.registrations.get(o)?.session_id;
        }
        function Se(m) {
          return m.selections.size == 0 && m.registrations.size == 0
            ? !1
            : m.selections.size != m.registrations.size ||
                !Array.from(m.selections.entries()).every(
                  (o) => m.registrations.get(o[0])?.session_id == o[1],
                );
        }
        function he(m) {
          return Array.from(m.selections.entries()).some((o) => {
            const d = m.registrations.get(o[0]);
            return !d || d.session_id != o[1];
          });
        }
        function Xe(m) {
          return m.registrations.size > 0;
        }
        function Re() {
          return $e().bLoading;
        }
        function x() {
          return Se($e());
        }
        function B() {
          return Xe($e());
        }
        function ae(m, o) {
          const d = $e();
          return de(d, m, o);
        }
        function be(m, o) {
          const d = $e();
          return de(
            d,
            m.filter((y) => !!y.ask_registration_question),
            o,
          );
        }
        function de(m, o, d) {
          return o
            .filter((y) => y.sessions.some((O) => Ve(m, y.group_id, O.id) == d))
            .map((y) => y.group_id)
            .filter((y) => y !== void 0);
        }
        function Le(m, o, d, y) {
          d !== void 0 &&
            m.setQueryData(at(o.gidClanEvent, o.userAccountID), (O) => {
              const z =
                  m.getQueryData(nt(o.gidClanEvent, o.userAccountID)) ?? xe,
                te = new Map(O ?? tt(z));
              return y !== void 0 && y > 0 ? te.set(d, y) : te.delete(d), te;
            });
        }
        function Ce() {
          const m = l.useContext(ke),
            o = (0, pe.jE)(),
            d = $e();
          return l.useCallback(
            (y, O) => {
              if (!m) return;
              const z = _e(d, y) == O;
              Le(o, m, y, z ? void 0 : O);
            },
            [m, o, d],
          );
        }
        function ut() {
          const m = l.useContext(ke),
            o = (0, pe.jE)(),
            d = $e(),
            { mutateAsync: y } = (0, Pe.n)({
              mutationFn: async (O) => {
                if (!m) return !1;
                const z = Object.fromEntries(
                    Object.entries(O).filter(
                      ([Ne]) => !Ne.startsWith("registration_emailed_"),
                    ),
                  ),
                  te = [];
                for (const [Ne, qe] of d.selections)
                  te.push({
                    gid: m.gidClanEvent,
                    group_id: Ne,
                    session_id: qe,
                    guest_count: O.guests_registered ?? 1,
                    jsondata: JSON.stringify(z),
                    skip_email: !1,
                  });
                for (const Ne of d.registrations.keys())
                  d.selections.has(Ne) ||
                    te.push({
                      gid: m.gidClanEvent,
                      group_id: Ne,
                      session_id: 0,
                      guest_count: 0,
                      jsondata: JSON.stringify({}),
                      skip_email: !1,
                    });
                let ie = !0;
                for (let Ne = 0; Ne < te.length; Ne++) {
                  const qe = await (0, ye.kR)({
                    ...te[Ne],
                    skip_email: Ne != te.length - 1,
                  });
                  ie = ie && qe == Y.R;
                }
                return (
                  o.setQueryData(at(m.gidClanEvent, m.userAccountID), null),
                  await o.invalidateQueries({
                    queryKey: nt(m.gidClanEvent, m.userAccountID),
                  }),
                  ie
                );
              },
            });
          return y;
        }
        var rt = r(71421),
          It = r(36707),
          st = r(92264),
          gt = r(36631),
          Mt = r(84346),
          Bt = r(54357);
        const bt =
            /(?<!\\)\[(meetsteamsessiongroup|meetsteamscheduleview)\b([^\]]*)\]/gi,
          yt = /\b(?:group_id|schedule_id)\s*=\s*"?(\d+)/i;
        function Q(m) {
          const o = [];
          for (const d of m.matchAll(bt))
            o.push({
              strTag: d[1].toLowerCase(),
              nID: Number(yt.exec(d[2])?.[1] ?? 0),
            });
          return o;
        }
        function fe(m) {
          return Q(m).length > 0;
        }
        function Ae(m, o) {
          return m === void 0
            ? !0
            : Q(m).find((y) => y.strTag == "meetsteamsessiongroup")?.nID == o;
        }
        function Fe(m, o, d) {
          if (m === void 0) return !0;
          const y = Q(m),
            O = y[y.length - 1];
          return O?.strTag == o && O.nID == d;
        }
        const Te = l.createContext(null);
        function Ze(m) {
          return jsx(Te.Provider, {
            value: m.nVisibilityID ?? null,
            children: m.children,
          });
        }
        function et() {
          return l.useContext(Te);
        }
        var Ke = r(1683),
          dt = r(93507),
          Oe = r.n(dt),
          Ot = r(41635);
        const vt = [];
        function kt(m) {
          const {
              eventModel: o,
              fnConfirm: d,
              fnHideModal: y,
              nMaxPerTeam: O,
              bAddingOrChangingSessions: z,
            } = m,
            te = (0, L.sfN)(g.TS.LANGUAGE),
            [ie, Ne] = l.useState({}),
            [qe, mt] = l.useState(!1),
            Je = l.useCallback(
              (Dt) => {
                Ne({ ...ie, ...Dt });
              },
              [ie],
            ),
            wt = (0, le.mG)(
              o.clanSteamID.GetAccountID(),
              o.GID ?? "",
              g.iA.accountid,
            ),
            { data: zt } = (0, le.ee)(g.iA.accountid),
            Ut = zt?.realname ?? "",
            xt = zt?.email ?? "",
            pt = zt?.partners ?? vt,
            [Pt, Wt] = l.useState(void 0),
            [Et, Ft] = l.useState(void 0),
            Ht = l.useMemo(() => {
              const Dt = [];
              return (
                Et == null &&
                  Dt.push({
                    data: void 0,
                    label: (0, t.we)("#MeetSteam_ChoosePartner"),
                  }),
                Dt.push(
                  ...pt.map((Tt, Qt) => ({
                    data: Tt.partnerid,
                    label: Tt.partner_name,
                  })),
                ),
                Dt.push({
                  data: 0,
                  label: (0, t.we)("#MeetSteam_ChoosePartnerOther"),
                }),
                Dt
              );
            }, [pt, Et]);
          l.useEffect(() => {
            if (!wt.isSuccess) return;
            const Dt = pt.find((Qt) => Qt.partnerid == wt.data.partner_id),
              Tt = wt.data.partner_id === 0 ? 0 : Dt?.partnerid;
            Ft(Tt), Wt(Tt), Ne(wt.data);
          }, [wt.isSuccess, wt.data, pt]);
          const Gt = pt?.length > 0,
            Kt = !Gt || Et != null,
            $t = Kt && Et === 0;
          l.useEffect(() => {
            if (Et == Pt || (Wt(Et), !Gt || !Kt)) return;
            let Dt;
            const Tt = pt.find((Qt) => Qt.partnerid == Et);
            $t || !Tt
              ? (Dt = {
                  name: xt?.length > 0 ? Ut : void 0,
                  email_override: xt?.length > 0 ? xt : void 0,
                  partner_id: 0,
                })
              : (Dt = {
                  name:
                    Tt.partneruserrealname?.length > 0
                      ? Tt.partneruserrealname
                      : void 0,
                  company:
                    Tt.partner_name?.length > 0 ? Tt.partner_name : void 0,
                  email_override:
                    Tt.partneruseremail?.length > 0
                      ? Tt.partneruseremail
                      : void 0,
                  partner_id: Tt.partnerid,
                }),
              Object.values(Dt).some((Qt) => Qt != null) && Je(St(Dt));
          }, [Kt, $t, Gt, Et, Pt, pt, xt, Ut, Je]);
          const on = wt.isLoading || qe,
            Tn = z
              ? (0, t.we)(
                  "#MeetSteam_Register_title",
                  o.GetNameWithFallback(te) ?? "",
                )
              : (0, t.we)("#MeetSteam_Unregister_title"),
            Fn =
              !z ||
              (Kt &&
                !!ie.name &&
                (!ie.guest_names ||
                  ie.guest_names.every((Dt) => Dt.length > 0)) &&
                !!ie.email_override &&
                !!ie.company);
          return (0, n.jsxs)(M.EN, {
            active: !0,
            children: [
              on &&
                (0, n.jsx)(M.eV, {
                  "aria-label": qe
                    ? (0, t.we)("#Saving")
                    : (0, t.we)("#Loading"),
                  bOKDisabled: !0,
                  bHideCloseIcon: !0,
                  onCancel: () => !1,
                  children: (0, n.jsx)(k.t, {
                    size: "medium",
                    position: "center",
                    string: qe ? (0, t.we)("#Saving") : (0, t.we)("#Loading"),
                  }),
                }),
              !on &&
                (0, n.jsx)(M.o0, {
                  strTitle: Tn,
                  onCancel: y,
                  bOKDisabled: !Fn,
                  onOK: async () => {
                    mt(!0), await d(ie), mt(!1), wt.refetch(), y();
                  },
                  children:
                    z &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsx)("div", {
                          children: (0, t.we)("#MeetSteam_Reg_Intro"),
                        }),
                        (0, n.jsx)("br", {}),
                        Gt &&
                          (0, n.jsx)(f.m, {
                            label: (0, t.we)("#MeetSteam_Reg_Preset"),
                            tooltip: (0, t.we)("#MeetSteam_Reg_Preset_ttip"),
                            rgOptions: Ht,
                            selectedOption: Et,
                            onChange: (Dt) => Ft(Dt.data),
                          }),
                        Kt &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)(f.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Name"),
                                value: ie.name || "",
                                onChange: (Dt) =>
                                  Je({ name: Dt.currentTarget.value }),
                              }),
                              (0, n.jsx)(f.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Email"),
                                value: ie.email_override || "",
                                mustBeEmail: !0,
                                onChange: (Dt) =>
                                  Je({
                                    email_override: Dt.currentTarget.value,
                                  }),
                              }),
                              (0, n.jsx)(f.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Company"),
                                value: ie.company || "",
                                onChange: (Dt) =>
                                  Je({ company: Dt.currentTarget.value }),
                              }),
                              (0, n.jsx)(f.pd, {
                                type: "text",
                                label: (0, t.we)("#MeetSteam_Reg_Game"),
                                value: ie.game || "",
                                onChange: (Dt) =>
                                  Je({ game: Dt.currentTarget.value }),
                              }),
                              O > 0 &&
                                (0, n.jsx)(f.m, {
                                  label: (0, t.we)("#MeetSteam_Reg_GuestCount"),
                                  tooltip: (0, t.we)(
                                    "#MeetSteam_Reg_GuestCount_ttip",
                                  ),
                                  rgOptions: Array.from({ length: O + 1 }).map(
                                    (Dt, Tt) => ({ data: Tt, label: Tt }),
                                  ),
                                  selectedOption:
                                    (ie.guests_registered ?? 1) - 1,
                                  onChange: (Dt) => {
                                    const Tt = ie.guest_names ?? [];
                                    Je({
                                      guests_registered: Dt.data + 1,
                                      guest_names:
                                        Tt.length > Dt.data
                                          ? Tt.slice(0, Dt.data)
                                          : Ot.$Y(Tt, Dt.data, ""),
                                    });
                                  },
                                }),
                              (ie.guests_registered ?? 0) > 1 &&
                                (0, n.jsxs)("div", {
                                  children: [
                                    (0, n.jsx)("div", {
                                      children: (0, t.we)(
                                        "#MeetSteam_Reg_Others",
                                      ),
                                    }),
                                    (0, n.jsx)("br", {}),
                                    (ie.guest_names ?? []).map((Dt, Tt) =>
                                      (0, n.jsx)(
                                        f.pd,
                                        {
                                          type: "text",
                                          label: (0, t.we)(
                                            "#MeetSteam_Reg_Others_name",
                                          ),
                                          value: Dt,
                                          onChange: (Qt) => {
                                            const Gn = [
                                              ...(ie.guest_names ?? []),
                                            ];
                                            (Gn[Tt] = Qt.currentTarget.value),
                                              Je({ guest_names: Gn });
                                          },
                                        },
                                        "guesname_" + Tt,
                                      ),
                                    ),
                                  ],
                                }),
                              (0, n.jsx)(jt, {
                                eventModel: o,
                                oReg: ie,
                                fnUpdateRegistration: Je,
                              }),
                            ],
                          }),
                      ],
                    }),
                }),
            ],
          });
        }
        function St(m) {
          return Object.fromEntries(
            Object.entries(m).filter(([o, d]) => d !== void 0),
          );
        }
        function jt(m) {
          const { eventModel: o, oReg: d, fnUpdateRegistration: y } = m,
            O = be(o.jsondata.meet_steam_groups ?? [], se);
          return !O || O.length == 0
            ? null
            : (0, n.jsxs)("div", {
                children: [
                  (0, n.jsx)("h3", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_title"),
                  }),
                  (0, n.jsx)("p", {
                    children: (0, t.we)("#MeetSteam_Reg_Question_desc"),
                  }),
                  O.map((z) => {
                    const te = o.jsondata.meet_steam_groups?.find(
                      (ie) => ie.group_id == z,
                    );
                    return te
                      ? (0, n.jsx)(
                          Nt,
                          {
                            groupInfo: te,
                            oReg: d,
                            fnUpdateText: (ie) => {
                              let Ne = d.pre_event_partner_questions
                                  ? [...d.pre_event_partner_questions]
                                  : [],
                                qe = Ne.findIndex((mt) => mt.group_id == z);
                              qe < 0
                                ? Ne.push({ group_id: z, question: ie })
                                : (Ne[qe] = { group_id: z, question: ie }),
                                y({ pre_event_partner_questions: Ne });
                            },
                          },
                          "groupquestion" + z,
                        )
                      : null;
                  }),
                ],
              });
        }
        function Nt(m) {
          const { fnUpdateText: o, groupInfo: d, oReg: y } = m,
            O = (0, L.sfN)(g.TS.LANGUAGE),
            [z, te] = (0, ne.q3)(() => [
              t.NT.GetWithFallback(d.localized_session_title, O) ?? "",
              y.pre_event_partner_questions?.find(
                (ie) => ie.group_id == d.group_id,
              )?.question || "",
            ]);
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(f.JU, { children: z }),
              (0, n.jsx)("div", {
                className: "DialogInput_Wrapper",
                children: (0, n.jsx)("textarea", {
                  value: te,
                  className: (0, It.A)(
                    "DialogTextInputBase",
                    "_DialogInputContainer",
                  ),
                  cols: 80,
                  rows: 3,
                  placeholder: (0, t.we)("#MeetSteam_Reg_Question_placeholder"),
                  onChange: (ie) => o(ie.currentTarget.value),
                }),
              }),
            ],
          });
        }
        function ht(m) {
          const o = m.context.event,
            d = m.context.showErrorInfo,
            y = (0, a.j$)(m.args, "group_id"),
            O = Number.parseInt(y),
            z = (0, ne.q3)(() => At(o, O));
          if (!z || !o)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session group id ", O],
                })
              : null;
          if (o.clanSteamID.GetAccountID() != (0, ge.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const te = Ae(m.context.bbcode, O),
            ie = Fe(m.context.bbcode, "meetsteamsessiongroup", O);
          return (0, n.jsxs)(Ue, {
            clanAccountID: o.clanSteamID.GetAccountID(),
            gidClanEvent: o.GID ?? "",
            userAccountID: g.iA.accountid,
            children: [
              te && (0, n.jsx)(K, { eventModel: o }),
              (0, n.jsx)(C, { groupData: z, eventModel: o }),
              (0, n.jsx)(ct, { eventModel: o, bIsLast: ie }),
            ],
          });
        }
        function K(m) {
          const { eventModel: o } = m;
          return B()
            ? (0, n.jsx)(H, { eventModel: o, accountID: g.iA.accountid })
            : null;
        }
        function H(m) {
          const { eventModel: o, accountID: d } = m,
            y = (0, le.Lc)(o.GID ?? "", d);
          return (0, n.jsx)("div", {
            children:
              !!y &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    children: (0, t.we)("#MeetSteam_QR_CheckIn"),
                  }),
                  (0, n.jsx)("img", { src: y, alt: "" }),
                ],
              }),
          });
        }
        function C(m) {
          const { groupData: o, eventModel: d } = m,
            y = (0, gt.MU)(),
            O = et(),
            z = Re(),
            te = (0, le.my)(d.clanSteamID.GetAccountID(), d.GID ?? ""),
            ie = (0, l.useMemo)(
              () =>
                o?.sessions &&
                [...o.sessions].sort(
                  (Et, Ft) => (Et.rtime_start ?? 0) - (Ft.rtime_start ?? 0),
                ),
              [o?.sessions],
            ),
            { elLogInDialog: Ne, fnRequireLogIn: qe } = Yt(),
            mt = $e(),
            Je = (0, ne.q3)(() =>
              ie?.reduce(
                (Et, Ft) => Et.set(Ft.id ?? 0, Ve(mt, o.group_id, Ft.id)),
                new Map(),
              ),
            ),
            wt = Ce(),
            zt = (0, le.mG)(
              d.clanSteamID.GetAccountID(),
              d.GID ?? "",
              g.iA.accountid,
            ),
            Ut = zt.isSuccess && !!zt.data.allow_registration_if_full,
            xt = te.data;
          if (te.isError)
            return (0, n.jsx)("div", {
              children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
            });
          if (!xt || (z && g.iA.accountid))
            return (0, n.jsx)(k.t, {
              size: "medium",
              position: "center",
              string: (0, t.we)("#Loading"),
            });
          const pt = (Et) => wt(o.group_id, Et),
            Pt = o.group_visibility_tokens ?? [],
            Wt = O !== null && Pt.includes(O);
          return Pt.length > 0 && !Wt && !y
            ? null
            : (0, n.jsxs)(je, {
                groupData: o,
                children: [
                  ie?.map((Et, Ft) => {
                    const Ht = xt.find(
                        ($t) =>
                          $t.group_id === o.group_id && $t.session_id === Et.id,
                      ),
                      Gt = Je?.get(Et.id ?? 0),
                      Kt = Ft + 1 < ie.length;
                    return (0, n.jsxs)(
                      l.Fragment,
                      {
                        children: [
                          (0, n.jsx)("div", {
                            className: Oe().SessionColumnCtn,
                            children: (0, n.jsx)(Ye, {
                              sessionData: Et,
                              onClick: () => qe(() => pt(Et.id)),
                              nGuestReservations: Ht?.guest_count || 0,
                              eRegistrationStatus: Gt,
                              bAllowedToRegisterIfFull: Ut,
                            }),
                          }),
                          Kt && (0, n.jsx)(ot, {}),
                        ],
                      },
                      "timecol_" + o.group_id + "_" + Et.id,
                    );
                  }),
                  Ne,
                ],
              });
        }
        function je(m) {
          const { groupData: o, children: d } = m,
            y = (0, L.sfN)(g.TS.LANGUAGE),
            O = t.NT.GetWithFallback(o?.localized_session_title, y),
            z = t.NT.GetWithFallback(o?.localized_session_description, y),
            te = t.NT.GetWithFallback(o?.localized_intended_audience, y),
            ie = t.NT.GetWithFallback(o?.localized_sesssion_faq, y),
            Ne = (0, gt.MU)(),
            [qe, mt] = (0, l.useState)(!1);
          return o
            ? (0, n.jsxs)("div", {
                className: (0, It.A)({
                  [Oe().Ctn]: !0,
                  [Oe().CtnRegistered]: !1,
                  [Oe().VisibilityOverride]:
                    Ne && (o.group_visibility_tokens?.length ?? 0) > 0,
                }),
                children: [
                  !!O &&
                    (0, n.jsx)("div", {
                      className: Oe().SessionTitle,
                      children: O,
                    }),
                  !!z &&
                    (0, n.jsx)("div", {
                      className: Oe().SessionDesc,
                      children: z,
                    }),
                  !!te &&
                    (0, n.jsx)("div", {
                      className: Oe().SessionAudience,
                      children: (0, t.we)(
                        "#MeetSteam_Session_Audience",
                        te ?? "",
                      ),
                    }),
                  (0, n.jsx)("div", {
                    className: Oe().SessionOptions,
                    children: d,
                  }),
                  !!ie &&
                    (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: Oe().ExpanderRow,
                          children: [
                            (0, n.jsx)(ee.c, {
                              bExpanded: qe,
                              setExpanded: mt,
                            }),
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                          ],
                        }),
                        qe &&
                          (0, n.jsx)("div", {
                            className: Oe().FAQDisplay,
                            children: (0, n.jsx)(Ke.Zn, { text: ie ?? "" }),
                          }),
                      ],
                    }),
                ],
              })
            : null;
        }
        function Ie(m, o, d, y) {
          const O =
            d || (m === He && o > 0) || m === ce || m === se || m === Ee;
          let z = null,
            te = null;
          return (
            m == ce
              ? ((z = (0, t.we)("#MeetSteam_Registered")),
                (te = Oe().Registered))
              : m == se
                ? ((z = (0, t.we)("#MeetSteam_Registering")),
                  (te = Oe().Registering))
                : m == Ee
                  ? ((z = (0, t.we)("#MeetSteam_Unegistering")),
                    (te = Oe().Unregistering))
                  : y &&
                    ((z = (0, t.we)("#MeetSteam_Already")),
                    (te = Oe().RegisteredElsewhere)),
            { bEnabled: O, strStatusClass: te, strStatusToken: z }
          );
        }
        function Ye(m) {
          const {
              sessionData: o,
              onClick: d,
              nGuestReservations: y,
              eRegistrationStatus: O = He,
              bAllowedToRegisterIfFull: z,
            } = m,
            te = (0, ne.q3)(() => o.max_capacity ?? 0),
            ie = Math.max(0, te - (y || 0)),
            {
              strStatusClass: Ne,
              strStatusToken: qe,
              bEnabled: mt,
            } = Ie(O, ie, !!z),
            {
              sDisplayTimeZone: Je,
              rtime_start: wt,
              rtime_end: zt,
            } = (0, le._t)(o),
            Ut = (0, le.rF)(wt ?? 0, Je),
            xt = (0, le.Mr)(wt ?? 0, zt ?? 0, Je);
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)("div", {
              className: (0, It.A)(Oe().SessionInstance, Ne),
              children: [
                (0, n.jsx)("div", {
                  className: Oe().StatusText,
                  children: (0, n.jsx)("span", { children: qe }),
                }),
                (0, n.jsxs)("button", {
                  className: (0, It.A)(Oe().Button, Oe().Background),
                  disabled: !mt,
                  onClick: d,
                  children: [
                    (0, n.jsx)("div", { className: Oe().Title, children: Ut }),
                    (0, n.jsx)("div", {
                      className: Oe().TimeFrame,
                      children: xt,
                    }),
                  ],
                }),
                (0, n.jsx)(lt, {
                  nAvailableSpace: ie,
                  bAllowedToRegisterIfFull: z,
                }),
              ],
            }),
          });
        }
        function lt(m) {
          const { nAvailableSpace: o, bAllowedToRegisterIfFull: d } = m;
          return (0, n.jsx)(n.Fragment, {
            children:
              d ||
              (0, n.jsxs)(n.Fragment, {
                children: [
                  " ",
                  o < 1
                    ? (0, n.jsx)("div", {
                        className: Oe().SoldOut,
                        children: (0, t.we)("#MeetSteam_SoldOut"),
                      })
                    : (0, n.jsx)("div", {
                        className: Oe().MaxSize,
                        children: (0, t.Yp)(
                          "#MeetSteam_Spot",
                          o.toLocaleString((0, Mt.J)()),
                        ),
                      }),
                  " ",
                ],
              }),
          });
        }
        function ot() {
          return (0, n.jsx)("div", {
            className: Oe().InstanceDivider,
            children: "\u25C6",
          });
        }
        function ct(m) {
          const { eventModel: o, bIsLast: d } = m,
            [y, O] = l.useState(!1),
            [z, te] = l.useState(!1),
            ie = (0, le.my)(o.clanSteamID.GetAccountID(), o.GID ?? ""),
            [Ne, qe, mt] = (0, h.uD)(),
            { elLogInDialog: Je, fnRequireLogIn: wt } = Yt(),
            zt = ut(),
            Ut = async (Gt) => {
              O(!0), (await zt(Gt)) || qe(), ie.refetch(), O(!1);
            },
            xt = Re(),
            pt = y || xt,
            Pt = x(),
            Wt = $e(),
            Et = he(Wt),
            Ft = Xe(Wt),
            Ht = (0, ne.q3)(() =>
              it(Wt).reduce((Gt, Kt) => {
                const $t = At(o, Kt),
                  on = _e(Wt, $t?.group_id),
                  Tn =
                    $t?.sessions?.find((Fn) => Fn.id == on)?.max_per_team ?? 0;
                return Math.max(Gt, Tn);
              }, 1),
            );
          return (
            j(Pt, (0, t.we)("#EventEditor_UnsavedChanges")),
            (0, n.jsxs)("div", {
              className: (0, It.A)(
                Oe().CompleteRegistrationCtn,
                d && Pt && Oe().Visible,
              ),
              children: [
                (0, n.jsx)("p", {
                  children: Ft
                    ? (0, t.we)("#MeetSteam_UpdateRegistration_Desc")
                    : (0, t.we)("#MeetSteam_CompleteRegistration_Desc"),
                }),
                d &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      !pt &&
                        (0, n.jsx)(f.jn, {
                          disabled: !Pt,
                          onClick: () => wt(() => te(!0)),
                          children: Ft
                            ? (0, t.we)("#MeetSteam_UpdateRegistration")
                            : (0, t.we)("#MeetSteam_CompleteRegistration"),
                        }),
                      pt &&
                        (0, n.jsx)(k.t, {
                          size: "small",
                          position: "center",
                          string: (0, t.we)("#Saving"),
                        }),
                      z &&
                        (0, n.jsx)(kt, {
                          eventModel: o,
                          fnConfirm: Ut,
                          fnHideModal: () => te(!1),
                          nMaxPerTeam: Ht,
                          bAddingOrChangingSessions: Et,
                        }),
                      Ne &&
                        (0, n.jsx)(M.EN, {
                          active: !0,
                          children: (0, n.jsx)(M.Ee, {
                            strTitle: (0, t.we)("#Error_Generic"),
                            strDescription: (0, t.we)(
                              "#MeetSteam_RegistrationFailed",
                            ),
                            closeModal: mt,
                          }),
                        }),
                      Je,
                    ],
                  }),
              ],
            })
          );
        }
        function At(m, o) {
          return (m?.jsondata?.meet_steam_groups || [])?.find(
            (y) => y.group_id == o,
          );
        }
        function Zt(m, o) {
          return (m?.jsondata?.meet_steam_schedules || [])?.find(
            (y) => y.schedule_id == o,
          );
        }
        function Yt() {
          const { elDialogElement: m, fnShowLogonDialog: o } = (0, v.l)(
            (0, t.we)("#EventDisplay_Share_NotLoggedIn_Description"),
          );
          return {
            elLogInDialog: m,
            fnRequireLogIn: (y) => {
              g.iA.logged_in ? y() : o();
            },
          };
        }
        function Ge(m) {
          const o = m.context.event,
            d = m.context.showErrorInfo,
            y = (0, a.j$)(m.args, "schedule_id"),
            O = Number.parseInt(y),
            z = (0, ne.q3)(() => Zt(o, O));
          if (!z || !o)
            return d
              ? (0, n.jsxs)("div", {
                  children: ["Failed to find session schedule id ", O],
                })
              : null;
          if (o.clanSteamID.GetAccountID() != (0, ge.H)())
            return d
              ? (0, n.jsx)("div", { children: "Only support on special group" })
              : null;
          const te = Fe(m.context.bbcode, "meetsteamscheduleview", O);
          return (0, n.jsxs)(Ue, {
            clanAccountID: o.clanSteamID.GetAccountID(),
            gidClanEvent: o.GID ?? "",
            userAccountID: g.iA.accountid,
            children: [
              (0, n.jsx)(e, { scheduleData: z, eventModel: o }),
              (0, n.jsx)(ct, { eventModel: o, bIsLast: te }),
            ],
          });
        }
        function e(m) {
          const { eventModel: o } = m,
            d = Ce(),
            y = Re(),
            O = (0, le.my)(o.clanSteamID.GetAccountID(), o.GID ?? ""),
            z = (0, le.mG)(
              o.clanSteamID.GetAccountID(),
              o.GID ?? "",
              g.iA.accountid,
            ),
            te = O.data;
          return O.isError
            ? (0, n.jsx)("div", {
                children: (0, t.we)("#Error_ErrorCommunicatingWithNetwork"),
              })
            : !te || (y && g.iA.accountid)
              ? (0, n.jsx)(k.t, {
                  size: "medium",
                  position: "center",
                  string: (0, t.we)("#Loading"),
                })
              : (0, n.jsx)(i, {
                  ...m,
                  fnOnClick: d,
                  rgAvailability: te,
                  bAllowedToRegisterIfFull: z.data?.allow_registration_if_full,
                });
        }
        function i(m) {
          const {
              eventModel: o,
              scheduleData: d,
              bAllowedToRegisterIfFull: y,
              fnOnClick: O,
              rgAvailability: z,
            } = m,
            te = (0, gt.HN)(),
            ie = et(),
            Ne = (0, Bt.B)(),
            [qe, mt, Je] = (0, ne.q3)(() => [
              o.jsondata.meet_steam_groups,
              d.in_person_time_zone ?? le.hh,
              d.location_type,
            ]),
            [wt, zt, Ut] = (0, l.useMemo)(() => {
              if (!qe) return [new Map(), new Map(), new Array()];
              const xt = new Map(),
                pt = new Map();
              for (const Pt of qe) {
                const Wt = Pt.group_visibility_tokens ?? [],
                  Et = ie !== null && Wt.includes(ie);
                if (!(Wt.length > 0 && !Et && !te))
                  for (const Ft of Pt.sessions) {
                    const Gt = (
                      Je == "in_person"
                        ? D()
                            .unix(Ft.rtime_start ?? 0)
                            .tz(mt)
                        : D()
                            .unix(Ft.rtime_start ?? 0)
                            .tz(Ne)
                    ).format("YYYY-MM-DD");
                    let Kt = xt.get(Gt);
                    Kt || ((Kt = []), xt.set(Gt, Kt)),
                      Kt.push({ group: Pt, session: Ft });
                  }
              }
              for (const Pt of d.session_breaks || []) {
                const Et = (
                  Je == "in_person"
                    ? D()
                        .unix(Pt.rtime_start ?? 0)
                        .tz(mt)
                    : D()
                        .unix(Pt.rtime_start ?? 0)
                        .tz(Ne)
                ).format("YYYY-MM-DD");
                let Ft = pt.get(Et);
                Ft || ((Ft = []), pt.set(Et, Ft)), Ft.push(Pt);
              }
              for (const Pt of xt.values())
                Pt.sort(
                  (Wt, Et) =>
                    (Wt.session.rtime_start ?? 0) -
                    (Et.session.rtime_start ?? 0),
                );
              return [xt, pt, Array.from(xt.keys()).sort()];
            }, [qe, ie, te, Je, mt, Ne, d.session_breaks]);
          return qe
            ? (0, n.jsx)(n.Fragment, {
                children: Ut.map((xt) => {
                  const pt = wt.get(xt);
                  return (0, n.jsx)(
                    "div",
                    {
                      className: Oe().SingleDayCtn,
                      children: (0, n.jsx)(P, {
                        scheduleData: d,
                        bAllowedToRegisterIfFull: !!y,
                        fnOnClick: O,
                        rgDayGroupSessions: pt ?? [],
                        rgBreakSessions: zt.get(xt) || [],
                        rgAvailability: z ?? [],
                      }),
                    },
                    "day_" + xt,
                  );
                }),
              })
            : (0, n.jsx)("div", {
                children: "No Meet Steam Events; please create some first.",
              });
        }
        function P(m) {
          const {
              scheduleData: o,
              rgDayGroupSessions: d,
              rgBreakSessions: y,
              bAllowedToRegisterIfFull: O,
              fnOnClick: z,
              rgAvailability: te,
            } = m,
            ie = (0, l.useMemo)(() => {
              const Je = [];
              for (const wt of d)
                Je.length == 0 ||
                Je[Je.length - 1][0].session.rtime_start !=
                  wt.session.rtime_start
                  ? Je.push([wt])
                  : Je[Je.length - 1].push(wt);
              return Je;
            }, [d]),
            { sDisplayTimeZone: Ne, rtime_start: qe } = (0, le._t)(
              d[0].session,
            ),
            mt = (0, le.rF)(qe ?? 0, Ne);
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("h2", {
                className: Oe().ScheduleTopDate,
                children: mt,
              }),
              y
                .filter(
                  (Je) =>
                    (Je.rtime_end ?? 0) <= (ie[0][0].session.rtime_start ?? 0),
                )
                .map((Je) =>
                  (0, n.jsx)(
                    Jt,
                    { scheduleData: o, breakSession: Je },
                    `breaks_${o.schedule_id}_${Je.break_id}`,
                  ),
                ),
              ie.map((Je, wt) => {
                let zt = [];
                if (wt + 1 < ie.length) {
                  const Ut = Je[0].session.rtime_start ?? 0,
                    xt = ie[wt + 1][0].session.rtime_end ?? 0;
                  zt = y.filter(
                    (pt) =>
                      Ut < (pt.rtime_start ?? 0) && (pt.rtime_end ?? 0) < xt,
                  );
                }
                return (0, n.jsxs)(
                  l.Fragment,
                  {
                    children: [
                      (0, n.jsx)(_t, {
                        bAllowedToRegisterIfFull: O,
                        fnOnClick: z,
                        scheduleData: o,
                        rgSlotSessions: Je,
                        rgAvailability: te,
                      }),
                      zt.map((Ut) =>
                        (0, n.jsx)(
                          Jt,
                          { scheduleData: o, breakSession: Ut },
                          `breaks_${o.schedule_id}_${Ut.break_id}`,
                        ),
                      ),
                    ],
                  },
                  "start_" + Je[0].session.rtime_start,
                );
              }),
              y
                .filter(
                  (Je) =>
                    (Je.rtime_start ?? 0) >=
                    (ie[ie.length - 1][0].session.rtime_end ?? 0),
                )
                .map((Je) =>
                  (0, n.jsx)(
                    Jt,
                    { scheduleData: o, breakSession: Je },
                    `breaks_${o.schedule_id}_${Je.break_id}`,
                  ),
                ),
            ],
          });
        }
        function Jt(m) {
          const { scheduleData: o, breakSession: d } = m,
            y = (0, L.sfN)(g.TS.LANGUAGE),
            O = (0, ne.q3)(
              () =>
                t.NT.GetWithFallback(d.localized_break_description, y) ?? "",
            ),
            z = (0, ne.q3)(() => ({
              rtime_start: d.rtime_start,
              rtime_end: d.rtime_end,
              location_type: o.location_type,
              in_person_time_zone: o.in_person_time_zone,
            }));
          return (0, n.jsxs)("div", {
            className: Oe().ScheduleRow,
            children: [
              (0, n.jsx)(nn, { session: z }),
              (0, n.jsx)("div", { children: O }),
            ],
          });
        }
        function _t(m) {
          const {
            scheduleData: o,
            rgSlotSessions: d,
            bAllowedToRegisterIfFull: y,
            fnOnClick: O,
            rgAvailability: z,
          } = m;
          return (0, n.jsxs)("div", {
            className: Oe().ScheduleRow,
            children: [
              (0, n.jsx)(nn, { session: d[0].session }),
              (0, n.jsx)("div", {
                className: Oe().ScheduleSessionsColumn,
                children: d.map((te) =>
                  (0, n.jsx)(
                    mn,
                    {
                      bAllowedToRegisterIfFull: y,
                      fnOnClick: O,
                      session: te,
                      rgAvailability: z,
                    },
                    `entry_${te.group.group_id}_${te.session.id}`,
                  ),
                ),
              }),
            ],
          });
        }
        function nn(m) {
          const { session: o } = m,
            {
              sDisplayTimeZone: d,
              rtime_start: y,
              rtime_end: O,
            } = (0, le._t)(o),
            z = (0, le.rF)(y ?? 0, d),
            te = (0, le.Mr)(y ?? 0, O ?? 0, d);
          return (0, n.jsxs)("div", {
            className: Oe().ScheduleTimeColumn,
            children: [
              (0, n.jsx)("div", { children: te }),
              (0, n.jsx)("div", { className: Oe().Timezone, children: z }),
            ],
          });
        }
        function mn(m) {
          const {
              session: o,
              bAllowedToRegisterIfFull: d,
              fnOnClick: y,
              rgAvailability: O,
            } = m,
            z = (0, L.sfN)(g.TS.LANGUAGE),
            [te, ie, Ne, qe] = (0, ne.q3)(() => [
              t.NT.GetWithFallback(o.group.localized_session_title, z) ?? "",
              t.NT.GetWithFallback(o.group.localized_intended_audience, z) ??
                "",
              t.NT.GetWithFallback(o.group.localized_sesssion_faq, z) ?? "",
              t.NT.GetWithFallback(o.group.localized_session_description, z) ??
                "",
            ]),
            [mt, Je, wt] = (0, h.uD)(!1),
            zt = $e(),
            [Ut, xt, pt] = (0, ne.q3)(() => [
              Ve(zt, o.group.group_id, o.session.id),
              G(zt, o.group.group_id, o.session.id),
              re(zt, o.group.group_id),
            ]),
            Pt = O?.find(
              (Kt) =>
                Kt.group_id === o.group.group_id &&
                Kt.session_id === o.session.id,
            )?.guest_count,
            Wt = Math.max(0, (o.session.max_capacity ?? 0) - (Pt || 0)),
            {
              strStatusClass: Et,
              strStatusToken: Ft,
              bEnabled: Ht,
            } = Ie(Ut, Wt, d, xt),
            Gt =
              xt && pt
                ? o.group.sessions.find((Kt) => Kt.id == pt)?.rtime_start
                : void 0;
          return (0, n.jsx)(rt.Gq, {
            toolTipContent: Gt
              ? (0, t.we)(
                  "#MeetSteam_AlreadyReg",
                  (0, st.TW)(Gt),
                  (0, st.KC)(Gt),
                )
              : void 0,
            children: (0, n.jsxs)("div", {
              className: (0, It.A)(Oe().SessionInstance, Et),
              children: [
                (0, n.jsx)("div", {
                  className: Oe().StatusText,
                  children: (0, n.jsx)("span", { children: Ft }),
                }),
                (0, n.jsxs)("div", {
                  className: Oe().Background,
                  children: [
                    (0, n.jsx)("div", {
                      className: Oe().SessionTitle,
                      children: te,
                    }),
                    ie &&
                      (0, n.jsx)("div", {
                        className: Oe().SessionAudience,
                        children: (0, t.we)("#MeetSteam_Session_Audience", ie),
                      }),
                    (0, n.jsx)("button", {
                      type: "button",
                      className: Oe().SessionInfoLink,
                      onClick: Je,
                      children: (0, t.we)("#MeetSteam_Session_Details"),
                    }),
                    (0, n.jsx)("div", {
                      className: Oe().ScheduleActionRow,
                      children: (0, n.jsx)(f.$n, {
                        onClick: () => {
                          y && y(o.group.group_id, o.session.id);
                        },
                        disabled: !Ht,
                        children: (0, t.we)(
                          Ut == ce ? "#Button_Unselect" : "#Button_Select",
                        ),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(lt, {
                  nAvailableSpace: Wt,
                  bAllowedToRegisterIfFull: d,
                }),
                (0, n.jsx)(M.EN, {
                  active: mt,
                  children: (0, n.jsxs)(M.o0, {
                    strTitle: te,
                    bAlertDialog: !0,
                    bAllowFullSize: !0,
                    closeModal: wt,
                    children: [
                      (0, n.jsx)("div", { children: ie }),
                      (0, n.jsx)("div", { children: qe }),
                      !!Ne &&
                        (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              children: (0, t.we)("#MeetSteam_FAQ"),
                            }),
                            (0, n.jsx)(Ke.Zn, { text: Ne }),
                          ],
                        }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        var un = r(29522),
          cn = r(40358);
        function dn(m) {
          const o = Number.parseInt((0, a.j$)(m.args, "id")) || 0,
            d =
              ((0, a.j$)(m.args, "visible") || "false").toLowerCase() ===
              "true",
            y = m.context.showErrorInfo,
            O = (0, un.oc)(o),
            { data: z, isPending: te } = (0, cn.J$)(O);
          if (!o)
            return y
              ? (0, n.jsx)("div", { children: "Error: PackageID Not Set" })
              : null;
          if (te) return null;
          const ie =
            z?.success == Y.R
              ? !!(z.visible && z.best_purchase_option)
              : !z?.unvailable_for_country_restriction;
          return (!ie && !d) || (ie && d)
            ? (0, n.jsx)(n.Fragment, { children: m.children })
            : null;
        }
        const gn = /\bid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function Ln(m) {
          const o = new Set();
          for (const d of m.matchAll(/\[packagepurchaseable\b([^\]]*)\]/gi)) {
            const y = gn.exec(d[1] ?? ""),
              O = Number.parseInt(y?.[1] ?? y?.[2] ?? y?.[3] ?? "");
            O && o.add(O);
          }
          return Array.from(o);
        }
        var Xt = r(50974),
          fn = r(41735),
          yn = r.n(fn),
          Lt = r(14947),
          vn = r(71742),
          rn = r(67705);
        const en = 0,
          sn = 1,
          hn = 2,
          Vt = 3,
          Ct = 4,
          qt = 5,
          pn = 6,
          an = 7;
        function Mn() {
          const m = {
            exportFn: void 0,
            file: void 0,
            dataURL: void 0,
            uploadFileName: "",
            displayFileName: void 0,
            sha1: "",
            hmac: "",
            timestamp: 0,
            imageWidth: 0,
            imageHeight: 0,
            fileInfo: void 0,
            uploadInfo: void 0,
            eUploadState: en,
            uploadProgress: 0,
            strErrorDescription: void 0,
          };
          return (0, Lt.l_)(m, {
            exportFn: !1,
            file: Lt.sH.ref,
            uploadFileName: !1,
            displayFileName: !1,
            sha1: !1,
            hmac: !1,
            timestamp: !1,
            fileInfo: !1,
            uploadInfo: !1,
          });
        }
        class En {
          m_Callbacks;
          m_fileUploadProps = Mn();
          m_onComplete;
          constructor(o) {
            (0, Lt.Gn)(this, {
              SetUploadFileError: Lt.XI,
              StartFileExportToUpload: Lt.XI,
              SetImageFileToUpload: Lt.XI,
              SetOtherFileToUpload: Lt.XI,
              SetFileToUpload: Lt.XI,
              RetryFileUpload: Lt.XI,
              BeginFileUpload: Lt.XI,
              DoFileUpload: Lt.XI,
              CommitFileUpload: Lt.XI,
              ClearFileUploadError: Lt.XI,
              Reset: Lt.XI,
            }),
              (this.m_Callbacks = o);
          }
          get file_upload_props() {
            return this.m_fileUploadProps;
          }
          get file_upload_data_url() {
            return this.m_fileUploadProps.dataURL;
          }
          get file() {
            return this.m_fileUploadProps.file;
          }
          LogFileUploadMessage(o) {
            this.m_Callbacks.LogFileUploadMessage &&
              this.m_Callbacks.LogFileUploadMessage(o);
          }
          SetUploadFileError(o, d) {
            (this.m_fileUploadProps.eUploadState = o),
              (this.m_fileUploadProps.strErrorDescription = d),
              (this.m_fileUploadProps.displayFileName = void 0);
          }
          async StartFileExportToUpload(o, d = {}) {
            const { displayFilename: y, info: O, onComplete: z } = d;
            (this.m_fileUploadProps.eUploadState = an),
              (this.m_fileUploadProps.uploadProgress = 0),
              (this.m_onComplete = z),
              (this.m_fileUploadProps.fileInfo = O),
              this.SetFileToUpload(o),
              (this.m_fileUploadProps.displayFileName = y);
          }
          async SetImageFileToUpload(o, d = {}) {
            const { processor: y = bn, info: O } = d;
            if (!o) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = O;
            const z = this.m_Callbacks.GetFileNameOverride?.() ?? o.name;
            if (o.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                Ct,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  z,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let te = [
                "jpg",
                "jpeg",
                "png",
                "gif",
                "webm",
                "mpg",
                "mp4",
                "mpeg",
                "ogv",
                "webp",
                "avif",
              ],
              ie = o.name.split(".").pop()?.toLowerCase() ?? "";
            if (te.indexOf(ie) == -1) {
              let qe = ie || z;
              this.SetUploadFileError(
                qt,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatUploadFileTypeNotSupported",
                  qe,
                ),
              );
              return;
            }
            const Ne = await y(o);
            this.SetFileToUpload(Ne.file),
              (this.m_fileUploadProps.imageHeight = Ne.height),
              (this.m_fileUploadProps.imageWidth = Ne.width);
          }
          async SetOtherFileToUpload(o, d = {}) {
            if (!o) {
              this.SetFileToUpload(void 0);
              return;
            }
            this.m_fileUploadProps.fileInfo = d.info;
            const y = this.m_Callbacks.GetFileNameOverride?.() ?? o.name;
            if (o.size > this.m_Callbacks.GetMaxFileSizeMB() * 1024 * 1024) {
              this.SetUploadFileError(
                Ct,
                (0, t.we)(
                  "#Chat_Settings_Error_ChatFileTooLarge_dynamic",
                  y,
                  this.m_Callbacks.GetMaxFileSizeMB(),
                ),
              );
              return;
            }
            let O = ["zip"],
              z = o.name.split(".").pop()?.toLowerCase() ?? "";
            if (O.indexOf(z) == -1) {
              let te = z || y;
              this.SetUploadFileError(
                qt,
                (0, t.we)("#Chat_Settings_Error_FileTypeNotZip", te),
              );
              return;
            }
            this.SetFileToUpload(o);
          }
          SetFileToUpload(o) {
            if (
              ((this.m_fileUploadProps.file = void 0),
              (this.m_fileUploadProps.dataURL = void 0),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.sha1 = ""),
              (this.m_fileUploadProps.imageWidth = 0),
              (this.m_fileUploadProps.imageHeight = 0),
              (this.m_fileUploadProps.displayFileName = void 0),
              !o)
            ) {
              this.m_fileUploadProps.eUploadState = en;
              return;
            }
            let d = "";
            if (typeof o == "function")
              (this.m_fileUploadProps.file = void 0),
                (this.m_fileUploadProps.exportFn = o);
            else {
              (this.m_fileUploadProps.file = o),
                (this.m_fileUploadProps.exportFn = void 0);
              try {
                d = URL.createObjectURL(o);
              } catch (O) {
                console.error(`Failed to created object URL from file: ${O}`);
              }
              (this.m_fileUploadProps.displayFileName =
                this.m_fileUploadProps.file.name),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() +
                  "_" +
                  this.m_fileUploadProps.file.name);
            }
            this.m_fileUploadProps.eUploadState = sn;
            let y = "";
            for (; y.length < 40; )
              y += Math.floor(Math.random() * 16).toString(16);
            (this.m_fileUploadProps.dataURL = d),
              (this.m_fileUploadProps.sha1 = y),
              (this.m_fileUploadProps.hmac = ""),
              (this.m_fileUploadProps.timestamp = 0);
          }
          async RetryFileUpload() {
            return this.BeginFileUpload();
          }
          async BeginFileUpload(o) {
            if (
              ((this.m_fileUploadProps.uploadProgress = 0),
              this.m_fileUploadProps.exportFn)
            ) {
              this.m_fileUploadProps.eUploadState = an;
              const { eResult: O, file: z } =
                await this.m_fileUploadProps.exportFn((te) => {
                  (0, Lt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = te * 0.5;
                  });
                });
              if (O != Y.R || !z)
                return (
                  this.SetUploadFileError(
                    Vt,
                    (0, t.we)("#Chat_Settings_Error_ExportFailed"),
                  ),
                  new Response()
                );
              (this.m_fileUploadProps.file = z),
                (this.m_fileUploadProps.uploadFileName =
                  window.performance.now() + "_" + z.name);
            }
            let d = this.m_fileUploadProps.file;
            if (!d)
              throw (
                ((0, vn.wT)(
                  !1,
                  "Must SetImageFileToUpload before calling BeginFileUpload",
                ),
                new Error("Invalid State"))
              );
            (this.m_fileUploadProps.eUploadState = hn),
              (this.m_fileUploadProps.uploadInfo = o);
            let y = new FormData();
            y.append("sessionid", (0, rn.KC)()),
              y.append("l", g.TS.LANGUAGE),
              y.append("file_size", d.size.toString()),
              y.append("file_name", this.m_fileUploadProps.uploadFileName),
              y.append("file_sha", this.m_fileUploadProps.sha1),
              y.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              y.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              y.append("file_type", d.type),
              this.m_Callbacks.PopulateBeginFileUploadFormData &&
                this.m_Callbacks.PopulateBeginFileUploadFormData(
                  y,
                  this.file_upload_props.uploadInfo,
                  this.file_upload_props.fileInfo,
                );
            try {
              let O = await fetch(
                  this.m_Callbacks.GetBeginFileUploadURL() +
                    `?l=${g.TS.LANGUAGE}`,
                  { method: "POST", body: y, credentials: "include" },
                ),
                z;
              try {
                z = await O.json();
              } catch {}
              if (!O.ok) {
                let te = "";
                throw (
                  ((0, Lt.h5)(() => {
                    (this.m_fileUploadProps.eUploadState = Vt),
                      this.LogFileUploadMessage(O),
                      z?.message
                        ? (te = z?.message)
                        : (te = (0, t.we)("#Chat_Settings_Error_ServerError")),
                      (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                        "#Chat_Upload_ErrorStart",
                        te,
                      ));
                  }),
                  te)
                );
              }
              if (!z || !z.result) throw new Error();
              return (
                (this.m_fileUploadProps.timestamp = z.timestamp),
                (this.m_fileUploadProps.hmac = z.hmac),
                this.DoFileUpload(z.result, d)
              );
            } catch (O) {
              let z = O || (0, t.we)("#ConnectionTrouble_FailedToConnect");
              throw (
                ((0, Lt.h5)(() => {
                  (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                      "#Chat_Upload_ErrorStart",
                      z,
                    ));
                }),
                z)
              );
            }
          }
          async DoFileUpload(o, d) {
            let y = o.use_https ? "https://" : "http://";
            y += o.url_host + o.url_path;
            const O = {};
            for (const te of o.request_headers) {
              if (
                te.name.toLowerCase() == "content-length" ||
                te.name.toLowerCase() == "host"
              )
                continue;
              let ie = te.name;
              ie.toLowerCase() === "content-type" && (ie = "Content-Type"),
                (O[ie] = te.value);
            }
            let z = {
              onUploadProgress: (te) => {
                const ie = !!this.m_fileUploadProps.exportFn,
                  Ne = ie ? 50 : 0,
                  qe = ie ? 50 : 100,
                  mt = Ne + (te.loaded / te.total) * qe;
                mt > this.m_fileUploadProps.uploadProgress &&
                  (0, Lt.h5)(() => {
                    this.m_fileUploadProps.uploadProgress = mt;
                  });
              },
              headers: O,
              transformRequest: [(te) => te],
            };
            try {
              return (
                await yn().put(y, d, z), this.CommitFileUpload(!0, o.ugcid, d)
              );
            } catch (te) {
              throw (
                (this.LogFileUploadMessage(te.response),
                (0, Lt.h5)(() => {
                  (this.m_fileUploadProps.strErrorDescription = (0, t.we)(
                    "#Chat_Upload_ErrorCloud",
                  )),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    (this.m_fileUploadProps.uploadProgress = 0);
                }),
                this.CommitFileUpload(!1, o.ugcid, d),
                this.m_fileUploadProps.strErrorDescription)
              );
            }
          }
          async CommitFileUpload(o, d, y) {
            let O = this.m_fileUploadProps.sha1,
              z = new FormData();
            z.append("sessionid", (0, rn.KC)()),
              z.append("l", g.TS.LANGUAGE),
              z.append("file_name", this.m_fileUploadProps.uploadFileName),
              z.append("file_sha", O),
              z.append("success", o ? "1" : "0"),
              z.append("ugcid", d),
              z.append("file_type", y.type),
              z.append(
                "file_image_width",
                this.m_fileUploadProps.imageWidth.toString(),
              ),
              z.append(
                "file_image_height",
                this.m_fileUploadProps.imageHeight.toString(),
              ),
              z.append(
                "timestamp",
                this.m_fileUploadProps.timestamp.toString(),
              ),
              z.append("hmac", this.m_fileUploadProps.hmac),
              this.m_Callbacks.PopulateCommitFileUploadFormData(
                z,
                this.file_upload_props.uploadInfo,
                this.file_upload_props.fileInfo,
              );
            try {
              let te = await fetch(this.m_Callbacks.GetCommitFileUploadURL(), {
                method: "POST",
                body: z,
                credentials: "include",
              });
              return (
                o
                  ? ((this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = pn),
                    this.m_onComplete && this.m_onComplete(Y.R, y.size))
                  : ((this.m_fileUploadProps.eUploadState = Vt),
                    this.m_onComplete && this.m_onComplete(Y.zi, y.size)),
                te
              );
            } catch (te) {
              if (!o) return;
              let ie = "";
              throw (
                ((0, Lt.h5)(() => {
                  if (
                    (this.LogFileUploadMessage(te),
                    (this.m_fileUploadProps.uploadProgress = 0),
                    (this.m_fileUploadProps.eUploadState = Vt),
                    te.response)
                  ) {
                    let Ne = te.response.data,
                      qe = te.response.status,
                      mt = Ne && Ne.success;
                    Ne.message
                      ? (ie = Ne.message)
                      : (ie = (0, t.we)("#Chat_Settings_Error_ServerError"));
                  } else ie = (0, t.we)("#ConnectionTrouble_FailedToConnect");
                  (this.m_fileUploadProps.strErrorDescription = `Failed to commit upload: ${ie}`),
                    this.m_onComplete && this.m_onComplete(Y.zi, y.size);
                }),
                ie)
              );
            }
          }
          ClearFileUploadError() {
            (this.m_fileUploadProps.eUploadState != Vt &&
              this.m_fileUploadProps.eUploadState != Ct &&
              this.m_fileUploadProps.eUploadState != qt) ||
              this.Reset();
          }
          Reset() {
            this.SetFileToUpload(void 0);
          }
        }
        function bn(m) {
          return new Promise((o) => {
            let d = new FileReader();
            (d.onload = () => {
              let y = m,
                O = d.result,
                z = Sn(O),
                te = new Blob([z], { type: m.type });
              if (te) {
                let ie = te;
                (ie.lastModifiedDate = new Date(m.lastModified)),
                  (ie.name = m.name),
                  (y = ie);
              }
              if (m.type.indexOf("image") == 0) {
                let ie = new Image();
                (ie.src = URL.createObjectURL(m)),
                  (ie.onload = (Ne) => {
                    o({ file: y, width: ie.width, height: ie.height });
                  });
              } else o({ file: y, width: 0, height: 0 });
            }),
              d.readAsArrayBuffer(m);
          });
        }
        function Sn(m) {
          let o = new DataView(m),
            d = 0,
            y = 0,
            O = [],
            z = 0;
          if (o.getUint16(d) == 65496) {
            d += 2;
            let te = o.getUint16(d);
            for (d += 2; d < o.byteLength && d < 131072; ) {
              if (te == 65505)
                (O[z] = { recess: y, offset: d - 2 }),
                  (y = d + o.getUint16(d)),
                  z++;
              else if (te == 65498) break;
              (d += o.getUint16(d)), (te = o.getUint16(d)), (d += 2);
            }
            let ie = m.byteLength - y;
            if (
              (O.forEach((qe) => {
                ie += qe.offset - qe.recess;
              }),
              ie === m.byteLength)
            )
              return m;
            const Ne = new Uint8Array(ie);
            if (O.length > 0) {
              let qe = 0;
              O.forEach((mt) => {
                let Je = mt.offset - mt.recess;
                Ne.set(new Uint8Array(m.slice(mt.recess, mt.offset)), qe),
                  (qe += Je);
              }),
                Ne.set(new Uint8Array(m.slice(y)), qe);
            }
            return Ne.buffer;
          }
          return m;
        }
        var wn = r(24660),
          tn = r(36118),
          Dn = r(39362),
          In = r.n(Dn);
        function We(m) {
          const { fileUploadManager: o } = m,
            d = (0, l.useRef)(null);
          return (0, n.jsxs)("div", {
            className: In().Ctn,
            children: [
              (0, n.jsx)("input", {
                type: "file",
                accept: ".jpg,.jpeg,.png,.gif,.webm,.mpg,.mpeg,.ogv,.mp4",
                style: { display: "none" },
                name: "fileupload",
                ref: d,
                onChange: (y) => {
                  const O = y.currentTarget.files;
                  O?.length &&
                    (o.SetImageFileToUpload(O[0]),
                    (y.currentTarget.value = ""));
                },
              }),
              (0, n.jsx)(wn.fu, {
                type: "button",
                title: (0, t.we)("#Button_Upload"),
                onOKActionDescription: (0, t.we)("#Button_Upload"),
                onClick: () => d.current?.click(),
                children: (0, n.jsx)(tn.xv8, {}),
              }),
            ],
          });
        }
        var Be = r(71714),
          ze = r.n(Be);
        function Rn(m) {
          const { fileUploadManager: o } = m,
            d = (0, ne.q3)(() => o.file_upload_props.eUploadState);
          return d == sn
            ? (0, n.jsx)(Vn, { fileUploadManager: o })
            : d == Vt || d == qt || d == Ct
              ? (0, n.jsx)($n, { fileUploadManager: o })
              : d != en
                ? (0, n.jsx)(Hn, { fileUploadManager: o })
                : null;
        }
        function Vn(m) {
          const { fileUploadManager: o } = m,
            d = o.file;
          return d
            ? (0, n.jsxs)("div", {
                className: ze().UploadPreviewContainer,
                children: [
                  d.type.indexOf("image") != -1 &&
                    (0, n.jsx)("img", {
                      className: ze().UploadPreview,
                      src: o.file_upload_data_url,
                    }),
                  d.type.indexOf("video") != -1 && (0, n.jsx)(tn.CeX, {}),
                  (0, n.jsxs)("div", {
                    className: ze().FileUploadFileName,
                    children: ["'", d.name, "'"],
                  }),
                  (0, n.jsx)("div", {
                    className: ze().FileUploadCancel,
                    onClick: () => o.Reset(),
                    children: (0, n.jsx)(tn.sED, {}),
                  }),
                  (0, n.jsx)(f.jn, {
                    className: ze().FileUploadBtn,
                    onClick: async () => {
                      await o.BeginFileUpload(), o.Reset();
                    },
                    children: (0, t.we)("#Button_Upload"),
                  }),
                ],
              })
            : null;
        }
        function Hn(m) {
          const { fileUploadManager: o } = m,
            [d, y, O] = (0, ne.q3)(() => [
              o.file_upload_props.file,
              o.file_upload_props.displayFileName,
              o.file_upload_props.uploadProgress,
            ]),
            z = d ? (0, t.we)("#Uploading_Item", y ?? "") : "",
            te = { width: O + "%" };
          return (0, n.jsxs)("div", {
            className: ze().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: ze().FileUploadProgressName,
                children: z,
              }),
              (0, n.jsx)("div", {
                className: (0, It.A)(
                  ze().FileUploadProgressBarContainer,
                  "DialogProgressBar_ProgressBarContainer",
                ),
                children: (0, n.jsx)("div", {
                  className: "DialogProgressBar_Value",
                  style: te,
                }),
              }),
            ],
          });
        }
        function $n(m) {
          const { fileUploadManager: o } = m,
            [d, y, O] = (0, ne.q3)(() => [
              o.file_upload_props.strErrorDescription,
              o.file_upload_props.displayFileName,
              o.file_upload_props.eUploadState,
            ]),
            z = y ? (0, t.we)("#Uploading_Item", y) : "",
            te = d || (0, t.we)("#Chat_Upload_ErrorCloud");
          return (0, n.jsxs)("div", {
            className: ze().FileUploadProgressContainer,
            children: [
              (0, n.jsx)("div", {
                className: ze().FileUploadProgressName,
                children: z,
              }),
              (0, n.jsx)("div", {
                className: ze().FileUploadErrorDescription,
                children: te,
              }),
              (0, n.jsx)("div", {
                className: ze().FileUploadActions,
                children: (0, n.jsxs)(f.dR, {
                  className: "DialogLayout_NoMinWidth",
                  children: [
                    O == Vt &&
                      (0, n.jsx)(f.jn, {
                        onClick: async () => {
                          await o.RetryFileUpload(), o.Reset();
                        },
                        children: (0, t.we)("#Chat_Upload_ErrorAction_Retry"),
                      }),
                    (0, n.jsx)(f.$n, {
                      onClick: () => o.ClearFileUploadError(),
                      children: (0, t.we)("#Chat_Upload_ErrorAction_Close"),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        var xn = r(25792);
        function Qn(m) {
          const { showErrorInfo: o, event: d } = m.context,
            y = d?.clanSteamID.GetAccountID() ?? 0;
          return y == Xt.GU ||
            y == Xt.bv ||
            (g.TS.EUNIVERSE == L.Rv && y == Xt.mW) ||
            (g.TS.EUNIVERSE == L.wLO && y == Xt.Kd)
            ? (0, n.jsx)(xn.tH, {
                children: (0, n.jsx)(Zn, { clanAccountID: y }),
              })
            : o
              ? (0, n.jsx)("div", {
                  children: (0, t.we)("#CloudUpload_NotSupport"),
                })
              : null;
        }
        function Zn(m) {
          const { clanAccountID: o } = m,
            [d] = l.useState(() => new En(Yn(o)));
          return (0, n.jsxs)("div", {
            children: [
              (0, n.jsx)(We, { fileUploadManager: d }),
              (0, n.jsx)(Rn, { fileUploadManager: d }),
            ],
          });
        }
        function Yn(m) {
          return {
            PopulateBeginFileUploadFormData: (o) => {
              o.append("clan_account_id", "" + m);
            },
            PopulateCommitFileUploadFormData: (o) => {
              o.append("clan_account_id", "" + m);
            },
            GetBeginFileUploadURL: () =>
              g.TS.STORE_BASE_URL + "saleaction/ajaxbeginfileupload",
            GetCommitFileUploadURL: () =>
              g.TS.STORE_BASE_URL + "saleaction/ajaxcommitfileupload",
            LogFileUploadMessage: (o) => {
              console.log("UploadFileButton: ", o);
            },
            GetMaxFileSizeMB: () => 100,
          };
        }
        var Jn = r(86336),
          Xn = r(24642),
          Cn = r(16114);
        function zn(m, o, d) {
          const y = qn(m, o);
          return (0, l.useMemo)(() => {
            const O = y.results.find((z) => d == z.unique_id);
            return {
              bLoading: y.bLoading,
              success: y.success,
              userPollData: O,
              error_message: y.error_message,
              userPollSubmitData: y.userPollSubmitData,
            };
          }, [y, d]);
        }
        function qn(m, o) {
          const d = (0, oe.I)({
            queryKey: ln(m, o),
            queryFn: async () => {
              const O = await (
                await fetch(Wn(m, o, !1), {
                  method: "GET",
                  credentials: "include",
                })
              ).json();
              return Un(O);
            },
            placeholderData: {
              results: [],
              success: Y.S7,
              bLoading: !0,
              userPollSubmitData: { user_poll_option_votes: [] },
            },
          });
          return d.data
            ? d.data
            : {
                results: [],
                success: Y.S7,
                bLoading: !0,
                userPollSubmitData: { user_poll_option_votes: [] },
              };
        }
        function _n(m, o) {
          const d = (0, pe.jE)();
          return (0, Pe.n)({
            mutationKey: [
              "useSetPartnerEventCastVoteUserPoll",
              m.GetAccountID(),
              o,
            ],
            mutationFn: async (y) => {
              const O = { votes: y.votes },
                z = await fetch(Wn(m, o, !0), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(O),
                  credentials: "include",
                });
              if (!z.ok) throw new Error(`Server returned ${z.status}`);
              return await z.json();
            },
            onSuccess: (y, O) => {
              if (y.success == Y.R) d.setQueryData(ln(m, o), () => Un(y));
              else {
                const z = d.getQueryData(ln(m, o));
                if (z) {
                  const te = {
                    ...z,
                    success: y.success,
                    error_message: y.error_message,
                  };
                  d.setQueryData(ln(m, o), () => te);
                }
              }
            },
          });
        }
        function Un(m) {
          return {
            ...m,
            bLoading: !1,
            userPollSubmitData: {
              user_poll_option_votes: m.results
                .map((o) => o.voted_option_id)
                .reduce((o, d) => o.concat(d), []),
            },
          };
        }
        function ln(m, o) {
          return er(m.ConvertTo64BitString(), o);
        }
        function er(m, o) {
          return ["usePartnerEventUserPoll", m, o];
        }
        function Wn(m, o, d) {
          return `${g.TS.COMMUNITY_BASE_URL}partnerevents/${m.ConvertTo64BitString()}/userpoll/${o}/${d ? "ajaxcastvote" : "ajaxloaddata"}/?origin=${encodeURIComponent(location.origin)}`;
        }
        const tr = 1440 * 60;
        function Bn(m, o) {
          let d = 0;
          return (
            o.poll_end_time
              ? (d = o.poll_end_time)
              : (d =
                  (m.rtime32_visibility_start ?? m.rtime32_start_time ?? 0) +
                  (o.poll_end_days_since_start || tr)),
            d
          );
        }
        function nr(m, o) {
          return Bn(m, o) < Math.floor(Date.now() / 1e3);
        }
        var Dr = r(98609);
        const Ir = null;
        function xr(m) {
          return `${Config.COMMUNITY_BASE_URL}mediaconvert/ajaxgroupconvert/${m.ConvertTo64BitString()}`;
        }
        var Nn = ((m) => (
            (m.k_EPollResult_NotVisible = "not_visible"),
            (m.k_EPollResult_Visible_After_Vote = "after_vote"),
            (m.k_EPollResult_Visible_After_End = "after_end"),
            (m.k_EPollResult_Visible_After_Vote_Or_End = "after_vote_or_end"),
            (m.k_EPollResult_Visible_On_Demand = "on_demand"),
            m
          ))(Nn || {}),
          rr = ((m) => (
            (m.k_EPollVoter_AnyUser = "any_user"),
            (m.k_EPollVoter_UserGameInLibrary = "user_game_in_library"),
            (m.k_EPollVoter_MinPlayTime = "min_play_time"),
            (m.k_EPollVoter_MemberOfGroup = "member_of_group"),
            m
          ))(rr || {}),
          ir = r(76559),
          sr = r(28515),
          Kn = r(56330),
          ar = r(86959),
          lr = r(6365),
          Rt = r.n(lr);
        function or(m) {
          const o = m.context.event,
            d = m.context.showErrorInfo,
            y = (0, a.j$)(m.args, "poll_id"),
            O = Number.parseInt(y),
            z = (0, ne.q3)(() => mr(o, O));
          if (!z || !o)
            return d
              ? (0, n.jsx)("div", {
                  className: Kn.ErrorStylesWithIcon,
                  children: (0, t.we)("#UserPolls_Editor_FailToFindModel", O),
                })
              : null;
          const te = (0, L.sfN)(g.TS.LANGUAGE);
          return (0, n.jsx)(xn.tH, {
            children: (0, n.jsx)(ur, {
              userPollDef: z,
              lang: te,
              eventModel: o,
            }),
          });
        }
        function mr(m, o) {
          return (
            (m?.jsondata?.user_polls || [])?.find((y) => y.poll_id == o) || null
          );
        }
        function ur(m) {
          const { eventModel: o, userPollDef: d, lang: y } = m,
            { userPollData: O, ...z } = zn(
              o.clanSteamID,
              o.GID || "0",
              d.poll_id,
            ),
            te = !!(z.error_message && z.error_message?.length > 0),
            ie = _n(o.clanSteamID, o.GID || "0"),
            [Ne, qe] = (0, l.useState)(void 0),
            [mt, Je] = (0, l.useState)(!1),
            [wt, zt] = (0, l.useState)(!1),
            Ut = O?.option_results && O?.option_results.length > 0,
            xt = ((O && O.voted_option_id?.length) || 0) > 0;
          return (
            (0, l.useEffect)(() => {
              !wt &&
                d.results_visibility_settings != Nn.k_EPollResult_NotVisible &&
                Ut &&
                (nr(
                  {
                    rtime32_visibility_start:
                      o.GetVisibilityStartTimeAndDateUnixSeconds(),
                    rtime32_start_time: o.GetStartTimeAndDateUnixSeconds(),
                  },
                  d,
                ) ||
                  xt) &&
                zt(!0);
            }, [Ut, xt, wt, o, d]),
            (0, n.jsxs)(cr, {
              ...m,
              children: [
                d.options?.map((pt) => {
                  const Pt = O?.option_results.find(
                      (Et) => Et.unique_id == pt.option_id,
                    ),
                    Wt =
                      O?.voted_option_id.includes(pt.option_id || 0) ||
                      Ne === pt.option_id;
                  return (0, n.jsx)(
                    dr,
                    {
                      lang: y,
                      pollOptionDef: pt,
                      bSelected: Wt,
                      nPercentage: wt ? Pt?.percent : void 0,
                      onClick: () => qe(pt.option_id),
                      bDisableSelection:
                        z.bLoading || !O?.vote_permitted || te || mt || xt,
                    },
                    "polloption" + pt.option_id,
                  );
                }),
                !!Ne &&
                  (0, n.jsx)(f.$n, {
                    onClick: async () => {
                      if (
                        !z.userPollSubmitData.user_poll_option_votes.includes(
                          Ne,
                        )
                      ) {
                        Je(!0);
                        const pt = {
                          user_poll_option_votes: [
                            ...z.userPollSubmitData.user_poll_option_votes,
                          ],
                        };
                        pt.user_poll_option_votes.push(Ne),
                          await ie.mutateAsync({ votes: pt }),
                          qe(void 0),
                          Je(!1);
                      }
                    },
                    children: (0, t.we)("#Button_Submit"),
                  }),
                (mt || z.bLoading) &&
                  (0, n.jsx)(k.t, {
                    size: "small",
                    position: "center",
                    string: z.bLoading ? (0, t.we)("#Loading") : void 0,
                  }),
                Ut &&
                  !xt &&
                  !wt &&
                  (0, n.jsx)(Jn.W, {
                    onClick: () => zt(!0),
                    children: (0, t.we)("#UserPolls_JustSeeResults"),
                  }),
                te &&
                  (0, n.jsx)("div", {
                    className: Kn.ErrorStylesWithIcon,
                    children: z.error_message,
                  }),
              ],
            })
          );
        }
        function cr(m) {
          const { userPollDef: o, lang: d, eventModel: y, children: O } = m,
            z = (0, sr.n)(),
            [te, ie] = (0, ne.q3)(() => [
              t.NT.GetWithFallback(o.localized_poll_description, d),
              o.user_poll_background,
            ]);
          let Ne;
          const qe = y.clanSteamID.GetAccountID();
          ie &&
            (Ne = {
              backgroundImage: `url('${(0, ar.Fk)(qe, ie)}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            });
          const mt = (0, l.useMemo)(() => ir.b.InitFromClanID(qe), [qe]),
            { userPollData: Je } = zn(mt, y.GID || "0", o.poll_id),
            wt = Bn(
              {
                rtime32_visibility_start:
                  y.GetVisibilityStartTimeAndDateUnixSeconds(),
                rtime32_start_time: y.GetStartTimeAndDateUnixSeconds(),
              },
              o,
            );
          return (0, n.jsx)("div", {
            className: Rt().PollBackground,
            style: Ne,
            children: (0, n.jsxs)("div", {
              className: Rt().PollContainer,
              children: [
                (0, n.jsx)("div", {
                  className: Rt().PollQuestion,
                  children: te,
                }),
                (0, n.jsx)("div", { className: Rt().PollOptions, children: O }),
                (0, n.jsxs)("div", {
                  className: Rt().PollStatus,
                  children: [
                    (0, n.jsx)("div", {
                      children: (0, t.Yp)(
                        "#UserPolls_status_N_Votes",
                        (0, Xn.D)(Je?.total_votes || 0),
                      ),
                    }),
                    Je?.display_message
                      ? (0, n.jsx)("div", { children: Je?.display_message })
                      : (0, n.jsx)("div", {
                          children: (0, t.PP)(
                            "#UserPolls_status_N_TimeRemaining",
                            (0, Cn.R2)(wt - z),
                          ),
                        }),
                  ],
                }),
              ],
            }),
          });
        }
        function dr(m) {
          const {
              pollOptionDef: o,
              onClick: d,
              lang: y,
              bDisableSelection: O,
              bSelected: z,
              nPercentage: te,
            } = m,
            [ie] = (0, ne.q3)(() => [
              t.NT.GetWithFallback(o.localized_option, y),
            ]),
            Ne = Math.round((te ?? 0) * 100),
            qe = !O && !!d;
          return (0, n.jsxs)("div", {
            className: (0, It.A)({
              [Rt().PollOption]: !0,
              [Rt().Selected]: z,
              [Rt().Disabled]: O,
            }),
            role: "button",
            "aria-pressed": !!z,
            "aria-disabled": !!O,
            tabIndex: qe ? 0 : void 0,
            onClick: qe ? d : void 0,
            onKeyDown: qe
              ? (mt) => {
                  (mt.key === "Enter" || mt.key === " ") &&
                    (mt.preventDefault(), d?.());
                }
              : void 0,
            children: [
              (0, n.jsx)("div", { className: Rt().BackgroundBar }),
              (0, n.jsx)("div", {
                className: Rt().ForegroundBar,
                style: { width: `${Ne}%` },
              }),
              (0, n.jsxs)("div", {
                className: Rt().ContentRow,
                children: [
                  (0, n.jsx)("div", { className: Rt().PollVoteIcon }),
                  te !== void 0 &&
                    (0, n.jsxs)("div", {
                      className: Rt().PctText,
                      children: [Ne, "%"],
                    }),
                  (0, n.jsx)("span", {
                    className: Rt().OptionText,
                    children: ie,
                  }),
                ],
              }),
            ],
          });
        }
        function jr(m) {
          return /\[userpolls\b/i.test(m);
        }
        var gr = r(90711),
          fr = r(30985),
          yr = r(30364);
        function vr(m) {
          const { dynamicImport: o, fallback: d, ...y } = m,
            [O] = (0, l.useState)(() =>
              l.lazy(async () => {
                const z = await o();
                return await (0, fr.u)(), { default: z };
              }),
            );
          return (0, n.jsx)(yr.f, {
            fallback: d,
            children: (0, n.jsx)(l.Suspense, {
              fallback: d,
              children: (0, n.jsx)(O, { ...y }),
            }),
          });
        }
        var hr = r(9032),
          pr = r(11547),
          Mr = r(1491);
        const Er = (m) => {
          const { vodInfo: o, bLoading: d } = (0, hr.fB)(m.appid);
          return !o && m.bPreviewMode
            ? (0, n.jsx)("div", {
                children: (0, t.we)(
                  d ? "#VODPlayer_Loading" : "#VODPlayer_ErrorLoading",
                  m.appid,
                ),
              })
            : (0, n.jsx)("div", {
                className: Mr.BroadcastCtn,
                children: (0, n.jsx)(xn.tH, {
                  children: (0, n.jsx)(vr, {
                    dynamicImport: async () =>
                      (
                        await Promise.all([
                          r.e(36597),
                          r.e(56589),
                          r.e(85599),
                          r.e(33512),
                          r.e(18307),
                          r.e(8892),
                          r.e(80702),
                          r.e(48355),
                          r.e(36786),
                          r.e(55050),
                          r.e(60480),
                          r.e(60839),
                          r.e(14632),
                          r.e(54409),
                          r.e(73810),
                          r.e(49968),
                          r.e(74974),
                          r.e(11095),
                          r.e(14867),
                          r.e(8319),
                          r.e(10177),
                          r.e(68396),
                        ]).then(r.bind(r, 7132))
                      ).default,
                    nAppIDVOD: m.appid,
                    watchLocation: gr.nn.TC,
                    bStartPaused: !0,
                  }),
                }),
              });
        };
        function Ar(m) {
          const o = new Set();
          for (const d of m.matchAll(/\[vod\b([^\]]*)\]/gi)) {
            const y = k_BBCodeAppIDArgRegExp.exec(d[1] ?? ""),
              O = y ? Number.parseInt(y[1] ?? y[2] ?? y[3] ?? "") : 0;
            O && o.add(O);
          }
          return Array.from(o);
        }
        function br(m) {
          const o = (0, pr.H)(m.args, "appid", 0);
          return (0, n.jsx)(Er, {
            appid: o,
            bPreviewMode: !!m.context.showErrorInfo,
          });
        }
        let jn = null;
        function Sr() {
          return (
            jn == null &&
              (jn = new Map([
                ["remindme", { Constructor: A, autocloses: !1 }],
                ["vod", { Constructor: br, autocloses: !1 }],
                ["giveawayeligible", { Constructor: F, autocloses: !1 }],
                ["claimitem", { Constructor: p, autocloses: !0 }],
                ["packagepurchaseable", { Constructor: dn, autocloses: !1 }],
                ["actiondialog", { Constructor: Z, autocloses: !1 }],
                ["uploadfilebutton", { Constructor: Qn, autocloses: !0 }],
                ["userpolls", { Constructor: or, autocloses: !1 }],
                ["meetsteamsessiongroup", { Constructor: ht, autocloses: !1 }],
                ["meetsteamscheduleview", { Constructor: Ge, autocloses: !1 }],
              ])),
            jn
          );
        }
        let An = null;
        function kn() {
          return (
            An == null &&
              (An = new Map([
                ...Array.from(Sr().entries()),
                ...Array.from(J.entries()),
              ])),
            An
          );
        }
        let On = null;
        function Or() {
          return (
            On == null &&
              (On = new Map([
                ...Array.from(GetEventBBCodeDisplayDictionary().entries()),
                ...Array.from(kn().entries()),
              ])),
            On
          );
        }
        function wr(m) {
          return (0, n.jsx)(Pn, { children: (0, n.jsx)(Ke.Zn, { ...m }) });
        }
        function Pr(m) {
          return jsx(Pn, { children: jsx(EventBBDisplayElement, { ...m }) });
        }
        function Pn(m) {
          return (0, n.jsx)(Ke.d3, { dictionary: kn(), children: m.children });
        }
      },
      42184: (me, ue, r) => {
        "use strict";
        r.d(ue, { v: () => E });
        var n = r(7850),
          T = r(33752),
          a = r(36707),
          s = r(17009),
          t = r.n(s);
        function E(A) {
          return (0, n.jsx)("div", {
            className: (0, a.A)(
              t().AppPartnerEventsBanner,
              "AppPartnerEventsBanner",
            ),
            children: (0, n.jsx)(T.W, { ...A }),
          });
        }
      },
      68988: (me, ue, r) => {
        "use strict";
        r.d(ue, { C: () => h });
        var n = r(42277),
          T = r(72604),
          a = r(72609);
        const s = "partnereventaction/myvote",
          t = "partnereventaction/rateevent";
        async function E(f) {
          const M = a.TS.STORE_BASE_URL + s + "?gid=" + encodeURIComponent(f),
            $ = await fetch(M, { credentials: "include" });
          if (!$.ok) throw new Error(`${M} answered ${$.status}`);
          return (await $.json()).vote ?? null;
        }
        async function A(f, M, $) {
          const k = a.TS.STORE_BASE_URL + t,
            _ = {
              gid: f,
              clanaccountid: String(M),
              voteup: $ == "up" ? "1" : "0",
            },
            Z = await fetch(k, {
              method: "POST",
              credentials: "include",
              body: new URLSearchParams(_),
            });
          if (!Z.ok) throw new Error(`${k} answered ${Z.status}`);
          return (await Z.json()).success ?? T.zi;
        }
        const q = { GetMyEventVote: E, RateEvent: A };
        var W = r(72849),
          N = r(68312),
          U = r(90626),
          J = r(71742),
          R = r(67705);
        let X;
        function h(f, M) {
          const $ = f?.AnnouncementGID,
            k = f?.clanSteamID.GetAccountID() ?? 0,
            _ = g(),
            { myVote: Z, Vote: V } = (0, n.KL)($, k, _, {
              initialVote: l($),
              ...M,
            });
          return {
            myVote: Z,
            Vote: (u) => {
              !f ||
                !$ ||
                u == Z ||
                (Z && f.UpdateVoteCount(Z, -1), f.UpdateVoteCount(u, 1), V(u));
            },
          };
        }
        function g() {
          const { useActiveCMInterface: f } = (0, N.tc)(),
            M = (0, N.KV)(),
            $ = !!f;
          return U.useMemo(
            () =>
              $
                ? {
                    GetMyEventVote: async (k) => await b(M, k),
                    RateEvent: async (k, _, Z) => await v(M, k, _, Z),
                  }
                : q,
            [$, M],
          );
        }
        async function b(f, M) {
          if (!f) return null;
          const $ = await W.BE.GetClanAnnouncementVoteForUser(f, {
            announcementid: M,
          });
          return $.BSuccess()
            ? $.Body().voted_up()
              ? "up"
              : $.Body().voted_down()
                ? "down"
                : null
            : null;
        }
        async function v(f, M, $, k) {
          return f
            ? (
                await W.BE.RateClanAnnouncement(f, {
                  announcementid: M,
                  vote_up: k == "up",
                  clan_accountid: $,
                })
              ).GetEResult()
            : T.Dy;
        }
        function l(f) {
          if (typeof window > "u") {
            (0, J.wT)(!1, "GetVoteFromPageConfig is browser only");
            return;
          }
          return (
            X ||
              ((X = new Map()),
              (0, R.Fd)("uservotes", "application_config")?.forEach(($) => {
                $.clanAnnouncementGID &&
                  X.set(
                    $.clanAnnouncementGID,
                    $.voted_up ? "up" : $.voted_down ? "down" : null,
                  );
              })),
            f ? X.get(f) : void 0
          );
        }
      },
      93285: (me, ue, r) => {
        "use strict";
        r.r(ue),
          r.d(ue, {
            EventDisplaySteamAwardNomination: () => Bt,
            UserEligibleToNominateOrVote: () => Ce,
            WinterSaleSteamAwardVoteWrapper: () => bt,
            default: () => yt,
          });
        var n = r(7850),
          T = r(72604),
          a = r(99412),
          s = r(34041),
          t = r(72609),
          E = r(75233),
          A = r(80902),
          q = r(51614),
          W = r(19367),
          N = r.n(W);
        const U = N()("2026-11-23T09:30:00-08:00").unix(),
          J = N()("2026-11-30T10:00:00-08:00").unix();
        function R() {
          return 2025;
        }
        function X(Q) {
          return `${t.TS.MEDIA_CDN_URL}store/promo/${Q}`;
        }
        const h = "#173471",
          g = "#ee6c5d",
          b = "#FFFFFF";
        function v() {
          return {
            strBackgroundColor: "red",
            strBackgroundImageURL: X("steamawards2025/header_notrophy.webp"),
            strTrophyImageURL: X("steamawards2025/trophy_220.png?v=1"),
            strButtonColor: "blue",
            strTextColor: "white",
          };
        }
        function l() {
          return `${t.TS.STORE_BASE_URL}steamawards/ajaxgetwidgetstyle`;
        }
        const f = N()("2026-12-17T09:30:00-08:00").unix(),
          M = N()("2027-01-02T10:00:00-08:00").unix(),
          $ = { 2023: 2640290, 2024: 3334340, 2025: 4147080, 2026: 5350740 },
          k = 5350740,
          _ = 2215130;
        function Z(Q) {
          switch (Q) {
            case 2023:
            case 2024:
            case 2025:
              return !0;
            case 2026:
              return !1;
          }
          return !1;
        }
        function V(Q) {
          return Q >= U && Q < J;
        }
        function c(Q, fe) {
          return (
            Q.BIsEventActionEnabled(fe) ||
            fe < Q.GetStartTimeAndDateUnixSeconds()
          );
        }
        function u(Q) {
          return Q >= U;
        }
        function p(Q, fe, Ae, Fe) {
          const Te = I(Q, fe),
            Ze = I(Q, Ae);
          if (!(!Te.length && !Ze.length))
            return {
              nomination: Te.length
                ? { rgCategories: Te, bNominationsLive: Fe }
                : void 0,
              vote: Ze.length
                ? { rgCategories: Ze, bNominationsLive: Fe }
                : void 0,
            };
        }
        function S(Q) {
          return Q >= f && Q < M;
        }
        function F(Q) {
          return Q >= M;
        }
        function w(Q) {
          return Q > 0;
        }
        function I(Q, fe) {
          const Ae = [];
          for (const Fe of fe.filter(w)) {
            const Te = Q.find((Ze) => Ze.voteid == Fe);
            Te?.localization?.title &&
              Ae.push({
                eCategoryID: Fe,
                strTitle: Te.localization.title,
                strDescription: Te.localization.award_description ?? "",
                bLaborOfLove: Te.flag == s.Xs.bV,
              });
          }
          return Ae;
        }
        function L(Q) {
          return ["SteamAwards.GetUserNominations", Q];
        }
        function Me(Q) {
          return ["StoreSales.GetUserVotes", Q, k];
        }
        function j(Q, fe) {
          const Ae = (0, E.jE)(),
            Fe = L(t.iA.accountid),
            { data: Te, isPending: Ze } = (0, A.I)({
              queryKey: Fe,
              queryFn: async () => await fe.GetMySteamAwardNominations(),
              enabled: !!t.iA.accountid,
            }),
            { mutate: et } = (0, q.n)({
              mutationFn: async (Ke) => {
                const dt = await fe.NominateForSteamAward(Ke, Q);
                if (dt != T.R)
                  throw new Error(
                    `SteamAwards.Nominate failed with ${dt} for ${Q} and appid ${Ke}`,
                  );
              },
              onMutate: (Ke) =>
                Ae.setQueryData(Fe, (dt) => [
                  ...(dt ?? []).filter((Oe) => Oe.category_id != Q),
                  { category_id: Q, appid: Ke },
                ]),
              onError: () => Ae.invalidateQueries({ queryKey: Fe }),
            });
          return {
            unNominatedAppID: Te?.find((Ke) => Ke.category_id == Q)?.appid,
            bAnswered: Te != null || !t.iA.accountid || !Ze,
            Nominate: et,
          };
        }
        function ne(Q, fe) {
          const Ae = (0, E.jE)(),
            Fe = Me(t.iA.accountid),
            { data: Te, isPending: Ze } = (0, A.I)({
              queryKey: Fe,
              queryFn: async () => await fe.GetMySteamAwardVotes(),
              enabled: !!t.iA.accountid,
            }),
            { mutate: et } = (0, q.n)({
              mutationFn: async (Ke) => {
                const dt = await fe.SetSteamAwardVote(Ke, Q);
                if (dt != T.R)
                  throw new Error(`StoreSales.SetVote failed with ${dt}`);
              },
              onMutate: (Ke) =>
                Ae.setQueryData(Fe, (dt) => [
                  ...(dt ?? []).filter((Oe) => Oe.voteid != Q),
                  { voteid: Q, appid: Ke },
                ]),
              onError: () => Ae.invalidateQueries({ queryKey: Fe }),
            });
          return {
            unVotedAppID: Te?.find((Ke) => Ke.voteid == Q)?.appid,
            bAnswered: Te != null || !t.iA.accountid || !Ze,
            Vote: et,
          };
        }
        var De = r(64868),
          D = r(89926),
          ee = r(39905),
          le = r(40358),
          Y = r(21721),
          ye = r(90626),
          oe = r(1880),
          pe = r(69168),
          Pe = r(12247),
          ge = r.n(Pe),
          He = r(95695),
          ce = r.n(He),
          se = r(85599),
          Ee = r(36707);
        const xe = ye.createContext(void 0);
        function ft(Q) {
          return (0, n.jsx)(xe.Provider, {
            value: Q.widgetStyle,
            children: Q.children,
          });
        }
        function Qe() {
          return ye.useContext(xe) ?? v();
        }
        function nt(Q) {
          const {
              strMainTitle: fe,
              subtitle: Ae,
              headerText: Fe,
              headerContent: Te,
              children: Ze,
              footer: et,
            } = Q,
            Ke = Qe(),
            dt = {
              backgroundColor: Ke.strBackgroundColor,
              backgroundImage: `url( ${Ke.strBackgroundImageURL} )`,
              color: Ke.strTextColor,
            };
          return (0, n.jsxs)("div", {
            style: dt,
            className: (0, Ee.A)(
              ge().SteamAwardContainer,
              ce().PartnerEventFont,
            ),
            children: [
              (0, n.jsxs)("div", {
                className: ge().SteamAwardHeader,
                children: [
                  (0, n.jsx)("img", {
                    className: ge().SteamAwardHeaderImage,
                    src: Ke.strTrophyImageURL,
                    alt: "",
                  }),
                  (0, n.jsxs)("div", {
                    className: ge().SteamAwardMainCtn,
                    children: [
                      (0, n.jsx)("div", {
                        className: ge().SteamAwardMainTitle,
                        children: fe,
                      }),
                      Ae,
                      (0, n.jsx)("div", {
                        className: ge().SteamAwardHeaderText,
                        children: Fe,
                      }),
                      Te,
                    ],
                  }),
                ],
              }),
              Ze,
              !!et &&
                (0, n.jsx)("div", {
                  className: ge().SteamAwardLinkToNominationPage,
                  children: et,
                }),
            ],
          });
        }
        function at(Q) {
          return `${t.TS.STORE_BASE_URL}steamawards/${Q ? "nominations/" : ""}`;
        }
        function ve() {
          return (0, n.jsx)(se.t, {
            className: ge().SteamAwardContainer,
            size: "medium",
            position: "center",
            string: ee.Z.Localize("#Loading"),
          });
        }
        function we(Q) {
          const { elDialogElement: fe, fnShowLogonDialog: Ae } = (0, D.l)(),
            [Fe, Te, Ze] = (0, De.uD)();
          return {
            elDialogElement: (0, n.jsxs)(n.Fragment, {
              children: [
                fe,
                (0, n.jsx)(pe.E, {
                  active: Fe,
                  children: (0, n.jsx)(ke, { bVote: Q, closeModal: Ze }),
                }),
              ],
            }),
            BCanTakeAction: () =>
              t.iA.logged_in ? (t.iA.is_limited ? (Te(), !1) : !0) : (Ae(), !1),
          };
        }
        function ke(Q) {
          const { bVote: fe, closeModal: Ae } = Q;
          return (0, n.jsx)(oe.o0, {
            strTitle: ee.Z.Localize("#Informational_Message"),
            onCancel: Ae,
            onOK: Ae,
            bAlertDialog: !0,
            children: (0, n.jsx)("div", {
              children: ee.Z.LocalizeReact(
                fe
                  ? "#SteamAward_Vote_LimitedAccount"
                  : "#SteamAward_Nominate_LimitedAccount",
                (0, n.jsx)("a", {
                  href: `${t.TS.HELP_BASE_URL}wizard/HelpWithLimitedAccount`,
                  target: t.TS.IN_CLIENT ? void 0 : "_blank",
                  rel: "noreferrer",
                  children: ee.Z.Localize("#User_LimitedAccount_UrlInfo"),
                }),
              ),
            }),
          });
        }
        function Ue(Q) {
          const {
              strLocTokenInfix: fe,
              unCurrentAppID: Ae,
              unNewAppID: Fe,
              fnOnConfirm: Te,
              closeModal: Ze,
            } = Q,
            { data: et } = (0, le.J$)({ appid: Ae }),
            { data: Ke } = (0, le.J$)({ appid: Fe }),
            { data: dt } = (0, le.lv)({ appid: Ae }),
            { data: Oe } = (0, le.lv)({ appid: Fe }),
            Ot = dt ? (0, Y.b0)(dt, "small_capsule") : void 0,
            vt = Oe ? (0, Y.b0)(Oe, "small_capsule") : void 0;
          return (0, n.jsx)(oe.o0, {
            modalClassName: ge().SteamAwardConflictModal,
            strTitle: ee.Z.Localize(
              fe == "Vote"
                ? "#SteamAward_VoteConflictWarning_Title"
                : "#SteamAward_NominationConflictWarning_Title",
            ),
            closeModal: Ze,
            onOK: Te,
            onCancel: Ze,
            children: (0, n.jsxs)("div", {
              className: ge().ConflictBody,
              children: [
                ee.Z.LocalizeReact(
                  fe == "Vote"
                    ? "#SteamAward_VoteConflictWarning_Explanation"
                    : "#SteamAward_NominationConflictWarning_Explanation",
                  (0, n.jsx)("span", {
                    className: ge().SteamAwardModalGameTitle,
                    children: et?.name,
                  }),
                  (0, n.jsx)("span", {
                    className: ge().SteamAwardModalGameTitle,
                    children: Ke?.name,
                  }),
                ),
                Ot && vt
                  ? (0, n.jsxs)("div", {
                      className: ge().NominationSwitchCtn,
                      children: [
                        (0, n.jsx)("img", { src: Ot, alt: "" }),
                        "\u2192",
                        (0, n.jsx)("img", { src: vt, alt: "" }),
                      ],
                    })
                  : (0, n.jsx)(se.t, {
                      size: "small",
                      position: "center",
                      string: ee.Z.Localize("#Loading"),
                    }),
              ],
            }),
          });
        }
        var $e = r(16412),
          tt = r(53113);
        function _e(Q) {
          const {
              unAppID: fe,
              widget: Ae,
              actions: Fe,
              bNominationsOpen: Te,
            } = Q,
            Ze = Ae.rgCategories[0],
            { data: et } = (0, le.J$)({ appid: fe }),
            {
              unNominatedAppID: Ke,
              bAnswered: dt,
              Nominate: Oe,
            } = j(Ze.eCategoryID, Fe),
            { elDialogElement: Ot, BCanTakeAction: vt } = we(!1),
            { strButtonColor: kt } = Qe(),
            [St, jt, Nt] = (0, De.uD)();
          if (!Ae.bNominationsLive) return null;
          if (!dt) return (0, n.jsx)(ve, {});
          const ht = (0, tt.NT)(at(!0)),
            K = Ke == fe,
            H = Ae.rgCategories.length == 1,
            C = Te && !Ze.bLaborOfLove,
            je = (Ie) => {
              if (!(!Ie || !vt())) {
                if (Ke && Ke != fe) {
                  jt();
                  return;
                }
                Oe(fe);
              }
            };
          return (0, n.jsxs)(nt, {
            strMainTitle: ee.Z.Localize("#SteamAwards_EventMainTitle"),
            subtitle: (0, n.jsxs)("div", {
              className: ge().SteamAwardSubTitle,
              children: [
                Te
                  ? ee.Z.Localize("#SteamAwards_EventCallToAction")
                  : ee.Z.Localize("#SteamAwards_EventVotingDateTeaser", R()),
                Te &&
                  (0, n.jsxs)("a", {
                    href: ht,
                    className: ge().SteamAwardLearnMore,
                    children: [
                      "(",
                      ee.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
                      ")",
                    ],
                  }),
              ],
            }),
            headerText: Te
              ? H
                ? ee.Z.Localize(
                    "#SteamAwards_EventNominateGamePrompt_Long",
                    et?.name ?? "",
                  )
                : (0, n.jsx)("a", {
                    className: ge().LinkText,
                    href: ht,
                    children: ee.Z.Localize(
                      "#SteamAwards_EventNominateGamePrompt_NoCategory",
                      et?.name ?? "",
                    ),
                  })
              : ee.Z.Localize("#SteamAwards_Event_NominationsClosed"),
            footer:
              C &&
              (0, n.jsx)("a", {
                href: ht,
                children: ee.Z.Localize(
                  "#SteamAwards_EventNominationAlternativeLinkText",
                ),
              }),
            children: [
              !!(H && (Te || K)) &&
                (0, n.jsx)("div", {
                  className: (0, Ee.A)(
                    ge().SteamAwardNominationWidget,
                    ge().SteamAwardVoteWidget,
                  ),
                  children: (0, n.jsxs)("div", {
                    className: ge().NominateCtn,
                    children: [
                      (0, n.jsx)("div", {
                        style: { background: kt },
                        className: (0, Ee.A)(
                          ge().SteamAwardNominateButton,
                          K && ge().Nominated,
                        ),
                        children: (0, n.jsx)($e.Yh, {
                          controlled: !0,
                          className: (0, Ee.A)(
                            ge().SteamAwardVoteCheckBox,
                            K && ge().Nominated,
                          ),
                          checked: K,
                          onChange: je,
                          disabled: K,
                          color: "#FFFFFF",
                          highlightColor: "white",
                          label: (0, n.jsx)("div", {
                            className: ge().SteamAwardCategoryTitle,
                            children: ee.Z.Localize(
                              K
                                ? "#SteamAwards_NominateWidget_CTA_PastTense"
                                : "#SteamAwards_NominateWidget_CTA",
                              Ze.strTitle,
                            ),
                          }),
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: ge().SteamAwardCategoryDesc,
                        children: Ze.strDescription,
                      }),
                    ],
                  }),
                }),
              Ot,
              (0, n.jsx)(pe.E, {
                active: St,
                children: (0, n.jsx)(Ue, {
                  strLocTokenInfix: "Nomination",
                  unCurrentAppID: Ke,
                  unNewAppID: fe,
                  fnOnConfirm: () => Oe(fe),
                  closeModal: Nt,
                }),
              }),
            ],
          });
        }
        function it(Q) {
          const {
              unAppID: fe,
              widget: Ae,
              actions: Fe,
              bVotesOpen: Te,
              bHideCategoryDescriptions: Ze,
            } = Q,
            { data: et } = (0, le.J$)({ appid: fe }),
            Ke = (0, tt.NT)(at(!1));
          return (0, n.jsx)(nt, {
            strMainTitle: ee.Z.Localize("#SteamAwards_EventMainTitleCombined"),
            headerText: Te
              ? ee.Z.Localize(
                  "#SteamAwards_EventVoteForGamePrompt",
                  et?.name ?? "",
                )
              : (0, n.jsx)("a", {
                  href: Ke,
                  className: ge().LinkText,
                  children: ee.Z.Localize("#SteamAwards_Event_VotesClosed"),
                }),
            headerContent: (0, n.jsx)("div", {
              className: ge().AwardCategoriesCtn,
              children: Ae.rgCategories.map((dt) =>
                (0, n.jsx)(
                  Ve,
                  {
                    unAppID: fe,
                    category: dt,
                    actions: Fe,
                    bVotesOpen: Te,
                    bHideDescription: Ze,
                  },
                  dt.eCategoryID,
                ),
              ),
            }),
            footer: (0, n.jsx)("a", {
              href: Ke,
              children: ee.Z.Localize("#EventDisplay_CallToAction_LearnMore"),
            }),
          });
        }
        function Ve(Q) {
          const {
              unAppID: fe,
              category: Ae,
              actions: Fe,
              bVotesOpen: Te,
              bHideDescription: Ze,
            } = Q,
            {
              unVotedAppID: et,
              bAnswered: Ke,
              Vote: dt,
            } = ne(Ae.eCategoryID, Fe),
            { elDialogElement: Oe, BCanTakeAction: Ot } = we(!0),
            { strButtonColor: vt } = Qe(),
            [kt, St, jt] = (0, De.uD)(),
            Nt = et == fe;
          if (!Te && !Nt) return null;
          const ht = () => {
            if (!(!Ke || !Ot())) {
              if (et && et != fe) {
                St();
                return;
              }
              dt(fe);
            }
          };
          return (0, n.jsxs)("div", {
            style: { backgroundColor: vt },
            className: ge().SteamAwardVoteWidget,
            children: [
              (0, n.jsxs)("div", {
                className: ge().SteamAwardVoteButtonArea,
                children: [
                  (0, n.jsx)("div", {
                    className: (0, Ee.A)(
                      ge().SteamAwardCategoryTitle,
                      ge().VotingTitle,
                    ),
                    children: Ae.strTitle,
                  }),
                  !Ze &&
                    (0, n.jsx)("div", {
                      className: ge().SteamAwardCategoryDesc,
                      children: Ae.strDescription,
                    }),
                  Nt
                    ? (0, n.jsx)("button", {
                        className: ge().SteamAwardVoteButtonSubmitted,
                        children: (0, n.jsx)("span", {
                          className: ge().SteamAwardVoteButtonText,
                          children: ee.Z.Localize(
                            "#SteamAward_VoteButton_VotedText",
                          ),
                        }),
                      })
                    : (0, n.jsx)("button", {
                        className: ge().SteamAwardVoteButton,
                        onClick: ht,
                        children: (0, n.jsx)("span", {
                          className: ge().SteamAwardVoteButtonText,
                          children: ee.Z.Localize(
                            "#SteamAward_VoteButton_PromptText",
                          ),
                        }),
                      }),
                ],
              }),
              Oe,
              (0, n.jsx)(pe.E, {
                active: kt,
                children: (0, n.jsx)(Ue, {
                  strLocTokenInfix: "Vote",
                  unCurrentAppID: et,
                  unNewAppID: fe,
                  fnOnConfirm: () => dt(fe),
                  closeModal: jt,
                }),
              }),
            ],
          });
        }
        var G = r(68312),
          re = r(41735),
          Se = r.n(re),
          he = r(65946),
          Xe = r(76035),
          Re = r(28515),
          x = r(18210),
          B = r(3166),
          ae = r(96538),
          be = r(88003),
          de = r(85385),
          Le = r(47875);
        function Ce(Q) {
          return B.iA.logged_in
            ? B.iA.is_limited
              ? ((0, be.pg)(
                  (0, n.jsx)(de.g, {
                    strTokenOverride: Q
                      ? "#SteamAward_Vote_LimitedAccount"
                      : "#SteamAward_Nominate_LimitedAccount",
                  }),
                  window,
                ),
                !1)
              : !0
            : ((0, be.pg)(
                (0, n.jsx)(ae.o0, {
                  strTitle: (0, x.we)("#EventDisplay_Share_NotLoggedIn"),
                  strDescription: (0, x.we)(
                    "#EventDisplay_Share_NotLoggedIn_Description",
                  ),
                  strOKButtonText: (0, x.we)("#MobileLogin_SignIn"),
                  onOK: Le.l,
                }),
                window,
              ),
              !1);
        }
        function ut(Q) {
          const fe = (0, G.KV)();
          return (0, ye.useMemo)(
            () => ({
              GetMySteamAwardNominations: () => (0, Xe.kr)(fe),
              NominateForSteamAward: async (Ae, Fe) => {
                if (Q) return T.R;
                const [Te] = await (0, Xe.N2)(fe, Ae, Fe, s.Ji.mP);
                return Te;
              },
              GetMySteamAwardVotes: () => (0, Xe.QS)(fe, k),
              SetSteamAwardVote: async (Ae, Fe) => {
                if (Q) return T.R;
                const [Te] = await (0, Xe.rv)(fe, Ae, Fe, k);
                return Te;
              },
            }),
            [fe, Q],
          );
        }
        const rt = [];
        function It(Q, fe, Ae) {
          const Fe = Q.some(w) || fe.some(w),
            Te = (0, Xe.Jo)(Fe ? k : void 0);
          return Fe
            ? Te.data
              ? { widgets: p(Te.data.votes ?? [], Q, fe, Ae), bLoading: !1 }
              : { bLoading: Te.isPending }
            : { bLoading: !1 };
        }
        function st(Q) {
          const { data: fe, isPending: Ae } = (0, A.I)({
            queryKey: ["SteamAwards.WidgetStyle"],
            queryFn: async () =>
              (await Se().get(l(), { withCredentials: !1 })).data,
            enabled: Q,
            staleTime: 1 / 0,
            retry: !1,
          });
          return { widgetStyle: fe, bLoading: Q && Ae };
        }
        function gt(Q, fe) {
          return fe ? { ...Q, bNominationsLive: !0 } : Q;
        }
        function Mt(Q) {
          return !!Q && B.TS.EUNIVERSE == a.wLO;
        }
        function Bt(Q) {
          const { event: fe, previewMode: Ae } = Q,
            [Fe, Te] = (0, he.q3)(() => [fe.GetSteamAwardCategory(), fe.appid]),
            Ze = (0, Re.n)(),
            et = c(fe, Ze),
            { widgets: Ke, bLoading: dt } = It([Fe], rt, et),
            { widgetStyle: Oe, bLoading: Ot } = st(!!Ke?.nomination),
            vt = ut(Mt(Ae));
          return dt || Ot
            ? (0, n.jsx)(ve, {})
            : Ke?.nomination
              ? (0, n.jsx)(ft, {
                  widgetStyle: Oe,
                  children: (0, n.jsx)(_e, {
                    unAppID: Te,
                    actions: vt,
                    widget: gt(Ke.nomination, !!Ae),
                    bNominationsOpen: et,
                  }),
                })
              : null;
        }
        function bt(Q) {
          const {
              appID: fe,
              voteCategories: Ae,
              bIsEventActionEnabled: Fe,
              previewMode: Te,
              bRenderFromStorePage: Ze,
            } = Q,
            { widgets: et, bLoading: Ke } = It(rt, Ae ?? rt, !1),
            { widgetStyle: dt, bLoading: Oe } = st(!!et?.vote),
            Ot = ut(Mt(Te));
          return Ke || Oe
            ? (0, n.jsx)(ve, {})
            : et?.vote
              ? (0, n.jsx)(ft, {
                  widgetStyle: dt,
                  children: (0, n.jsx)(it, {
                    unAppID: fe,
                    widget: et.vote,
                    actions: Ot,
                    bVotesOpen: Fe || !!Te,
                    bHideCategoryDescriptions: Ze,
                  }),
                })
              : null;
        }
        function yt(Q) {
          const fe = (0, B.Tc)(
            "steamwawards",
            "application_config",
          )?.votecategories;
          return fe
            ? (0, n.jsx)(bt, {
                appID: Q.appID,
                bRenderFromStorePage: !0,
                bIsEventActionEnabled: !0,
                voteCategories: fe,
              })
            : (console.error(
                `SteamAwardStorePageVoteWidget: Missing Steam Awards config for app ${Q.appID}`,
              ),
              null);
        }
      },
      79590: (me, ue, r) => {
        "use strict";
        r.d(ue, { m: () => X });
        var n = r(7850),
          T = r(99412),
          a = r(29630),
          s = r(72609),
          t = r(90626),
          E = r(48421),
          A = r(60480),
          q = r(36707),
          W = r(18210),
          N = r(53113),
          U = r(20193);
        function J(h) {
          const { gidEvent: g } = h,
            b = usePartnerEventByEventGID(g);
          return b
            ? jsx(R, {
                event: b,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(b) ?? ""),
              })
            : null;
        }
        function R(h) {
          const { event: g, lang: b, href: v } = h,
            [l, f] = (0, t.useMemo)(() => {
              const M = g.jsondata.localized_sale_product_banner,
                $ = g.jsondata.localized_sale_product_mobile_banner;
              if (M?.length && $?.length) {
                const k = W.NT.GetWithFallback(M, b),
                  _ = W.NT.GetWithFallback($, b);
                if (k?.length && _?.length)
                  return [
                    a.zU.GenerateURLFromHashAndExt(g.clanSteamID, k),
                    a.zU.GenerateURLFromHashAndExt(g.clanSteamID, _),
                  ];
              }
              return [void 0, void 0];
            }, [g, b]);
          return !l?.length || !f?.length
            ? null
            : (0, n.jsxs)("a", {
                href: v,
                className: U.Link,
                children: [
                  (0, n.jsx)("img", {
                    src: l,
                    className: (0, q.A)(U.Banner, U.Big),
                    alt: g.GetNameWithFallback(b),
                  }),
                  (0, n.jsx)("img", {
                    src: f,
                    className: (0, q.A)(U.Banner, U.Mobile),
                    alt: g.GetNameWithFallback(b),
                  }),
                ],
              });
        }
        function X(h) {
          const { gidEvent: g } = h,
            b = (0, E.RR)(g);
          return b
            ? (0, n.jsx)(R, {
                event: b,
                lang: (0, T.sfN)(s.TS.LANGUAGE),
                href: (0, N.k2)((0, A.n4)(b) ?? ""),
              })
            : null;
        }
      },
      18057: (me, ue, r) => {
        "use strict";
        r.d(ue, {
          K4: () => l,
          gS: () => f,
          pg: () => h,
          u1: () => $,
          v9: () => M,
          yi: () => g,
        });
        var n = r(7850),
          T = r(90626),
          a = r(71421),
          s = r(18210),
          t = r(75844),
          E = r(36707),
          A = r(36174),
          q = r(55351),
          W = r.n(q),
          N = r(7582),
          U = r(28515),
          J = r(54357),
          R = r(87937),
          X = r.n(R);
        function h(Z, V) {
          const u = V ?? X().tz.guess(),
            p = X().unix(Z).tz(u),
            S = (0, s.l4)();
          return S && p.locale(S), p.format("LT");
        }
        function g(Z, V, c) {
          const p = c ?? X().tz.guess(),
            S = X().unix(Z).tz(p),
            F = (0, s.l4)();
          return (
            F && S.locale(F),
            (0, n.jsxs)(T.Fragment, {
              children: [
                S.format("LT"),
                V
                  ? (0, n.jsx)(a.Gq, {
                      toolTipContent: S.format("Z") + ", " + p,
                      children: (0, n.jsxs)("span", {
                        children: ["\xA0", S.zoneAbbr()],
                      }),
                    })
                  : null,
              ],
            })
          );
        }
        function b(Z, V, c) {
          return (0, s.TW)(Z, {
            weekday: "short",
            year: c ? void 0 : "numeric",
            timeZone: V,
          });
        }
        function v(Z, V, c, u) {
          return (
            c || (c = X().tz.guess()),
            X().unix(Z).tz(c).isSame(X().unix(V).tz(c), u)
          );
        }
        const l = (0, t.PA)((Z) => {
            const {
                dateAndTime: V,
                bSingleLine: c,
                bOnlyTime: u,
                bOnlyDate: p,
              } = Z,
              S = (0, J.B)(),
              F = !u && !!V,
              w = !p && !!V,
              I = F && b(V, S),
              L = Z.stylesmodule ? { ...W(), ...Z.stylesmodule } : W();
            return c
              ? (0, n.jsxs)("span", {
                  className: u || p ? L.DateAndTimeInline : L.DateAndTime,
                  children: [
                    F && I,
                    F && w ? (0, n.jsx)("span", { children: "\xA0" }) : void 0,
                    !!(V && w) && g(V, w, S),
                  ],
                })
              : (0, n.jsxs)("div", {
                  className: L.DateAndTime,
                  children: [
                    F &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("div", {
                            className: L.LocalizedDate,
                            children: I,
                          }),
                          " ",
                          (0, n.jsx)("span", {
                            className: L.At,
                            children: (0, s.we)(
                              "#EventDisplay_DateAndTimeCombiner",
                            ),
                          }),
                        ],
                      }),
                    (0, n.jsx)("div", {
                      className: L.LocalizedTime,
                      children: !!(V && w) && g(V, w, S),
                    }),
                  ],
                });
          }),
          f = (Z) => {
            const V = (0, n.jsx)("div", {
              className: Z.stylesmodule?.DateToolTip,
              children: (0, n.jsx)(l, {
                dateAndTime: Z.rtFullDate,
                bSingleLine: !0,
                stylesmodule: Z.stylesmodule,
              }),
            });
            return (0, n.jsx)(a.m9, {
              toolTipContent: V,
              direction: "top",
              className: Z.className,
              bTopmost: !0,
              children: Z.children,
            });
          },
          M = (0, t.PA)((Z) => {
            const { startDateAndTime: V, endDateAndTime: c = 0 } = Z,
              u = Z.stylesmodule ? { ...W(), ...Z.stylesmodule } : W(),
              p = (0, J.B)(),
              S = (0, U.n)(),
              F =
                Z.bHideEndTime ||
                Z.endDateAndTime == null ||
                Z.endDateAndTime < 1;
            if (V == null || V == 0)
              return (0, n.jsxs)("div", {
                className: u.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: u.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            if (F)
              return (0, n.jsxs)("div", {
                className: u.StartDate,
                children: [
                  (0, n.jsxs)("div", {
                    className: u.RightSideTitles,
                    children: [
                      (0, s.we)(
                        V < S
                          ? "#EventDisplay_TimeInPast"
                          : "#EventDisplay_TimeUpcoming",
                      ),
                      "\xA0",
                    ],
                  }),
                  (0, n.jsx)(l, { stylesmodule: u, dateAndTime: V }),
                ],
              });
            const w = V <= S && S <= c,
              I = v(V, c, p, "day");
            return (0, n.jsxs)("div", {
              className: u.MultiDateAndTime,
              children: [
                (0, n.jsxs)("div", {
                  className: u.StartDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: u.RightSideTitles,
                      children: (0, s.we)(
                        V >= S
                          ? "#EventDisplay_TimeBeginsOn"
                          : c >= S
                            ? "#EventDisplay_TimeBeginsOn_Past"
                            : "#EventDisplay_TimeBeginsOn_StartAndEnd_Past",
                      ),
                    }),
                    (0, n.jsx)(l, {
                      stylesmodule: u,
                      bSingleLine: !0,
                      dateAndTime: V,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: u.EndDate,
                  children: [
                    (0, n.jsx)("span", {
                      className: u.RightSideTitles,
                      children: (0, s.we)(
                        c < S
                          ? "#EventDisplay_TimeEndsOn_Past"
                          : "#EventDisplay_TimeEndsOn",
                      ),
                    }),
                    (0, n.jsx)(l, {
                      stylesmodule: u,
                      bSingleLine: !0,
                      bOnlyTime: I,
                      dateAndTime: c,
                    }),
                  ],
                }),
                w &&
                  (0, n.jsx)("span", {
                    className: u.ActiveEvent,
                    children: (0, n.jsx)("span", {
                      className: (0, E.A)(
                        u.RightSideTitles,
                        u.ActiveEventCallOut,
                      ),
                      children: (0, s.we)("#Time_Now"),
                    }),
                  }),
              ],
            });
          }),
          $ = (0, t.PA)((Z) => {
            const {
                startDateAndTime: V,
                endDateAndTime: c,
                bHideEndTime: u,
              } = Z,
              p = Z.stylesmodule ? { ...W(), ...Z.stylesmodule } : W(),
              S = (0, J.B)(),
              F = (0, U.n)();
            if (V == null || V == 0)
              return (0, n.jsxs)("div", {
                className: p.DateAndTime,
                children: [
                  (0, n.jsx)("span", {
                    className: p.RightSideTitles,
                    children: (0, s.we)("#EventDisplay_TimeRange"),
                  }),
                  (0, s.we)("#EventDisplay_TimeDisplayNone"),
                ],
              });
            const w = v(V, F, S, "year"),
              I = (0, n.jsx)("div", {
                className: p.ShortDateAndTime,
                children: b(V, S, w),
              });
            let L = (0, n.jsxs)(f, {
              rtFullDate: V,
              stylesmodule: p,
              children: [
                (0, n.jsx)("div", {
                  className: p.RightSideTitles,
                  children: (0, s.we)(
                    V < F
                      ? "#EventDisplay_TimeInPast"
                      : "#EventDisplay_TimeUpcoming",
                  ),
                }),
                I,
              ],
            });
            if (
              (F < V &&
                V < F + A.Kp.PerWeek &&
                (L = (0, n.jsx)(f, {
                  rtFullDate: V,
                  stylesmodule: p,
                  children: (0, n.jsx)("div", {
                    className: p.RightSideTitles,
                    children: (0, s.PP)(
                      "#EventDisplay_EventUpcoming_WithDateAndTime",
                      I,
                      (0, n.jsxs)("div", {
                        className: p.ShortDateAndTime,
                        children: [g(V, !1, S), " "],
                      }),
                    ),
                  }),
                })),
              u || c == null || c < 1)
            )
              return L;
            const Me = V <= F && F <= c;
            Me &&
              (L = (0, n.jsx)(f, {
                rtFullDate: V,
                className: p.ActiveEvent,
                stylesmodule: p,
                children: (0, n.jsx)("span", {
                  className: p.ActiveEventCallOut,
                  children: (0, s.we)("#Time_Now"),
                }),
              }));
            let j = null;
            const ne = Me ? c - F : c - V;
            if (ne <= A.Kp.PerDay) {
              const D = (0, n.jsx)("div", {
                className: p.ShortDateAndTime,
                children: (0, s.Hq)(ne, !0),
              });
              c < F
                ? (j = (0, n.jsxs)("div", {
                    className: p.RightSideTitles,
                    children: [(0, s.we)("#EventDisplay_TimeEndsOn_Ran"), D],
                  }))
                : (j = (0, n.jsx)("div", {
                    className: p.RightSideTitles,
                    children: (0, s.PP)(
                      Me
                        ? "#EventDisplay_TimeLeft"
                        : "#EventDisplay_RunsForDuration",
                      D,
                    ),
                  }));
            } else {
              const D = v(c, F, S, "year");
              j = (0, n.jsxs)(T.Fragment, {
                children: [
                  (0, n.jsx)("div", {
                    className: p.RightSideTitles,
                    children: (0, s.we)(
                      c < F
                        ? "#EventDisplay_TimeEndsOn_Past"
                        : "#EventDisplay_TimeEndsOn",
                    ),
                  }),
                  (0, n.jsx)("div", {
                    className: p.ShortDateAndTime,
                    children: b(c, S, D),
                  }),
                ],
              });
            }
            const De = (0, n.jsx)(f, {
              rtFullDate: c,
              stylesmodule: p,
              children: j,
            });
            return (0, n.jsxs)("div", {
              className: p.ShortDateRange,
              children: [L, De],
            });
          });
        function k(Z, V, c) {
          const u = g_EventCalendarDevFeatures.GetTimeNowWithOverrideAsDate(),
            p = new Date(Z * 1e3),
            S = new Date(V * 1e3),
            F = u.getFullYear() == p.getFullYear(),
            w = u.getFullYear() == S.getFullYear(),
            I = p.getFullYear() == S.getFullYear(),
            L = I && p.getMonth() == S.getMonth(),
            Me = L && p.getDate() == S.getDate(),
            j = {
              day: "numeric",
              month: c ?? "long",
              year: F ? void 0 : "numeric",
            },
            ne = p.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              j,
            );
          if (Me) return ne;
          {
            const De = {
                day: "numeric",
                month: L && w ? void 0 : (c ?? "long"),
                year: I ? void 0 : "numeric",
              },
              D = S.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                De,
              );
            return ne + " - " + D;
          }
        }
        function _(Z) {
          const {
            rtStartDate: V,
            rtEndDate: c,
            strMonthFormat: u,
            className: p,
          } = Z;
          return jsxs("div", { className: p, children: [k(V, c, u), " "] });
        }
      },
      32651: (me) => {
        me.exports = {
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
      89767: (me) => {
        me.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      37501: (me) => {
        me.exports = { ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm" };
      },
      33998: (me) => {
        me.exports = { Ctn: "_1BsM1CkjnMDPzj027r1TEC" };
      },
      93507: (me) => {
        me.exports = {
          Ctn: "_3NIqIo6tGlpqtfGjHpyLie",
          VisibilityOverride: "_3pcYsTE5HL27MtO86WYmme",
          CtnRegistered: "_1VB65QYhIgMFp2q1ZP6J7m",
          SessionTitle: "_1OTRg9MwZ-gXnTlzsAk3eo",
          SessionDesc: "p3KQHdRiob_3hxCpLh0uq",
          SessionAudience: "_2uhzVmwMkXjVFDHkkGZHH2",
          SessionInfoLink: "_3p8YtOkGirN939Ea_jXZxt",
          SessionOptions: "_2wVsMqm6JJCnwCY17iSy8e",
          InstanceDivider: "gl2vdc67LNUjjtiXqPFH7",
          SessionColumnCtn: "_2f1ChYzzL2olk2rc26ryZd",
          SessionInstance: "_2Ds0oFNiqwjLbUIXS3vtza",
          Background: "_7eGMMwFRbr4j5BfzKni4",
          Button: "_3GG-T1DiWDj3SFj3OxHvqk",
          Title: "FASRtKtyZqBG0qYF-Z9jC",
          TimeFrame: "_1Bghmlop5OeD8yo0vgWZfi",
          MaxSize: "K4pWcOihhDvMT-fDws-VV",
          SoldOut: "rgGd8Am1rg1mz_kxvEGH6",
          Max: "_1yjWYrgU1bUzf5NayfQasE",
          Day: "_1nveS3mgrR2b1IS8eMMbyB",
          Time: "_2yvFwPbCS-ANZl7acURIx_",
          Registering: "_83qj5S18JG9HmEKI9Wmc7",
          Registered: "_2qabIqTzYkEcr3iJYDlZzc",
          RegisteredElsewhere: "_3aHc8KtKOQ-SwqTYJIuDb8",
          Unregistering: "_275cqznDlVXIWbEw8_PnF3",
          StatusText: "_2GDjx_pi9_pnifIUoqsaGc",
          CompleteRegistrationCtn: "_1GysEsKJ5GLzadr9CREzKu",
          Visible: "NxuVWv-dDPNw29fHP7030",
          "confirm-panel-intro": "_3Fo1c-SNWhknOr2k_l8u3g",
          ExpanderRow: "_7dh50vSyIAlY2RiPYghM_",
          FAQDisplay: "_2b79ASKFdOZ6byYhNUAt_f",
          SingleDayCtn: "_35p36HiLyvDBzAUK1o3rJu",
          ScheduleTopDate: "_1zgdCPTGowHjI64yMQ0SIX",
          ScheduleRow: "_3qt63DpwOZeaHX-5Ma_gTC",
          ScheduleTimeColumn: "_1nL-IL0bfiLvA7Xt_OXHH6",
          Timezone: "_11w6YvEmWuRgFvbXV-ewap",
          ScheduleSessionsColumn: "_1EgCyIh4WiJJ6qFQPgDCU4",
          ScheduleActionRow: "_2bw3ivGwUkjG31I4_kwk7r",
        };
      },
      6365: (me) => {
        me.exports = {
          PollBackground: "_2r_t3AhqjpzUxObM0vLPwL",
          PollContainer: "_3hHnAsj2GNM_j1UZvYD5mi",
          PollQuestion: "_3jEARWe0zZetd6h8KP6kCo",
          PollOptions: "_1M3TJW3OFn6kL8Y2NegE1Q",
          PollOption: "_1qcuI6mCt5_qtvFIRZYFUl",
          Selected: "_1tGKmiNT8kR1M3BFlWcG1j",
          PollVoteIcon: "_1dpuVtT-fBprfWUYwIYVf9",
          Disabled: "FNR2rMnaJDHSxS8QcOw3Z",
          ContentRow: "_2y19ohgg-3iLZIuV1Pt627",
          BackgroundBar: "_2R8BCMr1cgNzCrRd3tkNNb",
          ForegroundBar: "OSxkpWT-ORYpJSdW2JZMm",
          PctText: "MU9BomtVv8bCuqosNmbo",
          OptionText: "_2MjpgTcoK-yty8ZkBXirNL",
          PollStatus: "tpwoVtxSkk230qksahSCn",
        };
      },
      1491: (me) => {
        me.exports = { BroadcastCtn: "b2Fu47WqOo1P0imbAoSy1" };
      },
      38182: (me) => {
        me.exports = {
          narrowWidth: "500px",
          EventDetailTimeInfo: "xBUZ1jJ4rafFpeTqBLFXy",
          StartDate: "_3fnIGWmHQRS3H57PR7Qm0V",
          EndDate: "_27ujtr5AsAF4_qa1HEifF4",
          MultiDateAndTime: "_130Qkcrkkg7Ygi1ksNJVM",
          RightSideTitles: "_34vtF4hGMg7lb2WZUbe8ie",
          DateAndTime: "zLuUcDh0YJONQX3MssuAu",
          VerticalLocalDateAndTime: "MT8Ri2dV3bsGLkpXTvoVG",
        };
      },
      20881: (me) => {
        me.exports = { AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2" };
      },
      20193: (me) => {
        me.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      98462: (me) => {
        me.exports = { ReferencedApps: "_1aDVPEAcrxRDEyIXlfcBMG" };
      },
      42937: (me) => {
        me.exports = {
          FlexColumnContainer: "rh8dmsOr2EWCLPlwnCFIJ",
          FullStartTime: "_2hYSOJf-lN9ud36C3VZ8e9",
          ReminderDialog: "_1wuYdqboukc5kNT3-44sfX",
          ReminderOptions: "_2QnQmTwVmvRwL6o4ysTPBQ",
          ReminderBackground: "_13UwIiuzRz_qEbDAVBW-t-",
          ReminderExpandsLeft: "_1-ZywREdsd3bg4EdYP0XeG",
          ReminderOption: "_1x4NpiMrsiBt6sYz1zzHIc",
          Unverified: "X5LUdUZjlvYo4k6czlifb",
          CheckboxWrapper: "xpjXUWiD1HYf5bLjnpEMH",
          ReminderCheckBox: "kPLmwYMHgDUHl1qO252N2",
          IconMode: "_12XV43l_Qpg43IzyNzxR2O",
          RemindBell: "_2HlM-E-WiSOionA9tu8HB1",
          RemindCheck: "_2JziNs1TXz_ViAio_L0hFY",
          ReminderDefault: "_3NwTBeStn8IpEP8Zg2jIF6",
          TextMode: "_1zPOQ2nBel9G46FV8P-KA-",
          ReminderCheck: "_1eDuCf0wTgvblQ_etRjP06",
          ReminderOpennedOptions: "zwAlLjqNWaKW-8d69n0KK",
          ReminderOptionsHeader: "-EdAjT_iIqwrdjsZlHLXt",
          ReminderCalendarOptions: "_2fcTGlG_bOzJAhswx6vIIz",
          ReminderSettings: "_3Pr4BoHW3n0OD8XPdtzVAW",
          ReminderNotes: "_2mOFOyTA2w0vN-SOWZNXwi",
          RpcThrobber: "_2Aby7dwRv-eMDWo3OwH59",
        };
      },
      19890: (me) => {
        me.exports = {
          AppSocialLinksCtn: "JlFZxFyO0IOSiYmJt-NlE",
          AppSocialLinks: "_1SBP3NCWhesT_T7Zncoe_x",
          AppSocialLinkIcon: "_2p4QK5FnPikdfXUGvhz-rj",
          AppSocialLinkWithText: "_1pCGa1Dqa9xwEjXFCTbeaB",
          AppSocialText: "V88BDse5RqlvrzYpxlgFS",
        };
      },
      74187: (me) => {
        me.exports = {
          CheckMark: "_3QpozFqH35lAw0VLMCSzjT",
          DialogCtn: "_1Bzbk55gxuoPniZQJkoTjn",
          EquipCtn: "_2_ZLb7Wk-U4cDrBvFBE7b5",
        };
      },
      48963: (me) => {
        me.exports = {
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
      89206: (me) => {
        me.exports = {
          narrowWidth: "500px",
          ExpandRowButton: "r6FhuuUn6dvEsEckchXo5",
          Selected: "wOEL5nQgChVeJX_0DwcXg",
        };
      },
      39362: (me) => {
        me.exports = { Ctn: "_1xGaMOW4aakB5uwqOCT3nI" };
      },
      71714: (me) => {
        me.exports = {
          UploadPreviewContainer: "CCBFyy2uP4GNSQGfe2T1L",
          SVGIcon_Video: "_2Fs53eUCdV8xsO83Jc40DH",
          UploadPreview: "_1cXUbzBtV9qFc_63x_j2F2",
          FileUploadFileName: "_21dZgGfG0xtybuVTE6nCv0",
          FileUploadCancel: "rFDt7lDfNBv3BUjppBm9i",
          SVGIcon_X_Line: "_1H7hrp21ukrcZyCAzv9Oc1",
          FileUploadBtn: "_2FFH3ZhSGGItb8Z61CSGfe",
          FileUploadProgressContainer: "_1UobbffXVmx8rwsOHYeNb5",
          FileUploadProgressBarContainer: "tFbvGbecHSHr8P3EdINV-",
          FileUploadProgressName: "_288RbRaiLR6h9q5sWoD2eC",
        };
      },
      17009: (me) => {
        me.exports = {
          "duration-app-launch": "800ms",
          AppPartnerEventsPage: "_3CJsgSK-y815Zeoe6bz6dh",
          AppPartnerEventsBanner: "_1HRiMtg_SGUiOa-NXDzZl7",
          AppBannerLinks: "D1bMmHTycpEqG4Sp3VVvH",
          ControlSection: "_2pA5CW91XQQDfo6yZEdPd-",
          NoGameLink: "_2GfPecEDgnR6mwX3ysETT_",
          AppPartnerEventsBody: "_1XLRr8eh1ip-E17C8Jzrmc",
          AppBannerGroup: "qexk-JocS7jjDM31IcGZn",
          NoEvents: "_2xyx9hjeMa2Faf2k3WjG3C",
          AppBannerCtn: "wavRtSPqcvhar0kUHlKoJ",
          AppBannerBackground: "_3RHFoIvdUHn0fp8G8M258k",
          ClanBanner: "_161DWg8AuVjniVd_UE888G",
          TallBanner: "KBixgrFRi1J3OB43f1p8X",
          WideBanner: "_1hl09rgUVOJUMhgC33L7eo",
          AppBannerTitle: "_1iqjH40fN4Diar-d-rLbR5",
          NewsHubSubTitle: "_3tf3bdmBO0Ji0rv8PH-ZXz",
          AppBannerLogoCtn: "_2EV_WNLGjRLNX824mfis9O",
          AppBannerLogo: "dGGTg8iH8Z_d_p6nPFFlM",
          HeaderButtonDark: "_1sDn2dLVB1pIeh5UP4EOVT",
          HeaderFollowButton: "_1tnk5F-ooFjGdvCzXLwtmf",
          HeaderWishlistButton: "_371yXVkVSnacHxz1fMmGpT",
          AppBannerLink: "_3YomsTzhdiLRcSZkF8JtB8",
          AppBannerRSSLink: "_1HeKH4JMsCDXmXP3XD7C6t",
          AppBannerLinkDD: "_1afFDl3n1RB22K4gFglar",
          AppBannerLinkDDButton: "S9cqDrgEIhtUE6pU3-2iQ",
          DDButtonArrow: "_3URBCM-OKlL3sg0hORPS01",
          AppBannerLinkDDContainer: "_2cjCliV2mnVX6dlRRce-fD",
          WishlistBtnShort: "_3WcW8PJCSEWwVA6qJ-RUOF",
          RssRow: "_2pyH3D6qw0sOXhrtoYqCVL",
          AppPartnerEventsContainer: "_3GCEyyVil-cCS-8hoI2Zo1",
          PartnerEvent: "_1KsYSVzmvIfRivBTcx-_GE",
          LibraryViewSubtitle: "_1rbgKYHeRvzrIyqHCzaLIr",
          EventDetailsBody: "_3NW5vEM9HgfQrgR4W-Xy_s",
          NoScrollArrows: "_39hJ8cxSdqeE3ZR01bJLab",
          ControlSectionWidth: "_3yfs7fc5WEv6F9tPG4yq4g",
          ControlSectionRightSide: "_2tSyrRxMCRWK6K09JErgI_",
          GameArt: "_2a5oSdTIcFV3c3ymUNsu6l",
          ScrollButton: "_1t_97P9KMsEBaPq9y-6OUl",
          Up: "_3vBD2B7lrr6iXm8dGe71lI",
          Down: "_3VePRhMGWFsbGaZjSNXJjV",
          CloseButton: "_1_vCR1dPfyJ7_yukwDqblf",
          AnimIn: "_240i58XQ0w78YFrd_p-9UY",
          transitionIn: "_2jG5NuuER4JaHKuO9nA4KF",
          ClickableBG: "_308EDBzQTS8OgAxwxfq2UB",
          DirectionState: "Bv96jkkYqxrnA7xfPskjD",
          EventTypeAndTimeRow: "_3bWTO29arCCJ6PBGRZ7fRy",
          WithReminder: "_1C5DvpeSKLvf8M8uAdi50W",
          TimeandPostedBy: "_2WwG2r8yZuu2EMJgFTQZp8",
          EventType: "Udzrpqr8534T5DvVZveNP",
          PostedBy: "_2VqeQaZVaUkkEWaiLkmqmT",
          ReminderContainer: "_3Vf2MkZ_LWIoNVv36RwJtO",
          ReadMoreCnt: "_1YmaiDiNhC33cL5DKj05KQ",
        };
      },
      19332: (me) => {
        me.exports = { Main: "_1Zn_5pvuMbqr57ws1eJKe" };
      },
      14256: (me) => {
        me.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      6878: (me) => {
        me.exports = {
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
      12247: (me) => {
        me.exports = {
          SteamAwardContainer: "_3n6v2rFCMX3yWMfZrlCn6g",
          InLibraryView: "pqLczqVU9TDbWz5pl3Dhl",
          SVGIcon_DialogCheck: "_3ccByQfkFeqPu_u0ZEuu2b",
          SteamAwardHeader: "_2jgrTr2L4JVpD3vsEejL4u",
          SteamAwardHeaderImage: "_lRFQTx2beRUJL_3ltFfr",
          SteamAwardMainCtn: "_1uGju6QeFG7khpqA7DOs0-",
          SteamAwardMainTitle: "_161Ybvvo7TQ80J6yOfcxC5",
          SteamAwardSubTitle: "Sxxelbb28sRAaDXPxgcHP",
          SteamAwardLearnMore: "VQlY6MEAqF6Wsflo-Q4Wz",
          BottomRight: "zr64QF0O74AQ9RMG-dGnw",
          SteamAwardHeaderText: "_2mrzKOE-ejrZezNROw3GcQ",
          LinkText: "_2x4pgJBF4vbwBJ4KH2VOHG",
          SteamAwardVoteWidget: "khWz0kU5EooSG60KYdU1K",
          SteamAwardVotePrompt: "H5jrPn7OY-0ToSesPTrI6",
          SteamAwardCategoryTitle: "JVE9ORqYtUCERl3y2i7_X",
          VotingTitle: "_32ZmvScTqfRjiW9XXgyqR2",
          SteamAwardCategoryDesc: "_1V-8WYatw7PvjVj9hsAptM",
          SteamAwardVoteButtonArea: "_1v9LHwNb9fLu4yXs5L0jjz",
          SteamAwardVoteButton: "cTcgISesI0T2M-9yed2AU",
          SteamAwardVoteButtonText: "_247y340DSkN1t7QC8tUkFx",
          SteamAwardVoteButtonSubmitted: "_1ouD4mct3_CdBoy_lzVyFJ",
          NominateCtn: "_1SKPLx2FBvP9iC-lJHTkKQ",
          SteamAwardNominateButton: "_1uxCjZZ940xsM0idye1IP-",
          Nominated: "_1No9r92B3LLgMOaSMSC9vE",
          SteamAwardNominationWidget: "_38gTf-DsRc7bVnxxQXxT3B",
          SteamAwardLinkToNominationPage: "_3p83sGhSP-hikRKwITXId-",
          SteamAwardVoteCheckBox: "_1G4MUqubjzDize874UIeYh",
          SteamAwardModalGameTitle: "_15lc0ft7pgAlFXYbgePb-8",
          ExpiredEventHeader: "_3O3XsKT-SiMNsMqyidMLvS",
          AwardCategoriesCtn: "_2u4z7OT5MqNj-6wojCGnsr",
          SteamAwardConflictModal: "_2Xqc9FL9PfCQl8Fo8d7I_L",
          ConflictBody: "_3WKl_XpHUMGcIm4cNhlc_W",
          NominationSwitchCtn: "r9nDOvHWyABfkiiurnMwl",
        };
      },
      56330: (me) => {
        me.exports = {
          ErrorStyles: "_2Sg7W8jsvFcXVuQ7fbhSLJ",
          ErrorStylesWithIcon: "Lc2PK-Vkkvr2TUS0TfCqq",
          ErrorIconLayout: "_42__6kBR5lkICeFfkFnwz",
          ErrorStylesBackground: "_3fVv6M5HyJXcQ6kNF1SvoH",
          ErrorFloatBelow: "_2aKylEXoZKcXuXfFcmcuQc",
          WarningStyles: "_3gxgE6PMPecWZDBSlGjMX_",
          WarningStylesWithIcon: "_1S_uSkD_E5ayHa48JzzE0E",
          WarningIconLayout: "_2jM80ZtA-oI5okavBZZqnF",
          WarningStylesBackground: "UYrHsewdjj7dSkpWGgikw",
          Stuck: "_2b5wWgFg1yvry3TDzRUfFt",
          WarningFloatBelow: "_3e0cNuLANduciMmeZz1dnk",
          InfoStyles: "_2lreMbIjEILzP1Eomy1QZM",
          InfoStylesWithIcon: "_1_-PibdcIVQzDZEP0_PeLV",
          InfoIconLayout: "_3kyPzolDIjhIh7zW0wA6fy",
          InfoStylesBackground: "_3gNTI5UYknHdJwDfou9Iih",
          Padding: "_36hmaGtzxNb1Pql2UhfM5Z",
          NotTooWideModal: "UfQcb76CCbHawnpQ9tbu3",
          ImageManageDialog: "Pl7AIUjh5siFakQJbPFO9",
          SuccessErrorDialog: "_1wBO1L1tT0f1wtl3CpBWbn",
        };
      },
      90316: (me) => {
        me.exports = {
          narrowWidth: "500px",
          EventDetailsPageContainer: "_2Ptras-ZC31rwdT6pD-t0a",
          StickyPageBarColumn: "_2aUTuHeHvSh1O3J73MAMmQ",
          EventNotPublicBar: "_214UHKV-VeP2IhhsZ2LVcn",
          UnpublishedDataBar: "j-JOpd1RiQoelltUAkGGx",
          EventNotPublicBarTitle: "acDtTp9VueGVdAapPDLxy",
          UnpublishedDataBarTitle: "l7Y1p6I1nHpnwDPjA-a3t",
          EventNotPublicBarDetail: "_1fbHYCMO42X_XiaPzyCcQk",
          UnpublishedDataBarDetail: "_3130s6Y2hpKUIZucKqpnwE",
          EventBackgroundBlurCtn: "_32nPM5nI8cmMdkvRnsUcq",
          EventBackgroundBlur: "stsss-bTNuazY8FYtvTOX",
          DetailArtworkAgeAppropriate: "_1p_lsRZvAYiGSonqGbCnrp",
          DetailArtworkAgeNotAppropriate: "_3x5pK4kfX6SQEKh9iSj3H-",
          EventCoverImageBlr: "_3xNobHnL6L5HNoDQf8AHUo",
          EventBodyCtn: "_3o4SVY-lALGHvkOPxiClcu",
          EventBodyPosition: "_3lIxPlLiNjLik6YIM8DKpk",
          EventBody: "_3aht--c1L66YvvpY-Il67f",
          EventBroadcastCtn: "_1Ph1iFKAgY5MbG0BLSObbI",
          EventColumns: "_1PEIfuF8koQapWSDE4ixM8",
          EventCoverImageCtn: "FZiaqIAvLKRo2ye9j3cq0",
          NoTitleArtwork: "_3Y40JAThJ65ZCkZaMsdrGm",
          ScreenshotInsteadOfCover: "_2r6un4LwM4IZjQFRprhIL3",
          EventCoverImage: "_17G2yhjdc_ZmGlMv-L-S05",
          EventCoverImageBackground: "_2-IygC3-t05_RYwPl6Fkgt",
          InLibraryView: "_3_SEiDNs-lzwV7cTF6gcgt",
          InEditor: "_2YuATTfMo6qZqsst8azM2p",
          MaskImages: "_2DmRfvoCf1m6HLz3w6uKPl",
          EventCoverImageFuzz: "_2EWL0Txuk_th1gh-UxYPPx",
          LibraryEventTitleContainer: "ZHAfj0MPg1zDLXRnCzSsx",
          CoverImageGradient: "_1_x4oDqLbWfiaDp5HQ2yA8",
          EventDetailTitleImg: "_1RA5eG1kXW89QB1SG3mq04",
          EventDetailTitleDesc: "_3Ej2uoApLQ756OReRtcQ2f",
          EventDetailsSticky: "_3IxVZE9uydjh3cA9kmtnk7",
          EventDetailUserType: "_3phfIcOe_STA7hSoFfIxlE",
          EventDetailGameCallToAction: "JOkXFrkqayZ-Pg2Fr46Ho",
          EventDetailTimeInfo: "_2KsEbGy9kiSDeQpcqEc9DG",
          EventDetailsDescription: "_2orfVuUro8BNFNNhRfGk4n",
          EventDetailsBody: "A_A2B6fTn_MPLlGCmsLtd",
          EventDetailsGame: "_1JqXpZvEA66lA79AoE1A4i",
          EventDetailsAvatar: "_2U_20VMsLlLdv66vI22zJg",
          GameActions: "bGROTLQdP5BDMIzo0cL9T",
          ActionButton: "_26-KZHJ9fTyRZHH2c2H6Y2",
          Ownership: "_2VkXpaIdUFw9YfZ7NOSuZO",
          EventDetailsType: "_2u9c-A3-fBObro9MTIQ1os",
          EventDetailTitle: "TqEPC9bhvVpZ1rb3Z8Mbd",
          EventDetailTitleContainer: "_3z2NYCkFizMu4fMvWTIBUG",
          EventDetailsSubTitle: "_20f2sKS2M7PlPSnPCinT26",
          EventDescriptionRichField: "_1dV0eemBulIeNuwlrxbJA_",
          ToolBar: "zMpwi4v_VKAJy80GriVLg",
          EventDescriptionContainer: "_2-t9DuSXZ-g32FrXvXuRfC",
          EventDescriptionArea: "_3UMJE2bBtqZcj2w_S-n8o4",
          LibraryEventBodyContainer: "_32mHvRSmD7AVK9OIOPlaFu",
          "lang_zh-cn": "_2oAxPvOHyVkOcOFbH-ROOn",
          lang_ko: "_36n2d0WrYP7qNfJaBDPBzE",
          lang_ja: "-TO1bNNGYVahD_n4sJP5r",
          "lang_zh-tw": "_3lwKp3Y9WtjxoKIhneSXGJ",
          RightSideTitles: "efy3k8RozzxfFidgbdfZZ",
          DisplayAdminPanel_Title: "_1lmj3YadvgLSNGiTrVsnnT",
          AppSummaryCtn: "Wk21cv1qcYBOF2PSAOfb-",
          AppSummaryWidgetTitleCtn: "jJFfoBi2WDn1ym8KCLfLr",
          Title: "_2gsoDhNzhAXpECJk2aM94W",
          AppSummaryWidgetCtn: "_2jRJR7Vuvy9GStGxMc06AQ",
          DisplayAdminPanel: "XshNh8OHVlOoxz_Yj0fkc",
          Sticky: "_3mQwJy8e1PrRXgZq-rfYHL",
          DisplayAdminPanelMarker: "_3oBRxSIrR4NU_SUyHm24oc",
          DisplayAdminPanelClose: "_1D7XHqTP4JUViNgnjIQ9qx",
          Locked: "_1uXh_NDjzcbWYSUJnopy8Z",
          DisplayAdminPanel_ctn: "_1SQm1cGP42xfEdQhin6L40",
          DisplayAdminPanel_TopSpacer: "_3yTv-i_5aQ3b13xZpESEk-",
          DisplayAdminPanel_Spacer: "_6pX37H30C0s-x4mIFjxUX",
          AdminButton: "_1J0n9Gp8bS7Mha2SNQSwXP",
          EditorStatsCtn: "e2BAgiTc6P_7haFD_YWzs",
          VisibilityNote: "_1G3X_jfMgGX1nzeOAvPZNG",
          EditorStatsRow: "_2SecokIlleKz0K30ieApg5",
          SteamBlog: "_1rafn02Kz4HF1-3xfmuaR0",
          VO: "_1-pFh2QlJBUeqmXrWcbTQQ",
          LunarNewYearOpenEnvelopeVideoDialog: "_1-SzihnWiO-8bBYWJ-TS-4",
          Container: "_1dcfd1Jxk-yCCdG0k1eyG-",
          Column: "_3o_dPHiTf_pT5uP0TuTE2V",
          VideoBox: "KAf3yvFJr1ynRXT8aqd3s",
          CoinText: "_14dU2UGt1PmbFzm_3MFVsw",
          Visible: "_2bKyVv-GvmJOHaKOyny5tE",
          LunarNewYearOpenEnvelopeVideo: "_2JgvPxvGXJvSckj2hqob0v",
          StoryHeader: "uJBQiPn1x-EafTRgDg6M4",
          StorySubHeader: "hl9GlxJvvzMyW_nSZzClV",
          StoryText: "_1vUbVy_chcUkci3kdPrSUf",
          StoryPicture: "_1ovBW-Uq5McD_BCBZTM_9a",
          CheckBackText: "_3FFfw7Avb_USRJcepkNLAO",
          DancingRat: "_3gJiVpOab5ooTJ9VkQZVJL",
          Links: "_2U9E5YNMewy5F336yikcMG",
          MarketLink: "_19WRlHb-r_EpFcgEtFL8iV",
          MarketLinkhover: "Q7KDk8kBk01MxhM_KZoqt",
          ReadMoreCnt: "_1L8MouFdSBwf8mcqLtAIPu",
        };
      },
      39256: (me) => {
        me.exports = { ErrorDiv: "XeZExtCZ_zIcbkPRCqsnV" };
      },
      55351: (me) => {
        me.exports = {
          DateAndTime: "_2V6GLdiU4guy4ND3n4Usgg",
          DateAndTimeInline: "HZ6b2d4r4EFnT_1BeU5vo",
          At: "Fn5EUtWkwSAw_gbbiySKN",
          ActiveEvent: "rT7EkJjqw27KBB7HxAAWk",
          ActiveEventCallOut: "_2pJftSRjT_UngZZ4BJimwg",
          RightSideTitles: "_4LAnPYKRPeF-QDReu_VGm",
          DateToolTip: "_2E5LHvnVEF3dSVV3wrDflm",
          ShortDateAndTime: "MBkkhT4wei3tWetnWbiqn",
          ShortDateRange: "_3CN6I3krBRNzD7kCuKQ_w7",
        };
      },
    },
  ]);
})();
