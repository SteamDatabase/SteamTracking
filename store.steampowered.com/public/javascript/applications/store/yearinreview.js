/**** (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 ****/
(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [39297],
    {
      98001: (K, mt, i) => {
        "use strict";
        i.d(mt, { v: () => w });
        var e = i(72609);
        function G(f) {
          const { appid: L, profileUrl: C, dlc: D } = f,
            gt = C
              ? `${C}/achievements/${L}`
              : `${e.TS.COMMUNITY_BASE_URL}achievements/${L}`;
          return D !== void 0 ? `${gt}?dlc=${D}` : gt;
        }
        function w(f) {
          return G(f);
        }
      },
      3946: (K, mt, i) => {
        "use strict";
        i.d(mt, { V: () => w });
        var e = i(7850),
          G = i(72080);
        function w(f) {
          return (0, e.jsxs)("a", {
            href: f.strURL,
            className: G.gg.Box,
            "data-modal-content-sizetofit": !!f.bSizeToFit,
            "data-appid": f.appid,
            "data-publishedfileid": f.publishedfileid,
            children: [
              (0, e.jsx)(G.KN, { strURL: f.strPreviewURL }),
              (0, e.jsxs)(G.J7, {
                children: [
                  (0, e.jsx)(G.bv, { children: f.strTitle }),
                  (0, e.jsx)("div", {
                    children: (0, e.jsx)("span", {
                      className: G.gg.Type,
                      children: f.strType,
                    }),
                  }),
                  f.author && (0, e.jsx)(G.zN, { children: f.author }),
                  (0, e.jsx)(G.AT, { children: f.strDescription }),
                ],
              }),
            ],
          });
        }
      },
      93191: (K, mt, i) => {
        "use strict";
        i.d(mt, { F: () => w, n: () => G });
        var e = i(72609);
        function G(f, L) {
          return f?.public_data?.profile_url
            ? `${e.TS.COMMUNITY_BASE_URL}id/${f.public_data.profile_url}`
            : w(f?.public_data?.steamid || L);
        }
        function w(f) {
          return f ? `${e.TS.COMMUNITY_BASE_URL}profiles/${f}` : "";
        }
      },
      15860: (K, mt, i) => {
        "use strict";
        i.d(mt, { L: () => C, c: () => L });
        var e = i(27386),
          G = i(76617),
          w = i(58632),
          f = i.n(w);
        function L(D, gt) {
          return new (f())(
            async (x) => {
              const g = [...x],
                s = await e.xtC.GetPlayerLinkDetails(D, { steamids: g }),
                A = new Map();
              return (
                s
                  .Body()
                  .accounts()
                  .forEach((h) => {
                    const et = h.toObject();
                    A.set(et.public_data.steamid, et);
                  }),
                g.map((h) => A.get(h) ?? null)
              );
            },
            { maxBatchSize: 100, cache: !1, ...gt },
          );
        }
        function C(D) {
          return (0, G.V)("PlayerLinkDetails", () => L(D));
        }
      },
      54357: (K, mt, i) => {
        "use strict";
        i.d(mt, { B: () => x });
        var e = i(7850),
          G = i(90626);
        function w(s) {
          const [A, h] = useState(!1);
          return (
            useEffect(() => {
              window.SSR && (window.SSR.hydrated = !0),
                startTransition(() => h(!0));
            }, []),
            jsx(f.Provider, { value: A, children: s.children })
          );
        }
        const f = (0, G.createContext)(!1);
        function L() {
          return !0;
        }
        const C = Intl.DateTimeFormat().resolvedOptions().timeZone,
          D =
            "document" in globalThis
              ? document.cookie
                  .split(";")
                  .find((s) => s.trim().startsWith("timezoneName"))
                  ?.split("=")[1]
              : void 0,
          gt = D && decodeURIComponent(D);
        function x() {
          return L() ? C : (gt ?? C);
        }
        function g() {
          "document" in globalThis &&
            C &&
            (document.cookie = `timezoneName=${C};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`);
        }
        g();
      },
      69596: (K, mt, i) => {
        "use strict";
        i.d(mt, { O: () => w });
        const e =
          /^(#(?:[0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z-]+\([^;{}]*\)|[a-z]+)$/i;
        function G(f) {
          return f ? e.test(f.trim()) : !1;
        }
        function w(f, L) {
          return G(f) ? f : L;
        }
      },
      11547: (K, mt, i) => {
        "use strict";
        i.d(mt, { H: () => ie, k: () => se });
        var e = i(7850),
          G = i(29950),
          w = i(29630),
          f = i(68941),
          L = i(70187),
          C = i(1917),
          D = i(24660),
          gt = i(72609),
          x = i(86722),
          g = i(6878),
          s = i.n(g),
          A = i(53107),
          h = i(36707),
          et = i(53113),
          N = i(69596),
          P = i(35265);
        function ct(I) {
          switch (I) {
            case "button":
              return (0, h.A)(s().LinkButton, "LinkButton");
            case "pill":
              return (0, h.A)(s().LinkPill, "LinkPill");
            default:
              return (0, h.A)(s().Link, "Link");
          }
        }
        function Y(I, S, F) {
          let H = "";
          return (
            I == "button" && S && (H += `background-color: ${S};`),
            I == "pill" && F && (H += `color: ${F};`),
            H.length == 0 ? void 0 : H
          );
        }
        function Q(I, S, F) {
          let H;
          return (
            (I == "button" || I == "pill") && S && (H = { backgroundColor: S }),
            (I == "button" || I == "pill") &&
              F &&
              (H = { ...(H ?? {}), color: F }),
            H
          );
        }
        function ft(I, S) {
          const F = (
            typeof I == "string"
              ? I
              : Array.isArray(I) && I.length == 1 && typeof I[0] == "string"
                ? I[0]
                : void 0
          )?.trim();
          return !F || !S ? !0 : F != S.trim();
        }
        function xt(I) {
          let S = (0, G.J)((0, L.j$)(I.args) || (0, L.j$)(I.args, "href"));
          const F = (0, L.j$)(I.args, "style"),
            H = (0, L.j$)(I.args, "id"),
            Bt = (0, N.O)(
              (0, L.j$)(I.args, "buttoncolor") || (0, L.j$)(I.args, "bgcolor"),
              void 0,
            ),
            bt = (0, N.O)(
              (0, L.j$)(I.args, "labelcolor") || (0, L.j$)(I.args, "color"),
              void 0,
            ),
            wt = ct(F),
            Yt = I.context.event,
            Dt = (0, w.z5)(S, I.language, Yt?.rtime32_last_modified),
            kt = (0, P.W7)(ft(I.children, S) ? "" : (S ?? ""));
          if (kt && S) return kt.fnBBComponent(S, { event: I.context.event });
          if (Dt === void 0 || Dt == null) return I.children || "";
          typeof Dt == "string" ? (S = Dt) : (S = Dt[1]);
          const te = Q(F, Bt, bt);
          return typeof S == "string" && S.length > 0 && S[0] == "#"
            ? (0, e.jsx)(D.Ii, {
                className: wt,
                href: S,
                style: te,
                children: I.children,
              })
            : S == "steam://settings/account"
              ? (0, e.jsx)(A.uU, {
                  className: wt,
                  href: "steam://settings/account",
                  children: I.children,
                })
              : (0, e.jsx)(x.d$, {
                  className: wt,
                  url: S,
                  event: I.context.event,
                  id: H,
                  style: te,
                  children: I.children,
                });
        }
        function _(I) {
          const S = (0, L.j$)(I.args, "href"),
            F = (0, P.W7)(S);
          return F
            ? F.fnBBComponent(S, { event: I.context.event })
            : (0, e.jsx)(xt, { ...I });
        }
        var ht = i(25046),
          dt = i(29522),
          ue = i(40358),
          at = i(64271),
          k = i(90626),
          Z = i(67523),
          it = i.n(Z),
          nt = i(36118),
          jt = i(18210),
          Nt = i(85599),
          St = i(89767),
          st = i.n(St),
          Ot = i(64457),
          lt = i(48963),
          Et = i.n(lt),
          At = ((I) => (
            (I.k_TrailerAsButton = "button"),
            (I.k_TrailerAsPill = "pill"),
            (I.k_TrailerAsFull = "full"),
            (I.k_TrailerAsPoster = "poster"),
            (I.k_TrailerAsMicro = "micro"),
            I
          ))(At || {});
        const b = /\bappid\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s\]]+))/i;
        function V(I, S) {
          const F = new Set();
          for (const H of I.matchAll(/\[trailer\b([^\]]*)\]/gi)) {
            const Bt = b.exec(H[1] ?? ""),
              bt = Bt ? Number.parseInt(Bt[1] ?? Bt[2] ?? Bt[3] ?? "") : S;
            bt && F.add(bt);
          }
          return Array.from(F);
        }
        function tt(I) {
          const {
              embedStyle: S,
              appid: F,
              color: H,
              bgcolor: Bt,
              children: bt,
              trailerBaseID: wt,
              subtitles: Yt,
            } = I,
            [Dt, kt] = (0, k.useState)(!1),
            te = (0, k.useMemo)(() => ({ appid: F }), [F]);
          switch (S) {
            case "button":
            case "pill":
              return (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsxs)("button", {
                    type: "button",
                    className: (0, h.A)({
                      [st().Pill]: S == "pill",
                      [st().Button]: S == "button",
                    }),
                    onClick: () => kt(!0),
                    style: { color: H, backgroundColor: Bt },
                    children: [
                      (0, e.jsx)(nt.jGG, {}),
                      bt || (0, jt.we)("#EventEmail_WatchNow"),
                    ],
                  }),
                  (0, e.jsx)(Ot.PE, {
                    id: te,
                    bShowModal: Dt,
                    trailerBaseID: wt,
                    hideModal: () => kt(!1),
                  }),
                ],
              });
            default:
            case "full":
              return (0, e.jsx)(q, { ...I });
          }
        }
        function q(I) {
          const { appid: S, trailerBaseID: F } = I,
            H = (0, dt.$5)(S),
            { data: Bt } = (0, ue.J$)(H),
            [bt, wt] = (0, k.useState)(() =>
              !S || !F ? (0, jt.we)("#TrailerPlayer_ID_NotProvided") : null,
            ),
            Yt = (0, ht.kB)(H),
            Dt = (0, k.useMemo)(
              () => (Yt ? Yt.find((kt) => kt.trailer_base_id === F) : null),
              [Yt, F],
            );
          return (
            (0, k.useEffect)(() => {
              Bt?.unvailable_for_country_restriction &&
                wt((0, jt.we)("#TrailerPlayer_CouldNotLoad", S, F)),
                Yt &&
                  !Dt &&
                  wt(
                    (0, jt.we)(
                      "#TrailerPlayer_CouldNotLoad",
                      I.appid,
                      I.trailerBaseID,
                    ),
                  );
            }, [
              S,
              I.appid,
              I.trailerBaseID,
              Bt?.unvailable_for_country_restriction,
              F,
              Dt,
              Yt,
            ]),
            bt
              ? I.bIsPreviewMode
                ? (0, e.jsx)("div", { className: it().ErrorDiv, children: bt })
                : null
              : Dt
                ? (0, e.jsx)(Tt, { trailerToPlay: Dt })
                : (0, e.jsx)(Nt.t, {
                    string: (0, jt.we)("#Loading"),
                    size: "small",
                  })
          );
        }
        function Tt(I) {
          const { trailerToPlay: S } = I,
            {
              rgDashTrailers: F,
              rgHlsTrailers: H,
              strCaptionManufest: Bt,
            } = (0, k.useMemo)(() => {
              const { rgDashTrailers: bt, rgHlsTrailers: wt } = (0, ht.hg)(S),
                Yt = (0, ht.Wv)(S);
              return {
                rgDashTrailers: bt,
                rgHlsTrailers: wt,
                strCaptionManufest: Yt,
              };
            }, [S]);
          return F?.length == 0
            ? null
            : (0, e.jsx)("div", {
                className: Et().VideoPopupContainers,
                children: (0, e.jsx)(at.P, {
                  dashManifests: F || [],
                  hlsManifest: (H.length > 0 && H?.[0]) || "",
                  screenshot: (0, ht.hl)(S),
                  altText: S.trailer_name,
                  muteWhenAutoplayBlocked: !0,
                  captionManifest: Bt,
                }),
              });
        }
        var vt = i(34736),
          ot = i(39239),
          ut = i(13465),
          pt = i(80150),
          Mt = i(18994),
          Ut = i(3166),
          It = i(68538);
        function zt(I) {
          const S = (0, Ut.Qn)(),
            F = (0, Mt.a4)(Mt.Wn),
            H =
              String((0, L.j$)(I.args, "autoadvance")).toLowerCase() === "true";
          return (0, e.jsx)(It.F, {
            hideArrows: !F,
            hidePips: S,
            visibleElements: 1,
            useTestScrollbar: !1,
            bLazyRenderChildren: !0,
            screenIsWide: F,
            bAutoAdvance: H,
            className: s().ScreenshotCarousel,
            children: I.children,
          });
        }
        var Wt = i(37501),
          $t = i.n(Wt),
          Xt = i(1123);
        function Ft(I) {
          const { strURL: S, children: F } = I;
          return (
            typeof S == "string"
              ? !(0, et.ZF)(S)
              : S.some((Bt) => !(0, et.ZF)(Bt))
          )
            ? (0, e.jsx)(Zt, { children: F })
            : (0, e.jsx)(e.Fragment, { children: F });
        }
        function Zt(I) {
          const { children: S } = I;
          return (0, Xt.Ey)()
            ? (0, e.jsx)(e.Fragment, { children: S })
            : (0, e.jsx)("div", {
                className: $t().ImageBlocked,
                children: (0, jt.oW)(
                  "#Image_Externally_Hosted_Hidden",
                  (0, e.jsx)("a", {
                    href: gt.TS.STORE_BASE_URL + "account/cookiepreferences",
                  }),
                ),
              });
        }
        var qt = i(33645),
          ne = i.n(qt);
        let re = null;
        function se() {
          return (
            re == null &&
              (re = new Map([
                ["url", { Constructor: xt, autocloses: !1 }],
                ["dynamiclink", { Constructor: _, autocloses: !1 }],
                [
                  "h1",
                  {
                    Constructor: L.Tu(L.Zb, s().Header1),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h2",
                  {
                    Constructor: L.Tu(L.Sz, s().Header2),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "h3",
                  {
                    Constructor: L.Tu(L.ZS, s().Header3),
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                [
                  "quote",
                  { Constructor: L.Tu(L.Pk, s().BlockQuote), autocloses: !1 },
                ],
                [
                  "list",
                  {
                    Constructor: L.B8,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "olist",
                  {
                    Constructor: L._J,
                    autocloses: !1,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "*",
                  {
                    Constructor: L.ck,
                    autocloses: !0,
                    skipInternalNewline: !0,
                  },
                ],
                [
                  "p",
                  {
                    Constructor: L.It,
                    autocloses: !1,
                    skipFollowingNewline: !0,
                  },
                ],
                ["img", { Constructor: ae, autocloses: !1 }],
                ["previewyoutube", { Constructor: C.gH, autocloses: !1 }],
                ["looping_media", { Constructor: f.$A, autocloses: !1 }],
                ["video", { Constructor: f.UT, autocloses: !1 }],
                ["youtubeorvideo", { Constructor: C.Eo, autocloses: !1 }],
                ["trailer", { Constructor: le, autocloses: !1 }],
                [
                  "speaker",
                  {
                    Constructor: ce,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                ["docimg", { Constructor: oe, autocloses: !1 }],
                ["carousel", { Constructor: zt, autocloses: !1 }],
              ])),
            re
          );
        }
        function ae(I) {
          const { showErrorInfo: S, event: F } = I.context;
          let H = (0, L.j$)(I.args, "src") || I.children?.toString();
          H || (H = (0, L.j$)(I.args)), (H = (0, G.J)(H ?? "") || void 0);
          const Bt = (0, L.j$)(I.args, "style") === "inline",
            bt = (0, w.z5)(H, I.language, F?.rtime32_last_modified);
          if (bt == null) return null;
          if (typeof bt == "string") {
            H = bt;
            let wt;
            return (
              (wt = !(0, et.ZF)(H)),
              F?.BHasTag("auto_rssfeed") && (wt = !1),
              S
                ? (0, e.jsx)(ot.i, {
                    className: (0, h.A)({ [ne().Image_Inline]: Bt }),
                    src: H,
                    crossOrigin: wt ? "anonymous" : void 0,
                  })
                : ((H = (0, et.L$)(H)),
                  (0, e.jsx)(Ft, {
                    strURL: H,
                    children: (0, e.jsx)(pt.o, {
                      className: (0, h.A)({ [ne().Image_Inline]: Bt }),
                      src: H,
                      crossOrigin: wt ? "anonymous" : void 0,
                    }),
                  }))
            );
          } else
            return (0, e.jsx)(Ft, {
              strURL: bt,
              children: (0, e.jsx)(ut.c, { rgSources: bt }),
            });
        }
        function oe(I) {
          const S = (0, L.j$)(I.args);
          if (S == null || S == null || S.length == 0) return "";
          const F = I.children?.toString(),
            H = new Array();
          return (
            H.push(
              `${gt.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/${gt.TS.LANGUAGE}/${S}`,
            ),
            gt.TS.LANGUAGE != "english" &&
              H.push(
                `${gt.TS.MEDIA_CDN_COMMUNITY_URL}images/steamworks_docs/english/${S}`,
              ),
            (0, e.jsx)(ut.c, { rgSources: H, alt: F })
          );
        }
        function le(I) {
          const S = ie(I.args, "appid", I.context.event?.appid ?? 0),
            F = ie(I.args, "trailerid", 0);
          let H =
            (0, L.j$)(I.args, "style")?.toLocaleLowerCase() ??
            At.k_TrailerAsFull;
          H = Object.values(At).includes(H) ? H : At.k_TrailerAsFull;
          const Bt = (0, N.O)(I.args.color, "black"),
            bt = (0, N.O)(I.args.bgcolor, "white"),
            wt = (0, f.g4)(I.args);
          return (0, e.jsx)(tt, {
            appid: S,
            trailerBaseID: F,
            bIsPreviewMode: I.context.showErrorInfo,
            embedStyle: H,
            color: Bt,
            bgcolor: bt,
            subtitles: wt.rgVideoTracks,
            children: I.children,
          });
        }
        function ce(I) {
          const S = (0, L.j$)(I.args, "name"),
            F = (0, L.j$)(I.args, "title"),
            H = (0, L.j$)(I.args, "company"),
            Bt = (0, L.j$)(I.args, "photo");
          return I.context.bShowShortSpeakerInfo
            ? (0, e.jsx)(vt.S8, {
                name: S,
                title: F,
                company: H,
                photo: Bt,
                bio: I.children,
              })
            : (0, e.jsx)(vt.$k, {
                name: S,
                title: F,
                company: H,
                photo: Bt,
                bio: I.children,
              });
        }
        function ie(I, S, F) {
          const H = (0, L.j$)(I, S);
          return H === void 0 || H == null ? F : Number.parseInt(H);
        }
      },
      1683: (K, mt, i) => {
        "use strict";
        i.d(mt, { d3: () => ht, Zn: () => dt });
        var e = i(7850),
          G = i(33770),
          w = i(7487),
          f = i(72609),
          L = i(90626),
          C = i(70187),
          D = i(86722),
          gt = i(39414),
          x = i(38340),
          g = i(96197),
          s = i(53113);
        class A extends w.K0 {
          m_LinkFilter = gt.O;
          m_parentNode = void 0;
          m_mapHostToComponent;
          m_globalStoreLink;
          constructor(k, Z, it, nt) {
            super(k),
              (this.m_parentNode = Z),
              (this.m_mapHostToComponent = it),
              (this.m_globalStoreLink = nt);
          }
          AppendText(k, Z = !1) {
            let it = k;
            if (
              (Z || this.m_parentNode?.tag == "*") &&
              (this.m_parentNode == null || this.m_parentNode.tag != "img")
            ) {
              let nt = this.m_LinkFilter.exec(it);
              for (; nt; ) {
                if (nt.index > 0) {
                  let St = nt.input.substring(0, nt.index);
                  super.AppendText(St, Z);
                }
                let jt = nt[0],
                  Nt = !1;
                if (this.m_mapHostToComponent) {
                  for (let St = 0; St < this.m_mapHostToComponent.length; ++St)
                    if (this.m_mapHostToComponent[St].urlRegExp.exec(jt)) {
                      (Nt = !0),
                        super.AppendNode(
                          this.m_mapHostToComponent[St].fnBBComponent(
                            jt,
                            this.m_globalStoreLink,
                          ),
                        );
                      break;
                    }
                }
                Nt || super.AppendNode((0, D.Pm)(jt)),
                  (it = nt.input.substring(nt.index + jt.length)),
                  (nt = this.m_LinkFilter.exec(it));
              }
            }
            it.length > 0 && super.AppendText(it, Z);
          }
        }
        const h = "[\u02D0:]([a-zA-Z0-9_]+)[\u02D0:]";
        class et extends w.K0 {
          m_EmoteRegex = new RegExp(h);
          AppendText(k, Z = !1) {
            let it = k;
            if (k.length >= 3) {
              let nt = this.m_EmoteRegex.exec(it);
              for (; nt; ) {
                if (nt.index > 0) {
                  let Nt = nt.input.substring(0, nt.index);
                  super.AppendText(Nt, Z);
                }
                let jt = nt[1];
                super.AppendNode(L.createElement(g.n, { emoticon: jt }, [])),
                  (it = nt.input.substring(nt.index + jt.length + 2)),
                  (nt = this.m_EmoteRegex.exec(it));
              }
            }
            it.length > 0 && super.AppendText(it, Z);
          }
        }
        class N extends w.K0 {
          m_parentNode = void 0;
          constructor(k, Z) {
            super(k), (this.m_parentNode = Z);
          }
          AppendText(k, Z = !1) {
            let it = k;
            this.m_parentNode &&
              this.m_parentNode.tag == "img" &&
              !P(it) &&
              (it = (0, s.L$)(it)),
              super.AppendText(it, Z);
          }
        }
        function P(at) {
          const k = at.trim();
          return k.startsWith(x.lw) || k.startsWith(x.eg);
        }
        var ct = i(11547),
          Y = i(35265);
        let Q = null;
        function ft() {
          return (
            Q == null &&
              (Q = new Map([
                ...Array.from(C.W4.entries()),
                ...Array.from((0, ct.k)().entries()),
              ])),
            Q
          );
        }
        const xt = L.createContext(null);
        function _() {
          return L.useContext(xt) ?? ft();
        }
        function ht(at) {
          const k = _(),
            Z = L.useMemo(
              () =>
                new Map([
                  ...Array.from(k.entries()),
                  ...Array.from(at.dictionary.entries()),
                ]),
              [k, at.dictionary],
            );
          return (0, e.jsx)(xt.Provider, { value: Z, children: at.children });
        }
        function dt(at) {
          const {
              text: k,
              languageOverride: Z,
              event: it,
              showErrorInfo: nt,
              bShowShortSpeakerInfo: jt,
            } = at,
            Nt = (0, Y.m$)(),
            St = L.useCallback(
              (lt) =>
                new N(
                  new et(new A(new w.OJ(new w.R8()), lt, Nt, { event: it })),
                  lt,
                ),
              [it, Nt],
            ),
            st = _();
          return L.useMemo(
            () => new G.B(st, St, Z || f.TS.LANGUAGE),
            [st, St, Z],
          ).ParseBBCode(k, {
            showErrorInfo: nt,
            event: it,
            bShowShortSpeakerInfo: jt,
            bbcode: k,
          });
        }
        function ue(at) {
          const {
              strTag: k,
              args: Z,
              rawargs: it,
              language: nt = PchLanguageToELanguage(Config.LANGUAGE),
              children: jt,
              ...Nt
            } = at,
            St = _().get(k);
          return St
            ? jsx(St.Constructor, {
                context: Nt,
                tagname: k,
                args: Z,
                language: nt,
                rawargs: it,
                children: jt,
              })
            : jsxs(Fragment, { children: [`[${k}]`, jt, `[/${k}]`] });
        }
      },
      35265: (K, mt, i) => {
        "use strict";
        i.d(mt, { m$: () => wn, W7: () => n });
        var e = i(7850),
          G = i(32093),
          w = i(72609),
          f = i(88743),
          L = i(40358),
          C = i(90626),
          D = i(86722),
          gt = i(6878),
          x = i.n(gt),
          g = i(36118),
          s = i(36707),
          A = i(87949),
          h = i(55483),
          et = i(10985),
          N = i(99412),
          P = i(47797),
          ct = i(76559);
        const Y =
            /(?:steamcommunity\.com|valve\.org\/community|community\.\S+\.steam\.dev|steam\.dev\/community)\/(games|app|ogg|gid|groups)\/(\w+)\/partnerevents\/view\/(\d+)/i,
          Q =
            /(?:steampowered\.com|valve\.org\/store|store\.\S+\.steam\.dev|steam\.dev\/store|store\.steamchina\.com)\/(?:news|newshub)\/(group|app)\/(\w+)\/view\/(\d+)/i,
          ft = [Y, Q],
          xt =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/(games|app|ogg|gid|groups)\/(\w+)\/(?:announcements\/detail|partnerevents\/view_old_announcement)\/(\d+)/i;
        function _(M, T) {
          const z = new RegExp(M).exec(T);
          if (!z || z.length <= 3) return;
          const rt = z[3];
          if (rt)
            switch (z[1]) {
              case "gid":
                return { eventGID: rt, strClanSteamID64: z[2] };
              case "group":
                return { eventGID: rt, clanAccountID: Number.parseInt(z[2]) };
              case "groups":
                return { eventGID: rt, strGroupVanity: z[2] };
              default:
                return isNaN(+z[2])
                  ? { eventGID: rt, strOGGVanity: z[2] }
                  : { eventGID: rt, appid: Number(z[2]) };
            }
        }
        function ht(M) {
          for (const T of ft) {
            const z = _(T, M);
            if (z) return z;
          }
        }
        function dt(M) {
          const T = [],
            z = new Set(),
            rt = [
              ...ft.map((J) => ({ regExp: J, bAnnouncement: !1 })),
              { regExp: xt, bAnnouncement: !0 },
            ];
          for (const { regExp: J, bAnnouncement: Ht } of rt)
            for (const je of M.matchAll(new RegExp(J, "gi"))) {
              const Te = _(J, je[0]);
              Te &&
                !z.has(`${Ht ? "A" : "E"}${Te.eventGID}`) &&
                (z.add(`${Ht ? "A" : "E"}${Te.eventGID}`),
                T.push({ link: Te, bAnnouncement: Ht }));
            }
          return T;
        }
        var ue = i(9046),
          at = i(72080),
          k = i(29522),
          Z = i(85599),
          it = i(18210),
          nt = i(13465),
          jt = i(56492),
          Nt = i(88812),
          St = i(39654);
        function st({ clanSteamID: M, strVanity: T, strGroupVanity: z }) {
          const rt = T !== void 0 || z !== void 0,
            { data: J, isPending: Ht } = (0, h.W$)(
              rt ? (T ?? z ?? "") : "",
              T !== void 0 ? "store" : "group",
            );
          if (!rt) return M?.GetAccountID();
          if (!Ht) return J?.clanAccountID ?? null;
        }
        function Ot(M) {
          const { appid: T, announcementGID: z, eventGID: rt, strURL: J } = M,
            Ht = st(M),
            je = Ht === null,
            Te = Ht != null,
            {
              data: Le,
              isPending: Bn,
              isError: Fn,
            } = (0, St.vE)(
              je
                ? void 0
                : {
                    clanAccountID: Te ? Ht : void 0,
                    appid: T,
                    eventGID: rt,
                    announcementGID: z,
                  },
            ),
            kn = (0, k.$5)(T || Le?.appid || void 0),
            { data: Zn } = (0, L.J$)(kn);
          if (je || Fn || Le === null) return (0, D.Pm)(J);
          if (Bn || !Le) return (0, e.jsx)(Z.t, {});
          const Jn = (0, N.sfN)(w.TS.LANGUAGE),
            $n = Le.GetNameWithFallback(Jn),
            Pn = Le.GetSubTitleWithSummaryFallback(Jn),
            xn = Zn?.name,
            Xn = (0, it.TW)(Le.GetStartTimeAndDateUnixSeconds());
          return (0, e.jsxs)(jt.tj, {
            eventModel: Le,
            route: jt.PH.k_eView,
            className: at.gg.Box,
            "data-modal-content-sizetofit": !0,
            "data-appid": T,
            children: [
              (0, e.jsx)(lt, { ...M, event: Le }),
              (0, e.jsxs)(at.J7, {
                children: [
                  (0, e.jsxs)(at.zN, {
                    children: [
                      (0, it.we)(
                        Le.type == N.uYK
                          ? "#EventDisplay_Share_Announcement"
                          : "#EventDisplay_Share_Event",
                        xn ?? "",
                      ),
                      (0, e.jsx)(at.MG, { children: Xn }),
                    ],
                  }),
                  (0, e.jsx)(at.bv, {
                    children: (0, e.jsx)("div", {
                      className: at.gg.Type,
                      children: $n,
                    }),
                  }),
                  (0, e.jsx)(at.AT, { children: Pn }),
                ],
              }),
            ],
          });
        }
        function lt(M) {
          const {
            event: T,
            fnFilterImageURLsForKnownFailures: z,
            fnImageFailureCallback: rt,
          } = M;
          let J = (0, N.sfN)(w.TS.LANGUAGE),
            Ht = (0, Nt.WC)(T, "capsule", J, ue.wI.capsule_main) ?? [];
          return (
            Ht && z && (Ht = z(Ht)),
            (0, e.jsx)(nt.c, {
              className: at.gg.Preview,
              rgSources: Ht ?? [],
              onIncrementalError: (je, Te, Le) => rt && rt(Te),
            })
          );
        }
        var Et = i(10349),
          At = i(53113);
        const b =
            /(?:steampowered\.com|store\.steamchina\.com|store[\w-]*\.(?:[\w.-]+\.)?(?:steam\.dev|valve\.org)|valve\.org\/store)\/(app|bundle|sub)\/(\d+)/i,
          V = ["store.steampowered.com", "store.steamchina.com"],
          tt = ["steampowered.com", "steamcommunity.com"],
          q = ["steamchina.com"],
          Tt = ["steam.dev", "valve.org"];
        function vt(M, T) {
          return T.some((z) => M == z || M.endsWith(`.${z}`));
        }
        function ot(M) {
          const T = (0, At.wm)(M).toLocaleLowerCase(),
            z = (0, At.wm)(w.TS.STORE_BASE_URL).toLocaleLowerCase(),
            rt = (0, At.wm)(w.TS.COMMUNITY_BASE_URL).toLocaleLowerCase();
          return T == z || T == rt
            ? !0
            : V.includes(z)
              ? vt(T, vt(z, q) ? q : tt)
              : vt(T, [...tt, ...q, ...Tt]);
        }
        function ut(M) {
          if (ot(M)) return pt(M);
        }
        function pt(M) {
          const T = new RegExp(b).exec(M);
          if (!T || T.length <= 2) return;
          const z = T[1].toLowerCase(),
            rt = Number(T[2]);
          if (!(!(rt > 0) || !(0, Et.nB)(z)))
            return {
              id: rt,
              strItemType: z,
              storeItemKey:
                z == "sub"
                  ? { packageid: rt }
                  : z == "bundle"
                    ? { bundleid: rt }
                    : { appid: rt },
            };
        }
        function Mt(M) {
          const T = [],
            z = new Set();
          for (const rt of M.matchAll(new RegExp(b, "gi"))) {
            const J = pt(rt[0]);
            J &&
              !z.has(`${J.strItemType}/${J.id}`) &&
              (z.add(`${J.strItemType}/${J.id}`), T.push(J));
          }
          return T;
        }
        function Ut(M) {
          return (
            !!M && (M.GetEventType() == N.ajI || M.GetEventType() == N.HRy)
          );
        }
        function It(M) {
          const T = Ut(M),
            z = T ? M.clanSteamID.GetAccountID() : void 0,
            { data: rt, isLoading: J } = (0, h.TB)(z),
            { data: Ht, isLoading: je } = (0, et.A5)(z);
          if (!T) return null;
          if (!(J || je))
            return !Ht || !rt || !(0, P.Ns)(M, rt) ? null : (Ht.appids ?? []);
        }
        function zt(M, T) {
          return M === null
            ? !0
            : T.length > 0 && T.every((z) => M.includes(z));
        }
        function Wt(M, T) {
          const z = It(T);
          if (M.appid === void 0) return !0;
          if (!(M.appid > 0)) return !1;
          if (z !== void 0) return zt(z, [M.appid]);
        }
        function $t({ link: M, strURL: T, eventModel: z, bAnnouncement: rt }) {
          const J = Wt(M, z);
          if (J === void 0) return null;
          if (!J) return (0, D.Pm)(T, z);
          const Ht =
            M.strClanSteamID64 !== void 0
              ? new ct.b(M.strClanSteamID64)
              : M.clanAccountID !== void 0
                ? ct.b.InitFromClanID(M.clanAccountID)
                : void 0;
          return (0, e.jsx)(Ot, {
            appid: M.appid,
            clanSteamID: Ht,
            strVanity: M.strOGGVanity,
            strGroupVanity: M.strGroupVanity,
            eventGID: rt ? void 0 : M.eventGID,
            announcementGID: rt ? M.eventGID : void 0,
            strURL: T,
          });
        }
        function Xt(M, T, z, rt = !1) {
          if (ot(T)) {
            const J = _(M, T);
            if (J)
              return (0, e.jsx)($t, {
                link: J,
                strURL: T,
                eventModel: z?.event,
                bAnnouncement: rt,
              });
          }
          return (0, D.Pm)(T, z?.event);
        }
        function Ft(M, T) {
          return Xt(Q, M, T);
        }
        function Zt(M, T) {
          return Xt(Y, M, T);
        }
        function qt(M, T) {
          return Xt(xt, M, T, !0);
        }
        const ne = /community.+sharedfiles\/filedetails\/\?id=\d+/i;
        function re(M) {
          if (!ne.test(M)) return;
          const T = M.split("?");
          if (T.length == 2)
            return new URLSearchParams(T[1]).get("id") ?? void 0;
        }
        var se = i(3946),
          ae = i(13854),
          oe = i(374);
        function le(M) {
          const { sharedFileID: T } = M,
            { data: z } = (0, oe.oK)(T),
            rt = w.TS.COMMUNITY_BASE_URL + "sharedfiles/filedetails/?id=",
            J = z ?? {
              sharedfileid: T,
              title: (0, it.we)("#Loading"),
              description: "",
              type: "",
              previewurl: "",
              appid: 0,
              url: rt + T,
            },
            Ht = (0, ae.TG)(J.url) ? rt + J.url : J.url;
          let je = J.personnaname !== void 0 && J.personnaname.length > 0;
          return (0, e.jsx)(se.V, {
            strURL: Ht,
            strTitle: J.title,
            strPreviewURL: J.previewurl,
            strType: J.type,
            strDescription: J.description,
            author:
              je &&
              (0, it.PP)(
                "#EventEditor_Author",
                (0, e.jsx)(at.mZ, { children: J.personnaname }),
              ),
            publishedfileid: T,
            appid: J.appid,
            bSizeToFit: J.bSizeToFit,
          });
        }
        var ce = i(80902),
          ie = i(32651),
          I = i.n(ie);
        const S = /sketchfab\.com\/(?:models\/(?:[^/\s]+-)?)([a-z0-9]{32})/i;
        function F(M) {
          const T = new Set();
          for (const z of M.matchAll(new RegExp(S, "gi"))) z[1] && T.add(z[1]);
          return Array.from(T);
        }
        function H(M) {
          return ["sketchfab_oembed", M];
        }
        function Bt(M) {
          return `https://sketchfab.com/oembed?url=https://sketchfab.com/models/${encodeURIComponent(M)}`;
        }
        function bt(M) {
          return {
            queryKey: H(M),
            queryFn: async () => {
              const T = await fetch(Bt(M));
              if (T.status === 404) return null;
              if (!T.ok)
                throw new Error(`sketchfab oembed returned ${T.status}`);
              return await T.json();
            },
            enabled: !0,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function wt(M) {
          return (0, ce.I)(bt(M));
        }
        function Yt(M) {
          const { modelID: T } = M,
            [z, rt] = C.useState(!0),
            { data: J } = wt(T);
          if (z) {
            const Ht = () => rt(!1),
              je = (Te) => {
                (Te.key === "Enter" || Te.key === " ") &&
                  (Te.preventDefault(), Ht());
              };
            return (0, e.jsxs)("div", {
              className: I().dynamiclink_box,
              role: "button",
              tabIndex: 0,
              onClick: Ht,
              onKeyDown: je,
              children: [
                J?.thumbnail_url &&
                  (0, e.jsx)("img", {
                    className: I().dynamiclink_preview,
                    src: J.thumbnail_url,
                    alt: J.title,
                  }),
                (0, e.jsx)("img", {
                  className: I().sketchfab_play_overlay_image,
                  alt: "",
                }),
                (0, e.jsxs)("div", {
                  className: I().dynamiclink_content,
                  children: [
                    (0, e.jsxs)("div", {
                      className: I().dynamiclink_name,
                      children: [
                        (0, e.jsx)("span", {
                          className: I().dynamiclink_type,
                          children: (0, it.we)("#EventDisplay_Sketchfab"),
                        }),
                        J?.title &&
                          (0, e.jsxs)("div", { children: [J.title, "\xA0"] }),
                      ],
                    }),
                    J?.author_name &&
                      (0, e.jsx)("div", {
                        className: I().dynamiclink_author,
                        children: J.author_name,
                      }),
                  ],
                }),
              ],
            });
          }
          return (0, e.jsx)("div", {
            className: I().sketchfabmodelembedded,
            children: (0, e.jsx)("iframe", {
              className: I().sketchfabmodelembedded,
              title: J?.title ?? T,
              src: `https://sketchfab.com/models/${encodeURIComponent(T)}/embed?autostart=1`,
              frameBorder: 0,
              allowFullScreen: !0,
            }),
          });
        }
        const Dt =
          /(?:steampowered\.com|valve\.org\/store|steam\.dev\/store|store\.[\w.-]+\.steam\.dev|store\.steamchina\.com)\/points\/shop\/.*reward\/(\d+)$/i;
        function kt(M) {
          const T = Dt.exec(M),
            z = T ? Number(T[1]) : 0;
          return z > 0 ? z : void 0;
        }
        function te(M) {
          return ot(M) ? kt(M) : void 0;
        }
        function xe(M) {
          const T = new Set();
          for (const z of M.matchAll(new RegExp(k_LinkRegex, "g"))) {
            const rt = kt(z[0]);
            rt && T.add(rt);
          }
          return Array.from(T);
        }
        var ge = i(31774),
          fe = i(71421),
          he = i(33998),
          ve = i.n(he);
        function ye(M) {
          const { defid: T } = M,
            z = (0, ge.wk)(T);
          if (!z || !z.community_item_data) return null;
          const rt = z.appid,
            J = z.community_item_data.item_image_large,
            Ht = `${w.TS.MEDIA_CDN_COMMUNITY_URL}images/items/${rt}/${J}`;
          return (0, e.jsx)("div", {
            className: ve().Ctn,
            children: (0, e.jsx)(fe.he, {
              toolTipContent: z.community_item_data.item_description,
              children: (0, e.jsx)("img", {
                src: Ht,
                alt: z.community_item_data.item_title,
              }),
            }),
          });
        }
        var pe = i(43597);
        const de = /:\/\/medal.tv\/(?:clip|clips)\/([a-z0-9]+)/i,
          Ge = /twitter\.com\/(\w+)(\/?)$/i,
          $e = /twitter\.com\/hashtag\/(\w+)(\/?)$/i,
          ke = /twitch\.tv\/(\w+)(\/?)$/i,
          sn =
            /(?:steamcommunity\.com|valve\.org\/community|steam\.dev\/community|community\.\S+\.steam\.dev|my\.steamchina\.com)\/id\/(\w+)(\/?)$/i;
        function an() {
          return w.TS.EREALM === G.TU.k_ESteamRealmChina;
        }
        const An = new Map();
        function wn() {
          const M = w.TS.EREALM;
          let T = An.get(M);
          return (
            T ||
              (an()
                ? (T = [
                    { urlRegExp: new RegExp(b), fnBBComponent: pn },
                    { urlRegExp: new RegExp(Y), fnBBComponent: Zt },
                    { urlRegExp: new RegExp(Q), fnBBComponent: Ft },
                    { urlRegExp: new RegExp(xt), fnBBComponent: qt },
                    { urlRegExp: new RegExp(sn), fnBBComponent: Vn },
                  ])
                : (T = [
                    {
                      urlRegExp: new RegExp(/youtu.be|youtube.com/i),
                      fnBBComponent: pe.j6,
                    },
                    { urlRegExp: new RegExp(ne), fnBBComponent: Kn },
                    { urlRegExp: new RegExp(b), fnBBComponent: pn },
                    { urlRegExp: new RegExp(Y), fnBBComponent: Zt },
                    { urlRegExp: new RegExp(Q), fnBBComponent: Ft },
                    { urlRegExp: new RegExp(xt), fnBBComponent: qt },
                    { urlRegExp: new RegExp(de), fnBBComponent: Nn },
                    { urlRegExp: new RegExp(S), fnBBComponent: Hn },
                    { urlRegExp: new RegExp(Ge), fnBBComponent: zn },
                    { urlRegExp: new RegExp($e), fnBBComponent: En },
                    { urlRegExp: new RegExp(ke), fnBBComponent: Qn },
                    { urlRegExp: new RegExp(sn), fnBBComponent: Vn },
                    { urlRegExp: new RegExp(Dt), fnBBComponent: Gn },
                  ]),
              An.set(M, T)),
            T
          );
        }
        function Ln(M) {
          return wn().find((T) => !!T.urlRegExp.exec(M));
        }
        function n(M) {
          return C.useMemo(() => Ln(M), [M]);
        }
        function Nn(M, T) {
          if (an()) return null;
          const z = new RegExp(de).exec(M);
          if (z && z.length > 1) {
            const rt = z[1];
            if (rt?.length > 0) {
              let J =
                "https://medal.tv/clip/" +
                rt +
                "/?autoplay=0&donate=0" +
                (T && T.event ? "&steamappid=" + T.event.appid : "");
              return (0, e.jsx)("iframe", {
                className: x().MedalTVWidget,
                src: J,
                title: rt,
                frameBorder: 0,
                allow: "autoplay",
              });
            }
          }
          return (0, D.Pm)(M, T?.event);
        }
        function Hn(M, T) {
          let z = new RegExp(S).exec(M);
          if (z && z.length > 1) {
            let rt = z[1];
            if (rt && rt.length > 1) return (0, e.jsx)(Yt, { modelID: rt });
          }
          return (0, D.Pm)(M, T?.event);
        }
        function Kn(M, T) {
          const z = re(M);
          return z !== void 0
            ? (0, e.jsx)(le, { sharedFileID: z })
            : (0, D.Pm)(M, T?.event);
        }
        function pn(M, T) {
          const z = ut(M);
          return z
            ? (0, e.jsx)(on, {
                eventModel: T?.event,
                inputID: z.id,
                inputType: z.strItemType,
                fallbackUrl: M,
              })
            : (0, D.Pm)(M, T?.event);
        }
        function on(M) {
          const {
              inputID: T,
              inputType: z,
              eventModel: rt,
              fallbackUrl: J,
            } = M,
            Ht = (0, f.dE)(T, z),
            { data: je } = (0, L.J$)(Ht),
            Te = It(rt);
          let Le;
          if (Te === null) Le = !0;
          else if (Te && je) {
            const Bn = je.appid ? [je.appid] : (je.included_appids ?? []);
            Le = zt(Te, Bn);
          }
          return Le === void 0
            ? null
            : Le
              ? (0, e.jsx)(A.e, {
                  id: T,
                  inputType: z,
                  bApplyUserContentPref: !0,
                })
              : (0, D.Pm)(J, rt);
        }
        function Gn(M, T) {
          const z = te(M);
          return z
            ? (0, e.jsx)("div", {
                className: (0, s.A)(x().LoyaltyRewardCtn),
                children: (0, e.jsx)(ye, { defid: z, url: M }),
              })
            : (0, D.Pm)(M, T?.event);
        }
        function zn(M, T) {
          return an() ? null : ln(M, (0, e.jsx)(g.KKS, {}), "@", T);
        }
        function En(M, T) {
          return an() ? null : ln(M, (0, e.jsx)(g.KKS, {}), "#", T);
        }
        function Qn(M, T) {
          return an() ? null : ln(M, (0, e.jsx)(g.qcc, {}), void 0, T);
        }
        function Vn(M, T) {
          return ln(M, (0, e.jsx)(g.Qte, {}), void 0, T);
        }
        function ln(M, T, z, rt) {
          let J;
          const Ht = M.endsWith("/") ? M.length - 1 : M.length,
            je = M.lastIndexOf("/", Ht - 1);
          je != -1 && je + 1 < M.length && (J = M.substring(je + 1, Ht)),
            z && J && (J = z + J);
          const Te = (0, D.Pm)(M, rt?.event, J ?? M);
          return (0, e.jsxs)("div", {
            className: x().SocialLink,
            children: [
              (0, e.jsx)("div", { className: x().SocialIcon, children: T }),
              Te,
            ],
          });
        }
      },
      39654: (K, mt, i) => {
        "use strict";
        i.d(mt, { vE: () => N });
        var e = i(72604),
          G = i(99412),
          w = i(72609),
          f = i(80902),
          L = i(38884),
          C = i(76559),
          D = i(18210);
        const gt = "events/ajaxgetpartnerevent";
        function x(P) {
          const ct = D.A0.GetELanguageFallback(P);
          return P != ct ? `${P}_${ct}` : `${P}`;
        }
        function g(P) {
          return P ? (0, L.oE)(new C.b(P.clanSteamID64), P.event) : null;
        }
        async function s(P, ct) {
          const Y = new URLSearchParams();
          P.clanAccountID && Y.set("clan_accountid", String(P.clanAccountID)),
            P.appid && Y.set("appid", String(P.appid)),
            P.eventGID && Y.set("event_gid", P.eventGID),
            P.announcementGID && Y.set("announcement_gid", P.announcementGID),
            Y.set("lang_list", x(ct)),
            Y.set("last_modified_time", "0"),
            Y.set("origin", window.location.origin);
          const Q = w.TS.STORE_BASE_URL + gt + "?" + Y.toString(),
            ft = await fetch(Q);
          if (!ft.ok) throw new Error(`${Q} answered ${ft.status}`);
          const xt = await ft.json();
          return xt.success !== e.R || !xt.event?.clan_steamid
            ? null
            : { clanSteamID64: xt.event.clan_steamid, event: xt.event };
        }
        function A(P, ct) {
          return [
            "LinkedPartnerEvent",
            P.clanAccountID,
            P.appid,
            P.eventGID,
            P.announcementGID,
            ct,
          ];
        }
        function h(P) {
          return (
            !!P &&
            (!!P.clanAccountID || !!P.appid) &&
            (!!P.eventGID || !!P.announcementGID)
          );
        }
        function et(P, ct) {
          const Y = h(P);
          return {
            queryKey: A(P ?? {}, ct),
            queryFn: () => s(P ?? {}, ct),
            select: g,
            enabled: Y,
            staleTime: 3600 * 1e3,
            retry: !1,
          };
        }
        function N(P) {
          const ct = (0, G.sfN)(w.TS.LANGUAGE);
          return (0, f.I)(et(P, ct));
        }
      },
      56492: (K, mt, i) => {
        "use strict";
        i.d(mt, {
          Bw: () => st,
          EX: () => dt,
          Hx: () => Et,
          JP: () => ht,
          LJ: () => it,
          OG: () => lt,
          PH: () => Q,
          T7: () => at,
          sY: () => nt,
          tj: () => At,
          yh: () => St,
        });
        var e = i(7850),
          G = i(50974),
          w = i(99412),
          f = i(24660),
          L = i(72865),
          C = i(90626),
          D = i(92757),
          gt = i(83482),
          x = i(16369),
          g = i(10303),
          s = i(64165),
          A = i(71742),
          h = i(53113),
          et = i(3166),
          N = i(72609),
          P = i(39905),
          ct = i(47875),
          Y = i(40358),
          Q = ((b) => (
            (b.k_eView = "view"),
            (b.k_eViewWebSiteHub = "websitehub"),
            (b.k_eCommunityView = "communityview"),
            (b.k_eCommunityEdit = "edit"),
            (b.k_eCommunityEditBroadcast = "editBroadcast"),
            (b.k_eCommunityAdminPage = "admin"),
            (b.k_eCommunityPublish = "publish"),
            (b.k_eCommunityMigrate = "migrate"),
            (b.k_eCommunityPreview = "preview"),
            (b.k_eCommunityPreviewSale = "previewsale"),
            (b.k_eCommunityAnnouncementHub = "community_announcehub"),
            (b.k_eStoreView = "storeview"),
            (b.k_eStoreNewsHub = "newshub"),
            (b.k_eStoreOwnerPage = "store"),
            (b.k_eStoreSalePage = "sale"),
            (b.k_eStoreHardwarePreview = "hardwarepreview"),
            (b.k_eStoreUsersNewsHub = "usernewshub"),
            b
          ))(Q || {});
        const ft =
          /(?:steampowered\.com|community\.\S+\.steam\.dev|store\.\S+\.steam\.dev|valve\.org\/store|steam\.dev\/store|\.steamchina\.com|steamcommunity\.com|valve\.org\/community|steam\.dev\/community)\/(\w+)(\/|$)/i;
        function xt(b) {
          return b.match(ft)?.[1];
        }
        function _(b, V) {
          if (!V) return !1;
          const tt = !0,
            q = xt(window.location.href),
            Tt = tt && q == "news",
            vt = V.GetEventType() == w.ajI,
            ot = !1,
            ut = V.appid ? "games" : "groups",
            pt =
              ot &&
              ut == q &&
              ((V.appid && V.appid === et.UF.APPID) ||
                (!V.appid &&
                  V.clanSteamID.GetAccountID() === et.UF.CLANACCOUNTID));
          switch (b) {
            case "view":
              return pt || (Tt && !nt());
            case "communityview":
            case "edit":
            case "editBroadcast":
            case "publish":
            case "migrate":
            case "preview":
            case "previewsale":
            case "community_announcehub":
              return pt;
            case "admin":
              return vt ? !1 : pt;
            case "websitehub":
              return pt || Tt;
            case "storeview":
              return Tt && !nt();
            case "newshub":
            case "store":
            case "usernewshub":
              return Tt;
            case "sale":
              return !1;
            case "hardwarepreview":
              return !1;
            default:
              return (
                (0, A.wT)(!1, "Unknown route specified for link: " + b), !1
              );
          }
        }
        function ht(b) {
          const V =
            N.TS.COMMUNITY_BASE_URL +
            "gid/" +
            b.clanSteamID.ConvertTo64BitString() +
            "/announcements/share/" +
            b.AnnouncementGID;
          return {
            strFacebookUrl: V + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: V + "?site=twitter",
            strRedditUrl: V + "?site=reddit",
          };
        }
        function dt(b) {
          return Nt(b, "sale", "absolute");
        }
        function ue(b, V) {
          return St(b, V, "sale", "absolute");
        }
        function at(b) {
          return Nt(b, "storeview", "absolute");
        }
        function k(b, V) {
          return St(b, V, "storeview", "absolute");
        }
        function Z(b, V, tt) {
          if (tt)
            return (
              (b ? "/games/" + et.UF.VANITY_ID : "/groups/" + et.UF.VANITY_ID) +
              "/"
            );
          const q = b ? "ogg/" + b : "gid/" + V.ConvertTo64BitString();
          return N.TS.COMMUNITY_BASE_URL + q + "/";
        }
        function it() {
          return "news";
        }
        function nt() {
          return !1;
        }
        function jt(b) {
          return b.clanSteamID.GetAccountID() === G.gt && !1;
        }
        function Nt(b, V, tt) {
          const { data: q } = (0, Y.J$)(b?.appid ? { appid: b.appid } : void 0);
          if (b) return St(b, q, V, tt);
        }
        function St(b, V, tt, q) {
          const Tt = q === "relative",
            vt = !1,
            ot = Tt ? "/" : N.TS.STORE_BASE_URL,
            ut = Z(b.appid, b.clanSteamID, Tt);
          tt === "view"
            ? (tt = vt ? "communityview" : "storeview")
            : tt === "websitehub" &&
              (tt = vt ? "community_announcehub" : "newshub");
          const pt = b.GID ? b.GID : "",
            Mt = b.AnnouncementGID ? b.AnnouncementGID : "",
            Ut =
              b.BIsOGGEvent() &&
              b.appid &&
              V &&
              b.BHasSaleUpdateLandingPageVanity(),
            It = b.GetEventType() == w.ajI;
          switch (tt) {
            case "publish":
              return (
                ut +
                (b.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Mt
                  : "partnerevents/publish/" + pt + "?tab=publishing")
              );
            case "edit":
              return (
                ut +
                (b.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Mt
                  : "partnerevents/edit/" + pt)
              );
            case "editBroadcast":
              return (
                ut +
                (b.bOldAnnouncement
                  ? "partnerevents/migrate_announcement/" + Mt
                  : "partnerevents/edit/" + pt) +
                "?tab=broadcast"
              );
            case "migrate":
              return ut + "partnerevents/migrate_announcement/" + Mt;
            case "preview":
              return It
                ? ut + "partnerevents/previewsale/" + pt
                : ut +
                    (b.bOldAnnouncement
                      ? "partnerevents/preview_old_announcement/" + Mt
                      : "partnerevents/preview/" + pt);
            case "previewsale":
              return ut + "partnerevents/previewsale/" + pt;
            case "admin":
              return It
                ? `${ot}curator/${b.clanSteamID.GetAccountID()}/admin/creatorhome_link`
                : ut + "partnerevents";
            case "community_announcehub":
              return ut + "announcements";
            case "newshub": {
              const zt = b.appid
                ? `app/${b.appid}`
                : `group/${b.clanSteamID.GetAccountID()}`;
              return ot + `${it()}/${zt}`;
            }
            case "store":
              return (
                ot +
                (b.appid
                  ? "app/" + b.appid
                  : "curator/" + b.clanSteamID.GetAccountID())
              );
            case "sale":
              return b.jsondata.bSaleEnabled
                ? Ut
                  ? `${(0, ct._)(V)}/${b.GetSaleUpdateLandingPageVanity()}`
                  : It
                    ? `${ot}curator/${b.clanSteamID.GetAccountID()}`
                    : ot +
                      (0, s.n)(
                        b.clanSteamID.GetAccountID(),
                        b.GetSaleVanity(),
                        !!b.jsondata
                          .sale_vanity_id_valve_approved_for_sale_subpath,
                      )
                : ot;
            case "hardwarepreview":
              return jt(b) ? `${ot}hardware_v2/${Mt}?beta=1` : ot;
            case "communityview":
              return ut + "announcements/detail/" + Mt;
            case "storeview": {
              if (b.clanSteamID.GetAccountID() == (0, x.H)())
                return `${N.TS.STORE_BASE_URL}meetsteam/${pt}`;
              if (Ut)
                return `${(0, ct._)(V)}/${b.GetSaleUpdateLandingPageVanity()}`;
              if (It) return `${ot}curator/${b.clanSteamID.GetAccountID()}`;
              {
                const zt = b.appid
                    ? `app/${b.appid}`
                    : `group/${b.clanSteamID.GetAccountID()}`,
                  Wt = nt() ? "view_v2" : "view",
                  $t = b.bOldAnnouncement ? `old_view/${Mt}` : `${Wt}/${pt}`;
                return `${ot}${it()}/${zt}/${$t}`;
              }
            }
            case "usernewshub":
              return `${ot}${it()}/`;
            default:
              return (0, A.wT)(!1, "Unknown route specified for link"), "";
          }
        }
        function st(b, V, tt) {
          const q = tt === "forceAbsolute" || !_(V, b);
          return Nt(b, V, q ? "absolute" : "relative");
        }
        function Ot(b, V, tt, q) {
          const Tt = q === "forceAbsolute" || !_(tt, b);
          return St(b, V, tt, Tt ? "absolute" : "relative");
        }
        function lt(b) {
          const { eventModel: V, route: tt, bPopup: q = !0 } = b,
            Tt = _(tt, V),
            vt = Nt(V, tt, Tt ? "relative" : "absolute");
          return (
            C.useEffect(() => {
              vt && (q ? window.open(vt) : window.location.assign(vt));
            }, [q, vt]),
            Tt && vt ? (0, e.jsx)(D.rd, { push: !0, to: vt }) : null
          );
        }
        function Et(b, V, tt) {
          const q = Z(b, V, !1);
          return tt === "admin" ? q + "partnerevents" : "";
        }
        function At(b) {
          const { eventModel: V, preferredFocus: tt } = b,
            { bCanUseLink: q } = C.useContext(g.I),
            Tt = (0, L.n9)(),
            vt = (0, D.W6)(),
            ot = q && _(b.route, V),
            ut = Nt(V, b.route, ot ? "relative" : "absolute"),
            pt = !ot && ut ? (0, h.NT)(ut) : ut,
            Mt = ot || !pt ? pt : (0, gt.wJ)(pt, Tt),
            Ut = Nt(V, "websitehub", "absolute"),
            It =
              b.route != "websitehub"
                ? P.Z.Localize("#EventBrowse_MoreEventsBtn")
                : "",
            zt = C.useCallback(() => {
              Ut && window.location.assign(Ut);
            }, [Ut]);
          return V
            ? ot
              ? (0, e.jsx)(f.Ii, {
                  style: b.style,
                  className: b.className,
                  href: vt.createHref({ pathname: Mt }),
                  onClick: (Wt) => {
                    Mt && (b.onClick?.(Wt), vt.push(Mt), Wt.preventDefault());
                  },
                  onOptionsActionDescription: It,
                  onOptionsButton: It ? zt : void 0,
                  preferredFocus: tt,
                  children: b.children,
                })
              : (0, e.jsx)(f.Ii, {
                  href: Mt,
                  style: b.style,
                  className: b.className,
                  onClick: b.onClick,
                  preferredFocus: tt,
                  onOptionsActionDescription: It,
                  onOptionsButton: It ? zt : void 0,
                  children: b.children,
                })
            : null;
        }
      },
      87949: (K, mt, i) => {
        "use strict";
        i.d(mt, { e: () => s });
        var e = i(7850),
          G = i(48156),
          w = i(72609),
          f = i(40358),
          L = i(88743),
          C = i(61431),
          D = i(36707),
          gt = i(18210),
          x = i(20881),
          g = i.n(x);
        function s(A) {
          const { inputType: h, id: et, bApplyUserContentPref: N } = A,
            P = h == "bundle" ? "bundle" : h == "sub" ? "sub" : "game",
            ct = (0, L.zl)(et, P),
            { data: Y } = (0, f.J$)(ct),
            { data: Q, isPending: ft } = (0, f.Ij)(N ? ct : void 0);
          if (!Y) return null;
          if (N) {
            if (ft) return null;
            if (Q?.filter_failure == G.hQ.Zy || Q?.filter_failure == G.hQ.ir) {
              let xt = "#StoreCapsule_App_Excluded";
              switch (h) {
                case "sub":
                  xt = "#StoreCapsule_Package_Excluded";
                  break;
                case "bundle":
                  xt = "#StoreCapsule_Bundle_Excluded";
                  break;
              }
              return (0, e.jsx)("div", {
                className: (0, D.A)(
                  g().AppSummaryWidgetCtn,
                  "AppSummaryWidgetCtn",
                ),
                children: (0, gt.oW)(
                  xt,
                  (0, e.jsx)("a", {
                    href: w.TS.STORE_BASE_URL + "account/preferences/",
                  }),
                ),
              });
            }
          }
          return (0, e.jsx)("div", {
            className: (0, D.A)(g().AppSummaryWidgetCtn, "AppSummaryWidgetCtn"),
            children: (0, e.jsx)(C.p, {
              id: et,
              type: P,
              bShowDemoButton: Y.type == G.uE.ue,
              bAllowTwoLinesForHeader: !0,
              bPreferAssetWithoutOverride: !1,
            }),
          });
        }
      },
      88812: (K, mt, i) => {
        "use strict";
        i.d(mt, { WC: () => gt });
        var e = i(9046),
          G = i(5827),
          w = i(75233),
          f = i(80902),
          L = i(71742),
          C = i(68266),
          D = i(85741);
        function gt(s, A, h, et, N) {
          const P = (0, w.jE)(),
            ct = (0, G.eG)();
          return (0, f.I)(g(P, ct, s, A, h, et, N)).data ?? void 0;
        }
        function x(s, A, h, et, N) {
          return [
            "useEventImageForSizeAsArrayWithFallback",
            s?.GID,
            A,
            h,
            et,
            N,
          ];
        }
        function g(s, A, h, et, N, P, ct) {
          return {
            queryKey: x(h, et, N, P, ct),
            enabled: h && !!h.GID,
            queryFn: async () => {
              if (!h) return null;
              let Y = new Array();
              if (!h.BImageNeedScreenshotFallback(et, N)) {
                const Q = await s.ensureQueryData((0, C.lx)(s, A, h, et, N, P));
                if ((Q && Y.push(Q), P != e.wI.full)) {
                  const ft = await s.ensureQueryData(
                    (0, C.lx)(s, A, h, et, N, e.wI.full),
                  );
                  ft && Y.push(ft);
                }
              }
              if (!ct)
                try {
                  const Q = await s.ensureQueryData((0, D.dO)(s, A, h));
                  Q && Y.push(Q);
                } catch (Q) {
                  if (
                    ((0, L.wT)(
                      !1,
                      `Failed to get fallback art/screenshot for event ${h?.GID} from clan ${h?.clanSteamID.GetAccountID()}`,
                    ),
                    Y.length == 0)
                  )
                    throw Q;
                }
              return Y;
            },
          };
        }
      },
      68266: (K, mt, i) => {
        "use strict";
        i.d(mt, { lx: () => et, m0: () => A });
        var e = i(9046),
          G = i(55483),
          w = i(72609),
          f = i(21721),
          L = i(5827),
          C = i(40358),
          D = i(75233),
          gt = i(80902),
          x = i(18210),
          g = i(53113),
          s = i(85741);
        function A(P, ct, Y, Q = e.wI.full, ft = !0) {
          const xt = (0, D.jE)(),
            _ = (0, L.eG)();
          return (0, gt.I)(et(xt, _, P, ct, Y, Q, ft)).data ?? void 0;
        }
        function h(P, ct, Y, Q = e.wI.full, ft = !0) {
          return ["useEventImageURLWithFallback", P?.GID, ct, Y, Q, ft];
        }
        function et(P, ct, Y, Q, ft, xt = e.wI.full, _ = !0) {
          return {
            queryKey: h(Y, Q, ft, xt, _),
            enabled: !!Y?.GID,
            initialData: () => N(Y, Q, ft, xt, _),
            queryFn: async () => {
              if (!Y) return null;
              let ht = N(Y, Q, ft, xt, _);
              if (ht) return ht;
              const dt = await P.ensureQueryData(
                (0, G.ec)(Y.clanSteamID.GetAccountID(), P),
              );
              if (Q == "capsule") {
                let at = Y.appid;
                if (
                  !at &&
                  dt &&
                  ((dt.is_creator_home && !dt.is_ogg) || dt.is_curator)
                )
                  if (Y.jsondata?.referenced_appids?.length)
                    at = Y.jsondata.referenced_appids[0];
                  else return dt.avatar_full_url ?? null;
                const k = await P.ensureQueryData((0, C.AQ)(ct, { appid: at }));
                return k
                  ? ((0, f.b0)(k, "main_capsule") ?? null)
                  : dt?.avatar_full_url
                    ? dt.avatar_full_url
                    : `${w.TS.STORE_ITEM_BASE_URL}steam/apps/${at}/header.jpg`;
              }
              return Q == "background" &&
                dt &&
                ((dt.is_creator_home && !dt.is_ogg) || dt.is_curator)
                ? (dt.creator_page_bg_url ?? null)
                : await P.ensureQueryData((0, s.dO)(P, ct, Y));
            },
          };
        }
        function N(P, ct, Y, Q = e.wI.full, ft = !0) {
          if (!P) return;
          const xt = P.GetImageURL(ct, Y, Q);
          if (xt && xt.trim().length > 0) return xt;
          const _ = x.A0.GetELanguageFallback(Y);
          if (Y != _) {
            const dt = P.GetImageURL(ct, _, Q);
            if (dt && dt.trim().length > 0) return dt;
          }
          if (ct == "capsule") {
            let dt = P.GetImageFromBeginningOfDescription(Y, Number.MAX_VALUE);
            if (dt && (ft || (0, g.ZF)(dt))) return dt;
          }
        }
      },
      85741: (K, mt, i) => {
        "use strict";
        i.d(mt, { Mg: () => gt, dO: () => x });
        var e = i(55483),
          G = i(99412),
          w = i(72609),
          f = i(5827),
          L = i(40358),
          C = i(75233),
          D = i(80902);
        function gt(s) {
          const A = (0, C.jE)(),
            h = (0, f.eG)();
          return (0, D.I)(x(A, h, s)).data ?? void 0;
        }
        function x(s, A, h) {
          return {
            queryKey: g(h),
            enabled: !!h?.GID,
            queryFn: async () => {
              if (!h) return null;
              const et = h.appid
                  ? await s.ensureQueryData((0, L.OE)(A, { appid: h.appid }))
                  : null,
                N = await s.ensureQueryData(
                  (0, e.ec)(h.clanSteamID.GetAccountID(), s),
                );
              if (h.appid)
                if (et) {
                  if (
                    et.all_ages_screenshots &&
                    et.all_ages_screenshots.length > 0
                  ) {
                    let P = Number(
                      h.bOldAnnouncement
                        ? h.AnnouncementGID
                        : h.GID == null
                          ? 0
                          : h.GID,
                    );
                    return (
                      (P = P % et.all_ages_screenshots.length),
                      `${w.TS.STORE_ITEM_BASE_URL}${et.all_ages_screenshots[P].filename}`
                    );
                  }
                } else return "";
              return h.GetEventType() != G.ajI &&
                N &&
                ((N.is_creator_home && !N.is_ogg) || N.is_curator)
                ? (N.avatar_full_url ?? null)
                : null;
            },
          };
        }
        function g(s) {
          return ["useFallbackArtworkScreenshot", s?.GID];
        }
      },
      16369: (K, mt, i) => {
        "use strict";
        i.d(mt, { H: () => w });
        var e = i(99412),
          G = i(72609);
        const w = () => (G.TS.EUNIVERSE === e.Rv ? 2581 : 45267781);
      },
      31774: (K, mt, i) => {
        "use strict";
        i.d(mt, { $O: () => Y, wk: () => ct });
        var e = i(80902),
          G = i(75233),
          w = i(90626),
          f = i(72609),
          L = i(45806),
          C = i(48491),
          D = i(49288);
        async function gt(Q, ft) {
          const { rgDefIDs: xt, strCategory: _, itemClass: ht } = ft,
            dt = await D.a9.QueryRewardItems(Q, {
              definitionids: xt,
              community_item_classes: ht ? [ht] : void 0,
              filter_match_any_category_tags: _ ? [_] : void 0,
            });
          if (!dt.BSuccess())
            throw new Error(
              "LoyaltyRewards.QueryRewardItems answered " + dt.GetEResult(),
            );
          return dt.Body().toObject().definitions ?? [];
        }
        let x;
        function g() {
          const Q = (0, L.q)();
          return Q
            ? Q.GetAnonymousServiceTransport()
            : (x || (x = new C.D(f.TS.WEBAPI_BASE_URL)),
              x.GetServiceTransport());
        }
        async function s(Q) {
          return gt(g(), Q);
        }
        const A = 3600 * 1e3;
        function h(Q) {
          return ["LoyaltyRewardDef", Q];
        }
        function et(Q, ft) {
          return ["LoyaltyRewardDefsByCategoryAndClass", Q, ft];
        }
        function N(Q) {
          return {
            queryKey: h(Q),
            queryFn: async () => {
              const ft = await s({ rgDefIDs: [Q] }),
                xt = ft.length == 1 ? ft[0] : void 0;
              if (!xt)
                throw new Error(
                  `Asked for point shop item ${Q} and got ${ft.length} items back, wanted exactly one.`,
                );
              return xt;
            },
            enabled: Q > 0,
            staleTime: A,
            retry: !1,
          };
        }
        function P(Q, ft) {
          return {
            queryKey: et(Q, ft),
            queryFn: () => s({ strCategory: Q, itemClass: ft }),
            enabled: !!(Q && ft),
            staleTime: A,
            retry: !1,
          };
        }
        function ct(Q) {
          const { data: ft } = (0, e.I)(N(Q));
          return ft;
        }
        function Y(Q, ft) {
          const xt = (0, G.jE)(),
            { data: _ } = (0, e.I)(P(Q, ft));
          return (
            (0, w.useEffect)(() => {
              _?.forEach((ht) => {
                ht.defid !== void 0 && xt.setQueryData(h(ht.defid), ht);
              });
            }, [_, xt]),
            _
          );
        }
      },
      47797: (K, mt, i) => {
        "use strict";
        i.d(mt, { Ns: () => w });
        var e = i(99412);
        const G = 1778623200;
        function w(C, D) {
          let gt = !1;
          return (
            C && C.GetEventType() == e.ajI
              ? (gt = !0)
              : C && D && D.is_creator_home && (gt = f(C, D)),
            gt
          );
        }
        function f(C, D) {
          return !!D && !!D.is_creator_home && (C.createTime ?? 0) > G;
        }
        function L(C) {
          const D = useClanInfoByAccountID(C.clanSteamID.GetAccountID());
          return w(C, D.data);
        }
      },
      64457: (K, mt, i) => {
        "use strict";
        i.d(mt, { PE: () => ht, Yg: () => ft, _t: () => xt, gO: () => ue });
        var e = i(7850),
          G = i(21721),
          w = i(25046),
          f = i(40358),
          L = i(68094),
          C = i(41032),
          D = i(90626),
          gt = i(62571),
          x = i(40426),
          g = i(36118),
          s = i(36707),
          A = i(18210),
          h = i(72609),
          et = i(96538),
          N = i(85599),
          P = i(64271),
          ct = i(48963),
          Y = i.n(ct),
          Q = i(50573);
        function ft(k) {
          const { id: Z, bPopOutTrailerPlayback: it } = k,
            { data: nt } = (0, f.Yo)(Z),
            { data: jt } = (0, f.j4)(Z),
            { data: Nt } = (0, f.J$)(Z),
            [St, st] = (0, D.useState)(!1),
            [Ot, lt] = (0, D.useState)(!1),
            Et = (0, C.dy)(),
            At = nt?.highlights?.filter((q) => !Et || q.all_ages),
            b = At && At?.length > 0 ? At[0] : void 0,
            V = D.useCallback(() => {
              b && (it ? lt(!0) : st((q) => !q));
            }, [b, it]);
          if (!Nt)
            return (0, e.jsx)("div", {
              className: (0, s.A)(Y().HilightGrid, Y().MediaContainer),
              children: (0, e.jsx)(N.t, { size: "medium" }),
            });
          const tt = b
            ? (0, e.jsx)(at, {
                trailer: b,
                bPlayVideo: St,
                fnTogglePlayTrailer: V,
              })
            : null;
          return !b &&
            !(
              jt &&
              jt.all_ages_screenshots &&
              jt.all_ages_screenshots.length > 0
            )
            ? null
            : (0, e.jsxs)("div", {
                className: (0, s.A)(Y().HilightGrid, Y().MediaContainer),
                children: [
                  (0, e.jsx)(xt, {
                    elFeaturedInCenter: tt,
                    storeItemScreenshots: jt,
                    trailer: b,
                    id: Z,
                    name: Nt.name || "",
                  }),
                  it
                    ? (0, e.jsx)(ht, {
                        id: Z,
                        bShowModal: Ot,
                        hideModal: () => lt(!1),
                      })
                    : (0, e.jsx)(_, {
                        name: Nt.name || "",
                        trailer: b,
                        bPlayVideo: St,
                        fnTogglePlayTrailer: V,
                        bControls: !0,
                      }),
                ],
              });
        }
        function xt(k) {
          const {
              elFeaturedInCenter: Z,
              id: it,
              name: nt,
              trailer: jt,
              storeItemScreenshots: Nt,
              featureElementclassName: St,
              bUseTrailerAsFirstThumb: st,
              bNoScreenShotModals: Ot,
            } = k,
            [lt, Et] = D.useState(void 0),
            [At, b] = (0, x.XC)(),
            V = (0, C.dy)(),
            tt = (0, D.useRef)(null),
            [q, Tt] = (0, D.useState)(0);
          if (!it) return null;
          const vt = Z || (lt !== void 0 && lt !== -1) ? lt : 0,
            ot = new Array(),
            ut = new Array();
          st &&
            jt &&
            (ot.push(
              (0, e.jsx)(
                at,
                {
                  trailer: jt,
                  bPlayVideo: !1,
                  fnTogglePlayTrailer: () => {},
                  onMouseEnter: () => Et(0),
                  onMouseLeave: () => {
                    const It = tt.current;
                    It && Tt(It.currentTime);
                  },
                },
                "trail_thumb_",
              ),
            ),
            ut.push(
              (0, e.jsx)(
                _,
                {
                  ref: tt,
                  name: nt,
                  trailer: jt,
                  bControls: !1,
                  bPlayVideo: !0,
                  startTime: q,
                  fnTogglePlayTrailer: () => {},
                },
                "trail_inline",
              ),
            ));
          const pt = (
            V ? Nt?.all_ages_screenshots : Nt?.mature_content_screenshots
          )?.filter(Boolean);
          if (
            (pt?.forEach((It, zt) => {
              if ((Z || zt > 0) && ot.length < 3) {
                const Wt = (0, G.bu)(It, "thumb"),
                  $t = (0, G.bu)(It, "600x338"),
                  Xt = ot.length;
                ot.push(
                  (0, e.jsx)(
                    "div",
                    {
                      className: (0, s.A)({
                        [Y().ThumbnailCtn]: !0,
                        [Y().ThumbnialClickable]: !Ot,
                      }),
                      onMouseEnter: () => Et(Xt),
                      children: Ot
                        ? (0, e.jsx)("img", { src: Wt, alt: nt })
                        : (0, e.jsx)("button", {
                            type: "button",
                            className: Y().ThumbnailButton,
                            onClick: () => {
                              const Ft = [...(pt || [])];
                              if (Ft.length > 0) {
                                for (let Zt = 0; Zt < zt; ++Zt) {
                                  const qt = Ft.shift();
                                  qt && Ft.push(qt);
                                }
                                At(Ft.map((Zt) => (0, G.bu)(Zt, "full")));
                              }
                            },
                            children: (0, e.jsx)("img", { src: Wt, alt: nt }),
                          }),
                    },
                    zt + "_small_" + Wt,
                  ),
                ),
                  ut.push(
                    (0, e.jsx)(
                      "div",
                      {
                        className: Y().ScreenshotDisplayCtn,
                        children: (0, e.jsx)("img", { src: $t, alt: nt }),
                      },
                      zt + "_big_" + Wt,
                    ),
                  );
              }
            }),
            !Z && (!ut || ut.length == 0))
          )
            return null;
          const Mt = ot.slice(0, 3),
            Ut = Array.from({ length: Math.max(0, 3 - Mt.length) });
          return (0, e.jsxs)(e.Fragment, {
            children: [
              b,
              (0, e.jsx)("div", {
                className: St || Y().MainMediaCtn,
                children:
                  Z && (vt === -1 || vt === void 0)
                    ? (0, e.jsx)(e.Fragment, { children: Z })
                    : (0, e.jsx)(e.Fragment, {
                        children: vt !== void 0 && ut[vt],
                      }),
              }),
              Mt.length > 0 &&
                (0, e.jsxs)("div", {
                  className: Y().ScreenshotThumbnailRow,
                  onMouseLeave: () => Et(-1),
                  children: [
                    Mt,
                    Ut.map((It, zt) =>
                      (0, e.jsx)(
                        "div",
                        { className: Y().ThumbnailCtn },
                        `app_${(0, L.ER)(it)}_${zt}`,
                      ),
                    ),
                  ],
                }),
            ],
          });
        }
        function _(k) {
          const {
            ref: Z,
            name: it,
            trailer: nt,
            bControls: jt,
            bPlayVideo: Nt,
            fnTogglePlayTrailer: St,
            startTime: st,
          } = k;
          if (
            ((0, D.useEffect)(() => {
              const lt = Z?.current;
              if (st != null && st > 0 && lt) {
                const Et = () => {
                  lt.currentTime = st || 0;
                };
                return (
                  lt.addEventListener("loadedmetadata", Et),
                  () => {
                    lt.removeEventListener("loadedmetadata", Et);
                  }
                );
              }
            }, [Z, st]),
            !nt)
          )
            return null;
          let Ot = (0, s.A)(Y().VideoLargeContainer, Nt && Y().videoPlaying);
          return (0, e.jsxs)("div", {
            className: Ot,
            onClick: St,
            role: "presentation",
            children: [
              (0, e.jsx)(Q.hj, {
                name: it,
                trailerCategory: nt.trailer_category,
                trailerDisplay: Q.g,
                mouseOver: !1,
              }),
              !!(Nt && nt.microtrailer) &&
                (0, e.jsx)("video", {
                  className: Y().VideoLarge,
                  ref: Z,
                  controls: jt,
                  autoPlay: !0,
                  loop: !0,
                  muted: !0,
                  poster: st != null && st > 0 ? void 0 : nt.screenshot_full,
                  children: nt.microtrailer?.map((lt) =>
                    h.TS.IN_CLIENT && lt.type == "video/mp4"
                      ? null
                      : (0, e.jsx)(
                          "source",
                          {
                            src: (0, w.M4)(nt, lt.filename || ""),
                            type: lt.type,
                          },
                          lt.filename,
                        ),
                  ),
                }),
              jt &&
                (0, e.jsx)("button", {
                  type: "button",
                  className: Y().CloseButton,
                  "aria-label": (0, A.we)("#Button_Close"),
                  children: (0, e.jsx)(g.sED, {}),
                }),
            ],
          });
        }
        function ht(k) {
          return k.bShowModal ? (0, e.jsx)(dt, { ...k }) : null;
        }
        function dt(k) {
          const { id: Z, bShowModal: it, trailerBaseID: nt, hideModal: jt } = k,
            { data: Nt } = (0, f.J$)(Z),
            St = (0, w.kB)(Z),
            st = (0, D.useMemo)(() => {
              if (!(!St || St.length == 0)) {
                if (nt) {
                  const tt = St.find((q) => q.trailer_base_id == nt);
                  if (tt) return tt;
                }
                return St[0];
              }
            }, [St, nt]),
            Ot = D.useId(),
            lt = D.useId(),
            {
              rgDashTrailers: Et,
              rgHlsTrailers: At,
              strCaptionManufest: b,
              strScreenshot: V,
            } = (0, D.useMemo)(() => {
              if (!st)
                return {
                  rgDashTrailers: [],
                  rgHlsTrailers: [],
                  strCaptionManufest: "",
                  strScreenshot: "",
                };
              const { rgDashTrailers: tt, rgHlsTrailers: q } = (0, w.hg)(st);
              return {
                rgDashTrailers: tt,
                rgHlsTrailers: q,
                strCaptionManufest: (0, w.Wv)(st),
                strScreenshot: (0, w.hl)(st),
              };
            }, [st]);
          return !st || !st.adaptive_trailers || Et.length == 0
            ? null
            : (0, e.jsx)(et.EN, {
                active: it,
                children: (0, e.jsxs)(et.eV, {
                  "aria-labelledby": (0, gt.q)(Ot, lt),
                  bAllowFullSize: !0,
                  bOKDisabled: !0,
                  closeModal: jt,
                  children: [
                    (0, e.jsx)("div", {
                      className: Y().VideoPopupContainers,
                      children: (0, e.jsx)(P.P, {
                        dashManifests: Et,
                        hlsManifest: At[0] || "",
                        screenshot: V,
                        altText: st.trailer_name,
                        muteWhenAutoplayBlocked: !0,
                        captionManifest: b,
                      }),
                    }),
                    (0, e.jsx)("div", {
                      id: Ot,
                      style: { display: "none" },
                      children: Nt?.name || "",
                    }),
                    (0, e.jsx)("div", {
                      id: lt,
                      style: { display: "none" },
                      children: st.trailer_name,
                    }),
                  ],
                }),
              });
        }
        function ue(k) {
          const {
              appid: Z,
              trailerBaseID: it,
              bShowModal: nt,
              hideModal: jt,
            } = k,
            Nt = (0, D.useMemo)(() => ({ appid: Z }), [Z]);
          return (0, e.jsx)(ht, {
            id: Nt,
            trailerBaseID: it,
            bShowModal: nt,
            hideModal: jt,
          });
        }
        function at(k) {
          const {
            trailer: Z,
            fnTogglePlayTrailer: it,
            bPlayVideo: nt,
            onMouseEnter: jt,
            onMouseLeave: Nt,
          } = k;
          return (0, e.jsxs)("div", {
            className: (0, s.A)({
              [Y().VideoThumbnail]: !nt,
              [Y().videoPlaying]: nt,
              [Y().ThumbnailCtn]: !0,
            }),
            onClick: it,
            onMouseEnter: jt,
            onMouseLeave: Nt,
            role: "presentation",
            children: [
              (0, e.jsx)("img", { src: (0, w.hl)(Z), alt: Z.trailer_name }),
              (0, e.jsx)("button", {
                type: "button",
                className: Y().VideoPlayButton,
                "aria-label": (0, A.we)("#Playback_Play_Tooltip"),
                children: (0, e.jsx)(g.jGG, {}),
              }),
            ],
          });
        }
      },
      76617: (K, mt, i) => {
        "use strict";
        i.d(mt, { V: () => gt });
        function e(x) {
          return Object.prototype.toString.call(x) === "[object Object]";
        }
        function G(x) {
          if (!e(x)) return !1;
          const g = x.constructor;
          if (typeof g > "u") return !0;
          const s = g.prototype;
          return !(
            !e(s) || !Object.prototype.hasOwnProperty.call(s, "isPrototypeOf")
          );
        }
        function w(...x) {
          return JSON.stringify(x, (g, s) => {
            if (G(s)) {
              const A = {};
              return (
                Object.keys(s)
                  .sort()
                  .forEach((h) => {
                    A[h] = s[h];
                  }),
                A
              );
            }
            return s;
          });
        }
        var f = i(90626),
          L = i(7850);
        const C = (0, f.createContext)({ instances: {}, factories: {} });
        function D(x) {
          const { name: g, fnFactory: s, children: A } = x,
            h = React.useContext(C),
            [et] = useState({}),
            N = useMemo(
              () => ({
                instances: et,
                factories: { ...h.factories, [g]: s },
                parent: h,
              }),
              [et, g, h],
            );
          return jsx(C.Provider, { value: N, children: A });
        }
        function gt(x, g) {
          const s = (0, f.useContext)(C),
            A = typeof x == "string" ? x : w(...x);
          let h = s;
          for (; h; ) {
            if (A in h.instances) return h.instances[A];
            if (A in h.factories) break;
            h = h.parent;
          }
          const N = (h?.factories[A] ?? g)();
          return ((h ?? s).instances[A] = N), N;
        }
      },
      38884: (K, mt, i) => {
        "use strict";
        i.d(mt, { E0: () => x, oE: () => g });
        var e = i(71742),
          G = i(3166),
          w = i(76559),
          f = i(73259),
          L = i(34592),
          C = i(99412),
          D = i(41635);
        function gt(s) {
          return (
            (s.gid == null || s.gid == null || s.gid == "0") &&
            !!s.announcement_body &&
            s.announcement_body.gid != "0"
          );
        }
        function x(s) {
          return gt(s) ? f.cB + s.announcement_body?.gid : s.gid;
        }
        function g(s, A) {
          let h = new f.lh();
          if (
            ((h.clanSteamID = s),
            (0, e.wT)(
              h.clanSteamID && h.clanSteamID.BIsValid(),
              "Invalid Clan SteamID: " +
                h.clanSteamID.ConvertTo64BitString() +
                " " +
                G.TS.EUNIVERSE,
            ),
            (h.GID = x(A)),
            (h.bOldAnnouncement = gt(A)),
            (h.appid = A.appid ?? 0),
            (h.createTime = A.rtime_created),
            (h.startTime = A.rtime32_start_time),
            (h.endTime = A.rtime32_end_time),
            (h.visibilityStartTime = A.rtime32_visibility_start),
            (h.visibilityEndTime = A.rtime32_visibility_end),
            (h.loadedAllLanguages = !1),
            (h.type = A.event_type ?? C.DRF),
            (h.nVotesUp = A.votes_up ?? 0),
            (h.nVotesDown = A.votes_down ?? 0),
            (h.comment_type = A.comment_type),
            (h.gidfeature = A.gidfeature),
            (h.gidfeature2 = A.gidfeature2),
            (h.featured_app_tagid = A.featured_app_tagid),
            (h.vecTags = new Array()),
            (h.creator_steamid = A.creator_steamid),
            (h.last_update_steamid = A.last_update_steamid),
            (h.rtime32_last_modified = A.rtime32_last_modified),
            (h.rtime32_moderator_reviewed = A.rtime_mod_reviewed),
            (h.video_preview_type = A.video_preview_type),
            (h.video_preview_id = A.video_preview_id),
            (h.has_live_stream = A.has_live_stream),
            (h.live_stream_viewer_count = A.live_stream_viewer_count),
            (h.m_nBuildID = A.build_id),
            (h.m_strBuildBranch = A.build_branch),
            A.announcement_body)
          ) {
            let N = A.announcement_body;
            (h.AnnouncementGID = N.gid),
              h.name.set(N.language, N.headline),
              h.description.set(N.language, N.body),
              h.timestamp_loc_updated.clear(),
              (h.forumTopicGID = N.forum_topic_id),
              (h.nCommentCount = N.commentcount),
              (h.postTime = N.posttime),
              h.bOldAnnouncement && !N.hidden && (h.startTime = N.posttime),
              (h.announcementClanSteamID = new w.b(N.clanid)),
              N.tags &&
                N.tags.length > 0 &&
                N.tags.forEach((P) => h.vecTags.push(P)),
              !h.rtime32_last_solr_search_col_updated &&
                h.rtime32_last_modified &&
                ((h.rtime32_last_solr_search_col_updated =
                  h.rtime32_last_modified),
                (h.rtime32_last_modified = N.updatetime));
          } else
            (h.AnnouncementGID = "0"),
              (h.forumTopicGID = A.forum_topic_id),
              h.name.clear(),
              h.description.clear(),
              h.timestamp_loc_updated.clear(),
              (h.postTime = A.rtime32_start_time),
              (h.nCommentCount = A.comment_count ?? 0),
              h.name.set(C.Bhc, A.event_name ?? ""),
              h.description.set(C.Bhc, A.event_notes ?? "");
          A.broadcaster_accountid &&
            (h.broadcaster = new w.b(A.broadcaster_accountid));
          const et = f.DJ;
          try {
            h.jsondata = {
              ...et,
              ...(A.jsondata ? JSON.parse(A.jsondata) : void 0),
            };
          } catch (N) {
            const P = (0, L.H)(N);
            throw (
              (console.error(
                "PartnerEventStore::InsertEventModelFromClanEventData: failed to parse embedded json model" +
                  P.strErrorMsg,
                P,
              ),
              N)
            );
          }
          if (
            ((h.jsondata.localized_capsule_image = (0, D.$Y)(
              h.jsondata.localized_capsule_image || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_title_image = (0, D.$Y)(
              h.jsondata.localized_title_image || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_subtitle = (0, D.$Y)(
              h.jsondata.localized_subtitle || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_summary = (0, D.$Y)(
              h.jsondata.localized_summary || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_broadcast_title = (0, D.$Y)(
              h.jsondata.localized_broadcast_title || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_broadcast_left_image = (0, D.$Y)(
              h.jsondata.localized_broadcast_left_image || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_broadcast_right_image = (0, D.$Y)(
              h.jsondata.localized_broadcast_right_image || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_sale_header = (0, D.$Y)(
              h.jsondata.localized_sale_header || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_sale_overlay = (0, D.$Y)(
              h.jsondata.localized_sale_overlay || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_sale_product_banner = (0, D.$Y)(
              h.jsondata.localized_sale_product_banner || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_sale_product_mobile_banner = (0, D.$Y)(
              h.jsondata.localized_sale_product_mobile_banner || [],
              C.bP9,
              null,
            )),
            (h.jsondata.localized_sale_logo = (0, D.$Y)(
              h.jsondata.localized_sale_logo || [],
              C.bP9,
              null,
            )),
            h.jsondata.sale_num_headers !== void 0 &&
              h.jsondata.localized_per_day_sales_header)
          )
            for (let N = 0; N < h.jsondata.sale_num_headers; ++N)
              h.jsondata.localized_per_day_sales_header[N] = (0, D.$Y)(
                h.jsondata.localized_per_day_sales_header[N],
                C.bP9,
                null,
              );
          return (
            h.jsondata.sale_sections &&
              h.jsondata.sale_sections.forEach((N, P) => {
                N.localized_label &&
                  (N.localized_label = (0, D.$Y)(
                    N.localized_label,
                    C.bP9,
                    null,
                  )),
                  N.section_type === "trailercarousel" &&
                    (N.show_as_carousel = !1),
                  (h.jsondata.sale_sections[P] = { ...f.G6, ...N });
              }),
            h.jsondata.email_setting &&
              h.jsondata.email_setting.sections &&
              h.jsondata.email_setting.sections.forEach((N) => {
                N.localized_headline !== void 0 &&
                  N.localized_headline !== null &&
                  (N.localized_headline = (0, D.$Y)(
                    N.localized_headline,
                    C.bP9,
                    null,
                  )),
                  N.localized_body !== void 0 &&
                    N.localized_body !== null &&
                    (N.localized_body = (0, D.$Y)(
                      N.localized_body,
                      C.bP9,
                      null,
                    )),
                  N.localized_image !== void 0 &&
                    N.localized_image !== null &&
                    (N.localized_image = (0, D.$Y)(
                      N.localized_image,
                      C.bP9,
                      null,
                    ));
              }),
            h.jsondata.localized_title_image.forEach((N, P) => {
              if (N != null && N.substr(0, 4) == "http") {
                let ct = N.lastIndexOf("/"),
                  Y = N.substr(ct + 1);
                h.jsondata.localized_title_image[P] = Y;
              }
            }),
            (h.bLoaded = !0),
            A.published
              ? A.unlisted
                ? (h.visibility_state = f.zv.k_EEventStateUnlisted)
                : A.hidden
                  ? (h.visibility_state = f.zv.k_EEventStateStaged)
                  : (h.visibility_state = f.zv.k_EEventStateVisible)
              : (h.visibility_state = f.zv.k_EEventStateUnpublished),
            h
          );
        }
      },
      46943: (K, mt, i) => {
        "use strict";
        i.d(mt, { Ul: () => Y, xz: () => xt, $Y: () => ft, i8: () => Q });
        var e = i(7850),
          G = i(90626),
          w = i(75844),
          f = i(5858),
          L = i(36707),
          C = i(3166),
          D = i(13465);
        const gt =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/P4mW5nmllmeSR3LMzMSSc1a07R73V72KzsILi9u5TiOC2RpJHPoFGSarQ/ef6n+de4fAn9oaL4D+DfGX9i6Uf8AhO9XSKDT9eZY3WxiDZcBGByTkn0JCZBxQB41qeiX+iXslnqNtdWF3H9+3uo2jkX6q2CKpgy208MsUzxyI4ZWViCDmvsr9rrUdT1j9nb4T6h8RBbH4qXUs0zMsSxXJ04hivnKoAU5MPGBg7uM7q+NpvvJ9R/OgAh+8/1P867T4POI/iz4Mc6U+u7NZtG/suPbuu8TKfKG4hct93njnmuKIltp5opYXjkRyrKykEHNWbDVbvSr63vbKaezvLeRZYbi3ZkkidTlWVhyCCMgjpQB6l+1F411nx58dPFWpa5a3mnXaXP2ZNOvXVpLKNBhYflJUY5PB5JJ6k15LN95PqP51a1PWr7WtQnvtRuLm/vrhzJNc3TtJLIx6lmbJJ9zVQCW5nhiiheSR3CqqqSSc0Af/9k=",
          x =
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODAK/9sAQwAGBAUGBQQGBgUGBwcGCAoQCgoJCQoUDg8MEBcUGBgXFBYWGh0lHxobIxwWFiAsICMmJykqKRkfLTAtKDAlKCko/9sAQwEHBwcKCAoTCgoTKBoWGigoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo/8AAEQgAQABAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8Inmk8+T94/3j/EfWmedJ/z0f/vo0T/6+T/eP86ZQA/zpP8Ano//AH0aPOk/56P/AN9GmVo6Loeq65M0Wj6ddXrr94QRF9v1I6fjQBR86T/no/8A30aPOk/56P8A99GtHW/Dus6GV/tjS7yyD8K00RVW+h6GsugB/nSf89H/AO+jT4JpPPj/AHj/AHh/EfWoafB/r4/94fzoAJ/9fJ/vH+dMp8/+vk/3j/OmUAXdE099W1mw06Jgsl3PHApPYswUH9a+qPF3iHSPhF4S0+003TxK0hMcEAbZvIA3SO2OvIz6k18nW88ttcRz28jxTRMHSRGKsrA5BBHQg1b1TWdT1fy/7V1G8vfLzs+0TNJtz1xknHQUAfUXw+8c6Z8UdN1HS9V0xIpUTM1s7eYkiE43KcAgg/lxg180+NtEHhzxZqmkqxdLWcojHqUPK598EV9CfBbwpF4G8J3fiLxA4trm5hEsnmceRCOQD/tHqR9B1r568a63/wAJH4r1TVghRLqYuinqE6KD74AoAxafB/r4/wDeH86ZT4P9fH/vD+dABP8A6+T/AHj/ADplPn/18n+8f50ygArt/gtpltq/xK0e2vYxJArPMUYZDFEZhn2yBXEV0/w203VNX8YWdloOoHTtQkWQx3IZl2gISeV55AI/GgD1H9pvxPdi/s/DcDGOz8pbqfHWRizBQfYbc/U+1eD12PxW0fWtE8Tpa+I9UOqXpt0cTl2bCEthctz1B/OuOoAKfB/r4/8AeH86ZT4P9fH/ALw/nQAT/wCvk/3j/OmVNPDJ58n7t/vH+E+tM8mT/nm//fJoAZV7Q9Xv9C1KLUNJuGtryMEJIoBIyCD1BHQmqnkyf883/wC+TR5Mn/PN/wDvk0AaHiHXtT8RX4vdau2u7oIIxIygHaCSBwB6msyn+TJ/zzf/AL5NHkyf883/AO+TQAynwf6+P/eH86PJk/55v/3yafBDJ58f7t/vD+E+tAH/2Q==",
          g =
            i.p +
            "images/applications/store/avatar_default_full.jpg?v=valveisgoodatcaching";
        var s = i(43047),
          A = i.n(s),
          h = i(71742),
          et = Object.defineProperty,
          N = Object.getOwnPropertyDescriptor,
          P = (_, ht, dt, ue) => {
            for (
              var at = ue > 1 ? void 0 : ue ? N(ht, dt) : ht,
                k = _.length - 1,
                Z;
              k >= 0;
              k--
            )
              (Z = _[k]) && (at = (ue ? Z(ht, dt, at) : Z(at)) || at);
            return ue && at && et(ht, dt, at), at;
          };
        function ct(_) {
          switch (_) {
            case "X-Small":
            case "Small":
              return gt;
            case "Medium":
            case "MediumLarge":
              return x;
            case "Large":
            case "X-Large":
            case "FillArea":
              return g;
            default:
              return (0, h.z_)(_, `Unhandled size ${_}`), x;
          }
        }
        const Y = G.memo(function (ht) {
          const {
              strAvatarURL: dt,
              size: ue = "Medium",
              className: at,
              statusStyle: k,
              statusPosition: Z,
              children: it,
              ...nt
            } = ht,
            jt = G.useMemo(() => {
              const Nt = [];
              return dt && Nt.push(dt), Nt.push(ct(ue)), Nt;
            }, [dt, ue]);
          return (0, e.jsxs)("div", {
            className: (0, L.A)(
              A().avatarHolder,
              "avatarHolder",
              "no-drag",
              ue,
              at,
            ),
            ...nt,
            children: [
              (0, e.jsx)("div", {
                className: (0, L.A)(A().avatarStatus, "avatarStatus", Z),
                style: k,
              }),
              (0, e.jsx)(D.c, {
                className: (0, L.A)(A().avatar, "avatar"),
                rgSources: jt,
                draggable: !1,
              }),
              it,
            ],
          });
        });
        let Q = class extends G.Component {
          render() {
            const {
              persona: _,
              size: ht = "Medium",
              animatedAvatar: dt,
              className: ue,
              strBackupAvatarURL: at,
              ...k
            } = this.props;
            let Z = "";
            return (
              dt && dt.image_small && dt.image_small.length != 0
                ? (Z =
                    C.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + dt.image_small)
                : _
                  ? ((Z = _.avatar_url_medium),
                    ht == "Small" || ht == "X-Small"
                      ? (Z = _.avatar_url)
                      : (ht == "Large" ||
                          ht == "X-Large" ||
                          ht == "FillArea") &&
                        (Z = _.avatar_url_full))
                  : at && (Z = at),
              (0, e.jsx)(Y, {
                strAvatarURL: Z,
                size: ht,
                className: (0, L.A)((0, f.rO)(_), ue),
                ...k,
              })
            );
          }
        };
        Q = P([w.PA], Q);
        const ft = (0, w.PA)((_) => {
          const {
            profileItem: ht,
            className: dt,
            bDisableAnimation: ue,
            ...at
          } = _;
          if (!ht || !ht.image_small || ht.image_small.length == 0) return null;
          let k = ue ? ht.image_large : ht.image_small;
          return (
            k || (k = ht.image_small),
            k.startsWith("https://") ||
              (k = C.TS.MEDIA_CDN_COMMUNITY_URL + "images/" + k),
            (0, e.jsx)("div", {
              className: (0, L.A)(A().avatarFrame, dt, "avatarFrame"),
              ...at,
              children: (0, e.jsx)("img", {
                className: A().avatarFrameImg,
                src: k,
              }),
            })
          );
        });
        let xt = class extends G.Component {
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
              animatedAvatar: ht,
              avatarFrame: dt,
              children: ue,
              style: at,
              bLimitProfileFrameAnimationTime: k,
              bParentHovered: Z,
              ...it
            } = this.props;
            it.onClick && (at = { ...at, cursor: "pointer" });
            const nt = this.state.bAnimate ? (ht ?? void 0) : void 0;
            return (0, e.jsx)("div", {
              onMouseEnter: () =>
                this.setState({ bAnimate: this.props.loopDuration != "None" }),
              onMouseLeave: () => this.SetupAnimationTimer(),
              children: (0, e.jsxs)(Q, {
                animatedAvatar: nt,
                ...it,
                children: [
                  ue,
                  (0, e.jsx)(ft, {
                    profileItem: dt ?? null,
                    bDisableAnimation: k && !this.state.bAnimate,
                  }),
                ],
              }),
            });
          }
        };
        xt = P([w.PA], xt);
      },
      59490: (K, mt, i) => {
        "use strict";
        i.d(mt, { p: () => gt });
        var e = i(7850),
          G = i(90626),
          w = i(76559),
          f = i(54407),
          L = i(15736),
          C = i.n(L),
          D = i(3166);
        function gt(x) {
          const {
              accountID: g,
              bHideWhenNotAvailable: s,
              bHideName: A,
              bLink: h = !0,
            } = x,
            [et] = (0, f.KT)(g),
            N = (0, f.KM)(g),
            P = G.useMemo(() => w.b.InitFromAccountID(g), [g]),
            ct = `${D.TS.COMMUNITY_BASE_URL}profiles/${P.ConvertTo64BitString()}`,
            Y = h ? "a" : "span";
          return (0, e.jsx)(e.Fragment, {
            children: et
              ? (0, e.jsxs)(Y, {
                  href: h ? ct : void 0,
                  children: [
                    (0, e.jsx)("img", {
                      className: L.SmallAvatar,
                      src: et.avatar_url,
                      "data-miniprofile": "s" + P.ConvertTo64BitString(),
                    }),
                    !A &&
                      (0, e.jsx)("span", {
                        children: N
                          ? `${N} (${et.persona_name})`
                          : et.persona_name,
                      }),
                  ],
                })
              : (0, e.jsx)(e.Fragment, {
                  children: !s && (0, e.jsx)("span", { children: g }),
                }),
          });
        }
      },
      9519: (K, mt, i) => {
        "use strict";
        i.d(mt, { q: () => f });
        var e = i(90626),
          G = i(30096);
        const w = 2e4;
        function f(L) {
          const C = (0, e.useRef)(!1),
            D = (0, e.useRef)(null),
            gt = (0, e.useCallback)(() => {
              D.current = setTimeout(() => {
                L.current &&
                  !L.current.paused &&
                  (L.current.pause(), (C.current = !0));
              }, w);
            }, [L]),
            x = (0, e.useCallback)(() => {
              D.current && (clearTimeout(D.current), (D.current = null)),
                L.current && C.current && (L.current.play(), (C.current = !1));
            }, [L]);
          (0, G.l6)(window, "blur", gt), (0, G.l6)(window, "focus", x);
        }
      },
      82110: (K, mt, i) => {
        "use strict";
        i.r(mt), i.d(mt, { YearInReviewRoutes: () => gi, default: () => Io });
        var e = i(7850),
          G = i(72604),
          w = i(72609),
          f = i(90626),
          L = i(71742);
        const C = f.createContext(void 0);
        function D() {
          const o = f.useContext(C);
          return (
            (0, L.wT)(
              o,
              "Cannot use YIR page data outside of Steam Replay page!",
            ),
            o
          );
        }
        var gt = i(27386),
          x = i(80613),
          g = i.n(x),
          s = i(75245),
          A = i(35038);
        const h = 0,
          et = 1,
          N = 2,
          P = 3,
          ct = 4,
          Y = 0,
          Q = 1,
          ft = 2,
          xt = 3,
          _ = 4,
          ht = 5,
          dt = 6,
          ue = 7,
          at = 8,
          k = 9,
          Z = 10,
          it = 11;
        function nt(o) {
          return "unknown ESeason ( " + o + " )";
        }
        function jt(o) {
          return "unknown EUserActionEventType ( " + o + " )";
        }
        function Nt(o) {
          return "unknown EYearInReviewPrivacyState ( " + o + " )";
        }
        function St(o) {
          return "unknown EYearInReviewAccessSource ( " + o + " )";
        }
        class st extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              st.prototype.total_playtime_seconds || s.Sg(st.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              st.sm_m ||
                (st.sm_m = {
                  proto: st,
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
              st.sm_m
            );
          }
          static MBF() {
            return st.sm_mbf || (st.sm_mbf = s.w0(st.M())), st.sm_mbf;
          }
          toObject(t = !1) {
            return st.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(st.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(st.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new st();
            return st.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(st.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return st.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(st.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              st.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStats";
          }
        }
        class Ot extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ot.prototype.appid || s.Sg(Ot.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ot.sm_m ||
                (Ot.sm_m = {
                  proto: Ot,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
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
          static toObject(t, r) {
            return s.BT(Ot.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Ot.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Ot();
            return Ot.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Ot.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Ot.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreakGame";
          }
        }
        class lt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              lt.prototype.longest_consecutive_days || s.Sg(lt.M()),
              x.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              lt.sm_m ||
                (lt.sm_m = {
                  proto: lt,
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
                    streak_games: { n: 3, c: Ot, r: !0, q: !0 },
                  },
                }),
              lt.sm_m
            );
          }
          static MBF() {
            return lt.sm_mbf || (lt.sm_mbf = s.w0(lt.M())), lt.sm_mbf;
          }
          toObject(t = !1) {
            return lt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(lt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(lt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new lt();
            return lt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(lt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return lt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(lt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              lt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeStreak";
          }
        }
        class Et extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Et.prototype.overall_rank || s.Sg(Et.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Et.sm_m ||
                (Et.sm_m = {
                  proto: Et,
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
              Et.sm_m
            );
          }
          static MBF() {
            return Et.sm_mbf || (Et.sm_mbf = s.w0(Et.M())), Et.sm_mbf;
          }
          toObject(t = !1) {
            return Et.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(Et.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Et.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Et();
            return Et.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Et.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Et.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Et.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Et.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeRanks";
          }
        }
        class At extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              At.prototype.appid || s.Sg(At.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
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
                    stats: { n: 2, c: st },
                    playtime_streak: { n: 3, c: lt },
                    playtime_ranks: { n: 4, c: Et },
                    rtime_first_played: {
                      n: 5,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    relative_game_stats: { n: 6, c: st },
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
          static toObject(t, r) {
            return s.BT(At.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(At.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new At();
            return At.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(At.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return At.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(At.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              At.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGamePlaytimeStats";
          }
        }
        class b extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              b.prototype.appid || s.Sg(b.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              b.sm_m ||
                (b.sm_m = {
                  proto: b,
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
              b.sm_m
            );
          }
          static MBF() {
            return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
          }
          toObject(t = !1) {
            return b.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(b.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(b.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new b();
            return b.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(b.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return b.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(b.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              b.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameSummary";
          }
        }
        class V extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              V.prototype.appid || s.Sg(V.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              V.sm_m ||
                (V.sm_m = {
                  proto: V,
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
              V.sm_m
            );
          }
          static MBF() {
            return V.sm_mbf || (V.sm_mbf = s.w0(V.M())), V.sm_mbf;
          }
          toObject(t = !1) {
            return V.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(V.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(V.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new V();
            return V.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(V.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return V.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(V.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              V.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSimpleGameSummary";
          }
        }
        class tt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              tt.prototype.appid || s.Sg(tt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              tt.sm_m ||
                (tt.sm_m = {
                  proto: tt,
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
              tt.sm_m
            );
          }
          static MBF() {
            return tt.sm_mbf || (tt.sm_mbf = s.w0(tt.M())), tt.sm_mbf;
          }
          toObject(t = !1) {
            return tt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(tt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(tt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new tt();
            return tt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(tt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(tt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRank";
          }
        }
        class q extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              q.prototype.category || s.Sg(q.M()),
              x.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              q.sm_m ||
                (q.sm_m = {
                  proto: q,
                  fields: {
                    category: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                    rankings: { n: 2, c: tt, r: !0, q: !0 },
                  },
                }),
              q.sm_m
            );
          }
          static MBF() {
            return q.sm_mbf || (q.sm_mbf = s.w0(q.M())), q.sm_mbf;
          }
          toObject(t = !1) {
            return q.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(q.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(q.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new q();
            return q.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(q.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return q.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(q.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              q.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CRankingCategory";
          }
        }
        class Tt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Tt.prototype.overall_ranking || s.Sg(Tt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Tt.sm_m ||
                (Tt.sm_m = {
                  proto: Tt,
                  fields: {
                    overall_ranking: { n: 1, c: q },
                    vr_ranking: { n: 2, c: q },
                    deck_ranking: { n: 3, c: q },
                    controller_ranking: { n: 4, c: q },
                    linux_ranking: { n: 5, c: q },
                    mac_ranking: { n: 6, c: q },
                    windows_ranking: { n: 7, c: q },
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
          static toObject(t, r) {
            return s.BT(Tt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Tt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Tt();
            return Tt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Tt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Tt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Tt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Tt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRankings";
          }
        }
        class vt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              vt.prototype.total_achievements || s.Sg(vt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              vt.sm_m ||
                (vt.sm_m = {
                  proto: vt,
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
              vt.sm_m
            );
          }
          static MBF() {
            return vt.sm_mbf || (vt.sm_mbf = s.w0(vt.M())), vt.sm_mbf;
          }
          toObject(t = !1) {
            return vt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(vt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(vt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new vt();
            return vt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(vt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return vt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(vt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              vt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeSummaryStats";
          }
        }
        class ot extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ot.prototype.stats || s.Sg(ot.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ot.sm_m ||
                (ot.sm_m = {
                  proto: ot,
                  fields: { stats: { n: 1, c: ut, r: !0, q: !0 } },
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
          static toObject(t, r) {
            return s.BT(ot.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ot.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ot();
            return ot.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ot.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ot.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ot.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ot.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats";
          }
        }
        class ut extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ut.prototype.tag_id || s.Sg(ut.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ut.sm_m ||
                (ut.sm_m = {
                  proto: ut,
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
              ut.sm_m
            );
          }
          static MBF() {
            return ut.sm_mbf || (ut.sm_mbf = s.w0(ut.M())), ut.sm_mbf;
          }
          toObject(t = !1) {
            return ut.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(ut.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ut.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ut();
            return ut.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ut.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ut.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserTagStats_Tag";
          }
        }
        class pt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pt.prototype.screenshots_shared || s.Sg(pt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pt.sm_m ||
                (pt.sm_m = {
                  proto: pt,
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
              pt.sm_m
            );
          }
          static MBF() {
            return pt.sm_mbf || (pt.sm_mbf = s.w0(pt.M())), pt.sm_mbf;
          }
          toObject(t = !1) {
            return pt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(pt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(pt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new pt();
            return pt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(pt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return pt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(pt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              pt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPlaytimeByNumbers";
          }
        }
        class Mt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Mt.prototype.total_stats || s.Sg(Mt.M()),
              x.Message.initialize(this, t, 0, -1, [2, 5, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Mt.sm_m ||
                (Mt.sm_m = {
                  proto: Mt,
                  fields: {
                    total_stats: { n: 1, c: st },
                    games: { n: 2, c: At, r: !0, q: !0 },
                    playtime_streak: { n: 3, c: lt },
                    months: { n: 5, c: Ut, r: !0, q: !0 },
                    game_summary: { n: 6, c: b, r: !0, q: !0 },
                    demos_played: {
                      n: 7,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    game_rankings: { n: 8, c: Tt },
                    playtests_played: {
                      n: 9,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    summary_stats: { n: 10, c: vt },
                    substantial: {
                      n: 11,
                      d: !0,
                      br: s.qM.readBool,
                      bw: s.gp.writeBool,
                    },
                    tag_stats: { n: 12, c: ot },
                    by_numbers: { n: 13, c: pt },
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
          static toObject(t, r) {
            return s.BT(Mt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Mt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Mt();
            return Mt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Mt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Mt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Mt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Mt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserPlaytimeStats";
          }
        }
        class Ut extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ut.prototype.rtime_month || s.Sg(Ut.M()),
              x.Message.initialize(this, t, 0, -1, [4, 6], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ut.sm_m ||
                (Ut.sm_m = {
                  proto: Ut,
                  fields: {
                    rtime_month: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    stats: { n: 2, c: st },
                    appid: { n: 4, c: At, r: !0, q: !0 },
                    relative_monthly_stats: { n: 5, c: st },
                    game_summary: { n: 6, c: V, r: !0, q: !0 },
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
          static toObject(t, r) {
            return s.BT(Ut.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Ut.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Ut();
            return Ut.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Ut.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Ut.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Ut.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Ut.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CMonthlyPlaytimeStats";
          }
        }
        class It extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              It.prototype.account_id || s.Sg(It.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              It.sm_m ||
                (It.sm_m = {
                  proto: It,
                  fields: {
                    account_id: {
                      n: 1,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    playtime_stats: { n: 3, c: Mt },
                    privacy_state: {
                      n: 4,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
                  },
                }),
              It.sm_m
            );
          }
          static MBF() {
            return It.sm_mbf || (It.sm_mbf = s.w0(It.M())), It.sm_mbf;
          }
          toObject(t = !1) {
            return It.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(It.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(It.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new It();
            return It.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(It.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return It.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(It.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              It.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CUserYearInReviewStats";
          }
        }
        class zt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              zt.prototype.from_dbo || s.Sg(zt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
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
          static toObject(t, r) {
            return s.BT(zt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(zt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new zt();
            return zt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(zt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(zt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CYearInReviewPerformanceStats";
          }
        }
        class Wt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Wt.prototype.statid || s.Sg(Wt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Wt.sm_m ||
                (Wt.sm_m = {
                  proto: Wt,
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
              Wt.sm_m
            );
          }
          static MBF() {
            return Wt.sm_mbf || (Wt.sm_mbf = s.w0(Wt.M())), Wt.sm_mbf;
          }
          toObject(t = !1) {
            return Wt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(Wt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Wt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Wt();
            return Wt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Wt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Wt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CAchievementDetails";
          }
        }
        class $t extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              $t.prototype.appid || s.Sg($t.M()),
              x.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              $t.sm_m ||
                ($t.sm_m = {
                  proto: $t,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    achievements: { n: 2, c: Wt, r: !0, q: !0 },
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
              $t.sm_m
            );
          }
          static MBF() {
            return $t.sm_mbf || ($t.sm_mbf = s.w0($t.M())), $t.sm_mbf;
          }
          toObject(t = !1) {
            return $t.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT($t.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq($t.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new $t();
            return $t.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj($t.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return $t.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0($t.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              $t.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameAchievements";
          }
        }
        class Xt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Xt.prototype.median_achievements || s.Sg(Xt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Xt.sm_m ||
                (Xt.sm_m = {
                  proto: Xt,
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
              Xt.sm_m
            );
          }
          static MBF() {
            return Xt.sm_mbf || (Xt.sm_mbf = s.w0(Xt.M())), Xt.sm_mbf;
          }
          toObject(t = !1) {
            return Xt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(Xt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Xt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Xt();
            return Xt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Xt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Xt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Xt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Xt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPercentiles";
          }
        }
        class Ft extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Ft.prototype.new_releases || s.Sg(Ft.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Ft.sm_m ||
                (Ft.sm_m = {
                  proto: Ft,
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
              Ft.sm_m
            );
          }
          static MBF() {
            return Ft.sm_mbf || (Ft.sm_mbf = s.w0(Ft.M())), Ft.sm_mbf;
          }
          toObject(t = !1) {
            return Ft.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(Ft.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Ft.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Ft();
            return Ft.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Ft.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Ft.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Ft.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Ft.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CGlobalPlaytimeDistribution";
          }
        }
        class Zt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Zt.prototype.games_played || s.Sg(Zt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Zt.sm_m ||
                (Zt.sm_m = {
                  proto: Zt,
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
              Zt.sm_m
            );
          }
          static MBF() {
            return Zt.sm_mbf || (Zt.sm_mbf = s.w0(Zt.M())), Zt.sm_mbf;
          }
          toObject(t = !1) {
            return Zt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(Zt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Zt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Zt();
            return Zt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Zt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Zt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Zt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Zt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CPreviousYIRSummaryData";
          }
        }
        class qt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              qt.prototype.steamid || s.Sg(qt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              qt.sm_m ||
                (qt.sm_m = {
                  proto: qt,
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
              qt.sm_m
            );
          }
          static MBF() {
            return qt.sm_mbf || (qt.sm_mbf = s.w0(qt.M())), qt.sm_mbf;
          }
          toObject(t = !1) {
            return qt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(qt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(qt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new qt();
            return qt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(qt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return qt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(qt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              qt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Request";
          }
        }
        class ne extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ne.prototype.stats || s.Sg(ne.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ne.sm_m ||
                (ne.sm_m = {
                  proto: ne,
                  fields: {
                    stats: { n: 1, c: It },
                    performance_stats: { n: 2, c: zt },
                    percentiles: { n: 3, c: Xt },
                    distribution: { n: 4, c: Ft },
                    previous_year_summary: { n: 5, c: Zt },
                  },
                }),
              ne.sm_m
            );
          }
          static MBF() {
            return ne.sm_mbf || (ne.sm_mbf = s.w0(ne.M())), ne.sm_mbf;
          }
          toObject(t = !1) {
            return ne.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(ne.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ne.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ne();
            return ne.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ne.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ne.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ne.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ne.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReview_Response";
          }
        }
        class re extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              re.prototype.steamid || s.Sg(re.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
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
                    privacy_state: {
                      n: 3,
                      br: s.qM.readEnum,
                      bw: s.gp.writeEnum,
                    },
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
          static toObject(t, r) {
            return s.BT(re.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(re.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new re();
            return re.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(re.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return re.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(re.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              re.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Request";
          }
        }
        class se extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              se.prototype.privacy_state || s.Sg(se.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
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
          static toObject(t, r) {
            return s.BT(se.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(se.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new se();
            return se.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(se.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return se.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(se.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              se.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_SetUserSharingPermissions_Response";
          }
        }
        class ae extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ae.prototype.steamid || s.Sg(ae.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ae.sm_m ||
                (ae.sm_m = {
                  proto: ae,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
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
          static toObject(t, r) {
            return s.BT(ae.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ae.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ae();
            return ae.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ae.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ae.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ae.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ae.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Request";
          }
        }
        class oe extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              oe.prototype.privacy_state || s.Sg(oe.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              oe.sm_m ||
                (oe.sm_m = {
                  proto: oe,
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
              oe.sm_m
            );
          }
          static MBF() {
            return oe.sm_mbf || (oe.sm_mbf = s.w0(oe.M())), oe.sm_mbf;
          }
          toObject(t = !1) {
            return oe.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(oe.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(oe.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new oe();
            return oe.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(oe.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return oe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(oe.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              oe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserSharingPermissions_Response";
          }
        }
        class le extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              le.prototype.steamid || s.Sg(le.M()),
              x.Message.initialize(this, t, 0, -1, [3], null);
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
              le.sm_m
            );
          }
          static MBF() {
            return le.sm_mbf || (le.sm_mbf = s.w0(le.M())), le.sm_mbf;
          }
          toObject(t = !1) {
            return le.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(le.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(le.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new le();
            return le.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(le.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return le.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(le.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              le.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Request";
          }
        }
        class ce extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ce.prototype.game_achievements || s.Sg(ce.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ce.sm_m ||
                (ce.sm_m = {
                  proto: ce,
                  fields: {
                    game_achievements: { n: 1, c: $t, r: !0, q: !0 },
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
              ce.sm_m
            );
          }
          static MBF() {
            return ce.sm_mbf || (ce.sm_mbf = s.w0(ce.M())), ce.sm_mbf;
          }
          toObject(t = !1) {
            return ce.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(ce.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ce.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ce();
            return ce.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ce.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ce.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ce.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ce.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearAchievements_Response";
          }
        }
        class ie extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ie.prototype.steamid || s.Sg(ie.M()),
              x.Message.initialize(this, t, 0, -1, [3], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ie.sm_m ||
                (ie.sm_m = {
                  proto: ie,
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
              ie.sm_m
            );
          }
          static MBF() {
            return ie.sm_mbf || (ie.sm_mbf = s.w0(ie.M())), ie.sm_mbf;
          }
          toObject(t = !1) {
            return ie.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(ie.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ie.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ie();
            return ie.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ie.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ie.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ie.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ie.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Request";
          }
        }
        class I extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              I.prototype.apps || s.Sg(I.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              I.sm_m ||
                (I.sm_m = {
                  proto: I,
                  fields: { apps: { n: 1, c: F, r: !0, q: !0 } },
                }),
              I.sm_m
            );
          }
          static MBF() {
            return I.sm_mbf || (I.sm_mbf = s.w0(I.M())), I.sm_mbf;
          }
          toObject(t = !1) {
            return I.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(I.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(I.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new I();
            return I.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(I.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return I.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(I.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              I.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response";
          }
        }
        class S extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              S.prototype.image_url || s.Sg(S.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              S.sm_m ||
                (S.sm_m = {
                  proto: S,
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
              S.sm_m
            );
          }
          static MBF() {
            return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
          }
          toObject(t = !1) {
            return S.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(S.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(S.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new S();
            return S.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(S.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return S.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(S.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              S.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_Screenshot";
          }
        }
        class F extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              F.prototype.appid || s.Sg(F.M()),
              x.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              F.sm_m ||
                (F.sm_m = {
                  proto: F,
                  fields: {
                    appid: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                    screenshots: { n: 2, c: S, r: !0, q: !0 },
                  },
                }),
              F.sm_m
            );
          }
          static MBF() {
            return F.sm_mbf || (F.sm_mbf = s.w0(F.M())), F.sm_mbf;
          }
          toObject(t = !1) {
            return F.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(F.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(F.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new F();
            return F.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(F.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return F.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(F.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              F.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearScreenshots_Response_ScreenshotsByApp";
          }
        }
        class H extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              H.prototype.steamid || s.Sg(H.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              H.sm_m ||
                (H.sm_m = {
                  proto: H,
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
              H.sm_m
            );
          }
          static MBF() {
            return H.sm_mbf || (H.sm_mbf = s.w0(H.M())), H.sm_mbf;
          }
          toObject(t = !1) {
            return H.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(H.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(H.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new H();
            return H.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(H.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return H.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(H.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              H.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Request";
          }
        }
        class Bt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Bt.prototype.jsondata || s.Sg(Bt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Bt.sm_m ||
                (Bt.sm_m = {
                  proto: Bt,
                  fields: {
                    jsondata: {
                      n: 1,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
                    },
                  },
                }),
              Bt.sm_m
            );
          }
          static MBF() {
            return Bt.sm_mbf || (Bt.sm_mbf = s.w0(Bt.M())), Bt.sm_mbf;
          }
          toObject(t = !1) {
            return Bt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(Bt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Bt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Bt();
            return Bt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Bt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Bt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserActionData_Response";
          }
        }
        class bt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              bt.prototype.steamid || s.Sg(bt.M()),
              x.Message.initialize(this, t, 0, -1, [2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              bt.sm_m ||
                (bt.sm_m = {
                  proto: bt,
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
              bt.sm_m
            );
          }
          static MBF() {
            return bt.sm_mbf || (bt.sm_mbf = s.w0(bt.M())), bt.sm_mbf;
          }
          toObject(t = !1) {
            return bt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(bt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(bt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new bt();
            return bt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(bt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return bt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(bt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              bt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Request";
          }
        }
        class wt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              wt.prototype.entries || s.Sg(wt.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              wt.sm_m ||
                (wt.sm_m = {
                  proto: wt,
                  fields: { entries: { n: 1, c: Yt, r: !0, q: !0 } },
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
          static toObject(t, r) {
            return s.BT(wt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(wt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new wt();
            return wt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(wt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return wt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(wt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              wt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response";
          }
        }
        class Yt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Yt.prototype.gid || s.Sg(Yt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
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
          static toObject(t, r) {
            return s.BT(Yt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Yt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Yt();
            return Yt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Yt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Yt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Yt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Yt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetMultipleUserActionData_Response_Entry";
          }
        }
        class Dt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              Dt.prototype.gid || s.Sg(Dt.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              Dt.sm_m ||
                (Dt.sm_m = {
                  proto: Dt,
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
              Dt.sm_m
            );
          }
          static MBF() {
            return Dt.sm_mbf || (Dt.sm_mbf = s.w0(Dt.M())), Dt.sm_mbf;
          }
          toObject(t = !1) {
            return Dt.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(Dt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(Dt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new Dt();
            return Dt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(Dt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return Dt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(Dt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              Dt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Request";
          }
        }
        class kt extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              kt.prototype.entries || s.Sg(kt.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              kt.sm_m ||
                (kt.sm_m = {
                  proto: kt,
                  fields: {
                    entries: { n: 1, c: te, r: !0, q: !0 },
                    last_account_index: {
                      n: 2,
                      br: s.qM.readUint32,
                      bw: s.gp.writeUint32,
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
          static toObject(t, r) {
            return s.BT(kt.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(kt.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new kt();
            return kt.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(kt.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return kt.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(kt.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              kt.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response";
          }
        }
        class te extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              te.prototype.gid || s.Sg(te.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              te.sm_m ||
                (te.sm_m = {
                  proto: te,
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
              te.sm_m
            );
          }
          static MBF() {
            return te.sm_mbf || (te.sm_mbf = s.w0(te.M())), te.sm_mbf;
          }
          toObject(t = !1) {
            return te.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(te.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(te.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new te();
            return te.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(te.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return te.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(te.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              te.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetAllUserActionDataForType_Response_Entry";
          }
        }
        class xe extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              xe.prototype.steamid || s.Sg(xe.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
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
              xe.sm_m
            );
          }
          static MBF() {
            return xe.sm_mbf || (xe.sm_mbf = s.w0(xe.M())), xe.sm_mbf;
          }
          toObject(t = !1) {
            return xe.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(xe.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(xe.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new xe();
            return xe.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(xe.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return xe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(xe.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              xe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Request";
          }
        }
        class ge extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ge.prototype.steamid || s.Sg(ge.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
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
              ge.sm_m
            );
          }
          static MBF() {
            return ge.sm_mbf || (ge.sm_mbf = s.w0(ge.M())), ge.sm_mbf;
          }
          toObject(t = !1) {
            return ge.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(ge.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ge.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ge();
            return ge.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ge.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ge.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ge.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ge.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CFriendSharedYearInView";
          }
        }
        class fe extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              fe.prototype.friend_shares || s.Sg(fe.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              fe.sm_m ||
                (fe.sm_m = {
                  proto: fe,
                  fields: {
                    friend_shares: { n: 1, c: ge, r: !0, q: !0 },
                    year: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
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
          static toObject(t, r) {
            return s.BT(fe.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(fe.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new fe();
            return fe.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(fe.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return fe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(fe.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              fe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetFriendsSharedYearInReview_Response";
          }
        }
        class he extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              he.prototype.steamid || s.Sg(he.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              he.sm_m ||
                (he.sm_m = {
                  proto: he,
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
              he.sm_m
            );
          }
          static MBF() {
            return he.sm_mbf || (he.sm_mbf = s.w0(he.M())), he.sm_mbf;
          }
          toObject(t = !1) {
            return he.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(he.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(he.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new he();
            return he.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(he.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return he.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(he.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              he.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Request";
          }
        }
        class ve extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ve.prototype.images || s.Sg(ve.M()),
              x.Message.initialize(this, t, 0, -1, [1], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ve.sm_m ||
                (ve.sm_m = {
                  proto: ve,
                  fields: { images: { n: 1, c: ye, r: !0, q: !0 } },
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
          static toObject(t, r) {
            return s.BT(ve.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ve.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ve();
            return ve.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ve.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ve.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ve.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ve.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response";
          }
        }
        class ye extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              ye.prototype.name || s.Sg(ye.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              ye.sm_m ||
                (ye.sm_m = {
                  proto: ye,
                  fields: {
                    name: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                    url_path: {
                      n: 2,
                      br: s.qM.readString,
                      bw: s.gp.writeString,
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
          static toObject(t, r) {
            return s.BT(ye.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(ye.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new ye();
            return ye.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(ye.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return ye.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(ye.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              ye.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetUserYearInReviewShareImage_Response_Image";
          }
        }
        class pe extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              pe.prototype.steamid || s.Sg(pe.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              pe.sm_m ||
                (pe.sm_m = {
                  proto: pe,
                  fields: {
                    steamid: {
                      n: 1,
                      br: s.qM.readFixed64String,
                      bw: s.gp.writeFixed64String,
                    },
                  },
                }),
              pe.sm_m
            );
          }
          static MBF() {
            return pe.sm_mbf || (pe.sm_mbf = s.w0(pe.M())), pe.sm_mbf;
          }
          toObject(t = !1) {
            return pe.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(pe.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(pe.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new pe();
            return pe.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(pe.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return pe.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(pe.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              pe.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Request";
          }
        }
        class de extends x.Message {
          static ImplementsStaticInterface() {}
          constructor(t = null) {
            super(),
              de.prototype.year || s.Sg(de.M()),
              x.Message.initialize(this, t, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              de.sm_m ||
                (de.sm_m = {
                  proto: de,
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
              de.sm_m
            );
          }
          static MBF() {
            return de.sm_mbf || (de.sm_mbf = s.w0(de.M())), de.sm_mbf;
          }
          toObject(t = !1) {
            return de.toObject(t, this);
          }
          static toObject(t, r) {
            return s.BT(de.M(), t, r);
          }
          static fromObject(t) {
            return s.Uq(de.M(), t);
          }
          static deserializeBinary(t) {
            let r = new (g().BinaryReader)(t),
              a = new de();
            return de.deserializeBinaryFromReader(a, r);
          }
          static deserializeBinaryFromReader(t, r) {
            return s.zj(de.MBF(), t, r);
          }
          serializeBinary() {
            var t = new (g().BinaryWriter)();
            return de.serializeBinaryToWriter(this, t), t.getResultBuffer();
          }
          static serializeBinaryToWriter(t, r) {
            s.i0(de.M(), t, r);
          }
          serializeBase64String() {
            var t = new (g().BinaryWriter)();
            return (
              de.serializeBinaryToWriter(this, t), t.getResultBase64String()
            );
          }
          getClassName() {
            return "CSaleFeature_GetYIRCurrentMonthlySummary_Response";
          }
        }
        var Ge;
        ((o) => {
          function t(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetUserYearInReview#1",
              (0, A.I8)(qt, W, U),
              ne,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearInReview = t;
          function r(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetUserSharingPermissions#1",
              (0, A.I8)(ae, W, U),
              oe,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.GetUserSharingPermissions = r;
          function a(O, W, U) {
            return O.SendMsg(
              "SaleFeature.SetUserSharingPermissions#1",
              (0, A.I8)(re, W, U),
              se,
              { ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.SetUserSharingPermissions = a;
          function l(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetUserYearAchievements#1",
              (0, A.I8)(le, W, U),
              ce,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearAchievements = l;
          function c(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetUserYearScreenshots#1",
              (0, A.I8)(ie, W, U),
              I,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearScreenshots = c;
          function d(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetUserActionData#1",
              (0, A.I8)(H, W, U),
              Bt,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          o.GetUserActionData = d;
          function m(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetMultipleUserActionData#1",
              (0, A.I8)(bt, W, U),
              wt,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          o.GetMultipleUserActionData = m;
          function u(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetAllUserActionDataForType#1",
              (0, A.I8)(Dt, W, U),
              kt,
              { bConstMethod: !0, ePrivilege: 4 },
            );
          }
          o.GetAllUserActionDataForType = u;
          function y(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetFriendsSharedYearInReview#1",
              (0, A.I8)(xe, W, U),
              fe,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.GetFriendsSharedYearInReview = y;
          function B(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetUserYearInReviewShareImage#1",
              (0, A.I8)(he, W, U),
              ve,
              { bConstMethod: !0, ePrivilege: 2, eWebAPIKeyRequirement: 1 },
            );
          }
          o.GetUserYearInReviewShareImage = B;
          function E(O, W, U) {
            return O.SendMsg(
              "SaleFeature.GetYIRCurrentMonthlySummary#1",
              (0, A.I8)(pe, W, U),
              de,
              { bConstMethod: !0, ePrivilege: 1, eWebAPIKeyRequirement: 2 },
            );
          }
          o.GetYIRCurrentMonthlySummary = E;
        })(Ge || (Ge = {}));
        var $e = i(68312),
          ke = i(80902),
          sn = i(75233),
          an = i(51614),
          An = i(54806),
          wn = i(29395),
          Ln = i.n(wn),
          n = i(83764);
        const Nn = {
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
          Hn = [n.gGw, n.ZBT, n.RW$, n.G1H];
        function Kn(o, t) {
          const r = o.filter((u) => Hn.findIndex((y) => y == u.nTagId) == -1);
          let a = [],
            l = [],
            c = r.length,
            d = 0,
            m = 0;
          for (; d < r.length && c + m > t && m < t; ) {
            const u = r[d].nTagId;
            l.findIndex((y) => y == u) == -1 &&
              (a.push({
                nTagId: u,
                nWeight: r[d].nWeight,
                nPreSelectionWeight: r[d].nPreSelectionWeight,
              }),
              Nn[u] &&
                Nn[u].forEach((y) => {
                  l.push(y);
                }),
              m++),
              d++,
              c--;
          }
          for (; d < r.length && m < t; )
            a.push({
              nTagId: r[d].nTagId,
              nWeight: r[d].nWeight,
              nPreSelectionWeight: r[d].nPreSelectionWeight,
            }),
              d++,
              m++;
          return a;
        }
        var pn = i(13854);
        function on() {
          return w.iA.country_code.toLowerCase() === "cn";
        }
        function Gn(o, t, r) {
          const { rgRankings: a, nTotalResultCount: l } = En(o, t),
            c = new Set(a.map((m) => m.appid).slice(0, r));
          return {
            rgResults: o
              .GetRawStats()
              .playtime_stats.games.filter((m) => c.has(m.appid))
              .sort((m, u) => {
                const y = `${t}_rank`,
                  B = m.playtime_ranks[y] ?? 0,
                  E = u.playtime_ranks[y] ?? 0;
                return B - E;
              }),
            nTotalResultCount: l,
          };
        }
        function zn(o, t, r, a) {
          const { rgRankings: l, nTotalResultCount: c } = En(o, t, r),
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
              const u = o
                .GetRawStats()
                .playtime_stats.games.findIndex((y) => y.appid == m.appid);
              if (u >= 0) {
                const y = Qn(t, a, o.GetRawStats().playtime_stats.games[u]);
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
        function En(o, t, r) {
          if (t == "demo" || t == "playtest") {
            const c =
              t == "demo" ? o.GetDemoByPlaytime() : o.GetPlaytestByPlaytime();
            return {
              nTotalResultCount: c.length,
              rgRankings: c
                .slice(0, r)
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
            rgRankings: l?.slice(0, r) || [],
          };
        }
        function Qn(o, t, r) {
          const a = r.stats.total_playtime_percentagex100,
            l = `${o}_playtime_percentagex100`,
            c = r.relative_game_stats[l] ?? 0;
          return (0, pn.OQ)((c * a) / t, 0, 1e4);
        }
        function Vn(o, t) {
          const r = `${t === "overall" ? "total" : t}_sessions`;
          return o.stats[r] || 0;
        }
        function ln(o, t) {
          let r = () => !0;
          if (!o.playtime_stats?.game_summary) return [];
          switch (t) {
            case "overall":
              r = (a) => !a.demo && !a.playtest;
              break;
            case "vr":
              r = (a) => !a.demo && !a.playtest && a.played_vr;
              break;
            case "deck":
              r = (a) => !a.demo && !a.playtest && a.played_deck;
              break;
            case "controller":
              r = (a) => !a.demo && !a.playtest && a.played_controller;
              break;
            case "linux":
              r = (a) => !a.demo && !a.playtest && a.played_linux;
              break;
            case "mac":
              r = (a) => !a.demo && !a.playtest && a.played_mac;
              break;
            case "windows":
              r = (a) => !a.demo && !a.playtest && a.played_windows;
              break;
            case "demo":
              r = (a) => !!a.demo;
              break;
            case "playtest":
              r = (a) => !!a.playtest;
              break;
          }
          return o.playtime_stats.game_summary.filter(r);
        }
        function M(o, t) {
          if (t != "demo" && t != "playtest") {
            const r = `${t === "overall" ? "total" : t}_sessions`,
              a = `${t === "overall" ? "total" : t}_playtime_percentagex100`;
            return {
              nTotalGames: ln(o, t).length || 0,
              nTotalSessions: o.playtime_stats.total_stats[r] || 0,
              nTotalPercentage: o.playtime_stats.total_stats[a] || 0,
            };
          } else {
            const r = ln(o, t);
            return {
              nTotalGames: r.length,
              nTotalSessions: r
                .map((a) => a.total_sessions)
                .reduce((a, l) => (a ?? 0) + (l ?? 0), 0),
              nTotalPercentage: r
                .map((a) => a.total_playtime_percentagex100)
                .reduce((a, l) => (a ?? 0) + (l ?? 0), 0),
            };
          }
        }
        const T = "percentMonthOfOverall",
          z = "percentOtherGamesRelativeMonth";
        function rt(o, t, r, a) {
          const l = new Set(r),
            c = t
              .map((m, u) => {
                const y = new Date((m.rtime_month + 86400) * 1e3),
                  B = {},
                  E = {},
                  O = {},
                  W = {},
                  U = m.stats.total_playtime_percentagex100;
                let yt = 0,
                  Rt = 0;
                [...m.game_summary]
                  .sort(
                    (Pt, ee) =>
                      (ee?.total_playtime_percentagex100 ?? 0) -
                      (Pt?.total_playtime_percentagex100 ?? 0),
                  )
                  .filter((Pt) => a.has(Pt.appid))
                  .forEach((Pt, ee) => {
                    const { appid: Be } = Pt,
                      Se = Pt.total_playtime_percentagex100,
                      He = Pt.relative_playtime_percentagex100;
                    ee < 6 && typeof He == "number" && He > 100 && l.has(Be)
                      ? ((B[Be] = Se), (E[Be] = He), (yt += Se), (Rt += He))
                      : (O[Be] = He);
                    const Ke = a.get(Be).total_playtime_percentagex100 ?? 1;
                    W[Be] = (Se / Ke) * 1e4;
                  }),
                  (B[T] = U);
                const Ct = U - yt;
                B[z] = Ct;
                const be = 1e4 - Rt;
                return (
                  (E[z] = be),
                  {
                    date: y,
                    topPlayedPercentBreakdownPerMonth: B,
                    topPlayedRelativePercentBreakdownForMonth: E,
                    otherPlayedPercentBreakdownForMonth: O,
                    playPercentBreakdownForGame: W,
                  }
                );
              })
              .sort((m, u) => m.date.getTime() - u.date.getTime()),
            d = new Array();
          for (let m = 0; m < 12; ++m) {
            const u = c.findIndex(
              (y) =>
                y.date.getUTCMonth() === m && y.date.getUTCFullYear() === o,
            );
            u === -1
              ? d.push({
                  date: new Date(Date.UTC(o, m, 15)),
                  topPlayedPercentBreakdownPerMonth: {},
                  topPlayedRelativePercentBreakdownForMonth: {},
                  otherPlayedPercentBreakdownForMonth: {},
                  playPercentBreakdownForGame: {},
                })
              : d.push(c[u]);
          }
          return d;
        }
        var J = i(76559),
          Ht = i(36174);
        const je = 5,
          Te = 8;
        function Le(o) {
          o.game_summary?.length &&
            (0, L.wT)(
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
        function Bn(o) {
          return (
            (0, L.wT)(
              typeof o.account_id == "number" &&
                typeof o.year == "number" &&
                typeof o.privacy_state == "number" &&
                o.playtime_stats,
              "YIR stats missing expected fields!",
            ),
            o.playtime_stats && Le(o.playtime_stats),
            o
          );
        }
        function Fn(o) {
          if (typeof o?.new_releases == "number")
            return (
              (0, L.wT)(
                typeof o.recent_releases == "number" &&
                  typeof o.classic_releases == "number" &&
                  typeof o.recent_cutoff_year == "number",
                "YIR global playtime distribution missing expected fields!",
              ),
              o
            );
        }
        function kn(o) {
          if (typeof o?.games_played == "number")
            return (
              (0, L.wT)(
                typeof o.unlocked_achievements == "number" &&
                  typeof o.longest_streak == "number",
                "YIR previous year summary missing expected fields!",
              ),
              o
            );
        }
        class Zn {
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
            return this.m_steamid.GetAccountID();
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
            const r = this.m_rgMonthChartData.map((l) => ({
                date: l.date,
                percent: l.playPercentBreakdownForGame[t],
              })),
              a = this.m_rgTopGameMonthsChartIdsAndRanks.find(
                (l) => l.appid === t,
              )?.rank;
            return { gameChartData: r, rank: a };
          }
          GetUserAggregateTagData() {
            return this.m_rgAggregateTagData;
          }
          constructor(t, r, a, l) {
            const c = Bn(t);
            if (
              ((this.m_allStats = c),
              (this.m_steamid = J.b.InitFromAccountID(c.account_id)),
              (this.m_globalPercentiles = r ?? void 0),
              (this.m_globalGameplayDistribution = Fn(a)),
              (this.m_previousYearSummary = kn(l)),
              this.BHasPlaytimeData() &&
                c.playtime_stats.total_stats.total_sessions > 0)
            ) {
              c.playtime_stats.game_summary.forEach((u) => {
                (0, L.wT)(
                  !this.m_mapGameSummary.has(u.appid),
                  `Found at least two record of appid ${u.appid} in stats.playtime_stats.game_summary`,
                ),
                  this.m_mapGameSummary.set(u.appid, u);
              }),
                c.playtime_stats.games.forEach((u) => {
                  (0, L.wT)(
                    !this.m_mapGameStats.has(u.appid),
                    `Found at least two record of appid ${u.appid} in stats.playtime_stats.games`,
                  ),
                    this.m_mapGameStats.set(u.appid, u);
                });
              const { rgResults: d } = Gn(this, "overall", Te),
                m = d.map((u) => u.appid);
              (this.m_rgTopGameMonthsChartIdsAndRanks = m.map((u, y) => ({
                appid: u,
                rank: y,
              }))),
                (this.m_rgTopGamesShown = d.slice(0, je)),
                (this.m_rgTopGameShownAppIDs = this.m_rgTopGamesShown.map(
                  (u) => u.appid,
                )),
                (this.m_rgMonthChartData = rt(
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
              let m = c.playtime_stats.tag_stats.stats.map((u) => ({
                nTagId: u.tag_id,
                nWeight: parseFloat(u.tag_weight.toString()),
                nPreSelectionWeight: parseFloat(
                  u.tag_weight_pre_selection
                    ? u.tag_weight_pre_selection.toString()
                    : "0.0",
                ),
              }));
              this.m_rgAggregateTagData = Kn(m, 6);
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
            let r = this.m_allStats.playtime_stats?.game_summary || [];
            if (t.length == 0) return [r.length];
            let a = Date.UTC(this.GetYear(), 11, 15) / 1e3,
              l = Array(t.length + 1).fill(0);
            for (let c of r) {
              let d = c.rtime_release_date || a;
              if (d >= a) {
                l[0] += c.total_playtime_percentagex100;
                continue;
              }
              let m = (a - d) / Ht.Kp.PerYear,
                u = t.findIndex((y) => m < y);
              u >= 0
                ? (l[u] += c.total_playtime_percentagex100)
                : (l[l.length - 1] += c.total_playtime_percentagex100);
            }
            return l;
          }
        }
        const Jn = null,
          $n = "0px 0px 100% 0px";
        function Pn(o, t) {
          const {
            stats: r,
            percentiles: a,
            distribution: l,
            previous_year_summary: c,
          } = t;
          return {
            eResult: o,
            privacy_state: r?.privacy_state,
            stats: r,
            percentiles: a,
            distribution: l,
            previous_year_summary: c,
          };
        }
        function xn(o, t) {
          return ["YIR", "Get", o, t];
        }
        function Xn(o, t, r) {
          return {
            queryKey: xn(t, r),
            queryFn: async () => {
              const a = await Ge.GetUserYearInReview(o, {
                steamid: t,
                year: r,
                fetch_previous_year_summary: !0,
              });
              return Pn(a.GetEResult(), a.Body().toObject());
            },
            staleTime: 1 / 0,
          };
        }
        function pr(o, t) {
          return (0, ke.I)(Xn((0, $e.KV)(), o, t));
        }
        function fi(o, t) {
          const { data: r, isLoading: a } = pr(o, t),
            {
              eResult: l,
              stats: c,
              percentiles: d,
              distribution: m,
              previous_year_summary: u,
            } = r ?? {};
          return {
            userYearInReview: f.useMemo(() => {
              if (!(l != G.R || !c)) return new Zn(c, d, m, u);
            }, [l, c, d, m, u]),
            isLoading: a,
          };
        }
        function Br(o, t) {
          return pr(o, t).data?.privacy_state;
        }
        function hi(o, t) {
          const r = (0, $e.KV)(),
            a = (0, sn.jE)();
          return (0, an.n)({
            mutationFn: async (l) => {
              const c = await Ge.SetUserSharingPermissions(r, {
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
              l == G.R &&
                c !== void 0 &&
                a.setQueryData(
                  xn(o, t),
                  (d) => d && { ...d, privacy_state: c },
                );
            },
          });
        }
        function vi(o, t, r) {
          return {
            steamid: t,
            nYear: r,
            achievements: new (Ln())((a) => yi(o, t, r, a), { cache: !1 }),
            screenshots: new (Ln())((a) => bi(o, t, r, a), { cache: !1 }),
          };
        }
        const xr = f.createContext(void 0);
        function qn() {
          const o = f.useContext(xr);
          return (
            (0, L.wT)(
              o,
              "Cannot use YIR data loaders outside of Steam Replay page!",
            ),
            o
          );
        }
        async function yi(o, t, r, a) {
          try {
            const l = await Ge.GetUserYearAchievements(o, {
              steamid: t,
              year: r,
              appids: [...a],
              total_only: !1,
            });
            if (l.GetEResult() == G.R) {
              const { game_achievements: c = [] } = l.Body().toObject(),
                d = c.reduce((m, u) => ((m[u.appid] = u), m), {});
              return a.map((m) => {
                const u = d[m];
                return {
                  ...u,
                  appid: m,
                  achievements: (u?.achievements ?? []).map((y) => ({
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
        function jr(o, t) {
          return {
            queryKey: ["YIR", "achievements", "apps", o.steamid, o.nYear, t],
            queryFn: () => o.achievements.load(t),
            staleTime: 1 / 0,
          };
        }
        function pi(o) {
          const t = qn();
          (0, An.E)({
            queries: o.GetTopGamesShownAppIDs().map((r) => jr(t, r)),
          });
        }
        function br(o) {
          const { data: t } = (0, ke.I)({ ...jr(qn(), o), enabled: !!o });
          return t;
        }
        function Bi(o, t, r) {
          return {
            queryKey: ["YIR", "achievements", "display", t, r],
            queryFn: async () => {
              try {
                const a = await gt.xtC.GetGameAchievements(o, {
                  appid: t,
                  language: r,
                });
                if (a.GetEResult() == G.R)
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
        function _n(o, t = !0) {
          const r = (0, $e.KV)(),
            { data: a } = (0, ke.I)({
              ...Bi(r, o, w.TS.LANGUAGE || "english"),
              enabled: t && !!o,
            });
          return a;
        }
        function xi(o) {
          const t = _n(o);
          return f.useMemo(() => {
            const r = new Map();
            for (const a of t ?? [])
              a.internal_name && r.set(a.internal_name, a);
            return r;
          }, [t]);
        }
        function ji(o) {
          return _n(o)?.length ?? 0;
        }
        async function bi(o, t, r, a) {
          const l = await Ge.GetUserYearScreenshots(o, {
            steamid: t,
            year: r,
            appids: [...a],
          });
          if (!l.BSuccess())
            throw `Load Screenshots failed: ${l.GetErrorMessage()}`;
          const { apps: c = [] } = l.Body().toObject(),
            d = c.reduce((m, u) => ((m[u.appid] = m), m), {});
          return a.map((m) => d[m]?.screenshots);
        }
        function Mi(o, t) {
          return {
            queryKey: ["YIR", "Screenshots", o.steamid, o.nYear, t],
            queryFn: async () => (await o.screenshots.load(t)) ?? null,
            staleTime: 1 / 0,
          };
        }
        function Ii(o) {
          const { data: t } = (0, ke.I)({ ...Mi(qn(), o), enabled: !!o });
          return t ?? void 0;
        }
        function Ti(o, t, r, a) {
          return {
            queryKey: ["YIR", "Friends", t, r, a],
            queryFn: async () => {
              const l = await Ge.GetFriendsSharedYearInReview(o, {
                steamid: t,
                year: r,
                return_private: a,
              });
              if (l.GetEResult() != G.R)
                throw "error friend sharing information " + l.GetEResult();
              const { friend_shares: c = [] } = l.Body().toObject();
              return c
                .filter((d) => !!d.steamid)
                .map(
                  ({
                    steamid: d,
                    privacy_state: m,
                    rt_privacy_updated: u,
                    privacy_override: y,
                  }) => ({
                    steamid: d,
                    privacy_state: m ?? 0,
                    rt_privacy_updated: u ?? 0,
                    privacy_override: !!y,
                  }),
                );
            },
            staleTime: 1 / 0,
          };
        }
        function Ai(o, t) {
          return (0, ke.I)(Ti((0, $e.KV)(), o, t, w.iA.is_support));
        }
        function wi(o, t, r, a) {
          return {
            queryKey: ["YIR", "ShareImages", t, r, a],
            queryFn: async () => {
              const l = await Ge.GetUserYearInReviewShareImage(o, {
                steamid: t,
                year: r,
                language: a,
              });
              if (l.GetEResult() != G.R)
                throw `Load social images failed: ${l.GetErrorMessage()}`;
              return l.Body().toObject().images ?? [];
            },
            staleTime: 1 / 0,
          };
        }
        function Li(o, t, r) {
          return (0, ke.I)(wi((0, $e.KV)(), o, t, r));
        }
        var mn = i(40358),
          Ni = i(5827);
        function Mr(o) {
          return o?.success === G.R || o?.success === G.sW;
        }
        function Xe(o) {
          const t = o ? { appid: o } : void 0,
            { data: r, isLoading: a } = (0, mn.J$)(t),
            { data: l, isLoading: c } = (0, mn.gy)(t);
          return {
            item: f.useMemo(
              () => (Mr(r) ? { info: r, assets: l ?? null } : void 0),
              [r, l],
            ),
            bLoading: a || c,
          };
        }
        function un(o, t = !1) {
          const r = (0, Ni.eG)(),
            a = (0, sn.jE)();
          return (0, ke.I)({
            queryKey: ["YIR", "storeitems", o, t],
            queryFn: async () => {
              const l = await Promise.all(
                  o.map(async (d) => {
                    const [m, u] = await Promise.allSettled([
                      a.fetchQuery((0, mn.us)(r, { appid: d })),
                      a.fetchQuery((0, mn.Th)(r, { appid: d })),
                      t && a.fetchQuery((0, mn.OE)(r, { appid: d })),
                    ]);
                    return m.status === "rejected" || !Mr(m.value)
                      ? null
                      : {
                          appid: d,
                          info: m.value,
                          assets: u.status === "fulfilled" ? u.value : null,
                        };
                  }),
                ),
                c = new Map();
              for (const d of l) d && c.set(d.appid, d);
              if (c.size === 0 && o.length > 0)
                throw new Error("Error loading store items!");
              return c;
            },
            staleTime: 0,
          });
        }
        var zi = i(46943),
          Ir = i(54407),
          tr = i(16412),
          Ne = i(25792),
          Tr = i(95695),
          we = i(36118),
          jn = i(85599),
          p = i(36707),
          j = i(22673),
          bn = i(59521),
          On = i(37901);
        const Kt = {};
        (Kt.arabic = () => i.e(49101).then(i.t.bind(i, 49101, 19))),
          (Kt.brazilian = () => i.e(78513).then(i.t.bind(i, 78513, 19))),
          (Kt.bulgarian = () => i.e(52986).then(i.t.bind(i, 52986, 19))),
          (Kt.czech = () => i.e(32820).then(i.t.bind(i, 32820, 19))),
          (Kt.danish = () => i.e(1864).then(i.t.bind(i, 1864, 19))),
          (Kt.dutch = () => i.e(58325).then(i.t.bind(i, 58325, 19))),
          (Kt.english = () => i.e(91651).then(i.t.bind(i, 91651, 19))),
          (Kt.finnish = () => i.e(24972).then(i.t.bind(i, 24972, 19))),
          (Kt.french = () => i.e(19065).then(i.t.bind(i, 19065, 19))),
          (Kt.german = () => i.e(54003).then(i.t.bind(i, 54003, 19))),
          (Kt.greek = () => i.e(93443).then(i.t.bind(i, 93443, 19))),
          (Kt.hungarian = () => i.e(79366).then(i.t.bind(i, 79366, 19))),
          (Kt.indonesian = () => i.e(35057).then(i.t.bind(i, 35057, 19))),
          (Kt.italian = () => i.e(82155).then(i.t.bind(i, 82155, 19))),
          (Kt.japanese = () => i.e(29318).then(i.t.bind(i, 29318, 19))),
          (Kt.koreana = () => i.e(50400).then(i.t.bind(i, 50400, 19))),
          (Kt.latam = () => i.e(15024).then(i.t.bind(i, 15024, 19))),
          (Kt.malay = () => i.e(50191).then(i.t.bind(i, 50191, 19))),
          (Kt.norwegian = () => i.e(323).then(i.t.bind(i, 323, 19))),
          (Kt.polish = () => i.e(17892).then(i.t.bind(i, 17892, 19))),
          (Kt.portuguese = () => i.e(93532).then(i.t.bind(i, 93532, 19))),
          (Kt.romanian = () => i.e(28702).then(i.t.bind(i, 28702, 19))),
          (Kt.russian = () => i.e(26586).then(i.t.bind(i, 26586, 19))),
          (Kt.sc_schinese = () => i.e(46848).then(i.t.bind(i, 46848, 19))),
          (Kt.schinese = () => i.e(81849).then(i.t.bind(i, 81849, 19))),
          (Kt.spanish = () => i.e(14571).then(i.t.bind(i, 14571, 19))),
          (Kt.swedish = () => i.e(79706).then(i.t.bind(i, 79706, 19))),
          (Kt.tchinese = () => i.e(2634).then(i.t.bind(i, 2634, 19))),
          (Kt.thai = () => i.e(22531).then(i.t.bind(i, 22531, 19))),
          (Kt.turkish = () => i.e(23043).then(i.t.bind(i, 23043, 19))),
          (Kt.ukrainian = () => i.e(99337).then(i.t.bind(i, 99337, 19))),
          (Kt.vietnamese = () => i.e(40182).then(i.t.bind(i, 40182, 19)));
        async function Ei(o) {
          if (Kt[o]) return Kt[o]();
        }
        const Ar = (0, On.l)(Ei),
          Gt = {};
        (Gt.arabic = () => i.e(72817).then(i.t.bind(i, 72817, 19))),
          (Gt.brazilian = () => i.e(66781).then(i.t.bind(i, 89162, 19))),
          (Gt.bulgarian = () => i.e(84230).then(i.t.bind(i, 84230, 19))),
          (Gt.czech = () => i.e(52920).then(i.t.bind(i, 52920, 19))),
          (Gt.danish = () => i.e(48524).then(i.t.bind(i, 48524, 19))),
          (Gt.dutch = () => i.e(48361).then(i.t.bind(i, 48361, 19))),
          (Gt.english = () => i.e(17615).then(i.t.bind(i, 17615, 19))),
          (Gt.finnish = () => i.e(56528).then(i.t.bind(i, 56528, 19))),
          (Gt.french = () => i.e(92997).then(i.t.bind(i, 92997, 19))),
          (Gt.german = () => i.e(4503).then(i.t.bind(i, 4503, 19))),
          (Gt.greek = () => i.e(37767).then(i.t.bind(i, 37767, 19))),
          (Gt.hungarian = () => i.e(14034).then(i.t.bind(i, 14034, 19))),
          (Gt.indonesian = () => i.e(19013).then(i.t.bind(i, 19013, 19))),
          (Gt.italian = () => i.e(32031).then(i.t.bind(i, 32031, 19))),
          (Gt.japanese = () => i.e(9490).then(i.t.bind(i, 9490, 19))),
          (Gt.koreana = () => i.e(34372).then(i.t.bind(i, 34372, 19))),
          (Gt.latam = () => i.e(76020).then(i.t.bind(i, 76020, 19))),
          (Gt.malay = () => i.e(79275).then(i.t.bind(i, 79275, 19))),
          (Gt.norwegian = () => i.e(42591).then(i.t.bind(i, 42591, 19))),
          (Gt.polish = () => i.e(17832).then(i.t.bind(i, 17832, 19))),
          (Gt.portuguese = () => i.e(53384).then(i.t.bind(i, 53384, 19))),
          (Gt.romanian = () => i.e(99586).then(i.t.bind(i, 99586, 19))),
          (Gt.russian = () => i.e(37766).then(i.t.bind(i, 37766, 19))),
          (Gt.sc_schinese = () => i.e(73900).then(i.t.bind(i, 73900, 19))),
          (Gt.schinese = () => i.e(30581).then(i.t.bind(i, 30581, 19))),
          (Gt.spanish = () => i.e(78079).then(i.t.bind(i, 78079, 19))),
          (Gt.swedish = () => i.e(94270).then(i.t.bind(i, 94270, 19))),
          (Gt.tchinese = () => i.e(14606).then(i.t.bind(i, 14606, 19))),
          (Gt.thai = () => i.e(735).then(i.t.bind(i, 735, 19))),
          (Gt.turkish = () => i.e(18975).then(i.t.bind(i, 18975, 19))),
          (Gt.ukrainian = () => i.e(47197).then(i.t.bind(i, 47197, 19))),
          (Gt.vietnamese = () => i.e(17042).then(i.t.bind(i, 17042, 19)));
        async function Pi(o) {
          if (Gt[o]) return Gt[o]();
        }
        const wr = (0, On.l)(Pi),
          Qt = {};
        (Qt.arabic = () => i.e(3569).then(i.t.bind(i, 3569, 19))),
          (Qt.brazilian = () => i.e(31997).then(i.t.bind(i, 31997, 19))),
          (Qt.bulgarian = () => i.e(43238).then(i.t.bind(i, 43238, 19))),
          (Qt.czech = () => i.e(8632).then(i.t.bind(i, 8632, 19))),
          (Qt.danish = () => i.e(57836).then(i.t.bind(i, 57836, 19))),
          (Qt.dutch = () => i.e(76073).then(i.t.bind(i, 76073, 19))),
          (Qt.english = () => i.e(18351).then(i.t.bind(i, 18351, 19))),
          (Qt.finnish = () => i.e(64560).then(i.t.bind(i, 64560, 19))),
          (Qt.french = () => i.e(64325).then(i.t.bind(i, 64325, 19))),
          (Qt.german = () => i.e(70199).then(i.t.bind(i, 70199, 19))),
          (Qt.greek = () => i.e(30631).then(i.t.bind(i, 30631, 19))),
          (Qt.hungarian = () => i.e(8370).then(i.t.bind(i, 8370, 19))),
          (Qt.indonesian = () => i.e(45893).then(i.t.bind(i, 45893, 19))),
          (Qt.italian = () => i.e(88607).then(i.t.bind(i, 88607, 19))),
          (Qt.japanese = () => i.e(95378).then(i.t.bind(i, 95378, 19))),
          (Qt.koreana = () => i.e(45636).then(i.t.bind(i, 45636, 19))),
          (Qt.latam = () => i.e(79380).then(i.t.bind(i, 79380, 19))),
          (Qt.malay = () => i.e(73579).then(i.t.bind(i, 73579, 19))),
          (Qt.norwegian = () => i.e(41343).then(i.t.bind(i, 41343, 19))),
          (Qt.polish = () => i.e(97160).then(i.t.bind(i, 97160, 19))),
          (Qt.portuguese = () => i.e(29064).then(i.t.bind(i, 29064, 19))),
          (Qt.romanian = () => i.e(68290).then(i.t.bind(i, 68290, 19))),
          (Qt.russian = () => i.e(80454).then(i.t.bind(i, 80454, 19))),
          (Qt.sc_schinese = () => i.e(96588).then(i.t.bind(i, 96588, 19))),
          (Qt.schinese = () => i.e(93813).then(i.t.bind(i, 93813, 19))),
          (Qt.spanish = () => i.e(7135).then(i.t.bind(i, 7135, 19))),
          (Qt.swedish = () => i.e(55646).then(i.t.bind(i, 55646, 19))),
          (Qt.tchinese = () => i.e(21230).then(i.t.bind(i, 21230, 19))),
          (Qt.thai = () => i.e(78015).then(i.t.bind(i, 78015, 19))),
          (Qt.turkish = () => i.e(1951).then(i.t.bind(i, 1951, 19))),
          (Qt.ukrainian = () => i.e(70781).then(i.t.bind(i, 70781, 19))),
          (Qt.vietnamese = () => i.e(33394).then(i.t.bind(i, 33394, 19)));
        async function Oi(o) {
          if (Qt[o]) return Qt[o]();
        }
        const Lr = (0, On.l)(Oi),
          Vt = {};
        (Vt.arabic = () => i.e(87621).then(i.t.bind(i, 87621, 19))),
          (Vt.brazilian = () => i.e(20537).then(i.t.bind(i, 20537, 19))),
          (Vt.bulgarian = () => i.e(52482).then(i.t.bind(i, 52482, 19))),
          (Vt.czech = () => i.e(81868).then(i.t.bind(i, 81868, 19))),
          (Vt.danish = () => i.e(16224).then(i.t.bind(i, 16224, 19))),
          (Vt.dutch = () => i.e(81629).then(i.t.bind(i, 81629, 19))),
          (Vt.english = () => i.e(63675).then(i.t.bind(i, 63675, 19))),
          (Vt.finnish = () => i.e(4628).then(i.t.bind(i, 4628, 19))),
          (Vt.french = () => i.e(85121).then(i.t.bind(i, 85121, 19))),
          (Vt.german = () => i.e(3931).then(i.t.bind(i, 3931, 19))),
          (Vt.greek = () => i.e(31531).then(i.t.bind(i, 31531, 19))),
          (Vt.hungarian = () => i.e(78302).then(i.t.bind(i, 78302, 19))),
          (Vt.indonesian = () => i.e(28921).then(i.t.bind(i, 28921, 19))),
          (Vt.italian = () => i.e(41283).then(i.t.bind(i, 41283, 19))),
          (Vt.japanese = () => i.e(25550).then(i.t.bind(i, 25550, 19))),
          (Vt.koreana = () => i.e(29352).then(i.t.bind(i, 29352, 19))),
          (Vt.latam = () => i.e(75624).then(i.t.bind(i, 75624, 19))),
          (Vt.malay = () => i.e(81271).then(i.t.bind(i, 81271, 19))),
          (Vt.norwegian = () => i.e(94491).then(i.t.bind(i, 94491, 19))),
          (Vt.polish = () => i.e(28268).then(i.t.bind(i, 28268, 19))),
          (Vt.portuguese = () => i.e(72660).then(i.t.bind(i, 72660, 19))),
          (Vt.romanian = () => i.e(38134).then(i.t.bind(i, 38134, 19))),
          (Vt.russian = () => i.e(32658).then(i.t.bind(i, 32658, 19))),
          (Vt.sc_schinese = () => i.e(92280).then(i.t.bind(i, 92280, 19))),
          (Vt.schinese = () => i.e(1617).then(i.t.bind(i, 1617, 19))),
          (Vt.spanish = () => i.e(77555).then(i.t.bind(i, 77555, 19))),
          (Vt.swedish = () => i.e(42930).then(i.t.bind(i, 42930, 19))),
          (Vt.tchinese = () => i.e(60610).then(i.t.bind(i, 60610, 19))),
          (Vt.thai = () => i.e(4939).then(i.t.bind(i, 4939, 19))),
          (Vt.turkish = () => i.e(21131).then(i.t.bind(i, 21131, 19))),
          (Vt.ukrainian = () => i.e(28049).then(i.t.bind(i, 28049, 19))),
          (Vt.vietnamese = () => i.e(38030).then(i.t.bind(i, 38030, 19)));
        async function Di(o) {
          if (Vt[o]) return Vt[o]();
        }
        const Nr = (0, On.l)(Di),
          Si = new Map([
            [2022, Ar],
            [2023, wr],
            [2024, Lr],
            [2025, Nr],
          ]);
        function Wi(o) {
          return Si.get(o);
        }
        function Ri() {
          const o = (0, bn.K)(j.c),
            t = (0, bn.K)(Ar),
            r = (0, bn.K)(wr),
            a = (0, bn.K)(Lr),
            l = (0, bn.K)(Nr);
          return o && t && r && a && l;
        }
        var qe = i(39905),
          We = i(3166),
          Ze = i(48156);
        const zr =
          i.p +
          "images/applications/store/defaultappimage.png?v=valveisgoodatcaching";
        var Qe = i(21721),
          Me = i(24642),
          $ = i(10738),
          me = i.n($),
          Er = i(20681),
          Ci = i(54357),
          Dn = i(16114);
        const _e = f.createContext({
          bIsUser: !1,
          persona_name: "",
          avatar_url: "",
          themeStyle: {},
        });
        function er() {
          return (0, f.useContext)(_e).bIsUser;
        }
        function _t() {
          return (0, f.useContext)(_e).themeStyle;
        }
        function nr(o) {
          const t = w.iA.logged_in,
            r = o?.content_descriptorids ?? [],
            a = er(),
            l = (0, sn.jE)(),
            { data: c } = (0, Er.mx)(),
            d = c ?? (0, Er.rN)(l),
            m =
              !!o &&
              (r.some((u) => d.setExcludedContentDescriptors.has(u)) ||
                (!!o.appid && d.mapIgnoredApps.has(o.appid)));
          return t ? !a && m : r.length > 0;
        }
        function Ui() {
          return (0, f.useContext)(_e).persona_name;
        }
        function Ie() {
          const { persona_name: o, bIsUser: t } = (0, f.useContext)(_e);
          return f.useCallback(
            (r, ...a) => (0, j.u)(j.c, r, t, o, ...a) ?? r,
            [t, o],
          );
        }
        function Yi() {
          const { persona_name: o, bIsUser: t } = (0, f.useContext)(_e);
          return f.useCallback(
            (r, a, ...l) => {
              const c = Wi(r);
              return c && (0, j.u)(c, a, t, o, ...l);
            },
            [t, o],
          );
        }
        function De(o) {
          return o < 100
            ? j.c.Localize("#YIR_Percent_Low", "1")
            : j.c.Localize("#YIR_Percent", Math.round(o / 100).toFixed(0));
        }
        function Pr() {
          return !0;
        }
        function Or() {
          const o = Pr(),
            t = (0, Ci.B)();
          return f.useCallback(
            (r) =>
              (0, Dn.TW)(r, {
                weekday: "short",
                year: o ? void 0 : "numeric",
                timeZone: t,
              }),
            [o, t],
          );
        }
        const rr = { index: void 0, appids: [] },
          Dr = f.createContext(rr),
          Sn = f.createContext(() => {});
        function Hi(o) {
          const [t, r] = f.useState(rr);
          return (0, e.jsx)(Sn.Provider, {
            value: r,
            children: (0, e.jsx)(Dr.Provider, {
              value: t,
              children: o.children,
            }),
          });
        }
        function Sr(o) {
          return typeof o.index == "number" && o.appids.length > o.index
            ? o.appids[o.index]
            : null;
        }
        function Ki() {
          const o = f.useContext(Dr);
          return { unAppID: Sr(o), length: o.appids.length, index: o.index };
        }
        function Wr() {
          const o = f.useContext(Sn);
          return f.useCallback((t, r) => o({ index: t, appids: r }), [o]);
        }
        function Rr(o, t) {
          const r = Wr();
          return f.useCallback(() => r(o, t), [r, o, t]);
        }
        function Cr(o) {
          const t = f.useContext(Sn);
          return f.useCallback(() => {
            t((r) => (o >= 0 && o < r.appids.length ? { ...r, index: o } : r));
          }, [t, o]);
        }
        function Gi() {
          const o = f.useContext(Sn);
          return f.useCallback(
            (t) => {
              o((r) => (Sr(r) == t ? rr : r));
            },
            [o],
          );
        }
        var Re = i(7253),
          v = i.n(Re),
          Qi = i(87762),
          Lt = i.n(Qi),
          Mn = i(81944);
        function ze(o) {
          const { className: t, children: r, strClassOnFirstVisible: a } = o,
            [l, c] = (0, f.useState)(!1);
          return (0, e.jsx)(Mn.J, {
            trigger: "once",
            onVisibilityChange: c,
            className: (0, p.A)(t, l ? a || "NowVisible" : void 0),
            children: r,
          });
        }
        var Ur = i(41032),
          Ce = i(19298);
        function Wn(o) {
          const {
              category: t,
              userYearInReview: r,
              strClassName: a,
              bgImageURL: l,
              title: c,
              subTitle: d,
              disclaimer: m,
              subTitleTokenIfMax: u,
            } = o,
            y = r.GetRawStats(),
            B = 5,
            {
              nTotalGames: E,
              nTotalSessions: O,
              nTotalPercentage: W,
            } = (0, f.useMemo)(() => M(y, t), [y, t]),
            { rgResults: U, nTotalResultCount: yt } = (0, f.useMemo)(
              () => zn(r, t, B, W),
              [r, t, W, B],
            ),
            Rt = (0, f.useMemo)(
              () => U.map((Se) => Se.parent_appid || Se.appid),
              [U],
            ),
            [Jt, Ct] = (0, f.useState)(
              U.length > 0 ? U[0].parent_appid || U[0].appid : 0,
            ),
            { isLoading: be, data: Pt } = un(Rt, t == "vr"),
            ee = Vi(U, t, be, Pt),
            Be =
              t === "overall" ||
              t === "controller" ||
              t == "demo" ||
              t == "playtest";
          return (0, e.jsxs)("div", {
            className: (0, p.A)(a, t, Lt().PlatformContentsCtn),
            children: [
              (0, e.jsx)("div", { className: Lt().SectionTitle, children: c }),
              !!l &&
                (0, e.jsx)("img", { src: l, className: Lt().BackgroundImage }),
              t === "vr" && Jt > 0 && (0, e.jsx)(Fi, { appid: Jt }),
              (0, e.jsxs)("div", {
                className: (0, p.A)(v().YearInReviewContent, Lt().StatsRow),
                children: [
                  (0, e.jsxs)("div", {
                    className: Lt().StatBlock,
                    children: [
                      (0, e.jsx)("div", {
                        className: Lt().BigNum,
                        children: (0, Me.D)(E),
                      }),
                      (0, e.jsx)("div", {
                        className: Lt().StatDescription,
                        children: j.c.LocalizePlural("#YIR_NewLine_Games", E),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: Lt().StatBlock,
                    children: [
                      (0, e.jsx)("div", {
                        className: Lt().BigNum,
                        children: (0, Me.D)(O),
                      }),
                      (0, e.jsx)("div", {
                        className: Lt().StatDescription,
                        children: j.c.LocalizePlural("#YIR_NewLine_Session", O),
                      }),
                    ],
                  }),
                  !Be &&
                    (0, e.jsx)(Kr, { percentVal: W, subToken: "#YIR_NewLine" }),
                ],
              }),
              !!d &&
                (0, e.jsx)("div", {
                  className: Lt().SectionSubTitle,
                  children: d,
                }),
              !d &&
                !!u &&
                yt > B &&
                ee > 0 &&
                (0, e.jsx)("div", {
                  className: Lt().SectionSubTitle,
                  children: j.c.Localize(u, ee),
                }),
              !!m &&
                (0, e.jsx)("div", { className: Lt().Disclaimer, children: m }),
              (0, e.jsx)(ze, {
                className: me().SteamDeckGameCapRow,
                children: (0, e.jsx)(Yr, {
                  rgGamePercentages: U,
                  category: t,
                  fnOnHoverApp: Ct,
                }),
              }),
            ],
          });
        }
        function Vi(o, t, r, a) {
          return (0, f.useMemo)(
            () =>
              r || !a
                ? 0
                : o.reduce((l, c) => {
                    const d = c.parent_appid || c.appid,
                      m = a.get(d)?.info.visible,
                      y = !(t == "demo" || t == "playtest") || c.parent_appid;
                    return l + (m && y ? 1 : 0);
                  }, 0),
            [o, r, a, t],
          );
        }
        function Fi(o) {
          const { appid: t } = o,
            { data: r } = (0, mn.j4)({ appid: t }),
            a = (0, Ur.$9)();
          if (!r) return null;
          const l = r.all_ages_screenshots ?? [],
            d = (
              a == "blocked"
                ? l
                : [...l, ...(r.mature_content_screenshots ?? [])].sort(
                    (u, y) => u.ordinal - y.ordinal,
                  )
            )[1];
          if (!d) return null;
          const m = a == "masked" && !l.includes(d);
          return (0, e.jsx)("img", {
            src: (0, Qe.bu)(d),
            className: (0, p.A)({ [Lt().GameImage]: !0, [Lt().BlurImage]: m }),
          });
        }
        function Yr(o) {
          const { rgGamePercentages: t, category: r, fnOnHoverApp: a } = o,
            l = t.map((d) => d.appid);
          let c;
          switch (r) {
            case "demo":
              c = Ze.uE.ue;
              break;
            case "playtest":
              c = Ze.uE.Vi;
              break;
          }
          return (0, e.jsx)(Ce.Z, {
            "flow-children": "grid",
            className: (0, p.A)(
              v().YearInReviewContent,
              Lt().CapRow,
              me().CapRow,
            ),
            children: t.map((d, m) =>
              (0, e.jsx)(
                ir,
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
                r + "_" + d.appid,
              ),
            ),
          });
        }
        function ir(o) {
          const {
              appid: t,
              strInfo: r,
              rgAppIDs: a,
              index: l,
              loading: c,
              fnOnMouseEvent: d,
              nParentAppID: m,
              eChildType: u,
            } = o,
            { item: y, bLoading: B } = Xe(u == null ? t : m),
            E = Rr(l, a);
          if (B) return null;
          if (!y || !y.info.visible)
            return m && (u == Ze.uE.ue || u == Ze.uE.Vi)
              ? (0, e.jsx)(ir, { ...o, nParentAppID: m, eChildType: Ze.uE.HT })
              : null;
          const O = (0, Qe.CB)(y.assets, "library_capsule");
          return (0, e.jsxs)("a", {
            className: me().CapsuleCtn,
            onClick: E,
            onMouseEnter: d,
            children: [
              O
                ? (0, e.jsxs)(e.Fragment, {
                    children: [
                      (0, e.jsxs)("div", {
                        className: me().SpecialFlags,
                        children: [
                          m &&
                            u == Ze.uE.ue &&
                            (0, e.jsx)("div", {
                              className: me().DemoPlayDetails,
                              children: j.c.Localize("#YIR_Played_Demo"),
                            }),
                          m &&
                            u == Ze.uE.Vi &&
                            (0, e.jsx)("div", {
                              className: me().PlaytestPlayDetails,
                              children: j.c.Localize("#YIR_Played_PlayTest"),
                            }),
                        ],
                      }),
                      (0, e.jsx)("img", {
                        loading: c,
                        src: O,
                        alt: y.info.name,
                      }),
                    ],
                  })
                : (0, e.jsx)(Hr, { item: y.info }),
              !!r &&
                (0, e.jsx)("div", { className: me().TimePlayed, children: r }),
            ],
          });
        }
        function Hr(o) {
          const { item: t } = o;
          return (0, e.jsxs)("div", {
            className: me().UnavailableGame,
            children: [
              (0, e.jsx)("img", { src: zr, alt: t.name || "" + t.appid }),
              (0, e.jsx)("div", {
                className: me().GameTitle,
                children: t.name,
              }),
            ],
          });
        }
        function Kr(o) {
          const { percentVal: t, subToken: r } = o,
            a = De(t),
            l = `${r}_Percent`;
          return (0, e.jsxs)("div", {
            className: Lt().StatBlock,
            children: [
              (0, e.jsx)("div", { className: Lt().BigNum, children: a }),
              (0, e.jsx)("div", {
                className: Lt().StatDescription,
                children: j.c.Localize(l),
              }),
            ],
          });
        }
        var Gr = i(47875),
          ki = i(6698),
          Zi = i(21418),
          gn = i(13824),
          sr = i(72865),
          tn = i(71421);
        function Ji(o) {
          const { userYearInReview: t, nYear: r } = o,
            a = _t(),
            l = (0, f.useMemo)(() => {
              const u = new Set();
              return (
                t.GetPlayTimeStats().game_summary.forEach((y) => {
                  !y.demo && !y.playtest
                    ? u.add(y.appid)
                    : y.parent_appid && u.add(y.parent_appid);
                }),
                Array.from(u)
              );
            }, [t]),
            { isLoading: c } = un(l),
            d = Ie(),
            m = [
              {
                name: j.c.Localize("#YIR_FirstTime_Tab_MonthlyGrid"),
                key: "firsttimebymonth",
                contents: (0, e.jsx)(Ne.tH, {
                  children: (0, e.jsx)("div", {
                    className: gn.MonthGridOverallCtn,
                    children: (0, e.jsx)(Xi, { userYearInReview: t, nYear: r }),
                  }),
                }),
              },
              {
                name: j.c.Localize("#YIR_FirstTime_Tab_Grid"),
                key: "firsttimegrid",
                contents: (0, e.jsx)(Ne.tH, {
                  children: (0, e.jsx)($i, { userYearInReview: t, nYear: r }),
                }),
              },
            ];
          return l.length == 0
            ? null
            : (0, e.jsxs)(ze, {
                className: Re.AllFirstPlayedCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, p.A)(gn.AllGamesBGImage, a.AllGamesBGImage),
                  }),
                  (0, e.jsxs)("div", {
                    className: Re.YearInReviewContent,
                    children: [
                      (0, e.jsx)("div", {
                        className: Re.SectionTitle,
                        children: d("#YIR_FirstTime_Title", l.length),
                      }),
                      c
                        ? (0, e.jsx)(jn.t, {
                            size: "medium",
                            position: "center",
                            string: qe.Z.Localize("#Loading"),
                          })
                        : (0, e.jsx)("div", {
                            className: Re.TabCtn,
                            children: (0, e.jsx)(Zi.V, {
                              classNameCtn: Re.TabBar,
                              classNameTab: (0, p.A)(Re.Tab, a.Tab),
                              tabs: m,
                            }),
                          }),
                    ],
                  }),
                ],
              });
        }
        function $i(o) {
          const { nYear: t, userYearInReview: r } = o,
            a = r.GetPlayTimeStats().game_summary,
            l = Ie(),
            [c, d] = f.useState(!1),
            { bShouldShowMore: m, rgGamesInOrderOfPlaytime: u } = (0,
            f.useMemo)(() => {
              const y = new Set(),
                B = a
                  .filter((W) =>
                    y.has(W.appid)
                      ? !1
                      : (y.add(W.appid),
                        W.parent_appid || (!W.demo && !W.playtest)),
                  )
                  .sort(
                    (W, U) =>
                      U.total_playtime_percentagex100 -
                      W.total_playtime_percentagex100,
                  )
                  .map((W) => ({
                    appid: W.appid,
                    nPercentagex100: W.total_playtime_percentagex100,
                    bNewThisYear: !!W.new_this_year,
                    bIsDemo: !!W.demo,
                    bIsPlaytest: !!W.playtest,
                    nParentAppID: W.parent_appid,
                  })),
                E = 100,
                O = a.length > E && !c;
              return {
                bShouldShowMore: O,
                rgGamesInOrderOfPlaytime: O ? B.slice(0, E) : B,
              };
            }, [a, c]);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Qr, {
                nYear: t,
                rgGamesInOrderOfPlaytime: u,
                strTooltip: l("#YIR_FirstTime_Percentages"),
              }),
              m &&
                (0, e.jsx)("div", {
                  className: $.MoreButtonContainer,
                  children: (0, e.jsx)("a", {
                    href: "#",
                    className: $.ShowMoreBtn,
                    onClick: () => d(!0),
                    children: j.c.Localize("#YIR_ShowMore"),
                  }),
                }),
            ],
          });
        }
        function Xi(o) {
          const { nYear: t, userYearInReview: r } = o,
            a = r.GetRawStats().playtime_stats.months;
          return (0, e.jsx)(e.Fragment, {
            children: a
              .filter((l) => l.stats.total_sessions > 0)
              .map((l) =>
                (0, e.jsx)(
                  qi,
                  { month: l, userYearInReview: r, nYear: t },
                  "outermonth" + l.rtime_month,
                ),
              ),
          });
        }
        function qi(o) {
          const { nYear: t, userYearInReview: r, month: a } = o,
            l = Pr(),
            c = Ie(),
            [d, m] = f.useState(!1),
            { bShouldShowMore: u, rgGameStats: y } = (0, f.useMemo)(() => {
              const E = a.game_summary
                  .filter((U) => {
                    const yt = r.GetGameSummaryForApp(U.appid);
                    return (
                      (0, L.wT)(
                        yt,
                        `Displaying Month Data ${a.rtime_month} missing summary for appid: ${U.appid}`,
                      ),
                      yt && (yt.parent_appid || (!yt.demo && !yt.playtest))
                    );
                  })
                  .sort(
                    (U, yt) =>
                      yt.relative_playtime_percentagex100 -
                      U.relative_playtime_percentagex100,
                  )
                  .map((U) => {
                    const yt = r.GetGameSummaryForApp(U.appid);
                    return {
                      appid: yt.appid,
                      nPercentagex100: U.relative_playtime_percentagex100,
                      bNewThisYear: !!yt.new_this_year,
                      bIsDemo: !!yt.demo,
                      bIsPlaytest: !!yt.playtest,
                      nParentAppID: yt.parent_appid,
                    };
                  }),
                O = 8,
                W = E.length > O && !d;
              return { bShouldShowMore: W, rgGameStats: W ? E.slice(0, O) : E };
            }, [a.game_summary, a.rtime_month, d, r]);
          if (y.length == 0) return null;
          const B = new Date((a.rtime_month + 1440 * 60) * 1e3);
          return (0, e.jsxs)(
            "div",
            {
              className: gn.MonthGroupCtn,
              children: [
                (0, e.jsx)("div", {
                  className: gn.MonthTitle,
                  children: l
                    ? j.c.Localize(
                        `#YIR_MonthlyGrid_MonthSingular_${B.getUTCMonth() + 1}`,
                      )
                    : (0, Dn.sq)(B),
                }),
                (0, e.jsx)(Qr, {
                  rgGamesInOrderOfPlaytime: y,
                  nYear: t,
                  strTooltip: c("#YIR_FirstTime_MonthlyPercentages"),
                }),
                u &&
                  (0, e.jsx)("div", {
                    className: $.MoreButtonContainer,
                    children: (0, e.jsx)("a", {
                      href: "#",
                      className: $.ShowMoreBtn,
                      onClick: () => m(!0),
                      children: j.c.Localize("#YIR_ShowMore"),
                    }),
                  }),
              ],
            },
            "monthgroup_" + a.rtime_month,
          );
        }
        function Qr(o) {
          const { nYear: t, rgGamesInOrderOfPlaytime: r, strTooltip: a } = o,
            l = Wr(),
            c = (0, f.useMemo)(
              () => r.map((B) => B.nParentAppID || B.appid),
              [r],
            ),
            { data: d } = un(c);
          let m = r.filter((B) => d?.has(B.nParentAppID || B.appid));
          const u = m.map((B) => B.appid);
          let y = m.map((B, E) => {
            let O = () => l(E, u);
            return (0, e.jsx)(
              _i,
              {
                appid: B.nParentAppID || B.appid,
                bNewThisYear: B.bNewThisYear,
                fnOnClick: O,
                nYear: t,
                strPercentage:
                  B.nPercentagex100 !== void 0 ? De(B.nPercentagex100) : void 0,
                strTooltip: a,
                bIsDemo: B.bIsDemo,
                bIsPlayTest: B.bIsPlaytest,
              },
              B.appid,
            );
          });
          return (0, e.jsx)(Ce.Z, {
            "flow-children": "grid",
            className: (0, p.A)($.FirstPlayCtn, gn.FirstPlayCtn),
            children: y,
          });
        }
        function _i(o) {
          const {
              nYear: t,
              appid: r,
              bNewThisYear: a,
              fnOnClick: l,
              strPercentage: c,
              strTooltip: d,
              bIsDemo: m,
              bIsPlayTest: u,
            } = o,
            { item: y } = Xe(r),
            B = (0, sr.aL)(y && (0, Gr._)(y.info)) || "",
            E = _t();
          if (!y || !y.info.visible) return null;
          const O = (0, Qe.CB)(y.assets, "library_capsule");
          return (0, e.jsx)("div", {
            className: (0, p.A)({
              [$.GameCtn]: !0,
              [gn.GameCtn]: !0,
              [$.GameNewThisYear]: a,
            }),
            onClick: (W) => {
              l && (W.preventDefault(), l());
            },
            children: (0, e.jsx)(ki.oj, {
              appid: r,
              children: (0, e.jsxs)("a", {
                href: l ? void 0 : B,
                className: $.CapsuleCtn,
                children: [
                  (!!a || !!m || !!u) &&
                    (0, e.jsxs)("div", {
                      className: $.SpecialFlags,
                      children: [
                        !!a &&
                          (0, e.jsx)("div", {
                            className: (0, p.A)(
                              $.GamePlayDetails,
                              E.GamePlayDetails,
                            ),
                            children: j.c.Localize("#YIR_FirstTime_Played", t),
                          }),
                        !!m &&
                          (0, e.jsx)("div", {
                            className: (0, p.A)(
                              $.DemoPlayDetails,
                              E.DemoPlayDetails,
                            ),
                            children: j.c.Localize("#YIR_Played_Demo"),
                          }),
                        !!u &&
                          (0, e.jsx)("div", {
                            className: (0, p.A)(
                              $.PlaytestPlayDetails,
                              E.PlaytestPlayDetails,
                            ),
                            children: j.c.Localize("#YIR_Played_PlayTest"),
                          }),
                      ],
                    }),
                  O
                    ? (0, e.jsx)("img", { loading: "lazy", src: O })
                    : (0, e.jsx)(Hr, { item: y.info }),
                  !!c &&
                    (0, e.jsx)(tn.he, {
                      toolTipContent: d,
                      className: $.TimePlayed,
                      children: c,
                    }),
                ],
              }),
            }),
          });
        }
        var ts = i(20175),
          Ue = i.n(ts),
          Je = i(17247);
        function es(o) {
          const {
            children: t,
            className: r,
            squareClassName: a,
            gridClassName: l,
            bEvenTiles: c,
            bFadeInTiles: d,
            bDrift: m,
          } = o;
          return (0, e.jsx)("div", {
            className: (0, p.A)(Je.Container, r),
            children: (0, e.jsx)("div", {
              className: (0, p.A)(Je.Frame, !d && Je.FadeInGrid),
              children: (0, e.jsx)("div", {
                className: (0, p.A)(Je.Square, m && Je.Drift, a),
                children: (0, e.jsx)("div", {
                  className: (0, p.A)(
                    { [Je.Grid]: !0, [Je.WideTiles]: !c, [Je.FadeInTiles]: d },
                    l,
                  ),
                  children: t,
                }),
              }),
            }),
          });
        }
        function ns(o) {
          return (0, e.jsx)("img", {
            className: (0, p.A)(Je.Tile, o.className),
            src: o.strImageURL,
            alt: "",
          });
        }
        const rs = 9e3,
          is = 1,
          ss = 50;
        function Vr(o) {
          const { userYearInReview: t, children: r } = o,
            a = (0, f.useMemo)(
              () =>
                t
                  .GetPlayTimeStats()
                  .games.map((d) => t.GetGameSummaryForApp(d.appid))
                  .filter(
                    (d) => d && (d.parent_appid || (!d.demo && !d.playtest)),
                  ),
              [t],
            );
          if (!a || a.length == 0) return (0, e.jsx)(ar, { children: r });
          const l = a[0].total_playtime_percentagex100 ?? 0;
          return t.GetPlayTimeStats().game_summary.length < is || l >= rs
            ? (0, e.jsx)(ls, {
                appid: a[0].parent_appid || a[0].appid,
                children: r,
              })
            : (0, e.jsx)(as, { userYearInReview: t, children: r });
        }
        function as(o) {
          const { userYearInReview: t, children: r } = o,
            a = _t(),
            l = (0, f.useMemo)(
              () =>
                Array.from(
                  new Set(
                    t
                      .GetPlayTimeStats()
                      .game_summary.filter(
                        (u) => u.parent_appid || (!u.demo && !u.playtest),
                      )
                      .sort(
                        (u, y) =>
                          y.total_playtime_percentagex100 -
                          u.total_playtime_percentagex100,
                      )
                      .slice(0, ss)
                      .map((u) => u.parent_appid || u.appid),
                  ),
                ),
              [t],
            ),
            { data: c } = un(l),
            { rgStoreItems: d, rgImageURLs: m } = (0, f.useMemo)(() => {
              if (!c) return { rgStoreItems: null, rgImageURLs: null };
              const u = l.map((B) => c.get(B)).filter((B) => !!B && !!B.assets),
                y = os(u);
              return { rgStoreItems: u, rgImageURLs: y };
            }, [l, c]);
          return d
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)(es, {
                    className: (0, p.A)(Ue().ImagesCtn, a.ImagesCtn),
                    squareClassName: Ue().TileSquare,
                    gridClassName: (0, p.A)({
                      [Ue().TileGrid]: !0,
                      [Ue().Sub10]: d.length <= 10,
                      [Ue().Sub20]: d.length <= 20,
                      [Ue().Sub40]: d.length <= 40,
                    }),
                    bFadeInTiles: !0,
                    bDrift: !0,
                    children: m.map((u, y) =>
                      (0, e.jsx)(
                        ns,
                        { strImageURL: u, className: Ue().Tile },
                        y,
                      ),
                    ),
                  }),
                  r,
                ],
              })
            : (0, e.jsx)(ar, { children: r });
        }
        function os(o) {
          const t = (l) => (
              (0, L.wT)(l.assets, "Cannot get image without assets"),
              (0, Qe.CB)(l.assets, "library_hero", "main_capsule")
            ),
            r = (l) => (
              (0, L.wT)(l.assets, "Cannot get image without assets"),
              (0, Qe.CB)(l.assets, "raw_page_background", "main_capsule")
            ),
            a = o.map(t);
          return (
            o.length <= 50 && a.push(...o.map(r)),
            o.length <= 20 && a.push(...o.map(t)),
            a
          );
        }
        function ls(o) {
          const { appid: t, children: r } = o,
            { item: a } = Xe(t),
            l = _t();
          return a
            ? (0, e.jsxs)(e.Fragment, {
                children: [
                  (0, e.jsx)("div", {
                    className: (0, p.A)(Ue().ImagesCtn, l.ImagesCtn),
                    children: (0, e.jsx)("div", {
                      className: (0, p.A)(Ue().SingleGame, l.SingleGame),
                      children: (0, e.jsx)("div", {
                        className: (0, p.A)(Ue().ImageTint, l.ImageTint),
                        children: (0, e.jsx)("img", {
                          src: (0, Qe.CB)(a.assets, "library_hero"),
                        }),
                      }),
                    }),
                  }),
                  r,
                ],
              })
            : (0, e.jsx)(ar, { children: r });
        }
        function ar(o) {
          return (0, e.jsx)("div", {
            className: Ue().basicBackground,
            children: o.children,
          });
        }
        var cs = i(54094),
          X = i.n(cs),
          fn = i(84918),
          or = i(91843),
          lr = i(16965),
          In = i(49404),
          ds = i(55709),
          ms = i(63905),
          us = i(79191),
          gs = i(47148),
          cr = i(19730);
        const hn = ({
          spaceAroundCount: o,
          endValue: t,
          maxValue: r,
          duration: a = 1e3,
          startAnimation: l = !1,
          stopAnimation: c = !1,
          onAnimationStart: d,
          onAnimationStop: m,
          delay: u = 0,
          className: y,
        }) => {
          const [B, E] = (0, f.useState)(0),
            O = f.useRef(null),
            W = (U) => (U < 0.5 ? 4 * U ** 3 : 1 - Math.pow(-2 * U + 2, 3) / 2);
          return (
            (0, f.useEffect)(() => {
              let U = null;
              const yt = () => {
                if (!U) return;
                const Jt = Date.now() - U,
                  Ct = Math.min(1, Jt / a),
                  be = W(Ct),
                  Pt = Math.round((r ?? t) * be);
                Pt <= t
                  ? (E(Pt), (O.current = requestAnimationFrame(yt)))
                  : E(t);
              };
              return (
                l &&
                  (d && d(),
                  window.setTimeout(() => {
                    (U = Date.now()),
                      d && d(),
                      (O.current = requestAnimationFrame(yt));
                  }, u)),
                () => {
                  O.current && cancelAnimationFrame(O.current), c && m && m();
                }
              );
            }, [t, a, l, c, d, m, u, r]),
            o
              ? (0, e.jsxs)(e.Fragment, {
                  children: ["\xA0", (0, cr.Dq)(B), "\xA0"],
                })
              : (0, e.jsx)(e.Fragment, { children: (0, cr.Dq)(B) })
          );
        };
        var fs = i(94162),
          hs = i(39567);
        const vs = () => {
            const o = _t();
            return (0, e.jsxs)("svg", {
              className: (0, p.A)(
                X().ProgressIconSVG,
                X().IconStreak,
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
          ys = () => {
            const o = _t();
            return (0, e.jsxs)("svg", {
              className: (0, p.A)(
                X().ProgressIconSVG,
                X().IconGamesPlayed,
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
          ps = () => {
            const o = _t();
            return (0, e.jsx)("svg", {
              className: (0, p.A)(
                X().ProgressIconSVG,
                X().IconAchievement,
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
        function Bs(o) {
          const { userYearInReview: t } = o,
            r = _t();
          return (0, e.jsx)(ze, {
            className: (0, p.A)(v().TopHonorsSection, r.TopHonorsSection),
            children: (0, e.jsx)("div", {
              className: (0, p.A)(
                v().YearInReviewContent,
                v().TopHonorsContent,
              ),
              children: (0, e.jsxs)("div", {
                className: X().TopHonorsCtn,
                children: [
                  (0, e.jsx)(xs, { userYearInReview: t }),
                  (0, e.jsxs)("div", {
                    className: X().SpiderAndNumbersCnt,
                    children: [
                      (0, e.jsx)(Is, { userYearInReview: t }),
                      (0, e.jsx)(Ls, { userYearInReview: t }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
        function xs(o) {
          let { userYearInReview: t } = o;
          const r = t.GetYear(),
            a = Ie(),
            l = _t();
          let c = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            d = t.GetFilteredGameSummary()?.length || 0,
            m =
              t.GetPlayTimeStats().playtime_streak?.longest_consecutive_days ||
              0,
            u = t.GetPlayTimeStats().by_numbers?.achievements_pct || 0,
            y = t.GetPlayTimeStats().by_numbers?.games_played_pct || 0,
            B = t.GetPlayTimeStats().by_numbers?.game_streak_pct || 0,
            E = m > 0 && B > 0 && !on();
          u >= 99 && (u = 100),
            y >= 99 && (y = 100),
            B >= 99 && (B = 100),
            c == t.GetPlayTimeStats().by_numbers?.achievements_avg && (u = 50),
            d == t.GetPlayTimeStats().by_numbers?.games_played_avg && (y = 50),
            m == t.GetPlayTimeStats().by_numbers?.game_streak_avg && (B = 50),
            c == 0 && (u = 0),
            d == 0 && (y = 0),
            m == 0 && (B = 0);
          const [O, W] = f.useState(!1),
            [U, yt] = f.useState(!1),
            [Rt, Jt] = f.useState(!1),
            Ct = f.useCallback(async (Be) => {
              Be && (W(!0), yt(!0), Jt(!0));
            }, []),
            be = (0, e.jsx)(hn, {
              endValue: c,
              maxValue: (c * 100) / u,
              duration: 2e3,
              startAnimation: O,
              delay: 500,
            }),
            Pt = (0, e.jsx)(hn, {
              endValue: d,
              maxValue: (d * 100) / y,
              duration: 2e3,
              startAnimation: U,
              delay: 700,
            }),
            ee = (0, e.jsx)(hn, {
              endValue: m,
              maxValue: (m * 100) / B,
              duration: 2e3,
              startAnimation: Rt,
              delay: 900,
            });
          return (0, e.jsxs)("div", {
            className: (0, p.A)(
              X().PlayBehaviorContainer,
              l.PlayBehaviorContainer,
            ),
            children: [
              (0, e.jsx)("div", {
                className: v().SectionTitle,
                children: a("#YIR_Compare_Title_Label"),
              }),
              (0, e.jsx)("div", {
                className: (0, p.A)(
                  v().SectionSubTitle,
                  X().PlayBehaviorSectionSubTitle,
                ),
                children: a("#YIR_Compare_Subtitle_Label"),
              }),
              (0, e.jsxs)(Mn.J, {
                onVisibilityChange: Ct,
                children: [
                  (0, e.jsx)(dr, {
                    progressLabel: a(
                      c == 1
                        ? "#YIR_Compare_PlayerProgress_Achievements_Single"
                        : "#YIR_Compare_PlayerProgress_Achievements_Label",
                      be,
                    ),
                    userPercent: u,
                    steamAverage:
                      t.GetPlayTimeStats().by_numbers?.achievements_avg,
                    progressIcon: (0, e.jsx)(ps, {}),
                  }),
                  (0, e.jsx)(dr, {
                    progressLabel: a(
                      d == 1
                        ? "#YIR_Compare_PlayerProgress_PlayedGames_Single"
                        : "#YIR_Compare_PlayerProgress_PlayedGames_Label",
                      Pt,
                    ),
                    userPercent: y,
                    steamAverage:
                      t.GetPlayTimeStats().by_numbers?.games_played_avg,
                    progressIcon: (0, e.jsx)(ys, {}),
                  }),
                  E &&
                    (0, e.jsx)(dr, {
                      progressLabel: a(
                        m == 1
                          ? "#YIR_Compare_PlayerProgress_LongestStreak_Single"
                          : "#YIR_Compare_PlayerProgress_LongestStreak_Label",
                        ee,
                      ),
                      userPercent: B,
                      steamAverage:
                        t.GetPlayTimeStats().by_numbers?.game_streak_avg,
                      progressIcon: (0, e.jsx)(vs, {}),
                    }),
                ],
              }),
              (0, e.jsx)("div", {
                className: X().PlayNewnessContainer,
                children: (0, e.jsx)(Ms, { userYearInReview: t }),
              }),
            ],
          });
        }
        function dr(o) {
          let {
            progressLabel: t,
            steamAverage: r,
            progressIcon: a,
            userPercent: l,
          } = o;
          const c = _t();
          return (
            (l = pn.OQ(l, 0, 100)),
            (0, e.jsxs)(ze, {
              className: X().PlayerBehaviorProgressCnt,
              children: [
                (0, e.jsx)("div", { className: X().ProgressIcon, children: a }),
                (0, e.jsxs)("div", {
                  className: X().ProgressRightSide,
                  children: [
                    (0, e.jsx)("div", {
                      className: (0, p.A)(X().ProgressLabel, c.ProgressLabel),
                      children: t,
                    }),
                    (0, e.jsx)("div", {
                      className: X().ProgressBar,
                      children: (0, e.jsx)("div", {
                        className: X().ProgressBarWrapper,
                        children: (0, e.jsx)("div", {
                          className: (0, p.A)(
                            X().ProgressBarFilled,
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
                            className: X().GlitterBox,
                            children: [
                              (0, e.jsx)("div", { className: X().Glitter }),
                              (0, e.jsx)("div", {
                                className: (0, p.A)(
                                  X().Glitter,
                                  X().GlitterSecond,
                                ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, e.jsx)("div", {
                      className: X().ProgressLabelsCnt,
                      children:
                        r &&
                        (0, e.jsx)("div", {
                          className: X().ProgressSteamAvgLabel,
                          children: j.c.Localize(
                            "#YIR_Compare_PlayerProgress_Steam_Avg",
                            r,
                          ),
                        }),
                    }),
                  ],
                }),
              ],
            })
          );
        }
        var js = ((o) => (
          (o.NewActive = "NewActive"),
          (o.UsedActive = "UsedActive"),
          (o.OldActive = "OldActive"),
          o
        ))(js || {});
        const bs = {
          NewActive: "#YIR_Compare_NewGames_Flavor",
          UsedActive: "#YIR_Compare_ComfortGames_Flavor",
          OldActive: "#YIR_Compare_OldGames_Flavor",
        };
        function Ms(o) {
          const { userYearInReview: t } = o,
            r = t.GetYear(),
            a = _t(),
            l = a.new_games_color,
            c = a.used_games_color,
            d = a.old_games_color,
            [m, u] = (0, f.useState)("NewActive"),
            y = Ie(),
            B = t.GetGlobalGameplayDistribition(),
            E = {
              NewActive: B?.new_releases || 0,
              UsedActive: B?.recent_releases || 0,
              OldActive: B?.classic_releases || 0,
            },
            O = B && B.new_releases ? B.recent_cutoff_year : 7,
            W = O + 1;
          let [U, yt, Rt] = f.useMemo(() => {
            let ee = t.GetGameAgeCounts([1, W]),
              Be = ee.reduce((Pe, Oe) => Oe + Pe, 0);
            if (Be == 0) return [0, 0, 0];
            let Se = ee.map((Pe) => Math.floor((Pe * 100) / Be)),
              He = 100 - Se.reduce((Pe, Oe) => Oe + Pe, 0),
              Ke = ee.map((Pe, Oe) => ({
                decimal: ((Pe * 100) / Be) % 1,
                index: Oe,
              }));
            for (
              Ke = Ke.sort((Pe, Oe) => Pe.decimal - Oe.decimal);
              He > 0 && Ke.length > 0;
            ) {
              let Pe = Ke.pop();
              (Se[Pe.index] += 1), (He -= 1);
            }
            return Se;
          }, [t, W]);
          const Jt = { NewActive: U, UsedActive: yt, OldActive: Rt },
            Ct = {
              NewActive: y("#YIR_Compare_NewGames_Desc_User", r),
              UsedActive: y("#YIR_Compare_ComfortGames_Desc_User", O),
              OldActive: y("#YIR_Compare_OldGames_Desc_User", W),
            },
            be = {
              NewActive: j.c.Localize("#YIR_Compare_NewGames_Desc_AvgSteam", r),
              UsedActive: j.c.Localize(
                "#YIR_Compare_ComfortGames_Desc_AvgSteam",
                O,
              ),
              OldActive: j.c.Localize("#YIR_Compare_OldGames_Desc_AvgSteam", W),
            },
            Pt = (0, f.useMemo)(() => {
              const ee = new Array();
              return (
                ee.push({ name: "new", value: U > 0 ? U : 1 }),
                ee.push({ name: "used", value: yt > 0 ? yt : 1 }),
                ee.push({ name: "old", value: Rt > 0 ? Rt : 1 }),
                ee
              );
            }, [U, yt, Rt]);
          return (0, e.jsxs)("div", {
            className: (0, p.A)(
              X().GameNewnessComparisonContainer,
              X()[m],
              a[m],
            ),
            children: [
              (0, e.jsx)("div", {
                className: (0, p.A)(X().GameNewnessTitle, a.GameNewnessTitle),
                children: j.c.LocalizeReact(
                  "#YIR_Compare_Flavor_Title",
                  (0, e.jsx)("div", {}),
                ),
              }),
              (0, e.jsxs)("div", {
                className: X().GameNewnessDataCnt,
                children: [
                  (0, e.jsx)("div", {
                    className: X().WheelChart,
                    children: (0, e.jsx)(fn.u, {
                      width: "100%",
                      height: "100%",
                      aspect: 1,
                      children: (0, e.jsx)(or.r, {
                        children: (0, e.jsxs)(lr.F, {
                          data: Pt,
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
                              In.f,
                              {
                                onMouseEnter: () => u("NewActive"),
                                className: (0, p.A)(
                                  X().WheelArc,
                                  m === "NewActive" && X().Active,
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
                              In.f,
                              {
                                onMouseEnter: () => u("UsedActive"),
                                className: (0, p.A)(
                                  X().WheelArc,
                                  m === "UsedActive" && X().Active,
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
                              In.f,
                              {
                                onMouseEnter: () => u("OldActive"),
                                className: (0, p.A)(
                                  X().WheelArc,
                                  m === "OldActive" && X().Active,
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
                  }),
                  (0, e.jsx)("div", {
                    className: X().RightSideContainer,
                    children: (0, e.jsxs)("div", {
                      className: X().DataBoxesContainer,
                      children: [
                        (0, e.jsxs)("div", {
                          className: (0, p.A)(
                            X().UserData,
                            a.UserData,
                            X().DataBox,
                            a.DataBox,
                            a.Background,
                          ),
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, p.A)(
                                X().DataBoxArrow,
                                a.DataBoxArrow,
                                a.Background,
                              ),
                            }),
                            (0, e.jsxs)("div", {
                              className: (0, p.A)(
                                X().PercentageLabel,
                                a.PercentageLabel,
                                a.Color,
                              ),
                              children: [
                                j.c.Localize("#YIR_Compare_Percentage", Jt[m]),
                                (0, e.jsx)("div", {
                                  className: X().FlavorLabel,
                                  children: j.c.Localize(bs[m]),
                                }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, p.A)(
                                X().PercentageDescriptionLabel,
                                a.PercentageDescriptionLabel,
                                a.Color,
                              ),
                              children: Ct[m],
                            }),
                          ],
                        }),
                        (0, e.jsxs)("div", {
                          className: (0, p.A)(
                            X().SteamData,
                            a.SteamData,
                            X().DataBox,
                            a.DataBox,
                            a.Border,
                          ),
                          children: [
                            (0, e.jsx)("div", {
                              className: (0, p.A)(
                                X().PercentageLabel,
                                a.PercentageLabel,
                                a.Color,
                              ),
                              children: j.c.Localize(
                                "#YIR_Compare_Percentage",
                                E[m],
                              ),
                            }),
                            (0, e.jsx)("div", {
                              className: (0, p.A)(
                                X().PercentageDescriptionLabel,
                                a.PercentageDescriptionLabel,
                                a.Color,
                              ),
                              children: be[m],
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
        function Is(o) {
          const { userYearInReview: t } = o,
            r = t.GetUserAggregateTagData(),
            { data: a } = (0, hs.Fv)(w.TS.LANGUAGE),
            l = Ie(),
            c = _t(),
            d = Ts(),
            m = r.map((B) => B.nPreSelectionWeight).sort((B, E) => E - B);
          let u = r.map((B, E) => {
            const O = m.findIndex((W) => W - B.nPreSelectionWeight < 1e-5);
            return { subject: a && a[B.nTagId], A: (6 - O) * 10 + 2 * E + 0.5 };
          });
          if (u.length == 0) return null;
          const y = u.map((B, E) =>
            (0, e.jsx)("li", { children: B.subject }, E),
          );
          return (0, e.jsxs)("div", {
            className: (0, p.A)(X().SpidergraphContainer, X().HalfwidthColumn),
            children: [
              (0, e.jsx)("div", {
                className: X().SectionLabel,
                children: j.c.Localize("#YIR_Spider_Title"),
              }),
              (0, e.jsx)("div", {
                className: (0, p.A)(X().SectionDesc, c.SectionDesc),
                children: l("#YIR_Spider_Desc", t.GetYear()),
              }),
              (0, e.jsx)("div", {
                className: X().GraphBox,
                children: (0, e.jsx)(fn.u, {
                  className: X().SpiderResponsiveContainer,
                  children: (0, e.jsxs)(ds.V, {
                    cx: "50%",
                    cy: "50%",
                    outerRadius: "70%",
                    data: u,
                    children: [
                      (0, e.jsx)(ms.z, {}),
                      (0, e.jsx)(us.r, {
                        tick: (0, e.jsx)(As, { bNumberedLabels: d }),
                        dataKey: "subject",
                      }),
                      (0, e.jsx)(gs.V, {
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
              }),
              d &&
                (0, e.jsxs)("ol", {
                  className: X().RadarChartLegend,
                  children: [" ", y, " "],
                }),
            ],
          });
        }
        function Ts() {
          const [o, t] = (0, f.useState)(!1);
          return (
            (0, f.useEffect)(
              () => t((0, fs.Ae)() || window.innerWidth <= 300),
              [],
            ),
            o
          );
        }
        function As(o) {
          const {
            payload: t,
            x: r,
            verticalAnchor: a,
            bNumberedLabels: l,
            ...c
          } = o;
          return l
            ? (0, e.jsx)("text", {
                x: r,
                ...c,
                children: (0, e.jsx)("tspan", {
                  x: r,
                  dy: "20px",
                  children: t.index + 1,
                }),
              })
            : (0, e.jsx)("svg", {
                x: r - 85,
                ...c,
                width: "170px",
                height: "100%",
                children: (0, e.jsx)("foreignObject", {
                  className: X().RadarTextContainer,
                  dy: "20px",
                  width: "170",
                  height: "150",
                  children: (0, e.jsx)("div", {
                    className: X().RadarText,
                    children: t.value,
                  }),
                }),
              });
        }
        function ws(o) {
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
        function Ls(o) {
          const { userYearInReview: t } = o;
          let r = ws(t);
          if (r.length == 0) return null;
          let a = r.map(([l, c]) =>
            (0, e.jsx)(Ns, { label: j.c.Localize(l), value: c }, l),
          );
          return (0, e.jsxs)("div", {
            className: (0, p.A)(X().NumbersContainer, X().HalfwidthColumn),
            children: [
              (0, e.jsx)("div", {
                className: X().SectionLabel,
                children: j.c.Localize("#YIR_ByTheNum_Title"),
              }),
              (0, e.jsx)("div", { className: X().NumbersRowsCnt, children: a }),
            ],
          });
        }
        function Ns(o) {
          let { label: t, value: r } = o,
            a = r ? (0, Me.D)(r) : "-";
          return (0, e.jsxs)("div", {
            className: (0, p.A)(X().NumbersRow, r == 0 && X().Disabled),
            children: [
              (0, e.jsx)("div", { className: X().NumbersLabel, children: t }),
              (0, e.jsx)("div", { className: X().FillerDots }),
              (0, e.jsx)("div", { className: X().NumbersValue, children: a }),
            ],
          });
        }
        var zs = i(59490),
          mr = i(90405),
          en = i(5751),
          Es = i(4874),
          cn = i(24660);
        function Ps(o) {
          const { userYearInReview: t } = o;
          if (w.iA.is_support || w.iA.accountid == t.GetAccountID()) {
            const r = t.GetSteamID().ConvertTo64BitString(),
              a = t.GetYear();
            return (0, e.jsxs)(mr.K, {
              rootMargin: "0px 0px 100% 0px",
              children: [
                (0, e.jsx)(Os, { steamid: r, year: a }),
                (0, e.jsx)(Ds, { steamid: r, year: a }),
              ],
            });
          }
          return null;
        }
        function Os(o) {
          const { steamid: t, year: r } = o,
            a = (0, Es.N0)(t, !0);
          if (
            a.isLoading ||
            a.data?.is_not_member_of_any_group() ||
            !a.data?.family_group()
          )
            return null;
          const l = a.data
            .family_group()
            .members()
            .map((c) => c.steamid())
            .filter((c) => !!c && c !== t);
          return l.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: en.FriendsSharedSection,
                children: [
                  (0, e.jsx)("div", {
                    className: en.FriendsSharedSectionTitle,
                    children: j.c.Localize("#YIR_FamilyShared"),
                  }),
                  (0, e.jsx)("div", {
                    className: en.FriendsGrid,
                    children: l.map((c) =>
                      (0, e.jsx)(
                        kr,
                        {
                          steamid: c,
                          year: r,
                          ePrivacy: P,
                          bPrivacyOverride: !1,
                        },
                        "family_" + c,
                      ),
                    ),
                  }),
                ],
              });
        }
        const Fr = 50;
        function Ds(o) {
          const { steamid: t, year: r } = o,
            { isLoading: a, data: l } = Ai(t, r),
            c = (0, f.useMemo)(
              () =>
                l
                  ? [...l]
                      .sort(
                        (y, B) =>
                          (B.rt_privacy_updated ?? 0) -
                          (y.rt_privacy_updated ?? 0),
                      )
                      .slice(0, Fr)
                  : [],
              [l],
            ),
            d = (0, f.useMemo)(
              () => c.map((y) => new J.b(y.steamid).GetAccountID()),
              [c],
            ),
            m = (0, Ir.B3)(d);
          if (a || d?.length == 0 || !m) return null;
          const u = new Map();
          for (const y of m)
            !y || !y.steamid || u.set(y.steamid, y.persona_name ?? "");
          return (
            c.sort((y, B) => u.get(y.steamid).localeCompare(u.get(B.steamid))),
            (0, e.jsxs)("div", {
              className: en.FriendsSharedSection,
              children: [
                (0, e.jsx)("div", {
                  className: en.FriendsSharedSectionTitle,
                  children: j.c.Localize("#YIR_FriendShared"),
                }),
                (0, e.jsx)(Ce.Z, {
                  className: en.FriendsGrid,
                  "flow-children": "grid",
                  children: c
                    .slice(0, Fr)
                    .map((y) =>
                      (0, e.jsx)(
                        kr,
                        {
                          steamid: y.steamid,
                          ePrivacy: y.privacy_state,
                          year: r,
                          bPrivacyOverride: y.privacy_override,
                        },
                        "friendshare_" + y.steamid + "_" + r,
                      ),
                    ),
                }),
                !!w.iA.is_support &&
                  (0, e.jsx)("div", {
                    className: Tr.ValveOnlyBackground,
                    children: j.c.Localize("#YIR_FriendShared_support"),
                  }),
              ],
            })
          );
        }
        function kr(o) {
          const { steamid: t, year: r, ePrivacy: a } = o,
            l = _t();
          return (0, e.jsx)(cn.Ii, {
            href: `${w.TS.STORE_BASE_URL}replay/${t}/${r}`,
            className: (0, p.A)({
              [en.IsPrivate]: a == et,
              [en.FriendCtn]: !0,
              [l.FriendCtn]: !0,
            }),
            children: (0, e.jsx)(zs.p, {
              accountID: J.b.InitFromString(t).GetAccountID(),
              bHideWhenNotAvailable: !0,
              bLink: !1,
            }),
          });
        }
        var Ss = i(30096),
          Ws = i(9519);
        function dn(o) {
          return `${w.TS.STORE_CDN_URL}public/images/yearinreview/${o}`;
        }
        var Rs = i(40216),
          nn = i.n(Rs),
          Rn = i(58861),
          Zr = i(93340);
        const Ve = 100;
        var Cs = ((o) => (
          (o.windows = "windows"),
          (o.linux = "linux"),
          (o.deck = "deck"),
          (o.mac = "mac"),
          (o.vr = "vr"),
          o
        ))(Cs || {});
        function Us(o) {
          const { userYearInReview: t } = o,
            r = t.GetPlayTimeStats(),
            a = r.total_stats,
            l = r.game_summary,
            c = Ie(),
            d = _t(),
            m = (0, f.useMemo)(() => {
              const B = new Array();
              return (
                typeof a.windows_playtime_percentagex100 == "number" &&
                  a.windows_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "windows",
                    name: j.c.Localize("#YIR_Platfrom_windows"),
                    value: a.windows_playtime_percentagex100,
                  }),
                typeof a.linux_playtime_percentagex100 == "number" &&
                  a.linux_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "linux",
                    name: j.c.Localize("#YIR_Platfrom_linux"),
                    value: a.linux_playtime_percentagex100,
                  }),
                typeof a.macos_playtime_percentagex100 == "number" &&
                  a.macos_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "mac",
                    name: j.c.Localize("#YIR_Platfrom_macos"),
                    value: a.macos_playtime_percentagex100,
                  }),
                typeof a.vr_playtime_percentagex100 == "number" &&
                  a.vr_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "vr",
                    name: j.c.Localize("#YIR_Platfrom_vr"),
                    value: a.vr_playtime_percentagex100,
                  }),
                typeof a.deck_playtime_percentagex100 == "number" &&
                  a.deck_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "deck",
                    name: j.c.Localize("#YIR_Platfrom_deck"),
                    value: a.deck_playtime_percentagex100,
                  }),
                B
              );
            }, [a]),
            u = (0, f.useMemo)(() => {
              const B = new Array();
              return (
                typeof a.windows_playtime_percentagex100 == "number" &&
                  a.windows_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "windows",
                    name: j.c.Localize("#YIR_Platfrom_windows"),
                    value: l.filter((E) => E.played_windows).length,
                  }),
                typeof a.linux_playtime_percentagex100 == "number" &&
                  a.linux_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "linux",
                    name: j.c.Localize("#YIR_Platfrom_linux"),
                    value: l.filter((E) => E.played_linux).length,
                  }),
                typeof a.macos_playtime_percentagex100 == "number" &&
                  a.macos_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "mac",
                    name: j.c.Localize("#YIR_Platfrom_macos"),
                    value: l.filter((E) => E.played_mac).length,
                  }),
                typeof a.vr_playtime_percentagex100 == "number" &&
                  a.vr_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "vr",
                    name: j.c.Localize("#YIR_Platfrom_vr"),
                    value: l.filter((E) => E.played_vr).length,
                  }),
                typeof a.deck_playtime_percentagex100 == "number" &&
                  a.deck_playtime_percentagex100 > Ve &&
                  B.push({
                    id: "deck",
                    name: j.c.Localize("#YIR_Platfrom_deck"),
                    value: l.filter((E) => E.played_deck).length,
                  }),
                B
              );
            }, [a, l]);
          if (m.length < 2) return null;
          const y = Jr(a);
          return (0, e.jsx)(ze, {
            className: (0, p.A)(me().PlatformChartsCtn, d.PlatformChartsCtn),
            children: (0, e.jsxs)("div", {
              className: (0, p.A)(
                v().YearInReviewContent,
                me().PlatformSpacing,
              ),
              children: [
                (0, e.jsx)("div", {
                  className: v().SectionTitle,
                  children: c("#YIR_Platform"),
                }),
                (0, e.jsxs)("div", {
                  className: me().PlatformChartsRow,
                  children: [
                    (0, e.jsxs)("div", {
                      className: me().PieCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: me().GraphTitle,
                          children: j.c.Localize("#YIR_Platfrom_playtime"),
                        }),
                        (0, e.jsx)(fn.u, {
                          width: "90%",
                          aspect: 1,
                          children: (0, e.jsxs)(or.r, {
                            children: [
                              (0, e.jsx)(lr.F, {
                                data: m,
                                dataKey: "value",
                                nameKey: "name",
                                cx: "50%",
                                cy: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#8884d8",
                                paddingAngle: 1,
                                children: m.map((B, E) =>
                                  (0, e.jsx)(
                                    In.f,
                                    { fill: d[`pie_${B.id}`] },
                                    `cell-${E}`,
                                  ),
                                ),
                              }),
                              (0, e.jsx)(Rn.m, {
                                content: (B) =>
                                  (0, e.jsx)(Ys, {
                                    active: B.active,
                                    payload: B.payload,
                                  }),
                              }),
                              (0, e.jsx)(Zr.s, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("div", {
                      className: me().PieCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: me().GraphTitle,
                          children: j.c.Localize("#YIR_Platfrom_games"),
                        }),
                        (0, e.jsx)(fn.u, {
                          width: "90%",
                          aspect: 1,
                          children: (0, e.jsxs)(or.r, {
                            children: [
                              (0, e.jsx)(lr.F, {
                                data: u,
                                dataKey: "value",
                                nameKey: "name",
                                cx: "50%",
                                cy: "50%",
                                innerRadius: "40%",
                                outerRadius: "80%",
                                fill: "#82ca9d",
                                paddingAngle: 1,
                                children: u.map((B, E) =>
                                  (0, e.jsx)(
                                    In.f,
                                    { fill: d[`pie_${B.id}`] },
                                    `cell-${E}`,
                                  ),
                                ),
                              }),
                              (0, e.jsx)(Rn.m, {
                                content: (B) =>
                                  (0, e.jsx)(Hs, {
                                    active: B.active,
                                    payload: B.payload,
                                  }),
                              }),
                              (0, e.jsx)(Zr.s, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (y.bDeck || y.bVR) &&
                  (0, e.jsx)("div", {
                    className: (0, p.A)(
                      v().SectionTitle,
                      me().PlatformDetailsSetup,
                    ),
                    children: c("#YIR_Platform_DiveIn"),
                  }),
              ],
            }),
          });
        }
        function Ys(o) {
          const { active: t, payload: r } = o;
          if (t && r && r.length) {
            const a = r[0].value;
            return (0, e.jsxs)(tn.t1, {
              children: [
                r[0].name,
                ": ",
                j.c.Localize("#YIR_Percent_Playtime", De(a)),
              ],
            });
          }
          return null;
        }
        function Hs(o) {
          const { active: t, payload: r } = o;
          if (t && r && r.length) {
            const a = r[0].value,
              l = r[0].name;
            return (0, e.jsx)(tn.t1, {
              children: j.c.Localize(
                a === 1
                  ? "#YIR_Platfrom_gamesplays_tooltip"
                  : "#YIR_Platfrom_gamesplays_tooltip_Plural",
                (0, Me.D)(a),
                l,
              ),
            });
          }
          return null;
        }
        const Cn = 100;
        function Ks(o) {
          const { userYearInReview: t } = o;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Us, { userYearInReview: t }),
              (0, e.jsx)(Qs, { userYearInReview: t }),
            ],
          });
        }
        function Gs(o) {
          const { userYearInReview: t, strClassName: r, nYear: a } = o,
            l = t.GetRawStats(),
            c = Ie(),
            d = void 0,
            m = c("#YIR_TopGames_deck_subtitle"),
            {
              nTotalGames: u,
              nTotalSessions: y,
              nTotalPercentage: B,
            } = (0, f.useMemo)(() => M(l, "deck"), [l]),
            { rgResults: E } = (0, f.useMemo)(
              () => zn(t, "deck", 5, B),
              [t, B],
            ),
            O = Number(Math.round(B / 100).toFixed(0));
          let W = c("#YIR_TopGames_deck_new");
          O > 50 && (W = c("#YIR_TopGames_deck_mostly"));
          const U = (0, f.useRef)(null),
            yt = (0, Ss.wY)((Be) => {
              U.current &&
                U.current.style.setProperty(
                  "--contentSize",
                  `${Be.contentRect.width}px`,
                );
            }),
            [Rt, Jt] = f.useState(!1),
            Ct = f.useCallback((Be) => {
              Be && Jt(!0);
            }, []),
            be = (0, e.jsx)(hn, {
              endValue: u,
              duration: 2e3,
              startAnimation: Rt,
            }),
            Pt = (0, e.jsx)(hn, {
              endValue: y,
              duration: 2e3,
              startAnimation: Rt,
            }),
            ee = (0, f.useRef)(null);
          return (
            (0, Ws.q)(ee),
            (0, e.jsxs)("div", {
              className: (0, p.A)(
                r,
                Lt().PlatformContentsCtn,
                nn().DeckContainer,
              ),
              ref: U,
              children: [
                (0, e.jsx)("div", {
                  className: (0, p.A)(Lt().SectionTitle, nn().SectionTitle),
                  children: W,
                }),
                (0, e.jsxs)("div", {
                  className: nn().ScreenContainer,
                  ref: yt,
                  children: [
                    (0, e.jsxs)("div", {
                      className: nn().PlatformDataContainer,
                      children: [
                        (0, e.jsxs)(Mn.J, {
                          onVisibilityChange: Ct,
                          className: (0, p.A)(
                            v().YearInReviewContent,
                            Lt().StatsRow,
                            nn().StatsRow,
                          ),
                          children: [
                            (0, e.jsxs)("div", {
                              className: Lt().StatBlock,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Lt().BigNum,
                                  children: be,
                                }),
                                (0, e.jsx)("div", {
                                  className: Lt().StatDescription,
                                  children: j.c.LocalizePlural(
                                    "#YIR_NewLine_Games",
                                    u,
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsxs)("div", {
                              className: Lt().StatBlock,
                              children: [
                                (0, e.jsx)("div", {
                                  className: Lt().BigNum,
                                  children: Pt,
                                }),
                                (0, e.jsx)("div", {
                                  className: Lt().StatDescription,
                                  children: j.c.LocalizePlural(
                                    "#YIR_NewLine_Session",
                                    y,
                                  ),
                                }),
                              ],
                            }),
                            (0, e.jsx)(Kr, {
                              percentVal: B,
                              subToken: "#YIR_NewLine",
                            }),
                          ],
                        }),
                        !!d &&
                          (0, e.jsx)("div", {
                            className: (0, p.A)(
                              Lt().SectionSubTitle,
                              nn().SectionSubTitle,
                            ),
                            children: d,
                          }),
                        (0, e.jsx)(ze, {
                          className: me().SteamDeckGameCapRow,
                          children: (0, e.jsx)(Yr, {
                            rgGamePercentages: E,
                            category: "deck",
                          }),
                        }),
                      ],
                    }),
                    (0, e.jsxs)("video", {
                      className: nn().Video,
                      poster:
                        "https://cdn.akamai.steamstatic.com/store/promo/replay2023/yirDeckGamesPoster.jpg",
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      autoPlay: !0,
                      controls: !1,
                      ref: ee,
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
                  className: (0, p.A)(Lt().Disclaimer, nn().Disclaimer),
                  children: m,
                }),
              ],
            })
          );
        }
        function Jr(o) {
          return {
            bDeck:
              typeof o.deck_playtime_percentagex100 == "number" &&
              o.deck_playtime_percentagex100 > Cn,
            bVR:
              typeof o.vr_playtime_percentagex100 == "number" &&
              o.vr_playtime_percentagex100 > Cn,
          };
        }
        function Qs(o) {
          const { userYearInReview: t } = o,
            r = t.GetYear(),
            a = Ie(),
            l = t.GetPlayTimeStats().total_stats,
            c =
              l.controller_playtime_percentagex100 +
              l.deck_playtime_percentagex100;
          let d = !1;
          c > 7e3 && (d = !0);
          const m = Jr(l);
          return (0, e.jsxs)(mr.K, {
            rootMargin: "0px 0px 100% 0px",
            children: [
              !!m.bDeck &&
                (0, e.jsx)(ze, {
                  className: (0, p.A)(Lt().Section, Lt().Deck),
                  children: (0, e.jsx)(Gs, { userYearInReview: t, nYear: r }),
                }),
              !!m.bVR &&
                (0, e.jsx)(ze, {
                  className: (0, p.A)(Lt().Section, Lt().VR),
                  children: (0, e.jsx)(Wn, {
                    category: "vr",
                    userYearInReview: t,
                    bgImageURL: dn("vr_background6.webp"),
                    title: a("#YIR_TopGames_vr"),
                    subTitle: void 0,
                  }),
                }),
              c > 1e3 &&
                (0, e.jsx)(ze, {
                  className: (0, p.A)(Lt().Section, Lt().Controller),
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
                      j.c.Localize("#YIR_Platfrom_controller_forsubtitle"),
                    ),
                  }),
                }),
              r >= 2024 &&
                (0, e.jsx)(Ne.tH, {
                  children: (0, e.jsx)(Vs, { userYearInReview: t }),
                }),
            ],
          });
        }
        function Vs(o) {
          const { userYearInReview: t } = o,
            r = Ie(),
            [a, l] = (0, f.useMemo)(
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
                (0, e.jsxs)(ze, {
                  className: (0, p.A)(Lt().Section, Lt().Demo),
                  children: [
                    (0, e.jsx)("div", { className: Lt().BG_Demo }),
                    (0, e.jsx)(Wn, {
                      category: "demo",
                      userYearInReview: t,
                      title: r("#YIR_TopGames_demo"),
                      subTitleTokenIfMax: "#YIR_TopGames_demoMax",
                    }),
                  ],
                }),
              l > Cn &&
                (0, e.jsxs)(ze, {
                  className: (0, p.A)(Lt().Section, Lt().Playtest),
                  children: [
                    (0, e.jsx)("div", { className: Lt().BG_Playtest }),
                    (0, e.jsx)(Wn, {
                      category: "playtest",
                      userYearInReview: t,
                      title: r("#YIR_TopGames_playtest"),
                      subTitleTokenIfMax: "#YIR_TopGames_playtestMax",
                    }),
                  ],
                }),
            ],
          });
        }
        var Fs = i(11498),
          Ae = i.n(Fs);
        function ks(o) {
          const { userYearInReview: t } = o;
          if (on()) return null;
          const r = t.GetPlayTimeStats().playtime_streak;
          return !r ||
            (typeof r.longest_consecutive_days == "number" &&
              r.longest_consecutive_days < 5)
            ? null
            : (0, e.jsx)(Zs, { ...o, longestStreak: r });
        }
        function Zs(o) {
          const { userYearInReview: t, longestStreak: r } = o,
            a = Ie(),
            l = Or(),
            c = _t(),
            [d, m] = f.useState(!1),
            u = f.useCallback((Pt) => {
              Pt && m(!0);
            }, []),
            [y, B] = f.useState(!1),
            E = f.useCallback((Pt) => {
              Pt &&
                window.setTimeout(() => {
                  B(!0);
                }, 30);
            }, []),
            [O, W] = f.useState(!1),
            U = 12,
            yt = r.streak_games.length > U && !O,
            Rt = yt
              ? r.streak_games.sort((Pt, ee) => Pt.appid - ee.appid).slice(0, U)
              : r.streak_games.sort((Pt, ee) => Pt.appid - ee.appid),
            Jt = Rt.map((Pt) => Pt.appid),
            Ct = r.streak_games.length,
            be = r.longest_consecutive_days ?? 0;
          return (0, e.jsxs)("div", {
            className: (0, p.A)(
              me().StreakCtn,
              Ae().StreakCtn,
              Ae().Section,
              c.Section,
            ),
            children: [
              (0, e.jsx)("div", {
                className: (0, p.A)(
                  Ae().LongestStreakBgImage,
                  c.LongestStreakBgImage,
                ),
              }),
              (0, e.jsxs)("div", {
                className: v().YearInReviewContent,
                children: [
                  (0, e.jsxs)("div", {
                    className: Ae().SectionTitle,
                    children: [
                      (0, e.jsx)(Mn.J, {
                        className: Ae().LongestStreakDailyCount,
                        onVisibilityChange: u,
                        children: a(
                          "#YIR_Longest_Streak_Title",
                          (0, e.jsx)(hn, {
                            className: Ae().LongestStreakNumber,
                            endValue: be,
                            duration: 2e3,
                            startAnimation: d,
                          }),
                        ),
                      }),
                      (0, e.jsxs)(ze, {
                        className: Ae().StreakBarCtn,
                        children: [
                          (0, e.jsx)("div", { className: Ae().StreakSizeCtn }),
                          (0, e.jsx)("div", {
                            className: (0, p.A)(
                              Ae().StreakSizeFullBar,
                              c.StreakSizeFullBar,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, p.A)({
                              [Ae().StreakTickCtn]: !0,
                              [Ae().LargerTicks]: be < 40,
                            }),
                            children: (0, e.jsx)($s, { nDays: be - 1 }),
                          }),
                          (0, e.jsx)("div", { className: Ae().StreakSizeCtn }),
                        ],
                      }),
                      (0, e.jsxs)(ze, {
                        className: Ae().StreakDates,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ae().StreakStart,
                            children: l(r.rtime_start ?? 0),
                          }),
                          (0, e.jsx)("div", {
                            className: Ae().StreakEnd,
                            children: l(
                              (r.rtime_start ?? 0) + be * 24 * 60 * 60,
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)(Mn.J, {
                    onVisibilityChange: E,
                    className: (0, p.A)(
                      me().LongestStreakGamesWrapper,
                      Ae().LongestStreakGamesWrapper,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, p.A)(
                          Ae().CapRowTitle,
                          y && Ae().AnimateTitle,
                        ),
                        children: a(
                          Ct > 1
                            ? "#YIR_Longest_Streak_Games"
                            : "#YIR_Longest_Streak_Games_Singular",
                          (0, Me.D)(Ct),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: (0, p.A)(Ae().CapRowCtn),
                        children: (0, e.jsx)(Ce.Z, {
                          "flow-children": "grid",
                          className: (0, p.A)(
                            me().CapRow,
                            me().LongestStreak,
                            y && me().AnimateCap,
                          ),
                          children: Rt.map((Pt, ee) => {
                            const Be = t.GetGameSummaryForApp(Pt.appid);
                            return (0, e.jsx)(
                              ir,
                              {
                                appid: Pt.appid,
                                index: ee,
                                loading: "lazy",
                                rgAppIDs: Jt,
                                nParentAppID: Be?.parent_appid,
                                eChildType: Js(Be),
                              },
                              "longest_" + Pt.appid,
                            );
                          }),
                        }),
                      }),
                    ],
                  }),
                  yt &&
                    (0, e.jsx)("div", {
                      className: me().MoreButtonContainer,
                      children: (0, e.jsx)("a", {
                        href: "#",
                        className: me().ShowMoreBtn,
                        onClick: () => W(!0),
                        children: j.c.Localize("#YIR_ShowMore"),
                      }),
                    }),
                ],
              }),
            ],
          });
        }
        function Js(o) {
          if (o?.demo) return Ze.uE.ue;
          if (o?.playtest) return Ze.uE.Vi;
        }
        function $s(o) {
          const { nDays: t } = o,
            r = [];
          if (t > 0) {
            for (let a = 0; a < t + 2; ++a)
              r.push(
                (0, e.jsx)(
                  "div",
                  { className: Ae().Tick },
                  "DrawNDivForStreakDays" + a,
                ),
              );
            return (0, e.jsx)(e.Fragment, { children: r });
          }
          return null;
        }
        var Un = i(1946);
        function Xs(o) {
          const { steamId: t, year: r } = o,
            a = _t(),
            { rgOtherYears: l } = D(),
            c = Ie();
          return l.length === 0
            ? null
            : (0, e.jsxs)("div", {
                className: Un.OtherYearsCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: (0, p.A)(
                      Un.OtherYearsHeader,
                      a.OtherYearsHeader,
                    ),
                    children: c("#YearInReview_OtherYearLinks_Header"),
                  }),
                  (0, e.jsx)("div", {
                    className: (0, p.A)(Un.OtherYearLinks, a.OtherYearLinks),
                    children: l.map((d) =>
                      (0, e.jsx)(
                        cn.Ii,
                        {
                          href: `${w.TS.STORE_BASE_URL}replay/${t.ConvertTo64BitString()}/${d}?src=${at}`,
                          className: (0, p.A)(
                            Un.OtherYearLink,
                            a.OtherYearLink,
                          ),
                          children: d,
                        },
                        d,
                      ),
                    ),
                  }),
                ],
              });
        }
        var R = i(60197),
          Ye = i.n(R),
          qs = i(88003),
          _s = i(24806),
          ur = i(99412),
          ta = i(96538);
        const $r = "0123456789abcdef",
          Xr = "bcdfghjkmnpqrtvw";
        function qr(o, t, r) {
          return Array.from(o, (a) => {
            const l = t.indexOf(a);
            return l >= 0 ? r[l] : a;
          }).join("");
        }
        function ea(o) {
          return o ? qr(o.toString(16), $r, Xr) : "";
        }
        function Eo(o) {
          const t = qr(o.toLowerCase(), Xr, $r).replace(/[^0-9a-f]/g, "");
          return t ? parseInt(t, 16) : 0;
        }
        var na = i(91085),
          vn = i(41672);
        function _r(o) {
          const { steamId: t, nYear: r } = o,
            a = er(),
            l = _t();
          if (!w.iA.logged_in) return null;
          if (!a && w.iA.logged_in)
            return (0, e.jsx)(cn.Ii, {
              className: (0, p.A)(R.SeeRewindButton, l.SeeRewindButton),
              href: `${w.TS.STORE_BASE_URL}replay/${w.iA.steamid}/${r}?src=${k}`,
              children: j.c.Localize("#YIR_SeeYourRewind"),
            });
          const c = () => {
            (0, qs.pg)((0, e.jsx)(aa, { steamId: t, nYear: r }), window, {
              strTitle: qe.Z.Localize("#Button_Share"),
            });
          };
          return (0, e.jsxs)(Ce.Z, {
            className: R.YIRShareCtn,
            children: [
              (0, e.jsx)(ti, { steamId: t, nYear: r }),
              (0, e.jsxs)(Ce.Z, {
                className: R.ShareButton,
                onActivate: c,
                children: [
                  (0, e.jsx)(we.SYj, { className: (0, p.A)(R.ShareIcon) }),
                  (0, e.jsx)("span", {
                    className: (0, p.A)(R.ShareText),
                    children: qe.Z.Localize("#Button_Share"),
                  }),
                ],
              }),
            ],
          });
        }
        function ti(o) {
          const { steamId: t, nYear: r } = o,
            [a, l] = (0, f.useState)(""),
            c = Br(t.ConvertTo64BitString(), r),
            { mutateAsync: d } = hi(t.ConvertTo64BitString(), r),
            m = (0, f.useMemo)(() => c === P || c === N, [c]),
            u = [
              { data: et, label: j.c.Localize("#YIR_ShareVisbility_Private") },
              {
                data: N,
                label: j.c.Localize("#YIR_ShareVisbility_FriendsOnly"),
              },
              { data: P, label: j.c.Localize("#YIR_ShareVisbility_Public") },
            ],
            y = async (B) => {
              if (B.data !== c) {
                const { eResult: E } = await d(B.data),
                  O = E != G.R ? ra(E) : "";
                O && l(O);
              }
            };
          return (0, e.jsxs)(Ce.Z, {
            "flow-children": "column",
            children: [
              (0, e.jsx)("div", {
                className: (0, p.A)(R.PrivacyWarning, m ? R.Visible : ""),
                children: m
                  ? j.c.Localize("#YIR_ShareVisbility")
                  : j.c.Localize("#YIR_ShareModal_DisabledShareTtp"),
              }),
              (0, e.jsx)("div", {
                className: R.DropDownSizer,
                children: (0, e.jsx)(tr.ZU, {
                  strDropDownButtonClassName: R.DropdownButton,
                  strDropDownClassName: R.DropdownOption,
                  rgOptions: u,
                  selectedOption: c,
                  onChange: y,
                }),
              }),
              a && (0, e.jsx)("div", { className: R.Error, children: a }),
            ],
          });
        }
        function ra(o) {
          return o === G.S7 ? "Servers are busy, please try again later" : "";
        }
        function ia(o) {
          return `y${o % 100}`;
        }
        const sa = "l";
        function aa(o) {
          const { closeModal: t, steamId: r, nYear: a } = o,
            [l, c] = (0, f.useState)(),
            d = Br(r.ConvertTo64BitString(), a),
            m = (0, f.useMemo)(() => d === P || d === N, [d]),
            [u, y] = (0, f.useState)((0, ur.sfN)(w.TS.LANGUAGE)),
            B = (0, f.useMemo)(() => (0, ur.LgB)(u), [u]),
            E = ea(r.GetAccountID()),
            O = `https://s.team/${ia(a)}/${E}`,
            W = (0, f.useMemo)(() => {
              const yt = new URL(O);
              return yt.searchParams.set(sa, B), yt.href;
            }, [B, O]),
            U = () => {
              c(!0);
            };
          return l
            ? (0, e.jsx)(na.J, { eventLink: W, closeModal: t })
            : (0, e.jsx)(ta.o0, {
                strDescription: "",
                strTitle: j.c.Localize("#YIR_ShareModal_Title"),
                onCancel: t,
                onOK: t,
                bAlertDialog: !0,
                modalClassName: R.ShareModalDialogCtn,
                children: (0, e.jsxs)("div", {
                  className: R.ShareModal,
                  children: [
                    (0, e.jsx)("div", {
                      className: R.ShareLanguagePicker,
                      children: (0, e.jsx)("div", {
                        className: R.LangaugeDropdown,
                        children: (0, e.jsx)(_s.Ng, {
                          selectedLang: u,
                          fnOnLanguageChanged: y,
                          fnFilterLanguage: (yt) => yt !== ur.X51,
                        }),
                      }),
                    }),
                    (0, e.jsx)(oa, {
                      language: B,
                      steamId: r,
                      nYear: a,
                      shareUrl: W,
                    }),
                    (0, e.jsxs)("div", {
                      className: R.FooterCtn,
                      children: [
                        (0, e.jsx)(ti, { steamId: r, nYear: a }),
                        (0, e.jsx)("div", {
                          className: (0, p.A)(R.VisBorder, !m && R.Disabled),
                          children: w.TS.IN_MOBILE_WEBVIEW
                            ? (0, e.jsx)(ua, {
                                bCanShare: m,
                                shareUrl: W,
                                shareOnSteamActivityFeed: U,
                              })
                            : (0, e.jsx)(ma, {
                                nYear: a,
                                bCanShare: m,
                                shareUrl: W,
                                shortAccountCode: E,
                                language: B,
                                shareOnSteamActivityFeed: U,
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
              });
        }
        function oa(o) {
          const { language: t, steamId: r, nYear: a, shareUrl: l } = o,
            [c, d] = (0, f.useState)(0),
            [m, u] = (0, f.useState)(!1),
            { isLoading: y, data: B } = Li(r.ConvertTo64BitString(), a, t),
            E = B ? B.length - 1 : 0,
            O = `${w.TS.BASE_URL_SHARED_CDN}social_sharing/`,
            W = (Jt) => {
              c > 0 && (d(c - 1), Jt.stopPropagation());
            },
            U = (Jt) => {
              c < E && (d(c + 1), Jt.stopPropagation());
            },
            yt = (Jt) => {
              u(!0), Jt.stopPropagation();
            },
            Rt = (Jt) => {
              u(!1), Jt.stopPropagation();
            };
          return (
            (0, vn.E)("ArrowLeft", W),
            (0, vn.E)("Left", W),
            (0, vn.E)("ArrowRight", U),
            (0, vn.E)("Right", U),
            y
              ? (0, e.jsx)("div", {
                  className: (0, p.A)(R.CarouselCtn, R.LoadingCtn),
                  children: (0, e.jsx)(jn.t, { position: "center" }),
                })
              : B
                ? (0, e.jsxs)("div", {
                    className: R.CarouselCtn,
                    children: [
                      m &&
                        (0, e.jsx)(la, {
                          carouselIndex: c,
                          endPreviewImage: Rt,
                          onMoveLeft: W,
                          onMoveRight: U,
                          name: B[c].name,
                          url: `${O}${B[c].url_path}`,
                          maxIndex: E,
                        }),
                      (0, e.jsxs)("div", {
                        className: R.ImageArrowCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: (0, p.A)(
                              R.Arrow,
                              R.Left,
                              c === 0 && R.ArrowDisabled,
                            ),
                            onClick: W,
                            children: (0, e.jsx)(we.V5W, { angle: 270 }),
                          }),
                          (0, e.jsx)("div", {
                            className: (0, p.A)(
                              R.Arrow,
                              R.Right,
                              c === E && R.ArrowDisabled,
                            ),
                            onClick: U,
                            children: (0, e.jsx)(we.V5W, { angle: 90 }),
                          }),
                          (0, e.jsxs)("div", {
                            className: R.ImagesCtn,
                            children: [
                              (0, e.jsx)("div", {
                                className: (0, p.A)(R.Peek, R.LeftPeak),
                                children:
                                  c !== 0 &&
                                  (0, e.jsx)("img", {
                                    className: R.PeakImg,
                                    src: `${O}${B[c - 1].url_path}`,
                                  }),
                              }),
                              (0, e.jsx)("div", {
                                className: R.CenterImage,
                                children: (0, e.jsxs)("div", {
                                  className: R.ImgAndPreviewCtn,
                                  children: [
                                    (0, e.jsx)("div", {
                                      onClick: yt,
                                      className: R.PreviewMask,
                                      children: j.c.Localize(
                                        "#YIR_ShareModal_FullscreenPreview",
                                      ),
                                    }),
                                    (0, e.jsx)("img", {
                                      className: R.CenterImg,
                                      src: `${O}${B[c].url_path}`,
                                    }),
                                  ],
                                }),
                              }),
                              (0, e.jsx)("div", {
                                className: (0, p.A)(R.Peek, R.RightPeak),
                                children:
                                  c !== E &&
                                  (0, e.jsx)("img", {
                                    className: R.PeakImg,
                                    src: `${O}${B[c + 1].url_path}`,
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      w.TS.IN_MOBILE_WEBVIEW
                        ? (0, e.jsx)(da, {
                            imageUrl: `${O}${B[c].url_path}`,
                            shareUrl: l,
                          })
                        : w.TS.IN_CLIENT
                          ? null
                          : (0, e.jsx)(ca, {
                              imageUrl: `${O}${B[c].url_path}`,
                            }),
                      (0, e.jsx)("div", {
                        className: R.CarouselHintCtn,
                        children: B.map((Jt, Ct) =>
                          (0, e.jsx)(
                            "div",
                            {
                              className: (0, p.A)(
                                R.CarouselHint,
                                Ct === c ? R.ActiveHint : null,
                              ),
                            },
                            `${Ct}_hint`,
                          ),
                        ),
                      }),
                      (0, e.jsx)("div", {
                        className: R.FormatHint,
                        children: j.c.Localize(
                          `#YIR_ShareModal_ImageCaption_${B[c].name}`,
                        ),
                      }),
                    ],
                  })
                : (0, e.jsx)("div", {
                    className: (0, p.A)(R.CarouselCtn, R.LoadingCtn),
                    children: (0, e.jsx)("div", {
                      children: j.c.Localize(
                        "#YIR_ShareModal_FailedToGenerateImages",
                      ),
                    }),
                  })
          );
        }
        function la(o) {
          const {
            carouselIndex: t,
            maxIndex: r,
            onMoveLeft: a,
            onMoveRight: l,
            endPreviewImage: c,
            name: d,
            url: m,
          } = o;
          return (
            (0, vn.E)("Escape", c),
            (0, vn.E)("Esc", c),
            (0, e.jsx)("div", {
              className: R.PreviewImageCtn,
              children: (0, e.jsx)("div", {
                className: R.PreviewClickCtn,
                onClick: c,
                children: (0, e.jsxs)("div", {
                  className: R.PreviewAndIconCtn,
                  children: [
                    (0, e.jsx)("div", {
                      className: R.CloseIcon,
                      children: (0, e.jsx)(we.sED, {}),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, p.A)(
                        R.Arrow,
                        R.Left,
                        t === 0 && R.ArrowDisabled,
                      ),
                      onClick: a,
                      children: (0, e.jsx)(we.V5W, { angle: 270 }),
                    }),
                    (0, e.jsx)("div", {
                      className: (0, p.A)(
                        R.Arrow,
                        R.Right,
                        t === r && R.ArrowDisabled,
                      ),
                      onClick: l,
                      children: (0, e.jsx)(we.V5W, { angle: 90 }),
                    }),
                    (0, e.jsx)("img", {
                      className: R[`PreviewImage_${d}`],
                      src: m,
                    }),
                  ],
                }),
              }),
            })
          );
        }
        function ca(o) {
          const t = () => {
            fetch(o.imageUrl)
              .then((r) => r.blob())
              .then((r) => URL.createObjectURL(r))
              .then((r) => {
                const a = document.createElement("a");
                (a.href = r),
                  (a.download = ""),
                  document.body.appendChild(a),
                  a.click(),
                  document.body.removeChild(a);
              });
          };
          return (0, e.jsxs)("div", {
            className: R.InteractButton,
            onClick: t,
            children: [
              (0, e.jsx)(we.MQO, { className: R.InteractButtonIcon }),
              (0, e.jsx)("span", {
                className: (0, p.A)(R.InteractButtonText),
                children: j.c.Localize("#YIR_ShareModal_SaveImage"),
              }),
            ],
          });
        }
        function da(o) {
          const { imageUrl: t, shareUrl: r } = o,
            a = () => {
              const l = Reflect.get(window, "ReactNativeWebView");
              if (l?.postMessage) {
                const c = {
                  event_name: "shareimage",
                  link: t,
                  url: t,
                  subject: j.c.Localize("#YIR_ShareModal_MobileSubject"),
                  message: r,
                  title: j.c.Localize("#YIR_ShareModal_MobileMessage"),
                };
                l.postMessage(JSON.stringify(c));
                return;
              }
            };
          return (0, e.jsxs)("div", {
            className: R.InteractButton,
            onClick: a,
            children: [
              (0, e.jsx)(we.SYj, { className: R.InteractButtonIcon }),
              (0, e.jsx)("span", {
                className: (0, p.A)(R.InteractButtonText),
                children: j.c.Localize("#YIR_ShareModal_ShareImage"),
              }),
            ],
          });
        }
        function ma(o) {
          const {
              bCanShare: t,
              shareUrl: r,
              shortAccountCode: a,
              language: l,
              nYear: c,
              shareOnSteamActivityFeed: d,
            } = o,
            [m, u] = (0, f.useState)(!1),
            y = () => {
              navigator.clipboard.writeText(r), u(!0);
            };
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)("div", {
                className: R.ShareURLTitle,
                children: j.c.Localize("#YIR_ShareModal_YourLink"),
              }),
              (0, e.jsxs)("div", {
                className: R.ShareURLCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: R.ShareShortUrl,
                    children: r,
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, p.A)(R.ShareLinkButton),
                    onClick: y,
                    children: [
                      (0, e.jsx)(we.SYj, { className: R.ShareLinkIcon }),
                      (0, e.jsx)("span", {
                        className: (0, p.A)(R.ShareLinkText),
                        children: j.c.Localize(
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
                className: (0, p.A)(R.SocialButtons, R.SteamButtons),
                children: [
                  (0, e.jsxs)("div", {
                    onClick: d,
                    className: (0, p.A)(R.ShareLinkButton, R.FeedBtn),
                    children: [
                      (0, e.jsx)(we.Qte, { className: R.ShareLinkIcon }),
                      (0, e.jsx)("span", {
                        className: (0, p.A)(R.ShareLinkText),
                        children: j.c.Localize(
                          "#YIR_ShareModal_ShareOnFriendsActivity",
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("a", {
                    href: `${w.TS.COMMUNITY_BASE_URL}profiles/${w.iA.steamid}/edit/showcases`,
                    className: (0, p.A)(R.ShareLinkButton, R.FeedBtn),
                    children: [
                      (0, e.jsx)(we.KJW, { className: R.ShareLinkIcon }),
                      (0, e.jsx)("span", {
                        className: (0, p.A)(R.ShareLinkText),
                        children: j.c.Localize("#YIR_ShareModal_AddShowcase"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
        function ua(o) {
          const { bCanShare: t, shareUrl: r, shareOnSteamActivityFeed: a } = o,
            l = () => {
              const c = Reflect.get(window, "ReactNativeWebView");
              if (c?.postMessage) {
                const d = {
                  event_name: "share",
                  link: r,
                  url: r,
                  subject: j.c.Localize("#YIR_ShareModal_MobileSubject"),
                  message: j.c.Localize("#YIR_ShareModal_MobileMessage"),
                  title: j.c.Localize("#YIR_ShareModal_MobileMessage"),
                };
                c.postMessage(JSON.stringify(d));
                return;
              }
            };
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsxs)("div", {
              className: R.MobileCtn,
              children: [
                (0, e.jsxs)("div", {
                  className: (0, p.A)(R.ShareLinkButton, !t && R.Disabled),
                  onClick: l,
                  children: [
                    (0, e.jsx)(we.SYj, { className: R.ShareLinkIcon }),
                    (0, e.jsx)("span", {
                      className: (0, p.A)(R.ShareLinkText),
                      children: j.c.Localize("#YIR_ShareModal_ShareLink"),
                    }),
                  ],
                }),
                (0, e.jsxs)("div", {
                  onClick: a,
                  className: (0, p.A)(R.ShareLinkButton, !t && R.Disabled),
                  children: [
                    (0, e.jsx)(we.Qte, { className: R.ShareLinkIcon }),
                    (0, e.jsx)("span", {
                      className: (0, p.A)(R.ShareLinkText),
                      children: j.c.Localize(
                        "#YIR_ShareModal_ShareOnFriendsActivity",
                      ),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        function gr(o) {
          return o >= 2024;
        }
        function ga(o) {
          const { userYearInReview: t } = o,
            r = t.GetYear(),
            a = t.GetPlayTimeStats().total_stats,
            l = t.GetPlayTimeStats().demos_played || 0,
            c = t.GetPlayTimeStats().playtests_played || 0,
            d = t.GetFilteredGameSummary(),
            m = t.GetPlayTimeStats().summary_stats?.total_achievements || 0,
            u = d.filter((Ct) => Ct.new_this_year).length || 0,
            y = t.GetPlayTimeStats().playtime_streak,
            B = t.GetTopGamesShown(),
            E = Ie(),
            O = (0, f.useMemo)(() => B.slice(0, 5), [B]),
            W = (0, f.useMemo)(() => O.map((Ct) => Ct.appid), [O]),
            { data: U } = un(W),
            yt = O.map((Ct, be) =>
              U?.has(Ct.appid)
                ? (0, e.jsx)(
                    Ma,
                    { gameStat: Ct, gridClass: `Game${be}` },
                    `${be}_${Ct.appid}`,
                  )
                : null,
            ).filter((Ct) => Ct !== null),
            Rt = [
              ha(m, t),
              ya(r, a),
              va(
                r,
                y,
                gr(r) ? t.GetPreviousYearSummary()?.longest_streak : void 0,
              ),
            ].filter((Ct) => Ct !== null),
            Jt = (0, e.jsx)(
              Ba,
              {
                rgGamesLength: d.length,
                nNewGames: u,
                nDemoPlayed: l,
                nPlaytestPlayed: c,
                nYear: t.GetYear(),
                nPreviousYearsGames: gr(r)
                  ? t.GetPreviousYearSummary()?.games_played
                  : void 0,
              },
              "overview",
            );
          return (0, e.jsx)(ze, {
            children: (0, e.jsxs)("div", {
              className: (0, p.A)(v().YearInReviewContent, v().SummaryArea),
              children: [
                (0, e.jsx)(pa, {
                  rgGamesLength: d.length,
                  nNewGames: u,
                  totalAchievementUnlocked: m,
                  nTotalPlaytimeSeconds: a.total_playtime_seconds || 0,
                  nTotalPercentagePlaytimex100: a.total_playtime_percentagex100,
                }),
                d.length !== 1 &&
                  (0, e.jsx)(e.Fragment, {
                    children: (0, e.jsxs)("div", {
                      className: v().SummaryGridCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: v().SectionSubTitle,
                          children: E("#YIR_YourSummary_SubTitle"),
                        }),
                        (0, e.jsx)(fa, {
                          overview: Jt,
                          statFillers: Rt,
                          gameFillers: yt,
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          });
        }
        function fa(o) {
          let { statFillers: t, gameFillers: r, overview: a } = o;
          return r.length > 2 && t.length > 1
            ? (0, e.jsx)("div", {
                className: v().SummaryGridStandard,
                children: [a, t[0], t[1], r[0], r[1], r[2]],
              })
            : r.length > 1 && t.length > 2
              ? (0, e.jsx)("div", {
                  className: v().SummaryGridStandard,
                  children: [a, t[1], t[2], t[0], r[0], r[1]],
                })
              : t.length == 1 && r.length > 3
                ? (0, e.jsx)("div", {
                    className: v().SummaryGridStandard,
                    children: [a, t[0], r[0], r[1], r[2], r[3]],
                  })
                : r.length > 1
                  ? (0, e.jsx)("div", {
                      className: v().SummaryGridSparse,
                      children: [a, r[0], r[1]],
                    })
                  : null;
        }
        function ha(o, t) {
          return o > 0
            ? (0, e.jsx)(xa, { userYearInReview: t }, "totalAchievements")
            : null;
        }
        function va(o, t, r) {
          return t &&
            typeof t.longest_consecutive_days == "number" &&
            typeof r == "number" &&
            t.longest_consecutive_days <= 1 &&
            r <= 1
            ? null
            : t &&
                typeof t.longest_consecutive_days == "number" &&
                t.longest_consecutive_days > 0 &&
                !on()
              ? (0, e.jsx)(
                  ja,
                  { oLongestStreak: t, nYear: o, nPrevLongestStreamDays: r },
                  "longestStreak",
                )
              : null;
        }
        const ei = 1e3;
        function ya(o, t) {
          const r =
              t.controller_playtime_percentagex100 +
              t.deck_playtime_percentagex100,
            a =
              t.total_playtime_percentagex100 -
              t.controller_playtime_percentagex100 -
              t.vr_playtime_percentagex100 -
              t.deck_playtime_percentagex100;
          return r < ei || a < ei
            ? null
            : (0, e.jsx)(ba, { oTotalStats: t, nYear: o }, "hardwareTime");
        }
        function pa(o) {
          const {
              rgGamesLength: t,
              nNewGames: r,
              totalAchievementUnlocked: a,
              nTotalPlaytimeSeconds: l,
              nTotalPercentagePlaytimex100: c,
            } = o,
            d = Ie();
          let m;
          return (
            r > 50 && a > 100
              ? (m = d("#YIR_YourSummary_GamesTonNewAchievements"))
              : r > 20 && a > 100
                ? (m = d("#YIR_YourSummary_GamesNewAchievements"))
                : r > 20 && l > 36e4
                  ? (m = d("#YIR_YourSummary_GamesNew"))
                  : t > 10 && r < 5
                    ? (m = d("#YIR_YourSummary_GamesManyTriedNew"))
                    : t > 10
                      ? (m = d("#YIR_YourSummary_GamesMany"))
                      : r > 1 &&
                          r < 5 &&
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
            (0, e.jsx)("div", { className: v().SectionTitle, children: m })
          );
        }
        function Ba(o) {
          const t = Ui(),
            {
              rgGamesLength: r,
              nNewGames: a,
              nDemoPlayed: l,
              nPlaytestPlayed: c,
              nYear: d,
              nPreviousYearsGames: m,
            } = o,
            u = _t(),
            y = dn("bg_2023.svg");
          let B = v().NormalNumbers;
          return (
            r > 99999 ? (B = v().SixNumbers) : r > 99 && (B = v().ThreeNumbers),
            (0, e.jsx)("div", {
              className: (0, p.A)(v().SummaryCtnShadow, u.SummaryCtnShadow),
              children: (0, e.jsxs)("div", {
                className: (0, p.A)(
                  v().SummaryCtn,
                  v().GridItem,
                  u.GridItem,
                  v().OverviewBlock,
                  u.SummaryCtn,
                ),
                children: [
                  (0, e.jsx)("div", { className: v().SubtleBorder }),
                  (0, e.jsx)("div", {
                    className: (0, p.A)(
                      v().BackgroundImage,
                      v().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${y})` },
                  }),
                  (0, e.jsxs)("div", {
                    className: v().SummaryBlockTitle,
                    children: [
                      (0, e.jsx)("div", {
                        className: v().RewindHeader,
                        children: j.c.LocalizeReact(
                          "#YearInReview_SteamRewindHeader",
                          (0, e.jsx)("span", {
                            className: (0, p.A)(v().UserName, u.UserName),
                            children: j.c.Localize(
                              "#YearInReview_PossessiveUserName",
                              t,
                            ),
                          }),
                          qe.Z.Localize("#date_year", d),
                        ),
                      }),
                      (0, e.jsxs)("div", {
                        className: (0, p.A)(v().StatBox, v().Big),
                        children: [
                          (0, e.jsx)("div", {
                            className: (0, p.A)(v().BigNum, B),
                            children: (0, Me.D)(r),
                          }),
                          (0, e.jsx)("div", {
                            className: v().SmallText,
                            children: j.c.LocalizePlural(
                              "#YIR_YourSummary_Games",
                              r,
                            ),
                          }),
                          (0, e.jsx)(fr, {
                            strTokenPrefix: "#YIR_YourSummary_PrevYear_Game",
                            nCurValue: r,
                            nPrevValue: m,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: v().SubSummaryCtn,
                    children: [
                      !!a &&
                        (0, e.jsxs)("div", {
                          className: v().StatBox,
                          children: [
                            (0, e.jsx)("div", {
                              className: v().BigNum,
                              children: (0, Me.D)(a),
                            }),
                            (0, e.jsx)("div", {
                              className: v().SmallText,
                              children: j.c.LocalizePlural(
                                "#YIR_YourSummary_GamesFirst",
                                a,
                              ),
                            }),
                          ],
                        }),
                      !!l &&
                        (0, e.jsxs)("div", {
                          className: v().StatBox,
                          children: [
                            (0, e.jsx)("div", {
                              className: v().BigNum,
                              children: (0, Me.D)(l),
                            }),
                            (0, e.jsx)("div", {
                              className: v().SmallText,
                              children: j.c.LocalizePlural(
                                "#YIR_YourSummary_Demos",
                                l,
                              ),
                            }),
                          ],
                        }),
                      !!c &&
                        (0, e.jsxs)("div", {
                          className: v().StatBox,
                          children: [
                            (0, e.jsx)("div", {
                              className: v().BigNum,
                              children: (0, Me.D)(c),
                            }),
                            (0, e.jsx)("div", {
                              className: v().SmallText,
                              children: j.c.LocalizePlural(
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
        function fr(o) {
          const { strTokenPrefix: t, nCurValue: r, nPrevValue: a } = o;
          if (!(a == null || a === 0 || r === 0))
            return r == a
              ? null
              : r < a
                ? (0, e.jsxs)("div", {
                    className: v().CompareCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, p.A)(v().CompareArrow, v().ArrowDownCtn),
                      }),
                      (0, e.jsx)("div", {
                        className: v().CompareText,
                        children: j.c.LocalizePlural(
                          `${t}Less`,
                          a - r,
                          (0, Me.D)(a - r),
                        ),
                      }),
                    ],
                  })
                : (0, e.jsxs)("div", {
                    className: v().CompareCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, p.A)(v().CompareArrow, v().ArrowUpCtn),
                      }),
                      (0, e.jsx)("div", {
                        className: v().CompareText,
                        children: j.c.LocalizePlural(
                          `${t}More`,
                          r - a,
                          (0, Me.D)(r - a),
                        ),
                      }),
                    ],
                  });
        }
        function xa(o) {
          const { userYearInReview: t } = o,
            r = t.GetPlayTimeStats().summary_stats,
            a = t.GetFilteredGameSummary(),
            l = t.GetYear(),
            c = _t();
          if (!r) return null;
          const d = dn("achievement_grid_02.webp");
          let m = v().NormalNumbers;
          return (
            typeof r.total_achievements == "number" &&
            r.total_achievements > 99999
              ? (m = v().SixNumbers)
              : typeof r.total_achievements == "number" &&
                r.total_achievements > 99 &&
                (m = v().ThreeNumbers),
            (0, e.jsx)("div", {
              className: (0, p.A)(v().SummaryCtnShadow, c.SummaryCtnShadow),
              children: (0, e.jsxs)("div", {
                className: (0, p.A)(
                  v().SummaryCtn,
                  v().GridItem,
                  c.GridItem,
                  v().Achievements,
                  v().AchievementBlock,
                  c.SummaryCtn,
                  c.AchievementBlock,
                ),
                children: [
                  (0, e.jsx)("div", { className: v().SubtleBorder }),
                  (0, e.jsx)("div", {
                    className: (0, p.A)(
                      v().BackgroundImage,
                      v().BackgroundImageCover,
                    ),
                    style: { backgroundImage: `url(${d})` },
                  }),
                  (0, e.jsxs)("div", {
                    className: (0, p.A)(
                      v().StatBox,
                      v().SummaryBlockHugeNumCtn,
                    ),
                    children: [
                      (0, e.jsx)("div", {
                        className: (0, p.A)(v().BigNum, m),
                        children: (0, Me.D)(r.total_achievements),
                      }),
                      (0, e.jsx)("div", {
                        className: v().SmallText,
                        children: j.c.LocalizePlural(
                          "#YIR_YourSummary_Achievement",
                          r.total_achievements,
                        ),
                      }),
                      (0, e.jsx)(fr, {
                        strTokenPrefix: "#YIR_YourSummary_PrevYear_Ach",
                        nCurValue: r.total_achievements,
                        nPrevValue: gr(l)
                          ? t.GetPreviousYearSummary()?.unlocked_achievements
                          : void 0,
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: v().SummaryBlockExtrasCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: v().StatBox,
                        children: [
                          (0, e.jsx)("div", {
                            className: (0, p.A)(v().BigNum),
                            children: (0, Me.D)(
                              r.total_games_with_achievements || 0,
                            ),
                          }),
                          (0, e.jsx)("div", {
                            className: v().SmallText,
                            children: j.c.LocalizePlural(
                              "#YIR_YourSummary_Achievement_Games",
                              r.total_games_with_achievements,
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: v().StatBox,
                        children: [
                          (0, e.jsx)("div", {
                            className: v().BigNum,
                            children: (0, Me.D)(r.total_rare_achievements || 0),
                          }),
                          (0, e.jsx)("div", {
                            className: v().SmallText,
                            children: j.c.LocalizePlural(
                              "#YIR_YourSummary_Achievement_Rare",
                              r.total_rare_achievements,
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
        function ja(o) {
          const { oLongestStreak: t, nPrevLongestStreamDays: r } = o,
            a = t.rtime_start ?? 0,
            l = t.longest_consecutive_days ?? 0,
            c = Or(),
            d = c(a),
            m = c(a + l * 24 * 60 * 60),
            u = _t();
          if (on()) return null;
          const y = dn("streak_bg.jpg");
          return (0, e.jsx)("div", {
            className: (0, p.A)(v().SummaryCtnShadow, u.SummaryCtnShadow),
            children: (0, e.jsxs)("div", {
              className: (0, p.A)(
                v().SummaryCtn,
                v().GridItem,
                u.GridItem,
                v().StreakBlock,
                u.SummaryCtn,
                u.StreakBlock,
              ),
              children: [
                (0, e.jsx)("div", { className: v().SubtleBorder }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(
                    v().BackgroundImage,
                    v().BackgroundImageCover,
                  ),
                  style: { backgroundImage: `url(${y})` },
                }),
                (0, e.jsxs)("div", {
                  className: (0, p.A)(v().StatBox, v().SummaryBlockHugeNumCtn),
                  children: [
                    (0, e.jsx)("div", {
                      className: v().BigNum,
                      children: j.c.LocalizePlural(
                        "#YIR_Game_LongestStreak_DaysPlayed",
                        l,
                      ),
                    }),
                    (0, e.jsx)("div", {
                      className: v().SmallText,
                      children: j.c.Localize("#YIR_YourSummary_Stat_Streak"),
                    }),
                    (0, e.jsx)("div", {
                      className: v().SmallLightText,
                      children: j.c.Localize(
                        "#YIR_Game_LongestStreak_FromDateToDate",
                        d,
                        m,
                      ),
                    }),
                    (0, e.jsx)(fr, {
                      strTokenPrefix: "#YIR_YourSummary_PrevYear_Day",
                      nCurValue: l,
                      nPrevValue: r,
                    }),
                  ],
                }),
                (0, e.jsx)("div", {
                  className: v().SummaryBlockExtrasCtn,
                  children: (0, e.jsxs)("div", {
                    className: (0, p.A)(v().StatBox, v().LongestStreakStat),
                    children: [
                      (0, e.jsx)("div", {
                        className: v().BigNum,
                        children: (0, Me.D)(t.streak_games.length),
                      }),
                      (0, e.jsx)("div", {
                        className: v().SmallText,
                        children: j.c.LocalizePlural(
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
        function ba(o) {
          const { oTotalStats: t, nYear: r } = o,
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
            m = dn("keyboard.png?v=3"),
            u = dn("controllers.png?v=2"),
            y = _t();
          let B, E, O;
          return (
            Math.floor(c / 100) < 40
              ? ((B = 40), (E = v().Small), (O = v().Large))
              : Math.floor(c / 100) > 60
                ? ((B = 60), (E = v().Large), (O = v().Small))
                : (B = c / 100),
            (0, e.jsx)("div", {
              className: (0, p.A)(v().SummaryCtnShadow, y.SummaryCtnShadow),
              children: (0, e.jsxs)("div", {
                className: (0, p.A)(
                  v().HardwareSummary,
                  v().SummaryCtn,
                  v().GridItem,
                  y.GridItem,
                  v().HardwareBlock,
                  y.SummaryCtn,
                  y.HardwareBlock,
                ),
                children: [
                  (0, e.jsx)("div", { className: v().SubtleBorder }),
                  (0, e.jsxs)("div", {
                    className: v().ContentCtn,
                    children: [
                      (0, e.jsxs)("div", {
                        className: v().KeyboardPortion,
                        children: [
                          (0, e.jsx)("div", {
                            className: v().BackgroundImage,
                            style: { background: `url(${m}) bottom` },
                          }),
                          (0, e.jsx)("div", {
                            className: (0, p.A)(v().Stat, O),
                            children: l,
                          }),
                          (0, e.jsx)("div", {
                            className: (0, p.A)(v().Subtitle, O),
                            children: j.c.Localize(
                              "#YIR_HowYouPlayed_Keyboard_Generic",
                            ),
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: v().ControllerPortion,
                        style: { height: B + "%" },
                        children: [
                          (0, e.jsx)("div", {
                            className: v().BackgroundImage,
                            style: { background: `url(${u}) top` },
                          }),
                          (0, e.jsx)("div", {
                            className: (0, p.A)(v().Stat, E),
                            children: d,
                          }),
                          (0, e.jsx)("div", {
                            className: (0, p.A)(v().Subtitle, E),
                            children: j.c.Localize(
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
        function Ma(o) {
          const { gameStat: t, gridClass: r } = o,
            { appid: a } = t,
            { item: l } = Xe(a),
            c = Rr(0, [a]),
            d = _t();
          if (!l) return null;
          const m = (0, Qe.CB)(l.assets, "library_hero"),
            u = Math.trunc(t.stats.total_sessions);
          return (0, e.jsx)("div", {
            className: (0, p.A)(v().SummaryCtnShadow, d.SummaryCtnShadow),
            children: (0, e.jsxs)("div", {
              className: (0, p.A)(
                v().SummaryCtn,
                v().GridItem,
                d.GridItem,
                v()[r],
                d.SummaryCtn,
                d[r],
              ),
              onClick: c,
              children: [
                (0, e.jsx)("div", { className: v().SubtleBorder }),
                (0, e.jsx)("div", {
                  className: (0, p.A)(v().BackgroundImage, d.BackgroundImage),
                  style: { backgroundImage: `url(${m})` },
                }),
                (0, e.jsx)("div", {
                  className: v().SummaryBlockGameName,
                  children: l.info.name,
                }),
                (0, e.jsxs)("div", {
                  className: v().SummaryBlockExtrasCtn,
                  children: [
                    (0, e.jsx)(Ia, {
                      percentVal: t.stats.total_playtime_percentagex100,
                      subToken: "#YIR_Game_PlayStat",
                    }),
                    (0, e.jsxs)("div", {
                      className: v().StatBox,
                      children: [
                        (0, e.jsx)("div", {
                          className: v().BigNum,
                          children: (0, Me.D)(u),
                        }),
                        (0, e.jsx)("div", {
                          className: v().SmallText,
                          children: j.c.Localize(
                            u == 1
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
        function Ia(o) {
          const { percentVal: t, subToken: r, className: a } = o,
            l = De(t),
            c = `${r}_Percent`;
          return (0, e.jsxs)("div", {
            className: (0, p.A)(v().StatBox, a),
            children: [
              (0, e.jsx)("div", { className: v().BigNum, children: l }),
              (0, e.jsx)("div", {
                className: v().SmallText,
                children: j.c.Localize(c),
              }),
            ],
          });
        }
        var Ta = i(1012),
          ni = i(82907),
          ri = i(49953),
          ii = i(55241),
          hr = i(71026),
          si = i(36058),
          Fe = i(44367);
        const Aa = f.memo((o) => {
            const { data: t, topMonthlyAppsAndRanks: r } = o,
              a = _t(),
              l = (0, f.useCallback)(
                (d, m) => (t[m]?.date ? (0, Dn.oL)(t[m].date) : ""),
                [t],
              ),
              c = (0, f.useRef)(void 0);
            return (0, e.jsx)(fn.u, {
              width: "100%",
              height: "100%",
              children: (0, e.jsxs)(ni.X, {
                data: t,
                margin: { top: 25, left: 0, right: 0, bottom: 0 },
                barGap: 30,
                children: [
                  (0, e.jsx)(ri.d, { vertical: !1, stroke: "#a0aab6" }),
                  (0, e.jsx)(ii.h, {
                    tickFormatter: De,
                    tick: { fill: "white" },
                    axisLine: !0,
                  }),
                  (0, e.jsx)(Rn.m, {
                    wrapperStyle: { outline: "none" },
                    allowEscapeViewBox: { x: !1, y: !0 },
                    isAnimationActive: !1,
                    offset: 0,
                    content: (d) =>
                      (0, e.jsx)(wa, {
                        active: d.active,
                        payload: d.payload,
                        hoveredBarIDRef: c,
                      }),
                  }),
                  (0, e.jsx)(hr.y, {
                    barSize: 60,
                    dataKey: `topPlayedPercentBreakdownPerMonth.${z}`,
                    name: z,
                    stackId: "a",
                    fill: a.monthOthersColor,
                    onMouseEnter: () => (c.current = z),
                    onMouseOut: () => (c.current = void 0),
                  }),
                  r.map((d, m) =>
                    (0, e.jsx)(
                      hr.y,
                      {
                        barSize: 60,
                        dataKey: `topPlayedPercentBreakdownPerMonth.${d.appid}`,
                        name: d.appid.toString(),
                        stackId: "a",
                        fill: a[`topApp_${d.rank}`],
                        onMouseEnter: () => (c.current = d.appid.toString()),
                        onMouseOut: () => (c.current = void 0),
                      },
                      `${m}`,
                    ),
                  ),
                  (0, e.jsx)(si.W, {
                    interval: 0,
                    tick: (0, e.jsx)(oi, {}),
                    tickFormatter: l,
                  }),
                ],
              }),
            });
          }),
          vr = 7;
        function wa(o) {
          const { active: t, payload: r, hoveredBarIDRef: a } = o,
            l = _t(),
            c = Ie();
          if (t && r && r.length) {
            const d = r[0].payload.date.getUTCMonth(),
              m = j.c.Localize(`#YIR_MonthlyCharts_MonthNoun_${d + 1}`),
              u = r[0].payload.topPlayedPercentBreakdownPerMonth[T],
              y = Object.keys(r[0].payload.otherPlayedPercentBreakdownForMonth),
              B = r[0].payload.topPlayedRelativePercentBreakdownForMonth,
              E = r.find((Rt) => Rt.name === a.current),
              W = E?.name === z,
              U = r
                .map((Rt) => {
                  const Jt = Rt.name,
                    Ct = B[Rt.name];
                  if (Jt === z) {
                    const be = W && r.length == 1;
                    return (0, e.jsxs)(
                      f.Fragment,
                      {
                        children: [
                          !be &&
                            (0, e.jsx)("div", {
                              className: (0, p.A)(
                                Rt === E && Fe.HoveredGameLabel,
                              ),
                              children: yr(
                                Ct,
                                m,
                                "#YIR_MonthlyCharts_OtherGamesTooltip",
                              ),
                            }),
                          W &&
                            y
                              .slice(0, vr)
                              .map((Pt) =>
                                (0, e.jsx)(
                                  Na,
                                  { appId: Pt, className: Fe.HoveredGameLabel },
                                  Pt,
                                ),
                              ),
                          W &&
                            y.length > vr &&
                            (0, e.jsx)("div", {
                              className: Fe.HoveredGameLabel,
                              children: j.c.Localize(
                                "#YIR_MonthlyCharts_OtherGamesTooltip_AndMore",
                                y.length - vr,
                              ),
                            }),
                        ],
                      },
                      Jt,
                    );
                  }
                  return Rt.value
                    ? (0, e.jsx)(
                        za,
                        {
                          appId: Jt,
                          className: (0, p.A)(Rt === E && Fe.HoveredGameLabel),
                          date: m,
                          value: Ct,
                        },
                        Jt,
                      )
                    : null;
                })
                .reverse(),
              yt = U.length == 1 && y.length > 0;
            return (0, e.jsxs)(tn.t1, {
              style: { background: E?.color ?? l.monthOthersColor },
              className: Fe.MonthlyChartTooltipCtn,
              children: [
                (0, e.jsx)("div", { className: Fe.TooltipBackgroundOverlay }),
                (0, e.jsx)("div", {
                  className: Fe.TooltipImageContainer,
                  children:
                    E &&
                    (0, e.jsxs)(e.Fragment, {
                      children: [
                        !W && (0, e.jsx)(ai, { appId: E.name }),
                        W && (0, e.jsx)(La, { appIds: y.slice(0, 7) }),
                      ],
                    }),
                }),
                (0, e.jsxs)("div", {
                  className: Fe.TotalPlaytimeContainer,
                  children: [
                    (0, e.jsx)("div", {
                      className: $.TotalPlaytime,
                      children: yr(
                        u,
                        m,
                        "#YIR_MonthlyCharts_PlayedTotalTooltip",
                      ),
                    }),
                    !yt &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: j.c.Localize(
                              "#YIR_MonthlyCharts_PlayedSubtitleTooltip",
                            ),
                          }),
                          U,
                        ],
                      }),
                    yt &&
                      E &&
                      (0, e.jsxs)(e.Fragment, {
                        children: [
                          (0, e.jsx)("div", {
                            children: c(
                              "#YIR_MonthlyCharts_OtherGamesTooltip_Only",
                            ),
                          }),
                          U,
                        ],
                      }),
                  ],
                }),
              ],
            });
          }
          return null;
        }
        function La({ appIds: o }) {
          return (0, e.jsx)("div", {
            className: Fe.OtherGamesStack,
            children: o?.map((t, r) =>
              (0, e.jsx)(
                ai,
                {
                  appId: t,
                  style: { zIndex: o.length - r, "--stack-position": r },
                },
                t,
              ),
            ),
          });
        }
        function ai({ appId: o, style: t }) {
          const { item: r } = Xe(parseInt(o));
          if (!r?.assets) return null;
          const a = (0, Qe.CB)(r.assets, "library_capsule") || zr;
          return (0, e.jsx)("img", {
            style: t,
            className: Fe.CapsuleImg,
            src: a,
          });
        }
        function Na({ appId: o, className: t }) {
          const { item: r } = Xe(parseInt(o));
          return r
            ? (0, e.jsx)("div", { className: t, children: r.info.name }, o)
            : null;
        }
        function za(o) {
          const { appId: t, className: r, value: a, date: l } = o,
            { item: c } = Xe(parseInt(t));
          return c
            ? (0, e.jsx)(
                "div",
                {
                  className: r,
                  children: yr(
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
        const Ea = f.memo((o) => {
          const { data: t, name: r, color: a } = o,
            l = !0,
            c = _t(),
            d = (0, f.useCallback)(
              (m, u) => (t[u]?.date ? (0, Dn.oL)(t[u].date) : ""),
              [t],
            );
          return (0, e.jsx)(fn.u, {
            width: "100%",
            height: "100%",
            children: (0, e.jsxs)(ni.X, {
              data: t,
              margin: { top: 25, left: 0, right: 0, bottom: 0 },
              barGap: 30,
              children: [
                (0, e.jsx)(Rn.m, {
                  wrapperStyle: {
                    outline: "1px solid " + (a ?? c.chartAccentColorAlt),
                  },
                  allowEscapeViewBox: { x: !1, y: !0 },
                  isAnimationActive: !1,
                  content: (m) =>
                    (0, e.jsx)(Pa, {
                      active: m.active,
                      payload: m.payload,
                      name: r,
                    }),
                }),
                (0, e.jsx)(ri.d, { vertical: !1, stroke: "#a0aab6" }),
                (0, e.jsx)(ii.h, {
                  tickFormatter: l ? De : cr.NO,
                  tick: { fill: "white" },
                  axisLine: !0,
                }),
                (0, e.jsx)(hr.y, {
                  barSize: 60,
                  dataKey: l ? "percent" : "value",
                  fill: a ?? c.chartAccentColorAlt,
                }),
                (0, e.jsx)(si.W, {
                  interval: 0,
                  tick: (0, e.jsx)(oi, {}),
                  tickFormatter: d,
                  color: "#ffffff",
                }),
              ],
            }),
          });
        });
        function oi(o) {
          const { x: t, y: r, payload: a } = o,
            l = o.tickFormatter(a.value, a.index);
          return (0, e.jsx)("g", {
            transform: `translate(${t},${r})`,
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
        function Pa(o) {
          const { active: t, payload: r, name: a } = o,
            l = !0,
            c = _t(),
            d = r[0];
          if (t && d?.value) {
            const m = d.payload.date.getUTCMonth(),
              u = j.c.Localize(`#YIR_MonthlyCharts_MonthNoun_${m + 1}`),
              y = d.value,
              B = l
                ? "#YIR_MonthlyCharts_TopPlayedGameTooltip_Percent"
                : "#YIR_MonthlyCharts_TopPlayedTooltip_Time";
            return (0, e.jsx)(tn.t1, {
              style: { background: "#0e1014" },
              children: (0, e.jsx)(
                "div",
                {
                  style: { color: c.chartAccentColor },
                  children: j.c.LocalizeReact(
                    B,
                    (0, e.jsx)("b", { children: l ? De(y) : (0, Me.D)(y) }),
                    u,
                    a,
                  ),
                },
                a,
              ),
            });
          }
          return null;
        }
        function yr(o, t, r, ...a) {
          const l = `${r}_Percent`;
          return j.c.LocalizeReact(
            l,
            (0, e.jsx)("b", { children: De(o) }),
            t,
            ...a,
          );
        }
        var Yn = i(77408);
        function Oa(o) {
          const { userYearInReview: t } = o,
            r = Ie(),
            a = t.GetChartMonthlyData(),
            l = t.GetTopGameIdsAndRanks(),
            c = t.GetPlayTimeStats().games?.length ?? 0;
          return (0, e.jsx)("div", {
            className: Yn.Section,
            children:
              c > 1 &&
              (0, e.jsxs)(ze, {
                className: Yn.AnimationVisibilityCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: Re.SectionTitle,
                    children: r("#YIR_MonthlyCharts_Title"),
                  }),
                  (0, e.jsx)("div", {
                    className: Yn.ChartContainer,
                    children: (0, e.jsx)("div", {
                      className: Yn.Chart,
                      children: (0, e.jsx)(Aa, {
                        data: a,
                        topMonthlyAppsAndRanks: l,
                      }),
                    }),
                  }),
                ],
              }),
          });
        }
        var Da = i(24179),
          Sa = i(54528),
          Wa = i(96362);
        function Ra(o) {
          const t = br(o),
            r = _n(o, !1);
          return Ca(t?.all_time_unlocked_achievements, r?.length ?? 0);
        }
        function Ca(o, t) {
          return typeof o == "number" && o > 0 && t > 0 && t <= o;
        }
        const Ua = 2022;
        var Ya = i(72739),
          Ha = i(29522),
          li = i(40426),
          Ka = i(44533),
          rn = i.n(Ka);
        function Ga(o) {
          const {
              imgURL: t,
              glow: r,
              pauseAnimation: a,
              hidden: l,
              alt: c,
              className: d,
              ...m
            } = o,
            [u, y] = f.useState(!1),
            B = f.useCallback((O) => {
              O &&
                (O.complete
                  ? y(!0)
                  : (O.onload = () => {
                      y(!0);
                    }));
            }, []);
          if (l)
            return (0, e.jsx)("div", {
              className: rn().HiddenLabel,
              ...m,
              children: "?",
            });
          const E = u && r;
          return (0, e.jsxs)("div", {
            className: (0, p.A)(
              rn().AchievementIconWrapper,
              d,
              a && rn().RareAchievementNoAnimation,
            ),
            ...m,
            children: [
              E &&
                (0, e.jsx)("div", {
                  className: rn().RareAchievementIconGlowContainerRoot,
                  children: (0, e.jsx)("div", {
                    className: rn().RareAchievementIconGlowContainer,
                    children: (0, e.jsx)("div", {
                      className: rn().RareAchievementIconGlow,
                    }),
                  }),
                }),
              (0, e.jsx)("img", {
                ref: B,
                className: (0, p.A)(rn().Icon, E && rn().IconGlow),
                src: t,
                loading: "lazy",
                alt: c,
              }),
            ],
          });
        }
        var Qa = i(7077),
          Va = i.n(Qa),
          Ee = i(96002),
          Fa = i(98001),
          ka = i(93191);
        function Za(o) {
          const { appid: t, userYearInReview: r } = o,
            a = br(t);
          return !a || !((a?.achievements?.length ?? 0) > 0)
            ? null
            : (0, e.jsx)(Ne.tH, {
                children: (0, f.createElement)(Ja, {
                  ...o,
                  key: "achievementunlucklist_" + t,
                  userUnlockedAchievements: a,
                }),
              });
        }
        function Ja(o) {
          const {
              appid: t,
              userYearInReview: r,
              bBlurContent: a,
              userUnlockedAchievements: l,
            } = o,
            [c, d] = (0, f.useState)(a),
            m = Ie(),
            u = ji(t),
            y = () => d(!1),
            B = l.achievements?.length ?? 0,
            E = l.all_time_unlocked_achievements,
            O = E == u && u > 0 && B > 0 && E > 0 && !l.unlocked_more_in_future,
            W = (0, Fa.v)({
              appid: t,
              profileUrl: (0, ka.F)(r.GetSteamID().ConvertTo64BitString()),
            }),
            U = (0, We.hf)();
          return (0, e.jsxs)("div", {
            className: (0, p.A)(Re.YearInReviewContent, Ee.AchievementsCtn),
            children: [
              c &&
                (0, e.jsx)("div", {
                  onClick: y,
                  className: Ee.ContentRestrictionText,
                  children: j.c.Localize(
                    "#YIR_TopGames_ContentRestrictionAchievements",
                  ),
                }),
              (0, e.jsxs)("div", {
                className: Ee.AchievementSectionTitleCtn,
                children: [
                  (0, e.jsx)("div", {
                    className: Ee.AchievementSectionTitle,
                    children: m("#YIR_TopGames_Achievements"),
                  }),
                  (0, e.jsxs)("div", {
                    className: Ee.AchievementLinkCtn,
                    children: [
                      U &&
                        (0, e.jsx)("a", {
                          href: W,
                          className: Ee.AchievementLink,
                          children: j.c.Localize("#YIR_SeeAllAchievements"),
                        }),
                      !U &&
                        (0, e.jsx)(cn.Ii, {
                          href: W,
                          target: "_blank",
                          className: Ee.AchievementLink,
                          children: j.c.Localize("#YIR_SeeAllAchievements"),
                        }),
                    ],
                  }),
                ],
              }),
              (0, e.jsx)("div", {
                className: (0, p.A)({
                  [Ee.AllUnlockedAchievements]: O,
                  [Ee.AchievementsRowCtn]: !0,
                }),
                children: (0, e.jsxs)("div", {
                  className: Ee.AchievementRow,
                  children: [
                    (0, e.jsxs)("div", {
                      className: Ee.AchievementsTitleCtn,
                      children: [
                        (0, e.jsx)("div", {
                          className: Ee.AchievementsBigNum,
                          children: (0, Me.D)(B),
                        }),
                        (0, e.jsx)("div", {
                          className: Ee.AchievementsSmallText,
                          children: j.c.LocalizeReact(
                            "#YIR_UnlockedThisYear_Short",
                            (0, e.jsx)("br", {}),
                          ),
                        }),
                      ],
                    }),
                    (0, e.jsx)($a, { userUnlockedAchievements: l }),
                  ],
                }),
              }),
            ],
          });
        }
        function $a(o) {
          const { userUnlockedAchievements: t } = o,
            r = t.appid;
          (0, L.wT)(r, "Missing appid for achievements list!");
          const a = xi(r),
            l = (0, f.useMemo)(
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
                      qa,
                      { appid: r, display: c },
                      "displayAch_" + c.internal_name,
                    ),
                  ),
              })
            : (0, e.jsx)(jn.t, {
                size: "small",
                string: qe.Z.Localize("#Loading"),
              });
        }
        const Xa = 10;
        function qa(o) {
          const { display: t, appid: r } = o,
            a = `${w.TS.MEDIA_CDN_COMMUNITY_URL}images/apps/${r}/${t.icon}`,
            l = Number.parseFloat("" + t.player_percent_unlocked) < Xa;
          return (0, e.jsx)(tn.m9, {
            toolTipContent: (0, e.jsx)(_a, { display: t }),
            className: (0, p.A)({
              [Ee.RareAchievement]: l,
              [Ee.Achievement]: !0,
            }),
            children: (0, e.jsx)(Ga, {
              imgURL: a,
              className: Ee.AchievementIcon,
              alt: t.localized_name ?? t.internal_name,
              glow: l,
            }),
          });
        }
        function _a(o) {
          const { display: t } = o;
          let r;
          return (
            t.localized_desc && t.localized_name
              ? (r = `${t?.localized_name}: ${t.localized_desc}`)
              : t.localized_name
                ? (r = t.localized_name)
                : t.internal_name && (r = t.internal_name),
            (0, e.jsxs)("div", {
              className: Va().TextToolTip,
              children: [
                (0, e.jsx)("div", { children: r }),
                (0, e.jsx)("br", {}),
                (0, e.jsx)("div", {
                  children: j.c.Localize(
                    "#YIR_Achievement_ttip",
                    (0, Me.D)(
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
        var Tn = i(30386);
        function to(o) {
          const { appid: t, bBlurContent: r, nYear: a } = o,
            l = Ii(t),
            [c, d] = (0, li.XC)(),
            m = Ie();
          return !l || l.length == 0
            ? null
            : (0, e.jsxs)("div", {
                className: (0, p.A)(Re.YearInReviewContent, Tn.ScreenshotsCtn),
                children: [
                  d,
                  (0, e.jsx)("div", {
                    className: Tn.ScreenshotHeader,
                    children: m("#YIR_ScreenshotsThisYear"),
                  }),
                  (0, e.jsx)("div", {
                    className: Tn.ScreenshotRow,
                    children: l.map((u, y) =>
                      (0, e.jsx)(
                        no,
                        {
                          nYear: a,
                          bBlurContent: r,
                          screenshot: u,
                          fnSetExpandScreenShot: () => {
                            const E = l
                              .slice(y)
                              .concat(l.slice(0, y))
                              .map((O) => O.image_url);
                            c(E);
                          },
                        },
                        `${u.image_url}_${y}`,
                      ),
                    ),
                  }),
                ],
              });
        }
        const eo =
          "?imw=375&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false";
        function no(o) {
          const {
              screenshot: t,
              fnSetExpandScreenShot: r,
              bBlurContent: a,
              nYear: l,
            } = o,
            [c, d] = (0, f.useState)(a),
            m = { backgroundImage: `url(${t.image_url + eo})` },
            u = dn("screenshot_placeholder.png"),
            y = () => {
              c && d(!1), r();
            };
          return (0, e.jsxs)("div", {
            className: Tn.ScreenshotCtn,
            onClick: y,
            style: m,
            children: [
              c &&
                (0, e.jsx)("div", {
                  className: Tn.ContentRestrictionText,
                  children: j.c.Localize(
                    "#YIR_TopGames_ContentRestrictionScreenshots",
                  ),
                }),
              (0, e.jsx)("img", { src: `${u}` }),
            ],
          });
        }
        function ci(o) {
          const { userYearInReview: t } = o,
            r = t.GetTopGamesShownAppIDs(),
            a = Ie(),
            l = 0,
            c = je,
            d = (0, f.useMemo)(() => r?.slice(l, c), [l, c, r]);
          if (!r || r.length == 0 || l > r.length) return null;
          let m = r.length > 1;
          return (0, e.jsx)("div", {
            className: (0, p.A)($.TopGamesContainer),
            children: (0, e.jsxs)(mr.K, {
              placeholderHeight: "100vh",
              rootMargin: $n,
              className: $.FullWidth,
              children: [
                !!m &&
                  (0, e.jsx)("div", {
                    className: (0, p.A)($.TopGameTitleCtn, $.white),
                    children: (0, e.jsx)("div", {
                      className: $.TopGameTitle,
                      children: a("#YIR_TopGame_mostplayed_intro"),
                    }),
                  }),
                d.map((u, y) =>
                  (0, e.jsx)(
                    ze,
                    {
                      children: (0, e.jsx)(
                        di,
                        { unAppID: u, userYearInReview: t, index: y },
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
        function ro(o) {
          const { gameSummary: t, index: r, userYearInReview: a } = o,
            l = Ie(),
            c = Yi(),
            d = t.appid,
            m = a.GetYear();
          for (let y = m; y >= Ua; --y) {
            const B = `#steamrewind${y}_gametext_appid_${d}`,
              E = c(y, B, m);
            if (E !== void 0)
              return (0, e.jsxs)("div", {
                className: $.IntroLine,
                children: [E, " "],
              });
          }
          let u;
          return (
            r == 0
              ? t?.new_this_year
                ? typeof t.total_playtime_percentagex100 == "number" &&
                  t.total_playtime_percentagex100 > 1e3
                  ? (u = "#YIR_TopGame_first_new_hooked")
                  : (u = "#YIR_TopGame_first_new")
                : (u = "#YIR_TopGame_first_continued")
              : r == 1 &&
                (t?.new_this_year
                  ? (u = "#YIR_TopGame_top_new")
                  : (u = "#YIR_TopGame_top_continued")),
            u
              ? (0, e.jsx)("div", {
                  className: (0, p.A)($.IntroLine, Re.IntroLine),
                  children: l(u, a.GetYear()),
                })
              : null
          );
        }
        function io(o) {
          let [t, r] = f.useState(!1),
            a = f.useRef(null),
            l = a.current;
          const c = Gi();
          f.useEffect(() => {
            o !== null && o != l && r(!0), o === null && t && r(!1);
          }, [r, t, o, l]),
            (a.current = o);
          let d = f.useRef(void 0),
            m = f.useCallback(() => {
              let u = () => c(o),
                y = parseInt($.strGameDetailsTransitionTimeMS);
              (d.current = setTimeout(u, y)), r(!1);
            }, [c, o]);
          return (
            f.useEffect(
              () => () => {
                d.current && clearTimeout(d.current), (d.current = void 0);
              },
              [],
            ),
            [t, m]
          );
        }
        function so(o) {
          return f.useCallback(
            (r) => {
              r.target == r.currentTarget && o();
            },
            [o],
          );
        }
        function ao(o) {
          let { userYearInReview: t } = o,
            { unAppID: r, length: a, index: l = 0 } = Ki(),
            [c, d] = io(r),
            m = so(d);
          const u = Cr(l + 1),
            y = Cr(l - 1),
            B = (0, We.Qn)();
          if (r == null && !c) return null;
          let E = (0, p.A)(
              $.GameDetailsPopup,
              c && $.Visible,
              B && $.GamepadUI,
            ),
            O = (0, e.jsx)("div", {
              className: E,
              onClick: m,
              children: (0, e.jsxs)("div", {
                className: $.ContentWrapper,
                children: [
                  (0, e.jsx)("div", {
                    className: $.GameWrapper,
                    children:
                      r !== null &&
                      (0, e.jsx)(di, {
                        unAppID: r,
                        userYearInReview: t,
                        index: 1,
                      }),
                  }),
                  (0, e.jsx)(li._G, {
                    index: l,
                    numElements: a,
                    fnForward: u,
                    fnBackwards: y,
                    fnClose: d,
                  }),
                ],
              }),
            });
          return typeof document > "u"
            ? null
            : Ya.createPortal(O, document.body);
        }
        const di = f.memo((o) => {
          const { unAppID: t, userYearInReview: r, index: a } = o,
            l = r.GetGameStats(t),
            c = Math.trunc(l?.playtime_streak?.longest_consecutive_days || 1),
            d = r.GetGameSummaryForApp(t),
            m = d ? d.parent_appid || t : 0,
            { item: u, bLoading: y } = Xe(m),
            B = Ra(m),
            E = (0, sr.aL)(u ? (0, Gr._)(u.info) : void 0),
            O = Ie(),
            W = a % 2 ? "OddGradient" : "EvenGradient",
            U = (0, We.Qn)(),
            yt = er(),
            Rt = _t(),
            Jt = (0, We.hf)(),
            { gameChartData: Ct, rank: be } = (0, f.useMemo)(
              () => r.GetChartMonthlyDataForApp(t),
              [t, r],
            );
          if (y)
            return (0, e.jsx)("div", {
              className: (0, p.A)(
                $.TopGameBlockContainer,
                $[W],
                Rt.TopGameBlockContainer,
                Rt[W],
                $.LoadingCtn,
              ),
              children: (0, e.jsx)(jn.t, { position: "center" }),
            });
          if (!u || !d) return null;
          let Pt = E;
          w.TS.IN_CLIENT && (Pt = "steam://openurl/" + Pt);
          const ee = Ct?.find((No) => No.percent > 0),
            Be = ee ? ee.date.getUTCMonth() : null,
            Se = Be
              ? j.c.Localize(`#YIR_MonthlyCharts_MonthNoun_${Be + 1}`)
              : "",
            He = Math.trunc(d.total_sessions);
          let Ke = "";
          yt && U
            ? (Ke = `steam://open/games/details/${t}`)
            : yt &&
              !w.TS.IN_MOBILE_WEBVIEW &&
              (Ke = `steam://open/library/details/${t}`);
          const Pe = u.info.name ?? "";
          let Oe = Pe;
          return (
            d.demo
              ? (Oe = j.c.Localize("#YIR_GameName_PlusDemo", Oe))
              : d.playtest &&
                (Oe = j.c.Localize("#YIR_GameName_PlusPlaytest", Oe)),
            (0, e.jsxs)(ze, {
              className: (0, p.A)(
                $.TopGameBlockContainer,
                $[W],
                Rt.TopGameBlockContainer,
                Rt[W],
              ),
              children: [
                (0, e.jsx)(lo, { item: u }),
                (0, e.jsxs)("div", {
                  className: $.StandardInfoCtn,
                  children: [
                    (0, e.jsx)(oo, { item: u }),
                    (0, e.jsxs)("div", {
                      className: (0, p.A)(
                        Re.YearInReviewContent,
                        $.InfoContentSpacing,
                      ),
                      children: [
                        (0, e.jsxs)("div", {
                          className: $.InfoContainer,
                          children: [
                            (0, e.jsxs)(Ce.Z, {
                              className: $.GameLinks,
                              "flow-children": "row",
                              children: [
                                Jt &&
                                  (0, e.jsx)("a", {
                                    href: Pt,
                                    className: $.GameLink,
                                    children: j.c.Localize(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !Jt &&
                                  (0, e.jsx)(cn.Ii, {
                                    href: Pt,
                                    target: "_blank",
                                    className: $.GameLink,
                                    children: j.c.Localize(
                                      "#YIR_TopGames_VisitInStore",
                                    ),
                                  }),
                                !!Ke &&
                                  (0, e.jsx)(cn.Ii, {
                                    href: Ke,
                                    className: $.GameLink,
                                    children: j.c.Localize(
                                      "#YIR_TopGames_VisitInLibrary",
                                    ),
                                  }),
                                !yt && (0, e.jsx)(mo, { appID: m }),
                              ],
                            }),
                            (0, e.jsx)("div", {
                              className: (0, p.A)({
                                [$.Title]: !0,
                                [$.TitleLongName]: (Oe?.length ?? 0) > 25,
                              }),
                              children: Oe,
                            }),
                            (0, e.jsx)(ro, {
                              gameSummary: d,
                              userYearInReview: r,
                              index: a,
                            }),
                            (0, e.jsxs)("div", {
                              className: $.StatsGroup,
                              children: [
                                !!d.total_playtime_percentagex100 &&
                                  (0, e.jsxs)("div", {
                                    className: $.StatContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: $.BigNum,
                                        children: De(
                                          Math.ceil(
                                            d.total_playtime_percentagex100,
                                          ),
                                        ),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: $.NumSubtitle,
                                        children: j.c.Localize(
                                          "#YIR_Game_PercentPlaytime",
                                        ),
                                      }),
                                    ],
                                  }),
                                !!d.total_sessions &&
                                  (0, e.jsxs)("div", {
                                    className: $.StatContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: $.BigNum,
                                        children: (0, Me.D)(He),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: $.NumSubtitle,
                                        children: j.c.Localize(
                                          He == 1
                                            ? "#YIR_Game_PlaySession_Singular"
                                            : "#YIR_Game_PlaySessions",
                                        ),
                                      }),
                                    ],
                                  }),
                                !on() &&
                                  c > 1 &&
                                  (0, e.jsx)("div", {
                                    className: $.StatContainer,
                                    children: (0, e.jsxs)(tn.he, {
                                      toolTipContent: j.c.LocalizeReact(
                                        "#YIR_Game_LongestStreak_ttip",
                                      ),
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: $.BigNum,
                                          children: (0, Me.D)(c),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: $.NumSubtitle,
                                          children: j.c.Localize(
                                            "#YIR_Game_LongestStreak",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!d?.new_this_year &&
                                  (0, e.jsx)("div", {
                                    className: $.StatContainer,
                                    children: (0, e.jsxs)(tn.he, {
                                      toolTipContent: O(
                                        "#YIR_TopGames_NewThisYEar_ttip",
                                      ),
                                      children: [
                                        (0, e.jsx)("div", {
                                          className: $.BigNum,
                                          children: (0, e.jsx)(we.eNX, {}),
                                        }),
                                        (0, e.jsx)("div", {
                                          className: $.NumSubtitle,
                                          children: j.c.Localize(
                                            "#YIR_TopGames_NewThisYEar",
                                          ),
                                        }),
                                      ],
                                    }),
                                  }),
                                !!B &&
                                  (0, e.jsxs)("div", {
                                    className: $.StatContainer,
                                    children: [
                                      (0, e.jsx)("div", {
                                        className: $.BigNum,
                                        children: (0, e.jsx)(we.Exy, {}),
                                      }),
                                      (0, e.jsx)("div", {
                                        className: $.NumSubtitle,
                                        children:
                                          j.c.Localize("#YIR_TopGames_100"),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                        Ct &&
                          (0, e.jsxs)("div", {
                            className: (0, p.A)(
                              $.GameChartCtn,
                              $.ChartWidthHelper,
                            ),
                            children: [
                              (0, e.jsx)("div", {
                                className: $.GameChartFirstPlayed,
                                children: Se
                                  ? O(
                                      d?.new_this_year
                                        ? "#YIR_TopGames_firstplayedNew"
                                        : "#YIR_TopGames_firstplayed",
                                      Se,
                                    )
                                  : null,
                              }),
                              (0, e.jsx)("div", {
                                className: $.GameChart,
                                children: (0, e.jsx)(Ea, {
                                  data: Ct,
                                  name: Pe,
                                  color: Rt[`topApp_${be}`],
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                (0, e.jsx)(co, { appid: m, userYearInReview: r, item: u }),
              ],
            })
          );
        });
        function oo(o) {
          const { item: t } = o,
            r = nr(t.info),
            a = (0, Qe.CB)(t.assets, "library_hero");
          return (0, e.jsx)("div", {
            className: $.BackgroundImage,
            style: r ? void 0 : { backgroundImage: `url(${a})` },
          });
        }
        function lo(o) {
          const { item: t } = o,
            r = _t(),
            a = nr(t.info),
            l = (0, Qe.CB)(t.assets, "library_hero");
          return (0, e.jsx)(e.Fragment, {
            children: (0, e.jsx)("div", {
              className: (0, p.A)($.BackgroundImageFull, r.BackgroundImageFull),
              style: a ? void 0 : { backgroundImage: `url(${l})` },
            }),
          });
        }
        function co(o) {
          const { appid: t, userYearInReview: r, item: a } = o,
            l = nr(a.info);
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Za, {
                bBlurContent: l,
                appid: t,
                userYearInReview: r,
              }),
              (0, e.jsx)(to, { bBlurContent: l, appid: t, nYear: r.GetYear() }),
            ],
          });
        }
        function mo(o) {
          const { appID: t } = o,
            r = (0, Ha.$5)(t),
            a = (0, Sa.bB)(t),
            { bIsOwned: l } = (0, Da.ZJ)(r),
            c = (0, sr.ru)(),
            { mutate: d } = (0, Wa.s)(t, !a, c);
          return !w.iA.logged_in || l
            ? null
            : (0, e.jsxs)(Ce.Z, {
                className: (0, p.A)($.AddToWishlist),
                onActivate: (m) => {
                  m.preventDefault(), m.stopPropagation(), d();
                },
                children: [
                  a ? (0, e.jsx)(we.qnF, {}) : (0, e.jsx)(we.T4m, {}),
                  qe.Z.Localize(
                    a ? "#Sale_RemoveFromWishlist" : "#Sale_AddToWishlist",
                  ),
                ],
              });
        }
        var uo = i(78365);
        function go(o) {
          const { pageData: t } = o,
            { steamid: r, nYear: a, eResult: l } = t;
          f.useEffect(() => {
            const m = new URL(window.location.href),
              u = ["src", "snr", "sP"].filter((y) => m.searchParams.has(y));
            u.length &&
              (u.forEach((y) => m.searchParams.delete(y)),
              window.history.replaceState(window.history.state, "", m));
          }, []);
          const c = f.useRef(null);
          if (
            (f.useEffect(() => {
              c.current && c.current.NavTree()?.Activate(!0);
            }, []),
            l == G.sW)
          )
            return (0, e.jsx)(yn, {
              message: j.c.Localize("#YIR_Error_NoShareNoGameplayNotUser"),
            });
          if (!r || !a)
            return (0, e.jsx)(yn, {
              message: j.c.Localize("#YIR_Error_NoData"),
            });
          const d = new J.b(r);
          return (0, e.jsx)(C.Provider, {
            value: t,
            children: (0, e.jsx)(Ce.Z, {
              navRef: c,
              children: (0, e.jsx)(fo, { steamID: d, year: a }),
            }),
          });
        }
        function fo(o) {
          let { steamID: t, year: r } = o;
          const [a, l] = (0, Ir.KT)(t.GetAccountID()),
            { userYearInReview: c, isLoading: d } = fi(
              t.ConvertTo64BitString(),
              r,
            ),
            { isLoading: m, isError: u } = un(
              c?.GetTopGamesShownAppIDs() ?? [],
            ),
            y = Ri();
          if (l || d || m || !y)
            return (0, e.jsx)(jn.t, {
              string: qe.Z.Localize("#Loading"),
              position: "center",
            });
          if (!a || !t.BIsIndividualAccount())
            return (0, e.jsx)(yn, {
              message: j.c.Localize("#YIR_Error_NoUser"),
            });
          if (!c || u)
            return (0, e.jsx)(yn, {
              message: j.c.Localize("#YIR_Error_PageLoadFailed"),
            });
          const B = !c.GetPlayTimeStats()?.game_summary?.length;
          return w.iA.steamid !== a.steamid && B
            ? (0, e.jsx)(yn, {
                message: j.c.Localize("#YIR_Error_NoShareNoGameplayNotUser"),
              })
            : B
              ? (0, e.jsx)(yn, {
                  message: j.c.Localize("#YIR_Error_NoShareNoGameplay"),
                })
              : (0, e.jsx)(uo.f7, {
                  autoFocus: !0,
                  noFocusRing: !0,
                  focusable: !1,
                  children: (0, e.jsx)("div", {
                    className: v().YearInReviewContainer,
                    children: (0, e.jsx)(vo, {
                      userYearInReview: c,
                      avatarAndPersona: a,
                    }),
                  }),
                });
        }
        function ho(o) {
          const {
              viewAsUser: t,
              avatarAndPersona: r,
              userYearInReview: a,
              themeYear: l,
              children: c,
            } = o,
            d = (0, Ta.b)(l),
            m = (0, $e.KV)(),
            u = a.GetSteamID().ConvertTo64BitString(),
            y = a.GetYear(),
            B = f.useMemo(() => vi(m, u, y), [m, u, y]),
            E = f.useMemo(
              () => ({
                bIsUser: t,
                persona_name: r.persona_name,
                avatar_url: r.avatar_url,
                themeStyle: d,
              }),
              [t, r.persona_name, r.avatar_url, d],
            );
          return (0, e.jsx)(_e.Provider, {
            value: E,
            children: (0, e.jsx)(Ur.QA, {
              eAdultOnlyMediaBehavior: t ? "allowed" : "masked",
              children: (0, e.jsx)(xr.Provider, {
                value: B,
                children: (0, e.jsx)(Hi, { children: c }),
              }),
            }),
          });
        }
        function vo(o) {
          const { userYearInReview: t, avatarAndPersona: r } = o,
            a = t.GetYear(),
            l = w.iA.logged_in && w.iA.steamid === r.steamid,
            [c, d] = (0, f.useState)(l),
            [m, u] = (0, f.useState)(a);
          return (0, e.jsxs)(ho, {
            viewAsUser: c,
            userYearInReview: t,
            avatarAndPersona: r,
            themeYear: m,
            children: [
              (0, e.jsx)(xo, {
                viewAsUser: c,
                setViewAsUser: d,
                themeYear: m,
                setThemeYear: u,
              }),
              (0, e.jsx)(yo, { ...o, viewAsUser: c }),
            ],
          });
        }
        function yo(o) {
          const { userYearInReview: t, viewAsUser: r } = o,
            a = t.GetSteamID(),
            l = t.GetYear();
          pi(t);
          const { persona_name: c } = (0, f.useContext)(_e),
            d = t.GetPlayTimeStats().game_summary?.length;
          return (0, e.jsxs)(e.Fragment, {
            children: [
              (0, e.jsx)(Bo, { userYearInReview: t }),
              (0, e.jsx)(Ne.tH, {
                children: (0, e.jsxs)(Vr, {
                  userYearInReview: t,
                  children: [
                    (0, e.jsx)(ga, { userYearInReview: t }),
                    d === 1 && (0, e.jsx)(ci, { userYearInReview: t }),
                  ],
                }),
              }),
              (0, e.jsx)(Ne.tH, {
                children: (0, e.jsx)(Bs, { userYearInReview: t }),
              }),
              typeof d == "number" &&
                d > 1 &&
                (0, e.jsxs)(e.Fragment, {
                  children: [
                    (0, e.jsx)(ci, { userYearInReview: t }),
                    (0, e.jsx)("div", {
                      className: v().TimeRelatedCtn,
                      children: (0, e.jsx)(Ne.tH, {
                        children: (0, e.jsx)(Oa, { userYearInReview: t }),
                      }),
                    }),
                  ],
                }),
              (0, e.jsx)("div", {
                className: v().GraphRelatedCtn,
                children: (0, e.jsx)(Ne.tH, {
                  children: (0, e.jsx)(Ks, { userYearInReview: t }),
                }),
              }),
              !!t.GetPlayTimeStats().playtime_streak &&
                (0, e.jsx)(Ne.tH, {
                  children: (0, e.jsx)(ks, { userYearInReview: t }),
                }),
              typeof d == "number" &&
                d > 5 &&
                (0, e.jsx)(Ne.tH, {
                  children: (0, e.jsx)(Ji, { userYearInReview: t, nYear: l }),
                }),
              (0, e.jsx)(Ne.tH, {
                children: (0, e.jsxs)("div", {
                  className: v().BottomCtn,
                  children: [
                    (0, e.jsx)(Vr, {
                      userYearInReview: t,
                      children: (0, e.jsx)(jo, {
                        playerName: c,
                        userYearInReview: t,
                      }),
                    }),
                    r &&
                      (0, e.jsxs)("div", {
                        className: Ye().ShareOptions,
                        children: [
                          (0, e.jsx)("div", {
                            className: Ye().ShareTitle,
                            children: j.c.Localize("#YIR_ShareOptionsTitle"),
                          }),
                          (0, e.jsxs)(Ce.Z, {
                            className: Ye().ShareColumns,
                            children: [
                              (0, e.jsxs)("div", {
                                className: (0, p.A)(Ye().ShareArea),
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Ye().ShareTypeTitle,
                                    children: j.c.Localize(
                                      "#YIR_ShareModal_TitleSocial",
                                    ),
                                  }),
                                  (0, e.jsx)(_r, { steamId: a, nYear: l }),
                                ],
                              }),
                              (0, e.jsxs)("div", {
                                className: (0, p.A)(Ye().ShareArea),
                                children: [
                                  (0, e.jsx)("div", {
                                    className: Ye().ShareTypeTitle,
                                    children: j.c.Localize(
                                      "#YIR_ShareModal_TitleProfile",
                                    ),
                                  }),
                                  (0, e.jsxs)(cn.Ii, {
                                    href: `${w.TS.COMMUNITY_BASE_URL}profiles/${w.iA.steamid}/edit/showcases`,
                                    className: (0, p.A)(Ye().ShareButton),
                                    children: [
                                      (0, e.jsx)(we.KJW, {
                                        className: Ye().ShareLinkIcon,
                                      }),
                                      (0, e.jsx)("span", {
                                        className: (0, p.A)(Ye().ShareText),
                                        children: j.c.Localize(
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
              (0, e.jsx)(Ne.tH, {
                children: (0, e.jsx)(Ps, { userYearInReview: t }),
              }),
              (0, e.jsx)(Ne.tH, {
                children: (0, e.jsx)(Xs, { steamId: a, year: l }),
              }),
              (0, e.jsx)(Ne.tH, { children: (0, e.jsx)(bo, { year: l }) }),
              (0, e.jsx)(Ne.tH, {
                children: (0, e.jsx)(ao, { userYearInReview: t }),
              }),
            ],
          });
        }
        function po() {
          const o = _t(),
            { persona_name: t, avatar_url: r } = (0, f.useContext)(_e);
          return (0, e.jsxs)("div", {
            className: v().AvatarName,
            children: [
              (0, e.jsx)(zi.Ul, {
                strAvatarURL: r.replace(/\.jpg$/, "_full.jpg"),
                className: v().UserAvatar,
              }),
              (0, e.jsx)("span", {
                className: (0, p.A)(v().UserName, o.UserName),
                children: j.c.Localize("#YearInReview_PossessiveUserName", t),
              }),
            ],
          });
        }
        function Bo(o) {
          let { userYearInReview: t } = o;
          const r = t.GetSteamID(),
            a = t.GetYear();
          return (0, e.jsx)("div", {
            className: (0, p.A)(v().YearInReviewContent, v().TopAreaSizer),
            children: (0, e.jsxs)("div", {
              className: v().HeaderCtn,
              children: [
                (0, e.jsx)("div", {
                  className: v().RewindHeader,
                  children: j.c.LocalizeReact(
                    "#YearInReview_SteamRewindHeader",
                    (0, e.jsx)(po, {}),
                    qe.Z.Localize("#date_year", a, " "),
                  ),
                }),
                w.iA.logged_in &&
                  (0, e.jsx)("div", {
                    className: v().HeaderShareCtn,
                    children: (0, e.jsx)("div", {
                      className: (0, p.A)(Ye().ShareArea),
                      children: (0, e.jsx)(Ne.tH, {
                        children: (0, e.jsx)(_r, { steamId: r, nYear: a }),
                      }),
                    }),
                  }),
              ],
            }),
          });
        }
        function xo(o) {
          const {
              viewAsUser: t,
              setViewAsUser: r,
              themeYear: a,
              setThemeYear: l,
            } = o,
            c = [
              { data: 2022, label: "2022" },
              { data: 2023, label: "2023" },
              { data: 2024, label: "2024" },
              { data: 2025, label: "2025" },
            ],
            d = (0, f.useCallback)(
              (y) => {
                l(y.data);
              },
              [l],
            ),
            m = (0, We.Qn)(),
            { bAllowDevToggles: u } = D();
          return !u || m
            ? null
            : (0, e.jsxs)("div", {
                className: (0, p.A)(v().DevToggle, Tr.ValveOnlyBackground),
                children: [
                  (0, e.jsx)("div", {
                    children: "Debug Only: Toggle First Person View",
                  }),
                  (0, e.jsx)(tr.RF, { onChange: r, checked: t }),
                  (0, e.jsx)("div", {
                    children:
                      "Debug Only: Change to view the contents in the css style of a different year",
                  }),
                  (0, e.jsx)(tr.ZU, {
                    rgOptions: c,
                    selectedOption: a,
                    onChange: d,
                  }),
                ],
              });
        }
        function yn(o) {
          let { message: t } = o;
          return (0, e.jsxs)("div", {
            className: v().MissingUserCtn,
            children: [
              (0, e.jsx)("div", { className: v().GenericBackground }),
              (0, e.jsxs)("div", {
                className: (0, p.A)(v().YearInReviewContainer, v().ErrorMsg),
                children: [
                  (0, e.jsx)("div", {
                    className: v().SectionTitle,
                    children: t,
                  }),
                  (0, e.jsx)("div", {}),
                ],
              }),
            ],
          });
        }
        function jo(o) {
          let { userYearInReview: t } = o;
          const r = _t();
          if (!w.iA.is_support && w.iA.accountid != t.GetAccountID())
            return null;
          const a = t.GetYear();
          return (0, e.jsx)("div", {
            className: (0, p.A)(v().YearInReviewContent, v().ConclusionCtn),
            children: (0, e.jsx)("div", {
              className: v().SectionTitle,
              children: j.c.LocalizeReact(
                "#YIR_Conclusion",
                (0, e.jsx)("span", {
                  className: (0, p.A)(v().ConclusionName, r.ConclusionName),
                  children: o.playerName,
                }),
                a,
              ),
            }),
          });
        }
        function bo(o) {
          const { year: t } = o;
          return (0, e.jsxs)("div", {
            className: (0, p.A)(
              v().YearInReviewContenredPadding,
              v().FAQSection,
            ),
            children: [
              (0, e.jsx)("div", {
                className: v().SectionTitle,
                children: j.c.Localize("#YIR_FAQ_Title"),
              }),
              (0, e.jsxs)("div", {
                className: v().Questions,
                children: [
                  (0, e.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: v().Question,
                        children: j.c.Localize("#YIR_FAQ_Dates_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: v().Answer,
                        children: j.c.Localize("#YIR_FAQ_Dates_A", t),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: v().Question,
                        children: j.c.Localize("#YIR_FAQ_Offline_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: v().Answer,
                        children: j.c.Localize("#YIR_FAQ_Offline_A"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: v().Question,
                        children: j.c.Localize("#YIR_FAQ_Types_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: v().Answer,
                        children: j.c.Localize("#YIR_FAQ_Types_A"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: v().Question,
                        children: j.c.Localize("#YIR_FAQ_Share_Q"),
                      }),
                      (0, e.jsxs)("div", {
                        className: v().Answer,
                        children: [
                          j.c.Localize("#YIR_FAQ_Share_A"),
                          (0, e.jsxs)("ol", {
                            children: [
                              (0, e.jsx)("li", {
                                children: j.c.Localize("#YIR_FAQ_Share_A_b1"),
                              }),
                              (0, e.jsx)("li", {
                                children: j.c.Localize("#YIR_FAQ_Share_A_b2"),
                              }),
                              (0, e.jsx)("li", {
                                children: j.c.Localize("#YIR_FAQ_Share_A_b3"),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: v().Question,
                        children: j.c.Localize("#YIR_FAQ_ShareFamily_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: v().Answer,
                        children: j.c.Localize("#YIR_FAQ_ShareFamily_A"),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: v().QuestionCtn,
                    children: [
                      (0, e.jsx)("div", {
                        className: v().Question,
                        children: j.c.Localize("#YIR_FAQ_Controller_Q"),
                      }),
                      (0, e.jsx)("div", {
                        className: v().Answer,
                        children: j.c.Localize("#YIR_FAQ_Controller_A1"),
                      }),
                      (0, e.jsx)("br", {}),
                      (0, e.jsx)("div", {
                        className: v().Answer,
                        children: j.c.Localize("#YIR_FAQ_Controller_A2"),
                      }),
                    ],
                  }),
                  t == 2022
                    ? (0, e.jsxs)("div", {
                        className: v().QuestionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: v().Question,
                            children: j.c.Localize("#YIR_FAQ_PrivateApps_Q"),
                          }),
                          (0, e.jsx)("div", {
                            className: v().Answer,
                            children: j.c.Localize("#YIR_FAQ_PrivateApps_A", t),
                          }),
                        ],
                      })
                    : (0, e.jsxs)("div", {
                        className: v().QuestionCtn,
                        children: [
                          (0, e.jsx)("div", {
                            className: v().Question,
                            children: j.c.Localize("#YIR_FAQ_PrivateApps_v2_Q"),
                          }),
                          (0, e.jsx)("div", {
                            className: v().Answer,
                            children: j.c.Localize(
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
        var Mo = i(58732),
          mi = i(92757),
          ui = i(51079);
        const gi = { Home: (o, t) => `${Mo.B.YearInReview(o, t)}` };
        function Io(o) {
          return (0, e.jsx)(ui.Ay, {
            domain: "store.steampowered.com",
            controller: "yearinreview",
            children: (0, e.jsx)(mi.dO, {
              children: (0, e.jsx)(mi.qh, {
                path: `${gi.Home(":steamId?", ":year?")}`,
                render: (t) =>
                  (0, e.jsx)(ui.Ay, {
                    method: "yearinreview",
                    children: (0, e.jsx)(Ne.tH, {
                      children: (0, e.jsx)(To, {
                        steamId: t.match.params.steamId,
                        year: t.match.params.year,
                      }),
                    }),
                  }),
              }),
            }),
          });
        }
        function To(o) {
          const { steamId: t, year: r } = o,
            a = (0, sn.jE)(),
            l = f.useMemo(() => Ao(t, r), [t, r]);
          return (
            f.useMemo(() => wo(a, l), [a, l]), (0, e.jsx)(go, { pageData: l })
          );
        }
        function Ao(o, t) {
          const r = o == "my" ? w.iA.steamid : o || "",
            a = parseInt(t ?? ""),
            l = r ? new J.b(r).GetAccountID() : 0,
            c =
              w.iA.is_support &&
              !!(0, We.Fd)(
                "localization_advanced_access",
                "application_config",
              );
          return {
            steamid: r,
            nYear: a,
            eResult: Number.parseInt(
              (0, We.Fd)("yearinreview_eresults", "application_config"),
            ),
            rgOtherYears:
              (0, We.Fd)(
                `yearinreview_otheryears_${l}_${a}`,
                "application_config",
              ) ?? [],
            bLocalizationAdvancedAccess: c,
            bAllowDevToggles: c,
          };
        }
        function wo(o, t) {
          const { steamid: r, nYear: a } = t;
          if (!r || !a) return;
          const l = new J.b(r),
            c = xn(l.ConvertTo64BitString(), a);
          if (o.getQueryData(c)) return;
          const d = (0, We.Fd)(
            `yearinreview_${l.GetAccountID()}_${a}`,
            "application_config",
          );
          Lo(d) &&
            o.setQueryData(
              c,
              Pn(G.R, {
                stats: d,
                percentiles: (0, We.Fd)(
                  `yearinreview_${a}_percentiles`,
                  "application_config",
                ),
                distribution: (0, We.Fd)(
                  `yearinreview_${a}_distribution`,
                  "application_config",
                ),
                previous_year_summary: (0, We.Fd)(
                  `yearinreview_${a}_previous_year_summary`,
                  "application_config",
                ),
              }),
            );
        }
        function Lo(o) {
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
      32651: (K) => {
        K.exports = {
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
      89767: (K) => {
        K.exports = {
          Pill: "_1LHHH9LxL4_OV0jcL9EZ7I",
          Button: "_3ECnEY2jSbeonbMSe3SQif",
        };
      },
      37501: (K) => {
        K.exports = { ImageBlocked: "_21Qmyw5l-_fHfVvaYXgIrm" };
      },
      33998: (K) => {
        K.exports = { Ctn: "_1BsM1CkjnMDPzj027r1TEC" };
      },
      20881: (K) => {
        K.exports = { AppSummaryWidgetCtn: "s-ezVsX8n5lz8y_Nljmv2" };
      },
      48963: (K) => {
        K.exports = {
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
          BackgroundAnimation: "_2YqbTh9tmcEZ5Jnz39bkD9",
          "ItemFocusAnim-darkerGrey-nocolor": "_2Z_byUU724LC7VmBpwzXvB",
          "ItemFocusAnim-darkerGrey": "_79YB3jhA36yeyMiLstJi",
          "ItemFocusAnim-darkGreySettings": "_1lSn5OE1oc5-oQjPkjBIYj",
          "ItemFocusAnim-darkGrey": "CFIUukdHjcI69ga9Z8nTA",
          "ItemFocusAnim-grey": "_3rAbB1f0HQs0x4Hqa5CdEA",
          "ItemFocusAnim-translucent-white-10": "_9gKqKsdvXOoawIPGtFkRF",
          "ItemFocusAnim-translucent-white-20": "_3zG2IKWY48X67SEt1vSIhf",
          "ItemFocusAnimBorder-darkGrey": "_1etJfunIGxvr5ni3LVgo74",
          "ItemFocusAnim-green": "_2y66jXVD5R6zd5LqMTWYVl",
          focusAnimation: "rfbikUhNdMJp8YaaOMaCW",
          hoverAnimation: "_2kGcR5txA30fIqTtD8sBNS",
        };
      },
      17247: (K) => {
        K.exports = {
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
      96002: (K) => {
        K.exports = {
          narrowWidth: "500px",
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
      13824: (K) => {
        K.exports = {
          MonthGridOverallCtn: "_39riY1ALzXddeLUi4b6njV",
          MonthGroupCtn: "_2PJ5dHX9Oih-78STp7Gh9k",
          FirstPlayCtn: "_1flKypEsMgcTMxdLOSn0A2",
          MonthTitle: "_2nSdjNpwdgPuYMr4zlXPEO",
          GameCtn: "_3LAV6o8j79NTSpKVTX-ONT",
          AllGamesBGImage: "_2VKXXNuV16rgy-mMP0blns",
        };
      },
      20175: (K) => {
        K.exports = {
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
      54094: (K) => {
        K.exports = {
          narrowWidth: "500px",
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
      10738: (K) => {
        K.exports = {
          narrowWidth: "500px",
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
      5751: (K) => {
        K.exports = {
          narrowWidth: "500px",
          FriendCtn: "QUjIgprzA6Kbs7xBAZ0G4",
          FriendsSharedSection: "_2Rq_zPIIJLZ1-QzjOI_QoE",
          FriendsSharedSectionTitle: "_35laQj1c49taZ9qr-yWwvU",
          FriendsGrid: "_3rWLm6o2EmBKqcTkRck7VQ",
        };
      },
      40216: (K) => {
        K.exports = {
          narrowWidth: "500px",
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
      7253: (K) => {
        K.exports = {
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
      11498: (K) => {
        K.exports = {
          narrowWidth: "500px",
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
      1946: (K) => {
        K.exports = {
          OtherYearsCtn: "ZFr-zkTzmpySQuVgzxYUD",
          OtherYearsHeader: "_3Y2GCNOtGNo0Xe8r1Kt626",
          OtherYearLinks: "_3Uhn7ap72dGDfQpLDwBkcX",
          OtherYearLink: "_3518yDLyo2qkU1CI0RYXgG",
        };
      },
      30386: (K) => {
        K.exports = {
          narrowWidth: "500px",
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
      60197: (K) => {
        K.exports = {
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
      87762: (K) => {
        K.exports = {
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
      44367: (K) => {
        K.exports = {
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
      77408: (K) => {
        K.exports = {
          narrowWidth: "500px",
          Section: "_3Apb0bYbV5W1c7HG5T26XH",
          ChartContainer: "_23mKMjDPbjptriYDLI6HAk",
          Chart: "_28TwDjH899CiiJ8lJ1fFES",
        };
      },
      43047: (K) => {
        K.exports = {
          narrowWidth: "500px",
          avatarHolder: "nibodjvvrm86uCfnnAn4g",
          avatarStatus: "_3xUpb5DWXPFNcHHIcv-9pe",
          avatar: "_3h-QRJGxnVOIExtHD1R0f2",
          avatarFrame: "X_mJE4BYV5StDPwZhSiAu",
          avatarFrameImg: "_3fM0F85j3aWVzr4RJM9-eu",
        };
      },
      44533: (K) => {
        K.exports = {
          "duration-app-launch": "800ms",
          Icon: "_2V2sHETNfa62yMoDwSF3_t",
          IconGlow: "_3s4Rq3jnntBVP7HbJj1RMQ",
          AchievementIconWrapper: "_1fEbX-PfpZ2FhkhttWcm-V",
          RareAchievementIconGlowContainerRoot: "_2HUbCbZUn27MliiC8gRxGB",
          RareAchievementIconGlowContainer: "_2D_EJk8-jCnfqiwoKkOMVh",
          rotate: "_2liIQspBwdpNtEmYw2bU9j",
          RareAchievementNoAnimation: "_1a4bwiE4yUR3XXBKI6mKqt",
          RareAchievementIconGlow: "_1Z2eJs9-zNTKcWKy4M-oDE",
          HiddenLabel: "_1ABm6sfuqiZZDSL9z8mW1a",
          BackgroundAnimation: "_2jC4Eqt8IrbRbM81zvxlnW",
          "ItemFocusAnim-darkerGrey-nocolor": "_3jGCeVy7OzY5pw0Rpx0z8-",
          "ItemFocusAnim-darkerGrey": "_2Jqi29kzJtRTafvIOPyvAW",
          "ItemFocusAnim-darkGreySettings": "_2tg8Ji5QTXXXSzn1Q0HRa2",
          "ItemFocusAnim-darkGrey": "T-2rsbY05mXhgaIQkf73x",
          "ItemFocusAnim-grey": "_1WGat3-0-TCDKEtg7LEoB5",
          "ItemFocusAnim-translucent-white-10": "RkktEhJT7jnAfvbEiNBBH",
          "ItemFocusAnim-translucent-white-20": "_30c3lgfOmK8HMV6u21SQ42",
          "ItemFocusAnimBorder-darkGrey": "_1vYqEdzDmOIRAIgDNUHfBt",
          "ItemFocusAnim-green": "CrI_goODkSlbs2jjXglfz",
          focusAnimation: "_3xzftt0SCqsMfNLxtA825Q",
          hoverAnimation: "_10Y0xofBXAPurniv6K3_YV",
        };
      },
      6878: (K) => {
        K.exports = {
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
      15736: (K) => {
        K.exports = { SmallAvatar: "_2cuu0nLVc4medg6FpU6PQl" };
      },
    },
  ]);
})();
